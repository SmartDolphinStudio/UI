# Smart Dolphin Verification

Smart Dolphin Verification is a reusable human-verification package combining a PlayCaptcha claw-machine interaction with an ALTCHA proof-of-work backend check.

![Smart Dolphin Verification demo](./public/demo-final.gif)

[Download the MP4 demo](./public/demo.mp4)

The visual layer stays playful, while the backend performs signed challenge verification, expiration checks, rate limiting and one-time replay protection.

## Features

- Minimal white demo page with a single login button
- Reusable React verification component
- Reusable TypeScript SDK
- Go backend reference API
- Redis-backed rate limiting and replay prevention
- Fully English user interface

## API

API base URL:

```text
https://api.smartdolphin.top
```

Challenge endpoint (complete URL):

```text
GET https://api.smartdolphin.top/api/chat/challenge
```

Verification endpoint (complete URL):

```text
POST https://api.smartdolphin.top/api/chat/verify
Content-Type: application/json

{
  "payload": "<base64 encoded Smart Dolphin Verification payload>"
}
```

Successful verification response:

```json
{
  "ok": true
}
```

Failed verification response:

```json
{
  "ok": false,
  "error": "verification_failed"
}
```

## SDK Usage

```ts
import { createSmartDolphinVerification } from './src/sdk/smartDolphinVerification';

const payload = await createSmartDolphinVerification({
  apiBase: 'https://api.smartdolphin.top',
  challengePath: '/api/chat/challenge',
});
```

Send `payload` to your protected backend endpoint. The receiving backend should verify it with the Go logic in `backend/main.go` or an equivalent implementation.

## React Component

```tsx
import { SmartDolphinVerification } from './src/components/SmartDolphinVerification';

<SmartDolphinVerification
  open={open}
  onClose={() => setOpen(false)}
  onVerified={(payload) => submitLogin(payload)}
  onError={(message) => setError(message)}
/>
```

## Backend Environment

The backend intentionally does not ship Redis. Each service owner connects their own Redis instance.

```env
LISTEN_ADDR=127.0.0.1:18080
REDIS_ADDR=127.0.0.1:6379
REDIS_PASSWORD=
ALTCHA_SECRET=<independent random secret, at least 32 bytes>
ALTCHA_KEY_SECRET=<independent random secret, at least 32 bytes>
```

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:1313`.

## Build

```bash
npm run build
```

## Backend Run

```bash
cd backend
go mod tidy
go run .
```

## License

GPL-2.0-only


## Server acceptance contract

`onProofReady` means the browser computed a proof. The sample then posts it to the server, shows the acceptance result, and does not create an authenticated account/session. A production protected business endpoint must verify and atomically consume the proof itself before its protected action. Do not accept the browser callback or a prior client's success flag as authorization. A consumed proof cannot be reused, including from another IP. Redis errors fail closed. The standalone verify endpoint is only a demo; do not pre-consume a proof there when a real business endpoint will consume it.

The SDK uses the same origin by default. Vite proxies `/api` to `127.0.0.1:18080`. In production serve UI/API at the same origin. `TRUSTED_PROXY_CIDRS` is empty by default; configure only proxies that overwrite X-Real-IP and prevent direct bypass. Both challenge and verification are limited; verification has a bounded concurrency budget and HTTP/body time limits. Redis rate operations use an atomic Lua script and proof consumption uses SET NX with expiry.
