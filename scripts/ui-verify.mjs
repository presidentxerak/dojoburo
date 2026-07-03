import { chromium } from 'playwright'

const URL = 'http://localhost:4173/'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox'],
})

// ---- desktop pass ----
const page = await browser.newPage({ viewport: { width: 1320, height: 880 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERR: ' + e.message))
await page.goto(URL, { waitUntil: 'load' })
await page.waitForTimeout(800)

console.log('agents:', await page.locator('.agent').count(), '| furniture:', await page.locator('.furn').count(), '| hero:', await page.locator('.hero').count())
console.log('theme:', await page.evaluate(() => document.documentElement.dataset.theme))
console.log('xaman panel:', await page.locator('.xaman').count(), '| music btn:', await page.locator('.theme-btn').count())

await page.locator('.agent', { hasText: 'Rex' }).click()
await page.waitForTimeout(200)
await page.locator('.skill-btn', { hasText: 'Ship une feature' }).click()
await page.waitForTimeout(1200)
console.log('busy progress bar:', await page.locator('.agent-progress').count())
console.log('banter:', (await page.locator('.bubble').first().textContent().catch(() => '(none)'))?.trim())
await page.screenshot({ path: `${OUT}/v3-desktop.png` })
await page.waitForTimeout(3500)

// dark
await page.locator('.theme-btn', { hasText: '🌙' }).click().catch(async () => { await page.locator('.topbar-right .theme-btn').last().click() })
await page.waitForTimeout(300)
await page.screenshot({ path: `${OUT}/v3-dark.png` })

// ---- mobile pass ----
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 2 })
const mErr = []
m.on('pageerror', (e) => mErr.push(e.message))
await m.goto(URL, { waitUntil: 'load' })
await m.waitForTimeout(700)
const overflow = await m.evaluate(() => ({
  bodyScrollW: document.body.scrollWidth,
  innerW: window.innerWidth,
  overflowing: document.body.scrollWidth > window.innerWidth + 1,
}))
console.log('MOBILE overflow check:', JSON.stringify(overflow))
await m.locator('.agent').first().click()
await m.waitForTimeout(300)
await m.screenshot({ path: `${OUT}/v3-mobile.png`, fullPage: false })
await m.screenshot({ path: `${OUT}/v3-mobile-full.png`, fullPage: true })

console.log('desktop console errors:', errors.filter((e) => !/fonts\.g|ERR_CONNECTION|xumm|Failed to load resource/.test(e)))
console.log('mobile page errors:', mErr)
await browser.close()
console.log('DONE')
