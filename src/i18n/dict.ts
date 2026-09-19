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
  'i18n.partial': {
    en: 'The interface is in French. The course content is still being translated.',
    fr: "L'interface est en français. Le contenu des cours est encore en cours de traduction.",
  },
  'i18n.partialShort': { en: 'Course text still in English', fr: 'Cours encore en anglais' },

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
  'lp.libPill': { en: 'Prompts · .md briefs · agent skills', fr: 'Prompts · briefs .md · skills d\'agents' },
  'lp.libH2': { en: 'Filed by the job you actually do', fr: 'Classés par le métier que vous exercez' },
  'lp.libLead': {
    en: 'Not a wall of clever one-liners. Each entry says what it is for, why it is written that way, what it costs to run, and what to change for your own case. Pick your trade and take what fits.',
    fr: "Pas un mur de formules malignes. Chaque entrée dit à quoi elle sert, pourquoi elle est écrite comme ça, ce qu'elle coûte à faire tourner, et quoi changer pour votre cas. Choisissez votre métier et prenez ce qui convient.",
  },
  'lp.libGo': { en: 'Open the library', fr: 'Ouvrir la bibliothèque' },
  'lp.libFiles': { en: 'files', fr: 'fichiers' },
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
  'price.forever': { en: '/ forever', fr: '/ pour toujours' },
  'price.month': { en: '/ month', fr: '/ mois' },
  'price.seatMonth': { en: '/ seat / month', fr: '/ siège / mois' },
  'price.from': { en: 'from', fr: 'à partir de' },
  'price.aMonth': { en: 'a month', fr: 'par mois' },
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
