// LES BANDEAUX BAUHAUS · noir et violet, pour que les rubriques respirent.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE FRISE, ALORS QU'ON A DÉJÀ UN JEU D'ICÔNES
//
// Une icône DÉSIGNE · elle se pose devant un mot et dit de quoi ce mot parle.
// Elle est faite pour être lue en un instant et pour disparaître ensuite, ce
// qui est exactement ce qu'on lui demande.
//
// Un bandeau ne désigne rien. Il RYTHME. Il dit « une rubrique commence ici »
// sans qu'on ait à tracer un filet, qui ne dit que « une ligne ». C'est un
// besoin réel et différent : l'écran Profil empilait six sections séparées par
// rien du tout, et on les lisait comme une seule longue liste.
//
// ---------------------------------------------------------------------------
// LA GRAMMAIRE EST CELLE DES ICÔNES, ET ELLE NE BOUGE PAS
//
// Le cercle, le carré, le triangle, et ce qu'on en tire en les coupant ou en
// les répétant. Pas de perspective, pas de dégradé, pas d'arrondi décoratif.
// Un bandeau est une SUITE de ces formes sur une ligne, jamais un dessin.
//
// DEUX ENCRES, ET DEUX SEULEMENT · le noir de l'encre et le violet de marque.
// C'est ce qui a été demandé, et c'est aussi ce qui fait qu'une frise reste
// une frise : à trois couleurs elle devient une illustration, et une
// illustration au dessus d'un titre entre en concurrence avec lui.
//
// LE VIOLET NE TOMBE PAS N'IMPORTE OÙ. Une forme sur trois environ le porte,
// jamais deux d'affilée. Alterner strictement donnerait une rayure ; le
// distribuer au hasard ferait des paquets. La règle est donc : une forme sur
// trois, décalée par la graine, et jamais collée à sa voisine violette.
//
// ---------------------------------------------------------------------------
// IL EST DÉCORATIF, ET IL LE DIT
//
// `aria-hidden` sur toute la frise. Un lecteur d'écran qui énumérerait douze
// formes géométriques avant chaque titre rendrait la page inutilisable pour
// celui qui en dépend, et il n'y a rien à y comprendre : c'est du rythme, pas
// de l'information. Ce qui porte le sens est le titre juste en dessous.
import { useMemo } from 'react'

/** Le vocabulaire · les seules formes qu'un bandeau connaît.
 *
 *  Chacune est dessinée dans une case de 12 sur 12, alignée en bas, pour
 *  qu'un cercle et un triangle côte à côte posent sur la même ligne. Sans
 *  cette base commune, une frise se met à onduler et on ne sait pas dire
 *  pourquoi elle est laide. */
const CELL = 12

type Glyph = (i: number) => JSX.Element

const GLYPHS: Glyph[] = [
  // le disque plein
  (i) => <circle key={i} cx={6} cy={6} r={4.6} />,
  // le demi-disque, à droite
  (i) => <path key={i} d="M6 1.4 A4.6 4.6 0 0 1 6 10.6 Z" />,
  // le demi-disque, à gauche
  (i) => <path key={i} d="M6 10.6 A4.6 4.6 0 0 1 6 1.4 Z" />,
  // le carré plein
  (i) => <rect key={i} x={1.6} y={1.6} width={8.8} height={8.8} />,
  // le triangle, pointe en haut
  (i) => <path key={i} d="M6 1.3 L10.8 10.7 L1.2 10.7 Z" />,
  // le triangle, pointe en bas
  (i) => <path key={i} d="M1.2 1.3 L10.8 1.3 L6 10.7 Z" />,
  // le quart de disque, en bas à gauche · l'arc du Bauhaus
  (i) => <path key={i} d="M1.4 1.4 L1.4 10.6 L10.6 10.6 A9.2 9.2 0 0 0 1.4 1.4 Z" />,
  // le quart de disque, en bas à droite
  (i) => <path key={i} d="M10.6 1.4 L10.6 10.6 L1.4 10.6 A9.2 9.2 0 0 1 10.6 1.4 Z" />,
  // la barre debout · le silence de la frise, et il en faut
  (i) => <rect key={i} x={4.4} y={1.4} width={3.2} height={9.2} />,
  // l'anneau · la seule forme évidée, pour que la frise ne soit pas un mur
  (i) => <path key={i} d="M6 1.4 A4.6 4.6 0 1 1 5.99 1.4 Z M6 3.6 A2.4 2.4 0 1 0 6.01 3.6 Z" fillRule="evenodd" />,
]

/** Un générateur déterministe · MÊME RUBRIQUE, MÊME FRISE, à jamais.
 *
 *  C'est la même règle que les jardins de la vallée, et pour la même raison :
 *  un tirage libre redessinerait la frise à chaque rendu, donc à chaque frappe
 *  dans un champ de la page. Une décoration qui change quand on tape est un
 *  défaut visible, et personne ne devine d'où il vient. */
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

/**
 * Une frise Bauhaus.
 *
 * @param seed   ce qui la fixe · le nom de la rubrique, pas un compteur. Un
 *               indice de position changerait la frise le jour où l'on
 *               insère une section avant elle.
 * @param n      combien de formes. Douze tient sur un téléphone de trois cent
 *               quatre-vingt-dix ; au delà les formes descendent sous six
 *               pixels et se lisent comme du bruit.
 * @param height sa hauteur rendue, en pixels.
 */
export function BauhausBand({ seed, n = 12, height = 14, className = '' }: {
  seed: string
  n?: number
  height?: number
  className?: string
}) {
  const cells = useMemo(() => {
    const rnd = seeded(seed)
    const out: { g: number; violet: boolean }[] = []
    // LE DÉCALAGE DU VIOLET vient de la graine · voir l'en-tête. Deux frises
    // voisines dont le violet tomberait aux mêmes places se liraient comme une
    // seule bande répétée.
    const offset = Math.floor(rnd() * 3)
    let lastViolet = -2
    for (let i = 0; i < n; i++) {
      const wants = (i + offset) % 3 === 0
      // JAMAIS DEUX VIOLETS COLLÉS · la règle est ici et pas dans le tirage,
      // parce qu'un tirage ne sait pas ce qu'il vient de faire.
      const violet = wants && i - lastViolet > 1
      if (violet) lastViolet = i
      out.push({ g: Math.floor(rnd() * GLYPHS.length), violet })
    }
    return out
  }, [seed, n])

  return (
    <svg
      className={`bh-band ${className}`}
      viewBox={`0 0 ${n * CELL} ${CELL}`}
      height={height}
      width="100%"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden
      focusable="false"
    >
      {cells.map((c, i) => (
        <g key={i} transform={`translate(${i * CELL} 0)`} className={c.violet ? 'bh-v' : 'bh-k'}>
          {GLYPHS[c.g](i)}
        </g>
      ))}
    </svg>
  )
}

/**
 * UN TITRE DE RUBRIQUE AVEC SA FRISE.
 *
 * La frise est POSÉE AU DESSUS du titre, pas à côté. À côté, elle entre en
 * concurrence avec lui pour la même ligne de lecture et il faut choisir lequel
 * regarder ; au dessus, elle est franchie avant qu'on arrive au mot, ce qui
 * est exactement le rôle qu'on lui donne · annoncer, puis s'effacer.
 */
export function BandedTitle({ seed, children, className = '' }: {
  seed: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`bh-titled ${className}`}>
      <BauhausBand seed={seed} n={10} height={11} />
      {children}
    </div>
  )
}
