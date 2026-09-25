// LES GRADES DE L'ÉLÈVE · une ceinture et un personnage par palier de niveau.
//
// POURQUOI · demandé : « crée des icônes de profil en fonction du grade de
// l'étudiant ». L'en-tête montrait l'initiale de l'adresse (« A »), qui ne dit
// rien de ce qu'on a fait. L'icône de profil devient le personnage du grade
// atteint, dans un anneau de la couleur de sa ceinture, et elle change quand on
// progresse : c'est la récompense qu'on voit sur chaque écran.
//
// D'OÙ VIENT LE GRADE · du niveau (game/Gauge · levelOf), lui même dérivé des
// dojos réellement finis. Rien ne s'achète et rien ne s'écrit à la main : un
// grade qui ne suivrait pas le travail serait un compteur décoratif.
//
// LES PALIERS · calés sur les formations réelles (en XP) : le week-end de l'IA
// (environ 490 XP) mène à la ceinture jaune, la formation complète en plus
// (environ 2 960 XP) à la marron, et une formation métier par dessus à la
// noire. La ceinture noire demande donc un vrai parcours, jamais un après-midi.
//
// CE QUE CE N'EST PAS · les ceintures du studio (dojo/grades) comptent les
// agents construits, dans l'autre partie du produit. Celles-ci comptent les
// dojos du jeu. Mêmes couleurs, parce que c'est le même dojo ; règles
// distinctes, parce que ce n'est pas le même travail.
import { B, type Bi } from '../data/bilingual'
import type { Character } from '../data/looks'

export interface Rank {
  id: 'white' | 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'black'
  /** le niveau à partir duquel ce grade est atteint */
  from: number
  /** la ceinture */
  belt: Bi
  /** le titre porté avec elle */
  title: Bi
  /** ce qu'elle dit de l'élève · au présent */
  means: Bi
  /** la couleur de la ceinture · l'anneau de l'avatar */
  tint: string
  /** le personnage qui porte ce grade */
  character: Character
}

export const RANKS: Rank[] = [
  {
    id: 'white', from: 1, tint: '#e5e7eb',
    belt: B('White belt', 'Ceinture blanche'),
    title: B('Novice', 'Novice'),
    means: B('You walked into the dojo. Your first lesson is waiting.', 'Vous êtes entré dans le dojo. Votre première leçon vous attend.'),
    character: { kind: 'chicken', face: '#fff7ed', outfit: '#f5f5f4', outfit2: '#e5e7eb', pants: '#d6d3d1', extra: '#ef4444' },
  },
  {
    id: 'yellow', from: 2, tint: '#facc15',
    belt: B('Yellow belt', 'Ceinture jaune'),
    title: B('Apprentice', 'Apprenti'),
    means: B('You write clear prompts and use AI on real tasks, as the AI weekend teaches.', "Vous rédigez des prompts clairs et utilisez l'IA sur des tâches réelles, comme l'enseigne le week-end de l'IA."),
    character: { kind: 'duck', face: '#fde68a', outfit: '#7c3aed', outfit2: '#facc15', pants: '#4c1d95', extra: '#fb923c' },
  },
  {
    id: 'orange', from: 4, tint: '#fb923c',
    belt: B('Orange belt', 'Ceinture orange'),
    title: B('Initiate', 'Initié'),
    means: B('You know how a model works, and you know why it sometimes gets things wrong.', "Vous savez comment fonctionne un modèle, et pourquoi il lui arrive de se tromper."),
    character: { kind: 'rabbit', face: '#f5efe6', outfit: '#6d28d9', outfit2: '#fb923c', pants: '#3b0764', extra: '#fda4af' },
  },
  {
    id: 'green', from: 7, tint: '#22c55e',
    belt: B('Green belt', 'Ceinture verte'),
    title: B('Disciple', 'Disciple'),
    means: B('You choose the right model and the right context for each task.', 'Vous choisissez le bon modèle et le bon contexte pour chaque tâche.'),
    character: { kind: 'frog', face: '#86efac', outfit: '#5b21b6', outfit2: '#22c55e', pants: '#2e1065', extra: '#fde047' },
  },
  {
    id: 'blue', from: 10, tint: '#3b82f6',
    belt: B('Blue belt', 'Ceinture bleue'),
    title: B('Practitioner', 'Pratiquant'),
    means: B('You build assistants and agents, and you check what they produce.', 'Vous construisez des assistants et des agents, et vous vérifiez ce qu\'ils produisent.'),
    character: { kind: 'penguin', face: '#1e293b', outfit: '#7c3aed', outfit2: '#3b82f6', pants: '#1e1b4b', extra: '#fbbf24' },
  },
  {
    id: 'brown', from: 12, tint: '#a16207',
    belt: B('Brown belt', 'Ceinture marron'),
    title: B('Expert', 'Expert'),
    means: B('The full training is yours: you design AI work that is reliable and frugal.', "La formation complète est acquise : vous concevez un travail avec l'IA fiable et sobre."),
    character: { kind: 'panda', face: '#f5f5f4', outfit: '#4c1d95', outfit2: '#a16207', pants: '#1c1917', extra: '#c4b5fd', acc: 'shades' },
  },
  {
    id: 'black', from: 15, tint: '#18181b',
    belt: B('Black belt', 'Ceinture noire'),
    title: B('Master', 'Maître'),
    means: B('You apply AI to your own trade and can teach it to others.', "Vous appliquez l'IA à votre métier et vous savez l'enseigner à d'autres."),
    character: { kind: 'ninja', face: '#e9e4da', outfit: '#18181b', outfit2: '#8b5cf6', pants: '#27272a', extra: '#c4b5fd' },
  },
]

/** Le grade atteint à ce niveau. */
export function rankOf(level: number): Rank {
  let r = RANKS[0]
  for (const x of RANKS) if (level >= x.from) r = x
  return r
}

/** Le grade suivant, ou null au sommet. */
export function nextRank(level: number): Rank | null {
  return RANKS.find((x) => x.from > level) ?? null
}

/** La place du grade dans l'échelle, de 1 à 7. */
export const rankIndex = (r: Rank): number => RANKS.indexOf(r) + 1
