import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Character3D } from '../three/Character3D'
import { Shape, Spin } from './Object3D'
import type { Character } from '../../data/looks'

// A pitch-deck hero: a kawaii character seen slightly three-quarter, hopping /
// walking on the spot, carrying a 3D object that relates to the slide's message.

function Hop({ children }: { children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime
    const hop = Math.abs(Math.sin(t * 2.2)) // a springy jump
    g.current.position.y = -1.55 + hop * 0.5
    g.current.rotation.z = Math.sin(t * 2.2) * 0.05
    g.current.rotation.x = -0.04 + Math.sin(t * 2.2 + 0.6) * 0.04 // slight forward lean as it lands
  })
  return <group ref={g} position={[0, -1.55, 0]}>{children}</group>
}

function FloatObj({ children }: { children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime
    g.current.position.y = 0.5 + Math.sin(t * 2.0 + 1.2) * 0.18
  })
  return <group ref={g}>{children}</group>
}

/** Character (three-quarter, hopping) + a relevant floating 3D object. */
export function DeckHero({ character, id, obj, color, size = 300 }: { character: Character; id: string; obj: string; color: string; size?: number }) {
  return (
    <div className="pd-hero3d" style={{ width: size, height: size }}>
      <Canvas dpr={[1, 1.7]} camera={{ position: [0, 0.3, 4.6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 1.0]} />
        <directionalLight position={[4, 6, 5]} intensity={1.3} />
        <pointLight position={[-3, -1, 4]} intensity={0.7} color={color} />
        {/* three-quarter view: turn the whole rig ~30deg */}
        <group rotation={[0, -0.52, 0]}>
          <Hop>
            <Character3D bare id={id} character={character} x={0} z={0} mood="happy" selected={false} busy name="" level={1} onSelect={() => {}} />
            <group position={[1.35, 0, 0.6]} scale={0.42}>
              <FloatObj><Spin speed={0.7}><Shape kind={obj} color={color} /></Spin></FloatObj>
            </group>
          </Hop>
        </group>
      </Canvas>
    </div>
  )
}
