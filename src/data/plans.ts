// What DojoBuro sells, in one place.
//
// It used to be three places, disagreeing: the landing page sold credits at
// $1 each, the Billing panel sold four metered tiers ($12.50 / $40 / $150 for
// 300 / 1,500 / 8,000 tasks), and budget.ts priced a credit at $29/1500. A
// visitor could read two different prices for the same thing without leaving
// the product.
//
// The deeper problem was what those numbers were pricing. Metering tasks means
// reselling model tokens — a margin on somebody else's commodity, repriced
// whenever they choose, where the heaviest users cost the most and every plan
// is a bet that people do not use what they bought. At the quota those plans
// lost money: 8,000 tasks on the cheapest usable model costs $147 against a
// $150 price.
//
// So we sell the software instead. The teams, the orchestration, the
// deliverables, the connectors — the part that costs nothing to serve — and
// the founder brings the model. That is FOUNDER, and it is the headline: their
// key, their bill, their choice of model, and no meter between them and their
// own work. MANAGED exists for people who do not want to hold a key, and it is
// priced so that a founder who consumes the whole allowance is still
// profitable, which is the test the old plans failed.

export interface Plan {
  id: 'free' | 'founder' | 'managed'
  name: string
  usd: number
  /** the one line under the price */
  tagline: string
  /** true when the founder supplies their own model key */
  byok?: boolean
  /** tasks included per month · undefined means "not metered" */
  tasks?: number
  /** shown above the list */
  inclHead: string
  incl: string[]
  featured?: boolean
}

/** Tasks a month on the managed tier. Chosen so that a founder who uses every
 *  one of them still leaves a margin — see TASK_USD below. */
export const MANAGED_TASKS = 2000
export const MANAGED_USD = 49
export const FOUNDER_USD = 29

/** What one task is worth on the managed tier · $0.0245.
 *
 *  This is the price of ONE unit of work, and units are not all the same size.
 *  A Saver draft on a free provider counts half; a Max run on the flagship
 *  counts fifteen. Without that weighting the figure was a fiction in both
 *  directions — the cheap task subsidised the dear one, and the dear one was
 *  sold below cost. api/_lib/entitlements.ts holds the weights and the
 *  arithmetic; weighted, every combination returns 65–78% gross.
 *
 *  The old plans priced a task at $0.019 against an $0.018 cost, which is not a
 *  margin. That is the mistake this number exists not to repeat. */
export const TASK_USD = MANAGED_USD / MANAGED_TASKS

// CE QUE CHAQUE FORMULE ACHÈTE, depuis que le produit enseigne.
//
// Les trois accroches décrivaient l'ancien métier : « construisez une
// entreprise et regardez votre équipe travailler », « nous faisons tourner les
// modèles pour vous ». Aucune n'est vraie — rien ici ne fait tourner un modèle
// pour personne, et le dojo est un bac à sable. Elles ont survécu au
// repositionnement parce qu'aucune règle ne les regardait ; il y en a une
// maintenant (voir scripts/check-content.mjs).
//
// Les PRIX et la structure ne bougent pas : ce sont des décisions prises
// ailleurs et elles ne m'appartiennent pas. Seul ce qu'on en dit est remis
// d'aplomb, pour que trois écrans ne vendent pas trois produits différents.
export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    usd: 0,
    tagline: 'The whole course, free. No card, no account to begin.',
    inclHead: 'Includes',
    incl: [
      'Every lesson, every track, nothing gated',
      'The reasoning behind every file in the library',
      'The practice dojo, and the cost breakdown of any run',
      'Two library files, open, so you can judge the rest',
    ],
  },
  {
    id: 'founder',
    name: 'Founder',
    usd: FOUNDER_USD,
    tagline: 'The library. Every prompt, brief and skill, yours to take.',
    byok: true,
    featured: true,
    inclHead: 'Everything in Free, plus',
    incl: [
      'Every file in the library, in full',
      'Download each one as a real .md or .txt, not a copy-paste',
      'New files as they are written, at no extra cost',
      'Your own Claude key, sealed server-side, if you switch the dojo live',
      'A custom domain',
      'No DojoBuro badge',
    ],
  },
  {
    id: 'managed',
    name: 'Managed',
    usd: MANAGED_USD,
    // ATTENTION · cette formule est la seule dont la raison d'être a bougé.
    //
    // Elle existait pour les gens qui ne veulent pas détenir de clé : nous
    // faisions tourner les modèles et absorbions le coût. Le dojo étant devenu
    // un bac à sable, cette contrepartie n'est plus servie par défaut — elle
    // ne revient qu'avec VITE_DOJO_LIVE. L'allocation existe toujours
    // côté serveur (api/_lib/entitlements.ts), elle ne se consomme simplement
    // plus tant que rien ne s'exécute.
    //
    // On le dit donc EN TOUTES LETTRES dans la liste plutôt que de vendre une
    // contrepartie éteinte. Ce qui reste à décider — la supprimer, la
    // repositionner, ou la garder pour les déploiements en mode vif — est une
    // décision de prix, et elle ne se prend pas dans un commentaire.
    tagline: 'For a team. One bill, and the hosted runs when the dojo is live.',
    tasks: MANAGED_TASKS,
    inclHead: 'Everything in Founder, plus',
    incl: [
      'The library for everyone on the team, under one bill',
      `${MANAGED_TASKS.toLocaleString('en-US')} tasks a month — only ever drawn on a deployment running live`,
      'On the practice dojo nothing runs, so nothing is drawn',
      'No API key to find, hold or rotate',
      'We pick the model per task and absorb the cost',
    ],
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<Plan['id'], Plan>

/** "$29" · plan prices are whole dollars, so no cents. */
export const planPrice = (p: Plan): string => (p.usd === 0 ? '$0' : `$${p.usd}`)
