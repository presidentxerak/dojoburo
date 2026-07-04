import { AGENTS } from '../../data/agents'
import { POS3D, ROOM, DESK_FWD } from '../../three/layout3d'

const WOOD = '#b5793f'
const WOOD_D = '#7a4a24'
const PAPER = '#fff7e6'
const TATAMI = '#bcd189'
const M = { roughness: 0.75, metalness: 0.06 }

function B({ p, s, c, rot, emissive, ei }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number]; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} rotation={rot} castShadow receiveShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Cy({ p, r, h, c, rot }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <meshStandardMaterial color={c} {...M} />
    </mesh>
  )
}
function Sp({ p, r, c }: { p: [number, number, number]; r: number; c: string }) {
  return (
    <mesh position={p} castShadow>
      <sphereGeometry args={[r, 16, 14]} />
      <meshStandardMaterial color={c} {...M} />
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

function Lantern({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, ROOM.wallH - 1.2, z]}>
      <mesh><cylinderGeometry args={[0.02, 0.02, 1.2, 6]} /><meshStandardMaterial color={'#333'} /></mesh>
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.7, 18]} />
        <meshStandardMaterial color={'#e0524f'} emissive={'#7a1d1a'} emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.24, 18]} />
        <meshStandardMaterial color={'#fff2c4'} emissive={'#ffcf6a'} emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

function CherryTree({ x, z }: { x: number; z: number }) {
  const blossoms: [number, number, number][] = [
    [0, 3.1, 0], [-0.7, 2.8, 0.2], [0.7, 2.9, -0.2], [-0.45, 3.45, -0.3], [0.5, 3.45, 0.3], [0, 2.55, 0.6], [0, 2.7, -0.6],
  ]
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 1.2, 0]} r={0.22} h={2.4} c={WOOD_D} />
      <Cy p={[-0.45, 2.2, 0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, 0.7]} />
      <Cy p={[0.5, 2.1, -0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, -0.6]} />
      {blossoms.map((p, i) => <Sp key={i} p={p} r={0.62} c={i % 2 ? '#ffc4dd' : '#ffb0d0'} />)}
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

export function Decor3D() {
  const halfW = ROOM.w / 2
  const backZ = -ROOM.d / 2
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[ROOM.w, ROOM.d]} />
        <meshStandardMaterial color={TATAMI} roughness={1} />
      </mesh>
      <gridHelper args={[ROOM.w, 8, '#8fae5a', '#8fae5a']} position={[0, 0.02, 0]} />

      <mesh position={[0, ROOM.wallH / 2, backZ]} receiveShadow>
        <boxGeometry args={[ROOM.w, ROOM.wallH, 0.4]} />
        <meshStandardMaterial color={'#ecd9b0'} roughness={1} />
      </mesh>
      <mesh position={[0, 0.2, backZ + 0.22]}>
        <boxGeometry args={[ROOM.w, 0.4, 0.1]} />
        <meshStandardMaterial color={WOOD_D} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * halfW, ROOM.wallH / 2, 0]} receiveShadow>
          <boxGeometry args={[0.4, ROOM.wallH, ROOM.d]} />
          <meshStandardMaterial color={'#e3cfa2'} roughness={1} />
        </mesh>
      ))}

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
        <mesh position={[0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={PAPER} /></mesh>
      </group>

      {[-halfW + 0.6, halfW - 0.6].map((x) => (
        <mesh key={x} position={[x, ROOM.wallH / 2, backZ + 1]} castShadow>
          <boxGeometry args={[0.5, ROOM.wallH, 0.5]} />
          <meshStandardMaterial color={WOOD} roughness={0.9} />
        </mesh>
      ))}
      <Lantern x={-4} z={backZ + 1.5} />
      <Lantern x={4} z={backZ + 1.5} />

      {/* garden corners: a cherry tree, a stone lantern and bamboo clusters */}
      <CherryTree x={-8.6} z={2.6} />
      <StoneLantern x={-8.7} z={-2.2} />
      <Bamboo x={8.7} z={-1.5} />
      <Bamboo x={8.9} z={backZ + 2.6} />

      {/* raked zen-garden stones along the back wall */}
      {[-6, -3.4, 3.4, 6].map((rx) => (
        <group key={rx} position={[rx, 0, backZ + 1.3]}>
          <Sp p={[0, 0.14, 0]} r={0.3} c="#b7b2a6" />
          <Sp p={[0.42, 0.09, 0.22]} r={0.17} c="#c9c4b8" />
        </group>
      ))}

      {/* taiko + bonsai in the back corners so the front stays clear */}
      <group position={[8, 0, backZ + 2]}>
        <mesh position={[0, 0.9, 0]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.9, 24]} /><meshStandardMaterial color={'#c0392b'} {...M} /></mesh>
        {[-0.5, 0.5].map((s) => <mesh key={s} position={[s * 0.5, 0.35, 0]} rotation={[0, 0, s * 0.3]}><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
      </group>
      <group position={[-8, 0, backZ + 2]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[0.7, 0.5, 0.7]} /><meshStandardMaterial color={'#c17a4a'} /></mesh>
        <mesh position={[0, 1.05, 0]} castShadow><sphereGeometry args={[0.45, 14, 12]} /><meshStandardMaterial color={'#6cbf6c'} /></mesh>
      </group>

      {AGENTS.map((a) => {
        const [x, z] = POS3D[a.id]
        return <Station key={a.id} id={a.id} x={x} z={z} />
      })}
    </group>
  )
}
