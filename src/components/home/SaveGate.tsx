// "Sign in to save your company."
//
// Browsing is free: anyone can open the app and read every team card. Creating
// a company writes something real, so that is where we ask for an account.
// Privy is the sign-in; a guest escape stays so a Privy hiccup can never block
// the app.
//
// (When Privy isn't configured at all, the caller signs the founder in as a
// guest without ever showing this card.)
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop } from '../../workshop'
import { privyControls } from '../../auth/controls'

export function SaveGate({ what, onClose, onSignedIn }: {
  /** what is about to be saved, in the founder's own words */
  what: string
  onClose: () => void
  onSignedIn: () => void
}) {
  const account = useWorkshop((s) => s.account)
  const signInGuest = useWorkshop((s) => s.signInGuest)

  // the moment an account exists (Privy finished, or guest), save and continue
  useEffect(() => { if (account) onSignedIn() }, [account, onSignedIn])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (account) return null

  return createPortal(
    <div className="savegate" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="savegate-card" onMouseDown={(e) => e.stopPropagation()}>
        <h3>Sign in to save your company</h3>
        <p>
          {what} Signing in keeps it — along with your teammates and everything they make — so you find it
          all again next time, on any device.
        </p>
        <div className="savegate-acts">
          <button className="savegate-in" onClick={() => privyControls.login?.()}>Sign in</button>
          <button className="savegate-alt" onClick={() => signInGuest()}>Continue as guest (saved in this browser only)</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
