// L'USINE · prompts, briefs .md et skills, rangés par catégorie et par métier.
//
// C'est la partie payante du produit, et cela oblige à trancher une question
// que la plupart des catalogues esquivent : OÙ VIT LE CONTENU PAYANT ?
//
// La réponse facile est de tout embarquer dans le paquet du navigateur et de
// masquer la fin avec un dégradé. C'est ce que font beaucoup de sites, et cela
// ne protège rien du tout : le texte est dans le fichier JavaScript, à deux
// clics dans l'inspecteur. Vendre quelque chose qu'on livre déjà gratuitement
// à qui sait regarder n'est pas un modèle économique, c'est un malentendu qui
// finira par se savoir.
//
// Donc le contenu est COUPÉ EN DEUX, et la coupure est une décision, pas une
// contrainte technique :
//
//   · CE FICHIER porte tout ce qui est gratuit — le titre, le cas d'usage, le
//     raisonnement derrière l'écriture, ce qu'il faut adapter, le poids en
//     jetons, et un extrait réel. C'est aussi ce que lisent les moteurs de
//     recherche, et c'est voulu : la pédagogie est l'appât, elle doit être
//     lisible par tout le monde.
//
//   · LE CORPS DU FICHIER vit côté serveur (api/_lib/libraryBodies.ts) et ne
//     part qu'après vérification du plan. Il n'est jamais dans le paquet du
//     navigateur. scripts/test-library.mjs le vérifie sur le texte, parce
//     qu'une règle qu'on se rappelle de suivre n'en est pas une.
//
// Ce que le gratuit donne est donc ÉNORME et volontairement : on explique
// pourquoi le prompt est écrit ainsi, ce qu'il coûte, et ce qu'il faut y
// changer. Quelqu'un d'attentif peut le réécrire lui-même à partir de ça — et
// tant mieux, c'est une académie. On vend le temps gagné, pas le secret.
import { PROFESSIONS } from './professions'

export type EntryKind = 'prompt' | 'brief' | 'skill'

/** Ce que chaque forme EST, en une phrase · la question est posée à chaque
 *  fois par quelqu'un qui découvre, et la réponse doit être au même endroit
 *  que la liste. */
export const KIND_LABEL: Record<EntryKind, { label: string; one: string; ext: string }> = {
  prompt: {
    label: 'Prompt',
    one: 'One instruction you paste into a chat. The smallest useful unit, and the one to start with.',
    ext: '.txt',
  },
  brief: {
    label: 'Brief',
    one: 'A .md file an agent carries as its standing instructions — who it is, what it never does, what good looks like.',
    ext: '.md',
  },
  skill: {
    label: 'Skill',
    one: 'A folder an agent loads on demand: instructions plus the files they refer to. What a brief becomes when it grows.',
    ext: '.md',
  },
}

export interface Category {
  id: string
  label: string
  /** ce qu'on y range · une phrase, pas une définition */
  blurb: string
  glyph: string
}

/** Les catégories · ce qu'on FAIT, pas le métier qui le fait. Un avocat et un
 *  comptable rédigent tous les deux ; un développeur et un chercheur
 *  analysent tous les deux. Ranger par verbe met les bons voisins ensemble, et
 *  le filtre par métier fait l'autre coupe. */
export const CATEGORIES: Category[] = [
  { id: 'write', label: 'Writing & editing', blurb: 'Drafting, rewriting, cutting. The work that starts from a blank page or a bad first version.', glyph: '✎' },
  { id: 'research', label: 'Research & synthesis', blurb: 'Reading a lot and coming back with the part that matters, with its sources intact.', glyph: '◱' },
  { id: 'analyse', label: 'Analysis & decisions', blurb: 'Turning numbers, options or evidence into a recommendation someone can act on.', glyph: '▲' },
  { id: 'build', label: 'Building & code', blurb: 'Specs, reviews, refactors, tests. Agents that touch a codebase and must not break it.', glyph: '❑' },
  { id: 'talk', label: 'Customers & support', blurb: 'Answering people, in your voice, without promising what you cannot deliver.', glyph: '◈' },
  { id: 'run', label: 'Operations & admin', blurb: 'The recurring work: summaries, handovers, checklists, the meeting nobody wrote up.', glyph: '◳' },
  { id: 'frugal', label: 'Frugality & review', blurb: 'Prompts that audit other prompts: what is wasted, what can be cached, what can be smaller.', glyph: '△' },
]

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<string, Category>

export interface Entry {
  slug: string
  kind: EntryKind
  title: string
  /** une phrase · le résumé de la carte ET la méta-description */
  summary: string
  /** le cas d'usage métier, en clair · « quand on a ceci à faire » */
  useCase: string
  category: string
  /** les métiers qu'il sert · des identifiants de data/professions */
  trades: string[]
  keywords: string[]
  /** POURQUOI il est écrit ainsi · gratuit, et c'est le cœur pédagogique */
  why: string[]
  /** ce qu'il faut changer pour son propre cas · gratuit aussi */
  adapt: string[]
  /** l'erreur que ce fichier existe pour éviter · une phrase */
  trap: string
  /** l'extrait réel · les premières lignes du fichier, telles quelles */
  preview: string
  /** le poids du fichier complet, en jetons · mesuré côté serveur au moment
   *  de la construction du catalogue, jamais deviné ici (voir le script) */
  tokens: number
  /** gratuit ou payant · quelques entrées sont ouvertes, exprès */
  free?: boolean
}

/** Les métiers connus · le filtre du catalogue s'y réfère, et un identifiant
 *  inventé dans une entrée doit se voir plutôt que de disparaître. */
export const TRADE_IDS = new Set(PROFESSIONS.map((p) => p.id))

// ---------------------------------------------------------------------------
// LE CATALOGUE
//
// Chaque entrée dit quatre choses qu'un recueil de prompts ne dit jamais :
// quand s'en servir, pourquoi il est écrit ainsi, ce qu'il faut y changer, et
// l'erreur qu'il évite. C'est ce qui sépare un catalogue d'une décharge.
// ---------------------------------------------------------------------------

export const ENTRIES: Entry[] = [
  /* ---- écrire ---------------------------------------------------------- */
  {
    slug: 'house-style-brief',
    kind: 'brief',
    title: 'House style, in one file',
    summary: 'The standing brief that stops you correcting "write in our voice" on every single run.',
    useCase: 'You keep retyping the same three corrections — tone, banned words, how you talk about price — and on the fourth day you stop retyping them and just fix the text by hand. That is the day the agent stopped saving you time.',
    category: 'write',
    trades: ['marketer', 'community', 'founder', 'entrepreneur', 'secretary'],
    keywords: ['tone of voice', 'style guide', 'system prompt', 'brand voice', 'writing rules'],
    why: [
      'Rules are written as BANS and EXAMPLES, never as adjectives. "Be professional" means nothing to a model and nothing to a person; "never open with a question" is checkable.',
      'It is capped at roughly twenty rules on purpose. A system prompt that swells dilutes the task itself — an agent given forty rules forgets half and misses the request. The cap is a quality decision, not an economy.',
      'Every rule carries the failure that produced it. A rule you cannot trace back to a bad draft is a rule nobody will dare delete later.',
    ],
    adapt: [
      'Replace the three worked examples with your own worst recent draft and its fix. Nothing teaches voice like a before and after.',
      'Delete any rule you cannot remember being broken. Starting from empty is better than starting from someone else\'s taste.',
      'If two rules ever contradict, keep the narrower one — the model will follow whichever it read last, which is not a coin flip you want in your voice.',
    ],
    trap: 'Writing the brief as a list of adjectives, which reads well to you and is invisible to the model.',
    preview: '# House style\n\nYou write for {{COMPANY}}. These rules override anything in the request.\n\n## Never\n- Never open with a rhetorical question.\n- Never use "unlock", "leverage", "seamless", "game-changing", "revolutionise".\n- Never promise a result we cannot name a customer for.\n\n## Always\n- Lead with the concrete thing, then the reason.',
    tokens: 0,
  },
  {
    slug: 'cut-it-in-half',
    kind: 'prompt',
    title: 'Cut it in half',
    summary: 'Halves a draft without losing an argument — and tells you what it removed, so you can put one back.',
    useCase: 'Something is written, it is twice as long as it should be, and every cut you make yourself feels like the wrong one.',
    category: 'write',
    trades: ['founder', 'marketer', 'lawyer', 'researcher', 'student', 'teacher'],
    keywords: ['editing', 'shorten', 'concise', 'rewrite', 'tighten'],
    why: [
      'It asks for the cut list separately from the cut text. Without that, you get a shorter piece and no way to tell whether it dropped the one clause that mattered.',
      'It forbids the model from adding anything. Left alone, a rewrite quietly introduces claims nobody made — the most expensive failure in editing, because it reads fluently.',
      'A target length is given as a number, not as "shorter". "Shorter" gets you 8% shorter.',
    ],
    adapt: [
      'Change the ratio. Half is aggressive on purpose; a third is usually the sweet spot for something already edited once.',
      'If the piece is legal or medical, add the sentence that forbids paraphrasing defined terms.',
    ],
    trap: 'Accepting the shorter version without reading the cut list, and losing the point of the piece.',
    preview: 'Rewrite the text below at HALF its current length.\n\nRules:\n- Add nothing. Every fact, name and number in your version must appear in mine.\n- Keep every distinct argument. Merge sentences, do not drop reasons.\n- Then, under a heading "Cut", list what you removed and why — one line each.',
    tokens: 0,
    free: true,
  },

  /* ---- chercher -------------------------------------------------------- */
  {
    slug: 'sourced-summary',
    kind: 'prompt',
    title: 'Summary that keeps its sources',
    summary: 'Condenses a long document and makes every claim point back at the line it came from.',
    useCase: 'You have forty pages and a meeting in an hour, and you will be asked "where does that come from?" about exactly one sentence of your summary.',
    category: 'research',
    trades: ['researcher', 'lawyer', 'student', 'pm', 'wealth', 'accountant'],
    keywords: ['summarise', 'citations', 'sources', 'long document', 'evidence'],
    why: [
      'Each claim carries a quoted fragment, not a page number. A page number is unverifiable at a glance and is exactly where models invent.',
      'It asks explicitly for what the document does NOT say. A summary that only reports presence is how a reader ends up assuming coverage that is not there.',
      'Uncertainty is a required field. Given permission to say "the document is ambiguous here", a model says it; given no such permission, it picks a side.',
    ],
    adapt: [
      'If the document is a contract, swap the quoted fragment for the clause number — there, numbering is stable and quoting is noise.',
      'Raise the fragment length for dense prose; six words is too few to be checkable in legal text.',
    ],
    trap: 'Asking for "a summary with sources" and getting confident page references that do not exist.',
    preview: 'Summarise the document below.\n\nFor every claim you make, append the exact quoted fragment it rests on, in square brackets, at most 12 words.\nIf a claim rests on nothing you can quote, do not make it.\n\nThen add two sections:\n"Not covered" — questions a reader would expect this document to answer and it does not.\n"Ambiguous" — where the text genuinely supports more than one reading.',
    tokens: 0,
  },
  {
    slug: 'competitor-read',
    kind: 'brief',
    title: 'Competitor read, without the adjectives',
    summary: 'A standing brief for an agent that watches a market and reports what changed, not what it feels.',
    useCase: 'You need to know what three competitors shipped this month, and every tool you have tried comes back with "they are strengthening their position in the market".',
    category: 'research',
    trades: ['founder', 'growth', 'pm', 'marketer', 'sales', 'ceo'],
    keywords: ['competitive analysis', 'market watch', 'positioning', 'monitoring'],
    why: [
      'It bans comparative adjectives outright. "Stronger", "leading" and "innovative" are the words a model reaches for when it has nothing to report, and they are indistinguishable from insight at a glance.',
      'It demands a dated change list. A market report without dates cannot be compared with last month\'s, which is the only thing that makes it worth writing.',
      'It separates "what they did" from "what I think it means", because the first is checkable and the second is yours to disagree with.',
    ],
    adapt: [
      'Name the specific surfaces to watch — pricing page, changelog, careers page. Careers pages leak roadmaps months early and almost nobody reads them.',
      'Set the cadence to match your decision cycle, not the news cycle. Weekly reports on a quarterly decision are pure token spend.',
    ],
    trap: 'Getting a beautifully written report that would read identically if nothing had happened at all.',
    preview: '# Competitor watch\n\nYou report CHANGES, not impressions.\n\n## Never\n- Never use: leading, innovative, strengthening, positioned, robust, cutting-edge.\n- Never report an absence of change as a change.\n- Never mix observation with interpretation in the same sentence.',
    tokens: 0,
  },

  /* ---- analyser -------------------------------------------------------- */
  {
    slug: 'decision-memo',
    kind: 'prompt',
    title: 'The one-page decision memo',
    summary: 'Turns a pile of options into a recommendation with its reasoning and its kill criteria on one page.',
    useCase: 'Three plausible options, a room that will discuss it for an hour, and no written trace of why you picked one.',
    category: 'analyse',
    trades: ['founder', 'ceo', 'pm', 'manager', 'wealth', 'entrepreneur'],
    keywords: ['decision', 'memo', 'options', 'trade-offs', 'recommendation'],
    why: [
      'It forces a recommendation. An options paper with no recommendation is the author declining to do the hard part, and models do it by default because it is safer.',
      'It requires KILL CRITERIA — what would have to be true for this to be the wrong call. That single field is what turns a memo into something you can revisit in six months.',
      'Costs are asked for in the unit you actually pay: money, weeks, and who has to stop doing what.',
    ],
    adapt: [
      'If the decision is reversible, say so in the prompt. Reversible decisions deserve a shorter memo and a faster call, and the model will happily over-analyse a door you can walk back through.',
      'Add your real constraints — headcount, a date, a contract — or you will get the textbook answer.',
    ],
    trap: 'A balanced, thorough, well-structured document that does not actually recommend anything.',
    preview: 'Write a one-page decision memo.\n\nRequired sections, in this order:\n1. The decision, stated as a question with a date attached.\n2. Recommendation — one option, named, in the first sentence.\n3. Why this one, in at most four bullets.\n4. What we give up by choosing it.\n5. Kill criteria — what would have to become true for this to be wrong.\n6. Cost: money, weeks, and who stops doing what.',
    tokens: 0,
  },
  {
    slug: 'numbers-sanity',
    kind: 'prompt',
    title: 'Sanity-check these numbers',
    summary: 'Audits a spreadsheet or a model for the four mistakes that survive every review.',
    useCase: 'A forecast is about to go to a board, an investor or a bank, and the person who built it has read it too many times to see it.',
    category: 'analyse',
    trades: ['accountant', 'founder', 'wealth', 'ceo', 'pm'],
    keywords: ['spreadsheet', 'forecast', 'model review', 'finance', 'audit'],
    why: [
      'It looks for the four errors that survive human review — unit mismatches, a growth rate compounding where it should not, double-counted costs, and a total that does not equal its parts — instead of "reviewing" in general.',
      'It is told to report ARITHMETIC only and flag judgement separately. A model asked to check numbers will otherwise start arguing with your assumptions, which is a different meeting.',
      'It asks for the check it could NOT perform. Silence about what was unverifiable is how a review gives false comfort.',
    ],
    adapt: [
      'Paste the formulas, not just the values, when you can. Values hide the error; formulas contain it.',
      'Name your currency and your fiscal year explicitly — two of the four failure modes are unit and period mismatches.',
    ],
    trap: 'A review that says "the model looks reasonable" and misses a row summed one cell short.',
    preview: 'Check the figures below for ARITHMETIC errors only. Do not argue with the assumptions.\n\nLook specifically for:\n- units that change without conversion (per month vs per year, gross vs net, currency)\n- a rate compounding where it should be applied once\n- a cost that appears in two categories\n- any total that does not equal the sum of its parts\n\nThen list, under "Could not check", anything you had to take on trust.',
    tokens: 0,
  },

  /* ---- construire ------------------------------------------------------ */
  {
    slug: 'code-review-brief',
    kind: 'brief',
    title: 'Code review that finds bugs, not style',
    summary: 'A reviewer brief that reports defects with a failing case, and stays quiet about everything else.',
    useCase: 'Your review tool comments on forty things per pull request and you have stopped reading any of them.',
    category: 'build',
    trades: ['engineer', 'gamedev', 'pm'],
    keywords: ['code review', 'pull request', 'bugs', 'static analysis', 'quality'],
    why: [
      'Every finding must come with a concrete failing case: inputs, state, and the wrong output. A finding that cannot be made to fail is a preference, and preferences are what made the tool unreadable.',
      'Style is banned unless the repository has a written rule it violates. Most review noise is taste with a confident voice.',
      'Findings are ranked and capped. An unranked list of forty is functionally the same as no list.',
    ],
    adapt: [
      'Point it at your actual conventions file. Without one, "the repository has a rule" is unresolvable and it will fall back to taste.',
      'Raise the cap for a first review of legacy code, and lower it to three for day-to-day pull requests.',
    ],
    trap: 'A reviewer so thorough that its output is skipped, which is worse than no reviewer at all.',
    preview: '# Reviewer\n\nYou report DEFECTS. You do not report preferences.\n\n## A finding is only a finding if you can write\n- the inputs or state that trigger it\n- what the code does then\n- what it should have done\n\nIf you cannot write those three lines, say nothing.',
    tokens: 0,
  },
  {
    slug: 'spec-from-a-conversation',
    kind: 'prompt',
    title: 'Turn this conversation into a spec',
    summary: 'Converts a messy thread into something buildable, and lists the questions nobody answered.',
    useCase: 'Forty messages across two channels and a call, and somebody now has to build the thing that was agreed — or was it?',
    category: 'build',
    trades: ['pm', 'engineer', 'founder', 'manager', 'gamedev'],
    keywords: ['spec', 'requirements', 'product', 'tickets', 'scope'],
    why: [
      'The open-questions section is required and must not be empty. In any real thread something was left undecided, and a spec that hides it moves the argument to build time, where it costs ten times more.',
      'It separates what was AGREED from what was merely mentioned. Those look identical in a chat log and completely different in a contract.',
      'Acceptance criteria are written as observable behaviour, so the person building it and the person checking it can disagree before the work starts rather than after.',
    ],
    adapt: [
      'Add your ticket template so the output pastes straight in. Reformatting by hand is where these get abandoned.',
      'If the thread involved a customer, ask it to quote them verbatim in the rationale. Paraphrased customer wants drift within one hop.',
    ],
    trap: 'A tidy spec that quietly resolves the ambiguities by guessing, so nobody notices they existed.',
    preview: 'Turn the conversation below into a specification.\n\nSections:\n- Agreed — only what someone explicitly accepted. Quote who and when.\n- Mentioned, not agreed — raised and never settled.\n- Acceptance criteria — observable behaviour, one line each.\n- Open questions — MUST NOT be empty. If you believe nothing is open, you have misread the thread.',
    tokens: 0,
  },

  /* ---- clients --------------------------------------------------------- */
  {
    slug: 'support-reply-brief',
    kind: 'brief',
    title: 'Support replies that never overpromise',
    summary: 'A brief for customer replies that is allowed to say "I do not know", and is forbidden to invent a date.',
    useCase: 'Your support agent is polite, fast, and has twice promised a fix "next week" that nobody had planned.',
    category: 'talk',
    trades: ['callcenter', 'seller', 'community', 'founder', 'entrepreneur', 'secretary'],
    keywords: ['customer support', 'helpdesk', 'replies', 'tone', 'escalation'],
    why: [
      'Dates, prices and refunds are a hard ban — the agent may quote them from the knowledge base and may never derive them. Those are the three things that cost real money when invented.',
      '"I do not know, here is who does" is written as an approved, complete answer. Without that, a model will always prefer a plausible guess to an admission.',
      'Escalation has a trigger list, not a judgement call. Judgement is where a helpful agent talks a furious customer further down the wrong path.',
    ],
    adapt: [
      'Paste your real refund policy verbatim into the knowledge section. Summarised policies are how agents invent exceptions.',
      'Add the three complaints you actually get most, with the reply you would send yourself.',
    ],
    trap: 'A warm, helpful, well-written reply that commits you to something you cannot do.',
    preview: '# Support\n\nYou answer customers. You are allowed not to know things.\n\n## Hard bans\n- Never state a date that is not written in the knowledge base.\n- Never quote a price or a discount you cannot cite.\n- Never confirm a refund. Say what the policy says and hand over.\n\n## Always available answer\n"I do not have that answer, and I do not want to guess at it. I am passing this to {{TEAM}}, who will reply by {{SLA}}."',
    tokens: 0,
  },
  {
    slug: 'objection-handling',
    kind: 'prompt',
    title: 'Answer this objection honestly',
    summary: 'Drafts a reply to a sales objection that concedes what is true before it argues.',
    useCase: 'A prospect has raised something real — you are more expensive, you lack a feature — and every draft you write sounds defensive.',
    category: 'talk',
    trades: ['sales', 'seller', 'realtor', 'founder', 'entrepreneur', 'wealth'],
    keywords: ['sales', 'objection', 'pricing', 'negotiation', 'email'],
    why: [
      'It must state the true part of the objection first, in its own words. A reply that skips this reads as evasion whatever follows it, and the prospect has already noticed.',
      'It is forbidden to invent advantages. The single fastest way to lose a technical buyer is one claim they can check and disprove.',
      'It offers the walk-away. Naming the case where you are the wrong choice is what makes the rest credible, and it saves everyone a quarter.',
    ],
    adapt: [
      'Give it your two real losses this year and why. Generic objection handling produces generic replies.',
      'If you are genuinely more expensive, say by how much in the prompt. Vagueness produces waffle.',
    ],
    trap: 'A confident rebuttal that contains one checkable exaggeration, which is all it takes.',
    preview: 'Draft a reply to the objection below.\n\nStructure, in order:\n1. The part of the objection that is TRUE, in your own words, with no "but".\n2. What we do about it, concretely. No adjectives.\n3. What we still do not do. Name it.\n4. Who we are the wrong choice for — one sentence, sincere.\n\nInvent nothing. If you need a fact I have not given you, ask for it instead of writing the reply.',
    tokens: 0,
  },

  /* ---- opérer ---------------------------------------------------------- */
  {
    slug: 'meeting-to-actions',
    kind: 'prompt',
    title: 'Meeting notes into owned actions',
    summary: 'Extracts decisions and actions with a name and a date on each, and flags the ones nobody owns.',
    useCase: 'The meeting happened, the notes exist, and in three weeks nobody will remember who said they would do the thing.',
    category: 'run',
    trades: ['manager', 'secretary', 'pm', 'hr', 'founder', 'ceo'],
    keywords: ['meeting notes', 'minutes', 'actions', 'follow-up', 'accountability'],
    why: [
      'An action with no owner is reported as UNOWNED rather than assigned to whoever spoke last. Guessing an owner is how a task quietly dies while everyone believes it is handled.',
      'Decisions are separated from discussion. Most minutes are a transcript with headings, which is why nobody reads them twice.',
      'It reports what was raised and deliberately dropped — the item most likely to come back, and the one no template captures.',
    ],
    adapt: [
      'Add your team\'s names so it can match first names to people. Without the list it will treat "Sam" and "Samira" as two people, or as one.',
      'If you run the same meeting weekly, feed it last week\'s output too and ask for what slipped.',
    ],
    trap: 'A tidy action list where half the owners were inferred, which is worse than a list with holes in it.',
    preview: 'From the notes below, produce:\n\n**Decided** — things settled. One line each, with who decided.\n**Actions** — one line each: what, who, by when.\n**Unowned** — actions where no name was actually said. Do NOT guess an owner.\n**Dropped** — raised and explicitly set aside, with the reason.\n\nIf a date was not said, write "no date" — never invent one.',
    tokens: 0,
  },
  {
    slug: 'handover-note',
    kind: 'brief',
    title: 'The handover that survives a holiday',
    summary: 'A standing brief that produces the note your replacement can actually work from.',
    useCase: 'Someone is off for two weeks, or leaving, and the handover doc is a list of links with no explanation of what breaks.',
    category: 'run',
    trades: ['manager', 'hr', 'secretary', 'engineer', 'pm', 'ceo'],
    keywords: ['handover', 'onboarding', 'continuity', 'documentation', 'runbook'],
    why: [
      'It leads with what BREAKS and who shouts, not with an org chart. The first question of anyone covering is "what blows up if I do nothing", and no template asks it.',
      'It demands the undocumented things by name — the workaround, the person who actually approves, the thing that only works on Tuesdays. Those are the whole value of a handover and the first casualty of a template.',
      'Access is listed as a request procedure, not as a set of credentials. Handover notes are the most-copied document in any company.',
    ],
    adapt: [
      'Set the absence length. A two-week cover and a permanent replacement need almost opposite documents.',
      'Add the two things you would be embarrassed for a colleague to discover. Those are exactly the ones to write down.',
    ],
    trap: 'A complete, accurate handover of everything except the three unwritten rules that make the job work.',
    preview: '# Handover\n\nYou write for someone who arrives on Monday knowing nothing.\n\n## Order, always\n1. What breaks if nobody does anything, and within how long.\n2. Who shouts, about what, and what they actually need.\n3. The recurring work, with its real cadence — not its intended one.\n4. The workarounds. Every job has them. Name them.',
    tokens: 0,
  },

  /* ---- sobriété -------------------------------------------------------- */
  {
    slug: 'prompt-cost-audit',
    kind: 'prompt',
    title: 'Audit this prompt for waste',
    summary: 'Points at what your prompt spends tokens on and what it would cost to stop.',
    useCase: 'Your bill has doubled, nothing obvious changed, and you have no idea which part of the request grew.',
    category: 'frugal',
    trades: ['engineer', 'founder', 'pm', 'researcher', 'growth'],
    keywords: ['token cost', 'optimisation', 'context window', 'caching', 'frugality'],
    why: [
      'It is asked to report waste by WEIGHT, not by count. Seven redundant words matter less than one re-sent document, and a count-based review reverses that.',
      'It must give the saving per run AND per month at your volume. A saving expressed in tokens convinces nobody; the same number in euros ends the argument.',
      'It is told to name what must NOT be cut. An audit that only subtracts will eventually cut the instruction holding the whole thing together.',
    ],
    adapt: [
      'Give it your real monthly call volume, or the monthly figures are decoration.',
      'If you use prompt caching, say so — the advice for a cached prefix is nearly the opposite of the advice for an uncached one.',
    ],
    trap: 'Trimming words to feel frugal while a 30,000-token document is re-sent on every single turn.',
    preview: 'Audit the prompt below for token waste.\n\nReport, heaviest first:\n| What | Est. tokens | Per run | Per month at {{VOLUME}} calls | How to fix |\n\nRules:\n- Rank by WEIGHT, not by how obviously wasteful it looks.\n- Anything re-sent every turn goes at the top, whatever its size.\n- End with "Do not cut": the parts that look redundant and are load-bearing.',
    tokens: 0,
    free: true,
  },
  {
    slug: 'context-diet',
    kind: 'skill',
    title: 'The context diet',
    summary: 'A skill that decides what an agent carries between turns, and what it summarises away.',
    useCase: 'Your agent works well for six turns and then gets slow, expensive and vague — because it is still carrying turn one.',
    category: 'frugal',
    trades: ['engineer', 'pm', 'researcher', 'founder'],
    keywords: ['context window', 'memory', 'summarisation', 'agent loop', 'cost'],
    why: [
      'It distinguishes settled facts from live reasoning. Settled facts compress to a line; live reasoning must be carried whole, and treating them the same is why naive summarisation makes agents stupid.',
      'Compression is triggered by a token threshold, not by a turn count. Turns vary in size by two orders of magnitude.',
      'It keeps the original of anything it compressed, addressable. A diet you cannot undo is data loss with a friendly name.',
    ],
    adapt: [
      'Set the threshold well under your model\'s window. Compressing at 90% full means you compress in the middle of the hardest turn.',
      'Never compress the system brief or the user\'s original request — pin both.',
    ],
    trap: 'Summarising the conversation so well that the agent forgets the constraint it was working around.',
    preview: '# Context diet\n\nYou decide what the agent carries forward.\n\n## Two kinds of thing\n**Settled** — facts, decisions, results. Compress to one line each, keep a pointer to the original.\n**Live** — the reasoning currently in progress. Carry it whole. Never compress it.\n\n## Trigger\nAt {{THRESHOLD}} tokens, not at a turn count.\n\n## Never compress\n- the system brief\n- the user\'s original request\n- any constraint stated as "never" or "must"',
    tokens: 0,
  },
  {
    slug: 'model-picker',
    kind: 'brief',
    title: 'Which model for which step',
    summary: 'A routing brief: the cheap model drafts, the strong one is kept for the step you ship.',
    useCase: 'You are running everything on the best model because choosing feels risky, and paying five times over for steps nobody reads.',
    category: 'frugal',
    trades: ['engineer', 'founder', 'pm', 'growth', 'researcher'],
    keywords: ['model routing', 'cost', 'latency', 'quality', 'fallback'],
    why: [
      'It routes on the SHAPE of the step — extraction, drafting, judgement, final copy — rather than on importance. Importance is a feeling; shape is a property you can look up.',
      'It names an escalation rule, so a cheap step that fails twice moves up instead of failing five times cheaply. Retries on the wrong model are the most common false economy in routing.',
      'It requires you to measure before you route. Half of routing decisions are made against an intuition about quality that a twenty-minute test disproves.',
    ],
    adapt: [
      'Fill the table with the models you actually have access to and their real prices. Routing against a price you half-remember is worse than not routing.',
      'Put your quality bar in writing per step type, or escalation becomes a vibe.',
    ],
    trap: 'Routing everything to the cheap model, then adding three retries that cost more than the strong model would have.',
    preview: '# Model routing\n\nRoute by the SHAPE of the step, never by how important it feels.\n\n| Shape | Example | Model |\n| --- | --- | --- |\n| Extraction | pull the dates out of this | smallest |\n| Drafting | first version, will be edited | small |\n| Judgement | is this argument sound | strong |\n| Ships to a human | the final text | strong |\n\n## Escalation\nTwo failures at a tier moves the step up one tier. Never retry more than twice at the same tier.',
    tokens: 0,
  },
]

export const ENTRY_BY_SLUG = Object.fromEntries(ENTRIES.map((e) => [e.slug, e])) as Record<string, Entry>
export const ENTRY_COUNT = ENTRIES.length
export const FREE_COUNT = ENTRIES.filter((e) => e.free).length

/** Combien d'entrées par catégorie · pour la page d'accueil du catalogue, qui
 *  ne doit annoncer que ce qu'elle a vraiment. */
export const countByCategory = (id: string) => ENTRIES.filter((e) => e.category === id).length
export const countByTrade = (id: string) => ENTRIES.filter((e) => e.trades.includes(id)).length

/** Les métiers qui ont au moins une entrée · un filtre qui ne rend rien est
 *  pire qu'un filtre absent. */
export const TRADES_WITH_ENTRIES = PROFESSIONS.filter((p) => countByTrade(p.id) > 0)
