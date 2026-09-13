// Retrouver les bons passages, et pouvoir montrer lesquels.
//
// La recherche est hybride, et l'ordre des deux moitiés est une décision :
//
//   · Le LEXICAL d'abord, en configuration française. Il fonctionne sans aucune
//     clé, sans aucun appel sortant, et il est très bon sur ce que les
//     entreprises cherchent réellement : un numéro de contrat, une référence,
//     un nom propre, un montant. Un embedding est médiocre sur « article 4.2 ».
//
//   · Le SÉMANTIQUE ensuite, quand un fournisseur européen d'embeddings est
//     configuré. Il rattrape ce que le lexical rate : « peut-on rompre le
//     contrat ? » ne partage aucun mot avec « résiliation », et c'est pourtant
//     le bon passage.
//
// Les deux sont fusionnés par rang réciproque (RRF) plutôt que par somme de
// scores. Les scores ne sont pas comparables — ts_rank_cd et un cosinus ne
// vivent pas sur la même échelle — et les additionner donne un classement que
// personne ne sait expliquer. Le rang, lui, se raconte.
//
// Sans clé d'embedding, tout ceci dégrade proprement vers le lexical seul. Un
// produit souverain qui ne démarre pas sans un appel à l'extérieur n'est pas
// souverain.
import type { Pool } from 'pg'

export interface Passage {
  chunkId: number
  docId: string
  filename: string
  page: number
  heading?: string
  text: string
  /** le rang final après fusion · 1 = meilleur */
  rank: number
  /** d'où vient ce passage · utile pour expliquer un résultat surprenant */
  via: 'lexical' | 'semantic' | 'both'
  score: number
}

export interface SearchOptions {
  spaceId?: string | null
  topK?: number
  /** vecteur de la question, quand un fournisseur d'embeddings est configuré */
  queryVector?: number[] | null
  /**
   * le modèle qui a produit ce vecteur · « mistral:mistral-embed »
   *
   * Obligatoire dès qu'il y a un vecteur, et c'est une protection, pas une
   * formalité : deux modèles d'embedding produisent des espaces sans rapport.
   * Comparer un vecteur à ceux d'un autre modèle donne un cosinus parfaitement
   * calculé et parfaitement faux — un résultat plausible, donc indétectable.
   */
  embedModel?: string | null
}

/**
 * Les passages d'un espace documentaire qui répondent à une question.
 *
 * Toujours borné à l'organisation par la requête elle-même — jamais par un
 * filtre appliqué après coup, qui est la façon dont une fuite inter-locataires
 * finit par arriver.
 */
export async function search(
  pool: Pool, orgId: string, query: string, opts: SearchOptions = {},
): Promise<Passage[]> {
  const topK = Math.min(50, Math.max(1, opts.topK ?? 8))
  const pool_ = Math.max(topK * 4, 32)   // on ramène large, on fusionne, on coupe

  const lex = await lexical(pool, orgId, query, opts.spaceId ?? null, pool_)
  // Pas de modèle déclaré, pas de moitié sémantique. Le classement lexical seul
  // est moins bon ; un classement mêlant deux espaces vectoriels est faux.
  const sem = opts.queryVector?.length && opts.embedModel
    ? await semantic(pool, orgId, opts.queryVector, opts.embedModel, opts.spaceId ?? null, pool_)
    : []

  return fuse(lex, sem, topK)
}

interface Hit { chunkId: number; docId: string; filename: string; page: number; heading?: string; text: string; score: number }

/**
 * Recherche lexicale, configuration française.
 *
 * `websearch_to_tsquery` parce qu'il accepte ce que les gens tapent réellement —
 * des guillemets, un OR, un moins — au lieu d'exiger la syntaxe tsquery, qui
 * lève une exception sur une apostrophe et fait échouer la requête entière.
 *
 * `ts_rank_cd` plutôt que `ts_rank` : il tient compte de la proximité des
 * termes, ce qui distingue un passage où « préavis » et « résiliation » sont
 * dans la même phrase d'un autre où ils sont à deux pages l'un de l'autre.
 */
async function lexical(pool: Pool, orgId: string, q: string, spaceId: string | null, limit: number): Promise<Hit[]> {
  const r = await pool.query(
    `select c.id, c.doc_id, d.filename, c.page, c.text,
            ts_rank_cd(c.tsv, websearch_to_tsquery('french', $2), 32) as score
       from rag_chunks c
       join rag_documents d on d.id = c.doc_id
       join rag_spaces   s on s.id = c.space_id
      where s.org_id = $1
        and d.deleted_at is null
        and ($3::uuid is null or c.space_id = $3)
        and c.tsv @@ websearch_to_tsquery('french', $2)
      order by score desc
      limit $4`,
    [orgId, q, spaceId, limit],
  )
  return r.rows.map((x) => ({
    chunkId: Number(x.id), docId: x.doc_id, filename: x.filename,
    page: x.page, text: x.text, score: Number(x.score),
  }))
}

/**
 * Recherche sémantique, cosinus exact.
 *
 * Sans pgvector il n'y a pas d'index ANN, donc on compare à tout — ce qui est
 * un balayage complet et l'assume : jusqu'à quelques dizaines de milliers de
 * passages, la base documentaire d'une PME, c'est de l'ordre de la dizaine de
 * millisecondes. Au-delà, l'opérateur installe pgvector et remplace cette
 * fonction ; le reste du fichier ne bouge pas.
 *
 * Le calcul est fait en SQL plutôt qu'en JavaScript pour ne pas rapatrier tous
 * les vecteurs à chaque question.
 *
 * Le filtre sur `embed_model` fait deux choses d'un coup : il écarte les
 * vecteurs d'un autre espace vectoriel, et il garantit que tous les vecteurs
 * comparés ont la même dimension — la jointure par ordinalité, sinon,
 * calculerait un cosinus sur le préfixe commun sans rien signaler.
 */
async function semantic(
  pool: Pool, orgId: string, vec: number[], embedModel: string, spaceId: string | null, limit: number,
): Promise<Hit[]> {
  const r = await pool.query(
    `with q as (select $2::real[] as v),
     scored as (
       select c.id, c.doc_id, d.filename, c.page, c.text,
              (select coalesce(sum(a * b), 0)
                 from unnest(c.embedding) with ordinality t1(a, i)
                 join unnest(q.v)         with ordinality t2(b, j) on i = j)
              / nullif(
                  sqrt((select coalesce(sum(a * a), 0) from unnest(c.embedding) a))
                  * sqrt((select coalesce(sum(b * b), 0) from unnest(q.v) b)), 0)
              as score
         from rag_chunks c
         join rag_documents d on d.id = c.doc_id
         join rag_spaces   s on s.id = c.space_id
         cross join q
        where s.org_id = $1
          and d.deleted_at is null
          and c.embedding is not null
          and c.embed_model = $3
          and ($4::uuid is null or c.space_id = $4)
     )
     select * from scored where score is not null order by score desc limit $5`,
    [orgId, vec, embedModel, spaceId, limit],
  )
  return r.rows.map((x) => ({
    chunkId: Number(x.id), docId: x.doc_id, filename: x.filename,
    page: x.page, text: x.text, score: Number(x.score),
  }))
}

/**
 * Fusion par rang réciproque.
 *
 * score = Σ 1/(k + rang). k=60 est la constante habituelle : elle amortit
 * suffisamment pour qu'un premier résultat d'une liste ne domine pas à lui seul,
 * ce qui est exactement ce qu'on veut quand une des deux listes est absente.
 *
 * Un passage trouvé par les DEUX moitiés remonte mécaniquement, sans qu'on ait
 * eu à pondérer quoi que ce soit à la main.
 */
function fuse(lex: Hit[], sem: Hit[], topK: number): Passage[] {
  const K = 60
  const acc = new Map<number, { hit: Hit; score: number; lex: boolean; sem: boolean }>()
  const add = (list: Hit[], which: 'lex' | 'sem') => {
    list.forEach((h, i) => {
      const cur = acc.get(h.chunkId) ?? { hit: h, score: 0, lex: false, sem: false }
      cur.score += 1 / (K + i + 1)
      if (which === 'lex') cur.lex = true; else cur.sem = true
      acc.set(h.chunkId, cur)
    })
  }
  add(lex, 'lex')
  add(sem, 'sem')

  return [...acc.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((e, i) => ({
      chunkId: e.hit.chunkId,
      docId: e.hit.docId,
      filename: e.hit.filename,
      page: e.hit.page,
      text: e.hit.text,
      rank: i + 1,
      via: e.lex && e.sem ? 'both' : e.sem ? 'semantic' : 'lexical',
      score: Number(e.score.toFixed(6)),
    }))
}

/**
 * Le contexte à donner au modèle, et les citations à rendre à l'utilisateur.
 *
 * Chaque passage est numéroté dans le prompt, et le modèle a pour consigne de
 * citer ces numéros. C'est ce qui rend une réponse vérifiable : on peut ouvrir
 * la source [2] et lire soi-même.
 */
export function groundingBlock(passages: Passage[]): string {
  return passages
    .map((p, i) => `[${i + 1}] ${p.filename} · page ${p.page}\n${p.text}`)
    .join('\n\n---\n\n')
}

/** Les instructions qui transforment un modèle bavard en moteur de réponse sourcée. */
export const GROUNDED_SYSTEM = [
  'Tu réponds UNIQUEMENT à partir des extraits fournis.',
  'Chaque affirmation doit être suivie de sa source entre crochets, par exemple [1] ou [2][3].',
  "Si les extraits ne contiennent pas la réponse, dis-le franchement : « Les documents fournis ne permettent pas de répondre. »",
  "N'invente aucun chiffre, aucune date, aucune clause qui ne figure pas dans les extraits.",
  'Réponds dans la langue de la question.',
].join(' ')
