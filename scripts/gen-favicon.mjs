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
    <rect x="15.4" y="2.6" width="1.2" height="2.9"/>
    <circle cx="16" cy="2.4" r="0.85"/>
    <path d="M12.4 6.4 L19.6 6.4 L21.6 8.8 Q16 9.7 10.4 8.8 Z"/>
    <rect x="14" y="8.4" width="4" height="2.4"/>
    <path d="M10 10.6 L22 10.6 L24.4 13.4 Q16 14.5 7.6 13.4 Z"/>
    <rect x="12.5" y="13" width="7" height="2.6"/>
    <path d="M7.5 15.4 L24.5 15.4 L27.6 18.7 Q16 20.1 4.4 18.7 Z"/>
    <rect x="7" y="18.2" width="18" height="8.4" rx="0.8"/>
    <rect x="4.5" y="26" width="23" height="2.8" rx="0.6"/>
    <rect x="9.5" y="28.4" width="13" height="1.4"/>
  </g>
  <text fill="${f}" x="16" y="22.6" text-anchor="middle" dominant-baseline="central"
    font-size="6.4" letter-spacing="-0.5"
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
