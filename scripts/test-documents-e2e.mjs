// Un vrai document, déposé par une vraie personne, retrouvé par sa page.
//
// Tout le reste est testé couche par couche : l'analyse contre de vrais
// fichiers, le schéma contre Postgres, l'écran contre un navigateur sans base.
// Ce test-ci est le seul qui parcourt le chemin entier — un navigateur, le
// bundle réel, le handler HTTP réel, une vraie base — et répond à la question
// qu'une entreprise pose vraiment : si je dépose mon contrat, est-ce que je
// peux retrouver la clause et savoir sur quelle page elle est ?
//
// Il sert dist/ et monte api/rag.ts sur un serveur node ordinaire, parce que
// `vite preview` n'exécute pas les fonctions serverless. Rien du handler n'est
// simulé ; seul l'hébergement l'est.
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-documents-e2e.mjs
import { createServer } from 'node:http'
import { readFileSync, existsSync, writeFileSync, mkdtempSync, mkdirSync, rmSync } from 'node:fs'
import { join, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
import { Pool } from 'pg'

const DB = process.env.TEST_DATABASE_URL
if (!DB) { console.log('test-documents-e2e · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }
if (!existsSync('dist/index.html')) { console.error('test-documents-e2e · run the build first'); process.exit(1) }

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

process.env.DATABASE_URL = DB
const pool = new Pool({ connectionString: DB })
try { await pool.query('select 1') } catch (e) {
  console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
  process.exit(1)
}
for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql', 'db/rag.sql']) {
  await pool.query(readFileSync(f, 'utf8'))
}
await pool.query(`truncate rag_queries, rag_chunks, rag_documents, rag_spaces,
                           org_members, organisations, accounts restart identity cascade`)

/* ---- le vrai handler ---------------------------------------------------- */
const { build } = await import('esbuild')
mkdirSync('node_modules/.dojo-e2e', { recursive: true })
const TMP = mkdtempSync(join('node_modules/.dojo-e2e', 'docs-'))
const out = await build({
  entryPoints: ['api/rag.ts'], bundle: true, format: 'esm', platform: 'node',
  write: false, external: ['pg'], logLevel: 'silent',
})
const hf = join(TMP, 'rag.mjs')
writeFileSync(hf, out.outputFiles[0].text)
const ragHandler = (await import(pathToFileURL(hf).href)).default

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.png': 'image/png', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
}
const server = createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost')
  if (u.pathname === '/api/rag') {
    let raw = ''
    for await (const c of req) raw += c
    req.rawBody = raw
    try { await ragHandler(req, res) }
    catch (e) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String(e?.message || e) })) }
    return
  }
  const p = u.pathname === '/' ? '/index.html' : u.pathname
  const file = join('dist', p)
  const target = existsSync(file) && extname(file) ? file : join('dist', 'index.html')
  res.setHeader('content-type', MIME[extname(target)] || 'application/octet-stream')
  res.end(readFileSync(target))
})
await new Promise((r) => server.listen(4198, r))
const B = 'http://localhost:4198/'

/* ---- un contrat qui existe vraiment ------------------------------------- */
const { jsPDF } = await import('jspdf')
const d = new jsPDF()
d.setFontSize(11)
d.text(['Contrat de prestation', 'Article 1 - Objet',
  'Le Prestataire fournit les obligations contractuelles', 'decrites en annexe.'], 20, 30)
d.addPage()
d.text(['Article 7 - Resiliation', 'Chaque partie peut resilier le contrat',
  'moyennant un preavis de trois mois.'], 20, 30)
const pdf = join(TMP, 'contrat.pdf')
writeFileSync(pdf, Buffer.from(d.output('arraybuffer')))

/* ---- une personne ------------------------------------------------------- */
const br = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const ctx = await br.newContext({ viewport: { width: 1280, height: 1000 } })
await ctx.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
const p = await ctx.newPage()
const errs = []
p.on('pageerror', (e) => errs.push(e.message))

// Un visiteur sans compte n'a aucune identité sous laquelle déposer, ce qui est
// correct et n'est pas ce qu'on teste ici.
await p.goto(B + '#app', { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)
const sign = p.locator('button', { hasText: /^Sign in$/ }).first()
if (await sign.count()) { await sign.click(); await p.waitForTimeout(2500) }

await p.goto(B + '#documents', { waitUntil: 'networkidle' })
await p.waitForSelector('.docs-body', { timeout: 20000 })
const first = await p.innerText('.docs-body')
ok('avec une base, l’écran ne réclame plus de configuration', !/db\/rag\.sql/.test(first),
  first.split('\n').slice(0, 2).join(' · '))
ok('et il dit qu’il n’y a encore rien', /Aucun document/.test(first))

/* ---- le dépôt ----------------------------------------------------------- */
await p.locator('.docs-file').setInputFiles(pdf)
await p.waitForSelector('.docs-doc', { timeout: 30000 })
const listed = await p.innerText('.docs-list')
ok('le contrat apparaît dans la liste', /contrat\.pdf/.test(listed))
ok('avec son état et ses pages', /indexé/.test(listed) && /2 page/.test(listed), listed.split('\n')[1])

const notice = await p.innerText('.docs-notice').catch(() => '')
ok('et le dépôt dit ce qu’il a produit', /passage/.test(notice), notice.trim())

// Ce que la base a réellement reçu · l'écran pourrait mentir, pas Postgres.
const inDb = await pool.query(
  `select d.filename, d.status, d.parsed_by, d.parsed_region, count(c.id)::int as chunks
     from rag_documents d left join rag_chunks c on c.doc_id = d.id
    group by d.id`)
ok('le document est en base', inDb.rows.length === 1 && inDb.rows[0].filename === 'contrat.pdf')
ok('analysé localement, sans rien envoyer dehors',
  inDb.rows[0]?.parsed_by === 'local' && inDb.rows[0]?.parsed_region === 'eu',
  'c’est la colonne qu’un auditeur lit, pas notre page de vente')
ok('et découpé en passages', (inDb.rows[0]?.chunks ?? 0) > 0, `${inDb.rows[0]?.chunks} passages`)

/* ---- la recherche ------------------------------------------------------- */
await p.locator('.docs-q').fill('preavis de resiliation')
await p.locator('.docs-btn', { hasText: 'Chercher' }).click()
await p.waitForSelector('.docs-hit', { timeout: 20000 })
const hits = await p.innerText('.docs-hits')
ok('la recherche retrouve la clause', /preavis/i.test(hits))
ok('et dit de quelle page elle vient', /page 2/.test(hits),
  'une réponse qu’on ne peut pas ouvrir ne vaut pas la peine d’être lue')
ok('et par quelle moitié elle a été trouvée', /lexical/.test(hits))

// La lemmatisation française, depuis l'écran cette fois
await p.locator('.docs-q').fill('obligation contractuelle')
await p.locator('.docs-btn', { hasText: 'Chercher' }).click()
await p.waitForTimeout(1500)
const lemma = await p.innerText('.docs-body')
ok('le singulier retrouve le pluriel', /obligations contractuelles/i.test(lemma))

/* ---- demander sans modèle ----------------------------------------------- */
// Aucun fournisseur n'est configuré ici. L'écran doit rendre les passages et
// dire pourquoi il ne rédige pas — pas rester vide, ce qui se lirait comme une
// panne, ni inventer une réponse, ce qui serait pire.
await p.locator('.docs-q').fill('preavis de resiliation')
await p.locator('.docs-btn', { hasText: 'Demander' }).click()
await p.waitForTimeout(2500)
const asked = await p.innerText('.docs-body')
ok('sans modèle, la demande rend quand même les passages', /page 2/.test(asked))
ok('et explique pourquoi elle ne rédige pas',
  /aucun modèle européen/i.test(asked),
  'rester vide se lirait comme une panne · inventer serait pire')

/* ---- l'effacement ------------------------------------------------------- */
p.once('dialog', (dlg) => dlg.accept())
await p.locator('.docs-erase').first().click()
await p.waitForTimeout(2000)
const left = await pool.query(`select count(*)::int c from rag_documents`)
const chunksLeft = await pool.query(`select count(*)::int c from rag_chunks`)
ok('effacer efface le document', left.rows[0].c === 0)
ok('et ses passages avec lui', chunksLeft.rows[0].c === 0,
  'une suppression logique laisserait le texte du contrat lisible en base')
const audit = await pool.query(`select count(*)::int c from rag_queries`)
ok('la trace d’audit survit', audit.rows[0].c > 0,
  'un registre qui s’efface avec ce qu’il enregistre ne prouve plus rien')

ok('aucune erreur JavaScript sur tout le parcours', errs.length === 0, errs.slice(0, 2).join(' | '))

await br.close()
server.close()
await pool.end()
rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
