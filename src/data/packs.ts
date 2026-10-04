// LES FORMATIONS · ce qu'on ouvre, ce qu'on achète, ce qu'on joue.
//
// ---------------------------------------------------------------------------
// POURQUOI UN ÉTAGE DE PLUS AU DESSUS DES MODULES
//
// Le programme avait deux étages : des cités (modules) et des dojos (niveaux).
// Ça suffisait tant qu'il y avait un seul parcours. Il y en a huit : la semaine
// gratuite, la généraliste, et six métiers. Sans un étage qui les nomme, l'app
// ne pouvait poser qu'une question maladroite · « quelle cité ? » · alors que
// la question qu'on se pose en arrivant est « quelle formation ? ».
//
// C'est aussi ce qui permet aux formations de GROSSIR. Une formation est une
// liste de modules ; en ajouter un ne demande ni écran, ni route, ni carte : il
// entre dans la liste et tout le reste suit.
//
// ---------------------------------------------------------------------------
// TOUT EST DÉRIVÉ, Y COMPRIS L'EXPÉRIENCE
//
// Les maquettes affichent des points d'expérience sur chaque leçon. On ne les
// écrit pas à la main : ce serait un deuxième chiffre à tenir à côté des
// minutes, et deux chiffres qui décrivent le même effort divergent au premier
// remaniement. L'XP est donc une FONCTION de la durée · dix points la minute,
// arrondis à la dizaine. Un dojo de sept minutes vaut soixante-dix points, et
// personne n'a à s'en souvenir.
//
// ---------------------------------------------------------------------------
// CE QUE COÛTE UNE FORMATION VIENT DE data/plans, ET DE NULLE PART AILLEURS
//
// Un prix écrit ici serait le quatrième endroit où ce produit a déjà laissé
// traîner un tarif périmé. Chaque formation porte donc la CLÉ de sa formule,
// et le prix se lit au moment de l'afficher.
import { B, say, type Bi } from './bilingual'
import type { IconName } from './icons'
import {
  DISCOVERY_MODULE, PATH_MODULES, MODULE_BY_ID, type Module, type Level,
} from './curriculum'
import { TRADES, citiesOfTrade } from './trades'
import { PATH_EUR, TRADE_EUR, COURSE_EUR } from './plans'
import { COURSE_IDS, COURSE_CITIES, type CourseId } from './courses'
import type { Lang } from '../i18n/lang'

/* ================================================================== */
/* L'EXPÉRIENCE                                                        */
/* ================================================================== */

/** Ce que vaut un dojo · dérivé de sa durée, jamais écrit à la main.
 *
 *  DIX POINTS LA MINUTE est un choix arbitraire, et c'est très bien : la
 *  valeur absolue ne veut rien dire, seul le rapport entre deux dojos compte.
 *  Ce qui n'est pas arbitraire, c'est que ce soit UNE FONCTION · un second
 *  nombre écrit à côté des minutes aurait fini par les contredire. */
export const xpOf = (l: Level): number => Math.round((l.minutes * 10) / 10) * 10

export const xpOfModule = (m: Module): number =>
  m.levels.reduce((n, l) => n + xpOf(l), 0)

/* ================================================================== */
/* CE QU'IL FAUT POUR ENTRER                                           */
/* ================================================================== */

/** La porte d'une formation · trois seulement, et chacune correspond à une
 *  ligne de data/plans. Un quatrième cas voudrait dire qu'on vend autre chose
 *  que ce que la grille de tarifs annonce. */
export type Door = 'free' | 'path' | 'trade' | 'course'

/** Les kits de salle qu'une formation peut porter · un sous-ensemble choisi des
 *  kits de three/ThemeProps. Écrit en type plutôt qu'en chaîne libre pour
 *  qu'une faute de frappe se voie à la compilation et non par une salle vide. */
export type DojoKit = 'course' | 'study' | 'saas' | 'podcast' | 'pitch' | 'app' | 'sales' | 'ops'
  // les huit métiers ajoutés · voir data/metiers et game/PackArt
  | 'design' | 'school' | 'campus' | 'lab' | 'code' | 'hire' | 'law' | 'consult'

export interface Pack {
  id: string
  door: Door
  title: Bi
  /** UNE LIGNE, et c'est une contrainte · voir scripts/test-packs. Les cartes
   *  des maquettes tiennent une phrase, pas un paragraphe, et c'est ce qui les
   *  rend lisibles d'un coup d'oeil sur un téléphone. */
  blurb: Bi
  glyph: IconName
  tint: string
  /** LA SALLE DE SON DOJO · la carte montre l'INTÉRIEUR du dojo de la
   *  spécialité, meublé du kit de son métier (voir three/ThemeProps). C'était
   *  un extérieur de temple, le même pour tous à la couleur près ; une salle
   *  meublée dit de quoi on parle avant qu'on ait lu le titre · un studio de
   *  podcast n'est pas une salle des marchés. */
  kit: DojoKit
  /** les identifiants de ses modules, dans l'ordre conseillé */
  modules: string[]
  /** le métier auquel ce pack appartient · absent pour les deux généralistes */
  trade?: string
  /** le cours vendu à part que ce pack est · voir data/courses */
  course?: CourseId
}

/* ================================================================== */
/* LES HUIT FORMATIONS                                                 */
/* ================================================================== */

/** LE WEEK-END IA · l'ancienne « semaine de découverte », renommée pour ce
 *  qu'elle est vraiment : sept leçons de sept minutes, soit moins d'une heure,
 *  ce qui tient dans un samedi. « Sept jours » promettait un rythme, et un
 *  rythme est une contrainte qu'on impose à quelqu'un qui n'a encore rien
 *  demandé. Le contenu n'a pas bougé d'une ligne. */
const WEEKEND: Pack = {
  id: 'weekend',
  door: 'free',
  // LES TITRES ET LES PHRASES DES FORMATIONS · demandé : « Revois tous les
  // textes des formations et leur titres pour les rendre plus compréhensifs :
  // parle que de formation et cours plus de temples avec des analogies ».
  title: B('AI basics, free', "Les bases de l'IA, gratuit"),
  blurb: B('Like the highway code before driving: seven short free lessons to understand the words, the limits and the cost of AI.',
    "Comme le code de la route avant de conduire : sept cours courts et gratuits pour comprendre les mots, les limites et le coût de l'IA."),
  glyph: 'peak',
  tint: '#7b5cff',
  kit: 'course',
  modules: [DISCOVERY_MODULE.id],
}

const GENERAL: Pack = {
  id: 'generaliste',
  door: 'path',
  title: B('Put AI to work: the complete course', "Faire travailler l'IA : la formation complète"),
  blurb: B('Like training a very fast but literal assistant: thirteen modules to write clear prompts, pick the right tool, delegate to agents and keep the cost down.',
    "Comme former un assistant très rapide mais qui prend tout au pied de la lettre : treize modules pour écrire des prompts clairs, choisir le bon outil, déléguer à des agents et maîtriser le coût."),
  glyph: 'diamond',
  tint: '#0ea5e9',
  kit: 'study',
  modules: PATH_MODULES.map((m) => m.id),
}

/** LE KIT DE CHAQUE MÉTIER · la salle qui ressemble au travail qu'on y fait.
 *
 *  UNE TABLE ET NON UN CYCLE. La version d'avant tirait un décor dans une
 *  liste de six par l'indice du métier, donc « commercial » avait un pavillon
 *  sur l'eau parce qu'il était cinquième, pas parce qu'un commercial travaille
 *  au bord d'un bassin. Ici chaque métier nomme SA salle, et un métier ajouté
 *  sans salle tombe sur la salle d'étude plutôt que sur celle d'un autre. */
const TRADE_KIT: Record<string, DojoKit> = {
  growth: 'saas',        // les tableaux de bord, les courbes
  comms: 'podcast',      // le micro, la lumière annulaire, le mur de studio
  founder: 'pitch',      // la scène, le trophée
  product: 'app',        // les serveurs, le tableau de flux
  sales: 'sales',        // les téléphones, la carte du territoire
  assistant: 'ops',      // le tapis roulant, les palettes, le flux
  designer: 'design',    // le mur d'inspiration, les nuanciers
  teacher: 'school',     // le tableau noir, la classe
  student: 'campus',     // la table de révision, les fiches
  scientist: 'lab',      // la paillasse, les fioles
  developer: 'code',     // les écrans, la revue de code
  recruiter: 'hire',     // la table d'entretien, le CV
  lawyer: 'law',         // le contrat, la balance
  consultant: 'consult', // l'atelier au tableau
}

/** LE TITRE D'UNE FORMATION MÉTIER · le nom du métier seul (« Commercial »)
 *  ne dit pas qu'il s'agit d'une formation ; le titre dit ce qu'on apprend. */
const TRADE_TITLE: Record<string, Bi> = {
  growth: B('AI for growth marketers', "L'IA pour les growth marketers"),
  comms: B('AI for communications', "L'IA pour la communication"),
  founder: B('AI for founders', "L'IA pour les fondateurs"),
  product: B('AI for product managers', "L'IA pour les chefs de produit"),
  sales: B('AI for sales', "L'IA pour les commerciaux"),
  assistant: B('AI for executive assistants', "L'IA pour les assistants de direction"),
  designer: B('AI for designers', "L'IA pour les designers"),
  teacher: B('AI for teachers', "L'IA pour les enseignants"),
  student: B('AI for students', "L'IA pour les étudiants"),
  scientist: B('AI for scientists', "L'IA pour les scientifiques"),
  developer: B('AI for developers', "L'IA pour les développeurs"),
  recruiter: B('AI for recruiters', "L'IA pour les recruteurs"),
  lawyer: B('AI for legal counsel', "L'IA pour les juristes"),
  consultant: B('AI for consultants', "L'IA pour les consultants"),
}

const TRADE_PACKS: Pack[] = TRADES.map((t) => ({
  id: `metier-${t.id}`,
  door: 'trade' as Door,
  title: TRADE_TITLE[t.id] ?? t.label,
  blurb: t.who,
  glyph: t.glyph,
  tint: t.tint,
  kit: TRADE_KIT[t.id] ?? 'study',
  modules: citiesOfTrade(t.id).map((m) => m.id),
  trade: t.id,
}))

/** LES COURS VENDUS À PART · « comment coder une app » (Claude Code, le
 *  terminal, GitHub, Supabase, Vercel) et « coder une app avec Lovable ».
 *  Chacun est un temple à lui, avec son maître et sa salle. Un cours dont le
 *  texte n'est pas encore écrit n'a pas de cité et n'est pas publié. */
const COURSE_META: Record<CourseId, Omit<Pack, 'id' | 'door' | 'modules' | 'course'>> = {
  'coder-une-app': {
    title: B('Code an app with Claude Code', 'Coder une app avec Claude Code'),
    blurb: B('Like building a house with a very fast builder: you draw the plan, Claude Code writes the code, from GitHub and Supabase to going live on Vercel.',
      'Comme construire une maison avec un artisan très rapide : vous dessinez le plan, Claude Code écrit le code, de GitHub et Supabase jusqu\'à la mise en ligne sur Vercel.'),
    glyph: 'frame',
    tint: '#f97316',
    kit: 'code',
  },
  'coder-avec-lovable': {
    title: B('Build an app without code using Lovable', 'Créer une app sans coder avec Lovable'),
    blurb: B('Like ordering from a caterer: you describe the app, Lovable prepares it, and you learn to check it, connect its data and publish it.',
      "Comme passer commande à un traiteur : vous décrivez l'app, Lovable la prépare, et vous apprenez à la vérifier, à brancher ses données et à la publier."),
    glyph: 'smile',
    tint: '#ec4899',
    kit: 'app',
  },
  'ecrire-un-livre': {
    title: B('Write a book from A to Z with AI', 'Écrire un livre de A à Z avec l\'IA'),
    blurb: B('Like working with a tireless editor: idea, plan, characters, writing, rewriting, cover and publication, with AI as a partner and you as the author.',
      'Comme travailler avec un éditeur infatigable : idée, plan, personnages, écriture, réécriture, couverture et publication, avec l\'IA en partenaire et vous en auteur.'),
    glyph: 'pen',
    tint: '#b45309',
    kit: 'study',
  },
  'storyboard': {
    title: B('Storyboards for film and advertising', 'Storyboard pour le cinéma et la pub'),
    blurb: B('Like a comic strip of your film before the shoot: script breakdown, shots, framing, consistent characters and an animatic, generated and directed with AI.',
      'Comme la bande dessinée de votre film avant le tournage : découpage, plans, cadrages, personnages cohérents et animatique, générés et dirigés avec l\'IA.'),
    glyph: 'frame',
    tint: '#dc2626',
    kit: 'podcast',
  },
  'bd-manga': {
    title: B('Create a comic or a manga with AI', 'Créer une bande dessinée ou un manga avec l\'IA'),
    blurb: B('Like a studio with an assistant who inks fast: story, characters, page layout, panels and lettering, while keeping your own style and rights.',
      'Comme un atelier avec un assistant qui encre vite : histoire, personnages, mise en page, cases et lettrage, en gardant votre style et vos droits.'),
    glyph: 'panel',
    tint: '#e11d48',
    kit: 'design',
  },
  'flow-ux': {
    title: B('Design a UX flow with AI', 'Concevoir un flow UX avec l\'IA'),
    blurb: B('Like planning the route of a journey before building the road: user research, journeys, flows, wireframes and tests, sped up with AI.',
      'Comme tracer l\'itinéraire d\'un voyage avant de construire la route : recherche utilisateur, parcours, flows, wireframes et tests, accélérés par l\'IA.'),
    glyph: 'grid',
    tint: '#0891b2',
    kit: 'app',
  },
  'architecture-logicielle': {
    title: B('Software architecture with AI', 'Architecture logicielle avec l\'IA'),
    blurb: B('Like an architect\'s plans before the building site: requirements, components, data, APIs, security and decision records, reasoned with AI and checked by you.',
      'Comme les plans d\'un architecte avant le chantier : exigences, composants, données, API, sécurité et décisions tracées, raisonnés avec l\'IA et vérifiés par vous.'),
    glyph: 'layers',
    tint: '#4f46e5',
    kit: 'code',
  },
  'comptabilite': {
    title: B('Bookkeeping from A to Z with AI', 'Tenir sa comptabilité de A à Z avec l\'IA'),
    blurb: B('Like a tidy filing cabinet that sorts itself: receipts, entries, bank reconciliation, VAT, closing and dashboards, with AI as assistant and your accountant as referee.',
      'Comme un classeur bien rangé qui se trie tout seul : justificatifs, écritures, rapprochement bancaire, TVA, clôture et tableaux de bord, avec l\'IA en assistante et votre expert-comptable en arbitre.'),
    glyph: 'bars',
    tint: '#059669',
    kit: 'ops',
  },
  'images-ia': {
    title: B('High-quality AI images: styles, Midjourney, retouching', 'Images IA de haute qualité : styles, Midjourney, retouche'),
    blurb: B('Like learning photography and painting at once: prompts, styles, references, Midjourney and other generators, then retouching and upscaling to professional quality.',
      'Comme apprendre la photo et la peinture à la fois : prompts, styles, références, Midjourney et autres générateurs, puis retouche et agrandissement en qualité professionnelle.'),
    glyph: 'square',
    tint: '#9333ea',
    kit: 'design',
  },
  'logo-charte': {
    title: B('Logos and brand guidelines with AI', 'Logotype et charte graphique avec l\'IA'),
    blurb: B('Like dressing a brand from head to toe: strategy, logo, colours, typography and a guidelines document, explored with AI and finished in vector by you.',
      'Comme habiller une marque de la tête aux pieds : stratégie, logo, couleurs, typographie et charte, explorés avec l\'IA et finalisés en vectoriel par vous.'),
    glyph: 'diamond',
    tint: '#ea580c',
    kit: 'design',
  },
  'design-system-figma': {
    title: B('A design system from A to Z in Figma', 'Design system de A à Z pour Figma'),
    blurb: B('Like a LEGO box for your product: tokens, components, variants, documentation and governance in Figma, built faster with AI and ready for developers.',
      'Comme une boîte de LEGO pour votre produit : tokens, composants, variantes, documentation et gouvernance dans Figma, construits plus vite avec l\'IA et prêts pour les développeurs.'),
    glyph: 'hex',
    tint: '#2563eb',
    kit: 'app',
  },
  'ia-locale': {
    title: B('Local AI, open source and offline', 'L\'IA en local, open source et hors ligne'),
    blurb: B('Like having your own kitchen instead of eating out: text, image and video models running on your machine, offline, without subscription, your data staying home.',
      'Comme avoir sa propre cuisine plutôt que manger dehors : des modèles de texte, d\'image et de vidéo qui tournent sur votre machine, hors ligne, sans abonnement, vos données restant chez vous.'),
    glyph: 'box',
    tint: '#16a34a',
    kit: 'lab',
  },
  'business-ia': {
    title: B('Business and monetisation with AI', 'Business et monétisation avec l\'IA'),
    blurb: B('Like opening a shop in a new district: understand the market, find a real problem, build a prototype in an evening, sell, and hold on over time.',
      'Comme ouvrir une boutique dans un nouveau quartier : comprendre le marché, trouver un vrai problème, monter un prototype en une soirée, vendre, et tenir dans la durée.'),
    glyph: 'star',
    tint: '#ca8a04',
    kit: 'pitch',
  },
  'copywriting': {
    title: B('Copywriting and sales with AI', 'Copywriting et vente avec l\'IA'),
    blurb: B('Like a salesperson who writes: understand how your reader thinks, position the offer, hold attention, build desire and trust, with AI as a sparring partner.',
      'Comme un vendeur qui écrit : comprendre comment pense votre lecteur, positionner l\'offre, capter l\'attention, créer le désir et la confiance, avec l\'IA en partenaire d\'entraînement.'),
    glyph: 'envelope',
    tint: '#db2777',
    kit: 'sales',
  },
}
const COURSE_PACKS: Pack[] = COURSE_IDS
  .filter((id) => COURSE_CITIES[id].length > 0)
  .map((id) => ({ id, door: 'course' as Door, ...COURSE_META[id], modules: COURSE_CITIES[id].map((m) => m.id), course: id }))

/** L'ORDRE DE LA LISTE EST L'ORDRE DE L'ÉCRAN · le gratuit d'abord, parce que
 *  c'est par là qu'on entre ; la généraliste ensuite, parce que c'est ce qu'on
 *  vend ; les métiers en dernier, parce qu'ils n'ont de sens qu'après. */
export const PACKS: Pack[] = [WEEKEND, GENERAL, ...COURSE_PACKS, ...TRADE_PACKS]

export const PACK_BY_ID: Record<string, Pack> =
  Object.fromEntries(PACKS.map((p) => [p.id, p]))

/* ================================================================== */
/* CE QUI SE DÉRIVE                                                    */
/* ================================================================== */

/** Les modules d'une formation · rend un tableau vide plutôt que de lever,
 *  parce qu'un identifiant inventé arrive par la barre d'adresse et doit
 *  rendre une page. */
export const modulesOf = (p: Pack): Module[] =>
  p.modules.map((id) => MODULE_BY_ID[id]).filter(Boolean)

export const levelsOf = (p: Pack): { module: Module; level: Level }[] =>
  modulesOf(p).flatMap((module) => module.levels.map((level) => ({ module, level })))

export const minutesOf = (p: Pack): number =>
  levelsOf(p).reduce((n, { level }) => n + level.minutes, 0)

export const xpOfPack = (p: Pack): number =>
  levelsOf(p).reduce((n, { level }) => n + xpOf(level), 0)

/** Le prix d'une formation, en euros · lu dans data/plans, jamais écrit ici. */
export const eurOf = (p: Pack): number =>
  p.door === 'free' ? 0
    : p.door === 'path' ? PATH_EUR
      : p.door === 'course' && p.course ? COURSE_EUR[p.course]
        : TRADE_EUR

/** La formation à laquelle appartient un module · l'inverse de modulesOf,
 *  tenu au même endroit pour qu'il ne puisse pas le contredire. */
export const PACK_OF_MODULE: Record<string, string> = Object.fromEntries(
  PACKS.flatMap((p) => p.modules.map((m) => [m, p.id])),
)

/** Le nom d'une formation dans la langue lue · un seul chemin. */
export const packName = (p: Pack, lang: Lang): string => say(p.title, lang)

/* ================================================================== */
/* LES ADRESSES                                                        */
/* ================================================================== */
//
// ELLES SONT COURTES, ET C'EST LE POINT. « /formation/agents/ag-method »
// demandait de connaître trois identifiants pour partager un dojo. Une
// formation est un dojo, un niveau est un niveau, et deux segments suffisent.

export const packPath = (id: string) => `/dojo/${id}`
export const lessonPath = (packId: string, levelId: string) => `/dojo/${packId}/${levelId}`

/** Retrouver un niveau dans une formation · rend null plutôt que de lever. */
export function findLesson(packId: string, levelId: string) {
  const pack = PACK_BY_ID[packId]
  if (!pack) return null
  const found = levelsOf(pack).find(({ level }) => level.id === levelId)
  return found ? { pack, ...found } : null
}

export const PACK_COUNT = PACKS.length
export const FREE_PACK = WEEKEND
export const PATH_PACK = GENERAL
