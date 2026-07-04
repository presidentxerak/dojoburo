// Unit tests for the settlement webhook's pure logic: Stripe signature
// verification (Web Crypto) and fiat→XRP conversion (fallback path).
// Run: node --experimental-strip-types scripts/test-webhook-lib.mjs
import { verifyStripeEvent } from '../api/_lib/stripe.ts'
import { fiatToXrp, pricePerXrp } from '../api/_lib/fx.ts'

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

// --- FX fallback path (no XRP_PRICE_URL) ---
delete process.env.XRP_PRICE_URL
ok((await pricePerXrp('USD')) === 2.5, 'USD fallback rate = 2.5/XRP')
ok((await fiatToXrp(25, 'USD')) === 10, '$25 → 10 XRP')
ok((await fiatToXrp(2300, 'JPY')) === Math.round((2300 / 380) * 1e6) / 1e6, '¥2300 → correct XRP (6dp)')
let threw = false
try { await pricePerXrp('GBP') } catch { threw = true }
ok(threw, 'unsupported currency throws')

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
