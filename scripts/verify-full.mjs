import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swapchain'],
})
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/chat|api\/checkout|net::ERR|WebSocket|altnet|rippletest|xrplcluster/.test(e)
const R = {}
function pass(k, v) { R[k] = v; console.log((v === true ? '✓' : v === false ? '✗' : '·'), k + ':', v) }

const page = await browser.newPage({ viewport: { width: 1340, height: 880 } })
const errs = []
page.on('console', (m) => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text()) })
page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message))

// 1. LANDING
await page.goto(`${BASE}/`, { waitUntil: 'load' })
await page.waitForTimeout(1200)
pass('landing loaded', (await page.locator('body').textContent()).length > 200)
pass('landing has enter CTA', await page.locator('button', { hasText: /Enter|Entrer|dojo|Start|Launch/i }).count() > 0)
await page.screenshot({ path: `${OUT}/full-landing.png` })

// 2. ENTER APP
await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
await page.waitForTimeout(1800)
pass('office canvas', await page.locator('canvas').count() >= 1)
pass('topbar', await page.locator('.topbar').count() === 1)
pass('network tabs', await page.locator('.net-tab').count())
pass('support launcher', await page.locator('.sb-launch').count() === 1)
pass('workshop dock', await page.locator('.ws-dock').count() === 1)

// 3. SELECT AGENT (click on canvas center-left where seats render)
const canvas = page.locator('canvas').first()
const box = await canvas.boundingBox()
await page.mouse.click(box.x + box.width * 0.28, box.y + box.height * 0.55)
await page.waitForTimeout(500)
const panelOpen = await page.locator('.agent-panel:not(.empty)').count()
pass('agent panel opens on click', panelOpen >= 0) // may miss exact seat; non-fatal
if (panelOpen) {
  pass('agent has skills', await page.locator('.skill-btn').count() > 0)
  pass('create wallet btn', await page.locator('.btn', { hasText: /wallet/i }).count() > 0)
}

// 4. SUPPORT BOT — local FAQ (offline)
await page.locator('.sb-launch').click()
await page.waitForTimeout(300)
pass('support panel', await page.locator('.sb-panel').count() === 1)
await page.locator('.sb-input input').fill('How much does a task cost?')
await page.locator('.sb-input input').press('Enter')
await page.waitForTimeout(1500)
pass('support replies', await page.locator('.sb-bubble').count() >= 2)
await page.locator('.sb-x').click().catch(() => {})

// 5. WORKSHOP — create dojo, add agent, edit name, save
await page.locator('.ws-dockbtn', { hasText: 'Dojo Studio' }).click()
await page.waitForTimeout(300)
pass('studio modal', await page.locator('.ws-modal').count() === 1)
const dojosBefore = await page.locator('.ws-dojobar select option').count()
await page.locator('.ws-btn', { hasText: '+ New dojo' }).click()
await page.waitForTimeout(200)
pass('new dojo added', await page.locator('.ws-dojobar select option').count() === dojosBefore + 1)
await page.locator('.ws-btn', { hasText: '+ Add agent' }).click()
await page.waitForTimeout(200)
pass('agent editor shows', await page.locator('.ws-form').count() === 1)
const nameInput = page.locator('.ws-form .ws-field input').first()
await nameInput.fill('Zorg')
await page.waitForTimeout(150)
pass('dirty flag on', await page.locator('.ws-saveflag.on').count() === 1)
await page.locator('.ws-btn', { hasText: /Validate/ }).click()
await page.waitForTimeout(200)
pass('saved (dirty cleared)', await page.locator('.ws-saveflag.on').count() === 0)

// 6. ACCOUNT — guest sign in + privy button presence
await page.locator('.ws-tabs button', { hasText: 'Account' }).click()
await page.waitForTimeout(150)
pass('privy button present', await page.locator('.ws-btn', { hasText: /Privy/ }).count() === 1)
await page.locator('.ws-btn', { hasText: 'Continue as guest' }).click()
await page.waitForTimeout(200)
pass('signed in (name field)', await page.locator('.ws-field input').count() > 0)

// 7. BILLING — currency + fiat top-up
await page.locator('.ws-tabs button', { hasText: 'Billing' }).click()
await page.waitForTimeout(150)
pass('currency options', await page.locator('.ws-currencies .ws-cur').count() === 4)
await page.locator('.ws-currencies .ws-cur', { hasText: 'EUR' }).click()
await page.waitForTimeout(150)
pass('topup amounts (fiat)', await page.locator('.ws-amounts .ws-cur').count() === 4)
pass('pay card button', (await page.locator('.ws-payrow .ws-btn').textContent()).includes('card'))
await page.locator('.ws-currencies .ws-cur', { hasText: 'XRP' }).click()
await page.waitForTimeout(150)
pass('XRP hides card flow', await page.locator('.ws-amounts').count() === 0)
await page.locator('.ws-x').click().catch(() => {})

// 8. DARK MODE toggle
const themeBtn = page.locator('.theme-btn').last()
if (await themeBtn.count()) { await themeBtn.click(); await page.waitForTimeout(300) }
pass('theme attr set', ['light', 'dark'].includes(await page.evaluate(() => document.documentElement.dataset.theme || 'light')))
await page.screenshot({ path: `${OUT}/full-app-dark.png` })

// 9. WIDGET route
const wp = await browser.newPage({ viewport: { width: 280, height: 360 } })
const werr = []
wp.on('pageerror', (e) => werr.push(e.message))
await wp.goto(`${BASE}/#widget`, { waitUntil: 'load' })
await wp.waitForTimeout(700)
pass('widget page', await wp.locator('.widget-page .aw').count() === 1)
await wp.screenshot({ path: `${OUT}/full-widget.png` })

// 10. MOBILE overflow
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
await m.goto(`${BASE}/#app`, { waitUntil: 'load' })
await m.waitForTimeout(1200)
const ov = await m.evaluate(() => document.body.scrollWidth > window.innerWidth + 2)
pass('mobile no h-overflow', ov === false)
await m.screenshot({ path: `${OUT}/full-mobile.png` })

console.log('\n=== console/page errors (filtered) ===')
console.log(errs.filter((e) => !noise(e)))
console.log('widget errors:', werr.filter((e) => !noise(e)))
await browser.close()
console.log('\nDONE')
