import { useEffect } from 'react'
import { PROFESSIONS, professionColor } from './data/professions'
import { CONNECTORS, CONNECTOR_BY_ID } from './data/connectors'
import { SKINS } from './data/skins'
import { DOJO_TEMPLATES } from './data/templates'
import { SupportBot } from './components/SupportBot'
import { useWork } from './agents/workStore'
import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'
import { SiteHeader } from './components/SiteHeader'
import { AsciiIcon } from './components/AsciiIcon'
import { Object3D } from './components/landing/Object3D'
import { DojoDiorama } from './components/landing/DojoDiorama'
import { HeroCreate } from './components/landing/HeroCreate'
import { StudioTeam } from './components/landing/TeamCards'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { ShowcaseGallery, PerformanceBoard, Testimonials } from './components/landing/Showcase'
import { Pricing } from './components/landing/Pricing'
import { SHOW_MOCK_COMPANIES } from './config/flags'

// vivid complementary primaries used as per-section accent touches
const C = { magenta: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', blue: '#2f6bff' }

/** A-to-Z landing page: what DojoBuro is, how the CEO + crew run your company,
 *  what a task costs in credits, how agents get wired to real tools, where they
 *  run, and the path to a fully-functional production deployment. */
export function Landing({ enter }: { enter: () => void }) {
  // paid plans drop the user on the Billing / plans view inside the dojo
  const goBilling = () => { useWork.getState().openStudio('billing'); enter() }
  const goAssistant = () => document.querySelector('#assistant')?.scrollIntoView({ behavior: 'smooth' })

  // Scroll-reveal · each landing section cascades in as it enters the viewport.
  // An IntersectionObserver (root = viewport, so it works whichever element
  // actually scrolls) flips .lp-in; we keep observing (cheap) so nothing is
  // missed, and a safety timer reveals everything after a few seconds no matter
  // what. Reduced-motion / no-JS shows the page fully.
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const secs = Array.from(document.querySelectorAll<HTMLElement>('.landing .lp-sec'))
    if (reduce || !('IntersectionObserver' in window)) { secs.forEach((s) => s.classList.add('lp-in')); return }
    secs.forEach((s) => s.classList.add('lp-reveal'))
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('lp-in')
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 })
    secs.forEach((s) => io.observe(s))
    const safety = window.setTimeout(() => secs.forEach((s) => s.classList.add('lp-in')), 5000)
    return () => { io.disconnect(); clearTimeout(safety) }
  }, [])

  return (
    <div className="landing">
      <SiteHeader enter={enter} />

      <section className="lp-hero">
        <h1>Found your company <span className="hl-acid">in one sentence</span>.</h1>
        <p className="lp-sub">
          One sentence, and <Wordmark /> spins up a 3D office where a CEO and its agents build your brand, site,
          ads and more · <b>real pro studios</b>, right in your browser.
        </p>
        <HeroCreate enter={enter} />
        <div className="lp-badges">
          <span>12 pro studios</span><span>100% local · nothing is uploaded</span><span>Credits · no crypto</span><span>{CONNECTORS.length} connectors</span><span>Installable (PWA)</span>
        </div>
        {/* the zen dojo · animated backdrop only (non-interactive) */}
        <div className="lp-hero-zen" aria-hidden>
          <DojoDiorama />
        </div>
      </section>

      <div className="lm-band">
        <p className="lm-cap">Built on open rails · connects your whole stack</p>
        <LogoMarquee />
      </div>

      <section className="lp-sec" id="studios">
        <span className="lp-pill">12 studios · one agent each · 100% in your browser</span>
        <h2>Meet the office</h2>
        <p className="lp-lead sm">
          Each agent in your office owns one studio. Click a teammate and their studio opens: it generates a first
          version with AI, then you keep full control. Video editing, image compression, design rendering and export
          all run <b>locally</b> · your files never leave your machine.
        </p>
        <StudioTeam enter={enter} />
        <p className="lp-note">Brand → website → ads → video → finance → clients → analytics: the brand you pick in Brandi sets one company name, domain and look that flows into every studio, so the whole team stays consistent and reuses each other's work.</p>
        <p className="lp-note">And front-and-centre in your 3D office: the team <b>panda</b> · your mascot. He cheers the crew on and breaks into a dance every time a task ships. Tap him to make him celebrate on cue.</p>
      </section>

      {SHOW_MOCK_COMPANIES && (
        <section className="lp-sec" id="board">
          <span className="lp-pill">Live · updates every day</span>
          <h2>Real companies. Real revenue.</h2>
          <p className="lp-lead">
            A snapshot of the fleet founded inside <Wordmark />: today's top earners and the numbers the crews are
            putting up right now. The board re-ranks itself every day.
          </p>
          <PerformanceBoard />
        </section>
      )}

      {SHOW_MOCK_COMPANIES && (
        <section className="lp-sec alt" id="showcase">
          <span className="lp-pill">Showcase · 15 companies, 15 identities</span>
          <h2>Every company gets its own look</h2>
          <p className="lp-lead">
            Each dojo ships a real website and ad campaigns in its own voice · its own colours, typography and tone.
            Here are fifteen it built, from AI headshots to same-day flowers. No two look alike.
          </p>
          <ShowcaseGallery />
        </section>
      )}

      <section className="lp-sec" id="jobs">
        <Object3D kind="briefcase" color={C.magenta} side="right" parallax={0.16} />
        <span className="lp-pill">New · adapts to your trade</span>
        <h2>Built around your business</h2>
        <p className="lp-lead sm">
          <Wordmark /> reshapes your company to your trade. Pick what you do and the office is tailored for
          you · a matching crew of specialists led by your CEO, a fitting 3D environment, and the exact apps
          your business needs, wired and ready to run the real work of that trade.
        </p>
        <div className="lp-jobs">
          {PROFESSIONS.map((p) => (
            <div className="lp-job" key={p.id} style={{ ['--pc' as any]: professionColor(p.id) }}>
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
        <p className="lp-note">Don't see yours exactly? Every dojo (company) is fully editable · mix any crew, any environment and any apps. These are just fast starting points.</p>
      </section>

      <section className="lp-sec alt" id="stack">
        <Object3D kind="network" color={C.teal} side="left" parallax={0.12} />
        <span className="lp-ico" style={{ background: C.teal }}><AsciiIcon kind="stack" /></span>
        <h2>Connect your whole stack</h2>
        <p className="lp-lead">
          {CONNECTORS.length} app connectors and counting. Connect with one click · OAuth (with PKCE), tokens
          sealed server-side in an encrypted vault · and your agents act inside them for real: create the
          Notion page, open the GitHub PR, draft the Gmail, post the campaign, raise the Stripe invoice, move
          the Jira ticket.
        </p>
        <p className="lp-note">Every agent ships with a small, curated set of the best apps for its job · no clutter, no duplicates. It's fully modular: open any studio's <b>Connect apps</b> panel to add any connector from the catalog, or remove one you don't need. Your choices are saved per company.</p>
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
        <div className="lp-connect-steps">
          <h3>How to connect an app</h3>
          <div className="lp-steps3">
            <div className="lp-step3"><span className="lp-step3-n" style={{ background: C.magenta }}>1</span><div><b>Create the OAuth app</b><span>In the provider console (Notion, GitHub, Google Cloud…), create an app and set the redirect to <code>your-site/api/connect</code>. Copy the <b>client id</b> &amp; <b>secret</b>.</span></div></div>
            <div className="lp-step3"><span className="lp-step3-n" style={{ background: C.teal }}>2</span><div><b>Add the keys to env</b><span>Set <code>APP_CLIENT_ID</code> / <code>APP_CLIENT_SECRET</code> (Google apps share <code>GOOGLE_CLIENT_ID/SECRET</code>). PKCE apps (Airtable, X, Canva) are automatic.</span></div></div>
            <div className="lp-step3"><span className="lp-step3-n" style={{ background: C.orange }}>3</span><div><b>Point an MCP endpoint</b><span>Notion, GitHub, Linear &amp; Stripe work as-is. For Gmail, Drive, Calendar, Slack &amp; others, set <code>APP_MCP_URL</code> to a hub (Composio / Zapier / Pipedream).</span></div></div>
          </div>
          <p className="lp-note">Then the user just clicks <b>Connect</b> on the agent card, approves the OAuth screen once, and the agent acts inside the app. Ask the assistant for the exact env var of any tool.</p>
        </div>
      </section>

      <section className="lp-sec" id="studio">
        <span className="lp-ico" style={{ background: C.blue }}><AsciiIcon kind="build" /></span>
        <h2>Build your own team</h2>
        <p className="lp-lead">Every company ships with twelve teammates · hide the ones you don't need and <b>create your own custom agents</b> (name, job title, colour, apps, a task list and a private notepad) right from the CEO dashboard. Pick from {SKINS.length} skins across {DOJO_TEMPLATES.length} worlds, set a per-agent budget, and rearrange the whole team on the dojo grid · tap an agent, tap a cell, and the 3D office reseats live. Press <kbd className="lp-kbd">Cmd/Ctrl&nbsp;K</kbd> anytime to jump to any agent, page or action.</p>
        <div className="lp-schema">
          <div className="lp-node"><b>Create</b><span>12 presets + your own custom agents</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Skin</b><span>{SKINS.length} skins · {DOJO_TEMPLATES.length} worlds, in 3D</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Function</b><span>Apps, tasks, notes &amp; a budget</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Arrange</b><span>Tap to reseat · many dojos</span></div>
        </div>
        <div className="lp-actions" style={{ marginTop: 18 }}>
          <button className="lp-cta" onClick={enter}>Open the Dojo Studio →</button>
        </div>
      </section>

      {SHOW_MOCK_COMPANIES && (
        <section className="lp-sec" id="testimonials">
          <span className="lp-pill">Founders, in their words</span>
          <h2>What the founders say</h2>
          <p className="lp-lead">Real talk from the people running these companies · each set in their own brand's typeface.</p>
          <Testimonials />
        </section>
      )}

      <section className="lp-sec alt" id="how">
        <Object3D kind="gear" color={C.yellow} side="right" parallax={0.14} />
        <span className="lp-ico" style={{ background: C.yellow, color: '#1a1300' }}><AsciiIcon kind="bolt" /></span>
        <h2>How it works</h2>
        <div className="lp-steps">
          <div className="lp-step"><span className="lp-n">1</span><h3>Describe your company</h3><p>Tell your CEO agent what you're building, in one sentence. It drafts the plan, names the offers and assembles the crew.</p></div>
          <div className="lp-step"><span className="lp-n">2</span><h3>The crew builds &amp; runs it</h3><p>Specialist agents ship your website, craft offers and drive growth · B2B outreach, email, Meta ads (Facebook &amp; Instagram) and SEO · doing real work in your apps.</p></div>
          <div className="lp-step"><span className="lp-n">3</span><h3>You steer</h3><p>Chat with your CEO to change course, set its autonomy (Auto → Ultra) and a daily credit cap. A guard stops it from looping.</p></div>
          <div className="lp-step"><span className="lp-n">4</span><h3>Get your daily report</h3><p>Each task costs about one credit, settled behind the scenes. Your CEO dashboard tallies the numbers and emails a daily report · WhatsApp &amp; Telegram coming soon.</p></div>
        </div>
      </section>

      <section className="lp-sec" id="cascade">
        <Object3D kind="coins" color={C.yellow} side="right" parallax={0.15} />
        <span className="lp-ico" style={{ background: C.yellow, color: '#1a1300' }}><AsciiIcon kind="cost" /></span>
        <h2>Smart, and genuinely cheap</h2>
        <p className="lp-lead">Every task runs through a cost cascade: it stops at the cheapest tier that passes a quality check. Most work is free; frontier models are the rare last resort, so a task costs about a cent.</p>
        <div className="lp-cascade">
          <div className="lp-tier"><b>0</b><span className="lp-tier-main">Templates &amp; cached data · no model</span><span className="lp-tier-cost">free</span></div>
          <div className="lp-tier"><b>1</b><span className="lp-tier-main">Free tiers · Groq · Gemini · Cerebras</span><span className="lp-tier-cost">≈ free</span></div>
          <div className="lp-tier"><b>2</b><span className="lp-tier-main">Open models · DeepSeek · Llama</span><span className="lp-tier-cost">≈ $0.01</span></div>
          <div className="lp-tier"><b>3</b><span className="lp-tier-main">Frontier · Claude, only when needed</span><span className="lp-tier-cost">rare</span></div>
        </div>
        <p className="lp-note">A built-in support assistant uses the same cascade with hard spending limits and keys kept server-side.</p>
      </section>

      <section className="lp-sec alt" id="pricing">
        <Object3D kind="gem" color={C.orange} side="left" parallax={0.12} />
        <span className="lp-ico" style={{ background: C.orange }}><AsciiIcon kind="price" /></span>
        <h2>Simple, credit-based pricing</h2>
        <p className="lp-lead">
          Start free. Upgrade when you need more credits. <b>1 credit ≈ 1 agentic task</b> · pick how many you
          need each month and the price scales with you. Bring your own model key and hosted-model credits become
          optional; either way there's no crypto to manage.
        </p>
        <Pricing enter={enter} goBilling={goBilling} goAssistant={goAssistant} connectors={CONNECTORS.length} />
        <p className="lp-note">
          Credits roll over month to month. Buy them in your own currency (USD, EUR, JPY…) and top up anytime ·
          settlement happens behind the scenes. Exploring is always free.
        </p>
      </section>

      <section className="lp-sec alt" id="pay">
        <h2>Pay your way · in your own currency</h2>
        <p className="lp-lead">Prices show in your currency. You buy credits in $, €, ¥ and more; each task spends about one credit, settled on a fast rail behind the scenes. No crypto to manage.</p>
        <div className="lp-schema">
          <div className="lp-node"><b>$ · € · ¥</b><span>Pick your currency</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Credits</b><span>~1 credit meters a task</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><b>Fast rail</b><span>Settled behind the scenes + receipt</span></div>
        </div>
      </section>

      <section className="lp-sec alt" id="onramp">
        <Object3D kind="card" color={C.blue} side="right" parallax={0.13} />
        <span className="lp-pill">Credits · your currency · no crypto</span>
        <h2>From your card to a company that runs itself</h2>
        <p className="lp-lead">
          Top up with a card and get <b>credits in your own currency</b> · a simple, transparent balance.
          Those credits fund your dojo, and the crew spends about one credit per task as it builds and runs
          your company. Payments settle on a fast rail behind the scenes · you never touch a wallet or any
          crypto.
        </p>
        <div className="lp-schema lp-flow">
          <div className="lp-node"><span className="lp-nico">1</span><b>Pay by card</b><span>€ · $ · ¥ via Stripe</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">2</span><b>Get credits</b><span>Priced in your currency</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">3</span><b>The crew works</b><span>~1 credit per task</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">4</span><b>Settled behind the scenes</b><span>A fast rail · no crypto</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">5</span><b>Clear receipt</b><span>Every task is metered</span></div>
        </div>
        <div className="lp-benefits">
          <div className="lp-benefit"><b>No crypto to manage</b><span>Buy credits in your own currency and spend them like any balance · no wallet, no seed, nothing to hold.</span></div>
          <div className="lp-benefit"><b>Real work, metered</b><span>Your agents don't just chat · they do real tasks, each metered as about one credit so your spend is always transparent.</span></div>
          <div className="lp-benefit"><b>Auditable</b><span>Every task carries a receipt in your dashboard · you see exactly what ran and what it cost.</span></div>
        </div>
        <p className="lp-note">Card top-ups add credits via a Stripe checkout and settle on a fast rail behind the scenes. Just exploring? A free tier works the same, at no cost.</p>
      </section>

      <section className="lp-sec" id="xrpl">
        <Object3D kind="coins" color={C.blue} side="left" parallax={0.14} />
        <span className="lp-pill">Under the hood · XRP Ledger + x402</span>
        <h2>How settlement actually works</h2>
        <p className="lp-lead">
          That "fast rail behind the scenes" is the <b>XRP Ledger</b>. Every time an agent completes a task, the
          run settles as an <b>x402 micropayment</b> · the on-ledger version of an HTTP <code>402 Payment
          Required</code>. You never see it (you just spend credits), but here is exactly what happens.
        </p>
        <div className="lp-schema lp-flow">
          <div className="lp-node"><span className="lp-nico">1</span><b>Agent finishes a task</b><span>e.g. a design system, a campaign</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">2</span><b>x402 invoice</b><span>skill id + amount + invoice ref</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">3</span><b>Signed XRPL Payment</b><span>hot wallet signs server-side</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">4</span><b>Validated in ~3–5s</b><span>fraction-of-a-cent fee</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">5</span><b>On-ledger receipt</b><span>memo: skill + invoice, auditable</span></div>
        </div>
        <div className="lp-two" style={{ marginTop: 26 }}>
          <div>
            <h3>Why x402</h3>
            <ul>
              <li><b>x402</b> mirrors the HTTP <code>402 Payment Required</code> status: each task is a metered, pay-as-you-go micropayment instead of a monthly bill.</li>
              <li>Every payment carries a structured <b>memo</b> (the skill invoked + an invoice id), so the ledger itself is the audit trail · one verifiable receipt per unit of real work.</li>
              <li>It's built for <b>autonomous agents</b>: an agent can pay for a tool call, or pay another agent, without a human or a credit card in the loop.</li>
            </ul>
          </div>
          <div>
            <h3>Why the XRP Ledger</h3>
            <ul>
              <li><b>Micropayments make sense</b>: fees are a tiny fraction of a cent, so metering a task at ~1 credit is actually economical · card rails can't do that.</li>
              <li><b>Fast &amp; final</b>: transactions validate in about 3–5 seconds, with deterministic finality · no waiting, no reversals.</li>
              <li><b>Purpose-built for payments</b> and energy-light, with a native DEX and payment channels for streaming micro-settlements.</li>
            </ul>
          </div>
        </div>
        <div className="lp-benefits">
          <div className="lp-benefit"><b>Invisible to you</b><span>You pay in your own currency and hold plain credits · no wallet, no seed, no token to manage. The XRPL rail is the operator's plumbing, not your problem.</span></div>
          <div className="lp-benefit"><b>Agent-to-agent ready</b><span>Because agents can hold and move value, they can settle between each other · a real internal economy, on the ledger.</span></div>
          <div className="lp-benefit"><b>Fully auditable</b><span>Each task's payment is queryable on-ledger via <code>account_tx</code>, so what ran and what it cost can always be verified.</span></div>
        </div>
        <p className="lp-note">Live on XRPL Mainnet with x402 memos. Prefer no crypto at all? The same flow runs in pure credit-ledger mode · settlement is an operator choice, never a user requirement.</p>
      </section>


      <section className="lp-sec" id="profile">
        <h2>How you manage your profile</h2>
        <div className="lp-two">
          <div>
            <h3>Your account &amp; credits</h3>
            <ul>
              <li><b>Credits balance:</b> you hold a simple balance in your own currency (USD, EUR, JPY…). Top up by card anytime · about one credit per task, and nothing to hold or manage.</li>
              <li><b>Behind the scenes:</b> spending settles on a fast rail so you never see a wallet, a seed or any crypto · just a clear, metered balance.</li>
            </ul>
          </div>
          <div>
            <h3>Your settings &amp; autonomy</h3>
            <ul>
              <li>Set how much rope your CEO gets · autonomy from Auto to Low, Medium, Hard or Ultra · plus a daily credit cap so it can never overspend.</li>
              <li>A built-in guard stops the CEO from looping, and preferences (theme, sound, notifications) are saved to your account.</li>
              <li>Get a daily report by email today · WhatsApp &amp; Telegram coming soon · and your CEO stays reachable to steer any time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec alt" id="cost">
        <h2>What a task costs in credits</h2>
        <p className="lp-lead">Most work is free or about one credit; only heavier jobs cost a little more. You buy credits in your own currency and they settle on a fast rail behind the scenes · no crypto, no fees to think about.</p>
        <table className="lp-table">
          <thead><tr><th>Task type</th><th>Credits</th><th>Settlement</th><th>Total / run</th></tr></thead>
          <tbody>
            <tr><td>Free tasks (standups, reports, tracking…)</td><td>0</td><td>included</td><td>free</td></tr>
            <tr><td>Light agentic task</td><td>~1 credit</td><td>behind the scenes</td><td>≈ 1 credit</td></tr>
            <tr><td>Standard agentic task</td><td>~1 credit</td><td>behind the scenes</td><td>≈ 1 credit</td></tr>
            <tr><td>Premium agentic task (e.g. a full campaign)</td><td>2–3 credits</td><td>behind the scenes</td><td>≈ 2–3 credits</td></tr>
          </tbody>
        </table>
        <p className="lp-note">Exploring is free while you try things out. On a paid plan the same tasks spend real credits · your CEO dashboard shows your running totals live.</p>
      </section>

      <section className="lp-sec" id="tools">
        <h2>Real tools, real deliverables</h2>
        <p className="lp-lead">The agents don't just animate · they produce real work with your connected apps, metered as credits.</p>
        <div className="lp-two">
          <div>
            <h3>The model + tool layer</h3>
            <ul>
              <li>Each task maps to a <b>tool contract</b> (inputs → output). Behind it sits a Claude model call · your own key (BYOK) or a free-model cascade · with the tools that function needs.</li>
              <li>Your connected apps are exposed as <b>remote MCP servers</b> · Notion, GitHub, Gmail, Slack, Jira, Stripe and {CONNECTORS.length - 6}+ more · so an agent opens a PR, posts a message or drafts a doc for real.</li>
              <li>Credits are the <b>metering</b>: a task runs its tool calls and spends about one credit, settled behind the scenes, so every unit of real work is auditable.</li>
            </ul>
          </div>
          <div>
            <h3>Real deliverables, today</h3>
            <ul>
              <li>Brandi ships a real brand identity, Weblos builds your website, Devi opens a PR, Marketus drafts a campaign and Busino builds a financial model · each returns an artifact you can open.</li>
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
              <li>DojoBuro is a static single-page app. The 3D office and the Dojo City you visit from the dashboard all run client-side, right in your browser.</li>
              <li>No server, no database · it deploys to any static host and there is nothing to operate.</li>
            </ul>
          </div>
          <div>
            <h3>For real work · a cloud worker</h3>
            <ul>
              <li>Model + tool execution runs in the cloud (a serverless function or a container/worker), not on your machine · so it keeps running when the tab is closed and keeps keys safe.</li>
              <li>The browser stays the cockpit: it shows the office, triggers tasks and tracks your credits; the worker does the heavy, authenticated work.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-sec" id="prod">
        <h2>Making it 100% production-ready</h2>
        <ul className="lp-check">
          <li>Ship the static app behind a CDN with the strict CSP, security headers and bot/scraper protection already in the repo.</li>
          <li>Add a small backend for the model + MCP tool calls, with secrets in a vault and per-user rate limits &amp; budgets.</li>
          <li>Accounts &amp; profiles: passkey/email auth, server-held preferences and a per-account credits balance.</li>
          <li>Move priced tasks onto real credits with card top-ups; keep a free tier as a sandbox.</li>
          <li>Persist artifacts and the activity log; expose an audit view of every task and what it cost.</li>
          <li>Observability (logs, traces, spend dashboards), automated tests and CI, plus a staged free → paid rollout.</li>
        </ul>
        <p className="lp-note">The client is already production-grade. "100% functional" is about adding the authenticated worker that turns each task into a real deliverable · everything else is live today.</p>
      </section>

      <section className="lp-sec" id="assistant">
        <Object3D kind="eye" color={C.teal} side="left" parallax={0.13} />
        <span className="lp-ico" style={{ background: C.teal }}><AsciiIcon kind="cast" /></span>
        <h2>Ask the assistant anything</h2>
        <p className="lp-lead">Not sure where to start, how connectors work, or what a task costs? The DojoBuro assistant answers right here · it uses the free knowledge base first and only escalates to a model for the tricky questions.</p>
        <div className="lp-assistant"><SupportBot embedded /></div>
      </section>

      <section className="lp-final">
        <Object3D kind="rocket" color={C.orange} side="right" parallax={0.1} />
        <span className="lp-ico" style={{ background: C.orange }}><AsciiIcon kind="run" /></span>
        <h2>Ready to run your office?</h2>
        <button className="lp-cta big lp-cta-create" onClick={() => { document.querySelector<HTMLInputElement>('#create-hero .hc-input')?.focus(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Create your company →</button>
        <p className="lp-foot">Credits · no crypto · powered by growth hacking · open in your browser</p>
      </section>

      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          {SHOW_MOCK_COMPANIES && <a href="#board">Leaderboard</a>}
          {SHOW_MOCK_COMPANIES && <a href="#showcase">Showcase</a>}
          <a href="#jobs">Your job</a>
          <a href="#stack">Connect apps</a>
          <a href="#studio">Dojo Studio</a>
          <a href="#pricing">Pricing</a>
          <a href="#onramp">Credits</a>
          <a href="#xrpl">XRPL &amp; x402</a>
          <a href="#prod">Production</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="#create-hero" onClick={(e) => { e.preventDefault(); document.querySelector<HTMLInputElement>('#create-hero .hc-input')?.focus(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Create your company</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}
