// LA SÉCURITÉ ET L'ANTI-ASPIRATION · vérifiées sans réseau.
//
// Demandé : « Vérifie la cyber sécurité et l'anti hacking et scraping de
// données ». Ce que cette garde tient :
//   · les en-têtes de sécurité du site (CSP stricte, HSTS, pas d'iframe) ;
//   · les pages privées hors des moteurs (robots.txt ET X-Robots-Tag) ;
//   · l'anti-aspiration : les automates déclarés refusés, les lectures de la
//     communauté plafonnées par minute ET par heure, l'annuaire des membres
//     fermé au-delà de la première page pour un anonyme ;
//   · aucun relais public sans plafond (domain, fonts) ;
//   · aucune clé secrète écrite dans le code.
//
//   node scripts/test-security.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-security'
mkdirSync(OUT, { recursive: true })
const r = await build({ entryPoints: ['api/_lib/scrapers.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
writeFileSync(join(OUT, 'scrapers.mjs'), r.outputFiles[0].text)
const S = await import(pathToFileURL(join(OUT, 'scrapers.mjs')).href)

/* --- 1 · les en-têtes ---------------------------------------------------- */
const V = JSON.parse(readFileSync('vercel.json', 'utf8'))
const all = V.headers.find((h) => h.source === '/(.*)')?.headers ?? []
const h = (k) => all.find((x) => x.key === k)?.value ?? ''
ok('une CSP sans script en ligne ni eval', /script-src 'self'/.test(h('Content-Security-Policy')) && !/script-src[^;]*'unsafe-(inline|eval)'/.test(h('Content-Security-Policy')))
ok('aucune page ne s\'affiche dans une iframe étrangère', h('X-Frame-Options') === 'DENY' && /frame-ancestors 'none'/.test(h('Content-Security-Policy')))
ok('HTTPS imposé (HSTS deux ans)', /max-age=63072000/.test(h('Strict-Transport-Security')))
ok('pas de devinette de type', h('X-Content-Type-Options') === 'nosniff')
for (const p of ['/profil', '/merci', '/clan/messages/(.*)', '/clan/m/(.*)']) {
  const e = V.headers.find((x) => x.source === p)
  ok(`« ${p} » n'est pas indexée`, !!e && e.headers.some((x) => x.key === 'X-Robots-Tag' && /noindex/.test(x.value)))
}

/* --- 2 · robots.txt ------------------------------------------------------ */
const R = readFileSync('public/robots.txt', 'utf8')
ok('les pages privées sont fermées aux robots', ['/profil', '/merci', '/clan/messages', '/clan/m/', '/api/'].every((p) => R.includes(`Disallow: ${p}`)))
ok('les robots d\'entraînement sont refusés', /User-agent: GPTBot[\s\S]*?Disallow: \/\n/.test(R) && /User-agent: CCBot/.test(R))
// LE SEO A BESOIN DES MOTEURS QUI CITENT · voir le lot SEO
ok('les moteurs de réponse qui citent leurs sources sont admis', /User-agent: OAI-SearchBot[\s\S]*?Allow: \//.test(R) && /User-agent: PerplexityBot/.test(R))

/* --- 3 · l'anti-aspiration ----------------------------------------------- */
ok('un outil d\'aspiration déclaré est reconnu', ['curl/8.4.0', 'python-requests/2.31', 'Scrapy/2.11 (+https://scrapy.org)', 'Mozilla/5.0 HeadlessChrome/120.0', ''].every((u) => S.isAutomatedClient(u)))
ok('un vrai navigateur ne l\'est pas', !S.isAutomatedClient('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15')
  && !S.isAutomatedClient('Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36'))
const C = readFileSync('api/community.ts', 'utf8')
ok('la communauté refuse les automates anonymes', /if \(!me && isAutomatedClient\(header\(req, 'user-agent'\)\)\)/.test(C))
ok('les lectures ont un plafond par minute et par heure', /community:burst:/.test(C) && /community:read:/.test(C))
ok('l\'annuaire ne se parcourt pas sans compte', /!me && action === 'members' && \(\(Number\(url\.searchParams\.get\('page'\)\) \|\| 0\) > 0 \|\| url\.searchParams\.get\('q'\)\)/.test(C))
ok('le robot d\'aide refuse les automates', /isAutomatedClient\(req\.headers\.get\('user-agent'\)\)/.test(readFileSync('api/chat.ts', 'utf8')))
for (const f of ['api/domain.ts', 'api/fonts.ts']) ok(`« ${f} » a un plafond par adresse`, /rateAllow\(`[a-z]+:\$\{ip\}`/.test(readFileSync(f, 'utf8')))

/* --- 4 · aucun secret dans le code ---------------------------------------- */
const SECRET = /(sk_live_[0-9a-zA-Z]{10,}|rk_live_[0-9a-zA-Z]{10,}|whsec_[0-9a-zA-Z]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN (RSA |EC )?PRIVATE KEY|ghp_[0-9a-zA-Z]{30,}|xox[bp]-[0-9a-zA-Z-]{20,})/
const walk = (d, out = []) => { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, out); else if (/\.(ts|tsx|js|mjs|json|html)$/.test(e)) out.push(p) } return out }
const leaks = [...walk('src'), ...walk('api'), ...walk('public')].filter((f) => SECRET.test(readFileSync(f, 'utf8')))
ok('aucune clé secrète écrite dans le code', leaks.length === 0, leaks.join(', ') || 'rien')
ok('morsure · une clé Stripe serait vue', SECRET.test('const k = "sk_live_' + 'abcdefghij1234567890"'))

console.log(fails ? `\ntest-security · ${fails} problème(s)` : '\ntest-security · en-têtes, robots, anti-aspiration, secrets')
process.exitCode = fails ? 1 : 0
