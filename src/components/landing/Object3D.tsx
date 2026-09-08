// The landing page's spinning objects.
//
// This file holds no three.js. The scene lives in ./Object3DScene and is pulled
// in only when one of these actually scrolls into view — see the note at the
// top of that file for why that matters more than it sounds.
import { Suspense, lazy } from 'react'
import { useInView } from './useInView'

const ObjScene = lazy(() => import('./Object3DScene'))

/** A centred, self-contained spinning 3D object · no scroll parallax, no
 *  absolute positioning. Used inside the pitch deck slides. */
export function Object3DInline({ kind, color, size = 220, speed = 0.5 }: { kind: string; color: string; size?: number; speed?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>('120px')
  return (
    <div ref={ref} className="pd-obj3d" style={{ width: size, height: size, ['--obj' as any]: color }} aria-hidden>
      {inView && (
        <Suspense fallback={null}>
          <ObjScene kind={kind} color={color} speed={speed} />
        </Suspense>
      )}
    </div>
  )
}

/** A spinning full-3D object. Rendered centred in the gap below each section
 *  (positioning is handled in CSS · no scroll parallax, so it never drifts over
 *  the section text). */
export function Object3D({
  kind,
  color,
  size = 150,
  speed = 0.5,
}: {
  kind: string
  color: string
  size?: number
  /** kept for call-site compatibility; positioning is now purely CSS */
  side?: 'left' | 'right'
  parallax?: number
  speed?: number
}) {
  const [ref, inView] = useInView<HTMLDivElement>('200px')
  return (
    <div ref={ref} className="lp-obj3d" style={{ width: size, height: size, ['--obj' as any]: color }} aria-hidden>
      {inView && (
        // The box is sized by CSS whether or not the scene has arrived, so
        // nothing on the page moves when it does.
        <Suspense fallback={null}>
          <ObjScene kind={kind} color={color} speed={speed} />
        </Suspense>
      )}
    </div>
  )
}
