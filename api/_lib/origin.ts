// Shared, robust same-site origin check for the serverless endpoints.
//
// The old check was an exact string match against a single configured origin
// (CHECKOUT_ALLOWED_ORIGIN / SUPPORT_ALLOWED_ORIGIN). That rejected perfectly
// legitimate same-site requests whenever the visited URL differed by so much
// as a "www." (dojoburo.com vs www.dojoburo.com), a Vercel preview domain, or
// a trailing slash — which silently 403'd every agent run and made the app
// fall back to local drafts ("No AI model connected").
//
// This allows a request when the browser Origin is the SAME SITE as the request
// (host match, www-insensitive) or matches the configured allowed origin
// (also www-insensitive), and still blocks a genuinely cross-site origin.

const bare = (h: string) => h.replace(/^www\./, '').toLowerCase()

function hostOf(v: string): string {
  try { return new URL(v).host.toLowerCase() } catch { return v.toLowerCase() }
}

/**
 * @param origin  the request's Origin header (may be empty for non-browser calls)
 * @param host    the request's Host header (the deployment's own domain)
 * @param allowed the configured allowed origin (may be empty)
 */
export function originAllowed(origin: string | undefined, host: string, allowed: string): boolean {
  // No Origin header → not a browser cross-site request (e.g. server-to-server,
  // same-origin GET). Nothing to reject.
  if (!origin) return true

  const oh = hostOf(origin)
  if (!oh) return false

  // 1) Same site: the Origin's host matches the deployment host it's calling.
  //    Covers the canonical domain, www/non-www, and Vercel preview URLs.
  if (host && bare(oh) === bare(host)) return true

  // 2) Matches the explicitly-configured allowed origin (www-insensitive).
  if (allowed && bare(oh) === bare(hostOf(allowed))) return true

  return false
}
