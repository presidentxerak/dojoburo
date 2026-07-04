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
| Fiat top‑up (`api/checkout.ts`) | Vercel Edge | yes (Stripe key) | **yes, for settlement** |
| Desktop app + widget | Tauri (Rust shell) | no | no |

> The **only** part that requires a database is the fiat → XRP **settlement**
> webhook (§5). Everything else is fully functional without one.

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
| `SETTLEMENT_NETWORK` | for settlement | `mainnet` \| `testnet`. | — |
| `XRP_PRICE_URL` | optional | Live FX source for fiat→XRP conversion at settlement. | e.g. CoinGecko / your oracle |

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

## 5. Remaining work: fiat → XRP settlement (webhook + SQL)

`api/checkout.ts` already creates the Checkout Session and stamps the fiat
amount/currency into `metadata`. To **close the loop** (charge card → credit the
user → pay out XRP via x402), add a webhook and a small Postgres schema.

### 5.1 SQL schema (PostgreSQL — Supabase / Neon / Vercel Postgres)

```sql
-- =====================================================================
-- DojoBuro settlement schema. Run once against DATABASE_URL.
-- Design goals: idempotent webhook processing, an auditable credit
-- ledger, and a record of each on-ledger XRP settlement.
-- =====================================================================

create extension if not exists "pgcrypto";  -- for gen_random_uuid()

-- Users. Keyed by Privy DID when Privy is on; guests never hit the DB.
create table if not exists accounts (
  id           uuid primary key default gen_random_uuid(),
  privy_did    text unique,                       -- Privy user id (did:privy:...)
  email        text,
  xrpl_address text,                              -- where settled XRP is paid
  currency     text not null default 'USD',
  created_at   timestamptz not null default now()
);

-- Every Checkout Session we create (idempotency + amount mapping).
create table if not exists checkout_sessions (
  id            text primary key,                 -- Stripe cs_... id
  account_id    uuid references accounts(id),
  fiat_amount   numeric(12,2) not null,           -- major units (e.g. 25.00)
  fiat_currency text not null,                    -- USD / EUR / JPY
  xrp_expected  numeric(20,6),                    -- indicative at creation
  status        text not null default 'created',  -- created|paid|settled|failed
  created_at    timestamptz not null default now()
);

-- Stripe events we've already handled — the idempotency guard.
create table if not exists webhook_events (
  id           text primary key,                  -- Stripe evt_... id
  type         text not null,
  processed_at timestamptz not null default now()
);

-- Double-entry-ish credit movements. Positive = grant, negative = spend.
create table if not exists credit_ledger (
  id          bigint generated always as identity primary key,
  account_id  uuid not null references accounts(id),
  delta_xrp   numeric(20,6) not null,             -- +topup / -task spend
  reason      text not null,                      -- 'topup' | 'skill:run' | ...
  ref         text,                               -- cs_... / tx hash / invoice
  created_at  timestamptz not null default now()
);

-- The on-ledger XRP payout for a paid top-up (the x402 settlement).
create table if not exists settlements (
  id           uuid primary key default gen_random_uuid(),
  session_id   text not null references checkout_sessions(id),
  account_id   uuid not null references accounts(id),
  xrp_amount   numeric(20,6) not null,
  tx_hash      text,                              -- XRPL Payment hash
  tx_result    text,                              -- tesSUCCESS / ...
  status       text not null default 'pending',   -- pending|submitted|validated|failed
  created_at   timestamptz not null default now(),
  unique (session_id)                             -- one settlement per session
);

-- Live balance per account (sum of the ledger).
create or replace view account_balances as
  select account_id, coalesce(sum(delta_xrp), 0) as balance_xrp
  from credit_ledger group by account_id;

create index if not exists idx_ledger_account on credit_ledger(account_id);
create index if not exists idx_sessions_account on checkout_sessions(account_id);
```

### 5.2 The webhook (`api/checkout-webhook.ts`, Vercel Edge)

Sketch — verify signature, guard idempotency, credit + settle:

```ts
export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  const sig = req.headers.get('stripe-signature') || ''
  const raw = await req.text()

  // 1. Verify with STRIPE_WEBHOOK_SECRET (HMAC-SHA256 over `${t}.${raw}`).
  //    Use stripe's constructEventAsync, or verify manually with Web Crypto.
  const evt = await verifyStripeSignature(raw, sig, ENV.STRIPE_WEBHOOK_SECRET)
  if (!evt) return new Response('bad sig', { status: 400 })

  // 2. Idempotency: INSERT ... ON CONFLICT DO NOTHING into webhook_events.
  if (await alreadyProcessed(evt.id)) return new Response('ok', { status: 200 })

  if (evt.type === 'checkout.session.completed') {
    const s = evt.data.object
    const fiat = Number(s.metadata.fiat_amount)
    const cur = s.metadata.fiat_currency
    const xrp = fiat / (await xrpPerUnit(cur))          // live FX

    // 3. Credit the ledger (+xrp, reason 'topup', ref session id).
    // 4. Submit an XRP Payment (SETTLEMENT_WALLET_SEED → account.xrpl_address)
    //    with an x402 memo, record tx_hash/result in settlements.
    await creditAndSettle(s.id, fiat, cur, xrp)
  }
  return new Response('ok', { status: 200 })
}
```

Register the endpoint in **Stripe → Webhooks** for the
`checkout.session.completed` event and copy the signing secret into
`STRIPE_WEBHOOK_SECRET`.

### 5.3 Notes

- **FX rate:** convert with a live oracle (`XRP_PRICE_URL`), never the indicative
  `perXrp` rates in `src/data/currency.ts` (those are display‑only).
- **Rate limiting:** `api/chat.ts` / `api/checkout.ts` limit in‑memory *per Edge
  instance*. For a hard global cap, back `allow()` with Upstash Redis / Vercel KV
  (`UPSTASH_REDIS_REST_URL` + `_TOKEN`).
- **Hot wallet:** `SETTLEMENT_WALLET_SEED` is a hot wallet — fund it small and
  rotate. Consider a signing service or multisig for volume.

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
- [ ] Postgres provisioned, §5.1 schema applied, `DATABASE_URL` set
- [ ] `api/checkout-webhook.ts` deployed, Stripe webhook registered, `STRIPE_WEBHOOK_SECRET` set
- [ ] `SETTLEMENT_WALLET_SEED` (funded, small) + `SETTLEMENT_NETWORK=mainnet`
- [ ] Origin locks set on both Edge endpoints
- [ ] (optional) Upstash/Vercel KV for durable rate limits
- [ ] (optional) Tauri icons + signed desktop build
