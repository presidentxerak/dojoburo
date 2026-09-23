// A path router, small enough to read in one sitting.
//
// The Academy has to live on real URLs — /academy/start-here/what-is-an-agent —
// because that is what gets indexed, linked and shared. Hash routes do not.
// Vercel already rewrites every non-asset path to index.html, so the only thing
// missing was making the app react to the path instead of reading it once.
//
// Links stay real <a href> elements so a crawler (and a middle click, and "copy
// link address") sees a genuine URL; a plain left click is intercepted and
// handled in place instead of reloading the whole bundle.
import { useEffect, useSyncExternalStore } from 'react'

const listeners = new Set<() => void>()
let current = typeof location === 'undefined' ? '/' : location.pathname

function emit() {
  current = location.pathname
  for (const l of listeners) l()
}

if (typeof window !== 'undefined') window.addEventListener('popstate', emit)

export function navigate(path: string, opts: { replace?: boolean } = {}) {
  if (path === location.pathname) return
  history[opts.replace ? 'replaceState' : 'pushState'](null, '', path)
  emit()
  window.scrollTo({ top: 0 })
}

function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l) } }

/** The current path, without a trailing slash. Re-renders on navigation. */
export function usePath() {
  const p = useSyncExternalStore(subscribe, () => current, () => '/')
  return p.replace(/\/+$/, '') || '/'
}

/** A real link that navigates in place. Modified clicks behave normally. */
export function Lnk(
  { href, children, ...rest }: { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(href)
        rest.onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* L'ANCRE ARRIVE AVANT LA SECTION                                     */
/*                                                                      */
/* Un navigateur fait défiler jusqu'à `#pricing` au chargement, et à ce */
/* moment-là la section n'existe pas : React n'a pas encore rendu. Il   */
/* abandonne en silence, la page reste en haut, et le visiteur croit    */
/* que le lien est mort. C'est ce que faisait « Tarifs ».               */
/*                                                                      */
/* On attend donc que la section apparaisse, quelques images durant,    */
/* puis on y va. La limite existe pour qu'une ancre qui ne désigne rien */
/* s'arrête au lieu de tourner indéfiniment.                            */
/* ------------------------------------------------------------------ */

/** Fait défiler jusqu'à la section nommée par le fragment, dès qu'elle
 *  existe. Sans fragment, ne fait rien. */
export function useHashAnchor() {
  useEffect(() => {
    let frames = 0
    let raf = 0
    const go = () => {
      const id = decodeURIComponent(location.hash.replace(/^#/, ''))
      if (!id) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      // ~2 secondes à 60 images par seconde · au-delà, la section n'existe
      // pas et insister ne la ferait pas apparaître.
      if (frames++ < 120) raf = requestAnimationFrame(go)
    }
    go()
    const again = () => { frames = 0; cancelAnimationFrame(raf); go() }
    window.addEventListener('hashchange', again)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('hashchange', again) }
  }, [])
}
