import { chromium } from 'playwright'
const OUT = process.env.SCRATCH || '.'
const glArgs = ['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--enable-webgl']
const browser = await chromium.launch({ ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}), args: glArgs })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errs = []
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()) })
page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message))
await page.goto('http://localhost:4173/', { waitUntil: 'load' })
await page.waitForTimeout(2500)
const hasCanvas = await page.locator('canvas').count()
console.log('canvas', hasCanvas, 'tags', await page.locator('.tag3d').count())
await page.screenshot({ path: `${OUT}/d3-full.png` })
await page.locator('.tag3d', { hasText: 'Mia' }).click({ timeout: 3000 }).catch(()=>console.log('mia click miss'))
await page.waitForTimeout(1800)
await page.screenshot({ path: `${OUT}/d3-selected.png` })
const clean = errs.filter((e) => !/fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|40\d|429/.test(e))
console.log('console errors:', clean.length ? clean.slice(0,6) : 'none')
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
await m.goto('http://localhost:4173/', { waitUntil: 'load' }); await m.waitForTimeout(2000)
const ov = await m.evaluate(() => ({ w: document.body.scrollWidth, iw: window.innerWidth }))
console.log('mobile overflow', ov.w, 'vs', ov.iw, ov.w > ov.iw+1 ? 'OVERFLOW':'ok')
await m.screenshot({ path: `${OUT}/d3-mobile.png` })
await browser.close(); console.log('DONE')
