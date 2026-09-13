// Une spécialité, une équipe, par entreprise · et rien de perdu au passage.
//
// Ce que ce fichier vérifie n'est pas « il reste une carte sur deux ». C'est la
// propriété qui décide si la fonction est acceptable : un fondateur qui avait
// écrit un brief, ou créé un coéquipier, sur la copie que le nettoyage retire,
// les retrouve sur celle qui reste. Un rangement d'écran qui efface du travail
// est un bien plus mauvais échange que les doublons qu'il corrige.
//
//   node scripts/test-dedupe.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-dedupe'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, logLevel: 'silent',
  })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const D = await load('src/lib/dedupeTeams.ts', 'dedupe.mjs')

/* ---- de quoi fabriquer des équipes plausibles -------------------------- */
let n = 0
const role = (r, patch = {}) => ({ id: 'a' + ++n, name: r, role: r, gx: n % 6, gy: 0, ...patch })
const custom = (name, patch = {}) => ({ id: 'a' + ++n, name, gx: 0, gy: 1, custom: { title: name }, ...patch })
const team = (p) => ({
  id: p.id, name: p.name ?? 'Campagne', companyId: p.companyId ?? 'c1',
  archetype: p.archetype ?? 'social', goal: p.goal ?? '', agents: p.agents ?? [role('ceo'), role('marketer')],
})

console.log('--- la règle de base ----------------------------------------')
{
  const r = D.dedupeTeams([
    team({ id: 't1' }), team({ id: 't2' }), team({ id: 't3' }),
  ])
  ok('trois copies de la même équipe n’en font plus qu’une', r.teams.length === 1)
  ok('et on compte ce qui a été absorbé', r.merged === 2, `${r.merged}`)
  ok('et on peut le dire à l’utilisateur', r.notes.length === 1, r.notes[0])
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', archetype: 'social' }),
    team({ id: 't2', archetype: 'startup' }),
    team({ id: 't3', archetype: 'app' }),
  ])
  ok('trois spécialités différentes restent trois équipes', r.teams.length === 3 && r.merged === 0)
}
{
  // C'est une autre entreprise · c'est un autre travail, pas un doublon.
  const r = D.dedupeTeams([
    team({ id: 't1', companyId: 'c1' }),
    team({ id: 't2', companyId: 'c2' }),
  ])
  ok('la même spécialité dans deux entreprises n’est pas un doublon', r.teams.length === 2 && r.merged === 0,
    'une agence qui fait deux campagnes pour deux clients a bien deux équipes')
}
{
  // Le dojo « QG » livré avec l'installation n'a pas d'archétype.
  const solo = { id: 'hq1', name: 'HQ', agents: [role('ceo')] }
  const solo2 = { id: 'hq2', name: 'HQ', agents: [role('ceo')] }
  const r = D.dedupeTeams([solo, solo2, team({ id: 't1' })])
  ok('les dojos sans spécialité ne sont jamais touchés', r.teams.length === 3 && r.merged === 0,
    'pas d’archétype, pas de doublon possible · et c’est eux qu’on casserait en se trompant')
}

console.log('\n--- ce qui ne doit pas être perdu ----------------------------')
{
  const r = D.dedupeTeams([
    team({ id: 't1', goal: '' }),
    team({ id: 't2', goal: 'Lancer avant le salon de mars' }),
  ])
  ok('le brief écrit à la main survit', r.teams[0].goal === 'Lancer avant le salon de mars',
    'même quand il est sur la copie et non sur la première')
  ok('mais il ne décide PAS laquelle on garde', r.teams[0].id === 't1',
    'il est repris quoi qu’il arrive · ce qui doit décider est ce qu’on ne sait pas fusionner')
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', goal: 'Toucher les DSI' }),
    team({ id: 't2', goal: 'Publier trois fois par semaine' }),
  ])
  ok('deux briefs différents sont conservés tous les deux',
    /Toucher les DSI/.test(r.teams[0].goal) && /trois fois par semaine/.test(r.teams[0].goal),
    r.teams[0].goal)
  ok('un brief disparu ne se récupère pas · deux briefs se relisent', true)
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', goal: 'Même intention' }),
    team({ id: 't2', goal: 'même intention' }),
  ])
  ok('le même brief écrit deux fois n’est pas répété', r.teams[0].goal === 'Même intention', r.teams[0].goal)
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', agents: [role('ceo')] }),
    team({ id: 't2', agents: [role('ceo'), custom('Juriste maison')] }),
  ])
  const noms = r.teams[0].agents.map((a) => a.name)
  ok('un coéquipier créé à la main est repris', noms.includes('Juriste maison'), noms.join(', '))
  ok('et il a une place à lui sur la grille',
    new Set(r.teams[0].agents.map((a) => `${a.gx},${a.gy}`)).size === r.teams[0].agents.length,
    'deux coéquipiers sur la même case se recouvriraient dans la scène 3D')
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', agents: [role('ceo'), role('marketer')] }),
    team({ id: 't2', agents: [role('ceo'), role('marketer')] }),
  ])
  ok('les agents de rôle ne sont PAS recopiés', r.teams[0].agents.length === 2,
    'ils sont identiques d’une copie à l’autre · les reprendre remplirait la grille de sosies')
}
{
  const r = D.dedupeTeams([
    team({ id: 't1', agents: [custom('Juriste maison')] }),
    team({ id: 't2', agents: [custom('Juriste maison')] }),
  ])
  ok('le même coéquipier créé des deux côtés n’arrive pas en double',
    r.teams[0].agents.filter((a) => a.name === 'Juriste maison').length === 1)
}
{
  // Le barème ne doit PAS préférer une copie d'un seul agent maison à une
  // équipe complète : le brief et les agents maison sont repris de toute façon,
  // l'effectif configuré ne se rattrape pas.
  const pleine = Array.from({ length: 24 }, (_, i) => ({
    id: 'p' + i, name: 'r' + i, role: 'r' + i, gx: i % D.COLS, gy: Math.floor(i / D.COLS),
  }))
  const r = D.dedupeTeams([
    team({ id: 't1', agents: pleine }),
    team({ id: 't2', agents: [custom('En trop')] }),
  ])
  ok('c’est l’équipe complète qui est gardée, pas la copie d’un seul agent',
    r.teams[0].id === 't1' && r.teams[0].agents.length === 24,
    'garder la petite ferait disparaître vingt-trois coéquipiers pour en sauver un')
  ok('et personne n’est éjecté pour faire de la place',
    r.teams[0].agents.every((a) => a.name !== 'En trop'))
  ok('mais la perte est DITE, avec le nom à recréer',
    /équipe pleine, à recréer : En trop/.test(r.notes[0]),
    r.notes[0])
}
{
  // À effectif égal, celle qui porte déjà l'agent maison : sa reprise ne peut
  // pas échouer faute de place.
  const r = D.dedupeTeams([
    team({ id: 't1', agents: [role('ceo'), role('marketer')] }),
    team({ id: 't2', agents: [role('ceo'), custom('Juriste maison')] }),
  ])
  ok('à effectif égal, celle qui porte l’agent maison l’emporte', r.teams[0].id === 't2')
}

console.log('\n--- l’ordre à l’écran ---------------------------------------')
{
  const r = D.dedupeTeams([
    team({ id: 'a1', archetype: 'social' }),
    team({ id: 'b1', archetype: 'startup' }),
    team({ id: 'a2', archetype: 'social', goal: 'le plus riche' }),
    team({ id: 'c1', archetype: 'app' }),
  ])
  ok('la gardée reste à la place de la PREMIÈRE copie',
    r.teams.map((t) => t.archetype).join(',') === 'social,startup,app',
    'sinon le nettoyage réordonne la page sous les yeux de quelqu’un qui n’a rien demandé')
  ok('et le brief de la copie la rejoint sur place',
    r.teams[0].id === 'a1' && r.teams[0].goal === 'le plus riche')
}

console.log('\n--- la définition unique ------------------------------------')
{
  const liste = [team({ id: 't1', companyId: 'c1', archetype: 'social' })]
  ok('existingTeam trouve l’équipe déjà présente',
    D.existingTeam(liste, 'c1', 'social')?.id === 't1')
  ok('et ne la confond pas avec une autre entreprise',
    D.existingTeam(liste, 'c2', 'social') === undefined,
    'c’est la MÊME définition que le nettoyage · deux définitions qui divergent, c’est par là que les doublons revenaient')
}
{
  ok('la grille du module est celle du store', D.COLS === 6 && D.ROWS === 4,
    `${D.COLS} × ${D.ROWS} = ${D.COLS * D.ROWS}`)
}

console.log('\n--- rien à faire ne fait rien -------------------------------')
{
  const propre = [team({ id: 't1', archetype: 'social' }), team({ id: 't2', archetype: 'app' })]
  const r = D.dedupeTeams(propre)
  ok('une liste déjà propre ressort identique',
    r.merged === 0 && r.notes.length === 0 && r.teams.length === 2)
  const encore = D.dedupeTeams(r.teams)
  ok('et le nettoyage est idempotent', encore.merged === 0,
    'il tourne à chaque ouverture · il ne doit jamais grignoter')
  ok('une liste vide ne casse rien', D.dedupeTeams([]).teams.length === 0)
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
