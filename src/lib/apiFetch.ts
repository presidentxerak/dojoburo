// One way in and out of /api.
//
// Every endpoint that touches an account's connected apps now verifies WHO is
// asking instead of believing a `privy=<did>` parameter. A DID is an
// identifier, not a secret — so proof has to come from somewhere the caller
// cannot forge, and that is the Privy access token.
//
// This wrapper attaches it. Use it for every /api call that carries an
// identity; a plain fetch will simply be treated as a guest (or refused, if the
// request also claims a DID).
//
// ---------------------------------------------------------------------------
// Et il BORNE l'attente, ce qui est la vraie raison de sa forme actuelle.
//
// Le jeton était demandé par `await privyControls.getAccessToken?.()`, sans
// limite de temps. Sur un téléphone — Safari qui bloque le stockage tiers, une
// connexion qui tombe pendant que le SDK d'authentification s'initialise — cette
// promesse peut ne JAMAIS se résoudre. Et comme elle est attendue avant que la
// requête ne parte, ce n'est pas un appel qui traînait : c'était TOUS les
// appels de l'app qui ne partaient pas. « Loading your company… » à l'écran,
// indéfiniment, sans erreur, sans rien dans la console — un écran qui n'a
// aucune raison d'aboutir un jour.
//
// Deux bornes, parce qu'il y a deux attentes distinctes :
//
//   · l'identité · dépassé le délai, on part en invité. Une page lue sans être
//     identifié vaut mieux qu'une page qui ne se charge pas ;
//   · la requête elle-même · dépassé le délai, elle échoue pour de bon, et
//     l'appelant peut enfin dire quelque chose. Un `catch` n'a jamais eu lieu
//     sur une promesse qui pend.
// ---------------------------------------------------------------------------
import { privyControls } from '../auth/controls'

/** L'identité doit arriver vite ou pas du tout · au-delà on est un invité. */
const AUTH_TIMEOUT_MS = 4000

/**
 * L'échéance dépend de CE QU'ON DEMANDE, et c'est tout l'objet de ce bloc.
 *
 * Une seule valeur de 25 s a été posée ici hier, et elle était fausse pour la
 * chose la plus importante de l'app : un run d'agent a soixante secondes de
 * budget serveur — quarante-cinq pour un seul fournisseur de modèle — et
 * l'écran annonce lui-même « environ une minute ». Le navigateur coupait donc
 * tout travail dépassant vingt-cinq secondes, c'est-à-dire la plupart. Un
 * garde-fou contre les blocages qui tue le travail légitime est pire que le
 * blocage qu'il prévient.
 *
 * Les valeurs suivent `maxDuration` de chaque fonction, plus une marge pour le
 * démarrage à froid et le transport. Elles ne sont pas des estimations de
 * durée : ce sont les bornes au-delà desquelles plus rien ne peut arriver.
 */
const DEFAULT_TIMEOUT_MS = 25000
const BY_ENDPOINT: [RegExp, number][] = [
  [/\/api\/agent-run/, 90000],   // maxDuration 60 · cascade jusqu'à 45 s par fournisseur
  [/\/api\/rag/, 90000],         // maxDuration 60 · découpe et vectorise un document
  [/\/api\/agent-proxy/, 45000], // maxDuration 30
  [/\/api\/tts/, 60000],         // maxDuration 30 · la synthèse est lente par nature
]

function timeoutFor(url: string): number {
  for (const [rx, ms] of BY_ENDPOINT) if (rx.test(url)) return ms
  return DEFAULT_TIMEOUT_MS
}

/**
 * Attendre une promesse, mais pas pour toujours.
 *
 * Rendre `fallback` sur dépassement plutôt que lever : l'appelant veut
 * continuer sans l'identité, pas apprendre qu'elle a mis trop de temps.
 */
function within<T>(p: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise<T>((resolve) => {
    let done = false
    const t = setTimeout(() => { if (!done) { done = true; resolve(fallback) } }, ms)
    p.then(
      (v) => { if (!done) { done = true; clearTimeout(t); resolve(v) } },
      () => { if (!done) { done = true; clearTimeout(t); resolve(fallback) } },
    )
  })
}

/** The Authorization header for the signed-in user, or nothing for a guest. */
export async function authHeaders(): Promise<Record<string, string>> {
  try {
    const ask = privyControls.getAccessToken?.()
    if (!ask) return {}
    const token = await within(Promise.resolve(ask), AUTH_TIMEOUT_MS, null)
    return token ? { authorization: `Bearer ${token}` } : {}
  } catch {
    return {}
  }
}

/**
 * L'échéance, sans l'identité.
 *
 * Quatre appels de l'app parlaient à /api en `fetch` nu : l'assistant, la
 * recherche de domaine, le catalogue de polices, la synthèse vocale. Tous
 * attrapaient consciencieusement les erreurs — et un `catch` ne se déclenche
 * JAMAIS sur une requête qui pend. Le repli soigneusement écrit juste en
 * dessous n'avait alors aucune occasion de s'exécuter, et l'écran tournait.
 *
 * Ils n'ont pas besoin d'identité ; ils ont besoin d'une fin.
 */
export function deadline(ms = DEFAULT_TIMEOUT_MS): AbortSignal | undefined {
  return typeof AbortSignal?.timeout === 'function' ? AbortSignal.timeout(ms) : undefined
}

/** fetch(), with the caller's identity proof attached — and a deadline. */
export async function apiFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const auth = await authHeaders()
  // Un `signal` fourni par l'appelant l'emporte · il sait ce qu'il attend.
  // Sinon on en pose un, taillé sur l'endpoint : sans lui, une requête qui ne
  // revient jamais laisse son écran sur « Loading… » pour toujours ; trop
  // court, il coupe le travail que l'utilisateur attend.
  const signal = init.signal ?? deadline(timeoutFor(input))
  return fetch(input, {
    ...init,
    signal,
    headers: { ...(init.headers as Record<string, string> | undefined), ...auth },
  })
}
