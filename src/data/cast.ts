// LE CASTING · qui habite chaque salle, et qui enseigne chaque dojo.
//
// POURQUOI UN FICHIER À PART. Les visages venaient d'une table de rôles
// (agentFaces), écrite pour l'équipe du studio : douze visages pour douze
// rôles, et plusieurs cas d'usage retombaient sur le même. Dans le jeu, ça se
// voyait tout de suite · presque toutes les salles montraient le même
// personnage rouge. Le jeu a donc son propre casting, ici, et la table du
// studio reste celle du studio.
import type { Character } from './looks'
import type { DojoKit } from './packs'
import { characterFor, faceIdForUseCase } from './agentFaces'

/** CE QUI SE JOUE DANS CHAQUE SALLE · une scène par métier.
 *
 *  PREMIÈRE DEMANDE : « ils font tous la même action, diversifie ». Chaque
 *  salle a reçu son geste, mais un seul spécialiste, seul dans sa pièce.
 *
 *  DEUXIÈME DEMANDE, qui l'emporte : « les scènes doivent être plus en rapport
 *  avec le thème de la spécialité : un commercial vend des produits à
 *  quelqu'un, un growth marketer montre des courbes d'acquisition client à
 *  son boss, un fondateur parle devant ses équipes, un chef de produit
 *  construit des produits ». Un métier se reconnaît à la personne avec qui on
 *  l'exerce. Chaque salle de métier met donc en scène une situation de travail,
 *  avec ses interlocuteurs et son objet :
 *    · VENTE · le commercial présente un produit à une cliente,
 *    · GROWTH · la growth marketer montre les courbes d'acquisition au boss,
 *    · FONDATEUR · il parle depuis une estrade, son équipe devant lui,
 *    · PRODUIT · le chef de produit assemble son produit, bloc après bloc,
 *    · COMMUNICATION · une interview en studio, micro contre micro,
 *    · ASSISTANT · il organise le planning, entre son bureau et le tableau.
 *  Les deux salles de classe gardent leur maître qui enseigne à ses élèves. */
export type RoomAction = 'teach' | 'sell' | 'present' | 'address' | 'build' | 'interview' | 'organize'
  // les huit métiers ajoutés
  | 'design' | 'revise' | 'experiment' | 'code' | 'recruit' | 'counsel' | 'workshop'

export interface RoomCast {
  /** le maître d'une classe, ou le professionnel d'un métier */
  lead: Character
  action: RoomAction
  /** LES ÉLÈVES · seulement dans les salles de classe. */
  students: Character[]
  /** LES INTERLOCUTEURS · la cliente, le boss, l'équipe, l'invité : ceux avec
   *  qui le métier s'exerce. Vide dans les salles de classe. */
  others: Character[]
}

export const DOJO_CAST: Record<DojoKit, RoomCast> = {
  // le week-end IA · une petite classe : la mage et deux élèves
  course: {
    lead: { kind: 'mage', face: '#e9d6c4', outfit: '#6d3fd6', outfit2: '#4a279c', pants: '#3b2a6b', extra: '#f2c14e' },
    action: 'teach',
    students: [
      { kind: 'duck', face: '#fde68a', outfit: '#ef4444', outfit2: '#b91c1c', pants: '#334155', extra: '#fb923c' },
      { kind: 'bear', face: '#a47551', outfit: '#0ea5e9', outfit2: '#0c4a6e', pants: '#3f3f46', extra: '#fde68a' },
    ],
    others: [],
  },
  // la formation complète · la vraie classe : le sorcier et quatre élèves
  study: {
    lead: { kind: 'wizard', face: '#c4d2d8', outfit: '#0e6ba8', outfit2: '#0a4a75', pants: '#16324f', extra: '#e8d9a0' },
    action: 'teach',
    students: [
      { kind: 'rabbit', face: '#efe6dc', outfit: '#22c55e', outfit2: '#15803d', pants: '#475569', extra: '#f9a8d4' },
      { kind: 'penguin', face: '#f4f1ea', outfit: '#f59e0b', outfit2: '#c2410c', pants: '#2b2f3a', extra: '#fb923c' },
      { kind: 'frog', face: '#8cc56a', outfit: '#db2777', outfit2: '#9d174d', pants: '#1f2937', extra: '#facc15' },
      { kind: 'chicken', face: '#fafaf9', outfit: '#8b5cf6', outfit2: '#6d28d9', pants: '#44403c', extra: '#ef4444' },
    ],
    others: [],
  },
  // growth · la savante montre ses courbes d'acquisition au boss, en costume
  saas: {
    lead: { kind: 'madscientist', face: '#ecd9c6', outfit: '#f4f4f5', outfit2: '#db2777', pants: '#334155', extra: '#a3e635' },
    action: 'present', students: [],
    others: [{ kind: 'penguin', face: '#f4f1ea', outfit: '#1f2937', outfit2: '#111827', pants: '#111827', extra: '#dc2626' }],
  },
  // communication · la chatte interviewe un invité, micro contre micro
  podcast: {
    lead: { kind: 'cat', face: '#e8d8bc', outfit: '#0ea5e9', outfit2: '#0369a1', pants: '#1e293b', extra: '#f472b6' },
    action: 'interview', students: [],
    others: [{ kind: 'bear', face: '#b98b62', outfit: '#fbbf24', outfit2: '#b45309', pants: '#374151', extra: '#f472b6' }],
  },
  // fondateur · le chevalier parle depuis l'estrade, son équipe devant lui
  pitch: {
    lead: { kind: 'knight', face: '#cbd5e1', outfit: '#8b5cf6', outfit2: '#5b21b6', pants: '#374151', extra: '#fbbf24' },
    action: 'address', students: [],
    others: [
      { kind: 'rabbit', face: '#efe6dc', outfit: '#0ea5e9', outfit2: '#0369a1', pants: '#334155', extra: '#fda4af' },
      { kind: 'frog', face: '#8cc56a', outfit: '#f59e0b', outfit2: '#b45309', pants: '#1f2937', extra: '#facc15' },
      { kind: 'panda', face: '#fafafa', outfit: '#ef4444', outfit2: '#991b1b', pants: '#27272a', extra: '#fde68a' },
      { kind: 'duck', face: '#fde68a', outfit: '#22c55e', outfit2: '#15803d', pants: '#334155', extra: '#fb923c' },
    ],
  },
  // produit · le robot assemble son produit, bloc après bloc, puis le lance
  app: {
    lead: { kind: 'robot', face: '#9ca3af', outfit: '#10b981', outfit2: '#047857', pants: '#1f2937', extra: '#f59e0b' },
    action: 'build', students: [], others: [],
  },
  // vente · le dragon présente un produit à une cliente
  sales: {
    lead: { kind: 'dragon', face: '#e0785a', outfit: '#f97316', outfit2: '#c2410c', pants: '#292524', extra: '#fde047' },
    action: 'sell', students: [],
    others: [{ kind: 'panda', face: '#fafafa', outfit: '#6366f1', outfit2: '#3730a3', pants: '#334155', extra: '#f9a8d4' }],
  },
  // designer · la caniche présente son mur d'inspiration à une cliente
  design: {
    lead: { kind: 'poodle', face: '#f1e4d8', outfit: '#f43f5e', outfit2: '#9f1239', pants: '#1f2937', extra: '#fde68a', acc: 'beret' },
    action: 'design', students: [],
    others: [{ kind: 'alien', face: '#bef264', outfit: '#0ea5e9', outfit2: '#075985', pants: '#1e293b', extra: '#f472b6' }],
  },
  // enseignant · la pieuvre fait cours au tableau, quatre élèves devant elle
  school: {
    lead: { kind: 'octopus', face: '#e7b8c8', outfit: '#eab308', outfit2: '#a16207', pants: '#1e293b', extra: '#fde68a' },
    action: 'teach',
    students: [
      { kind: 'chicken', face: '#fafaf9', outfit: '#ef4444', outfit2: '#b91c1c', pants: '#334155', extra: '#fb923c' },
      { kind: 'duck', face: '#fde68a', outfit: '#3b82f6', outfit2: '#1d4ed8', pants: '#334155', extra: '#fb923c' },
      { kind: 'frog', face: '#8cc56a', outfit: '#a855f7', outfit2: '#7e22ce', pants: '#1f2937', extra: '#facc15' },
      { kind: 'rabbit', face: '#efe6dc', outfit: '#22c55e', outfit2: '#15803d', pants: '#475569', extra: '#f9a8d4' },
    ],
    others: [],
  },
  // étudiant · le lapin révise à sa table, ses fiches se retournent
  campus: {
    lead: { kind: 'rabbit', face: '#efe6dc', outfit: '#3b82f6', outfit2: '#1d4ed8', pants: '#334155', extra: '#fde68a' },
    action: 'revise', students: [], others: [],
  },
  // scientifique · le cyborg en blouse mène son expérience, une collègue observe
  lab: {
    lead: { kind: 'cyborg', face: '#d6d3d1', outfit: '#f4f4f5', outfit2: '#6366f1', pants: '#27272a', extra: '#22d3ee' },
    action: 'experiment', students: [],
    others: [{ kind: 'jellyfish', face: '#f5d0fe', outfit: '#6366f1', outfit2: '#3730a3', pants: '#1e1b4b', extra: '#67e8f9' }],
  },
  // développeur · l'écran code, le ninja fait la revue
  code: {
    lead: { kind: 'monitor', face: '#9ca3af', outfit: '#84cc16', outfit2: '#3f6212', pants: '#1f2937', extra: '#22d3ee' },
    action: 'code', students: [],
    others: [{ kind: 'ninja', face: '#e9e4da', outfit: '#1f2937', outfit2: '#111827', pants: '#111827', extra: '#84cc16' }],
  },
  // recruteur · entretien d'embauche, le candidat en face
  hire: {
    lead: { kind: 'bibendum', face: '#fafafa', outfit: '#a855f7', outfit2: '#6b21a8', pants: '#334155', extra: '#fda4af' },
    action: 'recruit', students: [],
    others: [{ kind: 'frog', face: '#8cc56a', outfit: '#0f766e', outfit2: '#134e4a', pants: '#1f2937', extra: '#fde68a' }],
  },
  // juriste · la vampire relit un contrat avec son client, la balance entre eux
  law: {
    lead: { kind: 'vampire', face: '#e2e8f0', outfit: '#1e293b', outfit2: '#b45309', pants: '#0f172a', extra: '#7f1d1d' },
    action: 'counsel', students: [],
    others: [{ kind: 'duck', face: '#fde68a', outfit: '#0ea5e9', outfit2: '#0369a1', pants: '#334155', extra: '#fb923c' }],
  },
  // consultant · atelier au tableau de post-it, deux clients écoutent
  consult: {
    lead: { kind: 'goldorak', face: '#e5e7eb', outfit: '#d946ef', outfit2: '#86198f', pants: '#334155', extra: '#fde047' },
    action: 'workshop', students: [],
    others: [
      { kind: 'penguin', face: '#f4f1ea', outfit: '#1f2937', outfit2: '#111827', pants: '#111827', extra: '#dc2626' },
      { kind: 'bear', face: '#b98b62', outfit: '#16a34a', outfit2: '#14532d', pants: '#374151', extra: '#fde68a' },
    ],
  },
  // assistant · le fantôme organise le planning, sous l'oeil de sa manager
  ops: {
    lead: { kind: 'ghost', face: '#eef2ff', outfit: '#a855f7', outfit2: '#7e22ce', pants: '#312e81', extra: '#fda4af' },
    action: 'organize', students: [],
    others: [{ kind: 'cat', face: '#f5e6cc', outfit: '#334155', outfit2: '#1e293b', pants: '#0f172a', extra: '#f59e0b' }],
  },
}

/** LES PROMENEURS DE LA CARTE · les élèves des classes. */
export const WALKERS: Character[] = [...DOJO_CAST.study.students, ...DOJO_CAST.course.students]

/** UN MAÎTRE PAR SPÉCIALITÉ · les douze cas d'usage qui enseignent les dojos,
 *  chacun d'une espèce qu'aucun autre maître ne porte, pour qu'on reconnaisse
 *  qui enseigne avant de lire son nom. */
export const MASTER_CAST: Record<string, Character> = {
  writing: { kind: 'poodle', face: '#f1e4d8', outfit: '#e11d48', outfit2: '#9f1239', pants: '#312e81', extra: '#fbbf24', acc: 'beret' },
  analysis: { kind: 'octopus', face: '#e7b8c8', outfit: '#0ea5e9', outfit2: '#075985', pants: '#1e293b', extra: '#fde68a' },
  planning: { kind: 'ninja', face: '#e9e4da', outfit: '#7c3aed', outfit2: '#4c1d95', pants: '#1f2937', extra: '#facc15' },
  triage: { kind: 'cyborg', face: '#d6d3d1', outfit: '#f97316', outfit2: '#9a3412', pants: '#27272a', extra: '#22d3ee' },
  research: { kind: 'alien', face: '#bef264', outfit: '#6366f1', outfit2: '#3730a3', pants: '#1e1b4b', extra: '#f472b6' },
  tools: { kind: 'goldorak', face: '#e5e7eb', outfit: '#2563eb', outfit2: '#1e3a8a', pants: '#334155', extra: '#ef4444' },
  extraction: { kind: 'jellyfish', face: '#f5d0fe', outfit: '#d946ef', outfit2: '#86198f', pants: '#3b0764', extra: '#67e8f9' },
  support: { kind: 'bibendum', face: '#fafafa', outfit: '#14b8a6', outfit2: '#0f766e', pants: '#334155', extra: '#fb7185' },
  watch: { kind: 'vampire', face: '#e2e8f0', outfit: '#1e293b', outfit2: '#b91c1c', pants: '#0f172a', extra: '#7f1d1d' },
  coding: { kind: 'godzilla', face: '#86efac', outfit: '#16a34a', outfit2: '#14532d', pants: '#1f2937', extra: '#fde047' },
  orchestration: { kind: 'mushroom', face: '#fef3c7', outfit: '#dc2626', outfit2: '#7f1d1d', pants: '#44403c', extra: '#fafaf9' },
  growth: { kind: 'slime', face: '#a7f3d0', outfit: '#db2777', outfit2: '#831843', pants: '#1f2937', extra: '#fde68a' },
}

/** Le personnage qui enseigne un dojo · le casting du jeu d'abord, le visage
 *  du studio en repli pour un cas d'usage que le jeu n'enseigne pas encore. */
export const masterCharacter = (useCaseId: string): Character =>
  MASTER_CAST[useCaseId] ?? characterFor(faceIdForUseCase(useCaseId))
