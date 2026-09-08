// Stripe signature verification (Web Crypto), on its own.
//
// This is the one thing standing between a public URL and somebody writing a
// paid plan onto a company for free, so it is tested as pure logic: a real
// HMAC, a tampered body, the wrong secret, a replayed timestamp.
//
// The fiat→XRP half of this file went with api/_lib/fx.ts. It converted a
// charge into a settlement amount for a rail the app no longer uses, and no
// handler had imported it for months — a passing test for a function nothing
// calls is worse than none, because it reads as coverage.
//
// Run: node --experimental-strip-types scripts/test-webhook-lib.mjs
import { verifyStripeEvent } from '../api/_lib/stripe.ts'

let pass = 0, fail = 0
const ok = (c, m) => (c ? (pass++, console.log('✓', m)) : (fail++, console.log('✗', m)))

// --- build a real Stripe-style signature ---
const SECRET = 'whsec_test_secret_123'
const enc = new TextEncoder()
async function sign(payload, t) {
  const key = await crypto.subtle.importKey('raw', enc.encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(`${t}.${payload}`))
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const body = JSON.stringify({ id: 'evt_1', type: 'checkout.session.completed', data: { object: { id: 'cs_1', metadata: { fiat_amount: '25', fiat_currency: 'USD' } } } })
const now = Math.floor(Date.now() / 1000)

// 1. valid signature within tolerance
const goodSig = await sign(body, now)
const evt = await verifyStripeEvent(body, `t=${now},v1=${goodSig}`, SECRET)
ok(evt && evt.id === 'evt_1' && evt.type === 'checkout.session.completed', 'valid signature accepted + parsed')

// 2. tampered body rejected
const tampered = body.replace('25', '9999')
ok((await verifyStripeEvent(tampered, `t=${now},v1=${goodSig}`, SECRET)) === null, 'tampered body rejected')

// 3. wrong secret rejected
ok((await verifyStripeEvent(body, `t=${now},v1=${goodSig}`, 'whsec_wrong')) === null, 'wrong secret rejected')

// 4. stale timestamp (10 min old) rejected
const oldT = now - 600
const oldSig = await sign(body, oldT)
ok((await verifyStripeEvent(body, `t=${oldT},v1=${oldSig}`, SECRET)) === null, 'stale timestamp rejected (replay guard)')

// 5. missing header rejected
ok((await verifyStripeEvent(body, null, SECRET)) === null, 'missing header rejected')

// 6. malformed header rejected
ok((await verifyStripeEvent(body, 'garbage', SECRET)) === null, 'malformed header rejected')

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
