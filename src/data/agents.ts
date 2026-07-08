// ---------------------------------------------------------------------------
// DojoBuro · Agent roster
// Every agent has a real function inside a startup, a set of skills and a
// department. Skills marked with a price are settled on the XRP Ledger
// (x402-style agentic payments).
// ---------------------------------------------------------------------------

export type SkillKind = 'action' | 'xrpl' | 'analysis'

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
  /** Price in XRP for an x402-style agentic invocation. 0 = free. */
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

// Shared XRPL skills every agent can run (wallet, payments, tracking).
const xrplSkills = (idp: string): AgentSkill[] => [
  {
    id: `${idp}.wallet`,
    name: 'XRPL wallet',
    description:
      "Create / inspect the agent's XRPL wallet, show its balance and r-address. On Testnet, top it up from the faucet.",
    kind: 'xrpl',
    price: 0,
    duration: 2600,
  },
  {
    id: `${idp}.pay`,
    name: 'Agentic payment (x402)',
    description:
      'Settle a service between agents on the XRP Ledger. The payment carries an x402 memo (skill, invoice) and is signed + submitted on-ledger.',
    kind: 'xrpl',
    price: 0,
    duration: 3200,
  },
  {
    id: `${idp}.track`,
    name: 'Track behavior',
    description:
      "Anchor the agent's action fingerprint (memo hash) on-ledger, making its behavior auditable.",
    kind: 'xrpl',
    price: 0,
    duration: 2400,
  },
]

export const AGENTS: AgentDef[] = [
  {
    id: 'ava',
    name: 'Ava',
    role: 'CEO · Orchestrator',
    department: 'Leadership',
    mission:
      'Sets the vision, prioritizes the roadmap and orchestrates the other agents. Runs the team rituals and arbitrates the budget.',
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
        description: 'Sends an XRP allocation from the treasury to a department (on-ledger payment).',
        kind: 'xrpl',
        price: 0.5,
        duration: 3400,
      },
      ...xrplSkills('ava'),
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
      ...xrplSkills('rex'),
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
      ...xrplSkills('otto'),
    ],
  },
  {
    id: 'fin',
    name: 'Fin',
    role: 'CFO · Treasury',
    department: 'Finance',
    mission:
      'Manages the XRPL treasury, tracks the burn rate, executes and reconciles agentic payments.',
    skills: [
      {
        id: 'fin.treasury',
        name: 'Open the treasury',
        description: 'Creates / tops up the startup treasury wallet and shows the consolidated balance.',
        kind: 'xrpl',
        price: 0,
        duration: 3000,
      },
      {
        id: 'fin.payroll',
        name: 'Pay the agents',
        description: 'Distributes an XRP payroll to every agent from the treasury, in one on-ledger batch.',
        kind: 'xrpl',
        price: 0,
        duration: 4600,
      },
      {
        id: 'fin.audit',
        name: 'On-ledger audit',
        description: "Fetches a wallet's account_tx history and computes inbound/outbound flows.",
        kind: 'analysis',
        price: 0,
        duration: 3200,
      },
      ...xrplSkills('fin'),
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
      ...xrplSkills('mia'),
    ],
  },
  {
    id: 'sol',
    name: 'Sol',
    role: 'Head of Sales · Revenue',
    department: 'Growth',
    mission: 'Qualifies leads, runs demos and closes contracts. Gets paid in XRP.',
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
        name: 'Get paid (x402)',
        description: 'Issues an x402 invoice and receives a client settlement on the XRP Ledger.',
        kind: 'xrpl',
        price: 0,
        duration: 3400,
      },
      ...xrplSkills('sol'),
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
      ...xrplSkills('pia'),
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
      ...xrplSkills('dex'),
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
        id: 'ada.ledger',
        name: 'On-ledger analysis',
        description: "Aggregates the agents' XRPL transactions to measure internal economic activity.",
        kind: 'xrpl',
        price: 0,
        duration: 3200,
      },
      ...xrplSkills('ada'),
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
      ...xrplSkills('hana'),
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
      ...xrplSkills('sam'),
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
        description: 'Verifies that an action (including an XRPL payment) follows the internal rules.',
        kind: 'analysis',
        price: 0,
        duration: 3000,
      },
      ...xrplSkills('lex'),
    ],
  },
]

export const AGENT_BY_ID = Object.fromEntries(AGENTS.map((a) => [a.id, a])) as Record<string, AgentDef>

export const DEPARTMENTS: Department[] = [
  'Leadership',
  'Engineering',
  'Finance',
  'Growth',
  'Product',
  'People',
  'Ops',
]
