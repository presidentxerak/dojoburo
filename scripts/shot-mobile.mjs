// Photographier l'app comme un téléphone la voit · clair ET sombre.
//
// Un jugement porté sur la feuille de style est un jugement sur ce qu'on croit
// qu'elle fait. Celui-ci est porté sur ce qui s'affiche.
//
//   npm run preview   puis   node scripts/shot-mobile.mjs
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const B = process.env.BASE || 'http://localhost:4173'
const DIR = process.env.SHOTS || '/tmp/claude-0/shots'
mkdirSync(DIR, { recursive: true })

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

const SAVED = {
  account: { id: 'guest_m', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_m', name: 'My company', createdAt: 1 }],
  activeCompanyId: 'c_m',
  dojos: [{
    id: 'd_m', name: 'Social media campaign', companyId: 'c_m', template: 'startup', archetype: 'social', goal: '',
    agents: [
      { id: 'm1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 'm2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
    ],
  }],
  activeDojoId: 'd_m',
  projectName: 'My company',
}

for (const scheme of ['dark', 'light']) {
  const ctx = await b.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    colorScheme: scheme,
  })
  await ctx.addInitScript((saved) => {
    try {
      localStorage.setItem('dojoburo.beta', '1974')
      localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
      localStorage.removeItem('dojoburo.theme')
    } catch { /* private */ }
  }, SAVED)
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(e.message))

  // La landing, telle qu'un visiteur l'ouvre.
  await p.goto(`${B}/`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  const stamp = await p.evaluate(() => document.documentElement.dataset.theme || '(aucun)')
  await p.screenshot({ path: `${DIR}/${scheme}-1-landing.png` })
  console.log(`${scheme} · landing · data-theme = ${stamp}`)

  // Puis l'app.
  await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(3000)
  const stamp2 = await p.evaluate(() => document.documentElement.dataset.theme || '(aucun)')
  await p.screenshot({ path: `${DIR}/${scheme}-2-app.png` })
  console.log(`${scheme} · app · data-theme = ${stamp2}`)

  // Les réglages du dojo · la capture où le corps sortait blanc.
  const menu = p.locator('.tb-menu-btn')
  if (await menu.count()) {
    await menu.click().catch(() => {}); await p.waitForTimeout(500)
    const it = p.locator('.tb-menu-item', { hasText: /Dojo settings|Settings/ })
    if (await it.count()) { await it.first().click().catch(() => {}); await p.waitForTimeout(2000) }
  }
  await p.screenshot({ path: `${DIR}/${scheme}-3-settings.png` })

  if (errs.length) console.log(`${scheme} · erreurs JS : ${errs.slice(0, 3).join(' | ')}`)
  await ctx.close()
}

await b.close()
console.log(`\ncaptures dans ${DIR}`)
