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

/**
 * De quoi l'afficher dans une interface sans révéler la clé.
 *
 * Quand il n'y a pas de fournisseur, `why` dit ce qu'il faut poser pour en avoir
 * un. Les trois fournisseurs listés ici sont tous européens, donc la résidence
 * n'en refuse aucun : l'absence est toujours une absence de clé, et il n'y a
 * qu'un seul message parce qu'il n'y a qu'une seule cause.
 */
export function embedStatus(): {
  available: boolean; tag?: string; processor?: string; country?: string
  why?: string; setAnyOf?: string[]
} {
  const b = embedBackend()
  if (b) {
    return { available: true, tag: b.tag, processor: b.origin.processor, country: b.origin.country }
  }
  return {
    available: false,
    why: "aucun fournisseur d'embeddings européen n'est configuré · la recherche reste lexicale, ce qui reste utilisable",
    setAnyOf: ['mistral', 'ovh', 'scaleway'].map((id) => ORIGINS[id].keyEnv),
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
): Promise<{ embedded: number; tag: string | null; total: number }> {
  const b = embedBackend()
  if (!b) return { embedded: 0, tag: null, total: 0 }

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

  let n = 0
  for (let i = 0; i < todo.rows.length; i++) {
    const v = out.vectors[i]
    if (!v?.length) continue
    await pool.query(
      `update rag_chunks set embedding = $2::real[], embed_model = $3 where id = $1`,
      [todo.rows[i].id, v, out.tag],
    )
    n++
  }
  return { embedded: n, tag: out.tag, total: todo.rows.length }
}
