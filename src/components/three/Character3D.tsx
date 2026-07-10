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
    case 'poodle': // caniche · poofy fur, floppy ears, snout
      return (
        <group>
          <Ball p={[0, hy + 0.52, 0]} r={0.36} c={c.face} />
          <Ball p={[-0.24, hy + 0.42, 0.16]} r={0.2} c={c.face} />
          <Ball p={[0.24, hy + 0.42, 0.16]} r={0.2} c={c.face} />
          <Ball p={[-0.62, hy - 0.06, 0.06]} r={0.26} c={c.face} s={[0.82, 1.35, 0.82]} />
          <Ball p={[0.62, hy - 0.06, 0.06]} r={0.26} c={c.face} s={[0.82, 1.35, 0.82]} />
          <Ball p={[0, hy - 0.2, 0.5]} r={0.2} c={c.face} s={[1.1, 0.9, 1]} />
          <Ball p={[0, hy - 0.16, 0.68]} r={0.07} c={'#2a2226'} />
        </group>
      )
    case 'rabbit': // lapin · tall ears, buck teeth
      return (
        <group>
          {[-0.24, 0.24].map((ex, i) => (
            <group key={ex} rotation={[0, 0, (i ? -1 : 1) * 0.14]}>
              <Box p={[ex, hy + 0.78, -0.04]} s={[0.22, 0.92, 0.14]} c={c.face} />
              <Box p={[ex, hy + 0.82, 0.03]} s={[0.11, 0.62, 0.06]} c={'#ff9fb4'} />
            </group>
          ))}
          <Box p={[0, hy - 0.36, 0.56]} s={[0.18, 0.16, 0.05]} c={'#fffdf6'} />
        </group>
      )
    case 'frog': // pepe · big bulging eyes on top
      return (
        <group>
          {[-0.3, 0.3].map((ex) => (
            <group key={ex}>
              <Ball p={[ex, hy + 0.48, 0.06]} r={0.29} c={'#f3fff0'} />
              <Ball p={[ex * 1.08, hy + 0.5, 0.32]} r={0.11} c={'#141414'} />
            </group>
          ))}
        </group>
      )
    case 'duck': // canard · flat bill + head feather
      return (
        <group>
          <Box p={[0, hy - 0.14, 0.62]} s={[0.46, 0.13, 0.36]} c={'#ff9e2c'} />
          <Box p={[0, hy - 0.22, 0.66]} s={[0.4, 0.08, 0.3]} c={'#e07d16'} />
          <Cone p={[0, hy + 0.62, -0.12]} r={0.09} h={0.42} c={c.face} rot={[-0.5, 0, 0]} />
        </group>
      )
    case 'godzilla': // dorsal spine plates + jaw
      return (
        <group>
          {[0, 1, 2, 3].map((i) => (
            <Cone key={i} p={[0, hy + 0.5 - i * 0.28, -i * 0.42]} r={0.13 + i * 0.02} h={0.4 - i * 0.03} c={c.extra} />
          ))}
          <Box p={[0, hy - 0.22, 0.48]} s={[0.52, 0.3, 0.42]} c={c.face} />
          {[-0.14, 0.14].map((tx) => <Box key={tx} p={[tx, hy - 0.34, 0.66]} s={[0.06, 0.1, 0.05]} c={'#fff'} />)}
        </group>
      )
    case 'bear': // ours · round ears + snout
      return (
        <group>
          <Ball p={[-0.42, hy + 0.5, -0.04]} r={0.2} c={c.face} />
          <Ball p={[0.42, hy + 0.5, -0.04]} r={0.2} c={c.face} />
          <Ball p={[-0.42, hy + 0.5, 0.04]} r={0.1} c={c.extra} />
          <Ball p={[0.42, hy + 0.5, 0.04]} r={0.1} c={c.extra} />
          <Ball p={[0, hy - 0.2, 0.5]} r={0.24} c={c.extra} s={[1.2, 0.9, 1]} />
          <Ball p={[0, hy - 0.12, 0.72]} r={0.09} c={'#2a2018'} />
        </group>
      )
    case 'chicken': // poulet · comb, beak, wattle
      return (
        <group>
          {[[-0.15, 0.12], [0, 0.16], [0.15, 0.12]].map(([cx, r], i) => <Ball key={i} p={[cx, hy + 0.6, 0]} r={r} c={'#e23b3b'} />)}
          <Cone p={[0, hy - 0.1, 0.62]} r={0.14} h={0.32} c={'#ffb400'} rot={[Math.PI / 2, 0, 0]} />
          {[-0.08, 0.08].map((wx) => <Ball key={wx} p={[wx, hy - 0.36, 0.5]} r={0.08} c={'#c0201d'} />)}
        </group>
      )
    case 'penguin': // beak + white belly
      return (
        <group>
          <Cone p={[0, hy - 0.14, 0.58]} r={0.12} h={0.28} c={'#ff9e2c'} rot={[Math.PI / 2, 0, 0]} />
          <Ball p={[0, 1.12, 0.42]} r={0.38} c={'#f5f9ff'} s={[1, 1.25, 0.42]} />
        </group>
      )
    case 'panda': // black ears + eye patches
      return (
        <group>
          <Ball p={[-0.42, hy + 0.48, -0.04]} r={0.19} c={'#1c1c1c'} />
          <Ball p={[0.42, hy + 0.48, -0.04]} r={0.19} c={'#1c1c1c'} />
          <Ball p={[-0.3, 1.9, 0.48]} r={0.15} c={'#1c1c1c'} s={[1, 1.3, 0.5]} />
          <Ball p={[0.3, 1.9, 0.48]} r={0.15} c={'#1c1c1c'} s={[1, 1.3, 0.5]} />
        </group>
      )
    case 'dragon': // swept horns + snout + back spikes
      return (
        <group>
          {[-0.28, 0.28].map((ex, i) => <Cone key={ex} p={[ex, hy + 0.5, -0.16]} r={0.1} h={0.5} c={c.extra} rot={[-0.5, 0, (i ? -1 : 1) * 0.2]} />)}
          <Box p={[0, hy - 0.2, 0.5]} s={[0.42, 0.26, 0.42]} c={c.face} />
          {[-0.1, 0.1].map((nx) => <Ball key={nx} p={[nx, hy - 0.14, 0.7]} r={0.05} c={'#2a1a1a'} />)}
          {[0, 1, 2].map((i) => <Cone key={i} p={[0, hy + 0.1 - i * 0.32, -0.55 - i * 0.3]} r={0.08} h={0.28} c={c.extra} />)}
        </group>
      )
    case 'mushroom': // red cap with white dots over a pale stem head
      return (
        <group>
          <Ball p={[0, hy + 0.34, 0]} r={0.86} c={c.outfit} s={[1, 0.68, 1]} />
          {[[-0.4, 0.24, 0.2], [0.36, 0.34, -0.1], [0.05, 0.5, 0.34], [-0.14, 0.42, -0.34], [0.5, 0.16, 0.28]].map(([dx, dy, dz], i) => (
            <Ball key={i} p={[dx as number, hy + 0.36 + (dy as number) * 0.24, dz as number]} r={0.12} c={'#fdfcf6'} />
          ))}
        </group>
      )
    case 'knight': // Zelda-style hero · steel helm, nose guard and a bright crest plume
      return (
        <group>
          <Ball p={[0, hy + 0.34, -0.02]} r={0.66} c={'#c7cfda'} s={[1, 0.7, 1.02]} />
          <Cyl p={[0, hy + 0.1, 0]} r={0.66} h={0.12} c={'#9aa4b4'} />
          <Box p={[0, hy - 0.16, 0.6]} s={[0.12, 0.5, 0.08]} c={'#aeb7c6'} />
          {/* crest plume, in the theme colour so it varies */}
          <Box p={[0, hy + 0.72, -0.04]} s={[0.1, 0.16, 0.5]} c={'#8b93a1'} />
          {[0, 1, 2, 3].map((k) => <Ball key={k} p={[0, hy + 0.86, -0.02 - k * 0.16]} r={0.16 - k * 0.02} c={c.outfit} />)}
        </group>
      )
    case 'mage': // pointed starry hat with a droopy tip, brim and a moon
      return (
        <group>
          <Cyl p={[0, hy + 0.44, 0]} r={0.66} h={0.1} c={c.outfit2} />
          <Cone p={[0.08, hy + 1.02, -0.05]} r={0.46} h={1.3} c={c.outfit} rot={[0.18, 0, -0.12]} />
          <Ball p={[0.28, hy + 1.55, -0.16]} r={0.1} c={c.outfit2} />
          <Ball p={[0.12, hy + 0.92, 0.4]} r={0.07} c={'#ffe066'} />
          <Ball p={[-0.18, hy + 1.2, 0.24]} r={0.055} c={'#fff'} />
          <Ball p={[0.02, hy + 0.72, 0.46]} r={0.05} c={'#ffe066'} />
        </group>
      )
    case 'madscientist': // wild frizzy hair + goggles pushed up on the forehead
      return (
        <group>
          {[[-0.5, 0.2, 0.1], [-0.28, 0.5, -0.1], [0.0, 0.62, 0.15], [0.3, 0.5, -0.12], [0.52, 0.24, 0.08], [-0.12, 0.44, 0.4], [0.16, 0.4, -0.38]].map(([dx, dy, dz], i) => (
            <Ball key={i} p={[dx as number, hy + 0.34 + (dy as number), dz as number]} r={0.2} c={c.extra} />
          ))}
          {/* goggles on the brow */}
          {[-0.28, 0.28].map((ex) => (
            <mesh key={ex} position={[ex, hy + 0.02, 0.52]}>
              <torusGeometry args={[0.17, 0.05, 10, 22]} />
              <meshStandardMaterial color={'#2b2f3a'} {...MAT} />
            </mesh>
          ))}
          {[-0.28, 0.28].map((ex) => <Ball key={`g${ex}`} p={[ex, hy + 0.02, 0.55]} r={0.13} c={'#8fe3ff'} />)}
          <Box p={[0, hy + 0.02, 0.5]} s={[0.24, 0.05, 0.05]} c={'#2b2f3a'} />
        </group>
      )
    case 'skeleton':
    case 'slime':
    default:
      return null
  }
}

// A single hanging jellyfish tentacle: a vertical chain of shrinking balls that
// sways gently, faster when the agent is busy.
function JellyLeg({ base, color, phase, busy }: { base: [number, number, number]; color: string; phase: number; busy: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const spd = busy ? 5 : 2.4
    g.current.children.forEach((c, i) => {
      c.position.x = Math.sin(t * spd + phase + i * 0.7) * 0.05 * (i + 1)
      c.position.z = Math.cos(t * spd * 0.8 + phase + i * 0.6) * 0.04 * (i + 1)
    })
  })
  return (
    <group ref={g} position={base}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, -i * 0.24, 0]}>
          <sphereGeometry args={[0.1 - i * 0.012, 10, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.72} {...MAT} />
        </mesh>
      ))}
    </group>
  )
}

// Abstract-geometric body: a slowly tumbling icosahedron core with a few
// polyhedra orbiting it · no organic parts.
function GeoBody({ c, mood }: { c: Character; mood: Mood }) {
  const core = useRef<THREE.Mesh>(null)
  const orbit = useRef<THREE.Group>(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (core.current) { core.current.rotation.y = t * 0.5; core.current.rotation.x = Math.sin(t * 0.4) * 0.3 }
    if (orbit.current) orbit.current.rotation.y = t * 0.9
  })
  return (
    <group position={[0, 1.5, 0]}>
      <mesh ref={core} castShadow>
        <icosahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={c.outfit} flatShading roughness={0.4} metalness={0.2} />
      </mesh>
      <AsciiFace3D mood={mood} position={[0, 0.02, 0.74]} scale={0.6} color={'#ffffff'} />
      <group ref={orbit}>
        <mesh position={[1.1, 0.2, 0]}><tetrahedronGeometry args={[0.24, 0]} /><meshStandardMaterial color={c.outfit2} flatShading /></mesh>
        <mesh position={[-1.0, -0.1, 0.3]}><octahedronGeometry args={[0.22, 0]} /><meshStandardMaterial color={c.extra} flatShading /></mesh>
        <mesh position={[0.2, 0.1, -1.1]} rotation={[0.5, 0.5, 0]}><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial color={c.pants} flatShading /></mesh>
      </group>
    </group>
  )
}

// --- rare head accessories: only ~1 agent in 3 gets one, picked deterministically
type Acc = 'bowler' | 'tophat' | 'cowboy' | 'wizardhat' | 'cap' | 'shades' | 'beret' | 'beanie' | 'party' | 'flower'
const ACCS: Acc[] = ['bowler', 'tophat', 'cowboy', 'wizardhat', 'cap', 'shades', 'beret', 'beanie', 'party', 'flower']
const CAP_COLORS = ['#e0524f', '#4f9df7', '#45c46a', '#ffc24b', '#a78bfa', '#ff7eb6']
// a vivid palette so hats come in many colours, not just black
const HAT_COLORS = ['#2a2a34', '#e0524f', '#3b6fd4', '#2f9e57', '#d9a11f', '#7b52c9', '#d94f8a', '#1b8f9e', '#ff7a1a', '#08c2ac', '#394150', '#c0392b']
function hashCode(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
function hatColor(id: string, salt = ''): string {
  return HAT_COLORS[Math.abs(hashCode(id + '·hatc' + salt)) % HAT_COLORS.length]
}
const NO_ACC = new Set([
  'wizard', 'monitor', 'octopus', 'slime', 'ghost', 'jellyfish', 'bibendum', 'geo',
  'mushroom', 'rabbit', 'frog', 'godzilla', 'chicken', 'dragon', 'poodle', 'duck',
  'knight', 'mage', 'madscientist', // these carry their own headwear
])
function accForId(id: string, kind: string): Acc | null {
  if (NO_ACC.has(kind)) return null
  const h = Math.abs(hashCode(id + '·hat'))
  if (h % 100 >= 40) return null // ~40% wear an accessory · most heads stay bare
  return ACCS[h % ACCS.length]
}
function Accessory({ kind, id }: { kind: Acc; id: string }) {
  switch (kind) {
    case 'bowler': {
      const c = hatColor(id)
      return <group><Cyl p={[0, 2.5, 0]} r={0.66} h={0.06} c={c} /><Ball p={[0, 2.64, 0]} r={0.42} c={c} s={[1, 0.8, 1]} /></group>
    }
    case 'tophat': {
      const c = hatColor(id)
      return <group><Cyl p={[0, 2.5, 0]} r={0.72} h={0.05} c={c} /><Cyl p={[0, 3.05, 0]} r={0.44} h={0.92} c={c} /><Cyl p={[0, 2.66, 0]} r={0.45} h={0.1} c={hatColor(id, 'band')} /></group>
    }
    case 'cowboy':
      return <group><Cyl p={[0, 2.44, 0]} r={0.94} h={0.05} c="#b07a42" /><Cyl p={[0, 2.72, 0]} r={0.42} h={0.52} c="#a9743f" /><Cyl p={[0, 2.52, 0]} r={0.44} h={0.09} c={hatColor(id, 'band')} /></group>
    case 'wizardhat': {
      const c = hatColor(id)
      return <group><Cyl p={[0, 2.48, 0]} r={0.72} h={0.05} c={c} /><Cone p={[0, 3.25, 0]} r={0.5} h={1.35} c={c} /><Ball p={[0.2, 3.15, 0.32]} r={0.08} c="#ffe066" /><Ball p={[-0.14, 3.6, 0.2]} r={0.06} c="#ffe066" /><Ball p={[0.05, 2.92, 0.42]} r={0.06} c="#fff" /></group>
    }
    case 'cap': {
      const c = CAP_COLORS[Math.abs(hashCode(id)) % CAP_COLORS.length]
      return <group><Ball p={[0, 2.42, 0]} r={0.6} c={c} s={[1, 0.68, 1]} /><Box p={[0, 2.3, 0.56]} s={[0.72, 0.06, 0.42]} c={c} /><Ball p={[0, 2.66, 0]} r={0.06} c="#ffcf3b" /></group>
    }
    case 'beret': {
      const c = hatColor(id)
      return <group><Ball p={[0, 2.34, 0]} r={0.58} c={c} s={[1, 0.44, 1]} /><Ball p={[0, 2.5, 0]} r={0.06} c={c} /></group>
    }
    case 'beanie': {
      const c = hatColor(id)
      return <group><Ball p={[0, 2.36, 0]} r={0.6} c={c} s={[1, 0.72, 1]} /><Cyl p={[0, 2.22, 0]} r={0.6} h={0.16} c={hatColor(id, 'cuff')} /><Ball p={[0, 2.78, 0]} r={0.11} c="#ffffff" /></group>
    }
    case 'party': {
      const c = hatColor(id)
      return <group><Cone p={[0, 2.9, 0]} r={0.42} h={1.0} c={c} /><Ball p={[0, 3.42, 0]} r={0.12} c={hatColor(id, 'pom')} /><Ball p={[0.24, 2.7, 0.28]} r={0.05} c="#fff" /><Ball p={[-0.2, 2.5, 0.3]} r={0.05} c="#ffe066" /></group>
    }
    case 'flower': {
      const c = hatColor(id, 'petal')
      return <group>{[0, 1, 2, 3, 4].map((k) => { const a = (k / 5) * Math.PI * 2; return <Ball key={k} p={[Math.cos(a) * 0.26, 2.42, Math.sin(a) * 0.26]} r={0.15} c={c} /> })}<Ball p={[0, 2.44, 0]} r={0.13} c="#ffe066" /></group>
    }
    case 'shades':
      return <group><Box p={[-0.26, 1.98, 0.6]} s={[0.3, 0.2, 0.06]} c="#15151a" /><Box p={[0.26, 1.98, 0.6]} s={[0.3, 0.2, 0.06]} c="#15151a" /><Box p={[0, 2.0, 0.6]} s={[0.2, 0.05, 0.05]} c="#15151a" /></group>
  }
}

// --- legs + shoes: every bodied skin gets a pair of legs with a shoe; the shoe
// style + colours are picked deterministically so each skin keeps its own kicks
const SHOE_KINDS = ['blob', 'sneaker', 'boot', 'sandal', 'heel', 'sport', 'clog', 'hitop']
const SHOE_COLORS = ['#ffcf3b', '#ff5d6c', '#4fc3f7', '#7bd88f', '#c98cff', '#ff9a52', '#2fe0c0', '#ff7eb6', '#1c2029', '#f4f4f4']
const SOLE_COLORS = ['#45c46a', '#2b3550', '#ffffff', '#e0475f', '#20242f', '#ffd23f']
function shoeForId(id: string) {
  const h = Math.abs(hashCode(id + '·shoe'))
  return {
    kind: SHOE_KINDS[h % SHOE_KINDS.length],
    color: SHOE_COLORS[(h >> 3) % SHOE_COLORS.length],
    sole: SOLE_COLORS[(h >> 6) % SOLE_COLORS.length],
  }
}

function Shoe({ kind, color, sole }: { kind: string; color: string; sole: string }) {
  switch (kind) {
    case 'blob': // fat cartoon shoe (like a mascot boot)
      return <group><Ball p={[0, 0.1, 0.12]} r={0.19} c={color} s={[1, 0.85, 1.5]} /><Box p={[0, -0.01, 0.14]} s={[0.34, 0.09, 0.52]} c={sole} /></group>
    case 'sneaker':
      return <group><Box p={[0, 0.1, 0.04]} s={[0.28, 0.18, 0.32]} c={color} /><Ball p={[0, 0.1, 0.24]} r={0.15} c={color} s={[0.95, 0.85, 1.1]} /><Box p={[0, 0.0, 0.1]} s={[0.32, 0.08, 0.5]} c={sole} /><Box p={[0, 0.15, 0.0]} s={[0.2, 0.05, 0.06]} c="#ffffff" /></group>
    case 'boot':
      return <group><Cyl p={[0, 0.28, 0.0]} r={0.15} h={0.44} c={color} /><Ball p={[0, 0.1, 0.2]} r={0.15} c={color} s={[1, 0.9, 1.2]} /><Box p={[0, 0.0, 0.08]} s={[0.32, 0.08, 0.46]} c={sole} /></group>
    case 'sandal':
      return <group><Box p={[0, 0.04, 0.12]} s={[0.32, 0.07, 0.5]} c={sole} /><Box p={[0, 0.14, 0.16]} s={[0.3, 0.05, 0.14]} c={color} rot={[0.3, 0, 0]} /><Box p={[0, 0.12, 0.02]} s={[0.24, 0.05, 0.1]} c={color} /></group>
    case 'heel':
      return <group><Box p={[0, 0.08, 0.1]} s={[0.24, 0.06, 0.5]} c={color} /><Ball p={[0, 0.1, 0.28]} r={0.12} c={color} s={[1, 0.8, 1.2]} /><Box p={[0, -0.04, -0.16]} s={[0.07, 0.2, 0.07]} c={color} /></group>
    case 'sport':
      return <group><Ball p={[0, 0.11, 0.14]} r={0.17} c={color} s={[1, 0.9, 1.5]} /><Box p={[0, 0.01, 0.14]} s={[0.34, 0.1, 0.52]} c={sole} /><Ball p={[0.08, 0.15, 0.24]} r={0.05} c="#ffffff" /></group>
    case 'clog':
      return <group><Ball p={[0, 0.11, 0.1]} r={0.2} c={color} s={[1, 0.82, 1.4]} /><Box p={[0, 0.0, 0.12]} s={[0.34, 0.06, 0.5]} c={sole} /></group>
    case 'hitop':
    default:
      return <group><Cyl p={[0, 0.24, -0.02]} r={0.14} h={0.34} c={color} /><Box p={[0, 0.1, 0.14]} s={[0.28, 0.16, 0.3]} c={color} /><Ball p={[0, 0.1, 0.28]} r={0.14} c={color} s={[0.95, 0.85, 1.1]} /><Box p={[0, 0.0, 0.1]} s={[0.32, 0.08, 0.5]} c={sole} /></group>
  }
}

function Legs({ id, pants }: { id: string; pants: string }) {
  const s = shoeForId(id)
  return (
    <group>
      {[-0.22, 0.22].map((x) => (
        <group key={x} position={[x, 0, 0.14]}>
          <Cyl p={[0, 0.36, 0]} r={0.13} h={0.5} c={pants} />
          <Shoe kind={s.kind} color={s.color} sole={s.sole} />
        </group>
      ))}
    </group>
  )
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
  const isGhost = character.kind === 'ghost'
  const isJelly = character.kind === 'jellyfish'
  const isBib = character.kind === 'bibendum'
  const isGeo = character.kind === 'geo'
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
                its front cap pokes out · no side clipping artifacts */}
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
        ) : isGhost ? (
          <group position={[0, 0.35, 0]}>
            {/* floaty sheet: rounded dome + wavy skirt, translucent */}
            <mesh position={[0, 1.5, 0]} castShadow>
              <sphereGeometry args={[0.72, 22, 20]} />
              <meshStandardMaterial color={character.face} transparent opacity={0.9} {...MAT} />
            </mesh>
            <mesh position={[0, 1.02, 0]}>
              <cylinderGeometry args={[0.72, 0.82, 0.9, 22]} />
              <meshStandardMaterial color={character.face} transparent opacity={0.9} {...MAT} />
            </mesh>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = (i / 6) * Math.PI * 2
              return (
                <mesh key={i} position={[Math.cos(a) * 0.68, 0.52, Math.sin(a) * 0.68]}>
                  <coneGeometry args={[0.16, 0.4, 12]} />
                  <meshStandardMaterial color={character.face} transparent opacity={0.85} {...MAT} />
                </mesh>
              )
            })}
            {/* little arm nubs */}
            <Ball p={[-0.78, 1.28, 0.1]} r={0.16} c={character.face} />
            <Ball p={[0.78, 1.28, 0.1]} r={0.16} c={character.face} />
            <AsciiFace3D mood={mood} position={[0, 1.52, 0.72]} scale={0.74} color={faceColor} />
          </group>
        ) : isJelly ? (
          <group position={[0, 0.15, 0]}>
            {/* translucent bell */}
            <mesh position={[0, 1.95, 0]} scale={[1, 0.82, 1]} castShadow>
              <sphereGeometry args={[0.82, 24, 20]} />
              <meshStandardMaterial color={character.face} emissive={character.outfit} emissiveIntensity={0.25} transparent opacity={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.78, 0.1, 12, 28]} />
              <meshStandardMaterial color={character.outfit2} transparent opacity={0.75} {...MAT} />
            </mesh>
            <AsciiFace3D mood={mood} position={[0, 1.9, 0.78]} scale={0.72} color={faceColor} />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const a = (i / 8) * Math.PI * 2
              return <JellyLeg key={i} base={[Math.cos(a) * 0.6, 1.45, Math.sin(a) * 0.6]} color={i % 2 ? character.face : character.outfit} phase={i * 0.8} busy={busy || visited} />
            })}
          </group>
        ) : isBib ? (
          <group position={[0, 0.05, 0]}>
            <Legs id={id} pants={character.pants} />
            {/* puffy stacked tire-man */}
            <Ball p={[0, 0.66, 0.32]} r={0.56} c={character.face} />
            <Ball p={[0, 1.16, 0.06]} r={0.62} c={character.face} />
            <Ball p={[0, 1.62, 0]} r={0.48} c={character.face} />
            <Ball p={[-0.5, 1.34, 0.04]} r={0.2} c={character.face} />
            <Ball p={[0.5, 1.34, 0.04]} r={0.2} c={character.face} />
            {/* dark tire grooves */}
            {[0.92, 1.4].map((gy) => (
              <mesh key={gy} position={[0, gy, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.55, 0.04, 8, 24]} />
                <meshStandardMaterial color={character.outfit2} {...MAT} />
              </mesh>
            ))}
            <Ball p={[0, 2.12, 0]} r={0.5} c={character.face} />
            <AsciiFace3D mood={mood} position={[0, 2.14, 0.5]} scale={0.62} color={faceColor} />
            <Arm side={-1} color={character.face} hand={character.face} busy={busy} />
            <Arm side={1} color={character.face} hand={character.face} busy={busy} wave={visited} />
          </group>
        ) : isGeo ? (
          <GeoBody c={character} mood={mood} />
        ) : (
          <group>
            {/* legs + shoes (mostly tucked under the desk in the office, shown in previews) */}
            <Legs id={id} pants={character.pants} />
            {/* torso */}
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
            {/* typing arms · the right one waves hello when the Chief drops by */}
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
