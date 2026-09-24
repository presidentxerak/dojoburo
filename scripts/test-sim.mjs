// DOJOBURO · le moteur du jeu, vérifié sans navigateur.
//
// Ce qu'on garde ici, et pourquoi :
//   · LES RÈGLES · la qualité suit le document de conception (le bon
//     spécialiste, assez de tokens, pas de gaspillage), le budget ne ment
//     jamais, un spécialiste occupé ou en panne ne part pas sur un autre brief.
//   · L'ÉQUILIBRE · un joueur raisonnable gagne ses premières journées, un
//     joueur qui ne fait rien les perd. Un jeu impossible ou gagné d'avance
//     n'apprend rien, et c'est ce qui casse en silence quand on retouche un
//     chiffre.
//   · LA SAUVEGARDE · elle se relit, et une sauvegarde abîmée ne fait pas
//     planter le jeu.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-sim'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const E = await load('src/sim/engine.ts', 'engine.mjs')
const { BRIEFS } = await load('src/sim/briefs.ts', 'briefs.mjs')
const { SKILLS } = await load('src/sim/types.ts', 'types.mjs')

/* --- 1 · la bibliothèque de briefs ------------------------------------ */
ok('la bibliothèque a des briefs de chaque niveau', [1, 2, 3].every((t) => BRIEFS.some((b) => b.tier === t)),
  [1, 2, 3].map((t) => `${t}:${BRIEFS.filter((b) => b.tier === t).length}`).join(' '))
ok('chaque brief demande des compétences qui existent',
  BRIEFS.every((b) => Object.keys(b.needs).length >= 1 && Object.keys(b.needs).every((s) => SKILLS.includes(s))))
ok('chaque spécialiste sert au moins trois fois', SKILLS.every((s) => BRIEFS.filter((b) => b.needs[s]).length >= 3),
  SKILLS.map((s) => `${s}:${BRIEFS.filter((b) => b.needs[s]).length}`).join(' '))
ok('les identifiants sont uniques', new Set(BRIEFS.map((b) => b.id)).size === BRIEFS.length)
ok('les chiffres sont dans leurs bornes', BRIEFS.every((b) => b.tokens >= 4000 && b.tokens <= 24000 && b.tokens % 1000 === 0
  && b.reward >= 60 && b.reward <= 450 && b.work >= 15 && b.work <= 50))

/* --- 2 · la qualité -------------------------------------------------- */
const save = E.newSave()
const brief = { id: 't', client: { name: 'Léa', trade: { en: 'x', fr: 'x' } }, title: { en: 't', fr: 't' }, ask: { en: 'a', fr: 'a' },
  needs: { research: 1, writing: 1 }, tokens: 10000, reward: 200, work: 20, tier: 1, tip: { en: 't', fr: 't' } }
let day = E.startDay(save, 1)
const q = (alloc, d = day, s = save) => E.preview(d, s, brief, alloc).quality
ok('le bon duo, les bons tokens · au moins bien', q({ research: 5000, writing: 5000 }) >= 55, `${q({ research: 5000, writing: 5000 })}`)
ok('un seul des deux · moins bien', q({ research: 10000 }) < q({ research: 5000, writing: 5000 }))
ok('les mauvais spécialistes · raté', q({ coding: 5000, growth: 5000 }) < 30, `${q({ coding: 5000, growth: 5000 })}`)
ok('la moitié des tokens · nettement moins bien', q({ research: 2500, writing: 2500 }) < q({ research: 5000, writing: 5000 }) - 15)
ok('deux fois trop de tokens · à peine mieux', q({ research: 10000, writing: 10000 }) - q({ research: 5000, writing: 5000 }) <= 12)
ok('des tokens donnés à un spécialiste inutile sont perdus',
  q({ research: 5000, writing: 5000, coding: 6000 }) === q({ research: 5000, writing: 5000 }) || q({ research: 5000, writing: 5000, coding: 6000 }) - q({ research: 5000, writing: 5000 }) < 8)
// L'EXPÉRIENCE COMPTE QUAND LE BRIEF EST EXIGEANT · un besoin de niveau 1 est
// couvert dès le niveau 1 ; un besoin de niveau 3 demande de l'expérience.
const hard = { ...brief, needs: { research: 3, writing: 3 } }
const lvl = { ...save, staff: { ...save.staff, research: { level: 3, xp: 80 }, writing: { level: 3, xp: 80 } } }
const qh = (s) => E.preview(day, s, hard, { research: 5000, writing: 5000 }).quality
ok('des spécialistes plus expérimentés font mieux sur un brief exigeant', qh(lvl) > qh(save), `${qh(save)} → ${qh(lvl)}`)
const tiredDay = { ...day, fatigue: { ...day.fatigue, research: 90 } }
ok('un spécialiste épuisé fait moins bien', q({ research: 5000, writing: 5000 }, tiredDay) < q({ research: 5000, writing: 5000 }))
ok('le coût est ce qu\'on donne', E.preview(day, save, brief, { research: 5000, writing: 3000 }).cost === 8000)
ok('un jour de flambée, le même travail coûte 25 % de plus',
  E.preview({ ...day, event: 'spike' }, save, brief, { research: 4000, writing: 4000 }).cost === 10000)
const lib = { ...save, upgrades: { ...save.upgrades, library: true, cache: true } }
ok('la bibliothèque et le cache réduisent le besoin', E.needFor(brief, lib) === 8100)

/* --- 3 · lancer ------------------------------------------------------ */
day = { ...day, queue: [{ uid: 'c1', brief, arrivedAt: 0, leaveAt: 90 }] }
let r = E.launch(day, save, 'c1', { research: 5000, writing: 5000 })
ok('un lancement valide passe', r.ok)
ok('il retire les tokens du budget', r.ok && r.day.spent === 10000)
ok('il occupe l\'équipe', r.ok && r.day.busy.research && r.day.busy.writing)
ok('le client quitte la file', r.ok && r.day.queue.length === 0)
const d2 = r.ok ? { ...r.day, queue: [{ uid: 'c2', brief, arrivedAt: 1, leaveAt: 90 }] } : day
ok('un spécialiste occupé ne part pas ailleurs', E.launch(d2, save, 'c2', { research: 4000 }).error === 'busy')
ok('pas de budget, pas de lancement', E.launch({ ...day, spent: day.budget - 3000 }, save, 'c1', { research: 5000 }).error === 'budget')
ok('un spécialiste en panne ne travaille pas', E.launch({ ...day, down: 'research' }, save, 'c1', { research: 5000 }).error === 'down')
ok('personne, pas de lancement', E.launch(day, save, 'c1', {}).error === 'empty')
ok('au plus quatre', E.launch(day, save, 'c1', { research: 1000, writing: 1000, coding: 1000, growth: 1000, tools: 1000 }).error === 'too-many')

/* --- 4 · le temps ---------------------------------------------------- */
ok('9 h à 18 h', E.clock(0) === '9:00' && E.clock(E.DAY_SECONDS) === '18:00' && E.clock(E.DAY_SECONDS / 2) === '13:30')
let t = E.tick(r.day, save, 25, BRIEFS)
ok('un travail fini rapporte et libère l\'équipe', t.events.some((e) => e.type === 'done') && !t.day.busy.research && t.day.revenue > 0,
  `${t.day.revenue} €`)
ok('l\'expérience monte', t.save.staff.research.xp > 0)
let quiet = E.startDay(save, 3)
let arrived = 0, left = 0
// quelques pas de plus que 180 s · une somme de 0,1 s tombe juste sous 180
for (let i = 0; i < 1810; i++) {
  const u = E.tick(quiet, save, 0.1, BRIEFS)
  quiet = u.day
  arrived += u.events.filter((e) => e.type === 'arrive').length
  left += u.events.filter((e) => e.type === 'leave').length
}
ok('les clients arrivent tout au long du jour', arrived >= 5, `${arrived} arrivés`)
// À 18 H, ceux qui attendent encore repartent aussi, mais le studio ferme :
// ce n'est pas compté comme un client perdu. Seuls ceux qu'on a laissés
// attendre trop longtemps le sont.
ok('un client qu\'on ignore finit par partir', quiet.lost >= 3 && quiet.lost <= left, `${quiet.lost} perdus, ${left} partis`)
ok('à la fermeture, plus personne n\'attend', quiet.queue.length === 0)
ok('la journée se ferme à 18 h', quiet.over)
ok('ignorer tout le monde fait perdre la journée', !E.closeDay(quiet, save).summary.won)

/* --- 5 · l'équilibre · un joueur raisonnable ------------------------- */
function play(s, seed, days) {
  const won = []
  for (let k = 0; k < days; k++) {
    let d = E.startDay(s, seed + k)
    while (!d.over) {
      for (const w of d.queue) {
        const alloc = E.suggest(d, s, w.brief)
        if (!Object.keys(alloc).length) continue
        const L = E.launch(d, s, w.uid, alloc)
        if (L.ok) d = L.day
      }
      const u = E.tick(d, s, 0.5, BRIEFS)
      d = u.day; s = u.save
    }
    const c = E.closeDay(d, s)
    s = c.save
    won.push(c.summary.won)
    // il dépense sa caisse avec bon sens : la bibliothèque, puis le budget
    for (const id of ['library', 'cache', 'coffee', 'budget']) {
      const b = E.buy(s, id)
      if (b.ok) s = b.save
    }
  }
  return { won, save: s }
}
const runs = [11, 23, 37, 51, 77].map((seed) => play(E.newSave(), seed, 4))
const day1 = runs.filter((x) => x.won[0]).length
ok('un joueur raisonnable gagne le premier jour', day1 >= 4, `${day1} parties sur 5`)
const far = runs.map((x) => x.save.day)
ok('et il progresse sur plusieurs jours', far.every((n) => n >= 3), far.join(', '))

/* --- 6 · la fin de journée, la boutique, la sauvegarde ------------------ */
const closing = E.closeDay({ ...E.startDay(save, 5), revenue: 700, spent: 50000, budget: 60000 }, save)
ok('le bonus de frugalité paie les tokens restants', closing.summary.bonus === 40, `${closing.summary.bonus} €`)
ok('l\'objectif atteint ouvre le jour suivant', closing.save.day === 2 && closing.save.cash === 740)
const poor = E.closeDay({ ...E.startDay(save, 5), revenue: 100 }, save)
ok('un objectif manqué fait rejouer le jour, sans rien reprendre', poor.save.day === 1 && poor.save.cash >= 100)
// UNE JOURNÉE OISIVE NE RAPPORTE RIEN · sans cette règle, rejouer le jour 1 les
// bras croisés payait 240 € de frugalité à chaque fois.
const idle = E.closeDay(E.startDay(save, 5), save)
ok('la frugalité ne paie pas une journée sans travail', idle.summary.bonus === 0 && idle.save.cash === save.cash, `${idle.summary.bonus} €`)
const rich = { ...save, cash: 2000 }
const b1 = E.buy(rich, 'library')
ok('acheter débite la caisse', b1.ok && b1.save.cash === 1600 && b1.save.upgrades.library)
ok('le cache demande la bibliothèque', !E.buy(rich, 'cache').ok)
ok('une formation fait monter d\'un niveau', E.buy(rich, 'train', 'coding').ok && E.buy(rich, 'train', 'coding').save.staff.coding.level === 2)
ok('pas assez d\'argent, pas d\'achat', E.buy(save, 'library').error === 'cash')
const round = E.reviveSave(JSON.parse(JSON.stringify(b1.save)))
ok('une sauvegarde se relit à l\'identique', JSON.stringify(round) === JSON.stringify(b1.save))
const broken = E.reviveSave({ day: -4, cash: 'beaucoup', staff: { research: { level: 99 } } })
ok('une sauvegarde abîmée repart de valeurs saines', broken.day === 1 && broken.cash === 0 && broken.staff.research.level === 5)

/* --- 7 · les morsures ---------------------------------------------- */
ok('morsure · un brief sans compétence connue serait vu', !['nimbus'].every((s) => SKILLS.includes(s)))
ok('morsure · un joueur passif serait vu gagnant si la règle était cassée', E.closeDay({ ...quiet, revenue: 0 }, save).summary.won === false)

console.log(fails ? `\ntest-sim · ${fails} problème(s)` : `\ntest-sim · ${BRIEFS.length} briefs, règles et équilibre tenus`)
process.exitCode = fails ? 1 : 0
