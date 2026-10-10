// LE CATALOGUE SCOLAIRE · les classes, les matières de chacune, et ce qui les
// relie aux examens. Voir types.ts. Les matières sont celles de la voie
// générale ; au lycée, les spécialités sont marquées comme telles.
import type { IconName } from '../icons'
import type { Grade } from './types'

export interface GradeInfo {
  id: Grade
  label: string
  /** collège ou lycée, et le cycle officiel */
  stage: 'college' | 'lycee'
  cycle: string
  /** l'examen qui conclut l'année, s'il y en a un */
  exam?: 'brevet' | 'bac' | 'bac-anticipe'
}

export const GRADES: GradeInfo[] = [
  { id: '6e', label: '6e', stage: 'college', cycle: 'Cycle 3' },
  { id: '5e', label: '5e', stage: 'college', cycle: 'Cycle 4' },
  { id: '4e', label: '4e', stage: 'college', cycle: 'Cycle 4' },
  { id: '3e', label: '3e', stage: 'college', cycle: 'Cycle 4', exam: 'brevet' },
  { id: '2nde', label: 'Seconde', stage: 'lycee', cycle: 'Seconde générale' },
  { id: '1re', label: 'Première', stage: 'lycee', cycle: 'Première générale', exam: 'bac-anticipe' },
  { id: 'tle', label: 'Terminale', stage: 'lycee', cycle: 'Terminale générale', exam: 'bac' },
]

export interface SubjectInfo {
  id: string
  name: string
  glyph: IconName
  tint: string
  /** au lycée : un enseignement de spécialité */
  speciality?: boolean
}

export const SUBJECTS: Record<string, SubjectInfo> = {
  francais: { id: 'francais', name: 'Français', glyph: 'pen', tint: '#e11d48' },
  maths: { id: 'maths', name: 'Mathématiques', glyph: 'triangle', tint: '#2563eb' },
  'hg-emc': { id: 'hg-emc', name: 'Histoire-géographie et EMC', glyph: 'ring', tint: '#b45309' },
  hg: { id: 'hg', name: 'Histoire-géographie', glyph: 'ring', tint: '#b45309' },
  emc: { id: 'emc', name: 'Enseignement moral et civique', glyph: 'clan', tint: '#0f766e' },
  'sciences-techno': { id: 'sciences-techno', name: 'Sciences et technologie', glyph: 'gear', tint: '#16a34a' },
  'physique-chimie': { id: 'physique-chimie', name: 'Physique-chimie', glyph: 'hex', tint: '#7c3aed' },
  svt: { id: 'svt', name: 'Sciences de la vie et de la Terre', glyph: 'peak', tint: '#15803d' },
  technologie: { id: 'technologie', name: 'Technologie', glyph: 'gear', tint: '#475569' },
  anglais: { id: 'anglais', name: 'Anglais', glyph: 'envelope', tint: '#dc2626' },
  espagnol: { id: 'espagnol', name: 'Espagnol', glyph: 'lozenge', tint: '#ea580c' },
  ses: { id: 'ses', name: 'Sciences économiques et sociales', glyph: 'bars', tint: '#0891b2' },
  snt: { id: 'snt', name: 'Sciences numériques et technologie', glyph: 'grid', tint: '#4f46e5' },
  nsi: { id: 'nsi', name: 'Numérique et sciences informatiques', glyph: 'grid', tint: '#4338ca', speciality: true },
  hggsp: { id: 'hggsp', name: 'Histoire-géographie, géopolitique et sciences politiques', glyph: 'target', tint: '#9a3412', speciality: true },
  'ens-sci': { id: 'ens-sci', name: 'Enseignement scientifique', glyph: 'centre', tint: '#0d9488' },
  philosophie: { id: 'philosophie', name: 'Philosophie', glyph: 'diamond', tint: '#6d28d9' },
  'grand-oral': { id: 'grand-oral', name: 'Grand oral', glyph: 'smile', tint: '#be185d' },
  'ia-ecole': { id: 'ia-ecole', name: 'Apprendre avec l\'IA', glyph: 'training', tint: '#7c3aed' },
}

/** les matières de chaque classe, dans l'ordre d'affichage */
export const GRADE_SUBJECTS: Record<Grade, string[]> = {
  '6e': ['francais', 'maths', 'hg-emc', 'sciences-techno', 'anglais'],
  '5e': ['francais', 'maths', 'hg-emc', 'physique-chimie', 'svt', 'technologie', 'anglais', 'espagnol'],
  '4e': ['francais', 'maths', 'hg-emc', 'physique-chimie', 'svt', 'technologie', 'anglais', 'espagnol'],
  '3e': ['francais', 'maths', 'hg-emc', 'physique-chimie', 'svt', 'technologie', 'anglais', 'espagnol'],
  '2nde': ['francais', 'maths', 'hg', 'emc', 'ses', 'physique-chimie', 'svt', 'snt', 'anglais', 'espagnol'],
  '1re': ['francais', 'maths', 'physique-chimie', 'svt', 'ses', 'hggsp', 'nsi', 'ens-sci', 'hg', 'emc', 'anglais'],
  tle: ['philosophie', 'maths', 'physique-chimie', 'svt', 'ses', 'hggsp', 'nsi', 'ens-sci', 'hg', 'emc', 'anglais', 'grand-oral'],
}

/** au lycée, les matières de spécialité (1re et Terminale) */
export const SPECIALITIES = ['maths', 'physique-chimie', 'svt', 'ses', 'hggsp', 'nsi']

/** l'identifiant d'une unité · « maths-3e » */
export const unitId = (subject: string, grade: Grade) => `${subject}-${grade}`

/** l'unité transversale « Apprendre avec l'IA », ouverte à toutes les classes */
export const IA_UNIT = 'ia-ecole'

export const gradeInfo = (g: string) => GRADES.find((x) => x.id === g) ?? null

/** retrouver la classe et la matière d'une unité */
export function parseUnit(id: string): { subject: string; grade: Grade | null } {
  if (id === IA_UNIT) return { subject: IA_UNIT, grade: null }
  const g = GRADES.map((x) => x.id).find((x) => id.endsWith(`-${x}`)) ?? null
  return { subject: g ? id.slice(0, -(g.length + 1)) : id, grade: g }
}

export const subjectLabel = (subject: string, grade: Grade | null) => {
  const s = SUBJECTS[subject]
  if (!s) return subject
  return grade && s.speciality && (grade === '1re' || grade === 'tle') ? `${s.name} (spécialité)` : s.name
}

/** toutes les unités du catalogue */
export const ALL_UNITS: string[] = [
  ...GRADES.flatMap((g) => GRADE_SUBJECTS[g.id].map((s) => unitId(s, g.id))),
  IA_UNIT,
]
