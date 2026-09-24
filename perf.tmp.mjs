import { chromium } from 'playwright'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  const ctx = await b.newContext({ viewport: vp })
  const p = await ctx.newPage()
  await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
  await p.waitForTimeout(4000)
  const r = await p.evaluate(() => new Promise((res) => {
    let n = 0, worst = 0, last = performance.now(); const t0 = last
    const f = (t) => { n++; worst = Math.max(worst, t - last); last = t; if (t - t0 < 5000) requestAnimationFrame(f); else res({ fps: n / 5, worst: Math.round(worst), canvases: document.querySelectorAll('canvas').length }) }
    requestAnimationFrame(f)
  }))
  console.log(vp.width, JSON.stringify(r))
  await ctx.close()
}
await b.close()
