// Déposer un document, et pouvoir le reprendre.
//
// Tout ce qui touche la base est ici, pour une raison de sécurité plutôt que de
// rangement : chaque requête porte `org_id` dans son WHERE, et le fait qu'elles
// soient toutes dans le même fichier rend visible celle qui l'oublierait. Un
// filtre appliqué après coup, en JavaScript, est la façon dont une fuite entre
// clients finit par arriver.
import { createHash } from 'node:crypto'
import type { Pool } from 'pg'
import { parseDocument } from './parse.js'
import { chunkPages } from './chunk.js'

export interface SpaceRow { id: string; name: string; retentionDays: number | null; documents: number }

/** Les espaces documentaires d'une entreprise. */
export async function listSpaces(pool: Pool, orgId: string): Promise<SpaceRow[]> {
  const r = await pool.query(
    `select s.id, s.name, s.retention_days,
            (select count(*) from rag_documents d where d.space_id = s.id and d.deleted_at is null) as documents
       from rag_spaces s where s.org_id = $1 order by s.name`,
    [orgId],
  )
  return r.rows.map((x) => ({
    id: x.id, name: x.name, retentionDays: x.retention_days, documents: Number(x.documents),
  }))
}

/** Crée un espace, ou rend celui qui porte déjà ce nom. */
export async function ensureSpace(
  pool: Pool, orgId: string, name: string, createdBy: string | null, retentionDays: number | null = null,
): Promise<string> {
  const clean = String(name || '').trim().slice(0, 80) || 'Documents'
  const r = await pool.query(
    `insert into rag_spaces (org_id, name, created_by, retention_days) values ($1, $2, $3, $4)
     on conflict (org_id, name) do update set name = excluded.name
     returning id`,
    [orgId, clean, createdBy, retentionDays],
  )
  return r.rows[0].id
}

export interface IngestResult {
  ok: boolean
  docId?: string
  filename: string
  pages: number
  chunks: number
  kind: string
  needsOcr: boolean
  /** true quand le fichier était déjà là · on ne réanalyse ni ne refacture */
  duplicate?: boolean
  warning?: string
  error?: string
}

/**
 * Analyse un fichier et l'indexe.
 *
 * Le SHA-256 est calculé avant tout le reste : un document déjà présent dans
 * l'espace ressort tel quel, sans nouvelle analyse. Sur une base documentaire
 * d'entreprise, où le même contrat arrive par trois canaux, c'est la différence
 * entre une facture au volume et une facture au contenu.
 *
 * Un document dont l'analyse échoue ou qui demande une OCR est enregistré
 * QUAND MÊME, avec son statut. Il apparaît alors dans la liste avec la raison,
 * au lieu de disparaître en silence en laissant croire au dépôt réussi.
 */
export async function ingest(
  pool: Pool,
  { orgId, spaceId, filename, mime, bytes, uploadedBy }: {
    orgId: string; spaceId: string; filename: string; mime?: string
    bytes: Uint8Array; uploadedBy: string | null
  },
): Promise<IngestResult> {
  const sha = createHash('sha256').update(bytes).digest('hex')

  const dup = await pool.query(
    `select id, pages, status from rag_documents
      where space_id = $1 and sha256 = $2 and deleted_at is null limit 1`,
    [spaceId, sha],
  )
  if (dup.rows[0]) {
    await pool.query(`update rag_documents set last_used_at = now() where id = $1`, [dup.rows[0].id])
    const n = await pool.query(`select count(*)::int c from rag_chunks where doc_id = $1`, [dup.rows[0].id])
    return {
      ok: true, docId: dup.rows[0].id, filename, pages: dup.rows[0].pages,
      chunks: n.rows[0].c, kind: 'cached', needsOcr: false, duplicate: true,
    }
  }

  const parsed = parseDocument(bytes, filename, mime)
  const chunks = parsed.needsOcr ? [] : chunkPages(parsed.pages)

  const client = await pool.connect()
  try {
    await client.query('begin')
    const doc = await client.query(
      `insert into rag_documents
         (space_id, org_id, filename, mime, bytes, sha256, pages, body_md, status, error, parsed_by, parsed_region, uploaded_by)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,'local','eu',$11) returning id`,
      [
        spaceId, orgId, filename.slice(0, 300), mime ?? null, bytes.byteLength, sha,
        parsed.pageCount, parsed.needsOcr ? null : parsed.markdown,
        parsed.needsOcr ? 'failed' : chunks.length ? 'indexed' : 'parsed',
        parsed.warning ?? null, uploadedBy,
      ],
    )
    const docId = doc.rows[0].id

    // L'analyse tourne DANS ce processus, sur la machine de l'opérateur : rien
    // n'est sorti pour lire le document. C'est ce que dit parsed_by='local'.
    for (const c of chunks) {
      await client.query(
        `insert into rag_chunks (doc_id, space_id, ordinal, page, text) values ($1,$2,$3,$4,$5)`,
        [docId, spaceId, c.ordinal, c.page, c.heading ? `${c.heading}\n\n${c.text}` : c.text],
      )
    }
    await client.query('commit')
    return {
      ok: !parsed.needsOcr, docId, filename, pages: parsed.pageCount, chunks: chunks.length,
      kind: parsed.kind, needsOcr: parsed.needsOcr, warning: parsed.warning,
    }
  } catch (e) {
    await client.query('rollback').catch(() => { /* la connexion part de toute façon */ })
    return {
      ok: false, filename, pages: 0, chunks: 0, kind: parsed.kind, needsOcr: parsed.needsOcr,
      error: String((e as Error)?.message || e).slice(0, 160),
    }
  } finally {
    client.release()
  }
}

export interface DocRow {
  id: string; filename: string; pages: number; bytes: number; status: string
  chunks: number; error: string | null; createdAt: string; sha256: string
}

export async function listDocuments(pool: Pool, orgId: string, spaceId?: string | null): Promise<DocRow[]> {
  const r = await pool.query(
    `select d.id, d.filename, d.pages, d.bytes, d.status, d.error, d.created_at, d.sha256,
            (select count(*) from rag_chunks c where c.doc_id = d.id) as chunks
       from rag_documents d
       join rag_spaces s on s.id = d.space_id
      where s.org_id = $1 and d.deleted_at is null
        and ($2::uuid is null or d.space_id = $2)
      order by d.created_at desc`,
    [orgId, spaceId ?? null],
  )
  return r.rows.map((x) => ({
    id: x.id, filename: x.filename, pages: x.pages, bytes: Number(x.bytes),
    status: x.status, error: x.error, sha256: x.sha256,
    createdAt: x.created_at.toISOString(), chunks: Number(x.chunks),
  }))
}

/**
 * Effacement réel.
 *
 * Vérifie d'abord que le document appartient bien à cette organisation, puis
 * appelle la fonction SQL qui supprime les passages ET le Markdown. Une
 * suppression logique ne satisfait pas une demande d'effacement : le texte
 * resterait lisible en base.
 */
export async function eraseDocument(pool: Pool, orgId: string, docId: string): Promise<boolean> {
  const own = await pool.query(
    `select d.id from rag_documents d join rag_spaces s on s.id = d.space_id
      where d.id = $1 and s.org_id = $2`,
    [docId, orgId],
  )
  if (!own.rows[0]) return false
  await pool.query(`select rag_erase_document($1)`, [docId])
  return true
}

/** Ce que l'entreprise détient · la réponse à « qu'est-ce que vous avez à nous ? ». */
export async function holdings(pool: Pool, orgId: string): Promise<{
  spaces: number; documents: number; pages: number; bytes: number; chunks: number; queries: number
}> {
  const r = await pool.query(
    `select
       (select count(*) from rag_spaces where org_id = $1)                                      as spaces,
       (select count(*) from rag_documents where org_id = $1 and deleted_at is null)            as documents,
       (select coalesce(sum(pages),0) from rag_documents where org_id = $1 and deleted_at is null) as pages,
       (select coalesce(sum(bytes),0) from rag_documents where org_id = $1 and deleted_at is null) as bytes,
       (select count(*) from rag_chunks c join rag_spaces s on s.id = c.space_id where s.org_id = $1) as chunks,
       (select count(*) from rag_queries where org_id = $1)                                     as queries`,
    [orgId],
  )
  const x = r.rows[0]
  return {
    spaces: Number(x.spaces), documents: Number(x.documents), pages: Number(x.pages),
    bytes: Number(x.bytes), chunks: Number(x.chunks), queries: Number(x.queries),
  }
}

/** Journalise une interrogation · c'est la pièce d'audit, pas de la télémétrie. */
export async function logQuery(
  pool: Pool,
  { orgId, spaceId, accountId, kind, question, docIds, answeredBy, answeredRegion, ms }: {
    orgId: string; spaceId: string | null; accountId: string | null
    kind: 'search' | 'ask' | 'extract'; question: string
    docIds: string[]; answeredBy?: string | null; answeredRegion?: string | null; ms: number
  },
): Promise<void> {
  try {
    await pool.query(
      `insert into rag_queries (org_id, space_id, account_id, kind, question, doc_ids, answered_by, answered_region, ms)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [orgId, spaceId, accountId, kind, question.slice(0, 2000), docIds, answeredBy ?? null, answeredRegion ?? null, ms],
    )
    // Les documents qui ont servi viennent d'être utilisés · la conservation se
    // compte sur cette date, pour ne pas purger un contrat qu'on interroge.
    if (docIds.length) {
      await pool.query(`update rag_documents set last_used_at = now() where id = any($1::uuid[])`, [docIds])
    }
  } catch { /* l'audit ne doit jamais faire échouer une recherche */ }
}
