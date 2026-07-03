import { chromium } from 'playwright'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({ ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}), args: ['--no-sandbox'] })
const page = await browser.newPage({ viewport: { width: 1340, height: 980 } })
const errs = []
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()) })
page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message))
await page.goto('http://localhost:4173/', { waitUntil: 'load' })
await page.waitForTimeout(900)
console.log('agents', await page.locator('.agent').count(), 'furn', await page.locator('.furn').count(), 'scenes', await page.locator('.scene-btn').count())

await page.locator('.office-wrap').screenshot({ path: `${OUT}/s-office.png` })

for (const name of ['Space station', 'Lab', 'Castle', 'Hospital']) {
  await page.locator('.scene-btn', { hasText: name }).click()
  await page.waitForTimeout(500)
  await page.locator('.office-viewport').screenshot({ path: `${OUT}/s-${name.split(' ')[0].toLowerCase()}.png` })
}

// back to office, zoom an agent+desk region
await page.locator('.scene-btn', { hasText: 'Office' }).click()
await page.waitForTimeout(400)
const box = await page.locator('.agent', { hasText: 'Otto' }).boundingBox()
await page.screenshot({ path: `${OUT}/s-desk.png`, clip: { x: box.x - 60, y: box.y - 30, width: 240, height: 200 } })

const clean = errs.filter((e) => !/fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|40\d|429/.test(e))
console.log('console errors:', clean.length ? clean : 'none')

const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
await m.goto('http://localhost:4173/', { waitUntil: 'load' })
await m.waitForTimeout(700)
const ov = await m.evaluate(() => ({ w: document.body.scrollWidth, iw: window.innerWidth }))
console.log('mobile overflow', ov.w, 'vs', ov.iw, ov.w > ov.iw + 1 ? 'OVERFLOW' : 'ok')
await m.screenshot({ path: `${OUT}/s-mobile.png` })
await browser.close()
console.log('DONE')
