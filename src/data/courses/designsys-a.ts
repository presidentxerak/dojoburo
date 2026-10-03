// LE COURS « Design system de A à Z pour Figma », PARTIE A · voir ./types et ./index.
//
// UN FIL ROUGE POUR LES DEUX MODULES · « Cadenza », une petite entreprise
// fictive qui édite une application de planning pour les écoles de musique :
// un back-office web pour les secrétariats, une app mobile pour les élèves et
// leurs parents, un site vitrine. Quatre ans de produit, trois designers
// successifs, aucun système. Inès, product designer, en construit le design
// system avec Malik, développeur front-end, et Sophie, cofondatrice chargée
// du produit. La partie A pose les fondations (pourquoi, inventaire, principes
// et nommage, organisation des fichiers) puis les tokens (primitives et
// sémantiques, variables et modes, échelles, export vers le code). La partie B
// reprend le système pour les composants, la documentation et la gouvernance.
//
// CE QUE LE COURS AFFIRME DES OUTILS, ET CE QU'IL S'INTERDIT. Il s'en tient
// aux principes stables : les variables Figma ont des collections, des modes
// et des alias ; une bibliothèque se publie fichier par fichier ; Tokens
// Studio et Style Dictionary transforment des tokens en code ; le format du
// W3C Design Tokens Community Group décrit un token par $value et $type ; les
// seuils de contraste viennent des WCAG. Les libellés d'interface, le nombre
// de modes autorisés, l'accès à l'API des variables, les fonctions d'IA et
// les offres changent selon les versions et les plans : le cours renvoie au
// centre d'aide de Figma et aux documentations officielles, sans chiffre.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 1 · LES FONDATIONS                                           */
/* ================================================================== */

const M1 = 'ds-m1'

const FOUND: Level[] = [
  {
    id: 'ds-why',
    master: 'planning',
    minutes: 10,
    title: B('Why a design system, and for whom', 'Pourquoi un design system, et pour qui'),
    learn: B(
      'You will tell what a design system is made of, who it serves, and frame it in a one-page charter before any component.',
      "Vous saurez dire de quoi se compose un design system, qui il sert, et le cadrer dans une charte d'une page.",
    ),
    act: B('Interview the people who will use the Cadenza system, then write its one-page charter with AI as an editor.',
      "Interrogez les futurs utilisateurs du système de Cadenza, puis rédigez sa charte d'une page avec l'IA pour éditrice."),
    steps: [
      B('Collect evidence of the problem: the same element drawn several ways, and the bugs or delays it caused.',
        "Rassemblez les preuves du problème : un même élément dessiné de plusieurs façons, les bugs et retards qu'il a causés."),
      B('Interview designers, developers and the product lead: what they rebuild, what they search for, what slows them down.',
        "Interrogez designers, développeurs et responsable produit : ce qu'ils refont, ce qu'ils cherchent, ce qui les ralentit."),
      B('Have the AI condense the notes into a charter: problem, audiences, scope, non-goals, signals of success.',
        "Faites condenser les notes par l'IA en une charte : problème, publics, périmètre, exclusions, signaux de réussite."),
      B('Have the charter approved by the product lead and one developer before opening any component file.',
        "Faites valider la charte par la direction produit et un développeur avant d'ouvrir le moindre fichier de composants."),
    ],
    trap: B(
      'Starting with polished components copied from a famous system: they answer problems you do not have and ignore yours.',
      "Commencer par des composants soignés copiés d'un système célèbre : ils résolvent des problèmes que vous n'avez pas et ignorent les vôtres.",
    ),
    quiz: {
      q: B("Sophie wants the Cadenza system to 'look like Material'. What should Inès do first?",
        "Sophie veut que le système de Cadenza « ressemble à Material ». Que doit faire Inès d'abord ?"),
      options: [
        B('Adopt Material as it is, since a known system saves months of work', 'Adopter Material tel quel, un système connu faisant gagner des mois'),
        B('Ask what problems it must solve, then test Material against them', 'Demander quels problèmes résoudre, puis y confronter Material'),
        B('Refuse any outside system, since a product must invent its own', 'Refuser tout système extérieur, un produit devant inventer le sien'),
      ],
      answer: 1,
      why: B(
        'A design system is judged by the problems it solves for its users. Material may answer some of them, but only a stated problem tells what to adopt, adapt or leave.',
        "Un design system se juge aux problèmes qu'il résout pour ses utilisateurs. Material peut en régler certains, mais seul un problème énoncé dit quoi adopter, adapter ou laisser.",
      ),
    },
    badge: B('Frames before building', 'Cadre avant de construire'),
  },
  {
    id: 'ds-audit',
    master: 'extraction',
    minutes: 12,
    title: B('Audit an existing product: the inventory', "Auditer un produit existant : l'inventaire"),
    learn: B(
      'You will build an interface inventory of a live product, count its variants and turn the result into priorities.',
      "Vous saurez dresser l'inventaire d'interface d'un produit en ligne, compter ses variantes et en tirer des priorités.",
    ),
    act: B('Capture the screens of Cadenza, sort the elements by category in FigJam, then rank the inconsistencies.',
      'Capturez les écrans de Cadenza, triez les éléments par catégorie dans FigJam, puis hiérarchisez les incohérences.'),
    steps: [
      B('Capture the production screens, not the mockups: web back office, mobile app, site, emails, error states.',
        "Capturez les écrans en production, pas les maquettes : back-office web, app mobile, site, e-mails, états d'erreur."),
      B('Crop each element and group it by category: actions, form fields, colours, text styles, icons, spacing, shadows.',
        'Découpez chaque élément et rangez-le par catégorie : actions, champs, couleurs, textes, icônes, espacements, ombres.'),
      B('Read the real values from the code with CSS Overview in Chrome DevTools, then let the AI group near duplicates.',
        "Relevez les valeurs du code avec CSS Overview (DevTools de Chrome), puis faites regrouper les quasi-doublons par l'IA."),
      B('Score each category by frequency and inconsistency, and write the top five as the first backlog of the system.',
        'Notez chaque catégorie selon sa fréquence et son incohérence, et inscrivez les cinq premières au backlog du système.'),
    ],
    trap: B(
      'Auditing only the Figma files: production has drifted from them, and the code is what users see. Inventory what ships.',
      "N'auditer que les fichiers Figma : la production s'en est éloignée, et c'est le code que voient les utilisateurs. Inventoriez ce qui est livré.",
    ),
    quiz: {
      q: B('The inventory finds eleven greys in the CSS, some only one shade apart. What should Inès do with them?',
        "L'inventaire relève onze gris dans le CSS, certains à une nuance près. Qu'en fait Inès ?"),
      options: [
        B('Keep all eleven as tokens, since each one was chosen by someone', "Les garder tous en tokens, chacun ayant été choisi par quelqu'un"),
        B('Delete the greys from the CSS at once and use pure black instead', 'Supprimer tout de suite ces gris du CSS et mettre du noir à la place'),
        B('Group them by use and closeness, then propose a shorter scale', 'Les regrouper par usage et proximité, puis proposer une échelle courte'),
      ],
      answer: 2,
      why: B(
        'Near duplicates are rarely intended. Grouping them by use (text, borders, backgrounds) and closeness gives a short scale, while keeping track of where each old value lives.',
        "Les quasi-doublons sont rarement voulus. Les regrouper par usage (texte, bordures, fonds) et par proximité donne une échelle courte, en gardant trace de chaque ancienne valeur.",
      ),
    },
    badge: B('Inventories what ships', 'Inventorie ce qui est livré'),
  },
  {
    id: 'ds-principles',
    master: 'writing',
    minutes: 11,
    title: B('Design principles and naming', 'Les principes de design et le nommage'),
    learn: B(
      'You will write principles that settle real debates, and a naming convention shared by design and code.',
      'Vous saurez écrire des principes qui tranchent de vrais débats, et une convention de nommage commune au design et au code.',
    ),
    act: B('Draw four principles from past Cadenza debates, then write its naming convention and glossary with AI.',
      "Tirez quatre principes de débats passés de Cadenza, puis rédigez avec l'IA sa convention de nommage et un glossaire."),
    steps: [
      B('List five decisions the team argued about, such as dense tables or airy cards, and how each was settled.',
        'Listez cinq décisions qui ont fait débat, comme tableaux denses ou cartes aérées, et la façon dont chacune a été tranchée.'),
      B("Turn each settlement into a principle of the form 'this over that', with one example and one counter-example.",
        'Faites de chaque arbitrage un principe de la forme « ceci plutôt que cela », avec un exemple et un contre-exemple.'),
      B('Fix the grammar of names: category, role, variant, state, in English, with the same words in Figma and in code.',
        'Fixez la grammaire des noms : catégorie, rôle, variante, état, en anglais, avec les mêmes mots dans Figma et le code.'),
      B('Ask the AI to rename twenty audited elements with the convention and to flag every name it had to guess.',
        "Demandez à l'IA de renommer vingt éléments de l'inventaire selon la convention et de signaler chaque nom deviné."),
    ],
    trap: B(
      'Writing principles nobody could disagree with, such as simple or beautiful: they settle no debate, so nobody reads them twice.',
      'Écrire des principes que personne ne contesterait, comme simple ou beau : ils ne tranchent aucun débat, et personne ne les relit.',
    ),
    quiz: {
      q: B('Malik names a token blue-dark in code; Inès calls the same colour Primary/Strong in Figma. What is the risk?',
        'Malik nomme un token blue-dark dans le code, Inès appelle la même couleur Primary/Strong dans Figma. Quel risque ?'),
      options: [
        B('Handoff turns into translation, and the two names drift apart', 'Chaque passage de relais devient une traduction, et les noms divergent'),
        B('None, since tools convert names automatically between platforms', "Aucun, les outils convertissant les noms d'une plateforme à l'autre"),
        B('A purely cosmetic issue, since users never see token names', 'Un souci purement cosmétique, les utilisateurs ne voyant pas les noms'),
      ],
      answer: 0,
      why: B(
        'Two names for one decision mean every handoff needs a translation, and sooner or later one side changes without the other. One shared name in Figma and in code removes the translation.',
        "Deux noms pour une même décision obligent à traduire à chaque passage de relais, et tôt ou tard un côté change sans l'autre. Un nom commun à Figma et au code supprime la traduction.",
      ),
    },
    badge: B('Names things once', 'Nomme une seule fois'),
  },
  {
    id: 'ds-files',
    master: 'orchestration',
    minutes: 10,
    title: B('Organise Figma files and libraries', 'Organiser les fichiers et les bibliothèques Figma'),
    learn: B(
      'You will lay out the team, projects and library files of a system so that each one is published and updated on its own.',
      "Vous saurez organiser l'équipe, les projets et les fichiers de bibliothèque Figma d'un système, publiables chacun à part.",
    ),
    act: B('Draw the file map of Cadenza, create the foundations, components and icons files, and set who may edit them.',
      'Dessinez la carte des fichiers de Cadenza, créez fondations, composants et icônes, et fixez qui peut les modifier.'),
    steps: [
      B('Separate what changes at different speeds: foundations (variables, styles), components, icons, then product files.',
        'Séparez ce qui change à des rythmes différents : fondations (variables, styles), composants, icônes, puis fichiers produit.'),
      B('Give each library file the same pages: cover, getting started, changelog, one page per topic, archive.',
        'Donnez à chaque bibliothèque les mêmes pages : couverture, prise en main, journal des versions, une page par sujet, archives.'),
      B('Restrict editing of the libraries to the system team; everyone else can view, use and propose changes.',
        "Réservez la modification des bibliothèques à l'équipe du système ; les autres consultent, utilisent et proposent."),
      B('Publish the foundations first, enable them in the components file, then test an update in one product file.',
        "Publiez d'abord les fondations, activez-les dans le fichier composants, puis testez une mise à jour dans un fichier produit."),
    ],
    trap: B(
      'One giant file holding variables, components, icons and drafts: it is slow to open, and every publish pushes everything at once.',
      'Un fichier géant mêlant variables, composants, icônes et brouillons : lent à ouvrir, et chaque publication pousse tout à la fois.',
    ),
    quiz: {
      q: B('Inès wants to try a new icon set without disturbing product teams. Where should this work happen?',
        "Inès veut essayer un nouveau jeu d'icônes sans gêner les équipes produit. Où ce travail doit-il se faire ?"),
      options: [
        B('Directly in the published icons library, then publish it right away', "Directement dans la bibliothèque d'icônes publiée, puis publier aussitôt"),
        B('In each product file, so that teams can compare on real screens', 'Dans chaque fichier produit, pour comparer sur de vrais écrans'),
        B('In a branch or a sandbox file, published only once reviewed', 'Dans une branche ou un fichier bac à sable, publié une fois relu'),
      ],
      answer: 2,
      why: B(
        'Consumers receive what is published. Working in a branch (on plans that offer branching) or in a sandbox file keeps drafts away from them until review.',
        "Les fichiers consommateurs reçoivent ce qui est publié. Une branche (sur les offres qui la proposent) ou un fichier bac à sable tient les brouillons à l'écart jusqu'à la relecture.",
      ),
    },
    badge: B('Maps the libraries', 'Cartographie les bibliothèques'),
  },
]

const FOUND_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M1, 'ds-why')]: {
    why: [
      B("A design system is a shared set of decisions made reusable: tokens for the raw values, components for the interface pieces, patterns for recurring layouts, documentation to explain them, and a process to change them. Each layer saves time only if people adopt it, so the system is a product with its own users, not a file you deliver once.",
        "Un design system est un ensemble de décisions partagées rendues réutilisables : des tokens pour les valeurs brutes, des composants pour les pièces d'interface, des motifs pour les mises en page récurrentes, une documentation pour les expliquer, et un processus pour les faire évoluer. Chaque couche ne fait gagner du temps que si on l'adopte : le système est un produit qui a ses utilisateurs, pas un fichier livré une fois."),
      B("Its users are not only designers. Developers consume its tokens and components, product managers read its patterns to scope features, content writers follow its rules, testers check its states. A charter that names these audiences and their pains tells what to build first, and what to leave out.",
        "Ses utilisateurs ne sont pas seulement les designers. Les développeurs consomment ses tokens et ses composants, les responsables produit lisent ses motifs pour cadrer une fonctionnalité, les rédacteurs suivent ses règles, les testeurs vérifient ses états. Une charte qui nomme ces publics et leurs difficultés dit quoi construire d'abord, et quoi laisser de côté."),
      B("AI is useful as an interviewer and an editor: it prepares questions, groups scattered notes and spots contradictions. It cannot know your product's problems; the evidence comes from screenshots and from what colleagues say, which is why the notes are kept word for word before any summary.",
        "L'IA est utile comme intervieweuse et comme éditrice : elle prépare des questions, regroupe des notes éparses et repère les contradictions. Elle ne peut pas connaître les problèmes de votre produit : les preuves viennent des captures et de ce que disent les collègues, c'est pourquoi les notes sont gardées mot pour mot avant toute synthèse."),
    ],
    example: {
      context: B("Inès is asked to 'start a design system' for Cadenza. Her first prompt asks the AI for one straight away, and she gets a generic list of components that could belong to any product.",
        "On demande à Inès de « lancer un design system » pour Cadenza. Son premier prompt en demande un directement à l'IA, et elle obtient une liste générique de composants qui conviendrait à n'importe quel produit."),
      before: B("Create a design system for my scheduling app. List the components I need.",
        "Crée un design system pour mon app de planning. Liste les composants dont j'ai besoin."),
      after: B("You are helping me frame the design system of Cadenza, a scheduling app for music schools (web back office for staff, mobile app for students and parents, marketing site).\nDo not propose components yet.\n1. Give me 12 interview questions for three audiences: designers, front-end developers, the product lead. Cover what they rebuild often, what they search for, what slowed a recent release, what they fear about a system.\n2. After I paste their answers word for word, write a one-page charter: the problem in two sentences with the evidence I gave, the audiences ranked, the scope for the first three months, the non-goals, and three signals that would show it works (observable behaviours, no invented figures).\nList any contradiction between answers instead of smoothing it over.",
        "Tu m'aides à cadrer le design system de Cadenza, une app de planning pour écoles de musique (back-office web pour les secrétariats, app mobile pour élèves et parents, site vitrine).\nNe propose pas encore de composants.\n1. Donne-moi 12 questions d'entretien pour trois publics : designers, développeurs front-end, responsable produit. Couvre ce qu'ils refont souvent, ce qu'ils cherchent, ce qui a ralenti une livraison récente, ce qu'ils craignent d'un système.\n2. Quand j'aurai collé leurs réponses mot pour mot, rédige une charte d'une page : le problème en deux phrases avec les preuves que j'ai données, les publics classés, le périmètre des trois premiers mois, les exclusions, et trois signaux qui montreraient que ça marche (des comportements observables, aucun chiffre inventé).\nListe toute contradiction entre les réponses au lieu de la lisser."),
      takeaway: B("The second prompt delays the solution until the problem is stated by its users. The charter it produces names real audiences, a short scope and non-goals that Inès can use to refuse requests later.",
        "Le second prompt repousse la solution jusqu'à ce que le problème soit énoncé par ses utilisateurs. La charte obtenue nomme de vrais publics, un périmètre court et des exclusions qu'Inès pourra opposer aux demandes ultérieures."),
    },
    exercise: {
      goal: B("A one-page charter for the design system of a product you know, built from interviews and evidence, with audiences, scope, non-goals and observable signals of success.",
        "Une charte d'une page pour le design system d'un produit que vous connaissez, bâtie sur des entretiens et des preuves, avec publics, périmètre, exclusions et signaux de réussite observables."),
      prompt: B("You are helping me frame the design system of [PRODUCT], which is [WHAT IT DOES AND ON WHICH PLATFORMS].\nStep 1: give me 12 interview questions for [AUDIENCES, E.G. DESIGNERS, DEVELOPERS, PRODUCT]. Do not propose any solution.\nStep 2 (after I paste the answers and this evidence: [SCREENSHOTS OR EXAMPLES OF INCONSISTENCIES]): write a one-page charter with:\n- the problem, in two sentences, quoting the evidence;\n- the audiences, ranked, with what each one needs from the system;\n- the scope for the first [PERIOD], and what is explicitly out of scope;\n- three signals of success that can be observed, without invented figures.\nQuote the interviewees when you use their words, and list contradictions.",
        "Tu m'aides à cadrer le design system de [PRODUIT], qui [CE QU'IL FAIT ET SUR QUELLES PLATEFORMES].\nÉtape 1 : donne-moi 12 questions d'entretien pour [PUBLICS, PAR EXEMPLE DESIGNERS, DÉVELOPPEURS, PRODUIT]. Ne propose aucune solution.\nÉtape 2 (après que j'ai collé les réponses et ces preuves : [CAPTURES OU EXEMPLES D'INCOHÉRENCES]) : rédige une charte d'une page avec :\n- le problème, en deux phrases, en citant les preuves ;\n- les publics, classés, avec ce que chacun attend du système ;\n- le périmètre des [PÉRIODE] premiers mois, et ce qui en est exclu ;\n- trois signaux de réussite observables, sans chiffre inventé.\nCite les personnes interrogées quand tu reprends leurs mots, et liste les contradictions."),
      check: [
        B("The problem is stated with evidence you could show in a meeting", "Le problème est énoncé avec des preuves que vous pourriez montrer en réunion"),
        B("At least one audience is not made of designers", "Au moins un public n'est pas composé de designers"),
        B("The non-goals are written down, not only the goals", "Les exclusions sont écrites, pas seulement les objectifs"),
        B("The signals of success describe behaviours you can observe", "Les signaux de réussite décrivent des comportements observables"),
      ],
      bonus: B("Ask the AI to play a sceptical developer who has seen two design systems abandoned, and to attack the charter in five questions. Answer each one in the charter itself.",
        "Demandez à l'IA de jouer un développeur sceptique qui a vu deux design systems abandonnés, et d'attaquer la charte en cinq questions. Répondez à chacune dans la charte elle-même."),
    },
    more: [
      { q: B("Why does the Cadenza charter list non-goals, such as 'no marketing site in the first three months'?",
          "Pourquoi la charte de Cadenza liste-t-elle des exclusions, comme « pas de site vitrine les trois premiers mois » ?"),
        options: [
          B("Because the marketing site will never need any design system at all", "Parce que le site vitrine n'aura jamais besoin d'aucun design system"),
          B("So that Inès can turn down requests without reopening the debate", "Pour qu'Inès puisse refuser des demandes sans rouvrir le débat"),
          B("Because Figma cannot share variables with a website project", "Parce que Figma ne peut pas partager de variables avec un projet de site"),
        ],
        answer: 1,
        why: B("A system that tries to cover everything at once ships nothing. Written non-goals protect the scope: when a request arrives, the charter already says it comes later.",
          "Un système qui veut tout couvrir d'un coup ne livre rien. Des exclusions écrites protègent le périmètre : quand une demande arrive, la charte dit déjà qu'elle viendra plus tard.") },
      { q: B("Which signal of success is the most useful one for the Cadenza charter?",
          "Quel signal de réussite est le plus utile pour la charte de Cadenza ?"),
        options: [
          B("New screens are built from library components without detaching them", "Les nouveaux écrans sont faits de composants de la bibliothèque, sans détachement"),
          B("The library file contains more components than Material does", "Le fichier de bibliothèque contient plus de composants que Material"),
          B("Everyone in the company says that they like the new style", "Tout le monde dans l'entreprise dit aimer le nouveau style"),
        ],
        answer: 0,
        why: B("A signal must describe a behaviour that shows adoption. The number of components measures effort, not use, and liking a style says nothing about whether people build with it.",
          "Un signal doit décrire un comportement qui montre l'adoption. Le nombre de composants mesure l'effort, pas l'usage, et aimer un style ne dit pas si l'on construit avec.") },
    ],
  },

  [enrichKey(M1, 'ds-audit')]: {
    why: [
      B("An interface inventory turns a feeling ('our product is inconsistent') into evidence that can be counted and shown. Seeing nine kinds of primary action side by side on one board convinces faster than any argument, and it tells where the system will save the most work.",
        "Un inventaire d'interface transforme une impression (« notre produit est incohérent ») en preuves que l'on peut compter et montrer. Voir neuf sortes d'action principale côte à côte sur un tableau convainc plus vite que tout argument, et dit où le système fera gagner le plus de travail."),
      B("The inventory must start from production, because that is what users see and what the code really contains. Figma files are often outdated or idealised. Tools help on both sides: the selection colours of a Figma frame list the colours used in it, and the CSS Overview panel of Chrome DevTools lists the colours, fonts and sizes of a live page.",
        "L'inventaire part de la production, parce que c'est ce que voient les utilisateurs et ce que contient vraiment le code. Les fichiers Figma sont souvent dépassés ou idéalisés. Des outils aident des deux côtés : les couleurs de sélection d'un cadre Figma listent les couleurs qu'il emploie, et le panneau CSS Overview des DevTools de Chrome liste couleurs, polices et tailles d'une page en ligne."),
      B("AI is good at sorting and grouping long lists of values or descriptions, and at proposing categories. It is unreliable for perceptual judgements and calculations: grouping near-identical colours must be checked with a colour tool, and every count it reports must be verified against your board.",
        "L'IA sait trier et regrouper de longues listes de valeurs ou de descriptions, et proposer des catégories. Elle est peu fiable pour les jugements de perception et les calculs : un regroupement de couleurs voisines se vérifie avec un outil de couleur, et chaque décompte qu'elle annonce se vérifie sur votre tableau."),
    ],
    example: {
      context: B("Inès has exported the colour list of three Cadenza pages from CSS Overview. Her first prompt asks the AI to 'clean the palette', and it returns a brand new palette that no longer matches anything in the product.",
        "Inès a exporté la liste des couleurs de trois pages de Cadenza depuis CSS Overview. Son premier prompt demande à l'IA de « nettoyer la palette », et elle reçoit une palette entièrement nouvelle qui ne correspond plus à rien dans le produit."),
      before: B("Here are the colours of my app. Clean up this palette.",
        "Voici les couleurs de mon app. Nettoie cette palette."),
      after: B("Below is the list of colours found in the CSS of Cadenza, each with its hex value, the number of occurrences, and the page where I found it.\nDo not invent new colours.\n1. Group them by apparent use: text, backgrounds, borders, actions, feedback (error, success, warning), other.\n2. Inside each group, mark the values that look like near duplicates, and say which one you would keep as the reference (the most used).\n3. Give me a table: old value, group, proposed reference, pages concerned.\n4. List the values you could not classify, and why.\nI will check every grouping with a colour picker before using it.\n[LIST]",
        "Voici la liste des couleurs trouvées dans le CSS de Cadenza, chacune avec sa valeur hexadécimale, son nombre d'occurrences et la page où je l'ai trouvée.\nN'invente aucune couleur.\n1. Regroupe-les par usage apparent : texte, fonds, bordures, actions, retours (erreur, succès, avertissement), autres.\n2. Dans chaque groupe, marque les valeurs qui semblent des quasi-doublons, et dis laquelle tu garderais comme référence (la plus employée).\n3. Donne-moi un tableau : ancienne valeur, groupe, référence proposée, pages concernées.\n4. Liste les valeurs que tu n'as pas pu classer, et pourquoi.\nJe vérifierai chaque regroupement avec une pipette avant de m'en servir.\n[LISTE]"),
      takeaway: B("The second prompt keeps the AI on sorting, which it does well, and forbids invention. The table maps every old value to a reference, which Inès will reuse to migrate the code later.",
        "Le second prompt cantonne l'IA au tri, qu'elle fait bien, et lui interdit d'inventer. Le tableau relie chaque ancienne valeur à une référence, qu'Inès réutilisera plus tard pour migrer le code."),
    },
    exercise: {
      goal: B("An interface inventory of one product you can access: a FigJam board of captured elements by category, a table of values grouped with AI and checked by you, and a ranked list of five problems.",
        "Un inventaire d'interface d'un produit auquel vous avez accès : un tableau FigJam d'éléments capturés par catégorie, une table de valeurs regroupées avec l'IA et vérifiées par vous, et une liste classée de cinq problèmes."),
      prompt: B("I am auditing the interface of [PRODUCT]. Here is what I captured, category by category: [FOR EACH CATEGORY: NUMBER OF VARIANTS FOUND, SHORT DESCRIPTION OF EACH, SCREENS WHERE THEY APPEAR].\nHere are the raw values read from the code: [COLOURS, FONT SIZES, SPACINGS, RADII].\n1. For each category, describe the differences between variants and say which ones seem intentional and which seem accidental.\n2. Group the raw values by use and propose a reference for each group, without inventing any value.\n3. Rank the five categories where a shared component or token would remove the most inconsistency, with your reasoning.\nDo not compute contrast or colour distance yourself: tell me what I should check with a tool.",
        "J'audite l'interface de [PRODUIT]. Voici ce que j'ai capturé, catégorie par catégorie : [POUR CHAQUE CATÉGORIE : NOMBRE DE VARIANTES TROUVÉES, COURTE DESCRIPTION DE CHACUNE, ÉCRANS OÙ ELLES APPARAISSENT].\nVoici les valeurs brutes relevées dans le code : [COULEURS, TAILLES DE POLICE, ESPACEMENTS, RAYONS].\n1. Pour chaque catégorie, décris les différences entre variantes et dis lesquelles semblent voulues et lesquelles accidentelles.\n2. Regroupe les valeurs brutes par usage et propose une référence pour chaque groupe, sans inventer de valeur.\n3. Classe les cinq catégories où un composant ou un token commun supprimerait le plus d'incohérence, en expliquant ton raisonnement.\nNe calcule pas toi-même de contraste ni de distance entre couleurs : dis-moi ce que je dois vérifier avec un outil."),
      check: [
        B("Every element on the board comes from a production screen", "Chaque élément du tableau vient d'un écran en production"),
        B("Each category shows its number of variants next to it", "Chaque catégorie affiche son nombre de variantes à côté d'elle"),
        B("You checked the colour groupings yourself with a picker", "Vous avez vérifié vous-même les regroupements de couleurs à la pipette"),
        B("The five priorities are justified by frequency and inconsistency", "Les cinq priorités sont justifiées par la fréquence et l'incohérence"),
      ],
      bonus: B("Show the board to a developer and to the product lead for ten minutes, and note which category surprises them most. That reaction is the best opening for your next presentation of the system.",
        "Montrez le tableau à un développeur et à la responsable produit pendant dix minutes, et notez la catégorie qui les surprend le plus. Cette réaction est la meilleure ouverture pour votre prochaine présentation du système."),
    },
    more: [
      { q: B("The Figma mockups of Cadenza show two styles of form field, the live app shows five. Which count goes in the inventory?",
          "Les maquettes Figma de Cadenza montrent deux styles de champ, l'app en ligne en montre cinq. Quel décompte entre dans l'inventaire ?"),
        options: [
          B("Two, because the mockups show what designers actually intended", "Deux, parce que les maquettes montrent ce que les designers voulaient"),
          B("Five, because the inventory records what users really see", "Cinq, parce que l'inventaire relève ce que voient vraiment les utilisateurs"),
          B("An average of the two counts, to be fair to both sources", "Une moyenne des deux décomptes, pour être juste envers les deux sources"),
        ],
        answer: 1,
        why: B("The system has to replace what exists in production. The gap between the two counts is itself a finding: it shows how far the code has drifted from the mockups.",
          "Le système doit remplacer ce qui existe en production. L'écart entre les deux décomptes est lui-même un résultat : il montre combien le code s'est éloigné des maquettes.") },
      { q: B("The AI says two blues are 'almost identical'. What should Inès do before merging them?",
          "L'IA affirme que deux bleus sont « presque identiques ». Que doit faire Inès avant de les fusionner ?"),
        options: [
          B("Merge them at once, since the AI has compared the hex values", "Les fusionner aussitôt, l'IA ayant comparé les valeurs hexadécimales"),
          B("Ask the AI the same question again until two answers match", "Reposer la question à l'IA jusqu'à obtenir deux réponses identiques"),
          B("Compare them side by side and check where each one is used", "Les comparer côte à côte et vérifier où chacun est employé"),
        ],
        answer: 2,
        why: B("A model does not see colours, it reasons on text and can be wrong about closeness. Looking at both values on screen, and at their uses, tells whether the difference is accidental or meaningful.",
          "Un modèle ne voit pas les couleurs, il raisonne sur du texte et peut se tromper sur leur proximité. Regarder les deux valeurs à l'écran, et leurs usages, dit si l'écart est accidentel ou porteur de sens.") },
    ],
  },

  [enrichKey(M1, 'ds-principles')]: {
    why: [
      B("Design principles are useful only when they settle a choice between two good options. 'Clarity over density' tells a designer what to do with a crowded table; 'simple and beautiful' does not, because nobody aims for the opposite. That is why principles are drawn from real debates, each with an example and a counter-example.",
        "Les principes de design ne servent que s'ils tranchent entre deux bonnes options. « La clarté plutôt que la densité » dit à un designer quoi faire d'un tableau chargé ; « simple et beau » ne le dit pas, car personne ne vise l'inverse. C'est pourquoi les principes se tirent de vrais débats, chacun avec un exemple et un contre-exemple."),
      B("Naming is the other foundation, because names travel: from Figma layers to variables, from variables to code, from code to documentation. A naming grammar (category, role, variant, state) applied the same way everywhere makes a name predictable: someone who knows two names can guess the third.",
        "Le nommage est l'autre fondation, parce que les noms voyagent : des calques Figma aux variables, des variables au code, du code à la documentation. Une grammaire de nommage (catégorie, rôle, variante, état) appliquée partout de la même façon rend un nom prévisible : qui connaît deux noms devine le troisième."),
      B("AI is a good assistant for both tasks, as long as it works from your material. It turns debate notes into principles, applies a convention to dozens of elements and spots inconsistent names. The decisions stay with the team, and every name it had to guess is a signal that the convention has a gap.",
        "L'IA est une bonne assistante pour ces deux tâches, tant qu'elle travaille à partir de votre matière. Elle transforme des notes de débat en principes, applique une convention à des dizaines d'éléments et repère les noms incohérents. Les décisions restent à l'équipe, et chaque nom qu'elle a dû deviner signale un trou dans la convention."),
    ],
    example: {
      context: B("Inès asks the AI for design principles for Cadenza. Her first prompt returns five generic words that could be printed on any company's wall.",
        "Inès demande à l'IA des principes de design pour Cadenza. Son premier prompt renvoie cinq mots génériques qu'on pourrait afficher au mur de n'importe quelle entreprise."),
      before: B("Give me five design principles for my app.",
        "Donne-moi cinq principes de design pour mon app."),
      after: B("Below are five decisions the Cadenza team argued about, with the arguments on each side and how each was settled.\n[DEBATE NOTES]\nFor each settlement, write a principle in the form 'X over Y', where Y is a real good quality we are willing to give up.\nAdd one sentence on why, one example from our screens and one counter-example.\nMerge principles that say the same thing; keep four at most.\nThen tell me which past debate none of the principles would have settled.",
        "Voici cinq décisions qui ont fait débat dans l'équipe de Cadenza, avec les arguments de chaque côté et la façon dont chacune a été tranchée.\n[NOTES DE DÉBAT]\nPour chaque arbitrage, écris un principe de la forme « X plutôt que Y », où Y est une vraie qualité à laquelle nous acceptons de renoncer.\nAjoute une phrase sur le pourquoi, un exemple tiré de nos écrans et un contre-exemple.\nFusionne les principes qui disent la même chose ; garde-en quatre au plus.\nDis-moi ensuite quel débat passé aucun principe n'aurait tranché."),
      takeaway: B("The second prompt forces each principle to give something up, which is what makes it useful in a review. The last question tests the set against real history instead of trusting it.",
        "Le second prompt oblige chaque principe à renoncer à quelque chose, ce qui le rend utile en revue. La dernière question confronte l'ensemble à l'histoire réelle au lieu de lui faire confiance."),
    },
    exercise: {
      goal: B("Four principles in the form 'X over Y' drawn from real debates, and a one-page naming convention with its glossary, tested on twenty elements of your inventory.",
        "Quatre principes de la forme « X plutôt que Y » tirés de vrais débats, et une convention de nommage d'une page avec son glossaire, testée sur vingt éléments de votre inventaire."),
      prompt: B("Here is the naming convention I want for [PRODUCT]: [GRAMMAR, E.G. CATEGORY / ROLE / VARIANT / STATE, LANGUAGE, CASE, SEPARATOR].\nHere is the glossary of allowed words: [WORDS, E.G. PRIMARY, SECONDARY, SUBTLE, STRONG, DISABLED].\nHere are twenty elements from my inventory with their current names: [LIST].\n1. Rename each element following the convention strictly.\n2. Mark with a question mark every name where you had to choose a word outside the glossary or guess the role.\n3. List the gaps in the convention that these guesses reveal, and propose a rule for each.\nDo not add words to the glossary on your own: propose them.",
        "Voici la convention de nommage que je veux pour [PRODUIT] : [GRAMMAIRE, PAR EXEMPLE CATÉGORIE / RÔLE / VARIANTE / ÉTAT, LANGUE, CASSE, SÉPARATEUR].\nVoici le glossaire des mots autorisés : [MOTS, PAR EXEMPLE PRIMARY, SECONDARY, SUBTLE, STRONG, DISABLED].\nVoici vingt éléments de mon inventaire avec leur nom actuel : [LISTE].\n1. Renomme chaque élément en suivant strictement la convention.\n2. Marque d'un point d'interrogation chaque nom pour lequel tu as dû choisir un mot hors du glossaire ou deviner le rôle.\n3. Liste les trous de la convention que ces hésitations révèlent, et propose une règle pour chacun.\nN'ajoute pas de mots au glossaire de toi-même : propose-les."),
      check: [
        B("Each principle names a good quality you accept to give up", "Chaque principe nomme une vraie qualité à laquelle vous acceptez de renoncer"),
        B("Each principle has an example and a counter-example from your screens", "Chaque principe a un exemple et un contre-exemple tirés de vos écrans"),
        B("A developer read the convention and would use the same names in code", "Un développeur a lu la convention et emploierait les mêmes noms dans le code"),
        B("Every guessed name led to a new rule or a new glossary word", "Chaque nom deviné a donné une règle nouvelle ou un mot de glossaire"),
      ],
      bonus: B("Give the convention to a colleague who has never seen it, with five unnamed elements, and compare their names with the AI's. Each difference shows a rule that is not yet clear enough.",
        "Donnez la convention à un collègue qui ne l'a jamais vue, avec cinq éléments sans nom, et comparez ses noms avec ceux de l'IA. Chaque différence montre une règle encore trop floue."),
    },
    more: [
      { q: B("Which principle will help Inès most when two designers disagree about a crowded lesson table?",
          "Quel principe aidera le plus Inès quand deux designers se disputent sur un tableau de cours chargé ?"),
        options: [
          B("Every screen must be beautiful, modern and pleasant to use", "Chaque écran doit être beau, moderne et agréable à utiliser"),
          B("Clarity over density: show less per screen, but readable", "La clarté plutôt que la densité : moins par écran, mais lisible"),
          B("Users come first, in every decision we make about the product", "L'utilisateur d'abord, dans chaque décision prise sur le produit"),
        ],
        answer: 1,
        why: B("Only the second principle chooses between two good options, and the table debate is exactly that choice. The others are true of any product, so both designers can claim them.",
          "Seul le deuxième principe choisit entre deux bonnes options, et le débat sur le tableau est précisément ce choix. Les autres valent pour tout produit, chaque designer peut donc s'en réclamer.") },
      { q: B("The AI renamed 'Btn blue big' as 'Button/Primary/Large' but put a question mark on 'Pill green'. What does it tell Inès?",
          "L'IA a renommé « Btn blue big » en « Button/Primary/Large » mais a mis un point d'interrogation sur « Pill green ». Qu'en déduit Inès ?"),
        options: [
          B("The convention lacks a rule for this element, or the element is unclear", "Il manque une règle pour cet élément, ou l'élément lui-même est flou"),
          B("The AI made a mistake, and the old name should be kept as it is", "L'IA s'est trompée, et l'ancien nom doit être conservé tel quel"),
          B("Green elements cannot be named until the colours are final", "Les éléments verts ne peuvent être nommés avant les couleurs définitives"),
        ],
        answer: 0,
        why: B("A guess reveals a gap: perhaps 'Pill green' is a status badge, a category the glossary does not yet name. Fixing the convention once avoids the same doubt on every future element.",
          "Une hésitation révèle un trou : peut-être « Pill green » est-il un badge de statut, catégorie que le glossaire ne nomme pas encore. Corriger la convention une fois évite le même doute sur chaque élément futur.") },
    ],
  },

  [enrichKey(M1, 'ds-files')]: {
    why: [
      B("In Figma, a library is published file by file, and consumers enable each library separately. The way you split files therefore decides what can be updated alone. Foundations change rarely and affect everything; components change often; icons change in batches. Putting them in separate files lets each one move at its own pace.",
        "Dans Figma, une bibliothèque se publie fichier par fichier, et les fichiers consommateurs activent chaque bibliothèque séparément. Le découpage des fichiers décide donc de ce qui peut évoluer seul. Les fondations changent rarement et touchent tout ; les composants changent souvent ; les icônes changent par lots. Les séparer laisse chacun avancer à son rythme."),
      B("A predictable structure inside each file matters as much as the split. When every library opens on a cover with its status, then a getting started page, a changelog and one page per topic, people find things without asking. The archive page keeps deprecated items visible for a while instead of breaking files that still use them.",
        "Une structure prévisible à l'intérieur de chaque fichier compte autant que le découpage. Quand chaque bibliothèque s'ouvre sur une couverture avec son statut, puis une page de prise en main, un journal des versions et une page par sujet, on trouve sans demander. La page d'archives garde un temps visibles les éléments dépréciés au lieu de casser les fichiers qui les emploient encore."),
      B("Permissions complete the structure: a library that anyone can edit drifts as fast as the product did. Features such as branching, library analytics or the number of variable modes depend on your Figma plan and evolve, so check the Figma help center for what yours includes before you design the process around them.",
        "Les droits complètent la structure : une bibliothèque que tout le monde peut modifier dérive aussi vite que le produit avant elle. Des fonctions comme les branches, les statistiques de bibliothèque ou le nombre de modes de variables dépendent de votre offre Figma et évoluent : vérifiez dans le centre d'aide de Figma ce que la vôtre inclut avant d'y adosser le processus."),
    ],
    example: {
      context: B("Inès asks the AI how to organise the Cadenza libraries. Her first prompt gets a long list of folders copied from a large company, with nine libraries for a team of three designers.",
        "Inès demande à l'IA comment organiser les bibliothèques de Cadenza. Son premier prompt lui vaut une longue liste de dossiers copiée d'une grande entreprise, avec neuf bibliothèques pour une équipe de trois designers."),
      before: B("How should I organise my Figma files for a design system?",
        "Comment organiser mes fichiers Figma pour un design system ?"),
      after: B("Help me design the Figma file structure for the Cadenza design system.\nContext: 3 designers, 2 front-end developers, 1 product lead; products: web back office, mobile app, marketing site; first scope: foundations and about fifteen components.\n1. Propose the smallest set of library files that lets foundations, components and icons be published separately. Justify each split by how often it changes and who uses it.\n2. Propose the same page structure for every library file.\n3. Say who should have edit access and who view access, and how others propose a change.\n4. List the decisions that depend on our Figma plan (branching, analytics, number of modes) so I can check them in the help center.\nKeep it as small as our team: no file without a clear owner.",
        "Aide-moi à concevoir la structure de fichiers Figma du design system de Cadenza.\nContexte : 3 designers, 2 développeurs front-end, 1 responsable produit ; produits : back-office web, app mobile, site vitrine ; premier périmètre : fondations et une quinzaine de composants.\n1. Propose le plus petit ensemble de fichiers de bibliothèque qui permette de publier séparément fondations, composants et icônes. Justifie chaque découpage par sa fréquence de changement et ses utilisateurs.\n2. Propose une même structure de pages pour chaque fichier de bibliothèque.\n3. Dis qui doit avoir les droits de modification et qui la lecture seule, et comment les autres proposent un changement.\n4. Liste les décisions qui dépendent de notre offre Figma (branches, statistiques, nombre de modes) pour que je les vérifie dans le centre d'aide.\nReste à la taille de notre équipe : aucun fichier sans responsable clair."),
      takeaway: B("The second prompt gives the team size and the scope, so the answer fits Cadenza: three libraries, one structure, clear owners. The plan-dependent features are listed to check, not assumed.",
        "Le second prompt donne la taille de l'équipe et le périmètre, et la réponse convient à Cadenza : trois bibliothèques, une structure, des responsables clairs. Les fonctions liées à l'offre sont listées pour vérification, non supposées."),
    },
    exercise: {
      goal: B("A file map for a design system you work on or imagine: library files with their reason to exist, the same page structure in each, the edit rights, and the list of plan features to check.",
        "Une carte des fichiers pour un design system réel ou imaginé : fichiers de bibliothèque avec leur raison d'être, la même structure de pages dans chacun, les droits, et les fonctions de l'offre à vérifier."),
      prompt: B("Help me organise the Figma files of the design system of [PRODUCT].\nTeam: [NUMBER OF DESIGNERS, DEVELOPERS, OTHER ROLES]. Platforms: [PLATFORMS]. First scope: [FOUNDATIONS, COMPONENTS, ICONS, OTHER].\n1. Propose the smallest set of library files that can be published separately, each with its reason to exist (rate of change, users) and its owner.\n2. Propose one page structure that every library file will follow.\n3. Propose the edit and view rights, and the way someone outside the system team proposes a change.\n4. List the features this structure relies on that may depend on our Figma plan, so that I check them in the Figma help center.\nIf a file has no clear owner, merge it with another.",
        "Aide-moi à organiser les fichiers Figma du design system de [PRODUIT].\nÉquipe : [NOMBRE DE DESIGNERS, DÉVELOPPEURS, AUTRES RÔLES]. Plateformes : [PLATEFORMES]. Premier périmètre : [FONDATIONS, COMPOSANTS, ICÔNES, AUTRE].\n1. Propose le plus petit ensemble de fichiers de bibliothèque publiables séparément, chacun avec sa raison d'être (rythme de changement, utilisateurs) et son responsable.\n2. Propose une structure de pages que suivra chaque fichier de bibliothèque.\n3. Propose les droits de modification et de lecture, et la façon dont une personne extérieure à l'équipe du système propose un changement.\n4. Liste les fonctions sur lesquelles repose cette structure et qui peuvent dépendre de notre offre Figma, pour que je les vérifie dans le centre d'aide de Figma.\nSi un fichier n'a pas de responsable clair, fusionne-le avec un autre."),
      check: [
        B("Each library file has a reason to exist and a named owner", "Chaque fichier de bibliothèque a une raison d'être et un responsable nommé"),
        B("All library files share the same page structure", "Tous les fichiers de bibliothèque partagent la même structure de pages"),
        B("The way to propose a change is written down", "La façon de proposer un changement est écrite"),
        B("You checked the plan-dependent features in the Figma help center", "Vous avez vérifié les fonctions liées à l'offre dans le centre d'aide de Figma"),
      ],
      bonus: B("Create the foundations file with its pages, publish it, enable it in an empty test file and change one value. Observe how the update reaches the consumer: you will understand the publishing flow better than from any diagram.",
        "Créez le fichier des fondations avec ses pages, publiez-le, activez-le dans un fichier de test vide et changez une valeur. Observez comment la mise à jour arrive chez le consommateur : vous comprendrez le circuit de publication mieux que par tout schéma."),
    },
    more: [
      { q: B("Why does Inès keep the icons in their own library file rather than inside the components file?",
          "Pourquoi Inès garde-t-elle les icônes dans leur propre fichier de bibliothèque plutôt que dans le fichier des composants ?"),
        options: [
          B("Because Figma forbids icons and components in the same file", "Parce que Figma interdit icônes et composants dans un même fichier"),
          B("Because icons look better when they are displayed on their own", "Parce que les icônes sont plus belles affichées à part"),
          B("Because icons change in batches and are used outside components too", "Parce que les icônes changent par lots et servent aussi hors des composants"),
        ],
        answer: 2,
        why: B("Splitting follows the rhythm of change and the users. An icon batch can then be published without republishing every component, and the marketing team can use icons alone.",
          "Le découpage suit le rythme de changement et les utilisateurs. Un lot d'icônes peut alors se publier sans republier tous les composants, et l'équipe du site peut employer les icônes seules.") },
      { q: B("A product designer wants to fix a colour directly in the foundations library. What does the Cadenza process expect?",
          "Un designer produit veut corriger une couleur directement dans la bibliothèque des fondations. Qu'attend le processus de Cadenza ?"),
        options: [
          B("A proposal to the system team, who make and publish the change", "Une proposition à l'équipe du système, qui fait et publie le changement"),
          B("A direct edit, since any designer can improve the library", "Une modification directe, tout designer pouvant améliorer la bibliothèque"),
          B("A local copy of the colour in the product file, kept there for good", "Une copie locale de la couleur dans le fichier produit, gardée pour de bon"),
        ],
        answer: 0,
        why: B("Foundations affect every file, so a change goes through the people who own them. A local copy would recreate the drift the system was built to stop.",
          "Les fondations touchent tous les fichiers : un changement passe par ceux qui en ont la charge. Une copie locale recréerait la dérive que le système doit arrêter.") },
    ],
  },
}

const FOUND_DEEP: Record<string, Deepening> = {}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M1, track: 'course', glyph: 'layers', tint: '#2563eb', at: [12, 82], levels: FOUND,
    title: B('The foundations', 'Les fondations'),
    blurb: B('Why a system and for whom, an inventory of the existing product, principles and naming, and the map of Figma libraries.',
      "Pourquoi un système et pour qui, l'inventaire de l'existant, les principes et le nommage, et la carte des bibliothèques Figma."),
  },
]

export const DESIGNSYS_A: CoursePart = {
  modules: MODULES,
  enrich: { ...FOUND_ENRICH },
  deep: { ...FOUND_DEEP },
}
