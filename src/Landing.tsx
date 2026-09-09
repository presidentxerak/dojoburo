import { useEffect, useState } from 'react'
import { PROFESSIONS, professionColor } from './data/professions'
import { CONNECTORS } from './data/connectors'
import { SupportBot } from './components/SupportBot'
import { useWork } from './agents/workStore'
import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'
import { SiteHeader } from './components/SiteHeader'
import { AsciiIcon } from './components/AsciiIcon'
import { Object3D } from './components/landing/Object3D'
import { DojoDiorama } from './components/landing/DojoDiorama'
import { StudioTeam } from './components/landing/TeamCards'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { Pricing } from './components/landing/Pricing'
import { TutorialOverlay } from './components/guide/TutorialOverlay'
import { CREW_COUNT, TEAM_COUNT, APP_LIVE_COUNT } from './data/facts'
import { LESSON_COUNT } from './data/academy'

// vivid complementary primaries used as per-section accent touches
const C = { magenta: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', blue: '#2f6bff' }

/** A-to-Z landing page: what DojoBuro is, how the CEO + crew run your company,
 *  what each plan buys, how agents get wired to real tools, where they
 *  run, and the path to a fully-functional production deployment. */
export function Landing({ enter }: { enter: () => void }) {
  // paid plans drop the user on the Billing / plans view inside the dojo
  const goBilling = () => { useWork.getState().openStudio('billing'); enter() }
  // The Enterprise card used to scroll to an #assistant section. That section
  // is gone; Dojobot is the launcher in the corner, so open it directly.
  const goAssistant = () => document.querySelector<HTMLButtonElement>('.sb-launch')?.click()
  // the "How to?" walkthrough · full screen, plays on its own
  const [howTo, setHowTo] = useState(false)

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

      {/* The hero is deliberately almost empty: a title, one big button, and a
          way to watch how it works. Everything else lives further down.

          It used to promise that building agents here was easy, which is the
          sentence every agent product on earth is already using — and it sold
          the one thing we are worst at (being a builder) instead of the two we
          are alone in: the teams arrive already formed, and we are not in the
          middle of your model bill. A company that sells tokens cannot write
          the second sentence below. That is the whole position. */}
      <section className="lp-hero lp-hero-min">
        <h1>Your company, already <span className="hl-acid">staffed</span></h1>
        <p className="lp-hero-sub">
          {TEAM_COUNT} teams that arrive formed, briefed and wired to their apps — not a blank canvas
          to configure. They run on <b>your own</b> Claude key, so nobody puts a meter between you and
          your own work.
        </p>
        <div className="lp-hero-acts">
          <button className="lp-hero-go lp-cta-create" onClick={enter}>Create your dojo teams</button>
          <button className="lp-hero-how" onClick={() => setHowTo(true)}>How to?</button>
        </div>
        {/* Never used an agent before? The whole course is free and starts from
            zero · it is also how most people arrive here from search. */}
        <a className="lp-hero-learn" href="/academy">
          New to all this? <b>Learn it free at the Dojo Academy</b> · {LESSON_COUNT} lessons, no code →
        </a>
        {/* the zen dojo · animated backdrop only (non-interactive) */}
        <div className="lp-hero-zen" aria-hidden>
          <DojoDiorama />
        </div>
      </section>

      <div className="lm-band">
        <p className="lm-cap">Open rails · your teammates act inside your own accounts</p>
        <LogoMarquee />
      </div>

      <section className="lp-sec" id="studios">
        <span className="lp-pill">{CREW_COUNT} teammates · each with its own brief and its own apps</span>
        <h2>Meet the office</h2>
        <p className="lp-lead sm">
          Each one sits at their desk and shows what they are doing — working, thinking, stuck. Click any of
          them to open what they have produced, the apps they work in, and the brief that makes them a
          specialist.
        </p>
        <StudioTeam enter={enter} />
      </section>

      <section className="lp-sec alt" id="pay">
        <h2>Your key. No meter.</h2>
        <p className="lp-lead">
          Add your Anthropic key and your teammates run on it · sealed server-side, and Anthropic bills you
          directly for exactly what you used. Everything the company makes also saves to a single
          <b> .dojo</b> file on your own disk, and opens again anywhere.
        </p>
        <div className="lp-schema lp-flow">
          <div className="lp-node"><span className="lp-nico">1</span><b>Add your key</b><span>Sealed with AES-256-GCM</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">2</span><b>Run as much as you like</b><span>No cap, no counter</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">3</span><b>Anthropic bills you</b><span>For what you actually used</span></div>
        </div>
      </section>

      <section className="lp-sec" id="jobs">
        <Object3D kind="briefcase" color={C.magenta} side="right" parallax={0.16} />
        <h2>Built around your business</h2>
        <p className="lp-lead sm">Pick your trade · the crew, their briefs and their apps arrive set up for it.</p>
        {/* 23 trades as one scannable grid. This was 23 cards with a blurb and
            five app chips each — nearly three screens of text nobody reads on
            the way past. The visitor is looking for THEIR trade, not for a
            description of the other twenty-two; the detail is one click away
            inside the app, where they actually pick one. */}
        <div className="lp-trades">
          {PROFESSIONS.map((p) => (
            <button
              type="button"
              className="lp-trade"
              key={p.id}
              style={{ ['--pc' as any]: professionColor(p.id) }}
              onClick={enter}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      <section className="lp-sec alt" id="stack">
        <Object3D kind="network" color={C.teal} side="left" parallax={0.12} />
        <h2>{APP_LIVE_COUNT} apps your team acts inside</h2>
        <p className="lp-lead sm">
          Approve once on the app's own screen · then your team creates the Notion page, opens the GitHub PR,
          drafts the Gmail, raises the Stripe invoice. The catalogue below lists {CONNECTORS.length} and each
          card says whether it can act yet.
        </p>
        <div className="lp-toolwall">
          {CONNECTORS.map((c) => (
            <span className="lp-toolpill" key={c.id} title={c.blurb}>{c.label}</span>
          ))}
        </div>
      </section>

      <section className="lp-sec alt" id="pricing">
        <Object3D kind="gem" color={C.orange} side="left" parallax={0.12} />
        <h2>You pay for the teams, not for tokens</h2>
        <Pricing enter={enter} goBilling={goBilling} goAssistant={goAssistant} connectors={APP_LIVE_COUNT} />
      </section>

      <section className="lp-final">
        <Object3D kind="rocket" color={C.orange} side="right" parallax={0.1} />
        <span className="lp-ico" style={{ background: C.orange }}><AsciiIcon kind="run" /></span>
        <h2>Ready to run your office?</h2>
        <button className="lp-cta big lp-cta-create" onClick={enter}>Create your company →</button>
        <p className="lp-foot">Sold as software · no crypto · open in your browser</p>
      </section>

      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          {/* Only anchors that exist. Three of these pointed at sections the
              page no longer has, and Pricing was listed twice — nobody clicks
              a footer, which is exactly why it rots. */}
          <a href="#studios">The office</a>
          <a href="#pay">Your key</a>
          <a href="#jobs">Your job</a>
          <a href="#stack">Connect apps</a>
          <a href="#pricing">Pricing</a>
          <a href="/academy">Academy</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="#app" onClick={(e) => { e.preventDefault(); enter() }}>Create your company</a>
        </nav>
      </footer>
      <SupportBot />
      {howTo && <TutorialOverlay onClose={() => setHowTo(false)} onStart={() => { setHowTo(false); enter() }} />}
    </div>
  )
}
