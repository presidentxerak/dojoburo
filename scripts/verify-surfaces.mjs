// The four full-screen surfaces, and the one-team-per-speciality rule.
//
// Dojo settings, Manage team, the token dial and Graph mode are the same weight
// of screen, so they must behave identically: full screen inside the app's 10px
// frame, one round ✕ in the same corner, Escape closes. That is a geometric
// claim about the rendered page — the only way to check it is to open all four
// in a real browser and measure them, which is what this does.
//
// It also proves the chooser: Select all, and that a team already in the
// project is shown, explained, and impossible to hire twice.
//
// Run:  npm run preview   (in another shell)
//       node scripts/verify-surfaces.mjs
import { chromium } from 'playwright'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const SHOT = process.env.SHOT_DIR || mkdtempSync(join(tmpdir(), 'surfaces-'))
const B = process.env.BASE_URL || 'http://localhost:4173/'
let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }
process.on('unhandledRejection', (e) => { console.log('\nthrew: ' + (e?.message ?? e)); process.exit(1) })

const br = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {})
const p = await br.newPage({ viewport: { width: 1440, height: 950 } })
const errs = []
p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message))

// ---- the chooser -------------------------------------------------------------
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
await p.locator('.cc-card input').fill('Novaranly')
await p.locator('.cc-go').click()
await p.waitForTimeout(1200)

const total = await p.locator('.ct-grid .tcard').count()
ok(await p.locator('.ct-all').isVisible(), 'the chooser offers Select all')
ok((await p.locator('.ct-all').innerText()).includes(String(total)), `Select all names the count · ${await p.locator('.ct-all').innerText()}`)
await p.locator('.ct-all').click()
await p.waitForTimeout(300)
ok(await p.locator('.tcard.on').count() === total, `one tap selects every team (${await p.locator('.tcard.on').count()}/${total})`)
ok(/Clear/i.test(await p.locator('.ct-all').innerText()), 'and the same button clears them again')
await p.locator('.ct-all').click()
await p.waitForTimeout(250)
ok(await p.locator('.tcard.on').count() === 0, 'clearing leaves nothing selected')

// pick two and go
await p.locator('.ct-grid .tcard').nth(0).click()
await p.locator('.ct-grid .tcard').nth(1).click()
const firstLabel = await p.locator('.ct-grid .tcard').nth(0).locator('.tcard-title').innerText()
await p.locator('.ct-go').click()
await p.waitForTimeout(3500)
await p.screenshot({ path: SHOT + '/u-dojo.png' })

// ---- no duplicates ------------------------------------------------------------
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(300)
await p.locator('.tb-menu-item', { hasText: 'My companies' }).click()
await p.waitForTimeout(1000)
// "My companies" opens the profile: one card per company. Open the one we just
// built, THEN add a team to it — the button on the companies screen starts a
// second company, which would legitimately own nothing.
await p.locator('.cocard-face').first().click()
await p.waitForTimeout(700)
await p.locator('.ph-addteam').click()
await p.waitForTimeout(1000)
await p.screenshot({ path: SHOT + '/u-chooser-owned.png' })
ok(await p.locator('.tcard.owned').count() === 2, `the two teams already hired are marked · ${await p.locator('.tcard.owned').count()}`)
ok(await p.locator('.ct-have').isVisible(), 'and the page says why')
const owned = p.locator('.tcard.owned').first()
ok((await owned.innerText()).toLowerCase().includes('hired'), 'an owned card says so on its face')
ok(await owned.locator('.tcard-owned').evaluate((el) => {
  const b = el.getBoundingClientRect(), c = el.closest('.tcard').getBoundingClientRect()
  return b.right <= c.right + 0.5 && b.width > 0
}), 'the badge fits inside the card')
ok(await owned.isDisabled(), 'an owned card cannot be picked again')
await owned.click({ force: true })
await p.waitForTimeout(250)
ok(await p.locator('.tcard.on').count() === 0, 'clicking it selects nothing')
const all = await p.locator('.ct-all').innerText()
ok(all.includes(String(await p.locator('.ct-grid .tcard').count() - 2)), `Select all skips what you own · ${all}`)
await p.locator('.ct-all').click()
await p.waitForTimeout(300)
ok(await p.locator('.tcard.on').count() === (await p.locator('.ct-grid .tcard').count()) - 2, 'select all ticks only what is left')

// back to the project, into the dojo
await p.locator('.ct-back').click()
await p.waitForTimeout(900)
const rows = await p.locator('.tmcard').count()
ok(rows === 2, `still two teams, no twin created (${rows})`)
ok(await p.locator('.ph-dup').count() === 0, 'and nothing is flagged as a duplicate')
await p.locator('.tmcard .btn.primary').first().click()
await p.waitForTimeout(2500)

// ---- the four full-screen surfaces --------------------------------------------
const surfaces = [
  ['Manage team', () => p.locator('.dojo-ctl button', { hasText: 'Manage team' }).click(), 'u-fs-manage.png'],
  // the dial no longer sits in the header · it lives in the menu, under Credits
  ['the token dial', async () => {
    await p.locator('.tb-menu-btn').click()
    await p.waitForTimeout(300)
    await p.locator('.tb-menu-item', { hasText: 'How hard your team works' }).click()
  }, 'u-fs-dial.png'],
  ['Graph mode', () => p.locator('.dojo-ctl-graph').click(), 'u-fs-graph.png'],
]
for (const [name, open, shot] of surfaces) {
  await open()
  await p.waitForTimeout(1200)
  await p.screenshot({ path: SHOT + '/' + shot })
  const fs = p.locator('.modhost-fs.fs')
  ok(await fs.count() === 1, `${name} opens one full-screen surface`)
  const box = await fs.boundingBox()
  const vp = p.viewportSize()
  // the app frames every full-screen surface with a 10px window margin
  ok(box && box.x === 10 && box.y === 0 && box.width === vp.width - 20 && box.height === vp.height,
    `${name} fills the screen inside the app's 10px frame · ${JSON.stringify(box)}`)
  const x = fs.locator('.modhost-close')
  ok(await x.count() === 1, `${name} has exactly one close button`)
  const xb = await x.boundingBox()
  ok(xb && xb.x > vp.width - 120 && xb.y < 90, `${name} closes from the top right · ${JSON.stringify(xb)}`)
  ok((await x.innerText()).trim() === '✕', `${name} uses the same glyph`)
  ok(await fs.locator('.modhost-name').isVisible(), `${name} carries a title in the bar`)
  // escape closes it
  await p.keyboard.press('Escape')
  await p.waitForTimeout(700)
  ok(await p.locator('.modhost-fs.fs').count() === 0, `${name} closes on Escape`)
}

// the close button itself, on the graph
await p.locator('.dojo-ctl-graph').click()
await p.waitForTimeout(1200)
ok(await p.locator('.dg-canvas').isVisible(), 'graph: the canvas renders inside the full-screen body')
ok(await p.locator('.dg-lead-row .dg-node.lead').count() === 1, 'graph: the lead is still on top')
const links = await p.locator('.dg-link').evaluateAll((els) => els.map((e) => e.getAttribute('d')))
ok(links.length > 0 && links.every((d) => d && !/NaN|Infinity/.test(d)), `graph: ${links.length} links still measured correctly`)
ok(await p.locator('.dg-leg.report').isVisible(), 'graph: the legend moved into the bar')
await p.locator('.modhost-fs.fs .modhost-close').click()
await p.waitForTimeout(800)
ok(await p.locator('.modhost-fs.fs').count() === 0, 'graph: the ✕ closes it')
ok(await p.locator('.dojo-ctl-graph.on').count() === 0, 'graph: the button un-presses itself')
ok(await p.locator('.dash-stage').isVisible(), 'graph: the dojo is underneath, untouched')

// Dojo settings is the surface the others were harmonised with
await p.locator('.dojo-ctl button', { hasText: 'Dojo settings' }).click()
await p.waitForTimeout(1800)
await p.screenshot({ path: SHOT + '/u-fs-settings.png' })
const sx = p.locator('.modhost-close').first()
const sb = await sx.boundingBox()
const vp = p.viewportSize()
ok(sb && sb.x > vp.width - 120 && sb.y < 30, `settings: the same close button, at the same height as the others · ${JSON.stringify(sb)}`)
ok((await sx.innerText()).trim() === '✕', 'settings: the same glyph')
ok(await p.locator('.studio-page .topbar-app').count() === 0, 'settings: no second header above the studio bar')

// ---- mobile ------------------------------------------------------------------
const m = await br.newPage({ viewport: { width: 390, height: 844 } })
m.on('pageerror', (e) => errs.push('M PAGEERROR ' + e.message))
// a fresh page is a fresh browser context · build a project here too
await m.goto(B + '#app', { waitUntil: 'networkidle' })
await m.waitForTimeout(1500)
await m.locator('.cc-card input').fill('Pocket')
await m.locator('.cc-go').click()
await m.waitForTimeout(1200)
await m.locator('.ct-grid .tcard').nth(0).click()
await m.locator('.ct-go').click()
await m.waitForTimeout(3500)

const noSideScroll = () => m.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)
const mGraph = m.locator('.mbar-4 button', { hasText: 'Graph' })
ok(await mGraph.count() === 1, 'mobile: the bottom bar carries Graph')
await mGraph.click()
await m.waitForTimeout(1600)
await m.screenshot({ path: SHOT + '/u-m-graph.png' })
ok(await m.locator('.modhost-fs.fs .modhost-close').isVisible(), 'mobile graph: the same close button')
ok(await noSideScroll(), 'mobile graph does not overflow sideways')
await m.locator('.modhost-fs.fs .modhost-close').click()
await m.waitForTimeout(700)

await m.locator('.tb-menu-btn').click()
await m.waitForTimeout(400)
await m.locator('.tb-menu-item', { hasText: 'How hard your team works' }).click()
await m.waitForTimeout(1200)
await m.screenshot({ path: SHOT + '/u-m-dial.png' })
ok(await m.locator('.modhost-fs.fs .modhost-close').isVisible(), 'mobile dial: the same close button')
ok(await noSideScroll(), 'mobile dial does not overflow sideways')
const mx = await m.locator('.modhost-fs.fs .modhost-close').boundingBox()
ok(mx && mx.x > 390 - 80 && mx.y < 80, `mobile: still the top right corner · ${JSON.stringify(mx)}`)
await m.locator('.modhost-fs.fs .modhost-close').click()
await m.waitForTimeout(600)
ok(await m.locator('.modhost-fs.fs').count() === 0, 'mobile: it closes')

// --- the dojo must not starve the app ------------------------------------
// The 3D room used to render every frame forever, so opening anything over it
// queued behind a render loop: five seconds for the menu, thirteen for My
// Credits. From the outside that is a page that never loads, and it was
// reported as exactly that. Surfaces now pause the scene while they are up.
await p.setViewportSize({ width: 1440, height: 950 })
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(3000)
// Click through the DOM and time the surface appearing. Playwright's own
// actionability wants two identical animation frames, which this box (software
// WebGL) cannot deliver quickly — that measures the renderer, not the app. What
// the founder feels is: I clicked, and how long until it is there.
for (const [label, item] of [['My Credits · Billing', 'My Credits'], ['Quick search', 'Quick search'], ['Dojo settings', 'Dojo settings']]) {
  const ms = await p.evaluate((text) => new Promise((res) => {
    const btn = document.querySelector('.tb-menu-btn')
    btn.click()
    requestAnimationFrame(() => {
      const row = [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(text))
      const t0 = performance.now()
      row.click()
      const check = () => {
        if (document.querySelector('.modhost-fs.fs')) res(performance.now() - t0)
        else requestAnimationFrame(check)
      }
      requestAnimationFrame(check)
    })
  }), item)
  ok(ms < 1500, `${label} appears promptly · ${Math.round(ms)}ms`)
  await p.evaluate(() => document.querySelector('.modhost-close')?.click())
  await p.waitForTimeout(400)
}

ok(errs.length === 0, errs.length ? 'page errors: ' + JSON.stringify(errs.slice(0, 4)) : 'no page errors')
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
