// Builds dojoburo-brand-guidelines.pdf · A4 portrait.
//
// There is no rasteriser and no PDF engine on this machine, so Chromium is
// both: the document is a real HTML page, rendered once and printed to PDF at
// A4. That has a useful side effect — the component pages are not pictures of
// the components, they are the components, built from the same CSS values the
// app uses. If a value here is wrong, it looks wrong on the page.
//
// The Outfit faces are embedded as base64 so the PDF renders identically on a
// machine that has never heard of the font, and the contrast figures are
// measured rather than asserted.
//
// Run from the repo root:  node brand/make-guidelines.mjs
import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')

/* ----------------------------------------------------------------- assets */
const face = (w) =>
  `@font-face{font-family:Outfit;font-style:normal;font-weight:${w};src:url(data:font/woff2;base64,${
    readFileSync(join(HERE, 'src', `Outfit-${w}.woff2`)).toString('base64')
  }) format('woff2')}`
const FONTS = [400, 600, 800, 900].map(face).join('\n')

const svg = (n) => readFileSync(join(HERE, 'logo', n), 'utf8')
const ICON = readFileSync(join(ROOT, 'public', 'logo-icon-dojoburo.svg'), 'utf8')
const TOKENS = JSON.parse(readFileSync(join(HERE, 'tokens', 'dojoburo.tokens.json'), 'utf8'))

/* --------------------------------------------------------------- contrast */
// WCAG 2.1 relative luminance, so the figures on the colour page are measured
// and not guessed. A swatch that fails for text says so on the page.
function lum(hex) {
  const h = hex.replace('#', '')
  const ch = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2]
}
function ratio(a, b) {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}
const onWhite = (hex) => ratio(hex, '#ffffff')
// the verdict for body text at 16px, which is the app's default size
const verdict = (r) => (r >= 4.5 ? 'text ok' : r >= 3 ? 'large text only' : 'never text')

/* ------------------------------------------------------------------ pieces */
const C = {}
const flat = (obj, prefix = '') => {
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('$')) continue
    if (v && typeof v === 'object' && typeof v.$value === 'string') C[prefix + k] = v.$value
    else if (v && typeof v === 'object') flat(v, prefix + k + '.')
  }
}
flat(TOKENS.color)

function swatch(name, hex, role, against) {
  // Paper measured against paper is 1.00:1, which is true and useless. A ground
  // colour is reported against the ink that sits on it instead.
  const ground = against || '#ffffff'
  const r = ratio(hex, ground)
  const line =
    hex.toLowerCase() === ground.toLowerCase()
      ? 'the ground · everything else is measured against it'
      : `${r.toFixed(2)}:1 on ${against ? 'the dark ground' : 'paper'} · ${verdict(r)}`
  return `<div class="sw">
    <div class="sw-chip" style="background:${hex}"></div>
    <div class="sw-t">
      <b>${name}</b>
      <code>${hex.toUpperCase()}</code>
      <span>${role}</span>
      <em>${line}</em>
    </div>
  </div>`
}

const PALETTE = [
  ['Paper', C.paper, 'The page, and the fill of every card.'],
  ['Ink', C.ink, 'Body text. Pure black; the app has no grey text in light mode.'],
  ['Mark', C.mark, "The logo's own black, a shade warmer than text black."],
  ['Surface', C.surface, 'The recessed fill: code blocks, nav items, step tracks.'],
  ['Hairline', C.hairline, 'Every 1px rule and input outline. Never used for text.'],
  ['Hairline lit', C['hairline-lit'], 'The same rule, focused or raised.'],
]
const ACCENTS = [
  ['Blue', C['accent.blue'], 'Links, the Action skill, the default lift.'],
  ['Violet', C['accent.violet'], 'Selection, the Analysis skill, the default card accent.'],
  ['Mint', C['accent.mint'], 'Positive figures and progress.'],
  ['Pink', C['accent.pink'], 'A teammate tint.'],
  ['Gold', C['accent.gold'], 'A teammate tint.'],
  ['Peach', C['accent.peach'], 'A teammate tint.'],
  ['Green', C['accent.green'], 'A teammate tint.'],
  ['Red', C['accent.red'], 'A teammate tint, and the error state.'],
]
const STATUS = [
  ['OK', C['status.ok'], 'A run finished.'],
  ['Warning', C['status.warn'], 'A key is missing, a quota is close.'],
  ['Error', C['status.error'], 'A run failed.'],
  ['Danger', C['status.danger'], 'The outline and label of a destructive button.'],
]

const TYPE_ROWS = Object.entries(TOKENS.text)
  .filter(([k]) => !k.startsWith('$'))
  .map(([k, v]) => {
    const t = v.$value
    return `<tr>
      <td><b>${k[0].toUpperCase() + k.slice(1)}</b></td>
      <td>${t.fontSize}</td>
      <td>${t.fontWeight}</td>
      <td>${t.lineHeight}</td>
      <td>${t.letterSpacing || '0'}</td>
      <td class="note">${(v.$description || '').replace(/·/g, '·')}</td>
    </tr>`
  })
  .join('')

const SPECIMENS = [
  ['Wordmark', 27, 900, -0.02, 'dojoburo'],
  ['Title', 19, 800, -0.015, 'Place & tune your teammates'],
  ['Body', 16, 400, 0, 'A company is a set of teammates that share a brief, a set of connected apps and a bill.'],
  ['Lead', 13, 400, 0, 'Four teammates · running since March. Opens on the seating plan.'],
  ['Label', 12.5, 800, 0.01, 'COMPANY NAME'],
]
  .map(
    ([n, s, w, ls, txt]) =>
      `<div class="spec"><span class="spec-n">${n} · ${s}px · ${w}</span>
       <p style="font-size:${s}px;font-weight:${w};letter-spacing:${ls}em">${txt}</p></div>`,
  )
  .join('')

/* -------------------------------------------------------------------- page */
// The number is counted, not typed. Hand-written folios drift the moment a page
// is split, and a document about consistency should not have two page 11s.
let folio = 1 // the cover is page 1 and carries no folio
const page = (kicker, title, body) => {
  folio += 1
  return `
<section class="pg">
  <header class="pg-h"><span>${kicker}</span><span>Dojoburo brand guidelines</span></header>
  <h2>${title}</h2>
  ${body}
  <footer class="pg-f"><span>dojoburo</span><span>${folio}</span></footer>
</section>`
}

const HTML = `<!doctype html><html lang="en"><meta charset="utf-8"><title>Dojoburo brand guidelines</title>
<style>
${FONTS}
@page { size: A4 portrait; margin: 0 }
* { box-sizing: border-box }
html, body { margin: 0; padding: 0 }
body {
  font-family: Outfit, system-ui, sans-serif; font-weight: 400; font-size: 10pt; line-height: 1.6;
  color: ${C.ink}; background: ${C.paper}; -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
.pg {
  position: relative; width: 210mm; height: 297mm; padding: 22mm 20mm 18mm;
  page-break-after: always; break-after: page; overflow: hidden;
}
.pg:last-child { page-break-after: auto }
.pg-h {
  position: absolute; top: 12mm; left: 20mm; right: 20mm; display: flex; justify-content: space-between;
  font-size: 7.5pt; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #8a8a94;
}
.pg-f {
  position: absolute; bottom: 11mm; left: 20mm; right: 20mm; display: flex; justify-content: space-between;
  font-size: 7.5pt; font-weight: 800; letter-spacing: .04em; color: #8a8a94;
}
h2 { font-weight: 900; font-size: 25pt; letter-spacing: -.02em; line-height: 1.05; margin: 0 0 5mm }
h3 { font-weight: 800; font-size: 12pt; letter-spacing: -.01em; margin: 7mm 0 2.5mm }
h3:first-of-type { margin-top: 0 }
p { margin: 0 0 3mm; max-width: 62ch }
.lead { font-size: 11pt; line-height: 1.55; color: #4a4a55; margin-bottom: 6mm; max-width: 58ch }
.note { color: #6b6b76 }
ul { margin: 0 0 3mm; padding-left: 4.5mm }
li { margin-bottom: 1.5mm }
code { font-family: ui-monospace, Menlo, monospace; font-size: 8.5pt; background: ${C.surface}; padding: 1px 4px; border-radius: 4px }

/* ---- cover ---- */
.cover { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
.cover .mark { width: 62mm; margin-bottom: 12mm }
.cover .mark svg { width: 100%; height: auto; display: block }
.cover h1 { font-weight: 900; font-size: 34pt; letter-spacing: -.03em; line-height: 1.02; margin: 0 0 4mm; max-width: 15ch }
.cover .sub { font-size: 12pt; color: #4a4a55; max-width: 46ch; margin: 0 0 14mm }
.cover .meta { font-size: 8.5pt; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: #8a8a94 }
.rule { height: 3px; width: 34mm; background: linear-gradient(120deg, ${C['cta.from']}, ${C['cta.to']}); margin: 0 0 8mm }

/* ---- swatches ---- */
.sws { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5mm 6mm }
.sw { display: flex; gap: 3mm; align-items: flex-start }
.sw-chip { width: 13mm; height: 13mm; border-radius: 3mm; flex: 0 0 auto; box-shadow: inset 0 0 0 1px rgba(0,0,0,.09) }
.sw-t { min-width: 0 }
.sw-t b { display: block; font-weight: 800; font-size: 9.5pt; line-height: 1.3 }
.sw-t code { display: inline-block; margin: .5mm 0; font-size: 8pt }
.sw-t span { display: block; font-size: 8.5pt; color: #6b6b76; line-height: 1.45 }
.sw-t em { display: block; font-style: normal; font-size: 7.5pt; color: #8a8a94; margin-top: .6mm }

/* ---- type ---- */
table { width: 100%; border-collapse: collapse; font-size: 8.5pt }
th { text-align: left; font-weight: 800; font-size: 7.5pt; letter-spacing: .06em; text-transform: uppercase; color: #8a8a94; padding: 0 3mm 1.5mm 0; border-bottom: 1px solid ${C.hairline} }
td { padding: 1.8mm 3mm 1.8mm 0; border-bottom: 1px solid ${C.hairline}; vertical-align: top }
.spec { padding: 1.8mm 0; border-bottom: 1px solid ${C.hairline} }
.spec-n { display: block; font-size: 7pt; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; color: #8a8a94; margin-bottom: 1mm }
.spec p { margin: 0; line-height: 1.3 }

/* ---- logo plates ---- */
.plates { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin-bottom: 4mm }
.plate { border-radius: 4mm; padding: 7mm; display: flex; align-items: center; justify-content: center; min-height: 34mm }
.plate.on-paper { background: ${C.paper}; box-shadow: inset 0 0 0 1px ${C.hairline} }
.plate.on-ink { background: ${C.mark} }
.plate svg { max-width: 100%; height: auto; display: block }
.plate-cap { font-size: 7.5pt; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #8a8a94; margin: 1.5mm 0 0 }
.clear { position: relative; display: inline-block; padding: 24px; outline: 1px dashed ${C['accent.violet']}; }
.clear svg { display: block; height: 24mm; width: auto }

/* ---- live components ---- */
.demo { background: #fafafa; border-radius: 4mm; padding: 7mm; display: flex; flex-wrap: wrap; gap: 6mm; align-items: flex-start }
.card {
  width: 62mm; background: ${C.paper}; border-radius: 16px; padding: 20px;
  box-shadow: 0 2px 10px rgba(30,25,60,.06), 0 12px 30px -22px rgba(30,25,60,.5);
}
.card.on { box-shadow: 0 0 0 1.5px rgba(167,139,250,.38), 0 18px 38px -22px rgba(167,139,250,.6) }
.card b { display: block; font-weight: 800; font-size: 19px; line-height: 1.2; letter-spacing: -.015em }
.card span { display: block; font-size: 13px; line-height: 1.55; color: #6b6b76; margin: 6px 0 }
.card i { font-style: normal; font-weight: 800; font-size: 13px }
.card.empty {
  box-shadow: none; border: 2px dashed ${C.hairline}; display: flex; flex-direction: column;
  align-items: center; justify-content: center; min-height: 106px; color: #6b6b76;
}
.card.empty b { font-size: 28px; font-weight: 800 }
.card.empty span { font-size: 13px; margin: 2px 0 0 }
.btn { font: inherit; font-weight: 800; font-size: 15px; padding: 13px 22px; border-radius: 10px; border: 0; display: inline-block }
.btn.primary { background: linear-gradient(120deg, ${C['cta.from']}, ${C['cta.to']}, ${C['cta.from']}); color: ${C['cta.on']}; box-shadow: 0 2px 8px -4px rgba(30,25,60,.35) }
.btn.ghost { background: ${C.paper}; color: ${C.ink}; box-shadow: inset 0 0 0 1px ${C.hairline} }
.btn.danger { background: transparent; color: ${C['status.danger']}; box-shadow: inset 0 0 0 1px rgba(224,71,95,.45) }
.field { width: 62mm }
.field .lbl { font-weight: 800; font-size: 12.5px; letter-spacing: .01em; color: #6b6b76; display: block; margin-bottom: 7px }
.field .box { border: 1px solid ${C.hairline}; border-radius: 10px; padding: 11px 12px; font-size: 16px; background: ${C.paper} }
.field .box.focus { border-color: ${C.ink} }
.chip { display: inline-block; background: ${C['accent.violet']}; color: #fff; font-weight: 600; font-size: 14px; padding: 3px 9px; border-radius: 9px }
.toast {
  display: flex; align-items: center; gap: 10px; background: ${C.paper}; border: 1px solid ${C['hairline-lit']};
  border-radius: 9px; padding: 10px 10px 10px 12px; box-shadow: 0 2px 10px rgba(30,25,60,.06), 0 12px 30px -22px rgba(30,25,60,.5);
}
.toast .badge { background: ${C['status.ok']}; color: #fff; font-weight: 600; font-size: 14px; padding: 6px 8px; border-radius: 9px }
.toast .b1 { font-weight: 600; font-size: 16px; display: block }
.toast .b2 { font-size: 16px; color: #6b6b76; display: block }
.toast .x { color: #6b6b76; font-size: 14px; margin-left: 4px }
.nav { width: 55mm }
.nav div { padding: 9px 12px; border-radius: 10px; font-weight: 800; font-size: 14px; color: #6b6b76 }
.nav div.on { background: ${C.surface}; color: ${C.ink}; box-shadow: inset 2px 0 0 ${C['accent.violet']} }
.dialog {
  width: 78mm; background: ${C.paper}; border-radius: 20px; padding: 30px 24px 24px; text-align: center;
  box-shadow: 0 2px 10px rgba(30,25,60,.07), 0 30px 60px -34px rgba(30,25,60,.6);
}
.dialog .m svg { width: 40px; height: 40px; display: block; margin: 0 auto }
.dialog .n { font-weight: 900; font-size: 27px; letter-spacing: -.02em; line-height: 1; margin: 8px 0 0 }
.dialog .t { font-weight: 800; font-size: 17px; line-height: 1.35; letter-spacing: -.005em; margin: 14px auto 0; max-width: 22ch }
.dialog .l { font-size: 13.5px; color: #6b6b76; margin: 6px 0 0 }
.dialog .in { margin-top: 16px; border: 1px solid ${C.hairline}; border-radius: 12px; padding: 13px 16px; font-size: 14px; color: #6b6b76 }
.dialog .go { margin-top: 10px; border-radius: 12px; padding: 13px 20px; font-weight: 800; font-size: 15px; background: linear-gradient(120deg, ${C['cta.from']}, ${C['cta.to']}, ${C['cta.from']}); color: ${C['cta.on']} }

/* ---- do / don't ---- */
.dd { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin-top: 2mm }
.dd > div { border-radius: 3mm; padding: 4mm 4.5mm; font-size: 9pt; line-height: 1.5 }
.dd .do { background: rgba(55,196,106,.08); box-shadow: inset 0 0 0 1px rgba(55,196,106,.3) }
.dd .dont { background: rgba(224,71,95,.06); box-shadow: inset 0 0 0 1px rgba(224,71,95,.28) }
.dd h4 { margin: 0 0 2mm; font-weight: 800; font-size: 8pt; letter-spacing: .07em; text-transform: uppercase }
.dd .do h4 { color: #1f8a49 }
.dd .dont h4 { color: ${C['status.danger']} }
.dd ul { margin: 0; padding-left: 4mm }

/* ---- misc ---- */
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm }
.tile { border-radius: 3mm; padding: 4mm; box-shadow: inset 0 0 0 1px ${C.hairline} }
.tile b { display: block; font-weight: 800; font-size: 9.5pt; margin-bottom: 1mm }
.tile span { font-size: 8.5pt; color: #6b6b76; line-height: 1.5 }
.elev { display: flex; gap: 6mm; margin: 3mm 0 }
.elev > div { flex: 1; height: 22mm; border-radius: 16px; background: #fff; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3mm; font-size: 7.5pt; font-weight: 800; color: #8a8a94 }
.e1 { box-shadow: 0 2px 10px rgba(30,25,60,.06), 0 12px 30px -22px rgba(30,25,60,.5) }
.e2 { box-shadow: 0 4px 14px rgba(30,25,60,.08), 0 20px 40px -22px rgba(30,25,60,.55) }
.e3 { box-shadow: 0 2px 10px rgba(30,25,60,.07), 0 30px 60px -34px rgba(30,25,60,.6) }
.radii { display: flex; gap: 5mm; align-items: flex-end; margin: 3mm 0 }
.radii > div { width: 22mm; height: 18mm; background: ${C.surface}; display: flex; align-items: center; justify-content: center; font-size: 7.5pt; font-weight: 800; color: #6b6b76 }
.glyphs { display: flex; flex-wrap: wrap; gap: 3mm; margin: 2mm 0 4mm }
.glyphs span { width: 13mm; height: 13mm; border-radius: 3mm; box-shadow: inset 0 0 0 1px ${C.hairline}; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 13pt }
.glyphs span em { font-style: normal; font-size: 6pt; color: #8a8a94; margin-top: .5mm }
.files { font-size: 9pt }
.files tr td:first-child { font-family: ui-monospace, Menlo, monospace; font-size: 8pt; white-space: nowrap }
</style>

<!-- ===================================================== 1 · cover ===== -->
<section class="pg cover">
  <div class="mark">${svg('dojoburo-stacked-black.svg')}</div>
  <div class="rule"></div>
  <h1>Brand and design system</h1>
  <p class="sub">Everything the product is made of: the mark, the palette, the type, the space between things, and the components that use them.</p>
  <p class="meta">Version 1 · dojoburo.com</p>
</section>

<!-- ===================================================== 2 · using ===== -->
${page('Using this', 'How to read this', `
<p class="lead">This document describes the product as it is built, not as it might be. Every colour, size, radius and shadow on these pages was read out of the app's own stylesheet, and the components on pages 8 and 9 are rendered live from those same values rather than drawn to look like them.</p>
<h3>The one rule that outranks the others</h3>
<p><b>There are no emojis anywhere in Dojoburo.</b> Not in the interface, not in copy, not in notifications, not in commit messages. Where a symbol is genuinely useful, use a geometric or ASCII glyph — the set is on page 11. An emoji renders differently on every platform, carries a tone the product does not have, and cannot be coloured.</p>
<h3>What is fixed and what is yours</h3>
<div class="dd">
  <div class="do"><h4>Fixed</h4><ul>
    <li>The mark, its proportions and its clear space.</li>
    <li>Outfit, and the seven type roles on page 6.</li>
    <li>The card: white, 16px, one shadow, no border.</li>
    <li>One primary action per screen.</li>
    <li>The absence of emoji.</li>
  </ul></div>
  <div class="dont"><h4>Yours</h4><ul>
    <li>Which accent a teammate or company carries.</li>
    <li>Layout, column counts, and how much breathes.</li>
    <li>Illustration and the 3D scene.</li>
    <li>Copy length and tone within the voice on page 11.</li>
  </ul></div>
</div>
<h3>Where the truth lives</h3>
<p><code>src/index.css</code> is the source of truth for the running app. <code>brand/tokens/dojoburo.tokens.json</code> is the portable copy of the same values, and the Figma plugin in <code>brand/figma-plugin</code> reads it to build the library. If those three ever disagree, the stylesheet wins and the other two are stale.</p>
`)}

<!-- ===================================================== 3 · mark ====== -->
${page('The mark', 'The mark', `
<p class="lead">A dojo seen from the front, with a face. It is drawn as a single continuous stroke so it survives being small, and it is never filled, tilted, or given a background of its own.</p>
<div class="plates">
  <div><div class="plate on-paper">${svg('dojoburo-lockup-black.svg').replace(/width="\d+" height="\d+"/, 'width="100%"')}</div><p class="plate-cap">Lockup · black on white</p></div>
  <div><div class="plate on-ink">${svg('dojoburo-lockup-white.svg').replace(/width="\d+" height="\d+"/, 'width="100%"')}</div><p class="plate-cap">Lockup · white on black</p></div>
  <div><div class="plate on-paper">${svg('dojoburo-stacked-black.svg').replace(/width="\d+" height="\d+"/, 'height="26mm"')}</div><p class="plate-cap">Stacked · the access gate</p></div>
  <div><div class="plate on-ink">${svg('dojoburo-icon-white.svg').replace(/width="\d+" height="\d+"/, 'height="26mm"')}</div><p class="plate-cap">Icon alone · under 120px wide</p></div>
</div>
<h3>Which one to use</h3>
<ul>
  <li><b>Lockup</b> — the default. Any bar, header, footer, deck or document.</li>
  <li><b>Stacked</b> — when the space is taller than it is wide: a dialog, a splash, a card.</li>
  <li><b>Icon alone</b> — favicons, avatars, app tiles, and anywhere the whole thing would be under 120px wide.</li>
  <li><b>Wordmark alone</b> — only when the icon already appears elsewhere on the same surface.</li>
</ul>
`)}

<!-- ===================================================== 4 · mark use == -->
${page('The mark', 'Clear space, size, misuse', `
<h3>Clear space</h3>
<p>Nothing enters the band around the mark. The band is one icon-width on every side — it scales with the mark, so it is right at any size.</p>
<div style="margin:3mm 0 5mm"><span class="clear">${svg('dojoburo-lockup-black.svg').replace(/width="\d+" height="\d+"/, 'height="16mm"')}</span></div>
<h3>Minimum size</h3>
<ul>
  <li>Lockup — 120px wide on screen, 30mm in print. Below that the face closes up.</li>
  <li>Icon alone — 24px on screen, 8mm in print.</li>
</ul>
<h3>Misuse</h3>
<div class="dd">
  <div class="do"><h4>Do</h4><ul>
    <li>Use the supplied files, at their own proportions.</li>
    <li>Black on light, white on dark. Nothing else.</li>
    <li>Place it on a plain, quiet area.</li>
    <li>Scale both parts of the lockup together.</li>
  </ul></div>
  <div class="dont"><h4>Do not</h4><ul>
    <li>Recolour it, tint it, or fill the house.</li>
    <li>Add a shadow, an outline, a glow or a gradient.</li>
    <li>Stretch, rotate, skew, or round the corners further.</li>
    <li>Reset the name in another face, or resize it apart from the icon.</li>
    <li>Put it on a photograph, a pattern, or a mid-tone.</li>
    <li>Enclose it in a box that is not one of the supplied files.</li>
  </ul></div>
</div>
`)}

<!-- ===================================================== 5 · colour ==== -->
${page('Colour', 'Colour', `
<p class="lead">White paper, black text, and colour used only where it carries meaning. Contrast is measured against paper; the figure under each swatch is the real WCAG 2.1 ratio, and it says plainly where a colour must not be used for text.</p>
<h3>Base</h3>
<div class="sws">${PALETTE.map(([n, h, r]) => swatch(n, h, r)).join('')}</div>
<h3>Accents</h3>
<p class="note" style="font-size:8.5pt;margin-bottom:2.5mm">These identify — a teammate, a skill, a company. They tint a glyph, a number, a chip or a ring of shadow. None of them is a text colour on white.</p>
<div class="sws">${ACCENTS.map(([n, h, r]) => swatch(n, h, r)).join('')}</div>
`)}

<!-- ===================================================== 6 · colour 2 == -->
${page('Colour', 'Status, the CTA, and dark', `
<h3>Status</h3>
<div class="sws">${STATUS.map(([n, h, r]) => swatch(n, h, r)).join('')}</div>
<h3>The one gradient</h3>
<p>Every primary call to action in the app carries the same blue-to-green gradient, animated slowly across a 220% wide box. It is the only gradient in the interface, and it exists so that the single most important control on a screen is unmistakable. Text on it is always <code>${C['cta.on'].toUpperCase()}</code> — at ${ratio(C['cta.on'], C['cta.from']).toFixed(2)}:1 against the lightest stop, it is the only value that stays readable across the whole sweep.</p>
<div style="height:16mm;border-radius:10px;margin:3mm 0 5mm;background:linear-gradient(120deg,${C['cta.from']},${C['cta.to']},${C['cta.from']});display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12pt;color:${C['cta.on']}">Create your company</div>
<h3>Dark</h3>
<p>Dark mode changes six values and nothing else. Cards become panels, the shadow deepens, and secondary text finally becomes grey — it is the one place the app has a muted colour.</p>
<div class="sws">${[
  ['Paper', C['dark.paper'], 'The page.'],
  ['Ink', C['dark.ink'], 'Body text.'],
  ['Muted', C['dark.muted'], 'Secondary text — grey only here.'],
  ['Panel', C['dark.panel'], 'What a card becomes.'],
  ['Surface', C['dark.surface'], 'The recessed fill.'],
].map(([n, h, r]) => swatch(n, h, r, C['dark.paper'])).join('')}</div>
`)}

<!-- ===================================================== 7 · type ====== -->
${page('Type', 'Type', `
<p class="lead">One family, Outfit, at four weights. Titles are ExtraBold and tightly tracked; everything else is Regular at a generous line height. There is no second family — the monospace stack appears only inside code and hashes.</p>
<h3>The roles</h3>
<table><thead><tr><th>Role</th><th>Size</th><th>Weight</th><th>Line</th><th>Track</th><th>Where</th></tr></thead><tbody>${TYPE_ROWS}</tbody></table>
<h3>Specimens</h3>
${SPECIMENS}
<h3>Rules</h3>
<ul>
  <li>A card title is 19px on every screen in the app. Not 15 here and 20 there.</li>
  <li>Secondary copy inside a card is 13px. Body copy outside a card is 16px.</li>
  <li>Never set a heading in Regular, and never set body copy in ExtraBold.</li>
  <li>Sentence case everywhere except the field label, which is the only uppercase in the product.</li>
</ul>
`)}

<!-- ===================================================== 8 · space ===== -->
${page('Space', 'Space, radius, elevation', `
<h3>Spacing</h3>
<p>A 4px base. Inside a card: 20px padding, 6px between a title and its line. Between cards: 16px. Between sections: 26px or more. A surface breathes at its edges with <code>clamp(16px, 4vw, 40px)</code>.</p>
<h3>Radius</h3>
<div class="radii">
  <div style="border-radius:9px">9 · chip</div>
  <div style="border-radius:10px">10 · control</div>
  <div style="border-radius:16px">16 · card</div>
  <div style="border-radius:20px">20 · dialog</div>
  <div style="border-radius:999px">999 · pill</div>
</div>
<h3>Elevation</h3>
<p>Three levels, no more. A card sits on one shadow; hovering deepens that same shadow and lifts the card 3px; a dialog uses a longer, softer version of it. Nothing in the app carries both a shadow and a border.</p>
<div class="elev"><div class="e1">Card</div><div class="e2">Card · hover</div><div class="e3">Dialog</div></div>
<h3>Selection</h3>
<p>A selected card stays white. The state is carried by a 1.5px ring of accent-coloured shadow and a deeper lift — never by tinting the paper. Tinting was tried and it made a grid of companies read as a set of unrelated colours instead of one set of cards.</p>
<div class="demo" style="padding:5mm">
  <div class="card"><b>Acme Robotics</b><span>Four teammates · running since March</span><i>Open now</i></div>
  <div class="card on"><b>Northwind Labs</b><span>Two teammates · running since June</span><i>Open now</i></div>
</div>
`)}

<!-- ===================================================== 9 · comps 1 === -->
${page('Components', 'Cards, buttons, fields', `
<p class="lead">These are not screenshots. They are built on this page from the values on the previous pages, at their real sizes.</p>
<h3>Card</h3>
<div class="demo">
  <div class="card"><b>Acme Robotics</b><span>Four teammates · running since March</span><i>Open now</i></div>
  <div class="card empty"><b>+</b><span>Add a company</span></div>
</div>
<h3>Buttons</h3>
<p class="note" style="font-size:8.5pt;margin-bottom:2.5mm">One primary per screen. The gradient belongs to it alone; a second one on the same surface means neither is the answer. A destructive button is outlined, never filled — it should not be the brightest thing you can see.</p>
<div class="demo" style="align-items:center">
  <span class="btn primary">Create your company</span>
  <span class="btn ghost">Cancel</span>
  <span class="btn danger">Delete company</span>
</div>
<h3>Field</h3>
<div class="demo">
  <div class="field"><span class="lbl">COMPANY NAME</span><div class="box">Acme Robotics</div></div>
  <div class="field"><span class="lbl">ACCESS CODE</span><div class="box focus">••••</div></div>
</div>
<p class="note" style="font-size:8.5pt">Focus darkens the hairline to ink. It never adds a coloured ring — a blue halo under a control was removed from every screen in the app and must not come back.</p>
`)}

<!-- ===================================================== 10 · comps 2 == -->
${page('Components', 'Chips, toasts, navigation', `
<h3>Chip</h3>
<p class="note" style="font-size:8.5pt;margin-bottom:2.5mm">A label, never a button. The tint carries the meaning, so a chip is the one place an accent may sit behind text — and the only place a warning tint takes ink rather than white.</p>
<div class="demo" style="align-items:center">
  <span class="chip">Analysis</span>
  <span class="chip" style="background:${C['accent.blue']}">Action</span>
  <span class="chip" style="background:${C['status.ok']}">Ready</span>
  <span class="chip" style="background:${C['status.warn']};color:${C.ink}">Needs a key</span>
</div>
<h3>Toast</h3>
<div class="demo">
  <div class="toast"><span class="badge">OK</span><span><span class="b1">Run finished</span><span class="b2">Acme Robotics · 2 min</span></span><span class="x">✕</span></div>
</div>
<p class="note" style="font-size:8.5pt">Always closable, and clear of the menu. A message you cannot dismiss is a message you learn to ignore.</p>
<h3>Navigation</h3>
<div class="demo"><div class="nav"><div class="on">Billing</div><div>Connect apps</div><div>Dojo settings</div><div>Account</div></div></div>
<p class="note" style="font-size:8.5pt">Where you are is a quiet fill and a 2px violet rule on the leading edge. A nav item is never a filled black pill.</p>
`)}

<!-- ===================================================== 11 · dialog === -->
${page('Components', 'Dialogs', `
<p class="lead">The widest single shape in the system: 400px, 20px corners, the deepest shadow, everything centred. The access gate is the reference build — a whole screen reduced to one card.</p>
<div class="demo" style="justify-content:center;padding:9mm"><div class="dialog">
  <span class="m">${ICON.replace(/width="\d+" height="\d+"/, 'width="40" height="40"')}</span>
  <p class="n">dojoburo</p>
  <p class="t">Private access to Dojoburo Beta version</p>
  <p class="l">Enter the access code you were given.</p>
  <div class="in">Access code</div>
  <div class="go">Enter</div>
</div></div>
<h3>Rules</h3>
<ul>
  <li>Reserve a line of height for the error message, so a wrong answer never makes the card jump.</li>
  <li>The mark goes above the name, the name above the title. Nothing else sits at the top.</li>
  <li>One action. If a dialog needs two equal buttons it is not a dialog, it is a screen.</li>
  <li>Nothing behind a dialog scrolls while it is up.</li>
  <li>It arrives in 340ms, rising 10px — and not at all under <code>prefers-reduced-motion</code>.</li>
</ul>
`)}

<!-- ===================================================== 12 · voice ==== -->
${page('Voice', 'Glyphs, motion, words', `
<h3>Glyphs, instead of emoji</h3>
<p>The whole permitted set. Each is a real typographic character, so it inherits the text colour, the weight and the size around it.</p>
<div class="glyphs">
  <span>◈<em>brand</em></span><span>◱<em>company</em></span><span>❑<em>card</em></span>
  <span>▲<em>up</em></span><span>✓<em>done</em></span><span>✕<em>close</em></span>
  <span>✎<em>edit</em></span><span>↻<em>retry</em></span><span>◦<em>bullet</em></span>
  <span>·<em>separator</em></span><span>→<em>go</em></span><span>+<em>add</em></span>
</div>
<h3>Motion</h3>
<ul>
  <li><b>140ms</b> — a border or a colour changing.</li>
  <li><b>160ms</b> — a hover lift, 2 to 4px.</li>
  <li><b>220ms</b> — a shadow deepening.</li>
  <li><b>280ms</b> — a panel sliding in or out.</li>
  <li><b>500ms</b> — a whole surface arriving, rising 12px as it fades in.</li>
</ul>
<p>Easing is <code>cubic-bezier(.22,.61,.36,1)</code> for arrivals and <code>cubic-bezier(.2,.9,.3,1)</code> for lifts. Every animation is disabled under <code>prefers-reduced-motion</code>, including the CTA gradient — that is not optional.</p>
<h3>Words</h3>
<div class="dd">
  <div class="do"><h4>We write</h4><ul>
    <li>Plainly, in sentence case, in the second person.</li>
    <li>What happened, then what to do about it.</li>
    <li>"Four teammates · running since March".</li>
    <li>Company, teammate, run, brief, dojo.</li>
  </ul></div>
  <div class="dont"><h4>We do not write</h4><ul>
    <li>Exclamation marks, or an emoji standing in for a tone.</li>
    <li>"Oops!", "Something went wrong", "Please try again later".</li>
    <li>Agent, bot, AI-powered, revolutionary, seamless.</li>
    <li>Project — it is a company.</li>
  </ul></div>
</div>
`)}

<!-- ===================================================== 13 · files ==== -->
${page('The pack', 'What is in the pack', `
<p class="lead">Everything below is in <code>brand/</code> in the repository, and every file is generated from the app's own sources by a script that ships beside it — so the pack can be rebuilt, not just edited.</p>
<table class="files"><thead><tr><th>File</th><th>What it is</th></tr></thead><tbody>
<tr><td>logo/dojoburo-icon-{black,white}.svg</td><td>The mark alone, and the same as PNG at 1×, 2× and 3×.</td></tr>
<tr><td>logo/dojoburo-wordmark-{black,white}.svg</td><td>The name alone, outlined — no font needed to open it.</td></tr>
<tr><td>logo/dojoburo-lockup-{black,white}.svg</td><td>Icon and name side by side.</td></tr>
<tr><td>logo/dojoburo-stacked-{black,white}.svg</td><td>Icon above name.</td></tr>
<tr><td>logo/*.png, *@2x.png, *@3x.png</td><td>The same eight, rasterised.</td></tr>
<tr><td>tokens/dojoburo.tokens.json</td><td>Colour, type, space, radius, shadow and motion as W3C design tokens. Imports into Tokens Studio.</td></tr>
<tr><td>figma-plugin/</td><td>A Figma plugin that builds the library — styles and components — inside a Figma file.</td></tr>
<tr><td>build-logos.py</td><td>Regenerates every SVG from public/logo-icon-dojoburo.svg and Outfit.</td></tr>
<tr><td>rasterise.mjs</td><td>Regenerates every PNG.</td></tr>
<tr><td>make-guidelines.mjs</td><td>Regenerates this document.</td></tr>
</tbody></table>
<h3>Every export carries a 10px margin</h3>
<p>The margin is part of the artwork, measured in each file's own pixel space, so a logo dropped straight into a layout is never flush against something else. In the PNGs it scales with the export: 10px at 1×, 20px at 2×, 30px at 3×.</p>
<h3>About Figma</h3>
<p>Figma's <code>.fig</code> container is proprietary and undocumented — nothing outside Figma can write one, so this pack does not pretend to. What it gives you instead is the plugin: run it once in a Figma file and it creates all thirty-one colour styles, eight text styles, four elevation styles and fourteen components in place, as native Figma objects. Save that file and you have the <code>.fig</code>, published as a library if you want it. The step-by-step is in <code>brand/README.md</code>.</p>
`)}
</html>`

/* ------------------------------------------------------------------- print */
const htmlPath = join(HERE, 'dojoburo-brand-guidelines.html')
writeFileSync(htmlPath, HTML)

const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await br.newPage()
await p.setContent(HTML, { waitUntil: 'load' })
await p.evaluate(() => document.fonts.ready)
// A page is overflow:hidden, so content that does not fit is silently cut off —
// exactly the failure you do not see until the PDF is in someone's hands.
// Measure every page against its own box and refuse to write a clipped one.
const over = await p.evaluate(() => {
  const bad = []
  document.querySelectorAll('.pg').forEach((pg, i) => {
    // the footer is absolutely positioned, so the last flowed child is the test
    const last = [...pg.children].filter((c) => !c.classList.contains('pg-f')).pop()
    if (!last) return
    const limit = pg.getBoundingClientRect().bottom - 18 * 3.7795 // the 18mm bottom margin
    const bottom = last.getBoundingClientRect().bottom
    if (bottom > limit) bad.push({ page: i + 1, over: Math.round(bottom - limit) })
  })
  return bad
})

const pages = await p.evaluate(() => document.querySelectorAll('.pg').length)
await br.close()

if (over.length) {
  for (const o of over) console.error(`FAIL  page ${o.page} overflows its box by ${o.over}px — it would print clipped`)
  process.exit(1)
}

const pdf = join(HERE, 'dojoburo-brand-guidelines.pdf')
const br2 = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p2 = await br2.newPage()
await p2.setContent(HTML, { waitUntil: 'load' })
await p2.evaluate(() => document.fonts.ready)
await p2.pdf({ path: pdf, format: 'A4', printBackground: true, preferCSSPageSize: true })
await br2.close()

console.log(`${pdf}\n${pages} pages · A4 portrait · Outfit embedded · no page overflows`)
