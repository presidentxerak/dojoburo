// L'ICEBERG · le schéma, et ce qu'il fallait décider pour le dessiner.
//
// POURQUOI LE DESSIN N'EST PAS UNE IMAGE. Une illustration exportée serait
// illisible au téléphone, invisible pour un lecteur d'écran, impossible à
// traduire et fausse le jour où un item change. Le fond est donc un tracé SVG
// au trait de 1 pixel, comme le reste du vocabulaire graphique de l'app, et
// tout le TEXTE est du HTML posé par dessus · il reste sélectionnable, il se
// réagence en une colonne sur un écran étroit, et il vient des données.
//
// POURQUOI LES PAVÉS SONT DES BOUTONS. L'illustration d'origine tient dans une
// affiche parce qu'elle ne dit que le nom du geste. Un nom seul n'apprend
// rien : « détachez les outils » est un ordre, pas une explication, et le
// lecteur qui ne sait pas POURQUOI ne saura pas quand ne pas le faire. Chaque
// pavé ouvre donc ce que ça fait, pourquoi ça marche, quand ne pas le faire,
// et comment ça s'appelle ailleurs.
//
// LES SEPT QUI SONT DÉJÀ CHIFFRÉS. Certains items désignent un levier du
// calculateur. Pour ceux là on affiche le gain CALCULÉ sur les chiffres que le
// lecteur vient de saisir, pas un pourcentage de brochure · c'est la seule
// différence entre cette page et une affiche, et c'est toute la différence.
import { useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import {
  SURFACE, REAL, DEEPER, DEPTH_LABEL, WAY_COUNT, leverOf,
  type IcebergItem, type Depth,
} from '../data/tokenIceberg'
import { saving, type Usage } from '../data/frugality'

/** Le tracé du fond · décoratif, donc masqué aux lecteurs d'écran : tout ce
 *  qu'il raconte est écrit en toutes lettres dans les bandes au dessus. */
function IcebergArt() {
  return (
    <svg
      className="ice-art" viewBox="0 0 1000 1400" preserveAspectRatio="none"
      fill="none" stroke="currentColor" strokeWidth={1}
      vectorEffect="non-scaling-stroke" strokeLinejoin="miter" strokeLinecap="butt"
      aria-hidden focusable="false"
    >
      {/* la partie émergée · petite, et c'est l'argument du schéma */}
      <path vectorEffect="non-scaling-stroke" d="M236 300 L300 198 L362 118 L432 40 L500 18 L562 68 L624 150 L702 228 L768 300 Z" />
      <path vectorEffect="non-scaling-stroke" d="M432 40 L470 300 M500 18 L560 300 M362 118 L392 300 M624 150 L640 300" />
      {/* la ligne de flottaison */}
      <path vectorEffect="non-scaling-stroke" d="M0 300 H1000" />
      {/* la partie immergée */}
      <path vectorEffect="non-scaling-stroke" d="M236 300 L118 546 L74 800 L126 1062 L258 1268 L440 1372 L642 1350 L820 1218 L928 1010 L960 758 L898 520 L768 300" />
      {/* quelques facettes · assez pour que ce soit de la glace, pas une tache */}
      <path vectorEffect="non-scaling-stroke" d="M470 300 L392 720 L560 1090 L642 1350" />
      <path vectorEffect="non-scaling-stroke" d="M640 300 L742 640 L560 1090" />
      <path vectorEffect="non-scaling-stroke" d="M392 300 L118 546 M392 720 L74 800 M742 640 L960 758 M560 1090 L258 1268" />
      {/* la seconde règle · « plus profond » commence ici */}
      <path vectorEffect="non-scaling-stroke" className="ice-rule2" d="M0 800 H1000" strokeDasharray="7 7" />
    </svg>
  )
}

function Chip({ item, open, onToggle }: { item: IcebergItem; open: boolean; onToggle: () => void }) {
  return (
    <button
      className={`ice-chip${open ? ' on' : ''}`}
      aria-expanded={open}
      onClick={onToggle}
    >
      <b>{item.title}</b>
      <span className="ice-chip-s">{item.short}</span>
      <BauhausIcon name={open ? 'cross' : 'play'} size={11} />
    </button>
  )
}

/** Le détail d'un item · ouvert sous sa bande, en pleine largeur, parce qu'un
 *  panneau qui pousse une grille de pavés fait sauter tout ce qu'on lisait. */
function Detail({ item, usage }: { item: IcebergItem; usage: Usage }) {
  const lever = leverOf(item)
  // LE GAIN N'EST PAS AFFIRMÉ, il est calculé sur les chiffres du lecteur. Un
  // item sans levier n'en affiche aucun plutôt que d'en inventer un.
  const gain = lever ? saving(usage, lever) : null

  return (
    <div className="ice-detail">
      <div className="ice-detail-in">
        <h4>{item.title}</h4>
        <p className="ice-what">{item.what}</p>

        <div className="ice-two">
          <div className="ice-col">
            <span className="ice-k">Why it works</span>
            <p>{item.why}</p>
          </div>
          <div className="ice-col">
            <span className="ice-k">When not to</span>
            <p>{item.not}</p>
          </div>
        </div>

        {item.called.length > 0 && (
          <div className="ice-called">
            {/* LES NOMS BOUGENT, LA MÉCANIQUE NON · on le dit, plutôt que de
                laisser croire que cette liste est à jour pour toujours. */}
            <span className="ice-k">What it tends to be called</span>
            <ul>{item.called.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        )}

        {lever && gain && (
          <p className="ice-gain">
            <BauhausIcon name="bars" size={13} />
            <span>
              On the numbers you put in above, this one is worth about{' '}
              <b>{Math.round(gain.pct)}%</b> of your monthly tokens. It is lever
              {' '}<b>{lever.title.toLowerCase()}</b> in the list below, where the calculation is shown.
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

function Band({ depth, items, open, setOpen, usage }: {
  depth: Depth; items: IcebergItem[]
  open: string | null; setOpen: (v: string | null) => void
  usage: Usage
}) {
  const L = DEPTH_LABEL[depth]
  const shown = items.find((i) => i.id === open)
  return (
    <div className={`ice-band d-${depth}`}>
      <div className="ice-band-h">
        <span className="ice-band-k">{L.kicker}</span>
        <h3>{L.label}</h3>
        <p>{L.lead}</p>
      </div>
      <div className="ice-grid">
        {items.map((i) => (
          <Chip key={i.id} item={i} open={open === i.id} onToggle={() => setOpen(open === i.id ? null : i.id)} />
        ))}
      </div>
      {shown && <Detail item={shown} usage={usage} />}
    </div>
  )
}

export function TokenIceberg({ usage }: { usage: Usage }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="lp-sec ice">
      <h2>{WAY_COUNT} ways to spend fewer tokens, and the four everyone tries first</h2>
      <p className="lp-lead">
        This is not about one assistant. Every item here comes from how the billing works, which is the same
        wherever you are: the input is re-sent in full on every turn, the output costs more per token than the
        input, and anything that enters the context stays there. The names below move between products. The
        mechanics do not.
      </p>

      <div className="ice-scene">
        <IcebergArt />
        <div className="ice-bands">
          <Band depth="surface" items={SURFACE} open={open} setOpen={setOpen} usage={usage} />
          <Band depth="real" items={REAL} open={open} setOpen={setOpen} usage={usage} />
          <Band depth="deeper" items={DEEPER} open={open} setOpen={setOpen} usage={usage} />
        </div>
      </div>
    </section>
  )
}
