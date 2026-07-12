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
    blurb: 'Crée une campagne Meta complète : audiences, personas, visuels, copies, tracking.',
    tint: '#e0459b',
    emoji: '📣',
    agentRole: 'acq',
    status: 'soon',
    planned: ['Objectif → audiences & personas', 'Visuels + copies (éditeur type Canva, local)', 'Landing pages liées', 'Tracking & first draft IA'],
  },
  {
    id: 'video',
    label: 'Video Creator',
    blurb: 'Montage vidéo local (ffmpeg.wasm + WebCodecs) : timeline, sous-titres, formats réseaux.',
    tint: '#e0483f',
    emoji: '🎬',
    agentRole: 'acq',
    status: 'soon',
    planned: ['Timeline, découpe, transitions (Web Workers + WASM)', 'Sous-titres auto + traduction', 'Formats TikTok / Reels / Shorts / Meta', 'Vidéos jamais envoyées au serveur'],
  },
  {
    id: 'finance',
    label: 'Finance & Compta',
    blurb: 'Revenus, dépenses, trésorerie, TVA, factures, prévisions — import CSV local + analyse IA.',
    tint: '#1fa563',
    emoji: '📊',
    agentRole: 'revenue',
    status: 'soon',
    planned: ['Import & catégorisation locale (CSV/Excel)', 'TVA, marges, trésorerie, prévisions', 'Exports comptables PDF/CSV', 'Analyse IA : rentabilité, anomalies'],
  },
  {
    id: 'crm',
    label: 'CRM & Outbound',
    blurb: 'Prospects, pipeline, séquences email, scoring et recommandations de l’agent Sales.',
    tint: '#d98c17',
    emoji: '🤝',
    agentRole: 'outbound',
    status: 'soon',
    planned: ['Prospects, clients, pipeline', 'Séquences email + relances', 'Scoring & analyse des réponses', 'Rédaction IA des messages'],
  },
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
