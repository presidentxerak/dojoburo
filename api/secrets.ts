// DojoBuro company secrets (env vars) endpoint — the encrypted server vault.
//
// One URL (/api/secrets) with ?action= :
//   ?action=list   GET  &privy=&client=&dojo=  → [{id,name,preview,description,updatedAt}]  (NEVER the value)
//   ?action=save   POST {privy,client,dojo,name,value,description}  → seal(value) + upsert
//   ?action=remove POST {privy,client,dojo,id}                      → delete
//
// The plaintext value is sealed with AES-256-GCM (api/_lib/vault.ts) before it
// touches the DB and is never returned to the browser — the client only ever
// sees the name and a short masked preview. Requires DATABASE_URL,
// CONNECTOR_ENC_KEY, and db/secrets.sql applied.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { resolveAccountId, findAccountId } from './_lib/accounts'
import { seal, vaultConfigured } from './_lib/vault'

export const config = { maxDuration: 15 }

// a valid POSIX env var name: A-Z, 0-9, underscore; can't start with a digit
const normalizeName = (s: string) =>
  String(s || '').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_').replace(/^([0-9])/, '_$1').slice(0, 48)

const previewOf = (value: string) => '••••' + value.slice(-4)

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
  const action = url.searchParams.get('action') || ''

  if (!dbConfigured() || !vaultConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })

  if (action === 'list') return list(req, res, url.searchParams)
  if (action === 'save') return save(req, res)
  if (action === 'remove') return remove(req, res)
  return json(res, 400, { ok: false, error: 'bad_action' })
}

async function list(_req: IncomingMessage, res: ServerResponse, q: URLSearchParams): Promise<void> {
  const dojo = String(q.get('dojo') || '').slice(0, 80)
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
    if (!accountId || !dojo) return json(res, 200, { ok: true, secrets: [] })
    const r = await pool.query(
      `select id, name, preview, description, updated_at
         from company_secrets where account_id = $1 and dojo_id = $2 order by name`,
      [accountId, dojo],
    )
    // NB: value_enc is deliberately NOT selected — the plaintext never leaves the server.
    const secrets = r.rows.map((row) => ({ id: row.id, name: row.name, preview: row.preview, description: row.description, updatedAt: row.updated_at }))
    return json(res, 200, { ok: true, secrets })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

async function save(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
  let body: any
  try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }

  const dojo = String(body?.dojo || '').slice(0, 80)
  const name = normalizeName(body?.name)
  const value = String(body?.value || '')
  const description = String(body?.description || '').slice(0, 200)
  if (!dojo || !name || !value.trim()) return json(res, 200, { ok: false, error: 'bad_input' })
  if (value.length > 8000) return json(res, 200, { ok: false, error: 'too_large' })

  try {
    const pool = getPool()
    const accountId = await resolveAccountId(pool, { privyDid: body?.privy || null, clientRef: body?.client || null })
    if (!accountId) return json(res, 200, { ok: false, error: 'no_account' })
    const preview = previewOf(value)
    const r = await pool.query(
      `insert into company_secrets (account_id, dojo_id, name, value_enc, preview, description, updated_at)
       values ($1,$2,$3,$4,$5,$6, now())
       on conflict (account_id, dojo_id, name) do update set
         value_enc = excluded.value_enc, preview = excluded.preview,
         description = excluded.description, updated_at = now()
       returning id, name, preview, description, updated_at`,
      [accountId, dojo, name, seal(value), preview, description],
    )
    const row = r.rows[0]
    return json(res, 200, { ok: true, secret: { id: row.id, name: row.name, preview: row.preview, description: row.description, updatedAt: row.updated_at } })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

async function remove(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
  let body: any
  try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }
  const id = String(body?.id || '')
  const dojo = String(body?.dojo || '').slice(0, 80)
  if (!id) return json(res, 200, { ok: false, error: 'bad_input' })
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: body?.privy, clientRef: body?.client })
    if (accountId) await pool.query(`delete from company_secrets where id = $1 and account_id = $2 and dojo_id = $3`, [id, accountId, dojo])
    return json(res, 200, { ok: true })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

// ---- helpers --------------------------------------------------------------
function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > 16000) { reject(new Error('too_large')); req.destroy() }
    })
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
