package main

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"github.com/alicebob/miniredis/v2"
	altcha "github.com/altcha-org/altcha-lib-go/v2"
	"github.com/redis/go-redis/v9"
	"net"
	"net/http/httptest"
	"strings"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

func testServer(t *testing.T) (verificationServer, *miniredis.Miniredis) {
	t.Helper()
	m := miniredis.RunT(t)
	s := verificationServer{redis: redis.NewClient(&redis.Options{Addr: m.Addr(), MaxRetries: -1}), secret: strings.Repeat("test-secret", 4), keySecret: strings.Repeat("key-secret", 4), verifySlots: make(chan struct{}, 8)}
	t.Cleanup(func() { s.redis.Close() })
	return s, m
}
func proof(t *testing.T, s verificationServer) string {
	t.Helper()
	counter := 3
	expires := time.Now().Add(5 * time.Minute)
	c, e := altcha.CreateChallenge(altcha.CreateChallengeOptions{Algorithm: verificationAlgorithm, Cost: verificationCost, Counter: &counter, DeriveKey: altcha.DeriveKeyPBKDF2(), ExpiresAt: &expires, HMACSignatureSecret: s.secret, HMACKeySignatureSecret: s.keySecret, KeyLength: verificationKeyLength})
	if e != nil {
		t.Fatal(e)
	}
	solution, e := altcha.SolveChallenge(altcha.SolveChallengeOptions{Challenge: c, CounterStep: 1, DeriveKey: altcha.DeriveKeyPBKDF2()})
	if e != nil || solution == nil {
		t.Fatal(e)
	}
	raw, _ := json.Marshal(altcha.Payload{Challenge: c, Solution: *solution})
	return base64.StdEncoding.EncodeToString(raw)
}
func TestConcurrentProofIsGlobalSingleUse(t *testing.T) {
	s, _ := testServer(t)
	encoded := proof(t, s)
	var accepted atomic.Int32
	var wg sync.WaitGroup
	for i := 0; i < 24; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			if s.verify(context.Background(), encoded, string(rune('a'+i))) {
				accepted.Add(1)
			}
		}(i)
	}
	wg.Wait()
	if accepted.Load() != 1 {
		t.Fatalf("accepted %d times", accepted.Load())
	}
	if s.verify(context.Background(), encoded, "changed-ip") {
		t.Fatal("replayed from different address")
	}
}
func TestRedisUnavailableFailsClosed(t *testing.T) {
	s, m := testServer(t)
	encoded := proof(t, s)
	m.Close()
	if s.verify(context.Background(), encoded, "client") {
		t.Fatal("consumption failure accepted")
	}
	if s.allow(context.Background(), "client", 1, time.Minute) {
		t.Fatal("rate failure accepted")
	}
}
func TestAtomicRateCounterTTL(t *testing.T) {
	s, m := testServer(t)
	for i := 0; i < 3; i++ {
		if !s.allow(context.Background(), "test", 3, time.Minute) {
			t.Fatal("too early")
		}
	}
	if s.allow(context.Background(), "test", 3, time.Minute) {
		t.Fatal("budget exceeded")
	}
	if m.TTL("sdv:rate:test") <= 0 {
		t.Fatal("no expiry")
	}
}
func TestClientAddressTrust(t *testing.T) {
	s, _ := testServer(t)
	r := httptest.NewRequest("GET", "/", nil)
	r.RemoteAddr = "192.0.2.5:4321"
	r.Header.Set("X-Real-IP", "198.51.100.4")
	if s.clientIP(r) != "192.0.2.5" {
		t.Fatal("spoof accepted")
	}
	_, trusted, _ := net.ParseCIDR("192.0.2.0/24")
	s.trustedProxies = []*net.IPNet{trusted}
	if s.clientIP(r) != "198.51.100.4" {
		t.Fatal("trusted proxy ignored")
	}
	r.Header.Set("X-Real-IP", "invalid:5000")
	if s.clientIP(r) != "192.0.2.5" {
		t.Fatal("invalid IP accepted")
	}
}
func TestVerifyRateAndConcurrency(t *testing.T) {
	s, _ := testServer(t)
	for i := 0; i < cap(s.verifySlots); i++ {
		s.verifySlots <- struct{}{}
	}
	r := httptest.NewRequest("POST", "/api/chat/verify", strings.NewReader(`{}`))
	r.RemoteAddr = "192.0.2.1:30"
	w := httptest.NewRecorder()
	s.handleVerify(w, r)
	if w.Code != 503 {
		t.Fatal(w.Code)
	}
}
