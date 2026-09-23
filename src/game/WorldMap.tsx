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
//   l'outillage     mannequin, tonneaux, cloche · on travaille ici
//   la campagne     prairies, bosquets et pierres entre les enceintes
//   les promeneurs  des élèves qui vont d'une cité à l'autre
//
// ---------------------------------------------------------------------------
// CE QUE CETTE LISTE DISAIT AVANT, ET POURQUOI ELLE A CHANGÉ
//
// Elle s'arrêtait au maître et finissait par : « Rien d'autre. Une carte de jeu
// se lit en une seconde ou ne se lit pas, et chaque objet ajouté coûte cette
// seconde. Pas de nuages, pas d'animation d'ambiance, pas de végétation de
// remplissage. »
//
// La règle reste vraie et c'est sa CONCLUSION qui était fausse. Le coût d'un
// objet ne se paie pas en nombre mais en CONCURRENCE : un objet qui se dispute
// l'attention avec les temples coûte la seconde, un objet qui remplit le vide
// entre eux la rend. Ce qui a été ajouté ne fait rien d'autre que remplir ce
// vide · rien n'est cliquable, rien ne porte d'étiquette, rien n'est coloré
// plus vivement qu'une bannière de cité, et tout se tient à plus de six unités
// d'une enceinte.
//
// Les nuages, eux, sont restés dehors, et cette fois pour la raison qui était
// écrite : essayés, ils passaient entre l'oeil et le sol sur une caméra qui
// regarde d'en haut, donc ils se lisaient comme des taches grises sur l'herbe.
// Voir le commentaire à leur place dans le rendu.
//
// ---------------------------------------------------------------------------
// LE HASARD EST SEMÉ, JAMAIS TIRÉ
//
// Deux jardins identiques feraient treize fois le même écran. Mais un
// Math.random() dans un rendu redessine un autre jardin à chaque image : les
// arbres sautillent. Chaque jardin est donc tiré d'un GÉNÉRATEUR SEMÉ par
// l'identifiant de sa cité · même cité, même jardin, à jamais.
import { Suspense, useMemo, useEffect, useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { StudioLight } from '../components/three/StudioLight'
import { Character3D } from '../components/three/Character3D'
import { GaitProvider, advance, type Gait } from '../components/three/gait'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import { PATH_MODULES, say, type Module } from '../data/curriculum'
import { useLang } from '../i18n'
import { useGame } from './progress'
// LE DÉCOR VIT DANS UN SEUL FICHIER · la vallée et les vignettes des cartes de
// l'écran d'accueil sont bâties des mêmes pièces. Voir game/scenery.
import {
  M, seeded, Rock, Tree, Torii, Steps, Lantern, Temple,
  Dummy, Barrels, Bell, Banner, Koi,
} from './scenery'

/** Une case de la grille vaut cette distance en unités du monde.
 *
 *  ELLE A ÉTÉ RESSERRÉE de sept à quatre et demie. Sept convenait à des
 *  bâtiments de trois unités posés à plat ; avec des temples qui montent à
 *  six, la même valeur laissait des plaines vides entre les cités et donnait
 *  une carte qu'il fallait parcourir des yeux au lieu de la saisir. */
const CELL = 4.6

/* ================================================================== */
/* LA GÉOMÉTRIE DU MONDE                                               */
/* ================================================================== */

/** La grille du programme vers le monde 3D · le centre est calculé depuis les
 *  cités elles mêmes, donc ajouter une cité en bord de carte recentre
 *  l'ensemble au lieu de la pousser hors champ. */
function useWorld(modules: Module[], portrait: boolean) {
  return useMemo(() => {
    // LA VALLÉE PIVOTE D'UN QUART DE TOUR SUR UN ÉCRAN DEBOUT.
    //
    // Elle est large et peu profonde · treize cités sur cinq colonnes et trois
    // rangs. Ce format est celui d'un écran couché, et c'est pour un écran
    // couché qu'il a été dessiné. Sur un téléphone tenu droit, la caméra doit
    // reculer jusqu'à faire tenir la LARGEUR dans le champ le plus étroit, et
    // la vallée finit en timbre-poste au milieu d'un ciel vide · c'est
    // exactement ce qu'on voyait.
    //
    // Échanger les deux axes donne cinq rangs sur trois colonnes, ce qui est
    // le format de l'écran. Rien d'autre ne change : les voisines restent
    // voisines, l'ordre conseillé reste le même, les chemins relient les mêmes
    // cités. On lit alors le parcours de haut en bas, ce qui est de toute
    // façon le sens de lecture d'un téléphone.
    //
    // POURQUOI PAS UNE AUTRE DISPOSITION. Parce que la grille du programme
    // porte du sens · les cités d'un même thème sont voisines, et c'est écrit
    // dans data/curriculum. Un nouveau rangement calculé ici jetterait ce
    // sens pour un gain de place, et personne ne saurait plus pourquoi deux
    // cités sont côte à côte.
    const at = (m: Module): [number, number] =>
      portrait ? [m.at[1], m.at[0]] : [m.at[0], m.at[1]]

    const xs = modules.map((m) => at(m)[0])
    const ys = modules.map((m) => at(m)[1])
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2
    const pos = (m: Module): [number, number] => {
      const [x, y] = at(m)
      return [(x - cx) * CELL, (y - cy) * CELL]
    }
    const span = {
      w: (Math.max(...xs) - Math.min(...xs) + 2.4) * CELL,
      d: (Math.max(...ys) - Math.min(...ys) + 2.4) * CELL,
    }
    return { pos, span }
  }, [modules, portrait])
}

/** L'ÉCRAN EST-IL DEBOUT ? · le seuil est le rapport, pas une largeur.
 *
 *  Une largeur en pixels se trompe dans les deux sens · une tablette de neuf
 *  cents pixels tenue droite est un écran debout, et un téléphone tourné de
 *  huit cents ne l'est pas. Ce qui décide du cadrage est la forme du cadre. */
function usePortrait(): boolean {
  const [p, setP] = useState(() =>
    typeof matchMedia === 'function' ? matchMedia('(max-aspect-ratio: 1/1)').matches : false)
  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    const mq = matchMedia('(max-aspect-ratio: 1/1)')
    const read = () => setP(mq.matches)
    read()
    mq.addEventListener('change', read)
    return () => mq.removeEventListener('change', read)
  }, [])
  return p
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
/* UNE CITÉ                                                            */
/* ================================================================== */

function City3D({
  module, x, z, percent, finished, onOpen, label, doneLabel, number, master, tall,
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
  /** l'écran est-il debout · il décide du décalage des étiquettes, voir plus bas */
  tall: boolean
}) {
  // LE JARDIN EST TIRÉ UNE FOIS · voir l'en-tête, un tirage par image ferait
  // sautiller les arbres.
  const garden = useMemo(() => {
    const rnd = seeded(module.id)
    const trees: { p: [number, number, number]; kind: 'pine' | 'maple' | 'sakura'; s: number }[] = []
    const rocks: { p: [number, number, number]; r: number; seed: number }[] = []
    // les arbres se posent en couronne DERRIÈRE et sur les côtés du temple ·
    // jamais devant, où ils cacheraient le maître et la porte
    for (let i = 0; i < 5; i++) {
      const a = Math.PI * (0.15 + (i / 5) * 0.7) + rnd() * 0.22
      const d = 2.9 + rnd() * 0.7
      trees.push({
        p: [Math.cos(a) * d * 1.25, 0, -Math.sin(a) * d * 0.9 - 0.4],
        // TROIS ESPÈCES, DANS CES PROPORTIONS · le pin domine parce qu'il
        // structure, l'érable et le cerisier ponctuent. Une couronne où les
        // trois seraient à égalité ferait un bouquet, pas un bosquet.
        kind: rnd() > 0.78 ? 'sakura' : rnd() > 0.62 ? 'maple' : 'pine',
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

      {/* CE QUI DIT QU'ON TRAVAILLE ICI · une enceinte n'était faite que de
          végétal et de pierre, donc de choses qui poussent ou qui restent.
          Un mannequin usé, des tonneaux rangés, une cloche à frapper et deux
          bannières sont des choses qu'on POSE, et c'est la seule différence
          entre un site qu'on visite et une école où l'on vient.

          ELLES SONT SUR LES CÔTÉS, jamais devant · le devant appartient au
          maître, à la porte et à la jauge, qui sont ce qu'on vient lire. */}
      <Dummy p={[-3.1, 0, 0.6]} s={0.8} />
      <Barrels p={[2.9, 0, 1.1]} s={0.75} />
      <Bell p={[3.2, 0, -0.9]} s={0.7} />
      <Banner p={[-2.2, 0, 3.4]} tint={module.tint} s={0.85} />
      <Banner p={[2.2, 0, 3.4]} tint={module.tint} s={0.85} />

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
      {/* LA PLAGE DE PROFONDEUR DESCEND À DOUZE, et ce n'est pas cosmétique.
          Elle montait à vingt, ce qui plaçait les étiquettes AU DESSUS de la
          fiche d'une cité (couche 7) : on ouvrait une cité et « Le coût réel »
          se dessinait par dessus le panneau, par dessus le voile, lisible et
          cliquable alors que tout devait être derrière. Une étiquette projetée
          dans la scène appartient à la scène ; elle ne peut pas passer devant
          l'interface qui la recouvre. La fiche et le chrome de la carte sont
          remontés au dessus de cette plage dans index.css · les deux moitiés
          sont nécessaires, et aucune des deux ne suffit seule. */}
      {/* L'ÉTIQUETTE NE RÉTRÉCIT PLUS AVEC LA DISTANCE, et c'est le correctif
          qui compte le plus ici.
          Elle avait un `distanceFactor` de vingt-six, qui la fait grandir et
          rapetisser comme un objet de la scène. Ce réglage a été trouvé sur un
          écran large, où la caméra se tient à une certaine distance, et il est
          faux partout ailleurs : sur un téléphone, la caméra recule pour faire
          tenir la vallée, et les treize titres tombaient à six pixels de haut.
          Illisibles · c'est à dire exactement le défaut qu'on avait déjà
          corrigé une fois en montant les étiquettes au dessus des toits.
          Un nom de lieu sur une carte n'est pas un objet du décor : c'est de
          l'interface posée par dessus, et l'interface garde sa taille. */}
      {/* LE DÉCALAGE DES ÉTIQUETTES DÉPEND DU SENS DE L'ÉCRAN, et il a fallu
          se tromper deux fois pour voir pourquoi.

          Une étiquette décalée VERS LE HAUT s'éloigne de ses voisines de RANG
          et se rapproche de celles du rang AU DESSUS. Le décalage sépare donc
          les voisines horizontales et rapproche les verticales · c'est une
          seule et même règle, et son effet s'inverse avec la disposition.

            COUCHÉ · la vallée est large et peu profonde, cinq cités par rang.
            Les voisines dangereuses sont à côté, donc on décale en hauteur, et
            sur trois paliers plutôt que deux · à taille constante les
            étiquettes sont assez larges pour que la une touche la trois.

            DEBOUT · la vallée a pivoté (voir useWorld), trois cités par rang et
            cinq rangs. Les voisines dangereuses sont maintenant AU DESSUS et EN
            DESSOUS. Décaler en hauteur les pousse les unes dans les autres :
            mesuré, six chevauchements avec le décalage de l'écran couché, zéro
            sans. Elles tiennent donc toutes la même hauteur, et c'est
            l'écartement des trois colonnes qui les sépare.

          MESURÉ, PAS SUPPOSÉ · zéro chevauchement de 360 à 1920 pixels, dans
          les deux sens. Un décalage réglé à l'oeil sur un seul écran est
          exactement ce qui a produit les deux versions précédentes. */}
      <Html position={[0, tall ? 6.6 : [6.4, 9.0, 11.6][number % 3], 0]} center zIndexRange={[12, 0]}>
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
    // ELLE FAISAIT TROIS UNITÉS DE LARGE sur une vallée de quarante, vue
    // d'une centaine de haut : un fil, pas un cours d'eau. Cinq et demie est
    // la largeur à laquelle elle porte ses ponts sans couper la vallée en
    // deux, et à laquelle les carpes se voient.
    const river = ribbon(riverPts, 5.4, 0.012, 80)

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

      {/* LA VIE SUR LES CHEMINS · voir Walkers. C'est ici plutôt que dans la
          carte parce que les marcheurs suivent les COURBES des chemins, qui
          n'existent nulle part ailleurs. */}
      <Walkers trails={trails.map((t) => t.curve)} />

      {/* LES CARPES DE LA RIVIÈRE · elles tournent dans le coude du milieu,
          là où l'eau s'élargit et où la caméra les voit. */}
      <Koi c={[0, 0]} r={1.7} y={0.1} speed={0.3} phase={0} />
      <Koi c={[0, 0]} r={1.1} y={0.08} speed={0.44} phase={3.1} tint="#ffd166" />
    </group>
  )
}

/* ================================================================== */
/* LA CAMPAGNE                                                         */
/* ================================================================== */
//
// LE SOL ÉTAIT UN RECTANGLE DE FEUTRE, ET MONTER LA SATURATION L'A EMPIRÉ.
//
// C'est l'enseignement de cette passe, et il vaut plus que le correctif :
// rendre une couleur plus vive ne rend pas une surface plus vivante. Un aplat
// de vert pâle se lit comme un fond, on ne le regarde pas ; le même aplat en
// vert franc se lit comme du feutre de table de jeu, et il attire l'oeil
// précisément là où il n'y a rien à voir. Ce qui manque n'est pas de la
// couleur, c'est de la VARIATION.
//
// TROIS COUCHES, ET AUCUNE N'EST UNE TEXTURE. Une image de sol coûterait un
// téléchargement, une résolution à choisir et un raccord à cacher ; ici ce
// sont des disques posés à plat, qui coûtent une douzaine de triangles :
//
//   LES PRAIRIES · de larges taches d'un vert voisin, à peine plus clair ou
//   plus sombre. Elles ne dessinent rien, elles cassent l'uniformité, et
//   c'est tout ce qu'on leur demande.
//
//   LES BOSQUETS · des arbres hors des enceintes. Ils font la chose qu'aucune
//   tache ne fait : ils portent une OMBRE, donc ils donnent au sol un relief
//   que la couleur ne peut pas lui donner.
//
//   LES PIERRES · semées, rares, pour que le regard trouve où se poser entre
//   deux cités.
//
// TOUT EST TIRÉ D'UNE GRAINE FIXE, comme les jardins · une campagne qui se
// redessine quand on tourne son téléphone est pire qu'une campagne vide.
//
// ET RIEN NE SE POSE SUR UNE CITÉ. Chaque candidat est écarté s'il tombe à
// moins de six unités d'une enceinte : un arbre planté au milieu d'un jardin
// sec, ou pire à travers un temple, est exactement le genre de défaut qui fait
// dire qu'une carte est buggée.
function Countryside({ span, points }: {
  span: { w: number; d: number }
  points: [number, number][]
}) {
  const bits = useMemo(() => {
    const rnd = seeded('campagne')
    const W = span.w * 1.05
    const D = span.d * 1.25
    /** LOIN DE TOUTE CITÉ · la seule règle de placement, et elle est dure. */
    const free = (x: number, z: number, margin: number) =>
      points.every(([px, pz]) => (px - x) ** 2 + (pz - z) ** 2 > margin * margin)

    const meadows: { p: [number, number, number]; r: number; c: string }[] = []
    for (let i = 0; i < 16; i++) {
      const x = (rnd() - 0.5) * W * 2
      const z = (rnd() - 0.5) * D * 2
      // LES PRAIRIES PASSENT SOUS LES ENCEINTES sans dommage · le gravier est
      // posé plus haut qu'elles et les couvre. Elles n'ont donc pas à éviter
      // les cités, contrairement à tout ce qui a du volume.
      meadows.push({
        p: [x, 0.006, z],
        r: 4 + rnd() * 9,
        c: rnd() > 0.5 ? M.mossDark : '#63d47d',
      })
    }

    const trees: { p: [number, number, number]; kind: 'pine' | 'maple' | 'sakura'; s: number }[] = []
    for (let i = 0; i < 90 && trees.length < 34; i++) {
      const x = (rnd() - 0.5) * W * 2
      const z = (rnd() - 0.5) * D * 2
      if (!free(x, z, 6.2)) continue
      trees.push({
        p: [x, 0, z],
        kind: rnd() > 0.82 ? 'sakura' : rnd() > 0.68 ? 'maple' : 'pine',
        s: 0.9 + rnd() * 0.8,
      })
    }

    const rocks: { p: [number, number, number]; r: number; seed: number }[] = []
    for (let i = 0; i < 40 && rocks.length < 14; i++) {
      const x = (rnd() - 0.5) * W * 2
      const z = (rnd() - 0.5) * D * 2
      if (!free(x, z, 6.2)) continue
      rocks.push({ p: [x, 0.12, z], r: 0.3 + rnd() * 0.5, seed: rnd() * 6 })
    }

    return { meadows, trees, rocks }
  }, [span.w, span.d, points])

  return (
    <group>
      {bits.meadows.map((m, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={m.p} receiveShadow>
          <circleGeometry args={[m.r, 18]} />
          <meshStandardMaterial color={m.c} roughness={1} />
        </mesh>
      ))}
      {bits.rocks.map((r, i) => <Rock key={i} {...r} />)}
      {bits.trees.map((t, i) => <Tree key={i} {...t} />)}
    </group>
  )
}

/* ================================================================== */
/* LES PROMENEURS                                                      */
/* ================================================================== */
//
// CE QUI MANQUAIT À CETTE VALLÉE, EN UNE PHRASE : PERSONNE N'Y ALLAIT.
//
// Il y avait treize temples, des jardins, une rivière, des ponts, et devant
// chaque porte un maître planté qui ne bougeait pas. C'est un site
// archéologique, pas une école · on regardait des bâtiments, on ne voyait
// nulle part que quelqu'un s'y rendait. Les chemins, en particulier, ne
// servaient à rien visuellement : des rubans de pierre que rien ne foulait.
//
// LES PROMENEURS SUIVENT LES CHEMINS EXISTANTS, et c'est tout le principe.
// On n'invente pas des trajectoires : on emprunte les courbes déjà calculées
// pour dessiner les sentiers. Un personnage qui marcherait à côté du chemin se
// remarquerait tout de suite, et un personnage qui marche DESSUS explique le
// chemin · c'est lui qui dit à quoi il sert.
//
// TROIS PRÉCAUTIONS, ET CHACUNE CORRIGE UNE FAÇON DE RATER LA CHOSE :
//
//   LA CADENCE VIENT DU DÉPLACEMENT. C'est ce que fait GaitProvider : celui
//   qui bouge le personnage tient l'horloge du pas, donc la jambe recule
//   exactement à la vitesse du sol. Sans ça le personnage PATINE, ce qui se
//   voit immédiatement même à cette échelle et rend la scène bon marché.
//
//   ILS FONT DEMI-TOUR PLUTÔT QUE DE SE TÉLÉPORTER. Arrivé au bout, un
//   marcheur repart en sens inverse. Un rebouclage de 1 à 0 fait disparaître
//   quelqu'un d'un bout de la carte pour le faire réapparaître à l'autre, et
//   l'oeil attrape ça instantanément.
//
//   ILS S'ARRÊTENT. Un promeneur qui marche sans jamais s'interrompre est un
//   automate sur rail. Celui-ci fait des pauses, à des intervalles qui ne sont
//   les mêmes pour personne, et pendant qu'il est arrêté sa cadence tombe à
//   zéro · donc ses jambes s'arrêtent aussi, ce qui est le détail qui fait
//   qu'on y croit.

/** COMBIEN · un par chemin, au plus, et jamais plus de six.
 *
 *  Le nombre n'est pas une préférence. Chaque personnage est un rig complet
 *  (tête, corps, membres, chaussures, métier), et la vallée en porte déjà
 *  treize immobiles devant les temples. Six de plus qui marchent est le point
 *  où la carte reste fluide sur un téléphone de milieu de gamme ; au delà, ce
 *  qu'on gagne en vie on le perd en images par seconde, et une carte qui
 *  saccade ne donne envie d'aller nulle part. */
const MAX_WALKERS = 6

/** Les visages des promeneurs · pris dans le catalogue, pas inventés.
 *  Ce sont des élèves, pas des maîtres : ils n'ont pas de titre, pas
 *  d'étiquette, et on ne peut pas cliquer dessus. */
const WALKER_FACES = ['research', 'support', 'ops', 'sales', 'design', 'data']

/** UN PROMENEUR · il va d'un bout à l'autre d'un chemin, s'arrête, repart.
 *
 *  LA PHASE EST UNE POSITION SUR LA COURBE, entre 0 et 1, pas un angle. Le
 *  chemin n'est pas de longueur constante d'une paire de cités à l'autre, donc
 *  la vitesse est divisée par la longueur : sans ça, deux promeneurs partis en
 *  même temps sur un chemin court et un chemin long marchent à deux vitesses
 *  différentes, et celui du chemin court court. */
function Walker({ curve, faceId, t0, speed, restEvery, restFor }: {
  curve: THREE.CatmullRomCurve3
  faceId: string
  t0: number
  speed: number
  restEvery: number
  restFor: number
}) {
  const g = useRef<THREE.Group>(null)
  // LA CADENCE EST UN OBJET MUTABLE, jamais un état · elle change soixante
  // fois par seconde, et un rendu par image remonterait tout l'arbre du
  // personnage pour une rotation d'épaule. Voir three/gait.
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  const st = useRef({ t: t0, dir: 1, clock: 0, resting: false })
  const len = useMemo(() => Math.max(1, curve.getLength()), [curve])
  const here = useMemo(() => new THREE.Vector3(), [])
  const ahead = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, raw) => {
    if (!g.current) return
    // LE PAS DE TEMPS EST PLAFONNÉ · un onglet qu'on réveille après une minute
    // rend un delta d'une minute, et le promeneur ferait le tour de la vallée
    // en une image. Cinquante millisecondes est le plafond utilisé partout
    // ailleurs dans ce produit, on ne s'en écarte pas ici.
    const dt = Math.min(raw, 0.05)
    const s = st.current
    s.clock += dt

    if (s.resting) {
      if (s.clock > restFor) { s.resting = false; s.clock = 0 }
      gait.current.speed = 0
    } else {
      if (s.clock > restEvery) { s.resting = true; s.clock = 0 }
      // la vitesse en unités du monde, ramenée en fraction de courbe
      s.t += (speed / len) * s.dir * dt
      // LE DEMI-TOUR AU BOUT · voir l'en-tête. On n'enroule pas.
      if (s.t > 0.97) { s.t = 0.97; s.dir = -1 }
      if (s.t < 0.03) { s.t = 0.03; s.dir = 1 }
      gait.current.speed = speed
      advance(gait.current, dt)
    }

    curve.getPoint(s.t, here)
    g.current.position.set(here.x, 0, here.z)
    // IL REGARDE OÙ IL VA · on vise un point un peu plus loin sur la courbe
    // plutôt que d'utiliser la tangente, parce qu'un point devant reste juste
    // au demi-tour alors que la tangente, elle, s'inverse d'un coup et fait
    // pivoter le personnage sur lui même en une image.
    curve.getPoint(Math.min(0.999, Math.max(0.001, s.t + 0.02 * s.dir)), ahead)
    g.current.rotation.y = Math.atan2(ahead.x - here.x, ahead.z - here.z)
  })

  return (
    <GaitProvider value={gait}>
      <group ref={g} scale={0.62}>
        <Character3D
          id={`walker-${faceId}-${t0.toFixed(3)}`}
          character={characterFor(faceIdForUseCase(faceId))}
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

/** LES PROMENEURS · un par chemin, répartis, et aucun réglage tiré au hasard.
 *
 *  Tout ce qui les distingue · vitesse, point de départ, rythme des pauses ·
 *  vient d'un générateur semé par l'indice du chemin. Un tirage libre ferait
 *  repartir toute la population d'ailleurs à chaque redessin de la carte, et
 *  une vallée dont les habitants sautent d'un endroit à l'autre quand on
 *  tourne son téléphone est pire qu'une vallée vide. */
function Walkers({ trails }: { trails: THREE.CatmullRomCurve3[] }) {
  const cast = useMemo(() => {
    const rnd = seeded('promeneurs')
    // ON PREND UN CHEMIN SUR N, pas les N premiers · les premiers chemins sont
    // tous dans le même coin de la vallée, et six marcheurs groupés à un bout
    // d'une carte se lisent comme une file d'attente.
    const step = Math.max(1, Math.ceil(trails.length / MAX_WALKERS))
    const picked: number[] = []
    for (let i = 0; i < trails.length && picked.length < MAX_WALKERS; i += step) picked.push(i)
    return picked.map((i, k) => ({
      i,
      faceId: WALKER_FACES[k % WALKER_FACES.length],
      t0: 0.15 + rnd() * 0.7,
      // LA VITESSE EST UNE VITESSE DE MARCHE, pas de course · autour de 1,2
      // unité par seconde, ce qui est la vitesse pour laquelle l'amplitude du
      // pas a été réglée dans three/gait. Plus vite, le personnage fait le
      // grand écart ; plus lentement, il rampe.
      speed: 1.0 + rnd() * 0.5,
      restEvery: 4 + rnd() * 6,
      restFor: 1.5 + rnd() * 2.5,
    }))
  }, [trails])

  return (
    <>
      {cast.map((w) => (
        <Walker key={`${w.i}-${w.faceId}`} curve={trails[w.i]} {...w} />
      ))}
    </>
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
  // LE CADRAGE SUIT LA FORME DE L'ÉCRAN · voir useWorld.
  const portrait = usePortrait()
  const { pos, span } = useWorld(modules, portrait)
  const points = useMemo(() => modules.map((m) => pos(m)), [modules, pos])

  return (
    <div className="wm">
      <Canvas
        shadows="soft"
        dpr={[1, 1.5]}
        camera={{ fov: 34, near: 1, far: 400 }}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
      >
        {/* LE CIEL · un bleu franc, et non le gris perle d'avant.
            Il était #e7ecef, c'est à dire la couleur d'un mur de bureau, et
            c'est ce gris qui faisait que la vallée entière paraissait éteinte
            quels que soient ses verts : une scène est jugée par rapport à son
            fond, et un fond neutre tire tout vers le neutre. Un ciel qui est
            un ciel remet chaque couleur à sa place sans qu'on touche à aucune
            autre. */}
        <color attach="background" args={['#a8ddf5']} />
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

          {/* LA CAMPAGNE AUTOUR DES CITÉS · voir Countryside. Sans elle, le
              sol était un rectangle de feutre vert, et la saturation n'y
              changeait rien : un aplat reste un aplat. */}
          <Countryside span={span} points={points} />

          {/* PAS DE NUAGES ICI, ET C'EST UN ESSAI QU'ON A FAIT PUIS DÉFAIT.
              On en avait posé trois, pour donner une échelle de hauteur à une
              vallée qui se lit sinon comme une maquette sur une table. Le
              raisonnement est juste et il ne vaut que pour une caméra à
              hauteur d'homme. Celle-ci regarde d'en haut : un nuage y passe
              ENTRE l'oeil et le sol, donc il ne se lit pas comme un nuage dans
              le ciel mais comme une tache grise posée sur l'herbe. Ils sont
              restés dans les vignettes des cartes, où la caméra est de plain
              pied et où ils font exactement ce qu'on leur demandait. */}
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
                tall={portrait}
              />
            )
          })}
        </Suspense>
      </Canvas>
    </div>
  )
}
