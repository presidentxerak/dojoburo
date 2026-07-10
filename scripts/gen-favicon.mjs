// Rasterise the DojoBuro mark (◕‿◕) to PNG favicons in the light-mode palette:
// a white rounded square with a dark face. The SVG favicon flips with the OS
// theme via a media query, but PNGs are static, so we bake the light look.
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

// Full-bleed square (no inset) so iOS's own rounded mask has clean edges.
const svg = (px) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${px}" height="${px}">
  <rect x="0" y="0" width="32" height="32" rx="6" fill="#ffffff"/>
  <ellipse cx="11.2" cy="15" rx="2.7" ry="3.1" fill="#14141a"/>
  <ellipse cx="20.8" cy="15" rx="2.7" ry="3.1" fill="#14141a"/>
  <circle cx="12.3" cy="13.9" r="1" fill="#ffffff"/>
  <circle cx="21.9" cy="13.9" r="1" fill="#ffffff"/>
  <path d="M10.6 20.6 Q16 24.8 21.4 20.6" fill="none" stroke="#14141a" stroke-width="2.1" stroke-linecap="round"/>
</svg>`

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const page = await browser.newPage()
for (const [name, px] of [['favicon-96.png', 96], ['apple-touch-icon.png', 180]]) {
  await page.setViewportSize({ width: px, height: px })
  await page.setContent(
    `<body style="margin:0">${svg(px)}</body>`,
    { waitUntil: 'networkidle' },
  )
  const el = await page.$('svg')
  const buf = await el.screenshot({ omitBackground: true })
  writeFileSync(join(OUT, name), buf)
  console.log('wrote', name, px + 'px', buf.length + 'b')
}
await browser.close()
