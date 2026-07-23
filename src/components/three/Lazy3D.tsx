import { useEffect, useRef, useState } from 'react'
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

// The mascot's lines · no emojis, pure hype. Idle cheers rotate; a task
// completion picks a celebration line while he dances.
const IDLE = ["Let's go team!", "You've got this!", 'Keep shipping!', 'Great energy today!', 'One task at a time!', 'Proud of this crew!', 'Big things ahead!']
const HYPE = ['Boom! Task done!', 'Nice work, team!', 'Another one shipped!', "Let's gooo!", "That's how it's done!", 'On fire today!', 'Huge! Keep going!']
const pick = (a: string[]) => a[Math.floor(Math.random() * a.length)]

/** The office panda · a front-and-centre mascot who cheers the crew on and
 *  breaks into a dance every time a task or deliverable is completed. Tap him
 *  for the office productivity dashboard. */
export function Lazy3D() {
  const cheer = useDojo((s) => s.cheer)
  const cheerTick = useDojo((s) => s.cheerTick)
  const g = useRef<THREE.Group>(null)
  const armL = useRef<THREE.Group>(null)
  const armR = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)
  const [bubble, setBubble] = useState(IDLE[0])
  const [party, setParty] = useState(false)

  // live clock + a "dance until" timestamp so a completion triggers the dance
  const clockNow = useRef(0)
  const danceEnd = useRef(0)

  // idle encouragement · rotate a new cheer line every few seconds when calm
  useEffect(() => {
    const id = window.setInterval(() => { if (clockNow.current > danceEnd.current) setBubble(pick(IDLE)) }, 6500)
    return () => window.clearInterval(id)
  }, [])

  // a task/deliverable completed → dance + shout a hype line + confetti
  useEffect(() => {
    if (cheerTick === 0) return
    danceEnd.current = clockNow.current + 3.4
    setBubble(pick(HYPE))
    setParty(true)
    const id = window.setTimeout(() => setParty(false), 2600)
    return () => window.clearTimeout(id)
  }, [cheerTick])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    clockNow.current = t
    const dancing = t < danceEnd.current
    if (g.current) {
      const sc = (hover ? 1.06 : 1) * (dancing ? 1.04 : 1)
      g.current.scale.lerp(new THREE.Vector3(sc, sc, sc), 0.2)
      if (dancing) {
        // bounce, spin and sway · full party mode
        g.current.position.y = Math.abs(Math.sin(t * 9)) * 0.55
        g.current.rotation.y = Math.sin(t * 7) * 0.6
        g.current.rotation.z = Math.sin(t * 12) * 0.12
      } else {
        // calm, happy idle bob
        g.current.position.y = THREE.MathUtils.lerp(g.current.position.y, Math.sin(t * 2) * 0.06, 0.1)
        g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, 0, 0.1)
        g.current.rotation.z = Math.sin(t * 1.6) * 0.03
      }
    }
    // arms: raised and waving during the dance, resting otherwise
    const wave = dancing ? -2.2 + Math.sin(t * 16) * 0.5 : 0
    if (armL.current) armL.current.rotation.z = THREE.MathUtils.lerp(armL.current.rotation.z, wave, 0.25)
    if (armR.current) armR.current.rotation.z = THREE.MathUtils.lerp(armR.current.rotation.z, -wave, 0.25)
  })

  return (
    <group
      position={[0, 0, 6.2]}
      onClick={(e) => { e.stopPropagation(); cheer() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto' }}
    >
      <group ref={g}>
        {/* body */}
        <B p={[0, 0.66, 0]} r={0.72} c={W} s={[1.02, 0.98, 1]} />
        <B p={[0, 0.9, 0.32]} r={0.5} c={W} />
        {/* legs */}
        <B p={[-0.32, 0.26, 0.32]} r={0.24} c={K} s={[1, 0.85, 1.15]} />
        <B p={[0.32, 0.26, 0.32]} r={0.24} c={K} s={[1, 0.85, 1.15]} />
        {/* arms · pivot at the shoulder so they can raise for the dance */}
        <group ref={armL} position={[-0.6, 0.92, 0.2]}>
          <B p={[-0.06, -0.18, 0]} r={0.2} c={K} s={[1, 1.25, 1]} />
        </group>
        <group ref={armR} position={[0.6, 0.92, 0.2]}>
          <B p={[0.06, -0.18, 0]} r={0.2} c={K} s={[1, 1.25, 1]} />
        </group>

        {/* head · upright and happy now (no more sleeping) */}
        <group position={[0, 1.56, 0.12]}>
          <B p={[0, 0, 0]} r={0.56} c={W} />
          {/* ears */}
          <B p={[-0.4, 0.42, -0.05]} r={0.2} c={K} />
          <B p={[0.4, 0.42, -0.05]} r={0.2} c={K} />
          {/* eye patches */}
          <B p={[-0.22, 0.04, 0.4]} r={0.17} c={K} s={[1, 1.35, 0.6]} />
          <B p={[0.22, 0.04, 0.4]} r={0.17} c={K} s={[1, 1.35, 0.6]} />
          {/* bright open eyes */}
          <B p={[-0.22, 0.06, 0.52]} r={0.075} c={'#ffffff'} />
          <B p={[0.22, 0.06, 0.52]} r={0.075} c={'#ffffff'} />
          <B p={[-0.22, 0.05, 0.58]} r={0.04} c={'#12131a'} />
          <B p={[0.22, 0.05, 0.58]} r={0.04} c={'#12131a'} />
          {/* snout + nose + happy smile */}
          <B p={[0, -0.18, 0.5]} r={0.2} c={W} s={[1.1, 0.8, 0.8]} />
          <B p={[0, -0.1, 0.66]} r={0.07} c={K} s={[1.4, 1, 1]} />
          <B p={[0, -0.3, 0.6]} r={0.06} c={'#7a2f45'} s={[1.6, 0.7, 0.6]} />
        </group>
      </group>

      {/* confetti burst · only while celebrating */}
      {party && (
        <Html position={[0, 3.05, 0.2]} center distanceFactor={12} zIndexRange={[9, 0]} pointerEvents="none">
          <div className="panda-confetti" aria-hidden>{Array.from({ length: 10 }).map((_, i) => <span key={i} style={{ ['--i' as string]: i }} />)}</div>
        </Html>
      )}

      {/* speech bubble · idle encouragement or a celebration shout */}
      <Html position={[0, 2.66, 0.2]} center distanceFactor={12} zIndexRange={[8, 0]} pointerEvents="none">
        <div className={`panda-bubble${party ? ' hype' : ''}`}>{bubble}</div>
      </Html>
      {/* name tag */}
      <Html position={[0, 2.02, 0]} center distanceFactor={12} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d panda">Panda · team hype</div>
      </Html>
    </group>
  )
}
