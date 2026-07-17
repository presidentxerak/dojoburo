import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { setAgentPositions, agentWorldPos } from '../three/layout3d'
import { skinById } from '../data/skins'
import { templateById } from '../data/templates'
import { useWorkshop, dojoSeating, firstFreeCell, type WAgent } from '../workshop'
import { useDojo } from '../store'
import { audio } from '../audio'
import { Decor3D } from './three/Decor3D'
import { Character3D } from './three/Character3D'
import { ROLE_BY_ID, canonicalRole, type RoleAgent } from '../data/roleAgents'

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
    // the dojo lives in its own pane now (no right-hand overlay), so centre it.
    // Pulled in closer + a higher vantage so the characters read large and are
    // easy to tap, while still looking down ONTO the room (requested).
    let tx = 0
    let tz = 1
    let px = 0
    let pz = 14
    let py = 12.4
    let ty = 1.5
    if (portrait) {
      // even closer on phones so agents are big + tappable, from a top-down angle.
      ty = 1.55
      pz = 12.5
      py = 13
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

/** An open team slot ON the dojo floor: a dotted pad for an optional specialist
 *  (Engineering, Support, Comms, Legal…) not yet in this dojo. Click to add the
 *  agent · it takes the seat and its studio opens. */
function AddSlot3D({ role, x, z }: { role: RoleAgent; x: number; z: number }) {
  const [hover, setHover] = useState(false)
  const addRoleAgent = useWorkshop((s) => s.addRoleAgent)
  const select = useDojo((s) => s.selectAgent)
  const pushToast = useDojo((s) => s.pushToast)
  const g = useRef<THREE.Group>(null)

  useFrame((state) => {
    // gentle bob so the "+" reads as an interactive spot, not decor
    if (g.current) g.current.position.y = 0.62 + Math.sin(state.clock.elapsedTime * 1.8 + x) * 0.06
  })

  const add = () => {
    audio.sfx('click')
    const id = addRoleAgent(role.id)
    if (id) {
      pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${role.code} joined the team`, text: `${role.title} · opening its studio…` })
      select(id)
    }
  }

  return (
    <group
      position={[x, 0, z]}
      onClick={(e) => { e.stopPropagation(); add() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto' }}
    >
      {/* generous invisible tap target */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 2, 10]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {/* dotted-style floor pad */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[0.76, 0.9, 40]} />
        <meshBasicMaterial color={role.tint} transparent opacity={hover ? 0.95 : 0.5} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]}>
        <circleGeometry args={[0.76, 40]} />
        <meshBasicMaterial color={role.tint} transparent opacity={hover ? 0.22 : 0.08} />
      </mesh>
      {/* floating "+" */}
      <group ref={g}>
        <mesh castShadow><boxGeometry args={[0.5, 0.14, 0.14]} /><meshStandardMaterial color={role.tint} /></mesh>
        <mesh castShadow><boxGeometry args={[0.14, 0.5, 0.14]} /><meshStandardMaterial color={role.tint} /></mesh>
      </group>
      <Html position={[0, 1.8, 0]} center distanceFactor={11} pointerEvents="none" zIndexRange={[6, 0]} occlude={false}>
        <div className={`slot3d-tag${hover ? ' on' : ''}`} style={{ ['--ac' as string]: role.tint }}>
          <b>+ {role.code}</b>
          <span>{role.title}</span>
        </div>
      </Html>
    </group>
  )
}

/** The seated crew, draggable: press an agent and drag it to another desk to
 *  swap seats (or onto an open slot to move it to the end of the grid). A short
 *  drag threshold keeps a plain tap working as "select". The new seating is
 *  saved immediately. */
function Agents({ seated, slots }: {
  seated: Array<{ agent: WAgent; x: number; z: number }>
  slots: Array<{ role: RoleAgent; x: number; z: number }>
}) {
  const runtime = useDojo((s) => s.runtime)
  const stats = useDojo((s) => s.stats)
  const selectedAgent = useDojo((s) => s.selectedAgent)
  const select = useDojo((s) => s.selectAgent)

  const wrapRefs = useRef<Record<string, THREE.Group | null>>({})
  const ringRef = useRef<THREE.Mesh>(null)
  // ox/oz: grab offset · where on the floor the pointer grabbed relative to the
  // seat, so the agent moves WITH the cursor (a ray through the character's body
  // projects onto the floor behind its feet · uncompensated, drops land a row off)
  const drag = useRef<{ id: string; sx: number; sz: number; ox: number; oz: number; moved: boolean; target: number } | null>(null)
  const suppressClick = useRef(false)

  // publish id -> world position so the Chief + camera can follow any agent
  useEffect(() => {
    const m: Record<string, [number, number]> = {}
    for (const { agent, x, z } of seated) m[agent.id] = [x, z]
    setAgentPositions(m)
  }, [seated])

  // every seat an agent can be dropped on: the crew's desks, then the open slots
  const spots = useMemo(
    () => [...seated.map((s) => ({ x: s.x, z: s.z })), ...slots.map((s) => ({ x: s.x, z: s.z }))],
    [seated, slots],
  )

  // where the pointer ray hits the floor (y = 0)
  const floorPoint = (e: ThreeEvent<PointerEvent>): [number, number] | null => {
    const o = e.ray.origin
    const d = e.ray.direction
    if (Math.abs(d.y) < 1e-6) return null
    const t = -o.y / d.y
    if (t < 0) return null
    return [o.x + d.x * t, o.z + d.z * t]
  }

  const onDown = (id: string, sx: number, sz: number) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    ;(e.target as unknown as { setPointerCapture?: (id: number) => void }).setPointerCapture?.(e.pointerId)
    const p = floorPoint(e)
    drag.current = { id, sx, sz, ox: p ? p[0] - sx : 0, oz: p ? p[1] - sz : 0, moved: false, target: -1 }
  }

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current
    if (!d) return
    const raw = floorPoint(e)
    if (!raw) return
    const p: [number, number] = [raw[0] - d.ox, raw[1] - d.oz] // where the agent's feet land
    if (!d.moved && Math.hypot(p[0] - d.sx, p[1] - d.sz) < 0.45) return
    d.moved = true
    const g = wrapRefs.current[d.id]
    if (g) g.position.set(p[0] - d.sx, 0.06, p[1] - d.sz)
    // highlight the nearest seat the agent would land on
    let best = -1
    let bd = 2.1
    spots.forEach((s, i) => {
      const dd = Math.hypot(s.x - p[0], s.z - p[1])
      if (dd < bd) { bd = dd; best = i }
    })
    d.target = best
    const ring = ringRef.current
    if (ring) {
      ring.visible = best >= 0
      if (best >= 0) ring.position.set(spots[best].x, 0.04, spots[best].z)
    }
    document.body.style.cursor = 'grabbing'
  }

  // pointerup can land on ANY wrapper under the pointer (the dragged agent and
  // the seat occupant overlap), so the handler finalises whatever drag is in
  // flight rather than trusting which wrapper received the event.
  const onUp = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current
    if (!d) return
    drag.current = null
    if (ringRef.current) ringRef.current.visible = false
    const g = wrapRefs.current[d.id]
    if (g) g.position.set(0, 0, 0)
    if (!d.moved) return
    e.stopPropagation()
    document.body.style.cursor = 'auto'
    // a real drag happened → swallow the click that follows so it doesn't select
    suppressClick.current = true
    setTimeout(() => { suppressClick.current = false }, 150)
    if (d.target < 0) return // dropped outside the grid → snap back
    const s = useWorkshop.getState()
    const dojoNow = s.dojos.find((x) => x.id === s.activeDojoId)
    if (!dojoNow) return
    if (d.target < seated.length) {
      const targetAgent = seated[d.target].agent
      if (targetAgent.id === d.id) return
      s.moveAgent(d.id, targetAgent.gx, targetAgent.gy) // occupied → the two swap
    } else {
      const cell = firstFreeCell(dojoNow.agents) // open slot → move to a free cell
      s.moveAgent(d.id, cell.gx, cell.gy)
    }
    s.save()
    audio.sfx('click')
  }

  return (
    <group>
      {/* drop-target highlight, driven imperatively while dragging */}
      <mesh ref={ringRef} visible={false} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.86, 1.08, 40]} />
        <meshBasicMaterial color={'#59e08f'} transparent opacity={0.85} side={THREE.DoubleSide} />
      </mesh>

      {seated.map(({ agent: wa, x, z }) => {
        const rt = runtime[wa.id]
        return (
          <group
            key={wa.id}
            ref={(el) => { wrapRefs.current[wa.id] = el }}
            onPointerDown={onDown(wa.id, x, z)}
            onPointerMove={onMove}
            onPointerUp={onUp}
          >
            <Character3D
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
                if (suppressClick.current) return
                audio.sfx('click')
                select(wa.id)
              }}
            />
          </group>
        )
      })}

      {/* open slots · add the optional specialists straight from the dojo */}
      {slots.map(({ role, x, z }) => (
        <AddSlot3D key={role.id} role={role} x={x} z={z} />
      ))}
    </group>
  )
}

export function Scene3D() {
  const deselect = useDojo((s) => s.selectAgent)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const tpl = templateById(dojo?.template)
  const P = tpl.palette
  // one seating layout, shared by the desks (Decor3D), the characters and the
  // open "+ add agent" slots (Agents) so everything lines up on the dojo grid
  const { seated, slots } = useMemo(() => dojoSeating(dojo ?? null), [dojo])
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
        <Agents seated={seated} slots={slots} />
      </Suspense>
      <CameraRig />
    </Canvas>
  )
}
