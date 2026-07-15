// Growth Studio · Pumpi (Growth Hacker) · a Semrush-style suite to track and
// grow the website the dojo built. Domain overview, keyword research, position
// tracking, a real site audit and backlink analytics · plus the leads pipeline
// (CRM) so acquisition and conversion live under one teammate. 100% local.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import CRMModule from '../crm/CRMModule'
import { useSeoData, SeoOverview, KeywordResearch, PositionTracking, SiteAudit, Backlinks } from '../seo/SeoTools'

type Tab = 'overview' | 'keywords' | 'tracking' | 'audit' | 'backlinks' | 'leads'
const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'overview', label: 'Overview', sub: 'Authority, traffic & keyword snapshot' },
  { id: 'keywords', label: 'Keyword research', sub: 'Find and prioritise search terms' },
  { id: 'tracking', label: 'Position tracking', sub: 'Daily rank tracking & visibility' },
  { id: 'audit', label: 'Site audit', sub: 'Live on-page SEO health of your site' },
  { id: 'backlinks', label: 'Backlinks', sub: 'Referring domains & authority' },
  { id: 'leads', label: 'Leads', sub: 'Pipeline & outreach (CRM)' },
]

export default function GrowthModule({ dojoId, onClose }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My company'
  const [tab, setTab] = useState<Tab>('overview')
  const bundle = useSeoData(dojoId, dojoName)

  return (
    <div className="growth-mod se">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
      </div>
      {bundle.loading && tab !== 'leads' && <div className="se-loading">Analysing {dojoName}…</div>}
      {!bundle.loading && tab === 'overview' && <SeoOverview b={bundle} />}
      {!bundle.loading && tab === 'keywords' && <KeywordResearch b={bundle} />}
      {!bundle.loading && tab === 'tracking' && <PositionTracking b={bundle} />}
      {!bundle.loading && tab === 'audit' && <SiteAudit b={bundle} />}
      {!bundle.loading && tab === 'backlinks' && <Backlinks b={bundle} />}
      {tab === 'leads' && <CRMModule dojoId={dojoId} onClose={onClose} />}
    </div>
  )
}
