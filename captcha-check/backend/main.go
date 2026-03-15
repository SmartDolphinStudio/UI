// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

package main

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"log"
	"math/big"
	"net/http"
	"os"
	"strings"
	"time"

	altcha "github.com/altcha-org/altcha-lib-go/v2"
	"github.com/redis/go-redis/v9"
)

const (
	verificationAlgorithm = "PBKDF2/SHA-256"
	verificationCost      = 4200
	verificationKeyLength = 32
)

type verificationServer struct {
	redis     *redis.Client
	secret    string
	keySecret string
}

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     envOr("REDIS_ADDR", "127.0.0.1:6379"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})
	if err := rdb.Ping(context.Background()).Err(); err != nil {
		log.Fatalf("redis: %v", err)
	}

	server := verificationServer{
		redis:     rdb,
		secret:    requiredEnv("ALTCHA_SECRET"),
		keySecret: requiredEnv("ALTCHA_KEY_SECRET"),
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/chat/challenge", server.handleChallenge)
	mux.HandleFunc("POST /api/chat/verify", server.handleVerify)

	addr := envOr("LISTEN_ADDR", "127.0.0.1:18080")
	log.Printf("smart dolphin verification listening on %s", addr)
	log.Fatal(http.ListenAndServe(addr, securityHeaders(mux)))
}

func (s verificationServer) handleChallenge(w http.ResponseWriter, r *http.Request) {
	if !s.allow(r.Context(), "challenge:"+clientIP(r), 30, 10*time.Minute) {
		writeJSON(w, http.StatusTooManyRequests, map[string]any{"ok": false, "error": "too_many_attempts"})
		return
	}

	counter, err := randomCounter(2800, 5400)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]any{"ok": false, "error": "verification_unavailable"})
		return
	}

	expiresAt := time.Now().Add(5 * time.Minute)
	challenge, err := altcha.CreateChallenge(altcha.CreateChallengeOptions{
		Algorithm:              verificationAlgorithm,
		Cost:                   verificationCost,
		Counter:                &counter,
		DeriveKey:              altcha.DeriveKeyPBKDF2(),
		ExpiresAt:              &expiresAt,
		HMACSignatureSecret:    s.secret,
		HMACKeySignatureSecret: s.keySecret,
		KeyLength:              verificationKeyLength,
	})
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]any{"ok": false, "error": "verification_unavailable"})
		return
	}

	writeJSON(w, http.StatusOK, challenge)
}

func (s verificationServer) handleVerify(w http.ResponseWriter, r *http.Request) {
	var body struct {
		Payload string `json:"payload"`
	}
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]any{"ok": false, "error": "invalid_json"})
		return
	}
	if !s.verify(r.Context(), body.Payload, clientIP(r)) {
		writeJSON(w, http.StatusUnprocessableEntity, map[string]any{"ok": false, "error": "verification_failed"})
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"ok": true})
}

func (s verificationServer) verify(ctx context.Context, encoded string, client string) bool {
	payload, ok := decodePayload(encoded)
	if !ok || !payloadLooksSane(payload) || s.wasReplay(ctx, payload, client) {
		return false
	}

	result, err := altcha.VerifySolution(altcha.VerifySolutionOptions{
		Challenge:           payload.Challenge,
		Solution:            payload.Solution,
		DeriveKey:           altcha.DeriveKeyPBKDF2(),
		HMACSignatureSecret: s.secret,
	})
	if err != nil || !result.Verified || result.Expired {
		return false
	}

	s.markUsed(ctx, payload, client)
	return true
}

func decodePayload(encoded string) (altcha.Payload, bool) {
	if encoded == "" || len(encoded) > 8192 {
		return altcha.Payload{}, false
	}
	raw, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		raw, err = base64.RawStdEncoding.DecodeString(encoded)
	}
	if err != nil || len(raw) > 6144 {
		return altcha.Payload{}, false
	}
	var payload altcha.Payload
	if err := json.Unmarshal(raw, &payload); err != nil {
		return altcha.Payload{}, false
	}
	return payload, true
}

func payloadLooksSane(payload altcha.Payload) bool {
	p := payload.Challenge.Parameters
	if payload.Challenge.Signature == "" || p.Algorithm != verificationAlgorithm {
		return false
	}
	if p.Cost != verificationCost || p.KeyLength != verificationKeyLength {
		return false
	}
	if p.ExpiresAt <= time.Now().Unix() || p.ExpiresAt > time.Now().Add(6*time.Minute).Unix() {
		return false
	}
	if len(p.Nonce) != 24 || len(p.Salt) != 24 || len(p.KeyPrefix) != 32 || len(p.KeySignature) != 64 {
		return false
	}
	if payload.Solution.Counter < 0 || payload.Solution.Counter > 25000 || len(payload.Solution.DerivedKey) != 64 {
		return false
	}
	return hexish(p.Nonce) && hexish(p.Salt) && hexish(p.KeyPrefix) && hexish(p.KeySignature) && hexish(payload.Solution.DerivedKey)
}

func (s verificationServer) wasReplay(ctx context.Context, payload altcha.Payload, client string) bool {
	exists, err := s.redis.Exists(ctx, replayKey(payload, client)).Result()
	return err != nil || exists > 0
}

func (s verificationServer) markUsed(ctx context.Context, payload altcha.Payload, client string) {
	ttl := time.Until(time.Unix(payload.Challenge.Parameters.ExpiresAt, 0))
	if ttl < time.Minute {
		ttl = time.Minute
	}
	_ = s.redis.Set(ctx, replayKey(payload, client), "1", ttl).Err()
}

func replayKey(payload altcha.Payload, client string) string {
	return "sdv:used:" + client + ":" + payload.Challenge.Parameters.Nonce + ":" + payload.Solution.DerivedKey[:16]
}

func (s verificationServer) allow(ctx context.Context, key string, limit int64, window time.Duration) bool {
	count, err := s.redis.Incr(ctx, "sdv:rate:"+key).Result()
	if err != nil {
		return false
	}
	if count == 1 {
		_ = s.redis.Expire(ctx, "sdv:rate:"+key, window).Err()
	}
	return count <= limit
}

func randomCounter(min int, max int) (int, error) {
	if max <= min {
		return min, nil
	}
	n, err := rand.Int(rand.Reader, big.NewInt(int64(max-min)))
	if err != nil {
		return 0, err
	}
	return min + int(n.Int64()), nil
}

func clientIP(r *http.Request) string {
	if ip := strings.TrimSpace(r.Header.Get("X-Real-IP")); ip != "" {
		return ip
	}
	if ip := strings.TrimSpace(r.Header.Get("CF-Connecting-IP")); ip != "" {
		return ip
	}
	return r.RemoteAddr
}

func hexish(value string) bool {
	if value == "" {
		return false
	}
	for _, char := range value {
		if !(char >= '0' && char <= '9' || char >= 'a' && char <= 'f' || char >= 'A' && char <= 'F') {
			return false
		}
	}
	return true
}

func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "no-store")
		w.Header().Set("X-Content-Type-Options", "nosniff")
		next.ServeHTTP(w, r)
	})
}

func writeJSON(w http.ResponseWriter, status int, value any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(value)
}

func envOr(key string, fallback string) string {
	if value := strings.TrimSpace(os.Getenv(key)); value != "" {
		return value
	}
	return fallback
}

func requiredEnv(key string) string {
	value := strings.TrimSpace(os.Getenv(key))
	if value == "" {
		log.Fatalf("missing %s", key)
	}
	return value
}
