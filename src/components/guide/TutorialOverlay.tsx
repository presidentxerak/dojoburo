// A "How to?" walkthrough, full screen.
//
// The same player as the one embedded in the Dojo Guide, but taking the whole
// window and playing on its own from the first frame · these are the buttons
// people press before they have committed to anything, so they should explain
// themselves without anyone having to click through.
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Tutorial } from './Tutorial'
import { WALKS, type WalkId } from './tutorialBeats'

export function TutorialOverlay({ walk = 'overview', onClose, onStart, startLabel }: {
  walk?: WalkId
  onClose: () => void
  onStart?: () => void
  startLabel?: string
}) {
  // Escape closes, and the page behind must not scroll while we are over it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const meta = WALKS[walk]
  return createPortal(
    <div className="tutfs" role="dialog" aria-modal="true" aria-label={meta.title}>
      <header className="tutfs-h">
        <div>
          <strong>{meta.title}</strong>
          <span>{meta.sub}</span>
        </div>
        <button className="tutfs-x" onClick={onClose} aria-label="Close">×</button>
      </header>

      <div className="tutfs-body">
        <Tutorial walk={walk} autoPlay />
      </div>

      <footer className="tutfs-f">
        {onStart
          ? <button className="tutfs-go" onClick={onStart}>{startLabel ?? 'Get started →'}</button>
          : <button className="tutfs-go ghost" onClick={onClose}>Got it</button>}
      </footer>
    </div>,
    document.body,
  )
}

/** The small "How to?" button that opens one of the walkthroughs. */
export function HowToButton({ onClick, label = 'How to?' }: { onClick: () => void; label?: string }) {
  return <button type="button" className="howto-btn" onClick={onClick}>{label}</button>
}
