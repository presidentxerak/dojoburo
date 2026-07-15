// Busino · Business Analyst · one unified dashboard. The business ledger
// (Finance & Analytics) sits next to a Semrush-style market read-out of the
// dojo's website: traffic analytics, the competitive landscape and AI
// visibility. Everything is computed locally from your own site & data.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import FinanceModule from '../finance/FinanceModule'
import AnalyticsModule from '../analytics/AnalyticsModule'
import { useSeoData, TrafficAnalytics, Competitors, AiVisibilityPanel } from '../seo/SeoTools'

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
  const bundle = useSeoData(dojoId, dojoName)
  const isSeo = tab === 'traffic' || tab === 'competitors' || tab === 'ai'
  return (
    <div className="busino-mod se">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
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
