import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import { Character3D } from './Character3D'
import { useInView } from '../landing/useInView'

// A live, front-facing 3D agent for cards. It only mounts its WebGL canvas
// while near the viewport (via IntersectionObserver) and unmounts when scrolled
// away, so a whole dashboard of cards never exceeds the browser's ~16 live
// context limit — the same technique the landing uses for its studio grid.

function Idle({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime
    g.current.rotation.y = Math.sin(t * 0.7) * 0.26
    g.current.position.y = -1.55 + Math.sin(t * 1.1) * 0.04
  })
  return <group ref={g} position={[0, -1.55, 0]}>{children}</group>
}

export function Character3DImage({
  character,
  size = 72,
  className = '',
}: {
  character: Character
  size?: number
  className?: string
}) {
  const [ref, inView] = useInView<HTMLDivElement>('300px')
  return (
    <div ref={ref} className={`c3d-img ${className}`} style={{ width: size, height: size }}>
      {inView && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.25, 4.3], fov: 40 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        >
          <hemisphereLight args={['#ffffff', '#c7cede', 0.95]} />
          <directionalLight position={[3, 5, 4]} intensity={1.1} />
          <Idle>
            <Character3D bare id={className || 'card'} character={character} x={0} z={0} mood="happy" selected={false} busy={false} name="" level={1} onSelect={() => {}} />
          </Idle>
        </Canvas>
      )}
    </div>
  )
}
