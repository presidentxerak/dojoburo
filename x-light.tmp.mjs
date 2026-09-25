import { chromium } from 'playwright'

const OUT = '/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad'
const BASE = 'http://localhost:4411'
const args = process.argv.slice(2)
const look = process.env.LOOK ?? 'light'
const widths = (process.env.W ?? '1280,360').split(',').map(Number)
const full = process.env.FULL !== '0'
const wait = Number(process.env.WAIT ?? 6000)

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w > 600 ? 860 : 760 } })
  await ctx.addInitScript((lk) => {
    try {
      if (lk !== 'dark') localStorage.setItem('dojoburo.look', lk)
      localStorage.setItem('dojo.lang', 'fr')
    } catch {}
  }, look)
  const page = await ctx.newPage()
  page.on('pageerror', (e) => console.log('pageerror', e.message))
  for (const spec of args) {
    const [path, name, action] = spec.split('|')
    await page.goto(BASE + path, { waitUntil: 'load' })
    await page.waitForTimeout(wait)
    if (action) {
      for (const a of action.split(';')) {
        if (a.startsWith('click:')) { await page.locator(a.slice(6)).first().click().catch((e) => console.log('click fail', a, e.message)); await page.waitForTimeout(1500) }
        if (a.startsWith('scroll:')) { await page.evaluate((y) => window.scrollTo(0, y), Number(a.slice(7))); await page.waitForTimeout(500) }
      }
    }
    await page.evaluate(() => document.getAnimations().forEach((a) => { try { a.finish() } catch {} }))
    await page.waitForTimeout(300)
    const file = `${OUT}/light-${name}-${w}.png`
    await page.screenshot({ path: file, fullPage: full })
    console.log(file, await page.evaluate(() => document.documentElement.dataset.look))
  }
  await ctx.close()
}
await browser.close()
