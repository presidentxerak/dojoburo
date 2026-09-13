// Les documents de l'entreprise · l'unique porte d'entrée.
//
//   GET  ?action=spaces                          → les espaces documentaires
//   GET  ?action=documents&space=…               → ce qui est déposé, et son état
//   GET  ?action=search&q=…&space=…&k=…          → des passages, avec leur page
//   GET  ?action=ask&q=…&space=…                 → une réponse sourcée, ou un refus
//   GET  ?action=holdings                        → ce qu'on détient · RGPD art. 15
//   GET  ?action=processing                      → le registre des traitements · art. 30
//   POST ?action=space     {name, retentionDays} → crée un espace
//   POST ?action=ingest    {space, filename, contentBase64} → dépose et indexe
//   POST ?action=extract   {docId, schema}       → un enregistrement, chaque champ sourcé
//   POST ?action=embed     {space}               → rattrape la vectorisation
//   POST ?action=erase     {docId}               → efface réellement · art. 17
//
// Deux règles tenues partout dans ce fichier :
//
//   · L'organisation vient du COMPTE authentifié, jamais de la requête. Aucun
//     paramètre de ce fichier ne peut désigner l'organisation d'un autre, et
//     c'est ce qui rend le cloisonnement vrai plutôt que déclaré.
//
//   · Ce qui coûte un appel à un modèle est compté sur l'allocation du plan ;
//     ce qui tourne sur la machine — analyser un fichier, chercher un passage —
//     ne l'est pas. Facturer une recherche lexicale qui ne sort de nulle part
//     serait facturer l'électricité de l'opérateur.
//
// Comme partout ailleurs, une base absente rend { ok:false, error:'no_backend' }
// et non une erreur 500 : un déploiement sans Postgres reste une application
// solo qui fonctionne.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { resolveAccountId } from './_lib/accounts.js'
import { callerRef } from './_lib/authz.js'
import { ensureOrg, can } from './_lib/orgs.js'
import { standingOf } from './_lib/entitlements.js'
import { processingRecord, residency, hasEuProvider } from './_lib/eu.js'
import {
  listSpaces, ensureSpace, ingest, listDocuments, eraseDocument, holdings, logQuery,
} from './_lib/rag/store.js'
import { search } from './_lib/rag/search.js'
import { embedQuery, embedPending, embedStatus } from './_lib/rag/embed.js'
import { ask } from './_lib/rag/answer.js'
import { extract, normaliseSchema } from './_lib/rag/extract.js'

export const config = { maxDuration: 60 }

/** Ce qu'un seul dépôt peut peser · au-delà, le fichier se découpe en amont. */
const MAX_UPLOAD = Number(process.env.RAG_MAX_UPLOAD_BYTES || 12 * 1024 * 1024)
const MAX_BODY = MAX_UPLOAD + (MAX_UPLOAD >> 1) + 4096   // base64 pèse un tiers de plus

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const action = url.searchParams.get('action') || 'spaces'
    if (!dbConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })

    const pool = getPool()

    // La purge par durée de conservation n'a pas d'utilisateur : elle est
    // déclenchée par l'ordonnanceur, pas par quelqu'un. Elle passe donc avant
    // l'authentification, derrière un secret partagé — et si ce secret n'est pas
    // posé, elle est simplement absente plutôt qu'ouverte.
    if (action === 'retention') {
      const secret = process.env.CRON_SECRET
      const given = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '')
      if (!secret || given !== secret) return json(res, 404, { ok: false, error: 'not_found' })
      const r = await pool.query(`select rag_apply_retention() as n`)
      return json(res, 200, { ok: true, erased: Number(r.rows[0]?.n || 0) })
    }

    const body = req.method === 'POST' ? await readJson(req) : {}
    if (body === BAD) return json(res, 400, { ok: false, error: 'bad_json' })
    if (body === TOO_BIG) return json(res, 413, { ok: false, error: 'too_large' })

    const who = await callerRef(req, {
      privy: url.searchParams.get('privy') || body?.privy,
      client: url.searchParams.get('client') || body?.client,
    })
    if (!who) return json(res, 401, { ok: false, error: 'auth' })

    const accountId = await resolveAccountId(pool, { privyDid: who.privyDid, clientRef: who.clientRef })
    if (!accountId) return json(res, 401, { ok: false, error: 'auth' })

    const me = await ensureOrg(pool, accountId)
    const orgId = me.orgId
    const spaceParam = (v: unknown): string | null => {
      const s = String(v ?? '').trim()
      return /^[0-9a-f-]{36}$/i.test(s) ? s : null
    }

    // ---- lecture ----------------------------------------------------------

    if (action === 'spaces') {
      return json(res, 200, {
        ok: true,
        spaces: await listSpaces(pool, orgId),
        residency: residency(),
        embeddings: embedStatus(),
        // pour que l'interface puisse dire « lexical seul » sans le deviner
        semantic: hasEuProvider(),
      })
    }

    if (action === 'documents') {
      return json(res, 200, {
        ok: true, documents: await listDocuments(pool, orgId, spaceParam(url.searchParams.get('space'))),
      })
    }

    if (action === 'holdings') {
      // RGPD art. 15 · ce que l'entreprise détient, en un appel, sans nous écrire.
      return json(res, 200, { ok: true, holdings: await holdings(pool, orgId), residency: residency() })
    }

    if (action === 'processing') {
      // RGPD art. 30 · engendré depuis la table qui décide du routage, donc le
      // document et le comportement ne peuvent pas diverger.
      return json(res, 200, { ok: true, record: processingRecord() })
    }

    if (action === 'search' || action === 'ask') {
      const q = String(url.searchParams.get('q') || '').trim()
      if (!q) return json(res, 400, { ok: false, error: 'no_query' })
      const spaceId = spaceParam(url.searchParams.get('space'))
      const t0 = Date.now()

      const vec = await embedQuery(q).catch(() => null)
      const passages = await search(pool, orgId, q, {
        spaceId,
        topK: Math.min(20, Math.max(1, Number(url.searchParams.get('k')) || (action === 'ask' ? 8 : 10))),
        queryVector: vec?.vector ?? null,
        embedModel: vec?.tag ?? null,
      })

      if (action === 'search') {
        // Purement local : rien n'est sorti, rien n'est compté.
        await logQuery(pool, {
          orgId, spaceId, accountId, kind: 'search', question: q,
          docIds: unique(passages.map((p) => p.docId)), ms: Date.now() - t0,
        })
        return json(res, 200, { ok: true, passages, mode: vec ? 'hybride' : 'lexical' })
      }

      // `ask` appelle un modèle · c'est là que l'allocation se vérifie.
      const gate = await allowed(pool, accountId)
      if (!gate.ok) return json(res, 200, { ok: false, error: 'quota', reason: gate.reason, plan: gate.plan })

      const answer = await ask(q, passages)
      await logQuery(pool, {
        orgId, spaceId, accountId, kind: 'ask', question: q,
        docIds: unique(passages.map((p) => p.docId)),
        answeredBy: answer.answeredBy, answeredRegion: answer.answeredRegion, ms: Date.now() - t0,
      })
      if (answer.answeredBy) await meter(pool, accountId)
      return json(res, 200, { ok: true, answer, passages })
    }

    // ---- écriture ---------------------------------------------------------

    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })

    // Un lecteur cherche et interroge ; il ne change pas ce que la société
    // détient. Effacer est mis un cran au-dessus du reste, et c'est volontaire :
    // un dépôt raté se corrige, un effacement est définitif par construction —
    // c'est précisément ce qu'on lui demande d'être.
    if (['space', 'ingest', 'embed'].includes(action) && !can(me.role, 'writeDocs')) {
      return json(res, 403, { ok: false, error: 'forbidden' })
    }
    if (action === 'erase' && !can(me.role, 'rename')) {
      return json(res, 403, { ok: false, error: 'forbidden' })
    }

    if (action === 'space') {
      const days = Number(body?.retentionDays)
      const id = await ensureSpace(
        pool, orgId, String(body?.name || ''), accountId,
        Number.isFinite(days) && days > 0 ? Math.min(3650, Math.round(days)) : null,
      )
      return json(res, 200, { ok: true, id })
    }

    if (action === 'ingest') {
      const spaceId = spaceParam(body?.space) || await ensureSpace(pool, orgId, 'Documents', accountId)
      const owns = await pool.query(
        `select id from rag_spaces where id = $1 and org_id = $2`, [spaceId, orgId],
      )
      if (!owns.rows[0]) return json(res, 404, { ok: false, error: 'no_space' })

      let bytes: Uint8Array
      try {
        bytes = new Uint8Array(Buffer.from(String(body?.contentBase64 || ''), 'base64'))
      } catch {
        return json(res, 400, { ok: false, error: 'bad_content' })
      }
      if (!bytes.byteLength) return json(res, 400, { ok: false, error: 'empty' })
      if (bytes.byteLength > MAX_UPLOAD) return json(res, 413, { ok: false, error: 'too_large' })

      const r = await ingest(pool, {
        orgId, spaceId, filename: String(body?.filename || 'document'),
        mime: body?.mime ? String(body.mime) : undefined, bytes, uploadedBy: accountId,
      })

      // L'indexation vectorielle suit le dépôt quand elle est possible, et ne le
      // fait jamais échouer : un document lisible en lexical est déjà utile.
      let embedded = 0
      if (r.ok && r.chunks && !r.duplicate) {
        embedded = (await embedPending(pool, orgId, { spaceId, limit: r.chunks }).catch(() => null))?.embedded ?? 0
      }
      return json(res, 200, { ...r, embedded })
    }

    if (action === 'embed') {
      // Rattrapage : mille documents déposés sans clé, une clé ajoutée, et on
      // reprend l'indexation sans rien redéposer.
      const r = await embedPending(pool, orgId, {
        spaceId: spaceParam(body?.space), limit: Number(body?.limit) || 500,
      })
      return json(res, 200, { ok: true, ...r, status: embedStatus() })
    }

    if (action === 'extract') {
      const gate = await allowed(pool, accountId)
      if (!gate.ok) return json(res, 200, { ok: false, error: 'quota', reason: gate.reason, plan: gate.plan })

      const docId = String(body?.docId || '')
      if (!/^[0-9a-f-]{36}$/i.test(docId)) return json(res, 400, { ok: false, error: 'bad_doc' })
      const t0 = Date.now()
      const r = await extract(pool, orgId, docId, normaliseSchema(body?.schema))
      await logQuery(pool, {
        orgId, spaceId: null, accountId, kind: 'extract',
        question: JSON.stringify(normaliseSchema(body?.schema).map((f) => f.name)).slice(0, 500),
        docIds: r.docId ? [r.docId] : [],
        answeredBy: r.answeredBy, answeredRegion: r.answeredRegion, ms: Date.now() - t0,
      })
      if (r.answeredBy) await meter(pool, accountId)
      return json(res, 200, r)
    }

    if (action === 'erase') {
      const docId = String(body?.docId || '')
      if (!/^[0-9a-f-]{36}$/i.test(docId)) return json(res, 400, { ok: false, error: 'bad_doc' })
      const done = await eraseDocument(pool, orgId, docId)
      return json(res, 200, { ok: done, error: done ? undefined : 'not_found' })
    }

    return json(res, 200, { ok: false, error: 'bad_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 120) })
  }
}

const unique = (a: string[]): string[] => a.filter((v, i) => a.indexOf(v) === i)

/** L'allocation du plan · une panne du compteur ne bloque pas le travail. */
async function allowed(
  pool: ReturnType<typeof getPool>, accountId: string,
): Promise<{ ok: boolean; reason?: string; plan?: string }> {
  try {
    const s = await standingOf(pool, accountId)
    return { ok: s.allowed, reason: s.reason, plan: s.plan }
  } catch {
    return { ok: true }
  }
}

/**
 * Compte une interrogation qui a réellement appelé un modèle.
 *
 * Une question documentaire vaut moins qu'une tâche d'agent : elle n'écrit rien,
 * ne touche aucune application connectée et tient en un aller-retour. Un tiers
 * d'unité est le prix de ce qu'elle coûte, pas de ce qu'elle rapporte.
 */
async function meter(pool: ReturnType<typeof getPool>, accountId: string): Promise<void> {
  try {
    await pool.query(
      `insert into work_usage (account_id, day, free_runs, task_units)
       values ($1, current_date, 0, 0.34)
       on conflict (account_id, day) do update set
         task_units = work_usage.task_units + 0.34`,
      [accountId],
    )
  } catch { /* le comptage ne fait jamais échouer une réponse */ }
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
  if (typeof attached === 'string') return Promise.resolve(attached)
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

function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
