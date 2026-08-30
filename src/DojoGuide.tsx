import { useState } from 'react'
import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'
import { SiteHeader } from './components/SiteHeader'
import { TopBar } from './components/TopBar'
import { SupportBot } from './components/SupportBot'
import { ConnectorLogo } from './components/ConnectorLogo'
import { CONNECTORS, type ConnectorCategory } from './data/connectors'
import { connectorById, userSteps, operatorSteps, REDIRECT_PATH } from './data/connectorGuide'
import { StudioTeam } from './components/landing/TeamCards'
import { Tutorial } from './components/guide/Tutorial'
import { type WalkId } from './components/guide/tutorialBeats'
import { TutorialOverlay } from './components/guide/TutorialOverlay'

// The Dojo Guide · a full page (not a modal) in the landing page's visual
// language: same title/subtitle/text sizes, same cards. It covers connectors
// end to end (connect, configure, use, see results, stay safe, budget), running
// DojoBuro locally or in the cloud, linking your own external agents, and a
// directory that deep-links to a dedicated step-by-step page for each connector.

// gallery order for the connector directory
const CATEGORY_ORDER: ConnectorCategory[] = [
  'Docs & Notes', 'Dev', 'Comms', 'CRM & Sales', 'Marketing & Social', 'Design', 'Finance', 'Scheduling', 'Support', 'Storage & Legal',
]

function GuideShell({ children, inApp }: { children: React.ReactNode; inApp?: boolean }) {
  return (
    <div className={`landing dg2${inApp ? ' dg-inapp' : ''}`}>
      {/* Opened from inside the dojo · use the full dojo header so the guide is
          consistent with every other in-app surface. The public /guide page
          keeps the landing header. */}
      {inApp ? <TopBar /> : <SiteHeader />}
      {children}
      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          {inApp
            ? <><button className="dg-foot-link" onClick={() => { try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* ignore */ } location.hash = 'app' }}>Back to dojo</button><button className="dg-foot-link" onClick={() => { location.hash = 'connect' }}>Connect</button></>
            : <><a href="/">Home</a><a href="/guide">Guide</a><a href="/#stack">Connect</a><a href="/#pricing">Pricing</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></>}
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}

/** The guide's own "How to?" button · plays a walkthrough full screen in place,
 *  exactly like the buttons on the app's own screens. */
function HowTo({ walk, label }: { walk: WalkId; label?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" className="howto-btn dg2-howto" onClick={() => setOpen(true)}>
        {label ?? 'How to?'}
      </button>
      {open && <TutorialOverlay walk={walk} onClose={() => setOpen(false)} />}
    </>
  )
}

/** The four walkthroughs, pickable. Same player the app's How-to buttons use. */
function Walkthroughs() {
  const [walk, setWalk] = useState<WalkId>('overview')
  const TABS: { id: WalkId; label: string }[] = [
    { id: 'overview', label: 'The whole thing' },
    { id: 'company', label: 'Create your project' },
    { id: 'teams', label: 'Dojo teams' },
    { id: 'apps', label: 'Apps & what they cost' },
  ]
  return (
    <>
      <div className="ct-filters" style={{ justifyContent: 'flex-start' }}>
        {TABS.map((t) => (
          <button key={t.id} className={walk === t.id ? 'on' : ''} onClick={() => setWalk(t.id)}>{t.label}</button>
        ))}
      </div>
      <Tutorial walk={walk} />
    </>
  )
}

/** Full guide page · at /guide (landing header) or #guide (inside the dojo). */
export function GuidePage({ inApp }: { inApp?: boolean } = {}) {
  return (
    <GuideShell inApp={inApp}>
      <section className="lp-hero dg2-hero">
        <h1>Your <span className="hl-mag">studios</span> + your tools, <span className="hl-acid">under control</span>.</h1>
        <p className="lp-sub">
          You name your project, pick the ready-made teams you need, and each teammate opens a pro studio
          (branding, website, Meta campaigns, video editing, finance, CRM, analytics) that runs
          <b> 100% in your browser</b> · your files never leave. Connect your real apps (Meta, Gmail, Stripe…)
          and they work inside them for you. This guide covers the whole thing, step by step.
        </p>
        <div className="lp-badges">
          <span>12 studios · 100% local</span><span>{CONNECTORS.length} apps</span><span>One-click connect · keys kept safe</span><span>Cloud or local</span>
        </div>
      </section>

      <section className="lp-sec" id="walkthrough">
        <h2>See it in 60 seconds</h2>
        <p className="lp-lead">
          Four animated walkthroughs · the same ones behind every <b>How to?</b> button in the app. Pick one,
          step through it, or hit <b>Play all</b>.
        </p>
        <Walkthroughs />
      </section>

      <section className="lp-sec" id="how">
        <h2>How it works</h2>
        <HowTo walk="company" />
        <p className="lp-lead">There is no prompt to write. You name your project, then pick the ready-made teams you need · each one arrives already staffed with the right teammates, wired to the right apps. Open any teammate to work with them, and connect your real apps to go live.</p>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Name your project</b><span>One field on the home page, then hit <b>Create your project</b> · that is the moment we ask you to sign in, so it is still there next time.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Choose your dojo teams</b><span>Tick as many cards as you need — a social campaign, an app, a book, a shop. Each names its crew, its apps and what a run costs before you pick it.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Open a studio &amp; connect apps</b><span>Click a teammate to build · brand, website, campaigns, leads, finances · and link Gmail, Stripe, Notion… so they act in your real accounts. Connecting is free; only the work costs credits.</span></div></div>
        </div>
        <p className="lp-note"><b>Do I have to sign in?</b> Only to keep things. Naming a project and reading every team card is free. The moment you add a team, we ask you to sign in so your company, your teammates and everything they make are still there next time · or you can carry on as a guest, saved in this browser only.</p>
        <h3 className="dg2-cat" style={{ marginTop: 26 }}>Your twelve teammates &amp; what each one does</h3>
        <StudioTeam enter={() => { window.location.href = '/#app' }} />
        <p className="lp-note" style={{ marginTop: 14 }}>These twelve ship with every dojo — and the crew is yours to shape. See <a className="linklike" href="#team">Shape your team</a> just below.</p>
      </section>

      <section className="lp-sec alt" id="around">
        <h2>Finding your way around</h2>
        <p className="lp-lead">The app's header is deliberately quiet · no logo, no brand, just the controls for whatever you are looking at. Everything else lives in the menu.</p>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>The menu (top right)</b><span>Connect apps, the Dojo Guide, the City, Quick search, Dojo settings, your Account, Credits and Settings · all in one place.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Inside a dojo</b><span>Four controls sit in the middle of the header: <b>Project</b> (back to your project), <b>Manage team</b>, <b>Dojo settings</b>, and <b>Graph mode</b>. On a phone they are the bottom bar.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>The team tabs</b><span>Right under the header, every other team in your project · switching from the campaign crew to the app crew is one tap.</span></div></div>
        </div>
        <p className="lp-note"><b>Graph mode</b> is the whole team on one screen: a card per teammate with what they do, how much they have actually produced, when they last worked, and every app they can reach · add or remove an app right on the card.</p>
      </section>

      <section className="lp-sec" id="team">
        <h2>Shape your team</h2>
        <HowTo walk="teams" />
        <p className="lp-lead">Your dojo ships with twelve teammates, but nothing is locked. Hide what you don't need, build your own agents, and arrange the office exactly how you like.</p>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Hide or show</b><span>Hide any preset you don't use from the CEO dashboard; restore it from the roster whenever you want.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Create custom agents</b><span>Build your own teammate — name, job title, colour, the apps it works with, a task list you assign to it and a private notepad. All saved locally.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Arrange the office</b><span>Tap <b>Arrange team</b> on the dojo, tap an agent, then tap a cell. The 3D office reseats live · on desktop and mobile.</span></div></div>
        </div>
        <p className="lp-note">Press <kbd>Cmd/Ctrl&nbsp;+&nbsp;K</kbd> (or the <b>Search</b> button) any time for a quick launcher that jumps to any agent, page or action. And front-and-centre in the 3D office stands the team <b>panda</b> · your mascot, who cheers the crew on and dances every time a task ships (tap him for a celebration on cue).</p>
        <p className="lp-note"><b>One brand, everywhere.</b> The company name and domain you pick in Brandi flow into Website, Growth/SEO, Business and Marketing, so every studio shows the same identity · your dojo always stays coherent.</p>
      </section>

      <section className="lp-sec alt" id="studios-how">
        <h2>Inside the studios · how each one works</h2>
        <HowTo walk="overview" />
        <p className="lp-lead">Click a teammate to open its studio. The AI generates a first version instantly, then you keep full control · and everything below runs in your browser.</p>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Brandi · Brand Studio — find a name &amp; build your identity</h3>
          <ul>
            <li>Describe your product, pick a few keywords, and it combines them into brandable names · reroll for more.</li>
            <li><b>Real .com availability</b>, checked live in your browser (DNS-over-HTTPS): a <b>green check</b> means the domain is verified free at the registries; taken names show alternatives and other TLDs.</li>
            <li>Generates a logo, colour palette and font pairing into a central <b>Brand Kit</b> that every other studio reuses · one identity everywhere.</li>
          </ul>
        </div>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Weblos · Website Studio — a pro, block-based builder</h3>
          <ul>
            <li>Left panel <b>Pages</b> + <b>Styles</b> (Squarespace-style). Click any section to edit its text, image or video in place.</li>
            <li>Global design: corner radius, border width &amp; colour, and an <b>interaction editor</b> for card &amp; button hover effects · all live.</li>
            <li>Build a multi-page site with working navigation, add an online <b>Store</b> with a real cart, then <b>export a standalone HTML</b> file · nothing is uploaded. Colours &amp; fonts follow your Brand Kit.</li>
          </ul>
        </div>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Marketus · Marketing Studio — one creative flow</h3>
          <ul>
            <li>Brief → Audience → Creatives → Export. It builds the audience and <b>5 brand-styled ad variants</b> (Feed &amp; Story) you can edit and regenerate.</li>
            <li><b>Video editor</b>: import clips, trim, sequence on a timeline, add text overlays and an optional ElevenLabs voiceover (your key), export a real <code>.webm</code>.</li>
            <li><b>Image editor</b> (filters, any social format, PNG export) and an <b>Assets</b> library that compresses images to WebP locally. Publish to X or LinkedIn once connected.</li>
          </ul>
        </div>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Pumpi · Growth — SEO + leads together</h3>
          <ul>
            <li>SEO suite: a live <b>site audit</b> and on-page analysis of your own website, keyword research, a rank-tracker watchlist and a competitor list · honest empty states until an external data source is connected.</li>
            <li><b>Leads (CRM)</b>: a pipeline board, CSV import, personalised outreach that merges each contact's details, and real <b>Gmail</b> sending or a live <b>HubSpot</b> pull.</li>
          </ul>
        </div>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Busino · Business — finance &amp; analytics that explain themselves</h3>
          <ul>
            <li>Finance: import a CSV (or sync <b>QuickBooks</b>/<b>Xero</b>) and see revenue, expenses, cash, VAT and a 3-month forecast.</li>
            <li>Analytics: CAC, LTV, LTV:CAC, ROI, growth and conversion with plain-language insights. Traffic reads from GA4 / Search Console when connected.</li>
            <li>Sales won in the CRM and campaign budgets flow in automatically · no fake numbers, real activity only.</li>
          </ul>
        </div>

        <div className="dg2-studio">
          <h3 className="dg2-cat">Chief, Sentinel, Vaultor &amp; the group agents</h3>
          <ul>
            <li><b>Chief (CEO)</b>: tell it your goal in one sentence; it plans and delegates. "Launch Chief" chains brand → website → offer → ads → outreach on its own and emails a daily report.</li>
            <li><b>Sentinel (Security Guardian)</b>: choose how much your team does on its own each day, set a daily spending limit, save your keys safely, and flip a switch to pause outgoing email or stop everything at once.</li>
            <li><b>Vaultor (Billing)</b>: buy credit packs in your own currency by card · about one credit per task, no crypto.</li>
            <li><b>Devi, Nexa, Helpi, Legi</b>: each shows <b>live data</b> from its connected apps (issues &amp; PRs, channels, tickets, documents) and fires one real action.</li>
          </ul>
        </div>
      </section>

      <section className="lp-sec alt" id="what">
        <h2>1 · What connecting an app means</h2>
        <HowTo walk="apps" />
        <p className="lp-lead">Connecting an app is a secure bridge between DojoBuro and something you already use. You approve access once on the app's own screen, and from then on your teammate can work inside it for you. You never hand over a password, and you can disconnect at any time.</p>
        <p className="lp-note">Each agent ships with a small, curated set of the best apps for its job · Engineering gets GitHub and Linear, Growth gets Gmail and HubSpot, Finance gets Stripe and QuickBooks, and so on. It's fully modular: open any studio's <b>Connect apps</b> panel, hit <b>+ Add apps</b> to bring in any other app, or remove one you don't use · your choice is saved per company.</p>
      </section>

      <section className="lp-sec alt" id="connect">
        <h2>2 · How to connect an app (as a user)</h2>
        <HowTo walk="apps" />
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Open the agent</b><span>Click an agent, open its <b>Connect apps</b> panel and you'll see its curated apps · use <b>+ Add apps</b> to bring in another app, or remove one you don't need.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Click Connect</b><span>Approve the provider's screen once. Tap the ⓘ on any app for a per-app explainer and a link to its full setup page.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>The agent acts for real</b><span>Access is sealed away on the server · this browser never holds a secret. Disconnect whenever you want.</span></div></div>
        </div>
      </section>

      <section className="lp-sec" id="directory">
        <h2>3 · Set up each app · step by step</h2>
        <HowTo walk="apps" />
        <p className="lp-lead">Every app has its own page with numbered, step-by-step setup instructions · what to allow, what to fill in, and the usual gotchas. Pick yours:</p>
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
        <HowTo walk="apps" />
        <div className="lp-two">
          <div>
            <h3>Run the work</h3>
            <ul>
              <li>Give the teammate a task from their card, or run the whole plan. When a task uses a connected app, the agent performs the real action · it creates the page, opens the PR, drafts the mail.</li>
              <li>Priced tasks spend about one credit, settled on a fast rail behind the scenes, so each unit of work is metered and auditable · no crypto.</li>
            </ul>
          </div>
          <div>
            <h3>See the result</h3>
            <ul>
              <li><b>In the app</b> · the result appears on the teammate's card and in the activity log, with a link.</li>
              <li><b>In your tool</b> · the real artifact lands in the connected app (the Notion page, the Drive doc, the Linear issue, the GitHub PR).</li>
              <li><b>Receipt</b> · every priced action leaves a receipt in your dashboard · a clear record of what ran and what it cost.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="runtime">
        <h2>5 · Run DojoBuro in the cloud or locally</h2>
        <p className="lp-lead">The browser is always the cockpit · it shows the 3D office and Dojo City, triggers tasks and tracks your credits. The model and tool calls run in a small worker (serverless functions under <code>/api</code>), and you choose where that worker lives. Here is exactly how to run each way.</p>

        <div className="dg2-run">
          <div className="dg2-runcol">
            <h3>A · In the cloud (managed · fastest)</h3>
            <ol className="dg2-osteps">
              <li><b>Deploy the repo</b><span>Import <code>presidentxerak/dojoburo</code> into Vercel (or any host that runs the <code>/api</code> functions). The static client builds with <code>npm run build</code>.</span></li>
              <li><b>Add a database + vault key</b><span>Set <code>DATABASE_URL</code> (any Postgres · Neon, Supabase, RDS) and a 32-byte <code>CONNECTOR_ENC_KEY</code> for the token vault. Apply the schema: <code>psql "$DATABASE_URL" -f db/connectors.sql</code>.</span></li>
              <li><b>Add the keys you want live</b><span>Each connector's OAuth keys (see its page), plus a model path: users bring their own Claude key (BYOK) or you enable the free-model cascade. Optional: <code>STRIPE_SECRET_KEY</code> for card top-ups and credit settlement.</span></li>
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
        <p className="lp-note">Either way the client is a static single-page app: the 3D office and the Dojo City you visit from the dashboard all run in your browser · no server needed for those.</p>
      </section>

      <section className="lp-sec alt dg2-callout dg2-real" id="real">
        <h2>Is it real, or a mock?</h2>
        <p className="lp-lead">It's <b>real, not a mock</b> · and it degrades honestly when a key is missing.</p>
        <div className="lp-two">
          <div>
            <h3>Live today, for real</h3>
            <ul>
              <li>The 3D office, Dojo City and agents are real, and so are payments: you buy credits in your own currency and each task spends about one, settled on a fast rail behind the scenes · no crypto.</li>
              <li>Connectors do real work: with the worker + OAuth configured, an agent really creates the Notion page, opens the GitHub PR, drafts the Gmail.</li>
              <li>Results are real Claude output (your own key, or a free model when the operator enables one), shown in the app and written to your connected tool.</li>
            </ul>
          </div>
          <div>
            <h3>What needs configuration</h3>
            <ul>
              <li>No worker/keys yet? The app still runs fully as a client · you explore the office, build dojos (companies) and try the free tier. Model + connector actions simply show a clear "needs a key / set up" state instead of faking a result.</li>
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
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Lends its tools</b><span>Its tools join everything this teammate does, exactly like a connected app. Needs a Claude key. (MCP)</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>A2A · delegate</b><span>An Agent2Agent host (card at <code>/.well-known/agent-card.json</code>, <code>message/send</code>). Delegate a whole task and get the reply back.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Webhook</b><span>A simple https endpoint that receives <code>{'{ task }'}</code> and returns text · the lightest way to wire a custom agent.</span></div></div>
        </div>
        <p className="lp-note">Paste the https address and an optional access key, then hit Verify. The key never touches this browser · the server holds it, exactly like your connected apps. Only add helpers you trust.</p>
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
              <li><b>No crypto to manage</b> · you pay in your own currency and hold a simple credits balance · there is no wallet, seed or private key to secure, and DojoBuro never asks for one.</li>
              <li><b>Beware phishing</b> · only connect from your real site URL and check the provider's domain on the OAuth screen.</li>
            </ul>
          </div>
        </div>
        <p className="lp-note">DojoBuro ships a strict Content-Security-Policy, security headers (HSTS, no-sniff, frame-deny), server-side rate limits and spending caps, bot/scraper filtering at the edge, and keeps OAuth connector tokens and the operator's model key in a server-side encrypted vault. Note: keys you bring yourself (e.g. an ElevenLabs voice key) and any local wallet material stay in your browser — treat this browser like your own device.</p>
        <p className="lp-note"><b>Prompt-injection defense.</b> When an agent reads content from a connected app (an email, an issue, a ticket, a document), that content is treated as <b>untrusted data, never as instructions</b>. Every agent run carries a security preamble: it won't obey commands hidden in tool output, won't reveal your secrets or env vars, and won't send or share data to anyone you didn't explicitly name · it prefers drafts and never deletes. Your free-text briefs are sanitized too, and deliverables render as plain text (no raw HTML/scripts). As a final safety net, the <b>first</b> outbound action (an email, a post, a broadcast) asks for your explicit confirmation · after you confirm once, it won't ask again (re-enable it anytime in Settings → Automation &amp; safety).</p>
      </section>

      <section className="lp-sec dg2-callout dg2-budget" id="budget">
        <h2>8 · Don't blow your budget</h2>
        <HowTo walk="apps" />
        <div className="lp-two">
          <div>
            <ul>
              <li><b>Intelligence is ~free</b> · bring your own Claude key, or use a free model when one is enabled. Most tasks cost nothing.</li>
              <li><b>Priced tasks are tiny</b> · most cost about one credit; only heavier jobs cost a couple more, and you buy credits in your own currency.</li>
              <li><b>Set a daily spending limit</b> and per-teammate budgets in the dojo settings so nothing can overspend · a guard also stops the CEO from looping.</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><b>Explore for free</b> · the free tier lets you build your project and run no-cost tasks first · add credits only when you go live.</li>
              <li><b>Disconnect unused apps</b> and watch your CEO dashboard for live totals (credits, tokens, tasks).</li>
              <li><b>Credits</b> (optional) cover runs on our AI · about 1 credit per task · top up only if you don't bring your own key.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="trouble">
        <h2>9 · Quick troubleshooting</h2>
        <ul className="lp-check">
          <li><b>App shows "Set up" not "Connect"</b> · the operator hasn't added that app's OAuth keys yet (see its setup page).</li>
          <li><b>"needs a key" on a task</b> · add your Claude key in the menu → My Credits.</li>
          <li><b>A task won't run</b> · check your credits balance isn't empty or capped by your daily limit.</li>
          <li><b>Still stuck?</b> · ask <b>Dojobot</b> (bottom right) · it answers in plain language and can play any walkthrough full screen.</li>
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
          <h2>App not found</h2>
          <p className="lp-lead">We couldn't find an app called "{id}".</p>
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
