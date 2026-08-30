// Bridge between the (code-split) Privy provider and the rest of the app.
// The Privy hooks only exist inside <PrivyProvider>; the Account UI reads these
// module-level controls so it doesn't need to import Privy directly.
export const privyControls: {
  login?: () => void
  logout?: () => void
  /** The signed-in user's Privy access token · this is what proves to the API
   *  that a request really belongs to this account. Undefined until the Privy
   *  bridge mounts, and it resolves to null when nobody is signed in. */
  getAccessToken?: () => Promise<string | null>
  ready: boolean
} = { ready: false }

export function privyConfigured(): boolean {
  return !!(import.meta.env.VITE_PRIVY_APP_ID as string | undefined)
}
