import { AGENTS } from '../../data/agents'
import { POS3D, ROOM, DESK_FWD } from '../../three/layout3d'
import type { DojoPalette, DecorStyle } from '../../data/templates'

const WOOD = '#b5793f'
const WOOD_D = '#7a4a24'
const PAPER = '#fff7e6'
const M = { roughness: 0.75, metalness: 0.06 }

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

/** Job-specific 3D prop, placed on/beside each agent's desk. */
function JobProp({ id, dz }: { id: string; dz: number }) {
  switch (id) {
    case 'ava': // CEO — trophy on desk
      return (
        <group position={[0.7, 0.96, dz - 0.1]}>
          <Cy p={[0, 0.18, 0]} r={0.11} h={0.16} c="#ffcf3b" />
          <Cy p={[0, 0.05, 0]} r={0.06} h={0.12} c="#e0a800" />
          <B p={[0, -0.02, 0]} s={[0.18, 0.06, 0.18]} c="#7a4a24" />
        </group>
      )
    case 'rex': // CTO — second monitor with code
      return (
        <group position={[0.72, 0.9, dz]}>
          <B p={[0, 0.2, 0]} s={[0.5, 0.34, 0.05]} c="#2b2f3d" />
          <B p={[0, 0.2, 0.03]} s={[0.44, 0.28, 0.02]} c="#0f2b22" emissive="#1f7a4a" ei={0.5} />
          <B p={[0, 0.0, 0]} s={[0.1, 0.06, 0.1]} c="#2b2f3d" />
        </group>
      )
    case 'otto': // DevOps — server rack beside
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
    case 'fin': // CFO — safe + coins
      return (
        <group position={[1.45, 0, dz - 0.3]}>
          <B p={[0, 0.5, 0]} s={[0.8, 1, 0.7]} c="#3a3f52" />
          <mesh position={[0, 0.55, 0.36]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.18, 0.18, 0.04, 20]} /><meshStandardMaterial color="#c9d2e2" {...M} /></mesh>
          <Cy p={[0, 1.06, 0]} r={0.14} h={0.05} c="#ffcf3b" />
          <Cy p={[0, 1.11, 0]} r={0.14} h={0.05} c="#ffd94b" />
        </group>
      )
    case 'mia': // CMO — megaphone
      return (
        <group position={[0.72, 1.0, dz]} rotation={[0, -0.5, 0.3]}>
          <mesh castShadow><coneGeometry args={[0.2, 0.36, 18, 1, true]} /><meshStandardMaterial color="#f2617a" side={2} {...M} /></mesh>
          <Cy p={[0, -0.24, 0]} r={0.07} h={0.16} c="#7a1730" />
        </group>
      )
    case 'sol': // Sales — upward chart board
      return (
        <group position={[1.4, 0.9, dz - 0.2]}>
          <B p={[0, 0.5, 0]} s={[0.9, 0.7, 0.05]} c="#f6f8fc" />
          <B p={[-0.28, 0.35, 0.04]} s={[0.12, 0.18, 0.02]} c="#63d0ff" />
          <B p={[-0.05, 0.42, 0.04]} s={[0.12, 0.32, 0.02]} c="#7bd88f" />
          <B p={[0.2, 0.52, 0.04]} s={[0.12, 0.5, 0.02]} c="#ffcf3b" />
        </group>
      )
    case 'pia': // PM — kanban board
      return (
        <group position={[1.42, 0.9, dz - 0.2]}>
          <B p={[0, 0.5, 0]} s={[0.9, 0.7, 0.05]} c="#f6f8fc" />
          {[-0.28, 0, 0.28].map((cx) => [0.6, 0.4].map((cy) => <B key={`${cx}-${cy}`} p={[cx, cy, 0.04]} s={[0.2, 0.14, 0.02]} c={cy > 0.5 ? '#ffe08a' : '#a7d8ff'} />))}
        </group>
      )
    case 'dex': // Designer — easel
      return (
        <group position={[1.5, 0, dz - 0.2]}>
          <B p={[0, 1.0, 0]} s={[0.7, 0.8, 0.05]} c="#f6f8fc" />
          <B p={[-0.12, 1.05, 0.04]} s={[0.28, 0.28, 0.02]} c="#b06cf0" />
          <B p={[0.12, 0.9, 0.04]} s={[0.24, 0.24, 0.02]} c="#63d0ff" />
          <B p={[-0.28, 0.45, 0]} s={[0.05, 0.9, 0.05]} c={WOOD_D} rot={[0, 0, 0.12]} />
          <B p={[0.28, 0.45, 0]} s={[0.05, 0.9, 0.05]} c={WOOD_D} rot={[0, 0, -0.12]} />
        </group>
      )
    case 'ada': // Data — floating bar chart
      return (
        <group position={[0.7, 1.02, dz]}>
          <B p={[-0.18, 0.12, 0]} s={[0.1, 0.24, 0.1]} c="#63d0ff" emissive="#2a7fa8" ei={0.3} />
          <B p={[0, 0.2, 0]} s={[0.1, 0.4, 0.1]} c="#7bd88f" emissive="#2f7a4a" ei={0.3} />
          <B p={[0.18, 0.3, 0]} s={[0.1, 0.6, 0.1]} c="#ffcf3b" emissive="#a87f00" ei={0.3} />
        </group>
      )
    case 'hana': // HR — potted plant + heart
      return (
        <group position={[1.4, 0, dz - 0.2]}>
          <B p={[0, 0.3, 0]} s={[0.5, 0.5, 0.5]} c="#c17a4a" />
          <Cy p={[0, 0.7, 0]} r={0.06} h={0.4} c={WOOD_D} />
          <Sp p={[0, 1.05, 0]} r={0.42} c="#6cbf6c" />
          <Sp p={[-0.3, 0.9, 0]} r={0.26} c="#5faf5f" />
        </group>
      )
    case 'sam': // Support — headset stand + ticket
      return (
        <group position={[0.72, 0.96, dz]}>
          <Cy p={[0, 0.14, 0]} r={0.03} h={0.28} c="#2b3145" />
          <mesh position={[0, 0.34, 0]} rotation={[0, 0, 0]}><torusGeometry args={[0.16, 0.03, 10, 20, Math.PI]} /><meshStandardMaterial color="#2b3145" {...M} /></mesh>
          <Sp p={[-0.16, 0.28, 0]} r={0.06} c="#5aa2f5" />
          <Sp p={[0.16, 0.28, 0]} r={0.06} c="#5aa2f5" />
        </group>
      )
    case 'lex': // Legal — scales of justice
      return (
        <group position={[0.72, 0.96, dz]}>
          <Cy p={[0, 0.28, 0]} r={0.03} h={0.56} c="#c9a94a" />
          <B p={[0, 0.54, 0]} s={[0.5, 0.03, 0.03]} c="#c9a94a" />
          <mesh position={[-0.22, 0.42, 0]}><cylinderGeometry args={[0.1, 0.02, 0.12, 12]} /><meshStandardMaterial color="#e7d18a" {...M} /></mesh>
          <mesh position={[0.22, 0.42, 0]}><cylinderGeometry args={[0.1, 0.02, 0.12, 12]} /><meshStandardMaterial color="#e7d18a" {...M} /></mesh>
        </group>
      )
    default:
      return null
  }
}

function Station({ id, x, z }: { id: string; x: number; z: number }) {
  const dz = z + DESK_FWD // desk centre (toward camera)
  return (
    <group position={[x, 0, 0]}>
      {/* office chair behind the agent */}
      <group position={[0, 0, z - 0.5]}>
        <Cy p={[0, 0.28, 0]} r={0.05} h={0.56} c="#2b2f3d" />
        <B p={[0, 0.06, 0]} s={[0.5, 0.06, 0.5]} c="#2b2f3d" />
        <B p={[0, 0.6, 0]} s={[0.64, 0.12, 0.62]} c="#4a5270" />
        <B p={[0, 1.05, -0.28]} s={[0.6, 0.85, 0.12]} c="#4a5270" />
      </group>

      {/* desk */}
      <group position={[0, 0, dz]}>
        <B p={[0, 0.9, 0]} s={[1.9, 0.1, 0.85]} c={WOOD} />
        {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => (
          <B key={i} p={[lx, 0.44, lz]} s={[0.1, 0.88, 0.1]} c={WOOD_D} />
        ))}
      </group>

      {/* laptop: palm-rest & keyboard toward the agent, lid hinged behind the
          keys with the glowing screen facing back to the agent (we see its back) */}
      <group position={[0, 0.96, z + 0.55]}>
        {/* deck / keyboard base */}
        <B p={[0, 0, 0]} s={[0.92, 0.05, 0.62]} c="#20242f" />
        <B p={[0, 0.02, 0]} s={[0.86, 0.03, 0.56]} c="#2b2f3d" />
        {[...Array(4)].map((_, r) =>
          [...Array(9)].map((_, k) => <B key={`${r}-${k}`} p={[-0.34 + k * 0.085, 0.045, -0.16 + r * 0.09]} s={[0.06, 0.02, 0.06]} c="#454b63" />),
        )}
        {/* trackpad nearest the agent */}
        <B p={[0, 0.045, -0.22]} s={[0.26, 0.012, 0.14]} c="#3a4058" />
        {/* screen light spilling onto the keyboard */}
        <mesh position={[0, 0.055, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.72, 0.42]} />
          <meshBasicMaterial color="#2a7fa8" transparent opacity={0.16} depthWrite={false} />
        </mesh>
        {/* open lid hinged behind the keys, screen face toward the agent (-z) */}
        <group position={[0, 0, 0.22]} rotation={[0.3, 0, 0]}>
          {/* case back — this is what the camera sees */}
          <B p={[0, 0.44, 0.02]} s={[0.94, 0.66, 0.04]} c="#2b2f3d" />
          {/* the actual screen, facing the agent */}
          <B p={[0, 0.44, -0.02]} s={[0.82, 0.54, 0.02]} c="#0f2233" emissive="#2a7fa8" ei={0.6} />
          {/* lit top edge + a logo on the back, so it still reads as "on" */}
          <B p={[0, 0.72, 0.02]} s={[0.9, 0.05, 0.06]} c="#63d0ff" emissive="#63d0ff" ei={0.7} />
          <mesh position={[0, 0.42, 0.042]}><circleGeometry args={[0.08, 20]} /><meshBasicMaterial color="#63d0ff" transparent opacity={0.85} /></mesh>
        </group>
      </group>

      <JobProp id={id} dz={dz} />
    </group>
  )
}

function Lantern({ x, z, c = '#e0524f' }: { x: number; z: number; c?: string }) {
  return (
    <group position={[x, ROOM.wallH - 1.2, z]}>
      <mesh><cylinderGeometry args={[0.02, 0.02, 1.2, 6]} /><meshStandardMaterial color={'#333'} /></mesh>
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.7, 18]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.24, 18]} />
        <meshStandardMaterial color={'#fff2c4'} emissive={'#ffcf6a'} emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

// A glowing accent orb on a slim post — the "plain" template corner marker.
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
// Theme-specific decor — one distinctive set per dojo template. Placed along the
// back wall and side edges (behind the desks), so each environment reads clearly
// as a start-up loft / space station / lab / villa / castle / garden / factory.
// ===========================================================================

// --- Start-up HQ: whiteboard, plants, beanbags, moving boxes, neon sign ------
function StartupDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
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
      {/* hanging pendant lights */}
      {[-3, 0, 3].map((x) => (
        <group key={x} position={[x, ROOM.wallH - 0.6, 3.5]}>
          <Cy p={[0, -0.4, 0]} r={0.012} h={0.8} c="#333" />
          <Co p={[0, -0.85, 0]} r={0.2} h={0.26} c="#2b2f3d" />
          <Glow p={[0, -0.92, 0]} r={0.08} c="#ffd98a" i={0.9} />
        </group>
      ))}
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
      {/* porthole with a planet */}
      <group position={[0, 3, backZ + 0.35]}>
        <mesh><torusGeometry args={[1.7, 0.22, 16, 40]} /><meshStandardMaterial color="#3a4890" metalness={0.6} roughness={0.3} /></mesh>
        <mesh position={[0, 0, -0.05]}><circleGeometry args={[1.6, 40]} /><meshBasicMaterial color="#05070f" /></mesh>
        <Sp p={[0.4, -0.2, 0.1]} r={0.9} c="#3d7bd6" emissive="#1b3f7a" ei={0.4} />
        <mesh position={[0.4, -0.2, 0.2]} scale={[1, 0.4, 1]}><sphereGeometry args={[0.92, 20, 8]} /><meshStandardMaterial color="#6fae6a" transparent opacity={0.5} /></mesh>
        {[[-1, 0.9], [1.1, 0.6], [-0.7, -1.1], [0.9, 1.1]].map(([x, y], i) => <Glow key={i} p={[x as number, y as number, 0.1]} r={0.03} c="#eaf6ff" i={1} />)}
      </group>
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
      {/* hanging cables */}
      {[-7, 7].map((x) => <Cy key={x} p={[x, ROOM.wallH - 1.3, backZ + 3]} r={0.03} h={2.4} c="#20263f" rot={[0.15, 0, 0.1]} />)}
    </group>
  )
}

// --- Science Lab: glassware bench, DNA helix, fume hood, periodic panel -------
function LabDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
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

// --- Miami Villa: pool, palms, loungers, umbrella, sunset disc ---------------
function VillaDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* sunset sun on the back wall */}
      <group position={[0, 3.2, backZ + 0.35]}>
        <Sp p={[0, 0, 0]} r={1.5} c="#ff9a52" emissive="#ff7a3a" ei={0.6} />
        {[1.9, 2.3, 2.7].map((r, i) => <mesh key={r} rotation={[0, 0, 0]}><torusGeometry args={[r, 0.05, 8, 40]} /><meshStandardMaterial color="#ffcaa0" emissive="#ffb07a" emissiveIntensity={0.5 - i * 0.12} transparent opacity={0.7} /></mesh>)}
      </group>
      {/* pool */}
      <group position={[0, 0, backZ + 3.2]}>
        <B p={[0, 0.03, 0]} s={[6.4, 0.06, 2.6]} c="#e9f6f4" />
        <Strip p={[0, 0.07, 0]} s={[5.8, 2]} c={P.accent} rot={[-Math.PI / 2, 0, 0]} i={0.5} />
      </group>
      <PalmTree x={-8.4} z={backZ + 2} />
      <PalmTree x={8.4} z={backZ + 2.3} />
      {/* sun loungers */}
      {[-6.5, 6.5].map((x, i) => (
        <group key={x} position={[x, 0, 3]} rotation={[0, i ? -0.4 : 0.4, 0]}>
          <B p={[0, 0.28, 0]} s={[0.8, 0.08, 1.8]} c="#ffffff" />
          <B p={[0, 0.5, -0.7]} s={[0.8, 0.08, 0.7]} c="#ff7a59" rot={[-0.6, 0, 0]} />
          {[-0.25, 0, 0.25].map((lx) => <Cy key={lx} p={[lx, 0.12, 0.8]} r={0.04} h={0.24} c="#d8b18a" />)}
        </group>
      ))}
      {/* beach umbrella */}
      <group position={[7.2, 0, 2.6]}>
        <Cy p={[0, 1.1, 0]} r={0.05} h={2.2} c="#e7ded0" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c="#ff7a59" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c="#22c7b8" rot={[0, 0.4, 0]} open />
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
      <BlossomTree x={-8.5} z={2.6} c={P.accent} />
      <BlossomTree x={8.6} z={backZ + 2.4} c="#c98cff" />
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
    default: return <PlainAccents backZ={backZ} P={P} />
  }
}

export function Decor3D({ palette, style, decor }: { palette: DojoPalette; style: DecorStyle; decor: string }) {
  const P = palette
  const zen = style === 'zen'
  const halfW = ROOM.w / 2
  const backZ = -ROOM.d / 2
  const pillarC = zen ? WOOD : P.trim
  return (
    <group>
      {/* floor + grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[ROOM.w, ROOM.d]} />
        <meshStandardMaterial color={P.ground} roughness={1} />
      </mesh>
      <gridHelper args={[ROOM.w, 8, P.grid, P.grid]} position={[0, 0.02, 0]} />

      {/* back + side walls */}
      <mesh position={[0, ROOM.wallH / 2, backZ]} receiveShadow>
        <boxGeometry args={[ROOM.w, ROOM.wallH, 0.4]} />
        <meshStandardMaterial color={P.wallBack} roughness={1} />
      </mesh>
      <mesh position={[0, 0.2, backZ + 0.22]}>
        <boxGeometry args={[ROOM.w, 0.4, 0.1]} />
        <meshStandardMaterial color={P.trim} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * halfW, ROOM.wallH / 2, 0]} receiveShadow>
          <boxGeometry args={[0.4, ROOM.wallH, ROOM.d]} />
          <meshStandardMaterial color={P.wallSide} roughness={1} />
        </mesh>
      ))}

      {/* back-wall panels: shoji grid (zen) or glowing accent screens (plain) */}
      {[-7.5, -3.5, 3.5, 7.5].map((x) =>
        zen ? (
          <group key={x} position={[x, 2.4, backZ + 0.25]}>
            <mesh><boxGeometry args={[2.6, 2.6, 0.08]} /><meshStandardMaterial color={PAPER} emissive={'#fff3d0'} emissiveIntensity={0.25} /></mesh>
            {[-0.85, 0, 0.85].map((gx) => <mesh key={gx} position={[gx, 0, 0.06]}><boxGeometry args={[0.05, 2.6, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
            {[-0.85, 0, 0.85].map((gy) => <mesh key={'h' + gy} position={[0, gy, 0.06]}><boxGeometry args={[2.6, 0.05, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
          </group>
        ) : (
          <group key={x} position={[x, 2.6, backZ + 0.25]}>
            <mesh><boxGeometry args={[2.5, 1.7, 0.08]} /><meshStandardMaterial color={P.trim} /></mesh>
            <mesh position={[0, 0, 0.06]}><boxGeometry args={[2.2, 1.4, 0.03]} /><meshStandardMaterial color={P.wallBack} emissive={P.accent} emissiveIntensity={0.5} /></mesh>
          </group>
        ),
      )}

      {/* centrepiece: hanging scroll (zen) or an accent banner (plain) */}
      <group position={[0, 2.1, backZ + 0.25]}>
        <mesh><boxGeometry args={[2.4, 4.0, 0.14]} /><meshStandardMaterial color={zen ? WOOD_D : P.trim} /></mesh>
        <mesh position={[-0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={zen ? PAPER : P.accent} emissive={zen ? '#000' : P.accent} emissiveIntensity={zen ? 0 : 0.3} /></mesh>
        <mesh position={[0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={PAPER} /></mesh>
      </group>

      {/* framing pillars */}
      {[-halfW + 0.6, halfW - 0.6].map((x) => (
        <mesh key={x} position={[x, ROOM.wallH / 2, backZ + 1]} castShadow>
          <boxGeometry args={[0.5, ROOM.wallH, 0.5]} />
          <meshStandardMaterial color={pillarC} roughness={0.9} />
        </mesh>
      ))}

      <ThemeDecor id={decor} backZ={backZ} P={P} />

      {AGENTS.map((a) => {
        const [x, z] = POS3D[a.id]
        return <Station key={a.id} id={a.id} x={x} z={z} />
      })}
    </group>
  )
}
