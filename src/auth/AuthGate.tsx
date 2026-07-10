import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop } from '../workshop'
import { privyControls } from './controls'
import { Logo } from '../components/Logo'

// Dojo entrance gate. The Privy modal is the auth UI: it opens automatically on
// entry (no extra card to click through first). Behind it, a minimal branded
// backdrop lets the user re-open Privy if they dismiss it, with a subtle guest
// escape so a Privy hiccup can never brick the app. Once an account exists
// (either path) App stops rendering this and the office is revealed.
export function AuthGate() {
  const signInGuest = useWorkshop((s) => s.signInGuest)

  // auto-open the Privy modal as soon as its controls are available
  useEffect(() => {
    if (privyControls.login) { privyControls.login(); return }
    let n = 0
    const id = window.setInterval(() => {
      if (privyControls.login) { privyControls.login(); window.clearInterval(id) }
      else if (++n > 25) window.clearInterval(id) // ~5s → give up auto-opening
    }, 200)
    return () => window.clearInterval(id)
  }, [])

  return createPortal(
    <div className="authgate" role="dialog" aria-modal="true" aria-label="Enter DojoBuro">
      <div className="authgate-card">
        <Logo size={54} />
        <h2>Enter DojoBuro</h2>
        <p>Sign in to enter your dojo.</p>
        <button className="btn primary authgate-primary" onClick={() => privyControls.login?.()}>Sign in / Sign up</button>
        <button className="authgate-guest" onClick={() => signInGuest()}>or explore as a guest →</button>
        <a className="authgate-back" href="/">← Back to home</a>
      </div>
    </div>,
    document.body,
  )
}
