// LE CHARGEMENT DES DONNÉES SCOLAIRES · les plans (un fichier par classe) et
// le contenu rédigé (un ou plusieurs fichiers par unité) sont chargés à la
// demande : des milliers de leçons ne pèsent rien sur l'ouverture de l'app.
//
// Les fichiers de contenu se nomment `content/<unité>--<partie>.ts` et
// exportent `CONTENT: UnitContent` ; les plans, `plans/<classe>.ts` (et
// `plans/ia.ts` pour l'unité transversale), exportent `PLANS: UnitPlan[]`.
import { useEffect, useState } from 'react'
import type { Grade, SchoolLesson, UnitContent, UnitPlan } from './types'
import { IA_UNIT, parseUnit } from './catalog'

export * from './types'
export * from './catalog'

const PLAN_FILES = import.meta.glob<{ PLANS: UnitPlan[] }>('./plans/*.ts')
const CONTENT_FILES = import.meta.glob<{ CONTENT: UnitContent }>('./content/*.ts')

const planPath = (grade: Grade | null) => `./plans/${grade ?? 'ia'}.ts`
const contentUnitOf = (path: string) => path.replace('./content/', '').replace(/--[a-z0-9-]+\.ts$/, '').replace(/\.ts$/, '')

/** les unités dont au moins une partie est rédigée · connu sans rien charger */
export const UNITS_WITH_CONTENT: Set<string> = new Set(Object.keys(CONTENT_FILES).map(contentUnitOf))

/** les classes dont le plan existe */
export const GRADES_WITH_PLAN: Set<string> = new Set(Object.keys(PLAN_FILES).map((p) => p.replace('./plans/', '').replace('.ts', '')))

const planCache = new Map<string, Promise<UnitPlan[]>>()
export function loadPlans(grade: Grade | null): Promise<UnitPlan[]> {
  const path = planPath(grade)
  if (!planCache.has(path)) {
    const load = PLAN_FILES[path]
    planCache.set(path, load ? load().then((m) => m.PLANS) : Promise.resolve([]))
  }
  return planCache.get(path)!
}

export async function loadUnitPlan(unit: string): Promise<UnitPlan | null> {
  const { grade } = parseUnit(unit)
  const plans = await loadPlans(unit === IA_UNIT ? null : grade)
  return plans.find((p) => p.id === unit) ?? null
}

const contentCache = new Map<string, Promise<Map<string, SchoolLesson>>>()
/** les leçons rédigées d'une unité, par identifiant de leçon */
export function loadUnitContent(unit: string): Promise<Map<string, SchoolLesson>> {
  if (!contentCache.has(unit)) {
    const parts = Object.entries(CONTENT_FILES).filter(([p]) => contentUnitOf(p) === unit)
    contentCache.set(unit, Promise.all(parts.map(([, load]) => load())).then((mods) => {
      const out = new Map<string, SchoolLesson>()
      for (const m of mods) for (const ch of m.CONTENT.chapters) for (const l of ch.lessons) out.set(l.id, l)
      return out
    }))
  }
  return contentCache.get(unit)!
}

/** un chargement asynchrone pour un écran · undefined tant qu'il n'est pas arrivé */
export function useLoad<T>(load: () => Promise<T>, deps: unknown[]): T | undefined {
  const [v, setV] = useState<T | undefined>(undefined)
  useEffect(() => {
    let live = true
    setV(undefined)
    void load().then((x) => { if (live) setV(x) })
    return () => { live = false }
  }, deps)
  return v
}
