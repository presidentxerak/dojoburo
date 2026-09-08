// A key the founder pastes is worth something · no database needed.
//
// Thirteen connectors sat at "no server entry" for months on the theory that
// they were waiting on the operator to register OAuth apps. They were not:
// every one of them is a key the founder already holds, and there was simply
// nowhere in the registry to describe one. This checks the mechanism that
// replaced that — the part a browser test cannot see, because it is all
// validation and none of it renders.
//
//   node scripts/test-keyconnectors.mjs
import { build } from 'esbuild'
import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = 'node_modules/.dojo-keys'
mkdirSync(OUT, { recursive: true })
const out = await build({
  entryPoints: ['api/_lib/connectors.ts'], bundle: true, format: 'esm', platform: 'node',
  write: false, logLevel: 'silent',
})
const f = join(OUT, 'connectors.mjs')
writeFileSync(f, out.outputFiles[0].text)
const C = await import(pathToFileURL(f).href)

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const KEYED = [
  'anthropic', 'perplexity', 'elevenlabs', 'posthog', 'supabase', 'klaviyo',
  'apollo', 'heygen', 'cloudinary', 'trello', 'ga4', 'wave', 'claude-code', 'ai-video',
]

/* ---- every key connector is describable ---------------------------------- */
for (const id of KEYED) {
  const c = C.serverConnector(id)
  ok(`${id} has a server entry`, !!c && !!c.token, c ? '' : 'missing')
}

/* ---- and available without anything from the operator -------------------- */
{
  // no *_CLIENT_ID or *_CLIENT_SECRET is set in this process
  const allAvailable = KEYED.every((id) => C.connectorAvailable(id))
  ok('a key connector is available with no operator setup', allAvailable,
    'there is no OAuth app to register · the founder brings the key')
  ok('an OAuth connector with no client id is NOT', !C.connectorAvailable('notion'),
    'that one genuinely does need the operator')
  ok('and an unknown id is not', !C.connectorAvailable('not-a-real-app'))
}

/* ---- validation refuses what cannot possibly work ------------------------ */
{
  const claude = C.serverConnector('anthropic').token
  ok('a real Claude key passes', claude.validate.test('sk-ant-api03-' + 'x'.repeat(40)))
  ok('a Perplexity key does not pass as a Claude key', !claude.validate.test('pplx-' + 'a'.repeat(30)),
    'pasting the wrong key in the wrong box is the commonest way this fails')
  ok('an empty string does not', !claude.validate.test(''))
  ok('a truncated paste does not', !claude.validate.test('sk-ant-abc'),
    'refused at the door rather than three days later on a run')

  const pplx = C.serverConnector('perplexity').token
  ok('a Perplexity key passes its own test', pplx.validate.test('pplx-' + 'a'.repeat(32)))
  ok('and a Claude key does not', !pplx.validate.test('sk-ant-api03-' + 'x'.repeat(40)))

  const tre = C.serverConnector('trello').token
  ok('Trello needs both halves', tre.validate.test('a'.repeat(32) + ':' + 'b'.repeat(64)))
  ok('and refuses just the key', !tre.validate.test('a'.repeat(32)),
    'half a credential is a support ticket, not a connection')

  const cl = C.serverConnector('cloudinary').token
  ok('Cloudinary takes its own URL form', cl.validate.test('cloudinary://123456789:abcDEF_ghi@my-cloud'))
  ok('and refuses a bare key', !cl.validate.test('abcDEF_ghi'))
}

/* ---- the hint is safe to store and to show ------------------------------- */
{
  const secret = 'sk-ant-api03-' + 'S'.repeat(36) + 'Z9Q4'
  const hint = C.serverConnector('anthropic').token.hint(secret)
  ok('the hint keeps only the last four', hint === 'sk-ant-…Z9Q4', hint)
  ok('and never contains the key', !hint.includes(secret) && hint.length < 20)

  const cloud = C.serverConnector('cloudinary').token.hint('cloudinary://123:supersecret@my-cloud')
  ok('a Cloudinary hint drops the secret and keeps the cloud', cloud === 'cloudinary://…@my-cloud', cloud)
  ok('and the secret is not in it', !cloud.includes('supersecret'))

  for (const id of KEYED) {
    const t = C.serverConnector(id).token
    const sample = id === 'cloudinary' ? 'cloudinary://1:secretsecret@cloud'
      : id === 'trello' ? 'a'.repeat(32) + ':' + 'b'.repeat(64)
      : 'sk-ant-api03-' + 'q'.repeat(40)
    const h = t.hint(sample)
    if (!(typeof h === 'string' && h.length > 0 && h.length <= 40 && !h.includes(sample))) {
      ok(`${id} produces a safe hint`, false, JSON.stringify(h))
    }
  }
  ok('every key connector produces a safe hint', true)
}

/* ---- the key travels the way the provider expects ------------------------ */
{
  const h = C.serverConnector('elevenlabs').token.header('KEY123')
  ok('ElevenLabs gets xi-api-key', h['xi-api-key'] === 'KEY123',
    'the same header api/tts.ts already works with')

  const k = C.serverConnector('klaviyo').token.header('pk_abc')
  ok('Klaviyo gets its own scheme', k.authorization === 'Klaviyo-API-Key pk_abc')
  ok('and a pinned API revision', !!k.revision, 'an unpinned Klaviyo call breaks on their next release')

  const p = C.serverConnector('perplexity').token.header('pplx-x')
  ok('Perplexity gets a bearer token', p.authorization === 'Bearer pplx-x')

  for (const id of KEYED) {
    const hh = C.serverConnector(id).token.header('SECRET')
    const leaks = Object.keys(hh).some((k2) => /^(cookie|host)$/i.test(k2))
    if (leaks) ok(`${id} sends a sane header set`, false, JSON.stringify(Object.keys(hh)))
  }
  ok('no connector smuggles the key into a reserved header', true)
}

/* ---- a key connector has no refresh flow -------------------------------- */
{
  const r = await C.refreshOAuthToken(C.serverConnector('perplexity'), 'whatever')
  ok('refreshing a key connector returns null rather than calling out', r === null,
    'the key IS the credential · it does not expire until it is revoked')
}

/* ---- and the OAuth side still works ------------------------------------- */
{
  ok('an OAuth connector still reports itself as one', !C.isTokenConnector('notion'))
  ok('a key connector says so', C.isTokenConnector('perplexity'))
  ok('notion still has its authorize URL', !!C.serverConnector('notion').oauth?.authorizeUrl)
  ok('and no token config', !C.serverConnector('notion').token)
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
