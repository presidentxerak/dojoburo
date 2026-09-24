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
  'nav.guide': { en: 'App setup guide', fr: "Guide de configuration" },
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
    fr: "Les cours sont disponibles en français. La bibliothèque, les cartes d'équipe et les ceintures restent pour l'instant en anglais.",
  },
  'i18n.partialShort': { en: 'Library still in English', fr: 'Bibliothèque encore en anglais' },

  // ---- la page d'accueil -------------------------------------------------
  // LA PROMESSE ET LE SOUS-TITRE NE SONT PAS ICI · ils vivent dans
  // data/positioning avec leur version française, parce que ce sont le
  // POSITIONNEMENT et que six surfaces les lisent. Les recopier ici rouvrirait
  // la faille que ce fichier-là existe pour fermer.
  'lp.heroGo': { en: 'Enter the dojo · free', fr: 'Entrer dans le dojo · gratuit' },
  'lp.heroHow': { en: 'How it works', fr: "Comment cela fonctionne" },
  'lp.heroLearn': { en: 'tracks', fr: 'parcours' },
  'lp.lessons': { en: 'lessons', fr: 'leçons' },
  'lp.hours': { en: 'hours', fr: 'heures' },
  'lp.noCode': { en: 'no code, no account', fr: 'sans code, sans compte' },
  'lp.marquee': {
    en: 'The tools the course teaches you to wire, and what each one really costs',
    fr: "Les outils que le cours vous apprend à connecter, et le coût réel de chacun",
  },
  'lp.coursesPill': { en: 'courses · free · nothing to install', fr: "cours · gratuits · aucune installation" },
  'lp.coursesH2a': { en: 'A training centre, and', fr: 'Un centre de formation, et' },
  'lp.coursesH2b': { en: 'courses in it', fr: "cours au programme" },
  'lp.coursesLead': {
    en: 'They are taken in this order, and each one is useless without the one before it. You cannot make an agent cheap before it works, and you cannot make it work before you can write the instruction it runs on.',
    fr: "Ils se suivent dans cet ordre, car chacun suppose le précédent. On ne peut pas rendre un agent sobre avant qu'il fonctionne, ni le faire fonctionner avant de savoir rédiger le prompt qui le guide.",
  },
  'lp.open': { en: 'Open', fr: 'Ouvrir' },
  'lp.pillarsPill': { en: 'things to do here · all of them teaching', fr: "activités proposées · toutes pédagogiques" },
  'lp.pillarsH2': { en: 'A dojo, not a factory', fr: 'Un dojo, pas une usine' },
  'lp.acPill': { en: 'Free · read in the browser · nothing to install', fr: "Gratuit · consultable dans le navigateur · aucune installation" },
  'lp.acH2': { en: 'Start from zero, finish with something that runs!', fr: "Partez de zéro et terminez avec un système qui fonctionne" },
  'lp.acLead': {
    en: 'Written for someone who has never heard the words agent, token or context window, and taken all the way to a working system they understand line by line. One idea per block, a real example every time an abstraction appears, and honest numbers throughout.',
    fr: "Conçu pour une personne qui n'a jamais entendu les mots agent, token ou context window, ce cours la conduit jusqu'à un système opérationnel qu'elle comprend ligne par ligne. Une idée par bloc, un exemple concret chaque fois qu'une abstraction apparaît, et des chiffres exacts du début à la fin.",
  },
  'lp.frPill': { en: 'The part most courses skip', fr: "La partie que la plupart des cours omettent" },
  'lp.frH2': { en: 'Every run has a price. Most people never see it.', fr: "Chaque exécution a un coût, que presque personne ne voit." },
  'lp.frLead': {
    en: 'A prompt that carries the whole conversation on every turn, an agent that re-reads a file it already knows, a loop nobody stopped: none of it shows up until the invoice does. The course measures it in two units at once: tokens and euros. Then it gives you the levers, the settings you choose before writing a word, and the way the prompt itself is written: each with the saving it actually buys rather than the one it is said to buy.',
    fr: "Un prompt qui transporte toute la conversation à chaque tour, un agent qui relit un fichier qu'il connaît déjà, une boucle que personne n'a interrompue : rien de tout cela n'apparaît avant la facture. Le cours mesure ce coût dans deux unités à la fois, les tokens et les euros. Il présente ensuite les leviers, c'est-à-dire les réglages choisis avant d'écrire un mot et la manière de rédiger le prompt lui-même, chacun avec l'économie qu'il permet réellement plutôt que celle qu'on lui prête.",
  },
  'lp.frN1': { en: 'Measure', fr: 'Mesurer' },
  'lp.frN1s': { en: 'What one conversation really costs', fr: "Ce qu'une conversation coûte vraiment" },
  'lp.frN2': { en: 'Set up', fr: "Configurer" },
  'lp.frN2s': { en: 'Tools, caps, cache, when to reset', fr: "Outils, plafonds, cache, moment de réinitialiser" },
  'lp.frN3': { en: 'Write', fr: "Rédiger" },
  'lp.frN3s': { en: 'Bans not adjectives · ask once', fr: "Des interdictions plutôt que des adjectifs · une seule demande" },
  'lp.frGo': { en: 'Open the calculator · put your own numbers in', fr: "Ouvrir le calculateur · avec vos propres chiffres" },
  'lp.dojoPill': { en: 'A sandbox · nothing here calls a paid model', fr: "Un bac à sable · aucun modèle payant n'est appelé ici" },
  'lp.dojoH2a': { en: 'A room where', fr: 'Une salle où' },
  'lp.dojoH2b': { en: 'agents are asleep', fr: 'agents dorment' },
  'lp.dojoLead': {
    en: 'They are asleep because none of them exists yet. Pick the shape of problem you actually have and that one wakes up, then you build it from a blank page. Below is the same room from the other side: open a character, read the brief that makes it what it is, change it and watch what changes.',
    fr: "Ils sont endormis parce qu'aucun n'existe encore. Choisissez le type de problème auquel vous êtes réellement confronté : l'agent correspondant se réveille, et vous le construisez à partir d'une page blanche. Plus bas, la même salle vue de l'autre côté : ouvrez un personnage, lisez le brief qui le définit, modifiez-le et observez ce qui change.",
  },
  'lp.dojoGo': { en: 'Walk in and pick one', fr: "Entrez et choisissez-en un" },
  'lp.notH2': { en: 'What this is not', fr: "Ce que ce n'est pas" },
  'lp.notLead': {
    en: 'If you came here to have the work done for you, this is the wrong shop, and I would rather you knew now. If you came here to learn how it is done, and what it costs, start with lesson one.',
    fr: "Si vous venez pour que l'on fasse le travail à votre place, ce n'est pas le bon endroit, et mieux vaut le savoir dès maintenant. Si vous venez apprendre comment ce travail se fait et ce qu'il coûte, commencez par la première leçon.",
  },
  'lp.priceH2': { en: 'The course is free. The library is the paid part.', fr: "Le cours est gratuit. La bibliothèque est la partie payante." },
  'lp.finalH2': { en: 'Ready to start?', fr: "Êtes-vous prêt à commencer ?" },
  'lp.finalGo': { en: 'Pick your agent', fr: "Choisissez votre agent" },
  'lp.finalFoot': { en: 'Free · read in your browser · no account to begin', fr: "Gratuit · consultable dans votre navigateur · aucun compte requis pour commencer" },

  // ---- les tarifs --------------------------------------------------------
  // Ce que les cartes ne tirent PAS de data/plans : les mots de l'interface
  // autour des formules. Les taglines et les listes, elles, vivent dans la
  // formule, parce que c'est ce qu'on vend et que ça n'a qu'une source.
  'price.popular': { en: 'Most popular', fr: "La plus choisie" },
  'price.start': { en: 'Get started', fr: 'Commencer' },
  'price.choose': { en: 'Choose', fr: 'Choisir' },
  // L'UNITÉ D'UN PRIX · elle disait « par mois » et « par siège » du temps de
  // l'abonnement. Le produit se vend maintenant une fois, et un libellé
  // périmé sur une carte de prix est la pire chose à laisser traîner : on ne
  // se trompe pas sur un lien, on se trompe sur ce qu'on croit acheter.
  'price.forever': { en: 'free, for good', fr: "gratuit, sans limite de durée" },
  'price.once': { en: 'once, yours for good', fr: "payé une fois, acquis définitivement" },
  'price.addOn': { en: 'added on', fr: 'en supplément' },
  'price.after': { en: 'after', fr: 'après' },
  'price.notMetered': { en: 'Nothing here is metered.', fr: "Aucun usage n'est décompté ici." },
  'price.noMeterBody': {
    en: 'Learning is free and stays free, the diploma costs nothing, and no plan counts your runs, because the dojo is a worked example and calls no paid model. A paid plan buys the files and, on School, the seats · when you take an agent away and run it for real, it runs on your own key and your provider bills you directly, never the dojo.',
    fr: "L'apprentissage est gratuit et le restera, le diplôme ne coûte rien, et aucune formule ne décompte vos exécutions, car le dojo est un exemple commenté qui n'appelle aucun modèle payant. Une formule payante donne accès aux fichiers et, pour School, aux sièges · lorsque vous emportez un agent pour l'exécuter réellement, il fonctionne avec votre propre clé et c'est votre provider qui vous facture directement, jamais le dojo.",
  },
  'price.entTitle': { en: 'Business / Enterprise', fr: 'Entreprise' },
  'price.entBody': {
    en: 'Self-hosted or local worker, SAML SSO & security review, a dedicated MCP hub with an SLA, budgets & spend controls, custom connectors and dedicated support. Keep everything on your own infrastructure.',
    fr: "Hébergement sur vos serveurs ou exécution locale, SSO SAML et revue de sécurité, un hub MCP dédié avec engagement de niveau de service, budgets et plafonds de dépense, connecteurs sur mesure et support dédié. Tout reste sur votre propre infrastructure.",
  },
  'price.askBot': { en: 'Ask Dojobot', fr: 'Demander à Dojobot' },

  // ---- les cours de design -----------------------------------------------
  // Les libellés de la page. Le CONTENU des leçons vit dans
  // data/designCourses, avec ses deux langues dans la même entrée · ces cours
  // sont nés bilingues, et c'est la raison pour laquelle le lot de traduction
  // est passé avant eux.
  'dc.like': { en: 'Think of it as', fr: "Pour vous le représenter" },
  'dc.words': { en: 'The words we are going to use', fr: "Le vocabulaire employé" },
  'dc.steps': { en: 'What you actually do', fr: "Ce que vous faites, concrètement" },
  'dc.trap': { en: 'The beginner trap', fr: 'Le piège du débutant' },
  'dc.check': { en: 'How to know it is right', fr: "Comment vérifier le résultat" },
  'dc.applied': { en: 'Applied', fr: 'Appliqué' },
  'dc.markApplied': { en: 'I have applied this', fr: "Je l'ai appliqué" },
  'dc.of': { en: 'of', fr: 'sur' },
  'dc.noClicksH2': { en: 'There are no menu paths here, on purpose', fr: "Aucun chemin de menu ici, et c'est délibéré" },
  'dc.noClicksBody': {
    en: 'Interfaces move several times a year. A course built on where the buttons are today sends someone clicking at a menu that has been renamed, it does not work, and they conclude they misunderstood. What does not move is the model: what a frame is, what a constraint does, why a component exists. Hold that, and finding the current button takes ten minutes instead of a course.',
    fr: "Les interfaces évoluent plusieurs fois par an. Un cours fondé sur l'emplacement actuel des boutons envoie l'apprenant vers un menu qui a été renommé ; rien ne fonctionne, et il en conclut à tort qu'il a mal compris. Ce qui ne change pas, c'est le modèle : ce qu'est un cadre, ce que fait une contrainte, pourquoi un composant existe. Une fois ce modèle acquis, trouver le bouton actuel prend dix minutes, et non un cours entier.",
  },

  // ---- l'espace ressources -----------------------------------------------
  'res.h': { en: 'Take a course with you', fr: "Emportez un cours avec vous" },
  'res.lead': {
    en: 'One memo per course, built from the lessons themselves at the moment you ask for it. Nothing is stored, so a memo can never hold an older version of a lesson than the one on the page.',
    fr: "Un mémo par cours, généré à partir des leçons elles-mêmes au moment où vous le demandez. Rien n'est stocké : un mémo ne peut donc jamais contenir une version plus ancienne que la leçon affichée.",
  },

  // ---- l'iceberg des jetons ----------------------------------------------
  // Les VINGT-CINQ PAVÉS ne sont pas ici : ils portent leurs deux langues dans
  // data/tokenIceberg, avec leur contre-indication. Ici il n'y a que les mots
  // qui entourent le schéma.
  'ice.h2': {
    en: 'ways to spend fewer tokens, and the four everyone tries first',
    fr: "façons de consommer moins de tokens, et les quatre que tout le monde essaie d'abord",
  },
  'ice.lead': {
    en: 'This is not about one assistant. Every item here comes from how the billing works, which is the same wherever you are: the input is re-sent in full on every turn, the output costs more per token than the input, and anything that enters the context stays there. The names below move between products. The mechanics do not.',
    fr: "Il ne s'agit pas d'un assistant en particulier. Chaque élément découle du mode de facturation, identique partout : l'entrée est renvoyée intégralement à chaque tour, la sortie coûte plus cher par token que l'entrée, et tout ce qui entre dans le contexte y demeure. Les noms ci-dessous varient d'un produit à l'autre ; la mécanique, non.",
  },
  'ice.why': { en: 'Why it works', fr: "Pourquoi cela fonctionne" },
  'ice.not': { en: 'When not to', fr: "Quand s'en abstenir" },
  'ice.called': { en: 'What it tends to be called', fr: "Son nom le plus courant" },
  'ice.gainA': { en: 'On the numbers you put in above, this one is worth about', fr: "Sur les chiffres saisis plus haut, celui-ci représente environ" },
  'ice.gainB': { en: 'of your monthly tokens. It is lever', fr: "de vos tokens mensuels. Il s'agit du levier" },
  'ice.gainC': { en: 'in the list below, where the calculation is shown.', fr: "de la liste ci-dessous, où le calcul est détaillé." },

  // ---- le cours de sobriété ----------------------------------------------
  'fg.how': { en: 'How.', fr: 'Comment.' },
  'fg.not': { en: 'When not to.', fr: "Quand s'en abstenir." },

  // ---- le dojo -----------------------------------------------------------
  'bd.which': { en: 'Which agent do you need?', fr: "De quel agent avez-vous besoin ?" },
  'bd.showList': { en: 'Show them as a list', fr: "Afficher la liste" },
  'bd.hideList': { en: 'Hide the list', fr: 'Masquer la liste' },
  'bd.built': { en: 'built', fr: 'construit' },
  'bd.asleep': { en: 'asleep', fr: 'endormi' },
  'bd.hard': { en: 'Hard part.', fr: "Point difficile." },
  'bd.why': {
    en: 'agents, and each one a different way of failing. A research agent and a sorting agent do not fail the same way, so they are not taught the same way.',
    fr: "agents, chacun avec sa propre manière d'échouer. Un agent de recherche et un agent de tri n'échouent pas de la même façon ; c'est pourquoi ils ne s'enseignent pas de la même façon.",
  },

  // ---- la fiche d'un agent -----------------------------------------------
  'ag.back': { en: 'Back to the room', fr: 'Retour à la salle' },
  'ag.steps': { en: 'steps', fr: 'étapes' },
  'ag.ships': { en: 'things you leave with', fr: "livrables à emporter" },
  'ag.words': { en: 'words explained', fr: 'mots expliqués' },
  'ag.fail': { en: 'How it goes wrong', fr: "Ses modes d'échec" },
  'ag.makes': { en: 'Makes', fr: "Produit" },
  'ag.isBuilt': { en: 'is built', fr: 'est construit' },
  'ag.whereNext': { en: 'Where this goes next', fr: "Où l'emmener ensuite" },
  'ag.whereLead': {
    en: 'A framework will not take your file as it is: each one models an agent with its own words, and the work is knowing which piece becomes what. Three of them, to give you the idea.',
    fr: "Un framework n'acceptera pas votre fichier tel quel : chacun modélise un agent avec son propre vocabulaire, et tout le travail consiste à savoir quel élément devient quoi. En voici trois, à titre d'illustration.",
  },
  'ag.compareAll': { en: 'Compare all', fr: 'Comparer les' },

  // ---- l'académie ---------------------------------------------------------
  // Le CONTENU des leçons ne passe pas par ici · il vit dans data/academy, à
  // côté de son anglais, parce qu'une leçon est de la prose et qu'une prose
  // découpée en cent clés de dictionnaire ne se relit plus. Ce qui est ici est
  // le CADRE : ce que l'écran dit autour de la leçon, et qui se répète.
  'ac.course': { en: 'Course', fr: 'Cours' },
  'ac.of': { en: 'of', fr: 'sur' },
  'ac.heroA': { en: 'The instruction', fr: 'Le prompt' },
  'ac.heroB': { en: 'decides everything', fr: "détermine tout" },
  'ac.sub': {
    en: 'Not documentation. A course. It starts at “what is a token”, ends at a brief a model actually follows, and assumes you have never heard of vibe coding, an IDE or a coding agent. Every lesson is free, interactive, and about five minutes long.',
    fr: "Ce n'est pas une documentation, mais un cours. Il part de « qu'est-ce qu'un token », aboutit à un prompt qu'un modèle suit réellement, et ne suppose aucune connaissance préalable du vibe coding, d'un éditeur de code ou d'un agent de développement. Chaque leçon est gratuite, interactive et dure environ cinq minutes.",
  },
  'ac.order': {
    en: 'It is the second course. The first is building an agent, and nothing here makes much sense until you have taken one apart.',
    fr: "Il s'agit du deuxième cours. Le premier porte sur la construction d'un agent, et celui-ci n'a guère de sens tant que vous n'en avez pas démonté un.",
  },
  'ac.orderLink': { en: 'building an agent', fr: "la construction d'un agent" },
  'ac.continue': { en: 'Continue', fr: 'Reprendre' },
  'ac.start': { en: 'Start lesson 1', fr: 'Commencer la leçon 1' },
  'ac.finished': { en: 'finished', fr: 'terminées' },
  'ac.freeNoAccount': { en: 'Free, no account', fr: 'Gratuit, sans compte' },
  'ac.curriculum': { en: 'The curriculum', fr: 'Le programme' },
  'ac.curriculumLead': {
    en: 'Five tracks, in order. Each one stands on its own, so you can jump to what you need, but if you are new, start at the top and work down.',
    fr: "Cinq pistes, dans l'ordre. Chacune est autonome, ce qui vous permet d'aller directement à ce dont vous avez besoin ; si vous débutez, commencez toutefois par la première et suivez l'ordre.",
  },
  'ac.track': { en: 'Track', fr: 'Piste' },
  'ac.forYouIf': { en: 'For you if:', fr: "Pour vous si :" },
  'ac.done': { en: 'done', fr: "terminées" },
  'ac.openTrack': { en: 'Open track', fr: 'Ouvrir la piste' },
  'ac.min': { en: 'min', fr: 'min' },
  'ac.outcomesH2': { en: 'What you will be able to do!', fr: "Ce que vous saurez faire" },
  'ac.out1': { en: 'Explain it to someone else', fr: "L'expliquer à quelqu'un d'autre" },
  'ac.out1s': {
    en: 'What an agent is, why a team beats one assistant, and where every tool people keep naming at you actually fits.',
    fr: "Ce qu'est un agent, pourquoi une équipe surpasse un assistant isolé, et où se situe réellement chacun des outils que l'on vous cite.",
  },
  'ac.out2': { en: 'Fix a teammate in one edit', fr: "Corriger un coéquipier en une seule modification" },
  'ac.out2s': {
    en: 'Read the symptom, know which of the eight fields to change, and make every future run better instead of rerolling.',
    fr: "Lire le symptôme, identifier lequel des huit champs modifier, et améliorer toutes les exécutions suivantes au lieu de relancer au hasard.",
  },
  'ac.out3': { en: 'Design your own system', fr: "Concevoir votre propre système" },
  'ac.out3s': {
    en: 'Turn a goal into an ordered plan with one owner per step, chain teams together, and find the step that broke.',
    fr: "Transformer un objectif en plan ordonné, avec un responsable par étape, enchaîner des équipes, et repérer l'étape défaillante.",
  },
  'ac.faqH2': { en: 'Questions people ask first', fr: "Les questions les plus fréquentes" },
  'ac.guideNote': {
    en: 'Looking for the step-by-step setup pages for a specific app: Gmail, Notion, Stripe? Those live in the',
    fr: "Vous cherchez les pages de configuration pas à pas d'une application précise, comme Gmail, Notion ou Stripe ? Elles se trouvent dans le",
  },
  'ac.guideLink': { en: 'app setup guide', fr: "guide de configuration des applications" },
  'ac.noTrack': { en: 'Track not found', fr: 'Piste introuvable' },
  'ac.noTrackBody': { en: 'There is no track called', fr: "Il n'existe aucune piste appelée" },
  'ac.noLesson': { en: 'Lesson not found', fr: 'Leçon introuvable' },
  'ac.noLessonBody': { en: 'There is no lesson at that address.', fr: "Il n'y a aucune leçon à cette adresse." },
  'ac.back': { en: 'Back to the Academy', fr: "Retour à l'académie" },
  'ac.lesson': { en: 'Lesson', fr: 'Leçon' },
  'ac.lessonsWord': { en: 'lessons', fr: 'leçons' },
  'ac.free': { en: 'Free', fr: 'Gratuit' },
  'ac.watch': { en: 'Watch it happen · this loops on its own', fr: "Observez · l'animation se répète en boucle" },
  'ac.check': { en: 'Check yourself', fr: "Vérifiez vos acquis" },
  'ac.right': { en: 'That’s it!', fr: "Bonne réponse." },
  'ac.wrong': { en: 'Not quite.', fr: 'Pas tout à fait.' },
  'ac.remember': { en: 'Remember this', fr: 'À retenir' },
  'ac.nowDo': { en: 'Now go and do it:', fr: "À vous de mettre en pratique :" },
  'ac.markDone': { en: 'Mark as finished', fr: 'Marquer comme terminée' },
  'ac.isDone': { en: 'Finished', fr: 'Terminée' },
  'ac.openApp': { en: 'Open the app', fr: "Ouvrir l'application" },
  'ac.prev': { en: 'Previous', fr: 'Précédente' },
  'ac.next': { en: 'Next', fr: 'Suivante' },
  'ac.doneNav': { en: 'Done', fr: "Terminé" },
  'ac.kindIdea': { en: 'The idea', fr: "L'idée" },
  'ac.kindExample': { en: 'Example', fr: 'Exemple' },
  'ac.kindDo': { en: 'Do this', fr: 'À faire' },
  'ac.kindWarn': { en: 'Watch out', fr: 'Attention' },
  'ac.kindCompare': { en: 'Compare', fr: 'À comparer' },

  // ---- où faire tourner l'agent · la page des frameworks ------------------
  'fw.pill': { en: 'The last step of the first course', fr: "La dernière étape du premier cours" },
  'fw.h1': { en: 'You built an agent. Now put it somewhere!', fr: "Vous avez construit un agent. Il reste à l'héberger." },
  'fw.lead': {
    en: 'paths in the dojo end with a file: an instruction and a set of tool schemas. This page is the step after. There are a lot of frameworks that will run it for you, they all want the same two things, and none of them is hard to start with.',
    fr: "parcours du dojo aboutissent à un fichier : un system prompt et un ensemble de schémas d'outils. Cette page constitue l'étape suivante. De nombreux frameworks peuvent l'exécuter pour vous ; ils attendent tous les deux mêmes éléments, et aucun n'est difficile à prendre en main.",
  },
  'fw.h2what': { en: 'What a framework actually is', fr: "Ce qu'est vraiment un framework" },
  'fw.thinkOf': { en: 'Think of it as', fr: "Pour vous le représenter" },
  'fw.gives': { en: 'What it gives you', fr: "Ce qu'il vous apporte" },
  'fw.givesNot': { en: 'What it does not give you', fr: "Ce qu'il ne vous apporte pas" },
  'fw.without': { en: 'You can start without one', fr: "Vous pouvez commencer sans" },
  'fw.whySoMany': { en: 'Why there are so many', fr: "Pourquoi il en existe autant" },
  'fw.h2connect': { en: 'How to export your agent and connect it', fr: "Comment exporter votre agent et le connecter" },
  'fw.connectLead': {
    en: 'Four moves, and they are the same wherever you take it. Only the names of the boxes change.',
    fr: "Quatre étapes, identiques quel que soit l'endroit où vous l'emmenez. Seuls les noms des champs changent.",
  },
  'fw.stepWrong': { en: 'Where it goes wrong', fr: "Les erreurs fréquentes" },
  'fw.buildFirst': { en: 'Build an agent first, if you have not', fr: "Construisez d'abord un agent, si ce n'est pas déjà fait" },
  'fw.h2list': { en: 'of them, and what each one is for', fr: "au total, et à quoi sert chacun" },
  'fw.listLead': {
    en: 'You do not have to choose well the first time. Your agent is an instruction and some schemas, so moving it costs an afternoon, not a rewrite. Open the two or three that sound like your problem.',
    fr: "Il n'est pas nécessaire de bien choisir du premier coup. Votre agent se compose d'un system prompt et de schémas : le déplacer demande un après-midi, non une réécriture. Ouvrez les deux ou trois qui correspondent à votre problème.",
  },
  'fw.allLangs': { en: 'All languages', fr: 'Tous les langages' },
  'fw.models': { en: 'How it models an agent', fr: 'Comment il modélise un agent' },
  'fw.where': { en: 'Where each piece of your agent goes', fr: "Où va chaque élément de votre agent" },
  'fw.catches': { en: 'What catches people out', fr: "Les pièges courants" },
  'fw.takeWhen': { en: 'Take it when', fr: "À choisir quand" },
  'fw.notWhen': { en: 'Do not, when', fr: "À éviter quand" },
  'fw.readDocs': { en: 'Read its own documentation', fr: "Consulter sa documentation" },
  'fw.noCodeH2': { en: 'There is no code on this page, on purpose', fr: "Il n'y a aucun code sur cette page, et c'est délibéré" },
  'fw.noCodeA': {
    en: 'These projects move fast, and a snippet written today is wrong in a few months: someone copies it, it breaks, and they think they misunderstood. So I teach you the part that does not go stale, which is also the part that takes the time:',
    fr: "Ces projets évoluent vite, et un extrait de code écrit aujourd'hui sera faux dans quelques mois : quelqu'un le copie, il échoue, et cette personne croit avoir mal compris. Ce cours enseigne donc la partie qui ne se périme pas, qui est aussi celle qui demande le plus de temps :",
  },
  'fw.noCodeB': { en: 'what your agent becomes in each framework', fr: "ce que votre agent devient dans chaque framework" },
  'fw.noCodeC': {
    en: 'A system prompt is an instruction here, a backstory there, a typed signature elsewhere. Once you know that, the current documentation is a five minute read instead of an afternoon.',
    fr: "Un system prompt s'appelle ici une instruction, là un récit de fond, ailleurs une signature typée. Une fois cela compris, la documentation actuelle se lit en cinq minutes plutôt qu'en un après-midi.",
  },
  'fw.noCodeD': {
    en: 'projects day to day, and they change without telling me. What is written here is their shape, which is stable. Every entry links to its own documentation for everything that is not.',
    fr: "projets au jour le jour, et ils évoluent sans préavis. Ce qui figure ici décrit leur structure, qui est stable. Chaque entrée renvoie à sa propre documentation pour tout ce qui ne l'est pas.",
  },
  'fw.weDoNotTrack': { en: 'I do not track these', fr: "Nous ne suivons pas ces" },

  // ---- le robot de support ------------------------------------------------
  // Les RÉPONSES ne sont pas ici · elles vivent dans support/knowledge, à côté
  // de leur anglais, pour la même raison que les leçons.
  'sb.ask': { en: 'Ask Dojobot', fr: 'Demander à Dojobot' },
  'sb.online': { en: 'online · ask me anything about DojoBuro', fr: "en ligne · posez-moi vos questions sur DojoBuro" },
  'sb.newChat': { en: 'New chat', fr: 'Nouvelle discussion' },
  'sb.watchIt': { en: 'Watch it', fr: 'Voir la visite' },
  'sb.topics': { en: 'Topics', fr: 'Sujets' },
  'sb.placeholder': { en: 'Ask me anything · in your own words', fr: "Posez votre question · avec vos propres mots" },
  'sb.send': { en: 'Send', fr: 'Envoyer' },
  'sb.foot': {
    en: 'Answers may use AI. Never share keys or passwords here.',
    fr: "Les réponses peuvent être générées par une IA. Ne partagez jamais de clés ni de mots de passe ici.",
  },
  'sb.noReach': {
    en: "I couldn't reach my brain just now, but these topics cover most questions. Pick one, or watch a walkthrough on the left.",
    fr: "Le service de réponse est momentanément injoignable, mais ces sujets couvrent la plupart des questions. Choisissez-en un, ou regardez une visite guidée à gauche.",
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
  'mp.pill': { en: 'Your teacher keeps the count', fr: "Votre enseignant suit votre progression" },
  'mp.h2a': { en: 'Where you are, across the', fr: "Votre progression dans les" },
  'mp.h2b': { en: 'courses', fr: 'cours' },
  'mp.here': { en: 'you are here', fr: "vous êtes ici" },
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
    fr: "Ce sont des repères de progression, non des certificats. Personne ne les vend ni ne les vérifie, et aucun employeur ne les connaît. Ils servent simplement à distinguer un cours terminé d'un cours commencé.",
  },

  // ---- le panneau d'apprentissage du profil --------------------------------
  'lrn.pickUp': { en: 'Pick up where you stopped', fr: "Reprenez là où vous vous êtes arrêté" },
  'lrn.step': { en: 'Step', fr: 'Étape' },
  'lrn.of': { en: 'of', fr: 'de' },
  'lrn.continue': { en: 'Continue', fr: 'Continuer' },
  'lrn.nothingLeft': { en: 'Nothing left in this room', fr: 'Il ne reste rien dans cette salle' },
  'lrn.allBuilt': { en: 'Every agent here is built', fr: "Tous les agents de cette salle sont construits" },
  'lrn.goBuild': { en: 'Go and build the one this dojo did not cover.', fr: "Construisez maintenant celui que ce dojo n'a pas abordé." },
  'lrn.master': { en: 'The master.', fr: 'Le maître.' },
  'lrn.yourBelt': { en: 'Your belt', fr: "Votre ceinture" },
  'lrn.beltRule': {
    en: 'finished end to end for the',
    fr: "terminés d'un bout à l'autre pour la",
  },
  'lrn.beltCount': {
    en: 'Belts count finished agents, never steps.',
    fr: 'Les ceintures comptent les agents terminés, jamais les étapes.',
  },
  'lrn.yourCourses': { en: 'Your', fr: "Vos" },
  'lrn.coursesWord': { en: 'courses', fr: 'cours' },
  'lrn.earnedH': { en: 'What you have earned', fr: "Ce que vous avez obtenu" },
  'lrn.earnedNone': {
    en: 'Nothing yet, and nothing is given for showing up. Finish one step and the first badge is yours.',
    fr: "Rien pour l'instant : la simple présence ne donne droit à rien. Terminez une étape pour obtenir votre premier insigne.",
  },
  'lrn.howCert': { en: 'How the certification works', fr: "Fonctionnement de la certification" },
  'lrn.nextDiploma': { en: 'Next diploma:', fr: 'Prochain diplôme :' },
  'lrn.small': {
    en: 'agents live in the dojo. Belts, badges and diplomas are progress markers kept in this browser. Nobody sells them, nobody verifies them, and no employer has heard of them: they exist so you can tell a course you finished from one you started.',
    fr: "agents vivent dans le dojo. Les ceintures, les insignes et les diplômes sont des repères de progression conservés dans ce navigateur. Personne ne les vend ni ne les vérifie, et aucun employeur ne les connaît : ils servent simplement à distinguer un cours terminé d'un cours commencé.",
  },

  // ---- le jeu · la carte, les cités, les dojos -----------------------------
  // Le CONTENU des dojos vit dans data/curriculum, à côté de son anglais. Ce
  // qui est ici est ce que dit l'écran autour, et qui se répète de cité en
  // cité.
  'g.mapTitle': { en: "The map", fr: "La carte" },
  'g.mapLead': { en: "Thirteen dojo cities. Cross them in any order you like: a master is waiting for you in each one.", fr: "Treize cités dojo, à parcourir dans l'ordre de votre choix : dans chacune, un maître vous attend." },
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
  'g.youDo': { en: "Your mission", fr: "Votre mission" },
  'g.trap': { en: "The trap to dodge", fr: "Le piège à éviter" },
  'g.claim': { en: "Grab the badge", fr: "Recevoir le badge" },
  'g.badgeGot': { en: "Badge earned!", fr: "Badge obtenu !" },
  'g.cityDone': { en: 'Back to the city', fr: 'Retour à la cité' },
  'g.cityDoneBody': { en: "You finished every dojo in this city. Well played! The map shows it, and you can replay any of them.", fr: "Vous avez terminé tous les dojos de cette cité. Félicitations ! La carte l'indique, et vous pouvez refaire chacun d'eux." },
  'g.replay': { en: "Replay any dojo, whenever you want", fr: "Refaites n'importe quel dojo, quand vous le souhaitez" },
  'g.noCity': { en: 'City not found', fr: 'Cité introuvable' },
  'g.noCityBody': { en: 'There is no city at that address.', fr: "Il n'y a aucune cité à cette adresse." },
  'g.noLevel': { en: 'Dojo not found', fr: 'Dojo introuvable' },
  'g.noLevelBody': { en: 'There is no dojo at that address.', fr: "Il n'y a aucun dojo à cette adresse." },
  'g.buyH2': { en: "What the full path unlocks", fr: "Ce que le parcours complet débloque" },
  'g.seePrices': { en: 'See the prices', fr: 'Voir les tarifs' },

  /* --- le jeu · la coquille et les onglets -------------------------------- */
  'nav.game': { en: 'Dojoburo', fr: 'Dojoburo' },
  'nav.training': { en: 'Training', fr: 'Training' },
  'nav.clan': { en: 'Clan', fr: 'Clan' },
  'nav.profile': { en: 'Profile', fr: 'Profil' },
  'gm.tabs': { en: 'Main navigation', fr: 'Navigation principale' },
  'tf.title': { en: "Pricing", fr: "Les tarifs" },
  'tf.lead': { en: "Pay once, keep everything. No subscription, no card for the free weekend.", fr: "Un paiement unique, un accès définitif. Aucun abonnement, et aucune carte bancaire pour le week-end gratuit." },
  'tf.cancelled': { en: "Payment cancelled. Nothing was charged.", fr: "Paiement annulé. Rien n'a été débité." },
  'tf.errOff': { en: "Payment is not switched on for this site yet. Nothing was charged.", fr: "Le paiement n'est pas encore activé sur ce site. Rien n'a été débité." },
  'tf.errRate': { en: "Too many attempts in a row. Wait a minute and try again.", fr: "Trop de tentatives successives. Patientez une minute, puis réessayez." },
  'tf.errUp': { en: "The payment page could not be reached. Nothing was charged.", fr: "La page de paiement est injoignable. Rien n'a été débité." },
  'tf.startFree': { en: "Start for free", fr: "Démarrer gratuitement" },
  'tf.main': { en: "The whole path", fr: "Le parcours complet" },
  'tf.once': { en: "paid once", fr: "payé une fois" },
  'tf.owned': { en: "Already yours", fr: "Déjà acquis" },
  'tf.buy': { en: "Buy", fr: "Acheter" },
  'tf.going': { en: "Opening the payment page…", fr: "Ouverture de la page de paiement…" },
  'tf.trade': { en: "A trade training", fr: "Une formation métier" },
  'tf.perTrade': { en: "per trade", fr: "par métier" },
  'tf.tradeAfter': { en: "Best taken after the full path: it does not explain the basics again.", fr: "À suivre après la formation complète : les bases n'y sont pas réexpliquées." },
  'tf.factsH': { en: "Good to know", fr: "Bon à savoir" },
  'tf.fact1': { en: "It is a one-time purchase, not a subscription.", fr: "C'est un achat unique, pas un abonnement." },
  'tf.fact2': { en: "The training opens in this browser once the payment is confirmed. Your progress is kept here too.", fr: "La formation s'ouvre dans ce navigateur dès la confirmation du paiement. Votre progression y est également conservée." },
  'tf.fact3': { en: "The first dojo of every city stays free, so you can judge before paying.", fr: "Le premier dojo de chaque cité reste gratuit, afin que vous puissiez juger avant de payer." },
  'mc.title': { en: "Welcome in!", fr: "Bienvenue !" },
  'mc.wait': { en: "Checking your payment…", fr: "Vérification de votre paiement…" },
  'mc.waitBody': { en: "It takes a second.", fr: "Cela ne prend qu'un instant." },
  'mc.okBody': { en: "Your payment is confirmed. You now have", fr: "Votre paiement est confirmé. Vous avez désormais accès à" },
  'mc.go': { en: "Go to my training", fr: "Accéder à ma formation" },
  'mc.noTitle': { en: "Nothing to open here", fr: "Rien à ouvrir ici" },
  'mc.noBody': { en: "This page did not receive a paid order. If you just paid, open the link from your payment confirmation again.", fr: "Cette page n'a reçu aucune commande payée. Si vous venez de payer, rouvrez le lien figurant dans votre confirmation de paiement." },
  'mc.errBody': { en: "We could not check the payment right now. Try again in a minute: nothing is lost.", fr: "Nous n'avons pas pu vérifier le paiement pour l'instant. Réessayez dans une minute : rien n'est perdu." },
  'ln.steps': { en: "The moves", fr: "Les étapes" },
  'ln.why': { en: "Why it works", fr: "Pourquoi cela fonctionne" },
  'ln.example': { en: "Before and after", fr: "Avant / après" },
  'ln.before': { en: "Before", fr: "Avant" },
  'ln.after': { en: "After", fr: "Après" },
  'ln.exercise': { en: "Your turn", fr: "À vous de jouer" },
  'ln.goal': { en: "What you will have:", fr: "Ce que vous allez obtenir :" },
  'ln.copy': { en: "Copy the prompt", fr: "Copier le prompt" },
  'ln.copied': { en: "Copied", fr: "Copié" },
  'ln.checkH': { en: "Check your result", fr: "Vérifiez votre résultat" },
  'ln.bonus': { en: "Going further:", fr: "Pour aller plus loin :" },
  'ln.q': { en: "Question", fr: "Question" },
  'gm.lv': { en: "Lv.", fr: "Niv." },
  'gm.toNext': { en: "XP to the next level", fr: "XP avant le niveau suivant" },
  'gm.dojosDone': { en: "dojos done", fr: "dojos terminés" },
  'gm.xpTitle': { en: "Experience earned across every dojo you finished", fr: "Expérience acquise sur l'ensemble des dojos terminés" },
  'gm.dojosTitle': { en: "Your dojos", fr: "Vos dojos" },
  'gm.dojosLead': { en: "Pick your training and finally put AI to work. Each one is a set of dojo cities you cross at your own pace.", fr: "Choisissez une formation pour apprendre à faire travailler l'IA pour vous. Chacune regroupe des cités dojo, que vous parcourez à votre rythme." },
  'gm.modules': { en: 'modules', fr: 'modules' },
  'gm.module1': { en: 'module', fr: 'module' },
  'gm.module': { en: 'Module', fr: 'Module' },
  'gm.dojo1': { en: 'dojo', fr: 'dojo' },
  'gm.needEmail': { en: 'Email asked', fr: "Adresse e-mail requise" },
  'gm.free': { en: 'Free', fr: 'Gratuit' },
  'gm.locked': { en: 'Locked', fr: "Verrouillé" },
  'gm.finished': { en: 'Done', fr: 'Terminé' },
  'gm.start': { en: "Let's go", fr: "Commencer" },
  'gm.see': { en: "Discover", fr: "Découvrez" },
  'gm.backDojos': { en: "Your dojos", fr: "Vos dojos" },
  'gm.noPack': { en: 'Training not found', fr: 'Formation introuvable' },
  'gm.noPackBody': { en: 'There is no training at that address.', fr: "Il n'y a aucune formation à cette adresse." },
  'gm.lockTitle': { en: "This training is still locked", fr: "Cette formation est encore verrouillée" },
  'gm.lockBody': { en: "The first dojo is open so you can judge for yourself. The rest comes with the training, bought once, yours for good.", fr: "Le premier dojo est ouvert pour que vous puissiez juger par vous-même. Le reste est inclus dans la formation, achetée une fois et acquise définitivement." },

  /* --- le clan ------------------------------------------------------------ */
  'cl.title': { en: "The clan", fr: "Le clan" },
  'cl.lead': { en: "Where disciples show what they built with AI.", fr: "Là où les disciples montrent ce qu'ils ont construit avec l'IA." },
  'cl.soonTitle': { en: "No feed yet, and I will not fake one", fr: "Pas encore de fil, et je ne vais pas en inventer un" },
  'cl.soonBody': { en: "A feed needs a server to receive what you post. There is none yet, so three invented messages here would only mean yours goes nowhere. This page becomes the feed the day it can carry one.", fr: "Un fil a besoin d'un serveur pour recevoir ce que tu y écris. Il n'y en a pas encore, donc trois messages inventés ici garantiraient seulement que le tien ne parte nulle part. Cette page devient le fil le jour où elle peut en porter un." },
  'cl.seeProfile': { en: "Your progress", fr: "Ta progression" },

  /* --- le profil et la carte --------------------------------------------- */
  'pr.mapTitle': { en: "The valley map", fr: "La carte de la vallée" },
  'pr.mapBody': { en: "See every dojo city and jump into one.", fr: "Visualisez toutes les cités dojo et accédez à l'une d'elles." },
  'pr.ownedH2': { en: "What you unlocked", fr: "Ce que vous avez débloqué" },
  'pr.tester': { en: "This address opens every training so you can read them. It is a test pass, not a purchase.", fr: "Cette adresse ouvre toutes les formations afin que vous puissiez les consulter. Il s'agit d'un accès de test, non d'un achat." },
  'pr.dataH2': { en: "Where your progress lives", fr: "Où votre progression est conservée" },
  'pr.dataBody': { en: "In this browser, and nowhere else. No account, nothing sent. Clear it and you lose what you finished here.", fr: "Dans ce navigateur, et nulle part ailleurs. Aucun compte, aucune donnée envoyée. Si vous effacez ces données, vous perdez ce que vous avez terminé ici." },
  'pr.forget': { en: 'Erase everything', fr: 'Tout effacer' },
  'pr.opened': { en: 'Open', fr: 'Ouverte' },
  'cm.title': { en: 'The valley', fr: 'La vallée' },
  'cm.lead': { en: "Every dojo city, and where you stand.", fr: "Toutes les cités dojo, et votre position." },
  'cm.close': { en: 'Close the map', fr: 'Fermer la carte' },
  /* --- la semaine gratuite ---------------------------------------------- */
  'd.title': { en: "The 7 days of AI!", fr: "Les 7 jours de l'IA" },
  'd.lead': { en: "One lesson a day, seven minutes each. You finally get the words, the tools and what it really costs.", fr: "Une leçon par jour, de sept minutes chacune. Vous maîtriserez le vocabulaire, les outils et le coût réel de l'IA." },
  'd.days': { en: 'days', fr: 'jours' },
  'd.start': { en: "Let's go", fr: "Commencer" },
  'd.openedFor': { en: 'Opened for', fr: 'Ouvert pour' },
  'd.whatH2': { en: 'The seven days', fr: 'Les sept jours' },
  'd.afterH2': { en: 'And after the week', fr: 'Et après la semaine' },
  'd.seePath': { en: 'See the full path', fr: 'Voir le parcours complet' },
  'd.ask': { en: "Your email opens the week", fr: "Votre adresse e-mail ouvre la semaine" },
  'd.place': { en: "you@example.com", fr: "vous@exemple.com" },
  'd.open': { en: "Open my week", fr: "Ouvrir ma semaine" },
  'd.fine': {
    en: 'Kept in this browser. Nothing is sent anywhere, and the seven days open straight away.',
    fr: "Conservée dans ce navigateur. Rien n'est envoyé, et les sept jours s'ouvrent immédiatement.",
  },

  /* --- le profil ---------------------------------------------------------- */
  'pr.title': { en: "Your progress", fr: "Votre progression" },
  'pr.lead': { en: "What you earned, and where to jump back in.", fr: "Ce que vous avez obtenu, et où reprendre." },
  'pr.badges': { en: 'badges', fr: 'badges' },
  'pr.ofPath': { en: 'of the path', fr: 'du parcours' },
  'pr.caseH2': { en: "Your trophy case", fr: "Votre vitrine" },
  'pr.citiesH2': { en: "Your cities", fr: "Vos cités" },
  'pr.replay': { en: 'Redo', fr: 'Refaire' },
  'pr.sheet': { en: 'Take-away sheet', fr: 'Fiche à emporter' },

  /* --- ce qui est fermé --------------------------------------------------- */
  'g.lockWeek': { en: "Drop your email to open this", fr: "Indiquez votre adresse pour y accéder" },
  'g.lockWeekBody': { en: "The seven discovery days are free. One address and they open.", fr: "Les sept jours de découverte sont gratuits. Une adresse e-mail suffit pour les ouvrir." },
  'g.lockPath': { en: 'This dojo is part of the full path', fr: 'Ce dojo fait partie du parcours complet' },
  'g.lockPathBody': {
    en: 'The first dojo of every city is open. The rest comes with the path, bought once.',
    fr: "Le premier dojo de chaque cité est ouvert. Le reste est inclus dans le parcours, acheté une fois.",
  },
  'g.freeFirst': { en: 'First dojo, free', fr: 'Premier dojo, gratuit' },
  // L'ÉTIQUETTE DU MAÎTRE · elle était écrite en dur, en anglais, dans le
  // composant 3D. Sur un écran français elle donnait « Sensei · dojo master »
  // au milieu d'une leçon en français · exactement le mélange de langues déjà
  // signalé une fois. Un texte visible n'a rien à faire ailleurs qu'ici.
  'g.senseiTag': { en: 'Sensei · dojo master', fr: 'Sensei · maître du dojo' },
  'g.toWeek': { en: 'The free week', fr: 'La semaine gratuite' },
  'g.profile': { en: "Your progress", fr: "Votre progression" },

  /* --- les formations métier ---------------------------------------------- */
  'tr.title': { en: "Pick your trade", fr: "Choisissez votre métier" },
  'tr.lead': { en: "The same dojo cities, filled with the objects of your job and the mistakes that go with it.", fr: "Les mêmes cités dojo, appliquées aux objets de votre métier et aux erreurs qui les accompagnent." },
  'tr.needH2': { en: 'It builds on the path', fr: 'Elle prolonge le parcours' },
  'tr.needBody': { en: "A trade course assumes you finished the path. It does not explain context or roles again, which is why it is shorter and cheaper.", fr: "Une formation métier suppose que vous avez suivi le parcours. Elle ne réexplique ni le contexte ni les rôles ; c'est pourquoi elle est plus courte et moins chère." },
  'tr.pick': { en: "Train on this trade", fr: "S'entraîner sur ce métier" },
  'tr.picked': { en: "This is your trade", fr: "C'est votre métier" },
  'tr.toTrade': { en: "Your trade", fr: "Votre métier" },
  'tr.backTrades': { en: 'Back to the trades', fr: 'Retour aux métiers' },
  'tr.noTrade': { en: 'Trade not found', fr: 'Métier introuvable' },
  'tr.noTradeBody': { en: 'There is no trade at that address.', fr: "Il n'y a aucun métier à cette adresse." },
  'tr.lock': { en: 'This city belongs to a trade course', fr: 'Cette cité appartient à une formation métier' },
  'tr.lockBody': {
    en: 'The first dojo of every city is open. The rest comes with the trade, bought once.',
    fr: "Le premier dojo de chaque cité est ouvert. Le reste est inclus dans la formation métier, achetée une fois.",
  },
  'tr.yours': { en: "Your trade", fr: "Votre métier" },
  'tr.none': { en: 'No trade picked yet', fr: 'Aucun métier choisi' },

  /* --- le site promo ------------------------------------------------------- */
  'lp2.heroGo': { en: "Start the free week", fr: "Commencer la semaine gratuite" },
  'lp2.whoPill': { en: 'Who it is for', fr: "À qui elle s'adresse" },
  'lp2.whoH2': { en: "Stuck with AI? Three ways it shows", fr: "Bloqué face à l'IA ? Trois situations typiques" },
  'lp2.insidePill': { en: 'What is inside', fr: "Contenu de la formation" },
  'lp2.insideH2': { en: "One free week, one path, one trade", fr: "Une semaine gratuite, un parcours, un métier" },
  'lp2.o1': { en: 'The discovery week', fr: 'La semaine de découverte' },
  'lp2.o1b': {
    en: 'The words, the limits, the tools, and what it really costs. Seven real lessons, not a sample.',
    fr: "Les mots, les limites, les outils, et ce que cela coûte vraiment. Sept vraies leçons, pas un échantillon.",
  },
  'lp2.o1go': { en: "Start now", fr: "Commencer" },
  'lp2.o2': { en: 'The full path', fr: 'Le parcours complet' },
  'lp2.o2b': { en: "Prompting, the models, the five assistants, agents, design and cost. Yours for good, updates included.", fr: "Le prompt, les modèles, les cinq assistants, les agents, le design et le coût. Acquis définitivement, mises à jour comprises." },
  'lp2.o2go': { en: 'See the map', fr: 'Voir la carte' },
  'lp2.o3': { en: "Your trade", fr: "Votre métier" },
  'lp2.o3b': { en: "The objects of your job and the mistakes that go with it. On top of the path, never instead of it.", fr: "Les objets de votre métier et les erreurs qui les accompagnent. En complément du parcours, jamais à sa place." },
  'lp2.o3go': { en: 'See the trades', fr: 'Voir les métiers' },
  'lp2.trades': { en: 'trades', fr: 'métiers' },
  'lp2.citiesH2': { en: "The whole programme, out in the open", fr: "Le programme complet, en accès libre" },
  'lp2.citiesLead': { en: "Every city, every dojo, readable before you pay. The first dojo of each one is open.", fr: "Chaque cité et chaque dojo sont consultables avant tout paiement. Le premier dojo de chacune est ouvert." },
  'lp2.howPill': { en: 'How it goes', fr: "Déroulement" },
  'lp2.howH2': { en: "A game, and it is on purpose!", fr: "Un jeu, et c'est délibéré" },
  'lp2.badges': { en: 'badges in the path, one per dojo, and every dojo can be redone.', fr: 'badges dans le parcours, un par dojo, et chaque dojo peut être refait.' },
  'lp2.tradesH2': { en: "And then, your own trade", fr: "Et ensuite, votre métier" },
  'lp2.tradesLead': { en: "Same cities, same dojos, same masters. What changes is the matter: your objects, your mistakes.", fr: "Mêmes cités, mêmes dojos, mêmes maîtres. Seule la matière change : vos objets, vos erreurs." },
  'lp2.saidPill': { en: 'What students say', fr: "Ce qu'en disent les élèves" },
  'lp2.saidH2': { en: "Nothing yet, and I will not invent it", fr: "Aucun avis pour l'instant, aucun inventé" },
  'lp2.saidBody': { en: "This course is new. Rather than write three testimonials nobody gave, this section stays empty until real students have finished. Judge it on the free week instead.", fr: "Cette formation est récente. Plutôt que de publier trois témoignages que personne n'a donnés, nous laissons cette section vide jusqu'à ce que de vrais élèves l'aient terminée. Jugez-la sur la semaine gratuite." },
  'lp2.saidGo': { en: "Judge for yourself", fr: "Jugez par vous-même" },
  'lp2.faqH2': { en: 'The questions people actually ask', fr: "Les questions réellement posées" },
  'lp2.finalH2': { en: "Seven days, seven minutes a day!", fr: "Sept jours, sept minutes par jour" },
  'lp2.finalFoot': {
    en: 'No card, no trial that turns into a charge. An email, and the week opens.',
    fr: "Aucune carte bancaire, aucun essai converti en prélèvement. Une adresse e-mail suffit pour ouvrir la semaine.",
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
