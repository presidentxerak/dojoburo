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

/** CE QUE FAIT LE PERSONNAGE PRINCIPAL D'UNE SALLE · une action par salle.
 *
 *  Demandé : « ils font tous la même action, diversifie ». Tous tapaient sur
 *  un clavier derrière un bureau. Chaque salle a maintenant son geste, choisi
 *  pour dire le métier : le fondateur fait les cent pas en répétant son pitch,
 *  la communicante parle au micro, le chef de produit fête une mise en ligne,
 *  la growth fait le tour de ses tableaux, le commercial marche au téléphone,
 *  l'assistante tape au clavier. Les deux salles de classe ont un maître qui
 *  enseigne, face à ses élèves. */
export type RoomAction = 'teach' | 'pace' | 'broadcast' | 'celebrate' | 'tour' | 'call' | 'type'

export interface RoomCast {
  /** le maître d'une classe, ou le seul spécialiste d'un métier */
  lead: Character
  action: RoomAction
  /** LES ÉLÈVES · seulement dans les salles de classe. Demandé : « dans la
   *  formation complète un maître et plusieurs élèves, pour chaque dojo de
   *  spécialité juste un seul spécialiste ». */
  students: Character[]
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
  },
  // growth · la savante fait le tour de ses tableaux
  saas: {
    lead: { kind: 'madscientist', face: '#ecd9c6', outfit: '#f4f4f5', outfit2: '#db2777', pants: '#334155', extra: '#a3e635' },
    action: 'tour', students: [],
  },
  // communication · la chatte parle au micro
  podcast: {
    lead: { kind: 'cat', face: '#e8d8bc', outfit: '#0ea5e9', outfit2: '#0369a1', pants: '#1e293b', extra: '#f472b6' },
    action: 'broadcast', students: [],
  },
  // fondateur · le chevalier fait les cent pas en répétant son pitch
  pitch: {
    lead: { kind: 'knight', face: '#cbd5e1', outfit: '#8b5cf6', outfit2: '#5b21b6', pants: '#374151', extra: '#fbbf24' },
    action: 'pace', students: [],
  },
  // produit · le robot fête la mise en ligne
  app: {
    lead: { kind: 'robot', face: '#9ca3af', outfit: '#10b981', outfit2: '#047857', pants: '#1f2937', extra: '#f59e0b' },
    action: 'celebrate', students: [],
  },
  // vente · le dragon marche au téléphone
  sales: {
    lead: { kind: 'dragon', face: '#e0785a', outfit: '#f97316', outfit2: '#c2410c', pants: '#292524', extra: '#fde047' },
    action: 'call', students: [],
  },
  // assistant · le fantôme tape à son bureau
  ops: {
    lead: { kind: 'ghost', face: '#eef2ff', outfit: '#a855f7', outfit2: '#7e22ce', pants: '#312e81', extra: '#fda4af' },
    action: 'type', students: [],
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
