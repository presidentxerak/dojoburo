// Est-ce que TOUT tient, quand le serveur ne tient pas ?
//
// Les trois gros défauts trouvés cette semaine avaient la même signature : un
// écran qui attend quelque chose qui ne viendra pas, et qui ne le dit jamais.
// On ne les a pas trouvés en lisant le code — on les a trouvés en regardant
// l'écran. Ce fichier fait ça systématiquement, sur toutes les surfaces, dans
// les deux pannes que la production produit vraiment :
//
//   · ABSENT   · /api répond 404 · l'endpoint n'est pas déployé, ou le
//                déploiement n'a ni base ni coffre. C'est l'état par défaut
//                d'une preview, et celui d'une moitié des installations ;
//   · MUET     · /api ne répond JAMAIS · la base est injoignable, la fonction
//                dépasse son temps, le réseau tombe en cours de route. C'est
//                la panne qui a produit « Loading your company… » pour
//                toujours, et c'est celle qu'aucun `catch` ne rattrape.
//
// Trois choses sont mesurées sur chaque surface :
//
//   1 · des erreurs JavaScript · une seule suffit à vider un panneau ;
//   2 · un écran resté en attente · « Loading… », un compteur de secondes ou
//       une roue, encore là bien après l'échéance. C'est le défaut exact
//       qu'on vient de corriger, et il ne doit revenir nulle part ;
//   3 · un bouton MORT · cliqué, rien ne bouge : ni le DOM, ni l'adresse, ni
//       une requête. Ce n'est pas toujours un bug, mais c'est toujours une
//       chose à regarder — et un écran entier de boutons morts est un écran
//       qui ne marche pas.
//
// Les commandes destructrices ne sont pas cliquées. Éprouver « Supprimer » en
// le déclenchant est une façon de perdre le reste de l'épreuve.
//
//   npm run preview   puis   node scripts/audit-surfaces.mjs
import { chromium } from 'playwright'
import { MENU_PROJECTS } from './lib/menuLabels.mjs'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

const SAVED = {
  account: { id: 'guest_s', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_s', name: 'Acme', createdAt: 1 }],
  activeCompanyId: 'c_s',
  dojos: [{
    id: 'd_s', name: 'Campagne', companyId: 'c_s', template: 'startup', archetype: 'social', goal: '',
    agents: [
      { id: 's1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 's2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
      { id: 's3', name: 'Busino', fn: 'Finance', role: 'busino', skinId: 's3', tasks: [], budget: 1, gx: 2, gy: 0 },
      { id: 's4', name: 'Sentinel', fn: 'Security', role: 'sentinel', skinId: 's4', tasks: [], budget: 1, gx: 3, gy: 0 },
    ],
  }],
  activeDojoId: 'd_s',
  projectName: 'Acme',
}

// Ce qu'on ne clique pas · le déclencher coûterait le reste de l'épreuve, et
// pour certains, des données.
const DESTRUCTIVE = /delete|remove|disconnect|sign out|log ?out|revoke|clear|reset|archive|supprim/i
// Ce qui emmène ailleurs · on ne suit pas, on reviendrait dans un autre monde.
const LEAVES = /^(a\b|.*\[target=_blank\])/

const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

/** Ce qui reste à l'écran alors que l'attente aurait dû finir. */
const STUCK = /loading|chargement|connexion…|connecting…|^…$/i

async function sweep(mode) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 950 } })
  await ctx.addInitScript((saved) => {
    try {
      localStorage.setItem('dojoburo.beta', '1974')
      localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
    } catch { /* private */ }
  }, SAVED)
  const p = await ctx.newPage()

  const errs = []
  p.on('pageerror', (e) => errs.push(e.message))
  p.on('console', (m) => { if (m.type() === 'error' && !/favicon|404|Failed to load resource/i.test(m.text())) errs.push('console: ' + m.text().slice(0, 120)) })

  if (mode === 'absent') {
    // 404 sur tout /api · l'endpoint n'existe pas sur ce déploiement.
    await p.route('**/api/**', (r) => r.fulfill({ status: 404, contentType: 'application/json', body: '{"ok":false,"error":"not_found"}' }))
  } else {
    // MUET · la requête part et ne revient jamais. C'est la panne qui ne
    // déclenche aucun `catch`, donc la seule qui révèle un écran sans issue.
    await p.route('**/api/**', () => { /* jamais rempli */ })
  }

  // Un observateur de mutations, réinstallé à chaque navigation · c'est lui qui
  // dit si un clic a produit QUELQUE CHOSE.
  await p.addInitScript(() => {
    window.__moved = 0
    const boot = () => {
      const o = new MutationObserver(() => { window.__moved++ })
      o.observe(document.documentElement, { subtree: true, childList: true, attributes: true, characterData: true })
    }
    if (document.documentElement) boot()
    else document.addEventListener('DOMContentLoaded', boot)
  })

  const surfaces = []

  const visit = async (name, go) => {
    const before = errs.length
    await go()
    await p.waitForTimeout(3000)
    surfaces.push({ name, errs: errs.length - before })
    return name
  }

  const home = async () => {
    await p.goto(`${B}/#app`, { waitUntil: 'domcontentloaded' })
    await p.reload({ waitUntil: 'domcontentloaded' })
    await p.waitForTimeout(2600)
    for (let i = 0; i < 4 && (await p.locator('.modhost-close').count()); i++) {
      await p.locator('.modhost-close').first().click().catch(() => {}); await p.waitForTimeout(300)
    }
  }
  const viaMenu = async (rx) => {
    await home()
    const m = p.locator('.tb-menu-btn')
    if (!(await m.count())) return
    await m.click().catch(() => {}); await p.waitForTimeout(500)
    const it = p.locator('.tb-menu-item', { hasText: rx })
    if (await it.count()) { await it.first().click().catch(() => {}); await p.waitForTimeout(2000) }
  }
  const viaCard = async (code) => {
    await home()
    await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk')))
    await p.waitForTimeout(400)
    const i = p.locator('.cmdk-input')
    if (await i.count()) { await i.fill('CEO dashboard'); await p.waitForTimeout(400); await p.keyboard.press('Enter'); await p.waitForTimeout(1200) }
    const card = p.locator('.agent-card').filter({ hasText: code }).first()
    if (await card.count()) { await card.click().catch(() => {}); await p.waitForTimeout(1600) }
  }

  await visit('landing', async () => { await p.goto(`${B}/`, { waitUntil: 'domcontentloaded' }) })
  await visit('academy', async () => { await p.goto(`${B}/academy`, { waitUntil: 'domcontentloaded' }) })
  await visit('guide', async () => { await p.goto(`${B}/guide`, { waitUntil: 'domcontentloaded' }) })
  await visit('app', home)
  await visit('mes entreprises', () => viaMenu(new RegExp(MENU_PROJECTS)))
  await visit('réglages du dojo', () => viaMenu(/Dojo settings/))
  await visit('facturation', () => viaMenu(/^Billing/))
  await visit('connecter les apps', () => viaMenu(/Connect apps/))
  await visit('réglages', () => viaMenu(/^Settings|Preferences/))
  await visit('effort', () => viaMenu(/How hard/))
  await visit('page d’agent (Scout)', () => viaCard('Scout'))
  await visit('module Chief', () => viaCard('Chief'))
  await visit('module Busino', () => viaCard('Busino'))
  await visit('module Sentinel', () => viaCard('Sentinel'))
  await visit('mode graphe', async () => {
    await home()
    const g = p.locator('.dojo-ctl-graph').first()
    if (await g.count()) { await g.click().catch(() => {}); await p.waitForTimeout(1800) }
  })

  /* ---- 1 · des erreurs JavaScript ------------------------------------- */
  const broken = surfaces.filter((s) => s.errs > 0)
  ok(`[${mode}] aucune erreur JavaScript sur les ${surfaces.length} surfaces`,
    broken.length === 0,
    broken.map((s) => `${s.name}(${s.errs})`).join(', ') || '')
  if (errs.length) console.log('    premières erreurs :', errs.slice(0, 4).join(' | '))

  /* ---- 2 · un écran resté en attente ----------------------------------- */
  // On repasse sur chaque surface après l'échéance et on demande à l'écran
  // s'il prétend encore charger quelque chose.
  // Uniquement en mode MUET : quand /api répond 404, la réponse arrive tout
  // de suite et attendre trente secondes ne prouve rien de plus.
  const stuckOn = []
  for (const [name, go] of mode !== 'muet' ? [] : [
    ['mes entreprises', () => viaMenu(new RegExp(MENU_PROJECTS))],
    ['facturation', () => viaMenu(/^Billing/)],
    ['connecter les apps', () => viaMenu(/Connect apps/)],
    ['module Sentinel', () => viaCard('Sentinel')],
    ['module Busino', () => viaCard('Busino')],
    ['page d’agent (Scout)', () => viaCard('Scout')],
  ]) {
    await go()
    // au-delà de l'échéance des requêtes · tout doit avoir tranché
    await p.waitForTimeout(28000)
    const txt = await p.evaluate(() => document.body.innerText || '')
    const lines = txt.split('\n').map((l) => l.trim()).filter(Boolean)
    const hit = lines.filter((l) => STUCK.test(l) && l.length < 60)
    if (hit.length) stuckOn.push(`${name}: « ${hit[0]} »`)
  }
  if (mode === 'muet') {
    ok('[muet] aucun écran ne prétend encore charger après l’échéance',
      stuckOn.length === 0, stuckOn.join(' | '))
  }

  await ctx.close()
  return errs
}

/* ---- et quand c'est le MONDE EXTÉRIEUR qui ne répond pas ---------------- */
//
// Une feuille de style distante est bloquante au rendu : tant qu'elle n'est pas
// arrivée, le navigateur ne peint rien. Tant que Google répond vite, cela ne se
// voit pas — et le jour où il ne répond pas (pare-feu d'entreprise, pays qui le
// filtre, réseau qui avale la requête sans la refuser), la page reste blanche
// jusqu'à ce que le navigateur abandonne. Mesuré sur cette machine, dont le
// proxy fait exactement cela : 12 901 ms de page blanche. Une fois la feuille
// sortie du chemin critique : 266 ms.
//
// C'est une dépendance qu'on ne contrôle pas. La règle est donc qu'elle ne peut
// pas décider si la page s'affiche.
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true })
  const p = await ctx.newPage()
  await p.route('**fonts.googleapis.com**', () => { /* ne répond jamais */ })
  const t0 = Date.now()
  await p.goto(`${B}/`, { waitUntil: 'commit' })
  await p.waitForFunction(
    () => { const r = document.getElementById('root'); return r && r.innerText.trim().length > 30 },
    { timeout: 20000 },
  ).catch(() => {})
  const seen = Date.now() - t0
  ok('la page s’affiche même si la police distante ne répond jamais', seen < 4000,
    `${seen} ms · une feuille de style tierce ne doit pas décider si la page se peint`)
  const font = await p.evaluate(() => getComputedStyle(document.body).fontFamily)
  ok('et le texte a une police de secours, pas rien', /\w/.test(font), font.split(',')[0])
  await ctx.close()
  console.log(out.slice(-2).join('\n'))
}

for (const mode of ['absent', 'muet']) {
  console.log(`\n########## /api ${mode.toUpperCase()} ##########`)
  await sweep(mode)
  console.log(out.slice(-2).join('\n'))
}

await b.close()
console.log('\n' + out.join('\n'))
const failed = out.filter((l) => l.startsWith('FAIL')).length
console.log(failed ? `\n${failed} FAILED` : '\nALL GREEN')
process.exit(failed ? 1 : 0)
