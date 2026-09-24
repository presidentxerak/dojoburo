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
      short: "Le premier réflexe, qui comporte un piège",
      what: "Confier le travail à un modèle plus petit, facturé à un tarif plus bas par million de tokens.",
      why:
        "Cela réduit effectivement le tarif, parfois d'un facteur dix. En revanche, cela ne réduit pas le NOMBRE de tokens, qui dépend de vos habitudes. Un petit modèle utilisé dans une conversation mal conduite coûte davantage qu'un grand modèle dans un fil bien tenu.",
      not:
        "Ne confiez pas à un modèle moins cher une tâche qui exigera ensuite deux tentatives. Une reprise repaie toute la conversation : un modèle cinq fois moins cher mais erroné une fois sur trois ne vous fait rien économiser.",
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
      what: "Raccourcir ce que vous saisissez avant de l'envoyer.",
      why:
        "Examinez n'importe quel décompte réel : ce que vous avez saisi en constitue presque toujours la plus petite part, derrière le system prompt, les définitions d'outils et l'historique. Le diviser par deux revient à économiser une erreur d'arrondi ; c'est pourquoi ceux qui s'en tiennent là ne constatent aucun changement et en concluent que rien ne fonctionne.",
      not:
        "Ne raccourcissez pas un prompt au point de le rendre ambigu pour gagner quarante tokens. L'aller-retour de clarification coûte deux fois le prompt entier.",
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
      short: "La bonne idée, mais le mauvais déclencheur",
      what: "Repartir de zéro lorsque le fil commence à paraître long.",
      why:
        "L'intuition est juste, et il s'agit de la plus grande économie possible. Ce qui en fait une habitude de surface, c'est le « de temps en temps » : lorsqu'un fil PARAÎT long, vous l'avez déjà payé, car son coût augmentait comme le carré du nombre de tours sans que vous y prêtiez attention.",
      not:
        "Ne videz pas la conversation au milieu d'un raisonnement. Vous paieriez une seconde fois une réflexion déjà acquise, qui n'aboutirait pas nécessairement à la même conclusion.",
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
      title: "Désactiver la réflexion",
      short: "Un réglage, non une pratique",
      what: "Empêcher le modèle de raisonner avant de répondre.",
      why:
        "Les tokens de raisonnement sont facturés comme de la sortie, c'est-à-dire la part la plus coûteuse ; les désactiver réduit donc réellement le coût des requêtes qui n'en avaient pas besoin. Ce geste reste en surface, car il s'agit d'un interrupteur actionné une fois, pour un type de requête, alors que tout ce qui figure en dessous s'applique à chacune de vos requêtes.",
      not:
        "Ne la désactivez pas pour un travail réellement difficile. Une réponse erronée obtenue à bas prix est l'élément le plus coûteux de cette page, car vous la payez une seconde fois et risquez de ne pas remarquer qu'elle était fausse.",
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
      title: "Ouvrez un nouveau fil dès que le sujet change",
      short: "La plus grande économie possible",
      what: "Fermer la conversation et en ouvrir une autre, en reportant une ligne résumant ce qui a été décidé.",
      why:
        "Le modèle n'a pas de mémoire. Ce dont il semble se souvenir est votre historique, renvoyé intégralement à chaque tour : le vingtième tour d'un fil n'équivaut pas à vingt fois le premier, il entraîne avec lui les dix-neuf précédents. Changer de sujet sans changer de fil revient à payer l'ancien sujet à chaque message du nouveau.",
      not:
        "Ne repartez pas de zéro au milieu d'un raisonnement, ni sans reporter la contrainte qui avait été convenue. Un nouveau fil qui a oublié la seule règle essentielle est pire qu'un fil coûteux.",
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
      title: "Compactez le fil au lieu de le vider",
      short: "Conserver les conclusions, écarter le cheminement",
      what: "Remplacer la conversation par un résumé de ce qui a été décidé, puis continuer.",
      why:
        "Les faits acquis se compressent presque entièrement ; un raisonnement en cours, non. Compacter revient à payer un résumé une seule fois, puis à cesser de renvoyer, à chaque tour et jusqu'à la fin du fil, la discussion qui l'a produit.",
      not:
        "Ne laissez jamais un compactage supprimer la demande d'origine ni une contrainte formulée par un « jamais ». Le tour qui en aura besoin sera précisément celui qui échouera sans elle.",
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
      title: "Revenez avant l'erreur au lieu de corriger en cours de route",
      short: "Une correction ajoute un tour complet",
      what: "Ramener la conversation au point qui précède le tour erroné et reformuler la demande à partir de là.",
      why:
        "Corriger en cours de route conserve la mauvaise réponse dans l'historique et la renvoie à chaque tour suivant, accompagnée de la correction et de la nouvelle réponse. Revenir en arrière supprime la branche indésirable au lieu de la transporter jusqu'à la fin du fil.",
      not:
        "Ne remontez pas au-delà de ce que vous souhaitiez conserver. Lorsque l'outil ne le permet pas, cela revient à ouvrir un nouveau fil et à reformuler la demande, ce qui n'est rentable que si la branche était longue.",
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
      title: "Désignez l'élément au lieu de le laisser chercher",
      short: "Une recherche lit tout ce qu'elle ouvre",
      what: "Nommer le fichier, la page ou la fiche dont vous parlez, au lieu de le décrire et de laisser l'agent le chercher.",
      why:
        "Chaque fichier qu'un agent ouvre au cours d'une recherche entre dans le contexte, puis est renvoyé à chaque tour. Une recherche qui a ouvert quatre mauvais fichiers avant le bon en a placé cinq dans votre historique, et vous les payez jusqu'à la fin du fil.",
      not:
        "N'indiquez pas un chemin dont vous n'êtes pas certain. Un nom erroné coûte une lecture inutile, puis la recherche que vous vouliez éviter, et l'agent risque de chercher plus largement qu'il ne l'aurait fait.",
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
      title: "Détachez les outils que cette tâche ne peut pas utiliser",
      short: "Chaque outil transmet son schéma, appelé ou non",
      what: "Associer les outils à chaque tâche plutôt que de les laisser tous connectés en permanence.",
      why:
        "Une définition d'outil accompagne chaque requête, que l'outil soit appelé ou non : son nom, sa description et le schéma complet de ses paramètres. Une étape de rédaction qui transporte un agenda, une interface de paiement et un outil de déploiement paie pour décrire les trois, à chaque tour, sans en utiliser aucun.",
      not:
        "Ne détachez pas un outil dont la tâche pourrait avoir besoin lors d'une nouvelle tentative. Un second aller-retour coûte davantage que la définition économisée, et il allonge en outre l'attente.",
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
      title: "Choisissez le modèle par tâche, non par session",
      short: "La plupart des étapes ne sont pas l'étape difficile",
      what: "Confier le raisonnement au modèle performant et les étapes mécaniques au petit modèle.",
      why:
        "Un enchaînement comporte généralement une seule étape réellement difficile et plusieurs étapes de reformatage. L'exécuter entièrement au niveau qu'exige la plus difficile revient à payer le tarif du modèle le plus puissant pour un travail qu'un petit modèle accomplit à l'identique.",
      not:
        "Ne découpez pas si finement que vous y consacriez votre propre temps. Ne choisissez pas non plus sur le seul critère du prix : un modèle bon marché qu'il faut vérifier a simplement reporté le coût sur vous.",
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
      title: "Réglez l'effort de réflexion par tâche",
      short: "Le raisonnement est facturé comme de la sortie",
      what: "Demander davantage de raisonnement pour la requête difficile, et aucun pour la requête évidente.",
      why:
        "Les tokens de raisonnement sont des tokens de sortie, et la sortie coûte généralement trois à cinq fois le tarif d'entrée. Laisser un raisonnement approfondi actif sur chaque requête revient à payer le prix de la question la plus difficile de la journée pour toutes les questions simples.",
      not:
        "N'en faites pas un simple moyen d'économie. Pour un travail réellement difficile, réduire la réflexion produit une réponse erronée d'une manière difficile à détecter, ce qui est le résultat le plus coûteux qui soit.",
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
      title: "Formulez-le une fois en tête, non à chaque tour",
      short: "Une instruction répétée est payée à chaque fois",
      what: "Placer la règle permanente là où elle est lue une fois par requête, au lieu de la saisir dans chaque message.",
      why:
        "Répéter « réponds en français, sois bref, emploie nos termes » dans dix messages l'envoie dix fois ET en laisse dix copies dans l'historique, qui sont ensuite renvoyées à chaque tour suivant. La même phrase placée dans le system prompt est lue une fois par requête et ne s'accumule jamais.",
      not:
        "Ne déplacez pas vers le system prompt ce qui ne valait que pour une tâche. Une règle permanente écrite pour un cas unique est payée à chaque requête, indéfiniment, et elle influence discrètement un travail auquel elle n'était pas destinée.",
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
      title: "Examinez le contexte avant d'y ajouter quoi que ce soit",
      short: "On ne gère pas ce que l'on ne voit jamais",
      what: "Vérifier ce qui est actuellement chargé : le system prompt, les outils, les fichiers, l'historique.",
      why:
        "Presque tout fil coûteux l'est pour une raison que son propriétaire aurait supprimée s'il l'avait vue : un document collé une heure plus tôt, un outil que personne n'utilise, un résumé jamais appliqué. Cette habitude ne coûte rien, et c'est elle qui transforme le reste de cette page en décisions plutôt qu'en conseils.",
      not:
        "Aucune raison ne justifie de s'en priver. Le seul piège consiste à regarder une fois et à croire que le constat reste valable : le contexte grandit à chaque tour, et c'est précisément le sujet.",
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
      title: "Formulez toute la demande en un seul message",
      short: "Cinq relances équivalent à cinq fils entiers",
      what: "Énoncer d'emblée le format, la longueur et les contraintes au lieu de les corriger ensuite.",
      why:
        "C'est le conseil auquel on ne croit qu'après avoir fait le calcul. Une relance paraît modeste, car ce court message est tout ce que vous avez saisi ; pourtant, elle entraîne le fil entier avec elle : le brief, les outils, les deux côtés de chaque tour précédent. Quatre tours de retouches sur un long fil peuvent coûter davantage que le travail lui-même.",
      not:
        "N'en faites pas un rituel de rédaction de cahier des charges. Si une conversation vous est nécessaire pour découvrir ce que vous voulez, menez-la à moindre coût, dans un fil court, puis commencez la véritable conversation en connaissant la réponse.",
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
      title: "Précisez la forme de la réponse, pas seulement son contenu",
      short: "Un plafond choisi vaut mieux qu'un plafond regretté",
      what: "Indiquer la longueur, la forme et ce qu'il faut omettre, dans la requête elle-même.",
      why:
        "Un modèle sans plafond explicite occupe tout l'espace disponible, et l'essentiel de ce qu'il ajoute reformule votre propre question. La sortie étant la part la plus coûteuse de la facture, une phrase qui décrit la forme attendue est l'instruction la moins chère que vous puissiez écrire.",
      not:
        "Ne plafonnez pas une requête dont la fonction est de produire un contenu long. Un document tronqué doit être régénéré, et la seconde tentative repart de zéro.",
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
      title: "Lisez les décomptes que votre provider renvoie déjà",
      short: "Ils figurent dans la réponse, sans être lus",
      what: "Consulter les décomptes d'entrée et de sortie fournis avec chaque réponse, et suivre la hausse de l'entrée au fil des tours.",
      why:
        "Tous les providers les renvoient, et presque personne ne les lit. C'est le seul chiffre de cette page qui ne soit pas une estimation : il transforme une impression de cherté en une courbe que l'on peut montrer, et il indique lesquelles de ces habitudes ont réellement été utiles.",
      not:
        "Ne comparez pas les décomptes de différents providers comme s'ils utilisaient la même unité. Les tokeniseurs diffèrent : un même texte ne produit pas le même nombre de tokens selon l'outil qui compte.",
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
      title: "Un fichier d'instructions permanentes",
      short: "Écrit une fois, lu à chaque requête",
      what: "Conserver les règles du projet dans un fichier que l'assistant lit automatiquement, au lieu de les inclure dans vos messages.",
      why:
        "Cela supprime la répétition dans l'historique, là où elle devient coûteuse : une instruction saisie dans un message est renvoyée à chaque tour suivant, alors que la même instruction placée dans le fichier est lue une fois par requête et ne s'accumule jamais.",
      not:
        "N'en faites pas un manuel. Ce fichier est lu à chaque requête : chaque ligne ajoutée est donc facturée à chaque requête, indéfiniment. Réservez-le aux règles toujours valables ; les procédures relèvent d'un emplacement que l'agent charge à la demande.",
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
      title: "Indiquez-lui ce qu'il doit conserver lors du compactage",
      short: "Sinon, il conserve la mauvaise moitié",
      what: "Préciser, dans le fichier permanent, ce qui doit survivre à un résumé : la demande, les contraintes, les décisions.",
      why:
        "Un compactage automatique repose sur une hypothèse concernant ce qui importait. Livré à lui-même, il tend à conserver le plus récent et à écarter ce qui engage ; c'est ainsi qu'un agent oublie la seule règle essentielle et produit un travail à refaire. Nommer ce qui doit survivre rend cette habitude économique suffisamment sûre pour être employée souvent.",
      not:
        "N'en énumérez pas au point que plus rien ne soit écarté. Une instruction de compactage qui préserve tout produit un compactage qui n'économise rien, avec des étapes supplémentaires.",
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
      title: "Mettez en cache le préfixe invariable",
      short: "Cesser de payer le plein tarif pour se relire",
      what: "Marquer le system prompt et toute référence fixe comme pouvant être mis en cache.",
      why:
        "Ce préfixe est identique à chaque requête et relu à chaque fois. Lorsque le cache est disponible, un préfixe mis en cache est facturé à une fraction du tarif d'entrée : la part de votre facture qui relève de la simple répétition devient la moins coûteuse.",
      not:
        "Le cache impose une taille minimale, une durée de vie, et un préfixe identique à l'octet près. En dessous de quelques centaines de tokens, ou sur un fichier modifié chaque jour, il n'apporte rien et ajoute un élément de complexité qui échoue silencieusement.",
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
      title: "Confiez le travail volumineux à un sous-agent",
      short: "Seule la réponse revient",
      what: "Confier la recherche, la lecture et les essais à un agent distinct, et ne conserver que sa conclusion.",
      why:
        "Une recherche qui ouvre douze fichiers place douze fichiers dans le contexte, renvoyés à chaque tour jusqu'à la fin du fil. Menée dans son propre contexte, elle ne les paie qu'une fois avant de les écarter ; seul un paragraphe revient.",
      not:
        "Ne déléguez pas un travail dont vous devez examiner ou poursuivre le raisonnement. Vous recevez la conclusion, et non le cheminement qui l'a produite : une conclusion erronée doit donc être refaite depuis le début.",
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
      short: "Rechercher n'est pas réfléchir",
      what: "Attribuer au travail délégué le modèle le moins coûteux capable de l'accomplir, indépendamment du modèle principal.",
      why:
        "Le travail délégué est généralement mécanique : trouver, lire, extraire, lister. C'est aussi celui qui consomme le plus de tokens, car il ouvre des contenus. Exécuter la partie la plus gourmande en tokens sur le modèle bon marché et réserver le jugement au modèle performant offre le meilleur rapport de cette page.",
      not:
        "Ne confiez pas le jugement au petit modèle au motif qu'il effectue la lecture. Si le sous-agent doit décider de ce qui importe, c'est lui qui accomplit la partie difficile.",
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
      title: "Par défaut aucun raisonnement, puis augmentez-le délibérément",
      short: "Un défaut est une décision que vous n'avez pas prise",
      what: "Régler bas le niveau de raisonnement permanent et l'augmenter pour les requêtes qui le justifient.",
      why:
        "Les valeurs par défaut s'appliquent à chacune de vos requêtes, ce qui en fait le réglage au plus fort effet de levier dont vous disposiez. Le raisonnement étant facturé comme de la sortie, conserver un défaut généreux revient à payer le prix de votre question la plus difficile pour toutes les questions simples.",
      not:
        "Ne le laissez pas bas pour ensuite l'oublier. Ce réglage n'est sûr que si vous avez réellement l'habitude de l'augmenter ; à défaut, vous avez simplement dégradé chaque tâche difficile pour économiser un peu sur les tâches simples.",
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
      title: "Réduisez les commandes qui répondent en plusieurs pages",
      short: "La sortie d'un outil fait aussi partie du contexte",
      what: "Demander aux commandes verbeuses leur forme abrégée, et inscrire cette forme dans le system prompt.",
      why:
        "Tout ce qu'un outil affiche entre dans le contexte et est renvoyé à chaque tour suivant. Une commande d'état qui répond en deux cents lignes coûte ces lignes pour le reste de la session, alors que deux d'entre elles seulement constituent la réponse.",
      not:
        "Ne réduisez pas une sortie dont vous aurez besoin. Un échec résumé qui masque l'erreur oblige à tout relancer intégralement, ce qui coûte les deux formes.",
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
      title: "Intégrez vos options habituelles au lancement",
      short: "Une habitude qu'il faut se rappeler n'est pas un réglage",
      what: "Regrouper les deux ou trois options que vous employez chaque jour dans un alias, un fichier de configuration ou un script de lancement.",
      why:
        "Aucun conseil de cette page n'a de valeur les jours où vous l'oubliez. Intégrer une habitude au lancement transforme une décision à prendre chaque matin en une décision prise une fois pour toutes, et c'est la seule forme d'économie qui résiste à une semaine chargée.",
      not:
        "N'intégrez pas un réglage qu'il faudra modifier selon le projet. Un réglage par défaut invisible est particulièrement difficile à diagnostiquer, d'autant que vous aurez oublié son existence.",
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
      title: "Exigez un structured output lorsque du code lit la réponse",
      short: "Une prose qu'il faut redemander est payée deux fois",
      what: "Lorsque la réponse alimente du code plutôt qu'une personne, exiger un schéma plutôt que de la prose.",
      why:
        "La prose invite au préambule, à la reformulation et aux précautions, le tout facturé au tarif de sortie, puis elle appelle une seconde requête pour obtenir la valeur recherchée. Un schéma supprime cet habillage ainsi que la seconde requête.",
      not:
        "N'imposez pas de schéma à un travail qui relève véritablement de l'écriture, ni à un raisonnement que vous souhaitez lire. Un modèle contraint à une forme rigide sur une question ouverte vous rend une réponse bien formée à une question qu'il n'a pas comprise.",
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
      label: "Ce que l'on croit généralement",
      kicker: 'Au-dessus de la ligne de flottaison',
      lead:
        "Quatre réflexes largement partagés. Aucun n'est faux, et c'est précisément le problème : les avoir adoptés donne le sentiment d'avoir traité le sujet, si bien que personne ne regarde plus en profondeur.",
    },
  },
  real: {
    label: 'What it actually is',
    kicker: 'Below the waterline',
    lead:
      'Available right now, nothing to install. They are down here because you have to know they exist, not ' +
      'because they are hard.',
    fr: {
      label: "Ce qu'il en est réellement",
      kicker: 'Sous la ligne de flottaison',
      lead:
        "Disponibles immédiatement, sans installation. Ils figurent ici parce qu'il faut connaître leur existence, non parce qu'ils sont difficiles.",
    },
  },
  deeper: {
    label: 'What you set up once',
    kicker: 'Deeper',
    lead:
      'A file, a flag, a launch line. Five minutes each, and then they work every day without you thinking about ' +
      'them, which is the only kind of saving that survives a busy week.',
    fr: {
      label: "Ce qui se configure une fois",
      kicker: 'Plus profond',
      lead:
        "Un fichier, une option, une ligne de lancement. Cinq minutes chacun, puis ils agissent chaque jour sans que vous y pensiez : c'est la seule forme d'économie qui résiste à une semaine chargée.",
    },
  },
}

/** Le levier désigné par un item · null quand l'item n'en désigne aucun.
 *  C'est le seul chemin vers le texte d'un levier : rien ici ne le recopie. */
export const leverOf = (item: IcebergItem) =>
  item.lever ? LEVERS.find((l) => l.id === item.lever) ?? null : null

/** Combien d'items s'appuient sur un levier déjà chiffré par le calculateur. */
export const COMPUTED_COUNT = ICEBERG.filter((i) => !!i.lever).length
