// L'APPROFONDISSEMENT DE CHAQUE DOJO · il existe, il est complet, il est
// dans les deux langues, et il est à la bonne taille.
//
// Demandé : « faut enrichir les cours, ils sont trop basiques et les exercices
// peu intéressants ». Chaque dojo porte donc, en plus de son squelette, un
// « pourquoi ça marche », un avant / après, un exercice avec son prompt à
// copier et sa liste pour se corriger, et deux questions de plus. Voir
// src/data/enrich/types.
//
// CE QUE CETTE ÉPREUVE GARDE :
//   · chaque dojo du programme (semaine, parcours, métiers) a le sien,
//   · aucun approfondissement n'appartient à un dojo qui n'existe pas,
//   · chaque morceau existe dans les deux langues, et le français est du
//     français (même sonde que test-curriculum),
//   · les longueurs · assez pour apprendre, pas assez pour devenir un article,
//   · les questions sont de vraies questions : trois réponses au moins, une
//     seule juste, et la juste n'est pas toujours la plus longue,
//   · le dojo vouvoie, sauf DANS les prompts : un prompt parle au modèle ou à
//     un client, et il a le droit de vouvoyer.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-enrich'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const { ALL_LEVELS } = await load('src/data/curriculum.ts', 'cur.mjs')
const { ENRICH, enrichKey } = await load('src/data/enrich/index.ts', 'enrich.mjs')

/* --- 1 · chaque dojo a le sien, et rien de plus ------------------------- */

const keys = ALL_LEVELS.map(({ module, level }) => enrichKey(module.id, level.id))
const missing = keys.filter((k) => !ENRICH[k])
ok('chaque dojo a son approfondissement', missing.length === 0,
  missing.length ? `${missing.length} manquants · ${missing.slice(0, 4).join(', ')}` : `${keys.length} dojos`)
const orphans = Object.keys(ENRICH).filter((k) => !keys.includes(k))
ok('aucun approfondissement pour un dojo qui n\'existe pas', orphans.length === 0, orphans.slice(0, 4).join(', ') || 'aucun')

/* --- 2 · la forme ------------------------------------------------------- */

const CAP = {
  why: 460, context: 240, before: 900, after: 1200, takeaway: 260,
  goal: 240, prompt: 1400, check: 160, bonus: 280,
  q: 140, option: 110, qwhy: 280,
}
const FLOOR = { why: 90, before: 20, after: 60, prompt: 80, check: 12 }

const FR_ACCENT = /[àâäçéèêëîïôöùûüœÀÂÇÉÈÊËÎÏÔÖÙÛÜŒ«»]/
const FR_ELISION = /\b[cdjlmnst]'|\bqu'/i
const FR_WORDS = /\b(?:le|la|les|un|une|des|du|de|au|aux|et|ou|ne|pas|plus|sans|pour|par|dans|avec|sur|tu|te|ton|ta|tes|qui|que|est|sont|ce|cette|ces|il|elle)\b/i
const wordCount = (t) => (String(t).match(/[A-Za-zÀ-ÿ]{2,}/g) || []).length
const looksFrench = (t) => typeof t === 'string' && (wordCount(t) < 6 || FR_ACCENT.test(t) || FR_ELISION.test(t) || FR_WORDS.test(t))
// LE TUTOIEMENT, REPÉRÉ SANS FAUX POSITIF · les limites de mot sont celles
// des LETTRES (\p{L}), pas celles de \b, qui prend « â » pour une frontière et
// verrait « te » dans « pâte ». « ton » précédé d'un article est le nom (le
// ton d'un message), pas le possessif.
const TU = /(?<!\p{L})(?:tu|te|toi|ta|tes)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})|(?<!\p{L})(?<!(?<!\p{L})(?:le|un|du|au|ce|même|bon|mauvais|son) )ton(?!\p{L})/iu
const learnerText = (t) => String(t).replace(/«[^»]*»/g, '')

const problems = { size: [], lang: [], copy: [], vous: [], shape: [], quiz: [] }
const measure = (where, kind, bi, { prompt = false } = {}) => {
  for (const lang of ['en', 'fr']) {
    const s = bi?.[lang]
    if (typeof s !== 'string' || !s.trim()) { problems.shape.push(`${where} · ${kind} (${lang}) vide`); continue }
    if (CAP[kind] && s.length > CAP[kind]) problems.size.push(`${where} · ${kind} (${lang}) ${s.length} > ${CAP[kind]}`)
    if (FLOOR[kind] && s.length < FLOOR[kind]) problems.size.push(`${where} · ${kind} (${lang}) ${s.length} < ${FLOOR[kind]}`)
  }
  if (bi?.fr && !looksFrench(bi.fr)) problems.lang.push(`${where} · ${kind}`)
  // un prompt de code ou un nom propre peut être identique · le reste non
  if (bi?.fr && bi.fr === bi.en && wordCount(bi.en) >= 4) problems.copy.push(`${where} · ${kind}`)
  if (!prompt && bi?.fr && TU.test(learnerText(bi.fr))) problems.vous.push(`${where} · ${kind}`)
}

for (const k of keys) {
  const e = ENRICH[k]
  if (!e) continue
  if (!Array.isArray(e.why) || e.why.length < 2 || e.why.length > 3) problems.shape.push(`${k} · why doit avoir 2 ou 3 paragraphes`)
  for (const p of e.why ?? []) measure(k, 'why', p)
  measure(k, 'context', e.example?.context)
  measure(k, 'before', e.example?.before, { prompt: true })
  measure(k, 'after', e.example?.after, { prompt: true })
  measure(k, 'takeaway', e.example?.takeaway)
  measure(k, 'goal', e.exercise?.goal)
  measure(k, 'prompt', e.exercise?.prompt, { prompt: true })
  if (!Array.isArray(e.exercise?.check) || e.exercise.check.length < 3 || e.exercise.check.length > 5) {
    problems.shape.push(`${k} · la liste de l'exercice doit avoir 3 à 5 points`)
  }
  for (const c of e.exercise?.check ?? []) measure(k, 'check', c)
  measure(k, 'bonus', e.exercise?.bonus)
  // L'AVANT N'EST PAS L'APRÈS · un exemple qui ne change rien n'apprend rien.
  if (e.example?.before?.en && e.example.before.en === e.example.after?.en) problems.shape.push(`${k} · avant = après`)
  // LE PROMPT À COPIER A QUELQUE CHOSE À REMPLIR · sinon ce n'est pas un
  // exercice, c'est une démonstration.
  if (e.exercise?.prompt?.fr && !/\[[^\]]+\]/.test(e.exercise.prompt.fr)) problems.shape.push(`${k} · le prompt n'a aucun [CHAMP] à remplir`)

  if (!Array.isArray(e.more) || e.more.length !== 2) { problems.quiz.push(`${k} · il faut exactement deux questions de plus`); continue }
  for (const [n, q] of e.more.entries()) {
    const w = `${k}#${n + 1}`
    measure(w, 'q', q.q)
    measure(w, 'qwhy', q.why)
    for (const o of q.options ?? []) measure(w, 'option', o)
    if (!Array.isArray(q.options) || q.options.length < 3) problems.quiz.push(`${w} · moins de trois réponses`)
    else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) problems.quiz.push(`${w} · réponse hors liste`)
    else if (new Set(q.options.map((o) => o.en)).size !== q.options.length) problems.quiz.push(`${w} · deux réponses identiques`)
  }
}

ok('chaque approfondissement a sa forme', problems.shape.length === 0, problems.shape.slice(0, 4).join(' | ') || 'complet')
ok('rien ne dépasse sa taille, rien n\'est trop maigre', problems.size.length === 0, problems.size.slice(0, 4).join(' | ') || 'à la bonne taille')
ok('le français est du français', problems.lang.length === 0, problems.lang.slice(0, 4).join(' | ') || 'oui')
ok('aucune traduction n\'est la copie de l\'anglais', problems.copy.length === 0, problems.copy.slice(0, 4).join(' | ') || 'aucune')
ok('le dojo vouvoie (hors prompts)', problems.vous.length === 0, problems.vous.slice(0, 4).join(' | ') || 'oui')
ok('les questions sont de vraies questions', problems.quiz.length === 0, problems.quiz.slice(0, 4).join(' | ') || 'oui')

// LA BONNE RÉPONSE N'EST PAS TOUJOURS LA PLUS LONGUE · sinon on la trouve sans
// lire. Toléré sur un tiers des questions, comme dans test-curriculum.
const allMore = keys.flatMap((k) => ENRICH[k]?.more ?? [])
const longestRight = allMore.filter((q) => {
  const lens = (q.options ?? []).map((o) => o.en.length)
  return lens.length && lens[q.answer] === Math.max(...lens) && lens.filter((l) => l === Math.max(...lens)).length === 1
})
ok('la bonne réponse n\'est pas un indice de longueur', longestRight.length <= Math.ceil(allMore.length / 3),
  `${longestRight.length} sur ${allMore.length}`)
// … ni toujours au même rang.
const ranks = new Map()
for (const q of allMore) ranks.set(q.answer, (ranks.get(q.answer) ?? 0) + 1)
ok('les bonnes réponses sont réparties', allMore.length === 0 || Math.max(...ranks.values()) <= Math.ceil(allMore.length / 2),
  [...ranks.entries()].map(([r, n]) => `${String.fromCharCode(65 + r)}:${n}`).join(' '))

/* --- 3 · les morsures -------------------------------------------------- */

ok('morsure · un français qui est de l\'anglais serait vu', !looksFrench('Rewrite your brief so a stranger could follow it without asking.'))
ok('morsure · un tutoiement hors prompt serait vu', TU.test(learnerText('Colle ton prompt ici.')))
ok('morsure · une phrase citée ne l\'est pas', !TU.test(learnerText('Écrivez « je te rappelle » et rien d\'autre.')))
ok('morsure · un prompt sans champ serait vu', !/\[[^\]]+\]/.test('Écris un mail de relance.'))

console.log(fails ? `\ntest-enrich · ${fails} problème(s)` : `\ntest-enrich · ${keys.length} dojos approfondis, ${allMore.length} questions de plus`)
process.exitCode = fails ? 1 : 0
