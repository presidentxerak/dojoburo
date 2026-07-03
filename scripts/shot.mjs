import { chromium } from 'playwright'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({ ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}), args: ['--no-sandbox'] })

// desktop
const page = await browser.newPage({ viewport: { width: 1340, height: 900 } })
const errs = []
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()) })
page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message))
await page.goto('http://localhost:4173/', { waitUntil: 'load' })
await page.waitForTimeout(900)
console.log('agents', await page.locator('.agent').count(), 'furniture', await page.locator('.furn').count(), 'hero', await page.locator('.hero').count())

// sticky test: open an agent (long panel), scroll, check office viewport stays pinned
await page.locator('.agent', { hasText: 'Ava' }).click()
await page.waitForTimeout(300)
const before = await page.evaluate(() => document.querySelector('.office-viewport').getBoundingClientRect().top)
await page.evaluate(() => window.scrollTo(0, 500))
await page.waitForTimeout(300)
const after = await page.evaluate(() => document.querySelector('.office-viewport').getBoundingClientRect().top)
console.log('sticky: office top before', Math.round(before), 'after scroll 500', Math.round(after), '=>', after > before - 30 ? 'PINNED' : 'scrolled-away')
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(200)

await page.locator('.office-viewport').screenshot({ path: `${OUT}/v4-office.png` })
await page.locator('.agent-panel').screenshot({ path: `${OUT}/v4-panel.png` })
await page.screenshot({ path: `${OUT}/v4-full.png` })

const clean = errs.filter((e) => !/fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|401|403|429/.test(e))
console.log('console errors:', clean.length ? clean : 'none')

// mobile
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
await m.goto('http://localhost:4173/', { waitUntil: 'load' })
await m.waitForTimeout(700)
const ov = await m.evaluate(() => ({ w: document.body.scrollWidth, iw: window.innerWidth }))
console.log('mobile overflow', ov.w, 'vs', ov.iw, ov.w > ov.iw + 1 ? 'OVERFLOW' : 'ok')
await m.locator('.agent').first().click()
await m.waitForTimeout(300)
await m.screenshot({ path: `${OUT}/v4-mobile.png` })

await browser.close()
console.log('DONE')
