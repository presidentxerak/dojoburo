/* DojoBuro design system · Figma builder
 *
 * Figma's .fig container is a proprietary, undocumented format, so no tool
 * outside Figma can write one. This plugin is the honest equivalent: run it in
 * a Figma file and it BUILDS the system in place — every colour style, every
 * text style, every effect style, and a page of real components you can drag,
 * instance and override. What you get is a native Figma library, and saving it
 * gives you the .fig.
 *
 * Everything below is read from the app's own source. Colours and type come
 * from brand/tokens/dojoburo.tokens.json, which was itself read out of
 * src/index.css; the icon is the exact artwork in public/logo-icon-dojoburo.svg.
 * Nothing here is an approximation of the product.
 *
 * Build with:  node brand/figma-plugin/build.mjs
 * Run with:    Figma › Plugins › Development › Import plugin from manifest…
 */

const ICON_SVG = "<svg width=\"272\" height=\"272\" viewBox=\"0 0 272 272\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M197.666 52.0381L205.856 55.7704L205.856 55.7703L197.666 52.0381ZM208.882 58.3223L217.487 55.687L217.486 55.6838L208.882 58.3223ZM229.134 105.747L221.174 109.948L221.174 109.948L229.134 105.747ZM240.953 125.77L233.519 130.842L233.519 130.842L240.953 125.77ZM246.177 132.675L239.385 138.58L239.385 138.58L246.177 132.675ZM250.466 136.651L255.251 129.029L255.25 129.028L250.466 136.651ZM212.43 244.95V253.95H212.43L212.43 244.95ZM61.3496 244.95L61.3493 253.95H61.3496V244.95ZM22.2334 136.653L27.0455 144.259L27.0482 144.257L22.2334 136.653ZM26.4834 132.677L33.3014 138.552L33.3015 138.552L26.4834 132.677ZM31.6602 125.771L39.1157 130.813L39.1157 130.813L31.6602 125.771ZM43.374 105.749L51.3489 109.921L51.3489 109.921L43.374 105.749ZM63.4443 58.3242L72.0565 60.9379L72.0595 60.9277L63.4443 58.3242ZM74.5596 52.0371L66.3573 55.7416L66.3574 55.7418L74.5596 52.0371ZM112.351 56.2812L112.107 65.278L112.229 65.2812H112.351V56.2812ZM159.538 56.2812V65.2812H159.659L159.779 65.278L159.538 56.2812ZM203.938 28.2999L211.963 32.3748L203.938 28.2999ZM204.622 28.0342L207.716 19.5828L204.622 28.0342ZM204.966 28.6898L196.244 26.4669L204.966 28.6898ZM75.1138 53.2085L83.1735 49.2035L75.1138 53.2085ZM67.6708 28.0342L70.7436 36.4934L67.6708 28.0342ZM68.3547 28.3024L60.3155 32.3485L68.3547 28.3024ZM67.3255 28.6895L58.5996 30.8937L67.3255 28.6895ZM197.117 53.1891L189.069 49.161L197.117 53.1891ZM204.966 28.6898L196.244 26.4669C193.343 37.8507 191.203 44.516 189.476 48.3059L197.666 52.0381L205.856 55.7703C208.31 50.3841 210.774 42.3383 213.687 30.9127L204.966 28.6898ZM197.666 52.0381L189.476 48.3057C189.334 48.6187 189.198 48.903 189.069 49.161L197.117 53.1891L205.165 57.2173C205.401 56.7472 205.63 56.2646 205.856 55.7704L197.666 52.0381ZM199.586 57.9688V66.9688H208.404V57.9688V48.9688H199.586V57.9688ZM208.882 58.3223L200.276 60.9575C204.819 75.7935 212.933 94.3337 221.174 109.948L229.134 105.747L237.093 101.546C229.206 86.6029 221.605 69.1348 217.487 55.687L208.882 58.3223ZM229.134 105.747L221.174 109.948C225.306 117.776 229.559 125.038 233.519 130.842L240.953 125.77L248.388 120.697C244.929 115.628 241.024 108.994 237.093 101.546L229.134 105.747ZM240.953 125.77L233.519 130.842C235.497 133.741 237.471 136.379 239.385 138.58L246.177 132.675L252.969 126.77C251.661 125.266 250.119 123.235 248.388 120.697L240.953 125.77ZM246.177 132.675L239.385 138.58C241.215 140.684 243.345 142.808 245.682 144.275L250.466 136.651L255.25 129.028C255.254 129.031 255.036 128.889 254.59 128.475C254.162 128.077 253.62 127.519 252.969 126.77L246.177 132.675ZM250.2 137.575V128.575H227.88V137.575V146.575H250.2V137.575ZM225.88 139.575H216.88V231.5H225.88H234.88V139.575H225.88ZM225.88 231.5H216.88C216.88 233.957 214.887 235.95 212.43 235.95L212.43 244.95L212.43 253.95C224.828 253.95 234.88 243.899 234.88 231.5H225.88ZM212.43 244.95V235.95H61.3496V244.95V253.95H212.43V244.95ZM61.3496 244.95L61.3499 235.95C58.8929 235.95 56.9004 233.958 56.9004 231.5H47.9004H38.9004C38.9004 243.898 48.9506 253.95 61.3493 253.95L61.3496 244.95ZM47.9004 231.5H56.9004V139.575H47.9004H38.9004V231.5H47.9004ZM45.9004 137.575V128.575H22.5005V137.575V146.575H45.9004V137.575ZM22.2334 136.653L27.0482 144.257C29.3746 142.784 31.4898 140.654 33.3014 138.552L26.4834 132.677L19.6654 126.802C19.0201 127.551 18.4838 128.109 18.0602 128.506C17.6196 128.918 17.4075 129.057 17.4186 129.05L22.2334 136.653ZM26.4834 132.677L33.3015 138.552C35.1984 136.35 37.1557 133.711 39.1157 130.813L31.6602 125.771L24.2046 120.73C22.4886 123.268 20.9601 125.299 19.6653 126.802L26.4834 132.677ZM31.6602 125.771L39.1157 130.813C43.0398 125.01 47.2545 117.748 51.3489 109.921L43.374 105.749L35.3992 101.578C31.5029 109.026 27.6327 115.66 24.2046 120.73L31.6602 125.771ZM43.374 105.749L51.3489 109.921C59.516 94.3069 67.5553 75.7695 72.0565 60.9379L63.4443 58.3242L54.8322 55.7106C50.7496 69.163 43.2159 86.6338 35.3991 101.578L43.374 105.749ZM63.9231 57.9688V66.9688H72.6445V57.9688V48.9688H63.9231V57.9688ZM75.1138 53.2085L83.1735 49.2035C83.0432 48.9413 82.9059 48.6517 82.7617 48.3324L74.5596 52.0371L66.3574 55.7418C66.5845 56.2446 66.8165 56.7355 67.054 57.2136L75.1138 53.2085ZM74.5596 52.0371L82.7618 48.3326C81.0484 44.5389 78.9271 37.8696 76.0514 26.4853L67.3255 28.6895L58.5996 30.8937C61.4856 42.3185 63.9267 50.3599 66.3573 55.7416L74.5596 52.0371ZM68.3547 28.3024L60.3155 32.3485C65.8464 43.3376 83.242 64.497 112.107 65.278L112.351 56.2812L112.594 47.2845C92.8233 46.7497 80.2523 31.9223 76.3939 24.2562L68.3547 28.3024ZM112.351 56.2812V65.2812H159.538V56.2812V47.2812H112.351V56.2812ZM159.538 56.2812L159.779 65.278C188.829 64.4991 206.371 43.3858 211.963 32.3748L203.938 28.2999L195.913 24.225C192.033 31.8659 179.334 46.7472 159.297 47.2845L159.538 56.2812ZM203.938 28.2999L211.963 32.3748C209.982 36.2758 205.448 37.9208 201.528 36.4856L204.622 28.0342L207.716 19.5828C203.266 17.9534 198.15 19.8205 195.913 24.225L203.938 28.2999ZM204.966 28.6898L213.687 30.9127C214.883 26.2189 212.371 21.2868 207.716 19.5828L204.622 28.0342L201.528 36.4856C197.404 34.9758 195.188 30.6133 196.244 26.4669L204.966 28.6898ZM72.6445 57.9688V66.9688C78.5773 66.9688 81.8186 62.5705 82.9784 60.2347C84.2048 57.7648 85.2882 53.4591 83.1735 49.2035L75.1138 53.2085L67.054 57.2136C66.3694 55.8359 66.3325 54.6294 66.3854 53.9638C66.4407 53.2674 66.6241 52.6976 66.8564 52.2296C67.0808 51.7778 67.5095 51.1039 68.3158 50.4549C69.1531 49.7811 70.6374 48.9688 72.6445 48.9688V57.9688ZM22.5005 137.575V128.575C31.0163 128.575 34.2417 139.706 27.0455 144.259L22.2334 136.653L17.4213 129.048C9.37913 134.136 12.9837 146.575 22.5005 146.575V137.575ZM208.404 57.9688V66.9688C204.669 66.9688 201.372 64.5311 200.277 60.9607L208.882 58.3223L217.486 55.6838C216.263 51.6932 212.578 48.9688 208.404 48.9688V57.9688ZM67.6708 28.0342L70.7436 36.4934C66.816 37.9201 62.2836 36.2588 60.3155 32.3485L68.3547 28.3024L76.3939 24.2562C74.1717 19.8409 69.057 17.9553 64.5979 19.5751L67.6708 28.0342ZM47.9004 139.575H56.9004C56.9004 133.5 51.9755 128.575 45.9004 128.575V137.575V146.575C42.0344 146.575 38.9004 143.441 38.9004 139.575H47.9004ZM250.466 136.651L245.681 144.274C238.456 139.738 241.669 128.575 250.2 128.575V137.575V146.575C259.735 146.575 263.327 134.098 255.251 129.029L250.466 136.651ZM67.3255 28.6895L76.0514 26.4853C77.0996 30.635 74.8724 34.9936 70.7436 36.4934L67.6708 28.0342L64.5979 19.5751C59.9378 21.2679 57.4129 26.196 58.5996 30.8937L67.3255 28.6895ZM197.117 53.1891L189.069 49.161C186.935 53.4236 188.021 57.7432 189.241 60.2117C190.394 62.5431 193.634 66.9688 199.586 66.9688V57.9688V48.9688C201.602 48.9688 203.09 49.7878 203.925 50.4623C204.729 51.1122 205.155 51.7853 205.377 52.2341C205.607 52.6992 205.789 53.2667 205.843 53.9616C205.895 54.625 205.857 55.8354 205.165 57.2173L197.117 53.1891ZM227.88 137.575V128.575C221.805 128.575 216.88 133.5 216.88 139.575H225.88H234.88C234.88 143.441 231.746 146.575 227.88 146.575V137.575ZM63.4443 58.3242L72.0595 60.9277C70.9755 64.5148 67.6704 66.9688 63.9231 66.9688V57.9688V48.9688C59.7348 48.9688 56.0407 51.7115 54.8291 55.7207L63.4443 58.3242Z\" fill=\"black\"/> <path d=\"M101.414 117.993C107.19 117.993 111.872 122.673 111.872 128.446V152.622C111.872 158.396 107.19 163.076 101.414 163.076C95.6389 163.076 90.9572 158.396 90.957 152.622V128.446C90.957 122.673 95.6388 117.993 101.414 117.993Z\" fill=\"#040404\"/> <path d=\"M170.499 117.993C176.274 117.993 180.957 122.673 180.957 128.446V152.622C180.957 158.396 176.274 163.076 170.499 163.076C164.724 163.076 160.042 158.396 160.042 152.622V128.446C160.042 122.673 164.723 117.993 170.499 117.993Z\" fill=\"#040404\"/> <path d=\"M151.84 184.532C155.629 181.646 161.041 182.377 163.928 186.165C166.815 189.952 166.083 195.362 162.294 198.248C141.363 214.19 119.544 204.723 111.291 198.123C107.571 195.148 106.968 189.722 109.944 186.004C112.92 182.285 118.348 181.683 122.068 184.657C126.949 188.561 139.673 193.799 151.84 184.532Z\" fill=\"#040404\"/> </svg>"

/* ------------------------------------------------------------------ colour */
// hex → Figma's 0..1 channels
function rgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 }
}
const solid = (hex, opacity) => [{ type: 'SOLID', color: rgb(hex), opacity: opacity === undefined ? 1 : opacity }]

const C = {
  paper: '#ffffff',
  ink: '#000000',
  muted: '#000000',
  surface: '#f5f6f8',
  hairline: '#e4e4e7',
  hairlineLit: '#c7c7cc',
  mark: '#14151a',
  blue: '#4f9df7',
  violet: '#a78bfa',
  mint: '#3fd0b0',
  pink: '#ff7eb6',
  gold: '#ffc24b',
  peach: '#ff9a76',
  green: '#45c46a',
  red: '#ff5d6c',
  pBlue: '#2f6bff',
  pTeal: '#08c2ac',
  pYellow: '#ffc61a',
  pOrange: '#ff7a1a',
  ok: '#37c46a',
  warn: '#ffab3d',
  err: '#ff5d6c',
  danger: '#e0475f',
  ctaFrom: '#00d6ff',
  ctaTo: '#12ffb0',
  ctaOn: '#04232b',
  darkPaper: '#000000',
  darkInk: '#f2f3f7',
  darkMuted: '#9aa0ad',
  darkPanel: '#131317',
  darkSurface: '#1c1c22',
}

// group/name, so Figma nests them in the style picker
const PAINTS = [
  ['Base/Paper', C.paper, 'The page, and the fill of every card.'],
  ['Base/Ink', C.ink, 'Body text. Pure black — the app has no grey text levels in light mode.'],
  ['Base/Surface', C.surface, 'The recessed fill under code blocks, nav items and step tracks.'],
  ['Base/Hairline', C.hairline, 'Every 1px rule and input outline.'],
  ['Base/Hairline lit', C.hairlineLit, 'The same rule, focused or raised.'],
  ['Base/Mark', C.mark, "The logo's own black. Warmer than text black so a solid mark does not vibrate on white."],
  ['Accent/Blue', C.blue, 'Links, the Action skill, the default lift.'],
  ['Accent/Violet', C.violet, 'Selection, the Analysis skill, the default card accent.'],
  ['Accent/Mint', C.mint, ''],
  ['Accent/Pink', C.pink, ''],
  ['Accent/Gold', C.gold, ''],
  ['Accent/Peach', C.peach, ''],
  ['Accent/Green', C.green, ''],
  ['Accent/Red', C.red, ''],
  ['Primary/Blue', C.pBlue, 'The saturated blue on the landing.'],
  ['Primary/Teal', C.pTeal, ''],
  ['Primary/Yellow', C.pYellow, ''],
  ['Primary/Orange', C.pOrange, ''],
  ['Status/OK', C.ok, ''],
  ['Status/Warning', C.warn, ''],
  ['Status/Error', C.err, ''],
  ['Status/Danger', C.danger, 'The outline and label of a destructive button.'],
  ['CTA/Gradient start', C.ctaFrom, ''],
  ['CTA/Gradient end', C.ctaTo, ''],
  ['CTA/On gradient', C.ctaOn, 'The only text colour legible on the CTA gradient.'],
  ['Dark/Paper', C.darkPaper, ''],
  ['Dark/Ink', C.darkInk, ''],
  ['Dark/Muted', C.darkMuted, ''],
  ['Dark/Panel', C.darkPanel, ''],
  ['Dark/Surface', C.darkSurface, ''],
]

/* -------------------------------------------------------------------- type */
// Outfit ships with Figma. 800 is ExtraBold, 900 is Black.
const FONTS = [
  { family: 'Outfit', style: 'Regular' },
  { family: 'Outfit', style: 'SemiBold' },
  { family: 'Outfit', style: 'ExtraBold' },
  { family: 'Outfit', style: 'Black' },
]

// name, style, size, line-height (multiplier), letter-spacing (%), note
const TEXTS = [
  ['Wordmark', 'Black', 27, 1.0, -2, 'The app name set as type · the access gate and the top bar.'],
  ['Title', 'ExtraBold', 19, 1.2, -1.5, 'One size for every card title and section heading, on every screen.'],
  ['Subtitle', 'ExtraBold', 17, 1.35, -0.5, ''],
  ['Body', 'Regular', 16, 1.6, 0, 'The document default.'],
  ['Lead', 'Regular', 13, 1.55, 0, 'The line under a title, and all secondary copy inside a card.'],
  ['Label', 'ExtraBold', 12.5, 1.4, 1, 'The caption above a field.'],
  ['Action', 'ExtraBold', 13, 1.2, 0, 'The link-like call to action at the foot of a card.'],
  ['Emphasis', 'SemiBold', 16, 1.6, 0, 'strong, b, skill names.'],
]

/* ----------------------------------------------------------------- shadows */
function drop(y, blur, spread, hex, a) {
  const c = rgb(hex)
  return {
    type: 'DROP_SHADOW',
    color: { r: c.r, g: c.g, b: c.b, a },
    offset: { x: 0, y },
    radius: blur,
    spread,
    visible: true,
    blendMode: 'NORMAL',
  }
}
const SHADOW_INK = '#1e193c' // rgba(30,25,60,…)
const EFFECTS = [
  ['Card', [drop(2, 10, 0, SHADOW_INK, 0.06), drop(12, 30, -22, SHADOW_INK, 0.5)],
    'The one card shadow. No card in the app carries a border as well.'],
  ['Card hover', [drop(4, 14, 0, SHADOW_INK, 0.08), drop(20, 40, -22, SHADOW_INK, 0.55)],
    'Paired with a 3px lift.'],
  ['Dialog', [drop(2, 10, 0, SHADOW_INK, 0.07), drop(30, 60, -34, SHADOW_INK, 0.6)], ''],
  ['Button', [drop(2, 8, -4, SHADOW_INK, 0.35)], ''],
]

const R = { control: 10, chip: 9, card: 16, dialog: 20, pill: 999 }

/* ------------------------------------------------------------- small build */
const F = (s) => ({ family: 'Outfit', style: s })

function text(chars, style, size, color, opts) {
  const t = figma.createText()
  t.fontName = F(style)
  t.characters = chars
  t.fontSize = size
  t.fills = solid(color)
  if (opts && opts.lh) t.lineHeight = { unit: 'PERCENT', value: opts.lh * 100 }
  if (opts && opts.ls) t.letterSpacing = { unit: 'PERCENT', value: opts.ls }
  if (opts && opts.w) { t.resize(opts.w, t.height); t.textAutoResize = 'HEIGHT' }
  return t
}

function stack(dir, gap, pad) {
  const f = figma.createFrame()
  f.layoutMode = dir
  f.itemSpacing = gap
  f.primaryAxisSizingMode = 'AUTO'
  f.counterAxisSizingMode = 'AUTO'
  const p = pad || [0, 0, 0, 0]
  f.paddingTop = p[0]; f.paddingRight = p[1]; f.paddingBottom = p[2]; f.paddingLeft = p[3]
  f.fills = []
  return f
}

// same as stack(), but the node is a component so it can be instanced
function comp(name, dir, gap, pad) {
  const c = figma.createComponent()
  c.name = name
  c.layoutMode = dir
  c.itemSpacing = gap
  c.primaryAxisSizingMode = 'AUTO'
  c.counterAxisSizingMode = 'AUTO'
  const p = pad || [0, 0, 0, 0]
  c.paddingTop = p[0]; c.paddingRight = p[1]; c.paddingBottom = p[2]; c.paddingLeft = p[3]
  c.fills = []
  return c
}

const ctaFill = {
  type: 'GRADIENT_LINEAR',
  // left to right across the node's own box
  gradientTransform: [[1, 0, 0], [0, 1, 0]],
  gradientStops: [
    { position: 0, color: Object.assign({ a: 1 }, rgb(C.ctaFrom)) },
    { position: 0.5, color: Object.assign({ a: 1 }, rgb(C.ctaTo)) },
    { position: 1, color: Object.assign({ a: 1 }, rgb(C.ctaFrom)) },
  ],
}

/* ------------------------------------------------------------------- main */
async function main() {
  for (const f of FONTS) {
    try {
      await figma.loadFontAsync(f)
    } catch (e) {
      figma.closePlugin(
        `Outfit ${f.style} is not available in this file. Enable the Outfit family ` +
        `(it is in Figma's own font list) and run the plugin again.`,
      )
      return
    }
  }

  const made = { paint: 0, text: 0, effect: 0, component: 0 }

  // ---- colour styles ------------------------------------------------------
  const paintByName = {}
  for (const [name, hex, note] of PAINTS) {
    const s = figma.createPaintStyle()
    s.name = name
    s.paints = solid(hex)
    if (note) s.description = note
    paintByName[name] = s
    made.paint++
  }
  // the CTA gradient is a style in its own right — it is the app's one gradient
  const grad = figma.createPaintStyle()
  grad.name = 'CTA/Gradient'
  grad.paints = [ctaFill]
  grad.description = 'Every primary call to action. Animated in the app; static here.'
  made.paint++

  // ---- text styles --------------------------------------------------------
  for (const [name, style, size, lh, ls, note] of TEXTS) {
    const s = figma.createTextStyle()
    s.name = `Text/${name}`
    s.fontName = F(style)
    s.fontSize = size
    s.lineHeight = { unit: 'PERCENT', value: lh * 100 }
    s.letterSpacing = { unit: 'PERCENT', value: ls }
    if (note) s.description = note
    made.text++
  }

  // ---- effect styles ------------------------------------------------------
  for (const [name, effects, note] of EFFECTS) {
    const s = figma.createEffectStyle()
    s.name = `Elevation/${name}`
    s.effects = effects
    if (note) s.description = note
    made.effect++
  }

  // ---- a page to put the components on ------------------------------------
  const page = figma.createPage()
  page.name = 'DojoBuro · components'
  const board = figma.createFrame()
  board.name = 'Components'
  board.layoutMode = 'VERTICAL'
  board.itemSpacing = 48
  board.paddingTop = 56; board.paddingBottom = 56; board.paddingLeft = 56; board.paddingRight = 56
  board.primaryAxisSizingMode = 'AUTO'
  board.counterAxisSizingMode = 'AUTO'
  board.fills = solid('#fafafa')
  page.appendChild(board)

  function section(title, note) {
    const s = stack('VERTICAL', 16)
    const h = stack('VERTICAL', 4)
    h.appendChild(text(title, 'ExtraBold', 19, C.ink, { ls: -1.5 }))
    if (note) h.appendChild(text(note, 'Regular', 13, '#6b6b76', { lh: 1.55, w: 640 }))
    s.appendChild(h)
    const row = stack('HORIZONTAL', 20)
    row.counterAxisAlignItems = 'CENTER'
    s.appendChild(row)
    board.appendChild(s)
    return row
  }

  const add = (row, node) => { row.appendChild(node); made.component++; return node }

  // ---- the mark -----------------------------------------------------------
  {
    const row = section('The mark', 'The icon is the artwork the app ships; the name is Outfit Black at -2% tracking. Never redraw either.')
    const icon = figma.createNodeFromSvg(ICON_SVG)
    icon.name = 'icon'
    icon.resize(96, 96)

    const c = comp('Logo / Lockup', 'HORIZONTAL', 27)
    c.counterAxisAlignItems = 'CENTER'
    c.appendChild(icon)
    c.appendChild(text('dojoburo', 'Black', 69, C.mark, { lh: 1, ls: -2 }))
    c.description = 'Icon and name side by side. Clear space on every side is one icon width.'
    add(row, c)

    const iconOnly = figma.createNodeFromSvg(ICON_SVG)
    iconOnly.name = 'icon'
    iconOnly.resize(96, 96)
    const c2 = comp('Logo / Icon', 'VERTICAL', 0)
    c2.appendChild(iconOnly)
    c2.description = 'The mark alone, for favicons, avatars and anywhere under 120px wide.'
    add(row, c2)
  }

  // ---- buttons ------------------------------------------------------------
  {
    const row = section('Buttons', 'One primary per screen. The gradient is reserved for it; everything else is an outline or a plain word.')

    const primary = comp('Button / Primary', 'HORIZONTAL', 8, [13, 22, 13, 22])
    primary.counterAxisAlignItems = 'CENTER'
    primary.cornerRadius = R.control
    primary.fills = [ctaFill]
    primary.effects = EFFECTS[3][1]
    primary.appendChild(text('Create your company', 'ExtraBold', 15, C.ctaOn))
    primary.description = 'The one action the screen exists for.'
    add(row, primary)

    const ghost = comp('Button / Ghost', 'HORIZONTAL', 8, [13, 22, 13, 22])
    ghost.counterAxisAlignItems = 'CENTER'
    ghost.cornerRadius = R.control
    ghost.fills = solid(C.paper)
    ghost.strokes = solid(C.hairline)
    ghost.strokeWeight = 1
    ghost.appendChild(text('Cancel', 'ExtraBold', 15, C.ink))
    ghost.description = 'Every secondary action, including the one next to a primary.'
    add(row, ghost)

    const danger = comp('Button / Danger', 'HORIZONTAL', 8, [13, 22, 13, 22])
    danger.counterAxisAlignItems = 'CENTER'
    danger.cornerRadius = R.control
    danger.fills = []
    danger.strokes = solid(C.danger, 0.45)
    danger.strokeWeight = 1
    danger.appendChild(text('Delete company', 'ExtraBold', 15, C.danger))
    danger.description = 'Outlined, never filled. A destructive action should not be the brightest thing on the screen.'
    add(row, danger)
  }

  // ---- input --------------------------------------------------------------
  {
    const row = section('Fields', 'A caption above, a 1px hairline around, 10px corners. Focus darkens the hairline to ink; it never adds a coloured ring.')

    const field = comp('Field / Text', 'VERTICAL', 7)
    field.counterAxisSizingMode = 'FIXED'
    field.resize(320, 10)
    field.appendChild(text('COMPANY NAME', 'ExtraBold', 12.5, '#6b6b76', { ls: 1 }))
    const box = stack('HORIZONTAL', 0, [11, 12, 11, 12])
    box.counterAxisSizingMode = 'FIXED'
    box.resize(320, 42)
    box.cornerRadius = R.control
    box.fills = solid(C.paper)
    box.strokes = solid(C.hairline)
    box.strokeWeight = 1
    box.appendChild(text('Acme Robotics', 'Regular', 16, C.ink))
    field.appendChild(box)
    field.description = 'The one field shape. Selects and textareas use it unchanged.'
    add(row, field)
  }

  // ---- card ---------------------------------------------------------------
  {
    const row = section('Card', 'White, 16px corners, one soft shadow. No border, no stripe along any edge, no coloured fill when selected — selection is a ring of shadow.')
    row.counterAxisAlignItems = 'MIN'

    function card(name, selected) {
      const c = comp(name, 'VERTICAL', 6, [20, 20, 20, 20])
      c.counterAxisSizingMode = 'FIXED'
      c.resize(260, 10)
      c.cornerRadius = R.card
      c.fills = solid(C.paper)
      c.effects = selected
        ? [
            { type: 'DROP_SHADOW', color: Object.assign({ a: 0.38 }, rgb(C.violet)), offset: { x: 0, y: 0 }, radius: 0, spread: 1.5, visible: true, blendMode: 'NORMAL' },
            drop(18, 38, -22, C.violet, 0.6),
          ]
        : EFFECTS[0][1]
      c.appendChild(text('Acme Robotics', 'ExtraBold', 19, C.ink, { lh: 1.2, ls: -1.5 }))
      c.appendChild(text('Four teammates · running since March', 'Regular', 13, '#6b6b76', { lh: 1.55, w: 220 }))
      const cta = text('Open now', 'ExtraBold', 13, C.ink)
      c.appendChild(cta)
      return c
    }
    add(row, card('Card / Rest', false)).description = 'The default. Hover lifts it 3px and deepens the same shadow.'
    add(row, card('Card / Selected', true)).description = 'Chosen. Still white — the state lives in the ring, never in a tint.'

    const empty = comp('Card / Empty', 'VERTICAL', 6, [20, 20, 20, 20])
    empty.counterAxisSizingMode = 'FIXED'
    empty.resize(260, 118)
    empty.primaryAxisAlignItems = 'CENTER'
    empty.counterAxisAlignItems = 'CENTER'
    empty.cornerRadius = R.card
    empty.fills = []
    empty.strokes = solid(C.hairline)
    empty.strokeWeight = 2
    empty.dashPattern = [6, 6]
    empty.appendChild(text('+', 'ExtraBold', 28, '#6b6b76'))
    empty.appendChild(text('Add a company', 'ExtraBold', 13, '#6b6b76'))
    empty.description = 'An invitation, not a thing you own — so it keeps an outline and takes no shadow.'
    add(row, empty)
  }

  // ---- chip and toast -----------------------------------------------------
  {
    const row = section('Chips and toasts', 'A chip labels; a toast reports. Both carry a close or a target — nothing in the app disappears on its own without a way to dismiss it.')

    const chip = comp('Chip', 'HORIZONTAL', 0, [3, 9, 3, 9])
    chip.cornerRadius = R.chip
    chip.fills = solid(C.violet)
    chip.appendChild(text('Analysis', 'SemiBold', 14, C.paper))
    chip.description = 'The skill or status label. The tint carries the meaning.'
    add(row, chip)

    const toast = comp('Toast', 'HORIZONTAL', 10, [10, 10, 10, 12])
    toast.counterAxisAlignItems = 'CENTER'
    toast.cornerRadius = R.chip
    toast.fills = solid(C.paper)
    toast.strokes = solid(C.hairlineLit)
    toast.strokeWeight = 1
    toast.effects = EFFECTS[0][1]
    const badge = stack('HORIZONTAL', 0, [6, 8, 6, 8])
    badge.cornerRadius = R.chip
    badge.fills = solid(C.ok)
    badge.appendChild(text('OK', 'SemiBold', 14, C.paper))
    toast.appendChild(badge)
    const body = stack('VERTICAL', 2)
    body.appendChild(text('Run finished', 'SemiBold', 16, C.ink))
    body.appendChild(text('Acme Robotics · 2 min', 'Regular', 16, '#6b6b76'))
    toast.appendChild(body)
    toast.appendChild(text('✕', 'Regular', 14, '#6b6b76'))
    toast.description = 'Always closable. The glyph is a multiplication sign, not an emoji — the app has none.'
    add(row, toast)
  }

  // ---- nav ----------------------------------------------------------------
  {
    const row = section('Navigation', 'A nav item is a word with a quiet fill when it is where you are. The active mark is a 2px inset rule in violet on the leading edge.')

    function nav(name, on) {
      const c = comp(name, 'HORIZONTAL', 0, [9, 12, 9, 12])
      c.counterAxisSizingMode = 'FIXED'
      c.resize(208, 38)
      c.cornerRadius = R.control
      c.fills = on ? solid(C.surface) : []
      if (on) c.effects = [{ type: 'INNER_SHADOW', color: Object.assign({ a: 1 }, rgb(C.violet)), offset: { x: 2, y: 0 }, radius: 0, spread: 0, visible: true, blendMode: 'NORMAL' }]
      c.appendChild(text('Billing', 'ExtraBold', 14, on ? C.ink : '#6b6b76'))
      return c
    }
    add(row, nav('Nav item / Rest', false))
    add(row, nav('Nav item / Active', true))
  }

  // ---- the dialog ---------------------------------------------------------
  {
    const row = section('Dialog', 'The widest shape in the system: 400px, 20px corners, a deeper shadow, and everything centred. The access gate is the reference build.')

    const c = comp('Dialog / Access gate', 'VERTICAL', 0, [40, 32, 32, 32])
    c.counterAxisSizingMode = 'FIXED'
    c.resize(400, 10)
    c.counterAxisAlignItems = 'CENTER'
    c.cornerRadius = R.dialog
    c.fills = solid(C.paper)
    c.effects = EFFECTS[2][1]

    const mark = figma.createNodeFromSvg(ICON_SVG)
    mark.name = 'icon'
    mark.resize(54, 54)
    c.appendChild(mark)

    const name = text('dojoburo', 'Black', 27, C.ink, { lh: 1, ls: -2 })
    c.appendChild(name)

    const title = text('Private access to Dojoburo Beta version', 'ExtraBold', 17, C.ink, { lh: 1.35, ls: -0.5, w: 250 })
    title.textAlignHorizontal = 'CENTER'
    c.appendChild(title)

    const lead = text('Enter the access code you were given.', 'Regular', 13.5, '#6b6b76', { w: 300 })
    lead.textAlignHorizontal = 'CENTER'
    c.appendChild(lead)

    const input = stack('HORIZONTAL', 0, [14, 16, 14, 16])
    input.counterAxisSizingMode = 'FIXED'
    input.primaryAxisAlignItems = 'CENTER'
    input.resize(336, 50)
    input.cornerRadius = 12
    input.fills = solid(C.paper)
    input.strokes = solid(C.hairline)
    input.strokeWeight = 1
    input.appendChild(text('Access code', 'Regular', 14, '#6b6b76'))
    c.appendChild(input)

    const go = stack('HORIZONTAL', 0, [14, 20, 14, 20])
    go.counterAxisSizingMode = 'FIXED'
    go.primaryAxisAlignItems = 'CENTER'
    go.resize(336, 48)
    go.cornerRadius = 12
    go.fills = [ctaFill]
    go.appendChild(text('Enter', 'ExtraBold', 15, C.ctaOn))
    c.appendChild(go)

    c.description = 'Reserve a line of height for the error message so a wrong code never makes the card jump.'
    add(row, c)
  }

  figma.currentPage = page
  figma.viewport.scrollAndZoomIntoView([board])
  figma.notify(
    `DojoBuro built · ${made.paint} colour styles, ${made.text} text styles, ` +
    `${made.effect} elevation styles, ${made.component} components.`,
    { timeout: 6000 },
  )
  figma.closePlugin()
}

main().catch((e) => figma.closePlugin('Could not build: ' + e.message))
