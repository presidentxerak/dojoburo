// The four full-screen surfaces, and the one-team-per-speciality rule.
//
// Dojo settings, Place & tune, the token dial and Graph mode are the same weight
// of screen, so they must behave identically: full screen inside the app's 10px
// frame, one round ✕ in the same corner, Escape closes. That is a geometric
// claim about the rendered page — the only way to check it is to open all four
// in a real browser and measure them, which is what this does.
//
// It also proves the chooser: Select all, and that a team already in the
// project is shown, explained, and impossible to hire twice.
//
// Run:  npm run preview   (in another shell)
//       node scripts/verify-surfaces.mjs
import { chromium } from 'playwright'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { MENU_PROJECTS, MENU_EFFORT, MENU_CREW, MENU_PROGRESS } from './lib/menuLabels.mjs'
const SHOT = process.env.SHOT_DIR || mkdtempSync(join(tmpdir(), 'surfaces-'))
const B = process.env.BASE_URL || 'http://localhost:4173/'
let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }
process.on('unhandledRejection', (e) => { console.log('\nthrew: ' + (e?.message ?? e)); process.exit(1) })

const br = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' })
const p = await br.newPage({ viewport: { width: 1440, height: 950 } })
// The private beta gate stands in front of every route · let this browser in
// before the suite starts, so it tests the app rather than the door.
// verify-gate.mjs is what tests the door.
await p.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })

const errs = []
p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message))

// ---- the chooser -------------------------------------------------------------
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
await p.locator('.cc-card input').fill('Novaranly')
await p.locator('.cc-go').click()
await p.waitForTimeout(1200)

const total = await p.locator('.ct-grid .tcard').count()
ok(await p.locator('.ct-all').isVisible(), 'the chooser offers Select all')
ok((await p.locator('.ct-all').innerText()).includes(String(total)), `Select all names the count · ${await p.locator('.ct-all').innerText()}`)
await p.locator('.ct-all').click()
await p.waitForTimeout(300)
ok(await p.locator('.tcard.on').count() === total, `one tap selects every team (${await p.locator('.tcard.on').count()}/${total})`)
ok(/Clear/i.test(await p.locator('.ct-all').innerText()), 'and the same button clears them again')
await p.locator('.ct-all').click()
await p.waitForTimeout(250)
ok(await p.locator('.tcard.on').count() === 0, 'clearing leaves nothing selected')

// pick two and go
await p.locator('.ct-grid .tcard').nth(0).click()
await p.locator('.ct-grid .tcard').nth(1).click()
const firstLabel = await p.locator('.ct-grid .tcard').nth(0).locator('.tcard-title').innerText()
await p.locator('.ct-go').click()
await p.waitForTimeout(3500)
await p.screenshot({ path: SHOT + '/u-dojo.png' })

// ---- no duplicates ------------------------------------------------------------
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(300)
await p.locator('.tb-menu-item', { hasText: MENU_PROJECTS }).click()
await p.waitForTimeout(1000)
// L'entrée « dojos » ouvre le profil : une carte par entreprise. On ouvre celle
// qu'on vient de construire, PUIS on y ajoute une équipe · le bouton de l'écran
// des entreprises en démarre une seconde, qui ne posséderait rien.
await p.locator('.cocard-face').first().click()
await p.waitForTimeout(700)
await p.locator('.ph-addteam').click()
await p.waitForTimeout(1000)
await p.screenshot({ path: SHOT + '/u-chooser-owned.png' })
ok(await p.locator('.tcard.owned').count() === 2, `the two teams already hired are marked · ${await p.locator('.tcard.owned').count()}`)
ok(await p.locator('.ct-have').isVisible(), 'and the page says why')
const owned = p.locator('.tcard.owned').first()
ok((await owned.innerText()).toLowerCase().includes('hired'), 'an owned card says so on its face')
ok(await owned.locator('.tcard-owned').evaluate((el) => {
  const b = el.getBoundingClientRect(), c = el.closest('.tcard').getBoundingClientRect()
  return b.right <= c.right + 0.5 && b.width > 0
}), 'the badge fits inside the card')
ok(await owned.isDisabled(), 'an owned card cannot be picked again')
await owned.click({ force: true })
await p.waitForTimeout(250)
ok(await p.locator('.tcard.on').count() === 0, 'clicking it selects nothing')
const all = await p.locator('.ct-all').innerText()
ok(all.includes(String(await p.locator('.ct-grid .tcard').count() - 2)), `Select all skips what you own · ${all}`)
await p.locator('.ct-all').click()
await p.waitForTimeout(300)
ok(await p.locator('.tcard.on').count() === (await p.locator('.ct-grid .tcard').count()) - 2, 'select all ticks only what is left')

// back to the project, into the dojo
await p.locator('.ct-back').click()
await p.waitForTimeout(900)
const rows = await p.locator('.tmcard').count()
ok(rows === 2, `still two teams, no twin created (${rows})`)
ok(await p.locator('.ph-dup').count() === 0, 'and nothing is flagged as a duplicate')
await p.locator('.tmcard .btn.primary').first().click()
await p.waitForTimeout(2500)

/** La signature du dessin de la croix de fermeture · prise dans la page.
 *  La première rencontrée fait référence pour toutes les suivantes, donc
 *  aucun chemin n'est recopié ici : une garde qui redécrit le dessin devient
 *  une deuxième source de vérité, et elle dérive de la première. */
let crossSig = null
const closeSignature = () => p.evaluate(() => {
  const svg = document.querySelector('.modhost-close svg.bh-icon')
  return svg ? svg.innerHTML.replace(/\s+/g, ' ').trim() : ''
})

// ---- the four full-screen surfaces --------------------------------------------
const surfaces = [
  ['Place & tune', () => p.locator('.dojo-ctl button', { hasText: 'Place' }).click(), 'u-fs-place.png'],
  // the dial no longer sits in the header · it lives in the menu, under Credits
  ['the token dial', async () => {
    await p.locator('.tb-menu-btn').click()
    await p.waitForTimeout(300)
    await p.locator('.tb-menu-item', { hasText: MENU_EFFORT }).click()
  }, 'u-fs-dial.png'],
  ['Graph mode', () => p.locator('.dojo-ctl-graph').click(), 'u-fs-graph.png'],
]
for (const [name, open, shot] of surfaces) {
  await open()
  await p.waitForTimeout(1200)
  await p.screenshot({ path: SHOT + '/' + shot })
  const fs = p.locator('.modhost-fs.fs')
  ok(await fs.count() === 1, `${name} opens one full-screen surface`)
  const box = await fs.boundingBox()
  const vp = p.viewportSize()
  // the app frames every full-screen surface with a 10px window margin
  ok(box && box.x === 10 && box.y === 0 && box.width === vp.width - 20 && box.height === vp.height,
    `${name} fills the screen inside the app's 10px frame · ${JSON.stringify(box)}`)
  const x = fs.locator('.modhost-close')
  ok(await x.count() === 1, `${name} has exactly one close button`)
  const xb = await x.boundingBox()
  ok(xb && xb.x > vp.width - 120 && xb.y < 90, `${name} closes from the top right · ${JSON.stringify(xb)}`)
  // LA MÊME CROIX PARTOUT · elle était un caractère et cette garde comparait
  // son texte. Elle est dessinée maintenant, donc le texte est vide et la
  // garde échouait sur du code juste. Ce qu'elle voulait dire reste vrai et
  // vaut d'être tenu : toutes les surfaces se ferment avec le MÊME contrôle.
  const sig = await closeSignature()
  ok(sig.length > 10, `${name} closes with a drawn cross, not a character`)
  if (crossSig === null) crossSig = sig
  ok(sig === crossSig, `${name} uses the same cross as the others`)
  ok(await fs.locator('.modhost-name').isVisible(), `${name} carries a title in the bar`)
  // escape closes it
  await p.keyboard.press('Escape')
  await p.waitForTimeout(700)
  ok(await p.locator('.modhost-fs.fs').count() === 0, `${name} closes on Escape`)
}

// the close button itself, on the graph
await p.locator('.dojo-ctl-graph').click()
await p.waitForTimeout(1200)
ok(await p.locator('.dg-canvas').isVisible(), 'graph: the canvas renders inside the full-screen body')
ok(await p.locator('.dg-lead-row .dg-node.lead').count() === 1, 'graph: the lead is still on top')
const links = await p.locator('.dg-link').evaluateAll((els) => els.map((e) => e.getAttribute('d')))
ok(links.length > 0 && links.every((d) => d && !/NaN|Infinity/.test(d)), `graph: ${links.length} links still measured correctly`)
ok(await p.locator('.dg-leg.report').isVisible(), 'graph: the legend moved into the bar')
await p.locator('.modhost-fs.fs .modhost-close').click()
await p.waitForTimeout(800)
ok(await p.locator('.modhost-fs.fs').count() === 0, 'graph: the ✕ closes it')
ok(await p.locator('.dojo-ctl-graph.on').count() === 0, 'graph: the button un-presses itself')
ok(await p.locator('.dash-stage').isVisible(), 'graph: the dojo is underneath, untouched')

// Dojo settings is the surface the others were harmonised with · it left the
// dojo header when "Manage team" was folded into its own "Place & tune" step,
// so it is reached from the menu now
await p.evaluate(() => {
  document.querySelector('.tb-menu-btn').click()
  requestAnimationFrame(() => [...document.querySelectorAll('.tb-menu-item')]
    .find((b) => b.textContent.includes('Dojo settings'))?.click())
})
await p.waitForTimeout(1800)
await p.screenshot({ path: SHOT + '/u-fs-settings.png' })
const sx = p.locator('.modhost-close').first()
const sb = await sx.boundingBox()
const vp = p.viewportSize()
ok(sb && sb.x > vp.width - 120 && sb.y < 30, `settings: the same close button, at the same height as the others · ${JSON.stringify(sb)}`)
const settingsSig = await closeSignature()
ok(settingsSig.length > 10, 'settings: closes with a drawn cross, not a character')
ok(settingsSig === crossSig, 'settings: the same cross as the others')
ok(await p.locator('.studio-page .topbar-app').count() === 0, 'settings: no second header above the studio bar')

// ---- mobile ------------------------------------------------------------------
const m = await br.newPage({ viewport: { width: 390, height: 844 } })
// The private beta gate stands in front of every route · let this browser in
// before the suite starts, so it tests the app rather than the door.
// verify-gate.mjs is what tests the door.
await m.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })

m.on('pageerror', (e) => errs.push('M PAGEERROR ' + e.message))
// a fresh page is a fresh browser context · build a project here too
await m.goto(B + '#app', { waitUntil: 'networkidle' })
await m.waitForTimeout(1500)
await m.locator('.cc-card input').fill('Pocket')
await m.locator('.cc-go').click()
await m.waitForTimeout(1200)
await m.locator('.ct-grid .tcard').nth(0).click()
await m.locator('.ct-go').click()
await m.waitForTimeout(3500)

const noSideScroll = () => m.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)
const mGraph = m.locator('.mbar-4 button', { hasText: 'Graph' })
ok(await mGraph.count() === 1, 'mobile: the bottom bar carries Graph')
await mGraph.click()
await m.waitForTimeout(1600)
await m.screenshot({ path: SHOT + '/u-m-graph.png' })
ok(await m.locator('.modhost-fs.fs .modhost-close').isVisible(), 'mobile graph: the same close button')
ok(await noSideScroll(), 'mobile graph does not overflow sideways')
await m.locator('.modhost-fs.fs .modhost-close').click()
await m.waitForTimeout(700)

await m.locator('.tb-menu-btn').click()
await m.waitForTimeout(400)
await m.locator('.tb-menu-item', { hasText: MENU_EFFORT }).click()
await m.waitForTimeout(1200)
await m.screenshot({ path: SHOT + '/u-m-dial.png' })
ok(await m.locator('.modhost-fs.fs .modhost-close').isVisible(), 'mobile dial: the same close button')
ok(await noSideScroll(), 'mobile dial does not overflow sideways')
const mx = await m.locator('.modhost-fs.fs .modhost-close').boundingBox()
ok(mx && mx.x > 390 - 80 && mx.y < 80, `mobile: still the top right corner · ${JSON.stringify(mx)}`)
await m.locator('.modhost-fs.fs .modhost-close').click()
await m.waitForTimeout(600)
ok(await m.locator('.modhost-fs.fs').count() === 0, 'mobile: it closes')

// --- the dojo must not starve the app ------------------------------------
// The 3D room used to render every frame forever, so opening anything over it
// queued behind a render loop: five seconds for the menu, thirteen for My
// Credits. From the outside that is a page that never loads, and it was
// reported as exactly that. Surfaces now pause the scene while they are up.
await p.setViewportSize({ width: 1440, height: 950 })
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(3000)
// Click through the DOM and time the surface appearing. Playwright's own
// actionability wants two identical animation frames, which this box (software
// WebGL) cannot deliver quickly — that measures the renderer, not the app. What
// the founder feels is: I clicked, and how long until it is there.
//
// Et on ne sonde PAS avec requestAnimationFrame, qui était la moitié du
// problème qu'on croyait éviter : sur cette machine la scène 3D rend à deux
// images par seconde, donc un rappel d'animation arrive toutes les 500 ms et
// la mesure se met à compter les images du rasteriseur. La même surface a
// été chronométrée à 31 ms, 1435 ms et 1513 ms sur trois passages successifs
// sans qu'une ligne de code change. setTimeout n'est pas lié aux images : il
// mesure le délai réel entre le clic et l'apparition, et un blocage de cinq
// secondes se lit toujours comme cinq secondes.
for (const [label, item] of [['Billing · your key and plan', 'Billing'], ['Quick search', 'Quick search'], ['Dojo settings', 'Dojo settings']]) {
  const ms = await p.evaluate((text) => new Promise((res) => {
    const btn = document.querySelector('.tb-menu-btn')
    btn.click()
    setTimeout(() => {
      const row = [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(text))
      const t0 = performance.now()
      row.click()
      const check = () => {
        if (document.querySelector('.modhost-fs.fs')) res(performance.now() - t0)
        else if (performance.now() - t0 > 12000) res(performance.now() - t0)
        else setTimeout(check, 4)
      }
      setTimeout(check, 4)
    }, 60)
  }), item)
  ok(ms < 1500, `${label} appears promptly · ${Math.round(ms)}ms`)
  await p.evaluate(() => document.querySelector('.modhost-close')?.click())
  await p.waitForTimeout(400)
}

ok(errs.length === 0, errs.length ? 'page errors: ' + JSON.stringify(errs.slice(0, 4)) : 'no page errors')
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
// LA SORTIE EST VIDÉE AVANT DE PARTIR, SANS RENONCER À PARTIR.
//
// Vers un terminal, écrire est synchrone. Vers un TUYAU · c'est-à-dire dès que
// le portail lance cette épreuve · c'est asynchrone, et « process.exit() » s'en
// va sans attendre : ce qui n'est pas encore sorti est jeté. Mesuré sur une
// épreuve de données : 528 lignes une fois, 179 la suivante, code de sortie 0
// dans les deux cas. Ce qui disparaît en premier, c'est le DÉTAIL d'un échec,
// donc la seule chose qu'on lit pour le corriger.
//
// UNE ÉPREUVE NAVIGATEUR NE PEUT PAS SE CONTENTER DE POSER SON CODE, parce
// qu'un navigateur laisse parfois une poignée ouverte et que le processus
// resterait pendu jusqu'au budget du portail · un faux échec de cinq minutes.
// D'où les deux temps : on pose le code et on laisse Node sortir seul, ce qui
// vide la file ; et une minuterie DÉRÉFÉRENCÉE force la sortie une demi-seconde
// plus tard si quelque chose retient encore. Déréférencée, elle n'empêche pas
// la sortie naturelle · elle ne se déclenche que s'il y a effectivement de quoi
// la retenir.
process.exitCode = fails ? 1 : 0
setTimeout(() => process.exit(process.exitCode ?? 0), 500).unref()
