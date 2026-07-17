// Bridge between the (code-split) Privy provider and the rest of the app.
// The Privy hooks only exist inside <PrivyProvider>; the Account UI reads these
// module-level controls so it doesn't need to import Privy directly.
export const privyControls: {
  login?: () => void
  logout?: () => void
  /** fresh Privy access token (JWT) · the server verifies it to PROVE the DID */
  getAccessToken?: () => Promise<string | null>
  ready: boolean
} = { ready: false }

export function privyConfigured(): boolean {
  return !!(import.meta.env.VITE_PRIVY_APP_ID as string | undefined)
}

/** The signed-in user's Privy access token, or null (guest / Privy not
 *  configured / session expired). Safe to call from anywhere · never throws. */
export async function privyAccessToken(): Promise<string | null> {
  try {
    return (await privyControls.getAccessToken?.()) ?? null
  } catch {
    return null
  }
}
