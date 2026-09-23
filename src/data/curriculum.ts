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
    title: B('The words, defined', 'Le vocabulaire, défini'),
    learn: B(
      'You will understand the eight words people use around you without explaining them.',
      "Vous comprendrez les huit mots qu'on emploie autour de vous sans jamais les expliquer.",
    ),
    act: B('Write the eight words down and say each one in your own terms.',
      'Écrivez les huit mots et redites chacun avec vos propres mots.'),
    steps: [
      B('A model is a text machine: it predicts what comes next, nothing more.',
        "Un modèle est une machine à texte : il prédit la suite, rien de plus."),
      B('A token is a piece of a word. You are billed by the piece, not by the answer.',
        "Un jeton est un morceau de mot. On vous facture au morceau, pas à la réponse."),
      B('A prompt is the instruction. Context is everything you send with it.',
        "Une consigne est l'instruction. Le contexte est tout ce que vous envoyez avec."),
      B('An agent is a model plus a job, a method and tools. That is the whole difference.',
        "Un agent, c'est un modèle plus un métier, une méthode et des outils. Toute la différence est là."),
    ],
    trap: B(
      'Nodding at a word you have not understood. It comes back on day four and costs you the lesson.',
      "Hocher la tête sur un mot qu'on n'a pas compris. Il revient au jour quatre et vous coûte la leçon.",
    ),
    quiz: {
      q: B('You are billed by the token. What is a token?',
        'On vous facture au jeton. Qu\'est-ce qu\'un jeton ?'),
      options: [
        B('A piece of a word, in and out', "Un morceau de mot, en entrée comme en sortie"),
        B('One complete question you ask', 'Une question entière que vous posez'),
        B('One minute of use', "Une minute d'utilisation"),
      ],
      answer: 0,
      why: B(
        'Everything you send and everything that comes back is cut into pieces and counted. That is why a long conversation costs more than a short one about the same thing.',
        "Tout ce que vous envoyez et tout ce qui revient est découpé en morceaux et compté. C'est pour cela qu'une longue conversation coûte plus qu'une courte sur le même sujet.",
      ),
    },
    badge: B('Speaks the language', 'Parle la langue'),
  },
  {
    id: 'limits',
    master: 'watch',
    minutes: 6,
    title: B('What it cannot do', 'Ce qu\'elle ne sait pas faire'),
    learn: B(
      'You will know the four things a model gets wrong every time, so you stop being surprised.',
      "Vous saurez les quatre choses qu'un modèle rate à chaque fois, et vous cesserez d'être surpris.",
    ),
    act: B('Ask a model something you already know the answer to, and catch it.',
      'Demandez à un modèle une chose dont vous connaissez déjà la réponse, et prenez-le en faute.'),
    steps: [
      B('It has no memory between conversations. Each one starts from nothing.',
        "Il n'a aucune mémoire entre deux conversations. Chacune repart de zéro."),
      B('It invents sources that look real. Never trust a reference you have not opened.',
        "Il invente des sources qui ont l'air vraies. Ne croyez jamais une référence que vous n'avez pas ouverte."),
      B('It agrees with you. Ask it to argue the other side and watch it change its mind.',
        "Il vous donne raison. Demandez-lui de défendre l'inverse et regardez-le changer d'avis."),
      B('It cannot count or do arithmetic reliably. Check every number.',
        "Il ne sait pas compter ni calculer de façon fiable. Vérifiez chaque nombre."),
    ],
    trap: B(
      'Taking a confident tone for a correct answer. Confidence is free; being right is not.',
      "Prendre un ton assuré pour une réponse juste. L'assurance ne coûte rien ; avoir raison, si.",
    ),
    quiz: {
      q: B('A model gives you a study with an author and a year. What do you do?',
        'Un modèle vous donne une étude avec un auteur et une année. Que faites-vous ?'),
      options: [
        B('Quote it, the detail proves it is real', 'Vous la citez : le détail prouve qu\'elle est vraie'),
        B('Open it before quoting it', 'Vous l\'ouvrez avant de la citer'),
        B('Ask the model whether it is sure', 'Vous demandez au modèle s\'il est sûr'),
      ],
      answer: 1,
      why: B(
        'Invented references carry the most detail, because detail is what makes them look real. Asking the model does not help: it will confirm.',
        "Les références inventées sont les plus détaillées, parce que le détail est ce qui les rend crédibles. Demander au modèle ne sert à rien : il confirmera.",
      ),
    },
    badge: B('Checks before quoting', 'Vérifie avant de citer'),
  },
  {
    id: 'tools',
    master: 'triage',
    minutes: 7,
    title: B('The tools, mapped', 'Les outils, sur une carte'),
    learn: B(
      'You will know which tool to open for which job, instead of using one for everything.',
      "Vous saurez quel outil ouvrir pour quel travail, au lieu d'en utiliser un pour tout.",
    ),
    act: B('Take one task from your week and name the tool that fits it.',
      'Prenez une tâche de votre semaine et nommez l\'outil qui lui correspond.'),
    steps: [
      B('Thinking out loud, writing, rewriting: a chat assistant.',
        "Réfléchir à voix haute, écrire, réécrire : un agent conversationnel."),
      B('A question that needs current sources: a search assistant that cites.',
        "Une question qui demande des sources récentes : un assistant de recherche qui cite."),
      B('Work inside your documents and mail: an assistant wired into them.',
        "Du travail dans vos documents et vos mails : un assistant branché dedans."),
      B('A job you will repeat every week: that is an agent, and it is the paid path.',
        "Un travail que vous referez chaque semaine : c'est un agent, et c'est le parcours payant."),
    ],
    trap: B(
      'Picking the most talked-about tool rather than the one that fits. They are rarely the same.',
      "Choisir l'outil dont on parle le plus plutôt que celui qui convient. Ce sont rarement les mêmes.",
    ),
    quiz: {
      q: B('You need last quarter figures with their sources. Which tool?',
        'Il vous faut les chiffres du dernier trimestre avec leurs sources. Quel outil ?'),
      options: [
        B('A search assistant that cites what it reads', "Un assistant de recherche qui cite ce qu'il lit"),
        B('A chat assistant, which has read a great deal', 'Un agent conversationnel, qui a énormément lu'),
        B('Any of them, they are equivalent', "N'importe lequel, ils se valent"),
      ],
      answer: 0,
      why: B(
        'A chat assistant answers from what it absorbed in training, which stops at a date and carries no sources. Recent figures need a tool that goes and reads, and says where.',
        "Un agent conversationnel répond avec ce qu'il a absorbé à l'entraînement, ce qui s'arrête à une date et ne porte aucune source. Des chiffres récents demandent un outil qui va lire, et qui dit où.",
      ),
    },
    badge: B('Picks the right door', 'Choisit la bonne porte'),
  },
  {
    id: 'brief',
    master: 'writing',
    minutes: 8,
    title: B('Ask properly', 'Demander correctement'),
    learn: B(
      'You will write an instruction a model follows, instead of a wish it interprets.',
      "Vous écrirez une instruction qu'un modèle suit, au lieu d'un souhait qu'il interprète.",
    ),
    act: B('Rewrite your last request with the four parts, and run both.',
      'Réécrivez votre dernière demande avec les quatre parties, et lancez les deux.'),
    steps: [
      B('The outcome: what exists when it is done, in concrete terms.',
        "Le résultat : ce qui existe une fois fini, en termes concrets."),
      B('The audience: who reads it. This changes every sentence after it.',
        "L'audience : qui lit. Cela change toutes les phrases qui suivent."),
      B('The constraints: length, tone, what must appear, what to avoid.',
        "Les contraintes : longueur, ton, ce qui doit figurer, ce qu'il faut éviter."),
      B('The test: how you will know it is good, before you read it.',
        "L'épreuve : à quoi vous saurez que c'est bon, avant même de lire."),
    ],
    trap: B(
      'Adding "be creative" or "be professional". Neither means anything the model can act on.',
      "Ajouter « sois créatif » ou « sois professionnel ». Ni l'un ni l'autre ne dit quoi que ce soit d'exécutable.",
    ),
    quiz: {
      q: B('Which of these is an instruction rather than a wish?',
        'Laquelle est une instruction plutôt qu\'un souhait ?'),
      options: [
        B('"Write something really good about our launch, for our customers"', "« Écris quelque chose de vraiment bien sur notre lancement, pour nos clients »"),
        B('"120 words for our customers, lead with the date, no adjectives"',
          "« 120 mots pour nos clients, commence par la date, aucun adjectif »"),
        B('"Make it punchy and modern"', "« Fais quelque chose de percutant et moderne »"),
      ],
      answer: 1,
      why: B(
        'It names the length, the reader, what comes first and what to avoid. The other two could each mean fifty different things, and the model will pick one of the fifty.',
        "Elle nomme la longueur, le lecteur, ce qui vient en premier et ce qu'il faut éviter. Les deux autres peuvent vouloir dire cinquante choses, et le modèle en choisira une des cinquante.",
      ),
    },
    badge: B('Writes a real brief', 'Écrit une vraie commande'),
  },
  {
    id: 'levers',
    master: 'analysis',
    minutes: 7,
    title: B('The moves nobody shows you', 'Les gestes qu\'on ne vous montre pas'),
    learn: B(
      'You will know four moves that change the answer more than any wording does.',
      "Vous saurez quatre gestes qui changent la réponse plus que n'importe quelle formulation.",
    ),
    act: B('Take one answer you were not happy with and apply two of the four.',
      'Reprenez une réponse qui ne vous a pas plu et appliquez-en deux sur quatre.'),
    steps: [
      B('Give an example of what good looks like. One example beats a paragraph of instructions.',
        "Donnez un exemple de ce qui est bon. Un exemple vaut mieux qu'un paragraphe de consignes."),
      B('Ask for the plan before the text, and correct the plan.',
        "Demandez le plan avant le texte, et corrigez le plan."),
      B('Ask it to say what it is unsure about. It will, and that is where the errors are.',
        "Demandez-lui de dire ce dont il n'est pas sûr. Il le fera, et c'est là que sont les erreurs."),
      B('Start again rather than correct five times. A thread carries its own mistakes forward.',
        "Repartez de zéro plutôt que de corriger cinq fois. Un fil traîne ses propres erreurs."),
    ],
    trap: B(
      'Piling more adjectives onto the same request. The tenth attempt is worse than the first, and costs ten times as much.',
      "Empiler des adjectifs sur la même demande. La dixième tentative est pire que la première, et coûte dix fois plus.",
    ),
    quiz: {
      q: B('The tone is wrong for the fourth time. What works best?',
        'Le ton est faux pour la quatrième fois. Qu\'est-ce qui marche le mieux ?'),
      options: [
        B('Repeat "more professional" and add three adjectives to be clearer', "Répéter « plus professionnel » et ajouter trois adjectifs pour être plus clair"),
        B('Paste two paragraphs you consider good and ask for that voice',
          "Coller deux paragraphes que vous jugez bons et demander cette voix"),
        B('Change model', 'Changer de modèle'),
      ],
      answer: 1,
      why: B(
        'A tone cannot be described usefully, but it can be shown. Two real examples do what ten adjectives never will.',
        "Un ton ne se décrit pas utilement, mais il se montre. Deux exemples réels font ce que dix adjectifs ne feront jamais.",
      ),
    },
    badge: B('Shows instead of telling', 'Montre au lieu de décrire'),
  },
  {
    id: 'agents',
    master: 'orchestration',
    minutes: 8,
    title: B('What an agent really is', 'Ce qu\'est vraiment un agent'),
    learn: B(
      'You will be able to say whether your problem needs an agent or just a good prompt.',
      "Vous saurez dire si votre problème demande un agent ou seulement une bonne consigne.",
    ),
    act: B('Take a task you repeat weekly and write its four parts.',
      'Prenez une tâche que vous refaites chaque semaine et écrivez ses quatre parties.'),
    steps: [
      B('A job it is responsible for. One job, written in a sentence.',
        "Un métier dont il est responsable. Un seul, écrit en une phrase."),
      B('A method it follows every time, in order.',
        "Une méthode qu'il suit à chaque fois, dans l'ordre."),
      B('Tools it is allowed to touch. Two or three, not nine.',
        "Des outils auxquels il a droit. Deux ou trois, pas neuf."),
      B('Limits it holds even when asked otherwise.',
        "Des limites qu'il tient même quand on lui demande le contraire."),
    ],
    trap: B(
      'Building an agent for something you do twice a year. The setup costs more than the task.',
      "Construire un agent pour une chose qu'on fait deux fois par an. L'installation coûte plus que la tâche.",
    ),
    quiz: {
      q: B('When is an agent worth building?',
        'Quand vaut-il la peine de construire un agent ?'),
      options: [
        B('When the task comes back, and always the same way',
          'Quand la tâche revient, et toujours de la même façon'),
        B('When the task is difficult enough to justify the time', 'Quand la tâche est assez difficile pour justifier le temps'),
        B('When you have the budget', 'Quand on a le budget'),
      ],
      answer: 0,
      why: B(
        'An agent is a written method. Writing it down pays off the second time and every time after. A difficult task done once is a job for a good prompt.',
        "Un agent est une méthode écrite. L'écrire paie à la deuxième fois et à toutes les suivantes. Une tâche difficile faite une fois relève d'une bonne consigne.",
      ),
    },
    badge: B('Knows when to automate', 'Sait quand automatiser'),
  },
  {
    id: 'cost',
    master: 'tools',
    minutes: 7,
    title: B('What it actually costs', 'Ce que ça coûte vraiment'),
    learn: B(
      'You will be able to read a bill before it arrives, and know which move cuts it most.',
      "Vous saurez lire une facture avant qu'elle n'arrive, et quel geste la réduit le plus.",
    ),
    act: B('Estimate what one week of your usage would cost, out loud.',
      'Estimez à voix haute ce que coûterait une semaine de votre usage.'),
    steps: [
      B('Every turn resends the whole conversation. A long thread pays for itself again and again.',
        "Chaque tour renvoie toute la conversation. Un long fil se repaie à chaque fois."),
      B('Tools you switch on travel with every step, whether they are used or not.',
        "Les outils allumés voyagent à chaque étape, qu'ils servent ou non."),
      B('The biggest model is rarely the right one. Match the model to the difficulty.',
        "Le plus gros modèle est rarement le bon. Accordez le modèle à la difficulté."),
      B('Measure before you cut. Most people optimise the part that costs nothing.',
        "Mesurez avant de couper. On optimise presque toujours la partie qui ne coûte rien."),
    ],
    trap: B(
      'Shortening your instruction to save tokens. The instruction is the cheapest part and the one that decides the answer.',
      "Raccourcir son instruction pour économiser des jetons. L'instruction est la partie la moins chère et celle qui décide de la réponse.",
    ),
    quiz: {
      q: B('Which of these cuts the bill most?',
        'Lequel réduit le plus la facture ?'),
      options: [
        B('Writing shorter instructions on every single request you make', 'Écrire des instructions plus courtes sur chacune de vos demandes'),
        B('Asking politely', 'Demander poliment'),
        B('Starting a fresh conversation instead of a fiftieth turn',
          'Repartir sur une conversation neuve au lieu d\'un cinquantième tour'),
      ],
      answer: 2,
      why: B(
        'A fiftieth turn resends forty-nine turns of history. Your instruction is a few lines; the history is everything else.',
        "Un cinquantième tour renvoie quarante-neuf tours d'historique. Votre instruction fait quelques lignes ; l'historique, c'est tout le reste.",
      ),
    },
    badge: B('Reads the bill', 'Lit la facture'),
  },
]

export const DISCOVERY_MODULE: Module = {
  id: 'discovery',
  track: 'discovery',
  title: B('Seven days', 'Sept jours'),
  blurb: B(
    'One lesson a day. At the end you know the words, the tools, and what it costs.',
    "Une leçon par jour. À la fin vous connaissez les mots, les outils, et ce que ça coûte.",
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
    title: B('What you are here to change', 'Ce que vous venez changer'),
    learn: B(
      'You will have one named task to carry through the whole path.',
      "Vous aurez une tâche nommée à porter dans tout le parcours.",
    ),
    act: B('Write down one task that eats your week, in one sentence.',
      'Écrivez en une phrase une tâche qui vous mange la semaine.'),
    steps: [
      B('Pick something you do at least weekly. Rare tasks teach nothing.',
        "Prenez une chose que vous faites au moins chaque semaine. Les tâches rares n'apprennent rien."),
      B('Name what exists when it is done. A file, a message, a decision.',
        "Nommez ce qui existe une fois fini. Un fichier, un message, une décision."),
      B('Say how long it takes you today. You will compare at the end.',
        "Dites combien de temps elle vous prend aujourd'hui. Vous comparerez à la fin."),
    ],
    trap: B(
      'Choosing an impressive task rather than a frequent one. You learn on the frequent one.',
      "Choisir une tâche impressionnante plutôt qu'une tâche fréquente. On apprend sur la fréquente.",
    ),
    quiz: {
      q: B('Which task should you carry through the course?',
        'Quelle tâche faut-il porter tout au long du cours ?'),
      options: [
        B('The hardest one you can think of', 'La plus difficile que vous trouviez'),
        B('One you repeat every week', 'Une que vous refaites chaque semaine'),
        B('One nobody else does', "Une que personne d'autre ne fait"),
      ],
      answer: 1,
      why: B(
        'A weekly task gives you ten chances to test what you learn. A hard one gives you one, and you cannot tell luck from skill on a single try.',
        "Une tâche hebdomadaire vous donne dix occasions d'éprouver ce que vous apprenez. Une tâche difficile vous en donne une, et sur un seul essai on ne distingue pas la chance du savoir-faire.",
      ),
    },
    badge: B('Has a target', 'A une cible'),
  },
  {
    id: 'setup',
    master: 'tools',
    minutes: 6,
    title: B('A workspace that does not fight you', 'Un espace qui ne vous gêne pas'),
    learn: B(
      'You will have one place for your instructions instead of scattered chat threads.',
      "Vous aurez un seul endroit pour vos instructions au lieu de fils de discussion éparpillés.",
    ),
    act: B('Create one document that holds the instructions you reuse.',
      'Créez un document qui contient les instructions que vous réutilisez.'),
    steps: [
      B('One file, plain text. Not a folder, not a tool. A file.',
        "Un fichier, en texte simple. Pas un dossier, pas un outil. Un fichier."),
      B('One instruction per heading, with the date you last changed it.',
        "Une instruction par titre, avec la date de sa dernière modification."),
      B('Paste the result you got under it, good or bad.',
        "Collez dessous le résultat obtenu, bon ou mauvais."),
    ],
    trap: B(
      'Keeping instructions in the chat history. You will never find them again, and you will rewrite them worse.',
      "Garder ses instructions dans l'historique de discussion. Vous ne les retrouverez jamais, et vous les réécrirez moins bien.",
    ),
    quiz: {
      q: B('Why keep instructions outside the chat?',
        'Pourquoi garder ses instructions hors de la discussion ?'),
      options: [
        B('So you can improve the same one instead of writing a new one each time',
          "Pour améliorer la même au lieu d'en réécrire une à chaque fois"),
        B('Because chat histories are eventually deleted and you lose all your work', "Parce que les historiques finissent par être effacés et vous perdez tout"),
        B('Because chats are deleted', 'Parce que les discussions sont effacées'),
      ],
      answer: 0,
      why: B(
        'The whole skill is improving one instruction over ten runs. A history you cannot search means you start from memory every time, which is starting from worse.',
        "Tout le savoir-faire consiste à améliorer une instruction sur dix passages. Un historique qu'on ne peut pas chercher, c'est repartir de mémoire à chaque fois, donc repartir de moins bien.",
      ),
    },
    badge: B('Keeps what works', 'Garde ce qui marche'),
  },
  {
    id: 'judge',
    master: 'analysis',
    minutes: 7,
    title: B('Judging an answer', 'Juger une réponse'),
    learn: B(
      'You will have a test you can apply in ten seconds, instead of a feeling.',
      "Vous aurez une épreuve applicable en dix secondes, au lieu d'une impression.",
    ),
    act: B('Judge your last three answers against the three questions.',
      'Jugez vos trois dernières réponses avec les trois questions.'),
    steps: [
      B('Would you sign it? If not, name the one thing stopping you.',
        "La signeriez-vous ? Sinon, nommez la seule chose qui vous en empêche."),
      B('Is anything in it that you cannot verify? Mark it.',
        "Y a-t-il quelque chose que vous ne pouvez pas vérifier ? Marquez-le."),
      B('Does it answer the question you asked, or a nearby one?',
        "Répond-elle à la question posée, ou à une question voisine ?"),
    ],
    trap: B(
      'Judging on style. A well written answer to the wrong question is still the wrong answer.',
      "Juger sur le style. Une réponse bien écrite à la mauvaise question reste la mauvaise réponse.",
    ),
    quiz: {
      q: B('An answer reads beautifully and misses the point. What is the fault?',
        'Une réponse se lit très bien et passe à côté. Où est la faute ?'),
      options: [
        B('The model is not strong enough for this', "Le modèle n'est pas assez puissant pour cela"),
        B('The question, most likely', 'La question, très probablement'),
        B('The language setting', 'Le réglage de langue'),
      ],
      answer: 1,
      why: B(
        'A model answers the question it was given. When the answer is well made and beside the point, the instruction pointed there.',
        "Un modèle répond à la question qu'on lui a posée. Quand la réponse est soignée et à côté, c'est l'instruction qui pointait à côté.",
      ),
    },
    badge: B('Judges, not feels', 'Juge au lieu de ressentir'),
  },
]

const M_BASICS: Level[] = [
  {
    id: 'one-job',
    master: 'writing',
    minutes: 6,
    title: B('One instruction, one job', 'Une instruction, un métier'),
    learn: B(
      'You will stop writing instructions that ask for four things at once.',
      "Vous cesserez d'écrire des instructions qui demandent quatre choses à la fois.",
    ),
    act: B('Split your longest instruction into the jobs it actually contains.',
      'Découpez votre plus longue instruction dans les métiers qu\'elle contient vraiment.'),
    steps: [
      B('Underline every verb that asks for something. Each one is a job.',
        "Soulignez chaque verbe qui demande quelque chose. Chacun est un métier."),
      B('Keep the one that matters and cut the rest into separate runs.',
        "Gardez celui qui compte et découpez les autres en passages séparés."),
      B('Run the short one. It will beat the long one, and it will surprise you.',
        "Lancez la courte. Elle battra la longue, et cela vous surprendra."),
    ],
    trap: B(
      'Believing a longer instruction is a more precise one. Length spreads the attention thin.',
      "Croire qu'une instruction plus longue est plus précise. La longueur dilue l'attention.",
    ),
    quiz: {
      q: B('Your instruction asks to research, summarise and write a post. What do you do?',
        'Votre instruction demande d\'étudier, de résumer et de rédiger une publication. Que faites-vous ?'),
      options: [
        B('Add more detail to each of the three parts', 'Détailler davantage chacune des trois parties'),
        B('Ask a bigger model', 'Demander à un plus gros modèle'),
        B('Run three short instructions in order', 'Lancer trois instructions courtes dans l\'ordre'),
      ],
      answer: 2,
      why: B(
        'Three jobs in one instruction get a third of the attention each. Three in a row each get all of it, and you can fix the one that went wrong.',
        "Trois métiers dans une instruction reçoivent chacun un tiers de l'attention. Trois à la suite la reçoivent entière, et vous pouvez corriger celui qui a raté.",
      ),
    },
    badge: B('Cuts to one job', 'Découpe à un métier'),
  },
  {
    id: 'context',
    master: 'extraction',
    minutes: 7,
    title: B('What to send, and what to leave out', 'Quoi envoyer, quoi laisser'),
    learn: B(
      'You will send the part that matters instead of the whole document.',
      "Vous enverrez la partie qui compte au lieu du document entier.",
    ),
    act: B('Take a long document and send only the part the question needs.',
      'Prenez un long document et n\'envoyez que la partie dont la question a besoin.'),
    steps: [
      B('Ask what the answer needs. Usually two paragraphs, not forty pages.',
        "Demandez-vous de quoi la réponse a besoin. En général deux paragraphes, pas quarante pages."),
      B('Send that, and say where it comes from.',
        "Envoyez cela, et dites d'où ça vient."),
      B('If the answer is wrong, add one more piece. Never all of it.',
        "Si la réponse est fausse, ajoutez un morceau de plus. Jamais tout."),
    ],
    trap: B(
      'Pasting everything so nothing is missing. Everything buries the part that mattered.',
      "Tout coller pour ne rien oublier. Le tout enterre la partie qui comptait.",
    ),
    quiz: {
      q: B('A forty-page contract, one question about the notice period. What do you send?',
        'Un contrat de quarante pages, une question sur le préavis. Qu\'envoyez-vous ?'),
      options: [
        B('The whole contract, so that nothing is missing', "Le contrat entier, pour que rien ne manque"),
        B('A summary you wrote yourself', 'Un résumé que vous avez écrit'),
        B('The clause and the two around it', 'La clause et les deux qui l\'entourent'),
      ],
      answer: 2,
      why: B(
        'The neighbouring clauses carry the exceptions. The other thirty-nine pages add cost and noise, and push the answer towards whatever else they contain.',
        "Les clauses voisines portent les exceptions. Les trente-neuf autres pages ajoutent du coût et du bruit, et tirent la réponse vers ce qu'elles contiennent par ailleurs.",
      ),
    },
    badge: B('Sends the right slice', 'Envoie la bonne tranche'),
  },
  {
    id: 'shape',
    master: 'triage',
    minutes: 6,
    title: B('Asking for a shape', 'Demander une forme'),
    learn: B(
      'You will get answers you can use directly, instead of prose you reformat.',
      "Vous obtiendrez des réponses utilisables telles quelles, au lieu de prose à remettre en forme.",
    ),
    act: B('Ask the same question twice: once freely, once with a shape.',
      'Posez deux fois la même question : une fois librement, une fois avec une forme.'),
    steps: [
      B('Name the shape: a table, five bullets, one paragraph, a list of pairs.',
        "Nommez la forme : un tableau, cinq puces, un paragraphe, une liste de paires."),
      B('Name the columns or the fields. Vague shapes get vague filling.',
        "Nommez les colonnes ou les champs. Une forme vague se remplit vaguement."),
      B('Say what to do when a field is unknown. That is where invention starts.',
        "Dites quoi faire quand un champ est inconnu. C'est là que l'invention commence."),
    ],
    trap: B(
      'Asking for a table without saying what to put in an empty cell. It will fill it with something plausible.',
      "Demander un tableau sans dire quoi mettre dans une case vide. Il y mettra quelque chose de plausible.",
    ),
    quiz: {
      q: B('You ask for a table and a cell has no data. What should you have said?',
        'Vous demandez un tableau et une case n\'a pas de donnée. Qu\'auriez-vous dû dire ?'),
      options: [
        B('Nothing, an empty cell will simply stay empty', 'Rien, une case vide restera simplement vide'),
        B('Write "not found" rather than guess', 'Écrire « non trouvé » plutôt que deviner'),
        B('Use the average', 'Mettre la moyenne'),
      ],
      answer: 1,
      why: B(
        'An empty cell looks like a mistake to a model, so it fills it. Telling it what to write instead is the difference between a usable table and a confident one.',
        "Une case vide ressemble à une erreur pour un modèle, donc il la remplit. Lui dire quoi écrire à la place fait la différence entre un tableau utilisable et un tableau sûr de lui.",
      ),
    },
    badge: B('Names the shape', 'Nomme la forme'),
  },
]

const M_ELEMENTS: Level[] = [
  {
    id: 'role',
    master: 'support',
    minutes: 6,
    title: B('Who is speaking', 'Qui parle'),
    learn: B(
      'You will set a point of view instead of hoping for one.',
      "Vous poserez un point de vue au lieu d'en espérer un.",
    ),
    act: B('Give the same question two different roles and compare.',
      'Donnez deux rôles différents à la même question et comparez.'),
    steps: [
      B('Name the job, not the adjective. "A tax lawyer", not "an expert".',
        "Nommez le métier, pas l'adjectif. « Un fiscaliste », pas « un expert »."),
      B('Say who they are talking to. A lawyer writes differently for a judge and a client.',
        "Dites à qui il parle. Un avocat n'écrit pas pareil pour un juge et pour un client."),
      B('Say what they refuse to do. That is the half most people leave out.',
        "Dites ce qu'il refuse de faire. C'est la moitié que presque tout le monde oublie."),
    ],
    trap: B(
      'Piling up titles. "Expert senior world-class" adds nothing that "a tax lawyer" did not.',
      "Empiler les titres. « Expert senior de classe mondiale » n'ajoute rien à « un fiscaliste ».",
    ),
    quiz: {
      q: B('Which role is usable?', 'Quel rôle est exploitable ?'),
      options: [
        B('A copywriter who writes for people who have already bought once',
          "Un rédacteur qui écrit pour des gens qui ont déjà acheté une fois"),
        B('An award-winning marketing genius with twenty years behind him', "Un génie du marketing primé, avec vingt ans de métier derrière lui"),
        B('A creative professional', 'Un professionnel créatif'),
      ],
      answer: 0,
      why: B(
        'It names a job and a reader. The other two are compliments, and a model cannot act on a compliment.',
        "Il nomme un métier et un lecteur. Les deux autres sont des compliments, et un modèle ne peut rien faire d'un compliment.",
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
      "Vous montrerez à quoi ressemble le bon au lieu de le décrire.",
    ),
    act: B('Replace half your instructions with one worked example.',
      'Remplacez la moitié de vos consignes par un exemple travaillé.'),
    steps: [
      B('Take one output you were happy with. Paste it whole.',
        "Prenez une sortie qui vous a plu. Collez-la en entier."),
      B('Say what makes it good, in one line. That line is the rule.',
        "Dites en une ligne ce qui la rend bonne. Cette ligne est la règle."),
      B('Two examples beat one. Three rarely beat two.',
        "Deux exemples valent mieux qu'un. Trois valent rarement mieux que deux."),
    ],
    trap: B(
      'Giving an example of what you do NOT want, alone. It sticks better than the instruction against it.',
      "Donner seulement un exemple de ce qu'on ne veut PAS. Il marque plus que la consigne qui l'interdit.",
    ),
    quiz: {
      q: B('You want a specific tone. What works best?',
        'Vous voulez un ton précis. Qu\'est-ce qui marche le mieux ?'),
      options: [
        B('Four adjectives describing it', 'Quatre adjectifs qui le décrivent'),
        B('Two paragraphs written in it', 'Deux paragraphes écrits dedans'),
        B('A longer instruction', 'Une instruction plus longue'),
      ],
      answer: 1,
      why: B(
        'A tone is a pattern, and a pattern is copied from an example far more reliably than it is reconstructed from adjectives.',
        "Un ton est un motif, et un motif se recopie depuis un exemple bien plus sûrement qu'il ne se reconstruit à partir d'adjectifs.",
      ),
    },
    badge: B('Shows the target', 'Montre la cible'),
  },
  {
    id: 'bans',
    master: 'watch',
    minutes: 6,
    title: B('The lines it must not cross', 'Les lignes à ne pas franchir'),
    learn: B(
      'You will write limits that hold, instead of limits that get argued away.',
      "Vous écrirez des limites qui tiennent, au lieu de limites qu'on négocie.",
    ),
    act: B('Add three bans to your instruction and try to break them.',
      'Ajoutez trois interdits à votre instruction et essayez de les faire tomber.'),
    steps: [
      B('Ban the invention first. "If you do not know, say so" earns its line.',
        "Interdisez d'abord l'invention. « Si tu ne sais pas, dis-le » mérite sa ligne."),
      B('Ban the shape you never want. A wall of bullet points, an opening apology.',
        "Interdisez la forme dont vous ne voulez jamais. Un mur de puces, des excuses en ouverture."),
      B('Write bans as absolutes. A ban with an exception is a suggestion.',
        "Écrivez les interdits en absolu. Un interdit avec une exception est une suggestion."),
    ],
    trap: B(
      'Writing "avoid" instead of "never". Avoid is weighed against everything else and usually loses.',
      "Écrire « évite » au lieu de « jamais ». Un « évite » se met en balance avec le reste et perd en général.",
    ),
    quiz: {
      q: B('Which ban actually holds?', 'Quel interdit tient vraiment ?'),
      options: [
        B('Try to avoid inventing sources wherever you possibly can', "Essaie autant que possible d'éviter d'inventer des sources"),
        B('Never give a source you have not been given', "Ne donne jamais une source qu'on ne t'a pas fournie"),
        B('Be careful with sources', 'Sois prudent avec les sources'),
      ],
      answer: 1,
      why: B(
        'It is absolute and it is testable: either the source came from you or it did not. The other two leave room to judge, and judgement is where invention gets in.',
        "Il est absolu et vérifiable : soit la source vient de vous, soit non. Les deux autres laissent une marge d'appréciation, et c'est par là que l'invention entre.",
      ),
    },
    badge: B('Sets hard limits', 'Pose des limites dures'),
  },
]

const M_TECHNIQUES: Level[] = [
  {
    id: 'plan-first',
    master: 'planning',
    minutes: 7,
    title: B('The plan before the text', 'Le plan avant le texte'),
    learn: B(
      'You will correct a five-line plan instead of a two-page draft.',
      "Vous corrigerez un plan de cinq lignes au lieu d'un brouillon de deux pages.",
    ),
    act: B('Ask for the plan, correct it, then ask for the text.',
      'Demandez le plan, corrigez-le, puis demandez le texte.'),
    steps: [
      B('Ask for the outline and nothing else. Stop it from writing.',
        "Demandez le plan et rien d'autre. Empêchez-le d'écrire."),
      B('Fix the order and the missing part. That is two minutes.',
        "Corrigez l'ordre et ce qui manque. Cela prend deux minutes."),
      B('Then ask for the text, against that plan.',
        "Demandez ensuite le texte, d'après ce plan."),
    ],
    trap: B(
      'Approving a plan you have not read because it looks organised. Organised and wrong is still wrong.',
      "Valider un plan qu'on n'a pas lu parce qu'il a l'air structuré. Structuré et faux reste faux.",
    ),
    quiz: {
      q: B('Why ask for the plan first?', 'Pourquoi demander le plan d\'abord ?'),
      options: [
        B('A wrong plan is cheap to fix, a wrong draft is not',
          'Un plan faux se corrige pour rien, un brouillon faux non'),
        B('An outline is much faster to generate than a full text', "Un plan se produit bien plus vite qu'un texte entier"),
        B('It uses fewer tokens', 'Cela consomme moins de jetons'),
      ],
      answer: 0,
      why: B(
        'Every mistake in the plan is multiplied by the length of the text written from it. Catching it at five lines is the whole point.',
        "Chaque erreur du plan est multipliée par la longueur du texte qui en sort. L'attraper à cinq lignes est tout l'intérêt.",
      ),
    },
    badge: B('Corrects the plan', 'Corrige le plan'),
  },
  {
    id: 'doubt',
    master: 'analysis',
    minutes: 6,
    title: B('Make it show its doubt', 'Faites-lui montrer son doute'),
    learn: B(
      'You will find the weak parts of an answer without reading every line.',
      "Vous trouverez les parties faibles d'une réponse sans tout relire.",
    ),
    act: B('Ask it to mark what it is least sure of, and check only that.',
      'Demandez-lui de marquer ce dont il est le moins sûr, et ne vérifiez que cela.'),
    steps: [
      B('Ask for a confidence note beside each claim.',
        "Demandez une note de confiance à côté de chaque affirmation."),
      B('Ask what would change its answer. The reply names the assumption.',
        "Demandez ce qui changerait sa réponse. La réponse nomme l'hypothèse."),
      B('Check the two lowest. That is where the errors live.',
        "Vérifiez les deux plus basses. C'est là que sont les erreurs."),
    ],
    trap: B(
      'Asking "are you sure?". It will say yes, because agreeing is what it does.',
      "Demander « tu es sûr ? ». Il dira oui, parce qu'acquiescer est ce qu'il fait.",
    ),
    quiz: {
      q: B('How do you find the shaky part of an answer?',
        'Comment trouver la partie fragile d\'une réponse ?'),
      options: [
        B('Ask whether it is certain about the answer it gave', "Demander s'il est certain de la réponse qu'il a donnée"),
        B('Run it twice and compare', 'Le relancer deux fois et comparer'),
        B('Ask it to rank its claims by confidence', 'Lui demander de classer ses affirmations par confiance'),
      ],
      answer: 2,
      why: B(
        'A yes or no question gets agreement. A ranking forces a comparison, and the bottom of the ranking is a genuinely useful signal.',
        "Une question fermée obtient un acquiescement. Un classement force une comparaison, et le bas du classement est un signal réellement utile.",
      ),
    },
    badge: B('Finds the weak spot', 'Trouve le point faible'),
  },
  {
    id: 'restart',
    master: 'triage',
    minutes: 5,
    title: B('Start again, on purpose', 'Repartir de zéro, exprès'),
    learn: B(
      'You will know when a conversation is beyond saving.',
      "Vous saurez quand une conversation est irrécupérable.",
    ),
    act: B('Take a thread that went wrong and restate it in one fresh message.',
      'Prenez un fil qui a dérapé et reformulez-le en un seul message neuf.'),
    steps: [
      B('After three failed corrections, stop correcting.',
        "Après trois corrections ratées, arrêtez de corriger."),
      B('Write one new instruction that includes what you learned.',
        "Écrivez une instruction neuve qui contient ce que vous avez appris."),
      B('Start a new conversation. The old one carries its own confusion.',
        "Ouvrez une conversation neuve. L'ancienne traîne sa propre confusion."),
    ],
    trap: B(
      'Correcting a tenth time because you have already invested nine. The history is what is fighting you.',
      "Corriger une dixième fois parce qu'on en a déjà investi neuf. C'est l'historique qui vous résiste.",
    ),
    quiz: {
      q: B('Three corrections have failed. What now?',
        'Trois corrections ont échoué. Et maintenant ?'),
      options: [
        B('A new conversation with a better instruction', 'Une conversation neuve avec une meilleure instruction'),
        B('A fourth correction, more precise than the last one', 'Une quatrième correction, plus précise que la dernière'),
        B('A bigger model', 'Un modèle plus gros'),
      ],
      answer: 0,
      why: B(
        'Each correction is added to a history the model keeps rereading, including the three wrong answers. The new instruction you would write now is better than the one you started with.',
        "Chaque correction s'ajoute à un historique que le modèle relit, y compris les trois mauvaises réponses. L'instruction que vous écririez maintenant est meilleure que celle de départ.",
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
    title: B('What actually differs', 'Ce qui diffère vraiment'),
    learn: B(
      'You will choose a model on what it does, not on what was announced.',
      "Vous choisirez un modèle sur ce qu'il fait, pas sur ce qui a été annoncé.",
    ),
    act: B('Give the same hard task to two models and read both.',
      'Donnez la même tâche difficile à deux modèles et lisez les deux.'),
    steps: [
      B('How much it can hold at once. That decides what you can send it.',
        "Ce qu'il peut tenir en une fois. Cela décide de ce que vous pouvez lui envoyer."),
      B('Whether it thinks before answering. Slower, better on hard problems.',
        "S'il réfléchit avant de répondre. Plus lent, meilleur sur les problèmes durs."),
      B('What it costs per million pieces, in and out. Out is always dearer.',
        "Ce qu'il coûte au million de morceaux, en entrée et en sortie. La sortie est toujours plus chère."),
    ],
    trap: B(
      'Taking the newest by default. On an easy task it costs more and answers no better.',
      "Prendre le plus récent par défaut. Sur une tâche facile il coûte plus et ne répond pas mieux.",
    ),
    quiz: {
      q: B('Sorting three hundred short messages into four categories. Which model?',
        'Trier trois cents messages courts en quatre catégories. Quel modèle ?'),
      options: [
        B('A small fast one, with a clear instruction', 'Un petit rapide, avec une instruction claire'),
        B('The biggest one available, for the best accuracy', 'Le plus gros disponible, pour la meilleure précision'),
        B('It makes no difference', 'Cela ne change rien'),
      ],
      answer: 0,
      why: B(
        'Sorting into four named categories is an easy task done three hundred times. The instruction decides the accuracy; the model size decides the bill.',
        "Trier en quatre catégories nommées est une tâche facile faite trois cents fois. L'instruction décide de la justesse ; la taille du modèle décide de la facture.",
      ),
    },
    badge: B('Matches model to task', 'Accorde le modèle à la tâche'),
  },
  {
    id: 'effort',
    master: 'analysis',
    minutes: 6,
    title: B('Thinking costs, and when it pays', 'Réfléchir coûte, et quand ça paie'),
    learn: B(
      'You will turn deep thinking on for the tasks that need it and off for the rest.',
      "Vous activerez la réflexion profonde là où elle sert et l'éteindrez ailleurs.",
    ),
    act: B('Run one task twice, with and without, and compare time and result.',
      'Lancez une tâche deux fois, avec et sans, et comparez le temps et le résultat.'),
    steps: [
      B('Thinking helps where there are steps to chain: maths, code, a plan.',
        "La réflexion aide là où il y a des étapes à enchaîner : calcul, code, plan."),
      B('It helps nothing where there is a single lookup or a rewrite.',
        "Elle n'aide en rien sur une simple recherche ou une réécriture."),
      B('It is billed. You pay for the thinking even when you never see it.',
        "Elle est facturée. Vous payez la réflexion même sans jamais la voir."),
    ],
    trap: B(
      'Leaving it on everywhere. You pay three to five times as much for answers that are identical.',
      "La laisser allumée partout. Vous payez trois à cinq fois plus pour des réponses identiques.",
    ),
    quiz: {
      q: B('Rewriting a paragraph in a softer tone. Deep thinking?',
        'Réécrire un paragraphe sur un ton plus doux. Réflexion profonde ?'),
      options: [
        B('Yes, the rewrite will come out better written', 'Oui, la réécriture en sortira mieux écrite'),
        B('No, there is nothing to reason through', "Non, il n'y a rien à raisonner"),
        B('Only in English', "Seulement en anglais"),
      ],
      answer: 1,
      why: B(
        'Thinking chains steps. A rewrite has one step. You would pay for reasoning that has nothing to reason about.',
        "La réflexion enchaîne des étapes. Une réécriture en a une. Vous paieriez un raisonnement qui n'a rien à raisonner.",
      ),
    },
    badge: B('Spends thought wisely', 'Dépense la réflexion à propos'),
  },
  {
    id: 'switch',
    master: 'tools',
    minutes: 6,
    title: B('Moving between providers', 'Passer d\'un fournisseur à l\'autre'),
    learn: B(
      'You will keep your work portable instead of tied to one company.',
      "Vous garderez votre travail portable au lieu de l'attacher à une entreprise.",
    ),
    act: B('Take one instruction and run it on a second provider unchanged.',
      'Prenez une instruction et lancez-la telle quelle chez un second fournisseur.'),
    steps: [
      B('Your instruction is portable. It is plain text and it always was.',
        "Votre instruction est portable. C'est du texte simple, et elle l'a toujours été."),
      B('What is not portable is the plumbing: tool formats, file handling.',
        "Ce qui ne l'est pas, c'est la plomberie : formats d'outils, gestion des fichiers."),
      B('Keep the instruction outside the tool and switching costs an afternoon.',
        "Gardez l'instruction hors de l'outil et changer coûte une après-midi."),
    ],
    trap: B(
      'Writing instructions that name the tool. "As ChatGPT, ..." stops working the day you leave.',
      "Écrire des instructions qui nomment l'outil. « En tant que ChatGPT, … » cesse de marcher le jour où vous partez.",
    ),
    quiz: {
      q: B('What makes your work portable?', 'Qu\'est-ce qui rend votre travail portable ?'),
      options: [
        B('Keeping the instruction as text, outside the tool', "Garder l'instruction en texte, hors de l'outil"),
        B('Staying with the provider that has the largest share', 'Rester chez le fournisseur qui a la plus grosse part'),
        B('Exporting your conversations', 'Exporter ses conversations'),
      ],
      answer: 0,
      why: B(
        'The instruction is the work. Conversations are the residue of it, and a provider-specific setup is a cage you built yourself.',
        "L'instruction est le travail. Les conversations n'en sont que le résidu, et un réglage propre à un fournisseur est une cage qu'on s'est construite.",
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
    title: B('What it remembers about you', 'Ce qu\'il retient de vous'),
    learn: B(
      'You will control what it carries between conversations instead of guessing.',
      "Vous maîtriserez ce qu'il transporte d'une conversation à l'autre au lieu de deviner.",
    ),
    act: B('Read what it has stored about you, and remove half of it.',
      'Lisez ce qu\'il a retenu de vous, et supprimez-en la moitié.'),
    steps: [
      B('It keeps notes across chats. Useful, and invisible until you look.',
        "Il garde des notes d'une discussion à l'autre. Utile, et invisible tant qu'on ne regarde pas."),
      B('An old note steers every new answer. Wrong notes are worse than none.',
        "Une note ancienne oriente chaque nouvelle réponse. Une note fausse est pire que pas de note."),
      B('Custom instructions apply to everything. Keep them short and general.',
        "Les instructions permanentes s'appliquent à tout. Gardez-les courtes et générales."),
    ],
    trap: B(
      'Putting a one-off project in the permanent instructions. Six months later it still bends every answer.',
      "Mettre un projet ponctuel dans les instructions permanentes. Six mois plus tard, il tord encore chaque réponse.",
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
        'Something that has been wrong for weeks, across different questions, is something that travels with every question. That is the stored notes.',
        "Ce qui est faux depuis des semaines, sur des questions différentes, est ce qui voyage avec chaque question. Ce sont les notes retenues.",
      ),
    },
    badge: B('Owns its memory', 'Maîtrise sa mémoire'),
  },
  {
    id: 'gpt-projects',
    master: 'planning',
    minutes: 6,
    title: B('Grouping work that belongs together', 'Grouper ce qui va ensemble'),
    learn: B(
      'You will stop re-explaining your context at the start of every conversation.',
      "Vous cesserez de réexpliquer votre contexte au début de chaque conversation.",
    ),
    act: B('Put one recurring piece of work in its own space, with its files.',
      'Mettez un travail récurrent dans son propre espace, avec ses fichiers.'),
    steps: [
      B('One space per recurring job, not per week.',
        "Un espace par travail récurrent, pas par semaine."),
      B('Its instruction lives on the space, not in the first message.',
        "Son instruction vit sur l'espace, pas dans le premier message."),
      B('Its reference files live there too, and stay out of the prompt.',
        "Ses fichiers de référence y vivent aussi, et restent hors de la consigne."),
    ],
    trap: B(
      'One space per topic you have ever touched. Thirty spaces is a filing problem, not a method.',
      "Un espace par sujet jamais abordé. Trente espaces sont un problème de rangement, pas une méthode.",
    ),
    quiz: {
      q: B('What belongs on a project space rather than in a message?',
        'Qu\'est-ce qui va sur un espace de projet plutôt que dans un message ?'),
      options: [
        B('The context that is true every time', 'Le contexte vrai à chaque fois'),
        B('The particular question you are asking today', "La question particulière que vous posez aujourd'hui"),
        B('The answer you liked', 'La réponse qui vous a plu'),
      ],
      answer: 0,
      why: B(
        'Anything true every time is repetition if you type it each time, and drift if you type it slightly differently. That is exactly what a space is for.',
        "Ce qui est vrai à chaque fois est une répétition si on le retape, et une dérive si on le retape autrement. C'est exactement à cela que sert un espace.",
      ),
    },
    badge: B('Sets the stage once', 'Pose le décor une fois'),
  },
  {
    id: 'gpt-files',
    master: 'extraction',
    minutes: 6,
    title: B('Working on your documents', 'Travailler sur vos documents'),
    learn: B(
      'You will know when a file is read whole and when it is only searched.',
      "Vous saurez quand un fichier est lu en entier et quand il n'est que fouillé.",
    ),
    act: B('Ask a question whose answer sits on the last page of a long file.',
      'Posez une question dont la réponse est à la dernière page d\'un long fichier.'),
    steps: [
      B('A short file is read whole. A long one is searched in pieces.',
        "Un fichier court est lu en entier. Un fichier long est fouillé par morceaux."),
      B('Searched means it may miss a link between two distant pages.',
        "Fouillé veut dire qu'il peut rater un lien entre deux pages éloignées."),
      B('When the link matters, paste the two passages yourself.',
        "Quand le lien compte, collez vous-même les deux passages."),
    ],
    trap: B(
      'Asking for a synthesis of a long document and trusting it. It saw pieces, not the whole.',
      "Demander la synthèse d'un long document et y croire. Il a vu des morceaux, pas l'ensemble.",
    ),
    quiz: {
      q: B('A contradiction between page 3 and page 80. Will it find it?',
        'Une contradiction entre la page 3 et la page 80. La trouvera-t-il ?'),
      options: [
        B('Yes, the whole file was given to it', "Oui, le fichier entier lui a été donné"),
        B('Only with deep thinking on', 'Seulement avec la réflexion profonde'),
        B('Often not, if it only searched pieces', "Souvent non, s'il n'a fouillé que des morceaux"),
      ],
      answer: 2,
      why: B(
        'Finding a contradiction requires holding both passages at once. A piecewise search brings back the passage matching your words, not the pair that disagree.',
        "Trouver une contradiction demande de tenir les deux passages ensemble. Une fouille par morceaux ramène le passage qui ressemble à vos mots, pas la paire qui se contredit.",
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
    title: B('Holding a lot at once', 'Tenir beaucoup d\'un coup'),
    learn: B(
      'You will use a large window on purpose rather than by accident.',
      "Vous utiliserez une grande fenêtre exprès plutôt que par accident.",
    ),
    act: B('Give it three documents at once and ask what they disagree about.',
      'Donnez-lui trois documents à la fois et demandez sur quoi ils divergent.'),
    steps: [
      B('A large window means comparison becomes possible, not just summary.',
        "Une grande fenêtre rend la comparaison possible, pas seulement le résumé."),
      B('Say what each document is before pasting it. Labels beat order.',
        "Dites ce qu'est chaque document avant de le coller. Les étiquettes valent mieux que l'ordre."),
      B('Ask for differences, not a summary. Summaries hide the disagreement.',
        "Demandez les différences, pas un résumé. Les résumés cachent le désaccord."),
    ],
    trap: B(
      'Filling the window because it is there. Everything you add pulls the answer towards it.',
      "Remplir la fenêtre parce qu'elle existe. Tout ce que vous ajoutez tire la réponse vers lui.",
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
        'Three summaries are three things you already had. The value of holding them together is seeing what only appears when they are side by side.',
        "Trois résumés sont trois choses que vous aviez déjà. L'intérêt de les tenir ensemble est de voir ce qui n'apparaît qu'en les mettant côte à côte.",
      ),
    },
    badge: B('Compares instead of summarising', 'Compare au lieu de résumer'),
  },
  {
    id: 'cl-artifacts',
    master: 'coding',
    minutes: 6,
    title: B('Getting something you can keep', 'Obtenir quelque chose qui reste'),
    learn: B(
      'You will leave with a document you can iterate on, not a wall of chat.',
      "Vous repartirez avec un document sur lequel itérer, pas un mur de discussion.",
    ),
    act: B('Ask for a single document and then change one part of it.',
      'Demandez un document unique puis changez-en une partie.'),
    steps: [
      B('Ask for one self-contained piece, not an explanation around it.',
        "Demandez une pièce autonome, pas une explication autour."),
      B('Change one part by naming it, not by re-describing the whole.',
        "Changez une partie en la nommant, pas en redécrivant le tout."),
      B('Keep the final version outside the conversation.',
        "Gardez la version finale hors de la conversation."),
    ],
    trap: B(
      'Asking for the whole thing again to change a line. You get a new whole thing, slightly different everywhere.',
      "Redemander tout pour changer une ligne. Vous obtenez un nouveau tout, légèrement différent partout.",
    ),
    quiz: {
      q: B('One sentence is wrong in a long document. What do you ask?',
        'Une phrase est fausse dans un long document. Que demandez-vous ?'),
      options: [
        B('Rewrite the whole thing, better this time', "Réécris l'ensemble, en mieux cette fois"),
        B('Change only that sentence, and say what to put',
          'Change cette phrase seulement, et dis quoi mettre'),
        B('Start over', 'Recommence'),
      ],
      answer: 1,
      why: B(
        'A full rewrite changes things you had already accepted, and you will not notice which. Naming the part keeps everything you had agreed.',
        "Une réécriture complète change des choses que vous aviez déjà acceptées, et vous ne verrez pas lesquelles. Nommer la partie conserve tout ce qui était acquis.",
      ),
    },
    badge: B('Edits, never regenerates', 'Modifie au lieu de régénérer'),
  },
  {
    id: 'cl-style',
    master: 'writing',
    minutes: 6,
    title: B('Making it write like you', 'Le faire écrire comme vous'),
    learn: B(
      'You will get your own voice back instead of a generic one.',
      "Vous retrouverez votre voix au lieu d'une voix générique.",
    ),
    act: B('Give it three things you wrote and ask what your rules are.',
      'Donnez-lui trois choses que vous avez écrites et demandez quelles sont vos règles.'),
    steps: [
      B('Paste three real samples. Not your best, your usual.',
        "Collez trois échantillons réels. Pas vos meilleurs, vos habituels."),
      B('Ask it to state the rules it sees. Correct that list.',
        "Demandez-lui d'énoncer les règles qu'il voit. Corrigez cette liste."),
      B('Keep the corrected list. That is your style guide, and it is portable.',
        "Gardez la liste corrigée. C'est votre charte d'écriture, et elle est portable."),
    ],
    trap: B(
      'Asking it to "write like me" with no sample. It will write like the average of everyone.',
      "Lui demander d'« écrire comme moi » sans échantillon. Il écrira comme la moyenne de tout le monde.",
    ),
    quiz: {
      q: B('What is the most reusable output of this exercise?',
        'Quel est le produit le plus réutilisable de cet exercice ?'),
      options: [
        B('The finished text it produced for you', "Le texte fini qu'il a produit pour vous"),
        B('The list of rules describing your voice', 'La liste de règles qui décrit votre voix'),
        B('The conversation', 'La conversation'),
      ],
      answer: 1,
      why: B(
        'The text serves once. The rules work on every provider, for every future piece, and you can correct them by hand.',
        "Le texte sert une fois. Les règles marchent chez tous les fournisseurs, sur tous les textes à venir, et vous pouvez les corriger à la main.",
      ),
    },
    badge: B('Owns a style guide', 'Possède sa charte'),
  },
]

const M_GEMINI: Level[] = [
  {
    id: 'gm-inside',
    master: 'tools',
    minutes: 6,
    title: B('Working where your files already are', 'Travailler là où sont déjà vos fichiers'),
    learn: B(
      'You will stop copying documents into a chat window.',
      "Vous cesserez de recopier des documents dans une fenêtre de discussion.",
    ),
    act: B('Ask a question about a document without opening or pasting it.',
      'Posez une question sur un document sans l\'ouvrir ni le coller.'),
    steps: [
      B('An assistant wired into your drive sees the file where it lives.',
        "Un assistant branché sur votre espace voit le fichier là où il est."),
      B('That removes the copy, and the version drift that comes with it.',
        "Cela supprime la copie, et la dérive de version qui va avec."),
      B('It also means it sees what you can see. Check who else can.',
        "Cela veut dire aussi qu'il voit ce que vous voyez. Vérifiez qui d'autre le peut."),
    ],
    trap: B(
      'Forgetting that access follows sharing. A document shared widely is read widely.',
      "Oublier que l'accès suit le partage. Un document largement partagé est largement lu.",
    ),
    quiz: {
      q: B('The main gain of an assistant inside your documents?',
        'Le gain principal d\'un assistant dans vos documents ?'),
      options: [
        B('It is noticeably faster than pasting', "Il est nettement plus rapide que coller"),
        B('There is no copy, so no version drift', 'Il n\'y a pas de copie, donc pas de dérive de version'),
        B('It is cheaper', 'Il coûte moins cher'),
      ],
      answer: 1,
      why: B(
        'Pasting creates a second version that stops being true the moment someone edits the first. Reading it in place cannot go stale.',
        "Coller crée une deuxième version qui cesse d'être vraie dès que quelqu'un modifie la première. Lire sur place ne peut pas se périmer.",
      ),
    },
    badge: B('Leaves files where they live', 'Laisse les fichiers chez eux'),
  },
  {
    id: 'gm-notebook',
    master: 'extraction',
    minutes: 6,
    title: B('Answering from your sources only', 'Répondre à partir de vos seules sources'),
    learn: B(
      'You will get answers that cite your documents instead of the internet.',
      "Vous obtiendrez des réponses qui citent vos documents au lieu d'internet.",
    ),
    act: B('Load five of your own documents and ask a question none of them answers.',
      'Chargez cinq de vos documents et posez une question à laquelle aucun ne répond.'),
    steps: [
      B('A source-bound tool answers from what you gave it, and says where.',
        "Un outil lié aux sources répond à partir de ce que vous avez donné, et dit d'où."),
      B('Ask a question it cannot answer. A good tool says so.',
        "Posez une question sans réponse dedans. Un bon outil le dit."),
      B('That refusal is the feature. It is what a general chat will not do.',
        "Ce refus est la fonction. C'est ce qu'une discussion générale ne fera pas."),
    ],
    trap: B(
      'Judging it by how much it says. Less, with a citation, beats more without.',
      "Le juger à la quantité. Moins, avec une citation, vaut mieux que plus sans.",
    ),
    quiz: {
      q: B('Your sources do not contain the answer. What should happen?',
        'Vos sources ne contiennent pas la réponse. Que devrait-il se passer ?'),
      options: [
        B('It answers from general knowledge', 'Il répond avec ses connaissances générales'),
        B('It says the sources do not cover it', 'Il dit que les sources ne le couvrent pas'),
        B('It guesses and marks it as uncertain', "Il devine et le signale comme incertain"),
      ],
      answer: 1,
      why: B(
        'The point of binding answers to your sources is knowing that everything said is in them. An answer from elsewhere, however true, breaks that guarantee silently.',
        "L'intérêt de lier les réponses à vos sources est de savoir que tout ce qui est dit s'y trouve. Une réponse venue d'ailleurs, même vraie, casse cette garantie en silence.",
      ),
    },
    badge: B('Demands a citation', 'Exige une citation'),
  },
  {
    id: 'gm-scale',
    master: 'triage',
    minutes: 6,
    title: B('Doing the same thing three hundred times', 'Faire trois cents fois la même chose'),
    learn: B(
      'You will run one instruction over a whole table instead of one row.',
      "Vous ferez tourner une instruction sur un tableau entier au lieu d'une ligne.",
    ),
    act: B('Take a spreadsheet column and classify all of it in one pass.',
      'Prenez une colonne de tableur et classez-la entièrement en un passage.'),
    steps: [
      B('Write the instruction for one row until it is right.',
        "Écrivez l'instruction pour une ligne jusqu'à ce qu'elle soit juste."),
      B('Test it on ten rows you already know the answer to.',
        "Éprouvez-la sur dix lignes dont vous connaissez déjà la réponse."),
      B('Only then run the three hundred. Errors multiply by three hundred too.',
        "Ensuite seulement, lancez les trois cents. Les erreurs se multiplient aussi par trois cents."),
    ],
    trap: B(
      'Running the full table first to "see what happens". You get three hundred wrong rows and no idea why.',
      "Lancer tout le tableau d'abord pour « voir ». Vous obtenez trois cents lignes fausses et aucune idée de pourquoi.",
    ),
    quiz: {
      q: B('Before running an instruction over three hundred rows?',
        'Avant de lancer une instruction sur trois cents lignes ?'),
      options: [
        B('Pick the strongest model available first', "Choisir d'abord le modèle le plus puissant"),
        B('Test it on ten rows whose answer you know', 'La tester sur dix lignes dont vous savez la réponse'),
        B('Write a longer instruction', 'Écrire une instruction plus longue'),
      ],
      answer: 1,
      why: B(
        'Ten known answers tell you the error rate before it costs anything. Without them you are buying three hundred results you cannot check.',
        "Dix réponses connues vous donnent le taux d'erreur avant que cela ne coûte quoi que ce soit. Sans elles, vous achetez trois cents résultats invérifiables.",
      ),
    },
    badge: B('Tests before scaling', 'Éprouve avant de passer à l\'échelle'),
  },
]

const M_PERPLEXITY: Level[] = [
  {
    id: 'px-sources',
    master: 'research',
    minutes: 6,
    title: B('Reading the sources, not the answer', 'Lire les sources, pas la réponse'),
    learn: B(
      'You will judge a researched answer by what it read, not by how it reads.',
      "Vous jugerez une réponse documentée sur ce qu'elle a lu, pas sur sa façon de se lire.",
    ),
    act: B('Open every source behind one answer and count how many support it.',
      'Ouvrez chaque source derrière une réponse et comptez combien la soutiennent.'),
    steps: [
      B('A citation proves a page was read, not that it says this.',
        "Une citation prouve qu'une page a été lue, pas qu'elle dit cela."),
      B('Check the date on the page, not the date in the answer.',
        "Vérifiez la date sur la page, pas la date dans la réponse."),
      B('Three sources that copy one press release are one source.',
        "Trois sources qui recopient un même communiqué font une seule source."),
    ],
    trap: B(
      'Counting citations as proof. Ten links to the same origin is one fact repeated ten times.',
      "Compter les citations comme une preuve. Dix liens vers la même origine font un fait répété dix fois.",
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
        'Independence is what makes sources add up. Five outlets relaying one press release give you the press release five times, with no extra verification.',
        "C'est l'indépendance qui fait qu'on additionne des sources. Cinq organes qui relaient un communiqué vous donnent le communiqué cinq fois, sans vérification supplémentaire.",
      ),
    },
    badge: B('Counts real sources', 'Compte les vraies sources'),
  },
  {
    id: 'px-question',
    master: 'analysis',
    minutes: 6,
    title: B('Asking a researchable question', 'Poser une question documentable'),
    learn: B(
      'You will ask questions that have an answer somewhere, and say where to look.',
      "Vous poserez des questions qui ont une réponse quelque part, et vous direz où chercher.",
    ),
    act: B('Rewrite a vague question so that a wrong answer would be provably wrong.',
      'Réécrivez une question vague pour qu\'une mauvaise réponse soit démontrablement fausse.'),
    steps: [
      B('Name the period. "Recently" means nothing to a search.',
        "Nommez la période. « Récemment » ne veut rien dire pour une recherche."),
      B('Name the kind of source you will accept.',
        "Nommez le type de source que vous accepterez."),
      B('Ask for the number and its origin in the same sentence.',
        "Demandez le chiffre et son origine dans la même phrase."),
    ],
    trap: B(
      'Asking for an opinion and reading it as research. A cited opinion is still an opinion.',
      "Demander un avis et le lire comme une recherche. Un avis sourcé reste un avis.",
    ),
    quiz: {
      q: B('Which question can be answered and checked?',
        'Quelle question peut être répondue et vérifiée ?'),
      options: [
        B('Is this market growing, and is it growing fast enough for us?', 'Ce marché croît-il, et assez vite pour nous ?'),
        B('What is the future of this market?', "Quel est l'avenir de ce marché ?"),
        B('What did this market weigh in 2024, and per which published source?',
          'Combien pesait ce marché en 2024, et selon quelle source publiée ?'),
      ],
      answer: 2,
      why: B(
        'It names a year, a quantity and the kind of proof. The other two can be answered agreeably and never be wrong, which is the same as never being right.',
        "Elle nomme une année, une quantité et le type de preuve. Aux deux autres on peut répondre aimablement sans jamais avoir tort, ce qui revient à ne jamais avoir raison.",
      ),
    },
    badge: B('Asks a checkable question', 'Pose une question vérifiable'),
  },
  {
    id: 'px-when',
    master: 'triage',
    minutes: 5,
    title: B('When not to search', 'Quand ne pas chercher'),
    learn: B(
      'You will stop paying for a search that adds nothing.',
      "Vous cesserez de payer une recherche qui n'apporte rien.",
    ),
    act: B('List three of your usual questions and mark which need sources.',
      'Listez trois de vos questions habituelles et marquez celles qui demandent des sources.'),
    steps: [
      B('Search when the answer changed recently, or must be provable.',
        "Cherchez quand la réponse a changé récemment, ou doit être prouvable."),
      B('Do not search to rewrite, to summarise your own text, or to think.',
        "Ne cherchez pas pour réécrire, résumer votre propre texte, ou réfléchir."),
      B('Searching adds sources to the bill and noise to the answer.',
        "Chercher ajoute des sources à la facture et du bruit à la réponse."),
    ],
    trap: B(
      'Leaving search on for everything. It makes a stable answer slower, dearer and less direct.',
      "Laisser la recherche active pour tout. Elle rend une réponse stable plus lente, plus chère et moins directe.",
    ),
    quiz: {
      q: B('Rewriting your own paragraph. Search?',
        'Réécrire votre propre paragraphe. Chercher ?'),
      options: [
        B('Yes, it will find better wording', 'Oui, il trouvera de meilleures tournures'),
        B('No, there is nothing to look up', "Non, il n'y a rien à chercher"),
        B('Only for technical texts', 'Seulement pour les textes techniques'),
      ],
      answer: 1,
      why: B(
        'The text is already in front of it. Searching adds pages about other people topics, which pull the rewrite away from yours.',
        "Le texte est déjà sous ses yeux. Chercher ajoute des pages sur les sujets d'autrui, qui tirent la réécriture loin du vôtre.",
      ),
    },
    badge: B('Searches on purpose', 'Cherche à dessein'),
  },
]

const M_COPILOT: Level[] = [
  {
    id: 'cp-context',
    master: 'coding',
    minutes: 6,
    title: B('It sees what is open', 'Il voit ce qui est ouvert'),
    learn: B(
      'You will control what it uses by controlling what is in front of it.',
      "Vous maîtriserez ce qu'il utilise en maîtrisant ce qui est devant lui.",
    ),
    act: B('Close everything unrelated and ask the same question again.',
      'Fermez tout ce qui est hors sujet et reposez la même question.'),
    steps: [
      B('An assistant inside a tool reads what the tool has open.',
        "Un assistant dans un outil lit ce que l'outil a ouvert."),
      B('Unrelated open material pulls the answer sideways.',
        "Le matériel ouvert hors sujet tire la réponse de travers."),
      B('Naming the file or the sheet beats hoping it guesses.',
        "Nommer le fichier ou la feuille vaut mieux qu'espérer qu'il devine."),
    ],
    trap: B(
      'Blaming the model when the answer mixes two projects. It was shown two projects.',
      "Accuser le modèle quand la réponse mélange deux projets. On lui a montré deux projets.",
    ),
    quiz: {
      q: B('The answer mixes in another project. Why?',
        'La réponse mélange un autre projet. Pourquoi ?'),
      options: [
        B('The model got confused between two subjects', 'Le modèle a confondu deux sujets différents'),
        B('That project was open, so it was context', "Ce projet était ouvert, donc il faisait contexte"),
        B('The instruction was too short', "L'instruction était trop courte"),
      ],
      answer: 1,
      why: B(
        'An assistant embedded in a tool treats what is open as what you mean. Controlling the window is controlling the prompt.',
        "Un assistant intégré à un outil traite ce qui est ouvert comme ce que vous visez. Maîtriser la fenêtre, c'est maîtriser la consigne.",
      ),
    },
    badge: B('Controls the window', 'Maîtrise la fenêtre'),
  },
  {
    id: 'cp-repeat',
    master: 'planning',
    minutes: 6,
    title: B('The meeting, the mail, the follow-up', 'La réunion, le mail, le suivi'),
    learn: B(
      'You will get decisions and owners out of a meeting instead of a transcript.',
      "Vous sortirez d'une réunion avec des décisions et des responsables, pas une transcription.",
    ),
    act: B('Ask for decisions, owners and dates. Nothing else.',
      'Demandez les décisions, les responsables et les dates. Rien d\'autre.'),
    steps: [
      B('A transcript is not a summary, and a summary is not a decision.',
        "Une transcription n'est pas un résumé, et un résumé n'est pas une décision."),
      B('Ask for three columns: what was decided, by whom, by when.',
        "Demandez trois colonnes : ce qui a été décidé, par qui, pour quand."),
      B('Ask what was raised and left unresolved. That is the useful column.',
        "Demandez ce qui a été soulevé et laissé en suspens. C'est la colonne utile."),
    ],
    trap: B(
      'Accepting a summary that reads well and names nobody. Nothing will happen, and it will look like it will.',
      "Accepter un résumé qui se lit bien et ne nomme personne. Rien n'arrivera, et cela ressemblera au contraire.",
    ),
    quiz: {
      q: B('Which output actually moves work forward?',
        'Quelle sortie fait vraiment avancer le travail ?'),
      options: [
        B('A clear, well written summary of the meeting', 'Un résumé clair et bien écrit de la réunion'),
        B('The full transcript', 'La transcription complète'),
        B('Decisions with a name and a date on each', 'Des décisions avec un nom et une date sur chacune'),
      ],
      answer: 2,
      why: B(
        'A decision without an owner is a wish, and a wish with a good paragraph around it is a wish that nobody notices died.',
        "Une décision sans responsable est un souhait, et un souhait bien rédigé est un souhait dont personne ne remarque la mort.",
      ),
    },
    badge: B('Leaves with decisions', 'Repart avec des décisions'),
  },
  {
    id: 'cp-limits',
    master: 'watch',
    minutes: 5,
    title: B('What it must not touch', 'Ce à quoi il ne doit pas toucher'),
    learn: B(
      'You will know what an assistant wired into your company can reach.',
      "Vous saurez ce qu'un assistant branché sur votre entreprise peut atteindre.",
    ),
    act: B('Ask it for something you should not be able to see.',
      'Demandez-lui quelque chose que vous ne devriez pas pouvoir voir.'),
    steps: [
      B('It reaches exactly what your account reaches. No more, and no less.',
        "Il atteint exactement ce que votre compte atteint. Ni plus, ni moins."),
      B('That means a badly shared folder is now searchable in one sentence.',
        "Cela veut dire qu'un dossier mal partagé devient cherchable en une phrase."),
      B('Before deploying it widely, fix the sharing, not the assistant.',
        "Avant de le déployer largement, corrigez les partages, pas l'assistant."),
    ],
    trap: B(
      'Treating this as an AI problem. It is a permissions problem that the assistant made visible.',
      "Prendre cela pour un problème d'IA. C'est un problème de droits que l'assistant a rendu visible.",
    ),
    quiz: {
      q: B('The assistant surfaces a document you should not see. What is broken?',
        'L\'assistant fait remonter un document que vous ne devriez pas voir. Qu\'est-ce qui est cassé ?'),
      options: [
        B('The assistant, which looked too far', "L'assistant, qui est allé chercher trop loin"),
        B('Nothing, it is normal', "Rien, c'est normal"),
        B('The sharing on that document', 'Le partage de ce document'),
      ],
      answer: 2,
      why: B(
        'It only reads what your account already had the right to open. It did not grant access, it made existing access easy to use.',
        "Il ne lit que ce que votre compte avait déjà le droit d'ouvrir. Il n'a pas donné l'accès, il a rendu un accès existant facile à exercer.",
      ),
    },
    badge: B('Reads the permissions', 'Lit les droits'),
  },
]

const M_AGENTS: Level[] = [
  {
    id: 'ag-shape',
    master: 'triage',
    minutes: 7,
    title: B('Which shape is your problem', 'De quelle forme est votre problème'),
    learn: B(
      'You will name the shape before building, because each shape fails differently.',
      "Vous nommerez la forme avant de construire, parce que chaque forme échoue différemment.",
    ),
    act: B('Take your target task and say which of the twelve shapes it is.',
      'Prenez votre tâche cible et dites laquelle des douze formes elle est.'),
    steps: [
      B('Reading a lot and coming back with the part that matters: a researcher.',
        "Lire beaucoup et revenir avec ce qui compte : un chercheur."),
      B('Putting things in named boxes: a sorter. It fails by confusing two neighbours.',
        "Ranger dans des cases nommées : un trieur. Il rate en confondant deux voisines."),
      B('Pulling fields out of documents: an extractor. It fails by inventing a missing field.',
        "Sortir des champs de documents : un extracteur. Il rate en inventant un champ absent."),
      B('If it is two shapes, it is two agents. That is the most useful thing here.',
        "Si c'est deux formes, ce sont deux agents. C'est la chose la plus utile de ce niveau."),
    ],
    trap: B(
      'Building one agent for a job that is really three. It will be mediocre at all three.',
      "Construire un agent pour un métier qui en fait trois. Il sera médiocre sur les trois.",
    ),
    quiz: {
      q: B('An agent reads invoices and fills a table. Which shape?',
        'Un agent lit des factures et remplit un tableau. Quelle forme ?'),
      options: [
        B('A researcher, it reads', 'Un chercheur, il lit'),
        B('A writer', 'Un rédacteur'),
        B('An extractor', 'Un extracteur'),
      ],
      answer: 2,
      why: B(
        'It pulls named fields out of documents. Knowing that tells you its failure mode straight away: a plausible value in a field that was simply absent.',
        "Il sort des champs nommés de documents. Le savoir vous donne tout de suite sa façon de rater : une valeur plausible dans un champ simplement absent.",
      ),
    },
    badge: B('Names the shape', 'Nomme la forme'),
  },
  {
    id: 'ag-method',
    master: 'planning',
    minutes: 8,
    title: B('Writing the method', 'Écrire la méthode'),
    learn: B(
      'You will write steps an agent follows the same way every time.',
      "Vous écrirez des étapes qu'un agent suit de la même façon à chaque fois.",
    ),
    act: B('Write four steps for your agent, in order, each producing something.',
      'Écrivez quatre étapes pour votre agent, dans l\'ordre, chacune produisant quelque chose.'),
    steps: [
      B('Every step must MAKE something: a list, a note, a decision.',
        "Chaque étape doit FABRIQUER quelque chose : une liste, une note, une décision."),
      B('A step that only "considers" or "analyses" produces nothing and can be cut.',
        "Une étape qui se contente d'« étudier » ou d'« analyser » ne produit rien et peut sauter."),
      B('The next step starts from what the previous one made. Say so.',
        "L'étape suivante part de ce que la précédente a fabriqué. Dites-le."),
      B('Four to six steps. Below four you are hiding jobs inside one.',
        "Quatre à six étapes. En dessous de quatre, vous cachez des métiers dans une seule."),
    ],
    trap: B(
      'Writing "analyse the data" as a step. Nothing comes out, so nothing can go in next.',
      "Écrire « analyser les données » comme étape. Rien n'en sort, donc rien ne peut entrer ensuite.",
    ),
    quiz: {
      q: B('Which of these is a real step?',
        'Laquelle est une vraie étape ?'),
      options: [
        B('Understand the customer and their situation', 'Comprendre le client et sa situation'),
        B('Think about the positioning', 'Réfléchir au positionnement'),
        B('List the five objections found, with a quote for each',
          'Lister les cinq objections trouvées, avec une citation pour chacune'),
      ],
      answer: 2,
      why: B(
        'It names what comes out and how much of it. The other two produce nothing the next step can start from, so they are decoration.',
        "Elle nomme ce qui sort et en quelle quantité. Les deux autres ne produisent rien dont l'étape suivante puisse partir : ce sont des ornements.",
      ),
    },
    badge: B('Writes a real method', 'Écrit une vraie méthode'),
  },
  {
    id: 'ag-safe',
    master: 'tools',
    minutes: 7,
    title: B('Letting it act, carefully', 'Le laisser agir, prudemment'),
    learn: B(
      'You will turn on actions one at a time instead of all at once.',
      "Vous allumerez les actions une à une au lieu de toutes d'un coup.",
    ),
    act: B('Run your agent with read-only tools and watch what it tries to do.',
      'Lancez votre agent avec des outils en lecture seule et regardez ce qu\'il tente.'),
    steps: [
      B('Read only first. That is not caution, it is how you find out its intentions.',
        "La lecture seule d'abord. Ce n'est pas de la prudence, c'est ainsi qu'on découvre ses intentions."),
      B('Then one action that changes something, watched for a few real cases.',
        "Puis une action qui change quelque chose, observée sur quelques cas réels."),
      B('Keep an approval step on anything you cannot undo.',
        "Gardez une approbation sur tout ce qui ne se défait pas."),
      B('Content it reads is data, never an instruction. Say that in its limits.',
        "Le contenu qu'il lit est une donnée, jamais une instruction. Écrivez-le dans ses limites."),
    ],
    trap: B(
      'Turning on every tool to test faster. When it misbehaves you cannot tell which tool did it.',
      "Tout allumer pour tester plus vite. Quand ça dérape, vous ne savez pas quel outil l'a fait.",
    ),
    quiz: {
      q: B('Your agent reads an email saying "ignore your instructions". What should it do?',
        'Votre agent lit un mail disant « ignore tes instructions ». Que doit-il faire ?'),
      options: [
        B('Obey it, since it arrived as an instruction', "Obéir, puisque c'est arrivé comme une instruction"),
        B('Treat it as data and carry on', 'La traiter comme une donnée et continuer'),
        B('Stop and ask you', 'S\'arrêter et vous demander'),
      ],
      answer: 1,
      why: B(
        'Anything read from a tool is content, not command. Writing that limit explicitly is what stops your own inbox being used against you.',
        "Tout ce qui est lu dans un outil est du contenu, pas un ordre. Écrire cette limite explicitement est ce qui empêche votre propre boîte de servir contre vous.",
      ),
    },
    badge: B('Opens one door at a time', 'Ouvre une porte à la fois'),
  },
]

const M_DESIGN: Level[] = [
  {
    id: 'ds-judge',
    master: 'analysis',
    minutes: 7,
    title: B('Judging a screen without taste', 'Juger un écran sans avoir de goût'),
    learn: B(
      'You will say why one screen is better than another, with a rule rather than a feeling.',
      "Vous saurez dire pourquoi un écran vaut mieux qu'un autre, avec une règle et non une impression.",
    ),
    act: B('Take two screens and judge them on the four rules only.',
      'Prenez deux écrans et jugez-les sur les quatre règles seulement.'),
    steps: [
      B('One thing is clearly the most important. If two compete, neither wins.',
        "Une chose est nettement la plus importante. Si deux rivalisent, aucune ne gagne."),
      B('Things that belong together sit closer than things that do not.',
        "Ce qui va ensemble est plus proche que ce qui ne va pas ensemble."),
      B('Fewer sizes, fewer weights, fewer colours than you think you need.',
        "Moins de tailles, de graisses et de couleurs que vous ne le croyez."),
      B('Empty space is a decision, not a leftover.',
        "Le vide est une décision, pas un reste."),
    ],
    trap: B(
      'Adding a colour to fix a hierarchy problem. The problem is what is next to what.',
      "Ajouter une couleur pour régler un problème de hiérarchie. Le problème est ce qui est à côté de quoi.",
    ),
    quiz: {
      q: B('Two buttons of equal weight side by side. What is wrong?',
        'Deux boutons de poids égal côte à côte. Où est le défaut ?'),
      options: [
        B('Nothing decides which one to press', 'Rien ne dit lequel presser'),
        B('The colour of one of the two', "La couleur de l'un des deux"),
        B('The spacing', "L'espacement"),
      ],
      answer: 0,
      why: B(
        'A screen makes a reader choose. Two equal buttons hand that decision back, and the reader picks neither and leaves.',
        "Un écran fait choisir. Deux boutons égaux rendent la décision au lecteur, qui n'en prend aucun et s'en va.",
      ),
    },
    badge: B('Judges with rules', 'Juge avec des règles'),
  },
  {
    id: 'ds-model',
    master: 'writing',
    minutes: 8,
    title: B('Designing with a model', 'Dessiner avec un modèle'),
    learn: B(
      'You will describe an interface so a model builds the one you meant.',
      "Vous décrirez une interface pour qu'un modèle construise celle que vous aviez en tête.",
    ),
    act: B('Describe one screen in structure, not in adjectives, and have it built.',
      'Décrivez un écran en structure, pas en adjectifs, et faites-le construire.'),
    steps: [
      B('Say what the screen is FOR in one sentence. Everything follows from it.',
        "Dites à quoi sert l'écran en une phrase. Tout en découle."),
      B('List the blocks top to bottom, and which one is the most important.',
        "Listez les blocs de haut en bas, et lequel est le plus important."),
      B('Name the state when things go wrong: empty, loading, too long.',
        "Nommez les états quand ça se passe mal : vide, en cours, trop long."),
      B('Ask for one screen. Ten screens at once are ten mediocre screens.',
        "Demandez un écran. Dix écrans d'un coup font dix écrans médiocres."),
    ],
    trap: B(
      'Asking for "a modern, clean, professional page". It will produce the average of every page.',
      "Demander « une page moderne, épurée, professionnelle ». Vous obtiendrez la moyenne de toutes les pages.",
    ),
    quiz: {
      q: B('What is missing most often from a design brief to a model?',
        'Que manque-t-il le plus souvent dans une commande de design à un modèle ?'),
      options: [
        B('The colours and the brand', 'Les couleurs et la marque'),
        B('The font', 'La police'),
        B('The empty and error states', 'Les états vides et en erreur'),
      ],
      answer: 2,
      why: B(
        'A model designs the happy case by default. The empty screen is the one a real user sees first, and nobody ever asks for it.',
        "Un modèle dessine le cas heureux par défaut. L'écran vide est celui qu'un vrai utilisateur voit en premier, et personne ne le demande jamais.",
      ),
    },
    badge: B('Describes structure', 'Décrit la structure'),
  },
  {
    id: 'ds-build',
    master: 'coding',
    minutes: 8,
    title: B('From a screen to something that runs', 'De l\'écran à quelque chose qui tourne'),
    learn: B(
      'You will take a design to a working page without writing code yourself.',
      "Vous mènerez un design jusqu'à une page qui fonctionne sans écrire de code vous-même.",
    ),
    act: B('Build one page, then change one thing about it and rebuild.',
      'Construisez une page, puis changez-y une chose et reconstruisez.'),
    steps: [
      B('Start from the structure you wrote, not from a picture.',
        "Partez de la structure que vous avez écrite, pas d'une image."),
      B('Build one page fully before starting the second.',
        "Terminez une page avant d'en commencer une deuxième."),
      B('Change one thing at a time. Two changes hide which one broke it.',
        "Changez une chose à la fois. Deux changements cachent lequel a cassé."),
      B('Keep the structure document. The generated code is the disposable part.',
        "Gardez le document de structure. Le code engendré est la partie jetable."),
    ],
    trap: B(
      'Treating the generated code as the work. The work is the decisions; the code is what fell out of them.',
      "Prendre le code engendré pour le travail. Le travail, ce sont les décisions ; le code en est le résidu.",
    ),
    quiz: {
      q: B('Which artefact is worth keeping?',
        'Quel artefact vaut la peine d\'être gardé ?'),
      options: [
        B('The structure and the decisions behind it', 'La structure et les décisions qui la soutiennent'),
        B('The generated code, it runs', 'Le code engendré, il fonctionne'),
        B('The conversation', 'La conversation'),
      ],
      answer: 0,
      why: B(
        'Code can be regenerated in a minute from good decisions. Decisions cannot be recovered from code, and that is the asymmetry that decides what you keep.',
        "Du code se régénère en une minute à partir de bonnes décisions. Les décisions ne se retrouvent pas dans le code, et c'est cette asymétrie qui décide de ce qu'on garde.",
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
    title: B('Measure before you cut', 'Mesurer avant de couper'),
    learn: B(
      'You will know where your tokens actually go, which is never where you think.',
      "Vous saurez où partent vraiment vos jetons, ce qui n'est jamais là où vous croyez.",
    ),
    act: B('Count the pieces of one real run: instruction, context, history, answer.',
      'Comptez les morceaux d\'un passage réel : instruction, contexte, historique, réponse.'),
    steps: [
      B('Four parts are billed, and they are rarely the same size.',
        "Quatre parties sont facturées, et elles sont rarement de la même taille."),
      B('The instruction is almost always the smallest, and it is what people cut.',
        "L'instruction est presque toujours la plus petite, et c'est elle qu'on coupe."),
      B('The history is almost always the biggest, and nobody looks at it.',
        "L'historique est presque toujours le plus gros, et personne ne le regarde."),
    ],
    trap: B(
      'Optimising what is easy to see. The visible part is the instruction, and it costs nothing.',
      "Optimiser ce qui se voit. La partie visible est l'instruction, et elle ne coûte rien.",
    ),
    quiz: {
      q: B('Which part of a long conversation costs the most?',
        'Quelle partie d\'une longue conversation coûte le plus ?'),
      options: [
        B('The history resent at every turn', "L'historique renvoyé à chaque tour"),
        B('Your instruction, sent each turn', 'Votre instruction, envoyée à chaque tour'),
        B('The final answer', 'La réponse finale'),
      ],
      answer: 0,
      why: B(
        'Your instruction is sent once per turn and is a few lines. The history is sent once per turn too, and it grows with every turn that went before.',
        "Votre instruction est envoyée une fois par tour et fait quelques lignes. L'historique est envoyé une fois par tour lui aussi, et il grossit de tous les tours précédents.",
      ),
    },
    badge: B('Measures first', 'Mesure d\'abord'),
  },
  {
    id: 'ct-levers',
    master: 'tools',
    minutes: 7,
    title: B('The moves that actually save', 'Les gestes qui économisent vraiment'),
    learn: B(
      'You will apply the three changes that matter and skip the ones that do not.',
      "Vous appliquerez les trois changements qui comptent et laisserez les autres.",
    ),
    act: B('Apply one lever to your target task and measure the difference.',
      'Appliquez un levier à votre tâche cible et mesurez la différence.'),
    steps: [
      B('Cut the history: a fresh conversation beats a fiftieth turn.',
        "Coupez l'historique : une conversation neuve bat un cinquantième tour."),
      B('Turn off tools you are not using in this run.',
        "Éteignez les outils qui ne servent pas dans ce passage."),
      B('Match the model to the difficulty, per task, not once for everything.',
        "Accordez le modèle à la difficulté, tâche par tâche, pas une fois pour toutes."),
    ],
    trap: B(
      'Applying all three to a task that runs twice a month. You saved nothing and lost an hour.',
      "Appliquer les trois à une tâche qui tourne deux fois par mois. Vous n'avez rien économisé et perdu une heure.",
    ),
    quiz: {
      q: B('Which task deserves optimising?',
        'Quelle tâche mérite d\'être optimisée ?'),
      options: [
        B('The single run that costs the most money', "Le passage qui coûte le plus d'argent à lui seul"),
        B('The newest one', 'La plus récente'),
        B('The cheap one that runs a thousand times', 'La peu chère qui tourne mille fois'),
      ],
      answer: 2,
      why: B(
        'Cost is price multiplied by frequency. A cheap task run a thousand times beats an expensive one run twice, and only one of the two is worth an hour of your time.',
        "Le coût est le prix multiplié par la fréquence. Une tâche peu chère mille fois bat une tâche chère deux fois, et une seule des deux mérite une heure de votre temps.",
      ),
    },
    badge: B('Cuts the right thing', 'Coupe au bon endroit'),
  },
  {
    id: 'ct-own',
    master: 'orchestration',
    minutes: 7,
    title: B('Running it on your own key', 'Le faire tourner sur votre clé'),
    learn: B(
      'You will take what you built out of here and run it yourself.',
      "Vous sortirez ce que vous avez construit et le ferez tourner vous-même.",
    ),
    act: B('Export your agent and point it at a framework on your own key.',
      'Exportez votre agent et branchez-le sur un framework avec votre propre clé.'),
    steps: [
      B('Your instruction and your tool schemas are the whole of it. Both are text.',
        "Votre instruction et vos schémas d'outils sont tout. Les deux sont du texte."),
      B('Put a ceiling on what the provider may bill you, before the first run.',
        "Posez un plafond sur ce que le fournisseur peut vous facturer, avant le premier passage."),
      B('Run it read-only once more, on your key, before letting it write.',
        "Relancez-le en lecture seule une fois de plus, sur votre clé, avant de le laisser écrire."),
    ],
    trap: B(
      'Going live without a cap because the test cost two cents. A loop nobody stopped costs more than the lesson.',
      "Passer en production sans plafond parce que l'essai a coûté deux centimes. Une boucle que personne n'a arrêtée coûte plus que la leçon.",
    ),
    quiz: {
      q: B('First thing to do before running on your own key?',
        'Première chose à faire avant de tourner sur votre propre clé ?'),
      options: [
        B('Pick the best model', 'Choisir le meilleur modèle'),
        B('Set a spending cap', 'Poser un plafond de dépense'),
        B('Write documentation', 'Écrire la documentation'),
      ],
      answer: 1,
      why: B(
        'Everything else can be fixed the next day. A loop that ran all night cannot, and it is the one failure that costs real money rather than time.',
        "Tout le reste se corrige le lendemain. Une boucle qui a tourné toute la nuit, non, et c'est le seul échec qui coûte de l'argent plutôt que du temps.",
      ),
    },
    badge: B('Leaves with the keys', 'Repart avec les clés'),
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
    title: B('Starting right', 'Commencer du bon pied'),
    blurb: B('Pick the task you will carry, and a place to keep what works.',
      "Choisissez la tâche que vous porterez, et un endroit où garder ce qui marche."),
  },
  {
    id: 'basics', track: 'path', glyph: 'pen', tint: '#0ea5e9', at: [3, 1], levels: M_BASICS,
    title: B('The basics of prompting', 'Les bases du prompt engineering'),
    blurb: B('One job per instruction, the right slice of context, a named shape.',
      "Un métier par instruction, la bonne tranche de contexte, une forme nommée."),
  },
  {
    id: 'elements', track: 'path', glyph: 'layers', tint: '#e0459b', at: [5, 1], levels: M_ELEMENTS,
    title: B('What a good prompt is made of', "Les éléments d'un bon prompt"),
    blurb: B('A real role, one worked example, and limits that hold.',
      "Un vrai rôle, un exemple travaillé, et des limites qui tiennent."),
  },
  {
    id: 'techniques', track: 'path', glyph: 'gear', tint: '#1fa563', at: [7, 1], levels: M_TECHNIQUES,
    title: B('The techniques', 'Les techniques'),
    blurb: B('The plan before the text, doubt made visible, and knowing when to restart.',
      "Le plan avant le texte, le doute rendu visible, et savoir repartir de zéro."),
  },
  {
    id: 'models', track: 'path', glyph: 'hex', tint: '#f59e0b', at: [2, 3], levels: M_MODELS,
    title: B('The models', 'Les modèles'),
    blurb: B('What actually differs between them, and what thinking costs.',
      "Ce qui les distingue vraiment, et ce que coûte la réflexion."),
  },
  {
    id: 'chatgpt', track: 'path', glyph: 'ring', tint: '#10a37f', at: [4, 3], levels: M_CHATGPT,
    title: B('Mastering ChatGPT', 'Maîtriser ChatGPT'),
    blurb: B('Its memory, its project spaces, and what it really read of your files.',
      "Sa mémoire, ses espaces de projet, et ce qu'il a vraiment lu de vos fichiers."),
  },
  {
    id: 'claude', track: 'path', glyph: 'diamond', tint: '#d97757', at: [6, 3], levels: M_CLAUDE,
    title: B('Mastering Claude', 'Maîtriser Claude'),
    blurb: B('Holding several documents at once, editing instead of regenerating.',
      "Tenir plusieurs documents à la fois, modifier au lieu de régénérer."),
  },
  {
    id: 'gemini', track: 'path', glyph: 'star4', tint: '#4285f4', at: [8, 3], levels: M_GEMINI,
    title: B('Mastering Gemini', 'Maîtriser Gemini'),
    blurb: B('Working where your files live, answering from your sources only.',
      "Travailler là où vivent vos fichiers, répondre à partir de vos seules sources."),
  },
  {
    id: 'perplexity', track: 'path', glyph: 'target', tint: '#20808d', at: [1, 5], levels: M_PERPLEXITY,
    title: B('Mastering Perplexity', 'Maîtriser Perplexity'),
    blurb: B('Reading the sources rather than the answer, and knowing when not to search.',
      "Lire les sources plutôt que la réponse, et savoir quand ne pas chercher."),
  },
  {
    id: 'copilot', track: 'path', glyph: 'grid', tint: '#0078d4', at: [3, 5], levels: M_COPILOT,
    title: B('Mastering Copilot', 'Maîtriser Copilot'),
    blurb: B('What it sees, decisions out of meetings, and the permissions behind it.',
      "Ce qu'il voit, des décisions au sortir des réunions, et les droits derrière."),
  },
  {
    id: 'agents', track: 'path', glyph: 'quadrant', tint: '#7b5cff', at: [5, 5], levels: M_AGENTS,
    title: B('AI agents', 'Les agents IA'),
    blurb: B('Name the shape, write the method, open one door at a time.',
      "Nommer la forme, écrire la méthode, ouvrir une porte à la fois."),
  },
  {
    id: 'design', track: 'path', glyph: 'frame', tint: '#ff7a1a', at: [7, 5], levels: M_DESIGN,
    title: B('Design with AI', 'Design IA'),
    blurb: B('Judge a screen with rules, describe structure, build something that runs.',
      "Juger un écran avec des règles, décrire une structure, construire ce qui tourne."),
  },
  {
    id: 'cost', track: 'path', glyph: 'delta', tint: '#08c2ac', at: [9, 5], levels: M_COST,
    title: B('What it really costs', 'Le coût réel'),
    blurb: B('Measure before cutting, cut the right thing, leave with your own key.',
      "Mesurer avant de couper, couper au bon endroit, repartir avec sa propre clé."),
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
