// A character preview, without the engine attached.
//
// This wrapper exists so that importing a teammate's face does not import
// three.js. The scene is fetched the first time one is actually rendered —
// which on the landing page and the job-title pages is after the text, and on
// the Studio is while the founder is still reading the panel.
//
// The props and the name are unchanged, so every existing call site is
// untouched; only the moment the 841 kB arrives has moved.
import { Suspense, lazy, type ComponentProps } from 'react'

const Scene = lazy(() => import('./Agent3DScene'))

export type Agent3DPreviewProps = ComponentProps<typeof Scene>

export function Agent3DPreview(props: Agent3DPreviewProps) {
  // No fallback: every call site already sizes the box in CSS, so an empty
  // frame for one network round trip is exactly what was there a moment before
  // when useInView had not fired yet. A spinner would be new furniture.
  return (
    <Suspense fallback={null}>
      <Scene {...props} />
    </Suspense>
  )
}
