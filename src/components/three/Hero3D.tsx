import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'
import { heroPos3D } from '../../three/layout3d'
import { AsciiFace3D } from './AsciiFace3D'

const MAT = { roughness: 0.5, metalness: 0.1 }

// the nucleus: a packed cluster of protons (red) and neutrons (blue)
const NUCLEUS: { p: [number, number, number]; r: number; c: string }[] = [
  { p: [0, 0, 0], r: 0.3, c: '#ff6b6b' },
  { p: [0.22, 0.08, 0.05], r: 0.26, c: '#5b8def' },
  { p: [-0.2, 0.11, -0.05], r: 0.26, c: '#5b8def' },
  { p: [0.06, -0.22, 0.08], r: 0.25, c: '#ff8f8f' },
  { p: [-0.07, 0.24, 0.03], r: 0.24, c: '#ff6b6b' },
  { p: [0.13, 0.03, -0.24], r: 0.24, c: '#5b8def' },
  { p: [-0.22, -0.14, 0.06], r: 0.22, c: '#ff8f8f' },
]

// three electron shells: [euler rotation, orbit radius, angular speed, phase]
const ORBITS: { rot: [number, number, number]; R: number; spd: number; ph: number; c: string }[] = [
  { rot: [0, 0, 0], R: 0.98, spd: 2.4, ph: 0, c: '#7ad7ff' },
  { rot: [Math.PI / 2.6, 0, Math.PI / 4], R: 0.9, spd: -2.9, ph: 1.7, c: '#ffe27a' },
  { rot: [-Math.PI / 3, Math.PI / 4, 0], R: 0.94, spd: 2.1, ph: 3.3, c: '#ff9ecb' },
]

/** Sparkles of thought spiralling down from the Chief to the agent it visits. */
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
      const y = -0.7 - prog * 1.45
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

/** The founder-hero as a floating atom: a glowing nucleus with electrons whirling
 *  around it on tilted orbits. Drifts high above whichever agent is working,
 *  streams thought particles down to them, and chats. */
export function Hero3D() {
  const targetId = useDojo((s) => s.heroTargetId)
  const banter = useDojo((s) => s.banter)
  const g = useRef<THREE.Group>(null)
  const baseY = useRef(1.7)
  const electrons = useRef<THREE.Mesh[]>([])
  const visiting = targetId !== 'home' && !!targetId

  useFrame((state, dt) => {
    if (!g.current) return
    const [tx, tz] = heroPos3D(targetId)
    const p = g.current.position
    const k = Math.min(1, dt * 2.4)
    p.x += (tx - p.x) * k
    p.z += (tz - p.z) * k
    // float high over the agent's head when visiting; drift lower when idle
    const targetY = visiting ? 3.85 : 1.7
    baseY.current += (targetY - baseY.current) * k
    const t = state.clock.elapsedTime
    p.y = baseY.current + Math.sin(t * 1.6) * 0.12
    g.current.rotation.y = t * 0.4
    // whirl the electrons around their shells
    electrons.current.forEach((e, i) => {
      if (!e) return
      const o = ORBITS[i]
      const a = t * o.spd + o.ph
      e.position.set(Math.cos(a) * o.R, Math.sin(a) * o.R, 0)
    })
  })

  return (
    <group ref={g} position={[0, 1.7, 7.4]}>
      {/* nucleus glow */}
      <mesh>
        <sphereGeometry args={[0.6, 20, 18]} />
        <meshBasicMaterial color={'#ffd0d8'} transparent opacity={0.18} depthWrite={false} />
      </mesh>
      {/* nucleus cluster */}
      {NUCLEUS.map((n, i) => (
        <mesh key={i} position={n.p} castShadow>
          <sphereGeometry args={[n.r, 18, 16]} />
          <meshStandardMaterial color={n.c} emissive={n.c} emissiveIntensity={0.25} {...MAT} />
        </mesh>
      ))}
      {/* electron shells: faint orbit ring + a whirling electron */}
      {ORBITS.map((o, i) => (
        <group key={i} rotation={o.rot}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[o.R, 0.015, 8, 48]} />
            <meshBasicMaterial color={o.c} transparent opacity={0.4} />
          </mesh>
          <mesh ref={(m) => { if (m) electrons.current[i] = m }}>
            <sphereGeometry args={[0.13, 14, 12]} />
            <meshStandardMaterial color={o.c} emissive={o.c} emissiveIntensity={0.8} {...MAT} />
          </mesh>
        </group>
      ))}
      {/* rosy cheeks + expressive ASCII face on the nucleus */}
      <mesh position={[-0.32, -0.04, 0.42]}><sphereGeometry args={[0.09, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <mesh position={[0.32, -0.04, 0.42]}><sphereGeometry args={[0.09, 12, 12]} /><meshStandardMaterial color={'#ff8fa3'} {...MAT} /></mesh>
      <AsciiFace3D mood={visiting ? 'talk' : 'happy'} position={[0, 0.05, 0.56]} scale={0.5} color="#3a2050" />

      {/* thought particles streaming down to the agent */}
      <ThoughtStream active={visiting} />

      {/* the Chief's line of the conversation */}
      {banter && banter.who === 'hero' && visiting && (
        <Html position={[0, 1.35, 0]} center distanceFactor={9} zIndexRange={[8, 0]} pointerEvents="none">
          <div className="bubble3d hero">{banter.text}</div>
        </Html>
      )}

      <Html position={[0, -1.35, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none">
        <div className="tag3d hero">CHIEF</div>
      </Html>
    </group>
  )
}
