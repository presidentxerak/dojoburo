// LES DOUZE AGENTS DU DOJO.
//
// Le dojo était une entreprise : douze coéquipiers qui font le travail. Il
// devient une SALLE DE CLASSE, et les douze personnages changent de nature
// sans changer de visage. Chacun n'est plus un employé mais un CAS D'USAGE
// d'agent, c'est à dire une forme de problème qu'on apprend à résoudre de
// bout en bout, puis qu'on exporte dans un vrai framework.
//
// Pourquoi douze formes plutôt qu'un cours général : parce qu'un agent de
// recherche et un agent de tri n'échouent pas de la même façon. Le premier
// invente des sources, le second confond deux catégories voisines. Un cours
// qui dit « écrivez un bon prompt » ne prépare à aucun des deux. Chaque cas
// d'usage porte donc sa difficulté propre, nommée, et le parcours qui la
// traite.
//
// Le personnage qui porte le cas n'est pas décoratif. On garde les mêmes
// silhouettes et les mêmes décors, et c'est le même dojo qu'avant : ce qui
// change est ce qu'ils vous apprennent. Un agent qu'on n'a pas encore choisi
// DORT, parce qu'un agent qui n'existe pas ne travaille pas, et qu'une salle
// où tout le monde s'agite déjà ne donne aucune raison de choisir.
import { COMPANY_IDS } from './roleAgents'
import type { Lang } from '../i18n/lang'

// LES TROIS COURS ne sont PAS déclarés ici. Ils vivent dans data/positioning,
// dérivés des piliers, et ce fichier n'en porte aucune copie : une seconde
// liste de cours à côté de la première est la façon la plus sûre d'annoncer
// trois cours dans l'en-tête et deux sur la page d'accueil.

/** Une étape du parcours. Elle DIT ce qu'on produit, pas ce qu'on lit : un
 *  parcours dont les étapes sont des chapitres est un sommaire déguisé. */
/** LE FRANÇAIS D'UNE ÉTAPE, dans la même entrée que l'anglais · voir
 *  data/plans pour le raisonnement général. */
export interface StepFr { title: string; makes: string; check: string }

export interface Step {
  title: string
  /** ce qu'on fabrique à cette étape, et qui n'existait pas avant */
  makes: string
  /** la question à laquelle il faut savoir répondre pour passer */
  check: string
}

export interface UseCase {
  id: string
  /** le personnage qui le porte, dans data/roleAgents */
  agent: string
  /** le nom de l'agent, tel qu'il se présente */
  name: string
  /** la forme du problème, en deux mots */
  shape: string
  /** ce qu'il fait, en une phrase, sans adjectif */
  does: string
  /** pour qui c'est utile */
  forWhom: string
  /** CE QUI EST DIFFICILE, nommément. La partie qui distingue un cours d'une
   *  liste de recettes : chaque forme d'agent a sa façon propre de rater. */
  hard: string
  /** comment ça rate quand on s'y prend mal */
  failure: string
  /** le parcours, dans l'ordre */
  steps: Step[]
  /** ce qu'on emporte à la fin */
  ships: string[]
  /** les mots qu'on taperait dans un moteur de recherche pour le trouver */
  keywords: string[]
  /** LE FRANÇAIS · `keywords` n'y est pas : ce sont des requêtes de moteur de
   *  recherche, elles appartiennent aux métadonnées anglaises de la page et
   *  les traduire ne servirait personne tant qu'il n'y a pas d'adresses
   *  françaises distinctes. Voir scripts/test-i18n. */
  fr?: {
    name: string; shape: string; does: string; forWhom: string
    hard: string; failure: string; steps: StepFr[]; ships: string[]
  }
}

export const USE_CASES: UseCase[] = [
  {
    id: 'research',
    fr: {
      name: "Le chercheur",
      shape: "Lire beaucoup, revenir avec ce qui compte",
      does: "Rassemble de la matière sur une question et rend une réponse dont chaque affirmation pointe vers une source.",
      forWhom: "Quiconque doit pouvoir répondre « ça vient d'où ? » sur une phrase de son résumé.",
      hard:
        "Tenir la réponse attachée à ce qui a vraiment été lu. Un modèle à qui l'on demande de résumer comblera volontiers un trou avec quelque chose de plausible, et le résultat se lit exactement comme les parties vraies.",
      failure:
        "Des références de pages assurées qui n'existent pas, et un résumé qui couvre une question que le document n'abordait jamais.",
      steps: [
        { title: "Dire ce qu'est une source", makes: "une règle de ce qui compte comme preuve dans votre domaine", check: "Pouvez-vous dire à un collègue, en une phrase, ce que vous n'accepterez pas comme source ?" },
        { title: "Imposer la citation", makes: "la consigne qui fait porter à chaque affirmation un fragment mot à mot", check: "Que se passe-t-il quand l'agent ne trouve aucun fragment à citer ?" },
        { title: "Demander les trous", makes: "une section obligatoire listant ce que la matière ne couvre pas", check: "Pourquoi une section « non couvert » vide est-elle un avertissement plutôt qu'un bon résultat ?" },
        { title: "L'éprouver sur un piège", makes: "un document avec un trou plausible, et l'agent qui n'invente pas", check: "A-t-il dit qu'il ne savait pas, ou a-t-il deviné ?" },
      ],
      ships: [
        "Une consigne système",
        "Une règle de contrôle applicable à toute réponse",
        "Un document pour l'éprouver",
      ],
    },
    agent: 'legi',
    name: 'The researcher',
    shape: 'Read a lot, come back with the part that matters',
    does: 'Gathers material on a question and returns an answer whose every claim points back at a source.',
    forWhom: 'Anyone who has to be able to answer "where does that come from?" about one sentence of their summary.',
    hard: 'Keeping the answer tied to what was actually read. A model asked to summarise will happily fill a gap with something plausible, and the result reads exactly like the parts that are true.',
    failure: 'Confident page references that do not exist, and a summary that covers a question the document never addressed.',
    steps: [
      { title: 'Say what a source is', makes: 'a rule for what counts as evidence in your field', check: 'Can you tell a colleague, in one sentence, what you will not accept as a source?' },
      { title: 'Force the quote', makes: 'the instruction that makes every claim carry a verbatim fragment', check: 'What happens when the agent cannot find a fragment to quote?' },
      { title: 'Ask for the holes', makes: 'a required section listing what the material does not cover', check: 'Why is an empty "not covered" section a warning rather than a good result?' },
      { title: 'Test it against a trap', makes: 'a document with a plausible gap, and the agent failing to invent', check: 'Did it say it did not know, or did it guess?' },
    ],
    ships: ['A system prompt', 'A checking rule you can run on any answer', 'A document to test against'],
    keywords: ['research agent', 'summarise with sources', 'citations', 'hallucination'],
  },
  {
    id: 'writing',
    fr: {
      name: "Le rédacteur",
      shape: "Écrire dans une voix qui n'est pas celle du modèle",
      does: "Produit un texte qui vous ressemble plutôt qu'à un assistant, à partir d'un brief écrit une seule fois.",
      forWhom: "Quiconque corrige les trois mêmes choses sur chaque brouillon et s'apprête à tout réécrire soi-même.",
      hard:
        "La voix est invisible pour un modèle quand on la décrit. Les adjectifs coûtent des jetons et ne changent rien, donc la plupart des briefs de style sont de la décoration.",
      failure:
        "Un texte fluide et bien structuré qui pourrait venir de n'importe qui, avec vos trois tics détestés revenus dedans.",
      steps: [
        { title: "Réunir trois mauvais brouillons", makes: "la matière première de chaque règle que vous écrirez", check: "Qu'y avait-il exactement de faux dans chacun, en mots qu'un inconnu comprendrait ?" },
        { title: "Transformer le goût en interdits", makes: "une liste de choses à ne jamais faire, chacune traçable jusqu'à un brouillon", check: "Quelqu'un d'autre pourrait-il vérifier qu'une règle a été enfreinte, sans vous demander ?" },
        { title: "Ajouter un exemple travaillé", makes: "une paire avant et après qui porte la voix", check: "L'exemple apprend-il quelque chose que les interdits ne disent pas déjà ?" },
        { title: "Le réduire à vingt règles", makes: "un brief assez court pour être suivi", check: "Quelle règle avez-vous supprimée, et que faudrait-il pour que vous la remettiez ?" },
      ],
      ships: [
        "Un brief de style maison",
        "Une paire avant et après",
        "Une règle pour ajouter des règles",
      ],
    },
    agent: 'brandi',
    name: 'The writer',
    shape: 'Draft in a voice that is not the model default',
    does: 'Produces text that sounds like you rather than like an assistant, from a brief you only write once.',
    forWhom: 'Anyone correcting the same three things on every draft and about to give up and write it themselves.',
    hard: 'Voice is invisible to a model when you describe it. Adjectives cost tokens and change nothing, so most style briefs are decoration.',
    failure: 'Fluent, well structured text that could have come from anyone, with your three pet hates back in it.',
    steps: [
      { title: 'Collect three bad drafts', makes: 'the raw material for every rule you will write', check: 'What exactly was wrong with each one, in words a stranger would understand?' },
      { title: 'Turn taste into bans', makes: 'a list of things it must never do, each traceable to a draft', check: 'Could someone else check whether a rule was broken, without asking you?' },
      { title: 'Add one worked example', makes: 'a before and after pair that carries the voice', check: 'Does the example teach something the bans do not already say?' },
      { title: 'Cut it to twenty rules', makes: 'a brief short enough to be obeyed', check: 'Which rule did you delete, and what would have to happen for you to add it back?' },
    ],
    ships: ['A house style brief', 'A before and after pair', 'A rule for adding rules'],
    keywords: ['writing agent', 'tone of voice', 'style guide', 'brand voice'],
  },
  {
    id: 'support',
    fr: {
      name: "Le répondant",
      shape: "Répondre aux gens sans promettre ce qu'on ne peut pas",
      does: "Répond aux clients dans votre voix, dans des limites que vous posez, et passe la main quand il le doit.",
      forWhom: "Quiconque a un agent de support poli, rapide, et qui a deux fois promis un correctif que personne n'avait prévu.",
      hard:
        "Un modèle préfère être utile qu'exact. Laissé seul, il invente une date, parce qu'une date est ce que le lecteur voulait.",
      failure:
        "Une réponse chaleureuse et bien écrite qui vous engage sur ce que vous ne pouvez pas livrer, envoyée avant que personne ne l'ait lue.",
      steps: [
        { title: "Écrire les interdits durs", makes: "les trois choses qu'il ne peut jamais énoncer : une date, un prix, un remboursement", check: "Que dit-il à la place, mot pour mot ?" },
        { title: "Faire de « je ne sais pas » une vraie réponse", makes: "une réponse approuvée pour le cas où il ne doit pas deviner", check: "Seriez-vous content de recevoir cette réponse vous-même ?" },
        { title: "Lister les déclencheurs de transfert", makes: "un jeu de conditions, pas une appréciation", check: "Pourquoi une liste de déclencheurs est-elle plus sûre que de lui demander de juger ?" },
        { title: "Lui donner la vraie politique", makes: "une section de connaissance qu'il cite au lieu de la résumer", check: "Qu'est-ce qui se casse quand une politique est résumée ?" },
      ],
      ships: [
        "Un brief de support",
        "Une liste de déclencheurs de transfert",
        "Un refus qui se lit bien",
      ],
    },
    agent: 'helpi',
    name: 'The responder',
    shape: 'Answer people without promising what you cannot do',
    does: 'Replies to customers in your voice, inside bounds you set, and hands over when it should.',
    forWhom: 'Anyone whose support agent is polite, fast, and has twice promised a fix nobody had planned.',
    hard: 'A model would rather be helpful than accurate. Left alone it invents a date, because a date is what the reader wanted.',
    failure: 'A warm, well written reply that commits you to something you cannot deliver, sent before anyone read it.',
    steps: [
      { title: 'Write the hard bans', makes: 'the three things it may never state: a date, a price, a refund', check: 'What does it say instead, word for word?' },
      { title: 'Make "I do not know" a real answer', makes: 'an approved reply for the case where it must not guess', check: 'Would you be happy receiving that reply yourself?' },
      { title: 'List the escalation triggers', makes: 'a set of conditions, not a judgement call', check: 'Why is a trigger list safer than asking it to use judgement?' },
      { title: 'Feed it the real policy', makes: 'a knowledge section it quotes rather than summarises', check: 'What goes wrong when a policy is summarised?' },
    ],
    ships: ['A support brief', 'An escalation trigger list', 'A refusal that reads well'],
    keywords: ['support agent', 'customer service', 'escalation', 'guardrails'],
  },
  {
    id: 'coding',
    fr: {
      name: "L'ingénieur",
      shape: "Toucher à du code sans le casser",
      does: "Lit du code, propose des changements, et signale des défauts qu'il peut démontrer plutôt que des préférences qu'il a.",
      forWhom: "Quiconque a un outil de revue qui commente quarante fois par changement et que plus personne ne lit.",
      hard:
        "Distinguer un défaut d'une préférence. Les deux arrivent de la même voix assurée, et c'est la seconde qui rend la première illisible.",
      failure:
        "Un relecteur minutieux que personne ne lit, ce qui est pire que pas de relecteur du tout.",
      steps: [
        { title: "Définir ce qu'est un constat", makes: "les trois lignes qu'un constat doit porter pour exister : entrées, comportement, attente", check: "Que fait-il quand il ne peut pas écrire ces trois lignes ?" },
        { title: "Interdire le goût", makes: "une liste explicite de ce qu'il n'a pas le droit de signaler", check: "Où va-t-il chercher vos conventions, et s'il n'y en a aucune ?" },
        { title: "Plafonner et classer", makes: "un plafond de constats, les pires d'abord", check: "Pourquoi une liste non classée de quarante équivaut-elle à aucune liste ?" },
        { title: "Le lancer sur un vrai changement", makes: "la preuve qu'il a trouvé quelque chose de vrai et s'est tu sinon", check: "A-t-il rempli le quota, ou s'est-il arrêté ?" },
      ],
      ships: [
        "Un brief de relecteur",
        "Une définition du constat",
        "Une règle de classement",
      ],
    },
    agent: 'devi',
    name: 'The engineer',
    shape: 'Touch a codebase without breaking it',
    does: 'Reads code, proposes changes, and reports defects it can demonstrate rather than preferences it holds.',
    forWhom: 'Anyone whose review tool comments forty times per change and is now ignored entirely.',
    hard: 'Telling a defect from a preference. Both arrive in the same confident voice, and the second kind is what makes the first unreadable.',
    failure: 'A thorough reviewer nobody reads, which is worse than no reviewer at all.',
    steps: [
      { title: 'Define a finding', makes: 'the three lines a finding must carry to exist: inputs, behaviour, expectation', check: 'What does it do when it cannot write those three lines?' },
      { title: 'Ban taste', makes: 'an explicit list of what it may not report', check: 'Where does it look up your conventions, and what if there are none?' },
      { title: 'Cap and rank', makes: 'a ceiling on findings, worst first', check: 'Why is an unranked list of forty the same as no list?' },
      { title: 'Run it on a real change', makes: 'evidence that it found something true and stayed quiet otherwise', check: 'Did it fill the quota, or did it stop?' },
    ],
    ships: ['A reviewer brief', 'A definition of a finding', 'A ranking rule'],
    keywords: ['code review agent', 'static analysis', 'pull request', 'defects'],
  },
  {
    id: 'analysis',
    fr: {
      name: "L'analyste",
      shape: "Transformer des chiffres en recommandation",
      does: "Vérifie des chiffres, puis dit ce qu'il ferait et ce qui rendrait cela faux.",
      forWhom: "Quiconque s'apprête à envoyer une prévision à un conseil avec une ligne dont la somme oublie une cellule.",
      hard:
        "Séparer l'arithmétique du jugement. À qui on demande de vérifier des chiffres, un modèle se met à discuter vos hypothèses, ce qui est une autre réunion.",
      failure:
        "Une revue qui dit que le modèle semble raisonnable, et un total qui n'égale pas la somme de ses parties.",
      steps: [
        { title: "Nommer les quatre erreurs", makes: "une liste de contrôle de ce qui survit à une relecture humaine", check: "Lesquelles des quatre avez-vous personnellement laissé passer ?" },
        { title: "Séparer arithmétique et opinion", makes: "deux sections de sortie qui ne se mélangent jamais", check: "Qu'est-ce qui n'appartient ni à l'une ni à l'autre ?" },
        { title: "Exiger la liste du non vérifié", makes: "une section pour ce qu'il a dû prendre pour argent comptant", check: "Pourquoi le silence ici donne-t-il une fausse assurance ?" },
        { title: "Forcer une recommandation", makes: "une consigne qui interdit de rester entre deux chaises", check: "Que recommande-t-il quand les preuves sont réellement équilibrées ?" },
      ],
      ships: [
        "Un prompt d'audit",
        "Une liste de contrôle en quatre points",
        "Un format de note de décision",
      ],
    },
    agent: 'busino',
    name: 'The analyst',
    shape: 'Turn numbers into a recommendation',
    does: 'Checks figures, then says what it would do and what would make that wrong.',
    forWhom: 'Anyone about to send a forecast to a board with a row summed one cell short.',
    hard: 'Separating arithmetic from judgement. Asked to check numbers, a model starts arguing with your assumptions, which is a different meeting.',
    failure: 'A review that says the model looks reasonable, and a total that does not equal its parts.',
    steps: [
      { title: 'Name the four errors', makes: 'a checklist of what survives human review', check: 'Which of the four have you personally shipped?' },
      { title: 'Split arithmetic from opinion', makes: 'two output sections that never mix', check: 'What belongs in neither?' },
      { title: 'Require the unchecked list', makes: 'a section for what it had to take on trust', check: 'Why does silence here give false comfort?' },
      { title: 'Force a recommendation', makes: 'an instruction that forbids sitting on the fence', check: 'What does it recommend when the evidence is genuinely balanced?' },
    ],
    ships: ['An audit prompt', 'A four point checklist', 'A decision memo format'],
    keywords: ['analysis agent', 'spreadsheet audit', 'forecast', 'decision memo'],
  },
  {
    id: 'triage',
    fr: {
      name: "Le trieur",
      shape: "Mettre la bonne chose au bon endroit",
      does: "Lit ce qui arrive et décide de quelle catégorie, file ou personne cela relève.",
      forWhom: "Quiconque a une boîte de réception, une file de tickets ou une liste de prospects que deux personnes trient différemment.",
      hard:
        "Ce sont les catégories, pas le modèle. Deux catégories voisines qu'un humain confond seront confondues par un agent aussi, et aucun prompt ne répare une nomenclature qui ne découpe pas net.",
      failure:
        "Quatre-vingt-dix pour cent de justesse qui cachent une catégorie fausse à chaque fois, et c'était celle qui comptait.",
      steps: [
        { title: "Écrire les catégories comme des tests", makes: "une définition par catégorie qu'on pourrait appliquer à l'aveugle", check: "Prenez-en deux voisines : quelle question unique les sépare ?" },
        { title: "Ajouter le « aucune de celles-ci »", makes: "une issue de secours pour qu'il cesse de forcer un rangement", check: "Que devient ce qui atterrit là, en aval ?" },
        { title: "Construire vingt exemples étiquetés", makes: "la seule façon honnête de savoir si ça marche", check: "Sur lesquels vous êtes-vous contredit vous-même ?" },
        { title: "Mesurer catégorie par catégorie", makes: "un score qui ne peut pas cacher une classe ratée dans une moyenne", check: "Quelle catégorie est la pire, et est-ce que ça compte ?" },
      ],
      ships: [
        "Un prompt de classement",
        "Un jeu de test étiqueté",
        "Un tableau de score par classe",
      ],
    },
    agent: 'nexa',
    name: 'The sorter',
    shape: 'Put the right thing in the right place',
    does: 'Reads something arriving and decides which category, queue or person it belongs to.',
    forWhom: 'Anyone with an inbox, a ticket queue or a lead list that two people sort differently.',
    hard: 'The categories, not the model. Two neighbouring categories that a human confuses will be confused by an agent too, and no prompt fixes a taxonomy that does not cut cleanly.',
    failure: 'Ninety percent accuracy that hides one category being wrong every time, which is the one that mattered.',
    steps: [
      { title: 'Write the categories as tests', makes: 'a definition per category that someone could apply blind', check: 'Take two neighbouring ones: what single question separates them?' },
      { title: 'Add the none of these', makes: 'an escape hatch so it stops forcing a fit', check: 'What happens downstream when something lands there?' },
      { title: 'Build twenty labelled examples', makes: 'the only honest way to know whether it works', check: 'Which ones did you disagree with yourself on?' },
      { title: 'Measure per category', makes: 'a score that cannot hide a failing class inside an average', check: 'Which category is worst, and does that matter?' },
    ],
    ships: ['A classification prompt', 'A labelled test set', 'A per class score sheet'],
    keywords: ['triage agent', 'classification', 'routing', 'taxonomy'],
  },
  {
    id: 'extraction',
    fr: {
      name: "L'extracteur",
      shape: "Tirer de la structure d'un fouillis",
      does: "Transforme des factures, des contrats, des courriels ou des formulaires en champs qu'on peut mettre en base.",
      forWhom: "Quiconque retape les mêmes champs depuis des documents presque, mais jamais tout à fait, identiques.",
      hard:
        "L'absence. Un champ manquant et un champ vide ne veulent pas dire la même chose, et un modèle rendra allègrement une valeur plausible pour les deux.",
      failure:
        "Un tableau propre dont une colonne est discrètement inventée, découverte trois mois plus tard lors d'un audit.",
      steps: [
        { title: "Écrire le schéma d'abord", makes: "une liste de champs avec leurs types, et ce que chacun veut dire", check: "Pour chaque champ : à quoi ressemble l'absence, et est-elle permise ?" },
        { title: "Interdire la supposition", makes: "la consigne qui rend un vide plutôt qu'une valeur plausible", check: "Comment remarqueriez-vous qu'il a deviné quand même ?" },
        { title: "Demander l'emplacement", makes: "chaque valeur accompagnée de l'endroit du document d'où elle vient", check: "Que faites-vous d'une valeur dont l'emplacement est faux ?" },
        { title: "Essayer les documents laids", makes: "un jeu de test de ceux qui cassent tout", check: "Quel document avez-vous dû exclure, et pourquoi ?" },
      ],
      ships: [
        "Un schéma",
        "Un prompt d'extraction",
        "Un jeu de documents qui cassent tout",
      ],
    },
    agent: 'vaultor',
    name: 'The extractor',
    shape: 'Get structure out of a mess',
    does: 'Turns invoices, contracts, emails or forms into fields you can put in a database.',
    forWhom: 'Anyone retyping the same fields out of documents that are almost, but never quite, the same.',
    hard: 'Absence. A field that is missing and a field that is empty mean different things, and a model will cheerfully return a plausible value for both.',
    failure: 'A clean table where one column is quietly invented, discovered three months later in an audit.',
    steps: [
      { title: 'Write the schema first', makes: 'a field list with types, and what each one means', check: 'For each field: what does missing look like, and is that allowed?' },
      { title: 'Forbid the guess', makes: 'the instruction that returns null instead of something plausible', check: 'How would you notice if it guessed anyway?' },
      { title: 'Ask for the span', makes: 'each value paired with where in the document it came from', check: 'What do you do with a value whose span is wrong?' },
      { title: 'Try the ugly documents', makes: 'a test set of the ones that break everything', check: 'Which document did you have to exclude, and why?' },
    ],
    ships: ['A schema', 'An extraction prompt', 'A set of documents that break things'],
    keywords: ['extraction agent', 'structured output', 'json schema', 'documents'],
  },
  {
    id: 'watch',
    fr: {
      name: "La sentinelle",
      shape: "Remarquer que quelque chose a changé",
      does: "Regarde une source à un rythme et signale ce qui diffère, pas ce qu'elle en pense.",
      forWhom: "Quiconque doit savoir quand un concurrent, un prix, une page ou un service a bougé.",
      hard:
        "Ne rien dire. Une sentinelle qui parle à chaque passage vous apprend à l'ignorer en quinze jours.",
      failure:
        "Un rapport hebdomadaire magnifiquement écrit qui se lirait à l'identique si rien ne s'était passé.",
      steps: [
        { title: "Définir ce que « changé » veut dire", makes: "une règle qui sépare un vrai changement du bruit", check: "Un paragraphe reformulé est-il un changement ?" },
        { title: "Interdire les adjectifs", makes: "une liste de mots qu'elle ne peut jamais employer pour remplir une semaine calme", check: "Qu'envoie-t-elle quand il ne s'est rien passé ?" },
        { title: "Garder l'état précédent", makes: "la comparaison qui rend un rapport digne d'être écrit", check: "Où vit l'état précédent, et qui en est responsable ?" },
        { title: "Régler le rythme sur la décision", makes: "une cadence calée sur ce que vous en ferez", check: "Quelle décision cela alimente-t-il, et à quelle fréquence est-elle vraiment prise ?" },
      ],
      ships: [
        "Un brief de sentinelle",
        "Une définition du changement",
        "Un gabarit de semaine calme",
      ],
    },
    agent: 'sentinel',
    name: 'The watcher',
    shape: 'Notice that something changed',
    does: 'Looks at a source on a rhythm and reports what is different, not how it feels about it.',
    forWhom: 'Anyone who needs to know when a competitor, a price, a page or a service moved.',
    hard: 'Saying nothing. A watcher that reports every time it runs trains you to ignore it within a fortnight.',
    failure: 'A beautifully written weekly report that would read identically if nothing had happened at all.',
    steps: [
      { title: 'Define what changed means', makes: 'a rule that separates a real change from noise', check: 'Is a reworded paragraph a change?' },
      { title: 'Ban the adjectives', makes: 'a list of words it may never use to fill a quiet week', check: 'What does it send when nothing happened?' },
      { title: 'Keep the previous state', makes: 'the comparison that makes a report worth writing', check: 'Where does the previous state live, and who owns it?' },
      { title: 'Set the rhythm from the decision', makes: 'a cadence matched to what you will do about it', check: 'What decision does this feed, and how often is it really made?' },
    ],
    ships: ['A watcher brief', 'A change definition', 'A quiet week template'],
    keywords: ['monitoring agent', 'change detection', 'competitive watch', 'alerts'],
  },
  {
    id: 'planning',
    fr: {
      name: "Le planificateur",
      shape: "Découper un souhait en étapes faisables",
      does: "Prend un objectif et produit un plan ordonné où chaque étape a un responsable et un résultat observable.",
      forWhom: "Quiconque a écrit un objectif en une ligne et vu cinq personnes l'interpréter de cinq façons.",
      hard:
        "S'arrêter. Un planificateur à qui l'on donne un objectif flou produira un beau plan pour la mauvaise chose plutôt que de demander.",
      failure:
        "Un plan bien rangé qui a discrètement tranché chaque ambiguïté en devinant, si bien que personne n'a vu qu'elles existaient.",
      steps: [
        { title: "Écrire l'objectif comme un objet", makes: "une ligne d'arrivée que vous pourriez photographier", check: "Comment saurez-vous que c'est fini sans demander à personne ?" },
        { title: "Remonter depuis la fin", makes: "un plan bâti depuis l'arrivée, pas depuis le départ", check: "Quelle étape n'existe que parce qu'elle semblait être une bonne idée ?" },
        { title: "Forcer les questions ouvertes", makes: "une section qui ne doit pas rester vide", check: "Qu'a-t-il voulu supposer, et qu'avez-vous décidé à la place ?" },
        { title: "Donner à chaque étape un résultat observable", makes: "des critères d'acceptation dont on peut débattre avant le travail", check: "Deux personnes pourraient-elles vérifier la même étape et ne pas être d'accord ?" },
      ],
      ships: [
        "Un prompt de planification",
        "Un objectif écrit comme un objet",
        "Une section de questions ouvertes",
      ],
    },
    agent: 'chief',
    name: 'The planner',
    shape: 'Break a wish into steps someone can do',
    does: 'Takes a goal and produces an ordered plan where every step has an owner and an observable result.',
    forWhom: 'Anyone who has written a goal in one line and watched five people interpret it five ways.',
    hard: 'Stopping. A planner given a vague goal will produce a beautiful plan for the wrong thing rather than ask.',
    failure: 'A tidy plan that quietly resolved every ambiguity by guessing, so nobody noticed they existed.',
    steps: [
      { title: 'Write the goal as an artefact', makes: 'a finish line you could photograph', check: 'How will you know it is done without asking anyone?' },
      { title: 'Work backwards', makes: 'a plan built from the end, not from the start', check: 'Which step exists only because it seemed like a good idea?' },
      { title: 'Force the open questions', makes: 'a section that must not be empty', check: 'What did it want to assume, and what did you decide instead?' },
      { title: 'Give each step an observable result', makes: 'acceptance criteria you can disagree about before the work', check: 'Could two people check the same step and disagree?' },
    ],
    ships: ['A planning prompt', 'A goal written as an artefact', 'An open questions section'],
    keywords: ['planning agent', 'decomposition', 'spec', 'acceptance criteria'],
  },
  {
    id: 'tools',
    fr: {
      name: "L'opérateur",
      shape: "Agir dans un vrai système, à dessein",
      does: "Appelle des outils et des interfaces, avec une limite de ce qu'il peut faire et une étape où un humain dit oui.",
      forWhom: "Quiconque s'apprête à donner à un agent un accès en écriture à quelque chose qui coûte de l'argent ou ne s'annule pas.",
      hard:
        "Le rayon d'action. Le prompt est la partie facile ; décider ce qu'il ne doit jamais toucher, et prouver qu'il ne le peut pas, c'est le travail.",
      failure:
        "Il a fait exactement ce que vous demandiez, sur la mauvaise fiche, et il n'y a pas de retour en arrière.",
      steps: [
        { title: "Tracer le rayon d'action", makes: "une liste écrite de ce qu'il peut lire, écrire, et ne jamais toucher", check: "Quelle est la pire action unique qu'il pourrait faire aujourd'hui ?" },
        { title: "Séparer la lecture de l'écriture", makes: "deux configurations, dont une qui ne peut rien changer", check: "Quelle part du travail se fait en lecture seule ?" },
        { title: "Mettre l'humain dans la boucle", makes: "une étape d'approbation avec assez de contexte pour décider en cinq secondes", check: "Que voit celui qui approuve, et est-ce suffisant ?" },
        { title: "Donner à chaque action un retour en arrière", makes: "un chemin de réversion, ou un refus de faire l'irréversible", check: "Quelles actions n'ont pas de retour en arrière, et sont-elles quand même permises ?" },
      ],
      ships: [
        "Un manifeste d'outils",
        "Une configuration en lecture seule",
        "Un prompt d'approbation",
      ],
    },
    agent: 'weblos',
    name: 'The operator',
    shape: 'Act in a real system, on purpose',
    does: 'Calls tools and APIs, with a bound on what it may do and a step where a human says yes.',
    forWhom: 'Anyone about to give an agent write access to something that costs money or cannot be undone.',
    hard: 'The blast radius. The prompt is the easy part; deciding what it may never touch, and proving it cannot, is the work.',
    failure: 'It did exactly what you asked, to the wrong record, and there is no undo.',
    steps: [
      { title: 'Draw the blast radius', makes: 'a written list of what it may read, write and never touch', check: 'What is the worst single action it could take today?' },
      { title: 'Split read from write', makes: 'two configurations, one of which cannot change anything', check: 'How much of the job can be done read only?' },
      { title: 'Put the human in the loop', makes: 'an approval step with enough context to decide in five seconds', check: 'What does the approver see, and is it enough?' },
      { title: 'Give every action an undo', makes: 'a reversal path, or a refusal to do the irreversible', check: 'Which actions have no undo, and are they still allowed?' },
    ],
    ships: ['A tool manifest', 'A read only configuration', 'An approval prompt'],
    keywords: ['tool use', 'function calling', 'permissions', 'human in the loop'],
  },
  {
    id: 'growth',
    fr: {
      name: "L'expérimentateur",
      shape: "Produire des variantes et dire laquelle a marché",
      does: "Produit des alternatives contre un brief, puis lit les résultats et dit quoi garder.",
      forWhom: "Quiconque génère vingt versions de quelque chose et choisit au feeling.",
      hard:
        "Une variété qui veut dire quelque chose. À qui l'on demande des variantes, un modèle change les mots et garde l'idée, donc vous testez la même chose vingt fois.",
      failure:
        "Vingt options, une seule idée, et un test qui ne peut rien vous apprendre parce que rien ne différait vraiment.",
      steps: [
        { title: "Nommer l'axe de différence", makes: "un énoncé de ce qui doit varier entre les variantes", check: "Deux variantes pourraient-elles différer sur votre axe et se lire à l'identique ?" },
        { title: "Demander l'hypothèse", makes: "chaque variante accompagnée de ce qu'elle teste", check: "Quelle variante n'a aucune hypothèse, et pourquoi est-elle là ?" },
        { title: "Décider la règle d'arrêt d'abord", makes: "le chiffre qui met fin au test, écrit avant de commencer", check: "Quel résultat vous ferait garder la version actuelle ?" },
        { title: "Lire le résultat honnêtement", makes: "un prompt qui rend ce qui s'est passé, pas ce que vous espériez", check: "Que dit-il quand l'écart est du bruit ?" },
      ],
      ships: [
        "Un prompt de variantes",
        "Une hypothèse par variante",
        "Une règle d'arrêt",
      ],
    },
    agent: 'marketus',
    name: 'The campaigner',
    shape: 'Make many variants and tell which one worked',
    does: 'Produces alternatives against a brief, then reads the results and says what to keep.',
    forWhom: 'Anyone generating twenty versions of something and choosing on gut feel.',
    hard: 'Variety that means something. Asked for variants, a model changes the words and keeps the idea, so you test the same thing twenty times.',
    failure: 'Twenty options, one idea, and a test that cannot tell you anything because nothing was actually different.',
    steps: [
      { title: 'Name the axis of difference', makes: 'a statement of what must vary between variants', check: 'Could two variants differ on your axis and read identically?' },
      { title: 'Ask for the hypothesis', makes: 'each variant paired with what it is testing', check: 'Which variant has no hypothesis, and why is it there?' },
      { title: 'Decide the stopping rule first', makes: 'the number that ends the test, written before it starts', check: 'What result would make you keep the current version?' },
      { title: 'Read the result honestly', makes: 'a prompt that reports what happened, not what you hoped', check: 'What does it say when the difference is noise?' },
    ],
    ships: ['A variant prompt', 'A hypothesis per variant', 'A stopping rule'],
    keywords: ['content agent', 'variants', 'a/b test', 'campaign'],
  },
  {
    id: 'orchestration',
    fr: {
      name: "Le chef d'orchestre",
      shape: "Faire travailler plusieurs agents sans qu'ils se marchent dessus",
      does: "Fait tourner une chaîne d'agents, passe les résultats de l'un à l'autre, et trouve celui qui a cassé.",
      forWhom: "Quiconque a un système à deux agents qui marche jusqu'à ce qu'il ne marche plus, sans moyen de dire quelle moitié a lâché.",
      hard:
        "Trouver l'étape cassée. Quand la sortie est fausse à la fin, chaque étape en amont est suspecte, et une chaîne sans trace est une boîte noire avec un surcoût.",
      failure:
        "Un système qui produit quelque chose de faux et ne vous donne aucun moyen de savoir où ça a dérapé.",
      steps: [
        { title: "Écrire le contrat entre les étapes", makes: "une forme définie pour ce que chaque étape passe à la suivante", check: "Que fait une étape quand elle reçoit quelque chose de mal formé ?" },
        { title: "Rendre chaque étape vérifiable seule", makes: "un moyen de faire tourner n'importe quelle étape sur une entrée fixe", check: "Pouvez-vous reproduire l'étape trois sans lancer la une et la deux ?" },
        { title: "Garder la trace", makes: "un relevé de ce qui est entré et sorti de chaque étape", check: "Combien de temps la gardez-vous, et que contient-elle qu'elle ne devrait pas ?" },
        { title: "Décider ce qui se passe en cas d'échec", makes: "une règle par étape : reprendre, sauter, arrêter, demander", check: "Quelle étape ne doit jamais être reprise, et pourquoi ?" },
      ],
      ships: [
        "Un contrat d'étape",
        "Un format de trace",
        "Une politique d'échec",
      ],
    },
    agent: 'pumpi',
    name: 'The conductor',
    shape: 'Make several agents work without stepping on each other',
    does: 'Runs a chain of agents, hands results along, and finds the one that broke.',
    forWhom: 'Anyone whose two agent system works until it does not, with no way to tell which half failed.',
    hard: 'Finding the broken step. When output is wrong at the end, every step upstream is a suspect, and a chain with no trace is a black box with extra cost.',
    failure: 'A system that produces something wrong and gives you no way to find out where it went wrong.',
    steps: [
      { title: 'Write the contract between steps', makes: 'a defined shape for what each step hands the next', check: 'What does a step do when it receives something malformed?' },
      { title: 'Make each step checkable alone', makes: 'a way to run any step on fixed input', check: 'Can you reproduce step three without running one and two?' },
      { title: 'Keep the trace', makes: 'a record of what went in and out of every step', check: 'How long do you keep it, and what does it contain that it should not?' },
      { title: 'Decide what happens on failure', makes: 'a rule per step: retry, skip, stop, ask', check: 'Which step must never be retried, and why?' },
    ],
    ships: ['A step contract', 'A trace format', 'A failure policy'],
    keywords: ['multi agent', 'orchestration', 'pipeline', 'debugging'],
  },
]

export const USE_CASE_BY_ID = Object.fromEntries(USE_CASES.map((u) => [u.id, u])) as Record<string, UseCase>
export const USE_CASE_COUNT = USE_CASES.length

/** Le cas d'usage porté par un personnage, s'il en porte un. */
export const USE_CASE_BY_AGENT = Object.fromEntries(USE_CASES.map((u) => [u.agent, u])) as Record<string, UseCase>

/** Les personnages de l'équipage qui ne portent pas encore de cas d'usage.
 *  Lu par la garde : douze personnages, douze cas, et aucun orphelin. */
export const AGENTS_WITHOUT_USE_CASE = COMPANY_IDS.filter((id: string) => !USE_CASE_BY_AGENT[id])

/** UN CAS D'USAGE DANS LA LANGUE LUE · le seul chemin.
 *
 *  Trois surfaces affichent ces textes : la salle en trois dimensions, la
 *  liste dépliable, et la fiche plein écran. Si chacune testait la langue de
 *  son côté, il suffirait qu'une seule oublie pour qu'un agent porte un nom
 *  français dans la salle et anglais sur sa page · c'est exactement le défaut
 *  des visages, qui a coûté un lot entier.
 *
 *  L'anglais sert de secours plutôt qu'un vide : un agent sans nom est pire
 *  qu'un agent au nom anglais. */
export const useCaseIn = (u: UseCase, lang: Lang): UseCase =>
  (lang === 'fr' && u.fr ? { ...u, ...u.fr } : u)
