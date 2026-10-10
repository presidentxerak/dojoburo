// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
//
// ---------------------------------------------------------------------------
// CE QUE CE ROBOT DÉCRIT, AUJOURD'HUI
//
// La barre du bas a trois boutons : Dojoburo (la carte des temples, sur /),
// Communauté et Profil. « Change complètement le design des personnages et des
// dojo en pixel art 2D [...] Efface l'ancien jeu » : chaque formation est un
// temple, chaque étage une leçon, l'élève y entre avec le personnage pixel
// qu'il a créé, voit qui étudie au même moment et discute dans le chat du
// cours. Le jeu du studio, l'onglet IA Training et la vallée en 3D sont partis.
// Le profil a des onglets (Progression, Badges, Formations, Compte,
// Paramètres), et l'élève porte un grade (une ceinture, game/ranks).
// Les
// sujets de l'ancien produit (le bureau en trois dimensions, les ateliers, la
// société, les apparences, les profils métier, l'exécutant dans le nuage, la
// connexion par compte) ont été retirés : ils répondaient avec assurance sur
// des écrans que plus personne ne peut ouvrir depuis la navigation.
//
// TROIS IDENTIFIANTS ONT CHANGÉ DE SUJET, ET C'EST VOULU. 'studios', 'teams'
// et 'budget' sont nommés en dur dans components/SupportBot (les pastilles
// d'accueil). Les supprimer aurait laissé trois pastilles qui affichent un
// identifiant brut et ne répondent rien. Ils portent donc maintenant les
// temples, le personnage et les autres élèves, et les tokens. Le jour où ces
// pastilles changent, les identifiants peuvent suivre.
//
// CE QUE CE ROBOT NE PROMET PAS · ni remboursement, ni facture. Rien de tout
// ça n'existe dans le code, et une promesse de robot de support est une
// promesse du produit. Le compte, lui, existe (facultatif, e-mail ou Google,
// quand la connexion est activée sur le déploiement) : voir le sujet 'signin'.
import { CONNECTORS, type Connector } from '../data/connectors'
import type { Lang } from '../i18n/lang'
import { say } from '../data/bilingual'
// Counts and rosters come from the data the app runs on · see data/facts.
import { ACADEMY_LESSONS, ACADEMY_TRACKS, ACADEMY_HOURS } from '../data/facts'
// Le centre de formation · ses chiffres viennent des données, jamais d'une
// phrase écrite à la main dans une réponse de robot.
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { COURSE_COUNT } from '../data/positioning'
import { FRAMEWORK_COUNT } from '../data/frameworks'
import { GRADES } from '../dojo/grades'
import { PACKS, FREE_PACK, PATH_PACK, modulesOf, levelsOf, minutesOf, packPath } from '../data/packs'
import { TRADES } from '../data/trades'
import { whatsNewAnswer } from './dojobot'
// LES PRIX · quatre réponses de cette base les recopiaient à la main, ce qui en
// faisait une cinquième grille de prix capable de contredire les quatre autres.
// Elle l'a fait : elle vendait encore Founder à 29 $ et 2 000 tâches longtemps
// après que le produit ait cessé d'exécuter quoi que ce soit.
import { TRADE_EUR, COURSE_EUR, PASS_EUR, TEMPLE_EUR, PASS_PAYS_FROM, priceTag } from '../data/plans'
// LES GRADES DE L'ÉLÈVE · lus dans game/ranks et game/Gauge, jamais recopiés.
// Ce ne sont pas les ceintures du studio (dojo/grades, sujet 'certification').
import { RANKS } from '../game/ranks'
import { XP_PER_LEVEL } from '../game/Gauge'

const GRADE_COUNT = GRADES.length

// LES GRADES EN CHIFFRES · l'échelle, le personnage de chaque ceinture, et les
// trois repères que game/ranks documente (week-end, formation complète, métier).
const RANK_COUNT = RANKS.length
const rankById = (id: string) => RANKS.find((r) => r.id === id) ?? RANKS[0]
const YELLOW = rankById('yellow')
const BROWN = rankById('brown')
const BLACK = RANKS[RANKS.length - 1]
const rankName = (r: (typeof RANKS)[number], lang: Lang) => `${say(r.belt, lang)} · ${say(r.title, lang)}`
const rankLadder = (lang: Lang) => RANKS
  .map((r) => `${rankName(r, lang)} (${lang === 'fr' ? 'niveau' : 'level'} ${r.from})`)
  .join(', ')

// LES FORMATIONS EN CHIFFRES · lus dans data/packs, jamais recopiés.
const PACK_COUNT = PACKS.length
const FREE_LESSONS = levelsOf(FREE_PACK).length
const FREE_MINUTES = minutesOf(FREE_PACK)
const PATH_CITIES = modulesOf(PATH_PACK).length
const PATH_DOJOS = levelsOf(PATH_PACK).length
const TRADE_PACKS = PACKS.filter((p) => p.door === 'trade')
const TRADE_COUNT = TRADE_PACKS.length
const TRADE_CITIES = TRADE_PACKS[0] ? modulesOf(TRADE_PACKS[0]).length : 0
const tradeNames = (lang: Lang) => TRADES.map((t) => say(t.label, lang)).join(', ')
const FREE_HREF = packPath(FREE_PACK.id)
const TRADE_LESSONS = TRADE_PACKS[0] ? levelsOf(TRADE_PACKS[0]).length : 0
// LES FORMATIONS THÉMATIQUES · demandé : « enrichi nos formations en en créant
// des nouvelles très détaillées » (livre, storyboard, manga, flow UX...). Leur
// liste est lue dans data/packs : une formation publiée y apparaît d'elle-même.
const COURSE_PACKS = PACKS.filter((p) => p.door === 'course')
const COURSE_PACK_COUNT = COURSE_PACKS.length
const courseNames = (lang: Lang) => COURSE_PACKS.map((p) => say(p.title, lang)).join(' ; ')

export interface KBLink {
  label: string
  href: string
  external?: boolean
}

/** Le même sujet en français.
 *
 *  Les LIENS n'y sont que par leur LIBELLÉ, dans le même ordre : une adresse
 *  ne se traduit pas, et la recopier dans la version française aurait donné
 *  deux listes d'adresses capables de diverger. Le libellé français se pose
 *  sur le lien anglais, position par position. */
export interface KBTopicFr {
  chip: string
  answer: string
  links?: string[]
}

export interface KBTopic {
  id: string
  chip: string
  answer: string
  links?: KBLink[]
  /** le même sujet en français · voir topicIn */
  fr?: KBTopicFr
  follow?: string[]
  keywords: string[]
  /** the animated walkthrough that shows this, if there is one · Dojobot
   *  offers it as a "Watch it" button and plays it full screen in place. */
  walk?: 'overview' | 'company' | 'teams' | 'apps'
}

export const KB: KBTopic[] = [
  {
    // QUOI DE NEUF · demandé : « mets le à jour en fonction des nouvelles mises
    // à jour de l'app et des formations automatiquement ». Rien n'est écrit ici :
    // la réponse se compose du journal (data/updates), des dernières formations
    // (data/packs) et de la dernière édition des nouveautés (data/news).
    id: 'whatsnew',
    chip: "What's new",
    answer: whatsNewAnswer('en'),
    links: [
      { label: 'See the AI news', href: '/nouveautes' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['training', 'start', 'pricing'],
    keywords: ["what's new", 'whats new', 'new this week', 'latest update', 'updates', 'update', 'nouveau', 'nouveautés', 'nouveautes', 'quoi de neuf', 'mise à jour', 'mises à jour', 'dernières formations', 'nouvelles formations', 'new courses', 'cette semaine', 'this week', 'actualité', 'actualités', 'news'],
    fr: {
      chip: 'Quoi de neuf',
      answer: whatsNewAnswer('fr'),
      links: ['Voir les nouveautés IA', 'Voir les formations'],
    },
  },
  {
    // L'ÉCOLE · demandé : « une catégorie scolaire pour les collégiens et les
    // lycéens [...] avec un système de validation par les parents à chaque
    // étape ». Voir src/school.
    id: 'school',
    chip: 'School (collège, lycée)',
    answer:
      'Formations, then the School tab, opens the school category: every class from 6e to Terminale, every subject of the French curriculum, free during the beta. Each lesson follows the official programme and has a course, a key-points sheet, a worked example, three exercises with full corrections, a game and a five-question quiz. ' +
      'When the quiz is passed, the game completed and the exercises self-checked, a parent validates the lesson with a 4-digit code created in the Parents\' space; the same space shows the progress and the mock exam scores. The brevet, the épreuves anticipées of Première and the bac each have a page with the format of the papers, the chapters to revise and timed mock exams. A cross-grade unit, Learning with AI, teaches how to use AI at school without losing good study habits. The school follows the French curriculum and is in French only.',
    links: [
      { label: 'Open the school', href: '/ecole' },
      { label: 'Parents\' space', href: '/ecole/parents' },
      { label: 'Learning with AI', href: '/ecole/u/ia-ecole' },
    ],
    follow: ['training', 'whatsnew'],
    keywords: ['school', 'école', 'ecole', 'collège', 'college', 'lycée', 'lycee', 'brevet', 'bac', 'baccalauréat', 'baccalaureat', 'brevet blanc', 'bac blanc', 'programme scolaire', 'curriculum', 'homework', 'devoirs', 'parent', 'parents', 'code parent', 'parent code', '6e', '5e', '4e', '3e', 'seconde', 'première', 'terminale', 'collégien', 'lycéen', 'élève', 'pupil', 'mock exam', 'épreuve blanche', 'apprendre avec l\'ia', 'learning with ai'],
    fr: {
      chip: 'École (collège, lycée)',
      answer:
        'Formations, puis l\'onglet École, ouvre la catégorie scolaire : toutes les classes de la 6e à la Terminale, toutes les matières du programme, gratuitement pendant la bêta. Chaque leçon suit le programme officiel et comprend un cours, une fiche de l\'essentiel, un exemple corrigé, trois exercices entièrement corrigés, un jeu et un quiz de cinq questions. ' +
        'Une fois le quiz réussi, le jeu gagné et les exercices autoévalués, un parent valide la leçon avec un code à 4 chiffres créé dans l\'Espace parents ; ce même espace montre la progression et les notes des épreuves blanches. Le brevet, les épreuves anticipées de Première et le bac ont chacun leur page : le format des épreuves, les chapitres à réviser et des épreuves blanches chronométrées. Une unité commune à toutes les classes, Apprendre avec l\'IA, montre comment utiliser l\'IA à l\'école sans perdre les bonnes méthodes de travail.',
      links: ['Ouvrir l\'école', 'Espace parents', 'Apprendre avec l\'IA'],
    },
  },
  {
    // LES TEMPLES · premier bouton de la barre du bas. L'identifiant reste
    // 'studios' parce que SupportBot le nomme dans ses pastilles d'accueil.
    id: 'studios',
    chip: 'The map',
    answer:
      `Dojoburo, the first button of the bottom bar, opens the map: a pixel-art landscape where each building is one course, ${PACK_COUNT} in all, with its name above it. The buildings are only the decor; what matters is the course behind each one. The list of the courses, with their masters and their prices, is on the second button, Formations. ` +
      'Open a course and you see its lessons one after the other, like the rooms of a building: the plan at the top right lets you jump to any lesson, and each lesson is given by the master of the course, dressed for their trade. Click the master and you enter the lesson, where their pixel portrait gives you the course. On the map, other learners walk along the paths. A generative Japanese zen music (koto, shakuhachi, temple bell) and sound effects play on the map and in the courses; the note button at the top mutes the music, and Profile, Settings turns the music and the sound effects on or off separately. ' +
      `The first three lessons of every course are open, so you can see how it teaches. In the free AI weekend, the other lessons open with your email; in the other courses they carry a padlock until you get the course (${priceTag(TEMPLE_EUR)} for one course, whichever it is, or ${priceTag(PASS_EUR)} for the Dojoburo Pass, which opens every course for life).`,
    links: [
      { label: 'See the courses', href: '/formations' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['teams', 'training', 'pricing'],
    keywords: ['dojoburo', 'temple', 'temples', 'étage', 'étages', 'floor', 'floors', 'map', 'carte', 'pixel', 'pixel art', 'game', 'jeu', 'jouer', 'play', 'door', 'porte', 'monter', 'go up', 'master', 'maître', 'padlock', 'cadenas', 'locked', 'verrouillé', 'fullscreen', 'plein écran', 'floor plan', 'plan des étages', 'studio', 'old game', 'ancien jeu', 'music', 'musique', 'sound', 'son', 'zen', 'mute', 'couper le son', 'bruitage', 'sound effects'],
    fr: {
      chip: 'La carte',
      answer:
        `Dojoburo, le premier bouton de la barre du bas, ouvre la carte : un paysage en pixel art où chaque bâtiment est une formation, ${PACK_COUNT} au total, avec son nom au-dessus. Les bâtiments ne sont qu'un décor ; ce qui compte est la formation qu'ils représentent. La liste des formations, avec leurs maîtres et leurs prix, se trouve sur le deuxième bouton, Formations. Ouvrez une formation : ses cours se suivent comme les salles d'un bâtiment, le plan en haut à droite permet de rejoindre n'importe quel cours, et chaque cours est donné par le maître de la formation, vêtu selon son métier. Cliquez sur le maître et vous entrez dans le cours, où son portrait en pixel art vous l'enseigne. Sur la carte, d'autres élèves marchent le long des chemins. Une musique zen japonaise générative (koto, shakuhachi, cloche de temple) et des bruitages accompagnent la carte et les formations ; le bouton de la note, en haut, coupe la musique, et Profil, Paramètres règle séparément la musique et les bruitages. Les trois premiers cours de chaque formation sont ouverts, pour que vous puissiez apprécier la pédagogie. Dans le week-end de l'IA, gratuit, les cours suivants s'ouvrent avec votre adresse e-mail ; dans les autres formations, ils portent un cadenas jusqu'à l'achat (${priceTag(TEMPLE_EUR)} pour une formation, quelle qu'elle soit, ou ${priceTag(PASS_EUR)} pour le Pass Dojoburo, qui ouvre toutes les formations à vie).`,
      links: [
        'Voir les formations',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LE PERSONNAGE ET LES AUTRES ÉLÈVES · l'identifiant 'teams' est gardé
    // pour les pastilles de SupportBot · voir l'en-tête du fichier.
    id: 'teams',
    chip: 'Your character and the other students',
    answer:
      'You appear on the map and in the courses as a pixel-art character in a chibi style that you create yourself, in your Profile: a man, a woman, a non-binary person, an alien, a robot, a monster, an animal or something weird, then the hair, eyes, outfit, colours, an accessory and a pride pin if you wish. "Surprise me" draws a whole character at random. Your character also wears your grade: in Profile, it appears in a kimono whose belt has the colour of your grade. ' +
      'In a course you see the learners who are taking it at the same moment, in the lesson where they are. Click one of them, or the Chat button, to open the course chat: the group chat of that course, and the list of the learners present, each with a button to write to them privately in the Community messages. Reading and writing in the chat needs a free account; your email is never shown, only your name.',
    links: [
      { label: 'See the courses', href: '/formations' },
      { label: 'Change my character', href: '/profil' },
    ],
    follow: ['studios', 'start', 'signin'],
    keywords: ['character', 'personnage', 'avatar', 'pfp', 'chibi', 'pixel', 'alien', 'robot', 'monster', 'monstre', 'animal', 'lgbt', 'pride', 'fierté', 'non-binary', 'non-binaire', 'students', 'étudiants', 'élèves', 'other students', 'autres élèves', 'who is studying', 'qui étudie', 'present', 'présents', 'chat', 'group chat', 'chat du cours', 'private', 'privé', 'message', 'specialist', 'spécialiste', 'team', 'équipe'],
    fr: {
      chip: 'Votre personnage et les autres élèves',
      answer:
        `Vous apparaissez sur la carte et dans les formations sous la forme d'un personnage en pixel art, de style chibi, que vous créez vous-même dans votre Profil : un homme, une femme, une personne non binaire, un alien, un robot, un monstre, un animal ou une créature bizarre, puis la coiffure, les yeux, la tenue, les couleurs, un accessoire et, si vous le souhaitez, un badge des fiertés. Le bouton « Au hasard » tire un personnage entier. Votre personnage porte aussi votre grade : dans le Profil, il apparaît en kimono, avec une ceinture de la couleur de votre grade. Dans une formation, vous voyez les élèves qui la suivent au même moment, dans le cours où ils se trouvent. Cliquez sur l'un d'eux, ou sur le bouton Chat, pour ouvrir le chat de la formation : la discussion de groupe, et la liste des élèves présents, chacun avec un bouton pour lui écrire en privé dans la messagerie de la Communauté. Lire et écrire dans le chat demande un compte gratuit ; votre adresse e-mail n'est jamais affichée, seulement votre nom.`,
      links: [
        'Voir les formations',
        'Modifier mon personnage',
      ],
    },
  },
  {
    // LES TOKENS · l'identifiant 'budget' est gardé pour les pastilles de
    // SupportBot. Le budget du jeu du studio est parti avec lui ; la question
    // des tokens reste, et la formation y répond.
    id: 'budget',
    chip: 'Tokens and budget',
    answer:
      'A token is the unit a model reads, writes and bills: a small piece of a word. Every prompt you send and every answer you get costs tokens, which is why tokens are what an AI job really costs. ' +
      'The training teaches how to spend them well: say exactly what you want, give the context the job needs and not more, pick a model sized for the task, and reuse what works. The /frugality page shows where your tokens actually go in a conversation.',
    links: [
      { label: 'See the courses', href: '/formations' },
      { label: 'Where your tokens go', href: '/frugality' },
    ],
    follow: ['studios', 'training', 'lessons'],
    keywords: ['token', 'tokens', 'jeton', 'jetons', 'budget', 'frugality', 'frugalité', 'sobriété', 'frugal', 'consumption', 'consommation', 'waste', 'gaspill', 'cache', 'vos tokens', 'cost', 'coût'],
    fr: {
      chip: 'Tokens et budget',
      answer:
        `Un token est l'unité qu'un modèle lit, écrit et facture : un petit fragment de mot. Chaque prompt que vous envoyez et chaque réponse que vous recevez consomment des tokens ; c'est pourquoi les tokens représentent le coût réel d'un travail d'IA. La formation enseigne à bien les dépenser : formuler exactement ce que vous attendez, fournir le contexte dont le travail a besoin sans excès, choisir un modèle à la mesure de la tâche, et réutiliser ce qui fonctionne. La page /frugality montre où vont réellement vos tokens au cours d'une conversation.`,
      links: [
        'Voir les formations',
        'Où vont vos tokens',
      ],
    },
  },
  {
    id: 'start',
    chip: 'Getting started',
    answer:
      'Everything starts from the bottom bar, which has five buttons. DOJOBURO opens the map, in pixel art: each building is a course (the free AI weekend, the complete course and the trade courses). FORMATIONS lists every course with its master, its number of lessons and its price. AI NEWS gives, every Monday, a selection of the week\'s AI news: a short summary of each article or English YouTube video, with its source and a link to the original. COMMUNITY (formerly Clan) is the free community, in the style of Skool: a feed with categories (General, Introductions, Questions, Wins, Prompts, Resources), pinned posts, likes, threaded comments and search, plus a Calendar of lives and workshops (add them to your own calendar), Members (who is online, public profiles), Leaderboards (points are the likes others give you, nine levels, 7 days, 30 days and all time), notifications (also by email, which you can turn off in your member profile) and private messages, @mentions, polls, YouTube, Vimeo, Loom, Instagram and TikTok videos shown as players when you paste their link, and an About page. Anyone can read; a free account is needed to post, comment, like and write, and your email is never shown, only the name you choose. PROFILE is organised in tabs: Progression (your grade, level and XP), Badges, Trainings, Account and Settings. ' +
      `The best way in: create your character in your Profile, then open the free AI weekend. No account is needed to learn: without one, everything is kept in this browser. The XP comes from the lessons you actually finished, and it gives you a grade, a belt among ${RANK_COUNT}, worn by your character. Your character is your profile icon at the top right. The app opens in a light display; a dark violet display is one setting away, in Profile, Settings, Display.`,
    links: [
      { label: 'See the courses', href: '/formations' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['studios', 'teams', 'signin'],
    keywords: ['start', 'begin', 'get started', 'commencer', 'démarrer', 'débuter', 'how does it work', 'comment ça marche', 'navigation', 'menu', 'bottom bar', 'barre du bas', 'onglet', 'dojos tab', 'onglet dojos', 'clan', 'community', 'communauté', 'where is', 'où est', 'dark mode', 'mode sombre', 'light mode', 'mode clair', 'theme', 'thème', 'comment cela fonctionne', 'par où commencer'],
    fr: {
      chip: 'Pour commencer',
      answer:
        `Tout commence par la barre du bas, qui comporte cinq boutons. DOJOBURO ouvre la carte, en pixel art : chaque bâtiment est une formation (le week-end de l'IA gratuit, la formation complète et les formations métier). FORMATIONS liste chaque formation avec son maître, son nombre de cours et son prix. NOUVEAUTÉS présente, chaque lundi, une sélection des nouveautés IA de la semaine : un court résumé de chaque article ou vidéo YouTube en anglais, avec sa source et le lien vers l'original. COMMUNAUTÉ (anciennement Clan) est la communauté gratuite, à la manière de Skool : un fil avec des catégories (Général, Présentations, Questions, Réussites, Prompts, Ressources), des publications épinglées, des j'aime, des commentaires en fil et une recherche, un Calendrier des lives et des ateliers (à ajouter à votre propre agenda), les Membres (qui est en ligne, profils publics), les Classements (les points sont les j'aime que les autres vous donnent, neuf niveaux, sur 7 jours, 30 jours et depuis toujours), des notifications (aussi par e-mail, désactivables dans votre profil de membre), une messagerie privée, les mentions @nom, les sondages, les vidéos YouTube, Vimeo, Loom, Instagram et TikTok affichées en lecteur lorsque vous collez leur lien, et une page À propos. Tout le monde peut lire ; un compte gratuit est nécessaire pour publier, commenter, aimer et écrire, et votre adresse e-mail n'est jamais affichée, seulement le nom que vous choisissez. PROFIL est organisé en onglets : Progression (votre grade, votre niveau et votre XP), Badges, Formations, Compte et Paramètres. Le meilleur point d'entrée : créer votre personnage dans votre Profil, puis ouvrir le week-end de l'IA, gratuit. Aucun compte n'est nécessaire pour apprendre : sans compte, tout est conservé dans ce navigateur. L'XP provient des cours que vous avez effectivement terminés, et elle vous confère un grade, c'est-à-dire une ceinture parmi ${RANK_COUNT}, portée par votre personnage. Votre personnage constitue votre icône de profil, en haut à droite. L'application s'ouvre en affichage clair ; un affichage violet sombre est disponible dans Profil, Paramètres, Affichage.`,
      links: [
        'Voir les formations',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LES FORMATIONS · un temple chacune, sur la carte de l'onglet Dojoburo
    // (l'ancien onglet IA Training est parti avec l'ancien jeu). Les nombres viennent de
    // data/packs : une formation qui grossit n'a pas à être recopiée ici.
    id: 'training',
    chip: 'The trainings',
    answer:
      `The courses are listed on the second button of the bottom bar, Formations, and drawn as buildings on the Dojoburo map. There are ${PACK_COUNT} courses. The AI weekend is free: ${FREE_LESSONS} short lessons, about ${FREE_MINUTES} minutes in total, and it asks for your email and nothing else. The complete course is ${PATH_CITIES} modules and ${PATH_DOJOS} lessons: prompting, the models, the assistants, agents, design and cost. Then ${TRADE_COUNT} trade courses, ${TRADE_CITIES} more modules each, written for one job, and ${COURSE_PACK_COUNT} themed courses that take one project from A to Z: ${courseNames('en')}. ` +
      'Think of a course as a manual and of each lesson as one short chapter you can read in any order. The master of the course gives every lesson, and the lessons end with YouTube videos on the same subject, loaded only when you click them. Every lesson ends with a short quiz, a badge and some XP, and you can redo any lesson whenever you want. The first three lessons of every course are open, so you can see how it teaches before paying.',
    links: [
      { label: 'See the courses', href: '/formations' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['trades', 'lessons', 'pricing'],
    keywords: ['training', 'trainings', 'ai training', 'ia training', 'formation', 'formations', 'course', 'courses', 'cours', 'parcours', 'dojo', 'dojos', 'city', 'cities', 'cité', 'cités', 'weekend', 'week-end', 'master', 'maître', 'curriculum', 'programme', 'un dojo', 'a dojo', 'dojo city', 'cité dojo', 'what can i learn', "qu'est-ce que j'apprends", 'que vais-je apprendre', 'where is training', 'où est training', 'where are the trainings', 'où sont les formations', 'where are the dojos', 'où sont les dojos', 'renamed', 'renommé', 'dojos tab'],
    fr: {
      chip: 'Les formations',
      answer:
        `Les formations sont listées sur le deuxième bouton de la barre du bas, Formations, et dessinées comme des bâtiments sur la carte Dojoburo. Il existe ${PACK_COUNT} formations. Le week-end de l'IA est gratuit : ${FREE_LESSONS} cours courts, environ ${FREE_MINUTES} minutes au total, pour lesquels seule votre adresse e-mail est demandée. La formation complète comprend ${PATH_CITIES} modules et ${PATH_DOJOS} cours : le prompt, les modèles, les assistants, les agents, le design et le coût. S'y ajoutent ${TRADE_COUNT} formations métier, comportant chacune ${TRADE_CITIES} modules supplémentaires, conçus pour un métier, et ${COURSE_PACK_COUNT} formations thématiques qui mènent un projet de A à Z : ${courseNames('fr')}. Voyez une formation comme un manuel, et chaque cours comme un chapitre court que vous lisez dans l'ordre de votre choix. Le maître de la formation donne chaque cours, et les cours se terminent par des vidéos YouTube sur le même sujet, chargées seulement au clic. Chaque cours se conclut par un court quiz, un badge et de l'XP, et vous pouvez refaire n'importe quel cours à tout moment. Les trois premiers cours de chaque formation sont ouverts, afin que vous puissiez apprécier la pédagogie avant de payer.`,
      links: [
        'Voir les formations',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LES FORMATIONS MÉTIER · la liste vient de data/trades, le prix de
    // data/plans. Un métier ajouté apparaît ici sans qu'on y touche.
    id: 'trades',
    chip: 'The trade trainings',
    answer:
      `There are ${TRADE_COUNT} trade courses, one per job: ${tradeNames('en')}. Each one adds ${TRADE_CITIES} modules (${TRADE_LESSONS} lessons) written for the objects and the mistakes of that job, and it is ${priceTag(TRADE_EUR)}, paid once. ` +
      'It is best taken after the complete course, because it does not explain the basics again: the complete course is the driving licence, the trade course is learning to drive your own vehicle. Each one is listed on the Formations page, and you pick your trade on the /tarifs page. As a rough guide, finishing one on top of the AI weekend and the complete course takes you to the black belt.',
    links: [
      { label: 'Choose your trade', href: '/tarifs' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['training', 'pricing', 'grades'],
    keywords: ['trade', 'trades', 'trade training', 'trade trainings', 'métier', 'métiers', 'formation métier', 'formations métier', 'my job', 'mon métier', 'which jobs', 'quels métiers', 'profession', 'developer', 'développeur', 'teacher', 'enseignant', 'student', 'étudiant', 'scientist', 'scientifique', 'lawyer', 'legal', 'juriste', 'avocat', 'recruiter', 'recruteur', 'consultant', 'designer', 'growth', 'communication', 'founder', 'fondateur', 'product manager', 'chef de produit', 'sales', 'commercial', 'executive assistant', 'assistant de direction', 'new trades', 'nouveaux métiers'],
    fr: {
      chip: 'Les formations métier',
      answer:
        `Il existe ${TRADE_COUNT} formations métier, une par métier : ${tradeNames('fr')}. Chacune ajoute ${TRADE_CITIES} modules (${TRADE_LESSONS} cours) consacrés aux objets et aux erreurs propres à ce métier, et coûte ${priceTag(TRADE_EUR)}, en un paiement unique. Il est préférable de la suivre après la formation complète, car elle ne reprend pas les bases : la formation complète est le permis de conduire, la formation métier apprend à conduire votre propre véhicule. Chacune figure sur la page Formations, et vous choisissez votre métier sur la page /tarifs. À titre indicatif, une formation métier achevée en plus du week-end de l'IA et de la formation complète conduit à la ceinture noire.`,
      links: [
        'Choisir votre métier',
        'Voir les formations',
      ],
    },
  },
  {
    // LE FORMAT D'UNE LEÇON · voir data/enrich/types et la page de leçon. Un
    // dojo tenait en six lignes ; il porte maintenant l'essentiel, les notions
    // clés, un exemple résolu, les erreurs fréquentes, un exercice, un
    // récapitulatif, et un quiz de cinq questions (1 + 2 + 2).
    id: 'lessons',
    chip: 'How a lesson works',
    answer:
      'Every lesson is taught by the master of its course, built to make you do things, not just read. Its page runs in this order. THE ESSENTIALS: what you will learn, in a few lines. WHAT YOU DO: your mission. KEY CONCEPTS: the words and ideas you need. WHY IT WORKS: the mechanism, so you understand it instead of memorising a recipe. THE STEPS: the concrete moves. A WORKED EXAMPLE, solved step by step. BEFORE AND AFTER: a real prompt that went wrong, the same prompt fixed, and what changed. COMMON MISTAKES, and how to fix each one. THE TRAP to dodge. AN EXERCISE to do in your own AI tool, with a prompt to copy (replace the parts in [BRACKETS] with your own case), a checklist to check your result yourself, and a bonus. A RECAP, and a step to GO FURTHER. ' +
      'Then a quiz of five questions (one, then two, then two) to check you really got it. When you are done, you grab the lesson\'s badge and its XP, and you can come back to any lesson whenever you want. The text is justified, as wide as the banner at the top of the page, and it reads just as well on a phone.',
    links: [
      { label: 'Try a free lesson', href: FREE_HREF },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['training', 'grades', 'pricing'],
    keywords: ['lesson', 'lessons', 'leçon', 'leçons', 'exercise', 'exercice', 'exercices', 'why it works', 'pourquoi ça marche', 'before and after', 'avant / après', 'avant/après', 'copy the prompt', 'copier le prompt', 'prompt to copy', 'prompt à copier', 'checklist', 'quiz', 'five questions', 'cinq questions', 'lesson format', 'format', 'pourquoi cela fonctionne', 'à vous de jouer', "déroulement d'une leçon", 'worked example', 'exemple résolu', 'common mistakes', 'erreurs fréquentes', 'key concepts', 'notions clés', 'concepts clés', 'recap', 'récapitulatif', 'go further', 'aller plus loin', 'essentials', "l'essentiel", "what's in a lesson", 'what is in a lesson', 'que contient une leçon', 'contenu d\'une leçon'],
    fr: {
      chip: "Le déroulement d'une leçon",
      answer:
        `Chaque cours est donné par le maître de sa formation, et conçu pour vous faire agir plutôt que simplement lire. Sa page se déroule dans cet ordre. L'ESSENTIEL : ce que vous allez apprendre, en quelques lignes. CE QUE VOUS FAITES : votre mission. LES NOTIONS CLÉS : les termes et les idées dont vous avez besoin. POURQUOI CELA FONCTIONNE : le mécanisme, afin que vous compreniez plutôt que de mémoriser une recette. LES ÉTAPES : les gestes concrets. UN EXEMPLE RÉSOLU pas à pas. AVANT / APRÈS : un prompt réel qui a échoué, le même prompt corrigé, et l'analyse de ce qui a changé. LES ERREURS FRÉQUENTES, et la manière de corriger chacune. LE PIÈGE à éviter. UN EXERCICE à réaliser dans votre propre outil d'IA, avec un prompt à copier (remplacez les parties entre [CROCHETS] par votre propre cas), une checklist pour vérifier vous-même votre résultat, et un bonus. UN RÉCAPITULATIF, et une étape POUR ALLER PLUS LOIN. Vient enfin un quiz de cinq questions (une, puis deux, puis deux) qui permet de vérifier que la notion est acquise. Une fois la leçon terminée, vous obtenez le badge du dojo et son XP, et vous pouvez revenir sur n'importe quel dojo à tout moment. Le texte est justifié, aussi large que la bannière en haut de la page, et se lit tout aussi bien sur un téléphone.`,
      links: [
        'Essayer une leçon gratuite',
        'Voir les formations',
      ],
    },
  },
  {
    // LES GRADES DE L'ÉLÈVE · game/ranks. Une ceinture par palier de niveau,
    // le niveau venant de l'XP des dojos finis. À ne pas confondre avec les
    // ceintures du studio (sujet 'certification'), qui comptent les agents.
    id: 'grades',
    chip: 'Your grade and belt',
    answer:
      `Your grade is the belt you wear as a learner. It comes from your level, and your level comes from the XP of the lessons you actually finished: one level every ${XP_PER_LEVEL} XP. Nothing can be bought, so the only way up is to finish lessons. There are ${RANK_COUNT} grades, and your own pixel character wears the belt of yours in your profile: ${rankLadder('en')}. ` +
      `As a rough guide, the free AI weekend takes you to the ${say(YELLOW.belt, 'en').toLowerCase()}, the full training on top of it to the ${say(BROWN.belt, 'en').toLowerCase()}, and one trade training on top of that to the ${say(BLACK.belt, 'en').toLowerCase()}, level ${BLACK.from}. So the ${say(BLACK.belt, 'en').toLowerCase()} asks for a real path, never an afternoon. Your icon changes by itself when you reach the next grade. The Progression tab of your profile shows your grade, your level, your XP, the ladder of the ${RANK_COUNT} grades and how far the next one is. These belts are not the studio belts of /build, which count the agents you built.`,
    links: [
      { label: 'See your grade', href: '/profil' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['profile', 'trades', 'lessons'],
    keywords: ['grade', 'grades', 'belt', 'belts', 'ceinture', 'ceintures', 'my belt', 'ma ceinture', 'my grade', 'mon grade', 'black belt', 'ceinture noire', 'brown belt', 'ceinture marron', 'white belt', 'ceinture blanche', 'next belt', 'ceinture suivante', 'avatar', 'profile icon', 'icône de profil', 'icône du profil', 'my icon', 'mon icône', 'character', 'personnage', 'novice', 'apprentice', 'apprenti', 'initiate', 'initié', 'practitioner', 'pratiquant', 'master belt', 'ninja', 'panda', 'penguin', 'pingouin', 'chicken', 'poulet', 'duck', 'canard', 'rabbit', 'lapin', 'frog', 'grenouille'],
    fr: {
      chip: 'Votre grade et votre ceinture',
      answer:
        `Votre grade est la ceinture que vous portez en tant qu'élève. Il découle de votre niveau, lequel découle de l'XP des cours que vous avez effectivement terminés : un niveau tous les ${XP_PER_LEVEL} XP. Rien ne s'achète ; la seule manière de progresser consiste donc à terminer des cours. Il existe ${RANK_COUNT} grades, et votre propre personnage pixel porte la ceinture du vôtre dans votre profil : ${rankLadder('fr')}. À titre indicatif, le week-end de l'IA gratuit vous conduit à la ${say(YELLOW.belt, 'fr').toLowerCase()}, la formation complète à la ${say(BROWN.belt, 'fr').toLowerCase()}, et une formation métier par-dessus à la ${say(BLACK.belt, 'fr').toLowerCase()}, au niveau ${BLACK.from}. La ${say(BLACK.belt, 'fr').toLowerCase()} demande donc un véritable parcours, jamais un après-midi. Votre icône change d'elle-même lorsque vous atteignez le grade suivant. L'onglet Progression de votre profil présente votre grade, votre niveau, votre XP, l'échelle des ${RANK_COUNT} grades et la distance qui vous sépare du suivant. Ces ceintures ne sont pas celles du studio, sur /build, qui comptent les agents que vous avez construits.`,
      links: [
        'Voir votre grade',
        'Voir les formations',
      ],
    },
  },
  {
    // LA COMMUNAUTÉ · sa bibliothèque et ses classements. Rien n'y est inventé :
    // les prompts sont originaux, les ressources réelles et vérifiées, les
    // réussites écrites par les membres eux-mêmes.
    id: 'community',
    chip: 'The community library',
    answer:
      'Community, the second button of the bottom bar, has a PROMPTS tab: a library of original prompts written for DojoBuro, sorted by topic (writing, marketing, sales, HR, legal, code, data, teaching, productivity, images, agents and more), searchable, each ready to copy with what to fill in shown in [BRACKETS]. ' +
      'RESOURCES gathers free, reliable resources selected by the DojoBuro team (official docs, free courses, French and European official sources), with the date the links were checked. WINS shows the stories members publish themselves, and the testimonials members leave with their consent, published after a review by the team. LEADERBOARDS rank members by the likes they receive (7 days, 30 days, all time) and by grade, the belt each one earned in the courses. ' +
      'The masters of the courses are AIs and always say so: in each course chat, the master opens with the challenge of the day and answers questions that end with a question mark. The first 500 members get the Founder badge for good, and the posts signed DojoBuro Team are written by the team.',
    links: [
      { label: 'Open the prompts', href: '/clan/prompts' },
      { label: 'See the resources', href: '/clan/ressources' },
    ],
    follow: ['start', 'studios', 'courses'],
    keywords: ['prompt library', 'bibliothèque de prompts', 'prompts', 'exemples de prompts', 'prompt examples', 'resources', 'ressources', 'docs', 'documentation', 'free course', 'cours gratuit', 'wins', 'réussites', 'témoignage', 'testimonial', 'leaderboard', 'classement', 'grade', 'ceinture', 'members', 'membres'],
    fr: {
      chip: 'La bibliothèque de la communauté',
      answer:
        "La Communauté, deuxième bouton de la barre du bas, propose un onglet PROMPTS : une bibliothèque de prompts originaux, écrits pour DojoBuro, classés par thème (écriture, marketing, vente, RH, juridique, code, données, enseignement, productivité, images, agents, et bien d'autres), avec une recherche ; chacun se copie d'un geste, et ce qu'il faut compléter figure entre [CROCHETS]. RESSOURCES réunit des ressources gratuites et fiables sélectionnées par l'équipe DojoBuro (documentations officielles, cours gratuits, sources officielles françaises et européennes), avec la date de vérification des liens. RÉUSSITES présente les récits que les membres publient eux-mêmes, et les témoignages qu'ils déposent avec leur accord, publiés après relecture par l'équipe. Les CLASSEMENTS ordonnent les membres selon les j'aime reçus (7 jours, 30 jours, depuis toujours) et selon leur grade, la ceinture obtenue dans les temples. Les maîtres des temples sont des IA, et ils le disent toujours : dans le chat de chaque temple, le maître ouvre avec le défi du jour et répond aux questions qui se terminent par un point d'interrogation. Les 500 premiers membres reçoivent le badge Fondateur, pour toujours, et les publications signées Équipe DojoBuro sont écrites par l'équipe.",
      links: [
        'Ouvrir les prompts',
        'Voir les ressources',
      ],
    },
  },
  {
    // LES COURS VENDUS À PART · « comment coder une app » et « coder une app
    // avec Lovable ». Les prix viennent de data/plans.
    id: 'courses',
    chip: 'Code an app: the two courses',
    answer:
      `Two courses are sold separately, each paid once, each opening only its own course. CODE AN APP (${priceTag(COURSE_EUR['coder-une-app'])}) teaches you to build a real web app from A to Z with the terminal, Git and GitHub, Claude Code, Supabase and Vercel: how each tool works, how to set it up, the good practices, around one example app built lesson after lesson, a habit tracker called Habitudes. ` +
      `BUILD AN APP WITH LOVABLE (${priceTag(COURSE_EUR['coder-avec-lovable'])}) follows the same journey with Lovable, its backend and its GitHub sync, around a booking app for a pottery workshop called Atelier, from the first prompt to the published app. Both are on the Dojoburo map, with their own master, and on the /tarifs page.`,
    links: [
      { label: 'See the courses', href: '/tarifs' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['pricing', 'buy', 'studios'],
    keywords: ['code', 'coder', 'coding', 'app', 'application', 'claude code', 'vercel', 'supabase', 'github', 'git', 'terminal', 'lovable', 'no code', 'nocode', 'développer', 'develop', 'build an app', 'créer une app', 'site web', 'website', 'programmer', 'deploy', 'déployer'],
    fr: {
      chip: 'Coder une app : les deux cours',
      answer:
        `Deux cours sont vendus à part, chacun payé une seule fois et n'ouvrant que sa propre formation. CODER UNE APP (${priceTag(COURSE_EUR['coder-une-app'])}) vous apprend à construire une vraie application web de A à Z avec le terminal, Git et GitHub, Claude Code, Supabase et Vercel : le fonctionnement de chaque outil, son installation, les bonnes pratiques, autour d'une app exemple construite cours après cours, un suivi d'habitudes nommé Habitudes. CODER UNE APP AVEC LOVABLE (${priceTag(COURSE_EUR['coder-avec-lovable'])}) suit le même parcours avec Lovable, son backend et sa synchronisation GitHub, autour d'une app de réservation pour un atelier de poterie nommée Atelier, du premier prompt à l'app publiée. Les deux figurent sur la carte de Dojoburo, chacun avec son maître, et sur la page /tarifs.`,
      links: [
        'Voir les cours',
        'Voir les formations',
      ],
    },
  },
  {
    // LES PRIX · lus dans data/plans. Le week-end remplace l'ancienne
    // « semaine de découverte » : même contenu, nouveau nom · voir data/packs.
    id: 'pricing',
    chip: 'Pricing',
    answer:
      `No subscription: you pay once, and nothing renews. The AI weekend is free: ${FREE_LESSONS} short lessons, and it asks for your email, no card. There are three prices. Free: the AI weekend and the first lessons of every course. One course: ${priceTag(TEMPLE_EUR)}, paid once, for any training you choose (the complete course with its ${PATH_CITIES} modules, a trade training, Code an app or Build an app with Lovable), with the files and the updates. The Dojoburo Pass: ${priceTag(PASS_EUR)}, paid once, for life: every training, present and future. It pays for itself from ${PASS_PAYS_FROM} courses on. ` +
      'Not sure yet? The first three lessons of every training are free, so you can judge before paying. Everything is on the /tarifs page, and the training opens in this browser as soon as the payment is confirmed.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['buy', 'training', 'signin'],
    keywords: ['pricing', 'price', 'prices', 'tarif', 'tarifs', 'prix', 'cost', 'coût', 'how much', 'combien', 'expensive', 'cher', 'free', 'gratuit', 'subscription', 'abonnement', 'monthly', 'mensuel', 'per month', 'par mois', 'plans', 'formule', 'paid once', 'une fois', 'bundle', 'how much is', 'how much does', 'combien coûte', 'le prix', 'les prix', 'quel prix', 'formation complète', 'full training', 'combien cela coûte'],
    fr: {
      chip: 'Les tarifs',
      answer:
        `Aucun abonnement : vous payez une seule fois, et rien n'est reconduit. Le week-end de l'IA est gratuit : ${FREE_LESSONS} leçons courtes, pour lesquelles seule votre adresse e-mail est demandée, sans carte bancaire. Il existe trois prix. Gratuit : le week-end de l'IA et les premiers cours de chaque formation. Une formation : ${priceTag(TEMPLE_EUR)}, en un paiement unique, pour la formation de votre choix (la formation complète et ses ${PATH_CITIES} modules, une formation métier, Coder une app ou Coder une app avec Lovable), avec les fichiers et les mises à jour. Le Pass Dojoburo : ${priceTag(PASS_EUR)}, en un paiement unique, à vie : toutes les formations, actuelles et futures. Il est rentable dès la ${PASS_PAYS_FROM}e formation. Vous hésitez encore ? Les trois premières leçons de chaque formation sont offertes, afin que vous puissiez juger avant de payer. Toutes les informations figurent sur la page /tarifs, et la formation s'ouvre dans ce navigateur dès que le paiement est confirmé.`,
      links: [
        'Voir les tarifs',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // L'ACHAT · le chemin réel, voir game/Tarifs : /tarifs, le paiement
    // Stripe, puis /merci qui demande au serveur si c'est payé avant d'ouvrir
    // quoi que ce soit.
    id: 'buy',
    chip: 'How buying works',
    answer:
      'Buying happens on the /tarifs page, without leaving the app. Choose the full training, or pick your trade and choose a trade training, then press Buy: you go to a Stripe payment page and pay once. When the payment is done you come back to a thank-you page, which asks our server whether the payment really went through. Only then does the training open, in this browser, with a button that takes you to its first lesson. If you cancel, you come back to the prices and nothing was charged. ' +
      'Without signing in, your access and your progress are kept in this browser, so come back with the same one; signed in, the training follows your account. If the thank-you page says it found no paid order and you just paid, open the link from your payment confirmation again. If it could not check, try again in a minute: nothing is lost.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['pricing', 'signin', 'troubleshoot'],
    keywords: ['buy', 'buying', 'acheter', 'achat', 'purchase', 'payment', 'paiement', 'pay', 'payer', 'stripe', 'card', 'carte bancaire', 'checkout', 'unlock', 'débloquer', 'merci', 'thank you page', 'after paying', 'après le paiement', 'cancel', 'annuler', 'charged', 'débité', 'acheter la formation', 'acheter une formation', 'buy the training', 'buy a training', "déroulement de l'achat", 'se déroule l\'achat'],
    fr: {
      chip: "Comment se déroule l'achat",
      answer:
        `L'achat s'effectue sur la page /tarifs, sans quitter l'application. Choisissez la formation complète, ou sélectionnez votre métier puis la formation métier correspondante, et appuyez sur Acheter : vous êtes dirigé vers une page de paiement Stripe où vous réglez en une seule fois. Une fois le paiement effectué, vous revenez sur une page de remerciement, qui vérifie auprès de notre serveur que le paiement a bien abouti. C'est seulement alors que la formation s'ouvre, dans ce navigateur, avec un bouton menant à son premier dojo. Si vous annulez, vous revenez aux tarifs et aucun montant n'est débité. Sans connexion, votre accès et votre progression sont conservés dans ce navigateur ; revenez donc avec le même. Si vous êtes connecté, la formation suit votre compte. Si la page de remerciement n'a trouvé aucune commande payée alors que vous venez de régler, rouvrez le lien de votre confirmation de paiement. Si elle n'a pas pu effectuer la vérification, réessayez dans une minute : rien n'est perdu.`,
      links: [
        'Voir les tarifs',
        'Votre progression',
      ],
    },
  },
  {
    id: 'signin',
    chip: 'Do I need an account?',
    answer:
      'No, but you can create one when sign-in is switched on for this site. Signing in takes your email address or your Google account, with no password, from the Account tab of the Profile page (the grade icon at the top right opens your profile). Once you are signed in, your progress, your badges, your Dojoburo save and your clan pseudonym are saved online and synced across every device where you sign in, and a training you paid for follows your account too. ' +
      'Without signing in, everything is kept in this browser only: another browser, another device or a private window starts from zero, and clearing this browser\'s data erases what you finished here. The free AI weekend still asks for your email and nothing else. Signing out, also from the Account tab, never erases what is in this browser.',
    links: [
      { label: 'Your progress', href: '/profil' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['profile', 'buy', 'security'],
    keywords: ['sign in', 'signin', 'log in', 'login', 'account', 'compte', 'register', 'sign up', 'signup', 'inscription', "s'inscrire", 'password', 'mot de passe', 'guest', 'invité', 'another device', 'autre appareil', 'another browser', 'autre navigateur', 'sync', 'synchro', 'save my progress', 'sauvegarde', 'do i need an account', 'faut-il un compte', 'votre compte', 'connexion', 'se connecter', 'sign out', 'log out', 'se déconnecter', 'déconnexion', 'sign in with google', 'connexion google', 'synchronisation', 'synchronised', 'synced', 'online save', 'sauvegarde en ligne'],
    fr: {
      chip: 'Faut-il un compte ?',
      answer:
        `Non, mais vous pouvez en créer un lorsque la connexion est activée sur ce site. La connexion se fait avec votre adresse e-mail ou votre compte Google, sans mot de passe, depuis l'onglet Compte de la page Profil (l'icône de votre grade, en haut à droite, ouvre votre profil). Une fois connecté, votre progression, vos badges, votre partie de Dojoburo et votre pseudonyme du clan sont sauvegardés en ligne et synchronisés sur chaque appareil où vous vous connectez ; une formation payée suit également votre compte. Sans connexion, tout est conservé uniquement dans ce navigateur : un autre navigateur, un autre appareil ou une fenêtre de navigation privée repart de zéro, et l'effacement des données de ce navigateur supprime ce que vous y avez terminé. Le week-end de l'IA gratuit demande toujours votre adresse e-mail, et rien d'autre. La déconnexion, qui se fait également depuis l'onglet Compte, n'efface jamais ce qui se trouve dans ce navigateur.`,
      links: [
        'Votre progression',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    id: 'profile',
    chip: 'Your profile',
    answer:
      'Profile is the third button of the bottom bar, and your character at the top right opens it too. It is organised in five tabs, each with its own animated pixel icon. PROGRESSION answers the question "where am I?": your grade avatar, your level, your XP, gauges towards the next level, the ladder of the grades, and a button to pick up where you left off. BADGES is your trophy case, with every badge, earned or not. TRAININGS shows what you have unlocked and the trade you are working on. ACCOUNT is where you sign in with your email or Google, when sign-in is switched on for this site, to save your progress online and sync it across your devices, and where you sign out; signed out, everything stays in this browser only. SETTINGS holds the language, the display (light or dark violet), the visual effects, reduced animations, vibrations, and a button to erase the data kept in this browser.',
    links: [
      { label: 'Open your profile', href: '/profil' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['grades', 'settings', 'signin'],
    keywords: ['profile', 'profil', 'progress', 'progression', 'my progress', 'ma progression', 'saved', 'sauvegard', 'gardée', 'xp', 'experience', 'expérience', 'level', 'niveau', 'my badges', 'mes badges', 'trophy', 'vitrine', 'unlocked', 'débloqué', 'votre progression', 'votre profil', 'enregistrée', 'tabs', 'onglets', 'profile tabs', 'onglets du profil', 'progression tab', 'onglet progression', 'badges tab', 'onglet badges', 'account tab', 'onglet compte', 'trainings tab', 'onglet formations', 'resume', 'reprendre'],
    fr: {
      chip: 'Votre profil',
      answer:
        `Profil est le troisième bouton de la barre du bas, et votre personnage, en haut à droite, l'ouvre également. Il est organisé en cinq onglets, chacun doté de sa propre icône pixel animée. PROGRESSION répond à la question « où en suis-je ? » : l'avatar de votre grade, votre niveau, votre XP, des jauges vers le niveau suivant, l'échelle des grades, ainsi qu'un bouton pour reprendre là où vous vous étiez arrêté. BADGES est votre vitrine, avec chaque badge, obtenu ou non. FORMATIONS présente ce que vous avez débloqué et le métier sur lequel vous travaillez. COMPTE permet de vous connecter avec votre adresse e-mail ou Google, lorsque la connexion est activée sur ce site, afin de sauvegarder votre progression en ligne et de la synchroniser entre vos appareils, ainsi que de vous déconnecter ; sans connexion, tout reste uniquement dans ce navigateur. PARAMÈTRES regroupe la langue, l'affichage (clair ou violet sombre), les effets visuels, la réduction des animations, les vibrations, et un bouton pour effacer les données conservées dans ce navigateur.`,
      links: [
        'Ouvrir votre profil',
        'Voir les formations',
      ],
    },
  },
  {
    // LES PARAMÈTRES · l'onglet du profil, voir lib/settings et lib/juice. La
    // langue et le son ont leur propre magasin, le profil les expose à côté.
    id: 'settings',
    chip: 'Settings and animations',
    answer:
      'Everything is in the Settings tab of your profile. DISPLAY: light (the default), dark violet, or the one your device uses. LANGUAGE: English or French. GAME SOUND: on or off. VISUAL EFFECTS: buttons bounce and throw small particles when you press them; switch this off and they stay still. REDUCE ANIMATIONS: less movement everywhere in the app. The effects also turn off by themselves when your system asks for reduced motion. VIBRATIONS: a short vibration on touch, on the phones that allow it. ERASE MY DATA: erases everything kept in this browser. Think before you press it: what exists only in this browser cannot be brought back. ' +
      'Your settings are kept in this browser.',
    links: [
      { label: 'Open your settings', href: '/profil' },
      { label: 'See the courses', href: '/formations' },
    ],
    follow: ['profile', 'signin', 'security'],
    keywords: ['settings', 'setting', 'paramètres', 'light mode', 'mode clair', 'dark mode', 'mode sombre', 'display', 'affichage', 'theme', 'thème', 'paramètre', 'réglages', 'réglage', 'preferences', 'préférences', 'animation', 'animations', 'particles', 'particules', 'bounce', 'rebond', 'effects', 'effets', 'visual effects', 'effets visuels', 'reduce motion', 'reduced motion', 'réduire les animations', 'vibration', 'vibrations', 'vibrate', 'vibrer', 'haptic', 'sound', 'son du jeu', 'le son', 'mute', 'couper le son', 'language', 'langue', 'english', 'anglais', 'french', 'français', 'change language', 'changer de langue', 'turn off', 'switch off', 'désactiver', 'couper', 'erase', 'effacer', 'erase my data', 'effacer mes données', 'delete my data', 'supprimer mes données', 'reset', 'réinitialiser'],
    fr: {
      chip: 'Paramètres et animations',
      answer:
        `Tout se trouve dans l'onglet Paramètres de votre profil. L'AFFICHAGE : clair (par défaut), violet sombre, ou celui de votre appareil. LA LANGUE : anglais ou français. LE SON DU JEU : activé ou coupé. LES EFFETS VISUELS : les boutons rebondissent et projettent de petites particules lorsque vous appuyez dessus ; désactivez ce réglage et ils restent immobiles. RÉDUIRE LES ANIMATIONS : moins de mouvement dans toute l'application. Les effets se désactivent également d'eux-mêmes lorsque votre système demande de réduire les animations. LES VIBRATIONS : une courte vibration au toucher, sur les téléphones qui la permettent. EFFACER MES DONNÉES : supprime tout ce qui est conservé dans ce navigateur. Réfléchissez avant d'appuyer : ce qui n'existe que dans ce navigateur ne peut pas être récupéré. Vos réglages sont conservés dans ce navigateur.`,
      links: [
        'Ouvrir vos paramètres',
        'Voir les formations',
      ],
    },
  },
  {
    // LE COURS PRINCIPAL · il n'avait AUCUN sujet. Le robot savait parler de
    // l'académie, de la bibliothèque et des jetons, mais pas de la porte
    // d'entrée du produit : quelqu'un qui demandait « comment je crée un
    // agent ? » tombait sur la cascade LLM ou sur rien.
    id: 'build',
    chip: 'Build an agent',
    answer:
      `Building an agent is the first of the ${COURSE_COUNT} courses, and it is where you start. You walk into the dojo at /build and ${USE_CASE_COUNT} agents are asleep around the room, one per SHAPE of problem: a researcher, a writer, a responder, an engineer, an analyst, a sorter, an extractor, a watcher, a planner, an operator, a campaigner, a conductor. They are asleep because none of them exists yet. You click the one whose problem you actually have, it wakes up, and its page opens full screen with the whole course for it. ` +
      'Each one is taught separately because each one FAILS differently: a research agent invents sources, a sorting agent confuses two neighbouring categories, an extractor returns a plausible value for a field that was simply missing. A general "write a good prompt" course prepares you for none of them. ' +
      'Every path is four steps, and each step MAKES something that did not exist before: a rule, an instruction, a test set. The page explains, for each step, why it exists, the concrete moves, and the same thing written badly next to the same thing written well. At the end you take the agent away as a file in five formats (system prompt, markdown brief, tool schemas, skill folder, neutral manifest), none of which belongs to a provider.',
    links: [
      { label: 'Walk into the dojo', href: '/build' },
      { label: 'How the certification works', href: '/build#certification' },
    ],
    follow: ['certification', 'frameworks', 'teams'],
    keywords: ['build', 'build an agent', 'create an agent', 'créer un agent', 'make an agent', 'first agent', 'use case', "cas d'usage", 'twelve agents', '12 agents', 'agent shapes', 'which agent', 'researcher', 'extractor', 'triage', 'sorter', 'export agent', 'framework'],
    fr: {
      chip: "Construire un agent",
      answer:
        `Construire un agent est le premier des ${COURSE_COUNT} cours, et c'est par là que vous commencez. Vous entrez dans le dojo, à l'adresse /build, où ${USE_CASE_COUNT} agents sommeillent autour de la salle, chacun associé à un TYPE de problème : un chercheur, un rédacteur, un répondant, un ingénieur, un analyste, un trieur, un extracteur, une sentinelle, un planificateur, un opérateur, un expérimentateur, un chef d'orchestre. Ils sommeillent parce qu'aucun d'eux n'existe encore. Vous cliquez sur celui qui correspond au problème que vous rencontrez réellement ; il s'éveille, et sa page s'ouvre en plein écran avec l'intégralité du cours qui lui est consacré. Chacun fait l'objet d'un enseignement distinct parce que chacun ÉCHOUE à sa manière : un agent de recherche invente des sources, un agent de tri confond deux catégories voisines, un extracteur renvoie une valeur plausible pour un champ qui était simplement absent. Un cours général du type « écrivez un bon prompt » ne prépare à aucun de ces cas. Chaque parcours compte quatre étapes, et chaque étape PRODUIT un élément qui n'existait pas auparavant : une règle, une instruction, un jeu de tests. Pour chaque étape, la page explique sa raison d'être, les gestes concrets, et présente la même chose mal rédigée à côté de sa version correcte. À la fin, vous repartez avec votre agent sous forme de fichier, dans cinq formats (system prompt, brief markdown, schémas d'outils, dossier de skill, manifeste neutre), dont aucun n'est propre à un provider.`,
      links: [
        "Entrer dans le dojo",
        "Le fonctionnement de la certification",
      ],
    },
  },
  {
    // OÙ FAIRE TOURNER L'AGENT · la question qui suit immédiatement l'export,
    // et à laquelle rien ne répondait.
    id: 'frameworks',
    chip: 'Where to run it',
    answer:
      `You finish a path with a file: an instruction, tool schemas, a manifest. The question straight after is where to run it, and /frameworks answers it for ${FRAMEWORK_COUNT} of them: LangGraph, LangChain, CrewAI, LlamaIndex, the OpenAI Agents SDK, Google ADK, Pydantic AI, the Microsoft Agent Framework, AutoGen, Semantic Kernel, Mastra, Agno, Strands, smolagents and MetaGPT. ` +
      'For each one: how it MODELS an agent (that is the sentence to understand first, because it decides whether yours fits), where every piece of your exported file goes, what catches people out, and when NOT to take it. ' +
      'There is no code on that page, on purpose. These projects move fast and a snippet written today is wrong in a few months: someone copies it, it breaks, and they think they misunderstood. We teach the part that does not go stale, which is also the part that takes the time: what your agent BECOMES in each framework. A system prompt is an instruction here, a backstory there, a typed signature elsewhere. Once you know that, the current documentation is a five minute read. Every entry links to it.',
    links: [
      { label: 'Compare the frameworks', href: '/frameworks' },
      { label: 'Build an agent first', href: '/build' },
    ],
    follow: ['build', 'certification'],
    keywords: ['framework', 'frameworks', 'langgraph', 'langchain', 'crewai', 'llamaindex', 'openai agents', 'agents sdk', 'google adk', 'pydantic ai', 'autogen', 'ag2', 'semantic kernel', 'mastra', 'agno', 'strands', 'smolagents', 'metagpt', 'integrate', 'intégrer', 'deploy', 'run my agent', 'where to run'],
    fr: {
      chip: "Où l'exécuter",
      answer:
        `Vous terminez un parcours avec un fichier : un system prompt, des schémas d'outils, un manifeste. La question qui suit immédiatement est celle de son exécution, et la page /frameworks y répond pour ${FRAMEWORK_COUNT} d'entre eux : LangGraph, LangChain, CrewAI, LlamaIndex, l'OpenAI Agents SDK, Google ADK, Pydantic AI, le Microsoft Agent Framework, AutoGen, Semantic Kernel, Mastra, Agno, Strands, smolagents et MetaGPT. Pour chacun, elle indique comment il MODÉLISE un agent (c'est la notion à comprendre en premier, car elle détermine si le vôtre s'y adapte), où se place chaque élément de votre fichier exporté, les pièges courants, et les cas où il ne faut PAS le choisir. Cette page ne contient volontairement aucun code. Ces projets évoluent rapidement, et un extrait écrit aujourd'hui sera erroné dans quelques mois : quelqu'un le copie, il ne fonctionne plus, et cette personne croit avoir mal compris. Nous enseignons la partie qui ne se périme pas, qui est aussi celle qui demande le plus de temps : ce que votre agent DEVIENT dans chaque framework. Un system prompt est une instruction ici, une backstory là, une signature typée ailleurs. Une fois cela compris, la documentation à jour se lit en cinq minutes. Chaque entrée y renvoie.`,
      links: [
        "Comparer les frameworks",
        "Construire un agent d'abord",
      ],
    },
  },
  {
    // LA CERTIFICATION · le produit distribuait des badges, des ceintures et
    // des diplômes sans avoir jamais dit comment ils s'obtiennent.
    id: 'certification',
    chip: 'Studio belts and diploma',
    answer:
      `This is about the agent studio at /build, not about your learner grade (the belt shown as your profile icon, which comes from the dojos you finished). In the studio, steps make badges, badges and finished agents move your studio belt, and the ${COURSE_COUNT} courses together make the diploma. The rules are the same for everyone and nothing is given for showing up. ` +
      'A STEP is ticked when you have MADE the thing it produces, not when you have read about it. Nothing checks up on you, and that is the point: a progress bar you can cheat tells you nothing. ' +
      'A BADGE is never given for a step. It is given for a path taken end to end, which means you have one shape of problem you can actually handle. ' +
      `A BELT counts FINISHED agents, never steps: starting four paths and finishing none moves nothing at all. There are ${GRADE_COUNT} of them, from white to black, and the black one asks for all ${USE_CASE_COUNT}. ` +
      'The DIPLOMA asks for all three courses in full. It reads "certified DojoBuro", which means certified by us and by nobody else: it is not an industry qualification, no employer has heard of it, and we would rather say that here than let you find out later. Everything is kept in your browser, nobody sells it and nobody verifies it.',
    links: [
      { label: 'See how it works', href: '/build#certification' },
      { label: 'Your progress', href: '/build' },
    ],
    follow: ['build', 'profile'],
    keywords: ['badge', 'badges', 'studio belt', 'studio belts', 'ceinture du studio', 'ceintures du studio', 'agent belt', 'diploma', 'diplôme', 'certification', 'certified', 'certifié', 'reward', 'récompense'],
    fr: {
      chip: "Ceintures du studio et diplôme",
      answer:
        `Ce sujet concerne le studio d'agents, sur /build, et non votre grade d'élève (la ceinture affichée comme icône de profil, qui découle des dojos que vous avez terminés). Dans le studio, les étapes donnent les insignes, les insignes et les agents terminés font progresser votre ceinture, et les ${COURSE_COUNT} cours réunis donnent le diplôme. Les règles sont identiques pour tous, et rien ne s'obtient par la seule présence. Une ÉTAPE est validée lorsque vous avez PRODUIT ce qu'elle demande, et non lorsque vous avez lu à son sujet. Aucun contrôle n'est exercé, et c'est précisément l'intérêt : une barre de progression que l'on peut falsifier n'enseigne rien. Un INSIGNE n'est jamais attribué pour une étape. Il récompense un parcours mené de bout en bout, ce qui signifie que vous savez traiter un type de problème. Une CEINTURE compte les agents TERMINÉS, jamais les étapes : commencer quatre parcours sans en achever aucun ne fait rien progresser. Il en existe ${GRADE_COUNT}, de la blanche à la noire, et la noire exige les ${USE_CASE_COUNT}. Le DIPLÔME exige l'intégralité des trois cours. Il porte la mention « certifié DojoBuro », ce qui signifie certifié par nous et par personne d'autre : il ne s'agit pas d'une qualification reconnue par une branche professionnelle, aucun employeur n'en a connaissance, et nous préférons vous le dire ici plutôt que vous le laisser découvrir plus tard. Tout est conservé dans votre navigateur ; personne ne le vend et personne ne le vérifie.`,
      links: [
        "Voir le fonctionnement",
        "Votre progression",
      ],
    },
  },
  {
    id: 'academy',
    chip: 'Dojo Academy',
    answer:
      `The Dojo Academy is our free course on how all of this actually works · ${ACADEMY_LESSONS} lessons across ${ACADEMY_TRACKS} tracks, about ${ACADEMY_HOURS} hours in total, and it starts from absolutely zero. It assumes you have never heard the words "agent", "vibe coding", "IDE" or "coding agent", and explains each one in plain language the moment it comes up. Every lesson is short (5 to 8 minutes), has an animation beside it showing the thing being explained actually happening, and ends with a question to check you got it plus one thing to go and do. Nothing is gated and no account is needed · your progress is remembered in this browser. The five tracks: 1) START HERE · what an agent is, why a team beats one assistant, your first project, and reading the work it produced. 2) THE LANDSCAPE, PLAINLY · vibe coding, chatbots vs IDEs vs coding agents vs an agent workspace, how to write a brief instead of a wish, and what everything costs. 3) YOUR TEAMMATES · the eight plain-English fields that define a teammate, how to edit one so every future run improves, choosing their apps, and shaping the crew. 4) BUILD A SYSTEM · what a loop is, designing your own plan backwards from the artefact, chaining several teams together, and finding the step that broke. 5) GO LIVE · connecting a real app safely, the review checklist before you ship, the seven mistakes everyone makes, and a 30-day plan. If you are new, start at lesson one · it is the fastest way to stop guessing.`,
    links: [
      { label: 'Open the Academy', href: '/academy' },
      { label: 'Start lesson 1', href: '/academy/start-here/what-is-an-agent' },
    ],
    follow: ['build', 'training', 'budget'],
    keywords: ['academy', 'académie', 'beginner', 'débutant', 'vibe coding', 'claude code', 'what is an agent', "c'est quoi un agent", "qu'est-ce qu'un agent", 'coding agent'],
    fr: {
      chip: "L'académie du dojo",
      answer:
        `L'académie du dojo est notre cours gratuit consacré au fonctionnement réel de tout cela · ${ACADEMY_LESSONS} leçons réparties sur ${ACADEMY_TRACKS} pistes, environ ${ACADEMY_HOURS} heures au total, et le cours part véritablement de zéro. Il ne suppose aucune connaissance préalable des termes « agent », « vibe coding », « éditeur de code » ou « agent développeur », et explique chacun en langage clair dès qu'il apparaît. Chaque leçon est courte (5 à 8 minutes), s'accompagne d'une animation qui illustre la notion expliquée, et se conclut par une question de vérification ainsi qu'un exercice à réaliser. Aucun contenu n'est verrouillé et aucun compte n'est nécessaire · votre progression est enregistrée dans ce navigateur. Les cinq pistes : 1) COMMENCER ICI · ce qu'est un agent, pourquoi une équipe surpasse un assistant isolé, votre premier projet, et la lecture du travail produit. 2) LE PAYSAGE, SANS JARGON · le vibe coding, la comparaison entre agents conversationnels, éditeurs de code, agents développeurs et atelier d'agents, la rédaction d'un brief plutôt que d'un souhait, et le coût de chaque option. 3) VOS COÉQUIPIERS · les huit champs rédigés en langage clair qui définissent un coéquipier, la manière d'en modifier un pour améliorer toutes les exécutions futures, le choix de ses applications, et la composition de l'équipe. 4) CONSTRUIRE UN SYSTÈME · ce qu'est une boucle, la conception d'un plan à rebours à partir de l'objet produit, l'enchaînement de plusieurs équipes, et l'identification de l'étape défaillante. 5) PASSER EN PRODUCTION · connecter une application réelle en toute sécurité, la liste de vérification avant livraison, les sept erreurs les plus courantes, et un plan sur trente jours. Si vous débutez, commencez par la leçon une · c'est le moyen le plus rapide de cesser de deviner.`,
      links: [
        "Ouvrir l'académie",
        "Commencer la leçon 1",
      ],
    },
  },
  {
    // LES APPLICATIONS · la page /guide existe toujours et documente chaque
    // connecteur. Ce sujet décrivait l'ancien geste (brancher une application
    // à un coéquipier depuis son bureau), qui n'est plus dans la navigation.
    id: 'tools',
    walk: 'apps',
    chip: 'Connect real tools',
    answer:
      'The app setup guide at /guide covers 40+ apps · Notion, GitHub, Gmail, Google Drive, Calendar & Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 and more. For each one it explains how an agent reaches the app: you approve access once on the app\'s own screen (OAuth), the access is held on the server rather than in the browser, and the agent works inside the app through MCP, the standard that lets an agent use a tool. Every app has its own step-by-step page · name the app and I will link it.',
    links: [
      { label: 'Set up each app · step by step', href: '/guide', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['setup', 'guide', 'frameworks'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'oauth', 'github', 'slack', 'notion', 'gmail', 'jira', 'hubspot', 'figma', 'api', 'apps', 'connecteur', 'connector', 'brancher'],
    fr: {
      chip: 'Connecter de vrais outils',
      answer:
        `Le guide de branchement, à l'adresse /guide, couvre plus de 40 applications · Notion, GitHub, Gmail, Google Drive, Agenda et Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 et d'autres. Pour chacune, il explique comment un agent accède à l'application : vous donnez votre accord une fois sur l'écran de l'application elle-même (OAuth), l'accès est conservé sur le serveur plutôt que dans le navigateur, et l'agent travaille dans l'application grâce à MCP, le standard qui permet à un agent d'utiliser un outil. Chaque application dispose de sa propre page détaillée · indiquez son nom et je vous y dirigerai.`,
      links: [
        'Configurer chaque application, étape par étape',
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'setup',
    walk: 'apps',
    chip: 'How to connect an app',
    answer:
      'Connecting an app is set up once per app by whoever runs the deployment: 1) create an OAuth app in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…) and set the redirect URI to https://YOUR-SITE/api/connect; 2) copy the client id + secret into env as <APP>_CLIENT_ID and <APP>_CLIENT_SECRET (Google apps share GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET); 3) apps WITH a first-party MCP server (Notion, GitHub, Linear, Stripe) work right away; apps WITHOUT one (Gmail, Drive, Calendar, Slack…) also need <APP>_MCP_URL pointed at a hosted MCP hub (Composio, Zapier, Pipedream). PKCE apps (Airtable, X, Canva) are automatic. Once the env is set, the tool shows a Connect button instead of a "set up" link, and connecting is one click. Every app also has its own step-by-step page in the app setup guide (scopes, exact env vars, gotchas) · just name the app and I will link it.',
    links: [
      { label: 'Step-by-step setup for every app', href: '/guide', external: true },
      { label: 'MCP hub (Composio)', href: 'https://composio.dev', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'guide', 'security'],
    keywords: ['setup', 'set up', 'client id', 'client secret', 'oauth app', 'redirect', 'env', 'configure', 'composio', 'zapier', 'pipedream', 'mcp url', 'mcp_url', 'hub', 'how to connect', 'create app', 'pkce', 'credentials'],
    fr: {
      chip: 'Connecter une application',
      answer:
        `Le branchement d'une application se configure une seule fois par application, par la personne qui gère le déploiement : 1) créez une application OAuth dans la console du fournisseur (intégrations Notion, applications OAuth GitHub, identifiants Google Cloud…) et définissez l'adresse de redirection sur https://VOTRE-SITE/api/connect ; 2) copiez l'identifiant et le secret client dans l'environnement, sous <APP>_CLIENT_ID et <APP>_CLIENT_SECRET (les applications Google partagent GOOGLE_CLIENT_ID et GOOGLE_CLIENT_SECRET) ; 3) les applications dotées de leur propre serveur MCP (Notion, GitHub, Linear, Stripe) fonctionnent immédiatement ; celles qui n'en ont pas (Gmail, Drive, Agenda, Slack…) nécessitent en outre une variable <APP>_MCP_URL pointant vers un hub MCP hébergé (Composio, Zapier, Pipedream). Les applications en PKCE (Airtable, X, Canva) sont configurées automatiquement. Une fois l'environnement configuré, l'outil affiche un bouton Brancher au lieu d'un lien « à régler », et le branchement ne demande qu'un clic. Chaque application dispose aussi de sa page détaillée dans le guide de branchement (permissions, variables exactes, pièges) · indiquez le nom de l'application et je vous y dirigerai.`,
      links: [
        'Configuration détaillée de chaque application',
        'Hub MCP (Composio)',
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'guide',
    walk: 'overview',
    chip: 'App setup guide',
    answer:
      'The app setup guide, at /guide, is the manual for connecting agents to real apps. It covers how connecting works end to end, how to configure it, how to use it and see the results, how to stay safe and keep a budget in check, running things locally or in the cloud, linking your own external agents, and a directory with a dedicated step-by-step page for every app. Its sections carry a "How to?" button that plays an animated walkthrough full screen.',
    links: [
      { label: 'Open the app setup guide', href: '/guide', external: true },
      { label: 'Where to run an agent', href: '/frameworks' },
    ],
    follow: ['setup', 'tools', 'frameworks'],
    keywords: ['guide', 'dojo guide', 'setup guide', 'guide de branchement', 'manual', 'manuel', 'walkthrough', 'visite guidée', 'tutorial', 'tuto'],
    fr: {
      chip: 'Le guide de branchement',
      answer:
        `Le guide de branchement, à l'adresse /guide, est le manuel de connexion des agents à des applications réelles. Il présente le fonctionnement complet du branchement, sa configuration, son utilisation et la consultation des résultats, les règles de sécurité et la maîtrise du budget, l'exécution en local ou dans le cloud, la liaison de vos propres agents externes, ainsi qu'un annuaire proposant une page détaillée pour chaque application. Ses sections comportent un bouton « Comment faire ? » qui lance une visite animée en plein écran.`,
      links: [
        'Ouvrir le guide de branchement',
        'Où exécuter un agent',
      ],
    },
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'There is no crypto here: no wallet, no seed, no coins. Payment happens on a Stripe payment page, so your card details are typed there and not on our pages. There is no password: signing in is optional and uses your email or your Google account. Without signing in, your progress, your badges, what you unlocked and your Dojoburo save live in this browser, and the Profile page says so plainly. The site ships with a strict Content-Security-Policy and security headers. Treat this browser like your own device, and if you share it, the Settings tab of your profile has a button to erase everything kept in this browser.',
    links: [
      { label: 'Where your progress lives', href: '/profil' },
      { label: 'See the prices', href: '/tarifs' },
    ],
    follow: ['signin', 'buy', 'profile'],
    keywords: ['security', 'secure', 'safe', 'sécurité', 'privacy', 'vie privée', 'confidentialité', 'hack', 'scam', 'arnaque', 'phishing', 'data', 'données', 'csp', 'protect', 'is it safe', 'safety', 'wallet', 'portefeuille', 'crypto', 'seed', 'metamask', 'xaman'],
    fr: {
      chip: 'Sécurité et vie privée',
      answer:
        `Aucune cryptomonnaie n'est utilisée ici : ni portefeuille, ni phrase secrète, ni cryptoactifs. Le paiement s'effectue sur une page de paiement Stripe ; vos coordonnées bancaires y sont donc saisies, et non sur nos pages. Il n'existe aucun mot de passe : la connexion est facultative et se fait avec votre adresse e-mail ou votre compte Google. Sans connexion, votre progression, vos badges, ce que vous avez débloqué et votre partie de Dojoburo sont conservés dans ce navigateur, comme l'indique clairement la page Profil. Le site applique une politique de sécurité du contenu stricte et des en-têtes de sécurité. Considérez ce navigateur comme votre propre appareil ; si vous le partagez, l'onglet Paramètres de votre profil propose un bouton pour effacer tout ce qui est conservé dans ce navigateur.`,
      links: [
        'Où votre progression est enregistrée',
        'Voir les tarifs',
      ],
    },
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      'A few things usually explain it. A DOJO IS LOCKED: the AI weekend opens with your email, the first three lessons of every training are open to everyone, and the rest comes with the training it belongs to, on /tarifs. YOU PAID BUT NOTHING OPENED: the training opens on the thank-you page once our server confirms the payment. If that page found no paid order, open the link from your payment confirmation again; if it could not check, try again in a minute, nothing is lost. YOUR PROGRESS OR YOUR GAME IS GONE: without signing in, both live in this browser only, so another browser, another device, a private window or cleared site data starts from zero. THE 3D DOJO STAYS BLANK: your browser may be blocking WebGL, so try another browser or switch on hardware acceleration.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['buy', 'signin', 'pricing'],
    keywords: ['bug', 'broken', 'error', 'erreur', 'not working', 'marche pas', 'stuck', 'bloqué', 'blank', 'vide', 'fail', 'problem', 'problème', 'issue', 'help', 'aide', 'webgl', 'refresh', 'locked', 'verrouillé', 'fermé', 'lost', 'perdu', 'disappeared', 'disparu'],
    fr: {
      chip: 'Dépannage',
      answer:
        `Quelques causes expliquent la plupart des situations. UN DOJO EST FERMÉ : le week-end de l'IA s'ouvre avec votre adresse e-mail, les trois premières leçons de chaque formation sont ouvertes à tous, et le reste est inclus dans la formation correspondante, sur /tarifs. VOUS AVEZ PAYÉ MAIS RIEN NE S'EST OUVERT : la formation s'ouvre sur la page de remerciement, une fois que notre serveur a confirmé le paiement. Si cette page n'a trouvé aucune commande payée, rouvrez le lien de votre confirmation de paiement ; si elle n'a pas pu effectuer la vérification, réessayez dans une minute, rien n'est perdu. VOTRE PROGRESSION OU VOTRE PARTIE A DISPARU : sans connexion, toutes deux sont conservées uniquement dans ce navigateur ; un autre navigateur, un autre appareil, une fenêtre de navigation privée ou des données effacées repartent donc de zéro. LE DOJO EN TROIS DIMENSIONS RESTE VIDE : votre navigateur bloque peut-être WebGL ; essayez un autre navigateur ou activez l'accélération matérielle.`,
      links: [
        'Voir les tarifs',
        'Votre progression',
      ],
    },
  },
]

/** Le sujet dans la langue demandée · un seul chemin, comme partout ailleurs.
 *
 *  Les MOTS-CLÉS ne sont pas traduits, et c'est voulu : ils contiennent déjà
 *  les deux langues, parce qu'on tape « ceinture » aussi bien que « belt ».
 *  Les dédoubler par langue casserait la reconnaissance d'une question posée
 *  en anglais par un lecteur qui lit la page en français. */
export function topicIn(t: KBTopic, lang: Lang): KBTopic {
  if (lang !== 'fr' || !t.fr) return t
  return {
    ...t,
    chip: t.fr.chip,
    answer: t.fr.answer,
    links: t.links?.map((l, i) => ({ ...l, label: t.fr!.links?.[i] ?? l.label })),
  }
}

export const TOPIC_BY_ID: Record<string, KBTopic> = Object.fromEntries(KB.map((t) => [t.id, t]))

// Aliases the way people actually name apps in chat, mapped to a connector id.
const CONNECTOR_ALIASES: Record<string, string> = {
  'google drive': 'gdrive', drive: 'gdrive', 'google calendar': 'gcal', calendar: 'gcal',
  'google classroom': 'gclassroom', classroom: 'gclassroom', gsheet: 'gdrive', sheets: 'gdrive',
  twitter: 'twitter', x: 'twitter', 'whatsapp business': 'whatsapp', qb: 'quickbooks',
}

/** If the user names a specific app, return its connector so the bot can deep-link
 *  to that connector's dedicated /guide/<id> setup page. */
export function matchConnector(text: string): Connector | null {
  const q = text.toLowerCase()
  // longest alias first so "google drive" beats a bare "google"
  const aliases = Object.keys(CONNECTOR_ALIASES).sort((a, b) => b.length - a.length)
  for (const a of aliases) if (q.includes(a)) return CONNECTORS.find((c) => c.id === CONNECTOR_ALIASES[a]) ?? null
  let best: Connector | null = null
  for (const c of CONNECTORS) {
    const label = c.label.toLowerCase()
    if (q.includes(label) || q.includes(c.id.toLowerCase())) {
      if (!best || label.length > best.label.length) best = c
    }
  }
  return best
}

/** A ready-made chat answer that points to a connector's dedicated setup page.
 *
 *  Le BLURB du connecteur reste dans sa langue d'origine · il vit dans
 *  data/connectors, qui n'est pas traduit, et le recopier ici en aurait fait
 *  une deuxième version capable de diverger. La phrase autour, elle, suit la
 *  langue lue. */
export function connectorReply(c: Connector, lang: Lang = 'en'): { text: string; links: KBLink[] } {
  if (lang === 'fr') {
    return {
      text: `${c.label} : ${c.blurb} Le branchement ne demande qu'un clic une fois la configuration effectuée par l'exploitant. Voici la page de configuration complète, étape par étape, pour ${c.label}.`,
      links: [
        { label: `Configurer ${c.label}, étape par étape`, href: `/guide/${c.id}`, external: true },
        { label: `Ouvrir la console ${c.provider}`, href: c.docsUrl, external: true },
        { label: 'Tous les connecteurs (guide du dojo)', href: '/guide', external: true },
      ],
    }
  }
  return {
    text: `${c.label}: ${c.blurb} Connecting is one click once the operator has set it up. Here is the full step-by-step setup page for ${c.label}.`,
    links: [
      { label: `Set up ${c.label} · step by step`, href: `/guide/${c.id}`, external: true },
      { label: `Open the ${c.provider} console`, href: c.docsUrl, external: true },
      { label: 'All connectors (Dojo Guide)', href: '/guide', external: true },
    ],
  }
}

/** Cheap keyword scorer so the bot can answer offline before spending anything. */
export function matchTopic(text: string): KBTopic | null {
  const q = text.toLowerCase()
  let best: KBTopic | null = null
  let bestScore = 0
  for (const t of KB) {
    let score = 0
    for (const k of t.keywords) if (q.includes(k)) score += k.length >= 5 ? 2 : 1
    // UN SEUL MOT, ET C'EST LE BON · « prix » tapé seul valait un point (mot
    // court) et tombait sous le seuil : la question la plus directe du robot
    // partait dans la cascade payante. Une question qui EST un mot-clé compte.
    const bare = q.trim().replace(/[?!.\s]+$/, '')
    if (t.keywords.includes(bare)) score += 2
    // LES DEUX PASTILLES · quelqu'un qui lit la page en français tape le
    // libellé français qu'il a sous les yeux. Ne comparer que l'anglais
    // aurait fait tomber cette question dans la cascade payante.
    if (q.includes(t.chip.toLowerCase())) score += 3
    else if (t.fr && q.includes(t.fr.chip.toLowerCase())) score += 3
    if (score > bestScore) {
      bestScore = score
      best = t
    }
  }
  return bestScore >= 2 ? best : null
}

// LA PREMIÈRE PHRASE DU ROBOT VENDAIT L'ANCIEN PRODUIT · elle promettait
// « un atelier professionnel par coéquipier, qui tourne dans votre
// navigateur », c'est à dire l'outil de productivité d'avant le
// repositionnement, et c'est la toute première chose que lit un visiteur qui
// ouvre le robot. Elle dit maintenant ce que le site est : un centre de
// formation où l'on construit un agent et où l'on repart avec.
//
// ELLE A CHANGÉ UNE DEUXIÈME FOIS · le produit a maintenant une barre du bas
// à cinq boutons, dont un jeu. L'accueil la présente, parce que c'est la
// première question qu'on se pose : où est quoi.
//
// ET UNE TROISIÈME · l'onglet Training s'appelle IA Training (AI Training en
// anglais), et le profil porte le grade de l'élève et ses paramètres.
//
// ET UNE QUATRIÈME · « Efface l'ancien jeu » : trois boutons, et Dojoburo
// ouvre la carte des temples en pixel art.
export const GREETING = {
  en:
    "Hi, I'm Dojobot. Short version: the bottom bar has five buttons. Dojoburo opens the map, where each pixel-art building is a course, starting with the free AI weekend. Formations lists every course with its master and its price. AI news sums up the week's AI news every Monday. Community is where learners share and help each other, and Profile is where your grade, your progress and your settings live. No account is needed: without one, everything is kept in this browser. Ask me anything in your own words, or pick a topic below.",
  fr:
    "Bonjour, je suis Dojobot. En résumé, la barre du bas comporte cinq boutons. Dojoburo ouvre la carte, où chaque bâtiment en pixel art est une formation, à commencer par le week-end de l'IA, gratuit. Formations liste chaque formation avec son maître et son prix. Nouveautés résume chaque lundi les nouveautés IA de la semaine. Communauté est l'espace d'échange entre les élèves, et Profil présente votre grade, votre progression et vos paramètres. Aucun compte n'est nécessaire : sans compte, tout est conservé dans ce navigateur. Posez votre question dans vos propres termes, ou choisissez un sujet ci-dessous.",
}
