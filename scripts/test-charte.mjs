// LA CHARTE, LE DÉFILEMENT ET LA MISE EN PAGE · gardés ici, parce que chacune
// de ces pannes est déjà arrivée et qu'aucune n'a fait rougir un typecheck.
//
// ---------------------------------------------------------------------------
// LA PANNE QUI JUSTIFIE CE FICHIER
//
// « on ne peut pas scroller verticalement ». La feuille de style portait
// « height: 100% » sur html, body et #root, avec « overflow: hidden » sur body.
// Les deux ensemble découpent le document à la hauteur de la fenêtre et jettent
// le reste : sur l'écran d'accueil, six des huit formations étaient sous la
// ligne de coupe et AUCUN geste ne pouvait les atteindre.
//
// Rien ne l'a vu, et il faut comprendre pourquoi, parce que c'est la leçon :
//
//   · le typecheck ne lit pas le CSS,
//   · la construction réussissait,
//   · les épreuves navigateur mesurent ce qu'elles vont chercher, et aucune
//     n'allait chercher la hauteur du document,
//   · et sur l'écran de celui qui a écrit la règle, la page tenait.
//
// Une règle qui casse tout un produit et que trente-huit épreuves laissent
// passer mérite une garde qui la vise nommément.
//
// ---------------------------------------------------------------------------
// CE QU'ON GARDE, ET CE QU'ON NE GARDE PAS
//
// ON GARDE LES DÉCISIONS, PAS LES VALEURS. Vérifier que la marge d'une carte
// vaut quatorze pixels serait une garde qui accuse du travail juste : la marge
// bougera, et elle a le droit. Ce qu'on vérifie sont les choses qui ne doivent
// pas bouger sans que quelqu'un le décide : le document défile, les jetons
// viennent du système, le rayon de carte existe et vaut ce qui a été demandé,
// la grille sait faire trois colonnes, la barre du bas porte NOS signes, toute
// animation a son échappatoire, et les étiquettes de la carte passent SOUS
// l'interface qui les recouvre.
//
//   node scripts/test-charte.mjs
import { readFileSync } from 'node:fs'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const CSS = readFileSync('src/index.css', 'utf8')
const SHELL = readFileSync('src/game/Shell.tsx', 'utf8')
const MAP = readFileSync('src/game/WorldMap.tsx', 'utf8')
const CARTE = readFileSync('src/game/Carte.tsx', 'utf8')
const ICONS = readFileSync('src/data/icons.ts', 'utf8')

/** LE BLOC DE BASE, isolé · c'est LUI qui a cassé le défilement, et lui seul.
 *  Chercher « overflow: hidden » dans tout le fichier accuserait une centaine
 *  de règles parfaitement légitimes · une carte qui rogne sa vignette, une
 *  scène plein écran, une bulle qui ne doit pas déborder. La précision vient
 *  de la PORTÉE, pas d'un motif plus malin. */
function baseBodyRule() {
  const m = CSS.match(/\nbody\s*\{([\s\S]*?)\}/)
  return m ? m[1] : ''
}

/* --- 1 · le document défile ----------------------------------------------- */

const BODY = baseBodyRule()
ok('le corps de page ne rogne pas ce qui dépasse en hauteur',
  !/overflow\s*:\s*hidden/.test(BODY) && !/overflow-y\s*:\s*hidden/.test(BODY),
  BODY.match(/overflow[^;]*/)?.[0] ?? 'aucun overflow bloquant')

// … ET LA HAUTEUR EST UN MINIMUM. « height: 100% » seul ne cache rien, mais
// combiné au moindre « overflow » ailleurs il redonne la même coupe, et c'est
// la combinaison qu'on a payée.
ok('la hauteur du document est un minimum, pas une hauteur fixe',
  /html,\s*body,\s*#root\s*\{\s*min-height:\s*100%/.test(CSS),
  CSS.match(/html,\s*body,\s*#root\s*\{[^}]*/)?.[0]?.slice(0, 60) ?? 'règle absente')

// L'ÉCHAPPATOIRE EXISTE, et quelqu'un s'en sert · une carte plein écran ne
// défile pas. Sans cette moitié, on aurait retiré la coupe sans la rendre
// disponible, et le premier écran qui en a besoin la remettrait globalement.
ok('un écran peut se figer, par une classe', /html\.is-fixed/.test(CSS))
ok('la carte plein écran s\'en sert', /is-fixed/.test(CARTE))
// … ET ELLE LA REPREND EN PARTANT. Une classe laissée sur <html> figerait tout
// le produit depuis un écran qu'on a fermé, et c'est la panne qu'on ne
// retrouve jamais parce qu'elle survit à la page qui l'a causée.
ok('et elle la retire en quittant', /classList\.remove\('is-fixed'\)/.test(CARTE))

/* --- 2 · les jetons viennent du système ----------------------------------- */
//
// Les valeurs sont copiées du document « Hyperobust · Design system ». Un jeton
// arrondi « à peu près » cesse d'être un jeton, donc on vérifie les hexadécimaux
// exacts. La liste est courte à dessein : la marque, les cinq emplacements de
// données, et les deux encres de fond, qui sont ce que tout le reste lit.

const TOKENS = [
  ['le violet de marque, clair', '#7c3aed'],
  ['le violet de marque, sombre', '#a78bfa'],
  ['l\'encre, mode clair', '#0b0c0e'],
  ['le texte second, mode clair', '#62666d'],
  ['la bordure, mode clair', '#e3e4e6'],
  ['le fond sombre, bleuté et non noir', '#08090a'],
  ['la carte, mode sombre', '#0e1011'],
  ['le texte second, mode sombre', '#8a8f98'],
  ['l\'emplacement de données 1', '#5c72e8'],
  ['l\'emplacement de données 2', '#70e8bd'],
  ['l\'emplacement de données 3', '#e56fd2'],
  ['l\'emplacement de données 4', '#f1e376'],
  ['l\'emplacement de données 5', '#4ce0e9'],
]
for (const [nom, hex] of TOKENS) {
  ok(`jeton · ${nom}`, CSS.toLowerCase().includes(hex), hex)
}

// … ET AUCUNE RÈGLE DE RACINE NE LES REPREND PLUS BAS.
//
// C'EST LA MOITIÉ QUI MANQUAIT, ET SANS ELLE LA SECTION AU DESSUS NE GARDAIT
// RIEN. Les jetons étaient bien écrits en tête de la feuille, la garde les y
// trouvait, elle passait au vert · et trois mille lignes plus bas un bloc
// « :root:not([data-theme="dark"]) { --ink: #000; --muted: #000 } », écrit à
// l'époque où le parti pris était le noir pur sans niveau de gris, les
// ramenait tous les deux à zéro. La charte était dans le fichier et pas à
// l'écran : le texte second restait noir, donc sans hiérarchie, ce qui est
// exactement ce que le système interdit.
//
// CHERCHER UNE CHAÎNE NE PROUVE RIEN. Un jeton ne vaut que s'il GAGNE, et en
// CSS c'est la dernière déclaration de même portée qui gagne. La règle compte
// donc les déclarations de racine pour chacun de ces jetons : il doit y en
// avoir exactement deux, le mode clair et le mode sombre. Une troisième est
// une reprise, quelle que soit sa bonne raison, et elle doit se déclarer.
//
// CE QU'ELLE NE VOIT PAS, ET QU'IL FAUT DIRE · elle lit du texte, pas un
// navigateur. Une redéfinition portée par une classe plutôt que par la racine
// lui échappe. C'est assumé : la faute réelle était au niveau de la racine, et
// une règle qui tenterait de simuler la cascade se tromperait plus souvent
// qu'elle n'aurait raison.
for (const jeton of ['--ink', '--muted', '--border']) {
  // une DÉCLARATION DE RACINE · « :root », avec ou sans attribut de thème.
  // Les blocs de composants qui se donnent leurs propres variables locales
  // (« .cs { --ink: #111 } ») sont hors sujet : ils ne touchent pas le thème.
  const roots = [...CSS.matchAll(/(:root[^{]*)\{([^}]*)\}/g)]
    .filter(([, , body]) => new RegExp(`${jeton}\\s*:`).test(body))
    .map(([, sel]) => sel.trim())
  ok(`le jeton ${jeton} n'est défini que par les deux thèmes`,
    roots.length === 2, roots.join(' | ') || 'aucune')
}

// LE FOND SOMBRE N'EST PAS UN NOIR PUR · le système l'écrit noir sur blanc, et
// la raison est le halo des bordures claires sur écran OLED. C'était #000000.
const DARK = CSS.match(/:root\[data-theme='dark'\]\s*\{([\s\S]*?)\n\}/)?.[1] ?? ''
ok('le mode sombre n\'est pas un noir pur',
  /--bg:\s*#08090a/i.test(DARK) && !/--bg:\s*#000000/i.test(DARK),
  DARK.match(/--bg:[^;]*/)?.[0] ?? 'absent')

/* --- 3 · le rayon des cartes, et la dérogation assumée -------------------- */
//
// Hyperobust impose le rayon zéro « sur tous les composants, sans exception »
// et range l'ombre parmi les interdits. La dérogation a été demandée
// explicitement et elle est BORNÉE à un jeton : si elle fuit dans --radius,
// c'est tout le produit qui s'arrondit sans que personne l'ait décidé.

ok('le rayon du système reste zéro', /--radius:\s*0px/.test(CSS))
ok('le rayon des cartes vaut seize pixels', /--radius-card:\s*16px/.test(CSS),
  CSS.match(/--radius-card:[^;]*/)?.[0] ?? 'absent')
ok('l\'ombre large des cartes existe', /--shadow-card:/.test(CSS))

/** La règle d'une classe · lue par sa PORTÉE, parce que « .pk » apparaît dans
 *  une vingtaine de sélecteurs et que celui qu'on veut est le premier. */
const rule = (sel) => {
  const m = CSS.match(new RegExp(`\\n${sel.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}\\s*\\{([\\s\\S]*?)\\n\\}`))
  return m ? m[1] : ''
}
const PK = rule('.pk')
ok('la carte de formation porte le rayon', /border-radius:\s*var\(--radius-card\)/.test(PK))
ok('… et l\'ombre', /box-shadow:\s*var\(--shadow-card\)/.test(PK))
// LE JETON EST LU, JAMAIS RECOPIÉ · « border-radius: 16px » écrit en dur
// marcherait aujourd'hui et divergerait au premier réglage. C'est exactement
// la faute que le système nomme : « prendre la valeur dans le jeton, jamais
// l'écrire en dur ».
//
// LA RÈGLE EST BORNÉE À LA FEUILLE DU JEU, et cette borne a été posée parce que
// la garde a accusé du travail juste au premier passage : elle lisait les dix
// mille lignes du fichier et rougissait sur « .pgpick », un panneau écrit bien
// avant que ce jeton existe, arrondi à seize pixels pour ses propres raisons et
// que personne ne demande de changer. Une garde qui accuse du travail juste
// apprend à la contourner, et elle ne garde plus rien.
//
// La précision vient donc de la PORTÉE et non d'un motif plus malin · ce qu'on
// surveille est le jeu, dont les seize pixels viennent d'être décidés, et où un
// deuxième endroit qui les recopierait divergerait au premier réglage.
const GAME_CSS = CSS.slice(CSS.indexOf('.gm {\n  min-height: 100dvh;'))
ok('la feuille du jeu a bien été trouvée', GAME_CSS.length > 2000,
  `${GAME_CSS.length} caractères`)
ok('aucune surface du jeu n\'écrit seize pixels en dur',
  !/border-radius:\s*16px/.test(GAME_CSS),
  GAME_CSS.match(/[^\n]*border-radius:\s*16px[^\n]*/)?.[0]?.trim() ?? 'aucune')

/* --- 4 · trois formations sur la même ligne ------------------------------- */
//
// La grille comptait ses colonnes par paliers et restait à deux du téléphone au
// vingt-sept pouces. Ce qu'on garde n'est pas « trois » comme un nombre magique
// mais le fait que la grille SACHE en faire trois, et qu'elle reste fluide en
// dessous · une grille qui énumère de nouveau ses paliers repartira à deux.

const GRID = rule('.pk-grid')
ok('la grille des formations est fluide', /auto-fit/.test(GRID), GRID.trim().split('\n').pop()?.trim())
ok('elle sait ranger trois formations sur une ligne',
  /\.pk-grid\s*\{\s*grid-template-columns:\s*repeat\(3,/.test(CSS.replace(/\s+/g, ' ')),
  'palier large')
// … ET ELLE NE REVIENT PAS À DEUX COLONNES ÉNUMÉRÉES.
ok('aucun palier ne la rabat à deux colonnes',
  !/\.pk-grid\s*\{\s*grid-template-columns:\s*1fr\s+1fr\s*\}/.test(CSS.replace(/\s+/g, ' ')))

/* --- 5 · la barre du bas porte nos signes --------------------------------- */

ok('l\'onglet Dojos porte la marque', /glyph:\s*null/.test(SHELL) && /<Logo size=/.test(SHELL))
ok('l\'onglet Profil porte un sourire', /glyph:\s*'smile'/.test(SHELL))
ok('le sourire existe dans le jeu Bauhaus', /'smile'/.test(ICONS))
// LES SIGNES D'EMPRUNT NE REVIENNENT PAS · une maison pour l'accueil et une
// étoile pour le profil sont corrects et interchangeables ; c'est justement le
// problème, et c'est ce qui a été demandé de changer.
ok('la barre ne reprend ni la maison ni l\'étoile',
  !/glyph:\s*'(house|star)'/.test(SHELL),
  SHELL.match(/glyph:\s*'[a-z]+'/g)?.join(', ') ?? '')

/* --- 6 · toute animation a son échappatoire ------------------------------- */
//
// Ce n'est pas une politesse. Pour qui est sensible au mouvement, une animation
// qui continue après qu'on a demandé qu'elle s'arrête est la différence entre
// un produit utilisable et un malaise. La règle est donc vérifiée par
// CONSTRUCTION : chaque nom d'animation déclaré doit être cité dans un bloc de
// mouvement réduit, sinon il en manquera une, un jour, et personne ne le verra.

const KEYFRAMES = [...CSS.matchAll(/@keyframes\s+(gm-[a-z-]+)/g)].map((m) => m[1])
const CALM = CSS.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?)\n\}/g)?.join('\n') ?? ''
const uncovered = KEYFRAMES.filter((k) => !CALM.includes(k))
ok('chaque animation du jeu est coupée en mouvement réduit',
  uncovered.length === 0,
  uncovered.join(', ') || `${KEYFRAMES.length} animations`)
ok('le ressort des cartes et des boutons aussi',
  /\.pk,\s*\.gm-cta\s*\{\s*transition-duration/.test(CALM))

// … ET CHAQUE ANIMATION EST RÉELLEMENT POSÉE QUELQUE PART.
//
// C'est la moitié qui manquait au premier jet, et elle vaut plus que l'autre.
// « gm-pump » et « gm-bumped » existaient, avec leurs images clés, leur
// échappatoire de mouvement réduit et un commentaire qui expliquait à quoi
// elles servaient · et AUCUN composant ne les portait. Une classe que rien
// n'applique n'est pas une animation, c'est une intention, et un commentaire
// qui décrit une intention comme si elle était faite est un mensonge que la
// prochaine lecture croira.
//
// La règle est donc : ce qui est déclaré ici est utilisé là-bas.
const USERS = ['src/game/Shell.tsx', 'src/game/Dojos.tsx', 'src/game/Profil.tsx', 'src/game/PackPage.tsx']
  .map((f) => readFileSync(f, 'utf8')).join('\n')
const unused = KEYFRAMES.filter((k) => !USERS.includes(k))
ok('chaque animation déclarée est portée par un composant',
  unused.length === 0,
  unused.join(', ') || KEYFRAMES.join(', '))
// L'ARRIVÉE NE DOIT PAS LAISSER LA PAGE VIDE · couper une animation d'arrivée
// sans rendre l'opacité laisse la moitié de l'écran invisible, ce qui est bien
// pire que l'animation qu'on voulait éviter.
ok('couper l\'arrivée ne cache rien', /\.gm-rise,\s*\.gm-bumped\s*\{\s*opacity:\s*1/.test(CALM))
// … ET L'ARRIVÉE REND LA MAIN AU SURVOL. Avec « both », la dernière image clé
// reste appliquée et écrase la transition : la carte montait, puis ne bougeait
// plus jamais sous le doigt.
ok('l\'arrivée ne fige pas le ressort', /\.gm-rise\s*\{[^}]*backwards/.test(CSS))

/* --- 7 · les étiquettes de la carte passent SOUS l'interface -------------- */
//
// On ouvrait une cité et son titre se dessinait par dessus le panneau, par
// dessus le voile, lisible et cliquable alors que tout devait être derrière.
// La cause est répartie sur deux fichiers · la profondeur des étiquettes dans
// WorldMap, celle de la fiche dans la feuille de style · donc aucune lecture
// d'un seul fichier ne pouvait la voir. C'est exactement pour ça que la garde
// compare les deux.

const LABEL_Z = Number(MAP.match(/zIndexRange=\{\[(\d+),/)?.[1] ?? NaN)
const zOf = (sel) => Number(rule(sel).match(/z-index:\s*(\d+)/)?.[1] ?? NaN)
const SHEET_Z = zOf('.cm-sheet')
const SCRIM_Z = Number(CSS.match(/\.cm-scrim\s*\{[^}]*z-index:\s*(\d+)/)?.[1] ?? NaN)

ok('les étiquettes déclarent une profondeur', Number.isFinite(LABEL_Z), String(LABEL_Z))
ok('la fiche d\'une cité passe au dessus des étiquettes',
  SHEET_Z > LABEL_Z, `fiche ${SHEET_Z} > étiquettes ${LABEL_Z}`)
ok('le voile aussi', SCRIM_Z > LABEL_Z, `voile ${SCRIM_Z} > étiquettes ${LABEL_Z}`)
ok('… et la fiche passe au dessus du voile', SHEET_Z > SCRIM_Z, `${SHEET_Z} > ${SCRIM_Z}`)

// UNE ÉTIQUETTE GARDE SA TAILLE · elle rétrécissait avec la distance de la
// caméra, réglage trouvé sur un écran large et faux sur un téléphone, où les
// treize titres tombaient à six pixels. Un nom de lieu est de l'interface
// posée sur une carte, pas un objet du décor.
ok('les étiquettes ne rétrécissent pas avec la caméra',
  !/wm-tag[\s\S]{0,400}distanceFactor/.test(MAP) && !/distanceFactor=\{26\}/.test(MAP))

/* --- 8 · la vallée -------------------------------------------------------- */

ok('la vallée est peuplée de promeneurs', /<Walkers\b/.test(MAP))
ok('ils suivent les chemins existants', /trails\.map\(\(t\) => t\.curve\)/.test(MAP))
// LA CADENCE VIENT DU DÉPLACEMENT · sans elle, le personnage patine, ce qui se
// voit tout de suite et rend la scène bon marché. Voir three/gait.
ok('leur démarche est tenue par celui qui les déplace',
  /GaitProvider/.test(MAP) && /advance\(gait\.current/.test(MAP))
ok('la campagne remplit le vide entre les cités', /<Countryside\b/.test(MAP))
// RIEN NE SE POSE SUR UNE CITÉ · un arbre au milieu d'un jardin sec, ou à
// travers un temple, est exactement ce qui fait dire qu'une carte est buggée.
ok('et elle évite les enceintes', /free\(x,\s*z,\s*6\.2\)/.test(MAP))

/* --- 9 · les morsures ------------------------------------------------------ */
//
// Une garde qu'on ne peut pas faire rougir ne garde rien, et une garde qui
// accuse du travail juste apprend à la contourner. Les deux sens, donc.

ok('morsure · la règle qui a cassé le défilement serait revue',
  /overflow\s*:\s*hidden/.test('  background: var(--bg);\n  overflow: hidden;\n'))
ok('morsure · une coupe horizontale seule ne l\'est pas',
  !/(^|\s)overflow\s*:\s*hidden/.test('  overflow-x: hidden;\n  overflow-y: auto;\n'))
ok('morsure · un rayon écrit en dur serait vu',
  /border-radius:\s*16px/.test('.carte { border-radius: 16px; }'))
ok('morsure · le même par jeton ne l\'est pas',
  !/border-radius:\s*16px/.test('.carte { border-radius: var(--radius-card); }'))
ok('morsure · une animation non couverte serait vue',
  ['gm-pump', 'gm-inventee'].filter((k) => !CALM.includes(k)).length === 1)
// LA MORSURE DE L'ORDRE DE PROFONDEUR · on rejoue la configuration EXACTE
// d'avant, celle qui dessinait « Le coût réel » par dessus le panneau, et on
// vérifie que la comparaison la refuse. Écrire ici « SHEET_Z > LABEL_Z » avec
// les valeurs actuelles ferait une morsure qui ne peut pas mordre.
const OLD = { label: 20, sheet: 7 }
ok('morsure · l\'ancienne superposition serait refusée', !(OLD.sheet > OLD.label),
  `fiche ${OLD.sheet} sous étiquettes ${OLD.label}`)
ok('morsure · une maison dans la barre serait vue',
  /glyph:\s*'(house|star)'/.test("{ to: '/', key: 'nav.dojos', glyph: 'house' },"))
ok('morsure · le sourire ne l\'est pas',
  !/glyph:\s*'(house|star)'/.test("{ to: '/profil', key: 'nav.profile', glyph: 'smile' },"))
ok('morsure · deux colonnes énumérées seraient vues',
  /\.pk-grid\s*\{\s*grid-template-columns:\s*1fr\s+1fr\s*\}/.test('.pk-grid { grid-template-columns: 1fr 1fr }'))

console.log(fails
  ? `\ntest-charte · ${fails} problème(s)`
  : `\ntest-charte · ${TOKENS.length} jetons, ${KEYFRAMES.length} animations couvertes, étiquettes ${LABEL_Z} sous la fiche ${SHEET_Z}`)
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
