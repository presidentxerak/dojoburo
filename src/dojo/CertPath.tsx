// LE PARCOURS DE CERTIFICATION, EXPLIQUÉ.
//
// Le produit distribuait des badges, des ceintures et des diplômes sans avoir
// jamais dit comment ils s'obtiennent. On voyait une grille de cases grisées
// et un ruban de couleur : personne ne sait ce que ça demande, donc personne
// n'essaie, et un système de progression que personne ne comprend est un
// système de progression qui n'existe pas.
//
// CE QUE CETTE SCÈNE MONTRE, dans l'ordre, parce que l'ordre EST la règle :
//
//   1 · une ÉTAPE se coche quand on a fabriqué la chose · pas quand on l'a lue
//   2 · quatre étapes font un AGENT, et un agent vaut un BADGE
//   3 · des agents entiers font une CEINTURE · jamais des étapes éparses
//   4 · les trois cours entiers font le DIPLÔME, certifié DojoBuro
//
// ELLE EST INTERACTIVE, et pas seulement animée. On avance à son rythme, et le
// bouton du dernier cran dit ce qu'il fait. Une animation qui tourne toute
// seule se regarde une fois ; une qu'on pilote se comprend, parce qu'on choisit
// quand passer à la suite et qu'on relit le cran d'avant si besoin.
//
// CE QU'ELLE NE FAIT PAS : promettre. Le dernier panneau dit en toutes lettres
// que « certifié DojoBuro » veut dire certifié par nous et par personne
// d'autre. Un centre de formation qui laisse planer le doute là-dessus se paie
// sur la confiance de ses élèves.
import { useEffect, useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import { GRADES } from './grades'
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { COURSES } from '../data/positioning'

/** Les quatre crans · le texte et la scène vivent ensemble, parce que séparer
 *  les deux est la façon la plus sûre de les faire diverger. */
const BEATS = [
  {
    k: 'A step',
    title: 'You tick a step when you have MADE the thing',
    says: 'Every step of every path produces something that did not exist before: a rule, an instruction, a test set. Reading about it does not count, and nothing here checks up on you. The honesty is the point: a progress bar you can cheat is a progress bar that tells you nothing.',
  },
  {
    k: 'A badge',
    title: 'Four steps finish an agent, and an agent is a badge',
    says: 'A badge is never given for a step. It is given for a path taken end to end, which is far rarer and far more useful: it means you have one shape of problem you can actually handle, from a blank page to a file that runs.',
  },
  {
    k: 'A belt',
    title: 'Finished agents move your belt',
    says: `Belts count agents, never steps. Starting four paths and finishing none moves nothing at all. That is the opposite of what makes people click, and exactly why the belt is worth something: ${GRADES[1].agents} agent for ${GRADES[1].title.toLowerCase()}, ${GRADES[GRADES.length - 1].agents} for the black.`,
  },
  {
    k: 'The diploma',
    title: 'All three courses, entirely, and the master signs',
    says: `Build an agent, prompt engineering, token frugality. The last diploma asks for all ${COURSES.length} in full. It reads "certified DojoBuro", which means certified by us and by nobody else: it is not an industry qualification, no employer has heard of it, and we would rather write that here than let you find out later.`,
  },
]

/* ------------------------------------------------------------------ */

/** Cran 1 · une case qu'on coche vraiment. C'est le seul endroit de la scène
 *  où le lecteur agit, et c'est voulu : le geste qu'on explique est
 *  précisément celui-là. */
function BeatStep() {
  const [on, setOn] = useState(false)
  return (
    <div className="cp-stage">
      <div className={`cp-step${on ? ' on' : ''}`}>
        <button className="cp-step-tick" aria-pressed={on} onClick={() => setOn((v) => !v)}>
          <BauhausIcon name={on ? 'check' : 'box'} size={17} />
        </button>
        <div>
          <b>Say what a source is</b>
          <span>Makes: a rule for what counts as evidence in your field</span>
        </div>
      </div>
      <p className="cp-hint">{on ? 'That is one step. Three more and this agent is built.' : 'Try it. Nothing is watching, and that is the whole idea.'}</p>
    </div>
  )
}

/** Cran 2 · quatre cases se remplissent, puis le badge tombe. */
function BeatBadge() {
  const [n, setN] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setN((x) => (x + 1) % 6), 800)
    return () => window.clearInterval(id)
  }, [])
  const done = Math.min(n, 4)
  return (
    <div className="cp-stage">
      <div className="cp-four">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`cp-cell${i < done ? ' on' : ''}`}>
            {i < done ? <BauhausIcon name="check" size={15} /> : i + 1}
          </span>
        ))}
      </div>
      <div className={`cp-badge${done === 4 ? ' on' : ''}`}>
        <BauhausIcon name="diamond" size={22} />
        <b>The researcher</b>
        <span>built, end to end</span>
      </div>
      <p className="cp-hint">{done === 4 ? 'Four out of four. The badge is yours.' : `${done} of 4. No badge yet, and that is not a bug.`}</p>
    </div>
  )
}

/** Cran 3 · l'échelle des ceintures, et le curseur qu'on déplace. Déplacer
 *  soi même le nombre d'agents est ce qui fait comprendre que ce sont des
 *  agents entiers qui comptent : on voit le palier ne PAS bouger entre deux. */
function BeatBelt() {
  const [built, setBuilt] = useState(1)
  const now = [...GRADES].reverse().find((g) => built >= g.agents) ?? GRADES[0]
  const next = GRADES.find((g) => g.agents > built) ?? null
  return (
    <div className="cp-stage">
      <div className="cp-belts">
        {GRADES.map((g) => (
          <span key={g.id} className={`cp-belt${g.id === now.id ? ' on' : built >= g.agents ? ' past' : ''}`}>
            <i style={{ ['--bt' as string]: g.tint }} />
            {g.title.replace(' belt', '')}
          </span>
        ))}
      </div>
      <label className="cp-slider">
        <span>Agents finished: <b>{built}</b></span>
        <input
          type="range" min={0} max={USE_CASE_COUNT} value={built}
          onChange={(e) => setBuilt(Number(e.target.value))}
        />
      </label>
      <p className="cp-hint">
        {next
          ? `${now.title}. ${next.agents - built} more and it is the ${next.title.toLowerCase()}.`
          : `${now.title}. There is nothing above it.`}
      </p>
    </div>
  )
}

/** Cran 4 · les trois cours, et le diplôme qui n'arrive qu'au bout des trois. */
function BeatDiploma() {
  const [n, setN] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setN((x) => (x + 1) % (COURSES.length + 2)), 900)
    return () => window.clearInterval(id)
  }, [])
  const done = Math.min(n, COURSES.length)
  return (
    <div className="cp-stage">
      <div className="cp-courses">
        {COURSES.map((c, i) => (
          <span key={c.id} className={`cp-course${i < done ? ' on' : ''}`}>
            <BauhausIcon name={i < done ? 'check' : c.glyph} size={16} />
            {c.nav}
          </span>
        ))}
      </div>
      <div className={`cp-dip${done === COURSES.length ? ' on' : ''}`}>
        <span className="cp-dip-seal"><BauhausIcon name="star" size={24} /></span>
        <b>The whole dojo</b>
        <em>certified DojoBuro</em>
      </div>
      <p className="cp-hint">
        {done === COURSES.length
          ? 'All three, entirely. That is the only one the master does not hand out twice.'
          : `${done} of ${COURSES.length} courses. The diploma waits for all of them.`}
      </p>
    </div>
  )
}

const SCENES = [BeatStep, BeatBadge, BeatBelt, BeatDiploma]

/* ------------------------------------------------------------------ */

export function CertPath() {
  const [i, setI] = useState(0)
  const Scene = SCENES[i]
  const last = i === BEATS.length - 1
  return (
    <section className="lp-sec cp" id="certification">
      <span className="lp-pill">How the certification works</span>
      <h2>Steps make badges. Badges make belts. Three courses make the diploma.</h2>
      <p className="lp-lead">
        Nothing here is given for showing up, and the rules are the same for everyone. Walk through it once and
        you will know exactly what each thing costs.
      </p>

      <div className="cp-box">
        {/* LES CRANS · cliquables dans les deux sens. Une explication qu'on ne
            peut parcourir que vers l'avant oblige à tout relire pour revoir
            une ligne. */}
        <nav className="cp-nav" aria-label="The certification path">
          {BEATS.map((b, n) => (
            <button key={b.k} className={`cp-nav-b${n === i ? ' on' : n < i ? ' past' : ''}`} onClick={() => setI(n)}>
              <span className="cp-nav-n">{n + 1}</span>
              {b.k}
            </button>
          ))}
        </nav>

        <div className="cp-body">
          <div className="cp-text">
            <h3>{BEATS[i].title}</h3>
            <p>{BEATS[i].says}</p>
            <div className="cp-acts">
              <button className="cp-prev" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
                Back
              </button>
              <button className="cp-next" onClick={() => setI((v) => (last ? 0 : v + 1))}>
                {last ? 'Start again' : `Next: ${BEATS[i + 1].k.toLowerCase()} →`}
              </button>
            </div>
          </div>
          <Scene />
        </div>
      </div>
    </section>
  )
}
