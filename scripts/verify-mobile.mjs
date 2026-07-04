import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swapchain'],
})
const ok = (c, m) => console.log(c ? '✓' : '✗', m)
// iPhone-ish portrait
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 3 })
const errs = []
page.on('pageerror', (e) => errs.push(e.message))

await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
await page.evaluate(() => localStorage.clear())
await page.reload({ waitUntil: 'load' })
await page.waitForTimeout(1800)

// 1. Panel collapsed by default → the big side panel is off-screen; dojo visible
const sideBox = await page.locator('.hud-side').boundingBox()
const vh = 844
const sideVisible = sideBox && sideBox.y < vh - 20
ok(!sideVisible, `panel collapsed by default (sheet off-screen, top y=${sideBox ? Math.round(sideBox.y) : 'n/a'})`)
ok((await page.locator('.hud-open-fab').isVisible()), 'open-panel handle visible')
// how much of the viewport is the 3D canvas not covered by the top chrome?
const topBottom = await page.evaluate(() => {
  const r = document.querySelector('.hud-side')?.getBoundingClientRect()
  return r ? r.top : window.innerHeight
})
await page.screenshot({ path: `${OUT}/mob-collapsed.png` })

// 2. Open the sheet via the handle
await page.locator('.hud-open-fab').click()
await page.waitForTimeout(500)
const openBox = await page.locator('.hud-side').boundingBox()
ok(openBox && openBox.y < vh * 0.9, `sheet opens upward (top y=${openBox ? Math.round(openBox.y) : 'n/a'})`)
ok((await page.locator('.hud-grip').isVisible()), 'grab handle visible when open')
await page.screenshot({ path: `${OUT}/mob-open.png` })

// 3. Collapse via grip
await page.locator('.hud-grip').click()
await page.waitForTimeout(500)
ok((await page.locator('.hud-open-fab').isVisible()), 'handle back after collapse')

// 4. Tapping an agent auto-opens the sheet (its card)
const cv = page.locator('canvas').first()
const b = await cv.boundingBox()
let opened = false
for (const [fx, fy] of [[0.5, 0.4], [0.35, 0.45], [0.6, 0.42], [0.5, 0.5]]) {
  await page.mouse.click(b.x + b.width * fx, b.y + b.height * fy)
  await page.waitForTimeout(500)
  const bx = await page.locator('.hud-side').boundingBox()
  if (bx && bx.y < vh * 0.9 && (await page.locator('.agent-panel:not(.empty)').count())) { opened = true; break }
}
ok(opened, 'tapping an agent opens the card sheet')
await page.screenshot({ path: `${OUT}/mob-agentcard.png` })

// 5. no horizontal overflow
const ov = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 2)
ok(!ov, 'no horizontal overflow')

console.log('\nerrors:', errs)
await browser.close()
console.log('DONE')
