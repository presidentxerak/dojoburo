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
//   /clan/calendrier   les lives et ateliers, en heure locale, à ajouter à son agenda
//   /clan/membres      les membres, qui est en ligne
//   /clan/classements  les points (j'aime reçus), les niveaux, les podiums
//   /clan/m/<handle>   le profil public d'un membre
//   /clan/a-propos     la communauté, ses règles
//   /clan/notifications, /clan/messages[/<handle>] · la cloche et la
//                      messagerie privée, pour un compte connecté
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
import { embedsIn, EMBED_LABEL, type Embed } from '../lib/embeds'
import { CT, CATEGORY_LABEL } from './communityText'
import {
  COMMUNITY_CATEGORIES, COMMUNITY_LIMITS, fetchFeed, fetchPost, fetchMe, joinCommunity, createPost,
  createComment, toggleLike, setPinned, removeItem, editItem, fetchMembers, fetchMember, fetchLeaderboard, editProfile,
  LEVEL_POINTS, fetchEvents, createEvent, deleteEvent, icsOf,
  votePoll, encodeMentions, decodeMentions, MENTION_TOKEN, type PollView,
  fetchUnread, fetchNotifications, markNotificationsRead, fetchConversations, fetchThread, sendMessage,
  type CNotification, type CConversation, type CMessage, type Peer,
  type CEvent, type CPost, type CComment, type CError, type CommunityCategory, type Author, type CMember, type BoardRow, type MeData,
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
  if (e === 'own') return CT.own
  return CT.network
}

/* ------------------------------------------------------------------ */
/* LA PAGE                                                             */
/* ------------------------------------------------------------------ */

export function CommunityPage() {
  const path = usePath()
  const { s } = useSay()
  const postId = path.match(/^\/clan\/p\/([0-9a-f-]{36})$/i)?.[1] ?? null
  const memberId = path.match(/^\/clan\/m\/([0-9a-f-]{36})$/i)?.[1] ?? null
  const about = path === '/clan/a-propos'
  const membersTab = path === '/clan/membres'
  const boards = path === '/clan/classements'
  const calendarTab = path === '/clan/calendrier'
  const notifTab = path === '/clan/notifications'
  const msgMatch = path.match(/^\/clan\/messages(?:\/([0-9a-f-]{36}))?$/i)
  const msgTab = !!msgMatch
  const feedTab = !about && !membersTab && !boards && !memberId && !calendarTab && !notifTab && !msgTab
  const TABS: { href: string; on: boolean; label: Bi }[] = [
    { href: '/clan', on: feedTab, label: CT.tabFeed },
    { href: '/clan/calendrier', on: calendarTab, label: CT.tabCalendar },
    { href: '/clan/membres', on: membersTab || !!memberId, label: CT.tabMembers },
    { href: '/clan/classements', on: boards, label: CT.tabBoards },
    { href: '/clan/a-propos', on: about, label: CT.tabAbout },
  ]

  useHeadTags({ title: `${s(CT.title)} · DojoBuro`, description: s(CT.lead), path: '/clan' })

  const me = useMember()

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{s(CT.title)}</h1>
        <div className="cy-tabbar">
          <nav className="cy-tabs" aria-label={s(CT.tabs)}>
            {TABS.map((t) => (
              <Lnk key={t.href} className={`cy-tab${t.on ? ' on' : ''}`} href={t.href} aria-current={t.on ? 'page' : undefined}>{s(t.label)}</Lnk>
            ))}
          </nav>
          {me.signedIn && me.name && <Inbox path={path} />}
        </div>
      </section>

      <div className="cy-layout">
        <div className="cy-main">
          {about ? <About />
            : notifTab ? <Notifications me={me} />
            : msgTab ? <Messages me={me} peer={msgMatch?.[1] ?? null} />
            : calendarTab ? <Calendar me={me} />
            : membersTab ? <Members />
              : boards ? <Boards me={me} />
                : memberId ? <MemberView handle={memberId} me={me} />
                  : postId ? <PostView id={postId} me={me} /> : <Feed me={me} />}
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
  data: MeData | null
  admin: boolean
  authOff: boolean
  refresh: () => void
}

function useMember(): Me {
  const acc = useAccount()
  const [state, setState] = useState<{ name: string | null; data: MeData | null; admin: boolean; authOff: boolean }>({ name: null, data: null, admin: false, authOff: false })
  const load = useCallback(() => {
    if (!acc.signedIn) { setState({ name: null, data: null, admin: false, authOff: false }); return }
    void fetchMe().then((r) => {
      if (r.ok) setState({ name: r.data.member?.name ?? null, data: r.data.member, admin: r.data.admin, authOff: false })
      else setState({ name: null, data: null, admin: false, authOff: r.error === 'auth_off' })
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
  const [mentions] = useState(() => new Map<string, string>())
  const [poll, setPoll] = useState<string[] | null>(null)
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
    const opts = poll?.map((o) => o.trim()).filter(Boolean)
    const r = await createPost({ category: cat, title, body: encodeMentions(body, mentions), ...(opts && opts.length ? { poll: opts } : {}) })
    setBusy(false)
    if (!r.ok) { setError(r.error); if (r.error === 'join') me.refresh(); return }
    setTitle(''); setBody(''); setPoll(null); mentions.clear(); setOpen(false); setError(null)
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
      <MentionArea value={body} onChange={setBody} map={mentions} rows={6}
        placeholder={s(CT.write)} label={s(CT.postBody)}
        minLength={COMMUNITY_LIMITS.body.min} maxLength={COMMUNITY_LIMITS.body.max} />
      <p className="cy-hint">{s(CT.mediaHint)} {s(CT.mentionHint)}</p>
      <Media text={body} />
      {poll
        ? (
          <div className="cy-poll-edit">
            {poll.map((o, i) => (
              <input key={i} className="cy-inp" value={o} maxLength={80} placeholder={`${s(CT.pollOption)} ${i + 1}`} aria-label={`${s(CT.pollOption)} ${i + 1}`}
                onChange={(e) => setPoll(poll.map((x, j) => (j === i ? e.target.value : x)))} />
            ))}
            <div className="cy-poll-edit-acts">
              {poll.length < 6 && <button type="button" className="cy-act" onClick={() => setPoll([...poll, ''])}>{s(CT.addOption)}</button>}
              <button type="button" className="cy-act danger" onClick={() => setPoll(null)}>{s(CT.removePoll)}</button>
            </div>
          </div>
        )
        : <button type="button" className="cy-act cy-poll-add" onClick={() => setPoll(['', ''])}>{s(CT.addPoll)}</button>}
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-compose-acts">
        <button type="button" className="cc-btn cc-slate" onClick={() => setOpen(false)}>{s(CT.cancel)}</button>
        <button type="submit" className="gm-cta" disabled={busy}>{s(CT.publish)}</button>
      </div>
    </form>
  )
}

function JoinForm({ onJoined }: { onJoined: () => void }) {
  const { s, lang } = useSay()
  const [name, setName] = useState('')
  const [error, setError] = useState<CError | null>(null)
  return (
    <form className="cy-card cy-join" onSubmit={async (e) => {
      e.preventDefault()
      const r = await joinCommunity(name, lang)
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
  const [editing, setEditing] = useState(false)
  useEffect(() => setP(post), [post])
  const canAct = me.signedIn && !!me.name

  const like = async () => {
    if (!canAct) { if (!me.signedIn) signIn(); return }
    const r = await toggleLike('post', p.id)
    if (r.ok) setP({ ...p, liked: r.data.liked, likes: r.data.likes })
    else if (r.error === 'own') window.alert(say(CT.own, lang))
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
  // MODIFIER · depuis la publication ouverte seulement : la carte du fil ne
  // porte qu'un extrait, et on ne réécrit pas un texte qu'on ne voit pas.
  if (editing) return <EditPost post={p} onDone={(changed) => { setEditing(false); if (changed) onChange() }} />
  return (
    <article className={`cy-card cy-post${p.pinned ? ' pinned' : ''}`}>
      <header className="cy-post-head">
        <Avatar author={p.author} />
        <span className="cy-post-who">
          <AuthorName author={p.author} />
          <em><TimeAgo iso={p.createdAt} /> · {say(CATEGORY_LABEL[p.category], lang)}{p.edited ? ` · ${s(CT.edited)}` : ''}</em>
        </span>
        {p.pinned && <span className="cy-pin"><BauhausIcon name="star" size={12} /> {s(CT.pinned)}</span>}
      </header>
      {full
        ? <h2 className="cy-post-title">{p.title}</h2>
        : <h3 className="cy-post-title"><button className="cy-link" onClick={open}>{p.title}</button></h3>}
      <p className="cy-post-body"><RichText text={p.body} /></p>
      {p.truncated && !full && <button className="cy-link cy-read" onClick={open}>{s(CT.readMore)}</button>}
      <Media text={p.body} />
      {p.poll && <PollBox postId={p.id} poll={p.poll} me={me} />}
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
        {full && p.mine && <button className="cy-act" onClick={() => setEditing(true)}>{s(CT.edit)}</button>}
        {(p.mine || me.admin) && <button className="cy-act danger" onClick={del}>{s(CT.delete)}</button>}
      </footer>
    </article>
  )
}

function EditPost({ post, onDone }: { post: CPost; onDone: (changed: boolean) => void }) {
  const { s, lang } = useSay()
  const [cat, setCat] = useState<CommunityCategory>(post.category)
  const [title, setTitle] = useState(post.title)
  const [initial] = useState(() => decodeMentions(post.body))
  const [body, setBody] = useState(initial.text)
  const [error, setError] = useState<CError | null>(null)
  return (
    <form className="cy-card cy-compose" onSubmit={async (e) => {
      e.preventDefault()
      const r = await editItem({ type: 'post', id: post.id, category: cat, title, body: encodeMentions(body, initial.map) })
      if (!r.ok) { setError(r.error); return }
      onDone(true)
    }}>
      <div className="cy-compose-head">
        <b>{s(CT.edit)}</b>
        <select value={cat} onChange={(e) => setCat(e.target.value as CommunityCategory)} aria-label={s(CT.category)}>
          {COMMUNITY_CATEGORIES.map((c) => <option key={c} value={c}>{say(CATEGORY_LABEL[c], lang)}</option>)}
        </select>
      </div>
      <input className="cy-inp cy-title-inp" value={title} onChange={(e) => setTitle(e.target.value)} aria-label={s(CT.postTitle)}
        minLength={COMMUNITY_LIMITS.title.min} maxLength={COMMUNITY_LIMITS.title.max} required />
      <MentionArea value={body} onChange={setBody} map={initial.map} rows={8} label={s(CT.postBody)}
        minLength={COMMUNITY_LIMITS.body.min} maxLength={COMMUNITY_LIMITS.body.max} />
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-compose-acts">
        <button type="button" className="cc-btn cc-slate" onClick={() => onDone(false)}>{s(CT.cancel)}</button>
        <button type="submit" className="gm-cta">{s(CT.save)}</button>
      </div>
    </form>
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
  const [editing, setEditing] = useState(false)
  const [initial] = useState(() => decodeMentions(c.body))
  const [draft, setDraft] = useState(initial.text)
  useEffect(() => setX(c), [c])
  const canAct = me.signedIn && !!me.name
  const like = async () => {
    if (!canAct) { if (!me.signedIn) signIn(); return }
    const r = await toggleLike('comment', x.id)
    if (r.ok) setX({ ...x, liked: r.data.liked, likes: r.data.likes })
    else if (r.error === 'own') window.alert(say(CT.own, lang))
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
        <p className="cy-com-head">{x.author && <AuthorName author={x.author} />} <em><TimeAgo iso={x.createdAt} />{x.edited ? ` · ${s(CT.edited)}` : ''}</em></p>
        {editing
          ? (
            <form className="cy-cform" onSubmit={async (e) => {
              e.preventDefault()
              const r = await editItem({ type: 'comment', id: x.id, body: encodeMentions(draft, initial.map) })
              if (r.ok) { setEditing(false); onChange() }
            }}>
              <MentionArea value={draft} onChange={setDraft} map={initial.map} rows={2} label={s(CT.edit)} maxLength={COMMUNITY_LIMITS.comment.max} />
              <button className="cc-btn cc-slate" type="button" onClick={() => { setEditing(false); setDraft(initial.text) }}>{s(CT.cancel)}</button>
              <button className="gm-cta" type="submit">{s(CT.save)}</button>
            </form>
          )
          : <p className="cy-com-text"><RichText text={x.body} /></p>}
        <div className="cy-com-acts">
          <button className={`cy-act sm${x.liked ? ' on' : ''}`} onClick={like} aria-pressed={x.liked}>{s(CT.like)} · {x.likes}</button>
          {canAct && <button className="cy-act sm" onClick={() => setReplying((v) => !v)}>{s(CT.reply)}</button>}
          {x.mine && !editing && <button className="cy-act sm" onClick={() => setEditing(true)}>{s(CT.edit)}</button>}
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
  const [mentions] = useState(() => new Map<string, string>())
  const [error, setError] = useState<CError | null>(null)
  if (!me.signedIn) {
    return <button className="cc-btn cc-slate" onClick={signIn}>{s(CT.signInToPost)}</button>
  }
  if (!me.name) return <JoinForm onJoined={me.refresh} />
  return (
    <form className="cy-cform" onSubmit={async (e) => {
      e.preventDefault()
      const r = await createComment({ postId, parentId, body: encodeMentions(body, mentions) })
      if (!r.ok) { setError(r.error); return }
      setBody(''); mentions.clear(); setError(null); onSent()
    }}>
      <MentionArea value={body} onChange={setBody} map={mentions} rows={2}
        placeholder={s(CT.addComment)} label={s(CT.addComment)} maxLength={COMMUNITY_LIMITS.comment.max} />
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
/* LA CLOCHE ET LA MESSAGERIE                                          */
/* ------------------------------------------------------------------ */

/** LES NON-LUS · relus toutes les minutes tant que la page est visible, et à
 *  chaque changement d'écran de la communauté. Pas de connexion permanente :
 *  une minute de retard sur une notification ne coûte rien, un canal ouvert
 *  pour chaque visiteur coûte cher. */
function Inbox({ path }: { path: string }) {
  const { s } = useSay()
  const [n, setN] = useState({ notifications: 0, messages: 0 })
  useEffect(() => {
    let alive = true
    const tick = () => {
      if (document.visibilityState !== 'visible') return
      void fetchUnread().then((r) => { if (alive && r.ok) setN(r.data) })
    }
    tick()
    const id = window.setInterval(tick, 60000)
    return () => { alive = false; clearInterval(id) }
  }, [path])
  return (
    <div className="cy-inbox">
      <Lnk className={`cy-inbox-b${path === '/clan/notifications' ? ' on' : ''}`} href="/clan/notifications" aria-label={`${s(CT.notifications)} (${n.notifications})`}>
        <BauhausIcon name="target" size={18} />
        {n.notifications > 0 && <i>{n.notifications > 99 ? '99+' : n.notifications}</i>}
      </Lnk>
      <Lnk className={`cy-inbox-b${path.startsWith('/clan/messages') ? ' on' : ''}`} href="/clan/messages" aria-label={`${s(CT.messages)} (${n.messages})`}>
        <BauhausIcon name="envelope" size={18} />
        {n.messages > 0 && <i>{n.messages > 99 ? '99+' : n.messages}</i>}
      </Lnk>
    </div>
  )
}

const NOTIF_TEXT: Record<CNotification['kind'], Bi> = {
  comment: CT.nComment,
  reply: CT.nReply,
  like_post: CT.nLikePost,
  like_comment: CT.nLikeComment,
  mention: CT.nMention,
}

function Notifications({ me }: { me: Me }) {
  const { s } = useSay()
  const [list, setList] = useState<CNotification[] | null>(null)
  const [error, setError] = useState<CError | null>(null)
  useEffect(() => {
    if (!me.signedIn) return
    void fetchNotifications().then((r) => {
      if (!r.ok) { setError(r.error); return }
      setList(r.data.notifications)
      // LUES EN LES VOYANT · comme partout ailleurs.
      if (r.data.notifications.some((x) => !x.read)) void markNotificationsRead()
    })
  }, [me.signedIn])
  if (!me.signedIn) return <div className="cy-card"><p className="cy-sub">{s(CT.signInMessages)}</p><button className="gm-cta" onClick={signIn}>{s(CT.signIn)}</button></div>
  return (
    <div className="cy-card cy-notifs">
      <h2 className="pf-h2">{s(CT.notifications)}</h2>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      {list && list.length === 0 && <p className="cy-empty">{s(CT.noNotifications)}</p>}
      <ul>
        {(list || []).map((n) => (
          <li key={n.id} className={n.read ? '' : 'new'}>
            <Avatar author={{ name: n.actor.name, key: n.actor.handle }} small />
            <span className="cy-notif-t">
              <Lnk className="cy-name" href={`/clan/m/${n.actor.handle}`}><b>{n.actor.name}</b></Lnk> {s(NOTIF_TEXT[n.kind])}
              {n.postId && n.postTitle && <> · <Lnk href={`/clan/p/${n.postId}`}>{n.postTitle}</Lnk></>}
              <em><TimeAgo iso={n.createdAt} /></em>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Messages({ me, peer }: { me: Me; peer: string | null }) {
  const { s } = useSay()
  const [convs, setConvs] = useState<CConversation[] | null>(null)
  const [error, setError] = useState<CError | null>(null)
  const loadConvs = useCallback(() => {
    void fetchConversations().then((r) => { if (r.ok) setConvs(r.data.conversations); else setError(r.error) })
  }, [])
  useEffect(() => { if (me.signedIn) loadConvs() }, [me.signedIn, loadConvs, peer])
  if (!me.signedIn) return <div className="cy-card"><p className="cy-sub">{s(CT.signInMessages)}</p><button className="gm-cta" onClick={signIn}>{s(CT.signIn)}</button></div>
  return (
    <div className={`cy-card cy-dm${peer ? ' has-peer' : ''}`}>
      <div className="cy-dm-list">
        <h2 className="pf-h2">{s(CT.messages)}</h2>
        {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
        {convs && convs.length === 0 && <p className="cy-sub">{s(CT.noConversations)}</p>}
        <ul>
          {(convs || []).map((c) => (
            <li key={c.with.handle}>
              <Lnk className={`cy-conv${peer === c.with.handle ? ' on' : ''}`} href={`/clan/messages/${c.with.handle}`}>
                <Avatar author={{ name: c.with.name, key: c.with.handle, level: c.with.level }} small />
                <span className="cy-conv-t">
                  <b>{c.with.name}</b>
                  <em>{c.mineLast ? `${s(CT.you)} : ` : ''}{c.last}</em>
                </span>
                {c.unread > 0 && <i className="cy-conv-n">{c.unread}</i>}
              </Lnk>
            </li>
          ))}
        </ul>
      </div>
      <div className="cy-dm-thread">
        {peer ? <Thread handle={peer} onSent={loadConvs} /> : <p className="cy-empty">{s(CT.pickConversation)}</p>}
      </div>
    </div>
  )
}

function Thread({ handle, onSent }: { handle: string; onSent: () => void }) {
  const { s } = useSay()
  const [data, setData] = useState<{ with: Peer; messages: CMessage[] } | null>(null)
  const [body, setBody] = useState('')
  const [error, setError] = useState<CError | null>(null)
  const load = useCallback(() => {
    void fetchThread(handle).then((r) => { if (r.ok) { setData(r.data); setError(null) } else setError(r.error) })
  }, [handle])
  useEffect(() => {
    load()
    // LA CONVERSATION OUVERTE se relit toutes les quinze secondes.
    const id = window.setInterval(() => { if (document.visibilityState === 'visible') load() }, 15000)
    return () => clearInterval(id)
  }, [load])
  useEffect(() => {
    const el = document.querySelector('.cy-bubbles')
    if (el) el.scrollTop = el.scrollHeight
  }, [data])
  return (
    <>
      {data && (
        <header className="cy-dm-head">
          <Lnk className="cy-dm-back" href="/clan/messages" aria-label={s(CT.messages)}>←</Lnk>
          <Avatar author={{ name: data.with.name, key: data.with.handle, level: data.with.level }} small />
          <Lnk className="cy-name" href={`/clan/m/${data.with.handle}`}><b>{data.with.name}</b></Lnk>
        </header>
      )}
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-bubbles">
        {(data?.messages || []).map((m) => (
          <div key={m.id} className={`cy-bubble${m.mine ? ' mine' : ''}`}>
            <p>{m.body}</p>
            <em><TimeAgo iso={m.createdAt} /></em>
          </div>
        ))}
      </div>
      <form className="cy-dm-form" onSubmit={async (e) => {
        e.preventDefault()
        if (!body.trim()) return
        const r = await sendMessage(handle, body)
        if (!r.ok) { setError(r.error); return }
        setBody(''); load(); onSent()
      }}>
        <textarea className="cy-inp" rows={2} value={body} onChange={(e) => setBody(e.target.value)} placeholder={s(CT.yourMessage)}
          aria-label={s(CT.yourMessage)} maxLength={COMMUNITY_LIMITS.message.max}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); (e.currentTarget.form as HTMLFormElement).requestSubmit() } }} />
        <button className="gm-cta" type="submit">{s(CT.send)}</button>
      </form>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* LE CALENDRIER                                                       */
/* ------------------------------------------------------------------ */

const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`

function Calendar({ me }: { me: Me }) {
  const { s, lang } = useSay()
  const loc = lang === 'fr' ? 'fr-FR' : 'en-GB'
  const [month, setMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1) })
  const [events, setEvents] = useState<CEvent[]>([])
  const [upcoming, setUpcoming] = useState<CEvent[]>([])
  const [error, setError] = useState<CError | null>(null)
  const [adding, setAdding] = useState(false)

  const load = useCallback(() => {
    // LA GRILLE COMMENCE UN LUNDI · on charge de son premier à son dernier jour.
    const start = new Date(month); start.setDate(1 - ((month.getDay() + 6) % 7))
    const end = new Date(start); end.setDate(start.getDate() + 42)
    void fetchEvents(start, end).then((r) => { if (r.ok) { setEvents(r.data.events); setError(null) } else setError(r.error) })
    void fetchEvents(new Date(), new Date(Date.now() + 120 * 86400e3)).then((r) => { if (r.ok) setUpcoming(r.data.events.slice(0, 8)) })
  }, [month])
  useEffect(() => { load() }, [load])

  if (error === 'not_configured') return <div className="cy-card cy-off"><h2 className="pf-h2">{s(CT.offTitle)}</h2><p className="gm-lead">{s(CT.offBody)}</p></div>

  const first = new Date(month); first.setDate(1 - ((month.getDay() + 6) % 7))
  const days = Array.from({ length: 42 }, (_, i) => { const d = new Date(first); d.setDate(first.getDate() + i); return d })
  const byDay = new Map<string, CEvent[]>()
  for (const e of events) { const k = dayKey(new Date(e.startsAt)); byDay.set(k, [...(byDay.get(k) || []), e]) }
  const todayK = dayKey(new Date())
  const weekdays = Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(loc, { weekday: 'short' }).format(new Date(2024, 0, 1 + i)))
  const shift = (n: number) => setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1))

  return (
    <>
      <div className="cy-card cy-cal">
        <div className="cy-cal-head">
          <div>
            <h2 className="pf-h2">{s(CT.calH2)}</h2>
            <p className="cy-sub">{s(CT.calLead)}</p>
          </div>
          {me.admin && <button className="gm-cta cy-cal-add" onClick={() => setAdding((v) => !v)}>{s(CT.newEvent)}</button>}
        </div>
        {adding && <EventForm onDone={() => { setAdding(false); load() }} />}
        <div className="cy-cal-nav">
          <button className="cy-act" onClick={() => shift(-1)} aria-label={s(CT.prevMonth)}>←</button>
          <b>{new Intl.DateTimeFormat(loc, { month: 'long', year: 'numeric' }).format(month)}</b>
          <button className="cy-act" onClick={() => shift(1)} aria-label={s(CT.nextMonth)}>→</button>
          <button className="cy-act" onClick={() => { const d = new Date(); setMonth(new Date(d.getFullYear(), d.getMonth(), 1)) }}>{s(CT.today)}</button>
        </div>
        <div className="cy-grid" role="grid">
          {weekdays.map((w) => <span key={w} className="cy-wd">{w}</span>)}
          {days.map((d) => {
            const k = dayKey(d)
            const list = byDay.get(k) || []
            return (
              <div key={k} className={`cy-day${d.getMonth() !== month.getMonth() ? ' out' : ''}${k === todayK ? ' today' : ''}`}>
                <span className="cy-day-n">{d.getDate()}</span>
                {list.map((e) => (
                  <span key={e.id} className="cy-day-ev" title={e.title}>
                    {new Intl.DateTimeFormat(loc, { hour: '2-digit', minute: '2-digit' }).format(new Date(e.startsAt))} {e.title}
                  </span>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <h3 className="cy-h3">{s(CT.upcoming)}</h3>
      {upcoming.length === 0 && <p className="cy-empty">{s(CT.noEvents)}</p>}
      <div className="cy-list">
        {upcoming.map((e) => <EventCard key={e.id} e={e} admin={me.admin} onChange={load} />)}
      </div>
    </>
  )
}

function EventCard({ e, admin, onChange }: { e: CEvent; admin: boolean; onChange: () => void }) {
  const { s, lang } = useSay()
  const loc = lang === 'fr' ? 'fr-FR' : 'en-GB'
  const start = new Date(e.startsAt)
  const download = () => {
    const blob = new Blob([icsOf(e, location.origin)], { type: 'text/calendar' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'dojoburo-evenement.ics'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }
  const del = async () => {
    if (!window.confirm(say(CT.confirmDelete, lang))) return
    const r = await deleteEvent(e.id)
    if (r.ok) onChange()
  }
  return (
    <article className="cy-card cy-event">
      <div className="cy-event-date" aria-hidden="true">
        <b>{start.getDate()}</b>
        <span>{new Intl.DateTimeFormat(loc, { month: 'short' }).format(start)}</span>
      </div>
      <div className="cy-event-t">
        <h4>{e.title}</h4>
        <p className="cy-sub">
          {new Intl.DateTimeFormat(loc, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(start)} · {e.duration} {s(CT.minutes)}
        </p>
        {e.description && <p className="cy-event-d">{e.description}</p>}
        <div className="cy-event-acts">
          {e.link && <a className="gm-cta" href={e.link} target="_blank" rel="noopener noreferrer">{s(CT.joinLive)}</a>}
          <button className="cc-btn cc-slate" onClick={download}>{s(CT.addToCalendar)}</button>
          {admin && <button className="cy-act danger" onClick={del}>{s(CT.delete)}</button>}
        </div>
      </div>
    </article>
  )
}

function EventForm({ onDone }: { onDone: () => void }) {
  const { s } = useSay()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('18:00')
  const [duration, setDuration] = useState(60)
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState<CError | null>(null)
  return (
    <form className="cy-evform" onSubmit={async (ev) => {
      ev.preventDefault()
      // L'HEURE SAISIE EST CELLE DE L'ADMIN · convertie en UTC ici, et chaque
      // membre la relit dans son propre fuseau.
      const startsAt = new Date(`${date}T${time}`).toISOString()
      const r = await createEvent({ title, description, startsAt, duration, link })
      if (!r.ok) { setError(r.error); return }
      onDone()
    }}>
      <input className="cy-inp" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={s(CT.eventTitle)} aria-label={s(CT.eventTitle)} required minLength={3} maxLength={120} />
      <div className="cy-evform-row">
        <label><span>{s(CT.eventDate)}</span><input className="cy-inp" type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></label>
        <label><span>{s(CT.eventTime)}</span><input className="cy-inp" type="time" value={time} onChange={(e) => setTime(e.target.value)} required /></label>
        <label><span>{s(CT.eventDuration)}</span><input className="cy-inp" type="number" min={15} max={480} step={15} value={duration} onChange={(e) => setDuration(Number(e.target.value))} /></label>
      </div>
      <input className="cy-inp" type="url" value={link} onChange={(e) => setLink(e.target.value)} placeholder={s(CT.eventLink)} aria-label={s(CT.eventLink)} pattern="https://.*" />
      <textarea className="cy-inp" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={s(CT.eventDesc)} aria-label={s(CT.eventDesc)} maxLength={2000} />
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-compose-acts">
        <button type="button" className="cc-btn cc-slate" onClick={onDone}>{s(CT.cancel)}</button>
        <button type="submit" className="gm-cta">{s(CT.create)}</button>
      </div>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* LES MEMBRES                                                         */
/* ------------------------------------------------------------------ */

function Members() {
  const { s, lang } = useSay()
  const [list, setList] = useState<CMember[]>([])
  const [page, setPage] = useState(0)
  const [more, setMore] = useState(false)
  const [total, setTotal] = useState(0)
  const [q, setQ] = useState('')
  const [query, setQuery] = useState('')
  const [error, setError] = useState<CError | null>(null)

  const load = useCallback((p: number) => {
    void fetchMembers(p, query).then((r) => {
      if (!r.ok) { setError(r.error); return }
      setError(null)
      setList((prev) => (p ? [...prev, ...r.data.members] : r.data.members))
      setMore(r.data.more); setTotal(r.data.total); setPage(p)
    })
  }, [query])
  useEffect(() => { load(0) }, [load])

  if (error === 'not_configured') return <div className="cy-card cy-off"><h2 className="pf-h2">{s(CT.offTitle)}</h2><p className="gm-lead">{s(CT.offBody)}</p></div>
  return (
    <div className="cy-card cy-members">
      <div className="cy-members-head">
        <h2 className="pf-h2">{s(CT.membersH2)} <span className="pf-of">{total} {s(CT.membersCount)}</span></h2>
        <form className="cy-search" role="search" onSubmit={(e) => { e.preventDefault(); setQuery(q.trim()) }}>
          <BauhausIcon name="target" size={16} />
          <input type="search" value={q} onChange={(e) => { setQ(e.target.value); if (!e.target.value) setQuery('') }}
            placeholder={s(CT.searchMembers)} aria-label={s(CT.searchMembers)} />
        </form>
      </div>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      {list.length === 0 && !error && <p className="cy-empty">{s(CT.noMembers)}</p>}
      <ul className="cy-mlist">
        {list.map((m) => (
          <li key={m.handle}>
            <Lnk className="cy-mrow" href={`/clan/m/${m.handle}`}>
              <Avatar author={{ name: m.name, key: m.handle, level: m.level }} />
              <span className="cy-mrow-t">
                <b>{m.name} {m.online && <i className="cy-online" title={s(CT.online)}><span>{s(CT.online)}</span></i>}</b>
                {m.bio && <em>{m.bio}</em>}
                <small>{s(CT.level)} {m.level} · {m.points} {s(CT.points)} · {s(CT.joined)} <DateOnly iso={m.joinedAt} lang={lang} /></small>
              </span>
            </Lnk>
          </li>
        ))}
      </ul>
      {more && <button className="cc-btn cc-slate cy-more" onClick={() => load(page + 1)}>{s(CT.more)}</button>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LES CLASSEMENTS                                                     */
/* ------------------------------------------------------------------ */

function Boards({ me }: { me: Me }) {
  const { s } = useSay()
  const [data, setData] = useState<{ week: BoardRow[]; month: BoardRow[]; all: BoardRow[]; me: { points: number; level: number; next: number | null } | null } | null>(null)
  const [error, setError] = useState<CError | null>(null)
  useEffect(() => { void fetchLeaderboard().then((r) => { if (r.ok) setData(r.data); else setError(r.error) }) }, [me.signedIn])

  if (error === 'not_configured') return <div className="cy-card cy-off"><h2 className="pf-h2">{s(CT.offTitle)}</h2><p className="gm-lead">{s(CT.offBody)}</p></div>
  const mine = data?.me
  return (
    <>
      <div className="cy-card cy-mylevel">
        <div className="cy-mylevel-l">
          {me.data
            ? <Avatar author={{ name: me.data.name, key: me.data.handle, level: me.data.level }} big />
            : <span className="cy-av big ghost" aria-hidden="true"><BauhausIcon name="smile" size={28} /></span>}
          <div>
            <h2 className="pf-h2">{s(CT.boardsH2)}</h2>
            <p className="cy-sub">{s(CT.boardsLead)}</p>
            {mine && (
              <p className="cy-mylevel-n">
                <b>{s(CT.yourLevel)} {mine.level}</b> · {mine.points} {s(CT.points)}
                {mine.next !== null ? ` · ${mine.next - mine.points} ${s(CT.toNext)} ${mine.level + 1}` : ` · ${s(CT.maxLevel)}`}
              </p>
            )}
          </div>
        </div>
        <ol className="cy-levels" aria-label={s(CT.levelsH3)}>
          {LEVEL_POINTS.map((pts, i) => (
            <li key={i} className={mine && mine.level === i + 1 ? 'on' : mine && mine.level > i + 1 ? 'got' : ''}>
              <b>{i + 1}</b><span>{s(CT.fromPoints)} {pts}</span>
            </li>
          ))}
        </ol>
      </div>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      {data && (
        <div className="cy-boards">
          <Board title={CT.week} rows={data.week} />
          <Board title={CT.month} rows={data.month} />
          <Board title={CT.allTime} rows={data.all} />
        </div>
      )}
    </>
  )
}

function Board({ title, rows }: { title: Bi; rows: BoardRow[] }) {
  const { s } = useSay()
  return (
    <div className="cy-card cy-board">
      <h3>{s(title)}</h3>
      {rows.length === 0 && <p className="cy-sub">{s(CT.noBoard)}</p>}
      <ol>
        {rows.map((r, i) => (
          <li key={r.handle}>
            <span className={`cy-rank r${i + 1}`}>{i + 1}</span>
            <Avatar author={{ name: r.name, key: r.handle, level: r.level }} small />
            <Lnk className="cy-name" href={`/clan/m/${r.handle}`}><b>{r.name}</b></Lnk>
            <span className="cy-pts">+{r.points}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LE PROFIL D'UN MEMBRE                                               */
/* ------------------------------------------------------------------ */

function MemberView({ handle, me }: { handle: string; me: Me }) {
  const { s, lang } = useSay()
  const [data, setData] = useState<{ member: CMember & { posts: number; comments: number; me: boolean }; posts: CPost[] } | null>(null)
  const [error, setError] = useState<CError | null>(null)
  const [editing, setEditing] = useState(false)
  const load = useCallback(() => {
    void fetchMember(handle).then((r) => { if (r.ok) { setData(r.data); setError(null) } else setError(r.error) })
  }, [handle])
  useEffect(() => { load() }, [load])

  if (error) return <p className="cy-err" role="alert">{s(errorText(error))}</p>
  if (!data) return <p className="cy-empty">{s(CT.loading)}</p>
  const m = data.member
  return (
    <>
      <div className="cy-card cy-profile">
        <Avatar author={{ name: m.name, key: m.handle, level: m.level }} big />
        <div className="cy-profile-t">
          <h2 className="pf-h2">{m.name} {m.online && <i className="cy-online"><span>{s(CT.online)}</span></i>}</h2>
          {m.bio && <p className="cy-profile-bio">{m.bio}</p>}
          <p className="cy-sub">{s(CT.joined)} <DateOnly iso={m.joinedAt} lang={lang} /></p>
          <ul className="cy-profile-nums">
            <li><b>{m.level}</b><span>{s(CT.level)}</span></li>
            <li><b>{m.points}</b><span>{s(CT.points)}</span></li>
            <li><b>{m.posts}</b><span>{s(CT.profilePosts)}</span></li>
            <li><b>{m.comments}</b><span>{s(CT.profileComments)}</span></li>
          </ul>
          {m.me && !editing && <button className="cc-btn cc-slate" onClick={() => setEditing(true)}>{s(CT.editProfile)}</button>}
          {!m.me && me.signedIn && me.name && <Lnk className="gm-cta" href={`/clan/messages/${m.handle}`}>{s(CT.writeTo)}</Lnk>}
        </div>
      </div>
      {m.me && editing && <ProfileForm initial={{ name: m.name, bio: m.bio, emailNotify: me.data?.emailNotify ?? true }} onDone={() => { setEditing(false); load(); me.refresh() }} />}
      <h3 className="cy-h3">{s(CT.profilePosts)}</h3>
      {data.posts.length === 0 && <p className="cy-empty">{s(CT.noPosts)}</p>}
      <div className="cy-list">
        {data.posts.map((p) => <PostCard key={p.id} post={p} me={me} onChange={load} />)}
      </div>
    </>
  )
}

function ProfileForm({ initial, onDone }: { initial: { name: string; bio: string; emailNotify: boolean }; onDone: () => void }) {
  const { s, lang } = useSay()
  const [name, setName] = useState(initial.name)
  const [bio, setBio] = useState(initial.bio)
  const [mail, setMail] = useState(initial.emailNotify)
  const [error, setError] = useState<CError | null>(null)
  return (
    <form className="cy-card cy-compose" onSubmit={async (e) => {
      e.preventDefault()
      const r = await editProfile({ name, bio, emailNotify: mail, lang })
      if (!r.ok) { setError(r.error); return }
      onDone()
    }}>
      <input className="cy-inp" value={name} onChange={(e) => setName(e.target.value)} aria-label={s(CT.joinPlace)}
        minLength={COMMUNITY_LIMITS.name.min} maxLength={COMMUNITY_LIMITS.name.max} required />
      <textarea className="cy-inp" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} placeholder={s(CT.bio)} aria-label={s(CT.bio)}
        maxLength={COMMUNITY_LIMITS.bio.max} />
      <label className="ae-news">
        <input type="checkbox" checked={mail} onChange={(e) => setMail(e.target.checked)} />
        <span>{s(CT.emailNotify)}</span>
      </label>
      {error && <p className="cy-err" role="alert">{s(errorText(error))}</p>}
      <div className="cy-compose-acts">
        <button type="button" className="cc-btn cc-slate" onClick={onDone}>{s(CT.cancel)}</button>
        <button type="submit" className="gm-cta">{s(CT.save)}</button>
      </div>
    </form>
  )
}

function DateOnly({ iso, lang }: { iso: string; lang: string }) {
  return <time dateTime={iso}>{new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.parse(iso))}</time>
}

/* ------------------------------------------------------------------ */
/* LES MENTIONS ET LES SONDAGES                                        */
/* ------------------------------------------------------------------ */

/** LE TEXTE D'UN MEMBRE · du texte, et les mentions en liens vers les profils
 *  (l'identifiant a été vérifié par l'expression, jamais pris tel quel). */
function RichText({ text }: { text: string }) {
  const parts: (string | { name: string; handle: string })[] = []
  let last = 0
  for (const m of text.matchAll(new RegExp(MENTION_TOKEN.source, 'gi'))) {
    parts.push(text.slice(last, m.index))
    parts.push({ name: m[1], handle: m[2] })
    last = (m.index ?? 0) + m[0].length
  }
  parts.push(text.slice(last))
  return <>{parts.map((x, i) => (typeof x === 'string' ? x : <Lnk key={i} className="cy-mention" href={`/clan/m/${x.handle}`}>@{x.name}</Lnk>))}</>
}

/** LA ZONE DE TEXTE À MENTIONS · « @ » suivi de quelques lettres propose les
 *  membres ; choisir l'un d'eux écrit son nom et retient son identifiant. */
function MentionArea({ value, onChange, map, rows, placeholder, label, minLength, maxLength }: {
  value: string
  onChange: (v: string) => void
  map: Map<string, string>
  rows: number
  placeholder?: string
  label: string
  minLength?: number
  maxLength?: number
}) {
  const [query, setQuery] = useState<string | null>(null)
  const [list, setList] = useState<CMember[]>([])
  const [ref, setRef] = useState<HTMLTextAreaElement | null>(null)
  useEffect(() => {
    if (query === null || query.length < 1) { setList([]); return }
    const id = window.setTimeout(() => {
      void fetchMembers(0, query).then((r) => { if (r.ok) setList(r.data.members.slice(0, 5)) })
    }, 200)
    return () => clearTimeout(id)
  }, [query])
  const detect = (text: string, caret: number) => {
    const m = text.slice(0, caret).match(/(?:^|\s)@([\p{L}\p{N}_.-]{1,32})$/u)
    setQuery(m ? m[1] : null)
  }
  const pick = (m: CMember) => {
    if (!ref) return
    const caret = ref.selectionStart
    const before = value.slice(0, caret).replace(/@[\p{L}\p{N}_.-]{1,32}$/u, `@${m.name} `)
    map.set(m.name, m.handle)
    onChange(before + value.slice(caret))
    setQuery(null)
    requestAnimationFrame(() => { ref.focus(); ref.selectionStart = ref.selectionEnd = before.length })
  }
  return (
    <div className="cy-mention-wrap">
      <textarea ref={setRef} className="cy-inp" rows={rows} value={value} placeholder={placeholder} aria-label={label}
        minLength={minLength} maxLength={maxLength} required
        onChange={(e) => { onChange(e.target.value); detect(e.target.value, e.target.selectionStart) }}
        onKeyDown={(e) => { if (e.key === 'Escape') setQuery(null) }} />
      {query !== null && list.length > 0 && (
        <ul className="cy-suggest" role="listbox">
          {list.map((m) => (
            <li key={m.handle}>
              <button type="button" role="option" aria-selected="false" onMouseDown={(e) => { e.preventDefault(); pick(m) }}>
                <Avatar author={{ name: m.name, key: m.handle, level: m.level }} small />
                <b>{m.name}</b>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** LE SONDAGE · voter d'un clic, changer d'avis d'un autre, retirer son vote. */
function PollBox({ postId, poll, me }: { postId: string; poll: PollView; me: Me }) {
  const { s, lang } = useSay()
  const [p, setP] = useState(poll)
  useEffect(() => setP(poll), [poll])
  const voted = p.mine !== null
  const choose = async (i: number) => {
    if (!me.signedIn) { signIn(); return }
    if (!me.name) return
    const r = await votePoll(postId, i)
    if (r.ok) setP(r.data.poll)
  }
  return (
    <div className="cy-poll">
      {p.options.map((o, i) => {
        const pct = p.total ? Math.round((p.counts[i] / p.total) * 100) : 0
        return (
          <button key={i} className={`cy-poll-opt${p.mine === i ? ' mine' : ''}${voted ? ' shown' : ''}`} onClick={() => choose(i)} aria-pressed={p.mine === i}>
            {voted && <i style={{ width: `${pct}%` }} aria-hidden="true" />}
            <span>{o}</span>
            {voted && <b>{pct}{lang === 'fr' ? ' %' : '%'}</b>}
          </button>
        )
      })}
      <p className="cy-poll-foot">
        {p.total} {p.total === 1 ? s(CT.vote1) : s(CT.votes)}
        {voted && <> · <button className="cy-link" onClick={() => choose(-1)}>{s(CT.unvote)}</button></>}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LES MÉDIAS INTÉGRÉS · chargés au clic (voir lib/embeds)              */
/* ------------------------------------------------------------------ */

function Media({ text }: { text: string }) {
  const list = embedsIn(text)
  if (!list.length) return null
  return <div className="cy-media">{list.map((e) => <EmbedBox key={e.src} e={e} />)}</div>
}

function EmbedBox({ e }: { e: Embed }) {
  const { s } = useSay()
  const [on, setOn] = useState(false)
  if (on) {
    return (
      <div className={`cy-embed${e.tall ? ' tall' : ''}`}>
        <iframe
          src={e.src}
          title={EMBED_LABEL[e.kind]}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    // PAS DE VIGNETTE DISTANTE · même l'image d'aperçu d'une vidéo est une
    // requête vers le service : la façade reste à nous jusqu'au clic.
    <button className={`cy-embed cy-facade${e.tall ? ' tall' : ''} k-${e.kind}`} onClick={() => setOn(true)}>
      <span className="cy-facade-play" aria-hidden="true"><BauhausIcon name="play" size={22} /></span>
      <span className="cy-facade-t">
        <b>{s(CT.mediaPlay)} {EMBED_LABEL[e.kind]}</b>
        <em>{s(CT.mediaPrivacy)}</em>
      </span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* PETITS MORCEAUX                                                     */
/* ------------------------------------------------------------------ */

const AV_COLORS = ['#7c3aed', '#db2777', '#0891b2', '#16a34a', '#ea580c', '#4f46e5', '#b45309', '#0d9488']

/** L'AVATAR · l'initiale sur une couleur tirée du compte, et le niveau du
 *  membre en pastille, comme sur Skool. */
function Avatar({ author, small = false, big = false }: { author: Author; small?: boolean; big?: boolean }) {
  let h = 0
  for (const ch of author.key) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return (
    <span className={`cy-av${small ? ' sm' : ''}${big ? ' big' : ''}`} style={{ background: AV_COLORS[h % AV_COLORS.length] }} aria-hidden="true">
      {(author.name.trim()[0] || '·').toUpperCase()}
      {author.level ? <i className="cy-lv">{author.level}</i> : null}
    </span>
  )
}

/** Le nom d'un auteur · un lien vers son profil quand on le connaît. */
function AuthorName({ author }: { author: Author }) {
  return author.handle
    ? <Lnk className="cy-name" href={`/clan/m/${author.handle}`}><b>{author.name}</b></Lnk>
    : <b>{author.name}</b>
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
