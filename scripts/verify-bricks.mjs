import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

// The private beta gate stands in front of every route. Without this the suite
// screenshots the door and reports an empty app — which it did, silently, for
// as long as the gate has existed. verify-gate.mjs is what tests the door.
const collectGate = (page) => page.addInitScript(() => {
  try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ }
})

function collect(page, bag) {
  page.on('console', (m) => { if (m.type() === 'error') bag.push('CONSOLE: ' + m.text()) })
  page.on('pageerror', (e) => bag.push('PAGEERR: ' + e.message))
}
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/chat|api\/checkout|net::ERR/.test(e)

// ---- #app: office loads, then Account and Billing from the menu ----------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 1320, height: 880 } })
  await collectGate(page)
  collect(page, errs)
  await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
  await page.waitForTimeout(1500)
  console.log('#app canvas:', await page.locator('canvas').count())

  // Account and Billing are reached from the top-bar menu · the modal with a
  // tab bar this suite used to click is gone. With no Privy app configured,
  // "Sign in" signs you in as a guest on the spot; the profile row that then
  // appears is what opens the Account surface.
  const openFromMenu = async (text) => {
    // two steps, with a frame between them: the menu is React-rendered, so the
    // row does not exist yet in the same tick the button was clicked
    await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
    await page.waitForTimeout(250)
    await page.evaluate((t) => {
      const row = [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(t))
      row?.click()
    }, text)
    await page.waitForTimeout(700)
  }
  const closeSurface = async () => {
    await page.evaluate(() => document.querySelector('.modhost-close')?.click())
    await page.waitForTimeout(400)
  }

  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(300)
  console.log('sign-in buttons:', await page.locator('.tb-menu-auth .btn').count())
  await page.evaluate(() => document.querySelector('.tb-menu-auth .btn')?.click())
  await page.waitForTimeout(700)
  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(300)
  console.log('profile row after sign-in:', await page.locator('.tb-menu-profile').count())
  await page.evaluate(() => document.querySelector('.tb-menu-profile')?.click())
  await page.waitForTimeout(700)
  console.log('privy btn:', await page.locator('.ws-btn', { hasText: /Privy/ }).count())
  await closeSurface()

  // Billing: your own key, currency, and the plans
  await openFromMenu('Billing')
  await page.evaluate(() => [...document.querySelectorAll('.ws-currencies .ws-cur')].find((b) => b.textContent.includes('USD'))?.click())
  await page.waitForTimeout(250)
  console.log('key panel:', await page.locator('.ws-keypanel').count(), '| plans:', await page.locator('.ws-plan').count())
  const payLabel = (await page.locator('.ws-plan .ws-btn').first().textContent().catch(() => '(none)'))?.trim()
  console.log('plan button:', payLabel)
  // click it → api/checkout unreachable on preview → graceful note, no card taken
  await page.evaluate(() => document.querySelector('.ws-plan .ws-btn')?.click())
  await page.waitForTimeout(1400)
  console.log('pay note after click:', (await page.locator('.ws-paynote').first().textContent().catch(() => '(none)'))?.trim()?.slice(0, 60))
  await page.screenshot({ path: `${OUT}/brick-billing.png` })
  console.log('#app errors:', errs.filter((e) => !noise(e)))
  await page.close()
}

// ---- #widget: standalone always-on-top widget ----------------------------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 280, height: 360 } })
  await collectGate(page)
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
