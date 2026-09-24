// DOJOBURO · la salle en trois dimensions.
//
// Le studio est un dojo : douze bureaux en trois rangées, le maître sur son
// estrade au fond, la porte derrière lui. Les clients entrent par cette porte,
// descendent l'allée de gauche jusqu'au comptoir, devant, et attendent qu'on
// prenne leur brief. Servis, ils repartent contents ; ignorés trop longtemps,
// ils repartent fâchés.
//
// CE QUE LA SCÈNE MONTRE DU JEU, ET RIEN D'AUTRE · la scène ne décide rien.
// Elle lit l'état du moteur (qui travaille, qui est fatigué, qui attend) et
// le met en scène. Toute la règle est dans engine.ts ; une scène qui en
// portait une moitié finirait par contredire le panneau.
//
// LE RENDU · ombres douces sur une seule lumière clé, une lumière d'appoint
// violette en contre-jour pour décoller les silhouettes du fond, deux
// lanternes chaudes, et le mappage de tons cinéma. C'est le même kit que la
// salle de classe, poussé d'un cran : ombres portées actives, et une scène
// qui ne dessine qu'à l'écran visible (voir `paused`).
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../components/three/Decor3D'
import { Character3D } from '../components/three/Character3D'
import { Sensei3D } from '../components/three/Sensei3D'
import { GaitProvider, advance, type Gait } from '../components/three/gait'
import { doorAt, BACK_Z } from '../components/three/stage'
import { templateById } from '../data/templates'
import { WALKERS, DOJO_CAST } from '../data/cast'
import type { Character } from '../data/looks'
import type { Mood } from '../store'
import type { Department } from '../data/agents'
import { SKILLS, type Skill } from './types'
import { staffCharacter, staffShort } from './staff'
import type { Lang } from '../i18n/lang'

/* ------------------------------------------------------------------ */
/* LE PLAN DE LA SALLE                                                 */
/* ------------------------------------------------------------------ */

const COLS = [-6, -2, 2, 6]
const ROWS = [-3.0, -0.2, 2.6]
/** où travaille chaque spécialiste · trois rangées de quatre, dans l'ordre
 *  de SKILLS, pour que la salle et le panneau se lisent dans le même ordre */
export const DESK: Record<Skill, [number, number]> = Object.fromEntries(
  SKILLS.map((s, i) => [s, [COLS[i % 4], ROWS[Math.floor(i / 4)]]]),
) as Record<Skill, [number, number]>

/** le comptoir · trois places devant, face à la salle */
const SLOTS: [number, number][] = [[-3.4, 5.6], [0, 5.9], [3.4, 5.6]]
/** l'allée · entre la première et la deuxième colonne de bureaux */
const AISLE_X = -4

/* ------------------------------------------------------------------ */
/* LES CLIENTS                                                         */
/* ------------------------------------------------------------------ */

export interface ClientView {
  uid: string
  /** 0, 1 ou 2 · sa place au comptoir */
  slot: number
  state: 'waiting' | 'happy' | 'angry'
}

/** Le personnage d'un client · tiré de son identifiant, donc le même tout au
 *  long de sa visite. Les clients ne sont pas l'équipe : ils portent les
 *  visages des élèves des classes et des spécialistes des salles de métier. */
const CLIENT_LOOKS: Character[] = [...WALKERS, ...Object.values(DOJO_CAST).map((c) => c.lead)]
const lookOf = (uid: string) => {
  let h = 0
  for (let i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) >>> 0
  return CLIENT_LOOKS[h % CLIENT_LOOKS.length]
}

/** Le trajet d'un client · de la porte au comptoir par l'allée, ou l'inverse. */
function pathTo(slot: [number, number]): [number, number][] {
  const door = doorAt(true)
  return [[door.x, BACK_Z + 0.4], [door.x, BACK_Z + 1.6], [AISLE_X, BACK_Z + 1.6], [AISLE_X, slot[1] - 1.2], slot]
}

function Client({ view, onGone }: { view: ClientView; onGone: (uid: string) => void }) {
  const g = useRef<THREE.Group>(null)
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  const slot = SLOTS[view.slot % SLOTS.length]
  const inPath = useMemo(() => pathTo(slot), [slot])
  const st = useRef({ path: inPath, i: 1, x: inPath[0][0], z: inPath[0][1], leaving: false, gone: false })
  const leaving = view.state !== 'waiting'

  // LE DÉPART · on repart du point où l'on est, vers la porte, par l'allée
  useEffect(() => {
    if (!leaving) return
    const s = st.current
    const back = [...inPath].reverse()
    s.path = [[s.x, s.z], ...back.slice(1)]
    s.i = 1
    s.leaving = true
  }, [leaving, inPath])

  useFrame((_, raw) => {
    const o = g.current
    const s = st.current
    if (!o || s.gone) return
    const dt = Math.min(raw, 0.1)
    const target = s.path[s.i]
    let speed = 0
    if (target) {
      const dx = target[0] - s.x
      const dz = target[1] - s.z
      const d = Math.hypot(dx, dz)
      const v = s.leaving ? 3 : 2.6
      if (d < 0.05) {
        s.i++
        if (s.i >= s.path.length && s.leaving) { s.gone = true; onGone(view.uid); return }
      } else {
        const step = Math.min(d, v * dt)
        s.x += (dx / d) * step
        s.z += (dz / d) * step
        speed = v
        o.rotation.y += (Math.atan2(dx, dz) - o.rotation.y) * Math.min(1, dt * 10)
      }
    }
    if (!speed) {
      // à sa place au comptoir, il regarde vers la salle, c'est-à-dire vers toi
      o.rotation.y += (0 - o.rotation.y) * Math.min(1, dt * 6)
    }
    gait.current.speed = speed
    if (speed) advance(gait.current, dt)
    o.position.set(s.x, 0, s.z)
  })

  const mood: Mood = view.state === 'happy' ? 'happy' : view.state === 'angry' ? 'error' : 'idle'
  return (
    <GaitProvider value={gait}>
      <group ref={g}>
        <Character3D id={`client-${view.uid}`} character={lookOf(view.uid)} fn="Product" x={0} z={0}
          mood={mood} selected={false} busy={false} walk bare onSelect={() => {}} />
      </group>
    </GaitProvider>
  )
}

/** L'ACCUEIL · trois tapis ronds marquent où les clients attendent. */
function Welcome() {
  return (
    <group>
      {SLOTS.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.025, 0]} receiveShadow>
            <circleGeometry args={[0.95, 40]} />
            <meshStandardMaterial color="#7c3aed" roughness={0.9} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
            <ringGeometry args={[0.72, 0.8, 40]} />
            <meshStandardMaterial color="#c4b5fd" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* L'ÉQUIPE                                                            */
/* ------------------------------------------------------------------ */

export interface StaffView {
  busy: boolean
  tired: boolean
  down: boolean
  level: number
  /** un travail vient de finir · il réagit quelques secondes */
  flash: 'happy' | 'error' | null
  picked: boolean
}

function Specialist({ skill, view, lang, onPick }: { skill: Skill; view: StaffView; lang: Lang; onPick: (s: Skill) => void }) {
  const [x, z] = DESK[skill]
  // L'HUMEUR DIT L'ÉTAT · au travail il tape, fatigué et libre il somnole,
  // absent il dort, et un travail qui vient de finir se voit sur son visage.
  const mood: Mood = view.flash ?? (view.down ? 'sleep' : view.busy ? 'work' : view.tired ? 'sleep' : 'idle')
  return (
    <Character3D
      id={`staff-${skill}`}
      character={staffCharacter(skill)}
      fn="Product"
      x={x}
      z={z}
      mood={mood}
      selected={view.picked}
      busy={view.busy}
      name={staffShort(skill, lang)}
      level={view.level}
      onSelect={() => onPick(skill)}
    />
  )
}

/* ------------------------------------------------------------------ */
/* LA CAMÉRA                                                           */
/* ------------------------------------------------------------------ */

/** Un cadrage de maquette · en surplomb, la salle entière dans le cadre. En
 *  portrait (téléphone), le champ s'ouvre et la caméra recule, sinon les
 *  bureaux des côtés sortent de l'écran. */
function Rig() {
  const { camera, size } = useThree()
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera
    const portrait = size.height > size.width * 1.1
    // en portrait, la caméra monte presque à la verticale · la profondeur de
    // la salle devient la hauteur de l'écran, qu'un téléphone a en trop
    cam.fov = portrait ? 56 : 42
    // et la salle descend sous la bande des clients, en haut de l'écran
    cam.position.set(0, portrait ? 27 : 13.2, portrait ? 10.5 : 15.2)
    cam.lookAt(0, 0, portrait ? -0.6 : 1.0)
    cam.updateProjectionMatrix()
  }, [camera, size.width, size.height])
  return null
}

/* ------------------------------------------------------------------ */
/* LA SCÈNE                                                            */
/* ------------------------------------------------------------------ */

export function SimScene({ staff, clients, masterSays, paused, lang, onPickStaff, onClientGone }: {
  staff: Record<Skill, StaffView>
  clients: ClientView[]
  masterSays: string | null
  paused: boolean
  lang: Lang
  onPickStaff: (s: Skill) => void
  onClientGone: (uid: string) => void
}) {
  const tpl = templateById('dojo')
  const P = useMemo(() => ({ ...tpl.palette, accent: '#8b5cf6' }), [tpl.palette])
  const stations = useMemo(
    () => SKILLS.map((s) => ({ id: `desk-${s}`, fn: 'Product' as Department, x: DESK[s][0], z: DESK[s][1] })),
    [],
  )
  const [calm, setCalm] = useState(false)
  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    const read = () => setCalm(mq.matches)
    read()
    mq.addEventListener('change', read)
    return () => mq.removeEventListener('change', read)
  }, [])

  return (
    <Canvas
      className="sim-canvas"
      shadows="soft"
      // EN PAUSE, LA SALLE SE FIGE · rien ne bouge, donc rien à dessiner.
      frameloop={paused || calm ? 'demand' : 'always'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 13.2, 15.2], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
    >
      <color attach="background" args={['#0a0514']} />
      <fog attach="fog" args={['#0a0514', 30, 52]} />
      <hemisphereLight args={['#ffffff', '#ffd9b0', 0.8]} />
      <directionalLight
        position={[5, 12, 7]}
        color="#fff4e2"
        intensity={1.25}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0004}
        shadow-normalBias={0.03}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
      />
      {/* le contre-jour violet · décolle les silhouettes du fond */}
      <directionalLight position={[-7, 5, -9]} color="#a78bfa" intensity={0.45} />
      {/* les lanternes · deux sources chaudes, basses, de part et d'autre */}
      <pointLight position={[-8, 3.2, 4]} color="#ffb86b" intensity={0.9} distance={14} />
      <pointLight position={[8, 3.2, 4]} color="#ffb86b" intensity={0.9} distance={14} />
      <Rig />
      <Suspense fallback={null}>
        <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
        <Welcome />
        {SKILLS.map((s) => <Specialist key={s} skill={s} view={staff[s]} lang={lang} onPick={onPickStaff} />)}
        {clients.map((c) => <Client key={c.uid} view={c} onGone={onClientGone} />)}
        <Sensei3D quiet={!masterSays} says={masterSays ?? undefined} />
      </Suspense>
    </Canvas>
  )
}
