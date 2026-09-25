// LA COMMUNAUTÉ · l'ancien Clan, refait à la manière de Skool.
//
// Demandé : « faire un clone amélioré de l'app skool.com avec toutes ses
// fonctionnalités, en fonction de notre usage : objectif en faire un outil
// communautaire comme le groupe d'Elliot ». Premier lot choisi : le fil et
// les commentaires. L'onglet « Clan » devient « Communauté ».
//
//   /clan              le fil · catégories, recherche, épinglées d'abord
//   /clan/p/<id>       une publication et ses commentaires (réponses sur un
//                      niveau, comme Skool)
//   /clan/a-propos     la communauté, ses règles
//
// LIRE EST OUVERT, PARTICIPER DEMANDE UN COMPTE · décidé ainsi. Déconnecté, le
// champ d'écriture devient un bouton de connexion. Connecté pour la première
// fois, on choisit le nom affiché (jamais l'adresse). Les sous-onglets
// Calendrier, Membres et Classements arriveront avec leurs lots : on ne montre
// pas un onglet qui ne mène nulle part.
import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk, navigate, usePath } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { useAccount, signIn } from '../lib/account'
import { packPath, FREE_PACK } from '../data/packs'
import { Shell } from './Shell'
import { CT, CATEGORY_LABEL } from './communityText'
import {
  COMMUNITY_CATEGORIES, COMMUNITY_LIMITS, fetchFeed, fetchPost, fetchMe, joinCommunity, createPost,
  createComment, toggleLike, setPinned, removeItem,
  type CPost, type CComment, type CError, type CommunityCategory, type Author,
} from '../lib/community'

function useSay() {
  const lang = useLang()
  return { lang, s: (b: Bi) => say(b, lang) }
}

/** Le message d'une erreur, dans la langue lue. */
function errorText(e: CError): Bi {
  if (e === 'not_configured') return CT.offBody
  if (e === 'auth_off') return CT.authOff
  if (e === 'rate') return CT.rate
  if (e === 'invalid') return CT.invalid
  if (e === 'not_found') return CT.notFound
  return CT.network
}

/* ------------------------------------------------------------------ */
/* LA PAGE                                                             */
/* ------------------------------------------------------------------ */

export function CommunityPage() {
  const path = usePath()
  const { s } = useSay()
  const postId = path.match(/^\/clan\/p\/([0-9a-f-]{36})$/i)?.[1] ?? null
  const about = path === '/clan/a-propos'

  useHeadTags({ title: `${s(CT.title)} · DojoBuro`, description: s(CT.lead), path: '/clan' })

  const me = useMember()

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{s(CT.title)}</h1>
        <nav className="cy-tabs" aria-label={s(CT.tabs)}>
          <Lnk className={`cy-tab${!about ? ' on' : ''}`} href="/clan" aria-current={!about ? 'page' : undefined}>{s(CT.tabFeed)}</Lnk>
          <Lnk className={`cy-tab${about ? ' on' : ''}`} href="/clan/a-propos" aria-current={about ? 'page' : undefined}>{s(CT.tabAbout)}</Lnk>
        </nav>
      </section>

      <div className="cy-layout">
        <div className="cy-main">
          {about ? <About /> : postId ? <PostView id={postId} me={me} /> : <Feed me={me} />}
        </div>
        <aside className="cy-side">
          <AboutCard />
        </aside>
      </div>
      <SupportBot />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* QUI JE SUIS · connecté ? membre ? admin ?                            */
/* ------------------------------------------------------------------ */

interface Me {
  signedIn: boolean
  enabled: boolean
  name: string | null
  admin: boolean
  authOff: boolean
  refresh: () => void
}

function useMember(): Me {
  const acc = useAccount()
  const [state, setState] = useState<{ name: string | null; admin: boolean; authOff: boolean }>({ name: null, admin: false, authOff: false })
  const load = useCallback(() => {
    if (!acc.signedIn) { setState({ name: null, admin: false, authOff: false }); return }
    void fetchMe().then((r) => {
      if (r.ok) setState({ name: r.data.member?.name ?? null, admin: r.data.admin, authOff: false })
      else setState({ name: null, admin: false, authOff: r.error === 'auth_off' })
    })
  }, [acc.signedIn])
  useEffect(() => { load() }, [load])
  return { signedIn: acc.signedIn, enabled: acc.enabled, ...state, refresh: load }
}

/* ------------------------------------------------------------------ */
/* LE FIL                                                              */
/* ------------------------------------------------------------------ */

function Feed({ me }: { me: Me }) {
  const { s, lang } = useSay()
  const [cat, setCat] = useState<CommunityCategory | ''>('')
  const [q, setQ] = useState('')
  const [query, setQuery] = useState('')
  const [pinned, setPinnedPosts] = useState<CPost[]>([])
  const [posts, setPosts] = useState<CPost[]>([])
  const [next, setNext] = useState<string | null>(null)
  const [error, setError] = useState<CError | null>(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback((cursor: string | null) => {
    setLoading(true)
    void fetchFeed({ cat, q: query, cursor }).then((r) => {
      setLoading(false)
      if (!r.ok) { setError(r.error); return }
      setError(null)
      if (!cursor) setPinnedPosts(r.data.pinned)
      setPosts((prev) => (cursor ? [...prev, ...r.data.posts] : r.data.posts))
      setNext(r.data.next)
    })
  }, [cat, query])

  useEffect(() => { load(null) }, [load])

  if (error === 'not_configured') {
    return (
      <div className="cy-card cy-off">
        <h2 className="pf-h2">{s(CT.offTitle)}</h2>
        <p className="gm-lead">{s(CT.offBody)}</p>
      </div>
    )
  }

  const list = [...pinned, ...posts]
  return (
    <>
      <Composer me={me} onPosted={() => load(null)} />

      <div className="cy-filters">
        <div className="cy-chips" role="group" aria-label={s(CT.category)}>
          <button className={`cy-chip${cat === '' ? ' on' : ''}`} aria-pressed={cat === ''} onClick={() => setCat('')}>{s(CT.all)}</button>
          {COMMUNITY_CATEGORIES.map((c) => (
            <button key={c} className={`cy-chip${cat === c ? ' on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {say(CATEGORY_LABEL[c], lang)}
            </button>
          ))}
        </div>
        <form className="cy-search" role="search" onSubmit={(e) => { e.preventDefault(); setQuery(q.trim()) }}>
          <BauhausIcon name="target" size={16} />
          <input type="search" value={q} onChange={(e) => { setQ(e.target.value); if (!e.target.value) setQuery('') }}
            placeholder={s(CT.search)} aria-label={s(CT.search)} />
        </form>
      </div>

      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}

      <div className="cy-list">
        {list.map((p) => <PostCard key={p.id} post={p} me={me} onChange={() => load(null)} />)}
      </div>

      {!loading && !error && list.length === 0 && <p className="cy-empty">{query ? s(CT.noResult) : s(CT.empty)}</p>}
      {loading && <p className="cy-empty">{s(CT.loading)}</p>}
      {next && !loading && <button className="cc-btn cc-slate cy-more" onClick={() => load(next)}>{s(CT.more)}</button>}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* ÉCRIRE                                                              */
/* ------------------------------------------------------------------ */

function Composer({ me, onPosted }: { me: Me; onPosted: () => void }) {
  const { s, lang } = useSay()
  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState<CommunityCategory>('general')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<CError | null>(null)

  if (me.authOff || (!me.enabled)) {
    return <div className="cy-card cy-compose-off"><p>{s(CT.authOff)}</p></div>
  }
  if (!me.signedIn) {
    return (
      <button className="cy-card cy-compose-fake" onClick={signIn}>
        <span className="cy-av ghost" aria-hidden="true"><BauhausIcon name="smile" size={18} /></span>
        <span>{s(CT.signInToPost)}</span>
        <span className="gm-cta cy-compose-go">{s(CT.signIn)}</span>
      </button>
    )
  }
  if (!me.name) return <JoinForm onJoined={me.refresh} />

  if (!open) {
    return (
      <button className="cy-card cy-compose-fake" onClick={() => setOpen(true)}>
        <Avatar author={{ name: me.name, key: 'me' }} />
        <span>{s(CT.write)}</span>
      </button>
    )
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    const r = await createPost({ category: cat, title, body })
    setBusy(false)
    if (!r.ok) { setError(r.error); if (r.error === 'join') me.refresh(); return }
    setTitle(''); setBody(''); setOpen(false); setError(null)
    onPosted()
  }

  return (
    <form className="cy-card cy-compose" onSubmit={submit}>
      <div className="cy-compose-head">
        <Avatar author={{ name: me.name, key: 'me' }} />
        <b>{me.name}</b>
        <select value={cat} onChange={(e) => setCat(e.target.value as CommunityCategory)} aria-label={s(CT.category)}>
          {COMMUNITY_CATEGORIES.map((c) => <option key={c} value={c}>{say(CATEGORY_LABEL[c], lang)}</option>)}
        </select>
      </div>
      <input className="cy-inp cy-title-inp" value={title} onChange={(e) => setTitle(e.target.value)}
        placeholder={s(CT.postTitle)} aria-label={s(CT.postTitle)}
        minLength={COMMUNITY_LIMITS.title.min} maxLength={COMMUNITY_LIMITS.title.max} required />
      <textarea className="cy-inp" value={body} onChange={(e) => setBody(e.target.value)} rows={6}
        placeholder={s(CT.write)} aria-label={s(CT.postBody)}
        minLength={COMMUNITY_LIMITS.body.min} maxLength={COMMUNITY_LIMITS.body.max} required />
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-compose-acts">
        <button type="button" className="cc-btn cc-slate" onClick={() => setOpen(false)}>{s(CT.cancel)}</button>
        <button type="submit" className="gm-cta" disabled={busy}>{s(CT.publish)}</button>
      </div>
    </form>
  )
}

function JoinForm({ onJoined }: { onJoined: () => void }) {
  const { s } = useSay()
  const [name, setName] = useState('')
  const [error, setError] = useState<CError | null>(null)
  return (
    <form className="cy-card cy-join" onSubmit={async (e) => {
      e.preventDefault()
      const r = await joinCommunity(name)
      if (!r.ok) { setError(r.error); return }
      onJoined()
    }}>
      <b>{s(CT.joinTitle)}</b>
      <p>{s(CT.joinBody)}</p>
      <div className="cy-join-row">
        <input className="cy-inp" value={name} onChange={(e) => setName(e.target.value)} placeholder={s(CT.joinPlace)}
          aria-label={s(CT.joinPlace)} minLength={COMMUNITY_LIMITS.name.min} maxLength={COMMUNITY_LIMITS.name.max} required />
        <button className="gm-cta" type="submit">{s(CT.join)}</button>
      </div>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* UNE PUBLICATION                                                     */
/* ------------------------------------------------------------------ */

function PostCard({ post, me, onChange, full = false }: { post: CPost; me: Me; onChange: () => void; full?: boolean }) {
  const { s, lang } = useSay()
  const [p, setP] = useState(post)
  useEffect(() => setP(post), [post])
  const canAct = me.signedIn && !!me.name

  const like = async () => {
    if (!canAct) { if (!me.signedIn) signIn(); return }
    const r = await toggleLike('post', p.id)
    if (r.ok) setP({ ...p, liked: r.data.liked, likes: r.data.likes })
  }
  const pin = async () => {
    const r = await setPinned(p.id, !p.pinned)
    if (r.ok) onChange()
  }
  const del = async () => {
    if (!window.confirm(say(CT.confirmDelete, lang))) return
    const r = await removeItem('post', p.id)
    if (r.ok) { if (full) navigate('/clan'); else onChange() }
  }

  const open = () => navigate(`/clan/p/${p.id}`)
  return (
    <article className={`cy-card cy-post${p.pinned ? ' pinned' : ''}`}>
      <header className="cy-post-head">
        <Avatar author={p.author} />
        <span className="cy-post-who">
          <b>{p.author.name}</b>
          <em><TimeAgo iso={p.createdAt} /> · {say(CATEGORY_LABEL[p.category], lang)}{p.edited ? ` · ${s(CT.edited)}` : ''}</em>
        </span>
        {p.pinned && <span className="cy-pin"><BauhausIcon name="star" size={12} /> {s(CT.pinned)}</span>}
      </header>
      {full
        ? <h2 className="cy-post-title">{p.title}</h2>
        : <h3 className="cy-post-title"><button className="cy-link" onClick={open}>{p.title}</button></h3>}
      <p className="cy-post-body">{p.body}</p>
      {p.truncated && !full && <button className="cy-link cy-read" onClick={open}>{s(CT.readMore)}</button>}
      <footer className="cy-post-foot">
        <button className={`cy-act${p.liked ? ' on' : ''}`} onClick={like} aria-pressed={p.liked}>
          <BauhausIcon name="smile" size={16} /> {s(CT.like)} · {p.likes}
        </button>
        {!full && (
          <button className="cy-act" onClick={open}>
            <BauhausIcon name="rows" size={16} /> {p.comments} {p.comments === 1 ? s(CT.comment1) : s(CT.comments)}
          </button>
        )}
        <span className="cy-grow" />
        {me.admin && <button className="cy-act" onClick={pin}>{p.pinned ? s(CT.unpin) : s(CT.pin)}</button>}
        {(p.mine || me.admin) && <button className="cy-act danger" onClick={del}>{s(CT.delete)}</button>}
      </footer>
    </article>
  )
}

function PostView({ id, me }: { id: string; me: Me }) {
  const { s } = useSay()
  const [data, setData] = useState<{ post: CPost; comments: CComment[] } | null>(null)
  const [error, setError] = useState<CError | null>(null)
  const load = useCallback(() => {
    void fetchPost(id).then((r) => { if (r.ok) { setData(r.data); setError(null) } else setError(r.error) })
  }, [id])
  useEffect(() => { load() }, [load])

  return (
    <>
      <Lnk className="gm-back" href="/clan">← {s(CT.back)}</Lnk>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      {!data && !error && <p className="cy-empty">{s(CT.loading)}</p>}
      {data && (
        <>
          <PostCard post={data.post} me={me} onChange={load} full />
          <Comments postId={id} comments={data.comments} me={me} onChange={load} />
        </>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* LES COMMENTAIRES · un niveau de réponse                              */
/* ------------------------------------------------------------------ */

function Comments({ postId, comments, me, onChange }: { postId: string; comments: CComment[]; me: Me; onChange: () => void }) {
  const roots = comments.filter((c) => !c.parentId)
  const repliesOf = (id: string) => comments.filter((c) => c.parentId === id)
  return (
    <section className="cy-card cy-comments">
      <CommentForm postId={postId} me={me} onSent={onChange} />
      {roots.map((c) => (
        <div className="cy-thread" key={c.id}>
          <CommentItem c={c} postId={postId} me={me} onChange={onChange} />
          <div className="cy-replies">
            {repliesOf(c.id).map((r) => <CommentItem key={r.id} c={r} postId={postId} me={me} onChange={onChange} reply />)}
          </div>
        </div>
      ))}
    </section>
  )
}

function CommentItem({ c, postId, me, onChange, reply = false }: { c: CComment; postId: string; me: Me; onChange: () => void; reply?: boolean }) {
  const { s, lang } = useSay()
  const [x, setX] = useState(c)
  const [replying, setReplying] = useState(false)
  useEffect(() => setX(c), [c])
  const canAct = me.signedIn && !!me.name
  const like = async () => {
    if (!canAct) { if (!me.signedIn) signIn(); return }
    const r = await toggleLike('comment', x.id)
    if (r.ok) setX({ ...x, liked: r.data.liked, likes: r.data.likes })
  }
  const del = async () => {
    if (!window.confirm(say(CT.confirmDelete, lang))) return
    const r = await removeItem('comment', x.id)
    if (r.ok) onChange()
  }
  if (x.deleted) return <p className={`cy-com deleted${reply ? ' reply' : ''}`}>{s(CT.deleted)}</p>
  return (
    <div className={`cy-com${reply ? ' reply' : ''}`}>
      {x.author && <Avatar author={x.author} small />}
      <div className="cy-com-b">
        <p className="cy-com-head"><b>{x.author?.name}</b> <em><TimeAgo iso={x.createdAt} /></em></p>
        <p className="cy-com-text">{x.body}</p>
        <div className="cy-com-acts">
          <button className={`cy-act sm${x.liked ? ' on' : ''}`} onClick={like} aria-pressed={x.liked}>{s(CT.like)} · {x.likes}</button>
          {canAct && <button className="cy-act sm" onClick={() => setReplying((v) => !v)}>{s(CT.reply)}</button>}
          {(x.mine || me.admin) && <button className="cy-act sm danger" onClick={del}>{s(CT.delete)}</button>}
        </div>
        {replying && <CommentForm postId={postId} parentId={x.id} me={me} onSent={() => { setReplying(false); onChange() }} />}
      </div>
    </div>
  )
}

function CommentForm({ postId, parentId = null, me, onSent }: { postId: string; parentId?: string | null; me: Me; onSent: () => void }) {
  const { s } = useSay()
  const [body, setBody] = useState('')
  const [error, setError] = useState<CError | null>(null)
  if (!me.signedIn) {
    return <button className="cc-btn cc-slate" onClick={signIn}>{s(CT.signInToPost)}</button>
  }
  if (!me.name) return <JoinForm onJoined={me.refresh} />
  return (
    <form className="cy-cform" onSubmit={async (e) => {
      e.preventDefault()
      const r = await createComment({ postId, parentId, body })
      if (!r.ok) { setError(r.error); return }
      setBody(''); setError(null); onSent()
    }}>
      <textarea className="cy-inp" rows={2} value={body} onChange={(e) => setBody(e.target.value)}
        placeholder={s(CT.addComment)} aria-label={s(CT.addComment)} maxLength={COMMUNITY_LIMITS.comment.max} required />
      <button className="gm-cta" type="submit">{s(CT.send)}</button>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* À PROPOS                                                            */
/* ------------------------------------------------------------------ */

function About() {
  const { s } = useSay()
  return (
    <div className="cy-card cy-about">
      <h2 className="pf-h2">{s(CT.aboutH2)}</h2>
      <p className="gm-lead">{s(CT.aboutBody)}</p>
      <h3>{s(CT.rulesH3)}</h3>
      <ol className="cy-rules">{CT.rules.map((r, i) => <li key={i}>{s(r)}</li>)}</ol>
    </div>
  )
}

function AboutCard() {
  const { s } = useSay()
  return (
    <div className="cy-card cy-aside">
      <b className="cy-aside-t">{s(CT.title)}</b>
      <span className="cy-free">{s(CT.free)}</span>
      <p>{s(CT.lead)}</p>
      <Lnk className="gm-cta" href={packPath(FREE_PACK.id)}>{s(CT.startTraining)} →</Lnk>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* PETITS MORCEAUX                                                     */
/* ------------------------------------------------------------------ */

const AV_COLORS = ['#7c3aed', '#db2777', '#0891b2', '#16a34a', '#ea580c', '#4f46e5', '#b45309', '#0d9488']

function Avatar({ author, small = false }: { author: Author; small?: boolean }) {
  let h = 0
  for (const ch of author.key) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return (
    <span className={`cy-av${small ? ' sm' : ''}`} style={{ background: AV_COLORS[h % AV_COLORS.length] }} aria-hidden="true">
      {(author.name.trim()[0] || '·').toUpperCase()}
    </span>
  )
}

function TimeAgo({ iso }: { iso: string }) {
  const { lang } = useSay()
  const d = (Date.parse(iso) - Date.now()) / 1000
  const rtf = new Intl.RelativeTimeFormat(lang === 'fr' ? 'fr' : 'en', { numeric: 'auto' })
  const abs = Math.abs(d)
  const txt = abs < 60 ? rtf.format(Math.round(d), 'second')
    : abs < 3600 ? rtf.format(Math.round(d / 60), 'minute')
      : abs < 86400 ? rtf.format(Math.round(d / 3600), 'hour')
        : abs < 86400 * 30 ? rtf.format(Math.round(d / 86400), 'day')
          : new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(Date.parse(iso))
  return <time dateTime={iso}>{txt}</time>
}
