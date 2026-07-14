// Config-gated auth wrapper. When VITE_PRIVY_APP_ID is set we lazy-load the
// real Privy provider (keeping its heavy dependency tree out of the main
// chunk); otherwise we render children untouched and the app runs on the local
// guest account. This is the same "graceful fallback, activate by config"
// pattern used for Xaman signing and the support LLM cascade.
//
// An error boundary wraps Privy: if it fails to initialize (bad app id, Privy
// outage, blocked origin at the SDK level), we fall back to rendering the app
// WITHOUT Privy instead of white-screening · so the guest path always works and
// a Privy hiccup can never brick the whole app.
import { Suspense, lazy, Component, type ReactNode } from 'react'
import { privyConfigured } from './controls'

const PrivyGate = lazy(() => import('./privyGate'))

class PrivyBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err: unknown) {
    // eslint-disable-next-line no-console
    console.warn('Privy failed to initialize · falling back to guest mode.', err)
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!privyConfigured()) return <>{children}</>
  return (
    <PrivyBoundary fallback={<>{children}</>}>
      <Suspense fallback={<>{children}</>}>
        <PrivyGate>{children}</PrivyGate>
      </Suspense>
    </PrivyBoundary>
  )
}
