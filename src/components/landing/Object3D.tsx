import { useRef, useEffect, useState, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Vivid, polished full-3D objects standing in for each landing section's theme.
// Each spins + bobs over a soft glowing halo, coloured from the section accent.
// Decorative and pointer-transparent; hidden on narrow screens via CSS.

const GLOSS = { roughness: 0.22, metalness: 0.18 }
function M(color: string, emissive?: string, ei = 0.22) {
  return <meshStandardMaterial color={color} emissive={emissive ?? color} emissiveIntensity={ei} {...GLOSS} />
}
const DARK = '#232538'
const WHITE = '#f6f8ff'

function Shape({ kind, color }: { kind: string; color: string }) {
  switch (kind) {
    case 'briefcase': // jobs · a rounded work case with a lock
      return (
        <group rotation={[0.08, 0, 0]}>
          <mesh castShadow><boxGeometry args={[2.3, 1.6, 0.8]} />{M(color)}</mesh>
          <mesh position={[0, 0, 0.41]}><boxGeometry args={[2.3, 0.12, 0.04]} />{M(WHITE, WHITE, 0.05)}</mesh>
          <mesh position={[0, 1.0, 0.05]}><torusGeometry args={[0.44, 0.1, 14, 28, Math.PI]} />{M('#2b2e44', '#2b2e44', 0.03)}</mesh>
          <mesh position={[0, 0.05, 0.43]}><boxGeometry args={[0.44, 0.32, 0.1]} />{M('#ffc61a', '#ffb800', 0.35)}</mesh>
          <mesh position={[0, 0.05, 0.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.06, 16]} />{M(DARK)}</mesh>
          <mesh position={[-0.75, 0.5, 0.42]}><boxGeometry args={[0.14, 0.14, 0.06]} />{M(WHITE, WHITE, 0.05)}</mesh>
          <mesh position={[0.75, 0.5, 0.42]}><boxGeometry args={[0.14, 0.14, 0.06]} />{M(WHITE, WHITE, 0.05)}</mesh>
        </group>
      )
    case 'network': // stack · a glowing hub cube with orbiting connected nodes
      return (
        <group>
          <mesh castShadow><boxGeometry args={[1.2, 1.2, 1.2]} />{M(color, color, 0.34)}</mesh>
          <mesh scale={1.03}><boxGeometry args={[1.2, 1.2, 1.2]} /><meshStandardMaterial color={WHITE} wireframe transparent opacity={0.3} /></mesh>
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i / 5) * Math.PI * 2
            const p: [number, number, number] = [Math.cos(a) * 2.0, Math.sin(a) * 1.6, Math.sin(a * 1.3) * 0.5]
            const nc = ['#ffc61a', '#ff2d9b', '#2f6bff', '#08c2ac', '#ff7a1a'][i]
            return (
              <group key={i}>
                <mesh position={p} castShadow><sphereGeometry args={[0.34, 24, 20]} /><meshStandardMaterial color={nc} emissive={nc} emissiveIntensity={0.5} {...GLOSS} /></mesh>
                <mesh position={[p[0] / 2, p[1] / 2, p[2] / 2]} rotation={[0, 0, Math.atan2(p[1], p[0]) - Math.PI / 2]}>
                  <cylinderGeometry args={[0.045, 0.045, Math.hypot(p[0], p[1]), 8]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
                </mesh>
              </group>
            )
          })}
        </group>
      )
    case 'coins': // cost · a stack of shiny coins with a $ token
      return (
        <group rotation={[0.28, 0, 0.06]}>
          {[-0.62, -0.02, 0.58].map((y, i) => (
            <mesh key={y} position={[i === 1 ? 0.22 : 0, y, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[1.1, 1.1, 0.36, 44]} /><meshStandardMaterial color={color} emissive="#ffb800" emissiveIntensity={0.3} roughness={0.18} metalness={0.5} />
            </mesh>
          ))}
          <mesh position={[0.22, 0.58, 0.19]}><boxGeometry args={[0.14, 0.66, 0.06]} />{M('#a06a00')}</mesh>
          <mesh position={[0.22, 0.58, 0.19]} rotation={[0, 0, Math.PI / 2]}><boxGeometry args={[0.14, 0.4, 0.06]} />{M('#a06a00')}</mesh>
        </group>
      )
    case 'gem': // pricing · a faceted crystal with sparkles
      return (
        <group>
          <mesh castShadow><octahedronGeometry args={[1.55, 0]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.08} metalness={0.35} flatShading /></mesh>
          <mesh scale={1.02}><octahedronGeometry args={[1.55, 0]} /><meshStandardMaterial color={WHITE} wireframe transparent opacity={0.35} /></mesh>
          {[[1.4, 1.0, 0.6], [-1.2, -0.8, 0.8], [0.6, 1.6, -0.4]].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]}><sphereGeometry args={[0.1, 8, 8]} /><meshBasicMaterial color="#ffffff" /></mesh>
          ))}
        </group>
      )
    case 'card': // onramp · a glossy credit card with chip + stripe
      return (
        <group rotation={[0.34, -0.15, -0.1]}>
          <mesh castShadow><boxGeometry args={[2.9, 1.8, 0.14]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.24} roughness={0.16} metalness={0.4} /></mesh>
          <mesh position={[0, 0.4, 0.09]}><boxGeometry args={[2.9, 0.44, 0.04]} />{M(DARK)}</mesh>
          <mesh position={[-0.9, -0.1, 0.09]}><boxGeometry args={[0.52, 0.42, 0.06]} />{M('#ffc61a', '#ffc61a', 0.4)}</mesh>
          {[0, 1].map((r) => [0, 1].map((c) => <mesh key={`${r}${c}`} position={[-1.02 + c * 0.24, -0.22 + r * 0.24, 0.11]}><boxGeometry args={[0.16, 0.16, 0.02]} />{M('#c99a10')}</mesh>))}
          {[0, 1, 2, 3].map((i) => <mesh key={i} position={[0.1 + i * 0.32, -0.58, 0.09]}><boxGeometry args={[0.24, 0.12, 0.03]} />{M(WHITE, WHITE, 0.06)}</mesh>)}
          <mesh position={[0.95, 0.42, 0.11]}><circleGeometry args={[0.18, 24]} /><meshBasicMaterial color="#ff2d9b" /></mesh>
          <mesh position={[1.12, 0.42, 0.11]}><circleGeometry args={[0.18, 24]} /><meshBasicMaterial color="#ffc61a" transparent opacity={0.85} /></mesh>
        </group>
      )
    case 'eye': // widget · a friendly monitor with a blinking eye
      return (
        <group>
          <mesh castShadow><boxGeometry args={[2.5, 1.8, 0.5]} />{M(color, color, 0.2)}</mesh>
          <mesh position={[0, 0.08, 0.28]}><boxGeometry args={[2.0, 1.24, 0.05]} /><meshStandardMaterial color="#0e2438" emissive="#0e2438" emissiveIntensity={0.1} /></mesh>
          <mesh position={[0, 0.08, 0.33]}><circleGeometry args={[0.46, 30]} /><meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={0.4} /></mesh>
          <mesh position={[0.08, 0.08, 0.37]}><circleGeometry args={[0.22, 26]} />{M('#2f6bff', '#2f6bff', 0.4)}</mesh>
          <mesh position={[0.14, 0.14, 0.4]}><circleGeometry args={[0.07, 16]} /><meshBasicMaterial color="#ffffff" /></mesh>
          <mesh position={[0, -1.15, 0]}><cylinderGeometry args={[0.5, 0.66, 0.18, 28]} />{M(color, color, 0.16)}</mesh>
          <mesh position={[0, -1.05, 0]}><boxGeometry args={[1.1, 0.16, 0.5]} />{M(color, color, 0.16)}</mesh>
        </group>
      )
    case 'gear': // how · a chunky gear with a coloured hub
      return (
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow><cylinderGeometry args={[1.15, 1.15, 0.55, 36]} />{M(color, color, 0.24)}</mesh>
          {Array.from({ length: 9 }).map((_, i) => {
            const a = (i / 9) * Math.PI * 2
            return <mesh key={i} position={[Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4]} rotation={[0, -a, 0]} castShadow><boxGeometry args={[0.52, 0.55, 0.52]} />{M(color, color, 0.24)}</mesh>
          })}
          <mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.55, 0.55, 0.62, 28]} /><meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={0.12} {...GLOSS} /></mesh>
          <mesh position={[0, 0.05, 0]}><cylinderGeometry args={[0.28, 0.28, 0.66, 20]} />{M('#2f6bff', '#2f6bff', 0.35)}</mesh>
        </group>
      )
    case 'rocket': // final · a launching rocket with window + flame
      return (
        <group rotation={[0, 0, -0.16]}>
          <mesh position={[0, 0.6, 0]} castShadow><cylinderGeometry args={[0.58, 0.58, 1.9, 28]} /><meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={0.08} {...GLOSS} /></mesh>
          <mesh position={[0, 1.05, 0]}><cylinderGeometry args={[0.6, 0.58, 0.12, 28]} />{M(color, color, 0.3)}</mesh>
          <mesh position={[0, 1.85, 0]} castShadow><coneGeometry args={[0.58, 0.95, 28]} />{M(color, color, 0.32)}</mesh>
          <mesh position={[0, 0.75, 0.55]}><sphereGeometry args={[0.26, 22, 18]} /><meshStandardMaterial color="#2aa8ff" emissive="#2aa8ff" emissiveIntensity={0.55} /></mesh>
          <mesh position={[0, 0.75, 0.5]}><torusGeometry args={[0.28, 0.05, 12, 24]} />{M('#ffc61a', '#ffc61a', 0.3)}</mesh>
          {[-1, 1].map((s) => <mesh key={s} position={[s * 0.6, -0.2, 0]} rotation={[0, 0, s * -0.55]} castShadow><boxGeometry args={[0.14, 0.75, 0.55]} />{M(color, color, 0.3)}</mesh>)}
          <mesh position={[0, -0.55, 0]}><coneGeometry args={[0.42, 0.7, 20]} /><meshStandardMaterial color="#ffc61a" emissive="#ff7a1a" emissiveIntensity={0.85} /></mesh>
          <mesh position={[0, -0.95, 0]}><coneGeometry args={[0.26, 0.6, 16]} /><meshStandardMaterial color="#ffffff" emissive="#ffd23f" emissiveIntensity={0.9} /></mesh>
        </group>
      )
    default:
      return <mesh castShadow><icosahedronGeometry args={[1.5, 0]} />{M(color, color, 0.32)}</mesh>
  }
}

function Spin({ children, speed = 0.5, bob = 0.14 }: { children: ReactNode; speed?: number; bob?: number }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime
    g.current.rotation.y = t * speed
    g.current.position.y = Math.sin(t * 1.3) * bob
    g.current.rotation.z = Math.sin(t * 0.8) * 0.05
  })
  return <group ref={g}>{children}</group>
}

/** A spinning full-3D object hero that drifts on scroll (parallax). */
export function Object3D({
  kind,
  color,
  size = 220,
  side = 'right',
  parallax = 0.14,
  speed = 0.5,
}: {
  kind: string
  color: string
  size?: number
  side?: 'left' | 'right'
  parallax?: number
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const vh = window.innerHeight || 800
        setY((r.top + r.height / 2 - vh / 2) * -parallax)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [parallax])
  return (
    <div ref={ref} className={`lp-obj3d lp-obj3d-${side}`} style={{ width: size, height: size, transform: `translate3d(0, ${y.toFixed(1)}px, 0)`, ['--obj' as any]: color }} aria-hidden>
      <Canvas camera={{ position: [0, 0.4, 6.2], fov: 40 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 1.0]} />
        <directionalLight position={[4, 6, 5]} intensity={1.35} />
        <directionalLight position={[-5, 2, 3]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-3, -1, 4]} intensity={0.9} color={color} />
        <Spin speed={speed}>
          <Shape kind={kind} color={color} />
        </Spin>
      </Canvas>
    </div>
  )
}
