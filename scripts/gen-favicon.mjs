// Rasterise the DojoBuro mark — the literal kawaii face ◕‿◕ — to PNG favicons.
// No background (transparent). favicon-96 uses the dark (light-mode) face; the
// apple-touch icon uses a white face so it stays visible on iOS's opaque tile.
// The SVG favicon flips with the OS theme via a media query; PNGs are static.
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const page = (px, color) => `<!doctype html><html><head><style>
  html,body{margin:0;padding:0}
  .mark{width:${px}px;height:${px}px;display:flex;align-items:center;justify-content:center;
    font-family:'Segoe UI Symbol','Noto Sans Symbols2','Apple Symbols',sans-serif;
    font-size:${Math.round(px * 0.5)}px;letter-spacing:${-px * 0.045}px;color:${color};line-height:1}
</style></head><body><div class="mark">◕‿◕</div></body></html>`

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await browser.newPage()
for (const [name, px, color] of [['favicon-96.png', 96, '#14141a'], ['apple-touch-icon.png', 180, '#ffffff']]) {
  await p.setViewportSize({ width: px, height: px })
  await p.setContent(page(px, color), { waitUntil: 'networkidle' })
  const el = await p.$('.mark')
  const buf = await el.screenshot({ omitBackground: true })
  writeFileSync(join(OUT, name), buf)
  console.log('wrote', name, px + 'px', color, buf.length + 'b')
}
await browser.close()
