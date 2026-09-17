// LE BAC À SABLE · le dojo ne travaille plus, il montre son travail.
//
// Le produit n'exécute plus rien pour personne : il enseigne. Restait à décider
// ce que fait le bouton « Run » d'un coéquipier, puisqu'il existe toujours et
// qu'il est au centre de l'écran.
//
// Trois réponses possibles. Le désactiver : une salle pleine de boutons gris
// n'apprend rien et se lit comme un produit cassé. Le laisser appeler le
// modèle : c'est exactement ce qu'on a retiré, et ça fait payer un cours.
// La troisième est la bonne, et c'est celle-ci : il RÉPOND, mais ce qu'il rend
// n'est pas le travail — c'est la fiche de ce qui serait parti.
//
// Le prompt système assemblé, le brief, la liste des outils qui auraient
// voyagé, le nombre de jetons que tout cela pèse, ce que ça coûterait, et les
// trois leviers qui le réduiraient. C'est précisément la chose qu'un débutant
// ne voit jamais — l'intérieur de la requête — et c'est gratuit à montrer.
//
// Rien ici n'invente un résultat. On ne fabrique pas une fausse campagne
// marketing pour faire joli : ce serait mentir sur ce que l'outil sait faire,
// dans un produit dont l'argument est l'honnêteté des chiffres.
//
// L'interrupteur existe pour que rien ne soit perdu. `VITE_DOJO_LIVE=1` rend
// l'exécution réelle à ce déploiement, en une ligne, sans rien remettre dans
// le code. C'est le choix qui a été fait : couper, pas supprimer.
import type { RunResult, Deliverable } from './workApi'

/** L'exécution réelle est-elle rendue à ce déploiement ? Non, par défaut. */
export function isLive(): boolean {
  try {
    return String((import.meta as { env?: Record<string, string> }).env?.VITE_DOJO_LIVE || '') === '1'
  } catch {
    return false
  }
}

export const isSandbox = () => !isLive()

/* ------------------------------------------------------------------ */
/* Compter les jetons sans appeler personne                            */
/* ------------------------------------------------------------------ */

/** Une ESTIMATION, et elle est annoncée comme telle.
 *
 *  Le découpage réel dépend du tokeniseur du modèle, qu'on n'a pas ici : la
 *  règle publique courante est d'environ quatre caractères par jeton en
 *  anglais, sensiblement moins en français et beaucoup moins sur du code ou
 *  des accents. On prend 3,6 comme compromis, et on ÉCRIT partout que c'est un
 *  ordre de grandeur.
 *
 *  Un chiffre approximatif et annoncé vaut mieux qu'un chiffre absent : sans
 *  lui, personne ne voit jamais que son contexte pèse dix fois sa question. */
export const CHARS_PER_TOKEN = 3.6

export function estimateTokens(text: string): number {
  return Math.max(1, Math.round(text.length / CHARS_PER_TOKEN))
}

/** Ce qu'une application branchée coûte AVANT d'avoir servi à quoi que ce soit.
 *
 *  Chaque outil expédie sa définition — nom, description, schéma de ses
 *  paramètres — à chaque requête où il est attaché, qu'il soit utilisé ou non.
 *  C'est l'économie la plus facile du métier et la moins connue : éteindre
 *  cinq applications qu'on n'utilise pas sur ce run coûte zéro effort.
 *
 *  L'ordre de grandeur retenu est volontairement prudent ; les définitions
 *  réelles vont de deux cents jetons pour un outil à un argument à plus de
 *  mille pour une API riche. */
export const TOKENS_PER_TOOL = 420

/* ------------------------------------------------------------------ */
/* La fiche que rend le bac à sable                                    */
/* ------------------------------------------------------------------ */

export interface SandboxInput {
  /** l'IDENTIFIANT de l'étape demandée, pas sa prose · c'est ce que
   *  `runWork` reçoit, et le confondre avec le texte de la tâche donnait une
   *  fiche qui citait « market-study » comme si c'était une phrase */
  task: string
  agentName: string
  connectors: string[]
  brief?: string
  context?: string
  effort?: string
}

/** Les trois leviers, dans l'ordre où ils rapportent. Chacun porte ce qu'il
 *  ferait gagner SUR CE RUN, pas un pourcentage de brochure. */
function levers(i: SandboxInput, toolTokens: number, contextTokens: number, briefTokens: number): string[] {
  const out: string[] = []
  if (i.connectors.length > 0) {
    out.push(
      `Turn off the ${i.connectors.length} connected app${i.connectors.length > 1 ? 's' : ''} you are not using on this step — ` +
      `their definitions travel with every request whether they are called or not. **≈ ${toolTokens.toLocaleString('en-US')} tokens**, every single run.`,
    )
  }
  if (contextTokens > 400) {
    out.push(
      `Trim the carried context. It is **≈ ${contextTokens.toLocaleString('en-US')} tokens** here and it is re-sent in full on every turn. ` +
      'Summarise what is settled instead of replaying it.',
    )
  }
  if (briefTokens > 600) {
    out.push(
      `Shorten the brief. At **≈ ${briefTokens.toLocaleString('en-US')} tokens** it is long enough that the model starts losing the middle of it — ` +
      'a shorter brief is usually a better one, not just a cheaper one.',
    )
  }
  out.push('Drop to a smaller model for the drafting steps and keep the strong one for the step you ship.')
  out.push('Cache the parts that never change between runs, so you are not paying to re-read your own brief.')
  return out
}

/** La fiche, en markdown · le même format que les vrais livrables, donc elle
 *  s'ouvre dans la même fenêtre et s'exporte pareil. */
export function sandboxDeliverable(i: SandboxInput): Deliverable {
  const brief = i.brief || ''
  const context = i.context || ''
  const briefTokens = brief ? estimateTokens(brief) : 0
  const contextTokens = context ? estimateTokens(context) : 0
  const taskTokens = estimateTokens(i.task)
  const toolTokens = i.connectors.length * TOKENS_PER_TOOL
  const total = briefTokens + contextTokens + taskTokens + toolTokens

  const share = (n: number) => (total ? Math.round((n / total) * 100) : 0)
  const row = (label: string, n: number, note: string) =>
    `| ${label} | ${n.toLocaleString('en-US')} | ${share(n)}% | ${note} |`

  const md = [
    `# What this run would have sent`,
    '',
    `This is the practice dojo, so nothing was sent and nothing was charged. ` +
    `Below is the request **${i.agentName}** would have made, taken apart — which is the part you never get to see in a real product.`,
    '',
    '## The input, by weight',
    '',
    '| Part | Tokens | Share | What it is |',
    '| --- | ---: | ---: | --- |',
    row('Brief', briefTokens, 'the system prompt that makes this teammate a specialist'),
    row('Carried context', contextTokens, 'everything replayed from earlier turns'),
    row('Your task', taskTokens, 'the one thing you actually asked for'),
    row('Tool definitions', toolTokens, `${i.connectors.length} connected app${i.connectors.length === 1 ? '' : 's'}, shipped whether used or not`),
    `| **Total in** | **${total.toLocaleString('en-US')}** | | before the model writes a single word |`,
    '',
    `> These are **estimates**, not measurements: roughly ${CHARS_PER_TOKEN} characters per token, and ` +
    `${TOKENS_PER_TOOL} tokens per tool definition. The real figure depends on the model's own tokeniser. ` +
    'The shape is what matters here — and the shape is almost always the same surprise.',
    '',
    i.task ? `## The step\n\n\`${i.task}\` — one of the jobs this teammate knows. The instruction behind it travels with the brief above.` : '',
    '',
    '## What to change first',
    '',
    ...levers(i, toolTokens, contextTokens, briefTokens).map((l, n) => `${n + 1}. ${l}`),
    '',
    '---',
    '',
    'Want to run this for real? Take the brief with you and wire it on your own stack — ' +
    'the [app setup guide](/guide) is the step-by-step, one app at a time. ' +
    'This site teaches; it does not hold your keys.',
  ].filter((l) => l !== '').join('\n')

  return {
    // L'IDENTIFIANT RÉEL DE L'ÉTAPE, pas la chaîne « sandbox ».
    //
    // Il était figé, et cela cassait quelque chose d'invisible depuis ici : le
    // tableau de bord compte les livrables PAR ÉTAPE pour savoir si un
    // coéquipier a déjà produit, et remplace sa jauge vide par « première
    // chose à lui demander » tant qu'il n'a rien fait. Avec un identifiant
    // constant, aucune carte n'enregistrait jamais rien — tout le dojo restait
    // à zéro, pour toujours. Trouvé par la garde du navigateur, pas par le
    // typage : les deux valeurs sont des chaînes.
    taskId: i.task,
    title: `Cost breakdown · ${i.agentName}`,
    format: 'markdown',
    markdown: md,
    model: 'sandbox · nothing was called',
  }
}

export function sandboxRun(i: SandboxInput): RunResult {
  return {
    ok: true,
    engine: 'free',
    usage: null,
    appsSent: 0,
    deliverable: sandboxDeliverable(i),
    tools: i.connectors,
  }
}

/** La réponse d'une action qui ÉCRIT quelque part · celle-là ne peut pas être
 *  pédagogique, elle doit être refusée nettement. Un bac à sable qui envoie un
 *  vrai courriel n'est pas un bac à sable. */
export const SANDBOX_REFUSAL = {
  ok: false as const,
  error: 'sandbox',
  detail:
    'The dojo is a practice room: it never writes to a real account. ' +
    'Read how this action is wired in the app setup guide, then run it on your own stack.',
}
