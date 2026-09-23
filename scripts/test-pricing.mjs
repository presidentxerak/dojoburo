// LA GRILLE DE PRIX · vérifiée sans navigateur.
//
// Ce que cette garde protège n'est pas un affichage, c'est une propriété que le
// produit a déjà perdue deux fois : UN PRIX N'EXISTE QU'À UN SEUL ENDROIT.
//
// Première fois, la landing vendait des crédits à 1 $ pendant que le panneau
// Billing vendait quatre paliers comptés et que budget.ts facturait un crédit à
// un quatrième tarif. Deuxième fois, la planche 07 du deck investisseurs
// affichait « Pro 29 $/mois, Team 22 $/siège », trois chiffres qu'aucun fichier
// ne produisait, à côté d'une planche 05 qui en affichait deux autres.
//
// Aucune de ces deux fautes n'a été trouvée par un typecheck, parce qu'une
// chaîne de caractères juste et une chaîne de caractères périmée se compilent
// exactement pareil. Elles ont été trouvées en lisant. C'est ce que cette
// épreuve fait à la place.
//
// ELLE VÉRIFIE AUSSI LE FOND, pas seulement la cohérence : qu'aucun forfait ne
// se remette à vendre des exécutions. C'est la promesse qui a mis le produit en
// porte-à-faux (on vendait 2 000 tâches par mois alors que plus rien ne
// tournait), et elle reviendrait de la même façon qu'elle est venue, une ligne
// à la fois, écrite de bonne foi.
//
//   node scripts/test-pricing.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-pricing'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const P = await load('src/data/plans.ts', 'plans.mjs')
const { PLANS, PLAN_BY_ID, PATH_EUR, TRADE_EUR, BUNDLE_EUR, DISCOVERY_DAYS, planPrice, priceTag } = P

/* --- 1 · la grille tient debout ------------------------------------------ */

ok('trois formules', PLANS.length === 3, `${PLANS.length}`)
ok('aucun identifiant en double', new Set(PLANS.map((p) => p.id)).size === PLANS.length)
ok('aucun nom en double', new Set(PLANS.map((p) => p.name)).size === PLANS.length)
ok('une seule formule mise en avant', PLANS.filter((p) => p.featured).length === 1)

// LES IDENTIFIANTS SONT DES CLÉS DE STOCKAGE. Ils sont écrits dans la colonne
// organisations.plan, dans les métadonnées Stripe et dans STRIPE_PRICE_*. Les
// renommer orphelinerait tout abonnement déjà vendu, et ça ne se verrait qu'au
// premier renouvellement.
for (const id of ['free', 'founder', 'managed']) {
  ok(`la clé « ${id} » existe toujours`, !!PLAN_BY_ID[id], PLAN_BY_ID[id]?.name ?? 'absente')
}

// … et les DEUX formules renommées n'affichent plus leur clé. La règle ne peut
// pas être « aucun nom n'égale son identifiant » : « Free » s'appelle
// légitimement Free, et une garde écrite comme ça accuse le seul plan qui n'a
// jamais changé. Ce qu'on surveille est précis · que « Founder » et « Managed »,
// noms de l'ancien produit, ne reviennent pas à l'écran.
ok('« founder » n\'affiche plus Founder', PLAN_BY_ID.founder.name !== 'Founder', PLAN_BY_ID.founder.name)
ok('« managed » n\'affiche plus Managed', PLAN_BY_ID.managed.name !== 'Managed', PLAN_BY_ID.managed.name)

/* --- 2 · un supplément dit de quoi il est le supplément -------------------- */

// LE MODÈLE A CHANGÉ DE FORME. Cette section vérifiait un prix au siège et son
// plancher : elle gardait une offre d'abonnement qui n'existe plus. Elle n'est
// pas retirée pour autant · le danger qu'elle surveillait est le même, il a
// seulement changé de nom.
//
// Le danger : UN PRIX QUI VEUT DIRE DEUX CHOSES. Hier, « 15 $ » pouvait être le
// prix du compte ou celui d'un siège. Aujourd'hui, « 49 € » peut être le prix
// d'entrée ou un supplément. Dans les deux cas quelqu'un achète en croyant
// payer autre chose, et il le découvre au paiement.
const addOns = PLANS.filter((p) => p.addOn)
ok('une formule en supplément existe', addOns.length === 1, `${addOns.length}`)
for (const p of addOns) {
  ok(`« ${p.name} » dit de quoi elle est le supplément`, !!p.requires && !!PLAN_BY_ID[p.requires],
    p.requires ?? 'rien')
  ok(`« ${p.name} » coûte moins que ce qu'elle complète`, p.eur < PLAN_BY_ID[p.requires].eur,
    `${priceTag(p.eur)} < ${priceTag(PLAN_BY_ID[p.requires].eur)}`)
  // UN SUPPLÉMENT NE SE VEND PAS SEUL · s'il pouvait, ce ne serait pas un
  // supplément mais une deuxième offre d'entrée, moins chère que la première.
  ok(`« ${p.name} » n'est pas une porte d'entrée`, p.requires !== 'free')
}
ok('le total des deux est calculé, jamais recopié', BUNDLE_EUR === PATH_EUR + TRADE_EUR, `${BUNDLE_EUR}`)

// RIEN NE SE RENOUVELLE · c'est la promesse centrale du nouveau modèle, et
// c'est une propriété des données, pas une phrase. Une formule payante qui
// perdrait `once` redeviendrait un abonnement sans qu'aucun texte ne change.
for (const p of PLANS.filter((x) => x.eur > 0)) {
  ok(`« ${p.name} » se paie une fois`, p.once === true, p.once ? 'oui' : 'abonnement')
}

// La formule gratuite reste gratuite, et une seule l'est.
ok('une seule formule à zéro', PLANS.filter((p) => p.eur === 0).length === 1)
ok('la formule gratuite n\'est pas un supplément', !PLAN_BY_ID.free.addOn)
ok('la formule gratuite s\'affiche 0 €', planPrice(PLAN_BY_ID.free) === priceTag(0), planPrice(PLAN_BY_ID.free))
ok('le parcours découverte dure une semaine', DISCOVERY_DAYS === 7, `${DISCOVERY_DAYS}`)

// LA CARTE compose l'unité, et data/plans n'émet plus de prose.
{
  const card = readFileSync('src/components/landing/Pricing.tsx', 'utf8')
  ok('la carte compose l\'unité depuis le dictionnaire', /t\('price\.once'\)/.test(card))
  ok('la carte dit le préalable depuis le dictionnaire', /t\('price\.after'\)/.test(card))
  const src = readFileSync('src/data/plans.ts', 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  ok('data/plans n\'écrit plus « a month »', !/a month/.test(src))
  ok('data/plans n\'écrit plus « / seat »', !/\/ seat/.test(src))
  // J'AI ÉCRIT ICI UNE RÈGLE QUI ACCUSAIT LA BONNE COPIE. Elle interdisait le
  // mot « abonnement » dans les données, en le prenant pour le symptôme d'un
  // retour à l'ancien modèle. Or la formule gratuite dit, à juste titre :
  // « aucun essai qui se transforme en abonnement ». C'est exactement la
  // phrase qu'on veut y lire, et la garde la refusait.
  //
  // Le mot n'est pas le défaut. Le défaut serait qu'une formule payante SOIT
  // un abonnement, et cela se vérifie sur `once`, juste au-dessus, où c'est une
  // propriété et non une tournure. Une garde qui bannit un vocabulaire finit
  // par faire écrire moins clairement pour lui plaire.
}

/* --- 3 · aucun forfait ne revend d'exécutions ---------------------------- */

// Le fond. « 2 000 tâches par mois » a survécu des semaines au repositionnement
// parce que c'était un champ de données que personne ne relisait.
const SOLD_RUNS = /\b\d[\d,]* (tasks|runs|credits|tokens) (a|per) month\b|\btasks included\b|\bincluded tasks\b/i
for (const p of PLANS) {
  const text = [p.tagline, p.inclHead, ...p.incl].join(' · ')
  ok(`« ${p.name} » ne vend pas d'exécutions`, !SOLD_RUNS.test(text),
    SOLD_RUNS.test(text) ? text.match(SOLD_RUNS)[0] : 'rien de compté')
  ok(`« ${p.name} » dit ce qu'elle contient`, p.incl.length >= 3, `${p.incl.length} lignes`)
}

// CE QUE LA FORMULE GRATUITE PROMET A CHANGÉ, et la garde suit.
//
// Elle promettait le cours entier et le diplôme, parce que tout était gratuit.
// Le gratuit est maintenant une SEMAINE, et c'est un changement d'offre, pas
// de formulation. Garder l'ancienne règle aurait forcé à promettre un cours
// entier qu'on ne donne plus ; la supprimer aurait laissé la formule gratuite
// se vider sans que rien ne rougisse.
//
// Ce qu'elle doit promettre maintenant, et qui est ce qui la rend honnête :
// les sept jours EN ENTIER, et aucune carte bancaire. Une découverte tronquée
// ou un essai qui se transforme en prélèvement sont les deux façons connues de
// transformer un cadeau en piège.
const freeText = [PLAN_BY_ID.free.tagline, ...PLAN_BY_ID.free.incl].join(' · ').toLowerCase()
const freeTextFr = [PLAN_BY_ID.free.fr.tagline, ...PLAN_BY_ID.free.fr.incl].join(' · ').toLowerCase()
ok('la formule gratuite promet les sept jours entiers',
  /in full/.test(freeText) && /en entier/.test(freeTextFr), freeText.slice(0, 60))
ok('la formule gratuite promet de ne pas prendre de carte',
  /no card/.test(freeText) && /aucune carte/.test(freeTextFr))
// … ET ELLE NE SE TRANSFORME PAS EN PRÉLÈVEMENT. C'est la promesse que le mot
// « gratuit » ne suffit pas à tenir, et celle qu'on vérifie donc à part.
ok('la formule gratuite dit qu\'elle ne devient pas un abonnement',
  /subscription/.test(freeText) && /abonnement/.test(freeTextFr))

/* --- 3 bis · le cours n'enseigne pas l'ancien modèle --------------------- */

// CE QUE CETTE SECTION A TROUVÉ · la leçon « what it costs » expliquait sur
// quatre blocs que rien n'est compté ici, puis son questionnaire demandait ce
// que coûte un passage de cinq étapes et donnait « cinq crédits » comme BONNE
// réponse, avec une explication qui décrivait un décompte mensuel sur un
// forfait qui n'existe plus. La leçon se contredisait à deux blocs d'écart.
//
// La section 3 ne pouvait pas le voir : elle relit les forfaits, pas les
// cours. La section 4 non plus : les bons prix étaient bien écrits, c'est un
// ancien modèle de facturation qui traînait à côté.
//
// LA RÈGLE EST PRÉCISE PAR SA PORTÉE, PAS PAR SON MOTIF. C'est la deuxième
// écriture de cette garde, et la première était trop étroite : elle cherchait
// des formes (« cinq crédits », « du forfait mensuel ») et a laissé passer
// « only running work costs credits », qui est la même faute dite autrement.
// Chercher toutes les formes d'une affirmation est perdu d'avance.
//
// Donc le motif est le mot, et c'est la PORTÉE qui rend la règle juste : on ne
// lit que ce que la leçon affirme être VRAI, c'est à dire la bonne réponse,
// l'explication qui la justifie et la phrase à retenir. Les distracteurs sont
// exclus, et « cinq crédits » reste une excellente mauvaise réponse. Une garde
// qui bannirait le mot partout accuserait exactement le travail correct.
//
// LE CORPS DES BLOCS EST HORS PORTÉE, et pour la même raison : la leçon sur les
// prix dit « nous ne vendons ni passages, ni tâches, ni crédits », ce qui est
// la phrase la plus juste du fichier et contient le mot interdit. Ce qui a été
// trouvé dans un corps (« spends credits on steps that were already fine ») a
// donc été corrigé à la lecture, pas par une règle qui aurait accusé la bonne
// phrase pour attraper la mauvaise.
const METERED = /\bcredits?\b|\bcrédits?\b|\bmonthly allowance\b/i

const A = await load('src/data/academy.ts', 'academy.mjs')
// LES DEUX LANGUES · une traduction fidèle d'une phrase périmée est une phrase
// périmée. On relit donc la leçon française avec la même règle.
const claimsOf = (l) => [l.quiz.options[l.quiz.answer], l.quiz.why, l.takeaway].join(' · ')
for (const { lesson } of A.ALL_LESSONS) {
  for (const lang of ['en', 'fr']) {
    const l = A.academyLessonIn(lesson, lang)
    const m = claimsOf(l).match(METERED)
    ok(`« ${lesson.slug} » n'affirme pas être compté (${lang})`, !m, m ? m[0] : 'rien de compté')
  }
}

// … et les morsures, dans les deux sens.
ok('morsure · une bonne réponse qui vend des crédits est vue',
  METERED.test('Five credits'))
ok('morsure · une bonne réponse qui les vend autrement est vue',
  METERED.test('Nothing: only running work costs credits'))
ok('morsure · une explication qui décompte un forfait est vue',
  METERED.test('a step draws about two cents from the monthly allowance'))
ok('morsure · la même faute en français est vue',
  METERED.test('Seul le travail qui tourne consomme des crédits'))
ok('morsure · une bonne réponse légitime n\'est pas accusée',
  !METERED.test('Nothing, because nothing in the dojo calls a paid model'))
ok('morsure · un plafond quotidien reste permis',
  !METERED.test('an allowance that simply stops'))
// La PORTÉE fait partie de la règle · un distracteur a le droit de mentir,
// c'est son métier. On vérifie que ce qu'on relit ne le contient pas.
{
  const faux = { quiz: { options: ['Five credits', 'Nothing at all'], answer: 1, why: 'Rien n\'est compté.' }, takeaway: 'Rien n\'est compté.' }
  ok('morsure · un distracteur n\'est pas relu', !METERED.test(claimsOf(faux)))
}

/* --- 4 · un prix n'est écrit qu'une fois --------------------------------- */

// On relit les sources et on cherche un prix en dur ailleurs que dans plans.ts.
//
// LA RÈGLE A CHANGÉ DE MONNAIE ET DE FORME. Elle cherchait un montant en
// dollars collé à une périodicité, parce que le produit se vendait par mois.
// Il se vend maintenant une fois, en euros, donc la forme dangereuse n'est
// plus « 19 $/mois » mais « 99 € » tout court, écrit ailleurs qu'ici.
//
// Elle ne peut toujours pas être « aucun chiffre suivi d'un euro » : le cours
// de sobriété parle de tarifs de modèles et a raison de le faire. On cherche
// donc EXACTEMENT NOS DEUX PRIX, ce qui est plus précis que la forme générale
// et attrape la seule faute qui compte : une copie qui survit à un changement.
const PRICE_SHAPE = new RegExp(
  `\\b(?:${PATH_EUR}|${TRADE_EUR}|${BUNDLE_EUR})\\s?(?:€|EUR\\b)` +
  `|\\$\\d+\\s*(?:/\\s*(?:mo|month|seat)|a month\\b|per month\\b|per seat\\b|/mois)`, 'i')
const SKIP = new Set(['src/data/plans.ts'])
// Ces fichiers PRODUISENT du contenu d'exemple pour un site fictif fabriqué
// dans le dojo · leurs prix sont de la matière pédagogique, pas notre grille.
const FICTION = new Set(['src/agents/localDraft.ts', 'src/lib/site.ts'])

// DEUX FICHIERS ONT LE DROIT D'ÉCRIRE LES PRIX, et ce ne sont pas des oublis :
// une leçon est de la prose, et le prompt du robot de support part dans un
// bundle Edge séparé qui ne peut rien importer de src/. Ils sont donc exemptés
// de la règle « un prix n'est écrit qu'une fois » · mais une exemption gratuite
// est un trou, alors on la paie tout de suite en vérifiant que ce qu'ils
// écrivent est bien ce que plans.ts dit. C'est exactement la copie qui avait
// gardé « Founder à 29 $ » vivante des semaines après le repositionnement.
const ALLOWED = {
  'src/data/academy.ts': [`${PATH_EUR} €`, `${TRADE_EUR} €`, `${BUNDLE_EUR} €`],
  'api/chat.ts': [`${PATH_EUR} €`, `${TRADE_EUR} €`, `${BUNDLE_EUR} €`],
}
for (const [rel, needles] of Object.entries(ALLOWED)) {
  const body = readFileSync(rel, 'utf8')
  for (const n of needles) {
    ok(`${rel} écrit « ${n} », qui vient de plans.ts`, body.includes(n))
  }
}

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(e)) out.push(p)
  }
  return out
}
const files = [...walk('src'), ...walk('api')]
const strays = []
for (const f of files) {
  const rel = f.replace(/\\/g, '/')
  if (SKIP.has(rel) || FICTION.has(rel) || rel in ALLOWED) continue
  // On ne lit que ce qui sera VU : les commentaires expliquent l'histoire des
  // prix et ont le droit de citer les anciens. Une garde qui accuse sa propre
  // documentation finit par être désarmée.
  const src = readFileSync(f, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  const m = src.match(PRICE_SHAPE)
  if (m) strays.push(`${rel} · ${m[0]}`)
}
ok('aucun prix d\'abonnement écrit en dehors de plans.ts', strays.length === 0,
  strays.length ? strays.join(' | ') : `${files.length} fichiers relus`)

/* --- 5 · les morsures ---------------------------------------------------- */

// Une garde qui ne peut pas rougir ne garde rien. On lui donne quatre cas faux
// et on vérifie qu'elle les voit.
ok('morsure · un forfait qui revend des tâches est vu',
  SOLD_RUNS.test('2,000 tasks a month, only ever drawn on a live deployment'))
ok('morsure · un forfait qui revend des runs est vu',
  SOLD_RUNS.test('500 runs per month included'))
ok('morsure · un prix en dur est vu',
  PRICE_SHAPE.test('Founder is $29 a month and most people want it'))
ok('morsure · un prix au siège en dur est vu',
  PRICE_SHAPE.test('Team · $22/seat'))
// … et qu'elle ne rougit PAS sur ce qui est légitime : le cours de frugalité
// cite des tarifs de modèles au million de jetons, ce qui n'est pas un forfait.
ok('morsure · un tarif de modèle n\'est pas accusé',
  !PRICE_SHAPE.test('Published Sonnet rates: $3 per million in, $15 per million out'))
ok('morsure · un coût de run n\'est pas accusé',
  !PRICE_SHAPE.test('this run would cost about $0.21 on your own key'))

console.log(fails ? `\ntest-pricing · ${fails} problème(s)` : '\ntest-pricing · la grille est cohérente et ne vend aucune exécution')
// LA SORTIE EST VIDÉE AVANT DE PARTIR · « process.exitCode » et non
// « process.exit() ».
//
// POURQUOI CE N'EST PAS UN DÉTAIL DE STYLE. Vers un terminal, l'écriture est
// synchrone et tout s'affiche. Vers un TUYAU · c'est à dire dès que le portail
// lance cette épreuve · elle est asynchrone, et « process.exit() » part sans
// attendre : ce qui n'est pas encore parti est JETÉ.
//
// Mesuré ici même : la même épreuve sur les mêmes données rendait 30 690
// caractères une fois sur deux et 9 326 l'autre, soit 179 lignes sur 528. Le
// code de sortie, lui, restait juste · une épreuve en échec était bien
// déclarée en échec. Ce qui disparaissait, c'était le DÉTAIL, c'est à dire la
// seule chose qu'on lit pour corriger.
//
// Poser le code et laisser Node sortir tout seul vide la file d'abord. Ces
// épreuves ne tiennent aucune ressource ouverte, donc il n'y a rien à forcer.
process.exitCode = fails ? 1 : 0
