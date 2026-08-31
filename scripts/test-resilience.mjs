// The values that reach the display layer come off an account saved in this
// browser, possibly by a build that no longer exists. One of them — a currency
// code of "XRP", from when the app settled on a ledger — indexed a table that
// no longer has that row, read .perXrp off undefined, and threw during render.
// React unmounts a tree that throws, so the page went white with no way back,
// and reloading landed in the same place because the value was saved.
//
// A price label is not worth an app. These assert that the display layer
// tolerates anything, so that failure mode cannot come back.
import { fileURLToPath } from 'node:url'
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const root = fileURLToPath(new URL('..', import.meta.url))
const esbuild = await import('esbuild')

const out = join(mkdtempSync(join(tmpdir(), 'resil-')), 'currency.mjs')
await esbuild.build({
  entryPoints: [join(root, 'src/data/currency.ts')],
  bundle: true, format: 'esm', outfile: out, logLevel: 'silent',
})
const { formatFrom, toXrp, currencyDef, CURRENCIES } = await import(out)

let fails = 0
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++ }

const JUNK = ['XRP', 'GBP', '', 'usd', null, undefined, 0, {}, [], NaN, 'Ξ']
for (const code of JUNK) {
  const label = JSON.stringify(code)
  let threw = null
  let text = ''
  try { text = formatFrom(12, code) } catch (e) { threw = e }
  ok(!threw, `formatFrom survives a currency of ${label}` + (threw ? ` · ${threw.message}` : ` · ${text}`))
  threw = null
  try { toXrp(12, code) } catch (e) { threw = e }
  ok(!threw, `toXrp survives a currency of ${label}` + (threw ? ` · ${threw.message}` : ''))
  ok(!!currencyDef(code)?.perXrp, `and it still resolves to a real currency for ${label}`)
}

// junk amounts must not produce "NaN" on a price tag either
for (const amount of [NaN, undefined, null, Infinity, 'x']) {
  const t = formatFrom(amount, 'USD')
  ok(!/NaN|Infinity|undefined/.test(t), `a price of ${JSON.stringify(amount)} reads as ${t}`)
}

// the three real currencies still behave
for (const c of Object.keys(CURRENCIES)) {
  ok(formatFrom(1, c).length > 1, `${c} still formats · ${formatFrom(1, c)}`)
}

console.log(fails ? `\n${fails} FAILED` : '\nresilience · ok')
process.exit(fails ? 1 : 0)
