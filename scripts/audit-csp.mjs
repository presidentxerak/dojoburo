// Le site servi avec SA VRAIE politique de sécurité.
//
// Aucune épreuve de ce dossier ne voyait la CSP : `vite preview` ne l'envoie
// pas, et elle vit dans `vercel.json`. Tout ce qu'elle refuse passait donc
// inaperçu jusqu'à la production — où le navigateur refuse EN SILENCE, sans
// rien casser de visible.
//
// Deux choses ont été prises comme ça, le même jour, et toutes deux écrites de
// ma main :
//
//   · le script qui pose le thème avant le premier pixel · en ligne, donc
//     refusé par `script-src 'self'` ;
//   · l'attribut `onload="this.media='all'"` du lien de police · un gestionnaire
//     en ligne, refusé pareil, et le site aurait perdu sa typographie entière.
//
// Ce fichier sert `dist/` avec l'en-tête exact de `vercel.json` et vérifie :
//
//   1 · aucune violation de CSP signalée par le navigateur ;
//   2 · le thème EST posé avant le premier pixel ;
//   3 · la police finit par s'appliquer ;
//   4 · et la page s'affiche même si la police n'arrive jamais.
//
//   npm run build   puis   node scripts/audit-csp.mjs
import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { chromium } from 'playwright'

const cfg = JSON.parse(readFileSync('vercel.json', 'utf8'))
const CSP = cfg.headers
  .flatMap((h) => h.headers || [])
  .find((h) => h.key === 'Content-Security-Policy')?.value
if (!CSP) {
  console.log('audit-csp · aucune Content-Security-Policy dans vercel.json · rien à éprouver')
  process.exit(0)
}

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.png': 'image/png',
  '.webmanifest': 'application/manifest+json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
}
const PORT = Number(process.env.CSP_PORT || 4212)
const srv = createServer((req, res) => {
  // Le repli SPA de vercel.json · une adresse sans extension rend index.html
  let p = normalize(join('dist', decodeURIComponent((req.url || '/').split('?')[0])))
  if (!p.startsWith('dist')) { res.statusCode = 403; res.end(''); return }
  if (!existsSync(p) || statSync(p).isDirectory()) {
    const idx = join(p, 'index.html')
    p = existsSync(idx) ? idx : 'dist/index.html'
  }
  try {
    const body = readFileSync(p)
    res.setHeader('content-security-policy', CSP)
    res.setHeader('content-type', TYPES[extname(p)] || 'application/octet-stream')
    res.end(body)
  } catch {
    res.statusCode = 404
    res.end('')
  }
}).listen(PORT)

const B = `http://localhost:${PORT}`
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra !== '' ? ' · ' + extra : '')); if (!c) fails++ }

/* ---- 1 · rien n'est refusé, sur aucune page -------------------------- */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: 'dark' })
  await ctx.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* privé */ } })
  const p = await ctx.newPage()
  const refus = []
  p.on('console', (m) => {
    if (/Content Security Policy|Refused to (execute|load|apply|connect|frame)/i.test(m.text())) {
      refus.push(m.text().replace(/\s+/g, ' ').slice(0, 130))
    }
  })
  for (const u of ['/', '/#app', '/academy', '/guide', '/teammates']) {
    await p.goto(B + u, { waitUntil: 'domcontentloaded' })
    await p.waitForTimeout(2500)
  }
  ok('la politique de sécurité ne refuse rien sur les cinq pages',
    refus.length === 0, refus.slice(0, 3).join(' | '))
  await ctx.close()
}

/* ---- 2 · le thème est posé AVANT le premier pixel --------------------- *
 *
 * Ce que cette épreuve garde VRAIMENT, et qu'il ne faut pas perdre de vue :
 * que `public/boot.js` s'exécute. Il est EXTERNE parce que la politique de
 * sécurité du site refuse les scripts en ligne (`script-src 'self'`) ; si
 * quelqu'un le réécrivait en ligne, il serait refusé EN SILENCE, la marque ne
 * serait jamais posée et la page basculerait en blanc à chaque chargement.
 *
 * Elle exigeait que la marque vaille le réglage du SYSTÈME. C'était le
 * comportement voulu, il ne l'est plus : l'application est claire par défaut
 * partout. Exiger l'ancien comportement ne gardait plus rien — ça empêchait
 * seulement de livrer le nouveau.
 *
 * Elle vérifie donc maintenant les deux choses qui comptent : la marque EST
 * posée (donc le script tourne), elle vaut « light » quel que soit le
 * système, ET un choix enregistré est respecté — sans quoi le thème sombre
 * mourrait sans que personne ne s'en aperçoive.                             */
for (const scheme of ['dark', 'light']) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: scheme })
  const p = await ctx.newPage()
  await p.goto(B + '/', { waitUntil: 'commit' })
  // tout de suite · c'est le sens d'un script synchrone dans le <head>
  await p.waitForTimeout(300)
  const stamp = await p.evaluate(() => document.documentElement.getAttribute('data-theme'))
  ok(`clair posé avant le rendu de React, téléphone en ${scheme}`, stamp === 'light',
    `data-theme=${stamp} · un script EN LIGNE serait refusé, et la marque ne serait jamais posée`)
  const meta = await p.evaluate(() => document.querySelector('meta[name="theme-color"]')?.getAttribute('content'))
  ok('et la barre du navigateur suit', meta === '#ffffff', String(meta))
  await ctx.close()
}
{
  // un choix ENREGISTRÉ l'emporte · sinon le thème sombre est inatteignable
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'light' })
  await ctx.addInitScript(() => { try { localStorage.setItem('dojoburo.theme', 'dark') } catch { /* privé */ } })
  const p = await ctx.newPage()
  await p.goto(B + '/', { waitUntil: 'commit' })
  await p.waitForTimeout(300)
  const stamp = await p.evaluate(() => document.documentElement.getAttribute('data-theme'))
  ok('un choix enregistré de sombre est respecté avant le premier pixel', stamp === 'dark', `data-theme=${stamp}`)
  const meta = await p.evaluate(() => document.querySelector('meta[name="theme-color"]')?.getAttribute('content'))
  ok('et la barre du navigateur devient noire', meta === '#000000', String(meta))
  await ctx.close()
}

/* ---- 3 · la police finit par s'appliquer ------------------------------ */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } })
  const p = await ctx.newPage()
  // On SERT la feuille nous-mêmes. Sinon on éprouve le réseau de la machine
  // d'essai — ici un proxy qui bloque Google — et non le code : la feuille
  // n'arrivant jamais, `media` resterait « print » à juste titre, et l'épreuve
  // accuserait le produit d'un défaut qui n'est pas le sien.
  await p.route('**fonts.googleapis.com**', (r) => r.fulfill({
    status: 200, contentType: 'text/css',
    body: '@font-face{font-family:Outfit;src:local("Arial");font-display:swap}',
  }))
  await p.goto(B + '/', { waitUntil: 'load' })
  await p.waitForTimeout(3000)
  const media = await p.evaluate(() => {
    const l = [...document.querySelectorAll('link[rel=stylesheet]')].find((x) => /fonts\.googleapis/.test(x.href))
    return l ? l.media : '(absent)'
  })
  // « print » veut dire que le gestionnaire n'a jamais tourné · la feuille reste
  // hors de l'écran et le site perd sa typographie, sans que rien ne casse.
  ok('la feuille de police est bien remise pour l’écran', media === 'all',
    `media="${media}" · « print » = le site tourne sans sa typographie`)
  await ctx.close()
}

/* ---- 4 · et la page s'affiche même si la police n'arrive jamais -------- */
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } })
  const p = await ctx.newPage()
  await p.route('**fonts.googleapis.com**', () => { /* ne répond jamais */ })
  const t0 = Date.now()
  await p.goto(B + '/', { waitUntil: 'commit' })
  await p.waitForFunction(
    () => { const r = document.getElementById('root'); return r && r.innerText.trim().length > 30 },
    { timeout: 20000 },
  ).catch(() => {})
  const vu = Date.now() - t0
  ok('la page s’affiche même si la police distante ne répond jamais', vu < 4000,
    `${vu} ms · une feuille de style tierce ne décide pas si la page se peint`)
  await ctx.close()
}

await b.close()
srv.close()
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
