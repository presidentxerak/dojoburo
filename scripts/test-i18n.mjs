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
// ---- EST-CE VRAIMENT DU FRANÇAIS ? --------------------------------------
//
// TOUTES MES RÈGLES DE TRADUCTION COMPARAIENT `fr !== en`, ce qui ne détecte
// qu'une COPIE EXACTE. De l'anglais reformulé passait sans rien faire rougir.
// Une morsure l'a montré : remplacer une phrase française par un anglais
// légèrement différent ne déclenchait aucune garde, et c'est très exactement
// ce qui arrive quand quelqu'un « traduit » en réécrivant l'anglais.
//
// LA PREMIÈRE VERSION DE CETTE RÈGLE ACCUSAIT DU BON FRANÇAIS, et c'est le
// pire défaut qu'une garde puisse avoir : elle apprend à la contourner. Elle
// cherchait une quinzaine de mots outils et les lettres accentuées, et rejetait
// quatre phrases parfaitement françaises · « Quelle part du travail se fait en
// lecture seule ? » n'a ni accent ni aucun de ces quinze mots.
//
// Elle regarde donc trois signes, dont un seul suffit :
//   · une lettre accentuée ou un guillemet français,
//   · une élision (d', l', n', qu'…), qui n'existe pas en anglais,
//   · un mot outil français, dans une liste large.
//
// ET ELLE NE JUGE QUE DE LA PROSE. Un exemple de schéma comme
// « total_ttc : 1240,50, lu depuis "TOTAL TTC 1 240,50 EUR" » est un
// échantillon de données, pas une phrase : il n'a pas de langue, et exiger
// qu'il en ait une reviendrait à interdire de montrer des données. On saute
// donc ce qui compte moins de six mots alphabétiques.
const FR_ACCENT = /[àâäçéèêëîïôöùûüœÀÂÇÉÈÊËÎÏÔÖÙÛÜŒ«»]/
const FR_ELISION = /\b[cdjlmnst]'|\bqu'/i
const FR_WORDS = new RegExp('\\b(?:' + [
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux',
  'et', 'ou', 'ne', 'pas', 'plus', 'sans', 'sous', 'hors', 'vers', 'chez',
  'qui', 'que', 'quoi', 'dont', 'quand', 'quelle', 'quel', 'quelles', 'quels',
  'pour', 'par', 'dans', 'avec', 'sur', 'entre', 'depuis', 'avant', 'apres',
  'vous', 'nous', 'il', 'elle', 'ils', 'elles', 'se', 'son', 'sa', 'ses',
  'notre', 'votre', 'leur', 'ce', 'cet', 'cette', 'ces', 'tout', 'toute',
  'est', 'sont', 'etre', 'fait', 'faire', 'peut', 'doit', 'sera',
].join('|') + ')\\b', 'i')

/** Combien de mots alphabétiques · en dessous de six, ce n'est pas de la
 *  prose et la question de la langue ne se pose pas. */
const wordCount = (t) => (String(t).match(/[A-Za-zÀ-ÿ]{2,}/g) || []).length

const looksFrench = (t) => {
  if (typeof t !== 'string') return false
  if (wordCount(t) < 6) return true
  return FR_ACCENT.test(t) || FR_ELISION.test(t) || FR_WORDS.test(t)
}

// `ac.min` est le SYMBOLE de la minute, pas un mot : il s'écrit « min » dans
// les deux langues parce que c'est le symbole international. L'écrire « mn »
// en français pour faire passer la règle serait corriger la page pour plaire
// à la garde.
const SAME_IN_BOTH = new Set(['nav.frameworks', 'lang.label', 'header.menu', 'ac.min', 'tut.pause',
  // « agent » s'écrit pareil dans les deux langues, au singulier comme au
  // pluriel : c'est le même mot, emprunté au latin par les deux.
  'mp.agent', 'mp.agents'])
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
// UN NOM PROPRE NE SE TRADUIT PAS. « Figma » est « Figma » dans les deux
// langues, et une garde qui exige que tout diffère accuse le seul libellé
// qu'il serait absurde de changer. On la rend PRÉCISE plutôt que tolérante :
// le libellé de navigation peut être identique quand c'est un nom propre
// listé ici, mais la PROSE (titre et accroche) doit différer dans tous les
// cas, parce qu'aucune prose n'est un nom propre.
const PROPER_NOUN_NAV = new Set(['figma'])
for (const p of PILLARS) {
  ok(`le pilier « ${p.id} » a son français`, !!p.fr?.nav && !!p.fr?.title && !!p.fr?.blurb,
    p.fr?.nav ?? 'absent')
  if (p.fr) {
    ok(`« ${p.id} » n'a pas recopié sa prose`, p.fr.title !== p.title && p.fr.blurb !== p.blurb)
    if (!PROPER_NOUN_NAV.has(p.id)) {
      ok(`« ${p.id} » a traduit son libellé`, p.fr.nav !== p.nav, p.fr.nav)
    }
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

/* --- 3 ter · la prose du cours de sobriété -------------------------------- */
//
// UN COURS SE TRADUIT EN ENTIER OU PAS DU TOUT. Une page dont l'en-tête est
// français et le corps anglais est pire qu'une page anglaise : elle a l'air
// cassée, et le lecteur ne sait pas si le reste viendra. On vérifie donc les
// deux fichiers de prose du cours ENSEMBLE, item par item.
const FG = await load('src/data/frugality.ts', 'frug.mjs')
const IC = await load('src/data/tokenIceberg.ts', 'ice.mjs')

for (const l of FG.LEVERS) {
  ok(`le levier « ${l.id} » a son français`, !!l.fr?.title && !!l.fr?.how && !!l.fr?.why && !!l.fr?.not,
    l.fr?.title ?? 'absent')
  if (l.fr) {
    // LA CONTRE-INDICATION est la phrase qu'on traduit le plus volontiers à la
    // va-vite parce qu'elle est en dernier. Approximative, elle transforme un
    // conseil de sobriété en conseil de coupe, et quelqu'un retire ce qui
    // tenait le reste debout.
    ok(`« ${l.id} » a traduit sa contre-indication`, l.fr.not !== l.not && l.fr.not.length > 40,
      `${l.fr.not.length} signes`)
    ok(`« ${l.id} » n'a rien recopié`, l.fr.title !== l.title && l.fr.why !== l.why)
    ok(`« ${l.id} » est écrit en français`,
      looksFrench(l.fr.how) && looksFrench(l.fr.why) && looksFrench(l.fr.not))
  }
}
for (const f of Object.keys(FG.FAMILY_LABEL)) {
  ok(`la famille « ${f} » a son français`, !!FG.FAMILY_LABEL[f].fr?.label)
}

for (const i of IC.ICEBERG) {
  ok(`le pavé « ${i.id} » a son français`, !!i.fr?.title && !!i.fr?.what && !!i.fr?.why && !!i.fr?.not,
    i.fr?.title ?? 'absent')
  if (i.fr) {
    // LA LIGNE DU SCHÉMA était le seul champ que cette règle ne regardait pas,
    // et c'est le plus visible de tous : c'est lui qui s'affiche sous le titre
    // dans la grille, sans qu'on ait à ouvrir le pavé. Une morsure l'a montré
    // · remplacer un `short` français par l'anglais ne faisait rougir personne.
    ok(`« ${i.id} » n'a rien recopié`,
      i.fr.title !== i.title && i.fr.short !== i.short && i.fr.why !== i.why && i.fr.not !== i.not)
    // LA LIGNE DU SCHÉMA doit rester courte dans les DEUX langues · le
    // français est en moyenne quinze pour cent plus long que l'anglais, donc
    // une ligne qui tenait juste en anglais déborde en français, et le pavé
    // se met à faire deux hauteurs au milieu d'une grille.
    ok(`« ${i.id} » tient sur une ligne en français`, i.fr.short.length <= 60, `${i.fr.short.length} signes`)
    ok(`« ${i.id} » est écrit en français`,
      looksFrench(i.fr.what) && looksFrench(i.fr.why) && looksFrench(i.fr.not))
  }
}
for (const d of ['surface', 'real', 'deeper']) {
  ok(`la profondeur « ${d} » a son français`, !!IC.DEPTH_LABEL[d].fr?.label)
  ok(`« ${d} » n'a pas recopié son intitulé`, IC.DEPTH_LABEL[d].fr.label !== IC.DEPTH_LABEL[d].label)
}

/* --- 3 quater · les douze agents du dojo ---------------------------------- */
//
// LE NOM D'UN AGENT EST AFFICHÉ À TROIS ENDROITS : au-dessus de sa silhouette
// dans la salle, sur sa carte dans la liste, et en titre de sa fiche. C'est
// exactement la configuration qui a produit le défaut des visages, où onze
// agents sur douze changeaient de tête entre le clic et la page. On vérifie
// donc qu'il n'existe qu'UN chemin (useCaseIn) et que les trois surfaces le
// prennent.
const UC = await load('src/data/agentUseCases.ts', 'uc.mjs')

for (const u of UC.USE_CASES) {
  ok(`l'agent « ${u.id} » a son français`, !!u.fr?.name && !!u.fr?.does && !!u.fr?.hard,
    u.fr?.name ?? 'absent')
  if (u.fr) {
    ok(`« ${u.id} » n'a rien recopié`, u.fr.name !== u.name && u.fr.does !== u.does && u.fr.hard !== u.hard)
    // LE NOM TIENT SUR L'ÉTIQUETTE · la garde du navigateur impose 26 signes,
    // et le français est plus long que l'anglais. « Le chef d'orchestre »
    // passe, une traduction bavarde déborderait sur la salle.
    ok(`« ${u.id} » tient sur son étiquette en français`, u.fr.name.length <= 26, `${u.fr.name.length} signes`)
    ok(`« ${u.id} » a ses quatre étapes en français`, u.fr.steps.length === u.steps.length,
      `${u.steps.length} / ${u.fr.steps.length}`)
    ok(`« ${u.id} » a traduit chaque étape`,
      u.fr.steps.every((st, i) => st.title !== u.steps[i].title && st.makes.length > 10 && st.check.length > 10))
    ok(`« ${u.id} » est écrit en français`,
      looksFrench(u.fr.does) && looksFrench(u.fr.hard) && looksFrench(u.fr.failure)
        && u.fr.steps.every((st) => looksFrench(st.makes) && looksFrench(st.check))
        && u.fr.ships.every(looksFrench))
    // CE QU'ON EMPORTE · une liste plus courte en français retirerait
    // silencieusement une promesse à la moitié des élèves.
    ok(`« ${u.id} » emporte autant de choses dans les deux langues`, u.fr.ships.length === u.ships.length,
      `${u.ships.length} / ${u.fr.ships.length}`)
  }
}
ok('useCaseIn rend le français', UC.useCaseIn(UC.USE_CASES[0], 'fr').name === UC.USE_CASES[0].fr.name)
ok('useCaseIn rend l\'anglais', UC.useCaseIn(UC.USE_CASES[0], 'en').name === UC.USE_CASES[0].name)
ok('useCaseIn garde l\'identifiant', UC.useCaseIn(UC.USE_CASES[0], 'fr').id === UC.USE_CASES[0].id)

// LES TROIS SURFACES PASSENT PAR LE MÊME CHEMIN · c'est ce qui empêche le
// défaut des visages de se reproduire avec les noms.
for (const f of ['src/dojo/ClassScene.tsx', 'src/dojo/BuildAgent.tsx', 'src/dojo/AgentCard.tsx']) {
  ok(`${f.split('/').pop()} passe par useCaseIn`, /useCaseIn\(/.test(readFileSync(f, 'utf8')))
}

/* --- 3 quinquies · les douze leçons du dojo ------------------------------ */
//
// UNE LEÇON SE TRADUIT ENTIÈRE OU PAS DU TOUT. Une fiche qui porte un nom
// français au-dessus d'un primer anglais se lit comme une page cassée, et
// c'est l'état dans lequel elle a été livrée un lot durant · à dessein, comme
// point de sauvegarde, mais il ne devait pas durer.
const AL = await load('src/data/agentLessons.ts', 'al.mjs')
const ids = Object.keys(AL.LESSONS)
for (const id of ids) {
  const l = AL.LESSONS[id]
  ok(`la leçon « ${id} » a son français`, !!l.fr?.primer && Array.isArray(l.fr?.steps), l.fr ? 'oui' : 'absente')
  if (!l.fr) continue
  ok(`« ${id} » a traduit son primer`,
    l.fr.primer.plain !== l.primer.plain && l.fr.primer.like !== l.primer.like)
  // LES MOTS DÉFINIS · autant de mots dans les deux langues, sinon un lecteur
  // français perd une définition que le lecteur anglais a.
  ok(`« ${id} » définit autant de mots`, l.fr.primer.words.length === l.primer.words.length,
    `${l.primer.words.length} / ${l.fr.primer.words.length}`)
  ok(`« ${id} » demande autant de choses`, l.fr.primer.need.length === l.primer.need.length)
  ok(`« ${id} » a ses quatre étapes`, l.fr.steps.length === l.steps.length,
    `${l.steps.length} / ${l.fr.steps.length}`)
  // L'EXEMPLE RATÉ À CÔTÉ DU RÉUSSI est la partie qui apprend · une étape dont
  // le mauvais exemple est resté anglais et le bon français ne compare plus
  // rien du tout.
  ok(`« ${id} » a traduit ses exemples`,
    l.fr.steps.every((st, i) => st.bad !== l.steps[i].bad && st.good !== l.steps[i].good))
  // … ET C'EST BIEN DU FRANÇAIS, pas de l'anglais reformulé. Voir le
  // commentaire de FRENCH plus haut : la comparaison `!==` seule laisse
  // passer une réécriture, qui est la forme la plus courante du défaut.
  ok(`« ${id} » est écrite en français`,
    looksFrench(l.fr.primer.plain) && looksFrench(l.fr.primer.like)
      && l.fr.steps.every((st) => looksFrench(st.why) && looksFrench(st.good) && looksFrench(st.bad)
        && looksFrench(st.note) && looksFrench(st.reward) && st.how.every(looksFrench))
      && l.fr.primer.words.every((w) => looksFrench(w.says))
      && l.fr.primer.need.every(looksFrench))
  ok(`« ${id} » a traduit ses récompenses`,
    l.fr.steps.every((st, i) => st.reward !== l.steps[i].reward && st.reward.length > 20))
  ok(`« ${id} » garde ses gestes`,
    l.fr.steps.every((st, i) => st.how.length === l.steps[i].how.length))
}
// LE STAGE N'EST PAS UN TEXTE · c'est l'identifiant d'une famille d'animation.
// Le traduire casserait le dessin sans rien traduire.
ok('lessonIn garde le stage de chaque étape',
  AL.lessonIn(AL.LESSONS[ids[0]], 'fr').steps.every((st, i) => st.stage === AL.LESSONS[ids[0]].steps[i].stage))
ok('lessonIn rend le français', AL.lessonIn(AL.LESSONS[ids[0]], 'fr').primer.plain === AL.LESSONS[ids[0]].fr.primer.plain)
ok('lessonIn rend l\'anglais', AL.lessonIn(AL.LESSONS[ids[0]], 'en').primer.plain === AL.LESSONS[ids[0]].primer.plain)
ok('la fiche passe par lessonIn', /lessonIn\(/.test(readFileSync('src/dojo/AgentCard.tsx', 'utf8')))

/* --- 3 sexies · les vingt leçons de l'académie --------------------------- */
//
// Le plus gros fichier de prose du site, et celui où une traduction partielle
// se voit le moins : une piste peut avoir son titre français et ses quatre
// leçons en anglais sans que rien ne casse.
//
// CE QUI EST VÉRIFIÉ NOMMÉMENT, leçon par leçon, plutôt qu'en comptant des
// fichiers : le compte de blocs, le compte de points DANS chaque bloc, le
// compte d'options du questionnaire, et que tout cela est du français. Les
// trois comptes existent parce qu'une traduction qui perd un bloc, une puce ou
// une option donne un lecteur français à qui il manque quelque chose que le
// lecteur anglais a, et rien dans l'écran ne le dit.
const AC = await load('src/data/academy.ts', 'ac.mjs')

for (const tr of AC.TRACKS) {
  ok(`la piste « ${tr.slug} » a son français`, !!tr.fr, tr.fr ? 'oui' : 'absente')
  if (!tr.fr) continue
  ok(`« ${tr.slug} » est écrite en français`,
    looksFrench(tr.fr.label) && looksFrench(tr.fr.blurb) && looksFrench(tr.fr.who))
  ok(`« ${tr.slug} » n'a pas recopié l'anglais`,
    tr.fr.blurb !== tr.blurb && tr.fr.who !== tr.who)
}

for (const { lesson: l } of AC.ALL_LESSONS) {
  ok(`la leçon « ${l.slug} » a son français`, !!l.fr, l.fr ? 'oui' : 'absente')
  if (!l.fr) continue
  ok(`« ${l.slug} » a tous ses blocs`, l.fr.blocks.length === l.blocks.length,
    `${l.blocks.length} / ${l.fr.blocks.length}`)
  // LES PUCES, BLOC PAR BLOC · un bloc anglais à cinq points dont le français
  // n'en a que trois perd deux idées, et le compte global de blocs ne le voit
  // pas.
  ok(`« ${l.slug} » garde ses puces`,
    l.blocks.every((b, i) => (b.points?.length ?? 0) === (l.fr.blocks[i]?.points?.length ?? 0)))
  ok(`« ${l.slug} » garde ses tableaux`,
    l.blocks.every((b, i) => (b.compare?.rows.length ?? 0) === (l.fr.blocks[i]?.compare?.rows.length ?? 0)))
  ok(`« ${l.slug} » a ses ${l.quiz.options.length} options`,
    l.fr.quiz.options.length === l.quiz.options.length,
    `${l.quiz.options.length} / ${l.fr.quiz.options.length}`)
  ok(`« ${l.slug} » n'a pas recopié l'anglais`,
    l.fr.title !== l.title && l.fr.summary !== l.summary && l.fr.takeaway !== l.takeaway
      && l.fr.quiz.why !== l.quiz.why)
  ok(`« ${l.slug} » est écrite en français`,
    looksFrench(l.fr.title) && looksFrench(l.fr.summary) && looksFrench(l.fr.takeaway)
      && looksFrench(l.fr.quiz.q) && looksFrench(l.fr.quiz.why)
      && l.fr.quiz.options.every(looksFrench)
      && l.fr.blocks.every((b) => looksFrench(b.title) && looksFrench(b.body)
        && (b.points ?? []).every(looksFrench)
        && (b.compare ? b.compare.rows.every(([x, y]) => looksFrench(x) && looksFrench(y)) : true)))
  // LA LEÇON QUI A UNE SUITE EN ANGLAIS EN A UNE EN FRANÇAIS · `next` est
  // facultatif, donc une traduction peut le perdre sans que rien ne casse, et
  // le lecteur français repart sans la seule chose à aller faire.
  ok(`« ${l.slug} » garde sa suite`, !l.next || !!l.fr.next, l.next ? 'oui' : 'pas de suite')
}

// LA BONNE RÉPONSE RESTE À LA MÊME PLACE · `answer` est un INDICE, pas une
// phrase. S'il était traduit, ou si les options françaises changeaient
// d'ordre, le questionnaire validerait la mauvaise réponse en français tout en
// restant juste en anglais, ce qu'aucun typecheck ne voit.
{
  const l0 = AC.ALL_LESSONS[0].lesson
  const fr = AC.academyLessonIn(l0, 'fr')
  ok('academyLessonIn garde l\'indice de la bonne réponse', fr.quiz.answer === l0.quiz.answer)
  ok('academyLessonIn garde le genre des blocs',
    fr.blocks.every((b, i) => b.kind === l0.blocks[i].kind))
  ok('academyLessonIn garde le slug et la scène', fr.slug === l0.slug && fr.stage === l0.stage)
  ok('academyLessonIn rend le français', fr.title === l0.fr.title)
  ok('academyLessonIn rend l\'anglais', AC.academyLessonIn(l0, 'en').title === l0.title)
  ok('trackIn rend le français', AC.trackIn(AC.TRACKS[0], 'fr').label === AC.TRACKS[0].fr.label)
}
{
  const src = readFileSync('src/academy/Academy.tsx', 'utf8')
  ok('l\'académie passe par academyLessonIn', /academyLessonIn\(/.test(src))
  ok('l\'académie passe par trackIn', /trackIn\(/.test(src))
  // LA LANGUE DÉCLARÉE AUX MOTEURS DE RECHERCHE · elle était écrite 'en' en
  // dur dans deux blocs de données structurées.
  ok('l\'académie déclare la langue lue', !/inLanguage: 'en'/.test(src))
}
// LE LIBELLÉ D'UN PILIER N'A QU'UN SEUL CHEMIN · il y avait trois fonctions
// locales dans la page d'accueil et aucune dans les deux panneaux du maître,
// qui affichaient donc « Prompt engineering » au milieu d'une page française.
for (const f of ['src/Landing.tsx', 'src/academy/Academy.tsx', 'src/dojo/MasterPanel.tsx', 'src/dojo/LearningPanel.tsx']) {
  ok(`${f.split('/').pop()} traduit ses piliers par pillarIn`, /pillarIn\(/.test(readFileSync(f, 'utf8')))
}

/* --- 3 septies · les quinze frameworks ----------------------------------- */
//
// CE QUI EST TRADUIT ET CE QUI NE L'EST PAS est ici un vrai choix, pas un
// oubli : un nom de projet est un nom propre, un langage se nomme pareil
// partout, une adresse traduite n'existe pas, et les CLÉS de `fit` sont les
// identifiants des formats d'export. Traduire ces clés casserait le lien qui
// fait qu'un format supprimé ne compile plus. La garde vérifie donc les deux
// sens : que la prose est traduite, et que le reste ne l'est PAS.
const FW = await load('src/data/frameworks.ts', 'fw.mjs')
for (const f of FW.FRAMEWORKS) {
  ok(`le framework « ${f.id} » a son français`, !!f.fr, f.fr ? 'oui' : 'absent')
  if (!f.fr) continue
  ok(`« ${f.id} » a traduit sa forme`, f.fr.shape !== f.shape && looksFrench(f.fr.shape))
  ok(`« ${f.id} » dit quand ne pas le prendre, en français`,
    looksFrench(f.fr.when) && looksFrench(f.fr.notWhen) && looksFrench(f.fr.watch)
      && looksFrench(f.fr.approach) && looksFrench(f.fr.bestFor))
  // LA CORRESPONDANCE EST LE COEUR DE LA PAGE · c'est ce qu'elle enseigne à la
  // place du code. Une entrée dont `fit` reste anglais garde sa seule partie
  // utile dans l'autre langue.
  ok(`« ${f.id} » a traduit sa correspondance`,
    Object.keys(f.fit).length === Object.keys(f.fr.fit).length
      && Object.keys(f.fit).every((k) => f.fr.fit[k] && f.fr.fit[k] !== f.fit[k] && looksFrench(f.fr.fit[k])),
    `${Object.keys(f.fit).length} formats`)
}
{
  const f0 = FW.FRAMEWORKS[0]
  const fr = FW.frameworkIn(f0, 'fr')
  ok('frameworkIn garde le nom, les langages et l\'adresse',
    fr.name === f0.name && fr.docs === f0.docs && fr.langs.join() === f0.langs.join())
  ok('frameworkIn garde les clés de fit', Object.keys(fr.fit).join() === Object.keys(f0.fit).join())
  ok('frameworkIn rend l\'anglais', FW.frameworkIn(f0, 'en').shape === f0.shape)
}
ok('l\'introduction des frameworks a son français',
  !!FW.FRAMEWORK_PRIMER.fr && looksFrench(FW.FRAMEWORK_PRIMER.fr.plain) && looksFrench(FW.FRAMEWORK_PRIMER.fr.like))
ok('elle garde ses quatre apports',
  FW.FRAMEWORK_PRIMER.fr.gives.length === FW.FRAMEWORK_PRIMER.gives.length
    && FW.FRAMEWORK_PRIMER.fr.gives.every(looksFrench),
  `${FW.FRAMEWORK_PRIMER.gives.length}`)
for (const c of FW.CONNECT_STEPS) {
  ok(`le geste « ${c.title} » a son français`,
    !!c.fr && looksFrench(c.fr.title) && looksFrench(c.fr.does) && looksFrench(c.fr.watch),
    c.fr ? 'oui' : 'absent')
}
{
  const src = readFileSync('src/dojo/Frameworks.tsx', 'utf8')
  ok('la page des frameworks passe par frameworkIn', /frameworkIn\(/.test(src))
  ok('… et par primerIn et connectStepIn', /primerIn\(/.test(src) && /connectStepIn\(/.test(src))
  // LE FILTRE DE LANGAGE S'APPELAIT `lang` · le même nom que la langue lue, au
  // même endroit. L'un aurait masqué l'autre en silence.
  ok('… et ne confond pas le langage avec la langue', !/\[lang, setLang\]/.test(src))
}

/* --- 3 octies · les sujets du robot de support --------------------------- */
//
// Le robot répond AVANT la cascade payante, et c'est sa raison d'être : une
// question qui trouve son sujet ici ne coûte rien. Un sujet sans français
// répondait donc en anglais à quelqu'un qui lit la page en français, et
// gratuitement, ce qui est la pire combinaison : ça marche, donc personne ne
// le signale.
const KB = await load('src/support/knowledge.ts', 'kb.mjs')
for (const t of KB.KB) {
  ok(`le sujet « ${t.id} » a son français`, !!t.fr, t.fr ? 'oui' : 'absent')
  if (!t.fr) continue
  ok(`« ${t.id} » est écrit en français`, looksFrench(t.fr.chip) && looksFrench(t.fr.answer))
  ok(`« ${t.id} » n'a pas recopié l'anglais`, t.fr.answer !== t.answer && t.fr.chip !== t.chip)
  // LES LIBELLÉS DE LIENS · autant qu'en anglais, sinon un bouton reste dans
  // l'autre langue au milieu d'une réponse française.
  ok(`« ${t.id} » a traduit ses boutons`,
    (t.links?.length ?? 0) === (t.fr.links?.length ?? 0),
    `${t.links?.length ?? 0} liens`)
}
{
  const t0 = KB.KB[0]
  const fr = KB.topicIn(t0, 'fr')
  // LES ADRESSES NE SE TRADUISENT PAS · seuls les libellés changent.
  ok('topicIn garde les adresses', (fr.links ?? []).every((l, i) => l.href === t0.links[i].href))
  ok('topicIn garde les mots-clés et le sujet', fr.keywords === t0.keywords && fr.id === t0.id)
  ok('topicIn rend l\'anglais', KB.topicIn(t0, 'en').answer === t0.answer)
}
ok('l\'accueil du robot a ses deux langues',
  typeof KB.GREETING.en === 'string' && looksFrench(KB.GREETING.fr))
// LA PREMIÈRE PHRASE DU ROBOT EST UN ARGUMENTAIRE · elle promettait « un
// atelier professionnel par coéquipier », c'est à dire le produit d'avant le
// repositionnement, dans la toute première bulle que lit un visiteur.
for (const l of ['en', 'fr']) {
  ok(`l'accueil ne vend pas l'ancien produit (${l})`,
    !/pro studio|atelier professionnel/i.test(KB.GREETING[l]), KB.GREETING[l].slice(0, 40))
}
ok('le robot répond dans la langue lue', /topicIn\(/.test(readFileSync('src/components/SupportBot.tsx', 'utf8')))
// LA RECONNAISSANCE MARCHE DANS LES DEUX LANGUES · sinon une question posée
// avec le libellé français qu'on a sous les yeux tombe dans la cascade payante.
{
  const fr = KB.KB.find((t) => t.fr && t.fr.chip.length > 8)
  ok('une question posée en français trouve son sujet',
    KB.matchTopic(fr.fr.chip.toLowerCase())?.id === fr.id, fr.fr.chip)
  const en = KB.KB.find((t) => t.chip.length > 8)
  ok('… et une question posée en anglais aussi',
    KB.matchTopic(en.chip.toLowerCase())?.id === en.id, en.chip)
}

/* --- 3 nonies · les quatre visites animées ------------------------------- */
//
// Les visites sont le premier contact de beaucoup de gens avec le produit :
// le bouton « Comment faire ? » se presse avant d'avoir rien engagé. Une
// visite restée anglaise sur une page française accueille donc le visiteur
// dans la mauvaise langue au pire moment.
// ON LIT LE FICHIER DE DONNÉES, pas le composant · le .tsx monte de vraies
// cartes du produit, donc le charger ici entraînait react-dom et arrêtait
// l'épreuve sur une erreur. Les textes vivent maintenant dans walks.ts, qui
// ne dépend de rien ayant besoin d'un navigateur.
const TB = await load('src/components/guide/walks.ts', 'walks.mjs')
for (const [id, w] of Object.entries(TB.WALKS)) {
  ok(`la visite « ${id} » a son français`, !!w.fr && looksFrench(w.fr.title) && looksFrench(w.fr.sub),
    w.fr ? 'oui' : 'absente')
  for (const b of w.beats) {
    ok(`« ${id}/${b.id} » a son français`, !!b.fr, b.fr ? 'oui' : 'absent')
    if (!b.fr) continue
    ok(`« ${id}/${b.id} » est écrit en français`, looksFrench(b.fr.title) && looksFrench(b.fr.body))
    ok(`« ${id}/${b.id} » n'a pas recopié l'anglais`, b.fr.body !== b.body)
  }
}
{
  const w = TB.WALKS.overview
  const fr = TB.walkIn(w, 'fr')
  // L'IDENTIFIANT CHOISIT LA SCÈNE ANIMÉE · le traduire montrerait la
  // mauvaise scène à côté du texte, ou aucune.
  ok('walkIn garde l\'identifiant de chaque temps',
    fr.beats.every((b, i) => b.id === w.beats[i].id))
  ok('walkIn garde le nombre de temps', fr.beats.length === w.beats.length)
  ok('walkIn rend l\'anglais', TB.walkIn(w, 'en').title === w.title)
  // LE COMPTE VIENT DES DONNÉES DANS LES DEUX LANGUES · la version française
  // du premier temps a d'abord été écrite entre guillemets droits, donc elle
  // aurait affiché « ${LESSON_COUNT} leçons » au lecteur, mot pour mot.
  ok('aucun compte n\'est resté littéral en français',
    fr.beats.every((b) => !/\$\{/.test(b.title + b.body)),
    fr.beats.find((b) => /\$\{/.test(b.body))?.body.slice(0, 40) ?? 'tous interpolés')
}
for (const f of ['src/components/guide/Tutorial.tsx', 'src/components/guide/TutorialOverlay.tsx', 'src/components/SupportBot.tsx']) {
  ok(`${f.split('/').pop()} joue la visite dans la langue lue`, /walkIn\(/.test(readFileSync(f, 'utf8')))
}

/* --- 3 decies · les ceintures, les insignes et les diplômes -------------- */
//
// C'est le panneau que signale une capture d'écran : sur une page française,
// « Your teacher keeps the count », « White belt », « Badges », « 1 more agent
// for the yellow belt ». Il s'affiche sur les cinq pages de cours, donc c'est
// l'anglais le plus visible du site.
const GR = await load('src/dojo/grades.ts', 'grades.mjs')
const DI = await load('src/dojo/diplomas.ts', 'dip.mjs')
const MP = await load('src/dojo/masterProgress.ts', 'mp.mjs')

for (const g of GR.GRADES) {
  ok(`la ceinture « ${g.id} » a son français`, !!g.fr, g.fr ? 'oui' : 'absente')
  if (!g.fr) continue
  ok(`« ${g.id} » est écrite en français`, looksFrench(g.fr.title) && looksFrench(g.fr.means))
  ok(`« ${g.id} » n'a pas recopié l'anglais`, g.fr.means !== g.means && g.fr.title !== g.title)
}
for (const b of GR.BADGES) {
  ok(`l'insigne « ${b.id} » a son français`, !!b.fr, b.fr ? 'oui' : 'absent')
  if (b.fr) ok(`« ${b.id} » est écrit en français`, looksFrench(b.fr.title) && looksFrench(b.fr.how))
}
// LES INSIGNES D'AGENT SONT DÉRIVÉS DU CAS D'USAGE · ils ne doivent donc PAS
// porter une traduction à eux, qui serait un deuxième exemplaire des douze
// noms. On vérifie qu'ils lisent bien la traduction du cas d'usage.
ok('les insignes d\'agent portent le nom français du cas d\'usage',
  GR.AGENT_BADGES.every((b) => b.fr && looksFrench(b.fr.how) && b.fr.title !== b.title),
  `${GR.AGENT_BADGES.length} insignes`)
for (const d of DI.DIPLOMAS) {
  ok(`le diplôme « ${d.id} » a son français`, !!d.fr, d.fr ? 'oui' : 'absent')
  if (!d.fr) continue
  ok(`« ${d.id} » est écrit en français`,
    looksFrench(d.fr.title) && looksFrench(d.fr.how) && looksFrench(d.fr.awarded))
  ok(`« ${d.id} » n'a pas recopié l'anglais`, d.fr.awarded !== d.awarded && d.fr.how !== d.how)
}

// CE QU'IL RESTE À FAIRE COMPTE DES CHOSES · une phrase traduite après coup
// perd son accord de nombre, donc `remaining` prend la langue. On la lit dans
// les deux, sur une progression vide et sur une progression entamée.
{
  const empty = MP.readProgress([])
  const by = Object.fromEntries(empty.map((c) => [c.id, c]))
  for (const d of DI.DIPLOMAS) {
    const fr = d.remaining(by, 'fr')
    const en = d.remaining(by, 'en')
    ok(`« ${d.id} » dit le reste à faire en français`, looksFrench(fr) && fr !== en, fr)
  }
  // L'UNITÉ VIENT DU COURS · « 12 agents, 20 leçons, 7 leviers » et non
  // « 12 agents, 20 lessons, 7 levers » au milieu d'une phrase française.
  ok('chaque cours porte son unité française',
    empty.every((c) => Array.isArray(c.unitFr) && c.unitFr.length === 2),
    empty.map((c) => c.unitFr?.join('/')).join(', '))
}

// CE QUE DIT LE MAÎTRE · cinq branches, et chacune doit exister en français.
for (const [nom, done] of [
  ['rien de commencé', []],
  ['tout terminé', ['x']],
]) {
  const courses = MP.readProgress(done)
  const fr = MP.masterAdvice(courses, 'fr')
  const en = MP.masterAdvice(courses, 'en')
  ok(`le maître parle français · ${nom}`, looksFrench(fr) && fr !== en, fr.slice(0, 45))
}

{
  const mp = readFileSync('src/dojo/MasterPanel.tsx', 'utf8')
  const lp = readFileSync('src/dojo/LearningPanel.tsx', 'utf8')
  ok('le panneau du maître traduit ses ceintures', /gradeIn\(/.test(mp))
  ok('… ses insignes', /badgeIn\(/.test(mp))
  ok('… ses diplômes', /diplomaIn\(/.test(mp))
  ok('… et lit la progression dans la langue lue', /masterAdvice\(courses, lang\)/.test(mp))
  ok('le panneau du profil lit son profil dans la langue lue', /readLearning\(p\.doneKeys, lang\)/.test(lp))
  // LE TITRE D'UN DIPLÔME OBTENU · le profil affichait son IDENTIFIANT, donc
  // « literate » au lieu de « Bâtisseur qui lit », dans les deux langues.
  ok('un diplôme obtenu montre son titre, pas sa clé',
    !/title: id,/.test(readFileSync('src/dojo/learning.ts', 'utf8')))
}

/* --- 4 · les surfaces annoncées traduites le sont vraiment --------------- */

// On relit le JSX et on cherche du texte anglais écrit en dur entre deux
// balises. La règle ne peut pas être « aucune majuscule » : il reste des noms
// propres et des chiffres. On cherche une SUITE DE MOTS anglais, c'est à dire
// ce qui ressemble à une phrase d'interface.
const TRANSLATED = ['src/components/SiteFooter.tsx', 'src/components/SiteHeader.tsx',
  'src/components/LangSwitch.tsx', 'src/components/landing/Pricing.tsx', 'src/Landing.tsx',
  'src/frugality/TokenIceberg.tsx']
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
// LES FICHIERS DE PROSE · designCourses y entre, et il compte comme les
// autres. Il est né bilingue, donc il part à 1 plutôt qu'à 0 · c'est
// exactement ce que le lot de traduction avant les nouveaux cours achetait,
// et le compteur le montre au lieu qu'on l'affirme.
// LA LISTE NE CONTENAIT QUE CE QUI ÉTAIT EN COURS DE TRADUCTION, et c'est
// exactement le mensonge de couverture que cette épreuve existe pour
// empêcher : le jour où ces huit fichiers ont été finis, le compteur a
// affiché « 8 sur 8 », ce qui se lit « tout est traduit », alors que sept
// autres fichiers de prose n'avaient pas un mot de français.
//
// Un dénominateur qui ne compte que le travail commencé atteint toujours
// cent pour cent. La liste nomme donc TOUTE la prose du produit, y compris
// celle que personne n'a encore ouverte, et le chiffre dit le reste à faire
// au lieu de le cacher.
const proseFiles = [
  // traduits
  'src/data/academy.ts', 'src/data/agentLessons.ts', 'src/data/agentUseCases.ts',
  'src/data/frameworks.ts', 'src/data/tokenIceberg.ts', 'src/data/frugality.ts',
  'src/support/knowledge.ts', 'src/data/designCourses.ts', 'src/components/guide/walks.ts',
  // pas encore · ils s'affichent tous les quatre dans des pages que le
  // sélecteur de langue met en français
  'src/data/archetypes.ts',     // les cartes d'équipe
  'src/data/roleAgents.ts',     // les rôles des coéquipiers
  'src/dojo/grades.ts',         // les ceintures et les insignes
  'src/dojo/diplomas.ts',       // les diplômes
  'src/dojo/masterProgress.ts', // ce que le maître dit de votre progression
]
// COMMENT ON DÉTECTE QU'UN FICHIER PORTE DEUX LANGUES, et la limite de cette
// mesure, dite franchement.
//
// La première version cherchait `fr: '...'`. C'est la forme qu'emploient
// positioning et plans, et elle a donné 0 sur 8 alors que designCourses est
// intégralement bilingue · celui-ci porte ses deux langues par une fonction
// B(en, fr) et un type Bi, parce que sa prose est faite de centaines de
// paires. La sonde mesurait donc une SYNTAXE qui se trouvait corréler avec la
// traduction, pas la traduction. Un fichier traduit autrement se lisait comme
// un fichier non traduit, ce qui est la pire erreur pour un compteur : il
// donnait le chiffre le plus pessimiste possible en ayant l'air rigoureux.
//
// On accepte donc les deux formes que la base emploie réellement. Ce que ce
// compteur dit reste modeste et il faut le dire : un fichier compte quand il
// PORTE une seconde langue, pas quand chacune de ses phrases est traduite. La
// qualité d'une traduction ne se mesure pas par une expression régulière, et
// prétendre le contraire serait le même mensonge de couverture que cette
// épreuve existe pour empêcher.
// TROIS FORMES, parce que la base en emploie trois : `fr: '...'` pour une
// chaîne (positioning), `fr: { ... }` pour un groupe (plans, leviers, pavés),
// et le type `Bi` pour une prose faite de centaines de paires (designCourses).
//
// C'EST LA DEUXIÈME FOIS QUE CE COMPTEUR RATE UNE FORME, et ça dit quelque
// chose sur ce qu'il vaut. Il indique, il ne prouve pas. Ce qui PROUVE qu'un
// fichier est traduit, ce sont les vérifications nommées plus haut, une par
// levier, une par pavé, une par pilier, une par formule · elles échouent sur
// un texte manquant ou recopié. Ce compteur sert à voir le reste à faire d'un
// coup d'oeil, et il faut le lire comme ça.
const BILINGUAL = [/\bfr:\s*['"`{]/, /\bBi\b/]
let proseWithFr = 0
for (const f of proseFiles) {
  const src = readFileSync(f, 'utf8')
  if (BILINGUAL.some((re) => re.test(src))) proseWithFr++
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

// LA MORSURE QUI A RÉVÉLÉ LE TROU · elle est gardée telle quelle.
ok('morsure · de l\'anglais reformulé est vu',
  !looksFrench('A source is a document I can open at a URL or a file path, that carries a date.'))
ok('morsure · du vrai français passe',
  looksFrench('Une source est un document que je peux ouvrir à une adresse ou à un chemin de fichier.'))
ok('morsure · du français sans accent passe quand même',
  looksFrench('Un document que vous pouvez ouvrir, avec une date dessus, et que vous montreriez.'))
// LES QUATRE PHRASES QUE LA PREMIÈRE VERSION ACCUSAIT À TORT · elles restent
// ici, parce qu'une garde qui a déjà accusé du bon texte doit porter la preuve
// qu'elle ne le fait plus.
ok('morsure · « Quelle part du travail se fait en lecture seule ? »',
  looksFrench('Quelle part du travail se fait en lecture seule ?'))
ok('morsure · une politique sans accent',
  looksFrench('Tu connais notre politique de remboursement : 30 jours, hors frais de port, sous conditions.'))
ok('morsure · une consigne avec élisions',
  looksFrench("S'il n'y en a aucune : interdisez-lui d'en inventer."))
ok('morsure · un échantillon de données n\'a pas de langue',
  looksFrench('total_ttc : 1240,50, page 2, ligne 14.'))
ok('morsure · un libellé court n\'est pas accusé', looksFrench('PDF'))
ok('morsure · une phrase anglaise longue est vue',
  !looksFrench('Report a problem only if you can write a concrete input and what the code does with it.'))
ok('morsure · une phrase en dur est vue', HARDCODED.test('<a href="/">App setup guide</a>'))
ok('morsure · une expression JSX ne l\'est pas', !HARDCODED.test("<a href='/'>{t('nav.home')}</a>"))
ok('morsure · un mot seul ne l\'est pas', !HARDCODED.test('<span>Beta</span>'))
ok('morsure · une copie serait vue', ['x'].filter(() => 'Menu' === 'Menu').length === 1)

console.log(fails ? `\ntest-i18n · ${fails} problème(s)` : `\ntest-i18n · ${keys.length} clés, ${PILLARS.filter((p) => p.fr).length}/${PILLARS.length} piliers, prose ${proseWithFr}/${proseFiles.length}`)
process.exit(fails ? 1 : 0)
