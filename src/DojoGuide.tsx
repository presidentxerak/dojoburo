import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'
import { SiteHeader } from './components/SiteHeader'
import { SupportBot } from './components/SupportBot'
import { ConnectorLogo } from './components/ConnectorLogo'
import { CONNECTORS, type ConnectorCategory } from './data/connectors'
import { connectorById, userSteps, operatorSteps, REDIRECT_PATH } from './data/connectorGuide'

// The Dojo Guide · a full page (not a modal) in the landing page's visual
// language: same title/subtitle/text sizes, same cards. It covers connectors
// end to end (connect, configure, use, see results, stay safe, budget), running
// DojoBuro locally or in the cloud, linking your own external agents, and a
// directory that deep-links to a dedicated step-by-step page for each connector.

const CONTACT = 'presidentxerak@gmail.com'

// gallery order for the connector directory
const CATEGORY_ORDER: ConnectorCategory[] = [
  'Docs & Notes', 'Dev', 'Comms', 'CRM & Sales', 'Marketing & Social', 'Design', 'Finance', 'Scheduling', 'Support', 'Storage & Legal',
]

function GuideShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="landing dg2">
      <SiteHeader />
      {children}
      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          <a href="/">Home</a><a href="/guide">Guide</a><a href="/#stack">Connect</a><a href="/#pricing">Pricing</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href={`mailto:${CONTACT}`}>Support</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}

/** Full guide page at /guide. */
export function GuidePage() {
  return (
    <GuideShell>
      <section className="lp-hero dg2-hero">
        <p className="lp-kicker">Dojo Guide · connect your apps, run real work, stay safe</p>
        <h1>Wire your <span className="hl-mag">tools</span>, keep control.</h1>
        <p className="lp-sub">
          Connectors let your AI agents do real work inside your everyday apps · create the Notion page, open the
          GitHub PR, draft the Gmail, raise the Stripe invoice. This guide shows how to connect them, configure each
          one step by step, use them safely, see the results, run DojoBuro locally or in the cloud, and keep your
          spend under control.
        </p>
        <div className="lp-badges">
          <span>{CONNECTORS.length} connectors</span><span>Step-by-step per app</span><span>OAuth · sealed vault</span><span>Cloud or local</span>
        </div>
      </section>

      <section className="lp-sec" id="what">
        <h2>1 · What a connector is</h2>
        <p className="lp-lead">A connector is a secure bridge between DojoBuro and one of your apps. Connecting is a one-time OAuth handshake: you approve access once, a token is stored encrypted on the server, and from then on the agent can act inside that app on your behalf. You never hand over a password.</p>
        <p className="lp-note">Each agent function only offers the apps that make sense for it · Engineering gets GitHub and Linear, Growth gets Gmail and HubSpot, Finance gets Stripe and QuickBooks, and so on.</p>
      </section>

      <section className="lp-sec alt" id="connect">
        <h2>2 · How to connect an app (as a user)</h2>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Open the agent</b><span>Click an agent in the office, or open Studio and select it. You'll see the apps its tasks can use.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Click Connect</b><span>Approve the provider's screen once. Tap the ⓘ on any app for a per-app explainer and a link to its full setup page.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>The agent acts for real</b><span>The token is sealed server-side (AES-256-GCM); the browser never sees a secret. Disconnect anytime.</span></div></div>
        </div>
      </section>

      <section className="lp-sec" id="directory">
        <h2>3 · Set up each app · step by step</h2>
        <p className="lp-lead">Every connector has its own page with precise, numbered setup instructions · scopes to grant, the exact env vars, whether it needs an MCP hub, and the common gotchas. Pick yours:</p>
        {CATEGORY_ORDER.map((cat) => {
          const list = CONNECTORS.filter((c) => c.category === cat)
          if (!list.length) return null
          return (
            <div key={cat} className="dg2-catblock">
              <h3 className="dg2-cat">{cat}</h3>
              <div className="dg2-grid">
                {list.map((c) => (
                  <a key={c.id} className="dg2-ccard" href={`/guide/${c.id}`}>
                    <ConnectorLogo id={c.id} label={c.label} size={34} />
                    <span className="dg2-ccard-meta">
                      <strong>{c.label}</strong>
                      <em>{c.auth === 'oauth' ? 'OAuth' : 'API token'} · setup guide →</em>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <section className="lp-sec alt" id="use">
        <h2>4 · Use a connected app &amp; see the result</h2>
        <div className="lp-two">
          <div>
            <h3>Run the work</h3>
            <ul>
              <li>Give the agent a task in Studio, or run one from its card. When a task uses a connected app, the agent performs the real action · it creates the page, opens the PR, drafts the mail.</li>
              <li>Priced tasks settle an x402 payment on the XRP Ledger, so each unit of work is metered and auditable.</li>
            </ul>
          </div>
          <div>
            <h3>See the result</h3>
            <ul>
              <li><b>In the app</b> · the deliverable renders in the agent card and the activity log, with a link.</li>
              <li><b>In your tool</b> · the real artifact lands in the connected app (the Notion page, the Drive doc, the Linear issue, the GitHub PR).</li>
              <li><b>On-ledger</b> · every priced action writes an x402 memo · a verifiable receipt of what ran.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="runtime">
        <h2>5 · Run DojoBuro in the cloud or locally</h2>
        <p className="lp-lead">The browser is always the cockpit · it shows the 3D office, triggers tasks and signs Mainnet payments through your wallet. The model and tool calls run in a small worker (serverless functions under <code>/api</code>), and you choose where that worker lives. Here is exactly how to run each way.</p>

        <div className="dg2-run">
          <div className="dg2-runcol">
            <h3>A · In the cloud (managed · fastest)</h3>
            <ol className="dg2-osteps">
              <li><b>Deploy the repo</b><span>Import <code>presidentxerak/dojoburo</code> into Vercel (or any host that runs the <code>/api</code> functions). The static client builds with <code>npm run build</code>.</span></li>
              <li><b>Add a database + vault key</b><span>Set <code>DATABASE_URL</code> (any Postgres · Neon, Supabase, RDS) and a 32-byte <code>CONNECTOR_ENC_KEY</code> for the token vault. Apply the schema: <code>psql "$DATABASE_URL" -f db/connectors.sql</code>.</span></li>
              <li><b>Add the keys you want live</b><span>Each connector's OAuth keys (see its page), plus a model path: users bring their own Claude key (BYOK) or you enable the free-model cascade. Optional: <code>STRIPE_SECRET_KEY</code> for card top-ups, settlement keys for Mainnet x402.</span></li>
              <li><b>Redeploy</b><span>The worker keeps agents running when the tab is closed, every secret stays in the server-side vault, and Connect buttons go live.</span></li>
            </ol>
          </div>
          <div className="dg2-runcol">
            <h3>B · Locally / self-hosted</h3>
            <ol className="dg2-osteps">
              <li><b>Clone &amp; install</b><span><code>git clone</code> the repo, then <code>npm install</code>.</span></li>
              <li><b>Configure <code>.env</code></b><span>Copy <code>.env.example</code> to <code>.env</code> and fill the same vars as the cloud (database, vault key, connector keys, model key). Every option is documented inline.</span></li>
              <li><b>Run it</b><span><code>npm run dev</code> serves the client + the <code>/api</code> worker locally. Point connectors at your own MCP endpoints if you self-host those too · your keys, your machine, the same office.</span></li>
              <li><b>Keep control</b><span>Bring your own Claude key or the free cascade; nothing leaves your infrastructure. Ideal for privacy-sensitive stacks and Enterprise self-hosting.</span></li>
            </ol>
          </div>
        </div>
        <div className="dg2-links">
          <a className="lp-cta sm" href="https://github.com/presidentxerak/dojoburo/blob/main/docs/DEPLOYMENT.md" target="_blank" rel="noreferrer">Full deployment guide ↗</a>
          <a className="lp-ghost" href="https://github.com/presidentxerak/dojoburo/blob/main/.env.example" target="_blank" rel="noreferrer">All env vars (.env.example) ↗</a>
        </div>
        <p className="lp-note">Either way the client is a static single-page app: the 3D office, wallet generation, faucet funding and XRPL payments all run in your browser, talking straight to public XRPL nodes · no server needed for those.</p>
      </section>

      <section className="lp-sec alt dg2-callout dg2-real" id="real">
        <h2>Is it real, or a mock?</h2>
        <p className="lp-lead">It's <b>real, not a mock</b> · and it degrades honestly when a key is missing.</p>
        <div className="lp-two">
          <div>
            <h3>Live today, for real</h3>
            <ul>
              <li>The 3D office, agents, wallets and XRPL payments are real: signed transactions on the actual XRP Ledger with x402 memos (free Testnet XRP, or real value on Mainnet).</li>
              <li>Connectors do real work: with the worker + OAuth configured, an agent really creates the Notion page, opens the GitHub PR, drafts the Gmail.</li>
              <li>Deliverables are real Claude output (your BYOK key or the free-model cascade), rendered in-app and written to your connected tool.</li>
            </ul>
          </div>
          <div>
            <h3>What needs configuration</h3>
            <ul>
              <li>No worker/keys yet? The app still runs fully as a client · you explore the office, build dojos and run Testnet payments. Model + connector actions simply show a clear "needs a key / set up" state instead of faking a result.</li>
              <li>Nothing is stubbed or faked behind the scenes: a task either runs for real or tells you exactly what to configure.</li>
              <li>That's why the setup pages above matter · they turn each capability from "ready" to "live".</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec alt" id="external">
        <h2>6 · Link your own external agents</h2>
        <p className="lp-lead">Already run agents elsewhere · at Notion, Slack, or any AI platform? Plug them straight into a DojoBuro agent from Studio → the agent → External agents → "+ Link an agent". Three ways, by protocol:</p>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>MCP · tools</b><span>An MCP server whose tools join every deliverable this agent runs, exactly like a connector. Needs a Claude key.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>A2A · delegate</b><span>An Agent2Agent host (card at <code>/.well-known/agent-card.json</code>, <code>message/send</code>). Delegate a whole task and get the reply back.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Webhook</b><span>A simple https endpoint that receives <code>{'{ task }'}</code> and returns text · the lightest way to wire a custom agent.</span></div></div>
        </div>
        <p className="lp-note">Paste the https URL and an optional auth token, then hit Verify. The token never touches the browser · a server proxy holds it, exactly like the connector vault. Only link endpoints you trust.</p>
      </section>

      <section className="lp-sec dg2-callout dg2-safe" id="safe">
        <h2>7 · Stay safe · avoid getting hacked</h2>
        <div className="lp-two">
          <div>
            <ul>
              <li><b>OAuth, never passwords</b> · you approve access on the provider's own screen. DojoBuro never sees your password.</li>
              <li><b>Tokens are sealed server-side</b> · encrypted with AES-256-GCM, auto-refreshed; the browser never receives a secret.</li>
              <li><b>Least privilege</b> · grant only the scopes the tasks need. Each connector page lists the minimal set.</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><b>Revoke anytime</b> · Disconnect in the app, or remove DojoBuro from the provider's connected-apps settings.</li>
              <li><b>Non-custodial wallets</b> · your XRP stays in your wallet; you approve every payment. Never paste a seed or private key anywhere · DojoBuro never asks for one.</li>
              <li><b>Beware phishing</b> · only connect from your real site URL and check the provider's domain on the OAuth screen.</li>
            </ul>
          </div>
        </div>
        <p className="lp-note">DojoBuro ships a strict Content-Security-Policy, security headers (HSTS, no-sniff, frame-deny), server-side rate limits and spending caps, bot/scraper filtering at the edge, and keeps every model + connector secret out of the browser.</p>
      </section>

      <section className="lp-sec dg2-callout dg2-budget" id="budget">
        <h2>8 · Don't blow your budget</h2>
        <div className="lp-two">
          <div>
            <ul>
              <li><b>Intelligence is ~free</b> · bring your own model key (BYOK) or use the free-model cascade. Most tasks cost nothing.</li>
              <li><b>Priced tasks are tiny</b> · a few skills carry an x402 price of ~0.15–0.50 XRP, and that's a transfer between your own wallets, not a fee.</li>
              <li><b>Set a per-agent XRP budget</b> in Studio so an agent can't overspend.</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><b>Practise on Testnet</b> · Testnet / Devnet XRP is free and worthless · run everything there first, then switch to Mainnet.</li>
              <li><b>Disconnect unused apps</b> and watch Lazy's dashboard for live totals (XRP, tokens, tasks).</li>
              <li><b>Managed credits</b> (optional) cover hosted-model runs · 1 credit ≈ 1 task · top up only if you don't use BYOK.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="trouble">
        <h2>9 · Quick troubleshooting</h2>
        <ul className="lp-check">
          <li><b>App shows "Set up" not "Connect"</b> · the operator hasn't added that app's OAuth keys yet (see its setup page).</li>
          <li><b>"needs a key" on a task</b> · add your Claude key in Studio → Billing, or use a free-cascade task.</li>
          <li><b>Payment won't settle</b> · make sure the treasury wallet is created and funded (faucet on Testnet).</li>
          <li><b>Still stuck?</b> · ask the in-app assistant, or email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.</li>
        </ul>
      </section>
    </GuideShell>
  )
}

/** Dedicated per-connector page at /guide/<id>. */
export function ConnectorGuidePage({ id }: { id: string }) {
  const c = connectorById(id)
  if (!c) {
    return (
      <GuideShell>
        <section className="lp-sec">
          <h2>Connector not found</h2>
          <p className="lp-lead">We couldn't find a connector called "{id}".</p>
          <p><a className="lp-ghost" href="/guide">← Back to the Dojo Guide</a></p>
        </section>
      </GuideShell>
    )
  }
  const usteps = userSteps(c)
  const osteps = operatorSteps(c)

  return (
    <GuideShell>
      <section className="lp-sec dg2-conn-hero">
        <a className="dg2-back" href="/guide">← All connectors</a>
        <div className="dg2-conn-head">
          <ConnectorLogo id={c.id} label={c.label} size={56} />
          <div>
            <h1>Connect {c.label}</h1>
            <p className="dg2-conn-tags">
              <em>{c.category}</em>
              <em>{c.auth === 'oauth' ? 'OAuth' : 'API token'}</em>
              <em>{c.functions.join(' · ')}</em>
            </p>
          </div>
        </div>
        <p className="lp-lead">{c.blurb}</p>
      </section>

      <section className="lp-sec alt">
        <h2>Use it (as a user · 1 click)</h2>
        <div className="lp-steps3">
          {usteps.map((s) => (
            <div className="lp-step3" key={s.n}>
              <span className={`lp-step3-n dg2-n${s.n}`}>{s.n}</span>
              <div><b>{s.title}</b><span>{s.body}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-sec">
        <h2>Set it up (operator · one-time)</h2>
        <p className="lp-lead">Do this once so the Connect button goes live for everyone. You'll need access to the {c.provider} developer console.</p>
        <ol className="dg2-osteps">
          {osteps.map((s) => (
            <li key={s.n}>
              <b>{s.title}</b>
              <span>{s.body}</span>
            </li>
          ))}
        </ol>
        <div className="dg2-envbox">
          <h3>Environment variables</h3>
          <ul>
            {c.env.map((e) => (
              <li key={e.name}>
                <code>{e.name}</code>
                <span>{e.note} · <a href={e.link} target="_blank" rel="noreferrer">where to get it ↗</a></span>
              </li>
            ))}
          </ul>
          <p className="lp-note">Redirect / callback URL to whitelist: <code>https://your-site{REDIRECT_PATH}</code></p>
        </div>
        <div className="dg2-links">
          <a className="lp-cta sm" href={c.docsUrl} target="_blank" rel="noreferrer">Open the {c.provider} console ↗</a>
          <a className="lp-ghost" href="/guide">Back to the guide</a>
        </div>
      </section>

      <section className="lp-sec alt dg2-callout dg2-safe">
        <h2>Security</h2>
        <ul className="lp-check">
          <li>Authorization happens on {c.provider}'s own screen · DojoBuro never sees your password.</li>
          <li>The token is sealed server-side with AES-256-GCM and auto-refreshed; the browser never receives it.</li>
          <li>Grant least-privilege scopes only, and revoke anytime by disconnecting or from {c.provider}'s settings.</li>
        </ul>
      </section>
    </GuideShell>
  )
}
