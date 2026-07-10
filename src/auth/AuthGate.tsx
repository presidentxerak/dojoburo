import { createPortal } from 'react-dom'
import { useWorkshop } from '../workshop'
import { privyControls } from './controls'
import { Logo } from '../components/Logo'

// Dojo entrance gate (option 2): shown over the office when nobody is signed in
// and Privy is configured. Sign in for a portable account (save across devices,
// real deliverables, tool connectors, Mainnet) — or take the guest escape hatch
// so a Privy hiccup never bricks the app. Once an account exists (either path)
// App stops rendering this and the office is revealed.
export function AuthGate() {
  const signInGuest = useWorkshop((s) => s.signInGuest)
  return createPortal(
    <div className="authgate" role="dialog" aria-modal="true" aria-label="Enter DojoBuro">
      <div className="authgate-card">
        <Logo size={58} />
        <h2>Enter DojoBuro</h2>
        <p>Sign in to save your dojo across devices, run real deliverables and connect your tools · or explore first as a guest.</p>
        <div className="authgate-actions">
          <button className="btn primary authgate-primary" onClick={() => privyControls.login?.()}>Sign in / Sign up</button>
          <button className="btn ghost" onClick={() => signInGuest()}>Explore as guest →</button>
        </div>
        <a className="authgate-back" href="/">← Back to home</a>
      </div>
    </div>,
    document.body,
  )
}
