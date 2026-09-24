// LE JEU DOJOBURO, JOUÉ POUR DE VRAI · dans un navigateur, sur ordinateur et
// sur téléphone.
//
// POURQUOI EN PLUS DE test-sim · test-sim garde les règles du moteur, qui est
// pur. Rien n'y dit que l'écran les appelle : un panneau qui calcule sa propre
// qualité, une boucle qui ne démarre pas, une feuille du bas qui sort de
// l'écran, et le moteur resterait vert. Cette épreuve fait ce que fait un
// joueur · ouvrir le jeu, lancer la journée, ouvrir un brief, demander une
// équipe, lancer le travail · et regarde ce que l'écran en montre.
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
let fails = 0
const ok = (name, pass, detail = '') => {
  if (!pass) fails++
  console.log(`${pass ? 'ok  ' : 'FAIL'}  ${name}${detail ? ' · ' + detail : ''}`)
}

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

for (const [name, viewport, mobile] of [
  ['ordinateur', { width: 1280, height: 800 }, false],
  ['téléphone', { width: 390, height: 844 }, true],
]) {
  const ctx = await b.newContext({ viewport, isMobile: mobile, hasTouch: mobile, locale: 'fr-FR' })
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(String(e.message || e)))
  // une partie neuve, tutoriel déjà vu · le tutoriel est vérifié à part, plus bas
  await p.addInitScript(() => { try { localStorage.setItem('dojoburo.sim.v1', JSON.stringify({ tutored: true })) } catch { /* rien */ } })
  await p.goto(`${B}/dojoburo`, { waitUntil: 'networkidle' })
  await p.waitForSelector('.sim-play', { timeout: 20000 })

  ok(`${name} · l'écran titre annonce le jeu`, /Dojoburo/.test(await p.locator('.sim-title').textContent() ?? ''))
  ok(`${name} · la salle est dessinée`, (await p.locator('.sim canvas').count()) === 1)
  ok(`${name} · pas de bulle de chat par-dessus le jeu`, (await p.locator('.sb-launch').count()) === 0)

  await p.click('.sim-play')
  await p.waitForSelector('.sim-client', { timeout: 30000 })
  ok(`${name} · la journée démarre et un client entre`, true)
  const hud = await p.locator('.sim-top').textContent()
  ok(`${name} · le haut dit le jour, les tokens et l'objectif`, /Jour 1/.test(hud) && /Tokens/.test(hud) && /600/.test(hud), hud?.slice(0, 80))

  await p.locator('.sim-client').first().click()
  await p.waitForSelector('.sim-panel')
  ok(`${name} · le brief s'ouvre avec ses besoins`, (await p.locator('.sim-needs li').count()) >= 1)
  ok(`${name} · les douze spécialistes sont proposés`, (await p.locator('.sim-panel .sim-staff li').count()) === 12)
  ok(`${name} · rien à lancer sans équipe`, await p.locator('.sim-go').isDisabled())

  await p.click('.sim-teamh .sim-btn')
  const q = await p.locator('.sim-pvq b').textContent()
  ok(`${name} · l'équipe proposée donne une qualité prévue`, /\d+ %/.test(q ?? ''), q ?? '')

  // LA FEUILLE ET LE PANNEAU RESTENT DANS L'ÉCRAN · le bouton Lancer est au
  // bout d'un panneau qui défile ; il doit être atteignable, pas coupé.
  // MESURÉ UNE FOIS L'ENTRÉE FINIE · le panneau glisse de 24 px, la feuille
  // monte de 40 px. Une attente fixe ne suffisait pas sous rendu logiciel :
  // on attend que l'animation soit réellement terminée.
  await p.waitForFunction(() => {
    const el = document.querySelector('.sim-panel')
    return !!el && el.getAnimations().every((a) => a.playState === 'finished')
  }, null, { timeout: 5000 }).catch(() => {})
  const box = await p.locator('.sim-panel').boundingBox()
  ok(`${name} · le brief tient dans l'écran`, !!box && box.x >= 0 && box.x + box.width <= viewport.width + 1 && box.y + box.height <= viewport.height + 1, JSON.stringify(box))
  if (mobile) ok(`${name} · le brief est une feuille du bas`, !!box && Math.abs(box.y + box.height - viewport.height) < 2 && box.width >= viewport.width - 1)
  else ok(`${name} · le brief est un panneau à droite`, !!box && box.x > viewport.width / 2)

  const tokensBefore = await p.locator('.sim-gauge').first().textContent()
  await p.locator('.sim-go').scrollIntoViewIfNeeded()
  await p.click('.sim-go')
  await p.waitForSelector('.sim-job', { timeout: 5000 }).catch(() => {})
  ok(`${name} · lancé, le travail apparaît en cours`, (await p.locator('.sim-job').count()) === 1)
  ok(`${name} · le panneau se referme`, (await p.locator('.sim-panel').count()) === 0)
  const tokensAfter = await p.locator('.sim-gauge').first().textContent()
  ok(`${name} · les tokens sont retirés du budget`, tokensBefore !== tokensAfter, `${tokensBefore} → ${tokensAfter}`)

  // la pause fige l'horloge
  await p.click('.sim-ctl .sim-ico >> nth=0')
  const c1 = await p.locator('.sim-day span').textContent()
  await p.waitForTimeout(2500)
  const c2 = await p.locator('.sim-day span').textContent()
  ok(`${name} · la pause arrête l'horloge`, c1 === c2 && (await p.locator('.sim-veil').count()) === 1, `${c1} / ${c2}`)

  const wide = await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
  ok(`${name} · rien ne déborde en largeur`, wide)
  ok(`${name} · aucune erreur dans la page`, errs.length === 0, errs.slice(0, 2).join(' | '))
  await ctx.close()
}

// LE TUTORIEL · une partie vraiment neuve le montre, et il se referme.
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, locale: 'fr-FR' })
  const p = await ctx.newPage()
  await p.goto(`${B}/dojoburo`, { waitUntil: 'networkidle' })
  await p.waitForSelector('.sim-play', { timeout: 20000 })
  await p.click('.sim-play')
  ok('le tutoriel accueille une première partie', (await p.locator('.sim-tut').count()) === 1)
  for (let i = 0; i < 3; i++) await p.click('.sim-tut .gm-cta')
  ok('… et se referme au bout de trois étapes', (await p.locator('.sim-tut').count()) === 0)
  const saved = await p.evaluate(() => JSON.parse(localStorage.getItem('dojoburo.sim.v1') || '{}'))
  ok('… et ne revient plus', saved.tutored === true)
  await ctx.close()
}

await b.close()
console.log(`\nverify-sim · ${fails ? `${fails} en échec` : 'le jeu se joue, sur ordinateur et sur téléphone'}`)
process.exit(fails ? 1 : 0)
