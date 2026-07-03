import { AGENTS } from '../../data/agents'
import { POS3D, ROOM } from '../../three/layout3d'

const WOOD = '#b5793f'
const WOOD_D = '#7a4a24'
const PAPER = '#fff7e6'
const TATAMI = '#bcd189'

function Desk({ x, z }: { x: number; z: number }) {
  // desk sits just behind the agent (smaller z)
  const dz = z - 1.25
  return (
    <group position={[x, 0, dz]}>
      <mesh position={[0, 0.82, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.9, 0.12, 0.8]} />
        <meshStandardMaterial color={WOOD} roughness={0.8} />
      </mesh>
      {[[-0.85, -0.32], [0.85, -0.32], [-0.85, 0.32], [0.85, 0.32]].map(([lx, lz], i) => (
        <mesh key={i} position={[lx, 0.4, lz]} castShadow>
          <boxGeometry args={[0.12, 0.8, 0.12]} />
          <meshStandardMaterial color={WOOD_D} roughness={0.9} />
        </mesh>
      ))}
      {/* monitor */}
      <mesh position={[-0.5, 1.15, -0.1]} castShadow>
        <boxGeometry args={[0.5, 0.34, 0.06]} />
        <meshStandardMaterial color={'#2b2f3d'} />
      </mesh>
      <mesh position={[-0.5, 1.15, -0.07]}>
        <boxGeometry args={[0.42, 0.26, 0.02]} />
        <meshStandardMaterial color={'#63d0ff'} emissive={'#2a7fa8'} emissiveIntensity={0.4} />
      </mesh>
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

export function Decor3D() {
  const halfW = ROOM.w / 2
  const backZ = -ROOM.d / 2
  return (
    <group>
      {/* floor (tatami) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[ROOM.w, ROOM.d]} />
        <meshStandardMaterial color={TATAMI} roughness={1} />
      </mesh>
      {/* tatami seams */}
      <gridHelper args={[ROOM.w, 8, '#8fae5a', '#8fae5a']} position={[0, 0.02, 0]} />

      {/* back wall */}
      <mesh position={[0, ROOM.wallH / 2, backZ]} receiveShadow>
        <boxGeometry args={[ROOM.w, ROOM.wallH, 0.4]} />
        <meshStandardMaterial color={'#ecd9b0'} roughness={1} />
      </mesh>
      {/* wall base trim */}
      <mesh position={[0, 0.2, backZ + 0.22]}>
        <boxGeometry args={[ROOM.w, 0.4, 0.1]} />
        <meshStandardMaterial color={WOOD_D} />
      </mesh>
      {/* side walls */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * halfW, ROOM.wallH / 2, 0]} receiveShadow>
          <boxGeometry args={[0.4, ROOM.wallH, ROOM.d]} />
          <meshStandardMaterial color={'#e3cfa2'} roughness={1} />
        </mesh>
      ))}

      {/* shoji panels on the back wall */}
      {[-7.5, -3.5, 3.5, 7.5].map((x) => (
        <group key={x} position={[x, 2.4, backZ + 0.25]}>
          <mesh><boxGeometry args={[2.6, 2.6, 0.08]} /><meshStandardMaterial color={PAPER} emissive={'#fff3d0'} emissiveIntensity={0.25} /></mesh>
          {[-0.85, 0, 0.85].map((gx) => <mesh key={gx} position={[gx, 0, 0.06]}><boxGeometry args={[0.05, 2.6, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
          {[-0.85, 0, 0.85].map((gy) => <mesh key={'h' + gy} position={[0, gy, 0.06]}><boxGeometry args={[2.6, 0.05, 0.03]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
        </group>
      ))}
      {/* sliding dojo door (center) */}
      <group position={[0, 2.1, backZ + 0.25]}>
        <mesh><boxGeometry args={[2.4, 4.0, 0.14]} /><meshStandardMaterial color={WOOD_D} /></mesh>
        <mesh position={[-0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={PAPER} /></mesh>
        <mesh position={[0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><meshStandardMaterial color={PAPER} /></mesh>
      </group>

      {/* wooden pillars */}
      {[-halfW + 0.6, halfW - 0.6].map((x) => (
        <mesh key={x} position={[x, ROOM.wallH / 2, backZ + 1]} castShadow>
          <boxGeometry args={[0.5, ROOM.wallH, 0.5]} />
          <meshStandardMaterial color={WOOD} roughness={0.9} />
        </mesh>
      ))}

      {/* hanging lanterns */}
      <Lantern x={-4} z={backZ + 1.5} />
      <Lantern x={4} z={backZ + 1.5} />

      {/* low table + cushions (front centre) */}
      <group position={[0, 0, 3.2]}>
        <mesh position={[0, 0.45, 0]} castShadow receiveShadow><boxGeometry args={[2.2, 0.12, 1.1]} /><meshStandardMaterial color={WOOD} roughness={0.8} /></mesh>
        {[[-0.9, -0.4], [0.9, -0.4], [-0.9, 0.4], [0.9, 0.4]].map(([lx, lz], i) => (
          <mesh key={i} position={[lx, 0.2, lz]}><boxGeometry args={[0.12, 0.4, 0.12]} /><meshStandardMaterial color={WOOD_D} /></mesh>
        ))}
        <mesh position={[-1.6, 0.12, 0]} castShadow><boxGeometry args={[0.9, 0.22, 0.9]} /><meshStandardMaterial color={'#5b6fb0'} /></mesh>
        <mesh position={[1.6, 0.12, 0]} castShadow><boxGeometry args={[0.9, 0.22, 0.9]} /><meshStandardMaterial color={'#e05a6a'} /></mesh>
      </group>

      {/* taiko drum */}
      <group position={[7.5, 0, 4]}>
        <mesh position={[0, 0.9, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.7, 0.7, 0.9, 24]} />
          <meshStandardMaterial color={'#c0392b'} roughness={0.7} />
        </mesh>
        <mesh position={[0.46, 0.9, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.72, 0.72, 0.02, 24]} /><meshStandardMaterial color={'#fff2df'} /></mesh>
        <mesh position={[-0.46, 0.9, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.72, 0.72, 0.02, 24]} /><meshStandardMaterial color={'#fff2df'} /></mesh>
        {[-0.5, 0.5].map((s) => <mesh key={s} position={[s * 0.5, 0.35, 0]} rotation={[0, 0, s * 0.3]}><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color={WOOD_D} /></mesh>)}
      </group>

      {/* bonsai */}
      <group position={[-7.6, 0, 4]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[0.7, 0.5, 0.7]} /><meshStandardMaterial color={'#c17a4a'} /></mesh>
        <mesh position={[0, 0.75, 0]}><cylinderGeometry args={[0.06, 0.08, 0.5, 8]} /><meshStandardMaterial color={WOOD_D} /></mesh>
        <mesh position={[0, 1.1, 0]} castShadow><sphereGeometry args={[0.45, 14, 12]} /><meshStandardMaterial color={'#6cbf6c'} /></mesh>
        <mesh position={[-0.4, 0.95, 0]}><sphereGeometry args={[0.28, 12, 10]} /><meshStandardMaterial color={'#5faf5f'} /></mesh>
      </group>

      {/* desks per agent */}
      {AGENTS.map((a) => {
        const [x, z] = POS3D[a.id]
        return <Desk key={a.id} x={x} z={z} />
      })}
    </group>
  )
}
