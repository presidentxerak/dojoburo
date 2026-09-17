// La bibliothèque · le seul endroit d'où sortent les fichiers payants.
//
//   GET /api/library?slug=<slug>&privy=&client=
//     → 200 { ok:true, slug, body }        · le plan y donne droit
//     → 402 { ok:false, error:'plan' }     · il faut payer
//     → 401 { ok:false, error:'auth' }     · il faut être identifié
//     → 404 { ok:false, error:'unknown' }  · ce fichier n'existe pas
//
// Le corps n'est jamais dans le paquet du navigateur (voir _lib/libraryBodies).
// Masquer la fin d'un texte avec un dégradé pendant qu'il dort dans le fichier
// JavaScript n'est pas une barrière, c'est une décoration — et dans un produit
// dont l'argument est l'honnêteté des chiffres, c'est la dernière chose à
// laisser traîner.
//
// LA DÉCISION QUI COMPTE ICI est ce qu'on fait quand la base n'est pas
// configurée — en développement local, sur une préversion, chez quelqu'un qui
// a cloné le dépôt. Deux mauvaises réponses possibles :
//
//   · tout ouvrir « puisqu'on ne peut pas vérifier » · la porte est alors
//     grande ouverte sur n'importe quel déploiement mal configuré, et personne
//     ne s'en aperçoit avant que le contenu circule ;
//   · tout refuser · le dépôt devient impossible à faire tourner, et la
//     première chose qu'un contributeur fait est de désactiver la garde.
//
// La bonne réponse est la troisième : on sert ce qui est GRATUIT, et on refuse
// le reste avec un motif explicite. Sans base de données, il n'y a pas de
// clients, donc rien à protéger contre — mais il n'y a pas non plus de plan à
// lire, donc rien qui autorise. Le catalogue reste parcourable, les entrées
// libres se lisent, et le payant attend une vraie installation.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { findAccountId } from './_lib/accounts.js'
import { callerRef } from './_lib/authz.js'
import { standingOf } from './_lib/entitlements.js'
import { BODIES } from './_lib/libraryBodies.js'
import { FREE_SLUGS } from './_lib/libraryFree.js'

export const config = { maxDuration: 10 }

function json(res: ServerResponse, code: number, body: unknown): void {
  res.statusCode = code
  res.setHeader('content-type', 'application/json; charset=utf-8')
  // Jamais de cache partagé sur une réponse qui dépend de QUI demande.
  // Un fichier payant mis en cache par un intermédiaire est servi au suivant.
  res.setHeader('cache-control', 'private, no-store')
  res.end(JSON.stringify(body))
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const slug = (url.searchParams.get('slug') || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 60)
    const body = BODIES[slug]
    if (!body) return json(res, 404, { ok: false, error: 'unknown' })

    // LES ENTRÉES LIBRES SORTENT SANS RIEN DEMANDER.
    //
    // Elles existent pour qu'on puisse juger la marchandise : un catalogue
    // dont on ne peut lire aucun fichier en entier se vend sur la confiance
    // seule, et nous n'en avons pas encore. Elles sont nommées dans un fichier
    // à part, partagé avec le client, pour que les deux moitiés ne puissent
    // pas diverger sur ce qui est gratuit.
    if (FREE_SLUGS.has(slug)) return json(res, 200, { ok: true, slug, body, free: true })

    // Pas de base : on ne peut ni vérifier ni autoriser. On refuse en le
    // disant, plutôt que d'ouvrir ou de se taire.
    if (!dbConfigured()) return json(res, 402, { ok: false, error: 'not_configured' })

    const who = await callerRef(req, { privy: url.searchParams.get('privy'), client: url.searchParams.get('client') })
    if (!who) return json(res, 401, { ok: false, error: 'auth' })

    const pool = getPool()
    const accountId = await findAccountId(pool, who)
    if (!accountId) return json(res, 401, { ok: false, error: 'auth' })

    const standing = await standingOf(pool, accountId)
    // Le plan gratuit ne donne pas accès à la bibliothèque · c'est ce qui est
    // vendu. Un abonnement en défaut de paiement non plus : `plan_status` est
    // lu par standingOf, qui retombe sur 'free' quand il n'est pas actif.
    if (standing.plan === 'free') return json(res, 402, { ok: false, error: 'plan' })

    return json(res, 200, { ok: true, slug, body, plan: standing.plan })
  } catch {
    // Jamais de 500 qui laisse le visiteur devant une page cassée · et jamais
    // de corps servi par accident sur le chemin d'erreur.
    return json(res, 402, { ok: false, error: 'unavailable' })
  }
}
