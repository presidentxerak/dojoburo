import { chromium } from 'playwright'

const URL = 'http://localhost:4173/'
const OUT = process.env.SCRATCH || '.'

const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox'],
})
const page = await browser.newPage({ viewport: { width: 1320, height: 880 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERR: ' + e.message))

await page.goto(URL, { waitUntil: 'load' })
await page.waitForTimeout(900)

const agents = await page.locator('.agent').count()
const furn = await page.locator('.furn').count()
const hero = await page.locator('.hero').count()
console.log('agents:', agents, '| furniture:', furn, '| hero:', hero)

// theme should be light by default
const theme = await page.evaluate(() => document.documentElement.dataset.theme)
console.log('default theme:', theme)

// open an agent, run a skill -> hero should walk + banter + xp
await page.locator('.agent', { hasText: 'Ada' }).click()
await page.waitForTimeout(300)
const skills = await page.locator('.skill-btn').count()
const lvlBefore = await page.locator('.stat-lvl').textContent().catch(() => '?')
console.log('panel skills:', skills, '| level:', lvlBefore?.trim())

await page.locator('.skill-btn', { hasText: 'Rapport hebdo' }).click()
await page.waitForTimeout(1400)
const bubble = await page.locator('.bubble').first().textContent().catch(() => null)
console.log('banter bubble:', bubble?.trim() ?? '(none yet)')
await page.screenshot({ path: `${OUT}/dojoburo-working.png` })

// trigger an event manually to snapshot a toast
await page.evaluate(() => window.__dojo?.getState?.().fireEvent?.())
await page.waitForTimeout(600)

await page.waitForTimeout(3000)
const acts = await page.locator('.act-item').count()
console.log('activity items:', acts)

// dark mode screenshot
await page.locator('.theme-btn').click()
await page.waitForTimeout(400)
const theme2 = await page.evaluate(() => document.documentElement.dataset.theme)
console.log('after toggle theme:', theme2)
await page.screenshot({ path: `${OUT}/dojoburo-dark.png` })

// back to light + full scene
await page.locator('.theme-btn').click()
await page.waitForTimeout(300)
await page.locator('.icon-btn').click().catch(() => {})
await page.waitForTimeout(300)
await page.screenshot({ path: `${OUT}/dojoburo-light.png` })

console.log('console errors:', errors.length ? errors : 'none')
await browser.close()
console.log('DONE')
