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

// L'ÉTAT DE CONNEXION, PUBLIÉ · pour la sauvegarde en ligne (lib/account) et
// les écrans du jeu, qui ne doivent pas importer Privy (il est chargé à part,
// et seulement quand VITE_PRIVY_APP_ID est posé). Le pont de privyGate écrit
// ici ; tout le reste lit.
export interface AuthSnapshot {
  /** Privy a fini de démarrer · avant, on ne sait pas encore */
  ready: boolean
  authenticated: boolean
  /** l'adresse du compte (e-mail ou Google), vide si inconnue */
  email: string
  /** l'identifiant Privy · seulement pour reconnaître un changement de compte */
  did: string
}

const SIGNED_OUT: AuthSnapshot = { ready: false, authenticated: false, email: '', did: '' }
let auth: AuthSnapshot = SIGNED_OUT
const authSubs = new Set<() => void>()

export function publishAuth(next: AuthSnapshot | null): void {
  const n = next ?? SIGNED_OUT
  if (n.ready === auth.ready && n.authenticated === auth.authenticated && n.email === auth.email && n.did === auth.did) return
  auth = n
  authSubs.forEach((f) => f())
}

export const authSnapshot = (): AuthSnapshot => auth

export function onAuth(f: () => void): () => void {
  authSubs.add(f)
  return () => { authSubs.delete(f) }
}
