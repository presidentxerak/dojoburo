// LA GARDE DE LA CATÉGORIE SCOLAIRE · demandé : « Une catégorie scolaire pour
// les collégiens et les lycéens [...] avec [...] des cours des quiz, des jeux,
// des exercices. Il faut vraiment que ça soit lié au programme scolaire de
// l'école, et aussi avec un système de validation par les parents à chaque
// étape [...] et aussi les préparer soit au brevet blanc, au brevet, ou au bac
// blanc et au bac ».
//
// Chaque plan couvre ses classes et cite son programme ; chaque leçon rédigée
// suit son plan et contient un cours, l'essentiel, un exemple corrigé, trois
// exercices corrigés, un jeu, cinq questions, un piège et une méthode.
//
//   node scripts/test-school.mjs                 tout
//   node scripts/test-school.mjs --unit maths-3e une seule unité (pour les rédacteurs)
import { build } from 'esbuild'
import { readFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

let fails = 0
const problems = []
const ok = (name, cond, detail = '') => { console.log(`${cond ? 'ok  ' : 'FAIL'}  ${name}${detail ? ` · ${detail}` : ''}`); if (!cond) fails++ }
const OUT = join(tmpdir(), 'dojo-test-school'); mkdirSync(OUT, { recursive: true })
let n = 0
async function load(entry) {
  const file = join(OUT, `m${n++}.mjs`)
  await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', outfile: file, logLevel: 'silent' })
  return import(pathToFileURL(file).href)
}
const only = (() => { const k = process.argv.indexOf('--unit'); return k > 0 ? process.argv[k + 1] : null })()
const DIR = 'src/data/school'
const CAT = await load(`${DIR}/catalog.ts`)

const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u
const DASH = /[–—―]/
const ID = /^[a-z0-9-]{2,40}$/
const TU = /(^|[\s,;.!?«(])(tu|toi|tes|te)(?=[\s,;.!?»)]|$)/i

/* --- 1 · les plans ------------------------------------------------------------ */
const planFiles = existsSync(`${DIR}/plans`) ? readdirSync(`${DIR}/plans`).filter((f) => f.endsWith('.ts')) : []
const plans = new Map()
for (const f of planFiles) {
  const m = await load(`${DIR}/plans/${f}`)
  for (const p of m.PLANS) plans.set(p.id, p)
}
const planList = [...plans.values()].filter((p) => !only || p.id === only)
ok('l\'unité « Apprendre avec l\'IA » a son plan', plans.has(CAT.IA_UNIT))
for (const g of CAT.GRADES) {
  if (only) break
  const file = `${DIR}/plans/${g.id}.ts`
  if (!existsSync(file)) { console.log(`      plan de la ${g.label} · en cours de rédaction`); continue }
  const missing = CAT.GRADE_SUBJECTS[g.id].filter((s) => !plans.has(CAT.unitId(s, g.id)))
  ok(`le plan de la ${g.label} couvre toutes ses matières`, missing.length === 0, missing.join(', '))
}
for (const p of planList) {
  const errs = []
  const lessons = p.chapters.flatMap((c) => c.lessons)
  if (!p.intro?.startsWith('Vous')) errs.push('intro')
  if (!p.reference || p.reference.length < 12) errs.push('référence du programme')
  if (/https?:\/\//.test(p.reference)) errs.push('adresse dans la référence')
  if (p.chapters.length < 3) errs.push(`${p.chapters.length} chapitres`)
  if (lessons.length < 8) errs.push(`${lessons.length} leçons`)
  if (!p.chapters.every((c) => ID.test(c.id) && c.title && c.programme && c.lessons.length >= 1)) errs.push('chapitre incomplet')
  if (new Set(p.chapters.map((c) => c.id)).size !== p.chapters.length) errs.push('chapitre en double')
  if (!lessons.every((l) => ID.test(l.id) && l.title?.length >= 3 && l.title.length <= 90)) errs.push('leçon mal formée')
  if (new Set(lessons.map((l) => l.id)).size !== lessons.length) errs.push('leçon en double')
  const txt = JSON.stringify(p)
  if (EMOJI.test(txt) || DASH.test(txt)) errs.push('emoji ou tiret long')
  if (errs.length) problems.push(`plan ${p.id} : ${errs.join(', ')}`)
}
ok('chaque plan est complet, aligné sur un programme cité', problems.filter((x) => x.startsWith('plan')).length === 0, problems.filter((x) => x.startsWith('plan')).slice(0, 4).join(' | '))

/* --- 2 · les leçons rédigées --------------------------------------------------- */
const contentFiles = existsSync(`${DIR}/content`) ? readdirSync(`${DIR}/content`).filter((f) => f.endsWith('.ts') && (!only || f.startsWith(`${only}--`))) : []
let lessonCount = 0
const lessonErrs = []
const seen = new Set()
const positions = [0, 0, 0, 0]
let longestRight = 0
let qCount = 0
for (const f of contentFiles) {
  const unit = f.replace(/--[a-z0-9-]+\.ts$/, '')
  const m = await load(`${DIR}/content/${f}`)
  const C = m.CONTENT
  const plan = plans.get(unit)
  if (!plan) { lessonErrs.push(`${f} : aucune unité « ${unit} » dans les plans`); continue }
  if (C.unit !== unit) lessonErrs.push(`${f} : unit = ${C.unit}`)
  for (const ch of C.chapters) {
    const pc = plan.chapters.find((c) => c.id === ch.id)
    if (!pc) { lessonErrs.push(`${unit}/${ch.id} : chapitre absent du plan`); continue }
    for (const L of ch.lessons) {
      lessonCount++
      const where = `${unit}/${L.id}`
      const e = []
      const pl = pc.lessons.find((x) => x.id === L.id)
      if (!pl) e.push('leçon absente du plan')
      else if (pl.title !== L.title) e.push('titre différent du plan')
      if (seen.has(where)) e.push('en double')
      seen.add(where)
      if (!(L.minutes >= 10 && L.minutes <= 45)) e.push('durée')
      if (!(L.objectives?.length >= 2 && L.objectives.length <= 5)) e.push('objectifs')
      if (!(L.course?.length >= 2 && L.course.length <= 6)) e.push('parties du cours')
      for (const sct of L.course ?? []) {
        if (!sct.heading || !(sct.paragraphs?.length >= 1)) e.push('partie vide')
        if (sct.paragraphs?.some((p) => p.length < 40 || p.length > 900)) e.push('paragraphe hors bornes')
        if (sct.box && (!sct.box.label || !sct.box.text || sct.box.text.length > 600)) e.push('encadré')
      }
      if (!(L.keyPoints?.length >= 3 && L.keyPoints.length <= 8)) e.push('l\'essentiel')
      if (!L.example?.statement || !(L.example?.solution?.length >= 1)) e.push('exemple corrigé')
      if (!(L.exercises?.length === 3) || L.exercises.some((x, k) => x.level !== k + 1 || !x.statement || !x.hint || !(x.solution?.length >= 1))) e.push('trois exercices corrigés, niveaux 1 à 3')
      const G = L.game
      if (!G) e.push('jeu')
      else if (G.kind === 'pairs') { if (!(G.pairs?.length >= 4 && G.pairs.length <= 6) || new Set(G.pairs.map((p) => p.left)).size !== G.pairs.length) e.push('jeu des paires') }
      else if (G.kind === 'order') { if (!(G.items?.length >= 4 && G.items.length <= 7) || new Set(G.items).size !== G.items.length) e.push('jeu de l\'ordre') }
      else if (G.kind === 'truefalse') { if (!(G.statements?.length >= 5 && G.statements.length <= 8) || G.statements.some((s) => typeof s.true !== 'boolean' || !s.why) || G.statements.every((s) => s.true) || G.statements.every((s) => !s.true)) e.push('jeu vrai ou faux') }
      else e.push('jeu inconnu')
      if (!(L.quiz?.length === 5)) e.push('cinq questions')
      for (const q of L.quiz ?? []) {
        qCount++
        if (!(q.options?.length >= 3 && q.options.length <= 4) || !(q.answer >= 0 && q.answer < q.options.length) || !q.why || new Set(q.options).size !== q.options.length) { e.push('question mal formée'); continue }
        positions[q.answer]++
        if (q.options[q.answer].length > Math.max(...q.options.filter((_, k) => k !== q.answer).map((o) => o.length))) longestRight++
      }
      if (!L.trap || !L.method) e.push('piège ou méthode')
      const prose = [L.trap, L.method, ...(L.objectives ?? []), ...(L.exercises ?? []).map((x) => x.hint)].join(' ')
      if (!unit.startsWith('anglais') && !unit.startsWith('espagnol') && TU.test(prose)) e.push('tutoiement')
      const txt = JSON.stringify(L)
      if (EMOJI.test(txt)) e.push('emoji')
      if (DASH.test(txt)) e.push('tiret long')
      if (e.length) lessonErrs.push(`${where} : ${[...new Set(e)].join(', ')}`)
    }
  }
}
ok('chaque leçon suit son plan et contient cours, essentiel, exemple, trois exercices, un jeu, cinq questions', lessonErrs.length === 0, lessonErrs.slice(0, 6).join(' | ') + (lessonErrs.length > 6 ? ` (+${lessonErrs.length - 6})` : ''))
if (qCount >= 20) {
  const spread = positions.filter((p) => p > 0).length >= 3 && Math.max(...positions) / qCount < 0.5
  ok('la bonne réponse change de place', spread, positions.join(' / '))
  ok('la bonne réponse n\'est pas souvent la plus longue', longestRight / qCount <= 0.4, `${longestRight} sur ${qCount}`)
}

/* --- 3 · le socle : pages, parents, examens ------------------------------------ */
if (!only) {
  const MAIN = readFileSync('src/main.tsx', 'utf8')
  ok('la catégorie scolaire a ses routes', /path === '\/ecole'/.test(MAIN) && /\/ecole\/parents/.test(MAIN))
  const PR = readFileSync('src/school/progress.ts', 'utf8')
  ok('le code parent n\'est jamais gardé en clair', /crypto\.subtle\.digest\('SHA-256'/.test(PR) && !/localStorage\.setItem\([^)]*code/.test(PR))
  ok('une leçon n\'est validée qu\'avec le code du parent', /export async function validateLesson[\s\S]{0,120}checkCode\(code\)/.test(PR))
  ok('cinq erreurs bloquent la saisie', /n >= 5/.test(PR) && /60_000/.test(PR))
  const EX = await load(`${DIR}/exams.ts`)
  ok('le brevet et le bac ont leurs épreuves, blanches comprises', ['brevet', 'bac', 'bac-francais', 'maths-anticipee'].every((id) => EX.EXAMS.some((x) => x.id === id && x.epreuves.length >= 1)))
  ok('chaque épreuve cite ses sources', EX.EXAMS.every((x) => x.sources?.length >= 1 && x.epreuves.every((ep) => ep.duration > 0 && ep.units.length >= 1)))
}

const unitsDone = new Set(contentFiles.map((f) => f.replace(/--[a-z0-9-]+\.ts$/, '')))
const planned = [...plans.values()].reduce((s, p) => s + p.chapters.reduce((t, c) => t + c.lessons.length, 0), 0)
console.log(`      plans · ${plans.size} unités, ${planned} leçons prévues · rédigées : ${lessonCount} leçons dans ${unitsDone.size} unité(s)`)
console.log(fails ? `\ntest-school · ${fails} problème(s)` : '\ntest-school · ok')
process.exit(fails ? 1 : 0)
