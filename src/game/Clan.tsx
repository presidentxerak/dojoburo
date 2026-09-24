// LE CLAN · le fil où les élèves montrent ce qu'ils ont construit avec l'IA.
//
// ---------------------------------------------------------------------------
// CE QUI A CHANGÉ, ET CE QUI NE CHANGE PAS
//
// Cette page disait « pas encore de fil » parce qu'aucun serveur ne recevait
// les messages. Il existe maintenant (api/clan.ts, db/clan.sql) : la page est
// devenue le fil. Ce qui ne change pas, c'est la règle qui l'a fait attendre :
// AUCUN MESSAGE N'EST INVENTÉ. Sans base configurée, le serveur répond
// « not_configured » et la page le dit en toutes lettres, sans fil factice
// pour avoir l'air vivante.
//
// L'IDENTITÉ SANS COMPTE · un pseudonyme et une clé d'appareil (voir
// src/lib/clan.ts, hors de src/game parce que le jeu n'ouvre aucun stockage).
// Le serveur n'en garde que l'empreinte : c'est ce qui permet de supprimer ses
// propres messages, et rien d'autre.
//
// Tous les textes viennent de ./clanText, dans les deux langues.
// ---------------------------------------------------------------------------
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { SupportBot } from '../components/SupportBot'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { BADGE_COUNT } from '../data/curriculum'
import {
  CLAN_LIMITS, CLAN_TAGS, createPost, deletePost, listPosts, reportPost, savedPseudo, savePseudo, toggleBravo,
  type ClanDraft, type ClanError, type ClanFail, type ClanPost, type ClanTag,
} from '../lib/clan'
import { useGame } from './progress'
import { Shell } from './Shell'
import { levelOf } from './Gauge'
import { CT, ERROR, FIELD_ERROR, TAG_LABEL, useClanText } from './clanText'

type Status = 'loading' | 'ready' | 'error' | 'off'

export function ClanPage() {
  const { lang, t } = useClanText()
  const g = useGame()

  useHeadTags({
    title: `${t(CT.title)} · DojoBuro`,
    description: t(CT.metaDescription),
    path: '/clan',
  })

  const [status, setStatus] = useState<Status>('loading')
  const [failure, setFailure] = useState<ClanError>('unknown')
  const [posts, setPosts] = useState<ClanPost[]>([])
  const [next, setNext] = useState<string | null>(null)
  const [more, setMore] = useState(false)
  const [moreError, setMoreError] = useState<ClanError | null>(null)
  const alive = useRef(true)
  // remis à vrai à chaque montage · le mode strict démonte puis remonte
  useEffect(() => {
    alive.current = true
    return () => { alive.current = false }
  }, [])

  const loadFirst = useCallback(async () => {
    setStatus('loading')
    const r = await listPosts()
    if (!alive.current) return
    if (r.ok) {
      setPosts(r.posts)
      setNext(r.next)
      setStatus('ready')
    } else {
      setFailure(r.error)
      setStatus(r.error === 'not_configured' ? 'off' : 'error')
    }
  }, [])

  useEffect(() => { void loadFirst() }, [loadFirst])

  const loadMore = async () => {
    if (!next || more) return
    setMore(true)
    setMoreError(null)
    const r = await listPosts(next)
    if (!alive.current) return
    setMore(false)
    if (!r.ok) { setMoreError(r.error); return }
    // un message publié entre deux pages ne doit pas apparaître deux fois
    setPosts((cur) => {
      const seen = new Set(cur.map((p) => p.id))
      return [...cur, ...r.posts.filter((p) => !seen.has(p.id))]
    })
    setNext(r.next)
  }

  const update = (id: string, patch: Partial<ClanPost>) =>
    setPosts((cur) => cur.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  const drop = (id: string) => setPosts((cur) => cur.filter((p) => p.id !== id))

  const lv = levelOf(g.xp).level

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t(CT.title)}</h1>
        <p className="gm-lead">{t(CT.lead)}</p>
      </section>

      {status === 'off' ? (
        // LE SERVEUR N'EST PAS CONFIGURÉ · dit tel quel, sans fil inventé.
        <section className="gm-sec">
          <div className="cf-note" role="status">
            <b>{t(CT.offTitle)}</b>
            <p>{t(CT.offBody)}</p>
          </div>
        </section>
      ) : (
        <>
          <section className="gm-sec">
            <Composer
              disabled={status !== 'ready'}
              onPublished={(p) => setPosts((cur) => [p, ...cur.filter((x) => x.id !== p.id)])}
            />
          </section>

          <section className="gm-sec" aria-labelledby="cf-feed-h">
            <h2 id="cf-feed-h" className="cf-h2">{t(CT.feedTitle)}</h2>

            {status === 'loading' && <p className="cf-state" role="status">{t(CT.loading)}</p>}

            {status === 'error' && (
              <div className="cf-note" role="alert">
                <b>{t(CT.errorTitle)}</b>
                <p>{t(ERROR[failure] || ERROR.unknown)}</p>
                <button type="button" className="cc-btn cc-slate" onClick={() => void loadFirst()}>{t(CT.retry)}</button>
              </div>
            )}

            {status === 'ready' && posts.length === 0 && (
              <div className="cf-note">
                <b>{t(CT.emptyTitle)}</b>
                <p>{t(CT.emptyBody)}</p>
              </div>
            )}

            {status === 'ready' && posts.length > 0 && (
              <ol className="cf-list">
                {posts.map((p) => (
                  <li key={p.id}>
                    <PostCard post={p} lang={lang} onChange={(patch) => update(p.id, patch)} onGone={() => drop(p.id)} />
                  </li>
                ))}
              </ol>
            )}

            {status === 'ready' && next && (
              <div className="cf-more">
                <button type="button" className="cc-btn cc-slate" onClick={() => void loadMore()} disabled={more}>
                  {more ? t(CT.loadingMore) : t(CT.more)}
                </button>
                {moreError && <p className="cf-err" role="alert">{t(ERROR[moreError] || ERROR.unknown)}</p>}
              </div>
            )}
            {status === 'ready' && !next && posts.length > 0 && <p className="cf-state">{t(CT.end)}</p>}
          </section>
        </>
      )}

      {/* VOTRE PROGRESSION · elle ne dépend d'aucun serveur. */}
      <section className="gm-sec">
        <h2 className="cf-h2">{t(CT.meTitle)}</h2>
        <div className="cl-me">
          {/* LE NIVEAU EN MÉDAILLON · dérivé de l'expérience, voir Gauge. */}
          <span className="cl-me-g" aria-label={`${t(CT.level)} ${lv}`}>{lv}</span>
          <div>
            <b>{g.xp} XP</b>
            <em>{g.badges.length} / {BADGE_COUNT} {t(CT.badges)}</em>
          </div>
        </div>
        <Lnk className="gm-cta" href="/profil">{t(CT.seeProfile)} →</Lnk>
      </section>

      <SupportBot />
    </Shell>
  )
}

// ---- le formulaire ------------------------------------------------------------

const len = (s: string) => [...s.trim()].length
const PSEUDO_OK = /^[\p{L}\p{M}\p{N}][\p{L}\p{M}\p{N} ._'’-]*$/u

/** La même vérification que le serveur, faite avant l'envoi · le serveur
 *  reste le seul juge, ceci évite seulement un aller-retour pour une faute
 *  évidente. */
function checkDraft(d: ClanDraft): { field: string; key: string } | null {
  const p = d.pseudo.trim().replace(/\s+/g, ' ')
  if (len(p) < CLAN_LIMITS.pseudo.min || len(p) > CLAN_LIMITS.pseudo.max) return { field: 'pseudo', key: 'pseudo' }
  if (!PSEUDO_OK.test(p)) return { field: 'pseudo', key: 'pseudoChars' }
  if (len(d.title) < CLAN_LIMITS.title.min || len(d.title) > CLAN_LIMITS.title.max) return { field: 'title', key: 'title' }
  if (len(d.body) < CLAN_LIMITS.body.min || len(d.body) > CLAN_LIMITS.body.max) return { field: 'body', key: 'body' }
  const link = d.link.trim()
  if (link && (!/^https?:\/\/[^\s/]+\.[^\s]+$/i.test(link) || len(link) > CLAN_LIMITS.link.max)) return { field: 'link', key: 'link' }
  if (d.tags.length > CLAN_LIMITS.tags.max) return { field: 'tags', key: 'tags' }
  return null
}

/** Le refus du serveur, traduit en ce qu'il faut corriger. */
function serverProblem(r: ClanFail): { field?: string; key?: string; error: ClanError | 'ratePost' } {
  if (r.error === 'invalid' && r.field) {
    return { field: r.field, key: r.field === 'pseudo' && r.reason === 'chars' ? 'pseudoChars' : r.field, error: 'invalid' }
  }
  if (r.error === 'spam') return { field: 'body', key: r.reason === 'duplicate' ? 'duplicate' : 'links', error: 'spam' }
  if (r.error === 'rate') return { error: 'ratePost' }
  return { error: r.error }
}

function Composer({ disabled, onPublished }: { disabled: boolean; onPublished: (p: ClanPost) => void }) {
  const { t } = useClanText()
  const [pseudo, setPseudo] = useState(() => savedPseudo())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState<ClanTag[]>([])
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<{ field?: string; key?: string; error?: ClanError | 'ratePost' } | null>(null)
  const [done, setDone] = useState(false)

  const toggleTag = (tag: ClanTag) => setTags((cur) =>
    cur.includes(tag) ? cur.filter((x) => x !== tag) : cur.length >= CLAN_LIMITS.tags.max ? cur : [...cur, tag])

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (busy || disabled) return
    setDone(false)
    const draft: ClanDraft = { pseudo, title, body, link, tags }
    const local = checkDraft(draft)
    if (local) { setProblem(local); return }
    setProblem(null)
    setBusy(true)
    const r = await createPost(draft)
    setBusy(false)
    if (!r.ok) { setProblem(serverProblem(r)); return }
    savePseudo(r.post.pseudo)
    setPseudo(r.post.pseudo)
    setTitle('')
    setBody('')
    setLink('')
    setTags([])
    setDone(true)
    onPublished(r.post)
  }

  const fieldMsg = (field: string) =>
    problem?.field === field && problem.key && FIELD_ERROR[problem.key]
      ? <p className="cf-err" id={`cf-err-${field}`} role="alert">{t(FIELD_ERROR[problem.key])}</p>
      : null
  const aria = (field: string) => (problem?.field === field
    ? { 'aria-invalid': true as const, 'aria-describedby': `cf-err-${field}` }
    : {})

  return (
    <form className="cf-form" onSubmit={(e) => void submit(e)} noValidate>
      <h2 className="cf-h2">{t(CT.composeTitle)}</h2>
      <p className="cf-fine">{t(CT.composeLead)}</p>

      <label className="cf-lab" htmlFor="cf-pseudo">{t(CT.pseudo)}</label>
      <input
        id="cf-pseudo" className="cf-inp" value={pseudo} onChange={(e) => setPseudo(e.target.value)}
        placeholder={t(CT.pseudoPh)} maxLength={CLAN_LIMITS.pseudo.max} autoComplete="nickname" {...aria('pseudo')}
      />
      {fieldMsg('pseudo')}

      <label className="cf-lab" htmlFor="cf-title">{t(CT.postTitle)}</label>
      <input
        id="cf-title" className="cf-inp" value={title} onChange={(e) => setTitle(e.target.value)}
        placeholder={t(CT.postTitlePh)} maxLength={CLAN_LIMITS.title.max} {...aria('title')}
      />
      <span className="cf-count" aria-hidden="true">{len(title)} / {CLAN_LIMITS.title.max}</span>
      {fieldMsg('title')}

      <label className="cf-lab" htmlFor="cf-body">{t(CT.body)}</label>
      <textarea
        id="cf-body" className="cf-inp cf-area" value={body} onChange={(e) => setBody(e.target.value)}
        placeholder={t(CT.bodyPh)} maxLength={CLAN_LIMITS.body.max} rows={5} {...aria('body')}
      />
      <span className="cf-count" aria-hidden="true">{len(body)} / {CLAN_LIMITS.body.max}</span>
      {fieldMsg('body')}

      <label className="cf-lab" htmlFor="cf-link">{t(CT.link)}</label>
      <input
        id="cf-link" className="cf-inp" type="url" inputMode="url" value={link} onChange={(e) => setLink(e.target.value)}
        placeholder={t(CT.linkPh)} maxLength={CLAN_LIMITS.link.max} {...aria('link')}
      />
      {fieldMsg('link')}

      <fieldset className="cf-tagset" {...aria('tags')}>
        <legend className="cf-lab">{t(CT.tags)}</legend>
        <div className="cf-tags">
          {CLAN_TAGS.map((tag) => (
            <button
              key={tag} type="button" className={`cf-tag${tags.includes(tag) ? ' on' : ''}`}
              aria-pressed={tags.includes(tag)} onClick={() => toggleTag(tag)}
              disabled={!tags.includes(tag) && tags.length >= CLAN_LIMITS.tags.max}
            >
              {t(TAG_LABEL[tag])}
            </button>
          ))}
        </div>
      </fieldset>
      {fieldMsg('tags')}

      <p className="cf-fine">{t(CT.privacy)}</p>

      <div className="cf-send">
        <button type="submit" className="gm-cta" disabled={busy || disabled}>
          {busy ? t(CT.publishing) : t(CT.publish)}
        </button>
        {done && <p className="cf-ok" role="status">{t(CT.published)}</p>}
        {problem?.error && !problem.key && <p className="cf-err" role="alert">{t(ERROR[problem.error] || ERROR.unknown)}</p>}
      </div>
    </form>
  )
}

// ---- une carte du fil --------------------------------------------------------

function PostCard({ post, lang, onChange, onGone }: {
  post: ClanPost
  lang: 'en' | 'fr'
  onChange: (patch: Partial<ClanPost>) => void
  onGone: () => void
}) {
  const { t } = useClanText()
  const [busy, setBusy] = useState<'bravo' | 'report' | 'remove' | null>(null)
  const [reported, setReported] = useState(false)
  const [note, setNote] = useState<{ ok: boolean; text: string } | null>(null)

  const date = new Date(post.created_at)
  const when = Number.isFinite(date.getTime())
    ? new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date)
    : ''
  let host = ''
  try { host = post.link ? new URL(post.link).hostname.replace(/^www\./, '') : '' } catch { host = '' }

  const fail = (e: ClanError) => setNote({ ok: false, text: t(ERROR[e] || ERROR.unknown) })

  const bravo = async () => {
    if (busy) return
    setBusy('bravo')
    setNote(null)
    const r = await toggleBravo(post.id)
    setBusy(null)
    if (r.ok) onChange({ bravoed: r.bravoed, bravos: r.bravos })
    else if (r.error === 'not_found') onGone()
    else fail(r.error)
  }

  const report = async () => {
    if (busy || reported || !window.confirm(t(CT.reportConfirm))) return
    setBusy('report')
    setNote(null)
    const r = await reportPost(post.id)
    setBusy(null)
    if (r.ok) {
      setReported(true)
      if (r.hidden) onGone()
      else setNote({ ok: true, text: t(CT.reportThanks) })
    } else if (r.error === 'not_found') onGone()
    else fail(r.error)
  }

  const remove = async () => {
    if (busy || !window.confirm(t(CT.removeConfirm))) return
    setBusy('remove')
    setNote(null)
    const r = await deletePost(post.id)
    setBusy(null)
    if (r.ok || r.error === 'not_found') onGone()
    else fail(r.error)
  }

  return (
    <article className={`cf-card${post.mine ? ' mine' : ''}`}>
      <header className="cf-meta">
        <b className="cf-who">{post.pseudo}</b>
        {when && <time dateTime={post.created_at}>{when}</time>}
        {post.mine && <span className="cf-mine">{t(CT.yours)}</span>}
      </header>
      <h3 className="cf-title">{post.title}</h3>
      {/* DU TEXTE, JAMAIS DU HTML · React échappe tout ce qui est rendu ici. */}
      <p className="cf-body">{post.body}</p>
      {post.link && (
        <a className="cf-link" href={post.link} target="_blank" rel="noopener noreferrer nofollow ugc">
          {t(CT.seeLink)}{host ? ` · ${host}` : ''}
        </a>
      )}
      {post.tags.length > 0 && (
        <ul className="cf-chips">
          {post.tags.map((tag) => <li key={tag}>{t(TAG_LABEL[tag])}</li>)}
        </ul>
      )}
      <div className="cf-acts">
        <button
          type="button" className={`cc-btn cc-slate cf-act${post.bravoed ? ' on' : ''}`}
          aria-pressed={post.bravoed} onClick={() => void bravo()} disabled={post.mine || busy !== null}
          aria-label={`${t(CT.bravo)} · ${post.bravos} ${t(CT.bravos)}`}
        >
          {t(CT.bravo)} <span className="cf-n">{post.bravos}</span>
        </button>
        {post.mine ? (
          <button type="button" className="cc-btn cc-slate cf-act cf-del" onClick={() => void remove()} disabled={busy !== null}>
            {t(CT.remove)}
          </button>
        ) : (
          <button type="button" className="cc-btn cc-slate cf-act" onClick={() => void report()} disabled={busy !== null || reported}>
            {reported ? t(CT.reported) : t(CT.report)}
          </button>
        )}
      </div>
      {note && <p className={note.ok ? 'cf-ok' : 'cf-err'} role={note.ok ? 'status' : 'alert'}>{note.text}</p>}
    </article>
  )
}
