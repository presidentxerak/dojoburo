// Ce qu'un agent a le droit de faire dans VOS applications.
//
// Le garde-fou existait, et il protégeait le mauvais chemin. `outboundConsent`
// vit dans le navigateur et n'enveloppe que les boutons de l'application — quand
// c'est VOUS qui cliquez « envoyer ». Un run d'agent, lui, rattache les
// applications connectées comme serveurs MCP et le modèle appelle leurs outils
// tout seul. Ce chemin-là n'était gardé par rien, et les consignes que l'on
// donne aux agents disent littéralement « if Stripe is connected, create the
// products/prices and share a payment link ».
//
// Deux chemins MCP coexistent, et ils ne se gardent pas de la même façon :
//
//   · La CASCADE passe par notre pont (api/_lib/mcp.ts · callTool). On voit
//     chaque appel, donc on peut refuser une écriture non autorisée.
//
//   · CLAUDE reçoit `mcp_servers` et appelle les applications DIRECTEMENT. Ces
//     appels ne passent jamais par nous : rien n'y est interceptable.
//
// D'où la décision qui structure ce fichier : on garde au RATTACHEMENT, pas à
// l'appel. Une capacité qu'on n'accorde jamais ne peut pas être détournée, et
// cette règle vaut identiquement sur les deux chemins. L'interception dans le
// pont reste, en seconde barrière.
//
// Et la règle qui décide de tout le reste : UN OUTIL INCONNU COMPTE COMME UNE
// ÉCRITURE. Une liste d'outils dangereux se fait dépasser le jour où une
// application en publie un nouveau ; une liste d'outils sûrs, non.
import type { Pool } from 'pg'
import type { McpTool } from './mcp.js'

export type Permit = 'read' | 'write'

/**
 * Les verbes qui ne font que LIRE.
 *
 * Construite en liste blanche, et volontairement courte. Tout ce qui n'est pas
 * reconnu ici est traité comme une écriture — y compris un outil au nom
 * inattendu, qui est exactement le cas qu'une liste noire raterait.
 */
const READ_VERBS = [
  'get', 'list', 'read', 'search', 'find', 'query', 'fetch', 'view', 'show',
  'describe', 'retrieve', 'lookup', 'count', 'export', 'download', 'check',
]

/** Les verbes dont on est certain qu'ils écrivent · pour le message, pas pour la décision. */
const WRITE_VERBS = [
  'create', 'update', 'delete', 'remove', 'send', 'post', 'publish', 'write',
  'add', 'set', 'put', 'patch', 'append', 'insert', 'upload', 'move', 'archive',
  'charge', 'refund', 'pay', 'invoice', 'subscribe', 'cancel', 'merge', 'close',
  'assign', 'invite', 'share', 'reply', 'comment', 'edit', 'rename', 'upsert',
]

/**
 * Cet outil écrit-il ?
 *
 * On regarde le NOM d'abord : c'est le seul élément qu'un serveur MCP est
 * obligé de fournir et qu'il ne remplit pas de prose marketing. La description
 * ne sert qu'à confirmer une lecture, jamais à requalifier une écriture en
 * lecture — un serveur qui décrirait « create_page » comme « consultez vos
 * pages » ne doit pas pouvoir acheter une permission avec une phrase.
 */
export function isWriteTool(tool: { tool?: string; name?: string; description?: string }): boolean {
  const raw = String(tool.tool || tool.name || '')
  // `notion__create_page` · on retire le préfixe d'application que nous ajoutons
  const bare = raw.includes('__') ? raw.slice(raw.indexOf('__') + 2) : raw
  const parts = bare.toLowerCase().split(/[^a-z]+/).filter(Boolean)
  if (!parts.length) return true          // sans nom, on ne peut rien affirmer

  if (parts.some((p) => WRITE_VERBS.includes(p))) return true
  if (parts.some((p) => READ_VERBS.includes(p))) return false

  // Ni l'un ni l'autre. La description peut faire pencher vers la LECTURE, et
  // seulement vers elle — c'est un indice, pas une autorisation.
  const d = String(tool.description || '').toLowerCase()
  if (/^(returns?|gets?|lists?|reads?|searches?|fetches)\b/.test(d.trim())) return false

  return true                              // inconnu ⇒ écriture
}

export interface Split {
  read: McpTool[]
  write: McpTool[]
}

/** Sépare une liste d'outils · sert au pont et à l'explication donnée à l'utilisateur. */
export function splitTools(tools: McpTool[]): Split {
  const read: McpTool[] = []
  const write: McpTool[] = []
  for (const t of tools) (isWriteTool(t) ? write : read).push(t)
  return { read, write }
}

/* ---- ce que l'organisation a réellement accordé -------------------------- */

/**
 * Les applications où l'entreprise a accordé l'écriture.
 *
 * Portée par l'ORGANISATION et non par la personne : une autorisation d'écrire
 * dans le Stripe de la société n'appartient pas à celui qui a cliqué. C'est la
 * même règle que pour les connexions elles-mêmes (voir connScope).
 *
 * Une base absente rend un ensemble VIDE, donc aucune écriture. Le défaut d'un
 * garde-fou doit être fermé : un déploiement mal configuré ne doit pas devenir
 * un déploiement permissif.
 */
export async function writeGrants(pool: Pool, orgId: string | null): Promise<Set<string>> {
  if (!orgId) return new Set()
  try {
    const r = await pool.query(
      `select connector_id from connector_permits
        where org_id = $1 and permit = 'write' and revoked_at is null`,
      [orgId],
    )
    return new Set(r.rows.map((x) => String(x.connector_id)))
  } catch {
    return new Set()
  }
}

/** Accorde ou retire l'écriture · rend l'état effectif après l'opération. */
export async function setWriteGrant(
  pool: Pool, orgId: string, connectorId: string, grant: boolean, byAccount: string | null,
): Promise<Permit> {
  if (grant) {
    await pool.query(
      `insert into connector_permits (org_id, connector_id, permit, granted_by)
       values ($1, $2, 'write', $3)
       on conflict (org_id, connector_id) do update set
         permit = 'write', granted_by = excluded.granted_by,
         granted_at = now(), revoked_at = null`,
      [orgId, connectorId, byAccount],
    )
    return 'write'
  }
  // On ne SUPPRIME pas la ligne : la trace de qui avait accordé quoi, et quand
  // cela a été retiré, est précisément ce qu'un audit vient chercher.
  await pool.query(
    `update connector_permits set permit = 'read', revoked_at = now()
      where org_id = $1 and connector_id = $2`,
    [orgId, connectorId],
  )
  return 'read'
}

/** L'état de chaque application connectée · ce que l'écran de permissions lit. */
export async function permitsOf(pool: Pool, orgId: string | null): Promise<Record<string, Permit>> {
  const granted = await writeGrants(pool, orgId)
  return Object.fromEntries([...granted].map((id) => [id, 'write' as Permit]))
}

/**
 * Le message rendu au modèle quand il tente une écriture non accordée.
 *
 * Rendu comme un RÉSULTAT d'outil et non comme une exception : le modèle
 * continue alors sa tâche et peut le dire dans son livrable — « je n'ai pas pu
 * créer la page, l'écriture n'est pas autorisée » — au lieu de voir le run
 * mourir sans explication.
 */
export const refusal = (app: string, tool: string): string =>
  `refused: writing to ${app} is not authorised for this company. `
  + `The tool "${tool}" changes data, and an admin has not granted write access to ${app}. `
  + `Continue without it and say plainly, in your deliverable, what you could not do.`
