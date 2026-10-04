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

const latest = weeks[0]?.week
const age = latest ? Math.round((Date.now() - new Date(`${latest}T12:00:00Z`).getTime()) / 86400000) : -1
console.log(`      dernière édition · semaine du ${latest} (il y a ${age} jours) · ${weeks.length} édition(s), ${all.length} nouvelles`)
console.log(fails ? `\ntest-news · ${fails} problème(s)` : '\ntest-news · ok')
process.exit(fails ? 1 : 0)
