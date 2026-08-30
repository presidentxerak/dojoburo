import { chromium } from 'playwright'
const SHOT = '/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad'
const B = 'http://localhost:4173/'
let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }
process.on('unhandledRejection', (e) => { console.log('threw: ' + (e?.message ?? e)); process.exit(1) })

const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await br.newPage({ viewport: { width: 1440, height: 950 } })
const errs = []
p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message))

await p.goto(B + '#guide', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
await p.locator('.howto-btn').first().click()
await p.waitForTimeout(1200)

// the overlay plays whichever walk that button carries · find its beats by name
const titles = await p.locator('.tutfs-body .tut-dot').evaluateAll((els) => els.map((e) => e.getAttribute('title') || ''))
const dotFor = (re) => {
  const i = titles.findIndex((t) => re.test(t))
  if (i < 0) throw new Error(`no beat matching ${re} in ${JSON.stringify(titles)}`)
  return p.locator('.tutfs-body .tut-dot').nth(i)
}
const PICK = /teams$/i, CREW = /hired|teammates arrive/i, RUN = /Run every step/i
const beats = [PICK, CREW, RUN]
const shots = ['t-pick.png', 't-crew.png', 't-run.png']
for (let i = 0; i < beats.length; i++) {
  await dotFor(beats[i]).click()
  await p.waitForTimeout(2600)
  await p.screenshot({ path: SHOT + '/' + shots[i] })
  // the stage must contain the specimen and it must fit
  const fit = await p.locator('.tutfs-body .tut-stage').evaluate((st) => {
    const spec = st.querySelector('.tut-spec, .tut-run')
    if (!spec) return { none: true }
    const s = spec.getBoundingClientRect(), b = st.getBoundingClientRect()
    return { over: s.left < b.left - 1 || s.right > b.right + 1 || s.top < b.top - 1 || s.bottom > b.bottom + 1,
      w: Math.round(s.width), h: Math.round(s.height), bw: Math.round(b.width), bh: Math.round(b.height) }
  })
  ok(!fit.none && !fit.over, `${beats[i]}: the specimen fits the stage · ${JSON.stringify(fit)}`)
}

// what the specimens actually are
await dotFor(PICK).click()
await p.waitForTimeout(1500)
ok(await p.locator('.tutfs-body .tut-spec-cards .tcard').count() === 3, 'pick: three real team cards')
ok(await p.locator('.tutfs-body .tut-spec-cards .tcard.on').count() === 1, 'pick: one of them is ticked')
const card = await p.locator('.tutfs-body .tut-spec-cards .tcard').first().innerText()
ok(/credits a run/i.test(card) && /teammates/i.test(card), 'pick: the card carries its real crew and budget')

await dotFor(CREW).click()
await p.waitForTimeout(2500)
ok(await p.locator('.tutfs-body .tut-spec-crew .agent-card').count() === 4, 'crew: four real teammate cards')
ok(await p.locator('.tutfs-body .tut-spec-crew .agent-card .a3d canvas').count() === 4, 'crew: each one carries its 3D portrait')
const first = await p.locator('.tutfs-body .tut-spec-crew .agent-card').first().innerText()
ok(/team lead/i.test(first), `crew: the lead is named as such · ${first.split('\n')[0]}`)

await dotFor(RUN).click()
await p.waitForTimeout(3200)
ok(await p.locator('.tutfs-body .tut-run .agent-card').count() === 1, 'run: the working teammate is an office card')
ok(await p.locator('.tutfs-body .tut-run .agent-card canvas').count() === 1, 'run: with the real 3D portrait')
ok(await p.locator('.tutfs-body .tut-loop li.done').count() >= 1, 'run: the steps still tick through')
const steps = await p.locator('.tutfs-body .tut-loop li').allInnerTexts()
ok(steps.some((s) => /audience research/i.test(s)), `run: the steps are the team's real plan · ${JSON.stringify(steps.map((s) => s.replace(/\s+/g, ' ')))}`)

// mobile
const m = await br.newPage({ viewport: { width: 390, height: 844 } })
m.on('pageerror', (e) => errs.push('M PAGEERROR ' + e.message))
await m.goto(B + '#guide', { waitUntil: 'networkidle' })
await m.waitForTimeout(1400)
await m.locator('.howto-btn').first().click()
await m.waitForTimeout(1200)
const mTitles = await m.locator('.tutfs-body .tut-dot').evaluateAll((els) => els.map((e) => e.getAttribute('title') || ''))
await m.locator('.tutfs-body .tut-dot').nth(mTitles.findIndex((t) => /hired|teammates arrive/i.test(t))).click()
await m.waitForTimeout(2500)
await m.screenshot({ path: SHOT + '/t-m-crew.png' })
ok(await m.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'mobile: the tutorial does not overflow')
const mfit = await m.locator('.tutfs-body .tut-stage').evaluate((st) => {
  const s = st.querySelector('.tut-spec').getBoundingClientRect(), b = st.getBoundingClientRect()
  return s.left >= b.left - 1 && s.right <= b.right + 1
})
ok(mfit, 'mobile: the specimen fits the stage')

ok(errs.length === 0, errs.length ? 'page errors: ' + JSON.stringify(errs.slice(0, 3)) : 'no page errors')
await br.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
