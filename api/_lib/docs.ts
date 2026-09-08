// Company documents, shared across an organisation.
//
// `key` is the same key the browser uses in its IndexedDB `projects` store, so
// both sides address the same thing and there is no mapping to drift.
//
// Concurrency is optimistic and honest. A push says which version it was based
// on; if the server has moved past it, the push is REFUSED and the caller is
// handed the newer document. Nothing is merged automatically and nothing is
// silently overwritten — the client decides, with both versions in hand.
//
// Every replaced version is kept in org_doc_revisions, so a colleague who
// overwrites your afternoon has not destroyed it.
import type { Pool } from 'pg'

export interface DocMeta { key: string; version: number; updatedAt: string; updatedBy: string | null; deleted: boolean }
export interface Doc extends DocMeta { body: unknown }

/** A document key: the app's own store keys, and nothing that could be a path. */
export const validKey = (k: unknown): k is string =>
  typeof k === 'string' && k.length > 0 && k.length <= 200 && /^[A-Za-z0-9._:-]+$/.test(k)

/** Everything touched since `since` (an ISO timestamp), newest first. */
export async function pull(pool: Pool, orgId: string, since?: string | null, limit = 500): Promise<Doc[]> {
  const args: unknown[] = [orgId]
  let where = 'org_id = $1'
  if (since) { args.push(since); where += ` and updated_at > $${args.length}` }
  args.push(Math.min(Math.max(limit, 1), 1000))
  const r = await pool.query(
    `select key, body, version, updated_at, updated_by, deleted_at
       from org_docs where ${where}
      order by updated_at desc limit $${args.length}`,
    args,
  )
  return r.rows.map(row)
}

/** The metadata of every document, without the bodies · what a sync compares. */
export async function index(pool: Pool, orgId: string): Promise<DocMeta[]> {
  const r = await pool.query(
    `select key, version, updated_at, updated_by, deleted_at
       from org_docs where org_id = $1 order by updated_at desc limit 2000`,
    [orgId],
  )
  return r.rows.map((m) => ({
    key: m.key,
    version: Number(m.version),
    updatedAt: m.updated_at.toISOString(),
    updatedBy: m.updated_by,
    deleted: !!m.deleted_at,
  }))
}

export async function getOne(pool: Pool, orgId: string, key: string): Promise<Doc | null> {
  const r = await pool.query(
    `select key, body, version, updated_at, updated_by, deleted_at
       from org_docs where org_id = $1 and key = $2`,
    [orgId, key],
  )
  return r.rows[0] ? row(r.rows[0]) : null
}

export type PushResult =
  | { ok: true; doc: Doc }
  | { ok: false; conflict: true; server: Doc }

/**
 * Write a document.
 *
 * `baseVersion` is the version the caller edited. 0 means "I believe this is
 * new". A mismatch is a conflict, not an error: the current server document
 * comes back so the client can show both and let a person choose.
 */
export async function push(
  pool: Pool,
  orgId: string,
  accountId: string,
  key: string,
  body: unknown,
  baseVersion: number,
  deleted = false,
): Promise<PushResult> {
  const c = await pool.connect()
  try {
    await c.query('begin')
    const cur = await c.query(
      `select key, body, version, updated_at, updated_by, deleted_at
         from org_docs where org_id = $1 and key = $2 for update`,
      [orgId, key],
    )

    if (!cur.rows[0]) {
      // A first write always wins, whatever baseVersion claims: two clients
      // creating the same key is not a conflict worth a dialog, and the row lock
      // above means only one of them gets here first anyway.
      const ins = await c.query(
        `insert into org_docs (org_id, key, body, version, updated_by, deleted_at)
         values ($1, $2, $3, 1, $4, $5)
         returning key, body, version, updated_at, updated_by, deleted_at`,
        [orgId, key, JSON.stringify(body ?? null), accountId, deleted ? new Date() : null],
      )
      await c.query('commit')
      return { ok: true, doc: row(ins.rows[0]) }
    }

    const server = row(cur.rows[0])
    if (Number(baseVersion) !== server.version) {
      await c.query('commit')
      return { ok: false, conflict: true, server }
    }

    // keep what we are about to replace
    await c.query(
      `insert into org_doc_revisions (org_id, key, body, version, updated_by, updated_at)
       values ($1, $2, $3, $4, $5, $6)`,
      [orgId, key, JSON.stringify(server.body ?? null), server.version, server.updatedBy, server.updatedAt],
    )
    const up = await c.query(
      `update org_docs
          set body = $3, version = version + 1, updated_by = $4,
              updated_at = now(), deleted_at = $5
        where org_id = $1 and key = $2
        returning key, body, version, updated_at, updated_by, deleted_at`,
      [orgId, key, JSON.stringify(body ?? null), accountId, deleted ? new Date() : null],
    )
    await c.query('commit')
    return { ok: true, doc: row(up.rows[0]) }
  } catch (e) {
    try { await c.query('rollback') } catch { /* going away */ }
    throw e
  } finally {
    c.release()
  }
}

/** How many documents an organisation holds · the cap a plan is measured against. */
export async function countDocs(pool: Pool, orgId: string): Promise<number> {
  const r = await pool.query(`select count(*)::int as n from org_docs where org_id = $1`, [orgId])
  return r.rows[0].n as number
}

interface Row { key: string; body: unknown; version: string | number; updated_at: Date | string; updated_by: string | null; deleted_at: Date | string | null }
const row = (r: Row): Doc => ({
  key: r.key,
  body: r.body,
  version: Number(r.version),
  updatedAt: typeof r.updated_at === 'string' ? r.updated_at : r.updated_at.toISOString(),
  updatedBy: r.updated_by,
  deleted: !!r.deleted_at,
})
