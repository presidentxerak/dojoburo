// OÙ PASSENT VOS JETONS · la page.
//
// Elle enseigne une seule chose et la montre : ce qu'une requête contient
// vraiment, et pourquoi une conversation coûte beaucoup plus que la somme de
// ses tours. Le reste — les deux familles de leviers — découle de ça.
//
// Pas de carbone. Mesurer une empreinte demande des facteurs d'énergie par
// jeton et une intensité réseau que nous n'avons pas et que nous ne
// fabriquerons pas ; c'est le métier de Nekomai, et la page y renvoie les
// entreprises plutôt que d'improviser un chiffre. Un outil qui vend la mesure
// ne peut pas se permettre une valeur inventée.
//
// LE CALCULATEUR NE CONNAÎT AUCUN PRIX. Les tarifs sont demandés, jamais
// écrits en dur : un prix de fournisseur codé dans la page est faux le jour
// où il change, et personne ne repasse par la ligne. Tant que rien n'est
// saisi, l'outil compte des jetons et refuse d'annoncer des euros.
import { useMemo, useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { SupportBot } from '../components/SupportBot'
import { useHeadTags } from '../lib/headTags'
import { CHARS_PER_TOKEN } from '../agents/sandbox'
import {
  DEFAULT_USAGE, compute, ranked, FAMILY_LABEL, TOKENS_PER_TOOL, DAYS,
  type Usage, type LeverFamily,
} from '../data/frugality'

const n0 = (n: number) => Math.round(n).toLocaleString('en-US')
const short = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : String(Math.round(n)))

function Field({ label, hint, value, onChange, min = 0, step = 1, suffix }: {
  label: string; hint: string; value: number; onChange: (v: number) => void
  min?: number; step?: number; suffix?: string
}) {
  return (
    <label className="fr-field">
      <span className="fr-lab">{label}</span>
      <span className="fr-in">
        <input
          type="number"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          step={step}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
        />
        {suffix && <i>{suffix}</i>}
      </span>
      <span className="fr-hint">{hint}</span>
    </label>
  )
}

export function FrugalityPage() {
  const [u, setU] = useState<Usage>(DEFAULT_USAGE)
  const set = (k: keyof Usage) => (v: number) => setU((p) => ({ ...p, [k]: v }))

  useHeadTags({
    title: 'Where your tokens actually go · token frugality, taught',
    description:
      'A model has no memory: your conversation history is re-sent in full on every turn, so an N-turn thread ' +
      'costs roughly N². Count what a request really contains, then cut it — first with the settings you choose ' +
      'before writing a word, then with the way the prompt is written.',
    path: '/frugality',
    keywords: ['token cost', 'token optimisation', 'context window', 'prompt caching', 'llm cost', 'prompt engineering'],
  })

  const b = useMemo(() => compute(u), [u])
  const rank = useMemo(() => ranked(u), [u])
  const total = b.inTokens + b.outTokens
  const share = (x: number) => (total > 0 ? Math.round((x / total) * 100) : 0)
  const money = (x: number | null) => (x === null ? null : x.toLocaleString('en-US', { maximumFractionDigits: 0 }))

  const rows: Array<[string, number, string]> = [
    ['Brief + tool definitions, re-sent every turn', b.fixedPerTurn,
      `${n0(u.brief)} brief + ${u.tools} × ${TOKENS_PER_TOOL} tool tokens, × ${u.turns} turns`],
    ['Conversation history, re-sent and re-sent', b.history,
      `${u.turns} turns means ${n0((u.turns * (u.turns - 1)) / 2)} replays of a question-and-answer pair`],
    ['What you actually typed', b.typed, `${n0(u.message)} × ${u.turns} turns`],
    ['What the model wrote', b.written, `${n0(u.answer)} × ${u.turns} turns — and output usually costs more per token`],
  ]

  return (
    <div className="landing dg2 ac fr">
      <SiteHeader />

      <section className="lp-sec ac-hero">
        <span className="lp-pill">Tokens · the part nobody shows you</span>
        <h1>A model has no memory. You are paying for the illusion.</h1>
        <p className="lp-lead">
          What a model "remembers" is your conversation, re-sent in full on every single turn. So a thread of
          twenty turns is not twenty times the price of one — it is far more, because turn twenty carries turns
          one to nineteen with it. Nothing on this page matters as much as that sentence.
        </p>
      </section>

      {/* L'ANATOMIE · avant de compter, savoir ce qu'on compte. */}
      <section className="lp-sec alt fr-anatomy">
        <h2>What is actually in one request</h2>
        <div className="fr-parts">
          <div className="fr-part"><b>The brief</b><span>The standing instructions that make this agent what it is. Identical every time, and re-read every time.</span></div>
          <div className="fr-part"><b>Tool definitions</b><span>Every connected tool ships its name, description and parameter schema — used or not. About {TOKENS_PER_TOOL} tokens each.</span></div>
          <div className="fr-part"><b>The history</b><span>Everything said so far, both sides. This is the one that grows, and the one nobody watches.</span></div>
          <div className="fr-part"><b>Your message</b><span>The thing you actually asked. Almost always the smallest part of the bill.</span></div>
          <div className="fr-part"><b>The answer</b><span>Billed separately, and usually three to five times the input rate per token.</span></div>
        </div>
      </section>

      {/* LE CALCULATEUR */}
      <section className="lp-sec fr-calc">
        <h2>Put your own numbers in</h2>
        <p className="lp-lead sm">
          Rough figures are fine — the shape is what teaches, and the shape barely moves. Lengths are in tokens;
          if you think in characters, divide by about {CHARS_PER_TOKEN}.
        </p>

        <div className="fr-grid">
          <Field label="System brief" hint="the standing instructions, in tokens" value={u.brief} onChange={set('brief')} step={50} suffix="tok" />
          <Field label="Your typical message" hint="what you write per turn" value={u.message} onChange={set('message')} step={10} suffix="tok" />
          <Field label="Typical answer" hint="what comes back per turn" value={u.answer} onChange={set('answer')} step={50} suffix="tok" />
          <Field label="Tools attached" hint={`about ${TOKENS_PER_TOOL} tokens each, every request`} value={u.tools} onChange={set('tools')} />
          <Field label="Turns per conversation" hint="this is the one that compounds" value={u.turns} onChange={set('turns')} min={1} />
          <Field label="Conversations a day" hint={`counted over ${DAYS} days`} value={u.perDay} onChange={set('perDay')} min={1} />
          <Field label="Input price" hint="per million tokens, in your currency" value={u.inPrice} onChange={set('inPrice')} step={0.5} suffix="/M" />
          <Field label="Output price" hint="per million — look it up, it is the expensive half" value={u.outPrice} onChange={set('outPrice')} step={0.5} suffix="/M" />
        </div>

        <div className="fr-out">
          <div className="fr-big">
            <span className="fr-big-n">{short(b.inMonth + b.outMonth)}</span>
            <span className="fr-big-l">tokens a month</span>
          </div>
          <div className="fr-big">
            {b.costMonth === null ? (
              <>
                <span className="fr-big-n fr-muted">—</span>
                <span className="fr-big-l">enter your prices above and this becomes money</span>
              </>
            ) : (
              <>
                <span className="fr-big-n">{money(b.costMonth)}</span>
                <span className="fr-big-l">a month, at the prices you entered</span>
              </>
            )}
          </div>
        </div>

        <table className="fr-table">
          <thead><tr><th>Where it goes</th><th>Tokens per conversation</th><th>Share</th><th>Why</th></tr></thead>
          <tbody>
            {rows.map(([label, v, why]) => (
              <tr key={label}><td>{label}</td><td className="num">{n0(v)}</td><td className="num">{share(v)}%</td><td className="why">{why}</td></tr>
            ))}
            <tr className="fr-total"><td><b>One conversation</b></td><td className="num"><b>{n0(total)}</b></td><td /><td className="why">{n0(b.inTokens)} in, {n0(b.outTokens)} out</td></tr>
          </tbody>
        </table>

        <p className="fr-caveat">
          These are <b>estimates</b>, not measurements. Token counts depend on the model's own tokeniser, and a tool
          definition is taken here at a deliberately cautious {TOKENS_PER_TOOL} tokens — real ones run from about two
          hundred to over a thousand. The prices are yours, not ours: we do not hardcode a supplier's tariff,
          because it would be wrong the day they change it.
        </p>
      </section>

      {/* LES LEVIERS · classés par ce qu'ils rapportent sur CES chiffres. */}
      <section className="lp-sec alt">
        <h2>What to change, in the order that pays</h2>
        <p className="lp-lead sm">
          Ranked against the numbers you just entered — not against a general opinion. Change one thing, watch the
          figure above move, keep it if it holds.
        </p>
        {(['setup', 'writing'] as LeverFamily[]).map((fam) => (
          <div className="fr-fam" key={fam}>
            <h3>{FAMILY_LABEL[fam].label}</h3>
            <p className="fr-fam-lead">{FAMILY_LABEL[fam].lead}</p>
            <div className="fr-levers">
              {rank.filter((r) => r.lever.family === fam).map(({ lever, gain }) => (
                <div className="fr-lever" key={lever.id}>
                  <div className="fr-lever-head">
                    <b>{lever.title}</b>
                    <span className="fr-gain">
                      −{short(gain.tokens)} tok/mo
                      {gain.cost !== null && gain.cost > 0 && <> · −{money(gain.cost)}</>}
                      <i>{gain.pct.toFixed(0)}%</i>
                    </span>
                  </div>
                  <p className="fr-how"><b>How.</b> {lever.how}</p>
                  <p className="fr-why">{lever.why}</p>
                  <p className="fr-not"><b>When not to.</b> {lever.not}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* NEKOMAI · l'encart entreprise.
          Il ne décrit que ce que nous savons de source sûre, et il est marqué
          comme ce qu'il est. Écrire des promesses détaillées sur un produit
          qu'on n'a pas vérifié serait exactement le travers que toute cette
          page combat. */}
      <section className="lp-sec fr-nekomai">
        <span className="lp-pill">For companies</span>
        <h2>Counting it across a whole company is a different job</h2>
        <p className="lp-lead">
          Everything above is what one person can do with their own prompts. Measuring what an organisation
          spends — across teams, tools and suppliers — and bringing down its token <i>and</i> carbon footprint is
          a separate discipline, with its own instrumentation. That is what <b>Nekomai</b> does.
        </p>
        <p className="lp-lead sm">
          We deliberately do not measure carbon here: doing it properly needs energy-per-token factors and grid
          intensity data we do not have, and we would rather point you at people who do than print a number we
          invented.
        </p>
        <a className="lp-cta big" href="https://nekomai.com" target="_blank" rel="noopener">
          Nekomai · token and carbon optimisation for enterprises →
        </a>
      </section>

      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          <a href="/">Home</a><a href="/academy">Academy</a><a href="/library">Library</a>
          <a href="/frugality">Frugality</a><a href="/guide">App setup guide</a>
          <a href="/terms">Terms</a><a href="/privacy">Privacy</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}
