import { AGENTS } from './data/agents'
import { PROFESSIONS } from './data/professions'
import { CONNECTORS, CONNECTOR_BY_ID } from './data/connectors'
import { SKINS } from './data/skins'
import type { Kind } from './data/looks'
import { DOJO_TEMPLATES } from './data/templates'
import { SupportBot } from './components/SupportBot'
import { Logo } from './components/Logo'
import { AgentCarousel3D } from './components/three/AgentCarousel3D'
import { AsciiIcon } from './components/AsciiIcon'
import { Hero3D } from './components/landing/Hero3D'

// pick a skin id for a given creature kind (for the parallax heroes)
const heroSkin = (k: Kind): string => (SKINS.find((s) => s.kind === k) ?? SKINS[0]).id

/** A-to-Z landing page: what DojoBuro is, how the office works, what a task
 *  costs in XRP, how agents get wired to real tools, where they run, and the
 *  path to a fully-functional production deployment. */
export function Landing({ enter }: { enter: () => void }) {
  return (
    <div className="landing">
      <header className="lp-nav">
        <div className="lp-brand">
          <Logo size={30} /> DojoBuro
        </div>
        <button className="lp-cta sm" onClick={enter}>Enter the office →</button>
      </header>

      <section className="lp-hero">
        <p className="lp-kicker">An automated productivity hub, run by AI agents · orchestrated on the XRP Ledger</p>
        <h1>Your AI team, working while you watch.</h1>
        <p className="lp-sub">
          DojoBuro is a living 3D office where a team of specialised AI agents each own a real
          function of your work. It adapts to your profession, connects your everyday apps, runs the
          tasks for real, and settles the cost on-ledger with x402 micro-payments. You are the
          founder · the Chief atom hovering over the team.
        </p>
        <div className="lp-actions">
          <button className="lp-cta" onClick={enter}>Enter the office →</button>
          <a className="lp-ghost" href="#jobs">Built for your job</a>
        </div>
        <div className="lp-badges">
          <span>{PROFESSIONS.length} profession profiles</span><span>{CONNECTORS.length} app connectors</span><span>Real XRPL · x402</span><span>{SKINS.length} skins · {DOJO_TEMPLATES.length} worlds</span><span>Cloud or local</span>
        </div>
        <AgentCarousel3D />
      </section>

      <section className="lp-sec" id="jobs">
        <Hero3D skin={heroSkin('dragon')} side="right" mood="happy" phase={0.4} parallax={0.16} />
        <span className="lp-pill">New · adapts to your trade</span>
        <h2>Built around your job</h2>
        <p className="lp-lead">
          DojoBuro is a productivity hub that reshapes itself to your profession. Pick your trade and the
          office is tailored for you · a matching crew of specialists, a fitting 3D environment, and the exact
          apps your work needs, wired and ready to run the real tasks of that job.
        </p>
        <div className="lp-jobs">
          {PROFESSIONS.map((p) => (
            <div className="lp-job" key={p.id}>
              <span className="lp-job-cat">{p.category}</span>
              <strong>{p.label}</strong>
              <span className="lp-job-blurb">{p.blurb}</span>
              <div className="lp-job-tools">
                {p.connectors.slice(0, 5).map((id) => (
                  <span className="lp-tool-chip" key={id}>{CONNECTOR_BY_ID[id]?.label ?? id}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="lp-note">Don't see yours exactly? Every dojo is fully editable · mix any crew, any environment and any apps. These are just fast starting points.</p>
      </section>

      <section className="lp-sec alt" id="stack">
        <Hero3D skin={heroSkin('octopus')} side="left" mood="work" phase={1.1} parallax={0.12} />
        <span className="lp-ico"><AsciiIcon kind="stack" /></span>
        <h2>Connect your whole stack</h2>
        <p className="lp-lead">
          {CONNECTORS.length} app connectors and counting. Connect with one click · OAuth (with PKCE), tokens
          sealed server-side in an encrypted vault · and your agents act inside them for real: create the
          Notion page, open the GitHub PR, draft the Gmail, post the campaign, raise the Stripe invoice, move
          the Jira ticket.
        </p>
        <div className="lp-toolwall">
          {CONNECTORS.map((c) => (
            <span className="lp-toolpill" key={c.id} title={c.blurb}>{c.label}</span>
          ))}
        </div>
        <div className="lp-two" style={{ marginTop: 26 }}>
          <div>
            <h3>Run it in the cloud</h3>
            <ul>
              <li>A managed worker keeps your agents running when the tab is closed, with every key held in a server-side vault.</li>
              <li>One-click OAuth for every app; the browser never sees a secret.</li>
            </ul>
          </div>
          <div>
            <h3>Or keep it local</h3>
            <ul>
              <li>Self-host the worker and point connectors at your own MCP endpoints · your keys, your machine, the same office.</li>
              <li>Bring your own model key (Claude) or run the free-model cascade; nothing leaves your control.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="studio">
        <span className="lp-ico"><AsciiIcon kind="build" /></span>
        <h2>Build your own team</h2>
        <p className="lp-lead">Open the Dojo Studio to create, edit and delete agents. Pick one of {SKINS.length} skins across {DOJO_TEMPLATES.length} worlds, choose the agent's function and tasks, and set a per-agent XRP budget. Arrange them on a grid and run several dojos side by side.</p>
        <div className="lp-schema">
          <div className="lp-node"><b>Create</b><span>Add up to 12 agents per dojo</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Skin</b><span>{SKINS.length} skins · {DOJO_TEMPLATES.length} worlds, in 3D</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Function</b><span>Pick tasks &amp; a budget</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Arrange</b><span>Drag on the grid · many dojos</span></div>
        </div>
        <div className="lp-actions" style={{ marginTop: 18 }}>
          <button className="lp-cta" onClick={enter}>Open the Dojo Studio →</button>
        </div>
      </section>

      <section className="lp-sec alt" id="cast">
        <span className="lp-ico"><AsciiIcon kind="cast" /></span>
        <h2>Meet the office</h2>
        <p className="lp-lead">Twelve starter agents across Leadership, Engineering, Finance, Growth, Product, People and Ops · plus two mascots. Reskin, rename or replace any of them.</p>
        <div className="lp-cast">
          {AGENTS.map((a) => (
            <div className="lp-card" key={a.id}>
              <strong>{a.name}</strong>
              <span>{a.role}</span>
            </div>
          ))}
          <div className="lp-card mascot"><strong>Chief</strong><span>You · the founder atom</span></div>
          <div className="lp-card mascot"><strong>Lazy</strong><span>The panda who only watches the numbers</span></div>
        </div>
      </section>

      <section className="lp-sec alt" id="how">
        <span className="lp-ico"><AsciiIcon kind="bolt" /></span>
        <h2>How it works</h2>
        <div className="lp-steps">
          <div className="lp-step"><span className="lp-n">1</span><h3>Fund the treasury</h3><p>Create the treasury wallet and top it up from the Testnet faucet, or connect Xaman and fund from your own XRP on Mainnet.</p></div>
          <div className="lp-step"><span className="lp-n">2</span><h3>Agents run skills</h3><p>Click an agent, run a skill. The Chief flies over, thought particles stream down, and the agent works and reacts.</p></div>
          <div className="lp-step"><span className="lp-n">3</span><h3>Settle on-ledger</h3><p>Priced skills settle an x402 invoice as a real signed Payment, with the skill + invoice written into the transaction memo.</p></div>
          <div className="lp-step"><span className="lp-n">4</span><h3>Track &amp; reward</h3><p>Every action is anchored on-ledger (a memo hash), agents earn XP/levels, and Lazy tallies tokens, XRP and productivity.</p></div>
        </div>
      </section>

      <section className="lp-sec" id="cascade">
        <Hero3D skin={heroSkin('panda')} side="right" mood="think" phase={1.6} parallax={0.15} />
        <span className="lp-ico"><AsciiIcon kind="cost" /></span>
        <h2>Smart, and genuinely cheap</h2>
        <p className="lp-lead">Every task runs through a cost cascade: it stops at the cheapest tier that passes a quality check. Most work is free; frontier models are the rare last resort, so a task costs about a cent.</p>
        <div className="lp-cascade">
          <div className="lp-tier"><b>0</b><span className="lp-tier-main">Templates &amp; on-chain data · no model</span><span className="lp-tier-cost">free</span></div>
          <div className="lp-tier"><b>1</b><span className="lp-tier-main">Free tiers · Groq · Gemini · Cerebras</span><span className="lp-tier-cost">≈ free</span></div>
          <div className="lp-tier"><b>2</b><span className="lp-tier-main">Open models · DeepSeek · Llama</span><span className="lp-tier-cost">≈ $0.01</span></div>
          <div className="lp-tier"><b>3</b><span className="lp-tier-main">Frontier · Claude, only when needed</span><span className="lp-tier-cost">rare</span></div>
        </div>
        <p className="lp-note">A built-in support assistant uses the same cascade with hard spending limits and keys kept server-side.</p>
      </section>

      <section className="lp-sec alt" id="pricing">
        <Hero3D skin={heroSkin('bear')} side="left" mood="love" phase={0.9} parallax={0.12} />
        <span className="lp-ico"><AsciiIcon kind="price" /></span>
        <h2>Pricing that pays for itself</h2>
        <p className="lp-lead">
          You bring your own model key, or use the free-model cascade, so the intelligence is basically free.
          You pay only for the hub around it: the apps you connect, the always-on worker, and team features.
          That is why DojoBuro runs a whole automated team for less than a single Zapier or ChatGPT seat.
        </p>
        <div className="lp-billing-note">
          <span><b>BYOK &amp; free-cascade tasks are unlimited</b> · they never touch a credit.</span>
          <span><b>Managed credits</b> cover hosted-model runs: 1 credit ≈ 1 agentic task. Top up anytime, or settle in XRP via x402.</span>
          <span><b>Save ~2 months</b> on annual billing. Prices below are per month, billed annually.</span>
        </div>
        <div className="lp-plans">
          <div className="lp-plan">
            <div className="lp-plan-name">Free</div>
            <div className="lp-plan-price">$0<small> / forever</small></div>
            <div className="lp-plan-sub">Explore the whole office on Testnet.</div>
            <ul>
              <li>1 dojo · up to 12 agents</li>
              <li>All {DOJO_TEMPLATES.length} worlds &amp; {SKINS.length} skins</li>
              <li>Testnet sandbox (free XRP)</li>
              <li>Free-model cascade or your key</li>
              <li>Connect 2 apps · ~50 tasks/mo</li>
              <li>Community support</li>
            </ul>
            <button className="lp-cta" onClick={enter}>Start free →</button>
          </div>
          <div className="lp-plan">
            <div className="lp-plan-name">Solo</div>
            <div className="lp-plan-price">$12<small> / mo</small></div>
            <div className="lp-plan-sub">One person running real work on Mainnet.</div>
            <ul>
              <li>Everything in Free</li>
              <li>Mainnet x402 settlement</li>
              <li>Unlimited dojos</li>
              <li>Connect 6 apps</li>
              <li>300 credits/mo · unlimited BYOK</li>
              <li>Email support</li>
            </ul>
            <button className="lp-ghost" onClick={enter}>Choose Solo</button>
          </div>
          <div className="lp-plan feat">
            <div className="lp-plan-badge">Most popular</div>
            <div className="lp-plan-name">Pro</div>
            <div className="lp-plan-price">$29<small> / mo</small></div>
            <div className="lp-plan-sub">A full automated team with your whole stack.</div>
            <ul>
              <li>Everything in Solo</li>
              <li>All {CONNECTORS.length} app connectors</li>
              <li>1,500 credits/mo · unlimited BYOK</li>
              <li>Always-on cloud worker</li>
              <li>Priority model routing</li>
              <li>Priority support</li>
            </ul>
            <button className="lp-cta" onClick={enter}>Go Pro →</button>
          </div>
          <div className="lp-plan">
            <div className="lp-plan-name">Team</div>
            <div className="lp-plan-price">$22<small> / seat/mo</small></div>
            <div className="lp-plan-sub">Shared automation for a whole team.</div>
            <ul>
              <li>Everything in Pro, per seat</li>
              <li>Shared dojos &amp; connectors</li>
              <li>Roles &amp; permissions</li>
              <li>Pooled credits + admin console</li>
              <li>Google SSO</li>
              <li>On-chain audit log</li>
            </ul>
            <button className="lp-ghost" onClick={enter}>Start a team</button>
          </div>
        </div>
        <div className="lp-enterprise">
          <div>
            <strong>Business / Enterprise</strong>
            <span>Self-hosted or local worker, SAML SSO &amp; security review, a dedicated MCP hub with an SLA, budgets &amp; spend controls, custom connectors and dedicated support. Keep everything on your own infrastructure.</span>
          </div>
          <button className="lp-ghost" onClick={enter}>Talk to us</button>
        </div>
        <p className="lp-note">
          Every plan is non-custodial: your XRP lives in your own wallet and your keys stay yours. Testnet is
          always free. Bring your own Claude key on any paid plan and hosted-model credits become optional.
        </p>
      </section>

      <section className="lp-sec alt" id="pay">
        <h2>Pay your way · settle in XRP</h2>
        <p className="lp-lead">Prices show in your currency. XRP is the transactional rail via x402; fiat is converted and settles on-ledger.</p>
        <div className="lp-schema">
          <div className="lp-node"><b>XRP · $ · € · ¥</b><span>Pick your currency</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>x402</b><span>Convert &amp; meter the task</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>XRP Ledger</b><span>Signed settlement + receipt</span></div>
        </div>
      </section>

      <section className="lp-sec alt" id="onramp">
        <Hero3D skin={heroSkin('bibendum')} side="right" mood="happy" phase={0.7} parallax={0.13} />
        <span className="lp-pill">Mainnet · self-custody · x402</span>
        <h2>From your card to real on-chain agents</h2>
        <p className="lp-lead">
          Top up with a card and receive <b>real XRP in your own wallet</b> · not a locked in-app balance.
          That XRP funds your dojo, and your agents settle services between themselves with x402
          micro-payments, live on the XRP Ledger. This is the full loop: fiat in, autonomous agent
          commerce out.
        </p>
        <div className="lp-schema lp-flow">
          <div className="lp-node"><span className="lp-nico">1</span><b>Pay by card</b><span>€ · $ · ¥ via Stripe</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">2</span><b>Convert to XRP</b><span>Live rate, metered by x402</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">3</span><b>Into your wallet</b><span>Real XRP · you hold the keys</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">4</span><b>Agents pay agents</b><span>x402 settlements on-ledger</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">5</span><b>On-chain receipt</b><span>Every move is verifiable</span></div>
        </div>
        <div className="lp-benefits">
          <div className="lp-benefit"><b>You own it</b><span>Non-custodial delivery · the XRP is yours to keep, spend or withdraw. We never hold your funds.</span></div>
          <div className="lp-benefit"><b>Real agentic commerce</b><span>Your AI agents don't simulate payments · they move real value autonomously, the frontier of x402 agent-to-agent settlement.</span></div>
          <div className="lp-benefit"><b>Auditable &amp; open</b><span>Each settlement carries an x402 memo on the public XRP Ledger · verifiable by anyone, composable with the whole XRPL ecosystem.</span></div>
        </div>
        <p className="lp-note">Card top-ups settle to XRP via a Stripe checkout and an x402-tagged on-ledger payment. Prefer play money? Testnet works the same, for free.</p>
      </section>

      <section className="lp-sec" id="widget">
        <Hero3D skin={heroSkin('ghost')} side="right" mood="talk" phase={1.3} parallax={0.15} />
        <span className="lp-ico"><AsciiIcon kind="watch" /></span>
        <h2>Watch your dojo while you work</h2>
        <p className="lp-lead">A compact activity widget follows your dojo · agents working, tasks done, XRP spent, live feed · so you can keep an eye on it beside your other work. The same view powers a reduced desktop window.</p>
        <div className="lp-schema">
          <div className="lp-node"><b>Web app</b><span>The full 3D office</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Widget</b><span>Minimised live monitor</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Desktop</b><span>Always-on-top window</span></div>
        </div>
      </section>

      <section className="lp-sec" id="profile">
        <h2>How you manage your profile</h2>
        <div className="lp-two">
          <div>
            <h3>Two ways to hold funds</h3>
            <ul>
              <li><b>Testnet / Devnet (play):</b> DojoBuro generates real XRPL wallets in your browser and funds them from the public faucet. Seeds are stored only in your browser's localStorage · never sent anywhere.</li>
              <li><b>Mainnet (real value):</b> connect <b>Xaman</b> (XUMM). Signing is non-custodial · every payment is approved on your phone and no seed ever touches the app.</li>
            </ul>
          </div>
          <div>
            <h3>Your identity &amp; settings</h3>
            <ul>
              <li>Your "profile" today is your connected wallet + local preferences (network, theme, sound) persisted in localStorage.</li>
              <li>The treasury wallet is your company account; each agent has its own wallet so payments between them are real transfers.</li>
              <li>For a hosted multi-user product, this becomes an account (email / passkey) with server-held preferences and read-only wallet links · see the roadmap below.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec alt" id="cost">
        <h2>What a task costs in XRP</h2>
        <p className="lp-lead">Most skills are free; a few carry an x402 price. On top of any price, every ledger transaction pays the tiny network fee (~0.00001 XRP / 10 drops).</p>
        <table className="lp-table">
          <thead><tr><th>Task type</th><th>x402 price</th><th>Network fee</th><th>Total / run</th></tr></thead>
          <tbody>
            <tr><td>Free skills (standups, reports, wallet, track…)</td><td>0 XRP</td><td>~0.00001</td><td>~0.00001 XRP</td></tr>
            <tr><td>Light agentic skill</td><td>0.15 XRP</td><td>~0.00001</td><td>≈ 0.15 XRP</td></tr>
            <tr><td>Standard agentic skill</td><td>0.20 XRP</td><td>~0.00001</td><td>≈ 0.20 XRP</td></tr>
            <tr><td>Premium agentic skill (e.g. fundraise)</td><td>0.50 XRP</td><td>~0.00001</td><td>≈ 0.50 XRP</td></tr>
          </tbody>
        </table>
        <p className="lp-note">Testnet/Devnet XRP has no monetary value, so you can run everything for free while you explore. On Mainnet the same prices apply in real XRP. Lazy's dashboard shows your running totals live.</p>
      </section>

      <section className="lp-sec" id="tools">
        <h2>Real tools, real deliverables</h2>
        <p className="lp-lead">The agents don't just animate · they produce real work with your connected apps, metered on-ledger.</p>
        <div className="lp-two">
          <div>
            <h3>The model + tool layer</h3>
            <ul>
              <li>Each task maps to a <b>tool contract</b> (inputs → output). Behind it sits a Claude model call · your own key (BYOK) or a free-model cascade · with the tools that function needs.</li>
              <li>Your connected apps are exposed as <b>remote MCP servers</b> · Notion, GitHub, Gmail, Slack, Jira, Stripe and {CONNECTORS.length - 6}+ more · so an agent opens a PR, posts a message or drafts a doc for real.</li>
              <li>The x402 payment is the <b>metering</b>: a task runs its tool calls and settles an on-ledger receipt, so every unit of real work is auditable.</li>
            </ul>
          </div>
          <div>
            <h3>Real deliverables, today</h3>
            <ul>
              <li>Claude Design ships a real design system, Pia writes a PRD, Rex opens a PR, Mia drafts a campaign, Fin builds a financial model · each returns an artifact you can open.</li>
              <li>Outputs render in the agent card and activity log, and land in your connected tool (the Notion page, the Drive doc, the Linear issue).</li>
              <li>OAuth tokens are sealed with AES-256-GCM server-side and auto-refreshed; the browser never sees a secret.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec alt" id="env">
        <h2>Where the agents actually run</h2>
        <div className="lp-two">
          <div>
            <h3>Today · 100% in your browser</h3>
            <ul>
              <li>DojoBuro is a static single-page app. The 3D office, wallet generation, faucet funding and XRPL payments all run client-side, talking straight to public XRPL WebSocket nodes.</li>
              <li>No server, no database · it deploys to any static host and there is nothing to operate.</li>
            </ul>
          </div>
          <div>
            <h3>For real work · a cloud worker</h3>
            <ul>
              <li>Model + tool execution runs in the cloud (a serverless function or a container/worker), not on your machine · so it keeps running when the tab is closed and keeps keys safe.</li>
              <li>The browser stays the cockpit: it shows the office, triggers skills and signs Mainnet payments through Xaman; the worker does the heavy, authenticated work.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="prod">
        <h2>Making it 100% production-ready</h2>
        <ul className="lp-check">
          <li>Ship the static app behind a CDN with the strict CSP, security headers and bot/scraper protection already in the repo.</li>
          <li>Add a small backend for the model + MCP tool calls, with secrets in a vault and per-user rate limits &amp; budgets.</li>
          <li>Accounts &amp; profiles: passkey/email auth, server-held preferences, read-only links to on-chain wallets.</li>
          <li>Move priced skills to Mainnet with Xaman non-custodial signing; keep Testnet as a free sandbox.</li>
          <li>Persist artifacts and the activity ledger; expose an audit view backed by <code>account_tx</code>.</li>
          <li>Observability (logs, traces, spend dashboards), automated tests and CI, plus a staged Testnet → Mainnet rollout.</li>
        </ul>
        <p className="lp-note">The client is already production-grade and non-custodial. "100% functional" is about adding the authenticated worker that turns each skill into a real deliverable · everything else is live today.</p>
      </section>

      <section className="lp-final">
        <span className="lp-ico"><AsciiIcon kind="run" /></span>
        <h2>Ready to run your office?</h2>
        <button className="lp-cta big" onClick={enter}>Enter DojoBuro →</button>
        <p className="lp-foot">Real XRPL · x402 · non-custodial · open in your browser</p>
      </section>

      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> DojoBuro</div>
        <nav className="lp-foot-links">
          <a href="#jobs">Your job</a>
          <a href="#stack">Connect apps</a>
          <a href="#studio">Dojo Studio</a>
          <a href="#pricing">Pricing</a>
          <a href="#onramp">Agentic pay</a>
          <a href="#prod">Production</a>
          <a href="#app" onClick={(e) => { e.preventDefault(); enter() }}>Enter the office</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}
