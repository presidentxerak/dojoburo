// Business analytics · reads your Finance + CRM data (local) and EXPLAINS it.
// KPIs (CAC, LTV, LTV:CAC, ROI, growth, conversion) plus plain-language
// insights + recommendations · not just charts. 100% local, nothing uploaded.
import { useEffect, useMemo, useState } from 'react'
import type { ModuleProps } from '../registry'
import type { Txn } from '../../lib/finance'
import type { Contact } from '../../lib/crm'
import { type Assumptions, DEFAULT_ASSUMPTIONS, compute, insights, loadData } from '../../lib/analytics'

const eur = (n: number) => `${Math.round(n).toLocaleString('fr-FR')} €`
const pct = (n: number) => `${Math.round(n * 100)}%`
const TONE: Record<string, string> = { good: '#1fa563', warn: '#d9822b', bad: '#e0483f', info: '#2f7fd6' }

export default function AnalyticsModule({ dojoId }: ModuleProps) {
  const [txns, setTxns] = useState<Txn[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [a, setA] = useState<Assumptions>(DEFAULT_ASSUMPTIONS)
  const [demo, setDemo] = useState(false)

  useEffect(() => {
    let alive = true
    void loadData(dojoId, false).then((d) => { if (alive) { setTxns(d.txns); setContacts(d.contacts) } })
    return () => { alive = false }
  }, [dojoId])

  const m = useMemo(() => compute(txns, contacts, a), [txns, contacts, a])
  const ins = useMemo(() => insights(m), [m])
  const maxRev = Math.max(1, ...m.months.map((x) => x.income))

  const loadDemo = async () => { const d = await loadData(dojoId, true); setTxns(d.txns); setContacts(d.contacts); setDemo(true) }

  return (
    <div className="ad-body ana-mod">
      <header className="mod-intro">
        <h3 className="sq-title">Business analytics</h3>
        <p className="sq-lead">Reads your Finance + CRM data and explains it · CAC, LTV, LTV:CAC, ROI, growth and conversion, with plain-language insights and recommendations. Not just charts.</p>
      </header>
      {!m.hasData ? (
        <div className="vid-empty">
          <strong>Analyze your business</strong>
          <span className="muted small">Add your data in <b>Finance</b> and <b>CRM</b> · it feeds this analysis. Or <button className="linklike" onClick={() => void loadDemo()}>load sample data</button>.</span>
        </div>
      ) : (
        <>
          {demo && <p className="sec-warn" style={{ margin: '0 0 12px' }}>Demo data (Finance + CRM). Save your real data in these modules for an actual analysis.</p>}

          {/* KPIs */}
          <div className="ana-kpis">
            <div className="fin-kpi"><span style={{ color: '#1fa563' }}>{eur(m.revenue)}</span><em>Revenue</em></div>
            <div className="fin-kpi"><span style={{ color: m.growth >= 0 ? '#1fa563' : '#e0483f' }}>{m.growth >= 0 ? '+' : ''}{pct(m.growth)}</span><em>Growth</em></div>
            <div className="fin-kpi"><span>{eur(m.cac)}</span><em>CAC</em></div>
            <div className="fin-kpi"><span>{eur(m.ltv)}</span><em>LTV</em></div>
            <div className="fin-kpi"><span style={{ color: m.ltvCac >= 3 ? '#1fa563' : m.ltvCac >= 1 ? '#d9822b' : '#e0483f' }}>{m.ltvCac.toFixed(1)}×</span><em>LTV:CAC</em></div>
            <div className="fin-kpi"><span style={{ color: m.roi >= 1 ? '#1fa563' : '#d9822b' }}>{pct(m.roi)}</span><em>Ad ROI</em></div>
            <div className="fin-kpi"><span>{pct(m.conversion)}</span><em>Conversion</em></div>
            <div className="fin-kpi"><span>{m.newCustomers}</span><em>Customers won</em></div>
          </div>

          {/* revenue chart */}
          {m.months.length > 0 && (
            <>
              <h4 className="brand-h">Revenue by month</h4>
              <div className="fin-chart">
                {m.months.map((x) => (
                  <div key={x.month} className="fin-bar-col" title={`${x.month} · ${eur(x.income)}`}>
                    <div className="fin-bars"><span className="fin-bar inc" style={{ height: `${(x.income / maxRev) * 100}%` }} /></div>
                    <em>{x.month.slice(5)}</em>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* AI explanations */}
          <h4 className="brand-h">What this means <span className="ana-badge">AI · explanations</span></h4>
          <div className="ana-insights">
            {ins.map((i, k) => (
              <div key={k} className="ana-insight" style={{ ['--tone' as string]: TONE[i.tone] }}>
                <b>{i.title}</b>
                <p>{i.text}</p>
              </div>
            ))}
          </div>

          {/* assumptions */}
          <h4 className="brand-h">Assumptions</h4>
          <div className="ana-assume">
            <label className="site-field"><span>Repeat purchases (× order) : {a.lifetime.toFixed(1)}</span><input type="range" min={1} max={10} step={0.5} value={a.lifetime} onChange={(e) => setA((x) => ({ ...x, lifetime: Number(e.target.value) }))} /></label>
            <label className="site-field"><span>Gross margin : {pct(a.margin)}</span><input type="range" min={0.1} max={1} step={0.05} value={a.margin} onChange={(e) => setA((x) => ({ ...x, margin: Number(e.target.value) }))} /></label>
          </div>
          <p className="muted small">Computed locally from Finance (revenue, ad spend) and CRM (customers won). LTV depends on your assumptions above.</p>
        </>
      )}
    </div>
  )
}
