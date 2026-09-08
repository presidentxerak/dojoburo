// Company documents · the endpoint that makes a company shared.
//
//   GET  ?action=index            → [{key, version, updatedAt, deleted}]
//   GET  ?action=pull&since=ISO   → the full documents changed since then
//   POST ?action=push  {key, body, baseVersion, deleted?}
//
// A push says which version it was based on. If the server has moved past it
// the push is REFUSED and the current document comes back, so nothing is
// silently overwritten and the client can show a person both versions.
//
// The browser keeps its own copy in IndexedDB and stays fast and offline; this
// only stops that copy from being the only one. With no database configured the
// endpoint answers { ok:false, error:'no_backend' } and the app carries on
// exactly as it did before — local-first is the fallback, not a broken state.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { resolveAccountId } from './_lib/accounts.js'
import { callerRef } from './_lib/authz.js'
import { ensureOrg, can } from './_lib/orgs.js'
import { index, pull, push, getOne, countDocs, validKey } from './_lib/docs.js'

export const config = { maxDuration: 20 }

/** One document's ceiling. A company document is text and numbers; anything
 *  near this is an asset that belongs in the assets store, not here. */
const MAX_BODY = 400_000
/** Documents per organisation. High enough to be invisible, low enough that a
 *  loop in a client cannot fill the database overnight. */
const MAX_DOCS = 5_000

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const action = url.searchParams.get('action') || 'index'
    if (!dbConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })

    const pool = getPool()
    const raw = req.method === 'POST' ? await readBody(req) : ''
    let body: any = {}
    if (raw) { try { body = JSON.parse(raw) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) } }

    const who = await callerRef(req, {
      privy: url.searchParams.get('privy') || body?.privy,
      client: url.searchParams.get('client') || body?.client,
    })
    if (!who) return json(res, 401, { ok: false, error: 'auth' })

    const accountId = await resolveAccountId(pool, { privyDid: who.privyDid, clientRef: who.clientRef })
    if (!accountId) return json(res, 401, { ok: false, error: 'auth' })

    const me = await ensureOrg(pool, accountId)
    if (!can(me.role, 'readDocs')) return json(res, 403, { ok: false, error: 'forbidden' })

    if (action === 'index') {
      return json(res, 200, { ok: true, org: me.orgId, docs: await index(pool, me.orgId) })
    }

    if (action === 'pull') {
      const since = url.searchParams.get('since')
      const key = url.searchParams.get('key')
      if (key) {
        if (!validKey(key)) return json(res, 400, { ok: false, error: 'bad_key' })
        const one = await getOne(pool, me.orgId, key)
        return json(res, 200, { ok: true, docs: one ? [one] : [] })
      }
      return json(res, 200, { ok: true, docs: await pull(pool, me.orgId, since) })
    }

    if (action === 'push') {
      if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
      if (!can(me.role, 'writeDocs')) return json(res, 403, { ok: false, error: 'read_only' })

      const key = body?.key
      if (!validKey(key)) return json(res, 400, { ok: false, error: 'bad_key' })

      const serialised = JSON.stringify(body?.body ?? null)
      if (serialised.length > MAX_BODY) return json(res, 413, { ok: false, error: 'too_large', max: MAX_BODY })

      const baseVersion = Number(body?.baseVersion ?? 0) || 0
      // Only a NEW key can push an organisation past the cap; an edit to
      // something that already exists must never be refused for being the
      // 5001st document.
      if (baseVersion === 0 && (await countDocs(pool, me.orgId)) >= MAX_DOCS) {
        return json(res, 409, { ok: false, error: 'too_many_docs', max: MAX_DOCS })
      }

      const r = await push(pool, me.orgId, accountId, key, body?.body ?? null, baseVersion, !!body?.deleted)
      if (!r.ok) return json(res, 200, { ok: false, conflict: true, server: r.server })
      return json(res, 200, { ok: true, doc: r.doc })
    }

    return json(res, 200, { ok: false, error: 'bad_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 120) })
  }
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      // the body cap plus room for the envelope
      if (d.length > MAX_BODY + 8000) { reject(new Error('too_large')); req.destroy() }
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
