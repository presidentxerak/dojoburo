// Ce qu'on doit pouvoir lire sans cliquer, et ce qui doit s'ouvrir ailleurs.
//
// Quatre propriétés, toutes invisibles dans le code et visibles à l'écran :
// que Pilot et Kaizen passent devant les équipes, qu'une autorisation parte
// dans SA fenêtre, qu'on voie d'un coup d'œil si une application est reliée, et
// qu'il y ait un chemin vers l'explication.
//
//   npm run preview   puis   node scripts/verify-connect-ui.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
// Une entreprise avec une équipe · un navigateur neuf n'a ni l'une ni l'autre,
// et il n'y aurait alors ni vue entreprise ni page de coéquipier à regarder.
const SAVED = {
  account: { id: 'guest_ui', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_ui', name: 'Acme', createdAt: 1 }],
  activeCompanyId: 'c_ui',
  dojos: [{
    id: 'd_ui', name: 'Campagne', companyId: 'c_ui', template: 'startup', archetype: 'social', goal: '',
    agents: [
      // Chief porte notion + slack + gmail · avec la flotte simulée plus bas
      // cela donne les TROIS rendus d'un coup : relié, à relier, indisponible.
      { id: 'g1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 'g2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
    ],
  }],
  activeDojoId: 'd_ui',
  projectName: 'Acme',
}

const ctx = await b.newContext({ viewport: { width: 1400, height: 1000 } })
await ctx.addInitScript((saved) => {
  try {
    localStorage.setItem('dojoburo.beta', '1974')
    localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
  } catch { /* private */ }
}, SAVED)
const p = await ctx.newPage()
const errs = []
p.on('pageerror', (e) => errs.push(e.message))

const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

// Une flotte d'applications dont une est reliée, une connectable, une absente ·
// l'écran doit produire trois rendus différents.
let fleet = [
  { id: 'notion', available: true, connected: true, account: 'acme@exemple.fr' },
  { id: 'gdrive', available: true, connected: false, account: null },
  { id: 'slack', available: true, connected: false, account: null },
]
await p.route('**/api/connect?action=list*', (r) => r.fulfill({
  status: 200,
  contentType: 'application/json',
  body: JSON.stringify({ ok: true, backend: true, byok: { connected: false, hint: null }, tools: fleet }),
}))

/* ---- 1 · Pilot et Kaizen au-dessus ------------------------------------- */
await p.evaluate(() => { try { sessionStorage.setItem('dojoburo.nav', '') } catch { /* ignore */ } })
await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
// « Mes entreprises » puis la carte de l'entreprise · c'est la vue qui porte
// les deux blocs système et la grille des équipes.
const menu = p.locator('.tb-menu-btn')
if (await menu.count()) {
  await menu.click(); await p.waitForTimeout(400)
  const my = p.locator('.tb-menu-item', { hasText: /My companies/ })
  if (await my.count()) { await my.first().click(); await p.waitForTimeout(1500) }
}
const co = p.locator('.cocard-face, .cocard').first()
if (await co.count()) { await co.click({ timeout: 5000 }).catch(() => {}); await p.waitForTimeout(1500) }

const geom = await p.evaluate(() => {
  const sys = document.querySelector('.sys')
  const grid = document.querySelector('.ph-cogrid')
  if (!sys || !grid) return null
  return { sys: sys.getBoundingClientRect().top, grid: grid.getBoundingClientRect().top }
})
if (geom) {
  ok('Pilot et Kaizen passent devant les équipes', geom.sys < geom.grid,
    `sys ${Math.round(geom.sys)}px · grille ${Math.round(geom.grid)}px`)
} else {
  ok('la vue entreprise porte bien les deux blocs', false, 'introuvable à l’écran')
}

/* ---- 2 · une autorisation part dans sa fenêtre -------------------------- */
await p.goto(`${B}/#connect`, { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
const connectBtn = p.locator('.connect-card.s-ready .btn', { hasText: /^Connect$/ }).first()
if (await connectBtn.count()) {
  const [popup] = await Promise.all([
    ctx.waitForEvent('page', { timeout: 6000 }).catch(() => null),
    connectBtn.click(),
  ])
  ok('connecter une application ouvre une autre fenêtre', !!popup,
    popup ? 'fenêtre ouverte' : 'rien ne s’est ouvert · on aurait quitté son dojo')
  if (popup) {
    ok('et l’app n’a pas quitté sa page', p.url().includes('#connect'), p.url().slice(-24))
    await popup.close().catch(() => {})
  }
} else {
  ok('une application connectable était offerte sur la page', false, 'aucune carte « ready »')
}

/* ---- 2bis · ce qu'un AGENT a le droit d'y faire -------------------------- */
// Relier n'est pas autoriser. Une application reliée était rattachée à chaque
// run et le modèle appelait ses outils sans qu'aucun garde-fou ne la borne ;
// la carte doit maintenant DIRE ce qu'un agent peut y faire.
{
  // Une application qui sert plusieurs fonctions a une carte par fonction ·
  // c'est le classement métier du catalogue, pas un doublon.
  const permits = await p.locator('.connect-permit').count()
  ok('une application reliée annonce ce qu’un agent peut y faire', permits > 0,
    `${permits} cartes portent le badge`)

  // Le texte est mis en capitales par le CSS · on compare sans la casse.
  const txt = (await p.locator('.connect-permit').first().innerText().catch(() => '')).toLowerCase()
  ok('et le dit en toutes lettres, pas en nuance de couleur',
    /read only|read \+ write/.test(txt),
    txt.replace(/\n/g, ' ').slice(0, 70))
  ok('le défaut est la lecture seule', /read only/.test(txt),
    'une connexion n’accorde pas l’écriture · c’est un geste séparé')
  ok('et il explique ce que cela interdit', /cannot create, send or change/.test(txt))

  // Et seules les applications RELIÉES en portent un · une carte « Connect »
  // n'a rien à annoncer sur ce qu'un agent y ferait.
  const onCards = await p.locator('.connect-card.on').count()
  ok('seules les applications reliées portent le badge', permits === onCards,
    `${permits} badges pour ${onCards} cartes reliées`)
}

/* ---- 3 et 4 · l'état des applications sur la page d'un agent ------------ */
await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
// Ouvrir un coéquipier par la palette · cliquer dans la scène 3D dépend du
// rendu logiciel et n'est pas un chemin fiable pour une épreuve.
await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk')))
await p.waitForTimeout(600)
const input = p.locator('.cmdk-input')
if (await input.count()) {
  await input.fill('Chief')
  await p.waitForTimeout(600)
  await p.keyboard.press('Enter')
  await p.waitForTimeout(2000)
}
let apps = await p.locator('.agw-applist').count()
if (!apps) {
  const card = p.locator('.agent-card').first()
  if (await card.count()) { await card.click().catch(() => {}); await p.waitForTimeout(1500) }
  apps = await p.locator('.agw-applist').count()
}

if (apps) {
  const connected = await p.locator('.agw-app.on .agw-tick').count()
  ok('une application reliée porte une coche verte', connected > 0, `${connected} coche(s)`)

  const toConnect = await p.locator('.agw-app.connect').allInnerTexts()
  ok('celle qu’il reste à relier est un bouton qui la nomme',
    toConnect.some((t) => /^Connect\s+\S/.test(t.replace(/^\S+\n/, '').trim())),
    toConnect.map((t) => t.replace(/\n/g, ' ').trim()).join(' | ') || 'aucun bouton')

  const howto = await p.locator('.agw-howto').count()
  ok('un bouton « How to connect apps » est là', howto > 0)

  const tick = await p.locator('.agw-tick').first().evaluate((el) => getComputedStyle(el).color).catch(() => '')
  ok('et la coche est bien verte', /rgb\(31,\s*165,\s*99\)/.test(tick), tick || 'couleur illisible')

  // Et le bouton ouvre bien une AUTRE fenêtre, depuis la page de l'agent aussi.
  const [popup2] = await Promise.all([
    ctx.waitForEvent('page', { timeout: 6000 }).catch(() => null),
    p.locator('.agw-app.connect').first().click(),
  ])
  ok('et ce bouton ouvre la page du fournisseur ailleurs', !!popup2)
  if (popup2) await popup2.close().catch(() => {})

  // Une application que ce déploiement ne sait pas joindre ne doit pas offrir
  // un bouton qui mènerait à une erreur · elle dit ce qu'elle est.
  fleet = fleet.map((t) => (t.id === 'gdrive' ? { ...t, available: false } : t))
  await p.reload({ waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk')))
  await p.waitForTimeout(500)
  const i2 = p.locator('.cmdk-input')
  if (await i2.count()) { await i2.fill('Scout'); await p.waitForTimeout(500); await p.keyboard.press('Enter'); await p.waitForTimeout(1800) }
  const off = await p.locator('.agw-app.off').allInnerTexts()
  ok('une application injoignable le dit, au lieu d’offrir un bouton qui échoue',
    off.some((t) => /not available/.test(t)),
    off.map((t) => t.replace(/\n/g, ' ').trim()).join(' | ') || 'aucune')
  ok('et elle reste cliquable vers sa documentation',
    (await p.locator('.agw-app.off[href]').count()) > 0)
} else {
  ok('la page d’un coéquipier a été atteinte', false, 'impossible d’ouvrir un agent dans ce test')
}

ok('aucune erreur JavaScript sur tout le parcours', errs.length === 0, errs.slice(0, 2).join(' | '))

await b.close()
console.log(out.join('\n'))
const failed = out.filter((l) => l.startsWith('FAIL')).length
console.log(failed ? `\n${failed} FAILED` : '\nALL GREEN')
process.exit(failed ? 1 : 0)
