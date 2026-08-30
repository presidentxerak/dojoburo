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
import { privyControls } from '../auth/controls'

/** The Authorization header for the signed-in user, or nothing for a guest. */
export async function authHeaders(): Promise<Record<string, string>> {
  try {
    const token = await privyControls.getAccessToken?.()
    return token ? { authorization: `Bearer ${token}` } : {}
  } catch {
    return {}
  }
}

/** fetch(), with the caller's identity proof attached. */
export async function apiFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const auth = await authHeaders()
  return fetch(input, {
    ...init,
    headers: { ...(init.headers as Record<string, string> | undefined), ...auth },
  })
}
