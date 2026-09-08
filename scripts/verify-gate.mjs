// The private beta gate · it closes the PRODUCT and leaves the WEBSITE open.
//
// This suite used to assert the opposite — that the gate held on every route,
// the Academy and the legal pages included. That was the wrong contract: a
// crawler that runs JavaScript saw a password prompt where the prerendered HTML
// had a lesson, so twenty-six Academy pages were published and unindexable at
// once, and the two versions disagreed with each other. The rule now is that
// anything meant to be FOUND is open and anything meant to be USED is shut, and
// this file is where that rule is enforced.
import { chromium } from 'playwright'
const B = process.env.BASE_URL || 'http://localhost:4173/'
const SHOT = '/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad'
let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const br = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' })
const ctx = await br.newContext({ viewport: { width: 1280, height: 900 } })
const p = await ctx.newPage()
const errs = []
p.on('pageerror', (e) => errs.push(e.message))

/* ---- the website is readable by anyone ---------------------------------- */
// A first visit has never entered a code. Every one of these has to render its
// own content, with no gate anywhere near it.
const PUBLIC = [
  ['', '.landing', 'the landing'],
  ['teammates', '.tmp-body', 'the teammates hub'],
  ['ai-marketing-manager', '.tmp-body', 'a job-title page'],
  ['academy', '.landing', 'the Academy'],
  ['guide', '.landing', 'the guide'],
  ['privacy', '.legal', 'the privacy policy'],
  ['terms', '.legal', 'the terms'],
]
for (const [path, sel, label] of PUBLIC) {
  await p.goto(B + path, { waitUntil: 'networkidle' })
  await p.waitForTimeout(700)
  ok(`${label} opens with no code`, (await p.locator('.gate').count()) === 0)
  ok(`  and renders its own content`, (await p.locator(sel).count()) >= 1)
}

// the job-title page is the one that has to carry real, indexable words
await p.goto(B + 'ai-marketing-manager', { waitUntil: 'networkidle' })
await p.waitForTimeout(700)
const body = await p.locator('.tmp-body').innerText()
ok('it leads with the searchable job title', /AI Marketing Manager/.test(await p.locator('h1').innerText()))
ok('it still names the teammate', /Marketus/.test(body))
ok('it says what the agent will not do', /will not do/i.test(body))
ok('it is not a stub', body.split(/\s+/).length > 120, `${body.split(/\s+/).length} words`)
ok('the hub links to it', await p.goto(B + 'teammates').then(async () => {
  await p.waitForTimeout(700)
  return (await p.locator('a[href="/ai-marketing-manager"]').count()) >= 1
}))

/* ---- the product is shut ------------------------------------------------ */
for (const r of ['#app', '#studio', '#connect']) {
  await p.goto(B + r, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
  ok(`${r} is behind the gate`, (await p.locator('.gate').count()) === 1)
}

await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(900)
const card = await p.locator('.gate-card').innerText()
ok('the gate carries the brand name', /dojoburo/i.test(card))
ok('it says what it is', /Private access to Dojoburo Beta version/i.test(card))
ok('the logo mark is above the name', (await p.locator('.gate-mark svg').count()) === 1)
await p.locator('.gate-card').screenshot({ path: SHOT + '/gate.png' })

/* ---- a wrong code is refused -------------------------------------------- */
await p.locator('.gate-input').fill('0000')
await p.locator('.gate-go').click()
await p.waitForTimeout(500)
ok('a wrong code is refused', (await p.locator('.gate').count()) === 1)
ok('and says so', (await p.locator('.gate-msg.on').count()) === 1,
  (await p.locator('.gate-msg').innerText()).trim())
ok('and clears the field for another try', (await p.locator('.gate-input').inputValue()) === '')

/* ---- the real one opens it ---------------------------------------------- */
await p.locator('.gate-input').fill('1974')
await p.locator('.gate-go').click()
await p.waitForTimeout(1800)
ok('the code opens the app', (await p.locator('.gate').count()) === 0)
ok('and the app is there', (await p.locator('.app, .landing').count()) >= 1)

// and it is remembered
await p.goto(B + '#studio', { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
ok('another product page is not asked again', (await p.locator('.gate').count()) === 0)
await p.reload({ waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
ok('and neither is a reload', (await p.locator('.gate').count()) === 0)

/* ---- a different browser starts locked again ---------------------------- */
const fresh = await br.newContext({ viewport: { width: 1280, height: 900 } })
const q = await fresh.newPage()
await q.goto(B + '#app', { waitUntil: 'networkidle' })
await q.waitForTimeout(1000)
ok('another browser is still locked out of the app', (await q.locator('.gate').count()) === 1)
await q.goto(B + 'ai-sales-manager', { waitUntil: 'networkidle' })
await q.waitForTimeout(800)
ok('but can still read the website', (await q.locator('.gate').count()) === 0)

ok('no page errors', errs.length === 0, errs.slice(0, 2).join(' | '))
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
