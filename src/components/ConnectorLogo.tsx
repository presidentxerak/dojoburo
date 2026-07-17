// Brand-coloured logo tiles for each connector. We can't fetch the providers'
// official (copyrighted) SVG artwork from here, so these are clean, original
// tiles that use each service's official brand COLOUR plus a short monogram ·
// recognisable and on-brand, and easy to swap for an official asset later.

const BRAND: Record<string, string> = {
  notion: '#000000', github: '#181717', gmail: '#EA4335', gdrive: '#0F9D58', gcal: '#4285F4',
  slack: '#4A154B', discord: '#5865F2', zoom: '#2D8CFF', linear: '#5E6AD2', jira: '#0052CC',
  trello: '#0079BF', asana: '#F06A6A', airtable: '#18BFFF', stripe: '#635BFF', quickbooks: '#2CA01C',
  xero: '#13B5EA', shopify: '#95BF47', hubspot: '#FF7A59', calendly: '#006BFF', mailchimp: '#FFE01B',
  twitter: '#000000', linkedin: '#0A66C2', buffer: '#231F20', figma: '#F24E1E', canva: '#00C4CC',
  docusign: '#FDB813', zendesk: '#03363D', intercom: '#1F8DED', gclassroom: '#0F9D58',
  salesforce: '#00A1E0', whatsapp: '#25D366', meta: '#0081FB', 'claude-code': '#D97757',
  'ai-video': '#6D28D9', elevenlabs: '#000000', heygen: '#7559FF', apollo: '#FECF33',
  klaviyo: '#111111', ga4: '#F9AB00', posthog: '#F54E00', supabase: '#3ECF8E',
  cloudinary: '#3448C5', wave: '#2043D1', perplexity: '#20808D',
}

const MONO: Record<string, string> = {
  gmail: 'M', gdrive: 'GD', gcal: 'GC', gclassroom: 'GK', twitter: 'X', linkedin: 'in',
  whatsapp: 'WA', quickbooks: 'QB', hubspot: 'HS', salesforce: 'SF', docusign: 'DS',
  'claude-code': 'CC', ga4: 'GA', posthog: 'PH', wave: 'WV', 'ai-video': 'AI',
}

function monoFor(id: string, label: string): string {
  return MONO[id] ?? label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()
}

// pick readable text colour for a given hex background (WCAG-ish luminance)
function textOn(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return lum > 0.62 ? '#14141a' : '#ffffff'
}

export function connectorColor(id: string): string {
  return BRAND[id] ?? '#6b6f76'
}

/** A brand-coloured tile for a connector, sized in px. */
export function ConnectorLogo({ id, label, size = 30 }: { id: string; label: string; size?: number }) {
  const color = connectorColor(id)
  return (
    <span
      className="clogo"
      aria-hidden
      style={{ width: size, height: size, background: color, color: textOn(color), fontSize: Math.round(size * 0.42) }}
    >
      {monoFor(id, label)}
    </span>
  )
}
