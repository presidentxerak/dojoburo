import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { Character3D } from './Character3D'

function Spin({ speed, children }: { speed: number; children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * speed
  })
  return <group ref={g}>{children}</group>
}

/** A small self-contained canvas that renders one rotating 3D agent from a
 *  skin/character. Used for card avatars and the skin-selection preview. */
export function Agent3DPreview({
  character,
  size = 120,
  mood = 'happy',
  speed = 0.6,
}: {
  character: Character
  size?: number
  mood?: Mood
  speed?: number
}) {
  return (
    <div className="a3d" style={{ width: size, height: size }}>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.25, 4.3], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 0.95]} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        <Spin speed={speed}>
          <group position={[0, -1.55, 0]}>
            <Character3D bare id="preview" character={character} x={0} z={0} mood={mood} selected={false} busy={false} name="" level={1} onSelect={() => {}} />
          </group>
        </Spin>
      </Canvas>
    </div>
  )
}
