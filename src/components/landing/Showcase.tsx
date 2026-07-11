import { MOCK_COMPANIES, topEarners, fleetStats, coRevenue, companyPath, type MockCo } from '../../data/showcase'

const money = (n: number) => '$' + n.toLocaleString('en-US')
const compact = (n: number) =>
  n >= 1_000_000 ? (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1) + 'M'
    : n >= 1_000 ? (n / 1_000).toFixed(n >= 10_000 ? 0 : 1) + 'k'
    : String(n)

/** One fake company rendered in its own visual identity — a tiny website preview
 *  (browser chrome + headline + CTA) with its live ad + today's revenue. Each card
 *  uses the company's own colours, typography and corner radius, so the wall reads
 *  as 15 genuinely different brands. */
function CompanyCard({ c }: { c: MockCo }) {
  const t = c.theme
  return (
    <a
      className="sc-card"
      href={companyPath(c)}
      title={`Open ${c.name}'s site`}
      style={{
        ['--bg' as any]: t.bg,
        ['--ink' as any]: t.ink,
        ['--sub' as any]: t.sub,
        ['--ac' as any]: t.accent,
        ['--rad' as any]: t.radius + 'px',
        fontFamily: t.font,
      }}
    >
      <div className="sc-chrome">
        <span className="sc-dot" /><span className="sc-dot" /><span className="sc-dot" />
        <span className="sc-url">{c.handle.replace('@', '')}.co</span>
      </div>
      <div className="sc-site">
        <div className="sc-site-top">
          <span className="sc-name" style={t.upper ? { textTransform: 'uppercase', letterSpacing: '.06em' } : undefined}>{c.name}</span>
          <span className="sc-cat">{c.cat}</span>
        </div>
        <h3 className="sc-head" style={t.upper ? { textTransform: 'uppercase' } : undefined}>{c.site.headline}</h3>
        <p className="sc-sub">{c.site.sub}</p>
        <button className="sc-cta" tabIndex={-1}>{c.site.cta}</button>
      </div>
      <div className="sc-meta">
        <div className="sc-ad">
          <span className="sc-ad-tag">AD</span>
          <span className="sc-ad-head">{c.ad.headline}</span>
        </div>
        <div className="sc-rev">
          <span className="sc-rev-n">{money(coRevenue(c))}</span>
          <span className="sc-rev-l">today</span>
        </div>
      </div>
    </a>
  )
}

/** The showcase gallery — 15 companies, each in its own style. */
export function ShowcaseGallery() {
  return (
    <div className="sc-grid">
      {MOCK_COMPANIES.map((c) => <CompanyCard key={c.id} c={c} />)}
    </div>
  )
}

/** nanocorp-style live leaderboard: fleet-wide headline stats + a dark
 *  top-earners table that re-ranks itself every calendar day. */
export function PerformanceBoard() {
  const rows = topEarners()
  const s = fleetStats()
  const stats = [
    { n: money(s.revenue30d), l: 'Revenue · last 30 days' },
    { n: compact(s.companies), l: 'Companies founded' },
    { n: compact(s.sites), l: 'Websites shipped' },
    { n: compact(s.tasksToday), l: 'Agent tasks today' },
    { n: compact(s.emails), l: 'Emails sent' },
    { n: '+' + s.foundedToday, l: 'Founded today' },
  ]
  return (
    <div className="pb">
      <div className="pb-stats">
        {stats.map((x) => (
          <div className="pb-stat" key={x.l}>
            <span className="pb-stat-n">{x.n}</span>
            <span className="pb-stat-l">{x.l}</span>
          </div>
        ))}
      </div>
      <div className="pb-tablewrap">
        <table className="pb-table">
          <thead>
            <tr><th>#</th><th>Company</th><th>Category</th><th className="pb-num">Sales</th><th className="pb-num">Revenue · today</th></tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.co.id}>
                <td className="pb-rank">{i + 1}</td>
                <td>
                  <span className="pb-co"><span className="pb-chip" style={{ background: r.co.theme.accent }} />{r.co.name}</span>
                </td>
                <td className="pb-cat">{r.co.cat}</td>
                <td className="pb-num">{r.sales.toLocaleString('en-US')}</td>
                <td className="pb-num pb-money">{money(r.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="pb-foot">Mock showcase data · re-ranks every day at midnight UTC.</p>
    </div>
  )
}

/** Testimonials pulled from the showcase companies, each tinted with its brand
 *  accent and set in its own typeface. */
export function Testimonials() {
  // a hand-picked spread of voices, varied in theme and typography
  const picks = ['lumina', 'cratebox', 'ledgerly', 'verdea', 'petto', 'bloombox', 'sootheer', 'cardexo', 'fitloop']
  const list = picks.map((id) => MOCK_COMPANIES.find((c) => c.id === id)!).filter(Boolean)
  return (
    <div className="tm-grid">
      {list.map((c) => (
        <figure className="tm-card" key={c.id} style={{ ['--ac' as any]: c.theme.accent }}>
          <blockquote style={{ fontFamily: c.theme.font }}>“{c.testimonial.quote}”</blockquote>
          <figcaption>
            <span className="tm-badge" style={{ background: c.theme.accent }}>{c.name[0]}</span>
            <span className="tm-who"><b>{c.testimonial.author}</b><span>{c.cat}</span></span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
