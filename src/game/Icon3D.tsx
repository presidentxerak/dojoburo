// LES ICÔNES 3D DU PROFIL, ET L'AVATAR DE GRADE.
//
// POURQUOI · demandé : « ajoute des onglets [...] avec de belles icônes 3D et
// personnages pour mettre du fun ». Chaque onglet du profil porte un petit
// objet modelé (une médaille, des livres, un cadenas, un engrenage, un
// graphique), et l'élève est représenté par le personnage de son grade.
//
// AUCUN CANVAS VIVANT DE PLUS · ces objets passent par la même fabrique que
// les portraits des cartes (components/three/snapshotFactory) : un seul
// contexte WebGL caché les dessine UNE fois, en image, puis se referme. La page
// affiche des <img>. C'est ce qui permet d'en mettre partout (l'en-tête de
// chaque écran, les onglets, l'échelle des grades) sans rien coûter à
// l'animation des dojos, qu'on vient justement d'alléger.
//
// JAMAIS VIDE · tant que l'image n'est pas prête (ou si WebGL est refusé),
// l'icône plate du même sens s'affiche à sa place.
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import * as THREE from 'three'
import { RoundedBox } from '@react-three/drei'
import { BauhausIcon } from '../components/BauhausIcon'
import type { IconName } from '../data/icons'
import { requestNodeSnapshot, requestSnapshot, cachedSnapshot, skinKey } from '../components/three/snapshotFactory'
import { Character3D } from '../components/three/Character3D'
import type { Rank } from './ranks'

export type Icon3DName = 'progress' | 'badges' | 'trainings' | 'account' | 'settings'

const FALLBACK: Record<Icon3DName, IconName> = {
  progress: 'bars',
  badges: 'star',
  trainings: 'training',
  account: 'lock',
  settings: 'gear',
}

/* ------------------------------------------------------------------ */
/* Les objets                                                          */
/* ------------------------------------------------------------------ */

const GOLD = { color: '#fbbf24', metalness: 0.55, roughness: 0.28 }
const TILT: [number, number, number] = [0.32, -0.5, 0]
const TAU = Math.PI * 2

function Mat({ color, metalness = 0.1, roughness = 0.45 }: { color: string; metalness?: number; roughness?: number }) {
  return <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
}

function starShape(outer: number, inner: number): THREE.Shape {
  const s = new THREE.Shape()
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? inner : outer
    const a = Math.PI / 2 + (i * Math.PI) / 5
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r
    if (i === 0) s.moveTo(x, y)
    else s.lineTo(x, y)
  }
  s.closePath()
  return s
}

function Star({ size = 0.5, depth = 0.14, color = GOLD.color, position = [0, 0, 0] as [number, number, number] }) {
  const geo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(starShape(size, size * 0.45), { depth, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 })
    g.center()
    return g
  }, [size, depth])
  return (
    <mesh geometry={geo} position={position}>
      <Mat color={color} metalness={0.55} roughness={0.25} />
    </mesh>
  )
}

/** PROGRESSION · trois barres qui montent, une étoile au sommet. */
function Progress({ t = 0 }: { t?: number }) {
  // LES BARRES RESPIRENT, décalées l'une de l'autre, et l'étoile tourne sur
  // elle-même : c'est une progression qui avance.
  const base: [number, number, string][] = [[-0.62, 0.8, '#c4b5fd'], [0, 1.25, '#a78bfa'], [0.62, 1.75, '#7c3aed']]
  const bars = base.map(([x, h, c], i) => [x, h * (0.8 + 0.2 * (0.5 + 0.5 * Math.sin(TAU * t + i * 2.1))), c] as [number, number, string])
  const top = bars[2][1]
  return (
    <group rotation={TILT} position={[0, 0.05, 0]}>
      <RoundedBox args={[2.1, 0.16, 0.9]} radius={0.06} position={[0, -1.02, 0]}>
        <Mat color="#3b1d7a" />
      </RoundedBox>
      {bars.map(([x, h, c]) => (
        <RoundedBox key={x} args={[0.46, h, 0.46]} radius={0.08} position={[x, -0.94 + h / 2, 0]}>
          <Mat color={c} roughness={0.35} />
        </RoundedBox>
      ))}
      <group position={[0.62, -0.94 + top + 0.3, 0]} rotation={[0, TAU * t, 0]}>
        <Star size={0.34} />
      </group>
    </group>
  )
}

/** BADGES · une médaille dorée à ruban violet. */
function Badges({ t = 0 }: { t?: number }) {
  // LA MÉDAILLE SE BALANCE au bout de son ruban, pendue par le haut.
  const swing = 0.2 * Math.sin(TAU * t)
  return (
    <group rotation={[0.18, -0.42, swing]} position={[0, -0.05, 0]}>
      <mesh position={[-0.28, 0.95, -0.08]} rotation={[0, 0, -0.38]}>
        <boxGeometry args={[0.42, 1.2, 0.08]} />
        <Mat color="#7c3aed" />
      </mesh>
      <mesh position={[0.28, 0.95, -0.1]} rotation={[0, 0, 0.38]}>
        <boxGeometry args={[0.42, 1.2, 0.08]} />
        <Mat color="#a78bfa" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.82, 0.82, 0.2, 48]} />
        <Mat {...GOLD} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0.06]}>
        <cylinderGeometry args={[0.64, 0.64, 0.2, 48]} />
        <Mat color="#f59e0b" metalness={0.5} roughness={0.3} />
      </mesh>
      <Star size={0.42} depth={0.1} color="#fde68a" position={[0, -0.15, 0.2]} />
    </group>
  )
}

/** FORMATIONS · une pile de livres coiffée d'une toque. */
function Trainings({ t = 0 }: { t?: number }) {
  // LA TOQUE SAUTE ET TOURNE, comme lancée le jour de la remise des diplômes.
  const hop = 0.22 * Math.max(0, Math.sin(TAU * t))
  const books: [number, string, number][] = [[-0.85, '#7c3aed', 0.05], [-0.47, '#ec4899', -0.12], [-0.09, '#f59e0b', 0.1]]
  return (
    <group rotation={TILT} position={[0, 0.05, 0]}>
      {books.map(([y, c, r]) => (
        <group key={y} position={[0, y, 0]} rotation={[0, r, 0]}>
          <RoundedBox args={[1.7, 0.36, 1.1]} radius={0.05}>
            <Mat color={c} />
          </RoundedBox>
          <mesh position={[0.06, 0, 0]}>
            <boxGeometry args={[1.62, 0.26, 1.12]} />
            <Mat color="#fef3c7" roughness={0.8} />
          </mesh>
        </group>
      ))}
      <group position={[0, 0.34 + hop, 0]} rotation={[0, 0.5 + TAU * t, hop * 0.6]}>
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.36, 0.4, 0.3, 24]} />
          <Mat color="#1e1b4b" />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1.15, 0.08, 1.15]} />
          <Mat color="#27214f" />
        </mesh>
        <mesh position={[0.45, -0.12, 0.45]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <Mat {...GOLD} />
        </mesh>
        <mesh position={[0.45, -0.02, 0.45]}>
          <cylinderGeometry args={[0.025, 0.025, 0.22, 8]} />
          <Mat {...GOLD} />
        </mesh>
      </group>
    </group>
  )
}

/** COMPTE · un cadenas violet à anse dorée. */
function Account({ t = 0 }: { t?: number }) {
  // LE CADENAS S'OUVRE ET SE REFERME · l'anse monte, puis revient.
  const open = 0.2 * Math.max(0, Math.sin(TAU * t))
  return (
    <group rotation={[TILT[0], TILT[1], 0.05 * Math.sin(TAU * t * 2)]} position={[0, -0.1, 0]}>
      <group position={[0, open, 0]}>
        <mesh position={[0, 0.45, 0]}>
          <torusGeometry args={[0.46, 0.12, 16, 40, Math.PI]} />
          <Mat {...GOLD} />
        </mesh>
        <mesh position={[-0.46, 0.3, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
          <Mat {...GOLD} />
        </mesh>
        <mesh position={[0.46, 0.3, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
          <Mat {...GOLD} />
        </mesh>
      </group>
      <RoundedBox args={[1.5, 1.2, 0.62]} radius={0.16} position={[0, -0.35, 0]}>
        <Mat color="#7c3aed" roughness={0.3} />
      </RoundedBox>
      <mesh position={[0, -0.22, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 20]} />
        <Mat color="#1e1b4b" />
      </mesh>
      <mesh position={[0, -0.46, 0.32]}>
        <boxGeometry args={[0.1, 0.3, 0.06]} />
        <Mat color="#1e1b4b" />
      </mesh>
    </group>
  )
}

function Gear({ r, teeth, color, position, rot = 0 }: { r: number; teeth: number; color: string; position: [number, number, number]; rot?: number }) {
  return (
    <group position={position} rotation={[0, 0, rot]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[r, r, 0.3, 40]} />
        <Mat color={color} metalness={0.6} roughness={0.3} />
      </mesh>
      {Array.from({ length: teeth }, (_, i) => {
        const a = (i / teeth) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * (r + 0.1), Math.sin(a) * (r + 0.1), 0]} rotation={[0, 0, a]}>
            <boxGeometry args={[0.26, r * 0.42, 0.3]} />
            <Mat color={color} metalness={0.6} roughness={0.3} />
          </mesh>
        )
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[r * 0.36, r * 0.36, 0.34, 28]} />
        <Mat color="#1e1b4b" />
      </mesh>
    </group>
  )
}

/** PARAMÈTRES · deux engrenages qui s'emboîtent. */
function Settings({ t = 0 }: { t?: number }) {
  // LES ENGRENAGES TOURNENT ENSEMBLE, en sens contraire · chacun avance d'une
  // dent par cycle, ce qui rend la boucle parfaite (une dent ressemble à la
  // suivante).
  return (
    <group rotation={TILT}>
      <Gear r={0.72} teeth={10} color="#cbd5e1" position={[-0.3, 0.1, 0]} rot={(-TAU / 10) * t} />
      <Gear r={0.42} teeth={8} color="#a78bfa" position={[0.72, -0.62, 0.12]} rot={0.2 + (TAU / 8) * t} />
    </group>
  )
}

const OBJECTS: Record<Icon3DName, (p: { t?: number }) => JSX.Element> = {
  progress: Progress,
  badges: Badges,
  trainings: Trainings,
  account: Account,
  settings: Settings,
}

/* ------------------------------------------------------------------ */
/* LES BANDES D'IMAGES · « les icônes animées en fonction de leur thème » */
/* ------------------------------------------------------------------ */
//
// Une icône animée n'est PAS un canvas vivant de plus. La fabrique dessine
// l'objet à FRAMES instants de son mouvement (t de 0 à 1, une boucle), puis
// les images sont collées côte à côte en une seule bande. La page fait défiler
// la bande par à-coups (CSS steps), comme un dessin animé : zéro WebGL une
// fois la bande faite, et elle est gardée pour la session.

const FRAMES = 16
const strips = new Map<string, string>()
const pendingStrips = new Map<string, Promise<string>>()

function readStored(key: string): string | null {
  try { return sessionStorage.getItem(key) } catch { return null }
}

/** La bande d'images d'une scène animée · `render(t)` rend l'instant t. */
export function requestStrip(key: string, render: (t: number) => ReactNode): Promise<string> {
  const hit = strips.get(key) ?? readStored(key)
  if (hit) { strips.set(key, hit); return Promise.resolve(hit) }
  const pending = pendingStrips.get(key)
  if (pending) return pending
  const job = (async () => {
    const urls = await Promise.all(
      Array.from({ length: FRAMES }, (_, i) => requestNodeSnapshot(`${key}#${i}`, render(i / FRAMES))),
    )
    if (urls.some((u) => !u)) return ''
    const imgs = await Promise.all(urls.map((u) => new Promise<HTMLImageElement>((ok, ko) => {
      const im = new Image()
      im.onload = () => ok(im)
      im.onerror = ko
      im.src = u
    })))
    const w = imgs[0].naturalWidth
    const h = imgs[0].naturalHeight
    const c = document.createElement('canvas')
    c.width = w * FRAMES
    c.height = h
    const g = c.getContext('2d')
    if (!g) return ''
    imgs.forEach((im, i) => g.drawImage(im, i * w, 0, w, h))
    const strip = c.toDataURL('image/png')
    strips.set(key, strip)
    try { sessionStorage.setItem(key, strip) } catch { /* plein ou refusé */ }
    return strip
  })().catch(() => '')
  pendingStrips.set(key, job)
  job.finally(() => pendingStrips.delete(key))
  return job
}

export function cachedStrip(key: string): string | null {
  return strips.get(key) ?? readStored(key)
}

/** Une bande qui défile · la première image seule en mouvement réduit (la
 *  feuille de style arrête l'animation, voir .i3d-strip). */
function Strip({ url, size, dur }: { url: string; size: number; dur: number }) {
  return (
    <span className="i3d-win" style={{ width: size, height: size }}>
      <img className="i3d-strip" src={url} alt="" draggable={false}
        style={{ width: size * FRAMES, height: size, ['--dur' as string]: `${dur}ms` }} />
    </span>
  )
}

/** Le rythme de chaque objet · un engrenage tourne vite, une médaille se
 *  balance lentement. */
const DURATION: Record<Icon3DName, number> = {
  progress: 2400,
  badges: 2000,
  trainings: 2600,
  account: 2200,
  settings: 1500,
}

const iconKey = (name: Icon3DName) => `icon3d:${name}:3`

/** Une icône 3D animée · l'icône plate le temps que la bande arrive. */
export function Icon3D({ name, size = 40, className = '' }: { name: Icon3DName; size?: number; className?: string }) {
  const key = iconKey(name)
  const [url, setUrl] = useState<string | null>(() => cachedStrip(key))
  useEffect(() => {
    if (url) return
    let alive = true
    const Obj = OBJECTS[name]
    // UN PEU PLUS GRAND QUE LE CADRE D'UN PORTRAIT · un objet seul doit
    // remplir sa pastille, là où un personnage garde de l'air autour de lui.
    requestStrip(key, (t) => <group scale={1.32} position={[0, 0.2, 0]}><Obj t={t} /></group>)
      .then((u) => { if (alive && u) setUrl(u) })
    return () => { alive = false }
  }, [key, name, url])
  return (
    <span className={`i3d ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {url
        ? <Strip url={url} size={size} dur={DURATION[name]} />
        : <BauhausIcon name={FALLBACK[name]} size={Math.round(size * 0.6)} />}
    </span>
  )
}

/** L'AVATAR DE GRADE · le personnage du grade, dans l'anneau de sa ceinture.
 *  `locked` le montre en silhouette, pour l'échelle des grades à venir.
 *  `animated` le fait vivre : il se tourne d'un côté puis de l'autre en
 *  sautillant, dessiné en bande d'images comme les icônes (voir plus haut). */
export function GradeAvatar({ rank, size = 36, locked = false, animated = false, className = '' }: {
  rank: Rank
  size?: number
  locked?: boolean
  animated?: boolean
  className?: string
}) {
  const c = rank.character
  const id = skinKey(c)
  const stripKey = `grade:${id}:1`
  const [url, setUrl] = useState<string | null>(() => cachedSnapshot(c))
  const [strip, setStrip] = useState<string | null>(() => (animated ? cachedStrip(stripKey) : null))
  useEffect(() => {
    if (url) return
    let alive = true
    requestSnapshot(c).then((u) => { if (alive && u) setUrl(u) })
    return () => { alive = false }
  }, [c, url])
  useEffect(() => {
    if (!animated || locked || strip) return
    let alive = true
    requestStrip(stripKey, (t) => (
      <group position={[0, -1.55 + 0.07 * Math.abs(Math.sin(TAU * t)), 0]} rotation={[0, 0.42 * Math.sin(TAU * t), 0]}>
        <Character3D bare id={id} character={c} x={0} z={0} mood="happy" selected={false} busy={false} name="" level={1} onSelect={() => {}} />
      </group>
    )).then((u) => { if (alive && u) setStrip(u) })
    return () => { alive = false }
  }, [animated, locked, strip, stripKey, id, c])
  const inner = Math.round(size * 1.18)
  return (
    <span
      className={`gav gav-${rank.id}${locked ? ' locked' : ''} ${className}`}
      style={{ width: size, height: size, ['--belt' as string]: rank.tint }}
      aria-hidden="true"
    >
      {strip && !locked
        ? <span className="gav-win" style={{ width: inner, height: inner }}>
            <img className="i3d-strip" src={strip} alt="" draggable={false}
              style={{ width: inner * FRAMES, height: inner, ['--dur' as string]: '2600ms' }} />
          </span>
        : url
          ? <img src={url} alt="" draggable={false} />
          : <span className="gav-fb"><BauhausIcon name="smile" size={Math.round(size * 0.5)} /></span>}
    </span>
  )
}
