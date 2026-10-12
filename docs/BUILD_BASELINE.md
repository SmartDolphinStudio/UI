# Reproducible build baseline

Node 24.20.0 and npm 11.19.0. Each application uses its committed package-lock.json; run npm ci followed by npm run build. chart-kit commits all referenced TypeScript configuration. The older untracked pnpm lock is superseded by the reviewed npm lock. Captcha backend: Go 1.26.5. Run node scripts/generate-manifest.mjs in chart-kit; missing resources fail generation. All 47 diagram directories are represented.
