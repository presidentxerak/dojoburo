// LA VIGNETTE D'UNE FORMATION · un petit dojo habité, à la place d'une image.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE SCÈNE PLUTÔT QU'UNE IMAGE
//
// Les maquettes posent sur chaque carte un aplat de couleur avec un
// pictogramme au milieu. C'est propre et ça ne dit rien : huit cartes, huit
// dégradés, et rien qui distingue une formation d'une autre sinon sa teinte.
//
// Une scène dit où l'on va. Le week-end gratuit s'ouvre sur un torii, parce
// que c'est une entrée ; la formation complète montre le grand hall, parce que
// c'est le bâtiment principal ; un métier montre son atelier. On reconnaît sa
// formation à sa silhouette avant d'avoir lu son nom, ce qu'aucun dégradé ne
// permet.
//
// ---------------------------------------------------------------------------
// CE QUI A CHANGÉ, ET LA RAISON EN UNE PHRASE : C'ÉTAIT UNE MAQUETTE
//
// La première version de ces vignettes montrait un bâtiment gris, deux pins et
// une lanterne, éclairés proprement, immobiles. Tout y était juste et rien n'y
// donnait envie d'entrer, parce qu'il manquait les deux seules choses qui
// séparent un décor d'un lieu :
//
//   QUELQU'UN Y EST. Le maître du premier dojo de la formation attend devant
//   sa porte. Ce n'est pas un figurant · c'est le visage qu'on retrouvera dans
//   le cours, donc on reconnaît son maître avant d'être entré, et la carte
//   promet quelque chose qu'elle tient.
//
//   ÇA BOUGE. Il respire, la bannière prend le vent, les carpes tournent dans
//   le bassin. Rien de tout ça ne demande l'attention ; c'est précisément ce
//   qu'on veut. Une image fixe se lit comme une capture d'écran, et une
//   capture d'écran n'a jamais donné envie de jouer.
//
// La palette a suivi le même chemin · voir game/scenery, où les couleurs sont
// passées des demi-teintes d'une photographie à leur pleine valeur.
//
// ---------------------------------------------------------------------------
// HUIT SCÈNES ANIMÉES SUR UN TÉLÉPHONE · comment on tient, maintenant qu'elles
// ne sont plus fixes
//
// C'est la vraie question, et la réponse tient en une règle : UNE SCÈNE NE
// TOURNE QUE PENDANT QU'ON LA REGARDE.
//
//   L'OBSERVATEUR D'INTERSECTION décide. Hors de l'écran, la carte repasse en
//   « demand » et son contexte graphique ne dessine plus rien du tout · pas
//   une image par seconde, zéro. Sur un téléphone en colonne unique, une ou
//   deux vignettes sont visibles à la fois, donc une ou deux tournent.
//
//   LA MARGE DE DÉCLENCHEMENT EST GÉNÉREUSE (200 px). Une scène qui démarre
//   au pixel où elle entre dans l'écran se voit démarrer, et c'est pire qu'une
//   scène fixe : ça ressemble à un défaut de chargement.
//
//   LA RÉSOLUTION EST BRIDÉE à 1,5 fois la densité. Une vignette de trois
//   cents pixels n'a rien à gagner au delà, et c'est le poste qui coûte le
//   plus cher sur un téléphone récent, dont l'écran est à trois.
//
//   PAS D'OMBRES PORTÉES · elles coûtent une passe de rendu par lumière, pour
//   un détail invisible à cette taille. Le personnage garde son ombre de
//   contact, qui est un disque et non une passe.
//
//   MOUVEMENT RÉDUIT · si le système le demande, la scène reste en « demand »
//   même visible. Elle est alors dessinée une fois, exactement comme avant, et
//   personne ne perd rien d'essentiel.
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
  M, Torii, Lantern, Tree, Rock, Roof, Dummy, Barrels, Bell, Banner, Koi, Cloud,
} from './scenery'
import { Character3D } from '../components/three/Character3D'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import type { Pack } from '../data/packs'

/* ------------------------------------------------------------------ */
/* LES PIÈCES PROPRES AUX VIGNETTES                                    */
/* ------------------------------------------------------------------ */

/** Le sol d'une vignette · un disque, pas un plan infini. Un plan carré
 *  montrerait ses arêtes dans un cadre aussi serré. */
function Ground({ tint }: { tint: string }) {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[9, 40]} />
        <meshStandardMaterial color={M.moss} roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[5.4, 36]} />
        <meshStandardMaterial color={M.gravel} roughness={1} />
      </mesh>

      {/* LE GRAVIER EST RATISSÉ · trois sillons concentriques, à peine plus
          sombres que lui. Sans eux c'est une dalle de béton clair : c'est le
          ratissage qui fait qu'on lit un jardin sec, et c'est un des rares
          détails qui coûte trois anneaux et se voit vraiment. */}
      {[2.2, 3.15, 4.1].map((r) => (
        <mesh key={r} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <ringGeometry args={[r, r + 0.075, 48]} />
          <meshStandardMaterial color={M.stoneDark} roughness={1} transparent opacity={0.4} />
        </mesh>
      ))}

      {/* LA TEINTE DE LA FORMATION, EN PAS JAPONAIS · elle situe la carte sans
          repeindre le bâtiment, qui reste de la même pierre partout.
          ELLE ÉTAIT UN ANNEAU PLEIN, et c'était une faute qui ne se voyait que
          depuis qu'un maître s'y tient : un arc de couleur vive au sol, autour
          de quelqu'un, se lit comme une piste de cirque. Des dalles teintées
          qui mènent à la porte disent la même chose · voici la couleur de
          cette formation · et disent en plus par où l'on entre. */}
      {[1.35, 2.15, 2.95, 3.75].map((z, i) => (
        <mesh
          key={z}
          rotation={[-Math.PI / 2, 0, i * 0.7]}
          position={[(i % 2 === 0 ? 1 : -1) * 0.2, 0.03, z]}
        >
          <circleGeometry args={[0.34, 6]} />
          <meshStandardMaterial color={tint} roughness={1} />
        </mesh>
      ))}
    </>
  )
}

/** Un bâtiment simple · le corps commun des six scènes, à la hauteur qu'on
 *  lui demande. Le grand hall est le même en plus large et plus haut. */
function Hut({ w = 2.6, h = 1.2, d = 2.3, roofR = 2, roofH = 0.9, y = 0 }: {
  w?: number; h?: number; d?: number; roofR?: number; roofH?: number; y?: number
}) {
  return (
    <group position={[0, y, 0]}>
      <mesh position={[0, 0.14, 0]}>
        <boxGeometry args={[w + 0.9, 0.28, d + 0.9]} />
        <meshStandardMaterial color={M.stone} roughness={1} />
      </mesh>
      <mesh position={[0, 0.38, 0]}>
        <boxGeometry args={[w + 0.5, 0.2, d + 0.5]} />
        <meshStandardMaterial color={M.wood} roughness={1} />
      </mesh>
      <mesh position={[0, 0.48 + h / 2, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={M.plaster} roughness={1} />
      </mesh>
      {[-w / 2 - 0.08, w / 2 + 0.08].map((x) => (
        <mesh key={x} position={[x, 0.48 + h / 2, 0]}>
          <boxGeometry args={[0.16, h + 0.06, d + 0.1]} />
          <meshStandardMaterial color={M.wood} roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.5, d / 2 + 0.02]}>
        <planeGeometry args={[w * 0.42, h * 0.8]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <Roof r={roofR} h={roofH} y={0.48 + h} flare={1.3} />
    </group>
  )
}

/** LE MAÎTRE DE LA FORMATION · celui du premier dojo, devant sa porte.
 *
 *  IL RESPIRE, ET C'EST TOUT CE QU'IL FAIT. Un personnage parfaitement
 *  immobile devant un bâtiment se lit comme une statue, et une statue est un
 *  élément de décor de plus ; un personnage qui monte et descend d'un centième
 *  d'unité se lit comme quelqu'un qui attend. La différence entière entre les
 *  deux tient dans cette amplitude, et elle doit rester sous le seuil où le
 *  mouvement se remarque : dès qu'on VOIT respirer, on ne voit plus que ça.
 *
 *  LE DÉPHASAGE VIENT DE LA FORMATION. Huit cartes dont les huit maîtres
 *  respirent ensemble se lisent comme un mécanisme, ce qui est l'effet
 *  exactement inverse de celui qu'on cherche. Le décalage est tiré du nom de
 *  la scène, donc il est stable d'un rendu à l'autre · une carte qui repart
 *  d'une phase différente à chaque défilement sauterait.
 *
 *  `bare` RETIRE TOUT LE HORS-SCÈNE · la bulle de dialogue, l'anneau de
 *  sélection et les gestionnaires de clic. Dans une vignette de deux cents
 *  pixels, une bulle projetée en HTML sort du cadre par le haut et se pose sur
 *  le titre de la carte d'à côté. Elle a sa place dans la vallée, qui est
 *  plein écran ; elle n'en a aucune ici. */
function Master({ useCaseId, phase, at, scale = 0.62 }: {
  useCaseId: string
  phase: number
  at: [number, number, number]
  scale?: number
}) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = clock.elapsedTime + phase
    g.current.position.y = at[1] + Math.sin(t * 1.15) * 0.035
    // LE REGARD BALAIE LENTEMENT · il ne fixe pas la caméra. Quelqu'un qui
    // vous regarde sans cligner pendant que vous lisez un prix est
    // désagréable, et on ne sait jamais dire pourquoi.
    g.current.rotation.y = Math.sin(t * 0.42) * 0.22
  })
  return (
    <group ref={g} position={at} scale={scale}>
      <Character3D
        id={`pack-master-${useCaseId}`}
        character={characterFor(faceIdForUseCase(useCaseId))}
        fn="Product"
        x={0}
        z={0}
        mood="idle"
        selected={false}
        busy={false}
        bare
        onSelect={() => {}}
      />
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* LES SIX COMPOSITIONS                                                */
/* ------------------------------------------------------------------ */
//
// CHACUNE DIT UNE CHOSE, et c'est pour ça qu'il y en a six et pas une avec des
// couleurs. Ajouter un décor ici ne demande qu'une entrée ; ajouter une image
// aurait demandé un fichier, un poids et une ronde de mise à jour.
//
// CHACUNE PORTE MAINTENANT UN OBJET QU'ON UTILISE · un mannequin, des
// tonneaux, une cloche. Un jardin sans outil est un jardin de carte postale ;
// c'est l'outil posé qui dit qu'on travaille ici.

function SceneGate({ tint }: { tint: string }) {
  // L'ENTRÉE · un torii devant, le bâtiment en retrait. C'est le week-end
  // gratuit : on ne montre pas ce qu'il y a dedans, on montre la porte.
  return (
    <>
      <Torii p={[0, 0, 3.1]} s={1.35} />
      <Hut w={2.2} h={1} d={2} roofR={1.8} roofH={0.8} />
      <Tree p={[-3.2, 0, 1.2]} kind="sakura" s={1.15} />
      <Tree p={[3.1, 0, 0.6]} kind="pine" s={0.95} />
      <Lantern p={[-1.7, 0, 2.9]} s={1} />
      <Lantern p={[0.95, 0, 3.4]} s={1} />
      <Banner p={[3.1, 0, 2.6]} tint={tint} s={0.85} />
    </>
  )
}

function SceneHall({ tint }: { tint: string }) {
  // LE GRAND HALL · le bâtiment principal, deux toitures, encadré de pins.
  // C'est la formation complète, et elle doit avoir l'air de la plus grande.
  return (
    <>
      <Hut w={3.4} h={1.5} d={2.8} roofR={2.55} roofH={1.05} />
      <group position={[0, 2.5, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.7, 0.8, 1.5]} />
          <meshStandardMaterial color={M.plaster} roughness={1} />
        </mesh>
        <Roof r={1.4} h={0.8} y={0.8} flare={1.3} />
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 6]} />
          <meshStandardMaterial color={M.brass} roughness={0.5} metalness={0.3} />
        </mesh>
      </group>
      <Tree p={[-3.6, 0, 0.4]} kind="pine" s={1.2} />
      <Tree p={[3.6, 0, 0.1]} kind="pine" s={1.15} />
      <Lantern p={[-2.3, 0, 2.8]} s={0.95} />
      <Lantern p={[2.3, 0, 2.8]} s={0.95} />
      <Banner p={[-3.1, 0, 2.9]} tint={tint} s={0.9} />
      <Banner p={[3.1, 0, 2.9]} tint={tint} s={0.9} />
    </>
  )
}

function SceneGarden() {
  // LE JARDIN SEC · pierres et mousse devant un pavillon bas. Pour les
  // métiers d'attention, où le travail est de trier plutôt que de bâtir.
  return (
    <>
      <Hut w={2.4} h={1} d={2.1} roofR={1.95} roofH={0.85} />
      <Rock p={[-2.5, 0.15, 2.6]} r={0.52} seed={1.2} />
      <Rock p={[-2.2, 0.12, 3.9]} r={0.34} seed={3.4} />
      <Rock p={[2.2, 0.14, 2.9]} r={0.46} seed={5.1} />
      <Tree p={[3.3, 0, 1]} kind="maple" s={1.2} />
      <Tree p={[-3.4, 0, 0.8]} kind="sakura" s={1.05} />
      <Lantern p={[1.1, 0, 3.6]} s={1.05} />
      <Bell p={[-2.8, 0, 1.6]} s={0.7} />
    </>
  )
}

function SceneForge() {
  // LA FORGE · un bâtiment trapu, une enclume et un mannequin qui a servi.
  // Pour les métiers qui fabriquent : on y produit quelque chose qui tient.
  return (
    <>
      <Hut w={2.8} h={1.15} d={2.2} roofR={2.15} roofH={0.8} />
      <mesh position={[2.55, 0.35, 2.9]}>
        <boxGeometry args={[0.9, 0.7, 0.7]} />
        <meshStandardMaterial color={M.stoneDark} roughness={1} />
      </mesh>
      <mesh position={[2.55, 0.85, 2.9]}>
        <boxGeometry args={[1.2, 0.3, 0.5]} />
        <meshStandardMaterial color={M.tile} roughness={0.8} />
      </mesh>
      <Dummy p={[-2.4, 0, 2.9]} s={0.95} />
      <Rock p={[-3.3, 0.14, 1.6]} r={0.42} seed={2.2} />
      <Tree p={[-3.4, 0, 0.2]} kind="pine" s={1.05} />
      <Barrels p={[3.1, 0, 1.2]} s={0.85} />
    </>
  )
}

function SceneTerrace({ tint }: { tint: string }) {
  // LA TERRASSE · une plateforme de bois devant le bâtiment. Pour les métiers
  // qui parlent : on s'y adresse à quelqu'un.
  return (
    <>
      <Hut w={2.5} h={1.05} d={2} roofR={2} roofH={0.85} />
      {/* LA PLATEFORME A MAIGRI · elle faisait quatre unités sur un mètre
          quatre-vingts, donc un plateau de bois qui occupait le tiers bas de
          la vignette et sur lequel le maître avait l'air posé comme un objet.
          Une terrasse est une avancée devant une porte, pas une estrade. */}
      <mesh position={[0, 0.22, 2.95]}>
        <boxGeometry args={[3.1, 0.2, 1.3]} />
        <meshStandardMaterial color={M.wood} roughness={1} />
      </mesh>
      {[-1.4, 1.4].map((x) => (
        <mesh key={x} position={[x, 0.55, 3.5]}>
          <cylinderGeometry args={[0.07, 0.07, 0.6, 6]} />
          <meshStandardMaterial color={M.woodDark} roughness={1} />
        </mesh>
      ))}
      <Tree p={[3.4, 0, 0.8]} kind="sakura" s={1.2} />
      <Tree p={[-3.5, 0, 0.5]} kind="pine" s={1} />
      <Banner p={[-2.9, 0, 2.6]} tint={tint} s={0.85} />
      <Lantern p={[2.6, 0, 3.4]} s={0.9} />
    </>
  )
}

function ScenePavilion() {
  // LE PAVILLON SUR L'EAU · un bassin devant, et deux carpes dedans. Pour les
  // métiers de décision : on s'y arrête avant de choisir.
  return (
    <>
      <Hut w={2.3} h={1.05} d={2} roofR={1.9} roofH={0.85} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 3.3]}>
        <circleGeometry args={[2.1, 28]} />
        <meshStandardMaterial color={M.water} roughness={0.25} metalness={0.1} />
      </mesh>
      {/* DEUX CARPES, À DES VITESSES PREMIÈRES L'UNE DE L'AUTRE · voir Koi.
          Elles nagent SOUS la surface (y négatif d'un rien) parce qu'une carpe
          posée dessus flotte comme un jouet de bain. */}
      <Koi c={[-0.35, 3.3]} r={0.95} y={-0.04} speed={0.55} phase={0} />
      <Koi c={[0.4, 3.4]} r={1.35} y={-0.06} speed={0.38} phase={2.2} tint="#ffd166" />
      <Rock p={[-1.5, 0.12, 4.4]} r={0.36} seed={4.2} />
      <Rock p={[1.6, 0.1, 4.5]} r={0.3} seed={1.9} />
      <Tree p={[-3.3, 0, 0.9]} kind="maple" s={1.1} />
      <Tree p={[3.3, 0, 0.7]} kind="sakura" s={1.05} />
      <Lantern p={[2.55, 0, 3.0]} s={0.9} />
    </>
  )
}

const SCENES: Record<Pack['scene'], (p: { tint: string }) => JSX.Element> = {
  gate: SceneGate,
  hall: SceneHall,
  garden: SceneGarden,
  forge: SceneForge,
  terrace: SceneTerrace,
  pavilion: ScenePavilion,
}

/** OÙ SE TIENT LE MAÎTRE, SCÈNE PAR SCÈNE.
 *
 *  POURQUOI CE N'EST PAS UNE POSITION UNIQUE. Une première version le plantait
 *  au même endroit dans les six compositions, et le résultat était le même
 *  défaut six fois sous des formes différentes : il se tenait dans le bassin du
 *  pavillon, derrière le poteau du torii, sur l'enclume de la forge. Un
 *  personnage qui traverse le décor ne se lit pas comme mal placé, il se lit
 *  comme un bug · et c'est exactement ce qu'on venait corriger.
 *
 *  IL N'EST JAMAIS AU CENTRE. Au centre, il masque la porte, c'est à dire la
 *  seule chose du bâtiment qui donne son échelle. À côté du chemin, il
 *  l'indique.
 *
 *  LA TERRASSE EST LE SEUL CAS À HAUTEUR NON NULLE · il s'y tient SUR la
 *  plateforme (0,32), pas dedans. */
const MASTER_AT: Record<Pack['scene'], [number, number, number]> = {
  gate: [1.85, 0, 2.05],      // devant, à droite du portique
  hall: [1.75, 0, 2.95],      // en bas des marches
  garden: [-1.25, 0, 3.15],   // dans le gravier, entre deux pierres
  forge: [0.55, 0, 3.25],     // devant l'atelier, l'enclume à sa gauche
  terrace: [0.9, 0.32, 3.05], // sur la plateforme de bois
  pavilion: [-2.05, 0, 2.4],  // au bord du bassin, jamais dedans
}

/* ------------------------------------------------------------------ */

/** UN DÉPHASAGE STABLE PAR CARTE · voir Master. Tiré du texte plutôt que d'un
 *  tirage, pour qu'une carte reparte toujours de la même phase. */
function phaseOf(text: string): number {
  let h = 0
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) % 10000
  return (h / 10000) * Math.PI * 2
}

/** VISIBLE À L'ÉCRAN ? · c'est ce qui décide si la scène tourne.
 *
 *  Sans observateur (moteur trop ancien, rendu côté serveur), on répond
 *  « oui » : une vignette qui tourne coûte de la batterie, une vignette
 *  noire coûte la carte. Le repli ne doit jamais être celui qui casse. */
function useOnScreen<T extends HTMLElement>(ref: React.RefObject<T>): boolean {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    setOn(false)
    const io = new IntersectionObserver(
      ([e]) => setOn(e.isIntersecting),
      // LA MARGE · la scène démarre bien avant d'entrer dans le cadre, pour
      // qu'on ne la voie jamais démarrer. Voir l'en-tête.
      { rootMargin: '200px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return on
}

/** LE MOUVEMENT RÉDUIT · demandé par le système, respecté sans discussion.
 *  Il est LU EN CONTINU et non une fois au montage : le réglage se change
 *  pendant qu'une page est ouverte, et une animation qui continue après qu'on
 *  a demandé qu'elle s'arrête est exactement la plainte qu'on voulait éviter. */
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

export function PackArt({ scene, tint, master, locked = false }: {
  scene: Pack['scene']
  tint: string
  /** LE MAÎTRE DU PREMIER DOJO · celui qu'on rencontrera en entrant. Absent,
   *  la scène reste un décor vide plutôt que d'inventer un visage : montrer
   *  quelqu'un qui n'est pas dans le cours serait une promesse fausse. */
  master?: string
  /** UNE FORMATION FERMÉE GARDE SA SCÈNE INTACTE · la ternir supprimerait la
   *  seule chose qui donne envie de l'ouvrir, et sur un écran où les huit sont
   *  fermées au premier jour, ça ferait huit images éteintes. */
  locked?: boolean
}) {
  const Scene = SCENES[scene] ?? SceneHall
  const box = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(box)
  const calm = useCalm()
  const live = onScreen && !calm

  return (
    <div className={`pa${locked ? ' off' : ''}`} ref={box} aria-hidden>
      <Canvas
        // HORS DE L'ÉCRAN, RIEN N'EST DESSINÉ · voir l'en-tête. C'est la règle
        // qui rend huit scènes animées tenables sur un téléphone.
        frameloop={live ? 'always' : 'demand'}
        dpr={[1, 1.5]}
        camera={{ position: [0, 3.25, 9.6], fov: 34 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ camera }) => camera.lookAt(0, 1.35, 1.35)}
      >
        {/* LE CIEL PORTE LA TEINTE DE LA FORMATION, en très dilué. C'est ce
            qui fait que huit vignettes du même temple ne se ressemblent pas :
            la lumière du fond change, pas le bâtiment. Un aplat gris commun
            aurait redonné les huit images interchangeables du début. */}
        <color attach="background" args={[skyOf(tint)]} />
        <fog attach="fog" args={[skyOf(tint), 15, 30]} />
        {/* LA LUMIÈRE EST PLUS HAUTE QUE DANS LA VALLÉE · une vignette de deux
            cents pixels perd tout son relief si les tuiles y virent au noir.
            On éclaire pour être lisible, pas pour être exact. */}
        <hemisphereLight args={['#ffffff', '#cfe7c9', 1.0]} />
        <directionalLight position={[4, 8, 6]} color="#fff4e0" intensity={1.45} />
        <directionalLight position={[-5, 4, -3]} color="#cfe0ff" intensity={0.55} />
        <Suspense fallback={null}>
          <Ground tint={tint} />
          <Scene tint={tint} />
          {master && (
            <Master useCaseId={master} phase={phaseOf(scene + master)} at={MASTER_AT[scene] ?? MASTER_AT.hall} />
          )}
          <Cloud p={[-4.6, 5.2, -5]} s={0.8} drift={0.05} />
          <Cloud p={[4.2, 6, -6.5]} s={0.62} drift={0.07} />
        </Suspense>
      </Canvas>
    </div>
  )
}

/** LE CIEL D'UNE TEINTE · la couleur de la formation, poussée vers le blanc.
 *
 *  Le mélange se fait ICI plutôt que par une variable CSS parce que c'est une
 *  couleur de rendu et non une couleur d'interface : trois.js veut un nombre,
 *  pas un `color-mix` que seul un navigateur sait résoudre. Douze pour cent
 *  est le point où la teinte se lit sans que le ciel devienne un aplat de
 *  couleur, ce qui écraserait le bâtiment posé devant. */
function skyOf(tint: string): string {
  const c = new THREE.Color(tint)
  return `#${c.lerp(new THREE.Color('#ffffff'), 0.88).getHexString()}`
}
