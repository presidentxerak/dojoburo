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
          B("The library file contains more components than the Material library does", "Le fichier de bibliothèque contient plus de composants que celui de Material"),
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
          B("Green elements cannot be named until the final colours have all been chosen", "Les éléments verts ne peuvent être nommés avant le choix des couleurs définitives"),
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

const FOUND_DEEP: Record<string, Deepening> = {
  [deepKey(M1, 'ds-why')]: {
    intro: B("A design system is not a Figma file full of components. It is a set of shared decisions (values, components, patterns, rules) that several teams reuse, and the process that keeps them alive. Before building it, you need to know which problem it solves and for whom. This lesson shows how to gather evidence, interview the future users of the system, and write a one-page charter with AI as an editor. You will frame the system of Cadenza, the fictional scheduling app for music schools that runs through this course, and you will be able to refuse requests that fall outside its scope.",
      "Un design system n'est pas un fichier Figma rempli de composants. C'est un ensemble de décisions partagées (valeurs, composants, motifs, règles) que plusieurs équipes réutilisent, et le processus qui les fait vivre. Avant de le construire, il faut savoir quel problème il résout et pour qui. Ce cours montre comment rassembler des preuves, interroger les futurs utilisateurs du système et rédiger une charte d'une page avec l'IA pour éditrice. Vous cadrerez le système de Cadenza, l'app de planning fictive pour écoles de musique qui sert de fil rouge à cette formation, et vous saurez refuser les demandes qui sortent de son périmètre."),
    concepts: [
      { term: B('Design system', 'Design system'),
        def: B("Tokens, components, patterns, documentation and a process of change, shared by the teams that build a product. It is maintained like a product, with its own users.",
          "Des tokens, des composants, des motifs, une documentation et un processus d'évolution, partagés par les équipes qui construisent un produit. Il s'entretient comme un produit, avec ses propres utilisateurs.") },
      { term: B('Charter', 'Charte'),
        def: B("A one-page document that states the problem, the audiences, the scope, the non-goals and the signals of success. It is approved before any component is drawn.",
          "Un document d'une page qui énonce le problème, les publics, le périmètre, les exclusions et les signaux de réussite. Il est validé avant le dessin du moindre composant.") },
      { term: B('Audiences of the system', 'Publics du système'),
        def: B("The people who use the system to build: designers, developers, product managers, content writers, testers. Each one expects something different from it.",
          "Les personnes qui se servent du système pour construire : designers, développeurs, responsables produit, rédacteurs, testeurs. Chacune en attend quelque chose de différent.") },
      { term: B('Non-goal', 'Exclusion'),
        def: B("Something the system deliberately does not cover for now, written in the charter. It protects the scope against requests that would delay everything.",
          "Ce que le système ne couvre délibérément pas pour l'instant, écrit dans la charte. L'exclusion protège le périmètre contre les demandes qui retarderaient tout.") },
      { term: B('Signal of success', 'Signal de réussite'),
        def: B("An observable behaviour showing the system works, such as new screens built from library components. It replaces vanity counts such as the number of components.",
          "Un comportement observable qui montre que le système fonctionne, comme de nouveaux écrans construits avec les composants de la bibliothèque. Il remplace les décomptes flatteurs, comme le nombre de composants.") },
    ],
    walkthrough: {
      title: B("Inès frames the Cadenza design system in one week, before drawing anything.",
        "Inès cadre le design system de Cadenza en une semaine, avant de dessiner quoi que ce soit."),
      steps: [
        B("She gathers evidence: five screenshots of primary actions that all look different, and a recent release delayed because the mobile app and the back office disagreed on an error message. Why: a problem shown with evidence convinces the people who fund the work.",
          "Elle rassemble des preuves : cinq captures d'actions principales toutes différentes, et une livraison récente retardée parce que l'app mobile et le back-office ne s'accordaient pas sur un message d'erreur. Pourquoi : un problème montré avec des preuves convainc ceux qui financent le travail."),
        B("She asks the AI for twelve interview questions for three audiences, then talks to two designers, Malik and another developer, and Sophie. She notes their answers word for word. Why: the substance of the charter must come from its users, not from the model.",
          "Elle demande à l'IA douze questions d'entretien pour trois publics, puis s'entretient avec deux designers, Malik, un autre développeur et Sophie. Elle note leurs réponses mot pour mot. Pourquoi : la matière de la charte doit venir de ses utilisateurs, pas du modèle."),
        B("She pastes the notes and asks for a draft charter plus a list of contradictions. The AI notices that Sophie wants the marketing site covered while the developers want the back office first. Why: an open contradiction would split the first months between two targets.",
          "Elle colle les notes et demande un projet de charte, plus une liste des contradictions. L'IA relève que Sophie veut couvrir le site vitrine alors que les développeurs veulent d'abord le back-office. Pourquoi : une contradiction ouverte partagerait les premiers mois entre deux cibles."),
        B("Sophie decides: the back office and the mobile app come first, the marketing site becomes a written non-goal for three months. Why: a decision taken now saves the same debate every week.",
          "Sophie tranche : back-office et app mobile d'abord, le site vitrine devient une exclusion écrite pour trois mois. Pourquoi : une décision prise maintenant évite le même débat chaque semaine."),
        B("Inès writes three signals of success (new screens built from the library, fewer detached components, developers who find a component without asking) and gets the charter approved. Why: these signals will be checked later, when adoption is measured.",
          "Inès écrit trois signaux de réussite (de nouveaux écrans construits avec la bibliothèque, moins de composants détachés, des développeurs qui trouvent un composant sans demander) et fait valider la charte. Pourquoi : ces signaux seront vérifiés plus tard, quand on mesurera l'adoption."),
      ],
    },
    mistakes: [
      { wrong: B("Starting by copying a famous public design system and calling the result your own.",
          "Commencer par copier un design system public célèbre et appeler le résultat le vôtre."),
        fix: B("Study public systems as references, but decide what to adopt from the problems written in your charter. Borrow answers only to questions you actually have.",
          "Étudiez les systèmes publics comme références, mais décidez quoi en adopter à partir des problèmes écrits dans votre charte. N'empruntez des réponses qu'aux questions que vous vous posez vraiment.") },
      { wrong: B("Interviewing only designers, because the system is made in Figma.",
          "N'interroger que des designers, parce que le système se fabrique dans Figma."),
        fix: B("Include developers, the product lead and whoever writes or tests the interface. A system that developers do not adopt stays a drawing.",
          "Incluez les développeurs, la responsable produit et ceux qui rédigent ou testent l'interface. Un système que les développeurs n'adoptent pas reste un dessin.") },
      { wrong: B("Writing 'a consistent and modern product' as the goal, with no scope and no non-goals.",
          "Écrire « un produit cohérent et moderne » comme objectif, sans périmètre ni exclusions."),
        fix: B("State a scope limited in time, a list of what is excluded, and signals you can observe. A goal that cannot be checked cannot be defended either.",
          "Énoncez un périmètre limité dans le temps, une liste de ce qui est exclu, et des signaux observables. Un objectif invérifiable ne peut pas non plus se défendre.") },
    ],
    recap: [
      B("A design system is shared decisions plus the process that keeps them alive.", "Un design system, ce sont des décisions partagées et le processus qui les fait vivre."),
      B("Its users include developers, product managers and content writers, not only designers.", "Ses utilisateurs comptent des développeurs, des responsables produit et des rédacteurs, pas seulement des designers."),
      B("The charter states the problem with evidence, the scope and the non-goals.", "La charte énonce le problème avec des preuves, le périmètre et les exclusions."),
      B("AI prepares the interviews and edits the notes; the substance comes from people.", "L'IA prépare les entretiens et met en forme les notes ; la matière vient des personnes."),
    ],
    further: B("Read the public documentation of two design systems published by large organisations (several governments and companies publish theirs). For each, look for the page that explains why it exists and for whom. Compare what they say with your own charter, and note one idea to adopt and one to leave.",
      "Lisez la documentation publique de deux design systems publiés par de grandes organisations (plusieurs administrations et entreprises publient le leur). Pour chacun, cherchez la page qui explique pourquoi il existe et pour qui. Comparez ce qu'ils disent avec votre propre charte, et notez une idée à adopter et une à laisser."),
    more: [
      { q: B("Malik says: 'A design system is just a component library.' What is missing from his definition?",
          "Malik affirme : « Un design system, c'est juste une bibliothèque de composants. » Que manque-t-il à sa définition ?"),
        options: [
          B("Nothing, since components are the only part that developers use", "Rien, les composants étant la seule partie qu'utilisent les développeurs"),
          B("A mobile version of each component, drawn separately", "Une version mobile de chaque composant, dessinée à part"),
          B("The tokens, patterns, documentation and the process of change", "Les tokens, les motifs, la documentation et le processus d'évolution"),
        ],
        answer: 2,
        why: B("Components rest on tokens, combine into patterns, need documentation to be used well, and need a process to evolve. Without those layers, a library ages and drifts like the product before it.",
          "Les composants reposent sur des tokens, se combinent en motifs, demandent une documentation pour être bien employés et un processus pour évoluer. Sans ces couches, une bibliothèque vieillit et dérive comme le produit avant elle.") },
      { q: B("Sophie asks how she will know, in six months, whether the system was worth it. Which answer belongs in the charter?",
          "Sophie demande comment elle saura, dans six mois, si le système valait la peine. Quelle réponse a sa place dans la charte ?"),
        options: [
          B("Observable signals agreed now, such as screens built from the library", "Des signaux observables convenus maintenant, comme des écrans faits avec la bibliothèque"),
          B("The number of components drawn in the library by that date", "Le nombre de composants dessinés dans la bibliothèque à cette date"),
          B("A survey asking the team whether they like the new colours", "Une enquête demandant à l'équipe si elle aime les nouvelles couleurs"),
        ],
        answer: 0,
        why: B("Signals agreed in advance describe the change the system should bring. A count of components measures output, and a taste survey measures opinions, neither of which shows adoption.",
          "Des signaux convenus d'avance décrivent le changement que le système doit apporter. Un décompte de composants mesure la production, et une enquête de goût mesure des opinions : ni l'un ni l'autre ne montre l'adoption.") },
    ],
  },

  [deepKey(M1, 'ds-audit')]: {
    intro: B("An inventory is the photograph of what the product really contains today: every action, field, colour, text style, icon, spacing and shadow, captured and grouped. It turns a vague feeling of inconsistency into evidence, and it gives the system its first backlog. This lesson shows how to capture production screens, read the real values from the code, sort them with AI without letting it invent anything, and rank the problems. You will run the inventory of Cadenza and leave with a board, a table of values and five priorities.",
      "Un inventaire est la photographie de ce que contient vraiment le produit aujourd'hui : chaque action, champ, couleur, style de texte, icône, espacement et ombre, capturé et regroupé. Il transforme une vague impression d'incohérence en preuves, et donne au système son premier backlog. Ce cours montre comment capturer les écrans en production, relever les valeurs réelles du code, les trier avec l'IA sans la laisser rien inventer, et classer les problèmes. Vous mènerez l'inventaire de Cadenza et en repartirez avec un tableau, une table de valeurs et cinq priorités."),
    concepts: [
      { term: B('Interface inventory', "Inventaire d'interface"),
        def: B("A board where every instance of each kind of element is captured and grouped by category, so that variants can be seen and counted side by side.",
          "Un tableau où chaque occurrence de chaque type d'élément est capturée et regroupée par catégorie, pour voir et compter les variantes côte à côte.") },
      { term: B('Production as the source', 'La production comme source'),
        def: B("The rule of auditing what users actually see and what the code contains, rather than mockups that may be outdated or idealised.",
          "La règle qui consiste à auditer ce que voient vraiment les utilisateurs et ce que contient le code, plutôt que des maquettes parfois dépassées ou idéalisées.") },
      { term: B('Near duplicate', 'Quasi-doublon'),
        def: B("Two values or elements that differ so slightly that the difference is almost certainly accidental, such as two greys one shade apart.",
          "Deux valeurs ou éléments qui diffèrent si peu que l'écart est presque sûrement accidentel, comme deux gris à une nuance près.") },
      { term: B('Priority score', 'Score de priorité'),
        def: B("A simple ranking of categories by how often they appear and how inconsistent they are. The highest scores show where a shared token or component saves the most work.",
          "Un classement simple des catégories selon leur fréquence d'apparition et leur incohérence. Les scores les plus hauts montrent où un token ou un composant commun fait gagner le plus de travail.") },
    ],
    walkthrough: {
      title: B("Inès runs the inventory of Cadenza across the back office, the mobile app and the emails.",
        "Inès mène l'inventaire de Cadenza sur le back-office, l'app mobile et les e-mails."),
      steps: [
        B("She lists the key user journeys (create a lesson, cancel it, pay an invoice, reset a password) and captures each screen in production, including empty, loading and error states. Why: states are where inconsistencies hide, and mockups rarely show them.",
          "Elle liste les parcours clés (créer un cours, l'annuler, payer une facture, réinitialiser un mot de passe) et capture chaque écran en production, y compris les états vides, de chargement et d'erreur. Pourquoi : c'est dans les états que se cachent les incohérences, et les maquettes les montrent rarement."),
        B("In FigJam, she crops every element and places it in one column per category: actions, form fields, alerts, text styles, colours, icons, spacing, shadows. Why: side by side, nine primary actions are a fact no one can dispute.",
          "Dans FigJam, elle découpe chaque élément et le place dans une colonne par catégorie : actions, champs, alertes, styles de texte, couleurs, icônes, espacements, ombres. Pourquoi : côte à côte, neuf actions principales sont un fait que personne ne conteste."),
        B("With Malik, she opens the CSS Overview panel in Chrome DevTools on three pages and exports the colours, font sizes and other values. Why: the code gives exact values, which a screenshot cannot.",
          "Avec Malik, elle ouvre le panneau CSS Overview des DevTools de Chrome sur trois pages et relève couleurs, tailles de police et autres valeurs. Pourquoi : le code donne des valeurs exactes, ce qu'une capture ne peut pas faire."),
        B("She pastes the values into the AI with the instruction not to invent any colour, and gets a table grouping them by use with a proposed reference for each group. She checks each grouping side by side on screen. Why: the model sorts text well but does not see colours.",
          "Elle colle les valeurs dans l'IA avec la consigne de n'inventer aucune couleur, et obtient une table qui les regroupe par usage avec une référence proposée par groupe. Elle vérifie chaque regroupement côte à côte à l'écran. Pourquoi : le modèle trie bien le texte mais ne voit pas les couleurs."),
        B("She scores each category by frequency and inconsistency, and writes the top five into the backlog: colours of text, primary actions, form fields, alerts, spacing. Why: the backlog now comes from evidence, not from the most vocal opinion.",
          "Elle note chaque catégorie selon sa fréquence et son incohérence, et inscrit les cinq premières au backlog : couleurs de texte, actions principales, champs, alertes, espacements. Pourquoi : le backlog vient désormais des preuves, non de l'avis le plus bruyant."),
      ],
    },
    mistakes: [
      { wrong: B("Building the inventory from Figma mockups only, because they are easier to browse.",
          "Construire l'inventaire à partir des seules maquettes Figma, parce qu'elles sont plus faciles à parcourir."),
        fix: B("Capture production screens and read values from the code. Use the mockups as a second source, and note the gap between the two as a finding.",
          "Capturez les écrans en production et relevez les valeurs dans le code. Servez-vous des maquettes comme seconde source, et notez l'écart entre les deux comme un résultat.") },
      { wrong: B("Asking the AI to 'clean up' the colours, and getting a new palette that matches nothing in the product.",
          "Demander à l'IA de « nettoyer » les couleurs, et obtenir une palette nouvelle qui ne correspond à rien dans le produit."),
        fix: B("Ask it to group existing values and propose a reference among them, forbid invention, and check every grouping yourself with a picker.",
          "Demandez-lui de regrouper les valeurs existantes et de proposer une référence parmi elles, interdisez l'invention, et vérifiez vous-même chaque regroupement à la pipette.") },
      { wrong: B("Capturing only the happy path, without empty, loading or error states.",
          "Ne capturer que le parcours idéal, sans les états vides, de chargement ou d'erreur."),
        fix: B("Provoke each state on purpose (wrong password, empty list, slow network) and capture it. States are part of the system, and they are often the most inconsistent.",
          "Provoquez chaque état volontairement (mauvais mot de passe, liste vide, réseau lent) et capturez-le. Les états font partie du système, et ce sont souvent les plus incohérents.") },
    ],
    recap: [
      B("An inventory turns a feeling of inconsistency into evidence you can count.", "Un inventaire transforme une impression d'incohérence en preuves que l'on peut compter."),
      B("Audit production and the code first, mockups second.", "Auditez d'abord la production et le code, les maquettes ensuite."),
      B("AI sorts and groups values; you check what it cannot see.", "L'IA trie et regroupe les valeurs ; vous vérifiez ce qu'elle ne voit pas."),
      B("Ranking by frequency and inconsistency gives the first backlog.", "Le classement par fréquence et incohérence donne le premier backlog."),
    ],
    further: B("The idea of the interface inventory was popularised by Brad Frost in his writing on Atomic Design. Read his description of the method, then compare it with what you did: note one category you forgot and add it to your board.",
      "L'idée d'inventaire d'interface a été popularisée par Brad Frost dans ses écrits sur l'Atomic Design. Lisez sa description de la méthode, puis comparez-la à ce que vous avez fait : notez une catégorie oubliée et ajoutez-la à votre tableau."),
    more: [
      { q: B("Form fields appear on every screen in four styles; icons appear on a few screens in two styles. Which ranks higher in the backlog?",
          "Les champs figurent sur chaque écran en quatre styles, les icônes sur peu d'écrans en deux styles. Lequel monte dans le backlog ?"),
        options: [
          B("Form fields, frequent and inconsistent at the same time", "Les champs, à la fois fréquents et incohérents"),
          B("Icons, because they are quicker to redraw than form fields", "Les icônes, parce qu'elles se redessinent plus vite que les champs"),
          B("Both at the same level, since every category counts the same", "Les deux au même niveau, chaque catégorie comptant autant"),
        ],
        answer: 0,
        why: B("Priority comes from frequency multiplied by inconsistency. Fields appear everywhere and vary a lot, so a shared component will remove the most inconsistency and save the most work.",
          "La priorité vient de la fréquence croisée avec l'incohérence. Les champs sont partout et varient beaucoup : un composant commun supprimera le plus d'incohérence et fera gagner le plus de travail.") },
      { q: B("Why does Inès provoke a wrong password and an empty list before capturing the screens?",
          "Pourquoi Inès provoque-t-elle un mauvais mot de passe et une liste vide avant de capturer les écrans ?"),
        options: [
          B("To test the security of the login form of the application", "Pour tester la sécurité du formulaire de connexion de l'application"),
          B("To fill the board faster with screens that look different", "Pour remplir plus vite le tableau avec des écrans différents"),
          B("Because error and empty states belong to the system and vary a lot", "Parce que les états d'erreur et vides font partie du système et varient beaucoup"),
        ],
        answer: 2,
        why: B("States are part of every component. They are often designed last and in a hurry, which makes them the most inconsistent part of a product, and the inventory must show them.",
          "Les états font partie de chaque composant. Souvent conçus en dernier et dans l'urgence, ils sont la partie la plus incohérente d'un produit, et l'inventaire doit les montrer.") },
    ],
  },

  [deepKey(M1, 'ds-principles')]: {
    intro: B("Principles and names are the two foundations that are invisible on screen and present everywhere. Principles help a team decide when two good options compete; names let designers and developers talk about the same thing without translating. This lesson shows how to draw principles from real debates, write them in the form 'this over that', and build a naming grammar with a glossary that applies equally in Figma and in code. You will write those of Cadenza and test the convention with AI on twenty elements of the inventory.",
      "Les principes et les noms sont les deux fondations invisibles à l'écran et présentes partout. Les principes aident une équipe à décider quand deux bonnes options s'opposent ; les noms permettent au design et au code de parler de la même chose sans traduire. Ce cours montre comment tirer des principes de vrais débats, les écrire sous la forme « ceci plutôt que cela », et bâtir une grammaire de nommage avec un glossaire qui vaut autant dans Figma que dans le code. Vous rédigerez ceux de Cadenza et testerez la convention avec l'IA sur vingt éléments de l'inventaire."),
    concepts: [
      { term: B('Design principle', 'Principe de design'),
        def: B("A short rule that guides decisions when several good options compete. It is useful only if a reasonable team could choose the opposite.",
          "Une règle courte qui guide les décisions quand plusieurs bonnes options s'opposent. Elle n'est utile que si une équipe raisonnable pourrait choisir l'inverse.") },
      { term: B("'This over that' form", 'La forme « ceci plutôt que cela »'),
        def: B("A way of writing a principle that names what is preferred and what is given up, such as clarity over density. It makes the trade-off explicit.",
          "Une façon d'écrire un principe qui nomme ce que l'on préfère et ce à quoi l'on renonce, comme la clarté plutôt que la densité. Elle rend l'arbitrage explicite.") },
      { term: B('Naming grammar', 'Grammaire de nommage'),
        def: B("The fixed order of the parts of a name, such as category, role, variant, state. With it, Button/Primary/Large/Hover can be guessed before it is seen.",
          "L'ordre fixe des parties d'un nom, comme catégorie, rôle, variante, état. Grâce à elle, Button/Primary/Large/Hover se devine avant d'être vu.") },
      { term: B('Glossary', 'Glossaire'),
        def: B("The closed list of words allowed in names (primary, secondary, subtle, strong, disabled), each with its meaning. A new word enters only by decision.",
          "La liste fermée des mots autorisés dans les noms (primary, secondary, subtle, strong, disabled), chacun avec son sens. Un mot nouveau n'y entre que sur décision.") },
      { term: B('Role name and appearance name', "Nom de rôle et nom d'apparence"),
        def: B("A role name says what something is for (text-muted); an appearance name says what it looks like (grey-light). Role names survive a redesign; appearance names do not.",
          "Un nom de rôle dit à quoi sert un élément (text-muted) ; un nom d'apparence dit à quoi il ressemble (grey-light). Les noms de rôle survivent à une refonte, pas les noms d'apparence.") },
    ],
    walkthrough: {
      title: B("Inès writes the principles and naming convention of Cadenza with the team and the AI.",
        "Inès rédige les principes et la convention de nommage de Cadenza avec l'équipe et l'IA."),
      steps: [
        B("She lists five past debates: dense tables or cards for the lesson list, colour or text for statuses, modal or full page for editing, and two others. For each, she notes the arguments and the final choice. Why: real debates show the trade-offs the team actually faces.",
          "Elle liste cinq débats passés : tableaux denses ou cartes pour la liste des cours, couleur ou texte pour les statuts, fenêtre modale ou page entière pour l'édition, et deux autres. Pour chacun, elle note les arguments et le choix final. Pourquoi : les vrais débats montrent les arbitrages que l'équipe affronte réellement."),
        B("She asks the AI to turn each settlement into a principle 'X over Y', with an example and a counter-example, and to merge duplicates. Four remain, including 'Clarity over density' and 'Words over colour alone for statuses'. Why: the second one also protects people who do not perceive colours well.",
          "Elle demande à l'IA de faire de chaque arbitrage un principe « X plutôt que Y », avec un exemple et un contre-exemple, et de fusionner les doublons. Il en reste quatre, dont « La clarté plutôt que la densité » et « Des mots plutôt que la couleur seule pour les statuts ». Pourquoi : le second protège aussi les personnes qui perçoivent mal les couleurs."),
        B("With Malik, she fixes the naming grammar: English words, category then role then variant then state; slashes in Figma component names (they create groups in the assets panel), dots or hyphens in code according to the platform. Why: the same words on both sides, only the separator changes.",
          "Avec Malik, elle fixe la grammaire : mots anglais, catégorie puis rôle puis variante puis état ; des barres obliques dans les noms de composants Figma (elles créent des groupes dans le panneau des ressources), des points ou des tirets dans le code selon la plateforme. Pourquoi : les mêmes mots des deux côtés, seul le séparateur change."),
        B("She writes a glossary of about fifteen allowed words, each with its meaning, and asks the AI to rename twenty elements of the inventory, marking every guess. Four guesses come back. Why: each guess points to a missing rule or word.",
          "Elle rédige un glossaire d'une quinzaine de mots autorisés, chacun avec son sens, et demande à l'IA de renommer vingt éléments de l'inventaire en marquant chaque hésitation. Quatre hésitations reviennent. Pourquoi : chacune signale une règle ou un mot manquant."),
        B("She adds a rule for status badges and the word 'inverse' for elements on dark backgrounds, then reruns the test until no guess remains. Why: a convention is finished when a stranger, or a model, can apply it without asking.",
          "Elle ajoute une règle pour les badges de statut et le mot « inverse » pour les éléments sur fond sombre, puis relance le test jusqu'à ce qu'il ne reste aucune hésitation. Pourquoi : une convention est terminée quand un inconnu, ou un modèle, peut l'appliquer sans demander."),
      ],
    },
    mistakes: [
      { wrong: B("Writing principles such as 'simple', 'beautiful' or 'user first'.",
          "Écrire des principes comme « simple », « beau » ou « l'utilisateur d'abord »."),
        fix: B("Write each principle as a choice between two good qualities, and check that it would have settled at least one past debate.",
          "Écrivez chaque principe comme un choix entre deux bonnes qualités, et vérifiez qu'il aurait tranché au moins un débat passé.") },
      { wrong: B("Naming tokens and components after their look, such as blue-dark or big-grey-card.",
          "Nommer tokens et composants d'après leur apparence, comme blue-dark ou big-grey-card."),
        fix: B("Name by role (action-primary, surface-raised) and keep appearance names for the raw palette only. A redesign then changes values, not names.",
          "Nommez par rôle (action-primary, surface-raised) et réservez les noms d'apparence à la palette brute. Une refonte change alors des valeurs, pas des noms.") },
      { wrong: B("Letting design and code each keep their own vocabulary, with a correspondence table between them.",
          "Laisser le design et le code garder chacun leur vocabulaire, avec une table de correspondance entre les deux."),
        fix: B("Agree on one vocabulary with the developers and allow only the separator to differ by platform. A correspondence table always ends up outdated.",
          "Convenez d'un seul vocabulaire avec les développeurs et ne laissez varier que le séparateur selon la plateforme. Une table de correspondance finit toujours dépassée.") },
    ],
    recap: [
      B("A useful principle names what it gives up.", "Un principe utile nomme ce à quoi il renonce."),
      B("Principles come from real debates, with an example and a counter-example.", "Les principes viennent de vrais débats, avec un exemple et un contre-exemple."),
      B("A naming grammar fixes the order: category, role, variant, state.", "Une grammaire de nommage fixe l'ordre : catégorie, rôle, variante, état."),
      B("Names describe roles, not appearances, and are the same in Figma and in code.", "Les noms décrivent des rôles, pas des apparences, et sont les mêmes dans Figma et dans le code."),
      B("Every name the AI has to guess reveals a gap in the convention.", "Chaque nom que l'IA doit deviner révèle un trou dans la convention."),
    ],
    further: B("Take the principles of a public design system and test each one: could a reasonable team choose the opposite? Keep those that pass, and rewrite the others in the form 'this over that'. You will see how rare truly useful principles are, and how much clearer yours become.",
      "Prenez les principes d'un design system public et testez chacun : une équipe raisonnable pourrait-elle choisir l'inverse ? Gardez ceux qui passent, et réécrivez les autres sous la forme « ceci plutôt que cela ». Vous verrez combien les principes vraiment utiles sont rares, et combien les vôtres deviennent plus clairs."),
    more: [
      { q: B("The team plans a new brand colour next year. Which token name will survive the change?",
          "L'équipe prévoit une nouvelle couleur de marque l'an prochain. Quel nom de token survivra au changement ?"),
        options: [
          B("purple-600, since it describes the colour precisely", "purple-600, puisqu'il décrit précisément la couleur"),
          B("action-primary, since it says what the colour is for", "action-primary, puisqu'il dit à quoi sert la couleur"),
          B("cadenza-new-2025, since it records when it was created", "cadenza-new-2025, puisqu'il garde la date de création"),
        ],
        answer: 1,
        why: B("A role name stays true when the value changes: the primary action is still the primary action in another colour. An appearance name becomes false the day the colour changes.",
          "Un nom de rôle reste vrai quand la valeur change : l'action principale reste l'action principale dans une autre couleur. Un nom d'apparence devient faux le jour où la couleur change.") },
      { q: B("Why does Inès keep the same English words in Figma and in code, changing only the separator?",
          "Pourquoi Inès garde-t-elle les mêmes mots anglais dans Figma et dans le code, en ne changeant que le séparateur ?"),
        options: [
          B("Because Figma only accepts English names for its components", "Parce que Figma n'accepte que des noms anglais pour ses composants"),
          B("Because English names make the product look more professional", "Parce que des noms anglais donnent au produit un air plus professionnel"),
          B("So that a name read in Figma can be found in code without translation", "Pour qu'un nom lu dans Figma se retrouve dans le code sans traduction"),
        ],
        answer: 2,
        why: B("Code is usually written in English, so English names avoid a translation step at every handoff. Each platform keeps its own separator, but the words, and therefore the search, stay identical.",
          "Le code s'écrit généralement en anglais : des noms anglais évitent une traduction à chaque passage de relais. Chaque plateforme garde son séparateur, mais les mots, et donc la recherche, restent identiques.") },
    ],
  },

  [deepKey(M1, 'ds-files')]: {
    intro: B("A design system lives in Figma as a set of library files that other files consume. How you split those files decides what can be published alone, how fast files open, and who can change what. This lesson explains the logic of libraries and publishing, proposes a structure for a small team, a page layout shared by every library, and a simple rule for edit rights. You will draw the file map of Cadenza and test the publishing flow on a single value.",
      "Un design system vit dans Figma sous forme de fichiers de bibliothèque que d'autres fichiers consomment. Le découpage de ces fichiers décide de ce qui se publie seul, de la vitesse d'ouverture et de qui peut modifier quoi. Ce cours explique la logique des bibliothèques et de la publication, propose une structure pour une petite équipe, une organisation de pages commune à chaque bibliothèque et une règle simple pour les droits. Vous dessinerez la carte des fichiers de Cadenza et testerez le circuit de publication sur une seule valeur."),
    concepts: [
      { term: B('Library', 'Bibliothèque'),
        def: B("A Figma file whose variables, styles and components are published so that other files can use them. Each library is published and enabled separately.",
          "Un fichier Figma dont les variables, les styles et les composants sont publiés pour que d'autres fichiers les emploient. Chaque bibliothèque se publie et s'active séparément.") },
      { term: B('Consumer file', 'Fichier consommateur'),
        def: B("A product file that enables a library and uses its elements. It receives updates when the library is republished, and its owner accepts them.",
          "Un fichier produit qui active une bibliothèque et en emploie les éléments. Il reçoit les mises à jour quand la bibliothèque est republiée, et son responsable les accepte.") },
      { term: B('Foundations file', 'Fichier des fondations'),
        def: B("The library holding variables and styles (colour, type, spacing, radius, elevation). It changes rarely and every other library depends on it.",
          "La bibliothèque qui porte les variables et les styles (couleur, typographie, espacement, rayon, élévation). Elle change rarement et toutes les autres bibliothèques en dépendent.") },
      { term: B('Branch or sandbox', 'Branche ou bac à sable'),
        def: B("A place to prepare changes away from consumers: a branch of the library on plans that offer branching, or a separate sandbox file otherwise.",
          "Un lieu pour préparer des changements à l'écart des consommateurs : une branche de la bibliothèque sur les offres qui la proposent, ou sinon un fichier bac à sable séparé.") },
    ],
    walkthrough: {
      title: B("Inès sets up the Figma files of the Cadenza design system for a team of six.",
        "Inès met en place les fichiers Figma du design system de Cadenza pour une équipe de six personnes."),
      steps: [
        B("She creates a project dedicated to the system, separate from the product projects, with three library files: Foundations, Components, Icons. Why: three rhythms of change, three owners, and no file without a reason to exist.",
          "Elle crée un projet dédié au système, séparé des projets produit, avec trois fichiers de bibliothèque : Foundations, Components, Icons. Pourquoi : trois rythmes de changement, trois responsables, et aucun fichier sans raison d'être."),
        B("She gives each file the same pages: Cover (name, status, owner), Getting started, Changelog, one page per topic, Archive. Why: someone who knows one library can find their way in the others.",
          "Elle donne à chaque fichier les mêmes pages : Cover (nom, statut, responsable), Getting started, Changelog, une page par sujet, Archive. Pourquoi : qui connaît une bibliothèque se repère dans les autres."),
        B("She restricts edit access to herself and one other designer; the rest of the team can view and use. Requests go through a form in FigJam that the system team reviews each week. Why: one entry point for changes keeps the libraries consistent.",
          "Elle réserve la modification à elle-même et à une autre designer ; le reste de l'équipe consulte et emploie. Les demandes passent par un formulaire dans FigJam que l'équipe du système revoit chaque semaine. Pourquoi : une seule porte d'entrée pour les changements garde les bibliothèques cohérentes."),
        B("She publishes Foundations, enables it in Components, then in a test product file. She changes one colour, republishes, and watches the update arrive. Why: understanding the flow before real work avoids surprises.",
          "Elle publie Foundations, l'active dans Components, puis dans un fichier produit de test. Elle change une couleur, republie, et observe la mise à jour arriver. Pourquoi : comprendre le circuit avant le vrai travail évite les surprises."),
        B("She checks in the Figma help center which features of their plan she can rely on (branching, library analytics, number of modes), and notes them on the Cover page. Why: the process must not depend on a feature the team does not have.",
          "Elle vérifie dans le centre d'aide de Figma les fonctions de leur offre sur lesquelles elle peut compter (branches, statistiques de bibliothèque, nombre de modes), et les note sur la page Cover. Pourquoi : le processus ne doit pas dépendre d'une fonction que l'équipe n'a pas."),
      ],
    },
    mistakes: [
      { wrong: B("Putting variables, components, icons and experiments in one large file.",
          "Mettre variables, composants, icônes et essais dans un seul grand fichier."),
        fix: B("Split by rhythm of change and by users, so that each library can be published on its own, and keep experiments in a branch or sandbox.",
          "Découpez selon le rythme de changement et les utilisateurs, pour que chaque bibliothèque se publie seule, et gardez les essais dans une branche ou un bac à sable.") },
      { wrong: B("Creating a library per component family, ending with a dozen files for a small team.",
          "Créer une bibliothèque par famille de composants, et finir avec une douzaine de fichiers pour une petite équipe."),
        fix: B("Start with the fewest files that can be published separately, and split later only when a file becomes too slow or has a different owner.",
          "Commencez avec le moins de fichiers publiables séparément, et ne découpez plus tard que si un fichier devient trop lent ou change de responsable.") },
      { wrong: B("Giving everyone edit access to the libraries so that fixes go faster.",
          "Donner à tout le monde les droits de modification sur les bibliothèques pour que les corrections aillent plus vite."),
        fix: B("Keep editing to the system team and give everyone else a clear way to propose a change. Speed comes from a short review, not from open edits.",
          "Réservez la modification à l'équipe du système et donnez à tous une façon claire de proposer un changement. La rapidité vient d'une relecture courte, pas de droits ouverts.") },
    ],
    recap: [
      B("Libraries are published and enabled file by file.", "Les bibliothèques se publient et s'activent fichier par fichier."),
      B("Split files by rhythm of change and by users, starting small.", "Découpez les fichiers selon le rythme de changement et les utilisateurs, en commençant petit."),
      B("Every library follows the same page structure, from cover to archive.", "Chaque bibliothèque suit la même structure de pages, de la couverture aux archives."),
      B("Editing is reserved to the system team; others propose changes.", "La modification est réservée à l'équipe du système ; les autres proposent."),
    ],
    further: B("Open the Figma help center and read the pages on publishing libraries and on accepting updates in a consumer file. Then write, on the Cover page of your foundations file, three lines explaining to a newcomer how to enable the library and how to accept an update.",
      "Ouvrez le centre d'aide de Figma et lisez les pages sur la publication des bibliothèques et l'acceptation des mises à jour dans un fichier consommateur. Écrivez ensuite, sur la page Cover de votre fichier des fondations, trois lignes qui expliquent à un nouvel arrivant comment activer la bibliothèque et accepter une mise à jour."),
    more: [
      { q: B("Inès changes the spacing values in Foundations. What must happen before product designers see the change?",
          "Inès change les valeurs d'espacement dans Foundations. Que doit-il se passer avant que les designers produit voient le changement ?"),
        options: [
          B("Nothing, since every edit appears in consumer files at once", "Rien, chaque modification apparaissant aussitôt dans les fichiers consommateurs"),
          B("She publishes the library, then each consumer file accepts the update", "Elle publie la bibliothèque, puis chaque fichier consommateur accepte la mise à jour"),
          B("She copies the new values by hand into every product file", "Elle recopie à la main les nouvelles valeurs dans chaque fichier produit"),
        ],
        answer: 1,
        why: B("Library changes stay local until published, then consumers receive an update they accept. This two-step flow is what lets the system team prepare and review changes calmly.",
          "Les changements d'une bibliothèque restent locaux jusqu'à la publication, puis les consommateurs reçoivent une mise à jour qu'ils acceptent. Ce circuit en deux temps permet à l'équipe du système de préparer et relire ses changements au calme.") },
      { q: B("The Components file becomes slow to open after two years. What is the reasonable next step?",
          "Le fichier Components devient lent à ouvrir après deux ans. Quelle est l'étape raisonnable suivante ?"),
        options: [
          B("Split it into a few files by family, each published separately", "Le découper en quelques fichiers par famille, publiés chacun séparément"),
          B("Merge it with Foundations and Icons to have a single file to open", "Le fusionner avec Foundations et Icons pour n'avoir qu'un fichier à ouvrir"),
          B("Delete the archive page and all its deprecated components at once", "Supprimer d'un coup la page d'archives et tous ses composants dépréciés"),
        ],
        answer: 0,
        why: B("Splitting later, when a real need appears, is the rule. Merging would make things slower, and deleting deprecated components at once would break the files that still use them.",
          "Découper plus tard, quand un vrai besoin apparaît, est la règle. Fusionner ralentirait encore, et supprimer d'un coup les composants dépréciés casserait les fichiers qui les emploient encore.") },
    ],
  },
}

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
