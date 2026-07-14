// ---------------------------------------------------------------------------
// DojoBuro · The eight AI teammates.
//
// A company is run by eight unified agents, each with a memorable CODENAME
// (the primary identity shown everywhere) and a plain JOB TITLE underneath.
// Chief is the only orchestration entry point — you talk to Chief, and Chief
// delegates to the seven specialists. Several agents merge what used to be
// separate studios (see LEGACY_ROLE_MAP for the old → new mapping).
//
//   Chief     · CEO                 — orchestrates everything
//   Brandi    · Brand Architect     — names, domains, brand
//   Weblos    · Website Designer     — websites
//   Marketus  · Marketing Studio     — campaigns + video + assets
//   Pumpi     · Growth Manager       — CRM + outreach
//   Busino    · Business Analyst     — finance + analytics
//   Sentinel  · Operations Guardian  — autonomy + security
//   Vaultor   · Billing Manager      — credits + billing
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export interface RoleAgent {
  id: string
  /** Codename — the primary identity shown throughout the app. */
  code: string
  /** Job title — the small subtitle under the codename. */
  title: string
  /** One-line description. */
  desc: string
  tint: string
  dept: Department
  // --- legacy aliases (kept so existing consumers keep working) ---
  /** = code (many surfaces read `.name`). */
  name: string
  /** = id (the role key stored on each dojo agent). */
  role: string
  /** = title (chip label). */
  cat: string
  /** = desc. */
  blurb: string
}

type Spec = { id: string; code: string; title: string; desc: string; tint: string; dept: Department }

const SPECS: Spec[] = [
  {
    id: 'chief', code: 'Chief', title: 'CEO',
    desc: 'Plans, delegates and coordinates every task across your AI workforce.',
    tint: '#7b5cff', dept: 'Leadership',
  },
  {
    id: 'brandi', code: 'Brandi', title: 'Brand Architect',
    desc: 'Finds available brand names, domains and builds your brand identity.',
    tint: '#a855f7', dept: 'Product',
  },
  {
    id: 'weblos', code: 'Weblos', title: 'Website Designer',
    desc: 'Designs and builds beautiful websites tailored to your brand.',
    tint: '#2f7fd6', dept: 'Product',
  },
  {
    id: 'marketus', code: 'Marketus', title: 'Marketing Studio',
    desc: 'Creates campaigns, images, videos and social content from a single creative workflow.',
    tint: '#e0459b', dept: 'Growth',
  },
  {
    id: 'pumpi', code: 'Pumpi', title: 'Growth Manager',
    desc: 'Generates leads, manages your pipeline and sends personalized outreach.',
    tint: '#d98c17', dept: 'Growth',
  },
  {
    id: 'busino', code: 'Busino', title: 'Business Analyst',
    desc: 'Tracks your finances and turns business data into actionable insights.',
    tint: '#1fa563', dept: 'Finance',
  },
  {
    id: 'sentinel', code: 'Sentinel', title: 'Operations Guardian',
    desc: 'Keeps your AI efficient, secure and under control.',
    tint: '#5b6472', dept: 'Ops',
  },
  {
    id: 'vaultor', code: 'Vaultor', title: 'Billing Manager',
    desc: 'Manages credits, subscriptions and payments seamlessly.',
    tint: '#0e9bb5', dept: 'Finance',
  },
]

export const ROLE_AGENTS: RoleAgent[] = SPECS.map((s) => ({
  ...s, name: s.code, role: s.id, cat: s.title, blurb: s.desc,
}))

export const ROLE_BY_ID: Record<string, RoleAgent> = Object.fromEntries(ROLE_AGENTS.map((r) => [r.id, r]))
export const ROLE_IDS: string[] = ROLE_AGENTS.map((r) => r.id)

// Backward compatibility: the previous twelve role ids collapse into the eight
// unified agents. Used to migrate persisted dojos and to resolve any legacy id
// still floating around (deliverables, saved crews, routing tables).
export const LEGACY_ROLE_MAP: Record<string, string> = {
  ceo: 'chief',
  brand: 'brandi',
  web: 'weblos',
  acq: 'marketus', video: 'marketus', work: 'marketus',
  outbound: 'pumpi',
  revenue: 'busino', measure: 'busino',
  engine: 'sentinel', config: 'sentinel',
  credit: 'vaultor',
}

/** Resolve any role id (new or legacy) to a current agent id. */
export function canonicalRole(id: string | undefined | null): string {
  if (!id) return 'chief'
  if (ROLE_BY_ID[id]) return id
  return LEGACY_ROLE_MAP[id] ?? 'chief'
}
