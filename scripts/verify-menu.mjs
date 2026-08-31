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

// ---- no emoji anywhere ------------------------------------------------
const body = await p.innerText('body')
const emoji = body.match(/\p{Extended_Pictographic}/gu)
ok('no emoji in the UI', !emoji, emoji ? [...new Set(emoji)].join(' ') : '')

console.log(out.join('\n'))
console.log(out.some((l) => l.startsWith('FAIL')) ? '\n=== FAILURES ===' : '\n=== ALL GREEN ===')
await b.close()
process.exit(out.some((l) => l.startsWith('FAIL')) ? 1 : 0)
