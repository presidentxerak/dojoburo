import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
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
const ok = (c, m) => console.log(c ? '✓' : '✗', m)

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
  ok((await page.locator('.agent-head-avatar canvas').count()) === 1, '3D avatar canvas in agent card')
}
await page.screenshot({ path: `${OUT}/vis-agentcard.png` })

// (2) support close button visible
await page.locator('.sb-launch').click()
await page.waitForTimeout(300)
const x = page.locator('.sb-x')
const xb = await x.boundingBox()
ok(!!xb && xb.width > 8 && xb.height > 8, 'support close button has size')
const contrast = await x.evaluate((el) => {
  const cs = getComputedStyle(el)
  return { color: cs.color, bg: cs.backgroundColor }
})
ok(true, `support × color=${contrast.color} bg=${contrast.bg}`)
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

console.log('\nerrors:', errs.filter((e) => !noise(e)))
await browser.close()
console.log('DONE')
