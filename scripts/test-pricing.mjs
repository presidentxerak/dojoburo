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
const { PLANS, PLAN_BY_ID, LIBRARY_USD, SEAT_USD, SEAT_MIN, SCHOOL_FLOOR_USD, planPrice } = P

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

/* --- 2 · le prix au siège dit combien de sièges --------------------------- */

// $15 et $15 le siège ne sont pas la même offre. Une carte qui affiche le prix
// unitaire sans le plancher laisse quelqu'un acheter en croyant payer $15.
const seated = PLANS.filter((p) => p.perSeat)
ok('une formule au siège existe', seated.length === 1)
for (const p of seated) {
  ok(`« ${p.name} » annonce un minimum de sièges`, typeof p.minSeats === 'number' && p.minSeats >= 2, `${p.minSeats}`)
  // L'UNITÉ ET LE PLANCHER SONT DES MOTS, donc ils ont quitté data/plans pour
  // la carte, où ils se composent depuis le dictionnaire dans les deux langues.
  //
  // CETTE GARDE A DONC CHANGÉ DE CIBLE. Elle vérifiait que planUnit rendait une
  // chaîne contenant « seat » · elle vérifierait aujourd'hui qu'une phrase
  // anglaise est bien toujours écrite en dur dans un fichier de données, ce qui
  // est exactement le défaut qu'on vient de retirer. Elle exige maintenant que
  // la carte construise les deux, ce qui est la nouvelle vérité, et que
  // data/plans n'émette plus de prose.
  ok(`« ${p.name} » a de quoi composer son plancher`, p.usd * p.minSeats === SCHOOL_FLOOR_USD,
    `${p.usd} × ${p.minSeats} = ${SCHOOL_FLOOR_USD}`)
}
ok('le plancher exporté est le vrai produit', SCHOOL_FLOOR_USD === SEAT_USD * SEAT_MIN, `${SCHOOL_FLOOR_USD}`)

// Un siège doit coûter MOINS qu'un abonnement individuel, sinon l'acheteur
// groupé paie plus cher que ses gens pris un par un, et le plan ne sert à rien.
ok('un siège est moins cher que l\'abonnement individuel', SEAT_USD < LIBRARY_USD, `$${SEAT_USD} < $${LIBRARY_USD}`)
// … mais le plancher doit dépasser l'abonnement individuel, sinon la formule
// groupée est la moins chère pour une personne seule et personne ne comprend.
ok('le plancher dépasse l\'abonnement individuel', SCHOOL_FLOOR_USD > LIBRARY_USD, `$${SCHOOL_FLOOR_USD} > $${LIBRARY_USD}`)

// La formule gratuite reste gratuite, et une seule l'est.
ok('une seule formule à zéro', PLANS.filter((p) => p.usd === 0).length === 1)
ok('la formule gratuite n\'est pas au siège', !PLAN_BY_ID.free.perSeat)
ok('la formule gratuite s\'affiche $0', planPrice(PLAN_BY_ID.free) === '$0', planPrice(PLAN_BY_ID.free))

// LA CARTE compose l'unité et le plancher, et data/plans n'émet plus de prose.
{
  const card = readFileSync('src/components/landing/Pricing.tsx', 'utf8')
  ok('la carte compose l\'unité depuis le dictionnaire', /t\('price\.seatMonth'\)/.test(card))
  ok('la carte compose le plancher depuis le dictionnaire', /t\('price\.from'\)/.test(card))
  const src = readFileSync('src/data/plans.ts', 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  ok('data/plans n\'écrit plus « / seat / month »', !/\/ seat \/ month/.test(src))
  ok('data/plans n\'écrit plus « a month »', !/a month/.test(src))
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

// LE DIPLÔME EST GRATUIT · c'est une décision, pas un détail de formulation :
// il ne coûte rien à délivrer et c'est la preuve publique que le cours marche.
// Le faire payer taxerait exactement les gens qui en parlent autour d'eux.
const freeText = [PLAN_BY_ID.free.tagline, ...PLAN_BY_ID.free.incl].join(' · ').toLowerCase()
ok('la formule gratuite promet le diplôme', freeText.includes('diploma'), freeText.includes('diploma') ? 'oui' : 'absent')
ok('la formule gratuite promet le cours entier', /whole course|every lesson|three courses/.test(freeText))

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
// La règle ne peut pas être « aucun chiffre précédé d'un dollar » : le cours de
// frugalité parle de tarifs de modèles, et il a raison de le faire. On cherche
// donc la forme d'un PRIX D'ABONNEMENT, c'est à dire un montant collé à une
// périodicité ou à un siège.
const PRICE_SHAPE = /\$\d+\s*(\/\s*(mo|month|seat)|a month\b|per month\b|per seat\b|\/mois)/i
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
  'src/data/academy.ts': [`$${LIBRARY_USD} a month`, `$${SEAT_USD} a seat a month`, `$${SCHOOL_FLOOR_USD} a month`],
  'api/chat.ts': [`$${LIBRARY_USD}/month`, `$${SEAT_USD} per seat per month`, `$${SCHOOL_FLOOR_USD}/month and up`],
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
process.exit(fails ? 1 : 0)
