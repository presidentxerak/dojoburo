// OÙ PASSENT VOS JETONS · le modèle, et rien que le modèle.
//
// Pas de carbone ici, et c'est une décision : mesurer l'empreinte d'une
// requête demande des facteurs d'énergie par jeton et une intensité réseau que
// nous n'avons pas et que nous ne fabriquerons pas. C'est le métier de
// Nekomai, la page le dit et y renvoie les entreprises. Ce que nous savons
// compter, ce sont les JETONS — et c'est déjà ce que presque personne ne
// regarde.
//
// LE FAIT QUI SURPREND TOUT LE MONDE, et que ce fichier existe pour rendre
// visible : dans une conversation, l'entrée est RENVOYÉE EN ENTIER à chaque
// tour. Le modèle n'a pas de mémoire ; ce qu'il « se rappelle » est votre
// historique, réexpédié. Le coût d'une conversation de N tours ne croît donc
// pas comme N mais comme N² — et personne ne le voit venir, parce que chaque
// tour pris isolément a l'air bon marché.
//
// Tous les chiffres sortis d'ici sont des ESTIMATIONS, et le disent. Le
// découpage réel dépend du tokeniseur du modèle. Les PRIX, eux, ne sont pas
// estimés du tout : ils sont demandés à l'utilisateur, parce qu'un tarif écrit
// en dur est faux le jour où un fournisseur le change, et que ce produit ne
// peut pas se permettre un chiffre périmé dans un outil qui vend la mesure.
import { TOKENS_PER_TOOL } from '../agents/sandbox'

export { TOKENS_PER_TOOL }

/** Ce qu'on demande à quelqu'un qui veut savoir ce qu'il dépense. */
export interface Usage {
  /** la longueur du brief système, en jetons */
  brief: number
  /** le message type de l'utilisateur, en jetons */
  message: number
  /** la longueur type d'une réponse, en jetons */
  answer: number
  /** combien d'outils voyagent avec chaque requête */
  tools: number
  /** combien de tours dans une conversation type */
  turns: number
  /** combien de conversations par jour */
  perDay: number
  /** prix d'entrée, par million de jetons, dans la monnaie de l'utilisateur */
  inPrice: number
  /** prix de SORTIE, par million · presque toujours trois à cinq fois le
   *  prix d'entrée, et c'est la moitié que les gens oublient */
  outPrice: number
}

export const DEFAULT_USAGE: Usage = {
  brief: 800,
  message: 120,
  answer: 500,
  tools: 4,
  turns: 8,
  perDay: 30,
  // Volontairement à zéro · voir le commentaire en tête. Tant que personne
  // n'a saisi ses prix, l'outil compte des jetons et refuse d'annoncer des
  // euros, plutôt que d'afficher le tarif d'un fournisseur qu'il ne connaît
  // pas.
  inPrice: 0,
  outPrice: 0,
}

export interface Breakdown {
  /** ce qui repart à CHAQUE tour, sans avoir changé */
  fixedPerTurn: number
  /** l'historique accumulé, réexpédié · le terme qui explose */
  history: number
  /** ce que l'utilisateur a réellement tapé sur toute la conversation */
  typed: number
  /** ce que le modèle a écrit */
  written: number
  /** total en entrée sur une conversation */
  inTokens: number
  /** total en sortie sur une conversation */
  outTokens: number
  /** par mois, aux volumes donnés */
  inMonth: number
  outMonth: number
  /** en monnaie, ou null tant que les prix ne sont pas saisis */
  costMonth: number | null
}

/** Trente jours · on compte un mois plein, pas un mois ouvré. Quelqu'un qui
 *  veut son chiffre ouvré divisera ; l'inverse trompe dans le sens qui
 *  arrange, et c'est le sens qu'il faut éviter. */
export const DAYS = 30

export function compute(u: Usage): Breakdown {
  const n = Math.max(1, Math.round(u.turns))
  const toolTokens = Math.max(0, u.tools) * TOKENS_PER_TOOL
  const fixed = u.brief + toolTokens

  // Ce qui repart à chaque tour sans avoir changé : le brief et les outils.
  const fixedPerTurn = fixed * n
  // Ce que l'utilisateur a tapé, réexpédié n fois en moyenne — non : tapé
  // une fois par tour, donc n fois au total.
  const typed = u.message * n
  // L'HISTORIQUE. Au tour i (à partir de 0), on renvoie i paires
  // question/réponse déjà échangées. Somme = n(n-1)/2 paires.
  const history = ((n * (n - 1)) / 2) * (u.message + u.answer)
  const written = u.answer * n

  const inTokens = fixedPerTurn + typed + history
  const outTokens = written
  const inMonth = inTokens * u.perDay * DAYS
  const outMonth = outTokens * u.perDay * DAYS
  const priced = u.inPrice > 0 || u.outPrice > 0
  const costMonth = priced
    ? (inMonth / 1e6) * u.inPrice + (outMonth / 1e6) * u.outPrice
    : null

  return { fixedPerTurn, history, typed, written, inTokens, outTokens, inMonth, outMonth, costMonth }
}

/* ------------------------------------------------------------------ */
/* Les leviers                                                         */
/* ------------------------------------------------------------------ */

export type LeverFamily = 'setup' | 'writing'

/** LE FRANÇAIS D'UN LEVIER, dans la même entrée que l'anglais · voir
 *  data/plans pour le raisonnement. Ici l'enjeu est particulier : un levier
 *  porte une CONTRE-INDICATION, et c'est la phrase qu'on traduit le plus
 *  volontiers à la va-vite parce qu'elle est en dernier. Une contre-indication
 *  approximative transforme un conseil de sobriété en conseil de coupe, et
 *  quelqu'un retire ce qui tenait le reste debout. */
export interface LeverFr { title: string; how: string; why: string; not: string }

export interface Lever {
  id: string
  family: LeverFamily
  title: string
  /** ce qu'on fait, concrètement */
  how: string
  /** pourquoi ça marche · la mécanique, pas la promesse */
  why: string
  /** quand NE PAS le faire · un levier sans contre-indication est un slogan */
  not: string
  /** applique le levier à un usage · rend l'usage modifié */
  apply: (u: Usage) => Usage
  fr?: LeverFr
}

/** LES DEUX FAMILLES.
 *
 *  Elles ne se valent pas et l'ordre compte. Les RÉGLAGES se décident une
 *  fois, avant d'avoir écrit un mot, et s'appliquent à chaque requête pour
 *  toujours ; l'ÉCRITURE se retravaille prompt par prompt. Presque tous les
 *  cours commencent par le second, qui est plus amusant à enseigner, alors que
 *  le premier rapporte davantage pour un effort qui ne se répète pas.
 *
 *  Chaque levier porte son gain CALCULÉ sur les chiffres saisis — jamais un
 *  pourcentage de brochure. Et chacun porte sa contre-indication : un levier
 *  sans « quand ne pas le faire » est un slogan, et on finit par couper ce qui
 *  tenait le reste debout. */
export const LEVERS: Lever[] = [
  {
    id: 'tools-off',
    family: 'setup',
    title: 'Detach the tools this step cannot use',
    how: 'Attach tools per step, not per agent. A drafting step needs none of them.',
    why:
      'Every connected tool ships its full definition, name, description, parameter schema, with every single ' +
      'request, whether it is called or not. Nothing about your prompt changes; you simply stop paying to describe ' +
      'a calendar to a model that is writing an email.',
    not:
      'Do not detach a tool the step might need on a retry. A second round trip costs more than the definition ' +
      'you saved, and it costs you the latency too.',
    apply: (u) => ({ ...u, tools: Math.max(0, Math.floor(u.tools / 4)) }),
    fr: {
      title: "Détachez les outils que cette étape ne peut pas utiliser",
      how: "Associez les outils à chaque étape, et non à l'agent entier. Une étape de rédaction n'en requiert aucun.",
      why:
        "Chaque outil connecté transmet sa définition complète (son nom, sa description et le schéma de ses paramètres) avec chaque requête, qu'il soit appelé ou non. Votre prompt reste inchangé ; vous cessez simplement de payer pour décrire un agenda à un modèle qui rédige un courriel.",
      not:
        "Ne détachez pas un outil dont l'étape pourrait avoir besoin lors d'une nouvelle tentative. Un second aller-retour coûte davantage que la définition économisée, et il allonge en outre le temps d'attente.",
    },
  },
  {
    id: 'cap-answer',
    family: 'setup',
    title: 'Cap the answer length',
    how: 'Set a maximum output length on the request, and say the target in the prompt as well.',
    why:
      'Output tokens are the expensive half: typically three to five times the input price per token. A model ' +
      'given no ceiling fills the space it is given, and most of what it adds is restatement.',
    not:
      'Do not cap a step whose whole job is to produce a long artefact. A truncated document that has to be ' +
      'regenerated costs twice, and the second attempt starts from nothing.',
    apply: (u) => ({ ...u, answer: Math.round(u.answer * 0.55) }),
    fr: {
      title: "Plafonnez la longueur de la réponse",
      how: "Fixez une longueur maximale de sortie dans la requête, et indiquez également la cible dans le prompt.",
      why:
        "Les tokens de sortie constituent la part la plus coûteuse : en général trois à cinq fois le prix d'entrée par token. Un modèle sans plafond occupe tout l'espace disponible, et l'essentiel de ce qu'il ajoute relève de la reformulation.",
      not:
        "Ne plafonnez pas une étape dont la fonction est de produire un document long. Un document tronqué qu'il faut régénérer coûte deux fois, et la seconde tentative repart de zéro.",
    },
  },
  {
    id: 'reset',
    family: 'setup',
    title: 'Start a new conversation when the subject changes',
    how: 'Close the thread and open another, carrying forward one line of what was settled.',
    why:
      'This is the big one, and it is invisible. The model has no memory: what it "remembers" is your history, ' +
      're-sent in full on every turn. A conversation of N turns costs roughly N², so the twentieth turn is not ' +
      'twenty times the first, it is far more. Nothing else on this page saves as much for as little effort.',
    not:
      'Do not reset in the middle of a reasoning chain. The model will redo the thinking you already paid for, ' +
      'and it may not reach the same place.',
    apply: (u) => ({ ...u, turns: Math.max(2, Math.round(u.turns / 3)) }),
    fr: {
      title: "Ouvrez une nouvelle conversation lorsque le sujet change",
      how: "Fermez le fil et ouvrez-en un autre, en reportant une ligne résumant ce qui a été décidé.",
      why:
        "C'est le levier le plus important, et il est invisible. Le modèle n'a pas de mémoire : ce dont il « se souvient » est votre historique, renvoyé intégralement à chaque tour. Une conversation de N tours coûte environ N au carré ; autrement dit, le vingtième tour coûte bien plus que vingt fois le premier. Aucun autre levier de cette page ne rapporte autant pour un effort aussi faible.",
      not:
        "Ne repartez pas de zéro au milieu d'une chaîne de raisonnement. Le modèle refera un travail que vous avez déjà payé, sans nécessairement aboutir à la même conclusion.",
    },
  },
  {
    id: 'cache',
    family: 'setup',
    title: 'Cache the prefix that never changes',
    how: 'Mark the system brief and any fixed reference material as cacheable, if your provider supports it.',
    why:
      'The brief is identical on every request and is re-read every time. Where caching exists, a cached prefix ' +
      'is billed at a fraction of the normal input rate: you are no longer paying full price to re-read your own ' +
      'instructions a thousand times a day.',
    not:
      'Caching has a minimum size and a lifetime. Below a few hundred tokens, or on a prefix you edit daily, it ' +
      'buys nothing and adds a moving part.',
    apply: (u) => ({ ...u, brief: Math.round(u.brief * 0.25) }),
    fr: {
      title: "Mettez en cache le préfixe invariable",
      how: "Marquez le system prompt et tout contenu de référence fixe comme pouvant être mis en cache, si votre provider le permet.",
      why:
        "Le brief est identique à chaque requête et relu à chaque fois. Lorsque le cache est disponible, un préfixe mis en cache est facturé à une fraction du tarif d'entrée : vous cessez de payer le plein tarif pour faire relire votre propre system prompt mille fois par jour.",
      not:
        "Le cache impose une taille minimale et une durée de vie. En dessous de quelques centaines de tokens, ou sur un préfixe que vous modifiez chaque jour, il n'apporte rien et ajoute un élément de complexité.",
    },
  },
  {
    id: 'shorter-brief',
    family: 'writing',
    title: 'Write the brief as bans and examples, not adjectives',
    how: 'Replace "be professional, be concise, be helpful" with the three things it must never do, and one worked example.',
    why:
      'Adjectives are invisible to a model and cost the same as instructions that work. A brief written as ' +
      'checkable rules is both shorter and more obeyed, which is why this saves money twice: fewer tokens, and ' +
      'fewer retries because the output was wrong.',
    not:
      'Do not cut a rule you cannot remember being broken: you may be deleting the one that is silently holding ' +
      'the behaviour together. Cut what you cannot trace to a bad draft.',
    apply: (u) => ({ ...u, brief: Math.round(u.brief * 0.6) }),
    fr: {
      title: "Rédigez le brief en interdits et en exemples, non en adjectifs",
      how: "Remplacez « sois professionnel, sois concis, sois utile » par les trois choses que le modèle ne doit jamais faire, et par un exemple commenté.",
      why:
        "Les adjectifs n'ont presque aucun effet sur un modèle et coûtent autant que des instructions efficaces. Un brief rédigé sous forme de règles vérifiables est à la fois plus court et mieux suivi, ce qui produit une double économie : moins de tokens, et moins de reprises dues à une sortie erronée.",
      not:
        "Ne supprimez pas une règle simplement parce que vous ne l'avez jamais vue enfreinte : c'est peut-être elle qui maintient discrètement le comportement. Supprimez plutôt ce que vous ne pouvez relier à aucun mauvais brouillon.",
    },
  },
  {
    id: 'summarise-history',
    family: 'writing',
    title: 'Summarise what is settled instead of replaying it',
    how: 'When a decision is made, write it as one line and drop the discussion that produced it.',
    why:
      'Settled facts compress to almost nothing; live reasoning does not. Treating the two the same is why naive ' +
      'summarisation makes agents stupid, and why never summarising at all makes them expensive.',
    not:
      'Never compress the original request or a constraint stated as "never". The turn where the agent needs it ' +
      'back is exactly the turn it will fail without it.',
    apply: (u) => ({ ...u, message: Math.round(u.message * 0.8), answer: Math.round(u.answer * 0.85) }),
    fr: {
      title: "Résumez ce qui est acquis au lieu de le rejouer",
      how: "Lorsqu'une décision est prise, consignez-la en une ligne et écartez la discussion qui l'a produite.",
      why:
        "Les faits acquis se compressent presque entièrement ; un raisonnement en cours, non. C'est pourquoi un résumé naïf, qui traite les deux de la même manière, dégrade les agents, tandis que l'absence de tout résumé les rend coûteux.",
      not:
        "Ne compressez jamais la demande d'origine ni une contrainte formulée par un « jamais ». Le tour où l'agent en aura besoin sera précisément celui où il échouera sans elle.",
    },
  },
  {
    id: 'ask-once',
    family: 'writing',
    title: 'Ask for the whole thing once, not in five follow-ups',
    how: 'Put the format, the length and the constraints in the first message instead of correcting them afterwards.',
    why:
      'Each correction is a full extra turn, and every extra turn re-sends everything before it. Three rounds of ' +
      '"shorter please" cost more than the original request did.',
    not:
      'Do not front-load a prompt with requirements you have not thought through. A long wrong brief is worse ' +
      'than a short one you refine once.',
    apply: (u) => ({ ...u, turns: Math.max(2, u.turns - 3) }),
    fr: {
      title: "Formulez toute la demande en une fois, non en cinq relances",
      how: "Précisez le format, la longueur et les contraintes dès le premier message au lieu de les corriger ensuite.",
      why:
        "Chaque correction ajoute un tour complet, et chaque tour supplémentaire renvoie tout ce qui précède. Trois demandes « plus court, s'il te plaît » coûtent davantage que la demande d'origine.",
      not:
        "Ne surchargez pas un prompt d'exigences que vous n'avez pas encore mûries. Un long brief erroné est moins utile qu'un brief court que vous affinez une fois.",
    },
  },
]

export const FAMILY_LABEL: Record<LeverFamily, { label: string; lead: string; fr?: { label: string; lead: string } }> = {
  setup: {
    label: 'Your settings, before you write a word',
    lead:
      'Decided once, applied to every request afterwards. This is where the money is, and it is the half most ' +
      'courses skip because it is less fun to teach than prompt wording.',
    fr: {
      label: "Vos réglages, avant d'écrire un mot",
      lead:
        "Décidés une fois, puis appliqués à chaque requête. C'est là que se situent les économies les plus importantes, et c'est pourtant la partie que la plupart des cours omettent, car elle est moins attrayante à enseigner que la formulation d'un prompt.",
    },
  },
  writing: {
    label: 'How the prompt itself is written',
    lead:
      'Reworked prompt by prompt. Smaller savings each, but they compound, and the same habits that make a ' +
      'prompt cheaper usually make it clearer.',
    fr: {
      label: 'La rédaction du prompt lui-même',
      lead:
        "Elle se retravaille prompt par prompt. Chaque gain est plus modeste, mais ils se cumulent, et les habitudes qui rendent un prompt moins coûteux le rendent généralement plus clair.",
    },
  },
}

/** Ce qu'un levier ferait gagner sur CES chiffres · calculé, jamais affirmé. */
export function saving(u: Usage, lever: Lever): { tokens: number; pct: number; cost: number | null } {
  const before = compute(u)
  const after = compute(lever.apply(u))
  const tokens = (before.inMonth + before.outMonth) - (after.inMonth + after.outMonth)
  const total = before.inMonth + before.outMonth
  const pct = total > 0 ? (tokens / total) * 100 : 0
  const cost = before.costMonth !== null && after.costMonth !== null ? before.costMonth - after.costMonth : null
  return { tokens, pct, cost }
}

/** Les leviers, classés par ce qu'ils rapportent VRAIMENT sur ces chiffres.
 *
 *  Un ordre figé aurait menti à la moitié des lecteurs : quelqu'un qui tient
 *  des conversations de trois tours n'a rien à gagner à les raccourcir, et
 *  quelqu'un sans outils branchés n'a rien à en détacher. */
export function ranked(u: Usage): Array<{ lever: Lever; gain: ReturnType<typeof saving> }> {
  return LEVERS
    .map((lever) => ({ lever, gain: saving(u, lever) }))
    .sort((a, b) => b.gain.tokens - a.gain.tokens)
}
