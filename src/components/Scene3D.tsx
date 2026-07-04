import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { AGENTS, AGENT_BY_ID } from '../data/agents'
import { CHARACTERS } from '../data/looks'
import { POS3D } from '../three/layout3d'
import { useDojo } from '../store'
import { audio } from '../audio'
import { Decor3D } from './three/Decor3D'
import { Character3D } from './three/Character3D'
import { Hero3D } from './three/Hero3D'

/** Camera rig: gentle default framing, biased LEFT so the room isn't hidden by
 *  the right-hand UI; pans to focus the selected agent. */
function CameraRig() {
  const { camera } = useThree()
  const selected = useDojo((s) => s.selectedAgent)
  const target = useRef(new THREE.Vector3(2.2, 1.2, 1))
  const camPos = useRef(new THREE.Vector3(2.2, 8.4, 14))

  useFrame((_, dt) => {
    // default: whole room framed, biased left + zoomed out so nothing sits
    // under the right-hand panel
    let tx = 3.7
    let tz = 1
    let px = 3.7
    let pz = 18.5
    let py = 10.4
    let ty = 1.2
    if (selected && POS3D[selected]) {
      const [ax, az] = POS3D[selected]
      tx = ax + 1.4
      tz = az
      ty = 2.3 // lift the look-at so the brain hovering high above stays framed
      px = ax + 1.4
      pz = az + 10.5
      py = 7.4
    }
    target.current.lerp(new THREE.Vector3(tx, ty, tz), Math.min(1, dt * 2.2))
    camPos.current.lerp(new THREE.Vector3(px, py, pz), Math.min(1, dt * 2.2))
    camera.position.copy(camPos.current)
    camera.lookAt(target.current)
  })
  return null
}

function Agents() {
  const runtime = useDojo((s) => s.runtime)
  const stats = useDojo((s) => s.stats)
  const selectedAgent = useDojo((s) => s.selectedAgent)
  const select = useDojo((s) => s.selectAgent)

  return (
    <group>
      {AGENTS.map((a) => {
        const [x, z] = POS3D[a.id]
        const rt = runtime[a.id]
        return (
          <Character3D
            key={a.id}
            id={a.id}
            character={CHARACTERS[a.id]}
            x={x}
            z={z}
            mood={rt?.mood ?? 'idle'}
            busy={!!rt?.busy}
            selected={selectedAgent === a.id}
            name={AGENT_BY_ID[a.id].name}
            level={stats[a.id]?.level ?? 1}
            onSelect={() => {
              audio.sfx('click')
              select(a.id)
            }}
          />
        )
      })}
    </group>
  )
}

export function Scene3D() {
  const deselect = useDojo((s) => s.selectAgent)
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [2.2, 8.4, 14], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true }}
      onPointerMissed={() => deselect(null)}
    >
      <color attach="background" args={['#eaf3ff']} />
      <fog attach="fog" args={['#eaf3ff', 24, 44]} />
      <hemisphereLight args={['#ffffff', '#c8d0a0', 0.7]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[6, 12, 8]}
        intensity={1.15}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
      />
      <Suspense fallback={null}>
        <Decor3D />
        <Agents />
        <Hero3D />
      </Suspense>
      <CameraRig />
    </Canvas>
  )
}
