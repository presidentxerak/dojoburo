import { AGENTS } from './data/agents'
import { SupportBot } from './components/SupportBot'

/** A-to-Z landing page: what DojoBuro is, how the office works, what a task
 *  costs in XRP, how agents get wired to real tools, where they run, and the
 *  path to a fully-functional production deployment. */
export function Landing({ enter }: { enter: () => void }) {
  return (
    <div className="landing">
      <header className="lp-nav">
        <div className="lp-brand">
          <span className="lp-logo">◕‿◕</span> DojoBuro
        </div>
        <button className="lp-cta sm" onClick={enter}>Enter the office →</button>
      </header>

      <section className="lp-hero">
        <p className="lp-kicker">A startup office run by AI agents · orchestrated on the XRP Ledger</p>
        <h1>Your AI startup, working while you watch.</h1>
        <p className="lp-sub">
          DojoBuro is a living 2.5D office where a dozen specialised AI agents each own a real startup
          function. They run skills, pay each other on-ledger with x402 micro-payments, and level up.
          You are the founder — the Chief atom hovering over the team.
        </p>
        <div className="lp-actions">
          <button className="lp-cta" onClick={enter}>Enter the office →</button>
          <a className="lp-ghost" href="#how">See how it works</a>
        </div>
        <div className="lp-badges">
          <span>Real XRPL wallets</span><span>x402 payments</span><span>Non-custodial (Xaman)</span><span>No backend to run</span>
        </div>
      </section>

      <section className="lp-sec" id="cast">
        <h2>Meet the office</h2>
        <p className="lp-lead">Twelve agents across Leadership, Engineering, Finance, Growth, Product, People and Ops — plus two mascots.</p>
        <div className="lp-cast">
          {AGENTS.map((a) => (
            <div className="lp-card" key={a.id}>
              <strong>{a.name}</strong>
              <span>{a.role}</span>
            </div>
          ))}
          <div className="lp-card mascot"><strong>Chief</strong><span>You — the founder atom</span></div>
          <div className="lp-card mascot"><strong>Lazy</strong><span>The panda who only watches the numbers</span></div>
        </div>
      </section>

      <section className="lp-sec alt" id="how">
        <h2>How it works</h2>
        <div className="lp-steps">
          <div className="lp-step"><span className="lp-n">1</span><h3>Fund the treasury</h3><p>Create the treasury wallet and top it up from the Testnet faucet, or connect Xaman and fund from your own XRP on Mainnet.</p></div>
          <div className="lp-step"><span className="lp-n">2</span><h3>Agents run skills</h3><p>Click an agent, run a skill. The Chief flies over, thought particles stream down, and the agent works and reacts.</p></div>
          <div className="lp-step"><span className="lp-n">3</span><h3>Settle on-ledger</h3><p>Priced skills settle an x402 invoice as a real signed Payment, with the skill + invoice written into the transaction memo.</p></div>
          <div className="lp-step"><span className="lp-n">4</span><h3>Track &amp; reward</h3><p>Every action is anchored on-ledger (a memo hash), agents earn XP/levels, and Lazy tallies tokens, XRP and productivity.</p></div>
        </div>
      </section>

      <section className="lp-sec" id="profile">
        <h2>How you manage your profile</h2>
        <div className="lp-two">
          <div>
            <h3>Two ways to hold funds</h3>
            <ul>
              <li><b>Testnet / Devnet (play):</b> DojoBuro generates real XRPL wallets in your browser and funds them from the public faucet. Seeds are stored only in your browser's localStorage — never sent anywhere.</li>
              <li><b>Mainnet (real value):</b> connect <b>Xaman</b> (XUMM). Signing is non-custodial — every payment is approved on your phone and no seed ever touches the app.</li>
            </ul>
          </div>
          <div>
            <h3>Your identity &amp; settings</h3>
            <ul>
              <li>Your "profile" today is your connected wallet + local preferences (network, theme, sound) persisted in localStorage.</li>
              <li>The treasury wallet is your company account; each agent has its own wallet so payments between them are real transfers.</li>
              <li>For a hosted multi-user product, this becomes an account (email / passkey) with server-held preferences and read-only wallet links — see the roadmap below.</li>
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
        <h2>Connecting real tools so agents create real content</h2>
        <p className="lp-lead">Today the agents animate and settle real payments; wiring them to real output is a thin, well-scoped layer.</p>
        <div className="lp-two">
          <div>
            <h3>The model + tool layer</h3>
            <ul>
              <li>Each skill maps to a <b>tool contract</b> (inputs → output). Behind it sits a model call (Claude via the Anthropic API) with the tools that function needs.</li>
              <li>Tools are exposed through <b>MCP servers</b> — GitHub, Slack, Notion, Google Drive, a browser, a mailer, analytics — so an agent can open a PR, post a message, or draft a doc.</li>
              <li>The x402 payment becomes the <b>metering</b>: a skill only runs its tool calls after its invoice settles, giving every unit of real work an on-ledger receipt.</li>
            </ul>
          </div>
          <div>
            <h3>Real deliverables</h3>
            <ul>
              <li>Rex ships a real PR, Mia drafts a campaign, Ada builds a live dashboard, Fin reconciles the treasury — each returns an artifact link.</li>
              <li>Outputs are stored (object storage / a database) and shown in the agent card and activity log, not just simulated.</li>
              <li>Secrets (API keys, MCP tokens) live server-side; the browser never sees them.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec alt" id="env">
        <h2>Where the agents actually run</h2>
        <div className="lp-two">
          <div>
            <h3>Today — 100% in your browser</h3>
            <ul>
              <li>DojoBuro is a static single-page app. The 3D office, wallet generation, faucet funding and XRPL payments all run client-side, talking straight to public XRPL WebSocket nodes.</li>
              <li>No server, no database — it deploys to any static host and there is nothing to operate.</li>
            </ul>
          </div>
          <div>
            <h3>For real work — a cloud worker</h3>
            <ul>
              <li>Model + tool execution runs in the cloud (a serverless function or a container/worker), not on your machine — so it keeps running when the tab is closed and keeps keys safe.</li>
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
        <p className="lp-note">The client is already production-grade and non-custodial. "100% functional" is about adding the authenticated worker that turns each skill into a real deliverable — everything else is live today.</p>
      </section>

      <section className="lp-final">
        <h2>Ready to run your office?</h2>
        <button className="lp-cta big" onClick={enter}>Enter DojoBuro →</button>
        <p className="lp-foot">Real XRPL · x402 · non-custodial · open in your browser</p>
      </section>
      <SupportBot />
    </div>
  )
}
