// LA SCÈNE · où l'on entre, où se tient le maître, et ce qui est solide.
//
// Trois choses étaient calculées à trois endroits : la porte (Decor3D pour la
// percer, Courier3D pour y entrer), la place du maître (Sensei3D, en dur) et
// les meubles (Decor3D les dessinait, personne ne savait qu'ils existaient).
// Deux calculs valent deux occasions de diverger — le coursier traversait
// déjà le mur à côté de sa porte avant qu'on ne partage `doorAt`.
//
// Ce fichier est la géométrie de la salle, et rien d'autre : pas de React,
// pas de three, pas de JSX. C'est ce qui permet de le VÉRIFIER hors du
// navigateur (scripts/test-stage.mjs) — une garde qui doit lancer un moteur
// 3D pour dire si deux meubles se traversent ne se lance jamais.
import { ROOM } from '../../three/layout3d'

/* ------------------------------------------------------------------ */
/* L'enveloppe et sa porte                                             */
/* ------------------------------------------------------------------ */

export const SHELL_OPEN = { w: 30, d: 23, h: 7.5 }
export const shellOf = (enclosed?: boolean) =>
  enclosed ? { w: ROOM.w, d: ROOM.d, h: ROOM.wallH } : SHELL_OPEN

/** un poteau tous les ~4,6 · assez serré pour donner l'échelle, assez lâche
 *  pour ne pas faire une palissade */
export const baysOf = (w: number) => Math.max(3, Math.round(w / 4.6))

/** La travée percée · DÉCALÉE d'un cran vers la gauche, pas au centre. Au
 *  centre, tous les mondes y posaient déjà quelque chose — tableau blanc,
 *  étagère, écran de contrôle — et la porte disparaissait derrière. C'est
 *  aussi ce décalage qui laisse la moitié droite du fond libre pour
 *  l'estrade du maître. */
export const doorBayOf = (bays: number) => Math.max(0, Math.floor(bays / 2) - 1)

/** Le seuil · position exacte de l'ouverture, et sa demi-largeur. */
export function doorAt(enclosed?: boolean): { x: number; z: number; half: number } {
  const { w, d } = shellOf(enclosed)
  const bays = baysOf(w)
  const bayW = w / bays
  return { x: -w / 2 + bayW * (doorBayOf(bays) + 0.5), z: -d / 2, half: bayW / 2 }
}

/* ------------------------------------------------------------------ */
/* L'estrade du maître                                                 */
/* ------------------------------------------------------------------ */

/** Le fond de la SALLE · les décors se placent tous par rapport à lui, y
 *  compris dans les mondes ouverts, où le mur est plus loin mais où le
 *  mobilier tient dans la même empreinte. */
export const BACK_Z = -ROOM.d / 2

/** L'ESTRADE · le maître se tenait DEVANT l'équipe, dos à la caméra, à
 *  l'endroit exact où l'on regarde en premier. Un maître de dojo se tient au
 *  fond, face à la salle : on entre, on traverse, on va le voir. C'est aussi
 *  ce qui donne une destination au coursier, qui jusque-là posait des
 *  dossiers par terre et repartait.
 *
 *  Elle est à DROITE de l'axe, pas au centre : la porte occupe le fond
 *  gauche (x de -5 à 0 en salle fermée), et une estrade centrée l'aurait
 *  bouchée. */
export const DAIS = { x: 3.0, z: BACK_Z + 2.2, w: 4.8, d: 3.2, h: 0.32 }

/** Le maître, sur son estrade, face à la salle. */
export const SENSEI_AT: [number, number, number] = [DAIS.x, DAIS.h, DAIS.z - 0.35]

/** La ligne juste devant la marche · on s'y tient sans monter sur l'estrade,
 *  et sans que le dégagement des obstacles vienne vous en écarter. */
export const FRONT_OF_DAIS = DAIS.z + DAIS.d / 2 + 0.9

/** Où l'on se tient pour lui parler · devant l'estrade, à portée de voix.
 *  Un pas de plus en arrière et l'on criait : trois unités séparaient les
 *  deux bulles, et la conversation ne se lisait plus comme une conversation. */
export const AUDIENCE: [number, number] = [DAIS.x - 0.5, FRONT_OF_DAIS]

/** Le pupitre bas, à côté du maître · c'est là que se posent les dossiers
 *  qu'on lui remet. Ils finissaient par terre au milieu de la salle, où ils
 *  ne disaient rien ; posés sur son pupitre, ils disent qu'une livraison a
 *  été faite, et à qui. Les coordonnées sont RELATIVES à l'estrade, pour que
 *  le meuble et ce qu'on y pose ne puissent pas diverger. */
export const LECTERN = { dx: -1.45, dz: 0.5, w: 1.25, d: 0.72, top: DAIS.h + 0.34 }

/** LA ZONE RÉSERVÉE du fond · l'estrade plus le couloir de la porte. Aucun
 *  décor ne s'y pose, sinon le maître pousse dans un meuble et le coursier
 *  entre dans une étagère. Les objets du fond vont donc dans les angles :
 *  à gauche au-delà de -6,8 (le couloir d'un monde ouvert passe plus au
 *  large), à droite au-delà de 6. */
export const KEEP_CLEAR = { x0: -6.6, x1: 5.8, z0: BACK_Z - 0.2, z1: -3.9 }

/** Un objet de décor posé au sol tient-il à l'écart du fond réservé ? */
export function clearsBack(x: number, z: number, half = 0): boolean {
  if (z < KEEP_CLEAR.z0 || z > KEEP_CLEAR.z1) return true
  return x + half < KEEP_CLEAR.x0 || x - half > KEEP_CLEAR.x1
}

/* ------------------------------------------------------------------ */
/* Ce qui est solide                                                   */
/* ------------------------------------------------------------------ */

/** Un obstacle · une empreinte au sol, rectangulaire. Un disque est un carré
 *  qui s'assume : à cette échelle la différence ne se voit pas, et une seule
 *  forme veut dire une seule règle de dégagement — donc une règle qu'on peut
 *  vérifier d'un seul test. */
export type Solid = { x: number; z: number; hw: number; hd: number; tag: string }

/** Le registre des obstacles VIVANTS · publié par la scène (qui seule sait
 *  qui est assis où), lu par le coursier. Le même mécanisme que les
 *  positions d'agents dans layout3d : un module, pas un contexte React, pour
 *  qu'une boucle de rendu puisse le lire sans re-render. */
let SOLIDS: Solid[] = []

/** L'empreinte d'un poste de travail · le siège ET le bureau devant lui. */
const stationSolid = (s: { id?: string; x: number; z: number }): Solid =>
  ({ x: s.x, z: s.z + 0.5, hw: 1.15, hd: 1.25, tag: 'poste:' + (s.id ?? '') })

/** Les quatre plantes d'angle · elles bordaient les deux murs latéraux à
 *  mi-profondeur, c'est-à-dire pile là où le mobilier de métier vient de
 *  s'installer (voir PROP_SLOTS). Elles avancent vers la caméra, où les
 *  bandes latérales sont vraiment libres. */
export const PLANTS: Array<[number, number]> = [[-8.9, 4.6], [8.9, 4.6], [-8.9, 7.0], [8.9, 7.0]]

/** Ce qui ne bouge jamais · l'estrade et les plantes d'angle. */
export const FIXED_SOLIDS: Solid[] = [
  { x: DAIS.x, z: DAIS.z, hw: DAIS.w / 2, hd: DAIS.d / 2, tag: 'estrade' },
  ...PLANTS.map(([x, z]) => ({ x, z, hw: 0.7, hd: 0.7, tag: 'plante' })),
]

/** LES SIX EMPLACEMENTS DU MOBILIER DE MÉTIER · bibliothèques, pupitres,
 *  tableaux. Ils couraient d'un bout à l'autre du fond, à un pas du mur :
 *  trois d'entre eux se trouvaient exactement sous les pieds du maître, et
 *  un quatrième en travers de la porte.
 *
 *  Ils se replient donc sur les deux FLANCS, en arc : on part du mur latéral
 *  à mi-profondeur, on remonte en tournant, on finit contre le mur du fond.
 *  C'est une meilleure composition que l'ancienne rangée frontale — le
 *  mobilier encadre l'équipe au lieu de la barrer — et surtout, elle laisse
 *  le fond à qui de droit.
 *
 *  Les indices vont de gauche à droite : 0 et 5 sont les plus avancés, 2 et
 *  3 les plus proches du mur du fond. */
export const PROP_SLOTS: Array<{ p: [number, number, number]; r: number }> = [
  { p: [-9.0, 0, 0.6], r: Math.PI / 2 },
  { p: [-9.0, 0, -2.6], r: Math.PI / 2 },
  { p: [-8.2, 0, -5.4], r: 0.55 },
  { p: [8.2, 0, -5.4], r: -0.55 },
  { p: [9.0, 0, -2.6], r: -Math.PI / 2 },
  { p: [9.0, 0, 0.6], r: -Math.PI / 2 },
]

/** L'empreinte au sol d'un meuble de métier · le plus encombrant fait 2,8 de
 *  large sur 1 de profond, et il tourne avec son emplacement. */
export function slotFootprint(i: number): Solid {
  const { p, r } = PROP_SLOTS[i]
  const c = Math.abs(Math.cos(r))
  const sn = Math.abs(Math.sin(r))
  return { x: p[0], z: p[2], hw: 1.4 * c + 0.5 * sn, hd: 1.4 * sn + 0.5 * c, tag: 'metier:' + i }
}

export function setSolids(stations: Array<{ id?: string; x: number; z: number }>) {
  SOLIDS = [...FIXED_SOLIDS, ...stations.map(stationSolid)]
}
export function solids(): Solid[] {
  return SOLIDS.length ? SOLIDS : FIXED_SOLIDS
}

/** Dégage un point d'un obstacle · on repousse le long de l'axe où le
 *  chevauchement est le PLUS FAIBLE. Repousser le long du plus grand ferait
 *  traverser le meuble pour en sortir de l'autre côté, ce qui est exactement
 *  ce qu'on cherche à éviter.
 *
 *  Trois passes : sortir d'un meuble peut faire entrer dans le suivant quand
 *  ils sont côte à côte (deux postes voisins), et une seule passe laissait le
 *  coursier dans le second. */
export function avoid(x: number, z: number, r: number, list: Solid[] = solids()): [number, number] {
  let px = x
  let pz = z
  for (let pass = 0; pass < 3; pass++) {
    let moved = false
    for (const s of list) {
      const dx = px - s.x
      const dz = pz - s.z
      const ox = s.hw + r - Math.abs(dx)
      const oz = s.hd + r - Math.abs(dz)
      if (ox <= 0 || oz <= 0) continue
      if (ox < oz) px = s.x + (dx < 0 ? -1 : 1) * (s.hw + r)
      else pz = s.z + (dz < 0 ? -1 : 1) * (s.hd + r)
      moved = true
    }
    if (!moved) break
  }
  return [px, pz]
}

/** Garde un point DANS la salle · les murs sont solides, eux aussi. */
export function clampRoom(x: number, z: number, r: number, enclosed?: boolean): [number, number] {
  const { w, d } = shellOf(enclosed)
  const hw = w / 2 - 0.5 - r
  const hd = d / 2 - 0.5 - r
  return [Math.max(-hw, Math.min(hw, x)), Math.max(-hd, Math.min(hd, z))]
}

/* ------------------------------------------------------------------ */
/* Le trajet du coursier                                               */
/* ------------------------------------------------------------------ */

/** Le chemin de la porte jusqu'au maître · quatre points, choisis pour
 *  longer le fond réservé sans jamais y entrer : on franchit le seuil, on
 *  avance le long du couloir gauche, puis on coupe DEVANT l'estrade. En
 *  visant le maître en ligne droite depuis la porte, on rasait le coin de
 *  l'estrade — visible, et le genre de faute qu'on ne voit qu'en regardant
 *  longtemps. */
export function courierPath(enclosed?: boolean): Array<[number, number]> {
  const dr = doorAt(enclosed)
  return [
    [dr.x, dr.z - 2.6],            // en coulisse, derrière la porte
    [dr.x, dr.z + 1.6],            // le seuil franchi
    [dr.x + 0.6, FRONT_OF_DAIS],   // remonté le long du couloir, devant l'estrade
    AUDIENCE,                      // à portée de voix du maître
  ]
}

/** La longueur cumulée d'un chemin · sert à le parcourir à vitesse
 *  CONSTANTE. Une durée fixe par segment donnait un coursier qui sprintait
 *  sur les longs et traînait sur les courts, et le trajet est deux fois plus
 *  long dans un monde ouvert que dans une salle fermée. */
export function pathLengths(path: Array<[number, number]>): { seg: number[]; total: number } {
  const seg: number[] = []
  let total = 0
  for (let i = 1; i < path.length; i++) {
    const d = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1])
    seg.push(d)
    total += d
  }
  return { seg, total }
}

/** Le point situé à `s` unités du départ, et la direction qu'on y suit. */
export function pointAt(path: Array<[number, number]>, seg: number[], s: number): { x: number; z: number; dx: number; dz: number } {
  let left = Math.max(0, s)
  for (let i = 0; i < seg.length; i++) {
    const [ax, az] = path[i]
    const [bx, bz] = path[i + 1]
    if (left <= seg[i] || i === seg.length - 1) {
      const k = seg[i] > 0 ? Math.min(1, left / seg[i]) : 1
      return { x: ax + (bx - ax) * k, z: az + (bz - az) * k, dx: bx - ax, dz: bz - az }
    }
    left -= seg[i]
  }
  const last = path[path.length - 1]
  return { x: last[0], z: last[1], dx: 0, dz: 1 }
}
