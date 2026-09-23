// LA VIGNETTE D'UNE FORMATION · un petit dojo, à la place d'une image.
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
// HUIT SCÈNES EN TROIS DIMENSIONS SUR UN TÉLÉPHONE · comment on tient
//
// Une image par carte coûte un téléchargement. Une scène coûte un contexte
// graphique, et un navigateur en accorde une quinzaine. Trois précautions, et
// c'est ce qui rend la chose possible :
//
//   FRAMELOOP « DEMAND » · la scène est dessinée UNE FOIS puis s'arrête. Rien
//   ne bouge sur ces vignettes, donc rien ne justifie une boucle de rendu ; à
//   soixante images par seconde sur huit cartes, on brûlerait la batterie pour
//   redessiner exactement la même chose.
//
//   PAS D'OMBRES PORTÉES · elles coûtent une passe de rendu par lumière, pour
//   un détail invisible à cette taille.
//
//   UNE RÉSOLUTION BRIDÉE · une vignette de trois cents pixels n'a rien à
//   gagner au delà de deux fois la densité de l'écran.
//
// La vallée entière, elle, garde ses ombres et sa boucle : elle occupe
// l'écran, on la regarde, et il n'y en a qu'une.
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { M, Torii, Lantern, Tree, Rock, Roof } from './scenery'
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
      {/* LA TEINTE DE LA FORMATION, au sol · elle situe la carte sans
          repeindre le bâtiment, qui reste de la même pierre partout. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 3.4]}>
        <ringGeometry args={[1.9, 2.25, 32]} />
        <meshStandardMaterial color={tint} roughness={1} />
      </mesh>
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

/* ------------------------------------------------------------------ */
/* LES SIX COMPOSITIONS                                                */
/* ------------------------------------------------------------------ */
//
// CHACUNE DIT UNE CHOSE, et c'est pour ça qu'il y en a six et pas une avec des
// couleurs. Ajouter un décor ici ne demande qu'une entrée ; ajouter une image
// aurait demandé un fichier, un poids et une ronde de mise à jour.

function SceneGate() {
  // L'ENTRÉE · un torii devant, le bâtiment en retrait. C'est le week-end
  // gratuit : on ne montre pas ce qu'il y a dedans, on montre la porte.
  return (
    <>
      <Torii p={[0, 0, 3.1]} s={1.35} />
      <Hut w={2.2} h={1} d={2} roofR={1.8} roofH={0.8} />
      <Tree p={[-3.2, 0, 1.2]} kind="pine" s={1.1} />
      <Tree p={[3.1, 0, 0.6]} kind="pine" s={0.95} />
      <Lantern p={[-1.7, 0, 2.9]} s={1} />
      <Lantern p={[1.7, 0, 2.9]} s={1} />
    </>
  )
}

function SceneHall() {
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
      <Rock p={[-1.5, 0.12, 3.3]} r={0.34} seed={3.4} />
      <Rock p={[2.2, 0.14, 2.9]} r={0.46} seed={5.1} />
      <Tree p={[3.3, 0, 1]} kind="maple" s={1.2} />
      <Tree p={[-3.4, 0, 0.8]} kind="pine" s={1} />
      <Lantern p={[1.1, 0, 3.6]} s={1.05} />
    </>
  )
}

function SceneForge() {
  // LA FORGE · un bâtiment trapu et une enclume. Pour les métiers qui
  // fabriquent : on y produit quelque chose qui tient.
  return (
    <>
      <Hut w={2.8} h={1.15} d={2.2} roofR={2.15} roofH={0.8} />
      <mesh position={[2.3, 0.35, 2.6]}>
        <boxGeometry args={[0.9, 0.7, 0.7]} />
        <meshStandardMaterial color={M.stoneDark} roughness={1} />
      </mesh>
      <mesh position={[2.3, 0.85, 2.6]}>
        <boxGeometry args={[1.2, 0.3, 0.5]} />
        <meshStandardMaterial color={M.tile} roughness={0.8} />
      </mesh>
      <Rock p={[-2.6, 0.14, 2.8]} r={0.42} seed={2.2} />
      <Tree p={[-3.4, 0, 0.6]} kind="pine" s={1.05} />
      <Lantern p={[-1.4, 0, 3.4]} s={0.95} />
    </>
  )
}

function SceneTerrace() {
  // LA TERRASSE · une plateforme de bois devant le bâtiment. Pour les métiers
  // qui parlent : on s'y adresse à quelqu'un.
  return (
    <>
      <Hut w={2.5} h={1.05} d={2} roofR={2} roofH={0.85} />
      <mesh position={[0, 0.22, 3]}>
        <boxGeometry args={[4, 0.2, 1.8]} />
        <meshStandardMaterial color={M.wood} roughness={1} />
      </mesh>
      {[-1.8, 1.8].map((x) => (
        <mesh key={x} position={[x, 0.55, 3.7]}>
          <cylinderGeometry args={[0.07, 0.07, 0.6, 6]} />
          <meshStandardMaterial color={M.woodDark} roughness={1} />
        </mesh>
      ))}
      <Tree p={[3.4, 0, 0.8]} kind="maple" s={1.15} />
      <Tree p={[-3.5, 0, 0.5]} kind="pine" s={1} />
    </>
  )
}

function ScenePavilion() {
  // LE PAVILLON SUR L'EAU · un bassin devant. Pour les métiers de décision :
  // on s'y arrête avant de choisir.
  return (
    <>
      <Hut w={2.3} h={1.05} d={2} roofR={1.9} roofH={0.85} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 3.3]}>
        <circleGeometry args={[2.1, 28]} />
        <meshStandardMaterial color={M.water} roughness={0.3} metalness={0.08} />
      </mesh>
      <Rock p={[-1.5, 0.12, 3.9]} r={0.36} seed={4.2} />
      <Rock p={[1.6, 0.1, 4]} r={0.3} seed={1.9} />
      <Tree p={[-3.3, 0, 0.9]} kind="maple" s={1.1} />
      <Tree p={[3.3, 0, 0.7]} kind="pine" s={1.05} />
      <Lantern p={[2.4, 0, 3.2]} s={0.9} />
    </>
  )
}

const SCENES: Record<Pack['scene'], () => JSX.Element> = {
  gate: SceneGate,
  hall: SceneHall,
  garden: SceneGarden,
  forge: SceneForge,
  terrace: SceneTerrace,
  pavilion: ScenePavilion,
}

/* ------------------------------------------------------------------ */

export function PackArt({ scene, tint, locked = false }: {
  scene: Pack['scene']
  tint: string
  /** UNE FORMATION FERMÉE GARDE SA SCÈNE INTACTE · la ternir supprimerait la
   *  seule chose qui donne envie de l'ouvrir, et sur un écran où les huit sont
   *  fermées au premier jour, ça ferait huit images éteintes. */
  locked?: boolean
}) {
  const Scene = SCENES[scene] ?? SceneHall
  return (
    <div className={`pa${locked ? ' off' : ''}`} aria-hidden>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [0, 3.9, 8.6], fov: 34 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ camera }) => camera.lookAt(0, 1.55, 0.2)}
      >
        <color attach="background" args={['#eaf0f3']} />
        {/* LA LUMIÈRE EST PLUS HAUTE QUE DANS LA VALLÉE · une vignette de deux
            cents pixels perd tout son relief si les tuiles ardoise y virent au
            noir. On éclaire pour être lisible, pas pour être exact. */}
        <hemisphereLight args={['#ffffff', '#d7dfce', 1.05]} />
        <directionalLight position={[4, 8, 6]} color="#fff6e8" intensity={1.35} />
        <directionalLight position={[-5, 4, -3]} color="#d7e6ff" intensity={0.6} />
        <Suspense fallback={null}>
          <Ground tint={tint} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
