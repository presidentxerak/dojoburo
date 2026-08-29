// ---------------------------------------------------------------------------
// DojoBuro · project archetypes.
//
// An archetype is a READY-MADE PROJECT: a goal ("run an Instagram campaign",
// "write a book", "build an app") with the exact team that job needs and the
// order they work in. Pick a card on the home page and it drops a dojo into your
// pipeline, already staffed and wired to the right apps.
//
// This is the menu the whole app is built around: you choose agents by NEED,
// not by browsing a fixed org chart. Everything stays editable afterwards —
// rename agents, add or remove them, swap their connectors.
// ---------------------------------------------------------------------------
import { ROLE_BY_ID, COMPANY_IDS } from './roleAgents'

/** One step of the loop: which agent acts, and what it produces. */
export interface LoopStep {
  /** role id of the agent that runs this step */
  agent: string
  /** server work task id (api/_lib/worktasks) · the real deliverable produced */
  task: string
  /** what the user sees */
  label: string
  /** one line explaining the step */
  detail: string
}

export type ArchCategory = 'Marketing' | 'Product' | 'Content' | 'Business' | 'Creative' | 'Operations'

export interface Archetype {
  id: string
  /** the goal, in the user's words */
  label: string
  tagline: string
  category: ArchCategory
  /** short non-emoji glyph for the card */
  glyph: string
  tint: string
  /** 3D world (data/templates) */
  template: string
  /** the dedicated crew, in seating order · index 0 is ALWAYS the dojo's
   *  orchestrator (Chief), who runs this project's loop. */
  agents: string[]
  /** the loop the orchestrator runs, in order */
  loop: LoopStep[]
}

export const ARCHETYPES: Archetype[] = [
  {
    id: 'social',
    label: 'Social media campaign',
    tagline: 'Research your audience, produce the posts, measure what lands.',
    category: 'Marketing',
    glyph: '◈',
    tint: '#e0459b',
    template: 'villa',
    agents: ['chief', 'scout', 'marketus', 'busino', 'deck'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Audience research', detail: 'Who to talk to, what they care about, what competitors post.' },
      { agent: 'marketus', task: 'campaign', label: 'Content plan', detail: 'Positioning, channels and a 2-week content calendar.' },
      { agent: 'marketus', task: 'ads', label: 'Post & ad creatives', detail: '5 ready-to-run variations with visuals and targeting.' },
      { agent: 'deck', task: 'prd', label: 'Campaign brief', detail: 'The whole plan packaged as a shareable brief.' },
    ],
  },
  {
    id: 'startup',
    label: 'Launch my start-up',
    tagline: 'The full company: brand, site, offer, growth, finance.',
    category: 'Business',
    glyph: '▲',
    tint: '#7b5cff',
    template: 'startup',
    agents: COMPANY_IDS,
    loop: [
      { agent: 'chief', task: 'strategy', label: 'Strategy & OKRs', detail: 'Vision, bets and the metric that matters.' },
      { agent: 'weblos', task: 'website', label: 'Website', detail: 'Landing page plan and the exact copy.' },
      { agent: 'busino', task: 'offer', label: 'Offer & pricing', detail: 'What you sell and the three tiers.' },
      { agent: 'marketus', task: 'ads', label: 'Ad creatives', detail: 'Launch campaign, ready to run.' },
      { agent: 'pumpi', task: 'outreach', label: 'Outreach', detail: 'Who to contact and the email sequence.' },
    ],
  },
  {
    id: 'app',
    label: 'Build an app',
    tagline: 'From the idea to a spec, a backlog and a landing page.',
    category: 'Product',
    glyph: '◱',
    tint: '#3b82f6',
    template: 'lab',
    agents: ['chief', 'scout', 'devi', 'weblos', 'busino'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Market & users', detail: 'The problem, who has it, what already exists.' },
      { agent: 'chief', task: 'prd', label: 'Product spec', detail: 'Scope, user stories and acceptance criteria.' },
      { agent: 'devi', task: 'tech-spec', label: 'Technical design', detail: 'Architecture, data model and rollout plan.' },
      { agent: 'weblos', task: 'website', label: 'Landing page', detail: 'The page that sells it, section by section.' },
    ],
  },
  {
    id: 'book',
    label: 'Write a book',
    tagline: 'Research, outline, chapters, cover and a launch plan.',
    category: 'Content',
    glyph: '❑',
    tint: '#c026d3',
    template: 'castle',
    agents: ['chief', 'scout', 'scribe', 'pixel', 'marketus'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Angle & audience', detail: 'What the book says and who it is for.' },
      { agent: 'scribe', task: 'prd', label: 'Outline', detail: 'Structure, chapters and the through-line.' },
      { agent: 'marketus', task: 'campaign', label: 'Launch plan', detail: 'How the book finds its readers.' },
    ],
  },
  {
    id: 'brand',
    label: 'Create a brand',
    tagline: 'Name, identity, colours, site — one coherent look.',
    category: 'Business',
    glyph: '◐',
    tint: '#a855f7',
    template: 'dojo',
    agents: ['chief', 'brandi', 'pixel', 'weblos', 'marketus'],
    loop: [
      { agent: 'brandi', task: 'design-system', label: 'Design system', detail: 'Real tokens, palette, type and components.' },
      { agent: 'weblos', task: 'website', label: 'Website', detail: 'The site that carries the identity.' },
      { agent: 'marketus', task: 'ads', label: 'Launch creatives', detail: 'The brand out in the world.' },
    ],
  },
  {
    id: 'content',
    label: 'Content machine',
    tagline: 'A repeatable engine: research, write, publish, measure.',
    category: 'Content',
    glyph: '≡',
    tint: '#0ea5e9',
    template: 'garden',
    agents: ['chief', 'scout', 'scribe', 'marketus', 'busino'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Topic research', detail: 'What your audience searches for.' },
      { agent: 'scribe', task: 'campaign', label: 'Editorial calendar', detail: 'Themes, formats and a publishing rhythm.' },
      { agent: 'pumpi', task: 'outreach', label: 'Distribution', detail: 'Getting each piece in front of people.' },
    ],
  },
  {
    id: 'shop',
    label: 'Open an online shop',
    tagline: 'Products, storefront, payments and the first customers.',
    category: 'Business',
    glyph: '⬡',
    tint: '#1fa563',
    template: 'factory',
    agents: ['chief', 'weblos', 'marketus', 'pumpi', 'busino', 'vaultor'],
    loop: [
      { agent: 'busino', task: 'offer', label: 'Offer & pricing', detail: 'What you sell and at what price.' },
      { agent: 'weblos', task: 'website', label: 'Storefront', detail: 'The shop page and the checkout copy.' },
      { agent: 'marketus', task: 'ads', label: 'Launch ads', detail: 'The campaign that brings the first buyers.' },
    ],
  },
  {
    id: 'sales',
    label: 'Fill my pipeline',
    tagline: 'Find the right prospects and write the outreach that converts.',
    category: 'Marketing',
    glyph: '◤',
    tint: '#d98c17',
    template: 'default',
    agents: ['chief', 'scout', 'pumpi', 'nexa', 'busino'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Ideal customer', detail: 'Who to target and why they buy.' },
      { agent: 'pumpi', task: 'outreach', label: 'Prospects & sequence', detail: 'The list and a 3-step email sequence.' },
      { agent: 'busino', task: 'model', label: 'Pipeline model', detail: 'Volumes, conversion and what it is worth.' },
    ],
  },
  {
    id: 'study',
    label: 'Market study',
    tagline: 'Understand a market and turn it into a decision-ready deck.',
    category: 'Product',
    glyph: '◍',
    tint: '#14b8a6',
    template: 'space',
    agents: ['chief', 'scout', 'busino', 'deck'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Landscape', detail: 'The market, the players and the gaps.' },
      { agent: 'busino', task: 'model', label: 'Numbers', detail: 'Size, economics and the key assumptions.' },
      { agent: 'deck', task: 'prd', label: 'Decision deck', detail: 'The findings, packaged to present.' },
    ],
  },
]

// --- more specialities · every card ships an orchestrator (Chief) plus the
// exact specialists that trade needs. All of it stays editable afterwards.
const MORE: Archetype[] = [
  {
    id: 'newsletter', label: 'Launch a newsletter', tagline: 'Find your angle, write the issues, grow the list.',
    category: 'Content', glyph: '✉', tint: '#8b5cf6', template: 'garden',
    agents: ['chief', 'scout', 'scribe', 'marketus', 'busino'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Angle & audience', detail: 'What you write about and who subscribes.' },
      { agent: 'scribe', task: 'campaign', label: 'Editorial plan', detail: 'Format, rhythm and the first issues.' },
      { agent: 'pumpi', task: 'outreach', label: 'Grow the list', detail: 'Where subscribers come from and the invite.' },
    ],
  },
  {
    id: 'podcast', label: 'Start a podcast', tagline: 'Concept, guests, episode structure and promotion.',
    category: 'Content', glyph: '◉', tint: '#f43f5e', template: 'villa',
    agents: ['chief', 'scout', 'scribe', 'pixel', 'marketus'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Concept & audience', detail: 'The show, its angle and who listens.' },
      { agent: 'scribe', task: 'prd', label: 'Episode format', detail: 'Structure, segments and the guest brief.' },
      { agent: 'marketus', task: 'campaign', label: 'Promotion', detail: 'How each episode finds listeners.' },
    ],
  },
  {
    id: 'rebrand', label: 'Rebrand my business', tagline: 'Audit what you have, redesign it, roll it out everywhere.',
    category: 'Creative', glyph: '◑', tint: '#a855f7', template: 'dojo',
    agents: ['chief', 'scout', 'brandi', 'pixel', 'weblos'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Brand audit', detail: 'Where you stand and what needs to change.' },
      { agent: 'brandi', task: 'design-system', label: 'New identity', detail: 'Palette, type and components, for real.' },
      { agent: 'weblos', task: 'website', label: 'Roll-out', detail: 'The site carrying the new brand.' },
    ],
  },
  {
    id: 'pitch', label: 'Raise funds', tagline: 'The story, the numbers and the deck investors read.',
    category: 'Business', glyph: '◭', tint: '#f59e0b', template: 'castle',
    agents: ['chief', 'scout', 'busino', 'deck', 'legi'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Market & story', detail: 'The opportunity, in investor language.' },
      { agent: 'busino', task: 'model', label: 'Financial model', detail: 'Revenue build, burn and runway.' },
      { agent: 'deck', task: 'prd', label: 'Investor deck', detail: 'The narrative, slide by slide.' },
    ],
  },
  {
    id: 'hiring', label: 'Hire someone', tagline: 'Define the role, write the scorecard, run the process.',
    category: 'Operations', glyph: '◎', tint: '#14b8a6', template: 'default',
    agents: ['chief', 'scout', 'nexa', 'legi'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Role definition', detail: 'What this hire owns and why now.' },
      { agent: 'chief', task: 'jd', label: 'Job description', detail: 'The post, the scorecard and a 30/60/90.' },
      { agent: 'nexa', task: 'outreach', label: 'Sourcing', detail: 'Where the candidates are and the outreach.' },
    ],
  },
  {
    id: 'saas', label: 'Launch a SaaS', tagline: 'Spec it, price it, build the funnel and ship it.',
    category: 'Product', glyph: '◰', tint: '#2563eb', template: 'lab',
    agents: ['chief', 'scout', 'devi', 'weblos', 'busino', 'vaultor'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Positioning', detail: 'The problem, the users, the wedge.' },
      { agent: 'chief', task: 'prd', label: 'Product spec', detail: 'Scope, stories and acceptance criteria.' },
      { agent: 'busino', task: 'offer', label: 'Pricing', detail: 'Tiers, the recommended plan and checkout copy.' },
      { agent: 'weblos', task: 'website', label: 'Landing page', detail: 'The page that converts.' },
    ],
  },
  {
    id: 'localbiz', label: 'Grow a local business', tagline: 'Get found nearby, fill the calendar, keep clients coming back.',
    category: 'Marketing', glyph: '⌂', tint: '#65a30d', template: 'villa',
    agents: ['chief', 'scout', 'weblos', 'marketus', 'pumpi'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Local market', detail: 'Your area, your competitors, your customers.' },
      { agent: 'weblos', task: 'website', label: 'Local page', detail: 'The page that turns searches into visits.' },
      { agent: 'marketus', task: 'ads', label: 'Local ads', detail: 'Campaigns targeted around you.' },
    ],
  },
  {
    id: 'course', label: 'Create an online course', tagline: 'Curriculum, lessons, landing page and launch.',
    category: 'Content', glyph: '❖', tint: '#0891b2', template: 'lab',
    agents: ['chief', 'scout', 'scribe', 'deck', 'weblos', 'vaultor'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Who it is for', detail: 'The learner, their goal and what exists.' },
      { agent: 'scribe', task: 'prd', label: 'Curriculum', detail: 'Modules, lessons and outcomes.' },
      { agent: 'weblos', task: 'website', label: 'Sales page', detail: 'The page that sells the course.' },
    ],
  },
  {
    id: 'video', label: 'Produce a video', tagline: 'Script, storyboard, edit and publish.',
    category: 'Creative', glyph: '▶', tint: '#e11d48', template: 'factory',
    agents: ['chief', 'scout', 'scribe', 'pixel', 'marketus'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Concept', detail: 'The idea, the audience and the hook.' },
      { agent: 'scribe', task: 'prd', label: 'Script & storyboard', detail: 'Beat by beat, shot by shot.' },
      { agent: 'marketus', task: 'campaign', label: 'Distribution', detail: 'Where it goes and how it travels.' },
    ],
  },
  {
    id: 'ops', label: 'Organise my operations', tagline: 'Document how you work so it runs without you.',
    category: 'Operations', glyph: '⚙', tint: '#64748b', template: 'factory',
    agents: ['chief', 'scout', 'devi', 'helpi', 'legi'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Where it breaks', detail: 'The bottlenecks worth fixing first.' },
      { agent: 'devi', task: 'runbook', label: 'Runbook', detail: 'Monitoring, on-call and incident steps.' },
      { agent: 'helpi', task: 'prd', label: 'Support playbook', detail: 'How requests get handled, every time.' },
    ],
  },
  {
    id: 'support', label: 'Set up customer support', tagline: 'Channels, macros and a playbook your team follows.',
    category: 'Operations', glyph: '◇', tint: '#06b6d4', template: 'default',
    agents: ['chief', 'helpi', 'scribe', 'nexa', 'busino'],
    loop: [
      { agent: 'helpi', task: 'prd', label: 'Support model', detail: 'Channels, SLAs and escalation.' },
      { agent: 'scribe', task: 'runbook', label: 'Macros & docs', detail: 'The answers, written once.' },
      { agent: 'busino', task: 'model', label: 'Cost & volume', detail: 'What support costs as you grow.' },
    ],
  },
  {
    id: 'partnership', label: 'Land partnerships', tagline: 'Target the right partners and pitch them properly.',
    category: 'Business', glyph: '⧉', tint: '#7c3aed', template: 'castle',
    agents: ['chief', 'scout', 'pumpi', 'deck', 'legi'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Partner map', detail: 'Who to approach and what they want.' },
      { agent: 'deck', task: 'prd', label: 'Partner deck', detail: 'The offer, made obvious.' },
      { agent: 'pumpi', task: 'outreach', label: 'Outreach', detail: 'The sequence that gets the meeting.' },
    ],
  },
  {
    id: 'ecom-scale', label: 'Scale my e-commerce', tagline: 'More traffic, better conversion, healthier margin.',
    category: 'Marketing', glyph: '◈', tint: '#16a34a', template: 'factory',
    agents: ['chief', 'scout', 'marketus', 'weblos', 'busino'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Growth audit', detail: 'What is capping your growth today.' },
      { agent: 'marketus', task: 'ads', label: 'Acquisition', detail: 'Campaigns built to scale profitably.' },
      { agent: 'busino', task: 'model', label: 'Unit economics', detail: 'CAC, margin and the levers.' },
    ],
  },
  {
    id: 'personal-brand', label: 'Build my personal brand', tagline: 'A clear positioning and a content rhythm that compounds.',
    category: 'Creative', glyph: '★', tint: '#d946ef', template: 'villa',
    agents: ['chief', 'scout', 'scribe', 'pixel', 'marketus'],
    loop: [
      { agent: 'scout', task: 'strategy', label: 'Positioning', detail: 'What you are known for, and to whom.' },
      { agent: 'scribe', task: 'campaign', label: 'Content plan', detail: 'Themes and a rhythm you can hold.' },
      { agent: 'marketus', task: 'ads', label: 'Signature posts', detail: 'The pieces that travel.' },
    ],
  },
]

for (const a of MORE) ARCHETYPES.push(a)

export const ARCHETYPE_BY_ID: Record<string, Archetype> = Object.fromEntries(ARCHETYPES.map((a) => [a.id, a]))

/** Every connector the archetype's crew works with (de-duplicated). */
export function archetypeConnectors(a: Archetype): string[] {
  return [...new Set(a.agents.flatMap((id) => ROLE_BY_ID[id]?.apps ?? []))]
}

/** The agents of an archetype, resolved (skips any unknown id). */
export function archetypeAgents(a: Archetype) {
  return a.agents.map((id) => ROLE_BY_ID[id]).filter(Boolean)
}
