// Studio modules · the pro-app surfaces that grow each agent into a real tool.
// The registry is the single source of truth; add a module here and it appears
// everywhere (missions, agent dashboards).
import type { ComponentType } from 'react'
// Modules are imported DIRECTLY (not lazy). They were lazy-loaded before, but a
// stale/missing chunk after a deploy could 404 and leave the panel blank. Bundled
// into the main chunk, a module always renders as long as the app shell loads.
import BrandingModule from './branding/BrandingModule'
import WebsiteModule from './website/WebsiteModule'
import CRMModule from './crm/CRMModule'
import MarketusModule from './marketing/MarketusModule'
import BusinoModule from './business/BusinoModule'
import ChiefModule from './chief/ChiefModule'
import SentinelModule from './sentinel/SentinelModule'
import VaultorModule from './vaultor/VaultorModule'

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

// One studio module per studio-owning agent. Marketus and Busino are composite
// workspaces that internally switch between the former standalone studios, so
// every original tool is still reachable · just grouped under one teammate.
export const MODULES: ModuleDef[] = [
  {
    id: 'chief', label: 'Command Center',
    blurb: 'Company overview, priorities and the whole team · Chief coordinates everything.',
    tint: '#7b5cff', emoji: '🧭', agentRole: 'chief', status: 'live', comp: ChiefModule,
  },
  {
    id: 'branding', label: 'Brand Studio',
    blurb: 'Finds available brand names, domains and .com availability for your brand.',
    tint: '#a855f7', emoji: '🎨', agentRole: 'brandi', status: 'live', comp: BrandingModule,
  },
  {
    id: 'website', label: 'Website Studio',
    blurb: 'Pro website builder: blocks, live editing, responsive, brand theme, local HTML export.',
    tint: '#2f7fd6', emoji: '🌐', agentRole: 'weblos', status: 'live', comp: WebsiteModule,
  },
  {
    id: 'marketing', label: 'Marketing Studio',
    blurb: 'One creative workflow: Meta campaigns, video editing and image optimisation.',
    tint: '#e0459b', emoji: '📣', agentRole: 'marketus', status: 'live', comp: MarketusModule,
  },
  {
    id: 'crm', label: 'Growth Studio',
    blurb: 'Leads, pipeline, personalised email sequences and outreach · 100% local.',
    tint: '#d98c17', emoji: '🤝', agentRole: 'pumpi', status: 'live', comp: CRMModule,
  },
  {
    id: 'business', label: 'Business Studio',
    blurb: 'One dashboard: finance (revenue, VAT, forecasts) and analytics (CAC, LTV, ROI).',
    tint: '#1fa563', emoji: '📊', agentRole: 'busino', status: 'live', comp: BusinoModule,
  },
  {
    id: 'operations', label: 'Operations',
    blurb: 'Autonomy, budgets, anti-loop limits, encrypted secrets and safety switches.',
    tint: '#5b6472', emoji: '🛡️', agentRole: 'sentinel', status: 'live', comp: SentinelModule,
  },
  {
    id: 'billing', label: 'Billing',
    blurb: 'Credits, top-ups and payments in your own currency · no crypto.',
    tint: '#0e9bb5', emoji: '💳', agentRole: 'vaultor', status: 'live', comp: VaultorModule,
  },
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
