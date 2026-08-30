// Rate limits that survive a cold start.
//
// The limits were a Map in module scope. On serverless that means: per lambda
// instance, reset on every cold start, and multiplied by however many instances
// are warm — so the real global ceiling was several times the intended one, and
// unknowable. Fine as a speed bump, useless as a spending control.
//
// This puts the counter in a shared store when one is configured (Upstash Redis
// over its REST API, or Vercel KV, which speaks the same protocol), and falls
// back to the in-memory behaviour when it is not. The fallback is the OLD
// behaviour exactly — a deployment with no KV is no worse off than before, and
// one with KV gets a real limit.
//
// Configure with either pair:
//   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
//   KV_REST_API_URL        + KV_REST_API_TOKEN
const ENV = process.env as Record<string, string | undefined>

const URL_ = ENV.UPSTASH_REDIS_REST_URL || ENV.KV_REST_API_URL || ''
const TOKEN = ENV.UPSTASH_REDIS_REST_TOKEN || ENV.KV_REST_API_TOKEN || ''

export const sharedLimiterConfigured = (): boolean => !!(URL_ && TOKEN)

// ---- the in-memory fallback (unchanged behaviour) --------------------------
const local = new Map<string, number[]>()
function allowLocal(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()
  const arr = (local.get(key) || []).filter((t) => now - t < windowMs)
  if (arr.length >= max) { local.set(key, arr); return false }
  arr.push(now)
  local.set(key, arr)
  return true
}

/**
 * One request against a counter.
 *
 * Uses INCR + EXPIRE in a pipeline — a fixed window, which is the right trade
 * here: it is one round trip, it cannot drift, and the edge case (a burst across
 * a window boundary) is not what this is defending against.
 *
 * Any transport failure falls back to the local limiter rather than failing
 * open: a Redis outage must not remove the ceiling, and must not take the API
 * down either.
 */
export async function allow(key: string, max: number, windowMs: number): Promise<boolean> {
  if (!sharedLimiterConfigured()) return allowLocal(key, max, windowMs)

  const seconds = Math.max(1, Math.ceil(windowMs / 1000))
  // one fixed window per bucket, so the key rolls over on its own
  const bucket = `rl:${key}:${Math.floor(Date.now() / windowMs)}`
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), 1500)
  try {
    const r = await fetch(`${URL_.replace(/\/$/, '')}/pipeline`, {
      method: 'POST',
      headers: { authorization: `Bearer ${TOKEN}`, 'content-type': 'application/json' },
      body: JSON.stringify([['INCR', bucket], ['EXPIRE', bucket, String(seconds)]]),
      signal: ctl.signal,
    })
    if (!r.ok) return allowLocal(key, max, windowMs)
    const out = (await r.json()) as { result?: unknown }[]
    const count = Number(out?.[0]?.result ?? 0)
    if (!Number.isFinite(count) || count <= 0) return allowLocal(key, max, windowMs)
    return count <= max
  } catch {
    // unreachable store · keep the ceiling with the local counter
    return allowLocal(key, max, windowMs)
  } finally {
    clearTimeout(t)
  }
}
