// Busino · Business Analyst · one unified dashboard. The business ledger
// (Finance & Analytics) sits next to a Semrush-style market read-out of the
// dojo's website: traffic analytics, the competitive landscape and AI
// visibility. Everything is computed locally from your own site & data.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import FinanceModule from '../finance/FinanceModule'
import AnalyticsModule from '../analytics/AnalyticsModule'
import { useSeoData, TrafficAnalytics, Competitors, AiVisibilityPanel } from '../seo/SeoTools'
import { InfoDot } from '../../components/InfoDot'

type Tab = 'traffic' | 'competitors' | 'ai' | 'analytics' | 'finance'
const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'traffic', label: 'Traffic', sub: 'Visitors, sources, pages & geography' },
  { id: 'competitors', label: 'Market', sub: 'Competitive landscape & share of voice' },
  { id: 'ai', label: 'AI visibility', sub: 'How AI assistants mention your brand' },
  { id: 'analytics', label: 'Analytics', sub: 'CAC, LTV, ROI, conversion, growth' },
  { id: 'finance', label: 'Finance', sub: 'Revenue, expenses, VAT, cash, forecasts' },
]

export default function BusinoModule({ dojoId, onClose }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My company'
  const [tab, setTab] = useState<Tab>('traffic')
  // deep-link: open directly on a sub-tab (e.g. Finance / Analytics from the CEO)
  useEffect(() => {
    const t = useWork.getState().moduleTab
    if (t && TABS.some((x) => x.id === t)) { setTab(t as Tab); useWork.getState().setModuleTab(null) }
  }, [])
  const bundle = useSeoData(dojoId, dojoName)
  const isSeo = tab === 'traffic' || tab === 'competitors' || tab === 'ai'
  return (
    <div className="busino-mod se">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
        <InfoDot title="Business Studio" label="How the Business Studio works">
          <p>One dashboard for your whole business. <b>Traffic</b>, <b>Market</b> and <b>AI visibility</b> analyse your saved website (Semrush-style). <b>Analytics</b> shows CAC, LTV, ROI and conversion. <b>Finance</b> covers revenue, VAT, cash and forecasts.</p>
          <p>Everything is computed locally from your own data — sales won in the CRM and ad budgets flow in automatically. Connect Stripe / Google Analytics / QuickBooks for live numbers.</p>
        </InfoDot>
      </div>
      {isSeo && bundle.loading && <div className="se-loading">Analysing {dojoName}…</div>}
      {!bundle.loading && tab === 'traffic' && <TrafficAnalytics b={bundle} />}
      {!bundle.loading && tab === 'competitors' && <Competitors b={bundle} />}
      {!bundle.loading && tab === 'ai' && <AiVisibilityPanel b={bundle} />}
      {tab === 'analytics' && <AnalyticsModule dojoId={dojoId} onClose={onClose} />}
      {tab === 'finance' && <FinanceModule dojoId={dojoId} onClose={onClose} />}
    </div>
  )
}
