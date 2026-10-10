// LES PROFESSEURS · comme chaque formation IA a son maître, chaque matière a
// son professeur, un personnage pixel qui accueille l'élève dans la leçon.
import type { ChibiSpec } from '../pixel/chibi'

const base: Omit<ChibiSpec, 'species' | 'variant'> = {
  skin: '#f6c9a3', hair: 'short', hairColor: '#2b1d16', eyes: 'happy', mouth: 'smile', outfit: 'suit',
  outfitColor: '#7c3aed', accent: '#1e1b4b', pants: '#1e1b4b', accessory: 'none', facial: 'none', pride: 'none',
}
const human = (p: Partial<ChibiSpec>): ChibiSpec => ({ ...base, species: 'human', variant: 'human', ...p })

export interface Teacher { name: string; spec: ChibiSpec }

export const TEACHERS: Record<string, Teacher> = {
  francais: { name: 'Mme Lettrine', spec: human({ hair: 'bun', hairColor: '#5a3a22', outfit: 'dress', outfitColor: '#e11d48', accessory: 'glasses' }) },
  maths: { name: 'M. Pythagore', spec: human({ hair: 'buzz', facial: 'beard', hairColor: '#e9e4da', outfit: 'suit', outfitColor: '#2563eb', accessory: 'glasses' }) },
  'hg-emc': { name: 'Mme Chronos', spec: human({ skin: '#c98a5e', hair: 'curly', hairColor: '#2b1d16', outfit: 'suit', outfitColor: '#b45309' }) },
  hg: { name: 'Mme Chronos', spec: human({ skin: '#c98a5e', hair: 'curly', hairColor: '#2b1d16', outfit: 'suit', outfitColor: '#b45309' }) },
  emc: { name: 'M. Civis', spec: human({ skin: '#9b6440', hair: 'short', outfit: 'suit', outfitColor: '#0f766e' }) },
  'sciences-techno': { name: 'Mme Atome', spec: human({ hair: 'ponytail', hairColor: '#b0703a', outfit: 'labcoat', outfitColor: '#f5f5f4', accessory: 'goggles' }) },
  'physique-chimie': { name: 'Mme Atome', spec: human({ hair: 'ponytail', hairColor: '#b0703a', outfit: 'labcoat', outfitColor: '#f5f5f4', accessory: 'goggles' }) },
  svt: { name: 'M. Sève', spec: { ...base, species: 'animal', variant: 'frog', outfit: 'labcoat', outfitColor: '#f5f5f4', accent: '#15803d', accessory: 'glasses' } },
  technologie: { name: 'M. Rouage', spec: { ...base, species: 'robot', variant: 'visor', skin: '#94a3b8', outfit: 'overalls', outfitColor: '#475569', accessory: 'goggles' } },
  anglais: { name: 'Ms Bridge', spec: human({ skin: '#ffe0c8', hair: 'bob', hairColor: '#f2c94c', outfit: 'tee', outfitColor: '#dc2626', accessory: 'beret' }) },
  espagnol: { name: 'Sra. Sol', spec: human({ skin: '#e7ad82', hair: 'long', hairColor: '#2b1d16', outfit: 'dress', outfitColor: '#ea580c', accessory: 'flower' }) },
  ses: { name: 'M. Marché', spec: human({ skin: '#6b4128', hair: 'short', outfit: 'suit', outfitColor: '#0891b2', accessory: 'glasses' }) },
  snt: { name: 'Mme Octet', spec: human({ hair: 'spiky', hairColor: '#4aa8ff', outfit: 'hoodie', outfitColor: '#4f46e5', accessory: 'headphones' }) },
  nsi: { name: 'Mme Octet', spec: human({ hair: 'spiky', hairColor: '#4aa8ff', outfit: 'hoodie', outfitColor: '#4338ca', accessory: 'headphones' }) },
  hggsp: { name: 'M. Atlas', spec: human({ skin: '#c98a5e', hair: 'short', facial: 'mustache', outfit: 'suit', outfitColor: '#9a3412' }) },
  'ens-sci': { name: 'Mme Orbite', spec: { ...base, species: 'alien', variant: 'bigeyes', skin: '#6fd6e8', outfit: 'labcoat', outfitColor: '#f5f5f4' } },
  philosophie: { name: 'M. Socrate', spec: human({ hair: 'none', facial: 'beard', hairColor: '#e9e4da', outfit: 'kimono', outfitColor: '#6d28d9' }) },
  'grand-oral': { name: 'Mme Voix', spec: human({ skin: '#9b6440', hair: 'long', hairColor: '#2b1d16', outfit: 'suit', outfitColor: '#be185d', accessory: 'headphones' }) },
  'ia-ecole': { name: 'Dojobot', spec: { ...base, species: 'robot', variant: 'screen', skin: '#c4b5fd', hair: 'none', outfit: 'hoodie', outfitColor: '#7c3aed', accent: '#f5c542', accessory: 'headphones' } },
}

export const teacherOf = (subject: string): Teacher => TEACHERS[subject] ?? TEACHERS.maths
