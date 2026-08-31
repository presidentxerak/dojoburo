import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { Character3D } from './Character3D'

/**
 * Frame the character from its own size, instead of guessing a camera distance.
 *
 * A hand-tuned `dist` + `lift` pair only ever fits ONE character: the wizard's
 * hat left the frame at the distance that suited the ninja, and the taller
 * models sat off-centre with their feet cut off. So we measure the model once
 * it exists, centre it on the origin and pull the camera back to exactly the
 * distance that contains it — every character, at any canvas size.
 *
 * The idle animation swings the model ±0.28 rad, so the DEPTH counts as width:
 * a character that is deeper than it is wide would otherwise clip its own
 * shoulders halfway through the turn.
 */
function Fit({ padding = 1.1, children }: { padding?: number; children: ReactNode }) {
  const inner = useRef<THREE.Group>(null)
  const { camera, size } = useThree()
  useLayoutEffect(() => {
    const g = inner.current
    if (!g) return
    g.position.set(0, 0, 0)
    const box = new THREE.Box3().setFromObject(g)
    if (box.isEmpty()) return
    const centre = box.getCenter(new THREE.Vector3())
    const extent = box.getSize(new THREE.Vector3())
    g.position.set(-centre.x, -centre.y, -centre.z)

    const cam = camera as THREE.PerspectiveCamera
    const vFov = (cam.fov * Math.PI) / 180
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * (cam.aspect || 1))
    const width = Math.max(extent.x, extent.z) // it turns while it idles
    const forHeight = extent.y / 2 / Math.tan(vFov / 2)
    const forWidth = width / 2 / Math.tan(hFov / 2)
    cam.position.set(0, 0, Math.max(forHeight, forWidth) * padding + extent.z / 2)
    cam.lookAt(0, 0, 0)
    cam.updateProjectionMatrix()
    // re-frames when the canvas is resized or the character is swapped
  }, [camera, size.width, size.height, children])
  return <group ref={inner}>{children}</group>
}

// Keep the agent facing forward with a gentle idle: a soft look left/right,
// a tiny lean, and a subtle bob · no full turntable rotation.
function Idle({ speed, phase, lift, children }: { speed: number; phase: number; lift: number; children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime * speed + phase
    g.current.rotation.y = Math.sin(t * 0.8) * 0.28
    g.current.rotation.x = Math.sin(t * 0.6) * 0.04
    g.current.position.y = lift + Math.sin(t * 1.2) * 0.05
  })
  return <group ref={g} position={[0, lift, 0]}>{children}</group>
}

/** A small self-contained canvas that renders one front-facing 3D agent from a
 *  skin/character, gently idling. Used for card avatars and the skin picker. */
export function Agent3DPreview({
  character,
  size = 120,
  mood = 'happy',
  speed = 1,
  phase = 0,
  id = 'preview',
  dist = 4.3,
  lift = -1.55,
  fit = false,
  padding = 1.1,
}: {
  character: Character
  size?: number
  mood?: Mood
  speed?: number
  phase?: number
  id?: string
  /** camera distance · smaller frames the character tighter (bigger on screen).
   *  Ignored when `fit` is on, which measures the character instead. */
  dist?: number
  /** where the character's feet sit · more negative drops them down the frame */
  lift?: number
  /** frame the character from its own bounding box · centred, never clipped */
  fit?: boolean
  /** breathing room around a fitted character · 1 = touching the edges */
  padding?: number
}) {
  const body = (
    <Character3D bare id={id} character={character} x={0} z={0} mood={mood} selected={false} busy={false} name="" level={1} onSelect={() => {}} />
  )
  return (
    <div className="a3d" style={{ width: size, height: size }}>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, fit ? 0 : 0.25, dist], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 0.95]} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        {/* fitted characters are centred by Fit, so the idle must not lift them */}
        <Idle speed={speed} phase={phase} lift={fit ? 0 : lift}>
          {fit ? <Fit padding={padding}>{body}</Fit> : body}
        </Idle>
      </Canvas>
    </div>
  )
}
