// ---------------------------------------------------------------------------
// Dojo City · the bright, daytime isometric city you visit from the dashboard
// (header · City). You DON'T found companies here — that happens in the
// dashboard. Instead the city visualises what you've built: your HQ sits at the
// centre and grows a floor for every Dojo you run (1 Dojo = a Japanese villa).
// Around it: vintage villas + temples, a konbini for tips, an academy that opens
// the guide, lakes and parks, shaped traffic and little people walking, and
// construction sites on the empty plots toward the edges.
// ---------------------------------------------------------------------------
import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrthographicCamera, MapControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'
import { buildCity, ZOOM_LEVELS, SPAN, HALF, type BuildingSpec, type Lot } from '../../three/cityLayout'
import { useWorkshop } from '../../workshop'
import { templateById } from '../../data/templates'
import { Character3D } from '../three/Character3D'
import { SKINS } from '../../data/skins'

// ---- facade texture · clean daytime windows (glass + floor slabs) -----------
function facadeTexture(spec: BuildingSpec): THREE.CanvasTexture {
  const S = 128
  const c = document.createElement('canvas')
  c.width = S; c.height = S
  const g = c.getContext('2d')!
  g.fillStyle = spec.body; g.fillRect(0, 0, S, S)
  const cols = spec.w > 2.9 ? 5 : spec.w > 2.4 ? 4 : 3
  const rows = 3
  const mX = 10, gapX = (S - mX * 2) / cols
  const mY = 8, gapY = (S - mY * 2) / rows
  g.fillStyle = spec.trim
  for (let r = 0; r <= rows; r++) g.fillRect(0, mY + r * gapY - 2, S, 4)
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const x = mX + col * gapX + 4, y = mY + r * gapY + 5, w = gapX - 8, h = gapY - 11
      const lit = ((r * 3 + col * 7 + spec.floors) % 5) === 0
      g.fillStyle = lit ? '#fff1c2' : '#bcd6ef'; g.fillRect(x, y, w, h)
      g.fillStyle = 'rgba(28,52,86,0.28)'; g.fillRect(x, y, w, Math.max(2, h * 0.28))
    }
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.magFilter = THREE.NearestFilter
  tex.repeat.set(1, Math.max(1, Math.round(spec.floors / rows)))
  return tex
}

function signTexture(text: string, bg: string, vertical: boolean): THREE.CanvasTexture {
  const w = vertical ? 64 : 128
  const h = vertical ? 128 : 56
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const g = c.getContext('2d')!
  g.fillStyle = bg; g.fillRect(0, 0, w, h)
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 3; g.strokeRect(3, 3, w - 6, h - 6)
  g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'
  const font = `800 REMpx 'Noto Sans JP','Hiragino Sans','Yu Gothic',sans-serif`
  if (vertical) {
    const chars = [...text].slice(0, 4)
    const fs = Math.min(30, (h - 14) / chars.length)
    g.font = font.replace('REM', String(Math.round(fs)))
    chars.forEach((ch, i) => g.fillText(ch, w / 2, 10 + (i + 0.5) * (h - 16) / chars.length))
  } else {
    g.font = font.replace('REM', '30')
    g.fillText([...text].slice(0, 5).join(''), w / 2, h / 2 + 1)
  }
  return new THREE.CanvasTexture(c)
}

// bright, varied kawaii tile colours for villa hip roofs
const VILLA_ROOFS = ['#6f9ec9', '#e0865a', '#4fbfa8', '#8ba3b8', '#b07ba6', '#5f8f6a', '#d9a441']
const VILLA_ROOFS_D = ['#5a86b0', '#c66e45', '#3fa891', '#748ba0', '#976690', '#4f7a58', '#bf8a2e']

// a normal leafy tree or (1 in 4) a pink cherry-blossom, for kawaii colour
function Tree({ position, scale = 1, blossom = false }: { position: [number, number, number]; scale?: number; blossom?: boolean }) {
  const top = blossom ? '#ffb3d1' : '#5bbf4a'
  const top2 = blossom ? '#ff9ec4' : '#6fd05a'
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow><cylinderGeometry args={[0.08, 0.1, 0.7, 6]} /><meshStandardMaterial color="#8a5a34" /></mesh>
      <mesh position={[0, 0.95, 0]} castShadow><icosahedronGeometry args={[0.55, 0]} /><meshStandardMaterial color={top} flatShading /></mesh>
      <mesh position={[0.18, 1.3, 0.1]} castShadow><icosahedronGeometry args={[0.34, 0]} /><meshStandardMaterial color={top2} flatShading /></mesh>
    </group>
  )
}

// ---- one Tokyo building · clean low-poly, richly detailed --------------------
function Building({ spec, detail }: { spec: BuildingSpec; detail: boolean }) {
  const podiumH = spec.podium ? spec.floorH * 1.15 : 0
  const bodyH = spec.floors * spec.floorH
  const tex = useMemo(() => facadeTexture(spec), [spec])
  const sign = useMemo(() => (spec.sign ? signTexture(spec.sign.text, spec.sign.bg, spec.sign.vertical) : null), [spec])
  const roofSign = useMemo(() => (spec.roofSign ? signTexture(spec.roofSignText, '#e2265f', false) : null), [spec])

  // temple · vermilion timber body, tiered green-tile roofs, gold finial, torii
  if (spec.roof === 'pagoda') {
    const tiers = Math.min(3, Math.max(2, spec.floors))
    const tierY = (k: number) => bodyH + 0.2 + k * 0.5
    return (
      <group>
        <mesh position={[0, 0.1, 0]} receiveShadow><boxGeometry args={[spec.w + 0.3, 0.2, spec.d + 0.3]} /><meshStandardMaterial color="#cfc6b4" /></mesh>
        <mesh position={[0, bodyH / 2 + 0.2, 0]} castShadow receiveShadow><boxGeometry args={[spec.w * 0.8, bodyH, spec.d * 0.8]} /><meshStandardMaterial color="#c0392b" /></mesh>
        {/* pillars */}
        {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz], i) => (
          <mesh key={i} position={[sx * spec.w * 0.36, bodyH / 2 + 0.2, sz * spec.d * 0.36]}><cylinderGeometry args={[0.08, 0.08, bodyH, 8]} /><meshStandardMaterial color="#8c2f24" /></mesh>
        ))}
        {Array.from({ length: tiers }).map((_, k) => (
          <mesh key={k} position={[0, tierY(k), 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[spec.w * (0.78 - k * 0.14), 0.5, 4]} /><meshStandardMaterial color="#3fae8a" flatShading /></mesh>
        ))}
        <mesh position={[0, tierY(tiers - 1) + 0.28, 0]}><coneGeometry args={[0.09, 0.34, 8]} /><meshStandardMaterial color="#e6c34a" metalness={0.5} roughness={0.3} /></mesh>
        <group position={[0, 0, spec.d * 0.55]}>
          <mesh position={[-0.55, 0.55, 0]}><boxGeometry args={[0.12, 1.1, 0.12]} /><meshStandardMaterial color="#d1362f" /></mesh>
          <mesh position={[0.55, 0.55, 0]}><boxGeometry args={[0.12, 1.1, 0.12]} /><meshStandardMaterial color="#d1362f" /></mesh>
          <mesh position={[0, 1.12, 0]}><boxGeometry args={[1.5, 0.16, 0.16]} /><meshStandardMaterial color="#d1362f" /></mesh>
        </group>
      </group>
    )
  }

  // vintage villa · low timber house, tall bright hip roof (peaked so it reads
  // in the iso view), engawa porch + a garden shrub
  if (spec.roof === 'hip') {
    const rc = VILLA_ROOFS[(spec.floors + Math.round(spec.w * 10)) % VILLA_ROOFS.length]
    const rcDark = VILLA_ROOFS_D[(spec.floors + Math.round(spec.w * 10)) % VILLA_ROOFS.length]
    return (
      <group>
        <mesh position={[0, 0.04, 0]} receiveShadow><boxGeometry args={[spec.w + 0.5, 0.16, spec.d + 0.5]} /><meshStandardMaterial color="#b7a98f" /></mesh>
        <mesh position={[0, bodyH / 2 + 0.12, 0]} castShadow receiveShadow><boxGeometry args={[spec.w, bodyH, spec.d]} /><meshStandardMaterial color={spec.body} /></mesh>
        <mesh position={[0, bodyH * 0.5 + 0.12, spec.d / 2 + 0.01]}><planeGeometry args={[spec.w * 0.8, bodyH * 0.6]} /><meshStandardMaterial color="#f6efe0" /></mesh>
        {/* peaked hip roof · corner faces the camera so two slopes read in iso */}
        <mesh position={[0, bodyH + 0.66, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[spec.w * 0.86, 0.95, 4]} /><meshStandardMaterial color={rc} flatShading /></mesh>
        <mesh position={[0, bodyH + 0.2, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[spec.w * 1.06, 0.42, 4]} /><meshStandardMaterial color={rcDark} flatShading /></mesh>
        <mesh position={[spec.w * 0.5, 0.35, spec.d * 0.5]} castShadow><icosahedronGeometry args={[0.34, 0]} /><meshStandardMaterial color="#5bbf4a" flatShading /></mesh>
      </group>
    )
  }

  const bodyW = spec.w
  const upperW = spec.setback ? spec.w * 0.7 : spec.w
  const upperD = spec.setback ? spec.d * 0.7 : spec.d
  const upperH = spec.setback ? bodyH * 0.42 : 0
  const lowerH = bodyH - upperH

  return (
    <group>
      {spec.podium && (
        <group>
          <mesh position={[0, podiumH / 2, 0]} castShadow receiveShadow><boxGeometry args={[spec.w + 0.12, podiumH, spec.d + 0.12]} /><meshStandardMaterial color={spec.podiumColor} roughness={0.6} /></mesh>
          <mesh position={[0, podiumH * 0.45, spec.d / 2 + 0.08]}><planeGeometry args={[spec.w * 0.82, podiumH * 0.55]} /><meshStandardMaterial color="#20303f" metalness={0.3} roughness={0.2} /></mesh>
          {spec.awning && (
            <mesh position={[0, podiumH * 0.82, spec.d / 2 + 0.26]} rotation={[Math.PI * 0.14, 0, 0]} castShadow><boxGeometry args={[spec.w * 0.9, 0.06, 0.5]} /><meshStandardMaterial color={spec.awningColor} /></mesh>
          )}
        </group>
      )}
      <mesh position={[0, podiumH + lowerH / 2, 0]} castShadow receiveShadow><boxGeometry args={[bodyW, lowerH, spec.d]} /><meshStandardMaterial map={tex} color={spec.body} roughness={0.8} /></mesh>
      {spec.setback && (
        <mesh position={[0, podiumH + lowerH + upperH / 2, 0]} castShadow receiveShadow><boxGeometry args={[upperW, upperH, upperD]} /><meshStandardMaterial map={tex} color={spec.body} roughness={0.8} /></mesh>
      )}
      {spec.balconies && detail && Array.from({ length: Math.min(spec.floors - 1, 5) }).map((_, k) => (
        <mesh key={k} position={[0, podiumH + (k + 1) * spec.floorH, spec.d / 2 + 0.08]} castShadow><boxGeometry args={[spec.w * 0.9, 0.08, 0.28]} /><meshStandardMaterial color="#d7dde3" /></mesh>
      ))}
      <mesh position={[0, podiumH + bodyH + 0.06, 0]} castShadow><boxGeometry args={[(spec.setback ? upperW : bodyW) + 0.1, 0.14, (spec.setback ? upperD : spec.d) + 0.1]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
      {detail && (
        <group position={[0, podiumH + bodyH + 0.14, 0]}>
          {spec.waterTank && (
            <group position={[spec.w * 0.22, 0, -spec.d * 0.18]}>
              <mesh position={[0, 0.18, 0]}><boxGeometry args={[0.2, 0.36, 0.2]} /><meshStandardMaterial color="#9aa0a8" /></mesh>
              <mesh position={[0, 0.44, 0]} castShadow><boxGeometry args={[0.4, 0.22, 0.4]} /><meshStandardMaterial color="#6f7681" /></mesh>
            </group>
          )}
          {Array.from({ length: spec.acUnits }).map((_, k) => (
            <mesh key={k} position={[-spec.w * 0.28 + k * 0.26, 0.1, spec.d * 0.26]} castShadow><boxGeometry args={[0.22, 0.16, 0.22]} /><meshStandardMaterial color="#e2e6ea" /></mesh>
          ))}
          {spec.antenna && <mesh position={[-spec.w * 0.2, 0.7, spec.d * 0.1]}><cylinderGeometry args={[0.02, 0.02, 1.4, 4]} /><meshStandardMaterial color="#b03a2e" /></mesh>}
          {roofSign && (
            <group position={[0, 0.55, 0]}>
              <mesh position={[-0.5, -0.2, 0]}><boxGeometry args={[0.05, 0.5, 0.05]} /><meshStandardMaterial color="#444" /></mesh>
              <mesh position={[0.5, -0.2, 0]}><boxGeometry args={[0.05, 0.5, 0.05]} /><meshStandardMaterial color="#444" /></mesh>
              <mesh><planeGeometry args={[spec.w * 0.85, 0.55]} /><meshBasicMaterial map={roofSign} toneMapped={false} side={THREE.DoubleSide} /></mesh>
            </group>
          )}
          {spec.billboard && <mesh position={[0, 0.4, spec.d * 0.1]}><boxGeometry args={[spec.w * 0.8, 0.7, 0.08]} /><meshBasicMaterial color="#12a5ff" toneMapped={false} /></mesh>}
        </group>
      )}
      {sign && spec.sign && (
        spec.sign.place === 'facade'
          ? <mesh position={[0, podiumH + bodyH * 0.55, spec.d / 2 + 0.04]}><planeGeometry args={spec.sign.vertical ? [bodyH * 0.16, bodyH * 0.42] : [bodyW * 0.66, bodyH * 0.16]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
          : <mesh position={[spec.w / 2 + 0.04, podiumH + bodyH * 0.5, 0]} rotation={[0, Math.PI / 2, 0]}><planeGeometry args={[bodyH * 0.5, bodyH * 0.18]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
      )}
    </group>
  )
}

// ---- movement lanes shared by traffic + walkers -----------------------------
interface Mover { axis: 'x' | 'z'; fixed: number; pos: number; dir: number; speed: number }
function makeMovers(kind: 'ped' | 'car' | 'bus', count: number): Mover[] {
  const out: Mover[] = []
  const lines: number[] = []
  for (let i = 0; i < 11; i++) if (i % 3 === 0) lines.push(i * 5 - HALF + 2.5)
  let n = 0
  const per = Math.ceil(count / lines.length)
  for (const line of lines) {
    for (let k = 0; k < per && n < count; k++, n++) {
      const axis: 'x' | 'z' = k % 2 === 0 ? 'x' : 'z'
      const vehicle = kind !== 'ped'
      const laneOff = vehicle ? (k % 2 === 0 ? 0.75 : -0.75) : (k % 2 === 0 ? 1.7 : -1.7)
      out.push({
        axis, fixed: line + laneOff, pos: (k / per) * SPAN - HALF, dir: k % 2 === 0 ? 1 : -1,
        speed: kind === 'car' ? 3.4 + (k % 3) : kind === 'bus' ? 2.6 + (k % 2) : 1.1 + (k % 3) * 0.25,
      })
    }
  }
  return out
}

// ---- shaped vehicles + little people ----------------------------------------
const CAR_COLORS = ['#e6564f', '#3d7bd6', '#f0b429', '#37946e', '#f0f2f5', '#8b5cf6', '#ff8a3d']
const BUS_COLORS = ['#e8592e', '#1f9d5a', '#2f7fd6', '#f2b705']

function Car({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0.22, 0]} castShadow><boxGeometry args={[0.82, 0.34, 1.7]} /><meshStandardMaterial color={color} roughness={0.4} metalness={0.1} /></mesh>
      <mesh position={[0, 0.5, -0.05]} castShadow><boxGeometry args={[0.7, 0.34, 0.9]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      <mesh position={[0, 0.5, -0.05]}><boxGeometry args={[0.72, 0.24, 0.62]} /><meshStandardMaterial color="#bfe0f5" metalness={0.3} roughness={0.1} /></mesh>
      {[[-0.42, 0.6], [0.42, 0.6], [-0.42, -0.6], [0.42, -0.6]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.12, z]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.14, 0.14, 0.12, 10]} /><meshStandardMaterial color="#1c1f24" /></mesh>
      ))}
      <mesh position={[0, 0.22, 0.87]}><boxGeometry args={[0.5, 0.12, 0.04]} /><meshBasicMaterial color="#fff6c0" /></mesh>
    </group>
  )
}
function Bus({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0.5, 0]} castShadow><boxGeometry args={[1.0, 0.86, 2.9]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      <mesh position={[0.51, 0.56, 0]}><boxGeometry args={[0.02, 0.36, 2.5]} /><meshBasicMaterial color="#bfe0f5" /></mesh>
      <mesh position={[-0.51, 0.56, 0]}><boxGeometry args={[0.02, 0.36, 2.5]} /><meshBasicMaterial color="#bfe0f5" /></mesh>
      <mesh position={[0, 0.56, 1.46]}><boxGeometry args={[0.9, 0.4, 0.02]} /><meshBasicMaterial color="#bfe0f5" /></mesh>
      {[[-0.42, 1.0], [0.42, 1.0], [-0.42, -1.0], [0.42, -1.0]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.14, z]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.16, 0.16, 0.14, 10]} /><meshStandardMaterial color="#1c1f24" /></mesh>
      ))}
    </group>
  )
}
function Traffic({ show }: { show: boolean }) {
  const items = useMemo(() => {
    const cars = makeMovers('car', 12).map((m, i) => ({ m, kind: 'car' as const, color: CAR_COLORS[i % CAR_COLORS.length] }))
    const buses = makeMovers('bus', 4).map((m, i) => ({ m, kind: 'bus' as const, color: BUS_COLORS[i % BUS_COLORS.length] }))
    return [...cars, ...buses]
  }, [])
  const refs = useRef<(THREE.Group | null)[]>([])
  useFrame((_, dt) => {
    if (!show) return
    const d = Math.min(dt, 0.05)
    items.forEach((it, i) => {
      const g = refs.current[i]; if (!g) return
      const mv = it.m
      mv.pos += mv.dir * mv.speed * d
      if (mv.pos > HALF + 3) mv.pos = -HALF - 3
      else if (mv.pos < -HALF - 3) mv.pos = HALF + 3
      g.position.set(mv.axis === 'x' ? mv.pos : mv.fixed, 0, mv.axis === 'z' ? mv.pos : mv.fixed)
      g.rotation.y = mv.axis === 'x' ? (mv.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (mv.dir > 0 ? 0 : Math.PI)
    })
  })
  if (!show) return null
  return <>{items.map((it, i) => <group key={i} ref={(el) => { refs.current[i] = el }}>{it.kind === 'bus' ? <Bus color={it.color} /> : <Car color={it.color} />}</group>)}</>
}

// real dojo character skins walking the streets (Character3D in `bare` mode ·
// no nameplate, no click, just the little figure), scaled down to street size.
function Walkers({ show }: { show: boolean }) {
  const items = useMemo(() => {
    const pool = SKINS.filter((_, i) => i % 6 === 0).slice(0, 14)
    return makeMovers('ped', 14).map((m, i) => ({ m, skin: pool[i % pool.length], id: `city-npc-${i}` }))
  }, [])
  const refs = useRef<(THREE.Group | null)[]>([])
  useFrame((state, dt) => {
    if (!show) return
    const d = Math.min(dt, 0.05)
    items.forEach((it, i) => {
      const g = refs.current[i]; if (!g) return
      const mv = it.m
      mv.pos += mv.dir * mv.speed * d
      if (mv.pos > HALF + 3) mv.pos = -HALF - 3
      else if (mv.pos < -HALF - 3) mv.pos = HALF + 3
      g.position.set(mv.axis === 'x' ? mv.pos : mv.fixed, Math.abs(Math.sin(state.clock.elapsedTime * 5 + i)) * 0.06, mv.axis === 'z' ? mv.pos : mv.fixed)
      g.rotation.y = mv.axis === 'x' ? (mv.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (mv.dir > 0 ? 0 : Math.PI)
    })
  })
  if (!show) return null
  return <>{items.map((it, i) => (
    <group key={i} ref={(el) => { refs.current[i] = el }} scale={0.5}>
      <Character3D bare walk id={it.id} character={it.skin} x={0} z={0} mood="idle" selected={false} busy={false} name="" level={1} onSelect={() => {}} />
    </group>
  ))}</>
}

// ---- ambient sky events -----------------------------------------------------
function SkyEvents({ show }: { show: boolean }) {
  const blimp = useRef<THREE.Group>(null)
  const balloon = useRef<THREE.Group>(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (blimp.current) blimp.current.position.set(((t * 1.6) % (SPAN + 20)) - HALF - 10, 16, -HALF + 6)
    if (balloon.current) balloon.current.position.set(-HALF + 5, 11 + Math.sin(t * 0.5) * 0.8, ((t * 0.9) % (SPAN + 12)) - HALF - 6)
  })
  if (!show) return null
  return (
    <>
      <group ref={blimp}>
        <mesh castShadow><capsuleGeometry args={[0.9, 2.4, 4, 8]} /><meshStandardMaterial color="#eef1f5" /></mesh>
        <mesh position={[0, -0.9, 0]}><boxGeometry args={[0.5, 0.3, 0.8]} /><meshStandardMaterial color="#334155" /></mesh>
      </group>
      <group ref={balloon}>
        <mesh castShadow><sphereGeometry args={[1, 12, 12]} /><meshStandardMaterial color="#f87171" /></mesh>
        <mesh position={[0, -1.3, 0]}><boxGeometry args={[0.5, 0.4, 0.5]} /><meshStandardMaterial color="#7c4a2d" /></mesh>
      </group>
    </>
  )
}

const nameTag: React.CSSProperties = {
  font: "700 12px 'Silkscreen', ui-monospace, monospace", color: '#fff', background: '#11151d',
  padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.25)',
  boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
}

// ---- player HQ · grows one floor per Dojo (1 Dojo = a villa) -----------------
function PlayerHQ({ lot, floors, name, accent, onEnter }: { lot: Lot; floors: number; name: string; accent: string; onEnter: () => void }) {
  const [hover, setHover] = useState(false)
  const isVilla = floors <= 1
  const floorH = 1.0
  const height = Math.max(1, floors) * floorH
  return (
    <group position={[lot.cx, 0, lot.cz]}
      onClick={(e) => { e.stopPropagation(); onEnter() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}>
      {isVilla ? (
        <group>
          <mesh position={[0, 0.08, 0]} receiveShadow><boxGeometry args={[3.4, 0.28, 3.4]} /><meshStandardMaterial color="#8f8577" /></mesh>
          <mesh position={[0, 0.78, 0]} castShadow receiveShadow><boxGeometry args={[2.6, 1.1, 2.6]} /><meshStandardMaterial color="#efe6d3" /></mesh>
          <mesh position={[0, 1.35, 1.31]}><planeGeometry args={[1.9, 0.8]} /><meshStandardMaterial color="#f3ecdc" /></mesh>
          <mesh position={[0, 1.7, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[2.35, 0.7, 4]} /><meshStandardMaterial color={accent} flatShading /></mesh>
        </group>
      ) : (
        <group>
          <mesh position={[0, height / 2, 0]} castShadow receiveShadow><boxGeometry args={[2.6, height, 2.6]} /><meshStandardMaterial color={accent} roughness={0.7} /><Edges threshold={15} color="#ffffff" /></mesh>
          {Array.from({ length: floors }).map((_, k) => (
            <mesh key={k} position={[0, 0.5 + k * floorH, 1.31]}><planeGeometry args={[2.0, 0.5]} /><meshStandardMaterial color="#cde4f5" /></mesh>
          ))}
          <mesh position={[0, height + 0.1, 0]} castShadow><boxGeometry args={[2.9, 0.2, 2.9]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
          {[0, 1, 2].map((k) => (
            <mesh key={k} position={[0, height + 0.4 + k * 0.42, 0]} castShadow><coneGeometry args={[1.5 - k * 0.35, 0.36, 4]} /><meshStandardMaterial color="#3a2b2b" flatShading /></mesh>
          ))}
        </group>
      )}
      <group position={[0, 0, 1.85]}>
        <mesh position={[-0.6, 0.5, 0]}><boxGeometry args={[0.12, 1, 0.12]} /><meshStandardMaterial color="#d1362f" /></mesh>
        <mesh position={[0.6, 0.5, 0]}><boxGeometry args={[0.12, 1, 0.12]} /><meshStandardMaterial color="#d1362f" /></mesh>
        <mesh position={[0, 1.05, 0]}><boxGeometry args={[1.6, 0.16, 0.16]} /><meshStandardMaterial color="#d1362f" /></mesh>
      </group>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[4.6, 4.6]} /><meshStandardMaterial color={hover ? '#fde68a' : '#aeb9a2'} /></mesh>
      <Html position={[0, height + 1.4, 0]} center pointerEvents="none" zIndexRange={[30, 0]}>
        <div style={{ ...nameTag, background: accent }}>{name} · {floors} {floors > 1 ? 'Dojos' : 'Dojo'} ↵</div>
      </Html>
    </group>
  )
}

// ---- academy (opens the guide) ----------------------------------------------
function Academy({ lot, onOpen }: { lot: Lot; onOpen: () => void }) {
  const [hover, setHover] = useState(false)
  const banner = useMemo(() => signTexture('学院', '#1f6fd0', false), [])
  return (
    <group position={[lot.cx, 0, lot.cz]}
      onClick={(e) => { e.stopPropagation(); onOpen() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}>
      <mesh position={[0, 0.12, 0]} receiveShadow><boxGeometry args={[3.6, 0.34, 3.2]} /><meshStandardMaterial color="#d9cdb2" /></mesh>
      <mesh position={[0, 1.0, 0]} castShadow receiveShadow><boxGeometry args={[3.0, 1.5, 2.6]} /><meshStandardMaterial color="#f4eee2" /></mesh>
      {[0, 0.55].map((o, k) => (
        <mesh key={k} position={[0, 1.9 + o, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[2.7 - k * 0.55, 0.62, 4]} /><meshStandardMaterial color="#3a2b2b" flatShading /></mesh>
      ))}
      {[-1.1, -0.37, 0.37, 1.1].map((x) => (
        <mesh key={x} position={[x, 0.85, 1.32]} castShadow><cylinderGeometry args={[0.12, 0.12, 1.4, 10]} /><meshStandardMaterial color="#c04b3f" /></mesh>
      ))}
      <mesh position={[0, 1.15, 1.36]}><planeGeometry args={[1.5, 0.55]} /><meshBasicMaterial map={banner} toneMapped={false} /></mesh>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[4.4, 4.4]} /><meshStandardMaterial color={hover ? '#bfe0f5' : '#b9c2cc'} /></mesh>
      <Html position={[0, 3.4, 0]} center pointerEvents="none" zIndexRange={[30, 0]}>
        <div style={{ ...nameTag, background: '#1f6fd0' }}>Académie · Guide & ressources</div>
      </Html>
    </group>
  )
}

// ---- konbini (gives a tip) --------------------------------------------------
function Konbini({ lot, onTip }: { lot: Lot; onTip: () => void }) {
  const [hover, setHover] = useState(false)
  const sign = useMemo(() => signTexture('コンビニ', '#0f8f5f', false), [])
  return (
    <group position={[lot.cx, 0, lot.cz]}
      onClick={(e) => { e.stopPropagation(); onTip() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}>
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow><boxGeometry args={[2.6, 1.4, 2.4]} /><meshStandardMaterial color="#f4f7f9" /></mesh>
      <mesh position={[0, 1.5, 0]} castShadow><boxGeometry args={[2.7, 0.18, 2.5]} /><meshStandardMaterial color="#0f8f5f" /></mesh>
      <mesh position={[0, 0.55, 1.21]}><planeGeometry args={[2.2, 0.9]} /><meshStandardMaterial color="#243447" metalness={0.3} roughness={0.2} /></mesh>
      <mesh position={[0, 1.18, 1.22]}><planeGeometry args={[2.0, 0.42]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
      <mesh position={[0, 1.02, 1.5]} rotation={[Math.PI * 0.12, 0, 0]}><boxGeometry args={[2.4, 0.06, 0.55]} /><meshStandardMaterial color="#e63946" /></mesh>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[3.4, 3.4]} /><meshStandardMaterial color={hover ? '#a7f3d0' : '#b9c2cc'} /></mesh>
      <Html position={[0, 2.4, 0]} center pointerEvents="none" zIndexRange={[30, 0]}>
        <div style={{ ...nameTag, background: '#0f8f5f' }}>Konbini · une astuce ?</div>
      </Html>
    </group>
  )
}

// ---- construction site · 4 varied designs (by lot) --------------------------
function HazardFence() {
  return (
    <>
      {[-1.5, 1.5].map((x) => <mesh key={'fx' + x} position={[x, 0.32, 0]}><boxGeometry args={[0.06, 0.64, 3.2]} /><meshStandardMaterial color="#f2b705" /></mesh>)}
      {[-1.5, 1.5].map((z) => <mesh key={'fz' + z} position={[0, 0.32, z]}><boxGeometry args={[3.2, 0.64, 0.06]} /><meshStandardMaterial color="#f2b705" /></mesh>)}
    </>
  )
}
function ConstructionSite({ lot }: { lot: Lot }) {
  const variant = (lot.i * 3 + lot.j) % 4
  return (
    <group position={[lot.cx, 0, lot.cz]}>
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[3.2, 3.2]} /><meshStandardMaterial color="#c2ab72" /></mesh>
      <HazardFence />
      {variant === 0 && (
        <group>
          {/* scaffold + tower crane */}
          {[[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]].map(([x, z], i) => <mesh key={i} position={[x, 0.9, z]}><boxGeometry args={[0.08, 1.8, 0.08]} /><meshStandardMaterial color="#9aa0a8" /></mesh>)}
          <mesh position={[0, 1.4, 0]}><boxGeometry args={[1.5, 0.08, 1.5]} /><meshStandardMaterial color="#9aa0a8" /></mesh>
          <mesh position={[1.0, 1.6, 1.0]}><boxGeometry args={[0.12, 3.2, 0.12]} /><meshStandardMaterial color="#e6564f" /></mesh>
          <mesh position={[0.2, 3.1, 1.0]}><boxGeometry args={[1.9, 0.12, 0.12]} /><meshStandardMaterial color="#f0b429" /></mesh>
          <mesh position={[-0.5, 2.4, 1.0]}><boxGeometry args={[0.06, 1.3, 0.06]} /><meshStandardMaterial color="#333" /></mesh>
        </group>
      )}
      {variant === 1 && (
        <group>
          {/* dug pit + dirt mounds + yellow excavator */}
          <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.2, 2.2]} /><meshStandardMaterial color="#7a6647" /></mesh>
          <mesh position={[-1.0, 0.2, -1.0]} castShadow><coneGeometry args={[0.5, 0.5, 6]} /><meshStandardMaterial color="#8a7350" flatShading /></mesh>
          <group position={[0.5, 0, 0.4]}>
            <mesh position={[0, 0.35, 0]} castShadow><boxGeometry args={[0.7, 0.4, 1.0]} /><meshStandardMaterial color="#f2b705" /></mesh>
            <mesh position={[0, 0.55, 0.3]} castShadow><boxGeometry args={[0.5, 0.4, 0.5]} /><meshStandardMaterial color="#f0a020" /></mesh>
            <mesh position={[0, 0.35, 0.9]} rotation={[0.5, 0, 0]}><boxGeometry args={[0.12, 0.9, 0.12]} /><meshStandardMaterial color="#3a3f47" /></mesh>
            {[-0.28, 0.28].map((x) => <mesh key={x} position={[x, 0.12, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.12, 0.12, 0.72, 8]} /><meshStandardMaterial color="#1c1f24" /></mesh>)}
          </group>
        </group>
      )}
      {variant === 2 && (
        <group>
          {/* poured foundation + rebar grid + cement mixer */}
          <mesh position={[0, 0.12, 0]} castShadow><boxGeometry args={[2.2, 0.24, 2.2]} /><meshStandardMaterial color="#b9bcc0" /></mesh>
          {[-0.8, -0.3, 0.2, 0.7].map((x) => [-0.8, -0.3, 0.2, 0.7].map((z) => <mesh key={`${x},${z}`} position={[x, 0.5, z]}><cylinderGeometry args={[0.02, 0.02, 0.6, 4]} /><meshStandardMaterial color="#c56b3a" /></mesh>))}
          <group position={[1.0, 0, -0.8]}>
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0.5]} castShadow><cylinderGeometry args={[0.3, 0.4, 0.6, 12]} /><meshStandardMaterial color="#e6564f" /></mesh>
            <mesh position={[0, 0.1, 0]}><boxGeometry args={[0.4, 0.2, 0.6]} /><meshStandardMaterial color="#3a3f47" /></mesh>
          </group>
        </group>
      )}
      {variant === 3 && (
        <group>
          {/* steel frame going up + safety-net wrap */}
          {[[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]].map(([x, z], i) => <mesh key={i} position={[x, 1.3, z]}><boxGeometry args={[0.12, 2.6, 0.12]} /><meshStandardMaterial color="#5a6470" /></mesh>)}
          {[0.6, 1.4, 2.2].map((y) => <mesh key={y} position={[0, y, 0]}><boxGeometry args={[1.7, 0.1, 1.7]} /><meshStandardMaterial color="#5a6470" /></mesh>)}
          <mesh position={[0, 1.6, 0.85]}><planeGeometry args={[1.7, 2.4]} /><meshStandardMaterial color="#2f9d6a" transparent opacity={0.4} side={THREE.DoubleSide} /></mesh>
          <mesh position={[0.85, 1.6, 0]} rotation={[0, Math.PI / 2, 0]}><planeGeometry args={[1.7, 2.4]} /><meshStandardMaterial color="#2f9d6a" transparent opacity={0.4} side={THREE.DoubleSide} /></mesh>
        </group>
      )}
    </group>
  )
}

// ---- lake + park ------------------------------------------------------------
function LakePark({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><circleGeometry args={[3.6, 40]} /><meshStandardMaterial color="#7fc98a" roughness={1} /></mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[2.1, 40]} /><meshStandardMaterial color="#3aa7d8" metalness={0.2} roughness={0.25} /></mesh>
      {/* red bridge */}
      <mesh position={[0, 0.35, 0]} rotation={[0, Math.PI / 5, 0]}><boxGeometry args={[4.6, 0.12, 0.5]} /><meshStandardMaterial color="#d1362f" /></mesh>
      {[[-2.6, -1.4], [2.4, 1.6], [-2.2, 2.0], [2.8, -1.2]].map(([tx, tz], i) => <Tree key={i} position={[tx, 0, tz]} scale={1.05} blossom={i % 2 === 0} />)}
    </group>
  )
}

function CameraZoom({ level }: { level: number }) {
  const cam = useThree((s) => s.camera) as THREE.OrthographicCamera
  useFrame(() => {
    const target = ZOOM_LEVELS[level]
    const z = cam.zoom + (target - cam.zoom) * 0.14
    if (Math.abs(z - cam.zoom) > 0.02) { cam.zoom = z; cam.updateProjectionMatrix() }
  })
  return null
}

const ROAD_LINES = (() => {
  const out: number[] = []
  for (let i = 0; i < 11; i++) if (i % 3 === 0) out.push(i * 5 - HALF + 2.5)
  return out
})()

function Ground() {
  const stripes = useMemo(() => Array.from({ length: 6 }, (_, k) => k), [])
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow><planeGeometry args={[SPAN + 16, SPAN + 16]} /><meshStandardMaterial color="#c6cbd1" /></mesh>
      {ROAD_LINES.map((at, k) => (
        <group key={k}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[at, 0.0, 0]} receiveShadow><planeGeometry args={[3.7, SPAN + 16]} /><meshStandardMaterial color="#d9dde2" /></mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, at]} receiveShadow><planeGeometry args={[SPAN + 16, 3.7]} /><meshStandardMaterial color="#d9dde2" /></mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[at, 0.004, 0]} receiveShadow><planeGeometry args={[3.0, SPAN + 16]} /><meshStandardMaterial color="#6b7178" /></mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, at]} receiveShadow><planeGeometry args={[SPAN + 16, 3.0]} /><meshStandardMaterial color="#6b7178" /></mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[at, 0.007, 0]}><planeGeometry args={[0.1, SPAN + 16]} /><meshBasicMaterial color="#eef1f4" /></mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.008, at]}><planeGeometry args={[SPAN + 16, 0.1]} /><meshBasicMaterial color="#eef1f4" /></mesh>
        </group>
      ))}
      {ROAD_LINES.map((x) => ROAD_LINES.map((z) => (
        <group key={`${x},${z}`} position={[x, 0.01, z]}>
          {stripes.map((s) => <mesh key={`h${s}`} rotation={[-Math.PI / 2, 0, 0]} position={[-1.9, 0, -1.0 + s * 0.4]}><planeGeometry args={[0.7, 0.22]} /><meshBasicMaterial color="#f2f4f6" /></mesh>)}
          {stripes.map((s) => <mesh key={`v${s}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[-1.0 + s * 0.4, 0, 1.9]}><planeGeometry args={[0.7, 0.22]} /><meshBasicMaterial color="#f2f4f6" /></mesh>)}
        </group>
      )))}
    </group>
  )
}

function StreetTrees() {
  const spots = useMemo(() => {
    const out: [number, number, number][] = []
    ROAD_LINES.forEach((at) => {
      for (let p = -HALF + 3; p < HALF; p += 4.5) { out.push([at + 1.9, 0, p]); out.push([p, 0, at + 1.9]) }
    })
    return out.filter((_, i) => i % 2 === 0)
  }, [])
  return <>{spots.map((s, i) => <Tree key={i} position={s} scale={0.9 + (i % 3) * 0.12} blossom={i % 4 === 0} />)}</>
}

// ---- the scene --------------------------------------------------------------
function CityScene({ level, hqFloors, hqName, hqAccent, onEnter, onGuide, onTip }: {
  level: number; hqFloors: number; hqName: string; hqAccent: string
  onEnter: () => void; onGuide: () => void; onTip: () => void
}) {
  const { lots } = useMemo(() => buildCity(), [])
  // sort lots by distance from centre · nearest is the player HQ, the rest fill
  // outward; edges become construction sites.
  const sorted = useMemo(() => [...lots].sort((a, b) => Math.hypot(a.cx, a.cz) - Math.hypot(b.cx, b.cz)), [lots])
  const maxDist = useMemo(() => Math.max(...sorted.map((l) => Math.hypot(l.cx, l.cz))), [sorted])
  const hqLot = sorted[0]
  const academyLot = sorted[3]
  const konbiniLot = sorted[5]
  const lakeLot = sorted[8]
  const reserved = new Set([hqLot?.id, academyLot?.id, konbiniLot?.id, lakeLot?.id])
  const detail = level >= 2
  const showTraffic = level >= 1
  const builtRadius = maxDist * 0.82

  return (
    <>
      <OrthographicCamera makeDefault position={[46, 46, 46]} zoom={ZOOM_LEVELS[level]} near={-200} far={400} />
      <CameraZoom level={level} />
      <MapControls makeDefault enableRotate={false} enableZoom={false} screenSpacePanning={false} maxDistance={200} />
      <ambientLight intensity={0.55} />
      <hemisphereLight args={['#eaf4ff', '#c6cbd1', 0.85]} />
      <directionalLight position={[34, 52, 22]} intensity={1.5} color="#fff6e6" castShadow shadow-mapSize={[2048, 2048]} shadow-camera-left={-60} shadow-camera-right={60} shadow-camera-top={60} shadow-camera-bottom={-60} shadow-bias={-0.0004} />
      <fog attach="fog" args={['#d6e8f7', 150, 340]} />
      <Ground />
      <StreetTrees />

      {sorted.map((l) => {
        if (reserved.has(l.id)) return null
        const dist = Math.hypot(l.cx, l.cz)
        // near the centre → finished ambient buildings; toward the edges (or on
        // reserved-empty plots) → construction sites.
        if (l.kind === 'building' && dist < builtRadius) {
          return <group key={l.id} position={[l.cx, 0, l.cz]}><Building spec={l.building!} detail={detail} /></group>
        }
        return <ConstructionSite key={l.id} lot={l} />
      })}

      {hqLot && <PlayerHQ lot={hqLot} floors={hqFloors} name={hqName} accent={hqAccent} onEnter={onEnter} />}
      {academyLot && <Academy lot={academyLot} onOpen={onGuide} />}
      {konbiniLot && <Konbini lot={konbiniLot} onTip={onTip} />}
      {lakeLot && <LakePark x={lakeLot.cx} z={lakeLot.cz} />}

      <Traffic show={showTraffic} />
      <Walkers show={showTraffic} />
      <SkyEvents show={level >= 1} />
    </>
  )
}

const TIPS = [
  'Astuce : décris ton entreprise en une phrase — ton CEO construit le site, l’offre et le plan growth.',
  'Astuce : connecte tes agents (Email, Meta, SEO) dans le Studio pour déléguer le growth B2B.',
  'Astuce : chaque nouveau Dojo ajoute un étage à ton immeuble dans la ville.',
  'Astuce : achète des crédits dans ta monnaie — pas de crypto à gérer, tout se règle en coulisse.',
  'Astuce : règle l’autonomie de ton CEO pour éviter qu’il tourne en rond et pour faire durer tes crédits.',
]

// ---- public component -------------------------------------------------------
export function DojoCity({ enterDojo, exit }: { enterDojo: () => void; exit: () => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeDojoId = useWorkshop((s) => s.activeDojoId)
  const account = useWorkshop((s) => s.account)

  const [level, setLevel] = useState(1)
  const [tip, setTip] = useState<string | null>(null)

  const floors = Math.max(1, dojos.length)
  const active = dojos.find((d) => d.id === activeDojoId) ?? dojos[0]
  const hqName = account?.name || active?.name || 'Mon Dojo'
  const hqAccent = templateById(active?.template).palette?.accent || '#ef7d9d'

  const showTip = () => setTip(TIPS[Math.floor((Date.now() / 1000) % TIPS.length)])

  return (
    <div className="dojo-city">
      <Canvas shadows dpr={[1, 1.8]} gl={{ antialias: true }}>
        <color attach="background" args={['#bfe1fb']} />
        <CityScene
          level={level}
          hqFloors={floors}
          hqName={hqName}
          hqAccent={hqAccent}
          onEnter={enterDojo}
          onGuide={() => { window.location.href = '/guide' }}
          onTip={showTip}
        />
      </Canvas>

      <div className="city-top">
        <div className="city-title">
          <h1>Dojo City</h1>
          <p>Ton immeuble grandit d’un étage par Dojo. Clique-le pour revenir au tableau de bord · visite l’Académie et le konbini.</p>
        </div>
        <button className="btn tiny ghost city-exit" onClick={exit}>← Tableau de bord</button>
      </div>

      <div className="city-zoom" role="group" aria-label="Zoom">
        {[0, 1, 2, 3].map((l) => (
          <button key={l} className={l === level ? 'on' : ''} onClick={() => setLevel(l)} aria-pressed={l === level} title={`Zoom ${l + 1}`}>
            {['◱', '◲', '◰', '◳'][l]}
          </button>
        ))}
      </div>

      {tip && (
        <div className="city-tip" onClick={() => setTip(null)}>
          <p>{tip}</p>
          <button className="btn tiny" onClick={() => setTip(null)}>OK</button>
        </div>
      )}
    </div>
  )
}
