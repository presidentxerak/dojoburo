// DOJOBOT · son visage et ce qu'il sait de neuf. Demandé : « créé l'avatar du
// Dojo bot ajoute un peu de fun dans l'UI et mets le à jour en fonction des
// nouvelles mises à jour de l'app et des formations automatiquement ».
//
// LE VISAGE · un petit robot pixel, de la même famille que les maîtres et les
// personnages des élèves (pixel/chibi), aux couleurs de la marque.
//
// CE QUI EST NEUF · rien n'est écrit ici à la main : le journal des mises à jour
// (data/updates), les dernières formations (data/packs) et la dernière édition
// des nouveautés IA (data/news, mise à jour chaque lundi). Quand l'une change,
// Dojobot le dit au déploiement suivant.
import type { ChibiSpec } from '../pixel/chibi'
import { say, type Bi } from '../data/bilingual'
import { APP_UPDATES } from '../data/updates'
import { LATEST_WEEK } from '../data/news'
import { PACKS } from '../data/packs'

export const DOJOBOT: ChibiSpec = {
  species: 'robot', variant: 'screen', skin: '#c4b5fd', hair: 'none', hairColor: '#2b1d16',
  eyes: 'happy', mouth: 'smile', outfit: 'hoodie', outfitColor: '#7c3aed', accent: '#f5c542',
  pants: '#1e1b4b', accessory: 'headphones', facial: 'none', pride: 'none',
}

type Lang = 'en' | 'fr'

/** la dernière mise à jour · ce que la pastille du bouton signale */
export const LATEST_UPDATE = APP_UPDATES[0] ?? null

/** les dernières formations publiées · les plus récentes en fin de liste */
const NEWEST_COURSES = PACKS.filter((p) => p.door === 'course').slice(-3).reverse()

const L = {
  hi: { en: 'New this week', fr: 'Nouveau cette semaine' },
  app: { en: 'In the app', fr: 'Dans l\'app' },
  courses: { en: 'Latest courses', fr: 'Dernières formations' },
  news: { en: 'This week in AI', fr: 'Cette semaine dans l\'IA' },
  more: { en: 'and more on the AI news page.', fr: 'et la suite sur la page Nouveautés.' },
} satisfies Record<string, Bi>

/** une ligne pour la première phrase de Dojobot */
export function whatsNewLine(lang: Lang): string {
  if (!LATEST_UPDATE) return ''
  return `${say(L.hi, lang)} : ${say(LATEST_UPDATE.title, lang)}.`
}

/** la réponse complète de la rubrique « Quoi de neuf » */
export function whatsNewAnswer(lang: Lang): string {
  const s = (b: Bi) => say(b, lang)
  const parts: string[] = []
  if (APP_UPDATES.length) {
    parts.push(`${s(L.app)} :\n${APP_UPDATES.slice(0, 3).map((u) => `· ${s(u.title)}. ${s(u.body)}`).join('\n')}`)
  }
  if (NEWEST_COURSES.length) {
    parts.push(`${s(L.courses)} :\n${NEWEST_COURSES.map((p) => `· ${s(p.title)}`).join('\n')}`)
  }
  if (LATEST_WEEK?.items.length) {
    parts.push(`${s(L.news)} :\n${LATEST_WEEK.items.slice(0, 3).map((n) => `· ${n.title} (${n.source || 'YouTube'})`).join('\n')}\n${s(L.more)}`)
  }
  return parts.join('\n\n')
}
