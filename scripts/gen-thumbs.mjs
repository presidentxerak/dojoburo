// Regenerate the dojo environment thumbnails (public/thumbs/<id>.jpg) by
// capturing the REAL 3D scene of each template. Run after changing any decor:
//
//   npm run thumbs
//
// It builds the app, serves the built bundle with `vite preview`, loads the
// office once per template with that template forced active, and clips a clean
// region of the 3D room. Requires Playwright's Chromium:
//   npx playwright install chromium
// In a sandbox with a preinstalled browser, point CHROMIUM_PATH at it, e.g.
//   CHROMIUM_PATH=/opt/pw-browsers/chromium npm run thumbs
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { mkdirSync } from 'node:fs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = resolve(ROOT, 'public/thumbs')
const PORT = Number(process.env.THUMBS_PORT || 4310)
const BASE = `http://localhost:${PORT}`

// Keep in sync with DOJO_TEMPLATES ids in src/data/templates.ts
const TEMPLATES = ['startup', 'dojo', 'space', 'lab', 'villa', 'castle', 'garden', 'factory', 'forest', 'wonderland']

// Clean crop of the 3D room (excludes the topbar, dock, side panel, Lazy widget).
const CLIP = { x: 150, y: 108, width: 560, height: 372 }

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url)
      if (r.ok) return true
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('dev server did not start in time')
}

function run(cmd, args) {
  return new Promise((res, rej) => {
    const p = spawn(cmd, args, { cwd: ROOT, stdio: ['ignore', 'ignore', 'inherit'], env: process.env })
    p.on('exit', (code) => (code === 0 ? res() : rej(new Error(`${cmd} ${args.join(' ')} exited ${code}`))))
    p.on('error', rej)
  })
}

async function main() {
  mkdirSync(OUT, { recursive: true })

  // Build once so `vite preview` serves fast, fully-compiled assets — capturing
  // from the dev server races its first-load compile and times out.
  console.log('▶ building…')
  await run(npm, ['run', 'build'])

  console.log(`▶ serving on ${PORT}…`)
  const server = spawn(npm, ['run', 'preview', '--', '--port', String(PORT), '--strictPort'], {
    cwd: ROOT,
    stdio: ['ignore', 'ignore', 'inherit'],
    env: process.env,
  })
  const stop = () => { try { server.kill('SIGTERM') } catch { /* already gone */ } }
  process.on('exit', stop)
  process.on('SIGINT', () => { stop(); process.exit(1) })

  try {
    await waitForServer(BASE)
    const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined })
    for (const id of TEMPLATES) {
      const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 1.5 })
      const page = await ctx.newPage()
      const payload = {
        account: { id: 't', name: 'T', handle: '', email: '', provider: 'guest', currency: 'XRP', avatarSkinId: 's_aoi' },
        dojos: [{ id: 'd1', name: id, template: id, agents: [] }],
        activeDojoId: 'd1',
      }
      await page.goto(`${BASE}/#app`, { waitUntil: 'domcontentloaded' })
      await page.evaluate((p) => localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(p)), payload)
      await page.reload({ waitUntil: 'domcontentloaded' })
      await page.waitForTimeout(3200) // let the scene + camera ease settle
      await page.screenshot({ path: resolve(OUT, `${id}.jpg`), type: 'jpeg', quality: 82, clip: CLIP })
      console.log(`  ✓ ${id}.jpg`)
      await ctx.close()
    }
    await browser.close()
    console.log('✓ done — thumbnails written to public/thumbs/')
  } finally {
    stop()
  }
}

main().catch((e) => {
  console.error('thumbs failed:', e.message)
  process.exit(1)
})
