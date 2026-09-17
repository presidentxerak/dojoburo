// LE TUTORIEL ANIMÉ · une scène par famille d'étape.
//
// Chaque étape d'un parcours d'agent fait UN des six gestes suivants, et la
// scène montre le geste plutôt que de le décrire :
//
//   define     on transforme un adjectif en test qu'on peut appliquer
//   constrain  on pose une interdiction, et on regarde ce qu'elle bloque
//   expose     on force une section qui rend le trou visible
//   bound      on trace ce qu'on a le droit de toucher, et ce qu'on n'a pas
//   measure    on compte par catégorie au lieu de lire une moyenne
//   test       on donne au piège avant de donner au réel
//
// POURQUOI SIX ET PAS QUARANTE-HUIT. Douze agents fois quatre étapes, ce
// serait quarante-huit illustrations à dessiner, à tenir à jour et que
// personne ne relirait jamais. Et ce serait faux : l'étape deux d'un agent de
// tri et l'étape deux d'un agent d'extraction font exactement la même chose,
// poser une contrainte. Ce qui change est le contenu, et le contenu est déjà
// écrit sous la scène, dans la vraie langue du cas d'usage.
//
// TOUT EST EN CSS ET UN COMPTEUR. Pas de bibliothèque d'animation, pas de
// canevas : ce sont des boîtes qui s'allument dans un ordre, et c'est
// suffisant pour montrer un geste. Une animation qui coûte deux cents
// kilooctets pour dire « celui-ci est barré » n'est pas un tutoriel, c'est une
// démonstration technique.
import { useEffect, useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import type { StageId } from '../data/agentLessons'

/** Un compteur qui avance toutes les `ms` et boucle sur `n`. Le moteur de
 *  toutes les scènes : chacune n'est que « lequel est allumé maintenant ». */
function useTick(n: number, ms = 1400) {
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setT((x) => (x + 1) % n), ms)
    return () => window.clearInterval(id)
  }, [n, ms])
  return t
}

function Wrap({ cap, children }: { cap: string; children: React.ReactNode }) {
  return (
    <div className="sst">
      <div className="sst-box">{children}</div>
      <p className="sst-cap">{cap}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** DEFINE · un adjectif devient un test. On voit le mot vague s'effacer et la
 *  question vérifiable prendre sa place. */
function Define() {
  const t = useTick(2, 2400)
  return (
    <Wrap cap="An adjective becomes a question someone else can answer">
      <div className="sst-swap">
        <div className={`sst-card ${t === 0 ? 'on bad' : 'off'}`}>
          <span className="sst-tagline">what everyone writes</span>
          <b>“reliable sources”</b>
          <em>Nobody can check this. Not even the model.</em>
        </div>
        <div className={`sst-card ${t === 1 ? 'on good' : 'off'}`}>
          <span className="sst-tagline">what works</span>
          <b>“has a date, and I could send it to a customer”</b>
          <em>Two facts. Anyone can apply them.</em>
        </div>
      </div>
    </Wrap>
  )
}

/** CONSTRAIN · une interdiction, et ce qu'elle arrête. Trois candidats
 *  arrivent, la règle en barre deux. */
function Constrain() {
  const ITEMS = [
    { s: 'We are thrilled to announce', ok: false },
    { s: 'You can now connect Stripe', ok: true },
    { s: 'A seamless, robust experience', ok: false },
  ]
  const t = useTick(ITEMS.length + 1, 1100)
  return (
    <Wrap cap="The rule stops things. That is how you know it is a rule">
      <div className="sst-gate">
        <span className="sst-rule"><BauhausIcon name="cross" size={13} /> never: thrilled, seamless, robust</span>
        <ul className="sst-items">
          {ITEMS.map((x, i) => (
            <li key={x.s} className={i < t ? (x.ok ? 'pass' : 'stop') : ''}>
              <BauhausIcon name={i < t ? (x.ok ? 'check' : 'cross') : 'box'} size={12} />
              <span>{x.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  )
}

/** EXPOSE · la section obligatoire. Une réponse qui a l'air complète, puis le
 *  trou qu'elle cachait. */
function Expose() {
  const t = useTick(2, 2600)
  return (
    <Wrap cap="The same answer, with the section that must not be empty">
      <div className="sst-doc">
        <span className="sst-line w80" /><span className="sst-line w95" /><span className="sst-line w60" />
        <div className={`sst-hole ${t === 1 ? 'on' : ''}`}>
          <b>Not covered</b>
          <span>Nothing in the material answered the second half of the question.</span>
        </div>
        <em className={t === 1 ? 'sst-verdict bad' : 'sst-verdict'}>
          {t === 1 ? 'Now you know what it did not read' : 'Looks complete'}
        </em>
      </div>
    </Wrap>
  )
}

/** BOUND · le rayon d'action. Trois anneaux : ce qu'on lit, ce qu'on change,
 *  ce qu'on ne touche jamais. */
function Bound() {
  const RINGS = [
    { k: 'May read', v: 'contacts, deals', tone: 'read' },
    { k: 'May change', v: 'deal notes', tone: 'write' },
    { k: 'Never touch', v: 'billing, deletion', tone: 'never' },
  ]
  const t = useTick(RINGS.length, 1500)
  return (
    <Wrap cap="What it may touch, decided before anything runs">
      <div className="sst-rings">
        {RINGS.map((r, i) => (
          <div key={r.k} className={`sst-ring ${r.tone} ${i === t ? 'on' : ''}`}>
            <BauhausIcon name={r.tone === 'never' ? 'cross' : r.tone === 'write' ? 'pen' : 'ring'} size={14} />
            <b>{r.k}</b><span>{r.v}</span>
          </div>
        ))}
      </div>
    </Wrap>
  )
}

/** MEASURE · la moyenne contre le détail. La barre globale rassure, les barres
 *  par catégorie montrent celle qui brûle. */
function Measure() {
  const BARS = [{ k: 'Bug', v: 95 }, { k: 'Feature', v: 88 }, { k: 'Urgent', v: 40 }]
  const t = useTick(2, 2600)
  return (
    <Wrap cap="An average is designed to hide exactly this">
      <div className="sst-bars">
        <div className={`sst-avg ${t === 0 ? 'on' : 'off'}`}>
          <b>91%</b><span>overall accuracy</span>
        </div>
        <div className={`sst-split ${t === 1 ? 'on' : 'off'}`}>
          {BARS.map((b) => (
            <div className="sst-bar" key={b.k}>
              <span className="sst-bar-k">{b.k}</span>
              <span className="sst-bar-r"><i style={{ width: `${b.v}%` }} className={b.v < 60 ? 'bad' : ''} /></span>
              <span className="sst-bar-v">{b.v}%</span>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  )
}

/** TEST · le piège d'abord. Deux entrées, et ce que l'agent répond à chacune. */
function Test() {
  const t = useTick(2, 2600)
  return (
    <Wrap cap="The document that cannot answer is the only real test">
      <div className="sst-trap">
        <div className={`sst-in ${t === 0 ? 'on' : 'off'}`}>
          <b>A document that answers</b>
          <span className="sst-out good"><BauhausIcon name="check" size={12} /> answer, with quotes</span>
          <em>Tells you nothing. It was going to work.</em>
        </div>
        <div className={`sst-in ${t === 1 ? 'on' : 'off'}`}>
          <b>A document that cannot</b>
          <span className="sst-out good"><BauhausIcon name="check" size={12} /> “not found in the material”</span>
          <em>This is the one that proves it.</em>
        </div>
      </div>
    </Wrap>
  )
}

const STAGES: Record<StageId, () => JSX.Element> = {
  define: Define,
  constrain: Constrain,
  expose: Expose,
  bound: Bound,
  measure: Measure,
  test: Test,
}

export function StepStage({ id }: { id: StageId }) {
  const S = STAGES[id] ?? Define
  return <S />
}
