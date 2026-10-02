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
import { useEffect, useMemo, useState } from 'react'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { B } from '../data/bilingual'
import { BauhausIcon } from '../components/BauhausIcon'
import { PROMPTS, PROMPT_CATEGORIES } from '../data/community/prompts'
import { RESOURCES, RESOURCE_CATEGORIES, RESOURCES_CHECKED_AT } from '../data/community/resources'
import { fetchTestimonials, fetchPendingTestimonials, postTestimonial, reviewTestimonial, type Testimonial, type PendingTestimonial } from '../lib/community'
import { PACKS, PACK_BY_ID } from '../data/packs'
import { RANKS } from './ranks'
import { ChibiSprite } from '../pixel/ChibiSprite'
import { sanitizeChibi } from '../pixel/chibi'
import { hashString } from '../pixel/grid'

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
  wallH3: B('Testimonials', 'Les témoignages'),
  wallEmpty: B('No testimonial published yet. Finish a training and be the first to tell your story.', "Aucun témoignage publié pour l'instant. Terminez une formation et soyez le premier ou la première à raconter la vôtre."),
  formH3: B('Leave your testimonial', 'Déposer votre témoignage'),
  formLead: B('In your own words: where you started, what you did, what changed. 40 to 800 characters.', 'Avec vos mots : votre point de départ, ce que vous avez fait, ce qui a changé. De 40 à 800 caractères.'),
  formPack: B('About the training (optional)', 'À propos de la formation (facultatif)'),
  formNone: B('None in particular', 'Aucune en particulier'),
  formConsent: B('I agree that this testimonial is published on DojoBuro with my member name and my grade. I can ask for its removal at any time.', "J'accepte que ce témoignage soit publié sur DojoBuro avec mon nom de membre et mon grade. Je peux en demander le retrait à tout moment."),
  formSend: B('Send for review', 'Envoyer pour relecture'),
  formSent: B('Thank you. Your testimonial will appear once reviewed by the team.', "Merci. Votre témoignage paraîtra après relecture par l'équipe."),
  formSignIn: B('Join the community to leave a testimonial.', 'Rejoignez la communauté pour déposer un témoignage.'),
  formError: B('It could not be sent. Check its length and the consent box, then try again.', "L'envoi n'a pas abouti. Vérifiez sa longueur et la case de consentement, puis réessayez."),
  pendingH3: B('Testimonials to review (admin)', 'Témoignages à relire (administration)'),
  approve: B('Publish', 'Publier'),
  reject: B('Refuse', 'Refuser'),
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
  const checked = new Date(`${RESOURCES_CHECKED_AT}T12:00:00Z`).toLocaleDateString(lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'long', year: 'numeric' })
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
export function WinsIntro({ canWrite = false, admin = false }: { canWrite?: boolean; admin?: boolean }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  return (
    <>
      <div className="cy-card cy-wins">
        <h2 className="pf-h2">{s(LT.winsH2)}</h2>
        <p className="cy-sub">{s(LT.winsLead)}</p>
      </div>
      <TestimonialWall />
      <TestimonialForm canWrite={canWrite} />
      {admin && <TestimonialReview />}
    </>
  )
}

/** LES TÉMOIGNAGES PUBLIÉS · écrits par les membres, relus, publiés avec leur
 *  nom de membre et leur grade réels */
function TestimonialWall() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [list, setList] = useState<Testimonial[] | null>(null)
  useEffect(() => { void fetchTestimonials().then((r) => setList(r.ok ? r.data.testimonials : [])) }, [])
  return (
    <div className="cy-card">
      <h3 className="cy-h3">{s(LT.wallH3)}</h3>
      {list && list.length === 0 && <p className="cy-sub">{s(LT.wallEmpty)}</p>}
      <div className="cy-tm-grid">
        {(list ?? []).map((t) => {
          const rank = RANKS.find((r) => r.id === t.author.grade)
          const pack = t.pack ? PACK_BY_ID[t.pack] : null
          return (
            <figure key={t.id} className="cy-tm">
              <blockquote>{t.body}</blockquote>
              <figcaption>
                <ChibiSprite spec={sanitizeChibi(t.author.avatar, hashString(t.author.handle))} scale={1} />
                <span>
                  <b>{t.author.name}</b>
                  {rank && <em style={{ ['--rk' as string]: rank.tint }}><i />{say(rank.belt, lang)}</em>}
                  {pack && <small>{say(pack.title, lang)}</small>}
                </span>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}

function TestimonialForm({ canWrite }: { canWrite: boolean }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [body, setBody] = useState('')
  const [pack, setPack] = useState('')
  const [consent, setConsent] = useState(false)
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'err'>('idle')
  const len = body.trim().length
  if (!canWrite) return <div className="cy-card" id="temoigner"><h3 className="cy-h3">{s(LT.formH3)}</h3><p className="cy-sub">{s(LT.formSignIn)}</p></div>
  return (
    <form className="cy-card cy-tm-form" id="temoigner" onSubmit={async (e) => {
      e.preventDefault()
      if (len < 40 || len > 800 || !consent) { setState('err'); return }
      setState('busy')
      const r = await postTestimonial(body.trim(), pack || null)
      setState(r.ok ? 'sent' : 'err')
    }}>
      <h3 className="cy-h3">{s(LT.formH3)}</h3>
      <p className="cy-sub">{s(LT.formLead)}</p>
      {state === 'sent' ? <p className="tf-note">{s(LT.formSent)}</p> : (
        <>
          <textarea className="promo-inp" rows={5} maxLength={800} value={body} onChange={(e) => setBody(e.target.value)} aria-label={s(LT.formH3)} />
          <small className="cy-sub">{len} / 800</small>
          <label className="cy-sub">{s(LT.formPack)}{' '}
            <select value={pack} onChange={(e) => setPack(e.target.value)}>
              <option value="">{s(LT.formNone)}</option>
              {PACKS.map((p) => <option key={p.id} value={p.id}>{say(p.title, lang)}</option>)}
            </select>
          </label>
          <label className="ae-news"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /><span>{s(LT.formConsent)}</span></label>
          {state === 'err' && <p className="cy-err" role="alert">{s(LT.formError)}</p>}
          <button className="gm-cta" type="submit" disabled={state === 'busy' || !consent || len < 40}>{s(LT.formSend)}</button>
        </>
      )}
    </form>
  )
}

/** LA RELECTURE · réservée aux administrateurs de la communauté */
function TestimonialReview() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [list, setList] = useState<PendingTestimonial[]>([])
  const load = () => void fetchPendingTestimonials().then((r) => { if (r.ok) setList(r.data.testimonials) })
  useEffect(load, [])
  if (list.length === 0) return null
  return (
    <div className="cy-card">
      <h3 className="cy-h3">{s(LT.pendingH3)}</h3>
      {list.map((t) => (
        <div key={t.id} className="cy-tm-pending">
          <p><b>{t.author.name}</b> · {t.body}</p>
          <button className="gm-cta" onClick={() => void reviewTestimonial(t.id, true).then(load)}>{s(LT.approve)}</button>
          <button className="cc-btn cc-slate" onClick={() => void reviewTestimonial(t.id, false).then(load)}>{s(LT.reject)}</button>
        </div>
      ))}
    </div>
  )
}
