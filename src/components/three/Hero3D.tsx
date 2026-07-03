import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'
import { heroPos3D } from '../../three/layout3d'
import { AsciiFace3D } from './AsciiFace3D'

const CLOUD = '#f7fbff'
const MAT = { roughness: 0.9, metalness: 0 }

function Puff({ p, r }: { p: [number, number, number]; r: number }) {
  return (
    <mesh position={p} castShadow>
      <sphereGeometry args={[r, 20, 18]} />
      <meshStandardMaterial color={CLOUD} {...MAT} />
    </mesh>
  )
}

/** The founder-hero as a small floating kawaii cloud. Drifts to whichever agent
 *  is working. */
export function Hero3D() {
  const targetId = useDojo((s) => s.heroTargetId)
  const g = useRef<THREE.Group>(null)

  useFrame((state, dt) => {
    if (!g.current) return
    const [tx, tz] = heroPos3D(targetId)
    const p = g.current.position
    p.x += (tx - p.x) * Math.min(1, dt * 2.4)
    p.z += (tz - p.z) * Math.min(1, dt * 2.4)
    // gentle float + tiny wobble
    const t = state.clock.elapsedTime
    p.y = 1.35 + Math.sin(t * 1.6) * 0.12
    g.current.rotation.z = Math.sin(t * 0.9) * 0.04
  })

  return (
    <group ref={g} position={[0, 1.35, 7.4]}>
      {/* soft ground shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.34, 0]}>
        <circleGeometry args={[0.55, 24]} />
        <meshBasicMaterial color={'#000'} transparent opacity={0.14} />
      </mesh>
      {/* cloud puffs (flat-ish bottom) */}
      <Puff p={[0, 0.05, 0]} r={0.6} />
      <Puff p={[-0.55, -0.02, 0]} r={0.42} />
      <Puff p={[0.55, -0.02, 0]} r={0.42} />
      <Puff p={[-0.2, 0.32, -0.02]} r={0.4} />
      <Puff p={[0.28, 0.3, -0.02]} r={0.36} />
      <mesh position={[0, -0.18, 0]} scale={[1, 0.5, 1]} castShadow>
        <sphereGeometry args={[0.75, 22, 16]} />
        <meshStandardMaterial color={CLOUD} {...MAT} />
      </mesh>
      {/* rosy cheeks + face */}
      <mesh position={[-0.34, -0.05, 0.5]}><sphereGeometry args={[0.1, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <mesh position={[0.34, -0.05, 0.5]}><sphereGeometry args={[0.1, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <AsciiFace3D mood={targetId === 'home' ? 'happy' : 'talk'} position={[0, 0.02, 0.66]} scale={0.6} color="#5566aa" />

      <Html position={[0, 0.95, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d hero">HERO</div>
      </Html>
    </group>
  )
}
