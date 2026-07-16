import * as THREE from 'three'
import type { Department } from '../../data/agents'
import { ROOM, DESK_FWD } from '../../three/layout3d'
import type { DojoPalette } from '../../data/templates'

const WOOD = '#b5793f'
const WOOD_D = '#7a4a24'
const PAPER = '#fff7e6'
const M = { roughness: 0.75, metalness: 0.06 }

// Procedural Backrooms wallpaper: mono-yellow with faint vertical pinstripes,
// panel seams and damp mottling. Lazily built once and shared across walls.
let _wallTex: THREE.CanvasTexture | null = null
function backroomsWallpaper(): THREE.CanvasTexture | null {
  if (_wallTex) return _wallTex
  if (typeof document === 'undefined') return null
  const s = 128
  const c = document.createElement('canvas')
  c.width = s; c.height = s
  const g = c.getContext('2d')
  if (!g) return null
  g.fillStyle = '#c9b84e'; g.fillRect(0, 0, s, s)
  // faint vertical pinstripes
  for (let x = 0; x < s; x += 9) { g.fillStyle = 'rgba(138,122,44,0.22)'; g.fillRect(x, 0, 2, s) }
  // horizontal panel seams
  g.fillStyle = 'rgba(120,106,40,0.30)'; g.fillRect(0, 2, s, 2); g.fillRect(0, s - 3, s, 2)
  // deterministic damp mottling
  let seed = 7
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
  for (let i = 0; i < 26; i++) {
    const r = 4 + rnd() * 12
    g.fillStyle = `rgba(${100 + rnd() * 30 | 0}, ${90 + rnd() * 24 | 0}, 40, 0.10)`
    g.beginPath(); g.arc(rnd() * s, rnd() * s, r, 0, Math.PI * 2); g.fill()
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(5, 2)
  _wallTex = t
  return t
}

function B({ p, s, c, rot, emissive, ei }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number]; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} rotation={rot} castShadow receiveShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Cy({ p, r, h, c, rot, emissive, ei }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number]; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <meshStandardMaterial color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Sp({ p, r, c, emissive, ei }: { p: [number, number, number]; r: number; c: string; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} castShadow>
      <sphereGeometry args={[r, 16, 14]} />
      <meshStandardMaterial color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Co({ p, r, h, c, rot, emissive, ei, open }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number]; emissive?: string; ei?: number; open?: boolean }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <coneGeometry args={[r, h, 20, 1, open ?? false]} />
      <meshStandardMaterial color={c} emissive={emissive} emissiveIntensity={ei ?? 0} side={open ? 2 : 0} {...M} />
    </mesh>
  )
}
// Emissive "glow" ball used for lights, fireflies, blinking indicators.
function Glow({ p, r, c, i = 0.8 }: { p: [number, number, number]; r: number; c: string; i?: number }) {
  return (
    <mesh position={p}>
      <sphereGeometry args={[r, 14, 12]} />
      <meshStandardMaterial color={c} emissive={c} emissiveIntensity={i} roughness={0.3} />
    </mesh>
  )
}
// Thin glowing plane strip (floor light lines, screens, water sheen).
function Strip({ p, s, c, rot, i = 0.6 }: { p: [number, number, number]; s: [number, number]; c: string; rot?: [number, number, number]; i?: number }) {
  return (
    <mesh position={p} rotation={rot}>
      <planeGeometry args={s} />
      <meshStandardMaterial color={c} emissive={c} emissiveIntensity={i} transparent opacity={0.9} side={2} />
    </mesh>
  )
}

/** Job-specific 3D prop, placed on/beside each agent's desk · keyed by the
 *  agent's function (department) so any dojo's crew gets fitting props. */
function JobProp({ fn, dz }: { fn: Department; dz: number }) {
  switch (fn) {
    case 'Leadership': // trophy on desk
      return (
        <group position={[0.7, 0.96, dz - 0.1]}>
          <Cy p={[0, 0.18, 0]} r={0.11} h={0.16} c="#ffcf3b" />
          <Cy p={[0, 0.05, 0]} r={0.06} h={0.12} c="#e0a800" />
          <B p={[0, -0.02, 0]} s={[0.18, 0.06, 0.18]} c="#7a4a24" />
        </group>
      )
    case 'Engineering': // second monitor with code
      return (
        <group position={[0.72, 0.9, dz]}>
          <B p={[0, 0.2, 0]} s={[0.5, 0.34, 0.05]} c="#2b2f3d" />
          <B p={[0, 0.2, 0.03]} s={[0.44, 0.28, 0.02]} c="#0f2b22" emissive="#1f7a4a" ei={0.5} />
          <B p={[0, 0.0, 0]} s={[0.1, 0.06, 0.1]} c="#2b2f3d" />
        </group>
      )
    case 'Ops': // server rack beside
      return (
        <group position={[1.5, 0, dz - 0.4]}>
          <B p={[0, 0.9, 0]} s={[0.6, 1.8, 0.5]} c="#2a2e3d" />
          {[0.4, 0.8, 1.2, 1.6].map((y) => (
            <group key={y}>
              <B p={[0, y, 0.26]} s={[0.5, 0.14, 0.02]} c="#3a3f52" />
              <Sp p={[-0.15, y, 0.28]} r={0.03} c="#37d67a" />
              <Sp p={[0, y, 0.28]} r={0.03} c="#ffcf3b" />
            </group>
          ))}
        </group>
      )
    case 'Finance': // safe + coins
      return (
        <group position={[1.45, 0, dz - 0.3]}>
          <B p={[0, 0.5, 0]} s={[0.8, 1, 0.7]} c="#3a3f52" />
          <mesh position={[0, 0.55, 0.36]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.18, 0.18, 0.04, 20]} /><meshStandardMaterial color="#c9d2e2" {...M} /></mesh>
          <Cy p={[0, 1.06, 0]} r={0.14} h={0.05} c="#ffcf3b" />
          <Cy p={[0, 1.11, 0]} r={0.14} h={0.05} c="#ffd94b" />
        </group>
      )
    case 'Growth': // megaphone
      return (
        <group position={[0.72, 1.0, dz]} rotation={[0, -0.5, 0.3]}>
          <mesh castShadow><coneGeometry args={[0.2, 0.36, 18, 1, true]} /><meshStandardMaterial color="#f2617a" side={2} {...M} /></mesh>
          <Cy p={[0, -0.24, 0]} r={0.07} h={0.16} c="#7a1730" />
        </group>
      )
    case 'Product': // kanban board
      return (
        <group position={[1.42, 0.9, dz - 0.2]}>
          <B p={[0, 0.5, 0]} s={[0.9, 0.7, 0.05]} c="#f6f8fc" />
          {[-0.28, 0, 0.28].map((cx) => [0.6, 0.4].map((cy) => <B key={`${cx}-${cy}`} p={[cx, cy, 0.04]} s={[0.2, 0.14, 0.02]} c={cy > 0.5 ? '#ffe08a' : '#a7d8ff'} />))}
        </group>
      )
    case 'People': // potted plant
      return (
        <group position={[1.4, 0, dz - 0.2]}>
          <B p={[0, 0.3, 0]} s={[0.5, 0.5, 0.5]} c="#c17a4a" />
          <Cy p={[0, 0.7, 0]} r={0.06} h={0.4} c={WOOD_D} />
          <Sp p={[0, 1.05, 0]} r={0.42} c="#6cbf6c" />
          <Sp p={[-0.3, 0.9, 0]} r={0.26} c="#5faf5f" />
        </group>
      )
    default:
      return null
  }
}

// A cheerful per-agent accent so a whole crew of saucers / mushrooms / clouds
// reads as a colourful set rather than identical clones.
const FUN_COLORS = ['#ff6b8a', '#ffd23f', '#4fc3f7', '#7bd88f', '#ff9a52', '#c98cff', '#2fe0c0', '#ff5db1']
const funColor = (id: string) => FUN_COLORS[Math.abs(hashStr(id)) % FUN_COLORS.length]

// chair seat/back colour per theme (chairs are skipped for saucers & pools)
const CHAIR: Record<string, [string, string]> = {
  lab: ['#dfeaee', '#c3d6dc'], castle: ['#5a4a2b', '#4a3c22'], factory: ['#6b7280', '#565c68'],
  garden: ['#6b8f4a', '#4f7d3a'], startup: ['#4a5270', '#4a5270'], forest: ['#6b4a2a', '#4f3620'],
  wonderland: ['#ff9ecb', '#c98cff'], dojo: ['#7a4a24', '#5a3a1c'],
}

// The distinctive, fun desk shape for each theme. The surface sits at y≈0.9 so
// the shared Laptop lands on top. Rendered inside the desk group (at dz).
function WorkstationBase({ variant, id }: { variant: string; id: string }) {
  const hue = funColor(id)
  switch (variant) {
    case 'space': // a hovering flying saucer
      return (
        <group>
          <Cy p={[0, 0.42, 0]} r={1.25} h={0.05} c={hue} emissive={hue} ei={0.9} />
          <mesh position={[0, 0.7, 0]} scale={[1, 0.3, 1]} castShadow><sphereGeometry args={[1.22, 28, 18]} /><meshStandardMaterial color="#c3ccd8" metalness={0.55} roughness={0.3} /></mesh>
          <Cy p={[0, 0.84, 0]} r={0.5} h={0.14} c="#9aa3b2" />
          <mesh position={[0, 0.98, 0]}><sphereGeometry args={[0.44, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color={hue} emissive={hue} emissiveIntensity={0.5} transparent opacity={0.85} /></mesh>
          {/* blinking nav beacon on the dome */}
          <Glow p={[0, 1.28, 0]} r={0.06} c="#ff4d4d" i={1.2} />
          {/* rim running lights + a ring of hull portholes on the carlingue */}
          {Array.from({ length: 10 }).map((_, i) => { const a = (i / 10) * Math.PI * 2; return <Glow key={`r${i}`} p={[Math.cos(a) * 1.12, 0.72, Math.sin(a) * 1.12]} r={0.055} c={i % 2 ? '#ffffff' : hue} i={1.1} /> })}
          {Array.from({ length: 14 }).map((_, i) => { const a = (i / 14) * Math.PI * 2 + 0.2; return <mesh key={`h${i}`} position={[Math.cos(a) * 0.92, 0.78, Math.sin(a) * 0.92]}><sphereGeometry args={[0.05, 10, 8]} /><meshStandardMaterial color={i % 3 === 0 ? '#ffe066' : '#63d0ff'} emissive={i % 3 === 0 ? '#ffe066' : '#63d0ff'} emissiveIntensity={0.9} /></mesh> })}
        </group>
      )
    case 'garden': // a toadstool mushroom desk
      return (
        <group>
          <Cy p={[0, 0.42, 0]} r={0.34} h={0.84} c="#f4ecd8" />
          <mesh position={[0, 0.9, 0]} scale={[1, 0.5, 1]} castShadow><sphereGeometry args={[1.05, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color={hue} {...M} /></mesh>
          {/* classic chunky white spots, sitting on the curve of the cap */}
          {[[0, 1.35, 0.05, 0.22], [0.6, 1.1, 0.28, 0.2], [-0.6, 1.08, -0.1, 0.18], [0.28, 1.16, -0.55, 0.17], [-0.32, 1.14, 0.55, 0.19], [0.75, 0.95, -0.3, 0.15], [-0.72, 0.95, 0.4, 0.16], [0.15, 1.02, 0.78, 0.15]].map(([dx, dy, dz, r], i) => (
            <mesh key={i} position={[dx as number, dy as number, dz as number]} scale={[1, 0.7, 1]}><sphereGeometry args={[r as number, 16, 12]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.12} roughness={0.8} /></mesh>
          ))}
        </group>
      )
    case 'wonderland': // a small fluffy white cloud desk
      return (
        <group>
          {[[0, 0.02, 0.72], [0.5, 0.04, 0.48], [-0.5, 0.04, 0.48], [0.28, -0.02, 0.44], [-0.28, -0.02, 0.44], [0, 0.14, 0.56]].map(([dx, dy, r], i) => (
            <mesh key={i} position={[dx as number, 0.9 + (dy as number), 0]} castShadow><sphereGeometry args={[r as number, 20, 16]} /><meshStandardMaterial color="#ffffff" emissive="#eef4ff" emissiveIntensity={0.18} roughness={1} /></mesh>
          ))}
          <Cy p={[0, 0.45, 0]} r={0.12} h={0.9} c={hue} emissive={hue} ei={0.35} />
        </group>
      )
    case 'forest': // a log across two stumps
      return (
        <group>
          {[-0.72, 0.72].map((sx) => <Cy key={sx} p={[sx, 0.38, 0]} r={0.24} h={0.76} c="#6b4a2a" />)}
          <Cy p={[0, 0.88, 0]} r={0.34} h={2.0} c="#8a5a34" rot={[Math.PI / 2, 0, Math.PI / 2]} />
          <Sp p={[0.95, 1.06, 0.15]} r={0.13} c={hue} emissive={hue} ei={0.4} />
          <Sp p={[-0.9, 0.6, -0.2]} r={0.16} c="#6cbf6c" />
        </group>
      )
    case 'lab': // a clean pod bench with glowing edges
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.12, 0.86]} c="#eef5f7" />
          <B p={[0, 0.9, 0.45]} s={[1.9, 0.05, 0.04]} c="#00e6ff" emissive="#00e6ff" ei={0.7} />
          <B p={[0, 0.9, -0.45]} s={[1.9, 0.05, 0.04]} c={hue} emissive={hue} ei={0.5} />
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <Cy key={i} p={[lx as number, 0.44, lz as number]} r={0.06} h={0.88} c="#cbdde3" />)}
        </group>
      )
    case 'castle': // a banquet table with a coloured runner
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[2.0, 0.14, 0.95]} c="#6b4f2a" />
          <B p={[0, 0.985, 0]} s={[0.66, 0.02, 0.97]} c={hue} />
          {[[-0.9, -0.4], [0.9, -0.4], [-0.9, 0.4], [0.9, 0.4]].map(([lx, lz], i) => <B key={i} p={[lx as number, 0.44, lz as number]} s={[0.16, 0.88, 0.16]} c="#3f2e18" />)}
        </group>
      )
    case 'factory': // a steel machine bench with a control strip
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.14, 0.86]} c="#9aa0aa" />
          <B p={[0, 0.9, 0.45]} s={[1.9, 0.06, 0.05]} c="#f2c200" />
          {[-0.5, -0.1, 0.3].map((bx, i) => <Glow key={bx} p={[bx, 0.98, -0.3]} r={0.05} c={['#37d67a', '#ff5a3a', hue][i]} i={0.9} />)}
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <B key={i} p={[lx as number, 0.44, lz as number]} s={[0.12, 0.88, 0.12]} c="#565c68" />)}
        </group>
      )
    case 'startup': // a sleek desk with a neon underglow
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.1, 0.85]} c="#20242f" />
          <B p={[0, 0.82, 0]} s={[1.96, 0.04, 0.9]} c={hue} emissive={hue} ei={0.8} />
          {[-0.8, 0.8].map((lx) => <B key={lx} p={[lx, 0.44, 0]} s={[0.1, 0.86, 0.72]} c="#2b2f3d" />)}
        </group>
      )
    case 'backrooms': // a grimy beige folding office table
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.08, 0.85]} c="#d9cfa4" />
          <B p={[0, 0.855, 0]} s={[1.94, 0.03, 0.89]} c="#a89e70" />
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <Cy key={i} p={[lx as number, 0.44, lz as number]} r={0.05} h={0.86} c="#8a8a92" />)}
        </group>
      )
    case 'dojo':
    default: // warm wood desk
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.1, 0.85]} c={WOOD} />
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <B key={i} p={[lx as number, 0.44, lz as number]} s={[0.1, 0.88, 0.1]} c={WOOD_D} />)}
        </group>
      )
  }
}

// The laptop, positioned at a given base y/z (agent-facing keyboard, glowing lid).
function Laptop({ y, z }: { y: number; z: number }) {
  return (
    <group position={[0, y, z]}>
      <B p={[0, 0, 0]} s={[0.92, 0.05, 0.62]} c="#20242f" />
      <B p={[0, 0.02, 0]} s={[0.86, 0.03, 0.56]} c="#2b2f3d" />
      {[...Array(4)].map((_, r) =>
        [...Array(9)].map((_, k) => <B key={`${r}-${k}`} p={[-0.34 + k * 0.085, 0.045, -0.16 + r * 0.09]} s={[0.06, 0.02, 0.06]} c="#454b63" />),
      )}
      <B p={[0, 0.045, -0.22]} s={[0.26, 0.012, 0.14]} c="#3a4058" />
      <mesh position={[0, 0.055, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.72, 0.42]} />
        <meshBasicMaterial color="#2a7fa8" transparent opacity={0.16} depthWrite={false} />
      </mesh>
      <group position={[0, 0, 0.22]} rotation={[0.3, 0, 0]}>
        <B p={[0, 0.44, 0.02]} s={[0.94, 0.66, 0.04]} c="#2b2f3d" />
        <B p={[0, 0.44, -0.02]} s={[0.82, 0.54, 0.02]} c="#0f2233" emissive="#2a7fa8" ei={0.6} />
        <B p={[0, 0.72, 0.02]} s={[0.9, 0.05, 0.06]} c="#63d0ff" emissive="#63d0ff" ei={0.7} />
        <mesh position={[0, 0.42, 0.042]}><circleGeometry args={[0.08, 20]} /><meshBasicMaterial color="#63d0ff" transparent opacity={0.85} /></mesh>
      </group>
    </group>
  )
}

const FLOAT_COLORS = ['#ff6b8a', '#ffd23f', '#4fc3f7', '#7bd88f', '#ff9a52', '#c98cff']

function Station({ id, fn, x, z, variant }: { id: string; fn: Department; x: number; z: number; variant: string }) {
  const dz = z + DESK_FWD // desk centre (toward camera)

  // Villa: no desks · agents lounge in the pool on inflatable ring floats,
  // with a laptop on a floating tray in front of them.
  if (variant === 'villa') {
    const fc = FLOAT_COLORS[Math.abs(hashStr(id)) % FLOAT_COLORS.length]
    return (
      <group position={[x, 0, 0]}>
        {/* inflatable ring float around the agent */}
        <mesh position={[0, 0.55, z + 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.95, 0.3, 16, 30]} />
          <meshStandardMaterial color={fc} roughness={0.5} />
        </mesh>
        {/* floating laptop tray */}
        <group position={[0, 0, dz + 0.1]}>
          <mesh position={[0, 0.52, 0]} castShadow><cylinderGeometry args={[0.62, 0.62, 0.12, 22]} /><meshStandardMaterial color="#fff6e6" roughness={0.6} /></mesh>
          <mesh position={[0, 0.46, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.62, 0.12, 12, 24]} /><meshStandardMaterial color="#ffffff" /></mesh>
          <Laptop y={0.62} z={-0.05} />
        </group>
      </group>
    )
  }

  // saucers hover (no chair); every other theme keeps a themed chair
  const chair = CHAIR[variant] ?? ['#4a5270', '#4a5270']
  const noChair = variant === 'space'
  return (
    <group position={[x, 0, 0]}>
      {!noChair && (
        <group position={[0, 0, z - 0.5]}>
          <Cy p={[0, 0.28, 0]} r={0.05} h={0.56} c="#2b2f3d" />
          <B p={[0, 0.06, 0]} s={[0.5, 0.06, 0.5]} c="#2b2f3d" />
          <B p={[0, 0.6, 0]} s={[0.64, 0.12, 0.62]} c={chair[0]} />
          <B p={[0, 1.05, -0.28]} s={[0.6, 0.85, 0.12]} c={chair[1]} />
        </group>
      )}

      <group position={[0, 0, dz]}>
        <WorkstationBase variant={variant} id={id} />
      </group>

      <Laptop y={0.96} z={z + 0.55} />
      <JobProp fn={fn} dz={dz} />
    </group>
  )
}

function Lantern({ x, z, c = '#e0524f' }: { x: number; z: number; c?: string }) {
  // a floor-standing paper lantern on a slim post (no ceiling to hang from)
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 0.05, 0]}><cylinderGeometry args={[0.16, 0.2, 0.1, 16]} /><meshStandardMaterial color={'#2b2b2b'} /></mesh>
      <mesh position={[0, 1.0, 0]}><cylinderGeometry args={[0.025, 0.025, 1.9, 8]} /><meshStandardMaterial color={'#333'} /></mesh>
      <mesh position={[0, 1.95, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.7, 18]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.24, 18]} />
        <meshStandardMaterial color={'#fff2c4'} emissive={'#ffcf6a'} emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

// A glowing accent orb on a slim post · the "plain" template corner marker.
function Beacon({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.9, 0]} r={0.14} h={1.8} c="#3a3f52" />
      <mesh position={[0, 1.95, 0]} castShadow>
        <icosahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

// A themed planter/console for the back corners of a "plain" template.
function Planter({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.4, 0]} s={[1.0, 0.8, 0.7]} c={c} />
      <B p={[0, 0.86, 0]} s={[1.05, 0.12, 0.75]} c={accent} emissive={accent} ei={0.35} />
      <Cy p={[0, 1.2, 0]} r={0.06} h={0.6} c="#4a5270" />
      <Sp p={[0, 1.55, 0]} r={0.28} c={accent} />
    </group>
  )
}

// Zen garden: cherry tree, stone lantern, bamboo, paper lanterns, taiko & bonsai.
function ZenGarden({ backZ, accent }: { backZ: number; accent: string }) {
  return (
    <group>
      <Lantern x={-4} z={backZ + 1.5} c={accent} />
      <Lantern x={4} z={backZ + 1.5} c={accent} />
      <CherryTree x={-8.6} z={2.6} blossom={accent} />
      <StoneLantern x={-8.7} z={-2.2} />
      <Bamboo x={8.7} z={-1.5} />
      <Bamboo x={8.9} z={backZ + 2.6} />
      {[-6, -3.4, 3.4, 6].map((rx) => (
        <group key={rx} position={[rx, 0, backZ + 1.3]}>
          <Sp p={[0, 0.14, 0]} r={0.3} c="#b7b2a6" />
          <Sp p={[0.42, 0.09, 0.22]} r={0.17} c="#c9c4b8" />
        </group>
      ))}
      <group position={[8, 0, backZ + 2]}>
        <mesh position={[0, 0.9, 0]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.9, 24]} /><meshStandardMaterial color={'#c0392b'} {...M} /></mesh>
        {[-0.5, 0.5].map((s) => <mesh key={s} position={[s * 0.5, 0.35, 0]} rotation={[0, 0, s * 0.3]}><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
      </group>
      <group position={[-8, 0, backZ + 2]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[0.7, 0.5, 0.7]} /><meshStandardMaterial color={'#c17a4a'} /></mesh>
        <mesh position={[0, 1.05, 0]} castShadow><sphereGeometry args={[0.45, 14, 12]} /><meshStandardMaterial color={'#6cbf6c'} /></mesh>
      </group>
    </group>
  )
}

// Generic themed accents for non-zen templates: corner beacons + planters.
function PlainAccents({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      <Beacon x={-8.6} z={2.6} c={P.accent} />
      <Beacon x={8.6} z={2.6} c={P.accent} />
      <Beacon x={-8.7} z={backZ + 2.2} c={P.accent} />
      <Beacon x={8.7} z={backZ + 2.2} c={P.accent} />
      <Planter x={-8} z={backZ + 2} c={P.wallSide} accent={P.accent} />
      <Planter x={8} z={backZ + 2} c={P.wallSide} accent={P.accent} />
      {/* extra furnishings · floor lanterns, a lounge corner, a rug, plants & art */}
      <Lantern x={-7.2} z={5.2} c={P.accent} />
      <Lantern x={7.2} z={5.2} c={P.accent} />
      <LoungeCorner x={7.4} z={-1.5} c={P.wallSide} accent={P.accent} />
      <PottedPalm x={-8.6} z={-1} />
      <PottedPalm x={-6.5} z={5.6} />
      <FloorRug x={0} z={2.4} c={P.accent} />
      <Sculpture x={5.4} z={5.4} c={P.trim} accent={P.accent} />
      <CrateStack x={-8.8} z={backZ + 5} c={P.wallSide} />
      <WallArt x={-6.5} y={3} z={backZ + 0.28} c={P.accent} />
      <WallArt x={6.5} y={3} z={backZ + 0.28} c={P.trim} />
    </group>
  )
}

// --- shared decorative props (reused across dojos) --------------------------
function PottedPalm({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 0.28, 0]}><cylinderGeometry args={[0.34, 0.26, 0.56, 16]} /><meshStandardMaterial color="#c9cdd6" roughness={0.8} /></mesh>
      <mesh position={[0, 0.5, 0]}><cylinderGeometry args={[0.3, 0.3, 0.12, 16]} /><meshStandardMaterial color="#6b4a2a" /></mesh>
      {Array.from({ length: 7 }).map((_, i) => { const a = (i / 7) * Math.PI * 2; return (
        <mesh key={i} position={[Math.cos(a) * 0.28, 1.2, Math.sin(a) * 0.28]} rotation={[0.5, a, 0]} castShadow><boxGeometry args={[0.14, 1.5, 0.03]} /><meshStandardMaterial color={i % 2 ? '#3c9a52' : '#2f8747'} /></mesh>
      ) })}
      <Cy p={[0, 0.9, 0]} r={0.05} h={0.9} c="#4a7a3a" />
    </group>
  )
}
function LoungeCorner({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]} rotation={[0, -0.5, 0]}>
      <B p={[0, 0.28, 0]} s={[2.2, 0.5, 0.9]} c={c} />
      <B p={[0, 0.72, -0.34]} s={[2.2, 0.9, 0.22]} c={c} />
      {[-0.6, 0.6].map((px) => <B key={px} p={[px, 0.72, 0.05]} s={[0.5, 0.22, 0.5]} c={accent} />)}
      {/* round side table with an orb */}
      <group position={[1.55, 0, 0.2]}>
        <Cy p={[0, 0.24, 0]} r={0.06} h={0.48} c="#2b2b2b" />
        <Cy p={[0, 0.5, 0]} r={0.42} h={0.06} c="#e7e3da" />
        <Sp p={[0, 0.62, 0]} r={0.12} c={accent} />
      </group>
    </group>
  )
}
function FloorRug({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0.015, z]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh receiveShadow><planeGeometry args={[7.2, 5]} /><meshStandardMaterial color="#efe9df" roughness={1} /></mesh>
      <mesh position={[0, 0, 0.001]}><ringGeometry args={[1.6, 1.9, 48]} /><meshStandardMaterial color={c} roughness={1} transparent opacity={0.7} /></mesh>
      <mesh position={[0, 0, 0.001]}><ringGeometry args={[2.6, 2.75, 48]} /><meshStandardMaterial color={c} roughness={1} transparent opacity={0.4} /></mesh>
    </group>
  )
}
function Sculpture({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.3, 0]} s={[0.7, 0.6, 0.7]} c="#1c1c1c" />
      <Sp p={[0, 1.05, 0]} r={0.32} c={accent} />
      <Co p={[0, 1.7, 0]} r={0.3} h={0.55} c={c} />
    </group>
  )
}
function CrateStack({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.35, 0]} s={[0.9, 0.7, 0.9]} c={c} />
      <B p={[0.25, 0.95, 0.1]} s={[0.7, 0.55, 0.7]} c="#c4a878" rot={[0, 0.4, 0]} />
      <B p={[-0.1, 1.5, -0.1]} s={[0.5, 0.45, 0.5]} c={c} rot={[0, -0.3, 0]} />
    </group>
  )
}
function WallArt({ x, y, z, c }: { x: number; y: number; z: number; c: string }) {
  return (
    <group position={[x, y, z]}>
      <B p={[0, 0, 0]} s={[1.5, 1.9, 0.06]} c="#20242c" />
      <B p={[0, 0, 0.04]} s={[1.3, 1.7, 0.02]} c="#f3f1ec" />
      <B p={[-0.2, 0.2, 0.06]} s={[0.7, 0.7, 0.01]} c={c} rot={[0, 0, 0.1]} />
      <Cy p={[0.35, -0.35, 0.06]} r={0.28} h={0.01} c="#e7d9b0" rot={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

function CherryTree({ x, z, blossom = '#ffb0d0' }: { x: number; z: number; blossom?: string }) {
  const blossoms: [number, number, number][] = [
    [0, 3.1, 0], [-0.7, 2.8, 0.2], [0.7, 2.9, -0.2], [-0.45, 3.45, -0.3], [0.5, 3.45, 0.3], [0, 2.55, 0.6], [0, 2.7, -0.6],
  ]
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 1.2, 0]} r={0.22} h={2.4} c={WOOD_D} />
      <Cy p={[-0.45, 2.2, 0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, 0.7]} />
      <Cy p={[0.5, 2.1, -0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, -0.6]} />
      {blossoms.map((p, i) => <Sp key={i} p={p} r={0.62} c={blossom} />)}
    </group>
  )
}

function StoneLantern({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.15, 0]} r={0.34} h={0.3} c="#9aa0a6" />
      <Cy p={[0, 0.55, 0]} r={0.12} h={0.6} c="#aab0b6" />
      <Cy p={[0, 0.95, 0]} r={0.34} h={0.24} c="#9aa0a6" />
      <mesh position={[0, 1.22, 0]} castShadow>
        <boxGeometry args={[0.42, 0.36, 0.42]} />
        <meshStandardMaterial color="#b7bcc2" emissive="#ffcf6a" emissiveIntensity={0.55} {...M} />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <coneGeometry args={[0.42, 0.36, 4]} />
        <meshStandardMaterial color="#8a9096" {...M} />
      </mesh>
      <Sp p={[0, 1.78, 0]} r={0.08} c="#8a9096" />
    </group>
  )
}

function Bamboo({ x, z }: { x: number; z: number }) {
  const stalks: [number, number, number][] = [[-0.25, 0, 3.0], [0.12, 0.2, 3.6], [0.36, -0.16, 2.6]]
  return (
    <group position={[x, 0, z]}>
      {stalks.map(([bx, bz, h], i) => (
        <group key={i} position={[bx, 0, bz]}>
          <Cy p={[0, h / 2, 0]} r={0.07} h={h} c="#7bbf5a" />
          {[0.9, 1.7, 2.5].filter((yy) => yy < h).map((yy) => <Sp key={yy} p={[0, yy, 0]} r={0.085} c="#5fa53f" />)}
          <Sp p={[0.2, h, 0.1]} r={0.2} c="#6cbf6c" />
          <Sp p={[-0.16, h - 0.12, -0.1]} r={0.16} c="#5faf5f" />
        </group>
      ))}
    </group>
  )
}

// ===========================================================================
// Theme-specific decor · one distinctive set per dojo template. Placed along the
// back wall and side edges (behind the desks), so each environment reads clearly
// as a start-up loft / space station / lab / villa / castle / garden / factory.
// ===========================================================================

// --- Start-up HQ: whiteboard, plants, beanbags, moving boxes, neon sign ------
// A low-poly mountain range for the far background of open-air dojos.
function Mountains({ z, c1, c2, snow }: { z: number; c1: string; c2: string; snow?: boolean }) {
  const peaks: [number, number, number][] = [[-13, 6, 6.5], [-7.5, 8, 7.5], [-2, 6, 6], [3.5, 8.5, 8], [9, 6.5, 7], [14, 7.5, 7]]
  return (
    <group position={[0, 0, z]}>
      {peaks.map(([x, h, r], i) => (
        <group key={i}>
          <mesh position={[x, 0, 0]} scale={[1, 1, 0.45]}><coneGeometry args={[r, h, 4]} /><meshStandardMaterial color={i % 2 ? c1 : c2} roughness={1} flatShading /></mesh>
          {snow && <mesh position={[x, h * 0.52 - 0.5, 0.2]} scale={[1, 1, 0.45]}><coneGeometry args={[r * 0.34, h * 0.34, 4]} /><meshStandardMaterial color="#ffffff" roughness={1} flatShading /></mesh>}
        </group>
      ))}
    </group>
  )
}

// A modern two-storey glass-and-white villa with a rooftop pergola, balcony
// railings and a warm terrace · sat behind the Miami pool.
function ModernVilla({ x, z }: { x: number; z: number }) {
  const white = '#f5f1e8'
  const warm = '#e7dccb'
  const glass = '#8fd7e6'
  return (
    <group position={[x, 0, z]}>
      {/* ground floor + cantilevered upper floor */}
      <B p={[0, 1.4, 0]} s={[6.4, 2.8, 3.4]} c={white} />
      <B p={[0, 2.9, 0]} s={[6.7, 0.18, 3.9]} c={warm} />
      <B p={[1.6, 4.0, 0.3]} s={[3.6, 2.0, 2.9]} c={white} />
      <B p={[1.6, 5.1, 0.3]} s={[3.9, 0.16, 3.2]} c={warm} />
      {/* glass window walls (ground) */}
      <B p={[-1.7, 1.3, 1.72]} s={[2.6, 2.0, 0.06]} c={glass} emissive="#4fc3d0" ei={0.28} />
      <B p={[1.5, 1.2, 1.72]} s={[2.0, 1.6, 0.06]} c={glass} emissive="#4fc3d0" ei={0.28} />
      {[-2.6, -1.7, -0.8].map((mx) => <B key={mx} p={[mx, 1.3, 1.76]} s={[0.05, 2.0, 0.04]} c={white} />)}
      {/* warm front door */}
      <B p={[2.5, 0.95, 1.73]} s={[0.9, 1.9, 0.06]} c="#c9784a" />
      {/* upper glass + balcony rail on the ground-floor roof */}
      <B p={[1.6, 4.1, 1.78]} s={[3.0, 1.5, 0.06]} c="#a7e0ec" emissive="#4fc3d0" ei={0.22} />
      <B p={[-1.8, 3.05, 1.8]} s={[2.6, 0.06, 0.06]} c={warm} />
      {[-3.0, -2.4, -1.8, -1.2, -0.6].map((rx) => <Cy key={rx} p={[rx, 3.0, 1.8]} r={0.03} h={0.32} c={warm} />)}
      {/* rooftop pergola: posts + slatted shade + greenery */}
      {[[-0.1, -0.9], [3.3, -0.9], [-0.1, 1.5], [3.3, 1.5]].map(([px, pz], i) => <Cy key={i} p={[px, 5.55, pz]} r={0.06} h={0.9} c="#c9b89a" />)}
      {[-0.6, 0.1, 0.8, 1.5, 2.2, 2.9].map((sx) => <B key={sx} p={[1.6 + (sx - 1.6), 6.02, 0.3]} s={[0.08, 0.06, 2.6]} c="#c9b89a" />)}
      <Sp p={[0.2, 5.7, -0.9]} r={0.4} c="#4faf5a" />
      <Sp p={[3.0, 5.7, 1.4]} r={0.36} c="#5cbf62" />
      {/* palm by the entrance */}
      <Co p={[4.3, 1.3, 1.2]} r={0.75} h={0.95} c="#3f9e52" />
      <Cy p={[4.3, 0.6, 1.2]} r={0.14} h={1.4} c="#b98a58" />
    </group>
  )
}

// A soft city skyline silhouette for the start-up loft.
function Skyline({ z, c }: { z: number; c: string }) {
  const towers: [number, number, number][] = [[-11, 5, 1.6], [-8.6, 7, 1.4], [-6.4, 4, 1.8], [-2, 8, 1.6], [0.6, 5.5, 1.4], [3, 9, 1.7], [6, 6, 1.5], [8.5, 7.5, 1.5], [11, 4.5, 1.7]]
  return (
    <group position={[0, 0, z]}>
      {towers.map(([x, h, w], i) => (
        <group key={i}>
          <B p={[x, h / 2, 0]} s={[w, h, 1]} c={c} />
          {Array.from({ length: Math.max(2, Math.round(h / 1.4)) }).map((_, r) => <Glow key={r} p={[x + (r % 2 ? 0.3 : -0.3), 1 + r * 1.2, 0.55]} r={0.05} c="#ffe9a0" i={0.7} />)}
        </group>
      ))}
    </group>
  )
}

function StartupDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* city skyline behind the loft */}
      <Skyline z={backZ - 4} c="#c6cbe8" />
      {/* big wall whiteboard with sticky notes */}
      <group position={[0, 2.7, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[5, 2.6, 0.1]} c="#f7f9fc" />
        <B p={[0, 0, -0.03]} s={[5.2, 2.8, 0.06]} c="#c7ccd6" />
        {[['#ffe08a', -1.7, 0.6], ['#a7d8ff', -1.2, 0.2], ['#ffb3c7', -1.6, -0.3], ['#b9f0c0', 1.5, 0.5], ['#ffd0a0', 1.1, 0.0], ['#d9c2ff', 1.7, -0.4]].map(([c, x, y], i) => (
          <B key={i} p={[x as number, y as number, 0.06]} s={[0.5, 0.4, 0.02]} c={c as string} rot={[0, 0, (i % 2 ? 0.06 : -0.05)]} />
        ))}
        <B p={[0, 1.5, 0]} s={[0.8, 0.09, 0.16]} c={P.accent} />
      </group>
      {/* neon bar sign on a side wall */}
      <group position={[-9.2, 3.4, backZ + 4]} rotation={[0, Math.PI / 2, 0]}>
        {[[-0.5, 0.4], [-0.15, 0.7], [0.2, 1.0], [0.55, 0.55]].map(([x, h], i) => (
          <B key={i} p={[x as number, (h as number) / 2, 0]} s={[0.16, h as number, 0.08]} c={P.accent} emissive={P.accent} ei={0.9} />
        ))}
      </group>
      <LoftPlant x={-8.4} z={backZ + 1.9} />
      <LoftPlant x={8.4} z={backZ + 1.9} />
      {/* beanbags near the front */}
      <mesh position={[-7.6, 0.35, 3]} castShadow scale={[1, 0.7, 1]}><sphereGeometry args={[0.7, 18, 14]} /><meshStandardMaterial color={P.accent} {...M} /></mesh>
      <mesh position={[7.7, 0.32, 3.2]} castShadow scale={[1, 0.7, 1]}><sphereGeometry args={[0.62, 18, 14]} /><meshStandardMaterial color="#ff9db1" {...M} /></mesh>
      {/* stacked moving boxes */}
      <group position={[8.2, 0, -0.5]}>
        <B p={[0, 0.35, 0]} s={[0.7, 0.7, 0.7]} c="#c79a6a" />
        <B p={[0.1, 1.0, 0.1]} s={[0.6, 0.6, 0.6]} c="#b98a58" />
        <B p={[-0.4, 0.35, 0.5]} s={[0.6, 0.7, 0.6]} c="#c79a6a" />
      </group>
      {/* accent area rug under the team */}
      <mesh position={[0, 0.02, 1.2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[13, 8]} />
        <meshStandardMaterial color={P.accent} roughness={0.95} transparent opacity={0.16} />
      </mesh>
      {/* lounge couch + coffee table on the front-left */}
      <group position={[-8, 0, 5.4]} rotation={[0, 0.5, 0]}>
        <B p={[0, 0.32, 0]} s={[2.2, 0.4, 0.9]} c="#6b74a8" />
        <B p={[0, 0.7, -0.42]} s={[2.2, 0.7, 0.16]} c="#7c86bd" />
        <B p={[-1.02, 0.62, 0]} s={[0.18, 0.5, 0.9]} c="#7c86bd" />
        <B p={[1.02, 0.62, 0]} s={[0.18, 0.5, 0.9]} c="#7c86bd" />
      </group>
      {/* water cooler */}
      <group position={[8.6, 0, 5]}>
        <B p={[0, 0.55, 0]} s={[0.5, 1.1, 0.5]} c="#eef2f6" />
        <Sp p={[0, 1.35, 0]} r={0.34} c="#8fd0ff" emissive="#8fd0ff" ei={0.15} />
      </group>
      {/* pennant string across the room */}
      {[-4, -3.2, -2.4, -1.6, -0.8, 0, 0.8, 1.6, 2.4, 3.2, 4].map((x, i) => (
        <mesh key={x} position={[x, ROOM.wallH - 1.5 + Math.abs(x) * 0.02, 4.6]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.16, 0.3, 3]} />
          <meshStandardMaterial color={['#ff7eb6', '#ffd23f', '#4fc3f7', '#7bd88f', '#c98cff'][i % 5]} {...M} />
        </mesh>
      ))}
      <LoftPlant x={2.4} z={5.6} />
    </group>
  )
}
function LoftPlant({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.35, 0]} r={0.32} h={0.7} c="#e7ded0" />
      {[[0, 1.3, 0, 0], [0.3, 1.15, 0.1, 0.5], [-0.3, 1.2, -0.1, -0.5], [0.15, 1.5, -0.2, 0.2]].map(([lx, ly, lz, rz], i) => (
        <mesh key={i} position={[lx as number, ly as number, lz as number]} rotation={[0.2, 0, rz as number]} scale={[0.5, 1.3, 0.1]} castShadow>
          <sphereGeometry args={[0.4, 12, 10]} /><meshStandardMaterial color={i % 2 ? '#4f9e52' : '#63bf66'} {...M} />
        </mesh>
      ))}
    </group>
  )
}

// --- Space Station: porthole planet, consoles, floor light strips, antenna ---
function SpaceDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* a Stargate looming in the deep background */}
      <group position={[0, 4.4, backZ - 6]}>
        {/* outer naquadah ring */}
        <mesh castShadow><torusGeometry args={[3.4, 0.55, 16, 48]} /><meshStandardMaterial color="#6b6f7a" metalness={0.7} roughness={0.35} /></mesh>
        <mesh><torusGeometry args={[3.0, 0.18, 12, 48]} /><meshStandardMaterial color="#4a4e58" metalness={0.6} roughness={0.4} /></mesh>
        {/* rippling event horizon */}
        <mesh position={[0, 0, -0.1]}><circleGeometry args={[2.85, 48]} /><meshStandardMaterial color="#2fb6e6" emissive="#39c6f0" emissiveIntensity={0.8} transparent opacity={0.9} /></mesh>
        <mesh position={[0, 0, 0]}><ringGeometry args={[1.6, 2.0, 48]} /><meshBasicMaterial color="#bfeeff" transparent opacity={0.4} side={2} /></mesh>
        {/* 9 chevrons; the top one locked (orange) */}
        {Array.from({ length: 9 }).map((_, i) => {
          const a = (i / 9) * Math.PI * 2 + Math.PI / 2
          const lit = i === 0
          return (
            <group key={i} position={[Math.cos(a) * 3.4, Math.sin(a) * 3.4, 0.2]} rotation={[0, 0, a - Math.PI / 2]}>
              <mesh><coneGeometry args={[0.34, 0.5, 3]} /><meshStandardMaterial color={lit ? '#ff7a1e' : '#8a2a12'} emissive={lit ? '#ff8a2e' : '#000'} emissiveIntensity={lit ? 0.9 : 0} metalness={0.5} roughness={0.4} /></mesh>
            </group>
          )
        })}
      </group>
      {/* Saturn in the background, with tilted rings */}
      <group position={[-8.5, 4.4, backZ - 2.5]} rotation={[0, 0, 0.4]}>
        <Sp p={[0, 0, 0]} r={2.0} c="#d9b877" emissive="#8a6f3a" ei={0.3} />
        <mesh position={[0, 0, 0]} scale={[1, 1, 0.18]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[3.0, 0.45, 2, 64]} /><meshStandardMaterial color="#cdb48a" emissive="#8a7550" emissiveIntensity={0.25} transparent opacity={0.92} side={2} /></mesh>
        <mesh position={[0, 0, 0]} scale={[1, 1, 0.18]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[3.7, 0.16, 2, 64]} /><meshStandardMaterial color="#b8a074" emissive="#7a663f" emissiveIntensity={0.25} transparent opacity={0.75} side={2} /></mesh>
      </group>
      {/* the Moon on the other side, cratered */}
      <group position={[8.5, 5, backZ - 2]}>
        <Sp p={[0, 0, 0]} r={1.35} c="#c9ccd6" emissive="#6a6f7b" ei={0.25} />
        {[[-0.45, 0.35, 0.28], [0.45, -0.2, 0.32], [0.1, 0.55, 0.2], [-0.25, -0.45, 0.25], [0.55, 0.35, 0.18]].map(([cx, cy, r], i) => (
          <mesh key={i} position={[cx as number, cy as number, 1.2]}><circleGeometry args={[r as number, 16]} /><meshBasicMaterial color="#9aa0ad" /></mesh>
        ))}
      </group>
      {/* porthole with a planet */}
      <group position={[0, 3, backZ + 0.35]}>
        <mesh><torusGeometry args={[1.7, 0.22, 16, 40]} /><meshStandardMaterial color="#3a4890" metalness={0.6} roughness={0.3} /></mesh>
        <mesh position={[0, 0, -0.05]}><circleGeometry args={[1.6, 40]} /><meshBasicMaterial color="#05070f" /></mesh>
        <Sp p={[0.4, -0.2, 0.1]} r={0.9} c="#3d7bd6" emissive="#1b3f7a" ei={0.4} />
        <mesh position={[0.4, -0.2, 0.2]} scale={[1, 0.4, 1]}><sphereGeometry args={[0.92, 20, 8]} /><meshStandardMaterial color="#6fae6a" transparent opacity={0.5} /></mesh>
        {[[-1, 0.9], [1.1, 0.6], [-0.7, -1.1], [0.9, 1.1]].map(([x, y], i) => <Glow key={i} p={[x as number, y as number, 0.1]} r={0.03} c="#eaf6ff" i={1} />)}
      </group>
      {/* starfield across the back wall */}
      {[[-8, 4.6], [-6.4, 5.2], [-5.2, 3.8], [-3.4, 5], [6.2, 4.4], [7.6, 5.1], [5, 3.9], [3.6, 5.2], [-8.6, 2.4], [8.4, 2.8], [-2, 5.4], [2, 5.3]].map(([x, y], i) => (
        <Glow key={i} p={[x as number, y as number, backZ + 0.5]} r={0.04 + (i % 3) * 0.015} c="#eaf6ff" i={0.9} />
      ))}
      {/* control consoles along the back */}
      {[-6, 6].map((cx) => (
        <group key={cx} position={[cx, 0, backZ + 1.4]}>
          <B p={[0, 0.55, 0]} s={[2.4, 1.1, 0.5]} c="#141a30" />
          <B p={[0, 1.05, 0.2]} s={[2.2, 0.5, 0.15]} c="#0c1024" rot={[-0.5, 0, 0]} />
          {[-0.7, -0.2, 0.3, 0.8].map((dx, i) => <Glow key={i} p={[dx, 1.12, 0.34]} r={0.05} c={i % 2 ? P.accent : '#37d67a'} i={1} />)}
        </group>
      ))}
      {/* floor light strips running forward */}
      {[-2.4, 2.4].map((x) => <Strip key={x} p={[x, 0.03, backZ + 5]} s={[0.14, 8]} c={P.accent} rot={[-Math.PI / 2, 0, 0]} i={0.8} />)}
      {/* antenna dish in a corner */}
      <group position={[-8.6, 0, backZ + 2.2]}>
        <Cy p={[0, 1.2, 0]} r={0.08} h={2.4} c="#3a3f52" />
        <mesh position={[0, 2.4, 0.2]} rotation={[-0.7, 0, 0]}><coneGeometry args={[0.6, 0.4, 24, 1, true]} /><meshStandardMaterial color="#c9d2e2" side={2} metalness={0.4} roughness={0.5} /></mesh>
        <Glow p={[0, 2.5, 0.35]} r={0.05} c={P.accent} i={1} />
      </group>
    </group>
  )
}

// --- Science Lab: glassware bench, DNA helix, fume hood, periodic panel -------
function LabDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* reagent shelves on the side walls */}
      {[-9, 9].map((sx, si) => [1.6, 2.6].map((sy) => (
        <group key={`${sx}-${sy}`} position={[sx, sy, 1]} rotation={[0, si ? -Math.PI / 2 : Math.PI / 2, 0]}>
          <B p={[0, 0, 0]} s={[5, 0.08, 0.4]} c="#dfeaee" />
          {[-1.8, -1.1, -0.4, 0.4, 1.1, 1.8].map((bx, i) => (
            <group key={bx} position={[bx, 0.28, 0]}>
              <Cy p={[0, 0, 0]} r={0.11} h={0.46} c="#e6f3f6" />
              <Cy p={[0, -0.06, 0]} r={0.1} h={0.28} c={['#00e6ff', '#37d67a', '#ffcf3b', '#ff5aa0', '#8a5cff', '#ff8a1e'][i]} emissive={['#00e6ff', '#37d67a', '#ffcf3b', '#ff5aa0', '#8a5cff', '#ff8a1e'][i]} ei={0.4} />
            </group>
          ))}
        </group>
      )))}
      {/* bubbles rising above the back flasks */}
      {[1.0, 1.7].map((x) => [0.7, 1.0, 1.3].map((y, k) => (
        <Sp key={`${x}-${y}`} p={[x + (k % 2 ? 0.05 : -0.05), y, backZ + 1.5]} r={0.05 - k * 0.008} c="#bff0ff" emissive="#bff0ff" ei={0.5} />
      )))}
      {/* glassware bench along back */}
      <group position={[0, 0, backZ + 1.5]}>
        <B p={[0, 0.95, 0]} s={[6, 0.12, 0.9]} c="#dfeaee" />
        {[-2.2, -1.6, -1.0].map((x, i) => (
          <group key={x} position={[x, 1.0, 0]}>
            <Cy p={[0, 0.28, 0]} r={0.14} h={0.56} c="#cfeef2" />
            <Cy p={[0, 0.18, 0]} r={0.13} h={0.3} c={[P.accent, '#37d67a', '#ffcf3b'][i]} emissive={[P.accent, '#37d67a', '#ffcf3b'][i]} ei={0.5} />
          </group>
        ))}
        {[1.0, 1.7].map((x, i) => (
          <group key={x} position={[x, 1.0, 0]}>
            <Co p={[0, 0.34, 0]} r={0.24} h={0.5} c="#d3f0f4" />
            <Cy p={[0, 0.1, 0]} r={0.05} h={0.16} c="#d3f0f4" />
            <Sp p={[0, 0.2, 0]} r={0.16} c={i ? '#ff5aa0' : '#8a5cff'} emissive={i ? '#ff5aa0' : '#8a5cff'} ei={0.5} />
          </group>
        ))}
        {/* microscope */}
        <group position={[2.5, 1.0, 0]}>
          <B p={[0, 0.08, 0]} s={[0.3, 0.12, 0.4]} c="#2b3145" />
          <Cy p={[0, 0.4, -0.05]} r={0.05} h={0.6} c="#3a4058" rot={[0.3, 0, 0]} />
          <Cy p={[0.05, 0.66, 0.12]} r={0.04} h={0.2} c="#20242f" rot={[0.9, 0, 0]} />
        </group>
      </group>
      {/* DNA double helix */}
      <group position={[-8.3, 0, backZ + 2.4]}>
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 0.4 + i * 0.28
          const a = i * 0.6
          return (
            <group key={i} position={[0, y, 0]}>
              <Glow p={[Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5]} r={0.09} c="#00e6ff" i={0.6} />
              <Glow p={[Math.cos(a + Math.PI) * 0.5, 0, Math.sin(a + Math.PI) * 0.5]} r={0.09} c="#ff5aa0" i={0.6} />
              {i % 2 === 0 && <B p={[0, 0, 0]} s={[1.0, 0.03, 0.03]} c="#bfe9ef" rot={[0, -a, 0]} />}
            </group>
          )
        })}
      </group>
      {/* fume hood */}
      <group position={[8.3, 0, backZ + 2]}>
        <B p={[0, 1.1, 0]} s={[1.8, 2.2, 1]} c="#eef5f7" />
        <B p={[0, 1.35, 0.5]} s={[1.5, 1.2, 0.05]} c="#bfe4ea" emissive="#8fd6e0" ei={0.25} />
        <B p={[0, 0.4, 0.5]} s={[1.6, 0.5, 0.06]} c="#dfeaee" />
      </group>
      {/* periodic-table panel */}
      <group position={[0, 2.7, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[4.4, 2.2, 0.08]} c="#f4fbfd" />
        {Array.from({ length: 3 }).map((_, r) => Array.from({ length: 9 }).map((_, c) => (
          <B key={`${r}-${c}`} p={[-1.8 + c * 0.45, 0.6 - r * 0.5, 0.05]} s={[0.38, 0.42, 0.02]} c={['#bfe4ea', '#cfe9ef', '#d9f0e0'][(r + c) % 3]} />
        )))}
      </group>
    </group>
  )
}

// A sagging string of festoon party lights, glowing bulbs strung on a catenary.
function Festoon({ x1, x2, z, y, sag = 1.3 }: { x1: number; x2: number; z: number; y: number; sag?: number }) {
  const cols = ['#ffe08a', '#ff8fa3', '#8be0ff', '#b9f0c0', '#ffc24b']
  const n = 12
  return (
    <group>
      {Array.from({ length: n }).map((_, i) => {
        const t = i / (n - 1)
        const x = x1 + (x2 - x1) * t
        const by = y - Math.sin(t * Math.PI) * sag
        return <Glow key={i} p={[x, by, z]} r={0.09} c={cols[i % cols.length]} i={0.95} />
      })}
    </group>
  )
}

// A thatched tiki bar with bamboo posts and a couple of stools.
function TikiBar({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {/* counter */}
      <B p={[0, 0.72, 0]} s={[2.6, 0.18, 0.9]} c="#8a5a34" />
      <B p={[0, 0.36, 0.36]} s={[2.6, 0.72, 0.14]} c="#a5733f" />
      {[[-1.15, -0.35], [1.15, -0.35]].map(([px, pz], i) => <Cy key={i} p={[px, 0.9, pz]} r={0.08} h={1.8} c="#b98a58" />)}
      {/* thatch roof */}
      <Co p={[0, 2.1, 0]} r={1.9} h={0.9} c="#c9a24a" />
      <Co p={[0, 1.86, 0]} r={2.0} h={0.5} c="#b8902f" open />
      {/* stools */}
      {[-0.8, 0.8].map((sx) => (
        <group key={sx} position={[sx, 0, 1.1]}>
          <Cy p={[0, 0.66, 0]} r={0.05} h={1.32} c="#7a5a3a" />
          <Cy p={[0, 1.34, 0]} r={0.24} h={0.12} c="#ff7a59" />
        </group>
      ))}
      {/* a couple of tropical drinks on the bar */}
      {[-0.5, 0.4].map((dx, i) => <Cy key={dx} p={[dx, 0.92, 0.1]} r={0.09} h={0.28} c={i ? '#ffd23f' : '#ff5d6c'} />)}
    </group>
  )
}

// A potted monstera-style plant for the villa deck.
function MonsteraPot({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.3, 0]} r={0.34} h={0.6} c="#d9cdb8" />
      <Cy p={[0, 0.62, 0]} r={0.36} h={0.08} c="#c7b89c" />
      {[[0.2, 1.1, 0], [-0.25, 0.95, 0.1], [0.05, 1.35, -0.1], [-0.1, 1.15, 0.25]].map(([lx, ly, lz], i) => (
        <mesh key={i} position={[lx as number, ly as number, lz as number]} rotation={[0.3, i, 0.2]} scale={[0.5, 0.06, 0.7]} castShadow>
          <sphereGeometry args={[0.5, 10, 8]} />
          <meshStandardMaterial color={i % 2 ? '#3f9e52' : '#57b85f'} {...M} />
        </mesh>
      ))}
    </group>
  )
}

// --- Miami Villa: pool, palms, loungers, umbrella, sunset disc ---------------
function VillaDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* tropical hills + a modern villa behind the pool */}
      <Mountains z={backZ - 7} c1="#7fb08a" c2="#95c49a" />
      <ModernVilla x={0} z={backZ - 2.5} />
      {/* sunset sun high in the sky */}
      <group position={[6, 6.5, backZ - 4]}>
        <Sp p={[0, 0, 0]} r={1.5} c="#ff9a52" emissive="#ff7a3a" ei={0.6} />
        {[1.9, 2.3, 2.7].map((r, i) => <mesh key={r} rotation={[0, 0, 0]}><torusGeometry args={[r, 0.05, 8, 40]} /><meshStandardMaterial color="#ffcaa0" emissive="#ffb07a" emissiveIntensity={0.5 - i * 0.12} transparent opacity={0.7} /></mesh>)}
      </group>
      {/* the seating pool itself is drawn in Decor3D (agents lounge in it) */}
      <PalmTree x={-9} z={backZ + 2} />
      <PalmTree x={9} z={backZ + 2.3} />
      <PalmTree x={-9.1} z={6.5} />
      <PalmTree x={9.1} z={6.5} />
      {/* festoon party lights strung between the palms across the pool */}
      <Festoon x1={-8.8} x2={8.8} z={backZ + 2.2} y={4.4} sag={1.6} />
      <Festoon x1={-8.9} x2={9} z={6.4} y={4.2} sag={1.7} />
      {/* diving board reaching out over the back of the pool */}
      <group position={[-4.6, 0, backZ + 3]}>
        <B p={[0, 0.6, 0]} s={[0.5, 0.1, 0.5]} c="#cfd6da" />
        <B p={[0, 0.72, 1.5]} s={[0.7, 0.1, 3]} c="#eef3f5" />
        <Cy p={[0, 0.36, 0.2]} r={0.05} h={0.72} c="#9aa4ab" />
      </group>
      {/* poolside tiki bar + planters */}
      <TikiBar x={-8} z={7.4} />
      <MonsteraPot x={6.2} z={7.6} />
      <MonsteraPot x={0.4} z={7.8} />
      {/* poolside sun loungers on the front deck */}
      {[-4.4, 4.4].map((x, i) => (
        <group key={x} position={[x, 0, 7.2]} rotation={[0, i ? -0.4 : 0.4, 0]}>
          <B p={[0, 0.28, 0]} s={[0.8, 0.08, 1.8]} c="#ffffff" />
          <B p={[0, 0.5, -0.7]} s={[0.8, 0.08, 0.7]} c="#ff7a59" rot={[-0.6, 0, 0]} />
          {[-0.25, 0, 0.25].map((lx) => <Cy key={lx} p={[lx, 0.12, 0.8]} r={0.04} h={0.24} c="#d8b18a" />)}
        </group>
      ))}
      {/* beach umbrella on the deck */}
      <group position={[8.4, 0, 6.4]}>
        <Cy p={[0, 1.1, 0]} r={0.05} h={2.2} c="#e7ded0" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c="#ff7a59" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c={P.accent} rot={[0, 0.4, 0]} open />
      </group>
    </group>
  )
}
function PalmTree({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {[0, 1, 2, 3].map((i) => <Cy key={i} p={[i * 0.05, 0.5 + i * 0.7, 0]} r={0.16 - i * 0.015} h={0.72} c="#b98a58" rot={[0, 0, -0.05 * i]} />)}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i / 7) * Math.PI * 2
        return <mesh key={i} position={[0.2 + Math.cos(a) * 0.1, 3.1, Math.sin(a) * 0.1]} rotation={[Math.sin(a) * 0.5, a, 0.7]} scale={[0.18, 0.04, 1.3]} castShadow><sphereGeometry args={[0.6, 8, 6]} /><meshStandardMaterial color={i % 2 ? '#3f9e52' : '#57b85f'} {...M} /></mesh>
      })}
      {[[0.25, -0.1], [-0.1, 0.2], [0.15, 0.2]].map(([cx, cz], i) => <Sp key={i} p={[cx, 2.95, cz]} r={0.13} c="#b5793f" />)}
    </group>
  )
}

// --- Castle: arched windows, banners, wall torches, throne, chandelier -------
function CastleDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const stone = '#8f959c'
  return (
    <group>
      <Mountains z={backZ - 8} c1="#7b8a9a" c2="#8fa0ad" snow />
      {/* distant castle keep towers */}
      {[-8, 8].map((x) => (
        <group key={x} position={[x, 0, backZ - 4]}>
          <B p={[0, 3, 0]} s={[2.4, 6, 2.4]} c="#9aa0ad" />
          {[-0.8, 0, 0.8].map((cx) => <B key={cx} p={[cx, 6.2, 0]} s={[0.5, 0.6, 2.4]} c="#9aa0ad" />)}
          <Co p={[0, 7, 0]} r={1.6} h={1.6} c={P.accent} />
        </group>
      ))}
      {/* red carpet runner down the central aisle */}
      <mesh position={[0, 0.03, 1.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 12]} />
        <meshStandardMaterial color="#8e2436" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.04, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 12]} />
        <meshStandardMaterial color={P.accent} roughness={0.7} transparent opacity={0.4} />
      </mesh>
      {/* iron chandeliers extra + hanging shields on side walls */}
      {[-9.2, 9.2].map((x, i) => [0, 4].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, 3, z]} rotation={[0, i ? -Math.PI / 2 : Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.5, 0.42, 0.14, 6]} />
          <meshStandardMaterial color={i ? '#6b5426' : P.accent} metalness={0.5} roughness={0.5} />
        </mesh>
      )))}
      {/* arched windows on the back wall */}
      {[-5.5, 5.5].map((x) => (
        <group key={x} position={[x, 2.6, backZ + 0.3]}>
          <B p={[0, 0, 0]} s={[1.7, 2.6, 0.1]} c="#6f757c" />
          <B p={[0, -0.1, 0.06]} s={[1.2, 2.1, 0.04]} c="#bfe0ff" emissive="#8fc4ff" ei={0.4} />
          <mesh position={[0, 1.05, 0.06]}><cylinderGeometry args={[0.6, 0.6, 0.04, 20, 1, false, 0, Math.PI]} /><meshStandardMaterial color="#bfe0ff" emissive="#8fc4ff" emissiveIntensity={0.4} /></mesh>
        </group>
      ))}
      {/* hanging banners */}
      {[-2, 2].map((x, i) => (
        <group key={x} position={[x, 2.9, backZ + 0.32]}>
          <B p={[0, 0, 0]} s={[1.1, 2.8, 0.06]} c={i ? '#7a1f4a' : '#26407a'} />
          <B p={[0, 1.5, 0]} s={[1.2, 0.14, 0.1]} c={P.accent} />
          <Sp p={[0, 0.2, 0.05]} r={0.28} c={P.accent} />
        </group>
      ))}
      {/* wall torches */}
      {[-8.7, 8.7].map((x) => [backZ + 3, 1].map((z) => (
        <group key={`${x}-${z}`} position={[x, 2.3, z]}>
          <Cy p={[0, 0, 0]} r={0.05} h={0.5} c="#3a3128" rot={[0.5, 0, 0]} />
          <Co p={[0, 0.4, 0.2]} r={0.16} h={0.5} c="#ff8a1e" emissive="#ff6a00" ei={0.9} />
          <Glow p={[0, 0.5, 0.2]} r={0.09} c="#ffd070" i={1} />
        </group>
      )))}
      {/* throne on a dais */}
      <group position={[0, 0, backZ + 2.2]}>
        <B p={[0, 0.15, 0]} s={[2.4, 0.3, 2]} c={stone} />
        <B p={[0, 0.7, -0.5]} s={[1.4, 0.14, 1.2]} c="#5a4a2b" />
        <B p={[0, 1.6, -1]} s={[1.4, 1.8, 0.16]} c="#5a4a2b" />
        {[-0.7, 0.7].map((ax) => <B key={ax} p={[ax, 1.0, -0.4]} s={[0.16, 0.8, 1.1]} c="#4a3c22" />)}
        {[-0.55, 0, 0.55].map((gx) => <Glow key={gx} p={[gx, 2.4, -1]} r={0.08} c={P.accent} i={0.7} />)}
      </group>
      {/* chandelier */}
      <group position={[0, ROOM.wallH - 0.8, 3.5]}>
        <Cy p={[0, 0.4, 0]} r={0.012} h={0.8} c="#3a3128" />
        <mesh><torusGeometry args={[0.7, 0.05, 8, 24]} /><meshStandardMaterial color={P.accent} metalness={0.5} roughness={0.4} /></mesh>
        {Array.from({ length: 6 }).map((_, i) => { const a = (i / 6) * Math.PI * 2; return <Glow key={i} p={[Math.cos(a) * 0.7, 0.1, Math.sin(a) * 0.7]} r={0.07} c="#ffd070" i={1} /> })}
      </group>
    </group>
  )
}

// --- Magical Garden: glowing trees, mushrooms, fireflies, fountain, arch -----
function GardenDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      <Mountains z={backZ - 7} c1="#7fbf6a" c2="#95cf7f" />
      <BlossomTree x={-8.5} z={2.6} c={P.accent} />
      <BlossomTree x={8.6} z={backZ + 2.4} c="#c98cff" />
      <BlossomTree x={8.8} z={5.4} c="#ffb0d8" />
      {/* lily pond on the front-left with pads + blossoms */}
      <group position={[-7.6, 0, 5.4]}>
        <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.8, 32]} /><meshStandardMaterial color="#5fb0c4" transparent opacity={0.8} roughness={0.3} emissive="#3f8f9f" emissiveIntensity={0.15} /></mesh>
        {[[0.4, 0.3], [-0.6, -0.2], [0.2, -0.7], [-0.3, 0.7]].map(([lx, lz], i) => (
          <group key={i} position={[lx as number, 0.06, lz as number]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.36, 18]} /><meshStandardMaterial color="#4f9e52" /></mesh>
            {i % 2 === 0 && <Sp p={[0, 0.08, 0]} r={0.12} c="#ff9ecb" emissive="#ff9ecb" ei={0.3} />}
          </group>
        ))}
      </group>
      {/* butterflies / fireflies drifting mid-air */}
      {[[-4.5, 2.6, 4], [4.6, 3, 3], [-1.5, 2.4, 5], [2.2, 3.2, backZ + 3], [6, 2.2, 2], [-6.5, 2.8, 0]].map(([x, y, z], i) => (
        <group key={i} position={[x as number, y as number, z as number]}>
          <Sp p={[-0.1, 0, 0]} r={0.09} c={i % 2 ? '#ff9ecb' : '#ffd6f0'} emissive="#ff9ecb" ei={0.4} />
          <Sp p={[0.1, 0, 0]} r={0.09} c={i % 2 ? '#c98cff' : '#e0c2ff'} emissive="#c98cff" ei={0.4} />
        </group>
      ))}
      {/* fountain centrepiece */}
      <group position={[0, 0, backZ + 2.6]}>
        <Cy p={[0, 0.2, 0]} r={1.3} h={0.4} c="#bfc9b0" />
        <Strip p={[0, 0.42, 0]} s={[2.2, 2.2]} c="#7fe0ff" rot={[-Math.PI / 2, 0, 0]} i={0.4} />
        <Cy p={[0, 0.7, 0]} r={0.7} h={0.5} c="#cdd7bd" />
        <Cy p={[0, 1.1, 0]} r={0.35} h={0.4} c="#cdd7bd" />
        <Glow p={[0, 1.5, 0]} r={0.18} c="#aef0ff" i={0.8} />
      </group>
      {/* glowing mushroom clusters */}
      {[[-6, 3], [6.4, 2.6], [-3.5, backZ + 1.4], [3.5, backZ + 1.4]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          {[[0, 0, 0.5], [0.35, 0.1, 0.35], [-0.3, -0.05, 0.4]].map(([mx, mz, h], k) => (
            <group key={k} position={[mx as number, 0, mz as number]}>
              <Cy p={[0, (h as number) / 2, 0]} r={0.08} h={h as number} c="#f2ead8" />
              <Co p={[0, (h as number) + 0.06, 0]} r={0.22} h={0.28} c={k % 2 ? '#ff86c0' : '#a06cff'} emissive={k % 2 ? '#ff86c0' : '#a06cff'} ei={0.7} />
            </group>
          ))}
        </group>
      ))}
      {/* flower arch over the centre-back */}
      <group position={[0, 0, backZ + 4.4]}>
        {[-2, 2].map((x) => <Cy key={x} p={[x, 1.4, 0]} r={0.1} h={2.8} c="#4f7d3a" />)}
        <mesh position={[0, 2.8, 0]} rotation={[0, 0, 0]}><torusGeometry args={[2, 0.12, 10, 24, Math.PI]} /><meshStandardMaterial color="#4f7d3a" {...M} /></mesh>
        {Array.from({ length: 9 }).map((_, i) => { const a = (i / 8) * Math.PI; return <Sp key={i} p={[Math.cos(a) * 2, 2.8 + Math.sin(a) * 2, 0]} r={0.28} c={i % 2 ? '#ff9ecb' : '#ffd0e6'} emissive="#ff9ecb" ei={0.25} /> })}
      </group>
      {/* fireflies */}
      {[[-5, 2.2, 3], [4, 3, 2], [-2, 2.6, backZ + 3], [2.5, 3.2, backZ + 2], [6, 1.8, 1], [-6.5, 2.4, -1]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.05} c="#fff3a0" i={1} />
      ))}
    </group>
  )
}
function BlossomTree({ x, z, c }: { x: number; z: number; c: string }) {
  const blossoms: [number, number, number][] = [[0, 3.1, 0], [-0.8, 2.8, 0.2], [0.8, 2.9, -0.2], [-0.5, 3.5, -0.3], [0.55, 3.5, 0.3], [0, 2.6, 0.7], [0, 2.75, -0.7]]
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 1.3, 0]} r={0.24} h={2.6} c={WOOD_D} />
      <Cy p={[-0.5, 2.3, 0.2]} r={0.1} h={1.1} c={WOOD_D} rot={[0, 0, 0.7]} />
      <Cy p={[0.55, 2.2, -0.2]} r={0.1} h={1.1} c={WOOD_D} rot={[0, 0, -0.6]} />
      {blossoms.map((p, i) => <Sp key={i} p={p} r={0.66} c={c} emissive={c} ei={0.28} />)}
    </group>
  )
}

// --- Factory: gantry, conveyor, robot arm, pipes, hazard cones, panel --------
function FactoryDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const steel = '#8f949e'
  const steelD = '#5b606b'
  return (
    <group>
      {/* industrial skyline + smoking chimneys behind */}
      <Mountains z={backZ - 8} c1="#6b7280" c2="#7c8490" />
      {[-7, 7].map((x) => (
        <group key={x} position={[x, 0, backZ - 3]}>
          <Cy p={[0, 3, 0]} r={0.7} h={6} c="#6b6068" />
          <Cy p={[0, 5.6, 0]} r={0.78} h={0.5} c="#8f2418" />
          <Sp p={[0, 6.6, 0]} r={0.9} c="#c9ccd6" />
        </group>
      ))}
      {/* hazard tape stripes on the floor edges */}
      {[-8.4, 8.4].map((x) => (
        <group key={x}>
          {Array.from({ length: 9 }).map((_, i) => (
            <mesh key={i} position={[x, 0.03, -6 + i * 1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshStandardMaterial color={i % 2 ? '#1c1c22' : '#f2c200'} />
            </mesh>
          ))}
        </group>
      ))}
      {/* stacked barrels */}
      <group position={[-8.2, 0, 5.2]}>
        {[[0, 0], [0.7, 0], [0.35, 0.7]].map(([bx, bz], i) => (
          <Cy key={i} p={[bx as number, 0.55, bz as number]} r={0.34} h={1.1} c={['#c0392b', '#f2c200', '#2e6da4'][i]} />
        ))}
        <Cy p={[0.35, 1.35, 0.35]} r={0.34} h={0.6} c="#2e6da4" />
      </group>
      {/* sparks near the robot arm */}
      {[[8.1, 1.0, backZ + 2], [8.4, 0.8, backZ + 2.2], [7.8, 1.2, backZ + 1.9]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.05} c="#ffcf3b" i={1} />
      ))}
      {/* big gear on the back wall */}
      <group position={[6.4, 3.4, backZ + 0.35]}>
        {Array.from({ length: 10 }).map((_, i) => { const a = (i / 10) * Math.PI * 2; return <B key={i} p={[Math.cos(a) * 0.9, Math.sin(a) * 0.9, 0]} s={[0.28, 0.28, 0.14]} c={steelD} rot={[0, 0, a]} /> })}
        <Cy p={[0, 0, 0]} r={0.7} h={0.16} c={steel} rot={[Math.PI / 2, 0, 0]} />
        <Cy p={[0, 0, 0.02]} r={0.24} h={0.2} c={P.trim} rot={[Math.PI / 2, 0, 0]} />
      </group>
      {/* overhead gantry */}
      <group position={[0, ROOM.wallH - 0.5, 1]}>
        {[-8, 8].map((x) => <B key={x} p={[x, 0, 0]} s={[0.3, 1.2, 0.3]} c={steelD} />)}
        <B p={[0, 0.4, 0]} s={[17, 0.24, 0.4]} c={steel} />
        <B p={[0, 0.4, -3]} s={[17, 0.24, 0.4]} c={steel} />
        {[-4, 0, 4].map((x) => <B key={x} p={[x, 0.4, -1.5]} s={[0.24, 0.2, 3]} c={steel} />)}
      </group>
      {/* conveyor belt with crates */}
      <group position={[0, 0, backZ + 3]}>
        <B p={[0, 0.5, 0]} s={[7, 0.16, 1]} c={steelD} />
        <B p={[0, 0.6, 0]} s={[6.8, 0.05, 0.9]} c="#2b2f3d" />
        {[-2.6, -0.8, 1, 2.8].map((x) => <Cy key={x} p={[x, 0.44, 0]} r={0.1} h={1} c={steel} rot={[Math.PI / 2, 0, 0]} />)}
        {[-2, 0.6, 2.4].map((x, i) => <B key={x} p={[x, 0.82, 0]} s={[0.6, 0.5, 0.6]} c={i % 2 ? '#c79a6a' : P.accent} />)}
      </group>
      {/* robot arm */}
      <group position={[8.2, 0, backZ + 2]}>
        <Cy p={[0, 0.2, 0]} r={0.4} h={0.4} c={steelD} />
        <Cy p={[0, 0.9, 0]} r={0.18} h={1.2} c={P.trim} />
        <Cy p={[0.5, 1.6, 0]} r={0.14} h={1.2} c={steel} rot={[0, 0, 1]} />
        <Cy p={[1.1, 1.2, 0]} r={0.1} h={0.8} c={steel} rot={[0, 0, 0.4]} />
        <B p={[1.4, 0.85, 0]} s={[0.2, 0.3, 0.2]} c={P.accent} emissive={P.accent} ei={0.3} />
      </group>
      {/* pipes along a side wall */}
      {[1.6, 2.0, 2.4].map((y, i) => <Cy key={y} p={[-9, y, 0]} r={0.12} h={ROOM.d - 2} c={i === 1 ? P.trim : steel} rot={[Math.PI / 2, 0, 0]} />)}
      {/* hazard cones */}
      {[[-6, 3], [-5.4, 3.3], [6, 3.2]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          <Co p={[0, 0.35, 0]} r={0.24} h={0.7} c="#ff8a1e" />
          <Cy p={[0, 0.32, 0]} r={0.18} h={0.1} c="#ffffff" />
          <B p={[0, 0.02, 0]} s={[0.5, 0.04, 0.5]} c="#ff8a1e" />
        </group>
      ))}
      {/* control panel with gauges + warning stripe */}
      <group position={[0, 2.4, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[4, 1.6, 0.16]} c={steelD} />
        <B p={[0, 0.9, 0]} s={[4.2, 0.24, 0.18]} c="#f2c200" />
        {Array.from({ length: 5 }).map((_, i) => <Glow key={i} p={[-1.4 + i * 0.7, 0.2, 0.1]} r={0.09} c={['#37d67a', '#ffcf3b', '#ff5a3a', '#37d67a', P.accent][i]} i={0.9} />)}
        {[-1.2, 0.2, 1.4].map((x) => <mesh key={x} position={[x, -0.35, 0.1]}><torusGeometry args={[0.22, 0.03, 8, 20]} /><meshStandardMaterial color="#20242f" /></mesh>)}
      </group>
    </group>
  )
}

// --- Forest Lake (Japanese): torii in a lake, pines, hills, stone lanterns ---
function Pine({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.6, 0]} r={0.2} h={1.2} c="#6b4a2a" />
      {[1.35, 2.05, 2.65].map((y, i) => <Co key={y} p={[0, y, 0]} r={1.15 - i * 0.3} h={1.05} c={i % 2 ? '#3f7d4a' : '#4f9e58'} />)}
    </group>
  )
}
function ForestDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* snowy mountains far behind + soft hills on the horizon */}
      <Mountains z={backZ - 9} c1="#8fa6ad" c2="#a3b8bd" snow />
      {[[-7, backZ - 3], [0, backZ - 4], [7, backZ - 3]].map(([x, z], i) => (
        <mesh key={i} position={[x as number, 0, z as number]} scale={[1, 0.7, 1]}><coneGeometry args={[6, 6, 20]} /><meshStandardMaterial color={i === 1 ? '#8fae9a' : '#a3c4a8'} roughness={1} /></mesh>
      ))}
      {/* the lake */}
      <mesh position={[0, 0.05, backZ + 1.5]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[24, 9]} /><meshStandardMaterial color="#4f8fb0" transparent opacity={0.9} roughness={0.15} emissive="#2f6f90" emissiveIntensity={0.18} /></mesh>
      {/* a great red torii standing in the water */}
      <group position={[0, 0, backZ + 2]}>
        {[-1.7, 1.7].map((x) => <Cy key={x} p={[x, 1.55, 0]} r={0.17} h={3.1} c="#c0392b" />)}
        <B p={[0, 3.2, 0]} s={[4.8, 0.32, 0.34]} c="#a02a1c" />
        <B p={[0, 3.4, 0]} s={[5.2, 0.18, 0.24]} c="#8f2418" />
        <B p={[0, 2.65, 0]} s={[3.9, 0.24, 0.26]} c="#c0392b" />
      </group>
      <Pine x={-9} z={backZ + 3} />
      <Pine x={9} z={backZ + 3} />
      <Pine x={-8.6} z={4.5} />
      <Pine x={8.8} z={4.6} />
      <StoneLantern x={-6} z={5.4} />
      <StoneLantern x={6} z={5.4} />
      {/* lily pads + a couple of glowing floating lanterns on the lake */}
      {[[-3.5, backZ + 1], [3.5, backZ + 2], [-1, backZ + 0.5], [1.5, backZ + 2.5]].map(([x, z], i) => (
        <mesh key={i} position={[x as number, 0.1, z as number]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.42, 16]} /><meshStandardMaterial color="#3f9e6a" /></mesh>
      ))}
      {[[-4.5, backZ + 2.5], [4.5, backZ + 1]].map(([x, z], i) => <Glow key={i} p={[x as number, 0.35, z as number]} r={0.16} c={P.accent} i={0.8} />)}
    </group>
  )
}

// --- Wonderland: giant rainbow, floating clouds, lollipops, stars ------------
function Cloud({ x, y, z, s = 1 }: { x: number; y: number; z: number; s?: number }) {
  // overlapping puffs with a flat-ish base so it reads as a real fluffy cloud
  const puffs = [[0, 0, 1.0], [0.85, 0.05, 0.68], [-0.85, 0.05, 0.68], [0.45, 0.28, 0.62], [-0.45, 0.28, 0.62], [0, 0.34, 0.66], [1.5, -0.02, 0.5], [-1.5, -0.02, 0.5]]
  return (
    <group position={[x, y, z]} scale={s}>
      {puffs.map(([dx, dy, r], i) => (
        <mesh key={i} position={[dx as number, dy as number, 0]} castShadow>
          <sphereGeometry args={[r as number, 20, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#eef4ff" emissiveIntensity={0.2} roughness={1} />
        </mesh>
      ))}
    </group>
  )
}
function WonderlandDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const rainbow = ['#ff5d6c', '#ff9a52', '#ffd23f', '#7bd88f', '#4fc3f7', '#c98cff']
  return (
    <group>
      {/* pastel candy hills far behind */}
      <Mountains z={backZ - 7} c1="#ffb0d8" c2="#c9b0ff" />
      {/* a giant rainbow arch over the back */}
      <group position={[0, 0, backZ]}>
        {rainbow.map((c, i) => (
          <mesh key={c}><torusGeometry args={[8 - i * 0.55, 0.28, 12, 48, Math.PI]} /><meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.3} roughness={0.6} /></mesh>
        ))}
      </group>
      {/* fluffy floating clouds */}
      <Cloud x={-8} y={4.5} z={backZ + 2} s={1.2} />
      <Cloud x={8} y={5.2} z={backZ + 1} />
      <Cloud x={-5.5} y={6.4} z={2} s={0.8} />
      <Cloud x={6} y={5.6} z={3} s={0.9} />
      <Cloud x={0} y={7.2} z={backZ + 1} s={1.1} />
      {/* giant lollipops */}
      {[[-9.2, 5], [9.2, 4.6]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          <Cy p={[0, 1.6, 0]} r={0.09} h={3.2} c="#ffffff" />
          <mesh position={[0, 3.3, 0]}><torusGeometry args={[0.55, 0.18, 14, 28]} /><meshStandardMaterial color={rainbow[i * 3]} emissive={rainbow[i * 3]} emissiveIntensity={0.3} /></mesh>
          <mesh position={[0, 3.3, 0.02]}><circleGeometry args={[0.42, 24]} /><meshStandardMaterial color={rainbow[i * 3 + 2]} emissive={rainbow[i * 3 + 2]} emissiveIntensity={0.2} /></mesh>
        </group>
      ))}
      {/* twinkling stars + floating hearts */}
      {[[-6, 3, 4], [5, 4, 3], [-2, 5, backZ + 3], [3, 3.5, 5], [7, 3, 1], [-7, 2.5, 1]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.09} c={rainbow[i % 6]} i={1} />
      ))}
      {/* candy-cane pillars flanking the scene */}
      {[-9.4, 9.4].map((x) => (
        <group key={x} position={[x, 0, backZ + 4]}>
          <Cy p={[0, 1.6, 0]} r={0.2} h={3.2} c="#ffffff" />
          {[0.4, 1.0, 1.6, 2.2, 2.8].map((y) => <Cy key={y} p={[0, y, 0]} r={0.205} h={0.22} c={P.accent} rot={[0, 0, 0.5]} />)}
        </group>
      ))}
    </group>
  )
}

// --- The Backrooms: endless yellow rooms, buzzing fluorescents, damp carpet ---
function BackroomsDecor({ backZ }: { backZ: number }) {
  const halfW = ROOM.w / 2
  const tex = backroomsWallpaper()
  const doorH = ROOM.wallH - 2 // corridor height (matches the doorway lintel)
  const CW = 3 // corridor half-width (doorway is 6 wide)
  const LEN = 34 // how far the corridor recedes before the fog swallows it
  const start = backZ // corridor mouth = the room's back wall
  // fluorescent fixtures receding down the hallway (some flicker-dead), the
  // fog (yellow) dissolves the far ones into an endless perspective
  const lights = Array.from({ length: 9 }).map((_, i) => start - 1.5 - i * 3.8)
  return (
    <group>
      {/* no ceiling over the room · a couple of fixtures hang in the open space */}
      {[[-4, 3], [5, -3]].map(([x, z], i) => (
        <group key={i} position={[x as number, ROOM.wallH - 0.5, z as number]}>
          <Cy p={[0, 0.35, 0]} r={0.03} h={0.7} c="#8a7f4a" />
          <B p={[0, 0, 0]} s={[2.4, 0.14, 1.0]} c="#b7ab5e" />
          <mesh position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[2.1, 0.82]} /><meshStandardMaterial color={i ? '#7a7248' : '#fff8d8'} emissive={i ? '#3a3722' : '#fff2b0'} emissiveIntensity={i ? 0.05 : 1.15} side={2} /></mesh>
        </group>
      ))}

      {/* ===== the infinite corridor beyond the doorway ===== */}
      <group>
        {/* corridor floor (damp carpet) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, start - LEN / 2]} receiveShadow><planeGeometry args={[CW * 2, LEN]} /><meshStandardMaterial color="#9a8a3c" roughness={1} /></mesh>
        {/* corridor side walls (papered) */}
        {[-CW, CW].map((x) => (
          <mesh key={x} position={[x, doorH / 2, start - LEN / 2]} receiveShadow><boxGeometry args={[0.3, doorH, LEN]} /><meshStandardMaterial color="#e8dca0" map={tex} roughness={1} /></mesh>
        ))}
        {/* no corridor ceiling · the receding fixtures hang in the open above */}
        {/* receding fluorescent panels */}
        {lights.map((z, i) => {
          const dead = i === 3 || i === 6
          return (
            <group key={i} position={[0, doorH - 0.08, z]}>
              <B p={[0, 0.06, 0]} s={[2.2, 0.1, 1.1]} c="#b7ab5e" />
              <mesh position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[1.9, 0.9]} /><meshStandardMaterial color={dead ? '#7a7248' : '#fff8d8'} emissive={dead ? '#2f2c1a' : '#fff2b0'} emissiveIntensity={dead ? 0.04 : 1.2} side={2} /></mesh>
            </group>
          )
        })}
        {/* doorways punched along the corridor walls into yet more yellow rooms */}
        {[start - 6, start - 15, start - 24].map((z, i) => (
          <mesh key={i} position={[(i % 2 ? 1 : -1) * (CW - 0.02), doorH / 2 - 0.5, z]}><boxGeometry args={[0.06, doorH - 1, 2.2]} /><meshStandardMaterial color="#14120a" /></mesh>
        ))}
      </group>

      {/* wall power outlets */}
      {[[-halfW + 0.24, 0.7, -2], [-halfW + 0.24, 0.7, 3], [halfW - 0.24, 0.7, 0]].map(([x, y, z], i) => (
        <group key={i} position={[x as number, y as number, z as number]}>
          <B p={[0, 0, 0]} s={[0.06, 0.32, 0.22]} c="#e8e0b8" />
          <B p={[0.02, 0.06, 0]} s={[0.02, 0.05, 0.04]} c="#3a3320" />
          <B p={[0.02, -0.06, 0]} s={[0.02, 0.05, 0.04]} c="#3a3320" />
        </group>
      ))}
      {/* moist stains on the carpet */}
      {[[3, 4], [-6, 2], [5, -4]].map(([x, z], i) => <mesh key={i} position={[x as number, 0.03, z as number]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.1 + i * 0.3, 20]} /><meshStandardMaterial color="#6f6428" transparent opacity={0.5} /></mesh>)}
      {/* an exposed pipe running along a side wall */}
      <Cy p={[halfW - 0.3, 4.4, 0]} r={0.14} h={ROOM.d - 2} c="#b3a86a" rot={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

// Dispatch to the right themed decor for a template id.
function ThemeDecor({ id, backZ, P }: { id: string; backZ: number; P: DojoPalette }) {
  switch (id) {
    case 'dojo': return <ZenGarden backZ={backZ} accent={P.accent} />
    case 'garden': return <GardenDecor backZ={backZ} P={P} />
    case 'space': return <SpaceDecor backZ={backZ} P={P} />
    case 'lab': return <LabDecor backZ={backZ} P={P} />
    case 'villa': return <VillaDecor backZ={backZ} P={P} />
    case 'castle': return <CastleDecor backZ={backZ} P={P} />
    case 'factory': return <FactoryDecor backZ={backZ} P={P} />
    case 'startup': return <StartupDecor backZ={backZ} P={P} />
    case 'forest': return <ForestDecor backZ={backZ} P={P} />
    case 'wonderland': return <WonderlandDecor backZ={backZ} P={P} />
    case 'backrooms': return <BackroomsDecor backZ={backZ} />
    default: return <PlainAccents backZ={backZ} P={P} />
  }
}

export function Decor3D({ palette, decor, enclosed, stations }: { palette: DojoPalette; decor: string; enclosed?: boolean; stations: Array<{ id: string; fn: Department; x: number; z: number }> }) {
  const P = palette
  const backZ = -ROOM.d / 2
  const halfW = ROOM.w / 2
  return (
    <group>
      {enclosed ? (
        // an enclosed room (walls) · the classic dojo, or the Backrooms
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
            <planeGeometry args={[ROOM.w, ROOM.d]} />
            <meshStandardMaterial color={P.ground} roughness={1} />
          </mesh>
          {decor !== 'backrooms' && <gridHelper args={[ROOM.w, 8, P.grid, P.grid]} position={[0, 0.02, 0]} />}
          {decor === 'backrooms' ? (
            <group>
              {/* back wall split by a central doorway that opens onto the corridor */}
              {[-6.5, 6.5].map((x) => (
                <mesh key={x} position={[x, ROOM.wallH / 2, backZ]} receiveShadow><boxGeometry args={[7, ROOM.wallH, 0.4]} /><meshStandardMaterial color="#e8dca0" map={backroomsWallpaper()} roughness={1} /></mesh>
              ))}
              <mesh position={[0, ROOM.wallH - 1, backZ]} receiveShadow><boxGeometry args={[6.2, 2, 0.4]} /><meshStandardMaterial color="#e8dca0" map={backroomsWallpaper()} roughness={1} /></mesh>
            </group>
          ) : (
            <mesh position={[0, ROOM.wallH / 2, backZ]} receiveShadow><boxGeometry args={[ROOM.w, ROOM.wallH, 0.4]} /><meshStandardMaterial color={P.wallBack} roughness={1} /></mesh>
          )}
          {decor !== 'backrooms' && <mesh position={[0, 0.2, backZ + 0.22]}><boxGeometry args={[ROOM.w, 0.4, 0.1]} /><meshStandardMaterial color={P.trim} /></mesh>}
          {[-1, 1].map((s) => (
            <mesh key={s} position={[s * halfW, ROOM.wallH / 2, 0]} receiveShadow><boxGeometry args={[0.4, ROOM.wallH, ROOM.d]} /><meshStandardMaterial color={decor === 'backrooms' ? '#e8dca0' : P.wallSide} map={decor === 'backrooms' ? backroomsWallpaper() : undefined} roughness={1} /></mesh>
          ))}
          {/* only the Zen Dojo gets shoji screens + a hanging scroll */}
          {decor === 'dojo' && (
            <group>
              {[-7.5, -3.5, 3.5, 7.5].map((x) => (
                <group key={x} position={[x, 2.4, backZ + 0.25]}>
                  <mesh><boxGeometry args={[2.6, 2.6, 0.08]} /><meshStandardMaterial color={PAPER} emissive={'#fff3d0'} emissiveIntensity={0.25} /></mesh>
                  {[-0.85, 0, 0.85].map((gx) => <mesh key={gx} position={[gx, 0, 0.06]}><boxGeometry args={[0.05, 2.6, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
                  {[-0.85, 0, 0.85].map((gy) => <mesh key={'h' + gy} position={[0, gy, 0.06]}><boxGeometry args={[2.6, 0.05, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
                </group>
              ))}
              <group position={[0, 2.1, backZ + 0.25]}>
                <mesh><boxGeometry args={[2.4, 4.0, 0.14]} /><meshStandardMaterial color={WOOD_D} /></mesh>
                <mesh position={[-0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={PAPER} /></mesh>
                <mesh position={[0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={P.accent} emissive={P.accent} emissiveIntensity={0.15} /></mesh>
              </group>
            </group>
          )}
          {[-halfW + 0.6, halfW - 0.6].map((x) => (
            <mesh key={x} position={[x, ROOM.wallH / 2, backZ + 1]} castShadow><boxGeometry args={[0.5, ROOM.wallH, 0.5]} /><meshStandardMaterial color={decor === 'dojo' ? WOOD : P.trim} roughness={0.9} /></mesh>
          ))}
        </group>
      ) : (
        // open-air floating platform · the theme decor is the backdrop
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
            <circleGeometry args={[26, 64]} />
            <meshStandardMaterial color={P.ground} roughness={1} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
            <ringGeometry args={[13.4, 26, 64]} />
            <meshStandardMaterial color={P.grid} roughness={1} transparent opacity={0.5} />
          </mesh>
          <gridHelper args={[26, 13, P.grid, P.grid]} position={[0, 0.02, 0]} />
        </group>
      )}

      <ThemeDecor id={decor} backZ={backZ} P={P} />

      {/* Villa: a pool covering the seating area · agents lounge in the water */}
      {decor === 'villa' && (
        <group>
          {/* pool coping / tiled edge */}
          <mesh position={[0, 0.16, 1]} receiveShadow><boxGeometry args={[18.4, 0.32, 10.4]} /><meshStandardMaterial color="#eaf6f4" roughness={0.7} /></mesh>
          {/* water surface */}
          <mesh position={[0, 0.5, 1]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[17.6, 9.6]} />
            <meshStandardMaterial color={P.accent} emissive={P.accent} emissiveIntensity={0.15} transparent opacity={0.78} roughness={0.25} />
          </mesh>
          {/* ripple rings on the surface */}
          {[[-5, 5], [6, 4], [-2, -2], [3.5, 5.5]].map(([x, z], i) => (
            <mesh key={i} position={[x as number, 0.52, z as number]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.5 + i * 0.1, 0.62 + i * 0.1, 30]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.35} side={2} />
            </mesh>
          ))}
          {/* floating beach balls + a drink ring */}
          <mesh position={[-6, 0.75, 5.6]} castShadow><sphereGeometry args={[0.42, 18, 16]} /><meshStandardMaterial color="#ff5d6c" {...M} /></mesh>
          <mesh position={[5.6, 0.72, 5.2]} castShadow><sphereGeometry args={[0.36, 18, 16]} /><meshStandardMaterial color="#ffd23f" {...M} /></mesh>
          <mesh position={[2, 0.6, 5.8]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.34, 0.12, 12, 24]} /><meshStandardMaterial color="#4fc3f7" {...M} /></mesh>
          {/* a pink flamingo pool float */}
          <group position={[6.6, 0.62, -1.6]} rotation={[0, -0.5, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.72, 0.26, 14, 28]} /><meshStandardMaterial color="#ff8fc0" {...M} /></mesh>
            <Cy p={[0, 0.5, 0.55]} r={0.09} h={1.0} c="#ff8fc0" rot={[0.5, 0, 0]} />
            <Sp p={[0.02, 0.98, 0.78]} r={0.2} c="#ff8fc0" />
            <Co p={[0.02, 0.96, 0.98]} r={0.07} h={0.24} c="#ffb400" rot={[Math.PI / 2, 0, 0]} />
          </group>
          {/* a yellow donut float */}
          <mesh position={[-2.4, 0.6, -1.2]} rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.6, 0.24, 14, 28]} /><meshStandardMaterial color="#ffd23f" {...M} /></mesh>
          <mesh position={[-2.4, 0.72, -1.2]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.6, 0.12, 12, 24, Math.PI * 1.3]} /><meshStandardMaterial color="#ff6fae" {...M} /></mesh>
        </group>
      )}

      {stations.map((s) => (
        <Station key={s.id} id={s.id} fn={s.fn} x={s.x} z={s.z} variant={decor} />
      ))}
    </group>
  )
}

function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
