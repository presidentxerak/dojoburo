// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
import { CONNECTORS, type Connector } from '../data/connectors'

export interface KBLink {
  label: string
  href: string
  external?: boolean
}

export interface KBTopic {
  id: string
  chip: string
  answer: string
  links?: KBLink[]
  follow?: string[]
  keywords: string[]
  /** the animated walkthrough that shows this, if there is one · Dojobot
   *  offers it as a "Watch it" button and plays it full screen in place. */
  walk?: 'overview' | 'company' | 'teams' | 'apps'
}

export const KB: KBTopic[] = [
  {
    id: 'academy',
    chip: 'Dojo Academy',
    answer:
      'The Dojo Academy is our free course on how all of this actually works · 20 lessons across 5 tracks, about 2 hours in total, and it starts from absolutely zero. It assumes you have never heard the words "agent", "vibe coding", "IDE" or "coding agent", and explains each one in plain language the moment it comes up. Every lesson is short (5 to 8 minutes), has an animation beside it showing the thing being explained actually happening, and ends with a question to check you got it plus one thing to go and do. Nothing is gated and no account is needed · your progress is remembered in this browser. The five tracks: 1) START HERE · what an agent is, why a team beats one assistant, your first project, and reading the work it produced. 2) THE LANDSCAPE, PLAINLY · vibe coding, chatbots vs IDEs vs coding agents vs an agent workspace, how to write a brief instead of a wish, and what everything costs. 3) YOUR TEAMMATES · the eight plain-English fields that define a teammate, how to edit one so every future run improves, choosing their apps, and shaping the crew. 4) BUILD A SYSTEM · what a loop is, designing your own plan backwards from the artefact, chaining several teams together, and finding the step that broke. 5) GO LIVE · connecting a real app safely, the review checklist before you ship, the seven mistakes everyone makes, and a 30-day plan. If you are new, start at lesson one · it is the fastest way to stop guessing.',
    links: [
      { label: 'Open the Academy', href: '/academy' },
      { label: 'Start lesson 1', href: '/academy/start-here/what-is-an-agent' },
    ],
    follow: ['start', 'tools', 'cost'],
    keywords: ['academy', 'académie', 'course', 'cours', 'learn', 'apprendre', 'tutorial', 'tuto', 'lesson', 'leçon', 'beginner', 'débutant', 'guide', 'training', 'formation', 'vibe coding', 'ide', 'claude code', 'what is an agent', 'agent'],
  },
  {
    id: 'studios',
    chip: 'The studios',
    answer:
      'Your office ships with twelve AI teammates, each opening its own workspace when you click it: Chief (CEO · plans and delegates every task), Brandi (Brand Architect · brand names, domains & .com availability), Weblos (Web Designer · block-based website with interaction design & HTML export), Devi (Engineering Lead · issues, PRs & sprints), Marketus (Marketer · Meta ads, video editing and image optimisation in one creative workflow), Pumpi (Growth Hacker · leads, pipeline & personalised outreach), Nexa (Comms Manager · team & community broadcasts), Helpi (Support Lead · tickets & replies), Busino (Business Analyst · finance and analytics in one dashboard: VAT, forecasts, CAC, LTV, ROI), Vaultor (Billing Manager · credits, subscriptions & payments), Legi (Legal & Docs · contracts & signatures) and Sentinel (Security Guardian · how much the team does on its own, spending limits & your saved keys). You can hide the ones you don\'t need and create your OWN custom agents too. The brand you choose in Brandi flows into every studio, so the whole team shares one company name, domain and look. Everything runs 100% in your browser · video editing, image compression and exports stay on your machine, nothing is sent to a server. The AI creates a first version and you keep full control. And front-and-centre in your 3D office stands the team panda · a mascot who cheers the crew on and breaks into a dance every time a task is completed (tap him to make him celebrate on cue).',
    links: [
      { label: 'See the studios', href: '#studios' },
      { label: 'Open my office', href: '#app' },
    ],
    follow: ['start', 'tools', 'cost'],
    keywords: ['studio', 'studios', 'branding', 'marque', 'logo', 'site', 'website', 'campagne', 'campaign', 'pub', 'ads', 'video', 'vidéo', 'montage', 'finance', 'compta', 'crm', 'outbound', 'analytics', 'local', 'module', 'panda', 'mascot', 'mascotte', 'dance', 'cheer'],
  },
  {
    id: 'start',
    walk: 'company',
    chip: 'Getting started',
    answer:
      'Two screens, no prompt to write. 1) You land on one card: type the name of your project and hit Create your project. That is the moment we ask you to sign in, so it is still there next time (or continue as a guest, saved in this browser only). 2) Next comes "Choose your dojo teams": the whole catalogue, and you tick as many as you need. Every card names the teammates inside it, the apps they use, and what one full run costs in credits, and a bar at the bottom keeps the running total in view. Hit Add teams and you land straight in the first dojo: click a teammate to open their studio, write the goal of the project in one line, and hit Run every step. Every screen has a "How to?" button that plays an animated walkthrough full screen.',
    links: [
      { label: 'Open your cockpit', href: '#app' },
      { label: 'Watch the walkthrough', href: '/guide#walkthrough' },
    ],
    follow: ['signin', 'teams', 'tools'],
    keywords: ['start', 'begin', 'how do i', 'get started', 'first', 'use', 'run a skill', 'onboard', 'how to', 'how does it work', 'company name', 'name my company', 'walkthrough', 'tutorial'],
  },
  {
    id: 'teams',
    walk: 'teams',
    chip: 'Dojo team cards',
    answer:
      'A dojo team card is a whole project, ready made. Each card names every teammate inside it and how many there are (a researcher, a maker, an analyst, a team lead…), the apps they work in, how many steps their plan has, and what one full run costs: so many credits, marked Light, Medium or Heavy. They are grouped by speciality: Marketing, Product, Content, Creative, Business and Operations. Tick as many as you need — the bar at the bottom adds up the teams, the teammates, the credits and the app connections as you go. Each one becomes a dojo inside your company: a 3D office where you can rename teammates, add or remove them, change the apps they use, rewrite how any one of them works, and run the whole plan in one go. Nothing is locked and nothing needs configuring first.',
    links: [
      { label: 'Pick a team', href: '#app' },
      { label: 'Shape your team', href: '/guide#team' },
    ],
    follow: ['start', 'team', 'tools'],
    keywords: ['team card', 'team cards', 'dojo team', 'dojo teams', 'archetype', 'project card', 'cards', 'speciality', 'specialty', 'pick a team', 'catalogue', 'catalog', 'pipeline'],
  },
  {
    id: 'budget',
    walk: 'apps',
    chip: 'What a team costs',
    answer:
      'Every dojo team card shows its budget before you pick it. A team\'s plan is a fixed list of steps and one step is about one credit, so a 4-step team costs 4 credits for a full run — roughly $0.08 at Pro-pack rates, a bit more on Solo. Cards are marked Light (up to 3 credits), Medium (up to 5) or Heavy above that, and the bar at the bottom of the chooser adds up everything you have ticked. Two things cost nothing on top: connecting an app is free and stays free, and the apps you connect are billed by them, not by us. And if you add your own Claude key the work runs on it — unlimited tasks, no credits spent, Anthropic bills you directly.',
    links: [
      { label: 'Pick a team', href: '#app' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['pricing', 'tools', 'cost'],
    keywords: ['budget', 'estimate', 'how much does a team cost', 'team cost', 'credits per run', 'per run', 'light medium heavy', 'expensive', 'what will it cost', 'cost of a dojo'],
  },
  {
    id: 'signin',
    walk: 'company',
    chip: 'Do I need an account?',
    answer:
      'Not to look around. You can open the app, type a name and read every team card without signing in. Signing in is asked for at one moment only: when you hit Create your project, because that saves something real. Sign in with your email or Google and your project, your teammates and everything they make are still there next time, on any device you sign in from. Prefer not to? "Continue as guest" keeps everything in this browser only — it works exactly the same, but clearing your browser data clears your project with it.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'How it works', href: '/guide#how' },
    ],
    follow: ['start', 'security', 'pricing'],
    keywords: ['sign in', 'signin', 'log in', 'login', 'account', 'register', 'sign up', 'signup', 'save', 'save my project', 'guest', 'do i need an account', 'privy', 'email login', 'google login'],
  },
  {
    id: 'jobs',
    chip: 'Adapts to your job',
    answer:
      'DojoBuro is a productivity hub that reshapes itself to your profession. 23 ready profiles · startup founder, CEO, entrepreneur, product manager, engineer, app & game maker, researcher, growth hacker, community manager, marketer, sales, seller/vendor, designer, lawyer, accountant, real-estate agent, wealth advisor (CGP), HR, manager, secretary, support/call-centre, student and teacher · each seeds a matching crew, a fitting 3D world, and the exact apps that job needs (a teacher gets Google Classroom + Drive + Calendar; a realtor gets a CRM + DocuSign + WhatsApp; a CGP gets Salesforce + DocuSign). Everything stays editable, so you can mix any crew, world and tools.',
    links: [
      { label: 'Built for your job', href: '#jobs' },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['job', 'profession', 'metier', 'role', 'trade', 'growth hacker', 'community', 'freelance', 'lawyer', 'accountant', 'hr', 'designer', 'researcher', 'manager', 'secretary', 'sales', 'seller', 'vendor', 'marketer', 'founder', 'realtor', 'real estate', 'wealth', 'cgp', 'advisor', 'student', 'teacher', 'educator', 'school', 'my work'],
  },
  {
    id: 'wallet',
    chip: 'Credits & profile',
    answer:
      'There is no wallet and no crypto to manage. Your profile is your account plus a simple credits balance in your own currency (USD, EUR, JPY…) and your preferences (theme, sound, notifications). You top up by card, spend about one credit per task, and everything settles on a fast rail behind the scenes · you never see a wallet, a seed or any coin.',
    links: [
      { label: 'Profile & credits', href: '#profile' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'security', 'pricing'],
    keywords: ['wallet', 'profile', 'account', 'seed', 'address', 'fund', 'faucet', 'balance', 'treasury', 'credits', 'no crypto'],
  },
  {
    id: 'cost',
    walk: 'apps',
    chip: 'Cost per task (credits)',
    answer:
      'Most tasks are free or about one credit; only heavier jobs (like a full campaign) cost a couple more. You buy credits in your own currency and they settle on a fast rail behind the scenes · no crypto, no network fees to think about. Your CEO dashboard shows live totals, and you can set a daily spending limit so nothing overspends.',
    links: [
      { label: 'Cost breakdown', href: '#cost' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'pricing', 'wallet'],
    keywords: ['cost', 'price', 'xrp', 'fee', 'how much', 'expensive', 'pay', 'per task', 'credit', 'credits'],
  },
  {
    id: 'pricing',
    walk: 'apps',
    chip: 'Plans & pricing',
    answer:
      'You bring your own model key (or run on a free model), so intelligence is basically free; you pay only for the hub: connected apps, an always-on worker and team features. Plans: Free ($0, explore + build your first company, 2 apps, ~50 tasks/mo), Solo ($12/mo, 6 apps, 300 credits), Pro ($29/mo, every app, 1,500 credits, cloud worker), Team ($22/seat/mo, shared dojos, SSO, audit) and Business (custom, self-hosted, SLA). Your-own-key and free-model tasks are unlimited and never use a credit; managed credits (1 credit ≈ 1 hosted task) cover hosted-model runs, are bought in your own currency (USD, EUR, JPY…) and top up anytime · no crypto. Annual billing saves about two months.',
    links: [
      { label: 'See the plans', href: '#pricing' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['cost', 'tools', 'onramp'],
    keywords: ['plan', 'plans', 'pricing', 'price', 'cost', 'subscription', 'quota', 'credits', 'credit', 'tier', 'upgrade', 'billing', 'free', 'solo', 'pro', 'team', 'business', 'byok', 'how much'],
  },
  {
    id: 'onramp',
    chip: 'Buy credits with a card',
    answer:
      'Top up with a card (€/$/¥) and you get credits in your own currency · a simple, transparent balance. Stripe takes the payment and your balance updates instantly; each task then spends about one credit, settled on a fast rail behind the scenes. No wallet, no coins, no crypto to manage. Just exploring? The free tier lets you build and run without spending anything.',
    links: [
      { label: 'See the full flow', href: '#onramp' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['wallet', 'pricing', 'security'],
    keywords: ['buy credits', 'card', 'credit card', 'top up', 'topup', 'add credits', 'fiat', 'euro', 'dollar', 'stripe', 'on-ramp', 'onramp', 'deposit', 'purchase', 'currency'],
  },
  {
    id: 'x402',
    chip: 'How payments work',
    answer:
      'Simple: you buy credits in your own currency and each task spends about one credit. Behind the scenes those credits settle on a fast payment rail, but you never touch it · no wallet, no coins, no crypto. Every task leaves a receipt in your dashboard, so you always see exactly what ran and what it cost.',
    links: [
      { label: 'From card to credits', href: '#onramp' },
      { label: 'How it works', href: '#how' },
    ],
    follow: ['onramp', 'cost', 'tools'],
    keywords: ['x402', '402', 'agentic', 'protocol', 'payment', 'payments', 'settlement', 'receipt', 'rail', 'behind the scenes', 'how do payments'],
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'There is no crypto for you to secure · no wallet, no seed, no coins. You just hold a credits balance, and payments settle on a fast rail behind the scenes. The app ships with a strict Content-Security-Policy, security headers and scraper protection. Your app access and the operator\'s model key are sealed away on the server, behind rate limits and spending caps. Keys you bring yourself (e.g. an ElevenLabs voice key) and any local wallet material stay in your browser, so treat this browser like your own device.',
    links: [
      { label: 'Security details', href: '#prod' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['security', 'secure', 'safe', 'privacy', 'hack', 'scam', 'phishing', 'seed', 'csp', 'protect', 'data'],
  },
  {
    id: 'tools',
    walk: 'apps',
    chip: 'Connect real tools',
    answer:
      'Connect 40+ apps · Notion, GitHub, Gmail, Google Drive, Calendar & Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 and more. Connecting is one click on the app\'s own screen; access is sealed away server-side and kept fresh for you. While your teammate works, it reaches into the app directly, so the work really happens in your account · and each task is metered as about one credit, with a receipt in your dashboard. Each agent ships with a small, curated set of the best apps for its job (no duplicates), and it\'s fully modular: open its Connect apps panel, tap "+ Add apps" to bring in any other app, or remove one you don\'t use · saved per company.',
    links: [
      { label: 'Set up each app · step by step', href: '/guide', external: true },
      { label: 'Connect your stack', href: '#stack' },
    ],
    follow: ['setup', 'linkagents', 'environment'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'oauth', 'github', 'slack', 'notion', 'gmail', 'stripe', 'jira', 'hubspot', 'figma', 'real content', 'output', 'api', 'apps'],
  },
  {
    id: 'linkagents',
    chip: 'Link your own agents',
    answer:
      'Already run an AI agent at Notion, Slack, or anywhere else? Bring it in to help one of your teammates. Open the agent editor in the Dojo Studio, scroll to "Outside helpers" and click "+ Add a helper", then pick how it helps: it can lend its tools (they join everything this teammate does, exactly like a connected app · this is the MCP standard), take a whole task off their hands and send the answer back (the A2A standard), or be a plain web address we send the task to and read the reply from. Paste the https address and an optional access key, then hit Verify to check it answers and read back its name and what it can do. The key never touches this browser · the server holds it, just like your connected apps. Hand a whole task across from the teammate\'s card in the office; tool helpers ride along automatically whenever that teammate works (needs a Claude key, since Claude drives the tools).',
    links: [
      { label: 'Open the Dojo Studio', href: '#studio' },
      { label: 'What is A2A', href: 'https://a2a-protocol.org', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'setup', 'security'],
    keywords: ['external agent', 'external agents', 'link agent', 'connect agent', 'my agent', 'own agent', 'a2a', 'agent2agent', 'agent to agent', 'delegate', 'mcp agent', 'webhook', 'notion agent', 'slack agent', 'other agents', 'third party agent'],
  },
  {
    id: 'setup',
    walk: 'apps',
    chip: 'How to connect an app',
    answer:
      'Every agent card AND the Dojo Studio editor show a "Connect tools" panel with the agent\'s curated apps (and a "+ Add apps" button to bring in any other app, or remove one you don\'t use · fully modular, saved per company), plus a short setup guide. FOR YOU it is one click: open the teammate, find the app under its tasks, click Connect and approve once on the app\'s own screen · access is sealed away on the server and your teammate can work inside the app for real. IF YOU RUN THIS DEPLOYMENT (one-time, per app): 1) create an OAuth app in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…) and set the redirect URI to https://YOUR-SITE/api/connect; 2) copy the client id + secret into env as <APP>_CLIENT_ID and <APP>_CLIENT_SECRET (Google apps share GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET); 3) apps WITH a first-party MCP server (Notion, GitHub, Linear, Stripe) work right away; apps WITHOUT one (Gmail, Drive, Calendar, Slack…) also need <APP>_MCP_URL pointed at a hosted MCP hub (Composio, Zapier, Pipedream). PKCE apps (Airtable, X, Canva) are automatic. Once the env is set the tool shows a Connect button instead of a "set up" link. Every app also has its own step-by-step page in the Dojo Guide (scopes, exact env vars, gotchas) · just name the app and I will link it.',
    links: [
      { label: 'Step-by-step setup for every app', href: '/guide', external: true },
      { label: 'MCP hub (Composio)', href: 'https://composio.dev', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'linkagents', 'environment'],
    keywords: ['setup', 'set up', 'client id', 'client secret', 'oauth app', 'redirect', 'env', 'configure', 'composio', 'zapier', 'pipedream', 'mcp url', 'mcp_url', 'hub', 'how to connect', 'create app', 'pkce', 'credentials', 'connect panel', 'studio'],
  },
  {
    id: 'guide',
    walk: 'overview',
    chip: 'Dojo Guide',
    answer:
      'The Dojo Guide is the full manual, and every section carries its own "How to?" button that plays the matching animated walkthrough full screen. It covers: how the whole thing works, how to create your company, how to shape your team, what each studio does, how to connect an app step by step (with a dedicated page per app), how to keep your budget under control, how to stay safe, and troubleshooting. Open it from the "Dojo Guide" button in the header, on the landing or inside the app.',
    links: [
      { label: 'Open the Dojo Guide', href: '/guide', external: true },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['guide', 'dojo guide', 'help', 'how to', 'walkthrough', 'tutorial', 'get started guide', 'security', 'safe', 'hack', 'budget', 'configure'],
  },
  {
    id: 'team',
    chip: 'Create & arrange agents',
    answer:
      'Your dojo ships with twelve teammates, and you can shape the crew any way you like. Create your OWN agent from the CEO dashboard: tap "New agent", give it a name and job title, then open it to set its accent colour, the apps it works with (live connect in place), a task list you assign to it and a private notepad · all saved locally. Hide the presets you don\'t need (restore them anytime from the roster), and rearrange everyone on the dojo grid: tap "Arrange team" on the dojo (or "Arrange on grid" in the CEO dashboard), tap an agent, then tap a cell · the 3D office reseats live, on desktop and mobile. Press Cmd/Ctrl+K (or the Search button) any time for a quick launcher that jumps to any agent, page or action.',
    links: [
      { label: 'Open the CEO dashboard', href: '#app' },
      { label: 'Build your own team', href: '#studio' },
    ],
    follow: ['skins', 'jobs', 'tools'],
    keywords: ['custom agent', 'create agent', 'new agent', 'add agent', 'build agent', 'own agent', 'arrange', 'rearrange', 'move agent', 'grid', 'hide agent', 'restore agent', 'tasks', 'notes', 'command palette', 'quick search', 'shortcut', 'cmd k', 'ctrl k', 'search', 'team'],
  },
  {
    id: 'skins',
    chip: 'Skins & customization',
    answer:
      'Every agent is fully customizable in the Dojo Studio: 180+ skins across 30 themes and many characters · robots, ninjas, aliens, cats, dragons, ghosts, pandas, a bibendum, a jellyfish, plus Zelda-style knights, mages and mad-scientist professors · each with a vivid face, legs and its own shoes, and sometimes a hat (bowler, top hat, beret, party or flower crown). Click an agent\'s avatar to open its editor, then change the skin, rename it, swap its function and tasks, set a credit budget, or move it on the grid. You can run several dojos (companies) in different worlds side by side.',
    links: [
      { label: 'Build your own team', href: '#studio' },
      { label: 'Meet the office', href: '#cast' },
    ],
    follow: ['jobs', 'tools'],
    keywords: ['skin', 'skins', 'avatar', 'character', 'customize', 'customise', 'knight', 'zelda', 'mage', 'wizard', 'scientist', 'hat', 'edit agent', 'appearance', 'look', 'theme', 'world'],
  },
  {
    id: 'environment',
    chip: 'Cloud or local',
    answer:
      'Run it two ways. Cloud: a managed worker runs the model + tool calls and keeps agents going when the tab is closed, with every key sealed away on the server. Local / self-hosted: run your own worker and point connectors at your own MCP endpoints · your keys, your machine, the same office. Either way the browser is just the cockpit: it shows the 3D office and Dojo City, triggers tasks and tracks your credits; the worker does the authenticated work.',
    links: [
      { label: 'Cloud or local', href: '#stack' },
      { label: 'Runtime & environment', href: '#env' },
    ],
    follow: ['tools', 'security'],
    keywords: ['run', 'runs', 'where', 'cloud', 'server', 'browser', 'local', 'self-host', 'self hosted', 'backend', 'worker', 'environment', 'on premise'],
  },
  {
    id: 'networks',
    chip: 'Explore free vs go live',
    answer:
      'Start on the free tier · build your project, meet the crew and run tasks that don\'t need credits, at no cost. When you\'re ready to go live, add credits in your own currency and the crew runs the priced work for real. Same office, same agents · you just switch from exploring to running. No crypto at any point.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['network', 'testnet', 'devnet', 'mainnet', 'faucet', 'switch', 'live', 'free tier', 'go live', 'explore'],
  },
  {
    id: 'xaman',
    chip: 'Do I need a wallet?',
    answer:
      'No · there is no wallet, no seed and no coins to connect anywhere. You pay in your own currency (USD, EUR, JPY…) with a card, hold a simple credits balance, and each task spends about one credit. Payments settle on a fast rail behind the scenes, so there is nothing crypto for you to set up or secure.',
    links: [
      { label: 'Buy credits with a card', href: '#onramp' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['security', 'wallet'],
    keywords: ['xaman', 'xumm', 'gem', 'gemwallet', 'crossmark', 'sign', 'signing', 'connect wallet', 'wallet', 'crypto', 'coin', 'metamask'],
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      "If a task won't run, check your credits balance isn't empty or capped by your daily limit, and that the app it needs is connected. If totals look stale, reload to refresh. If the 3D office is blank, your browser may be blocking WebGL · try another browser or enable hardware acceleration.",
    links: [
      { label: 'Open the app', href: '#app' },
    ],
    follow: ['wallet', 'networks'],
    keywords: ['bug', 'broken', 'error', 'not working', 'stuck', 'blank', 'fail', 'problem', 'issue', 'help', 'webgl', 'refresh'],
  },
]

export const TOPIC_BY_ID: Record<string, KBTopic> = Object.fromEntries(KB.map((t) => [t.id, t]))

// Aliases the way people actually name apps in chat, mapped to a connector id.
const CONNECTOR_ALIASES: Record<string, string> = {
  'google drive': 'gdrive', drive: 'gdrive', 'google calendar': 'gcal', calendar: 'gcal',
  'google classroom': 'gclassroom', classroom: 'gclassroom', gsheet: 'gdrive', sheets: 'gdrive',
  twitter: 'twitter', x: 'twitter', 'whatsapp business': 'whatsapp', qb: 'quickbooks',
}

/** If the user names a specific app, return its connector so the bot can deep-link
 *  to that connector's dedicated /guide/<id> setup page. */
export function matchConnector(text: string): Connector | null {
  const q = text.toLowerCase()
  // longest alias first so "google drive" beats a bare "google"
  const aliases = Object.keys(CONNECTOR_ALIASES).sort((a, b) => b.length - a.length)
  for (const a of aliases) if (q.includes(a)) return CONNECTORS.find((c) => c.id === CONNECTOR_ALIASES[a]) ?? null
  let best: Connector | null = null
  for (const c of CONNECTORS) {
    const label = c.label.toLowerCase()
    if (q.includes(label) || q.includes(c.id.toLowerCase())) {
      if (!best || label.length > best.label.length) best = c
    }
  }
  return best
}

/** A ready-made chat answer that points to a connector's dedicated setup page. */
export function connectorReply(c: Connector): { text: string; links: KBLink[] } {
  return {
    text: `${c.label}: ${c.blurb} Connecting is one click once the operator has set it up. Here is the full step-by-step setup page for ${c.label}.`,
    links: [
      { label: `Set up ${c.label} · step by step`, href: `/guide/${c.id}`, external: true },
      { label: `Open the ${c.provider} console`, href: c.docsUrl, external: true },
      { label: 'All connectors (Dojo Guide)', href: '/guide', external: true },
    ],
  }
}

/** Cheap keyword scorer so the bot can answer offline before spending anything. */
export function matchTopic(text: string): KBTopic | null {
  const q = text.toLowerCase()
  let best: KBTopic | null = null
  let bestScore = 0
  for (const t of KB) {
    let score = 0
    for (const k of t.keywords) if (q.includes(k)) score += k.length >= 5 ? 2 : 1
    if (q.includes(t.chip.toLowerCase())) score += 3
    if (score > bestScore) {
      bestScore = score
      best = t
    }
  }
  return bestScore >= 2 ? best : null
}

export const GREETING =
  "Hi, I'm Dojobot. Short version: you name your project, tick the ready-made teams you need, and each teammate opens a pro studio (branding, website, campaigns, video, finance, CRM, analytics) that runs in your browser. Ask me anything in your own words — or pick a topic below. When a question has a walkthrough, I can play it for you full screen.";
