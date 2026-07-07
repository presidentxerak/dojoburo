# DojoBuro — Real agent work: Claude deliverables + tool connectors

This is the layer where an agent stops *animating* work and starts *doing* it.
Two capabilities:

1. **Claude-powered deliverables** — each agent function runs a real Claude task
   and returns a genuine artifact (a **design system** via *Claude Design*, a PRD,
   a tech spec, a GTM campaign, a financial model…). Rendered in-app, downloadable.
2. **Tool connectors** — a user "branches" real tools onto an agent (Notion,
   GitHub, Gmail, Slack, Linear, Stripe, Figma, Drive). The OAuth token is stored
   **encrypted server-side** and exposed to Claude as a **remote MCP server** at
   run time, so the agent *acts inside the tool* (creates the Notion page, opens
   the PR, drafts the email).

Everything is **config-gated**: with nothing set, the app keeps its built-in XRPL
skills and animations — nothing breaks.

---

## Architecture

```
Browser (cockpit)                     Vercel server (secrets live here)          External
────────────────                      ─────────────────────────────────          ────────
Agent card
  "Deliver real work" ─POST /api/agent-run──► build task prompt
                                              + attach connected tools ──MCP──►  Notion / GitHub /
                                              call Claude (claude-opus-4-8) ──►  api.anthropic.com
                                              ◄── deliverable (md / tokens)
                                              meter x402 on Mainnet ──────────►  XRP Ledger
  DeliverableModal ◄─── { deliverable, settlement, tools } ───

  "Connect Notion"  ─GET /api/connect?start─► 302 to provider consent ────────►  provider OAuth
  provider ─redirect─► /api/connect?code ───► exchange → SEAL (AES-256-GCM)
                                              → store in `connections` (Postgres)
  status only ◄─── { connected } ───          (token NEVER returned to browser)
```

- OAuth tokens are sealed with `CONNECTOR_ENC_KEY` (AES-256-GCM) in
  `api/_lib/vault.ts` before touching Postgres. The browser only ever learns a
  connector's **status**.
- Tools reach Claude as `mcp_servers` on the Messages API (beta
  `mcp-client-2025-04-04`, overridable via `ANTHROPIC_MCP_BETA`).

---

## One-time setup

```bash
# 1. apply the DB schema (after the settlement schema)
psql "$DATABASE_URL" -f db/schema.sql
psql "$DATABASE_URL" -f db/connectors.sql

# 2. generate the vault key (32 bytes) — keep it secret, store in Vercel
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

For every tool you enable, register the OAuth **redirect URI**:

```
https://www.dojoburo.com/api/connect
```

(`CONNECT_SITE_URL` must match your deployed apex/www host exactly.)

---

## Environment variables

### Core (enables the whole layer)

| Variable | Required | What / where to get it |
|---|---|---|
| `ANTHROPIC_API_KEY` | ✅ deliverables | Claude key — [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys) |
| `ANTHROPIC_WORK_MODEL` | optional | `claude-opus-4-8` (default, best) · `claude-sonnet-5` · `claude-haiku-4-5` |
| `ANTHROPIC_WORK_MAX_TOKENS` | optional | Output cap per deliverable (default `6000`) |
| `ANTHROPIC_WORK_THINKING` | optional | `adaptive` for deeper reasoning (slower/costlier) |
| `DATABASE_URL` | ✅ connectors | Pooled Postgres — [Neon](https://neon.tech) / [Supabase](https://supabase.com) / Vercel Postgres |
| `CONNECTOR_ENC_KEY` | ✅ connectors | 32-byte vault key (see generate command above) |
| `CONNECT_STATE_SECRET` | optional | Signs the OAuth `state` (falls back to `CONNECTOR_ENC_KEY`) |
| `CONNECT_SITE_URL` | ✅ connectors | Public base URL, e.g. `https://www.dojoburo.com` (redirect = `<URL>/api/connect`) |

### Per-tool OAuth (enable only what you want)

Set **both** the client id and secret to turn a connector on. Missing → the tool
shows as *"operator setup"* in the UI (never an error).

| Tool | Function(s) | Auth vars | Where to create the app | MCP endpoint (default / env) |
|---|---|---|---|---|
| 📓 **Notion** | Product, Leadership, Ops | `NOTION_CLIENT_ID`, `NOTION_CLIENT_SECRET` | [notion.so/my-integrations](https://www.notion.so/my-integrations) | `https://mcp.notion.com/mcp` · `NOTION_MCP_URL` |
| 🐙 **GitHub** | Engineering, Product | `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | [github.com/settings/developers](https://github.com/settings/developers) | `https://api.githubcopilot.com/mcp/` · `GITHUB_MCP_URL` |
| ✉️ **Gmail** | Growth, People | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) | `GMAIL_MCP_URL` (hub: [composio.dev](https://composio.dev)) |
| 🗂️ **Google Drive** | Product, Ops, Leadership | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | same Google project | `GDRIVE_MCP_URL` |
| 💬 **Slack** | People, Ops, Leadership | `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET` | [api.slack.com/apps](https://api.slack.com/apps) | `SLACK_MCP_URL` |
| 📐 **Linear** | Product, Engineering | `LINEAR_CLIENT_ID`, `LINEAR_CLIENT_SECRET` | [linear.app OAuth apps](https://linear.app/settings/api/applications/new) | `https://mcp.linear.app/mcp` · `LINEAR_MCP_URL` |
| 💳 **Stripe** | Finance, Growth | `STRIPE_CONNECT_CLIENT_ID` (+ reuses `STRIPE_SECRET_KEY`) | [dashboard.stripe.com/settings/connect](https://dashboard.stripe.com/settings/connect) | `https://mcp.stripe.com` · `STRIPE_MCP_URL` |
| 🎨 **Figma** | Product | `FIGMA_CLIENT_ID`, `FIGMA_CLIENT_SECRET` | [figma.com OAuth](https://www.figma.com/developers/api#oauth2) | `FIGMA_MCP_URL` |

> **Override any connector** without a code change:
> `<IDP>_AUTH_URL`, `<IDP>_TOKEN_URL`, `<IDP>_MCP_URL`, `<IDP>_SCOPE`.
> Point `*_MCP_URL` at a hub (Composio / Zapier / Pipedream) to cover tools with
> no first-party hosted MCP.

> ⚠️ **MCP tokens ≠ REST API keys.** Hosted MCP servers expect the **OAuth
> bearer token** issued by the connect flow, not a personal API key.

---

## What each function delivers (Claude)

| Function | Task | Deliverable | Acts in (if connected) | x402 |
|---|---|---|---|---|
| Product / Design | **Claude Design — Design system** | tokens + palette + type scale + components + a11y | Figma | 0.40 XRP |
| Product | Write a PRD | goals, scope, acceptance criteria | Notion, Linear | 0.25 |
| Engineering | Technical design doc | architecture, data model, API, rollout | GitHub, Linear | 0.30 |
| Engineering | Code review | risks, bugs, simplifications, checklist | GitHub | 0.20 |
| Growth | GTM campaign | positioning, channels, calendar, emails | Gmail | 0.25 |
| Finance | Financial model | revenue/cost build, runway, metrics | Stripe | 0.25 |
| Leadership | Strategy & OKRs | vision, 3 bets, OKRs, roadmap | Notion | 0.30 |
| People | Job description & scorecard | JD, interview scorecard, 30/60/90 | Slack | 0.15 |
| Ops | Ops runbook | monitoring, on-call, incidents, SLOs | Slack, Drive | 0.20 |

On **Mainnet** with a settlement hot wallet configured (`SETTLEMENT_WALLET_SEED`,
`SETTLEMENT_NETWORK=mainnet`), each run settles a **real x402 XRP Payment** and
the deliverable shows the explorer link.

---

## Cost per user (rule of thumb)

The only variable cost is Claude tokens (XRPL fees are ~$0.000005/tx).

| Task size | Model | ≈ cost / task |
|---|---|---|
| micro (tri/résumé) | haiku-4-5 | < $0.01 |
| medium (PRD, spec) | sonnet-5 | ≈ $0.40 |
| deliverable (design system, code) | opus-4-8 | ≈ $0.60 |

Typical **active** user (5 heavy + 20 medium + 100 micro / month) ≈ **$13/mo** of
Claude. Cover it with the x402 price per skill + fiat top-ups, and run the free
LLM cascade (`api/chat.ts`) for anything that doesn't need Opus.
