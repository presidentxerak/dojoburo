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
    <circle cx="16" cy="3.4" r="0.9"/>
    <rect x="15.5" y="3.6" width="1" height="1.8"/>
    <path d="M10.6 8.4 Q11.8 5.6 16 5.9 Q20.2 5.6 21.4 8.4 Q16 7.5 10.6 8.4 Z"/>
    <rect x="10.2" y="8.2" width="11.6" height="1.4"/>
    <path d="M2 14.6 Q3.6 12.4 6.2 12.9 L7.4 10.8 L24.6 10.8 L25.8 12.9 Q28.4 12.4 30 14.6 L27.4 14 Q16 12.4 4.6 14 Z"/>
    <rect x="8" y="14" width="16" height="8" rx="0.6"/>
    <rect x="8.4" y="22" width="4" height="6"/>
    <rect x="19.6" y="22" width="4" height="6"/>
    <rect x="6" y="27.6" width="20" height="2" rx="0.5"/>
    <rect x="8.5" y="29.4" width="15" height="1.1"/>
  </g>
  <text fill="${f}" x="16" y="18" text-anchor="middle" dominant-baseline="central"
    font-size="5.6" letter-spacing="-0.4"
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
