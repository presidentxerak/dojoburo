// Qui est opérateur de ce déploiement.
//
// La réponse vivait en DEUX endroits : `api/agent-run.ts`, qui décide vraiment,
// et `src/config/admin.ts`, qui décidait ce que le navigateur AFFICHE. Le second
// portait l'adresse de l'opérateur en clair — donc elle partait dans le paquet
// JavaScript servi à tout le monde, où elle ne gardait rien du tout : le serveur
// n'a jamais cru le client sur ce point, et l'autorisation d'écrire dans une
// application passe par le rôle dans l'organisation, pas par cette liste.
//
// Une adresse personnelle publiée pour rien est une adresse offerte aux robots.
// Le navigateur n'a pas besoin de savoir QUI est opérateur : seulement SI le
// compte courant l'est. C'est une phrase que le serveur sait dire, et lui seul.
//
// L'e-mail comparé est celui que la base a vérifié, jamais celui que la requête
// annonce — poster l'adresse de l'opérateur ne suffit donc pas à passer pour
// lui. C'était une vraie faille, corrigée avant cette session ; ce fichier ne
// fait que rassembler la règle en un point.
import type { Pool } from 'pg'
import { findAccountId } from './accounts.js'
import { dbConfigured } from './db.js'

const ENV = process.env as Record<string, string | undefined>

/** Les comptes opérateurs · env du SERVEUR, jamais du paquet client. */
export const ADMIN_EMAILS: string[] = (ENV.ADMIN_EMAILS || 'presidentxerak@gmail.com')
  .split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)

/**
 * Ce compte est-il opérateur ?
 *
 * Faux dès qu'on ne peut pas répondre — pas de base, pas de compte, pas
 * d'adresse vérifiée. Un privilège dont le défaut est « oui quand on ne sait
 * pas » n'en est pas un.
 */
export async function accountIsAdmin(
  pool: Pool,
  ref: { privyDid?: string | null; clientRef?: string | null },
): Promise<boolean> {
  if (!ADMIN_EMAILS.length || !dbConfigured()) return false
  try {
    const accountId = await findAccountId(pool, { privyDid: ref.privyDid ?? null, clientRef: ref.clientRef ?? null })
    if (!accountId) return false
    const r = await pool.query('select email from accounts where id = $1', [accountId])
    const email = String(r.rows[0]?.email || '').trim().toLowerCase()
    return !!email && ADMIN_EMAILS.includes(email)
  } catch {
    return false
  }
}
