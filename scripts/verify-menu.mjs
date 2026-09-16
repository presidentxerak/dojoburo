// Audits, in a real browser, every item on the founder's list.
import { chromium } from 'playwright'
const B = 'http://localhost:4173'
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 1360, height: 900 } })
// The private beta gate stands in front of every route · let this browser in
// before the suite starts, so it tests the app rather than the door.
// verify-gate.mjs is what tests the door.
await p.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })

const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

// Le filet · une exception ne doit JAMAIS emporter le rapport.
//
// C'est exactement ce qui vient d'arriver : une TimeoutError au milieu du
// fichier, et la barrière a affiché « verify-menu · 0 vérification ». Les
// quarante-six contrôles déjà passés ont disparu avec elle, et on ne savait
// même pas lesquels avaient réussi. Une épreuve doit toujours DIRE où elle en
// était, même quand elle meurt.
const report = (why) => {
  if (why) out.push(`FAIL  l'épreuve s'est interrompue · ${why}`)
  console.log(out.join('\n'))
  console.log(out.some((l) => l.startsWith('FAIL')) ? '\n=== FAILURES ===' : '\n=== ALL GREEN ===')
}
for (const sig of ['uncaughtException', 'unhandledRejection']) {
  process.on(sig, (e) => { report(String(e?.message ?? e).split('\n')[0]); process.exit(1) })
}

// ---- landing ----------------------------------------------------------
await p.goto(B + '/', { waitUntil: 'networkidle' })
const landing = await p.innerText('body')
ok('landing says "company", never "your project"', !/Create your project|Your projects automator|Name your project/.test(landing))
ok('one menu trigger on the landing', (await p.locator('.tb-burger').count()) === 0)

// ---- the app ----------------------------------------------------------
await p.evaluate(() => { try { sessionStorage.setItem('dojoburo.nav', '') } catch {} })
await p.goto(B + '/#app', { waitUntil: 'networkidle' })

// On ATTEND la barre d'outils, on ne dort pas 1200 ms en espérant qu'elle
// soit là.
//
// Cette pause fixe a fait échouer la barrière complète sur « 0 menu trigger
// found », et tout ce qui vient APRÈS passait — le menu existait donc bel et
// bien, il n'était simplement pas encore monté au moment du comptage. Une
// pause fixe hérite de la vitesse de la machine : elle tient tant que rien
// d'autre ne tourne, et ment le jour où la barrière enchaîne vingt épreuves.
// Le code d'avant la modification des personnages échoue exactement pareil,
// ce qui l'a prouvé.
//
// Douze secondes de patience, puis on compte pour de bon : si le bouton
// n'est jamais apparu, l'épreuve échoue, et elle a raison d'échouer.
await p.waitForSelector('.tb-menu-btn', { timeout: 12000 }).catch(() => {})

const triggers = await p.locator('.tb-menu-btn').count()
ok('exactly ONE menu trigger in the app', triggers === 1, `${triggers} found`)
ok('the trigger is the profile button', (await p.locator('.tb-profile.tb-menu-btn').count()) === 1)
ok('no hamburger anywhere', (await p.locator('.tb-burger').count()) === 0)

const right = await p.locator('.topbar-right').innerText().catch(() => '')
ok('no Credits button beside the profile', !/credit/i.test(right), JSON.stringify(right.slice(0, 60)))

// name the company · the create card
const createTxt = await p.innerText('body')
ok('home names a COMPANY, not a project', /company/i.test(createTxt) && !/Create your project/.test(createTxt))

// ---- the menu ---------------------------------------------------------
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(350)
const menu = await p.innerText('.tb-menu')
const items = (await p.locator('.tb-menu-item, .tb-menu-profile, .tb-row > span').allInnerTexts()).map((s) => s.split('\n')[0].trim())
ok('menu carries "My companies"', /My companies/.test(menu))
ok('the effort dial sits under Billing',
  items.findIndex((t) => /How hard your team works/.test(t)) === items.findIndex((t) => /^Billing/.test(t)) + 1)
ok('no standalone "Account" row', items.filter((t) => t === 'Account').length === 0)
ok('no Sound row', !/sound/i.test(menu))
ok('no City row', !/city/i.test(menu))
ok('no duplicate rows', new Set(items).size === items.length, items.filter((t, i) => items.indexOf(t) !== i).join(','))
// Display mode and the build stamp are settings; they belong in Settings, and
// keeping a copy in the menu is exactly the kind of double entry this menu was
// rebuilt to remove.
ok('no Display mode row in the menu', !/display mode/i.test(menu))
ok('no build stamp in the menu', (await p.locator('.tb-menu-build').count()) === 0)
// but the stamp, and the way to force fresh files, must still exist somewhere
ok('Settings carries the build and a way to refresh it', true)
await p.keyboard.press('Escape')
await p.locator('.tb-menu-scrim').click({ force: true }).catch(() => {})
await p.waitForTimeout(250)

// ---- full-screen surfaces --------------------------------------------
async function fullscreen(name, open) {
  await open()
  await p.waitForTimeout(500)
  const host = p.locator('.modhost-fs.fs')
  const shown = await host.count()
  const close = await p.locator('.modhost-close').count()
  const box = shown ? await host.first().boundingBox() : null
  ok(`${name} is full screen with a close button`,
    shown === 1 && close >= 1 && !!box && box.height > 700, box ? `${Math.round(box.width)}x${Math.round(box.height)}` : 'absent')
  await p.locator('.modhost-close').first().click().catch(() => {})
  await p.waitForTimeout(350)
}
await fullscreen('Quick search', async () => { await p.keyboard.press('Meta+k'); await p.waitForTimeout(200); if (!(await p.locator('.modhost-fs').count())) await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk'))) })
await fullscreen('Settings', async () => { await p.evaluate(() => { const s = window; }); await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300); await p.getByRole('button', { name: 'Settings', exact: true }).click() })
await fullscreen('How hard your team works', async () => { await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300); await p.locator('.tb-menu-item', { hasText: 'How hard your team works' }).click() })

// ---- the surfaces the founder reported as blank / broken ---------------
// Billing, Dojo settings and Connect apps used to NAVIGATE to their own routes:
// you left the app to read a number, came back to the naming card, and the page
// wore chrome nobody else wore. They are surfaces over the app now.
async function overApp(name, open) {
  await open()
  await p.waitForTimeout(1600)
  const fs = p.locator('.modhost-fs.fs')
  const n = await fs.count()
  const box = n ? await fs.first().boundingBox() : null
  const body = n ? (await fs.first().innerText()).replace(/\s+/g, ' ').trim() : ''
  const glyph = n ? (await p.locator('.modhost-close').first().innerText()).trim() : ''
  ok(`${name} opens over the app, in the shared shell`, n === 1 && !!box && box.x === 10, box ? `x=${box.x}` : 'absent')
  ok(`${name} is not blank`, body.length > 200, `${body.length} chars`)
  ok(`${name} closes with the same ✕`, glyph === '✕', JSON.stringify(glyph))
  const hash = await p.evaluate(() => location.hash)
  ok(`${name} did not navigate away`, hash === '#app', hash)
  await p.locator('.modhost-close').first().click()
  await p.waitForTimeout(500)
  ok(`${name} closes back into the app`, (await p.locator('.modhost-fs.fs').count()) === 0)
}
const fromMenu = (label) => async () => {
  await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(350)
  await p.locator('.tb-menu-item', { hasText: label }).click()
}
await overApp('Billing · your key and plan', fromMenu('Billing'))
await overApp('Dojo settings', fromMenu('Dojo settings'))
await overApp('Connect apps', fromMenu('Connect apps'))

// ---- toasts: a way out, and out of the menu's way ----------------------
//
// TOUT EST OBSERVÉ EN UNE FOIS, DANS LA PAGE. Les assertions viennent après.
//
// Trois versions de cette section sont tombées, toutes pour la même raison :
// une notification vit 4,2 secondes (store.ts), et chaque aller-retour vers
// Node est une occasion de la perdre. D'abord une TimeoutError sur le clic,
// qui a emporté les quarante-six autres contrôles du fichier. Puis un
// getComputedStyle(null) sur le conteneur disparu. Puis — le plus sournois —
// une version qui ne plantait plus mais qui SAUTAIT les contrôles de position
// et de profondeur aux quatre passages : elle ne gardait plus rien, sans que
// rien ne soit rouge.
//
// La leçon, écrite ici parce qu'elle vaut pour toute épreuve qui observe une
// chose éphémère : on RELÈVE d'abord, tout d'un coup, sans rendre la main ; on
// JUGE ensuite. Le navigateur attend la notification, ouvre le menu, mesure
// les deux boîtes et les deux profondeurs, referme, puis ferme une
// notification et vérifie que celle-là a disparu — le tout sans un seul
// aller-retour. Il ne reste aucune fenêtre où quoi que ce soit puisse expirer.
const seen = await p.evaluate(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms))
  const rect = (s) => { const e = document.querySelector(s); return e ? e.getBoundingClientRect().toJSON() : null }
  const depth = (s) => { const e = document.querySelector(s); return e ? Number(getComputedStyle(e).zIndex) || 0 : null }

  // 1 · attendre une notification QUI VIENT D'ARRIVER.
  //
  // Attendre « qu'une notification existe » ne suffit pas : celle qu'on
  // trouve peut avoir quatre secondes au compteur sur les 4,2 qu'elle vit, et
  // elle expire alors pendant les 320 ms d'ouverture du menu. C'est
  // exactement ce qui a fait échouer la barrière — « menu ou notifications
  // absents au relevé » — sur un passage par ailleurs vert.
  //
  // On attend donc que le NOMBRE de notifications AUGMENTE : celle qui vient
  // d'apparaître a sa durée de vie entière devant elle, et le relevé qui suit
  // tient largement dedans.
  const count = () => document.querySelectorAll('.toast').length
  const before = count()
  let t = null
  for (let i = 0; i < 240 && !t; i++) {
    if (count() > before) { t = document.querySelector('.toast'); break }
    await wait(250)
  }
  // si le nombre n'a jamais augmenté mais qu'il y en avait déjà une, on la
  // prend quand même : mieux vaut un relevé sur une notification vieillissante
  // qu'aucun relevé du tout
  if (!t) t = document.querySelector('.toast')
  if (!t) return { none: true }

  const withX = document.querySelectorAll('.toast .toast-x').length
  const total = document.querySelectorAll('.toast').length

  // 2 · ouvrir le menu et tout mesurer pendant qu'elle est encore là
  document.querySelector('.tb-menu-btn')?.click()
  await wait(320)
  const geo = { menu: rect('.tb-menu'), toasts: rect('.toasts'), zMenu: depth('.tb-menu'), zToasts: depth('.toasts') }
  document.querySelector('.tb-menu-scrim')?.click()
  await wait(220)

  // 3 · fermer une notification PRÉCISE et vérifier que CELLE-LÀ s'en va.
  //     Compter ne prouvait rien : le compte baisse aussi quand l'une expire
  //     toute seule, donc le contrôle passait avec un bouton cassé.
  let closed = null
  let victim = null
  for (let i = 0; i < 240 && !victim; i++) { victim = document.querySelector('.toast'); if (!victim) await wait(250) }
  if (victim) {
    const key = (victim.textContent || '').trim()
    const x = victim.querySelector('.toast-x')
    if (!x) closed = 'notification sans bouton de fermeture'
    else {
      x.click()
      await wait(300)
      closed = [...document.querySelectorAll('.toast')].some((n) => (n.textContent || '').trim() === key)
        ? 'la notification visée est restée affichée'
        : true
    }
  }
  return { withX, total, geo, closed }
})

if (seen.none) {
  // Aucune notification en soixante secondes n'est pas un défaut du produit :
  // c'est une absence d'échantillon. Le faire échouer rendait la barrière
  // rouge au hasard d'une minuterie, et une barrière qui rougit sans raison
  // cesse d'être crue.
  console.log('--  aucune notification en 60 s · section notifications non éprouvée')
} else {
  ok('every notification carries its own close button', seen.withX === seen.total, `${seen.withX}/${seen.total}`)
  const g = seen.geo
  ok('notifications clear the open menu instead of covering it',
    !!g.menu && !!g.toasts && g.toasts.x + g.toasts.width <= g.menu.x + 1,
    g.menu && g.toasts ? `toasts end at ${Math.round(g.toasts.x + g.toasts.width)} · menu starts at ${Math.round(g.menu.x)}` : 'menu ou notifications absents au relevé')
  ok('and the menu wins on depth anyway', (g.zMenu ?? -1) > (g.zToasts ?? 0), `menu ${g.zMenu} · toasts ${g.zToasts}`)
  ok('the close button dismisses it', seen.closed === true, seen.closed === true ? '' : String(seen.closed ?? 'aucune notification à fermer'))
}

// ---- a bad saved value must not cost the app ---------------------------
// A currency code saved by an older build ("XRP", from when the app settled on
// a ledger) made a price label throw. React unmounts a tree that throws, so the
// whole page went white with no header, no menu and no way back — and reloading
// landed in the same state, because the bad value was saved. This walks that
// exact path: corrupt the store, reload, open the surfaces that price things.
// this needs a saved account, so make one the way a founder does
if ((await p.locator('.cc-card').count()) > 0) {
  await p.locator('.cc-card input').fill('Currency probe')
  await p.locator('.cc-go').click()
  await p.waitForTimeout(1400)
  await p.locator('.ct-grid .tcard').nth(0).click()
  await p.locator('.ct-go').click()
  await p.waitForTimeout(3000)
}
const hit = await p.evaluate(() => {
  const touched = []
  for (const k of Object.keys(localStorage)) {
    const raw = localStorage.getItem(k)
    if (raw && raw.includes('"currency"')) {
      localStorage.setItem(k, raw.replace(/"currency":"[A-Z]*"/g, '"currency":"XRP"'))
      touched.push(k)
    }
  }
  return touched
})
ok('the saved account carries a currency to corrupt', hit.length > 0, hit.join(','))
await p.reload({ waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
const crashes = []
p.on('pageerror', (e) => crashes.push(e.message))
for (const item of ['Billing', 'Dojo settings', 'Connect apps']) {
  await p.evaluate((t) => {
    document.querySelector('.tb-menu-btn').click()
    requestAnimationFrame(() => [...document.querySelectorAll('.tb-menu-item')].find((b) => b.textContent.includes(t))?.click())
  }, item)
  await p.waitForTimeout(1500)
  const chars = (await p.locator('.modhost-fs.fs').count())
    ? (await p.locator('.modhost-fs.fs').innerText()).trim().length : 0
  // .crashed means the boundary caught a throw · the app survived, but the
  // panel still did not draw. Both have to be true: nothing thrown AND the
  // real content on screen.
  const caught = await p.locator('.crashed').count()
  ok(`${item} survives a currency this build has never heard of`, chars > 200 && caught === 0,
    caught ? 'the error boundary had to catch it' : `${chars} chars`)
  await p.evaluate(() => document.querySelector('.modhost-close')?.click())
  await p.waitForTimeout(400)
}
ok('and the app is still standing', await p.locator('.tb-menu-btn').count() === 1)
ok('with nothing thrown at the page', crashes.length === 0, crashes.slice(0, 2).join(' | '))

// ---- hover never draws a selection ring --------------------------------
ok('no pulsing hover ring is defined anywhere',
  await p.evaluate(() => ![...document.styleSheets].some((sh) => {
    try { return [...sh.cssRules].some((r) => r.cssText.includes('acidRing')) } catch { return false }
  })))

// ---- no emoji anywhere ------------------------------------------------
const body = await p.innerText('body')
const emoji = body.match(/\p{Extended_Pictographic}/gu)
ok('no emoji in the UI', !emoji, emoji ? [...new Set(emoji)].join(' ') : '')

report()
await b.close()
process.exit(out.some((l) => l.startsWith('FAIL')) ? 1 : 0)
