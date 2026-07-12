// Server-side connector configuration: OAuth endpoints + remote MCP exposure.
//
// Mirrors the ids in src/data/connectors.ts. Every URL has a sane well-known
// default and an env override (${IDP}_AUTH_URL / _TOKEN_URL / _MCP_URL) so the
// operator can adapt to provider changes or point a connector at a hosted MCP
// hub (Composio / Zapier / Pipedream) without a code change.
//
// A connector is ENABLED only when its OAuth client id + secret are present.
// Missing config → the connect endpoint reports { available:false } and the UI
// shows the tool as "set up by the operator", never breaking.

export interface OAuthConfig {
  authorizeUrl: string
  tokenUrl: string
  scope: string
  clientIdEnv: string
  clientSecretEnv: string
  /** how the token endpoint authenticates the client */
  tokenAuth: 'basic' | 'body'
  /** extra params appended to the authorize request */
  extraAuthorize?: Record<string, string>
  /** provider requires PKCE (RFC 7636); adds code_challenge + code_verifier */
  pkce?: boolean
}

export interface McpConfig {
  /** name Claude sees for the server */
  name: string
  /** resolved remote MCP endpoint (default or env override) */
  url: string | null
}

export interface ServerConnector {
  id: string
  oauth: OAuthConfig
  mcp: McpConfig
}

const env = (k: string): string | undefined => process.env[k]

function mcp(name: string, defUrl: string | null, urlEnv: string): McpConfig {
  return { name, url: env(urlEnv) || defUrl }
}

// Well-known OAuth + MCP endpoints. Client id/secret come from env; every URL
// is overridable via ${IDP}_AUTH_URL / ${IDP}_TOKEN_URL / ${IDP}_MCP_URL.
const REGISTRY: Record<string, ServerConnector> = {
  notion: {
    id: 'notion',
    oauth: {
      authorizeUrl: env('NOTION_AUTH_URL') || 'https://api.notion.com/v1/oauth/authorize',
      tokenUrl: env('NOTION_TOKEN_URL') || 'https://api.notion.com/v1/oauth/token',
      scope: '',
      clientIdEnv: 'NOTION_CLIENT_ID',
      clientSecretEnv: 'NOTION_CLIENT_SECRET',
      tokenAuth: 'basic',
      extraAuthorize: { owner: 'user' },
    },
    mcp: mcp('notion', 'https://mcp.notion.com/mcp', 'NOTION_MCP_URL'),
  },
  github: {
    id: 'github',
    oauth: {
      authorizeUrl: env('GITHUB_AUTH_URL') || 'https://github.com/login/oauth/authorize',
      tokenUrl: env('GITHUB_TOKEN_URL') || 'https://github.com/login/oauth/access_token',
      scope: env('GITHUB_SCOPE') || 'repo read:org read:user',
      clientIdEnv: 'GITHUB_CLIENT_ID',
      clientSecretEnv: 'GITHUB_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('github', 'https://api.githubcopilot.com/mcp/', 'GITHUB_MCP_URL'),
  },
  gmail: {
    id: 'gmail',
    oauth: {
      authorizeUrl: env('GOOGLE_AUTH_URL') || 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: env('GOOGLE_TOKEN_URL') || 'https://oauth2.googleapis.com/token',
      scope: env('GMAIL_SCOPE') || 'https://www.googleapis.com/auth/gmail.modify',
      clientIdEnv: 'GOOGLE_CLIENT_ID',
      clientSecretEnv: 'GOOGLE_CLIENT_SECRET',
      tokenAuth: 'body',
      extraAuthorize: { access_type: 'offline', prompt: 'consent' },
    },
    mcp: mcp('gmail', null, 'GMAIL_MCP_URL'),
  },
  gdrive: {
    id: 'gdrive',
    oauth: {
      authorizeUrl: env('GOOGLE_AUTH_URL') || 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: env('GOOGLE_TOKEN_URL') || 'https://oauth2.googleapis.com/token',
      scope: env('GDRIVE_SCOPE') || 'https://www.googleapis.com/auth/drive',
      clientIdEnv: 'GOOGLE_CLIENT_ID',
      clientSecretEnv: 'GOOGLE_CLIENT_SECRET',
      tokenAuth: 'body',
      extraAuthorize: { access_type: 'offline', prompt: 'consent' },
    },
    mcp: mcp('gdrive', null, 'GDRIVE_MCP_URL'),
  },
  slack: {
    id: 'slack',
    oauth: {
      authorizeUrl: env('SLACK_AUTH_URL') || 'https://slack.com/oauth/v2/authorize',
      tokenUrl: env('SLACK_TOKEN_URL') || 'https://slack.com/api/oauth.v2.access',
      scope: env('SLACK_SCOPE') || 'chat:write,channels:read,channels:history',
      clientIdEnv: 'SLACK_CLIENT_ID',
      clientSecretEnv: 'SLACK_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('slack', null, 'SLACK_MCP_URL'),
  },
  linear: {
    id: 'linear',
    oauth: {
      authorizeUrl: env('LINEAR_AUTH_URL') || 'https://linear.app/oauth/authorize',
      tokenUrl: env('LINEAR_TOKEN_URL') || 'https://api.linear.app/oauth/token',
      scope: env('LINEAR_SCOPE') || 'read,write',
      clientIdEnv: 'LINEAR_CLIENT_ID',
      clientSecretEnv: 'LINEAR_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('linear', 'https://mcp.linear.app/mcp', 'LINEAR_MCP_URL'),
  },
  stripe: {
    id: 'stripe',
    oauth: {
      authorizeUrl: env('STRIPE_AUTH_URL') || 'https://connect.stripe.com/oauth/authorize',
      tokenUrl: env('STRIPE_TOKEN_URL') || 'https://connect.stripe.com/oauth/token',
      scope: env('STRIPE_SCOPE') || 'read_write',
      clientIdEnv: 'STRIPE_CONNECT_CLIENT_ID',
      clientSecretEnv: 'STRIPE_SECRET_KEY', // Stripe uses the secret key as the client_secret
      tokenAuth: 'body',
    },
    mcp: mcp('stripe', 'https://mcp.stripe.com', 'STRIPE_MCP_URL'),
  },
  figma: {
    id: 'figma',
    oauth: {
      authorizeUrl: env('FIGMA_AUTH_URL') || 'https://www.figma.com/oauth',
      tokenUrl: env('FIGMA_TOKEN_URL') || 'https://api.figma.com/v1/oauth/token',
      scope: env('FIGMA_SCOPE') || 'file_read',
      clientIdEnv: 'FIGMA_CLIENT_ID',
      clientSecretEnv: 'FIGMA_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('figma', null, 'FIGMA_MCP_URL'),
  },
  gcal: {
    id: 'gcal',
    oauth: {
      authorizeUrl: env('GCAL_AUTH_URL') || 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: env('GCAL_TOKEN_URL') || 'https://oauth2.googleapis.com/token',
      scope: env('GCAL_SCOPE') || 'https://www.googleapis.com/auth/calendar',
      clientIdEnv: 'GOOGLE_CLIENT_ID',
      clientSecretEnv: 'GOOGLE_CLIENT_SECRET',
      tokenAuth: 'body',
      extraAuthorize: { access_type: 'offline', prompt: 'consent' },
    },
    mcp: mcp('gcal', null, 'GCAL_MCP_URL'),
  },
  discord: {
    id: 'discord',
    oauth: {
      authorizeUrl: env('DISCORD_AUTH_URL') || 'https://discord.com/oauth2/authorize',
      tokenUrl: env('DISCORD_TOKEN_URL') || 'https://discord.com/api/oauth2/token',
      scope: env('DISCORD_SCOPE') || 'identify guilds',
      clientIdEnv: 'DISCORD_CLIENT_ID',
      clientSecretEnv: 'DISCORD_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('discord', null, 'DISCORD_MCP_URL'),
  },
  zoom: {
    id: 'zoom',
    oauth: {
      authorizeUrl: env('ZOOM_AUTH_URL') || 'https://zoom.us/oauth/authorize',
      tokenUrl: env('ZOOM_TOKEN_URL') || 'https://zoom.us/oauth/token',
      scope: env('ZOOM_SCOPE') || '',
      clientIdEnv: 'ZOOM_CLIENT_ID',
      clientSecretEnv: 'ZOOM_CLIENT_SECRET',
      tokenAuth: 'basic',
    },
    mcp: mcp('zoom', null, 'ZOOM_MCP_URL'),
  },
  jira: {
    id: 'jira',
    oauth: {
      authorizeUrl: env('JIRA_AUTH_URL') || 'https://auth.atlassian.com/authorize',
      tokenUrl: env('JIRA_TOKEN_URL') || 'https://auth.atlassian.com/oauth/token',
      scope: env('JIRA_SCOPE') || 'read:jira-work write:jira-work offline_access',
      clientIdEnv: 'JIRA_CLIENT_ID',
      clientSecretEnv: 'JIRA_CLIENT_SECRET',
      tokenAuth: 'body',
      extraAuthorize: { audience: 'api.atlassian.com', prompt: 'consent' },
    },
    mcp: mcp('jira', null, 'JIRA_MCP_URL'),
  },
  asana: {
    id: 'asana',
    oauth: {
      authorizeUrl: env('ASANA_AUTH_URL') || 'https://app.asana.com/-/oauth_authorize',
      tokenUrl: env('ASANA_TOKEN_URL') || 'https://app.asana.com/-/oauth_token',
      scope: env('ASANA_SCOPE') || 'default',
      clientIdEnv: 'ASANA_CLIENT_ID',
      clientSecretEnv: 'ASANA_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('asana', null, 'ASANA_MCP_URL'),
  },
  airtable: {
    id: 'airtable',
    oauth: {
      authorizeUrl: env('AIRTABLE_AUTH_URL') || 'https://airtable.com/oauth2/v1/authorize',
      tokenUrl: env('AIRTABLE_TOKEN_URL') || 'https://airtable.com/oauth2/v1/token',
      scope: env('AIRTABLE_SCOPE') || 'data.records:read data.records:write schema.bases:read',
      clientIdEnv: 'AIRTABLE_CLIENT_ID',
      clientSecretEnv: 'AIRTABLE_CLIENT_SECRET',
      tokenAuth: 'basic',
      pkce: true,
    },
    mcp: mcp('airtable', null, 'AIRTABLE_MCP_URL'),
  },
  quickbooks: {
    id: 'quickbooks',
    oauth: {
      authorizeUrl: env('QUICKBOOKS_AUTH_URL') || 'https://appcenter.intuit.com/connect/oauth2',
      tokenUrl: env('QUICKBOOKS_TOKEN_URL') || 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
      scope: env('QUICKBOOKS_SCOPE') || 'com.intuit.quickbooks.accounting',
      clientIdEnv: 'QUICKBOOKS_CLIENT_ID',
      clientSecretEnv: 'QUICKBOOKS_CLIENT_SECRET',
      tokenAuth: 'basic',
    },
    mcp: mcp('quickbooks', null, 'QUICKBOOKS_MCP_URL'),
  },
  xero: {
    id: 'xero',
    oauth: {
      authorizeUrl: env('XERO_AUTH_URL') || 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: env('XERO_TOKEN_URL') || 'https://identity.xero.com/connect/token',
      scope: env('XERO_SCOPE') || 'accounting.transactions accounting.contacts offline_access',
      clientIdEnv: 'XERO_CLIENT_ID',
      clientSecretEnv: 'XERO_CLIENT_SECRET',
      tokenAuth: 'basic',
    },
    mcp: mcp('xero', null, 'XERO_MCP_URL'),
  },
  shopify: {
    id: 'shopify',
    oauth: {
      authorizeUrl: env('SHOPIFY_AUTH_URL') || '',
      tokenUrl: env('SHOPIFY_TOKEN_URL') || '',
      scope: env('SHOPIFY_SCOPE') || 'read_products,write_products,read_orders',
      clientIdEnv: 'SHOPIFY_CLIENT_ID',
      clientSecretEnv: 'SHOPIFY_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('shopify', null, 'SHOPIFY_MCP_URL'),
  },
  hubspot: {
    id: 'hubspot',
    oauth: {
      authorizeUrl: env('HUBSPOT_AUTH_URL') || 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: env('HUBSPOT_TOKEN_URL') || 'https://api.hubapi.com/oauth/v1/token',
      scope: env('HUBSPOT_SCOPE') || 'crm.objects.contacts.read crm.objects.contacts.write oauth',
      clientIdEnv: 'HUBSPOT_CLIENT_ID',
      clientSecretEnv: 'HUBSPOT_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('hubspot', null, 'HUBSPOT_MCP_URL'),
  },
  calendly: {
    id: 'calendly',
    oauth: {
      authorizeUrl: env('CALENDLY_AUTH_URL') || 'https://auth.calendly.com/oauth/authorize',
      tokenUrl: env('CALENDLY_TOKEN_URL') || 'https://auth.calendly.com/oauth/token',
      scope: env('CALENDLY_SCOPE') || '',
      clientIdEnv: 'CALENDLY_CLIENT_ID',
      clientSecretEnv: 'CALENDLY_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('calendly', null, 'CALENDLY_MCP_URL'),
  },
  mailchimp: {
    id: 'mailchimp',
    oauth: {
      authorizeUrl: env('MAILCHIMP_AUTH_URL') || 'https://login.mailchimp.com/oauth2/authorize',
      tokenUrl: env('MAILCHIMP_TOKEN_URL') || 'https://login.mailchimp.com/oauth2/token',
      scope: env('MAILCHIMP_SCOPE') || '',
      clientIdEnv: 'MAILCHIMP_CLIENT_ID',
      clientSecretEnv: 'MAILCHIMP_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('mailchimp', null, 'MAILCHIMP_MCP_URL'),
  },
  twitter: {
    id: 'twitter',
    oauth: {
      authorizeUrl: env('TWITTER_AUTH_URL') || 'https://twitter.com/i/oauth2/authorize',
      tokenUrl: env('TWITTER_TOKEN_URL') || 'https://api.twitter.com/2/oauth2/token',
      scope: env('TWITTER_SCOPE') || 'tweet.read tweet.write users.read offline.access',
      clientIdEnv: 'TWITTER_CLIENT_ID',
      clientSecretEnv: 'TWITTER_CLIENT_SECRET',
      tokenAuth: 'basic',
      pkce: true,
    },
    mcp: mcp('twitter', null, 'TWITTER_MCP_URL'),
  },
  linkedin: {
    id: 'linkedin',
    oauth: {
      authorizeUrl: env('LINKEDIN_AUTH_URL') || 'https://www.linkedin.com/oauth/v2/authorization',
      tokenUrl: env('LINKEDIN_TOKEN_URL') || 'https://www.linkedin.com/oauth/v2/accessToken',
      scope: env('LINKEDIN_SCOPE') || 'w_member_social openid profile',
      clientIdEnv: 'LINKEDIN_CLIENT_ID',
      clientSecretEnv: 'LINKEDIN_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('linkedin', null, 'LINKEDIN_MCP_URL'),
  },
  buffer: {
    id: 'buffer',
    oauth: {
      authorizeUrl: env('BUFFER_AUTH_URL') || 'https://bufferapp.com/oauth2/authorize',
      tokenUrl: env('BUFFER_TOKEN_URL') || 'https://api.bufferapp.com/1/oauth2/token.json',
      scope: env('BUFFER_SCOPE') || '',
      clientIdEnv: 'BUFFER_CLIENT_ID',
      clientSecretEnv: 'BUFFER_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('buffer', null, 'BUFFER_MCP_URL'),
  },
  canva: {
    id: 'canva',
    oauth: {
      authorizeUrl: env('CANVA_AUTH_URL') || 'https://www.canva.com/api/oauth/authorize',
      tokenUrl: env('CANVA_TOKEN_URL') || 'https://api.canva.com/rest/v1/oauth/token',
      scope: env('CANVA_SCOPE') || 'design:content:read design:content:write asset:read',
      clientIdEnv: 'CANVA_CLIENT_ID',
      clientSecretEnv: 'CANVA_CLIENT_SECRET',
      tokenAuth: 'basic',
      pkce: true,
    },
    mcp: mcp('canva', null, 'CANVA_MCP_URL'),
  },
  docusign: {
    id: 'docusign',
    oauth: {
      authorizeUrl: env('DOCUSIGN_AUTH_URL') || 'https://account.docusign.com/oauth/auth',
      tokenUrl: env('DOCUSIGN_TOKEN_URL') || 'https://account.docusign.com/oauth/token',
      scope: env('DOCUSIGN_SCOPE') || 'signature',
      clientIdEnv: 'DOCUSIGN_CLIENT_ID',
      clientSecretEnv: 'DOCUSIGN_CLIENT_SECRET',
      tokenAuth: 'basic',
    },
    mcp: mcp('docusign', null, 'DOCUSIGN_MCP_URL'),
  },
  zendesk: {
    id: 'zendesk',
    oauth: {
      authorizeUrl: env('ZENDESK_AUTH_URL') || '',
      tokenUrl: env('ZENDESK_TOKEN_URL') || '',
      scope: env('ZENDESK_SCOPE') || 'read write',
      clientIdEnv: 'ZENDESK_CLIENT_ID',
      clientSecretEnv: 'ZENDESK_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('zendesk', null, 'ZENDESK_MCP_URL'),
  },
  intercom: {
    id: 'intercom',
    oauth: {
      authorizeUrl: env('INTERCOM_AUTH_URL') || 'https://app.intercom.com/oauth',
      tokenUrl: env('INTERCOM_TOKEN_URL') || 'https://api.intercom.io/auth/eagle/token',
      scope: env('INTERCOM_SCOPE') || '',
      clientIdEnv: 'INTERCOM_CLIENT_ID',
      clientSecretEnv: 'INTERCOM_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('intercom', null, 'INTERCOM_MCP_URL'),
  },
  gclassroom: {
    id: 'gclassroom',
    oauth: {
      authorizeUrl: env('GOOGLE_AUTH_URL') || 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: env('GOOGLE_TOKEN_URL') || 'https://oauth2.googleapis.com/token',
      scope: env('GCLASSROOM_SCOPE') || 'https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.students',
      clientIdEnv: 'GOOGLE_CLIENT_ID',
      clientSecretEnv: 'GOOGLE_CLIENT_SECRET',
      tokenAuth: 'body',
      extraAuthorize: { access_type: 'offline', prompt: 'consent' },
    },
    mcp: mcp('gclassroom', null, 'GCLASSROOM_MCP_URL'),
  },
  salesforce: {
    id: 'salesforce',
    oauth: {
      authorizeUrl: env('SALESFORCE_AUTH_URL') || 'https://login.salesforce.com/services/oauth2/authorize',
      tokenUrl: env('SALESFORCE_TOKEN_URL') || 'https://login.salesforce.com/services/oauth2/token',
      scope: env('SALESFORCE_SCOPE') || 'api refresh_token',
      clientIdEnv: 'SALESFORCE_CLIENT_ID',
      clientSecretEnv: 'SALESFORCE_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('salesforce', null, 'SALESFORCE_MCP_URL'),
  },
  whatsapp: {
    id: 'whatsapp',
    oauth: {
      authorizeUrl: env('WHATSAPP_AUTH_URL') || 'https://www.facebook.com/v19.0/dialog/oauth',
      tokenUrl: env('WHATSAPP_TOKEN_URL') || 'https://graph.facebook.com/v19.0/oauth/access_token',
      scope: env('WHATSAPP_SCOPE') || 'whatsapp_business_messaging whatsapp_business_management',
      clientIdEnv: 'WHATSAPP_CLIENT_ID',
      clientSecretEnv: 'WHATSAPP_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('whatsapp', null, 'WHATSAPP_MCP_URL'),
  },
  meta: {
    id: 'meta',
    oauth: {
      // Meta Marketing API (Facebook + Instagram ads) via Facebook Login
      authorizeUrl: env('META_AUTH_URL') || 'https://www.facebook.com/v19.0/dialog/oauth',
      tokenUrl: env('META_TOKEN_URL') || 'https://graph.facebook.com/v19.0/oauth/access_token',
      scope: env('META_SCOPE') || 'ads_management ads_read business_management',
      clientIdEnv: 'META_CLIENT_ID',
      clientSecretEnv: 'META_CLIENT_SECRET',
      tokenAuth: 'body',
    },
    mcp: mcp('meta', null, 'META_MCP_URL'),
  },
}

export const CONNECTOR_IDS: string[] = Object.keys(REGISTRY)

export function serverConnector(id: string): ServerConnector | null {
  return REGISTRY[id] ?? null
}

/** A connector is available when its OAuth client id + secret are configured. */
export function connectorAvailable(id: string): boolean {
  const c = REGISTRY[id]
  if (!c) return false
  return !!env(c.oauth.clientIdEnv) && !!env(c.oauth.clientSecretEnv)
}

export function clientId(c: ServerConnector): string | undefined {
  return env(c.oauth.clientIdEnv)
}
export function clientSecret(c: ServerConnector): string | undefined {
  return env(c.oauth.clientSecretEnv)
}

/** Public base URL of the deployment (for the OAuth redirect_uri). */
export function siteUrl(): string {
  return (process.env.CONNECT_SITE_URL || process.env.CHECKOUT_SITE_URL || 'https://www.dojoburo.com').replace(/\/$/, '')
}

export function redirectUri(): string {
  return `${siteUrl()}/api/connect`
}

export interface RefreshedToken { accessToken: string; refreshToken?: string; expiresIn?: number }

/** Exchange a stored refresh_token for a fresh access_token. Returns null when
 *  the connector is misconfigured or the provider declines — the caller then
 *  falls back to the existing (possibly still valid) token. */
export async function refreshOAuthToken(c: ServerConnector, refreshTok: string): Promise<RefreshedToken | null> {
  const cid = clientId(c)
  const csec = clientSecret(c)
  if (!cid || !csec) return null
  const headers: Record<string, string> = { accept: 'application/json' }
  const params: Record<string, string> = { grant_type: 'refresh_token', refresh_token: refreshTok }
  if (c.oauth.tokenAuth === 'basic') {
    headers.authorization = 'Basic ' + Buffer.from(`${cid}:${csec}`).toString('base64')
    headers['content-type'] = 'application/json'
  } else {
    params.client_id = cid
    params.client_secret = csec
    headers['content-type'] = 'application/x-www-form-urlencoded'
  }
  try {
    const res = await fetch(c.oauth.tokenUrl, {
      method: 'POST',
      headers,
      body: c.oauth.tokenAuth === 'basic' ? JSON.stringify(params) : new URLSearchParams(params).toString(),
    })
    const text = await res.text()
    let j: any
    try {
      j = JSON.parse(text)
    } catch {
      j = Object.fromEntries(new URLSearchParams(text))
    }
    if (!res.ok || j?.error) return null
    const accessToken = j.access_token
    if (!accessToken) return null
    return {
      accessToken,
      refreshToken: j.refresh_token || undefined,
      expiresIn: Number.isFinite(Number(j.expires_in)) ? Number(j.expires_in) : undefined,
    }
  } catch {
    return null
  }
}
