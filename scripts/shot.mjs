import { chromium } from 'playwright'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({ ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}), args: ['--no-sandbox'] })
const page = await browser.newPage({ viewport: { width: 1340, height: 900 } })
await page.goto('http://localhost:4173/', { waitUntil: 'load' })
await page.waitForTimeout(900)
// zoom into the office only
const office = page.locator('.office-viewport')
await office.screenshot({ path: `${OUT}/chars-office.png` })
// open a panel to see the big character
await page.locator('.agent', { hasText: 'Sol' }).click()
await page.waitForTimeout(300)
await page.locator('.agent-panel').screenshot({ path: `${OUT}/chars-panel.png` })
await page.screenshot({ path: `${OUT}/chars-full.png` })
await browser.close()
console.log('shots done')
