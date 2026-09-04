// Chromium is the rasteriser here: no inkscape, no imagemagick, no cairo. It
// renders each SVG at its own pixel size times a scale, so the PNG is the SVG
// rather than an approximation of it.
import { chromium } from 'playwright'
import { readdirSync, readFileSync, mkdirSync } from 'node:fs'
import { join, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const SVG = join(HERE, 'logo')
const PNG = join(HERE, 'logo')
mkdirSync(PNG, { recursive: true })

const SCALES = [1, 2, 3] // @1x for the web, @2x/@3x for screens and print
const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })

for (const f of readdirSync(SVG).filter((n) => n.endsWith('.svg'))) {
  const src = readFileSync(join(SVG, f), 'utf8')
  const w = +src.match(/width="(\d+)"/)[1]
  const h = +src.match(/height="(\d+)"/)[1]
  for (const s of SCALES) {
    const p = await br.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: s })
    await p.setContent(
      `<style>html,body{margin:0;padding:0}svg{display:block}</style>${src}`,
      { waitUntil: 'load' },
    )
    const name = basename(f, '.svg') + (s === 1 ? '' : `@${s}x`) + '.png'
    await p.screenshot({ path: join(PNG, name), omitBackground: false })
    await p.close()
    if (s === 1) console.log(`${name.padEnd(38)} ${w}x${h}`)
  }
}
await br.close()
console.log('\nPNG written at @1x, @2x and @3x')
