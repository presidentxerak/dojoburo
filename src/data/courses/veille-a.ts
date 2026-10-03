// LE COURS « Les outils IA du moment : suivre sans se noyer », PARTIE A · voir ./types et ./index.
//
// CETTE PARTIE pose la méthode (pourquoi une méthode plutôt que le flux, les
// sources fiables, un coffre de veille dans Obsidian avec l'IA, le protocole
// pour tester un outil en une heure), puis présente les grands assistants et
// leurs forces stables (ChatGPT, Claude, Gemini, Copilot, Grok, Mistral Le
// Chat, Perplexity et les alternatives européennes). La PARTIE B traite ce qui
// dépasse le chat (agents, automatisation, bots, second cerveau) et le tri
// (inventaire, confidentialité, critères stables, veille hebdomadaire).
//
// LE FIL ROUGE EST FICTIF · « Agence Pivot », une agence de communication
// imaginaire de six personnes. Camille, cheffe de projet (fictive elle aussi),
// est chargée de suivre les outils IA pour l'équipe : elle rédige une charte
// de veille, choisit ses sources, tient un coffre Obsidian, teste les outils
// en une heure, puis répartit les tâches de l'agence entre les assistants.
//
// CE QUE LE COURS AFFIRME, ET CE QU'IL S'INTERDIT. Le contenu est daté : il
// décrit l'état des outils en 2026, par leurs forces stables (intégrations,
// manière de travailler, éditeur, origine). Les fonctions précises, les noms
// d'offres, les limites et les prix bougent sans cesse : le cours ne les cite
// pas, et renvoie aux notes de version, aux pages de tarifs et aux politiques
// de confidentialité officielles de chaque éditeur, sans adresse inventée.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 1 · UNE MÉTHODE DE VEILLE                                    */
/* ================================================================== */

const M1 = 'vt-m1'

const METHOD: Level[] = [
  {
    id: 'vt-why-method',
    master: 'watch',
    minutes: 9,
    title: B('Why a method beats following the feed', 'Pourquoi une méthode plutôt que suivre le flux'),
    learn: B(
      'You will know why following the stream of AI news tires without informing, and what replaces it: questions, sources, a rhythm.',
      "Vous saurez pourquoi suivre le flot d'annonces IA épuise sans informer, et ce qui le remplace : des questions, des sources, un rythme.",
    ),
    act: B('Write the watch charter of Agence Pivot: three questions, one weekly slot, and what you deliberately ignore.',
      "Rédigez la charte de veille de l'Agence Pivot : trois questions, un créneau par semaine, ce que vous ignorez exprès."),
    steps: [
      B('List the last five AI announcements you read and note, for each, whether it changed anything in your work.',
        'Listez les cinq dernières annonces IA lues et notez, pour chacune, si elle a changé quelque chose à votre travail.'),
      B('Turn your real needs into three watch questions, such as "which tool drafts our client reports faster?".',
        'Transformez vos besoins en trois questions de veille, comme « quel outil rédige plus vite nos comptes rendus ? ».'),
      B('Set one weekly slot and one single place where you write down what you keep; the rest is let go.',
        'Fixez un créneau par semaine et un seul endroit où noter ce que vous gardez ; le reste est laissé de côté.'),
      B('Write what you will not follow: rumours, leaderboards, demos without a date or a source.',
        'Écrivez ce que vous ne suivrez pas : rumeurs, classements, démonstrations sans date ni source.'),
    ],
    trap: B(
      'Treating each announcement as urgent: most change nothing for your tasks, and the one that matters will still be there next week, documented.',
      'Traiter chaque annonce comme urgente : la plupart ne changent rien à vos tâches, et celle qui compte sera encore là la semaine suivante.',
    ),
    quiz: {
      q: B('On Monday, three new AI tools trend on social networks. Camille has a watch charter. What does she do?',
        'Lundi, trois nouveaux outils IA font parler d\'eux sur les réseaux. Camille a une charte de veille. Que fait-elle ?'),
      options: [
        B('She tests all three today, so the agency does not fall behind', "Elle teste les trois aujourd'hui, pour que l'agence ne prenne pas de retard"),
        B('She notes them and keeps for Friday those that meet a question', 'Elle les note et garde pour vendredi ceux qui répondent à une question'),
        B('She ignores them for good, as new tools are only a passing trend', 'Elle les ignore pour de bon, les nouveaux outils étant une simple mode'),
      ],
      answer: 1,
      why: B(
        'A method does not refuse novelty: it filters it. The note takes seconds; the weekly slot decides, sources in hand, against questions that come from the work.',
        'Une méthode ne refuse pas la nouveauté : elle la filtre. La note prend quelques secondes ; le créneau hebdomadaire tranche, sources en main, face à des questions issues du travail.',
      ),
    },
    badge: B('Watches with a question', 'Veille avec une question'),
  },
  {
    id: 'vt-sources',
    master: 'research',
    minutes: 10,
    title: B('Reliable sources: blogs, release notes, newsletters', 'Sources fiables : blogs, notes de version, lettres'),
    learn: B(
      'You will rank sources by reliability, from the publisher\'s release notes to the anonymous post, and follow them by RSS.',
      "Vous saurez classer les sources par fiabilité, des notes de version de l'éditeur au message anonyme, et les suivre par RSS.",
    ),
    act: B('Build the source list of Agence Pivot: official release notes, two newsletters at most, one RSS reader.',
      "Constituez la liste de sources de l'Agence Pivot : notes de version officielles, deux lettres au plus, un lecteur RSS."),
    steps: [
      B('For each tool the agency pays for, find its official blog, its release notes and its service status page.',
        "Pour chaque outil payé par l'agence, trouvez son blog officiel, ses notes de version et sa page d'état du service."),
      B('Add their feeds to one RSS reader (Feedly, Inoreader or NetNewsWire); follow by email the sites with no feed.',
        'Ajoutez leurs flux à un seul lecteur RSS (Feedly, Inoreader ou NetNewsWire) ; suivez par e-mail les sites sans flux.'),
      B('Keep at most two newsletters, each signed by a named author who links to the primary sources.',
        "Gardez au plus deux lettres d'information, chacune signée par un auteur nommé qui renvoie aux sources primaires."),
      B('Before keeping any claim, trace it back to the publisher\'s own page and note the date of that page.',
        "Avant de retenir une affirmation, remontez jusqu'à la page de l'éditeur et notez la date de cette page."),
    ],
    trap: B(
      'Relaying a screenshot of a "new feature" seen on a social network: without the publisher\'s page, you do not know if it exists, for whom, or since when.',
      "Relayer la capture d'une « nouvelle fonction » vue sur un réseau social : sans la page de l'éditeur, vous ignorez si elle existe, pour qui, depuis quand.",
    ),
    quiz: {
      q: B('A post claims that an assistant used by the agency now "keeps no data at all". Where do you check?',
        "Un message affirme qu'un assistant utilisé par l'agence « ne garde plus aucune donnée ». Où vérifiez-vous ?"),
      options: [
        B('In the replies under the post, where users share what they saw', 'Dans les réponses sous le message, où des utilisateurs témoignent'),
        B('By asking the assistant itself what it does with your data', "En demandant à l'assistant lui-même ce qu'il fait de vos données"),
        B('In the publisher\'s privacy policy and its dated release notes', "Dans la politique de confidentialité et les notes datées de l'éditeur"),
      ],
      answer: 2,
      why: B(
        'Only the publisher\'s documents commit it, and they are dated. An assistant can be wrong about its own product, and replies report single cases, sometimes on another plan.',
        "Seuls les documents de l'éditeur l'engagent, et ils sont datés. Un assistant peut se tromper sur son propre produit, et les réponses rapportent des cas isolés, parfois sur une autre offre.",
      ),
    },
    badge: B('Goes back to the source', 'Remonte à la source'),
  },
  {
    id: 'vt-obsidian-watch',
    master: 'extraction',
    minutes: 11,
    title: B('Organise your watch with Obsidian and AI', "Organiser sa veille avec Obsidian et l'IA"),
    learn: B(
      'You will keep a watch vault in Obsidian: one dated note per item, a template, tags, and an AI that summarises without inventing.',
      'Vous saurez tenir un coffre de veille dans Obsidian : une fiche datée par sujet, un modèle, des tags, une IA qui résume sans inventer.',
    ),
    act: B('Create the Pivot watch vault and its item template, then turn three saved articles into sourced notes.',
      'Créez le coffre de veille Pivot et son modèle de fiche, puis transformez trois articles en fiches sourcées.'),
    steps: [
      B('Create a vault with three folders: Inbox for raw captures, Items for checked notes, Weeks for summaries.',
        'Créez un coffre à trois dossiers : Entrée pour les captures brutes, Fiches pour les notes vérifiées, Semaines.'),
      B('Write an item template: tool, date, source link, what changes, which question it serves, decision.',
        'Écrivez un modèle de fiche : outil, date, lien source, ce qui change, la question servie, la décision.'),
      B('Capture articles into Inbox, for instance with the official Obsidian Web Clipper extension, link included.',
        "Capturez les articles dans Entrée, par exemple avec l'extension officielle Obsidian Web Clipper, lien compris."),
      B('Ask an AI to fill the template from the pasted article only, then check each line against the source.',
        "Demandez à une IA de remplir le modèle à partir de l'article collé seul, puis vérifiez chaque ligne."),
    ],
    trap: B(
      'Letting the AI summarise from memory rather than from the pasted article: it fills gaps with plausible features, and the note looks reliable.',
      "Laisser l'IA résumer de mémoire plutôt qu'à partir de l'article collé : elle comble les trous par des fonctions plausibles.",
    ),
    quiz: {
      q: B('Camille pastes a release note into an AI to fill her template. Which instruction protects the note?',
        'Camille colle une note de version dans une IA pour remplir son modèle. Quelle consigne protège la fiche ?'),
      options: [
        B('Stick to the pasted text and write "not stated" for a missing field', 'Se limiter au texte collé et écrire « non précisé » si un champ manque'),
        B('Add what the AI knows about the tool to make the note complete', "Ajouter ce que l'IA sait de l'outil pour que la fiche soit complète"),
        B('Summarise in three lines so the note stays short and easy to scan', 'Résumer en trois lignes pour que la fiche reste courte et lisible'),
      ],
      answer: 0,
      why: B(
        'The danger in a watch note is the invented detail, because it looks like the rest. Limiting the AI to the source and naming the gaps keeps the note checkable.',
        "Le danger d'une fiche de veille est le détail inventé, qui ressemble au reste. Limiter l'IA à la source et nommer les manques garde la fiche vérifiable.",
      ),
    },
    badge: B('Keeps a sourced vault', 'Tient un coffre sourcé'),
  },
  {
    id: 'vt-one-hour-test',
    master: 'tools',
    minutes: 12,
    title: B('The protocol to test a tool in one hour', 'Le protocole pour tester un outil en une heure'),
    learn: B(
      'You will test a tool in one hour on your own tasks and score it on quality, privacy, cost and lock-in.',
      'Vous saurez tester un outil en une heure sur vos tâches et le noter : qualité, confidentialité, coût, dépendance.',
    ),
    act: B('Run the one-hour protocol on a tool Camille spotted, against the assistant the agency already uses.',
      "Déroulez le protocole d'une heure sur un outil repéré par Camille, face à l'assistant déjà utilisé."),
    steps: [
      B('First ten minutes: choose three real tasks of the agency, with the expected result for each.',
        "Dix premières minutes : choisissez trois tâches réelles de l'agence, avec le résultat attendu pour chacune."),
      B('Thirty minutes: run the same prompts, on anonymised data, in the new tool and in the current one.',
        "Trente minutes : passez les mêmes prompts, sur des données anonymisées, dans le nouvel outil et dans l'actuel."),
      B('Ten minutes: read the privacy policy, the pricing page and the export options, and note the date.',
        "Dix minutes : lisez la politique de confidentialité, la page des tarifs et les options d'export, datées."),
      B('Last ten minutes: score each criterion from 1 to 3 and decide: adopt, trial with a review date, or drop.',
        'Dix dernières minutes : notez chaque critère de 1 à 3 et décidez : adopter, essayer avec un bilan daté, écarter.'),
    ],
    trap: B(
      'Testing with the publisher\'s demo examples: they were chosen to shine, and say nothing about your briefs, your files or your clients.',
      "Tester avec les exemples de démonstration de l'éditeur : choisis pour briller, ils ne disent rien de vos briefs, fichiers ou clients.",
    ),
    quiz: {
      q: B('The new tool writes better than the current one but stores work in a format nothing else opens. How do you score it?',
        "Le nouvel outil rédige mieux que l'actuel mais stocke tout dans un format que rien d'autre n'ouvre. Comment le notez-vous ?"),
      options: [
        B('High everywhere, since the quality of the output comes first', 'Haut partout, la qualité du résultat passant avant le reste'),
        B('Low everywhere, since any closed format rules a tool out', 'Bas partout, tout format fermé excluant un outil'),
        B('High on quality, low on lock-in, then you weigh the two', 'Haut en qualité, bas en dépendance, puis vous pesez les deux'),
      ],
      answer: 2,
      why: B(
        'Criteria are scored separately so one strength does not hide a weakness. Lock-in is not a veto: it is a cost, weighed against the gain and the effort of leaving later.',
        "Les critères se notent séparément pour qu'une force ne masque pas une faiblesse. La dépendance n'est pas un veto : c'est un coût, à peser contre le gain et l'effort d'en sortir.",
      ),
    },
    badge: B('Tests in one hour, on real work', 'Teste en une heure, sur du réel'),
  },
]

const METHOD_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M1, 'vt-why-method')]: {
    why: [
      B("AI publishers announce something almost every week: a model, a feature, an offer. Followed as a stream, this news tires the attention without telling you what to do on Monday morning. Most announcements concern use cases that are not yours, plans you do not have, or regions where the feature is not yet available.",
        "Les éditeurs d'IA annoncent quelque chose presque chaque semaine : un modèle, une fonction, une offre. Suivies comme un flot, ces annonces fatiguent l'attention sans dire quoi faire le lundi matin. La plupart concernent des usages qui ne sont pas les vôtres, des offres que vous n'avez pas, ou des régions où la fonction n'est pas encore disponible."),
      B("A method reverses the direction. Instead of starting from the news and wondering whether it matters, you start from your questions (what slows the team down, what costs too much, what worries the clients) and look for answers in a few reliable sources, at a fixed time. Everything that does not meet a question waits, and very often disappears on its own.",
        "Une méthode inverse le sens. Au lieu de partir de l'annonce et de se demander si elle compte, vous partez de vos questions (ce qui ralentit l'équipe, ce qui coûte trop, ce qui inquiète les clients) et cherchez des réponses dans quelques sources fiables, à heure fixe. Tout ce qui ne répond à aucune question attend, et disparaît très souvent de lui-même."),
      B("Writing the method down matters. A watch charter of a few lines (questions, sources, slot, what is ignored) can be shared, discussed and revised every quarter. It also protects the team: nobody has to chase every trend, because someone knows when and where the useful news will be examined.",
        "L'écrire compte. Une charte de veille de quelques lignes (questions, sources, créneau, ce qui est ignoré) se partage, se discute et se révise chaque trimestre. Elle protège aussi l'équipe : personne n'a à courir après chaque tendance, puisqu'on sait quand et où les nouveautés utiles seront examinées."),
    ],
    example: {
      context: B("Camille, project manager at Agence Pivot (a fictional six-person communication agency), asks an AI to help her keep up with AI tools.",
        "Camille, cheffe de projet à l'Agence Pivot (agence de communication fictive de six personnes), demande à une IA de l'aider à suivre les outils IA."),
      before: B("What are the latest AI tools I should know about?",
        "Quels sont les derniers outils IA que je dois connaître ?"),
      after: B("Context: I run the AI watch for a six-person communication agency. Our recurring tasks: client meeting reports, social media posts, proposals in answer to calls for tenders, research on clients' sectors.\nHelp me write a one-page watch charter:\n1. Turn our tasks into three precise watch questions (what we want to know, and why).\n2. For each question, list the kinds of sources that can answer it (official release notes, publisher blogs, newsletters), without naming any feature from memory.\n3. Propose one weekly slot of thirty minutes and the place where the decisions are written.\n4. List what we deliberately do not follow, with the reason.\nDo not recommend any tool yet: the charter comes first.",
        "Contexte : je m'occupe de la veille IA d'une agence de communication de six personnes. Nos tâches récurrentes : comptes rendus de réunions client, posts pour les réseaux sociaux, réponses à des appels d'offres, recherches sur le secteur des clients.\nAide-moi à rédiger une charte de veille d'une page :\n1. Transforme nos tâches en trois questions de veille précises (ce que nous voulons savoir, et pourquoi).\n2. Pour chaque question, liste les types de sources qui peuvent y répondre (notes de version officielles, blogs d'éditeurs, lettres d'information), sans citer de fonction de mémoire.\n3. Propose un créneau hebdomadaire de trente minutes et l'endroit où les décisions sont notées.\n4. Liste ce que nous ne suivons pas exprès, avec la raison.\nNe recommande encore aucun outil : la charte passe d'abord."),
      takeaway: B("The first prompt asks for a list of names that will be outdated within weeks. The second asks for a method built on the agency's tasks, and forbids features from memory: the answer stays valid as tools change.",
        "Le premier prompt demande une liste de noms périmée en quelques semaines. Le second demande une méthode bâtie sur les tâches de l'agence, et interdit les fonctions citées de mémoire : la réponse reste valable quand les outils changent."),
    },
    exercise: {
      goal: B("Your own watch charter, on one page: three questions drawn from your work, your sources, your weekly slot and your list of things you ignore.",
        "Votre propre charte de veille, sur une page : trois questions tirées de votre travail, vos sources, votre créneau hebdomadaire et la liste de ce que vous ignorez."),
      prompt: B("I work as [YOUR ROLE] in [YOUR ORGANISATION, SIZE, SECTOR]. The tasks that take most of my time: [THREE TO FIVE TASKS].\nThe AI tools I already use: [TOOLS, OR NONE].\n1. Turn my tasks into three watch questions, each starting with \"which tool\" or \"how\", and tell me why each one matters.\n2. For each question, list the types of reliable sources that can answer it.\n3. Propose a weekly slot of [DURATION] and a single place to write down decisions.\n4. List five kinds of content I should deliberately ignore, with the reason.\nDo not name any feature or price from memory.",
        "Je travaille comme [VOTRE RÔLE] dans [VOTRE STRUCTURE, TAILLE, SECTEUR]. Les tâches qui me prennent le plus de temps : [TROIS À CINQ TÂCHES].\nLes outils IA que j'utilise déjà : [OUTILS, OU AUCUN].\n1. Transforme mes tâches en trois questions de veille, chacune commençant par « quel outil » ou « comment », et dis-moi pourquoi chacune compte.\n2. Pour chaque question, liste les types de sources fiables qui peuvent y répondre.\n3. Propose un créneau hebdomadaire de [DURÉE] et un seul endroit où noter les décisions.\n4. Liste cinq types de contenus que je devrais ignorer exprès, avec la raison.\nNe cite aucune fonction ni aucun prix de mémoire."),
      check: [
        B("Each question comes from a real task, not from a trend", "Chaque question vient d'une tâche réelle, pas d'une tendance"),
        B("The slot is in your calendar, with a duration", "Le créneau est dans votre agenda, avec une durée"),
        B("The ignore list names at least three concrete kinds of content", "La liste des contenus ignorés en nomme au moins trois, concrets"),
        B("The charter fits on one page and can be shared as is", "La charte tient sur une page et se partage telle quelle"),
      ],
      bonus: B("Show your charter to a colleague and ask which question is missing for their own work. A watch that serves two people is already a team habit.",
        "Montrez votre charte à un collègue et demandez-lui quelle question manque pour son propre travail. Une veille qui sert deux personnes est déjà une habitude d'équipe."),
    },
    more: [
      { q: B("Camille's charter asks \"which tool drafts our meeting reports faster?\". A new model tops a public leaderboard. What does she do?",
          "La charte de Camille demande « quel outil rédige plus vite nos comptes rendus ? ». Un nouveau modèle domine un classement public. Que fait-elle ?"),
        options: [
          B("She switches the whole agency to it, since it ranks first", "Elle y bascule toute l'agence, puisqu'il est classé premier"),
          B("She notes it and tests it later on one of the agency's reports", "Elle le note et le testera sur un vrai compte rendu de l'agence"),
          B("She ignores it, since leaderboards never say anything useful", "Elle l'ignore, les classements ne disant jamais rien d'utile"),
        ],
        answer: 1,
        why: B("A leaderboard measures a set of tasks chosen by others. It can justify a test, never a decision: only a trial on the agency's own reports answers Camille's question.",
          "Un classement mesure des tâches choisies par d'autres. Il peut justifier un test, jamais une décision : seul un essai sur les comptes rendus de l'agence répond à la question de Camille.") },
      { q: B("Which line belongs in the \"what we ignore\" part of a watch charter?",
          "Quelle ligne a sa place dans la partie « ce que nous ignorons » d'une charte de veille ?"),
        options: [
          B("Release notes of the tools the team pays for every month", "Les notes de version des outils que l'équipe paie chaque mois"),
          B("Changes to the privacy policy of the assistant in daily use", "Les changements de confidentialité de l'assistant utilisé chaque jour"),
          B("Rumours about unreleased models, with no source or date", "Les rumeurs sur des modèles non sortis, sans source ni date"),
        ],
        answer: 2,
        why: B("Rumours cost attention and give nothing to act on: if the model comes out, the publisher will document it. Release notes and privacy changes of tools in use are exactly what a watch must catch.",
          "Les rumeurs coûtent de l'attention et ne donnent rien sur quoi agir : si le modèle sort, l'éditeur le documentera. Les notes de version et les changements de confidentialité des outils utilisés sont exactement ce qu'une veille doit capter.") },
    ],
  },

  [enrichKey(M1, 'vt-sources')]: {
    why: [
      B("Sources do not have the same weight. At the top: what the publisher writes and commits to (release notes, documentation, pricing page, privacy policy, terms). Then its blog, which announces but sometimes simplifies. Then specialised newsletters that link to these pages. At the bottom: posts, videos and screenshots, which may be right but prove nothing on their own.",
        "Les sources n'ont pas le même poids. En haut : ce que l'éditeur écrit et qui l'engage (notes de version, documentation, page des tarifs, politique de confidentialité, conditions). Puis son blog, qui annonce mais simplifie parfois. Puis les lettres spécialisées qui renvoient à ces pages. En bas : messages, vidéos et captures, qui peuvent avoir raison mais ne prouvent rien seuls."),
      B("Release notes are the most useful and the least read. They are dated, they say which plan and which region are concerned, and they record removals as well as additions. OpenAI, Anthropic, Google, Microsoft and Mistral all publish some form of release notes or changelog for their products: find them through the publisher's help center or documentation, rather than through a search result that may be old.",
        "Les notes de version sont les plus utiles et les moins lues. Elles sont datées, disent quelle offre et quelle région sont concernées, et consignent les retraits autant que les ajouts. OpenAI, Anthropic, Google, Microsoft et Mistral publient tous une forme de notes de version pour leurs produits : trouvez-les depuis le centre d'aide ou la documentation de l'éditeur, plutôt que par un résultat de recherche peut-être ancien."),
      B("RSS gathers these sources in one place without an algorithm choosing for you. A reader such as Feedly, Inoreader or NetNewsWire (or FreshRSS and Miniflux if you host it yourself) shows new items in order, and you decide. When a site offers no feed, its email alerts or a weekly visit, written in your slot, do the job.",
        "Le RSS rassemble ces sources en un seul endroit sans qu'un algorithme choisisse pour vous. Un lecteur comme Feedly, Inoreader ou NetNewsWire (ou FreshRSS et Miniflux si vous l'hébergez vous-même) affiche les nouveautés dans l'ordre, et vous décidez. Quand un site n'offre pas de flux, ses alertes par e-mail ou une visite hebdomadaire, notée dans votre créneau, font l'affaire."),
    ],
    example: {
      context: B("Camille wants to know whether the assistant used by Agence Pivot has changed how it handles uploaded files. She first asks the assistant itself.",
        "Camille veut savoir si l'assistant utilisé par l'Agence Pivot a changé sa façon de traiter les fichiers envoyés. Elle demande d'abord à l'assistant lui-même."),
      before: B("Did you change how you handle files recently?",
        "Est-ce que tu as changé ta façon de gérer les fichiers récemment ?"),
      after: B("I need to check a possible change in how [ASSISTANT] handles uploaded files, for a six-person agency on a business plan.\n1. Tell me which official pages of the publisher should contain this information: release notes, help center, privacy policy, business terms. Give their names, not URLs from memory.\n2. Tell me which words to search for in these pages (file retention, file uploads, data controls, training).\n3. Write me a template to record what I find: page, date of the page, plan concerned, exact sentence quoted.\nDo not answer the question itself from memory: your knowledge may be older than the change.",
        "Je dois vérifier un éventuel changement dans la façon dont [ASSISTANT] traite les fichiers envoyés, pour une agence de six personnes sur une offre professionnelle.\n1. Indique-moi quelles pages officielles de l'éditeur devraient contenir cette information : notes de version, centre d'aide, politique de confidentialité, conditions professionnelles. Donne leurs noms, pas d'adresses de mémoire.\n2. Indique-moi quels mots chercher dans ces pages (conservation des fichiers, envoi de fichiers, contrôles des données, entraînement).\n3. Écris-moi un modèle pour noter ce que je trouve : page, date de la page, offre concernée, phrase exacte citée.\nNe réponds pas à la question elle-même de mémoire : tes connaissances peuvent être plus anciennes que le changement."),
      takeaway: B("An assistant does not reliably know its own latest changes: its training stops at a date. The second prompt uses it to find and read the right official pages, and the answer comes from a dated, quoted sentence.",
        "Un assistant ne connaît pas de façon fiable ses propres changements récents : son entraînement s'arrête à une date. Le second prompt s'en sert pour trouver et lire les bonnes pages officielles, et la réponse vient d'une phrase datée et citée."),
    },
    exercise: {
      goal: B("A source table for the tools you use: for each, its release notes, its blog, its status page and its privacy policy, all added to one RSS reader or one email folder.",
        "Un tableau des sources pour les outils que vous utilisez : pour chacun, ses notes de version, son blog, sa page d'état et sa politique de confidentialité, réunis dans un lecteur RSS ou un dossier d'e-mails."),
      prompt: B("Here are the AI tools I use or am considering: [LIST OF TOOLS].\nFor each tool, build a table with these columns: publisher, name of the official release notes page, name of the official blog, existence of a status page, name of the privacy policy, does the site seem to offer an RSS feed (yes / no / to check).\nWrite \"to check\" whenever you are not sure: I will open each page myself.\nThen suggest two criteria to pick at most two newsletters: [WHAT MATTERS TO YOU IN A NEWSLETTER].",
        "Voici les outils IA que j'utilise ou que j'envisage : [LISTE DES OUTILS].\nPour chaque outil, construis un tableau avec ces colonnes : éditeur, nom de la page officielle des notes de version, nom du blog officiel, existence d'une page d'état du service, nom de la politique de confidentialité, le site semble-t-il offrir un flux RSS (oui / non / à vérifier).\nÉcris « à vérifier » chaque fois que tu n'es pas sûr : j'ouvrirai chaque page moi-même.\nPuis propose deux critères pour choisir au plus deux lettres d'information : [CE QUI COMPTE POUR VOUS DANS UNE LETTRE]."),
      check: [
        B("You opened every page in the table yourself and noted its date", "Vous avez ouvert vous-même chaque page du tableau et noté sa date"),
        B("Each feed or email alert is gathered in one single place", "Chaque flux ou alerte e-mail est réuni en un seul endroit"),
        B("You kept two newsletters at most, each with a named author", "Vous avez gardé deux lettres au plus, chacune signée"),
        B("No line of the table rests on the AI's answer alone", "Aucune ligne du tableau ne repose sur la seule réponse de l'IA"),
      ],
      bonus: B("Unsubscribe from one source that you have not opened for a month. A watch also improves by subtraction, and the place freed will serve the next useful source.",
        "Désabonnez-vous d'une source que vous n'avez pas ouverte depuis un mois. Une veille s'améliore aussi par soustraction, et la place libérée servira à la prochaine source utile."),
    },
    more: [
      { q: B("A newsletter announces a feature \"available to everyone\". The publisher's release notes mention it for one business plan in some regions. Which do you keep?",
          "Une lettre annonce une fonction « disponible pour tous ». Les notes de l'éditeur la réservent à une offre professionnelle, dans certaines régions. Que retenez-vous ?"),
        options: [
          B("The release notes, which commit the publisher and give the scope", "Les notes de version, qui engagent l'éditeur et donnent le périmètre"),
          B("The newsletter, which is more recent and easier to understand", "La lettre, plus récente et plus facile à comprendre"),
          B("Neither of them, until a colleague has tried the feature", "Aucune des deux, tant qu'un collègue n'a pas essayé"),
        ],
        answer: 0,
        why: B("The release notes are the primary source: they state the plan, the region and the date. A newsletter that simplifies is useful to spot the news, not to know whether it concerns you.",
          "Les notes de version sont la source primaire : elles précisent l'offre, la région et la date. Une lettre qui simplifie sert à repérer la nouveauté, pas à savoir si elle vous concerne.") },
      { q: B("Why prefer an RSS reader to following publishers on a social network?",
          "Pourquoi préférer un lecteur RSS au suivi des éditeurs sur un réseau social ?"),
        options: [
          B("Because RSS readers summarise each article with AI", "Parce que les lecteurs RSS résument chaque article avec l'IA"),
          B("Because the network's algorithm decides what you see, and when", "Parce que l'algorithme du réseau décide de ce que vous voyez, et quand"),
          B("Because publishers only post their news through RSS feeds", "Parce que les éditeurs ne publient leurs nouvelles que par RSS"),
        ],
        answer: 1,
        why: B("RSS shows everything you subscribed to, in order, without ranking by engagement. Some readers offer AI summaries, but that is not the point, and publishers use many channels.",
          "Le RSS montre tout ce à quoi vous êtes abonné, dans l'ordre, sans tri par engagement. Certains lecteurs proposent des résumés par IA, mais ce n'est pas l'essentiel, et les éditeurs publient sur de nombreux canaux.") },
    ],
  },

  [enrichKey(M1, 'vt-obsidian-watch')]: {
    why: [
      B("A watch that lives in browser tabs and saved posts is lost within a month. Obsidian stores notes as plain Markdown files in a folder on your machine (a vault): they can be read without the app, searched, linked and kept for years. That durability matters for a watch, whose value is to remember what was tested, when, and what was decided.",
        "Une veille qui vit dans des onglets et des publications enregistrées est perdue en un mois. Obsidian range les notes en fichiers Markdown ordinaires dans un dossier de votre machine (un coffre) : ils se lisent sans l'application, se cherchent, se relient et se gardent des années. Cette durée compte pour une veille, dont la valeur est de se souvenir de ce qui a été testé, quand, et de ce qui a été décidé."),
      B("Structure does the work. A template with fixed fields (tool, date, source, what changes, question served, decision) forces each capture to become a decision, or to be dropped. Properties at the top of the note and tags make the vault searchable: all the notes on one tool, all the pending decisions, all the items for one question.",
        "La structure fait le travail. Un modèle à champs fixes (outil, date, source, ce qui change, question servie, décision) oblige chaque capture à devenir une décision, ou à être écartée. Les propriétés en tête de note et les tags rendent le coffre interrogeable : toutes les fiches d'un outil, toutes les décisions en attente, tous les sujets d'une question."),
      B("AI helps at two moments: filling the template from a pasted source, and summarising a week of notes. In both cases it works on your text, not on its memory. You can copy and paste into an assistant, or use a community plugin that connects the vault to a model, possibly a local one: read what each plugin sends, and where, before installing it.",
        "L'IA aide à deux moments : remplir le modèle à partir d'une source collée, et résumer une semaine de fiches. Dans les deux cas, elle travaille sur votre texte, pas sur sa mémoire. Vous pouvez copier-coller dans un assistant, ou utiliser un plugin communautaire qui relie le coffre à un modèle, éventuellement local : lisez ce que chaque plugin envoie, et où, avant de l'installer."),
    ],
    example: {
      context: B("Camille has clipped a publisher's release note into her Inbox folder. She asks an AI to turn it into a watch note.",
        "Camille a capturé la note de version d'un éditeur dans son dossier Entrée. Elle demande à une IA d'en faire une fiche de veille."),
      before: B("Summarise this article for my notes.",
        "Résume cet article pour mes notes."),
      after: B("Below is a release note, pasted between the markers. Fill in this Markdown template using only this text.\n---\ntool:\ndate of the source:\nsource link:\nplans or regions concerned:\nwhat changes (three lines at most):\nwatch question served: [ONE OF MY THREE QUESTIONS]\nwhat to test:\ndecision: pending\n---\nRules: if a field is not in the text, write \"not stated\". Quote the exact sentence that supports \"what changes\". Do not add anything you know from elsewhere.\n<<<\n[PASTED RELEASE NOTE]\n>>>",
        "Voici une note de version, collée entre les marqueurs. Remplis ce modèle Markdown en utilisant uniquement ce texte.\n---\noutil :\ndate de la source :\nlien source :\noffres ou régions concernées :\nce qui change (trois lignes au plus) :\nquestion de veille servie : [UNE DE MES TROIS QUESTIONS]\nà tester :\ndécision : en attente\n---\nRègles : si un champ n'est pas dans le texte, écris « non précisé ». Cite la phrase exacte qui appuie « ce qui change ». N'ajoute rien de ce que tu sais par ailleurs.\n<<<\n[NOTE DE VERSION COLLÉE]\n>>>"),
      takeaway: B("The second prompt gives a fixed template, limits the AI to the pasted text and asks for a quotation. The note is comparable to the others, checkable in seconds, and ends on a decision field.",
        "Le second prompt donne un modèle fixe, limite l'IA au texte collé et demande une citation. La fiche se compare aux autres, se vérifie en quelques secondes, et se termine sur un champ de décision."),
    },
    exercise: {
      goal: B("A working watch vault: three folders, one item template, and three real sources turned into sourced notes that end with a decision.",
        "Un coffre de veille qui fonctionne : trois dossiers, un modèle de fiche, et trois vraies sources transformées en fiches sourcées qui se terminent par une décision."),
      prompt: B("I keep my AI watch in Obsidian. My three watch questions: [YOUR THREE QUESTIONS].\n1. Write a Markdown item template with properties at the top (tool, source date, link, question, decision) and three short sections: what changes, what to test, why it matters for us.\n2. Write a second template for the weekly summary: what was kept, what was dropped, decisions to take.\n3. Propose five tags, no more, to sort my notes by question and by status.\nThen, using only the text I paste below, fill the item template. Write \"not stated\" for any missing field.\n<<<\n[PASTED SOURCE]\n>>>",
        "Je tiens ma veille IA dans Obsidian. Mes trois questions de veille : [VOS TROIS QUESTIONS].\n1. Écris un modèle de fiche Markdown avec des propriétés en tête (outil, date de la source, lien, question, décision) et trois courtes sections : ce qui change, ce qu'il faut tester, pourquoi cela compte pour nous.\n2. Écris un second modèle pour la synthèse hebdomadaire : ce qui a été gardé, ce qui a été écarté, les décisions à prendre.\n3. Propose cinq tags, pas plus, pour trier mes fiches par question et par statut.\nEnsuite, en utilisant uniquement le texte collé ci-dessous, remplis le modèle de fiche. Écris « non précisé » pour tout champ manquant.\n<<<\n[SOURCE COLLÉE]\n>>>"),
      check: [
        B("Each note has a source link and the date of that source", "Chaque fiche a un lien source et la date de cette source"),
        B("You compared each filled field with the original text", "Vous avez comparé chaque champ rempli avec le texte d'origine"),
        B("Each note ends with a decision, even \"drop\"", "Chaque fiche se termine par une décision, même « écarter »"),
        B("The Inbox folder is empty at the end of the exercise", "Le dossier Entrée est vide à la fin de l'exercice"),
      ],
      bonus: B("If you use a community plugin to call an AI from the vault, write in a note what it sends (the current note, a selection, the whole vault) and to which service, according to its own documentation.",
        "Si vous utilisez un plugin communautaire pour appeler une IA depuis le coffre, notez dans une fiche ce qu'il envoie (la note courante, une sélection, tout le coffre) et à quel service, d'après sa propre documentation."),
    },
    more: [
      { q: B("Camille's Inbox holds forty captures, never processed. What is the most useful step?",
          "Le dossier Entrée de Camille contient quarante captures jamais traitées. Quel geste est le plus utile ?"),
        options: [
          B("Ask an AI to summarise all forty in one long note", "Demander à une IA de résumer les quarante en une longue note"),
          B("Keep capturing, and sort them all at the end of the quarter", "Continuer à capturer et tout trier en fin de trimestre"),
          B("Keep those tied to a question, file them, delete the rest", "Garder celles liées à une question, les ranger, supprimer le reste"),
        ],
        answer: 2,
        why: B("The Inbox is a waiting room, not an archive. Sorting by question turns captures into notes or removes them; a long summary of everything only moves the pile into a single file.",
          "Le dossier Entrée est une salle d'attente, pas une archive. Trier par question transforme les captures en fiches ou les supprime ; un long résumé de tout ne fait que déplacer la pile dans un seul fichier.") },
      { q: B("Why does a watch note include the date of the source, and not only the date of capture?",
          "Pourquoi une fiche de veille porte-t-elle la date de la source, et pas seulement celle de la capture ?"),
        options: [
          B("Because a feature described in an old page may have changed since", "Parce qu'une fonction décrite dans une page ancienne a pu changer depuis"),
          B("Because Obsidian cannot sort notes without a date property", "Parce qu'Obsidian ne sait pas trier des notes sans propriété de date"),
          B("Because publishers delete their release notes after a while", "Parce que les éditeurs suppriment leurs notes de version après un temps"),
        ],
        answer: 0,
        why: B("A capture made today can describe a page from last year. The source date tells how fresh the information is, and when to check it again; the tool can sort by any field.",
          "Une capture faite aujourd'hui peut décrire une page de l'an dernier. La date de la source dit la fraîcheur de l'information, et quand la revérifier ; l'outil peut trier sur n'importe quel champ.") },
    ],
  },

  [enrichKey(M1, 'vt-one-hour-test')]: {
    why: [
      B("A tool cannot be judged by its demo, nor by an afternoon of curious exploration. A protocol fixed in advance makes tests comparable: the same three tasks, the same prompts, the same criteria, the same duration. In one hour, you do not learn everything about a tool, but you learn whether it deserves more time.",
        "Un outil ne se juge ni sur sa démonstration, ni sur un après-midi d'exploration curieuse. Un protocole fixé d'avance rend les tests comparables : les trois mêmes tâches, les mêmes prompts, les mêmes critères, la même durée. En une heure, vous n'apprenez pas tout d'un outil, mais vous apprenez s'il mérite plus de temps."),
      B("Four criteria cover most decisions. Quality: is the result better than with the current tool, on your tasks? Privacy: what happens to your data, by default and on the plan you would use? Cost: the price as shown on the pricing page on that day, plus the time to learn it. Lock-in: can you export your work, and leave without losing it?",
        "Quatre critères couvrent la plupart des décisions. La qualité : le résultat est-il meilleur qu'avec l'outil actuel, sur vos tâches ? La confidentialité : que deviennent vos données, par défaut et sur l'offre que vous prendriez ? Le coût : le prix affiché sur la page des tarifs ce jour-là, plus le temps d'apprentissage. La dépendance : pouvez-vous exporter votre travail, et partir sans le perdre ?"),
      B("The test always runs against a reference: the tool you already use, or doing the task by hand. Without it, every tool looks impressive. And it ends with a written decision (adopt, trial until a date, drop), filed in the watch vault, so the same tool is not tested again from scratch three months later.",
        "Le test se fait toujours face à une référence : l'outil déjà utilisé, ou la tâche faite à la main. Sans elle, tout outil impressionne. Et il se termine par une décision écrite (adopter, essayer jusqu'à une date, écarter), rangée dans le coffre de veille, pour ne pas retester le même outil de zéro trois mois plus tard."),
    ],
    example: {
      context: B("Camille has spotted a new writing assistant. She wants to know if it can replace the current one for the agency's meeting reports.",
        "Camille a repéré un nouvel assistant de rédaction. Elle veut savoir s'il peut remplacer l'actuel pour les comptes rendus de l'agence."),
      before: B("Is [NEW TOOL] better than [CURRENT TOOL]?",
        "Est-ce que [NOUVEL OUTIL] est meilleur que [OUTIL ACTUEL] ?"),
      after: B("I am going to test [NEW TOOL] against [CURRENT TOOL] for one hour, for a six-person communication agency. Help me prepare the protocol, not the verdict.\n1. From these three real tasks, write one identical prompt per task that I will paste into both tools: [TASK 1: MEETING REPORT FROM ANONYMISED NOTES], [TASK 2: THREE SOCIAL POSTS FROM A BRIEF], [TASK 3: SUMMARY OF A TENDER DOCUMENT].\n2. For each task, write the expected result in three criteria I can check.\n3. Give me a grid scoring quality, privacy, cost and lock-in from 1 to 3, with what a 1 and a 3 mean for each.\n4. List the questions to answer from the official pages: data use, retention, export, plan needed.\nDo not tell me which tool is better: I will judge on the results.",
        "Je vais tester [NOUVEL OUTIL] face à [OUTIL ACTUEL] pendant une heure, pour une agence de communication de six personnes. Aide-moi à préparer le protocole, pas le verdict.\n1. À partir de ces trois tâches réelles, écris un prompt identique par tâche, que je collerai dans les deux outils : [TÂCHE 1 : COMPTE RENDU À PARTIR DE NOTES ANONYMISÉES], [TÂCHE 2 : TROIS POSTS À PARTIR D'UN BRIEF], [TÂCHE 3 : SYNTHÈSE D'UN CAHIER DES CHARGES].\n2. Pour chaque tâche, écris le résultat attendu en trois critères vérifiables.\n3. Donne-moi une grille qui note qualité, confidentialité, coût et dépendance de 1 à 3, avec ce que signifient 1 et 3 pour chacun.\n4. Liste les questions à trancher avec les pages officielles : usage des données, conservation, export, offre nécessaire.\nNe me dis pas quel outil est meilleur : je jugerai sur les résultats."),
      takeaway: B("The first prompt asks an AI for an opinion it cannot have about your work. The second has it prepare identical prompts, checkable criteria and a grid: the verdict comes from your own test.",
        "Le premier prompt demande à une IA un avis qu'elle ne peut pas avoir sur votre travail. Le second lui fait préparer des prompts identiques, des critères vérifiables et une grille : le verdict vient de votre propre test."),
    },
    exercise: {
      goal: B("One complete test file for a tool you are curious about: three tasks, identical prompts, a scored grid against your current tool, and a dated decision.",
        "Une fiche de test complète pour un outil qui vous intrigue : trois tâches, des prompts identiques, une grille notée face à votre outil actuel, et une décision datée."),
      prompt: B("I want to test [TOOL TO TEST] against [CURRENT TOOL OR \"BY HAND\"] in one hour.\nMy three real tasks: [TASK 1], [TASK 2], [TASK 3]. Data I can use: [ANONYMISED OR PUBLIC MATERIAL].\n1. Write one prompt per task, identical for both tools.\n2. For each task, three criteria to judge the result.\n3. A grid: quality, privacy, cost, lock-in, scored 1 to 3, with the meaning of 1 and 3.\n4. The questions I must answer myself from the official privacy policy, pricing page and export documentation, dated today.\n5. A decision template: adopt / trial until [DATE] / drop, with one sentence of justification.\nDo not state any price or feature from memory.",
        "Je veux tester [OUTIL À TESTER] face à [OUTIL ACTUEL OU « À LA MAIN »] en une heure.\nMes trois tâches réelles : [TÂCHE 1], [TÂCHE 2], [TÂCHE 3]. Données utilisables : [MATÉRIEL ANONYMISÉ OU PUBLIC].\n1. Écris un prompt par tâche, identique pour les deux outils.\n2. Pour chaque tâche, trois critères pour juger le résultat.\n3. Une grille : qualité, confidentialité, coût, dépendance, notés de 1 à 3, avec le sens de 1 et de 3.\n4. Les questions que je dois trancher moi-même avec la politique de confidentialité, la page des tarifs et la documentation d'export officielles, datées d'aujourd'hui.\n5. Un modèle de décision : adopter / essayer jusqu'au [DATE] / écarter, avec une phrase de justification.\nNe cite aucun prix ni aucune fonction de mémoire."),
      check: [
        B("The same prompts were pasted, unchanged, into both tools", "Les mêmes prompts ont été collés, sans changement, dans les deux outils"),
        B("No client data entered the tool under test", "Aucune donnée client n'est entrée dans l'outil testé"),
        B("Privacy, cost and export lines cite a dated official page", "Les lignes confidentialité, coût et export citent une page officielle datée"),
        B("The decision is written, with a review date if it is a trial", "La décision est écrite, avec une date de bilan s'il s'agit d'un essai"),
      ],
      bonus: B("Run the same protocol a second time, one month later, on the tool you kept. If the scores have moved, the release notes of that month probably explain why.",
        "Repassez le même protocole un mois plus tard sur l'outil retenu. Si les notes ont bougé, les notes de version de ce mois-là expliquent sans doute pourquoi."),
    },
    more: [
      { q: B("During the test, the new tool gives a better report on the first try, but the current tool matches it after one follow-up prompt. How do you note it?",
          "Pendant le test, le nouvel outil donne un meilleur compte rendu du premier coup, l'actuel l'égale après une relance. Comment le notez-vous ?"),
        options: [
          B("As a large gain, since the first answer is what counts", "Comme un gain important, la première réponse étant ce qui compte"),
          B("As a small gain, to weigh against cost and the time to switch", "Comme un faible gain, à peser contre le coût et le temps de bascule"),
          B("As no gain at all, since both tools reach the same result", "Comme aucun gain, puisque les deux outils arrivent au même résultat"),
        ],
        answer: 1,
        why: B("One prompt saved is a real but small gain. Changing tools costs learning, migration and sometimes a new plan: the gain must outweigh these costs, not just exist.",
          "Une relance économisée est un gain réel mais faible. Changer d'outil coûte un apprentissage, une migration et parfois une nouvelle offre : le gain doit dépasser ces coûts, pas seulement exister.") },
      { q: B("Why is the decision \"trial until a date\" written with that date?",
          "Pourquoi la décision « essayer jusqu'à une date » s'écrit-elle avec cette date ?"),
        options: [
          B("Because free trials of tools always end after a fixed period", "Parce que les essais gratuits des outils finissent toujours à date fixe"),
          B("Because the publisher's terms require a date for any trial", "Parce que les conditions de l'éditeur exigent une date pour tout essai"),
          B("Because without a date the trial becomes a habit nobody reviews", "Parce que sans date l'essai devient une habitude que personne ne revoit"),
        ],
        answer: 2,
        why: B("An open-ended trial is how tools pile up. A date written in the vault and in the calendar forces the review: keep, with reasons, or drop.",
          "Un essai sans fin est la façon dont les outils s'empilent. Une date notée dans le coffre et dans l'agenda oblige au bilan : garder, avec des raisons, ou écarter.") },
    ],
  },
}

const METHOD_DEEP: Record<string, Deepening> = {
  [deepKey(M1, 'vt-why-method')]: {
    intro: B("New AI tools, models and features appear every week, and trying to follow them all leads to fatigue rather than knowledge. This lesson explains why a watch method works better than the stream: it starts from your questions, relies on a few sources and happens at a fixed time. You will follow Camille, project manager at Agence Pivot, a fictional six-person communication agency; the course follows her through all its modules. At the end, you will have written a watch charter of one page, which states what you look for, where, when, and what you ignore.",
      "De nouveaux outils, modèles et fonctions IA apparaissent chaque semaine, et vouloir tout suivre mène à la fatigue plutôt qu'au savoir. Ce cours explique pourquoi une méthode de veille fonctionne mieux que le flot : elle part de vos questions, s'appuie sur peu de sources et a lieu à heure fixe. Vous suivrez Camille, cheffe de projet à l'Agence Pivot, agence de communication fictive de six personnes ; la formation l'accompagne dans tous ses modules. À la fin, vous aurez écrit une charte de veille d'une page, qui dit ce que vous cherchez, où, quand, et ce que vous ignorez."),
    concepts: [
      { term: B('Watch question', 'Question de veille'),
        def: B("A question drawn from your work that a tool or a piece of news could answer, such as \"how can we draft meeting reports faster?\". It decides what deserves attention.",
          "Une question tirée de votre travail à laquelle un outil ou une nouveauté pourrait répondre, comme « comment rédiger plus vite nos comptes rendus ? ». Elle décide de ce qui mérite l'attention.") },
      { term: B('Watch charter', 'Charte de veille'),
        def: B("A short written document: questions, sources, weekly slot, place where decisions are recorded, and what is deliberately ignored. It can be shared and revised.",
          "Un court document écrit : questions, sources, créneau hebdomadaire, endroit où les décisions sont notées, et ce qui est ignoré exprès. Il se partage et se révise.") },
      { term: B('Signal and noise', 'Signal et bruit'),
        def: B("The signal is what changes a decision for you; the noise is everything else, even when it is true and interesting. The same news can be signal for one team and noise for another.",
          "Le signal est ce qui change une décision pour vous ; le bruit, tout le reste, même vrai et intéressant. La même nouvelle peut être un signal pour une équipe et du bruit pour une autre.") },
      { term: B('Weekly slot', 'Créneau hebdomadaire'),
        def: B("A fixed time, written in the calendar, when the watch is read and decided upon. Outside it, a new item is only noted in a few seconds.",
          "Un moment fixe, inscrit à l'agenda, où la veille est lue et tranchée. En dehors, une nouveauté est seulement notée, en quelques secondes.") },
    ],
    walkthrough: {
      title: B("Camille writes the watch charter of Agence Pivot, on one page.",
        "Camille rédige la charte de veille de l'Agence Pivot, sur une page."),
      steps: [
        B("She lists the last five AI announcements she read and notes, for each, whether it changed anything at the agency. Why: the count is usually low, and that measures the cost of following the stream.",
          "Elle liste les cinq dernières annonces IA qu'elle a lues et note, pour chacune, si elle a changé quelque chose à l'agence. Pourquoi : le compte est souvent faible, et il mesure le coût du flot."),
        B("She asks each colleague which task takes the most time or irritates the most. Why: the watch questions must come from the team's work, not from what is trending.",
          "Elle demande à chaque collègue quelle tâche prend le plus de temps ou agace le plus. Pourquoi : les questions de veille doivent venir du travail de l'équipe, pas de ce qui fait parler."),
        B("She writes three questions: drafting meeting reports, producing social posts in the agency's tone, reading long tender documents. Why: three is enough to sort, and few enough to remember.",
          "Elle écrit trois questions : rédiger les comptes rendus, produire des posts dans le ton de l'agence, lire de longs cahiers des charges. Pourquoi : trois suffisent pour trier, et se retiennent."),
        B("She books thirty minutes every Friday morning and names the place where decisions go: the agency's watch vault. Why: a fixed slot lets her note news during the week without dealing with it.",
          "Elle réserve trente minutes chaque vendredi matin et nomme l'endroit des décisions : le coffre de veille de l'agence. Pourquoi : un créneau fixe permet de noter les nouveautés dans la semaine sans les traiter."),
        B("She adds a list of what the agency does not follow: rumours, leaderboards, demos without a date or source, tools with no clear publisher. Why: saying no in advance avoids deciding again each time.",
          "Elle ajoute la liste de ce que l'agence ne suit pas : rumeurs, classements, démonstrations sans date ni source, outils sans éditeur identifiable. Pourquoi : dire non d'avance évite de redécider à chaque fois."),
      ],
    },
    mistakes: [
      { wrong: B("Subscribing to every newsletter and account that talks about AI, so as not to miss anything.",
          "S'abonner à toutes les lettres et à tous les comptes qui parlent d'IA, pour ne rien manquer."),
        fix: B("Start from three questions and keep only the sources that answer them. Missing a piece of news that concerns none of your questions costs nothing.",
          "Partez de trois questions et ne gardez que les sources qui y répondent. Manquer une nouveauté qui ne concerne aucune de vos questions ne coûte rien.") },
      { wrong: B("Reading the news a little every day, between two tasks, without ever deciding anything.",
          "Lire les nouveautés un peu chaque jour, entre deux tâches, sans jamais rien décider."),
        fix: B("Note during the week, decide in the weekly slot. Each item read in the slot ends with a decision: test, file, or drop.",
          "Notez dans la semaine, tranchez pendant le créneau. Chaque sujet lu pendant le créneau se termine par une décision : tester, classer ou écarter.") },
      { wrong: B("Keeping the charter in your head because you are the only one doing the watch.",
          "Garder la charte en tête parce qu'on est seul à faire la veille."),
        fix: B("Write it down, on one page, and share it. A written charter survives holidays, can be passed on, and is revised each quarter with the team.",
          "Écrivez-la, sur une page, et partagez-la. Une charte écrite survit aux congés, se transmet et se révise chaque trimestre avec l'équipe.") },
    ],
    recap: [
      B("Following the stream tires without informing: most news concerns other uses.", "Suivre le flot épuise sans informer : la plupart des nouveautés concernent d'autres usages."),
      B("A method starts from questions drawn from your work, not from announcements.", "Une méthode part de questions tirées de votre travail, pas des annonces."),
      B("A weekly slot separates noting, which takes seconds, from deciding.", "Un créneau hebdomadaire sépare noter, qui prend quelques secondes, et décider."),
      B("A written charter, on one page, can be shared, passed on and revised.", "Une charte écrite, sur une page, se partage, se transmet et se révise."),
    ],
    further: B("After a month, reread your charter and the decisions recorded. Remove a question that produced nothing, and add the one that came up in the team. Module 4 of this course comes back to this weekly routine and turns it into a thirty-minute ritual.",
      "Au bout d'un mois, relisez votre charte et les décisions notées. Retirez une question qui n'a rien produit, ajoutez celle qui est apparue dans l'équipe. Le module 4 de cette formation revient sur cette routine hebdomadaire et en fait un rituel de trente minutes."),
    more: [
      { q: B("On Wednesday, a colleague sends Camille an exciting video about a new tool. According to the charter, what does she do?",
          "Mercredi, un collègue envoie à Camille une vidéo enthousiaste sur un nouvel outil. D'après la charte, que fait-elle ?"),
        options: [
          B("She notes it in the vault's inbox, to be examined on Friday", "Elle la note dans l'entrée du coffre, pour l'examiner vendredi"),
          B("She stops her current task to test the tool right away", "Elle interrompt sa tâche en cours pour tester l'outil aussitôt"),
          B("She deletes the message, since videos are never reliable", "Elle supprime le message, les vidéos n'étant jamais fiables"),
        ],
        answer: 0,
        why: B("Noting takes seconds and loses nothing; the Friday slot decides with the sources and the questions. A video is not proof, but it can point to something worth checking.",
          "Noter prend quelques secondes et ne perd rien ; le créneau du vendredi tranche avec les sources et les questions. Une vidéo n'est pas une preuve, mais elle peut signaler quelque chose à vérifier.") },
      { q: B("Which of these is a good watch question for Agence Pivot?",
          "Laquelle de ces questions est une bonne question de veille pour l'Agence Pivot ?"),
        options: [
          B("What are the most talked-about AI tools of the month?", "Quels sont les outils IA dont on parle le plus ce mois-ci ?"),
          B("Which model scores highest on public benchmarks today?", "Quel modèle obtient les meilleurs scores aux tests publics ?"),
          B("How can we summarise long tender documents more reliably?", "Comment synthétiser plus sûrement les longs cahiers des charges ?"),
        ],
        answer: 2,
        why: B("A good watch question comes from a real task and can be tested. Popularity and benchmarks describe the market, not the agency's needs.",
          "Une bonne question de veille vient d'une tâche réelle et peut se tester. La popularité et les tests publics décrivent le marché, pas les besoins de l'agence.") },
    ],
  },

  [deepKey(M1, 'vt-sources')]: {
    intro: B("A watch is only as good as its sources. This lesson ranks them by reliability, from the publisher's release notes and documentation to the anonymous post, and shows how to follow them without depending on a social network's algorithm, through an RSS reader or email alerts. Camille builds the source table of Agence Pivot for the tools the agency pays for. At the end, you will know where to check a claim about a tool, how to date it, and how to keep your sources in one place.",
      "Une veille ne vaut que par ses sources. Ce cours les classe par fiabilité, des notes de version et de la documentation de l'éditeur jusqu'au message anonyme, et montre comment les suivre sans dépendre de l'algorithme d'un réseau social, par un lecteur RSS ou des alertes e-mail. Camille construit le tableau des sources de l'Agence Pivot pour les outils que l'agence paie. À la fin, vous saurez où vérifier une affirmation sur un outil, comment la dater, et comment garder vos sources en un seul endroit."),
    concepts: [
      { term: B('Primary source', 'Source primaire'),
        def: B("A document written by the publisher that commits it: release notes, documentation, pricing page, privacy policy, terms. It is the reference when other sources disagree.",
          "Un document écrit par l'éditeur et qui l'engage : notes de version, documentation, page des tarifs, politique de confidentialité, conditions. Il fait référence quand les autres sources divergent.") },
      { term: B('Release notes', 'Notes de version'),
        def: B("The dated list of changes to a product: additions, modifications, removals, often with the plans and regions concerned. Also called changelog.",
          "La liste datée des changements d'un produit : ajouts, modifications, retraits, souvent avec les offres et régions concernées. On parle aussi de changelog.") },
      { term: B('RSS feed', 'Flux RSS'),
        def: B("A standard format that lets a site publish its new items so that a reader app collects them, in order, without an algorithm sorting them.",
          "Un format standard qui permet à un site de publier ses nouveautés pour qu'une application de lecture les rassemble, dans l'ordre, sans algorithme qui les trie.") },
      { term: B('Status page', "Page d'état du service"),
        def: B("A page where a publisher reports outages and incidents. It explains a tool that suddenly fails, and shows how reliable the service is over time.",
          "Une page où l'éditeur signale pannes et incidents. Elle explique un outil qui flanche soudain, et montre la fiabilité du service dans la durée.") },
      { term: B('Secondary source', 'Source secondaire'),
        def: B("A newsletter, article, video or post that relays or comments on the news. Useful to spot it; a good one links to the primary source.",
          "Une lettre, un article, une vidéo ou un message qui relaie ou commente la nouveauté. Utile pour la repérer ; une bonne source secondaire renvoie à la primaire.") },
    ],
    walkthrough: {
      title: B("Camille builds the source table of Agence Pivot for the four tools the agency pays for.",
        "Camille construit le tableau des sources de l'Agence Pivot pour les quatre outils que l'agence paie."),
      steps: [
        B("She lists the tools from the agency's bank statements, not from memory. Why: the tools actually paid for are those whose changes affect the agency first.",
          "Elle liste les outils à partir des relevés bancaires de l'agence, pas de mémoire. Pourquoi : les outils réellement payés sont ceux dont les changements touchent l'agence en premier."),
        B("For each one, she opens the publisher's help center or documentation and finds the release notes, the blog, the status page and the privacy policy. Why: starting from the publisher avoids old pages found by a search engine.",
          "Pour chacun, elle ouvre le centre d'aide ou la documentation de l'éditeur et trouve les notes de version, le blog, la page d'état et la politique de confidentialité. Pourquoi : partir de l'éditeur évite les pages anciennes remontées par un moteur."),
        B("She adds the available feeds to Inoreader and creates an email filter for the publishers that only send email. Why: everything arrives in two places she reads in her Friday slot.",
          "Elle ajoute les flux disponibles à Inoreader et crée un filtre e-mail pour les éditeurs qui n'écrivent que par e-mail. Pourquoi : tout arrive en deux endroits qu'elle lit pendant son créneau du vendredi."),
        B("She chooses two newsletters, each written by a named author who links to primary sources, and unsubscribes from the others. Why: two good relays are enough to spot what the official feeds announce quietly.",
          "Elle choisit deux lettres, chacune écrite par un auteur nommé qui renvoie aux sources primaires, et se désabonne des autres. Pourquoi : deux bons relais suffisent pour repérer ce que les flux officiels annoncent discrètement."),
        B("She adds a column \"last checked\" to the table and fills in today's date. Why: pages move and feeds disappear; the date says when to look again.",
          "Elle ajoute au tableau une colonne « dernière vérification » et y inscrit la date du jour. Pourquoi : les pages bougent et les flux disparaissent ; la date dit quand regarder à nouveau."),
      ],
    },
    mistakes: [
      { wrong: B("Asking an assistant what its latest features are and taking the answer as current.",
          "Demander à un assistant quelles sont ses dernières fonctions et prendre la réponse pour actuelle."),
        fix: B("An assistant's knowledge stops at its training date. Use it to find the right official pages, then read the dated release notes yourself.",
          "Les connaissances d'un assistant s'arrêtent à sa date d'entraînement. Servez-vous-en pour trouver les bonnes pages officielles, puis lisez vous-même les notes de version datées.") },
      { wrong: B("Relaying a feature seen in a screenshot to the whole team.",
          "Relayer à toute l'équipe une fonction vue sur une capture d'écran."),
        fix: B("Find the publisher's page first, note its date and the plan concerned. If you cannot find it, write the news as \"unconfirmed\" in the vault.",
          "Trouvez d'abord la page de l'éditeur, notez sa date et l'offre concernée. Si vous ne la trouvez pas, notez la nouvelle comme « non confirmée » dans le coffre.") },
      { wrong: B("Following publishers only on social networks, where their posts get lost among others.",
          "Suivre les éditeurs uniquement sur les réseaux sociaux, où leurs messages se perdent parmi d'autres."),
        fix: B("Subscribe to their feeds in an RSS reader, or to their email alerts. You see everything, in order, at the time you choose.",
          "Abonnez-vous à leurs flux dans un lecteur RSS, ou à leurs alertes e-mail. Vous voyez tout, dans l'ordre, au moment que vous choisissez.") },
    ],
    recap: [
      B("The publisher's release notes, documentation and policies are the primary sources.", "Notes de version, documentation et politiques de l'éditeur sont les sources primaires."),
      B("Every claim you keep has a source page and the date of that page.", "Chaque affirmation retenue a une page source et la date de cette page."),
      B("An RSS reader gathers sources in order, without an algorithm choosing for you.", "Un lecteur RSS rassemble les sources dans l'ordre, sans algorithme qui choisit pour vous."),
      B("Two newsletters with named authors who cite their sources are enough.", "Deux lettres signées, qui citent leurs sources, suffisent."),
    ],
    further: B("Pick one tool you use daily and read its release notes for the last three months, from the official page. Note one change you had not noticed and one removal. You will see how much the official notes say that relays leave out.",
      "Choisissez un outil utilisé chaque jour et lisez ses notes de version des trois derniers mois, depuis la page officielle. Notez un changement que vous n'aviez pas remarqué et un retrait. Vous verrez tout ce que disent les notes officielles et que les relais omettent."),
    more: [
      { q: B("Camille finds two pages about the same feature: a blog post from last year and this month's release notes, which differ. Which one does she file?",
          "Camille trouve deux pages sur la même fonction : un billet de blog de l'an dernier et les notes de version du mois, qui divergent. Laquelle retient-elle ?"),
        options: [
          B("The blog post, which explains the feature in more detail", "Le billet de blog, qui explique la fonction plus en détail"),
          B("This month's release notes, the most recent primary source", "Les notes de version du mois, source primaire la plus récente"),
          B("Both of them, leaving it to colleagues to choose for themselves", "Les deux, en laissant chaque collègue choisir lui-même"),
        ],
        answer: 1,
        why: B("When two publisher pages differ, the more recent dated one usually describes the current state. The old post can be kept as history, marked as outdated.",
          "Quand deux pages de l'éditeur divergent, la plus récente et datée décrit en général l'état actuel. L'ancien billet peut rester comme historique, marqué comme dépassé.") },
      { q: B("What makes a newsletter worth keeping in a watch?",
          "Qu'est-ce qui rend une lettre d'information digne d'être gardée dans une veille ?"),
        options: [
          B("It is sent every day, so nothing is ever missed", "Elle arrive chaque jour, pour ne jamais rien manquer"),
          B("It has the largest number of subscribers in its field", "Elle a le plus grand nombre d'abonnés de son domaine"),
          B("It has a named author and links to the primary sources", "Elle a un auteur nommé et renvoie aux sources primaires"),
        ],
        answer: 2,
        why: B("A named author can be judged over time, and links let you check every claim. Frequency and audience say nothing about accuracy.",
          "Un auteur nommé se juge dans la durée, et les liens permettent de vérifier chaque affirmation. La fréquence et l'audience ne disent rien de l'exactitude.") },
    ],
  },

  [deepKey(M1, 'vt-obsidian-watch')]: {
    intro: B("A watch is useful only if you can find, months later, what was read, tested and decided. This lesson shows how to keep it in Obsidian, an app that stores notes as Markdown files in a folder on your computer, called a vault. You will set up three folders, an item template and a few tags, then use an AI to fill notes from pasted sources and to summarise the week, without letting it invent. Camille builds the Pivot watch vault. At the end, every item you keep will be dated, sourced and tied to a decision.",
      "Une veille n'est utile que si l'on retrouve, des mois plus tard, ce qui a été lu, testé et décidé. Ce cours montre comment la tenir dans Obsidian, une application qui range les notes en fichiers Markdown dans un dossier de votre ordinateur, appelé coffre. Vous mettrez en place trois dossiers, un modèle de fiche et quelques tags, puis utiliserez une IA pour remplir les fiches à partir de sources collées et résumer la semaine, sans la laisser inventer. Camille construit le coffre de veille Pivot. À la fin, chaque sujet retenu sera daté, sourcé et relié à une décision."),
    concepts: [
      { term: B('Vault', 'Coffre'),
        def: B("In Obsidian, the folder that contains your notes. They are plain Markdown text files, readable by any editor, which you can back up or sync as you wish.",
          "Dans Obsidian, le dossier qui contient vos notes. Ce sont des fichiers texte Markdown ordinaires, lisibles par tout éditeur, que vous sauvegardez ou synchronisez à votre guise.") },
      { term: B('Template', 'Modèle'),
        def: B("A note with fixed fields that is copied for each new item. The Templates core plugin of Obsidian inserts it in a new note.",
          "Une note à champs fixes, copiée pour chaque nouveau sujet. Le plugin intégré Modèles d'Obsidian l'insère dans une nouvelle note.") },
      { term: B('Properties', 'Propriétés'),
        def: B("Structured fields at the top of a note (tool, date, status). They make it possible to search and list notes, for instance all pending decisions.",
          "Des champs structurés en tête de note (outil, date, statut). Ils permettent de chercher et de lister les notes, par exemple toutes les décisions en attente.") },
      { term: B('Community plugin', 'Plugin communautaire'),
        def: B("An extension written by a third party, not by Obsidian. Some connect the vault to an AI model, online or local; each one says, in its documentation, what it sends.",
          "Une extension écrite par un tiers, pas par Obsidian. Certaines relient le coffre à un modèle d'IA, en ligne ou local ; chacune dit, dans sa documentation, ce qu'elle envoie.") },
      { term: B('Grounded summary', 'Résumé ancré'),
        def: B("A summary that uses only the text provided and says what is missing, instead of completing from the model's memory.",
          "Un résumé qui n'utilise que le texte fourni et signale ce qui manque, au lieu de compléter avec la mémoire du modèle.") },
    ],
    walkthrough: {
      title: B("Camille sets up the Pivot watch vault and processes her first three captures.",
        "Camille met en place le coffre de veille Pivot et traite ses trois premières captures."),
      steps: [
        B("She creates a vault named Pivot watch with three folders: Inbox, Items, Weeks. Why: separating raw captures from checked notes shows at a glance what remains to process.",
          "Elle crée un coffre nommé Veille Pivot avec trois dossiers : Entrée, Fiches, Semaines. Pourquoi : séparer les captures brutes des fiches vérifiées montre d'un coup d'oeil ce qui reste à traiter."),
        B("She writes the item template: properties (tool, source date, link, question, decision) and three sections. She enables the Templates core plugin to insert it. Why: identical notes can be compared and listed.",
          "Elle écrit le modèle de fiche : propriétés (outil, date de la source, lien, question, décision) et trois sections. Elle active le plugin intégré Modèles pour l'insérer. Pourquoi : des fiches identiques se comparent et se listent."),
        B("She installs the official Obsidian Web Clipper extension in her browser and clips three articles into Inbox. Why: the capture keeps the text and the link, which the AI and the check will need.",
          "Elle installe dans son navigateur l'extension officielle Obsidian Web Clipper et capture trois articles dans Entrée. Pourquoi : la capture garde le texte et le lien, dont l'IA et la vérification auront besoin."),
        B("For each capture, she pastes the text into an assistant with the template and the rule \"only this text, write not stated if missing\". Why: the AI saves the typing, not the judgement.",
          "Pour chaque capture, elle colle le texte dans un assistant avec le modèle et la règle « uniquement ce texte, écrire non précisé si absent ». Pourquoi : l'IA épargne la saisie, pas le jugement."),
        B("She compares each field with the source, corrects one wrong plan name, fills the decision and moves the note to Items. Why: a note becomes reliable once someone has checked it against the source.",
          "Elle compare chaque champ à la source, corrige un nom d'offre erroné, remplit la décision et déplace la fiche dans Fiches. Pourquoi : une fiche devient fiable quand quelqu'un l'a vérifiée contre la source."),
        B("On Friday, she pastes the week's notes into the assistant and asks for a summary by question in the Weeks folder. Why: the summary works from checked notes, so it inherits their reliability.",
          "Le vendredi, elle colle les fiches de la semaine dans l'assistant et demande une synthèse par question, rangée dans Semaines. Pourquoi : la synthèse part de fiches vérifiées, elle hérite donc de leur fiabilité."),
      ],
    },
    mistakes: [
      { wrong: B("Asking an AI to summarise an article from its title or its link, without pasting the text.",
          "Demander à une IA de résumer un article à partir de son titre ou de son lien, sans coller le texte."),
        fix: B("Paste the full text and require the AI to use only it. Many assistants cannot open every link, and some will answer from memory without saying so.",
          "Collez le texte complet et exigez que l'IA n'utilise que lui. Beaucoup d'assistants ne peuvent pas ouvrir tous les liens, et certains répondent de mémoire sans le dire.") },
      { wrong: B("Installing several AI plugins in the vault without reading what they send.",
          "Installer plusieurs plugins d'IA dans le coffre sans lire ce qu'ils envoient."),
        fix: B("Read each plugin's documentation: does it send the current note, a selection or the whole vault, and to which service? Keep confidential notes out of a vault connected to an online model.",
          "Lisez la documentation de chaque plugin : envoie-t-il la note courante, une sélection ou tout le coffre, et à quel service ? Gardez les notes confidentielles hors d'un coffre relié à un modèle en ligne.") },
      { wrong: B("Capturing everything and never emptying the Inbox.",
          "Tout capturer et ne jamais vider le dossier Entrée."),
        fix: B("Empty it at each weekly slot: each capture becomes a note tied to a question, or is deleted. A full Inbox is a stream moved into a folder.",
          "Videz-le à chaque créneau hebdomadaire : chaque capture devient une fiche liée à une question, ou est supprimée. Un dossier Entrée plein, c'est le flot déplacé dans un dossier.") },
    ],
    recap: [
      B("Obsidian keeps notes as Markdown files you own, readable without the app.", "Obsidian garde les notes en fichiers Markdown qui vous appartiennent, lisibles sans l'application."),
      B("A template with fixed fields turns each capture into a comparable note.", "Un modèle à champs fixes transforme chaque capture en fiche comparable."),
      B("The AI fills the template from the pasted text only, and names what is missing.", "L'IA remplit le modèle à partir du seul texte collé, et nomme ce qui manque."),
      B("Every note ends with a decision, and the Inbox is emptied each week.", "Chaque fiche se termine par une décision, et le dossier Entrée se vide chaque semaine."),
    ],
    further: B("Once you have twenty notes, try listing them by property: all pending decisions, or all notes for one tool. The community plugin Dataview is a common way to do this; check its documentation for the current syntax. Module 3 of this course comes back to Obsidian as a second brain.",
      "Une fois vingt fiches écrites, essayez de les lister par propriété : toutes les décisions en attente, ou toutes les fiches d'un outil. Le plugin communautaire Dataview est une façon courante de le faire ; vérifiez sa syntaxe actuelle dans sa documentation. Le module 3 de cette formation revient sur Obsidian comme second cerveau."),
    more: [
      { q: B("Camille wants an AI plugin to summarise her watch notes, but the vault also contains notes about clients. What does she do first?",
          "Camille veut qu'un plugin d'IA résume ses fiches de veille, mais le coffre contient aussi des notes sur des clients. Que fait-elle d'abord ?"),
        options: [
          B("She checks what the plugin sends, and keeps client notes elsewhere", "Elle vérifie ce que le plugin envoie, et range les notes clients ailleurs"),
          B("She installs it, since plugins only read the note that is open", "Elle l'installe, les plugins ne lisant que la note ouverte"),
          B("She gives up on AI in Obsidian, since no plugin can be trusted", "Elle renonce à l'IA dans Obsidian, aucun plugin n'étant sûr"),
        ],
        answer: 0,
        why: B("What a plugin sends depends on the plugin and its settings. Reading its documentation and separating confidential notes keeps the benefit without exposing client data.",
          "Ce qu'un plugin envoie dépend du plugin et de ses réglages. Lire sa documentation et séparer les notes confidentielles garde le bénéfice sans exposer les données clients.") },
      { q: B("Why is the Obsidian format a good choice for a watch meant to last several years?",
          "Pourquoi le format d'Obsidian convient-il à une veille censée durer plusieurs années ?"),
        options: [
          B("Because Obsidian summarises old notes automatically with AI", "Parce qu'Obsidian résume automatiquement les vieilles notes par IA"),
          B("Because the notes are plain text files that any tool can read", "Parce que les notes sont des fichiers texte que tout outil sait lire"),
          B("Because the notes are stored on Obsidian's servers by default", "Parce que les notes sont stockées par défaut sur les serveurs d'Obsidian"),
        ],
        answer: 1,
        why: B("Markdown files in a local folder do not depend on one app: if you change tools, the notes remain readable. Syncing is optional and chosen by you.",
          "Des fichiers Markdown dans un dossier local ne dépendent pas d'une application : si vous changez d'outil, les notes restent lisibles. La synchronisation est facultative et choisie par vous.") },
    ],
  },

  [deepKey(M1, 'vt-one-hour-test')]: {
    intro: B("Sooner or later, a tool catches your attention and you must decide whether it deserves a place. This lesson gives a one-hour protocol: three real tasks, identical prompts in the new tool and in the current one, a reading of the official privacy, pricing and export pages, and a score on four criteria (quality, privacy, cost, lock-in). Camille tests a new writing assistant against the one the agency already uses. At the end, you will produce a dated decision (adopt, trial until a date, or drop) instead of an impression.",
      "Tôt ou tard, un outil attire votre attention et il faut décider s'il mérite une place. Ce cours donne un protocole d'une heure : trois tâches réelles, des prompts identiques dans le nouvel outil et dans l'actuel, une lecture des pages officielles de confidentialité, de tarifs et d'export, et une note sur quatre critères (qualité, confidentialité, coût, dépendance). Camille teste un nouvel assistant de rédaction face à celui que l'agence utilise déjà. À la fin, vous produirez une décision datée (adopter, essayer jusqu'à une date, ou écarter) plutôt qu'une impression."),
    concepts: [
      { term: B('Reference', 'Référence'),
        def: B("What the new tool is compared with: the tool already in use, or the task done by hand. Without a reference, any result looks good.",
          "Ce à quoi le nouvel outil est comparé : l'outil déjà utilisé, ou la tâche faite à la main. Sans référence, tout résultat paraît bon.") },
      { term: B('Test set', 'Jeu de test'),
        def: B("The three real tasks of the test, with their prompts and expected results, kept in the vault so that the next tool can be tested the same way.",
          "Les trois tâches réelles du test, avec leurs prompts et leurs résultats attendus, gardées dans le coffre pour tester le prochain outil de la même façon.") },
      { term: B('Lock-in', 'Dépendance'),
        def: B("What it would cost to leave the tool: work stored in a closed format, no export, habits built on a feature nobody else has.",
          "Ce qu'il coûterait de quitter l'outil : un travail stocké dans un format fermé, pas d'export, des habitudes bâties sur une fonction que personne d'autre n'a.") },
      { term: B('Total cost', 'Coût complet'),
        def: B("The price on the official pricing page on the day of the test, plus learning time and migration. Prices change: note the date of the page.",
          "Le prix de la page officielle des tarifs le jour du test, plus le temps d'apprentissage et de migration. Les prix changent : notez la date de la page.") },
    ],
    walkthrough: {
      title: B("Camille tests a new writing assistant against the agency's current assistant, in one hour.",
        "Camille teste en une heure un nouvel assistant de rédaction face à l'assistant actuel de l'agence."),
      steps: [
        B("Minutes 0 to 10: she picks three tasks (a meeting report, three social posts, a tender summary) and writes the expected result for each. Why: criteria written before the test cannot be bent by a pleasant surprise.",
          "Minutes 0 à 10 : elle choisit trois tâches (un compte rendu, trois posts, une synthèse de cahier des charges) et écrit le résultat attendu pour chacune. Pourquoi : des critères écrits avant le test ne se plient pas à une bonne surprise."),
        B("She replaces names, figures and client details with neutral placeholders. Why: until the privacy terms are read, no client data enters a new tool.",
          "Elle remplace noms, chiffres et détails clients par des éléments neutres. Pourquoi : tant que les conditions de confidentialité ne sont pas lues, aucune donnée client n'entre dans un nouvel outil."),
        B("Minutes 10 to 40: she pastes the same prompts in both tools and notes, task by task, which result is closer to the expected one, and how many follow-ups each needed. Why: identical inputs make the comparison fair.",
          "Minutes 10 à 40 : elle colle les mêmes prompts dans les deux outils et note, tâche par tâche, quel résultat est le plus proche de l'attendu, et combien de relances chacun a demandé. Pourquoi : des entrées identiques rendent la comparaison loyale."),
        B("Minutes 40 to 50: she reads the privacy policy, the pricing page and the export documentation, and copies the key sentences with the date. Why: these pages change, and the decision must say what they said that day.",
          "Minutes 40 à 50 : elle lit la politique de confidentialité, la page des tarifs et la documentation d'export, et recopie les phrases clés avec la date. Pourquoi : ces pages changent, et la décision doit dire ce qu'elles disaient ce jour-là."),
        B("Minutes 50 to 60: she scores the four criteria from 1 to 3, writes \"trial until the end of next month\" and books the review in the calendar. Why: a dated trial ends with a real decision rather than a habit.",
          "Minutes 50 à 60 : elle note les quatre critères de 1 à 3, écrit « essai jusqu'à la fin du mois prochain » et inscrit le bilan à l'agenda. Pourquoi : un essai daté se termine par une vraie décision plutôt que par une habitude."),
      ],
    },
    mistakes: [
      { wrong: B("Testing a tool with the examples from its own demo or landing page.",
          "Tester un outil avec les exemples de sa propre démonstration ou de sa page d'accueil."),
        fix: B("Use three tasks from your work, with your kind of material, anonymised. The demo shows what the tool does best, not what it does for you.",
          "Utilisez trois tâches de votre travail, avec votre type de matériel, anonymisé. La démonstration montre ce que l'outil fait de mieux, pas ce qu'il fait pour vous.") },
      { wrong: B("Pasting real client documents into a tool whose terms you have not read.",
          "Coller de vrais documents clients dans un outil dont on n'a pas lu les conditions."),
        fix: B("Test on anonymised or public material. Read the privacy policy and, for a team, the business terms before any real data goes in.",
          "Testez sur du matériel anonymisé ou public. Lisez la politique de confidentialité et, pour une équipe, les conditions professionnelles avant toute donnée réelle.") },
      { wrong: B("Adding up all the criteria into one global score.",
          "Additionner tous les critères en une note globale."),
        fix: B("Keep the four scores separate and decide by weighing them. A global score lets an excellent quality hide a serious privacy problem.",
          "Gardez les quatre notes séparées et décidez en les pesant. Une note globale laisse une excellente qualité masquer un problème sérieux de confidentialité.") },
    ],
    recap: [
      B("A test compares the new tool with a reference, on your own tasks.", "Un test compare le nouvel outil à une référence, sur vos propres tâches."),
      B("The same prompts, on anonymised data, go into both tools.", "Les mêmes prompts, sur des données anonymisées, vont dans les deux outils."),
      B("Privacy, cost and export are read on the official pages, with their date.", "Confidentialité, coût et export se lisent sur les pages officielles, datées."),
      B("Four separate scores lead to a written, dated decision.", "Quatre notes séparées mènent à une décision écrite et datée."),
    ],
    further: B("Keep your test set in the vault and reuse it for each new tool: after a few tests, you will have a comparable history. Module 4 of this course shows how to turn these decisions into a tools inventory, and how to remove a tool cleanly.",
      "Gardez votre jeu de test dans le coffre et réutilisez-le pour chaque nouvel outil : après quelques tests, vous aurez un historique comparable. Le module 4 de cette formation montre comment faire de ces décisions un inventaire d'outils, et comment retirer un outil proprement."),
    more: [
      { q: B("The pricing page of the tested tool shows no price for teams, only \"contact us\". How does Camille fill the cost line?",
          "La page des tarifs de l'outil testé n'affiche aucun prix pour les équipes, seulement « nous contacter ». Comment Camille remplit-elle la ligne coût ?"),
        options: [
          B("She estimates a price from what similar tools usually cost", "Elle estime un prix d'après ce que coûtent des outils similaires"),
          B("She writes \"price on request\", dated, and asks for a quote", "Elle écrit « prix sur demande », daté, et demande un devis"),
          B("She leaves the line empty, since cost is a minor criterion", "Elle laisse la ligne vide, le coût étant un critère mineur"),
        ],
        answer: 1,
        why: B("An estimate would be an invented figure in a decision document. Writing what the page says, with the date, and asking for a quote keeps the file honest.",
          "Une estimation serait un chiffre inventé dans un document de décision. Écrire ce que dit la page, avec la date, et demander un devis garde la fiche honnête.") },
      { q: B("Why does the protocol use the same three tasks for every tool tested?",
          "Pourquoi le protocole utilise-t-il les trois mêmes tâches pour chaque outil testé ?"),
        options: [
          B("To save time, since writing new tasks takes too long", "Pour gagner du temps, écrire de nouvelles tâches étant trop long"),
          B("Because publishers optimise their tools for these tasks", "Parce que les éditeurs optimisent leurs outils pour ces tâches"),
          B("So that results stay comparable from one test to the next", "Pour que les résultats restent comparables d'un test à l'autre"),
        ],
        answer: 2,
        why: B("A fixed test set turns separate trials into a history: a tool tested in spring can be compared with one tested in autumn, on the same work.",
          "Un jeu de test fixe transforme des essais séparés en historique : un outil testé au printemps se compare à un outil testé à l'automne, sur le même travail.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M1, track: 'course', glyph: 'target', tint: '#0d9488', at: [12, 82], levels: METHOD,
    title: B('A watch method', 'Une méthode de veille'),
    blurb: B('Questions rather than the stream, reliable sources, a sourced Obsidian vault, and a one-hour test protocol.',
      "Des questions plutôt que le flot, des sources fiables, un coffre Obsidian sourcé et un protocole de test d'une heure."),
  },
]

export const VEILLE_A: CoursePart = {
  modules: MODULES,
  enrich: { ...METHOD_ENRICH },
  deep: { ...METHOD_DEEP },
}
