// Rasterise the DojoBuro mark — a black Japanese pagoda-temple silhouette
// (ombre chinoise) with the ascii face ◕‿◕ on its main hall — to PNG favicons.
// favicon-96: transparent, black temple + white face. apple-touch: on a white
// rounded tile so the black silhouette stays visible on iOS home screens.
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const temple = (t, f) => `
  <g fill="${t}">
    <circle cx="16" cy="4.2" r="1"/>
    <rect x="15.4" y="4.6" width="1.2" height="2.6"/>
    <path d="M16 6.6 C 21 8 26.6 11.8 30 16.6 L 25.4 16.6 Q 16 12.4 6.6 16.6 L 2 16.6 C 5.4 11.8 11 8 16 6.6 Z"/>
    <rect x="8.6" y="16.6" width="14.8" height="9" rx="0.8"/>
    <rect x="6" y="25.6" width="20" height="2.4" rx="0.8"/>
  </g>
  <text fill="${f}" x="16" y="21.4" text-anchor="middle" dominant-baseline="central"
    font-size="5.4" letter-spacing="-0.4"
    font-family="'Segoe UI Symbol','Noto Sans Symbols2','Apple Symbols',sans-serif">◕‿◕</text>`

const page = (px, tile) => `<!doctype html><html><head><style>
  html,body{margin:0;padding:0;background:transparent}
  .wrap{width:${px}px;height:${px}px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;
    ${tile ? `background:#ffffff;border-radius:${Math.round(px * 0.22)}px;padding:${Math.round(px * 0.08)}px;` : ''}}
</style></head><body><div class="wrap">
  <svg viewBox="0 0 32 32" width="100%" height="100%">${temple('#11151d', '#ffffff')}</svg>
</div></body></html>`

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await browser.newPage()
for (const [name, px, tile] of [['favicon-96.png', 96, false], ['apple-touch-icon.png', 180, true]]) {
  await p.setViewportSize({ width: px, height: px })
  await p.setContent(page(px, tile), { waitUntil: 'networkidle' })
  const el = await p.$('.wrap')
  const buf = await el.screenshot({ omitBackground: !tile })
  writeFileSync(join(OUT, name), buf)
  console.log('wrote', name, px + 'px', buf.length + 'b')
}
await browser.close()
