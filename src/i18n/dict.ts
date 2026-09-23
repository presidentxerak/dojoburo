// LE DICTIONNAIRE · chaque phrase de l'interface, dans les deux langues, sur
// deux lignes qui se lisent ensemble.
//
// Voir l'en-tête de i18n/lang pour le raisonnement. Le point essentiel, répété
// ici parce que c'est ici qu'on serait tenté d'y déroger : on ne sépare pas
// l'anglais et le français dans deux fichiers. Deux fichiers parallèles
// dérivent en silence, et personne ne relit un fichier de traduction.
//
// CE QUI ENTRE ICI, ET CE QUI N'Y ENTRE PAS.
//
// Ici : les phrases de l'INTERFACE. Navigation, boutons, libellés, titres de
// sections, messages d'état. Elles sont courtes, elles se répètent, et elles
// n'appartiennent à aucun cours.
//
// PAS ici : la PROSE DES COURS. Les leçons, les fiches d'agents, les leviers
// de sobriété, l'iceberg. Ce sont des milliers de mots qui vivent déjà dans
// des fichiers de données structurés, avec leurs propres gardes, et les
// arracher pour les mettre dans un dictionnaire plat détruirait cette
// structure. Ils seront traduits DANS leur fichier, en ajoutant une seconde
// version à côté de la première, cours par cours. Voir la note de couverture
// plus bas : ce qui n'est pas traduit doit être COMPTÉ, pas oublié.
//
// LA CLÉ DÉCRIT L'ENDROIT, pas le texte anglais. `nav.pricing`, jamais
// `Pricing` : une clé qui est sa propre valeur anglaise devient fausse dès
// qu'on reformule l'anglais, et on se retrouve à renommer des clés pour
// corriger une virgule.
import { type Lang } from './lang'

export interface Entry { en: string; fr: string }

export const DICT = {
  // ---- la navigation du site --------------------------------------------
  // Les libellés des PILIERS ne sont pas ici : ils viennent de
  // data/positioning, qui est leur source unique pour les six surfaces qui
  // les affichent. Les traduire demande d'ajouter le français DANS le pilier,
  // pas d'en faire une copie ici qui divergerait au premier renommage.
  'nav.pricing': { en: 'Pricing', fr: 'Tarifs' },
  'nav.courses': { en: 'Courses', fr: 'Les cours' },
  'nav.path': { en: 'The path', fr: 'Le parcours' },
  'nav.trades': { en: 'Trades', fr: 'Les métiers' },
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.frameworks': { en: 'Frameworks', fr: 'Frameworks' },
  'nav.guide': { en: 'App setup guide', fr: 'Guide de branchement' },
  'nav.crew': { en: 'The crew', fr: "L'équipage" },
  'nav.terms': { en: 'Terms', fr: 'Conditions' },
  'nav.privacy': { en: 'Privacy', fr: 'Confidentialité' },

  // ---- l'en-tête ---------------------------------------------------------
  'header.enter': { en: 'Enter the dojo', fr: 'Entrer dans le dojo' },
  'header.free': { en: 'free', fr: 'gratuit' },
  'header.signin': { en: 'Sign in', fr: 'Se connecter' },
  'header.signup': { en: 'Sign up', fr: "S'inscrire" },
  'header.menu': { en: 'Menu', fr: 'Menu' },
  'header.mydojo': { en: 'My dojo', fr: 'Mon dojo' },
  'header.enterArrow': { en: 'Enter the dojo', fr: 'Entrer dans le dojo' },
  'header.close': { en: 'Close', fr: 'Fermer' },

  // ---- le sélecteur de langue -------------------------------------------
  // Le libellé du bouton est dans la langue COURANTE, mais les deux choix
  // qu'il ouvre portent chacun leur propre langue · voir LANG_LABEL.
  'lang.label': { en: 'Language', fr: 'Langue' },
  'lang.switch': { en: 'Change language', fr: 'Changer de langue' },

  // ---- ce qui est partiellement traduit ---------------------------------
  // L'AVERTISSEMENT LE PLUS IMPORTANT DU LOT.
  //
  // Traduire un site de cette taille prend plusieurs lots. Entre le premier et
  // le dernier, quelqu'un qui choisit le français verra du français autour
  // d'un cours en anglais. Le pire serait de ne rien dire : la personne croit
  // à un défaut, ne sait pas si le reste viendra, et repart. On le dit donc à
  // l'endroit exact où ça se produit, avec le chiffre réel, calculé.
  // LA PHRASE DOIT SUIVRE CE QUI EST VRAI. Elle disait « le contenu des cours
  // est en cours de traduction » alors que les trois cours, les douze agents,
  // les quinze frameworks et le robot le sont désormais. Une réserve qui
  // reste après avoir cessé d'être vraie use la confiance exactement comme
  // une promesse en trop : elle nomme donc ce qui manque encore.
  'i18n.partial': {
    en: 'The courses are in French. The library, the team cards and the belts are still in English.',
    fr: "Les cours sont en français. La bibliothèque, les cartes d'équipe et les ceintures sont encore en anglais.",
  },
  'i18n.partialShort': { en: 'Library still in English', fr: 'Bibliothèque encore en anglais' },

  // ---- la page d'accueil -------------------------------------------------
  // LA PROMESSE ET LE SOUS-TITRE NE SONT PAS ICI · ils vivent dans
  // data/positioning avec leur version française, parce que ce sont le
  // POSITIONNEMENT et que six surfaces les lisent. Les recopier ici rouvrirait
  // la faille que ce fichier-là existe pour fermer.
  'lp.heroGo': { en: 'Enter the dojo · free', fr: 'Entrer dans le dojo · gratuit' },
  'lp.heroHow': { en: 'How it works', fr: 'Comment ça marche' },
  'lp.heroLearn': { en: 'tracks', fr: 'parcours' },
  'lp.lessons': { en: 'lessons', fr: 'leçons' },
  'lp.hours': { en: 'hours', fr: 'heures' },
  'lp.noCode': { en: 'no code, no account', fr: 'sans code, sans compte' },
  'lp.marquee': {
    en: 'The tools the course teaches you to wire, and what each one really costs',
    fr: "Les outils que le cours apprend à brancher, et ce que chacun coûte vraiment",
  },
  'lp.coursesPill': { en: 'courses · free · nothing to install', fr: 'cours · gratuits · rien à installer' },
  'lp.coursesH2a': { en: 'A training centre, and', fr: 'Un centre de formation, et' },
  'lp.coursesH2b': { en: 'courses in it', fr: 'cours dedans' },
  'lp.coursesLead': {
    en: 'They are taken in this order, and each one is useless without the one before it. You cannot make an agent cheap before it works, and you cannot make it work before you can write the instruction it runs on.',
    fr: "Ils se suivent dans cet ordre, et chacun ne sert à rien sans le précédent. On ne rend pas un agent sobre avant qu'il fonctionne, et on ne le fait pas fonctionner avant de savoir écrire l'instruction sur laquelle il tourne.",
  },
  'lp.open': { en: 'Open', fr: 'Ouvrir' },
  'lp.pillarsPill': { en: 'things to do here · all of them teaching', fr: "choses à faire ici · toutes pédagogiques" },
  'lp.pillarsH2': { en: 'A dojo, not a factory', fr: 'Un dojo, pas une usine' },
  'lp.acPill': { en: 'Free · read in the browser · nothing to install', fr: 'Gratuit · se lit dans le navigateur · rien à installer' },
  'lp.acH2': { en: 'Start from zero, finish with something that runs', fr: 'Partez de zéro, finissez avec quelque chose qui tourne' },
  'lp.acLead': {
    en: 'Written for someone who has never heard the words agent, token or context window, and taken all the way to a working system they understand line by line. One idea per block, a real example every time an abstraction appears, and honest numbers throughout.',
    fr: "Écrit pour quelqu'un qui n'a jamais entendu les mots agent, jeton ou fenêtre de contexte, et mené jusqu'à un système qui marche et qu'il comprend ligne à ligne. Une idée par bloc, un exemple concret dès qu'une abstraction apparaît, et des chiffres honnêtes du début à la fin.",
  },
  'lp.frPill': { en: 'The part most courses skip', fr: 'La partie que la plupart des cours sautent' },
  'lp.frH2': { en: 'Every run has a price. Most people never see it.', fr: "Chaque exécution a un prix. Presque personne ne le voit." },
  'lp.frLead': {
    en: 'A prompt that carries the whole conversation on every turn, an agent that re-reads a file it already knows, a loop nobody stopped: none of it shows up until the invoice does. The course measures it in two units at once: tokens and euros. Then it gives you the levers, the settings you choose before writing a word, and the way the prompt itself is written: each with the saving it actually buys rather than the one it is said to buy.',
    fr: "Un prompt qui traîne toute la conversation à chaque tour, un agent qui relit un fichier qu'il connaît déjà, une boucle que personne n'a arrêtée : rien de tout ça ne se voit avant la facture. Le cours le mesure dans deux unités à la fois : les jetons et les euros. Puis il donne les leviers, les réglages choisis avant d'écrire un mot et la façon dont le prompt lui-même est écrit, chacun avec ce qu'il rapporte vraiment plutôt qu'avec ce qu'on lui prête.",
  },
  'lp.frN1': { en: 'Measure', fr: 'Mesurer' },
  'lp.frN1s': { en: 'What one conversation really costs', fr: "Ce qu'une conversation coûte vraiment" },
  'lp.frN2': { en: 'Set up', fr: 'Régler' },
  'lp.frN2s': { en: 'Tools, caps, cache, when to reset', fr: 'Outils, plafonds, cache, quand repartir de zéro' },
  'lp.frN3': { en: 'Write', fr: 'Écrire' },
  'lp.frN3s': { en: 'Bans not adjectives · ask once', fr: "Des interdits, pas des adjectifs · demander une fois" },
  'lp.frGo': { en: 'Open the calculator · put your own numbers in', fr: 'Ouvrir le calculateur · avec vos propres chiffres' },
  'lp.dojoPill': { en: 'A sandbox · nothing here calls a paid model', fr: "Un bac à sable · rien ici n'appelle de modèle payant" },
  'lp.dojoH2a': { en: 'A room where', fr: 'Une salle où' },
  'lp.dojoH2b': { en: 'agents are asleep', fr: 'agents dorment' },
  'lp.dojoLead': {
    en: 'They are asleep because none of them exists yet. Pick the shape of problem you actually have and that one wakes up, then you build it from a blank page. Below is the same room from the other side: open a character, read the brief that makes it what it is, change it and watch what changes.',
    fr: "Ils dorment parce qu'aucun n'existe encore. Choisissez la forme de problème que vous avez vraiment et celui-là se réveille, puis vous le construisez depuis la page blanche. En dessous, la même salle vue de l'autre côté : ouvrez un personnage, lisez le brief qui le rend ce qu'il est, changez-le et regardez ce qui change.",
  },
  'lp.dojoGo': { en: 'Walk in and pick one', fr: 'Entrer et en choisir un' },
  'lp.notH2': { en: 'What this is not', fr: "Ce que ce n'est pas" },
  'lp.notLead': {
    en: 'If you came here to have the work done for you, this is the wrong shop, and we would rather you knew now. If you came here to learn how it is done, and what it costs, start with lesson one.',
    fr: "Si vous venez pour qu'on fasse le travail à votre place, vous n'êtes pas à la bonne adresse, et nous préférons que vous le sachiez maintenant. Si vous venez apprendre comment ça se fait et ce que ça coûte, commencez par la première leçon.",
  },
  'lp.priceH2': { en: 'The course is free. The library is the paid part.', fr: "Le cours est gratuit. La bibliothèque est la partie payante." },
  'lp.finalH2': { en: 'Ready to start?', fr: 'Prêt à commencer ?' },
  'lp.finalGo': { en: 'Pick your agent', fr: 'Choisissez votre agent' },
  'lp.finalFoot': { en: 'Free · read in your browser · no account to begin', fr: 'Gratuit · se lit dans votre navigateur · aucun compte pour commencer' },

  // ---- les tarifs --------------------------------------------------------
  // Ce que les cartes ne tirent PAS de data/plans : les mots de l'interface
  // autour des formules. Les taglines et les listes, elles, vivent dans la
  // formule, parce que c'est ce qu'on vend et que ça n'a qu'une source.
  'price.popular': { en: 'Most popular', fr: 'La plus prise' },
  'price.start': { en: 'Get started', fr: 'Commencer' },
  'price.choose': { en: 'Choose', fr: 'Choisir' },
  // L'UNITÉ D'UN PRIX · elle disait « par mois » et « par siège » du temps de
  // l'abonnement. Le produit se vend maintenant une fois, et un libellé
  // périmé sur une carte de prix est la pire chose à laisser traîner : on ne
  // se trompe pas sur un lien, on se trompe sur ce qu'on croit acheter.
  'price.forever': { en: 'free, for good', fr: 'gratuit, pour de bon' },
  'price.once': { en: 'once, yours for good', fr: 'une fois, acquis pour de bon' },
  'price.addOn': { en: 'added on', fr: 'en supplément' },
  'price.after': { en: 'after', fr: 'après' },
  'price.notMetered': { en: 'Nothing here is metered.', fr: "Rien ici n'est compté." },
  'price.noMeterBody': {
    en: 'Learning is free and stays free, the diploma costs nothing, and no plan counts your runs, because the dojo is a worked example and calls no paid model. A paid plan buys the files and, on School, the seats · when you take an agent away and run it for real, it runs on your own key and your provider bills you directly, never us.',
    fr: "Apprendre est gratuit et le reste, le diplôme ne coûte rien, et aucune formule ne compte vos exécutions, parce que le dojo est un exemple travaillé qui n'appelle aucun modèle payant. Une formule payante achète les fichiers et, pour School, les sièges · le jour où vous emportez un agent et le faites tourner pour de vrai, il tourne sur votre propre clé et c'est votre fournisseur qui vous facture, jamais nous.",
  },
  'price.entTitle': { en: 'Business / Enterprise', fr: 'Entreprise' },
  'price.entBody': {
    en: 'Self-hosted or local worker, SAML SSO & security review, a dedicated MCP hub with an SLA, budgets & spend controls, custom connectors and dedicated support. Keep everything on your own infrastructure.',
    fr: "Hébergement chez vous ou exécution locale, SSO SAML et revue de sécurité, un concentrateur MCP dédié avec engagement de service, budgets et plafonds de dépense, connecteurs sur mesure et support dédié. Tout reste sur votre propre infrastructure.",
  },
  'price.askBot': { en: 'Ask Dojobot', fr: 'Demander à Dojobot' },

  // ---- les cours de design -----------------------------------------------
  // Les libellés de la page. Le CONTENU des leçons vit dans
  // data/designCourses, avec ses deux langues dans la même entrée · ces cours
  // sont nés bilingues, et c'est la raison pour laquelle le lot de traduction
  // est passé avant eux.
  'dc.like': { en: 'Think of it as', fr: 'Voyez ça comme' },
  'dc.words': { en: 'The words we are going to use', fr: 'Les mots que nous allons employer' },
  'dc.steps': { en: 'What you actually do', fr: 'Ce que vous faites, concrètement' },
  'dc.trap': { en: 'The beginner trap', fr: 'Le piège du débutant' },
  'dc.check': { en: 'How to know it is right', fr: 'Comment savoir que c\'est juste' },
  'dc.applied': { en: 'Applied', fr: 'Appliqué' },
  'dc.markApplied': { en: 'I have applied this', fr: "Je l'ai appliqué" },
  'dc.of': { en: 'of', fr: 'sur' },
  'dc.noClicksH2': { en: 'There are no menu paths here, on purpose', fr: "Aucun chemin de menu ici, et c'est voulu" },
  'dc.noClicksBody': {
    en: 'Interfaces move several times a year. A course built on where the buttons are today sends someone clicking at a menu that has been renamed, it does not work, and they conclude they misunderstood. What does not move is the model: what a frame is, what a constraint does, why a component exists. Hold that, and finding the current button takes ten minutes instead of a course.',
    fr: "Les interfaces bougent plusieurs fois par an. Un cours bâti sur l'emplacement des boutons du jour envoie quelqu'un cliquer sur un menu qui a été renommé, ça ne marche pas, et il en conclut qu'il a mal compris. Ce qui ne bouge pas, c'est le modèle : ce qu'est un cadre, ce que fait une contrainte, pourquoi un composant existe. Tenez ça, et trouver le bouton du moment prend dix minutes au lieu d'un cours.",
  },

  // ---- l'espace ressources -----------------------------------------------
  'res.h': { en: 'Take a course with you', fr: 'Emportez un cours' },
  'res.lead': {
    en: 'One memo per course, built from the lessons themselves at the moment you ask for it. Nothing is stored, so a memo can never hold an older version of a lesson than the one on the page.',
    fr: "Un mémo par cours, construit depuis les leçons elles-mêmes au moment où vous le demandez. Rien n'est stocké, donc un mémo ne peut jamais porter une version plus ancienne qu'une leçon de la page.",
  },

  // ---- l'iceberg des jetons ----------------------------------------------
  // Les VINGT-CINQ PAVÉS ne sont pas ici : ils portent leurs deux langues dans
  // data/tokenIceberg, avec leur contre-indication. Ici il n'y a que les mots
  // qui entourent le schéma.
  'ice.h2': {
    en: 'ways to spend fewer tokens, and the four everyone tries first',
    fr: "façons de dépenser moins de jetons, et les quatre que tout le monde essaie d'abord",
  },
  'ice.lead': {
    en: 'This is not about one assistant. Every item here comes from how the billing works, which is the same wherever you are: the input is re-sent in full on every turn, the output costs more per token than the input, and anything that enters the context stays there. The names below move between products. The mechanics do not.',
    fr: "Ceci ne parle pas d'un assistant en particulier. Chaque item vient de la façon dont la facturation fonctionne, et elle est la même partout : l'entrée est renvoyée en entier à chaque tour, la sortie coûte plus cher par jeton que l'entrée, et ce qui entre dans le contexte y reste. Les noms ci-dessous changent d'un produit à l'autre. La mécanique, non.",
  },
  'ice.why': { en: 'Why it works', fr: 'Pourquoi ça marche' },
  'ice.not': { en: 'When not to', fr: 'Quand ne pas le faire' },
  'ice.called': { en: 'What it tends to be called', fr: "Comment ça s'appelle en général" },
  'ice.gainA': { en: 'On the numbers you put in above, this one is worth about', fr: 'Sur les chiffres saisis plus haut, celui-ci vaut environ' },
  'ice.gainB': { en: 'of your monthly tokens. It is lever', fr: 'de vos jetons mensuels. C\'est le levier' },
  'ice.gainC': { en: 'in the list below, where the calculation is shown.', fr: 'dans la liste ci-dessous, où le calcul est montré.' },

  // ---- le cours de sobriété ----------------------------------------------
  'fg.how': { en: 'How.', fr: 'Comment.' },
  'fg.not': { en: 'When not to.', fr: 'Quand ne pas le faire.' },

  // ---- le dojo -----------------------------------------------------------
  'bd.which': { en: 'Which agent do you need?', fr: "De quel agent avez-vous besoin ?" },
  'bd.showList': { en: 'Show them as a list', fr: 'Les voir en liste' },
  'bd.hideList': { en: 'Hide the list', fr: 'Masquer la liste' },
  'bd.built': { en: 'built', fr: 'construit' },
  'bd.asleep': { en: 'asleep', fr: 'endormi' },
  'bd.hard': { en: 'Hard part.', fr: 'Le plus dur.' },
  'bd.why': {
    en: 'agents, and each one a different way of failing. A research agent and a sorting agent do not fail the same way, so they are not taught the same way.',
    fr: "agents, et chacun une façon différente d'échouer. Un agent de recherche et un agent de tri ne ratent pas de la même manière, donc ils ne s'enseignent pas de la même manière.",
  },

  // ---- la fiche d'un agent -----------------------------------------------
  'ag.back': { en: 'Back to the room', fr: 'Retour à la salle' },
  'ag.steps': { en: 'steps', fr: 'étapes' },
  'ag.ships': { en: 'things you leave with', fr: 'choses que vous emportez' },
  'ag.words': { en: 'words explained', fr: 'mots expliqués' },
  'ag.fail': { en: 'How it goes wrong', fr: 'Comment ça rate' },
  'ag.makes': { en: 'Makes', fr: 'Fabrique' },
  'ag.isBuilt': { en: 'is built', fr: 'est construit' },
  'ag.whereNext': { en: 'Where this goes next', fr: 'Où cela va ensuite' },
  'ag.whereLead': {
    en: 'A framework will not take your file as it is: each one models an agent with its own words, and the work is knowing which piece becomes what. Three of them, to give you the idea.',
    fr: "Un framework ne prendra pas votre fichier tel quel : chacun modélise un agent avec ses propres mots, et le travail consiste à savoir quel morceau devient quoi. En voici trois, pour l'idée.",
  },
  'ag.compareAll': { en: 'Compare all', fr: 'Comparer les' },

  // ---- l'académie ---------------------------------------------------------
  // Le CONTENU des leçons ne passe pas par ici · il vit dans data/academy, à
  // côté de son anglais, parce qu'une leçon est de la prose et qu'une prose
  // découpée en cent clés de dictionnaire ne se relit plus. Ce qui est ici est
  // le CADRE : ce que l'écran dit autour de la leçon, et qui se répète.
  'ac.course': { en: 'Course', fr: 'Cours' },
  'ac.of': { en: 'of', fr: 'sur' },
  'ac.heroA': { en: 'The instruction', fr: "L'instruction" },
  'ac.heroB': { en: 'decides everything', fr: 'décide de tout' },
  'ac.sub': {
    en: 'Not documentation. A course. It starts at “what is a token”, ends at a brief a model actually follows, and assumes you have never heard of vibe coding, an IDE or a coding agent. Every lesson is free, interactive, and about five minutes long.',
    fr: "Pas de la documentation. Un cours. Il commence à « qu'est-ce qu'un jeton », finit à une consigne qu'un modèle suit vraiment, et suppose que vous n'avez jamais entendu parler de vibe coding, d'éditeur de code ni d'agent développeur. Chaque leçon est gratuite, interactive, et dure environ cinq minutes.",
  },
  'ac.order': {
    en: 'It is the second course. The first is building an agent, and nothing here makes much sense until you have taken one apart.',
    fr: "C'est le deuxième cours. Le premier est la construction d'un agent, et rien ici n'a beaucoup de sens tant que vous n'en avez pas démonté un.",
  },
  'ac.orderLink': { en: 'building an agent', fr: "la construction d'un agent" },
  'ac.continue': { en: 'Continue', fr: 'Reprendre' },
  'ac.start': { en: 'Start lesson 1', fr: 'Commencer la leçon 1' },
  'ac.finished': { en: 'finished', fr: 'terminées' },
  'ac.freeNoAccount': { en: 'Free, no account', fr: 'Gratuit, sans compte' },
  'ac.curriculum': { en: 'The curriculum', fr: 'Le programme' },
  'ac.curriculumLead': {
    en: 'Five tracks, in order. Each one stands on its own, so you can jump to what you need, but if you are new, start at the top and work down.',
    fr: "Cinq pistes, dans l'ordre. Chacune tient debout toute seule, donc vous pouvez sauter à ce qu'il vous faut, mais si vous débutez, commencez en haut et descendez.",
  },
  'ac.track': { en: 'Track', fr: 'Piste' },
  'ac.forYouIf': { en: 'For you if:', fr: 'Pour vous si :' },
  'ac.done': { en: 'done', fr: 'faites' },
  'ac.openTrack': { en: 'Open track', fr: 'Ouvrir la piste' },
  'ac.min': { en: 'min', fr: 'min' },
  'ac.outcomesH2': { en: 'What you will be able to do', fr: 'Ce que vous saurez faire' },
  'ac.out1': { en: 'Explain it to someone else', fr: "L'expliquer à quelqu'un d'autre" },
  'ac.out1s': {
    en: 'What an agent is, why a team beats one assistant, and where every tool people keep naming at you actually fits.',
    fr: "Ce qu'est un agent, pourquoi une équipe vaut mieux qu'un assistant seul, et où se range vraiment chaque outil qu'on vous cite.",
  },
  'ac.out2': { en: 'Fix a teammate in one edit', fr: 'Réparer un coéquipier en une correction' },
  'ac.out2s': {
    en: 'Read the symptom, know which of the eight fields to change, and make every future run better instead of rerolling.',
    fr: "Lire le symptôme, savoir lequel des huit champs changer, et améliorer tous les passages à venir au lieu de relancer les dés.",
  },
  'ac.out3': { en: 'Design your own system', fr: 'Dessiner votre propre système' },
  'ac.out3s': {
    en: 'Turn a goal into an ordered plan with one owner per step, chain teams together, and find the step that broke.',
    fr: "Transformer un objectif en plan ordonné avec un responsable par étape, mettre des équipes en chaîne, et trouver l'étape qui a cassé.",
  },
  'ac.faqH2': { en: 'Questions people ask first', fr: "Les questions qu'on pose en premier" },
  'ac.guideNote': {
    en: 'Looking for the step-by-step setup pages for a specific app: Gmail, Notion, Stripe? Those live in the',
    fr: "Vous cherchez les pages de réglage pas à pas d'une application précise, Gmail, Notion, Stripe ? Elles sont dans le",
  },
  'ac.guideLink': { en: 'app setup guide', fr: 'guide de branchement des applications' },
  'ac.noTrack': { en: 'Track not found', fr: 'Piste introuvable' },
  'ac.noTrackBody': { en: 'There is no track called', fr: "Il n'existe aucune piste appelée" },
  'ac.noLesson': { en: 'Lesson not found', fr: 'Leçon introuvable' },
  'ac.noLessonBody': { en: 'There is no lesson at that address.', fr: "Il n'y a aucune leçon à cette adresse." },
  'ac.back': { en: 'Back to the Academy', fr: "Retour à l'académie" },
  'ac.lesson': { en: 'Lesson', fr: 'Leçon' },
  'ac.lessonsWord': { en: 'lessons', fr: 'leçons' },
  'ac.free': { en: 'Free', fr: 'Gratuit' },
  'ac.watch': { en: 'Watch it happen · this loops on its own', fr: 'Regardez faire · cela tourne en boucle tout seul' },
  'ac.check': { en: 'Check yourself', fr: 'Vérifiez-vous' },
  'ac.right': { en: 'That’s it.', fr: "C'est cela." },
  'ac.wrong': { en: 'Not quite.', fr: 'Pas tout à fait.' },
  'ac.remember': { en: 'Remember this', fr: 'À retenir' },
  'ac.nowDo': { en: 'Now go and do it:', fr: 'Maintenant, allez le faire :' },
  'ac.markDone': { en: 'Mark as finished', fr: 'Marquer comme terminée' },
  'ac.isDone': { en: 'Finished', fr: 'Terminée' },
  'ac.openApp': { en: 'Open the app', fr: "Ouvrir l'application" },
  'ac.prev': { en: 'Previous', fr: 'Précédente' },
  'ac.next': { en: 'Next', fr: 'Suivante' },
  'ac.doneNav': { en: 'Done', fr: 'Fini' },
  'ac.kindIdea': { en: 'The idea', fr: "L'idée" },
  'ac.kindExample': { en: 'Example', fr: 'Exemple' },
  'ac.kindDo': { en: 'Do this', fr: 'À faire' },
  'ac.kindWarn': { en: 'Watch out', fr: 'Attention' },
  'ac.kindCompare': { en: 'Compare', fr: 'Comparez' },

  // ---- où faire tourner l'agent · la page des frameworks ------------------
  'fw.pill': { en: 'The last step of the first course', fr: 'La dernière marche du premier cours' },
  'fw.h1': { en: 'You built an agent. Now put it somewhere.', fr: "Vous avez construit un agent. Posez-le quelque part." },
  'fw.lead': {
    en: 'paths in the dojo end with a file: an instruction and a set of tool schemas. This page is the step after. There are a lot of frameworks that will run it for you, they all want the same two things, and none of them is hard to start with.',
    fr: "parcours du dojo se terminent par un fichier : une instruction et un jeu de schémas d'outils. Cette page est l'étape d'après. Beaucoup de frameworks le feront tourner pour vous, ils veulent tous les deux mêmes choses, et aucun n'est difficile à démarrer.",
  },
  'fw.h2what': { en: 'What a framework actually is', fr: "Ce qu'est vraiment un framework" },
  'fw.thinkOf': { en: 'Think of it as', fr: 'Voyez-le comme' },
  'fw.gives': { en: 'What it gives you', fr: "Ce qu'il vous apporte" },
  'fw.givesNot': { en: 'What it does not give you', fr: "Ce qu'il ne vous apporte pas" },
  'fw.without': { en: 'You can start without one', fr: "Vous pouvez commencer sans" },
  'fw.whySoMany': { en: 'Why there are so many', fr: "Pourquoi il y en a autant" },
  'fw.h2connect': { en: 'How to export your agent and connect it', fr: "Comment exporter votre agent et le brancher" },
  'fw.connectLead': {
    en: 'Four moves, and they are the same wherever you take it. Only the names of the boxes change.',
    fr: "Quatre gestes, et ce sont les mêmes où que vous l'emmeniez. Seuls les noms des cases changent.",
  },
  'fw.stepWrong': { en: 'Where it goes wrong', fr: 'Où ça rate' },
  'fw.buildFirst': { en: 'Build an agent first, if you have not', fr: "Construisez d'abord un agent, si ce n'est pas fait" },
  'fw.h2list': { en: 'of them, and what each one is for', fr: "au total, et à quoi sert chacun" },
  'fw.listLead': {
    en: 'You do not have to choose well the first time. Your agent is an instruction and some schemas, so moving it costs an afternoon, not a rewrite. Open the two or three that sound like your problem.',
    fr: "Vous n'avez pas à bien choisir du premier coup. Votre agent est une instruction et des schémas : le déplacer coûte une après-midi, pas une réécriture. Ouvrez les deux ou trois qui ressemblent à votre problème.",
  },
  'fw.allLangs': { en: 'All languages', fr: 'Tous les langages' },
  'fw.models': { en: 'How it models an agent', fr: 'Comment il modélise un agent' },
  'fw.where': { en: 'Where each piece of your agent goes', fr: 'Où va chaque morceau de votre agent' },
  'fw.catches': { en: 'What catches people out', fr: 'Ce qui surprend' },
  'fw.takeWhen': { en: 'Take it when', fr: 'Prenez-le quand' },
  'fw.notWhen': { en: 'Do not, when', fr: 'Ne le prenez pas quand' },
  'fw.readDocs': { en: 'Read its own documentation', fr: 'Lire sa documentation' },
  'fw.noCodeH2': { en: 'There is no code on this page, on purpose', fr: "Il n'y a aucun code sur cette page, et c'est voulu" },
  'fw.noCodeA': {
    en: 'These projects move fast, and a snippet written today is wrong in a few months: someone copies it, it breaks, and they think they misunderstood. So we teach the part that does not go stale, which is also the part that takes the time:',
    fr: "Ces projets bougent vite, et un extrait écrit aujourd'hui a tort dans quelques mois : quelqu'un le copie, ça casse, et il croit avoir mal compris. Nous enseignons donc la partie qui ne se périme pas, qui est aussi celle qui prend du temps :",
  },
  'fw.noCodeB': { en: 'what your agent becomes in each framework', fr: 'ce que votre agent devient dans chaque framework' },
  'fw.noCodeC': {
    en: 'A system prompt is an instruction here, a backstory there, a typed signature elsewhere. Once you know that, the current documentation is a five minute read instead of an afternoon.',
    fr: "Une consigne système est une instruction ici, une histoire là, une signature typée ailleurs. Une fois que vous savez cela, la documentation du jour se lit en cinq minutes au lieu d'une après-midi.",
  },
  'fw.noCodeD': {
    en: 'projects day to day, and they change without telling us. What is written here is their shape, which is stable. Every entry links to its own documentation for everything that is not.',
    fr: "projets au jour le jour, et ils changent sans nous prévenir. Ce qui est écrit ici est leur forme, qui est stable. Chaque entrée renvoie à sa propre documentation pour tout ce qui ne l'est pas.",
  },
  'fw.weDoNotTrack': { en: 'We do not track these', fr: 'Nous ne suivons pas ces' },

  // ---- le robot de support ------------------------------------------------
  // Les RÉPONSES ne sont pas ici · elles vivent dans support/knowledge, à côté
  // de leur anglais, pour la même raison que les leçons.
  'sb.ask': { en: 'Ask Dojobot', fr: 'Demander à Dojobot' },
  'sb.online': { en: 'online · ask me anything about DojoBuro', fr: 'en ligne · posez-moi toute question sur DojoBuro' },
  'sb.newChat': { en: 'New chat', fr: 'Nouvelle discussion' },
  'sb.watchIt': { en: 'Watch it', fr: 'Voir la visite' },
  'sb.topics': { en: 'Topics', fr: 'Sujets' },
  'sb.placeholder': { en: 'Ask me anything · in your own words', fr: 'Posez votre question · dans vos propres mots' },
  'sb.send': { en: 'Send', fr: 'Envoyer' },
  'sb.foot': {
    en: 'Answers may use AI. Never share keys or passwords here.',
    fr: "Les réponses peuvent venir d'une IA. Ne partagez jamais de clés ni de mots de passe ici.",
  },
  'sb.noReach': {
    en: "I couldn't reach my brain just now, but these topics cover most questions. Pick one, or watch a walkthrough on the left.",
    fr: "Je n'ai pas pu joindre mon cerveau à l'instant, mais ces sujets couvrent la plupart des questions. Choisissez-en un, ou regardez une visite guidée à gauche.",
  },

  // ---- les visites animées ------------------------------------------------
  'tut.howTo': { en: 'How to?', fr: 'Comment faire ?' },
  'tut.getStarted': { en: 'Get started', fr: 'Commencer' },
  'tut.gotIt': { en: 'Got it', fr: "J'ai compris" },
  'tut.prev': { en: 'Back', fr: 'Retour' },
  'tut.next': { en: 'Next', fr: 'Suivant' },
  'tut.play': { en: 'Play', fr: 'Lancer' },
  // « Pause » s'écrit pareil dans les deux langues · voir SAME_IN_BOTH dans
  // le portail, qui liste les mots identiques plutôt que de tolérer l'égalité
  // en général.
  'tut.pause': { en: 'Pause', fr: 'Pause' },

  // ---- le panneau du maître ------------------------------------------------
  // Le CONTENU (ceintures, insignes, diplômes, ce que le maître dit) vit dans
  // dojo/grades, dojo/diplomas et dojo/masterProgress, à côté de son anglais.
  // Ce qui est ici est le cadre du panneau.
  'mp.pill': { en: 'Your teacher keeps the count', fr: 'Votre professeur tient le compte' },
  'mp.h2a': { en: 'Where you are, across the', fr: 'Où vous en êtes, sur les' },
  'mp.h2b': { en: 'courses', fr: 'cours' },
  'mp.here': { en: 'you are here', fr: 'vous êtes ici' },
  'mp.open': { en: 'Open', fr: 'Ouvrir' },
  'mp.more': { en: 'more', fr: 'de plus' },
  'mp.forThe': { en: 'for the', fr: 'pour la' },
  'mp.agent': { en: 'agent', fr: 'agent' },
  'mp.agents': { en: 'agents', fr: 'agents' },
  'mp.toStart': { en: 'to start', fr: 'pour commencer' },
  'mp.badges': { en: 'Badges', fr: 'Insignes' },
  'mp.diplomas': { en: 'Diplomas', fr: 'Diplômes' },
  'mp.next': { en: 'Next:', fr: 'Ensuite :' },
  'mp.small': {
    en: 'These are progress markers, not certificates. Nobody sells them, nobody verifies them, and no employer has heard of them. They exist so you can tell a course you finished from one you started.',
    fr: "Ce sont des repères de progression, pas des certificats. Personne ne les vend, personne ne les vérifie, et aucun employeur n'en a entendu parler. Ils existent pour que vous puissiez distinguer un cours terminé d'un cours commencé.",
  },

  // ---- le panneau d'apprentissage du profil --------------------------------
  'lrn.pickUp': { en: 'Pick up where you stopped', fr: 'Reprenez où vous vous êtes arrêté' },
  'lrn.step': { en: 'Step', fr: 'Étape' },
  'lrn.of': { en: 'of', fr: 'de' },
  'lrn.continue': { en: 'Continue', fr: 'Continuer' },
  'lrn.nothingLeft': { en: 'Nothing left in this room', fr: 'Il ne reste rien dans cette salle' },
  'lrn.allBuilt': { en: 'Every agent here is built', fr: 'Chaque agent d\'ici est construit' },
  'lrn.goBuild': { en: 'Go and build the one this dojo did not cover.', fr: "Allez construire celui que ce dojo ne couvrait pas." },
  'lrn.master': { en: 'The master.', fr: 'Le maître.' },
  'lrn.yourBelt': { en: 'Your belt', fr: 'Votre ceinture' },
  'lrn.beltRule': {
    en: 'finished end to end for the',
    fr: "terminés d'un bout à l'autre pour la",
  },
  'lrn.beltCount': {
    en: 'Belts count finished agents, never steps.',
    fr: 'Les ceintures comptent les agents terminés, jamais les étapes.',
  },
  'lrn.yourCourses': { en: 'Your', fr: 'Vos' },
  'lrn.coursesWord': { en: 'courses', fr: 'cours' },
  'lrn.earnedH': { en: 'What you have earned', fr: 'Ce que vous avez obtenu' },
  'lrn.earnedNone': {
    en: 'Nothing yet, and nothing is given for showing up. Finish one step and the first badge is yours.',
    fr: "Rien pour l'instant, et rien ne se donne pour avoir été présent. Terminez une étape et le premier insigne est à vous.",
  },
  'lrn.howCert': { en: 'How the certification works', fr: 'Comment marche la certification' },
  'lrn.nextDiploma': { en: 'Next diploma:', fr: 'Prochain diplôme :' },
  'lrn.small': {
    en: 'agents live in the dojo. Belts, badges and diplomas are progress markers kept in this browser. Nobody sells them, nobody verifies them, and no employer has heard of them: they exist so you can tell a course you finished from one you started.',
    fr: "agents vivent dans le dojo. Les ceintures, les insignes et les diplômes sont des repères de progression gardés dans ce navigateur. Personne ne les vend, personne ne les vérifie, et aucun employeur n'en a entendu parler : ils existent pour que vous puissiez distinguer un cours terminé d'un cours commencé.",
  },

  // ---- le jeu · la carte, les cités, les dojos -----------------------------
  // Le CONTENU des dojos vit dans data/curriculum, à côté de son anglais. Ce
  // qui est ici est ce que dit l'écran autour, et qui se répète de cité en
  // cité.
  'g.mapTitle': { en: 'The map', fr: 'La carte' },
  'g.mapLead': {
    en: 'Thirteen dojo cities. Visit them in any order, and a master waits in each one.',
    fr: "Treize cités dojo. Visitez-les dans l'ordre que vous voulez, un maître attend dans chacune.",
  },
  'g.map': { en: 'Map', fr: 'Carte' },
  'g.backMap': { en: 'Back to the map', fr: 'Retour à la carte' },
  'g.allCities': { en: 'Every city', fr: 'Toutes les cités' },
  'g.city': { en: 'City', fr: 'Cité' },
  'g.cities': { en: 'cities', fr: 'cités' },
  'g.dojo': { en: 'Dojo', fr: 'Dojo' },
  'g.dojos': { en: 'dojos', fr: 'dojos' },
  'g.master': { en: 'Master:', fr: 'Maître :' },
  'g.enter': { en: 'Enter', fr: 'Entrer' },
  'g.free': { en: 'Free', fr: 'Gratuit' },
  'g.youDo': { en: 'What you do', fr: 'Ce que vous faites' },
  'g.trap': { en: 'The trap', fr: 'Le piège' },
  'g.claim': { en: 'Claim the badge', fr: 'Prendre le badge' },
  'g.badgeGot': { en: 'Badge earned', fr: 'Badge obtenu' },
  'g.cityDone': { en: 'Back to the city', fr: 'Retour à la cité' },
  'g.cityDoneBody': {
    en: 'Every dojo in this city is finished. The map shows it, and you can replay any of them.',
    fr: "Tous les dojos de cette cité sont finis. La carte le montre, et vous pouvez les refaire.",
  },
  'g.replay': {
    en: 'You can replay any dojo, any time',
    fr: "Vous pouvez refaire n'importe quel dojo, quand vous voulez",
  },
  'g.noCity': { en: 'City not found', fr: 'Cité introuvable' },
  'g.noCityBody': { en: 'There is no city at that address.', fr: "Il n'y a aucune cité à cette adresse." },
  'g.noLevel': { en: 'Dojo not found', fr: 'Dojo introuvable' },
  'g.noLevelBody': { en: 'There is no dojo at that address.', fr: "Il n'y a aucun dojo à cette adresse." },
  'g.buyH2': { en: 'What the whole path opens', fr: 'Ce que le parcours entier ouvre' },
  'g.seePrices': { en: 'See the prices', fr: 'Voir les tarifs' },

  /* --- le jeu · la coquille et les onglets -------------------------------- */
  'nav.dojos': { en: 'Dojos', fr: 'Dojos' },
  'nav.clan': { en: 'Clan', fr: 'Clan' },
  'nav.profile': { en: 'Profile', fr: 'Profil' },
  'gm.tabs': { en: 'Main navigation', fr: 'Navigation principale' },
  'gm.xpTitle': { en: 'Experience earned across every dojo you finished', fr: 'Expérience gagnée sur tous les dojos terminés' },
  'gm.dojosTitle': { en: 'Your dojos', fr: 'Vos dojos' },
  'gm.dojosLead': {
    en: 'Pick a training. Each one is a set of dojo cities you cross in any order.',
    fr: "Choisissez une formation. Chacune est un ensemble de cités dojo que l'on traverse dans l'ordre qu'on veut.",
  },
  'gm.modules': { en: 'modules', fr: 'modules' },
  'gm.module1': { en: 'module', fr: 'module' },
  'gm.module': { en: 'Module', fr: 'Module' },
  'gm.dojo1': { en: 'dojo', fr: 'dojo' },
  'gm.needEmail': { en: 'Email asked', fr: 'Adresse demandée' },
  'gm.free': { en: 'Free', fr: 'Gratuit' },
  'gm.locked': { en: 'Locked', fr: 'Fermé' },
  'gm.finished': { en: 'Done', fr: 'Terminé' },
  'gm.start': { en: 'Start', fr: 'Commencer' },
  'gm.see': { en: 'See what is inside', fr: 'Voir ce qu\'il y a dedans' },
  'gm.backDojos': { en: 'Your dojos', fr: 'Vos dojos' },
  'gm.noPack': { en: 'Training not found', fr: 'Formation introuvable' },
  'gm.noPackBody': { en: 'There is no training at that address.', fr: "Il n'y a aucune formation à cette adresse." },
  'gm.lockTitle': { en: 'This training is not open yet', fr: "Cette formation n'est pas encore ouverte" },
  'gm.lockBody': {
    en: 'The first dojo is open so you can judge for yourself. The rest comes with the training, bought once.',
    fr: "Le premier dojo est ouvert pour que vous jugiez par vous-même. Le reste vient avec la formation, achetée une fois.",
  },

  /* --- le clan ------------------------------------------------------------ */
  'cl.title': { en: 'The clan', fr: 'Le clan' },
  'cl.lead': { en: 'Where disciples compare what they built.', fr: 'Là où les disciples comparent ce qu\'ils ont construit.' },
  'cl.soonTitle': { en: 'No feed yet, and we will not fake one', fr: "Pas encore de fil, et nous n'en simulerons pas" },
  'cl.soonBody': {
    en: 'A feed needs a server to receive what people post. There is none yet, so writing three invented messages here would only mean your own message goes nowhere. This page becomes the feed the day it can carry one.',
    fr: "Un fil demande un serveur pour recevoir ce qu'on y écrit. Il n'y en a pas encore, donc afficher trois messages inventés ne ferait que garantir que le vôtre ne partirait nulle part. Cette page devient le fil le jour où elle peut en porter un.",
  },
  'cl.seeProfile': { en: 'Your progress', fr: 'Votre progression' },

  /* --- le profil et la carte --------------------------------------------- */
  'pr.mapTitle': { en: 'The valley map', fr: 'La carte de la vallée' },
  'pr.mapBody': { en: 'See every dojo city, and enter one.', fr: 'Voir toutes les cités dojo, et entrer dans une.' },
  'pr.ownedH2': { en: 'What is open', fr: 'Ce qui est ouvert' },
  'pr.tester': {
    en: 'This address opens every training so you can read them. It is a test pass, not a purchase.',
    fr: "Cette adresse ouvre toutes les formations pour que vous puissiez les lire. C'est un passe d'essai, pas un achat.",
  },
  'pr.dataH2': { en: 'Where your progress lives', fr: 'Où vit votre progression' },
  'pr.dataBody': {
    en: 'In this browser, and nowhere else. No account, nothing sent. Clearing it loses what you finished here.',
    fr: "Dans ce navigateur, et nulle part ailleurs. Aucun compte, rien d'envoyé. L'effacer perd ce que vous avez terminé ici.",
  },
  'pr.forget': { en: 'Erase everything', fr: 'Tout effacer' },
  'pr.opened': { en: 'Open', fr: 'Ouverte' },
  'cm.title': { en: 'The valley', fr: 'La vallée' },
  'cm.lead': { en: 'Every dojo city, and where you stand.', fr: 'Toutes les cités dojo, et où vous en êtes.' },
  'cm.close': { en: 'Close the map', fr: 'Fermer la carte' },
  /* --- la semaine gratuite ---------------------------------------------- */
  'd.title': { en: 'Seven days to understand AI', fr: "Sept jours pour comprendre l'IA" },
  'd.lead': {
    en: 'One lesson a day, seven minutes each. You leave knowing the words, the tools, and what it costs.',
    fr: "Une leçon par jour, sept minutes chacune. Vous repartez en connaissant les mots, les outils, et ce que ça coûte.",
  },
  'd.days': { en: 'days', fr: 'jours' },
  'd.start': { en: 'Start', fr: 'Commencer' },
  'd.openedFor': { en: 'Opened for', fr: 'Ouvert pour' },
  'd.whatH2': { en: 'The seven days', fr: 'Les sept jours' },
  'd.afterH2': { en: 'And after the week', fr: 'Et après la semaine' },
  'd.seePath': { en: 'See the full path', fr: 'Voir le parcours complet' },
  'd.ask': { en: 'Your email opens the week', fr: 'Votre adresse ouvre la semaine' },
  'd.place': { en: 'you@example.com', fr: 'vous@exemple.com' },
  'd.open': { en: 'Open the week', fr: 'Ouvrir la semaine' },
  'd.fine': {
    en: 'Kept in this browser. Nothing is sent anywhere, and the seven days open straight away.',
    fr: "Gardée dans ce navigateur. Rien n'est envoyé nulle part, et les sept jours s'ouvrent tout de suite.",
  },

  /* --- le profil ---------------------------------------------------------- */
  'pr.title': { en: 'Your progress', fr: 'Votre progression' },
  'pr.lead': { en: 'What you earned, and where to pick it back up.', fr: 'Ce que vous avez gagné, et où reprendre.' },
  'pr.badges': { en: 'badges', fr: 'badges' },
  'pr.ofPath': { en: 'of the path', fr: 'du parcours' },
  'pr.caseH2': { en: 'The badge case', fr: 'La vitrine' },
  'pr.citiesH2': { en: 'Your cities', fr: 'Vos cités' },
  'pr.replay': { en: 'Redo', fr: 'Refaire' },
  'pr.sheet': { en: 'Take-away sheet', fr: 'Fiche à emporter' },

  /* --- ce qui est fermé --------------------------------------------------- */
  'g.lockWeek': { en: 'Give your email to open this', fr: 'Donnez votre adresse pour ouvrir ceci' },
  'g.lockWeekBody': {
    en: 'The seven discovery days are free. One address, and they open.',
    fr: "Les sept jours de découverte sont gratuits. Une adresse, et ils s'ouvrent.",
  },
  'g.lockPath': { en: 'This dojo is part of the full path', fr: 'Ce dojo fait partie du parcours complet' },
  'g.lockPathBody': {
    en: 'The first dojo of every city is open. The rest comes with the path, bought once.',
    fr: "Le premier dojo de chaque cité est ouvert. Le reste vient avec le parcours, acheté une fois.",
  },
  'g.freeFirst': { en: 'First dojo, free', fr: 'Premier dojo, gratuit' },
  // L'ÉTIQUETTE DU MAÎTRE · elle était écrite en dur, en anglais, dans le
  // composant 3D. Sur un écran français elle donnait « Sensei · dojo master »
  // au milieu d'une leçon en français · exactement le mélange de langues déjà
  // signalé une fois. Un texte visible n'a rien à faire ailleurs qu'ici.
  'g.senseiTag': { en: 'Sensei · dojo master', fr: 'Sensei · maître du dojo' },
  'g.toWeek': { en: 'The free week', fr: 'La semaine gratuite' },
  'g.profile': { en: 'Your progress', fr: 'Votre progression' },

  /* --- les formations métier ---------------------------------------------- */
  'tr.title': { en: 'Pick your trade', fr: 'Choisissez votre métier' },
  'tr.lead': {
    en: 'The same dojo cities, filled with the objects of your job and the mistakes that go with it.',
    fr: "Les mêmes cités dojo, remplies des objets de votre métier et des erreurs qui vont avec.",
  },
  'tr.needH2': { en: 'It builds on the path', fr: 'Elle prolonge le parcours' },
  'tr.needBody': {
    en: 'A trade course assumes the path is done. It does not explain context or roles again, which is why it is shorter and cheaper.',
    fr: "Une formation métier suppose le parcours connu. Elle ne réexplique ni le contexte ni les rôles, et c'est pour cela qu'elle est plus courte et moins chère.",
  },
  'tr.pick': { en: 'Work on this trade', fr: 'Travailler ce métier' },
  'tr.picked': { en: 'This is your trade', fr: 'C\'est votre métier' },
  'tr.toTrade': { en: 'Your trade', fr: 'Votre métier' },
  'tr.backTrades': { en: 'Back to the trades', fr: 'Retour aux métiers' },
  'tr.noTrade': { en: 'Trade not found', fr: 'Métier introuvable' },
  'tr.noTradeBody': { en: 'There is no trade at that address.', fr: "Il n'y a aucun métier à cette adresse." },
  'tr.lock': { en: 'This city belongs to a trade course', fr: 'Cette cité appartient à une formation métier' },
  'tr.lockBody': {
    en: 'The first dojo of every city is open. The rest comes with the trade, bought once.',
    fr: "Le premier dojo de chaque cité est ouvert. Le reste vient avec le métier, acheté une fois.",
  },
  'tr.yours': { en: 'Your trade', fr: 'Votre métier' },
  'tr.none': { en: 'No trade picked yet', fr: 'Aucun métier choisi' },

  /* --- le site promo ------------------------------------------------------- */
  'lp2.heroGo': { en: 'Start the free week', fr: 'Commencer la semaine gratuite' },
  'lp2.whoPill': { en: 'Who it is for', fr: 'À qui c\'est destiné' },
  'lp2.whoH2': { en: 'Three ways of being stuck', fr: 'Trois façons d\'être bloqué' },
  'lp2.insidePill': { en: 'What is inside', fr: 'Ce qu\'il y a dedans' },
  'lp2.insideH2': { en: 'One free week, one path, one trade', fr: 'Une semaine gratuite, un parcours, un métier' },
  'lp2.o1': { en: 'The discovery week', fr: 'La semaine de découverte' },
  'lp2.o1b': {
    en: 'The words, the limits, the tools, and what it really costs. Seven real lessons, not a sample.',
    fr: "Les mots, les limites, les outils, et ce que cela coûte vraiment. Sept vraies leçons, pas un échantillon.",
  },
  'lp2.o1go': { en: 'Start now', fr: 'Commencer maintenant' },
  'lp2.o2': { en: 'The full path', fr: 'Le parcours complet' },
  'lp2.o2b': {
    en: 'Prompting, the models, the five assistants, agents, design and cost. Yours for good, updates included.',
    fr: "Le prompt, les modèles, les cinq assistants, les agents, le design et le coût. À vous pour de bon, mises à jour comprises.",
  },
  'lp2.o2go': { en: 'See the map', fr: 'Voir la carte' },
  'lp2.o3': { en: 'Your trade', fr: 'Votre métier' },
  'lp2.o3b': {
    en: 'The objects of your job and the mistakes that go with it. Added to the path, never instead of it.',
    fr: "Les objets de votre métier et les erreurs qui vont avec. En plus du parcours, jamais à sa place.",
  },
  'lp2.o3go': { en: 'See the trades', fr: 'Voir les métiers' },
  'lp2.trades': { en: 'trades', fr: 'métiers' },
  'lp2.citiesH2': { en: 'The whole programme, in the open', fr: 'Le programme entier, à découvert' },
  'lp2.citiesLead': {
    en: 'Every city, every dojo, readable before you pay. The first dojo of each one is open.',
    fr: "Chaque cité, chaque dojo, lisibles avant de payer. Le premier dojo de chacune est ouvert.",
  },
  'lp2.howPill': { en: 'How it goes', fr: 'Comment ça se passe' },
  'lp2.howH2': { en: 'A game, and it is on purpose', fr: 'Un jeu, et c\'est voulu' },
  'lp2.badges': { en: 'badges in the path, one per dojo, and every dojo can be redone.', fr: 'badges dans le parcours, un par dojo, et chaque dojo peut être refait.' },
  'lp2.tradesH2': { en: 'And then your own trade', fr: 'Et ensuite votre métier' },
  'lp2.tradesLead': {
    en: 'Same cities, same dojos, same masters. What changes is the matter: your objects, your mistakes.',
    fr: "Mêmes cités, mêmes dojos, mêmes maîtres. Ce qui change est la matière : vos objets, vos erreurs.",
  },
  'lp2.saidPill': { en: 'What students say', fr: 'Ce que disent les élèves' },
  'lp2.saidH2': { en: 'Nothing yet, and we will not invent it', fr: 'Rien encore, et nous n\'inventerons rien' },
  'lp2.saidBody': {
    en: 'This course is new. Rather than write three testimonials nobody gave, this section stays empty until real students have finished. Judge it on the free week instead.',
    fr: "Ce cours est neuf. Plutôt que d'écrire trois témoignages que personne n'a donnés, cette section reste vide jusqu'à ce que de vrais élèves aient fini. Jugez-le sur la semaine gratuite.",
  },
  'lp2.saidGo': { en: 'Judge for yourself', fr: 'Jugez par vous-même' },
  'lp2.faqH2': { en: 'The questions people actually ask', fr: 'Les questions qu\'on pose vraiment' },
  'lp2.finalH2': { en: 'Seven days, seven minutes a day', fr: 'Sept jours, sept minutes par jour' },
  'lp2.finalFoot': {
    en: 'No card, no trial that turns into a charge. An email, and the week opens.',
    fr: "Pas de carte, aucun essai qui se transforme en prélèvement. Une adresse, et la semaine s'ouvre.",
  },
  'g.shut': { en: 'Closed', fr: 'Fermé' },
  'pr.change': { en: 'Change', fr: 'Changer' },

  // ---- le pied de page ---------------------------------------------------
  'footer.built': { en: 'A training centre for AI agents', fr: "Un centre de formation aux agents IA" },
} as const satisfies Record<string, Entry>

export type Key = keyof typeof DICT

/** Le texte d'une clé dans une langue.
 *
 *  Une clé inconnue rend la clé elle-même plutôt que du vide : un libellé
 *  manquant qui affiche `nav.pricing` se voit et se corrige en une minute,
 *  alors qu'un bouton vide passe inaperçu jusqu'à ce que quelqu'un le
 *  signale. Le même raisonnement que pour un personnage sans visage. */
export function translate(key: Key | string, lang: Lang): string {
  const e = (DICT as Record<string, Entry>)[key]
  if (!e) return String(key)
  return e[lang] ?? e.en
}

/** Combien de clés le dictionnaire porte · dérivé, pour que la couverture
 *  annoncée soit mesurée et non affirmée. */
export const KEY_COUNT = Object.keys(DICT).length
