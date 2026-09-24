// DOJOBURO · le moteur du jeu de simulation.
//
// Tu diriges un studio d'IA installé dans un dojo. Douze spécialistes, un
// budget de tokens par jour, des clients qui entrent avec un brief, et un
// objectif de chiffre d'affaires à tenir avant 18 h. Voir le document de
// conception (règles, chiffres) reproduit en tête de chaque section.
//
// POURQUOI UN MOTEUR PUR · aucune dépendance au navigateur, au rendu ni à
// l'heure réelle. Tout passe par des fonctions qui prennent un état et
// rendent le suivant, avec un tirage au sort semé. C'est ce qui permet à
// scripts/test-sim de jouer des journées entières en une fraction de seconde
// et de vérifier que le jeu est gagnable, que les règles tiennent, et que le
// budget ne ment jamais.
import type { Brief, Skill } from './types'
import { SKILLS } from './types'

/* ------------------------------------------------------------------ */
/* LES CONSTANTES DU JEU                                               */
/* ------------------------------------------------------------------ */

/** une journée · 9 h → 18 h en trois minutes réelles */
export const DAY_SECONDS = 180
export const DAY_START_HOUR = 9
export const DAY_HOURS = 9
/** le budget du premier jour, et ce qu'il gagne chaque jour */
export const BUDGET_BASE = 60_000
export const BUDGET_PER_DAY = 8_000
/** l'objectif du premier jour, et ce qu'il gagne chaque jour */
export const OBJECTIVE_BASE = 600
export const OBJECTIVE_PER_DAY = 220
/** au plus trois clients qui attendent */
export const QUEUE_MAX = 3
/** un pas de tokens dans le panneau d'affectation */
export const TOKEN_STEP = 1_000
/** au plus quatre spécialistes sur un même brief */
export const TEAM_MAX = 4
/** les paliers d'expérience · niveau 2 à 30, 3 à 80, 4 à 150, 5 à 250 */
export const LEVEL_XP = [0, 30, 80, 150, 250] as const
export const LEVEL_MAX = 5
/** la fatigue · ce qu'ajoute un travail, ce qu'on récupère par seconde au
 *  repos, et le seuil au-delà duquel la qualité baisse */
export const FATIGUE_PER_JOB = 22
export const FATIGUE_RECOVERY = 0.75
export const FATIGUE_LIMIT = 60
/** le bonus de frugalité · 1 € par 250 tokens non dépensés à 18 h */
export const FRUGAL_TOKENS_PER_EURO = 250

/* ------------------------------------------------------------------ */
/* LE HASARD SEMÉ                                                      */
/* ------------------------------------------------------------------ */

/** Un générateur pseudo-aléatoire semé (mulberry32) · la même graine rejoue
 *  la même journée, ce que les tests exigent et ce qu'un joueur ne voit pas. */
export function seeded(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
export type Rng = () => number
const between = (rng: Rng, lo: number, hi: number) => lo + rng() * (hi - lo)
const pick = <T>(rng: Rng, xs: readonly T[]): T => xs[Math.floor(rng() * xs.length) % xs.length]

/* ------------------------------------------------------------------ */
/* LA PARTIE SAUVEGARDÉE                                               */
/* ------------------------------------------------------------------ */

export interface Upgrades {
  /** combien de fois le budget a été agrandi (+10 000 tokens chacun) */
  budget: number
  /** la bibliothèque de prompts · −10 % de tokens nécessaires */
  library: boolean
  /** le cache · encore −10 % */
  cache: boolean
  /** la machine à café · la fatigue monte 40 % moins vite */
  coffee: boolean
}

export interface Save {
  v: 1
  day: number
  cash: number
  reputation: number
  staff: Record<Skill, { level: number; xp: number }>
  upgrades: Upgrades
  best: number
  served: number
  /** le tutoriel a été vu */
  tutored: boolean
}

export function newSave(): Save {
  const staff = {} as Save['staff']
  for (const s of SKILLS) staff[s] = { level: 1, xp: 0 }
  return {
    v: 1, day: 1, cash: 0, reputation: 10, staff,
    upgrades: { budget: 0, library: false, cache: false, coffee: false },
    best: 1, served: 0, tutored: false,
  }
}

/** Relire une sauvegarde · tout ce qui manque ou ne tient pas repart d'une
 *  valeur saine plutôt que de faire planter le jeu. */
export function reviveSave(raw: unknown): Save {
  const base = newSave()
  if (!raw || typeof raw !== 'object') return base
  const r = raw as Partial<Save>
  const num = (x: unknown, d: number, lo = 0, hi = Number.MAX_SAFE_INTEGER) =>
    typeof x === 'number' && Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : d
  const staff = { ...base.staff }
  for (const s of SKILLS) {
    const x = (r.staff as Save['staff'] | undefined)?.[s]
    if (x) staff[s] = { level: num(x.level, 1, 1, LEVEL_MAX), xp: num(x.xp, 0) }
  }
  const u = (r.upgrades ?? {}) as Partial<Upgrades>
  return {
    v: 1,
    day: num(r.day, 1, 1, 999),
    cash: num(r.cash, 0),
    reputation: num(r.reputation, 10, 0, 100),
    staff,
    upgrades: { budget: num(u.budget, 0, 0, 50), library: !!u.library, cache: !!u.cache && !!u.library, coffee: !!u.coffee },
    best: num(r.best, 1, 1, 999),
    served: num(r.served, 0),
    tutored: !!r.tutored,
  }
}

export const levelForXp = (xp: number) => {
  let l = 1
  for (let i = 1; i < LEVEL_XP.length; i++) if (xp >= LEVEL_XP[i]) l = i + 1
  return Math.min(LEVEL_MAX, l)
}

/* ------------------------------------------------------------------ */
/* LA JOURNÉE                                                          */
/* ------------------------------------------------------------------ */

export type EventKind = 'rush' | 'spike' | 'viral' | 'outage' | 'advice'

export interface Waiting {
  uid: string
  brief: Brief
  arrivedAt: number
  leaveAt: number
}

export type Outcome = 'excellent' | 'good' | 'meh' | 'failed'

export interface Job {
  uid: string
  brief: Brief
  team: Skill[]
  tokens: Partial<Record<Skill, number>>
  startAt: number
  endAt: number
  quality: number
}

export interface Result {
  uid: string
  brief: Brief
  team: Skill[]
  quality: number
  outcome: Outcome
  earned: number
  rep: number
}

export interface Day {
  day: number
  seed: number
  /** secondes écoulées depuis 9 h */
  t: number
  budget: number
  spent: number
  revenue: number
  objective: number
  /** la réputation en fin de journée, à reporter dans la sauvegarde */
  reputation: number
  queue: Waiting[]
  jobs: Job[]
  results: Result[]
  /** les clients partis sans réponse */
  lost: number
  nextArrival: number
  event: EventKind | null
  /** le spécialiste en panne, pour l'événement « outage » */
  down: Skill | null
  /** le conseil du maître n'a pas encore servi */
  advice: boolean
  /** la fatigue du jour, par spécialiste */
  fatigue: Record<Skill, number>
  /** qui travaille, et jusqu'à quand */
  busy: Partial<Record<Skill, string>>
  over: boolean
  n: number
}

export const budgetFor = (save: Save) => BUDGET_BASE + BUDGET_PER_DAY * (save.day - 1) + 10_000 * save.upgrades.budget
export const objectiveFor = (day: number) => OBJECTIVE_BASE + OBJECTIVE_PER_DAY * (day - 1)

/** L'heure affichée · « 9:00 » à « 18:00 ». */
export function clock(t: number): string {
  const minutes = Math.min(DAY_HOURS * 60, Math.floor((t / DAY_SECONDS) * DAY_HOURS * 60))
  const h = DAY_START_HOUR + Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}:${String(m).padStart(2, '0')}`
}

/** Ouvrir une journée · l'événement du jour est tiré à partir du jour 2. */
export function startDay(save: Save, seed: number): Day {
  const rng = seeded(seed)
  const event: EventKind | null = save.day >= 2 ? pick(rng, ['rush', 'spike', 'viral', 'outage', 'advice'] as const) : null
  const fatigue = {} as Record<Skill, number>
  for (const s of SKILLS) fatigue[s] = 0
  return {
    day: save.day, seed, t: 0,
    budget: budgetFor(save), spent: 0, revenue: 0, objective: objectiveFor(save.day),
    reputation: save.reputation,
    queue: [], jobs: [], results: [], lost: 0,
    // le premier client entre tout de suite · une journée qui commence par
    // vingt secondes de vide se lit comme un jeu qui ne marche pas
    nextArrival: 2,
    event,
    down: event === 'outage' ? pick(rng, SKILLS) : null,
    advice: event === 'advice',
    fatigue, busy: {}, over: false, n: 0,
  }
}

/* ------------------------------------------------------------------ */
/* LA QUALITÉ D'UN TRAVAIL                                             */
/* ------------------------------------------------------------------ */

export type Allocation = Partial<Record<Skill, number>>

export interface Preview {
  quality: number
  /** ce que le lancement retirera du budget */
  cost: number
  coverage: number
  fuel: number
  /** les tokens dont ce brief a besoin, améliorations comprises */
  need: number
  /** les compétences demandées que personne ne couvre */
  missing: Skill[]
  /** les spécialistes dont la compétence n'est pas demandée */
  wasted: Skill[]
  tired: Skill[]
  outcome: Outcome
}

/** les tokens dont un brief a besoin, bibliothèque et cache compris */
export const needFor = (brief: Brief, save: Save) =>
  Math.round(brief.tokens * (save.upgrades.library ? 0.9 : 1) * (save.upgrades.cache ? 0.9 : 1))

export const outcomeOf = (q: number): Outcome => (q >= 80 ? 'excellent' : q >= 55 ? 'good' : q >= 30 ? 'meh' : 'failed')

/** La qualité · la règle du document de conception, écrite une fois. Le
 *  panneau d'affectation l'affiche en direct : c'est elle qui apprend au
 *  joueur ce que le cours enseigne (le bon spécialiste, assez de tokens,
 *  pas plus). */
export function preview(day: Day, save: Save, brief: Brief, alloc: Allocation, adviceOn = day.advice): Preview {
  // UNE ÉQUIPE, C'EST QUI A DES TOKENS · le panneau donne toujours au moins un
  // pas à qui est sélectionné, donc l'aperçu et le lancement comptent pareil.
  const team = (Object.keys(alloc) as Skill[]).filter((s) => (alloc[s] ?? 0) > 0)
  const needed = Object.keys(brief.needs) as Skill[]
  const hasOrch = team.includes('orchestration')

  let cover = 0
  const missing: Skill[] = []
  for (const s of needed) {
    const n = brief.needs[s] ?? 1
    if (team.includes(s)) cover += Math.min(1.2, (save.staff[s].level + 1) / (n + 1))
    else if (hasOrch && s !== 'orchestration') { cover += 0.35; missing.push(s) }
    else missing.push(s)
  }
  const coverage = needed.length ? cover / needed.length : 0

  const need = needFor(brief, save)
  const wasted = team.filter((s) => !needed.includes(s) && s !== 'orchestration')
  // l'orchestrateur n'est pas du gaspillage quand il coordonne au moins deux
  // autres spécialistes · il l'est quand il travaille seul pour rien
  const orchUseful = hasOrch && team.length >= 3
  let effective = 0
  let given = 0
  for (const s of team) {
    const k = alloc[s] ?? 0
    given += k
    const useful = needed.includes(s) || (s === 'orchestration' && orchUseful)
    effective += useful ? k : k * 0.3
  }
  const fuel = need > 0 ? effective / need : 0
  const fuelFactor = fuel <= 0 ? 0 : fuel < 1 ? Math.pow(fuel, 1.4) : Math.min(1.12, 1 + 0.12 * Math.log2(fuel))

  let q = 100 * Math.min(1, coverage) * fuelFactor
  if (orchUseful) q *= 1.1
  const tired = team.filter((s) => day.fatigue[s] > FATIGUE_LIMIT)
  for (let i = 0; i < tired.length; i++) q *= 0.88
  if (adviceOn) q *= 1.1
  const quality = Math.max(0, Math.min(100, Math.round(q)))
  const cost = Math.round(given * (day.event === 'spike' ? 1.25 : 1))
  return { quality, cost, coverage, fuel, need, missing, wasted, tired, outcome: outcomeOf(quality) }
}

/* ------------------------------------------------------------------ */
/* LANCER UN TRAVAIL                                                   */
/* ------------------------------------------------------------------ */

export type LaunchError = 'gone' | 'empty' | 'too-many' | 'busy' | 'down' | 'budget' | 'over'

export function workTime(brief: Brief, save: Save, team: Skill[]): number {
  const avg = team.reduce((n, s) => n + save.staff[s].level, 0) / Math.max(1, team.length)
  return Math.max(8, brief.work * (1 - 0.07 * (avg - 1)))
}

/** Lancer · retire les tokens du budget tout de suite, occupe l'équipe
 *  jusqu'à la fin du travail. La qualité est fixée au lancement, avec la
 *  fatigue du moment : c'est la décision qu'on juge, pas ce qui arrive après. */
export function launch(day: Day, save: Save, waitingUid: string, alloc: Allocation):
  { ok: true; day: Day; job: Job } | { ok: false; error: LaunchError } {
  if (day.over) return { ok: false, error: 'over' }
  const w = day.queue.find((x) => x.uid === waitingUid)
  if (!w) return { ok: false, error: 'gone' }
  const team = (Object.keys(alloc) as Skill[]).filter((s) => (alloc[s] ?? 0) > 0)
  if (!team.length) return { ok: false, error: 'empty' }
  if (team.length > TEAM_MAX) return { ok: false, error: 'too-many' }
  if (team.some((s) => day.busy[s])) return { ok: false, error: 'busy' }
  if (day.down && team.includes(day.down)) return { ok: false, error: 'down' }
  const clean: Allocation = {}
  for (const s of team) clean[s] = Math.max(0, Math.round((alloc[s] ?? 0) / TOKEN_STEP) * TOKEN_STEP)
  const p = preview(day, save, w.brief, clean)
  if (p.cost > day.budget - day.spent) return { ok: false, error: 'budget' }

  const uid = `j${day.n + 1}`
  const job: Job = {
    uid, brief: w.brief, team, tokens: clean,
    startAt: day.t, endAt: day.t + workTime(w.brief, save, team), quality: p.quality,
  }
  const busy = { ...day.busy }
  for (const s of team) busy[s] = uid
  const fatigue = { ...day.fatigue }
  const gain = FATIGUE_PER_JOB * (save.upgrades.coffee ? 0.6 : 1)
  for (const s of team) fatigue[s] = Math.min(100, fatigue[s] + gain)
  return {
    ok: true,
    job,
    day: {
      ...day, n: day.n + 1,
      spent: day.spent + p.cost,
      queue: day.queue.filter((x) => x.uid !== waitingUid),
      jobs: [...day.jobs, job],
      busy, fatigue,
      advice: false,
    },
  }
}

/* ------------------------------------------------------------------ */
/* LE TEMPS QUI PASSE                                                  */
/* ------------------------------------------------------------------ */

export type GameEvent =
  | { type: 'arrive'; waiting: Waiting }
  | { type: 'leave'; waiting: Waiting }
  | { type: 'done'; result: Result }
  | { type: 'levelup'; skill: Skill; level: number }
  | { type: 'dayEnd' }

/** La récompense d'un travail fini, selon son résultat. */
export function rewardOf(brief: Brief, outcome: Outcome, event: EventKind | null): { earned: number; rep: number } {
  const viral = event === 'viral' ? 1.3 : 1
  switch (outcome) {
    case 'excellent': return { earned: Math.round(brief.reward * 1.2 * viral), rep: 2 }
    case 'good': return { earned: Math.round(brief.reward * viral), rep: 1 }
    case 'meh': return { earned: Math.round(brief.reward * 0.5 * viral), rep: 0 }
    default: return { earned: 0, rep: -2 }
  }
}

/** Choisir le brief suivant · la difficulté monte avec les jours, et un brief
 *  déjà vu aujourd'hui ne revient pas. */
export function nextBrief(pool: readonly Brief[], day: number, rng: Rng, seen: Set<string>): Brief {
  const r = rng()
  const tier = day <= 1 ? 1 : day <= 3 ? (r < 0.6 ? 1 : 2) : r < 0.3 ? 1 : r < 0.75 ? 2 : 3
  const fresh = pool.filter((b) => b.tier === tier && !seen.has(b.id))
  const any = pool.filter((b) => b.tier <= Math.max(tier, 1) && !seen.has(b.id))
  return pick(rng, fresh.length ? fresh : any.length ? any : pool)
}

/** L'intervalle avant le client suivant · plus court avec les jours, plus
 *  court encore un jour de rush, un peu plus court avec la réputation. */
export function arrivalGap(day: Day, rng: Rng): number {
  const base = between(rng, 22, 34) * Math.pow(0.95, day.day - 1)
  const rush = day.event === 'rush' ? 0.6 : 1
  const fame = 1 - Math.min(0.2, day.reputation / 250)
  return Math.max(12, base * rush * fame)
}

/** Faire avancer la journée de `dt` secondes · rend le nouvel état, la
 *  sauvegarde mise à jour (expérience, réputation) et ce qui s'est passé. */
export function tick(day: Day, save: Save, dt: number, pool: readonly Brief[]):
  { day: Day; save: Save; events: GameEvent[] } {
  if (day.over) return { day, save, events: [] }
  const events: GameEvent[] = []
  // le hasard est semé par la graine du jour et le nombre de choses arrivées ·
  // rejouable, sans garder d'état caché hors de la journée
  const rng = seeded(day.seed * 7919 + day.n * 104729 + Math.floor(day.t))
  // LE TEMPS NE S'ARRÊTE PAS À 18 H · un travail lancé à 17 h 58 se termine
  // après l'heure, et la journée ne se ferme qu'une fois tout rendu. Bornée à
  // 18 h, l'horloge attendait pour toujours un travail qui ne finissait pas.
  let d: Day = { ...day, t: day.t + dt }
  let s: Save = save

  // 1 · la fatigue redescend chez qui ne travaille pas
  const fatigue = { ...d.fatigue }
  for (const k of SKILLS) if (!d.busy[k]) fatigue[k] = Math.max(0, fatigue[k] - FATIGUE_RECOVERY * dt)
  d.fatigue = fatigue

  // 2 · les travaux qui se terminent
  const finished = d.jobs.filter((j) => j.endAt <= d.t)
  if (finished.length) {
    const busy = { ...d.busy }
    const staff = { ...s.staff }
    let revenue = d.revenue
    let rep = d.reputation
    const results = [...d.results]
    for (const j of finished) {
      const outcome = outcomeOf(j.quality)
      const r = rewardOf(j.brief, outcome, d.event)
      revenue += r.earned
      rep = Math.max(0, Math.min(100, rep + r.rep))
      const result: Result = { uid: j.uid, brief: j.brief, team: j.team, quality: j.quality, outcome, earned: r.earned, rep: r.rep }
      results.push(result)
      events.push({ type: 'done', result })
      for (const k of j.team) {
        delete busy[k]
        const before = staff[k].level
        const xp = staff[k].xp + Math.round(j.quality / 10)
        const level = Math.max(before, levelForXp(xp))
        staff[k] = { level, xp }
        if (level > before) events.push({ type: 'levelup', skill: k, level })
      }
    }
    d = { ...d, busy, revenue, reputation: rep, results, jobs: d.jobs.filter((j) => j.endAt > d.t) }
    s = { ...s, staff, served: s.served + finished.length }
  }

  // 3 · les clients qui repartent faute de réponse
  const leaving = d.queue.filter((w) => w.leaveAt <= d.t)
  if (leaving.length) {
    for (const w of leaving) events.push({ type: 'leave', waiting: w })
    d = {
      ...d,
      queue: d.queue.filter((w) => w.leaveAt > d.t),
      lost: d.lost + leaving.length,
      reputation: Math.max(0, d.reputation - leaving.length),
    }
  }

  // 4 · les clients qui arrivent · jamais après 17 h, pour qu'un brief pris
  // en fin de journée ait le temps d'être rendu
  if (d.t >= d.nextArrival && d.t < DAY_SECONDS * (8 / 9)) {
    if (d.queue.length < QUEUE_MAX) {
      const seen = new Set([...d.queue, ...d.jobs, ...d.results].map((x) => x.brief.id))
      const brief = nextBrief(pool, d.day, rng, seen)
      const patience = Math.max(50, between(rng, 70, 100) - (d.day - 1) * 2)
      const waiting: Waiting = { uid: `c${d.n + 1}`, brief, arrivedAt: d.t, leaveAt: d.t + patience }
      events.push({ type: 'arrive', waiting })
      d = { ...d, n: d.n + 1, queue: [...d.queue, waiting], nextArrival: d.t + arrivalGap(d, rng) }
    } else {
      // la file est pleine · on réessaie un peu plus tard
      d = { ...d, nextArrival: d.t + 4 }
    }
  }

  // 5 · 18 h · le studio ferme ses portes : les clients qui attendent encore
  // repartent, sans que ce soit une faute (personne n'a manqué à sa parole).
  // La journée se ferme quand plus rien ne travaille : un travail lancé à
  // 17 h 55 est rendu, pas perdu.
  if (d.t >= DAY_SECONDS && d.queue.length) {
    for (const w of d.queue) events.push({ type: 'leave', waiting: w })
    d = { ...d, queue: [] }
  }
  if (d.t >= DAY_SECONDS && d.jobs.length === 0) {
    d = { ...d, over: true }
    events.push({ type: 'dayEnd' })
  }
  return { day: d, save: s, events }
}

/* ------------------------------------------------------------------ */
/* LA FIN DE LA JOURNÉE                                                */
/* ------------------------------------------------------------------ */

export interface Summary {
  day: number
  won: boolean
  revenue: number
  objective: number
  bonus: number
  left: number
  served: number
  lost: number
  quality: number
  excellent: number
  reputation: number
}

/** Clore la journée · le bonus de frugalité, la caisse, et le jour suivant
 *  si l'objectif est atteint. Sinon on rejoue le même jour, sans rien perdre
 *  de ce qui a été gagné : un jeu qui punit l'essai n'apprend rien. */
export function closeDay(day: Day, save: Save): { save: Save; summary: Summary } {
  const left = Math.max(0, day.budget - day.spent)
  const won = day.revenue >= day.objective
  // LA FRUGALITÉ SE MÉRITE · elle ne paie que si l'objectif est atteint. Payée
  // sans condition, une journée passée à ne rien faire rapportait le budget
  // entier (240 € au jour 1), à rejouer autant de fois qu'on voulait : c'est
  // l'inverse de la leçon, qui est de faire le travail avec peu, pas de ne
  // pas le faire.
  const bonus = won ? Math.floor(left / FRUGAL_TOKENS_PER_EURO) : 0
  const q = day.results.length ? Math.round(day.results.reduce((n, r) => n + r.quality, 0) / day.results.length) : 0
  const next = won ? save.day + 1 : save.day
  return {
    save: { ...save, day: next, best: Math.max(save.best, next), cash: save.cash + day.revenue + bonus, reputation: day.reputation },
    summary: {
      day: day.day, won, revenue: day.revenue, objective: day.objective, bonus, left,
      served: day.results.length, lost: day.lost, quality: q,
      excellent: day.results.filter((r) => r.outcome === 'excellent').length,
      reputation: day.reputation,
    },
  }
}

/* ------------------------------------------------------------------ */
/* LA BOUTIQUE                                                         */
/* ------------------------------------------------------------------ */

export type OfferId = 'budget' | 'library' | 'cache' | 'coffee' | 'train'

export interface Offer {
  id: OfferId
  price: number
  /** déjà acheté, ou impossible pour l'instant */
  available: boolean
}

export function offers(save: Save): Offer[] {
  const u = save.upgrades
  return [
    { id: 'budget', price: 300 + 150 * u.budget, available: u.budget < 50 },
    { id: 'library', price: 400, available: !u.library },
    { id: 'cache', price: 450, available: u.library && !u.cache },
    { id: 'coffee', price: 250, available: !u.coffee },
    { id: 'train', price: 0, available: true },
  ]
}

/** le prix d'une formation · 200 € par niveau actuel */
export const trainPrice = (save: Save, skill: Skill) => 200 * save.staff[skill].level

export function buy(save: Save, id: OfferId, skill?: Skill): { ok: true; save: Save } | { ok: false; error: 'cash' | 'unavailable' } {
  if (id === 'train') {
    if (!skill || save.staff[skill].level >= LEVEL_MAX) return { ok: false, error: 'unavailable' }
    const price = trainPrice(save, skill)
    if (save.cash < price) return { ok: false, error: 'cash' }
    const level = save.staff[skill].level + 1
    return {
      ok: true,
      save: {
        ...save, cash: save.cash - price,
        staff: { ...save.staff, [skill]: { level, xp: Math.max(save.staff[skill].xp, LEVEL_XP[level - 1]) } },
      },
    }
  }
  const o = offers(save).find((x) => x.id === id)
  if (!o || !o.available) return { ok: false, error: 'unavailable' }
  if (save.cash < o.price) return { ok: false, error: 'cash' }
  const u = { ...save.upgrades }
  if (id === 'budget') u.budget += 1
  if (id === 'library') u.library = true
  if (id === 'cache') u.cache = true
  if (id === 'coffee') u.coffee = true
  return { ok: true, save: { ...save, cash: save.cash - o.price, upgrades: u } }
}

/* ------------------------------------------------------------------ */
/* UNE AFFECTATION CONSEILLÉE                                          */
/* ------------------------------------------------------------------ */

/** La meilleure équipe libre pour un brief, avec les tokens justes · sert au
 *  bouton « Proposer une équipe » du panneau (pour apprendre en regardant) et
 *  aux tests d'équilibre. */
export function suggest(day: Day, save: Save, brief: Brief): Allocation {
  const needed = (Object.keys(brief.needs) as Skill[]).filter((s) => !day.busy[s] && s !== day.down)
  const team: Skill[] = [...needed]
  if (team.length < (Object.keys(brief.needs).length) && !day.busy.orchestration && day.down !== 'orchestration' && !team.includes('orchestration')) {
    team.push('orchestration')
  }
  if (!team.length) return {}
  const need = needFor(brief, save)
  const useful = team.filter((s) => brief.needs[s] || (s === 'orchestration' && team.length >= 3))
  const per = Math.ceil(need / Math.max(1, useful.length) / TOKEN_STEP) * TOKEN_STEP
  const alloc: Allocation = {}
  for (const s of team.slice(0, TEAM_MAX)) alloc[s] = useful.includes(s) ? per : TOKEN_STEP
  return alloc
}
