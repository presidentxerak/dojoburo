import { useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

/** A small "i" info dot that opens a readable, responsive modal explaining a
 *  piece of UI. Closes via the × or the Close button, or by clicking the
 *  backdrop / pressing Escape. */
export function InfoDot({ title, children, label }: { title: string; children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        className="infodot"
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); setOpen(true) }}
        aria-label={label ?? `About ${title}`}
        title={label ?? `About ${title}`}
      >
        i
      </button>
      {open && createPortal(
        <div className="infodot-overlay" onClick={() => setOpen(false)} onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}>
          <div className="infodot-modal" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
            <header className="infodot-head">
              <h3>{title}</h3>
              <button className="infodot-x" onClick={() => setOpen(false)} aria-label="Close">×</button>
            </header>
            <div className="infodot-body">{children}</div>
            <button className="infodot-close" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
