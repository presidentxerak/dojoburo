// ---------------------------------------------------------------------------
// Dojo City · the full-3D isometric city that is the new front door. Each player
// Dojo (company) is a building on a lot; empty lots are plots you found a new
// Dojo on by describing it in one sentence. Tokyo-style low buildings + houses
// with wireframe ("filaire") facades, instanced pedestrians and vehicles moving
// straight down the streets, ambient fun events, and 4 discrete zoom levels with
// level-of-detail so the whole city stays cheap to render.
// ---------------------------------------------------------------------------
import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrthographicCamera, MapControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'
import { buildCity, ZOOM_LEVELS, SPAN, HALF, type BuildingSpec, type Lot } from '../../three/cityLayout'
import { useWorkshop } from '../../workshop'
import { templateById } from '../../data/templates'

const LOT_MAP_KEY = 'dojoburo.city.lots.v1'
const loadLotMap = (): Record<string, string> => {
  try { return JSON.parse(localStorage.getItem(LOT_MAP_KEY) || '{}') } catch { return {} }
}
const saveLotMap = (m: Record<string, string>) => {
  try { localStorage.setItem(LOT_MAP_KEY, JSON.stringify(m)) } catch { /* ignore */ }
}

// ---- facade texture · a dark base with a bright wireframe window grid --------
function facadeTexture(spec: BuildingSpec): THREE.CanvasTexture {
  const S = 64
  const c = document.createElement('canvas')
  c.width = S; c.height = S
  const g = c.getContext('2d')!
  g.fillStyle = `hsl(${spec.hue} ${spec.sat}% ${Math.max(14, spec.light - 30)}%)`
  g.fillRect(0, 0, S, S)
  const cols = [3, 4, 5, 4][spec.facade]
  const pad = 6
  const step = (S - pad * 2) / cols
  const lit = spec.neon ? `hsl(${spec.neonHue} 90% 68%)` : `hsl(${(spec.hue + 20) % 360} ${spec.sat + 10}% ${Math.min(88, spec.light + 26)}%)`
  const line = `hsl(${(spec.hue + 30) % 360} ${Math.min(80, spec.sat + 30)}% ${Math.min(80, spec.light + 20)}%)`
  // lit / dark windows
  for (let r = 0; r < cols; r++) {
    for (let col = 0; col < cols; col++) {
      const x = pad + col * step + 1.5
      const y = pad + r * step + 1.5
      const w = step - 3
      const h = step - 3
      // deterministic-ish window state from spec
      const on = ((r * 7 + col * 13 + spec.floors) % 5) < 2
      g.fillStyle = on ? lit : `hsl(${spec.hue} ${spec.sat}% ${Math.max(10, spec.light - 40)}%)`
      g.fillRect(x, y, w, h)
    }
  }
  // wireframe grid lines over the whole facade (the "filaire" look)
  g.strokeStyle = line
  g.lineWidth = 1
  g.globalAlpha = 0.5
  for (let k = 0; k <= cols; k++) {
    const p = pad + k * step
    g.beginPath(); g.moveTo(p, pad); g.lineTo(p, S - pad); g.stroke()
    g.beginPath(); g.moveTo(pad, p); g.lineTo(S - pad, p); g.stroke()
  }
  g.globalAlpha = 1
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.magFilter = THREE.NearestFilter
  tex.repeat.set(1, Math.max(1, Math.round(spec.floors / 2)))
  return tex
}

// ---- one Tokyo building -----------------------------------------------------
function Building({ spec, detail }: { spec: BuildingSpec; detail: boolean }) {
  const height = spec.floors * spec.floorH
  const tex = useMemo(() => facadeTexture(spec), [spec])
  const edge = `hsl(${(spec.hue + 30) % 360} 70% 72%)`
  const wallColor = `hsl(${spec.hue} ${spec.sat}% ${spec.light}%)`

  const roof = useMemo(() => {
    if (spec.roof === 'pagoda') {
      const tiers = Math.min(3, spec.floors)
      return (
        <group position={[0, height, 0]}>
          {Array.from({ length: tiers }).map((_, k) => (
            <mesh key={k} position={[0, k * 0.5, 0]} castShadow>
              <coneGeometry args={[spec.w * (0.95 - k * 0.18), 0.42, 4]} />
              <meshStandardMaterial color="#7a2530" flatShading />
            </mesh>
          ))}
        </group>
      )
    }
    if (spec.roof === 'gable' || spec.roof === 'hip') {
      return (
        <mesh position={[0, height + 0.35, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[spec.w * 0.82, 0.9, 4]} />
          <meshStandardMaterial color="#5b4636" flatShading />
        </mesh>
      )
    }
    return (
      <mesh position={[0, height + 0.06, 0]} castShadow>
        <boxGeometry args={[spec.w + 0.08, 0.12, spec.d + 0.08]} />
        <meshStandardMaterial color="#2b3038" />
      </mesh>
    )
  }, [spec, height])

  return (
    <group>
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[spec.w, height, spec.d]} />
        <meshStandardMaterial map={tex} color={wallColor} roughness={0.85} metalness={0.05} />
        <Edges threshold={15} color={edge} />
      </mesh>
      {roof}
      {/* rooftop clutter · only when close */}
      {detail && spec.roof === 'flat' && (
        <group position={[0, height + 0.12, 0]}>
          {spec.waterTank && (
            <mesh position={[spec.w * 0.25, 0.35, -spec.d * 0.2]} castShadow>
              <cylinderGeometry args={[0.28, 0.28, 0.5, 8]} />
              <meshStandardMaterial color="#8a8f98" />
            </mesh>
          )}
          {spec.rooftopGarden && (
            <mesh position={[-spec.w * 0.2, 0.06, spec.d * 0.2]}>
              <boxGeometry args={[spec.w * 0.5, 0.1, spec.d * 0.4]} />
              <meshStandardMaterial color="#3f7d3a" />
            </mesh>
          )}
          {Array.from({ length: spec.acUnits }).map((_, k) => (
            <mesh key={k} position={[(-0.3 + k * 0.3), 0.1, spec.d * 0.28]}>
              <boxGeometry args={[0.22, 0.16, 0.22]} />
              <meshStandardMaterial color="#c3c7cc" />
            </mesh>
          ))}
        </group>
      )}
      {/* neon sign on the front */}
      {spec.neon && (
        <mesh position={[0, height * 0.62, spec.d / 2 + 0.02]}>
          <planeGeometry args={[spec.w * 0.5, height * 0.16]} />
          <meshBasicMaterial color={`hsl(${spec.neonHue} 90% 62%)`} />
        </mesh>
      )}
    </group>
  )
}

// ---- instanced movers (pedestrians + vehicles) ------------------------------
interface Mover { axis: 'x' | 'z'; fixed: number; pos: number; dir: number; speed: number; y: number; s: number }

function makeMovers(kind: 'ped' | 'car', count: number): Mover[] {
  const out: Mover[] = []
  // road lines are at multiples matching cityLayout's ROAD_EVERY grid
  const lines: number[] = []
  for (let i = 0; i < 11; i++) if (i % 3 === 0) lines.push(i * 5 - HALF + 2.5)
  let n = 0
  for (const line of lines) {
    const per = Math.ceil(count / lines.length)
    for (let k = 0; k < per && n < count; k++, n++) {
      const axis: 'x' | 'z' = k % 2 === 0 ? 'x' : 'z'
      const laneOff = kind === 'car' ? (k % 2 === 0 ? 0.9 : -0.9) : (k % 2 === 0 ? 1.7 : -1.7)
      const dir = k % 2 === 0 ? 1 : -1
      out.push({
        axis,
        fixed: line + laneOff * (axis === 'x' ? 1 : 1),
        pos: (k / per) * SPAN - HALF,
        dir,
        speed: kind === 'car' ? 3.4 + (k % 3) : 1.1 + (k % 3) * 0.25,
        y: kind === 'car' ? 0.22 : 0.42,
        s: kind === 'car' ? 1 : 0.5 + (k % 3) * 0.08,
      })
    }
  }
  return out
}

function Movers({ kind, count, show }: { kind: 'ped' | 'car'; count: number; show: boolean }) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const movers = useMemo(() => makeMovers(kind, count), [kind, count])
  const dummy = useMemo(() => new THREE.Object3D(), [])
  useEffect(() => {
    const m = ref.current
    if (!m) return
    const palette = kind === 'car'
      ? ['#e6564f', '#3d7bd6', '#f0b429', '#37946e', '#e5e7eb', '#8b5cf6']
      : ['#ef7d9d', '#6ee7b7', '#fcd34d', '#93c5fd', '#c4b5fd', '#fca5a5']
    movers.forEach((_, i) => m.setColorAt(i, new THREE.Color(palette[i % palette.length])))
    if (m.instanceColor) m.instanceColor.needsUpdate = true
  }, [movers, kind])
  useFrame((_, dt) => {
    const m = ref.current
    if (!m || !show) return
    const d = Math.min(dt, 0.05)
    for (let i = 0; i < movers.length; i++) {
      const mv = movers[i]
      mv.pos += mv.dir * mv.speed * d
      if (mv.pos > HALF + 3) mv.pos = -HALF - 3
      else if (mv.pos < -HALF - 3) mv.pos = HALF + 3
      const x = mv.axis === 'x' ? mv.pos : mv.fixed
      const z = mv.axis === 'z' ? mv.pos : mv.fixed
      dummy.position.set(x, mv.y, z)
      dummy.rotation.set(0, mv.axis === 'x' ? Math.PI / 2 : 0, 0)
      dummy.scale.setScalar(mv.s)
      dummy.updateMatrix()
      m.setMatrixAt(i, dummy.matrix)
    }
    m.instanceMatrix.needsUpdate = true
  })
  if (!show) return null
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, movers.length]} castShadow>
      {kind === 'car'
        ? <boxGeometry args={[0.8, 0.5, 1.7]} />
        : <capsuleGeometry args={[0.22, 0.34, 3, 6]} />}
      <meshStandardMaterial roughness={0.6} />
    </instancedMesh>
  )
}

// ---- ambient fun events -----------------------------------------------------
function SkyEvents({ show }: { show: boolean }) {
  const blimp = useRef<THREE.Group>(null)
  const ufo = useRef<THREE.Group>(null)
  const balloon = useRef<THREE.Group>(null)
  const train = useRef<THREE.Group>(null)
  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    if (blimp.current) {
      blimp.current.position.set(((t * 1.6) % (SPAN + 20)) - HALF - 10, 16, -HALF + 6)
    }
    if (ufo.current) {
      ufo.current.position.set(HALF - 8, 13 + Math.sin(t * 0.8) * 1.5, ((t * 2.2) % (SPAN + 16)) - HALF - 8)
      ufo.current.rotation.y += dt * 1.4
    }
    if (balloon.current) {
      balloon.current.position.set(-HALF + 5, 10 + Math.sin(t * 0.5) * 0.8, ((t * 0.9) % (SPAN + 12)) - HALF - 6)
    }
    if (train.current) {
      // shinkansen sweeps along an elevated line on one avenue, periodically
      const cycle = (t % 22)
      const x = cycle < 12 ? cycle * (SPAN + 20) / 12 - HALF - 10 : -HALF - 40
      train.current.position.set(x, 2.4, HALF - 7.5)
      train.current.visible = cycle < 12
    }
  })
  if (!show) return null
  return (
    <>
      <group ref={blimp}>
        <mesh castShadow><capsuleGeometry args={[0.9, 2.4, 4, 8]} /><meshStandardMaterial color="#eef1f5" /></mesh>
        <mesh position={[0, -0.9, 0]}><boxGeometry args={[0.5, 0.3, 0.8]} /><meshStandardMaterial color="#334155" /></mesh>
      </group>
      <group ref={ufo}>
        <mesh castShadow><cylinderGeometry args={[1.1, 1.4, 0.4, 16]} /><meshStandardMaterial color="#b8c0cc" metalness={0.7} roughness={0.3} /></mesh>
        <mesh position={[0, 0.3, 0]}><sphereGeometry args={[0.6, 12, 8]} /><meshStandardMaterial color="#7dd3fc" transparent opacity={0.75} /></mesh>
        <mesh position={[0, -1.6, 0]}><coneGeometry args={[1.2, 3, 16, 1, true]} /><meshBasicMaterial color="#a7f3d0" transparent opacity={0.14} side={THREE.DoubleSide} /></mesh>
      </group>
      <group ref={balloon}>
        <mesh castShadow><sphereGeometry args={[1, 12, 12]} /><meshStandardMaterial color="#f87171" /></mesh>
        <mesh position={[0, -1.3, 0]}><boxGeometry args={[0.5, 0.4, 0.5]} /><meshStandardMaterial color="#7c4a2d" /></mesh>
      </group>
      <group ref={train}>
        {[0, 1.9, 3.8].map((o) => (
          <mesh key={o} position={[o, 0, 0]} castShadow>
            <boxGeometry args={[1.7, 0.7, 0.9]} />
            <meshStandardMaterial color={o === 0 ? '#0f5fb0' : '#e8eef5'} metalness={0.4} roughness={0.4} />
          </mesh>
        ))}
      </group>
    </>
  )
}

// ---- lots: player dojos + foundable plots -----------------------------------
function DojoBuilding({ lot, name, templateId, onEnter, showName }: { lot: Lot; name: string; templateId: string; onEnter: () => void; showName: boolean }) {
  const [hover, setHover] = useState(false)
  const tpl = templateById(templateId)
  const col = tpl.palette?.accent || '#ef7d9d'
  return (
    <group
      position={[lot.cx, 0, lot.cz]}
      onClick={(e) => { e.stopPropagation(); onEnter() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}
    >
      {/* HQ · a pagoda-topped tower in the dojo's colour */}
      <mesh position={[0, 1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 3.2, 2.6]} />
        <meshStandardMaterial color={col} roughness={0.7} />
        <Edges threshold={15} color="#ffffff" />
      </mesh>
      {[0, 1, 2].map((k) => (
        <mesh key={k} position={[0, 3.3 + k * 0.5, 0]} castShadow>
          <coneGeometry args={[1.7 - k * 0.35, 0.42, 4]} />
          <meshStandardMaterial color="#7a2530" flatShading />
        </mesh>
      ))}
      {/* torii marker */}
      <group position={[0, 0, 1.5]}>
        <mesh position={[-0.6, 0.5, 0]}><boxGeometry args={[0.12, 1, 0.12]} /><meshStandardMaterial color="#c1272d" /></mesh>
        <mesh position={[0.6, 0.5, 0]}><boxGeometry args={[0.12, 1, 0.12]} /><meshStandardMaterial color="#c1272d" /></mesh>
        <mesh position={[0, 1.05, 0]}><boxGeometry args={[1.6, 0.16, 0.16]} /><meshStandardMaterial color="#c1272d" /></mesh>
      </group>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.2, 4.2]} />
        <meshStandardMaterial color={hover ? '#fde68a' : '#3a4048'} />
      </mesh>
      {(showName || hover) && (
        <Html position={[0, 5.4, 0]} center pointerEvents="none" zIndexRange={[20, 0]}>
          <div style={nameTag}>{name}</div>
        </Html>
      )}
    </group>
  )
}

function EmptyLot({ lot, onFound, showTag }: { lot: Lot; onFound: () => void; showTag: boolean }) {
  const [hover, setHover] = useState(false)
  return (
    <group
      position={[lot.cx, 0, lot.cz]}
      onClick={(e) => { e.stopPropagation(); onFound() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}
    >
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.4, 3.4]} />
        <meshStandardMaterial color={hover ? '#a7f3d0' : '#39424a'} />
        <Edges threshold={1} color={hover ? '#34d399' : '#8b98a6'} />
      </mesh>
      {/* floating "+" plot marker */}
      <group position={[0, hover ? 1.4 : 1.1, 0]}>
        <mesh><boxGeometry args={[0.8, 0.18, 0.18]} /><meshBasicMaterial color="#34d399" /></mesh>
        <mesh><boxGeometry args={[0.18, 0.8, 0.18]} /><meshBasicMaterial color="#34d399" /></mesh>
      </group>
      {(showTag || hover) && (
        <Html position={[0, 2.2, 0]} center pointerEvents="none" zIndexRange={[20, 0]}>
          <div style={{ ...nameTag, background: '#065f46' }}>Terrain libre</div>
        </Html>
      )}
    </group>
  )
}

const nameTag: React.CSSProperties = {
  font: "700 12px 'Silkscreen', ui-monospace, monospace",
  color: '#fff', background: '#11151d', padding: '3px 8px', borderRadius: 4,
  whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
}

// ---- ground + roads ---------------------------------------------------------
function Ground() {
  const roads = useMemo(() => {
    const out: number[] = []
    for (let i = 0; i < 11; i++) if (i % 3 === 0) out.push(i * 5 - HALF + 2.5)
    return out
  }, [])
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[SPAN + 12, SPAN + 12]} />
        <meshStandardMaterial color="#2a2f36" />
      </mesh>
      {roads.map((at, k) => (
        <group key={k}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[at, 0, 0]} receiveShadow>
            <planeGeometry args={[3.2, SPAN + 12]} />
            <meshStandardMaterial color="#1b1f25" />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, at]} receiveShadow>
            <planeGeometry args={[SPAN + 12, 3.2]} />
            <meshStandardMaterial color="#1b1f25" />
          </mesh>
          {/* centre dashes */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[at, 0.003, 0]}>
            <planeGeometry args={[0.12, SPAN + 12]} />
            <meshBasicMaterial color="#f0b429" />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, at]}>
            <planeGeometry args={[SPAN + 12, 0.12]} />
            <meshBasicMaterial color="#f0b429" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// ---- camera zoom (4 discrete levels, eased) ---------------------------------
function CameraZoom({ level }: { level: number }) {
  const cam = useThree((s) => s.camera) as THREE.OrthographicCamera
  useFrame(() => {
    const target = ZOOM_LEVELS[level]
    const z = cam.zoom + (target - cam.zoom) * 0.14
    if (Math.abs(z - cam.zoom) > 0.02) { cam.zoom = z; cam.updateProjectionMatrix() }
  })
  return null
}

// ---- the scene --------------------------------------------------------------
function CityScene({ level, dojoLots, emptyLots, onEnter, onFound }: {
  level: number
  dojoLots: Array<{ lot: Lot; id: string; name: string; template: string }>
  emptyLots: Lot[]
  onEnter: (id: string) => void
  onFound: (lot: Lot) => void
}) {
  const { lots } = useMemo(() => buildCity(), [])
  const ambient = lots.filter((l) => l.kind === 'building')
  const detail = level >= 2
  const showMovers = level >= 1
  const showNames = level >= 2
  return (
    <>
      <OrthographicCamera makeDefault position={[46, 46, 46]} zoom={ZOOM_LEVELS[level]} near={-200} far={400} />
      <CameraZoom level={level} />
      <MapControls makeDefault enableRotate={false} enableZoom={false} screenSpacePanning={false} maxDistance={200} />
      <hemisphereLight args={['#cfe4ff', '#2a2f36', 0.9]} />
      <directionalLight position={[30, 50, 20]} intensity={1.15} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-60} shadow-camera-right={60} shadow-camera-top={60} shadow-camera-bottom={-60} />
      <fog attach="fog" args={['#aeb9c6', 90, 220]} />
      <Ground />
      {ambient.map((l) => (
        <group key={l.id} position={[l.cx, 0, l.cz]}>
          <Building spec={l.building!} detail={detail} />
        </group>
      ))}
      {dojoLots.map((d) => (
        <DojoBuilding key={d.id} lot={d.lot} name={d.name} templateId={d.template} onEnter={() => onEnter(d.id)} showName={showNames} />
      ))}
      {emptyLots.map((l) => (
        <EmptyLot key={l.id} lot={l} onFound={() => onFound(l)} showTag={showNames} />
      ))}
      <Movers kind="car" count={14} show={showMovers} />
      <Movers kind="ped" count={26} show={showMovers} />
      <SkyEvents show={level >= 1} />
    </>
  )
}

// ---- founding modal ---------------------------------------------------------
function deriveName(sentence: string): string {
  const words = sentence.trim().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean)
  if (!words.length) return 'Nouveau Dojo'
  const pick = words.slice(0, 2).map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')
  return pick.slice(0, 22)
}

// ---- public component -------------------------------------------------------
export function DojoCity({ enterDojo, exit }: { enterDojo: () => void; exit: () => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const createDojo = useWorkshop((s) => s.createDojo)
  const setActiveDojo = useWorkshop((s) => s.setActiveDojo)
  const save = useWorkshop((s) => s.save)

  const [level, setLevel] = useState(1)
  const [founding, setFounding] = useState<Lot | null>(null)
  const [sentence, setSentence] = useState('')

  const { lots } = useMemo(() => buildCity(), [])
  const available = useMemo(() => lots.filter((l) => l.kind === 'available'), [lots])

  // map each dojo → a lot (persisted), filling free plots in order
  const [lotMap, setLotMap] = useState<Record<string, string>>(loadLotMap)
  useEffect(() => {
    const map = { ...lotMap }
    const taken = new Set(Object.values(map))
    let changed = false
    for (const d of dojos) {
      if (map[d.id]) continue
      const free = available.find((l) => !taken.has(l.id))
      if (free) { map[d.id] = free.id; taken.add(free.id); changed = true }
    }
    if (changed) { setLotMap(map); saveLotMap(map) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojos, available])

  const dojoLots = useMemo(() => {
    return dojos
      .map((d) => {
        const lot = available.find((l) => l.id === lotMap[d.id])
        return lot ? { lot, id: d.id, name: d.name, template: d.template } : null
      })
      .filter(Boolean) as Array<{ lot: Lot; id: string; name: string; template: string }>
  }, [dojos, available, lotMap])

  const emptyLots = useMemo(() => {
    const taken = new Set(dojoLots.map((d) => d.lot.id))
    return available.filter((l) => !taken.has(l.id))
  }, [available, dojoLots])

  const enter = (id: string) => { setActiveDojo(id); save(); enterDojo() }
  const doFound = () => {
    const lot = founding
    if (!lot) return
    createDojo(deriveName(sentence) || 'Nouveau Dojo')
    const newId = useWorkshop.getState().activeDojoId
    if (newId) {
      const map = { ...lotMap, [newId]: lot.id }
      setLotMap(map); saveLotMap(map)
    }
    save()
    setFounding(null); setSentence('')
    enterDojo()
  }

  return (
    <div className="dojo-city">
      <Canvas shadows dpr={[1, 1.8]} gl={{ antialias: true }}>
        <color attach="background" args={['#aeb9c6']} />
        <CityScene level={level} dojoLots={dojoLots} emptyLots={emptyLots} onEnter={enter} onFound={setFounding} />
      </Canvas>

      {/* HUD */}
      <div className="city-top">
        <div className="city-title">
          <h1>Dojo City</h1>
          <p>{dojos.length ? 'Clique ton Dojo pour entrer · ou fonde-en un nouveau sur un terrain libre' : 'Choisis un terrain libre et fonde ton Dojo'}</p>
        </div>
        <button className="btn tiny ghost city-exit" onClick={exit}>← Accueil</button>
      </div>

      <div className="city-zoom" role="group" aria-label="Zoom">
        {[0, 1, 2, 3].map((l) => (
          <button key={l} className={l === level ? 'on' : ''} onClick={() => setLevel(l)} aria-pressed={l === level} title={`Zoom ${l + 1}`}>
            {['◱', '◲', '◰', '◳'][l]}
          </button>
        ))}
      </div>

      {founding && (
        <div className="modal-backdrop" onClick={() => setFounding(null)}>
          <div className="modal city-found" onClick={(e) => e.stopPropagation()}>
            <h3>Fonde ton Dojo</h3>
            <p className="muted small">Décris ton entreprise en une phrase. Ton CEO s’occupe du reste — nom, site, offres, growth.</p>
            <textarea
              autoFocus
              rows={3}
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              placeholder="Ex : une app qui aide les cafés de quartier à fidéliser leurs clients."
            />
            <div className="modal-actions">
              <button className="btn ghost" onClick={() => setFounding(null)}>Annuler</button>
              <button className="btn primary" disabled={!sentence.trim()} onClick={doFound}>Fonder mon Dojo →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
