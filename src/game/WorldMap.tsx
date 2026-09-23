// LA CARTE DU MONDE · une vallée de temples, vue de dessus.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE CARTE PLUTÔT QU'UNE LISTE
//
// Un programme de treize modules affiché en liste demande de comparer treize
// choses avant d'en comprendre une. Une carte demande de choisir UN endroit où
// aller, ce qui est la première décision qu'on sait prendre, et elle montre en
// même temps ce qui est fait, ce qui reste et où l'on se trouve.
//
// ---------------------------------------------------------------------------
// CE QUE LA PREMIÈRE VERSION FAISAIT MAL, ET QUI EST CORRIGÉ ICI
//
// Elle posait treize cônes à quatre pans sur des disques blancs. Vue de haut,
// un cône à quatre pans ne se lit pas comme un toit : il se lit comme un
// losange plat, et treize losanges de treize couleurs différentes font un
// tableau de pastilles, pas un lieu. Quatre fautes, toutes visibles à l'écran :
//
//   LA COULEUR PORTAIT LE BÂTIMENT. Treize teintes sur treize toits, et rien
//   ne ressemblait plus à un temple. La couleur d'une cité vit maintenant sur
//   sa BANNIÈRE et son étiquette ; les temples sont tous du même bois, de la
//   même pierre et des mêmes tuiles, comme de vrais temples d'une même vallée.
//
//   LES BÂTIMENTS ÉTAIENT PLATS. Un socle de 1,4 et un toit de 1,5 vus de
//   trente-quatre unités de haut, c'est une tache. Ils montent maintenant à
//   près de six unités, sur deux étages de toiture, avec un avant-toit qui
//   déborde · c'est l'avant-toit qui fait lire un toit japonais.
//
//   LA CARTE DÉBORDAIT DU CADRE. La caméra était posée à une distance écrite à
//   la main, donc juste sur un écran et fausse sur tous les autres. Elle est
//   maintenant CALCULÉE à partir de l'étendue réelle et du format de la
//   fenêtre, et recalculée quand la fenêtre change.
//
//   LES CITÉS ÉTAIENT TROP LOIN LES UNES DES AUTRES. Une case valait sept
//   unités pour des bâtiments de trois : on voyait surtout du sol.
//
// ---------------------------------------------------------------------------
// CE QUI EST DESSINÉ, ET POURQUOI CHAQUE CHOSE Y EST
//
//   la rivière      elle traverse la vallée et donne une direction à lire
//   les ponts       là où un chemin franchit la rivière, jamais ailleurs
//   les chemins     ils relient les cités dans l'ordre conseillé
//   le jardin       gravier ratissé, mousse, pierres, arbres, une lanterne
//   le temple       pierre, bois, deux toitures, une bannière de couleur
//   le maître       devant son temple, et c'est lui qu'on vient voir
//
// Rien d'autre. Une carte de jeu se lit en une seconde ou ne se lit pas, et
// chaque objet ajouté coûte cette seconde. Pas de nuages, pas d'animation
// d'ambiance, pas de végétation de remplissage.
//
// ---------------------------------------------------------------------------
// LE HASARD EST SEMÉ, JAMAIS TIRÉ
//
// Deux jardins identiques feraient treize fois le même écran. Mais un
// Math.random() dans un rendu redessine un autre jardin à chaque image : les
// arbres sautillent. Chaque jardin est donc tiré d'un GÉNÉRATEUR SEMÉ par
// l'identifiant de sa cité · même cité, même jardin, à jamais.
import { Suspense, useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { StudioLight } from '../components/three/StudioLight'
import { Character3D } from '../components/three/Character3D'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import { PATH_MODULES, say, type Module } from '../data/curriculum'
import { useLang } from '../i18n'
import { useGame } from './progress'

/** Une case de la grille vaut cette distance en unités du monde.
 *
 *  ELLE A ÉTÉ RESSERRÉE de sept à quatre et demie. Sept convenait à des
 *  bâtiments de trois unités posés à plat ; avec des temples qui montent à
 *  six, la même valeur laissait des plaines vides entre les cités et donnait
 *  une carte qu'il fallait parcourir des yeux au lieu de la saisir. */
const CELL = 4.6

/* ================================================================== */
/* LES MATIÈRES · toutes les cités les partagent                       */
/* ================================================================== */
//
// UNE SEULE PALETTE POUR LES TREIZE TEMPLES. C'est la demande, et c'est aussi
// ce qui fait qu'une vallée ressemble à une vallée : les temples d'un même
// pays sont bâtis des mêmes matériaux. Ce qui distingue une cité est sa
// BANNIÈRE, exactement comme un mon distingue deux temples identiques.
const M = {
  stone: '#cfcabd',       // la pierre des socles et des dalles
  stoneDark: '#b3ad9e',   // ses arêtes
  plaster: '#f6f3ec',     // les murs
  wood: '#8a5636',        // les poteaux, les poutres, les rampes
  woodDark: '#6d4229',    // les ombres du bois
  tile: '#3c4350',        // les tuiles · le même gris ardoise partout
  tileEdge: '#2b313c',    // l'arête des avant-toits
  brass: '#c8a02e',       // le fleuron
  gravel: '#e9e5db',      // le gravier ratissé
  moss: '#8fbf8a',        // la mousse
  mossDark: '#6fa471',
  water: '#6db4d8',
  bridge: '#c4503f',      // le vermillon des ponts
  trunk: '#7b5b43',
  pine: '#4f8a5e',
  maple: '#cc6a42',
}

/* ================================================================== */
/* LE HASARD SEMÉ                                                      */
/* ================================================================== */

/** Un générateur déterministe à partir d'un texte · même cité, même jardin.
 *  Voir l'en-tête : un tirage dans le rendu fait sautiller les arbres. */
function seeded(text: string) {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return () => {
    h ^= h << 13; h >>>= 0
    h ^= h >> 17
    h ^= h << 5; h >>>= 0
    return h / 4294967296
  }
}

/* ================================================================== */
/* LA GÉOMÉTRIE DU MONDE                                               */
/* ================================================================== */

/** La grille du programme vers le monde 3D · le centre est calculé depuis les
 *  cités elles mêmes, donc ajouter une cité en bord de carte recentre
 *  l'ensemble au lieu de la pousser hors champ. */
function useWorld(modules: Module[]) {
  return useMemo(() => {
    const xs = modules.map((m) => m.at[0])
    const ys = modules.map((m) => m.at[1])
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2
    const pos = (m: Module): [number, number] => [(m.at[0] - cx) * CELL, (m.at[1] - cy) * CELL]
    const span = {
      w: (Math.max(...xs) - Math.min(...xs) + 2.4) * CELL,
      d: (Math.max(...ys) - Math.min(...ys) + 2.4) * CELL,
    }
    return { pos, span }
  }, [modules])
}

/* ================================================================== */
/* LA CAMÉRA QUI TIENT TOUT LE MONDE DANS LE CADRE                     */
/* ================================================================== */

/** Elle cadre la vallée entière, quelle que soit la fenêtre.
 *
 *  POURQUOI CE N'EST PAS UNE POSITION ÉCRITE À LA MAIN. Elle l'était, et la
 *  carte débordait : les cités des deux bords sortaient du cadre sur un écran
 *  large, et tout se tassait au centre sur un téléphone. Une position juste
 *  sur l'écran de celui qui l'a écrite est fausse sur tous les autres.
 *
 *  La méthode est celle qu'on emploie pour cadrer un objet : on enferme la
 *  vallée dans une sphère, et on recule jusqu'à ce que cette sphère tienne
 *  dans le plus étroit des deux champs, le vertical ou l'horizontal. Un écran
 *  de téléphone est haut et étroit, donc c'est l'horizontal qui décide ; sur
 *  un écran large, c'est l'inverse. */
function FitCamera({ span, pitch = 0.82 }: { span: { w: number; d: number }; pitch?: number }) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera
  const size = useThree((s) => s.size)

  useEffect(() => {
    const aspect = Math.max(0.2, size.width / Math.max(1, size.height))
    const vFov = (camera.fov * Math.PI) / 180
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect)

    // ON CADRE LA BOÎTE, PAS LA SPHÈRE QUI L'ENTOURE. Une première version
    // enfermait la vallée dans une sphère, ce qui est la bonne méthode pour un
    // objet compact et la mauvaise pour une vallée large et peu profonde : le
    // rayon prend la DIAGONALE, on recule de moitié en trop, et les temples
    // deviennent des taches au milieu d'un sol vide.
    //
    // Les deux contraintes sont donc calculées séparément et c'est la plus
    // exigeante qui gagne · la largeur sur un écran étroit, la profondeur sur
    // un écran large.
    const distW = (span.w / 2) / Math.tan(hFov / 2)
    // vue de trois quarts, la profondeur se projette écrasée par le sinus de
    // l'inclinaison, et la hauteur des temples s'ajoute par son cosinus
    const TALL = 7
    const distD = ((span.d * Math.sin(pitch) + TALL * Math.cos(pitch)) / 2) / Math.tan(vFov / 2)
    // LA MARGE COUVRE CE QUE LE CADRAGE 3D NE VOIT PAS · les étiquettes sont
    // du HTML projeté, donc elles ne font pas partie de la boîte qu'on vient
    // de cadrer, et celles des bords dépassaient. Vingt-deux pour cent est ce
    // qu'il faut pour la plus large d'entre elles aux deux extrémités.
    const dist = Math.max(distW, distD) * 1.22

    camera.position.set(0, Math.sin(pitch) * dist, Math.cos(pitch) * dist)
    camera.lookAt(0, 1.2, 0)
    camera.near = Math.max(0.5, dist * 0.05)
    camera.far = dist * 4
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height, span.w, span.d, pitch])

  return null
}

/* ================================================================== */
/* LES RUBANS · la rivière et les chemins                              */
/* ================================================================== */

/** Un ruban qui suit une courbe · c'est ce qui fait une rivière qui serpente
 *  plutôt qu'une suite de rectangles collés bout à bout.
 *
 *  Les segments droits mis bout à bout laissent un angle visible à chaque
 *  coude, et un cours d'eau anguleux se lit comme un canal. On calcule donc
 *  les deux berges le long d'une courbe lissée et on les coud. */
function ribbon(points: [number, number][], width: number, y: number, steps = 90) {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false, 'catmullrom', 0.4,
  )
  const pos: number[] = []
  const idx: number[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const p = curve.getPoint(t)
    const tan = curve.getTangent(t)
    // la normale dans le plan du sol · on ne tourne jamais autour de l'axe Z
    const n = new THREE.Vector3(-tan.z, 0, tan.x).normalize().multiplyScalar(width / 2)
    pos.push(p.x - n.x, y, p.z - n.z)
    pos.push(p.x + n.x, y, p.z + n.z)
    if (i < steps) {
      const a = i * 2
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setIndex(idx)
  g.computeVertexNormals()
  return { geometry: g, curve }
}

/* ================================================================== */
/* LE JARDIN                                                           */
/* ================================================================== */

/** Une pierre · aplatie, jamais une bille. Une sphère posée sur l'herbe se lit
 *  comme un ballon ; c'est l'aplatissement qui en fait un rocher. */
function Rock({ p, r, seed }: { p: [number, number, number]; r: number; seed: number }) {
  return (
    <mesh position={p} rotation={[seed * 0.6, seed * 3.1, seed * 0.4]} castShadow receiveShadow>
      <dodecahedronGeometry args={[r, 0]} />
      <meshStandardMaterial color={M.stoneDark} roughness={1} flatShading />
    </mesh>
  )
}

/** Un arbre · un pin en étages, ou un érable en boule.
 *
 *  DEUX ESPÈCES SUFFISENT. Une seule donne une plantation ; trois commencent à
 *  faire du bruit sur une carte qu'on lit en une seconde. Le pin structure, et
 *  l'érable met la seule tache chaude du jardin. */
function Tree({ p, kind, s }: { p: [number, number, number]; kind: 'pine' | 'maple'; s: number }) {
  return (
    <group position={p} scale={s}>
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.13, 0.9, 6]} />
        <meshStandardMaterial color={M.trunk} roughness={1} />
      </mesh>
      {kind === 'pine' ? (
        <>
          <mesh position={[0, 1.15, 0]} castShadow>
            <coneGeometry args={[0.62, 0.9, 7]} />
            <meshStandardMaterial color={M.pine} roughness={1} flatShading />
          </mesh>
          <mesh position={[0, 1.7, 0]} castShadow>
            <coneGeometry args={[0.44, 0.75, 7]} />
            <meshStandardMaterial color={M.pine} roughness={1} flatShading />
          </mesh>
          <mesh position={[0, 2.16, 0]} castShadow>
            <coneGeometry args={[0.27, 0.6, 7]} />
            <meshStandardMaterial color={M.pine} roughness={1} flatShading />
          </mesh>
        </>
      ) : (
        <mesh position={[0, 1.35, 0]} scale={[1, 0.82, 1]} castShadow>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial color={M.maple} roughness={1} flatShading />
        </mesh>
      )}
    </group>
  )
}

/** Le torii · le portique rouge qui marque l'entrée de l'enceinte.
 *
 *  C'EST LE SIGNE LE PLUS RECONNAISSABLE DE TOUS, et il rend un service que
 *  le décor ne rend pas : il dit par OÙ l'on entre. Sans lui, une enceinte
 *  ronde n'a pas de devant, et le maître se tient au hasard sur un disque. */
function Torii({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
  return (
    <group position={p} scale={s}>
      {[-0.85, 0.85].map((x) => (
        <mesh key={x} position={[x, 1.05, 0]} rotation={[0, 0, x > 0 ? -0.035 : 0.035]} castShadow>
          <cylinderGeometry args={[0.1, 0.13, 2.1, 8]} />
          <meshStandardMaterial color={M.bridge} roughness={0.95} />
        </mesh>
      ))}
      {/* le linteau supérieur déborde et retombe · c'est lui qu'on reconnaît */}
      <mesh position={[0, 2.16, 0]} castShadow>
        <boxGeometry args={[2.5, 0.16, 0.3]} />
        <meshStandardMaterial color={M.bridge} roughness={0.95} />
      </mesh>
      <mesh position={[0, 1.74, 0]} castShadow>
        <boxGeometry args={[1.95, 0.12, 0.2]} />
        <meshStandardMaterial color={M.bridge} roughness={0.95} />
      </mesh>
      <mesh position={[0, 1.95, 0]} castShadow>
        <boxGeometry args={[0.18, 0.3, 0.18]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
    </group>
  )
}

/** Le pas japonais · les dalles posées dans le gravier, du torii à la porte.
 *
 *  Elles ne sont pas de la décoration : ce sont elles qui relient le portique
 *  au bâtiment, et sans ce trait le temple flotte au milieu de son enceinte. */
function Steps({ from, to, n = 6 }: { from: number; to: number; n?: number }) {
  return (
    <group>
      {Array.from({ length: n }, (_, i) => {
        const t = i / (n - 1)
        const z = from + (to - from) * t
        const x = (i % 2 === 0 ? 1 : -1) * 0.16
        return (
          <mesh key={i} position={[x, 0.05, z]} rotation={[-Math.PI / 2, 0, i * 0.5]} receiveShadow>
            <circleGeometry args={[0.32, 6]} />
            <meshStandardMaterial color={M.stoneDark} roughness={1} />
          </mesh>
        )
      })}
    </group>
  )
}

/** Une lanterne de pierre · le tōrō.
 *
 *  C'EST L'OBJET QUI DIT « JARDIN JAPONAIS » à lui tout seul, plus sûrement
 *  qu'un arbre, qui pourrait être de n'importe où. Socle, fût, chapiteau,
 *  toit, fleuron : cinq pièces, et on la reconnaît de loin. */
function Lantern({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
  return (
    <group position={p} scale={s}>
      <mesh position={[0, 0.09, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.26, 0.3, 0.18, 8]} />
        <meshStandardMaterial color={M.stoneDark} roughness={1} />
      </mesh>
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.55, 8]} />
        <meshStandardMaterial color={M.stone} roughness={1} />
      </mesh>
      <mesh position={[0, 0.83, 0]} castShadow>
        <boxGeometry args={[0.3, 0.26, 0.3]} />
        <meshStandardMaterial color={M.plaster} roughness={1} />
      </mesh>
      <mesh position={[0, 1.02, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.32, 0.2, 4]} />
        <meshStandardMaterial color={M.stoneDark} roughness={1} flatShading />
      </mesh>
      <mesh position={[0, 1.16, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={M.stone} roughness={1} />
      </mesh>
    </group>
  )
}

/* ================================================================== */
/* LE TEMPLE                                                           */
/* ================================================================== */

/** LE TOIT EST LA PIÈCE MAÎTRESSE, et il est fait de DEUX cônes empilés.
 *
 *  Un seul cône à quatre pans donne une pyramide, ce qui n'est pas un toit
 *  japonais : ce qui l'est, c'est l'AVANT-TOIT, la partie basse très débordante
 *  et presque plate sous une pente plus raide. Deux cônes, l'un large et plat,
 *  l'autre étroit et pentu, donnent cette silhouette avec deux formes au lieu
 *  d'une géométrie sur mesure. */
function Roof({ r, h, y, flare = 1.5 }: { r: number; h: number; y: number; flare?: number }) {
  return (
    <group position={[0, y, 0]}>
      {/* L'AVANT-TOIT EN PREMIER, ET POSÉ PLUS HAUT QUE SON CENTRE. Une
          première version le centrait sur zéro : la moitié de sa hauteur
          passait sous le mur, il n'en dépassait qu'un liseré, et le toit se
          lisait comme une pyramide nue. C'est pourtant lui qu'on reconnaît
          d'un toit japonais, donc c'est lui qui doit se voir. */}
      <mesh rotation={[0, Math.PI / 4, 0]} position={[0, h * 0.2, 0]} castShadow>
        <coneGeometry args={[r * flare, h * 0.44, 4]} />
        <meshStandardMaterial color={M.tileEdge} roughness={0.9} flatShading />
      </mesh>
      {/* la pente · raide, elle tient le volume, et elle démarre au dessus de
          l'avant-toit pour que la cassure entre les deux se voie */}
      <mesh rotation={[0, Math.PI / 4, 0]} position={[0, h * 0.62, 0]} castShadow>
        <coneGeometry args={[r * 0.94, h, 4]} />
        <meshStandardMaterial color={M.tile} roughness={0.9} flatShading />
      </mesh>
    </group>
  )
}

/** Un temple · pierre, bois, deux toitures, une bannière.
 *
 *  LA BANNIÈRE PORTE LA COULEUR DE LA CITÉ, et elle est la SEULE chose colorée
 *  du bâtiment. C'est ce qui permet d'avoir treize temples du même pays qu'on
 *  distingue quand même d'un coup d'oeil. */
function Temple({ tint, finished }: { tint: string; finished: boolean }) {
  const flag = useRef<THREE.Mesh>(null)
  // LA BANNIÈRE D'UNE CITÉ FINIE ONDULE · un mouvement lent, et rien d'autre
  // ne bouge sur cette carte. Sur treize cités, une animation permanente
  // rendrait la carte illisible ; sur les cités finies, elle DIT quelque chose.
  useFrame(({ clock }) => {
    if (!flag.current || !finished) return
    flag.current.rotation.y = Math.sin(clock.elapsedTime * 1.6) * 0.18
  })

  return (
    <group>
      {/* LE SOCLE · deux marches, parce qu'un temple ne pose jamais ses
          poteaux sur la terre. */}
      <mesh position={[0, 0.17, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.4, 0.34, 4] } />
        <meshStandardMaterial color={M.stone} roughness={1} />
      </mesh>

      {/* L'ENGAWA · la galerie de bois qui fait le tour et déborde du mur.
          C'est elle qui donne au bâtiment une assise lisible de haut : sans
          elle, le toit touchait la pierre et il ne restait qu'une pyramide. */}
      <mesh position={[0, 0.46, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.9, 0.22, 3.5]} />
        <meshStandardMaterial color={M.wood} roughness={1} />
      </mesh>

      {/* LES MURS · plus hauts qu'avant, et c'est le point. Un mur d'une unité
          sous un toit de deux et demie se voit comme un toit posé par terre. */}
      <mesh position={[0, 1.42, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.1, 1.7, 2.7]} />
        <meshStandardMaterial color={M.plaster} roughness={1} />
      </mesh>
      {[-1.48, 1.48].map((x) => (
        <mesh key={x} position={[x, 1.42, 0]} castShadow>
          <boxGeometry args={[0.22, 1.76, 2.82]} />
          <meshStandardMaterial color={M.wood} roughness={1} />
        </mesh>
      ))}
      {/* les quatre piliers d'angle de la galerie · ils portent l'avant-toit */}
      {[[-1.85, 1.66], [1.85, 1.66], [-1.85, -1.66], [1.85, -1.66]].map(([px, pz]) => (
        <mesh key={`${px}/${pz}`} position={[px, 1.32, pz]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 1.72, 6]} />
          <meshStandardMaterial color={M.woodDark} roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 2.34, 0]} castShadow>
        <boxGeometry args={[4, 0.18, 3.6]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>

      {/* LA PORTE · sombre, au sud, elle dit de quel côté on entre et donne
          l'échelle du bâtiment. */}
      <mesh position={[0, 1.25, 1.37]}>
        <planeGeometry args={[1.2, 1.35]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <mesh position={[0, 0.64, 2.05]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.14, 0.8]} />
        <meshStandardMaterial color={M.stone} roughness={1} />
      </mesh>

      {/* LES DEUX TOITURES · resserrées sur le bâtiment plutôt que débordant
          jusqu'au jardin, pour qu'on voie ce qu'elles couvrent. */}
      <Roof r={2.25} h={1.1} y={2.4} flare={1.3} />
      <mesh position={[0, 3.6, 0]} castShadow>
        <boxGeometry args={[1.8, 0.75, 1.6]} />
        <meshStandardMaterial color={M.plaster} roughness={1} />
      </mesh>
      {[-0.82, 0.82].map((x) => (
        <mesh key={x} position={[x, 3.6, 0]} castShadow>
          <boxGeometry args={[0.14, 0.8, 1.68]} />
          <meshStandardMaterial color={M.wood} roughness={1} />
        </mesh>
      ))}
      <Roof r={1.45} h={0.9} y={3.98} flare={1.32} />
      {/* LE FLEURON · la pointe de laiton, et le seul éclat de la vallée. */}
      <mesh position={[0, 5.15, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.55, 6]} />
        <meshStandardMaterial color={M.brass} roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 5.5, 0]}>
        <sphereGeometry args={[0.13, 10, 10]} />
        <meshStandardMaterial color={M.brass} roughness={0.45} metalness={0.35} />
      </mesh>

      {/* LA BANNIÈRE · le mon de la cité, et sa seule couleur. */}
      <mesh position={[2.75, 1.75, 1.3]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 3.5, 6]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <mesh ref={flag} position={[2.75, 2.65, 1.3]} castShadow>
        <boxGeometry args={[0.08, 1.7, 0.7]} />
        <meshStandardMaterial color={tint} roughness={0.95} />
      </mesh>
    </group>
  )
}

/* ================================================================== */
/* UNE CITÉ                                                            */
/* ================================================================== */

function City3D({
  module, x, z, percent, finished, onOpen, label, doneLabel, number, master,
}: {
  module: Module
  x: number
  z: number
  percent: number
  finished: boolean
  onOpen: () => void
  /** le nom de la cité, déjà dans la langue lue · le composant ne traduit rien
   *  lui même, pour que la scène n'ait qu'une raison de se redessiner */
  label: string
  doneLabel: string
  number: number
  master: string
}) {
  // LE JARDIN EST TIRÉ UNE FOIS · voir l'en-tête, un tirage par image ferait
  // sautiller les arbres.
  const garden = useMemo(() => {
    const rnd = seeded(module.id)
    const trees: { p: [number, number, number]; kind: 'pine' | 'maple'; s: number }[] = []
    const rocks: { p: [number, number, number]; r: number; seed: number }[] = []
    // les arbres se posent en couronne DERRIÈRE et sur les côtés du temple ·
    // jamais devant, où ils cacheraient le maître et la porte
    for (let i = 0; i < 5; i++) {
      const a = Math.PI * (0.15 + (i / 5) * 0.7) + rnd() * 0.22
      const d = 2.9 + rnd() * 0.7
      trees.push({
        p: [Math.cos(a) * d * 1.25, 0, -Math.sin(a) * d * 0.9 - 0.4],
        kind: rnd() > 0.68 ? 'maple' : 'pine',
        s: 0.85 + rnd() * 0.45,
      })
    }
    for (let i = 0; i < 4; i++) {
      const a = rnd() * Math.PI * 2
      const d = 2.4 + rnd() * 1.2
      rocks.push({ p: [Math.cos(a) * d * 1.2, 0.1, Math.sin(a) * d * 0.85], r: 0.2 + rnd() * 0.22, seed: rnd() * 6 })
    }
    return { trees, rocks }
  }, [module.id])

  return (
    <group position={[x, 0, z]}>
      {/* LE GRAVIER RATISSÉ · l'enceinte du temple, et la cible du clic. Elle
          est bien plus large que le bâtiment : sur un téléphone, un toit de
          deux unités et demie est intouchable. */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
        receiveShadow
        onClick={(e) => { e.stopPropagation(); onOpen() }}
      >
        <circleGeometry args={[4.2, 36]} />
        <meshStandardMaterial color={M.gravel} roughness={1} />
      </mesh>

      {/* LA MOUSSE · deux taches, pas un tapis. Un gazon plein effacerait le
          gravier, qui est ce qui fait lire un jardin sec. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2.5, 0.03, 1.6]} receiveShadow>
        <circleGeometry args={[1.5, 22]} />
        <meshStandardMaterial color={M.moss} roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2.7, 0.03, -1.4]} receiveShadow>
        <circleGeometry args={[1.2, 22]} />
        <meshStandardMaterial color={M.mossDark} roughness={1} />
      </mesh>

      {garden.rocks.map((r, i) => <Rock key={i} {...r} />)}
      {garden.trees.map((t, i) => <Tree key={i} {...t} />)}

      {/* L'ENTRÉE · le portique, le pas japonais, et deux lanternes qui
          l'encadrent. C'est la seule partie de l'enceinte qui est composée
          plutôt que semée : on entre toujours par là. */}
      <Torii p={[0, 0, 4]} s={0.95} />
      <Steps from={3.6} to={2.4} n={5} />
      <Lantern p={[-1.55, 0, 3.7]} s={0.85} />
      <Lantern p={[1.55, 0, 3.7]} s={0.85} />

      <Temple tint={module.tint} finished={finished} />

      {/* LE MAÎTRE ATTEND DEVANT SON TEMPLE · c'est lui qu'on vient voir, et
          c'est ce qui distingue une cité habitée d'une maquette. Il porte le
          visage du cas d'usage qui tient le premier dojo de la cité, donc on
          reconnaît son maître avant d'entrer. */}
      {/* IL EST À L'ÉCHELLE D'UN HOMME DEVANT UN TEMPLE · à taille pleine il
          arrivait au toit, ce qui rapetissait le bâtiment au lieu de le
          peupler. Trois quarts est le rapport qui fait lire les deux. */}
      <group scale={0.72} position={[0, 0, 3.1]}>
        <Character3D
          id={`master-${module.id}`}
          character={characterFor(faceIdForUseCase(master))}
          fn="Product"
          x={0}
          z={0}
          mood="idle"
          selected={false}
          busy={false}
          onSelect={onOpen}
        />
      </group>

      {/* LA JAUGE · un trait au sol devant l'entrée, lisible de haut, qui est
          le seul point de vue de cette carte. */}
      {percent > 0 && !finished && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 4.5]}>
          <planeGeometry args={[(4 * percent) / 100, 0.3]} />
          <meshStandardMaterial color={module.tint} roughness={1} />
        </mesh>
      )}

      {/* L'ÉTIQUETTE · du vrai HTML, projeté par la caméra.
          Un texte dessiné DANS la scène se déforme avec l'angle, ne se
          sélectionne pas, n'est pas lu par un lecteur d'écran et coûte une
          texture par cité. Posé ici, il reste net, il reste du texte, et il
          suit exactement le bâtiment parce que c'est la caméra qui le place.
          IL EST AU DESSUS DU FLEURON · à quatre unités et demie, il ne peut
          croiser ni le toit, ni la bannière, ni l'arbre le plus haut, ce qui
          était la raison pour laquelle on ne lisait pas les titres. */}
      {/* L'ÉTIQUETTE MONTE D'UN CRAN UNE FOIS SUR DEUX.
          Deux cités voisines sont à neuf unités l'une de l'autre et leurs
          étiquettes font parfois deux cent cinquante pixels : à la même
          hauteur, elles se touchent, et deux titres qui se touchent sont deux
          titres qu'on ne lit pas. Les décaler coûte une ligne et règle la
          collision pour toutes les largeurs d'écran à la fois. */}
      <Html position={[0, number % 2 ? 6.6 : 7.9, 0]} center distanceFactor={26} zIndexRange={[20, 0]}>
        <button
          className={`wm-tag${finished ? ' on' : ''}`}
          style={{ ['--wt' as string]: module.tint }}
          onClick={(e) => { e.stopPropagation(); onOpen() }}
        >
          <i className="wm-n">{number}</i>
          <b>{label}</b>
          <em>{doneLabel}</em>
        </button>
      </Html>
    </group>
  )
}

/* ================================================================== */
/* LA RIVIÈRE, LES PONTS ET LES CHEMINS                                */
/* ================================================================== */

/** Un pont · arqué, vermillon, avec ses rampes. Il ne se pose QUE là où un
 *  chemin franchit la rivière ; un pont posé sur l'herbe est un décor, et un
 *  décor sur une carte de jeu apprend à ne plus regarder la carte. */
function Bridge({ p, angle }: { p: [number, number]; angle: number }) {
  const planks = 7
  return (
    <group position={[p[0], 0, p[1]]} rotation={[0, angle, 0]}>
      {Array.from({ length: planks }, (_, i) => {
        const t = i / (planks - 1) - 0.5
        return (
          <mesh key={i} position={[t * 3.2, 0.34 - t * t * 1.4, 0]} rotation={[0, 0, -t * 0.9]} castShadow>
            <boxGeometry args={[0.52, 0.09, 1.5]} />
            <meshStandardMaterial color={M.bridge} roughness={0.95} />
          </mesh>
        )
      })}
      {[-0.72, 0.72].map((z) => (
        <group key={z}>
          {[-1.2, 0, 1.2].map((x) => (
            <mesh key={x} position={[x, 0.5 - (x / 3.2) * (x / 3.2) * 1.4, z]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.42, 5]} />
              <meshStandardMaterial color={M.bridge} roughness={0.95} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

/** La rivière, ses ponts, et les chemins entre les cités.
 *
 *  LES CHEMINS NE VERROUILLENT RIEN. On peut aller où l'on veut : le chemin
 *  dit par où commencer quand on ne sait pas, ce qui est un conseil et non une
 *  serrure. Voir l'en-tête de data/curriculum. */
function Valley({ points, span }: { points: [number, number][]; span: { w: number; d: number } }) {
  const { river, trails, bridges } = useMemo(() => {
    // LA RIVIÈRE TRAVERSE LA VALLÉE EN DIAGONALE · une rivière parallèle à un
    // bord se lit comme une bordure, pas comme un cours d'eau.
    const w = span.w / 2
    const d = span.d / 2
    const riverPts: [number, number][] = [
      [-w * 1.1, -d * 0.55],
      [-w * 0.45, -d * 0.1],
      [-w * 0.05, d * 0.18],
      [w * 0.42, d * 0.05],
      [w * 1.1, d * 0.5],
    ]
    const river = ribbon(riverPts, 3.1, 0.012, 80)

    // LES CHEMINS relient chaque cité à la suivante dans l'ordre conseillé.
    const trails = points.slice(0, -1).map((p, i) => ribbon([p, points[i + 1]], 1.1, 0.014, 12))

    // UN PONT PAR TRAVERSÉE RÉELLE, ET PAS UN DE PLUS.
    //
    // Une première version posait le pont au point du chemin le PLUS PROCHE de
    // la rivière, en dessous d'un seuil. C'est presque la bonne idée et c'est
    // faux : un chemin qui longe la berge sans jamais la franchir passe le
    // seuil, et on se retrouve avec un pont vermillon posé sur l'herbe. Ce qui
    // se voit tout de suite, et ce qui apprend à ne plus croire la carte.
    //
    // La question n'est pas « est-il près de l'eau », c'est « change-t-il de
    // rive ». On regarde donc de quel CÔTÉ de la rivière se trouve chaque
    // point du chemin, et le pont se pose là où ce côté s'inverse.
    const riverCurve = river.curve
    const samples = Array.from({ length: 80 }, (_, i) => riverCurve.getPoint(i / 79))

    /** De quel côté de la rivière ce point se trouve-t-il, et à quelle
     *  distance · le signe vient du produit vectoriel avec la tangente de la
     *  rivière au point le plus proche. */
    const side = (q: THREE.Vector3) => {
      let bi = 0
      let bd = Infinity
      for (let i = 0; i < samples.length; i++) {
        const d = q.distanceToSquared(samples[i])
        if (d < bd) { bd = d; bi = i }
      }
      const tan = riverCurve.getTangent(bi / (samples.length - 1))
      const v = q.clone().sub(samples[bi])
      return { sign: Math.sign(tan.z * v.x - tan.x * v.z), dist: Math.sqrt(bd), at: bi }
    }

    const bridges: { p: [number, number]; angle: number }[] = []
    for (const t of trails) {
      const STEPS = 28
      let prev = side(t.curve.getPoint(0))
      for (let i = 1; i <= STEPS; i++) {
        const q = t.curve.getPoint(i / STEPS)
        const cur = side(q)
        if (cur.sign !== 0 && prev.sign !== 0 && cur.sign !== prev.sign) {
          // LE PONT EST PERPENDICULAIRE À LA RIVIÈRE, pas au chemin · un pont
          // posé dans l'axe du chemin traverse l'eau en biais et s'y noie.
          const tan = riverCurve.getTangent(cur.at / (samples.length - 1))
          bridges.push({ p: [q.x, q.z], angle: Math.atan2(tan.x, tan.z) })
          break
        }
        prev = cur
      }
    }
    return { river, trails, bridges }
  }, [points, span.w, span.d])

  return (
    <group>
      {trails.map((t, i) => (
        <mesh key={i} geometry={t.geometry} receiveShadow>
          <meshStandardMaterial color={M.stone} roughness={1} />
        </mesh>
      ))}
      <mesh geometry={river.geometry} receiveShadow>
        <meshStandardMaterial color={M.water} roughness={0.28} metalness={0.08} />
      </mesh>
      {bridges.map((b, i) => <Bridge key={i} {...b} />)}
    </group>
  )
}

/* ================================================================== */

export function WorldMap({ modules = PATH_MODULES, onOpen }: {
  /** LES CITÉS À DESSINER · le parcours par défaut, les trois cités d'un
   *  métier quand on est sur sa carte. Une deuxième carte écrite pour les
   *  métiers aurait fait croire à un autre produit, et toute amélioration
   *  faite à l'une aurait manqué à l'autre. */
  modules?: Module[]
  onOpen: (moduleId: string) => void
}) {
  const lang = useLang()
  const g = useGame()
  const { pos, span } = useWorld(modules)
  const points = useMemo(() => modules.map((m) => pos(m)), [modules, pos])

  return (
    <div className="wm">
      <Canvas
        shadows="soft"
        dpr={[1, 1.5]}
        camera={{ fov: 34, near: 1, far: 400 }}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <color attach="background" args={['#e7ecef']} />
        {/* PAS DE BRUME · une première version en posait une, réglée sur
            l'étendue de la vallée (43 unités) alors que la caméra se tient à
            plus de cent : tout le monde tombait dans la brume, et la carte
            s'affichait en fantômes blancs sur fond blanc. Une valeur juste
            dans un repère et fausse dans l'autre est pire qu'une valeur
            absente, parce qu'elle a l'air d'un réglage. */}
        <FitCamera span={span} />
        <StudioLight />
        <hemisphereLight args={['#eaf2ff', '#cfd8c6', 0.55]} />
        <directionalLight
          position={[span.w * 0.35, span.w * 0.6, span.d * 0.5]}
          color="#fff4e2" intensity={1.45} castShadow
          shadow-mapSize-width={2048} shadow-mapSize-height={2048}
          shadow-bias={-0.0004} shadow-normalBias={0.04}
          shadow-camera-left={-span.w} shadow-camera-right={span.w}
          shadow-camera-top={span.w} shadow-camera-bottom={-span.w}
          shadow-camera-far={span.w * 3}
        />
        <Suspense fallback={null}>
          {/* LE SOL · il porte la vallée et reçoit les ombres. Sa taille vient
              de l'étendue des cités, donc il ne se met jamais à flotter sous
              une cité ajoutée en bord de carte. */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[span.w * 2.2, span.d * 3]} />
            <meshStandardMaterial color={M.moss} roughness={1} />
          </mesh>

          <Valley points={points} span={span} />

          {modules.map((m, i) => {
            const c = g.cityOf(m)
            const [x, z] = points[i]
            return (
              <City3D
                key={m.id}
                module={m}
                x={x}
                z={z}
                number={i + 1}
                percent={c.percent}
                finished={c.finished}
                onOpen={() => onOpen(m.id)}
                label={say(m.title, lang)}
                doneLabel={`${c.done}/${c.total}`}
                master={m.levels[0]?.master ?? 'research'}
              />
            )
          })}
        </Suspense>
      </Canvas>
    </div>
  )
}
