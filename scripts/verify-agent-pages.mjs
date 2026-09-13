// Les dix-huit pages d'agent, ouvertes une par une dans un vrai navigateur.
//
// L'audit statique (scripts/audit-agents.mjs) dit ce que les données portent.
// Il ne dit pas ce que l'écran rend : qu'une pastille d'aide ne s'ouvre pas sur
// du vide, qu'un agent sans application n'affiche pas une rangée fantôme, que
// les livrables proposés soient CEUX de cet agent. C'est ce que fait ce fichier,
// en visitant chaque rôle.
//
//   npm run preview   puis   node scripts/verify-agent-pages.mjs
import { chromium } from 'playwright'
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = 'node_modules/.dojo-agentpages'
mkdirSync(OUT, { recursive: true })
const r = await build({
  entryPoints: ['src/data/roleAgents.ts'], bundle: true, format: 'esm',
  platform: 'node', write: false, logLevel: 'silent',
})
writeFileSync(join(OUT, 'roles.mjs'), r.outputFiles[0].text)
const { ROLE_AGENTS } = await import(pathToFileURL(join(OUT, 'roles.mjs')).href)

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

// Un dojo qui porte LES DIX-HUIT rôles · c'est le seul moyen d'ouvrir chaque
// page. Un dojo normal n'en sème que huit.
const SAVED = {
  account: { id: 'guest_audit', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_a', name: 'Acme', createdAt: 1 }],
  activeCompanyId: 'c_a',
  dojos: [{
    id: 'd_a', name: 'Audit', companyId: 'c_a', template: 'startup', archetype: 'startup', goal: '',
    agents: ROLE_AGENTS.map((role, i) => ({
      id: 'ag' + i, name: role.code, fn: role.dept, role: role.id,
      skinId: 's1', tasks: [], budget: 1, gx: i % 6, gy: Math.floor(i / 6),
    })),
  }],
  activeDojoId: 'd_a',
  projectName: 'Acme',
}

const ctx = await b.newContext({ viewport: { width: 1400, height: 1100 } })
await ctx.addInitScript((saved) => {
  try {
    localStorage.setItem('dojoburo.beta', '1974')
    localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
  } catch { /* private */ }
}, SAVED)
const p = await ctx.newPage()
const errs = []
p.on('pageerror', (e) => errs.push(`${e.message}`))

// Une flotte où tout est joignable et rien n'est relié · l'état le plus dense
// en boutons, donc celui qui fait le plus de rendus différents.
await p.route('**/api/connect?action=list*', (route) => route.fulfill({
  status: 200, contentType: 'application/json',
  body: JSON.stringify({
    ok: true, backend: true, byok: { connected: false, hint: null },
    tools: [...new Set(ROLE_AGENTS.flatMap((x) => x.apps ?? []))]
      .map((id) => ({ id, available: true, connected: false, account: null })),
  }),
}))

await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(3000)

// On passe par le tableau de bord et ses cartes plutôt que par la palette :
// « Chief » y correspond aussi à l'action « Launch Chief », et une épreuve qui
// dépend d'un classement de résultats mesure la palette, pas les pages.
const toRoster = async () => {
  await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk')))
  await p.waitForTimeout(300)
  const i = p.locator('.cmdk-input')
  if (await i.count()) {
    await i.fill('CEO dashboard')
    await p.waitForTimeout(300)
    await p.keyboard.press('Enter')
    await p.waitForTimeout(900)
  }
}

const rows = []
for (const role of ROLE_AGENTS) {
  await toRoster()
  const card = p.locator('.agent-card').filter({ hasText: role.code }).first()
  if (!(await card.count())) { rows.push({ role, reached: false, opened: 'aucune carte au tableau de bord' }); continue }
  await card.click().catch(() => {})
  await p.waitForTimeout(1000)

  // Sélectionner un agent qui possède un MODULE ouvre ce module, pas sa page :
  // Dashboard remplace tout l'écran par ModuleHost. On le constate plutôt que
  // de le compter comme une page manquante.
  const inModule = (await p.locator('.modhost-bar').count()) > 0
  const opened = await p.locator('.ad-role').first().innerText().catch(() => '')
  if (opened !== role.title) {
    rows.push({
      role, reached: false, module: inModule,
      // ce qui est perdu · les livrables de cet agent, que ce panneau ne porte pas
      lostTasks: inModule ? (await p.locator('.agw-task').count()) === 0 : null,
      opened: inModule ? 'son panneau de commande' : (opened || 'rien'),
    })
    // Un panneau plein écran laisse l'app dans un état dont la suite de la
    // boucle ne se relève pas · on repart d'une page propre.
    await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
    await p.waitForTimeout(1500)
    continue
  }

  rows.push({
    role,
    reached: true,
    // le titre « What X can do for you » · sans lui la page n'offre rien à faire
    work: await p.locator('.agw').count(),
    tasks: await p.locator('.agw-task').count(),
    apps: await p.locator('.agw-applist .agw-app').count(),
    howto: await p.locator('.agw-howto').count(),
    blurb: (await p.locator('.ad-blurb').first().innerText().catch(() => '')).trim().length,
    // la pastille « i » · on l'ouvre et on regarde si elle dit quelque chose
    help: await (async () => {
      const dot = p.locator('.ad-head .infodot').first()
      if (!(await dot.count())) return -1
      await dot.click().catch(() => {})
      await p.waitForTimeout(250)
      const txt = (await p.locator('.infodot-body').first().innerText().catch(() => '')).trim()
      await p.locator('.infodot-x').first().click().catch(() => {})
      await p.waitForTimeout(200)
      return txt.length
    })(),
    labels: (await p.locator('.agw-task strong').allInnerTexts().catch(() => [])).map((s) => s.trim()),
  })
}

/* ---- le compte rendu ---------------------------------------------------- */
let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

console.log('AGENT        RÔLE                   ATTEINT  BLOC  TÂCHES  APPS  AIDE(car.)')
console.log('-'.repeat(76))
for (const r of rows) {
  console.log(
    String(r.role.code).padEnd(12) + String(r.role.title).padEnd(23) +
    String(r.reached ? 'oui' : 'NON').padEnd(9) +
    String(r.reached ? (r.work ? 'oui' : 'NON') : '-').padEnd(6) +
    String(r.reached ? r.tasks : '-').padEnd(8) +
    String(r.reached ? r.apps : '-').padEnd(6) +
    String(r.reached ? (r.help < 0 ? 'absente' : r.help) : '-'),
  )
}
console.log('-'.repeat(76) + '\n')

const reached = rows.filter((r) => r.reached)

// Chief n'a pas de carte au tableau de bord, et c'est voulu : le tableau de
// bord EST sa page, son composeur est en haut. Sentinel et Vaultor, eux,
// ouvrent leur panneau de réglages — un écran qui ne porte PAS leurs livrables.
const OPENS_A_PANEL = ['sentinel', 'vaultor']
const NO_ROSTER_CARD = ['chief']
const unexpected = rows.filter((r) => !r.reached
  && !OPENS_A_PANEL.includes(r.role.id) && !NO_ROSTER_CARD.includes(r.role.id))
ok('toute page d’agent s’ouvre, sauf celles qu’on a déclarées autrement',
  unexpected.length === 0,
  unexpected.map((r) => `${r.role.code} → ${r.opened}`).join(', ')
  || `${reached.length} pages · ${OPENS_A_PANEL.length} panneaux · ${NO_ROSTER_CARD.length} sans carte`)

// Et la conséquence, mesurée plutôt que supposée : les livrables d'un agent qui
// ouvre sur son panneau ne sont proposés nulle part.
const buried = rows.filter((r) => OPENS_A_PANEL.includes(r.role.id) && r.lostTasks)
ok('un panneau de réglages n’enterre pas les livrables de son agent',
  buried.length === 0,
  buried.map((r) => r.role.code).join(', ')
  || 'aucun livrable perdu derrière un panneau')

const noWork = reached.filter((r) => !r.work)
ok('chacune porte son bloc « ce qu’il peut faire pour vous »', noWork.length === 0,
  noWork.map((r) => r.role.code).join(', '))

const noTasks = reached.filter((r) => r.tasks === 0)
ok('chacune propose au moins un livrable', noTasks.length === 0, noTasks.map((r) => r.role.code).join(', '))

const noBlurb = reached.filter((r) => r.blurb < 10)
ok('chacune se présente en une phrase', noBlurb.length === 0, noBlurb.map((r) => r.role.code).join(', '))

const noHowto = reached.filter((r) => r.apps > 0 && r.howto === 0)
ok('le chemin « How to connect apps » est là dès qu’il y a des applications',
  noHowto.length === 0, noHowto.map((r) => r.role.code).join(', '))

// Une pastille « i » qui s'ouvre sur rien est pire que pas de pastille : on
// clique, une fenêtre s'ouvre avec un titre et un bouton Fermer, et on conclut
// que l'application est cassée. `help === -1` veut dire qu'il n'y a pas de
// pastille du tout, ce qui est le bon comportement quand il n'y a rien à dire.
const emptyHelp = reached.filter((r) => r.help >= 0 && r.help < 40)
ok('aucune pastille d’aide ne s’ouvre sur du vide', emptyHelp.length === 0,
  emptyHelp.length
    ? `${emptyHelp.length} vides : ${emptyHelp.map((r) => r.role.code).join(', ')}`
    : `${reached.filter((r) => r.help > 0).length} agents ont une fiche, ${reached.filter((r) => r.help < 0).length} n’affichent pas de pastille`)

// LE point de cet audit · six spécialistes différents ne peuvent pas offrir les
// mêmes deux livrables et prétendre chacun être un métier.
const byLabels = new Map()
for (const r of reached) {
  const key = r.labels.join('|')
  if (!byLabels.has(key)) byLabels.set(key, [])
  byLabels.get(key).push(r.role.code)
}
const shared = [...byLabels.entries()].filter(([, who]) => who.length > 1)
ok('deux agents différents ne proposent pas exactement la même chose',
  shared.length === 0,
  shared.map(([k, who]) => `${who.join('+')} → « ${k.split('|').join(' / ')} »`).join(' · ') || '')

ok('aucune erreur JavaScript sur les dix-huit pages', errs.length === 0, errs.slice(0, 2).join(' | '))

await b.close()
rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
