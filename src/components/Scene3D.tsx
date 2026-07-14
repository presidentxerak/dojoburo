import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { setAgentPositions, agentWorldPos } from '../three/layout3d'
import { skinById } from '../data/skins'
import { templateById } from '../data/templates'
import { useWorkshop, seatedAgents, type WAgent } from '../workshop'
import { useDojo } from '../store'
import { audio } from '../audio'
import { Decor3D } from './three/Decor3D'
import { Character3D } from './three/Character3D'
import { ROLE_BY_ID, canonicalRole } from '../data/roleAgents'

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
    const fov = portrait ? 60 : 42
    if (cam.fov !== fov) {
      cam.fov = fov
      cam.updateProjectionMatrix()
    }
  }, [camera, portrait])

  useFrame((_, dt) => {
    // the dojo lives in its own pane now (no right-hand overlay), so centre it
    let tx = 0
    let tz = 1
    let px = 0
    let pz = 18.5
    let py = 11.6
    let ty = 1.3
    if (portrait) {
      // close enough that agents read large + tappable, but a higher vantage so
      // you look down ONTO the room and see every agent clearly (asked for a more
      // top-down angle). The widened fov keeps the side seats in frame.
      ty = 1.35
      pz = 15.5
      py = 12.4
    }
    const sp = selected ? agentWorldPos(selected) : undefined
    if (sp) {
      const [ax, az] = sp
      tx = ax
      tz = az
      ty = 2.3 // lift the look-at so the brain hovering high above stays framed
      px = ax
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

function Agents({ seated }: { seated: Array<{ agent: WAgent; x: number; z: number }> }) {
  const runtime = useDojo((s) => s.runtime)
  const stats = useDojo((s) => s.stats)
  const selectedAgent = useDojo((s) => s.selectedAgent)
  const select = useDojo((s) => s.selectAgent)

  // publish id -> world position so the Chief + camera can follow any agent
  useEffect(() => {
    const m: Record<string, [number, number]> = {}
    for (const { agent, x, z } of seated) m[agent.id] = [x, z]
    setAgentPositions(m)
  }, [seated])

  return (
    <group>
      {seated.map(({ agent: wa, x, z }) => {
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
            title={ROLE_BY_ID[canonicalRole(wa.role)]?.title ?? ''}
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
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const tpl = templateById(dojo?.template)
  const P = tpl.palette
  // one seating layout, shared by the desks (Decor3D) and the characters (Agents)
  const seated = useMemo(() => seatedAgents(dojo ?? null), [dojo])
  const stations = useMemo(() => seated.map(({ agent, x, z }) => ({ id: agent.id, fn: agent.fn, x, z })), [seated])
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [2.2, 8.4, 14], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      onPointerMissed={() => deselect(null)}
      onCreated={({ gl, invalidate }) => {
        // Recover gracefully from a lost WebGL context (common with DevTools
        // device mode or many canvases) instead of leaving the scene black.
        const canvas = gl.domElement
        canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault() }, false)
        canvas.addEventListener('webglcontextrestored', () => { invalidate() }, false)
      }}
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
      {/* per-theme accent glow · tints the back of the room for mood */}
      <pointLight position={[0, 4.5, -4]} color={P.accent} intensity={0.7} distance={30} />
      <pointLight position={[-7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
      <pointLight position={[7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
      <Suspense fallback={null}>
        <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
        <Agents seated={seated} />
      </Suspense>
      <CameraRig />
    </Canvas>
  )
}
