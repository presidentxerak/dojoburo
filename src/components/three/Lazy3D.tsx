import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'

const W = '#f5f5f7'
const K = '#22252d'
const MAT = { roughness: 0.82, metalness: 0 }

function B({ p, r, c, s = [1, 1, 1] as [number, number, number] }: { p: [number, number, number]; r: number; c: string; s?: [number, number, number] }) {
  return (
    <mesh position={p} scale={s} castShadow>
      <sphereGeometry args={[r, 20, 18]} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}

/** Lazy the panda: sleeps and snores in front of the bamboo, never works.
 *  Tap him for the office's token / XRP / productivity dashboard. */
export function Lazy3D() {
  const openStats = useDojo((s) => s.openStats)
  const g = useRef<THREE.Group>(null)
  const belly = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (g.current) {
      const sc = hover ? 1.05 : 1
      g.current.scale.lerp(new THREE.Vector3(sc, sc, sc), 0.2)
      g.current.rotation.z = Math.sin(t * 1.3) * 0.025 // gentle sleepy sway
    }
    if (belly.current) {
      const breath = 1 + Math.sin(t * 1.3) * 0.07 // slow snoring breath
      belly.current.scale.set(breath, breath * 0.92, breath)
    }
  })

  return (
    <group
      position={[7.2, 0, 2.4]}
      rotation={[0, -0.55, 0]}
      onClick={(e) => {
        e.stopPropagation()
        openStats()
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHover(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHover(false)
        document.body.style.cursor = 'auto'
      }}
    >
      <group ref={g}>
        {/* rump + slumped body */}
        <B p={[0, 0.62, 0]} r={0.72} c={W} s={[1.05, 0.9, 1]} />
        {/* breathing belly */}
        <group ref={belly} position={[0, 0.86, 0.34]}>
          <B p={[0, 0, 0]} r={0.5} c={W} />
        </group>
        {/* black legs resting forward */}
        <B p={[-0.34, 0.34, 0.5]} r={0.24} c={K} s={[1, 0.7, 1.2]} />
        <B p={[0.34, 0.34, 0.5]} r={0.24} c={K} s={[1, 0.7, 1.2]} />
        {/* black arms flopped down */}
        <B p={[-0.62, 0.66, 0.28]} r={0.2} c={K} s={[1, 1.2, 1]} />
        <B p={[0.62, 0.66, 0.28]} r={0.2} c={K} s={[1, 1.2, 1]} />

        {/* head, drooped a touch to the side as he dozes */}
        <group position={[0, 1.5, 0.12]} rotation={[0.15, 0, 0.12]}>
          <B p={[0, 0, 0]} r={0.56} c={W} />
          {/* ears */}
          <B p={[-0.4, 0.42, -0.05]} r={0.2} c={K} />
          <B p={[0.4, 0.42, -0.05]} r={0.2} c={K} />
          {/* black eye patches */}
          <B p={[-0.22, 0.04, 0.4]} r={0.17} c={K} s={[1, 1.35, 0.6]} />
          <B p={[0.22, 0.04, 0.4]} r={0.17} c={K} s={[1, 1.35, 0.6]} />
          {/* closed sleeping eyes (light arcs on the patches) */}
          <mesh position={[-0.22, 0.03, 0.55]} rotation={[0, 0, -0.25]}><boxGeometry args={[0.16, 0.03, 0.02]} /><meshStandardMaterial color={'#d7c19c'} {...MAT} /></mesh>
          <mesh position={[0.22, 0.03, 0.55]} rotation={[0, 0, 0.25]}><boxGeometry args={[0.16, 0.03, 0.02]} /><meshStandardMaterial color={'#d7c19c'} {...MAT} /></mesh>
          {/* snout + nose + little open snoring mouth */}
          <B p={[0, -0.18, 0.5]} r={0.2} c={W} s={[1.1, 0.8, 0.8]} />
          <B p={[0, -0.12, 0.66]} r={0.08} c={K} s={[1.4, 1, 1]} />
          <B p={[0, -0.32, 0.6]} r={0.06} c={'#7a2f45'} s={[1.2, 1, 0.6]} />
        </group>
      </group>

      {/* animated ZZZ rising from his head */}
      <Html position={[-0.15, 2.75, 0.35]} center distanceFactor={13} zIndexRange={[8, 0]} pointerEvents="none">
        <div className="zzz"><span>Z</span><span>z</span><span>z</span></div>
      </Html>
      {/* name tag */}
      <Html position={[0, 2.05, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d lazy">Lazy · sleeping</div>
      </Html>
    </group>
  )
}
