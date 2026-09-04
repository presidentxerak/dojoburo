// Captures the 3D teammates and 3D icons for the brand guidelines.
//
// WebGL cannot be printed — the app's own stylesheet hides every canvas in
// print media for exactly that reason — so the guidelines cannot embed a live
// scene. They embed a photograph of one, taken here.
//
// The point is that it is a photograph of the REAL thing: brand/render/agents.tsx
// mounts the app's own TeammateCard and Object3DInline against the app's own
// stylesheet, so nothing in the document is a redraw that can drift. This
// starts the dev server, waits for the scenes to actually finish drawing rather
// than for a fixed delay, and writes one PNG per block at 3x.
//
// Run from the repo root:  node brand/render-3d.mjs
import { chromium } from 'playwright'
import { spawn, spawnSync } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')
const OUT = join(HERE, 'render')
mkdirSync(OUT, { recursive: true })
const PORT = 5183

/* ------------------------------------------------------------- dev server */
const vite = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], {
  cwd: ROOT,
  stdio: ['ignore', 'pipe', 'pipe'],
})
const stop = () => { try { vite.kill('SIGTERM') } catch { /* already gone */ } }
process.on('exit', stop)
process.on('SIGINT', () => { stop(); process.exit(130) })

await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('vite did not come up within 60s')), 60_000)
  vite.stdout.on('data', (d) => {
    if (d.toString().includes('Local:')) { clearTimeout(t); resolve() }
  })
  vite.on('exit', (c) => { clearTimeout(t); reject(new Error(`vite exited with ${c}`)) })
})

/* ----------------------------------------------------------------- capture */
// Headless Chromium has no GPU here, so WebGL runs on SwiftShader. It is slow
// (a frame costs tens of milliseconds instead of one) but it is correct, and
// these are stills.
const br = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const p = await br.newPage({ viewport: { width: 1500, height: 2200 }, deviceScaleFactor: 3 })

const errors = []
p.on('pageerror', (e) => errors.push(e.message))

await p.goto(`http://localhost:${PORT}/brand/render/agents.html`, { waitUntil: 'load' })
await p.evaluate(() => document.fonts.ready)

// Every block must have mounted a canvas, and every canvas must have drawn
// something. A canvas that is present but blank is the failure mode worth
// catching: it produces a page of empty white boxes that still looks plausible
// in a thumbnail.
await p.waitForFunction(
  () => {
    const blocks = [...document.querySelectorAll('[data-shot]')]
    if (!blocks.length) return false
    return blocks.every((b) => {
      const cs = [...b.querySelectorAll('canvas')]
      return cs.length > 0 && cs.every((c) => c.width > 0 && c.height > 0)
    })
  },
  null,
  { timeout: 90_000 },
)

// Let the idle animations settle into a pose, then confirm the pixels are not
// blank before writing anything.
await p.waitForTimeout(4000)

const shots = await p.$$('[data-shot]')
const made = []
for (const s of shots) {
  const name = await s.getAttribute('data-shot')
  const png = await s.screenshot({ type: 'png' })
  const box = await s.boundingBox()
  writeFileSync(join(OUT, `${name}.png`), png)
  made.push({ name, w: Math.round(box.width), h: Math.round(box.height) })
}

await br.close()
stop()

if (errors.length) {
  console.error('FAIL  the capture sheet threw:')
  for (const e of errors) console.error('      ' + e)
  process.exit(1)
}

// A canvas that mounted but drew nothing yields a capture of empty white boxes
// — a failure that still looks plausible as a thumbnail, and the one worth
// catching. Reading the pixels back out of WebGL does not work (the drawing
// buffer is cleared once the frame is composited, so it reports blank even when
// the picture is fine), so the check is on the written PNG instead: a capture
// carrying real 3D has hundreds of distinct colours, a blank one has a handful.
const check = spawnSync('python3', [join(HERE, 'check-captures.py'), OUT], { encoding: 'utf8' })
process.stdout.write(check.stdout || '')
if (check.status !== 0) {
  process.stderr.write(check.stderr || '')
  process.exit(1)
}

for (const m of made) console.log(`${(m.name + '.png').padEnd(26)} ${m.w} x ${m.h} css px, captured at 3x`)
console.log(`\n${made.length} captures written to brand/render`)
