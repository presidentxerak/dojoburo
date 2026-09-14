// Vérifier ce que l'agent vient de produire, avant de le rendre.
//
// C'est le maillon qui manquait. Un run générait du texte, le mettait en forme
// et le rangeait : le seul contrôle était `if (!text.trim())`. Tout le reste —
// « est-ce que ce document ressemble à ce qu'on a demandé ? » — retombait sur la
// personne qui lisait. C'est exactement le goulot d'étranglement qui empêche de
// faire confiance à un agent : tant que la vérification est humaine, ajouter des
// agents n'ajoute pas de capacité, ça ajoute de la lecture.
//
// Trois règles gouvernent ce fichier, et la première décide de tout :
//
//   1. UN CONTRÔLE QUI SE DÉCLENCHE SUR DU BON TRAVAIL EST PIRE QUE PAS DE
//      CONTRÔLE. Il apprend à ignorer l'avertissement, et le jour où il est
//      juste, personne ne le lit. Chaque contrôle ici est donc conservateur : il
//      teste ce que le prompt a EXIGÉ littéralement, pas ce qu'on aurait aimé.
//
//   2. STRUCTUREL PLUTÔT QUE LINGUISTIQUE. Le modèle répond dans la langue de
//      la demande : un contrôle qui cherche « Assumptions » échoue dès qu'on
//      écrit le brief en français. On teste donc des balises ASCII que le prompt
//      impose explicitement, du JSON, des titres, des tableaux — des choses qui
//      ne changent pas de langue.
//
//   3. ON NE JETTE JAMAIS LE TRAVAIL. Un livrable qui rate un contrôle est rendu
//      quand même, marqué, avec le contrôle qui a échoué. Le supprimer ferait
//      perdre un texte souvent utilisable et laisserait l'utilisateur devant un
//      écran vide sans savoir pourquoi.
import type { ServerWorkTask } from './worktasks.js'

export interface Check {
  id: string
  /** ce que l'utilisateur lit quand il échoue · une phrase, pas un code */
  why: string
  test: (text: string) => boolean
}

export interface Verdict {
  /** tous les contrôles sont passés */
  ok: boolean
  /** les contrôles passés, par identifiant · sert aux evals et à la confiance */
  passed: string[]
  /** ce qui a échoué, dit en clair */
  failed: Array<{ id: string; why: string }>
  /** une reprise a eu lieu et a corrigé le tir */
  repaired?: boolean
}

/* ---- outils de mesure ---------------------------------------------------- */

const words = (t: string): number => (t.trim().match(/\S+/g) ?? []).length
const headings = (t: string): number => (t.match(/^#{1,6}\s+\S/gm) ?? []).length
/** Les lignes d'un tableau Markdown · au moins deux colonnes et une séparation. */
const tableRows = (t: string): number =>
  (t.match(/^\s*\|.+\|\s*$/gm) ?? []).filter((l) => !/^\s*\|[\s:|-]+\|\s*$/.test(l)).length
const fencedBlocks = (t: string): number => (t.match(/```/g) ?? []).length >> 1
const numbered = (t: string): number => (t.match(/^\s*\d{1,2}[.)]\s+\S/gm) ?? []).length

/** Le bloc JSON d'un design system · rendu null quand il ne se lit pas. */
export function jsonBlock(text: string): any {
  const m = text.match(/```json\s*([\s\S]*?)```/i)
  if (!m) return null
  try { return JSON.parse(m[1].trim()) } catch { return null }
}

/* ---- ce qui vaut pour TOUT livrable -------------------------------------- */

/**
 * Les quatre contrôles universels.
 *
 * Ils décrivent le plancher d'un document livrable, pas sa qualité : on ne sait
 * pas juger si une stratégie est bonne, on sait voir qu'elle tient en trois
 * lignes sans un seul titre, ou qu'elle contient encore « [Votre entreprise] ».
 */
const UNIVERSAL: Check[] = [
  {
    id: 'substance',
    why: 'le document est trop court pour être le livrable demandé',
    // 120 mots · en dessous, aucun des livrables de ce produit n'est plausible,
    // et au-dessus on ne juge plus rien, ce qui est voulu.
    test: (t) => words(t) >= 120,
  },
  {
    id: 'structure',
    why: 'aucun titre ni tableau · un mur de prose ne se relit pas',
    test: (t) => headings(t) >= 2 || tableRows(t) >= 3,
  },
  {
    id: 'no-placeholder',
    why: 'le document contient encore un texte de remplissage à compléter',
    // Ce qu'un modèle laisse quand il n'a pas la matière et ne le dit pas. On ne
    // vise QUE les gabarits évidents : `[DECIDE:` et `[FIGURE NEEDED]` sont des
    // marques volontaires demandées par les prompts, et ne comptent pas.
    test: (t) => !/lorem ipsum|\[your (company|product|name)\]|\[votre (entreprise|produit|nom)\]|\bTODO:|\bXXXX/i.test(t),
  },
  {
    id: 'answered',
    why: 'le document pose des questions au lieu de produire le livrable',
    // Un texte fait pour moitié de questions est un refus déguisé. Le seuil est
    // haut parce que plusieurs livrables en contiennent légitimement — un guide
    // d'entretien n'est QUE des questions, et il est exempté plus bas.
    test: (t) => {
      const lines = t.split('\n').filter((l) => l.trim())
      if (lines.length < 6) return true
      return lines.filter((l) => l.trim().endsWith('?')).length / lines.length < 0.6
    },
  },
]

/* ---- ce que chaque livrable a promis ------------------------------------- */

const has = (needle: RegExp): ((t: string) => boolean) => (t) => needle.test(t)

/**
 * Les contrôles propres à un livrable.
 *
 * Chacun correspond à une exigence LITTÉRALE de son prompt : si le prompt dit
 * « marque chaque chiffre [sourced], [estimated from X] ou [unknown] », alors
 * l'absence totale de ces marques veut dire que la consigne a été ignorée — et
 * c'est précisément le cas où un chiffre inventé passe pour une mesure.
 *
 * Un livrable absent de cette table n'a que les contrôles universels, et c'est
 * un choix : on n'invente pas d'exigence que le prompt n'a pas posée.
 */
// `billing-policy` a eu un contrôle « les relances d'impayé sont écrites », et
// il a été retiré : il mesurait en réalité la longueur et le nombre de titres,
// ce que les contrôles universels font déjà, tout en prétendant vérifier autre
// chose. Je ne sais pas détecter « ce courriel est rédigé » de façon fiable et
// indépendante de la langue — et un contrôle imprécis viole la première règle de
// ce fichier. Mieux vaut l'absence assumée qu'une garantie qui n'en est pas une.
const PER_TASK: Record<string, Check[]> = {
  'design-system': [
    {
      id: 'tokens-json',
      why: 'le bloc de tokens JSON est absent ou illisible · rien à importer dans Figma',
      test: (t) => {
        const j = jsonBlock(t)
        return !!j && typeof j === 'object' && !!j.colors && !!j.typography
      },
    },
  ],
  'market-study': [
    {
      id: 'provenance',
      why: 'aucun chiffre n’est marqué [sourced] / [estimated] / [unknown] · on ne peut pas distinguer une mesure d’une estimation',
      test: has(/\[(sourced|estimated|unknown)\b/i),
    },
  ],
  'terms-draft': [
    {
      id: 'not-legal-advice',
      why: 'le document ne dit pas qu’il s’agit d’un brouillon et non d’un avis juridique',
      test: has(/not legal advice|pas un avis juridique|legal review|revue juridique/i),
    },
    {
      id: 'open-decisions',
      why: 'aucune décision n’est marquée [DECIDE: …] · le modèle a tranché à votre place',
      test: has(/\[DECIDE:/i),
    },
  ],
  'contract-review': [
    {
      id: 'clause-table',
      why: 'la revue n’est pas un tableau clause par clause',
      test: (t) => tableRows(t) >= 4,
    },
  ],
  'pitch-deck': [
    {
      id: 'slides',
      why: 'moins de dix diapositives · le deck demandé en compte douze',
      test: (t) => Math.max(headings(t), numbered(t)) >= 10,
    },
  ],
  'experiments': [
    {
      id: 'backlog-rows',
      why: 'moins de huit expériences listées dans un tableau',
      test: (t) => tableRows(t) >= 8,
    },
  ],
  'interview-guide': [
    {
      id: 'questions',
      why: 'moins de dix questions numérotées',
      test: (t) => numbered(t) >= 10,
    },
  ],
  'release-check': [
    {
      id: 'rollback-commands',
      why: 'le retour arrière n’est pas écrit en commandes · une intention ne se rejoue pas à 3 h du matin',
      test: (t) => fencedBlocks(t) >= 1,
    },
  ],
  'kpi-dashboard': [
    {
      id: 'metric-table',
      why: 'les métriques ne sont pas dans un tableau avec leur définition',
      test: (t) => tableRows(t) >= 4,
    },
  ],
}

/**
 * Les livrables où un contrôle universel ne s'applique PAS, et pourquoi.
 *
 * Un guide d'entretien est presque entièrement fait de questions : lui appliquer
 * « answered » le ferait échouer à chaque fois, ce qui est le mode de
 * défaillance qu'on cherche à éviter — un avertissement systématique qu'on
 * apprend à ignorer.
 */
const EXEMPT: Record<string, string[]> = {
  'interview-guide': ['answered'],
  'help-articles': ['answered'],
}

/** Tous les contrôles qui s'appliquent à ce livrable. */
export function checksFor(taskId: string): Check[] {
  const skip = new Set(EXEMPT[taskId] ?? [])
  return [...UNIVERSAL.filter((c) => !skip.has(c.id)), ...(PER_TASK[taskId] ?? [])]
}

/** Passe le texte au crible · ne lève jamais, un contrôle cassé ne bloque rien. */
export function verify(taskId: string, text: string): Verdict {
  const passed: string[] = []
  const failed: Verdict['failed'] = []
  for (const c of checksFor(taskId)) {
    let good = false
    try { good = c.test(text) } catch { good = true }  // un contrôle qui lève ne condamne personne
    if (good) passed.push(c.id)
    else failed.push({ id: c.id, why: c.why })
  }
  return { ok: failed.length === 0, passed, failed }
}

/**
 * La consigne de reprise.
 *
 * On rend au modèle SON texte et la liste de ce qui manque, et on lui demande de
 * corriger UNIQUEMENT cela. Le laisser repartir de zéro coûterait deux fois et
 * produirait un autre document, souvent moins bon : ce qui a échoué est presque
 * toujours une consigne oubliée, pas un raisonnement à refaire.
 */
export function repairPrompt(task: ServerWorkTask, text: string, failed: Verdict['failed']): string {
  return [
    `Here is the document you produced for "${task.title}".`,
    'It fails these checks:',
    ...failed.map((f) => `- ${f.id}: ${f.why}`),
    '',
    'Return the SAME document with only those problems fixed.',
    'Do not restructure what already works, do not shorten it, and do not add a preamble explaining what you changed.',
    'If a check asks for information you were never given, add the marker the instructions specify ([unknown], [DECIDE: …], [FIGURE NEEDED]) rather than inventing a value.',
    '',
    '--- the document ---',
    text,
  ].join('\n')
}
