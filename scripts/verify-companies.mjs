// Companies, and the one menu.
//
// A founder runs several companies, each with its own dojo teams, and a
// speciality is hired once PER COMPANY — not once ever. That rule lives in the
// store, the chooser and the tab bar at the same time, so the only way to know
// it holds is to build two companies in a browser and look.
//
// It also guards the menu: one trigger, no duplicate Account, no Credits button
// beside a menu that carries Credits, no sound row, and the token dial inside.
//
// Run:  npm run preview   (in another shell)
//       node scripts/verify-companies.mjs
import { chromium } from 'playwright'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const SHOT = process.env.SHOT_DIR || mkdtempSync(join(tmpdir(), 'companies-'))
let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }
process.on('unhandledRejection', (e) => { console.log('threw: ' + (e?.message ?? e)); process.exit(1) })
const br = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {})
const p = await br.newPage({ viewport: { width: 1440, height: 950 } })
// The private beta gate stands in front of every route · let this browser in
// before the suite starts, so it tests the app rather than the door.
// verify-gate.mjs is what tests the door.
await p.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })

const errs = []
p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message))

await p.goto((process.env.BASE_URL || 'http://localhost:4173/') + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
// --- company one
await p.locator('.cc-card input').fill('Novaranly')
await p.locator('.cc-go').click(); await p.waitForTimeout(1200)
ok(await p.locator('.ct-grid .tcard').count() === 23, 'the whole catalogue is offered to a new company')
ok(await p.locator('.tcard.owned').count() === 0, 'nothing is greyed out for a brand-new company')
await p.locator('.ct-grid .tcard').nth(0).click()
await p.locator('.ct-grid .tcard').nth(1).click()
await p.locator('.ct-go').click(); await p.waitForTimeout(3500)
ok(await p.locator('.dtab').count() === 2, 'its two teams are in the tab bar')

// --- the menu · one trigger, no duplicates
await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(400)
await p.screenshot({ path: SHOT + '/menu.png' })
const items = await p.locator('.tb-menu-item').allInnerTexts()
ok(!items.some((t) => /^Account$/i.test(t.trim())), 'no bare Account row · the profile row is the only one')
ok(!items.some((t) => /^Dojos$/i.test(t.trim())), 'no "Dojos" row beside "Dojo settings"')
ok(items.some((t) => /How hard your team works/i.test(t)), 'the token dial lives in the menu')
ok(items.some((t) => /My companies/i.test(t)), 'My companies')
ok(await p.locator('.topbar-right .tb-create').count() === 0, 'no Credits button beside the avatar')
ok(await p.locator('.topbar-right button').count() === 2, `two buttons in the header · ${await p.locator('.topbar-right button').count()}`)
ok(!(await p.locator('.tb-menu').innerText()).match(/Sound/i), 'no sound row')

// the dial opens full screen from the menu
await p.locator('.tb-menu-item', { hasText: 'How hard your team works' }).click()
await p.waitForTimeout(900)
ok(await p.locator('.modhost-fs.fs .modhost-close').isVisible(), 'the dial is a full-screen surface')
await p.locator('.modhost-fs.fs .modhost-close').click(); await p.waitForTimeout(500)

// --- a SECOND company
await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300)
await p.locator('.tb-menu-item', { hasText: 'My companies' }).click()
await p.waitForTimeout(1200)
await p.screenshot({ path: SHOT + '/companies.png' })
ok(await p.locator('.cocard:not(.cocard-new)').count() === 1, 'the profile lists one company')
ok((await p.locator('.cocard:not(.cocard-new)').first().innerText()).includes('dojo team'), 'the card carries its team count')
await p.locator('.ph-addco').click(); await p.waitForTimeout(1000)
await p.locator('.cc-card input').fill('Kassio')
await p.locator('.cc-go').click(); await p.waitForTimeout(1200)
ok(await p.locator('.tcard.owned').count() === 0, 'a NEW company can hire the same specialities again')
await p.locator('.ct-grid .tcard').nth(0).click()
await p.locator('.ct-go').click(); await p.waitForTimeout(3500)
ok(await p.locator('.dtab').count() === 0 || await p.locator('.dtab').count() === 1, `the tab bar shows only this company's team(s)`)

await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300)
await p.locator('.tb-menu-item', { hasText: 'My companies' }).click()
await p.waitForTimeout(1200)
ok(await p.locator('.cocard:not(.cocard-new)').count() === 2, 'two companies now')
await p.locator('.cocard-face').first().click()
await p.waitForTimeout(1200)
ok(await p.locator('.tmcard').count() === 2, 'opening the first company shows its two teams')
ok((await p.locator('.ph-top h1').innerText()).includes('Novaranly'), 'and its name')

// --- the same speciality twice in ONE company is still refused
await p.locator('.ph-addteam').click(); await p.waitForTimeout(1000)
ok(await p.locator('.tcard.owned').count() === 2, 'inside a company, the teams it has are marked')

// --- the catalogue must never open on a wall of greyed-out cards
const firstSix = await p.locator('.ct-grid .tcard').evaluateAll((els) => els.slice(0, 6).map((e) => e.classList.contains('owned')))
ok(firstSix.every((owned) => !owned), 'what you can still hire comes first', JSON.stringify(firstSix))
ok(/still to hire/.test(await p.locator('.ct-have').innerText()), 'and the page says how many are left')
// leaving the catalogue must not require ticking something first
ok(await p.locator('.ct-leave').isVisible(), 'the catalogue has a way out before you pick anything')
await p.locator('.ct-leave').click()
await p.waitForTimeout(900)

// --- an empty card, with a +, makes the next one
ok(await p.locator('.cocard-new').count() === 1, 'a company has one "add a dojo team" card')
ok((await p.locator('.cocard-new').innerText()).includes('+'), 'and it carries the +')
await p.locator('.ph-back').click(); await p.waitForTimeout(900)
ok(await p.locator('.cocard-new').count() === 1, 'the companies grid has one "new company" card')
await p.locator('.cocard-new').click(); await p.waitForTimeout(900)
ok(await p.locator('.cc-card').count() === 1, 'and the + card opens the naming screen')

// --- no borders, no coloured cap, on any card the founder named
const chrome = await p.evaluate(() => {
  const bad = []
  for (const el of document.querySelectorAll('.cocard, .tmcard, .tcard')) {
    const cs = getComputedStyle(el)
    if (!el.classList.contains('cocard-new') && parseFloat(cs.borderTopWidth) > 0) bad.push('border:' + el.className)
    if (getComputedStyle(el, '::before').display !== 'none') bad.push('cap:' + el.className)
  }
  return bad
})
ok(chrome.length === 0, 'company and team cards carry no border and no colour cap', chrome.slice(0, 3).join(' | '))

// --- no card paints itself, and none draws a coloured line ---------------
// "Chosen" used to mix the accent into the paper, so company cards came out
// pink and team cards mauve; and buttons sat over a cyan-green drop shadow that
// reads, an inch away, as a blue line underneath them.
const paint = await p.evaluate(() => {
  const white = (c) => /^rgba?\(255,\s*255,\s*255/.test(c) || c === 'rgb(255, 255, 255)'
  const bad = []
  for (const el of document.querySelectorAll('.cocard, .tmcard, .tcard, .eff-mode, .appcard')) {
    if (el.classList.contains('cocard-new')) continue
    const cs = getComputedStyle(el)
    if (!white(cs.backgroundColor)) bad.push('bg ' + el.className.split(' ')[1] + ' ' + cs.backgroundColor)
    if (getComputedStyle(el, '::before').display !== 'none') bad.push('cap ' + el.className.split(' ')[1])
    if (parseFloat(cs.borderTopWidth) > 0) bad.push('border ' + el.className.split(' ')[1])
  }
  return bad
})
ok(paint.length === 0, 'every card is white, capless and borderless', paint.slice(0, 3).join(' | '))

const glow = await p.evaluate(() => {
  const bad = []
  for (const el of document.querySelectorAll('.btn.primary, .ct-go, .cc-go, .set-cta, .stepbar-next')) {
    const sh = getComputedStyle(el).boxShadow
    // a cyan/green halo · rgb around (0,214,255) or (24,255,176)
    if (/rgba?\(\s*(0|24|18),\s*(214|255)/.test(sh)) bad.push(el.className + ' :: ' + sh.slice(0, 60))
  }
  return bad
})
ok(glow.length === 0, 'no button sits over a blue halo', glow.slice(0, 2).join(' | '))

// --- and nothing anywhere still says XRP ---------------------------------
const ledger = await p.evaluate(() => (document.body.innerText.match(/XRPL?|x402|on-ledger/gi) || []))
ok(ledger.length === 0, 'the page carries no trace of the old payment rail', ledger.join(','))

ok(errs.length === 0, errs.length ? JSON.stringify(errs.slice(0, 3)) : 'no page errors')
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
