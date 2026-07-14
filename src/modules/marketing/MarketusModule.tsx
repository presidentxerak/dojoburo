// Marketus · Marketing Studio — one creative workflow that unifies the three
// former studios: Campaigns (Meta ads), Video (editor + .webm export) and
// Assets (local image optimisation). Each sub-tool is the existing engine,
// unchanged; Marketus just switches between them with a segmented control.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import CampaignModule from '../campaign/CampaignModule'
import VideoModule from '../video/VideoModule'
import AssetsModule from '../assets/AssetsModule'

type Tab = 'campaigns' | 'video' | 'assets'
const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'campaigns', label: 'Campaigns', sub: 'Meta ads · audiences, creatives, copy' },
  { id: 'video', label: 'Video', sub: 'Import, trim, brand captions, export' },
  { id: 'assets', label: 'Assets', sub: 'Optimise images locally' },
]

export default function MarketusModule({ dojoId, onClose }: ModuleProps) {
  const [tab, setTab] = useState<Tab>('campaigns')
  return (
    <div className="marketus-mod">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'campaigns' && <CampaignModule dojoId={dojoId} onClose={onClose} />}
      {tab === 'video' && <VideoModule dojoId={dojoId} onClose={onClose} />}
      {tab === 'assets' && <AssetsModule dojoId={dojoId} onClose={onClose} />}
    </div>
  )
}
