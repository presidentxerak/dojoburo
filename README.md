# DojoBuro

A **responsive 2D pixel-art web app**: a startup office where a team of **AI agents**
— each with a real startup function and its own skills — works at their desks with
**animated ASCII-art expressions on their heads**. It's a **game-like dashboard** to
orchestrate agents in a fun way (à la [WorkAdventure](https://workadventu.re)), and
**every transaction settles on the [XRP Ledger](https://xrpl.org)**.

> 100% functional, **no mock**. The app talks directly to public XRPL nodes over
> WebSocket from the browser — no backend.

---

## What it does

- **Living pixel-art office**: full-body characters, organic desk layout with varied
  desk styles, **job-specific props per agent** (server rack, safe, megaphone, kanban,
  easel, chart board, scales of justice, hiring board, support tickets…) and ambient
  decor (windows, clock, couch, rug, bookshelf, cooler, coffee machine, plants, lamp,
  boxes, arcade). Anti-aliased rendering, **Silkscreen** typography, emoji-free UI icons.
- **12 wild characters**, all different (alien, ninja, robot, Goldorak mecha, skeleton,
  cat, wizard, monster, cyborg, slime, vampire, human) with the **animated ASCII
  expression drawn directly on the head**.
- **Switchable scene templates** (buttons below the scene): Office, Space station, Lab,
  Castle, Airport, Shopping center, Hospital — each swaps the floor, ambient tint and
  themed decor while the agents keep working.
- **A hero** (the founder) who **walks to the working agent** when a task starts and
  **trades jokes** with them during the task (varied, department-flavored dialogue).
- **Game layer**: XP, levels, tiers, coins, per-agent stats, and **random office events**
  (VIP client, Product Hunt, fundraise, prod bug, kudos…) that reward agents via toasts.
- **The office scene stays pinned (sticky)** while you scroll the agent panel next to it.
- **Light theme by default** (+ dark toggle), procedural **lo-fi ambient music + SFX**.

---

## Agents and their functions

| Agent | Function | Department | Key skills |
|------|----------|-----------|-----------|
| Ava | CEO — Orchestrator | Leadership | Daily standup, Set OKRs, Allocate budget (XRPL) |
| Rex | CTO — Engineering | Engineering | Ship a feature, Code review (x402) |
| Otto | DevOps — Infrastructure | Ops | Deploy to prod, Scale |
| Fin | CFO — Treasury | Finance | Open treasury, Pay agents, On-ledger audit |
| Mia | CMO — Marketing | Growth | Launch a campaign, Brand audit (x402) |
| Sol | Head of Sales | Growth | Close a deal, Get paid (x402) |
| Pia | Product Manager | Product | Write a spec, Prioritize the backlog |
| Dex | Lead Designer | Product | Produce a mockup, Design system (x402) |
| Ada | Data Analyst | Engineering | Weekly report, On-ledger analysis |
| Hana | People Ops — HR | People | Recruit an agent, Morale boost |
| Sam | Customer Support | Ops | Handle a ticket, Measure CSAT |
| Lex | Legal & Compliance | Leadership | Draft a contract, Compliance check |

Every agent also has the **3 shared XRPL skills**: XRPL wallet, Agentic payment (x402)
and Track behavior.

---

## XRPL integration

- **Install** — the official [`xrpl`](https://xrpl.org/docs/infrastructure/installation)
  library (`npm i xrpl`) runs in the browser via Node polyfills.
- **Wallets** ([xrpl-agent-wallet-skill](https://xrpl.org/docs/agents/xrpl-agent-wallet-skill)) —
  `src/xrpl/wallet.ts`: real keypair generation, **faucet** funding (Testnet/Devnet),
  balance reads (`account_info`).
- **Agentic transactions** ([getting started](https://xrpl.org/docs/agents/getting-started-with-agentic-transactions)) —
  `src/xrpl/payments.ts`: `Payment` autofill → sign → `submitAndWait`.
- **x402 payments** ([agentic-payments-x402](https://xrpl.org/docs/agents/agentic-payments-x402)) —
  every settlement carries a structured **x402 memo** `{protocol, skill, invoice, from, to}`.
- **Track behavior** ([track-agent-behavior](https://xrpl.org/docs/agents/track-agent-behavior)) —
  on-ledger anchoring of a SHA-256 fingerprint (self-payment + memo), auditable via `account_tx`.
- **Xaman (XUMM)** — non-custodial, frontend-only signing (OAuth2 PKCE, API key without
  secret). Secure Mainnet on-ramp: fund the treasury from your real wallet, approved on
  your phone; no seed exposed. Configure via `VITE_XUMM_API_KEY` or the in-app panel.

### Networks

| Network | Endpoint | Faucet |
|--------|----------|--------|
| Testnet *(default)* | `wss://s.altnet.rippletest.net:51233` | yes |
| Devnet | `wss://s.devnet.rippletest.net:51233` | yes |
| Mainnet | `wss://xrplcluster.com` | no — real value |

---

## What is real vs simulated (no data mocks)

**Real / production-functional:**

- **Wallets** — real XRPL keypairs (agents + treasury), generated client-side.
- **Balances** — read live from the ledger (`account_info`).
- **Payments** — real `Payment` transactions, autofilled, signed and `submitAndWait`-ed:
  agentic x402 settlements, treasury allocations, payroll batches, per-agent contributions,
  the Sales "get paid" flow (a real faucet-funded client wallet pays Sol on Testnet).
- **Track behavior** — real on-ledger memo anchoring.
- **Audit** — real `account_tx` reads, aggregated into inbound/outbound flows.
- **Faucet** — real Testnet/Devnet funding.
- **Xaman** — real payload creation + signing when an API key is configured.
- **Explorer links** — every tx/account links to the real XRPL explorer.

**Game layer (in-world state, not fake external data):**

- Non-XRPL skills (ship, campaign, spec, ticket…) are **office actions** that produce a
  real state change — XP, coins, mood, activity log — plus a short in-world result line.
  They are game mechanics, not placeholders pretending to be real API responses.
- Random events and rewards are game design.

There are **no hardcoded fake balances, fake tx hashes, or stubbed ledger responses**.
Anything that touches money is a real on-ledger transaction.

> Note: XRPL public nodes, Google Fonts (Silkscreen) and the Xaman SDK are unreachable
> from some sandboxed CI environments due to network egress policy — this affects the
> build box, **not** the app. In a normal browser everything connects and works.

---

## Security

See [`SECURITY.md`](./SECURITY.md) for the full threat model. Highlights: strict
**Content-Security-Policy** + security headers (`public/_headers`, `vercel.json`),
React auto-escaping (no `dangerouslySetInnerHTML`/`eval`), `frame-ancestors 'none'`
(anti-clickjacking), non-custodial **Xaman** signing so private keys never touch the
app, and edge/WAF guidance for bots/scraping/DDoS.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

In the app:

1. Open **Fin** (CFO) or the **Treasury** panel.
2. Click **Boot the startup**: creates every wallet and funds them from the Testnet faucet.
3. Click an agent → run their **skills**. XRPL / x402 skills produce real transactions;
   follow them in the **Track** feed (with explorer links).

### Production build

```bash
npm run build      # tsc + vite build → dist/
npm run preview    # serve the build
```

`dist/` is a static site — deploy as-is to any host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages…).

### Optional: Xaman on Mainnet

Get a free API key at [apps.xaman.dev](https://apps.xaman.dev), paste it into the Xaman
panel (or set `VITE_XUMM_API_KEY`, see `.env.example`), connect your wallet, then fund the
treasury with a payment you approve in the Xaman app.

---

## Architecture

```
src/
  data/agents.ts     # roster: functions + skills
  data/looks.ts      # per-agent character kind + colours
  data/layout.ts     # stage, desk positions, desk variants + job props, decor
  data/faces.ts      # animated ASCII expression frames per mood
  data/jokes.ts      # hero/agent banter
  data/events.ts     # random office events
  components/         # Office, Character, PixelAvatar, Furniture, Hero,
                      # AgentSprite, AgentPanel, TreasuryPanel, XamanPanel,
                      # ActivityLog, Toasts, TopBar, Icon
  xrpl/network.ts     # network config + shared WebSocket client
  xrpl/wallet.ts      # generation / faucet / balances
  xrpl/payments.ts    # Payment + x402 memos + track + account_tx
  xrpl/xaman.ts       # Xaman (XUMM) non-custodial signing
  audio.ts            # procedural music + SFX (Web Audio)
  store.ts            # global state (zustand) + skill orchestrator
```

**Stack**: React · TypeScript · Vite · Zustand · xrpl.js · xumm · Web Audio. No backend,
no mock.
