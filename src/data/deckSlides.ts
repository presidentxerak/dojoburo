// Shared content for the investor pitch deck · used by both the on-screen deck
// (PitchDeck.tsx) and the exported PDF (deckPdf.ts) so they never drift.

export const DECK_ACCENTS = {
  magenta: '#ff2d9b', blue: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', violet: '#a06bff',
}

// how a slide is laid out · all text is centred; the layout varies the
// illustration (full-3D object, the 3D dojo, cards, stat tiles or a table)
export type DeckLayout = 'brand' | 'object' | 'cards' | 'dojo' | 'stats' | 'table'

export interface DeckCard { label: string; sub: string }
export interface DeckStat { big: string; label: string }

export interface DeckSlide {
  n: string
  /** small eyebrow (Outfit black, uppercase) */
  eyebrow: string
  /** the big title · Silkscreen regular, kept short + punchy */
  title: string
  /** the Outfit lead sentence under the title */
  line: string
  /** full-3D object kind (Object3D/Shape) shown on the slide */
  obj: string
  accent: string
  layout: DeckLayout
  cards?: DeckCard[]
  stats?: DeckStat[]
  /** short key-point pills shown on text-only slides (fills the slide + PDF) */
  points?: string[]
  table?: 'forecast' | 'plan'
}

const A = DECK_ACCENTS

export const DECK_SLIDES: DeckSlide[] = [
  { n: '', eyebrow: 'Investor deck', title: 'Your AI team.', line: 'A living 3D office where AI agents each own a real function of your work — and run it for real while you watch.', obj: 'rocket', accent: A.magenta, layout: 'brand', points: ['12 AI specialists', 'Your everyday apps', 'Settled on XRPL'] },
  { n: '01', eyebrow: 'The problem', title: 'Too many apps.', line: 'Running a business means juggling a dozen tools and never mastering any of them.', obj: 'briefcase', accent: A.orange, layout: 'object', points: ['A dozen SaaS tabs', 'Constant context-switching', 'Nothing mastered'] },
  { n: '02', eyebrow: 'The solution', title: 'One 3D office.', line: 'AI agents each own a real function — product, growth, finance, ops — and act for you inside your apps.', obj: 'network', accent: A.blue, layout: 'dojo', points: ['An agent per function', 'Real actions, not chat', 'You stay the founder'] },
  {
    n: '03', eyebrow: 'How it adapts', title: 'Fits your trade.', line: 'Pick your profession and the office tailors itself: the right crew, the right apps, wired and ready.', obj: 'network', accent: A.teal, layout: 'cards',
    cards: [
      { label: 'Startup Founder', sub: 'Notion · Slack · Stripe' },
      { label: 'Realtor', sub: 'CRM · DocuSign · WhatsApp' },
      { label: 'Teacher', sub: 'Classroom · Drive · Calendar' },
    ],
  },
  { n: '04', eyebrow: 'The product', title: 'Real work.', line: 'Agents act for real inside your apps — they open the PR, draft the email, raise the invoice.', obj: 'gear', accent: A.violet, layout: 'object', points: ['Opens the PR', 'Drafts the email', 'Raises the invoice'] },
  {
    n: '05', eyebrow: 'The rail', title: 'Paid on-chain.', line: 'Every task settles on the XRP Ledger with x402 micro-payments — real agent-to-agent commerce.', obj: 'coins', accent: A.blue, layout: 'stats',
    stats: [
      { big: 'x402', label: 'settlement protocol' },
      { big: '≈ $0.01', label: 'cost per task' },
      { big: 'XRPL', label: 'instant, final rail' },
    ],
  },
  {
    n: '06', eyebrow: 'The market', title: 'A huge market.', line: 'Every solo founder, freelancer and small team drowning in SaaS is a DojoBuro seat.', obj: 'eye', accent: A.magenta, layout: 'stats',
    stats: [
      { big: '400M+', label: 'SMBs & freelancers' },
      { big: '$300B+', label: 'annual SaaS spend' },
      { big: '1 seat', label: 'replaces a whole stack' },
    ],
  },
  {
    n: '07', eyebrow: 'The model', title: 'One SaaS seat.', line: 'You bring the model key, we run the hub — a whole automated team for less than a single SaaS seat.', obj: 'gem', accent: A.yellow, layout: 'cards',
    cards: [
      { label: 'Free', sub: 'Explore on Testnet' },
      { label: 'Pro · $29/mo', sub: 'Full team, all apps' },
      { label: 'Team · $22/seat', sub: 'Shared automation' },
    ],
  },
  { n: '08', eyebrow: 'The forecast', title: 'Scale = margin.', line: 'Near-zero model cost and sublinear infra turn scale straight into margin.', obj: 'coins', accent: A.teal, layout: 'table', table: 'forecast' },
  { n: '09', eyebrow: 'The business plan', title: 'Path to $3.9M.', line: 'Cash-flow positive from Year 2, on a path to $3.9M ARR by Year 5.', obj: 'gem', accent: A.blue, layout: 'table', table: 'plan' },
  { n: '10', eyebrow: 'Why now', title: 'The moment is now.', line: 'Agentic payments and MCP just made autonomous, tool-using AI teams finally possible.', obj: 'gear', accent: A.orange, layout: 'object', points: ['x402 agentic payments', 'MCP tool-use', 'Autonomous AI teams'] },
  { n: '11', eyebrow: 'The ask', title: 'Build it with us.', line: 'Join us in building the office where your AI team works while you watch.', obj: 'rocket', accent: A.magenta, layout: 'brand', points: ['Join the build', 'Own the category', 'Ship the future of work'] },
]
