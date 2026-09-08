// The address Privy will vouch for.
//
// An invitation in this app is a link, and it is a link for a reason: the
// access token proves a DID and nothing else, so the only email available
// server-side was one the client typed. Deciding a seat on that would let
// anyone who knows a colleague's address claim it.
//
// This is the missing half. Privy's server API will tell us, for a DID we have
// already verified, which addresses that user has actually proven — but only
// with an app SECRET, which is an operator step. So:
//
//   PRIVY_APP_SECRET set    → an invitation can be bound to an address, and
//                             only the person who proved that address may
//                             redeem it
//   PRIVY_APP_SECRET unset  → nothing changes · the link is the proof, exactly
//                             as before
//
// The deployment says which it is; no endpoint pretends. `bindEmail` on the
// invitation records which rule that particular invitation was created under,
// so turning the secret on later cannot retroactively lock people out of links
// already sent, and turning it off cannot unlock ones that were bound.
const ENV = process.env as Record<string, string | undefined>

const APP_ID = ENV.PRIVY_APP_ID || ENV.VITE_PRIVY_APP_ID || ''
const APP_SECRET = ENV.PRIVY_APP_SECRET || ''
const API = ENV.PRIVY_API_URL || 'https://auth.privy.io/api/v1'
const TIMEOUT_MS = 5000

/** Can this deployment check who an address really belongs to? */
export const canVerifyEmail = (): boolean => !!APP_ID && !!APP_SECRET

interface PrivyAccount { type?: string; address?: string; email?: string }

/**
 * The verified email for a DID, or null.
 *
 * Null means "we could not establish one" and is never an error the caller
 * should surface as a failure — a Privy outage must not stop a colleague
 * joining a company. The caller decides what to do with a null, and for a bound
 * invitation the answer is to refuse rather than to guess.
 *
 * The DID must already have been verified from the access token. This function
 * looks up a subject; it does not authenticate one.
 */
export async function verifiedEmailOf(did: string): Promise<string | null> {
  if (!canVerifyEmail() || !did) return null
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS)
  try {
    const r = await fetch(`${API}/users/${encodeURIComponent(did)}`, {
      signal: ctl.signal,
      headers: {
        authorization: 'Basic ' + Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64'),
        'privy-app-id': APP_ID,
        accept: 'application/json',
      },
    })
    if (!r.ok) return null
    const j = (await r.json()) as { linked_accounts?: PrivyAccount[]; email?: { address?: string } }
    // Privy reports linked accounts; the email ones carry a proven address.
    // Google and other OAuth logins expose the address they authenticated with,
    // which is equally proven — but only the explicit email account type is
    // taken here, because an OAuth provider's `email` field is a profile
    // attribute rather than a verification.
    const linked = Array.isArray(j.linked_accounts) ? j.linked_accounts : []
    const found = linked.find((a) => a.type === 'email' && (a.address || a.email))
    const address = found?.address || found?.email || j.email?.address || null
    return address ? String(address).trim().toLowerCase() : null
  } catch {
    return null
  } finally {
    clearTimeout(t)
  }
}

/** Two addresses are the same seat. Case and surrounding space never matter. */
export const sameAddress = (a: string | null | undefined, b: string | null | undefined): boolean =>
  !!a && !!b && a.trim().toLowerCase() === b.trim().toLowerCase()
