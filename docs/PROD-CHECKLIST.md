# DojoBuro — Production checklist

Operator guide to turn each feature from "coded" to "live". The code is complete;
this is the configuration (env + external accounts + DB) that activates it.

Legend: **R** = required for that feature · **O** = optional (sane default).
Replace `<SITE>` with your exact origin, e.g. `https://www.dojoburo.com` (no
trailing slash).

---

## 0. Verified in code (no action needed)

- **Code ↔ DB schema match**: every SQL statement in `api/` matches the tables and
  columns created by `db/schema.sql` + `db/connectors.sql` + `db/orgs.sql`. No
  column/table mismatch → no DB runtime errors. `scripts/test-orgs.mjs` and
  `scripts/test-sync.mjs` apply those files and exercise them against a real
  Postgres; point `TEST_DATABASE_URL` at a throwaway database to run them.
- **Runtime deps present**: `pg` (Postgres) and `xrpl` are installed. Stripe is
  called over raw HTTP with a Web-Crypto signature check — no `stripe` SDK
  needed, so nothing is missing.
- **Graceful degradation**: any unconfigured feature returns a clear
  `not_configured` / `needs a key` / `Set up` state — it never fakes a result and
  never crashes the app.

## 1. Database (Supabase) — DONE if both files applied

| Step | Command | Status |
|---|---|---|
| Settlement schema | run `db/schema.sql` | ✅ applied (credit_ledger tested) |
| Connectors schema | run `db/connectors.sql` | ⬜ apply this (adds `client_ref`, `connections`, `work_usage`) |
| Organisations + sync | run `db/orgs.sql` | ⬜ apply this (adds `organisations`, `org_members`, `org_invites`, `org_docs`, `org_doc_revisions`, and `org_id` on `connections`) |

Until `db/orgs.sql` is applied, `/api/org` and `/api/docs` answer
`{ok:false,error:'no_backend'}` and the app stays exactly the single-player,
browser-only product it was — nothing breaks, nothing syncs. Applying it is what
turns a company into something two people can share. There is no backfill: every
existing account becomes an organisation of one, created the first time it is
needed, and the documents already in someone's browser are offered to it on
their next visit.
| Lock tables (Supabase) | `enable row level security` on all 7 tables + `alter view account_balances set (security_invoker = on)` | ⬜ recommended |

The app connects as the `postgres` role via `DATABASE_URL`, which **bypasses RLS**,
so enabling RLS locks the public PostgREST/anon API without affecting the app.

## 2. Feature matrix

| Feature | Env required | External step | Verify | Status* |
|---|---|---|---|---|
| **Client (3D office, Testnet wallets, x402)** | — | — | open the app | ✅ always on |
| **Support chatbot AI** | ≥1 of `GROQ_API_KEY` / `GEMINI_API_KEY` / `CEREBRAS_API_KEY` / `OPENROUTER_API_KEY` | — | ask an off-topic question → it answers via LLM | ✅ (keys set) |
| **Card top-up → XRP** | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `CHECKOUT_SITE_URL`, `DATABASE_URL` | Register webhook `<SITE>/api/checkout-webhook` in Stripe (event `checkout.session.completed`) | do a test-mode purchase → row in `checkout_sessions` | ⚠️ verify webhook |
| **On-ledger XRP delivery (on-ramp)** | `SETTLEMENT_WALLET_SEED`, `SETTLEMENT_NETWORK` | Fund the hot wallet (small) on the chosen network | `settlements.status = validated` after top-up | ⚠️ check network = mainnet only if wallet is mainnet |
| **Pending-settlement cron** | `CRON_SECRET`, `DATABASE_URL` | Vercel Cron already set (`*/15`) in `vercel.json` | Vercel → Cron logs 200 | ✅ (secret set) |
| **Free text deliverables (PRD, spec…)** | `WORK_CASCADE` + a free LLM key (reuses the support keys) | — | run a text task on an agent | ✅ (keys set) |
| **Real Claude deliverables (design system, tool-acting) + BYOK key** | `CONNECTOR_ENC_KEY`, `DATABASE_URL` | user adds their own Claude key in Studio → Billing | Studio → Billing → "Save key" succeeds | ❌ **needs `CONNECTOR_ENC_KEY`** |
| **App connectors (Notion, GitHub, Gmail…)** | `CONNECTOR_ENC_KEY`, `DATABASE_URL`, `<APP>_CLIENT_ID/SECRET` (+ `<APP>_MCP_URL` for Gmail/Slack/…), `CONNECT_SITE_URL` (or falls back to `CHECKOUT_SITE_URL`) | Create an OAuth app per provider, redirect `<SITE>/api/connect` | connector shows **Connect** instead of **Set up** | ❌ needs keys |
| **Xaman Mainnet signing** | `VITE_XUMM_API_KEY` | Whitelist `<SITE>` in the Xaman app's Origin/Redirect URIs | Connect wallet on mobile | ⚠️ check origin whitelist |
| **Portable account (Privy)** | `VITE_PRIVY_APP_ID` | Create the Privy app | header shows profile after sign-in | ✅ (set) |

\* Status inferred from the environment-variable list you shared — I can't read
the **values**, only which keys exist. Items marked ⚠️ depend on a value/step I
can't see; confirm them yourself.

## 3. The one gap to close next: `CONNECTOR_ENC_KEY`

It gates **two** things: the OAuth token vault **and** the BYOK Claude key (the
key is sealed into the same `connections` table). Without it, the design system,
tool-acting deliverables, and every connector stay off.

```bash
# generate a 32-byte key (run locally, paste the output into Vercel)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Set it as `CONNECTOR_ENC_KEY` (Production + Preview). `CONNECT_STATE_SECRET`
falls back to it, so you don't need a separate value.

## 4. Live health checks (run after each change)

```bash
# Backend + vault up? Expect {"ok":true,"backend":true,...}
curl "https://<SITE>/api/connect?action=list&client=diag"

# Support LLM reachable? Expect a JSON reply (not an error)
curl -X POST "https://<SITE>/api/chat" -H 'content-type: application/json' \
  -H "origin: https://<SITE>" \
  -d '{"messages":[{"role":"user","content":"what does a task cost?"}]}'

# Checkout configured? Expect a hosted-checkout url, or {"error":"not_configured"}
curl -X POST "https://<SITE>/api/checkout" -H 'content-type: application/json' \
  -H "origin: https://<SITE>" \
  -d '{"amount":10,"currency":"USD","email":"you@example.com","kind":"credits"}'
```

## 5. Value-level things to double-check (I can't see them)

- `CHECKOUT_SITE_URL`, `CHECKOUT_ALLOWED_ORIGIN`, `SUPPORT_ALLOWED_ORIGIN` = your
  **exact** prod origin (scheme + host, no path, no trailing slash), all matching.
- `SETTLEMENT_NETWORK` = `mainnet` **only** if `SETTLEMENT_WALLET_SEED` is a funded
  Mainnet wallet. If it's `testnet`, top-ups deliver valueless Testnet XRP.
- Stripe webhook endpoint registered and its signing secret equals
  `STRIPE_WEBHOOK_SECRET`.
- Xaman app Origin/Redirect URIs include `<SITE>` (otherwise `access_denied`).
