import { useEffect, useRef, useState } from 'react'

/** Track whether an element is near the viewport. Used to lazily mount/unmount
 *  WebGL canvases so the landing never exceeds the browser's context limit. */
export function useInView<T extends HTMLElement>(rootMargin = '350px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return [ref, inView] as const
}
