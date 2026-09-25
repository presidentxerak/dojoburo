// LA COUCHE PÉDAGOGIQUE DE CHAQUE DOJO · complète, dans les deux langues, en « vous ».
//
// POURQUOI CETTE ÉPREUVE EXISTE · demandé : « j'ai l'impression qu'ils ne sont
// pas assez clairs et assez pédagogues et ils sont aussi trop courts ». Chaque
// dojo reçoit une seconde couche (data/deep) : l'essentiel, les notions clés,
// un exemple guidé, les erreurs fréquentes, la synthèse, une piste pour aller
// plus loin et deux questions de plus. Une couche qui manque sur un dojo se
// voit tout de suite pour l'élève (le dojo redevient mince), et jamais pour
// l'auteur : c'est ce qu'elle vérifie, pour les cent dojos et pour chaque
// nouveau métier.
//
// Ce qu'elle vérifie :
//   · chaque dojo du programme a sa couche, et aucune couche n'est orpheline,
//   · la forme : les nombres d'éléments et des longueurs plancher et plafond,
//   · le français est du français, pas une copie de l'anglais,
//   · le français vouvoie, hors citations « » (une réplique reste une réplique),
//   · les questions ont une bonne réponse qui existe.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-deep'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const { ALL_LEVELS } = await load('src/data/curriculum.ts', 'cur.mjs')
const { DEEP, deepKey } = await load('src/data/deep/index.ts', 'deep.mjs')

/* --- 1 · chaque dojo a la sienne --------------------------------------- */

const keys = ALL_LEVELS.map(({ module, level }) => deepKey(module.id, level.id))
const missing = keys.filter((k) => !DEEP[k])
ok('chaque dojo a sa couche pédagogique', missing.length === 0,
  missing.length ? `${missing.length} manquantes sur ${keys.length} · ${missing.slice(0, 4).join(', ')}` : `${keys.length} dojos`)
const orphans = Object.keys(DEEP).filter((k) => !keys.includes(k))
ok('aucune couche pour un dojo qui n\'existe pas', orphans.length === 0, orphans.slice(0, 4).join(', ') || 'aucune')

/* --- 2 · la forme ------------------------------------------------------ */

const CAP = { intro: 900, term: 60, def: 320, title: 240, step: 360, wrong: 260, fix: 320, recap: 220, further: 420, q: 160, option: 120, qwhy: 300 }
const FLOOR = { intro: 180, def: 40, step: 50, wrong: 30, fix: 40, recap: 25, further: 60 }

const FR_ACCENT = /[àâäçéèêëîïôöùûüœÀÂÇÉÈÊËÎÏÔÖÙÛÜŒ«»]/
const FR_ELISION = /\b[cdjlmnst]'|\bqu'/i
const FR_WORDS = /\b(?:le|la|les|un|une|des|du|de|au|aux|et|ou|ne|pas|plus|sans|pour|par|dans|avec|sur|vous|votre|vos|qui|que|est|sont|ce|cette|ces|il|elle)\b/i
const wordCount = (t) => (String(t).match(/[A-Za-zÀ-ÿ]{2,}/g) || []).length
const looksFrench = (t) => typeof t === 'string' && (wordCount(t) < 6 || FR_ACCENT.test(t) || FR_ELISION.test(t) || FR_WORDS.test(t))
// LE TUTOIEMENT · même détecteur que test-enrich et test-i18n.
const TU = /(?<!\p{L})(?:tu|te|toi|ta|tes)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})|(?<!\p{L})(?<!(?<!\p{L})(?:le|un|du|au|ce|même|bon|mauvais|son) )ton(?!\p{L})/iu
const learnerText = (t) => String(t).replace(/«[^»]*»/g, '')

const problems = { shape: [], size: [], lang: [], copy: [], tu: [], quiz: [] }
const bi = (where, kind, v, floor = 0, cap = 1e9) => {
  if (!v || typeof v.en !== 'string' || typeof v.fr !== 'string' || !v.en.trim() || !v.fr.trim()) { problems.shape.push(`${where} · ${kind}`); return }
  for (const lang of ['en', 'fr']) {
    const n = v[lang].length
    if (n < floor || n > cap) problems.size.push(`${where} · ${kind}.${lang} (${n})`)
  }
  if (!looksFrench(v.fr)) problems.lang.push(`${where} · ${kind}`)
  if (v.fr.trim() === v.en.trim() && wordCount(v.en) >= 4) problems.copy.push(`${where} · ${kind}`)
  if (TU.test(learnerText(v.fr))) problems.tu.push(`${where} · ${kind}`)
}

for (const k of keys) {
  const d = DEEP[k]
  if (!d) continue
  bi(k, 'intro', d.intro, FLOOR.intro, CAP.intro)
  if (!Array.isArray(d.concepts) || d.concepts.length < 3 || d.concepts.length > 5) problems.shape.push(`${k} · concepts (${d.concepts?.length})`)
  for (const [i, c] of (d.concepts ?? []).entries()) { bi(k, `term${i}`, c.term, 2, CAP.term); bi(k, `def${i}`, c.def, FLOOR.def, CAP.def) }
  bi(k, 'walk.title', d.walkthrough?.title, 20, CAP.title)
  const steps = d.walkthrough?.steps ?? []
  if (steps.length < 4 || steps.length > 6) problems.shape.push(`${k} · walkthrough (${steps.length})`)
  for (const [i, s] of steps.entries()) bi(k, `step${i}`, s, FLOOR.step, CAP.step)
  if (!Array.isArray(d.mistakes) || d.mistakes.length !== 3) problems.shape.push(`${k} · mistakes (${d.mistakes?.length})`)
  for (const [i, m] of (d.mistakes ?? []).entries()) { bi(k, `wrong${i}`, m.wrong, FLOOR.wrong, CAP.wrong); bi(k, `fix${i}`, m.fix, FLOOR.fix, CAP.fix) }
  if (!Array.isArray(d.recap) || d.recap.length < 3 || d.recap.length > 5) problems.shape.push(`${k} · recap (${d.recap?.length})`)
  for (const [i, r] of (d.recap ?? []).entries()) bi(k, `recap${i}`, r, FLOOR.recap, CAP.recap)
  bi(k, 'further', d.further, FLOOR.further, CAP.further)
  if (!Array.isArray(d.more) || d.more.length !== 2) problems.shape.push(`${k} · more (${d.more?.length})`)
  for (const [i, q] of (d.more ?? []).entries()) {
    bi(k, `q${i}`, q.q, 10, CAP.q)
    bi(k, `qwhy${i}`, q.why, 20, CAP.qwhy)
    if (!Array.isArray(q.options) || q.options.length < 3) problems.quiz.push(`${k} · q${i} options`)
    for (const o of q.options ?? []) if (!o?.en || !o?.fr || o.en.length > CAP.option || o.fr.length > CAP.option) problems.quiz.push(`${k} · q${i} option`)
    if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < (q.options?.length ?? 0))) problems.quiz.push(`${k} · q${i} answer`)
  }
}

ok('chaque couche a sa forme', problems.shape.length === 0, problems.shape.slice(0, 4).join(' | ') || 'complète')
ok('rien ne dépasse, rien n\'est trop maigre', problems.size.length === 0, problems.size.slice(0, 4).join(' | ') || 'à la bonne taille')
ok('le français est du français', problems.lang.length === 0, problems.lang.slice(0, 4).join(' | ') || 'oui')
ok('aucune traduction n\'est la copie de l\'anglais', problems.copy.length === 0, problems.copy.slice(0, 4).join(' | ') || 'aucune')
ok('la couche vouvoie (hors citations)', problems.tu.length === 0, problems.tu.slice(0, 4).join(' | ') || 'oui')
ok('les questions ont une bonne réponse qui existe', problems.quiz.length === 0, problems.quiz.slice(0, 4).join(' | ') || 'oui')

/* --- 3 · les morsures ---------------------------------------------------- */

ok('morsure · un tutoiement serait vu', TU.test(learnerText('Notez ton objectif.')))
ok('morsure · une réplique citée ne l\'est pas', !TU.test(learnerText('Le client écrit « tu peux m\'aider ? ».')))
ok('morsure · de l\'anglais sous le nom de français serait vu', !looksFrench('The model predicts the most likely next words from what it has read before.'))
ok('morsure · une couche absente serait vue', !DEEP['cité-inventée/dojo-inventé'])

console.log(`\ntest-deep · ${keys.length} dojos, ${Object.keys(DEEP).length} couches`)
process.exitCode = fails ? 1 : 0
