// SEO / growth tool panels, shared by Growth Studio (pumpi) and Business Studio
// (busino). No fabricated metrics: the Site Audit and On-page analysis are
// computed live from the dojo's own website; the keyword tools, rank watchlist
// and competitor list are real local tools the founder owns. Anything that needs
// an external data source (organic traffic, rankings, backlinks, AI mentions)
// shows an honest empty state until that source is connected.
import { useEffect, useMemo, useState } from 'react'
import { loadSite, type SiteDoc } from '../../lib/site'
import {
  siteAudit, onPageReport, keywordIdeas, domainFor, fmt,
  loadWatch, saveWatch, loadCompetitors, saveCompetitors,
  type AuditReport, type OnPage, type Watched, type CompetitorEntry, type KeywordIdea,
} from '../../lib/seo'
import { ScoreRing } from './charts'
import { useDojo } from '../../store'
import { toolData } from '../../agents/workApi'
import { InfoDot } from '../../components/InfoDot'

// Live Google Analytics traffic (28d) · null until GA is configured + returns
// data (admin, GA4_PROPERTY_ID + GA_SERVICE_ACCOUNT_JSON set on the deployment).
interface GaTraffic { sessions: number; users: number; views: number; series: { date: string; sessions: number }[] }
function useGaTraffic(): GaTraffic | null {
  const [ga, setGa] = useState<GaTraffic | null>(null)
  useEffect(() => {
    let live = true
    void toolData('ga4').then((r) => { if (live && r.connected && r.data) setGa(r.data as GaTraffic) })
    return () => { live = false }
  }, [])
  return ga
}
// Live Search Console data (top queries + positions, 28d) · null until GSC is
// configured (admin, GA_SERVICE_ACCOUNT_JSON + GSC_SITE_URL set).
interface GscData { site: string; totals: { clicks: number; impressions: number; ctr: number; position: number }; queries: { query: string; clicks: number; impressions: number; position: number }[] }
function useGsc(): GscData | null {
  const [g, setG] = useState<GscData | null>(null)
  useEffect(() => {
    let live = true
    void toolData('gsc').then((r) => { if (live && r.connected && r.data) setG(r.data as GscData) })
    return () => { live = false }
  }, [])
  return g
}
function Sparkline({ series }: { series: { sessions: number }[] }) {
  if (!series.length) return null
  const max = Math.max(1, ...series.map((p) => p.sessions))
  const w = 120, h = 28, step = w / Math.max(1, series.length - 1)
  const d = series.map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)} ${(h - (p.sessions / max) * h).toFixed(1)}`).join(' ')
  return <svg className="se-spark2" width={w} height={h} viewBox={`0 0 ${w} ${h}`}><path d={d} fill="none" stroke="var(--dc)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" /></svg>
}

// ---- shared data hook -------------------------------------------------------
export interface SeoBundle { dojoId: string; siteName: string; domain: string; hasSite: boolean; loading: boolean; audit: AuditReport | null; onpage: OnPage | null }
export function useSeoData(dojoId: string, dojoName: string): SeoBundle {
  const [site, setSite] = useState<SiteDoc | null>(null)
  const [hasSite, setHasSite] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let alive = true
    setLoading(true)
    loadSite(dojoId).then((s) => { if (!alive) return; setHasSite(!!s); setSite(s); setLoading(false) })
    return () => { alive = false }
  }, [dojoId])
  const audit = useMemo(() => (site ? siteAudit(site) : null), [site])
  const onpage = useMemo(() => (site && audit ? onPageReport(site, audit.score) : null), [site, audit])
  return { dojoId, siteName: site?.name || dojoName || 'My company', domain: domainFor(site?.name || dojoName), hasSite, loading, audit, onpage }
}

// ---- building blocks --------------------------------------------------------
const goConnect = () => { location.hash = 'connect' }
function EmptyState({ title, text, connect, icon = '○' }: { title: string; text: string; connect?: string; icon?: string }) {
  return (
    <div className="se-empty">
      <div className="se-empty-ic">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
      {connect && <button className="se-btn" onClick={goConnect}>Connect {connect} →</button>}
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
function Head({ title, domain, hasSite, help }: { title: string; domain: string; hasSite: boolean; help?: React.ReactNode }) {
  return <div className="se-head"><h3>{title}{help && <InfoDot title={title} label={`How ${title} works`}>{help}</InfoDot>}</h3>{hasSite && <span className="se-domain"><span className="se-dot-live" />{domain}</span>}</div>
}
const NoSite = () => <EmptyState icon="◱" title="No website yet" text="Build and save your site in the Website Studio first. Then this tool analyses it live." />

// ---- watchlist hook (shared by Keyword research + Rank tracker) -------------
function useWatch(dojoId: string): [Watched[], (k: string) => void, (k: string) => void] {
  const [list, setList] = useState<Watched[]>([])
  useEffect(() => { let a = true; loadWatch(dojoId).then((w) => { if (a) setList(w) }); return () => { a = false } }, [dojoId])
  const add = (keyword: string) => setList((l) => { if (l.some((x) => x.keyword === keyword)) return l; const next = [{ keyword, addedAt: Date.now() }, ...l]; void saveWatch(dojoId, next); return next })
  const remove = (keyword: string) => setList((l) => { const next = l.filter((x) => x.keyword !== keyword); void saveWatch(dojoId, next); return next })
  return [list, add, remove]
}

// =============================================================================
// 1 · OVERVIEW · real on-page snapshot + honest empty external metrics
// =============================================================================
export function SeoOverview({ b }: { b: SeoBundle }) {
  const ga = useGaTraffic() // hooks must run before any early return
  const gsc = useGsc()
  if (!b.hasSite || !b.onpage) return <div className="se-wrap"><Head title="Overview" domain={b.domain} hasSite={b.hasSite} /><NoSite /></div>
  const o = b.onpage
  return (
    <div className="se-wrap">
      <Head title="Overview" domain={b.domain} hasSite={b.hasSite} help={<>
        <p>This SEO suite analyses <b>your saved website</b> live — build &amp; save it in the Website Studio first.</p>
        <p>Overview scores your on-page SEO and surfaces quick wins. The other tabs cover keyword research, rank tracking, a full site audit and backlinks.</p>
        <p>Connect <b>Google Analytics</b> and <b>Search Console</b> (operator) to replace estimates with your real traffic, clicks and keyword positions.</p>
      </>} />
      <div className="se-grid-2">
        <Panel title="Site health" sub="Live on-page SEO score for your website">
          <div className="se-ring-row"><ScoreRing value={o.health} size={132} label="health" />
            <ul className="se-facts">
              <li><b>{fmt(o.words)}</b> words · <b>{o.sections}</b> sections</li>
              <li><b>{o.h1}</b> H1 · <b>{o.h2}</b> H2 · <b>{o.h3}</b> H3</li>
              <li><b>{o.links}</b> internal links</li>
              <li>{o.hasForm ? 'Contact form ✓' : 'No contact form'} · {o.hasCta ? 'CTA ✓' : 'No CTA'}</li>
            </ul>
          </div>
        </Panel>
        <Panel title="Top on-page keywords" sub="Words your page actually emphasises (real density)">
          {o.density.length ? (
            <ul className="se-density">
              {o.density.slice(0, 8).map((d) => (
                <li key={d.word}><span className="se-dw">{d.word}</span><div className="se-catbar-t"><div style={{ width: `${Math.min(100, d.pct * 8)}%`, background: 'var(--dc)' }} /></div><b>{d.count}</b><em>{d.pct}%</em></li>
              ))}
            </ul>
          ) : <p className="se-muted">Add more text to your site to see keyword density.</p>}
        </Panel>
      </div>
      <div className="se-eyebrow-row"><span className="se-eyebrow">Traffic & rankings</span></div>
      <div className="se-grid-3">
        <div className="se-extcard">
          <span className="se-kpi-l">Organic traffic</span>
          {ga ? (
            <div className="se-extval">
              <div className="se-extnum"><b>{fmt(ga.sessions)}</b><em>sessions · 28d</em></div>
              <Sparkline series={ga.series} />
              <span className="se-extsub">{fmt(ga.users)} users · {fmt(ga.views)} views</span>
            </div>
          ) : <EmptyMini connect="Google Analytics" />}
        </div>
        <div className="se-extcard">
          <span className="se-kpi-l">Keyword rankings</span>
          {gsc ? (
            <div className="se-extval">
              <div className="se-extnum"><b>{gsc.totals.position || '—'}</b><em>avg position</em></div>
              <span className="se-extsub">{fmt(gsc.totals.clicks)} clicks · {fmt(gsc.totals.impressions)} impr · {gsc.totals.ctr}% CTR</span>
              {!!gsc.queries.length && (
                <ul className="se-gsc-q">
                  {gsc.queries.slice(0, 4).map((q) => <li key={q.query}><span className="se-gsc-kw">{q.query}</span><b>#{q.position}</b></li>)}
                </ul>
              )}
            </div>
          ) : <EmptyMini connect="Search Console" />}
        </div>
        <div className="se-extcard">
          <span className="se-kpi-l">Search clicks · 28d</span>
          {gsc ? (
            <div className="se-extval"><div className="se-extnum"><b>{fmt(gsc.totals.clicks)}</b><em>clicks</em></div><span className="se-extsub">{fmt(gsc.totals.impressions)} impressions</span></div>
          ) : <EmptyMini connect="Search Console" />}
        </div>
      </div>
    </div>
  )
}
function EmptyMini({ connect }: { connect: string }) {
  return <div className="se-extmini"><b>No data</b><button className="se-link" onClick={goConnect}>Connect {connect} →</button></div>
}

// =============================================================================
// 2 · KEYWORD RESEARCH · real idea generator + add to watchlist
// =============================================================================
export function KeywordResearch({ b }: { b: SeoBundle }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [q, setQ] = useState('')
  const [ideas, setIdeas] = useState<KeywordIdea[] | null>(null)
  const [watch, addWatch] = useWatch(b.dojoId)
  const watched = useMemo(() => new Set(watch.map((w) => w.keyword)), [watch])
  if (!b.hasSite) return <div className="se-wrap"><Head title="Keyword research" domain={b.domain} hasSite={b.hasSite} /><NoSite /></div>
  const run = () => setIdeas(keywordIdeas(q, { name: b.siteName, blocks: [], updatedAt: 0 } as SiteDoc))
  const shown = ideas || keywordIdeas('', { name: b.siteName, blocks: [], updatedAt: 0 } as SiteDoc)
  const add = (k: string) => { addWatch(k); pushToast({ kind: 'event', badge: 'SEO', color: '#d98c17', title: 'Added to tracker', text: `"${k}" is on your rank watchlist.` }) }
  return (
    <div className="se-wrap">
      <Head title="Keyword research" domain={b.domain} hasSite={b.hasSite} />
      <div className="se-search">
        <input value={q} placeholder="Enter a seed keyword, e.g. coffee subscription" onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') run() }} />
        <button className="se-btn" onClick={run}>Generate ideas</button>
      </div>
      <div className="se-banner">Ideas are real keyword phrases. Search volume & difficulty need a connected SEO source (Search Console) — <button className="se-link" onClick={goConnect}>connect one →</button></div>
      <Panel title={ideas ? `Ideas for "${q || b.siteName}"` : 'Keyword ideas for your brand'} sub="“On page” = the phrase already appears on your site">
        <div className="se-tablewrap">
          <table className="se-table">
            <thead><tr><th>Keyword</th><th>Words</th><th>On page?</th><th></th></tr></thead>
            <tbody>
              {shown.map((k) => (
                <tr key={k.keyword}>
                  <td className="se-kw">{k.keyword}</td>
                  <td>{k.words}</td>
                  <td>{k.onPage ? <span className="se-tag2 follow">On page</span> : <span className="se-tag2 nofollow">Gap</span>}</td>
                  <td><button className={`se-add${watched.has(k.keyword) ? ' on' : ''}`} onClick={() => add(k.keyword)}>{watched.has(k.keyword) ? '✓' : '+'}</button></td>
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
// 3 · RANK TRACKER · real local watchlist (positions need Search Console)
// =============================================================================
export function RankTracker({ b }: { b: SeoBundle }) {
  const [watch, , removeWatch] = useWatch(b.dojoId)
  return (
    <div className="se-wrap">
      <Head title="Rank tracker" domain={b.domain} hasSite={b.hasSite} />
      <div className="se-banner">Live positions require a connected <b>Google Search Console</b> account. Your watchlist below is saved locally — <button className="se-link" onClick={goConnect}>connect to see rankings →</button></div>
      {watch.length === 0
        ? <EmptyState icon="◎" title="No keywords tracked yet" text="Add keywords from Keyword research to build your rank watchlist." />
        : (
          <Panel title={`Watchlist (${watch.length})`} sub="Keywords you're tracking">
            <div className="se-tablewrap">
              <table className="se-table">
                <thead><tr><th>Keyword</th><th className="r">Position</th><th>Added</th><th></th></tr></thead>
                <tbody>
                  {watch.map((w) => (
                    <tr key={w.keyword}>
                      <td className="se-kw">{w.keyword}</td>
                      <td className="r"><span className="se-pos none" title="Connect Search Console">—</span></td>
                      <td className="se-muted">{new Date(w.addedAt).toLocaleDateString()}</td>
                      <td><button className="se-add" onClick={() => removeWatch(w.keyword)} title="Remove">✕</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        )}
    </div>
  )
}

// =============================================================================
// 4 · SITE AUDIT (real)
// =============================================================================
const sevColor: Record<string, string> = { error: '#c0392b', warning: '#d9a017', notice: '#2f7fd6' }
export function SiteAudit({ b }: { b: SeoBundle }) {
  const [filter, setFilter] = useState<'all' | 'error' | 'warning' | 'notice'>('all')
  if (!b.hasSite || !b.audit) return <div className="se-wrap"><Head title="Site audit" domain={b.domain} hasSite={b.hasSite} /><NoSite /></div>
  const a = b.audit
  const issues = a.issues.filter((i) => filter === 'all' || i.severity === filter)
  return (
    <div className="se-wrap">
      <Head title="Site audit" domain={b.domain} hasSite={b.hasSite} />
      <div className="se-grid-2">
        <Panel title="Site health" sub={`${a.crawled} page crawled · live analysis`}>
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
              <div key={c.name} className="se-catbar"><span>{c.name}</span>
                <div className="se-catbar-t"><div style={{ width: `${c.score}%`, background: c.score >= 80 ? '#1fa563' : c.score >= 55 ? '#d9a017' : '#c0392b' }} /></div><b>{c.score}</b></div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="On-page metrics" sub="Measured from your live site content">
        <div className="se-metrics">
          {a.metrics.map((m) => <div key={m.label} className={`se-metric ${m.ok ? 'ok' : 'bad'}`}><span>{m.label}</span><b>{m.value}</b></div>)}
        </div>
      </Panel>
      <Panel title={`Issues (${a.issues.length})`} sub="Fix errors first"
        right={<div className="se-seg">{(['all', 'error', 'warning', 'notice'] as const).map((f) => <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f === 'all' ? 'All' : f + 's'}</button>)}</div>}>
        <ul className="se-issues">
          {issues.map((i) => (
            <li key={i.id} className={`se-issue ${i.severity}`}>
              <span className="se-issue-sev" style={{ background: sevColor[i.severity] }}>{i.severity}</span>
              <div><b>{i.title}{i.count > 1 && <em> · {i.count}</em>}</b><p>{i.detail}</p></div>
              <span className="se-issue-cat">{i.category}</span>
            </li>
          ))}
          {!issues.length && <li className="se-issue"><div><b>No issues in this filter.</b></div></li>}
        </ul>
      </Panel>
    </div>
  )
}

// =============================================================================
// 5 · BACKLINKS (empty · external source)
// =============================================================================
export function Backlinks({ b }: { b: SeoBundle }) {
  return (
    <div className="se-wrap">
      <Head title="Backlinks" domain={b.domain} hasSite={b.hasSite} />
      <EmptyState icon="⛓" title="No backlink data yet" text="Backlink and referring-domain data comes from Google Search Console. Connect it to see who links to your site." connect="Search Console" />
    </div>
  )
}

// =============================================================================
// 6 · TRAFFIC ANALYTICS (empty · external source)
// =============================================================================
export function TrafficAnalytics({ b }: { b: SeoBundle }) {
  const ga = useGaTraffic()
  return (
    <div className="se-wrap">
      <Head title="Traffic analytics" domain={b.domain} hasSite={b.hasSite} />
      {ga ? (
        <Panel title="Organic & overall traffic" sub="Live · Google Analytics · last 28 days">
          <div className="se-kpis">
            <div className="se-kpi"><span className="se-kpi-l">Sessions</span><span className="se-kpi-v">{fmt(ga.sessions)}</span></div>
            <div className="se-kpi"><span className="se-kpi-l">Users</span><span className="se-kpi-v">{fmt(ga.users)}</span></div>
            <div className="se-kpi"><span className="se-kpi-l">Page views</span><span className="se-kpi-v">{fmt(ga.views)}</span></div>
            <div className="se-kpi"><span className="se-kpi-l">Trend</span><span className="se-kpi-v"><Sparkline series={ga.series} /></span></div>
          </div>
        </Panel>
      ) : <EmptyState icon="◔" title="No traffic data yet" text="Visitor, source, device and geography data comes from Google Analytics. Connect it to see how people find and use your site." connect="Google Analytics" />}
    </div>
  )
}

// =============================================================================
// 7 · COMPETITORS · real local list the founder maintains
// =============================================================================
export function Competitors({ b }: { b: SeoBundle }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [list, setList] = useState<CompetitorEntry[]>([])
  const [domain, setDomain] = useState('')
  const [note, setNote] = useState('')
  useEffect(() => { let a = true; loadCompetitors(b.dojoId).then((c) => { if (a) setList(c) }); return () => { a = false } }, [b.dojoId])
  const add = () => {
    const d = domain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '')
    if (!d) return
    if (list.some((x) => x.domain === d)) { setDomain(''); return }
    const next = [{ domain: d, note: note.trim(), addedAt: Date.now() }, ...list]
    setList(next); void saveCompetitors(b.dojoId, next); setDomain(''); setNote('')
    pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: 'Competitor added', text: `Tracking ${d}.` })
  }
  const remove = (d: string) => { const next = list.filter((x) => x.domain !== d); setList(next); void saveCompetitors(b.dojoId, next) }
  return (
    <div className="se-wrap">
      <Head title="Competitors" domain={b.domain} hasSite={b.hasSite} />
      <Panel title="Add a competitor" sub="Track the sites you compete with · saved locally">
        <div className="se-search">
          <input value={domain} placeholder="competitor.com" onChange={(e) => setDomain(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add() }} />
          <input value={note} placeholder="Note (optional)" onChange={(e) => setNote(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add() }} />
          <button className="se-btn" onClick={add}>Add</button>
        </div>
      </Panel>
      {list.length === 0
        ? <EmptyState icon="⚔" title="No competitors tracked" text="Add the domains you compete with above. Traffic & keyword comparison unlocks when you connect an SEO data source." />
        : (
          <Panel title={`Your competitors (${list.length})`}>
            <div className="se-tablewrap">
              <table className="se-table">
                <thead><tr><th>Domain</th><th>Note</th><th className="r">Traffic vs you</th><th></th></tr></thead>
                <tbody>
                  {list.map((c) => (
                    <tr key={c.domain}>
                      <td className="se-kw"><a href={`https://${c.domain}`} target="_blank" rel="noreferrer">{c.domain} ↗</a></td>
                      <td className="se-muted">{c.note || '—'}</td>
                      <td className="r"><span className="se-pos none" title="Connect a data source">—</span></td>
                      <td><button className="se-add" onClick={() => remove(c.domain)} title="Remove">✕</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        )}
    </div>
  )
}

// =============================================================================
// 8 · AI VISIBILITY (empty · external monitoring)
// =============================================================================
export function AiVisibilityPanel({ b }: { b: SeoBundle }) {
  return (
    <div className="se-wrap">
      <Head title="AI visibility" domain={b.domain} hasSite={b.hasSite} />
      <EmptyState icon="✶" title="AI visibility monitoring" text="Track how often AI assistants (ChatGPT, Gemini, Perplexity, Google AI Overviews) mention your brand. This needs a connected AI-monitoring source — no data yet." connect="an AI source" />
    </div>
  )
}
