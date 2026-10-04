// LA NEWSLETTER DE LA SEMAINE · demandé : « Dans l'espace admin de
// l'administrateur on va créer une newsletter hebdomadaire qui parle d'une
// formation et de 5 news tirées de l'app que l'on peut exporter ensuite au
// format pour copier coller son contenu via Substack ou par mail ».
//
// Pure : on lui donne la formation, les nouvelles et l'introduction, elle rend
// l'objet, le texte d'aperçu, et le contenu en trois formats (Markdown pour
// Substack, HTML pour un e-mail ou un collage mis en forme, texte brut). Les
// textes viennent de l'app (data/packs, data/news) : rien n'est inventé ici.
import { say, type Bi } from '../data/bilingual'
import { levelsOf, eurOf, packPath, type Pack } from '../data/packs'
import { priceTag } from '../data/plans'
import { masterOf } from '../pixel/masters'
import { weekEnd, type NewsItem } from '../data/news'

export type Lang = 'fr' | 'en'

export interface LetterInput {
  pack: Pack
  news: NewsItem[]
  /** le lundi de l'édition des nouveautés */
  week: string
  intro: string
  lang: Lang
  site: string
  /** le nom de la chaîne d'une vidéo, quand le serveur l'a lu chez YouTube */
  channelOf?: (n: NewsItem) => string
}

export interface Letter { subject: string; preheader: string; markdown: string; html: string; text: string }

const T = {
  brand: { en: 'Dojoburo', fr: 'Dojoburo' },
  subject: { en: 'The week in AI', fr: 'Les nouveautés IA de la semaine' },
  courseH: { en: 'The course of the week', fr: 'La formation de la semaine' },
  newsH: { en: 'AI news of the week', fr: 'Les nouveautés IA de la semaine' },
  lessons: { en: 'lessons', fr: 'cours' },
  taught: { en: 'taught by master', fr: 'donnée par le maître' },
  free: { en: 'free', fr: 'gratuite' },
  orPass: { en: 'or included in the Dojoburo Pass', fr: 'ou incluse dans le Pass Dojoburo' },
  start: { en: 'Start the course', fr: 'Découvrir la formation' },
  source: { en: 'Source', fr: 'Source' },
  by: { en: 'by', fr: 'par' },
  read: { en: 'Read the article', fr: 'Lire l\'article' },
  watch: { en: 'Watch the video', fr: 'Voir la vidéo' },
  video: { en: 'Video', fr: 'Vidéo' },
  inEn: { en: 'in English', fr: 'en anglais' },
  all: { en: 'All the AI news of the week', fr: 'Toutes les nouveautés IA de la semaine' },
  week: { en: 'week of', fr: 'semaine du' },
  to: { en: 'to', fr: 'au' },
} satisfies Record<string, Bi>

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
/** Markdown : on neutralise les caractères qui changeraient la mise en forme */
const md = (s: string) => s.replace(/([\\`*_[\]#|])/g, '\\$1')
const dateOf = (iso: string, lang: Lang) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', timeZone: 'UTC' })

/** L'introduction proposée par défaut · modifiable dans l'outil */
export function defaultIntro(pack: Pack, week: string, lang: Lang): string {
  const span = `${dateOf(week, lang)} ${say(T.to, lang)} ${dateOf(weekEnd(week), lang)}`
  return lang === 'fr'
    ? `Bonjour, voici votre point hebdomadaire : une formation à découvrir, « ${say(pack.title, lang)} », et cinq nouveautés IA de la semaine du ${span}, résumées en quelques lignes avec le lien vers leur source.`
    : `Hello, here is your weekly digest: one course to discover, "${say(pack.title, lang)}", and five pieces of AI news from the week of ${span}, summed up in a few lines with a link to their source.`
}

/** La formation proposée par défaut · une différente chaque semaine, à tour de rôle */
export function courseOfWeek(packs: Pack[], week: string): Pack {
  const n = Math.floor(new Date(`${week}T12:00:00Z`).getTime() / (7 * 86400000))
  const paid = packs.filter((p) => eurOf(p) > 0)
  const list = paid.length ? paid : packs
  return list[((n % list.length) + list.length) % list.length]
}

export function buildLetter(i: LetterInput): Letter {
  const L = i.lang
  const s = (b: Bi) => say(b, L)
  const site = i.site.replace(/\/+$/, '')
  const p = i.pack
  const eur = eurOf(p)
  const lessons = levelsOf(p).length
  const master = masterOf(p.id).name
  const courseUrl = `${site}${packPath(p.id)}`
  const newsUrl = `${site}/nouveautes`
  const price = eur === 0 ? s(T.free) : `${priceTag(eur)} ${s(T.orPass)}`
  const span = `${s(T.week)} ${dateOf(i.week, L)} ${s(T.to)} ${dateOf(weekEnd(i.week), L)}`
  const subject = `${s(T.brand)} · ${s(T.subject)} (${span})`
  const preheader = i.news[0] ? `${s(p.title)} · ${i.news[0].title}` : s(p.title)
  const sourceOf = (n: NewsItem) => (n.kind === 'video' ? (i.channelOf?.(n) || n.source || 'YouTube') : n.source)
  const credit = (n: NewsItem) => [sourceOf(n), n.author ? `${s(T.by)} ${n.author}` : '', n.lang === 'en' && L === 'fr' ? s(T.inEn) : ''].filter(Boolean).join(' · ')
  const cta = (n: NewsItem) => s(n.kind === 'video' ? T.watch : T.read)

  // MARKDOWN · Substack l'accepte au collage, comme la plupart des éditeurs
  const markdown = [
    `# ${md(s(T.subject))}`,
    `*${md(span)}*`,
    '',
    md(i.intro),
    '',
    `## ${md(s(T.courseH))} : ${md(s(p.title))}`,
    '',
    md(s(p.blurb)),
    '',
    `${lessons} ${s(T.lessons)}, ${s(T.taught)} ${md(master)} · ${md(price)}`,
    '',
    `[${s(T.start)}](${courseUrl})`,
    '',
    `## ${md(s(T.newsH))}`,
    '',
    ...i.news.flatMap((n, k) => [
      `### ${k + 1}. ${n.kind === 'video' ? `${s(T.video)} · ` : ''}${md(n.title)}`,
      '',
      md(s(n.summary)),
      '',
      `*${s(T.source)} : ${md(credit(n))}*`,
      '',
      `[${cta(n)}](${n.url})`,
      '',
    ]),
    `[${s(T.all)}](${newsUrl})`,
    '',
  ].join('\n')

  // HTML · des styles en ligne, la seule forme que les messageries respectent
  const A = 'color:#7c3aed;font-weight:700;text-decoration:underline;'
  const html = [
    `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#1b1530;line-height:1.55;">`,
    `<h1 style="font-size:24px;margin:0 0 4px;">${esc(s(T.subject))}</h1>`,
    `<p style="margin:0 0 16px;color:#5b4f7a;font-style:italic;">${esc(span)}</p>`,
    `<p style="margin:0 0 20px;">${esc(i.intro)}</p>`,
    `<h2 style="font-size:19px;margin:24px 0 8px;">${esc(s(T.courseH))} : ${esc(s(p.title))}</h2>`,
    `<p style="margin:0 0 8px;">${esc(s(p.blurb))}</p>`,
    `<p style="margin:0 0 10px;color:#5b4f7a;">${lessons} ${esc(s(T.lessons))}, ${esc(s(T.taught))} ${esc(master)} · ${esc(price)}</p>`,
    `<p style="margin:0 0 24px;"><a href="${esc(courseUrl)}" style="display:inline-block;padding:10px 16px;border-radius:10px;background:#7c3aed;color:#ffffff;font-weight:700;text-decoration:none;">${esc(s(T.start))}</a></p>`,
    `<h2 style="font-size:19px;margin:24px 0 8px;">${esc(s(T.newsH))}</h2>`,
    ...i.news.map((n, k) => [
      `<div style="margin:0 0 18px;padding:14px 16px;border-radius:12px;background:#f5f0ff;">`,
      `<h3 style="font-size:16px;margin:0 0 6px;">${k + 1}. ${n.kind === 'video' ? `${esc(s(T.video))} · ` : ''}${esc(n.title)}</h3>`,
      `<p style="margin:0 0 6px;">${esc(s(n.summary))}</p>`,
      `<p style="margin:0 0 8px;font-size:13px;color:#5b4f7a;">${esc(s(T.source))} : ${esc(credit(n))}</p>`,
      `<a href="${esc(n.url)}" style="${A}">${esc(cta(n))}</a>`,
      `</div>`,
    ].join('')),
    `<p style="margin:20px 0 0;"><a href="${esc(newsUrl)}" style="${A}">${esc(s(T.all))}</a></p>`,
    `</div>`,
  ].join('\n')

  // TEXTE BRUT · pour un e-mail sans mise en forme
  const text = [
    s(T.subject).toUpperCase(),
    span,
    '',
    i.intro,
    '',
    `${s(T.courseH).toUpperCase()} : ${s(p.title)}`,
    s(p.blurb),
    `${lessons} ${s(T.lessons)}, ${s(T.taught)} ${master} · ${price}`,
    `${s(T.start)} : ${courseUrl}`,
    '',
    s(T.newsH).toUpperCase(),
    '',
    ...i.news.flatMap((n, k) => [
      `${k + 1}. ${n.kind === 'video' ? `${s(T.video)} · ` : ''}${n.title}`,
      s(n.summary),
      `${s(T.source)} : ${credit(n)}`,
      `${cta(n)} : ${n.url}`,
      '',
    ]),
    `${s(T.all)} : ${newsUrl}`,
  ].join('\n')

  return { subject, preheader, markdown, html, text }
}
