// Chaque type d'agent, et ce que sa page porte réellement.
//
// La question à laquelle ce fichier répond : « est-ce que toutes les interfaces
// par agent sont complètes ? » Elle ne se règle pas à l'œil — il y a dix-huit
// rôles et six surfaces par rôle, soit une centaine de cases qu'on ne peut ni
// tenir en tête ni vérifier en cliquant.
//
// Il distingue deux choses, et c'est le point :
//
//   · un MANQUE — la page d'un agent ne montrerait rien, ou montrerait un bloc
//     vide. C'est un défaut, la suite échoue.
//   · une ABSENCE NORMALE — un agent utilitaire n'a pas de page publique, un
//     agent sans panneau de commande n'en a pas besoin. C'est déclaré ici, avec
//     sa raison, pour qu'on ne le redécouvre pas tous les mois.
//
//   node scripts/audit-agents.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-audit'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, logLevel: 'silent',
    // les modules d'interface ne sont pas chargés · on ne lit que des données
    external: ['react', 'react-dom', 'zustand', 'three', '@react-three/*'],
  })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const R = await load('src/data/roleAgents.ts', 'roles.mjs')
const C = await load('src/data/connectors.ts', 'connectors.mjs')

const ROLES = R.ROLE_AGENTS
const SRC = {
  dashboard: readFileSync('src/components/dashboard/Dashboard.tsx', 'utf8'),
  registry: readFileSync('src/modules/registry.tsx', 'utf8'),
  agentWork: readFileSync('src/components/agents/AgentWork.tsx', 'utf8'),
}

/* ---- ce que chaque rôle possède ---------------------------------------- */
// Un `case '<id>':` dans le switch de Dashboard · c'est ainsi que le panneau de
// commande et la fiche d'aide sont attachés à un rôle.
const caseIn = (src, id, after) => {
  const from = src.indexOf(after)
  if (from < 0) return false
  // on s'arrête au switch suivant pour ne pas confondre les deux tables
  const to = src.indexOf('const bodyFor', from + 1)
  const slice = src.slice(from, to > from ? to : undefined)
  return new RegExp(`case '${id}':`).test(slice)
}
const hasGuide = (id) => caseIn(SRC.dashboard, id, 'const guideFor')
const hasBody = (id) => new RegExp(`case '${id}':`).test(SRC.dashboard.slice(SRC.dashboard.indexOf('const bodyFor')))
const hasModule = (id) => new RegExp(`agentRole: '${id}'`).test(SRC.registry)

const rows = ROLES.map((r) => {
  const tasks = C.tasksForRole(r.id, r.dept)
  const apps = r.apps ?? []
  return {
    id: r.id,
    code: r.code,
    title: r.title,
    dept: r.dept,
    core: !!r.core,
    tasks: tasks.length,
    apps: apps.length,
    unknownApps: apps.filter((a) => !C.CONNECTOR_BY_ID[a]),
    guide: hasGuide(r.id),
    body: hasBody(r.id),
    module: hasModule(r.id),
    public: !!r.public,
  }
})

/* ---- le tableau --------------------------------------------------------- */
const pad = (s, n) => String(s).padEnd(n)
const mark = (b) => (b ? ' oui ' : '  -  ')
console.log('AGENT        RÔLE                  FONCTION      SEMÉ  TÂCHES  APPS  AIDE  PANNEAU  MODULE  PAGE')
console.log('-'.repeat(104))
for (const r of rows) {
  console.log(
    pad(r.code, 12) + pad(r.title, 22) + pad(r.dept, 14) +
    pad(r.core ? 'oui' : '-', 6) +
    pad(r.tasks, 8) + pad(r.apps, 6) +
    mark(r.guide) + ' ' + pad(mark(r.body), 8) + pad(mark(r.module), 8) + mark(r.public),
  )
}
console.log('-'.repeat(104))
console.log(`${rows.length} rôles · ${rows.filter((r) => r.core).length} semés dans chaque dojo\n`)

/* ---- ce qui doit être vrai pour TOUS ------------------------------------ */
console.log('--- ce qu’aucun agent ne peut ne pas avoir -------------------')

// C'est LA condition d'une page d'agent utilisable : sans tâche, AgentWork rend
// null et la page ne propose rien à faire — elle n'est alors qu'un nom.
const noTask = rows.filter((r) => r.tasks === 0)
ok('chaque agent a des livrables à produire', noTask.length === 0,
  noTask.length ? noTask.map((r) => `${r.code} (${r.dept})`).join(', ') : `${rows.length} rôles, tous servis`)

// Ce que la page annonce doit être CE métier. Six agents proposaient les deux
// mêmes choses parce que les livrables étaient rangés par fonction et qu'une
// fonction porte six métiers ; le titre disait pourtant « ce que Scout peut
// faire pour vous ».
const sig = new Map()
for (const r of ROLES) {
  const key = C.tasksForRole(r.id, r.dept).map((t) => t.id).sort().join('|')
  if (!sig.has(key)) sig.set(key, [])
  sig.get(key).push(r.code)
}
const sameOffer = [...sig.values()].filter((who) => who.length > 1)
ok('deux métiers ne proposent pas exactement les mêmes livrables', sameOffer.length === 0,
  sameOffer.map((w) => w.join('+')).join(' · ') || `${sig.size} offres distinctes pour ${ROLES.length} rôles`)

// Un identifiant sans prompt serveur rend « unknown_task » au clic. C'est ainsi
// que « brand », « video », « assets », « analytics » et « finance » ont vécu
// dans le tableau de bord sans exister nulle part.
//
// On APPELLE le code serveur plutôt que de lire son fichier : une table qui
// contient l'identifiant mais dont le constructeur de prompt lève, ou rend une
// chaîne vide, passerait une inspection textuelle et échouerait au clic.
const W = await load('api/_lib/worktasks.ts', 'worktasks.mjs')
const clientIds = [...new Set(ROLES.flatMap((r) => C.tasksForRole(r.id, r.dept).map((t) => t.id)))]

const orphans = clientIds.filter((id) => !W.serverWorkTask(id))
ok('chaque livrable proposé a son prompt côté serveur', orphans.length === 0,
  orphans.join(', ') || `${clientIds.length} livrables, tous servis`)

const broken = []
for (const id of clientIds) {
  const t = W.serverWorkTask(id)
  if (!t) continue
  try {
    // le cas réel le plus dur : aucun brief, aucun nom d'entreprise
    const prompt = t.user({ agentName: 'Scout', brief: '', startup: '' })
    if (!t.system?.trim() || !String(prompt || '').trim()) broken.push(id)
  } catch { broken.push(id) }
}
ok('et ce prompt tient sans brief ni nom d’entreprise', broken.length === 0,
  broken.join(', ') || 'le cas le plus fréquent · on clique sans rien écrire')

const titleless = clientIds.filter((id) => !W.serverWorkTask(id)?.title?.trim())
ok('chaque livrable rendu porte un titre', titleless.length === 0, titleless.join(', '))

const allServer = [...readFileSync('api/_lib/worktasks.ts', 'utf8').matchAll(/^\s*id: '([\w-]+)'/gm)].map((m) => m[1])
const unused = allServer.filter((id) => !clientIds.includes(id))
ok('et aucun prompt serveur n’est devenu inatteignable', unused.length === 0,
  unused.join(', ') || 'rien d’orphelin de l’autre côté')

// La carte agent → livrables est dérivée, plus recopiée · elle l'était dans
// deux fichiers, et les deux copies avaient divergé.
const agentTasks = C.AGENT_TASKS
const badMap = ROLES.filter((r) => {
  const own = C.tasksForRole(r.id, r.dept).map((t) => t.id)
  const mapped = agentTasks[r.id] ?? []
  return own.length && JSON.stringify(own) !== JSON.stringify(mapped)
})
ok('la carte agent → livrables découle de la même table', badMap.length === 0,
  badMap.map((r) => r.code).join(', ') || 'dérivée, jamais recopiée')

// Sentinel est le seul à n'avoir aucune application, et c'est son métier : il
// garde les limites, les clés et les interrupteurs de l'entreprise, il n'agit
// pas chez des tiers. Lui en attribuer pour remplir une case serait faux.
const NO_APPS_OK = ['sentinel']
const noApp = rows.filter((r) => r.apps === 0 && !NO_APPS_OK.includes(r.id))
ok('chaque agent a une application où agir, sauf ceux qui n’agissent pas dehors',
  noApp.length === 0,
  noApp.length ? noApp.map((r) => r.code).join(', ') : `exception déclarée : ${NO_APPS_OK.join(', ')}`)
const uselessException = NO_APPS_OK.filter((id) => (rows.find((r) => r.id === id)?.apps ?? 0) > 0)
ok('et cette exception sert encore à quelque chose', uselessException.length === 0,
  uselessException.join(', ') || 'une exception périmée cache la règle qu’elle contourne')

const badApp = rows.filter((r) => r.unknownApps.length)
ok('aucune application citée n’est inconnue du catalogue', badApp.length === 0,
  badApp.map((r) => `${r.code}: ${r.unknownApps.join(', ')}`).join(' | ') || 'une app fantôme rendrait une carte vide')

const dup = rows.map((r) => r.id).filter((v, i, a) => a.indexOf(v) !== i)
ok('aucun identifiant de rôle en double', dup.length === 0, dup.join(', '))

const noDesc = ROLES.filter((r) => !(r.desc ?? '').trim())
ok('chaque agent se présente en une ligne', noDesc.length === 0, noDesc.map((r) => r.code).join(', '))

const noTint = ROLES.filter((r) => !/^#[0-9a-f]{6}$/i.test(r.tint ?? ''))
ok('chaque agent a sa couleur', noTint.length === 0, noTint.map((r) => r.code).join(', '))

/* ---- trois surfaces, une seule liste ------------------------------------ */
console.log('\n--- fiche d’aide, panneau, module ---------------------------')
// On explique des RÉGLAGES, pas un métier. Chief, Sentinel et Vaultor portent
// des boutons dont l'effet ne se devine pas — combien l'équipe fait seule,
// combien elle peut dépenser, où sont les clés — donc une fiche qui les
// explique, un panneau qui les porte, et un module qui les héberge. Les quinze
// autres se décrivent par leur ligne de présentation et le résumé de chaque
// livrable ; leur ajouter une fiche serait de la paraphrase.
//
// Les trois surfaces vont ensemble par construction. Si l'une se décroche des
// deux autres, c'est soit un panneau sans mode d'emploi, soit une pastille
// d'aide qui explique des réglages inexistants.
const WITH_SETTINGS = ['chief', 'sentinel', 'vaultor']
const drift = rows.filter((r) => {
  const should = WITH_SETTINGS.includes(r.id)
  return r.guide !== should || r.body !== should || r.module !== should
})
ok('fiche d’aide, panneau et module désignent les mêmes agents', drift.length === 0,
  drift.map((r) => `${r.code} (aide ${r.guide ? 'oui' : 'non'}, panneau ${r.body ? 'oui' : 'non'}, module ${r.module ? 'oui' : 'non'})`).join(' · ')
  || WITH_SETTINGS.join(', '))

// Depuis que InfoDot ne s'affiche plus quand il n'a rien à dire, une fiche
// absente n'est plus une impasse : la pastille n'apparaît pas du tout.
const infodot = readFileSync('src/components/InfoDot.tsx', 'utf8')
ok('et une pastille sans contenu ne s’affiche pas', /isEmpty\(children\)/.test(infodot),
  'sinon quinze agents ouvrent une fenêtre vide, ce qui se lit comme une panne')

/* ---- les absences NORMALES, déclarées ------------------------------------ */
console.log('\n--- ce qui manque volontairement ----------------------------')
// Une page publique s'adresse à quelqu'un qui RECRUTE ce métier. Kaizen veille
// sur l'application elle-même : ce n'est pas un poste qu'une entreprise ouvre.
const NO_PUBLIC_OK = ['kaizen']
// utilitaire (facturation, sécurité) n'est pas un métier qu'on recrute.
const noPublic = rows.filter((r) => !r.public)
ok('seuls les agents qui ne sont pas un métier n’ont pas de page publique',
  noPublic.every((r) => NO_PUBLIC_OK.includes(r.id)),
  noPublic.map((r) => r.code).join(', ') || 'tous en ont une')
const stalePublic = NO_PUBLIC_OK.filter((id) => rows.find((r) => r.id === id)?.public)
ok('et cette exception sert encore', stalePublic.length === 0,
  stalePublic.join(', ') || `exception déclarée : ${NO_PUBLIC_OK.join(', ')}`)

/* ---- les trois chiffres qui doivent n'en faire qu'un -------------------- */
console.log('\n--- l’effectif, dit une seule fois --------------------------')
// `core`, CORE_IDS et COMPANY_IDS répondaient à la même question — « qui est
// semé dans un dojo ? » — et donnaient huit, huit et douze. Personne ne lisait
// les deux premiers, donc rien ne cassait : la documentation mentait sans
// conséquence visible, ce qui est la façon dont elle reste fausse longtemps.
ok('« core » désigne exactement l’équipage',
  JSON.stringify([...R.CORE_IDS].sort()) === JSON.stringify([...R.COMPANY_IDS].sort()),
  `core ${R.CORE_IDS.length} · équipage ${R.COMPANY_IDS.length}`)

ok('l’équipage et les spécialistes couvrent tous les rôles',
  R.COMPANY_IDS.length + rows.filter((r) => !r.core).length === rows.length,
  `${R.COMPANY_IDS.length} + ${rows.filter((r) => !r.core).length} = ${rows.length}`)

const header = readFileSync('src/data/roleAgents.ts', 'utf8').slice(0, 2400)
// Un chiffre en toutes lettres juste avant « coéquipiers » ou « agents » est une
// affirmation sur l'effectif · elle doit être celle du code.
const WORDS = { huit: 8, dix: 10, douze: 12, seize: 16, eight: 8, ten: 10, twelve: 12, eighteen: 18 }
const claims = [...header.matchAll(/\b(\w+)\s+(?:AI\s+)?(?:teammates|coéquipiers|agents)\b/gi)]
  .map((m) => m[1].toLowerCase()).filter((w) => w in WORDS)
const wrongClaims = claims.filter((w) => WORDS[w] !== R.COMPANY_IDS.length)
ok('et l’en-tête du fichier ne contredit pas le code', wrongClaims.length === 0,
  wrongClaims.length
    ? `annonce « ${wrongClaims.join(', ')} », l’équipage en compte ${R.COMPANY_IDS.length}`
    : (claims.length ? `annonce « ${claims.join(', ')} » · juste` : 'aucune annonce chiffrée'))

/* ---- le brouillon rendu quand aucun modèle ne répond ------------------- */
//
// Sans clé de modèle, l'app produit un brouillon LOCAL et l'affiche comme
// livrable. C'est un choix défendable — un écran qui rend quelque chose
// d'honnêtement étiqueté vaut mieux qu'un écran mort — mais il n'est tenable
// que si l'étiquette est là ET si le document n'est pas une fuite de code :
// trente-trois tâches sur trente-huit sortaient avec leur IDENTIFIANT en
// titre, « jd », « brand-platform ».
{
  const L = await load('src/agents/localDraft.ts', 'localdraft.mjs')
  const tasks = Object.values(C.ROLE_TASKS).flat()
  const slug = []
  const unlabelled = []
  const thin = []
  for (const t of tasks) {
    const d = L.localDraft(t.id, 'une boulangerie bio à Lyon')
    if (d.title.startsWith(t.id + ' ')) slug.push(t.id)
    if (!/local draft/i.test(d.title) || !/local draft/i.test(d.markdown)) unlabelled.push(t.id)
    if (d.markdown.length < 380) thin.push(t.id)
  }
  ok('aucun brouillon ne porte un identifiant technique en titre',
    slug.length === 0, slug.slice(0, 5).join(', ') || 'un titre qui est un id se lit comme une fuite de code')
  ok('et tous disent qu’ils ne viennent pas d’un modèle',
    unlabelled.length === 0, unlabelled.slice(0, 5).join(', ') || 'sinon on croit avoir reçu du travail écrit')
  ok('et aucun n’est un document vide',
    thin.length === 0, thin.slice(0, 5).join(', ') || `${tasks.length} tâches ont de quoi partir`)
}

/* ---- tout code d'erreur du serveur a une phrase à l'écran ---------------- */
//
// Deux codes réalistes s'affichaient tels quels : « That didn't go through:
// rate » quand on relance trop vite, et « auth » quand la session a expiré. Un
// identifiant à l'écran ne dit ni ce qui s'est passé ni quoi faire — et ce sont
// justement les deux qu'un utilisateur normal rencontre.
//
// Les codes qui mènent au brouillon local (NO_MODEL dans workStore) n'ont pas
// besoin de phrase : ils ne produisent pas d'erreur du tout.
{
  const runSrc = readFileSync('api/agent-run.ts', 'utf8')
  const uiSrc = readFileSync('src/components/agents/AgentWork.tsx', 'utf8')
  const storeSrc = readFileSync('src/agents/workStore.ts', 'utf8')

  const emitted = new Set([...runSrc.matchAll(/error: '([a-z_]+)'/g)].map((m) => m[1]))
  const toDraft = new Set(
    ((storeSrc.match(/const NO_MODEL = new Set\(\[([^\]]*)\]/) || [])[1] || '')
      .split(',').map((x) => x.trim().replace(/'/g, '')).filter(Boolean),
  )
  const spoken = new Set([...uiSrc.matchAll(/runError\.code === '([a-z_]+)'/g)].map((m) => m[1]))

  const raw = [...emitted].filter((c) => !toDraft.has(c) && !spoken.has(c))
  // bad_json, method, origin ne viennent que d'un client cassé · la phrase de
  // repli les couvre, à condition qu'elle ne récite pas le code.
  const CLIENT_BUG = new Set(['bad_json', 'method', 'origin'])
  const uncovered = raw.filter((c) => !CLIENT_BUG.has(c))
  ok('tout code d’erreur qu’un utilisateur peut voir a une vraie phrase',
    uncovered.length === 0, uncovered.join(', ') || `${spoken.size} codes expliqués`)
  ok('et le repli ne récite pas l’identifiant technique',
    !/go through[^<]*\{runError\.code\}/.test(uiSrc),
    '« That didn’t go through: rate » ne dit ni ce qui s’est passé ni quoi faire')
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
