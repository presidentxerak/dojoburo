// Ce que coûte la scène 3D du dojo, en images par seconde, mesuré.
//
// Deux postes ont été ajoutés au rendu : une carte d'ombre de 2048 (elle ne
// se recalcule que lorsque la composition change, voir ShadowBudget) et deux
// objets réfractants, qui obligent three.js à rendre une passe opaque
// supplémentaire hors écran À CHAQUE IMAGE.
//
// Le second est le seul qui se paie image après image, et c'est exactement
// le genre de dépense qui ne se voit pas tant qu'on ne la mesure pas. Ce
// script compte les images réellement présentées pendant quatre secondes.
//
// ATTENTION à ce que ce chiffre veut dire ici : le navigateur tourne en
// SwiftShader, un rasteriseur logiciel. Les valeurs absolues n'ont rien à
// voir avec celles d'une vraie carte graphique — elles sont bien plus
// basses. Ce qui reste valable, c'est le RAPPORT entre deux mesures prises
// dans les mêmes conditions.
//
//   npm run preview   puis   node scripts/perf-scene.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const MIN_FPS = Number(process.env.MIN_FPS || 12)

const SAVED = {
  account: { id: 'guest_p', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_p', name: 'My company', createdAt: 1 }],
  activeCompanyId: 'c_p',
  dojos: [{
    id: 'd_p', name: 'Write a book', companyId: 'c_p', template: 'castle', archetype: 'book', goal: '',
    agents: [
      { id: 'p1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 'p2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
      { id: 'p3', name: 'Pixel', fn: 'Design', role: 'designer', skinId: 's3', tasks: [], budget: 1, gx: 2, gy: 0 },
      { id: 'p4', name: 'Echo', fn: 'Marketing', role: 'marketer', skinId: 's4', tasks: [], budget: 1, gx: 0, gy: 1 },
    ],
  }],
  activeDojoId: 'd_p',
  projectName: 'My company',
}

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
await ctx.addInitScript((saved) => {
  try {
    localStorage.setItem('dojoburo.beta', '1974')
    localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
  } catch { /* private */ }
}, SAVED)
const p = await ctx.newPage()
const errs = []
p.on('pageerror', (e) => errs.push(String(e)))

await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
for (const rx of [/Open company/, /Write a book/]) {
  const l = p.getByText(rx).first()
  if (await l.count()) { await l.click({ timeout: 5000 }).catch(() => {}); await p.waitForTimeout(2500) }
}

const canvas = await p.evaluate(() => {
  const c = document.querySelector('canvas')
  return c ? { w: c.clientWidth, h: c.clientHeight } : null
})
if (!canvas) { console.error('KO  pas de canvas · le dojo ne s’est pas ouvert'); await b.close(); process.exit(1) }

// on laisse la scène finir de charger (décor paresseux, carte d'environnement)
await p.waitForTimeout(3000)

const fps = await p.evaluate(() => new Promise((resolve) => {
  let n = 0
  const t0 = performance.now()
  const tick = () => {
    n++
    if (performance.now() - t0 < 4000) requestAnimationFrame(tick)
    else resolve(Math.round((n * 1000) / (performance.now() - t0)))
  }
  requestAnimationFrame(tick)
}))

console.log(`ok  canvas ${canvas.w}x${canvas.h}`)
console.log(`ok  ${fps} images/s sur SwiftShader (rasteriseur logiciel · valeur relative)`)
if (errs.length) console.log(`KO  erreur JS · ${errs[0].slice(0, 140)}`)

await b.close()
const bad = errs.length > 0 || fps < MIN_FPS
console.log(`\n${bad ? 'ÉCHEC' : 'OK'} · seuil ${MIN_FPS} images/s`)
process.exit(bad ? 1 : 0)
