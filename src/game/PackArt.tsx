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
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../components/three/Decor3D'
import { ThemeProps } from '../components/three/ThemeProps'
import { Character3D } from '../components/three/Character3D'
import { GaitProvider, advance, type Gait } from '../components/three/gait'
import { templateById } from '../data/templates'
import type { Character } from '../data/looks'
import { DOJO_CAST } from '../data/cast'
import type { Department } from '../data/agents'
import type { DojoKit } from '../data/packs'

/* ------------------------------------------------------------------ */

/** LE MAÎTRE À SON POSTE · il travaille, et il respire.
 *
 *  Character3D en humeur « work » tape déjà sur son clavier : c'est ce qui
 *  dit qu'on entre dans un atelier et non dans une salle d'attente. On ajoute
 *  un balancement très lent autour de lui · sans lui, un personnage parfaitement
 *  aligné face caméra se lit comme une figurine posée, pas comme quelqu'un. */
function Master({ who, character, phase }: { who: string; character: Character; phase: number }) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = clock.elapsedTime + phase
    g.current.rotation.y = Math.sin(t * 0.35) * 0.12
  })
  return (
    <group ref={g}>
      <Character3D
        id={`card-master-${who}`}
        character={character}
        fn="Product"
        x={0}
        z={1.2}
        mood="work"
        selected={false}
        busy
        bare
        onSelect={() => {}}
      />
    </group>
  )
}

/** UN DISCIPLE QUI TRAVERSE LA SALLE · d'un mur à l'autre, devant le maître.
 *
 *  C'est lui qui fait la différence entre un décor et un lieu : quelqu'un
 *  ARRIVE. Il marche sur une ligne droite, fait demi-tour au bout au lieu de
 *  se téléporter, et s'arrête un instant de temps en temps. Sa cadence vient de
 *  son déplacement (three/gait), donc ses pieds ne patinent pas.
 *
 *  SA LIGNE EST DEVANT LE BUREAU, pas derrière · derrière, il passerait à
 *  travers les meubles adossés au mur du fond, et un personnage qui traverse
 *  un meuble se lit comme un bug. */
function Disciple({ who, character, phase }: { who: string; character: Character; phase: number }) {
  const g = useRef<THREE.Group>(null)
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  // IL ARPENTE LA MOITIÉ GAUCHE DE LA SALLE, pas toute la largeur. Sur toute
  // la largeur il passait exactement devant le maître à chaque aller-retour, et
  // la caméra, en surplomb, les superposait : deux personnages fondus en une
  // silhouette à deux têtes. Entre -5 et -1,6, il ne croise jamais le bureau.
  const st = useRef({ x: -3.4 + phase * 0.3, dir: 1, clock: phase, resting: false })
  const SPEED = 1.2
  const LEFT = -5.0
  const RIGHT = -1.6
  useFrame((_, raw) => {
    if (!g.current) return
    const dt = Math.min(raw, 0.05)
    const s = st.current
    s.clock += dt
    if (s.resting) {
      gait.current.speed = 0
      if (s.clock > 1.6) { s.resting = false; s.clock = 0 }
    } else {
      s.x += SPEED * s.dir * dt
      if (s.x > RIGHT) { s.x = RIGHT; s.dir = -1; s.resting = true; s.clock = 0 }
      if (s.x < LEFT) { s.x = LEFT; s.dir = 1; s.resting = true; s.clock = 0 }
      gait.current.speed = SPEED
      advance(gait.current, dt)
    }
    g.current.position.x = s.x
    // IL REGARDE OÙ IL VA · et face caméra quand il s'arrête, ce qui est le
    // geste qu'on attend d'un personnage de jeu qui vous remarque.
    const target = s.resting ? 0 : (s.dir > 0 ? Math.PI / 2 : -Math.PI / 2)
    g.current.rotation.y += (target - g.current.rotation.y) * Math.min(1, dt * 8)
  })
  return (
    <GaitProvider value={gait}>
      <group ref={g} position={[0, 0, 3.2]} scale={0.9}>
        <Character3D
          id={`card-disciple-${who}`}
          character={character}
          fn="Product"
          x={0}
          z={0}
          mood="idle"
          selected={false}
          busy={false}
          walk
          bare
          onSelect={() => {}}
        />
      </group>
    </GaitProvider>
  )
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

/** LES EMPLACEMENTS DE LA VIGNETTE · le kit du métier, rapproché du centre.
 *
 *  Dans la salle entière, les meubles de métier sont contre les murs, à neuf
 *  unités du centre. Vus dans une carte de trois cents pixels, ils tombaient
 *  hors cadre ou se réduisaient à quelques taches · et la salle de podcast
 *  ressemblait à la salle des marchés, ce qui était tout le reproche fait aux
 *  temples. Ici ils forment un fer à cheval autour du maître : deux de chaque
 *  côté, légèrement tournés vers lui, deux au fond. Les indices sont ceux des
 *  kits, donc le premier meuble de chaque kit reste le plus en vue. */
const CARD_SLOTS: { p: [number, number, number]; r: number }[] = [
  { p: [-5.4, 0, -0.6], r: 0.75 },
  { p: [5.4, 0, -0.6], r: -0.75 },
  { p: [-3.4, 0, -4.4], r: 0.3 },
  { p: [3.4, 0, -4.4], r: -0.3 },
  { p: [-6.2, 0, 2.4], r: 1.1 },
  { p: [6.2, 0, 2.4], r: -1.1 },
]

export function PackArt({ kit, tint, master, locked = false }: {
  /** la salle de la spécialité · voir data/packs */
  kit: DojoKit
  tint: string
  /** LE MAÎTRE DU PREMIER DOJO · celui qu'on rencontrera en entrant. Absent,
   *  on ne pose personne plutôt que d'inventer un visage. */
  master?: string
  /** UNE FORMATION FERMÉE GARDE SA SALLE INTACTE · la ternir supprimerait la
   *  seule chose qui donne envie de l'ouvrir. Le cadenas est dans la carte. */
  locked?: boolean
}) {
  const box = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(box)
  const calm = useCalm()
  const live = onScreen && !calm

  // LA PALETTE DU DOJO, À L'ACCENT DE LA FORMATION · le sol et les murs
  // restent ceux de toutes les salles du produit ; seule la couleur d'accent
  // change, et elle teinte les meubles du kit. C'est ce qui fait qu'on
  // reconnaît la même école d'une carte à l'autre.
  const tpl = templateById('dojo')
  const P = useMemo(() => ({ ...tpl.palette, accent: tint }), [tpl.palette, tint])
  const stations = useMemo(
    () => (master ? [{ id: master, fn: 'Product' as Department, x: 0, z: 1.2 }] : []),
    [master],
  )
  const phase = phaseOf(kit + (master ?? ''))
  const cast = DOJO_CAST[kit]

  return (
    <div className={`pa${locked ? ' off' : ''}`} ref={box} aria-hidden>
      <Canvas
        frameloop={live ? 'always' : 'demand'}
        // LA TAILLE SANS LES TRANSFORMATIONS · la carte arrive avec une mise à
        // l'échelle (94 % au départ de son animation) et se soulève au survol.
        // La mesure par défaut lit le rectangle À L'ÉCRAN, transformations
        // comprises : la salle se dimensionnait à 94 % de son cadre et
        // laissait une bande de ciel à droite de chaque carte. Mesuré : un
        // canvas de 308 pixels dans un cadre de 322. La largeur de mise en
        // page, elle, ignore les transformations.
        resize={{ offsetSize: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 7.6, 12.4], fov: 40, near: 0.1, far: 80 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.18 }}
        onCreated={({ camera }) => camera.lookAt(0, 1.4, -0.9)}
      >
        <color attach="background" args={[P.bg]} />
        {/* LE SOLEIL D'APRÈS-MIDI · voir l'en-tête. Le ciel bleu tombe dans
            l'hémisphère, le sol renvoie son vert, et la lumière clé vient d'en
            haut à droite comme dans tout jeu vu de trois quarts. */}
        <hemisphereLight args={['#dff1ff', P.ground, 1.05]} />
        <ambientLight intensity={0.28} />
        <directionalLight position={[7, 13, 9]} color="#fff0d4" intensity={1.75} />
        <directionalLight position={[-8, 6, -4]} color="#c8dcff" intensity={0.5} />
        <pointLight position={[0, 4.2, -3.5]} color={tint} intensity={0.9} distance={22} />
        <Suspense fallback={null}>
          <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
          <ThemeProps archetype={kit} accent={tint} slots={CARD_SLOTS} />
          <Master who={kit} character={cast.master} phase={phase} />
          <Disciple who={kit} character={cast.disciple} phase={phase} />
        </Suspense>
      </Canvas>
    </div>
  )
}
