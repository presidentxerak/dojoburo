import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { SEATS, setAgentPositions, agentWorldPos } from '../three/layout3d'
import { skinById } from '../data/skins'
import { templateById } from '../data/templates'
import { useWorkshop, GRID } from '../workshop'
import { useDojo } from '../store'
import { audio } from '../audio'
import { Decor3D } from './three/Decor3D'
import { Character3D } from './three/Character3D'
import { Hero3D } from './three/Hero3D'
import { Lazy3D } from './three/Lazy3D'

/** Camera rig: gentle default framing. On desktop it's biased LEFT so the room
 *  isn't hidden by the right-hand panel; on portrait/phone it's centred, widened
 *  (higher fov) and pulled back so the whole room fits without clipping. */
function CameraRig() {
  const { camera, size } = useThree()
  const selected = useDojo((s) => s.selectedAgent)
  const target = useRef(new THREE.Vector3(2.2, 1.2, 1))
  const camPos = useRef(new THREE.Vector3(2.2, 8.4, 14))
  const portrait = size.height > size.width

  // widen the field of view on narrow/portrait screens so the room fits
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera
    const fov = portrait ? 66 : 42
    if (cam.fov !== fov) {
      cam.fov = fov
      cam.updateProjectionMatrix()
    }
  }, [camera, portrait])

  useFrame((_, dt) => {
    // default (desktop): whole room framed, biased left, zoomed out
    let tx = 3.7
    let tz = 1
    let px = 3.7
    let pz = 18.5
    let py = 10.4
    let ty = 1.2
    if (portrait) {
      // centred + pulled back so agents aren't clipped at the sides
      tx = 0
      tz = 1
      ty = 1.6
      px = 0
      pz = 20
      py = 12
    }
    const sp = selected ? agentWorldPos(selected) : undefined
    if (sp) {
      const [ax, az] = sp
      tx = portrait ? ax : ax + 1.4
      tz = az
      ty = 2.3 // lift the look-at so the brain hovering high above stays framed
      px = portrait ? ax : ax + 1.4
      pz = az + (portrait ? 8.5 : 10.5)
      py = portrait ? 6.4 : 7.4
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
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))

  // the active dojo's agents, seated in grid reading order onto the desk slots
  const seated = useMemo(() => {
    const list = [...(dojo?.agents ?? [])]
      .sort((a, b) => a.gy * GRID.cols + a.gx - (b.gy * GRID.cols + b.gx))
      .slice(0, SEATS.length)
    return list.map((wa, i) => ({ wa, pos: SEATS[i] }))
  }, [dojo])

  // publish id -> world position so the Chief + camera can follow any agent
  useEffect(() => {
    const m: Record<string, [number, number]> = {}
    for (const { wa, pos } of seated) m[wa.id] = pos
    setAgentPositions(m)
  }, [seated])

  return (
    <group>
      {seated.map(({ wa, pos }) => {
        const [x, z] = pos
        const rt = runtime[wa.id]
        return (
          <Character3D
            key={wa.id}
            id={wa.id}
            character={skinById(wa.skinId)}
            x={x}
            z={z}
            mood={rt?.mood ?? 'idle'}
            busy={!!rt?.busy}
            selected={selectedAgent === wa.id}
            name={wa.name}
            level={stats[wa.id]?.level ?? 1}
            onSelect={() => {
              audio.sfx('click')
              select(wa.id)
            }}
          />
        )
      })}
    </group>
  )
}

export function Scene3D() {
  const deselect = useDojo((s) => s.selectAgent)
  const templateId = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId)?.template)
  const tpl = templateById(templateId)
  const P = tpl.palette
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [2.2, 8.4, 14], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true }}
      onPointerMissed={() => deselect(null)}
    >
      <color attach="background" args={[P.bg]} />
      <fog attach="fog" args={[P.fog, 24, 44]} />
      <hemisphereLight args={['#ffffff', P.ground, 0.7]} />
      <ambientLight intensity={0.4} />
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
      {/* per-theme accent glow — tints the back of the room for mood */}
      <pointLight position={[0, 4.5, -4]} color={P.accent} intensity={0.7} distance={30} />
      <pointLight position={[-7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
      <pointLight position={[7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
      <Suspense fallback={null}>
        <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} />
        <Agents />
        <Hero3D />
        <Lazy3D />
      </Suspense>
      <CameraRig />
    </Canvas>
  )
}
