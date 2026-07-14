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
import { buildCity, ZOOM_LEVELS, SPAN, HALF, GRID, CELL, type BuildingSpec, type Lot, type CivicKind } from '../../three/cityLayout'
import { useWorkshop } from '../../workshop'
import { templateById } from '../../data/templates'
import { Character3D } from '../three/Character3D'
import { SKINS } from '../../data/skins'
import { MOCK_COMPANIES, coRevenue, coSales, companyPath, type MockCo } from '../../data/showcase'
import { SHOW_MOCK_COMPANIES } from '../../config/flags'
import { PageBar } from '../PageBar'

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

  // vintage villa · a proper two-storey timber house with a tall, steep hip roof
  // (peaked so two slopes read in iso), engawa porch + a garden shrub. Given real
  // wall height so it no longer looks flattened.
  if (spec.roof === 'hip') {
    const rc = VILLA_ROOFS[(spec.floors + Math.round(spec.w * 10)) % VILLA_ROOFS.length]
    const rcDark = VILLA_ROOFS_D[(spec.floors + Math.round(spec.w * 10)) % VILLA_ROOFS.length]
    const vbh = Math.max(2.0, bodyH + 1.15) // taller walls: villas were too flat
    const roofH = 1.7                        // steep peaked roof
    return (
      <group>
        <mesh position={[0, 0.08, 0]} receiveShadow><boxGeometry args={[spec.w + 0.5, 0.24, spec.d + 0.5]} /><meshStandardMaterial color="#b7a98f" /></mesh>
        <mesh position={[0, vbh / 2 + 0.2, 0]} castShadow receiveShadow><boxGeometry args={[spec.w, vbh, spec.d]} /><meshStandardMaterial color={spec.body} /></mesh>
        {/* ground-floor shoji band + upper-floor window */}
        <mesh position={[0, vbh * 0.32 + 0.2, spec.d / 2 + 0.01]}><planeGeometry args={[spec.w * 0.82, vbh * 0.34]} /><meshStandardMaterial color="#f6efe0" /></mesh>
        <mesh position={[0, vbh * 0.74 + 0.2, spec.d / 2 + 0.01]}><planeGeometry args={[spec.w * 0.62, vbh * 0.22]} /><meshStandardMaterial color="#cfe6f5" /></mesh>
        {/* mid-floor beam line */}
        <mesh position={[0, vbh * 0.52 + 0.2, spec.d / 2 + 0.02]}><boxGeometry args={[spec.w + 0.04, 0.08, 0.04]} /><meshStandardMaterial color="#7a6a4c" /></mesh>
        {/* steep peaked hip roof · corner faces the camera so two slopes read in iso */}
        <mesh position={[0, vbh + roofH * 0.5 + 0.2, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[spec.w * 0.82, roofH, 4]} /><meshStandardMaterial color={rc} flatShading /></mesh>
        {/* eaves flare */}
        <mesh position={[0, vbh + 0.32, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[spec.w * 1.05, 0.5, 4]} /><meshStandardMaterial color={rcDark} flatShading /></mesh>
        {/* ridge finial */}
        <mesh position={[0, vbh + roofH + 0.28, 0]}><boxGeometry args={[0.12, 0.34, 0.12]} /><meshStandardMaterial color="#6a5a3c" /></mesh>
        <mesh position={[spec.w * 0.52, 0.42, spec.d * 0.52]} castShadow><icosahedronGeometry args={[0.36, 0]} /><meshStandardMaterial color="#5bbf4a" flatShading /></mesh>
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

// ---- one of OUR showcase companies · a clean modern HQ you can click ---------
function brandSign(text: string, bg: string): THREE.CanvasTexture {
  const W = 256, H = 64
  const c = document.createElement('canvas')
  c.width = W; c.height = H
  const g = c.getContext('2d')!
  g.fillStyle = bg; g.fillRect(0, 0, W, H)
  g.fillStyle = 'rgba(255,255,255,0.9)'; g.fillRect(4, 4, W - 8, 3)
  g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'
  g.font = "800 34px 'Outfit','Segoe UI',system-ui,sans-serif"
  g.fillText(text, W / 2, H / 2 + 2)
  const tex = new THREE.CanvasTexture(c)
  tex.anisotropy = 4
  return tex
}

function CompanyBuilding({ co, onSelect, labeled }: { co: MockCo; onSelect: () => void; labeled: boolean }) {
  const [hover, setHover] = useState(false)
  const floors = 4
  const floorH = 0.92
  const h = floors * floorH
  const w = 2.6, d = 2.3
  const podiumH = 0.7
  const sign = useMemo(() => brandSign(co.name, co.theme.accent), [co])
  return (
    <group
      onClick={(e) => { e.stopPropagation(); onSelect() }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}>
      {/* accent podium / storefront */}
      <mesh position={[0, podiumH / 2, 0]} castShadow receiveShadow><boxGeometry args={[w + 0.16, podiumH, d + 0.16]} /><meshStandardMaterial color={co.theme.accent} roughness={0.5} /></mesh>
      {/* clean glass tower body */}
      <mesh position={[0, podiumH + h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#f3f6fb" roughness={0.55} /><Edges threshold={15} color={hover ? '#ffffff' : '#d3dce7'} /></mesh>
      {/* window bands per floor */}
      {Array.from({ length: floors }).map((_, k) => (
        <mesh key={k} position={[0, podiumH + 0.5 + k * floorH, d / 2 + 0.01]}><planeGeometry args={[w * 0.82, 0.42]} /><meshStandardMaterial color="#bcd8ef" metalness={0.2} roughness={0.15} /></mesh>
      ))}
      {/* roof cap + rooftop brand sign */}
      <mesh position={[0, podiumH + h + 0.08, 0]} castShadow><boxGeometry args={[w + 0.12, 0.16, d + 0.12]} /><meshStandardMaterial color="#c9d3de" /></mesh>
      <group position={[0, podiumH + h + 0.62, 0]}>
        <mesh position={[-w * 0.34, -0.22, 0]}><boxGeometry args={[0.06, 0.5, 0.06]} /><meshStandardMaterial color="#7a8291" /></mesh>
        <mesh position={[w * 0.34, -0.22, 0]}><boxGeometry args={[0.06, 0.5, 0.06]} /><meshStandardMaterial color="#7a8291" /></mesh>
        <mesh><planeGeometry args={[w * 0.98, 0.52]} /><meshBasicMaterial map={sign} toneMapped={false} side={THREE.DoubleSide} /></mesh>
      </group>
      {/* click halo on the ground */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[w + 1.3, d + 1.3]} /><meshStandardMaterial color={hover ? '#fde68a' : co.theme.accent} transparent opacity={hover ? 0.9 : 0.16} /></mesh>
      <Html position={[0, podiumH + h + 1.5, 0]} center pointerEvents="none" zIndexRange={[28, 0]}>
        {labeled || hover
          ? <div style={{ ...nameTag, background: co.theme.accent }}>{co.name} · {co.cat} →</div>
          : <div style={{ ...pinTag, background: co.theme.accent }}>{co.name[0]}</div>}
      </Html>
    </group>
  )
}

// ---- movement lanes shared by traffic + walkers -----------------------------
interface Mover { axis: 'x' | 'z'; fixed: number; pos: number; dir: number; speed: number }
function makeMovers(kind: 'ped' | 'car' | 'bus', count: number): Mover[] {
  const out: Mover[] = []
  const lines: number[] = []
  for (let i = 0; i < GRID; i++) if (i % 3 === 0) lines.push(i * CELL - HALF + CELL / 2)
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
const TRUCK_COLORS = ['#d64545', '#2f6bd6', '#2b8a5a', '#e08a1e', '#5a4fd6', '#444b57']

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
// delivery / cargo truck · cab + boxy trailer, for the "camions" on the avenues
function Truck({ color }: { color: string }) {
  return (
    <group>
      {/* trailer box */}
      <mesh position={[0, 0.62, -0.35]} castShadow><boxGeometry args={[0.98, 1.0, 2.0]} /><meshStandardMaterial color="#eef1f5" roughness={0.6} /></mesh>
      <mesh position={[0.5, 0.62, -0.35]}><boxGeometry args={[0.02, 0.9, 1.9]} /><meshStandardMaterial color={color} /></mesh>
      <mesh position={[-0.5, 0.62, -0.35]}><boxGeometry args={[0.02, 0.9, 1.9]} /><meshStandardMaterial color={color} /></mesh>
      {/* cab */}
      <mesh position={[0, 0.5, 1.05]} castShadow><boxGeometry args={[0.92, 0.72, 0.9]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      <mesh position={[0, 0.62, 1.52]}><boxGeometry args={[0.82, 0.4, 0.04]} /><meshStandardMaterial color="#bfe0f5" metalness={0.3} roughness={0.1} /></mesh>
      {[[-0.44, 1.0], [0.44, 1.0], [-0.44, -0.6], [0.44, -0.6], [-0.44, -1.1], [0.44, -1.1]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.16, z]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.17, 0.17, 0.13, 10]} /><meshStandardMaterial color="#1c1f24" /></mesh>
      ))}
    </group>
  )
}
function Traffic({ show }: { show: boolean }) {
  const items = useMemo(() => {
    const cars = makeMovers('car', 22).map((m, i) => ({ m, kind: 'car' as const, color: CAR_COLORS[i % CAR_COLORS.length] }))
    const buses = makeMovers('bus', 7).map((m, i) => ({ m, kind: 'bus' as const, color: BUS_COLORS[i % BUS_COLORS.length] }))
    const trucks = makeMovers('bus', 7).map((m, i) => ({ m, kind: 'truck' as const, color: TRUCK_COLORS[i % TRUCK_COLORS.length] }))
    return [...cars, ...buses, ...trucks]
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
  return <>{items.map((it, i) => <group key={i} ref={(el) => { refs.current[i] = el }}>{it.kind === 'bus' ? <Bus color={it.color} /> : it.kind === 'truck' ? <Truck color={it.color} /> : <Car color={it.color} />}</group>)}</>
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

// ---- soft low-poly clouds drifting over the metropolis ----------------------
function Clouds({ center }: { center: [number, number] }) {
  const puffs = useMemo<[number, number, number][]>(() => [
    [-30, 33, -20], [22, 36, -34], [42, 31, 14], [-46, 34, 26], [6, 32, 42], [-12, 37, -50], [30, 33, 44], [-38, 32, -44],
  ], [])
  return <>{puffs.map((p, i) => (
    Math.hypot(p[0] - center[0], p[2] - center[1]) > CULL_R + 20 ? null : (
    <group key={i} position={[p[0] + center[0] * 0.15, p[1], p[2] + center[1] * 0.15]}>
      <mesh><sphereGeometry args={[3, 10, 10]} /><meshStandardMaterial color="#ffffff" /></mesh>
      <mesh position={[3, 0.4, 0.5]}><sphereGeometry args={[2.2, 10, 10]} /><meshStandardMaterial color="#ffffff" /></mesh>
      <mesh position={[-2.8, -0.2, 0.4]}><sphereGeometry args={[2.4, 10, 10]} /><meshStandardMaterial color="#f2f7ff" /></mesh>
    </group>
    )
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

// ---- giant walking monsters · they tower over the metropolis ----------------
type LegRef = React.RefObject<THREE.Group>

function GundamModel({ legL, legR }: { legL: LegRef; legR: LegRef }) {
  return (
    <group>
      <mesh position={[0, 3.4, 0]} castShadow><boxGeometry args={[1.6, 2.0, 1.0]} /><meshStandardMaterial color="#eef1f5" /></mesh>
      <mesh position={[0, 3.6, 0.52]}><boxGeometry args={[1.2, 0.8, 0.1]} /><meshStandardMaterial color="#c0392b" /></mesh>
      <mesh position={[0, 4.7, 0]} castShadow><boxGeometry args={[0.72, 0.64, 0.64]} /><meshStandardMaterial color="#f5f7fa" /></mesh>
      <mesh position={[0, 4.72, 0.33]}><boxGeometry args={[0.42, 0.12, 0.05]} /><meshBasicMaterial color="#12d0ff" toneMapped={false} /></mesh>
      <mesh position={[0, 5.05, 0.18]} rotation={[0, 0, 0]}><boxGeometry args={[0.7, 0.08, 0.05]} /><meshStandardMaterial color="#f0b429" metalness={0.4} /></mesh>
      {[-1, 1].map((s) => <mesh key={s} position={[s * 1.08, 3.9, 0]} castShadow><boxGeometry args={[0.7, 0.7, 0.9]} /><meshStandardMaterial color="#2f6bd6" /></mesh>)}
      {[-1, 1].map((s) => <mesh key={s} position={[s * 1.18, 2.8, 0]} castShadow><boxGeometry args={[0.42, 1.7, 0.42]} /><meshStandardMaterial color="#dfe6ee" /></mesh>)}
      <mesh position={[0, 2.3, 0]}><boxGeometry args={[1.3, 0.7, 0.8]} /><meshStandardMaterial color="#c0392b" /></mesh>
      <group ref={legL} position={[-0.42, 2.2, 0]}>
        <mesh position={[0, -1.1, 0]} castShadow><boxGeometry args={[0.52, 2.2, 0.52]} /><meshStandardMaterial color="#e7edf3" /></mesh>
        <mesh position={[0, -2.25, 0.16]} castShadow><boxGeometry args={[0.52, 0.32, 0.85]} /><meshStandardMaterial color="#2f6bd6" /></mesh>
      </group>
      <group ref={legR} position={[0.42, 2.2, 0]}>
        <mesh position={[0, -1.1, 0]} castShadow><boxGeometry args={[0.52, 2.2, 0.52]} /><meshStandardMaterial color="#e7edf3" /></mesh>
        <mesh position={[0, -2.25, 0.16]} castShadow><boxGeometry args={[0.52, 0.32, 0.85]} /><meshStandardMaterial color="#2f6bd6" /></mesh>
      </group>
    </group>
  )
}

function GodzillaModel({ legL, legR }: { legL: LegRef; legR: LegRef }) {
  const skin = '#37503a', belly = '#8fae74', spike = '#cfe3b0'
  return (
    <group>
      {/* hunched body */}
      <mesh position={[0, 3.0, 0]} rotation={[0.25, 0, 0]} castShadow><capsuleGeometry args={[0.95, 1.7, 6, 10]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      <mesh position={[0, 2.9, 0.55]} rotation={[0.25, 0, 0]}><capsuleGeometry args={[0.55, 1.4, 4, 8]} /><meshStandardMaterial color={belly} flatShading /></mesh>
      {/* neck + head */}
      <mesh position={[0, 4.3, 0.5]} castShadow><boxGeometry args={[0.7, 0.7, 1.1]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      <mesh position={[0, 4.15, 1.05]} castShadow><boxGeometry args={[0.6, 0.4, 0.7]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      <mesh position={[0.18, 4.4, 1.0]}><boxGeometry args={[0.12, 0.12, 0.12]} /><meshBasicMaterial color="#ffe14a" toneMapped={false} /></mesh>
      <mesh position={[-0.18, 4.4, 1.0]}><boxGeometry args={[0.12, 0.12, 0.12]} /><meshBasicMaterial color="#ffe14a" toneMapped={false} /></mesh>
      {/* dorsal spikes */}
      {[-0.2, 0.5, 1.2, 1.9].map((z, i) => <mesh key={i} position={[0, 4.0 - i * 0.15, -0.2 - z * 0.4]} rotation={[0.2, 0, 0]}><coneGeometry args={[0.26, 0.7, 4]} /><meshStandardMaterial color={spike} flatShading /></mesh>)}
      {/* tail */}
      <mesh position={[0, 2.4, -1.4]} rotation={[-0.5, 0, 0]} castShadow><coneGeometry args={[0.55, 2.6, 6]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      {/* little arms */}
      {[-1, 1].map((s) => <mesh key={s} position={[s * 0.85, 3.1, 0.5]} rotation={[0.6, 0, 0]}><capsuleGeometry args={[0.16, 0.6, 4, 6]} /><meshStandardMaterial color={skin} flatShading /></mesh>)}
      {/* legs */}
      <group ref={legL} position={[-0.5, 2.1, 0]}>
        <mesh position={[0, -1.0, 0]} castShadow><capsuleGeometry args={[0.42, 1.3, 4, 8]} /><meshStandardMaterial color={skin} flatShading /></mesh>
        <mesh position={[0, -2.0, 0.3]}><boxGeometry args={[0.6, 0.3, 0.9]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      </group>
      <group ref={legR} position={[0.5, 2.1, 0]}>
        <mesh position={[0, -1.0, 0]} castShadow><capsuleGeometry args={[0.42, 1.3, 4, 8]} /><meshStandardMaterial color={skin} flatShading /></mesh>
        <mesh position={[0, -2.0, 0.3]}><boxGeometry args={[0.6, 0.3, 0.9]} /><meshStandardMaterial color={skin} flatShading /></mesh>
      </group>
    </group>
  )
}

function BibendumModel({ legL, legR }: { legL: LegRef; legR: LegRef }) {
  const w = '#f3f4f6', ring = '#e2e5ea'
  return (
    <group>
      {/* stacked tyre torso */}
      {[2.5, 3.15, 3.75, 4.25].map((y, i) => <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.85 - i * 0.13, 0.34 - i * 0.04, 8, 16]} /><meshStandardMaterial color={i % 2 ? ring : w} /></mesh>)}
      {/* head */}
      <mesh position={[0, 4.9, 0]} castShadow><sphereGeometry args={[0.62, 16, 16]} /><meshStandardMaterial color={w} /></mesh>
      <mesh position={[0.2, 5.0, 0.5]}><sphereGeometry args={[0.1, 8, 8]} /><meshStandardMaterial color="#222" /></mesh>
      <mesh position={[-0.2, 5.0, 0.5]}><sphereGeometry args={[0.1, 8, 8]} /><meshStandardMaterial color="#222" /></mesh>
      <mesh position={[0, 4.75, 0.55]} rotation={[0, 0, 0]}><torusGeometry args={[0.2, 0.04, 8, 12, Math.PI]} /><meshStandardMaterial color="#c0392b" /></mesh>
      {/* arms */}
      {[-1, 1].map((s) => <group key={s} position={[s * 1.0, 3.7, 0]}>{[0, 1, 2].map((k) => <mesh key={k} position={[s * k * 0.32, -k * 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.24, 0.12, 6, 12]} /><meshStandardMaterial color={k % 2 ? ring : w} /></mesh>)}</group>)}
      {/* legs */}
      <group ref={legL} position={[-0.45, 2.3, 0]}>
        {[0, 1].map((k) => <mesh key={k} position={[0, -0.5 - k * 0.55, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.34, 0.16, 6, 12]} /><meshStandardMaterial color={k % 2 ? ring : w} /></mesh>)}
        <mesh position={[0, -1.5, 0.2]}><boxGeometry args={[0.5, 0.3, 0.7]} /><meshStandardMaterial color="#c0392b" /></mesh>
      </group>
      <group ref={legR} position={[0.45, 2.3, 0]}>
        {[0, 1].map((k) => <mesh key={k} position={[0, -0.5 - k * 0.55, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.34, 0.16, 6, 12]} /><meshStandardMaterial color={k % 2 ? ring : w} /></mesh>)}
        <mesh position={[0, -1.5, 0.2]}><boxGeometry args={[0.5, 0.3, 0.7]} /><meshStandardMaterial color="#c0392b" /></mesh>
      </group>
    </group>
  )
}

function GiantMonsters({ show }: { show: boolean }) {
  const bodies = [useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null)]
  const legsL = [useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null)]
  const legsR = [useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null)]
  const lanes = useMemo(() => {
    const L = ROAD_LINES
    return [
      { axis: 'x' as const, fixed: L[Math.min(2, L.length - 1)], dir: 1, speed: 2.4, scale: 2.3 },
      { axis: 'z' as const, fixed: L[Math.floor(L.length / 2)], dir: -1, speed: 2.0, scale: 2.1 },
      { axis: 'x' as const, fixed: L[Math.max(0, L.length - 3)], dir: 1, speed: 1.7, scale: 2.2 },
    ]
  }, [])
  const pos = useRef(lanes.map((_, i) => -HALF + i * 26))
  useFrame((state, dt) => {
    if (!show) return
    const d = Math.min(dt, 0.05); const t = state.clock.elapsedTime
    lanes.forEach((ln, i) => {
      pos.current[i] += ln.dir * ln.speed * d
      if (pos.current[i] > HALF + 12) pos.current[i] = -HALF - 12
      const p = pos.current[i]
      const g = bodies[i].current; if (!g) return
      const bob = Math.abs(Math.sin(t * 2.4 + i)) * 0.18 * ln.scale
      g.position.set(ln.axis === 'x' ? p : ln.fixed, bob, ln.axis === 'z' ? p : ln.fixed)
      g.rotation.y = ln.axis === 'x' ? (ln.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (ln.dir > 0 ? 0 : Math.PI)
      const sw = Math.sin(t * 2.4 + i) * 0.5
      if (legsL[i].current) legsL[i].current!.rotation.x = sw
      if (legsR[i].current) legsR[i].current!.rotation.x = -sw
    })
  })
  if (!show) return null
  const label = (name: string, color: string) => (
    <Html position={[0, 6.2, 0]} center pointerEvents="none" zIndexRange={[24, 0]}>
      <div style={{ ...nameTag, background: color }}>{name}</div>
    </Html>
  )
  return (
    <>
      <group ref={bodies[0]} scale={lanes[0].scale}><GundamModel legL={legsL[0]} legR={legsR[0]} />{label('GUNDAM', '#2f6bd6')}</group>
      <group ref={bodies[1]} scale={lanes[1].scale}><GodzillaModel legL={legsL[1]} legR={legsR[1]} />{label('GODZILLA', '#37503a')}</group>
      <group ref={bodies[2]} scale={lanes[2].scale}><BibendumModel legL={legsL[2]} legR={legsR[2]} />{label('BIBENDUM', '#c0392b')}</group>
    </>
  )
}

const nameTag: React.CSSProperties = {
  font: "800 12px 'Outfit', system-ui, sans-serif", color: '#fff', background: '#11151d',
  padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.25)',
  boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
}
// compact marker shown for far-away companies so the wide view isn't a wall of labels
const pinTag: React.CSSProperties = {
  font: "800 12px 'Outfit', system-ui, sans-serif", color: '#fff', background: '#11151d',
  width: 22, height: 22, display: 'grid', placeItems: 'center', borderRadius: '50%',
  border: '2px solid rgba(255,255,255,0.85)', boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
}
// small label for civic landmarks, shown only near the camera
const civicTag: React.CSSProperties = {
  font: "700 10px 'Outfit', system-ui, sans-serif", color: '#fff', background: 'rgba(20,24,34,0.82)',
  padding: '2px 7px', borderRadius: 999, whiteSpace: 'nowrap', letterSpacing: '0.02em',
}
const CIVIC_LABEL: Record<CivicKind, string> = {
  hotel: 'Hotel', mall: 'Mall', hospital: 'Hospital', school: 'School',
  police: 'Police', pool: 'Pool', park: 'Park',
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
          <mesh position={[0, 0.12, 0]} receiveShadow><boxGeometry args={[3.4, 0.4, 3.4]} /><meshStandardMaterial color="#8f8577" /></mesh>
          <mesh position={[0, 1.25, 0]} castShadow receiveShadow><boxGeometry args={[2.6, 2.0, 2.6]} /><meshStandardMaterial color="#efe6d3" /></mesh>
          {/* two window bands so the taller wall reads as two storeys */}
          <mesh position={[0, 0.95, 1.31]}><planeGeometry args={[2.0, 0.7]} /><meshStandardMaterial color="#f3ecdc" /></mesh>
          <mesh position={[0, 1.85, 1.31]}><planeGeometry args={[1.6, 0.5]} /><meshStandardMaterial color="#cfe6f5" /></mesh>
          <mesh position={[0, 1.5, 1.32]}><boxGeometry args={[2.64, 0.09, 0.04]} /><meshStandardMaterial color="#7a6a4c" /></mesh>
          {/* eaves flare + tall steep roof */}
          <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[2.5, 0.5, 4]} /><meshStandardMaterial color="#6a5a3c" flatShading /></mesh>
          <mesh position={[0, 3.15, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[2.05, 1.5, 4]} /><meshStandardMaterial color={accent} flatShading /></mesh>
          <mesh position={[0, 4.0, 0]}><boxGeometry args={[0.16, 0.4, 0.16]} /><meshStandardMaterial color="#6a5a3c" /></mesh>
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
      <Html position={[0, isVilla ? 4.7 : height + 1.4, 0]} center pointerEvents="none" zIndexRange={[30, 0]}>
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
        <div style={{ ...nameTag, background: '#1f6fd0' }}>Academy · Guide & resources</div>
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
          {/* scaffold + a tall yellow tower crane that towers over the block */}
          {[[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]].map(([x, z], i) => <mesh key={i} position={[x, 1.1, z]}><boxGeometry args={[0.08, 2.2, 0.08]} /><meshStandardMaterial color="#9aa0a8" /></mesh>)}
          <mesh position={[0, 1.7, 0]}><boxGeometry args={[1.5, 0.08, 1.5]} /><meshStandardMaterial color="#9aa0a8" /></mesh>
          {/* crane mast · lattice tower */}
          <mesh position={[1.0, 2.9, 1.0]}><boxGeometry args={[0.18, 5.8, 0.18]} /><meshStandardMaterial color="#f0b429" /></mesh>
          {[1.4, 2.4, 3.4, 4.4, 5.4].map((y) => <mesh key={y} position={[1.0, y, 1.0]} rotation={[0, Math.PI / 4, 0]}><boxGeometry args={[0.24, 0.05, 0.05]} /><meshStandardMaterial color="#c8901f" /></mesh>)}
          {/* jib arm + counter-jib + cab */}
          <mesh position={[-0.1, 5.8, 1.0]}><boxGeometry args={[2.9, 0.14, 0.14]} /><meshStandardMaterial color="#f0b429" /></mesh>
          <mesh position={[1.9, 5.55, 1.0]}><boxGeometry args={[0.5, 0.22, 0.3]} /><meshStandardMaterial color="#3a3f47" /></mesh>
          <mesh position={[1.0, 5.55, 1.0]}><boxGeometry args={[0.34, 0.34, 0.34]} /><meshStandardMaterial color="#e6564f" /></mesh>
          {/* hoist cable + hook + swinging load */}
          <mesh position={[-1.1, 5.2, 1.0]}><cylinderGeometry args={[0.015, 0.015, 1.2, 4]} /><meshStandardMaterial color="#222" /></mesh>
          <mesh position={[-1.1, 4.5, 1.0]} castShadow><boxGeometry args={[0.55, 0.4, 0.55]} /><meshStandardMaterial color="#b9762e" /></mesh>
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

// The metropolis is huge, so we only render what's near the camera. This reads
// the MapControls target each frame and re-renders (throttled) when you pan far
// enough that a new set of lots should come into view.
const CULL_R = 82
function useCityCenter(): [number, number] {
  const controls = useThree((s) => s.controls) as unknown as { target?: THREE.Vector3 } | null
  const [c, setC] = useState<[number, number]>([0, 0])
  const last = useRef<[number, number]>([0, 0])
  useFrame(() => {
    const t = controls?.target
    if (!t) return
    if (Math.hypot(t.x - last.current[0], t.z - last.current[1]) > 7) {
      last.current = [t.x, t.z]
      setC([t.x, t.z])
    }
  })
  return c
}

// ---- civic landmarks ---------------------------------------------------------
// window-band facade shared by the boxy civic buildings
function Bands({ w, d, floors, floorH, y0 }: { w: number; d: number; floors: number; floorH: number; y0: number }) {
  return <>{Array.from({ length: floors }).map((_, k) => (
    <mesh key={k} position={[0, y0 + 0.45 + k * floorH, d / 2 + 0.01]}><planeGeometry args={[w * 0.82, 0.42]} /><meshStandardMaterial color="#bcd8ef" metalness={0.15} roughness={0.2} /></mesh>
  ))}</>
}

function Hotel() {
  const floors = 7, floorH = 0.82, w = 2.5, d = 2.3, h = floors * floorH
  const sign = useMemo(() => brandSign('HOTEL', '#b8323a'), [])
  return (
    <group>
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow><boxGeometry args={[w + 0.2, 0.7, d + 0.2]} /><meshStandardMaterial color="#b8323a" /></mesh>
      <mesh position={[0, 0.7 + h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#efe6d3" /><Edges threshold={15} color="#d8ccb2" /></mesh>
      <Bands w={w} d={d} floors={floors} floorH={floorH} y0={0.7} />
      {/* entrance canopy */}
      <mesh position={[0, 0.72, d / 2 + 0.35]} rotation={[Math.PI * 0.12, 0, 0]} castShadow><boxGeometry args={[w * 0.7, 0.06, 0.6]} /><meshStandardMaterial color="#b8323a" /></mesh>
      <mesh position={[0, 0.7 + h + 0.1, 0]} castShadow><boxGeometry args={[w + 0.1, 0.16, d + 0.1]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
      <group position={[0, 0.7 + h + 0.6, 0]}>
        <mesh position={[-w * 0.32, -0.24, 0]}><boxGeometry args={[0.05, 0.5, 0.05]} /><meshStandardMaterial color="#7a8291" /></mesh>
        <mesh position={[w * 0.32, -0.24, 0]}><boxGeometry args={[0.05, 0.5, 0.05]} /><meshStandardMaterial color="#7a8291" /></mesh>
        <mesh><planeGeometry args={[w * 0.95, 0.5]} /><meshBasicMaterial map={sign} toneMapped={false} side={THREE.DoubleSide} /></mesh>
      </group>
    </group>
  )
}

function Mall() {
  const w = 3.4, d = 3.0, h = 1.9
  const sign = useMemo(() => brandSign('MALL', '#7a3ff0'), [])
  return (
    <group>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#f2f4f8" /><Edges threshold={15} color="#d6dbe4" /></mesh>
      {/* glass storefront */}
      <mesh position={[0, h * 0.42, d / 2 + 0.01]}><planeGeometry args={[w * 0.9, h * 0.6]} /><meshStandardMaterial color="#243447" metalness={0.4} roughness={0.15} /></mesh>
      <mesh position={[0, 0.5, d / 2 + 0.3]} rotation={[Math.PI * 0.1, 0, 0]} castShadow><boxGeometry args={[w * 0.95, 0.06, 0.7]} /><meshStandardMaterial color="#e2265f" /></mesh>
      {/* big rooftop billboard */}
      <mesh position={[0, h + 0.55, 0]}><boxGeometry args={[w * 0.9, 0.9, 0.12]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
      {[-1, 1].map((s) => <mesh key={s} position={[s * w * 0.3, h + 0.05, 0]}><boxGeometry args={[0.06, 0.3, 0.06]} /><meshStandardMaterial color="#8892a0" /></mesh>)}
    </group>
  )
}

function crossTex(): THREE.CanvasTexture {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64
  const g = c.getContext('2d')!; g.fillStyle = '#ffffff'; g.fillRect(0, 0, 64, 64)
  g.fillStyle = '#e5352b'; g.fillRect(26, 12, 12, 40); g.fillRect(12, 26, 40, 12)
  return new THREE.CanvasTexture(c)
}
function Hospital() {
  const w = 2.8, d = 2.5, h = 3.4
  const cross = useMemo(() => crossTex(), [])
  return (
    <group>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#fbfdff" /><Edges threshold={15} color="#dbe3ec" /></mesh>
      {Array.from({ length: 4 }).map((_, k) => (
        <mesh key={k} position={[0, 0.6 + k * 0.75, d / 2 + 0.01]}><planeGeometry args={[w * 0.82, 0.4]} /><meshStandardMaterial color="#bcd8ef" /></mesh>
      ))}
      {/* red cross on the facade + a rooftop cross */}
      <mesh position={[0, h * 0.7, d / 2 + 0.02]}><planeGeometry args={[0.8, 0.8]} /><meshBasicMaterial map={cross} toneMapped={false} /></mesh>
      <mesh position={[0, h + 0.1, 0]}><boxGeometry args={[w + 0.1, 0.16, d + 0.1]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
      <mesh position={[0, h + 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[1, 1]} /><meshBasicMaterial map={cross} toneMapped={false} /></mesh>
      {/* ambulance bay canopy */}
      <mesh position={[w * 0.1, 0.7, d / 2 + 0.5]} castShadow><boxGeometry args={[w * 0.8, 0.06, 0.9]} /><meshStandardMaterial color="#e5352b" /></mesh>
    </group>
  )
}

function School() {
  const w = 3.0, d = 2.4, h = 1.7
  const sign = useMemo(() => brandSign('SCHOOL', '#2f6bd6'), [])
  return (
    <group>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#c96a4a" /><Edges threshold={15} color="#a8543a" /></mesh>
      {[-1, 0, 1].map((x) => <mesh key={x} position={[x * w * 0.28, h * 0.5, d / 2 + 0.01]}><planeGeometry args={[0.5, 0.7]} /><meshStandardMaterial color="#f3ecdc" /></mesh>)}
      {/* pitched roof */}
      <mesh position={[0, h + 0.28, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[w * 0.62, 0.6, 4]} /><meshStandardMaterial color="#6a4433" flatShading /></mesh>
      {/* bell tower + flag */}
      <group position={[w * 0.32, 0, 0]}>
        <mesh position={[0, h + 0.4, 0]} castShadow><boxGeometry args={[0.6, 1.6, 0.6]} /><meshStandardMaterial color="#d3765a" /></mesh>
        <mesh position={[0, h + 1.2, 0.31]}><planeGeometry args={[0.34, 0.34]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
        <mesh position={[0, h + 1.35, 0]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[0.5, 0.4, 4]} /><meshStandardMaterial color="#6a4433" flatShading /></mesh>
      </group>
      <mesh position={[-w * 0.42, 1.1, d * 0.3]}><cylinderGeometry args={[0.03, 0.03, 2.2, 6]} /><meshStandardMaterial color="#9aa0a8" /></mesh>
      <mesh position={[-w * 0.42 + 0.3, 1.9, d * 0.3]}><planeGeometry args={[0.6, 0.36]} /><meshStandardMaterial color="#2f6bd6" side={THREE.DoubleSide} /></mesh>
    </group>
  )
}

function Police() {
  const w = 2.6, d = 2.4, h = 2.4
  const sign = useMemo(() => brandSign('POLICE', '#12233f'), [])
  return (
    <group>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#26426b" /><Edges threshold={15} color="#16294a" /></mesh>
      {Array.from({ length: 3 }).map((_, k) => (
        <mesh key={k} position={[0, 0.55 + k * 0.72, d / 2 + 0.01]}><planeGeometry args={[w * 0.82, 0.4]} /><meshStandardMaterial color="#a9c7e6" /></mesh>
      ))}
      <mesh position={[0, h * 0.78, d / 2 + 0.02]}><planeGeometry args={[w * 0.7, 0.4]} /><meshBasicMaterial map={sign} toneMapped={false} /></mesh>
      {/* entrance + blue roof beacon */}
      <mesh position={[0, 0.6, d / 2 + 0.28]} rotation={[Math.PI * 0.12, 0, 0]}><boxGeometry args={[w * 0.6, 0.05, 0.5]} /><meshStandardMaterial color="#12233f" /></mesh>
      <mesh position={[0, h + 0.18, 0]}><cylinderGeometry args={[0.18, 0.18, 0.24, 10]} /><meshBasicMaterial color="#2f8fff" toneMapped={false} /></mesh>
    </group>
  )
}

function Pool() {
  return (
    <group>
      {/* tiled deck */}
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[4, 3.6]} /><meshStandardMaterial color="#e9eef2" /></mesh>
      {/* water */}
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow><boxGeometry args={[3, 0.24, 2.4]} /><meshStandardMaterial color="#2fbfe0" metalness={0.2} roughness={0.15} /></mesh>
      {/* lane ropes */}
      {[-0.6, 0, 0.6].map((z) => <mesh key={z} position={[0, 0.26, z]}><boxGeometry args={[2.9, 0.03, 0.03]} /><meshStandardMaterial color="#ffffff" /></mesh>)}
      {/* diving board */}
      <group position={[-1.7, 0, 0]}>
        <mesh position={[0, 0.35, 0]}><boxGeometry args={[0.2, 0.5, 0.2]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
        <mesh position={[0.5, 0.55, 0]} castShadow><boxGeometry args={[1.0, 0.06, 0.4]} /><meshStandardMaterial color="#eef1f5" /></mesh>
      </group>
      {/* umbrella + loungers */}
      <group position={[1.5, 0, 1.2]}>
        <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}><boxGeometry args={[0.6, 0.16, 0.001]} /><meshStandardMaterial color="#ffffff" /></mesh>
        <mesh position={[0.3, 0.4, 0]}><cylinderGeometry args={[0.02, 0.02, 0.8, 6]} /><meshStandardMaterial color="#8a5a34" /></mesh>
        <mesh position={[0.3, 0.85, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[0.6, 0.3, 8]} /><meshStandardMaterial color="#e6564f" flatShading /></mesh>
      </group>
    </group>
  )
}

function ParkLot() {
  return (
    <group>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[4, 3.8]} /><meshStandardMaterial color="#7fc98a" roughness={1} /></mesh>
      {/* winding path */}
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[0.7, 3.6]} /><meshStandardMaterial color="#d8cba0" /></mesh>
      {/* pond */}
      <mesh position={[1.1, 0.05, -0.9]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.8, 24]} /><meshStandardMaterial color="#3aa7d8" metalness={0.2} roughness={0.25} /></mesh>
      {/* fountain */}
      <mesh position={[-1.0, 0.2, 0.8]}><cylinderGeometry args={[0.4, 0.45, 0.3, 16]} /><meshStandardMaterial color="#c3ccd6" /></mesh>
      <mesh position={[-1.0, 0.55, 0.8]}><cylinderGeometry args={[0.05, 0.05, 0.5, 6]} /><meshStandardMaterial color="#bfe0f5" /></mesh>
      {[[-1.4, -1.2], [1.4, 1.2], [0.2, 1.4]].map(([x, z], i) => <Tree key={i} position={[x, 0, z]} scale={1.1} blossom={i % 2 === 0} />)}
      {/* bench */}
      <mesh position={[0.1, 0.2, 1.0]}><boxGeometry args={[0.8, 0.08, 0.28]} /><meshStandardMaterial color="#8a5a34" /></mesh>
    </group>
  )
}

// a simple green lawn (pelouse) with a tree or two, for the open plots
function GrassLot({ lot }: { lot: Lot }) {
  const v = (lot.i * 7 + lot.j) % 3
  return (
    <group>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[4.2, 4.2]} /><meshStandardMaterial color="#7fc98a" roughness={1} /></mesh>
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.2, 24]} /><meshStandardMaterial color="#6bbf7a" /></mesh>
      <Tree position={[-1.1, 0, -0.9]} scale={1.0} blossom={v === 0} />
      {v !== 2 && <Tree position={[1.2, 0, 1.0]} scale={0.85} blossom={v === 1} />}
      {v === 2 && <mesh position={[0.6, 0.2, 0.6]}><boxGeometry args={[0.9, 0.1, 0.3]} /><meshStandardMaterial color="#8a5a34" /></mesh>}
    </group>
  )
}

function CivicBuilding({ kind, labeled }: { kind: CivicKind; labeled: boolean }) {
  const model = kind === 'hotel' ? <Hotel /> : kind === 'mall' ? <Mall /> : kind === 'hospital' ? <Hospital />
    : kind === 'school' ? <School /> : kind === 'police' ? <Police /> : kind === 'pool' ? <Pool /> : <ParkLot />
  return (
    <>
      {model}
      {labeled && (
        <Html position={[0, kind === 'pool' || kind === 'park' ? 1.4 : 4.4, 0]} center pointerEvents="none" zIndexRange={[26, 0]}>
          <div style={civicTag}>{CIVIC_LABEL[kind]}</div>
        </Html>
      )}
    </>
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
  for (let i = 0; i < GRID; i++) if (i % 3 === 0) out.push(i * CELL - HALF + CELL / 2)
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
        // crosswalks only near the middle of the map · keeps the mesh count sane
        Math.hypot(x, z) > 52 ? null : (
        <group key={`${x},${z}`} position={[x, 0.01, z]}>
          {stripes.map((s) => <mesh key={`h${s}`} rotation={[-Math.PI / 2, 0, 0]} position={[-1.9, 0, -1.0 + s * 0.4]}><planeGeometry args={[0.7, 0.22]} /><meshBasicMaterial color="#f2f4f6" /></mesh>)}
          {stripes.map((s) => <mesh key={`v${s}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[-1.0 + s * 0.4, 0, 1.9]}><planeGeometry args={[0.7, 0.22]} /><meshBasicMaterial color="#f2f4f6" /></mesh>)}
        </group>
        )
      )))}
    </group>
  )
}

function StreetTrees({ center }: { center: [number, number] }) {
  const spots = useMemo(() => {
    const out: [number, number, number][] = []
    ROAD_LINES.forEach((at) => {
      for (let p = -HALF + 3; p < HALF; p += 4.5) { out.push([at + 1.9, 0, p]); out.push([p, 0, at + 1.9]) }
    })
    return out.filter((_, i) => i % 3 === 0)
  }, [])
  // only the trees near the camera get drawn (huge map · keep it light)
  return <>{spots.map((s, i) => (Math.hypot(s[0] - center[0], s[2] - center[1]) > CULL_R ? null
    : <Tree key={i} position={s} scale={0.9 + (i % 3) * 0.12} blossom={i % 4 === 0} />))}</>
}

// ---- the scene --------------------------------------------------------------
function CityScene({ level, hqFloors, hqName, hqAccent, onEnter, onGuide, onTip, onSelectCo }: {
  level: number; hqFloors: number; hqName: string; hqAccent: string
  onEnter: () => void; onGuide: () => void; onTip: () => void; onSelectCo: (co: MockCo) => void
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
  const center = useCityCenter()

  // Our 15 showcase companies get their own HQs on the building lots ringing the
  // player's HQ — spread out (every other building lot) so they read as a cluster
  // of neighbouring startups rather than a wall.
  const companyByLot = useMemo(() => {
    const map = new Map<string, MockCo>()
    if (!SHOW_MOCK_COMPANIES) return map // fake companies are hidden from the app
    const candidates = sorted.filter((l) => l.kind === 'building' && !reserved.has(l.id) && Math.hypot(l.cx, l.cz) < builtRadius)
    let ci = 0
    for (let k = 0; k < candidates.length && ci < MOCK_COMPANIES.length; k += 2) {
      map.set(candidates[k].id, MOCK_COMPANIES[ci++])
    }
    return map
  }, [sorted, reserved, builtRadius])

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
      <StreetTrees center={center} />

      {sorted.map((l) => {
        if (reserved.has(l.id)) return null
        // cull anything far from the camera · the metropolis is huge
        const camDist = Math.hypot(l.cx - center[0], l.cz - center[1])
        if (camDist > CULL_R) return null
        // show text labels only when zoomed in enough and near the camera, so the
        // widest view isn't a wall of tags (companies fall back to compact pins).
        const near = camDist < 46 && level >= 1
        const dist = Math.hypot(l.cx, l.cz)
        // one of our showcase companies?
        const co = companyByLot.get(l.id)
        if (co) {
          return <group key={l.id} position={[l.cx, 0, l.cz]}><CompanyBuilding co={co} onSelect={() => onSelectCo(co)} labeled={level >= 1} /></group>
        }
        // a civic landmark (hotel, mall, hospital, school, police, pool, park)?
        if (l.civic) {
          return <group key={l.id} position={[l.cx, 0, l.cz]}><CivicBuilding kind={l.civic} labeled={near} /></group>
        }
        // open plots → lawns or construction sites (varied); edges → construction.
        if (l.kind === 'available') {
          return (l.i + l.j) % 2 === 0
            ? <group key={l.id} position={[l.cx, 0, l.cz]}><GrassLot lot={l} /></group>
            : <ConstructionSite key={l.id} lot={l} />
        }
        // near the centre → finished ambient buildings; toward the edges → sites.
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
      <GiantMonsters show />
      <Clouds center={center} />
      <SkyEvents show={level >= 1} />
    </>
  )
}

const TIPS = [
  'Tip: describe your company in one sentence — your CEO builds the website, the offer and the growth plan.',
  'Tip: connect your agents (Email, Meta, SEO) in the Studio to delegate B2B growth.',
  'Tip: each new Dojo adds a floor to your building in the city.',
  'Tip: buy credits in your own currency — no crypto to manage, everything settles behind the scenes.',
  'Tip: tune your CEO’s autonomy so it doesn’t loop and your credits last longer.',
]

// ---- company fiche · opens when you click one of our showcase HQs -----------
// Shows the company in its own brand identity (colours + typeface): a live
// mini-site preview (its "app"), its running ad campaign, today's numbers and a
// founder quote, plus a link into the full showcase.
function CompanyFiche({ co, onClose }: { co: MockCo; onClose: () => void }) {
  const t = co.theme
  const rev = coRevenue(co)
  const sales = coSales(co)
  return (
    <div className="cofiche-scrim" onClick={onClose}>
      <div
        className="cofiche"
        onClick={(e) => e.stopPropagation()}
        style={{ ['--bg' as any]: t.bg, ['--ink' as any]: t.ink, ['--sub' as any]: t.sub, ['--ac' as any]: t.accent, ['--rad' as any]: t.radius + 'px', fontFamily: t.font }}
      >
        <button className="cofiche-x" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="cofiche-head">
          <span className="cofiche-logo" style={{ background: t.accent }}>{co.name[0]}</span>
          <div>
            <h3 style={t.upper ? { textTransform: 'uppercase', letterSpacing: '.05em' } : undefined}>{co.name}</h3>
            <span className="cofiche-cat">{co.cat} · {co.handle}</span>
          </div>
        </div>
        <p className="cofiche-mission">{co.mission}</p>

        {/* mini-site preview · the company's "app" in its own look */}
        <div className="cofiche-site">
          <div className="cofiche-chrome"><span /><span /><span /><em>{co.handle.replace('@', '')}.co</em></div>
          <div className="cofiche-site-body">
            <h4 style={t.upper ? { textTransform: 'uppercase' } : undefined}>{co.site.headline}</h4>
            <p>{co.site.sub}</p>
            <span className="cofiche-cta" style={{ background: t.accent }}>{co.site.cta}</span>
          </div>
        </div>

        {/* running ad campaign */}
        <div className="cofiche-ad">
          <span className="cofiche-ad-tag" style={{ background: t.accent }}>PUB</span>
          <div><b>{co.ad.headline}</b><span>{co.ad.body}</span></div>
        </div>

        {/* today's numbers (drift daily) */}
        <div className="cofiche-stats">
          <div><span className="cofiche-n">${rev.toLocaleString('en-US')}</span><span className="cofiche-l">Revenu · aujourd’hui</span></div>
          <div><span className="cofiche-n">{sales.toLocaleString('en-US')}</span><span className="cofiche-l">Ventes · aujourd’hui</span></div>
        </div>

        <p className="cofiche-quote">“{co.testimonial.quote}” <b>— {co.testimonial.author}</b></p>

        <div className="cofiche-actions">
          <a className="cofiche-open" href={companyPath(co)} style={{ background: t.accent }}>Ouvrir le site ↗</a>
          <a className="cofiche-open ghost" href="/#showcase">Toutes les entreprises</a>
        </div>
      </div>
    </div>
  )
}

// ---- public component -------------------------------------------------------
export function DojoCity({ enterDojo, exit }: { enterDojo: () => void; exit: () => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeDojoId = useWorkshop((s) => s.activeDojoId)
  const account = useWorkshop((s) => s.account)

  const [level, setLevel] = useState(1)
  const [tip, setTip] = useState<string | null>(null)
  const [co, setCo] = useState<MockCo | null>(null)

  const floors = Math.max(1, dojos.length)
  const active = dojos.find((d) => d.id === activeDojoId) ?? dojos[0]
  const hqName = account?.name || active?.name || 'Mon Dojo'
  const hqAccent = templateById(active?.template).palette?.accent || '#ef7d9d'

  const showTip = () => setTip(TIPS[Math.floor((Date.now() / 1000) % TIPS.length)])

  return (
    <div className="dojo-city">
      <Canvas shadows dpr={[1, 1.4]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <color attach="background" args={['#bfe1fb']} />
        <CityScene
          level={level}
          hqFloors={floors}
          hqName={hqName}
          hqAccent={hqAccent}
          onEnter={enterDojo}
          onGuide={() => { window.location.href = '/guide' }}
          onTip={showTip}
          onSelectCo={setCo}
        />
      </Canvas>

      {co && <CompanyFiche co={co} onClose={() => setCo(null)} />}

      <div className="city-top">
        <div className="city-title">
          <h1>Dojo City</h1>
          <p>A whole metropolis: hotels, shopping malls, hospitals, schools, parks and pools. Your building grows one floor per Dojo. Watch out for the giants roaming around.</p>
        </div>
        <button className="btn tiny ghost city-exit" onClick={exit}>← Dashboard</button>
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

      {/* mobile bottom navigation bar */}
      <PageBar current="city" />
    </div>
  )
}
