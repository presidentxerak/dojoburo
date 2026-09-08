// The rotating dojo at the top of the landing page.
//
// The scene is a separate module so three.js is fetched when the hero is on
// screen rather than before the words are. This file owns the BOX and the
// observer; ./DojoDioramaScene owns the canvas.
//
// They must not both own an element. A first attempt gave the wrapper its own
// div and let the scene keep its old root: the observer's target vanished the
// instant the scene mounted, useInView reported "no longer intersecting", the
// scene unmounted, and the diorama settled on never existing. One element, one
// observer, and the canvas rendered inside it.
import { Suspense, lazy } from 'react'
import { useInView } from './useInView'

const Scene = lazy(() => import('./DojoDioramaScene'))

export function DojoDiorama() {
  const [ref, inView] = useInView<HTMLDivElement>('300px')
  return (
    <div className="lp-dojo3d" ref={ref}>
      {inView && <Suspense fallback={null}><Scene /></Suspense>}
    </div>
  )
}
