import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop } from '../workshop'
import { privyControls } from './controls'

// Dojo entrance gate. The Privy modal is the ONLY auth UI: it opens
// automatically on entry · there is no second card behind it. Behind Privy sits
// just a blurred backdrop (click it to re-open Privy if dismissed) plus a small
// guest escape, so a Privy hiccup can never brick the app. Once an account
// exists (either path) App stops rendering this and the office is revealed.
export function AuthGate() {
  const signInGuest = useWorkshop((s) => s.signInGuest)

  useEffect(() => {
    if (privyControls.login) { privyControls.login(); return }
    let n = 0
    const id = window.setInterval(() => {
      if (privyControls.login) { privyControls.login(); window.clearInterval(id) }
      else if (++n > 25) window.clearInterval(id)
    }, 200)
    return () => window.clearInterval(id)
  }, [])

  return createPortal(
    <div className="authgate authgate-min" onClick={() => privyControls.login?.()}>
      <button className="authgate-guest" onClick={(e) => { e.stopPropagation(); signInGuest() }}>
        continue as guest →
      </button>
    </div>,
    document.body,
  )
}
