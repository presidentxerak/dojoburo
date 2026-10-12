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
    id: 'school-college',
    date: '2026-10-12',
    title: B('Collège: 6e, 5e and 4e, every subject', 'Le collège : la 6e, la 5e et la 4e, toutes les matières'),
    body: B('Every subject of 6e, 5e and 4e now has its lessons (course, exercises, game, quiz), with an end-of-year check for each class. The temples map now runs from 6e to Terminale, one band per year.', 'Toutes les matières de la 6e, de la 5e et de la 4e ont leurs leçons (cours, exercices, jeu, quiz), avec un contrôle de fin d\'année pour chaque classe. La carte des temples va maintenant de la 6e à la Terminale, une bande par année.'),
    href: '/ecole/carte',
  },
  {
    id: 'school-2nde-1re',
    date: '2026-10-11',
    title: B('Seconde and Première, every subject', 'La Seconde et la Première, toutes les matières'),
    body: B('Every subject of Seconde and Première now has its lessons, from 3e to Terminale the whole road is written, and the Première anticipated maths paper has its version without the maths speciality.', 'Toutes les matières de la Seconde et de la Première ont leurs leçons : de la 3e à la Terminale, tout le chemin est rédigé, et l\'épreuve anticipée de maths a sa version sans la spécialité.'),
    href: '/ecole/carte',
  },
  {
    id: 'school-map',
    date: '2026-10-11',
    title: B('The school temples map', 'La carte des temples de l\'école'),
    body: B('In the Dojoburo tab, a second map: from 3e to Terminale, one band per year, a temple per subject and the exam at the end of the road (brevet, bac, end-of-year check). Mock brevet and bac, points at every success, and the Seconde lessons arriving.', 'Dans l\'onglet Dojoburo, une seconde carte : de la 3e à la Terminale, une bande par année, un temple par matière et l\'examen au bout du chemin (brevet, bac, contrôle de fin). Brevet blanc et bac blanc, des points à chaque réussite, et les leçons de Seconde qui arrivent.'),
    href: '/ecole/carte',
  },
  {
    id: 'school',
    date: '2026-10-10',
    title: B('School, from 6e to Terminale', 'L\'école, de la 6e à la Terminale'),
    body: B('A new School tab in Formations, in French: the curriculum plan of every class, complete lessons (course, exercises, game, quiz) for 3e, Terminale and Première French and maths, parent validation with a code, brevet and bac mock exams, and a unit on learning with AI. Free during the beta.', 'Un nouvel onglet École dans Formations : le plan du programme de chaque classe, des leçons complètes (cours, exercices, jeu, quiz) pour la 3e, la Terminale, le français et les maths de Première, la validation par un parent avec un code, des épreuves blanches du brevet et du bac, et une unité pour apprendre avec l\'IA. Gratuit pendant la bêta.'),
    href: '/ecole',
  },
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
