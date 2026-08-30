// WHO is calling · verified, not claimed.
//
// Every endpoint that reaches a user's connected accounts (their Gmail, Notion,
// Stripe…) has to know whose data it is about. Until now that came from a query
// parameter — `/api/tool-data?privy=did:privy:xxxx` — which is an identifier,
// not a secret: anyone who learned a DID could read and act in that person's
// connected apps. This module closes that.
//
// A signed-in caller now proves it: the browser sends the Privy access token as
// `Authorization: Bearer <jwt>`, and we verify the signature against Privy's
// published JWKS before believing a single claim in it. The DID we use is the
// token's `sub` — never anything the caller typed.
//
// Guests have no token, so they stay on `client` (a random id held in their own
// browser). That id is a bearer credential, so it is generated with real
// randomness client-side and is only ever accepted for accounts that have never
// been linked to a Privy identity.
//
// Verification is ES256 over Privy's JWKS, done with Node's own crypto — no new
// dependency, and the key set is cached for an hour.
import type { IncomingMessage } from 'node:http'
import { createPublicKey, verify as cryptoVerify, timingSafeEqual } from 'node:crypto'

const ENV = process.env as Record<string, string | undefined>

/** Privy app id · the token audience. Set it to turn verification on. */
export const PRIVY_APP_ID = ENV.PRIVY_APP_ID || ENV.VITE_PRIVY_APP_ID || ''

/** Is this deployment running Privy at all? */
export const privyEnabled = (): boolean => !!PRIVY_APP_ID

const JWKS_URL = () => `https://auth.privy.io/api/v1/apps/${PRIVY_APP_ID}/jwks.json`
const ISSUER = 'privy.io'
const CACHE_MS = 60 * 60 * 1000

interface Jwk { kid?: string; kty: string; crv?: string; x?: string; y?: string; alg?: string }
let jwksCache: { at: number; keys: Jwk[] } | null = null

async function jwks(): Promise<Jwk[]> {
  if (jwksCache && Date.now() - jwksCache.at < CACHE_MS) return jwksCache.keys
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), 4000)
  try {
    const r = await fetch(JWKS_URL(), { signal: ctl.signal })
    if (!r.ok) throw new Error('jwks_' + r.status)
    const j = (await r.json()) as { keys?: Jwk[] }
    const keys = Array.isArray(j.keys) ? j.keys : []
    if (keys.length) jwksCache = { at: Date.now(), keys }
    return keys
  } catch {
    // A network blip must not log everyone out · serve the last good key set
    // even past its TTL rather than failing open OR hard-failing every request.
    return jwksCache?.keys ?? []
  } finally {
    clearTimeout(t)
  }
}

const b64url = (s: string) => Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/'), 'base64')

/**
 * Verify a Privy access token and return its subject (the user's DID).
 * Returns null for anything that does not verify — never throws, never guesses.
 */
export async function verifyPrivyToken(token: string): Promise<string | null> {
  if (!privyEnabled() || !token) return null
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const [h, p, s] = parts

  let header: { alg?: string; kid?: string; typ?: string }
  let claims: { sub?: string; iss?: string; aud?: unknown; exp?: number; nbf?: number }
  try {
    header = JSON.parse(b64url(h).toString('utf8'))
    claims = JSON.parse(b64url(p).toString('utf8'))
  } catch { return null }

  // Privy signs with ES256. Refuse anything else outright — in particular
  // "alg":"none" and any attempt to downgrade to an HMAC we would verify with a
  // public key.
  if (header.alg !== 'ES256') return null

  const now = Math.floor(Date.now() / 1000)
  if (typeof claims.exp !== 'number' || claims.exp < now - 30) return null
  if (typeof claims.nbf === 'number' && claims.nbf > now + 30) return null
  if (claims.iss !== ISSUER) return null
  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud]
  if (!aud.includes(PRIVY_APP_ID)) return null
  if (typeof claims.sub !== 'string' || !claims.sub) return null

  const keys = await jwks()
  const candidates = header.kid ? keys.filter((k) => k.kid === header.kid) : keys
  const signed = Buffer.from(`${h}.${p}`, 'utf8')
  const sig = b64url(s)
  if (sig.length !== 64) return null // ES256 = r||s, 32 bytes each

  for (const jwk of candidates.length ? candidates : keys) {
    try {
      if (jwk.kty !== 'EC' || jwk.crv !== 'P-256') continue
      const key = createPublicKey({ key: jwk as never, format: 'jwk' })
      if (cryptoVerify('sha256', signed, { key, dsaEncoding: 'ieee-p1363' }, sig)) return claims.sub
    } catch { /* try the next key */ }
  }
  return null
}

function bearer(req: IncomingMessage): string {
  const h = req.headers.authorization || (req.headers as Record<string, string>)['Authorization'] || ''
  const m = /^Bearer\s+(.+)$/i.exec(String(h).trim())
  return m ? m[1].trim() : ''
}

const eq = (a: string, b: string) => {
  const x = Buffer.from(a), y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export interface Caller {
  /** the DID, ONLY when a token proved it */
  privyDid: string | null
  /** the guest id from the caller's own browser */
  clientRef: string | null
  /** true when the request claimed an identity it could not prove */
  forged: boolean
}

/**
 * Resolve the caller from a request.
 *
 * `claimed` is whatever the request said about itself (the old `privy` / `client`
 * fields). A claimed DID is only honoured when the bearer token verifies to that
 * exact DID; otherwise the request is marked `forged` and callers must reject it.
 * With no Privy configured on the deployment, a claimed DID is always forged —
 * there is nothing that could ever prove it.
 */
export async function identify(
  req: IncomingMessage,
  claimed: { privy?: string | null; client?: string | null },
): Promise<Caller> {
  const client = str(claimed.client)
  const claimedDid = str(claimed.privy)
  const verified = await verifyPrivyToken(bearer(req))

  if (verified) {
    // A proven identity wins. If the body also claimed a *different* DID, the
    // request is trying something · refuse it rather than pick a winner.
    if (claimedDid && !eq(claimedDid, verified)) return { privyDid: null, clientRef: null, forged: true }
    return { privyDid: verified, clientRef: client, forged: false }
  }
  // No proof. A claimed DID cannot be honoured.
  if (claimedDid) return { privyDid: null, clientRef: null, forged: true }
  return { privyDid: null, clientRef: client, forged: false }
}

function str(v: unknown): string | null {
  const s = typeof v === 'string' ? v.trim() : ''
  return s ? s.slice(0, 200) : null
}

/**
 * The one call every data endpoint makes.
 *
 * Returns the ref to look the account up by, or null when the request claimed an
 * identity it could not prove — in which case the endpoint must refuse. Nothing
 * downstream ever sees an unproven DID.
 */
export async function callerRef(
  req: IncomingMessage,
  claimed: { privy?: string | null; client?: string | null },
): Promise<{ privyDid: string | null; clientRef: string | null } | null> {
  const who = await identify(req, claimed)
  if (who.forged) return null
  return { privyDid: who.privyDid, clientRef: who.clientRef }
}
