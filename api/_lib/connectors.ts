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
