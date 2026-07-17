// Connector ACTIONS (writes) · the "do something in a connected app" side.
//
//   POST /api/tool-action  { connector, action, ...payload, privy, client }
//     → { ok:true, ... }  |  { ok:false, error }   (never 500)
//
// First action wired: Gmail send — sends a real email from the user's OWN
// connected Gmail (their sealed OAuth token), used by the CRM outreach composer.
// Degrades to { ok:false, error:'not_connected' } when Gmail/DB aren't set up.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { vaultConfigured } from './_lib/vault'
import { findAccountId } from './_lib/accounts'
import { connectionToken } from './_lib/connections'

export const config = { maxDuration: 15 }

// light per-account send throttle (in-memory · best-effort, per lambda instance)
const HITS = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 20
function allow(key: string): boolean {
  const now = Date.now()
  const arr = (HITS.get(key) || []).filter((t) => now - t < WINDOW_MS)
  if (arr.length >= MAX_PER_WINDOW) { HITS.set(key, arr); return false }
  arr.push(now); HITS.set(key, arr); return true
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
    let body: Record<string, unknown>
    try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }
    const connector = String(body.connector || '')
    const action = String(body.action || '')
    if (connector === 'gmail' && action === 'send') return await gmailSend(res, body)
    return json(res, 200, { ok: false, error: 'unknown_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 100) })
  }
}

async function gmailSend(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  if (!dbConfigured() || !vaultConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })
  const to = String(body.to || '').trim()
  const subject = String(body.subject || '').slice(0, 300)
  const text = String(body.body || '').slice(0, 12_000)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return json(res, 200, { ok: false, error: 'bad_to' })
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })

  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: (body.privy as string) || null, clientRef: (body.client as string) || null })
  if (!accountId) return json(res, 200, { ok: false, error: 'no_account' })
  if (!allow(accountId)) return json(res, 200, { ok: false, error: 'rate' })

  const conn = await connectionToken(pool, accountId, 'gmail')
  if (!conn) return json(res, 200, { ok: false, error: 'not_connected' })

  // RFC 822 message · encode a non-ASCII subject per RFC 2047.
  const subjHeader = /[^\x00-\x7F]/.test(subject) ? `=?UTF-8?B?${Buffer.from(subject, 'utf8').toString('base64')}?=` : subject
  const mime = [
    `To: ${to}`,
    `Subject: ${subjHeader}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    text,
  ].join('\r\n')
  const raw = Buffer.from(mime, 'utf8').toString('base64url')

  try {
    const r = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: { authorization: `Bearer ${conn.token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ raw }),
    })
    if (!r.ok) return json(res, 200, { ok: false, error: 'send_failed' })
    const j = await r.json().catch(() => ({}))
    return json(res, 200, { ok: true, id: (j as { id?: string })?.id || null, from: conn.external })
  } catch {
    return json(res, 200, { ok: false, error: 'send_failed' })
  }
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => { d += c.toString('utf8'); if (d.length > 32_000) { reject(new Error('too_large')); req.destroy() } })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
