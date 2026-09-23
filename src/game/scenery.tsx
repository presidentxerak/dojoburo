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

/* LA PALETTE · vive, et pourquoi elle l'est devenue.
 * ---------------------------------------------------------------------------
 * Elle était juste et elle était fade. Juste, parce qu'un temple japonais EST
 * de pierre grise sous des tuiles ardoise, et qu'on avait choisi les tons d'une
 * photographie. Fade, parce qu'une vallée entière peinte en gris cassé, vue de
 * haut sur un écran de téléphone en plein jour, donne une maquette d'architecte
 * et non un monde où l'on a envie d'entrer.
 *
 * CE QUI TRANCHE N'EST PAS L'EXACTITUDE, C'EST LA SATURATION. Les tons restent
 * ceux d'un temple · vermillon, laque, mousse, ardoise · mais pris à leur
 * pleine valeur plutôt qu'à la valeur délavée d'une photo par temps couvert.
 * C'est exactement ce que fait un jeu : il ne change pas les couleurs du monde,
 * il monte le volume.
 *
 * L'ARDOISE VIRE À L'INDIGO, et c'est le seul écart volontaire. Un gris neutre
 * sur un toit, à cette taille, ne se distingue pas de l'ombre qu'il porte. Un
 * indigo profond garde la lecture d'une tuile sombre, se détache du vert, et
 * amène le violet de la marque dans le décor sans qu'on ait à peindre un mur
 * en violet, ce qui aurait été un logo posé sur un temple. */
export const M = {
  stone: '#e7dfcd',       // la pierre des socles et des dalles
  stoneDark: '#c2b6a0',   // ses arêtes
  plaster: '#fffaf0',     // les murs · un blanc chaud, jamais un blanc d'écran
  // LE BOIS · chaud, et RETENU. Une première passe l'avait poussé à #c2601c,
  // c'est à dire à la pleine saturation de l'orange : sur la terrasse, qui est
  // une planche de quatre unités sur deux, ça donnait un aplat fluorescent qui
  // prenait toute la vignette et écrasait le personnage posé dessus. Monter le
  // volume ne veut pas dire le monter partout · les grandes surfaces se
  // tiennent un cran sous les petites, sinon elles gagnent par la taille.
  wood: '#a85a26',        // les poteaux, les poutres, les rampes
  woodDark: '#7d3d15',    // les ombres du bois
  tile: '#4a3f9e',        // les tuiles · l'indigo, voir l'en-tête
  tileEdge: '#342c78',    // l'arête des avant-toits
  brass: '#ffc61a',       // le fleuron
  gravel: '#f7f1e1',      // le gravier ratissé
  moss: '#4cc46a',        // la mousse
  mossDark: '#2fa552',
  water: '#22b8e8',
  bridge: '#f0402c',      // le vermillon des ponts et des torii
  trunk: '#8a5a33',
  pine: '#1f9e5a',
  maple: '#ff6a2b',
  sakura: '#ff9ec7',      // le cerisier · la seule tache rose de la vallée
  lacquer: '#7c3aed',     // la laque violette · bannières et pièces de marque
  paperLamp: '#fff0c2',   // le papier d'une lanterne allumée
  koi: '#ff7a1a',         // la carpe
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

/** Un arbre · un pin en étages, un érable en boule, ou un cerisier en nuage.
 *
 *  TROIS ESPÈCES, ET LA TROISIÈME EST ARRIVÉE AVEC LES COULEURS VIVES. Deux
 *  suffisaient tant que la vallée était en demi-teintes : le pin structurait,
 *  l'érable mettait l'unique tache chaude. Une fois les verts remontés à leur
 *  pleine valeur, l'érable orange ne tranchait plus assez pour porter seul le
 *  contraste, et la vallée redevenait un tapis. Le cerisier est la réponse ·
 *  c'est la seule tache FROIDE et claire du décor, donc la seule qui se
 *  détache aussi bien du vert que de l'indigo des toits.
 *
 *  ELLE S'ARRÊTE À TROIS. Une quatrième espèce commencerait à faire du bruit
 *  sur une carte qu'on lit en une seconde, et ce qu'on veut lire d'abord est
 *  où sont les temples. */
export function Tree({ p, kind, s }: { p: [number, number, number]; kind: 'pine' | 'maple' | 'sakura'; s: number }) {
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
      ) : kind === 'maple' ? (
        <mesh position={[0, 1.35, 0]} scale={[1, 0.82, 1]} castShadow>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial color={M.maple} roughness={1} flatShading />
        </mesh>
      ) : (
        // LE CERISIER · trois boules qui se chevauchent, et non une. Une
        // sphère unique se lit comme une sucette ; c'est le débordement d'une
        // masse sur l'autre qui fait une floraison.
        <>
          <mesh position={[0, 1.32, 0]} scale={[1, 0.78, 1]} castShadow>
            <icosahedronGeometry args={[0.6, 0]} />
            <meshStandardMaterial color={M.sakura} roughness={1} flatShading />
          </mesh>
          <mesh position={[0.38, 1.12, 0.16]} scale={[1, 0.8, 1]} castShadow>
            <icosahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial color={M.sakura} roughness={1} flatShading />
          </mesh>
          <mesh position={[-0.36, 1.16, -0.12]} scale={[1, 0.8, 1]} castShadow>
            <icosahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial color={M.sakura} roughness={1} flatShading />
          </mesh>
        </>
      )}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* CE QUI HABITE LE DÉCOR                                              */
/* ------------------------------------------------------------------ */
//
// POURQUOI CES PIÈCES-LÀ ET PAS D'AUTRES. La vallée avait des temples, des
// arbres, des pierres et des lanternes · c'est à dire un PAYSAGE. Ce qui lui
// manquait pour être un lieu est ce qui montre qu'on y travaille : un mannequin
// d'entraînement usé, des tonneaux rangés, une cloche qu'on frappe, des
// bannières qui claquent. On lit alors une école, et non un site touristique.
//
// AUCUNE N'EST UN DÉCOR MUET. Chacune dit la même chose sous un angle
// différent : quelqu'un vient ici tous les jours.

/** Le mannequin d'entraînement · un poteau, deux bras, un bandeau.
 *  Il OSCILLE, doucement et sans fin, comme s'il venait d'être frappé. */
export function Dummy({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    // l'amortissement d'un coup reçu · une oscillation qui décroît dans le
    // cycle puis repart, plutôt qu'un balancement de métronome
    const t = clock.elapsedTime
    g.current.rotation.z = Math.sin(t * 2.2) * 0.055 * (0.5 + 0.5 * Math.cos(t * 0.35))
  })
  return (
    <group position={p} scale={s} ref={g}>
      <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.26, 0.3, 0.14, 8]} />
        <meshStandardMaterial color={M.stoneDark} roughness={1} />
      </mesh>
      <mesh position={[0, 0.66, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.13, 1.1, 8]} />
        <meshStandardMaterial color={M.wood} roughness={1} />
      </mesh>
      <mesh position={[0, 0.98, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.78, 6]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      {/* LE BANDEAU · la seule couleur de la pièce, et elle est vermillon.
          C'est ce qui fait qu'on le repère à trente unités de la caméra. */}
      <mesh position={[0, 1.16, 0]} castShadow>
        <cylinderGeometry args={[0.145, 0.145, 0.18, 8]} />
        <meshStandardMaterial color={M.bridge} roughness={0.9} />
      </mesh>
    </group>
  )
}

/** Des tonneaux de saké · empilés contre un mur, comme dans toute enceinte.
 *  Ils sont trois et jamais deux : deux objets identiques se lisent comme une
 *  paire, donc comme une décoration ; trois se lisent comme un stock. */
export function Barrels({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
  const at: [number, number, number][] = [[0, 0.22, 0], [0.48, 0.22, 0.1], [0.24, 0.63, 0.05]]
  return (
    <group position={p} scale={s}>
      {at.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.22, 0.22, 0.42, 12]} />
            <meshStandardMaterial color={M.plaster} roughness={1} />
          </mesh>
          {/* les deux cercles de bois · sans eux c'est une boîte de conserve */}
          {[-0.13, 0.13].map((yy) => (
            <mesh key={yy} position={[0, yy, 0]}>
              <cylinderGeometry args={[0.228, 0.228, 0.06, 12]} />
              <meshStandardMaterial color={M.woodDark} roughness={1} />
            </mesh>
          ))}
          <mesh position={[0, 0.215, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.2, 12]} />
            <meshStandardMaterial color={M.lacquer} roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/** La cloche · un portique de bois et un bronze suspendu.
 *  Elle SONNE, visuellement : elle se balance d'un rien, en continu. */
export function Bell({ p, s = 1 }: { p: [number, number, number]; s?: number }) {
  const b = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (b.current) b.current.rotation.x = Math.sin(clock.elapsedTime * 1.1) * 0.05
  })
  return (
    <group position={p} scale={s}>
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, 0.62, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.1, 1.24, 6]} />
          <meshStandardMaterial color={M.wood} roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 1.26, 0]} castShadow>
        <boxGeometry args={[1.3, 0.14, 0.24]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <group ref={b} position={[0, 1.19, 0]}>
        <mesh position={[0, -0.34, 0]} castShadow>
          <cylinderGeometry args={[0.26, 0.31, 0.6, 12]} />
          <meshStandardMaterial color={M.brass} roughness={0.35} metalness={0.55} />
        </mesh>
        <mesh position={[0, -0.04, 0]}>
          <sphereGeometry args={[0.1, 10, 8]} />
          <meshStandardMaterial color={M.brass} roughness={0.35} metalness={0.55} />
        </mesh>
      </group>
    </group>
  )
}

/** Une bannière verticale · le nobori, la pièce la plus japonaise du lot après
 *  le torii, et celle qui coûte le moins cher à lire de loin : c'est une barre
 *  de couleur DEBOUT, dans un décor où tout le reste est couché. */
export function Banner({ p, tint, s = 1 }: { p: [number, number, number]; tint: string; s?: number }) {
  const f = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!f.current) return
    const t = clock.elapsedTime
    // LE VENT N'EST PAS UN MÉTRONOME · deux fréquences irrationnelles l'une
    // envers l'autre ne repassent jamais par le même état, donc l'oeil n'y
    // trouve pas de boucle. Un seul sinus se fait repérer en trois secondes.
    f.current.rotation.y = Math.sin(t * 1.7) * 0.2 + Math.sin(t * 0.61) * 0.1
  })
  return (
    <group position={p} scale={s}>
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 2.2, 6]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <mesh position={[0, 2.16, 0.18]} castShadow>
        <boxGeometry args={[0.05, 0.05, 0.42]} />
        <meshStandardMaterial color={M.woodDark} roughness={1} />
      </mesh>
      <mesh ref={f} position={[0, 1.5, 0.2]} castShadow>
        <boxGeometry args={[0.04, 1.35, 0.34]} />
        <meshStandardMaterial color={tint} roughness={0.95} />
      </mesh>
    </group>
  )
}

/** Une carpe · elle tourne dans un bassin, sous la surface.
 *
 *  ELLE EST LA SEULE CHOSE VIVANTE DU DÉCOR QUI NE SOIT PAS UN PERSONNAGE, et
 *  c'est ce qui rend un bassin différent d'une flaque bleue. Elle nage sur un
 *  cercle, à une vitesse qui n'est pas la même que celle de sa voisine : deux
 *  carpes synchrones se lisent comme un mécanisme. */
export function Koi({ c, r, y, speed, phase, tint = M.koi }: {
  c: [number, number]; r: number; y: number; speed: number; phase: number; tint?: string
}) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const a = phase + clock.elapsedTime * speed
    g.current.position.set(c[0] + Math.cos(a) * r, y, c[1] + Math.sin(a) * r)
    // elle regarde où elle va · sans ça elle glisse de côté comme un jeton
    g.current.rotation.y = -a + Math.PI / 2
    // et la queue bat
    g.current.rotation.z = Math.sin(clock.elapsedTime * speed * 6) * 0.14
  })
  return (
    <group ref={g}>
      <mesh scale={[0.5, 0.26, 1]} castShadow={false}>
        <sphereGeometry args={[0.22, 10, 8]} />
        <meshStandardMaterial color={tint} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0, -0.24]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.12, 0.2, 4]} />
        <meshStandardMaterial color={tint} roughness={0.7} />
      </mesh>
    </group>
  )
}

/** Un nuage · trois boules aplaties qui dérivent.
 *
 *  IL EXISTE POUR DONNER UNE ÉCHELLE. Une vallée sans rien au dessus de la
 *  ligne des toits laisse la caméra sans repère de hauteur, et les temples y
 *  paraissent des maquettes posées sur une table. Trois nuages suffisent.
 *  Ils ne portent pas d'ombre : une ombre de nuage mobile sur une vallée
 *  entière coûte une passe de rendu pour un détail qu'on ne regarde pas. */
export function Cloud({ p, s = 1, drift = 0.08 }: { p: [number, number, number]; s?: number; drift?: number }) {
  const g = useRef<THREE.Group>(null)
  const x0 = p[0]
  useFrame(({ clock }) => {
    if (g.current) g.current.position.x = x0 + Math.sin(clock.elapsedTime * drift + x0) * 2.4
  })
  return (
    <group ref={g} position={p} scale={s}>
      {([[0, 0, 0, 1], [1.1, -0.18, 0.2, 0.74], [-1, -0.14, -0.15, 0.66]] as const).map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]} scale={[1, 0.62, 1]}>
          <sphereGeometry args={[r, 12, 10]} />
          <meshStandardMaterial color="#ffffff" roughness={1} transparent opacity={0.9} />
        </mesh>
      ))}
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
      {/* LE FOYER EST ALLUMÉ · un papier émissif, pas un bloc blanc. Une
          lanterne éteinte est un poteau avec une boîte dessus ; c'est la lueur
          qui en fait une lanterne, et elle ne coûte rien puisqu'elle est une
          propriété de matière et non une source de lumière. */}
      <mesh position={[0, 0.83, 0]} castShadow>
        <boxGeometry args={[0.3, 0.26, 0.3]} />
        <meshStandardMaterial
          color={M.paperLamp}
          emissive={M.paperLamp}
          emissiveIntensity={0.55}
          roughness={1}
        />
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

