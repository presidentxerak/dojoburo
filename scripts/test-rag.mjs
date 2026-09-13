// Les documents de l'entreprise · vérifié contre un vrai Postgres et de vrais
// fichiers.
//
// Rien ici ne peut se vérifier en relisant le code. Qu'un PDF scanné soit refusé
// plutôt qu'indexé en charabia, qu'une question posée en français retrouve un
// passage qui n'emploie pas les mêmes mots, qu'une entreprise ne voie jamais les
// documents d'une autre, qu'un effacement efface vraiment le texte : ce sont des
// propriétés du système assemblé, pas d'une fonction.
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-rag.mjs
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { randomUUID, createHash } from 'node:crypto'
import { deflateRawSync } from 'node:zlib'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) { console.log('test-rag · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }

const pool = new Pool({ connectionString: URL_, max: 6 })
try { await pool.query('select 1') } catch (e) {
  console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
  process.exit(1)
}

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql', 'db/rag.sql']) {
  await pool.query(readFileSync(f, 'utf8'))
}
await pool.query(`truncate rag_queries, rag_chunks, rag_documents, rag_spaces,
                           org_members, organisations, accounts restart identity cascade`)

const { build } = await import('esbuild')
const OUT = 'node_modules/.dojo-rag'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(OUT, name)
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const P = await load('api/_lib/rag/parse.ts', 'parse.mjs')
const C = await load('api/_lib/rag/chunk.ts', 'chunk.mjs')
const S = await load('api/_lib/rag/store.ts', 'store.mjs')
const R = await load('api/_lib/rag/search.ts', 'search.mjs')
const EU = await load('api/_lib/eu.ts', 'eu.mjs')

/* ---- des fichiers, pas des chaînes de caractères ------------------------ */
const { jsPDF } = await import('jspdf')

function makePdf(pagesOfLines) {
  const d = new jsPDF()
  pagesOfLines.forEach((lines, i) => { if (i) d.addPage(); d.setFontSize(11); d.text(lines, 20, 30) })
  return new Uint8Array(Buffer.from(d.output('arraybuffer')))
}

/** Un vrai .docx · un zip deflate avec word/document.xml, comme Word en produit. */
function makeDocx(paragraphs) {
  const body = paragraphs.map((p) => {
    const h = /^#(#?)\s+(.*)$/.exec(p)
    return h
      ? `<w:p><w:pPr><w:pStyle w:val="Heading${h[1] ? 2 : 1}"/></w:pPr><w:r><w:t>${h[2]}</w:t></w:r></w:p>`
      : `<w:p><w:r><w:t>${p}</w:t></w:r></w:p>`
  }).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}</w:body></w:document>`
  const files = [
    ['[Content_Types].xml', '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"/>'],
    ['word/document.xml', xml],
  ]
  const locals = [], central = []
  let off = 0
  for (const [name, content] of files) {
    const raw = Buffer.from(content, 'utf8')
    const comp = deflateRawSync(raw)
    const crc = crc32(raw)
    const nb = Buffer.from(name, 'utf8')
    const lh = Buffer.alloc(30)
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(8, 8)
    lh.writeUInt32LE(crc, 14); lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(raw.length, 22)
    lh.writeUInt16LE(nb.length, 26)
    locals.push(lh, nb, comp)
    const ch = Buffer.alloc(46)
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(8, 10)
    ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(comp.length, 20); ch.writeUInt32LE(raw.length, 24)
    ch.writeUInt16LE(nb.length, 28); ch.writeUInt32LE(off, 42)
    central.push(ch, nb)
    off += 30 + nb.length + comp.length
  }
  const cd = Buffer.concat(central)
  const eocd = Buffer.alloc(22)
  eocd.writeUInt32LE(0x06054b50, 0); eocd.writeUInt16LE(files.length, 8); eocd.writeUInt16LE(files.length, 10)
  eocd.writeUInt32LE(cd.length, 12); eocd.writeUInt32LE(off, 16)
  return new Uint8Array(Buffer.concat([...locals, cd, eocd]))
}
const CRC = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0 } return t })()
function crc32(buf) { let c = 0 ^ -1; for (const b of buf) c = (c >>> 8) ^ CRC[(c ^ b) & 0xFF]; return (c ^ -1) >>> 0 }

/* ====================================================== 1. l'analyse ===== */
console.log('\n--- /parse ---------------------------------------------------')
{
  const pdf = makePdf([
    ['Contrat de prestation de services', 'Article 1 - Objet',
     'Le Prestataire s engage a fournir les obligations', 'contractuelles decrites en annexe.'],
    ['Article 4 - Resiliation', 'Chaque partie peut resilier le contrat',
     'moyennant un preavis de trois mois notifie par', 'lettre recommandee.'],
  ])
  const r = P.parseDocument(pdf, 'contrat.pdf')
  ok('un PDF rend son texte', /Prestataire/.test(r.markdown), r.markdown.slice(0, 40).replace(/\n/g, ' '))
  ok('et ses deux pages séparément', r.pageCount === 2, `${r.pageCount} pages`)
  ok('la page 2 contient bien la résiliation', /[Rr]esiliation/.test(r.pages[1].text))
  ok('la page 1 ne la contient pas', !/[Rr]esiliation/.test(r.pages[0].text),
    'sinon une citation « page 1 » renverrait au mauvais endroit')
}
{
  // un PDF sans couche de texte · le cas qui doit être refusé
  const { jsPDF: J } = await import('jspdf')
  const d = new J()
  d.addImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'PNG', 10, 10, 180, 100)
  const r = P.parseDocument(new Uint8Array(Buffer.from(d.output('arraybuffer'))), 'scan.pdf')
  ok('un PDF scanné est refusé, pas deviné', r.needsOcr === true)
  ok('et il dit pourquoi', /scan|optique/i.test(r.warning || ''), r.warning?.slice(0, 60))
  ok('il ne rend aucun texte inventé', r.markdown.trim() === '',
    'trois mots faux indexés pour toujours est pire qu’un refus')
}
{
  const docx = makeDocx([
    '# Politique de teletravail',
    'Le present document definit les regles applicables a tous les salaries.',
    '## Eligibilite',
    'Sont eligibles les salaries ayant plus de six mois d anciennete.',
  ])
  const r = P.parseDocument(docx, 'politique.docx')
  ok('un .docx compressé est lu', /teletravail/i.test(r.markdown), r.kind)
  ok('et ses titres restent des titres', /^# Politique/m.test(r.markdown))
  ok('les sous-titres aussi', /^## Eligibilite/m.test(r.markdown))
}
{
  const csv = Buffer.from('fournisseur,montant,echeance\nACME,12000,2026-03-01\nBeta SARL,4500,2026-04-15\n')
  const r = P.parseDocument(new Uint8Array(csv), 'factures.csv')
  ok('un CSV devient un tableau Markdown', /\| ACME \| 12000 \|/.test(r.markdown))
  const html = Buffer.from('<html><body><h1>Mentions</h1><p>Texte <b>gras</b>.</p><script>x()</script></body></html>')
  const h = P.parseDocument(new Uint8Array(html), 'page.html')
  ok('le HTML perd ses balises et garde ses titres', /^# Mentions/m.test(h.markdown) && /Texte gras/.test(h.markdown))
  ok('et le script ne se retrouve pas dans l’index', !/x\(\)/.test(h.markdown))
}

/* ==================================================== 2. le découpage ==== */
console.log('\n--- découpage ------------------------------------------------')
{
  const pages = [
    { page: 1, text: '# Article 1\n\nLe prestataire fournit les livrables convenus.' },
    { page: 2, text: '# Article 4\n\n' + 'Une clause de resiliation. '.repeat(120) },
  ]
  const cs = C.chunkPages(pages, { size: 400, overlap: 60 })
  ok('chaque passage sait sa page', cs.every((c) => c.page >= 1 && c.page <= 2))
  ok('et le titre au-dessus de lui', cs.some((c) => c.heading === 'Article 4'), cs[0]?.heading)
  ok('un titre ne se mélange pas au suivant',
    cs.filter((c) => c.page === 1).every((c) => c.heading === 'Article 1'),
    'sinon une clause est attribuée au mauvais article')
  ok('un bloc trop long est coupé', cs.filter((c) => c.page === 2).length > 1)
  ok('aucun passage ne dépasse le double de la cible', cs.every((c) => c.text.length <= 800),
    `max ${Math.max(...cs.map((c) => c.text.length))}`)
  ok('aucun passage vide', cs.every((c) => c.text.trim().length > 0))
  ok('le libellé de citation se lit', C.citationLabel('contrat.pdf', cs[0]).startsWith('contrat.pdf · p. 1'),
    C.citationLabel('contrat.pdf', cs[0]))
}

/* ================================================== 3. bout en bout ====== */
console.log('\n--- dépôt et recherche ---------------------------------------')
const acct = async (email) =>
  (await pool.query(`insert into accounts (privy_did, email) values ($1,$2) returning id`,
    ['did:privy:' + randomUUID(), email])).rows[0].id
const orgFor = async (id, name) => {
  const o = await pool.query(`insert into organisations (name, created_by) values ($1,$2) returning id`, [name, id])
  await pool.query(`insert into org_members (org_id, account_id, role) values ($1,$2,'owner')`, [o.rows[0].id, id])
  return o.rows[0].id
}

const alice = await acct('alice@acme.fr')
const acme = await orgFor(alice, 'Acme')
const space = await S.ensureSpace(pool, acme, 'Juridique', alice, 90)

const contrat = makePdf([
  ['Contrat de prestation de services', 'Article 1 - Objet',
   'Le Prestataire s engage a fournir les obligations', 'contractuelles decrites en annexe,',
   'moyennant une remuneration de 48 000 euros.'],
  ['Article 4 - Resiliation', 'Chaque partie peut resilier le present contrat',
   'moyennant un preavis de trois mois notifie par', 'lettre recommandee avec accuse de reception.'],
])
const r1 = await S.ingest(pool, { orgId: acme, spaceId: space, filename: 'contrat.pdf', bytes: contrat, uploadedBy: alice })
ok('le contrat est indexé', r1.ok && r1.chunks > 0, `${r1.chunks} passages, ${r1.pages} pages`)

const r2 = await S.ingest(pool, { orgId: acme, spaceId: space, filename: 'contrat.pdf', bytes: contrat, uploadedBy: alice })
ok('le même fichier n’est pas réanalysé', r2.duplicate === true,
  'sur une base d’entreprise le même contrat arrive par trois canaux')
ok('et ne crée pas un second document', (await S.listDocuments(pool, acme, space)).length === 1)

const politique = makeDocx([
  '# Politique de teletravail',
  'Les salaries peuvent travailler a distance deux jours par semaine.',
  '## Materiel',
  'L entreprise fournit un ordinateur portable et un ecran.',
])
await S.ingest(pool, { orgId: acme, spaceId: space, filename: 'politique.docx', bytes: politique, uploadedBy: alice })

{
  const hits = await R.search(pool, acme, 'preavis de resiliation', { spaceId: space, topK: 5 })
  ok('une recherche trouve le bon passage', hits.length > 0 && /preavis/i.test(hits[0].text), hits[0]?.text.slice(0, 50))
  ok('et sait sur quelle page il est', hits[0]?.page === 2, `page ${hits[0]?.page}`)
  ok('et dans quel fichier', hits[0]?.filename === 'contrat.pdf')
  ok('sans fournisseur d’embeddings, c’est lexical', hits[0]?.via === 'lexical',
    'le produit fonctionne sans aucun appel sortant')
}
{
  // La lemmatisation française · c'est tout l'intérêt de la configuration `french`
  const hits = await R.search(pool, acme, 'obligation contractuelle', { spaceId: space, topK: 5 })
  ok('le singulier retrouve le pluriel', hits.length > 0 && /obligations/i.test(hits[0].text),
    '« obligation contractuelle » → « obligations contractuelles »')
}
{
  const hits = await R.search(pool, acme, 'ordinateur portable', { spaceId: space, topK: 5 })
  ok('un autre document répond à sa propre question', hits[0]?.filename === 'politique.docx', hits[0]?.filename)
}
{
  const hits = await R.search(pool, acme, 'xyzzy introuvable', { spaceId: space, topK: 5 })
  ok('une question sans réponse rend une liste vide', hits.length === 0,
    'et non le passage le moins mauvais, qui ferait inventer le modèle')
}

/* =============================================== 4. cloisonnement ======== */
console.log('\n--- cloisonnement --------------------------------------------')
{
  const bob = await acct('bob@autre.fr')
  const autre = await orgFor(bob, 'Autre')
  const s2 = await S.ensureSpace(pool, autre, 'Juridique', bob, null)
  await S.ingest(pool, {
    orgId: autre, spaceId: s2, filename: 'secret.csv',
    bytes: new Uint8Array(Buffer.from('sujet,montant\nresiliation confidentielle,999999\n')), uploadedBy: bob,
  })
  const mine = await R.search(pool, acme, 'resiliation', { topK: 20 })
  ok('une entreprise ne voit jamais les documents d’une autre',
    mine.every((h) => h.filename !== 'secret.csv'), `${mine.length} résultats, aucun de l’autre`)
  const theirs = await R.search(pool, autre, 'resiliation', { topK: 20 })
  ok('et réciproquement', theirs.every((h) => h.filename === 'secret.csv'), `${theirs.length} résultats`)
  ok('la liste des documents aussi', (await S.listDocuments(pool, autre)).length === 1)
}

/* ================================================ 5. le RGPD ============= */
console.log('\n--- conservation, effacement, traçabilité --------------------')
{
  const h = await S.holdings(pool, acme)
  ok('on peut dire ce qu’on détient', h.documents === 2 && h.chunks > 0,
    `${h.documents} documents, ${h.pages} pages, ${h.chunks} passages`)
}
{
  await S.logQuery(pool, {
    orgId: acme, spaceId: space, accountId: alice, kind: 'search',
    question: 'preavis de resiliation', docIds: [r1.docId], ms: 12,
  })
  const q = await pool.query(`select question, doc_ids, account_id from rag_queries where org_id = $1`, [acme])
  ok('une interrogation laisse une trace', q.rows.length === 1)
  ok('avec qui a demandé', q.rows[0].account_id === alice)
  ok('et quels documents ont répondu', q.rows[0].doc_ids.includes(r1.docId),
    '« qui a consulté ce contrat » doit avoir une réponse')
}
{
  const before = await pool.query(`select count(*)::int c from rag_chunks where doc_id = $1`, [r1.docId])
  ok('le document a bien des passages avant effacement', before.rows[0].c > 0)
  const done = await S.eraseDocument(pool, acme, r1.docId)
  ok('l’effacement réussit', done)
  const after = await pool.query(`select count(*)::int c from rag_chunks where doc_id = $1`, [r1.docId])
  ok('les passages sont réellement supprimés', after.rows[0].c === 0)
  const doc = await pool.query(`select count(*)::int c from rag_documents where id = $1`, [r1.docId])
  ok('le document aussi', doc.rows[0].c === 0, 'une suppression logique laisserait le texte lisible en base')
  const gone = await R.search(pool, acme, 'preavis de resiliation', { spaceId: space, topK: 5 })
  ok('et il ne répond plus aux recherches', gone.every((h) => h.filename !== 'contrat.pdf'))
  const trace = await pool.query(`select count(*)::int c from rag_queries where org_id = $1`, [acme])
  ok('la trace d’audit survit à l’effacement du document', trace.rows[0].c === 1,
    'un registre qui s’efface lui-même ne prouve plus rien')
}
{
  const other = await pool.query(`select id from rag_documents where filename = 'secret.csv'`)
  const nope = await S.eraseDocument(pool, acme, other.rows[0].id)
  ok('on ne peut pas effacer le document d’une autre entreprise', nope === false)
}
{
  // conservation · un document qu'on n'a pas touché depuis plus longtemps que la
  // durée fixée doit partir tout seul
  const old = await S.ingest(pool, {
    orgId: acme, spaceId: space, filename: 'vieux.txt',
    bytes: new Uint8Array(Buffer.from('note ancienne sans importance')), uploadedBy: alice,
  })
  await pool.query(`update rag_documents set last_used_at = now() - interval '200 days' where id = $1`, [old.docId])
  const n = await pool.query(`select rag_apply_retention() as n`)
  ok('la purge par durée de conservation retire le document expiré', Number(n.rows[0].n) >= 1, `${n.rows[0].n} effacé(s)`)
  const left = await pool.query(`select count(*)::int c from rag_documents where id = $1`, [old.docId])
  ok('et il n’est plus là', left.rows[0].c === 0)
  const kept = await S.listDocuments(pool, acme, space)
  ok('tandis que le document récent reste', kept.some((d) => d.filename === 'politique.docx'))
}

/* ============================================ 6. la souveraineté ========= */
console.log('\n--- résidence des données ------------------------------------')
{
  ok('Mistral est déclaré français et européen',
    EU.ORIGINS.mistral.country === 'FR' && EU.ORIGINS.mistral.region === 'eu')
  ok('un fournisseur américain est déclaré comme tel', EU.ORIGINS.anthropic.region === 'us')

  delete process.env.DATA_RESIDENCY
  ok('sans réglage, la résidence est « open »', EU.residency() === 'open',
    'une installation qui n’y a pas pensé ne doit pas prétendre le contraire')

  process.env.DATA_RESIDENCY = 'eu'
  process.env.ANTHROPIC_API_KEY = 'sk-ant-test'
  const refus = EU.mayUse('anthropic')
  ok('en résidence EU, un fournisseur hors UE est refusé', refus.allowed === false && refus.reason === 'residency')
  ok('et le refus explique lequel et pourquoi', /États-Unis|US|United States/i.test(refus.detail) || /US/.test(refus.detail),
    refus.detail)
  ok('la chaîne ne contient alors aucun fournisseur hors UE',
    EU.chain().every((o) => o.region === 'eu'),
    'le refus est structurel · aucun chemin de code ne peut y arriver par accident')

  process.env.MISTRAL_API_KEY = 'test'
  ok('avec une clé Mistral, un fournisseur EU est disponible', EU.hasEuProvider())
  ok('et il est en tête', EU.chain()[0]?.id === 'mistral')

  const reg = EU.processingRecord()
  ok('le registre des traitements se génère', reg.processors.length > 0 && reg.residency === 'eu')
  ok('et ne liste que des sous-traitants européens', reg.processors.every((p) => p.region === 'eu'),
    reg.processors.map((p) => p.processor).join(', '))
  ok('il nomme le sous-traitant, pas une marque', /SAS|SASU|Ltd|Inc/.test(reg.processors[0].processor),
    reg.processors[0].processor)

  delete process.env.DATA_RESIDENCY
  delete process.env.ANTHROPIC_API_KEY
  delete process.env.MISTRAL_API_KEY
}

/* ---- la moitié sémantique -----------------------------------------------
   Sans clé on ne peut pas fabriquer de vrais vecteurs, et ce n'est pas ce
   qu'on veut vérifier. Ce qui se vérifie ici est plus important : que des
   vecteurs d'un AUTRE modèle ne soient jamais comparés à la question. Un
   cosinus entre deux espaces vectoriels sans rapport se calcule parfaitement
   et ne veut rien dire — il rend un résultat plausible, donc indétectable. */
{
  console.log('\n--- recherche sémantique -------------------------------------')
  const bob = await acct('bob@vecteurs.fr')
  const vorg = await orgFor(bob, 'Vecteurs')
  const vspace = await S.ensureSpace(pool, vorg, 'Essais', bob, null)
  await S.ingest(pool, {
    orgId: vorg, spaceId: vspace, filename: 'notes.md',
    bytes: new TextEncoder().encode('# Zephyr\n\nLe quorum statutaire est atteint a compter de la moitie des voix.'),
    uploadedBy: bob,
  })

  // Un vecteur posé à la main, sous un modèle nommé.
  const V1 = [1, 0, 0]
  await pool.query(
    `update rag_chunks set embedding = $1::real[], embed_model = 'essai:v1'
      where space_id = $2`,
    [V1, vspace],
  )

  // Une question qui ne partage AUCUN mot avec le document : le lexical ne peut
  // rien rendre, donc tout ce qui ressort vient de la moitié sémantique.
  const muet = 'anticonstitutionnellement zzzz'
  const sansVecteur = await R.search(pool, vorg, muet, { spaceId: vspace, topK: 5 })
  ok('une question sans mot commun ne rend rien en lexical', sansVecteur.length === 0)

  const bonModele = await R.search(pool, vorg, muet, {
    spaceId: vspace, topK: 5, queryVector: V1, embedModel: 'essai:v1',
  })
  ok('avec un vecteur du bon modèle, le passage remonte', bonModele.length === 1)
  ok('et il est étiqueté comme sémantique', bonModele[0]?.via === 'semantic',
    'pour qu’un résultat surprenant soit explicable')

  const mauvaisModele = await R.search(pool, vorg, muet, {
    spaceId: vspace, topK: 5, queryVector: V1, embedModel: 'essai:v2',
  })
  ok('un vecteur d’un autre modèle ne remonte rien', mauvaisModele.length === 0,
    'changer de modèle rend les anciens vecteurs invisibles, pas nuisibles')

  const sansEtiquette = await R.search(pool, vorg, muet, {
    spaceId: vspace, topK: 5, queryVector: V1, embedModel: null,
  })
  ok('un vecteur sans modèle déclaré est ignoré', sansEtiquette.length === 0,
    'lexical seul est moins bon · mêler deux espaces vectoriels est faux')

  const E = await load('api/_lib/rag/embed.ts', 'embed.mjs')
  const st = E.embedStatus()
  ok('sans clé, l’état le dit franchement', st.available === false && !!st.why)
  ok('et nomme ce qu’il faut poser', Array.isArray(st.setAnyOf) && st.setAnyOf.includes('MISTRAL_API_KEY'),
    st.setAnyOf?.join(', '))
  ok('rien n’a été vectorisé sans fournisseur',
    (await E.embedPending(pool, vorg, { spaceId: vspace })).embedded === 0,
    'l’absence de clé n’est pas une erreur')
}

/* ---- une réponse sourcée, et sa vérification ---------------------------- */
{
  console.log('\n--- réponse sourcée ------------------------------------------')
  const A = await load('api/_lib/rag/answer.ts', 'answer.mjs')
  const p = (n, page) => ({
    chunkId: n, docId: 'doc-' + n, filename: `f${n}.pdf`, page,
    text: 'extrait ' + n, rank: n, via: 'lexical', score: 1,
  })
  const trois = [p(1, 4), p(2, 7), p(3, 9)]

  const bonne = A.verify('Le préavis est de trois mois [2].', trois)
  ok('une citation valable est conservée', /\[2\]/.test(bonne.text))
  ok('et elle est résolue en fichier et page',
    bonne.citations[0]?.filename === 'f2.pdf' && bonne.citations[0]?.page === 7,
    'une citation qu’on ne peut pas ouvrir ne prouve rien')
  ok('la réponse est marquée appuyée', bonne.grounded === true)

  const inventee = A.verify('Le préavis est de trois mois [5].', trois)
  ok('une citation qui n’existe pas est retirée', !/\[5\]/.test(inventee.text), inventee.text)
  ok('et la réponse n’est plus marquée appuyée', inventee.grounded === false,
    'laisser le crochet donnerait à une affirmation nue l’apparence d’une preuve')
  ok('et elle le dit', /sans source/i.test(inventee.note || ''))

  const nue = A.verify('Le préavis est de trois mois.', trois)
  ok('une affirmation sans aucune citation est signalée', nue.grounded === false)

  const refus = A.verify('Les documents fournis ne permettent pas de répondre.', trois)
  ok('un refus explicite n’a rien à citer', refus.grounded === true,
    'c’est la bonne réponse, pas un défaut')

  const vide = await A.ask('quoi que ce soit', [])
  ok('aucun passage ⇒ aucun appel au modèle', vide.answeredBy === null && vide.grounded === true,
    'le cas le plus fréquent d’invention, et le moins cher à éviter')
  ok('et on dit pourquoi', /aucun passage/i.test(vide.note || ''))
}

/* ---- extraction · un champ sans source n'est pas un champ --------------- */
{
  console.log('\n--- extraction structurée ------------------------------------')
  const X = await load('api/_lib/rag/extract.ts', 'extract.mjs')

  const sch = X.normaliseSchema([
    { name: 'montant', type: 'number', description: 'le montant total' },
    { name: 'montant', type: 'string' },
    { name: '', type: 'string' },
    { name: 'signe', type: 'licorne', description: 'le contrat est-il signé' },
  ])
  ok('un schéma déduplique ses champs', sch.length === 2, sch.map((f) => f.name).join(', '))
  ok('et ramène un type inconnu à du texte', sch.find((f) => f.name === 'signe')?.type === 'string')
  ok('un schéma vide reste vide', X.normaliseSchema('nawak').length === 0)

  const passages = [
    { chunkId: 1, docId: 'd1', filename: 'c.pdf', page: 3, text: 'La remuneration est de 48 000,50 euros par an.', rank: 1, via: 'lexical', score: 1 },
    { chunkId: 2, docId: 'd1', filename: 'c.pdf', page: 8, text: 'Signe a Paris le 01/03/2026.', rank: 2, via: 'lexical', score: 1 },
  ]
  const champ = (n, t, d) => ({ name: n, type: t, description: d || n })

  const bon = X.check({ value: '48 000,50 euros', source: 1, quote: 'La remuneration est de 48 000,50 euros' },
    champ('montant', 'number'), passages)
  ok('une valeur sourcée est retenue', bon.value === 48000.5, String(bon.value))
  ok('et elle porte sa page', bon.pages[0] === 3, 'un relecteur tranche en dix secondes')

  const sansSource = X.check({ value: '30 jours' }, champ('preavis', 'string'), passages)
  ok('une valeur sans source est écartée', sansSource.value === null, sansSource.missing)
  ok('et non pas seulement signalée',
    sansSource.missing?.includes('écartée'),
    'le coût d’un champ manquant est qu’on le remplit · celui d’un champ inventé est qu’on ne le remplit jamais')

  const horsBornes = X.check({ value: 'oui', source: 9 }, champ('signe', 'boolean'), passages)
  ok('une source hors bornes est écartée', horsBornes.value === null)

  const absent = X.check({ value: null, missing: 'le contrat ne dit rien du préavis' },
    champ('preavis', 'string'), passages)
  ok('un champ absent rend sa raison', absent.value === null && /ne dit rien/.test(absent.missing),
    '« absent » est une information exploitable')

  const date = X.check({ value: '01/03/2026', source: 2 }, champ('signature', 'date'), passages)
  ok('une date française devient une date ISO', date.value === '2026-03-01', String(date.value))

  const faux = X.check({ value: 'beaucoup', source: 1 }, champ('montant', 'number'), passages)
  ok('une valeur du mauvais type est écartée', faux.value === null, faux.missing)

  const reformule = X.check({ value: 'oui', source: 2, quote: 'signé à Paris en mars deux mille vingt-six' },
    champ('signe', 'boolean'), passages)
  ok('une citation reformulée est remplacée par l’extrait réel',
    reformule.value === true && reformule.quote?.startsWith('Signe a Paris'),
    'un modèle qui reformule sa « citation exacte » fabrique')
}

await pool.end()
rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
