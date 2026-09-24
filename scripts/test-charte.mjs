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

/* --- 3 · le style de jeu, et il s'arrête au jeu --------------------------- */
//
// CE QUE CETTE SECTION GARDAIT, ET POURQUOI ELLE A CHANGÉ. Elle vérifiait la
// dérogation Hyperobust : seize pixels et une ombre sur les cartes, lus dans le
// jeton --radius-card, jamais recopiés. Le jeu a ensuite été redemandé dans le
// style des jeux de gestion mobiles, qui repose précisément sur ce que ce
// système interdit · le trait épais, le rebord, le reflet. Le jeton est mort,
// il a été retiré, et une garde qui continuerait d'exiger sa présence
// garderait un cadavre.
//
// CE QUI NE DOIT TOUJOURS PAS BOUGER SANS QU'ON LE DÉCIDE :
//   · le reste du produit garde le rayon zéro · le style de jeu est BORNÉ,
//   · les surfaces du jeu sont UNE surface · une seule règle de panneau, que
//     la carte, le module, la question, la fiche reprennent,
//   · le contour vient du jeton d'encre, jamais d'un hexadécimal recopié,
//   · le bouton a une COURSE · il descend de la hauteur exacte de son rebord.

/** La règle d'une classe · lue par sa PORTÉE, parce que « .pk » apparaît dans
 *  une vingtaine de sélecteurs et que celui qu'on veut est le premier. */
const rule = (sel) => {
  const m = CSS.match(new RegExp(`\\n${sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\{([\\s\\S]*?)\\n\\}`))
  return m ? m[1] : ''
}

ok('le reste du produit garde le rayon zéro', /--radius:\s*0px/.test(CSS))
ok('le jeton de la dérogation a bien disparu', !/--radius-card/.test(CSS),
  CSS.match(/[^\n]*--radius-card[^\n]*/)?.[0]?.trim() ?? 'absent')

// LA FEUILLE DU JEU · bornée par PORTÉE, pour la même raison qu'avant : la
// garde a accusé du travail juste le jour où elle lisait les onze mille lignes
// et rougissait sur un panneau du studio arrondi pour ses propres raisons.
const GAME_AT = CSS.indexOf('LE JEU · le style « jeu de gestion mobile »')
const GAME_CSS = GAME_AT >= 0 ? CSS.slice(GAME_AT) : ''
ok('la feuille du jeu a bien été trouvée', GAME_CSS.length > 5000, `${GAME_CSS.length} caractères`)

// UNE SEULE RÈGLE DE PANNEAU · carte, module, question, fiche.
const PANEL = GAME_CSS.match(/\n(\.pk, \.md,[^{]*)\{([\s\S]*?)\n\}/)
const panelSel = PANEL?.[1] ?? ''
for (const cls of ['.pk', '.md', '.ln-quiz', '.cm-sheet']) {
  ok(`${cls} est un panneau de jeu`, panelSel.split(',').map((x) => x.trim()).includes(cls), panelSel.trim().slice(0, 60))
}
ok('le panneau est cerné d\'encre', /border:\s*3px solid var\(--g-ink\)/.test(PANEL?.[2] ?? ''))
ok('… et posé sur sa tranche', /0 6px 0 var\(--g-ledge\)/.test(PANEL?.[2] ?? ''))

// LE CONTOUR VIENT DU JETON · un « 3px solid #14161f » recopié marcherait
// aujourd'hui et divergerait le jour où l'encre change avec un thème.
// La garde vise L'ENCRE et elle seule : un liseré d'accent orange (le passe de
// test du profil) est une couleur voulue, pas un contour recopié. La première
// version attrapait toute couleur en dur et accusait ce liseré.
const INK = CSS.match(/--g-ink:\s*(#[0-9a-f]{3,6})/i)?.[1] ?? '#14161f'
const rawInk = [...GAME_CSS.matchAll(new RegExp(`border[a-z-]*:\\s*[\\d.]+px solid ${INK}\\b`, 'gi'))].map((m) => m[0])
ok('aucun contour du jeu n\'écrit l\'encre en dur', rawInk.length === 0, rawInk.slice(0, 2).join(' | ') || 'aucun')

// LE BOUTON A UNE COURSE, ET ELLE EST EXACTE · il s'enfonce de la hauteur de
// son rebord et le rebord disparaît. Un enfoncement plus court laisse une
// marche sous le bouton ; plus long, le bouton passe SOUS sa propre tranche.
const CTA = GAME_CSS.match(/\n\.gm-cta, \.cc-btn \{([\s\S]*?)\n\}/)?.[1] ?? ''
const CTA_DOWN = GAME_CSS.match(/\n\.gm-cta:active, \.cc-btn:active \{([\s\S]*?)\n\}/)?.[1] ?? ''
const ledge = Number(CTA.match(/0 (\d+)px 0 var\(--b-ledge\)/)?.[1] ?? NaN)
const press = Number(CTA_DOWN.match(/translateY\((\d+)px\)/)?.[1] ?? NaN)
ok('le bouton descend de la hauteur de son rebord', ledge === press, `rebord ${ledge}px, course ${press}px`)
// LE REFLET PASSE SOUS LE TEXTE · sans contexte d'empilement, le pseudo-élément
// du reflet se peignait par-dessus les lettres, en voile blanc.
ok('le reflet ne recouvre pas le texte', /isolation:\s*isolate/.test(CTA) && /z-index:\s*-1/.test(GAME_CSS))

// LES VRAIS <button> GARDENT LEUR ARRONDI · une règle générale plus haut dans
// le fichier aplatit « button » en !important. Les boutons du jeu qui sont des
// liens étaient ronds, ceux qui sont des <button> sortaient en briques, côte à
// côte sur le même écran.
ok('une règle générale aplatit bien les <button>', /input, textarea, select, button \{ border-radius: 0 !important; \}/.test(CSS))
ok('… et le jeu leur rend leur arrondi avec la même force',
  /\.gm button\.gm-cta, \.gm \.cc-btn[^{]*\{ border-radius: 16px !important; \}/.test(CSS)
  && /\.gm \.ln-opt \{ border-radius: 16px !important; \}/.test(CSS))

// LE TITRE EST EXTRUDÉ · mesuré : l'encre du contour posée sur la page de nuit,
// c'était du sombre sur du sombre, et le contour disparaissait exactement là où
// sont les titres. La tranche violette sous le contour est ce qui les détache.
ok('le grand titre porte l\'extrusion', /text-shadow:\s*var\(--g-title\)/.test(rule('.gm-h1')))

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
// un produit utilisable et un malaise.
//
// LA RÈGLE SUIT LES ÉLÉMENTS, PAS LES NOMS, et c'est une réparation.
// La première version vérifiait qu'un NOM d'animation apparaissait dans un bloc
// de mouvement réduit, et qu'il apparaissait dans un composant. Elle a rougi
// sur « gm-hop », qui était pourtant juste des deux côtés : l'animation est
// posée par la feuille sur « .gm-tab.on .gm-tab-g » (l'onglet actif, qui est
// bien dans Shell), et ce même sélecteur est coupé en mouvement réduit. Le nom
// n'apparaissait simplement nulle part en toutes lettres. Une garde qui accuse
// du travail juste apprend à la contourner.
//
// Ce qui compte vraiment est donc vérifié : chaque SÉLECTEUR qui porte une
// animation du jeu est coupé en mouvement réduit, et chaque animation est
// portée par au moins un élément qui existe dans un composant.

/** Les règles d'un texte CSS, à plat · les blocs @media ne sont pas ouverts,
 *  mais leurs règles internes sont trouvées puisqu'elles n'ont pas d'accolade
 *  dans leur corps. */
// Les commentaires sont retirés d'abord · sinon le commentaire qui précède une
// règle devient une partie de son sélecteur, et la règle n'est plus reconnue.
const rulesOf = (text) => [...text.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .map(([, sel, body]) => ({ sels: sel.split(',').map((x) => x.trim()).filter(Boolean), body }))
const KEYFRAMES = [...CSS.matchAll(/@keyframes\s+(gm-[a-z-]+)/g)].map((m) => m[1])
const CALM = CSS.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?)\n\}/g)?.join('\n') ?? ''
const CALM_RULES = rulesOf(CALM)
const ALL_RULES = rulesOf(CSS.replace(/@keyframes[^{]+\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, ''))
/** les sélecteurs qui posent cette animation */
const carriers = (k) => ALL_RULES
  .filter((r) => new RegExp(`animation(-name)?:\\s*${k}\\b`).test(r.body))
  .flatMap((r) => r.sels)
const stilled = (sel) => CALM_RULES.some((r) => r.sels.includes(sel) && /animation:\s*none/.test(r.body))

const loose = []
for (const k of KEYFRAMES) for (const sel of carriers(k)) if (!stilled(sel)) loose.push(`${k} sur ${sel}`)
ok('chaque élément animé du jeu est coupé en mouvement réduit', loose.length === 0,
  loose.slice(0, 3).join(' | ') || `${KEYFRAMES.length} animations`)
ok('le ressort des cartes et des boutons aussi',
  /\.pk,\s*\.gm-cta\s*\{\s*transition-duration/.test(CALM))

// … ET CHAQUE ANIMATION EST PORTÉE PAR UN ÉLÉMENT QUI EXISTE.
// « gm-pump » et « gm-bumped » ont existé avec leurs images clés et leur
// commentaire, et AUCUN composant ne les portait. Une classe que rien
// n'applique n'est pas une animation, c'est une intention, et un commentaire
// qui décrit une intention comme si elle était faite est un mensonge.
const SOURCES = ['src/game/Shell.tsx', 'src/game/Dojos.tsx', 'src/game/Profil.tsx', 'src/game/PackPage.tsx',
  'src/game/Lesson.tsx', 'src/game/Carte.tsx', 'src/game/WorldMap.tsx']
  .map((f) => readFileSync(f, 'utf8')).join('\n')
const classesOf = (sel) => [...sel.matchAll(/\.([a-z][a-z0-9-]*)/g)].map((m) => m[1])
const orphan = KEYFRAMES.filter((k) => {
  const sels = carriers(k)
  return !sels.some((sel) => classesOf(sel).some((c) => SOURCES.includes(c)))
})
ok('chaque animation est portée par un élément qui existe', orphan.length === 0,
  orphan.join(', ') || KEYFRAMES.join(', '))
// L'ARRIVÉE NE DOIT PAS LAISSER LA PAGE VIDE · couper une animation d'arrivée
// sans rendre l'opacité laisse la moitié de l'écran invisible.
ok('couper l\'arrivée ne cache rien', /\.gm-rise,\s*\.gm-bumped\s*\{\s*opacity:\s*1/.test(CALM))
// … ET L'ARRIVÉE REND LA MAIN AU SURVOL. Avec « both », la dernière image clé
// reste appliquée et écrase la transition : la carte ne bougeait plus.
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

/* --- 8b · le sombre par défaut, la police du jeu, la mesure des vignettes - */
//
// LE SOMBRE PAR DÉFAUT SE DÉCIDE À DEUX ENDROITS, et ils doivent dire la même
// chose. public/boot.js pose le thème avant le premier pixel ; loadTheme dans
// store.ts le relit. S'ils divergent, la page naît dans un thème et React la
// bascule dans l'autre au premier rendu : un éclair, à chaque chargement.
const BOOT = readFileSync('public/boot.js', 'utf8')
const STORE = readFileSync('src/store.ts', 'utf8')
const bootDefault = BOOT.match(/if \(t !== 'dark' && t !== 'light'\) t = '(dark|light)'/)?.[1]
const storeDefault = STORE.match(/function loadTheme[\s\S]*?return '(dark|light)'\s*\n\}/)?.[1]
ok('le thème par défaut est le sombre', bootDefault === 'dark', bootDefault ?? 'introuvable')
ok('boot.js et store.ts disent le même défaut', bootDefault && bootDefault === storeDefault,
  `${bootDefault} / ${storeDefault}`)
// La barre du navigateur a la teinte de l'en-tête du jeu, aux trois endroits.
const HTML = readFileSync('index.html', 'utf8')
ok('la barre du navigateur naît sombre', /name="theme-color" content="#0f1120"/.test(HTML))
ok('… et reste raccordée des deux côtés', /#0f1120/.test(BOOT) && /#0f1120/.test(STORE))

// LA POLICE DU JEU EST SERVIE PAR NOUS. Chargée depuis Google, elle manquait
// dès que Google ne répondait pas, et le titre tombait en police système sous
// un contour prévu pour une police épaisse. Le test « document.fonts.check »
// répondait vrai quand même : il le fait pour toute famille sans @font-face.
const MAIN = readFileSync('src/main.tsx', 'utf8')
ok('la police du jeu est servie par nous', /import '@fontsource\/lilita-one\/latin-400\.css'/.test(MAIN))
ok('… et pas demandée à Google', !/Lilita/.test(HTML))
ok('elle ne sert qu\'à l\'affichage', /--font-game:\s*'Lilita One'/.test(CSS))

// LA VIGNETTE MESURE SA BOÎTE, PAS SON APPARENCE. Pendant l'arrivée de la
// carte (une mise à l'échelle), la mesure par défaut lisait la taille RÉDUITE
// et laissait une bande vide à droite de chaque vignette, pour toujours.
const ART = readFileSync('src/game/PackArt.tsx', 'utf8')
ok('la vignette ignore les transformations en se mesurant', /resize=\{\{\s*offsetSize:\s*true\s*\}\}/.test(ART))
ok('chaque formation a sa salle', /kit=\{pack\.kit\}/.test(readFileSync('src/game/Dojos.tsx', 'utf8'))
  && /kit=\{pack\.kit\}/.test(readFileSync('src/game/PackPage.tsx', 'utf8')))

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

ok('morsure · un défaut clair serait vu',
  "if (t !== 'dark' && t !== 'light') t = 'light'".match(/t = '(dark|light)'$/)?.[1] !== 'dark')
ok('morsure · une police demandée à Google serait vue',
  /Lilita/.test('<link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Outfit">'))
ok('morsure · une vignette mesurée sans offsetSize serait vue',
  !/resize=\{\{\s*offsetSize:\s*true\s*\}\}/.test('<Canvas dpr={[1, 1.5]} frameloop="demand">'))

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
