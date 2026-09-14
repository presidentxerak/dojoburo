// Ce qu'un agent a le droit de faire dans VOS applications.
//
// Le garde-fou existait et protégeait le mauvais chemin : `outboundConsent` vit
// dans le navigateur et n'enveloppe que les boutons de l'application. Un run
// d'agent rattachait les applications connectées comme serveurs MCP, et le
// modèle appelait leurs outils sans que rien ne le borne — alors que les
// consignes disent littéralement « if Stripe is connected, create the
// products/prices and share a payment link ».
//
// Deux propriétés à prouver, et la seconde compte autant que la première :
//
//   · une écriture non accordée est REFUSÉE ;
//   · une lecture, et une écriture accordée, passent SANS ENTRAVE. Un garde-fou
//     qui bloque le travail autorisé est désinstallé la semaine suivante.
//
// Et la règle qui décide du reste : un outil INCONNU compte comme une écriture.
// Une liste noire se fait dépasser le jour où une application publie un nouvel
// outil ; une liste blanche, non.
//
//   node scripts/test-permits.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-permits'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, logLevel: 'silent', external: ['pg'],
  })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const P = await load('api/_lib/permits.ts', 'permits.mjs')
const M = await load('api/_lib/mcp.ts', 'mcp.mjs')

const tool = (name, description = '') => ({ name: `notion__${name}`, server: 'notion', tool: name, description, parameters: {} })

console.log('--- lire ou écrire · la classification ----------------------')
{
  const reads = ['get_page', 'list_databases', 'search', 'read_file', 'fetch_issues',
    'query_rows', 'describe_table', 'retrieve_customer', 'view_calendar', 'count_items']
  const wrong = reads.filter((n) => P.isWriteTool(tool(n)))
  ok('les outils de lecture sont reconnus comme tels', wrong.length === 0, wrong.join(', '))
}
{
  const writes = ['create_page', 'update_issue', 'delete_row', 'send_email', 'post_message',
    'charge_customer', 'refund_payment', 'create_payment_link', 'invite_user', 'archive_channel']
  const wrong = writes.filter((n) => !P.isWriteTool(tool(n)))
  ok('les outils d’écriture aussi', wrong.length === 0, wrong.join(', '))
}
{
  // LE point. Un outil au nom inattendu ne doit pas passer pour inoffensif.
  const unknown = ['frobnicate', 'do_the_thing', 'xyzzy', 'run', 'execute_workflow']
  const leaked = unknown.filter((n) => !P.isWriteTool(tool(n)))
  ok('un outil INCONNU compte comme une écriture', leaked.length === 0,
    leaked.length ? `passés pour lecture : ${leaked.join(', ')}` : 'une liste noire se fait dépasser · pas une liste blanche')
}
{
  ok('un outil sans nom compte comme une écriture', P.isWriteTool({ tool: '' }),
    'on ne peut rien affirmer d’un outil qu’on ne sait pas nommer')
}
{
  // Une description ne doit pas pouvoir requalifier une écriture en lecture.
  const menteur = tool('create_page', 'Returns your pages for consultation.')
  ok('une description rassurante n’achète pas une permission', P.isWriteTool(menteur),
    '« create_page » reste une écriture quoi qu’en dise sa notice')
}
{
  // Mais elle peut confirmer une lecture quand le nom ne dit rien.
  const muet = tool('pages', 'Returns the pages in the workspace.')
  ok('et elle peut confirmer une lecture quand le nom est muet', !P.isWriteTool(muet))
}

console.log('\n--- le pont refuse ce qui n’est pas accordé -----------------')
const servers = [{ type: 'url', url: 'https://example.invalid/mcp', name: 'notion' }]
const tools = [tool('create_page'), tool('get_page')]
{
  const r = await M.callTool(servers, tools, 'notion__create_page', {}, new Set())
  ok('une écriture non accordée est refusée', /^refused:/.test(r), r.slice(0, 60))
  ok('et le refus nomme l’application et l’outil', /notion/.test(r) && /create_page/.test(r))
  ok('et dit à l’agent quoi faire ensuite', /Continue without it/.test(r),
    'un refus qui tue le run est pire qu’un refus que l’agent sait raconter')
}
{
  // La propriété qui décide si le garde-fou survit : ce qui est autorisé passe.
  const r = await M.callTool(servers, tools, 'notion__create_page', {}, new Set(['notion']))
  ok('une écriture ACCORDÉE n’est pas refusée', !/^refused:/.test(r),
    'un garde-fou qui bloque le travail autorisé est désinstallé la semaine suivante')
}
{
  const r = await M.callTool(servers, tools, 'notion__get_page', {}, new Set())
  ok('une lecture passe sans autorisation', !/^refused:/.test(r),
    'la lecture suit la connexion · seule l’écriture demande un geste')
}
{
  // Sans ensemble fourni, rien ne change · c'est le chemin des appelants qui
  // n'ont pas d'organisation sous la main, et il ne doit pas se durcir tout seul.
  const r = await M.callTool(servers, tools, 'notion__create_page', {})
  ok('aucune restriction demandée ⇒ aucun changement de comportement',
    !/^refused:/.test(r), 'pas de régression sur les appelants sans organisation')
}
{
  const r = await M.callTool(servers, tools, 'notion__nope', {}, new Set())
  ok('un outil inexistant reste une erreur, pas un refus', /no tool named/.test(r))
}

console.log('\n--- ce qui est rattaché à Claude ----------------------------')
{
  // Claude appelle les applications DIRECTEMENT : rien n'est interceptable de
  // ce côté, donc la seule garantie est ce qu'on lui donne. On reproduit ici la
  // décision de agent-run : une application qui publie une écriture non
  // accordée n'est pas rattachée.
  const decide = (published, grants) => {
    const risky = P.splitTools(published).write.length > 0
    return risky && !grants.has('notion') ? 'retenue' : 'rattachée'
  }
  ok('une application en lecture seule est rattachée sans autorisation',
    decide([tool('get_page'), tool('search')], new Set()) === 'rattachée')
  ok('une application capable d’écrire est retenue sans autorisation',
    decide([tool('get_page'), tool('create_page')], new Set()) === 'retenue',
    'on ne peut rien surveiller de ce côté · on ne donne donc rien')
  ok('et rattachée dès que l’écriture est accordée',
    decide([tool('get_page'), tool('create_page')], new Set(['notion'])) === 'rattachée')
}

console.log('\n--- le défaut du garde-fou est FERMÉ ------------------------')
{
  // Une base injoignable ne doit pas rendre le déploiement permissif.
  const broken = { query: async () => { throw new Error('no db') } }
  const g = await P.writeGrants(broken, 'org-1')
  ok('une base en panne n’accorde rien', g.size === 0,
    'un garde-fou dont le défaut est ouvert n’en est pas un')
  const none = await P.writeGrants(broken, null)
  ok('et une organisation absente non plus', none.size === 0)
}
{
  const pool = {
    query: async (sql) => (/connector_permits/.test(sql)
      ? { rows: [{ connector_id: 'stripe' }, { connector_id: 'slack' }] } : { rows: [] }),
  }
  const g = await P.writeGrants(pool, 'org-1')
  ok('les autorisations enregistrées sont lues', g.has('stripe') && g.has('slack') && g.size === 2)
  const map = await P.permitsOf(pool, 'org-1')
  ok('et l’écran des applications les lit pareil', map.stripe === 'write' && map.notion === undefined)
}

/* ---- contre un vrai Postgres -------------------------------------------- */
// Les stubs plus haut prouvent la LECTURE des autorisations. Ils ne prouvent
// rien de l'écriture : la contrainte de clé primaire, le `on conflict`, et
// surtout que révoquer ne SUPPRIME pas la ligne — la trace de qui avait accordé
// quoi est exactement ce qu'un audit vient chercher.
if (process.env.TEST_DATABASE_URL) {
  console.log('\n--- accorder et révoquer, en base ---------------------------')
  const { Pool } = await import('pg')
  const pool = new Pool({ connectionString: process.env.TEST_DATABASE_URL })
  const { readFileSync } = await import('node:fs')
  for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql', 'db/permits.sql']) {
    await pool.query(readFileSync(f, 'utf8'))
  }
  await pool.query('truncate connector_permits, org_members, organisations, accounts restart identity cascade')

  const acc = (await pool.query(
    `insert into accounts (privy_did, email) values ('did:privy:p1','a@b.fr') returning id`)).rows[0].id
  const org = (await pool.query(
    `insert into organisations (name, created_by) values ('Acme', $1) returning id`, [acc])).rows[0].id

  ok('sans rien accordé, rien n’est accordé', (await P.writeGrants(pool, org)).size === 0)

  await P.setWriteGrant(pool, org, 'stripe', true, acc)
  ok('accorder l’écriture l’accorde', (await P.writeGrants(pool, org)).has('stripe'))

  // Le même geste deux fois ne doit pas violer la clé primaire.
  await P.setWriteGrant(pool, org, 'stripe', true, acc)
  ok('accorder deux fois ne casse rien', (await P.writeGrants(pool, org)).size === 1)

  await P.setWriteGrant(pool, org, 'stripe', false, acc)
  ok('révoquer retire l’autorisation', !(await P.writeGrants(pool, org)).has('stripe'))

  const row = (await pool.query(
    `select permit, granted_by, revoked_at from connector_permits where org_id = $1 and connector_id = 'stripe'`,
    [org])).rows[0]
  ok('mais la ligne reste, avec sa date de révocation', !!row && !!row.revoked_at,
    'une ligne effacée ne répond à aucune question d’audit')
  ok('et garde qui avait accordé', row.granted_by === acc)

  // Une autre entreprise ne doit pas hériter de l'autorisation.
  const org2 = (await pool.query(
    `insert into organisations (name, created_by) values ('Autre', $1) returning id`, [acc])).rows[0].id
  await P.setWriteGrant(pool, org, 'slack', true, acc)
  ok('une autorisation appartient à UNE entreprise',
    (await P.writeGrants(pool, org)).has('slack') && !(await P.writeGrants(pool, org2)).has('slack'),
    'elle n’appartient pas à celui qui a cliqué')

  await pool.end()
} else {
  console.log('\n(base non fournie · TEST_DATABASE_URL pour éprouver l’écriture)')
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
