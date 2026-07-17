// Server-side verification of Privy identities.
//
// The browser used to just CLAIM a Privy DID (?privy=did:privy:…) and the
// server trusted it — anyone who knew a user's DID could read or write their
// data. Now the client sends its Privy ACCESS TOKEN (an ES256 JWT) in the
// Authorization header; we verify the signature against Privy's JWKS and use
// the token's `sub` as the proven DID.
//
// Policy (see verifiedRef):
//   * valid token                     → identity = token's DID (claim ignored)
//   * DID claimed, token missing/bad  → REJECTED ('auth') when verification is
//     configured — a claim must be proven
//   * guest (client id only)          → allowed; the crypto-random client id
//     itself acts as the bearer credential
//
// Verification is configured via PRIVY_APP_ID (falls back to VITE_PRIVY_APP_ID,
// which Vercel exposes to functions too). No app id → Privy isn't in use on
// this deployment and the legacy trust path applies.
import type { IncomingMessage } from 'node:http'
import { createPublicKey, verify as verifySignature } from 'node:crypto'

const ENV = process.env as Record<string, string | undefined>

export function privyAppId(): string | null {
  return ENV.PRIVY_APP_ID || ENV.VITE_PRIVY_APP_ID || null
}

export function privyVerificationConfigured(): boolean {
  return !!privyAppId()
}

// ---- JWKS cache (per lambda instance, refreshed every 10 min) --------------
let jwksCache: { appId: string; keys: unknown[]; at: number } | null = null
const JWKS_TTL_MS = 10 * 60 * 1000

async function jwks(appId: string): Promise<unknown[]> {
  if (jwksCache && jwksCache.appId === appId && Date.now() - jwksCache.at < JWKS_TTL_MS) return jwksCache.keys
  const res = await fetch(`https://auth.privy.io/api/v1/apps/${appId}/jwks.json`, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(5000),
  })
  const j: any = await res.json()
  const keys = Array.isArray(j?.keys) ? j.keys : []
  jwksCache = { appId, keys, at: Date.now() }
  return keys
}

function b64uJson(part: string): any {
  try { return JSON.parse(Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')) } catch { return null }
}
function b64uBuf(part: string): Buffer {
  return Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
}

/** Verify a Privy access token (ES256 JWT). Returns the proven DID, or null. */
export async function verifyPrivyToken(token: string): Promise<string | null> {
  try {
    const appId = privyAppId()
    if (!appId || !token) return null
    const [h, p, s] = token.split('.')
    if (!h || !p || !s) return null
    const header = b64uJson(h)
    const payload = b64uJson(p)
    if (header?.alg !== 'ES256') return null
    if (payload?.iss !== 'privy.io') return null
    const aud = payload?.aud
    if (!(aud === appId || (Array.isArray(aud) && aud.includes(appId)))) return null
    const now = Math.floor(Date.now() / 1000)
    if (typeof payload?.exp !== 'number' || payload.exp < now - 30) return null
    const sub = String(payload?.sub || '')
    if (!sub.startsWith('did:privy:')) return null

    const keys = (await jwks(appId)) as Array<Record<string, unknown>>
    const byKid = header?.kid ? keys.filter((k) => k.kid === header.kid) : []
    const data = Buffer.from(`${h}.${p}`, 'utf8')
    const sig = b64uBuf(s)
    for (const k of byKid.length ? byKid : keys) {
      try {
        const key = createPublicKey({ key: k as any, format: 'jwk' })
        // JWT ES256 signatures are raw r||s (IEEE P1363), not DER
        if (verifySignature('sha256', data, { key, dsaEncoding: 'ieee-p1363' }, sig)) return sub
      } catch { /* try the next key */ }
    }
    return null
  } catch {
    return null
  }
}

export function bearerToken(req: IncomingMessage): string | null {
  const h = String(req.headers['authorization'] || '')
  const m = h.match(/^Bearer\s+(.+)$/i)
  return m ? m[1].trim() : null
}

export interface VerifiedRef { privy: string | null; client: string | null }
export type VerifiedResult = { ok: true; ref: VerifiedRef } | { ok: false; error: 'auth' }

function clean(v: string | null | undefined): string | null {
  const s = typeof v === 'string' ? v.trim() : ''
  return s ? s.slice(0, 200) : null
}

/** Resolve the caller's identity safely. A claimed Privy DID must be proven by
 *  a valid access token (Authorization header, or tokenFromBody for POSTs);
 *  the proven DID always wins over the claim. Guests pass through on their
 *  client id alone. */
export async function verifiedRef(
  req: IncomingMessage,
  claimedPrivy: string | null | undefined,
  claimedClient: string | null | undefined,
  tokenFromBody?: string | null,
): Promise<VerifiedResult> {
  const client = clean(claimedClient)
  const token = bearerToken(req) || clean(tokenFromBody)
  if (token) {
    const did = await verifyPrivyToken(token)
    if (did) return { ok: true, ref: { privy: did, client } }
  }
  const privy = clean(claimedPrivy)
  if (privy) {
    // a claim with no (valid) proof: reject when we CAN verify. Only a deploy
    // with no Privy app id at all (where such claims can't exist legitimately
    // from our own frontend) keeps the legacy trust path.
    if (privyVerificationConfigured()) return { ok: false, error: 'auth' }
    return { ok: true, ref: { privy, client } }
  }
  return { ok: true, ref: { privy: null, client } }
}
