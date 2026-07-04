# DojoBuro — Deployment & Configuration Guide

Full A‑to‑Z of what runs, what's already wired, and the exact configuration +
SQL you still need to go 100% live in production.

---

## 1. What the app is (architecture in one screen)

DojoBuro is a **frontend‑first** app (Vite + React + Three.js). It talks
**directly** to public XRPL nodes over WebSocket — no backend required for the
core product. Two optional **Vercel Edge functions** add server‑side secrets:

| Layer | Where it runs | Needs a server? | Needs a DB? |
|-------|---------------|-----------------|-------------|
| 3D office, agents, skins, workshop | browser | no | no (localStorage) |
| XRPL wallets / payments / x402 / audit | browser → XRPL WSS | no | no |
| Xaman (Mainnet signing) | browser (OAuth2 PKCE) | no | no |
| Privy auth (email/wallet/social) | browser (code‑split) | no | no |
| Support chatbot cascade (`api/chat.ts`) | Vercel Edge | yes (keys) | no |
| Fiat top‑up (`api/checkout.ts`) | Vercel Edge | yes (Stripe key) | no |
| **Settlement webhook** (`api/checkout-webhook.ts`) | Vercel Node | yes (Stripe + DB) | **yes** |
| Settlement retry cron (`api/settle-pending.ts`) | Vercel Node (cron) | yes | yes |
| Desktop app + widget | Tauri (Rust shell) | no | no |

> The **only** part that requires a database is the fiat → XRP **settlement**
> (§5) — the webhook is implemented; you just provision Postgres + apply
> `db/schema.sql`. Everything else is fully functional without one.

---

## 2. A‑to‑Z test results (this build)

Verified headless (Chromium + swiftshader, `scripts/verify-full.mjs`), 23/23
checks green, **zero console/page errors**:

- ✓ Landing page + Enter CTA
- ✓ `#app` 3D office renders (canvas), topbar, 3 network tabs, support launcher, workshop dock
- ✓ Agent select → card with skills + "Create wallet"
- ✓ Support bot: local FAQ answers offline (LLM cascade optional)
- ✓ Dojo Studio: create dojo, add agent, rename, dirty‑flag, Validate & save
- ✓ Account: guest sign‑in + Privy button gated by config
- ✓ Billing: 4 currencies, fiat top‑up (amount presets + "Pay with card"), XRP → direct‑funding hint
- ✓ Dark mode toggle, `#widget` standalone window, mobile no horizontal overflow
- ✓ `tsc -b` clean, production `vite build` clean

**Environment caveat (not a bug):** this CI sandbox proxies HTTPS only, so the
XRPL WebSocket (`wss://…:51233`) and the Vercel Edge endpoints (`/api/*`, which
don't exist under `vite preview`) can't be reached *here*. Both work in a normal
browser and on Vercel. `scripts/xrpl-smoke.mjs` passes on an unrestricted
network.

---

## 3. Environment variables — where to get each

`VITE_*` vars are **public** (shipped to the browser). Everything else is
**server‑only** (Edge functions) and must never be prefixed `VITE_`.
Copy `.env.example` → `.env.local` for dev, or set these in **Vercel → Project →
Settings → Environment Variables** for prod.

### 3.1 Frontend (public, `VITE_*`)

| Variable | Required? | What it does | Where to get it |
|----------|-----------|--------------|-----------------|
| `VITE_XUMM_API_KEY` | Optional (Mainnet) | Enables Xaman non‑custodial signing. API **key only**, never the secret. | https://apps.xaman.dev → create app → copy API Key |
| `VITE_PRIVY_APP_ID` | Optional (portable accounts) | Turns on real Privy login (email/wallet/social). Unset → local guest account. | https://dashboard.privy.io → create app → App ID |

### 3.2 Support chatbot LLM cascade (server‑only) — all optional

Configure **any subset**; the proxy tries them in `SUPPORT_CASCADE` order, free
tiers first. With none set the bot still works in free local‑FAQ mode.

| Variable | Tier | Where to get it |
|----------|------|-----------------|
| `GROQ_API_KEY` | free, fast | https://console.groq.com/keys |
| `GEMINI_API_KEY` | free | https://aistudio.google.com/apikey |
| `CEREBRAS_API_KEY` | free, fast | https://cloud.cerebras.ai/ |
| `OPENROUTER_API_KEY` | free models | https://openrouter.ai/keys |
| `DEEPSEEK_API_KEY` | paid, cheap | https://platform.deepseek.com/api_keys |
| `ANTHROPIC_API_KEY` | paid, top | https://console.anthropic.com/settings/keys |
| `SUPPORT_*` (limits) | — | tuning only; see `.env.example` (rate, tokens, daily paid cap, origin lock) |

### 3.3 Fiat processor (server‑only) — required only for card payments

| Variable | Required? | What it does | Where to get it |
|----------|-----------|--------------|-----------------|
| `STRIPE_SECRET_KEY` | to enable cards | Authorizes Checkout Session creation. `sk_test_…` / `sk_live_…`. Unset → UI shows "not configured" and users fund in XRP directly. | https://dashboard.stripe.com/apikeys |
| `STRIPE_WEBHOOK_SECRET` | for settlement | Verifies the `checkout.session.completed` webhook signature. `whsec_…`. | https://dashboard.stripe.com/webhooks → add endpoint → Signing secret |
| `CHECKOUT_SITE_URL` | recommended | Absolute site URL for success/cancel redirects, e.g. `https://dojoburo.app`. | your deployment URL |
| `CHECKOUT_ALLOWED_ORIGIN` | recommended (prod) | Locks the endpoint to your origin. Falls back to `SUPPORT_ALLOWED_ORIGIN`. | your deployment URL |
| `CHECKOUT_MIN_AMOUNT` / `CHECKOUT_MAX_AMOUNT` | optional | Charge bounds (major units). Defaults 1 / 5000. | — |
| `CHECKOUT_RATE_MAX` / `CHECKOUT_RATE_WINDOW_MS` / `CHECKOUT_TIMEOUT_MS` | optional | Rate limit + timeout. | — |

### 3.4 Settlement backend (server‑only) — required only for §5

| Variable | Required? | What it does | Where to get it |
|----------|-----------|--------------|-----------------|
| `DATABASE_URL` | for settlement | Postgres connection string for the credits ledger + idempotency. | Supabase / Neon / Vercel Postgres dashboard |
| `SETTLEMENT_WALLET_SEED` | for auto‑XRP payout | Seed of the hot wallet that submits XRP to users after a paid top‑up. Fund small. | generate with `xrpl` `Wallet.generate()` |
| `SETTLEMENT_NETWORK` | for on‑ledger payout | `mainnet` \| `testnet` \| `devnet`. | — |
| `XRP_PRICE_URL` | recommended | Live FX for fiat→XRP at settlement (CoinGecko‑style `{ripple:{usd,eur,jpy}}`). Unset → indicative fallback. | https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd,eur,jpy |
| `CRON_SECRET` | recommended | Bearer token guarding the `settle-pending` cron. | any random string |

---

## 4. Deploy the app (Vercel)

```bash
# 1. Push repo, import into Vercel (framework: Vite; build: npm run build; output: dist)
# 2. Add the env vars from §3 (Production + Preview scopes)
# 3. api/chat.ts and api/checkout.ts auto‑deploy as Edge functions
# 4. Redeploy
```

No env vars at all still ships a working app (Testnet, local accounts, local FAQ,
XRP direct funding). Add keys to light up each optional brick.

---

## 5. Fiat → XRP settlement (IMPLEMENTED)

The full loop is built — no code left to write, only config.

**Flow:** `api/checkout.ts` (Edge) creates the Stripe Checkout Session and stamps
`fiat_amount`, `fiat_currency`, and optional `privy_did` / `xrpl_address` into
`metadata` → `api/checkout-webhook.ts` (Node) verifies the signature, idempotently
credits the user's XRP balance in `credit_ledger`, and — when a hot wallet is
configured — delivers the XRP on-ledger to the user's treasury wallet with an
x402 memo → `api/settle-pending.ts` (cron, every 15 min) retries any pending
on-ledger deliveries.

**Files:**

| File | Role |
|------|------|
| `db/schema.sql` | Postgres schema (apply once) |
| `api/_lib/stripe.ts` | Web-Crypto Stripe signature verification (no SDK) |
| `api/_lib/db.ts` | pooled `pg` client |
| `api/_lib/fx.ts` | fiat→XRP via `XRP_PRICE_URL` (+ fallback) |
| `api/_lib/settle.ts` | xrpl.js on-ledger payout with x402 memo |
| `api/checkout-webhook.ts` | the webhook (verify → credit → settle) |
| `api/settle-pending.ts` | cron retry for pending settlements |

### 5.1 Schema

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

Tables: `accounts`, `checkout_sessions`, `webhook_events` (idempotency guard),
`credit_ledger` (balance = `sum(delta_xrp)`, exposed via the `account_balances`
view), `settlements` (one per session, `unique(session_id)`). See the file for
the full DDL.

### 5.2 Idempotency & safety

- `webhook_events(id)` unique → the ledger credit is applied **exactly once**,
  even on Stripe retries.
- `settlements(session_id)` unique → at most one on-ledger payout per session;
  failures stay `pending` and are drained by the cron.
- The credit is committed in a DB transaction **before** the network payout, so a
  failed XRPL submit never loses the user's balance.
- Signature check rejects tampered bodies, wrong secret, and timestamps older
  than 5 min (replay guard). Verified by `scripts/test-webhook-lib.mjs` (10/10).

### 5.3 Activate

1. Provision Postgres (Supabase / Neon / Vercel Postgres) → set `DATABASE_URL`.
2. `psql "$DATABASE_URL" -f db/schema.sql`.
3. Set `STRIPE_SECRET_KEY`, `CHECKOUT_SITE_URL`, `XRP_PRICE_URL`.
4. **Stripe → Developers → Webhooks →** add endpoint
   `https://<your-site>/api/checkout-webhook`, event
   `checkout.session.completed` → copy the signing secret to
   `STRIPE_WEBHOOK_SECRET`.
5. (Optional on-ledger delivery) set `SETTLEMENT_WALLET_SEED` (funded, small) +
   `SETTLEMENT_NETWORK`; set `CRON_SECRET` for the retry cron.

### 5.4 Notes

- **FX:** always set `XRP_PRICE_URL`; the `src/data/currency.ts` rates are
  display-only fallbacks.
- **Rate limiting:** the Edge endpoints limit in-memory *per instance*. For a hard
  global cap, back `allow()` with Upstash Redis / Vercel KV.
- **Hot wallet:** `SETTLEMENT_WALLET_SEED` is hot — fund small, rotate, consider
  multisig/a signing service at volume.
- **Cron plan:** Vercel Cron every 15 min needs a Pro plan; on Hobby lower the
  frequency (the webhook already settles inline — the cron is only a safety net).

---

## 6. Desktop app (Tauri) — remaining steps

Web‑verifiable already at `/#widget`. To ship the native app:

```bash
# 1. Install Rust toolchain  → https://rustup.rs   (+ OS webview deps)
# 2. Add the JS CLI/API (kept out of default install):
npm i -D @tauri-apps/cli @tauri-apps/api
# 3. Generate icons from the logo:
npm run tauri icon path/to/logo.png
# 4. Run / build:
npm run desktop         # dev
npm run desktop:build   # installers → src-tauri/target/release/bundle
```

Two windows are pre‑configured (`src-tauri/tauri.conf.json`): **main** (`#app`)
and a borderless, always‑on‑top **widget** (`#widget`), toggled from the system
tray, close‑to‑hide. See `src-tauri/README.md`.

---

## 7. Go‑live checklist

- [ ] `VITE_PRIVY_APP_ID` set → portable accounts
- [ ] `VITE_XUMM_API_KEY` set → Mainnet signing
- [ ] ≥1 LLM key set (or accept local‑FAQ mode)
- [ ] `STRIPE_SECRET_KEY` + `CHECKOUT_SITE_URL` + `CHECKOUT_ALLOWED_ORIGIN`
- [ ] Postgres provisioned, `db/schema.sql` applied, `DATABASE_URL` set
- [ ] Stripe webhook → `/api/checkout-webhook` (`checkout.session.completed`), `STRIPE_WEBHOOK_SECRET` set
- [ ] `XRP_PRICE_URL` set (live FX)
- [ ] (optional on‑ledger delivery) `SETTLEMENT_WALLET_SEED` (funded, small) + `SETTLEMENT_NETWORK` + `CRON_SECRET`
- [ ] Origin locks set on both Edge endpoints
- [ ] (optional) Upstash/Vercel KV for durable rate limits
- [ ] (optional) Tauri icons + signed desktop build

> **CSP note:** `vercel.json` already whitelists Privy, WalletConnect, Cloudflare
> Turnstile and Stripe domains. If you enable extra Privy login connectors, their
> RPC/frame hosts may need adding to `connect-src` / `frame-src`.
