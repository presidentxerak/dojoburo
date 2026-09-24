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
      "Un framework est une boîte toute faite qui fait tourner ton agent à ta place : il parle au modèle, il appelle les outils quand le modèle les demande, il se souvient de la conversation, et il gère les erreurs.",
    like:
      "C'est la différence entre construire une cuisine et en louer une. Tu cuisines toujours le repas, et le repas est ton agent. Le four, la plomberie et la hotte ne sont pas la partie intéressante du dîner, et tu préférerais ne pas les installer toi-même à chaque fois.",
    without:
      "Tu n'en as pas besoin pour commencer. Un agent est une boucle : tu envoies l'instruction et la question, tu lis la réponse, et si le modèle demande un outil tu l'exécutes et tu renvoies le résultat. Cinquante lignes. Écrire cette boucle une fois est la meilleure façon de comprendre ce que chacun des frameworks de cette page fait pour toi.",
    gives: [
      "La boucle, écrite et éprouvée par quelqu'un d'autre, y compris les parties qui ne cassent qu'en production.",
      "L'appel d'outils : tu déclares une fonction et le framework se charge de la plomberie qui demande, exécute et répond.",
      "La mémoire et l'état, pour que l'agent sache ce qui s'est passé il y a trois tours sans que tu aies à le gérer.",
      "De quoi brancher le reste : la recherche documentaire, d'autres modèles, les journaux, le déploiement, un deuxième agent.",
    ],
    doesNot:
      "Aucun ne rend ton agent bon. L'instruction que tu as écrite dans le dojo est ce qui décide de la qualité des réponses, et c'est la même instruction dans les quinze. Un framework change la quantité de plomberie que tu écris, jamais la qualité de la pensée de ton agent.",
    whySoMany:
      "Parce qu'ils ne sont pas d'accord sur ce qu'EST un agent. Pour les uns c'est un graphe d'états, pour d'autres une conversation entre collègues, pour d'autres encore une fonction typée. Chaque réponse fabrique un framework différent, et aucune n'a tort. C'est aussi pourquoi ton agent passe de l'un à l'autre : ce que tu as construit, c'est l'instruction et les outils, et chacun d'eux a une place pour les deux.",
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
      title: "Exporte l'instruction",
      does: "Sur la page de ton agent, choisis le format Consigne système et copie-le. Ce bloc de texte EST ton agent : tout ce que le modèle sait de son métier est là-dedans.",
      watch: "Copie-le en entier. On le taille pour faire propre, et les lignes taillées sont en général les interdictions, c'est à dire la partie qui travaille.",
    },
  },
  {
    title: 'Export the tool schemas',
    does: 'Choose the Tool schemas format. It is JSON Schema: a name, a description and the parameters, for each thing your agent may call. Every framework reads that shape, whatever it calls it.',
    watch: 'The description of a tool is read by the model, not by you. A tool described as "gets data" will be called at the wrong moments, and no amount of prompt will fix it.',
    fr: {
      title: "Exporte les schémas d'outils",
      does: "Choisis le format Schémas d'outils. C'est du JSON Schema : un nom, une description et les paramètres, pour chaque chose que ton agent peut appeler. Tous les frameworks lisent cette forme, quel que soit le nom qu'ils lui donnent.",
      watch: "La description d'un outil est lue par le modèle, pas par toi. Un outil décrit comme « récupère des données » sera appelé aux mauvais moments, et aucune consigne n'y changera rien.",
    },
  },
  {
    title: 'Give it a model and run it read only',
    does: 'Pick a framework, paste the instruction where it asks for one, declare your tools from the schemas, and run it once with tools that only READ. No sending, no writing, no deleting.',
    watch: 'This is where most first runs go wrong in a way that costs something. Read only first is not caution, it is how you find out what your agent actually tries to do.',
    fr: {
      title: "Donne-lui un modèle et fais-le tourner en lecture seule",
      does: "Choisis un framework, colle l'instruction là où il en demande une, déclare tes outils depuis les schémas, et lance-le une fois avec des outils qui LISENT seulement. Aucun envoi, aucune écriture, aucune suppression.",
      watch: "C'est là que la plupart des premiers passages dérapent d'une façon qui coûte quelque chose. La lecture seule d'abord n'est pas de la prudence, c'est la façon de découvrir ce que ton agent essaie vraiment de faire.",
    },
  },
  {
    title: 'Let it write, one action at a time',
    does: 'Turn on one action that changes something. Watch it for a few real cases. Then the next one. Keep the approval step for anything you cannot undo.',
    watch: 'Turning on every tool at once means you cannot tell which one misbehaved. The operator path in the dojo is this step, taught properly.',
    fr: {
      title: "Laisse-le écrire, une action à la fois",
      does: "Allume une action qui change quelque chose. Regarde-la sur quelques cas réels. Puis la suivante. Garde l'étape d'approbation pour tout ce qui ne se défait pas.",
      watch: "Allumer tous les outils d'un coup, c'est ne plus pouvoir dire lequel s'est mal conduit. Le parcours de l'opérateur dans le dojo est cette étape, enseignée comme il faut.",
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
      shape: "Tu ne décris pas un agent, tu dessines un graphe : des noeuds qui font quelque chose, des arêtes qui décident où aller ensuite, et un objet d'état qui le traverse. L'agent est le graphe, pas une consigne.",
      fit: {
        system: "Devient l'instruction du noeud qui appelle le modèle. Un noeud, un métier : découper ton agent en plusieurs noeuds est en général la raison de venir ici.",
        tools: "Chaque outil est un noeud ou se rattache à un noeud de modèle. Les schémas se transportent tels quels.",
        manifest: "Rien ne correspond directement. Le manifeste décrit un agent ; le graphe est ce que tu dessines autour.",
      },
      watch: "L'objet d'état est le vrai travail de conception, et c'est la partie dont tes fichiers exportés ne disent rien. Décide ce qui voyage entre les noeuds avant d'en écrire un seul.",
      when: "Ton agent a des embranchements, des boucles, ou doit s'arrêter et repartir là où il en était.",
      notWhen: "Un seul appel avec deux ou trois outils. Tu dessinerais un graphe à un noeud.",
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
      bestFor: "Câbler ensemble des modèles, des outils et de la recherche documentaire",
      shape: "Une grande bibliothèque de pièces qui s'emboîtent : enveloppes de modèles, définitions d'outils, moteurs de recherche, mémoire. Tu assembles plutôt que tu ne déclares, et il y a en général plus d'une façon de faire la même chose.",
      fit: {
        system: "Va dans le gabarit de consigne de la chaîne ou de l'agent.",
        tools: "Des objets Tool, construits depuis tes schémas.",
        brief: "Utile comme document gardé à côté du code, parce que l'assemblage lui-même n'expliquera pas pourquoi l'instruction est écrite ainsi.",
      },
      watch: "La surface est large et elle a beaucoup bougé. Suis la documentation du jour plutôt qu'un article, aussi récent que l'article paraisse.",
      when: "Il te faut de la recherche documentaire, plusieurs fournisseurs de modèles, ou beaucoup de connecteurs tout faits.",
      notWhen: "Tu veux un petit agent et rien d'autre. La bibliothèque sera l'essentiel de ton arbre de dépendances.",
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
      shape: "Tu décris des personnes, pas des programmes : chaque agent a un rôle, un objectif et une histoire, et les tâches se passent de l'un à l'autre. Le framework fait tourner la conversation.",
      fit: {
        system: "Se découpe en trois : le rôle et l'objectif viennent de ta forme, l'histoire de ton instruction. Ta consigne unique devient trois champs, et c'est là l'essentiel du travail de traduction.",
        tools: "Des outils rattachés à chaque agent, depuis tes schémas.",
        brief: "Tes notes de parcours deviennent les descriptions de tâches, qui est l'endroit où CrewAI veut le détail.",
      },
      watch: "Le jeu de rôle est l'interface, et il fait passer une conception faible pour une organisation. Si un seul agent fait le travail, une équipe de quatre le fera plus lentement et de façon moins prévisible.",
      when: "Le travail se découpe vraiment entre des métiers distincts, et chacun mérite d'être écrit à part.",
      notWhen: "Un agent suffirait. La plupart du temps, un agent suffirait.",
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
      bestFor: "Les agents qui travaillent sur tes documents",
      shape: "Tout part de la donnée : tu indexes des documents, puis tu les interroges, et un agent est une couche qui décide quoi chercher et quand.",
      fit: {
        system: "L'instruction de l'agent, une fois que ta recherche documentaire fonctionne déjà.",
        tools: "Les moteurs de requête deviennent des outils. Tes propres schémas se placent à côté.",
        brief: "Ses règles sur les sources et les citations comptent plus ici que partout ailleurs, parce que la recherche documentaire est ce qui rend un agent capable de citer.",
      },
      watch: "La qualité de la réponse est décidée par l'indexation, pas par l'agent. Qui arrive pour ajuster la consigne répare en général la mauvaise moitié.",
      when: "Le travail consiste à lire ta matière et à répondre à partir d'elle. Nos agents chercheur et extracteur atterrissent ici naturellement.",
      notWhen: "Il n'y a aucun document. Tu porterais une pile de recherche documentaire pour faire un appel de modèle.",
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
      shape: "Un agent, ce sont des instructions plus des outils, et il peut passer la conversation à un autre agent. Volontairement peu de notions.",
      fit: {
        system: "Les instructions, presque mot pour mot. C'est la correspondance la plus directe des quinze.",
        tools: "Des fonctions avec schémas, proches de ce que tu as exporté.",
        manifest: "Se lit tel quel comme la définition de l'agent.",
      },
      watch: "Les passages de relais vont dans un seul sens par défaut, ce qui surprend ceux qui attendent qu'une conversation revienne. Décide qui tient le fil avant de câbler deux agents.",
      when: "Tu veux faire tourner quelque chose aujourd'hui et tu es chez ce fournisseur.",
      notWhen: "Tu dois rester portable d'un fournisseur à l'autre. Les notions sont simples mais la bibliothèque n'est pas neutre.",
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
      bestFor: "Le travail qui vit déjà sur l'infrastructure Google",
      shape: "Un agent avec des instructions et des outils, conçu pour se tenir près des modèles et des services Google, avec le déploiement comme partie du framework plutôt que comme après-coup.",
      fit: {
        system: "L'instruction de l'agent.",
        tools: "Les définitions d'outils, plus celles de la plateforme que tu obtiens sans rien écrire.",
        manifest: "Une bonne source pour la configuration que tu vas écrire.",
      },
      watch: "Ce que tu gagnes en déploiement, tu le paies en portabilité. Lis ce qui relève du framework et ce qui relève de la plateforme avant de t'appuyer sur l'un ou l'autre.",
      when: "Tes données, tes modèles ou ton déploiement y sont déjà.",
      notWhen: "Tu es ailleurs. Il y a peu de raisons d'y venir pour la seule boucle d'agent.",
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
      bestFor: "Les applications Python structurées où la forme compte",
      shape: "Le type du résultat se déclare en premier, et le framework fait en sorte que le modèle le produise. L'agent est une fonction avec une signature, pas une conversation.",
      fit: {
        system: "La consigne système, les types faisant une partie du travail que ton instruction faisait.",
        tools: "Des fonctions typées. Les schémas que tu as exportés deviennent les types.",
        manifest: "La moitié devient des déclarations de types, ce qui est tout l'intérêt de venir ici.",
      },
      watch: "La moitié de ton instruction soigneuse devient inutile, parce que le type l'impose. Supprime cette moitié plutôt que de garder les deux : deux endroits qui disent la même règle finiront par se contredire.",
      when: "Ton agent doit rendre une forme précise et tu es dans du Python typé.",
      notWhen: "La sortie est de la prose libre. Tu déclarerais un type pour un paragraphe.",
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
      approach: "Des flux de travail à plusieurs agents",
      bestFor: "L'écosystème Microsoft, à la suite d'AutoGen et de Semantic Kernel",
      shape: "Des agents et des flux de travail au même endroit, rassemblés depuis deux projets antérieurs, avec les préoccupations d'entreprise (identité, hébergement, gouvernance) traitées comme premières.",
      fit: {
        system: "Les instructions de l'agent.",
        tools: "Des définitions d'outils ou de fonctions, selon le langage choisi.",
        manifest: "Proche de la forme de configuration qu'il attend.",
      },
      watch: "Il succède à deux projets qui gardent leur propre documentation et leurs propres articles. Vérifie de quel projet parle une page avant de la suivre.",
      when: "Tu es sur .NET ou sur Azure, et la gouvernance fait partie du besoin.",
      notWhen: "Un seul script Python ferait l'affaire.",
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
      shape: "Les agents tiennent une conversation entre eux, et le travail émerge de l'échange. Un humain peut être l'un des participants.",
      fit: {
        system: "Le message système d'un participant.",
        tools: "Des fonctions enregistrées pour qu'un agent les appelle.",
        brief: "À garder hors du code : les conceptions conversationnelles dérivent, et la commande est ce à quoi tu compares.",
      },
      watch: "Les conversations peuvent être longues et coûter très cher, parce que chaque tour transporte tout l'historique. C'est la leçon de sobriété qui rencontre un framework où il est facile de l'oublier.",
      when: "Le problème gagne vraiment à ce que des agents argumentent, ou à ce qu'un humain entre en cours de conversation.",
      notWhen: "Les étapes sont connues d'avance. Tu veux alors une chaîne, pas une discussion.",
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
      shape: "Les appels de modèle sont traités comme des fonctions que ton application peut appeler, à côté de ton code ordinaire. Le noyau est ce qui les tient ensemble.",
      fit: {
        system: "La consigne d'une fonction sémantique, ou l'instruction de l'agent.",
        tools: "Des fonctions natives, depuis tes schémas.",
        skill: "Correspond bien : l'idée d'une capacité empaquetée est proche de ce que ce framework appelle un greffon.",
      },
      watch: "C'est le framework qui a la plus longue histoire ici, et le Microsoft Agent Framework se tient désormais à côté. Vérifie lequel ton équipe devrait commencer.",
      when: "Tu encastres des appels de modèle dans une grande application existante, en C# ou en Java.",
      notWhen: "Tu fais un prototype. Il y a plus de structure qu'un prototype n'en demande.",
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
      bestFor: "Des fonctions agentiques à l'intérieur d'une application TypeScript",
      shape: "Des agents, des outils, des flux et de la mémoire, écrits comme s'écrit une application TypeScript, pour que l'agent vive dans le même code que le produit.",
      fit: {
        system: "Les instructions de l'agent.",
        tools: "Des outils typés, depuis tes schémas.",
        manifest: "Se lit comme la configuration de l'agent.",
      },
      watch: "Être dans le code de ton application rend facile de laisser l'agent sans tests au milieu de tout le reste. Donne-lui ses propres tests le jour où tu l'ajoutes.",
      when: "Ton produit est en TypeScript et tu veux que l'agent parte avec lui, pas à côté.",
      notWhen: "Ton équipe travaille en Python. Ne change pas de langage pour un framework.",
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
      bestFor: "Des agents avec outils, mémoire et connaissances, sans beaucoup de poids",
      shape: "Un agent est un petit objet avec un modèle, quelques outils, et éventuellement de la mémoire et une base de connaissances. Volontairement peu de choses entre toi et le modèle.",
      fit: {
        system: "Les instructions, à peu près mot pour mot.",
        tools: "Des outils rattachés à l'agent.",
        manifest: "Un point de départ net pour l'objet que tu vas écrire.",
      },
      watch: "Les frameworks légers te donnent moins de structure, ce qui est le but, et ça veut dire que la discipline doit venir de toi. Ta commande écrite est cette discipline.",
      when: "Tu veux quelque chose qui tourne vite sans adopter une grosse pile.",
      notWhen: "Il te faut de l'orchestration, de la reprise ou de la gouvernance. Ce n'est pas son métier.",
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
      bestFor: "Le travail qui tourne sur AWS et Bedrock",
      shape: "Une boucle pilotée par le modèle, avec des outils, faite pour se poser naturellement sur AWS, l'hébergement, l'identité et l'accès aux modèles venant de la plateforme.",
      fit: {
        system: "La consigne système.",
        tools: "Des outils, y compris ceux d'AWS que tu n'as pas eu à écrire.",
        manifest: "Utile comme définition gardée sous gestion de versions.",
      },
      watch: "Les outils de la plateforme sont la raison d'être ici, et ce sont aussi eux qui t'y attachent. Sache lesquels de tes outils sont portables.",
      when: "Tu es sur AWS et tu veux que les questions d'identité et d'hébergement soient réglées pour toi.",
      notWhen: "Tu n'es pas sur AWS.",
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
      bestFor: "Débuter, et comprendre ce qu'est vraiment une boucle",
      shape: "Une très petite bibliothèque : un agent est une boucle qui appelle un modèle, exécute ce qu'il demande, et recommence. Il y a peu à apprendre avant de pouvoir la lire en entier.",
      fit: {
        system: "L'instruction de l'agent.",
        tools: "De simples fonctions outils.",
        brief: "L'endroit où vit ton raisonnement, puisque le code n'en portera pas grand-chose.",
      },
      watch: "Certains agents minimaux exécutent du code engendré. Lis ce qui s'exécute et où avant de le pointer sur quoi que ce soit de réel, et commence en lecture seule, exactement comme l'enseigne le parcours de l'opérateur.",
      when: "Tu apprends, ou le travail est vraiment petit.",
      notWhen: "Il te faut de l'état, de la reprise ou une équipe d'agents.",
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
      bestFor: "Simuler une équipe de développement à partir d'une commande",
      shape: "Des agents prennent les rôles d'une entreprise logicielle (produit, architecte, ingénieur) et produisent les documents que ce rôle produirait, puis les passent plus loin.",
      fit: {
        system: "L'instruction d'un rôle.",
        brief: "La correspondance la plus proche : ce framework pense en documents, et une commande écrite en est un.",
        tools: "Moins central ici que les rôles et ce qu'ils produisent.",
      },
      watch: "Il produit beaucoup de matière qui ressemble à du progrès. Juge-le sur le résultat qui fonctionne, pas sur le volume de documents.",
      when: "Tu veux voir tout un processus logiciel se dérouler à partir d'une seule commande.",
      notWhen: "Tu veux un agent qui fait un travail. C'est l'autre bout de l'échelle.",
    },
  },
]

export const FRAMEWORK_BY_ID = Object.fromEntries(FRAMEWORKS.map((f) => [f.id, f])) as Record<string, Framework>
export const FRAMEWORK_COUNT = FRAMEWORKS.length

/** Les langages représentés · lu par la page pour son filtre, jamais écrit à
 *  la main. Une liste de filtres qui ne correspond plus aux données donne des
 *  boutons qui ne filtrent rien. */
export const FRAMEWORK_LANGS = [...new Set(FRAMEWORKS.flatMap((f) => f.langs))].sort()
