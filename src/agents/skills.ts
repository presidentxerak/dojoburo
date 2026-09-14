// Ce qu'on n'a plus à réexpliquer.
//
// Un fondateur qui corrige trois fois de suite « écris en français », « notre
// ton est direct », « ne propose jamais de remise » retape la même phrase à
// chaque lancement — et le quatrième jour il ne la retape plus, il corrige le
// texte à la main. C'est le moment où l'agent cesse de faire gagner du temps.
//
// Une RÈGLE est une consigne écrite une fois et appliquée à chaque run de cet
// agent. Elle voyage dans le prompt système, par le canal `context` qui existait
// déjà dans api/agent-run.ts et que personne n'alimentait.
//
// Trois décisions :
//
//   · Les règles ont une PORTÉE. Celle de l'entreprise vaut pour tout le monde
//     (« nous vendons aux DSI françaises ») ; celle d'un agent ne vaut que pour
//     lui (« Scribe n'utilise jamais de superlatif »). Tout mélanger obligerait
//     à répéter une règle de maison sur dix-huit agents.
//
//   · Elles sont COURTES et peu nombreuses. Un prompt système qui enfle dilue la
//     tâche elle-même : un agent à qui l'on donne quarante règles en oublie la
//     moitié et rate la demande. D'où les plafonds plus bas, qui sont un choix de
//     qualité et non une économie.
//
//   · Elles naissent d'un ÉCHEC. La façon dont on les crée n'est pas un
//     formulaire vide mais un bouton sur un livrable qui n'allait pas — c'est
//     ainsi qu'une correction cesse d'être à refaire.
import { create } from 'zustand'

export interface Skill {
  id: string
  /** la consigne, telle qu'elle partira dans le prompt */
  text: string
  /** l'agent visé, ou '*' pour toute l'entreprise */
  role: string
  createdAt: number
  /** d'où elle vient · une règle née d'un échec se relit mieux avec sa raison */
  from?: string
}

/** Ce qu'une règle peut peser · au-delà c'est un brief, pas une règle. */
export const MAX_LEN = 220
/** Par agent, et pour l'entreprise. Volontairement bas : voir l'en-tête. */
export const MAX_PER_ROLE = 8
export const MAX_GLOBAL = 10

const KEY = 'dojoburo.skills.v1'
const uid = (): string => Math.random().toString(36).slice(2, 10)

interface SkillState {
  /** toutes les règles, par dojo · un dojo est une équipe, ses règles lui sont propres */
  byDojo: Record<string, Skill[]>
  add: (dojoId: string, role: string, text: string, from?: string) => boolean
  remove: (dojoId: string, id: string) => void
  /** les règles qui s'appliquent à cet agent · maison d'abord, puis les siennes */
  forAgent: (dojoId: string, role: string) => Skill[]
}

function load(): Record<string, Skill[]> {
  try {
    const raw = localStorage.getItem(KEY)
    const p = raw ? JSON.parse(raw) : null
    return p && typeof p === 'object' ? p : {}
  } catch {
    return {}
  }
}

export const useSkills = create<SkillState>((set, get) => ({
  byDojo: load(),

  add: (dojoId, role, text, from) => {
    const clean = String(text || '').trim().replace(/\s+/g, ' ').slice(0, MAX_LEN)
    if (clean.length < 4) return false
    const list = get().byDojo[dojoId] ?? []
    // La même règle deux fois, c'est la même règle. Comparer en minuscules
    // évite qu'une majuscule de plus fasse un doublon que personne ne voit.
    if (list.some((s) => s.role === role && s.text.toLowerCase() === clean.toLowerCase())) return false
    const cap = role === '*' ? MAX_GLOBAL : MAX_PER_ROLE
    if (list.filter((s) => s.role === role).length >= cap) return false

    const next = { ...get().byDojo, [dojoId]: [...list, { id: uid(), text: clean, role, createdAt: Date.now(), from }] }
    set({ byDojo: next })
    persist(next)
    return true
  },

  remove: (dojoId, id) => {
    const next = { ...get().byDojo, [dojoId]: (get().byDojo[dojoId] ?? []).filter((s) => s.id !== id) }
    set({ byDojo: next })
    persist(next)
  },

  // La maison d'abord : une règle d'entreprise cadre, une règle d'agent précise.
  // L'ordre compte dans un prompt — ce qui vient en dernier est lu en dernier.
  forAgent: (dojoId, role) => {
    const list = get().byDojo[dojoId] ?? []
    return [...list.filter((s) => s.role === '*'), ...list.filter((s) => s.role === role)]
  },
}))

function persist(byDojo: Record<string, Skill[]>): void {
  try { localStorage.setItem(KEY, JSON.stringify(byDojo)) } catch { /* mode privé */ }
}

/**
 * Le bloc qui part dans le prompt système.
 *
 * Rendu vide quand il n'y a aucune règle, pour ne pas coller un en-tête vide en
 * tête du contexte d'un agent — un titre suivi de rien invite le modèle à
 * inventer ce qui devrait s'y trouver.
 */
export function skillsBlock(dojoId: string, role: string): string {
  const list = useSkills.getState().forAgent(dojoId, role)
  if (!list.length) return ''
  return [
    'Standing rules for this company. They were set by the founder and apply to every task.',
    'Follow them unless the current request explicitly says otherwise.',
    ...list.map((s) => `- ${s.text}`),
  ].join('\n')
}

/**
 * Une règle proposée à partir d'un contrôle raté.
 *
 * C'est le point qui transforme une correction en acquis : plutôt qu'un
 * formulaire vide, on propose le texte de la règle qui aurait évité l'échec.
 * L'utilisateur le garde, le modifie ou le refuse — mais il ne part pas de rien.
 */
export function ruleFromFailure(checkId: string): string {
  const SUGGESTED: Record<string, string> = {
    substance: 'Produis un document complet, jamais un résumé de ce que tu ferais.',
    structure: 'Structure toujours le livrable avec des titres et, quand c’est une liste, un tableau.',
    'no-placeholder': 'N’écris jamais de texte de remplissage : marque ce qui manque plutôt que de le combler.',
    answered: 'Produis le livrable demandé ; pose tes questions à la fin, pas à la place.',
    'tokens-json': 'Commence toujours par le bloc ```json des tokens, avant toute prose.',
    provenance: 'Marque chaque chiffre [sourced], [estimated from …] ou [unknown]. Jamais un nombre nu.',
    'not-legal-advice': 'Ouvre tout document juridique en précisant que c’est un brouillon pour revue, pas un avis.',
    'open-decisions': 'Ne tranche pas à ma place : écris [DECIDE: …] et laisse-moi choisir.',
    'clause-table': 'Rends une revue de contrat sous forme de tableau clause par clause.',
    slides: 'Un deck fait douze diapositives, une idée par diapositive.',
    'backlog-rows': 'Un backlog d’expériences compte au moins dix lignes, avec leur score.',
    questions: 'Un guide d’entretien compte au moins douze questions numérotées.',
    'rollback-commands': 'Écris le retour arrière en commandes exécutables, pas en intentions.',
    'metric-table': 'Mets chaque métrique dans un tableau avec sa définition et la décision qu’elle informe.',
  }
  return SUGGESTED[checkId] ?? ''
}
