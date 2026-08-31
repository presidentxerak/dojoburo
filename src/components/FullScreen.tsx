// One full-screen surface, shared by every panel that takes over the app.
//
// Dojo settings, Manage team, the token dial and Graph mode were four different
// things wearing four different hats: a page, a centred modal you left with a
// "Done" button, a dimmed sheet with a "×" on the left of its own header, and a
// pane wedged into the dojo column. Same weight of screen, four ways out, none
// of them where the eye had learned to look.
//
// They now all render this: the studio's own bar, the title on the left, and
// the SAME round close button in the top right corner — plus Escape, which any
// full-screen surface should honour, and a body that cannot scroll behind it.
import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverlay } from '../lib/overlay'

export function FullScreen({ title, sub, tint, actions, bodyClass, children, onClose }: {
  title: string
  /** one line under the title · what this screen is for */
  sub?: string
  /** colours the surface's controls (--dc) · no marker: the app hides the
   *  coloured dot in every studio header, so one here would be dead markup */
  tint?: string
  /** anything that belongs beside the close button (a legend, a Done button) */
  actions?: ReactNode
  bodyClass?: string
  children: ReactNode
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    // the page underneath must not scroll while this is up
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // and the dojo underneath must stop drawing · it is covered, and its render
    // loop is what made these surfaces take seconds to appear
    useOverlay.getState().push()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      useOverlay.getState().pop()
    }
  }, [onClose])

  return createPortal(
    <div
      className="modhost-fs fs"
      style={tint ? ({ ['--dc' as string]: tint }) : undefined}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <header className="modhost-bar">
        <div className="modhost-bar-l">
          <div>
            <h2 className="modhost-name">{title}</h2>
            {sub && <p className="modhost-blurb">{sub}</p>}
          </div>
        </div>
        <div className="modhost-bar-r">
          {actions}
          <button className="modhost-close" onClick={onClose} aria-label={`Close ${title}`} title="Close">✕</button>
        </div>
      </header>
      <div className={`modhost-body${bodyClass ? ` ${bodyClass}` : ''}`}>{children}</div>
    </div>,
    document.body,
  )
}
