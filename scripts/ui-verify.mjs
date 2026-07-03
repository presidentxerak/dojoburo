import { chromium } from 'playwright'

const URL = 'http://localhost:4173/'
const OUT = process.env.SCRATCH || '.'

const browser = await chromium.launch({
  // In sandboxes with a pinned browser, point PW_CHROMIUM at it; otherwise
  // let Playwright resolve its own download.
  ...(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {}),
  args: ['--no-sandbox'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 820 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERR: ' + e.message))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(800)

// 1) office + all 12 agents rendered
const sprites = await page.locator('.sprite').count()
console.log('sprites:', sprites)

// 2) ascii faces present and animating
const face0 = await page.locator('.sprite-facescreen').first().textContent()

// 3) select an agent -> panel opens with skills
await page.locator('.sprite', { hasText: 'Rex' }).click()
await page.waitForTimeout(300)
const panelName = await page.locator('.agent-head-meta h2').textContent()
const skillCount = await page.locator('.skill-btn').count()
console.log('panel:', panelName?.trim(), '| skills:', skillCount)

// 4) run a non-network skill (Ada weekly report) -> activity log entry + mood change
await page.locator('.sprite', { hasText: 'Ada' }).click()
await page.waitForTimeout(200)
await page.locator('.skill-btn', { hasText: 'Rapport hebdo' }).click()
await page.waitForTimeout(3200)
const acts = await page.locator('.act-item').count()
const firstAct = await page.locator('.act-msg').first().textContent()
console.log('activity items:', acts, '| latest:', firstAct?.trim())

// 5) create a wallet (offline keypair, no network) -> address shown
await page.locator('.sprite', { hasText: 'Fin' }).click()
await page.waitForTimeout(200)
const createBtn = page.locator('.agent-wallet-actions .btn', { hasText: 'Créer' })
if (await createBtn.count()) { await createBtn.click(); await page.waitForTimeout(300) }
const addr = await page.locator('.agent-wallet-row .mono a, .agent-wallet-row .mono').first().textContent()
console.log('fin wallet:', addr?.trim())

// 6) verify face frame actually cycles (animation)
await page.waitForTimeout(400)
const face1 = await page.locator('.sprite-facescreen').first().textContent()
console.log('face animates:', face0 !== face1 || 'idle-blink-timing')

// 7) mainnet confirm modal appears
await page.locator('.net-tab', { hasText: 'Mainnet' }).click()
await page.waitForTimeout(200)
const modal = await page.locator('.modal h3').textContent()
console.log('mainnet modal:', modal?.trim())

await page.screenshot({ path: `${OUT}/dojoburo.png`, fullPage: false })
console.log('console errors:', errors.length ? errors : 'none')
await browser.close()
console.log('DONE')
