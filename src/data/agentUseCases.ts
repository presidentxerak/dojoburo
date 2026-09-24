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
      shape: "Lire beaucoup, retenir l'essentiel",
      does: "Rassemble de la documentation sur une question et produit une réponse dont chaque affirmation renvoie à une source.",
      forWhom: "Toute personne qui doit pouvoir indiquer l'origine de chaque phrase de son résumé.",
      hard:
        "Maintenir la réponse rattachée à ce qui a réellement été lu. Un modèle chargé de résumer comble volontiers une lacune par un contenu plausible, et le résultat se lit exactement comme les passages exacts.",
      failure:
        "Des références de pages présentées avec assurance mais inexistantes, et un résumé qui traite une question que le document n'abordait jamais.",
      steps: [
        { title: "Définir ce qu'est une source", makes: "une règle précisant ce qui constitue une preuve dans votre domaine", check: "Pouvez-vous expliquer à un collègue, en une phrase, ce que vous n'accepterez pas comme source ?" },
        { title: "Imposer la citation", makes: "l'instruction qui associe à chaque affirmation un extrait cité mot pour mot", check: "Que se passe-t-il lorsque l'agent ne trouve aucun extrait à citer ?" },
        { title: "Exiger la liste des lacunes", makes: "une section obligatoire recensant ce que la documentation ne couvre pas", check: "Pourquoi une section « non couvert » vide constitue-t-elle un avertissement plutôt qu'un bon résultat ?" },
        { title: "L'éprouver sur un piège", makes: "un document comportant une lacune plausible, et un agent qui n'invente rien", check: "L'agent a-t-il reconnu son ignorance, ou a-t-il deviné ?" },
      ],
      ships: [
        "Un system prompt",
        "Une règle de contrôle applicable à toute réponse",
        "Un document de test",
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
      does: "Produit, à partir d'un brief rédigé une seule fois, un texte qui vous ressemble plutôt qu'à un assistant.",
      forWhom: "Toute personne qui corrige les trois mêmes défauts sur chaque brouillon et s'apprête à tout réécrire elle-même.",
      hard:
        "Décrite, la voix reste invisible pour un modèle. Les adjectifs consomment des tokens sans rien changer ; c'est pourquoi la plupart des briefs de style sont purement décoratifs.",
      failure:
        "Un texte fluide et bien structuré qui pourrait provenir de n'importe qui, où réapparaissent vos trois tics d'écriture les plus détestés.",
      steps: [
        { title: "Réunir trois mauvais brouillons", makes: "la matière première de chaque règle que vous rédigerez", check: "Quel était précisément le défaut de chacun, formulé en des termes qu'un inconnu comprendrait ?" },
        { title: "Traduire le goût en interdits", makes: "une liste de choses à ne jamais faire, chacune rattachée à un brouillon", check: "Une autre personne pourrait-elle vérifier qu'une règle a été enfreinte sans vous consulter ?" },
        { title: "Ajouter un exemple commenté", makes: "une paire avant et après qui incarne la voix", check: "L'exemple enseigne-t-il quelque chose que les interdits n'expriment pas déjà ?" },
        { title: "Le réduire à vingt règles", makes: "un brief suffisamment court pour être suivi", check: "Quelle règle avez-vous supprimée, et que faudrait-il pour que vous la rétablissiez ?" },
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
      shape: "Répondre sans promettre l'impossible",
      does: "Répond aux clients avec votre voix, dans les limites que vous fixez, et transmet la demande lorsqu'il le doit.",
      forWhom: "Toute personne dont l'agent de support, poli et rapide, a déjà promis deux fois un correctif que personne n'avait prévu.",
      hard:
        "Un modèle privilégie l'utilité sur l'exactitude. Livré à lui-même, il invente une date, parce qu'une date est ce que le lecteur attendait.",
      failure:
        "Une réponse chaleureuse et bien rédigée qui vous engage sur ce que vous ne pouvez pas fournir, envoyée avant que quiconque l'ait relue.",
      steps: [
        { title: "Rédiger les interdits absolus", makes: "les trois éléments qu'il ne doit jamais énoncer : une date, un prix, un remboursement", check: "Que répond-il à la place, mot pour mot ?" },
        { title: "Faire de « je ne sais pas » une réponse valable", makes: "une réponse validée pour les cas où il ne doit pas deviner", check: "Seriez-vous satisfait de recevoir vous-même cette réponse ?" },
        { title: "Lister les déclencheurs de transfert", makes: "un ensemble de conditions, et non une appréciation", check: "Pourquoi une liste de déclencheurs est-elle plus sûre que de le laisser juger ?" },
        { title: "Lui fournir la politique réelle", makes: "une base de connaissances qu'il cite au lieu de la résumer", check: "Qu'est-ce qui se dégrade lorsqu'une politique est résumée ?" },
      ],
      ships: [
        "Un brief de support",
        "Une liste de déclencheurs de transfert",
        "Un refus bien formulé",
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
      shape: "Modifier du code sans le casser",
      does: "Lit du code, propose des modifications et signale des défauts démontrables plutôt que des préférences personnelles.",
      forWhom: "Toute personne dont l'outil de revue produit quarante commentaires par modification et que plus personne ne lit.",
      hard:
        "Distinguer un défaut d'une préférence. Les deux sont formulés avec la même assurance, et c'est la seconde qui rend le premier illisible.",
      failure:
        "Un relecteur minutieux que personne ne lit, ce qui est pire que l'absence de relecteur.",
      steps: [
        { title: "Définir ce qu'est un constat", makes: "les trois éléments qu'un constat doit comporter : entrées, comportement, résultat attendu", check: "Que fait-il lorsqu'il ne peut pas rédiger ces trois éléments ?" },
        { title: "Exclure les questions de goût", makes: "une liste explicite de ce qu'il n'a pas le droit de signaler", check: "Où trouve-t-il vos conventions, et que fait-il s'il n'en existe aucune ?" },
        { title: "Plafonner et hiérarchiser", makes: "un nombre maximal de constats, classés du plus grave au moins grave", check: "Pourquoi une liste non hiérarchisée de quarante constats équivaut-elle à une absence de liste ?" },
        { title: "Le tester sur une modification réelle", makes: "la preuve qu'il a trouvé un défaut réel, ou qu'il s'est abstenu faute d'en trouver", check: "A-t-il cherché à remplir un quota, ou s'est-il arrêté ?" },
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
      does: "Vérifie des chiffres, puis indique ce qu'il recommande et ce qui invaliderait cette recommandation.",
      forWhom: "Toute personne sur le point d'envoyer une prévision à un conseil avec une ligne dont la somme omet une cellule.",
      hard:
        "Séparer l'arithmétique du jugement. Chargé de vérifier des chiffres, un modèle se met à discuter vos hypothèses, ce qui relève d'une autre réunion.",
      failure:
        "Une revue qui juge le modèle raisonnable, et un total qui n'égale pas la somme de ses parties.",
      steps: [
        { title: "Nommer les quatre erreurs", makes: "une liste de contrôle de ce qui échappe à une relecture humaine", check: "Lesquelles de ces quatre erreurs avez-vous vous-même laissé passer ?" },
        { title: "Séparer arithmétique et opinion", makes: "deux sections de sortie qui ne se mélangent jamais", check: "Qu'est-ce qui n'appartient ni à l'une ni à l'autre ?" },
        { title: "Exiger la liste de ce qui n'a pas été vérifié", makes: "une section consacrée à ce qu'il a dû admettre sans vérification", check: "Pourquoi un silence à cet endroit donne-t-il une fausse assurance ?" },
        { title: "Imposer une recommandation", makes: "une instruction qui interdit de rester indécis", check: "Que recommande-t-il lorsque les éléments de preuve sont réellement équilibrés ?" },
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
      shape: "Placer chaque élément au bon endroit",
      does: "Lit ce qui arrive et détermine la catégorie, la file ou la personne dont cela relève.",
      forWhom: "Toute personne disposant d'une boîte de réception, d'une file de tickets ou d'une liste de prospects que deux personnes trient différemment.",
      hard:
        "La difficulté tient aux catégories, non au modèle. Deux catégories voisines qu'un humain confond seront également confondues par un agent, et aucun prompt ne corrige une nomenclature mal délimitée.",
      failure:
        "Quatre-vingt-dix pour cent de réponses justes qui masquent une catégorie systématiquement erronée, précisément celle qui importait.",
      steps: [
        { title: "Rédiger les catégories comme des tests", makes: "une définition par catégorie applicable sans ambiguïté", check: "Prenez deux catégories voisines : quelle question unique permet de les distinguer ?" },
        { title: "Ajouter la catégorie « aucune de celles-ci »", makes: "une issue de secours qui l'empêche de forcer un classement", check: "Que devient, en aval, ce qui aboutit dans cette catégorie ?" },
        { title: "Constituer vingt exemples étiquetés", makes: "le seul moyen fiable de savoir si le classement fonctionne", check: "Sur lesquels vous êtes-vous contredit vous-même ?" },
        { title: "Mesurer catégorie par catégorie", makes: "un score qui ne peut pas masquer une classe défaillante dans une moyenne", check: "Quelle catégorie obtient le pire score, et cela a-t-il de l'importance ?" },
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
      shape: "Extraire une structure d'un ensemble désordonné",
      does: "Transforme des factures, des contrats, des courriels ou des formulaires en champs exploitables dans une base de données.",
      forWhom: "Toute personne qui ressaisit les mêmes champs à partir de documents presque, mais jamais tout à fait, identiques.",
      hard:
        "L'absence. Un champ manquant et un champ vide n'ont pas la même signification, et un modèle renverra sans hésiter une valeur plausible dans les deux cas.",
      failure:
        "Un tableau net dont une colonne est discrètement inventée, ce que l'on découvre trois mois plus tard lors d'un audit.",
      steps: [
        { title: "Rédiger le schéma en premier", makes: "une liste de champs avec leur type et leur signification", check: "Pour chaque champ : comment se manifeste l'absence, et est-elle autorisée ?" },
        { title: "Interdire la supposition", makes: "l'instruction qui renvoie une valeur vide plutôt qu'une valeur plausible", check: "Comment remarqueriez-vous qu'il a tout de même deviné ?" },
        { title: "Exiger la localisation", makes: "chaque valeur accompagnée de l'endroit du document dont elle provient", check: "Que faites-vous d'une valeur dont la localisation est erronée ?" },
        { title: "Tester les documents difficiles", makes: "un jeu de test composé des documents qui mettent l'extraction en échec", check: "Quel document avez-vous dû exclure, et pourquoi ?" },
      ],
      ships: [
        "Un schéma",
        "Un prompt d'extraction",
        "Un jeu de documents problématiques",
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
      shape: "Détecter qu'un élément a changé",
      does: "Surveille une source à intervalle régulier et signale ce qui diffère, sans commentaire.",
      forWhom: "Toute personne qui doit savoir quand un concurrent, un prix, une page ou un service a évolué.",
      hard:
        "Savoir se taire. Une sentinelle qui s'exprime à chaque passage vous apprend à l'ignorer en quinze jours.",
      failure:
        "Un rapport hebdomadaire parfaitement rédigé qui serait identique si rien ne s'était produit.",
      steps: [
        { title: "Définir ce que « changé » signifie", makes: "une règle qui distingue un changement réel du bruit", check: "Un paragraphe reformulé constitue-t-il un changement ?" },
        { title: "Interdire les adjectifs", makes: "une liste de mots qu'elle ne doit jamais employer pour meubler une semaine calme", check: "Qu'envoie-t-elle lorsque rien ne s'est produit ?" },
        { title: "Conserver l'état précédent", makes: "la comparaison qui justifie la rédaction d'un rapport", check: "Où l'état précédent est-il conservé, et qui en est responsable ?" },
        { title: "Aligner la fréquence sur la décision", makes: "une cadence adaptée à l'usage que vous en ferez", check: "Quelle décision ce rapport éclaire-t-il, et à quelle fréquence est-elle réellement prise ?" },
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
      shape: "Découper un souhait en étapes réalisables",
      does: "À partir d'un objectif, produit un plan ordonné où chaque étape a un responsable et un résultat observable.",
      forWhom: "Toute personne qui a formulé un objectif en une ligne et vu cinq personnes l'interpréter de cinq façons.",
      hard:
        "Savoir s'arrêter. Face à un objectif flou, un planificateur produira un plan soigné pour le mauvais objectif plutôt que de poser la question.",
      failure:
        "Un plan bien ordonné qui a tranché chaque ambiguïté par supposition, si bien que personne n'a remarqué qu'elles existaient.",
      steps: [
        { title: "Formuler l'objectif comme un objet", makes: "une ligne d'arrivée suffisamment concrète pour être photographiée", check: "Comment saurez-vous que le travail est terminé sans interroger personne ?" },
        { title: "Raisonner à rebours depuis la fin", makes: "un plan construit à partir du point d'arrivée, et non du point de départ", check: "Quelle étape n'existe que parce qu'elle semblait être une bonne idée ?" },
        { title: "Imposer les questions ouvertes", makes: "une section qui ne doit pas rester vide", check: "Qu'a-t-il voulu supposer, et qu'avez-vous décidé à la place ?" },
        { title: "Associer à chaque étape un résultat observable", makes: "des critères d'acceptation discutables avant le début du travail", check: "Deux personnes pourraient-elles vérifier la même étape et aboutir à des conclusions différentes ?" },
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
      shape: "Agir délibérément dans un système réel",
      does: "Appelle des outils et des interfaces, dans un périmètre délimité, avec une étape où un humain donne son accord.",
      forWhom: "Toute personne sur le point d'accorder à un agent un accès en écriture à un système qui engage de l'argent ou dont les actions sont irréversibles.",
      hard:
        "Le périmètre d'action. Le prompt est la partie facile ; le véritable travail consiste à décider ce que l'agent ne doit jamais toucher, et à prouver qu'il ne le peut pas.",
      failure:
        "Il a fait exactement ce que vous demandiez, mais sur la mauvaise fiche, et aucun retour en arrière n'est possible.",
      steps: [
        { title: "Délimiter le périmètre d'action", makes: "une liste écrite de ce qu'il peut lire, écrire, et ne doit jamais toucher", check: "Quelle est la pire action qu'il pourrait accomplir aujourd'hui ?" },
        { title: "Séparer la lecture de l'écriture", makes: "deux configurations, dont l'une ne peut rien modifier", check: "Quelle part du travail peut s'effectuer en lecture seule ?" },
        { title: "Intégrer l'humain dans la boucle", makes: "une étape d'approbation offrant assez de contexte pour décider en cinq secondes", check: "Que voit la personne qui approuve, et cela suffit-il ?" },
        { title: "Prévoir un retour en arrière pour chaque action", makes: "une procédure d'annulation, ou le refus de toute action irréversible", check: "Quelles actions sont irréversibles, et sont-elles néanmoins autorisées ?" },
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
      shape: "Produire des variantes et identifier la plus efficace",
      does: "Produit des alternatives à partir d'un brief, puis analyse les résultats et indique ce qu'il faut conserver.",
      forWhom: "Toute personne qui génère vingt versions d'un contenu et choisit à l'intuition.",
      hard:
        "Obtenir une variété qui ait du sens. Sollicité pour des variantes, un modèle change les mots mais conserve l'idée : vous testez donc vingt fois la même chose.",
      failure:
        "Vingt options pour une seule idée, et un test qui ne peut rien vous apprendre puisque rien ne différait réellement.",
      steps: [
        { title: "Nommer l'axe de différence", makes: "un énoncé de ce qui doit varier d'une variante à l'autre", check: "Deux variantes pourraient-elles différer sur votre axe tout en se lisant de façon identique ?" },
        { title: "Exiger l'hypothèse", makes: "chaque variante accompagnée de ce qu'elle teste", check: "Quelle variante ne repose sur aucune hypothèse, et pourquoi figure-t-elle dans la liste ?" },
        { title: "Fixer d'abord la règle d'arrêt", makes: "le seuil qui met fin au test, défini avant de commencer", check: "Quel résultat vous conduirait à conserver la version actuelle ?" },
        { title: "Interpréter le résultat avec honnêteté", makes: "un prompt qui rapporte ce qui s'est produit, et non ce que vous espériez", check: "Que dit-il lorsque l'écart relève du bruit ?" },
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
      shape: "Coordonner plusieurs agents sans conflit",
      does: "Exécute une chaîne d'agents, transmet les résultats de l'un à l'autre et identifie celui qui a échoué.",
      forWhom: "Toute personne dont le système à deux agents fonctionne jusqu'au jour où il cesse de fonctionner, sans moyen de savoir quelle moitié a failli.",
      hard:
        "Identifier l'étape défaillante. Lorsque la sortie finale est erronée, chaque étape en amont devient suspecte, et une chaîne sans trace n'est qu'une boîte noire au coût supplémentaire.",
      failure:
        "Un système qui produit un résultat erroné sans vous donner aucun moyen de savoir où il a dérapé.",
      steps: [
        { title: "Rédiger le contrat entre les étapes", makes: "un format défini pour ce que chaque étape transmet à la suivante", check: "Que fait une étape lorsqu'elle reçoit une entrée mal formée ?" },
        { title: "Rendre chaque étape testable isolément", makes: "un moyen d'exécuter n'importe quelle étape sur une entrée fixe", check: "Pouvez-vous reproduire l'étape trois sans exécuter les étapes une et deux ?" },
        { title: "Conserver la trace", makes: "un relevé de ce qui est entré et sorti à chaque étape", check: "Combien de temps la conservez-vous, et que contient-elle qu'elle ne devrait pas contenir ?" },
        { title: "Décider de la conduite en cas d'échec", makes: "une règle par étape : reprendre, ignorer, arrêter, demander", check: "Quelle étape ne doit jamais être reprise, et pourquoi ?" },
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
