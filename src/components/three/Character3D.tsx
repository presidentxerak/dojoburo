import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { AsciiFace3D } from './AsciiFace3D'

const MAT = { roughness: 0.72, metalness: 0.05 }

function Ball({ p, r, c, s = [1, 1, 1] as [number, number, number] }: { p: [number, number, number]; r: number; c: string; s?: [number, number, number] }) {
  return (
    <mesh position={p} scale={s} castShadow>
      <sphereGeometry args={[r, 22, 20]} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}
function Cyl({ p, r, h, c, rot }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}
function Cone({ p, r, h, c, rot }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <coneGeometry args={[r, h, 16]} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}
function Box({ p, s, c, rot }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}

// A typing arm: pivots at the shoulder, forearm reaches forward-down onto the
// laptop keyboard; taps up and down (offset phase per side).
function Arm({ side, color, hand, busy }: { side: number; color: string; hand: string; busy: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const spd = busy ? 16 : 7
    g.current.rotation.x = -0.42 + Math.sin(t * spd + (side > 0 ? 0 : 1.4)) * (busy ? 0.16 : 0.07)
  })
  return (
    <group ref={g} position={[side * 0.42, 1.22, 0.06]} rotation={[-0.42, 0, 0]}>
      <mesh position={[0, 0, 0.36]} castShadow>
        <boxGeometry args={[0.16, 0.16, 0.72]} />
        <meshStandardMaterial color={color} {...MAT} />
      </mesh>
      <mesh position={[0, 0, 0.74]} castShadow>
        <sphereGeometry args={[0.14, 14, 12]} />
        <meshStandardMaterial color={hand} {...MAT} />
      </mesh>
    </group>
  )
}

function Toppers({ c }: { c: Character }) {
  const hy = 1.95
  switch (c.kind) {
    case 'cat':
      return (
        <group>
          <Cone p={[-0.32, hy + 0.62, 0]} r={0.22} h={0.42} c={c.face} />
          <Cone p={[0.32, hy + 0.62, 0]} r={0.22} h={0.42} c={c.face} />
          <Cone p={[-0.32, hy + 0.6, 0.05]} r={0.11} h={0.24} c={c.extra} />
          <Cone p={[0.32, hy + 0.6, 0.05]} r={0.11} h={0.24} c={c.extra} />
        </group>
      )
    case 'ninja':
      return (
        <group>
          <mesh position={[0, hy + 0.12, 0]} castShadow>
            <torusGeometry args={[0.6, 0.1, 12, 28]} />
            <meshStandardMaterial color={c.outfit2} {...MAT} />
          </mesh>
          <Box p={[0.55, hy + 0.12, 0.2]} s={[0.16, 0.16, 0.16]} c={c.outfit2} />
          <Box p={[0.78, hy - 0.05, 0.2]} s={[0.1, 0.32, 0.06]} c={c.outfit2} rot={[0, 0, 0.4]} />
        </group>
      )
    case 'wizard':
      return (
        <group>
          <Cone p={[0, hy + 0.95, 0]} r={0.5} h={1.1} c={c.outfit2} />
          <Cyl p={[0, hy + 0.5, 0]} r={0.62} h={0.12} c={c.outfit2} />
          <Ball p={[0, hy + 0.75, 0.42]} r={0.09} c={'#ffe066'} />
        </group>
      )
    case 'alien':
      return (
        <group>
          <Cyl p={[-0.26, hy + 0.7, 0]} r={0.05} h={0.5} c={c.face} />
          <Cyl p={[0.26, hy + 0.7, 0]} r={0.05} h={0.5} c={c.face} />
          <Ball p={[-0.26, hy + 1.0, 0]} r={0.13} c={c.extra} />
          <Ball p={[0.26, hy + 1.0, 0]} r={0.13} c={c.extra} />
        </group>
      )
    case 'goldorak':
      return (
        <group>
          <Box p={[-0.66, hy + 0.15, 0]} s={[0.5, 0.16, 0.18]} c={c.extra} rot={[0, 0, 0.5]} />
          <Box p={[0.66, hy + 0.15, 0]} s={[0.5, 0.16, 0.18]} c={c.extra} rot={[0, 0, -0.5]} />
          <Cyl p={[0, hy + 0.7, 0]} r={0.05} h={0.4} c={'#8b93a1'} />
          <Ball p={[0, hy + 0.95, 0]} r={0.11} c={c.extra} />
          <Box p={[0, hy + 0.2, 0.5]} s={[0.16, 0.5, 0.1]} c={c.extra} />
        </group>
      )
    case 'robot':
      return (
        <group>
          <Cyl p={[0, hy + 0.7, 0]} r={0.045} h={0.4} c={'#8b93a1'} />
          <Ball p={[0, hy + 0.95, 0]} r={0.1} c={c.extra} />
          <Ball p={[-0.62, hy, 0]} r={0.1} c={'#8b93a1'} />
          <Ball p={[0.62, hy, 0]} r={0.1} c={'#8b93a1'} />
        </group>
      )
    case 'monster':
      return (
        <group>
          <Cone p={[-0.3, hy + 0.65, 0]} r={0.15} h={0.5} c={'#f4efe0'} rot={[0, 0, 0.25]} />
          <Cone p={[0.3, hy + 0.65, 0]} r={0.15} h={0.5} c={'#f4efe0'} rot={[0, 0, -0.25]} />
        </group>
      )
    case 'vampire':
      return (
        <group>
          <Ball p={[0, hy + 0.35, -0.05]} r={0.62} c={c.extra} s={[1, 0.6, 1]} />
          <Cone p={[0, hy + 0.15, 0.55]} r={0.12} h={0.5} c={c.extra} rot={[Math.PI, 0, 0]} />
        </group>
      )
    case 'cyborg':
      return (
        <group>
          <Box p={[0.34, hy + 0.05, 0.32]} s={[0.5, 0.7, 0.4]} c={'#c3ccd8'} />
          <Box p={[0.4, hy + 0.05, 0.56]} s={[0.42, 0.12, 0.06]} c={'#ff5a5f'} />
          <Cyl p={[0.5, hy + 0.6, 0]} r={0.04} h={0.35} c={'#8b93a1'} />
        </group>
      )
    case 'human':
      return <Ball p={[0, hy + 0.32, -0.08]} r={0.6} c={c.extra} s={[1, 0.55, 1]} />
    case 'skeleton':
    case 'slime':
    default:
      return null
  }
}

export function Character3D({
  character,
  x,
  z,
  mood,
  selected,
  busy,
  name,
  level,
  onSelect,
}: {
  character: Character
  x: number
  z: number
  mood: Mood
  selected: boolean
  busy: boolean
  name: string
  level: number
  onSelect: () => void
}) {
  const g = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)
  const faceDark = isDark(character.face)
  const faceColor = faceDark ? '#f4f4f4' : '#1c2029'
  const isSlime = character.kind === 'slime'

  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    g.current.position.y = Math.sin(t * 1.6 + x) * 0.02
    const target = hover ? 1.06 : 1
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.2)
  })

  const events = {
    onClick: (e: any) => {
      e.stopPropagation()
      onSelect()
    },
    onPointerOver: (e: any) => {
      e.stopPropagation()
      setHover(true)
      document.body.style.cursor = 'pointer'
    },
    onPointerOut: () => {
      setHover(false)
      document.body.style.cursor = 'auto'
    },
  }

  return (
    <group position={[x, 0, z]}>
      {selected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
          <ringGeometry args={[0.95, 1.15, 40]} />
          <meshBasicMaterial color={'#ff7eb6'} transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      )}

      <group ref={g} {...events}>
        {isSlime ? (
          <group position={[0, 0.05, 0]}>
            <Ball p={[0, 0.78, 0]} r={0.8} c={character.face} s={[1, 0.86, 1]} />
            <Cyl p={[0, 1.5, 0]} r={0.05} h={0.4} c={character.face} />
            <Ball p={[0, 1.78, 0]} r={0.14} c={'#fff'} />
            <Ball p={[0, 1.8, 0.1]} r={0.06} c={'#333'} />
            <AsciiFace3D mood={mood} position={[0, 0.92, 0.9]} scale={0.72} color={faceColor} />
            <Arm side={-1} color={character.face} hand={character.face} busy={busy} />
            <Arm side={1} color={character.face} hand={character.face} busy={busy} />
          </group>
        ) : (
          <group>
            {/* seated: lap + torso, legs hidden behind the desk */}
            <Box p={[0, 0.62, 0.34]} s={[0.7, 0.24, 0.7]} c={character.pants} />
            <Ball p={[0, 1.12, 0]} r={0.56} c={character.outfit} s={[1, 1.02, 0.9]} />
            {/* shoulders */}
            <Ball p={[-0.46, 1.3, 0.02]} r={0.18} c={character.outfit} />
            <Ball p={[0.46, 1.3, 0.02]} r={0.18} c={character.outfit} />
            {/* head */}
            <Ball p={[0, 1.95, 0]} r={0.62} c={character.face} />
            <Ball p={[-0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
            <Ball p={[0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
            <Toppers c={character} />
            <AsciiFace3D mood={mood} position={[0, 1.98, 0.72]} scale={0.72} color={faceColor} />
            {/* typing arms */}
            <Arm side={-1} color={character.outfit} hand={character.face} busy={busy} />
            <Arm side={1} color={character.outfit} hand={character.face} busy={busy} />
          </group>
        )}
      </group>

      <Html position={[0, isSlime ? 2.35 : 2.95, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none" occlude={false}>
        <div className={`tag3d ${selected ? 'sel' : ''}`}>
          {name} <span>Lv.{level}</span>
        </div>
      </Html>
      {busy && (
        <Html position={[0, isSlime ? 2.7 : 3.4, 0]} center distanceFactor={12} zIndexRange={[6, 0]} pointerEvents="none">
          <div className="work3d" />
        </Html>
      )}
    </group>
  )
}

function isDark(hex: string): boolean {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  return 0.299 * ((num >> 16) & 255) + 0.587 * ((num >> 8) & 255) + 0.114 * (num & 255) < 120
}
