// Config-gated auth wrapper. When VITE_PRIVY_APP_ID is set we lazy-load the
// real Privy provider (keeping its heavy dependency tree out of the main
// chunk); otherwise we render children untouched and the app runs on the local
// guest account. This is the same "graceful fallback, activate by config"
// pattern used for Xaman signing and the support LLM cascade.
import { Suspense, lazy, type ReactNode } from 'react'
import { privyConfigured } from './controls'

const PrivyGate = lazy(() => import('./privyGate'))

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!privyConfigured()) return <>{children}</>
  return (
    <Suspense fallback={<>{children}</>}>
      <PrivyGate>{children}</PrivyGate>
    </Suspense>
  )
}
