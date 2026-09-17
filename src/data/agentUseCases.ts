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

// LES TROIS COURS ne sont PAS déclarés ici. Ils vivent dans data/positioning,
// dérivés des piliers, et ce fichier n'en porte aucune copie : une seconde
// liste de cours à côté de la première est la façon la plus sûre d'annoncer
// trois cours dans l'en-tête et deux sur la page d'accueil.

/** Une étape du parcours. Elle DIT ce qu'on produit, pas ce qu'on lit : un
 *  parcours dont les étapes sont des chapitres est un sommaire déguisé. */
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
}

export const USE_CASES: UseCase[] = [
  {
    id: 'research',
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
