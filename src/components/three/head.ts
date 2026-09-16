// La tête · une FORME PAR ESPÈCE, et plus petite.
//
// Deux reproches, tous les deux justes.
//
// « Trop grosses » : à 1,38, la tête faisait près de soixante pour cent de la
// hauteur — la proportion d'une figurine posée sur une étagère, pas celle d'un
// personnage qu'on regarde travailler à douze dans une pièce. Elle redescend à
// 1,02, et le corps redevient visible.
//
// « Trop cubiques » : j'avais donné LE MÊME bloc aux trente-deux espèces. Une
// seule forme pour tout le monde, c'est le défaut d'avant (la même sphère pour
// tout le monde) avec une autre silhouette. Il y a maintenant cinq formes —
// cube, rectangle haut, rectangle large, ronde, ovale — réparties par espèce.
//
// Ce qui a rendu la chose possible : les oreilles, cornes et chapeaux ne sont
// plus écrits en coordonnées ABSOLUES. Ils étaient calés à la main sur un bloc
// de demi-largeur 0,60 ; changer la forme les aurait tous enterrés ou fait
// flotter, exactement comme lors du passage de la sphère au bloc. Ils se
// réfèrent désormais aux demi-dimensions de la tête (`Head`), si bien qu'une
// oreille posée « au sommet, aux deux tiers de la largeur » reste au sommet
// aux deux tiers de la largeur, quelle que soit la forme reçue.
// LA PROPORTION EST ARRÊTÉE, et elle ne se rediscute plus.
//
// La spécification du kit prescrit une tête à 55 % de la hauteur totale, et
// prévient qu'en dessous les personnages se lisent comme des taches grises
// quand la caméra recule — or la nôtre est loin. C'est un bon argument, il a
// été soumis, et il a été tranché : 45 %. Le reproche d'origine était vécu,
// pas théorique (« leurs têtes sont trop grosses et cubiques »), et une
// spécification écrite pour un jeu où l'on voit trois personnages en gros
// plan ne décide pas d'une pièce où l'on en regarde douze travailler.
//
// Ce commentaire existe pour qu'on ne refasse pas l'aller-retour une
// quatrième fois.
export const HEAD_Y = 1.95
export const HEAD_S = 1.02
// La tête reste légèrement remontée · le clapet de l'ordinateur monte à
// y ≈ 1,72, et c'est lui qui cachait le bas des visages.
export const HEAD_LIFT = 0.1

/** Les demi-dimensions d'une tête · tout ce qui se pose dessus s'y réfère. */
export type Head = { x: number; y: number; z: number; round: boolean }

export type HeadShape = 'cube' | 'block' | 'wide' | 'round' | 'oval'

const SHAPE: Record<HeadShape, Head> = {
  cube: { x: 0.58, y: 0.58, z: 0.55, round: false },
  block: { x: 0.51, y: 0.68, z: 0.5, round: false },
  wide: { x: 0.67, y: 0.51, z: 0.57, round: false },
  round: { x: 0.6, y: 0.6, z: 0.6, round: true },
  oval: { x: 0.55, y: 0.68, z: 0.53, round: true },
}

/** Le tour de tête à hauteur d'oreilles · ce qui doit passer AUTOUR (bandeau,
 *  bord de chapeau) doit dépasser le COIN d'une boîte, pas son demi-côté ; sur
 *  une forme ronde, le demi-côté suffit. Un bord de chapeau calculé sur le
 *  demi-côté laissait les quatre coins de la tête ressortir au travers. */
export const girth = (h: Head) => (h.round ? Math.max(h.x, h.z) + 0.04 : Math.hypot(h.x, h.z) * 0.95)
/** Le sommet de la tête, en coordonnées du personnage. */
export const crown = (h: Head) => HEAD_Y + h.y

const HEAD_BY_KIND: Record<string, HeadShape> = {
  // rondes · les museaux, qui ont besoin d'un volume doux
  cat: 'round', rabbit: 'round', panda: 'round', bear: 'round', poodle: 'round',
  human: 'round', mushroom: 'round', chicken: 'round', slime: 'round',
  // ovales · le crâne en œuf
  duck: 'oval', penguin: 'oval', alien: 'oval', frog: 'oval', ghost: 'oval',
  madscientist: 'oval', wizard: 'oval', mage: 'oval', jellyfish: 'oval',
  // cubiques · les machines et ce qui est bâti
  robot: 'cube', goldorak: 'cube', knight: 'cube', geo: 'cube', monitor: 'cube',
  // rectangulaires hautes
  cyborg: 'block', ninja: 'block', skeleton: 'block', vampire: 'block', dragon: 'block',
  // rectangulaires larges
  monster: 'wide', godzilla: 'wide', bibendum: 'wide', octopus: 'wide',
}
export const headOf = (kind: string): Head => SHAPE[HEAD_BY_KIND[kind] ?? 'round']
