// ---------------------------------------------------------------------------
// DojoBuro — tool connectors.
//
// Each agent function (department) can "branch" real external tools. A user
// creating an agent picks its function, then connects the tools that function
// needs (Gmail, Notion, GitHub, …). Connecting = an OAuth handshake whose token
// is stored encrypted server-side (the vault, never in the browser). At run
// time, the connected tool is exposed to Claude as a remote MCP server, so the
// agent does REAL work in the user's own Notion / GitHub / Gmail / …
//
// This registry is the single source of truth for:
//   * the "Connect a tool" UI on each agent card (filtered by department),
//   * the operator .env / config table (docs/CONNECTORS.md),
//   * the server-side OAuth + MCP config (api/_lib/connectors.ts mirrors ids).
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export type ConnectorAuth = 'oauth' | 'token'

export interface ConnectorEnv {
  /** env var the OPERATOR sets in Vercel (never a VITE_ / browser var) */
  name: string
  /** what it is / where it comes from */
  note: string
  /** where to obtain it */
  link: string
}

export interface Connector {
  id: string
  label: string
  emoji: string
  provider: string
  /** what an agent of this function actually does with the tool */
  blurb: string
  /** which agent functions offer this connector */
  functions: Department[]
  auth: ConnectorAuth
  /** developer console / token page the operator uses to set it up */
  docsUrl: string
  /** server env the operator must provide to enable the connector */
  env: ConnectorEnv[]
}

const oauthEnv = (idp: string, console: string, consoleLink: string): ConnectorEnv[] => [
  { name: `${idp}_CLIENT_ID`, note: `OAuth client id (${console})`, link: consoleLink },
  { name: `${idp}_CLIENT_SECRET`, note: `OAuth client secret (${console})`, link: consoleLink },
]

export const CONNECTORS: Connector[] = [
  {
    id: 'notion',
    label: 'Notion',
    emoji: '📓',
    provider: 'Notion',
    blurb: 'Create pages & databases — PRDs, roadmaps, meeting notes — in your workspace.',
    functions: ['Product', 'Leadership', 'Ops'],
    auth: 'oauth',
    docsUrl: 'https://www.notion.so/my-integrations',
    env: oauthEnv('NOTION', 'Notion integrations', 'https://www.notion.so/my-integrations'),
  },
  {
    id: 'github',
    label: 'GitHub',
    emoji: '🐙',
    provider: 'GitHub',
    blurb: 'Open pull requests, push code, file & triage issues in your repositories.',
    functions: ['Engineering', 'Product'],
    auth: 'oauth',
    docsUrl: 'https://github.com/settings/developers',
    env: oauthEnv('GITHUB', 'GitHub OAuth apps', 'https://github.com/settings/developers'),
  },
  {
    id: 'gmail',
    label: 'Gmail',
    emoji: '✉️',
    provider: 'Google',
    blurb: 'Draft and send outreach, follow-ups and campaign emails from your inbox.',
    functions: ['Growth', 'People'],
    auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [
      ...oauthEnv('GOOGLE', 'Google Cloud credentials', 'https://console.cloud.google.com/apis/credentials'),
      { name: 'GMAIL_MCP_URL', note: 'Remote MCP endpoint for Gmail (hosted MCP or a hub like Composio/Zapier)', link: 'https://composio.dev' },
    ],
  },
  {
    id: 'gdrive',
    label: 'Google Drive',
    emoji: '🗂️',
    provider: 'Google',
    blurb: 'Read briefs and write docs / sheets deliverables to your Drive.',
    functions: ['Product', 'Ops', 'Leadership'],
    auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [
      ...oauthEnv('GOOGLE', 'Google Cloud credentials (shared with Gmail)', 'https://console.cloud.google.com/apis/credentials'),
      { name: 'GDRIVE_MCP_URL', note: 'Remote MCP endpoint for Google Drive', link: 'https://composio.dev' },
    ],
  },
  {
    id: 'slack',
    label: 'Slack',
    emoji: '💬',
    provider: 'Slack',
    blurb: 'Post updates, gather feedback and run team rituals in your channels.',
    functions: ['People', 'Ops', 'Leadership'],
    auth: 'oauth',
    docsUrl: 'https://api.slack.com/apps',
    env: oauthEnv('SLACK', 'Slack apps', 'https://api.slack.com/apps'),
  },
  {
    id: 'linear',
    label: 'Linear',
    emoji: '📐',
    provider: 'Linear',
    blurb: 'Create issues, groom the backlog and move tickets through the cycle.',
    functions: ['Product', 'Engineering'],
    auth: 'oauth',
    docsUrl: 'https://linear.app/settings/api/applications/new',
    env: oauthEnv('LINEAR', 'Linear OAuth applications', 'https://linear.app/settings/api/applications/new'),
  },
  {
    id: 'stripe',
    label: 'Stripe',
    emoji: '💳',
    provider: 'Stripe',
    blurb: 'Create products & prices, send invoices and read revenue for the startup.',
    functions: ['Finance', 'Growth'],
    auth: 'oauth',
    docsUrl: 'https://dashboard.stripe.com/settings/connect',
    env: [
      { name: 'STRIPE_MCP_URL', note: 'Stripe remote MCP endpoint (default https://mcp.stripe.com)', link: 'https://docs.stripe.com/mcp' },
      { name: 'STRIPE_CONNECT_CLIENT_ID', note: 'Stripe Connect OAuth client id', link: 'https://dashboard.stripe.com/settings/connect' },
    ],
  },
  {
    id: 'figma',
    label: 'Figma',
    emoji: '🎨',
    provider: 'Figma',
    blurb: 'Push generated design tokens & frames, or read a file for a redesign.',
    functions: ['Product'],
    auth: 'oauth',
    docsUrl: 'https://www.figma.com/developers/api#oauth2',
    env: oauthEnv('FIGMA', 'Figma OAuth apps', 'https://www.figma.com/developers/api#oauth2'),
  },
]

export const CONNECTOR_BY_ID: Record<string, Connector> = Object.fromEntries(CONNECTORS.map((c) => [c.id, c]))

/** Connectors offered to an agent of a given function. */
export function connectorsForFunction(fn: Department): Connector[] {
  return CONNECTORS.filter((c) => c.functions.includes(fn))
}

// ---------------------------------------------------------------------------
// Built-in engines — real capabilities that need NO external OAuth. They run on
// Claude directly (server-side), so they work the moment ANTHROPIC_API_KEY is
// set. "Claude Design" is the design engine for the Product/Design function.
// ---------------------------------------------------------------------------
export interface WorkTask {
  id: string
  label: string
  emoji: string
  /** short description of the deliverable */
  blurb: string
  /** x402 price in XRP for a real run (settled on Mainnet) */
  priceXrp: number
  /** rendered format of the deliverable */
  format: 'design-system' | 'markdown'
  /** connector ids that, if connected, let the agent also act in the tool */
  usesConnectors?: string[]
}

/** Real Claude-powered deliverables per function. Keyed by department. */
export const WORK_TASKS: Record<Department, WorkTask[]> = {
  Product: [
    { id: 'design-system', label: 'Claude Design — Design system', emoji: '🎨', blurb: 'A real design system: tokens, palette, type scale, components & a11y rules.', priceXrp: 0.4, format: 'design-system', usesConnectors: ['figma'] },
    { id: 'prd', label: 'Write a PRD', emoji: '📄', blurb: 'A product requirements doc with goals, scope and acceptance criteria.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['notion', 'linear'] },
  ],
  Engineering: [
    { id: 'tech-spec', label: 'Technical design doc', emoji: '🛠️', blurb: 'Architecture, data model, API surface and a delivery plan.', priceXrp: 0.3, format: 'markdown', usesConnectors: ['github', 'linear'] },
    { id: 'code-review', label: 'Code review checklist', emoji: '🔍', blurb: 'A concrete review of a described change: risks, bugs, simplifications.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['github'] },
  ],
  Growth: [
    { id: 'campaign', label: 'Go-to-market campaign', emoji: '📣', blurb: 'Positioning, channels, a content calendar and email copy.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['gmail'] },
  ],
  Finance: [
    { id: 'model', label: 'Financial model & runway', emoji: '📈', blurb: 'A simple revenue/cost model, runway and the key metrics to watch.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['stripe'] },
  ],
  Leadership: [
    { id: 'strategy', label: 'Strategy & OKRs', emoji: '🧭', blurb: 'Vision, quarterly OKRs and a prioritized roadmap.', priceXrp: 0.3, format: 'markdown', usesConnectors: ['notion'] },
  ],
  People: [
    { id: 'jd', label: 'Job description & scorecard', emoji: '🧑‍💼', blurb: 'A role JD, an interview scorecard and an onboarding plan.', priceXrp: 0.15, format: 'markdown', usesConnectors: ['slack'] },
  ],
  Ops: [
    { id: 'runbook', label: 'Ops runbook', emoji: '📊', blurb: 'A runbook: monitoring, on-call, incident steps and SLOs.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['slack', 'gdrive'] },
  ],
}

export function tasksForFunction(fn: Department): WorkTask[] {
  return WORK_TASKS[fn] ?? []
}

export function workTaskById(id: string): WorkTask | undefined {
  for (const list of Object.values(WORK_TASKS)) {
    const t = list.find((x) => x.id === id)
    if (t) return t
  }
  return undefined
}
