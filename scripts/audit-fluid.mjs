// LA MISE EN PAGE EST FLUIDE, SUR TOUTES LES PAGES ET À TOUTES LES LARGEURS.
//
// POURQUOI CETTE ÉPREUVE EXISTE · l'en-tête du jeu dépassait de sept pixels à
// 320 px (logo, nom, jauge d'expérience et langue côte à côte), et toute la
// page glissait de côté sous le doigt. Aucune épreuve ne le voyait : celles du
// mobile mesurent à 390 px, la largeur d'un téléphone moyen, et le plus petit
// téléphone encore vendu en fait 320.
//
// Ce qu'elle mesure, sur chaque page publique et à cinq largeurs :
//   · le document ne défile pas en largeur (scrollWidth ≤ largeur),
//   · aucun élément visible ne sort de l'écran sans qu'un parent le coupe
//     volontairement (un carrousel qui défile dans sa boîte est légitime).
//
// Les éléments fixés à l'écran sont ignorés : ils ne font pas glisser la page.
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const ROUTES = [
  '/', '/clan', '/profil', '/carte', '/dojo/weekend', '/dojo/weekend/words', '/dojo/generaliste',
  '/decouvrir', '/terms', '/privacy', '/academy', '/build', '/frameworks', '/frugality',
  '/design', '/figma', '/guide', '/teammates', '/tarifs', '/dojoburo',
]
const WIDTHS = [320, 390, 768, 1440, 1920]

let fails = 0
const ok = (name, pass, detail = '') => {
  if (!pass) fails++
  console.log(`${pass ? 'ok  ' : 'FAIL'}  ${name}${detail ? ' · ' + detail : ''}`)
}

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

/** ce qui sort de l'écran, sans parent qui le coupe */
const measure = (vw) => {
  const out = []
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect()
    if (r.width === 0 || r.height === 0) continue
    if (r.right <= vw + 1 && r.left >= -1) continue
    if (getComputedStyle(el).position === 'fixed') continue
    let a = el.parentElement
    let clipped = false
    while (a && a !== document.body) {
      if (getComputedStyle(a).overflowX !== 'visible') { clipped = true; break }
      a = a.parentElement
    }
    if (!clipped) out.push(`${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]} ${Math.round(r.left)}..${Math.round(r.right)}`)
  }
  return { sw: document.documentElement.scrollWidth, out }
}

for (const w of WIDTHS) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 } })
  await ctx.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* privé */ } })
  const p = await ctx.newPage()
  const bad = []
  for (const r of ROUTES) {
    await p.goto(B + r, { waitUntil: 'load' })
    await p.waitForTimeout(700)
    // Une page qui se redirige (l'accès, la langue) détruit le contexte en
    // pleine mesure · on attend qu'elle se pose et on remesure une fois.
    const m = await p.evaluate(measure, w).catch(async () => {
      await p.waitForLoadState('load')
      await p.waitForTimeout(700)
      return p.evaluate(measure, w)
    })
    if (m.sw > w || m.out.length) bad.push(`${r} (${m.sw}px) ${m.out.slice(0, 2).join(' | ')}`)
  }
  ok(`aucune page ne déborde à ${w} px`, bad.length === 0, bad.slice(0, 3).join(' ; ') || `${ROUTES.length} pages`)
  await ctx.close()
}

// MORSURE · la mesure voit bien un élément qui dépasse.
{
  const ctx = await b.newContext({ viewport: { width: 320, height: 600 } })
  const p = await ctx.newPage()
  await p.setContent('<body style="margin:0"><div class="wide" style="width:340px;height:10px"></div></body>')
  const m = await p.evaluate(measure, 320)
  ok('morsure · un bloc de 340 px à 320 px serait vu', m.sw > 320 && m.out.length > 0, m.out.join(' | '))
  await ctx.close()
}

await b.close()
console.log(fails ? `\naudit-fluid · ${fails} problème(s)` : `\naudit-fluid · ${ROUTES.length} pages × ${WIDTHS.length} largeurs`)
process.exitCode = fails ? 1 : 0
