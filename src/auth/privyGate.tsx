// Real Privy integration · code-split so @privy-io/react-auth (and its ~600
// transitive deps) never touch the main bundle when Privy isn't configured.
// This module is only ever imported lazily by AuthProvider, and only when
// VITE_PRIVY_APP_ID is set.
//
// It does two jobs:
//   1. Mounts <PrivyProvider> around the app so the Privy hooks work.
//   2. A <Bridge> publishes login/logout into `privyControls` (so the Account
//      UI can trigger auth without importing Privy) and mirrors the signed-in
//      Privy user into the local workshop account (provider:'privy').
import { useEffect, type ReactNode } from 'react'
import { PrivyProvider, usePrivy } from '@privy-io/react-auth'
import { privyControls } from './controls'
import { useWorkshop } from '../workshop'

const APP_ID = import.meta.env.VITE_PRIVY_APP_ID as string

/** Pull a human name + email out of the heterogeneous Privy user object. */
function readUser(user: any): { name: string; email: string; handle: string } {
  const email: string = user?.email?.address || user?.google?.email || user?.apple?.email || ''
  const handle: string =
    (user?.twitter?.username && `@${user.twitter.username}`) ||
    (user?.discord?.username ? `@${user.discord.username}` : '') ||
    (user?.farcaster?.username ? `@${user.farcaster.username}` : '')
  const name: string =
    user?.google?.name ||
    user?.twitter?.name ||
    user?.discord?.username ||
    user?.farcaster?.displayName ||
    (email ? email.split('@')[0] : '') ||
    (user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}…${user.wallet.address.slice(-4)}` : 'Founder')
  return { name, email, handle }
}

function Bridge({ children }: { children: ReactNode }) {
  const { ready, authenticated, user, login, logout } = usePrivy()

  // expose the imperative controls to the (Privy-free) Account UI
  useEffect(() => {
    privyControls.login = login
    privyControls.logout = logout
    privyControls.ready = ready
    return () => {
      privyControls.login = undefined
      privyControls.logout = undefined
      privyControls.ready = false
    }
  }, [ready, login, logout])

  // mirror the authenticated Privy identity into the local account store
  useEffect(() => {
    if (!ready) return
    const ws = useWorkshop.getState()
    if (authenticated && user) {
      const { name, email, handle } = readUser(user)
      if (ws.account?.provider === 'privy') {
        // keep user edits, only fill blanks from Privy
        ws.updateAccount({
          email: ws.account.email || email,
          handle: ws.account.handle || handle,
        })
      } else {
        ws.signInPrivy({ name, email, handle, did: user.id })
      }
    } else if (!authenticated && ws.account?.provider === 'privy') {
      // Privy session ended elsewhere → drop the mirrored account
      ws.signOut()
    }
  }, [ready, authenticated, user])

  return <>{children}</>
}

export default function PrivyGate({ children }: { children: ReactNode }) {
  const theme = (document.documentElement.dataset.theme as 'light' | 'dark') || 'light'
  return (
    <PrivyProvider
      appId={APP_ID}
      config={{
        // sign in with email or Google (Gmail) only · nothing else
        loginMethods: ['email', 'google'],
        appearance: { theme, accentColor: '#ff2d9b', walletList: [] },
        // no crypto wallet is created or required for signing in
        embeddedWallets: { ethereum: { createOnLogin: 'off' } },
      }}
    >
      <Bridge>{children}</Bridge>
    </PrivyProvider>
  )
}
