import { create } from 'zustand'

/** How many things are currently covering the app.
 *
 *  The dojo is a shadowed WebGL room that renders every frame, forever. That is
 *  the right behaviour when you are looking at it and wrong the instant anything
 *  covers it: opening the menu took five seconds, and My Credits took thirteen,
 *  because React was fighting a 60fps render loop for the main thread. From the
 *  outside that is indistinguishable from a page that never loads — which is
 *  exactly what it was reported as.
 *
 *  Full-screen surfaces and the menu raise this while they are up, and Scene3D
 *  stops drawing. Nothing on screen changes; there was nothing to see.
 */
interface OverlayState {
  /** number of surfaces currently over the app */
  count: number
  push: () => void
  pop: () => void
}

export const useOverlay = create<OverlayState>((set) => ({
  count: 0,
  push: () => set((s) => ({ count: s.count + 1 })),
  pop: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
}))

/** true while anything is covering the app */
export const appIsCovered = () => useOverlay.getState().count > 0
