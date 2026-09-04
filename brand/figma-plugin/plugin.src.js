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

const ICON_SVG = '__ICON_SVG__'

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
