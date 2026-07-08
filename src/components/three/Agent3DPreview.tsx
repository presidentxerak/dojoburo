import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { Character3D } from './Character3D'

// Keep the agent facing forward with a gentle idle: a soft look left/right,
// a tiny lean, and a subtle bob · no full turntable rotation.
function Idle({ speed, phase, children }: { speed: number; phase: number; children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime * speed + phase
    g.current.rotation.y = Math.sin(t * 0.8) * 0.28
    g.current.rotation.x = Math.sin(t * 0.6) * 0.04
    g.current.position.y = -1.55 + Math.sin(t * 1.2) * 0.05
  })
  return <group ref={g} position={[0, -1.55, 0]}>{children}</group>
}

/** A small self-contained canvas that renders one front-facing 3D agent from a
 *  skin/character, gently idling. Used for card avatars and the skin picker. */
export function Agent3DPreview({
  character,
  size = 120,
  mood = 'happy',
  speed = 1,
  phase = 0,
}: {
  character: Character
  size?: number
  mood?: Mood
  speed?: number
  phase?: number
}) {
  return (
    <div className="a3d" style={{ width: size, height: size }}>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.25, 4.3], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 0.95]} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        <Idle speed={speed} phase={phase}>
          <Character3D bare id="preview" character={character} x={0} z={0} mood={mood} selected={false} busy={false} name="" level={1} onSelect={() => {}} />
        </Idle>
      </Canvas>
    </div>
  )
}
