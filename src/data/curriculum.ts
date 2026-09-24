// LE PROGRAMME ENTIER · une seule source, pour le jeu et pour le site.
//
// ---------------------------------------------------------------------------
// CE QUE CE FICHIER REMPLACE, ET POURQUOI
//
// Le contenu vivait dans cinq fichiers qui ne se connaissaient pas : les douze
// agents, les vingt leçons de l'académie, les sept leviers de sobriété, et les
// deux cours de design. Cinq formes différentes, cinq façons de compter une
// progression, et aucune d'elles ne savait dire à quelle CITÉ elle appartient.
//
// Le produit est maintenant un parcours : une semaine gratuite, puis des cités
// dojo qu'on visite dans l'ordre qu'on veut. Une cité par module, un dojo par
// niveau, un maître par dojo. Il faut donc une seule structure qui porte ça,
// sinon la carte du jeu et la page de vente comptent chacune de leur côté.
//
// ---------------------------------------------------------------------------
// LES TEXTES SONT COURTS, ET C'EST LA RÈGLE
//
// L'ancien contenu était long : des leçons de huit cents mots, des blocs de
// prose, des paragraphes qui expliquaient avant de montrer. Ça se lit comme un
// article, pas comme un niveau. Un niveau tient en six choses :
//
//   ce qu'on apprend      une phrase
//   ce qu'on fait         une phrase, à l'impératif
//   les gestes            trois ou quatre lignes
//   le piège              une ligne
//   la question           on vérifie qu'on a compris
//   le badge              on repart avec quelque chose
//
// Si un niveau ne tient pas là-dedans, c'est qu'il contient deux niveaux.
// scripts/test-curriculum.mjs fait échouer la construction au-delà des
// longueurs retenues ici, parce que la prose repousse toujours.
//
// ---------------------------------------------------------------------------
// BILINGUE DÈS LA NAISSANCE
//
// Le site est en français et en anglais. Écrire ce fichier dans une seule
// langue recontracterait la dette qu'un lot entier vient de payer, et il est
// bien plus coûteux de traduire soixante niveaux après coup que de les écrire
// une fois pour deux.
import type { IconName } from './icons'
import { B, say, type Bi } from './bilingual'
import { TRADE_MODULES } from './trades'

// LE PRIMITIF BILINGUE VIT AILLEURS · dans data/bilingual, et il est réexporté
// ici pour que tout ce qui lisait `B` et `say` depuis ce fichier continue de
// marcher. Il a dû sortir le jour où les formations métier sont arrivées : ce
// fichier les importe, elles ont besoin de `B`, et un import circulaire aurait
// donné un `B` non encore défini au chargement, c'est-à-dire une page blanche.
export { B, say }
export type { Bi }

/* ------------------------------------------------------------------ */
/* LES TROIS PARCOURS                                                  */
/* ------------------------------------------------------------------ */

export type TrackId = 'discovery' | 'path' | 'trade'

/** Ce que chaque parcours est, et ce qu'il faut avoir pour y entrer.
 *
 *  L'ACCÈS EST UNE DONNÉE, pas une condition écrite dans un écran. Trois
 *  surfaces décident d'ouvrir ou non un niveau (la carte, la page du module,
 *  le profil) et trois conditions écrites à la main auraient fini par ne plus
 *  dire la même chose, ce qui veut dire : quelqu'un lit gratuitement ce qu'un
 *  autre a payé, ou l'inverse. */
export const TRACK_ACCESS: Record<TrackId, 'email' | 'path' | 'trade'> = {
  discovery: 'email',
  path: 'path',
  trade: 'trade',
}

/* ------------------------------------------------------------------ */
/* UN NIVEAU                                                           */
/* ------------------------------------------------------------------ */

export interface Quiz {
  q: Bi
  options: Bi[]
  /** l'indice de la bonne réponse · un rang, jamais une phrase */
  answer: number
  why: Bi
}

export interface Level {
  id: string
  title: Bi
  /** une phrase · ce qu'on saura faire en sortant */
  learn: Bi
  /** une phrase à l'impératif · ce qu'on FAIT dans ce dojo */
  act: Bi
  /** trois ou quatre gestes · pas des chemins de menu, voir plus bas */
  steps: Bi[]
  /** l'erreur du débutant, nommée · dire la bonne façon n'apprend pas à
   *  éviter la mauvaise */
  trap: Bi
  quiz: Quiz
  /** le nom du badge gagné en finissant · court, il s'affiche sur une carte */
  badge: Bi
  /** le maître qui attend dans ce dojo · un identifiant de data/agentUseCases,
   *  jamais un nom recopié : les noms sont traduits, les identifiants non */
  master: string
  minutes: number
}

/* ------------------------------------------------------------------ */
/* UNE CITÉ DOJO                                                       */
/* ------------------------------------------------------------------ */

export interface Module {
  id: string
  track: TrackId
  title: Bi
  /** une ligne · ce qu'on vient y chercher */
  blurb: Bi
  glyph: IconName
  /** la couleur de la cité sur la carte */
  tint: string
  /** où la cité se pose sur la carte du monde, en cases · voir game/worldMap */
  at: [number, number]
  levels: Level[]
}

/* ------------------------------------------------------------------ */
/* LA SEMAINE DE DÉCOUVERTE · gratuite, une leçon par jour             */
/* ------------------------------------------------------------------ */
//
// SEPT JOURS, ET CHACUN ENSEIGNE. Le modèle dont elle s'inspire consacre deux
// de ses sept jours à sa communauté et à son auteur. Ça marche pour vendre et
// ça ne marche pas pour apprendre : quelqu'un qui donne sept jours de son
// attention doit repartir avec sept choses qu'il sait faire. Les deux jours en
// question sont donc remplacés par les deux leçons qui manquent le plus à un
// débutant, et que presque personne ne fait : ce qu'une IA ne sait PAS faire,
// et ce qu'elle coûte vraiment.

const DISCOVERY: Level[] = [
  {
    id: 'words',
    master: 'research',
    minutes: 6,
    title: B("Finally speak AI's language", "Parlez enfin la langue de l'IA"),
    learn: B(
      'You will understand the basic AI words that people use around you without ever explaining them.',
      "Vous comprendrez les termes fondamentaux de l'IA, que chacun emploie autour de vous sans jamais les définir.",
    ),
    act: B('Write each word down and explain it in one sentence, in your own words.',
      'Notez chaque terme et définissez-le en une phrase, avec vos propres mots.'),
    steps: [
      B('A model (or LLM) is a program that writes text by predicting the next word. That is all it does.',
        "Un modèle, ou LLM, est un programme qui produit du texte en prédisant le mot suivant. Il ne fait rien d'autre."),
      B('A token is a small piece of a word. You pay for the number of tokens, not per answer.',
        'Un token est un fragment de mot. Vous payez au nombre de tokens, et non à la réponse.'),
      B('A prompt is your written request. The context is everything sent with it. The context window is what it can read at once.',
        "Le prompt est votre demande écrite. Le contexte est tout ce qui l'accompagne. La context window est ce que le modèle lit en une fois."),
      B('An agent is a model with a job, a method and tools. That is what makes it more than a simple chat.',
        "Un agent est un modèle doté d'un métier, d'une méthode et d'outils. C'est ce qui le distingue d'une simple conversation."),
    ],
    trap: B(
      'Pretending to understand a word you do not know. It comes back in the day four lesson, and you will be lost.',
      'Faire semblant de comprendre un terme inconnu. Il reviendra dans la leçon du quatrième jour, et vous serez alors perdu.',
    ),
    quiz: {
      q: B('You are billed by the token. So what is a token?',
        "Vous êtes facturé au token. Qu'est-ce donc qu'un token ?"),
      options: [
        B('A piece of a word, in and out', 'Un fragment de mot, en entrée comme en sortie'),
        B('One complete question you ask', 'Une question complète que vous posez'),
        B('One minute of use', "Une minute d'utilisation"),
      ],
      answer: 0,
      why: B(
        'Everything you send and everything that comes back is cut into pieces and counted. That is why a long conversation costs more than a short one on the same topic.',
        "Tout ce que vous envoyez et tout ce qui revient est découpé en fragments, puis compté. C'est pourquoi une longue conversation coûte davantage qu'une courte sur le même sujet.",
      ),
    },
    badge: B('Speaks the language', 'Parle la langue'),
  },
  {
    id: 'limits',
    master: 'watch',
    minutes: 6,
    title: B('Where AI gets it wrong', "Là où l'IA se trompe"),
    learn: B(
      'Still fooled by wrong answers? Learn the four classic mistakes a model makes.',
      "Les réponses fausses vous trompent encore ? Découvrez les quatre erreurs classiques d'un modèle.",
    ),
    act: B('Ask a model a question you already know the answer to, and look for its mistakes.',
      'Posez à un modèle une question dont vous connaissez la réponse, puis relevez ses erreurs.'),
    steps: [
      B('It has no memory between conversations. Each one starts from nothing.',
        "Il ne conserve aucune mémoire d'une conversation à l'autre : chacune repart de zéro."),
      B('It invents sources that look real. Never trust a reference you have not opened.',
        "Il invente des sources d'apparence authentique. Ne vous fiez jamais à une référence que vous n'avez pas ouverte."),
      B('It tends to agree with you. Ask it to defend the opposite view: it will often switch sides.',
        "Il tend à vous donner raison. Demandez-lui de défendre l'avis contraire : il changera souvent de position."),
      B('It cannot count or calculate reliably. Check every number.',
        'Il ne sait ni compter ni calculer de façon fiable. Vérifiez chaque nombre.'),
    ],
    trap: B(
      'Trusting an answer because it sounds sure of itself. A model sounds just as confident when it is wrong.',
      "Se fier à une réponse parce qu'elle paraît assurée. Un modèle s'exprime avec la même assurance lorsqu'il se trompe.",
    ),
    quiz: {
      q: B('A model hands you a study with an author and a year. What do you do?',
        'Un modèle vous fournit une étude, avec un auteur et une année. Que faites-vous ?'),
      options: [
        B('Quote it, the detail proves it is real', "La citer, puisque le détail prouve qu'elle existe"),
        B('Open it before quoting it', "L'ouvrir avant de la citer"),
        B('Ask the model whether it is sure', "Demander au modèle s'il en est sûr"),
      ],
      answer: 1,
      why: B(
        'Invented references are often very detailed, because details make them look real. Asking the model does not help: it will just say yes.',
        "Les références inventées sont souvent très détaillées, car le détail les rend crédibles. Interroger le modèle n'apporte rien : il répondra simplement oui.",
      ),
    },
    badge: B('Checks before quoting', 'Vérifie avant de citer'),
  },
  {
    id: 'tools',
    master: 'triage',
    minutes: 7,
    title: B('The right tool for each job', 'Le bon outil pour chaque tâche'),
    learn: B(
      'Using one tool for everything? You will learn which tool to pick for each kind of job.',
      'Vous utilisez un seul outil pour tout ? Vous apprendrez lequel choisir pour chaque type de travail.',
    ),
    act: B('Take one task from your week and name the tool that fits it.',
      "Choisissez une tâche de votre semaine et nommez l'outil qui lui correspond."),
    steps: [
      B('To think things through, write or rewrite: use a chat assistant.',
        'Pour réfléchir, rédiger ou réécrire : un assistant conversationnel.'),
      B('For a question that needs recent sources: use a search assistant that cites them.',
        'Pour une question qui exige des sources récentes : un assistant de recherche qui les cite.'),
      B('For work inside your documents and emails: use an assistant connected to them.',
        'Pour travailler dans vos documents et vos courriels : un assistant connecté à ces outils.'),
      B('For a job you repeat every week: build an agent. That is what the paid path teaches.',
        "Pour un travail répété chaque semaine : construisez un agent. C'est l'objet du parcours payant."),
    ],
    trap: B(
      'Picking the tool everyone talks about instead of the one that fits your task. They are rarely the same.',
      "Choisir l'outil à la mode plutôt que celui qui convient à votre tâche. Ce sont rarement les mêmes.",
    ),
    quiz: {
      q: B("You need last quarter's figures, with their sources. Which tool?",
        'Vous avez besoin des chiffres du dernier trimestre, avec leurs sources. Quel outil choisir ?'),
      options: [
        B('A search assistant that cites what it reads', "Un assistant de recherche qui cite ce qu'il lit"),
        B('A chat assistant, which has read a great deal', 'Un assistant conversationnel, qui a énormément lu'),
        B('Any of them, they are equivalent', "N'importe lequel, car ils se valent"),
      ],
      answer: 0,
      why: B(
        'A chat assistant answers from what it learned in training. That knowledge stops at a date and has no sources. Recent figures need a tool that searches and shows where it looked.',
        "Un assistant conversationnel répond à partir de ce qu'il a appris lors de son entraînement. Ce savoir s'arrête à une date et ne cite aucune source. Des chiffres récents exigent un outil qui cherche et indique où.",
      ),
    },
    badge: B('Picks the right tool', 'Choisit le bon outil'),
  },
  {
    id: 'brief',
    master: 'writing',
    minutes: 8,
    title: B('Write a prompt it can follow', 'Rédigez un prompt que le modèle peut suivre'),
    learn: B(
      'You will write a precise request the model follows, instead of a vague wish it has to guess.',
      "Vous rédigerez une demande précise que le modèle peut suivre, plutôt qu'un souhait vague qu'il doit deviner.",
    ),
    act: B('Rewrite your last request with the four parts below, then run both versions and compare.',
      'Réécrivez votre dernière demande selon les quatre parties ci-dessous, puis exécutez les deux versions et comparez-les.'),
    steps: [
      B('The outcome: describe in concrete terms what you want to get at the end.',
        'Le résultat : décrivez concrètement ce que vous souhaitez obtenir à la fin.'),
      B('The audience: say who will read it. It changes how everything is written.',
        'Le public : précisez qui lira le texte. Cela modifie la manière dont tout est rédigé.'),
      B('The constraints: length, tone, what must appear, what to avoid.',
        'Les contraintes : longueur, registre, éléments obligatoires, éléments à éviter.'),
      B('The test: decide in advance how you will check that the result is good.',
        "Le critère : déterminez à l'avance comment vous vérifierez que le résultat est satisfaisant."),
    ],
    trap: B(
      'Adding "be creative" or "be professional". These words are too vague: the model cannot turn them into anything precise.',
      'Ajouter « sois créatif » ou « sois professionnel ». Ces termes sont trop vagues : le modèle ne peut rien en tirer de précis.',
    ),
    quiz: {
      q: B('Which of these is a precise request rather than a wish?',
        'Laquelle de ces formulations est une demande précise, et non un simple souhait ?'),
      options: [
        B('"Write something really good about our launch, for our customers"', "« Écris quelque chose de vraiment bien sur notre lancement, pour nos clients »"),
        B('"120 words for our customers, lead with the date, no adjectives"',
          "« 120 mots pour nos clients, commence par la date, aucun adjectif »"),
        B('"Make it punchy and modern"', "« Fais quelque chose de percutant et moderne »"),
      ],
      answer: 1,
      why: B(
        'It gives the length, the reader, what comes first and what to avoid. The other two can mean fifty different things, so the model has to guess.',
        "Elle fixe la longueur, le lecteur, ce qui vient en premier et ce qu'il faut éviter. Les deux autres admettent cinquante interprétations : le modèle doit donc deviner.",
      ),
    },
    badge: B('Writes a precise prompt', 'Écrit un prompt précis'),
  },
  {
    id: 'levers',
    master: 'analysis',
    minutes: 7,
    title: B('Four moves for better answers', 'Quatre gestes pour de meilleures réponses'),
    learn: B(
      'You will learn four moves that improve an answer more than rewording your request.',
      "Vous apprendrez quatre gestes qui améliorent une réponse davantage qu'une reformulation de la demande.",
    ),
    act: B('Take an answer you did not like and try two of these four moves on it.',
      'Reprenez une réponse qui ne vous a pas satisfait et appliquez-lui deux de ces quatre gestes.'),
    steps: [
      B('Show an example of the result you want. One example works better than a paragraph of instructions.',
        "Montrez un exemple du résultat attendu. Un exemple est plus efficace qu'un paragraphe d'instructions."),
      B('Ask for the plan first. Fix the plan, then ask for the text.',
        "Demandez d'abord le plan. Corrigez-le, puis demandez le texte."),
      B('Ask it to point out what it is unsure about. That is often where the mistakes are.',
        "Demandez-lui de signaler ses incertitudes. C'est souvent là que se trouvent les erreurs."),
      B('After a few failed fixes, open a new conversation. The old one keeps its mistakes in view and repeats them.',
        "Après plusieurs corrections infructueuses, ouvrez une nouvelle conversation. L'ancienne garde ses erreurs en vue et les reproduit."),
    ],
    trap: B(
      'Adding more adjectives to the same request. By the tenth try, the answer is worse than the first and has cost ten times more.',
      "Ajouter toujours plus d'adjectifs à la même demande. Au dixième essai, la réponse est moins bonne qu'au premier et a coûté dix fois plus.",
    ),
    quiz: {
      q: B('The tone is wrong for the fourth time. What works best?',
        'Le ton est inadapté pour la quatrième fois. Quelle approche est la plus efficace ?'),
      options: [
        B('Repeat "more professional" and add three adjectives to be clearer', "Répéter « plus professionnel » et ajouter trois adjectifs pour être plus clair"),
        B('Paste two paragraphs you consider good and ask for that voice',
          'Coller deux paragraphes que vous jugez réussis et demander ce même registre'),
        B('Change model', 'Changer de modèle'),
      ],
      answer: 1,
      why: B(
        'A tone is hard to describe but easy to show. Two real examples do more than ten adjectives.',
        'Un ton est difficile à décrire, mais facile à montrer. Deux exemples réels sont plus efficaces que dix adjectifs.',
      ),
    },
    badge: B('Shows instead of telling', 'Montre au lieu de décrire'),
  },
  {
    id: 'agents',
    master: 'orchestration',
    minutes: 8,
    title: B('AI agents, demystified', 'Les agents IA, démystifiés'),
    learn: B(
      'You will know whether your problem needs an agent or just a good prompt.',
      'Vous saurez déterminer si votre problème exige un agent ou simplement un bon prompt.',
    ),
    act: B('Take a task you repeat every week and describe, in four parts, the agent that would do it.',
      "Choisissez une tâche hebdomadaire et décrivez, en quatre parties, l'agent qui l'accomplirait."),
    steps: [
      B('A job: the one thing it is responsible for, written in one sentence.',
        "Un métier : l'unique responsabilité de l'agent, formulée en une phrase."),
      B('A method: the steps it follows every time, in the same order.',
        "Une méthode : les étapes qu'il suit à chaque fois, dans le même ordre."),
      B('Tools: the two or three it is allowed to use, not nine.',
        "Des outils : les deux ou trois qu'il est autorisé à utiliser, et non neuf."),
      B('Limits: the rules it keeps even when someone asks it to break them.',
        "Des limites : les règles qu'il respecte, même lorsqu'on lui demande de les enfreindre."),
    ],
    trap: B(
      'Building an agent for a task you do twice a year. Setting it up takes longer than doing the task yourself.',
      'Construire un agent pour une tâche effectuée deux fois par an. Sa mise en place prend plus de temps que la tâche elle-même.',
    ),
    quiz: {
      q: B('When is an agent worth building?',
        'Quand vaut-il la peine de construire un agent ?'),
      options: [
        B('When the task comes back, and always the same way',
          'Quand la tâche revient, et toujours de la même façon'),
        B('When the task is difficult enough to justify the time', 'Quand la tâche est assez difficile pour justifier le temps'),
        B('When you have the budget', 'Quand vous disposez du budget'),
      ],
      answer: 0,
      why: B(
        'An agent is a method you write down once. That effort pays off from the second use onwards. A hard task you do only once just needs a good prompt.',
        'Un agent est une méthode rédigée une fois pour toutes. Cet effort est rentable dès la deuxième utilisation. Une tâche difficile réalisée une seule fois requiert simplement un bon prompt.',
      ),
    },
    badge: B('Knows when to automate', 'Sait quand automatiser'),
  },
  {
    id: 'cost',
    master: 'tools',
    minutes: 7,
    title: B('What it really costs you', 'Ce que cela vous coûte réellement'),
    learn: B(
      'You will be able to estimate your bill in advance, and know which move lowers it the most.',
      "Vous saurez estimer votre facture à l'avance et identifier le geste qui la réduit le plus.",
    ),
    act: B('Estimate what one week of your usage would cost.',
      "Estimez le coût d'une semaine de votre usage."),
    steps: [
      B('Each new message resends the whole conversation. So you pay for a long conversation again at every turn.',
        "Chaque nouveau message renvoie l'intégralité de la conversation. Une longue conversation est donc facturée à nouveau à chaque tour."),
      B('Tools you switch on are sent with every step, even when they are not used.',
        "Les outils activés sont envoyés à chaque étape, même lorsqu'ils ne servent pas."),
      B('The biggest model is rarely the right one. Pick a model that fits how hard the task is.',
        'Le plus gros modèle est rarement le bon. Choisissez un modèle adapté à la difficulté de la tâche.'),
      B('Measure before you cut. Most people try to save on the part that costs almost nothing.',
        'Mesurez avant de réduire. La plupart des gens économisent sur la partie qui ne coûte presque rien.'),
    ],
    trap: B(
      'Shortening your prompt to save tokens. It is the cheapest part, and it is what decides the quality of the answer.',
      "Raccourcir votre prompt pour économiser des tokens. C'est la partie la moins coûteuse, et c'est elle qui détermine la qualité de la réponse.",
    ),
    quiz: {
      q: B('Which of these cuts the bill most?',
        'Quelle mesure réduit le plus la facture ?'),
      options: [
        B('Writing shorter instructions on every single request you make', 'Écrire des prompts plus courts pour chacune de vos demandes'),
        B('Asking politely', 'Demander poliment'),
        B('Starting a fresh conversation instead of a fiftieth turn',
          "Ouvrir une nouvelle conversation plutôt qu'un cinquantième tour"),
      ],
      answer: 2,
      why: B(
        'At the fiftieth turn, the forty-nine turns before it are sent again. Your prompt is only a few lines; the history weighs far more.',
        "Au cinquantième tour, les quarante-neuf tours précédents sont renvoyés. Votre prompt ne fait que quelques lignes : l'historique pèse bien plus lourd.",
      ),
    },
    badge: B('Reads the bill', 'Lit la facture'),
  },
]

export const DISCOVERY_MODULE: Module = {
  id: 'discovery',
  track: 'discovery',
  title: B('Seven days to get started!', 'Sept jours pour commencer'),
  blurb: B(
    'One lesson a day. By the end you know the words, the tools, and what it all costs.',
    'Une leçon par jour. Au terme de la semaine, vous connaissez le vocabulaire, les outils et leur coût réel.',
  ),
  glyph: 'peak',
  tint: '#7b5cff',
  at: [0, 0],
  levels: DISCOVERY,
}

/* ------------------------------------------------------------------ */
/* LA FORMATION · treize cités, dans l'ordre qu'on veut               */
/* ------------------------------------------------------------------ */
//
// L'ORDRE EST UN CONSEIL, PAS UNE SERRURE. Les cités s'ouvrent toutes le jour
// de l'achat. Quelqu'un qui sait déjà écrire une consigne n'a aucune raison de
// refaire le module deux avant d'entrer dans le module onze, et le forcer
// l'aurait fait partir. Le numéro affiché sur la carte dit par où commencer
// quand on ne sait pas, et rien de plus.
//
// LES CINQ MODULES D'OUTILS (ChatGPT, Claude, Gemini, Perplexity, Copilot)
// n'enseignent PAS des chemins de menu, pour la raison écrite en tête de
// data/frameworks : une capture d'écran est fausse à la version suivante,
// quelqu'un la suit, ça ne marche pas, et il croit avoir mal compris. Ils
// enseignent ce que chaque outil FAIT DIFFÉREMMENT des autres, ce qui reste
// vrai quand les boutons bougent.

const M_START: Level[] = [
  {
    id: 'why-here',
    master: 'planning',
    minutes: 5,
    title: B('The task eating your week', 'La tâche qui accapare votre semaine'),
    learn: B(
      'Losing hours on the same task every week? Choose it now: you will practise on it throughout the course.',
      "Une même tâche vous coûte des heures chaque semaine ? Choisissez-la maintenant : elle servira d'exercice tout au long du parcours.",
    ),
    act: B('Write down, in one sentence, one task that eats your week.',
      'Décrivez en une phrase une tâche qui accapare votre semaine.'),
    steps: [
      B('Pick something you do at least once a week. A rare task gives you too few chances to practise.',
        "Choisissez une tâche effectuée au moins une fois par semaine. Une tâche rare offre trop peu d'occasions de s'exercer."),
      B('Describe what you have in hand when it is done: a file, a message, a decision.',
        'Décrivez ce que vous obtenez une fois la tâche terminée : un fichier, un message, une décision.'),
      B('Note how long it takes you today. You will compare at the end of the course.',
        "Notez le temps qu'elle vous demande aujourd'hui. Vous comparerez à la fin du parcours."),
    ],
    trap: B(
      'Choosing an impressive task instead of a frequent one. You learn by repeating, so pick the one you do often.',
      "Choisir une tâche impressionnante plutôt qu'une tâche fréquente. On apprend par la répétition : retenez celle que vous accomplissez souvent.",
    ),
    quiz: {
      q: B('Which task should you carry through the course?',
        "Quelle tâche retenir pour l'ensemble du parcours ?"),
      options: [
        B('The hardest one you can think of', 'La plus difficile que vous puissiez imaginer'),
        B('One you repeat every week', 'Une tâche que vous répétez chaque semaine'),
        B('One nobody else does', "Une tâche que personne d'autre n'effectue"),
      ],
      answer: 1,
      why: B(
        'A weekly task gives you ten chances to test what you learn. A hard one gives you one, and a single try cannot tell luck from skill.',
        "Une tâche hebdomadaire vous offre dix occasions de tester ce que vous apprenez. Une tâche difficile n'en offre qu'une, et un essai unique ne permet pas de distinguer la chance de la compétence.",
      ),
    },
    badge: B('Has a target', 'A choisi sa cible'),
  },
  {
    id: 'setup',
    master: 'tools',
    minutes: 6,
    title: B('Keep your prompts in one place', 'Rangez vos prompts en un seul endroit'),
    learn: B(
      'No more digging through old chats: one place for all your instructions.',
      'Plus besoin de fouiller vos anciennes conversations : un seul endroit réunit tous vos prompts.',
    ),
    act: B('Create one document that holds the instructions you reuse.',
      'Créez un document qui rassemble les prompts que vous réutilisez.'),
    steps: [
      B('Use a single plain text file. Not a folder, not an app: just one file.',
        'Utilisez un unique fichier en texte brut. Ni dossier ni application : un seul fichier.'),
      B('Give each prompt its own heading, with the date you last changed it.',
        'Donnez à chaque prompt un titre, accompagné de la date de sa dernière modification.'),
      B('Under each prompt, paste the result you got, good or bad.',
        "Sous chaque prompt, collez le résultat obtenu, qu'il soit bon ou mauvais."),
    ],
    trap: B(
      'Leaving your prompts in the chat history. You will not find them again, and you will rewrite them less well.',
      "Laisser vos prompts dans l'historique des conversations. Vous ne les retrouverez pas, et vous les réécrirez moins bien.",
    ),
    quiz: {
      q: B('Why keep instructions outside the chat?',
        'Pourquoi conserver vos prompts hors de la conversation ?'),
      options: [
        B('So you can improve the same one instead of writing a new one each time',
          "Pour améliorer le même prompt au lieu d'en rédiger un nouveau à chaque fois"),
        B('Because chat histories are eventually deleted and you lose all your work', 'Parce que les historiques finissent par être effacés et que tout est perdu'),
        B('Because chats are deleted', 'Parce que les conversations sont effacées'),
      ],
      answer: 0,
      why: B(
        'The whole skill is improving one prompt over ten tries. If you cannot find it, you rewrite it from memory each time, and it comes out worse.',
        'Toute la compétence consiste à améliorer un même prompt sur dix essais. Si vous ne le retrouvez pas, vous le réécrivez de mémoire à chaque fois, et il en ressort moins bon.',
      ),
    },
    badge: B('Keeps what works', 'Garde ce qui fonctionne'),
  },
  {
    id: 'judge',
    master: 'analysis',
    minutes: 7,
    title: B('Judge an answer in ten seconds', 'Évaluez une réponse en dix secondes'),
    learn: B(
      'You will judge an answer with three quick questions, instead of trusting a gut feeling.',
      "Vous évaluerez une réponse à l'aide de trois questions rapides, plutôt que de vous fier à une impression.",
    ),
    act: B('Check your last three AI answers with the three questions below.',
      "Examinez vos trois dernières réponses d'IA à l'aide des trois questions ci-dessous."),
    steps: [
      B('Would you sign it as it is? If not, name the one thing that stops you.',
        'La signeriez-vous telle quelle ? Sinon, nommez ce qui vous en empêche.'),
      B('Is there anything in it you cannot check? Highlight it.',
        'Contient-elle des éléments que vous ne pouvez pas vérifier ? Surlignez-les.'),
      B('Does it answer the question you asked, or a slightly different one?',
        'Répond-elle à votre question, ou à une question légèrement différente ?'),
    ],
    trap: B(
      'Judging on style. A well written answer to the wrong question is still the wrong answer.',
      'Juger sur le style. Une réponse bien rédigée à la mauvaise question demeure une mauvaise réponse.',
    ),
    quiz: {
      q: B('An answer is well written but misses the point. Where does the problem come from?',
        "Une réponse est bien rédigée mais passe à côté du sujet. D'où vient le problème ?"),
      options: [
        B('The model is not strong enough for this', "Le modèle n'est pas assez puissant pour cela"),
        B('The question, most likely', 'La question, très probablement'),
        B('The language setting', 'Le paramètre de langue'),
      ],
      answer: 1,
      why: B(
        'A model answers the question it is given. If the answer is well written but off topic, your prompt was probably aiming at the wrong target.',
        "Un modèle répond à la question qu'on lui pose. Si la réponse est soignée mais hors sujet, c'est sans doute votre prompt qui visait la mauvaise cible.",
      ),
    },
    badge: B('Judges with a method', 'Juge avec méthode'),
  },
]

const M_BASICS: Level[] = [
  {
    id: 'one-job',
    master: 'writing',
    minutes: 6,
    title: B('One prompt, one task', 'Un prompt, une seule tâche'),
    learn: B(
      'You will stop writing instructions that ask for four things at once.',
      'Vous cesserez de rédiger des prompts qui demandent quatre choses à la fois.',
    ),
    act: B('Split your longest prompt into the separate tasks it contains.',
      "Décomposez votre plus long prompt en autant de tâches qu'il en contient."),
    steps: [
      B('Underline every verb that asks for something. Each one is a separate task.',
        'Soulignez chaque verbe qui formule une demande. Chacun correspond à une tâche distincte.'),
      B('Keep the most important task. Move each of the others into its own prompt.',
        'Conservez la tâche la plus importante. Placez chacune des autres dans un prompt distinct.'),
      B('Run the short prompt. You will often get a better result than with the long one.',
        "Exécutez le prompt court. Vous obtiendrez souvent un meilleur résultat qu'avec le long."),
    ],
    trap: B(
      'Thinking a longer prompt is more precise. The more you ask at once, the less attention each request gets.',
      "Croire qu'un prompt plus long est plus précis. Plus vous demandez de choses à la fois, moins chacune reçoit d'attention.",
    ),
    quiz: {
      q: B('Your prompt asks it to research, summarise and write a post. What do you do?',
        'Votre prompt demande de chercher, de résumer et de rédiger une publication. Que faites-vous ?'),
      options: [
        B('Add more detail to each of the three parts', 'Détailler davantage chacune des trois parties'),
        B('Ask a bigger model', 'Demander à un plus gros modèle'),
        B('Run three short instructions in order', 'Lancer trois prompts courts dans l\'ordre'),
      ],
      answer: 2,
      why: B(
        'With three tasks in one prompt, each gets a third of the attention. With three prompts in a row, each gets full attention, and you can fix the one that failed.',
        "Avec trois tâches dans un prompt, chacune reçoit un tiers de l'attention. Avec trois prompts successifs, chacune la reçoit entièrement, et vous pouvez corriger celle qui a échoué.",
      ),
    },
    badge: B('One task per prompt', 'Une tâche par prompt'),
  },
  {
    id: 'context',
    master: 'extraction',
    minutes: 7,
    title: B('Send less, get better answers', 'Envoyez moins, obtenez de meilleures réponses'),
    learn: B(
      'You will send the part that matters instead of the whole document.',
      'Vous apprendrez à envoyer la partie utile plutôt que le document entier.',
    ),
    act: B('Take a long document and send only the part the question needs.',
      "Prenez un long document et n'envoyez que la partie dont la question a besoin."),
    steps: [
      B('Ask yourself what the answer needs. Usually two paragraphs, not forty pages.',
        'Demandez-vous ce dont la réponse a besoin. En général, deux paragraphes, et non quarante pages.'),
      B('Send only that, and say which document it comes from.',
        "N'envoyez que cet extrait, en précisant le document dont il provient."),
      B('If the answer is still wrong, add one more passage. Never the whole document.',
        'Si la réponse reste fausse, ajoutez un passage supplémentaire. Jamais le document entier.'),
    ],
    trap: B(
      'Pasting the whole document so nothing is missing. The important part gets lost in the rest.',
      'Coller le document entier pour ne rien omettre. La partie importante se perd alors dans le reste.',
    ),
    quiz: {
      q: B('A forty-page contract, one question about the notice period. What do you send?',
        "Un contrat de quarante pages, une question sur le préavis. Qu'envoyez-vous ?"),
      options: [
        B('The whole contract, so that nothing is missing', "Le contrat entier, pour que rien ne manque"),
        B('A summary you wrote yourself', 'Un résumé que vous avez rédigé vous-même'),
        B('The clause and the two around it', 'La clause et les deux qui l\'entourent'),
      ],
      answer: 2,
      why: B(
        'The clauses next to it often contain exceptions. The other thirty-nine pages add cost and noise, and can pull the answer off topic.',
        'Les clauses voisines contiennent souvent des exceptions. Les trente-neuf autres pages ajoutent du coût et du bruit, et peuvent faire dévier la réponse.',
      ),
    },
    badge: B('Sends just what is needed', 'Envoie le strict nécessaire'),
  },
  {
    id: 'shape',
    master: 'triage',
    minutes: 6,
    title: B('Choose the format of the answer', 'Choisissez le format de la réponse'),
    learn: B(
      'Tired of reformatting answers? Get answers you can use as they are.',
      'Vous passez votre temps à remettre en forme les réponses ? Obtenez-les directement exploitables.',
    ),
    act: B('Ask the same question twice: once with no format, once with a format you choose.',
      'Posez deux fois la même question : une fois sans format, une fois en imposant un format.'),
    steps: [
      B('Name the format: a table, five bullet points, one paragraph, a list of pairs.',
        'Nommez le format : un tableau, cinq puces, un paragraphe, une liste de paires.'),
      B('Name the columns or fields. If you stay vague, it will fill them in vaguely.',
        'Nommez les colonnes ou les champs. Si vous restez vague, le modèle les remplira de façon vague.'),
      B('Say what to write when a piece of information is missing. Otherwise it will make something up.',
        "Indiquez quoi écrire lorsqu'une information manque. Sinon, le modèle en inventera une."),
    ],
    trap: B(
      'Asking for a table without saying what to put in an empty cell. It will fill it with something believable but invented.',
      'Demander un tableau sans préciser quoi mettre dans une case vide. Le modèle la remplira avec une information crédible, mais inventée.',
    ),
    quiz: {
      q: B('You ask for a table and a cell has no data. What should you have said?',
        "Vous demandez un tableau et une case n'a pas de donnée. Qu'auriez-vous dû préciser ?"),
      options: [
        B('Nothing, an empty cell will simply stay empty', 'Rien, une case vide restera simplement vide'),
        B('Write "not found" rather than guess', 'Écrire « non trouvé » plutôt que deviner'),
        B('Use the average', 'Mettre la moyenne'),
      ],
      answer: 1,
      why: B(
        'To a model, an empty cell looks like a mistake, so it fills it in. If you tell it what to write instead, you get a table you can trust.',
        'Pour un modèle, une case vide ressemble à une erreur : il la remplit donc. Si vous lui indiquez quoi écrire à la place, vous obtenez un tableau fiable.',
      ),
    },
    badge: B('Sets the format', 'Impose le format'),
  },
]

const M_ELEMENTS: Level[] = [
  {
    id: 'role',
    master: 'support',
    minutes: 6,
    title: B('Give it a real job', 'Donnez-lui un véritable métier'),
    learn: B(
      'You will give the model a precise role, so it answers from the right point of view.',
      "Vous attribuerez au modèle un rôle précis, afin qu'il réponde depuis le bon point de vue.",
    ),
    act: B('Ask the same question with two different roles and compare the answers.',
      'Posez la même question avec deux rôles différents et comparez les réponses.'),
    steps: [
      B('Name the job, not the adjective. "A tax lawyer", not "an expert".',
        "Nommez le métier, pas l'adjectif. « Un fiscaliste », et non « un expert »."),
      B('Say who they are talking to. A lawyer writes differently for a judge and a client.',
        "Précisez à qui il s'adresse. Un avocat n'écrit pas de la même façon pour un juge et pour un client."),
      B('Say what it must refuse to do. Most people forget this part.',
        "Indiquez ce qu'il doit refuser de faire. C'est la partie que presque tout le monde oublie."),
    ],
    trap: B(
      'Piling up flattering titles. "World-class senior expert" tells the model nothing more than "a tax lawyer".',
      "Empiler les titres flatteurs. « Expert senior de classe mondiale » n'apprend rien de plus au modèle que « un fiscaliste ».",
    ),
    quiz: {
      q: B('Which role is usable?', 'Quel rôle est exploitable ?'),
      options: [
        B('A copywriter who writes for people who have already bought once',
          'Un rédacteur qui écrit pour des personnes ayant déjà acheté une fois'),
        B('An award-winning marketing genius with twenty years behind him', "Un génie du marketing primé, avec vingt ans de métier derrière lui"),
        B('A creative professional', 'Un professionnel créatif'),
      ],
      answer: 0,
      why: B(
        'It names a job and a reader. The other two are compliments, and a model cannot act on a compliment.',
        "Il nomme un métier et un lecteur. Les deux autres sont des compliments, et un modèle ne peut rien tirer d'un compliment.",
      ),
    },
    badge: B('Names a real role', 'Nomme un vrai rôle'),
  },
  {
    id: 'example',
    master: 'writing',
    minutes: 7,
    title: B('One example beats ten rules', 'Un exemple vaut dix règles'),
    learn: B(
      'You will show what good looks like instead of describing it.',
      'Vous montrerez à quoi ressemble un bon résultat plutôt que de le décrire.',
    ),
    act: B('Replace part of your instructions with one concrete example of what you want.',
      'Remplacez une partie de vos instructions par un exemple concret de ce que vous attendez.'),
    steps: [
      B('Take a result you were happy with and paste it in full.',
        'Prenez un résultat qui vous a satisfait et collez-le intégralement.'),
      B('Say in one line what makes it good. That line becomes your rule.',
        'Indiquez en une ligne ce qui le rend bon. Cette ligne devient votre règle.'),
      B('Two examples work better than one. A third rarely adds much.',
        "Deux exemples fonctionnent mieux qu'un seul. Un troisième apporte rarement davantage."),
    ],
    trap: B(
      'Only showing an example of what you do NOT want. The model tends to copy it, even if you tell it not to.',
      "Ne montrer qu'un exemple de ce que vous ne voulez PAS. Le modèle tend à le reproduire, même si vous le lui interdisez.",
    ),
    quiz: {
      q: B('You want a specific tone. What works best?',
        'Vous souhaitez un ton précis. Quelle approche est la plus efficace ?'),
      options: [
        B('Four adjectives that describe it precisely', 'Quatre adjectifs qui le décrivent précisément'),
        B('Two paragraphs written in that tone', 'Deux paragraphes écrits sur ce ton'),
        B('A longer instruction', 'Un prompt plus long'),
      ],
      answer: 1,
      why: B(
        'A tone is a style to reproduce. A model copies it far more faithfully from an example than from a list of adjectives.',
        "Un ton est un style à reproduire. Un modèle l'imite bien plus fidèlement à partir d'un exemple qu'à partir d'une liste d'adjectifs.",
      ),
    },
    badge: B('Shows what good looks like', 'Montre le bon exemple'),
  },
  {
    id: 'bans',
    master: 'watch',
    minutes: 6,
    title: B('Set limits it will respect', "Fixez des limites qu'il respecte"),
    learn: B(
      'You will write limits the model really sticks to, not limits it works around.',
      "Vous rédigerez des limites que le modèle respecte réellement, et non des limites qu'il contourne.",
    ),
    act: B('Add three bans to your prompt, then try to push the model into breaking them.',
      'Ajoutez trois interdits à votre prompt, puis tentez de pousser le modèle à les enfreindre.'),
    steps: [
      B('Ban invention first. Write: "If you do not know, say so."',
        "Interdisez d'abord l'invention. Écrivez : « Si tu ne sais pas, dis-le. »"),
      B('Ban the formats you never want, such as a wall of bullet points or an apology at the start.',
        'Interdisez les formats dont vous ne voulez jamais, comme une avalanche de puces ou des excuses en début de réponse.'),
      B('Write bans with no exceptions. If you add one, the model treats the ban as optional.',
        "Formulez des interdits sans exception. Si vous en ajoutez une, le modèle traite l'interdit comme facultatif."),
    ],
    trap: B(
      'Writing "avoid" instead of "never". The model weighs "avoid" against everything else, and often ignores it.',
      "Écrire « évite » au lieu de « jamais ». Le modèle met « évite » en balance avec le reste, et l'ignore souvent.",
    ),
    quiz: {
      q: B('Which ban actually holds?', 'Quel interdit est réellement respecté ?'),
      options: [
        B('Try to avoid inventing sources wherever you possibly can', "« Essaie autant que possible d'éviter d'inventer des sources »"),
        B('Never give a source you have not been given', "« Ne donne jamais une source qu'on ne t'a pas fournie »"),
        B('Be careful with sources', '« Sois prudent avec les sources »'),
      ],
      answer: 1,
      why: B(
        'It has no exceptions and is easy to check: either you gave the source or you did not. The other two leave room for judgement, and that is how invention gets in.',
        "Il ne souffre aucune exception et se vérifie aisément : soit la source a été fournie, soit elle ne l'a pas été. Les deux autres laissent une marge d'appréciation, par laquelle l'invention s'introduit.",
      ),
    },
    badge: B('Sets clear limits', 'Pose des limites claires'),
  },
]

const M_TECHNIQUES: Level[] = [
  {
    id: 'plan-first',
    master: 'planning',
    minutes: 7,
    title: B('Plan first, text second', 'D\'abord le plan, ensuite le texte'),
    learn: B(
      'You will correct a five-line plan instead of a two-page draft.',
      "Vous corrigerez un plan de cinq lignes plutôt qu'un brouillon de deux pages.",
    ),
    act: B('Ask for the plan, correct it, then ask for the text.',
      'Demandez le plan, corrigez-le, puis demandez le texte.'),
    steps: [
      B('Ask for the outline only. Tell it not to write the text yet.',
        "Demandez uniquement le plan. Précisez qu'il ne doit pas encore rédiger le texte."),
      B('Fix the order and add what is missing. It takes two minutes.',
        "Corrigez l'ordre et ajoutez ce qui manque. Cela prend deux minutes."),
      B('Then ask for the text, following that corrected plan.',
        'Demandez ensuite le texte, en suivant le plan corrigé.'),
    ],
    trap: B(
      'Approving a plan without reading it because it looks well organised. A tidy plan can still be wrong.',
      "Valider un plan sans le lire parce qu'il semble bien structuré. Un plan soigné peut néanmoins être faux.",
    ),
    quiz: {
      q: B('Why ask for the plan first?', "Pourquoi demander d'abord le plan ?"),
      options: [
        B('A wrong plan is quick to fix, a wrong draft is not',
          'Un plan erroné se corrige vite, un brouillon erroné non'),
        B('An outline is much faster to generate than a full text', "Un plan se produit bien plus vite qu'un texte entier"),
        B('It uses fewer tokens', 'Cela consomme moins de tokens'),
      ],
      answer: 0,
      why: B(
        'Each mistake in the plan spreads through the whole text. Catching it while the plan is five lines long saves you rewriting two pages.',
        'Chaque erreur du plan se propage dans tout le texte. La repérer lorsque le plan ne fait que cinq lignes vous évite de réécrire deux pages.',
      ),
    },
    badge: B('Corrects the plan', 'Corrige le plan'),
  },
  {
    id: 'doubt',
    master: 'analysis',
    minutes: 6,
    title: B('Make it confess its doubts', 'Faites-lui avouer ses doutes'),
    learn: B(
      'You will find the weak parts of an answer without rereading every line.',
      "Vous repérerez les points faibles d'une réponse sans la relire intégralement.",
    ),
    act: B('Ask it to mark what it is least sure of, and check only that.',
      'Demandez-lui de signaler ce dont il est le moins sûr, et ne vérifiez que ces éléments.'),
    steps: [
      B('Ask it to rate its confidence next to each claim.',
        "Demandez-lui d'indiquer son degré de confiance à côté de chaque affirmation."),
      B('Ask what would change its answer. The reply shows what it is assuming.',
        "Demandez ce qui modifierait sa réponse. Cela révèle les hypothèses qu'il a formulées."),
      B('Check the two claims with the lowest confidence. That is where errors usually hide.',
        "Vérifiez les deux affirmations les moins sûres. C'est là que se cachent le plus souvent les erreurs."),
    ],
    trap: B(
      'Asking "are you sure?". It will almost always say yes, because a model tends to agree.',
      'Demander « tu es sûr ? ». Il répondra presque toujours oui, car un modèle a tendance à acquiescer.',
    ),
    quiz: {
      q: B('How do you find the shaky part of an answer?',
        'Comment trouver la partie fragile d\'une réponse ?'),
      options: [
        B('Ask whether it is certain about the answer it gave', "Demander s'il est certain de la réponse qu'il a donnée"),
        B('Run it twice and compare', 'Le relancer deux fois et comparer'),
        B('Ask it to rank its claims by confidence', 'Lui demander de classer ses affirmations par degré de confiance'),
      ],
      answer: 2,
      why: B(
        'A yes or no question gets a yes. A ranking forces the model to compare, and the bottom of the ranking shows you what to check.',
        'Une question fermée obtient un oui. Un classement oblige le modèle à comparer, et le bas du classement vous indique quoi vérifier.',
      ),
    },
    badge: B('Finds the weak spot', 'Trouve le point faible'),
  },
  {
    id: 'restart',
    master: 'triage',
    minutes: 5,
    title: B('Know when to start over', 'Sachez quand repartir de zéro'),
    learn: B(
      'Correcting the same answer for the fifth time? You will know when a conversation is beyond saving.',
      'Vous corrigez la même réponse pour la cinquième fois ? Vous saurez reconnaître une conversation irrécupérable.',
    ),
    act: B('Take a conversation that went wrong and restate your request in one new message.',
      'Reprenez une conversation qui a dérapé et reformulez votre demande en un seul message neuf.'),
    steps: [
      B('After three failed corrections, stop correcting.',
        'Après trois corrections infructueuses, cessez de corriger.'),
      B('Write a new prompt that includes what you learned from the failed tries.',
        'Rédigez un nouveau prompt qui intègre ce que les essais infructueux vous ont appris.'),
      B('Paste it into a new conversation. The old one is cluttered with the wrong answers.',
        "Collez-le dans une nouvelle conversation. L'ancienne est encombrée par les mauvaises réponses."),
    ],
    trap: B(
      'Correcting a tenth time because you already spent nine tries. The old answers in the history keep pulling it off course.',
      "Corriger une dixième fois parce que vous avez déjà fait neuf essais. Les anciennes réponses de l'historique continuent de faire dévier le modèle.",
    ),
    quiz: {
      q: B('Three corrections have failed. What now?',
        'Trois corrections ont échoué. Que faire ensuite ?'),
      options: [
        B('A new conversation with a better instruction', 'Une conversation neuve avec un meilleur prompt'),
        B('A fourth correction, more precise than the last one', 'Une quatrième correction, plus précise que la dernière'),
        B('A bigger model', 'Un modèle plus gros'),
      ],
      answer: 0,
      why: B(
        'At every turn, the model rereads the whole history, including the three wrong answers. And the prompt you would write now is better than your first one.',
        "À chaque tour, le modèle relit tout l'historique, y compris les trois mauvaises réponses. En outre, le prompt que vous rédigeriez maintenant est meilleur que le premier.",
      ),
    },
    badge: B('Knows when to stop', 'Sait quand arrêter'),
  },
]

const M_MODELS: Level[] = [
  {
    id: 'families',
    master: 'research',
    minutes: 7,
    title: B('What really sets models apart', 'Ce qui distingue vraiment les modèles'),
    learn: B(
      'You will choose a model for what it can do, not for what the announcements say.',
      "Vous choisirez un modèle pour ses capacités réelles, et non pour ce qu'en disent les annonces.",
    ),
    act: B('Give the same hard task to two models and read both.',
      'Confiez la même tâche difficile à deux modèles et lisez les deux réponses.'),
    steps: [
      B('Context window: how much it can read at once. It limits what you can send it.',
        'La context window : ce que le modèle peut lire en une fois. Elle limite ce que vous pouvez lui envoyer.'),
      B('Reasoning: whether it thinks before answering. Slower, but better on hard problems.',
        "Le raisonnement : le modèle réfléchit-il avant de répondre ? C'est plus lent, mais plus performant sur les problèmes difficiles."),
      B('Price: what it costs per million tokens sent and received. Output tokens always cost more.',
        'Le prix : le coût par million de tokens envoyés et reçus. Les tokens de sortie sont toujours plus chers.'),
    ],
    trap: B(
      'Picking the newest model by default. On an easy task, it costs more and does no better.',
      'Choisir par défaut le modèle le plus récent. Sur une tâche facile, il coûte davantage sans faire mieux.',
    ),
    quiz: {
      q: B('Sorting three hundred short messages into four categories. Which model?',
        'Trier trois cents messages courts en quatre catégories. Quel modèle choisir ?'),
      options: [
        B('A small fast one, with a clear instruction', 'Un petit modèle rapide, avec un prompt clair'),
        B('The biggest one available, for the best accuracy', 'Le plus gros disponible, pour la meilleure précision'),
        B('It makes no difference', 'Cela ne change rien'),
      ],
      answer: 0,
      why: B(
        'Sorting into four named categories is an easy task, repeated three hundred times. The prompt decides the accuracy; the model size decides the bill.',
        'Trier en quatre catégories nommées est une tâche facile, répétée trois cents fois. Le prompt détermine la justesse, la taille du modèle détermine la facture.',
      ),
    },
    badge: B('Fits the model to the task', 'Choisit le modèle selon la tâche'),
  },
  {
    id: 'effort',
    master: 'analysis',
    minutes: 6,
    title: B('Deep thinking: when to turn it on', "La réflexion profonde : quand l'activer"),
    learn: B(
      'You will turn on deep thinking only for the tasks that need it.',
      "Vous activerez la réflexion profonde uniquement pour les tâches qui l'exigent.",
    ),
    act: B('Run the same task twice, with and without deep thinking, then compare time and result.',
      'Exécutez deux fois la même tâche, avec et sans réflexion profonde, puis comparez le temps et le résultat.'),
    steps: [
      B('It helps on tasks with several steps to chain: calculations, code, a plan.',
        'Elle est utile pour les tâches comportant plusieurs étapes à enchaîner : calculs, code, plan.'),
      B('It does not help with a simple lookup or a rewrite.',
        "Elle n'apporte rien pour une simple recherche ou une réécriture."),
      B('It is billed. You pay for this thinking even if you never see it.',
        'Elle est facturée. Vous payez cette réflexion même si vous ne la voyez jamais.'),
    ],
    trap: B(
      'Leaving it on for everything. You pay three to five times more for the same answers.',
      'La laisser activée en permanence. Vous payez trois à cinq fois plus pour les mêmes réponses.',
    ),
    quiz: {
      q: B('Rewriting a paragraph in a softer tone. Deep thinking?',
        'Réécrire un paragraphe sur un ton plus doux. Faut-il la réflexion profonde ?'),
      options: [
        B('Yes, the rewrite will come out better written', 'Oui, la réécriture en sortira mieux écrite'),
        B('No, there is nothing to reason through', "Non, aucun raisonnement n'est nécessaire"),
        B('Only in English', "Seulement en anglais"),
      ],
      answer: 1,
      why: B(
        'Deep thinking helps when there are several steps to chain. A rewrite has only one. You would pay for reasoning that has nothing to work on.',
        "La réflexion profonde est utile lorsqu'il faut enchaîner plusieurs étapes. Une réécriture n'en comporte qu'une : vous paieriez un raisonnement sans objet.",
      ),
    },
    badge: B('Uses deep thinking wisely', 'Active la réflexion à bon escient'),
  },
  {
    id: 'switch',
    master: 'tools',
    minutes: 6,
    title: B('Never get locked into one provider', "Ne restez plus prisonnier d'un provider"),
    learn: B(
      'You will keep your work portable, so you can change provider easily.',
      'Vous garderez un travail portable, afin de pouvoir changer facilement de provider.',
    ),
    act: B('Take one prompt and run it unchanged with another provider.',
      'Prenez un prompt et exécutez-le sans modification chez un autre provider.'),
    steps: [
      B('Your prompt is plain text, so you can use it with any provider.',
        "Votre prompt est du texte brut : vous pouvez l'utiliser chez n'importe quel provider."),
      B('What does not move easily is the technical setup: tool formats, file handling.',
        "Ce qui se transfère difficilement, c'est la partie technique : formats d'outils, gestion des fichiers."),
      B('Keep your prompts in your own file, outside the tool. Then switching provider takes an afternoon.',
        "Conservez vos prompts dans votre propre fichier, hors de l'outil. Changer de provider vous prendra alors un après-midi."),
    ],
    trap: B(
      'Writing prompts that mention the tool by name. "As ChatGPT, ..." stops working the day you switch.',
      "Rédiger des prompts qui citent le nom de l'outil. « En tant que ChatGPT, … » cesse de fonctionner le jour où vous en changez.",
    ),
    quiz: {
      q: B('What makes your work portable?', "Qu'est-ce qui rend votre travail portable ?"),
      options: [
        B('Keeping the instruction as text, outside the tool', "Garder le prompt en texte, hors de l'outil"),
        B('Staying with the provider that has the largest share', 'Rester chez le provider qui a la plus grosse part'),
        B('Exporting your conversations', 'Exporter vos conversations'),
      ],
      answer: 0,
      why: B(
        'The prompt is your real work. Conversations are only what is left over. A setup tied to one provider locks you in.',
        "Le prompt constitue votre véritable travail ; les conversations n'en sont que les restes. Un paramétrage lié à un seul provider vous rend dépendant de lui.",
      ),
    },
    badge: B('Stays portable', 'Reste portable'),
  },
]

/* ------------------------------------------------------------------ */
/* LES CINQ OUTILS                                                     */
/* ------------------------------------------------------------------ */
//
// CE QU'ON ENSEIGNE ICI, et ce qu'on refuse d'enseigner.
//
// Refusé : les chemins de menu, les captures, « cliquez sur l'icône en haut à
// droite ». Ces cinq produits sortent une version majeure tous les trimestres.
// Une leçon faite de clics est fausse avant d'être lue, et quelqu'un qui la
// suit sans succès croit avoir mal compris. C'est la règle déjà posée en tête
// de data/frameworks et de data/designCourses, pour la même raison.
//
// Enseigné : ce que chaque outil fait DIFFÉREMMENT des quatre autres, et ce que
// ça change pour vous. Un modèle de l'outil, pas un mode d'emploi. Une fois ce
// modèle en tête, l'interface du jour se découvre en dix minutes et la
// prochaine aussi.

const M_CHATGPT: Level[] = [
  {
    id: 'gpt-memory',
    master: 'support',
    minutes: 6,
    title: B('What it remembers about you', "Ce qu'il retient de vous"),
    learn: B(
      'You will control what it remembers from one conversation to the next, instead of guessing.',
      "Vous contrôlerez ce qu'il retient d'une conversation à l'autre, au lieu de le deviner.",
    ),
    act: B('Read what it has saved about you, and delete what is wrong or out of date.',
      "Lisez ce qu'il a enregistré à votre sujet et supprimez ce qui est faux ou dépassé."),
    steps: [
      B('It keeps notes about you from one chat to the next. Useful, but you only see them if you go and read them.',
        "Il conserve des notes à votre sujet d'une conversation à l'autre. C'est utile, mais vous ne les voyez que si vous allez les consulter."),
      B('Those notes influence every new answer. A wrong note is worse than no note.',
        "Ces notes influencent chaque nouvelle réponse. Une note erronée est pire qu'une absence de note."),
      B('Custom instructions apply to every conversation. Keep them short and general.',
        "Les instructions permanentes s'appliquent à toutes les conversations. Gardez-les courtes et générales."),
    ],
    trap: B(
      'Putting a one-off project in the permanent instructions. Six months later, it still skews every answer.',
      'Mettre un projet ponctuel dans les instructions permanentes. Six mois plus tard, il fausse encore chaque réponse.',
    ),
    quiz: {
      q: B('Answers have been slightly off for weeks. Where do you look first?',
        'Les réponses sont légèrement à côté depuis des semaines. Où regardez-vous en premier ?'),
      options: [
        B('What it has stored about you', "Ce qu'il a retenu de vous"),
        B('The wording of your last question', 'La formulation de votre dernière question'),
        B('The model version', 'La version du modèle'),
      ],
      answer: 0,
      why: B(
        'When answers have been off for weeks, on different questions, the cause is sent with every question. That is the saved notes.',
        'Lorsque les réponses dévient depuis des semaines, sur des questions différentes, la cause accompagne chaque question : ce sont les notes enregistrées.',
      ),
    },
    badge: B('Controls what AI remembers', "Contrôle ce que l'IA retient"),
  },
  {
    id: 'gpt-projects',
    master: 'planning',
    minutes: 6,
    title: B('One project per recurring job', 'Un projet par travail récurrent'),
    learn: B(
      'Re-explaining your context at the start of every chat? Set it once and for all.',
      'Vous réexpliquez votre contexte au début de chaque conversation ? Définissez-le une fois pour toutes.',
    ),
    act: B('Create a project for one recurring piece of work, with its files.',
      'Créez un projet pour un travail récurrent, avec ses fichiers.'),
    steps: [
      B('Create one project per recurring job, not one per week.',
        'Créez un projet par travail récurrent, et non un par semaine.'),
      B('Store its instructions in the project itself, not in your first message.',
        'Enregistrez ses instructions dans le projet lui-même, et non dans votre premier message.'),
      B('Add its reference files to the project too, instead of pasting them into each prompt.',
        'Ajoutez également ses fichiers de référence au projet, plutôt que de les coller dans chaque prompt.'),
    ],
    trap: B(
      'Creating a project for every topic you have ever touched. Thirty projects is a mess, not a method.',
      'Créer un projet pour chaque sujet abordé. Trente projets constituent un désordre, et non une méthode.',
    ),
    quiz: {
      q: B('What belongs in a project rather than in a message?',
        "Qu'est-ce qui relève d'un projet plutôt que d'un message ?"),
      options: [
        B('The context that stays the same every time', 'Le contexte qui reste le même à chaque fois'),
        B('The particular question you are asking today', "La question particulière que vous posez aujourd'hui"),
        B('The answer you liked', 'La réponse qui vous a plu'),
      ],
      answer: 0,
      why: B(
        'If the context never changes, typing it each time wastes time, and you will type it slightly differently. A project stores it once and for all.',
        'Si le contexte ne change jamais, le retaper fait perdre du temps, et vous le retaperez chaque fois un peu différemment. Un projet le conserve une fois pour toutes.',
      ),
    },
    badge: B('Sets the context once', 'Définit le contexte une fois'),
  },
  {
    id: 'gpt-files',
    master: 'extraction',
    minutes: 6,
    title: B('What it really reads of your files', "Ce qu'il lit réellement de vos fichiers"),
    learn: B(
      'You will know when a file is read in full, and when only some passages are read.',
      'Vous saurez quand un fichier est lu intégralement, et quand seuls certains extraits le sont.',
    ),
    act: B('Ask a question whose answer sits on the last page of a long file.',
      "Posez une question dont la réponse se trouve à la dernière page d'un long fichier."),
    steps: [
      B('A short file is read in full. A long file is searched, and only some passages are read.',
        'Un fichier court est lu intégralement. Un fichier long est parcouru par recherche, et seuls certains extraits sont lus.'),
      B('So it can miss a link between two pages that are far apart.',
        'Il peut donc manquer un lien entre deux pages éloignées.'),
      B('When that link matters, paste both passages yourself.',
        'Lorsque ce lien est important, collez vous-même les deux passages.'),
    ],
    trap: B(
      'Asking for a summary of a long document and trusting it. It only saw some passages, not the whole thing.',
      "Demander le résumé d'un long document et s'y fier. Le modèle n'en a vu que des extraits, et non l'ensemble.",
    ),
    quiz: {
      q: B('A contradiction between page 3 and page 80. Will it find it?',
        'Une contradiction entre la page 3 et la page 80. La trouvera-t-il ?'),
      options: [
        B('Yes, the whole file was given to it', "Oui, le fichier entier lui a été donné"),
        B('Only with deep thinking on', 'Seulement avec la réflexion profonde'),
        B('Often not, if it only read some passages', "Souvent non, s'il n'a lu que des extraits"),
      ],
      answer: 2,
      why: B(
        'To find a contradiction, it must see both passages at the same time. A search brings back the passages that match your words, not the two that disagree.',
        'Pour repérer une contradiction, il doit voir les deux passages simultanément. Une recherche ramène les passages proches de vos termes, et non les deux qui se contredisent.',
      ),
    },
    badge: B('Knows what was read', 'Sait ce qui a été lu'),
  },
]

const M_CLAUDE: Level[] = [
  {
    id: 'cl-long',
    master: 'research',
    minutes: 6,
    title: B('Compare three documents at once', 'Comparez trois documents simultanément'),
    learn: B(
      'You will use a large context window to compare documents, not just to hold more text.',
      'Vous utiliserez une grande context window pour comparer des documents, et non seulement pour y placer davantage de texte.',
    ),
    act: B('Give it three documents at once and ask what they disagree about.',
      'Donnez-lui trois documents à la fois et demandez sur quels points ils divergent.'),
    steps: [
      B('A large context window lets it read several documents at once, so it can compare them.',
        'Une grande context window lui permet de lire plusieurs documents à la fois, et donc de les comparer.'),
      B('Before pasting each document, say what it is. A clear label works better than relying on the order.',
        "Avant de coller chaque document, indiquez de quoi il s'agit. Une étiquette claire est plus fiable que l'ordre."),
      B('Ask for the differences, not a summary. A summary hides where they disagree.',
        'Demandez les différences, et non un résumé. Un résumé masque les points de désaccord.'),
    ],
    trap: B(
      'Filling the context window just because there is room. Everything you add can pull the answer off course.',
      "Remplir la context window simplement parce qu'il reste de la place. Chaque ajout peut faire dévier la réponse.",
    ),
    quiz: {
      q: B('Three supplier quotes. What do you ask for?',
        'Trois devis de fournisseurs. Que demandez-vous ?'),
      options: [
        B('A clear summary of each one of them', 'Un résumé clair de chacun des trois'),
        B('The cheapest', 'Le moins cher'),
        B('Where they differ and what each one leaves out',
          "Où ils diffèrent et ce que chacun omet"),
      ],
      answer: 2,
      why: B(
        'Three summaries only tell you what each quote says. The point of reading them together is to spot what only shows up when you compare them.',
        "Trois résumés vous indiquent seulement ce que contient chaque devis. L'intérêt d'une lecture conjointe est de repérer ce qui n'apparaît qu'à la comparaison.",
      ),
    },
    badge: B('Compares instead of summarising', 'Compare au lieu de résumer'),
  },
  {
    id: 'cl-artifacts',
    master: 'coding',
    minutes: 6,
    title: B('Finally get something you can keep', 'Obtenez enfin un véritable livrable'),
    learn: B(
      'You will leave with a document you can keep improving, not a long chat.',
      "Vous repartirez avec un document que vous pourrez continuer d'améliorer, et non avec une longue conversation.",
    ),
    act: B('Ask for one complete document, then change just one part of it.',
      'Demandez un document complet, puis modifiez-en une seule partie.'),
    steps: [
      B('Ask for the document alone, without explanations around it.',
        'Demandez le document seul, sans explications autour.'),
      B('To change a part, name it. Do not describe the whole document again.',
        'Pour modifier une partie, nommez-la. Ne décrivez pas de nouveau tout le document.'),
      B('Save the final version outside the conversation.',
        'Enregistrez la version finale en dehors de la conversation.'),
    ],
    trap: B(
      'Asking for the whole document again to change one line. You get a new version, slightly different everywhere.',
      'Redemander tout le document pour modifier une ligne. Vous obtenez une nouvelle version, légèrement différente partout.',
    ),
    quiz: {
      q: B('One sentence is wrong in a long document. What do you ask?',
        'Une phrase est fausse dans un long document. Que demandez-vous ?'),
      options: [
        B('Rewrite the whole thing, better this time', "« Réécris l'ensemble, en mieux cette fois »"),
        B('Change only that sentence, and say what to put',
          '« Change cette phrase seulement, et dis quoi mettre »'),
        B('Start over', '« Recommence »'),
      ],
      answer: 1,
      why: B(
        'A full rewrite changes parts you had already approved, without telling you which. Naming the part to change keeps the rest as it was.',
        'Une réécriture complète modifie des parties que vous aviez validées, sans indiquer lesquelles. Nommer la partie à modifier préserve le reste.',
      ),
    },
    badge: B('Edits, never regenerates', 'Modifie au lieu de régénérer'),
  },
  {
    id: 'cl-style',
    master: 'writing',
    minutes: 6,
    title: B('Make it write like you!', 'Faites-le écrire comme vous'),
    learn: B(
      'Fed up with the generic tone? You will get it to write in your own voice.',
      'Le ton passe-partout vous lasse ? Vous apprendrez à lui faire écrire avec votre propre voix.',
    ),
    act: B('Give it three texts you wrote and ask it to list your writing rules.',
      "Donnez-lui trois textes que vous avez rédigés et demandez-lui de lister vos règles d'écriture."),
    steps: [
      B('Paste three real texts. Not your best ones, your everyday ones.',
        'Collez trois textes réels. Non pas vos meilleurs, mais ceux du quotidien.'),
      B('Ask it to list the writing rules it notices. Correct that list.',
        "Demandez-lui de lister les règles d'écriture qu'il repère. Corrigez cette liste."),
      B('Keep the corrected list. It is your style guide, and it works with any tool.',
        "Conservez la liste corrigée. Elle constitue votre charte d'écriture et fonctionne avec n'importe quel outil."),
    ],
    trap: B(
      'Asking it to "write like me" with no sample. It will write like the average of everyone.',
      "Lui demander d'« écrire comme moi » sans échantillon. Il écrira comme la moyenne de tous les auteurs.",
    ),
    quiz: {
      q: B('What is the most reusable output of this exercise?',
        'Quel est le produit le plus réutilisable de cet exercice ?'),
      options: [
        B('The finished text it produced for you', "Le texte final qu'il a produit pour vous"),
        B('The list of rules describing your voice', 'La liste de règles qui décrit votre voix'),
        B('The conversation', 'La conversation'),
      ],
      answer: 1,
      why: B(
        'The text serves once. The rules work with every provider, for every future piece, and you can correct them by hand.',
        "Le texte ne sert qu'une fois. Les règles fonctionnent chez tous les providers, pour tous les textes à venir, et vous pouvez les corriger à la main.",
      ),
    },
    badge: B('Has a style guide', "A sa charte d'écriture"),
  },
]

const M_GEMINI: Level[] = [
  {
    id: 'gm-inside',
    master: 'tools',
    minutes: 6,
    title: B('Work where your files already live', 'Travaillez là où se trouvent vos fichiers'),
    learn: B(
      'Still copying documents into a chat? You will work on them where they already are.',
      'Vous recopiez encore vos documents dans une conversation ? Vous travaillerez dessus là où ils se trouvent.',
    ),
    act: B('Ask a question about a document without opening or pasting it.',
      "Posez une question sur un document sans l'ouvrir ni le coller."),
    steps: [
      B('An assistant connected to your online storage reads each file where it is kept.',
        'Un assistant connecté à votre espace de stockage en ligne lit chaque fichier là où il est rangé.'),
      B('No copy is needed, so you never work on an outdated version.',
        "Aucune copie n'est nécessaire : vous ne travaillez donc jamais sur une version périmée."),
      B('But it sees everything you can see. Check who else has access to your files.',
        "En revanche, il voit tout ce que vous pouvez voir. Vérifiez qui d'autre a accès à vos fichiers."),
    ],
    trap: B(
      'Forgetting that access depends on sharing. A document shared with many people can be found by all their assistants.',
      "Oublier que l'accès dépend du partage. Un document partagé avec de nombreuses personnes peut être retrouvé par tous leurs assistants.",
    ),
    quiz: {
      q: B('The main gain of an assistant inside your documents?',
        "Quel est le principal avantage d'un assistant intégré à vos documents ?"),
      options: [
        B('It is noticeably faster than pasting', 'Il est nettement plus rapide que le copier-coller'),
        B('There is no copy, so no version drift', 'Il n\'y a pas de copie, donc pas de dérive de version'),
        B('It is cheaper', 'Il coûte moins cher'),
      ],
      answer: 1,
      why: B(
        'Pasting creates a second copy, which becomes outdated as soon as someone edits the original. Reading the file where it is avoids that.',
        "Coller crée une seconde copie, qui devient obsolète dès que quelqu'un modifie l'original. Lire le fichier à son emplacement évite ce problème.",
      ),
    },
    badge: B('Leaves files in place', 'Laisse les fichiers à leur place'),
  },
  {
    id: 'gm-notebook',
    master: 'extraction',
    minutes: 6,
    title: B('Answers from your sources only', 'Des réponses tirées de vos seules sources'),
    learn: B(
      'You will get answers that cite your documents, not the internet.',
      'Vous obtiendrez des réponses qui citent vos documents, et non internet.',
    ),
    act: B('Load five of your own documents and ask a question none of them answers.',
      'Chargez cinq de vos documents et posez une question à laquelle aucun ne répond.'),
    steps: [
      B('A tool limited to your sources answers only from what you gave it, and shows where.',
        'Un outil limité à vos sources répond uniquement à partir de ce que vous lui avez fourni, et indique où.'),
      B('Ask a question your documents cannot answer. A good tool will tell you so.',
        'Posez une question à laquelle vos documents ne répondent pas. Un bon outil vous le signalera.'),
      B('That refusal is exactly what you want. A general chat would answer anyway, with no source.',
        'Ce refus est précisément ce que vous recherchez. Une conversation classique répondrait malgré tout, sans source.'),
    ],
    trap: B(
      'Judging it by how much it writes. A short answer with a source is worth more than a long one without.',
      "Le juger à la longueur de ses réponses. Une réponse courte et sourcée vaut mieux qu'une longue réponse sans source.",
    ),
    quiz: {
      q: B('Your sources do not contain the answer. What should happen?',
        'Vos sources ne contiennent pas la réponse. Que devrait-il se passer ?'),
      options: [
        B('It answers from general knowledge', 'Il répond avec ses connaissances générales'),
        B('It says the sources do not cover it', 'Il indique que les sources ne couvrent pas la question'),
        B('It guesses and marks it as uncertain', "Il devine et le signale comme incertain"),
      ],
      answer: 1,
      why: B(
        'The point of limiting answers to your sources is to know that everything said comes from them. An answer from elsewhere, even a true one, breaks that promise without warning.',
        "Limiter les réponses à vos sources a pour but de garantir que tout ce qui est dit en provient. Une réponse venue d'ailleurs, même exacte, rompt cette garantie sans avertissement.",
      ),
    },
    badge: B('Demands a citation', 'Exige une citation'),
  },
  {
    id: 'gm-scale',
    master: 'triage',
    minutes: 6,
    title: B('Three hundred rows, one instruction', 'Trois cents lignes, un seul prompt'),
    learn: B(
      'You will apply one prompt to a whole table, instead of one row at a time.',
      "Vous appliquerez un prompt à un tableau entier, plutôt qu'à une ligne à la fois.",
    ),
    act: B('Take a spreadsheet column and classify every row in one go.',
      'Prenez une colonne de tableur et classez toutes ses lignes en une seule opération.'),
    steps: [
      B('Work on the prompt for a single row until the result is right.',
        "Mettez au point le prompt sur une seule ligne jusqu'à obtenir un résultat juste."),
      B('Test it on ten rows whose answer you already know.',
        'Testez-le sur dix lignes dont vous connaissez déjà la réponse.'),
      B('Only then run all three hundred. Any error will also be repeated three hundred times.',
        'Lancez ensuite seulement les trois cents lignes. Toute erreur sera, elle aussi, répétée trois cents fois.'),
    ],
    trap: B(
      'Running the whole table first "to see what happens". You get three hundred wrong rows and no idea why.',
      "Lancer d'abord le tableau entier « pour voir ». Vous obtenez trois cents lignes fausses sans en connaître la raison.",
    ),
    quiz: {
      q: B('What should you do before running a prompt on three hundred rows?',
        'Que faire avant de lancer un prompt sur trois cents lignes ?'),
      options: [
        B('Pick the strongest model available first', "Choisir d'abord le modèle le plus puissant"),
        B('Test it on ten rows whose answer you know', 'Le tester sur dix lignes dont vous connaissez la réponse'),
        B('Write a longer instruction', 'Écrire un prompt plus long'),
      ],
      answer: 1,
      why: B(
        'Ten rows with known answers show you the error rate before you spend anything. Without them, you pay for three hundred results you cannot check.',
        "Dix lignes dont la réponse est connue révèlent le taux d'erreur avant toute dépense. Sans elles, vous payez trois cents résultats invérifiables.",
      ),
    },
    badge: B('Tests before running it all', 'Teste avant de tout lancer'),
  },
]

const M_PERPLEXITY: Level[] = [
  {
    id: 'px-sources',
    master: 'research',
    minutes: 6,
    title: B('Read the sources, not the answer', 'Lisez les sources, pas la réponse'),
    learn: B(
      'You will judge a researched answer by its sources, not by how well it is written.',
      'Vous jugerez une réponse documentée sur ses sources, et non sur la qualité de sa rédaction.',
    ),
    act: B('Open every source behind one answer and count how many really support it.',
      "Ouvrez chacune des sources d'une réponse et comptez celles qui la confirment réellement."),
    steps: [
      B('A citation proves the page was read, not that it says what the answer claims.',
        "Une citation prouve que la page a été lue, non qu'elle dit ce qu'affirme la réponse."),
      B('Check the date on the source page itself, not the date given in the answer.',
        'Vérifiez la date sur la page source elle-même, et non celle indiquée dans la réponse.'),
      B('Three sites that copy the same press release count as one source.',
        'Trois sites qui recopient le même communiqué ne comptent que pour une source.'),
    ],
    trap: B(
      'Taking the number of citations as proof. Ten links that all come from the same place are one fact repeated ten times.',
      "Prendre le nombre de citations pour une preuve. Dix liens issus de la même origine ne sont qu'un seul fait répété dix fois.",
    ),
    quiz: {
      q: B('Five sources, all quoting the same company announcement. How many facts?',
        'Cinq sources, toutes citant la même annonce d\'entreprise. Combien de faits ?'),
      options: [
        B('One, repeated', 'Un, répété'),
        B('Five, it is well documented', 'Cinq, c\'est bien documenté'),
        B('It depends on the sources', 'Cela dépend des sources'),
      ],
      answer: 0,
      why: B(
        'Sources only add up when they are independent. Five sites relaying one press release give you the same text five times, with no extra checking.',
        "Des sources ne s'additionnent que si elles sont indépendantes. Cinq sites qui relaient un même communiqué vous livrent cinq fois le même texte, sans vérification supplémentaire.",
      ),
    },
    badge: B('Counts real sources', 'Compte les vraies sources'),
  },
  {
    id: 'px-question',
    master: 'analysis',
    minutes: 6,
    title: B('Questions with a real answer', 'Des questions qui ont une vraie réponse'),
    learn: B(
      'You will ask questions that have a precise answer somewhere, and say where to look.',
      'Vous poserez des questions dont la réponse précise existe quelque part, en indiquant où la chercher.',
    ),
    act: B('Rewrite a vague question so that a wrong answer would be easy to spot.',
      "Reformulez une question vague de sorte qu'une mauvaise réponse soit facile à repérer."),
    steps: [
      B('Give the period. A search cannot guess what "recently" means.',
        'Précisez la période. Une recherche ne peut deviner ce que signifie « récemment ».'),
      B('Name the kind of source you will accept.',
        'Nommez le type de source que vous acceptez.'),
      B('Ask for the figure and where it comes from, in the same sentence.',
        'Demandez le chiffre et sa provenance dans la même phrase.'),
    ],
    trap: B(
      'Asking for an opinion and taking it as research. An opinion with sources is still an opinion.',
      'Demander un avis et le prendre pour une recherche. Un avis avec des sources reste un avis.',
    ),
    quiz: {
      q: B('Which question gets an answer you can check?',
        'Quelle question produit une réponse vérifiable ?'),
      options: [
        B('Is this market growing, and is it growing fast enough for us?', 'Ce marché croît-il, et assez vite pour nous ?'),
        B('What is the future of this market?', "Quel est l'avenir de ce marché ?"),
        B('What did this market weigh in 2024, and per which published source?',
          'Combien pesait ce marché en 2024, et selon quelle source publiée ?'),
      ],
      answer: 2,
      why: B(
        'It gives a year, a quantity and the kind of proof. The other two accept vague answers that can never be proven wrong, or checked.',
        "Elle précise une année, une quantité et le type de preuve attendu. Les deux autres admettent des réponses vagues, qu'on ne peut ni réfuter ni vérifier.",
      ),
    },
    badge: B('Asks a checkable question', 'Pose une question vérifiable'),
  },
  {
    id: 'px-when',
    master: 'triage',
    minutes: 5,
    title: B('Stop searching for nothing', 'Cessez de chercher inutilement'),
    learn: B(
      'You will stop paying for a search that adds nothing.',
      "Vous cesserez de payer une recherche qui n'apporte rien.",
    ),
    act: B('List three of your usual questions and mark which need sources.',
      'Listez trois de vos questions habituelles et signalez celles qui exigent des sources.'),
    steps: [
      B('Search when the answer may have changed recently, or when you need proof.',
        "Lancez une recherche lorsque la réponse a pu changer récemment, ou lorsqu'il vous faut une preuve."),
      B('Do not search to rewrite, to summarise your own text, or to think something through.',
        'Ne lancez pas de recherche pour réécrire, résumer votre propre texte ou mener une réflexion.'),
      B('A search adds pages to read, so it costs more and adds noise to the answer.',
        'Une recherche ajoute des pages à lire : cela coûte plus cher et brouille la réponse.'),
    ],
    trap: B(
      'Leaving search on for everything. When the answer does not change over time, search only makes it slower, dearer and less direct.',
      'Laisser la recherche activée en permanence. Lorsque la réponse ne varie pas dans le temps, la recherche la rend seulement plus lente, plus chère et moins directe.',
    ),
    quiz: {
      q: B('Rewriting your own paragraph. Should you search?',
        'Réécrire votre propre paragraphe. Faut-il lancer une recherche ?'),
      options: [
        B('Yes, it will find better wording', 'Oui, il trouvera de meilleures tournures'),
        B('No, there is nothing to look up', "Non, il n'y a rien à chercher"),
        B('Only for technical texts', 'Seulement pour les textes techniques'),
      ],
      answer: 1,
      why: B(
        'The text is already there. A search adds pages on other topics, which pull the rewrite away from yours.',
        "Le texte est déjà disponible. Une recherche ajoute des pages sur d'autres sujets, qui éloignent la réécriture de votre texte.",
      ),
    },
    badge: B('Searches only when useful', "Cherche seulement quand c'est utile"),
  },
]

const M_COPILOT: Level[] = [
  {
    id: 'cp-context',
    master: 'coding',
    minutes: 6,
    title: B('It sees everything you have open', 'Il voit tout ce que vous avez ouvert'),
    learn: B(
      'You will control what it uses by choosing what you leave open.',
      "Vous contrôlerez ce qu'il utilise en choisissant ce que vous laissez ouvert.",
    ),
    act: B('Close everything unrelated and ask the same question again.',
      'Fermez tout ce qui est hors sujet et posez de nouveau la même question.'),
    steps: [
      B('An assistant built into a tool reads whatever the tool has open.',
        'Un assistant intégré à un outil lit tout ce que cet outil a ouvert.'),
      B('Open files that have nothing to do with your question can steer the answer off course.',
        'Les fichiers ouverts sans rapport avec votre question peuvent faire dévier la réponse.'),
      B('Name the file or sheet you mean, instead of hoping it guesses.',
        "Nommez le fichier ou la feuille visés, au lieu d'espérer qu'il devine."),
    ],
    trap: B(
      'Blaming the model when the answer mixes two projects. You had both open, so it used both.',
      'Accuser le modèle lorsque la réponse mélange deux projets. Les deux étaient ouverts : il les a donc utilisés tous les deux.',
    ),
    quiz: {
      q: B('The answer mixes in another project. Why?',
        "La réponse intègre des éléments d'un autre projet. Pourquoi ?"),
      options: [
        B('The model got confused between two subjects', 'Le modèle a confondu deux sujets différents'),
        B('That project was open, so it was used as context', 'Ce projet était ouvert, donc il a servi de contexte'),
        B('The instruction was too short', "Le prompt était trop court"),
      ],
      answer: 1,
      why: B(
        'An assistant built into a tool assumes that what is open is what you are talking about. Choosing what is open means choosing the prompt.',
        'Un assistant intégré à un outil suppose que ce qui est ouvert constitue le sujet de votre demande. Choisir ce qui est ouvert revient à choisir le prompt.',
      ),
    },
    badge: B('Controls what it sees', "Contrôle ce qu'il voit"),
  },
  {
    id: 'cp-repeat',
    master: 'planning',
    minutes: 6,
    title: B('Finally leave meetings with decisions!', 'Sortez enfin de réunion avec des décisions'),
    learn: B(
      'Tired of transcripts nobody reads? Turn a meeting into decisions, each with an owner.',
      "Des transcriptions que personne ne lit ? Transformez une réunion en décisions, chacune assortie d'un responsable.",
    ),
    act: B('Ask for decisions, owners and dates. Nothing else.',
      "Demandez les décisions, les responsables et les échéances. Rien d'autre."),
    steps: [
      B('A transcript is not a summary, and a summary is not a list of decisions.',
        "Une transcription n'est pas un résumé, et un résumé n'est pas une liste de décisions."),
      B('Ask for three columns: what was decided, by whom, by when.',
        'Demandez trois colonnes : ce qui a été décidé, par qui, pour quand.'),
      B('Also ask what was raised but not settled. That list is often the most useful.',
        "Demandez également ce qui a été soulevé sans être tranché. C'est souvent la liste la plus utile."),
    ],
    trap: B(
      'Accepting a summary that reads well but names no one. Nothing will get done, and nobody will notice.',
      "Accepter un résumé bien écrit qui ne nomme personne. Rien ne sera fait, et personne ne s'en apercevra.",
    ),
    quiz: {
      q: B('Which output actually moves work forward?',
        'Quel résultat fait réellement avancer le travail ?'),
      options: [
        B('A clear, well written summary of the meeting', 'Un résumé clair et bien rédigé de la réunion'),
        B('The full transcript', 'La transcription complète'),
        B('Decisions with a name and a date on each', "Des décisions assorties chacune d'un nom et d'une date"),
      ],
      answer: 2,
      why: B(
        'A decision without an owner is only a wish. Even written up nicely in a summary, it can be dropped without anyone noticing.',
        "Une décision sans responsable n'est qu'un souhait. Même bien rédigée dans un résumé, elle peut être abandonnée sans que personne ne le remarque.",
      ),
    },
    badge: B('Leaves with decisions', 'Repart avec des décisions'),
  },
  {
    id: 'cp-limits',
    master: 'watch',
    minutes: 5,
    title: B('What it can really reach', 'Ce à quoi il peut réellement accéder'),
    learn: B(
      'You will know what an assistant wired into your company can reach.',
      'Vous saurez à quoi un assistant connecté à votre entreprise peut accéder.',
    ),
    act: B('Ask it for something you should not be able to see, to test the access rights.',
      "Demandez-lui un élément que vous ne devriez pas pouvoir consulter, afin de tester les droits d'accès."),
    steps: [
      B('It can open exactly what your account can open. No more, no less.',
        'Il accède exactement à ce que votre compte peut ouvrir. Ni plus, ni moins.'),
      B('So a folder shared too widely can now be found with one simple question.',
        'Ainsi, un dossier partagé trop largement peut désormais être retrouvé par une simple question.'),
      B('Before rolling it out to everyone, fix the file sharing, not the assistant.',
        "Avant de le déployer pour tous, corrigez les partages de fichiers, et non l'assistant."),
    ],
    trap: B(
      'Treating this as an AI problem. It is an access rights problem that the assistant has made visible.',
      "Y voir un problème d'IA. C'est un problème de droits d'accès que l'assistant a rendu visible.",
    ),
    quiz: {
      q: B('The assistant surfaces a document you should not see. What is broken?',
        "L'assistant fait remonter un document que vous ne devriez pas voir. Qu'est-ce qui dysfonctionne ?"),
      options: [
        B('The assistant, which looked too far', "L'assistant, qui est allé chercher trop loin"),
        B('Nothing, it is normal', "Rien, c'est normal"),
        B('The sharing on that document', 'Le partage de ce document'),
      ],
      answer: 2,
      why: B(
        'It only reads what your account already had the right to open. It did not give you new access; it made existing access easier to use.',
        "Il ne lit que ce que votre compte avait déjà le droit d'ouvrir. Il ne vous a accordé aucun nouvel accès : il a rendu un accès existant plus facile à exploiter.",
      ),
    },
    badge: B('Checks access rights', "Vérifie les droits d'accès"),
  },
]

const M_AGENTS: Level[] = [
  {
    id: 'ag-shape',
    master: 'triage',
    minutes: 7,
    title: B('What type of agent do you need?', "De quel type d'agent avez-vous besoin ?"),
    learn: B(
      'You will identify the type of agent before building it, because each type fails in its own way.',
      "Vous identifierez le type d'agent avant de le construire, car chaque type commet des erreurs qui lui sont propres.",
    ),
    act: B('Take your target task and say which of the twelve types it matches.',
      'Prenez votre tâche cible et indiquez auquel des douze types elle correspond.'),
    steps: [
      B('Reading a lot and bringing back what matters: that is a researcher.',
        "Lire beaucoup et rapporter l'essentiel : c'est un chercheur."),
      B('Sorting items into named categories: a sorter. Its typical mistake is mixing up two close categories.',
        "Classer dans des catégories nommées : c'est un trieur. Son erreur typique : confondre deux catégories proches."),
      B('Pulling fields out of documents: an extractor. Its typical mistake is inventing a missing field.',
        "Extraire des champs de documents : c'est un extracteur. Son erreur typique : inventer un champ absent."),
      B('If your task matches two types, you need two agents. This is the key point of the lesson.',
        "Si votre tâche correspond à deux types, il vous faut deux agents. C'est le point essentiel de cette leçon."),
    ],
    trap: B(
      'Building one agent for a job that is really three. It will do all three badly.',
      'Construire un seul agent pour un travail qui en réunit trois. Il accomplira mal les trois.',
    ),
    quiz: {
      q: B('An agent reads invoices and fills a table. Which type?',
        "Un agent lit des factures et remplit un tableau. De quel type s'agit-il ?"),
      options: [
        B('A researcher, it reads', "Un chercheur, puisqu'il lit"),
        B('A writer', 'Un rédacteur'),
        B('An extractor', 'Un extracteur'),
      ],
      answer: 2,
      why: B(
        'It pulls named fields out of documents. Knowing this tells you its typical mistake right away: a believable value in a field that was actually empty.',
        'Il extrait des champs nommés de documents. Le savoir vous indique immédiatement son erreur typique : une valeur crédible dans un champ qui était en réalité vide.',
      ),
    },
    badge: B('Knows the agent type', "Reconnaît le type d'agent"),
  },
  {
    id: 'ag-method',
    master: 'planning',
    minutes: 8,
    title: B('Write your agent\'s method', 'Rédigez la méthode de votre agent'),
    learn: B(
      'You will write steps an agent follows the same way, every time.',
      "Vous rédigerez des étapes qu'un agent suit toujours de la même façon.",
    ),
    act: B('Write four steps for your agent, in order, each one producing something concrete.',
      "Rédigez quatre étapes pour votre agent, dans l'ordre, chacune produisant un résultat concret."),
    steps: [
      B('Every step must MAKE something: a list, a note, a decision.',
        'Chaque étape doit PRODUIRE quelque chose : une liste, une note, une décision.'),
      B('A step that only says "think about" or "analyse" produces nothing. Remove it or make it concrete.',
        "Une étape qui se contente d'« étudier » ou d'« analyser » ne produit rien. Supprimez-la ou rendez-la concrète."),
      B('Each step starts from what the previous one produced. Write that down.',
        'Chaque étape part de ce que la précédente a produit. Écrivez-le explicitement.'),
      B('Aim for four to six steps. Fewer than four usually means several tasks are hidden in one step.',
        'Visez quatre à six étapes. En deçà de quatre, plusieurs tâches se cachent souvent dans une seule étape.'),
    ],
    trap: B(
      'Writing "analyse the data" as a step. It produces nothing, so the next step has nothing to work with.',
      "Écrire « analyser les données » comme étape. Elle ne produit rien, si bien que l'étape suivante n'a aucune matière à traiter.",
    ),
    quiz: {
      q: B('Which of these is a real step?',
        'Laquelle de ces formulations est une véritable étape ?'),
      options: [
        B('Understand the customer and their situation', 'Comprendre le client et sa situation'),
        B('Think about the positioning', 'Réfléchir au positionnement'),
        B('List the five objections found, with a quote for each',
          'Lister les cinq objections trouvées, avec une citation pour chacune'),
      ],
      answer: 2,
      why: B(
        'It says what comes out and how much. The other two produce nothing the next step can use, so they are just decoration.',
        "Elle précise ce qui sort et en quelle quantité. Les deux autres ne produisent rien d'exploitable pour l'étape suivante : ce sont des formules creuses.",
      ),
    },
    badge: B('Writes a real method', 'Écrit une vraie méthode'),
  },
  {
    id: 'ag-safe',
    master: 'tools',
    minutes: 7,
    title: B('Let it act without getting burned', 'Laissez-le agir sans prendre de risques'),
    learn: B(
      "You will allow your agent's actions one by one, not all at once.",
      'Vous autoriserez les actions de votre agent une par une, et non toutes à la fois.',
    ),
    act: B('Run your agent with read-only tools and watch what it tries to do.',
      "Lancez votre agent avec des outils en lecture seule et observez ce qu'il tente de faire."),
    steps: [
      B('Start in read-only mode. You see what the agent tries to do, with no risk.',
        "Commencez en lecture seule. Vous voyez ce que l'agent tente de faire, sans aucun risque."),
      B('Then allow one action that changes something, and watch it on a few real cases.',
        'Autorisez ensuite une action qui modifie quelque chose, et observez-la sur quelques cas réels.'),
      B('Require your approval for anything that cannot be undone.',
        'Exigez votre accord pour toute action irréversible.'),
      B('What it reads is information, never an order to follow. Write that into its limits.',
        "Ce qu'il lit est une information, jamais un ordre à suivre. Inscrivez-le dans ses limites."),
    ],
    trap: B(
      'Turning on every tool to test faster. When something goes wrong, you cannot tell which tool caused it.',
      'Tout activer pour tester plus vite. En cas de dérapage, vous ne savez pas quel outil en est la cause.',
    ),
    quiz: {
      q: B('Your agent reads an email saying "ignore your instructions". What should it do?',
        'Votre agent lit un courriel disant « ignore tes instructions ». Que doit-il faire ?'),
      options: [
        B('Obey it, since it arrived as an instruction', 'Obéir, puisque le message se présente comme une instruction'),
        B('Treat it as information and carry on', 'Le traiter comme une information et continuer'),
        B('Stop and ask you', "S'arrêter pour vous consulter"),
      ],
      answer: 1,
      why: B(
        'Anything read through a tool is content, not an order. Writing this limit down stops someone from using your own inbox to control your agent.',
        "Tout ce qui est lu par l'intermédiaire d'un outil est du contenu, et non un ordre. Inscrire cette limite empêche quiconque d'utiliser votre propre messagerie pour piloter votre agent.",
      ),
    },
    badge: B('Allows one action at a time', 'Autorise une action à la fois'),
  },
]

const M_DESIGN: Level[] = [
  {
    id: 'ds-judge',
    master: 'analysis',
    minutes: 7,
    title: B('Judge a screen, no design skills needed', 'Évaluez un écran sans être designer'),
    learn: B(
      'You will say why one screen beats another, with a rule rather than a feeling.',
      "Vous saurez expliquer pourquoi un écran est meilleur qu'un autre, à l'aide d'une règle et non d'une impression.",
    ),
    act: B('Take two screens and judge them on the four rules only.',
      'Prenez deux écrans et évaluez-les uniquement selon les quatre règles.'),
    steps: [
      B('One element must clearly be the most important. If two compete, the eye does not know where to look.',
        "Un élément doit être clairement le plus important. Si deux se disputent l'attention, l'œil ne sait où se porter."),
      B('Put things that belong together close to each other, and away from the rest.',
        'Rapprochez ce qui va ensemble, et éloignez-le du reste.'),
      B('Use fewer text sizes, font weights and colours than you think you need.',
        'Utilisez moins de tailles de texte, de graisses et de couleurs que vous ne le pensez nécessaire.'),
      B('Leave empty space on purpose. It is part of the design, not a gap to fill.',
        'Ménagez des espaces vides délibérément. Ils font partie du design et ne sont pas des trous à combler.'),
    ],
    trap: B(
      'Adding a colour to fix a hierarchy problem. The real fix is in where elements sit and how they are grouped.',
      'Ajouter une couleur pour régler un problème de hiérarchie. La véritable solution réside dans la position et le regroupement des éléments.',
    ),
    quiz: {
      q: B('Two buttons of equal weight side by side. What is wrong?',
        'Deux boutons de même importance côte à côte. Quel est le problème ?'),
      options: [
        B('Nothing shows which one to pick', "Rien n'indique lequel choisir"),
        B('The colour of one of the two', "La couleur de l'un des deux"),
        B('The spacing', "L'espacement"),
      ],
      answer: 0,
      why: B(
        'A screen should guide the user to a choice. With two equal buttons, the user must decide alone, and often picks neither and leaves.',
        "Un écran doit orienter l'utilisateur vers un choix. Face à deux boutons équivalents, il doit décider seul, et souvent il n'en choisit aucun et quitte la page.",
      ),
    },
    badge: B('Judges with rules', 'Juge avec des règles'),
  },
  {
    id: 'ds-model',
    master: 'writing',
    minutes: 8,
    title: B('Get the screen you have in mind built', "Faites construire l'écran que vous imaginez"),
    learn: B(
      'You will describe an interface so a model builds the one you meant.',
      "Vous décrirez une interface de sorte qu'un modèle construise celle que vous aviez en tête.",
    ),
    act: B('Describe one screen by its structure, not with adjectives, and have it built.',
      'Décrivez un écran par sa structure, et non par des adjectifs, puis faites-le construire.'),
    steps: [
      B('Say in one sentence what the screen is FOR. Everything else follows from that.',
        "Indiquez en une phrase à quoi SERT l'écran. Tout le reste en découle."),
      B('List the blocks from top to bottom, and say which one matters most.',
        'Listez les blocs de haut en bas, et indiquez lequel importe le plus.'),
      B('Describe what it shows when things go wrong: no data, loading, text too long.',
        "Décrivez ce qu'il affiche en cas de difficulté : absence de données, chargement, texte trop long."),
      B('Ask for one screen at a time. Ten at once gives you ten average screens.',
        "Demandez un écran à la fois. Dix écrans d'un coup donnent dix écrans médiocres."),
    ],
    trap: B(
      'Asking for "a modern, clean, professional page". You get a page that looks like every other page.',
      'Demander « une page moderne, épurée, professionnelle ». Vous obtiendrez une page semblable à toutes les autres.',
    ),
    quiz: {
      q: B('What is missing most often from a design brief to a model?',
        "Qu'est-ce qui manque le plus souvent dans un brief de design adressé à un modèle ?"),
      options: [
        B('The colours and the brand', 'Les couleurs et la marque'),
        B('The font', 'La police'),
        B('The empty and error states', "L'écran vide et l'écran d'erreur"),
      ],
      answer: 2,
      why: B(
        'By default, a model designs the case where all goes well. Yet the empty screen is often the first one a real user sees, and nobody asks for it.',
        "Par défaut, un modèle conçoit le cas où tout se passe bien. Pourtant, l'écran vide est souvent le premier que voit un utilisateur réel, et personne ne le demande.",
      ),
    },
    badge: B('Describes structure', 'Décrit la structure'),
  },
  {
    id: 'ds-build',
    master: 'coding',
    minutes: 8,
    title: B('From a screen to a page that runs!', "De l'écran à une page qui fonctionne"),
    learn: B(
      'You will take a design to a working page without writing code yourself.',
      "Vous mènerez un design jusqu'à une page fonctionnelle, sans écrire vous-même de code.",
    ),
    act: B('Build one page, then change one thing and build it again.',
      'Construisez une page, puis modifiez-y un élément et reconstruisez-la.'),
    steps: [
      B('Start from the structure you wrote, not from a picture.',
        "Partez de la structure que vous avez rédigée, et non d'une image."),
      B('Finish one page before starting the second.',
        "Terminez une page avant d'en commencer une deuxième."),
      B('Change one thing at a time. With two changes, you cannot tell which one broke the page.',
        'Modifiez un seul élément à la fois. Avec deux modifications, vous ne savez pas laquelle a cassé la page.'),
      B('Keep your structure document. The generated code can be thrown away and made again.',
        'Conservez votre document de structure. Le code généré peut être jeté et refait.'),
    ],
    trap: B(
      'Thinking the generated code is the real work. The real work is your decisions; the code just follows from them.',
      'Croire que le code généré constitue le véritable travail. Le véritable travail, ce sont vos décisions ; le code en découle.',
    ),
    quiz: {
      q: B('Which of these is worth keeping?',
        "Qu'est-ce qui mérite d'être conservé ?"),
      options: [
        B('The structure and the decisions behind it', 'La structure et les décisions qui la soutiennent'),
        B('The generated code, since it runs', "Le code généré, puisqu'il fonctionne"),
        B('The conversation', 'La conversation'),
      ],
      answer: 0,
      why: B(
        'With good decisions, you can regenerate the code in a minute. But the code will not give you back the decisions. So the decisions are what you keep.',
        "Avec de bonnes décisions, vous régénérez le code en une minute. En revanche, le code ne vous rend pas les décisions. Ce sont donc elles qu'il faut conserver.",
      ),
    },
    badge: B('Keeps the decisions', 'Garde les décisions'),
  },
]

const M_COST: Level[] = [
  {
    id: 'ct-measure',
    master: 'analysis',
    minutes: 7,
    title: B('Measure before you cut', 'Mesurez avant de réduire'),
    learn: B(
      'You will know where your tokens really go. Usually not where you think.',
      'Vous saurez où partent réellement vos tokens, souvent ailleurs que là où vous le pensez.',
    ),
    act: B('Take one real exchange and count the tokens in each part: prompt, context, history, answer.',
      'Prenez un échange réel et comptez les tokens de chaque partie : prompt, contexte, historique, réponse.'),
    steps: [
      B('You pay for four parts, and they are rarely the same size.',
        'Vous payez pour quatre parties, rarement de même taille.'),
      B('The prompt is almost always the smallest, yet it is the part people cut.',
        "Le prompt est presque toujours la plus petite partie, et c'est pourtant celle que l'on réduit."),
      B('The history is almost always the biggest, and nobody looks at it.',
        "L'historique est presque toujours le plus gros, et personne ne le regarde."),
    ],
    trap: B(
      'Cutting what is easy to see. The part you see is the prompt, and it costs almost nothing.',
      'Réduire ce qui se voit. La partie visible est le prompt, et il ne coûte presque rien.',
    ),
    quiz: {
      q: B('Which part of a long conversation costs the most?',
        'Quelle partie d\'une longue conversation coûte le plus ?'),
      options: [
        B('The history resent at every turn', "L'historique renvoyé à chaque tour"),
        B('Your instruction, sent each turn', 'Votre prompt, envoyé à chaque tour'),
        B('The final answer', 'La réponse finale'),
      ],
      answer: 0,
      why: B(
        'Your prompt is a few lines, sent once per turn. The history is sent at every turn too, and it grows with each turn that came before.',
        "Votre prompt fait quelques lignes, envoyées une fois par tour. L'historique est lui aussi envoyé à chaque tour, et il s'alourdit de tous les tours précédents.",
      ),
    },
    badge: B('Measures first', 'Mesure d\'abord'),
  },
  {
    id: 'ct-levers',
    master: 'tools',
    minutes: 7,
    title: B('The moves that really cut the bill', 'Les gestes qui réduisent réellement la facture'),
    learn: B(
      'You will apply the three changes that really lower the bill, and skip the rest.',
      'Vous appliquerez les trois changements qui réduisent réellement la facture, et laisserez les autres de côté.',
    ),
    act: B('Apply one of these three changes to your target task and measure the difference.',
      "Appliquez l'un de ces trois changements à votre tâche cible et mesurez la différence."),
    steps: [
      B('Cut the history: start a new conversation instead of going on to a fiftieth turn.',
        "Réduisez l'historique : ouvrez une nouvelle conversation plutôt que d'aller jusqu'au cinquantième tour."),
      B('Turn off the tools this task does not use.',
        'Désactivez les outils dont cette tâche ne se sert pas.'),
      B('Choose the model to fit how hard each task is, not one model for everything.',
        "Choisissez le modèle selon la difficulté de chaque tâche, plutôt qu'un modèle unique pour tout."),
    ],
    trap: B(
      'Applying all three to a task that runs twice a month. You save nothing and lose an hour.',
      "Appliquer les trois à une tâche exécutée deux fois par mois. Vous n'économisez rien et perdez une heure.",
    ),
    quiz: {
      q: B('Which task deserves optimising?',
        'Quelle tâche mérite d\'être optimisée ?'),
      options: [
        B('The single run that costs the most money', "L'exécution isolée qui coûte le plus d'argent"),
        B('The newest one', 'La plus récente'),
        B('The cheap one that runs a thousand times', 'La tâche peu coûteuse exécutée mille fois'),
      ],
      answer: 2,
      why: B(
        'Total cost is price times frequency. A cheap task run a thousand times often costs more than an expensive one run twice. Only the first is worth an hour of your time.',
        "Le coût total est le prix multiplié par la fréquence. Une tâche peu coûteuse exécutée mille fois revient souvent plus cher qu'une tâche coûteuse exécutée deux fois. Seule la première mérite une heure de votre temps.",
      ),
    },
    badge: B('Cuts the right thing', 'Réduit au bon endroit'),
  },
  {
    id: 'ct-own',
    master: 'orchestration',
    minutes: 7,
    title: B('Run your agent on your own API key', 'Exécutez votre agent avec votre propre clé API'),
    learn: B(
      'You will take the agent you built here and run it yourself, outside the platform.',
      "Vous récupérerez l'agent construit ici pour l'exécuter vous-même, en dehors de la plateforme.",
    ),
    act: B('Export your agent and connect it to a framework with your own API key.',
      'Exportez votre agent et connectez-le à un framework avec votre propre clé API.'),
    steps: [
      B('Your agent comes down to two things: your prompt and your tool descriptions. Both are text.',
        'Votre agent se résume à deux éléments : votre prompt et la description de vos outils. Tous deux sont du texte.'),
      B('Before the first run, set a spending cap with your provider.',
        'Avant la première exécution, fixez un plafond de dépense auprès de votre provider.'),
      B('Test it once more in read-only mode, on your key, before letting it write anything.',
        "Testez-le encore une fois en lecture seule, avec votre clé, avant de l'autoriser à écrire quoi que ce soit."),
    ],
    trap: B(
      'Going live without a spending cap because the test cost two cents. An agent stuck in a loop can run up a big bill overnight.',
      "Passer en production sans plafond parce que l'essai a coûté deux centimes. Un agent pris dans une boucle peut faire exploser la facture en une nuit.",
    ),
    quiz: {
      q: B('What is the first thing to do before running it on your own key?',
        "Que faut-il faire en premier avant de l'exécuter avec votre propre clé ?"),
      options: [
        B('Pick the best model', 'Choisir le meilleur modèle'),
        B('Set a spending cap', 'Fixer un plafond de dépense'),
        B('Write documentation', 'Écrire la documentation'),
      ],
      answer: 1,
      why: B(
        'Everything else can be fixed the next day. A loop that ran all night cannot: it is the one mistake that costs real money, not just time.',
        "Tout le reste peut se corriger le lendemain, mais pas une boucle qui a tourné toute la nuit : c'est la seule erreur qui coûte de l'argent, et non seulement du temps.",
      ),
    },
    badge: B('Runs their own agent', 'Exécute son propre agent'),
  },
]

/* ------------------------------------------------------------------ */
/* LA CARTE · les treize cités, posées                                 */
/* ------------------------------------------------------------------ */
//
// LES COORDONNÉES SONT ICI, avec le module, et pas dans le composant de la
// carte. Une cité qu'on ajoute doit apparaître sur la carte sans qu'on aille
// toucher au rendu, sinon la treizième existe dans le programme et nulle part
// dans le jeu. Voir game/worldMap, qui ne fait que lire.
//
// LE NUMÉRO AFFICHÉ est la position dans cette liste : il n'est pas stocké sur
// le module. Écrit à la main, il aurait fini par sauter un chiffre ou en
// répéter un le jour d'un réagencement.

export const PATH_MODULES: Module[] = [
  {
    id: 'start', track: 'path', glyph: 'peak', tint: '#7b5cff', at: [1, 1], levels: M_START,
    title: B('Start on the right foot', 'Partez du bon pied'),
    blurb: B('Pick the task you will practise on, and a place to keep what works.',
      'Choisissez la tâche sur laquelle vous vous exercerez, et un endroit où conserver ce qui fonctionne.'),
  },
  {
    id: 'basics', track: 'path', glyph: 'pen', tint: '#0ea5e9', at: [3, 1], levels: M_BASICS,
    title: B('Prompt Engineering basics', 'Les bases du Prompt Engineering'),
    blurb: B('Tools are useless if you cannot talk to them. One task per prompt, the right context, a clear format.',
      'Les outils ne servent à rien si vous ne savez pas vous adresser à eux. Une tâche par prompt, le bon contexte, un format clair.'),
  },
  {
    id: 'elements', track: 'path', glyph: 'layers', tint: '#e0459b', at: [5, 1], levels: M_ELEMENTS,
    title: B('Anatomy of a good prompt', "L'anatomie d'un bon prompt"),
    blurb: B('A precise role, a concrete example, and limits the model respects.',
      'Un rôle précis, un exemple concret, et des limites que le modèle respecte.'),
  },
  {
    id: 'techniques', track: 'path', glyph: 'gear', tint: '#1fa563', at: [7, 1], levels: M_TECHNIQUES,
    title: B('Advanced techniques', 'Les techniques avancées'),
    blurb: B("Time to step up: plan before writing, spot the model's doubts, and know when to start over.",
      'Pour progresser : établir un plan avant le texte, repérer les doutes du modèle, savoir quand repartir de zéro.'),
  },
  {
    id: 'models', track: 'path', glyph: 'hex', tint: '#f59e0b', at: [2, 3], levels: M_MODELS,
    title: B('Pick the right model', 'Choisissez le bon modèle'),
    blurb: B('What really sets models apart, and when deep thinking is worth paying for.',
      'Ce qui distingue vraiment les modèles, et quand la réflexion profonde vaut son prix.'),
  },
  {
    id: 'chatgpt', track: 'path', glyph: 'ring', tint: '#10a37f', at: [4, 3], levels: M_CHATGPT,
    title: B('Master ChatGPT', 'Maîtrisez ChatGPT'),
    blurb: B('Its memory, its projects, and what it really reads in your files.',
      "Sa mémoire, ses projets, et ce qu'il lit réellement dans vos fichiers."),
  },
  {
    id: 'claude', track: 'path', glyph: 'diamond', tint: '#d97757', at: [6, 3], levels: M_CLAUDE,
    title: B('Master Claude', 'Maîtrisez Claude'),
    blurb: B('Compare several documents at once, and edit instead of starting over.',
      'Comparer plusieurs documents à la fois, et modifier plutôt que tout régénérer.'),
  },
  {
    id: 'gemini', track: 'path', glyph: 'star4', tint: '#4285f4', at: [8, 3], levels: M_GEMINI,
    title: B('Master Gemini', 'Maîtrisez Gemini'),
    blurb: B('Work where your files already are, and get answers drawn only from your sources.',
      'Travailler là où se trouvent vos fichiers, et obtenir des réponses tirées uniquement de vos sources.'),
  },
  {
    id: 'perplexity', track: 'path', glyph: 'target', tint: '#20808d', at: [1, 5], levels: M_PERPLEXITY,
    title: B('Master Perplexity', 'Maîtrisez Perplexity'),
    blurb: B('Read the sources rather than the answer, and know when not to search.',
      'Lire les sources plutôt que la réponse, et savoir quand ne pas chercher.'),
  },
  {
    id: 'copilot', track: 'path', glyph: 'grid', tint: '#0078d4', at: [3, 5], levels: M_COPILOT,
    title: B('Master Copilot', 'Maîtrisez Copilot'),
    blurb: B('What it sees, clear decisions after every meeting, and the access rights behind it all.',
      "Ce qu'il voit, des décisions claires après chaque réunion, et les droits d'accès qui encadrent le tout."),
  },
  {
    id: 'agents', track: 'path', glyph: 'quadrant', tint: '#7b5cff', at: [5, 5], levels: M_AGENTS,
    title: B('Pilot your AI agents!', 'Pilotez vos agents IA'),
    blurb: B('Do not stop at productive, become autonomous: pick the agent type, write its method, allow one action at a time.',
      "Au-delà de la productivité, visez l'autonomie : choisissez le type d'agent, rédigez sa méthode, autorisez une action à la fois."),
  },
  {
    id: 'design', track: 'path', glyph: 'frame', tint: '#ff7a1a', at: [7, 5], levels: M_DESIGN,
    title: B('Build your screens with AI', "Créez vos écrans avec l'IA"),
    blurb: B('Judge a screen with rules, describe its structure, build a page that works.',
      "Évaluer un écran à l'aide de règles, décrire sa structure, construire une page fonctionnelle."),
  },
  {
    id: 'cost', track: 'path', glyph: 'delta', tint: '#08c2ac', at: [9, 5], levels: M_COST,
    title: B('The real cost of AI', 'Le vrai coût de l\'IA'),
    blurb: B('Measure before cutting, cut in the right place, and run your agent on your own key.',
      'Mesurer avant de réduire, réduire au bon endroit, et exécuter votre agent avec votre propre clé.'),
  },
]

/* ------------------------------------------------------------------ */
/* CE QUI SE COMPTE                                                    */
/* ------------------------------------------------------------------ */
//
// TOUT EST DÉRIVÉ. Un centre de formation qui annonce quarante niveaux et en
// sert trente-huit a menti à son premier visiteur, et c'est le pire endroit où
// mentir quand on vend de la pédagogie. Aucun de ces nombres ne s'écrit à la
// main, ni ici ni dans une page.

// LES CITÉS MÉTIER ENTRENT ICI · et c'est tout ce qu'il a fallu pour qu'elles
// héritent de l'index, des adresses, du compteur de badges et des trente
// règles de scripts/test-curriculum. Une deuxième structure pour les métiers
// aurait demandé une deuxième copie de tout cela.
export const ALL_MODULES: Module[] = [DISCOVERY_MODULE, ...PATH_MODULES, ...TRADE_MODULES]

export const MODULE_BY_ID: Record<string, Module> =
  Object.fromEntries(ALL_MODULES.map((m) => [m.id, m]))

/** Le numéro affiché d'une cité · sa position dans le parcours, à partir de 1.
 *  Zéro pour la découverte, qui n'est pas numérotée. */
export const moduleNumber = (id: string): number => PATH_MODULES.findIndex((m) => m.id === id) + 1

export const PATH_MODULE_COUNT = PATH_MODULES.length
export const PATH_LEVEL_COUNT = PATH_MODULES.reduce((n, m) => n + m.levels.length, 0)
export const PATH_MINUTES = PATH_MODULES.reduce(
  (n, m) => n + m.levels.reduce((k, l) => k + l.minutes, 0), 0)
export const PATH_HOURS = Math.round((PATH_MINUTES / 60) * 10) / 10

export const DISCOVERY_LEVEL_COUNT = DISCOVERY_MODULE.levels.length
export const DISCOVERY_MINUTES = DISCOVERY_MODULE.levels.reduce((n, l) => n + l.minutes, 0)

/** Tous les niveaux, à plat, avec leur cité · l'ordre est celui de la carte. */
export const ALL_LEVELS: { module: Module; level: Level }[] =
  ALL_MODULES.flatMap((module) => module.levels.map((level) => ({ module, level })))

/** Un badge par niveau · le compte des récompenses vient des niveaux, jamais
 *  d'une liste tenue à part qui finirait par en promettre un de plus. */
export const BADGE_COUNT = ALL_LEVELS.length

/** L'adresse d'une cité et d'un dojo. */
export const modulePath = (m: string) => `/formation/${m}`
export const levelPath = (m: string, l: string) => `/formation/${m}/${l}`

/** Retrouver un niveau · rend null plutôt que de lever, parce qu'une adresse
 *  inventée arrive par la barre d'adresse et doit rendre une page. */
export function findLevel(moduleId: string, levelId: string) {
  const module = MODULE_BY_ID[moduleId]
  const level = module?.levels.find((l) => l.id === levelId)
  return module && level ? { module, level } : null
}
