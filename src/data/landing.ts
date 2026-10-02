// LA LANDING PROMO · ses textes, dans les deux langues.
//
// Demandé : « créer une landing promo qui explique de A à Z Dojoburo et qui met
// en avant la formation gratuite. Trouve la meilleure UX et flow pour cela ».
// Le parcours de la page est celui d'une décision : ce que c'est (et le
// formulaire tout de suite), comment ça marche, ce que contient le gratuit,
// ce qu'est une leçon, pourquoi on y revient (le jeu, les grades, la
// communauté), ce qui vient après, les questions, et le formulaire encore.
//
// Aucun chiffre n'est écrit ici : ils viennent des données (curriculum,
// packs, plans, trades), passés en paramètres par la page.
import { B } from './bilingual'

export const LP = {
  signIn: B('Sign in', 'Se connecter'),
  start: B('Start for free', 'Commencer gratuitement'),
  kicker: B('Free AI training', 'Formation IA gratuite'),
  h1: B('Make AI work for you. By playing.', "Faites travailler l'IA pour vous. En jouant."),
  sub: B(
    'DojoBuro teaches you to use ChatGPT, Claude, Gemini and the others on your real work: short lessons, an exercise in your own AI tool, badges and a grade that rise with you. Start with the free AI weekend.',
    "DojoBuro vous apprend à utiliser ChatGPT, Claude, Gemini et les autres sur votre vrai travail : des leçons courtes, un exercice dans votre propre outil d'IA, des badges et un grade qui progressent avec vous. Commencez par le week-end de l'IA, gratuit.",
  ),
  place: B('you@example.com', 'vous@exemple.com'),
  reassure: B('No card. The first lesson opens straight away.', "Sans carte bancaire. La première leçon s'ouvre aussitôt."),
  factLessons: B('free lessons', 'leçons gratuites'),
  lessons: B('lessons', 'leçons'),
  factMinutes: B('minutes in all', 'minutes au total'),
  factTrainings: B('trainings', 'formations'),
  factFree: B('to start', 'pour commencer'),

  howPill: B('How it works', 'Comment ça marche'),
  howH2: B('Four steps, and the first one takes an instant', "Quatre étapes, et la première ne prend qu'un instant"),
  steps: [
    { title: B('Your email, nothing else', 'Votre adresse, rien d\'autre'), body: B('It opens the seven free lessons. No card, no account to create.', 'Elle ouvre les sept leçons gratuites. Ni carte bancaire, ni compte à créer.') },
    { title: B('A lesson, an exercise', 'Une leçon, un exercice'), body: B('A few minutes of reading, then you do the thing in your own AI tool, on your own work.', "Quelques minutes de lecture, puis vous passez à la pratique dans votre propre outil d'IA, sur votre propre travail.") },
    { title: B('Badges and a grade', 'Des badges et un grade'), body: B('Each dojo you finish earns a badge and XP. Your XP gives you a belt, from white to black.', 'Chaque dojo terminé vous rapporte un badge et de l\'XP. Votre XP vous donne une ceinture, de la blanche à la noire.') },
    { title: B('Then, at your own pace', 'Puis, à votre rythme'), body: B('The full training and the trade trainings go further, whenever you want.', 'La formation complète et les formations métier vont plus loin, quand vous le souhaitez.') },
  ],

  freePill: B('Free', 'Gratuit'),
  freeH2: B('The AI weekend, lesson by lesson', "Le week-end de l'IA, leçon par leçon"),
  freeLead: B('Everything below is free. You can read the whole program before giving anything.', 'Tout ce qui suit est gratuit. Vous pouvez lire le programme entier avant de donner quoi que ce soit.'),
  min: B('min', 'min'),

  lessonPill: B('Inside a lesson', "Dans une leçon"),
  lessonH2: B('Short, but complete', 'Courte, mais complète'),
  lessonParts: [
    { title: B('The essentials', "L'essentiel"), body: B('What to remember, in a few sentences.', 'Ce qu\'il faut retenir, en quelques phrases.') },
    { title: B('Key concepts', 'Les notions clés'), body: B('Each word defined before it is used.', 'Chaque mot défini avant d\'être employé.') },
    { title: B('A case solved step by step', 'Un cas résolu pas à pas'), body: B('A real work situation, and why each step is done.', 'Une situation de travail réelle, et la raison de chaque étape.') },
    { title: B('The common mistakes', 'Les erreurs fréquentes'), body: B('The ones people really make, and how to fix them.', 'Celles qu\'on commet vraiment, et comment les corriger.') },
    { title: B('An exercise in your tool', 'Un exercice dans votre outil'), body: B('You practise in ChatGPT, Claude or Gemini, on your own work.', 'Vous pratiquez dans ChatGPT, Claude ou Gemini, sur votre propre travail.') },
    { title: B('Five questions to check', 'Cinq questions pour valider'), body: B('You answer, you see why, and you earn your badge.', 'Vous répondez, vous découvrez l\'explication, et vous gagnez votre badge.') },
  ],

  playPill: B('Learn by playing', 'Apprendre en jouant'),
  playH2: B('A grade that shows your progress', 'Un grade qui montre votre progression'),
  playLead: B('Seven belts, worn by the character you create. Your grade comes only from the dojos you finish: nothing is bought.', "Sept ceintures, portées par le personnage que vous créez. Votre grade ne vient que des dojos que vous terminez : rien ne s'achète."),
  // LES TEMPLES · l'ancien jeu du studio est effacé (« Efface l'ancien jeu »).
  gameH3: B('The temples', 'Les temples'),
  gameBody: B(
    'Each training is a pixel-art temple and each floor a lesson. Choose your character, climb floor by floor, and see who is studying with you.',
    "Chaque formation est un temple en pixel art et chaque étage une leçon. Choisissez votre personnage, montez étage par étage et voyez qui étudie avec vous.",
  ),
  gameGo: B('See the temples', 'Voir les temples'),

  clanPill: B('Community', 'Communauté'),
  clanH2: B('You do not learn alone', "On n'apprend pas seul"),
  clanBody: B(
    'A free community to share your prompts, your wins and your questions, and to learn from people who do your job. Reading is open to all; a free account is enough to post.',
    "Une communauté gratuite pour partager vos prompts, vos réussites et vos questions, et apprendre de ceux qui exercent votre métier. La lecture est ouverte à tous ; un compte gratuit suffit pour publier.",
  ),
  clanGo: B('See the community', 'Voir la communauté'),

  nextPill: B('Afterwards', 'Ensuite'),
  nextH2: B('When you want to go further', 'Quand vous voulez aller plus loin'),
  // LA GRILLE À TROIS PRIX · « 0€ gratuit, Un temple (une formation) à 49€
  // et le Pass dojo à 99€ life time ». Le gratuit est tout le reste de la page.
  unitTitle: B('One temple', 'Un temple'),
  unitBody: B('The training of your choice: the full path, your trade, Code an app or Build an app with Lovable. Paid once, yours for good.', "La formation de votre choix : la formation complète, votre métier, Coder une app ou Coder une app avec Lovable. Payée une fois, acquise pour de bon."),
  passTitle: B('The Dojo Pass', 'Le Pass Dojo'),
  passBody: B('Every training, present and future, for life. It pays for itself from the third temple.', "Toutes les formations, actuelles et futures, à vie. Rentable dès le troisième temple."),
  once: B('paid once', 'payée une fois'),
  forLife: B('paid once, for life', 'payé une fois, à vie'),
  trainings: B('trainings', 'formations'),
  seePrices: B('See the prices', 'Voir les tarifs'),

  faqH2: B('Your questions', 'Vos questions'),
  finalH2: B('Your first dojo is waiting', 'Votre premier dojo vous attend'),
  finalBody: B('Seven free lessons, a first badge in a few minutes.', 'Sept leçons gratuites, un premier badge en quelques minutes.'),
}
