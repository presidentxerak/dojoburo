import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swapchain'],
})

function collect(page, bag) {
  page.on('console', (m) => { if (m.type() === 'error') bag.push('CONSOLE: ' + m.text()) })
  page.on('pageerror', (e) => bag.push('PAGEERR: ' + e.message))
}
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/chat|api\/checkout|net::ERR/.test(e)

// ---- #app: office loads, open Studio → Billing top-up + Account -----------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 1320, height: 880 } })
  collect(page, errs)
  await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
  await page.waitForTimeout(1500)
  console.log('#app canvas:', await page.locator('canvas').count())

  // open Dojo Studio
  await page.locator('.ws-dockbtn', { hasText: 'Dojo Studio' }).click()
  await page.waitForTimeout(300)
  // Account tab: guest sign-in visible, Privy button present
  await page.locator('.ws-tabs button', { hasText: 'Account' }).click()
  await page.waitForTimeout(150)
  console.log('account guest btn:', await page.locator('.ws-btn', { hasText: 'Continue as guest' }).count())
  console.log('privy btn:', await page.locator('.ws-btn', { hasText: /Privy/ }).count())
  await page.locator('.ws-btn', { hasText: 'Continue as guest' }).click()
  await page.waitForTimeout(150)

  // Billing tab: currency + top-up
  await page.locator('.ws-tabs button', { hasText: 'Billing' }).click()
  await page.waitForTimeout(150)
  // XRP default → card section shows a switch hint; pick USD to reveal the card flow
  await page.locator('.ws-currencies .ws-cur', { hasText: 'USD' }).click()
  await page.waitForTimeout(150)
  console.log('topup section:', await page.locator('.ws-topup').count(), '| amounts:', await page.locator('.ws-amounts .ws-cur').count())
  const payLabel = (await page.locator('.ws-payrow .ws-btn', { hasText: 'card' }).textContent().catch(() => '(none)'))?.trim()
  console.log('pay button:', payLabel)
  // click pay → api/checkout unreachable on preview → graceful note
  await page.locator('.ws-payrow .ws-btn', { hasText: 'card' }).click()
  await page.waitForTimeout(600)
  console.log('pay note after click:', (await page.locator('.ws-paynote').textContent().catch(() => '(none)'))?.trim()?.slice(0, 60))
  await page.screenshot({ path: `${OUT}/brick-billing.png` })
  console.log('#app errors:', errs.filter((e) => !noise(e)))
  await page.close()
}

// ---- #widget: standalone always-on-top widget ----------------------------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 280, height: 360 } })
  collect(page, errs)
  await page.goto(`${BASE}/#widget`, { waitUntil: 'load' })
  await page.waitForTimeout(800)
  console.log('#widget page:', await page.locator('.widget-page').count(), '| aw:', await page.locator('.aw').count())
  console.log('#widget title:', (await page.locator('.aw-head strong').textContent().catch(() => '(none)'))?.trim())
  await page.screenshot({ path: `${OUT}/brick-widget.png` })
  console.log('#widget errors:', errs.filter((e) => !noise(e)))
  await page.close()
}

await browser.close()
console.log('DONE')
