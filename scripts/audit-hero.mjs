// Le hero plein écran, mesuré dans le navigateur.
//
// Trois défauts que la feuille de style ne montre pas, et que j'ai tous
// produits en écrivant cette section :
//
//   · la constante --lp-nav-h ment · la barre est `position: sticky`, donc
//     elle occupe sa place dans le flux ; une section de 100svh commence
//     dessous et déborde du premier écran d'exactement sa hauteur. La carte
//     était coupée de 71 px. On compare ici la constante à la hauteur RÉELLE
//     de .lp-nav : une valeur en dur que personne ne surveille finit par
//     diverger le jour où la barre change de padding ;
//   · le titre disparaît · `.lp-hero h1` impose `-webkit-text-fill-color:
//     var(--ink) !important`, blanc en thème sombre. La carte, elle, reste
//     claire dans les deux thèmes : le titre sortait blanc sur blanc. On
//     mesure le contraste réel, en composant l'alpha sur les ancêtres ;
//   · la scène ne se voit plus · si la carte occupe tout le cadre, le dojo
//     plein écran n'existe plus. On exige qu'il en reste une part visible.
//
//   npm run preview   puis   node scripts/audit-hero.mjs
import { chromium } from 'playwright'

// La promesse du produit, LUE et non recopiée · voir le commentaire au point 7.
const { build: esb } = await import('esbuild')
const { PROMISE } = await (async () => {
  const o = await esb({ entryPoints: ['src/data/positioning.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  return import('data:text/javascript;base64,' + Buffer.from(o.outputFiles[0].text).toString('base64'))
})()

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

const VIEWS = [
  { name: 'desktop clair', vp: { width: 1440, height: 900 }, theme: 'light' },
  { name: 'desktop sombre', vp: { width: 1440, height: 900 }, theme: 'dark' },
  { name: 'mobile clair', vp: { width: 390, height: 844 }, theme: 'light' },
  { name: 'mobile sombre', vp: { width: 390, height: 844 }, theme: 'dark' },
]

const fails = []
let checks = 0
const ok = (m) => { checks++; console.log('ok  ' + m) }
const ko = (m) => { checks++; fails.push(m); console.log('KO  ' + m) }

for (const v of VIEWS) {
  const ctx = await b.newContext({ viewport: v.vp, colorScheme: v.theme, deviceScaleFactor: 1 })
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(String(e)))
  // LA BROCHURE A DÉMÉNAGÉ, ET CETTE ÉPREUVE LA SUIT.
  //
  // Elle visait la racine, parce que la racine SERVAIT la page de vente. Elle
  // sert maintenant le jeu, et la brochure vit sur /decouvrir. Pointée sur la
  // racine, l'épreuve mesurait le hero d'une page qui n'en a pas : canvas 0x0,
  // titre vide, barre introuvable · seize constats faux, tous exacts.
  //
  // ON LA REPOINTE PLUTÔT QUE DE LA RETIRER. Ce qu'elle garde reste vrai et
  // reste utile · la scène remplit son cadre, le dojo se voit au dessus de la
  // ligne de flottaison, le titre est celui qu'on a écrit. Une garde dont la
  // cible a bougé se repointe ; supprimée, elle emporte ce qu'elle tenait.
  await p.goto(B + '/decouvrir', { waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)

  const m = await p.evaluate(() => {
    // couleur effective d'un fond : on remonte les ancêtres et on compose
    // l'alpha, sinon une carte à 84 % se lit comme « transparent » et tout
    // contraste devient faux.
    const parse = (s) => {
      const n = (s || '').match(/[\d.]+/g)?.map(Number)
      return n && n.length >= 3 ? { r: n[0], g: n[1], b: n[2], a: n.length > 3 ? n[3] : 1 } : null
    }
    const bgOf = (el) => {
      let cur = el, acc = null
      while (cur) {
        const c = parse(getComputedStyle(cur).backgroundColor)
        if (c && c.a > 0) {
          acc = acc
            ? { r: acc.r + (1 - acc.a) * c.r * c.a, g: acc.g + (1 - acc.a) * c.g * c.a, b: acc.b + (1 - acc.a) * c.b * c.a, a: acc.a + (1 - acc.a) * c.a }
            : { r: c.r * c.a, g: c.g * c.a, b: c.b * c.a, a: c.a }
          if (acc.a >= 0.99) break
        }
        cur = cur.parentElement
      }
      if (!acc) return { r: 255, g: 255, b: 255 }
      // ce qui reste de transparent laisse passer du blanc de page
      const k = 1 - acc.a
      return { r: acc.r + k * 255, g: acc.g + k * 255, b: acc.b + k * 255 }
    }
    const lum = (c) => {
      const f = (x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4 }
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b)
    }
    const ratio = (a, c) => { const [x, y] = [lum(a), lum(c)].sort((u, w) => w - u); return (x + 0.05) / (y + 0.05) }

    const stage = document.querySelector('.lp-hero-stage')
    const card = document.querySelector('.lp-hero-card')
    const nav = document.querySelector('.lp-nav')
    const cv = document.querySelector('.lp-hero-scene canvas')
    const sr = stage?.getBoundingClientRect()
    const cr = card?.getBoundingClientRect()

    const texts = ['h1', '.lp-hero-sub', '.lp-hero-learn', '.lp-hero-how']
      .map((sel) => {
        const el = card?.querySelector(sel)
        if (!el) return null
        const fg = parse(getComputedStyle(el).webkitTextFillColor || getComputedStyle(el).color)
        return { sel, ratio: fg ? Math.round(ratio(fg, bgOf(el)) * 10) / 10 : 0 }
      })
      .filter(Boolean)

    return {
      navH: nav ? Math.round(nav.getBoundingClientRect().height) : null,
      navVar: Math.round(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--lp-nav-h')) || 0),
      stageTop: sr ? Math.round(sr.top) : null,
      stageBottom: sr ? Math.round(sr.bottom) : null,
      cardBottom: cr ? Math.round(cr.bottom) : null,
      cardTop: cr ? Math.round(cr.top) : null,
      cardRight: cr ? Math.round(cr.right) : null,
      cardLeft: cr ? Math.round(cr.left) : null,
      canvasH: cv ? cv.clientHeight : 0,
      canvasW: cv ? cv.clientWidth : 0,
      vh: innerHeight,
      vw: innerWidth,
      docW: document.documentElement.scrollWidth,
      texts,
      h1: card?.querySelector('h1')?.innerText || '',
    }
  })

  const tag = v.name
  if (errs.length) ko(`${tag} · erreur JS · ${errs[0].slice(0, 120)}`)
  else ok(`${tag} · aucune erreur JS`)

  // 1 · la constante de hauteur de barre dit-elle la vérité
  if (m.navH === null || m.navVar === 0) ko(`${tag} · barre ou --lp-nav-h introuvable`)
  else if (Math.abs(m.navH - m.navVar) > 4) ko(`${tag} · --lp-nav-h vaut ${m.navVar}px, la barre mesure ${m.navH}px`)
  else ok(`${tag} · --lp-nav-h ${m.navVar}px == barre ${m.navH}px`)

  // 2 · le premier écran contient tout le hero, carte comprise
  if (m.cardBottom > m.vh) ko(`${tag} · la carte dépasse le premier écran de ${m.cardBottom - m.vh}px`)
  else ok(`${tag} · carte entière dans le premier écran (bas ${m.cardBottom} <= ${m.vh})`)
  if (Math.abs(m.stageBottom - m.vh) > 6) ko(`${tag} · la scène finit à ${m.stageBottom}px pour un écran de ${m.vh}px`)
  else ok(`${tag} · la scène remplit exactement le premier écran`)

  // 3 · la scène 3D existe et occupe le cadre
  if (m.canvasH < m.vh * 0.9 || m.canvasW < m.vw * 0.9) ko(`${tag} · canvas ${m.canvasW}x${m.canvasH} pour un cadre ${m.vw}x${m.vh}`)
  else ok(`${tag} · canvas plein cadre ${m.canvasW}x${m.canvasH}`)

  // 4 · il reste du dojo à voir au-dessus de la carte
  const seen = m.cardTop - m.stageTop
  if (seen < m.vh * 0.22) ko(`${tag} · seulement ${seen}px de dojo visible au-dessus de la carte`)
  else ok(`${tag} · ${seen}px de dojo visibles au-dessus de la carte`)

  // 5 · rien ne déborde latéralement
  if (m.docW > m.vw + 1) ko(`${tag} · débordement horizontal · ${m.docW}px pour ${m.vw}px`)
  else ok(`${tag} · pas de débordement horizontal`)
  if (m.cardLeft < 0 || m.cardRight > m.vw) ko(`${tag} · la carte sort du cadre (${m.cardLeft}..${m.cardRight})`)
  else ok(`${tag} · la carte tient dans le cadre`)

  // 6 · chaque texte de la carte est lisible · 4.5 pour le corps, 3 pour le titre
  for (const t of m.texts) {
    const min = t.sel === 'h1' ? 3 : 4.5
    if (t.ratio < min) ko(`${tag} · ${t.sel} contraste ${t.ratio} < ${min}`)
    else ok(`${tag} · ${t.sel} contraste ${t.ratio}`)
  }

  // 7 · LA COPIE DEMANDÉE EST BIEN CELLE QUI S'AFFICHE.
  //
  // Cette ligne portait la promesse en dur. Le jour où la promesse a changé,
  // c'est la garde qui a échoué en réclamant l'ancienne — un garde-fou qui
  // impose une phrase périmée travaille contre le produit. Elle lit
  // maintenant src/data/positioning.ts, comme check-content : la promesse
  // vit à un endroit, et tout le monde va la chercher là.
  const want = PROMISE.replace(/\s+/g, ' ').trim()
  const got = m.h1.replace(/\s+/g, ' ').trim()
  if (got !== want) ko(`${tag} · titre inattendu · "${m.h1}" (attendu « ${want} »)`)
  else ok(`${tag} · titre exact`)

  await ctx.close()
}

await b.close()
console.log(`\n${checks} vérifications · ${fails.length} échec(s)`)
if (fails.length) { for (const f of fails) console.log('  · ' + f); process.exit(1) }
