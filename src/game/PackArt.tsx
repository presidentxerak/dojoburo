// LA VIGNETTE D'UNE FORMATION · l'intérieur du dojo de sa spécialité.
//
// ---------------------------------------------------------------------------
// CE QUI A CHANGÉ, ET POURQUOI C'EST L'INTÉRIEUR
//
// Les vignettes montraient l'EXTÉRIEUR d'un temple : un toit, un torii, deux
// arbres, le maître devant la porte. Huit cartes, huit fois le même bâtiment à
// la couleur du toit près. On reconnaissait qu'on était dans un jeu japonais ;
// on ne reconnaissait pas la formation.
//
// L'intérieur, lui, dit le MÉTIER. Un studio de podcast (micro sur perche,
// lumière annulaire, mur de studio) n'est pas une salle des marchés (baie de
// serveurs, tableau de flux), qui n'est pas un plateau de pitch (scène,
// trophée). La salle se lit avant le titre, et c'est exactement ce qu'on
// demande à une image posée en tête de carte.
//
// ---------------------------------------------------------------------------
// CHAQUE SALLE A SA COULEUR, SON STYLE, SA DISPOSITION, SES HABITANTS
//
// Demandé : « pour chaque dojo de spécialité mets juste un seul spécialiste et
// change pour chacun la couleur, le style et la disposition du dojo », et
// « dans l'illustration de la formation complète mets un maître et plusieurs
// élèves ». Les huit salles avaient la même pièce, le même sol de tatami, les
// meubles au même endroit, et le même geste. Chacune a maintenant :
//   · SES MURS ET SON SOL · washi et tatami pour le week-end, parquet de salle
//     de classe pour la formation complète, carrelage clair de laboratoire
//     pour la growth, studio sombre pour la communication, etc. (ROOMS),
//   · SA DISPOSITION · les meubles du métier en fer à cheval, le long des
//     murs, dans les coins, en arc, d'un seul côté (LAYOUTS),
//   · SA SCÈNE DE TRAVAIL · une classe (un maître, des élèves) pour les deux
//     formations générales ; pour chaque métier, une situation qui le dit
//     d'un coup d'oeil, avec ses interlocuteurs et son objet (demandé : « un
//     commercial vend des produits à quelqu'un, un growth marketer montre des
//     courbes d'acquisition client à son boss, un fondateur parle devant ses
//     équipes, un chef de produit construit des produits »). Voir data/cast
//     et Cast, plus bas.
//
// RIEN N'EST DESSINÉ À PART. La pièce est Decor3D, les meubles de métier sont
// les kits de three/ThemeProps, les personnages sont Character3D · les mêmes
// pièces que la salle de classe, la page d'accueil et l'application. Une
// vignette bâtie avec ses propres meubles aurait divergé de tout le reste au
// premier réglage.
//
// ---------------------------------------------------------------------------
// LE RENDU « JEU MOBILE », ET CE QUI LE FAIT
//
// Le style visé est celui des jeux de gestion vus de trois quarts : une pièce
// présentée comme une maquette qu'on tiendrait dans la main, lumière de plein
// soleil, couleurs franches, ombres douces. Trois réglages y suffisent :
//
//   LA CAMÉRA EST EN SURPLOMB DE TROIS QUARTS, et assez reculée pour que la
//   salle ENTIÈRE tienne dans le cadre. C'est ce cadrage « maquette » qui fait
//   jeu : une caméra à hauteur d'oeil donne une photo d'intérieur.
//
//   LA LUMIÈRE EST CHAUDE ET HAUTE, un soleil d'après-midi, avec un ciel bleu
//   dans l'hémisphère. Les teintes de la pièce restent franches au lieu de
//   virer au gris d'un éclairage de bureau.
//
//   L'EXPOSITION EST POUSSÉE d'un cran au-dessus du neutre. Le mappage de tons
//   cinéma tasse les couleurs vives ; on lui rend ce qu'il prend.
//
// ---------------------------------------------------------------------------
// HUIT SALLES ANIMÉES SUR UN TÉLÉPHONE · comment on tient
//
// Une salle meublée coûte bien plus qu'un temple de six boîtes, et il y en a
// huit sur l'écran d'accueil. La règle qui rend la chose possible ne change
// pas : UNE SCÈNE NE TOURNE QUE PENDANT QU'ON LA REGARDE. Hors de l'écran, zéro
// image par seconde. En plus :
//
//   PAS D'OMBRES PORTÉES · elles coûtent une passe par lumière. Les personnages
//   gardent leur ombre de contact, qui est un disque et non une passe.
//
//   UNE RÉSOLUTION BRIDÉE À 1,5 · une vignette de trois cents pixels n'a rien à
//   gagner au-delà.
//
//   MOUVEMENT RÉDUIT · la salle est dessinée une fois et s'arrête.
//
// ---------------------------------------------------------------------------
// « ÇA LAG BEAUCOUP » · CE QUI A ÉTÉ CHANGÉ POUR TENIR
//
// Les huit salles tournaient en « always », chacune à la fréquence de l'écran,
// toutes dans la même image : sur un ordinateur ordinaire, la page tombait à
// moins d'une image par seconde en rendu logiciel, et le défilement ramait.
// Trois changements, qui gardent la même image :
//
//   UNE HORLOGE PARTAGÉE (three/cardClock) · les salles passent en « demand »
//   et c'est l'horloge qui les réveille, à 30 images par seconde au plus (24
//   sur un téléphone), et jamais toutes dans la même image.
//
//   LE DÉCOR FIGÉ (three/Frozen) · murs, sol et meubles ne bougent jamais ; leur
//   place est calculée une fois au lieu de l'être à chaque image. Il ne reste à
//   recalculer que les personnages.
//
//   UNE RÉSOLUTION PLAFONNÉE À 1,25 · une vignette de trois cents pixels n'a
//   rien à gagner à 1,5, et coûte 44 % de pixels en plus.
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../components/three/Decor3D'
import { ThemeProps } from '../components/three/ThemeProps'
import { Character3D } from '../components/three/Character3D'
import { Frozen } from '../components/three/Frozen'
import { Heartbeat } from '../components/three/Heartbeat'
import { GaitProvider, advance, type Gait } from '../components/three/gait'
import { templateById, type DojoPalette } from '../data/templates'
import type { Character } from '../data/looks'
import type { Mood } from '../store'
import { DOJO_CAST } from '../data/cast'
import type { Department } from '../data/agents'
import type { DojoKit } from '../data/packs'

/* ------------------------------------------------------------------ */
/* LES SALLES                                                          */
/* ------------------------------------------------------------------ */

type Slot = { p: [number, number, number]; r: number }

/** LES DISPOSITIONS · où se posent les meubles du métier. Les indices sont
 *  ceux des kits (three/ThemeProps), donc le premier meuble de chaque kit
 *  reste le plus en vue quelle que soit la disposition. Le centre de la pièce
 *  reste libre dans toutes : c'est là que les personnages agissent. */
const LAYOUTS: Record<string, Slot[]> = {
  // en fer à cheval autour du centre
  horseshoe: [
    { p: [-5.4, 0, -0.6], r: 0.75 }, { p: [5.4, 0, -0.6], r: -0.75 },
    { p: [-3.4, 0, -4.4], r: 0.3 }, { p: [3.4, 0, -4.4], r: -0.3 },
    { p: [-6.2, 0, 2.4], r: 1.1 }, { p: [6.2, 0, 2.4], r: -1.1 },
  ],
  // le long des deux murs, comme une salle de classe
  sides: [
    { p: [-6.6, 0, -3.2], r: 1.57 }, { p: [6.6, 0, -3.2], r: -1.57 },
    { p: [-6.6, 0, 0.2], r: 1.57 }, { p: [6.6, 0, 0.2], r: -1.57 },
    { p: [-6.6, 0, 3.4], r: 1.57 }, { p: [6.6, 0, 3.4], r: -1.57 },
  ],
  // dans les quatre coins
  corners: [
    { p: [-6.2, 0, -4.4], r: 0.7 }, { p: [6.2, 0, -4.4], r: -0.7 },
    { p: [-6.6, 0, 3.2], r: 1.9 }, { p: [6.6, 0, 3.2], r: -1.9 },
    { p: [-2.6, 0, -5.2], r: 0.1 }, { p: [2.6, 0, -5.2], r: -0.1 },
  ],
  // contre le mur du fond, en rang
  backwall: [
    { p: [-5.6, 0, -5.0], r: 0 }, { p: [5.6, 0, -5.0], r: 0 },
    { p: [-2.0, 0, -5.3], r: 0 }, { p: [2.0, 0, -5.3], r: 0 },
    { p: [-7.0, 0, 1.6], r: 1.3 }, { p: [7.0, 0, 1.6], r: -1.3 },
  ],
  // en arc de cercle, comme une scène
  arc: [
    { p: [-4.6, 0, -3.8], r: 0.55 }, { p: [4.6, 0, -3.8], r: -0.55 },
    { p: [-1.6, 0, -5.0], r: 0.15 }, { p: [1.6, 0, -5.0], r: -0.15 },
    { p: [-6.6, 0, -0.8], r: 1.2 }, { p: [6.6, 0, -0.8], r: -1.2 },
  ],
  // tout d'un côté, l'autre moitié libre pour marcher
  left: [
    { p: [-6.0, 0, -4.4], r: 0.5 }, { p: [-6.6, 0, -0.8], r: 1.2 },
    { p: [-6.6, 0, 2.8], r: 1.4 }, { p: [4.0, 0, -5.0], r: -0.2 },
    { p: [6.6, 0, -2.2], r: -1.0 }, { p: [6.6, 0, 3.0], r: -1.3 },
  ],
  right: [
    { p: [6.0, 0, -4.4], r: -0.5 }, { p: [6.6, 0, -0.8], r: -1.2 },
    { p: [6.6, 0, 2.8], r: -1.4 }, { p: [-4.0, 0, -5.0], r: 0.2 },
    { p: [-6.6, 0, -2.2], r: 1.0 }, { p: [-6.6, 0, 3.0], r: 1.3 },
  ],
  // un fer à cheval plus ouvert, au fond
  wide: [
    { p: [-6.4, 0, -2.2], r: 0.9 }, { p: [6.4, 0, -2.2], r: -0.9 },
    { p: [-4.2, 0, -5.0], r: 0.35 }, { p: [4.2, 0, -5.0], r: -0.35 },
    { p: [-6.8, 0, 2.8], r: 1.3 }, { p: [6.8, 0, 2.8], r: -1.3 },
  ],
}

/** LE STYLE DE CHAQUE SALLE · le sol (par le nom de décor, voir
 *  three/textures · floorTexture), les murs, les poutres et le ciel. L'accent
 *  reste la teinte de la formation. */
const ROOMS: Record<DojoKit, { decor: string; layout: string; walls: [string, string]; trim: string; sky: string }> = {
  course: { decor: 'dojo', layout: 'horseshoe', walls: ['#f2ece0', '#e9e2d4'], trim: '#8c6644', sky: '#e8e2d6' },
  study: { decor: 'castle', layout: 'sides', walls: ['#e6eefb', '#d9e4f6'], trim: '#2f4a7a', sky: '#cfe0ff' },
  saas: { decor: 'lab', layout: 'corners', walls: ['#e2f6ee', '#d3eee2'], trim: '#0f766e', sky: '#d2f4e6' },
  podcast: { decor: 'factory', layout: 'backwall', walls: ['#3d2650', '#331f44'], trim: '#db2777', sky: '#2a1936' },
  pitch: { decor: 'castle', layout: 'arc', walls: ['#f6e6cc', '#eedbbd'], trim: '#9a3412', sky: '#ffe8c8' },
  app: { decor: 'space', layout: 'left', walls: ['#e7e9f8', '#dcdff3'], trim: '#4338ca', sky: '#dbe0ff' },
  sales: { decor: 'garden', layout: 'right', walls: ['#ffe6d0', '#fad9bd'], trim: '#c2410c', sky: '#ffe0c2' },
  ops: { decor: 'forest', layout: 'wide', walls: ['#f3eee0', '#ebe4d0'], trim: '#065f46', sky: '#e3f1e5' },
}

/* ------------------------------------------------------------------ */
/* LES HABITANTS                                                       */
/* ------------------------------------------------------------------ */

/** Le cap qui regarde de (x, z) vers (tx, tz) · Character3D regarde +z à zéro. */
const faceTo = (x: number, z: number, tx: number, tz: number) => Math.atan2(tx - x, tz - z)

/** CE QUE FAIT CHAQUE PERSONNAGE · l'humeur (qui règle le visage et les
 *  bras), et s'il marche. Le mouvement lui-même est dans Actor. */
type Gesture = 'teach' | 'study' | 'talk' | 'listen' | 'address' | 'build' | 'organize'
const GESTURES: Record<Gesture, { mood: Mood; walks: boolean; busy: boolean }> = {
  teach: { mood: 'talk', walks: false, busy: false },
  study: { mood: 'think', walks: false, busy: false },
  // parle à quelqu'un, en se tournant de temps en temps vers ce qu'il montre
  talk: { mood: 'talk', walks: false, busy: false },
  // écoute, hoche la tête, regarde celui qui parle
  listen: { mood: 'think', walks: false, busy: false },
  address: { mood: 'talk', walks: false, busy: false },
  build: { mood: 'work', walks: false, busy: true },
  organize: { mood: 'work', walks: true, busy: false },
}

/** LE CYCLE DE L'ATELIER PRODUIT · partagé par le chef de produit et son
 *  établi, pour que le saut de joie tombe au moment où le produit est fini. */
const BUILD_CYCLE = 6.4
const BUILD_BLOCKS = 4

/** UN PERSONNAGE ET SON GESTE · un seul composant pour tous les gestes, pour
 *  que la marche, la cadence et le regard soient réglés une fois.
 *
 *  LES TRAJETS RESTENT AU CENTRE · les meubles du métier sont contre les
 *  murs dans toutes les dispositions ; un personnage qui passe à travers une
 *  table se lit comme un bug. */
function Actor({ who, character, gesture, at, look, look2, lift = 0, phase }: {
  who: string
  character: Character
  gesture: Gesture
  /** où il se tient, ou le point de départ de son trajet */
  at: [number, number]
  /** vers où il regarde */
  look: [number, number]
  /** ce qu'il montre, vers quoi il se tourne par moments (« talk »), ou le
   *  second point de son trajet (« organize ») */
  look2?: [number, number]
  /** la hauteur du sol sous ses pieds · une estrade */
  lift?: number
  phase: number
}) {
  const g = useRef<THREE.Group>(null)
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  const st = useRef({ s: 0, dir: 1, rest: 0 })
  const G = GESTURES[gesture]
  const [x0, z0] = at

  useFrame(({ clock }, raw) => {
    const o = g.current
    if (!o) return
    const dt = Math.min(raw, 0.05)
    const t = clock.elapsedTime + phase
    const S = st.current
    let x = x0, z = z0, y = lift
    let ry = faceTo(x0, z0, look[0], look[1])
    let speed = 0

    if (gesture === 'teach') {
      // LE MAÎTRE ENSEIGNE · il regarde ses élèves l'un après l'autre.
      ry += Math.sin(t * 0.55) * 0.55
    } else if (gesture === 'study' || gesture === 'listen') {
      // ÉCOUTER · de petits hochements de tête, chacun à son rythme.
      y += Math.max(0, Math.sin(t * 1.7)) * 0.04
      ry += Math.sin(t * 0.4) * 0.1
    } else if (gesture === 'talk') {
      // PARLER EN MONTRANT · il s'adresse à son interlocuteur, se tourne vers
      // l'objet (le produit, la courbe) le temps d'une phrase, puis revient.
      const showing = look2 && Math.sin(t * 0.9) > 0.35
      ry = showing ? faceTo(x0, z0, look2[0], look2[1]) : ry
      ry += Math.sin(t * 2.2) * 0.08
      y += Math.abs(Math.sin(t * 2.6)) * 0.03
    } else if (gesture === 'address') {
      // DEVANT L'ÉQUIPE · il avance et recule sur l'estrade, balaie la salle
      // du regard, ponctue ses phrases.
      x = x0 + Math.sin(t * 0.45) * 0.9
      ry += Math.sin(t * 0.7) * 0.45
      y += Math.abs(Math.sin(t * 2.4)) * 0.04
      speed = Math.abs(Math.cos(t * 0.45)) > 0.35 ? 0.5 : 0
    } else if (gesture === 'build') {
      // À L'ÉTABLI · il assemble ; le produit fini, il saute de joie.
      const c = clock.elapsedTime % BUILD_CYCLE
      const done = c > BUILD_CYCLE - 1.2
      if (done) y += Math.abs(Math.sin((c - (BUILD_CYCLE - 1.2)) * Math.PI * 2.5)) * 0.5
      else ry += Math.sin(t * 5) * 0.04
    } else if (gesture === 'organize' && look2) {
      // LE PLANNING · du bureau au tableau et retour, une pause à chaque bout
      // pour poser une carte ou noter un rendez-vous.
      if (S.rest > 0) S.rest -= dt
      else {
        S.s += 0.32 * S.dir * dt
        if (S.s >= 1) { S.s = 1; S.dir = -1; S.rest = 1.8 }
        if (S.s <= 0) { S.s = 0; S.dir = 1; S.rest = 1.8 }
        speed = 1.0
      }
      x = x0 + (look2[0] - x0) * S.s
      z = z0 + (look2[1] - z0) * S.s
      ry = S.rest > 0
        ? (S.s > 0.5 ? faceTo(x, z, look2[0], look2[1] - 3) : faceTo(x, z, look[0], look[1]))
        : Math.atan2((look2[0] - x0) * S.dir, (look2[1] - z0) * S.dir)
    }

    gait.current.speed = speed
    if (speed > 0) advance(gait.current, dt)
    o.position.set(x, y, z)
    o.rotation.y += (ry - o.rotation.y) * Math.min(1, dt * 8)
  })

  return (
    <GaitProvider value={gait}>
      <group ref={g}>
        <Character3D
          id={`card-${who}`}
          character={character}
          fn="Product"
          x={0}
          z={0}
          mood={G.mood}
          selected={false}
          busy={G.busy}
          walk={G.walks || gesture === 'address'}
          bare
          onSelect={() => {}}
        />
      </group>
    </GaitProvider>
  )
}

/* ------------------------------------------------------------------ */
/* LES OBJETS DU MÉTIER                                                */
/* ------------------------------------------------------------------ */
/* Ce qui fait comprendre la scène d'un coup d'oeil : le produit qu'on vend,
   la courbe qu'on montre, l'estrade d'où l'on parle. Des formes simples, en
   matière mate, à la teinte de la formation. */

/** LE PRODUIT À VENDRE · un coffret sur son présentoir, qui tourne lentement,
 *  avec son étiquette de prix. */
function ProductStand({ at, tint }: { at: [number, number]; tint: string }) {
  const box = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (box.current) {
      box.current.rotation.y = clock.elapsedTime * 0.8
      box.current.position.y = 1.55 + Math.sin(clock.elapsedTime * 1.6) * 0.05
    }
  })
  return (
    <group position={[at[0], 0, at[1]]}>
      <mesh position={[0, 0.5, 0]}><cylinderGeometry args={[0.42, 0.5, 1, 24]} /><meshStandardMaterial color="#f8fafc" roughness={0.6} /></mesh>
      <mesh position={[0, 1.02, 0]}><cylinderGeometry args={[0.5, 0.5, 0.06, 24]} /><meshStandardMaterial color={tint} roughness={0.5} /></mesh>
      <group ref={box} position={[0, 1.55, 0]}>
        <mesh><boxGeometry args={[0.62, 0.62, 0.62]} /><meshStandardMaterial color={tint} roughness={0.45} /></mesh>
        <mesh><boxGeometry args={[0.64, 0.64, 0.14]} /><meshStandardMaterial color="#fde047" roughness={0.4} /></mesh>
        <mesh><boxGeometry args={[0.14, 0.64, 0.64]} /><meshStandardMaterial color="#fde047" roughness={0.4} /></mesh>
        <mesh position={[0, 0.38, 0]}><torusGeometry args={[0.13, 0.05, 8, 16]} /><meshStandardMaterial color="#fde047" roughness={0.4} /></mesh>
      </group>
      {/* l'étiquette de prix, penchée vers la salle */}
      <group position={[0.55, 1.1, 0.35]} rotation={[-0.3, -0.4, 0.25]}>
        <mesh><boxGeometry args={[0.46, 0.28, 0.03]} /><meshStandardMaterial color="#ffffff" roughness={0.7} /></mesh>
        <mesh position={[0, 0, 0.02]}><boxGeometry args={[0.3, 0.07, 0.01]} /><meshStandardMaterial color="#16a34a" /></mesh>
      </group>
    </group>
  )
}

/** LES COURBES D'ACQUISITION · un tableau sur chevalet : des barres qui
 *  montent l'une après l'autre, une flèche verte qui pointe vers le haut. */
function ChartBoard({ at, face, tint }: { at: [number, number]; face: number; tint: string }) {
  const bars = useRef<(THREE.Mesh | null)[]>([])
  const arrow = useRef<THREE.Group>(null)
  const H = [0.35, 0.55, 0.8, 1.05, 1.4]
  useFrame(({ clock }) => {
    const c = clock.elapsedTime % 7
    H.forEach((h, i) => {
      const m = bars.current[i]
      if (!m) return
      const k = Math.max(0.05, Math.min(1, (c - i * 0.7) / 0.6))
      m.scale.y = k
      m.position.y = -0.85 + (h * k) / 2
    })
    if (arrow.current) arrow.current.position.y = 0.72 + Math.sin(clock.elapsedTime * 2.2) * 0.06
  })
  return (
    <group position={[at[0], 0, at[1]]} rotation={[0, face, 0]}>
      {/* le chevalet */}
      <mesh position={[-1.3, 1.1, -0.1]} rotation={[0.08, 0, 0]}><boxGeometry args={[0.08, 2.2, 0.08]} /><meshStandardMaterial color="#6b4f35" /></mesh>
      <mesh position={[1.3, 1.1, -0.1]} rotation={[0.08, 0, 0]}><boxGeometry args={[0.08, 2.2, 0.08]} /><meshStandardMaterial color="#6b4f35" /></mesh>
      <group position={[0, 1.95, 0]}>
        {/* le tableau blanc, et son cadre à la teinte de la formation */}
        <mesh position={[0, 0, -0.04]}><boxGeometry args={[3.1, 2.1, 0.06]} /><meshStandardMaterial color={tint} roughness={0.6} /></mesh>
        <mesh><boxGeometry args={[2.9, 1.9, 0.04]} /><meshStandardMaterial color="#ffffff" roughness={0.8} /></mesh>
        {/* les axes */}
        <mesh position={[-1.25, -0.05, 0.03]}><boxGeometry args={[0.04, 1.6, 0.02]} /><meshStandardMaterial color="#334155" /></mesh>
        <mesh position={[0, -0.85, 0.03]}><boxGeometry args={[2.5, 0.04, 0.02]} /><meshStandardMaterial color="#334155" /></mesh>
        {/* les barres, qui poussent l'une après l'autre */}
        {H.map((h, i) => (
          <mesh key={i} ref={(m) => { bars.current[i] = m }} position={[-0.95 + i * 0.48, -0.85 + h / 2, 0.04]}>
            <boxGeometry args={[0.3, h, 0.03]} />
            <meshStandardMaterial color={i === H.length - 1 ? '#16a34a' : '#60a5fa'} roughness={0.5} />
          </mesh>
        ))}
        {/* la flèche de croissance */}
        <group ref={arrow} position={[1.15, 0.72, 0.06]}>
          <mesh rotation={[0, 0, -0.6]}><coneGeometry args={[0.14, 0.3, 12]} /><meshStandardMaterial color="#16a34a" /></mesh>
        </group>
      </group>
    </group>
  )
}

/** L'ESTRADE DU FONDATEUR · une scène basse, un pupitre, une bannière. */
function Stage({ at, tint }: { at: [number, number]; tint: string }) {
  return (
    <group position={[at[0], 0, at[1]]}>
      <mesh position={[0, 0.15, 0]}><boxGeometry args={[4.2, 0.3, 1.8]} /><meshStandardMaterial color="#3f2d20" roughness={0.8} /></mesh>
      <mesh position={[0, 0.305, 0.86]}><boxGeometry args={[4.2, 0.02, 0.08]} /><meshStandardMaterial color={tint} /></mesh>
      <mesh position={[1.5, 0.85, 0.35]}><boxGeometry args={[0.6, 1.1, 0.45]} /><meshStandardMaterial color="#1f2937" roughness={0.7} /></mesh>
      <mesh position={[1.5, 1.45, 0.3]} rotation={[-0.35, 0, 0]}><boxGeometry args={[0.7, 0.05, 0.5]} /><meshStandardMaterial color={tint} /></mesh>
      <mesh position={[0, 2.6, -0.85]}><boxGeometry args={[3.2, 1.0, 0.05]} /><meshStandardMaterial color={tint} roughness={0.7} /></mesh>
      <mesh position={[0, 2.6, -0.82]}><boxGeometry args={[2.4, 0.16, 0.02]} /><meshStandardMaterial color="#ffffff" /></mesh>
    </group>
  )
}

/** L'ÉTABLI DU CHEF DE PRODUIT · le produit s'y assemble bloc par bloc, et
 *  s'illumine une fois fini, avant de recommencer. */
function Workbench({ at, tint }: { at: [number, number]; tint: string }) {
  const blocks = useRef<(THREE.Mesh | null)[]>([])
  const glow = useRef<THREE.MeshStandardMaterial>(null)
  const COLORS = [tint, '#38bdf8', '#f59e0b', '#22c55e']
  useFrame(({ clock }) => {
    const c = clock.elapsedTime % BUILD_CYCLE
    const step = (BUILD_CYCLE - 1.2) / BUILD_BLOCKS
    blocks.current.forEach((m, i) => {
      if (!m) return
      const k = Math.max(0, Math.min(1, (c - i * step) / (step * 0.6)))
      m.visible = k > 0
      m.position.y = 1.12 + i * 0.36 + (1 - k) * 0.9
      m.rotation.y = (1 - k) * 1.2
    })
    if (glow.current) glow.current.emissiveIntensity = c > BUILD_CYCLE - 1.2 ? 0.9 : 0.05
  })
  return (
    <group position={[at[0], 0, at[1]]}>
      <mesh position={[0, 0.45, 0]}><boxGeometry args={[2.6, 0.9, 1.1]} /><meshStandardMaterial color="#d6a46b" roughness={0.8} /></mesh>
      <mesh position={[0, 0.92, 0]}><boxGeometry args={[2.7, 0.06, 1.2]} /><meshStandardMaterial color="#b7844d" roughness={0.8} /></mesh>
      {COLORS.map((col, i) => (
        <mesh key={i} ref={(m) => { blocks.current[i] = m }} position={[-0.7, 1.12 + i * 0.36, 0.1]}>
          <boxGeometry args={[0.8 - i * 0.1, 0.34, 0.8 - i * 0.1]} />
          <meshStandardMaterial color={col} roughness={0.45} />
        </mesh>
      ))}
      {/* l'écran du produit, qui s'allume quand il est prêt */}
      <group position={[0.85, 1.35, 0.35]} rotation={[-0.15, -0.35, 0]}>
        <mesh><boxGeometry args={[0.8, 0.55, 0.05]} /><meshStandardMaterial color="#111827" /></mesh>
        <mesh position={[0, 0, 0.03]}><boxGeometry args={[0.7, 0.45, 0.01]} /><meshStandardMaterial ref={glow} color="#86efac" emissive="#22c55e" emissiveIntensity={0.05} /></mesh>
      </group>
    </group>
  )
}

/** LE STUDIO D'INTERVIEW · une table, deux micros, et le voyant « à
 *  l'antenne » qui clignote au mur. */
function PodcastTable({ at, tint }: { at: [number, number]; tint: string }) {
  const onAir = useRef<THREE.MeshStandardMaterial>(null)
  useFrame(({ clock }) => {
    if (onAir.current) onAir.current.emissiveIntensity = 0.6 + Math.sin(clock.elapsedTime * 3) * 0.35
  })
  return (
    <group position={[at[0], 0, at[1]]}>
      <mesh position={[0, 0.72, 0]}><cylinderGeometry args={[1.25, 1.25, 0.08, 32]} /><meshStandardMaterial color="#1f2937" roughness={0.6} /></mesh>
      <mesh position={[0, 0.36, 0]}><cylinderGeometry args={[0.12, 0.3, 0.72, 16]} /><meshStandardMaterial color="#111827" /></mesh>
      {[-0.6, 0.6].map((x) => (
        <group key={x} position={[x, 0.76, -0.15]} rotation={[0, 0, x < 0 ? 0.35 : -0.35]}>
          <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[0.025, 0.025, 0.5, 8]} /><meshStandardMaterial color="#9ca3af" /></mesh>
          <mesh position={[0, 0.55, 0]}><capsuleGeometry args={[0.09, 0.16, 6, 12]} /><meshStandardMaterial color="#374151" roughness={0.4} /></mesh>
        </group>
      ))}
      <group position={[0, 3.3, -3.4]}>
        <mesh><boxGeometry args={[1.5, 0.5, 0.08]} /><meshStandardMaterial color="#111827" /></mesh>
        <mesh position={[0, 0, 0.05]}><boxGeometry args={[1.3, 0.34, 0.02]} /><meshStandardMaterial ref={onAir} color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} /></mesh>
      </group>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[2.2, 40]} /><meshStandardMaterial color={tint} roughness={0.9} /></mesh>
    </group>
  )
}

/** LE PLANNING DE L'ASSISTANT · un tableau de semaine dont les créneaux se
 *  remplissent l'un après l'autre. */
function PlannerBoard({ at, face, tint }: { at: [number, number]; face: number; tint: string }) {
  const cells = useRef<(THREE.MeshStandardMaterial | null)[]>([])
  const COLS = 5, ROWS = 3
  useFrame(({ clock }) => {
    const n = Math.floor((clock.elapsedTime % 9) / 0.55)
    cells.current.forEach((m, i) => {
      if (!m) return
      const on = i < n
      m.color.set(on ? (i % 3 === 0 ? tint : i % 3 === 1 ? '#fbbf24' : '#34d399') : '#e5e7eb')
    })
  })
  return (
    <group position={[at[0], 0, at[1]]} rotation={[0, face, 0]}>
      <mesh position={[0, 1.95, 0]}><boxGeometry args={[3.0, 1.9, 0.08]} /><meshStandardMaterial color="#1e293b" roughness={0.7} /></mesh>
      <mesh position={[0, 1.95, 0.05]}><boxGeometry args={[2.8, 1.7, 0.02]} /><meshStandardMaterial color="#ffffff" roughness={0.8} /></mesh>
      {Array.from({ length: COLS * ROWS }, (_, i) => {
        const cx = i % COLS, cy = Math.floor(i / COLS)
        return (
          <mesh key={i} position={[-1.1 + cx * 0.55, 2.4 - cy * 0.48, 0.07]}>
            <boxGeometry args={[0.46, 0.36, 0.02]} />
            <meshStandardMaterial ref={(m) => { cells.current[i] = m }} color="#e5e7eb" roughness={0.6} />
          </mesh>
        )
      })}
      <mesh position={[-1.3, 0.5, 0]}><boxGeometry args={[0.08, 1.0, 0.08]} /><meshStandardMaterial color="#475569" /></mesh>
      <mesh position={[1.3, 0.5, 0]}><boxGeometry args={[0.08, 1.0, 0.08]} /><meshStandardMaterial color="#475569" /></mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* LES SCÈNES                                                          */
/* ------------------------------------------------------------------ */

/** OÙ SE TIENT CHACUN, ET CE QU'IL FAIT · une situation par salle, voir
 *  data/cast. Le centre de la pièce est libre dans toutes les dispositions ;
 *  c'est là que la scène se joue. */
function Cast({ kit, tint, phase }: { kit: DojoKit; tint: string; phase: number }) {
  const cast = DOJO_CAST[kit]
  const o = cast.others
  switch (cast.action) {
    case 'teach': {
      const master: [number, number] = [0, -2.6]
      // LE MAÎTRE RESTE VISIBLE · les élèves s'écartent de l'axe du regard.
      const spots: [number, number][] = cast.students.length <= 2
        ? [[-2.0, 1.8], [2.0, 2.0]]
        : [[-3.6, 1.2], [-1.6, 2.2], [1.6, 2.2], [3.6, 1.2]]
      return (
        <>
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="teach" at={master} look={[0, 4]} phase={phase} />
          {cast.students.map((c, k) => (
            <Actor key={k} who={`${kit}-s${k}`} character={c} gesture="study"
              at={spots[k % spots.length]} look={master} phase={phase + k * 0.9} />
          ))}
        </>
      )
    }
    case 'sell': {
      // LA VENTE · le produit entre eux deux, la cliente écoute, le commercial
      // lui parle et se tourne vers le produit pour le montrer.
      const seller: [number, number] = [-1.7, 0.9], buyer: [number, number] = [1.7, 1.1], product: [number, number] = [0, 0.5]
      return (
        <>
          <ProductStand at={product} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="talk" at={seller} look={[buyer[0], buyer[1] + 1.5]} look2={[product[0], product[1] + 1]} phase={phase} />
          {o[0] && <Actor who={`${kit}-o0`} character={o[0]} gesture="listen" at={buyer} look={[seller[0], seller[1] + 1.5]} phase={phase + 0.7} />}
        </>
      )
    }
    case 'present': {
      // LES COURBES AU BOSS · le tableau d'un côté, le boss de l'autre ; elle
      // se tourne vers la courbe, puis vers lui.
      const board: [number, number] = [-1.6, -2.4], who: [number, number] = [0.6, -1.0], boss: [number, number] = [2.3, 1.2]
      return (
        <>
          <ChartBoard at={board} face={0.35} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="talk" at={who} look={boss} look2={board} phase={phase} />
          {o[0] && <Actor who={`${kit}-o0`} character={o[0]} gesture="listen" at={boss} look={[-0.6, -2.0]} phase={phase + 0.4} />}
        </>
      )
    }
    case 'address': {
      // DEVANT L'ÉQUIPE · le fondateur sur l'estrade, l'équipe en arc devant.
      const stage: [number, number] = [0, -2.6]
      // L'ÉQUIPE SUR LES CÔTÉS · placée devant, elle cachait le fondateur à la
      // caméra ; en arc sur les côtés, l'allée du milieu le laisse voir.
      const team: [number, number][] = [[-3.4, -0.4], [-2.5, 1.3], [2.5, 1.3], [3.4, -0.4]]
      return (
        <>
          <Stage at={stage} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="address" at={[stage[0] - 0.3, stage[1] + 0.2]} look={[0, 4]} lift={0.3} phase={phase} />
          {o.map((c, k) => (
            <Actor key={k} who={`${kit}-o${k}`} character={c} gesture="listen" at={team[k % team.length]} look={stage} phase={phase + k * 0.8} />
          ))}
        </>
      )
    }
    case 'build':
      // L'ATELIER · le chef de produit derrière son établi, face à la salle.
      return (
        <>
          <Workbench at={[0, 1.2]} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="build" at={[0.55, 0.1]} look={[0.2, 4]} phase={phase} />
        </>
      )
    case 'interview': {
      // L'INTERVIEW · deux micros, deux fauteuils, l'hôte qui parle à son
      // invité et se tourne vers le public.
      const table: [number, number] = [0, 0.9]
      const host: [number, number] = [-1.35, 0.3], guest: [number, number] = [1.35, 0.3]
      return (
        <>
          <PodcastTable at={table} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="talk" at={host} look={[guest[0], guest[1] + 1.2]} look2={[0, 8]} phase={phase} />
          {o[0] && <Actor who={`${kit}-o0`} character={o[0]} gesture="listen" at={guest} look={[host[0], host[1] + 1.2]} phase={phase + 0.5} />}
        </>
      )
    }
    case 'organize': {
      // LE PLANNING · du bureau au tableau ; la manager suit l'agenda.
      const desk: [number, number] = [1.4, 1.2], board: [number, number] = [-1.8, -2.4]
      return (
        <>
          <PlannerBoard at={board} face={0.3} tint={tint} />
          <Actor who={`${kit}-lead`} character={cast.lead} gesture="organize" at={[desk[0] - 0.2, desk[1] - 0.8]} look={[desk[0], desk[1] + 3]} look2={[board[0] + 0.6, board[1] + 1.3]} phase={phase} />
          {o[0] && <Actor who={`${kit}-o0`} character={o[0]} gesture="listen" at={[2.9, -0.8]} look={board} phase={phase + 0.6} />}
        </>
      )
    }
    default:
      return null
  }
}

/* ------------------------------------------------------------------ */

/** UN DÉPHASAGE STABLE PAR CARTE · huit salles qui bougent ensemble se lisent
 *  comme un mécanisme. Tiré du texte, donc identique d'un rendu à l'autre. */
function phaseOf(text: string): number {
  let h = 0
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) % 10000
  return (h / 10000) * 4
}

/** VISIBLE À L'ÉCRAN ? · c'est ce qui décide si la salle tourne. Sans
 *  observateur, on répond « oui » : une vignette qui tourne coûte de la
 *  batterie, une vignette noire coûte la carte. */
function useOnScreen<T extends HTMLElement>(ref: React.RefObject<T>): boolean {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    setOn(false)
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: '200px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return on
}

/** LE MOUVEMENT RÉDUIT · lu en continu, parce qu'il se change page ouverte. */
function useCalm(): boolean {
  const [calm, setCalm] = useState(false)
  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    const read = () => setCalm(mq.matches)
    read()
    mq.addEventListener('change', read)
    return () => mq.removeEventListener('change', read)
  }, [])
  return calm
}

export function PackArt({ kit, tint, locked = false }: {
  /** la salle de la spécialité · voir data/packs */
  kit: DojoKit
  tint: string
  /** UNE FORMATION FERMÉE GARDE SA SALLE INTACTE · la ternir supprimerait la
   *  seule chose qui donne envie de l'ouvrir. Le cadenas est dans la carte. */
  locked?: boolean
}) {
  const box = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(box)
  const calm = useCalm()
  const live = onScreen && !calm

  // LA PALETTE DE LA SALLE · la pièce du dojo, repeinte aux couleurs de la
  // formation : murs, poutres et ciel viennent de ROOMS, l'accent de la teinte.
  const tpl = templateById('dojo')
  const R = ROOMS[kit]
  const P = useMemo<DojoPalette>(() => ({
    ...tpl.palette,
    wallBack: R.walls[0], wallSide: R.walls[1], trim: R.trim, bg: R.sky, fog: R.sky, accent: tint,
  }), [tpl.palette, R, tint])
  // UN BUREAU SEULEMENT POUR L'ASSISTANT · les autres métiers ont leur propre
  // objet de scène (présentoir, tableau, estrade, établi, table de studio).
  const cast = DOJO_CAST[kit]
  const stations = useMemo(
    () => (cast.action === 'organize' ? [{ id: `${kit}-desk`, fn: 'Product' as Department, x: 1.4, z: 1.2 }] : []),
    [cast.action, kit],
  )
  const phase = phaseOf(kit)

  return (
    <div className={`pa${locked ? ' off' : ''}`} ref={box} aria-hidden>
      <Canvas
        frameloop="demand"
        // LA TAILLE SANS LES TRANSFORMATIONS · la carte arrive avec une
        // translation et se soulève au survol. La mesure par défaut lit le
        // rectangle À L'ÉCRAN, transformations comprises, et la salle se
        // dimensionnait à la taille réduite en laissant une bande de ciel. La
        // largeur de mise en page, elle, ignore les transformations.
        resize={{ offsetSize: true }}
        dpr={[1, 1.25]}
        camera={{ position: [0, 6.9, 11.0], fov: 40, near: 0.1, far: 80 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.18 }}
        onCreated={({ camera }) => camera.lookAt(0, 1.4, -0.9)}
      >
        <color attach="background" args={[P.bg]} />
        {/* LE SOLEIL D'APRÈS-MIDI · voir l'en-tête. */}
        <hemisphereLight args={['#dff1ff', P.ground, 1.05]} />
        <ambientLight intensity={0.28} />
        <directionalLight position={[7, 13, 9]} color="#fff0d4" intensity={1.75} />
        <directionalLight position={[-8, 6, -4]} color="#c8dcff" intensity={0.5} />
        <pointLight position={[0, 4.2, -3.5]} color={tint} intensity={0.9} distance={22} />
        <Suspense fallback={null}>
          <Frozen>
            <Decor3D palette={P} decor={R.decor} enclosed={tpl.enclosed} stations={stations} />
            <ThemeProps archetype={kit} accent={tint} slots={LAYOUTS[R.layout]} />
          </Frozen>
          <Cast kit={kit} tint={tint} phase={phase} />
        </Suspense>
        <Heartbeat live={live} />
      </Canvas>
    </div>
  )
}
