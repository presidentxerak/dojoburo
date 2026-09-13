// Une spécialité, une équipe, par entreprise.
//
// La règle existe déjà à la création : demander une deuxième « Campagne réseaux
// sociaux » ouvre la première au lieu d'en bâtir une jumelle. Ce qui manquait,
// c'est le nettoyage de ce qui a été enregistré AVANT cette règle — et le
// produit s'était contenté de l'afficher : les onglets numérotaient les copies,
// les cartes portaient une étiquette « Duplicate », le catalogue grisait ce
// qu'on avait déjà. Trois endroits pour montrer le problème, aucun pour le
// retirer, et une pile de cartes identiques que le fondateur devait supprimer
// une par une.
//
// La règle de ce fichier, qui commande tout le reste : ON FUSIONNE, ON NE
// SUPPRIME PAS. Une copie peut porter le brief que quelqu'un a écrit, ou un
// coéquipier qu'il a créé lui-même. Effacer cela pour ranger l'écran serait un
// bien plus mauvais échange que de laisser les doublons.
//
// Ce module est volontairement à part du store, et pur : c'est ce qui le rend
// vérifiable ligne à ligne contre des cas réels (voir scripts/test-dedupe.mjs).

/** Ce dont la fusion a besoin · un sous-ensemble de workshop.Dojo. */
export interface TeamLike {
  id: string
  name: string
  companyId?: string
  archetype?: string
  goal?: string
  agents: AgentLike[]
}

export interface AgentLike {
  id: string
  name: string
  role?: string
  hidden?: boolean
  gx: number
  gy: number
  custom?: unknown
}

export interface DedupeResult<T> {
  teams: T[]
  /** combien de copies ont été absorbées · 0 = rien à faire */
  merged: number
  /** ce qui a été fusionné, pour pouvoir le dire à l'utilisateur */
  notes: string[]
}

// La grille d'un dojo · 6 × 4 = 24 places, la même que workshop.GRID et
// MAX_AGENTS. Elle est recopiée plutôt qu'importée pour garder ce module pur et
// testable sans charger le store ; scripts/test-dedupe.mjs vérifie qu'elles ne
// divergent pas.
export const COLS = 6
export const ROWS = 4

/**
 * Combien une copie « vaut » · plus c'est haut, plus elle mérite d'être gardée.
 *
 * Le critère n'est PAS le travail visible, et c'est contre-intuitif : le brief
 * et les coéquipiers créés sont repris sur la gardée quoi qu'il arrive, donc ils
 * ne doivent rien décider. Ce qui doit décider est ce qu'on ne sait PAS
 * fusionner — l'équipe elle-même : qui a été masqué, renommé, doté d'un budget.
 *
 * Un premier barème plaçait un coéquipier créé au-dessus de tout. Une copie
 * portant UN agent maison l'emportait alors sur une copie de vingt-quatre
 * coéquipiers configurés, et les vingt-trois autres disparaissaient pour sauver
 * le premier. C'est un test qui l'a montré, pas une relecture.
 */
function weight(t: TeamLike): number {
  const visible = t.agents.filter((a) => !a.hidden).length * 10
  // à effectif égal, celle qui porte des coéquipiers maison : leur reprise peut
  // échouer faute de place, donc mieux vaut partir de celle qui les a déjà
  const customs = t.agents.filter((a) => a.custom).length
  return visible + customs
}

/** Deux coéquipiers sont « le même » s'ils portent le même rôle, ou le même nom. */
const sameAgent = (a: AgentLike, b: AgentLike): boolean =>
  (!!a.role && a.role === b.role) || a.name.trim().toLowerCase() === b.name.trim().toLowerCase()

/** La première case libre de la grille · pour poser un coéquipier repris. */
function freeCell(agents: AgentLike[]): { gx: number; gy: number } | null {
  const taken = new Set(agents.map((a) => `${a.gx},${a.gy}`))
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) if (!taken.has(`${x},${y}`)) return { gx: x, gy: y }
  }
  return null
}

/**
 * Rassemble les briefs de plusieurs copies.
 *
 * Deux briefs différents veulent dire que deux personnes — ou la même à deux
 * moments — ont écrit deux intentions. On les garde toutes les deux : c'est
 * relisible, alors qu'un brief disparu ne se récupère pas. Le champ est borné à
 * 240 caractères, comme dans le store.
 */
export function mergeGoals(goals: string[]): string {
  const seen: string[] = []
  for (const g of goals) {
    const t = (g ?? '').trim()
    if (!t) continue
    if (seen.some((s) => s.toLowerCase() === t.toLowerCase())) continue
    seen.push(t)
  }
  return seen.join(' · ').slice(0, 240)
}

/**
 * Une équipe par spécialité et par entreprise.
 *
 * Les équipes SANS archétype — le dojo « QG » livré avec l'installation — ne
 * sont jamais touchées : elles n'ont pas de spécialité, donc pas de doublon
 * possible, et ce sont elles qu'on casserait en se trompant.
 *
 * L'ordre d'origine est conservé : la gardée reste à la place de la PREMIÈRE
 * copie du groupe, pas à celle de la plus riche. Sinon un nettoyage
 * réordonnerait la page sous les yeux de quelqu'un qui n'a rien demandé.
 */
export function dedupeTeams<T extends TeamLike>(teams: T[]): DedupeResult<T> {
  const groups = new Map<string, T[]>()
  const order: string[] = []

  for (const t of teams) {
    // pas d'archétype ⇒ pas de spécialité ⇒ rien à dédoublonner
    const key = t.archetype ? `${t.companyId ?? '-'}::${t.archetype}` : `solo::${t.id}`
    if (!groups.has(key)) { groups.set(key, []); order.push(key) }
    groups.get(key)!.push(t)
  }

  let merged = 0
  const notes: string[] = []
  const out: T[] = []

  for (const key of order) {
    const group = groups.get(key)!
    if (group.length === 1) { out.push(group[0]); continue }

    // la plus riche est gardée · à égalité, la première, pour rester stable
    const keeper = group.reduce((best, t) => (weight(t) > weight(best) ? t : best), group[0])
    const others = group.filter((t) => t !== keeper)

    const agents = [...keeper.agents]
    let takenAgents = 0
    const notPlaced: string[] = []
    for (const o of others) {
      for (const a of o.agents) {
        // On ne reprend QUE les coéquipiers créés à la main. Les agents de rôle
        // sont identiques d'une copie à l'autre : les recopier remplirait la
        // grille de sosies au lieu de sauver quoi que ce soit.
        if (!a.custom) continue
        if (agents.some((x) => sameAgent(x, a))) continue
        const cell = freeCell(agents)
        if (!cell) { notPlaced.push(a.name); continue }   // grille pleine
        agents.push({ ...a, ...cell } as AgentLike as T['agents'][number])
        takenAgents++
      }
    }

    const goal = mergeGoals([keeper.goal ?? '', ...others.map((o) => o.goal ?? '')])
    out.push({ ...keeper, agents, goal } as T)
    merged += others.length

    const label = keeper.name || keeper.archetype || 'équipe'
    const s = others.length > 1 ? 's' : ''
    let note = `${label} · ${others.length} copie${s} fusionnée${s}`
    if (takenAgents) note += `, ${takenAgents} coéquipier${takenAgents > 1 ? 's' : ''} repris`
    // La seule perte possible, et elle se dit. Une équipe pleine n'a pas de
    // place pour un coéquipier venu d'ailleurs, et éjecter quelqu'un en silence
    // pour lui faire de la place serait pire. Le fondateur est nommé le nom
    // qu'il doit recréer, plutôt que de le découvrir un jour par hasard.
    if (notPlaced.length) {
      note += ` · équipe pleine, à recréer : ${notPlaced.join(', ')}`
    }
    notes.push(note)
  }

  return { teams: out, merged, notes }
}

/**
 * La question que la création doit poser AVANT de bâtir quoi que ce soit.
 *
 * Elle est ici plutôt que dans le store pour qu'il n'existe qu'une seule
 * définition de « c'est la même équipe » — celle que le nettoyage applique. Deux
 * définitions qui divergent, c'est exactement ainsi que les doublons étaient
 * revenus par une porte que personne ne surveillait.
 */
export const existingTeam = <T extends TeamLike>(
  teams: T[], companyId: string | undefined, archetype: string,
): T | undefined => teams.find((t) => t.archetype === archetype && t.companyId === companyId)
