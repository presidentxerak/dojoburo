import { useEffect, useState, type ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { Character } from '../../data/looks'
import { Character3D } from './Character3D'

// ---------------------------------------------------------------------------
// One shared WebGL context renders every card character to a PNG, once, and
// caches it. Cards then show plain <img>s · so a whole dashboard of agent
// skins costs ZERO extra live contexts (only the main 3D dojo scene keeps a
// live one). This avoids the browser's ~16-context ceiling entirely, which is
// what could silently blank the scene or a panel on real GPUs.
// ---------------------------------------------------------------------------

export const skinKey = (c: Character) => `${c.kind}|${c.face}|${c.outfit}|${c.outfit2}|${c.pants}|${c.extra}`

const cache = new Map<string, string>()
// A job is any small 3D scene · a character (cards, grade avatars) or an object
// (the profile's 3D icons). Both go through the same single context.
type Job = { node: ReactNode; key: string; resolve: (url: string) => void }
const queue: Job[] = []
let notify: (() => void) | null = null

export function cachedSnapshot(c: Character): string | null {
  return cache.get(skinKey(c)) ?? null
}

export function requestSnapshot(c: Character): Promise<string> {
  const key = skinKey(c)
  return requestNodeSnapshot(key, (
    <group position={[0, -1.55, 0]}>
      <Character3D bare id={key} character={c} x={0} z={0} mood="happy" selected={false} busy={false} name="" level={1} onSelect={() => {}} />
    </group>
  ))
}

/** The cached picture of any keyed scene, if it was already rendered. */
export function cachedNodeSnapshot(key: string): string | null {
  return cache.get(key) ?? null
}

/** Render any small scene once and cache it under `key`. The scene is framed by
 *  the factory's camera (about 3 units tall, centred a little above 0). */
export function requestNodeSnapshot(key: string, node: ReactNode): Promise<string> {
  const hit = cache.get(key)
  if (hit) return Promise.resolve(hit)
  const pending = queue.find((j) => j.key === key)
  return new Promise((resolve) => {
    if (pending) {
      const prev = pending.resolve
      pending.resolve = (u) => { prev(u); resolve(u) }
      return
    }
    queue.push({ node, key, resolve })
    notify?.()
  })
}

// Renders the current job's character and, after a couple of frames, grabs the
// buffer. Keyed by job in the parent so its frame counter resets per job while
// the surrounding Canvas (and its single GL context) stays alive.
function Grab({ node, onDone }: { node: ReactNode; onDone: (url: string) => void }) {
  const gl = useThree((s) => s.gl)
  const scene = useThree((s) => s.scene)
  const camera = useThree((s) => s.camera)
  const n = useState(() => ({ f: 0, done: false }))[0]
  useFrame(() => {
    if (n.done) return
    n.f += 1
    if (n.f >= 3) {
      n.done = true
      let url = ''
      try {
        gl.render(scene, camera)
        const u = gl.domElement.toDataURL('image/png')
        if (u && u.length > 2000) url = u
      } catch { /* keep '' */ }
      onDone(url)
    }
  })
  return <>{node}</>
}

/** Mount ONCE near the app root. Processes the snapshot queue one job at a time
 *  through a single, persistent hidden canvas (one GL context for the whole
 *  app's card artwork). */
export function SnapshotFactory() {
  const [job, setJob] = useState<Job | null>(null)

  useEffect(() => {
    const pump = () => { setJob((cur) => cur ?? queue[0] ?? null) }
    notify = pump
    pump()
    return () => { notify = null }
  }, [])

  const finish = (url: string) => {
    if (job) {
      if (url) cache.set(job.key, url)
      job.resolve(url)
      const i = queue.indexOf(job)
      if (i >= 0) queue.splice(i, 1)
    }
    setJob(queue[0] ?? null) // straight to the next job · no idle gap
  }

  // Only mount the canvas while there's work. When the queue drains the canvas
  // unmounts · no idle GPU, and its WebGL context is released.
  if (!job) return null
  return (
    // Parked INSIDE the viewport (top-left corner), invisible and clipped to
    // nothing: a box at -10000 px counted as content overflowing the page for
    // the layout audits, and some mobile browsers widen the layout viewport
    // to include it. Clipping and opacity do not affect what the canvas draws.
    <div aria-hidden style={{ position: 'fixed', left: 0, top: 0, width: 128, height: 128, pointerEvents: 'none', opacity: 0, clipPath: 'inset(50%)', zIndex: -1 }}>
      <Canvas
        dpr={1.3}
        camera={{ position: [0, 0.25, 4.3], fov: 40 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'low-power' }}
        frameloop="always"
      >
        <hemisphereLight args={['#ffffff', '#c7cede', 0.95]} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        <Grab key={job.key} node={job.node} onDone={finish} />
      </Canvas>
    </div>
  )
}
