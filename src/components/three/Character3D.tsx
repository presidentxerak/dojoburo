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

function Toppers({ c }: { c: Character }) {
  const hy = 1.95 // head centre Y
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
    case 'skeleton':
      return <group>{null}</group>
    case 'human':
      return <Ball p={[0, hy + 0.32, -0.08]} r={0.6} c={c.extra} s={[1, 0.55, 1]} />
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

  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const amp = busy ? 0.09 : 0.045
    const spd = busy ? 9 : 1.6
    g.current.position.y = Math.abs(Math.sin(t * spd + x)) * amp
    const target = hover ? 1.08 : 1
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.2)
  })

  const isSlime = character.kind === 'slime'

  return (
    <group position={[x, 0, z]}>
      {/* selection ring on the floor */}
      {selected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <ringGeometry args={[0.85, 1.05, 40]} />
          <meshBasicMaterial color={'#ff7eb6'} transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      )}
      {/* soft contact shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[0.55, 24]} />
        <meshBasicMaterial color={'#000'} transparent opacity={0.18} />
      </mesh>

      <group
        ref={g}
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
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
        {isSlime ? (
          <group>
            <Ball p={[0, 0.72, 0]} r={0.85} c={character.face} s={[1, 0.82, 1]} />
            <Cyl p={[0, 1.5, 0]} r={0.05} h={0.4} c={character.face} />
            <Ball p={[0, 1.78, 0]} r={0.14} c={'#fff'} />
            <Ball p={[0, 1.8, 0.1]} r={0.06} c={'#333'} />
            <AsciiFace3D mood={mood} position={[0, 0.82, 0.7]} scale={0.72} color={faceColor} />
          </group>
        ) : (
          <group>
            {/* legs */}
            <Cyl p={[-0.24, 0.32, 0]} r={0.17} h={0.6} c={character.pants} />
            <Cyl p={[0.24, 0.32, 0]} r={0.17} h={0.6} c={character.pants} />
            {/* body */}
            <Ball p={[0, 1.05, 0]} r={0.56} c={character.outfit} s={[1, 1.05, 0.9]} />
            {/* arms */}
            <Ball p={[-0.58, 1.05, 0]} r={0.19} c={character.outfit} />
            <Ball p={[0.58, 1.05, 0]} r={0.19} c={character.outfit} />
            {/* head */}
            <Ball p={[0, 1.95, 0]} r={0.62} c={character.face} />
            {/* cheeks */}
            <Ball p={[-0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
            <Ball p={[0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
            <Toppers c={character} />
            <AsciiFace3D mood={mood} position={[0, 1.98, 0.6]} scale={0.72} color={faceColor} />
          </group>
        )}
      </group>

      <Html position={[0, isSlime ? 2.2 : 3.05, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none" occlude={false}>
        <div className={`tag3d ${selected ? 'sel' : ''}`}>
          {name} <span>Lv.{level}</span>
        </div>
      </Html>
      {busy && (
        <Html position={[0, isSlime ? 2.5 : 3.5, 0]} center distanceFactor={12} zIndexRange={[6, 0]} pointerEvents="none">
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
