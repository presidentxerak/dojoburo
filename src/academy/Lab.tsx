// LES ATELIERS · la moitié de la leçon qu'on manipule.
//
// Chaque leçon avait déjà une scène animée à côté du texte, et son sous-titre
// disait tout : « ça tourne tout seul, vous pouvez regarder ou ignorer ». Une
// animation qu'on peut ignorer est une illustration. Ce n'est pas rien, mais
// ce n'est pas un tutoriel interactif : le lecteur n'y décide de rien, donc il
// ne peut pas s'y tromper, donc il n'apprend qu'en croyant sur parole.
//
// Un atelier fait l'inverse. On y change une valeur et le chiffre bouge tout
// de suite, sous les yeux. Ce qui s'apprend n'est pas la phrase « le contexte
// repart à chaque tour » — qu'on lit et qu'on oublie — mais la surprise de
// voir la barre tripler quand on passe de six tours à douze.
//
// TROIS RÈGLES, et la première est la plus importante :
//
//   1 · AUCUN CALCUL ICI. Toutes les mathématiques viennent de
//       ../data/frugality et ../agents/sandbox, les mêmes qui alimentent la
//       page de sobriété et la fiche du bac à sable. Réécrire la formule dans
//       l'atelier donnerait deux vérités qui divergent, et c'est une leçon de
//       comptage : le jour où elles ne s'accordent plus, on enseigne un
//       mensonge. scripts/test-labs.mjs le vérifie sur le texte du fichier.
//
//   2 · Chaque atelier tient sans son texte. Quelqu'un qui saute la leçon et
//       joue dix secondes avec les curseurs doit en tirer quelque chose.
//
//   3 · Rien n'est noté, rien n'est bloqué. On peut mettre des valeurs
//       absurdes ; c'est souvent comme ça qu'on comprend la forme.
import { useMemo, useState } from 'react'
import { compute, TOKENS_PER_TOOL, type Usage, DEFAULT_USAGE } from '../data/frugality'
import { estimateTokens, CHARS_PER_TOKEN } from '../agents/sandbox'
import type { LabId } from '../data/academy'

export type { LabId }

const n0 = (n: number) => Math.round(n).toLocaleString('en-US')
const short = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : String(Math.round(n)))

/* ------------------------------------------------------------------ */
/* 1 · Compter des jetons sur son propre texte                         */
/* ------------------------------------------------------------------ */

const SAMPLE =
  'You are a helpful, professional and friendly assistant. Please be concise and clear in your answers, ' +
  'and always make sure to provide high-quality, well-structured responses that meet the user\'s needs.'

function CountLab() {
  const [text, setText] = useState(SAMPLE)
  const tokens = estimateTokens(text)
  // Le même texte, débarrassé de ses adjectifs · c'est l'exercice de la leçon
  // sur l'écriture, montré plutôt qu'affirmé.
  const trimmed = 'You answer in at most three sentences. No adjectives about yourself.'
  const saved = tokens - estimateTokens(trimmed)

  return (
    <div className="lab">
      <p className="lab-lead">Type or paste anything. The count moves as you type.</p>
      <textarea
        className="lab-ta"
        value={text}
        rows={4}
        aria-label="Text to measure"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="lab-out">
        <span className="lab-n">{n0(tokens)}</span>
        <span className="lab-l">tokens · {n0(text.length)} characters</span>
      </div>
      {saved > 0 && (
        <p className="lab-note">
          The same instruction, written as a rule instead of a wish — <code>{trimmed}</code> — is{' '}
          <b>{n0(estimateTokens(trimmed))} tokens</b>. That is <b>{n0(saved)} fewer</b>, on every single
          request, for ever.
        </p>
      )}
      <p className="lab-caveat">
        An estimate: about {CHARS_PER_TOKEN} characters per token. Real tokenisers differ, and code or accented
        text costs more. The shape is right even when the digit is not.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2 · La courbe qui surprend tout le monde                            */
/* ------------------------------------------------------------------ */

function HistoryLab() {
  const [turns, setTurns] = useState(8)
  const base: Usage = { ...DEFAULT_USAGE, turns }
  const b = useMemo(() => compute(base), [turns])
  // la même conversation si l'historique ne repartait PAS · la comparaison est
  // tout l'enseignement
  const flat = (DEFAULT_USAGE.brief + DEFAULT_USAGE.tools * TOKENS_PER_TOOL + DEFAULT_USAGE.message + DEFAULT_USAGE.answer) * turns
  const total = b.inTokens + b.outTokens
  const ratio = flat > 0 ? total / flat : 1

  // la courbe · une barre par tour, hauteur = coût cumulé à ce tour
  const bars = Array.from({ length: turns }, (_, i) => {
    const c = compute({ ...base, turns: i + 1 })
    return c.inTokens + c.outTokens
  })
  const peak = Math.max(...bars, 1)

  return (
    <div className="lab">
      <p className="lab-lead">
        Drag it. Each bar is what the conversation has cost by that turn.
      </p>
      <label className="lab-slider">
        <span>{turns} turns</span>
        <input
          type="range" min={1} max={30} value={turns}
          aria-label="Turns in the conversation"
          onChange={(e) => setTurns(Number(e.target.value))}
        />
      </label>
      <div className="lab-chart" role="img" aria-label={`Cumulative cost over ${turns} turns`}>
        {bars.map((v, i) => (
          <span key={i} className="lab-bar" style={{ height: `${Math.max(2, (v / peak) * 100)}%` }} />
        ))}
      </div>
      <div className="lab-out">
        <span className="lab-n">{short(total)}</span>
        <span className="lab-l">tokens for the whole conversation</span>
      </div>
      <p className="lab-note">
        If nothing were re-sent, {turns} turns would cost <b>{short(flat)}</b>. It costs{' '}
        <b>{ratio.toFixed(1)}×</b> that, because turn {turns} carries turns 1 to {Math.max(0, turns - 1)} with
        it. The model has no memory; you are paying to give it one, every single turn.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3 · Ce qu'un outil coûte avant d'avoir servi                        */
/* ------------------------------------------------------------------ */

const TOOLKIT = ['Gmail', 'Calendar', 'Notion', 'Slack', 'Stripe', 'GitHub', 'Drive', 'CRM']

function ToolsLab() {
  const [on, setOn] = useState<string[]>(['Gmail', 'Calendar', 'Notion', 'Slack', 'Stripe'])
  const toggle = (t: string) => setOn((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))
  const perRequest = on.length * TOKENS_PER_TOOL
  const perMonth = compute({ ...DEFAULT_USAGE, tools: on.length }).inMonth -
    compute({ ...DEFAULT_USAGE, tools: 0 }).inMonth

  return (
    <div className="lab">
      <p className="lab-lead">
        Switch them off. These are the tools attached to one step — not the ones you own.
      </p>
      <div className="lab-chips">
        {TOOLKIT.map((t) => (
          <button key={t} className={on.includes(t) ? 'on' : ''} onClick={() => toggle(t)} aria-pressed={on.includes(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="lab-out">
        <span className="lab-n">{n0(perRequest)}</span>
        <span className="lab-l">tokens attached to every request, used or not</span>
      </div>
      <p className="lab-note">
        {on.length === 0
          ? 'Nothing attached. A drafting step needs none of them, and this is what that is worth.'
          : <>That is <b>{short(perMonth)} tokens a month</b> at a typical volume, spent describing tools to a model
            that may never call one. Each definition carries a name, a description and a parameter schema.</>}
      </p>
      <p className="lab-caveat">
        Counted at a deliberately cautious {TOKENS_PER_TOOL} tokens per tool. Real definitions run from about two
        hundred to over a thousand.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4 · Réécrire un brief, règle par règle                              */
/* ------------------------------------------------------------------ */

/** Les quatre corrections · chacune porte le texte qu'elle remplace et celui
 *  qu'elle met à la place, pour que l'atelier montre un vrai avant/après et
 *  pas une promesse d'amélioration. */
const FIXES = [
  {
    id: 'adjectives',
    label: 'Replace adjectives with bans',
    off: 'You are a helpful, professional, friendly and efficient assistant who always strives to deliver the highest quality work possible.',
    on: 'Never open with a greeting. Never use "unlock", "leverage" or "seamless".',
    why: 'Adjectives are invisible to a model and cost the same as instructions that work.',
  },
  {
    id: 'length',
    label: 'Say the length as a number',
    off: 'Please try to keep your answers reasonably concise and to the point where possible.',
    on: 'At most 120 words.',
    why: '"Concise" gets you 8% shorter. A number gets you the length you asked for.',
  },
  {
    id: 'example',
    label: 'One example instead of three paragraphs of description',
    off: 'The tone should be direct but warm, avoiding both corporate stiffness and excessive familiarity, while remaining approachable and credible to a business audience.',
    on: 'Good: "Invoices now import from Stripe. One click, no CSV."',
    why: 'One worked example teaches voice better than any description of it.',
  },
  {
    id: 'format',
    label: 'State the output shape once',
    off: 'It would be great if you could structure the response in a way that is easy to read and scan through.',
    on: 'Output: a markdown table, columns What / Why / Cost.',
    why: 'An unstated format is re-negotiated on every turn, and each round trip is a full extra turn.',
  },
]

function RewriteLab() {
  const [fixed, setFixed] = useState<string[]>([])
  const toggle = (id: string) => setFixed((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const lines = FIXES.map((f) => (fixed.includes(f.id) ? f.on : f.off))
  const brief = lines.join('\n')
  const tokens = estimateTokens(brief)
  const worst = estimateTokens(FIXES.map((f) => f.off).join('\n'))
  const saved = worst - tokens

  return (
    <div className="lab">
      <p className="lab-lead">Tick a correction. The brief rewrites itself, and the count follows.</p>
      <div className="lab-fixes">
        {FIXES.map((f) => (
          <label key={f.id} className={`lab-fix${fixed.includes(f.id) ? ' on' : ''}`}>
            <input type="checkbox" checked={fixed.includes(f.id)} onChange={() => toggle(f.id)} />
            <span><b>{f.label}</b><em>{f.why}</em></span>
          </label>
        ))}
      </div>
      <pre className="lab-pre"><code>{brief}</code></pre>
      <div className="lab-out">
        <span className="lab-n">{n0(tokens)}</span>
        <span className="lab-l">
          tokens {saved > 0 ? <>· {n0(saved)} fewer than where you started</> : '· the version most people write'}
        </span>
      </div>
      <p className="lab-note">
        {fixed.length === FIXES.length
          ? 'Shorter, and more obeyed. That is the point: the habits that make a brief cheaper are the same ones that make it clearer, so this saves twice — fewer tokens, and fewer retries because the output was wrong.'
          : 'Keep going. Notice that nothing was dropped — every instruction is still there, just written so a model can follow it.'}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */

const LABS: Record<LabId, { title: string; body: () => JSX.Element }> = {
  count: { title: 'Count it yourself', body: CountLab },
  history: { title: 'Watch the conversation compound', body: HistoryLab },
  tools: { title: 'What a tool costs before it does anything', body: ToolsLab },
  rewrite: { title: 'Rewrite a brief, one rule at a time', body: RewriteLab },
}

export const LAB_IDS = Object.keys(LABS) as LabId[]

export function Lab({ id }: { id: LabId }) {
  const l = LABS[id]
  if (!l) return null
  const Body = l.body
  return (
    <section className="ac-lab">
      <span className="ac-block-kind">Try it</span>
      <h3>{l.title}</h3>
      <Body />
    </section>
  )
}
