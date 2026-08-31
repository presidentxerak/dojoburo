// ---------------------------------------------------------------------------
// DojoBuro · Agent roster
// Every agent has a real function inside a startup, a set of skills and a
// department. A skill's price is what one invocation costs in credits.
//
// Three "skills" used to be bolted onto every single agent — an XRPL wallet, an
// x402 payment and an on-ledger fingerprint — from when the app settled work on
// a ledger. That rail was removed, but the skills stayed, so the landing page
// still advertised every teammate as able to manage a crypto wallet. They are
// gone, along with the ledger wording everywhere else.
// ---------------------------------------------------------------------------

export type SkillKind = 'action' | 'analysis'

export type Department =
  | 'Leadership'
  | 'Engineering'
  | 'Finance'
  | 'Growth'
  | 'Product'
  | 'People'
  | 'Ops'

export interface AgentSkill {
  id: string
  name: string
  description: string
  kind: SkillKind
  /** Price in credits for one invocation. 0 = free. */
  price: number
  /** Rough duration of the animated "working" state, in ms. */
  duration: number
}

export interface AgentDef {
  id: string
  name: string
  role: string
  department: Department
  /** Short mission statement shown in the agent panel. */
  mission: string
  skills: AgentSkill[]
}


export const AGENTS: AgentDef[] = [
  {
    id: 'ava',
    name: 'Ava',
    role: 'CEO · Team lead',
    department: 'Leadership',
    mission:
      'Sets the vision, prioritizes the roadmap and directs the other agents. Runs the team rituals and arbitrates the budget.',
    skills: [
      {
        id: 'ava.standup',
        name: 'Daily standup',
        description: 'Rallies the team: each agent plays a micro-task and reports its status.',
        kind: 'action',
        price: 0,
        duration: 3800,
      },
      {
        id: 'ava.okr',
        name: 'Set the OKRs',
        description: 'Generates the quarterly objectives and splits them across departments.',
        kind: 'analysis',
        price: 0,
        duration: 3000,
      },
      {
        id: 'ava.fund',
        name: 'Allocate budget',
        description: 'Moves budget from the company pot to a department, and records where it went.',
        kind: 'action',
        price: 0.5,
        duration: 3400,
      },
    ],
  },
  {
    id: 'rex',
    name: 'Rex',
    role: 'CTO · Engineering',
    department: 'Engineering',
    mission: 'Designs the architecture, writes and reviews code, keeps technical debt under control.',
    skills: [
      {
        id: 'rex.ship',
        name: 'Ship a feature',
        description: 'Implements then "deploys" a product increment. Emits a build artifact.',
        kind: 'action',
        price: 0,
        duration: 4200,
      },
      {
        id: 'rex.review',
        name: 'Code review',
        description: 'Analyzes a diff, surfaces bugs and suggests simplifications.',
        kind: 'analysis',
        price: 0.2,
        duration: 3200,
      },
    ],
  },
  {
    id: 'otto',
    name: 'Otto',
    role: 'DevOps · Infrastructure',
    department: 'Ops',
    mission: 'Automates deployments, watches uptime and keeps the CI/CD pipelines green.',
    skills: [
      {
        id: 'otto.deploy',
        name: 'Deploy to prod',
        description: 'Runs a deployment, plays the health-checks and rolls back if needed.',
        kind: 'action',
        price: 0,
        duration: 3800,
      },
      {
        id: 'otto.scale',
        name: 'Scale the load',
        description: 'Adjusts resources based on simulated traffic.',
        kind: 'action',
        price: 0,
        duration: 3000,
      },
    ],
  },
  {
    id: 'fin',
    name: 'Fin',
    role: 'CFO · Treasury',
    department: 'Finance',
    mission:
      'Manages the company purse, tracks the burn rate, and reconciles what has been spent.',
    skills: [
      {
        id: 'fin.treasury',
        name: 'Open the treasury',
        description: 'Creates / tops up the startup treasury wallet and shows the consolidated balance.',
        kind: 'action',
        price: 0,
        duration: 3000,
      },
      {
        id: 'fin.payroll',
        name: 'Pay the agents',
        description: 'Works out what each teammate cost this month and reconciles it in one pass.',
        kind: 'action',
        price: 0,
        duration: 4600,
      },
      {
        id: 'fin.audit',
        name: 'Spend audit',
        description: "Fetches a wallet's account_tx history and computes inbound/outbound flows.",
        kind: 'analysis',
        price: 0,
        duration: 3200,
      },
    ],
  },
  {
    id: 'mia',
    name: 'Mia',
    role: 'CMO · Marketing',
    department: 'Growth',
    mission: 'Builds the brand, launches campaigns and feeds the top of the funnel.',
    skills: [
      {
        id: 'mia.campaign',
        name: 'Launch a campaign',
        description: 'Writes an angle, a hook and a multi-channel distribution plan.',
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'mia.brand',
        name: 'Brand audit',
        description: 'Assesses brand consistency and proposes adjustments.',
        kind: 'analysis',
        price: 0.15,
        duration: 3000,
      },
    ],
  },
  {
    id: 'sol',
    name: 'Sol',
    role: 'Head of Sales · Revenue',
    department: 'Growth',
    mission: 'Qualifies leads, runs demos and closes contracts.',
    skills: [
      {
        id: 'sol.close',
        name: 'Close a deal',
        description: 'Moves an opportunity through the pipeline to signature.',
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'sol.invoice',
        name: 'Chase an invoice',
        description: 'Issues the invoice and follows it up until the client has paid.',
        kind: 'action',
        price: 0,
        duration: 3400,
      },
    ],
  },
  {
    id: 'pia',
    name: 'Pia',
    role: 'Product Manager',
    department: 'Product',
    mission: 'Turns needs into specs, prioritizes the backlog and measures impact.',
    skills: [
      {
        id: 'pia.spec',
        name: 'Write a spec',
        description: 'Turns an idea into a product spec with acceptance criteria.',
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'pia.prioritize',
        name: 'Prioritize the backlog',
        description: 'Ranks items with an impact/effort score.',
        kind: 'analysis',
        price: 0,
        duration: 2800,
      },
    ],
  },
  {
    id: 'dex',
    name: 'Dex',
    role: 'Lead Designer · UX/UI',
    department: 'Product',
    mission: 'Draws the flows, the mockups and a pixel-perfect design system.',
    skills: [
      {
        id: 'dex.mockup',
        name: 'Produce a mockup',
        description: 'Generates a key screen and its state variants.',
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'dex.system',
        name: 'Design system',
        description: 'Formalizes tokens, components and accessibility rules.',
        kind: 'analysis',
        price: 0.15,
        duration: 3000,
      },
    ],
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'Data Analyst',
    department: 'Engineering',
    mission: 'Instruments metrics, builds dashboards and detects signals.',
    skills: [
      {
        id: 'ada.report',
        name: 'Weekly report',
        description: 'Compiles KPIs (activation, retention, MRR) and highlights trends.',
        kind: 'analysis',
        price: 0,
        duration: 3400,
      },
      {
        id: 'ada.spend',
        name: 'Spend analysis',
        description: "Adds up what every teammate has spent, to show where the money actually goes.",
        kind: 'action',
        price: 0,
        duration: 3200,
      },
    ],
  },
  {
    id: 'hana',
    name: 'Hana',
    role: 'People Ops · HR',
    department: 'People',
    mission: "Recruits, onboards and looks after the agent team's morale.",
    skills: [
      {
        id: 'hana.hire',
        name: 'Recruit an agent',
        description: 'Opens a role, screens profiles and makes an offer.',
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'hana.morale',
        name: 'Morale boost',
        description: 'Lifts the whole team mood (every face starts smiling).',
        kind: 'action',
        price: 0,
        duration: 3000,
      },
    ],
  },
  {
    id: 'sam',
    name: 'Sam',
    role: 'Customer Support',
    department: 'Ops',
    mission: 'Answers tickets, resolves incidents and surfaces product pain points.',
    skills: [
      {
        id: 'sam.ticket',
        name: 'Handle a ticket',
        description: 'Picks up a ticket, diagnoses and replies to the customer.',
        kind: 'action',
        price: 0,
        duration: 3000,
      },
      {
        id: 'sam.csat',
        name: 'Measure CSAT',
        description: 'Computes satisfaction and proposes improvements.',
        kind: 'analysis',
        price: 0,
        duration: 2600,
      },
    ],
  },
  {
    id: 'lex',
    name: 'Lex',
    role: 'Legal & Compliance',
    department: 'Leadership',
    mission: 'Drafts contracts, checks compliance and secures on-chain payments.',
    skills: [
      {
        id: 'lex.contract',
        name: 'Draft a contract',
        description: 'Produces a standard contract and its key clauses.',
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'lex.compliance',
        name: 'Compliance check',
        description: 'Verifies that an action follows the company\'s own rules before it runs.',
        kind: 'analysis',
        price: 0,
        duration: 3000,
      },
    ],
  },
]

export const AGENT_BY_ID = Object.fromEntries(AGENTS.map((a) => [a.id, a])) as Record<string, AgentDef>

/** A distinct vivid accent colour per built-in agent (hues spread evenly). */
export const AGENT_COLOR_BY_ID: Record<string, string> = Object.fromEntries(
  AGENTS.map((a, i) => [a.id, `hsl(${Math.round((i * 360) / AGENTS.length)}, 70%, 55%)`]),
)
export function agentColor(id: string): string {
  return AGENT_COLOR_BY_ID[id] ?? 'hsl(210, 70%, 55%)'
}

export const DEPARTMENTS: Department[] = [
  'Leadership',
  'Engineering',
  'Finance',
  'Growth',
  'Product',
  'People',
  'Ops',
]
