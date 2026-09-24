// LE VOCABULAIRE DES ICÔNES · les noms, et rien que les noms.
//
// Ce fichier ne dessine rien. Il existe pour une raison précise : les champs
// `glyph` vivent dans des fichiers de DONNÉES (les piliers, les pistes, les
// archétypes, les catégories de la bibliothèque, les modes d'effort), et ces
// fichiers sont chargés hors du navigateur par la génération du plan de site
// et par les gardes de contenu. Ils ne peuvent donc importer aucun composant :
// un fichier de données qui tire du JSX derrière lui fait tomber esbuild au
// moment où un script node veut simplement lire une liste.
//
// La liste des noms est ici, en TypeScript nu. Le dessin est dans
// components/BauhausIcon, qui déclare ses formes en `Record<IconName, …>` :
// ajouter un nom ici sans le dessiner ne compile pas, et dessiner une forme
// dont le nom n'est pas ici ne compile pas non plus. C'est la seule façon
// d'avoir un vocabulaire fermé sans le recopier.
//
// LES NOMS DÉCRIVENT LA FORME, pas l'intention · « triangle », pas
// « croissance ». Une icône sert à trois endroits différents dans ce produit,
// et un nom qui prétend dire le sens ment dans deux d'entre eux.

export const ICON_NAMES = [
  'diamond',    // le carré sur la pointe, et son coeur
  'triangle',   // le triangle, moitié plein
  'square',     // le carré, et un carré dedans
  'quadrant',   // le carré dont le quart bas-gauche est plein
  'pen',        // la plume
  'hex',        // l'hexagone
  'layers',     // deux carrés décalés
  'star4',      // l'étoile à quatre branches
  'check',      // la coche
  'cross',      // la croix
  'envelope',   // l'enveloppe
  'gear',       // le cercle et ses quatre axes
  'star',       // l'hexagramme
  'frame',      // le quart haut-droit plein
  'panel',      // le quart haut-gauche plein
  'peak',       // le triangle coupé dans sa hauteur
  'dot',        // le point
  'corner',     // le triangle rectangle plein
  'halfRight',  // le cercle, moitié pleine à droite
  'halfLeft',   // …et à gauche
  'ring',       // deux cercles
  'centre',     // le cercle et son centre
  'target',     // la cible
  'lozenge',    // le losange vide
  'play',       // le triangle couché, plein
  'delta',      // le triangle vide
  'house',      // le carré et son toit
  'bars',       // trois barres égales
  'grid',       // le damier · quatre carrés
  'rows',       // des lignes pleines, empilées
  'pause',      // deux barres verticales
  'disc',       // le cercle plein
  'box',        // le carré nu
  'diamondSolid', // le losange plein
  'smile',      // le cercle, deux points et un arc · la seule figure du jeu
  'lock',       // le cadenas · ce qui est fermé
  'clan',       // deux personnes · le clan
] as const

export type IconName = (typeof ICON_NAMES)[number]

const SET = new Set<string>(ICON_NAMES)
export const isIconName = (s: string): s is IconName => SET.has(s)
