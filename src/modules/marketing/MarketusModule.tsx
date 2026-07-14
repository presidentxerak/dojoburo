// Marketus · Marketing Studio. Two areas: Campaigns (Meta ads) and Creatives —
// a CapCut-style creative suite that unifies the video editor, the image editor
// (all social formats) and the local asset optimiser under one tab.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import CampaignModule from '../campaign/CampaignModule'
import VideoModule from '../video/VideoModule'
import AssetsModule from '../assets/AssetsModule'
import ImageEditor from './ImageEditor'

type Tab = 'campaigns' | 'creatives'
type Creative = 'video' | 'image' | 'assets'

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: 'campaigns', label: 'Campaigns', sub: 'Meta ads · audiences, creatives, copy' },
  { id: 'creatives', label: 'Creatives', sub: 'Video editor, image editor & assets' },
]
const CREATIVES: { id: Creative; label: string }[] = [
  { id: 'video', label: 'Video editor' },
  { id: 'image', label: 'Image editor' },
  { id: 'assets', label: 'Assets' },
]

export default function MarketusModule({ dojoId, onClose }: ModuleProps) {
  const [tab, setTab] = useState<Tab>('campaigns')
  const [creative, setCreative] = useState<Creative>('video')
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

      {tab === 'creatives' && (
        <div className="creatives-wrap">
          <div className="cc-subtabs">
            {CREATIVES.map((c) => (
              <button key={c.id} className={`cc-subtab${creative === c.id ? ' on' : ''}`} onClick={() => setCreative(c.id)}>{c.label}</button>
            ))}
          </div>
          {creative === 'video' && <VideoModule dojoId={dojoId} onClose={onClose} />}
          {creative === 'image' && <ImageEditor />}
          {creative === 'assets' && <AssetsModule dojoId={dojoId} onClose={onClose} />}
        </div>
      )}
    </div>
  )
}
