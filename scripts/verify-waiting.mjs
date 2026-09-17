// Ce qu'un écran dit quand il n'a rien à montrer, et quand il fait attendre.
//
// Trois endroits où l'app affichait un vide sans dire ce qui le remplit :
//
//   · la page d'un coéquipier qui n'a encore rien produit disait « Nothing yet » ;
//   · sa carte dans le graphe affichait « 0 results » et une jauge à zéro, ce
//     qui se lit comme un reproche plutôt que comme une invitation ;
//   · un run en cours disait « Working… », sans horloge, pendant trente à
//     soixante secondes — assez longtemps pour qu'on se demande si c'est figé.
//
// Et une quatrième chose, qui n'est pas un état d'attente mais la même
// exigence : la clé personnelle est maintenant ÉPROUVÉE chez Anthropic avant
// d'être gardée, et l'écran distingue « acceptée », « refusée » et « pas pu être
// jointe ». Les deux dernières se ressemblent et n'appellent pas la même
// conduite ; les confondre est exactement ce qui rendait le message inutile.
//
// Ce qui compte ici est que rien ne PRÉTENDE : le compteur de secondes est vrai
// parce qu'on l'observe, la séquence « rédige puis se relit » est vraie parce
// que c'est le pipeline, et la position dans cette séquence n'est jamais
// affirmée parce qu'on ne l'observe pas.
//
//   npm run preview   puis   node scripts/verify-waiting.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

const SAVED = {
  account: { id: 'guest_wait', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_w', name: 'Acme', createdAt: 1 }],
  activeCompanyId: 'c_w',
  dojos: [{
    id: 'd_w', name: 'Campagne', companyId: 'c_w', template: 'startup', archetype: 'startup', goal: '',
    agents: [
      { id: 'w1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 'w2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
    ],
  }],
  activeDojoId: 'd_w',
  projectName: 'Acme',
}

const ctx = await b.newContext({ viewport: { width: 1400, height: 1100 } })
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

await p.route('**/api/connect?action=list*', (r) => r.fulfill({
  status: 200, contentType: 'application/json',
  body: JSON.stringify({ ok: true, backend: true, byok: { connected: false, hint: null }, tools: [] }),
}))

// Un run qui ne répond JAMAIS · c'est la seule façon de regarder l'état
// d'attente assez longtemps pour vérifier qu'il bouge.
let hold = true
await p.route('**/api/agent-run*', async (r) => {
  while (hold) await new Promise((res) => setTimeout(res, 200))
  await r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: false, error: 'failed' }) })
})

// Le brouillon local rendu par un run raté s'ouvre par-dessus tout · sans le
// fermer, aucun clic ne porte. Borné : une boucle qui attend une fermeture qui
// ne vient pas fait passer une épreuve pour une panne.
async function dismiss() {
  // Et toute surface plein écran encore ouverte (le graphe, par exemple) ·
  // elles se ferment par leur propre croix.
  for (let i = 0; i < 3 && (await p.locator('.modhost-close').count()); i++) {
    await p.locator('.modhost-close').first().click().catch(() => {})
    await p.waitForTimeout(400)
  }
  for (let i = 0; i < 5 && (await p.locator('.dlv-overlay').count()); i++) {
    // Le voile se ferme au clic sur lui-même, pas à Échap · on clique donc
    // dans son coin, loin de la feuille qu'il porte.
    await p.locator('.dlv-overlay').first().click({ position: { x: 4, y: 4 } }).catch(() => {})
    await p.waitForTimeout(400)
  }
}

async function openAgent(name) {
  await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  await p.evaluate(() => window.dispatchEvent(new Event('open-cmdk')))
  await p.waitForTimeout(600)
  const i = p.locator('.cmdk-input')
  if (!(await i.count())) return false
  await i.fill(name)
  await p.waitForTimeout(600)
  await p.keyboard.press('Enter')
  await p.waitForTimeout(2000)
  return (await p.locator('.agw').count()) > 0
}

/* ---- 1 · la page d'un coéquipier qui n'a rien produit -------------------- */
if (await openAgent('Scout')) {
  const empty = (await p.locator('.agw-empty').innerText().catch(() => '')).replace(/\n/g, ' ')
  ok('un coéquipier sans travail ne dit plus « rien »', !/^Nothing yet\./.test(empty), empty.slice(0, 60))
  ok('il nomme la première chose à lui demander', /where most people start/.test(empty),
    'un vide qui ne dit pas ce qui le remplit ne sert personne')
  ok('et dit combien de temps cela prend', /half a minute/.test(empty))
  ok('et ce que l’agent fait de son propre travail', /checks their own work/.test(empty),
    'la relecture est réelle · c’est ce que fait agent-run, pas une promesse')

  /* ---- 2 · ce que rend un run, maintenant que le dojo n'exécute plus ----
     L'ÉCRAN D'ATTENTE A DISPARU, et c'est une conséquence, pas un oubli.

     Ces quatre vérifications exigeaient une horloge qui avance, une phrase
     qui dit ce qui se passe pendant ce temps, et un compteur qui repart de
     zéro. Toutes protégeaient la même chose : rassurer quelqu'un qui attend
     trente secondes qu'un modèle réponde. Le dojo est devenu un bac à sable,
     il ne demande plus rien à personne, et la réponse est immédiate — il n'y
     a plus d'attente à rassurer.

     Les remplacer par rien aurait laissé ce chemin sans garde du tout. Elles
     affirment donc ce qui est vrai à leur place, et c'est une garantie plus
     forte que l'ancienne : ce qui revient est la FICHE DE COÛT, elle arrive
     tout de suite, et elle dit noir sur blanc que rien n'est parti. */
  const task = p.locator('.agw-task').first()
  const label = (await task.locator('strong').innerText()).trim()
  await task.click()
  await p.waitForTimeout(2500)
  const t1 = (await p.locator('.agw-task').first().locator('strong').innerText()).trim()
  ok('un run garde le nom de ce qu’on a demandé', t1.startsWith(label.slice(0, 12)),
    `« ${t1} » · « Working… » ne disait plus à quoi on attendait`)
  ok('et il n’affiche AUCUNE horloge', !/·\s*\d+s$/.test(t1),
    `${t1} · plus rien ne s’exécute, donc il n’y a rien à attendre`)

  // Ce qui revient · la fiche, pas un faux livrable.
  const body = await p.innerText('body')
  ok('le bac à sable rend bien une fiche de coût', /What this run would have sent/i.test(body),
    body.slice(0, 0) || 'le livrable ouvert après un run')
  ok('elle dit que rien n’est parti et que rien n’est facturé',
    /nothing was sent and nothing was charged/i.test(body))
  ok('elle annonce ses chiffres comme des estimations', /estimates/i.test(body),
    'un chiffre présenté comme mesuré alors qu’il est estimé est le pire des deux')

  hold = false
  await p.waitForTimeout(1500)
  const done = (await p.locator('.agw-task').first().locator('strong').innerText()).trim()
  ok('et le nom de l’étape reste propre après coup', !/\d+s$/.test(done), done)
} else {
  ok('la page d’un coéquipier a été atteinte', false, 'impossible d’ouvrir un agent')
}

/* ---- 3 · sa carte dans le graphe ---------------------------------------- */
await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
await dismiss()
const graphBtn = p.locator('.dojo-ctl-graph').first()
if (await graphBtn.count()) {
  await graphBtn.click().catch(() => {})
  await p.waitForTimeout(1800)
}
if (await p.locator('.dg-node').count()) {
  const firsts = await p.locator('.dg-first').allInnerTexts()
  ok('une carte sans résultat propose son premier travail', firsts.length > 0,
    `${firsts.length} carte(s) · une jauge à zéro se lit comme un reproche`)
  // Le CSS met l'intitulé en capitales · on compare sans la casse.
  ok('et le nomme', firsts.some((t) => /ready · first job/i.test(t) && t.trim().split('\n').length >= 3),
    (firsts[0] || '').replace(/\n/g, ' · ').slice(0, 70))

  // L'un OU l'autre, jamais les deux : une carte qui a produit porte sa jauge,
  // une carte vierge porte son premier travail. Un coéquipier a tourné plus
  // haut dans cette épreuve, donc les deux rendus coexistent à l'écran — ce
  // qu'on vérifie est qu'aucune carte ne porte les deux.
  const both = await p.locator('.dg-node:has(.dg-first):has(.dg-bar)').count()
  ok('et remplace la jauge vide au lieu de s’ajouter à elle', both === 0,
    `${both} carte(s) portent les deux`)
  const withBar = await p.locator('.dg-node:has(.dg-bar)').count()
  ok('la carte qui a produit garde bien sa jauge', withBar > 0,
    'remplacer la jauge partout effacerait ce que la carte disait de juste')
  const stats = await p.locator('.dg-stat.wide').allInnerTexts()
  ok('« nothing yet » a disparu des compteurs', !stats.some((t) => /nothing yet/i.test(t)),
    stats.map((t) => t.replace(/\n/g, ' ')).join(' | ').slice(0, 70))
} else {
  ok('le mode graphe a été atteint', false, 'aucune carte · bouton introuvable')
}

/* ---- 4 · les trois issues d'une clé collée ------------------------------ */
// L'écran doit lire différemment selon ce qu'Anthropic a répondu. On simule les
// trois réponses du serveur, puisque c'est LUI qui éprouve la clé.
const KEY = 'sk-ant-api03-' + 'x'.repeat(40)
async function pasteKey(answer) {
  await p.route('**/api/connect?action=setkey*', (r) => r.fulfill({
    status: 200, contentType: 'application/json', body: JSON.stringify(answer),
  }))
  // `goto` sur la même adresse ne fait que changer le fragment · il faut un
  // vrai rechargement pour retrouver l'écran vierge entre deux collages.
  await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
  await p.reload({ waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  // Le run relâché plus haut a rendu un brouillon local, qui s'ouvre par-dessus
  // tout · sans le fermer, aucun clic ne porte.
  await dismiss()
  // Par le chemin qu'emprunte un lecteur · le menu, puis « Billing ».
  const menu = p.locator('.tb-menu-btn')
  if (!(await menu.count())) return null
  await menu.click(); await p.waitForTimeout(400)
  const item = p.locator('.tb-menu-item', { hasText: /^Billing/ })
  if (!(await item.count())) return null
  await item.first().click()
  await p.waitForTimeout(1500)
  if (!(await p.locator('.ws-keypanel input').count())) return null
  await p.locator('.ws-keypanel input').fill(KEY)
  await p.locator('.ws-keypanel .ws-btn.primary').click()
  await p.waitForTimeout(1200)
  const el = p.locator('.ws-keymsg')
  if (!(await el.count())) return { cls: '', text: '' }
  return { cls: (await el.first().getAttribute('class')) || '', text: (await el.first().innerText()).replace(/\n/g, ' ') }
}

const okAns = await pasteKey({ ok: true, hint: 'sk-ant-…xxxx', connector: 'anthropic', verified: true })
if (okAns) {
  ok('une clé éprouvée et acceptée le dit', / ok\b/.test(okAns.cls) && /tested against Anthropic/.test(okAns.text),
    okAns.text.slice(0, 70))

  const warn = await pasteKey({ ok: true, hint: 'sk-ant-…xxxx', connector: 'anthropic', verified: false })
  ok('une clé gardée sans avoir pu être éprouvée le dit AUSSI',
    / warn\b/.test(warn.cls) && /could not reach Anthropic/.test(warn.text), warn.text.slice(0, 70))
  ok('et elle est bien gardée, pas refusée', !/Nothing was saved/.test(warn.text),
    'refuser une clé valide parce que le fournisseur avait le hoquet est inexplicable')

  const bad = await pasteKey({ ok: false, error: 'key_rejected', status: 401 })
  ok('une clé refusée par Anthropic se distingue des deux',
    / bad\b/.test(bad.cls) && /Anthropic refused/.test(bad.text), bad.text.slice(0, 70))
  ok('et dit que rien n’a été gardé', /Nothing was saved/.test(bad.text),
    'sans cela on repart en croyant sa clé en place')

  /* ---- 5 · la question que tout le monde se pose ici -------------------- */
  const faq = await p.locator('.ws-faq-item summary').allInnerTexts()
  // Replié, le corps d'un <details> ne figure pas dans le texte rendu · on les
  // ouvre pour lire les réponses, après avoir vérifié qu'ils sont fermés.
  const shut = await p.locator('.ws-faq-item:not([open])').count()
  ok('la page des plans répond à « clé personnelle ou Managed »', faq.length >= 3,
    faq.join(' | ').slice(0, 80))
  await p.locator('.ws-faq-item').evaluateAll((els) => els.forEach((e) => e.setAttribute('open', '')))
  await p.waitForTimeout(300)
  const body = (await p.locator('.ws-faq').innerText()).replace(/\n/g, ' ')
  ok('elle oriente celui qui n’a pas de clé vers Managed', /don’t have an Anthropic key/.test(body) && /Managed/.test(body))
  ok('et dit à l’autre ce qu’on fait de la sienne', /AES-256-GCM/.test(body),
    'la réponse existait dans un paragraphe · pas à l’endroit où la question se pose')
  ok('et elle ne rallonge pas l’écran de ceux qui ne l’ont pas', shut === faq.length,
    `${faq.length - shut} question(s) dépliée(s) d’office`)
} else {
  ok('l’écran de la clé a été atteint', false, 'panneau introuvable')
}

ok('aucune erreur JavaScript sur tout le parcours', errs.length === 0, errs.slice(0, 2).join(' | '))

await b.close()
console.log(out.join('\n'))
const failed = out.filter((l) => l.startsWith('FAIL')).length
console.log(failed ? `\n${failed} FAILED` : '\nALL GREEN')
process.exit(failed ? 1 : 0)
