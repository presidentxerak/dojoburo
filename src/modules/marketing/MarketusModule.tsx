// Marketus · Marketing Studio. One stepped campaign flow (Brief → Audience →
// Creatives → Export). The Creatives step doubles as the creative suite: the
// generated ad variants plus the full video editor, image editor and assets —
// so there is a single set of step buttons, no duplicate "Creatives" tab.
import type { ModuleProps } from '../registry'
import CampaignModule from '../campaign/CampaignModule'
import VideoModule from '../video/VideoModule'
import AssetsModule from '../assets/AssetsModule'
import ImageEditor from './ImageEditor'

export default function MarketusModule({ dojoId, onClose }: ModuleProps) {
  const creativeTools = [
    { id: 'video', label: 'Video editor', node: <VideoModule dojoId={dojoId} onClose={onClose} /> },
    { id: 'image', label: 'Image editor', node: <ImageEditor /> },
    { id: 'assets', label: 'Assets', node: <AssetsModule dojoId={dojoId} onClose={onClose} /> },
  ]
  return (
    <div className="marketus-mod">
      <CampaignModule dojoId={dojoId} onClose={onClose} creativeTools={creativeTools} />
    </div>
  )
}
