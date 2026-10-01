// LA BIBLIOTHÈQUE DE LA COMMUNAUTÉ · des prompts, des ressources, les réussites.
//
// Demandé : « ajoute pleins de prompts sur pleins de sujets [...] ajoute pleins
// de vraies ressources [...] ajoute [des] témoignages de réussites ».
//
// CE QUI EST VRAI ICI, ET SEULEMENT ÇA :
//   · les prompts sont ORIGINAUX, écrits pour DojoBuro (data/community/prompts),
//     pas recopiés d'ailleurs ;
//   · les ressources sont réelles, gratuites, et leurs adresses ont été
//     vérifiées à la date indiquée (data/community/resources). Elles sont
//     présentées comme une sélection de l'équipe, jamais attribuées à un membre ;
//   · les réussites sont celles que les membres publient eux-mêmes, dans la
//     catégorie Réussites du fil. Aucune n'est écrite à leur place.
import { useMemo, useState } from 'react'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { B } from '../data/bilingual'
import { BauhausIcon } from '../components/BauhausIcon'
import { PROMPTS, PROMPT_CATEGORIES } from '../data/community/prompts'
import { RESOURCES, RESOURCE_CATEGORIES, RESOURCES_CHECKED_AT } from '../data/community/resources'

const LT = {
  promptsH2: B('The prompt library', 'La bibliothèque de prompts'),
  promptsLead: B('Original prompts written for DojoBuro, ready to copy. Replace what is in [BRACKETS] with your own context.',
    'Des prompts originaux, écrits pour DojoBuro, prêts à copier. Remplacez ce qui figure entre [CROCHETS] par votre propre contexte.'),
  resourcesH2: B('Resources selected by the DojoBuro team', "Ressources sélectionnées par l'équipe DojoBuro"),
  resourcesLead: B('Free, reliable resources to go further. Links checked on', 'Des ressources gratuites et fiables pour aller plus loin. Liens vérifiés le'),
  search: B('Search', 'Rechercher'),
  all: B('All', 'Tout'),
  copy: B('Copy', 'Copier'),
  copied: B('Copied', 'Copié'),
  open: B('Open', 'Ouvrir'),
  count: B('prompts', 'prompts'),
  countRes: B('resources', 'ressources'),
  none: B('Nothing matches this search.', 'Rien ne correspond à cette recherche.'),
  level: { debutant: B('Beginner', 'Débutant'), intermediaire: B('Intermediate', 'Intermédiaire'), avance: B('Advanced', 'Avancé') } as Record<string, Bi>,
  lang: { fr: B('In French', 'En français'), en: B('In English', 'En anglais'), 'fr-en': B('French and English', 'Français et anglais') } as Record<string, Bi>,
  winsH2: B('Members\' wins', 'Les réussites des membres'),
  winsLead: B('A first agent that works, an hour saved every week, a project shipped: share what you achieved with AI, in a few lines. Every story here is written by the member who lived it.',
    "Un premier agent qui fonctionne, une heure gagnée chaque semaine, un projet livré : partagez en quelques lignes ce que vous avez réussi avec l'IA. Chaque récit publié ici est écrit par le membre qui l'a vécu."),
}

const norm = (t: string) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

/* ------------------------------------------------------------------ */

export function PromptLibrary() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [cat, setCat] = useState('')
  const [q, setQ] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const list = useMemo(() => {
    const nq = norm(q.trim())
    return PROMPTS.filter((p) => (!cat || p.category === cat)
      && (!nq || norm(`${say(p.title, lang)} ${say(p.use, lang)} ${p.tags.join(' ')}`).includes(nq)))
  }, [cat, q, lang])
  const copy = async (id: string, text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(id); setTimeout(() => setCopied(null), 1600) } catch { /* presse-papiers refusé */ }
  }
  return (
    <section className="cy-lib">
      <div className="cy-card">
        <h2 className="pf-h2">{s(LT.promptsH2)}</h2>
        <p className="cy-sub">{s(LT.promptsLead)}</p>
        <input className="promo-inp cy-lib-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder={s(LT.search)} aria-label={s(LT.search)} />
        <div className="cy-lib-cats" role="group">
          <button className={`ap-chip${cat === '' ? ' on' : ''}`} onClick={() => setCat('')}>{s(LT.all)} · {PROMPTS.length}</button>
          {PROMPT_CATEGORIES.map((c) => (
            <button key={c.id} className={`ap-chip${cat === c.id ? ' on' : ''}`} onClick={() => setCat(c.id)}>
              {s(c.label)} · {PROMPTS.filter((p) => p.category === c.id).length}
            </button>
          ))}
        </div>
      </div>
      {list.length === 0 && <p className="cy-sub">{s(LT.none)}</p>}
      <div className="cy-lib-grid">
        {list.map((p) => (
          <article key={p.id} className="cy-card cy-prompt">
            <header>
              <b>{s(p.title)}</b>
              <span className="cy-lib-level">{s(LT.level[p.level] ?? LT.level.debutant)}</span>
            </header>
            <p className="cy-sub">{s(p.use)}</p>
            <pre>{s(p.prompt)}</pre>
            <button className="cc-btn cc-slate" onClick={() => void copy(p.id, s(p.prompt))}>
              <BauhausIcon name={copied === p.id ? 'check' : 'layers'} size={13} /> {copied === p.id ? s(LT.copied) : s(LT.copy)}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

export function ResourceLibrary() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [cat, setCat] = useState('')
  const list = RESOURCES.filter((r) => !cat || r.category === cat)
  const checked = new Date(`${RESOURCES_CHECKED_AT}T12:00:00Z`).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <section className="cy-lib">
      <div className="cy-card">
        <h2 className="pf-h2">{s(LT.resourcesH2)}</h2>
        <p className="cy-sub">{s(LT.resourcesLead)} {checked}.</p>
        <div className="cy-lib-cats" role="group">
          <button className={`ap-chip${cat === '' ? ' on' : ''}`} onClick={() => setCat('')}>{s(LT.all)} · {RESOURCES.length}</button>
          {RESOURCE_CATEGORIES.map((c) => (
            <button key={c.id} className={`ap-chip${cat === c.id ? ' on' : ''}`} onClick={() => setCat(c.id)}>
              {s(c.label)} · {RESOURCES.filter((r) => r.category === c.id).length}
            </button>
          ))}
        </div>
      </div>
      <div className="cy-lib-grid">
        {list.map((r) => (
          <article key={r.id} className="cy-card cy-res">
            <header>
              <b>{s(r.title)}</b>
              <span className="cy-lib-level">{s(LT.level[r.level] ?? LT.level.debutant)}</span>
            </header>
            <p className="cy-res-meta">{r.publisher} · {s(LT.lang[r.lang] ?? LT.lang.en)}</p>
            <p className="cy-sub">{s(r.why)}</p>
            <a className="cc-btn cc-slate" href={r.url} target="_blank" rel="noopener noreferrer">{s(LT.open)} →</a>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

/** LES RÉUSSITES · l'invitation à publier la sienne, au-dessus du fil filtré
 *  sur la catégorie Réussites. Rien n'y est écrit à la place d'un membre. */
export function WinsIntro() {
  const lang = useLang()
  return (
    <div className="cy-card cy-wins">
      <h2 className="pf-h2">{say(LT.winsH2, lang)}</h2>
      <p className="cy-sub">{say(LT.winsLead, lang)}</p>
    </div>
  )
}
