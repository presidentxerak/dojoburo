// Semrush-style SEO / growth tool panels, shared by the Growth Studio (pumpi)
// and Business Studio (busino). Everything is computed locally from the dojo's
// own website (src/lib/seo.ts) · the Site Audit & keyword extraction are real,
// the market metrics are seeded from the domain so they stay stable.
import { useEffect, useMemo, useState } from 'react'
import { loadSite, generateSite, type SiteDoc } from '../../lib/site'
import { loadBrandKit, type BrandKit } from '../../lib/brand'
import {
  buildSeoData, expandKeyword, fmt, kdBand, MONTHS, type SeoData, type KeywordRow, type Intent,
} from '../../lib/seo'
import { AreaChart, Bars, Donut, ScoreRing, Spark } from './charts'
import { useDojo } from '../../store'

// ---- shared data hook -------------------------------------------------------
export interface SeoBundle { data: SeoData | null; loading: boolean; hasSite: boolean; siteName: string }
export function useSeoData(dojoId: string, dojoName: string): SeoBundle {
  const [site, setSite] = useState<SiteDoc | null>(null)
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [hasSite, setHasSite] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let alive = true
    setLoading(true)
    Promise.all([loadSite(dojoId), loadBrandKit(dojoId)]).then(([s, b]) => {
      if (!alive) return
      setHasSite(!!s)
      setSite(s || generateSite(dojoName || 'My company'))
      setBrand(b)
      setLoading(false)
    })
    return () => { alive = false }
  }, [dojoId, dojoName])
  const data = useMemo(() => (site ? buildSeoData(site, brand, dojoName) : null), [site, brand, dojoName])
  return { data, loading, hasSite, siteName: site?.name || dojoName || 'My company' }
}

// ---- small building blocks --------------------------------------------------
function Kpi({ label, value, sub, trend, delta }: { label: string; value: string; sub?: string; trend?: number[]; delta?: number }) {
  return (
    <div className="se-kpi">
      <span className="se-kpi-l">{label}</span>
      <div className="se-kpi-v">{value}{delta !== undefined && <em className={delta >= 0 ? 'up' : 'down'}>{delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}%</em>}</div>
      {trend && <Spark data={trend} fill />}
      {sub && <span className="se-kpi-s">{sub}</span>}
    </div>
  )
}
function Panel({ title, sub, right, children }: { title: string; sub?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="se-card">
      <header className="se-card-h"><div><h4>{title}</h4>{sub && <p>{sub}</p>}</div>{right}</header>
      {children}
    </section>
  )
}
function DomainBadge({ data }: { data: SeoData }) {
  return <span className="se-domain"><span className="se-dot-live" />{data.domain}</span>
}
function NoSiteBanner({ hasSite }: { hasSite: boolean }) {
  if (hasSite) return null
  return <div className="se-banner">No website saved yet · these figures use a preview of your generated site. Build & save your site in <b>Website Studio</b> for a live audit and tracking.</div>
}
const IntentTag = ({ intent }: { intent: Intent }) => <span className={`se-intent i-${intent[0].toLowerCase()}`}>{intent[0]}</span>
const KdCell = ({ kd }: { kd: number }) => { const b = kdBand(kd); return <span className="se-kd"><span className="se-kd-dot" style={{ background: b.color }} />{kd}<em>{b.label}</em></span> }
const PosCell = ({ p }: { p: number }) => p === 0 ? <span className="se-pos none">—</span> : <span className={`se-pos${p <= 3 ? ' top' : p <= 10 ? ' ok' : ''}`}>{p}</span>

// =============================================================================
// 1 · OVERVIEW (Domain overview)
// =============================================================================
export function SeoOverview({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const ov = data.overview
  return (
    <div className="se-wrap">
      <NoSiteBanner hasSite={b.hasSite} />
      <div className="se-head"><h3>Domain overview</h3><DomainBadge data={data} /></div>
      <div className="se-kpis">
        <Kpi label="Authority Score" value={String(ov.authority)} sub="/ 100" trend={ov.authTrend} />
        <Kpi label="Organic traffic" value={fmt(ov.organicTraffic)} sub="visits / mo" trend={ov.trafficTrend} />
        <Kpi label="Organic keywords" value={fmt(ov.organicKeywords)} sub="ranking" trend={ov.keywordTrend} />
        <Kpi label="Backlinks" value={fmt(ov.backlinks)} sub={`${fmt(ov.referringDomains)} ref. domains`} />
      </div>
      <div className="se-grid-2">
        <Panel title="Organic traffic trend" sub="Estimated monthly visits, last 12 months">
          <AreaChart data={ov.trafficTrend} labels={MONTHS} />
        </Panel>
        <Panel title="Keyword positions" sub="Where your keywords rank on Google">
          <div className="se-dist">
            <Donut size={140} segments={ov.distribution.map((d, i) => ({ label: d.label, value: d.pct, color: ['#1fa563', '#5cb85c', '#d9a017', '#e0722e', '#c0392b'][i] }))}
              center={<><b>{fmt(ov.organicKeywords)}</b><span>keywords</span></>} />
            <ul className="se-legend">
              {ov.distribution.map((d, i) => <li key={d.label}><span style={{ background: ['#1fa563', '#5cb85c', '#d9a017', '#e0722e', '#c0392b'][i] }} />{d.label}<em>{d.pct}%</em></li>)}
            </ul>
          </div>
        </Panel>
      </div>
      <Panel title="Top organic keywords" sub="Your best-ranking search terms">
        <KeywordTable rows={ov.topKeywords} />
      </Panel>
    </div>
  )
}

// =============================================================================
// 2 · KEYWORD RESEARCH (Keyword Magic Tool)
// =============================================================================
function KeywordTable({ rows, onAdd, tracked }: { rows: KeywordRow[]; onAdd?: (k: string) => void; tracked?: Set<string> }) {
  return (
    <div className="se-tablewrap">
      <table className="se-table">
        <thead><tr><th>Keyword</th><th>Intent</th><th className="r">Volume</th><th>KD %</th><th className="r">CPC</th><th className="r">Pos.</th><th>Trend</th>{onAdd && <th></th>}</tr></thead>
        <tbody>
          {rows.map((k) => (
            <tr key={k.keyword}>
              <td className="se-kw">{k.keyword}{k.serp.length > 0 && <span className="se-serp" title={k.serp.join(', ')}>◈ {k.serp.length}</span>}</td>
              <td><IntentTag intent={k.intent} /></td>
              <td className="r"><b>{fmt(k.volume)}</b></td>
              <td><KdCell kd={k.kd} /></td>
              <td className="r">${k.cpc.toFixed(2)}</td>
              <td className="r"><PosCell p={k.position} /></td>
              <td><Spark data={k.trend} w={64} h={22} /></td>
              {onAdd && <td><button className={`se-add${tracked?.has(k.keyword) ? ' on' : ''}`} onClick={() => onAdd(k.keyword)}>{tracked?.has(k.keyword) ? '✓' : '+'}</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function KeywordResearch({ b }: { b: SeoBundle }) {
  const pushToast = useDojo((s) => s.pushToast)
  const { data } = b
  const [q, setQ] = useState('')
  const [rows, setRows] = useState<KeywordRow[] | null>(null)
  const [tracked, setTracked] = useState<Set<string>>(new Set())
  if (!data) return null
  const run = () => { if (q.trim()) setRows(expandKeyword(q, data.domain)) }
  const shown = rows || data.universe
  const add = (k: string) => {
    setTracked((s) => { const n = new Set(s); n.has(k) ? n.delete(k) : n.add(k); return n })
    pushToast({ kind: 'event', badge: 'SEO', color: '#d98c17', title: 'Keyword tracked', text: `"${k}" added to your position tracker.` })
  }
  const totalVol = shown.reduce((s, k) => s + k.volume, 0)
  const avgKd = Math.round(shown.reduce((s, k) => s + k.kd, 0) / (shown.length || 1))
  return (
    <div className="se-wrap">
      <div className="se-head"><h3>Keyword research</h3><DomainBadge data={data} /></div>
      <div className="se-search">
        <input value={q} placeholder="Enter a seed keyword, e.g. coffee subscription" onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') run() }} />
        <button className="se-btn" onClick={run}>Find keywords</button>
        {rows && <button className="se-btn ghost" onClick={() => { setRows(null); setQ('') }}>Reset</button>}
      </div>
      <div className="se-kpis">
        <Kpi label="Keywords found" value={fmt(shown.length)} />
        <Kpi label="Total volume" value={fmt(totalVol)} sub="searches / mo" />
        <Kpi label="Avg. difficulty" value={`${avgKd}%`} sub={kdBand(avgKd).label} />
        <Kpi label="Tracked" value={String(tracked.size)} sub="in tracker" />
      </div>
      <Panel title={rows ? `Ideas for "${q}"` : 'Keywords from your website'} sub="Click + to add a keyword to your position tracker">
        <KeywordTable rows={shown} onAdd={add} tracked={tracked} />
      </Panel>
    </div>
  )
}

// =============================================================================
// 3 · POSITION TRACKING
// =============================================================================
export function PositionTracking({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const tk = data.tracked
  const avgPos = tk.length ? Math.round(tk.reduce((s, k) => s + k.position, 0) / tk.length) : 0
  const improved = tk.filter((k) => k.change > 0).length
  const declined = tk.filter((k) => k.change < 0).length
  // average position over time (inverted so up = better)
  const avgSeries = MONTHS.map((_, i) => Math.round(tk.reduce((s, k) => s + k.history[i], 0) / (tk.length || 1)))
  return (
    <div className="se-wrap">
      <NoSiteBanner hasSite={b.hasSite} />
      <div className="se-head"><h3>Position tracking</h3><DomainBadge data={data} /></div>
      <div className="se-grid-2">
        <Panel title="Visibility" sub="Share of clicks captured by your rankings">
          <div className="se-ring-row"><ScoreRing value={data.visibility} label="visibility" />
            <ul className="se-facts">
              <li><b>{tk.length}</b> keywords tracked</li>
              <li><b className="up">▲ {improved}</b> improved this week</li>
              <li><b className="down">▼ {declined}</b> declined</li>
              <li>Avg. position <b>{avgPos || '—'}</b></li>
            </ul>
          </div>
        </Panel>
        <Panel title="Average position" sub="Lower is better · last 12 months">
          <AreaChart data={avgSeries.map((v) => 101 - v)} labels={MONTHS} />
          <p className="se-note">Chart inverted so a rising line means better rankings.</p>
        </Panel>
      </div>
      <Panel title="Tracked keywords" sub="Current rank, weekly change and 12-week history">
        <div className="se-tablewrap">
          <table className="se-table">
            <thead><tr><th>Keyword</th><th className="r">Volume</th><th className="r">Pos.</th><th className="r">Change</th><th className="r">Best</th><th>History</th></tr></thead>
            <tbody>
              {tk.map((k) => (
                <tr key={k.keyword}>
                  <td className="se-kw">{k.keyword}</td>
                  <td className="r">{fmt(k.volume)}</td>
                  <td className="r"><PosCell p={k.position} /></td>
                  <td className="r"><span className={k.change > 0 ? 'up' : k.change < 0 ? 'down' : ''}>{k.change > 0 ? `▲ ${k.change}` : k.change < 0 ? `▼ ${Math.abs(k.change)}` : '—'}</span></td>
                  <td className="r">{k.best}</td>
                  <td><Spark data={k.history.map((v) => 101 - v)} w={80} h={22} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

// =============================================================================
// 4 · SITE AUDIT (real, computed from the SiteDoc)
// =============================================================================
const sevColor: Record<string, string> = { error: '#c0392b', warning: '#d9a017', notice: '#2f7fd6' }
export function SiteAudit({ b }: { b: SeoBundle }) {
  const { data } = b
  const [filter, setFilter] = useState<'all' | 'error' | 'warning' | 'notice'>('all')
  if (!data) return null
  const a = data.audit
  const issues = a.issues.filter((i) => filter === 'all' || i.severity === filter)
  return (
    <div className="se-wrap">
      <NoSiteBanner hasSite={b.hasSite} />
      <div className="se-head"><h3>Site audit</h3><DomainBadge data={data} /></div>
      <div className="se-grid-2">
        <Panel title="Site health" sub={`${a.crawled} page crawled · live analysis of your website`}>
          <div className="se-ring-row"><ScoreRing value={a.score} size={132} label="health" />
            <ul className="se-facts">
              <li><span className="se-chip err">{a.errors} errors</span></li>
              <li><span className="se-chip warn">{a.warnings} warnings</span></li>
              <li><span className="se-chip note">{a.notices} notices</span></li>
            </ul>
          </div>
        </Panel>
        <Panel title="Health by category">
          <div className="se-catbars">
            {a.categories.map((c) => (
              <div key={c.name} className="se-catbar">
                <span>{c.name}</span>
                <div className="se-catbar-t"><div style={{ width: `${c.score}%`, background: c.score >= 80 ? '#1fa563' : c.score >= 55 ? '#d9a017' : '#c0392b' }} /></div>
                <b>{c.score}</b>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="On-page metrics" sub="Measured from your live site content">
        <div className="se-metrics">
          {a.metrics.map((m) => (
            <div key={m.label} className={`se-metric ${m.ok ? 'ok' : 'bad'}`}>
              <span>{m.label}</span><b>{m.value}</b>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title={`Issues (${a.issues.length})`} sub="Prioritised · fix errors first"
        right={<div className="se-seg">{(['all', 'error', 'warning', 'notice'] as const).map((f) => <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f === 'all' ? 'All' : f + 's'}</button>)}</div>}>
        <ul className="se-issues">
          {issues.map((i) => (
            <li key={i.id} className={`se-issue ${i.severity}`}>
              <span className="se-issue-sev" style={{ background: sevColor[i.severity] }}>{i.severity}</span>
              <div><b>{i.title}{i.count > 1 && <em> · {i.count}</em>}</b><p>{i.detail}</p></div>
              <span className="se-issue-cat">{i.category}</span>
            </li>
          ))}
          {!issues.length && <li className="se-issue"><div><b>No issues in this filter 🎉</b></div></li>}
        </ul>
      </Panel>
    </div>
  )
}

// =============================================================================
// 5 · BACKLINKS
// =============================================================================
export function Backlinks({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const bl = data.backlinks
  return (
    <div className="se-wrap">
      <NoSiteBanner hasSite={b.hasSite} />
      <div className="se-head"><h3>Backlink analytics</h3><DomainBadge data={data} /></div>
      <div className="se-kpis">
        <Kpi label="Total backlinks" value={fmt(bl.total)} trend={bl.authorityTrend} />
        <Kpi label="Referring domains" value={fmt(bl.referringDomains)} />
        <Kpi label="Follow links" value={`${bl.follow}%`} sub={`${bl.nofollow}% nofollow`} />
        <Kpi label="Authority Score" value={String(data.overview.authority)} sub="/ 100" trend={bl.authorityTrend} />
      </div>
      <div className="se-grid-2">
        <Panel title="New vs lost referring domains" sub="Last 6 months">
          <Bars items={bl.newLost.flatMap((m) => [{ label: m.month, value: m.gained, color: '#1fa563' }])} />
          <div className="se-legend inline"><li><span style={{ background: '#1fa563' }} />Gained</li></div>
        </Panel>
        <Panel title="Anchor text distribution">
          <div className="se-dist">
            <Donut size={140} segments={bl.anchors.map((a, i) => ({ label: a.text, value: a.pct, color: ['var(--dc)', '#2f7fd6', '#a855f7', '#e0459b', '#d9a017', '#8a94a6'][i % 6] }))} center={<><b>{bl.anchors.length}</b><span>anchors</span></>} />
            <ul className="se-legend">
              {bl.anchors.map((a, i) => <li key={a.text}><span style={{ background: ['var(--dc)', '#2f7fd6', '#a855f7', '#e0459b', '#d9a017', '#8a94a6'][i % 6] }} />{a.text}<em>{a.pct}%</em></li>)}
            </ul>
          </div>
        </Panel>
      </div>
      <Panel title="Top referring domains" sub="Sites linking to you, by authority">
        <div className="se-tablewrap">
          <table className="se-table">
            <thead><tr><th>Domain</th><th className="r">Authority</th><th className="r">Links</th><th>Type</th><th>First seen</th></tr></thead>
            <tbody>
              {bl.topDomains.map((d) => (
                <tr key={d.domain}>
                  <td className="se-kw">{d.domain}</td>
                  <td className="r"><span className="se-authbar"><span style={{ width: `${d.authority}%` }} />{d.authority}</span></td>
                  <td className="r">{d.links}</td>
                  <td><span className={`se-tag2 ${d.follow ? 'follow' : 'nofollow'}`}>{d.follow ? 'Follow' : 'Nofollow'}</span></td>
                  <td className="se-muted">{d.first}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

// =============================================================================
// 6 · TRAFFIC ANALYTICS
// =============================================================================
export function TrafficAnalytics({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const t = data.traffic
  return (
    <div className="se-wrap">
      <NoSiteBanner hasSite={b.hasSite} />
      <div className="se-head"><h3>Traffic analytics</h3><DomainBadge data={data} /></div>
      <div className="se-kpis">
        <Kpi label="Visits" value={fmt(t.visits)} sub="/ mo" trend={t.sessionsTrend} />
        <Kpi label="Unique visitors" value={fmt(t.users)} />
        <Kpi label="Bounce rate" value={`${t.bounce}%`} />
        <Kpi label="Avg. visit" value={`${Math.floor(t.duration / 60)}m ${t.duration % 60}s`} sub={`${t.pagesPerVisit} pages/visit`} />
      </div>
      <div className="se-grid-2">
        <Panel title="Sessions" sub="Daily visits, last 30 days"><AreaChart data={t.sessionsTrend} /></Panel>
        <Panel title="Traffic sources">
          <div className="se-dist">
            <Donut size={140} segments={t.sources.map((s) => ({ label: s.name, value: s.value, color: s.color }))} center={<><b>{fmt(t.visits)}</b><span>visits</span></>} />
            <ul className="se-legend">{t.sources.map((s) => <li key={s.name}><span style={{ background: s.color }} />{s.name}<em>{s.value}%</em></li>)}</ul>
          </div>
        </Panel>
      </div>
      <div className="se-grid-2">
        <Panel title="Devices">
          <div className="se-catbars">
            {t.devices.map((d) => (
              <div key={d.name} className="se-catbar"><span>{d.name}</span><div className="se-catbar-t"><div style={{ width: `${d.pct}%`, background: 'var(--dc)' }} /></div><b>{d.pct}%</b></div>
            ))}
          </div>
        </Panel>
        <Panel title="Top countries">
          <ul className="se-geo">
            {t.geo.map((g) => (
              <li key={g.code}><span className="se-flag">{g.code}</span><span className="se-geo-n">{g.country}</span><div className="se-geo-t"><div style={{ width: `${g.pct}%` }} /></div><b>{g.pct}%</b></li>
            ))}
          </ul>
        </Panel>
      </div>
      <Panel title="Top pages" sub="Most-visited pages on your site">
        <div className="se-tablewrap">
          <table className="se-table">
            <thead><tr><th>Page</th><th className="r">Views</th><th className="r">Share</th><th>Distribution</th></tr></thead>
            <tbody>
              {t.topPages.map((p) => (
                <tr key={p.path}><td className="se-kw">{p.path}</td><td className="r">{fmt(p.views)}</td><td className="r">{p.share}%</td>
                  <td><div className="se-catbar-t"><div style={{ width: `${p.share}%`, background: 'var(--dc)' }} /></div></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

// =============================================================================
// 7 · COMPETITORS (Market explorer)
// =============================================================================
export function Competitors({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const cs = data.competitors
  const maxTraffic = Math.max(...cs.map((c) => c.traffic), data.overview.organicTraffic, 1)
  const maxAuth = Math.max(...cs.map((c) => c.authority), data.overview.authority, 1)
  const dot = (auth: number, traf: number) => ({ left: `${(auth / maxAuth) * 88 + 6}%`, bottom: `${(traf / maxTraffic) * 78 + 8}%` })
  return (
    <div className="se-wrap">
      <div className="se-head"><h3>Competitive landscape</h3><DomainBadge data={data} /></div>
      <Panel title="Positioning map" sub="Authority (→) vs organic traffic (↑) · you in colour">
        <div className="se-scatter">
          <span className="se-axis-y">Traffic</span><span className="se-axis-x">Authority Score</span>
          <div className="se-dotme" style={dot(data.overview.authority, data.overview.organicTraffic)} title={`${data.domain} · you`}>You</div>
          {cs.map((c) => <div key={c.domain} className="se-dotc" style={dot(c.authority, c.traffic)} title={`${c.domain} · AS ${c.authority} · ${fmt(c.traffic)} visits`}>{c.domain.split('.')[0]}</div>)}
        </div>
      </Panel>
      <Panel title="Competitors" sub="Domains competing for your keywords">
        <div className="se-tablewrap">
          <table className="se-table">
            <thead><tr><th>Domain</th><th className="r">Authority</th><th className="r">Traffic</th><th className="r">Keywords</th><th className="r">Common</th><th>Overlap</th></tr></thead>
            <tbody>
              <tr className="se-me-row"><td className="se-kw">{data.domain} <em>(you)</em></td><td className="r">{data.overview.authority}</td><td className="r">{fmt(data.overview.organicTraffic)}</td><td className="r">{fmt(data.overview.organicKeywords)}</td><td className="r">—</td><td></td></tr>
              {cs.map((c) => (
                <tr key={c.domain}>
                  <td className="se-kw">{c.domain}</td>
                  <td className="r"><span className="se-authbar"><span style={{ width: `${c.authority}%` }} />{c.authority}</span></td>
                  <td className="r">{fmt(c.traffic)}</td>
                  <td className="r">{fmt(c.keywords)}</td>
                  <td className="r">{c.common}</td>
                  <td><div className="se-catbar-t"><div style={{ width: `${c.overlap}%`, background: 'var(--dc)' }} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}

// =============================================================================
// 8 · AI VISIBILITY
// =============================================================================
export function AiVisibilityPanel({ b }: { b: SeoBundle }) {
  const { data } = b
  if (!data) return null
  const ai = data.ai
  return (
    <div className="se-wrap">
      <div className="se-head"><h3>AI visibility</h3><DomainBadge data={data} /></div>
      <p className="se-lead">How often AI assistants (ChatGPT, Gemini, Perplexity, Google AI) mention your brand when people ask about your market.</p>
      <div className="se-grid-2">
        <Panel title="AI visibility score" sub="Presence across AI answers">
          <div className="se-ring-row"><ScoreRing value={ai.score} label="AI score" />
            <ul className="se-facts">
              <li>Mention rate <b>{ai.mentionRate}%</b></li>
              <li>Sentiment <b className={ai.sentiment >= 50 ? 'up' : ''}>{ai.sentiment}/100</b></li>
              <li>{ai.prompts.filter((p) => p.mentioned).length}/{ai.prompts.length} test prompts mention you</li>
            </ul>
          </div>
        </Panel>
        <Panel title="Share by platform">
          <div className="se-dist">
            <Donut size={140} segments={ai.platforms.map((p, i) => ({ label: p.name, value: p.share, color: ['#10a37f', '#4285f4', '#8a3ffc', '#d9a017'][i % 4] }))} center={<><b>{ai.mentionRate}%</b><span>mentions</span></>} />
            <ul className="se-legend">{ai.platforms.map((p, i) => <li key={p.name}><span style={{ background: ['#10a37f', '#4285f4', '#8a3ffc', '#d9a017'][i % 4] }} />{p.name}<em>{p.mentions}</em></li>)}</ul>
          </div>
        </Panel>
      </div>
      <Panel title="Prompt monitoring" sub="Sample prompts we check for your brand">
        <ul className="se-prompts">
          {ai.prompts.map((p) => (
            <li key={p.prompt} className={p.mentioned ? 'yes' : 'no'}>
              <span className="se-prompt-q">“{p.prompt}”</span>
              {p.mentioned ? <span className="se-prompt-r ok">Mentioned · #{p.position}</span> : <span className="se-prompt-r">Not mentioned</span>}
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}
