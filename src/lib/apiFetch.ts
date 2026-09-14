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
/** Et une requête qui ne revient pas est un échec, pas une attente éternelle. */
const REQUEST_TIMEOUT_MS = 25000

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

/** fetch(), with the caller's identity proof attached — and a deadline. */
export async function apiFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const auth = await authHeaders()
  // Un `signal` fourni par l'appelant l'emporte · il sait ce qu'il attend.
  // Sinon on en pose un : sans lui, une requête qui ne revient jamais laisse
  // son écran sur « Loading… » pour toujours.
  const signal = init.signal ?? (typeof AbortSignal?.timeout === 'function'
    ? AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    : undefined)
  return fetch(input, {
    ...init,
    signal,
    headers: { ...(init.headers as Record<string, string> | undefined), ...auth },
  })
}
