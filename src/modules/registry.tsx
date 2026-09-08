// Studio modules · the pro-app surfaces that grow each agent into a real tool.
// The registry is the single source of truth; add a module here and it appears
// everywhere (missions, agent dashboards).
import type { ComponentType } from 'react'
// Modules are imported DIRECTLY (not lazy). They were lazy-loaded before, but a
// stale/missing chunk after a deploy could 404 and leave the panel blank. Bundled
// into the main chunk, a module always renders as long as the app shell loads.
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
  /** which role agent owns this module (opens from its dashboard) */
  agentRole: string
  /** true when the agent needs a connected external app to act for real (send
   *  email, publish, charge). Drives the blinking "Connect apps" hint. */
  needsApps?: boolean
  status: 'live' | 'soon'
  /** component for a live module (bundled, not lazy) */
  comp?: ComponentType<ModuleProps>
  /** what's coming, shown on a 'soon' module scaffold */
  planned?: string[]
}

// The studio modules.
//
// Three teammates own a control panel of their own: Chief (the company
// overview), Sentinel (autonomy and limits) and Vaultor (plan, usage, books).
// The other fifteen are not missing anything — a teammate's page already shows
// what it has produced, the apps it works in, and its brief. A module exists
// only where a teammate needs controls that do not fit that shape.
export const MODULES: ModuleDef[] = [
  {
    id: 'chief', label: 'Command Center',
    blurb: 'Company overview, priorities and the whole team · Chief coordinates everything.',
    tint: '#7b5cff', agentRole: 'chief', status: 'live', comp: ChiefModule,
  },
  {
    id: 'operations', label: 'Security Studio',
    blurb: 'How much your team does on its own, daily spending limits, saved keys and safety switches.',
    tint: '#5b6472', agentRole: 'sentinel', status: 'live', comp: SentinelModule,
  },
  {
    id: 'billing', label: 'Billing',
    blurb: 'Your plan, what the team has used, payments and the books.',
    tint: '#0e9bb5', agentRole: 'vaultor', status: 'live', comp: VaultorModule,
  },
  // --- Optional group agents · added by the user from the dojo's empty cells ---
]

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]))
