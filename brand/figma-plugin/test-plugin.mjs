// A stand-in for Figma, so the plugin is run before it is handed over.
//
// A mock cannot tell you the layout looks right — only Figma can. What it does
// catch is the class of bug that would otherwise show up as a red banner in
// front of the user: a node used before it exists, a font asked for after the
// text was set, a property spelled wrong on a node that does not have it, a
// closePlugin() reached down an error path. Every node here has a fixed shape,
// so assigning a field it does not own throws.
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const HERE = dirname(fileURLToPath(import.meta.url))
const loaded = new Set()
const log = { paint: 0, text: 0, effect: 0, component: 0, pages: [], notices: [], closed: null }

const fail = (m) => { throw new Error(m) }

// only the properties Figma actually puts on these nodes
const FRAME_PROPS = [
  'name', 'layoutMode', 'itemSpacing', 'primaryAxisSizingMode', 'counterAxisSizingMode',
  'primaryAxisAlignItems', 'counterAxisAlignItems', 'paddingTop', 'paddingRight',
  'paddingBottom', 'paddingLeft', 'fills', 'strokes', 'strokeWeight', 'dashPattern',
  'cornerRadius', 'effects', 'description', 'x', 'y',
]
const TEXT_PROPS = [
  'name', 'fontName', 'characters', 'fontSize', 'fills', 'lineHeight', 'letterSpacing',
  'textAutoResize', 'textAlignHorizontal', 'x', 'y',
]

function node(kind, props) {
  const self = {
    __kind: kind,
    children: [],
    width: 100,
    height: 100,
    appendChild(c) {
      if (!c || !c.__kind) fail(`${kind}.appendChild got ${c === undefined ? 'undefined' : String(c)}`)
      self.children.push(c)
    },
    resize(w, h) {
      if (typeof w !== 'number' || typeof h !== 'number') fail(`${kind}.resize(${w}, ${h})`)
      self.width = w; self.height = h
    },
  }
  return new Proxy(self, {
    set(t, k, v) {
      if (typeof k === 'string' && !props.includes(k) && !(k in t)) {
        fail(`${kind} has no property "${k}" — Figma would ignore it silently`)
      }
      if (k === 'characters' && !loaded.has(`${t.fontName?.family}/${t.fontName?.style}`)) {
        fail(`text set before loadFontAsync(${JSON.stringify(t.fontName)})`)
      }
      t[k] = v
      return true
    },
  })
}

const style = (bucket, props) => {
  log[bucket]++
  return node(bucket + 'Style', props)
}

const figma = {
  createFrame: () => node('FrameNode', FRAME_PROPS),
  createComponent: () => { log.component++; return node('ComponentNode', FRAME_PROPS) },
  createText: () => node('TextNode', TEXT_PROPS),
  createRectangle: () => node('RectangleNode', FRAME_PROPS),
  createPage: () => { const p = node('PageNode', ['name']); log.pages.push(p); return p },
  createNodeFromSvg: (svg) => {
    if (typeof svg !== 'string' || !svg.startsWith('<svg')) fail('createNodeFromSvg got something that is not an SVG')
    return node('FrameNode', FRAME_PROPS)
  },
  createPaintStyle: () => style('paint', ['name', 'paints', 'description']),
  createTextStyle: () => style('text', ['name', 'fontName', 'fontSize', 'lineHeight', 'letterSpacing', 'description']),
  createEffectStyle: () => style('effect', ['name', 'effects', 'description']),
  loadFontAsync: async (f) => {
    if (f.family !== 'Outfit') fail(`asked for a font outside the system: ${f.family}`)
    loaded.add(`${f.family}/${f.style}`)
  },
  notify: (m) => log.notices.push(m),
  closePlugin: (m) => { log.closed = m === undefined ? '' : m },
  viewport: { scrollAndZoomIntoView: () => {} },
  get currentPage() { return log.pages[log.pages.length - 1] },
  set currentPage(p) { if (!p || p.__kind !== 'PageNode') fail('currentPage set to something that is not a page') },
}

const code = readFileSync(join(HERE, 'code.js'), 'utf8')
vm.runInNewContext(code, { figma, console, Object, JSON, parseInt, Math, Error, Promise })
await new Promise((r) => setImmediate(r))

const problems = []
if (log.closed) problems.push(`the plugin closed with an error: ${log.closed}`)
if (log.paint !== 31) problems.push(`expected 31 colour styles, built ${log.paint}`)
if (log.text !== 8) problems.push(`expected 8 text styles, built ${log.text}`)
if (log.effect !== 4) problems.push(`expected 4 elevation styles, built ${log.effect}`)
if (log.component < 14) problems.push(`expected at least 14 components, built ${log.component}`)
if (log.pages.length !== 1) problems.push(`expected one new page, made ${log.pages.length}`)
if (log.notices.length !== 1) problems.push(`expected one summary notice, got ${log.notices.length}`)

if (problems.length) {
  for (const p of problems) console.error('FAIL  ' + p)
  process.exit(1)
}
console.log(`PASS  ${log.paint} colour, ${log.text} text, ${log.effect} elevation styles · ${log.component} components on 1 page`)
console.log('      ' + log.notices[0])
