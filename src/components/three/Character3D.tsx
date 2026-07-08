import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { useDojo } from '../../store'
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
// laptop keyboard and taps; or raises up to wave hello at the Chief.
function Arm({ side, color, hand, busy, wave }: { side: number; color: string; hand: string; busy: boolean; wave?: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    if (wave) {
      // raise the forearm and swing it side to side
      g.current.rotation.x += (-1.4 - g.current.rotation.x) * 0.14
      g.current.rotation.z = side * (0.5 + Math.sin(t * 9) * 0.45)
    } else {
      const spd = busy ? 15 : 6
      g.current.rotation.x += (-0.42 + Math.sin(t * spd + (side > 0 ? 0 : 1.4)) * (busy ? 0.16 : 0.06) - g.current.rotation.x) * 0.4
      g.current.rotation.z += (0 - g.current.rotation.z) * 0.2
    }
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

// An octopus tentacle: a taper of shrinking balls splaying out from the mantle
// along a horizontal direction, drooping gently and undulating as it goes.
function Tentacle({ base, dir, color, phase, busy }: { base: [number, number, number]; dir: [number, number]; color: string; phase: number; busy: boolean }) {
  const g = useRef<THREE.Group>(null)
  const perp: [number, number] = [-dir[1], dir[0]]
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const spd = busy ? 6 : 2.6
    g.current.children.forEach((c, i) => {
      const w = Math.sin(t * spd + phase + i * 0.8) * 0.07 * (i + 1)
      c.position.x = dir[0] * i * 0.19 + perp[0] * w
      c.position.z = dir[1] * i * 0.19 + perp[1] * w
      c.position.y = -i * i * 0.05 // gentle accelerating droop
    })
  })
  return (
    <group ref={g} position={base}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[dir[0] * i * 0.19, -i * i * 0.05, dir[1] * i * 0.19]} castShadow>
          <sphereGeometry args={[0.19 - i * 0.035, 12, 10]} />
          <meshStandardMaterial color={color} {...MAT} />
        </mesh>
      ))}
    </group>
  )
}

// ADA's retro computer-monitor head: beige case, glowing terminal, ASCII face.
function MonitorHead({ c, mood }: { c: Character; mood: Mood }) {
  return (
    <group position={[0, 1.98, 0]}>
      <Cyl p={[0, -0.66, 0]} r={0.1} h={0.28} c={c.extra} />
      <Box p={[0, -0.82, 0]} s={[0.44, 0.08, 0.34]} c={c.extra} />
      <Box p={[0, 0, 0]} s={[1.16, 0.94, 0.72]} c={c.face} />
      <Box p={[0, 0.02, 0.37]} s={[0.9, 0.7, 0.04]} c={'#10222e'} />
      <mesh position={[0, 0.02, 0.395]}>
        <planeGeometry args={[0.82, 0.62]} />
        <meshStandardMaterial color={'#0a251d'} emissive={'#1f9e6a'} emissiveIntensity={0.55} {...MAT} />
      </mesh>
      <Ball p={[0.44, -0.34, 0.37]} r={0.04} c={'#37d67a'} />
      <AsciiFace3D mood={mood} position={[0, 0.03, 0.44]} scale={0.62} color={'#8bffbf'} />
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

// --- rare head accessories: only ~1 agent in 3 gets one, picked deterministically
type Acc = 'bowler' | 'tophat' | 'cowboy' | 'wizardhat' | 'cap' | 'shades'
const ACCS: Acc[] = ['bowler', 'tophat', 'cowboy', 'wizardhat', 'cap', 'shades']
const CAP_COLORS = ['#e0524f', '#4f9df7', '#45c46a', '#ffc24b', '#a78bfa', '#ff7eb6']
function hashCode(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
function accForId(id: string, kind: string): Acc | null {
  if (kind === 'wizard' || kind === 'monitor' || kind === 'octopus' || kind === 'slime') return null
  const h = Math.abs(hashCode(id + '·hat'))
  if (h % 100 >= 34) return null // ~34% wear an accessory
  return ACCS[h % ACCS.length]
}
function Accessory({ kind, id }: { kind: Acc; id: string }) {
  switch (kind) {
    case 'bowler':
      return <group><Cyl p={[0, 2.5, 0]} r={0.66} h={0.06} c="#2a2a34" /><Ball p={[0, 2.64, 0]} r={0.42} c="#33333f" s={[1, 0.8, 1]} /></group>
    case 'tophat':
      return <group><Cyl p={[0, 2.5, 0]} r={0.72} h={0.05} c="#1a1a20" /><Cyl p={[0, 3.05, 0]} r={0.44} h={0.92} c="#22222c" /><Cyl p={[0, 2.66, 0]} r={0.45} h={0.1} c="#c0392b" /></group>
    case 'cowboy':
      return <group><Cyl p={[0, 2.44, 0]} r={0.94} h={0.05} c="#b07a42" /><Cyl p={[0, 2.72, 0]} r={0.42} h={0.52} c="#a9743f" /><Cyl p={[0, 2.52, 0]} r={0.44} h={0.09} c="#5a3a1c" /></group>
    case 'wizardhat':
      return <group><Cyl p={[0, 2.48, 0]} r={0.72} h={0.05} c="#5a34b0" /><Cone p={[0, 3.25, 0]} r={0.5} h={1.35} c="#6c3fd0" /><Ball p={[0.2, 3.15, 0.32]} r={0.08} c="#ffe066" /><Ball p={[-0.14, 3.6, 0.2]} r={0.06} c="#ffe066" /><Ball p={[0.05, 2.92, 0.42]} r={0.06} c="#fff" /></group>
    case 'cap': {
      const c = CAP_COLORS[Math.abs(hashCode(id)) % CAP_COLORS.length]
      return <group><Ball p={[0, 2.42, 0]} r={0.6} c={c} s={[1, 0.68, 1]} /><Box p={[0, 2.3, 0.56]} s={[0.72, 0.06, 0.42]} c={c} /><Ball p={[0, 2.66, 0]} r={0.06} c="#ffcf3b" /></group>
    }
    case 'shades':
      return <group><Box p={[-0.26, 1.98, 0.6]} s={[0.3, 0.2, 0.06]} c="#15151a" /><Box p={[0.26, 1.98, 0.6]} s={[0.3, 0.2, 0.06]} c="#15151a" /><Box p={[0, 2.0, 0.6]} s={[0.2, 0.05, 0.05]} c="#15151a" /></group>
  }
}

export function Character3D({
  id,
  character,
  x,
  z,
  mood,
  selected,
  busy,
  name,
  level,
  onSelect,
  bare = false,
}: {
  id: string
  character: Character
  x: number
  z: number
  mood: Mood
  selected: boolean
  busy: boolean
  name: string
  level: number
  onSelect: () => void
  bare?: boolean
}) {
  const g = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)
  const banter = useDojo((s) => s.banter)
  const heroTargetId = useDojo((s) => s.heroTargetId)
  const faceDark = isDark(character.face)
  const faceColor = faceDark ? '#f4f4f4' : '#1c2029'
  const isSlime = character.kind === 'slime'
  const isOcto = character.kind === 'octopus'
  const isMonitor = character.kind === 'monitor'
  const acc = accForId(id, character.kind)
  const speaking = banter && banter.who === 'agent' && banter.agentId === id
  const visited = heroTargetId === id // the Chief is hovering above this agent

  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const happy = mood === 'happy' || mood === 'love'
    const think = mood === 'think'
    const error = mood === 'error'

    // vertical: breathing, plus excited jumps when the Chief visits and
    // celebratory hops when a task lands well
    let y = Math.sin(t * 1.6 + x) * 0.03
    if (visited) y += Math.abs(Math.sin(t * 3.2)) * 0.13
    if (busy) y += Math.sin(t * 9 + x) * 0.015
    if (happy) y += Math.max(0, Math.sin(t * 4 + x)) * 0.16
    g.current.position.y = y

    // lean / tilt driven by activity + mood
    let rotX = 0
    if (busy) rotX += 0.1 // hunch over the keyboard
    if (visited) rotX -= 0.2 // look up at the Chief
    if (error) rotX += 0.16 // slump
    let rotZ = 0
    if (think) rotZ = Math.sin(t * 1.4) * 0.13 // pensive head tilt
    if (error) rotZ += Math.sin(t * 26) * 0.06 // frustrated shake
    if (visited) rotZ += Math.sin(t * 2.4) * 0.09 // happy sway toward the Chief
    g.current.rotation.x += (rotX - g.current.rotation.x) * 0.12
    g.current.rotation.z += (rotZ - g.current.rotation.z) * 0.3

    // scale: hover + excitement / celebration pulse
    const pulse = (visited ? 0.04 : 0) + (happy ? Math.max(0, Math.sin(t * 4)) * 0.05 : 0)
    const target = (hover ? 1.06 : 1) + pulse
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
      {!bare && selected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
          <ringGeometry args={[0.95, 1.15, 40]} />
          <meshBasicMaterial color={'#ff7eb6'} transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      )}

      <group ref={g} {...(bare ? {} : events)}>
        {isSlime ? (
          <group position={[0, 0.05, 0]}>
            <Ball p={[0, 0.78, 0]} r={0.8} c={character.face} s={[1, 0.86, 1]} />
            <Cyl p={[0, 1.5, 0]} r={0.05} h={0.4} c={character.face} />
            <Ball p={[0, 1.78, 0]} r={0.14} c={'#fff'} />
            <Ball p={[0, 1.8, 0.1]} r={0.06} c={'#333'} />
            <AsciiFace3D mood={mood} position={[0, 0.92, 0.9]} scale={0.72} color={faceColor} />
            <Arm side={-1} color={character.face} hand={character.face} busy={busy} />
            <Arm side={1} color={character.face} hand={character.face} busy={busy} wave={visited} />
          </group>
        ) : isOcto ? (
          <group position={[0, 0.05, 0]}>
            {/* bulbous mantle, lifted so the face clears the laptop */}
            <Ball p={[0, 1.78, 0]} r={0.8} c={character.face} s={[1, 1.14, 1]} />
            <Ball p={[-0.3, 2.32, 0.2]} r={0.17} c={character.face} />
            <Ball p={[0.3, 2.32, 0.2]} r={0.17} c={character.face} />
            {/* pale face patch: a round sphere tucked inside the mantle so only
                its front cap pokes out — no side clipping artifacts */}
            <Ball p={[0, 1.74, 0.42]} r={0.52} c={'#ffe6ef'} />
            {/* rosy cheeks + big, high-contrast ASCII expression */}
            <Ball p={[-0.5, 1.58, 0.62]} r={0.12} c={'#ff8fa3'} />
            <Ball p={[0.5, 1.58, 0.62]} r={0.12} c={'#ff8fa3'} />
            <AsciiFace3D mood={mood} position={[0, 1.76, 0.98]} scale={0.86} color={'#3a1526'} />
            {/* eight tentacles splaying out around the mantle */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const ang = (i / 8) * Math.PI * 2 + 0.4
              const dir: [number, number] = [Math.cos(ang) * 1.1, Math.sin(ang) * 0.7 + 0.35]
              return (
                <Tentacle
                  key={i}
                  base={[Math.cos(ang) * 0.42, 1.28, Math.sin(ang) * 0.3 + 0.12]}
                  dir={dir}
                  color={i % 2 ? character.face : character.outfit}
                  phase={i * 0.8}
                  busy={busy || visited}
                />
              )
            })}
          </group>
        ) : (
          <group>
            {/* seated: lap + torso, legs hidden behind the desk */}
            <Box p={[0, 0.62, 0.34]} s={[0.7, 0.24, 0.7]} c={character.pants} />
            <Ball p={[0, 1.12, 0]} r={0.56} c={character.outfit} s={[1, 1.02, 0.9]} />
            {/* shoulders */}
            <Ball p={[-0.46, 1.3, 0.02]} r={0.18} c={character.outfit} />
            <Ball p={[0.46, 1.3, 0.02]} r={0.18} c={character.outfit} />
            {isMonitor ? (
              <MonitorHead c={character} mood={mood} />
            ) : (
              <>
                {/* head */}
                <Ball p={[0, 1.95, 0]} r={0.62} c={character.face} />
                <Ball p={[-0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
                <Ball p={[0.32, 1.82, 0.46]} r={0.12} c={'#ff8fa3'} />
                <Toppers c={character} />
                <AsciiFace3D mood={mood} position={[0, 1.98, 0.72]} scale={0.72} color={faceColor} />
                {acc && <Accessory kind={acc} id={id} />}
              </>
            )}
            {/* typing arms — the right one waves hello when the Chief drops by */}
            <Arm side={-1} color={character.outfit} hand={character.face} busy={busy} />
            <Arm side={1} color={character.outfit} hand={character.face} busy={busy} wave={visited} />
          </group>
        )}
      </group>

      {!bare && (
        <Html position={[0, isSlime ? 2.35 : 2.95, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none" occlude={false}>
          <div className={`tag3d ${selected ? 'sel' : ''}`}>
            {name} <span>Lv.{level}</span>
          </div>
        </Html>
      )}
      {/* the agent's line of the conversation with the brain */}
      {!bare && speaking && (
        <Html position={[0.7, isSlime ? 2.05 : 2.5, 0]} center distanceFactor={9} zIndexRange={[8, 0]} pointerEvents="none">
          <div className="bubble3d">{banter.text}</div>
        </Html>
      )}
      {!bare && busy && (
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
