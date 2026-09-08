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

/**
 * A connector the USER holds a key for, rather than one they authorise.
 *
 * Thirteen connectors in the catalogue are of this kind — ElevenLabs, Perplexity,
 * PostHog, Supabase and the rest — and every one of them was stuck at "no server
 * entry", because the registry only knew how to describe OAuth. They do not need
 * an OAuth app registered in a provider console at all: the founder pastes their
 * own API key, exactly as they already do for Claude.
 *
 * `validate` is what stops a typo becoming a support ticket three days later —
 * a pasted key that cannot possibly be right is refused at the door instead of
 * failing on the first run. `hint` is what the app shows afterwards; the key
 * itself is sealed and never returned.
 */
export interface TokenConfig {
  /** where the founder gets the key · shown in the app, never fetched */
  issueUrl: string
  /** a key that cannot match this is refused before it is stored */
  validate: RegExp
  /** the safe label kept alongside the sealed key */
  hint: (key: string) => string
  /** how the key is presented to the provider at run time */
  header: (key: string) => Record<string, string>
}

export interface ServerConnector {
  id: string
  /** absent on key-based connectors */
  oauth?: OAuthConfig
  /** absent on OAuth connectors */
  token?: TokenConfig
  mcp: McpConfig
}

/** Last four characters, with the provider's own prefix kept when it has one. */
const tail = (prefix: string) => (key: string): string =>
  `${prefix}…${key.slice(-4)}`

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

// ---------------------------------------------------------------------------
// Key-based connectors.
//
// Nothing here needs an operator. There is no client id to register, no
// redirect URI to whitelist and no consent screen to get approved — the founder
// pastes the key they already have, it is sealed with AES-256-GCM in the same
// vault as their Claude key, and it is decrypted only when a run needs it.
//
// The MCP url is null for most of them, and that is not an oversight: a key
// that is stored but has nowhere to be sent still cannot do work. Where a
// provider publishes a remote MCP endpoint, ${IDP}_MCP_URL points at it and the
// key travels as the connector's own header.
// ---------------------------------------------------------------------------
const TOKENS: Record<string, ServerConnector> = {
  anthropic: {
    id: 'anthropic',
    token: {
      issueUrl: 'https://console.anthropic.com/settings/keys',
      validate: /^sk-ant-[A-Za-z0-9_-]{20,}$/,
      hint: tail('sk-ant-'),
      header: (k) => ({ 'x-api-key': k, 'anthropic-version': '2023-06-01' }),
    },
    mcp: mcp('anthropic', null, 'ANTHROPIC_MCP_URL'),
  },
  perplexity: {
    id: 'perplexity',
    token: {
      issueUrl: 'https://www.perplexity.ai/settings/api',
      validate: /^pplx-[A-Za-z0-9]{20,}$/,
      hint: tail('pplx-'),
      header: (k) => ({ authorization: `Bearer ${k}` }),
    },
    mcp: mcp('perplexity', null, 'PERPLEXITY_MCP_URL'),
  },
  elevenlabs: {
    id: 'elevenlabs',
    token: {
      issueUrl: 'https://elevenlabs.io/app/settings/api-keys',
      validate: /^[A-Za-z0-9_-]{24,}$/,
      hint: tail('key'),
      // the same header api/tts.ts already speaks to this provider with
      header: (k) => ({ 'xi-api-key': k }),
    },
    mcp: mcp('elevenlabs', null, 'ELEVENLABS_MCP_URL'),
  },
  posthog: {
    id: 'posthog',
    token: {
      issueUrl: 'https://app.posthog.com/settings/user-api-keys',
      validate: /^phx_[A-Za-z0-9_-]{20,}$/,
      hint: tail('phx_'),
      header: (k) => ({ authorization: `Bearer ${k}` }),
    },
    mcp: mcp('posthog', null, 'POSTHOG_MCP_URL'),
  },
  supabase: {
    id: 'supabase',
    token: {
      issueUrl: 'https://supabase.com/dashboard/account/tokens',
      validate: /^sbp_[A-Za-z0-9]{20,}$/,
      hint: tail('sbp_'),
      header: (k) => ({ authorization: `Bearer ${k}` }),
    },
    mcp: mcp('supabase', 'https://mcp.supabase.com/mcp', 'SUPABASE_MCP_URL'),
  },
  klaviyo: {
    id: 'klaviyo',
    token: {
      issueUrl: 'https://www.klaviyo.com/settings/account/api-keys',
      validate: /^pk_[A-Za-z0-9]{20,}$/,
      hint: tail('pk_'),
      header: (k) => ({ authorization: `Klaviyo-API-Key ${k}`, revision: '2024-10-15' }),
    },
    mcp: mcp('klaviyo', null, 'KLAVIYO_MCP_URL'),
  },
  apollo: {
    id: 'apollo',
    token: {
      issueUrl: 'https://app.apollo.io/#/settings/integrations/api',
      validate: /^[A-Za-z0-9_-]{20,}$/,
      hint: tail('key'),
      header: (k) => ({ 'x-api-key': k }),
    },
    mcp: mcp('apollo', null, 'APOLLO_MCP_URL'),
  },
  heygen: {
    id: 'heygen',
    token: {
      issueUrl: 'https://app.heygen.com/settings?nav=API',
      validate: /^[A-Za-z0-9+/=_-]{24,}$/,
      hint: tail('key'),
      header: (k) => ({ 'x-api-key': k }),
    },
    mcp: mcp('heygen', null, 'HEYGEN_MCP_URL'),
  },
  cloudinary: {
    id: 'cloudinary',
    token: {
      issueUrl: 'https://console.cloudinary.com/settings/api-keys',
      // Cloudinary hands out one URL that carries key, secret and cloud name
      validate: /^cloudinary:\/\/\d+:[A-Za-z0-9_-]+@[A-Za-z0-9_-]+$/,
      hint: (k) => `cloudinary://…@${k.split('@')[1] || '?'}`,
      header: (k) => ({ authorization: `Basic ${Buffer.from(k.replace(/^cloudinary:\/\//, '').split('@')[0]).toString('base64')}` }),
    },
    mcp: mcp('cloudinary', null, 'CLOUDINARY_MCP_URL'),
  },
  trello: {
    id: 'trello',
    token: {
      issueUrl: 'https://trello.com/power-ups/admin',
      // Trello needs both halves · "<key>:<token>", which is how the app asks
      validate: /^[a-f0-9]{32}:[a-zA-Z0-9]{64,}$/,
      hint: (k) => `key ${k.slice(0, 6)}…`,
      header: () => ({}), // Trello authenticates in the query string, not a header
    },
    mcp: mcp('trello', null, 'TRELLO_MCP_URL'),
  },
  ga4: {
    id: 'ga4',
    token: {
      issueUrl: 'https://console.cloud.google.com/apis/credentials',
      validate: /^[A-Za-z0-9._-]{20,}$/,
      hint: tail('key'),
      header: (k) => ({ authorization: `Bearer ${k}` }),
    },
    mcp: mcp('ga4', null, 'GA4_MCP_URL'),
  },
  wave: {
    id: 'wave',
    token: {
      issueUrl: 'https://developer.waveapps.com/hc/en-us/articles/360019968212',
      validate: /^[A-Za-z0-9._-]{20,}$/,
      hint: tail('key'),
      header: (k) => ({ authorization: `Bearer ${k}` }),
    },
    mcp: mcp('wave', null, 'WAVE_MCP_URL'),
  },
  'claude-code': {
    id: 'claude-code',
    token: {
      issueUrl: 'https://console.anthropic.com/settings/keys',
      validate: /^sk-ant-[A-Za-z0-9_-]{20,}$/,
      hint: tail('sk-ant-'),
      header: (k) => ({ 'x-api-key': k, 'anthropic-version': '2023-06-01' }),
    },
    mcp: mcp('claude-code', null, 'CLAUDE_CODE_MCP_URL'),
  },
  'ai-video': {
    id: 'ai-video',
    token: {
      // one key for whichever generator the operator points AI_VIDEO_MCP_URL at
      issueUrl: 'https://fal.ai/dashboard/keys',
      validate: /^[A-Za-z0-9:_-]{20,}$/,
      hint: tail('key'),
      header: (k) => ({ authorization: `Key ${k}` }),
    },
    mcp: mcp('ai-video', null, 'AI_VIDEO_MCP_URL'),
  },
}

for (const [id, c] of Object.entries(TOKENS)) REGISTRY[id] = c

export const CONNECTOR_IDS: string[] = Object.keys(REGISTRY)

export function serverConnector(id: string): ServerConnector | null {
  return REGISTRY[id] ?? null
}

/**
 * Can this connector be used on this deployment?
 *
 * OAuth needs the operator to have registered an app — client id and secret.
 * A key-based connector needs nothing from the operator at all: the founder
 * brings the key, so it is available the moment the vault is configured.
 */
export function connectorAvailable(id: string): boolean {
  const c = REGISTRY[id]
  if (!c) return false
  if (c.token) return true
  if (!c.oauth) return false
  return !!env(c.oauth.clientIdEnv) && !!env(c.oauth.clientSecretEnv)
}

/** True when the founder supplies the credential themselves. */
export function isTokenConnector(id: string): boolean {
  return !!REGISTRY[id]?.token
}

export function clientId(c: ServerConnector): string | undefined {
  return c.oauth ? env(c.oauth.clientIdEnv) : undefined
}
export function clientSecret(c: ServerConnector): string | undefined {
  return c.oauth ? env(c.oauth.clientSecretEnv) : undefined
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
  // A key-based connector has no refresh flow · the key is the credential and
  // it does not expire until the founder revokes it.
  if (!c.oauth) return null
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
