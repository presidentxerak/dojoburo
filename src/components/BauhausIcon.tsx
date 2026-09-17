// LES ICÔNES · Bauhaus, et un trait d'un pixel.
//
// Elles étaient des CARACTÈRES : ◈ ▲ ❑ ◱ ✎ ⬡ ⧉ ❖ ✉ ⚙ ★, posés dans des champs
// `glyph` de cinq fichiers de données et rendus comme du texte. Ça marche
// jusqu'au jour où on regarde : chaque système d'exploitation dessine ces
// caractères à sa façon, à une graisse et une taille qui ne sont pas les
// nôtres, certains tombent en police de repli, et deux d'entre eux ne
// s'affichent pas du tout sur un téléphone. Une identité visuelle qui dépend
// de la table de caractères d'un système n'est pas une identité visuelle.
//
// CE QUI LES REMPLACE. Un jeu de formes dessinées, en SVG, selon la grammaire
// du Bauhaus : le cercle, le carré, le triangle, et ce qu'on en tire en les
// coupant (demi, quart) ou en les répétant. Rien d'autre. Pas de perspective,
// pas de dégradé, pas d'ombre, pas d'arrondi décoratif. Une icône est une
// composition de deux ou trois primitives, jamais un dessin.
//
// LE TRAIT D'UN PIXEL, littéralement. `vector-effect="non-scaling-stroke"` fait
// que le trait garde son épaisseur quelle que soit l'échelle du dessin : une
// icône de 14 pixels et une de 40 ont exactement le même filet. Sans lui, un
// `strokeWidth={1}` sur une grille de 24 devient 1,7 pixel à 40 et 0,6 à 14,
// et la page entière se met à respirer de travers sans qu'on sache pourquoi.
//
// LE PLEIN. Une forme par icône, au plus, est pleine. C'est ce qui distingue
// une composition Bauhaus d'un pictogramme au trait : le contraste vient d'un
// aplat contre des contours, pas d'une épaisseur variable. Le plein prend
// `currentColor`, donc une icône s'habille de la couleur de son contexte sans
// qu'on ait à la repeindre.
//
// LE LOGO N'EST PAS ICI, et c'est délibéré : c'est une marque, pas une icône.
// Il a ses proportions, son mot et son histoire, et le passer à la même
// grammaire reviendrait à le redessiner.

// Le vocabulaire vient de data/icons · voir l'en-tête de ce fichier-là pour
// pourquoi il vit à côté des données et non ici.
import { isIconName, type IconName } from '../data/icons'
export type { IconName }

/** La grille · toutes les formes sont composées dedans, pour que deux icônes
 *  côte à côte aient le même poids optique. 24 parce que les demis, les
 *  quarts et les tiers y tombent juste. */
const BOX = 24

/** Le dessin de chaque icône · des primitives, et rien de plus.
 *
 *  Chaque entrée rend des éléments SVG nus. Le trait, la jointure et la
 *  couleur sont posés une seule fois par le composant : les répéter ici
 *  permettrait à une icône de dériver des vingt-sept autres, ce qui est
 *  exactement comment un jeu d'icônes cesse d'en être un. */
const SHAPES: Record<IconName, JSX.Element> = {
  // le carré sur la pointe, et son coeur · la marque des piliers
  diamond: <>
    <path d="M12 2 L22 12 L12 22 L2 12 Z" />
    <path d="M12 8 L16 12 L12 16 L8 12 Z" fill="currentColor" stroke="none" />
  </>,
  // le triangle, moitié plein · la forme la plus Bauhaus qui soit
  triangle: <>
    <path d="M12 3 L22 21 L2 21 Z" />
    <path d="M12 3 L12 21 L2 21 Z" fill="currentColor" stroke="none" />
  </>,
  // le carré, et un carré dedans
  square: <>
    <rect x="2.5" y="2.5" width="19" height="19" />
    <rect x="8" y="8" width="8" height="8" fill="currentColor" stroke="none" />
  </>,
  // le carré dont un quart est plein · en bas à gauche
  quadrant: <>
    <rect x="2.5" y="2.5" width="19" height="19" />
    <rect x="2.5" y="12" width="9.5" height="9.5" fill="currentColor" stroke="none" />
    <path d="M2.5 12 H21.5 M12 2.5 V21.5" />
  </>,
  // la plume · une barre en diagonale et sa pointe
  pen: <>
    <path d="M4 20 L17 7" />
    <path d="M15 3 L21 9 L17 11 L13 7 Z" fill="currentColor" stroke="none" />
    <path d="M4 20 L7 19 L5 17 Z" />
  </>,
  // l'hexagone · le cercle du Bauhaus quand il doit s'emboîter
  hex: <path d="M12 2.5 L20.5 7.25 L20.5 16.75 L12 21.5 L3.5 16.75 L3.5 7.25 Z" />,
  // deux carrés décalés · ce qui se superpose
  layers: <>
    <rect x="2.5" y="2.5" width="14" height="14" />
    <rect x="7.5" y="7.5" width="14" height="14" fill="currentColor" stroke="none" opacity="0.18" />
    <rect x="7.5" y="7.5" width="14" height="14" />
  </>,
  // l'étoile à quatre branches · deux triangles opposés
  star4: <>
    <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
    <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
  </>,
  // la coche · deux barres, pas une courbe
  check: <path d="M4 12.5 L9.5 18 L20 6" />,
  // la croix · deux barres
  cross: <path d="M5 5 L19 19 M19 5 L5 19" />,
  // l'enveloppe · un rectangle et le triangle du rabat
  envelope: <>
    <rect x="2.5" y="5.5" width="19" height="13" />
    <path d="M2.5 5.5 L12 13.5 L21.5 5.5" />
  </>,
  // l'engrenage, réduit à ses axes · un cercle et quatre barres
  gear: <>
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    <path d="M12 2 V6 M12 18 V22 M2 12 H6 M18 12 H22" />
  </>,
  // l'étoile · le triangle et son inverse, à la façon d'un hexagramme
  star: <>
    <path d="M12 2.5 L20 16.5 L4 16.5 Z" />
    <path d="M12 21.5 L4 7.5 L20 7.5 Z" />
  </>,
  // le carré dont le quart haut-droit est plein
  frame: <>
    <rect x="2.5" y="2.5" width="19" height="19" />
    <rect x="12" y="2.5" width="9.5" height="9.5" fill="currentColor" stroke="none" />
    <path d="M2.5 12 H21.5 M12 2.5 V21.5" />
  </>,
  // …et celui dont le quart haut-gauche est plein
  panel: <>
    <rect x="2.5" y="2.5" width="19" height="19" />
    <rect x="2.5" y="2.5" width="9.5" height="9.5" fill="currentColor" stroke="none" />
    <path d="M2.5 12 H21.5 M12 2.5 V21.5" />
  </>,
  // le triangle coupé dans sa hauteur, moitié pleine à droite
  peak: <>
    <path d="M12 3 L22 21 L2 21 Z" />
    <path d="M12 3 L22 21 L12 21 Z" fill="currentColor" stroke="none" />
  </>,
  // le point · le plus petit signe du jeu
  dot: <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />,
  // le coin · un triangle rectangle plein
  corner: <path d="M2.5 2.5 L21.5 2.5 L2.5 21.5 Z" fill="currentColor" stroke="none" />,
  // le cercle, moitié pleine à droite
  halfRight: <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5 A9.5 9.5 0 0 1 12 21.5 Z" fill="currentColor" stroke="none" />
  </>,
  // …et moitié pleine à gauche
  halfLeft: <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 21.5 A9.5 9.5 0 0 1 12 2.5 Z" fill="currentColor" stroke="none" />
  </>,
  // l'anneau · deux cercles
  ring: <>
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="5" />
  </>,
  // le cercle et son centre
  centre: <>
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
  </>,
  // la cible · un cercle plein dans un cercle
  target: <>
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
  </>,
  // le losange, vide
  lozenge: <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" />,
  // la lecture · un triangle plein couché
  play: <path d="M5 3 L21 12 L5 21 Z" fill="currentColor" stroke="none" />,
  // le triangle, vide
  delta: <path d="M12 3 L22 21 L2 21 Z" />,
  // la maison · un carré et un triangle, sans rien d'autre
  house: <>
    <path d="M2 11 L12 2.5 L22 11" />
    <rect x="5" y="11" width="14" height="10.5" />
    <rect x="10" y="15.5" width="4" height="6" fill="currentColor" stroke="none" />
  </>,
  // les barres · trois, égales
  bars: <path d="M3 7 H21 M3 12 H21 M3 17 H21" />,
  // le damier · quatre carrés, deux pleins
  grid: <>
    <rect x="2.5" y="2.5" width="19" height="19" />
    <path d="M2.5 12 H21.5 M12 2.5 V21.5" />
    <rect x="2.5" y="2.5" width="9.5" height="9.5" fill="currentColor" stroke="none" />
    <rect x="12" y="12" width="9.5" height="9.5" fill="currentColor" stroke="none" />
  </>,
  // les lignes · un cadre et deux barres pleines
  rows: <>
    <rect x="2.5" y="3.5" width="19" height="17" />
    <rect x="2.5" y="8.5" width="19" height="3.5" fill="currentColor" stroke="none" />
    <path d="M2.5 8.5 H21.5 M2.5 15.5 H21.5" />
  </>,
  // la pause · deux barres verticales pleines
  pause: <>
    <rect x="5" y="3.5" width="5" height="17" fill="currentColor" stroke="none" />
    <rect x="14" y="3.5" width="5" height="17" fill="currentColor" stroke="none" />
  </>,
  // le disque · le cercle, plein
  disc: <circle cx="12" cy="12" r="9.5" fill="currentColor" stroke="none" />,
  // le carré nu · la primitive elle même, sans rien dedans
  box: <rect x="2.5" y="2.5" width="19" height="19" />,
  // le losange plein
  diamondSolid: <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" fill="currentColor" stroke="none" />,
}

/**
 * Une icône Bauhaus.
 *
 * Elle est décorative par défaut (`aria-hidden`) : partout où elle est posée,
 * un mot la suit. Une icône qui porterait seule le sens exigerait un `title`,
 * et on le passerait explicitement plutôt que d'en inventer un depuis le nom
 * de la forme, qui décrit un carré et non une intention.
 */
export function BauhausIcon({ name, size = 20, className, title }: {
  name: IconName | string
  size?: number
  className?: string
  /** à ne donner QUE si l'icône est seule à dire quelque chose */
  title?: string
}) {
  // Un nom inconnu ne doit pas faire un trou dans la page. Le carré est le
  // repli : c'est la forme la plus neutre du jeu, et elle se voit, ce qui est
  // le but d'un repli.
  const shape = isIconName(name) ? SHAPES[name] : SHAPES.square
  return (
    <svg
      className={`bh-icon ${className ?? ''}`}
      width={size}
      height={size}
      viewBox={`0 0 ${BOX} ${BOX}`}
      fill="none"
      stroke="currentColor"
      // UN PIXEL, quelle que soit la taille rendue · voir l'en-tête.
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
      strokeLinejoin="miter"
      strokeLinecap="butt"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {shape}
    </svg>
  )
}
