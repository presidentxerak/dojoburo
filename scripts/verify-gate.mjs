// The private beta gate · nothing is reachable until the code is entered, and
// once it is, this browser is not asked again.
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

await p.goto(B, { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
ok('a first visit is stopped by the gate', (await p.locator('.gate').count()) === 1)
ok('the landing is not rendered behind it', (await p.locator('.landing').count()) === 0)
const card = await p.locator('.gate-card').innerText()
ok('it carries the brand name', /dojoburo/i.test(card))
ok('it says what it is', /Private access to Dojoburo Beta version/i.test(card), )
ok('the logo mark is above the name', (await p.locator('.gate-mark svg').count()) === 1)
await p.locator('.gate-card').screenshot({ path: SHOT + '/gate.png' })

// every other route is behind it too
for (const r of ['#app', '#studio', '#connect']) {
  await p.goto(B + r, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
  ok(`${r} is behind the gate too`, (await p.locator('.gate').count()) === 1)
}
for (const path of ['academy', 'guide', 'privacy']) {
  await p.goto(B + path, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
  ok(`/${path} is behind the gate too`, (await p.locator('.gate').count()) === 1)
}

// a wrong code says so and does not let anyone through
await p.goto(B, { waitUntil: 'networkidle' })
await p.waitForTimeout(900)
await p.locator('.gate-input').fill('0000')
await p.locator('.gate-go').click()
await p.waitForTimeout(500)
ok('a wrong code is refused', (await p.locator('.gate').count()) === 1)
ok('and says so', (await p.locator('.gate-msg.on').count()) === 1,
  (await p.locator('.gate-msg').innerText()).trim())
ok('and clears the field for another try', (await p.locator('.gate-input').inputValue()) === '')

// the real one opens it
await p.locator('.gate-input').fill('1974')
await p.locator('.gate-go').click()
await p.waitForTimeout(1500)
ok('the code opens the app', (await p.locator('.gate').count()) === 0)
ok('and the landing is there', (await p.locator('.landing').count()) === 1)

// and it is remembered
await p.reload({ waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
ok('a reload is not asked again', (await p.locator('.gate').count()) === 0)
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
ok('and neither is the app', (await p.locator('.gate').count()) === 0)

// a different browser starts locked again
const fresh = await br.newContext({ viewport: { width: 1280, height: 900 } })
const q = await fresh.newPage()
await q.goto(B, { waitUntil: 'networkidle' })
await q.waitForTimeout(1000)
ok('another browser is still locked', (await q.locator('.gate').count()) === 1)

ok('no page errors', errs.length === 0, errs.slice(0, 2).join(' | '))
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
