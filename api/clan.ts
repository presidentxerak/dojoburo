// LE CLAN · le fil de la communauté, côté serveur.
//
//   GET    /api/clan?cursor=…                 → { ok, posts, next }
//   POST   /api/clan?action=create  { pseudo, title, body, link?, tags? }
//                                             → { ok, post }
//   POST   /api/clan?action=bravo   { id }    → { ok, id, bravoed, bravos }
//   POST   /api/clan?action=report  { id }    → { ok, id, reported, hidden }
//   DELETE /api/clan?id=…                     → { ok, id, deleted }
//
// L'auteur est anonyme : sa clé d'appareil voyage dans l'en-tête
// `x-clan-key` (ou `key` dans le corps), et le serveur n'en garde que
// l'empreinte (voir api/_lib/clan.ts). La lecture l'accepte aussi, facultative,
// pour dire au navigateur lesquels des messages sont les siens et lesquels il a
// déjà salués.
//
// Les refus ont tous la forme { ok:false, error:'…' } des autres fonctions :
//   origin 403 · method 405 · bad_json 400 · too_large 413 · key 400 ·
//   invalid 400 (+ field, reason) · spam 400 (+ reason) · rate 429 ·
//   not_found 404 · own_post 400 · not_configured 503 · unavailable 503.
//
// SANS BASE, LA RÉPONSE LE DIT. Pas de fil inventé, pas de « ok » sur une
// écriture qui ne va nulle part : { ok:false, error:'not_configured' } en 503,
// et la page le dit en toutes lettres. Une base joignable mais sans les tables
// du clan (db/clan.sql pas encore appliqué) répond la même chose.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { originAllowed } from './_lib/origin.js'
import { allow as rateAllow } from './_lib/ratelimit.js'
import {
  LIMITS, RATES, validateDraft, isDeviceKey, isPostId, hashDeviceKey, hashIp, hashBody,
  isDuplicate, decodeCursor, toPage, serializePost, type PostRow,
} from './_lib/clan.js'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
/** Le sel de l'IP hachée · un secret serveur. Sans CLAN_IP_SALT, une autre
 *  valeur secrète du déploiement en tient lieu, jamais une constante publique. */
const IP_SALT = ENV.CLAN_IP_SALT || ENV.CONNECTOR_ENC_KEY || ENV.DATABASE_URL || 'clan'
/** Un message fait au plus mille caractères · le corps n'a pas à peser plus. */
const MAX_BODY = 16 * 1024

type Rate = keyof typeof RATES

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method === 'OPTIONS') return send(res, 204, {})

    // LE MÊME SITE SEULEMENT · une page d'ailleurs ne publie pas au nom d'un élève.
    const origin = header(req, 'origin')
    const host = header(req, 'host')
    if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) return send(res, 403, { ok: false, error: 'origin' })

    const method = req.method || 'GET'
    if (method !== 'GET' && method !== 'POST' && method !== 'DELETE') return send(res, 405, { ok: false, error: 'method' })

    if (!dbConfigured()) return send(res, 503, { ok: false, error: 'not_configured' })

    const url = new URL(req.url || '/', `https://${host || 'localhost'}`)
    const ipHash = await hashIp(clientIp(req), IP_SALT)

    if (method === 'GET') {
      if (!(await limited('list', ipHash))) return send(res, 429, { ok: false, error: 'rate' })
      const key = header(req, 'x-clan-key')
      const viewer = isDeviceKey(key) ? await hashDeviceKey(key) : null
      return await list(res, viewer, decodeCursor(url.searchParams.get('cursor')))
    }

    const body = await readJson(req)
    if (body === BAD) return send(res, 400, { ok: false, error: 'bad_json' })
    if (body === TOO_BIG) return send(res, 413, { ok: false, error: 'too_large' })

    const key = header(req, 'x-clan-key') || (typeof body?.key === 'string' ? body.key : '')
    if (!isDeviceKey(key)) return send(res, 400, { ok: false, error: 'key' })
    const device = await hashDeviceKey(key)

    if (method === 'DELETE') {
      const id = url.searchParams.get('id') || body?.id
      if (!isPostId(id)) return send(res, 400, { ok: false, error: 'invalid', field: 'id', reason: 'format' })
      if (!(await limited('remove', ipHash, device))) return send(res, 429, { ok: false, error: 'rate' })
      return await remove(res, device, id.toLowerCase())
    }

    const action = url.searchParams.get('action') || String(body?.action || '')
    if (action === 'create') return await create(res, device, ipHash, body)
    if (action === 'bravo' || action === 'report') {
      const id = body?.id
      if (!isPostId(id)) return send(res, 400, { ok: false, error: 'invalid', field: 'id', reason: 'format' })
      if (!(await limited(action, ipHash, device))) return send(res, 429, { ok: false, error: 'rate' })
      return action === 'bravo'
        ? await bravo(res, device, id.toLowerCase())
        : await report(res, device, id.toLowerCase())
    }
    return send(res, 400, { ok: false, error: 'unknown_action' })
  } catch (e) {
    // LA BASE EXISTE MAIS PAS LES TABLES · db/clan.sql n'a pas été appliqué.
    // C'est un défaut de configuration, et la page doit le dire comme tel.
    const code = (e as { code?: string })?.code
    if (code === '42P01') return send(res, 503, { ok: false, error: 'not_configured', detail: 'schema' })
    console.error('clan:', (e as Error)?.message || e)
    return send(res, 503, { ok: false, error: 'unavailable' })
  }
}

// ---- les actions ----------------------------------------------------------

const COLS = `p.id, p.author_hash, p.pseudo, p.title, p.body, p.link, p.tags, p.created_at, p.bravos`

async function list(res: ServerResponse, viewer: string | null, cursor: { t: string; id: string } | null): Promise<void> {
  // Le seuil est écrit dans la requête, pas passé en paramètre · c'est ce qui
  // laisse Postgres reconnaître l'index partiel de db/clan.sql.
  const params: unknown[] = [viewer, LIMITS.pageSize + 1]
  let where = `p.reports < ${Number(LIMITS.hideAt)}`
  if (cursor) {
    params.push(cursor.t, cursor.id)
    where += ` and (p.created_at, p.id) < ($3::timestamptz, $4::uuid)`
  }
  const r = await getPool().query<PostRow>(
    `select ${COLS},
            ($1::text is not null and exists (
              select 1 from clan_bravos b where b.post_id = p.id and b.device_hash = $1::text
            )) as bravoed
       from clan_posts p
      where ${where}
      order by p.created_at desc, p.id desc
      limit $2`,
    params,
  )
  return send(res, 200, { ok: true, ...toPage(r.rows, viewer) })
}

async function create(res: ServerResponse, device: string, ipHash: string, body: any): Promise<void> {
  const v = validateDraft(body)
  if (!v.ok) return send(res, 400, v)
  const d = v.draft

  // Le débit après la validation · une faute de frappe ne coûte pas un essai.
  if (!(await limited('post', ipHash, device))) return send(res, 429, { ok: false, error: 'rate' })

  const pool = getPool()
  const bodyHash = await hashBody(d.body)
  const recent = await pool.query<{ body_hash: string; created_at: Date }>(
    `select body_hash, created_at from clan_posts
      where author_hash = $1 and created_at > now() - interval '1 hour'`,
    [device],
  )
  if (isDuplicate(recent.rows.map((r) => ({ bodyHash: r.body_hash, createdAt: r.created_at })), bodyHash)) {
    return send(res, 400, { ok: false, error: 'spam', field: 'body', reason: 'duplicate' })
  }

  const r = await pool.query<PostRow>(
    `insert into clan_posts (author_hash, pseudo, title, body, body_hash, link, tags)
     values ($1, $2, $3, $4, $5, $6, $7)
     returning id, author_hash, pseudo, title, body, link, tags, created_at, bravos`,
    [device, d.pseudo, d.title, d.body, bodyHash, d.link, d.tags],
  )
  return send(res, 201, { ok: true, post: serializePost(r.rows[0], device) })
}

async function bravo(res: ServerResponse, device: string, id: string): Promise<void> {
  const client = await getPool().connect()
  try {
    await client.query('begin')
    const p = await client.query<{ author_hash: string }>(
      `select author_hash from clan_posts where id = $1 and reports < $2 for update`, [id, LIMITS.hideAt])
    if (!p.rowCount) { await client.query('rollback'); return send(res, 404, { ok: false, error: 'not_found' }) }
    if (p.rows[0].author_hash === device) { await client.query('rollback'); return send(res, 400, { ok: false, error: 'own_post' }) }

    // UN BRAVO PAR APPAREIL, ET IL SE RETIRE · le second clic annule le premier.
    const gone = await client.query(`delete from clan_bravos where post_id = $1 and device_hash = $2`, [id, device])
    let bravoed: boolean
    if (gone.rowCount) {
      bravoed = false
      await client.query(`update clan_posts set bravos = greatest(bravos - 1, 0) where id = $1`, [id])
    } else {
      bravoed = true
      await client.query(`insert into clan_bravos (post_id, device_hash) values ($1, $2)`, [id, device])
      await client.query(`update clan_posts set bravos = bravos + 1 where id = $1`, [id])
    }
    const c = await client.query<{ bravos: number }>(`select bravos from clan_posts where id = $1`, [id])
    await client.query('commit')
    return send(res, 200, { ok: true, id, bravoed, bravos: Number(c.rows[0]?.bravos || 0) })
  } catch (e) {
    await client.query('rollback').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}

async function report(res: ServerResponse, device: string, id: string): Promise<void> {
  const client = await getPool().connect()
  try {
    await client.query('begin')
    const p = await client.query<{ author_hash: string; reports: number }>(
      `select author_hash, reports from clan_posts where id = $1 for update`, [id])
    if (!p.rowCount) { await client.query('rollback'); return send(res, 404, { ok: false, error: 'not_found' }) }
    if (p.rows[0].author_hash === device) { await client.query('rollback'); return send(res, 400, { ok: false, error: 'own_post' }) }

    // UN SIGNALEMENT PAR APPAREIL · le second ne compte pas, sans erreur.
    const ins = await client.query(
      `insert into clan_reports (post_id, device_hash) values ($1, $2) on conflict do nothing`, [id, device])
    let reports = Number(p.rows[0].reports) || 0
    if (ins.rowCount) {
      const u = await client.query<{ reports: number }>(
        `update clan_posts set reports = reports + 1 where id = $1 returning reports`, [id])
      reports = Number(u.rows[0]?.reports || reports + 1)
    }
    await client.query('commit')
    return send(res, 200, { ok: true, id, reported: true, hidden: reports >= LIMITS.hideAt })
  } catch (e) {
    await client.query('rollback').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}

async function remove(res: ServerResponse, device: string, id: string): Promise<void> {
  // SEUL L'AUTEUR EFFACE · et un message d'un autre répond « introuvable »,
  // pour ne pas confirmer à qui essaie des clés qu'il existe.
  const r = await getPool().query(`delete from clan_posts where id = $1 and author_hash = $2`, [id, device])
  if (!r.rowCount) return send(res, 404, { ok: false, error: 'not_found' })
  return send(res, 200, { ok: true, id, deleted: true })
}

// ---- le débit ----------------------------------------------------------------

/** Par IP hachée ET par appareil · changer de clé ne suffit pas à repartir. */
async function limited(kind: Rate, ipHash: string, device?: string): Promise<boolean> {
  const { max, windowMs } = RATES[kind]
  if (!(await rateAllow(`clan:${kind}:ip:${ipHash}`, max, windowMs))) return false
  if (device && !(await rateAllow(`clan:${kind}:dev:${device}`, max, windowMs))) return false
  return true
}

// ---- helpers ----------------------------------------------------------------

function header(req: IncomingMessage, name: string): string {
  const v = req.headers?.[name]
  return (Array.isArray(v) ? v[0] : v) || ''
}

function clientIp(req: IncomingMessage): string {
  return header(req, 'x-forwarded-for').split(',')[0].trim() || header(req, 'x-real-ip') || 'anon'
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
    return attached.length > MAX_BODY ? Promise.reject(new Error('too_large')) : Promise.resolve(attached)
  }
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > MAX_BODY) { reject(new Error('too_large')); req.destroy() }
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
