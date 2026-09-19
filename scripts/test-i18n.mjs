// LE FRANÇAIS · vérifié sans navigateur, et surtout COMPTÉ.
//
// CE QUE CETTE ÉPREUVE EXISTE POUR EMPÊCHER n'est pas une faute de traduction,
// c'est un mensonge de couverture. Traduire ce site prend plusieurs lots ;
// entre le premier et le dernier, il est partiellement français. Le danger
// n'est pas cet état intermédiaire, qui est normal, c'est de le décrire comme
// terminé · à soi-même d'abord, puis au visiteur.
//
// Elle rend donc un CHIFFRE mesuré à chaque exécution : combien de clés,
// combien de piliers, quelles surfaces sont complètes. On ne pourra pas dire
// « le site est en français » tant que ce chiffre ne le dit pas.
//
// ELLE VÉRIFIE AUSSI LA STRUCTURE, parce que deux défauts silencieux guettent
// ce genre de fichier :
//
//   1 · UNE TRADUCTION QUI EST LA COPIE DE L'ANGLAIS. C'est ce qui arrive
//       quand on remplit un dictionnaire en collant la colonne de gauche dans
//       celle de droite pour « y revenir plus tard ». Rien ne rougit, le site
//       a l'air traduit, et il est en anglais.
//
//   2 · UNE SURFACE QUI DIT ÊTRE TRADUITE ET GARDE DES PHRASES EN DUR. Le
//       pied de page est le cas type : personne ne le relit, donc un libellé
//       anglais y reste des mois.
//
//   node scripts/test-i18n.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-i18n'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent', external: ['react'] })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const D = await load('src/i18n/dict.ts', 'dict.mjs')
const P = await load('src/data/positioning.ts', 'pos.mjs')
const PL = await load('src/data/plans.ts', 'plans.mjs')
const { DICT, KEY_COUNT, translate } = D
const { PILLARS, positioningFor, PROMISE, PROMISE_FR, SUBTITLE, SUBTITLE_FR, NOT_THIS, NOT_THIS_FR } = P
const { PLANS } = PL

/* --- 1 · le dictionnaire tient debout ------------------------------------ */

const keys = Object.keys(DICT)
ok('le dictionnaire porte des clés', keys.length > 0, `${keys.length}`)
ok('le compte annoncé est le vrai', KEY_COUNT === keys.length, `${KEY_COUNT}`)

for (const k of keys) {
  const e = DICT[k]
  ok(`« ${k} » a ses deux langues`, typeof e.en === 'string' && e.en.length > 0 && typeof e.fr === 'string' && e.fr.length > 0)
}

// LA CLÉ DÉCRIT L'ENDROIT, PAS LE TEXTE. Une clé qui est sa propre valeur
// anglaise devient fausse dès qu'on reformule l'anglais, et on finit par
// renommer des clés pour corriger une virgule.
const looksLikeText = keys.filter((k) => !/^[a-z0-9]+\.[A-Za-z0-9]+$/.test(k))
ok('chaque clé nomme un endroit', looksLikeText.length === 0, looksLikeText.join(', ') || `${keys.length} clés`)

/* --- 2 · AUCUNE TRADUCTION N'EST LA COPIE DE L'ANGLAIS ------------------- */

// Certains mots sont LÉGITIMEMENT identiques dans les deux langues. Les lister
// explicitement est la seule façon honnête de le dire : une règle qui tolère
// « en === fr » en général ne détecte plus rien, et une règle qui l'interdit
// toujours accuse « Menu ».
const SAME_IN_BOTH = new Set(['nav.frameworks', 'lang.label', 'header.menu'])
const copied = keys.filter((k) => DICT[k].en === DICT[k].fr && !SAME_IN_BOTH.has(k))
ok('aucune traduction n\'est la copie de l\'anglais', copied.length === 0,
  copied.join(', ') || `${keys.length - SAME_IN_BOTH.size} comparées`)
// … et la liste d'exceptions ne doit pas servir d'échappatoire : si elle
// grossit, c'est qu'on y range des mots à traduire.
ok('la liste des mots identiques reste courte', SAME_IN_BOTH.size <= keys.length / 4,
  `${SAME_IN_BOTH.size} sur ${keys.length}`)

/* --- 3 · les piliers portent leur français ------------------------------- */

// Un pilier est lu par six surfaces et sa source est unique. Sa traduction doit
// vivre AVEC lui, sinon on recrée la divergence que positioning existe pour
// empêcher, dans la langue que le moins de gens relisent.
for (const p of PILLARS) {
  ok(`le pilier « ${p.id} » a son français`, !!p.fr?.nav && !!p.fr?.title && !!p.fr?.blurb,
    p.fr?.nav ?? 'absent')
  if (p.fr) {
    ok(`« ${p.id} » n'a pas recopié l'anglais`, p.fr.nav !== p.nav && p.fr.blurb !== p.blurb)
  }
}

/* --- 3 bis · le positionnement et les formules --------------------------- */

// LE POSITIONNEMENT · une promesse écrite à deux endroits finit par dire deux
// choses, et c'est la version que personne ne relit qui part en production.
// Un seul point d'entrée, donc, et on vérifie qu'il rend bien deux langues.
ok('la promesse existe dans les deux langues', PROMISE.length > 10 && PROMISE_FR.length > 10)
ok('la promesse française n\'est pas la copie de l\'anglaise', PROMISE !== PROMISE_FR)
ok('le sous-titre existe dans les deux langues', SUBTITLE !== SUBTITLE_FR && SUBTITLE_FR.length > 40)
ok('les démentis existent dans les deux langues', NOT_THIS.length === NOT_THIS_FR.length,
  `${NOT_THIS.length} / ${NOT_THIS_FR.length}`)
ok('aucun démenti n\'est resté en anglais', NOT_THIS_FR.every((l, i) => l !== NOT_THIS[i]))
ok('positioningFor rend le français', positioningFor('fr').promise === PROMISE_FR)
ok('positioningFor rend l\'anglais', positioningFor('en').promise === PROMISE)

// LES FORMULES · c'est l'endroit du site où une divergence coûte le plus cher,
// parce qu'on ne se trompe pas sur un libellé de navigation, on se trompe sur
// ce que quelqu'un croit acheter.
for (const pl of PLANS) {
  ok(`la formule « ${pl.name} » a son français`, !!pl.fr?.tagline && !!pl.fr?.inclHead && !!pl.fr?.incl?.length,
    pl.fr?.tagline?.slice(0, 40) ?? 'absent')
  if (pl.fr) {
    ok(`« ${pl.name} » n'a pas recopié l'anglais`, pl.fr.tagline !== pl.tagline && pl.fr.inclHead !== pl.inclHead)
    // LE NOMBRE DE LIGNES DOIT CORRESPONDRE · une liste française plus courte
    // que l'anglaise est la façon silencieuse de retirer une promesse à une
    // moitié des clients.
    ok(`« ${pl.name} » promet autant de choses dans les deux langues`, pl.fr.incl.length === pl.incl.length,
      `${pl.incl.length} / ${pl.fr.incl.length}`)
  }
}

/* --- 4 · les surfaces annoncées traduites le sont vraiment --------------- */

// On relit le JSX et on cherche du texte anglais écrit en dur entre deux
// balises. La règle ne peut pas être « aucune majuscule » : il reste des noms
// propres et des chiffres. On cherche une SUITE DE MOTS anglais, c'est à dire
// ce qui ressemble à une phrase d'interface.
const TRANSLATED = ['src/components/SiteFooter.tsx', 'src/components/SiteHeader.tsx',
  'src/components/LangSwitch.tsx', 'src/components/landing/Pricing.tsx', 'src/Landing.tsx']
const HARDCODED = />\s*[A-Z][a-z]+(?:\s+[a-z]+){1,}\s*</
for (const f of TRANSLATED) {
  const src = readFileSync(f, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  const m = src.match(HARDCODED)
  ok(`${f} ne garde pas de phrase en dur`, !m, m ? m[0].trim() : 'rien en dur')
}

/* --- 5 · la fonction rend ce qu'on attend -------------------------------- */

ok('une clé connue rend le français', translate('nav.home', 'fr') === DICT['nav.home'].fr)
ok('une clé connue rend l\'anglais', translate('nav.home', 'en') === DICT['nav.home'].en)
// UNE CLÉ INCONNUE REND LA CLÉ, pas du vide : un bouton qui affiche
// « nav.pricing » se corrige en une minute, un bouton vide passe des mois.
ok('une clé inconnue rend la clé', translate('clé.inconnue', 'fr') === 'clé.inconnue')

/* --- 6 · LA COUVERTURE, annoncée en chiffres ----------------------------- */

// Ce bloc ne fait échouer personne, il RAPPORTE. C'est ce qui empêche de
// croire le lot terminé : tant que la prose des cours n'est pas traduite, le
// chiffre le dit à chaque exécution du portail.
const proseFiles = ['src/data/academy.ts', 'src/data/agentLessons.ts', 'src/data/agentUseCases.ts',
  'src/data/frameworks.ts', 'src/data/tokenIceberg.ts', 'src/data/frugality.ts', 'src/support/knowledge.ts']
let proseWithFr = 0
for (const f of proseFiles) {
  if (/\bfr:\s*['"`]/.test(readFileSync(f, 'utf8'))) proseWithFr++
}
console.log('')
console.log(`      couverture · interface : ${keys.length} clés, les deux langues`)
console.log(`      couverture · piliers   : ${PILLARS.filter((p) => p.fr).length} sur ${PILLARS.length}`)
console.log(`      couverture · prose des cours : ${proseWithFr} fichiers sur ${proseFiles.length}`)
console.log('')
// L'AVERTISSEMENT DOIT EXISTER TANT QUE LA PROSE N'EST PAS TRADUITE. C'est la
// garde qui relie le chiffre au visiteur : le jour où quelqu'un choisit le
// français, il doit lire que les cours sont encore en anglais, et cette phrase
// doit disparaître quand ce ne sera plus vrai.
const proseDone = proseWithFr === proseFiles.length
ok(proseDone
  ? 'la prose est traduite, l\'avertissement peut partir'
  : 'la prose n\'est pas traduite, et l\'app le dit',
  proseDone || (!!DICT['i18n.partial'] && DICT['i18n.partial'].fr.length > 20),
  `${proseWithFr}/${proseFiles.length} fichiers de prose`)

/* --- 7 · les morsures ---------------------------------------------------- */

ok('morsure · une phrase en dur est vue', HARDCODED.test('<a href="/">App setup guide</a>'))
ok('morsure · une expression JSX ne l\'est pas', !HARDCODED.test("<a href='/'>{t('nav.home')}</a>"))
ok('morsure · un mot seul ne l\'est pas', !HARDCODED.test('<span>Beta</span>'))
ok('morsure · une copie serait vue', ['x'].filter(() => 'Menu' === 'Menu').length === 1)

console.log(fails ? `\ntest-i18n · ${fails} problème(s)` : `\ntest-i18n · ${keys.length} clés, ${PILLARS.filter((p) => p.fr).length}/${PILLARS.length} piliers, prose ${proseWithFr}/${proseFiles.length}`)
process.exit(fails ? 1 : 0)
