import { useRef, useEffect, useState, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Vivid, playful full-3D objects that stand in for each landing section's
// theme. Each spins + bobs, coloured from the section's accent. Decorative and
// pointer-transparent; hidden on narrow screens via CSS.

const MAT = { roughness: 0.34, metalness: 0.12 }
function M(color: string, emissive?: string, ei = 0.18) {
  return <meshStandardMaterial color={color} emissive={emissive ?? color} emissiveIntensity={ei} {...MAT} />
}

function Spin({ children, speed = 0.5, bob = 0.12 }: { children: ReactNode; speed?: number; bob?: number }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!g.current) return
    const t = s.clock.elapsedTime
    g.current.rotation.y = t * speed
    g.current.position.y = Math.sin(t * 1.3) * bob
    g.current.rotation.z = Math.sin(t * 0.8) * 0.06
  })
  return <group ref={g}>{children}</group>
}

// --- the object shapes, built from primitives -------------------------------
function Shape({ kind, color }: { kind: string; color: string }) {
  const dark = '#20223a'
  switch (kind) {
    case 'briefcase': // jobs — a work briefcase
      return (
        <group>
          <mesh castShadow><boxGeometry args={[2.2, 1.5, 0.7]} />{M(color)}</mesh>
          <mesh position={[0, 0.95, 0]}><torusGeometry args={[0.42, 0.09, 12, 24, Math.PI]} />{M('#ffffff', '#ffffff', 0.05)}</mesh>
          <mesh position={[0, 0.05, 0.37]}><boxGeometry args={[0.5, 0.32, 0.08]} />{M(dark)}</mesh>
          <mesh position={[0, 0.16, 0.37]}><boxGeometry args={[2.24, 0.12, 0.06]} />{M('#ffffff', '#ffffff', 0.05)}</mesh>
        </group>
      )
    case 'network': // stack — a hub cube with orbiting connected nodes
      return (
        <group>
          <mesh castShadow><boxGeometry args={[1.15, 1.15, 1.15]} />{M(color, color, 0.28)}</mesh>
          {[0, 1, 2, 3].map((i) => {
            const a = (i / 4) * Math.PI * 2
            const p: [number, number, number] = [Math.cos(a) * 1.85, Math.sin(a) * 1.5, Math.sin(a) * 0.4]
            return (
              <group key={i}>
                <mesh position={p} castShadow><sphereGeometry args={[0.36, 20, 16]} />{M(['#ffc61a', '#ff2d9b', '#2f6bff', '#08c2ac'][i])}</mesh>
                <mesh position={[p[0] / 2, p[1] / 2, p[2] / 2]} rotation={[0, 0, Math.atan2(p[1], p[0]) - Math.PI / 2]}>
                  <cylinderGeometry args={[0.06, 0.06, Math.hypot(p[0], p[1]), 8]} />{M('#c9cede', '#c9cede', 0.04)}
                </mesh>
              </group>
            )
          })}
        </group>
      )
    case 'coins': // cost — a stack of coins
      return (
        <group rotation={[0.2, 0, 0.08]}>
          {[-0.55, 0, 0.55].map((y, i) => (
            <mesh key={y} position={[i === 1 ? 0.25 : 0, y, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[1.05, 1.05, 0.34, 40]} />{M(color, '#ffb800', 0.24)}
            </mesh>
          ))}
          <mesh position={[0.25, 0, 0.18]}><boxGeometry args={[0.16, 0.7, 0.08]} />{M('#8a5a00')}</mesh>
          <mesh position={[0.25, 0, 0.18]} rotation={[0, 0, Math.PI / 2]}><boxGeometry args={[0.16, 0.42, 0.08]} />{M('#8a5a00')}</mesh>
        </group>
      )
    case 'gem': // pricing — a faceted crystal
      return (
        <group>
          <mesh castShadow><octahedronGeometry args={[1.5, 0]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.34} roughness={0.15} metalness={0.3} flatShading /></mesh>
          <mesh scale={1.02}><octahedronGeometry args={[1.5, 0]} /><meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.25} /></mesh>
        </group>
      )
    case 'card': // onramp — a credit card with chip + stripe
      return (
        <group rotation={[0.35, 0, -0.12]}>
          <mesh castShadow><boxGeometry args={[2.7, 1.7, 0.14]} />{M(color, color, 0.2)}</mesh>
          <mesh position={[0, 0.35, 0.09]}><boxGeometry args={[2.7, 0.42, 0.04]} />{M(dark)}</mesh>
          <mesh position={[-0.85, -0.15, 0.09]}><boxGeometry args={[0.5, 0.4, 0.06]} />{M('#ffc61a', '#ffc61a', 0.3)}</mesh>
          {[0, 1, 2].map((i) => <mesh key={i} position={[0.2 + i * 0.35, -0.55, 0.09]}><boxGeometry args={[0.28, 0.12, 0.04]} />{M('#ffffff', '#ffffff', 0.05)}</mesh>)}
        </group>
      )
    case 'eye': // widget — a friendly monitor/eye
      return (
        <group>
          <mesh castShadow><boxGeometry args={[2.4, 1.7, 0.5]} />{M(color, color, 0.18)}</mesh>
          <mesh position={[0, 0.05, 0.28]}><boxGeometry args={[1.9, 1.2, 0.05]} />{M('#10233a', '#10233a', 0.05)}</mesh>
          <mesh position={[0, 0.05, 0.32]}><circleGeometry args={[0.42, 28]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} /></mesh>
          <mesh position={[0, 0.05, 0.36]}><circleGeometry args={[0.2, 24]} /><meshStandardMaterial color={dark} /></mesh>
          <mesh position={[0, -1.05, 0]}><cylinderGeometry args={[0.5, 0.6, 0.16, 24]} />{M(color, color, 0.15)}</mesh>
        </group>
      )
    case 'gear': // how — a rotating gear
      return (
        <group>
          <mesh castShadow><cylinderGeometry args={[1.1, 1.1, 0.5, 32]} />{M(color, color, 0.22)}</mesh>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2
            return <mesh key={i} position={[Math.cos(a) * 1.3, 0, Math.sin(a) * 1.3]} rotation={[0, -a, 0]} castShadow><boxGeometry args={[0.5, 0.5, 0.5]} />{M(color, color, 0.22)}</mesh>
          })}
          <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.42, 0.42, 0.6, 24]} />{M('#20223a')}</mesh>
        </group>
      )
    case 'rocket': // final — a launching rocket
      return (
        <group rotation={[0, 0, -0.2]}>
          <mesh position={[0, 0.6, 0]} castShadow><cylinderGeometry args={[0.55, 0.55, 1.8, 24]} />{M('#f4f6ff', '#f4f6ff', 0.05)}</mesh>
          <mesh position={[0, 1.75, 0]} castShadow><coneGeometry args={[0.55, 0.9, 24]} />{M(color, color, 0.28)}</mesh>
          <mesh position={[0, 0.55, 0.5]}><sphereGeometry args={[0.28, 20, 16]} /><meshStandardMaterial color="#2f6bff" emissive="#2f6bff" emissiveIntensity={0.4} /></mesh>
          {[-1, 1].map((s) => <mesh key={s} position={[s * 0.55, -0.15, 0]} rotation={[0, 0, s * -0.5]} castShadow><boxGeometry args={[0.12, 0.7, 0.5]} />{M(color, color, 0.28)}</mesh>)}
          <mesh position={[0, -0.55, 0]}><coneGeometry args={[0.4, 0.9, 20]} /><meshStandardMaterial color="#ffc61a" emissive="#ff7a1a" emissiveIntensity={0.7} /></mesh>
        </group>
      )
    default:
      return <mesh castShadow><icosahedronGeometry args={[1.4, 0]} />{M(color, color, 0.3)}</mesh>
  }
}

/** A spinning full-3D object hero that drifts on scroll (parallax). */
export function Object3D({
  kind,
  color,
  size = 210,
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
      <Canvas camera={{ position: [0, 0.5, 6], fov: 40 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <hemisphereLight args={['#ffffff', '#c7cede', 1.0]} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} />
        <pointLight position={[-4, 2, 3]} intensity={0.5} color={color} />
        <Spin speed={speed}>
          <Shape kind={kind} color={color} />
        </Spin>
      </Canvas>
    </div>
  )
}
