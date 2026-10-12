// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

package main

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"log"
	"math/big"
	"net"
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
	redis          *redis.Client
	secret         string
	keySecret      string
	verifySlots    chan struct{}
	trustedProxies []*net.IPNet
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
		redis:          rdb,
		secret:         requiredEnv("ALTCHA_SECRET"),
		keySecret:      requiredEnv("ALTCHA_KEY_SECRET"),
		verifySlots:    make(chan struct{}, 8),
		trustedProxies: proxyNetworks(os.Getenv("TRUSTED_PROXY_CIDRS")),
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/chat/challenge", server.handleChallenge)
	mux.HandleFunc("POST /api/chat/verify", server.handleVerify)

	addr := envOr("LISTEN_ADDR", "127.0.0.1:18080")
	log.Printf("smart dolphin verification listening on %s", addr)
	httpServer := &http.Server{Addr: addr, Handler: securityHeaders(mux), ReadHeaderTimeout: 5 * time.Second, ReadTimeout: 10 * time.Second, WriteTimeout: 15 * time.Second, IdleTimeout: 30 * time.Second, MaxHeaderBytes: 16 << 10}
	log.Fatal(httpServer.ListenAndServe())
}

func (s verificationServer) handleChallenge(w http.ResponseWriter, r *http.Request) {
	if !s.allow(r.Context(), "challenge:"+s.clientIP(r), 30, 10*time.Minute) {
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
	ctx, cancel := context.WithTimeout(r.Context(), 10*time.Second)
	defer cancel()
	r = r.WithContext(ctx)
	if !s.allow(ctx, "verify:"+s.clientIP(r), 30, time.Minute) {
		writeJSON(w, 429, map[string]any{"ok": false, "error": "too_many_attempts"})
		return
	}
	select {
	case s.verifySlots <- struct{}{}:
		defer func() { <-s.verifySlots }()
	default:
		writeJSON(w, 503, map[string]any{"ok": false, "error": "verification_busy"})
		return
	}
	var body struct {
		Payload string `json:"payload"`
	}
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]any{"ok": false, "error": "invalid_json"})
		return
	}
	if !s.verify(r.Context(), body.Payload, s.clientIP(r)) {
		writeJSON(w, http.StatusUnprocessableEntity, map[string]any{"ok": false, "error": "verification_failed"})
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"ok": true})
}

func (s verificationServer) verify(ctx context.Context, encoded string, client string) bool {
	payload, ok := decodePayload(encoded)
	if !ok || !payloadLooksSane(payload) {
		return false
	}

	result, err := altcha.VerifySolution(altcha.VerifySolutionOptions{
		Challenge:              payload.Challenge,
		Solution:               payload.Solution,
		DeriveKey:              altcha.DeriveKeyPBKDF2(),
		HMACSignatureSecret:    s.secret,
		HMACKeySignatureSecret: s.keySecret,
	})
	if err != nil || !result.Verified || result.Expired {
		return false
	}

	ttl := time.Until(time.Unix(payload.Challenge.Parameters.ExpiresAt, 0))
	if ttl <= 0 {
		return false
	}
	consumed, err := s.redis.SetNX(ctx, replayKey(payload), "1", ttl).Result()
	return err == nil && consumed
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
	if len(p.Nonce) != 32 || len(p.Salt) != 32 || len(p.KeyPrefix) != 32 || len(p.KeySignature) != 64 {
		return false
	}
	if payload.Solution.Counter < 0 || payload.Solution.Counter > 25000 || len(payload.Solution.DerivedKey) != 64 {
		return false
	}
	return hexish(p.Nonce) && hexish(p.Salt) && hexish(p.KeyPrefix) && hexish(p.KeySignature) && hexish(payload.Solution.DerivedKey)
}

// A challenge signature identifies the proof globally, regardless of client address.
func replayKey(payload altcha.Payload) string {
	sum := sha256.Sum256([]byte(payload.Challenge.Signature))
	return "sdv:used:" + hex.EncodeToString(sum[:])
}

var rateScript = redis.NewScript(`local n=redis.call('INCR',KEYS[1]); if n==1 or redis.call('PTTL',KEYS[1])<0 then redis.call('PEXPIRE',KEYS[1],ARGV[1]) end; return n`)

func (s verificationServer) allow(ctx context.Context, key string, limit int64, window time.Duration) bool {
	count, err := rateScript.Run(ctx, s.redis, []string{"sdv:rate:" + key}, window.Milliseconds()).Int64()
	return err == nil && count <= limit
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

func proxyNetworks(value string) []*net.IPNet {
	var out []*net.IPNet
	for _, v := range strings.Split(value, ",") {
		v = strings.TrimSpace(v)
		if v == "" {
			continue
		}
		_, network, err := net.ParseCIDR(v)
		if err != nil {
			log.Fatalf("invalid trusted proxy CIDR: %s", v)
		}
		out = append(out, network)
	}
	return out
}
func (s verificationServer) clientIP(r *http.Request) string {
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return "invalid"
	}
	ip := net.ParseIP(host)
	if ip == nil {
		return "invalid"
	}
	for _, network := range s.trustedProxies {
		if network.Contains(ip) {
			if forwarded := net.ParseIP(strings.TrimSpace(r.Header.Get("X-Real-IP"))); forwarded != nil {
				return forwarded.String()
			}
			break
		}
	}
	return ip.String()
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
	if len(value) < 32 {
		log.Fatalf("%s requires at least 32 random bytes", key)
	}
	return value
}
