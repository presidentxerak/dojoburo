// DojoBuro live settlement endpoint (Vercel Node serverless).
//
// Emits a REAL x402-tagged XRP Payment on SETTLEMENT_NETWORK from the server-held
// hot wallet and returns the tx hash + explorer URL. Called by the app when a
// priced skill runs on Mainnet, so every agent action produces a verifiable
// on-ledger transaction — without any seed ever touching the browser.
//
// When SETTLEMENT_WALLET_SEED is unset it returns { ok:false, error:'not_configured' }
// and the app falls back to its client-side (Testnet) path — nothing breaks.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { settlementConfigured, settlementNetwork, settleX402 } from './_lib/settle'

export const config = { maxDuration: 30 }

const ENV: Record<string, string | undefined> = process.env as any
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const MAX_XRP = num(ENV.SETTLE_MAX_XRP, 5) // safety cap per call

// in-memory rate limit (per instance)
const RATE_MAX = int(ENV.SETTLE_RATE_MAX, 30)
const RATE_WINDOW_MS = int(ENV.SETTLE_RATE_WINDOW_MS, 10 * 60 * 1000)
const hits = new Map<string, number[]>()

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') return send(res, 204, {})
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  // origin lock
  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin) {
    const ok = ALLOWED_ORIGIN ? origin === ALLOWED_ORIGIN : origin.includes(host)
    if (!ok) return send(res, 403, { ok: false, error: 'origin' })
  }
  const ip = (header(req, 'x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return send(res, 429, { ok: false, error: 'rate' })

  if (!settlementConfigured()) return send(res, 200, { ok: false, error: 'not_configured' })

  let body: any
  try {
    body = JSON.parse(await readBody(req))
  } catch {
    return send(res, 400, { ok: false, error: 'bad_json' })
  }
  const skill = String(body?.skill || 'skill').slice(0, 60)
  const invoice = String(body?.invoice || `SKL-${skill}`).slice(0, 80)
  const note = body?.note ? String(body.note).slice(0, 80) : undefined
  let amountXrp = Number(body?.amountXrp)
  if (!Number.isFinite(amountXrp) || amountXrp <= 0) amountXrp = 0.15
  amountXrp = Math.min(amountXrp, MAX_XRP)
  // optional destination must be a plausible classic address, else self-pay
  const destination = typeof body?.destination === 'string' && /^r[1-9A-HJ-NP-Za-km-z]{24,35}$/.test(body.destination) ? body.destination : undefined

  try {
    const r = await settleX402({ skill, invoice, amountXrp, note, destination })
    return send(res, 200, {
      ok: r.result === 'tesSUCCESS' && r.validated,
      hash: r.hash,
      result: r.result,
      network: r.network,
      explorerUrl: r.explorerUrl,
      from: r.from,
      to: r.to,
      amountXrp: r.amountXrp,
    })
  } catch (e: any) {
    return send(res, 200, { ok: false, error: 'settle_failed', detail: String(e?.message || e).slice(0, 140), network: settlementNetwork() })
  }
}

// ---- helpers --------------------------------------------------------------
function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return false }
  arr.push(now); hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}
function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}
function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => { d += c.toString('utf8'); if (d.length > 4000) { reject(new Error('too_large')); req.destroy() } })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function int(v: string | undefined, d: number): number { const n = v ? parseInt(v, 10) : NaN; return Number.isFinite(n) ? n : d }
function num(v: string | undefined, d: number): number { const n = v ? Number(v) : NaN; return Number.isFinite(n) ? n : d }
function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  if (ALLOWED_ORIGIN) { res.setHeader('access-control-allow-origin', ALLOWED_ORIGIN); res.setHeader('access-control-allow-methods', 'POST, OPTIONS'); res.setHeader('access-control-allow-headers', 'content-type') }
  res.end(JSON.stringify(body))
}
