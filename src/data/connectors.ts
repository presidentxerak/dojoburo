// ---------------------------------------------------------------------------
// DojoBuro · tool connectors.
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

export type ConnectorCategory = 'Docs & Notes' | 'Dev' | 'Comms' | 'CRM & Sales' | 'Marketing & Social' | 'Design' | 'Finance' | 'Scheduling' | 'Support' | 'Storage & Legal'

export interface Connector {
  id: string
  label: string
  provider: string
  /** what an agent of this function actually does with the tool */
  blurb: string
  /** which agent functions offer this connector */
  functions: Department[]
  /** grouping for the tool gallery */
  category: ConnectorCategory
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
const hubEnv = (idp: string): ConnectorEnv => ({ name: `${idp}_MCP_URL`, note: 'Remote MCP endpoint (hosted MCP or a hub like Composio / Zapier / Pipedream)', link: 'https://composio.dev' })

export const CONNECTORS: Connector[] = [
  {
    id: 'notion', label: 'Notion', provider: 'Notion', category: 'Docs & Notes',
    blurb: 'Create pages & databases · PRDs, roadmaps, meeting notes · in your workspace.',
    functions: ['Product', 'Leadership', 'Ops'], auth: 'oauth',
    docsUrl: 'https://www.notion.so/my-integrations',
    env: oauthEnv('NOTION', 'Notion integrations', 'https://www.notion.so/my-integrations'),
  },
  {
    id: 'github', label: 'GitHub', provider: 'GitHub', category: 'Dev',
    blurb: 'Open pull requests, push code, file & triage issues in your repositories.',
    functions: ['Engineering', 'Product'], auth: 'oauth',
    docsUrl: 'https://github.com/settings/developers',
    env: oauthEnv('GITHUB', 'GitHub OAuth apps', 'https://github.com/settings/developers'),
  },
  {
    id: 'claude-code', label: 'Claude Code', provider: 'Anthropic', category: 'Dev',
    blurb: 'Delegate real coding to a headless Claude Code agent · edits your repo, runs commands, opens PRs.',
    functions: ['Engineering', 'Product'], auth: 'token',
    docsUrl: 'https://docs.claude.com/en/docs/claude-code',
    env: [
      { name: 'ANTHROPIC_API_KEY', note: 'Anthropic API key that runs the Claude Code / Agent SDK session', link: 'https://console.anthropic.com/settings/keys' },
      { name: 'CLAUDE_CODE_WORKDIR', note: 'Optional working directory / repo path the agent operates in', link: 'https://docs.claude.com/en/docs/claude-code' },
    ],
  },
  {
    id: 'gmail', label: 'Gmail', provider: 'Google', category: 'Comms',
    blurb: 'Draft and send outreach, follow-ups and campaign emails from your inbox.',
    functions: ['Growth', 'People'], auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [...oauthEnv('GOOGLE', 'Google Cloud credentials', 'https://console.cloud.google.com/apis/credentials'), hubEnv('GMAIL')],
  },
  {
    id: 'gdrive', label: 'Google Drive', provider: 'Google', category: 'Storage & Legal',
    blurb: 'Read briefs and write docs / sheets deliverables to your Drive.',
    functions: ['Product', 'Ops', 'Leadership'], auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [...oauthEnv('GOOGLE', 'Google Cloud credentials (shared with Gmail)', 'https://console.cloud.google.com/apis/credentials'), hubEnv('GDRIVE')],
  },
  {
    id: 'gcal', label: 'Google Calendar', provider: 'Google', category: 'Scheduling',
    blurb: 'Read the diary, schedule meetings and send invites.',
    functions: ['Ops', 'People', 'Leadership'], auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [...oauthEnv('GOOGLE', 'Google Cloud credentials (shared with Gmail)', 'https://console.cloud.google.com/apis/credentials'), hubEnv('GCAL')],
  },
  {
    id: 'slack', label: 'Slack', provider: 'Slack', category: 'Comms',
    blurb: 'Post updates, gather feedback and run team rituals in your channels.',
    functions: ['People', 'Ops', 'Leadership'], auth: 'oauth',
    docsUrl: 'https://api.slack.com/apps',
    env: [...oauthEnv('SLACK', 'Slack apps', 'https://api.slack.com/apps'), hubEnv('SLACK')],
  },
  {
    id: 'discord', label: 'Discord', provider: 'Discord', category: 'Comms',
    blurb: 'Post announcements, run a devlog and moderate your community server.',
    functions: ['Growth', 'People'], auth: 'oauth',
    docsUrl: 'https://discord.com/developers/applications',
    env: [...oauthEnv('DISCORD', 'Discord developer apps', 'https://discord.com/developers/applications'), hubEnv('DISCORD')],
  },
  {
    id: 'zoom', label: 'Zoom', provider: 'Zoom', category: 'Comms',
    blurb: 'Schedule calls, pull recordings and summarize meetings.',
    functions: ['Ops', 'People', 'Leadership'], auth: 'oauth',
    docsUrl: 'https://marketplace.zoom.us/develop/create',
    env: [...oauthEnv('ZOOM', 'Zoom Marketplace app', 'https://marketplace.zoom.us/develop/create'), hubEnv('ZOOM')],
  },
  {
    id: 'linear', label: 'Linear', provider: 'Linear', category: 'Dev',
    blurb: 'Create issues, groom the backlog and move tickets through the cycle.',
    functions: ['Product', 'Engineering'], auth: 'oauth',
    docsUrl: 'https://linear.app/settings/api/applications/new',
    env: oauthEnv('LINEAR', 'Linear OAuth applications', 'https://linear.app/settings/api/applications/new'),
  },
  {
    id: 'jira', label: 'Jira', provider: 'Atlassian', category: 'Dev',
    blurb: 'Create and move issues, plan sprints and track the board.',
    functions: ['Engineering', 'Product', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developer.atlassian.com/console/myapps/',
    env: [...oauthEnv('JIRA', 'Atlassian developer console', 'https://developer.atlassian.com/console/myapps/'), hubEnv('JIRA')],
  },
  {
    id: 'trello', label: 'Trello', provider: 'Atlassian', category: 'Dev',
    blurb: 'Add cards, move lists and keep a lightweight board in sync.',
    functions: ['Product', 'Ops'], auth: 'token',
    docsUrl: 'https://trello.com/power-ups/admin',
    env: [{ name: 'TRELLO_API_KEY', note: 'Trello API key', link: 'https://trello.com/power-ups/admin' }, hubEnv('TRELLO')],
  },
  {
    id: 'asana', label: 'Asana', provider: 'Asana', category: 'Dev',
    blurb: 'Create tasks, assign work and track projects across the team.',
    functions: ['Ops', 'Product', 'Leadership'], auth: 'oauth',
    docsUrl: 'https://app.asana.com/0/my-apps',
    env: [...oauthEnv('ASANA', 'Asana developer apps', 'https://app.asana.com/0/my-apps'), hubEnv('ASANA')],
  },
  {
    id: 'airtable', label: 'Airtable', provider: 'Airtable', category: 'Docs & Notes',
    blurb: 'Read and write structured records · CRMs, trackers, datasets.',
    functions: ['Ops', 'Growth', 'Product'], auth: 'oauth',
    docsUrl: 'https://airtable.com/create/oauth',
    env: [...oauthEnv('AIRTABLE', 'Airtable OAuth', 'https://airtable.com/create/oauth'), hubEnv('AIRTABLE')],
  },
  {
    id: 'stripe', label: 'Stripe', provider: 'Stripe', category: 'Finance',
    blurb: 'Create products & prices, send invoices and read revenue for the business.',
    functions: ['Finance', 'Growth'], auth: 'oauth',
    docsUrl: 'https://dashboard.stripe.com/settings/connect',
    env: [
      { name: 'STRIPE_MCP_URL', note: 'Stripe remote MCP endpoint (default https://mcp.stripe.com)', link: 'https://docs.stripe.com/mcp' },
      { name: 'STRIPE_CONNECT_CLIENT_ID', note: 'Stripe Connect OAuth client id', link: 'https://dashboard.stripe.com/settings/connect' },
    ],
  },
  {
    id: 'quickbooks', label: 'QuickBooks', provider: 'Intuit', category: 'Finance',
    blurb: 'Post invoices, categorize expenses and pull the books.',
    functions: ['Finance', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developer.intuit.com/app/developer/dashboard',
    env: [...oauthEnv('QUICKBOOKS', 'Intuit developer dashboard', 'https://developer.intuit.com/app/developer/dashboard'), hubEnv('QUICKBOOKS')],
  },
  {
    id: 'xero', label: 'Xero', provider: 'Xero', category: 'Finance',
    blurb: 'Reconcile transactions, raise invoices and read financial reports.',
    functions: ['Finance', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developer.xero.com/app/manage',
    env: [...oauthEnv('XERO', 'Xero developer apps', 'https://developer.xero.com/app/manage'), hubEnv('XERO')],
  },
  {
    id: 'shopify', label: 'Shopify', provider: 'Shopify', category: 'CRM & Sales',
    blurb: 'Manage products, read orders and update the storefront.',
    functions: ['Growth', 'Finance', 'Product'], auth: 'oauth',
    docsUrl: 'https://partners.shopify.com/',
    env: [...oauthEnv('SHOPIFY', 'Shopify Partners app', 'https://partners.shopify.com/'), hubEnv('SHOPIFY')],
  },
  {
    id: 'hubspot', label: 'HubSpot', provider: 'HubSpot', category: 'CRM & Sales',
    blurb: 'Work the CRM · contacts, deals, pipelines and notes.',
    functions: ['Growth', 'Finance', 'People'], auth: 'oauth',
    docsUrl: 'https://developers.hubspot.com/get-started',
    env: [...oauthEnv('HUBSPOT', 'HubSpot developer apps', 'https://developers.hubspot.com/get-started'), hubEnv('HUBSPOT')],
  },
  {
    id: 'calendly', label: 'Calendly', provider: 'Calendly', category: 'Scheduling',
    blurb: 'Read availability, create booking links and confirm meetings.',
    functions: ['Growth', 'People', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developer.calendly.com/',
    env: [...oauthEnv('CALENDLY', 'Calendly developer apps', 'https://developer.calendly.com/'), hubEnv('CALENDLY')],
  },
  {
    id: 'mailchimp', label: 'Mailchimp', provider: 'Mailchimp', category: 'Marketing & Social',
    blurb: 'Build audiences, draft campaigns and send newsletters.',
    functions: ['Growth'], auth: 'oauth',
    docsUrl: 'https://mailchimp.com/developer/',
    env: [...oauthEnv('MAILCHIMP', 'Mailchimp developer apps', 'https://mailchimp.com/developer/'), hubEnv('MAILCHIMP')],
  },
  {
    id: 'twitter', label: 'X / Twitter', provider: 'X', category: 'Marketing & Social',
    blurb: 'Draft and publish posts, threads and replies to grow reach.',
    functions: ['Growth', 'People'], auth: 'oauth',
    docsUrl: 'https://developer.x.com/en/portal/dashboard',
    env: [...oauthEnv('TWITTER', 'X developer portal', 'https://developer.x.com/en/portal/dashboard'), hubEnv('TWITTER')],
  },
  {
    id: 'linkedin', label: 'LinkedIn', provider: 'LinkedIn', category: 'Marketing & Social',
    blurb: 'Publish posts and share updates on your profile or page.',
    functions: ['Growth', 'People'], auth: 'oauth',
    docsUrl: 'https://www.linkedin.com/developers/apps',
    env: [...oauthEnv('LINKEDIN', 'LinkedIn developer apps', 'https://www.linkedin.com/developers/apps'), hubEnv('LINKEDIN')],
  },
  {
    id: 'buffer', label: 'Buffer', provider: 'Buffer', category: 'Marketing & Social',
    blurb: 'Queue and schedule social posts across every channel at once.',
    functions: ['Growth'], auth: 'oauth',
    docsUrl: 'https://buffer.com/developers/apps',
    env: [...oauthEnv('BUFFER', 'Buffer developer apps', 'https://buffer.com/developers/apps'), hubEnv('BUFFER')],
  },
  {
    id: 'figma', label: 'Figma', provider: 'Figma', category: 'Design',
    blurb: 'Push generated design tokens & frames, or read a file for a redesign.',
    functions: ['Product'], auth: 'oauth',
    docsUrl: 'https://www.figma.com/developers/api#oauth2',
    env: [...oauthEnv('FIGMA', 'Figma OAuth apps', 'https://www.figma.com/developers/api#oauth2'), hubEnv('FIGMA')],
  },
  {
    id: 'canva', label: 'Canva', provider: 'Canva', category: 'Design',
    blurb: 'Generate on-brand graphics, social visuals and one-pagers.',
    functions: ['Growth', 'Product'], auth: 'oauth',
    docsUrl: 'https://www.canva.com/developers/',
    env: [...oauthEnv('CANVA', 'Canva developer apps', 'https://www.canva.com/developers/'), hubEnv('CANVA')],
  },
  {
    id: 'docusign', label: 'DocuSign', provider: 'DocuSign', category: 'Storage & Legal',
    blurb: 'Prepare envelopes, send for signature and track completion.',
    functions: ['Leadership', 'People', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developers.docusign.com/',
    env: [...oauthEnv('DOCUSIGN', 'DocuSign developer apps', 'https://developers.docusign.com/'), hubEnv('DOCUSIGN')],
  },
  {
    id: 'zendesk', label: 'Zendesk', provider: 'Zendesk', category: 'Support',
    blurb: 'Read tickets, draft replies and manage the support queue.',
    functions: ['Ops', 'People'], auth: 'oauth',
    docsUrl: 'https://developer.zendesk.com/',
    env: [...oauthEnv('ZENDESK', 'Zendesk OAuth apps', 'https://developer.zendesk.com/'), hubEnv('ZENDESK')],
  },
  {
    id: 'intercom', label: 'Intercom', provider: 'Intercom', category: 'Support',
    blurb: 'Answer conversations, tag contacts and run help workflows.',
    functions: ['Ops', 'People', 'Growth'], auth: 'oauth',
    docsUrl: 'https://developers.intercom.com/',
    env: [...oauthEnv('INTERCOM', 'Intercom developer apps', 'https://developers.intercom.com/'), hubEnv('INTERCOM')],
  },
  {
    id: 'gclassroom', label: 'Google Classroom', provider: 'Google', category: 'Docs & Notes',
    blurb: 'Manage courses, post assignments and read rosters for a class.',
    functions: ['People', 'Ops', 'Product'], auth: 'oauth',
    docsUrl: 'https://console.cloud.google.com/apis/credentials',
    env: [...oauthEnv('GOOGLE', 'Google Cloud credentials (shared with Gmail)', 'https://console.cloud.google.com/apis/credentials'), hubEnv('GCLASSROOM')],
  },
  {
    id: 'salesforce', label: 'Salesforce', provider: 'Salesforce', category: 'CRM & Sales',
    blurb: 'Work leads, accounts and opportunities in the CRM.',
    functions: ['Growth', 'Finance', 'People'], auth: 'oauth',
    docsUrl: 'https://developer.salesforce.com/',
    env: [...oauthEnv('SALESFORCE', 'Salesforce connected app', 'https://developer.salesforce.com/'), hubEnv('SALESFORCE')],
  },
  {
    id: 'whatsapp', label: 'WhatsApp Business', provider: 'Meta', category: 'Comms',
    blurb: 'Send templated messages and follow up with clients on WhatsApp.',
    functions: ['Growth', 'People', 'Ops'], auth: 'oauth',
    docsUrl: 'https://developers.facebook.com/apps',
    env: [...oauthEnv('WHATSAPP', 'Meta app (WhatsApp Business)', 'https://developers.facebook.com/apps'), hubEnv('WHATSAPP')],
  },
  {
    id: 'meta', label: 'Meta Ads', provider: 'Meta', category: 'Marketing & Social',
    blurb: 'Create, launch and manage Facebook & Instagram ad campaigns from your Meta ad account (Marketing API).',
    functions: ['Growth'], auth: 'oauth',
    docsUrl: 'https://developers.facebook.com/apps',
    env: [...oauthEnv('META', 'Meta for Developers (Marketing API app)', 'https://developers.facebook.com/apps'), hubEnv('META')],
  },
]

export const CONNECTOR_BY_ID: Record<string, Connector> = Object.fromEntries(CONNECTORS.map((c) => [c.id, c]))

/** Connectors offered to an agent of a given function. */
export function connectorsForFunction(fn: Department): Connector[] {
  return CONNECTORS.filter((c) => c.functions.includes(fn))
}

// ---------------------------------------------------------------------------
// Built-in engines · real capabilities that need NO external OAuth. They run on
// Claude directly (server-side), so they work the moment ANTHROPIC_API_KEY is
// set. "Claude Design" is the design engine for the Product/Design function.
// ---------------------------------------------------------------------------
export interface WorkTask {
  id: string
  label: string
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
    { id: 'design-system', label: 'Claude Design · Design system', blurb: 'A real design system: tokens, palette, type scale, components & a11y rules.', priceXrp: 0.4, format: 'design-system', usesConnectors: ['figma'] },
    { id: 'prd', label: 'Write a PRD', blurb: 'A product requirements doc with goals, scope and acceptance criteria.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['notion', 'linear'] },
  ],
  Engineering: [
    { id: 'tech-spec', label: 'Technical design doc', blurb: 'Architecture, data model, API surface and a delivery plan.', priceXrp: 0.3, format: 'markdown', usesConnectors: ['github', 'linear'] },
    { id: 'code-review', label: 'Code review checklist', blurb: 'A concrete review of a described change: risks, bugs, simplifications.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['github'] },
  ],
  Growth: [
    { id: 'campaign', label: 'Go-to-market campaign', blurb: 'Positioning, channels, a content calendar and email copy.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['gmail'] },
    { id: 'website', label: 'Website plan & copy', blurb: 'A ready-to-build landing page: sections, copy, CTAs and SEO.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['figma'] },
    { id: 'ads', label: 'Meta ad creatives', blurb: '5 Meta (Facebook/Instagram) ad variations with visuals, audiences and a test plan.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['meta'] },
    { id: 'outreach', label: 'Prospect list & outreach', blurb: 'An ICP, target profiles and a 3-step email sequence.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['gmail'] },
  ],
  Finance: [
    { id: 'model', label: 'Financial model & runway', blurb: 'A simple revenue/cost model, runway and the key metrics to watch.', priceXrp: 0.25, format: 'markdown', usesConnectors: ['stripe'] },
    { id: 'offer', label: 'Offer & pricing', blurb: 'A core offer, 3 pricing tiers and checkout page copy.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['stripe'] },
  ],
  Leadership: [
    { id: 'strategy', label: 'Strategy & OKRs', blurb: 'Vision, quarterly OKRs and a prioritized roadmap.', priceXrp: 0.3, format: 'markdown', usesConnectors: ['notion'] },
  ],
  People: [
    { id: 'jd', label: 'Job description & scorecard', blurb: 'A role JD, an interview scorecard and an onboarding plan.', priceXrp: 0.15, format: 'markdown', usesConnectors: ['slack'] },
  ],
  Ops: [
    { id: 'runbook', label: 'Ops runbook', blurb: 'A runbook: monitoring, on-call, incident steps and SLOs.', priceXrp: 0.2, format: 'markdown', usesConnectors: ['slack', 'gdrive'] },
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
