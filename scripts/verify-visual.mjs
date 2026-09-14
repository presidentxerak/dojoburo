import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  // The bundled Chromium, not a downloaded one. Without this the suite dies on
  // "npx playwright install" and reports nothing — which is what it had been
  // doing here, silently, while a summary line said zero failures.
  executablePath: process.env.PW_CHROMIUM || process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/|net::ERR|WebSocket|altnet|rippletest|xrplcluster/.test(e)
const errs = []
const page = await browser.newPage({ viewport: { width: 1340, height: 880 } })
// The private beta gate stands in front of #app. verify-gate.mjs tests the door;
// this suite is about what is behind it.
await page.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
page.on('console', (m) => { if (m.type() === 'error') errs.push('C:' + m.text()) })
page.on('pageerror', (e) => errs.push('P:' + e.message))
// Il comptait, mais ne CONCLUAIT pas : `ok` imprimait une coche ou une croix et
// le script sortait toujours en succès. La barrière le voyait donc vert quoi
// qu'il trouve — même chose qu'une épreuve sans assertion, avec l'apparence du
// sérieux en plus.
let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }

await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
// a fresh state, but keep the key that gets us through the door — a plain
// clear() locked the suite out of the app it exists to photograph
await page.evaluate(() => {
  const beta = localStorage.getItem('dojoburo.beta')
  localStorage.clear()
  if (beta) localStorage.setItem('dojoburo.beta', beta)
})
await page.reload({ waitUntil: 'load' })
await page.locator('canvas').first().waitFor({ timeout: 30000 }).catch(() => { /* reported below */ })
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/vis-office-default.png` })


// The Studio, Account and the rest are reached from the top-bar menu. This file
// clicked `.ws-dockbtn` — a dock button removed with the tabbed modal — so every
// run died here and the suite reported nothing.
async function openFromMenu(text) {
  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(250)
  await page.evaluate((t) => {
    [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(t))?.click()
  }, text)
  await page.waitForTimeout(700)
}
const closeSurface = async () => {
  await page.evaluate(() => document.querySelector('.modhost-close')?.click())
  await page.waitForTimeout(400)
}

// persist the seeded state so we can inspect it (guest sign-in writes localStorage).
// Signed out, the menu's own Sign in signs you in as a guest on the spot.
await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
await page.waitForTimeout(300)
await page.evaluate(() => document.querySelector('.tb-menu-auth .btn')?.click())
await page.waitForTimeout(600)
await page.waitForTimeout(300)

// (1) 3D avatar in agent card — try a few seat positions until the card opens
const cv = page.locator('canvas').first()
const b = await cv.boundingBox()
let cardOpen = 0
for (const [fx, fy] of [[0.30, 0.56], [0.42, 0.52], [0.24, 0.62], [0.36, 0.6], [0.5, 0.56]]) {
  await page.mouse.click(b.x + b.width * fx, b.y + b.height * fy)
  await page.waitForTimeout(400)
  cardOpen = await page.locator('.agent-panel:not(.empty)').count()
  if (cardOpen) break
}
// Picking a seat means hit-testing a software-rendered scene · a miss measures
// the renderer, not the app, so this reports rather than fails.
console.log(cardOpen ? '✓ agent card open' : '· agent card did not open (seat hit-test on software WebGL)')
if (cardOpen) {
  ok((await page.locator('.agent-head-avatar canvas').count()) === 1, 'la carte d’un coéquipier porte son portrait 3D')
}
await page.screenshot({ path: `${OUT}/vis-agentcard.png` })

// (2) support close button visible
await page.locator('.sb-launch').click()
await page.waitForTimeout(300)
const x = page.locator('.sb-x')
const xb = await x.boundingBox()
ok(!!xb && xb.width > 8 && xb.height > 8, 'la croix de fermeture de l’assistant est cliquable')
const contrast = await x.evaluate((el) => {
  const cs = getComputedStyle(el)
  return { color: cs.color, bg: cs.backgroundColor }
})
// `ok(true, …)` ne vérifiait rien : il imprimait deux couleurs et concluait
// que tout allait bien. La question posée était la bonne — la croix de
// fermeture est-elle LISIBLE — il manquait d'y répondre.
//
// Première tentative : comparer `color` à `backgroundColor` de l'élément. Elle
// a signalé « contraste 1.0, noir sur color(srgb 0 0 0 / 0.1) », ce qui est
// faux deux fois. Un fond à 10 % d'opacité n'est pas le fond : ce qu'on voit à
// travers est celui de l'ancêtre. Et ma lecture des couleurs ne savait pas lire
// la syntaxe `color(srgb …)`, si bien qu'un fond quasi transparent passait pour
// du noir opaque. Un instrument qui se trompe accuse le produit à sa place.
{
  const mesure = await x.evaluate((el) => {
    // toutes les écritures que le navigateur rend · rgb(), rgba(), color(srgb …)
    const lire = (c) => {
      const n = (c.match(/[\d.]+(?=%)?/g) || []).map(Number)
      if (!n.length) return null
      const srgb = /^color\(srgb/i.test(c)
      const a = c.includes('/') || n.length > 3 ? n[3] ?? 1 : 1
      const m = srgb ? 255 : 1
      return { r: n[0] * m, g: n[1] * m, b: n[2] * m, a }
    }
    // le fond EFFECTIF · on compose les couches translucides sur l'ancêtre
    // opaque, comme le navigateur le fait pour l'œil
    const couches = []
    let fond = { r: 255, g: 255, b: 255 }
    for (let a = el; a; a = a.parentElement) {
      const c = lire(getComputedStyle(a).backgroundColor)
      if (!c || c.a === 0) continue
      couches.push(c)
      if (c.a >= 0.999) { fond = c; break }
    }
    for (let i = couches.length - 1; i >= 0; i--) {
      const c = couches[i]
      fond = {
        r: c.r * c.a + fond.r * (1 - c.a),
        g: c.g * c.a + fond.g * (1 - c.a),
        b: c.b * c.a + fond.b * (1 - c.a),
      }
    }
    const fg = lire(getComputedStyle(el).color) || { r: 0, g: 0, b: 0, a: 1 }
    return { fg, fond }
  })
  const lum = (c) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4) }
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b)
  }
  const l1 = lum(mesure.fg)
  const l2 = lum(mesure.fond)
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  const rnd = (c) => `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})`
  ok(ratio > 2.5, `la croix de fermeture se voit sur son fond · contraste ${ratio.toFixed(1)} · ${rnd(mesure.fg)} sur ${rnd(mesure.fond)}`)
}
await page.screenshot({ path: `${OUT}/vis-supportclose.png` })
await x.click()

// (3) default dojo skins are varied — count distinct skin ids in the seeded HQ
const skinIds = await page.evaluate(() => {
  const raw = JSON.parse(localStorage.getItem('dojoburo.workshop.v1'))
  const d = raw.dojos.find((x) => x.id === raw.activeDojoId)
  return d.agents.map((a) => a.skinId)
})
ok(new Set(skinIds).size === skinIds.length && skinIds.length >= 12, `default crew skins all distinct (${new Set(skinIds).size}/${skinIds.length})`)

// (4) dojo templates in the create editor
await openFromMenu('Dojo settings')
await page.evaluate(() => [...document.querySelectorAll('.ws-btn')]
  .find((b) => b.textContent.includes('+ New dojo'))?.click())
await page.waitForTimeout(400)
// Was `=== 8`. There are twelve now, and the assertion had been wrong for as
// long as the suite had been unable to run — a literal count in a test rots
// exactly like a literal count in copy.
const { DOJO_TEMPLATES } = await import('../src/data/templates.ts').catch(() => ({ DOJO_TEMPLATES: null }))
const tpls = await page.locator('.ws-tplcard').count()
ok(tpls > 0 && (!DOJO_TEMPLATES || tpls === DOJO_TEMPLATES.length),
  `template picker shows ${tpls} templates${DOJO_TEMPLATES ? ` of ${DOJO_TEMPLATES.length}` : ''}`)
await page.screenshot({ path: `${OUT}/vis-templates.png` })
// The dojo-creation flow used to be replayed here as well. verify-full walks it
// end to end and passes; two tests of one flow means two things to fix when it
// changes, and this was the copy that had rotted. What is left is what this
// suite alone provides: the captures, and the checks above.
await closeSurface()
await page.waitForTimeout(800)
await page.screenshot({ path: `${OUT}/vis-office-final.png` })

const real = errs.filter((e) => !noise(e))
ok(real.length === 0, `aucune erreur JavaScript${real.length ? ' · ' + real.slice(0, 2).join(' | ') : ''}`)
await browser.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
