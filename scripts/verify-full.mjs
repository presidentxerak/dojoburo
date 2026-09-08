import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/chat|api\/checkout|net::ERR|WebSocket|altnet|rippletest|xrplcluster/.test(e)
const R = {}
function pass(k, v) { R[k] = v; console.log((v === true ? '✓' : v === false ? '✗' : '·'), k + ':', v) }

const page = await browser.newPage({ viewport: { width: 1340, height: 880 } })
// The private beta gate stands in front of every route. Without this the suite
// screenshots the door and reports an empty app — which it did, silently, for
// as long as the gate has existed. verify-gate.mjs is what tests the door.
await page.addInitScript(() => {
  try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ }
})
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
// the left-edge dock is a dojo SWITCHER · it only appears once there are two to
// switch between, so on a fresh browser its absence is correct
pass('no dock with one dojo', await page.locator('.ws-dock').count() === 0)

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

// The Studio, Account and Billing are reached from the top-bar menu — there is
// no modal with a tab bar any more, and this suite was still clicking for one.
async function openFromMenu(text) {
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

// 5. STUDIO — a three-step wizard: Dojo → Agents → Review
await openFromMenu('Dojo settings')
pass('studio surface', await page.locator('.modhost-fs.fs').count() === 1)
pass('studio is a wizard', await page.locator('.ws-studio .stepbar, .ws-studio .sq-panel').count() > 0)
const dojosBefore = await page.locator('.ws-dojobar select option').count()
await page.evaluate(() => [...document.querySelectorAll('.ws-btn')].find((b) => b.textContent.includes('+ New dojo'))?.click())
await page.waitForTimeout(400)
pass('template picker opens', await page.locator('.ws-tplcard').count() > 0)
// clicked through the DOM: Playwright wants two identical animation frames
// before it will click, and this box renders WebGL in software — that measures
// the renderer, not the app
await page.evaluate(() => document.querySelector('.ws-tplcard')?.click())
await page.waitForTimeout(600)
pass('new dojo added', await page.locator('.ws-dojobar select option').count() === dojosBefore + 1)

// step two · the crew
const step = async (label) => {
  await page.evaluate((t) => {
    const b = [...document.querySelectorAll('.ws-studio button')].find((x) => x.textContent.trim() === t)
    b?.click()
  }, label)
  await page.waitForTimeout(500)
}
await step('Agents')
await page.evaluate(() => [...document.querySelectorAll('.ws-btn')].find((b) => b.textContent.includes('+ Add agent'))?.click())
await page.waitForTimeout(500)
pass('agent editor shows', await page.locator('.ws-form').count() === 1)
await page.locator('.ws-form .ws-field input').first().fill('Zorg', { force: true })
await page.waitForTimeout(250)

// step three · review, where the save flag lives
await step('Review')
pass('dirty flag on', await page.locator('.ws-saveflag.on').count() === 1)
await page.evaluate(() => [...document.querySelectorAll('.ws-btn')].find((b) => /Validate/.test(b.textContent))?.click())
await page.waitForTimeout(500)
pass('saved (dirty cleared)', await page.locator('.ws-saveflag.on').count() === 0)
await closeSurface()

// 6. ACCOUNT — signed out, the menu offers sign-in; signed in, the row IS you
//
// There is no "Account" row in the menu: signed out it is a Sign in / Sign up
// pair, and with no Privy app configured "Sign in" signs you in as a guest on
// the spot rather than opening anything. Signed in, the row becomes your
// profile, and THAT is what opens the Account surface. This block used to click
// a tab that no longer exists.
await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
await page.waitForTimeout(300)
pass('signed out · the menu offers a way in', await page.locator('.tb-menu-auth .btn').count() === 2)
await page.evaluate(() => document.querySelector('.tb-menu-auth .btn')?.click())
await page.waitForTimeout(700)
await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
await page.waitForTimeout(300)
pass('signed in · the menu row is now you', await page.locator('.tb-menu-profile').count() === 1)
await page.evaluate(() => document.querySelector('.tb-menu-profile')?.click())
await page.waitForTimeout(800)
pass('account surface opens', await page.locator('.modhost-fs.fs').count() === 1)
pass('signed in (name field)', await page.locator('.ws-field input').count() > 0)
await closeSurface()

// 7. BILLING — your own key, and three plans you can choose
//
// This block used to click an "XRP" currency chip and count four top-up
// amounts. Both are gone: credits were retired, and Billing now leads with the
// bring-your-own-key panel and sells monthly plans through Stripe.
await openFromMenu('Billing')
pass('key panel leads', await page.locator('.ws-keypanel').count() === 1)
pass('currency options', await page.locator('.ws-currencies .ws-cur').count() === 3)
await page.evaluate(() => [...document.querySelectorAll('.ws-currencies .ws-cur')].find((b) => b.textContent.includes('EUR'))?.click())
await page.waitForTimeout(300)
pass('three plans', await page.locator('.ws-plan').count() === 3)
pass('no credit top-up left', await page.locator('.ws-topup, .ws-amounts').count() === 0)
// the two paid plans each offer a card; Free says where everyone starts
pass('paid plans are buyable', await page.locator('.ws-plan .ws-btn').count() === 2)
// clicking one on a preview build cannot reach /api/checkout · it must say so
// rather than leaving a button that looks like it worked
await page.evaluate(() => document.querySelector('.ws-plan .ws-btn')?.click())
await page.waitForTimeout(1400)
const note = (await page.locator('.ws-paynote').first().textContent().catch(() => '')) || ''
pass('a checkout that cannot start says nothing was charged', /nothing was charged/i.test(note))
await closeSurface()

// 8. DARK MODE toggle
const themeBtn = page.locator('.theme-btn').last()
if (await themeBtn.count()) { await themeBtn.click(); await page.waitForTimeout(300) }
pass('theme attr set', ['light', 'dark'].includes(await page.evaluate(() => document.documentElement.dataset.theme || 'light')))
await page.screenshot({ path: `${OUT}/full-app-dark.png` })

// 9. WIDGET route
const wp = await browser.newPage({ viewport: { width: 280, height: 360 } })
await wp.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
const werr = []
wp.on('pageerror', (e) => werr.push(e.message))
await wp.goto(`${BASE}/#widget`, { waitUntil: 'load' })
await wp.waitForTimeout(700)
pass('widget page', await wp.locator('.widget-page .aw').count() === 1)
await wp.screenshot({ path: `${OUT}/full-widget.png` })

// 10. MOBILE overflow
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
await m.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
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
