// Per-connector setup guides. Each connector gets a dedicated page at
// /guide/<id> with precise, step-by-step instructions. The generic flow is
// derived from the connector's own fields (auth, env, provider, docsUrl); a
// per-provider notes map layers the specifics that actually matter (which
// scopes to grant, whether an MCP hub is needed, common gotchas).
import type { Connector } from './connectors'
import { CONNECTOR_BY_ID } from './connectors'

export interface ConnectorNotes {
  /** least-privilege scopes/permissions to grant in the provider console */
  scopes?: string
  /** guidance on the remote MCP endpoint this app needs (if any) */
  mcp?: string
  /** provider-specific gotcha worth calling out */
  gotcha?: string
  /** what the user gets to do once it is connected (beyond the blurb) */
  does?: string
}

// The redirect URI every OAuth connector must whitelist in its console.
export const REDIRECT_PATH = '/api/connect'

// Specifics for the connectors people set up most. Everything not listed here
// still gets a precise generic guide built from its registry fields.
export const CONNECTOR_NOTES: Record<string, ConnectorNotes> = {
  notion: {
    scopes: 'In the integration capabilities, enable Read content, Insert content and Update content. Then share the specific pages/databases with the integration from the "..." menu in Notion.',
    gotcha: 'Notion integrations only see pages you explicitly share with them · connect the integration to a parent page so the agent can create children there.',
    does: 'Create PRDs, roadmaps and meeting notes as real Notion pages and databases.',
  },
  github: {
    scopes: 'Grant repo (or the fine-grained "Contents: read/write" + "Pull requests: read/write" + "Issues: read/write") for the repositories the agent should touch. Avoid admin and delete scopes.',
    gotcha: 'Prefer a fine-grained OAuth app scoped to the exact repos rather than a classic token with blanket access.',
    does: 'Open pull requests, push commits, and file or triage issues in the repos you allow.',
  },
  gmail: {
    scopes: 'Enable the Gmail API, then request gmail.compose (draft) and gmail.send only if the agent should actually send. Add your address as a test user while the consent screen is unverified.',
    mcp: 'Gmail has no first-party MCP server · set GMAIL_MCP_URL to a hosted hub (Composio / Zapier / Pipedream) that exposes Gmail as MCP tools.',
    does: 'Draft and send outreach, follow-ups and campaign emails from your own inbox.',
  },
  gdrive: {
    scopes: 'Enable the Drive API and request drive.file (per-file access the app creates) rather than full drive access when possible.',
    mcp: 'Set GDRIVE_MCP_URL to a hosted MCP hub exposing Drive.',
    does: 'Read briefs and write real docs / sheets deliverables into your Drive.',
  },
  gcal: {
    scopes: 'Enable the Calendar API and request calendar.events (read/write events) · not full calendar management unless needed.',
    mcp: 'Set GCAL_MCP_URL to a hosted MCP hub exposing Calendar.',
    does: 'Read the diary, schedule meetings and send invites.',
  },
  gclassroom: {
    scopes: 'Enable the Classroom API and request the courses / coursework scopes for the classes you manage. Google will require verification for classroom scopes in production.',
    mcp: 'Set GCLASSROOM_MCP_URL to a hosted MCP hub exposing Classroom.',
    does: 'Manage courses, post assignments and read rosters for a class.',
  },
  slack: {
    scopes: 'Add bot scopes chat:write and channels:read (plus channels:history only if the agent must read threads). Install the app to your workspace and invite the bot to the channels it should post in.',
    mcp: 'If you are not using a first-party Slack MCP, set SLACK_MCP_URL to a hub that exposes Slack.',
    does: 'Post updates, gather feedback and run team rituals in your channels.',
  },
  stripe: {
    scopes: 'Use a restricted key limited to Products, Prices, Invoices and read-only Balance · never your full secret key. Stripe ships a first-party MCP server.',
    mcp: 'STRIPE_MCP_URL defaults to https://mcp.stripe.com. Set STRIPE_CONNECT_CLIENT_ID only if you onboard other accounts via Stripe Connect.',
    does: 'Create products and prices, send invoices and read revenue.',
  },
  linear: {
    scopes: 'Create an OAuth application and grant read + write (issues:create). Actor should be the app so created issues are attributed correctly.',
    does: 'Create issues, groom the backlog and move tickets through the cycle.',
  },
  jira: {
    scopes: 'In the Atlassian developer console, add Jira platform REST scopes read:jira-work and write:jira-work. Set the callback URL to your site.',
    mcp: 'Set JIRA_MCP_URL to a hub exposing Jira if you are not using a first-party server.',
    does: 'Create and move issues, plan sprints and track the board.',
  },
  airtable: {
    scopes: 'Airtable uses OAuth with PKCE (no client secret). Grant data.records:read and data.records:write for the bases the agent uses.',
    gotcha: 'PKCE means there is no client secret to set · only AIRTABLE_CLIENT_ID plus the redirect.',
    does: 'Read and write structured records · CRMs, trackers, datasets.',
  },
  hubspot: {
    scopes: 'Grant crm.objects.contacts and crm.objects.deals read/write scopes. Install the app to your HubSpot account.',
    mcp: 'Set HUBSPOT_MCP_URL to a hub exposing HubSpot if needed.',
    does: 'Work the CRM · contacts, deals, pipelines and notes.',
  },
  salesforce: {
    scopes: 'Create a Connected App with OAuth, enable the api and refresh_token scopes, and set the callback URL to your site.',
    mcp: 'Set SALESFORCE_MCP_URL to a hub exposing Salesforce.',
    does: 'Work leads, accounts and opportunities in the CRM.',
  },
  twitter: {
    scopes: 'X uses OAuth 2.0 with PKCE. Request tweet.read, tweet.write and users.read. Set the callback URL in the developer portal.',
    gotcha: 'PKCE · no client secret. Posting requires an eligible developer plan.',
    does: 'Draft and publish posts, threads and replies.',
  },
  canva: {
    scopes: 'Canva uses OAuth with PKCE. Grant the design:content:write scope for the agent to create designs.',
    does: 'Generate on-brand graphics, social visuals and one-pagers.',
  },
  figma: {
    scopes: 'Grant file_read (and file_write where available) for the design token / frame work.',
    does: 'Push generated design tokens and frames, or read a file for a redesign.',
  },
  trello: {
    scopes: 'Trello uses an API key + token (not OAuth). Generate the key in the power-ups admin and a token scoped to the boards the agent manages.',
    mcp: 'Set TRELLO_MCP_URL to a hub exposing Trello.',
    does: 'Add cards, move lists and keep a lightweight board in sync.',
  },
  whatsapp: {
    scopes: 'Create a Meta app with WhatsApp Business, add the whatsapp_business_messaging permission and register the phone number. Business verification is required for production sending.',
    mcp: 'Set WHATSAPP_MCP_URL to a hub exposing the WhatsApp Business API.',
    does: 'Send templated messages and follow up with clients on WhatsApp.',
  },
}

export interface GuideStep { n: number; title: string; body: string }

/** The one-click steps for an end user, once the operator has wired the app. */
export function userSteps(c: Connector): GuideStep[] {
  const notes = CONNECTOR_NOTES[c.id]
  return [
    { n: 1, title: 'Open the agent', body: `Click an agent in the office to open its card, or open Dojo Studio and select the agent. ${c.label} appears under "Connect apps" for functions that use it (${c.functions.join(', ')}).` },
    { n: 2, title: 'Click Connect', body: `Hit Connect next to ${c.label} and approve the ${c.provider} screen once. You never type a password into DojoBuro · authorization happens on ${c.provider}'s own page.` },
    { n: 3, title: 'The agent can now act', body: `${notes?.does || c.blurb} The token is sealed server-side (AES-256-GCM); the browser never sees a secret. Disconnect anytime from the same panel or revoke it in ${c.provider}'s settings.` },
  ]
}

/** The one-time operator steps to enable the connector for everyone. */
export function operatorSteps(c: Connector): GuideStep[] {
  const notes = CONNECTOR_NOTES[c.id]
  const isOauth = c.auth === 'oauth'
  const steps: GuideStep[] = []
  steps.push({
    n: 1,
    title: `Create the app in the ${c.provider} console`,
    body: `Open the ${c.provider} developer console and register a new ${isOauth ? 'OAuth app' : 'app / API token'}.`,
  })
  if (isOauth) {
    steps.push({
      n: 2,
      title: 'Set the redirect URI',
      body: `Add https://your-site${REDIRECT_PATH} as an authorized redirect / callback URL. It must match exactly, including https.`,
    })
  }
  steps.push({
    n: steps.length + 1,
    title: 'Choose least-privilege scopes',
    body: notes?.scopes || `Grant only the read/write scopes the agent's tasks need · nothing more. Skip admin, billing or delete scopes you will not use.`,
  })
  const envList = c.env.map((e) => `${e.name} (${e.note})`).join('; ')
  steps.push({
    n: steps.length + 1,
    title: 'Add the keys to your environment',
    body: `Set these server-side env vars (never VITE_ / browser vars): ${envList}. Then redeploy.`,
  })
  if (notes?.mcp) {
    steps.push({ n: steps.length + 1, title: 'Point the MCP endpoint', body: notes.mcp })
  }
  steps.push({
    n: steps.length + 1,
    title: 'Verify it went live',
    body: `Once the env is set and the worker is deployed (DATABASE_URL + CONNECTOR_ENC_KEY), ${c.label} shows a Connect button instead of "Set up". Click it to run the OAuth flow end-to-end.`,
  })
  return steps
}

export function connectorById(id: string): Connector | undefined {
  return CONNECTOR_BY_ID[id]
}
