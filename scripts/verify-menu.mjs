// Audits, in a real browser, every item on the founder's list.
import { chromium } from 'playwright'
const B = 'http://localhost:4173'
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 1360, height: 900 } })
const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

// ---- landing ----------------------------------------------------------
await p.goto(B + '/', { waitUntil: 'networkidle' })
const landing = await p.innerText('body')
ok('landing says "company", never "your project"', !/Create your project|Your projects automator|Name your project/.test(landing))
ok('one menu trigger on the landing', (await p.locator('.tb-burger').count()) === 0)

// ---- the app ----------------------------------------------------------
await p.evaluate(() => { try { sessionStorage.setItem('dojoburo.nav', '') } catch {} })
await p.goto(B + '/#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)

const triggers = await p.locator('.tb-menu-btn').count()
ok('exactly ONE menu trigger in the app', triggers === 1, `${triggers} found`)
ok('the trigger is the profile button', (await p.locator('.tb-profile.tb-menu-btn').count()) === 1)
ok('no hamburger anywhere', (await p.locator('.tb-burger').count()) === 0)

const right = await p.locator('.topbar-right').innerText().catch(() => '')
ok('no Credits button beside the profile', !/credit/i.test(right), JSON.stringify(right.slice(0, 60)))

// name the company · the create card
const createTxt = await p.innerText('body')
ok('home names a COMPANY, not a project', /company/i.test(createTxt) && !/Create your project/.test(createTxt))

// ---- the menu ---------------------------------------------------------
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(350)
const menu = await p.innerText('.tb-menu')
const items = (await p.locator('.tb-menu-item, .tb-menu-profile, .tb-row > span').allInnerTexts()).map((s) => s.split('\n')[0].trim())
ok('menu carries "My companies"', /My companies/.test(menu))
ok('the effort dial sits under My Credits · Billing',
  items.findIndex((t) => /How hard your team works/.test(t)) === items.findIndex((t) => /My Credits/.test(t)) + 1)
ok('no standalone "Account" row', items.filter((t) => t === 'Account').length === 0)
ok('no Sound row', !/sound/i.test(menu))
ok('no City row', !/city/i.test(menu))
ok('no duplicate rows', new Set(items).size === items.length, items.filter((t, i) => items.indexOf(t) !== i).join(','))
ok('build stamp visible in the menu', (await p.locator('.tb-menu-build').count()) === 1,
  (await p.locator('.tb-menu-build').innerText().catch(() => '')).replace('\n', ' '))
await p.keyboard.press('Escape')
await p.locator('.tb-menu-scrim').click({ force: true }).catch(() => {})
await p.waitForTimeout(250)

// ---- full-screen surfaces --------------------------------------------
async function fullscreen(name, open) {
  await open()
  await p.waitForTimeout(500)
  const host = p.locator('.modhost-fs.fs')
  const shown = await host.count()
  const close = await p.locator('.modhost-close').count()
  const box = shown ? await host.first().boundingBox() : null
  ok(`${name} is full screen with a close button`,
    shown === 1 && close >= 1 && !!box && box.height > 700, box ? `${Math.round(box.width)}x${Math.round(box.height)}` : 'absent')
  await p.locator('.modhost-close').first().click().catch(() => {})
  await p.waitForTimeout(350)
}
await fullscreen('Quick search', async () => { await p.keyboard.press('Meta+k'); await p.waitForTimeout(200); if (!(await p.locator('.modhost-fs').count())) await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk'))) })
await fullscreen('Settings', async () => { await p.evaluate(() => { const s = window; }); await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300); await p.getByRole('button', { name: 'Settings', exact: true }).click() })
await fullscreen('How hard your team works', async () => { await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300); await p.locator('.tb-menu-item', { hasText: 'How hard your team works' }).click() })

// ---- the surfaces the founder reported as blank / broken ---------------
// Billing, Dojo settings and Connect apps used to NAVIGATE to their own routes:
// you left the app to read a number, came back to the naming card, and the page
// wore chrome nobody else wore. They are surfaces over the app now.
async function overApp(name, open) {
  await open()
  await p.waitForTimeout(1600)
  const fs = p.locator('.modhost-fs.fs')
  const n = await fs.count()
  const box = n ? await fs.first().boundingBox() : null
  const body = n ? (await fs.first().innerText()).replace(/\s+/g, ' ').trim() : ''
  const glyph = n ? (await p.locator('.modhost-close').first().innerText()).trim() : ''
  ok(`${name} opens over the app, in the shared shell`, n === 1 && !!box && box.x === 10, box ? `x=${box.x}` : 'absent')
  ok(`${name} is not blank`, body.length > 200, `${body.length} chars`)
  ok(`${name} closes with the same ✕`, glyph === '✕', JSON.stringify(glyph))
  const hash = await p.evaluate(() => location.hash)
  ok(`${name} did not navigate away`, hash === '#app', hash)
  await p.locator('.modhost-close').first().click()
  await p.waitForTimeout(500)
  ok(`${name} closes back into the app`, (await p.locator('.modhost-fs.fs').count()) === 0)
}
const fromMenu = (label) => async () => {
  await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(350)
  await p.locator('.tb-menu-item', { hasText: label }).click()
}
await overApp('My Credits · Billing', fromMenu('My Credits'))
await overApp('Dojo settings', fromMenu('Dojo settings'))
await overApp('Connect apps', fromMenu('Connect apps'))

// ---- toasts: a way out, and out of the menu's way ----------------------
// The app fires ambient events on its own timer; wait for one rather than
// reaching into the store, so this tests what a founder actually sees.
let waited = 0
while ((await p.locator('.toast').count()) === 0 && waited < 60000) { await p.waitForTimeout(2000); waited += 2000 }
if ((await p.locator('.toast').count()) > 0) {
  ok('every notification carries its own close button',
    (await p.locator('.toast .toast-x').count()) === (await p.locator('.toast').count()))

  // the menu is a column down the right edge · exactly where toasts stack
  const free = await p.locator('.toasts').boundingBox()
  await p.locator('.tb-menu-btn').click()
  await p.waitForTimeout(500)
  const menu = await p.locator('.tb-menu').boundingBox()
  const shifted = await p.locator('.toasts').boundingBox()
  ok('notifications clear the open menu instead of covering it',
    !!menu && !!shifted && shifted.x + shifted.width <= menu.x + 1,
    `toasts end at ${Math.round((shifted?.x ?? 0) + (shifted?.width ?? 0))} · menu starts at ${Math.round(menu?.x ?? -1)}`)
  ok('and the menu wins on depth anyway',
    await p.evaluate(() => {
      const z = (s) => Number(getComputedStyle(document.querySelector(s)).zIndex) || 0
      return z('.tb-menu') > z('.toasts')
    }))
  await p.locator('.tb-menu-scrim').click({ force: true }).catch(() => {})
  await p.waitForTimeout(350)

  // toasts expire on their own · wait for a fresh one rather than racing it
  let w2 = 0
  while ((await p.locator('.toast').count()) === 0 && w2 < 60000) { await p.waitForTimeout(1500); w2 += 1500 }
  const before = await p.locator('.toast').count()
  if (before > 0) {
    await p.locator('.toast .toast-x').first().click()
    await p.waitForTimeout(350)
    const after = await p.locator('.toast').count()
    ok('the close button dismisses it', after < before, `${before} → ${after}`)
  } else {
    ok('a notification stayed up long enough to dismiss', false, 'none')
  }
} else {
  ok('a notification appeared to test', false, 'none fired in 60s')
}

// ---- hover never draws a selection ring --------------------------------
ok('no pulsing hover ring is defined anywhere',
  await p.evaluate(() => ![...document.styleSheets].some((sh) => {
    try { return [...sh.cssRules].some((r) => r.cssText.includes('acidRing')) } catch { return false }
  })))

// ---- no emoji anywhere ------------------------------------------------
const body = await p.innerText('body')
const emoji = body.match(/\p{Extended_Pictographic}/gu)
ok('no emoji in the UI', !emoji, emoji ? [...new Set(emoji)].join(' ') : '')

console.log(out.join('\n'))
console.log(out.some((l) => l.startsWith('FAIL')) ? '\n=== FAILURES ===' : '\n=== ALL GREEN ===')
await b.close()
process.exit(out.some((l) => l.startsWith('FAIL')) ? 1 : 0)
