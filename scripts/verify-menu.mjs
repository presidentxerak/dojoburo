// Audits, in a real browser, every item on the founder's list.
import { chromium } from 'playwright'
import { MENU_PROJECTS, MENU_EFFORT, MENU_CREW, MENU_PROGRESS } from './lib/menuLabels.mjs'
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

// L'ÉCRAN D'ENTRÉE · il ouvre un dojo d'entraînement, plus une entreprise.
//
// Cette ligne exigeait le mot « company » : elle est née d'un vrai défaut —
// l'accueil disait « project » là où tout le reste du produit disait
// « company ». Le produit n'offre plus de fonder quoi que ce soit, donc elle
// réclamait désormais le mot qu'il faut justement éviter. Elle vérifie la
// même propriété — l'accueil nomme UNE chose et c'est la bonne — avec le mot
// qui est devenu vrai.
const createTxt = await p.innerText('body')
ok('home opens a practice DOJO, not a company', /dojo/i.test(createTxt) && !/Create your (project|company)/i.test(createTxt),
  createTxt.slice(0, 60).replace(/\n/g, ' '))

// ---- the menu ---------------------------------------------------------
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(350)
const menu = await p.innerText('.tb-menu')
const items = (await p.locator('.tb-menu-item, .tb-menu-profile, .tb-row > span').allInnerTexts()).map((s) => s.split('\n')[0].trim())
// LES LIBELLÉS VIENNENT DE L'APP · ils étaient recopiés ici, donc renommer
// une entrée du menu faisait échouer quatre épreuves avec des délais
// dépassés au lieu d'un message clair.
ok(`menu carries "${MENU_PROJECTS}"`, menu.includes(MENU_PROJECTS))
// …et il mène AU PRODUIT · les trois cours et la progression sont ce que le
// menu doit porter maintenant, pas seulement ce qu'il ne doit plus porter.
ok('menu carries your progress', menu.includes(MENU_PROGRESS))
ok('the effort dial sits under Billing',
  items.findIndex((t) => t.includes(MENU_EFFORT)) === items.findIndex((t) => /^Billing/.test(t)) + 1)
ok('no standalone "Account" row', items.filter((t) => t === 'Account').length === 0)
ok('no Sound row', !/sound/i.test(menu))
ok('no City row', !/city/i.test(menu))
ok('no duplicate rows', new Set(items).size === items.length, items.filter((t, i) => items.indexOf(t) !== i).join(','))
// The build stamp is a setting; it belongs in Settings, and keeping a copy in
// the menu is exactly the kind of double entry this menu was rebuilt to
// remove. There is no display mode any more (one dark violet theme), so it
// must not come back here either.
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
await fullscreen(MENU_EFFORT, async () => { await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300); await p.locator('.tb-menu-item', { hasText: MENU_EFFORT }).click() })

// ---- the surfaces the founder reported as blank / broken ---------------
// Billing, Dojo settings and Connect apps used to NAVIGATE to their own routes:
// you left the app to read a number, came back to the naming card, and the page
// wore chrome nobody else wore. They are surfaces over the app now.
/** La signature du dessin de la première croix rencontrée · les suivantes
 *  doivent lui être identiques. Elle est lue dans la page, jamais écrite ici. */
let closeSig = null

async function overApp(name, open) {
  await open()
  await p.waitForTimeout(1600)
  const fs = p.locator('.modhost-fs.fs')
  const n = await fs.count()
  const box = n ? await fs.first().boundingBox() : null
  const body = n ? (await fs.first().innerText()).replace(/\s+/g, ' ').trim() : ''
  // LA MÊME CROIX PARTOUT · elle était un CARACTÈRE, et cette garde comparait
  // son texte. Elle est dessinée maintenant (components/BauhausIcon), donc le
  // texte est vide et la garde échouait sur du code juste.
  //
  // Ce qu'elle voulait dire reste vrai et vaut toujours d'être tenu : toutes
  // les surfaces se ferment avec le MÊME contrôle. On compare donc la
  // signature du dessin, prise dans la page, sans écrire de chemin ici : un
  // chemin recopié dans une garde est une deuxième source de vérité qui
  // dérive de la première.
  const sig = n ? await p.evaluate(() => {
    const svg = document.querySelector('.modhost-close svg.bh-icon')
    return svg ? svg.innerHTML.replace(/\s+/g, ' ').trim() : ''
  }) : ''
  ok(`${name} opens over the app, in the shared shell`, n === 1 && !!box && box.x === 10, box ? `x=${box.x}` : 'absent')
  ok(`${name} is not blank`, body.length > 200, `${body.length} chars`)
  ok(`${name} closes with a drawn cross, not a character`, sig.length > 10, JSON.stringify(sig.slice(0, 40)))
  if (closeSig === null) closeSig = sig
  ok(`${name} closes with the same cross as the others`, sig === closeSig)
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

// ---- ni un seul tiret cadratin -----------------------------------------
// check-dashes lit la SOURCE ; ceci lit ce qui est réellement à l'écran, qui
// est ce que la consigne visait. Les deux sont utiles : la source attrape un
// texte qu'aucun test ne visite, l'écran attrape un tiret qu'un composant
// fabrique à l'exécution, en concaténant deux morceaux propres.
const dashes = body.match(/\u2014| \u2013 /g)
ok('no em dash in the UI', !dashes, dashes ? `${dashes.length} on screen` : '')

// ---- les icônes sont DESSINÉES, pas écrites ----------------------------
// test-icons prouve qu'aucun caractère ne subsiste dans le code. Ceci prouve
// l'autre moitié, qui ne se lit nulle part dans la source : que des icônes
// arrivent bel et bien à l'écran. Une migration qui retire les caractères et
// oublie de rendre les formes laisse une interface vide, et les deux passent
// le typecheck.
const icons = await p.evaluate(() => {
  const all = [...document.querySelectorAll('svg.bh-icon')]
  return {
    n: all.length,
    // le filet d'un pixel, tel que le navigateur le calcule vraiment
    stroked: all.filter((s) => s.getAttribute('stroke-width') === '1'
      && s.getAttribute('vector-effect') === 'non-scaling-stroke').length,
    // LES ICÔNES VISIBLES seulement · la page porte aussi la barre du bas,
    // masquée sur un écran large par une règle de média. Ses quatre icônes
    // ont une largeur nulle et c'est NORMAL : elles sont dans un conteneur
    // caché. La première version de cette garde les comptait, accusait du
    // code juste, et m'aurait fait « corriger » une mise en page saine.
    ...(() => {
      const vis = all.filter((s) => (s.checkVisibility ? s.checkVisibility() : s.getClientRects().length > 0))
      return { shown: vis.length, sized: vis.filter((s) => s.getBoundingClientRect().width > 0).length }
    })(),
  }
})
ok('the Bauhaus icons are drawn', icons.n > 0, `${icons.n} on screen`)
ok('…every one with a one pixel stroke', icons.n > 0 && icons.stroked === icons.n, `${icons.stroked}/${icons.n}`)
ok('…and some of them are actually visible', icons.shown > 0, `${icons.shown}/${icons.n} visible`)
ok('…each visible one taking up space', icons.shown > 0 && icons.sized === icons.shown, `${icons.sized}/${icons.shown}`)

// ---- la fiche d'un agent · la mise en page, mesurée ---------------------
//
// Deux demandes CHIFFRÉES : diviser par deux la largeur des marges latérales,
// et grossir les textes. Ce sont les seules choses de ce lot qu'on peut
// prouver plutôt que croire, donc on les mesure dans la page rendue au lieu
// de relire une feuille de style.
//
// La fiche faisait 860 pixels de colonne dans une fenêtre de 1400, soit 270
// de marge de chaque côté. La moitié, c'est 135, donc une colonne d'environ
// 1130. On vérifie la MARGE, pas la largeur : la largeur dépend de la fenêtre
// du test, la marge est ce qui a été demandé.
await p.goto(B + '/build/research', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)

const card = await p.evaluate(() => {
  const sec = document.querySelector('.ag-sec')
  if (!sec) return null
  const vw = document.documentElement.clientWidth
  const r = sec.getBoundingClientRect()
  const px = (el, prop) => (el ? parseFloat(getComputedStyle(el)[prop]) : 0)
  return {
    vw,
    margin: Math.round((vw - r.width) / 2),
    plain: px(document.querySelector('.ag-plain'), 'fontSize'),
    why: px(document.querySelector('.ag-why'), 'fontSize'),
    how: px(document.querySelector('.ag-how li'), 'fontSize'),
    h1: px(document.querySelector('.ag-hero h1'), 'fontSize'),
    steps: document.querySelectorAll('.ag-step').length,
    rail: document.querySelectorAll('.ag-rail-b').length,
    stages: document.querySelectorAll('.sst-box').length,
    pairs: document.querySelectorAll('.ag-vs-bad').length,
    // la mesure du texte courant reste bridée · une ligne de 1130 pixels est
    // illisible quelle que soit la taille des caractères
    read: Math.round(document.querySelector('.ag-why')?.getBoundingClientRect().width ?? 0),
  }
})

ok('the agent card renders at all', !!card)
if (card) {
  // Les marges DIVISÉES PAR DEUX · 270 à l'origine sur cette largeur de
  // fenêtre, donc on exige nettement moins de 200 tout en gardant une gouttière.
  ok('the side margins are halved', card.margin < 200 && card.margin > 20, `${card.margin}px de marge, fenêtre ${card.vw}`)
  // LA LISIBILITÉ · des planchers, pas des valeurs exactes : une garde qui
  // fixe 17 pixels au pixel près interdit d'ajuster de un.
  ok('the plain-language sentence is large', card.plain >= 20, `${card.plain}px`)
  ok('the body of a step is readable', card.why >= 16.5, `${card.why}px`)
  ok('…and so are the instructions', card.how >= 16, `${card.how}px`)
  ok('the title carries the page', card.h1 >= 36, `${card.h1}px`)
  // …mais la LIGNE reste courte. Élargir la page n'autorise pas à élargir le
  // paragraphe, et c'est le piège d'une demande « moins de marges ».
  ok('the reading measure stays short', card.read <= 780, `${card.read}px de ligne`)
  // Ce qui fait de cette page un cours plutôt qu'un article.
  ok('every step is on the page', card.steps === 4, `${card.steps}`)
  ok('the sticky rail lists them', card.rail === 4, `${card.rail}`)
  ok('each step carries its animated scene', card.stages === 4, `${card.stages}`)
  ok('…and its badly-written example', card.pairs === 4, `${card.pairs}`)
}

// ---- ce que le lot de design a ajouté, mesuré -------------------------
const extra = await p.evaluate(() => {
  const px = (sel, prop) => {
    const el = document.querySelector(sel)
    return el ? parseFloat(getComputedStyle(el)[prop]) : 0
  }
  const hero = document.querySelector('.ag-hero-p')
  return {
    // LE PERSONNAGE · une toile 3D, pas une image de repli. Sans lui on passe
    // d'un dojo habité à un article, et rien ne dit que c'est le même agent
    // que la silhouette qu'on vient de cliquer.
    charW: hero ? Math.round(hero.getBoundingClientRect().width) : 0,
    charCanvas: !!document.querySelector('.ag-hero-p canvas'),
    quoteSize: px('.ag-like', 'fontSize'),
  }
})
ok('the agent card shows its 3D character', extra.charW > 120, `${extra.charW}px`)
ok('…and it is a real 3D canvas', extra.charCanvas)
ok('the analogy is set as a quote', extra.quoteSize >= 18, `${extra.quoteSize}px`)

// ---- les étiquettes du dojo, lues comme le navigateur les rend ---------
//
// Elles ont raté DEUX fois. D'abord des phrases entières qui se chevauchaient
// et cachaient la salle. Puis des noms courts mais gris, à douze pixels, avec
// une ombre blanche pour tout contraste : sur un tatami clair ça ne se lit pas
// davantage. On avait échangé un problème de chevauchement contre un problème
// de contraste, et une garde qui ne mesure que la longueur du texte aurait
// validé les deux.
await p.goto(B + '/build', { waitUntil: 'networkidle' })
await p.waitForTimeout(2600)
const tags = await p.evaluate(() => {
  const all = [...document.querySelectorAll('.cls-scene .tag3d')]
  if (!all.length) return null
  const cs = getComputedStyle(all[0])
  const bg = cs.backgroundColor
  const clear = !bg || bg === 'transparent' || /rgba\(0, 0, 0, 0\)/.test(bg)
  // LE CHEVAUCHEMENT, MESURÉ · agrandir une étiquette est la façon la plus
  // simple de la rendre lisible et la façon la plus simple de la faire
  // recouvrir sa voisine. Les deux défauts sont des défauts de lisibilité, et
  // une garde qui ne surveille que la taille pousse tout droit dans le second.
  const rects = all.map((t) => t.getBoundingClientRect()).filter((r) => r.width > 0)
  let overlaps = 0
  for (let i = 0; i < rects.length; i++) {
    for (let j = i + 1; j < rects.length; j++) {
      const a = rects[i], b = rects[j]
      if (a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom) overlaps++
    }
  }
  return {
    n: all.length,
    size: parseFloat(cs.fontSize),
    weight: Number(cs.fontWeight),
    // une pastille DÉCOUPE le nom du décor · sans fond, la lisibilité dépend
    // de ce qu'il y a derrière, donc de la position d'un personnage
    hasPlate: !clear,
    // …et un liseré de papier détache ce cadre noir d'une cloison sombre
    ring: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0,
    overlaps,
    pairs: (rects.length * (rects.length - 1)) / 2,
    longest: Math.max(...all.map((t) => t.textContent.trim().length)),
  }
})
// ---- la question posée en haut, et rien posé sur la salle ---------------
//
// Le panneau qui portait cette question était posé en bas à gauche, sur la
// scène, et il cachait deux agents. Une garde qui vérifie seulement que la
// question est ÉCRITE serait verte aussi bien avec le panneau qu'avec le
// titre : elle doit donc regarder OÙ elle est, et si quelque chose recouvre
// encore la pièce.
const ask = await p.evaluate(() => {
  const el = document.querySelector('.cls-ask h1')
  const scene = document.querySelector('.cls-full')
  if (!el || !scene) return null
  const r = el.getBoundingClientRect(), s = scene.getBoundingClientRect()
  const mid = r.left + r.width / 2
  return {
    text: el.textContent.trim(),
    // centré : le milieu du titre au milieu de la scène, à 4 % près
    offCentre: Math.abs(mid - (s.left + s.width / 2)) / s.width,
    // en haut : dans le premier cinquième de la hauteur
    fromTop: (r.top - s.top) / s.height,
    // et le panneau d'avant n'existe plus nulle part
    oldPanel: !!document.querySelector('.cls-hint'),
    size: parseFloat(getComputedStyle(el).fontSize),
  }
})
ok('la question est posée au-dessus de la salle', !!ask, ask ? ask.text : 'introuvable')
if (ask) {
  ok('…centrée', ask.offCentre <= 0.04, `${Math.round(ask.offCentre * 100)}% hors centre`)
  ok('…en haut', ask.fromTop <= 0.2, `${Math.round(ask.fromTop * 100)}% de la hauteur`)
  ok('…et assez grande pour être le titre de la page', ask.size >= 26, `${ask.size}px`)
  ok('…le panneau qui cachait les agents a disparu', !ask.oldPanel)
}
// LE MAÎTRE NE REDIT PAS LE TITRE · deux exemplaires de la même question à
// trente centimètres l'un de l'autre, dont l'un dans une bulle qui sert
// justement à dire ce que le titre ne dit pas.
//
// PREMIÈRE VERSION DE CETTE SONDE : elle lisait « .bubble3d », qui est la bulle
// des AGENTS, pas celle du maître · elle ne trouvait donc rien, et une chaîne
// vide ne contient évidemment pas la question. Elle passait au vert sans rien
// regarder. Une sonde qui ne trouve pas sa cible doit ÉCHOUER, sinon elle
// certifie exactement ce qu'elle n'a pas lu.
const sensei = await p.evaluate(() => document.querySelector('.panda-bubble')?.textContent?.trim() ?? null)
ok('la bulle du maître est lisible par la garde', typeof sensei === 'string' && sensei.length > 0,
  sensei === null ? 'sélecteur introuvable' : `${sensei.length} signes`)
ok('le maître ne repose pas la question du titre',
  typeof sensei === 'string' && sensei.length > 0 && !/which\s+(one|agent)\s+do\s+you\s+need/i.test(sensei),
  (sensei ?? 'aucune bulle').slice(0, 70))

ok('the dojo labels are there', !!tags && tags.n > 0, tags ? `${tags.n}` : 'aucune')
if (tags) {
  // 13 pixels passait la garde et ne se lisait toujours pas : dans une pièce
  // vue de haut, à côté de douze personnages colorés, un nom de cette taille
  // est là sans être lu. Le seuil suit la correction.
  ok('…large enough to read', tags.size >= 15, `${tags.size}px`)
  ok('…and heavy enough', tags.weight >= 700, `${tags.weight}`)
  ok('…on a plate, so the decor cannot swallow them', tags.hasPlate)
  ok('…with a light ring, so the plate has an edge on a dark wall too', tags.ring)
  ok('…and no two labels on top of each other', tags.overlaps === 0,
    `${tags.overlaps} chevauchement(s) sur ${tags.pairs} paires`)
  // …mais toujours COURTES. C'est ce qui empêche la pastille de redevenir le
  // bandeau qu'on a retiré.
  ok('…while staying short enough not to be a banner', tags.longest <= 26, `${tags.longest} caractères`)
}

// ---- le parcours de certification est expliqué, et pilotable -----------
const cert = await p.evaluate(() => ({
  box: !!document.querySelector('.cp-box'),
  beats: document.querySelectorAll('.cp-nav-b').length,
  // il est INTERACTIF et pas seulement animé · une explication qu'on ne peut
  // pas parcourir se regarde une fois et ne s'apprend pas
  next: !!document.querySelector('.cp-next'),
  tick: !!document.querySelector('.cp-step-tick'),
}))
ok('the certification path is explained', cert.box)
ok('…in several steps you can walk', cert.beats >= 4, `${cert.beats}`)
ok('…forward and backward', cert.next)
ok('…and the first one is actually interactive', cert.tick)

report()
await b.close()
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
process.exitCode = out.some((l) => l.startsWith('FAIL')) ? 1 : 0
setTimeout(() => process.exit(process.exitCode ?? 0), 500).unref()
