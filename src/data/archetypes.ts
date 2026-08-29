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

export interface Archetype {
  id: string
  /** the goal, in the user's words */
  label: string
  tagline: string
  category: 'Marketing' | 'Product' | 'Content' | 'Business'
  /** short non-emoji glyph for the card */
  glyph: string
  tint: string
  /** 3D world (data/templates) */
  template: string
  /** the dedicated crew, in seating order · first one orchestrates */
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

export const ARCHETYPE_BY_ID: Record<string, Archetype> = Object.fromEntries(ARCHETYPES.map((a) => [a.id, a]))

/** Every connector the archetype's crew works with (de-duplicated). */
export function archetypeConnectors(a: Archetype): string[] {
  return [...new Set(a.agents.flatMap((id) => ROLE_BY_ID[id]?.apps ?? []))]
}

/** The agents of an archetype, resolved (skips any unknown id). */
export function archetypeAgents(a: Archetype) {
  return a.agents.map((id) => ROLE_BY_ID[id]).filter(Boolean)
}
