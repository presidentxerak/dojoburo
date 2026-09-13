import { useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

/** A small "i" info dot that opens a readable, responsive modal explaining a
 *  piece of UI. Closes via the × or the Close button, or by clicking the
 *  backdrop / pressing Escape.
 *
 *  Rien à dire ⇒ pas de pastille. Elle était posée sur chaque page d'agent avec
 *  un contenu calculé, et ce contenu valait null pour quinze rôles sur dix-huit :
 *  on cliquait sur « i », une fenêtre s'ouvrait avec un titre, un bouton Fermer
 *  et RIEN entre les deux. Une impasse pareille se lit comme une application
 *  cassée, alors que l'absence de pastille ne se remarque même pas.
 *
 *  Le contrôle est ici plutôt que chez chaque appelant : il y en a une dizaine,
 *  et il suffit qu'un seul l'oublie pour que l'impasse revienne. */
export function InfoDot({ title, children, label }: { title: string; children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false)
  if (isEmpty(children)) return null
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

/**
 * Ce contenu est-il vide ?
 *
 * `null`, `undefined` et `false` sont les trois façons dont une expression JSX
 * conditionnelle ne rend rien. Un tableau de ces trois-là aussi : `{[a, b]}` où
 * les deux valent null. Une chaîne d'espaces est vide à l'écran même si elle ne
 * l'est pas en mémoire.
 */
function isEmpty(node: ReactNode): boolean {
  if (node === null || node === undefined || node === false || node === true) return true
  if (typeof node === 'string') return !node.trim()
  if (Array.isArray(node)) return node.every(isEmpty)
  return false
}
