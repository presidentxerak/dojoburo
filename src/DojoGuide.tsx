import { createPortal } from 'react-dom'
import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'

// The Dojo Guide · everything about connectors: how to connect, configure,
// use, see results, stay safe and keep the budget under control. Rendered both
// as a full page (/guide) and as an in-app / landing overlay.

const CONTACT = 'presidentxerak@gmail.com'

export function GuideContent() {
  return (
    <div className="dg-body">
      <p className="dg-lead">Connectors let your AI agents do <b>real work inside your everyday apps</b> · create the Notion page, open the GitHub PR, draft the Gmail, raise the Stripe invoice. This guide shows how to connect them, use them safely, see the results, and keep your spend under control.</p>

      <section className="dg-sec">
        <h2>1 · What a connector is</h2>
        <p>A connector is a secure bridge between DojoBuro and one of your apps. Connecting is a one-time <b>OAuth handshake</b>: you approve access once, a token is stored (encrypted) on the server, and from then on the agent can act inside that app on your behalf. You never hand over a password.</p>
        <p>Each agent function only offers the apps that make sense for it (Engineering → GitHub/Linear, Growth → Gmail/HubSpot, Finance → Stripe/QuickBooks, and so on).</p>
      </section>

      <section className="dg-sec">
        <h2>2 · How to connect an app (as a user)</h2>
        <ol className="dg-steps">
          <li><b>Open the agent</b> · click an agent in the office to open its card, or open <b>Studio → the agent</b>.</li>
          <li><b>Find "Connect apps"</b> · you'll see the apps this agent's tasks can use. Tap the <em>ⓘ</em> on any app for a per-app explainer.</li>
          <li><b>Click Connect</b> · approve the provider's screen once. The token is sealed server-side and the agent can now act inside the app.</li>
          <li><b>Disconnect anytime</b> · from the same panel, or revoke access in the provider's own settings.</li>
        </ol>
      </section>

      <section className="dg-sec">
        <h2>3 · How to configure your connector accounts (operator, one-time)</h2>
        <p>For live connections, the app needs an OAuth app per provider. This is a one-time setup:</p>
        <ol className="dg-steps">
          <li><b>Create the OAuth app</b> in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…). Set the <b>redirect URI</b> to <code>https://your-site/api/connect</code>.</li>
          <li><b>Pick least-privilege scopes</b> · only grant what the tasks need (e.g. write a doc, open a PR). Don't request admin scopes you won't use.</li>
          <li><b>Add the keys to env</b> · <code>APP_CLIENT_ID</code> / <code>APP_CLIENT_SECRET</code> (Google apps share <code>GOOGLE_CLIENT_ID/SECRET</code>). PKCE apps (Airtable, X, Canva) need no secret.</li>
          <li><b>Point an MCP endpoint</b> · Notion, GitHub, Linear and Stripe work as-is. For Gmail, Drive, Calendar, Slack and most others, set <code>APP_MCP_URL</code> to a hosted MCP hub (Composio / Zapier / Pipedream).</li>
        </ol>
        <p className="dg-note">Each app's <em>ⓘ</em> in the Connect panel lists the exact env var names and links to its console.</p>
      </section>

      <section className="dg-sec">
        <h2>4 · How to use a connected app</h2>
        <p>Give the agent tasks in <b>Studio</b> (or run its built-in skills). When you run a task that uses a connected app, the agent performs the real action · it creates the page, opens the PR, drafts the mail. Priced tasks settle an <b>x402</b> payment on the XRP Ledger, so each unit of work is metered and auditable.</p>
      </section>

      <section className="dg-sec">
        <h2>5 · How to see the result of the work</h2>
        <ul className="dg-list">
          <li><b>In the app</b> · the deliverable renders in the agent card and in the <b>activity log</b>, with a link.</li>
          <li><b>In your tool</b> · the real artifact lands in the connected app (the Notion page, the Drive doc, the Linear issue, the GitHub PR).</li>
          <li><b>On-ledger</b> · every priced action writes an x402 memo on the XRP Ledger · a verifiable receipt of what ran.</li>
        </ul>
      </section>

      <section className="dg-sec dg-callout dg-safe">
        <h2>6 · Stay safe · avoid getting hacked</h2>
        <ul className="dg-list">
          <li><b>OAuth, never passwords</b> · you approve access on the provider's own screen. DojoBuro never sees your password.</li>
          <li><b>Tokens are sealed server-side</b> · encrypted with AES-256-GCM, auto-refreshed; the browser never receives a secret.</li>
          <li><b>Least privilege</b> · grant only the scopes the tasks need. Review them when you create the OAuth app.</li>
          <li><b>Revoke anytime</b> · Disconnect in the app, or remove DojoBuro from the provider's connected-apps settings.</li>
          <li><b>Wallets are non-custodial</b> · your XRP stays in your wallet; you approve every payment. Never paste a seed or private key into any chat or field that asks for it · DojoBuro never will.</li>
          <li><b>Beware phishing</b> · only connect from your real site URL; check the provider's domain on the OAuth screen.</li>
        </ul>
      </section>

      <section className="dg-sec dg-callout dg-budget">
        <h2>7 · Don't blow your budget</h2>
        <ul className="dg-list">
          <li><b>Intelligence is ~free</b> · bring your own model key (BYOK) or use the free-model cascade. Most tasks cost nothing.</li>
          <li><b>Priced tasks are tiny</b> · a few skills carry an x402 price of ~0.15–0.50 XRP · and that's a transfer between <em>your own</em> wallets, not a fee.</li>
          <li><b>Set a per-agent XRP budget</b> in Studio so an agent can't overspend.</li>
          <li><b>Practise on Testnet</b> · Testnet/Devnet XRP is free and worthless · run everything there first, then switch to Mainnet.</li>
          <li><b>Disconnect unused apps</b> and watch Lazy's dashboard for live totals (XRP, tokens, tasks).</li>
          <li><b>Managed credits</b> (optional) cover hosted-model runs · 1 credit ≈ 1 task · top up only if you don't use BYOK.</li>
        </ul>
      </section>

      <section className="dg-sec">
        <h2>8 · Quick troubleshooting</h2>
        <ul className="dg-list">
          <li><b>App shows "Set up" not "Connect"</b> · the operator hasn't added that app's OAuth keys yet.</li>
          <li><b>"needs a key" on a task</b> · add your Claude key in Studio → Billing, or use a free-cascade task.</li>
          <li><b>Payment won't settle</b> · make sure the treasury wallet is created and funded (faucet on Testnet).</li>
          <li><b>Still stuck?</b> · ask the in-app assistant, or email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.</li>
        </ul>
      </section>
    </div>
  )
}

/** Full page at /guide. */
export function GuidePage() {
  return (
    <div className="landing legal dg-page">
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}><Logo size={30} /> <Wordmark /></a>
        <a className="lp-cta sm" href="/" style={{ textDecoration: 'none' }}>Back to home</a>
      </header>
      <main className="legal-body dg-main">
        <h1>Dojo Guide · Connectors</h1>
        <GuideContent />
      </main>
      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          <a href="/">Home</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href={`mailto:${CONTACT}`}>Support</a>
        </nav>
      </footer>
    </div>
  )
}

/** Overlay used in-app and on the landing page. */
export function GuideModal({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div className="dg-overlay" onClick={onClose}>
      <div className="dg-modal" role="dialog" aria-label="Dojo Guide" onClick={(e) => e.stopPropagation()}>
        <header className="dg-head">
          <h2>Dojo Guide · Connectors</h2>
          <div className="dg-head-actions">
            <a className="btn tiny ghost" href="/guide" target="_blank" rel="noreferrer">Open as page ↗</a>
            <button className="dg-x" onClick={onClose} aria-label="Close">×</button>
          </div>
        </header>
        <div className="dg-scroll"><GuideContent /></div>
      </div>
    </div>,
    document.body,
  )
}
