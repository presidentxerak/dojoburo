// OÙ VA L'AGENT QU'ON VIENT DE CONSTRUIRE.
//
// Le parcours se termine sur un fichier : une consigne système, des schémas
// d'outils, un manifeste. Puis l'élève se retrouve seul devant quinze noms de
// frameworks et aucune idée de lequel prendre ni de quoi y coller.
//
// CE FICHIER N'EST PAS UNE DOCUMENTATION, et c'est une décision.
//
// Nous n'écrivons AUCUN extrait de code d'appel, ici ni ailleurs. La raison
// est la même que pour les formats d'export : une ligne qui instancie un
// client change au rythme de la bibliothèque contre laquelle elle a été
// écrite, et un exemple périmé dans un cours est pire qu'une absence
// d'exemple, parce que quelqu'un le copie, ça casse, et il croit avoir mal
// compris. Ces quinze projets bougent vite ; une page de code aurait tort
// avant d'être lue.
//
// CE QU'ON ENSEIGNE À LA PLACE, et qui ne se périme pas : la CORRESPONDANCE.
// Chaque framework modélise un agent avec ses propres mots, et l'essentiel du
// travail d'intégration est de savoir quel morceau de ce qu'on a fabriqué
// devient quoi chez lui. Une consigne système est un « system prompt » ici, un
// « backstory » là, une « instruction » ailleurs ; les schémas d'outils sont
// des fonctions décorées, des classes, ou du JSON brut. Ça, ça reste vrai
// quand la signature change.
//
// CE QU'ON DIT AUSSI : quand NE PAS prendre un framework. Un tableau
// comparatif où tout est bon à quelque chose n'aide personne à choisir.
//
// UNE LIMITE, ÉCRITE PLUTÔT QUE TUE. Nous ne testons pas ces quinze projets en
// continu, et ils évoluent sans nous prévenir. Ce fichier décrit leur FORME,
// qui est stable, et renvoie à leur documentation pour tout ce qui ne l'est
// pas. La page le dit au lecteur en toutes lettres.
import type { ExportFormat } from '../lib/agentExport'
import type { Lang } from '../i18n/lang'

/** Ce qu'un framework fait des morceaux qu'on a fabriqués. Les clés sont
 *  celles des formats d'export : si un format disparaît, ce fichier ne
 *  compile plus, ce qui est exactement ce qu'on veut. */
export type Fit = Partial<Record<ExportFormat, string>>

export interface Framework {
  id: string
  name: string
  /** les langages, tels que le projet les publie */
  langs: string[]
  /** l'approche, en trois mots · c'est ce qui le distingue vraiment */
  approach: string
  /** ce pour quoi on le prend */
  bestFor: string
  /** COMMENT IL MODÉLISE UN AGENT · la phrase à comprendre avant tout le
   *  reste, parce que c'est elle qui décide si votre agent y rentre bien */
  shape: string
  /** où va chaque morceau de ce qu'on a exporté */
  fit: Fit
  /** LE PIÈGE · ce qui surprend quand on y arrive avec un agent déjà écrit */
  watch: string
  /** quand le prendre, et quand ne pas le prendre */
  when: string
  notWhen: string
  /** l'adresse du projet · la seule chose qui ne se périme pas */
  docs: string
  /** le même framework en français · voir frameworkIn plus bas.
   *
   *  Ce qui n'est PAS traduit : `name`, `langs` et `docs`. Un nom de projet
   *  est un nom propre, un langage se nomme pareil partout, et une adresse
   *  traduite n'existe pas. Les CLÉS de `fit` non plus : ce sont les
   *  identifiants des formats d'export, et les traduire briserait le lien qui
   *  fait justement qu'un format supprimé ne compile plus. */
  fr?: FrameworkFr
}

export interface FrameworkFr {
  approach: string
  bestFor: string
  shape: string
  fit: Fit
  watch: string
  when: string
  notWhen: string
}

/** Le framework dans la langue demandée · un seul chemin, comme ailleurs. */
export function frameworkIn(f: Framework, lang: Lang): Framework {
  if (lang !== 'fr' || !f.fr) return f
  return { ...f, ...f.fr }
}

/* ------------------------------------------------------------------ */
/* CE QU'EST UN FRAMEWORK, pour quelqu'un qui n'en a jamais utilisé     */
/* ------------------------------------------------------------------ */

// La première version de cette page était un comparatif de quinze projets.
// Utile pour qui sait déjà ce qu'est un framework, inutile pour tout le monde
// d'autre, c'est à dire pour le public de ce cours. On ne commence pas par
// « lequel prendre » quand la question réelle est « c'est quoi ».

export const FRAMEWORK_PRIMER = {
  /** en une phrase, sans un seul mot de métier */
  plain:
    'A framework is a ready-made box that runs your agent for you: it talks to the model, it calls the tools when the model asks for them, it remembers the conversation, and it handles the errors.',
  /** la comparaison · un objet que tout le monde connaît */
  like:
    'It is the difference between building a kitchen and renting one. You still cook the meal, and the meal is your agent. The oven, the plumbing and the extractor fan are not the interesting part of dinner, and you would rather not install them yourself every time.',
  /** ce qu'on ferait sans · l'argument le plus honnête */
  without:
    'You do not need one to start. An agent is a loop: you send the instruction and the question, you read the answer, and if the model asks for a tool you run it and send the result back. Fifty lines. Writing that loop once is the best way to understand what every framework on this page is doing for you.',
  /** ce qu'il apporte VRAIMENT · quatre choses, pas une liste marketing */
  gives: [
    'The loop, written and tested by someone else, including the parts that only break in production.',
    'Tool calling, so you declare a function and the framework handles the plumbing of asking, running and replying.',
    'Memory and state, so the agent knows what happened three turns ago without you managing it.',
    'A way to plug in the rest: retrieval, other models, logging, deployment, a second agent.',
  ],
  /** ce qu'il n'apporte pas · la phrase qui évite la déception */
  doesNot:
    'None of them makes your agent good. The instruction you wrote in the dojo is what decides the quality of the answers, and it is the same instruction in all fifteen. A framework changes how much plumbing you write, never how well your agent thinks.',
  /** pourquoi il y en a autant */
  whySoMany:
    'Because they disagree about what an agent IS. Some think it is a graph of states, some a conversation between colleagues, some a typed function. Each answer makes a different framework, and none of them is wrong. That is also why your agent moves between them: what you built is the instruction and the tools, and every one of them has a place for both.',
  fr: {
    plain:
      "Un framework est une structure prête à l'emploi qui exécute votre agent à votre place : il communique avec le modèle, appelle les outils lorsque le modèle les demande, conserve la mémoire de la conversation et gère les erreurs.",
    like:
      "C'est la différence entre construire une cuisine et en louer une. Vous préparez toujours le repas, et ce repas est votre agent. Le four, la plomberie et la hotte ne sont pas la partie intéressante du dîner, et vous préféreriez ne pas les installer vous-même à chaque fois.",
    without:
      "Vous n'en avez pas besoin pour commencer. Un agent est une boucle : vous envoyez le system prompt et la question, vous lisez la réponse, et si le modèle demande un outil, vous l'exécutez et renvoyez le résultat. Cinquante lignes suffisent. Écrire cette boucle une fois est le meilleur moyen de comprendre ce que chacun des frameworks de cette page fait pour vous.",
    gives: [
      "La boucle, écrite et éprouvée par d'autres, y compris les parties qui ne cèdent qu'en production.",
      "Le tool calling : vous déclarez une fonction, et le framework prend en charge la mécanique de demande, d'exécution et de réponse.",
      "La mémoire et l'état, afin que l'agent sache ce qui s'est produit trois tours plus tôt sans que vous ayez à le gérer.",
      "De quoi connecter le reste : la recherche documentaire, d'autres modèles, les journaux, le déploiement, un deuxième agent.",
    ],
    doesNot:
      "Aucun ne rend votre agent performant. Le system prompt que vous avez rédigé dans le dojo détermine la qualité des réponses, et c'est le même system prompt dans les quinze. Un framework modifie la quantité de code d'infrastructure que vous écrivez, jamais la qualité du raisonnement de votre agent.",
    whySoMany:
      "Parce qu'ils divergent sur ce qu'EST un agent. Pour les uns, c'est un graphe d'états ; pour d'autres, une conversation entre collègues ; pour d'autres encore, une fonction typée. Chaque réponse produit un framework différent, et aucune n'est fausse. C'est aussi pourquoi votre agent passe de l'un à l'autre : ce que vous avez construit, ce sont le system prompt et les outils, et chaque framework prévoit une place pour les deux.",
  },
}

/** L'introduction dans la langue demandée · un seul chemin, comme partout. */
export const primerIn = (lang: Lang) =>
  (lang === 'fr' ? { ...FRAMEWORK_PRIMER, ...FRAMEWORK_PRIMER.fr } : FRAMEWORK_PRIMER)

/* ------------------------------------------------------------------ */
/* COMMENT BRANCHER SON AGENT · la procédure, la même partout          */
/* ------------------------------------------------------------------ */

export interface ConnectStep {
  title: string
  /** ce qu'on fait, concrètement */
  does: string
  /** ce qui rate à cette étape */
  watch: string
  /** le même geste en français */
  fr?: { title: string; does: string; watch: string }
}

/** Le geste dans la langue demandée. */
export const connectStepIn = (c: ConnectStep, lang: Lang): ConnectStep =>
  (lang === 'fr' && c.fr ? { ...c, ...c.fr } : c)

// Ces quatre gestes sont les mêmes dans les quinze projets, et c'est ce qui
// rend la page enseignable : les noms changent, la procédure non.
export const CONNECT_STEPS: ConnectStep[] = [
  {
    title: 'Export the instruction',
    does: 'On your agent page, choose the System prompt format and copy it. That block of text is your agent: everything the model knows about its job is in there.',
    watch: 'Copy it whole. People trim it to look tidy, and the lines they trim are usually the bans, which are the part doing the work.',
    fr: {
      title: "Exportez le system prompt",
      does: "Sur la page de votre agent, choisissez le format System prompt et copiez-le. Ce bloc de texte EST votre agent : tout ce que le modèle sait de son métier s'y trouve.",
      watch: "Copiez-le intégralement. On est tenté de l'élaguer pour le rendre plus net, or les lignes supprimées sont généralement les interdictions, c'est-à-dire la partie qui fait le travail.",
    },
  },
  {
    title: 'Export the tool schemas',
    does: 'Choose the Tool schemas format. It is JSON Schema: a name, a description and the parameters, for each thing your agent may call. Every framework reads that shape, whatever it calls it.',
    watch: 'The description of a tool is read by the model, not by you. A tool described as "gets data" will be called at the wrong moments, and no amount of prompt will fix it.',
    fr: {
      title: "Exportez les schémas d'outils",
      does: "Choisissez le format Schémas d'outils. Il s'agit de JSON Schema : un nom, une description et des paramètres pour chaque élément que votre agent peut appeler. Tous les frameworks lisent ce format, quel que soit le nom qu'ils lui donnent.",
      watch: "La description d'un outil est lue par le modèle, et non par vous. Un outil décrit comme « récupère des données » sera appelé au mauvais moment, et aucun prompt n'y remédiera.",
    },
  },
  {
    title: 'Give it a model and run it read only',
    does: 'Pick a framework, paste the instruction where it asks for one, declare your tools from the schemas, and run it once with tools that only READ. No sending, no writing, no deleting.',
    watch: 'This is where most first runs go wrong in a way that costs something. Read only first is not caution, it is how you find out what your agent actually tries to do.',
    fr: {
      title: "Associez-lui un modèle et exécutez-le en lecture seule",
      does: "Choisissez un framework, collez le system prompt à l'emplacement prévu, déclarez vos outils à partir des schémas, et exécutez-le une première fois avec des outils qui se contentent de LIRE. Aucun envoi, aucune écriture, aucune suppression.",
      watch: "C'est à ce stade que la plupart des premières exécutions dérapent de manière coûteuse. Commencer en lecture seule n'est pas une simple précaution : c'est le moyen de découvrir ce que votre agent tente réellement de faire.",
    },
  },
  {
    title: 'Let it write, one action at a time',
    does: 'Turn on one action that changes something. Watch it for a few real cases. Then the next one. Keep the approval step for anything you cannot undo.',
    watch: 'Turning on every tool at once means you cannot tell which one misbehaved. The operator path in the dojo is this step, taught properly.',
    fr: {
      title: "Autorisez l'écriture, une action à la fois",
      does: "Activez une action qui modifie quelque chose. Observez-la sur quelques cas réels, puis passez à la suivante. Conservez l'étape d'approbation pour toute action irréversible.",
      watch: "Activer tous les outils à la fois empêche de déterminer lequel s'est mal comporté. Le parcours de l'opérateur, dans le dojo, enseigne précisément cette étape.",
    },
  },
]

export const FRAMEWORKS: Framework[] = [
  {
    id: 'langgraph',
    name: 'LangGraph',
    langs: ['Python', 'JavaScript'],
    approach: 'A graph of states',
    bestFor: 'Complex agents you need to control and resume',
    shape: 'You do not describe an agent, you draw a graph: nodes that do something, edges that decide where to go next, and a state object that travels through it. The agent is the graph, not a prompt.',
    fit: {
      system: 'Becomes the instruction of the node that calls the model. One node, one job: splitting your agent into several nodes is usually the point of coming here.',
      tools: 'Each tool is a node or is bound to a model node. The schemas port over as they are.',
      manifest: 'Nothing maps directly. The manifest describes one agent; the graph is the thing you draw around it.',
    },
    watch: 'The state object is the real design work, and it is the part your exported files say nothing about. Decide what travels between nodes before writing a single one.',
    when: 'Your agent has branches, loops, or needs to stop and resume where it left off.',
    notWhen: 'A single call with a couple of tools. You would draw a graph with one node in it.',
    docs: 'https://langchain-ai.github.io/langgraph/',
    fr: {
      approach: "Un graphe d'états",
      bestFor: "Les agents complexes qu'il faut contrôler et reprendre",
      shape: "Vous ne décrivez pas un agent, vous dessinez un graphe : des noeuds qui effectuent une action, des arêtes qui déterminent la suite, et un objet d'état qui le traverse. L'agent est le graphe, et non un prompt.",
      fit: {
        system: "Devient le system prompt du noeud qui appelle le modèle. Un noeud, un métier : découper votre agent en plusieurs noeuds est généralement la raison de choisir ce framework.",
        tools: "Chaque outil est un noeud ou se rattache à un noeud de modèle. Les schémas se transportent tels quels.",
        manifest: "Rien ne correspond directement. Le manifeste décrit un agent ; le graphe est ce que vous dessinez autour.",
      },
      watch: "L'objet d'état constitue le véritable travail de conception, et vos fichiers exportés n'en disent rien. Décidez de ce qui circule entre les noeuds avant d'en écrire un seul.",
      when: "Votre agent comporte des embranchements, des boucles, ou doit s'interrompre puis reprendre là où il s'était arrêté.",
      notWhen: "Un seul appel avec deux ou trois outils. Vous dessineriez un graphe à un seul noeud.",
    },
  },
  {
    id: 'langchain',
    name: 'LangChain',
    langs: ['Python', 'JavaScript'],
    approach: 'A general toolkit',
    bestFor: 'Wiring models, tools and retrieval together',
    shape: 'A large library of parts that click together: model wrappers, tool definitions, retrievers, memory. You assemble rather than declare, and there is usually more than one way to do the same thing.',
    fit: {
      system: 'Goes into the prompt template of the chain or agent.',
      tools: 'Tool objects, built from your schemas.',
      brief: 'Useful as the document you keep next to the code, because the assembly itself will not explain why the instruction is written that way.',
    },
    watch: 'The surface is wide and it has moved a lot. Follow the current documentation rather than an article, however recent the article looks.',
    when: 'You need retrieval, several model providers, or a lot of ready-made connectors.',
    notWhen: 'You want one small agent and nothing else. The library will be most of your dependency tree.',
    docs: 'https://python.langchain.com/',
    fr: {
      approach: "Une boîte à outils généraliste",
      bestFor: "Relier des modèles, des outils et de la recherche documentaire",
      shape: "Une vaste bibliothèque de composants qui s'assemblent : interfaces de modèles, définitions d'outils, moteurs de recherche, mémoire. Vous assemblez plutôt que vous ne déclarez, et il existe généralement plusieurs façons d'obtenir le même résultat.",
      fit: {
        system: "Se place dans le prompt template de la chaîne ou de l'agent.",
        tools: "Des objets Tool, construits à partir de vos schémas.",
        brief: "Utile comme document conservé à côté du code, car l'assemblage lui-même n'expliquera pas pourquoi le system prompt est rédigé ainsi.",
      },
      watch: "Sa surface est étendue et elle a beaucoup évolué. Suivez la documentation à jour plutôt qu'un article, aussi récent qu'il paraisse.",
      when: "Vous avez besoin de recherche documentaire, de plusieurs providers de modèles ou de nombreux connecteurs prêts à l'emploi.",
      notWhen: "Vous souhaitez un petit agent et rien d'autre. La bibliothèque occuperait l'essentiel de votre arbre de dépendances.",
    },
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    langs: ['Python'],
    approach: 'Several agents with roles',
    bestFor: 'A small team of agents that collaborate',
    shape: 'You describe people, not programs: each agent has a role, a goal and a backstory, and tasks are handed between them. The framework runs the conversation.',
    fit: {
      system: 'Splits in three: the role and goal come from your shape, the backstory from your instruction. Your one prompt becomes three fields, and that is the main translation work.',
      tools: 'Tools attached per agent, from your schemas.',
      brief: 'Your path notes become the task descriptions, which is where CrewAI wants the detail.',
    },
    watch: 'Role-playing is the interface, and it makes weak designs look organised. If a single agent does the job, a crew of four will do it more slowly and less predictably.',
    when: 'The work genuinely splits between distinct jobs, and each one is worth writing separately.',
    notWhen: 'One agent would do. Most of the time, one agent would do.',
    docs: 'https://docs.crewai.com/',
    fr: {
      approach: "Plusieurs agents avec des rôles",
      bestFor: "Une petite équipe d'agents qui collaborent",
      shape: "Vous décrivez des personnes, non des programmes : chaque agent a un rôle, un objectif et une histoire, et les tâches passent de l'un à l'autre. Le framework conduit la conversation.",
      fit: {
        system: "Se répartit en trois : le rôle et l'objectif proviennent de votre type d'agent, la backstory de votre system prompt. Votre prompt unique devient trois champs, et c'est là l'essentiel du travail de traduction.",
        tools: "Des outils rattachés à chaque agent, à partir de vos schémas.",
        brief: "Vos notes de parcours deviennent les descriptions de tâches, qui est l'endroit où CrewAI attend le détail.",
      },
      watch: "Le jeu de rôle constitue l'interface, et il fait passer une conception faible pour une organisation. Si un seul agent accomplit le travail, une équipe de quatre le fera plus lentement et de façon moins prévisible.",
      when: "Le travail se répartit réellement entre des métiers distincts, et chacun mérite d'être rédigé séparément.",
      notWhen: "Un seul agent suffirait. C'est d'ailleurs le cas la plupart du temps.",
    },
  },
  {
    id: 'llamaindex',
    name: 'LlamaIndex',
    langs: ['Python', 'TypeScript'],
    approach: 'Data and retrieval, with agents on top',
    bestFor: 'Agents that work over your documents',
    shape: 'Everything starts from the data: you index documents, then query them, and an agent is a layer that decides what to look up and when.',
    fit: {
      system: 'The agent instruction, once your retrieval is already working.',
      tools: 'Query engines become tools. Your own schemas sit alongside them.',
      brief: 'Its rules about sources and quoting matter more here than anywhere else, because retrieval is what makes an agent able to cite.',
    },
    watch: 'The quality of the answer is decided by the indexing, not by the agent. Someone who arrives to tune the prompt is usually fixing the wrong half.',
    when: 'The job is reading your material and answering from it. Our researcher and extractor agents land here naturally.',
    notWhen: 'There are no documents. You would be carrying a retrieval stack to make a model call.',
    docs: 'https://docs.llamaindex.ai/',
    fr: {
      approach: "La donnée et la recherche, avec des agents par-dessus",
      bestFor: "Les agents qui travaillent sur vos documents",
      shape: "Tout part des données : vous indexez des documents, puis vous les interrogez, et un agent constitue une couche qui décide quoi chercher et à quel moment.",
      fit: {
        system: "Le system prompt de l'agent, une fois votre recherche documentaire opérationnelle.",
        tools: "Les moteurs de requête deviennent des outils. Vos propres schémas se placent à côté.",
        brief: "Les règles relatives aux sources et aux citations comptent ici plus que partout ailleurs, car la recherche documentaire est ce qui permet à un agent de citer.",
      },
      watch: "La qualité de la réponse dépend de l'indexation, et non de l'agent. Celui qui vient ajuster le prompt corrige généralement la mauvaise moitié du problème.",
      when: "Le travail consiste à lire votre documentation et à répondre à partir de celle-ci. Nos agents chercheur et extracteur y trouvent naturellement leur place.",
      notWhen: "Il n'y a aucun document. Vous embarqueriez toute une infrastructure de recherche documentaire pour un simple appel de modèle.",
    },
  },
  {
    id: 'openai-agents',
    name: 'OpenAI Agents SDK',
    langs: ['Python', 'TypeScript'],
    approach: 'Agents, tools and handoffs',
    bestFor: 'A small system of agents without much ceremony',
    shape: 'An agent is instructions plus tools, and it can hand the conversation to another agent. Deliberately few concepts.',
    fit: {
      system: 'The instructions, almost verbatim. This is the closest mapping of the fifteen.',
      tools: 'Functions with schemas, close to what you exported.',
      manifest: 'Reads cleanly as the agent definition.',
    },
    watch: 'Handoffs are one-way by default, which surprises people who expect a conversation to come back. Decide who owns the thread before you wire two agents.',
    when: 'You want to run something today and you are on that provider.',
    notWhen: 'You need to stay portable across providers. The concepts are simple but the SDK is not neutral.',
    docs: 'https://openai.github.io/openai-agents-python/',
    fr: {
      approach: "Des agents, des outils et des passages de relais",
      bestFor: "Un petit système d'agents sans cérémonie",
      shape: "Un agent se compose d'instructions et d'outils, et il peut transmettre la conversation à un autre agent. Les notions sont volontairement peu nombreuses.",
      fit: {
        system: "Les instructions, presque mot pour mot. C'est la correspondance la plus directe des quinze.",
        tools: "Des fonctions avec schémas, proches de ce que vous avez exporté.",
        manifest: "Se lit tel quel comme la définition de l'agent.",
      },
      watch: "Par défaut, les passages de relais s'effectuent dans un seul sens, ce qui surprend ceux qui attendent le retour de la conversation. Décidez qui conduit l'échange avant de relier deux agents.",
      when: "Vous souhaitez exécuter quelque chose dès aujourd'hui et vous utilisez déjà ce provider.",
      notWhen: "Vous devez pouvoir passer d'un provider à l'autre. Les notions sont simples, mais la bibliothèque n'est pas neutre.",
    },
  },
  {
    id: 'google-adk',
    name: 'Google ADK',
    langs: ['Python', 'and others'],
    approach: 'Agents inside the Google ecosystem',
    bestFor: 'Work that already lives on Google infrastructure',
    shape: 'An agent with instructions and tools, designed to sit close to Google models and services, with deployment as part of the framework rather than an afterthought.',
    fit: {
      system: 'The agent instruction.',
      tools: 'Tool definitions, plus the platform ones you get for free.',
      manifest: 'A good source for the configuration you will write.',
    },
    watch: 'What you gain in deployment you pay in portability. Read what is framework and what is platform before you rely on either.',
    when: 'Your data, your models or your deployment are already there.',
    notWhen: 'You are elsewhere. There is little reason to come to it for the agent loop alone.',
    docs: 'https://google.github.io/adk-docs/',
    fr: {
      approach: "Des agents dans l'écosystème Google",
      bestFor: "Le travail qui repose déjà sur l'infrastructure Google",
      shape: "Un agent doté d'instructions et d'outils, conçu pour s'intégrer aux modèles et aux services Google, le déploiement faisant partie du framework plutôt que d'être traité après coup.",
      fit: {
        system: "L'instruction de l'agent.",
        tools: "Les définitions d'outils, ainsi que celles de la plateforme, obtenues sans rien écrire.",
        manifest: "Une bonne source pour la configuration que vous allez rédiger.",
      },
      watch: "Ce que vous gagnez en déploiement, vous le perdez en portabilité. Distinguez ce qui relève du framework de ce qui relève de la plateforme avant de vous appuyer sur l'un ou l'autre.",
      when: "Vos données, vos modèles ou votre déploiement s'y trouvent déjà.",
      notWhen: "Vous travaillez ailleurs. Il y a peu de raisons d'y venir pour la seule boucle d'agent.",
    },
  },
  {
    id: 'pydantic-ai',
    name: 'Pydantic AI',
    langs: ['Python'],
    approach: 'Typed agents',
    bestFor: 'Structured Python applications where the shape matters',
    shape: 'The result type is declared first, and the framework makes the model produce it. The agent is a function with a signature, not a conversation.',
    fit: {
      system: 'The system prompt, with the types doing part of the work your instruction used to do.',
      tools: 'Typed functions. The schemas you exported become the types.',
      manifest: 'Half of it becomes type declarations, which is the point of coming here.',
    },
    watch: 'Half your careful instruction becomes unnecessary, because the type enforces it. Delete that half rather than keeping both: two things saying the same rule will eventually disagree.',
    when: 'Your agent must return a precise shape and you are in a typed Python codebase.',
    notWhen: 'The output is free prose. You would be declaring a type for a paragraph.',
    docs: 'https://ai.pydantic.dev/',
    fr: {
      approach: "Des agents typés",
      bestFor: "Les applications Python structurées où la forme du résultat importe",
      shape: "Le type du résultat est déclaré en premier, et le framework veille à ce que le modèle le produise. L'agent est une fonction dotée d'une signature, et non une conversation.",
      fit: {
        system: "Le system prompt, les types assurant une partie du travail que votre prompt accomplissait.",
        tools: "Des fonctions typées. Les schémas que vous avez exportés deviennent les types.",
        manifest: "La moitié devient des déclarations de types, ce qui constitue tout l'intérêt de ce framework.",
      },
      watch: "La moitié de votre prompt minutieux devient inutile, car le type l'impose. Supprimez cette moitié plutôt que de conserver les deux : deux emplacements qui énoncent la même règle finiront par se contredire.",
      when: "Votre agent doit produire une forme précise et vous travaillez en Python typé.",
      notWhen: "La sortie est de la prose libre. Vous déclareriez un type pour un paragraphe.",
    },
  },
  {
    id: 'ms-agent-framework',
    name: 'Microsoft Agent Framework',
    langs: ['Python', '.NET'],
    approach: 'Multi-agent workflows',
    bestFor: 'The Microsoft ecosystem, succeeding AutoGen and Semantic Kernel',
    shape: 'Agents and workflows in one place, brought together from two earlier projects, with the enterprise concerns (identity, hosting, governance) treated as first class.',
    fit: {
      system: 'The agent instructions.',
      tools: 'Tool or function definitions, depending on the language you pick.',
      manifest: 'Close to the configuration shape it expects.',
    },
    watch: 'It succeeds two projects that still have their own documentation and their own articles. Check which one a page is about before you follow it.',
    when: 'You are on .NET or on Azure, and governance is part of the requirement.',
    notWhen: 'A single Python script would do the job.',
    docs: 'https://learn.microsoft.com/en-us/agent-framework/',
    fr: {
      approach: "Des workflows à plusieurs agents",
      bestFor: "L'écosystème Microsoft, à la suite d'AutoGen et de Semantic Kernel",
      shape: "Des agents et des workflows réunis au même endroit, issus de deux projets antérieurs, avec les préoccupations d'entreprise (identité, hébergement, gouvernance) traitées en priorité.",
      fit: {
        system: "Les instructions de l'agent.",
        tools: "Des définitions d'outils ou de fonctions, selon le langage choisi.",
        manifest: "Proche de la forme de configuration qu'il attend.",
      },
      watch: "Il succède à deux projets qui conservent leur propre documentation et leurs propres articles. Vérifiez de quel projet traite une page avant de la suivre.",
      when: "Vous travaillez sur .NET ou sur Azure, et la gouvernance fait partie du besoin.",
      notWhen: "Un simple script Python suffirait.",
    },
  },
  {
    id: 'autogen',
    name: 'AutoGen / AG2',
    langs: ['Python'],
    approach: 'Conversations between agents',
    bestFor: 'Agents that collaborate by talking',
    shape: 'Agents hold a conversation with each other, and the work emerges from the exchange. A human can be one of the participants.',
    fit: {
      system: 'The system message of one participant.',
      tools: 'Functions registered for an agent to call.',
      brief: 'Worth keeping outside the code: conversational designs drift, and the brief is what you compare against.',
    },
    watch: 'Conversations can run long and cost a great deal, because every turn carries the history. This is the frugality lesson meeting a framework that makes it easy to forget.',
    when: 'The problem genuinely benefits from argument between agents, or from a human in the loop mid-conversation.',
    notWhen: 'The steps are known in advance. Then you want a pipeline, not a discussion.',
    docs: 'https://microsoft.github.io/autogen/',
    fr: {
      approach: "Des conversations entre agents",
      bestFor: "Des agents qui collaborent en se parlant",
      shape: "Les agents conversent entre eux, et le travail émerge de l'échange. Un humain peut faire partie des participants.",
      fit: {
        system: "Le message système d'un participant.",
        tools: "Des fonctions enregistrées pour qu'un agent les appelle.",
        brief: "À conserver hors du code : les conceptions conversationnelles dérivent, et le brief sert de référence de comparaison.",
      },
      watch: "Les conversations peuvent être longues et très coûteuses, car chaque tour transporte tout l'historique. C'est la leçon de sobriété appliquée à un framework où il est facile de l'oublier.",
      when: "Le problème bénéficie réellement d'un débat entre agents, ou de l'intervention d'un humain en cours de conversation.",
      notWhen: "Les étapes sont connues d'avance. Il vous faut alors une chaîne, et non une discussion.",
    },
  },
  {
    id: 'semantic-kernel',
    name: 'Semantic Kernel',
    langs: ['C#', 'Python', 'Java'],
    approach: 'An agentic SDK',
    bestFor: 'Enterprise applications, especially on .NET',
    shape: 'Model calls are treated as functions your application can call, alongside your ordinary code. The kernel is the thing that holds them together.',
    fit: {
      system: 'The prompt of a semantic function, or the agent instruction.',
      tools: 'Native functions, from your schemas.',
      skill: 'Maps well: the idea of a packaged capability is close to what this framework calls a plugin.',
    },
    watch: 'It is the framework with the longest history here, and the Microsoft Agent Framework now sits alongside it. Check which one your team should be starting on.',
    when: 'You are embedding model calls inside a large existing application, in C# or Java.',
    notWhen: 'You are prototyping. There is more structure than a prototype needs.',
    docs: 'https://learn.microsoft.com/en-us/semantic-kernel/',
    fr: {
      approach: "Une bibliothèque d'agents",
      bestFor: "Les applications d'entreprise, surtout sur .NET",
      shape: "Les appels de modèle sont traités comme des fonctions que votre application peut appeler, aux côtés de votre code ordinaire. Le noyau est ce qui les relie.",
      fit: {
        system: "Le prompt d'une fonction sémantique, ou l'instruction de l'agent.",
        tools: "Des fonctions natives, à partir de vos schémas.",
        skill: "Correspondance étroite : l'idée d'une capacité empaquetée est proche de ce que ce framework appelle un greffon.",
      },
      watch: "C'est le framework dont l'historique est le plus long, et le Microsoft Agent Framework coexiste désormais avec lui. Vérifiez lequel votre équipe devrait adopter.",
      when: "Vous intégrez des appels de modèle dans une grande application existante, en C# ou en Java.",
      notWhen: "Vous réalisez un prototype. Ce framework impose plus de structure qu'un prototype n'en demande.",
    },
  },
  {
    id: 'mastra',
    name: 'Mastra',
    langs: ['TypeScript'],
    approach: 'Agents and workflows in TypeScript',
    bestFor: 'Agentic features inside a TypeScript application',
    shape: 'Agents, tools, workflows and memory, written the way a TypeScript application is written, so the agent lives in the same codebase as the product.',
    fit: {
      system: 'The agent instructions.',
      tools: 'Typed tools, from your schemas.',
      manifest: 'Reads as the agent configuration.',
    },
    watch: 'Being in your application codebase makes it easy to leave the agent untested with everything else. Give it its own tests the day you add it.',
    when: 'Your product is TypeScript and you want the agent to ship with it, not beside it.',
    notWhen: 'Your team works in Python. Do not change language for the framework.',
    docs: 'https://mastra.ai/docs',
    fr: {
      approach: "Des agents et des flux en TypeScript",
      bestFor: "Des fonctions agentiques au sein d'une application TypeScript",
      shape: "Des agents, des outils, des flux et de la mémoire, écrits comme une application TypeScript, afin que l'agent vive dans le même code que le produit.",
      fit: {
        system: "Les instructions de l'agent.",
        tools: "Des outils typés, à partir de vos schémas.",
        manifest: "Se lit comme la configuration de l'agent.",
      },
      watch: "Intégré au code de votre application, l'agent risque facilement de rester sans tests au milieu du reste. Dotez-le de ses propres tests dès que vous l'ajoutez.",
      when: "Votre produit est écrit en TypeScript et vous souhaitez que l'agent l'accompagne, et non qu'il reste à côté.",
      notWhen: "Votre équipe travaille en Python. Ne changez pas de langage pour un framework.",
    },
  },
  {
    id: 'agno',
    name: 'Agno',
    langs: ['Python'],
    approach: 'Light agents',
    bestFor: 'Agents with tools, memory and knowledge, without much weight',
    shape: 'An agent is a small object with a model, some tools, and optionally memory and a knowledge base. Deliberately little between you and the model.',
    fit: {
      system: 'The instructions, close to verbatim.',
      tools: 'Tools attached to the agent.',
      manifest: 'A clean starting point for the object you will write.',
    },
    watch: 'Light frameworks give you less structure, which is the point, and it means the discipline has to come from you. Your brief is that discipline.',
    when: 'You want something running quickly without adopting a large stack.',
    notWhen: 'You need orchestration, resumption or governance. That is not what it is for.',
    docs: 'https://docs.agno.com/',
    fr: {
      approach: "Des agents légers",
      bestFor: "Des agents dotés d'outils, de mémoire et de connaissances, sans lourdeur",
      shape: "Un agent est un petit objet comprenant un modèle, quelques outils, et éventuellement de la mémoire et une base de connaissances. Peu d'éléments s'interposent volontairement entre vous et le modèle.",
      fit: {
        system: "Les instructions, à peu près mot pour mot.",
        tools: "Des outils rattachés à l'agent.",
        manifest: "Un point de départ clair pour l'objet que vous allez écrire.",
      },
      watch: "Les frameworks légers offrent moins de structure, ce qui est leur objectif ; cela signifie que la discipline doit venir de vous. Votre brief écrit constitue cette discipline.",
      when: "Vous souhaitez un résultat opérationnel rapidement sans adopter une infrastructure lourde.",
      notWhen: "Vous avez besoin d'orchestration, de reprise ou de gouvernance. Ce n'est pas sa vocation.",
    },
  },
  {
    id: 'strands',
    name: 'Strands Agents',
    langs: ['Python', 'TypeScript'],
    approach: 'Agents on AWS',
    bestFor: 'Work that runs on AWS and Bedrock',
    shape: 'A model-driven loop with tools, built to sit naturally on AWS, so hosting, identity and model access come from the platform.',
    fit: {
      system: 'The system prompt.',
      tools: 'Tools, including the AWS ones you did not have to write.',
      manifest: 'Useful as the definition you keep in version control.',
    },
    watch: 'The platform tools are the reason to be here, and they are also what ties you to it. Know which of your tools are portable.',
    when: 'You are on AWS and want the identity and hosting questions answered for you.',
    notWhen: 'You are not on AWS.',
    docs: 'https://strandsagents.com/',
    fr: {
      approach: "Des agents sur AWS",
      bestFor: "Le travail qui s'exécute sur AWS et Bedrock",
      shape: "Une boucle pilotée par le modèle, avec des outils, conçue pour s'intégrer naturellement à AWS, l'hébergement, l'identité et l'accès aux modèles étant fournis par la plateforme.",
      fit: {
        system: "Le system prompt.",
        tools: "Des outils, y compris ceux d'AWS que vous n'avez pas eu à écrire.",
        manifest: "Utile comme définition placée sous gestion de versions.",
      },
      watch: "Les outils de la plateforme sont la raison de choisir ce framework, et ce sont aussi eux qui vous y lient. Identifiez ceux de vos outils qui sont portables.",
      when: "Vous travaillez sur AWS et souhaitez que les questions d'identité et d'hébergement soient réglées pour vous.",
      notWhen: "Vous ne travaillez pas sur AWS.",
    },
  },
  {
    id: 'smolagents',
    name: 'smolagents',
    langs: ['Python'],
    approach: 'Minimal agents',
    bestFor: 'Starting, and understanding what a loop actually is',
    shape: 'A very small library: an agent is a loop that calls a model, runs what it asks for, and repeats. There is little to learn before you can read the whole thing.',
    fit: {
      system: 'The agent instruction.',
      tools: 'Simple tool functions.',
      brief: 'The place your reasoning lives, since the code will not hold much of it.',
    },
    watch: 'Some minimal agents run generated code. Read what executes where before pointing it at anything real, and start read only, exactly as the operator path teaches.',
    when: 'You are learning, or the job is genuinely small.',
    notWhen: 'You need state, resumption or a team of agents.',
    docs: 'https://huggingface.co/docs/smolagents/',
    fr: {
      approach: "Des agents minimaux",
      bestFor: "Débuter, et comprendre ce qu'est réellement une boucle",
      shape: "Une très petite bibliothèque : un agent est une boucle qui appelle un modèle, exécute ce qu'il demande, puis recommence. Il y a peu à apprendre avant de pouvoir la lire entièrement.",
      fit: {
        system: "L'instruction de l'agent.",
        tools: "De simples fonctions outils.",
        brief: "L'endroit où consigner votre raisonnement, puisque le code n'en portera que peu.",
      },
      watch: "Certains agents minimaux exécutent du code généré. Vérifiez ce qui s'exécute et à quel endroit avant de les diriger vers un système réel, et commencez en lecture seule, exactement comme l'enseigne le parcours de l'opérateur.",
      when: "Vous êtes en phase d'apprentissage, ou le travail est réellement modeste.",
      notWhen: "Vous avez besoin d'état, de reprise ou d'une équipe d'agents.",
    },
  },
  {
    id: 'metagpt',
    name: 'MetaGPT',
    langs: ['Python'],
    approach: 'Multi-agent, as a software team',
    bestFor: 'Simulating a development team on a brief',
    shape: 'Agents take the roles of a software company (product, architect, engineer) and produce the documents that role would produce, then hand them on.',
    fit: {
      system: 'The instruction of one role.',
      brief: 'The closest fit: this framework thinks in documents, and a brief is one.',
      tools: 'Less central here than the roles and their outputs.',
    },
    watch: 'It produces a great deal of output that looks like progress. Judge it on the working result, not on the volume of documents.',
    when: 'You want to see a whole software process played out from one brief.',
    notWhen: 'You want one agent doing one job. This is the opposite end of the scale.',
    docs: 'https://docs.deepwisdom.ai/',
    fr: {
      approach: "Plusieurs agents, comme une équipe logicielle",
      bestFor: "Simuler une équipe de développement à partir d'un brief",
      shape: "Des agents endossent les rôles d'une entreprise de logiciel (produit, architecte, ingénieur), produisent les documents propres à chaque rôle, puis les transmettent.",
      fit: {
        system: "Le prompt d'un rôle.",
        brief: "La correspondance la plus étroite : ce framework raisonne en documents, et un brief écrit en est un.",
        tools: "Moins central ici que les rôles et ce qu'ils produisent.",
      },
      watch: "Il produit beaucoup de contenu qui ressemble à un progrès. Jugez-le sur le résultat qui fonctionne, et non sur le volume de documents.",
      when: "Vous souhaitez observer le déroulement complet d'un processus logiciel à partir d'un seul brief.",
      notWhen: "Vous voulez un agent qui accomplit une tâche. C'est l'autre extrémité de l'échelle.",
    },
  },
]

export const FRAMEWORK_BY_ID = Object.fromEntries(FRAMEWORKS.map((f) => [f.id, f])) as Record<string, Framework>
export const FRAMEWORK_COUNT = FRAMEWORKS.length

/** Les langages représentés · lu par la page pour son filtre, jamais écrit à
 *  la main. Une liste de filtres qui ne correspond plus aux données donne des
 *  boutons qui ne filtrent rien. */
export const FRAMEWORK_LANGS = [...new Set(FRAMEWORKS.flatMap((f) => f.langs))].sort()
