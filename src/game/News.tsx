// LA PAGE DES NOUVEAUTÉS IA · demandé : « créé la page des news IA [...] fais
// juste une card du résumé de la news qui mène au vrai article avec les
// crédits et le nom de la source. Les news peuvent être des vidéos Youtube (en
// anglais) ou des articles ».
//
// Une édition par semaine (data/news), mise à jour chaque lundi. Chaque carte
// porte notre résumé, la source nommée, l'auteur quand il est connu, et un
// lien vers l'original. Pour une vidéo, la chaîne est lue chez YouTube par
// notre serveur (lib/videoCredits) : rien ne part vers YouTube avant le clic.
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { B, say, type Bi } from '../data/bilingual'
import { WEEKS, weekEnd, type NewsItem, type NewsWeek } from '../data/news'
import { useVideoCredits, type Credit } from '../lib/videoCredits'
import { Shell } from './Shell'
import { SupportBot } from '../components/SupportBot'

export const NT = {
  title: B('AI news', 'Nouveautés IA'),
  lead: B('Every Monday, a selection of the week\'s AI news, summed up in a few lines, with a link to the original article or video and the name of its source.',
    'Chaque lundi, une sélection des nouveautés IA de la semaine, résumées en quelques lignes, avec le lien vers l\'article ou la vidéo d\'origine et le nom de sa source.'),
  week: B('Week of', 'Semaine du'),
  to: B('to', 'au'),
  article: B('Article', 'Article'),
  video: B('Video', 'Vidéo'),
  read: B('Read the article', 'Lire l\'article'),
  watch: B('Watch the video', 'Voir la vidéo'),
  source: B('Source', 'Source'),
  by: B('by', 'par'),
  channel: B('YouTube channel', 'Chaîne YouTube'),
  inEn: B('in English', 'en anglais'),
  inFr: B('in French', 'en français'),
  past: B('Previous weeks', 'Les semaines précédentes'),
  empty: B('The first edition comes out on Monday.', 'La première édition paraît lundi.'),
  learn: B('To go further, the courses teach you how to use these tools in your work.', 'Pour aller plus loin, les formations vous apprennent à utiliser ces outils dans votre travail.'),
  courses: B('See the courses', 'Voir les formations'),
}

const fmt = (iso: string, lang: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

/** LA CARTE D'UNE NOUVELLE · le résumé, les crédits, le lien vers l'original */
function NewsCard({ n, credit }: { n: NewsItem; credit: Credit }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const video = n.kind === 'video'
  const source = video ? (credit?.author || n.source) : n.source
  return (
    <article className={`nw-card${video ? ' is-video' : ''}`}>
      <div className="nw-card-top">
        <span className="nw-kind"><BauhausIcon name={video ? 'play' : 'pen'} size={11} /> {s(video ? NT.video : NT.article)}</span>
        {n.date && <time dateTime={n.date}>{fmt(n.date, lang)}</time>}
      </div>
      <h3 className="nw-title" lang={n.lang}>{n.title}</h3>
      <p className="nw-sum">{s(n.summary)}</p>
      {/* LES CRÉDITS · la source toujours nommée, l'auteur quand il est connu */}
      <p className="nw-credit">
        {s(NT.source)} :{' '}
        {video && credit?.url
          ? <a href={credit.url} target="_blank" rel="noopener noreferrer">{source}</a>
          : <b>{source || s(NT.channel)}</b>}
        {n.author && <> · {s(NT.by)} {n.author}</>}
        {' · '}{n.lang === 'en' ? s(NT.inEn) : s(NT.inFr)}
      </p>
      <a className="nw-go" href={n.url} target="_blank" rel="noopener noreferrer">
        {s(video ? NT.watch : NT.read)} <BauhausIcon name="play" size={10} />
      </a>
    </article>
  )
}

function Week({ w, open }: { w: NewsWeek; open: boolean }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const credits = useVideoCredits(open ? w.items.filter((n) => n.videoId).map((n) => n.videoId!) : [])
  const head = `${s(NT.week)} ${fmt(w.week, lang)} ${s(NT.to)} ${fmt(weekEnd(w.week), lang)}`
  const grid = (
    <div className="nw-grid">
      {w.items.map((n) => <NewsCard key={n.id} n={n} credit={n.videoId ? credits[n.videoId] ?? null : null} />)}
    </div>
  )
  if (open) {
    return (
      <section className="gm-sec">
        <h2 className="nw-week">{head}</h2>
        <p className="gm-lead">{s(w.intro)}</p>
        {grid}
      </section>
    )
  }
  return (
    <details className="nw-past">
      <summary>{head}</summary>
      <p className="gm-lead">{s(w.intro)}</p>
      <PastGrid w={w} />
    </details>
  )
}

/** une semaine passée · ses crédits ne se chargent qu'une fois dépliée */
function PastGrid({ w }: { w: NewsWeek }) {
  const credits = useVideoCredits(w.items.filter((n) => n.videoId).map((n) => n.videoId!))
  return (
    <div className="nw-grid">
      {w.items.map((n) => <NewsCard key={n.id} n={n} credit={n.videoId ? credits[n.videoId] ?? null : null} />)}
    </div>
  )
}

export function NewsPage() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  useHeadTags({ title: `${s(NT.title)} · Dojoburo`, description: s(NT.lead), path: '/nouveautes' })
  const [latest, ...past] = WEEKS
  return (
    <Shell wide>
      <section className="gm-sec">
        <h1 className="gm-h1">{s(NT.title)}</h1>
        <p className="gm-lead">{s(NT.lead)}</p>
      </section>
      {latest ? <Week w={latest} open /> : <section className="gm-sec"><p>{s(NT.empty)}</p></section>}
      {past.length > 0 && (
        <section className="gm-sec">
          <h2 className="nw-week">{s(NT.past)}</h2>
          {past.map((w) => <Week key={w.week} w={w} open={false} />)}
        </section>
      )}
      <section className="gm-sec">
        <div className="cy-card nw-learn">
          <p>{s(NT.learn)}</p>
          <Lnk className="gm-cta" href="/formations">{s(NT.courses)} →</Lnk>
        </div>
      </section>
      <SupportBot />
    </Shell>
  )
}
