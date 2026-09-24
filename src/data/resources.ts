// L'ESPACE RESSOURCES · ce qu'un élève peut emporter de chaque cours.
//
// LA DÉCISION QUI TIENT TOUT LE RESTE : ces documents sont GÉNÉRÉS, jamais
// stockés.
//
// La façon évidente de faire un espace ressources est de téléverser des PDF
// dans un seau et de servir des liens. Ça marche le premier jour et ça pourrit
// ensuite, pour une raison qu'on ne voit venir que trop tard : le jour où une
// leçon est corrigée, le PDF garde l'ancienne version, personne ne le sait, et
// l'élève travaille sur un document faux que NOUS lui avons donné. C'est la
// même divergence que deux prix pour un produit, sauf qu'elle se produit hors
// de l'écran, là où aucune garde ne regarde.
//
// Un document généré depuis les mêmes données que la page ne peut pas
// diverger : il n'existe qu'au moment où on le demande. Ça retire aussi le
// stockage, le téléversement, les URL signées et la question de savoir qui a le
// droit de lire quoi · quatre problèmes qui n'apparaissent jamais.
//
// ET ÇA NE COÛTE RIEN À SERVIR, ce qui compte plus qu'il n'y paraît : la
// grille de prix repose sur le fait que le coût marginal d'un élève est proche
// de zéro (voir data/plans). Un espace ressources bâti sur du stockage et de la
// bande passante aurait été le premier vrai coût par utilisateur de ce produit,
// et il aurait fallu le dire dans les tarifs.
//
// CE QUE CE FICHIER EST : une CORRESPONDANCE. Les cinq cours ont cinq formes
// de données différentes, et le générateur de PDF n'a pas à les connaître.
// Chaque cours se convertit ici en la même structure neutre de titres et de
// blocs. C'est la même idée que la page des frameworks : on enseigne la
// correspondance, parce qu'elle survit aux changements de chaque côté.
import { DESIGN_COURSES, type Bi } from './designCourses'
import { TRACKS } from './academy'
import { LEVERS } from './frugality'
import { USE_CASES } from './agentUseCases'
import { PILLAR_BY_ID } from './positioning'
import type { Lang } from '../i18n/lang'

/** Un bloc de document · volontairement pauvre. Un format riche invite à
 *  mettre en page, et une mise en page dans un fichier de données est une
 *  seconde feuille de style qui divergera de la première. */
export type ResBlock =
  | { kind: 'h'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'kv'; k: string; v: string }
  | { kind: 'li'; text: string }

export interface ResourceDoc {
  /** le cours dont il vient · c'est un pilier, donc il a déjà un nom */
  courseId: 'build' | 'academy' | 'eco' | 'design' | 'figma'
  /** le nom du fichier, sans extension */
  file: string
  /** ce que le document contient, en une ligne */
  about: Bi
  /** le contenu, construit à la demande dans la langue lue */
  build: (lang: Lang) => ResBlock[]
}

const pickBi = (v: Bi, lang: Lang) => (lang === 'fr' ? v.fr : v.en)
const bi = (en: string, fr: string): Bi => ({ en, fr })

/* ------------------------------------------------------------------ */

/** LES DEUX COURS DE DESIGN · ils ont déjà la bonne forme, parce qu'ils ont
 *  été écrits après cette idée. Tout y passe : les mots définis, les gestes,
 *  le piège et le test. Un mémo qui ne garderait que les titres serait une
 *  table des matières, ce dont personne n'a besoin hors ligne. */
const designDoc = (id: 'design' | 'figma'): ResourceDoc => {
  const course = DESIGN_COURSES.find((c) => c.id === id)!
  return {
    courseId: id,
    file: `dojoburo-${id}`,
    about: bi(
      `Every lesson of the ${course.title.en} course: the words, the moves, the trap and the test.`,
      `Chaque leçon du cours ${course.title.fr} : le vocabulaire, les gestes, le piège à éviter et le test.`,
    ),
    build: (lang) => {
      const out: ResBlock[] = [{ kind: 'p', text: pickBi(course.promise, lang) }]
      course.lessons.forEach((l, i) => {
        out.push({ kind: 'h', text: `${String(i + 1).padStart(2, '0')} · ${pickBi(l.title, lang)}` })
        out.push({ kind: 'p', text: pickBi(l.plain, lang) })
        for (const w of l.words) out.push({ kind: 'kv', k: pickBi(w.term, lang), v: pickBi(w.means, lang) })
        for (const s of l.steps) out.push({ kind: 'li', text: pickBi(s, lang) })
        out.push({ kind: 'kv', k: lang === 'fr' ? 'Le piège à éviter' : 'The trap', v: pickBi(l.trap, lang) })
        out.push({ kind: 'kv', k: lang === 'fr' ? 'Le test' : 'The test', v: pickBi(l.check, lang) })
      })
      return out
    },
  }
}

/* ------------------------------------------------------------------ */

export const RESOURCES: ResourceDoc[] = [
  // BUILD · les douze formes d'agent, avec ce qui est dur dans chacune. C'est
  // la partie qu'on veut relire avant de choisir, et la seule qui serve
  // vraiment loin d'un écran.
  {
    courseId: 'build',
    file: 'dojoburo-agents',
    about: bi(
      'The twelve shapes of agent, what each one is for, and what is hard about it.',
      "Les douze types d'agent, la fonction de chacun et ses principales difficultés.",
    ),
    build: (lang) => {
      const out: ResBlock[] = []
      for (const u of USE_CASES) {
        out.push({ kind: 'h', text: u.name })
        out.push({ kind: 'p', text: u.does })
        out.push({ kind: 'kv', k: lang === 'fr' ? 'La difficulté' : 'What is hard', v: u.hard })
        u.steps.forEach((s, i) => out.push({ kind: 'li', text: `${i + 1}. ${s.title} · ${s.makes}` }))
      }
      return out
    },
  },
  // ACADEMY · vingt leçons ne tiennent pas dans un mémo, et les recopier
  // entièrement rendrait un document que personne ne lit. On garde LA LIGNE À
  // RETENIR de chacune, qui est précisément ce que la leçon a distillé.
  {
    courseId: 'academy',
    file: 'dojoburo-prompt-engineering',
    about: bi(
      'The one line to remember from each of the lessons, in the order they are taken.',
      "La phrase à retenir de chaque leçon, dans l'ordre du parcours.",
    ),
    build: () => {
      const out: ResBlock[] = []
      for (const t of TRACKS) {
        out.push({ kind: 'h', text: t.label })
        for (const l of t.lessons) out.push({ kind: 'kv', k: l.title, v: l.takeaway })
      }
      return out
    },
  },
  // ECO · les leviers, avec leur contre-indication. Le « quand ne pas le
  // faire » voyage AVEC le levier, sinon le mémo devient une liste d'ordres et
  // quelqu'un coupe ce qui tenait le reste debout.
  {
    courseId: 'eco',
    file: 'dojoburo-token-frugality',
    about: bi(
      'Every lever, what it does, why it works, and when not to use it.',
      "Chaque levier : son effet, la raison de son efficacité et les cas où il ne faut pas l'employer.",
    ),
    build: (lang) => {
      const out: ResBlock[] = []
      for (const l of LEVERS) {
        out.push({ kind: 'h', text: l.title })
        out.push({ kind: 'p', text: l.how })
        out.push({ kind: 'kv', k: lang === 'fr' ? 'Pourquoi' : 'Why', v: l.why })
        out.push({ kind: 'kv', k: lang === 'fr' ? 'Quand ne pas le faire' : 'When not to', v: l.not })
      }
      return out
    },
  },
  designDoc('design'),
  designDoc('figma'),
]

export const RESOURCE_BY_COURSE = Object.fromEntries(
  RESOURCES.map((r) => [r.courseId, r]),
) as Record<ResourceDoc['courseId'], ResourceDoc>

/** Le titre du document · celui du cours, jamais réinventé. Un mémo qui porte
 *  un autre nom que son cours est un document de plus à retrouver. */
export const resourceTitle = (r: ResourceDoc, lang: Lang): string => {
  const p = PILLAR_BY_ID[r.courseId]
  return (lang === 'fr' && p?.fr?.nav) || p?.nav || r.file
}

/** Combien de documents l'espace contient · dérivé, pour que le chiffre
 *  affiché soit le vrai. */
export const RESOURCE_COUNT = RESOURCES.length
