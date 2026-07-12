// ---------------------------------------------------------------------------
// DojoBuro · Role agents — the NEW dojo mechanic.
//
// A company is run by TEN functional agents, each owning a set of tasks. These
// are the characters you see in the dojo; clicking one (in the 3D scene or its
// card on the right) opens that agent's dedicated management / edition /
// creation dashboard. The CEO coordinates the others.
//
// Every dojo is seeded with exactly this crew, so the roster, the 3D scene and
// the dashboards always line up. The `dept` mapping lets each role reuse the
// existing 3D characters, connectors and station labels.
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export interface RoleAgent {
  /** stable role key · also the WAgent.role tag and the dashboard router key */
  id: string
  /** friendly display name (editable per dojo) */
  name: string
  /** role subtitle shown under the name */
  role: string
  /** short category chip (matches the old dashboard card categories) */
  cat: string
  /** one-line mission, shown on the roster card and the dashboard header */
  blurb: string
  /** accent colour for the card + dashboard */
  tint: string
  /** maps the role onto a startup department (3D character, connectors, labels) */
  dept: Department
}

export const ROLE_AGENTS: RoleAgent[] = [
  {
    id: 'ceo',
    name: 'Ava',
    role: 'CEO · orchestrateur',
    cat: 'Direction',
    blurb: 'Coordonne tous les agents : tu lui parles, il découpe et délègue le travail.',
    tint: '#7b5cff',
    dept: 'Leadership',
  },
  {
    id: 'engine',
    name: 'Otto',
    role: 'Agent Moteur · autonomie',
    cat: 'Moteur',
    blurb: "Règle l'autonomie du CEO et l'empêche de trop dépenser ou de tourner en rond.",
    tint: '#e07a2a',
    dept: 'Ops',
  },
  {
    id: 'work',
    name: 'Wade',
    role: 'Agent Travail · bibliothèque d’assets',
    cat: 'Travail',
    blurb: 'Optimise et range tes images en local, et exécute les livrables à la demande.',
    tint: '#1fa563',
    dept: 'Engineering',
  },
  {
    id: 'web',
    name: 'Wren',
    role: 'Agent Web · Branding + Website',
    cat: 'Web',
    blurb: 'Ouvre le Branding Studio (marque) et le Website Builder (site) — génère puis édite.',
    tint: '#2f7fd6',
    dept: 'Product',
  },
  {
    id: 'acq',
    name: 'Mia',
    role: 'Agent Acquisition · Campagnes + Vidéo',
    cat: 'Acquisition',
    blurb: 'Ouvre le Campaign Studio (pubs Meta) et le Video Creator (montage local).',
    tint: '#e0459b',
    dept: 'Growth',
  },
  {
    id: 'outbound',
    name: 'Sol',
    role: 'Agent Outbound · CRM',
    cat: 'Outbound',
    blurb: 'Ouvre le CRM & Outbound : pipeline, prospects et séquences email personnalisées.',
    tint: '#d98c17',
    dept: 'Growth',
  },
  {
    id: 'measure',
    name: 'Ada',
    role: 'Agent Mesure · Analytics',
    cat: 'Mesure',
    blurb: 'Ouvre Analytics business : CAC, LTV, ROI et croissance expliqués par l’IA.',
    tint: '#0e9b6a',
    dept: 'Engineering',
  },
  {
    id: 'revenue',
    name: 'Fin',
    role: 'Agent Revenu · Finance',
    cat: 'Revenus',
    blurb: 'Ouvre Finance & Compta : import CSV, trésorerie, TVA, prévisions. Et crée ton offre.',
    tint: '#e0483f',
    dept: 'Finance',
  },
  {
    id: 'credit',
    name: 'Cleo',
    role: 'Agent Crédit · recharge',
    cat: 'Crédits',
    blurb: 'Gère tes crédits : recharge dans ta monnaie, sans aucune crypto visible.',
    tint: '#0e9bb5',
    dept: 'Finance',
  },
  {
    id: 'config',
    name: 'Cody',
    role: 'Agent Config · secrets',
    cat: 'Config',
    blurb: 'Garde tes variables d’environnement chiffrées et les interrupteurs de sécurité.',
    tint: '#5b6472',
    dept: 'Ops',
  },
]

export const ROLE_BY_ID: Record<string, RoleAgent> = Object.fromEntries(ROLE_AGENTS.map((r) => [r.id, r]))

/** Order of the roles as seated in the dojo (also the roster order). */
export const ROLE_IDS: string[] = ROLE_AGENTS.map((r) => r.id)
