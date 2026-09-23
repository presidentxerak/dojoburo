// Les gestes de base, et le fait qu'ils PRODUISENT quelque chose.
//
// Ce fichier n'avait aucune assertion : il imprimait des chiffres et sortait
// toujours en succès. La barrière le comptait donc en vert depuis toujours,
// sans qu'il vérifie rien — la façon exacte dont un garde-fou meurt sans qu'on
// s'en aperçoive. Chaque chiffre imprimé était déjà une chose qui DOIT être
// vraie ; il suffisait de le dire.
//
// Il couvre deux chemins que personne d'autre ne couvre : se connecter depuis
// le menu, et la fenêtre flottante (#widget).
import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:4173'
let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra !== '' ? ' · ' + extra : '')); if (!c) fails++ }
const OUT = process.env.SCRATCH || '.'
const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

// The private beta gate stands in front of every route. Without this the suite
// screenshots the door and reports an empty app — which it did, silently, for
// as long as the gate has existed. verify-gate.mjs is what tests the door.
const collectGate = (page) => page.addInitScript(() => {
  try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ }
})

function collect(page, bag) {
  page.on('console', (m) => { if (m.type() === 'error') bag.push('CONSOLE: ' + m.text()) })
  page.on('pageerror', (e) => bag.push('PAGEERR: ' + e.message))
}
const noise = (e) => /fonts\.g|ERR_CONNECTION|xumm|Failed to load resource|api\/chat|api\/checkout|net::ERR/.test(e)

// ---- #app: office loads, then Account and Billing from the menu ----------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 1320, height: 880 } })
  await collectGate(page)
  collect(page, errs)
  await page.goto(`${BASE}/#app`, { waitUntil: 'load' })
  await page.waitForTimeout(1500)
  const canvases = await page.locator('canvas').count()
  ok('le dojo dessine sa scène', canvases > 0, `${canvases} canvas`)

  // Account and Billing are reached from the top-bar menu · the modal with a
  // tab bar this suite used to click is gone. With no Privy app configured,
  // "Sign in" signs you in as a guest on the spot; the profile row that then
  // appears is what opens the Account surface.
  const openFromMenu = async (text) => {
    // two steps, with a frame between them: the menu is React-rendered, so the
    // row does not exist yet in the same tick the button was clicked
    await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
    await page.waitForTimeout(250)
    await page.evaluate((t) => {
      const row = [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(t))
      row?.click()
    }, text)
    await page.waitForTimeout(700)
  }
  const closeSurface = async () => {
    await page.evaluate(() => document.querySelector('.modhost-close')?.click())
    await page.waitForTimeout(400)
  }

  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(300)
  const signin = await page.locator('.tb-menu-auth .btn').count()
  ok('le menu propose de se connecter', signin > 0, `${signin} bouton(s)`)
  await page.evaluate(() => document.querySelector('.tb-menu-auth .btn')?.click())
  await page.waitForTimeout(700)
  await page.evaluate(() => document.querySelector('.tb-menu-btn')?.click())
  await page.waitForTimeout(300)
  const prof = await page.locator('.tb-menu-profile').count()
  ok('et après connexion, le menu montre le compte', prof > 0,
    prof ? '' : 'sans cette ligne, l’écran Compte n’a plus de porte')
  await page.evaluate(() => document.querySelector('.tb-menu-profile')?.click())
  await page.waitForTimeout(700)
  ok('l’écran Compte s’ouvre', (await page.locator('.ws-keypanel, .ws-btn').count()) > 0)
  await closeSurface()

  // Billing: your own key, currency, and the plans
  await openFromMenu('Billing')
  await page.evaluate(() => [...document.querySelectorAll('.ws-currencies .ws-cur')].find((b) => b.textContent.includes('USD'))?.click())
  await page.waitForTimeout(250)
  const keyPanel = await page.locator('.ws-keypanel').count()
  const plans = await page.locator('.ws-plan').count()
  ok('la facturation porte le panneau de la clé personnelle', keyPanel > 0)
  ok('et les formules', plans > 0, `${plans} formules`)
  const payLabel = (await page.locator('.ws-plan .ws-btn').first().textContent().catch(() => ''))?.trim() || ''
  ok('chaque formule a un bouton qui la nomme', /\S/.test(payLabel), payLabel || 'aucun')
  // click it → api/checkout unreachable on preview → graceful note, no card taken
  await page.evaluate(() => document.querySelector('.ws-plan .ws-btn')?.click())
  await page.waitForTimeout(1400)
  // Sur cette prévisualisation /api/checkout n'existe pas · le clic doit donc
  // produire une PHRASE, pas un silence. Un bouton de paiement qui ne répond
  // rien laisse croire qu'une carte a été prise.
  const note = ((await page.locator('.ws-paynote').first().textContent().catch(() => '')) || '').trim()
  ok('un paiement qui ne peut pas aboutir le dit', /\S/.test(note), note.slice(0, 70) || 'aucun message')
  ok('et précise que rien n’a été débité', /nothing was charged/i.test(note), note.slice(0, 70))
  await page.screenshot({ path: `${OUT}/brick-billing.png` })
  const real = errs.filter((e) => !noise(e))
  ok('aucune erreur JavaScript sur ce parcours', real.length === 0, real.slice(0, 2).join(' | '))
  await page.close()
}

// ---- #widget: standalone always-on-top widget ----------------------------
{
  const errs = []
  const page = await browser.newPage({ viewport: { width: 280, height: 360 } })
  await collectGate(page)
  collect(page, errs)
  await page.goto(`${BASE}/#widget`, { waitUntil: 'load' })
  await page.waitForTimeout(800)
  const wp = await page.locator('.widget-page').count()
  const aw = await page.locator('.aw').count()
  ok('la fenêtre flottante existe et se dessine', wp > 0 && aw > 0, `page ${wp} · contenu ${aw}`)
  const title = ((await page.locator('.aw-head strong').textContent().catch(() => '')) || '').trim()
  ok('et elle porte un titre', /\S/.test(title), title || 'aucun')
  await page.screenshot({ path: `${OUT}/brick-widget.png` })
  const wErr = errs.filter((e) => !noise(e))
  ok('aucune erreur JavaScript dans la fenêtre flottante', wErr.length === 0, wErr.slice(0, 2).join(' | '))
  await page.close()
}

await browser.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
// LA SORTIE EST VIDÉE AVANT DE PARTIR, SANS RENONCER À PARTIR.
//
// Vers un terminal, écrire est synchrone. Vers un TUYAU · c'est-à-dire dès que
// le portail lance cette épreuve · c'est asynchrone, et « process.exit() » s'en
// va sans attendre : ce qui n'est pas encore sorti est jeté. Mesuré sur une
// épreuve de données : 528 lignes une fois, 179 la suivante, code de sortie 0
// dans les deux cas. Ce qui disparaît en premier, c'est le DÉTAIL d'un échec,
// donc la seule chose qu'on lit pour le corriger.
//
// UNE ÉPREUVE NAVIGATEUR NE PEUT PAS SE CONTENTER DE POSER SON CODE, parce
// qu'un navigateur laisse parfois une poignée ouverte et que le processus
// resterait pendu jusqu'au budget du portail · un faux échec de cinq minutes.
// D'où les deux temps : on pose le code et on laisse Node sortir seul, ce qui
// vide la file ; et une minuterie DÉRÉFÉRENCÉE force la sortie une demi-seconde
// plus tard si quelque chose retient encore. Déréférencée, elle n'empêche pas
// la sortie naturelle · elle ne se déclenche que s'il y a effectivement de quoi
// la retenir.
process.exitCode = fails ? 1 : 0
setTimeout(() => process.exit(process.exitCode ?? 0), 500).unref()
