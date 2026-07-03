import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'
import { HERO_CHARACTER } from '../../data/looks'
import { heroPos3D } from '../../three/layout3d'
import { AsciiFace3D } from './AsciiFace3D'

const MAT = { roughness: 0.72, metalness: 0.05 }

export function Hero3D() {
  const targetId = useDojo((s) => s.heroTargetId)
  const g = useRef<THREE.Group>(null)
  const walk = useRef(0)
  const c = HERO_CHARACTER

  useFrame((_, dt) => {
    if (!g.current) return
    const [tx, tz] = heroPos3D(targetId)
    const p = g.current.position
    const moving = Math.abs(p.x - tx) + Math.abs(p.z - tz) > 0.05
    p.x += (tx - p.x) * Math.min(1, dt * 3)
    p.z += (tz - p.z) * Math.min(1, dt * 3)
    walk.current += dt * (moving ? 14 : 3)
    g.current.position.y = moving ? Math.abs(Math.sin(walk.current)) * 0.12 : Math.abs(Math.sin(walk.current)) * 0.04
  })

  return (
    <group ref={g} position={[0, 0, 7.4]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[0.5, 24]} />
        <meshBasicMaterial color={'#000'} transparent opacity={0.2} />
      </mesh>
      {/* legs / body / arms / head */}
      <mesh position={[-0.22, 0.3, 0]} castShadow><cylinderGeometry args={[0.16, 0.16, 0.56, 14]} /><meshStandardMaterial color={c.pants} {...MAT} /></mesh>
      <mesh position={[0.22, 0.3, 0]} castShadow><cylinderGeometry args={[0.16, 0.16, 0.56, 14]} /><meshStandardMaterial color={c.pants} {...MAT} /></mesh>
      <mesh position={[0, 1.0, 0]} scale={[1, 1.05, 0.9]} castShadow><sphereGeometry args={[0.52, 20, 18]} /><meshStandardMaterial color={c.outfit} {...MAT} /></mesh>
      <mesh position={[-0.54, 1.0, 0]} castShadow><sphereGeometry args={[0.17, 16, 14]} /><meshStandardMaterial color={c.outfit} {...MAT} /></mesh>
      <mesh position={[0.54, 1.0, 0]} castShadow><sphereGeometry args={[0.17, 16, 14]} /><meshStandardMaterial color={c.outfit} {...MAT} /></mesh>
      <mesh position={[0, 1.85, 0]} castShadow><sphereGeometry args={[0.58, 22, 20]} /><meshStandardMaterial color={c.face} {...MAT} /></mesh>
      {/* cap */}
      <mesh position={[0, 2.2, -0.05]} scale={[1, 0.5, 1]} castShadow><sphereGeometry args={[0.58, 20, 16]} /><meshStandardMaterial color={c.outfit} {...MAT} /></mesh>
      <mesh position={[0, 2.12, 0.5]} castShadow><boxGeometry args={[0.7, 0.08, 0.3]} /><meshStandardMaterial color={c.outfit} {...MAT} /></mesh>
      {/* cheeks + face */}
      <mesh position={[-0.3, 1.72, 0.44]} castShadow><sphereGeometry args={[0.11, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <mesh position={[0.3, 1.72, 0.44]} castShadow><sphereGeometry args={[0.11, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <AsciiFace3D mood={targetId === 'home' ? 'idle' : 'talk'} position={[0, 1.88, 0.56]} scale={0.68} color="#1c2029" />

      <Html position={[0, 2.85, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d hero">HERO</div>
      </Html>
    </group>
  )
}
