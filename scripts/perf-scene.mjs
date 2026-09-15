// La scène 3D du dojo s'ouvre-t-elle, et la garde de réfraction fait-elle
// son travail ?
//
// Ce script a d'abord échoué sur SON PROPRE seuil : il exigeait 12 images
// par seconde alors que le navigateur d'intégration rend en SwiftShader,
// un rasteriseur LOGICIEL où la scène entière tourne à 2. Le défaut était
// dans l'instrument, pas dans le produit — et un seuil absolu d'images par
// seconde sur une machine inconnue ne pouvait de toute façon rien garder.
//
// Ce qu'on vérifie maintenant est DÉTERMINISTE : la garde écrit sa décision
// sur le canvas (`data-refraction`). Sous rendu logiciel elle doit refuser.
// Si quelqu'un retire la garde, la réfraction s'allume ici et cette épreuve
// le dit — c'est exactement le cas qui a fait tomber le rendu de 2 à 1
// image par seconde pendant la mise au point.
//
// Le nombre d'images reste mesuré et affiché, mais comme REPÈRE : ce qui
// fait échouer est une scène FIGÉE — zéro image dessinée pendant toute la
// fenêtre de mesure.
//
// Le seuil précédent (« moins d'une image par seconde ») était encore un
// seuil de vitesse déguisé, et il est tombé : la barrière complète l'a
// mesuré à 0,7 pendant qu'une autre épreuve occupait la machine, alors que
// la même mesure isolée donne 1,0 — et que le code d'AVANT la modification
// donne exactement la même chose. L'épreuve accusait donc le produit d'un
// ralentissement qui n'existait pas, sur une machine partagée dont personne
// ne connaît la charge. Une seule question est déterministe : la scène
// dessine-t-elle, oui ou non.
//
// Il est donné avec une décimale, et ce n'est pas de la coquetterie : en
// nombre entier, « 2 » et « 1 » couvrent chacun presque un facteur deux, et
// deux mesures qu'on croit différentes peuvent ne pas l'être.
//
//   npm run preview   puis   node scripts/perf-scene.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'

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

const drawn = await p.evaluate(() => new Promise((resolve) => {
  let n = 0
  const t0 = performance.now()
  const tick = () => {
    n++
    const dt = performance.now() - t0
    if (dt < 4000) requestAnimationFrame(tick)
    else resolve({ n, fps: Math.round((n * 1000) / dt * 10) / 10 })
  }
  requestAnimationFrame(tick)
}))

const flag = await p.evaluate(() => document.querySelector('canvas')?.dataset.refraction ?? null)
const software = await p.evaluate(() => {
  const c = document.createElement('canvas')
  const g = c.getContext('webgl2') || c.getContext('webgl')
  if (!g) return true
  const d = g.getExtension('WEBGL_debug_renderer_info')
  const n = String((d && g.getParameter(d.UNMASKED_RENDERER_WEBGL)) || g.getParameter(g.RENDERER) || '')
  return /SwiftShader|llvmpipe|Software|Basic Render/i.test(n)
})

const fails = []
const ok = (m) => console.log('ok  ' + m)
const ko = (m) => { fails.push(m); console.log('KO  ' + m) }

ok(`canvas ${canvas.w}x${canvas.h}`)
if (errs.length) ko(`erreur JS · ${errs[0].slice(0, 140)}`)
else ok('aucune erreur JS')

if (flag === null) ko('la garde de réfraction n’a pas écrit sa décision sur le canvas')
else if (software && flag === '1') ko('réfraction ACTIVE sous rendu logiciel · la garde ne garde plus rien')
else ok(`réfraction ${flag === '1' ? 'active' : 'refusée'} · rendu ${software ? 'logiciel' : 'matériel'}`)

if (drawn.n === 0) ko('aucune image dessinée en 4 s · la scène est figée')
else ok(`${drawn.n} image(s) en 4 s, soit ${drawn.fps}/s · repère, pas une note (${software ? 'rasteriseur logiciel' : 'GPU'})`)

await b.close()
console.log(`\n4 vérifications · ${fails.length} échec(s)`)
process.exit(fails.length ? 1 : 0)
