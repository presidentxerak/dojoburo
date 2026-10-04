// LES ÉDITIONS DES NOUVEAUTÉS IA · voir types.ts. Une nouvelle édition chaque
// lundi : un fichier AAAA-MM-JJ.ts (le lundi de la semaine couverte), importé
// et ajouté à WEEKS ci-dessous. La plus récente s'affiche en premier.
import type { NewsItem, NewsWeek } from './types'
import { N_2026_09_28 } from './2026-09-28'

export type { NewsItem, NewsWeek }

export const WEEKS: NewsWeek[] = [N_2026_09_28].sort((a, b) => b.week.localeCompare(a.week))

export const LATEST_WEEK: NewsWeek | null = WEEKS[0] ?? null

/** toutes les nouvelles, de la plus récente édition à la plus ancienne */
export const ALL_NEWS: NewsItem[] = WEEKS.flatMap((w) => w.items)

/** le dimanche qui ferme la semaine d'une édition */
export function weekEnd(week: string): string {
  const d = new Date(`${week}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + 6)
  return d.toISOString().slice(0, 10)
}
