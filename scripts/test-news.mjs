// LA GARDE DES NOUVEAUTÉS IA · demandé : « créé la page des news IA [...] fais
// juste une card du résumé de la news qui mène au vrai article avec les
// crédits et le nom de la source. Les news peuvent être des vidéos Youtube (en
// anglais) ou des articles ». Chaque nouvelle a son résumé dans les deux
// langues, sa source, un lien vers l'original ; chaque édition ouvre un lundi.
import { build } from 'esbuild'
import { readFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

let fails = 0
const ok = (name, cond, detail = '') => { console.log(`${cond ? 'ok  ' : 'FAIL'}  ${name}${detail ? ` · ${detail}` : ''}`); if (!cond) fails++ }
const OUT = join(tmpdir(), 'dojo-test-news'); mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', outfile: join(OUT, name), logLevel: 'silent' })
  return import(pathToFileURL(join(OUT, name)).href)
}
const N = await load('src/data/news/index.ts', 'news.mjs')
const weeks = N.WEEKS
const all = weeks.flatMap((w) => w.items)
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u
const DASH = /[–—―]/
const DAY = /^\d{4}-\d{2}-\d{2}$/
const isMonday = (d) => DAY.test(d) && new Date(`${d}T12:00:00Z`).getUTCDay() === 1

ok('il y a au moins une édition', weeks.length > 0)
ok('chaque édition ouvre un lundi, une seule fois', weeks.every((w) => isMonday(w.week)) && new Set(weeks.map((w) => w.week)).size === weeks.length, weeks.map((w) => w.week).join(', '))
ok('chaque édition a son introduction dans les deux langues', weeks.every((w) => w.intro?.en?.trim() && w.intro?.fr?.trim()))
ok('chaque édition compte de 5 à 20 nouvelles', weeks.every((w) => w.items.length >= 5 && w.items.length <= 20), weeks.map((w) => `${w.week}: ${w.items.length}`).join(', '))
const ids = all.map((n) => n.id)
ok('chaque nouvelle a un identifiant unique', ids.every((id) => /^[a-z0-9-]{3,80}$/.test(id)) && new Set(ids).size === ids.length)
ok('chaque nouvelle est un article ou une vidéo', all.every((n) => n.kind === 'article' || n.kind === 'video'))
ok('chaque nouvelle a son titre d\'origine', all.every((n) => n.title?.trim().length >= 8))
ok('chaque résumé existe dans les deux langues, en deux ou trois phrases', all.every((n) => n.summary?.fr?.length >= 60 && n.summary.fr.length <= 520 && n.summary?.en?.length >= 50 && n.summary.en.length <= 520),
  all.filter((n) => !(n.summary?.fr?.length >= 60 && n.summary.fr.length <= 520)).map((n) => n.id).slice(0, 3).join(', '))
ok('un article nomme toujours sa source', all.every((n) => n.kind === 'video' || n.source?.trim().length >= 2), all.filter((n) => n.kind === 'article' && !n.source?.trim()).map((n) => n.id).join(', '))
ok('chaque lien mène à l\'original, en https', all.every((n) => { try { return new URL(n.url).protocol === 'https:' } catch { return false } }))
ok('une vidéo est une vidéo YouTube, son lien et son identifiant concordent', all.filter((n) => n.kind === 'video').every((n) => /^[A-Za-z0-9_-]{11}$/.test(n.videoId || '') && n.url === `https://www.youtube.com/watch?v=${n.videoId}`))
ok('la langue et la date sont renseignées', all.every((n) => (n.lang === 'fr' || n.lang === 'en') && (n.date === '' || DAY.test(n.date))))
ok('aucun emoji ni tiret long dans les textes', all.every((n) => !EMOJI.test(n.title + n.summary.fr + n.summary.en + n.source + n.author) && !DASH.test(n.summary.fr + n.summary.en)))
ok('le vouvoiement dans les résumés français', all.every((n) => !/\b(tu|toi|ton|tes|ta)\b/i.test(n.summary.fr)))

const NP = readFileSync('src/game/News.tsx', 'utf8')
ok('la carte porte le résumé, la source et le lien vers l\'original', /className="nw-sum"/.test(NP) && /className="nw-credit"/.test(NP) && /href=\{n\.url\} target="_blank" rel="noopener noreferrer"/.test(NP))
ok('la chaîne d\'une vidéo est créditée par le serveur, pas par YouTube', /useVideoCredits\(/.test(NP) && !/youtube-nocookie|i\.ytimg/.test(NP))
ok('la page a sa route et son bouton entre Formations et Communauté', /path === '\/nouveautes'/.test(readFileSync('src/main.tsx', 'utf8')) && /to: '\/formations'[\s\S]{0,300}to: '\/nouveautes'[\s\S]{0,120}to: '\/clan'/.test(readFileSync('src/game/Shell.tsx', 'utf8')))
ok('la page est dans le plan du site', /loc: '\/nouveautes'/.test(readFileSync('scripts/gen-seo.mjs', 'utf8')))
ok('la procédure du lundi est écrite', /lundi/i.test(readFileSync('docs/NEWS.md', 'utf8')))

// LA NEWSLETTER DE LA SEMAINE · demandé : « Dans l'espace admin de
// l'administrateur on va créer une newsletter hebdomadaire qui parle d'une
// formation et de 5 news tirées de l'app que l'on peut exporter ensuite au
// format pour copier coller son contenu via Substack ou par mail ».
{
  const W = await load('src/admin/weeklyLetter.ts', 'letter.mjs')
  const P = await load('src/data/packs.ts', 'packs.mjs')
  const pack = W.courseOfWeek(P.PACKS, weeks[0].week)
  const news = weeks[0].items.slice(0, 5)
  const intro = W.defaultIntro(pack, weeks[0].week, 'fr')
  const L = W.buildLetter({ pack, news, week: weeks[0].week, intro, lang: 'fr', site: 'https://www.dojoburo.com' })
  ok('la newsletter parle d\'une formation, avec son lien', L.markdown.includes(pack.title.fr) && L.html.includes(`https://www.dojoburo.com/dojo/${pack.id}`))
  ok('elle reprend 5 nouvelles de l\'app, chacune avec sa source et son lien', news.every((n) => L.markdown.includes(n.url) && L.html.includes(n.url) && L.text.includes(n.url)) && (L.markdown.match(/^### /gm) || []).length === 5)
  ok('elle s\'exporte pour Substack (Markdown), l\'e-mail (HTML) et en texte brut', /^# /.test(L.markdown) && /^<div style=/.test(L.html) && L.text.length > 200 && L.subject.length > 10)
  const evil = W.buildLetter({ pack, news, week: weeks[0].week, intro: '<script>alert(1)</script>', lang: 'fr', site: 'https://www.dojoburo.com' })
  ok('le HTML échappe tout texte', !evil.html.includes('<script>') && evil.html.includes('&lt;script&gt;'))
  ok('la formation proposée change d\'une semaine à l\'autre', W.courseOfWeek(P.PACKS, '2026-09-28').id !== W.courseOfWeek(P.PACKS, '2026-10-05').id)
  const AD = readFileSync('src/game/AdminNewsletter.tsx', 'utf8')
  ok('l\'outil est réservé à l\'administrateur, dit par le serveur', /r\.ok && r\.data\.admin/.test(AD) && /admin === 'yes' \? <Composer \/>/.test(AD))
  ok('l\'outil a sa route', /path === '\/admin\/newsletter'/.test(readFileSync('src/main.tsx', 'utf8')))
}

// DOJOBOT SUIT L'APP · demandé : « mets le à jour en fonction des nouvelles mises
// à jour de l'app et des formations automatiquement ». Sa rubrique « Quoi de
// neuf » se compose du journal, des formations et des nouveautés, sans texte
// écrit à la main.
{
  const U = await load('src/data/updates.ts', 'updates.mjs')
  const up = U.APP_UPDATES
  ok('le journal des mises à jour est tenu, la plus récente en tête', up.length > 0 && up.every((u, k) => DAY.test(u.date) && (k === 0 || up[k - 1].date >= u.date)) && new Set(up.map((u) => u.id)).size === up.length)
  ok('chaque mise à jour est écrite dans les deux langues, sans emoji ni tiret long', up.every((u) => u.title.en && u.title.fr && u.body.en && u.body.fr && !EMOJI.test(u.title.fr + u.body.fr + u.title.en + u.body.en) && !DASH.test(u.title.fr + u.body.fr + u.title.en + u.body.en)))
  const D = await load('src/support/dojobot.ts', 'dojobot.mjs')
  const ans = D.whatsNewAnswer('fr')
  ok('« Quoi de neuf » reprend la dernière mise à jour, les formations et les nouveautés', ans.includes(up[0].title.fr) && ans.includes(weeks[0].items[0].title))
  const KBs = readFileSync('src/support/knowledge.ts', 'utf8')
  ok('la rubrique est dans la base du robot, composée depuis les données', /id: 'whatsnew'/.test(KBs) && /answer: whatsNewAnswer\('en'\)/.test(KBs) && /answer: whatsNewAnswer\('fr'\)/.test(KBs))
  const SB = readFileSync('src/components/SupportBot.tsx', 'utf8')
  ok('Dojobot a son avatar, dans le bouton, l\'en-tête et chaque réponse', (SB.match(/<LiveChibi spec=\{DOJOBOT\}/g) || []).length >= 4)
  ok('sa première phrase et sa carte suivent la dernière mise à jour', /whatsNewLine\(/.test(SB) && /LATEST_UPDATE\.title/.test(SB))
}

// LA PORTE DE LA BÊTA · demandé : « bloquer l'accès à l'app avec une page avec un
// code d'accès à 4 chiffres 1976 et le logo animé le nom de la marque en-dessous
// et la mention Beta [...] dans le fond de la page en full-screen on reprend le
// hero et sa baseline ».
{
  const G = readFileSync('src/components/BetaGate.tsx', 'utf8')
  ok('l\'app est fermée par la porte, le code est 1976', /<BetaGate>\s*<Root \/>\s*<\/BetaGate>/.test(readFileSync('src/main.tsx', 'utf8')) && /BETA_CODE = '1976'/.test(G))
  ok('la porte porte le logo animé, le nom de la marque et la mention Bêta', /className="bg-logo"><Logo/.test(G) && /<Wordmark \/>/.test(G) && /className="bg-pill"/.test(G) && /@keyframes bg-float/.test(readFileSync('src/index.css', 'utf8')))
  ok('le fond reprend le hero et sa baseline', /<HeroTemple \/>/.test(G) && /LP\.h1/.test(G) && /LP\.sub/.test(G))
}

const latest = weeks[0]?.week
const age = latest ? Math.round((Date.now() - new Date(`${latest}T12:00:00Z`).getTime()) / 86400000) : -1
console.log(`      dernière édition · semaine du ${latest} (il y a ${age} jours) · ${weeks.length} édition(s), ${all.length} nouvelles`)
console.log(fails ? `\ntest-news · ${fails} problème(s)` : '\ntest-news · ok')
process.exit(fails ? 1 : 0)
