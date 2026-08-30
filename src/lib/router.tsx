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
import { useSyncExternalStore } from 'react'

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
