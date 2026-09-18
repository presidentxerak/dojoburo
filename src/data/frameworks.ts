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
}

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
  },
]

export const FRAMEWORK_BY_ID = Object.fromEntries(FRAMEWORKS.map((f) => [f.id, f])) as Record<string, Framework>
export const FRAMEWORK_COUNT = FRAMEWORKS.length

/** Les langages représentés · lu par la page pour son filtre, jamais écrit à
 *  la main. Une liste de filtres qui ne correspond plus aux données donne des
 *  boutons qui ne filtrent rien. */
export const FRAMEWORK_LANGS = [...new Set(FRAMEWORKS.flatMap((f) => f.langs))].sort()
