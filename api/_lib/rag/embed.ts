// Donner un sens aux mots qu'on n'a pas écrits.
//
// Le lexical trouve « résiliation » quand on tape « résiliation ». Il ne trouve
// rien quand on tape « peut-on rompre le contrat ? », et c'est pourtant la
// question que les gens posent. Les embeddings servent exactement à ça, et à
// rien d'autre : ils ne remplacent pas le lexical, ils le complètent.
//
// Trois décisions, dont deux sont des refus :
//
//   · Le fournisseur est européen ou il n'y a pas de fournisseur. Envoyer chaque
//     passage d'un contrat à un service américain pour le vectoriser est un
//     transfert de données, et il est intégral : là où une question sortante ne
//     laisse filtrer que la question, l'indexation fait sortir le document en
//     entier. C'est le pire endroit du produit pour être approximatif.
//
//   · Le modèle est ENREGISTRÉ avec le vecteur. Deux modèles d'embedding
//     produisent des espaces sans rapport ; comparer un vecteur mistral-embed à
//     un vecteur d'un autre modèle donne un cosinus parfaitement calculé et
//     parfaitement dénué de sens. La recherche filtre donc sur le modèle, et un
//     changement de modèle rend les anciens vecteurs invisibles plutôt que
//     nuisibles — en attendant qu'on les recalcule.
//
//   · L'absence de clé n'est pas une erreur. Sans fournisseur, on n'indexe pas
//     de vecteurs et la recherche reste lexicale. Le produit démarre, cherche,
//     répond et s'installe sans un seul appel sortant. C'est ce que veut dire
//     « souverain » ; un logiciel qui exige un appel à l'extérieur pour
//     fonctionner ne l'est pas, quel que soit le pays de l'appel.
import type { Pool } from 'pg'
import { chain, ORIGINS, type ProviderOrigin } from '../eu.js'
import { toVector } from './search.js'

const ENV = process.env as Record<string, string | undefined>

/** Un fournisseur d'embeddings joignable · tous sont compatibles OpenAI. */
interface EmbedProvider {
  id: string
  base: string
  baseEnv: string
  model: string
  modelEnv: string
}

/**
 * Les points d'accès, surchargeables par l'opérateur.
 *
 * L'URL est dans une variable d'environnement pour une raison précise : une
 * entreprise qui héberge son propre modèle — sur un serveur en France, dans son
 * propre datacentre — pointe `MISTRAL_BASE` dessus et n'a plus aucun appel
 * sortant du tout. C'est le cas d'usage qu'un produit souverain doit rendre
 * facile, pas celui qu'il doit rendre exotique.
 */
const PROVIDERS: Record<string, EmbedProvider> = {
  mistral: {
    id: 'mistral',
    base: 'https://api.mistral.ai/v1',
    baseEnv: 'MISTRAL_BASE',
    model: 'mistral-embed',
    modelEnv: 'MISTRAL_EMBED_MODEL',
  },
  ovh: {
    id: 'ovh',
    base: 'https://oai.endpoints.kepler.ai.cloud.ovh.net/v1',
    baseEnv: 'OVH_AI_BASE',
    model: 'bge-multilingual-gemma2',
    modelEnv: 'OVH_EMBED_MODEL',
  },
  scaleway: {
    id: 'scaleway',
    base: 'https://api.scaleway.ai/v1',
    baseEnv: 'SCALEWAY_BASE',
    model: 'bge-multilingual-gemma2',
    modelEnv: 'SCALEWAY_EMBED_MODEL',
  },
}

export interface EmbedBackend {
  origin: ProviderOrigin
  provider: EmbedProvider
  /** l'identifiant stocké en base à côté du vecteur · « mistral:mistral-embed » */
  tag: string
}

/**
 * Le fournisseur d'embeddings retenu, ou null.
 *
 * `chain()` a déjà écarté ce que la résidence interdit, donc il n'y a pas de
 * vérification de région à refaire ici : sous `DATA_RESIDENCY=eu`, un
 * fournisseur hors UE n'est pas dans la liste sur laquelle cette boucle tourne.
 */
export function embedBackend(): EmbedBackend | null {
  for (const origin of chain()) {
    const p = PROVIDERS[origin.id]
    if (!p) continue          // ce fournisseur sait parler, pas vectoriser
    const model = ENV[p.modelEnv] || p.model
    return { origin, provider: p, tag: `${p.id}:${model}` }
  }
  return null
}

export interface EmbedStatus {
  available: boolean
  tag?: string
  processor?: string
  country?: string
  /** ce qui manque, dit de façon actionnable */
  why?: string
  /** l'une de ces variables suffit */
  setAnyOf?: string[]
  /** la colonne vectorielle existe · pgvector est installé ET le schéma appliqué */
  vectorColumn?: boolean
  /** la dimension que la colonne accepte */
  dim?: number
}

/**
 * L'état réel de la moitié sémantique.
 *
 * Deux conditions, indépendantes, et il faut dire LAQUELLE manque : une clé
 * chez un fournisseur européen, et pgvector côté base. Un opérateur qui a posé
 * sa clé et voit « recherche lexicale » sans explication conclut que la clé est
 * mauvaise, et va la changer — alors qu'il lui manque un paquet Postgres.
 *
 * `pool` est facultatif parce que cette fonction sert aussi là où il n'y a pas
 * de base sous la main ; sans lui, seule la moitié fournisseur est vérifiée.
 */
export async function embedStatus(pool?: Pool): Promise<EmbedStatus> {
  const b = embedBackend()
  const col = pool ? await vectorColumn(pool) : null

  if (!b) {
    return {
      available: false,
      why: "aucun fournisseur d'embeddings européen n'est configuré · la recherche reste lexicale, ce qui reste utilisable",
      setAnyOf: ['mistral', 'ovh', 'scaleway'].map((id) => ORIGINS[id].keyEnv),
      vectorColumn: !!col,
      dim: col?.dim,
    }
  }
  if (pool && !col) {
    return {
      available: false,
      tag: b.tag,
      processor: b.origin.processor,
      country: b.origin.country,
      why: 'pgvector n’est pas installé sur cette base · la clé est bien posée, c’est le côté Postgres qui manque'
        + ' (paquet postgresql-16-pgvector, puis rejouer db/rag.sql)',
      vectorColumn: false,
    }
  }
  return {
    available: true,
    tag: b.tag,
    processor: b.origin.processor,
    country: b.origin.country,
    vectorColumn: true,
    dim: col?.dim,
  }
}

/** La colonne vectorielle et sa dimension, ou null quand elle n'existe pas. */
export async function vectorColumn(pool: Pool): Promise<{ dim: number } | null> {
  try {
    const r = await pool.query(
      `select a.atttypmod as dim
         from pg_attribute a
         join pg_class c on c.oid = a.attrelid
         join pg_type t on t.oid = a.atttypid
        where c.relname = 'rag_chunks' and a.attname = 'embedding'
          and t.typname = 'vector' and a.attnum > 0 and not a.attisdropped`,
    )
    // pgvector range la dimension telle quelle dans atttypmod · -1 quand libre
    const dim = Number(r.rows[0]?.dim ?? -1)
    return r.rows[0] ? { dim: dim > 0 ? dim : 0 } : null
  } catch {
    return null
  }
}

const TIMEOUT_MS = Number(ENV.RAG_EMBED_TIMEOUT_MS || 30000)
/** Combien de passages par appel · au-delà, les fournisseurs refusent la charge. */
const BATCH = Math.max(1, Math.min(64, Number(ENV.RAG_EMBED_BATCH || 32)))

/**
 * Vectorise des textes.
 *
 * Rend null — pas une exception — quand aucun fournisseur n'est configuré ou que
 * l'appel échoue. L'appelant continue alors en lexical seul : une indexation
 * qui échoue ne doit jamais faire échouer le dépôt d'un document.
 */
export async function embed(texts: string[]): Promise<{ vectors: number[][]; tag: string } | null> {
  const b = embedBackend()
  if (!b || !texts.length) return null

  const key = ENV[b.origin.keyEnv]
  if (!key) return null
  const base = ENV[b.provider.baseEnv] || b.provider.base
  const model = b.tag.slice(b.tag.indexOf(':') + 1)

  const vectors: number[][] = []
  for (let i = 0; i < texts.length; i += BATCH) {
    const slice = texts.slice(i, i + BATCH)
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(`${base.replace(/\/$/, '')}/embeddings`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
        body: JSON.stringify({ model, input: slice }),
        signal: ctrl.signal,
      })
      if (!res.ok) return null
      const data = (await res.json()) as { data?: Array<{ embedding?: number[]; index?: number }> }
      const rows = data?.data
      if (!Array.isArray(rows) || rows.length !== slice.length) return null
      // L'ordre n'est pas garanti par la spécification · on suit `index` quand
      // il est là. Un décalage d'un rang associerait chaque passage au vecteur
      // du suivant, ce qui ne casse rien visiblement et rend tout faux.
      const ordered = new Array<number[]>(slice.length)
      rows.forEach((r, k) => {
        const at = typeof r.index === 'number' ? r.index : k
        if (Array.isArray(r.embedding)) ordered[at] = r.embedding
      })
      if (ordered.some((v) => !v?.length)) return null
      vectors.push(...ordered)
    } catch {
      return null
    } finally {
      clearTimeout(timer)
    }
  }
  return { vectors, tag: b.tag }
}

/** Le vecteur d'une question · null quand il n'y a pas de fournisseur. */
export async function embedQuery(q: string): Promise<{ vector: number[]; tag: string } | null> {
  const r = await embed([q])
  return r && r.vectors[0] ? { vector: r.vectors[0], tag: r.tag } : null
}

/**
 * Vectorise les passages qui ne le sont pas encore.
 *
 * Existe séparément du dépôt parce que les deux moments sont différents : on
 * peut déposer mille documents sans clé, en ajouter une plus tard, et rattraper
 * l'indexation sans rien redéposer. C'est aussi le chemin d'un changement de
 * modèle — les anciens vecteurs portent un autre `embed_model` et sont repris.
 *
 * Rend le nombre de passages vectorisés. Zéro n'est pas un échec : c'est
 * l'état normal d'une installation sans fournisseur.
 */
export async function embedPending(
  pool: Pool, orgId: string, { spaceId = null, limit = 500 }: { spaceId?: string | null; limit?: number } = {},
): Promise<{ embedded: number; tag: string | null; total: number; error?: string }> {
  // Les deux manques sont énoncés ensemble. Les signaler l'un après l'autre
  // ferait poser une clé, relancer, et découvrir seulement alors qu'il manque
  // aussi un paquet Postgres — deux allers-retours pour une seule information.
  const b = embedBackend()
  const col = await vectorColumn(pool)
  if (!b || !col) {
    const manque = [
      !b ? `aucun fournisseur d'embeddings européen (${['mistral', 'ovh', 'scaleway'].map((id) => ORIGINS[id].keyEnv).join(' ou ')})` : '',
      !col ? 'pgvector absent de cette base (paquet postgresql-16-pgvector, puis rejouer db/rag.sql)' : '',
    ].filter(Boolean)
    return { embedded: 0, tag: b?.tag ?? null, total: 0, error: `${manque.join(' · et ')} · la recherche reste lexicale` }
  }

  const todo = await pool.query(
    `select c.id, c.text
       from rag_chunks c
       join rag_documents d on d.id = c.doc_id
       join rag_spaces   s on s.id = c.space_id
      where s.org_id = $1
        and d.deleted_at is null
        and ($2::uuid is null or c.space_id = $2)
        and (c.embedding is null or c.embed_model is distinct from $3)
      order by c.id
      limit $4`,
    [orgId, spaceId, b.tag, Math.max(1, Math.min(2000, limit))],
  )
  if (!todo.rows.length) return { embedded: 0, tag: b.tag, total: 0 }

  const out = await embed(todo.rows.map((r) => r.text as string))
  if (!out) return { embedded: 0, tag: b.tag, total: todo.rows.length }

  // La dimension du modèle doit être celle de la colonne. Postgres refuserait
  // l'insertion de toute façon ; le dire ici nomme le geste à faire, au lieu de
  // laisser lire « 0 vectorisé » sans raison à chaque tentative.
  const dim = out.vectors[0]?.length ?? 0
  if (col.dim > 0 && dim !== col.dim) {
    return {
      embedded: 0, tag: out.tag, total: todo.rows.length,
      error: `le modèle ${out.tag} rend des vecteurs de ${dim} dimensions, la colonne en accepte ${col.dim}`
        + ` · alter table rag_chunks alter column embedding type vector(${dim})`
        + ' (les anciens vecteurs devront être recalculés)',
    }
  }

  let n = 0
  for (let i = 0; i < todo.rows.length; i++) {
    const v = out.vectors[i]
    if (!v?.length) continue
    await pool.query(
      `update rag_chunks set embedding = $2::vector, embed_model = $3 where id = $1`,
      [todo.rows[i].id, toVector(v), out.tag],
    )
    n++
  }
  return { embedded: n, tag: out.tag, total: todo.rows.length }
}
