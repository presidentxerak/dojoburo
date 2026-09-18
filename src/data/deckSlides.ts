// Shared content for the investor pitch deck · used by both the on-screen deck
// (PitchDeck.tsx) and the exported PDF (deckPdf.ts) so they never drift.

import { LIBRARY_USD, SEAT_USD, SEAT_MIN } from './plans'
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
  { n: '', eyebrow: 'Investor deck', title: 'Learn to build AI agents, and to run them cheap.', line: 'A hands-on academy for agents, prompts and AI tooling, with the frugality practices most courses skip: what a run really costs in tokens and in euros, where they go, and how to cut them. The course is free; the library of prompts, briefs and skills is the paid part.', obj: 'rocket', accent: A.magenta, layout: 'brand', points: ['Free course, paid library', 'Frugality nobody else teaches', 'Sold as software, not tokens'] },
  { n: '01', eyebrow: 'The problem', title: 'Too many apps.', line: 'Running a business means juggling a dozen tools and never mastering any of them.', obj: 'briefcase', accent: A.orange, layout: 'object', points: ['A dozen SaaS tabs', 'Constant context-switching', 'Nothing mastered'] },
  // 02 · « ils agissent pour vous dans vos applications » décrivait l'ancien
  // produit et promettait à l'investisseur une chose que la 04 et la 05 ne
  // vendent plus. Une salle où l'on s'entraîne, c'est ce que c'est.
  { n: '02', eyebrow: 'The solution', title: 'A room to practise in.', line: 'A 3D dojo where twelve agents sleep, one per shape of problem. Wake one and it teaches you how it is built, how it fails, and how to write the one you need.', obj: 'network', accent: A.blue, layout: 'dojo', points: ['Twelve shapes of agent', 'Taken apart, not watched', 'Nothing runs for you'] },
  {
    n: '03', eyebrow: 'How it adapts', title: 'Fits your trade.', line: 'Pick your profession and the office tailors itself: the right crew, the right apps, wired and ready.', obj: 'network', accent: A.teal, layout: 'cards',
    cards: [
      { label: 'Startup Founder', sub: 'Notion · Slack · Stripe' },
      { label: 'Realtor', sub: 'CRM · DocuSign · WhatsApp' },
      { label: 'Teacher', sub: 'Classroom · Drive · Calendar' },
    ],
  },
  // 04 · CE QUE FAIT LE PRODUIT. Cette planche disait « les agents agissent pour
  // de vrai dans vos applications, ils ouvrent la pull request ». C'était vrai
  // de l'ancien produit et ça contredit frontalement la planche suivante : on ne
  // peut pas vendre une formation sur la 05 et promettre du travail exécuté sur
  // la 04. Un investisseur qui lit les deux ne sait pas ce qu'il achète.
  { n: '04', eyebrow: 'The product', title: 'You leave with a file.', line: 'Twelve shapes of agent, four steps each, and every step makes something. At the end it is yours: an instruction, tool schemas, a skill, owned by no provider.', obj: 'gear', accent: A.violet, layout: 'object', points: ['Pick the shape', 'Build it in four steps', 'Take the file away'] },
  {
    // 05 · LE MODÈLE. Il facturait des exécutions. Le coût marginal d'un élève
    // est maintenant proche de zéro et plafonné par construction, donc compter
    // les tâches faisait payer un coût que nous n'avons pas. On vend ce dont le
    // stock grossit (les fichiers) et ce qui a un acheteur au ticket élevé (les
    // sièges).
    n: '05', eyebrow: 'The model', title: 'We sell the files and the seats.', line: `The course is free and costs nothing to serve, so it stays free, diploma included. $${LIBRARY_USD} a month buys the library, which grows every month. $${SEAT_USD} a seat buys a group, from ${SEAT_MIN} up. Nothing is metered, because nothing runs here.`, obj: 'gem', accent: A.blue, layout: 'stats',
    stats: [
      { big: '$0', label: 'The course, and the diploma' },
      { big: `$${LIBRARY_USD}`, label: 'Library · every file, monthly' },
      { big: `$${SEAT_USD}`, label: `School · a seat, ${SEAT_MIN} minimum` },
    ],
  },
  {
    // 06 · LE MARCHÉ · il comptait les gens noyés sous leurs SaaS, ce qui était
    // le marché du produit qui travaillait à leur place. Le marché d'un centre
    // de formation, ce sont les gens qui doivent apprendre, et les employeurs
    // qui doivent les former · c'est aussi ce qui justifie le plan School.
    n: '06', eyebrow: 'The market', title: 'Everyone has to learn this.', line: 'Agents went from a curiosity to a line in the job description in about two years, and almost nobody was taught. The individual pays to learn; the employer pays to have a team taught.', obj: 'eye', accent: A.magenta, layout: 'stats',
    stats: [
      { big: 'Every trade', label: 'now has an agent to write' },
      { big: '2 buyers', label: 'the learner, and their employer' },
      { big: `${SEAT_MIN} seats`, label: 'where a team becomes a School' },
    ],
  },
  // 07 · POURQUOI LA MARGE EST STRUCTURELLE.
  //
  // Cette planche était une QUATRIÈME grille de prix, écrite en dur : « Pro
  // 29 $/mois, Team 22 $/siège ». Trois chiffres qu'aucun fichier ne
  // produisait, donc trois chiffres qui ne pouvaient que diverger de la 05, et
  // qui divergeaient. C'est exactement la faute que data/plans.ts existe pour
  // empêcher, commise dans le document qu'on montre aux investisseurs.
  //
  // Elle ne redit donc plus le prix : la 05 le fait, et une seule planche doit
  // le faire. Elle dit ce que la 05 laisse sans réponse et ce dont la 08 a
  // besoin pour tenir · d'où vient la marge.
  {
    n: '07', eyebrow: 'The cost', title: 'Nothing to serve.', line: 'The course is static pages, the library is files, the belts and the diploma live in the browser. The only variable cost is the support bot, and its paid fallback is capped per day for the whole instance, not per learner.', obj: 'coins', accent: A.yellow, layout: 'stats',
    stats: [
      { big: '~$0', label: 'marginal cost per learner' },
      { big: 'Capped', label: 'support spend, instance-wide' },
      { big: 'Nothing', label: 'runs on our account' },
    ],
  },
  { n: '08', eyebrow: 'The forecast', title: 'Scale is margin.', line: 'Two sales at one cost: a learner who buys the library, and an employer who buys seats for a group. Neither one costs more to serve than the free reader beside them.', obj: 'coins', accent: A.teal, layout: 'table', table: 'forecast' },
  // 09 · disait « rentable dès l'année 2, 3,9 M$ en année 5 ». Les deux chiffres
  // venaient d'une conversion de 9 % à 240 $, hypothèses d'un outil quotidien.
  // Un cours gratuit avec une bibliothèque payante ne convertit pas comme ça,
  // donc l'équilibre recule d'un an et le sommet baisse. On le dit.
  { n: '09', eyebrow: 'The business plan', title: 'Break-even in Year 3.', line: 'A free course converts like a course, not like a tool, so the third year is where it turns rather than the second. What it buys is a cost base that barely moves as the audience grows.', obj: 'gem', accent: A.blue, layout: 'table', table: 'plan' },
  { n: '10', eyebrow: 'Why now', title: 'The moment is now.', line: 'Agentic payments and MCP just made autonomous, tool-using AI teams finally possible.', obj: 'gear', accent: A.orange, layout: 'object', points: ['Instant agentic payments', 'MCP tool-use', 'Autonomous AI teams'] },
  { n: '11', eyebrow: 'The ask', title: 'Build it with us.', line: 'Join us in building the office where your AI team works while you watch.', obj: 'rocket', accent: A.magenta, layout: 'brand', points: ['Join the build', 'Own the category', 'Ship the future of work'] },
]
