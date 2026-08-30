// Does the API still refuse a forged identity?
//
// /api/tool-data & friends used to trust `?privy=<did>` — a DID is an
// identifier, not a secret, so anyone who learned one could read and act in
// that person's connected apps. api/_lib/authz.ts now requires a signed Privy
// token. This signs real ES256 tokens against a stand-in JWKS and checks every
// way an attacker would try to get around it.
//
// Run: npm run test:authz
import crypto from 'node:crypto'
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' })
const { publicKey: otherPub, privateKey: otherPriv } = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' })
const jwk = { ...publicKey.export({ format: 'jwk' }), kid: 'k1', alg: 'ES256', use: 'sig' }

process.env.PRIVY_APP_ID = 'app_test_123'
const realFetch = globalThis.fetch
globalThis.fetch = async (u) => u.includes('jwks.json')
  ? new Response(JSON.stringify({ keys: [jwk] }), { headers: { 'content-type': 'application/json' } })
  : realFetch(u)

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
function sign(claims, { alg = 'ES256', kid = 'k1', key = privateKey } = {}) {
  const h = b64({ alg, kid, typ: 'JWT' }), p = b64(claims)
  const sig = crypto.sign('sha256', Buffer.from(`${h}.${p}`), { key, dsaEncoding: 'ieee-p1363' })
  return `${h}.${p}.${sig.toString('base64url')}`
}
const now = Math.floor(Date.now() / 1000)
const good = { sub: 'did:privy:alice', iss: 'privy.io', aud: 'app_test_123', exp: now + 600, iat: now }

const { build } = await import('/home/user/dojoburo/node_modules/esbuild/lib/main.js')
const out = await build({ entryPoints: ['/home/user/dojoburo/api/_lib/authz.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
const m = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'))

let fails = 0
const ok = (c, n) => { console.log((c ? 'ok    ' : 'FAIL  ') + n); if (!c) fails++ }
const req = (auth) => ({ headers: auth ? { authorization: `Bearer ${auth}` } : {} })

ok(await m.verifyPrivyToken(sign(good)) === 'did:privy:alice', 'a valid token yields its subject')
ok(await m.verifyPrivyToken(sign({ ...good, exp: now - 60 })) === null, 'expired token refused')
ok(await m.verifyPrivyToken(sign({ ...good, aud: 'someone_else' })) === null, 'wrong audience refused')
ok(await m.verifyPrivyToken(sign({ ...good, iss: 'evil.com' })) === null, 'wrong issuer refused')
ok(await m.verifyPrivyToken(sign(good, { key: otherPriv })) === null, 'token signed by another key refused')
ok(await m.verifyPrivyToken(sign(good, { alg: 'none' })) === null, 'alg:none refused')
{ // alg confusion: claim HS256 over the same bytes
  const h = b64({ alg: 'HS256', kid: 'k1', typ: 'JWT' }), p = b64(good)
  const sig = crypto.createHmac('sha256', 'secret').update(`${h}.${p}`).digest('base64url')
  ok(await m.verifyPrivyToken(`${h}.${p}.${sig}`) === null, 'HS256 downgrade refused')
}
{ // payload tampered after signing
  const t = sign(good).split('.'); t[1] = b64({ ...good, sub: 'did:privy:victim' })
  ok(await m.verifyPrivyToken(t.join('.')) === null, 'tampered subject refused')
}
ok(await m.verifyPrivyToken('') === null, 'empty token refused')
ok(await m.verifyPrivyToken('a.b.c') === null, 'garbage refused')

// identify() · the contract every endpoint relies on
const t = sign(good)
ok((await m.identify(req(t), { privy: 'did:privy:alice' })).privyDid === 'did:privy:alice', 'proven DID accepted')
ok((await m.identify(req(t), { privy: 'did:privy:victim' })).forged === true, 'proven token cannot claim a different DID')
ok((await m.identify(req(), { privy: 'did:privy:victim' })).forged === true, 'THE HOLE: a bare DID claim is now refused')
ok((await m.identify(req(), { client: 'guest-abc' })).clientRef === 'guest-abc', 'guests still work with no token')
ok((await m.identify(req(), {})).forged === false, 'anonymous requests are not forged, just anonymous')
ok(await m.callerRef(req(), { privy: 'did:privy:victim' }) === null, 'callerRef refuses an unproven DID')
ok((await m.callerRef(req(t), {}))?.privyDid === 'did:privy:alice', 'callerRef returns the verified DID')

console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
