// LE PROFIL DU JOUEUR · la sauvegarde en ligne, côté serveur.
//
//   GET  /api/profile                        → { ok, data, access, updatedAt }
//   PUT  /api/profile               { data } → { ok, data, access, updatedAt }
//   POST /api/profile?action=sync   { data } → (la même chose que PUT)
//   POST /api/profile?action=claim  { session_id }
//                                            → { ok, access, claimed }
//
// TOUT APPEL EST AUTHENTIFIÉ · `Authorization: Bearer <jeton d'accès Privy>`,
// vérifié par verifyPrivyToken (api/_lib/authz.ts). Le compte est le `sub` du
// jeton, jamais une valeur envoyée par le navigateur.
//
// LA FUSION est dans api/_lib/profile.ts : l'union des leçons terminées, la
// partie de Dojoburo la plus avancée prise entière, le pseudonyme le plus
// récent. L'ACCÈS n'est jamais lu dans ce que le client envoie : il ne vient
// que d'un paiement Stripe relu ici (?action=claim), et une session de
// paiement n'ouvre qu'un seul compte.
//
// Les refus ont tous la forme { ok:false, error:'…' } des autres fonctions :
//   origin 403 · method 405 · auth 401 · bad_json 400 · too_large 413 ·
//   invalid 400 · session 400 · not_paid 402 · claimed 409 · rate 429 ·
//   not_configured 503 (+ detail db | auth | stripe | schema) · unavailable 503.
//
// SANS BASE, LA RÉPONSE LE DIT, en 503 · et une base joignable sans les tables
// (db/profile.sql pas encore appliqué) répond la même chose, jamais un 500.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { createHash } from 'node:crypto'
import { getPool, dbConfigured } from './_lib/db.js'
import { originAllowed } from './_lib/origin.js'
import { allow as rateAllow } from './_lib/ratelimit.js'
import { verifyPrivyToken, privyEnabled } from './_lib/authz.js'
import { isCheckoutSessionId, verifyCheckoutSession } from './_lib/checkoutSession.js'
import {
  LIMITS, RATES, validateBlob, mergeProfiles, cleanData, cleanAccess, grantOf, applyGrant,
  decideClaim, serializeProfile, type ProfileRow,
} from './_lib/profile.js'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const STRIPE_TIMEOUT_MS = 12000

type Rate = keyof typeof RATES

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method === 'OPTIONS') return send(res, 204, {})

    // LE MÊME SITE SEULEMENT · une page d'ailleurs ne lit ni n'écrit un profil.
    const origin = header(req, 'origin')
    const host = header(req, 'host')
    if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) return send(res, 403, { ok: false, error: 'origin' })

    const method = req.method || 'GET'
    if (method !== 'GET' && method !== 'PUT' && method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

    // CE QUI MANQUE AU DÉPLOIEMENT, dit comme tel · sans base, ou sans Privy
    // côté serveur (aucun jeton ne pourrait être vérifié), rien ne se sauvegarde.
    if (!dbConfigured()) return send(res, 503, { ok: false, error: 'not_configured', detail: 'db' })
    if (!privyEnabled()) return send(res, 503, { ok: false, error: 'not_configured', detail: 'auth' })

    if (!(await rateAllow(`profile:ip:${ipHash(req)}`, RATES.ip.max, RATES.ip.windowMs))) {
      return send(res, 429, { ok: false, error: 'rate' })
    }

    // QUI APPELLE · prouvé par le jeton, sinon personne.
    const did = await verifyPrivyToken(bearer(req))
    if (!did) return send(res, 401, { ok: false, error: 'auth' })

    const url = new URL(req.url || '/', `https://${host || 'localhost'}`)
    const action = url.searchParams.get('action') || ''

    if (method === 'GET') {
      if (!(await limited('read', did))) return send(res, 429, { ok: false, error: 'rate' })
      return await read(res, did)
    }

    const body = await readJson(req)
    if (body === BAD) return send(res, 400, { ok: false, error: 'bad_json' })
    if (body === TOO_BIG) return send(res, 413, { ok: false, error: 'too_large' })

    if (method === 'PUT' || action === 'sync') {
      if (!(await limited('sync', did))) return send(res, 429, { ok: false, error: 'rate' })
      return await sync(res, did, body?.data)
    }
    if (action === 'claim') {
      const id = body?.session_id
      if (!isCheckoutSessionId(id) || id.length > 255) return send(res, 400, { ok: false, error: 'session' })
      if (!(await limited('claim', did))) return send(res, 429, { ok: false, error: 'rate' })
      return await claim(res, did, id)
    }
    return send(res, 400, { ok: false, error: 'unknown_action' })
  } catch (e) {
    // LA BASE EXISTE MAIS PAS LES TABLES · db/profile.sql n'a pas été appliqué.
    const code = (e as { code?: string })?.code
    if (code === '42P01') return send(res, 503, { ok: false, error: 'not_configured', detail: 'schema' })
    console.error('profile:', (e as Error)?.message || e)
    return send(res, 503, { ok: false, error: 'unavailable' })
  }
}

// ---- les actions ----------------------------------------------------------

async function read(res: ServerResponse, did: string): Promise<void> {
  const r = await getPool().query<ProfileRow>(
    `select data, access, updated_at from game_profiles where user_did = $1`, [did])
  return send(res, 200, { ok: true, ...serializeProfile(r.rows[0]) })
}

async function sync(res: ServerResponse, did: string, raw: unknown): Promise<void> {
  const v = validateBlob(raw)
  if (!v.ok) return send(res, v.error === 'too_large' ? 413 : 400, v)

  const client = await getPool().connect()
  try {
    await client.query('begin')
    // La ligne verrouillée · deux appareils qui synchronisent en même temps
    // fusionnent l'un après l'autre, jamais l'un par-dessus l'autre.
    const cur = await client.query<ProfileRow>(
      `select data, access, updated_at from game_profiles where user_did = $1 for update`, [did])
    const merged = mergeProfiles(cleanData(cur.rows[0]?.data), v.data)
    // L'ACCÈS N'EST PAS DANS CETTE ÉCRITURE · il ne change que par un paiement.
    const w = await client.query<ProfileRow>(
      `insert into game_profiles (user_did, data) values ($1, $2::jsonb)
       on conflict (user_did) do update set data = excluded.data, updated_at = now()
       returning data, access, updated_at`,
      [did, JSON.stringify(merged)],
    )
    await client.query('commit')
    return send(res, 200, { ok: true, ...serializeProfile(w.rows[0]) })
  } catch (e) {
    await client.query('rollback').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}

async function claim(res: ServerResponse, did: string, sessionId: string): Promise<void> {
  const key = ENV.STRIPE_SECRET_KEY
  if (!key) return send(res, 503, { ok: false, error: 'not_configured', detail: 'stripe' })

  // LE PAIEMENT EST RELU CHEZ STRIPE · jamais cru sur parole.
  const verdict = await verifyCheckoutSession(sessionId, key, STRIPE_TIMEOUT_MS)
  if (!verdict) return send(res, 503, { ok: false, error: 'unavailable', detail: 'stripe' })
  if (!verdict.paid) return send(res, 402, { ok: false, error: 'not_paid' })
  const grant = grantOf(verdict)
  if (!grant) return send(res, 400, { ok: false, error: 'invalid', reason: 'plan' })

  const client = await getPool().connect()
  try {
    await client.query('begin')
    // UNE SESSION, UN COMPTE · la clé primaire tranche une course entre deux
    // comptes : le second insert ne fait rien, et la lecture qui suit dit qui
    // l'a emporté.
    const ins = await client.query(
      `insert into game_profile_claims (session_id, user_did, grant_json) values ($1, $2, $3::jsonb)
       on conflict (session_id) do nothing`,
      [sessionId, did, JSON.stringify(grant)],
    )
    // Inscrite à l'instant · sinon, la ligne existante dit à qui elle est.
    let who: 'new' | 'mine' | 'other' = 'new'
    if (!ins.rowCount) {
      const owner = await client.query<{ user_did: string }>(
        `select user_did from game_profile_claims where session_id = $1`, [sessionId])
      who = decideClaim(owner.rows[0]?.user_did, did)
    }
    if (who === 'other') {
      await client.query('rollback')
      return send(res, 409, { ok: false, error: 'claimed' })
    }
    const cur = await client.query<{ access: unknown }>(
      `select access from game_profiles where user_did = $1 for update`, [did])
    const access = applyGrant(cleanAccess(cur.rows[0]?.access), grant)
    await client.query(
      `insert into game_profiles (user_did, access) values ($1, $2::jsonb)
       on conflict (user_did) do update set access = excluded.access, updated_at = now()`,
      [did, JSON.stringify(access)],
    )
    await client.query('commit')
    return send(res, 200, { ok: true, access, claimed: who === 'new' ? 'new' : 'already' })
  } catch (e) {
    await client.query('rollback').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}

// ---- le débit ----------------------------------------------------------------

async function limited(kind: Rate, did: string): Promise<boolean> {
  const { max, windowMs } = RATES[kind]
  return rateAllow(`profile:${kind}:${hash(did)}`, max, windowMs)
}

// ---- helpers ----------------------------------------------------------------

const hash = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 32)

function ipHash(req: IncomingMessage): string {
  const ip = header(req, 'x-forwarded-for').split(',')[0].trim() || header(req, 'x-real-ip') || 'anon'
  return hash(`profile:ip:${ip}`)
}

function header(req: IncomingMessage, name: string): string {
  const v = req.headers?.[name]
  return (Array.isArray(v) ? v[0] : v) || ''
}

function bearer(req: IncomingMessage): string {
  const m = /^Bearer\s+(.+)$/i.exec(header(req, 'authorization').trim())
  return m ? m[1].trim() : ''
}

const BAD = Symbol('bad_json')
const TOO_BIG = Symbol('too_large')

async function readJson(req: IncomingMessage): Promise<any> {
  try {
    const raw = await readBody(req)
    return raw ? JSON.parse(raw) : {}
  } catch (e) {
    return (e as Error)?.message === 'too_large' ? TOO_BIG : BAD
  }
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') {
    return attached.length > LIMITS.bodyBytes ? Promise.reject(new Error('too_large')) : Promise.resolve(attached)
  }
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > LIMITS.bodyBytes) { reject(new Error('too_large')); req.destroy() }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}

function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(status === 204 ? '' : JSON.stringify(body))
}
