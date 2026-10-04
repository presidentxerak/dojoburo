// L'ESPACE ADMIN · LA NEWSLETTER DE LA SEMAINE · demandé : « Dans l'espace
// admin de l'administrateur on va créer une newsletter hebdomadaire qui parle
// d'une formation et de 5 news tirées de l'app que l'on peut exporter ensuite
// au format pour copier coller son contenu via Substack ou par mail ».
//
// Réservé à l'administrateur : le serveur seul dit si le compte l'est (voir
// api/_lib/admins, rendu par /api/community?action=me). L'outil ne lit que des
// contenus publics de l'app et n'envoie rien : il prépare le texte à copier.
import { useEffect, useMemo, useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { SITE } from '../lib/headTags'
import { useLang } from '../i18n'
import { B, say, type Bi } from '../data/bilingual'
import { PACKS } from '../data/packs'
import { WEEKS, type NewsItem } from '../data/news'
import { useAccount, signIn } from '../lib/account'
import { fetchMe } from '../lib/community'
import { useVideoCredits } from '../lib/videoCredits'
import { buildLetter, courseOfWeek, defaultIntro, type Lang } from '../admin/weeklyLetter'
import { Shell } from './Shell'

const AT = {
  title: B('Weekly newsletter', 'Newsletter de la semaine'),
  lead: B('One course and five AI news items taken from the app, ready to paste into Substack or an email.',
    'Une formation et cinq nouveautés IA tirées de l\'app, prêtes à coller dans Substack ou dans un e-mail.'),
  checking: B('Checking your access...', 'Vérification de votre accès...'),
  denied: B('This space is reserved for the administrator.', 'Cet espace est réservé à l\'administrateur.'),
  signIn: B('Sign in', 'Se connecter'),
  lang: B('Language of the newsletter', 'Langue de la newsletter'),
  edition: B('News edition', 'Édition des nouveautés'),
  weekOf: B('Week of', 'Semaine du'),
  course: B('Course of the week', 'Formation de la semaine'),
  news: B('Pick 5 news items', 'Choisissez 5 nouveautés'),
  picked: B('selected', 'sélectionnées'),
  needFive: B('Pick exactly 5 news items.', 'Sélectionnez exactement 5 nouveautés.'),
  intro: B('Introduction', 'Introduction'),
  reset: B('Reset the introduction', 'Rétablir l\'introduction'),
  subject: B('Subject', 'Objet'),
  preheader: B('Preview text', 'Texte d\'aperçu'),
  export: B('Export', 'Exporter'),
  tabSubstack: B('Substack (Markdown)', 'Substack (Markdown)'),
  tabMail: B('Email (HTML)', 'E-mail (HTML)'),
  tabText: B('Plain text', 'Texte brut'),
  copyRich: B('Copy formatted (for Substack or Gmail)', 'Copier mis en forme (pour Substack ou Gmail)'),
  copy: B('Copy', 'Copier'),
  copied: B('Copied', 'Copié'),
  preview: B('Preview', 'Aperçu'),
  video: B('Video', 'Vidéo'),
  admin: B('Admin space', 'Espace admin'),
  how: B('In Substack, open a new post and paste: the formatted copy keeps titles, links and the button. For an email, paste the formatted copy into your mail client, or use the HTML code in your sending tool.',
    'Dans Substack, ouvrez un nouvel article et collez : la copie mise en forme garde les titres, les liens et le bouton. Pour un e-mail, collez la copie mise en forme dans votre messagerie, ou utilisez le code HTML dans votre outil d\'envoi.'),
}

type Tab = 'substack' | 'mail' | 'text'

function useAdmin(): 'checking' | 'yes' | 'no' {
  const acc = useAccount()
  const [st, setSt] = useState<'checking' | 'yes' | 'no'>('checking')
  useEffect(() => {
    if (!acc.signedIn) { setSt('no'); return }
    let live = true
    void fetchMe().then((r) => { if (live) setSt(r.ok && r.data.admin ? 'yes' : 'no') })
    return () => { live = false }
  }, [acc.signedIn])
  return st
}

function CopyButton({ label, onCopy }: { label: string; onCopy: () => Promise<void> }) {
  const lang = useLang()
  const [done, setDone] = useState(false)
  return (
    <button className="cc-btn cc-violet ad-copy" onClick={() => { void onCopy().then(() => { setDone(true); setTimeout(() => setDone(false), 1800) }).catch(() => {}) }}>
      {done ? <><BauhausIcon name="check" size={12} /> {say(AT.copied, lang)}</> : label}
    </button>
  )
}

function Composer() {
  const ui = useLang()
  const s = (b: Bi) => say(b, ui)
  const [lang, setLang] = useState<Lang>(ui === 'en' ? 'en' : 'fr')
  const [week, setWeek] = useState(WEEKS[0]?.week ?? '')
  const edition = WEEKS.find((w) => w.week === week) ?? WEEKS[0]
  const items: NewsItem[] = edition?.items ?? []
  const [packId, setPackId] = useState(() => courseOfWeek(PACKS, week).id)
  const pack = PACKS.find((p) => p.id === packId) ?? PACKS[0]
  const [picked, setPicked] = useState<string[]>(() => items.slice(0, 5).map((n) => n.id))
  const [intro, setIntro] = useState(() => defaultIntro(pack, week, lang))
  const [introEdited, setIntroEdited] = useState(false)
  const [tab, setTab] = useState<Tab>('substack')
  // une nouvelle édition choisie · on repart de ses 5 premières nouvelles
  useEffect(() => { setPicked(items.slice(0, 5).map((n) => n.id)) }, [week])
  // l'introduction suit la formation, la semaine et la langue tant qu'on ne l'a pas réécrite
  useEffect(() => { if (!introEdited) setIntro(defaultIntro(pack, week, lang)) }, [packId, week, lang, introEdited])

  const news = items.filter((n) => picked.includes(n.id))
  const credits = useVideoCredits(news.filter((n) => n.videoId).map((n) => n.videoId!))
  const letter = useMemo(() => buildLetter({
    pack, news, week, intro, lang, site: SITE,
    channelOf: (n) => (n.videoId ? credits[n.videoId]?.author ?? '' : ''),
  }), [pack, news.map((n) => n.id).join(','), week, intro, lang, credits])

  const toggle = (id: string) => setPicked((v) => (v.includes(id) ? v.filter((x) => x !== id) : v.length >= 5 ? v : [...v, id]))
  const copyText = (t: string) => navigator.clipboard.writeText(t)
  const copyRich = async () => {
    // LA COPIE MISE EN FORME · Substack et Gmail gardent titres, liens et bouton
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
      await navigator.clipboard.write([new ClipboardItem({
        'text/html': new Blob([letter.html], { type: 'text/html' }),
        'text/plain': new Blob([letter.text], { type: 'text/plain' }),
      })])
    } else await navigator.clipboard.writeText(letter.html)
  }
  const body = tab === 'substack' ? letter.markdown : tab === 'mail' ? letter.html : letter.text

  return (
    <>
      <section className="gm-sec ad-grid">
        <div className="cy-card ad-panel">
          <label className="ad-field">
            <span>{s(AT.lang)}</span>
            <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </label>
          <label className="ad-field">
            <span>{s(AT.edition)}</span>
            <select value={week} onChange={(e) => setWeek(e.target.value)}>
              {WEEKS.map((w) => <option key={w.week} value={w.week}>{s(AT.weekOf)} {w.week}</option>)}
            </select>
          </label>
          <label className="ad-field">
            <span>{s(AT.course)}</span>
            <select value={packId} onChange={(e) => setPackId(e.target.value)}>
              {PACKS.map((p) => <option key={p.id} value={p.id}>{say(p.title, lang)}</option>)}
            </select>
          </label>
          <fieldset className="ad-news">
            <legend>{s(AT.news)} · {picked.length} / 5 {s(AT.picked)}</legend>
            {items.map((n) => (
              <label key={n.id} className={picked.includes(n.id) ? 'on' : ''}>
                <input type="checkbox" checked={picked.includes(n.id)} disabled={!picked.includes(n.id) && picked.length >= 5} onChange={() => toggle(n.id)} />
                <span><b>{n.kind === 'video' ? `${s(AT.video)} · ` : ''}{n.title}</b><small>{n.source || 'YouTube'}</small></span>
              </label>
            ))}
            {picked.length !== 5 && <p className="ad-warn">{s(AT.needFive)}</p>}
          </fieldset>
          <label className="ad-field">
            <span>{s(AT.intro)}</span>
            <textarea rows={4} value={intro} onChange={(e) => { setIntro(e.target.value); setIntroEdited(true) }} />
          </label>
          {introEdited && <button className="cc-btn cc-slate" onClick={() => setIntroEdited(false)}>{s(AT.reset)}</button>}
        </div>

        <div className="cy-card ad-panel">
          <p className="ad-meta"><b>{s(AT.subject)} :</b> {letter.subject} <CopyButton label={s(AT.copy)} onCopy={() => copyText(letter.subject)} /></p>
          <p className="ad-meta"><b>{s(AT.preheader)} :</b> {letter.preheader}</p>
          <h2 className="ln-h2">{s(AT.export)}</h2>
          <div className="ad-tabs" role="tablist">
            {(['substack', 'mail', 'text'] as Tab[]).map((k) => (
              <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>
                {s(k === 'substack' ? AT.tabSubstack : k === 'mail' ? AT.tabMail : AT.tabText)}
              </button>
            ))}
          </div>
          <div className="ad-actions">
            <CopyButton label={s(AT.copyRich)} onCopy={copyRich} />
            <CopyButton label={`${s(AT.copy)} · ${s(tab === 'substack' ? AT.tabSubstack : tab === 'mail' ? AT.tabMail : AT.tabText)}`} onCopy={() => copyText(body)} />
          </div>
          <textarea className="ad-out" readOnly rows={12} value={body} />
          <p className="ad-how">{s(AT.how)}</p>
          <h2 className="ln-h2">{s(AT.preview)}</h2>
          {/* L'APERÇU · le HTML est construit par buildLetter, chaque texte échappé */}
          <div className="ad-preview" dangerouslySetInnerHTML={{ __html: letter.html }} />
        </div>
      </section>
    </>
  )
}

export function AdminNewsletterPage() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const admin = useAdmin()
  const acc = useAccount()
  useHeadTags({ title: `${s(AT.title)} · Dojoburo`, description: s(AT.lead), path: '/admin/newsletter' })
  return (
    <Shell wide>
      <section className="gm-sec">
        <h1 className="gm-h1">{s(AT.title)}</h1>
        <p className="gm-lead">{s(AT.lead)}</p>
      </section>
      {admin === 'yes' ? <Composer /> : (
        <section className="gm-sec">
          <div className="cy-card">
            <p>{admin === 'checking' ? s(AT.checking) : s(AT.denied)}</p>
            {admin === 'no' && !acc.signedIn && acc.enabled && <button className="gm-cta" onClick={() => signIn()}>{s(AT.signIn)}</button>}
          </div>
        </section>
      )}
    </Shell>
  )
}
