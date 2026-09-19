// L'ICEBERG DES JETONS · ce que les gens croient, ce que c'est, ce qu'il faut
// installer.
//
// POURQUOI UN ICEBERG PLUTÔT QU'UNE LISTE. Une liste de vingt-et-un conseils
// se lit comme vingt-et-un conseils équivalents, et personne ne finit une
// liste de vingt-et-un. Or ils ne se valent pas du tout : quatre sont ce que
// tout le monde essaie en premier et rapportent peu, douze sont des gestes
// qu'on peut faire dans la minute, et neuf demandent d'installer quelque
// chose une fois pour toutes. La forme porte donc l'argument · ce qui dépasse
// de l'eau est la plus petite partie, et c'est la seule que l'on regarde.
//
// POUR TOUS LES MODÈLES, PAS POUR UN OUTIL. L'illustration d'origine liste des
// commandes d'un assistant précis. Recopier ces noms produirait une page
// périmée au premier renommage, exactement comme un extrait de code
// d'appel dans la page des frameworks (voir son en-tête). On nomme donc le
// MÉCANISME, qui est le même partout parce qu'il découle de la facturation et
// non du produit, et on donne ensuite comment il s'appelle là où le lecteur a
// des chances d'être. Les noms bougent, la mécanique non.
//
// CE FICHIER NE REDIT AUCUN LEVIER. Sept leviers existent déjà dans
// data/frugality, avec leur « quand ne pas le faire » et surtout leur gain
// CALCULÉ sur les chiffres que le lecteur a saisis. Un item d'iceberg qui
// recopierait « détachez les outils » créerait une huitième copie d'une
// consigne, et les deux divergeraient le jour où l'une est corrigée. Les items
// qui correspondent à un levier le DÉSIGNENT par son identifiant, et la page
// va chercher le texte et le chiffre là-bas · scripts/test-iceberg.mjs échoue
// si un identifiant pointe dans le vide ou si un texte est recopié.
import { LEVERS } from './frugality'

/** Les trois profondeurs. L'ordre est l'argument, il ne se réarrange pas. */
export type Depth = 'surface' | 'real' | 'deeper'

export interface IcebergItem {
  id: string
  depth: Depth
  /** le geste, nommé par sa mécanique */
  title: string
  /** une ligne sous le titre, dans le schéma */
  short: string
  /** ce que ça fait, en une phrase de prose */
  what: string
  /** POURQUOI ça marche · la mécanique de facturation, jamais la promesse */
  why: string
  /** quand ne pas le faire · un conseil sans contre-indication est un slogan */
  not: string
  /** comment ça s'appelle ailleurs · au niveau du mécanisme, jamais une
   *  signature d'appel. Vide quand le geste n'a pas de nom établi. */
  called: string[]
  /** le levier de data/frugality que cet item désigne, s'il en existe un.
   *  La page lit alors son gain calculé plutôt que d'inventer un pourcentage. */
  lever?: string
  /** LE FRANÇAIS, dans la même entrée · voir data/plans pour le raisonnement.
   *  `called` n'y est pas : ce sont des noms d'options et de commandes tels
   *  qu'on les rencontre, et les traduire enverrait quelqu'un chercher dans
   *  son interface un libellé qui n'y figure pas. */
  fr?: { title: string; short: string; what: string; why: string; not: string }
}

/** CE QUE LES GENS ESSAIENT EN PREMIER.
 *
 *  Aucun des quatre n'est faux, et c'est ce qui les rend coûteux : ils
 *  occupent la place. Quelqu'un qui a « pris un modèle moins cher et écrit
 *  plus court » a le sentiment d'avoir traité le sujet, et n'ira pas voir
 *  sous la ligne de flottaison, où se trouve l'essentiel de sa facture. */
export const SURFACE: IcebergItem[] = [
  {
    id: 'cheaper-model', depth: 'surface',
    fr: {
      title: "Prendre un modèle moins cher",
      short: "Le premier réflexe, et il a un piège",
      what: "Déplacer le travail vers un modèle plus petit, à un tarif plus bas au million de jetons.",
      why:
        "Ça réduit bien le tarif, parfois d'un facteur dix. Ce que ça ne réduit pas, c'est le NOMBRE de jetons, et ce nombre est décidé par vos habitudes. Un petit modèle sur une conversation mal tenue coûte plus qu'un grand sur un fil propre.",
      not:
        "Ne déplacez pas une tâche qui demandera ensuite deux tentatives. Une reprise repaie toute la conversation, donc un modèle cinq fois moins cher et faux une fois sur trois ne vous a rien économisé.",
    },
    title: 'Take a cheaper model',
    short: 'The first reflex, and the one with a catch',
    what: 'Move the work to a smaller model at a lower rate per million tokens.',
    why:
      'It does cut the rate, sometimes by a factor of ten. What it does not cut is the NUMBER of tokens, and the ' +
      'number is what your habits decide. A small model on a badly managed conversation costs more than a large ' +
      'one on a clean thread.',
    not:
      'Do not move a task that then needs two attempts. A retry pays the whole conversation again, so a model ' +
      'that is five times cheaper and wrong one time in three has saved you nothing.',
    called: ['Model picker', 'A model parameter on the request'],
  },
  {
    id: 'shorter-prompts', depth: 'surface',
    fr: {
      title: "Écrire des prompts plus courts",
      short: "La plus petite ligne de la facture",
      what: "Raccourcir ce que vous tapez avant de l'envoyer.",
      why:
        "Regardez n'importe quel décompte réel : ce que vous avez tapé en est presque toujours la plus petite part, derrière les consignes permanentes, les définitions d'outils et l'historique. Le diviser par deux économise une erreur d'arrondi, et c'est pourquoi ceux qui s'y tiennent ne voient rien changer et en concluent que rien ne marche.",
      not:
        "Ne raccourcissez pas un prompt jusqu'à l'ambiguïté pour gagner quarante jetons. L'aller-retour de clarification coûte deux fois le prompt entier.",
    },
    title: 'Write shorter prompts',
    short: 'The smallest line on the bill',
    what: 'Trim what you type before you send it.',
    why:
      'Look at any real breakdown and what you typed is almost always the smallest part of it, behind the ' +
      'standing instructions, the tool definitions and the history. Halving it saves a rounding error, which is ' +
      'why people who do it faithfully see no change and conclude that nothing works.',
    not:
      'Do not trim a prompt into ambiguity to save forty tokens. The clarification round trip costs more than ' +
      'the whole prompt did, twice over.',
    called: [],
  },
  {
    id: 'clear-sometimes', depth: 'surface',
    fr: {
      title: "Vider la conversation de temps en temps",
      short: "La bonne idée, le mauvais déclencheur",
      what: "Repartir de zéro quand le fil commence à sembler long.",
      why:
        "L'intuition est juste et c'est la plus grosse économie qui existe. Ce qui en fait une habitude de surface, c'est « de temps en temps » : quand un fil SEMBLE long, vous l'avez déjà payé, parce que le coût grandissait comme le carré des tours pendant que vous ne regardiez pas.",
      not:
        "Ne videz pas au milieu d'un raisonnement. Vous repaierez une réflexion déjà achetée, et elle n'atterrira pas forcément au même endroit.",
    },
    title: 'Clear the chat sometimes',
    short: 'Right idea, wrong trigger',
    what: 'Start over when the thread feels long.',
    why:
      'The instinct is correct and it is the single biggest saving there is. What makes it a surface habit is ' +
      '"sometimes": by the time a thread FEELS long you have already paid for it, because the cost grew with the ' +
      'square of the turns while you were not looking.',
    not:
      'Do not clear mid reasoning. You will pay again for thinking you already bought, and it may not land in ' +
      'the same place.',
    lever: 'reset',
    called: [],
  },
  {
    id: 'thinking-off', depth: 'surface',
    fr: {
      title: "Couper la réflexion",
      short: "Un réglage, pas une pratique",
      what: "Empêcher le modèle de raisonner avant de répondre.",
      why:
        "Les jetons de raisonnement sont facturés comme de la sortie, c'est à dire la moitié chère, donc les couper est une vraie réduction sur les requêtes qui n'en avaient pas besoin. C'est en surface parce que c'est un interrupteur, basculé une fois, sur un type de requête, alors que tout ce qui est en dessous s'applique à chaque requête que vous enverrez.",
      not:
        "Ne le coupez pas sur du travail réellement difficile. Une réponse fausse produite à bas prix est la chose la plus chère de cette page, parce que vous la repayez et que vous risquez de ne pas voir qu'elle était fausse.",
    },
    title: 'Turn the thinking off',
    short: 'A setting, not a practice',
    what: 'Stop the model reasoning before it answers.',
    why:
      'Reasoning tokens are billed as output, which is the dear half, so switching them off is a real cut on the ' +
      'requests that did not need them. It sits at the surface because it is one switch, flipped once, on one ' +
      'kind of request, while everything below applies to every request you will ever send.',
    not:
      'Do not switch it off on work that is actually hard. A wrong answer produced cheaply is the most expensive ' +
      'thing on this page, because you pay for it again and you may not notice it was wrong.',
    called: ['A reasoning or effort parameter', 'A thinking budget, sometimes in tokens'],
  },
]

/** CE QUE C'EST VRAIMENT · les gestes disponibles tout de suite.
 *
 *  Aucun ne demande d'installer quoi que ce soit. Ils sont sous la ligne de
 *  flottaison parce qu'il faut savoir qu'ils existent, pas parce qu'ils sont
 *  difficiles. */
export const REAL: IcebergItem[] = [
  {
    id: 'new-thread', depth: 'real',
    fr: {
      title: "Ouvrir un fil quand le sujet change",
      short: "La plus grosse économie qui existe",
      what: "Fermer la conversation et en ouvrir une autre, en emportant une ligne de ce qui a été décidé.",
      why:
        "Le modèle n'a pas de mémoire. Ce qu'il semble se rappeler est votre historique, renvoyé en entier à chaque tour : un fil de vingt tours n'est pas vingt fois le premier, il traîne dix-neuf tours avec lui. Changer de sujet sans changer de fil, c'est payer l'ancien sujet sur chaque message du nouveau.",
      not:
        "Ne repartez pas de zéro au milieu d'un raisonnement, et pas sans emporter la contrainte qui avait été convenue. Un fil neuf qui a oublié la seule règle est pire qu'un fil cher.",
    },
    title: 'Open a new thread when the subject changes',
    short: 'The biggest saving there is',
    what: 'Close the conversation and start another, carrying one line of what was settled.',
    why:
      'The model has no memory. What it seems to remember is your history, re-sent in full on every turn, so a ' +
      'thread of twenty turns is not twenty times the first: it carries nineteen turns with it. Changing subject ' +
      'without changing thread means paying for the old subject on every message of the new one.',
    not:
      'Do not reset in the middle of a reasoning chain, and do not reset without carrying the constraint that ' +
      'was agreed. A fresh thread that has forgotten the one rule is worse than an expensive one.',
    lever: 'reset',
    called: ['New chat', 'New session', 'A fresh messages array'],
  },
  {
    id: 'compact', depth: 'real',
    fr: {
      title: "Compacter le fil au lieu de le vider",
      short: "Garder les conclusions, jeter le chemin",
      what: "Remplacer la conversation par un résumé de ce qui a été décidé, puis continuer.",
      why:
        "Les faits acquis se compressent à presque rien ; un raisonnement en cours, non. Compacter paie un résumé une fois, puis cesse de renvoyer la discussion qui l'a produit à chaque tour, pour tout le reste du fil.",
      not:
        "Ne laissez jamais un compactage manger la demande d'origine ni une contrainte énoncée comme un « jamais ». Le tour qui en a besoin est exactement celui qui échouera sans elle.",
    },
    title: 'Compact the thread instead of clearing it',
    short: 'Keep the conclusions, drop the road',
    what: 'Replace the conversation so far with a summary of what was decided, and continue.',
    why:
      'Settled facts compress to almost nothing; live reasoning does not. Compacting pays a summary once and ' +
      'then stops re-sending the discussion that produced it, on every turn, for the rest of the thread.',
    not:
      'Never let a compaction eat the original request or a constraint stated as "never". The turn that needs it ' +
      'back is exactly the turn that will fail without it.',
    lever: 'summarise-history',
    called: ['Compact', 'Summarise the conversation', 'A rolling summary in your own loop'],
  },
  {
    id: 'rewind', depth: 'real',
    fr: {
      title: "Revenir avant l'erreur plutôt que corriger en avançant",
      short: "Une correction est un tour entier de plus",
      what: "Ramener la conversation au point d'avant le mauvais tour et redemander depuis là.",
      why:
        "Corriger en avançant garde la mauvaise réponse dans l'historique et la fait renvoyer à chaque tour suivant, plus la correction, plus la nouvelle réponse. Revenir en arrière supprime la branche dont vous ne voulez pas au lieu de la porter jusqu'à la fin du fil.",
      not:
        "Ne remontez pas au-delà de ce que vous vouliez garder. Là où l'outil ne le propose pas, cela revient à ouvrir un fil et à réénoncer la demande, ce qui ne vaut le coup que si la branche était longue.",
    },
    title: 'Go back to before the mistake, do not correct forwards',
    short: 'A correction is a whole extra turn',
    what: 'Return the conversation to the point before the wrong turn and ask again from there.',
    why:
      'Correcting forwards keeps the bad answer in the history and pays to re-send it on every turn afterwards, ' +
      'plus the correction, plus the new answer. Going back deletes the branch you do not want instead of ' +
      'carrying it for the rest of the thread.',
    not:
      'Do not rewind past something you want to keep. Where the tool does not offer it, this means starting a ' +
      'thread and re-stating the request, which is only worth it if the branch was long.',
    called: ['Rewind', 'Edit and resend', 'Truncating the messages array yourself'],
  },
  {
    id: 'name-the-file', depth: 'real',
    fr: {
      title: "Désigner la chose au lieu de le laisser chercher",
      short: "Une recherche lit tout ce qu'elle ouvre",
      what: "Nommer le fichier, la page ou la fiche dont vous parlez, au lieu de le décrire et de laisser l'agent fouiller.",
      why:
        "Chaque fichier qu'un agent ouvre en cherchant entre dans le contexte et est ensuite renvoyé à chaque tour. Une fouille qui a ouvert quatre mauvais fichiers avant le bon en a mis cinq dans votre historique, et vous les payez jusqu'à la fin du fil.",
      not:
        "Ne devinez pas un chemin dont vous n'êtes pas sûr. Un mauvais nom coûte une lecture ratée plus la recherche que vous vouliez éviter, et l'agent risque de chercher plus fort qu'il ne l'aurait fait.",
    },
    title: 'Point at the thing instead of letting it look',
    short: 'A search reads everything it opens',
    what: 'Name the file, the page or the record you mean, rather than describing it and letting the agent hunt.',
    why:
      'Every file an agent opens while searching enters the context and is then re-sent on every subsequent turn. ' +
      'A hunt that took four wrong files before the right one has put five files in your history, and you pay for ' +
      'all five until the thread ends.',
    not:
      'Do not guess a path you are not sure of. A wrong name costs a failed read plus the search you were trying ' +
      'to avoid, and the agent may then look harder than it would have.',
    called: ['Mentioning a file directly', 'Passing the content yourself', 'A narrow retrieval filter'],
  },
  {
    id: 'detach-tools', depth: 'real',
    fr: {
      title: "Détacher les outils que cette tâche ne peut pas utiliser",
      short: "Chaque outil expédie son schéma, appelé ou non",
      what: "Attacher les outils par tâche plutôt que de tout laisser branché en permanence.",
      why:
        "Une définition d'outil voyage avec chaque requête, qu'elle soit appelée ou non : son nom, sa description et le schéma complet de ses paramètres. Une étape de rédaction qui traîne un agenda, une interface de paiement et un outil de déploiement paie pour décrire les trois, à chaque tour, pour n'en faire aucun.",
      not:
        "Ne détachez pas un outil dont la tâche pourrait avoir besoin en cas de reprise. Un second aller-retour coûte plus que la définition économisée, et il coûte l'attente en plus.",
    },
    title: 'Detach the tools this task cannot use',
    short: 'Every tool ships its schema, used or not',
    what: 'Attach tools per task rather than leaving everything connected all the time.',
    why:
      'A tool definition travels with every single request whether it is called or not: its name, its ' +
      'description and its full parameter schema. A drafting step that carries a calendar, a payment API and a ' +
      'deployment tool pays to describe all three, every turn, to do none of them.',
    not:
      'Do not detach a tool the task might need on a retry. A second round trip costs more than the definition ' +
      'you saved, and it costs the waiting too.',
    lever: 'tools-off',
    called: ['Toggling connectors', 'The tools array on the request', 'Enabling one server at a time'],
  },
  {
    id: 'model-per-task', depth: 'real',
    fr: {
      title: "Choisir le modèle par tâche, pas par session",
      short: "La plupart des étapes ne sont pas l'étape difficile",
      what: "Envoyer le raisonnement au modèle capable et les étapes mécaniques au petit.",
      why:
        "Un enchaînement a d'ordinaire une seule étape vraiment difficile et plusieurs qui reformatent. Le faire tourner entièrement au niveau qu'exige la plus dure paie le tarif du vaisseau amiral pour un travail qu'un petit modèle fait à l'identique.",
      not:
        "Ne découpez pas si finement que vous y passiez votre propre temps. Et n'orientez pas au seul prix : le modèle bon marché qu'il faut vérifier a déplacé le coût sur vous.",
    },
    title: 'Choose the model per task, not per session',
    short: 'Most steps are not the hard step',
    what: 'Send the reasoning to the capable model and the mechanical steps to the small one.',
    why:
      'A pipeline usually has one genuinely hard step and several that are reformatting. Running the whole ' +
      'pipeline at the level the hardest step needs pays flagship rates for work a small model does identically.',
    not:
      'Do not split so finely that you spend your own time routing. And do not route on price alone: the cheap ' +
      'model that needs checking has moved the cost onto you.',
    called: ['A model switch mid session', 'The model field, per call', 'Router or cascade configuration'],
  },
  {
    id: 'effort-per-task', depth: 'real',
    fr: {
      title: "Régler l'effort de réflexion par tâche",
      short: "Le raisonnement est facturé comme de la sortie",
      what: "Demander plus de raisonnement sur la requête difficile, et aucun sur l'évidente.",
      why:
        "Les jetons de raisonnement sont des jetons de sortie, et la sortie coûte typiquement trois à cinq fois le tarif d'entrée. Laisser un raisonnement profond actif sur chaque requête revient à payer le prix de la question la plus dure de la journée sur toutes les plus faciles.",
      not:
        "N'en faites pas une molette d'économie. Sur du travail réellement difficile, moins de réflexion produit une réponse fausse d'une façon qu'il faut aller trouver, ce qui est le résultat le plus cher disponible.",
    },
    title: 'Set how hard it should think, per task',
    short: 'Reasoning is billed as output',
    what: 'Ask for more reasoning on the hard request and none on the obvious one.',
    why:
      'Reasoning tokens are output tokens, and output is typically three to five times the input rate. Leaving ' +
      'deep reasoning on for every request means paying the price of the hardest question you will ask that day ' +
      'on every question you ask that day.',
    not:
      'Do not treat it as a savings dial. On genuinely hard work, less thinking produces an answer that is wrong ' +
      'in a way you have to find, which is the most expensive outcome available.',
    called: ['An effort or reasoning level', 'A thinking budget', 'Extended or deep modes'],
  },
  {
    id: 'say-it-once', depth: 'real',
    fr: {
      title: "Le dire une fois en haut, pas à chaque tour",
      short: "Une consigne répétée est payée à chaque fois",
      what: "Mettre la règle permanente là où elle est lue une fois par requête, au lieu de la taper dans chaque message.",
      why:
        "Répéter « réponds en français, sois bref, emploie nos termes » dans dix messages l'envoie dix fois ET en laisse dix copies dans l'historique, qui sont ensuite renvoyées à chaque tour suivant. La même phrase dans les consignes permanentes est lue une fois par requête et ne s'accumule jamais.",
      not:
        "Ne déplacez pas vers les consignes permanentes ce qui ne valait que pour une tâche. Une règle permanente écrite pour un cas unique est payée sur chaque requête pour toujours, et elle infléchit discrètement du travail auquel elle n'était pas destinée.",
    },
    title: 'Say it once at the top, not every turn',
    short: 'A repeated instruction is paid every time',
    what: 'Put the standing rule where it is read once per request instead of typing it into every message.',
    why:
      'Repeating "answer in French, be brief, use our terms" in ten messages sends it ten times AND leaves ten ' +
      'copies in the history, which are then re-sent on every turn after that. The same sentence in the standing ' +
      'instructions is read once per request and never accumulates.',
    not:
      'Do not move something to the standing instructions that only applied to one task. A permanent rule written ' +
      'for a one-off is paid on every request forever, and it quietly bends work it was never meant for.',
    called: ['A project or custom instruction', 'The system prompt', 'A rules or memory file'],
  },
  {
    id: 'look-at-context', depth: 'real',
    fr: {
      title: "Regarder ce qu'il y a dans le contexte avant d'y ajouter",
      short: "On ne gère pas ce qu'on ne voit jamais",
      what: "Vérifier ce qui est chargé en ce moment : les consignes, les outils, les fichiers, l'historique.",
      why:
        "Presque tout fil coûteux l'est pour une raison que son propriétaire aurait retirée en la voyant : un document collé il y a une heure, un outil que personne n'utilise, un résumé jamais appliqué. L'habitude ne coûte rien et c'est elle qui transforme tout le reste de cette page en décisions plutôt qu'en conseils.",
      not:
        "Il n'y a aucune raison de s'en priver. Le seul piège est de regarder une fois et de croire que ça reste vrai : ça grandit à chaque tour, et c'est tout le sujet.",
    },
    title: 'Look at what is in the context before adding to it',
    short: 'You cannot manage what you never see',
    what: 'Check what is currently loaded: the instructions, the tools, the files, the history.',
    why:
      'Almost every expensive thread is expensive for a reason its owner would have removed on sight: a document ' +
      'pasted an hour ago, a tool nobody uses, a summary that was never applied. The habit costs nothing and it ' +
      'is what turns every other item on this page from advice into a decision.',
    not:
      'There is no reason not to. The only trap is looking once and assuming it stays true: it grows with every ' +
      'turn, which is the whole point.',
    called: ['A context command', 'Token usage shown per request', 'Counting tokens before you send'],
  },
  {
    id: 'ask-once', depth: 'real',
    fr: {
      title: "Demander le tout en un seul message",
      short: "Cinq relances, c'est cinq fils entiers",
      what: "Énoncer le format, la longueur et les contraintes d'emblée au lieu de les corriger après.",
      why:
        "C'est celui que les gens ne croient pas avant de l'avoir compté. Une relance a l'air d'un petit message parce que le petit message est tout ce que vous avez tapé, mais elle traîne le fil entier derrière elle : le brief, les outils, les deux côtés de chaque tour déjà passé. Quatre tours d'affinage sur un long fil peuvent coûter plus que le travail lui-même.",
      not:
        "N'en faites pas un rituel de rédaction de cahier des charges. S'il vous faut une conversation pour découvrir ce que vous voulez, ayez-la à bas prix, sur un fil court, et commencez la vraie en connaissant la réponse.",
    },
    title: 'Ask for the whole thing in one message',
    short: 'Five follow-ups is five whole threads',
    what: 'State the format, the length and the constraints up front rather than correcting them afterwards.',
    why:
      'This is the one people do not believe until they count it. A follow-up feels like a small message because ' +
      'the small message is all you typed, but it drags the entire thread behind it: the brief, the tools, both ' +
      'sides of every turn so far. Four rounds of refinement on a long thread can cost more than the work did.',
    not:
      'Do not turn it into a ritual of writing specifications. If you need a conversation to find out what you ' +
      'want, have the conversation cheaply, on a short thread, and start the real one knowing the answer.',
    lever: 'ask-once',
    called: [],
  },
  {
    id: 'shape-the-answer', depth: 'real',
    fr: {
      title: "Demander la forme de la réponse, pas seulement son contenu",
      short: "Un plafond choisi vaut mieux qu'un plafond regretté",
      what: "Dire quelle longueur, sous quelle forme, et avec quoi en moins, dans la requête elle-même.",
      why:
        "Un modèle sans plafond énoncé remplit la place qu'on lui donne, et l'essentiel de ce qu'il ajoute reformule votre propre question. La sortie étant la moitié chère de la facture, une phrase qui décrit la forme est la consigne la moins chère que vous écrirez jamais.",
      not:
        "Ne plafonnez pas une requête dont le travail est de produire quelque chose de long. Un document tronqué doit être régénéré, et la seconde tentative repart de zéro.",
    },
    title: 'Ask for the shape of the answer, not just its content',
    short: 'A ceiling you set beats one you regret',
    what: 'Say how long, in what form, and with what left out, in the request itself.',
    why:
      'A model with no stated ceiling fills the space it is given, and most of what it adds is restatement of ' +
      'your own question. Output is the dear half of the bill, so a sentence describing the shape is the ' +
      'cheapest instruction you will ever write.',
    not:
      'Do not cap a request whose job is to produce something long. A truncated document has to be regenerated, ' +
      'and the second attempt starts from nothing.',
    lever: 'cap-answer',
    called: ['A maximum output length', 'A schema or response format'],
  },
  {
    id: 'read-the-counts', depth: 'real',
    fr: {
      title: "Lire les décomptes que votre fournisseur renvoie déjà",
      short: "Ils sont dans la réponse, non lus",
      what: "Regarder les décomptes d'entrée et de sortie rendus avec chaque réponse, et suivre la montée de l'entrée au fil des tours.",
      why:
        "Tous les fournisseurs les renvoient et presque personne ne les lit. C'est le seul chiffre de cette page qui ne soit pas une estimation : il transforme « ça me semble cher » en une courbe qu'on peut montrer, et c'est lui qui dit lesquelles de ces habitudes ont vraiment servi.",
      not:
        "Ne comparez pas des décomptes entre fournisseurs comme s'ils étaient la même unité. Les tokeniseurs diffèrent, donc le même texte ne fait pas le même nombre de jetons selon qui compte.",
    },
    title: 'Read the token counts your provider already returns',
    short: 'They are in the response, unread',
    what: 'Look at the input and output counts reported on each response, and watch input grow across a thread.',
    why:
      'Every provider returns them and almost nobody reads them. They are the only number here that is not an ' +
      'estimate: they turn "this feels expensive" into a curve you can point at, and they are what tells you ' +
      'which of the habits on this page actually did something for you.',
    not:
      'Do not compare counts between providers as if they were the same unit. Tokenisers differ, so the same ' +
      'text is a different number of tokens depending on who is counting.',
    called: ['Usage on the response', 'A token counting endpoint', 'Per request cost in a dashboard'],
  },
]

/** CE QU'IL FAUT INSTALLER · une fois, puis jamais.
 *
 *  Un fichier, un drapeau, un préfixe de lancement. C'est le fond de
 *  l'iceberg parce que ça demande une décision et cinq minutes, pas parce que
 *  c'est compliqué · et c'est la partie qui rapporte tous les jours suivants
 *  sans qu'on y pense. */
export const DEEPER: IcebergItem[] = [
  {
    id: 'standing-file', depth: 'deeper',
    fr: {
      title: "Un fichier de consignes permanentes",
      short: "Écrit une fois, lu à chaque requête",
      what: "Garder les règles du projet dans un fichier que l'assistant lit automatiquement, au lieu de les mettre dans vos messages.",
      why:
        "Ça retire la répétition de l'historique, qui est l'endroit où la répétition devient chère : une consigne tapée dans un message est renvoyée à chaque tour suivant, alors que la même consigne dans le fichier est lue une fois par requête et ne s'empile jamais.",
      not:
        "N'en faites pas un manuel. Il est lu à chaque requête, donc chaque ligne ajoutée est facturée à chaque requête, pour toujours. Les règles qui valent toujours ; les procédures appartiennent à un endroit que l'agent charge à la demande.",
    },
    title: 'A standing instructions file',
    short: 'Written once, read on every request',
    what: 'Keep the project rules in one file the assistant reads automatically, instead of in your messages.',
    why:
      'It removes the repetition from the history, which is where repetition gets expensive: an instruction typed ' +
      'into a message is re-sent on every turn after it, while the same instruction in the file is read once per ' +
      'request and never piles up.',
    not:
      'Do not let it become a manual. It is read on every single request, so every line you add is billed on ' +
      'every request, forever. Rules that apply always; procedures belong somewhere the agent loads on demand.',
    called: ['A repository instructions file', 'Project or custom instructions', 'The system prompt in your own app'],
  },
  {
    id: 'compact-rules', depth: 'deeper',
    fr: {
      title: "Lui dire quoi garder quand il compacte",
      short: "Sinon il garde la mauvaise moitié",
      what: "Écrire, dans le fichier permanent, ce qui doit survivre à un résumé : la demande, les contraintes, les décisions.",
      why:
        "Un compactage automatique est une supposition sur ce qui comptait. Laissé à lui-même, il tend à garder le récent et à jeter ce qui engage, et c'est ainsi qu'un agent oublie la seule règle et produit du travail à refaire. Nommer ce qui survit rend cette habitude bon marché assez sûre pour l'employer souvent.",
      not:
        "N'en listez pas tant que rien ne soit jeté. Une consigne de compactage qui préserve tout est un compactage qui n'économise rien, avec des étapes en plus.",
    },
    title: 'Tell it what to keep when it compacts',
    short: 'Otherwise it keeps the wrong half',
    what: 'Write down, in the standing file, which things must survive a summary: the request, the constraints, the decisions.',
    why:
      'Automatic compaction is a guess at what mattered. Left to itself it tends to keep the recent and drop the ' +
      'binding, which is how an agent forgets the one rule and produces work you have to pay to redo. Naming what ' +
      'survives makes the cheap habit safe enough to use often.',
    not:
      'Do not list so much that nothing is dropped. A compaction instruction that preserves everything is a ' +
      'compaction that saves nothing, with extra steps.',
    called: ['A summarisation section in the instructions', 'A custom summariser in your own loop'],
  },
  {
    id: 'cache-prefix', depth: 'deeper',
    fr: {
      title: "Mettre en cache le préfixe qui ne change jamais",
      short: "Cesser de payer plein tarif pour se relire",
      what: "Marquer les consignes permanentes et toute référence fixe comme cachables.",
      why:
        "Ce préfixe est identique à chaque requête et relu à chaque fois. Là où le cache existe, un préfixe caché est facturé à une fraction du tarif d'entrée : la part de votre facture qui n'est que répétition en devient la moins chère.",
      not:
        "Le cache a une taille minimale, une durée de vie, et le préfixe doit être identique à l'octet près. En dessous de quelques centaines de jetons, ou sur un fichier modifié chaque jour, il n'achète rien et ajoute une pièce mobile qui échoue en silence.",
    },
    title: 'Cache the prefix that never changes',
    short: 'Stop paying full price to re-read yourself',
    what: 'Mark the standing instructions and any fixed reference material as cacheable.',
    why:
      'That prefix is identical on every request and is re-read every time. Where caching exists, a cached prefix ' +
      'is billed at a fraction of the input rate, so the part of your bill that is pure repetition becomes the ' +
      'cheapest part of it.',
    not:
      'Caching has a minimum size and a lifetime, and the prefix must be byte identical. Below a few hundred ' +
      'tokens, or on a file you edit daily, it buys nothing and adds a moving part that fails silently.',
    lever: 'cache',
    called: ['An explicit cache marker on the prefix', 'Automatic prefix caching', 'A cache lifetime setting'],
  },
  {
    id: 'subagent', depth: 'deeper',
    fr: {
      title: "Confier le travail bruyant à un sous-agent",
      short: "Seule la réponse revient",
      what: "Donner la recherche, la lecture et les essais à un agent séparé, et ne garder que sa conclusion.",
      why:
        "Une recherche qui ouvre douze fichiers met douze fichiers dans le contexte, et ils sont renvoyés à chaque tour jusqu'à la fin du fil. Menée dans son propre contexte, elle les paie une fois puis les jette ; ce qui revient est un paragraphe.",
      not:
        "Ne déléguez pas un travail dont vous avez besoin de voir ou de poursuivre le raisonnement. Vous recevez la conclusion, pas le fil qui l'a produite, donc une conclusion fausse est à refaire depuis le début.",
    },
    title: 'Run the noisy job in a subagent',
    short: 'Only the answer comes back',
    what: 'Give the searching, the reading and the trying to a separate agent, and keep only its conclusion.',
    why:
      'A search that opens twelve files puts twelve files in the context, and they are re-sent on every turn for ' +
      'the rest of the thread. Run in its own context, the twelve files are paid once and thrown away; what comes ' +
      'back is a paragraph.',
    not:
      'Do not delegate work whose reasoning you need to see or continue. You get the conclusion, not the thread ' +
      'that produced it, so a wrong conclusion has to be redone from the start.',
    called: ['A subagent or task tool', 'A separate conversation you orchestrate', 'A worker in your own loop'],
  },
  {
    id: 'small-subagent', depth: 'deeper',
    fr: {
      title: "Un petit modèle pour le sous-agent",
      short: "Aller chercher n'est pas réfléchir",
      what: "Épingler le travail délégué au modèle le moins cher qui puisse le faire, indépendamment du principal.",
      why:
        "Le travail délégué est en général le mécanique : trouver, lire, extraire, lister. C'est aussi celui qui brûle le plus de jetons, parce qu'il ouvre des choses. Faire tourner la moitié lourde en jetons sur le modèle bon marché et le jugement sur le modèle capable est le meilleur rapport de cette page.",
      not:
        "N'envoyez pas le jugement au petit modèle sous prétexte que c'est lui qui lit. Si le sous-agent doit décider de ce qui compte, il fait la partie difficile.",
    },
    title: 'A small model for the subagent',
    short: 'Fetching is not thinking',
    what: 'Pin the delegated job to the cheapest model that can do it, independently of the main one.',
    why:
      'The delegated job is usually the mechanical one: find, read, extract, list. It is also the one that burns ' +
      'the most tokens, because it opens things. Running the token heavy half on the cheap model and the ' +
      'judgement on the capable one is the best ratio on this page.',
    not:
      'Do not send judgement to the small model because it is the one doing the reading. If the subagent has to ' +
      'decide what matters, it is doing the hard part.',
    called: ['A model field in the subagent definition', 'A per worker model in your own config'],
  },
  {
    id: 'no-thinking-default', depth: 'deeper',
    fr: {
      title: "Par défaut aucun raisonnement, et le monter exprès",
      short: "Un défaut est une décision que vous n'avez pas prise",
      what: "Régler bas le niveau de raisonnement permanent et le monter pour les requêtes qui le méritent.",
      why:
        "Les défauts s'appliquent à chaque requête que vous enverrez, ce qui en fait le réglage au levier le plus long que vous possédiez. Le raisonnement étant facturé comme de la sortie, laisser un défaut généreux revient à payer le prix de votre question la plus dure sur toutes les plus faciles.",
      not:
        "Ne le laissez pas bas et ne l'oubliez pas. Celui-ci n'est sûr que si le monter est une habitude que vous avez vraiment, sinon vous avez simplement rendu chaque tâche difficile plus mauvaise pour économiser un peu sur les faciles.",
    },
    title: 'Default to no reasoning, and raise it on purpose',
    short: 'The default is a decision you did not make',
    what: 'Set the standing reasoning level low and turn it up for the requests that earn it.',
    why:
      'Defaults apply to every request you will ever send, which makes them the highest leverage setting you own. ' +
      'Reasoning is billed as output; leaving a generous default on is paying the price of your hardest question ' +
      'on all of your easiest ones.',
    not:
      'Do not leave it low and forget. This one is only safe if raising it is a habit you actually have, ' +
      'otherwise you have simply made every hard task worse to save a little on the easy ones.',
    called: ['An environment variable at launch', 'A default in your client config', 'A per request override'],
  },
  {
    id: 'quiet-flags', depth: 'deeper',
    fr: {
      title: "Faire taire les commandes qui répondent en pages",
      short: "La sortie d'un outil est du contexte aussi",
      what: "Demander leur forme courte aux commandes bavardes, et mettre cette forme dans les consignes permanentes.",
      why:
        "Tout ce qu'un outil affiche entre dans le contexte et est renvoyé à chaque tour suivant. Une commande d'état qui répond en deux cents lignes coûte ces lignes pour le reste de la session, et deux d'entre elles sont la réponse.",
      not:
        "Ne faites pas taire la sortie dont vous allez avoir besoin. Un échec résumé qui cache l'erreur oblige à tout relancer en entier, ce qui coûte les deux formes.",
    },
    title: 'Quiet the commands that answer in pages',
    short: 'The output of a tool is context too',
    what: 'Ask noisy commands for their short form, and put that form in the standing instructions.',
    why:
      'Whatever a tool prints goes into the context and is re-sent on every turn afterwards. A status command ' +
      'that answers in two hundred lines costs those lines for the rest of the session, and two of them are the ' +
      'answer.',
    not:
      'Do not quieten the output you are about to need. A summarised failure that hides the error means running ' +
      'it again in full, which costs both forms.',
    called: ['Short or quiet flags', 'Limiting rows and fields', 'Piping through a filter first'],
  },
  {
    id: 'launch-prefix', depth: 'deeper',
    fr: {
      title: "Mettre les options habituelles dans le lancement",
      short: "Une habitude qu'il faut se rappeler n'est pas un réglage",
      what: "Emballer les deux ou trois options que vous employez chaque jour dans un alias, un fichier de configuration ou un script de lancement.",
      why:
        "Rien sur cette page ne vaut quoi que ce soit les jours où vous l'oubliez. Déplacer une habitude dans le lancement transforme une décision à prendre chaque matin en une décision prise une fois, et c'est la seule forme d'économie qui survit à une semaine chargée.",
      not:
        "N'enterrez pas un réglage qu'il faudra changer par projet. Un défaut invisible est exactement aussi difficile à diagnostiquer qu'un défaut invisible, et vous aurez oublié qu'il est là.",
    },
    title: 'Put the flags you always pass in the launch itself',
    short: 'A habit you have to remember is not a setting',
    what: 'Wrap the two or three options you use every day into an alias, a config file or a launch script.',
    why:
      'Nothing on this page is worth anything on the days you forget it. Moving a habit into the launch turns a ' +
      'decision you have to make every morning into a decision you made once, which is the only form of saving ' +
      'that survives a busy week.',
    not:
      'Do not bury a setting you will need to change per project. An invisible default is exactly as hard to ' +
      'debug as an invisible bug, and you will have forgotten it is there.',
    called: ['A shell alias or launcher', 'A project config file', 'Environment variables'],
  },
  {
    id: 'structured-output', depth: 'deeper',
    fr: {
      title: "Demander une sortie structurée là où du code la lit",
      short: "De la prose qu'il faut redemander est payée deux fois",
      what: "Quand la réponse alimente du code plutôt qu'une personne, exiger un schéma plutôt que de la prose.",
      why:
        "La prose invite au préambule, à la reformulation et aux précautions, le tout facturé au tarif de sortie, puis elle invite à une seconde requête pour obtenir la valeur que vous vouliez. Un schéma retire l'emballage et retire la seconde requête.",
      not:
        "N'imposez pas un schéma à du travail qui est vraiment de l'écriture, ni à un raisonnement que vous voulez lire. Un modèle tenu à une forme rigide sur une question ouverte vous rend une réponse bien formée à une question qu'il n'a pas comprise.",
    },
    title: 'Ask for structured output where something reads it',
    short: 'Prose you have to re-ask about is paid twice',
    what: 'When the answer feeds code rather than a person, require a schema instead of prose.',
    why:
      'Prose invites preamble, restatement and hedging, all billed at the output rate, and then it invites a ' +
      'second request to get the value you actually wanted. A schema removes the packaging and removes the ' +
      'second request.',
    not:
      'Do not force a schema on work that is genuinely writing, or on reasoning you want to read. A model held ' +
      'to a rigid shape on an open question gives you a well formed answer to a question it did not understand.',
    called: ['A response schema or format', 'Tool use as the answer channel', 'Grammar constrained decoding'],
  },
]

/** L'ICEBERG ENTIER, dans l'ordre des profondeurs. */
export const ICEBERG: IcebergItem[] = [...SURFACE, ...REAL, ...DEEPER]

/** LE NOMBRE ANNONCÉ · ce qui est sous l'eau, c'est à dire ce qu'on apprend.
 *  Les quatre de surface ne comptent pas : ce sont les idées reçues qu'on
 *  vient corriger, pas des conseils. Dérivé, jamais écrit à la main · une
 *  page qui promet vingt-et-une façons et en montre dix-neuf est la faute la
 *  moins chère à commettre et la plus facile à éviter. */
export const WAY_COUNT = REAL.length + DEEPER.length
export const DEEPER_COUNT = DEEPER.length

export const DEPTH_LABEL: Record<Depth, {
  label: string; kicker: string; lead: string
  fr: { label: string; kicker: string; lead: string }
}> = {
  surface: {
    label: 'What people think it is',
    kicker: 'Above the waterline',
    lead:
      'Four things everyone reaches for. None of them is wrong, and that is the problem: doing them feels like ' +
      'having dealt with the subject, so nobody looks lower.',
    fr: {
      label: 'Ce que les gens croient que c\'est',
      kicker: 'Au-dessus de la ligne de flottaison',
      lead:
        "Quatre réflexes que tout le monde a. Aucun n'est faux, et c'est bien le problème : les avoir eus donne le sentiment d'avoir traité le sujet, donc personne ne regarde plus bas.",
    },
  },
  real: {
    label: 'What it actually is',
    kicker: 'Below the waterline',
    lead:
      'Available right now, nothing to install. They are down here because you have to know they exist, not ' +
      'because they are hard.',
    fr: {
      label: "Ce que c'est vraiment",
      kicker: 'Sous la ligne de flottaison',
      lead:
        "Disponibles tout de suite, rien à installer. Ils sont ici-bas parce qu'il faut savoir qu'ils existent, pas parce qu'ils sont difficiles.",
    },
  },
  deeper: {
    label: 'What you set up once',
    kicker: 'Deeper',
    lead:
      'A file, a flag, a launch line. Five minutes each, and then they work every day without you thinking about ' +
      'them, which is the only kind of saving that survives a busy week.',
    fr: {
      label: 'Ce qui s\'installe une fois',
      kicker: 'Plus profond',
      lead:
        "Un fichier, une option, une ligne de lancement. Cinq minutes chacun, puis ils travaillent tous les jours sans que vous y pensiez, ce qui est la seule forme d'économie qui survit à une semaine chargée.",
    },
  },
}

/** Le levier désigné par un item · null quand l'item n'en désigne aucun.
 *  C'est le seul chemin vers le texte d'un levier : rien ici ne le recopie. */
export const leverOf = (item: IcebergItem) =>
  item.lever ? LEVERS.find((l) => l.id === item.lever) ?? null : null

/** Combien d'items s'appuient sur un levier déjà chiffré par le calculateur. */
export const COMPUTED_COUNT = ICEBERG.filter((i) => !!i.lever).length
