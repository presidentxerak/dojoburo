// ---------------------------------------------------------------------------
// DojoBuro · profession profiles.
//
// DojoBuro adapts to the user's job. Picking a profession tailors the office:
// it seeds a matching crew, drops you into a fitting 3D environment, and
// surfaces the exact tools (connectors) that trade needs · so the agents can
// connect to those apps and actually run the work of that profession.
//
// Each profession maps to:
//   * a default dojo template (the 3D environment),
//   * a department crew mix (which specialists to seed),
//   * the connector ids that matter for the job (see data/connectors.ts),
//   * a few example tasks the office can take on out of the box.
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export interface Profession {
  id: string
  /** short display name */
  label: string
  /** the trade in one line */
  blurb: string
  /** grouping for the picker */
  category: 'Business' | 'Product & Tech' | 'Marketing & Growth' | 'Creative' | 'Operations' | 'Professional' | 'Education'
  /** default 3D environment (templates.ts id) */
  template: string
  /** which specialists to seed for this profession */
  crew: Department[]
  /** connector ids this job connects & runs (data/connectors.ts) */
  connectors: string[]
  /** example jobs the office can pick up immediately */
  tasks: string[]
}

const ALL: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People', 'Ops']

export const PROFESSIONS: Profession[] = [
  {
    id: 'founder',
    label: 'Startup Founder',
    blurb: 'Build a company from zero · product, growth, money and hiring at once.',
    category: 'Business',
    template: 'startup',
    crew: ALL,
    connectors: ['notion', 'slack', 'stripe', 'gmail', 'linear', 'hubspot', 'shopify'],
    tasks: ['Draft the pitch & one-pager', 'Ship the MVP backlog', 'Set up the go-to-market', 'Reconcile the treasury'],
  },
  {
    id: 'ceo',
    label: 'Business Owner / CEO',
    blurb: 'Run an established business: strategy, finances, people and operations.',
    category: 'Business',
    template: 'castle',
    crew: ['Leadership', 'Finance', 'People', 'Ops', 'Growth'],
    connectors: ['notion', 'slack', 'gmail', 'hubspot', 'quickbooks', 'gcal'],
    tasks: ['Board deck & quarterly OKRs', 'Cashflow & runway review', 'Hiring plan', 'Weekly all-hands notes'],
  },
  {
    id: 'entrepreneur',
    label: 'Solo Entrepreneur',
    blurb: 'One person, a whole company · sell, deliver and keep the books.',
    category: 'Business',
    template: 'villa',
    crew: ['Leadership', 'Growth', 'Finance', 'Product'],
    connectors: ['shopify', 'stripe', 'mailchimp', 'gmail', 'canva', 'notion'],
    tasks: ['Launch a product page', 'Run an email campaign', 'Invoice a client', 'Weekly revenue snapshot'],
  },
  {
    id: 'pm',
    label: 'Product Manager',
    blurb: 'Turn problems into shipped product · specs, backlog, roadmap.',
    category: 'Product & Tech',
    template: 'startup',
    crew: ['Product', 'Engineering', 'Growth', 'People'],
    connectors: ['linear', 'jira', 'notion', 'figma', 'slack'],
    tasks: ['Write a PRD', 'Groom the backlog', 'Draft the release notes', 'Prioritize the roadmap'],
  },
  {
    id: 'engineer',
    label: 'Software Engineer',
    blurb: 'Design, build and ship code · reviews, specs, tickets, deploys.',
    category: 'Product & Tech',
    template: 'factory',
    crew: ['Engineering', 'Product', 'Ops'],
    connectors: ['github', 'jira', 'linear', 'slack', 'gdrive'],
    tasks: ['Open a pull request', 'Write a tech design doc', 'Triage issues', 'Draft an incident runbook'],
  },
  {
    id: 'gamedev',
    label: 'App & Game Maker',
    blurb: 'Build apps and games · from prototype to store, art to backlog.',
    category: 'Product & Tech',
    template: 'lab',
    crew: ['Engineering', 'Product', 'Growth'],
    connectors: ['github', 'jira', 'figma', 'discord', 'notion'],
    tasks: ['Spec a game loop', 'Track the sprint', 'Draft a Discord devlog', 'Plan the store launch'],
  },
  {
    id: 'researcher',
    label: 'Researcher',
    blurb: 'Read, synthesize and write · literature, data, findings.',
    category: 'Product & Tech',
    template: 'lab',
    crew: ['Product', 'Engineering', 'Leadership'],
    connectors: ['gdrive', 'notion', 'airtable', 'gmail'],
    tasks: ['Literature review', 'Structure a dataset', 'Draft a paper outline', 'Summarize findings'],
  },
  {
    id: 'growth',
    label: 'Growth Hacker',
    blurb: 'Find the loops that scale · experiments, funnels, channels.',
    category: 'Marketing & Growth',
    template: 'space',
    crew: ['Growth', 'Product', 'Finance'],
    connectors: ['hubspot', 'mailchimp', 'twitter', 'linkedin', 'gmail', 'airtable'],
    tasks: ['Design a growth experiment', 'Build the funnel', 'Draft a cold outreach sequence', 'Weekly metrics review'],
  },
  {
    id: 'community',
    label: 'Community Manager',
    blurb: 'Grow and tend an audience · content, replies, calendar, events.',
    category: 'Marketing & Growth',
    template: 'wonderland',
    crew: ['Growth', 'People', 'Product'],
    connectors: ['buffer', 'twitter', 'linkedin', 'discord', 'canva', 'mailchimp'],
    tasks: ['Plan a content calendar', 'Draft a week of posts', 'Design a visual', 'Run an AMA thread'],
  },
  {
    id: 'marketer',
    label: 'Marketer',
    blurb: 'Campaigns that land · positioning, email, ads, creative.',
    category: 'Marketing & Growth',
    template: 'space',
    crew: ['Growth', 'Product', 'Leadership'],
    connectors: ['mailchimp', 'hubspot', 'canva', 'twitter', 'linkedin'],
    tasks: ['Build a campaign', 'Write ad copy', 'Design the creative', 'Nurture email sequence'],
  },
  {
    id: 'sales',
    label: 'Sales / Account Exec',
    blurb: 'Fill and close the pipeline · outreach, demos, follow-ups.',
    category: 'Marketing & Growth',
    template: 'villa',
    crew: ['Growth', 'Finance', 'People'],
    connectors: ['hubspot', 'gmail', 'calendly', 'linkedin', 'stripe'],
    tasks: ['Prospect a lead list', 'Draft outreach', 'Book the demo', 'Send the quote'],
  },
  {
    id: 'designer',
    label: 'Designer / Graphic Artist',
    blurb: 'Make it beautiful · brand, UI, tokens, assets.',
    category: 'Creative',
    template: 'wonderland',
    crew: ['Product', 'Growth', 'Engineering'],
    connectors: ['figma', 'canva', 'gdrive', 'notion', 'trello'],
    tasks: ['Generate a design system', 'Draft brand guidelines', 'Design a landing page', 'Export an asset kit'],
  },
  {
    id: 'lawyer',
    label: 'Lawyer / Legal',
    blurb: 'Contracts, review and compliance · drafted, tracked, signed.',
    category: 'Professional',
    template: 'castle',
    crew: ['Leadership', 'People', 'Ops'],
    connectors: ['docusign', 'gdrive', 'gmail', 'gcal', 'notion'],
    tasks: ['Draft a contract', 'Review terms & risks', 'Prepare an NDA', 'Track signatures'],
  },
  {
    id: 'accountant',
    label: 'Accountant',
    blurb: 'Keep the books straight · invoices, reconciliation, reports.',
    category: 'Professional',
    template: 'factory',
    crew: ['Finance', 'Ops', 'Leadership'],
    connectors: ['quickbooks', 'xero', 'stripe', 'gdrive', 'gmail'],
    tasks: ['Reconcile accounts', 'Build a P&L', 'Chase invoices', 'Month-end close'],
  },
  {
    id: 'hr',
    label: 'HR / People Ops',
    blurb: 'Hire, onboard and care for the team · JD to offer to onboarding.',
    category: 'Operations',
    template: 'garden',
    crew: ['People', 'Leadership', 'Ops'],
    connectors: ['slack', 'gmail', 'gcal', 'notion', 'docusign'],
    tasks: ['Write a job description', 'Build an interview scorecard', 'Draft the offer', 'Onboarding checklist'],
  },
  {
    id: 'manager',
    label: 'Team Manager',
    blurb: 'Keep a team shipping · plans, standups, reviews, rituals.',
    category: 'Operations',
    template: 'startup',
    crew: ['Leadership', 'Product', 'People', 'Ops'],
    connectors: ['asana', 'slack', 'gcal', 'zoom', 'notion'],
    tasks: ['Plan the week', 'Run the standup', 'Draft a 1:1 agenda', 'Quarterly review'],
  },
  {
    id: 'secretary',
    label: 'Assistant / Secretary',
    blurb: 'Run the diary and the inbox · schedule, email, notes, docs.',
    category: 'Operations',
    template: 'dojo',
    crew: ['Ops', 'People', 'Leadership'],
    connectors: ['gcal', 'gmail', 'calendly', 'notion', 'gdrive'],
    tasks: ['Triage the inbox', 'Schedule meetings', 'Take meeting notes', 'Prepare a brief'],
  },
  {
    id: 'callcenter',
    label: 'Support / Call Center',
    blurb: 'Answer, resolve, follow up · tickets, macros, escalations.',
    category: 'Operations',
    template: 'factory',
    crew: ['Ops', 'People', 'Product'],
    connectors: ['zendesk', 'intercom', 'zoom', 'slack', 'gmail'],
    tasks: ['Draft ticket replies', 'Write a macro library', 'Escalation runbook', 'CSAT summary'],
  },
  {
    id: 'seller',
    label: 'Seller / Vendor',
    blurb: 'Sell and follow up · storefront, orders, outreach, payments.',
    category: 'Marketing & Growth',
    template: 'villa',
    crew: ['Growth', 'Finance', 'People'],
    connectors: ['shopify', 'stripe', 'hubspot', 'whatsapp', 'gmail', 'mailchimp'],
    tasks: ['List a product', 'Chase an abandoned cart', 'Message a lead on WhatsApp', 'Send the invoice'],
  },
  {
    id: 'realtor',
    label: 'Real Estate Agent',
    blurb: 'Win and close deals · listings, viewings, offers, signatures.',
    category: 'Professional',
    template: 'villa',
    crew: ['Growth', 'People', 'Finance', 'Ops'],
    connectors: ['hubspot', 'docusign', 'gcal', 'whatsapp', 'canva', 'gmail'],
    tasks: ['Write a listing', 'Schedule viewings', 'Draft the offer', 'Send for e-signature'],
  },
  {
    id: 'wealth',
    label: 'Wealth Advisor / CGP',
    blurb: 'Advise and manage portfolios · clients, plans, reviews, compliance.',
    category: 'Professional',
    template: 'castle',
    crew: ['Finance', 'Leadership', 'People', 'Ops'],
    connectors: ['salesforce', 'docusign', 'gcal', 'gmail', 'gdrive', 'notion'],
    tasks: ['Prepare a client review', 'Draft an allocation proposal', 'Build a retirement plan', 'Log KYC & compliance notes'],
  },
  {
    id: 'student',
    label: 'Student',
    blurb: 'Study smarter · notes, deadlines, research and revision.',
    category: 'Education',
    template: 'garden',
    crew: ['Product', 'Leadership', 'People'],
    connectors: ['gclassroom', 'gdrive', 'gcal', 'notion', 'gmail'],
    tasks: ['Summarize a lecture', 'Build a revision plan', 'Draft an essay outline', 'Track assignment deadlines'],
  },
  {
    id: 'teacher',
    label: 'Teacher / Educator',
    blurb: 'Teach and grade · lessons, assignments, feedback, parents.',
    category: 'Education',
    template: 'dojo',
    crew: ['People', 'Product', 'Leadership', 'Ops'],
    connectors: ['gclassroom', 'gdrive', 'gcal', 'canva', 'zoom', 'gmail'],
    tasks: ['Plan a lesson', 'Create a quiz', 'Draft assignment feedback', 'Write a parent update'],
  },
]

export const PROFESSION_BY_ID: Record<string, Profession> = Object.fromEntries(PROFESSIONS.map((p) => [p.id, p]))

/** A distinct vivid accent colour per profession (hues spread evenly). */
export const PROFESSION_COLOR_BY_ID: Record<string, string> = Object.fromEntries(
  PROFESSIONS.map((p, i) => [p.id, `hsl(${Math.round((i * 360) / PROFESSIONS.length)}, 68%, 52%)`]),
)
export function professionColor(id: string): string {
  return PROFESSION_COLOR_BY_ID[id] ?? 'hsl(268, 68%, 52%)'
}

export const PROFESSION_CATEGORIES: Profession['category'][] = [
  'Business', 'Product & Tech', 'Marketing & Growth', 'Creative', 'Professional', 'Education', 'Operations',
]

export function professionById(id: string | null | undefined): Profession | null {
  return (id && PROFESSION_BY_ID[id]) || null
}
