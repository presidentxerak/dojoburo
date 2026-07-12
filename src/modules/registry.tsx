// Studio modules · the pro-app surfaces that grow each agent into a real tool.
//
// Each module is lazy-loaded (its own chunk) so the base bundle stays light —
// the Video editor's ffmpeg.wasm or the Website builder's canvas only download
// when the user opens them. The registry is the single source of truth; add a
// module here and it appears everywhere (missions, agent dashboards).
import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

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
  /** lazy component for a live module */
  comp?: LazyExoticComponent<ComponentType<ModuleProps>>
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
    comp: lazy(() => import('./assets/AssetsModule')),
  },
  {
    id: 'branding',
    label: 'Branding Studio',
    blurb: 'Logo, variantes, palette, typographies et un Brand Kit central réutilisé partout.',
    tint: '#7b5cff',
    emoji: '🎨',
    agentRole: 'web',
    status: 'live',
    comp: lazy(() => import('./branding/BrandingModule')),
  },
  {
    id: 'website',
    label: 'Website Builder',
    blurb: 'Constructeur web pro : blocs, édition live, responsive, thème de marque, export HTML local.',
    tint: '#2f7fd6',
    emoji: '🌐',
    agentRole: 'web',
    status: 'live',
    comp: lazy(() => import('./website/WebsiteModule')),
  },
  {
    id: 'campaign',
    label: 'Campaign Studio',
    blurb: 'Crée une campagne Meta complète : objectif, audiences, personas, visuels et copies.',
    tint: '#e0459b',
    emoji: '📣',
    agentRole: 'acq',
    status: 'live',
    comp: lazy(() => import('./campaign/CampaignModule')),
  },
  {
    id: 'video',
    label: 'Video Creator',
    blurb: 'Montage vidéo local : import, découpe, textes de marque, formats réseaux, export .webm.',
    tint: '#e0483f',
    emoji: '🎬',
    agentRole: 'acq',
    status: 'live',
    comp: lazy(() => import('./video/VideoModule')),
  },
  {
    id: 'finance',
    label: 'Finance & Compta',
    blurb: 'Revenus, dépenses, trésorerie, TVA et prévisions — import CSV 100% local.',
    tint: '#1fa563',
    emoji: '📊',
    agentRole: 'revenue',
    status: 'live',
    comp: lazy(() => import('./finance/FinanceModule')),
  },
  {
    id: 'analytics',
    label: 'Analytics business',
    blurb: 'Ventes, CAC, LTV, ROI, croissance — et l’IA qui explique tes chiffres. 100% local.',
    tint: '#0e9b6a',
    emoji: '📈',
    agentRole: 'measure',
    status: 'live',
    comp: lazy(() => import('./analytics/AnalyticsModule')),
  },
  {
    id: 'crm',
    label: 'CRM & Outbound',
    blurb: 'Prospects, pipeline, séquences email personnalisées et scoring — 100% local.',
    tint: '#d98c17',
    emoji: '🤝',
    agentRole: 'outbound',
    status: 'live',
    comp: lazy(() => import('./crm/CRMModule')),
  },
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
