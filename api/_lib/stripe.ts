// Stripe webhook signature verification with Web Crypto only (no `stripe` SDK).
// Mirrors Stripe's scheme: the `Stripe-Signature` header carries `t=<unix>` and
// one or more `v1=<hex hmac>` where the HMAC-SHA256 key is the webhook signing
// secret and the message is `${t}.${rawBody}`. We recompute and compare in
// constant time, and reject stale timestamps to blunt replay.

export interface StripeEvent {
  id: string
  type: string
  data: { object: any }
}

const encoder = new TextEncoder()

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(message))
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

/**
 * Verify a Stripe webhook and return the parsed event, or null if invalid.
 * @param rawBody the exact request body string (do NOT re-serialize)
 * @param header  the `stripe-signature` header value
 * @param secret  STRIPE_WEBHOOK_SECRET (whsec_...)
 * @param toleranceSec reject timestamps older than this (default 5 min)
 */
export async function verifyStripeEvent(
  rawBody: string,
  header: string | null,
  secret: string,
  toleranceSec = 300,
): Promise<StripeEvent | null> {
  if (!header || !secret) return null

  const parts = Object.fromEntries(
    header.split(',').map((kv) => {
      const i = kv.indexOf('=')
      return [kv.slice(0, i).trim(), kv.slice(i + 1).trim()]
    }),
  ) as Record<string, string>

  const t = parts['t']
  const v1 = parts['v1']
  if (!t || !v1) return null

  // replay window
  const ts = parseInt(t, 10)
  if (!Number.isFinite(ts)) return null
  const now = Math.floor(Date.now() / 1000)
  if (Math.abs(now - ts) > toleranceSec) return null

  const expected = await hmacSha256Hex(secret, `${t}.${rawBody}`)
  if (!timingSafeEqualHex(expected, v1)) return null

  try {
    return JSON.parse(rawBody) as StripeEvent
  } catch {
    return null
  }
}
