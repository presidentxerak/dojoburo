// A walk through the whole app, reporting what actually happens.
//
// Not a pass/fail suite — those exist and are green. This answers the different
// question: open every public page, build a company, open every teammate, open
// every surface, and write down what rendered and what threw. It is the report
// you cannot get by reading the code, because "the module is registered" and
// "the screen has something on it" are different claims.
//
//   npm run preview   (in another shell)
//   node scripts/diagnose.mjs
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'

const B = process.env.BASE_URL || 'http://localhost:4173/'
const OUT = process.env.OUT || '/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad/diagnose.json'

const br = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const ctx = await br.newContext({ viewport: { width: 1440, height: 980 } })
await ctx.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private */ } })
const p = await ctx.newPage()

const report = { public: [], errors: [] }
let bucket = 'boot'
p.on('pageerror', (e) => report.errors.push({ where: bucket, kind: 'pageerror', text: e.message.slice(0, 200) }))
p.on('console', (m) => {
  if (m.type() !== 'error') return
  const t = m.text()
  // /api/* 404s are expected under `vite preview`, which serves no functions
  if (/Failed to load resource/.test(t)) return
  report.errors.push({ where: bucket, kind: 'console', text: t.slice(0, 200) })
})

const words = async (sel) => {
  const n = await p.locator(sel).count()
  if (!n) return 0
  return (await p.locator(sel).first().innerText().catch(() => '')).split(/\s+/).filter(Boolean).length
}

/* ---------------------------------------------------------------- public -- */
const PUBLIC = ['', 'teammates', 'ai-marketing-manager', 'ai-chief-of-staff', 'academy',
  'academy/start-here', 'guide', 'terms', 'privacy']
for (const path of PUBLIC) {
  bucket = '/' + path
  await p.goto(B + path, { waitUntil: 'networkidle' })
  await p.waitForTimeout(900)
  report.public.push({
    path: '/' + path,
    h1: (await p.locator('h1').first().innerText().catch(() => '(no h1)')).slice(0, 70),
    words: await words('main, .landing, .legal, .tmp-body'),
    gated: (await p.locator('.gate').count()) > 0,
  })
}

/* ------------------------------------------------------------ the company -- */
bucket = 'setup'
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
const signIn = p.locator('button', { hasText: /^Sign in$/ }).first()
if (await signIn.count()) { await signIn.click(); await p.waitForTimeout(2000) }

if (await p.locator('.cc-card input').count()) {
  await p.locator('.cc-card input').fill('Diagnostic Co')
  await p.locator('.cc-go').click(); await p.waitForTimeout(1500)
  const cards = await p.locator('.ct-grid .tcard').count()
  report.catalogue = cards
  for (const i of [0, 1, 2]) if (i < cards) await p.locator('.ct-grid .tcard').nth(i).click()
  await p.locator('.ct-go').click(); await p.waitForTimeout(5000)
}
report.teams = await p.locator('.dtab').count()

/* ---------------------------------------------------------------- note ---- */
// There is deliberately no teammate-by-teammate sweep here.
//
// One was written and thrown away: the command palette is the only DOM path to
// a teammate (the character itself lives inside a WebGL canvas, and the HTML
// label over it is pointer-transparent by design), and driving it from a script
// produced identical word counts for four agents in a row — it was measuring
// the same view repeatedly without navigating. Numbers that look like findings
// and are not are worse than no numbers, so the sweep is gone rather than
// quietly wrong. What this file still measures, it measures honestly.

await br.close()
writeFileSync(OUT, JSON.stringify(report, null, 2))

/* ----------------------------------------------------------------- print -- */
const pad = (s, n) => String(s).padEnd(n)
console.log('\nPUBLIC PAGES')
for (const r of report.public) console.log(`  ${pad(r.path, 26)} ${pad(r.h1, 44)} ${String(r.words).padStart(5)} words${r.gated ? '  GATED' : ''}`)
console.log(`\nCOMPANY  catalogue ${report.catalogue ?? '?'} teams offered · ${report.teams} team tabs created`)
console.log(`\nERRORS  ${report.errors.length}`)
for (const e of report.errors.slice(0, 12)) console.log(`  [${e.where}] ${e.kind}: ${e.text}`)
console.log(`\nfull report → ${OUT}`)
