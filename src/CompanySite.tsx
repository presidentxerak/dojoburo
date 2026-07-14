import { useEffect } from 'react'
import { companyById, coRevenue, coSales, type MockCo } from './data/showcase'
import { HeroArt, DemoReel, PhotoStrip, ICONS, featureIcons } from './components/site/SiteArt'

// Three plausible value-props per company, generated from its mission so every
// site feels bespoke without hand-authoring 45 paragraphs.
function features(c: MockCo): Array<{ t: string; b: string }> {
  const base = c.mission.replace(/\.$/, '')
  return [
    { t: 'Made for you', b: `${base} · set up in minutes, no learning curve, cancel whenever you like.` },
    { t: 'Actually delightful', b: `A ${c.cat.toLowerCase()} experience obsessed with the details, so the boring parts disappear.` },
    { t: 'Fair, simple pricing', b: 'One clear price. No hidden fees, no surprises, no long contracts to sign.' },
  ]
}

function plans(c: MockCo) {
  const p = Math.max(6, Math.round(c.baseRevenue / 220))
  return [
    { name: 'Starter', price: `$${p}`, sub: 'For getting started', feats: ['Core features', 'Email support', 'Up to 3 seats'] },
    { name: 'Pro', price: `$${p * 3}`, sub: 'Most popular', feats: ['Everything in Starter', 'Priority support', 'Unlimited seats', 'Advanced analytics'], feat: true },
    { name: 'Team', price: `$${p * 7}`, sub: 'For growing teams', feats: ['Everything in Pro', 'SSO & roles', 'Dedicated manager', 'Custom onboarding'] },
  ]
}

function faqs(c: MockCo): Array<{ q: string; a: string }> {
  return [
    { q: `What is ${c.name}?`, a: `${c.mission} It’s the fastest way to get there · no setup headaches, no long onboarding.` },
    { q: 'Is there a free trial?', a: 'Yes. Every plan starts with a no-card-needed trial, and you can cancel or switch tiers whenever you like.' },
    { q: 'How quickly can I get started?', a: `Minutes. Sign up, follow the ${c.cat.toLowerCase()} setup, and you’re live the same day.` },
    { q: 'Do you offer support?', a: 'Real humans, fast. Email on every plan, and priority support on Pro and Team.' },
  ]
}

// A believable little product screenshot rendered in the brand accent, so the
// hero shows "the app" instead of a flat placeholder. Deliberately light-themed
// (like most SaaS screenshots) so it pops on any brand background.
function ProductMock({ c }: { c: MockCo }) {
  const ac = c.theme.accent
  const bars = [52, 74, 40, 88, 63, 96, 71]
  return (
    <div className="pm">
      <aside className="pm-side">
        <div className="pm-brand"><span className="pm-dot" style={{ background: ac }} />{c.name}</div>
        {['Overview', 'Activity', 'Reports', 'Settings'].map((n, i) => (
          <div key={n} className={`pm-nav${i === 0 ? ' on' : ''}`} style={i === 0 ? { background: `color-mix(in srgb, ${ac} 16%, #fff)`, color: ac } : undefined}>
            <span className="pm-nav-ic" style={{ background: i === 0 ? ac : '#cfd6e0' }} />{n}
          </div>
        ))}
      </aside>
      <main className="pm-main">
        <div className="pm-topbar"><b>{c.cat}</b><span className="pm-pill" style={{ background: ac }}>{c.site.cta}</span></div>
        <div className="pm-tiles">
          {['Today', 'This week', 'Total'].map((l, i) => (
            <div className="pm-tile" key={l}><span className="pm-tile-l">{l}</span><b style={i === 1 ? { color: ac } : undefined}>{['1,204', '8,940', '47.2k'][i]}</b></div>
          ))}
        </div>
        <div className="pm-chart">
          {bars.map((h, i) => <span key={i} style={{ height: `${h}%`, background: i === 5 ? ac : `color-mix(in srgb, ${ac} 34%, #dfe4ec)` }} />)}
        </div>
        <div className="pm-rows">
          {[0, 1, 2].map((i) => (
            <div className="pm-row" key={i}><span className="pm-avatar" style={{ background: `color-mix(in srgb, ${ac} ${70 - i * 18}%, #e5e9f0)` }} /><span className="pm-bar" style={{ width: `${70 - i * 14}%` }} /><span className="pm-tag" style={{ background: `color-mix(in srgb, ${ac} 18%, #fff)`, color: ac }}>OK</span></div>
          ))}
        </div>
      </main>
    </div>
  )
}

// Per-company look: layout archetype, button shape, and which media leads the
// hero (a branded illustration vs an app screenshot) + its frame · so the 15
// sites don't share one template.
type Layout = 'center' | 'split' | 'editorial' | 'bold'
type Frame = 'rounded' | 'circle' | 'blob'
interface Variant { layout: Layout; btnRad: number; hero: 'art' | 'app'; frame: Frame }
const VARIANT: Record<string, Variant> = {
  lumina: { layout: 'split', btnRad: 999, hero: 'app', frame: 'rounded' },
  cratebox: { layout: 'bold', btnRad: 999, hero: 'art', frame: 'blob' },
  verdea: { layout: 'center', btnRad: 10, hero: 'art', frame: 'circle' },
  nomadly: { layout: 'split', btnRad: 6, hero: 'app', frame: 'rounded' },
  pixelforge: { layout: 'bold', btnRad: 3, hero: 'app', frame: 'rounded' },
  brewly: { layout: 'editorial', btnRad: 8, hero: 'art', frame: 'rounded' },
  sootheer: { layout: 'center', btnRad: 999, hero: 'art', frame: 'blob' },
  ledgerly: { layout: 'split', btnRad: 8, hero: 'app', frame: 'rounded' },
  fitloop: { layout: 'bold', btnRad: 2, hero: 'art', frame: 'rounded' },
  petto: { layout: 'center', btnRad: 999, hero: 'art', frame: 'circle' },
  draftly: { layout: 'editorial', btnRad: 4, hero: 'app', frame: 'rounded' },
  bloombox: { layout: 'editorial', btnRad: 14, hero: 'art', frame: 'blob' },
  trailhead: { layout: 'split', btnRad: 8, hero: 'art', frame: 'rounded' },
  cardexo: { layout: 'bold', btnRad: 4, hero: 'app', frame: 'rounded' },
  munchkit: { layout: 'center', btnRad: 999, hero: 'art', frame: 'circle' },
}

/** A full, standalone marketing site for one of the showcase companies, rendered
 *  entirely in that company's own brand identity (colours + typeface). Served at
 *  https://dojoburo.com/<company-id>. */
export function CompanySite({ id }: { id: string }) {
  const c = companyById(id)
  useEffect(() => {
    if (c) document.title = `${c.name} · ${c.mission}`
    return () => { document.title = 'DojoBuro' }
  }, [c])

  if (!c) {
    return (
      <div className="cs-404">
        <h1>404</h1>
        <p>This company doesn’t exist (yet).</p>
        <a href="/#showcase">← Back to DojoBuro</a>
      </div>
    )
  }

  const t = c.theme
  const v: Variant = VARIANT[c.id] || { layout: 'center', btnRad: t.radius, hero: 'app', frame: 'rounded' }
  const domain = c.handle.replace('@', '') + '.co'
  const style = {
    ['--bg' as any]: t.bg, ['--ink' as any]: t.ink, ['--sub' as any]: t.sub,
    ['--ac' as any]: t.accent, ['--rad' as any]: t.radius + 'px', ['--btnrad' as any]: v.btnRad + 'px',
    fontFamily: t.font,
  }
  const up: React.CSSProperties | undefined = t.upper ? { textTransform: 'uppercase' } : undefined

  return (
    <div className={`cs cs--${v.layout}`} style={style}>
      <header className="cs-nav">
        <a className="cs-brand" href={`/${c.id}`}>
          <span className="cs-logo" style={{ background: t.accent }}>{c.name[0]}</span>
          <b style={t.upper ? { textTransform: 'uppercase', letterSpacing: '.05em' } : undefined}>{c.name}</b>
        </a>
        <nav className="cs-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#story">Story</a>
          <a className="cs-navcta" href="#pricing" style={{ background: t.accent }}>{c.site.cta}</a>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-copy">
          <span className="cs-kicker" style={{ color: t.accent }}>{c.cat}</span>
          <h1 style={up}>{c.site.headline}</h1>
          <p className="cs-lede">{c.site.sub}</p>
          <div className="cs-cta-row">
            <a className="cs-cta" href="#pricing" style={{ background: t.accent }}>{c.site.cta}</a>
            <a className="cs-ghost" href="#features">See how it works</a>
          </div>
        </div>
        {v.hero === 'app' ? (
          <div className="cs-hero-card">
            <div className="cs-hero-chrome"><span /><span /><span /><em>{domain}</em></div>
            <ProductMock c={c} />
          </div>
        ) : (
          <div className="cs-hero-illus"><HeroArt c={c} frame={v.frame} /></div>
        )}
      </section>

      <div className="cs-logos">
        <span>Loved by teams at</span>
        <div className="cs-logo-row">
          {['Northwind', 'Vertex', 'Loop', 'Kanso', 'Meridian', 'Foundry'].map((n) => <b key={n}>{n}</b>)}
        </div>
      </div>

      <div className="cs-stats">
        <div><b>{coSales(c).toLocaleString('en-US')}+</b><span>happy customers</span></div>
        <div><b>${(coRevenue(c) * 30).toLocaleString('en-US')}</b><span>earned this month</span></div>
        <div><b>4.9/5</b><span>average rating</span></div>
        <div><b>24/7</b><span>always on</span></div>
      </div>

      <section className="cs-sec cs-demo">
        <h2 style={up}>See it in action</h2>
        <p className="cs-sub-lead">A 30-second look at {c.name} doing the work.</p>
        <DemoReel c={c} />
      </section>

      <section className="cs-sec" id="features">
        <h2 style={up}>Why {c.name}</h2>
        <div className="cs-feats">
          {features(c).map((f, i) => (
            <div className="cs-feat" key={i}>
              <span className="cs-feat-ico" style={{ color: t.accent, borderColor: t.accent }}>{ICONS[featureIcons(c.id)[i]]}</span>
              <b>{f.t}</b>
              <p>{f.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-sec cs-gallery-sec">
        <h2 style={up}>A closer look</h2>
        <PhotoStrip c={c} />
      </section>

      <section className="cs-ad" style={{ background: t.accent }}>
        <span className="cs-ad-tag">Now running</span>
        <h2>{c.ad.headline}</h2>
        <p>{c.ad.body}</p>
        <a className="cs-ad-cta" href="#pricing">{c.site.cta} →</a>
      </section>

      <section className="cs-sec" id="pricing">
        <h2 style={up}>Simple pricing</h2>
        <p className="cs-sub-lead">Start free. Upgrade when you’re ready. Cancel anytime.</p>
        <div className="cs-plans">
          {plans(c).map((p) => (
            <div className={`cs-plan${p.feat ? ' feat' : ''}`} key={p.name} style={p.feat ? { borderColor: t.accent } : undefined}>
              {p.feat && <span className="cs-plan-badge" style={{ background: t.accent }}>Most popular</span>}
              <b className="cs-plan-name">{p.name}</b>
              <div className="cs-plan-price">{p.price}<small>/mo</small></div>
              <span className="cs-plan-sub">{p.sub}</span>
              <ul>{p.feats.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="cs-plan-cta" href="#pricing" style={{ background: p.feat ? t.accent : 'transparent', color: p.feat ? '#fff' : t.ink, border: p.feat ? 'none' : `1.5px solid ${t.accent}` }}>{c.site.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-quote" id="story">
        <blockquote>“{c.testimonial.quote}”</blockquote>
        <figcaption><span className="cs-q-badge" style={{ background: t.accent }}>{c.name[0]}</span>{c.testimonial.author}</figcaption>
      </section>

      <section className="cs-sec cs-faq">
        <h2 style={up}>Questions</h2>
        <div className="cs-faq-list">
          {faqs(c).map((f) => (
            <details className="cs-faq-item" key={f.q}>
              <summary>{f.q}<span className="cs-faq-plus" style={{ color: t.accent }}>+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cs-final">
        <h2 style={up}>{c.site.headline}</h2>
        <a className="cs-cta big" href="#pricing" style={{ background: t.accent }}>{c.site.cta}</a>
      </section>

      <footer className="cs-footer">
        <div className="cs-foot-brand"><span className="cs-logo sm" style={{ background: t.accent }}>{c.name[0]}</span> {c.name}</div>
        <p className="cs-foot-note">
          {c.name} is a fictional company founded and run by AI agents inside{' '}
          <a href="/">DojoBuro</a>. This whole site · copy, brand and ads · was produced by its crew.
        </p>
        <a className="cs-foot-back" href="/#showcase">← See all 15 companies</a>
      </footer>
    </div>
  )
}
