// LES VIDÉOS DES COURS · demandé : « On va ajouter dans toutes nos formations
// des vidéos youtube qui traitent chacun des sujets évoqués dans les
// formations ».
//
// Ce que la garde rend vrai :
//   · chaque vidéo porte un identifiant YouTube valide, un titre, une chaîne
//     et sa langue (fr ou en) ;
//   · chaque clé désigne une leçon qui existe (une vidéo égarée sur une leçon
//     renommée ne s'afficherait jamais) ;
//   · aucun titre ne porte d'emoji ni de tiret long (règles de contenu) ;
//   · une même vidéo n'apparaît pas deux fois dans une leçon ;
//   · le lecteur passe par le domaine sans cookie, au clic.
// La couverture (leçons avec au moins une vidéo) est affichée.
import { build } from 'esbuild'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

let fails = 0
const ok = (name, cond, detail = '') => { console.log(`${cond ? 'ok  ' : 'FAIL'}  ${name}${detail ? ` · ${detail}` : ''}`); if (!cond) fails++ }
const OUT = join(tmpdir(), 'dojo-test-videos'); mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, name), r.outputFiles[0].text)
  return import(pathToFileURL(join(OUT, name)).href)
}
const V = await load('src/data/videos/index.ts', 'videos.mjs')
const P = await load('src/data/packs.ts', 'packs.mjs')

const lessons = new Set(P.PACKS.flatMap((p) => P.levelsOf(p).map(({ module, level }) => `${module.id}/${level.id}`)))
const entries = Object.entries(V.VIDEOS)
const all = entries.flatMap(([, list]) => list)
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u
const DASH = /[–—―]/

ok('chaque vidéo a un identifiant YouTube valide', all.every((v) => /^[A-Za-z0-9_-]{11}$/.test(v.id)), all.filter((v) => !/^[A-Za-z0-9_-]{11}$/.test(v.id)).map((v) => v.id).slice(0, 3).join(', '))
ok('chaque vidéo a un titre et sa langue', all.every((v) => v.title?.trim() && typeof v.channel === 'string' && (v.lang === 'fr' || v.lang === 'en')))
const lost = entries.filter(([k]) => !lessons.has(k)).map(([k]) => k)
ok('chaque clé désigne une leçon qui existe', lost.length === 0, lost.slice(0, 4).join(', '))
ok('aucun titre ne porte d\'emoji ni de tiret long', all.every((v) => !EMOJI.test(v.title + v.channel) && !DASH.test(v.title + v.channel)))
const dup = entries.filter(([, list]) => new Set(list.map((v) => v.id)).size !== list.length).map(([k]) => k)
ok('une vidéo n\'apparaît qu\'une fois par leçon', dup.length === 0, dup.slice(0, 3).join(', '))
const LS = readFileSync('src/game/Lesson.tsx', 'utf8')
ok('le lecteur passe par le domaine sans cookie, au clic', /youtube-nocookie\.com\/embed\/\$\{v\.id\}/.test(LS) && /useState\(false\)[\s\S]{0,200}setOn|onClick=\{\(\) => setOn\(true\)\}/.test(LS))
ok('le domaine du lecteur est autorisé par la CSP', /frame-src[^;"]*https:\/\/www\.youtube-nocookie\.com/.test(readFileSync('vercel.json', 'utf8')))

// LES AUTEURS, CRÉDITÉS · demandé : « crédite bien les auteurs et chaines
// youtube dans tous les cours en-dessous des vidéos ». Le nom de la chaîne est
// lu chez YouTube par le serveur (jamais inventé), affiché sous chaque vidéo
// avec un lien vers la chaîne et vers la vidéo d'origine.
{
  const VC = await load('api/video-credits.ts', 'video-credits.mjs')
  const c = VC.readCredit({ author_name: 'Une chaîne', author_url: 'https://www.youtube.com/@unechaine' })
  ok('le serveur lit le nom et l\'adresse de la chaîne', c?.author === 'Une chaîne' && c?.url === 'https://www.youtube.com/@unechaine')
  ok('une adresse qui ne mène pas à YouTube est écartée', VC.readCredit({ author_name: 'X', author_url: 'https://exemple.test/x' })?.url === '' && VC.readCredit({ author_name: 'X', author_url: 'javascript:alert(1)' })?.url === '')
  ok('sans nom de chaîne, aucun crédit inventé', VC.readCredit({}) === null && VC.readCredit({ author_name: '  ' }) === null)
  ok('les identifiants demandés sont vérifiés et bornés', VC.parseIds('PJ2hKYTMyJA,bad,PJ2hKYTMyJA,' + 'a'.repeat(11)).join(',') === `PJ2hKYTMyJA,${'a'.repeat(11)}` && VC.parseIds(Array.from({ length: 20 }, (_, k) => String(k).padStart(11, 'x')).join(',')).length === VC.MAX_IDS)
  ok('chaque vidéo crédite sa chaîne et renvoie vers l\'original', /className="ln-video-credit"/.test(LS) && /t\('ln\.videoBy'\)/.test(LS) && /href=\{credit\.url\}/.test(LS) && /href=\{`https:\/\/www\.youtube\.com\/watch\?v=\$\{v\.id\}`\}/.test(LS))
  ok('le navigateur demande les crédits à notre serveur, pas à YouTube', /fetch\(`\/api\/video-credits\?ids=/.test(LS) && !/fetch\([^)]*youtube/.test(LS))
  const VJ = readFileSync('vercel.json', 'utf8')
  ok('les crédits se gardent en cache, les autres routes non', /"source": "\/api\/\(\(\?!video-credits\)\.\*\)"/.test(VJ) && /s-maxage=2592000/.test(readFileSync('api/video-credits.ts', 'utf8')))
}

const covered = [...lessons].filter((k) => (V.VIDEOS[k] ?? []).length > 0).length
console.log(`      couverture · ${covered} leçons sur ${lessons.size} ont au moins une vidéo · ${all.length} vidéos`)
console.log(fails ? `\ntest-videos · ${fails} problème(s)` : '\ntest-videos · ok')
process.exit(fails ? 1 : 0)
