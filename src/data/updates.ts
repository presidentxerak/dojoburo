// LE JOURNAL DES MISES À JOUR · demandé : « mets [Dojobot] à jour en fonction des
// nouvelles mises à jour de l'app et des formations automatiquement ».
//
// Dojobot lit ce journal, la liste des formations (data/packs) et la dernière
// édition des nouveautés (data/news) : sa rubrique « Quoi de neuf » et sa
// première phrase suivent l'app sans être réécrites. Chaque fusion qui change
// ce qu'un élève voit ajoute une ligne EN TÊTE (voir CLAUDE.md).
import { B, type Bi } from './bilingual'

export interface AppUpdate {
  /** identifiant stable (minuscules et tirets) */
  id: string
  /** AAAA-MM-JJ */
  date: string
  title: Bi
  body: Bi
  /** la page où voir la nouveauté */
  href?: string
}

export const APP_UPDATES: AppUpdate[] = [
  {
    id: 'dojobot-v2',
    date: '2026-10-05',
    title: B('Dojobot gets a face', 'Dojobot a maintenant un visage'),
    body: B('A new look for the assistant, and a "What\'s new" section that follows the app and the courses on its own.', 'Un nouveau look pour l\'assistant, et une rubrique « Quoi de neuf » qui suit d\'elle-même l\'app et les formations.'),
  },
  {
    id: 'ai-news',
    date: '2026-10-04',
    title: B('AI news, every Monday', 'Les nouveautés IA, chaque lundi'),
    body: B('A new button in the bottom bar: the week\'s AI news summed up in a few lines, with a link to each source.', 'Un nouveau bouton dans la barre du bas : les nouveautés IA de la semaine résumées en quelques lignes, avec le lien vers chaque source.'),
    href: '/nouveautes',
  },
  {
    id: 'themed-courses',
    date: '2026-10-04',
    title: B('Twelve new courses, from A to Z', 'Douze nouvelles formations, de A à Z'),
    body: B('Write a book, storyboard, comics and manga, UX flows, software architecture, bookkeeping, AI images, logo and brand guidelines, a Figma design system, local AI, business and copywriting.', 'Écrire un livre, le storyboard, la BD et le manga, les flows UX, l\'architecture logicielle, la comptabilité, les images IA, le logo et la charte, le design system Figma, l\'IA locale, le business et le copywriting.'),
    href: '/formations',
  },
  {
    id: 'lesson-videos',
    date: '2026-10-03',
    title: B('Videos in every lesson', 'Des vidéos dans chaque cours'),
    body: B('Each lesson ends with YouTube videos on its subject, loaded only when you click, with the author credited.', 'Chaque cours se termine par des vidéos YouTube sur son sujet, chargées seulement au clic, avec l\'auteur crédité.'),
  },
  {
    id: 'quest-squares',
    date: '2026-10-03',
    title: B('A badge you earn', 'Un badge qui se mérite'),
    body: B('The squares of the quest turn green only when an exercise is done, and the badge needs the quiz answered and passed.', 'Les carrés de la quête ne passent au vert qu\'une fois l\'exercice achevé, et le badge demande un quiz répondu et réussi.'),
  },
]
