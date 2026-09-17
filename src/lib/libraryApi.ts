// Aller chercher un fichier de la bibliothèque.
//
// Le corps n'est pas dans le paquet du navigateur : il vient de /api/library,
// qui lit le plan avant de répondre (voir api/library.ts). Ce module est la
// seule porte côté client, et il traduit les codes du serveur en quelque chose
// qu'on peut afficher à quelqu'un.
//
// Ce qu'il ne fait PAS, et c'est une décision : il ne cache rien en mémoire
// entre deux visites d'une même entrée. Un cache ici ferait survivre un
// fichier payant à une déconnexion, à un changement de compte, à une fin
// d'abonnement — trois moments où la bonne réponse est justement de ne plus
// l'avoir. Une requête de plus coûte quelques dizaines de millisecondes ;
// l'autre erreur coûte la confiance.
import { apiFetch } from './apiFetch'
import { refParams } from '../agents/workApi'

export type FetchState =
  | { state: 'ok'; body: string; free?: boolean }
  /** il faut un plan payant · c'est le cas normal, pas une erreur */
  | { state: 'plan' }
  /** il faut être identifié */
  | { state: 'auth' }
  /** ce déploiement n'a pas de base · développement local, préversion */
  | { state: 'unconfigured' }
  | { state: 'missing' }
  | { state: 'offline' }

/** Ce qu'on dit à l'écran pour chaque cas · en un endroit, parce que ces
 *  phrases sont la seule chose que verra quelqu'un à qui on refuse quelque
 *  chose, et qu'un code d'erreur affiché tel quel ne dit ni ce qui s'est
 *  passé ni quoi faire. */
export const REFUSAL: Record<Exclude<FetchState['state'], 'ok'>, { title: string; line: string; cta?: string }> = {
  plan: {
    title: 'This one is part of the library',
    line: 'The course is free and stays free. The files, the prompts, the briefs, the skills, are what the paid plan buys.',
    cta: 'See the plans',
  },
  auth: {
    title: 'Sign in to open it',
    line: 'Your plan travels with your account, so we need to know which one you are on.',
    cta: 'Sign in',
  },
  unconfigured: {
    title: 'Not available on this deployment',
    line: 'This copy of the app has no database configured, so it cannot check a plan. The free entries still open.',
  },
  missing: {
    title: 'No such file',
    line: 'That address does not match anything in the catalogue. It may have been renamed.',
  },
  offline: {
    title: 'Could not reach the library',
    line: 'The request did not go through. Nothing is wrong with your account, try again in a moment.',
  },
}

export async function fetchBody(slug: string): Promise<FetchState> {
  try {
    const res = await apiFetch(`/api/library?slug=${encodeURIComponent(slug)}&${refParams()}`, {
      headers: { accept: 'application/json' },
    })
    const j = (await res.json()) as { ok?: boolean; body?: string; free?: boolean; error?: string }
    if (j?.ok && typeof j.body === 'string') return { state: 'ok', body: j.body, free: j.free }
    if (j?.error === 'auth') return { state: 'auth' }
    if (j?.error === 'unknown') return { state: 'missing' }
    if (j?.error === 'not_configured') return { state: 'unconfigured' }
    // 'plan', 'unavailable' et tout code inattendu tombent ici · refuser en
    // proposant le plan est la réponse la moins fausse quand on ne sait pas
    return { state: 'plan' }
  } catch {
    return { state: 'offline' }
  }
}

/** Télécharger ce qu'on vient de lire · un fichier sur le disque, avec le nom
 *  et l'extension que la forme appelle. Un .md qu'il faut copier-coller à la
 *  main depuis une page web n'est pas un fichier, c'est une capture d'écran. */
export function download(slug: string, ext: string, body: string): void {
  const blob = new Blob([body], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${slug}${ext}`
  document.body.appendChild(a)
  a.click()
  a.remove()
  // Sans cela l'objet reste en mémoire jusqu'au rechargement de la page · sur
  // un catalogue qu'on parcourt en téléchargeant, ça s'accumule.
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
