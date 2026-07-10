// Rasterise the DojoBuro mark — the ascii face ◕‿◕ inside a black rounded
// rectangle — to PNG favicons. Same look in every context (black badge, white
// face), matching the in-app logo and the SVG favicon.
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const page = (px) => `<!doctype html><html><head><style>
  html,body{margin:0;padding:0;background:transparent}
  .badge{width:${px}px;height:${px}px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;
    background:#11151d;border-radius:${Math.round(px * 0.22)}px}
  .face{font-family:'Segoe UI Symbol','Noto Sans Symbols2','Apple Symbols',sans-serif;
    font-size:${Math.round(px * 0.44)}px;letter-spacing:${-px * 0.05}px;color:#ffffff;line-height:1}
</style></head><body><div class="badge"><span class="face">◕‿◕</span></div></body></html>`

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await browser.newPage()
for (const [name, px] of [['favicon-96.png', 96], ['apple-touch-icon.png', 180]]) {
  await p.setViewportSize({ width: px, height: px })
  await p.setContent(page(px), { waitUntil: 'networkidle' })
  const el = await p.$('.badge')
  const buf = await el.screenshot({ omitBackground: true })
  writeFileSync(join(OUT, name), buf)
  console.log('wrote', name, px + 'px', buf.length + 'b')
}
await browser.close()
