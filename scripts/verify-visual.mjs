import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swapchain'],
})
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/|net::ERR|WebSocket|altnet|rippletest|xrplcluster/.test(e)
const errs = []
const page = await browser.newPage({ viewport: { width: 1340, height: 880 } })
page.on('console', (m) => { if (m.type() === 'error') errs.push('C:' + m.text()) })
page.on('pageerror', (e) => errs.push('P:' + e.message))
const ok = (c, m) => console.log(c ? '✓' : '✗', m)

await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
await page.evaluate(() => localStorage.clear())
await page.reload({ waitUntil: 'load' })
await page.waitForTimeout(1800)
await page.screenshot({ path: `${OUT}/vis-office-default.png` })

// persist the seeded state so we can inspect it (guest sign-in writes localStorage)
await page.locator('.ws-dockbtn', { hasText: 'Dojo Studio' }).click()
await page.waitForTimeout(250)
await page.locator('.ws-tabs button', { hasText: 'Account' }).click()
await page.waitForTimeout(150)
await page.locator('.ws-btn', { hasText: 'Continue as guest' }).click()
await page.waitForTimeout(200)
await page.locator('.ws-x').first().click().catch(() => {})
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
ok(cardOpen === 1, 'agent card open')
ok((await page.locator('.agent-head-avatar canvas').count()) === 1, '3D avatar canvas in agent card')
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
await page.locator('.ws-dockbtn', { hasText: 'Dojo Studio' }).click()
await page.waitForTimeout(300)
await page.locator('.ws-btn', { hasText: '+ New dojo' }).click()
await page.waitForTimeout(300)
const tpls = await page.locator('.ws-tplcard').count()
ok(tpls === 8, `template picker shows ${tpls} templates`)
await page.screenshot({ path: `${OUT}/vis-templates.png` })
// create a Space Station dojo
await page.locator('.ws-tplcard', { hasText: 'Space Station' }).click()
await page.waitForTimeout(300)
// close modal, see the themed office
await page.locator('.ws-x').first().click().catch(() => {})
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/vis-office-space.png` })
const activeLabel = await page.locator('.ws-dojoswitch select').evaluate((el) => el.options[el.selectedIndex].text)
ok(/🛰️|Space/.test(activeLabel), `active dojo = ${activeLabel.trim()}`)

// (5) dock dojo switcher
const opts = await page.locator('.ws-dojoswitch select option').count()
ok(opts >= 2, `dock switcher lists ${opts} dojos`)
// switch back to HQ via prev arrow
await page.locator('.ws-swbtn').first().click()
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/vis-office-switched.png` })

console.log('\nerrors:', errs.filter((e) => !noise(e)))
await browser.close()
console.log('DONE')
