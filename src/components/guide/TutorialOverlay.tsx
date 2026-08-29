// The "How to?" walkthrough, full screen.
//
// Same six animated beats as the one embedded in the Dojo Guide, but taking the
// whole window and playing on its own from the first frame · this is the very
// first thing most people click on the landing page, so it should explain
// itself without anyone having to press anything.
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Tutorial } from './Tutorial'

export function TutorialOverlay({ onClose, onStart }: { onClose: () => void; onStart?: () => void }) {
  // Escape closes, and the page behind must not scroll while we are over it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  return createPortal(
    <div className="tutfs" role="dialog" aria-modal="true" aria-label="How DojoBuro works">
      <header className="tutfs-h">
        <div>
          <strong>How it works</strong>
          <span>Six steps, start to finish.</span>
        </div>
        <button className="tutfs-x" onClick={onClose} aria-label="Close">×</button>
      </header>

      <div className="tutfs-body">
        <Tutorial autoPlay />
      </div>

      {onStart && (
        <footer className="tutfs-f">
          <button className="tutfs-go" onClick={onStart}>Create your dojo teams →</button>
        </footer>
      )}
    </div>,
    document.body,
  )
}
