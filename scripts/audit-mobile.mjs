// Ce qui casse sur un téléphone, mesuré dans le navigateur.
//
// Deux familles de défauts, et aucune ne se voit dans la feuille de style :
//
//   · un élément plus large que l'écran · centré par `margin:auto`, il déborde
//     des DEUX côtés et la moitié gauche devient inatteignable (on ne peut pas
//     faire défiler vers la gauche) ;
//   · une surface peinte en blanc en dur, sans équivalent sombre · l'en-tête
//     suit le thème, le corps non, et l'écran se lit en deux morceaux.
//
//   npm run preview   puis   node scripts/audit-mobile.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

const SAVED = {
  account: { id: 'guest_m', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
  companies: [{ id: 'c_m', name: 'My company', createdAt: 1 }],
  activeCompanyId: 'c_m',
  dojos: [{
    id: 'd_m', name: 'Social media campaign', companyId: 'c_m', template: 'startup', archetype: 'social', goal: '',
    agents: [
      { id: 'm1', name: 'Chief', fn: 'Leadership', role: 'chief', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
      { id: 'm2', name: 'Scout', fn: 'Product', role: 'scout', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
    ],
  }],
  activeDojoId: 'd_m',
  projectName: 'My company',
}

// Ce qui a le DROIT d'être clair dans le noir · une maquette de site, une
// publicité, un QR code, un aperçu de logo sont des objets blancs qu'on
// regarde, pas des surfaces de l'app.
const ALLOWED_LIGHT = /^(site-preview|site-frame|wiz-frame|lg-preview|meta-ad|xaman-qr|pm-|cs-|pd-|aw-dot|tgl)/

// Les DEUX thèmes. Le sombre est celui qui était cassé, mais tout ce qui le
// répare touche des règles que le clair utilise aussi : ne vérifier que celui
// qu'on vient de réparer, c'est échanger un défaut contre un autre.
let ctx
let p

async function open(scheme) {
  if (ctx) await ctx.close()
  ctx = await b.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2,
    isMobile: true, hasTouch: true, colorScheme: scheme,
  })
  await ctx.addInitScript((saved) => {
    try {
      localStorage.setItem('dojoburo.beta', '1974')
      localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
      localStorage.removeItem('dojoburo.theme')
    } catch { /* private */ }
  }, SAVED)
  p = await ctx.newPage()
}

// Ce qu'on regarde et comment y aller · le menu est le seul chemin fiable sur
// un écran étroit, la scène 3D n'en est pas un.
const SCREENS = [
  ['landing', async () => { await p.goto(`${B}/`, { waitUntil: 'networkidle' }); await p.waitForTimeout(2500) }],
  ['app', async () => { await p.goto(`${B}/#app`, { waitUntil: 'networkidle' }); await p.waitForTimeout(3000) }],
  ['dojo settings', () => viaMenu(/Dojo settings/)],
  ['my companies', () => viaMenu(/My companies/)],
  ['billing', () => viaMenu(/^Billing/)],
  ['connect apps', () => viaMenu(/Connect apps/)],
]

async function viaMenu(rx) {
  await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(2600)
  for (let i = 0; i < 4 && (await p.locator('.modhost-close').count()); i++) {
    await p.locator('.modhost-close').first().click().catch(() => {}); await p.waitForTimeout(300)
  }
  const m = p.locator('.tb-menu-btn')
  if (!(await m.count())) return
  await m.click().catch(() => {}); await p.waitForTimeout(500)
  const it = p.locator('.tb-menu-item', { hasText: rx })
  if (await it.count()) { await it.first().click().catch(() => {}); await p.waitForTimeout(2200) }
}

const probe = async () => p.evaluate((allowedSrc) => {
  const allowed = new RegExp(allowedSrc)
  const vw = document.documentElement.clientWidth
  const named = (el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string'
    ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '')
  const wide = []
  const light = []
  const invisible = []
  const seen = new Set()
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/)
    if (!m) return null
    return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] }
  }
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect()
    if (!r.width || !r.height) continue
    const st = getComputedStyle(el)
    if (st.visibility === 'hidden' || st.display === 'none') continue

    // plus large que l'écran, ou sorti par la gauche.
    //
    // Deux confinements, et ils ne valent pas la même chose :
    //
    //   · `auto` / `scroll` · légitime · on peut atteindre le contenu ;
    //   · `hidden` / `clip` · le contenu est DÉFINITIVEMENT inatteignable.
    //
    // Traiter les deux pareil est ce qui m'a fait rater le bouton de compte de
    // la landing : il sort de 39px, un `overflow:hidden` plus haut le coupe, et
    // « Founder » se lit « Found ». Cacher un débordement n'est pas le régler.
    //
    // Sauf un cas, et un seul : ce qui est ANIMÉ. Un bandeau défilant passe sa
    // vie hors de l'écran, c'est son fonctionnement, pas un défaut. On remonte
    // toute la chaîne parce que c'est la piste qui bouge, pas chaque puce.
    let contained = false
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      if (/auto|scroll/.test(getComputedStyle(a).overflowX)) { contained = true; break }
    }
    // « en cours », pas « déclarée ». L'animation d'entrée des pages est en
    // `fill: both` : une fois finie elle reste listée pour toujours, si bien
    // que tout élément de la page comptait comme animé — et le garde avalait
    // l'écran entier, moi compris. Une animation terminée est en `finished`.
    if (!contained) {
      for (let a = el; a && a !== document.body; a = a.parentElement) {
        const anims = a.getAnimations ? a.getAnimations() : []
        if (anims.some((an) => an.playState === 'running')) { contained = true; break }
      }
    }
    // Les DEUX bords. Ne regarder que la largeur et le bord gauche laissait
    // passer le cas le plus courant sur un téléphone : un élément qui tient
    // dans l'écran mais qui est posé trop à droite, et dont la fin est coupée.
    if (!contained && (r.width > vw + 1 || r.left < -1 || r.right > vw + 1)) {
      const k = named(el)
      if (!seen.has('w' + k)) {
        seen.add('w' + k)
        wide.push({ what: k, w: Math.round(r.width), left: Math.round(r.left), right: Math.round(r.right) })
      }
    }

    // une surface claire dans le noir · seules les grandes comptent, une
    // pastille blanche de 20px est une décoration, pas un fond d'écran
    const bg = parse(st.backgroundColor)
    if (bg && bg.a > 0.6 && bg.r + bg.g + bg.b > 690 && r.width * r.height > 40000) {
      const cls = (typeof el.className === 'string' ? el.className.trim().split(/\s+/) : [])
      if (cls.some((c) => allowed.test(c))) continue
      const k = named(el)
      if (!seen.has('l' + k)) {
        seen.add('l' + k)
        light.push({ what: k, bg: st.backgroundColor, area: Math.round(r.width * r.height / 1000) + 'k' })
      }
    }

    // ---- du texte de la couleur de son fond ---------------------------
    // Le titre de la landing était écrit « color: #000 !important » : noir sur
    // noir, donc absent de l'écran sans que rien ne soit en panne. Aucune
    // mesure de mise en page ne peut voir ça — il faut comparer les couleurs
    // telles qu'elles sont CALCULÉES, pas telles qu'elles sont écrites.
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1)
    if (!own) continue
    // Un texte creux (rempli de transparent, dessiné par son contour) se juge
    // sur son contour · sinon on le déclare invisible à tort.
    let fg = parse(st.webkitTextFillColor || st.color)
    if ((!fg || fg.a < 0.1) && parseFloat(st.webkitTextStrokeWidth || '0') > 0) {
      fg = parse(st.webkitTextStrokeColor || st.color)
    }
    if (!fg || fg.a < 0.1) continue
    // le fond effectif · le premier ancêtre qui peint vraiment quelque chose.
    //
    // Un DÉGRADÉ n'a pas de `backgroundColor` : le bouton cyan de la landing
    // rend « backgroundColor: transparent » et on lirait son texte foncé comme
    // posé sur le noir de la page — alors qu'il est sur du cyan et parfaitement
    // lisible. On ne peut pas juger ce qu'on ne sait pas mesurer, donc on ne
    // juge pas : dès qu'une image de fond est en jeu, on passe.
    let back = null
    let painted = false
    for (let a = el; a; a = a.parentElement) {
      const cs = getComputedStyle(a)
      if (cs.backgroundImage && cs.backgroundImage !== 'none') { painted = true; break }
      const c = parse(cs.backgroundColor)
      if (c && c.a > 0.5) { back = c; break }
    }
    if (painted || !back) continue
    const lum = (c) => {
      const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4) }
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b)
    }
    const l1 = lum(fg), l2 = lum(back)
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
    // 1.6 n'est pas une norme d'accessibilité · c'est le seuil en dessous
    // duquel le texte n'est plus LU du tout. On cherche l'invisible, pas le
    // perfectible : une épreuve qui se déclenche sur du travail correct est
    // désinstallée la semaine suivante.
    if (ratio < 1.6) {
      const k = named(el)
      if (!seen.has('c' + k)) {
        seen.add('c' + k)
        invisible.push({
          // la couleur RÉELLEMENT utilisée pour juger · afficher `st.color`
          // quand on a calculé sur le remplissage donne un rapport qui ne
          // correspond à aucune des deux couleurs montrées.
          what: k, fg: `rgb(${fg.r}, ${fg.g}, ${fg.b})`, bg: `rgb(${back.r}, ${back.g}, ${back.b})`,
          ratio: ratio.toFixed(2),
          text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 34),
        })
      }
    }
  }
  return {
    theme: document.documentElement.dataset.theme || '(aucun)',
    scrollW: document.documentElement.scrollWidth, vw, wide, light, invisible,
  }
}, ALLOWED_LIGHT.source)

let bad = 0
for (const scheme of ['dark', 'light']) {
  await open(scheme)
  console.log(`\n########## téléphone réglé en ${scheme} ##########`)
for (const [name, go] of SCREENS) {
  await go()
  const r = await probe()
  const over = r.scrollW > r.vw + 1
  // Le thème attendu est CLAIR quoi qu'il arrive · l'application ne suit plus
  // la préférence du système (voir store.ts · loadTheme).
  const wrongTheme = r.theme !== 'light'
  if (wrongTheme) bad++
  console.log(`\n=== ${name} · data-theme=${r.theme}${wrongTheme ? ` ← DEVRAIT ÊTRE light` : ''} · ${r.vw}px de large, ${r.scrollW}px à faire défiler${over ? '  ← DÉBORDE' : ''}`)
  if (r.wide.length) {
    bad += r.wide.length
    console.log('  hors de l’écran :')
    for (const w of r.wide.slice(0, 8)) console.log(`    ${w.what} · ${w.w}px de large, de ${w.left}px à ${w.right}px`)
  }
  // une surface claire n'est un défaut que dans le noir · en clair c'est
  // l'écran normal
  if (r.light.length && scheme === 'dark') {
    bad += r.light.length
    console.log('  surfaces claires dans le thème sombre :')
    for (const l of r.light.slice(0, 10)) console.log(`    ${l.what} · ${l.bg} · ${l.area}`)
  }
  if (r.invisible.length) {
    bad += r.invisible.length
    console.log('  texte de la couleur de son fond :')
    for (const c of r.invisible.slice(0, 12)) {
      console.log(`    ${c.what} · ${c.fg} sur ${c.bg} · contraste ${c.ratio} · « ${c.text} »`)
    }
  }
  // Imprimé dans la forme que la barrière sait compter · sans cela l'épreuve
  // passait au vert en annonçant « 0 vérification », c'est-à-dire exactement
  // l'apparence d'une épreuve creuse. Elle en faisait des centaines ; elle ne
  // les disait pas.
  if (!r.wide.length && !(r.light.length && scheme === 'dark') && !r.invisible.length) {
    console.log(`ok    ${scheme} · ${name} · rien hors écran, rien d’illisible`)
  }
}
}

await b.close()
console.log(bad ? `\n${bad} défaut(s)` : '\nRIEN À SIGNALER')
process.exit(bad ? 1 : 0)
