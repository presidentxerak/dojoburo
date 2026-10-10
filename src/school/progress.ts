// LA PROGRESSION SCOLAIRE ET LA VALIDATION PAR LES PARENTS · demandé : « un
// système de validation par les parents à chaque étape, donc à chaque fin de
// leçon ».
//
// Tout est gardé dans ce navigateur, comme le reste de la progression (aucun
// compte n'est nécessaire). Le parent choisit un code à 4 chiffres dans
// l'Espace parents : seul un condensé (SHA-256 avec un sel) est conservé,
// jamais le code lui-même. Une leçon n'est validée que si le code est saisi,
// et cinq erreurs de suite bloquent la saisie une minute.
import { useSyncExternalStore } from 'react'
import { awardPart } from '../game/achievements'

const KEY = 'dojo-school-v1'

export interface LessonRec {
  /** le meilleur résultat au quiz */
  quiz?: { right: number; total: number; at: string }
  /** le jeu de la leçon réussi */
  game?: boolean
  /** l'autoévaluation de chaque exercice après la correction */
  ex?: Record<number, 'ok' | 'todo'>
  /** la validation du parent */
  validated?: { at: string }
}

export interface MockRec {
  id: string
  exam: string
  epreuve: string
  at: string
  /** sur 20 */
  score: number
  validated?: { at: string }
}

export interface SchoolState {
  v: 1
  child?: { name: string; grade: string }
  parent?: { salt: string; hash: string }
  lessons: Record<string, LessonRec>
  mocks: MockRec[]
  /** les erreurs de code récentes, pour freiner les essais au hasard */
  fails?: { n: number; until: number }
}

const EMPTY: SchoolState = { v: 1, lessons: {}, mocks: [] }

function read(): SchoolState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return EMPTY
    const s = JSON.parse(raw)
    return s && s.v === 1 ? { ...EMPTY, ...s, lessons: s.lessons ?? {}, mocks: s.mocks ?? [] } : EMPTY
  } catch { return EMPTY }
}

let cache: SchoolState = typeof window === 'undefined' ? EMPTY : read()
const subs = new Set<() => void>()
function save(next: SchoolState) {
  cache = next
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* stockage refusé · la session garde la progression */ }
  subs.forEach((f) => f())
}
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => { if (e.key === KEY) { cache = read(); subs.forEach((f) => f()) } })
}

export const getSchool = () => cache
export function useSchool(): SchoolState {
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f) }, () => cache, () => EMPTY)
}

export const lessonKey = (unit: string, lesson: string) => `${unit}/${lesson}`
const now = () => new Date().toISOString()

function patchLesson(key: string, p: Partial<LessonRec>) {
  const cur = cache.lessons[key] ?? {}
  save({ ...cache, lessons: { ...cache.lessons, [key]: { ...cur, ...p } } })
}

export function recordQuiz(key: string, right: number, total: number) {
  const cur = cache.lessons[key]?.quiz
  if (cur && cur.right >= right) return
  patchLesson(key, { quiz: { right, total, at: now() } })
}
export const recordGame = (key: string) => { if (!cache.lessons[key]?.game) patchLesson(key, { game: true }) }
export function recordExercise(key: string, n: number, v: 'ok' | 'todo') {
  patchLesson(key, { ex: { ...(cache.lessons[key]?.ex ?? {}), [n]: v } })
}

/* ---- le code parent -------------------------------------------------------- */

async function digest(salt: string, code: string): Promise<string> {
  const data = new TextEncoder().encode(`dojoburo-parent:${salt}:${code}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}
export const isCode = (code: string) => /^\d{4}$/.test(code)
export const hasParent = () => !!cache.parent

export async function setParent(code: string, child: { name: string; grade: string }) {
  if (!isCode(code)) throw new Error('code')
  const salt = [...crypto.getRandomValues(new Uint8Array(12))].map((b) => b.toString(16).padStart(2, '0')).join('')
  save({ ...cache, parent: { salt, hash: await digest(salt, code) }, child, fails: undefined })
}

export const updateChild = (child: { name: string; grade: string }) => save({ ...cache, child })

/** le temps d'attente restant après trop d'erreurs, en secondes */
export const lockedFor = () => Math.max(0, Math.ceil(((cache.fails?.until ?? 0) - Date.now()) / 1000))

/** vrai si le code est celui du parent · cinq erreurs bloquent une minute */
export async function checkCode(code: string): Promise<boolean> {
  if (!cache.parent || !isCode(code) || lockedFor() > 0) return false
  const ok = (await digest(cache.parent.salt, code)) === cache.parent.hash
  if (ok) { if (cache.fails) save({ ...cache, fails: undefined }); return true }
  const n = (cache.fails?.n ?? 0) + 1
  save({ ...cache, fails: { n: n >= 5 ? 0 : n, until: n >= 5 ? Date.now() + 60_000 : 0 } })
  return false
}

/** la leçon est validée par un parent · elle rapporte ses points une fois */
export async function validateLesson(key: string, code: string): Promise<boolean> {
  if (!(await checkCode(code))) return false
  patchLesson(key, { validated: { at: now() } })
  awardPart(`ecole/${key}`)
  return true
}

/* ---- les épreuves blanches --------------------------------------------------- */

export function addMock(m: Omit<MockRec, 'id' | 'at'>): string {
  const id = `${m.exam}-${m.epreuve}-${Date.now().toString(36)}`
  save({ ...cache, mocks: [{ ...m, id, at: now() }, ...cache.mocks].slice(0, 60) })
  return id
}
export async function validateMock(id: string, code: string): Promise<boolean> {
  if (!(await checkCode(code))) return false
  save({ ...cache, mocks: cache.mocks.map((m) => (m.id === id ? { ...m, validated: { at: now() } } : m)) })
  return true
}

/** remettre à zéro, avec le code du parent */
export async function resetSchool(code: string): Promise<boolean> {
  if (!(await checkCode(code))) return false
  save({ ...EMPTY })
  return true
}

/* ---- ce qu'une leçon demande pour être validée ------------------------------- */

export const PASS_RATE = 0.6
export interface LessonStatus { quizOk: boolean; gameOk: boolean; exOk: boolean; ready: boolean; validated: boolean }
export function lessonStatus(rec: LessonRec | undefined, exercises: number): LessonStatus {
  const quizOk = !!rec?.quiz && rec.quiz.right >= Math.ceil(rec.quiz.total * PASS_RATE)
  const gameOk = !!rec?.game
  const exOk = Object.keys(rec?.ex ?? {}).length >= exercises
  return { quizOk, gameOk, exOk, ready: quizOk && gameOk && exOk, validated: !!rec?.validated }
}
