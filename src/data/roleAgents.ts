// ---------------------------------------------------------------------------
// DojoBuro · The eight AI teammates.
//
// A company is run by eight unified agents, each with a memorable CODENAME
// (the primary identity shown everywhere) and a plain JOB TITLE underneath.
// Chief is the only orchestration entry point · you talk to Chief, and Chief
// delegates to the seven specialists. Several agents merge what used to be
// separate studios (see LEGACY_ROLE_MAP for the old → new mapping).
//
//   Chief     · CEO                 · orchestrates everything
//   Brandi    · Brand Architect     · names, domains, brand
//   Weblos    · Website Designer     · websites
//   Marketus  · Marketing Studio     · campaigns + video + assets
//   Pumpi     · Growth Manager       · CRM + outreach
//   Busino    · Business Analyst     · finance + analytics
//   Sentinel  · Operations Guardian  · autonomy + security
//   Vaultor   · Billing Manager      · credits + billing
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export interface RoleAgent {
  id: string
  /** Codename · the primary identity shown throughout the app. */
  code: string
  /** Job title · the small subtitle under the codename. */
  title: string
  /** One-line description. */
  desc: string
  tint: string
  dept: Department
  /** true for the eight core agents seeded into every dojo. Optional agents are
   *  NOT seeded · the user adds them from the empty grid cells on the dojo. */
  core: boolean
  /** the connector ids this agent's studio works with (drives its workspace). */
  apps: string[]
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

type Spec = { id: string; code: string; title: string; desc: string; tint: string; dept: Department; core?: boolean; apps?: string[] }

// Ordered as a company task pipeline · lead → brand → build → engineer →
// market → grow → communicate → support → analyse → bill → legal → secure.
// The dojo seats agents in this order and the roster groups them by function.
const SPECS: Spec[] = [
  {
    id: 'chief', code: 'Chief', title: 'CEO',
    desc: 'Plans, delegates and coordinates every task across your AI workforce.',
    tint: '#7b5cff', dept: 'Leadership', apps: ['notion', 'slack', 'gmail'],
  },
  {
    id: 'brandi', code: 'Brandi', title: 'Brand Architect',
    desc: 'Finds available brand names, domains and builds your brand identity.',
    tint: '#a855f7', dept: 'Product', apps: ['notion', 'figma'],
  },
  {
    id: 'weblos', code: 'Weblos', title: 'Web Designer',
    desc: 'Designs and builds beautiful websites tailored to your brand.',
    tint: '#2f7fd6', dept: 'Product', apps: ['figma', 'cloudinary'],
  },
  {
    id: 'devi', code: 'Devi', title: 'Engineering Lead',
    desc: 'Tracks issues, pull requests and sprints across your dev stack.',
    tint: '#3b82f6', dept: 'Engineering', core: false,
    apps: ['github', 'linear'],
  },
  {
    id: 'marketus', code: 'Marketus', title: 'Marketer',
    desc: 'Creates campaigns, images, videos and social content from a single creative workflow.',
    tint: '#e0459b', dept: 'Growth', apps: ['meta', 'twitter', 'linkedin', 'mailchimp'],
  },
  {
    id: 'pumpi', code: 'Pumpi', title: 'Growth Hacker',
    desc: 'Generates leads, manages your pipeline and sends personalized outreach.',
    tint: '#d98c17', dept: 'Growth', apps: ['hubspot', 'gmail', 'calendly'],
  },
  {
    id: 'nexa', code: 'Nexa', title: 'Comms Manager',
    desc: 'Broadcasts to your team and community across every channel.',
    tint: '#f97316', dept: 'People', core: false,
    apps: ['slack', 'discord'],
  },
  {
    id: 'helpi', code: 'Helpi', title: 'Support Lead',
    desc: 'Runs the support queue: tickets, conversations and replies.',
    tint: '#14b8a6', dept: 'People', core: false,
    apps: ['zendesk', 'intercom'],
  },
  {
    id: 'busino', code: 'Busino', title: 'Business Analyst',
    desc: 'Tracks your finances and turns business data into actionable insights.',
    tint: '#1fa563', dept: 'Finance', apps: ['stripe', 'ga4', 'quickbooks'],
  },
  {
    id: 'vaultor', code: 'Vaultor', title: 'Billing Manager',
    desc: 'Manages credits, subscriptions and payments seamlessly.',
    tint: '#0e9bb5', dept: 'Finance', apps: ['stripe'],
  },
  {
    id: 'legi', code: 'Legi', title: 'Legal & Docs',
    desc: 'Sends contracts for signature and keeps documents in order.',
    tint: '#8b5cf6', dept: 'Ops', core: false,
    apps: ['gdrive', 'docusign'],
  },
  {
    id: 'sentinel', code: 'Sentinel', title: 'Security Guardian',
    desc: 'Keeps your AI efficient, secure and under control.',
    tint: '#5b6472', dept: 'Ops', apps: [],
  },
  // --- specialists · not part of the classic company crew. They exist so a
  // project archetype (a campaign, a book, an app…) can compose the exact team
  // that job needs. Added to a dojo by an archetype, or by hand from the roster.
  {
    id: 'scout', code: 'Scout', title: 'Research Analyst',
    desc: 'Digs into the market, the competitors and the audience, and briefs the team.',
    tint: '#0ea5e9', dept: 'Product', core: false, apps: ['notion', 'gdrive'],
  },
  {
    id: 'scribe', code: 'Scribe', title: 'Writer & Editor',
    desc: 'Writes and edits long-form: books, articles, scripts and documentation.',
    tint: '#c026d3', dept: 'Product', core: false, apps: ['notion', 'gdrive'],
  },
  {
    id: 'deck', code: 'Deck', title: 'Presentation Designer',
    desc: 'Turns the work into clear decks, one-pagers and pitch material.',
    tint: '#f59e0b', dept: 'Product', core: false, apps: ['gdrive', 'canva'],
  },
  {
    id: 'pixel', code: 'Pixel', title: 'Visual Designer',
    desc: 'Creates on-brand visuals, covers and image assets.',
    tint: '#ec4899', dept: 'Product', core: false, apps: ['figma', 'canva', 'cloudinary'],
  },
  // --- the two system-level agents ------------------------------------------
  {
    id: 'pilot', code: 'Pilot', title: 'Project Manager',
    desc: 'Runs your whole pipeline: sequences every project, keeps them moving and reports back.',
    tint: '#6366f1', dept: 'Leadership', core: false, apps: ['notion', 'slack'],
  },
  {
    id: 'kaizen', code: 'Kaizen', title: 'App Caretaker',
    desc: 'Watches over the app: keeps it healthy and up to date, and protects your data and agents.',
    tint: '#0f766e', dept: 'Ops', core: false, apps: ['github'],
  },
]

export const ROLE_AGENTS: RoleAgent[] = SPECS.map((s) => ({
  ...s, core: s.core !== false, apps: s.apps ?? [],
  name: s.code, role: s.id, cat: s.title, blurb: s.desc,
}))

export const ROLE_BY_ID: Record<string, RoleAgent> = Object.fromEntries(ROLE_AGENTS.map((r) => [r.id, r]))
export const ROLE_IDS: string[] = ROLE_AGENTS.map((r) => r.id)

/** The classic "run a company" crew · the twelve agents a full-company dojo
 *  seeds. The specialists (Scout, Scribe, Deck, Pixel) are deliberately NOT in
 *  here: they join a dojo only when a project archetype asks for them, so an
 *  existing company dojo never changes. */
export const COMPANY_IDS: string[] = [
  'chief', 'brandi', 'weblos', 'devi', 'marketus', 'pumpi',
  'nexa', 'helpi', 'busino', 'vaultor', 'legi', 'sentinel',
]
export const COMPANY_AGENTS: RoleAgent[] = COMPANY_IDS.map((id) => ROLE_BY_ID[id]).filter(Boolean)

/** The eight agents seeded into every dojo. */
export const CORE_AGENTS: RoleAgent[] = ROLE_AGENTS.filter((r) => r.core)
export const CORE_IDS: string[] = CORE_AGENTS.map((r) => r.id)
/** Agents the user can add to a dojo from its empty grid cells. */
export const OPTIONAL_AGENTS: RoleAgent[] = ROLE_AGENTS.filter((r) => !r.core)
export const OPTIONAL_IDS: string[] = OPTIONAL_AGENTS.map((r) => r.id)

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
