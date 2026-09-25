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
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { RoundedBox } from '@react-three/drei'
import { BauhausIcon } from '../components/BauhausIcon'
import type { IconName } from '../data/icons'
import { requestNodeSnapshot, cachedNodeSnapshot, requestSnapshot, cachedSnapshot } from '../components/three/snapshotFactory'
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
function Progress() {
  const bars: [number, number, string][] = [[-0.62, 0.8, '#c4b5fd'], [0, 1.25, '#a78bfa'], [0.62, 1.75, '#7c3aed']]
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
      <Star size={0.34} position={[0.62, 1.2, 0]} />
    </group>
  )
}

/** BADGES · une médaille dorée à ruban violet. */
function Badges() {
  return (
    <group rotation={[0.18, -0.42, 0]} position={[0, -0.05, 0]}>
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
function Trainings() {
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
      <group position={[0, 0.34, 0]} rotation={[0, 0.5, 0]}>
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
function Account() {
  return (
    <group rotation={TILT} position={[0, -0.1, 0]}>
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
function Settings() {
  return (
    <group rotation={TILT}>
      <Gear r={0.72} teeth={10} color="#cbd5e1" position={[-0.3, 0.1, 0]} />
      <Gear r={0.42} teeth={8} color="#a78bfa" position={[0.72, -0.62, 0.12]} rot={0.2} />
    </group>
  )
}

const OBJECTS: Record<Icon3DName, () => JSX.Element> = {
  progress: Progress,
  badges: Badges,
  trainings: Trainings,
  account: Account,
  settings: Settings,
}

/* ------------------------------------------------------------------ */
/* Les images                                                          */
/* ------------------------------------------------------------------ */

const iconKey = (name: Icon3DName) => `icon3d:${name}:1`

/** Une icône 3D, en image · l'icône plate le temps qu'elle arrive. */
export function Icon3D({ name, size = 40, className = '' }: { name: Icon3DName; size?: number; className?: string }) {
  const key = iconKey(name)
  const [url, setUrl] = useState<string | null>(() => cachedNodeSnapshot(key))
  useEffect(() => {
    if (url) return
    let alive = true
    const Obj = OBJECTS[name]
    requestNodeSnapshot(key, <Obj />).then((u) => { if (alive && u) setUrl(u) })
    return () => { alive = false }
  }, [key, name, url])
  return (
    <span className={`i3d ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {url
        ? <img src={url} width={size} height={size} alt="" draggable={false} />
        : <BauhausIcon name={FALLBACK[name]} size={Math.round(size * 0.6)} />}
    </span>
  )
}

/** L'AVATAR DE GRADE · le personnage du grade, dans l'anneau de sa ceinture.
 *  `locked` le montre en silhouette, pour l'échelle des grades à venir. */
export function GradeAvatar({ rank, size = 36, locked = false, className = '' }: {
  rank: Rank
  size?: number
  locked?: boolean
  className?: string
}) {
  const [url, setUrl] = useState<string | null>(() => cachedSnapshot(rank.character))
  useEffect(() => {
    if (url) return
    let alive = true
    requestSnapshot(rank.character).then((u) => { if (alive && u) setUrl(u) })
    return () => { alive = false }
  }, [rank.character, url])
  return (
    <span
      className={`gav gav-${rank.id}${locked ? ' locked' : ''} ${className}`}
      style={{ width: size, height: size, ['--belt' as string]: rank.tint }}
      aria-hidden="true"
    >
      {url
        ? <img src={url} alt="" draggable={false} />
        : <span className="gav-fb"><BauhausIcon name="smile" size={Math.round(size * 0.5)} /></span>}
    </span>
  )
}
