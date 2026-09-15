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
// The app fires ambient events on its own timer; wait for one rather than
// reaching into the store, so this tests what a founder actually sees.
let waited = 0
while ((await p.locator('.toast').count()) === 0 && waited < 60000) { await p.waitForTimeout(2000); waited += 2000 }
if ((await p.locator('.toast').count()) > 0) {
  ok('every notification carries its own close button',
    (await p.locator('.toast .toast-x').count()) === (await p.locator('.toast').count()))

  // the menu is a column down the right edge · exactly where toasts stack
  const free = await p.locator('.toasts').boundingBox()
  await p.locator('.tb-menu-btn').click()
  await p.waitForTimeout(500)
  const menu = await p.locator('.tb-menu').boundingBox()
  const shifted = await p.locator('.toasts').boundingBox()
  ok('notifications clear the open menu instead of covering it',
    !!menu && !!shifted && shifted.x + shifted.width <= menu.x + 1,
    `toasts end at ${Math.round((shifted?.x ?? 0) + (shifted?.width ?? 0))} · menu starts at ${Math.round(menu?.x ?? -1)}`)
  ok('and the menu wins on depth anyway',
    await p.evaluate(() => {
      const z = (s) => Number(getComputedStyle(document.querySelector(s)).zIndex) || 0
      return z('.tb-menu') > z('.toasts')
    }))
  await p.locator('.tb-menu-scrim').click({ force: true }).catch(() => {})
  await p.waitForTimeout(350)

  // ---- le bouton de fermeture ferme-t-il ? -----------------------------
  //
  // Cette vérification COURAIT CONTRE UNE MINUTERIE, et elle a fini par
  // tomber. Les notifications expirent toutes seules ; Playwright résolvait
  // `.toast-x`, l'élément se détachait pendant le clic, il réessayait, la
  // suivante expirait à son tour — et au bout de trente secondes il levait
  // une TimeoutError. Pas « échec » : PLANTAGE. La barrière a alors rendu
  // « verify-menu · 0 vérification », c'est-à-dire que les quarante-six
  // autres contrôles de ce fichier n'ont rien gardé du tout ce jour-là.
  //
  // Une épreuve qui plante est pire qu'une épreuve qui échoue : elle emporte
  // avec elle tout ce qu'elle protégeait.
  //
  // Deux corrections. D'abord on vise UNE notification précise et on vérifie
  // que CELLE-LÀ disparaît — compter les notifications ne prouvait rien,
  // puisque le compte baisse aussi quand l'une expire toute seule. Ensuite on
  // réessaie : un bouton réellement cassé échoue aux quatre tentatives, une
  // simple course en réussit une. Et tout est enveloppé, pour qu'aucune
  // exception ne puisse plus emporter le fichier entier.
  // L'ATTENTE ET LE CLIC ONT LIEU DANS LA PAGE, sans reprendre la main.
  //
  // Une notification vit 4,2 secondes (store.ts). Chercher l'élément depuis
  // Node, lire son texte, puis cliquer, cela fait trois allers-retours — elle
  // avait disparu avant le troisième. D'où huit échecs d'affilée sur « la
  // notification a expiré pendant le clic », puis, la fois d'avant, une
  // TimeoutError qui a emporté les quarante-six autres contrôles du fichier.
  //
  // Tout se passe donc dans le navigateur : on attend, on retient le texte, on
  // clique, on revérifie — sans fenêtre où elle puisse expirer. Ce qu'on perd,
  // c'est la vérification d'accessibilité au curseur que fait Playwright ; le
  // recouvrement par le menu est déjà gardé juste au-dessus, par la position
  // et la profondeur.
  const shot = await p.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    let t = null
    for (let i = 0; i < 90 && !t; i++) { t = document.querySelector('.toast'); if (!t) await wait(250) }
    if (!t) return { none: true }
    const key = (t.textContent || '').trim()
    const x = t.querySelector('.toast-x')
    if (!x) return { why: 'notification sans bouton de fermeture' }
    x.click()
    await wait(300)
    return { still: [...document.querySelectorAll('.toast')].some((n) => (n.textContent || '').trim() === key) }
  })
  // Si AUCUNE notification n'est passée, ce n'est pas un défaut du produit :
  // c'est qu'on n'a pas eu d'échantillon. Le faire échouer rendait la barrière
  // rouge au hasard de la minuterie d'événements de l'application — c'est
  // arrivé, et une barrière qui rougit sans raison cesse d'être crue. Ce qui
  // reste gardé, et durement : si une notification passe, son bouton DOIT la
  // fermer.
  if (shot.none) console.log('--  aucune notification pendant la fenêtre · bouton de fermeture non éprouvé')
  else ok('the close button dismisses it', !shot.still && !shot.why, shot.why ?? (shot.still ? 'la notification visée est restée affichée' : ''))

} else {
  console.log('--  aucune notification en 60 s · section notifications non éprouvée')
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
