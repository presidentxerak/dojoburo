// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
//
// ---------------------------------------------------------------------------
// CE QUE CE ROBOT DÉCRIT, AUJOURD'HUI
//
// La barre du bas a quatre boutons : Dojoburo (le jeu, /dojoburo), IA Training
// (« AI Training » en anglais : les formations, l'ancien onglet « Training »,
// lui même l'ancien « Dojos », sur /), Clan et Profil. Le profil a des
// onglets (Progression, Badges, Formations, Compte, Paramètres), et l'élève
// porte un grade (une ceinture, game/ranks) qui devient son icône de profil.
// Les
// sujets de l'ancien produit (le bureau en trois dimensions, les ateliers, la
// société, les apparences, les profils métier, l'exécutant dans le nuage, la
// connexion par compte) ont été retirés : ils répondaient avec assurance sur
// des écrans que plus personne ne peut ouvrir depuis la navigation.
//
// TROIS IDENTIFIANTS ONT CHANGÉ DE SUJET, ET C'EST VOULU. 'studios', 'teams'
// et 'budget' sont nommés en dur dans components/SupportBot (les pastilles
// d'accueil). Les supprimer aurait laissé trois pastilles qui affichent un
// identifiant brut et ne répondent rien. Ils portent donc maintenant le jeu
// (on y dirige un studio d'IA), les spécialistes (l'équipe du studio) et les
// tokens (le budget du jour). Le jour où ces pastilles changent, les
// identifiants peuvent suivre.
//
// CE QUE CE ROBOT NE PROMET PAS · ni remboursement, ni facture, ni compte, ni
// accès sur plusieurs appareils. Rien de tout ça n'existe dans le code, et une
// promesse de robot de support est une promesse du produit.
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
// LES PRIX · quatre réponses de cette base les recopiaient à la main, ce qui en
// faisait une cinquième grille de prix capable de contredire les quatre autres.
// Elle l'a fait : elle vendait encore Founder à 29 $ et 2 000 tâches longtemps
// après que le produit ait cessé d'exécuter quoi que ce soit.
import { PATH_EUR, TRADE_EUR, BUNDLE_EUR, priceTag } from '../data/plans'

const GRADE_COUNT = GRADES.length

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
    // LE JEU · premier bouton de la barre du bas. L'identifiant reste
    // 'studios' parce que SupportBot le nomme dans ses pastilles d'accueil, et
    // c'est bien un studio qu'on y dirige · voir l'en-tête du fichier.
    id: 'studios',
    chip: 'The Dojoburo game',
    answer:
      `Dojoburo is the game, the first button of the bottom bar. You run an AI studio inside a dojo, with ${USE_CASE_COUNT} specialist agents and the master watching from the back. Clients walk in one after another and give you a brief. ` +
      'To play, open a waiting brief, pick one to four free specialists, and give each of them tokens. While you choose, a quality preview shows how well the job is likely to go, so you can change your pick before you launch. The tokens leave your budget the moment you launch, and that budget is limited for the day. ' +
      'Each day runs from 9:00 to 18:00 on the clock, and you can pause. The day has a revenue objective: meet it and you move on to the next day, miss it and you replay the same day, with no game over. A client left waiting too long walks out unhappy and your reputation drops. When you reach the objective, the tokens you did not spend pay you a frugality bonus at the end of the day. From day 2, one event per day shakes things up: a rush of clients, a token price spike, a viral day, a specialist out, or the master\'s advice. Between two days, the shop turns your revenue into upgrades, like a bigger token budget or a level for one of your specialists. Your progress is saved in this browser. ' +
      'It teaches what the training teaches: put the right specialist on the job, and give it the tokens the job needs, not more.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'See the trainings', href: '/' },
    ],
    follow: ['teams', 'budget', 'training'],
    keywords: ['dojoburo', 'game', 'jeu', 'jouer', 'play', 'simulation', 'startup', 'studio', 'brief', 'briefs', 'client', 'objective', 'objectif', 'revenue', "chiffre d'affaires", 'reputation', 'réputation', 'event', 'événement', 'shop', 'boutique', 'upgrade', 'amélioration', 'journée', 'game over', 'sensei', 'comment jouer', 'votre studio'],
    fr: {
      chip: 'Le jeu Dojoburo',
      answer:
        `Dojoburo est le jeu, accessible par le premier bouton de la barre du bas. Vous y dirigez un studio d'IA installé dans un dojo, avec ${USE_CASE_COUNT} agents spécialisés, sous le regard du maître placé au fond de la salle. Des clients se présentent l'un après l'autre et vous confient un brief. Pour jouer, ouvrez un brief en attente, choisissez de un à quatre spécialistes disponibles et attribuez des tokens à chacun. Pendant votre choix, un aperçu de la qualité indique les chances de réussite du travail, ce qui vous permet de modifier votre sélection avant de lancer. Les tokens sont prélevés sur votre budget au moment du lancement, et ce budget est limité pour la journée. Chaque journée s'étend de 9 h à 18 h sur l'horloge, et vous pouvez la mettre en pause. Elle comporte un objectif de chiffre d'affaires : si vous l'atteignez, vous passez au jour suivant ; sinon, vous rejouez la même journée, sans fin de partie. Un client qui attend trop longtemps repart mécontent, et votre réputation diminue. Lorsque vous atteignez l'objectif, les tokens non dépensés vous rapportent un bonus de frugalité en fin de journée. À partir du deuxième jour, un événement quotidien modifie les conditions : une affluence de clients, une flambée du prix des tokens, une journée virale, un spécialiste absent, ou le conseil du maître. Entre deux journées, la boutique convertit votre chiffre d'affaires en améliorations, comme un budget de tokens plus important ou un niveau supplémentaire pour l'un de vos spécialistes. Votre progression est enregistrée dans ce navigateur. Le jeu enseigne la même chose que la formation : affecter le bon spécialiste au bon travail, et lui attribuer les tokens dont ce travail a besoin, sans excès.`,
      links: [
        'Jouer à Dojoburo',
        'Voir les formations',
      ],
    },
  },
  {
    // LES SPÉCIALISTES DU JEU · l'identifiant 'teams' est gardé pour les
    // pastilles de SupportBot · voir l'en-tête du fichier.
    id: 'teams',
    chip: 'Pick the right specialists',
    answer:
      `Your studio has ${USE_CASE_COUNT} specialists, one per shape of problem taught in the course: a researcher, a writer, a responder, a coder, an analyst, a sorter, an extractor, a watcher, a planner, a tool builder, a growth experimenter and a conductor. Each brief says which skills it needs, and at what level. ` +
      'Put the right specialist on each need and the quality climbs. Put the wrong one and the need is simply not covered, however many tokens you give. The conductor can stand in for a missing skill, but only poorly: its real strength is coordinating two or more colleagues, which earns a bonus. ' +
      'Specialists gain experience with every job and level up, which makes them better and quicker. They also get tired, and a very tired specialist does weaker work, so let them rest. ' +
      'The quality preview updates while you choose: try a pick, read the preview, change it, then launch. After each job, a short tip explains why those specialists were the right ones. It is the course\'s first lesson in game form: every agent fails in its own way, so you pick the one built for the problem in front of you.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Build an agent', href: '/build' },
    ],
    follow: ['studios', 'budget', 'build'],
    keywords: ['specialist', 'specialists', 'spécialiste', 'spécialistes', 'which specialist', 'quel spécialiste', 'orchestrator', 'orchestrateur', 'conductor', "chef d'orchestre", 'fatigue', 'tired', 'fatigué', 'level up', 'quality', 'qualité', 'preview', 'aperçu', 'employee', 'employé', 'my team', 'mon équipe', 'right agent', 'bon agent', 'votre équipe'],
    fr: {
      chip: 'Choisir les bons spécialistes',
      answer:
        `Votre studio compte ${USE_CASE_COUNT} spécialistes, chacun associé à un type de problème enseigné dans le cours : le chercheur, le rédacteur, le répondant, le codeur, l'analyste, le trieur, l'extracteur, la vigie, le planificateur, l'outilleur, l'expérimentateur et le chef d'orchestre. Chaque brief précise les compétences requises et leur niveau. Si vous affectez le bon spécialiste à chaque besoin, la qualité augmente. Si vous affectez le mauvais, le besoin n'est tout simplement pas couvert, quel que soit le nombre de tokens attribués. Le chef d'orchestre peut suppléer une compétence manquante, mais imparfaitement : sa véritable force consiste à coordonner deux collègues ou davantage, ce qui rapporte un bonus. Les spécialistes gagnent de l'expérience à chaque travail et progressent en niveau, ce qui les rend plus compétents et plus rapides. Ils se fatiguent également, et un spécialiste très fatigué produit un travail de moindre qualité : accordez-leur donc du repos. L'aperçu de la qualité se met à jour pendant votre choix : essayez une composition, lisez l'aperçu, ajustez-la, puis lancez. Après chaque travail, une courte explication indique pourquoi ces spécialistes étaient les plus adaptés. C'est la première leçon du cours sous forme de jeu : chaque agent échoue à sa manière, c'est pourquoi vous choisissez celui qui est conçu pour le problème à traiter.`,
      links: [
        'Jouer à Dojoburo',
        'Construire un agent',
      ],
    },
  },
  {
    // LES TOKENS · l'identifiant 'budget' est gardé pour les pastilles de
    // SupportBot. Il remplace l'ancien sujet « tokens », qui décrivait un
    // sélecteur de modes dans l'en-tête d'un écran qui n'est plus dans la
    // navigation.
    id: 'budget',
    chip: 'Tokens and budget',
    answer:
      'A token is the unit a model reads, writes and bills: a small piece of a word. Every prompt you send and every answer you get costs tokens, which is why tokens are what an AI job really costs. ' +
      'In Dojoburo, tokens are your daily budget. Each brief needs a certain amount of tokens to be done well, and you hand them out to your specialists before you launch. Give too few and the quality drops fast. Give far more than the job needs and it barely gets better. Tokens handed to a specialist the brief does not need are mostly wasted. If you reach the objective, whatever is left at the end of the day comes back as a frugality bonus, in euros. On a price spike day, every token you hand out costs more from your budget. In the shop, a bigger budget, a prompt library and a cache all stretch your tokens further. ' +
      'The training teaches the same habit with real models, and the /frugality page shows where your tokens actually go in a conversation.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Where your tokens go', href: '/frugality' },
    ],
    follow: ['studios', 'teams', 'lessons'],
    keywords: ['token', 'tokens', 'jeton', 'jetons', 'budget', 'frugality', 'frugalité', 'sobriété', 'frugal', 'bonus', 'consumption', 'consommation', 'price spike', 'flambée', 'waste', 'gaspill', 'cache', 'prompt library', 'bibliothèque de prompts', 'vos tokens'],
    fr: {
      chip: 'Tokens et budget',
      answer:
        `Un token est l'unité qu'un modèle lit, écrit et facture : un petit fragment de mot. Chaque prompt que vous envoyez et chaque réponse que vous recevez consomment des tokens ; c'est pourquoi les tokens représentent le coût réel d'un travail d'IA. Dans Dojoburo, les tokens constituent votre budget quotidien. Chaque brief exige une certaine quantité de tokens pour être correctement traité, et vous les répartissez entre vos spécialistes avant le lancement. Si vous en attribuez trop peu, la qualité diminue rapidement. Si vous en attribuez beaucoup plus que nécessaire, elle ne s'améliore presque pas. Les tokens attribués à un spécialiste dont le brief n'a pas besoin sont en grande partie gaspillés. Si vous atteignez l'objectif, le solde restant en fin de journée vous revient sous forme de bonus de frugalité, en euros. Lors d'une journée de flambée des prix, chaque token attribué pèse davantage sur votre budget. Dans la boutique, un budget plus important, une bibliothèque de prompts et un cache permettent tous de mieux exploiter vos tokens. La formation enseigne la même habitude avec de vrais modèles, et la page /frugality montre où vont réellement vos tokens au cours d'une conversation.`,
      links: [
        'Jouer à Dojoburo',
        'Où vont vos tokens',
      ],
    },
  },
  {
    id: 'start',
    chip: 'Getting started',
    answer:
      'Everything starts from the bottom bar, which has four buttons. DOJOBURO is the game: you run an AI studio, clients bring briefs, and you spend a limited token budget on the right specialists. TRAINING is the courses (it used to be called Dojos): the free AI weekend, the full training and the trade trainings. CLAN is where disciples will show what they built with AI. There is no feed yet, and the page says so instead of faking one; for now it shows your level, your XP and your badges. PROFILE is your progress: level, badges, what you unlocked, the valley map, and where your data lives. ' +
      'Two good ways in: play a first day of Dojoburo, or open Training and start the free AI weekend. No account is needed, everything is kept in this browser. The XP at the top of the screen comes from the dojos you actually finished. The app has a single dark violet theme, so there is no light mode switch to look for.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['studios', 'training', 'signin'],
    keywords: ['start', 'begin', 'get started', 'commencer', 'démarrer', 'débuter', 'how does it work', 'comment ça marche', 'navigation', 'menu', 'bottom bar', 'barre du bas', 'onglet', 'tabs', 'dojos tab', 'onglet dojos', 'clan', 'where is', 'où est', 'dark mode', 'mode sombre', 'light mode', 'mode clair', 'theme', 'thème', 'comment cela fonctionne', 'par où commencer'],
    fr: {
      chip: 'Pour commencer',
      answer:
        `Tout commence par la barre du bas, qui comporte quatre boutons. DOJOBURO est le jeu : vous dirigez un studio d'IA, des clients vous apportent des briefs, et vous répartissez un budget de tokens limité entre les spécialistes appropriés. TRAINING regroupe les formations (l'onglet s'appelait auparavant Dojos) : le week-end de l'IA gratuit, la formation complète et les formations métier. CLAN est l'espace où les disciples présenteront ce qu'ils ont construit avec l'IA. Aucun fil n'existe encore, et la page l'indique plutôt que d'en simuler un ; elle affiche pour l'instant votre niveau, votre XP et vos badges. PROFIL présente votre progression : votre niveau, vos badges, ce que vous avez débloqué, la carte de la vallée, et l'emplacement de vos données. Deux points d'entrée sont recommandés : jouer une première journée de Dojoburo, ou ouvrir Training et commencer le week-end de l'IA gratuit. Aucun compte n'est nécessaire, tout est conservé dans ce navigateur. L'XP affichée en haut de l'écran provient des dojos que vous avez effectivement terminés. L'application ne comporte qu'un seul thème, sombre et violet ; il n'existe donc pas de bouton de mode clair.`,
      links: [
        'Jouer à Dojoburo',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LES FORMATIONS · l'onglet Training, qui s'appelait Dojos. Les nombres
    // viennent de data/packs : une formation qui grossit n'a pas à être
    // recopiée ici.
    id: 'training',
    chip: 'The trainings',
    answer:
      `Training is the second button of the bottom bar (it used to be called Dojos), and it holds ${PACK_COUNT} trainings. The AI weekend is free: ${FREE_LESSONS} short lessons, about ${FREE_MINUTES} minutes in total, and it asks for your email and nothing else. The full training is ${PATH_CITIES} dojo cities and ${PATH_DOJOS} dojos: prompting, the models, the assistants, agents, design and cost. Then ${TRADE_COUNT} trade trainings, ${TRADE_CITIES} more cities each, written for one job: ${tradeNames('en')}. ` +
      'You cross the cities at your own pace and in the order you like, and a master waits for you in each one. Every dojo is a short lesson that ends with a badge and some XP, and you can replay any dojo whenever you want. The first dojo of every city opens once you have given your email, so you can see how it teaches before paying.',
    links: [
      { label: 'Open Training', href: '/' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['lessons', 'pricing', 'profile'],
    keywords: ['training', 'trainings', 'formation', 'formations', 'course', 'courses', 'cours', 'parcours', 'dojo', 'dojos', 'city', 'cities', 'cité', 'cités', 'weekend', 'week-end', 'trade', 'métier', 'métiers', 'master', 'maître', 'curriculum', 'programme', 'un dojo', 'a dojo', 'dojo city', 'cité dojo', 'what can i learn', "qu'est-ce que j'apprends", 'que vais-je apprendre'],
    fr: {
      chip: 'Les formations',
      answer:
        `Training est le deuxième bouton de la barre du bas (il s'appelait auparavant Dojos), et il réunit ${PACK_COUNT} formations. Le week-end de l'IA est gratuit : ${FREE_LESSONS} leçons courtes, environ ${FREE_MINUTES} minutes au total, pour lesquelles seule votre adresse e-mail est demandée. La formation complète comprend ${PATH_CITIES} cités dojo et ${PATH_DOJOS} dojos : le prompt, les modèles, les assistants, les agents, le design et le coût. S'y ajoutent ${TRADE_COUNT} formations métier, comportant chacune ${TRADE_CITIES} cités supplémentaires, conçues pour un métier : ${tradeNames('fr')}. Vous parcourez les cités à votre rythme et dans l'ordre de votre choix, et un maître vous attend dans chacune. Chaque dojo est une leçon courte qui se conclut par un badge et de l'XP, et vous pouvez refaire n'importe quel dojo à tout moment. Le premier dojo de chaque cité s'ouvre dès que vous avez communiqué votre adresse, afin que vous puissiez apprécier la pédagogie avant de payer.`,
      links: [
        'Ouvrir Training',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LE FORMAT D'UNE LEÇON · voir data/enrich/types. Un dojo tenait en six
    // lignes ; il porte maintenant le mécanisme, un avant / après, un exercice
    // et trois questions.
    id: 'lessons',
    chip: 'How a lesson works',
    answer:
      'Every dojo is a short lesson of a few minutes, taught by its master, and it is built to make you do things, not just read. It opens with what you will learn and your mission. Then comes WHY IT WORKS: the mechanism in two or three short paragraphs, so you understand it instead of memorising a recipe. THE MOVES: a few concrete steps. BEFORE AND AFTER: a real prompt that went wrong, the same prompt fixed, and what changed. THE TRAP to dodge. YOUR TURN: an exercise to do in your own AI tool, with what you will have at the end, a prompt to copy (replace the parts in [BRACKETS] with your own case), a checklist to check your result yourself, and a bonus to go further. ' +
      'Then three questions to check you really got it. When you are done, you grab the dojo\'s badge and its XP, and you can come back to any dojo whenever you want.',
    links: [
      { label: 'Try a free lesson', href: FREE_HREF },
      { label: 'Open Training', href: '/' },
    ],
    follow: ['training', 'pricing', 'profile'],
    keywords: ['lesson', 'lessons', 'leçon', 'leçons', 'exercise', 'exercice', 'exercices', 'why it works', 'pourquoi ça marche', 'before and after', 'avant / après', 'avant/après', 'copy the prompt', 'copier le prompt', 'prompt to copy', 'prompt à copier', 'checklist', 'quiz', 'three questions', 'trois questions', 'lesson format', 'format', 'pourquoi cela fonctionne', 'à vous de jouer', "déroulement d'une leçon"],
    fr: {
      chip: "Le déroulement d'une leçon",
      answer:
        `Chaque dojo est une leçon courte de quelques minutes, conduite par son maître, et conçue pour vous faire agir plutôt que simplement lire. Elle s'ouvre sur les objectifs d'apprentissage et votre mission. Vient ensuite POURQUOI CELA FONCTIONNE : le mécanisme exposé en deux ou trois courts paragraphes, afin que vous compreniez plutôt que de mémoriser une recette. LES ÉTAPES : quelques gestes concrets. AVANT / APRÈS : un prompt réel qui a échoué, le même prompt corrigé, et l'analyse de ce qui a changé. LE PIÈGE à éviter. À VOUS DE JOUER : un exercice à réaliser dans votre propre outil d'IA, avec le résultat attendu, un prompt à copier (remplacez les parties entre [CROCHETS] par votre propre cas), une checklist pour vérifier vous-même votre résultat, et un bonus pour approfondir. Enfin, trois questions permettent de vérifier que la notion est acquise. Une fois la leçon terminée, vous obtenez le badge du dojo et son XP, et vous pouvez revenir sur n'importe quel dojo à tout moment.`,
      links: [
        'Essayer une leçon gratuite',
        'Ouvrir Training',
      ],
    },
  },
  {
    // LES PRIX · lus dans data/plans. Le week-end remplace l'ancienne
    // « semaine de découverte » : même contenu, nouveau nom · voir data/packs.
    id: 'pricing',
    chip: 'Pricing',
    answer:
      `No subscription: you pay once, and nothing renews. The AI weekend is free: ${FREE_LESSONS} short lessons, and it asks for your email, no card. The full training is ${priceTag(PATH_EUR)}, paid once: every one of the ${PATH_CITIES} dojo cities, in the order you like, with the files and the updates. A trade training is ${priceTag(TRADE_EUR)} per trade, paid once too: ${TRADE_CITIES} more cities written for one job. It is best taken after the full training, because it does not explain the basics again. Both together come to ${priceTag(BUNDLE_EUR)}. ` +
      'Not sure yet? Once you have given your email, the first dojo of every city is free, so you can judge before paying. Everything is on the /tarifs page, and the training opens in this browser as soon as the payment is confirmed.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['buy', 'training', 'signin'],
    keywords: ['pricing', 'price', 'prices', 'tarif', 'tarifs', 'prix', 'cost', 'coût', 'how much', 'combien', 'expensive', 'cher', 'free', 'gratuit', 'subscription', 'abonnement', 'monthly', 'mensuel', 'per month', 'par mois', 'plans', 'formule', 'paid once', 'une fois', 'bundle', 'how much is', 'how much does', 'combien coûte', 'le prix', 'les prix', 'quel prix', 'formation complète', 'full training', 'combien cela coûte'],
    fr: {
      chip: 'Les tarifs',
      answer:
        `Aucun abonnement : vous payez une seule fois, et rien n'est reconduit. Le week-end de l'IA est gratuit : ${FREE_LESSONS} leçons courtes, pour lesquelles seule votre adresse e-mail est demandée, sans carte bancaire. La formation complète coûte ${priceTag(PATH_EUR)}, en un paiement unique : chacune des ${PATH_CITIES} cités dojo, dans l'ordre de votre choix, avec les fichiers et les mises à jour. Une formation métier coûte ${priceTag(TRADE_EUR)} par métier, également en un paiement unique : ${TRADE_CITIES} cités supplémentaires, conçues pour un métier. Il est préférable de la suivre après la formation complète, car elle ne reprend pas les bases. Les deux réunies coûtent ${priceTag(BUNDLE_EUR)}. Vous hésitez encore ? Dès que vous avez communiqué votre adresse, le premier dojo de chaque cité est gratuit, afin que vous puissiez juger avant de payer. Toutes les informations figurent sur la page /tarifs, et la formation s'ouvre dans ce navigateur dès que le paiement est confirmé.`,
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
      'Buying happens on the /tarifs page, without leaving the app. Choose the full training, or pick your trade and choose a trade training, then press Buy: you go to a Stripe payment page and pay once. When the payment is done you come back to a thank-you page, which asks our server whether the payment really went through. Only then does the training open, in this browser, with a button that takes you to its first dojo. If you cancel, you come back to the prices and nothing was charged. ' +
      'There is no account: your access and your progress are kept in this browser, so come back with the same one. If the thank-you page says it found no paid order and you just paid, open the link from your payment confirmation again. If it could not check, try again in a minute: nothing is lost.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['pricing', 'signin', 'troubleshoot'],
    keywords: ['buy', 'buying', 'acheter', 'achat', 'purchase', 'payment', 'paiement', 'pay', 'payer', 'stripe', 'card', 'carte bancaire', 'checkout', 'unlock', 'débloquer', 'merci', 'thank you page', 'after paying', 'après le paiement', 'cancel', 'annuler', 'charged', 'débité', 'acheter la formation', 'acheter une formation', 'buy the training', 'buy a training', "déroulement de l'achat", 'se déroule l\'achat'],
    fr: {
      chip: "Comment se déroule l'achat",
      answer:
        `L'achat s'effectue sur la page /tarifs, sans quitter l'application. Choisissez la formation complète, ou sélectionnez votre métier puis la formation métier correspondante, et appuyez sur Acheter : vous êtes dirigé vers une page de paiement Stripe où vous réglez en une seule fois. Une fois le paiement effectué, vous revenez sur une page de remerciement, qui vérifie auprès de notre serveur que le paiement a bien abouti. C'est seulement alors que la formation s'ouvre, dans ce navigateur, avec un bouton menant à son premier dojo. Si vous annulez, vous revenez aux tarifs et aucun montant n'est débité. Il n'existe pas de compte : votre accès et votre progression sont conservés dans ce navigateur ; revenez donc avec le même. Si la page de remerciement n'a trouvé aucune commande payée alors que vous venez de régler, rouvrez le lien de votre confirmation de paiement. Si elle n'a pas pu effectuer la vérification, réessayez dans une minute : rien n'est perdu.`,
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
      'No, but you can create one. Signing in takes your email address or your Google account, with no password, from the "Your account" card on the Profile page (or the small account button at the top right). Once you are signed in, your progress, your badges, your Dojoburo save and your clan pseudonym are saved online and synced across every device where you sign in, and a training you paid for follows your account too. ' +
      'Without signing in, everything is kept in this browser only: another browser, another device or a private window starts from zero, and clearing this browser\'s data erases what you finished here. The free AI weekend still asks for your email and nothing else. Signing out never erases what is in this browser.',
    links: [
      { label: 'Your progress', href: '/profil' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['profile', 'buy', 'security'],
    keywords: ['sign in', 'signin', 'log in', 'login', 'account', 'compte', 'register', 'sign up', 'signup', 'inscription', "s'inscrire", 'password', 'mot de passe', 'guest', 'invité', 'another device', 'autre appareil', 'another browser', 'autre navigateur', 'sync', 'synchro', 'save my progress', 'sauvegarde', 'do i need an account', 'faut-il un compte', 'votre compte', 'connexion', 'se connecter', 'sign out', 'log out', 'se déconnecter', 'déconnexion', 'sign in with google', 'connexion google', 'synchronisation', 'synchronised', 'synced', 'online save', 'sauvegarde en ligne'],
    fr: {
      chip: 'Faut-il un compte ?',
      answer:
        `Non, mais vous pouvez en créer un. La connexion se fait avec votre adresse e-mail ou votre compte Google, sans mot de passe, depuis la carte « Votre compte » de la page Profil (ou le petit bouton de compte en haut à droite). Une fois connecté, votre progression, vos badges, votre partie de Dojoburo et votre pseudonyme du clan sont sauvegardés en ligne et synchronisés sur chaque appareil où vous vous connectez ; une formation payée suit également votre compte. Sans connexion, tout est conservé uniquement dans ce navigateur : un autre navigateur, un autre appareil ou une fenêtre de navigation privée repart de zéro, et l'effacement des données de ce navigateur supprime ce que vous y avez terminé. Le week-end de l'IA gratuit demande toujours votre adresse e-mail, et rien d'autre. La déconnexion n'efface jamais ce qui se trouve dans ce navigateur.`,
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
      'Profile is the fourth button of the bottom bar, and it answers one question: where am I? It shows your level, your XP and how much of the path you have done, a gauge towards the next level, and a button to pick up where you left off. From there you open the valley map, full screen, to see every dojo city. You also see which trainings you have unlocked, your trophy case with every badge (earned or not), the trade you are working on, and your account: sign in with your email or Google to save your progress online and sync it across your devices, or stay signed out and keep it in this browser only. The card shows when the last sync happened, and signing out keeps your progress in the browser.',
    links: [
      { label: 'Open your profile', href: '/profil' },
      { label: 'The valley map', href: '/carte' },
    ],
    follow: ['signin', 'training', 'certification'],
    keywords: ['profile', 'profil', 'progress', 'progression', 'my progress', 'ma progression', 'saved', 'sauvegard', 'gardée', 'xp', 'experience', 'expérience', 'level', 'niveau', 'my badges', 'mes badges', 'trophy', 'vitrine', 'map', 'valley', 'vallée', 'erase', 'effacer', 'reset', 'unlocked', 'débloqué', 'votre progression', 'votre profil', 'enregistrée'],
    fr: {
      chip: 'Votre profil',
      answer:
        `Profil est le quatrième bouton de la barre du bas, et il répond à une seule question : où en suis-je ? Il affiche votre niveau, votre XP et la part du parcours accomplie, une jauge vers le niveau suivant, ainsi qu'un bouton pour reprendre là où vous vous étiez arrêté. De là, vous ouvrez la carte de la vallée en plein écran pour voir toutes les cités dojo. Vous y trouvez également les formations débloquées, votre vitrine de badges (obtenus ou non), le métier sur lequel vous travaillez, ainsi que votre compte : connectez-vous avec votre adresse e-mail ou Google pour sauvegarder votre progression en ligne et la synchroniser entre vos appareils, ou restez déconnecté pour la conserver uniquement dans ce navigateur. La carte indique l'heure de la dernière synchronisation, et la déconnexion conserve votre progression dans le navigateur.`,
      links: [
        'Ouvrir votre profil',
        'La carte de la vallée',
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
    chip: 'Badges and belts',
    answer:
      `Steps make badges, badges and finished agents move your belt, and the ${COURSE_COUNT} courses together make the diploma. The rules are the same for everyone and nothing is given for showing up. ` +
      'A STEP is ticked when you have MADE the thing it produces, not when you have read about it. Nothing checks up on you, and that is the point: a progress bar you can cheat tells you nothing. ' +
      'A BADGE is never given for a step. It is given for a path taken end to end, which means you have one shape of problem you can actually handle. ' +
      `A BELT counts FINISHED agents, never steps: starting four paths and finishing none moves nothing at all. There are ${GRADE_COUNT} of them, from white to black, and the black one asks for all ${USE_CASE_COUNT}. ` +
      'The DIPLOMA asks for all three courses in full. It reads "certified DojoBuro", which means certified by us and by nobody else: it is not an industry qualification, no employer has heard of it, and we would rather say that here than let you find out later. Everything is kept in your browser, nobody sells it and nobody verifies it.',
    links: [
      { label: 'See how it works', href: '/build#certification' },
      { label: 'Your progress', href: '/build' },
    ],
    follow: ['build', 'profile'],
    keywords: ['badge', 'badges', 'belt', 'belts', 'ceinture', 'grade', 'diploma', 'diplôme', 'certification', 'certified', 'certifié', 'reward', 'récompense'],
    fr: {
      chip: "Insignes et ceintures",
      answer:
        `Les étapes donnent les insignes, les insignes et les agents terminés font progresser votre ceinture, et les ${COURSE_COUNT} cours réunis donnent le diplôme. Les règles sont identiques pour tous, et rien ne s'obtient par la seule présence. Une ÉTAPE est validée lorsque vous avez PRODUIT ce qu'elle demande, et non lorsque vous avez lu à son sujet. Aucun contrôle n'est exercé, et c'est précisément l'intérêt : une barre de progression que l'on peut falsifier n'enseigne rien. Un INSIGNE n'est jamais attribué pour une étape. Il récompense un parcours mené de bout en bout, ce qui signifie que vous savez traiter un type de problème. Une CEINTURE compte les agents TERMINÉS, jamais les étapes : commencer quatre parcours sans en achever aucun ne fait rien progresser. Il en existe ${GRADE_COUNT}, de la blanche à la noire, et la noire exige les ${USE_CASE_COUNT}. Le DIPLÔME exige l'intégralité des trois cours. Il porte la mention « certifié DojoBuro », ce qui signifie certifié par nous et par personne d'autre : il ne s'agit pas d'une qualification reconnue par une branche professionnelle, aucun employeur n'en a connaissance, et nous préférons vous le dire ici plutôt que vous le laisser découvrir plus tard. Tout est conservé dans votre navigateur ; personne ne le vend et personne ne le vérifie.`,
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
      'There is no crypto here: no wallet, no seed, no coins. Payment happens on a Stripe payment page, so your card details are typed there and not on our pages. There is no account and no password: your progress, your badges, what you unlocked and your Dojoburo save live in this browser, and the Profile page says so plainly. The site ships with a strict Content-Security-Policy and security headers. Treat this browser like your own device, and if you share it, the Profile page has a button to erase everything.',
    links: [
      { label: 'Where your progress lives', href: '/profil' },
      { label: 'See the prices', href: '/tarifs' },
    ],
    follow: ['signin', 'buy', 'profile'],
    keywords: ['security', 'secure', 'safe', 'sécurité', 'privacy', 'vie privée', 'confidentialité', 'hack', 'scam', 'arnaque', 'phishing', 'data', 'données', 'csp', 'protect', 'is it safe', 'safety', 'wallet', 'portefeuille', 'crypto', 'seed', 'metamask', 'xaman'],
    fr: {
      chip: 'Sécurité et vie privée',
      answer:
        `Aucune cryptomonnaie n'est utilisée ici : ni portefeuille, ni phrase secrète, ni cryptoactifs. Le paiement s'effectue sur une page de paiement Stripe ; vos coordonnées bancaires y sont donc saisies, et non sur nos pages. Il n'existe ni compte ni mot de passe : votre progression, vos badges, ce que vous avez débloqué et votre partie de Dojoburo sont conservés dans ce navigateur, comme l'indique clairement la page Profil. Le site applique une politique de sécurité du contenu stricte et des en-têtes de sécurité. Considérez ce navigateur comme votre propre appareil ; si vous le partagez, la page Profil propose un bouton pour tout effacer.`,
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
      'A few things usually explain it. A DOJO IS LOCKED: the AI weekend opens with your email, the first dojo of every city opens once you have given it, and the rest comes with the training it belongs to, on /tarifs. YOU PAID BUT NOTHING OPENED: the training opens on the thank-you page once our server confirms the payment. If that page found no paid order, open the link from your payment confirmation again; if it could not check, try again in a minute, nothing is lost. YOUR PROGRESS OR YOUR GAME IS GONE: both live in this browser only, so another browser, another device, a private window or cleared site data starts from zero. THE 3D DOJO STAYS BLANK: your browser may be blocking WebGL, so try another browser or switch on hardware acceleration.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['buy', 'signin', 'pricing'],
    keywords: ['bug', 'broken', 'error', 'erreur', 'not working', 'marche pas', 'stuck', 'bloqué', 'blank', 'vide', 'fail', 'problem', 'problème', 'issue', 'help', 'aide', 'webgl', 'refresh', 'locked', 'verrouillé', 'fermé', 'lost', 'perdu', 'disappeared', 'disparu'],
    fr: {
      chip: 'Dépannage',
      answer:
        `Quelques causes expliquent la plupart des situations. UN DOJO EST FERMÉ : le week-end de l'IA s'ouvre avec votre adresse e-mail, le premier dojo de chaque cité s'ouvre dès que vous l'avez communiquée, et le reste est inclus dans la formation correspondante, sur /tarifs. VOUS AVEZ PAYÉ MAIS RIEN NE S'EST OUVERT : la formation s'ouvre sur la page de remerciement, une fois que notre serveur a confirmé le paiement. Si cette page n'a trouvé aucune commande payée, rouvrez le lien de votre confirmation de paiement ; si elle n'a pas pu effectuer la vérification, réessayez dans une minute, rien n'est perdu. VOTRE PROGRESSION OU VOTRE PARTIE A DISPARU : toutes deux sont conservées uniquement dans ce navigateur ; un autre navigateur, un autre appareil, une fenêtre de navigation privée ou des données effacées repartent donc de zéro. LE DOJO EN TROIS DIMENSIONS RESTE VIDE : votre navigateur bloque peut-être WebGL ; essayez un autre navigateur ou activez l'accélération matérielle.`,
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
// à quatre boutons, dont un jeu. L'accueil la présente, parce que c'est la
// première question qu'on se pose : où est quoi.
export const GREETING = {
  en:
    "Hi, I'm Dojobot. Short version: the bottom bar has four buttons. Dojoburo is the game, where you run an AI studio with a limited token budget. Training is the courses, starting with a free AI weekend. Clan is the community page, and Profile is where your progress lives. No account is needed, everything is kept in this browser. Ask me anything in your own words, or pick a topic below.",
  fr:
    "Bonjour, je suis Dojobot. En résumé, la barre du bas comporte quatre boutons. Dojoburo est le jeu, dans lequel vous dirigez un studio d'IA avec un budget de tokens limité. Training regroupe les formations, à commencer par un week-end de l'IA gratuit. Clan est la page de la communauté, et Profil présente votre progression. Aucun compte n'est nécessaire, tout est conservé dans ce navigateur. Posez votre question dans vos propres termes, ou choisissez un sujet ci-dessous.",
}
