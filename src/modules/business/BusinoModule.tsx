// Busino · Business Analyst · one unified dashboard that merges Finance &
// Accounting (revenue, expenses, VAT, cash flow, forecasts) with Business
// Analytics (sales, CAC, LTV, ROI, conversion, growth). Both are the existing
// engines, unchanged; Busino switches between the financial ledger and the
// analytical read-out of the same underlying data.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import FinanceModule from '../finance/FinanceModule'
import AnalyticsModule from '../analytics/AnalyticsModule'

type Tab = 'finance' | 'analytics'
const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'finance', label: 'Finance', sub: 'Revenue, expenses, VAT, cash, forecasts' },
  { id: 'analytics', label: 'Analytics', sub: 'CAC, LTV, ROI, conversion, growth' },
]

export default function BusinoModule({ dojoId, onClose }: ModuleProps) {
  const [tab, setTab] = useState<Tab>('finance')
  return (
    <div className="busino-mod">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'finance' && <FinanceModule dojoId={dojoId} onClose={onClose} />}
      {tab === 'analytics' && <AnalyticsModule dojoId={dojoId} onClose={onClose} />}
    </div>
  )
}
