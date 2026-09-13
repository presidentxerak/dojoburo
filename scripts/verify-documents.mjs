// L'écran Documents, dans un vrai navigateur.
//
// Ce qui se vérifie ici ne se relit pas dans le code : que l'écran s'ouvre
// depuis le menu, qu'il dise franchement ce qu'il ne peut pas faire quand il
// n'y a pas de base, et surtout qu'il affiche la provenance — d'où part le
// document, où part la question. C'est la seule information de cet écran qu'un
// concurrent généraliste ne peut pas afficher, et donc celle qui ne doit
// jamais disparaître sous une refonte.
//
//   npm run preview   puis   node scripts/verify-documents.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const p = await b.newPage({ viewport: { width: 1360, height: 900 } })
await p.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })

const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

// ---- la route propre ------------------------------------------------------
await p.goto(`${B}/#documents`, { waitUntil: 'networkidle' })
await p.waitForSelector('.docs-body', { timeout: 15000 })
ok('la route #documents ouvre l’écran', (await p.locator('.docs-body').count()) === 1)

const tags = (await p.locator('.docs-tag').allInnerTexts()).map((s) => s.trim())
ok('la provenance est affichée en haut', tags.length === 3, tags.join(' | '))
ok('elle dit où le document est analysé', tags.some((t) => /ne sort pas/i.test(t)))
ok('elle dit la résidence des données', tags.some((t) => /Résidence/i.test(t)))
ok('sans fournisseur, elle annonce du lexical et non une recherche magique',
  tags.some((t) => /lexical/i.test(t)),
  'un écran qui promet du sémantique sans clé ferait diagnostiquer un mauvais résultat')

// Sans DATABASE_URL en préproduction, l'écran doit le dire — pas afficher une
// liste vide, qui se lirait comme « vos documents ont disparu ».
const body = await p.innerText('.docs-body')
const noBackend = /base configurée|db\/rag\.sql/i.test(body)
ok('sans base, l’écran le dit au lieu de montrer une liste vide', noBackend,
  noBackend ? 'et il nomme le fichier à appliquer' : body.slice(0, 120))

// ---- le chemin de sortie --------------------------------------------------
ok('l’écran porte le bouton de fermeture commun', (await p.locator('.modhost-bar').count()) === 1)
await p.keyboard.press('Escape')
await p.waitForTimeout(400)
const afterEsc = await p.evaluate(() => location.hash)
ok('Échap ramène dans l’app et non à la porte d’entrée', afterEsc === '#app', afterEsc || '(vide)')

// ---- l'entrée depuis le menu ---------------------------------------------
await p.evaluate(() => { try { sessionStorage.setItem('dojoburo.nav', '') } catch { /* ignore */ } })
await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
await p.locator('.tb-menu-btn').click()
await p.waitForTimeout(350)
const menu = await p.innerText('.tb-menu')
ok('le menu porte « Documents »', /Documents/.test(menu))

await p.locator('.tb-menu-item', { hasText: /^Documents$/ }).first().click()
await p.waitForSelector('.docs-body', { timeout: 10000 })
ok('et il ouvre l’écran par-dessus l’app', (await p.locator('.docs-body').count()) === 1)
ok('une seule surface à la fois', (await p.locator('.connect-body').count()) === 0,
  'deux panneaux empilés laisseraient l’un d’eux inaccessible')

await b.close()
console.log(out.join('\n'))
const failed = out.filter((l) => l.startsWith('FAIL')).length
console.log(failed ? `\n${failed} FAILED` : '\nALL GREEN')
process.exit(failed ? 1 : 0)
