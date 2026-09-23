// LE DÉCOR · les pièces dont sont faits la vallée ET les vignettes des cartes.
//
// POURQUOI ELLES VIVENT ICI PLUTÔT QUE DANS LA CARTE. Les cartes de l'écran
// d'accueil portent chacune une petite scène en trois dimensions à la place
// d'une image. Ces scènes sont faites des mêmes temples, des mêmes torii et
// des mêmes pins que la vallée · les redessiner à côté aurait donné deux
// jeux de décor qui se ressemblent au premier jour et divergent au second,
// et c'est exactement la faute que ce produit a déjà payée trois fois.
//
// Une seule palette, une seule forme de toit, un seul torii. Ce qui change
// d'une scène à l'autre est la COMPOSITION, pas la matière.
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const M = {
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

/** Un générateur déterministe à partir d'un texte · même cité, même jardin.
 *  Voir l'en-tête : un tirage dans le rendu fait sautiller les arbres. */
export function seeded(text: string) {
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

/** Une pierre · aplatie, jamais une bille. Une sphère posée sur l'herbe se lit
 *  comme un ballon ; c'est l'aplatissement qui en fait un rocher. */
export function Rock({ p, r, seed }: { p: [number, number, number]; r: number; seed: number }) {
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
export function Tree({ p, kind, s }: { p: [number, number, number]; kind: 'pine' | 'maple'; s: number }) {
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
export function Torii({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
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
export function Steps({ from, to, n = 6 }: { from: number; to: number; n?: number }) {
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
export function Lantern({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
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

/** LE TOIT EST LA PIÈCE MAÎTRESSE, et il est fait de DEUX cônes empilés.
 *
 *  Un seul cône à quatre pans donne une pyramide, ce qui n'est pas un toit
 *  japonais : ce qui l'est, c'est l'AVANT-TOIT, la partie basse très débordante
 *  et presque plate sous une pente plus raide. Deux cônes, l'un large et plat,
 *  l'autre étroit et pentu, donnent cette silhouette avec deux formes au lieu
 *  d'une géométrie sur mesure. */
export function Roof({ r, h, y, flare = 1.5 }: { r: number; h: number; y: number; flare?: number }) {
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
export function Temple({ tint, finished }: { tint: string; finished: boolean }) {
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

