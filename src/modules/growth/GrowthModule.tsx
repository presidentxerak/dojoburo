// Growth Studio · Pumpi (Growth Hacker) · a Semrush-style suite to track and
// grow the website the dojo built. Domain overview, keyword research, position
// tracking, a real site audit and backlink analytics · plus the leads pipeline
// (CRM) so acquisition and conversion live under one teammate. 100% local.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import CRMModule from '../crm/CRMModule'
import { useSeoData, SeoOverview, KeywordResearch, RankTracker, SiteAudit, Backlinks } from '../seo/SeoTools'

type Tab = 'overview' | 'keywords' | 'tracking' | 'audit' | 'backlinks' | 'leads'
const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'overview', label: 'Overview', sub: 'Live on-page snapshot of your site' },
  { id: 'keywords', label: 'Keyword research', sub: 'Generate keyword ideas & track them' },
  { id: 'tracking', label: 'Rank tracker', sub: 'Your keyword watchlist' },
  { id: 'audit', label: 'Site audit', sub: 'Live on-page SEO health of your site' },
  { id: 'backlinks', label: 'Backlinks', sub: 'Referring domains (needs a source)' },
  { id: 'leads', label: 'Leads', sub: 'Pipeline & outreach (CRM)' },
]

export default function GrowthModule({ dojoId, onClose }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My company'
  const [tab, setTab] = useState<Tab>('overview')
  // deep-link: open directly on a sub-tab (e.g. Leads from the CEO dashboard)
  useEffect(() => {
    const t = useWork.getState().moduleTab
    if (t && TABS.some((x) => x.id === t)) { setTab(t as Tab); useWork.getState().setModuleTab(null) }
  }, [])
  const bundle = useSeoData(dojoId, dojoName)

  return (
    <div className="growth-mod se sq">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
      </div>
      {bundle.loading && tab !== 'leads' && <div className="se-loading">Analysing {dojoName}…</div>}
      {!bundle.loading && tab === 'overview' && <SeoOverview b={bundle} />}
      {!bundle.loading && tab === 'keywords' && <KeywordResearch b={bundle} />}
      {!bundle.loading && tab === 'tracking' && <RankTracker b={bundle} />}
      {!bundle.loading && tab === 'audit' && <SiteAudit b={bundle} />}
      {!bundle.loading && tab === 'backlinks' && <Backlinks b={bundle} />}
      {tab === 'leads' && <CRMModule dojoId={dojoId} onClose={onClose} />}
    </div>
  )
}
