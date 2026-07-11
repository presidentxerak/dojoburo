import { useEffect } from 'react'
import { companyById, coRevenue, coSales, type MockCo } from './data/showcase'

// Three plausible value-props per company, generated from its mission so every
// site feels bespoke without hand-authoring 45 paragraphs.
function features(c: MockCo): Array<{ t: string; b: string }> {
  const base = c.mission.replace(/\.$/, '')
  return [
    { t: 'Made for you', b: `${base} — set up in minutes, no learning curve, cancel whenever you like.` },
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
  const domain = c.handle.replace('@', '') + '.co'
  const style = {
    ['--bg' as any]: t.bg, ['--ink' as any]: t.ink, ['--sub' as any]: t.sub,
    ['--ac' as any]: t.accent, ['--rad' as any]: t.radius + 'px', fontFamily: t.font,
  }
  const up: React.CSSProperties | undefined = t.upper ? { textTransform: 'uppercase' } : undefined

  return (
    <div className="cs" style={style}>
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
        <span className="cs-kicker" style={{ color: t.accent }}>{c.cat}</span>
        <h1 style={up}>{c.site.headline}</h1>
        <p className="cs-lede">{c.site.sub}</p>
        <div className="cs-cta-row">
          <a className="cs-cta" href="#pricing" style={{ background: t.accent }}>{c.site.cta}</a>
          <a className="cs-ghost" href="#features">See how it works</a>
        </div>
        <div className="cs-hero-card">
          <div className="cs-hero-chrome"><span /><span /><span /><em>{domain}</em></div>
          <div className="cs-hero-art" style={{ background: `linear-gradient(135deg, ${t.accent}, color-mix(in srgb, ${t.accent} 40%, #ffffff))` }}>
            <span className="cs-hero-emoji">{c.name[0]}</span>
          </div>
        </div>
      </section>

      <div className="cs-stats">
        <div><b>{coSales(c).toLocaleString('en-US')}+</b><span>happy customers</span></div>
        <div><b>${(coRevenue(c) * 30).toLocaleString('en-US')}</b><span>earned this month</span></div>
        <div><b>4.9/5</b><span>average rating</span></div>
        <div><b>24/7</b><span>always on</span></div>
      </div>

      <section className="cs-sec" id="features">
        <h2 style={up}>Why {c.name}</h2>
        <div className="cs-feats">
          {features(c).map((f, i) => (
            <div className="cs-feat" key={i}>
              <span className="cs-feat-ico" style={{ background: t.accent }}>{['✦', '✱', '✓'][i]}</span>
              <b>{f.t}</b>
              <p>{f.b}</p>
            </div>
          ))}
        </div>
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

      <section className="cs-final">
        <h2 style={up}>{c.site.headline}</h2>
        <a className="cs-cta big" href="#pricing" style={{ background: t.accent }}>{c.site.cta}</a>
      </section>

      <footer className="cs-footer">
        <div className="cs-foot-brand"><span className="cs-logo sm" style={{ background: t.accent }}>{c.name[0]}</span> {c.name}</div>
        <p className="cs-foot-note">
          {c.name} is a fictional company founded and run by AI agents inside{' '}
          <a href="/">DojoBuro</a>. This whole site — copy, brand and ads — was produced by its crew.
        </p>
        <a className="cs-foot-back" href="/#showcase">← See all 15 companies</a>
      </footer>
    </div>
  )
}
