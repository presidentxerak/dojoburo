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
    id: 'assets',
    label: 'Bibliothèque d’assets',
    blurb: 'Optimise tes images en local (aucun upload) et garde-les hors-ligne.',
    tint: '#0e9b6a',
    emoji: '🗂️',
    agentRole: 'work',
    status: 'live',
    comp: AssetsModule,
  },
  {
    id: 'branding',
    label: 'Branding Studio',
    blurb: 'Logo, variantes, palette, typographies et un Brand Kit central réutilisé partout.',
    tint: '#7b5cff',
    emoji: '🎨',
    agentRole: 'web',
    status: 'live',
    comp: BrandingModule,
  },
  {
    id: 'website',
    label: 'Website Builder',
    blurb: 'Constructeur web pro : blocs, édition live, responsive, thème de marque, export HTML local.',
    tint: '#2f7fd6',
    emoji: '🌐',
    agentRole: 'web',
    status: 'live',
    comp: WebsiteModule,
  },
  {
    id: 'campaign',
    label: 'Campaign Studio',
    blurb: 'Crée une campagne Meta complète : objectif, audiences, personas, visuels et copies.',
    tint: '#e0459b',
    emoji: '📣',
    agentRole: 'acq',
    status: 'live',
    comp: CampaignModule,
  },
  {
    id: 'video',
    label: 'Video Creator',
    blurb: 'Montage vidéo local : import, découpe, textes de marque, formats réseaux, export .webm.',
    tint: '#e0483f',
    emoji: '🎬',
    agentRole: 'acq',
    status: 'live',
    comp: VideoModule,
  },
  {
    id: 'finance',
    label: 'Finance & Compta',
    blurb: 'Revenus, dépenses, trésorerie, TVA et prévisions — import CSV 100% local.',
    tint: '#1fa563',
    emoji: '📊',
    agentRole: 'revenue',
    status: 'live',
    comp: FinanceModule,
  },
  {
    id: 'analytics',
    label: 'Analytics business',
    blurb: 'Ventes, CAC, LTV, ROI, croissance — et l’IA qui explique tes chiffres. 100% local.',
    tint: '#0e9b6a',
    emoji: '📈',
    agentRole: 'measure',
    status: 'live',
    comp: AnalyticsModule,
  },
  {
    id: 'crm',
    label: 'CRM & Outbound',
    blurb: 'Prospects, pipeline, séquences email personnalisées et scoring — 100% local.',
    tint: '#d98c17',
    emoji: '🤝',
    agentRole: 'outbound',
    status: 'live',
    comp: CRMModule,
  },
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
