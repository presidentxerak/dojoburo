// DojoBuro team roles — share ONE dojo's encrypted vault with teammates.
//
//   ?action=list   GET  &privy=&client=&dojo=      → { members:[{id,email,role,claimed,addedAt}], role, claimReady }
//   ?action=add    POST {privy,client,dojo,member,role} → add by email (claimed later,
//                       Privy-verified) or directly by did:privy:… · owner only
//   ?action=remove POST {privy,client,dojo,id}         → revoke a seat · owner only
//
// Roles: 'admin' manages the dojo's secrets · 'viewer' sees names + audit only.
// Members must sign in with Privy — a seat added by email is claimed the first
// time a verified user whose Privy account owns that email touches the dojo
// (checked against the Privy API with PRIVY_APP_SECRET, never a client string).
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { resolveAccountId, findAccountId } from './_lib/accounts'
import { verifiedRef } from './_lib/privyAuth'
import { resolveDojoAccess, teamClaimConfigured } from './_lib/teamAccess'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const RATE_MAX = Number(ENV.SECRETS_RATE_MAX) > 0 ? Number(ENV.SECRETS_RATE_MAX) : 30
const RATE_WINDOW_MS = Number(ENV.SECRETS_RATE_WINDOW_MS) > 0 ? Number(ENV.SECRETS_RATE_WINDOW_MS) : 60_000
const HITS = new Map<string, number[]>()
function allow(key: string): boolean {
  const now = Date.now()
  const arr = (HITS.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { HITS.set(key, arr); return false }
  arr.push(now); HITS.set(key, arr); return true
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const action = url.searchParams.get('action') || ''
    if (!dbConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })
    const ip = (String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()) || 'anon'
    if (!allow(`ip:${ip}`)) return json(res, 429, { ok: false, error: 'rate' })

    if (action === 'list') return await list(req, res, url.searchParams)
    if (action === 'add') return await add(req, res)
    if (action === 'remove') return await remove(req, res)
    return json(res, 200, { ok: false, error: 'bad_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 120) })
  }
}

async function list(req: IncomingMessage, res: ServerResponse, q: URLSearchParams): Promise<void> {
  const dojo = String(q.get('dojo') || '').slice(0, 80)
  const vr = await verifiedRef(req, q.get('privy'), q.get('client'))
  if (!vr.ok) return json(res, 200, { ok: false, error: 'auth' })
  if (!dojo) return json(res, 200, { ok: true, members: [], role: 'owner', claimReady: teamClaimConfigured() })
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: vr.ref.privy, clientRef: vr.ref.client })
    const access = await resolveDojoAccess(pool, accountId, vr.ref.privy, dojo)
    if (!access) return json(res, 200, { ok: true, members: [], role: 'owner', claimReady: teamClaimConfigured() })
    const r = await pool.query(
      `select id, member_email, member_did, role, created_at from dojo_team
        where owner_account_id = $1 and dojo_id = $2 order by created_at`,
      [access.accountId, dojo],
    )
    const members = r.rows.map((row) => ({
      id: row.id,
      email: row.member_email,
      role: row.role,
      claimed: !!row.member_did,
      addedAt: row.created_at,
    }))
    return json(res, 200, { ok: true, members, role: access.role, claimReady: teamClaimConfigured() })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

async function add(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
  let body: any
  try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }
  const dojo = String(body?.dojo || '').slice(0, 80)
  const member = String(body?.member || '').trim().toLowerCase().slice(0, 200)
  const role = body?.role === 'admin' ? 'admin' : 'viewer'
  const isDid = member.startsWith('did:privy:')
  const isEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(member)
  if (!dojo || (!isDid && !isEmail)) return json(res, 200, { ok: false, error: 'bad_input' })

  const vr = await verifiedRef(req, body?.privy, body?.client, body?.privyToken)
  if (!vr.ok) return json(res, 200, { ok: false, error: 'auth' })
  try {
    const pool = getPool()
    const accountId = await resolveAccountId(pool, { privyDid: vr.ref.privy, clientRef: vr.ref.client })
    if (!accountId) return json(res, 200, { ok: false, error: 'no_account' })
    const access = await resolveDojoAccess(pool, accountId, vr.ref.privy, dojo)
    if (!access || access.role !== 'owner') return json(res, 200, { ok: false, error: 'forbidden' })
    // seats per dojo are capped · this is a small-team feature, not an org tree
    const count = await pool.query(`select count(*)::int as n from dojo_team where owner_account_id = $1 and dojo_id = $2`, [access.accountId, dojo])
    if ((count.rows[0]?.n ?? 0) >= 20) return json(res, 200, { ok: false, error: 'too_many' })
    const r = await pool.query(
      `insert into dojo_team (owner_account_id, dojo_id, member_email, member_did, role)
       values ($1,$2,$3,$4,$5)
       on conflict (owner_account_id, dojo_id, member_email) do update set role = excluded.role
       returning id, member_email, member_did, role, created_at`,
      [access.accountId, dojo, isDid ? member : member, isDid ? member : null, role],
    )
    const row = r.rows[0]
    return json(res, 200, {
      ok: true,
      member: { id: row.id, email: row.member_email, role: row.role, claimed: !!row.member_did, addedAt: row.created_at },
      // email seats need the Privy API secret so the claim can be verified
      claimReady: isDid || teamClaimConfigured(),
    })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

async function remove(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
  let body: any
  try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }
  const dojo = String(body?.dojo || '').slice(0, 80)
  const id = String(body?.id || '')
  if (!dojo || !id) return json(res, 200, { ok: false, error: 'bad_input' })
  const vr = await verifiedRef(req, body?.privy, body?.client, body?.privyToken)
  if (!vr.ok) return json(res, 200, { ok: false, error: 'auth' })
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: vr.ref.privy, clientRef: vr.ref.client })
    const access = await resolveDojoAccess(pool, accountId, vr.ref.privy, dojo)
    if (!access || access.role !== 'owner') return json(res, 200, { ok: false, error: 'forbidden' })
    await pool.query(`delete from dojo_team where id = $1 and owner_account_id = $2 and dojo_id = $3`, [id, access.accountId, dojo])
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
      if (d.length > 8000) { reject(new Error('too_large')); req.destroy() }
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
