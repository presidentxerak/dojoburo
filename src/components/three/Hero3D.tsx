import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'
import { heroPos3D } from '../../three/layout3d'
import { AsciiFace3D } from './AsciiFace3D'

const LOBE = '#f4a6c0'
const LOBE2 = '#efb0c8'
const STEM = '#e28aa6'
const MAT = { roughness: 0.82, metalness: 0 }

function Bump({ p, r, c }: { p: [number, number, number]; r: number; c: string }) {
  return (
    <mesh position={p} castShadow>
      <sphereGeometry args={[r, 14, 12]} />
      <meshStandardMaterial color={c} {...MAT} />
    </mesh>
  )
}

// deterministic gyri (wrinkle bumps) spread over each hemisphere via the golden angle
function lobeBumps(cx: number, sign: number) {
  const out: { p: [number, number, number]; r: number; c: string }[] = []
  const N = 15
  const R = 0.62
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2
    const rad = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = i * 2.399963 * sign
    const x = cx + Math.cos(theta) * rad * R * 0.92
    const yy = y * R * 0.98
    const z = Math.sin(theta) * rad * R
    out.push({ p: [x, yy, z], r: 0.21, c: i % 2 ? LOBE : LOBE2 })
  }
  return out
}

/** Sparkles of thought spiralling down from the brain to the agent it visits. */
function ThoughtStream({ active }: { active: boolean }) {
  const ref = useRef<THREE.Group>(null)
  const N = 22
  const phases = useMemo(() => Array.from({ length: N }, (_, i) => i / N), [])
  useFrame((state) => {
    const g = ref.current
    if (!g) return
    g.visible = active
    if (!active) return
    const t = state.clock.elapsedTime
    g.children.forEach((c, i) => {
      const prog = (t * 0.5 + phases[i]) % 1
      const y = -0.6 - prog * 1.4
      const swirl = prog * Math.PI * 4 + i
      const spread = 0.22 * (1 - prog * 0.3)
      c.position.set(Math.cos(swirl) * spread, y, Math.sin(swirl) * spread)
      const m = (c as THREE.Mesh).material as THREE.MeshBasicMaterial
      const fade = Math.sin(prog * Math.PI)
      m.opacity = fade
      c.scale.setScalar(0.6 + fade * 1.1)
    })
  })
  return (
    <group ref={ref}>
      {Array.from({ length: N }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.075, 10, 10]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#ffe27a' : i % 3 === 1 ? '#7ad7ff' : '#ff9ecb'} transparent opacity={0.9} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

/** The founder-hero as a floating brain. Drifts high above whichever agent is
 *  working, streams thought particles down to them, and chats. */
export function Hero3D() {
  const targetId = useDojo((s) => s.heroTargetId)
  const banter = useDojo((s) => s.banter)
  const g = useRef<THREE.Group>(null)
  const baseY = useRef(1.7)
  const bumps = useMemo(() => [...lobeBumps(-0.33, 1), ...lobeBumps(0.33, -1)], [])
  const visiting = targetId !== 'home' && !!targetId

  useFrame((state, dt) => {
    if (!g.current) return
    const [tx, tz] = heroPos3D(targetId)
    const p = g.current.position
    const k = Math.min(1, dt * 2.4)
    p.x += (tx - p.x) * k
    p.z += (tz - p.z) * k
    // float high over the agent's head when visiting; drift lower when idle
    const targetY = visiting ? 3.95 : 1.7
    baseY.current += (targetY - baseY.current) * k
    const t = state.clock.elapsedTime
    p.y = baseY.current + Math.sin(t * 1.6) * 0.12
    g.current.rotation.z = Math.sin(t * 0.8) * 0.05
    g.current.rotation.y = Math.sin(t * 0.5) * 0.12
  })

  return (
    <group ref={g} position={[0, 1.7, 7.4]}>
      {/* two cerebral lobes */}
      <mesh position={[-0.33, 0, 0]} scale={[1, 1.02, 1.12]} castShadow>
        <sphereGeometry args={[0.6, 22, 20]} />
        <meshStandardMaterial color={LOBE} {...MAT} />
      </mesh>
      <mesh position={[0.33, 0, 0]} scale={[1, 1.02, 1.12]} castShadow>
        <sphereGeometry args={[0.6, 22, 20]} />
        <meshStandardMaterial color={LOBE} {...MAT} />
      </mesh>
      {/* wrinkly gyri */}
      {bumps.map((b, i) => (
        <Bump key={i} {...b} />
      ))}
      {/* cerebellum + brain stem */}
      <Bump p={[0, -0.5, -0.34]} r={0.34} c={STEM} />
      <mesh position={[0, -0.78, -0.1]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.14, 0.5, 12]} />
        <meshStandardMaterial color={STEM} {...MAT} />
      </mesh>
      {/* rosy cheeks + expressive ASCII face */}
      <mesh position={[-0.4, -0.06, 0.52]}><sphereGeometry args={[0.11, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <mesh position={[0.4, -0.06, 0.52]}><sphereGeometry args={[0.11, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <AsciiFace3D mood={visiting ? 'talk' : 'happy'} position={[0, 0.05, 0.7]} scale={0.58} color="#7a3355" />

      {/* thought particles streaming down to the agent */}
      <ThoughtStream active={visiting} />

      {/* the brain's line of the conversation */}
      {banter && banter.who === 'hero' && visiting && (
        <Html position={[0, 1.1, 0]} center distanceFactor={9} zIndexRange={[8, 0]} pointerEvents="none">
          <div className="bubble3d hero">{banter.text}</div>
        </Html>
      )}

      <Html position={[0, -1.15, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d hero">BRAIN</div>
      </Html>
    </group>
  )
}
