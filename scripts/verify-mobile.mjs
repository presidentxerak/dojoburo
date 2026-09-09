// The app on a phone.
//
// This suite tested a collapsible side sheet with a grab handle and a floating
// open button — `.hud-side`, `.hud-grip`, `.hud-open-fab`. None of those three
// classes has existed in src/ for two redesigns, so every run died on the first
// locator and reported nothing. It also launched Chromium without an
// executablePath, so in this environment it never even got that far.
//
// Rewritten against the chrome a phone actually shows: the top bar, the
// create-company card, and the Dojobot launcher. What matters on a small screen
// is not which panel slides where — it is that nothing overflows sideways, that
// the things you tap are big enough to hit, and that the assistant does not sit
// on top of the button you came to press.
//
//   node scripts/verify-mobile.mjs
import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  // The bundled Chromium, not a downloaded one. Without this the suite dies on
  // "npx playwright install" and reports nothing.
  executablePath: process.env.PW_CHROMIUM || process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

let fails = 0
const ok = (c, n, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const VW = 390, VH = 844
const page = await browser.newPage({ viewport: { width: VW, height: VH }, isMobile: true, deviceScaleFactor: 3 })
await page.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
const errs = []
page.on('pageerror', (e) => errs.push(e.message))

/* ---- the landing, which is what a phone meets first --------------------- */
await page.goto(`${BASE}/`, { waitUntil: 'load' })
await page.waitForTimeout(2000)

const sideways = async (where) => {
  const r = await page.evaluate(() => {
    const scroller = document.querySelector('.landing') || document.scrollingElement
    const out = [...document.querySelectorAll('body *')]
      .filter((e) => {
        const b = e.getBoundingClientRect()
        // a marquee track is deliberately wider than the screen · it is clipped
        if (e.closest('.lm-band, .lp-toolwall')) return false
        return b.width > 0 && b.height > 0 && (b.right > window.innerWidth + 4 || b.left < -4)
      })
      .slice(0, 3).map((e) => e.tagName + '.' + String(e.className).split(' ')[0])
    return { scroll: scroller.scrollWidth > window.innerWidth + 2, out }
  })
  ok(!r.scroll && !r.out.length, `${where} · nothing runs off the side`, r.out.join(', '))
}
await sideways('landing')

// The hero has to be readable without pinching, and its call to action has to
// be reachable without hunting.
{
  const h1 = await page.locator('h1').first().boundingBox()
  ok(!!h1 && h1.width <= VW, 'the headline fits the screen', h1 ? `${Math.round(h1.width)}px` : 'absent')
  // Scoped to the hero on purpose. `.lp-cta` also matches the header's create
  // button, which sits earlier in the DOM and is hidden on a phone — .first()
  // landed on it and reported the hero's button missing.
  const cta = await page.locator('.lp-hero .lp-hero-go').first().boundingBox()
  ok(!!cta && cta.height >= 40, 'the main button is thumb-sized', cta ? `${Math.round(cta.height)}px tall` : 'absent')
  ok(!!cta && cta.y < VH, 'and it is on the first screen', cta ? `y=${Math.round(cta.y)}` : 'absent')
}

// The trades grid replaced 23 description cards. On a phone that change is the
// difference between one screen and six.
{
  const n = await page.locator('.lp-trade').count()
  const box = await page.locator('.lp-trades').boundingBox()
  ok(n > 0 && !!box && box.height < VH * 2.5, `the ${n} trades stay under two and a half screens`,
    box ? `${Math.round(box.height)}px` : 'absent')
}
await page.screenshot({ path: `${OUT}/mob-landing.png`, fullPage: false })

/* ---- the app ------------------------------------------------------------ */
await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
await page.locator('canvas').first().waitFor({ timeout: 30000 }).catch(() => { /* no dojo yet is fine */ })
await page.waitForTimeout(1500)
await sideways('app')

{
  ok((await page.locator('.topbar').count()) === 1, 'the top bar is there')
  const menu = await page.locator('.tb-menu-btn').boundingBox()
  ok(!!menu && menu.width >= 34 && menu.height >= 34, 'the menu trigger is tappable',
    menu ? `${Math.round(menu.width)}×${Math.round(menu.height)}` : 'absent')

  // Dojobot floats over everything · it must not land on the primary action.
  const bot = await page.locator('.sb-launch').boundingBox()
  const card = await page.locator('.cc-card button, .cc-card input').first().boundingBox()
  const overlaps = bot && card && bot.left < card.right && bot.right > card.left
    && bot.top < card.bottom && bot.bottom > card.top
  ok(!overlaps, 'the assistant does not cover what you came to press')
}

// The menu is the only way to reach every surface on a phone, so it opening,
// fitting and closing is the whole navigation model.
{
  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(400)
  const m = await page.evaluate(() => {
    const el = document.querySelector('.tb-menu'); if (!el) return null
    const r = el.getBoundingClientRect(); return { left: r.left, right: r.right }
  })
  ok(!!m, 'the menu opens')
  ok(!m || (m.right <= VW + 2 && m.left >= -2), 'and fits the screen', m ? `x ${Math.round(m.left)}→${Math.round(m.right)}` : '')
  const small = await page.evaluate(() =>
    [...document.querySelectorAll('.tb-menu-item')].filter((b) => b.getBoundingClientRect().height < 36).length)
  ok(small === 0, 'every row in it is thumb-sized', small ? `${small} too short` : '')
  await page.screenshot({ path: `${OUT}/mob-menu.png` })
  await page.evaluate(() => document.querySelector('.tb-menu-scrim')?.click())
  await page.waitForTimeout(300)
  ok((await page.locator('.tb-menu').count()) === 0, 'and it closes again')
}

// A full-screen surface on a phone is the app · it must fit and be closable.
{
  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(300)
  await page.evaluate(() => [...document.querySelectorAll('.tb-menu-item')]
    .find((b) => b.textContent.includes('Connect apps'))?.click())
  await page.waitForTimeout(1200)
  ok((await page.locator('.modhost-fs.fs').count()) === 1, 'a surface opens full screen')
  await sideways('Connect apps')
  const x = await page.evaluate(() => {
    const el = document.querySelector('.modhost-close'); if (!el) return null
    const r = el.getBoundingClientRect(); return { right: r.right, w: r.width }
  })
  ok(!!x && x.right <= VW + 2 && x.w >= 34, 'its close button is on screen and tappable',
    x ? `${Math.round(x.w)}px, right edge at ${Math.round(x.right)}` : 'absent')
  await page.screenshot({ path: `${OUT}/mob-connect.png` })
  await page.evaluate(() => document.querySelector('.modhost-close')?.click())
  await page.waitForTimeout(400)
  ok((await page.locator('.modhost-fs.fs').count()) === 0, 'and closes back into the app')
}

/* ---- dark mode is a claim the CSS makes · check it on the real ground ---- */
{
  // the theme is read once at start-up, so the preference has to be in place
  // BEFORE the page boots · emulate, then reload
  await page.evaluate(() => { try { localStorage.removeItem('dojoburo.theme') } catch { /* */ } })
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.reload({ waitUntil: 'load' })
  await page.waitForTimeout(1200)
  const lum = await page.evaluate(() => {
    const bg = getComputedStyle(document.body).backgroundColor
    const m = bg.match(/\d+/g)
    return m ? (Number(m[0]) * 0.299 + Number(m[1]) * 0.587 + Number(m[2]) * 0.114) : -1
  })
  ok(lum >= 0 && lum < 120, 'the app is actually dark in dark mode', `luminance ${Math.round(lum)}`)
  await page.evaluate(() => { try { localStorage.removeItem('dojoburo.theme') } catch { /* */ } })
  await page.emulateMedia({ colorScheme: 'light' })
  await page.reload({ waitUntil: 'load' })
  await page.waitForTimeout(1200)
  const lum2 = await page.evaluate(() => {
    const m = getComputedStyle(document.body).backgroundColor.match(/\d+/g)
    return m ? (Number(m[0]) * 0.299 + Number(m[1]) * 0.587 + Number(m[2]) * 0.114) : -1
  })
  ok(lum2 > 150, 'and light in light mode', `luminance ${Math.round(lum2)}`)
}

const real = errs.filter((e) => !/ResizeObserver|Failed to load resource/.test(e))
ok(real.length === 0, 'no page errors', real.slice(0, 2).join(' | '))

await browser.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
