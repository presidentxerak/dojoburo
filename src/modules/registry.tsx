// Studio modules · the pro-app surfaces that grow each agent into a real tool.
// The registry is the single source of truth; add a module here and it appears
// everywhere (missions, agent dashboards).
import type { ComponentType } from 'react'
// Modules are imported DIRECTLY (not lazy). They were lazy-loaded before, but a
// stale/missing chunk after a deploy could 404 and leave the panel blank. Bundled
// into the main chunk, a module always renders as long as the app shell loads.
import AssetsModule from './assets/AssetsModule'
import BrandingModule from './branding/BrandingModule'
import WebsiteModule from './website/WebsiteModule'
import CampaignModule from './campaign/CampaignModule'
import VideoModule from './video/VideoModule'
import FinanceModule from './finance/FinanceModule'
import CRMModule from './crm/CRMModule'
import AnalyticsModule from './analytics/AnalyticsModule'

export interface ModuleProps {
  onClose: () => void
  /** the dojo/company id this module operates on */
  dojoId: string
}

export interface ModuleDef {
  id: string
  label: string
  blurb: string
  tint: string
  emoji: string
  /** which role agent owns this module (opens from its dashboard) */
  agentRole: string
  status: 'live' | 'soon'
  /** component for a live module (bundled, not lazy) */
  comp?: ComponentType<ModuleProps>
  /** what's coming, shown on a 'soon' module scaffold */
  planned?: string[]
}

export const MODULES: ModuleDef[] = [
  {
    id: 'branding', label: 'Branding Studio',
    blurb: 'Logo, variants, palette, typography and a central Brand Kit reused everywhere.',
    tint: '#a855f7', emoji: '🎨', agentRole: 'brand', status: 'live', comp: BrandingModule,
  },
  {
    id: 'website', label: 'Website Builder',
    blurb: 'Pro website builder: blocks, live editing, responsive, brand theme, local HTML export.',
    tint: '#2f7fd6', emoji: '🌐', agentRole: 'web', status: 'live', comp: WebsiteModule,
  },
  {
    id: 'campaign', label: 'Campaign Studio',
    blurb: 'Full Meta campaign: objective, audiences, personas, creatives and copy.',
    tint: '#e0459b', emoji: '📣', agentRole: 'acq', status: 'live', comp: CampaignModule,
  },
  {
    id: 'video', label: 'Video Creator',
    blurb: 'Local video editor: import, trim, brand captions, social formats, .webm export.',
    tint: '#e0483f', emoji: '🎬', agentRole: 'video', status: 'live', comp: VideoModule,
  },
  {
    id: 'crm', label: 'CRM & Outbound',
    blurb: 'Prospects, pipeline, personalised email sequences and scoring — 100% local.',
    tint: '#d98c17', emoji: '🤝', agentRole: 'outbound', status: 'live', comp: CRMModule,
  },
  {
    id: 'finance', label: 'Finance & Accounting',
    blurb: 'Revenue, expenses, cash, VAT and forecasts — 100% local CSV import.',
    tint: '#1fa563', emoji: '📊', agentRole: 'revenue', status: 'live', comp: FinanceModule,
  },
  {
    id: 'analytics', label: 'Business Analytics',
    blurb: 'Sales, CAC, LTV, ROI, growth — with AI that explains your numbers. 100% local.',
    tint: '#0e9b6a', emoji: '📈', agentRole: 'measure', status: 'live', comp: AnalyticsModule,
  },
  {
    id: 'assets', label: 'Asset Library',
    blurb: 'Optimise your images locally (no upload) and keep them offline.',
    tint: '#14b8a6', emoji: '🗂️', agentRole: 'work', status: 'live', comp: AssetsModule,
  },
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
