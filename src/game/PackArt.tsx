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
//   · SES HABITANTS ET LEUR GESTE · une classe (un maître, des élèves) ou un
//     seul spécialiste qui fait ce que fait son métier (data/cast).
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
import { DOJO_CAST, type RoomAction } from '../data/cast'
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

/** CE QUE FAIT CHAQUE ACTION · l'humeur (qui règle le visage et les bras) et
 *  si le personnage marche. Le mouvement lui-même est dans Actor. */
const ACTIONS: Record<RoomAction | 'study', { mood: Mood; walks: boolean; busy: boolean }> = {
  teach: { mood: 'talk', walks: false, busy: false },
  study: { mood: 'think', walks: false, busy: false },
  pace: { mood: 'talk', walks: true, busy: false },
  broadcast: { mood: 'talk', walks: false, busy: false },
  celebrate: { mood: 'happy', walks: false, busy: false },
  tour: { mood: 'think', walks: true, busy: false },
  call: { mood: 'talk', walks: true, busy: false },
  type: { mood: 'work', walks: false, busy: true },
}

/** UN HABITANT ET SON GESTE · un seul composant pour toutes les actions, pour
 *  que la marche, la cadence et le regard soient réglés une fois.
 *
 *  LES TRAJETS RESTENT AU CENTRE · les meubles sont contre les murs dans
 *  toutes les dispositions, donc un trajet entre x = -3 et 3 et z = -2 et 3
 *  ne traverse jamais un meuble. Un personnage qui passe à travers une table
 *  se lit comme un bug. */
function Actor({ who, character, action, at, look, phase }: {
  who: string
  character: Character
  action: RoomAction | 'study'
  /** où il se tient, ou le centre de son trajet */
  at: [number, number]
  /** vers où il regarde quand il ne marche pas */
  look: [number, number]
  phase: number
}) {
  const g = useRef<THREE.Group>(null)
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  const st = useRef({ s: phase, dir: 1, rest: 0 })
  const A = ACTIONS[action]
  const [x0, z0] = at

  useFrame(({ clock }, raw) => {
    const o = g.current
    if (!o) return
    const dt = Math.min(raw, 0.05)
    const t = clock.elapsedTime + phase
    const S = st.current
    const rest = faceTo(x0, z0, look[0], look[1])
    let x = x0, z = z0, y = 0, ry = rest, speed = 0

    if (action === 'pace') {
      // LES CENT PAS · d'un bout à l'autre de la scène, une pause au bout pour
      // se tourner vers la salle, comme on répète un pitch.
      if (S.rest > 0) { S.rest -= dt; ry = rest }
      else {
        S.s += 1.1 * S.dir * dt
        if (S.s > 2.4) { S.s = 2.4; S.dir = -1; S.rest = 1.4 }
        if (S.s < -2.4) { S.s = -2.4; S.dir = 1; S.rest = 1.4 }
        speed = 1.1
        ry = S.dir > 0 ? Math.PI / 2 : -Math.PI / 2
      }
      x = x0 + S.s
    } else if (action === 'tour') {
      // LE TOUR DES TABLEAUX · une boucle lente, un arrêt à chaque coin, le
      // temps de lire le chiffre.
      if (S.rest > 0) { S.rest -= dt }
      else {
        const before = Math.floor(S.s)
        S.s += 0.28 * dt
        if (Math.floor(S.s) !== before) S.rest = 1.2
        speed = 1.0
      }
      const k = ((S.s % 4) + 4) % 4
      const leg = Math.floor(k), f = k - leg
      const C: [number, number][] = [[-2.6, -1.6], [2.6, -1.6], [2.6, 2.2], [-2.6, 2.2]]
      const [ax, az] = C[leg], [bx, bz] = C[(leg + 1) % 4]
      x = x0 + ax + (bx - ax) * f
      z = z0 + az + (bz - az) * f
      ry = S.rest > 0 ? faceTo(x, z, 0, 8) : Math.atan2(bx - ax, bz - az)
      if (S.rest > 0) speed = 0
    } else if (action === 'call') {
      // AU TÉLÉPHONE · on tourne en rond en parlant.
      S.s += 0.55 * dt
      const r = 1.5
      x = x0 + Math.cos(S.s) * r
      z = z0 + Math.sin(S.s) * r
      ry = Math.atan2(-Math.sin(S.s), Math.cos(S.s))
      speed = 0.85
    } else if (action === 'celebrate') {
      // LA MISE EN LIGNE · des bonds de joie, un tour sur soi-même, puis une
      // pause, et ça recommence.
      const c = t % 3.2
      if (c < 1.3) {
        y = Math.abs(Math.sin(c * Math.PI * 2.3)) * 0.7
        ry = rest + (c / 1.3) * Math.PI * 2
      }
    } else if (action === 'broadcast') {
      // AU MICRO · le buste se balance, la tête accompagne la parole.
      ry = rest + Math.sin(t * 1.3) * 0.35
      y = Math.abs(Math.sin(t * 2.6)) * 0.05
    } else if (action === 'teach') {
      // LE MAÎTRE ENSEIGNE · il regarde ses élèves l'un après l'autre.
      ry = rest + Math.sin(t * 0.55) * 0.55
    } else if (action === 'study') {
      // L'ÉLÈVE ÉCOUTE · de petits hochements de tête, chacun à son rythme.
      y = Math.max(0, Math.sin(t * 1.7)) * 0.04
      ry = rest + Math.sin(t * 0.4) * 0.12
    } else if (action === 'type') {
      // AU CLAVIER · il tape, et lève la tête de temps en temps.
      ry = rest + (Math.sin(t * 0.3) > 0.85 ? 0.5 : 0)
    }

    gait.current.speed = speed
    if (speed > 0) advance(gait.current, dt)
    o.position.set(x, y, z)
    o.rotation.y += (ry - o.rotation.y) * Math.min(1, dt * (action === 'celebrate' ? 30 : 8))
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
          mood={A.mood}
          selected={false}
          busy={A.busy}
          walk={A.walks}
          bare
          onSelect={() => {}}
        />
      </group>
    </GaitProvider>
  )
}

/** LA DISPOSITION DES HABITANTS · selon l'action du personnage principal.
 *  Une classe : le maître au fond, les élèves devant lui, tournés vers lui.
 *  Un métier : le spécialiste seul, au centre de sa salle. */
function Cast({ kit, phase }: { kit: DojoKit; phase: number }) {
  const cast = DOJO_CAST[kit]
  if (cast.action === 'teach') {
    const master: [number, number] = [0, -2.6]
    const n = cast.students.length
    // LE MAÎTRE RESTE VISIBLE · vu d'en haut, un élève placé devant lui sur
    // l'axe du regard le masquait. Les élèves s'écartent donc de l'axe, et
    // l'allée centrale laisse voir le maître.
    const spots: [number, number][] = n <= 2
      ? [[-2.0, 1.8], [2.0, 2.0]]
      : [[-3.6, 1.2], [-1.6, 2.2], [1.6, 2.2], [3.6, 1.2]]
    return (
      <>
        <Actor who={`${kit}-lead`} character={cast.lead} action="teach" at={master} look={[0, 4]} phase={phase} />
        {cast.students.map((c, k) => (
          <Actor key={k} who={`${kit}-s${k}`} character={c} action="study"
            at={spots[k % spots.length]} look={master} phase={phase + k * 0.9} />
        ))}
      </>
    )
  }
  // LE SPÉCIALISTE · au centre, sauf celui qui tape, qui est à son bureau.
  const at: [number, number] = cast.action === 'type' ? [0, 1.2] : cast.action === 'broadcast' ? [0, 0.4] : [0, 0.8]
  return <Actor who={`${kit}-lead`} character={cast.lead} action={cast.action} at={at} look={[0, 8]} phase={phase} />
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
  // UN BUREAU SEULEMENT POUR CELUI QUI S'Y ASSOIT · l'assistant qui tape et
  // la communicante à son micro. Les autres agissent debout, au centre.
  const cast = DOJO_CAST[kit]
  const stations = useMemo(
    () => (cast.action === 'type' ? [{ id: `${kit}-desk`, fn: 'Product' as Department, x: 0, z: 1.2 }]
      : cast.action === 'broadcast' ? [{ id: `${kit}-desk`, fn: 'Product' as Department, x: 0, z: 0.4 }]
        : []),
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
        camera={{ position: [0, 7.6, 12.4], fov: 40, near: 0.1, far: 80 }}
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
          <Cast kit={kit} phase={phase} />
        </Suspense>
        <Heartbeat live={live} />
      </Canvas>
    </div>
  )
}
