// LE COURS « Storyboard pour le cinéma et la pub », PARTIE B · voir ./types et ./index.
//
// LA PARTIE A a posé le découpage (du script à la liste des plans) et la
// génération d'images cohérentes. Celle-ci applique tout cela à la publicité,
// puis mène la planche jusqu'à l'animatique, à la présentation et au tournage.
//
// LE FIL ROUGE DE CETTE PARTIE · « Veillée », la nouvelle infusion du soir de
// Maison Orée, une petite marque de tisanes entièrement fictive. Léa Morel,
// storyboardeuse indépendante (fictive elle aussi), reçoit le brief : un spot
// de 30 secondes, sa version de 15 et une déclinaison verticale pour les
// réseaux sociaux. Malik, un jeune père, couche sa fille Jade, retrouve enfin
// le calme et se prépare une tasse de Veillée. Chaque cours fait avancer ce
// même projet, du brief au dossier remis à l'équipe de tournage.
//
// CE QUI BOUGE N'EST PAS ÉCRIT EN DUR · les paramètres des outils d'image, les
// zones sûres des plateformes, les conditions d'utilisation et le droit
// applicable aux images générées évoluent : le cours décrit les principes et
// renvoie à la documentation ou à la source officielle, sans chiffre inventé.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

const M3 = 'sb-m3'
const M4 = 'sb-m4'

/* ================================================================== */
/* MODULE 3 · LE STORYBOARD PUBLICITAIRE                               */
/* ================================================================== */

const PUB: Level[] = [
  {
    id: 'sb-brief',
    master: 'analysis',
    minutes: 10,
    title: B('From client brief to a three-panel concept', 'Du brief client au concept en trois cases'),
    learn: B(
      'You will turn a client brief into a concept told in three panels: situation, turn, payoff, ready to be approved.',
      'Vous saurez transformer un brief client en concept raconté en trois cases : situation, bascule, résolution.',
    ),
    act: B('Extract the constraints of the Maison Orée brief, then sketch three concepts of three panels and pick one.',
      'Extrayez les contraintes du brief de Maison Orée, puis esquissez trois concepts en trois cases et retenez-en un.'),
    steps: [
      B('List what the brief fixes: product, target, single message, durations, formats, mandatory mentions.',
        'Listez ce que fixe le brief : produit, cible, message unique, durées, formats, mentions obligatoires.'),
      B('Ask an AI for three contrasting concepts, each told in three sentences: situation, turn, payoff.',
        'Demandez à une IA trois concepts contrastés, chacun en trois phrases : situation, bascule, résolution.'),
      B('Generate one rough image per panel, in the same loose sketch style for all three concepts.',
        'Générez une image brute par case, dans le même style de croquis léger pour les trois concepts.'),
      B('Check each concept against the single message, then present all three with a recommendation.',
        'Confrontez chaque concept au message unique, puis présentez les trois avec une recommandation.'),
    ],
    trap: B(
      'Polishing finished frames before the concept is approved: the client judges the rendering, not the idea, and a rejected concept wastes hours.',
      "Peaufiner des images finies avant que le concept soit validé : le client juge le rendu, pas l'idée, et un concept refusé coûte des heures.",
    ),
    quiz: {
      q: B('Your three panels are beautiful, but the client cannot say what the ad sells. What did you skip?',
        "Vos trois cases sont belles, mais le client ne sait pas dire ce que vend la pub. Qu'avez-vous sauté ?"),
      options: [
        B('A higher image resolution, so that details become readable', 'Une résolution plus haute, pour que les détails se lisent'),
        B('Checking each panel against the single message of the brief', 'La confrontation de chaque case au message unique du brief'),
        B('A fourth panel showing the brand logo in large letters', 'Une quatrième case qui montre le logo de la marque en grand'),
      ],
      answer: 1,
      why: B(
        'A concept exists to carry one message. If the panels do not lead to it, prettier images or a bigger logo will not fix it: the story itself must point to the promise.',
        "Un concept existe pour porter un message. Si les cases n'y mènent pas, de plus belles images ou un logo plus grand n'y changeront rien : c'est l'histoire qui doit conduire à la promesse.",
      ),
    },
    badge: B('Turns a brief into a story', "Fait d'un brief une histoire"),
  },
  {
    id: 'sb-spot',
    master: 'planning',
    minutes: 11,
    title: B('A 15 and 30-second spot, shot by shot', 'Un spot de 15 et 30 secondes plan par plan'),
    learn: B(
      'You will break a 30-second spot into timed shots and derive a 15-second cutdown that keeps the message.',
      'Vous saurez découper un spot de 30 secondes en plans minutés et en tirer une version de 15 qui garde le message.',
    ),
    act: B('Time the nine shots of the Veillée spot to 30 seconds, then build the 15-second version from five of them.',
      'Minutez les neuf plans du spot Veillée sur 30 secondes, puis construisez la version de 15 avec cinq d\'entre eux.'),
    steps: [
      B('Split the 30 seconds into three acts: setup, turn, product and signature, with a rough duration each.',
        'Partagez les 30 secondes en trois temps : installation, bascule, produit et signature, chacun avec sa durée.'),
      B('Write the shot list with a duration per shot, and check that the total is exactly 30 seconds.',
        'Rédigez la liste des plans avec une durée par plan, et vérifiez que le total fait exactement 30 secondes.'),
      B('Keep the last seconds for the packshot, the signature and any mandatory mention, readable on screen.',
        "Réservez les dernières secondes au packshot, à la signature et aux mentions obligatoires, lisibles à l'écran."),
      B('Build the 15 by keeping the shots that carry the turn and the product, not by speeding everything up.',
        'Construisez le 15 en gardant les plans qui portent la bascule et le produit, pas en accélérant tout.'),
    ],
    trap: B(
      'Cutting the 30 into a 15 by shortening every shot: nothing is readable anymore. A cutdown removes shots; it does not compress them.',
      'Tirer le 15 du 30 en raccourcissant chaque plan : plus rien ne se lit. Une version courte retire des plans, elle ne les comprime pas.',
    ),
    quiz: {
      q: B('Your 30-second shot list adds up to 34 seconds, and the packshot gets 2 seconds. What do you change first?',
        "Votre liste de plans du 30 secondes totalise 34 secondes, et le packshot n'en a que 2. Que changez-vous d'abord ?"),
      options: [
        B('You shorten every shot a little until the total reaches 30', "Vous raccourcissez chaque plan jusqu'à tomber sur 30"),
        B('You ask the client to accept a 34-second version of the spot', "Vous demandez au client d'accepter un spot de 34 secondes"),
        B('You remove a setup shot and give the packshot its full time', 'Vous retirez un plan d\'installation et rendez son temps au packshot'),
      ],
      answer: 2,
      why: B(
        'Ad slots have fixed durations, and the packshot is what the client pays for. Removing a setup shot keeps every remaining shot readable; trimming them all makes the spot rushed.',
        "Les écrans publicitaires ont des durées fixes, et le packshot est ce que le client achète. Retirer un plan d'installation garde chaque plan lisible ; les rogner tous précipite le spot.",
      ),
    },
    badge: B('Counts in seconds', 'Compte en secondes'),
  },
  {
    id: 'sb-vertical',
    master: 'growth',
    minutes: 10,
    title: B('Vertical formats for social media', 'Les formats verticaux pour les réseaux sociaux'),
    learn: B(
      'You will recompose a spot for 9:16 screens: an immediate hook, safe zones, subtitles for sound-off viewing.',
      'Vous saurez recomposer un spot en 9:16 : accroche immédiate, zones sûres, sous-titres pour un visionnage sans son.',
    ),
    act: B('Redraw the Veillée spot as a vertical version, with a new opening shot and the safe zones on each panel.',
      "Redessinez le spot Veillée en vertical, avec un nouveau plan d'ouverture et les zones sûres sur chaque case."),
    steps: [
      B('Draw a 9:16 panel template with the safe zones of your target platform, taken from its official ad specs.',
        "Tracez un gabarit de case 9:16 avec les zones sûres de la plateforme visée, d'après ses spécifications officielles."),
      B('Rewrite the opening: the first shot shows the subject or the tension at once, not an establishing view.',
        "Réécrivez l'ouverture : le premier plan montre tout de suite le sujet ou la tension, pas un plan d'ensemble."),
      B('Recompose each shot vertically: one subject per frame, closer scales, action in the middle third.',
        "Recomposez chaque plan à la verticale : un sujet par cadre, des valeurs plus serrées, l'action au tiers central."),
      B('Write on-screen text for each panel, so that the story still reads with the sound off.',
        "Écrivez un texte à l'écran pour chaque case, pour que l'histoire se lise encore sans le son."),
    ],
    trap: B(
      'Cropping the horizontal frames to 9:16: the subject falls outside, the product hides under the interface, and the slow opening loses the viewer.',
      "Recadrer les images horizontales en 9:16 : le sujet sort du cadre, le produit passe sous l'interface, et l'ouverture lente perd le spectateur.",
    ),
    quiz: {
      q: B('In your vertical panel, the Veillée pack sits at the bottom right of the frame. What is the risk?',
        'Dans votre case verticale, le paquet Veillée est placé en bas et à droite du cadre. Quel est le risque ?'),
      options: [
        B('The platform interface covers it: caption, account name, icons', "L'interface de la plateforme le recouvre : légende, compte, icônes"),
        B('The pack looks too small on a large television screen', 'Le paquet paraît trop petit sur un grand écran de télévision'),
        B('The image generator cannot draw objects near the edges', 'Le générateur ne sait pas dessiner les objets près des bords'),
      ],
      answer: 0,
      why: B(
        'Vertical feeds lay the account name, the caption and action icons over the video, mostly at the bottom and on the right. Each platform publishes its safe zones: keep product and text inside.',
        "Les fils verticaux posent sur la vidéo le nom du compte, la légende et les icônes, surtout en bas et à droite. Chaque plateforme publie ses zones sûres : gardez-y produit et texte.",
      ),
    },
    badge: B('Thinks vertical', 'Pense en vertical'),
  },
  {
    id: 'sb-annotate',
    master: 'writing',
    minutes: 10,
    title: B('Annotate each panel: action, dialogue, camera, duration', 'Annoter chaque case : action, dialogue, caméra, durée'),
    learn: B(
      'You will annotate each panel so that a crew can shoot from it: action, dialogue, sound, camera, transition, duration.',
      'Vous saurez annoter chaque case pour qu\'une équipe puisse tourner : action, dialogue, son, caméra, transition, durée.',
    ),
    act: B('Annotate the nine Veillée panels with one fixed template, then have an AI check them for gaps.',
      'Annotez les neuf cases Veillée sur un gabarit fixe, puis faites-les relire par une IA pour repérer les manques.'),
    steps: [
      B('Fix one template under every panel: number, shot scale, camera, action, dialogue or voice-over, sound, duration.',
        'Fixez un gabarit sous chaque case : numéro, valeur de plan, caméra, action, dialogue ou voix off, son, durée.'),
      B('Draw camera moves on the image itself: arrows for pans and tracking shots, a frame in the frame for a zoom.',
        "Dessinez les mouvements sur l'image : flèches pour panoramiques et travellings, cadre dans le cadre pour un zoom."),
      B('Write the action in the present tense, one visible action per sentence, with nothing the camera cannot film.',
        "Écrivez l'action au présent, une action visible par phrase, sans rien que la caméra ne puisse filmer."),
      B('Ask an AI to check each panel against the template and list what is missing or contradictory.',
        'Demandez à une IA de confronter chaque case au gabarit et de lister ce qui manque ou se contredit.'),
    ],
    trap: B(
      "Writing 'Malik feels relieved' under a panel: nobody can film a feeling. Write what we see: he closes his eyes, breathes out, his shoulders drop.",
      "Écrire « Malik se sent soulagé » sous une case : on ne filme pas un sentiment. Écrivez ce qu'on voit : il ferme les yeux, expire, ses épaules tombent.",
    ),
    quiz: {
      q: B('The director reads panel 070 and asks whether the camera moves. What did your annotation lack?',
        'Le réalisateur lit la case 070 et demande si la caméra bouge. Que manquait-il à votre annotation ?'),
      options: [
        B('The camera line: fixed, pan or tracking, with an arrow', 'La ligne caméra : fixe, panoramique ou travelling, avec flèche'),
        B("A longer description of the character's feelings", 'Une description plus longue des sentiments du personnage'),
        B('A second image of the same shot, in a warmer light', 'Une seconde image du même plan, dans une lumière plus chaude'),
      ],
      answer: 0,
      why: B(
        "Each panel answers the same questions, always in the same place. A camera line, even one that reads 'fixed shot', removes the doubt; without it, everyone on set reads the drawing differently.",
        'Chaque case répond aux mêmes questions, toujours au même endroit. Une ligne caméra, même quand elle indique « plan fixe », lève le doute ; sans elle, chacun lit le dessin à sa façon.',
      ),
    },
    badge: B('Writes what the camera sees', 'Écrit ce que voit la caméra'),
  },
]

const PUB_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M3, 'sb-brief')]: {
    why: [
      B("A client brief mixes facts and wishes: product, target, promise, budget, deadlines, formats, sometimes ideas from the client. The first job is to sort them. What is fixed (a 30-second spot and its 15, a mandatory packshot, a legal mention) frames the work; a wish such as 'something emotional' must become a single message that one sentence can carry.",
        "Un brief client mêle des faits et des envies : produit, cible, promesse, budget, délais, formats, parfois des idées du client. Le premier travail consiste à les trier. Ce qui est fixé (un spot de 30 secondes et sa version de 15, un packshot obligatoire, une mention légale) cadre le travail ; une envie comme « quelque chose d'émotionnel » doit devenir un message unique, qu'une phrase peut porter."),
      B("Three panels are the smallest unit of a story: a situation, a turn, a payoff. A concept that cannot be told in three panels will not survive fifteen seconds. Presenting three contrasting concepts rather than one lets the client choose a direction instead of answering yes or no; the contrast between them matters more than their number.",
        "Trois cases forment la plus petite unité d'une histoire : une situation, une bascule, une résolution. Un concept qui ne tient pas en trois cases ne survivra pas à quinze secondes. Présenter trois concepts contrastés plutôt qu'un seul permet au client de choisir une direction au lieu de répondre par oui ou par non ; le contraste entre eux compte plus que leur nombre."),
      B("AI speeds up both halves. A language model (Claude, ChatGPT, Le Chat by Mistral) reads the brief, extracts constraints and proposes concepts with their weak points; an image tool (Midjourney, Adobe Firefly, Ideogram, the image generation in ChatGPT) gives each panel a picture in minutes. Keep it rough on purpose: a sketch style keeps the discussion on the idea.",
        "L'IA accélère les deux moitiés. Un LLM (Claude, ChatGPT, Le Chat de Mistral) lit le brief, en extrait les contraintes et propose des concepts avec leurs faiblesses ; un outil d'image (Midjourney, Adobe Firefly, Ideogram, la génération d'images de ChatGPT) donne une image à chaque case en quelques minutes. Restez volontairement brut : un style croquis garde la discussion sur l'idée."),
    ],
    example: {
      context: B("Léa Morel, a freelance storyboarder, receives the brief of Maison Orée, a small fictional herbal tea brand launching Veillée, an evening infusion. Her first request gets ten generic ideas.",
        "Léa Morel, storyboardeuse indépendante, reçoit le brief de Maison Orée, petite marque fictive de tisanes qui lance Veillée, une infusion du soir. Sa première demande lui renvoie dix idées génériques."),
      before: B("Give me ideas for a herbal tea ad.",
        "Donne-moi des idées de pub pour une tisane."),
      after: B("You are a senior creative in an advertising agency. Here is the client brief: [BRIEF PASTED HERE].\n1. Extract in a table what is fixed (product, target, durations, formats, mandatory mentions) and what is only a wish.\n2. Write the single message in one sentence of fifteen words at most.\n3. Propose three contrasting concepts. For each: a title, then three panels (situation, turn, payoff) in one sentence each, describing only what we see.\n4. For each concept, give its main risk with this client.\nDo not write any slogan yet.",
        "Tu es un créatif confirmé dans une agence de publicité. Voici le brief du client : [BRIEF COLLÉ ICI].\n1. Extrais dans un tableau ce qui est fixé (produit, cible, durées, formats, mentions obligatoires) et ce qui n'est qu'une envie.\n2. Écris le message unique en une phrase de quinze mots au plus.\n3. Propose trois concepts contrastés. Pour chacun : un titre, puis trois cases (situation, bascule, résolution) en une phrase chacune, en ne décrivant que ce que l'on voit.\n4. Pour chaque concept, donne son principal risque avec ce client.\nN'écris encore aucun slogan."),
      takeaway: B("The second prompt separates facts from wishes, forces a single message and asks for visible panels plus their risks. Léa gets three concepts she can compare, not ten taglines.",
        "Le second prompt sépare les faits des envies, impose un message unique et demande des cases visibles avec leurs risques. Léa obtient trois concepts comparables, pas dix slogans."),
    },
    exercise: {
      goal: B("Three concepts of three panels each for a real or fictional brief, with one rough image per panel and a written recommendation.",
        "Trois concepts de trois cases chacun pour un brief réel ou fictif, avec une image brute par case et une recommandation écrite."),
      prompt: B("You are a senior creative. Here is the brief: [YOUR BRIEF, OR A FICTIONAL ONE: BRAND, PRODUCT, TARGET, DURATIONS, FORMATS].\nList what is fixed and what is a wish.\nWrite the single message in one sentence.\nPropose three contrasting concepts, each in three panels: situation, turn, payoff, describing only what we see.\nThen write, for each panel, an image prompt in this form: rough pencil storyboard sketch, [SHOT SCALE], [WHAT WE SEE], grey wash, no text, 16:9.\nEnd with the concept you recommend and why, in three lines.",
        "Tu es un créatif confirmé. Voici le brief : [VOTRE BRIEF, OU UN BRIEF FICTIF : MARQUE, PRODUIT, CIBLE, DURÉES, FORMATS].\nListe ce qui est fixé et ce qui relève de l'envie.\nÉcris le message unique en une phrase.\nPropose trois concepts contrastés, chacun en trois cases : situation, bascule, résolution, en ne décrivant que ce que l'on voit.\nÉcris ensuite, pour chaque case, un prompt d'image sous cette forme : rough pencil storyboard sketch, [VALEUR DE PLAN], [CE QUE L'ON VOIT], grey wash, no text, 16:9.\nTermine par le concept que tu recommandes et pourquoi, en trois lignes."),
      check: [
        B("The single message fits in one sentence and appears in every concept", "Le message unique tient en une phrase et se retrouve dans chaque concept"),
        B("Each panel describes something visible, not an intention", "Chaque case décrit quelque chose de visible, pas une intention"),
        B("The three concepts differ in their situation, not just in their tone", "Les trois concepts diffèrent par leur situation, pas seulement par leur registre"),
        B("All nine images share the same rough sketch style", "Les neuf images partagent le même style de croquis brut"),
      ],
      bonus: B("Cover the titles and show the three concepts to someone outside the project. Ask them to state the message of each in one sentence. A concept nobody can summarise is not ready, however good the images.",
        "Masquez les titres et montrez les trois concepts à une personne extérieure au projet. Demandez-lui d'énoncer le message de chacun en une phrase. Un concept que personne ne sait résumer n'est pas prêt, quelles que soient les images."),
    },
    more: [
      { q: B("The Maison Orée brief says 'we want something warm and authentic'. How do you treat that line?",
          "Le brief de Maison Orée dit « nous voulons quelque chose de chaleureux et d'authentique ». Comment traitez-vous cette ligne ?"),
        options: [
          B("As a fixed constraint, at the same level as the 30-second duration", "Comme une contrainte fixe, au même rang que la durée de 30 secondes"),
          B("As a wish to translate into a visible situation and a single message", "Comme une envie à traduire en situation visible et en message unique"),
          B("As a detail to ignore, since only durations and formats really count", "Comme un détail à ignorer, seuls la durée et les formats comptent"),
        ],
        answer: 1,
        why: B("Adjectives describe a feeling the client hopes for. They are not ignored, but they cannot be filmed as such: they become a concrete situation (a quiet kitchen at night, a shared mug) that the panels show.",
          "Les adjectifs décrivent un ressenti espéré par le client. On ne les ignore pas, mais on ne les filme pas tels quels : ils deviennent une situation concrète (une cuisine calme le soir, une tasse partagée) que les cases montrent.") },
      { q: B("Why generate the concept panels in a deliberately rough sketch style?",
          "Pourquoi générer les cases du concept dans un style de croquis volontairement brut ?"),
        options: [
          B("Because image tools cannot yet produce finished frames quickly", "Parce que les outils d'image ne savent pas encore produire d'images finies"),
          B("Because a rough style is cheaper in credits than a realistic one", "Parce qu'un style brut coûte moins de crédits qu'un style réaliste"),
          B("To keep the client judging the idea rather than the rendering", "Pour que le client juge l'idée plutôt que le rendu"),
        ],
        answer: 2,
        why: B("A polished image invites comments on faces, colours and props. At the concept stage, the question is whether the story carries the message; a sketch keeps everyone on that question.",
          "Une image léchée appelle des remarques sur les visages, les couleurs et les accessoires. Au stade du concept, la question est de savoir si l'histoire porte le message ; un croquis garde tout le monde sur cette question.") },
    ],
  },

  [enrichKey(M3, 'sb-spot')]: {
    why: [
      B("A spot is sold by the second. Broadcasters and platforms sell fixed durations, so a 30-second spot must last exactly 30 seconds, packshot included. This changes how you storyboard: each panel carries a duration from the start, and the shot list is checked like a budget, line by line, until the total is exact.",
        "Un spot se vend à la seconde. Diffuseurs et plateformes vendent des durées fixes : un spot de 30 secondes doit durer exactement 30 secondes, packshot compris. Cela change la manière de storyboarder : chaque case porte une durée dès le départ, et la liste des plans se vérifie comme un budget, ligne par ligne, jusqu'à ce que le total soit exact."),
      B("Most spots follow three movements: a setup that installs the situation, a turn where the product enters, and a payoff with the packshot and the signature. The end belongs to the brand: the pack, the name and any mandatory mention must stay on screen long enough to be read. The exact legal mentions depend on the product and the country; the client's legal team or the official texts decide them, not the storyboarder.",
        "La plupart des spots suivent trois mouvements : une installation qui pose la situation, une bascule où le produit entre, et une résolution avec le packshot et la signature. La fin appartient à la marque : le paquet, le nom et les mentions obligatoires restent assez longtemps à l'écran pour être lus. Les mentions exactes dépendent du produit et du pays ; le service juridique du client ou les textes officiels les fixent, pas le storyboarder."),
      B("A 15-second version is not a faster 30. It is a choice: which shots carry the turn and the product? Those stay, at the same duration; the others go. Storyboarding both versions together, with the 15 marked inside the 30, avoids shooting a spot that cannot be cut down.",
        "Une version de 15 secondes n'est pas un 30 accéléré. C'est un choix : quels plans portent la bascule et le produit ? Ceux-là restent, à la même durée ; les autres disparaissent. Storyboarder les deux versions ensemble, le 15 repéré à l'intérieur du 30, évite de tourner un spot impossible à raccourcir."),
    ],
    example: {
      context: B("Léa has her approved concept for Veillée: Malik puts his daughter Jade to bed, then finds a quiet moment with the tea. She asks an AI for a shot list.",
        "Léa a son concept validé pour Veillée : Malik couche sa fille Jade, puis retrouve un moment calme avec la tisane. Elle demande une liste de plans à une IA."),
      before: B("Make a shot list for a 30-second ad about a dad who drinks herbal tea at night.",
        "Fais une liste de plans pour une pub de 30 secondes sur un papa qui boit une tisane le soir."),
      after: B("Here is an approved concept for a 30-second spot: [CONCEPT IN THREE PANELS].\nWrite the shot list as a table: number (010, 020...), shot scale, angle, camera, action (what we see), sound, duration in seconds.\nRules: the total must be exactly 30 seconds; the last 4 seconds are the packshot with the pack of Veillée, the brand name and the signature; no shot under 2 seconds.\nThen mark with 15 the shots that would form a 15-second version on their own, at the same durations, and check that they add up to exactly 15.\nShow both totals at the end.",
        "Voici un concept validé pour un spot de 30 secondes : [CONCEPT EN TROIS CASES].\nÉcris la liste des plans sous forme de tableau : numéro (010, 020...), valeur de plan, angle, caméra, action (ce que l'on voit), son, durée en secondes.\nRègles : le total fait exactement 30 secondes ; les 4 dernières secondes sont le packshot avec le paquet Veillée, le nom de la marque et la signature ; aucun plan sous 2 secondes.\nMarque ensuite d'un 15 les plans qui formeraient seuls une version de 15 secondes, aux mêmes durées, et vérifie qu'ils totalisent exactement 15.\nAffiche les deux totaux à la fin."),
      takeaway: B("The second prompt imposes the format, the exact total, the packshot and a minimum shot length, and builds the 15 inside the 30. Léa gets nine shots that add up, with five already marked for the cutdown.",
        "Le second prompt impose le format, le total exact, le packshot et une durée minimale, et construit le 15 à l'intérieur du 30. Léa obtient neuf plans dont la somme tombe juste, cinq déjà repérés pour la version courte."),
    },
    exercise: {
      goal: B("A timed shot list for a 30-second spot, with the 15-second version marked inside it, and both totals checked by hand.",
        "Une liste de plans minutée pour un spot de 30 secondes, avec la version de 15 repérée à l'intérieur, et les deux totaux vérifiés à la main."),
      prompt: B("Here is my approved concept: [YOUR CONCEPT IN THREE PANELS].\nProduct and signature: [PRODUCT, BRAND, SIGNATURE].\nMandatory mentions to show at the end: [MENTIONS GIVEN BY THE CLIENT, OR NONE].\nWrite the shot list as a table: number by tens, shot scale, angle, camera, action, sound, duration.\nThe total must be exactly 30 seconds, with [NUMBER] seconds of packshot at the end.\nMark the shots that form a 15-second version at the same durations.\nIf a constraint cannot be met, say which one instead of bending the totals.",
        "Voici mon concept validé : [VOTRE CONCEPT EN TROIS CASES].\nProduit et signature : [PRODUIT, MARQUE, SIGNATURE].\nMentions obligatoires à montrer à la fin : [MENTIONS DONNÉES PAR LE CLIENT, OU AUCUNE].\nÉcris la liste des plans en tableau : numéro de dix en dix, valeur de plan, angle, caméra, action, son, durée.\nLe total fait exactement 30 secondes, avec [NOMBRE] secondes de packshot à la fin.\nRepère les plans qui forment une version de 15 secondes aux mêmes durées.\nSi une contrainte ne peut pas être tenue, dis laquelle au lieu de tordre les totaux."),
      check: [
        B("You added the durations yourself and found exactly 30, then exactly 15", "Vous avez additionné les durées vous-même : exactement 30, puis exactement 15"),
        B("The packshot keeps the same duration in both versions", "Le packshot garde la même durée dans les deux versions"),
        B("The 15 still contains the turn of the story, not only the product", "Le 15 contient encore la bascule de l'histoire, pas seulement le produit"),
        B("Every action line describes something a camera can film", "Chaque ligne d'action décrit quelque chose qu'une caméra peut filmer"),
      ],
      bonus: B("Read the 30-second shot list aloud with a stopwatch, saying the voice-over at a natural pace. If the words do not fit in their shots, the problem is the text, not the durations: shorten the voice-over first.",
        "Lisez la liste du 30 secondes à voix haute, chronomètre en main, en disant la voix off à un rythme naturel. Si les mots ne tiennent pas dans leurs plans, le problème vient du texte, pas des durées : raccourcissez d'abord la voix off."),
    },
    more: [
      { q: B("The AI returns a 30-second shot list whose durations add up to 28. What do you do?",
          "L'IA rend une liste de plans de 30 secondes dont les durées totalisent 28. Que faites-vous ?"),
        options: [
          B("You check the sum yourself, then decide where the 2 seconds go", "Vous vérifiez la somme vous-même, puis décidez où vont les 2 secondes"),
          B("You accept it, since an editor will stretch the shots later", "Vous l'acceptez, puisqu'un monteur allongera les plans plus tard"),
          B("You ask the AI to try again until it says the total is 30", "Vous redemandez à l'IA jusqu'à ce qu'elle annonce 30"),
        ],
        answer: 0,
        why: B("Language models often get sums wrong, and a total it announces is not a total it computed. Add the durations yourself, then choose the shot that deserves the extra time: often the turn or the packshot.",
          "Les LLM se trompent souvent dans les additions, et un total annoncé n'est pas un total calculé. Additionnez vous-même, puis choisissez le plan qui mérite le temps restant : souvent la bascule ou le packshot.") },
      { q: B("Which shots should the 15-second version of Veillée keep first?",
          "Quels plans la version de 15 secondes de Veillée doit-elle garder en priorité ?"),
        options: [
          B("The first five shots, in order, until 15 seconds are reached", "Les cinq premiers plans, dans l'ordre, jusqu'à atteindre 15 secondes"),
          B("The shots that carry the turn, the product and the packshot", "Les plans qui portent la bascule, le produit et le packshot"),
          B("The most beautiful shots, whatever their place in the story", "Les plus beaux plans, quelle que soit leur place dans l'histoire"),
        ],
        answer: 1,
        why: B("Cutting from the start keeps the setup and loses the product. A 15 keeps what carries the message: the moment the product changes the situation, and the end that names the brand.",
          "Couper depuis le début garde l'installation et perd le produit. Un 15 garde ce qui porte le message : le moment où le produit change la situation, et la fin qui nomme la marque.") },
    ],
  },

  [enrichKey(M3, 'sb-vertical')]: {
    why: [
      B("A vertical video is not a cropped horizontal one. On a phone held upright, the 9:16 frame is tall and narrow: one subject fits, two side by side barely do, and wide establishing shots become thin strips. The storyboard must be redrawn for this frame, with closer shot scales and the action placed along the vertical axis.",
        "Une vidéo verticale n'est pas une vidéo horizontale recadrée. Sur un téléphone tenu droit, le cadre 9:16 est haut et étroit : un sujet y tient, deux côte à côte à peine, et les plans d'ensemble deviennent de minces bandes. Le storyboard se redessine pour ce cadre, avec des valeurs de plan plus serrées et l'action placée sur l'axe vertical."),
      B("In a feed, the viewer has not chosen the ad and can scroll away at any moment. The opening must show the subject or the tension at once, without the slow setup that works on television. Many people watch with the sound off: on-screen text and subtitles must carry the story, and the voice-over becomes a bonus rather than a crutch.",
        "Dans un fil, le spectateur n'a pas choisi la pub et peut faire défiler à tout moment. L'ouverture montre tout de suite le sujet ou la tension, sans la lente installation qui fonctionne à la télévision. Beaucoup regardent sans le son : le texte à l'écran et les sous-titres portent l'histoire, et la voix off devient un plus plutôt qu'une béquille."),
      B("Each platform (TikTok, Instagram Reels, YouTube Shorts, Snapchat) overlays its interface on the video: account name, caption, action icons. The zones to keep clear differ by platform and change over time; take them from the official ad specifications of each platform and draw them on your panel template rather than guessing.",
        "Chaque plateforme (TikTok, Instagram Reels, YouTube Shorts, Snapchat) superpose son interface à la vidéo : nom du compte, légende, icônes d'action. Les zones à laisser libres diffèrent selon la plateforme et changent avec le temps ; prenez-les dans les spécifications publicitaires officielles de chacune et tracez-les sur votre gabarit plutôt que de les deviner."),
    ],
    example: {
      context: B("Maison Orée wants a vertical version of Veillée for Instagram Reels and TikTok. Léa first asks an image tool to turn her horizontal frames into 9:16.",
        "Maison Orée veut une version verticale de Veillée pour Instagram Reels et TikTok. Léa demande d'abord à un outil d'image de passer ses images horizontales en 9:16."),
      before: B("Convert these storyboard frames to vertical 9:16.",
        "Passe ces images de storyboard en vertical 9:16."),
      after: B("You are helping me adapt a 30-second spot into a vertical 9:16 version of [DURATION] seconds for [PLATFORMS].\nHere is the horizontal shot list: [SHOT LIST].\n1. Rewrite the opening: the first shot must show Malik's tired face or the mess of toys within the first second, no establishing view.\n2. For each shot, give a vertical recomposition: one subject, closer scale, subject in the middle third of the height.\n3. Keep the pack of Veillée and all text out of the bottom fifth and the right edge of the frame; I will check the exact safe zones in each platform's official specs.\n4. Add an on-screen text line per shot, five words at most, so the story reads without sound.\n5. Then write one image prompt per shot, ending with: vertical 9:16, storyboard sketch, same character as reference.",
        "Tu m'aides à adapter un spot de 30 secondes en version verticale 9:16 de [DURÉE] secondes pour [PLATEFORMES].\nVoici la liste des plans horizontale : [LISTE DES PLANS].\n1. Réécris l'ouverture : le premier plan montre le visage fatigué de Malik ou le désordre de jouets dès la première seconde, sans plan d'ensemble.\n2. Pour chaque plan, propose une recomposition verticale : un sujet, une valeur plus serrée, le sujet au tiers central de la hauteur.\n3. Garde le paquet Veillée et tout texte hors du cinquième inférieur et du bord droit du cadre ; je vérifierai les zones sûres exactes dans les spécifications officielles de chaque plateforme.\n4. Ajoute une ligne de texte à l'écran par plan, cinq mots au plus, pour que l'histoire se lise sans le son.\n5. Écris ensuite un prompt d'image par plan, terminé par : vertical 9:16, storyboard sketch, same character as reference."),
      takeaway: B("Cropping kept the old composition in a frame it does not fit. The second prompt rebuilds the opening, the framing and the text for a feed, and leaves the exact safe zones to the official specs.",
        "Le recadrage gardait l'ancienne composition dans un cadre qui ne lui convient pas. Le second prompt reconstruit l'ouverture, les cadres et le texte pour un fil, et laisse les zones sûres exactes aux spécifications officielles."),
    },
    exercise: {
      goal: B("A vertical storyboard of your spot, with a new opening shot, a 9:16 template showing the safe zones, and an on-screen text line per panel.",
        "Un storyboard vertical de votre spot, avec un nouveau plan d'ouverture, un gabarit 9:16 montrant les zones sûres et une ligne de texte à l'écran par case."),
      prompt: B("Adapt this spot into a vertical 9:16 version of [DURATION] seconds for [TARGET PLATFORM].\nHorizontal shot list: [YOUR SHOT LIST].\nRewrite the opening so that the subject or the tension appears in the first second.\nRecompose each shot for a tall frame: one subject, closer scale, action in the middle third.\nKeep product and text away from the areas covered by the interface: [SAFE ZONES COPIED FROM THE PLATFORM'S OFFICIAL SPECS].\nAdd an on-screen text line per shot, five words at most.\nTell me which horizontal shots you dropped, and why.",
        "Adapte ce spot en version verticale 9:16 de [DURÉE] secondes pour [PLATEFORME VISÉE].\nListe des plans horizontale : [VOTRE LISTE DES PLANS].\nRéécris l'ouverture pour que le sujet ou la tension apparaisse dès la première seconde.\nRecompose chaque plan pour un cadre haut : un sujet, une valeur plus serrée, l'action au tiers central.\nGarde le produit et le texte hors des zones couvertes par l'interface : [ZONES SÛRES RECOPIÉES DES SPÉCIFICATIONS OFFICIELLES DE LA PLATEFORME].\nAjoute une ligne de texte à l'écran par plan, cinq mots au plus.\nDis-moi quels plans horizontaux tu as retirés, et pourquoi."),
      check: [
        B("The first panel shows the subject or the tension, not a wide view", "La première case montre le sujet ou la tension, pas un plan large"),
        B("The safe zones come from the platform's official specs, not memory", "Les zones sûres viennent des spécifications officielles, pas de mémoire"),
        B("No product or text sits in a zone covered by the interface", "Aucun produit ni texte ne se trouve dans une zone couverte par l'interface"),
        B("The story reads with the sound off, from the text lines alone", "L'histoire se lit sans le son, avec les seules lignes de texte"),
      ],
      bonus: B("Lay a screenshot of the platform interface over two of your panels, at the same size. Where an icon or the caption covers something important, move it: this five-minute test catches what a template drawn from memory misses.",
        "Posez une capture de l'interface de la plateforme sur deux de vos cases, à la même taille. Là où une icône ou la légende couvre un élément important, déplacez-le : ce test de cinq minutes attrape ce qu'un gabarit de mémoire laisse passer."),
    },
    more: [
      { q: B("Why does the vertical version of Veillée need a new opening shot rather than the TV one?",
          "Pourquoi la version verticale de Veillée a-t-elle besoin d'un nouveau plan d'ouverture ?"),
        options: [
          B("Because platforms forbid reusing a shot from a television spot", "Parce que les plateformes interdisent de reprendre un plan télé"),
          B("Because a vertical frame cannot show an interior scene at all", "Parce qu'un cadre vertical ne peut pas montrer de scène d'intérieur"),
          B("Because in a feed the viewer must grasp the subject at once", "Parce que dans un fil le spectateur doit saisir le sujet aussitôt"),
        ],
        answer: 2,
        why: B("On television, the viewer is already watching when the spot starts. In a feed, nothing holds them: a slow establishing shot gives them a reason to scroll. The opening must show the subject or the tension right away.",
          "À la télévision, le spectateur regarde déjà quand le spot commence. Dans un fil, rien ne le retient : un lent plan d'ensemble lui donne une raison de faire défiler. L'ouverture montre tout de suite le sujet ou la tension.") },
      { q: B("Where do you take the exact safe zones of a TikTok or Reels ad from?",
          "Où prenez-vous les zones sûres exactes d'une pub TikTok ou Reels ?"),
        options: [
          B("From the official ad specs of each platform, checked when you start", "Des spécifications officielles de chaque plateforme, vérifiées au départ"),
          B("From this course, which gives them once and for all in pixels", "De ce cours, qui les donne une fois pour toutes en pixels"),
          B("From the image generator, which applies them automatically", "Du générateur d'images, qui les applique automatiquement"),
        ],
        answer: 0,
        why: B("Interfaces change, and each platform has its own. The official ad specifications give the current zones; a figure copied once will drift. Check them at the start of each project.",
          "Les interfaces changent, et chaque plateforme a la sienne. Les spécifications publicitaires officielles donnent les zones actuelles ; un chiffre recopié une fois finira par être faux. Vérifiez-les au début de chaque projet.") },
    ],
  },

  [enrichKey(M3, 'sb-annotate')]: {
    why: [
      B("A storyboard is read by people who were not in the room: the director, the director of photography, the first assistant director, the production designer, the editor. The image shows the framing; the annotation says everything the image cannot: what happens, what is said, what is heard, how the camera moves, how long it lasts and how we pass to the next shot.",
        "Un storyboard est lu par des personnes qui n'étaient pas dans la pièce : le réalisateur, le chef opérateur, le premier assistant, le chef décorateur, le monteur. L'image montre le cadre ; l'annotation dit tout ce que l'image ne dit pas : ce qui se passe, ce qui est dit, ce que l'on entend, comment bouge la caméra, combien de temps cela dure et comment on passe au plan suivant."),
      B("A fixed template makes the board readable at a glance: the same fields, in the same order, under every panel. An empty field is information too ('no dialogue', 'fixed shot'), while a missing field is a question someone will ask on set, at the worst moment. Arrows drawn on the image carry movement better than words.",
        "Un gabarit fixe rend la planche lisible d'un coup d'oeil : les mêmes champs, dans le même ordre, sous chaque case. Un champ vide est aussi une information (« pas de dialogue », « plan fixe »), alors qu'un champ absent est une question que quelqu'un posera sur le plateau, au pire moment. Les flèches dessinées sur l'image disent mieux le mouvement que les mots."),
      B("An AI is a good proofreader for annotations because the task is mechanical: compare each panel with the template, find empty fields, durations that do not add up, a voice-over too long for its shot, a camera move described in two contradictory ways. It does not decide the content; it finds the gaps you then fill.",
        "Une IA relit bien les annotations parce que la tâche est mécanique : comparer chaque case au gabarit, trouver les champs vides, les durées dont la somme est fausse, une voix off trop longue pour son plan, un mouvement décrit de deux façons contradictoires. Elle ne décide pas du contenu ; elle trouve les manques, que vous comblez ensuite."),
    ],
    example: {
      context: B("Léa's Veillée board has nine panels with notes written freely. The director, Samuel, sends back a list of twelve questions about camera and sound.",
        "La planche Veillée de Léa compte neuf cases aux notes écrites librement. Le réalisateur, Samuel, lui renvoie douze questions sur la caméra et le son."),
      before: B("Check my storyboard notes and improve them.",
        "Relis mes notes de storyboard et améliore-les."),
      after: B("Here are the annotations of a 30-second storyboard, panel by panel: [ANNOTATIONS].\nThe template of each panel is: number, shot scale, angle, camera (fixed or movement with direction), action (present tense, visible only), dialogue or voice-over (exact words), sound (music, effects), transition to next shot, duration in seconds.\nDo not rewrite anything. Produce a table with one row per panel and one column per field, filled with my text, and write MISSING where a field is empty.\nThen list: actions that describe a feeling instead of something visible; voice-over lines that cannot be said in the duration of their shot at a natural pace; the total duration.",
        "Voici les annotations d'un storyboard de 30 secondes, case par case : [ANNOTATIONS].\nLe gabarit de chaque case est : numéro, valeur de plan, angle, caméra (fixe ou mouvement avec sa direction), action (au présent, uniquement visible), dialogue ou voix off (mots exacts), son (musique, bruitages), transition vers le plan suivant, durée en secondes.\nNe réécris rien. Produis un tableau avec une ligne par case et une colonne par champ, rempli avec mon texte, et écris MANQUANT là où un champ est vide.\nListe ensuite : les actions qui décrivent un sentiment au lieu d'une chose visible ; les phrases de voix off impossibles à dire dans la durée de leur plan à un rythme naturel ; la durée totale."),
      takeaway: B("'Improve' let the AI rewrite Léa's choices. The second prompt asks it to map, flag and add up, without touching the content; Léa fills the gaps herself and Samuel's questions disappear.",
        "« Améliore » laissait l'IA réécrire les choix de Léa. Le second prompt lui demande de cartographier, signaler et additionner, sans toucher au contenu ; Léa comble elle-même les manques et les questions de Samuel disparaissent."),
    },
    exercise: {
      goal: B("A fully annotated storyboard of at least six panels, on one fixed template, checked by an AI and corrected by you.",
        "Un storyboard d'au moins six cases entièrement annoté, sur un gabarit fixe, vérifié par une IA puis corrigé par vous."),
      prompt: B("Here are my storyboard annotations, panel by panel: [YOUR ANNOTATIONS].\nMy template is: [YOUR FIELDS, E.G. NUMBER, SCALE, ANGLE, CAMERA, ACTION, DIALOGUE, SOUND, TRANSITION, DURATION].\nDo not rewrite my text.\nBuild a table, one row per panel, one column per field, and write MISSING where a field is empty.\nFlag: actions that describe a feeling, camera moves without a direction, dialogue too long for its duration, transitions that contradict the next panel.\nGive the total duration and compare it with the target of [TARGET DURATION] seconds.",
        "Voici mes annotations de storyboard, case par case : [VOS ANNOTATIONS].\nMon gabarit est : [VOS CHAMPS, PAR EXEMPLE NUMÉRO, VALEUR, ANGLE, CAMÉRA, ACTION, DIALOGUE, SON, TRANSITION, DURÉE].\nNe réécris pas mon texte.\nConstruis un tableau, une ligne par case, une colonne par champ, et écris MANQUANT là où un champ est vide.\nSignale : les actions qui décrivent un sentiment, les mouvements de caméra sans direction, les dialogues trop longs pour leur durée, les transitions qui contredisent la case suivante.\nDonne la durée totale et compare-la à l'objectif de [DURÉE VISÉE] secondes."),
      check: [
        B("Every panel shows all the fields of the template, even when empty", "Chaque case montre tous les champs du gabarit, même vides"),
        B("Every camera move has a direction and an arrow on the image", "Chaque mouvement de caméra a une direction et une flèche sur l'image"),
        B("No action line describes a feeling or an intention", "Aucune ligne d'action ne décrit un sentiment ou une intention"),
        B("The durations add up to the target, checked by your own sum", "Les durées totalisent l'objectif, vérifié par votre propre addition"),
      ],
      bonus: B("Give your annotated board to someone who has never seen the project and ask them to tell you the spot, shot by shot, without your help. Every hesitation points to a field that says too little.",
        "Confiez votre planche annotée à une personne qui n'a jamais vu le projet et demandez-lui de vous raconter le spot, plan par plan, sans votre aide. Chaque hésitation désigne un champ qui en dit trop peu."),
    },
    more: [
      { q: B("Which action line is written correctly for a storyboard panel?",
          "Quelle ligne d'action est correctement écrite pour une case de storyboard ?"),
        options: [
          B("Malik finally understands that the evening belongs to him", "Malik comprend enfin que la soirée lui appartient"),
          B("Malik is tired but happy, thinking about his long day", "Malik est fatigué mais heureux, il pense à sa longue journée"),
          B("Malik sets the mug down, closes his eyes and breathes out", "Malik pose la tasse, ferme les yeux et expire lentement"),
        ],
        answer: 2,
        why: B("Only the third line describes what the camera can film and the actor can play. Understanding, thinking and happiness are what the viewer should infer from visible actions.",
          "Seule la troisième ligne décrit ce que la caméra peut filmer et l'acteur jouer. Comprendre, penser et être heureux sont ce que le spectateur doit déduire d'actions visibles.") },
      { q: B("Why ask the AI not to rewrite your annotations when it checks them?",
          "Pourquoi demander à l'IA de ne pas réécrire vos annotations quand elle les vérifie ?"),
        options: [
          B("Because a rewrite would replace your choices and hide the real gaps", "Parce qu'une réécriture remplacerait vos choix et cacherait les manques"),
          B("Because AI tools are not allowed to edit text written by a human", "Parce que les outils IA n'ont pas le droit de modifier un texte humain"),
          B("Because a rewritten text would use far more tokens than a table", "Parce qu'un texte réécrit consommerait bien plus de tokens qu'un tableau"),
        ],
        answer: 0,
        why: B("The content of the board is your work, agreed with the director. A checking prompt maps and flags; a rewrite would smooth over the empty fields and introduce choices nobody approved.",
          "Le contenu de la planche est votre travail, convenu avec le réalisateur. Un prompt de vérification cartographie et signale ; une réécriture lisserait les champs vides et introduirait des choix que personne n'a validés.") },
    ],
  },
}

const PUB_DEEP: Record<string, Deepening> = {
  [deepKey(M3, 'sb-brief')]: {
    intro: B("In advertising, the storyboard starts from a client brief, not from a script. Before drawing anything, you must sort what the brief imposes from what it merely hopes, reduce the promise to a single message, then tell that message as a tiny story. This lesson shows how to read a brief, how to write concepts in three panels (situation, turn, payoff) and how to use a language model and an image tool to explore several directions quickly. You will follow Léa Morel, a freelance storyboarder, on the brief of Maison Orée, a small fictional herbal tea brand launching Veillée, an evening infusion; this project runs through the whole module.",
      "En publicité, le storyboard part d'un brief client, pas d'un script. Avant de dessiner quoi que ce soit, il faut trier ce que le brief impose de ce qu'il espère seulement, réduire la promesse à un message unique, puis raconter ce message en une toute petite histoire. Ce cours montre comment lire un brief, comment écrire des concepts en trois cases (situation, bascule, résolution) et comment employer un LLM et un outil d'image pour explorer vite plusieurs pistes. Vous suivrez Léa Morel, storyboardeuse indépendante, sur le brief de Maison Orée, petite marque fictive de tisanes qui lance Veillée, une infusion du soir ; ce projet sert de fil rouge à tout le module."),
    concepts: [
      { term: B('Client brief', 'Brief client'),
        def: B("The document in which the advertiser states the product, the target, the promise, the formats, the budget and the deadlines. It mixes fixed constraints and wishes that you must tell apart.",
          "Le document dans lequel l'annonceur expose le produit, la cible, la promesse, les formats, le budget et les délais. Il mêle des contraintes fixes et des envies qu'il faut distinguer.") },
      { term: B('Single message', 'Message unique'),
        def: B("The one idea the viewer must remember, written in one short sentence. Every panel of the concept must lead to it; a second message weakens the first.",
          "La seule idée que le spectateur doit retenir, écrite en une phrase courte. Chaque case du concept doit y mener ; un second message affaiblit le premier.") },
      { term: B('Three-panel concept', 'Concept en trois cases'),
        def: B("A story reduced to a situation, a turn and a payoff. It is the test of a concept: if it cannot be told in three panels, it will not hold in fifteen seconds.",
          "Une histoire réduite à une situation, une bascule et une résolution. C'est l'épreuve d'un concept : s'il ne tient pas en trois cases, il ne tiendra pas en quinze secondes.") },
      { term: B('Packshot', 'Packshot'),
        def: B("The final shot showing the product, its pack and usually the brand signature. It is often required by the brief and must be planned from the concept stage.",
          "Le plan final qui montre le produit, son emballage et le plus souvent la signature de la marque. Il est souvent exigé par le brief et se prévoit dès le concept.") },
    ],
    walkthrough: {
      title: B("Léa turns the Maison Orée brief into three concepts and recommends one.",
        "Léa transforme le brief de Maison Orée en trois concepts et en recommande un."),
      steps: [
        B("She pastes the brief into Claude and asks for a table of fixed constraints and wishes. Fixed: a 30-second spot, a 15-second version, a vertical version, the packshot. Wishes: 'warm', 'authentic', 'not a cliché of relaxation'. Why: she will only argue about what is negotiable.",
          "Elle colle le brief dans Claude et demande un tableau des contraintes fixes et des envies. Fixé : un spot de 30 secondes, une version de 15, une version verticale, le packshot. Envies : « chaleureux », « authentique », « pas un cliché de détente ». Pourquoi : elle ne discutera que de ce qui est négociable."),
        B("She writes the single message herself: 'The evening becomes yours again.' Why: the AI can propose wordings, but choosing the message is a decision she must be able to defend in front of the client.",
          "Elle écrit elle-même le message unique : « Le soir redevient à vous. » Pourquoi : l'IA peut proposer des formulations, mais choisir le message est une décision qu'elle doit pouvoir défendre devant le client."),
        B("She asks for three contrasting concepts in three visible panels. She keeps: a father who puts his daughter to bed then finds calm; a night-shift nurse coming home; two flatmates who stop talking at last. Why: three different situations give the client a real choice.",
          "Elle demande trois concepts contrastés en trois cases visibles. Elle retient : un père qui couche sa fille puis retrouve le calme ; une infirmière de nuit qui rentre chez elle ; deux colocataires qui cessent enfin de parler. Pourquoi : trois situations différentes offrent au client un vrai choix."),
        B("She generates nine panels in Midjourney with the same style suffix, rough pencil sketch and grey wash, no text. Why: one shared style puts the three concepts on an equal footing, so that only the ideas compete.",
          "Elle génère neuf cases dans Midjourney avec le même suffixe de style, croquis au crayon et lavis gris, sans texte. Pourquoi : un style commun met les trois concepts à égalité, et seules les idées s'affrontent."),
        B("She presents the three concepts on one page and recommends the father, because the turn (the house falls silent) shows the product's moment without any explanation. Why: a recommendation with its reason helps the client decide.",
          "Elle présente les trois concepts sur une page et recommande le père, parce que la bascule (la maison se tait) montre le moment du produit sans aucune explication. Pourquoi : une recommandation accompagnée de sa raison aide le client à décider."),
      ],
    },
    mistakes: [
      { wrong: B("Treating every line of the brief as a constraint, including adjectives like 'warm' or 'premium'.",
          "Traiter chaque ligne du brief comme une contrainte, y compris des adjectifs comme « chaleureux » ou « haut de gamme »."),
        fix: B("Separate facts (formats, durations, mentions) from wishes, then translate each wish into a visible situation the panels can show.",
          "Séparez les faits (formats, durées, mentions) des envies, puis traduisez chaque envie en situation visible que les cases peuvent montrer.") },
      { wrong: B("Presenting three variations of the same idea, differing only in colours or casting.",
          "Présenter trois variantes de la même idée, qui ne diffèrent que par les couleurs ou les personnages."),
        fix: B("Make the concepts differ in their situation and their turn, so that the client chooses a direction, not a detail.",
          "Faites différer les concepts par leur situation et leur bascule, pour que le client choisisse une direction, pas un détail.") },
      { wrong: B("Letting the AI choose the single message and the recommended concept.",
          "Laisser l'IA choisir le message unique et le concept recommandé."),
        fix: B("Use the AI to propose and to criticise, then decide yourself: you are the one who will defend the choice in the meeting.",
          "Servez-vous de l'IA pour proposer et critiquer, puis décidez vous-même : c'est vous qui défendrez le choix en réunion.") },
    ],
    recap: [
      B("A brief mixes fixed constraints and wishes; sort them first.", "Un brief mêle contraintes fixes et envies ; triez-les d'abord."),
      B("The single message fits in one sentence and every panel leads to it.", "Le message unique tient en une phrase et chaque case y mène."),
      B("A concept that cannot be told in three panels is not ready.", "Un concept qui ne tient pas en trois cases n'est pas prêt."),
      B("Three contrasting concepts in one rough style let the client choose a direction.", "Trois concepts contrastés dans un même style brut laissent le client choisir une direction."),
    ],
    further: B("Take a brief you know (from work, or one written for practice) and rewrite it as a table of facts and wishes, then a single message. Compare your message with the slogan the brand finally used, if the campaign exists: the gap between the two often shows what the creative team decided.",
      "Prenez un brief que vous connaissez (professionnel, ou écrit pour l'exercice) et réécrivez-le en tableau de faits et d'envies, puis en message unique. Comparez votre message à la signature finalement retenue par la marque, si la campagne existe : l'écart entre les deux montre souvent ce que l'équipe créative a tranché."),
    more: [
      { q: B("The client hesitates between your three concepts and asks you to merge them into one. What is the best answer?",
          "Le client hésite entre vos trois concepts et vous demande de les fusionner en un seul. Quelle est la meilleure réponse ?"),
        options: [
          B("Merge them as asked, since the client always has the final word", "Les fusionner comme demandé, puisque le client a toujours le dernier mot"),
          B("Explain that one spot carries one message, and ask what appeals in each", "Expliquer qu'un spot porte un message, et demander ce qui plaît dans chacun"),
          B("Refuse and present three new concepts at the next meeting", "Refuser et présenter trois nouveaux concepts à la réunion suivante"),
        ],
        answer: 1,
        why: B("Merging three stories in 30 seconds gives a spot with no clear message. Asking what appeals in each lets you keep those elements inside the strongest concept.",
          "Fusionner trois histoires en 30 secondes donne un spot sans message clair. Demander ce qui plaît dans chacun permet de garder ces éléments à l'intérieur du concept le plus fort.") },
      { q: B("What makes a good turn in a three-panel concept for a product?",
          "Qu'est-ce qui fait une bonne bascule dans un concept en trois cases pour un produit ?"),
        options: [
          B("The moment the product appears in the frame for the very first time", "Le moment où le produit apparaît pour la première fois dans le cadre"),
          B("The longest panel, where the voice-over explains the benefits", "La case la plus longue, où la voix off explique les bénéfices"),
          B("A visible change in the situation that the product makes possible", "Un changement visible de la situation, que le produit rend possible"),
        ],
        answer: 2,
        why: B("The turn is where the story changes direction. When that change is linked to the product, the viewer understands its role without being told.",
          "La bascule est le moment où l'histoire change de direction. Quand ce changement est lié au produit, le spectateur comprend son rôle sans qu'on le lui explique.") },
    ],
  },

  [deepKey(M3, 'sb-spot')]: {
    intro: B("A commercial is a story with a stopwatch. Once the concept is approved, it must be broken into shots whose durations add up exactly to the slot sold: 30 seconds, then 15 for the cutdown. This lesson shows how to divide a spot into three movements, how to time each shot, how to protect the packshot and the mandatory mentions, and how to build the short version inside the long one rather than after it. You will time the nine shots of the Veillée spot and mark the five that form its 15-second version.",
      "Un film publicitaire est une histoire avec un chronomètre. Une fois le concept validé, il faut le découper en plans dont les durées totalisent exactement l'écran vendu : 30 secondes, puis 15 pour la version courte. Ce cours montre comment diviser un spot en trois mouvements, minuter chaque plan, protéger le packshot et les mentions obligatoires, et construire la version courte à l'intérieur de la longue plutôt qu'après. Vous minuterez les neuf plans du spot Veillée et repérerez les cinq qui forment sa version de 15 secondes."),
    concepts: [
      { term: B('Spot duration', 'Durée du spot'),
        def: B("The exact length of the slot bought from a broadcaster or a platform. A 30-second spot lasts 30 seconds, not 31; the shot list is built to that total.",
          "La longueur exacte de l'écran acheté à un diffuseur ou à une plateforme. Un spot de 30 secondes dure 30 secondes, pas 31 ; la liste des plans se construit sur ce total.") },
      { term: B('Cutdown', 'Version courte'),
        def: B("A shorter version made from the shots of the long one, for instance a 15 from a 30. It keeps the shots that carry the message, at their own duration.",
          "Une version plus courte faite avec les plans de la longue, par exemple un 15 tiré d'un 30. Elle garde les plans qui portent le message, à leur propre durée.") },
      { term: B('Signature', 'Signature'),
        def: B("The brand line shown or spoken at the end, with the name and the pack. It closes every version and keeps the same duration in each.",
          "La phrase de marque montrée ou dite à la fin, avec le nom et le paquet. Elle clôt chaque version et garde la même durée dans chacune.") },
      { term: B('Mandatory mentions', 'Mentions obligatoires'),
        def: B("Legal or regulatory texts that must appear on screen, depending on the product and the country. The client's legal team supplies them; the storyboard gives them readable time.",
          "Textes légaux ou réglementaires qui doivent apparaître à l'écran, selon le produit et le pays. Le service juridique du client les fournit ; le storyboard leur donne un temps lisible.") },
    ],
    walkthrough: {
      title: B("Léa times the Veillée spot to 30 seconds, then builds its 15-second version.",
        "Léa minute le spot Veillée sur 30 secondes, puis construit sa version de 15."),
      steps: [
        B("She splits the 30 seconds: 12 for the setup (the evening chaos, the bedtime story), 14 for the turn (the silent house, the kettle, the tea, the window), 4 for the packshot. Why: a rough budget per movement stops one act from eating the others.",
          "Elle répartit les 30 secondes : 12 pour l'installation (le désordre du soir, l'histoire du coucher), 14 pour la bascule (la maison silencieuse, la bouilloire, la tisane, la fenêtre), 4 pour le packshot. Pourquoi : un budget par mouvement empêche un temps de dévorer les autres."),
        B("She writes nine shots numbered 010 to 090, from the wide living room full of toys (3 s) to the packshot with the signature (4 s), and adds the durations herself: 30. Why: a total announced by the AI is not a total checked.",
          "Elle écrit neuf plans numérotés de 010 à 090, du plan large du salon couvert de jouets (3 s) au packshot avec la signature (4 s), et additionne elle-même les durées : 30. Pourquoi : un total annoncé par l'IA n'est pas un total vérifié."),
        B("She asks the client for the exact mandatory mentions and reserves them inside the packshot. Why: the mentions depend on the product and the market, and only the client's legal team can confirm them.",
          "Elle demande au client les mentions obligatoires exactes et leur réserve une place dans le packshot. Pourquoi : les mentions dépendent du produit et du marché, et seul le service juridique du client peut les confirmer."),
        B("She marks the 15: shot 010 cut to 2 s, the door closing (2 s), the hand taking the sachet (3 s), Malik at the window with the steam (4 s), the packshot (4 s). Total: 15. Why: the turn and the product survive; the bedtime story goes.",
          "Elle repère le 15 : le plan 010 ramené à 2 s, la porte qui se ferme (2 s), la main qui prend le sachet (3 s), Malik à la fenêtre avec la vapeur (4 s), le packshot (4 s). Total : 15. Pourquoi : la bascule et le produit survivent ; l'histoire du coucher disparaît."),
        B("She reads the voice-over aloud with a stopwatch over each version. Why: the text must fit its shots at a natural pace, or the actor will rush and the spot will sound crowded.",
          "Elle lit la voix off à voix haute, chronomètre en main, sur chaque version. Pourquoi : le texte doit tenir dans ses plans à un rythme naturel, sinon le comédien se presse et le spot paraît encombré."),
      ],
    },
    mistakes: [
      { wrong: B("Writing the shot list without durations and timing it only at the edit.",
          "Écrire la liste des plans sans durées et ne la minuter qu'au montage."),
        fix: B("Give each shot a duration from the first draft, and keep the total exact at every version of the board.",
          "Donnez une durée à chaque plan dès le premier jet, et gardez le total exact à chaque version de la planche.") },
      { wrong: B("Building the 15 after the shoot, from whatever was filmed.",
          "Construire le 15 après le tournage, avec ce qui a été filmé."),
        fix: B("Mark the 15 inside the 30 on the storyboard, so that the shots it needs are planned and filmed at the right length.",
          "Repérez le 15 à l'intérieur du 30 sur le storyboard, pour que les plans dont il a besoin soient prévus et tournés à la bonne longueur.") },
      { wrong: B("Squeezing the packshot to make room for one more story shot.",
          "Comprimer le packshot pour faire place à un plan d'histoire de plus."),
        fix: B("Protect the packshot and the mentions first; cut a setup shot instead, since the end is what the brand pays for.",
          "Protégez d'abord le packshot et les mentions ; coupez plutôt un plan d'installation, puisque la fin est ce que la marque paie.") },
    ],
    recap: [
      B("A spot lasts exactly its slot: every shot carries a duration from the start.", "Un spot dure exactement son écran : chaque plan porte une durée dès le départ."),
      B("Setup, turn, payoff: give each movement a time budget.", "Installation, bascule, résolution : donnez un budget de temps à chaque mouvement."),
      B("The packshot and the mandatory mentions are protected first.", "Le packshot et les mentions obligatoires sont protégés en premier."),
      B("A 15 removes shots from the 30; it never speeds them up.", "Un 15 retire des plans au 30 ; il ne les accélère jamais."),
    ],
    further: B("Watch three spots of 30 seconds and their 15-second versions, if the brands published both. Write the shot list of each with durations, then mark which shots the short version kept. You will see which shots carry the message for professional teams.",
      "Regardez trois spots de 30 secondes et leurs versions de 15, si les marques ont publié les deux. Écrivez la liste des plans de chacun avec les durées, puis repérez les plans gardés par la version courte. Vous verrez quels plans portent le message pour des équipes professionnelles."),
    more: [
      { q: B("The voice-over of shot 070 cannot be said in its 4 seconds at a natural pace. What do you change first?",
          "La voix off du plan 070 ne peut pas être dite en 4 secondes à un rythme naturel. Que changez-vous d'abord ?"),
        options: [
          B("The text, by cutting words until it fits at a natural pace", "Le texte, en coupant des mots jusqu'à ce qu'il tienne au naturel"),
          B("The duration of shot 070, by taking time from the packshot", "La durée du plan 070, en prenant du temps au packshot"),
          B("Nothing: the actor will simply speak faster during the recording", "Rien : le comédien parlera simplement plus vite à l'enregistrement"),
        ],
        answer: 0,
        why: B("The packshot is protected and a rushed voice sounds crowded. A shorter text usually says the same thing better, and keeps the timing of the spot intact.",
          "Le packshot est protégé et une voix pressée paraît encombrée. Un texte plus court dit le plus souvent la même chose mieux, et garde intact le minutage du spot.") },
      { q: B("Why mark the 15-second version on the storyboard before the shoot?",
          "Pourquoi repérer la version de 15 secondes sur le storyboard avant le tournage ?"),
        options: [
          B("Because broadcasters require both versions on the same document", "Parce que les diffuseurs exigent les deux versions sur un même document"),
          B("So that the shots it needs are planned and filmed at their length", "Pour que les plans dont il a besoin soient prévus et tournés à leur durée"),
          B("Because the 15 is always shot first, on a separate day", "Parce que le 15 se tourne toujours en premier, un autre jour"),
        ],
        answer: 1,
        why: B("A cutdown improvised at the edit often lacks a shot of the right length. Planning it on the board makes sure the crew films what both versions need.",
          "Une version courte improvisée au montage manque souvent d'un plan à la bonne durée. La prévoir sur la planche garantit que l'équipe tourne ce dont les deux versions ont besoin.") },
    ],
  },

  [deepKey(M3, 'sb-vertical')]: {
    intro: B("Social platforms show ads in a tall 9:16 frame, in feeds where the viewer can scroll away at any moment and often watches with the sound off. A spot designed for television does not survive a simple crop. This lesson shows how to redraw a storyboard for vertical screens: a new opening that shows the subject at once, compositions built for a narrow frame, safe zones taken from each platform's official specifications, and on-screen text that carries the story without sound. You will build the vertical version of Veillée for Instagram Reels and TikTok.",
      "Les plateformes sociales diffusent les pubs dans un cadre haut 9:16, au sein de fils où le spectateur peut faire défiler à tout moment et regarde souvent sans le son. Un spot conçu pour la télévision ne survit pas à un simple recadrage. Ce cours montre comment redessiner un storyboard pour l'écran vertical : une nouvelle ouverture qui montre le sujet aussitôt, des compositions bâties pour un cadre étroit, des zones sûres tirées des spécifications officielles de chaque plateforme, et un texte à l'écran qui porte l'histoire sans le son. Vous construirez la version verticale de Veillée pour Instagram Reels et TikTok."),
    concepts: [
      { term: B('9:16 format', 'Format 9:16'),
        def: B("A frame nine units wide for sixteen high, the shape of a phone held upright. It favours one subject, close scales and vertical movement.",
          "Un cadre de neuf unités de large pour seize de haut, la forme d'un téléphone tenu droit. Il favorise un sujet unique, des valeurs serrées et le mouvement vertical.") },
      { term: B('Safe zones', 'Zones sûres'),
        def: B("The areas of the frame not covered by the platform's interface (account name, caption, icons). Each platform publishes them in its ad specs, and they change over time.",
          "Les zones du cadre que l'interface de la plateforme ne recouvre pas (nom du compte, légende, icônes). Chaque plateforme les publie dans ses spécifications publicitaires, et elles évoluent.") },
      { term: B('Hook', 'Accroche'),
        def: B("The opening of a vertical video, which must show the subject or the tension at once so that the viewer stops scrolling.",
          "L'ouverture d'une vidéo verticale, qui doit montrer tout de suite le sujet ou la tension pour que le spectateur cesse de faire défiler.") },
      { term: B('Sound-off viewing', 'Visionnage sans le son'),
        def: B("Watching a feed with the sound muted. The story must then be readable from images and on-screen text, with the voice-over as a bonus.",
          "Regarder un fil le son coupé. L'histoire doit alors se lire par les images et le texte à l'écran, la voix off venant en plus.") },
    ],
    walkthrough: {
      title: B("Léa redraws the Veillée spot for vertical feeds.",
        "Léa redessine le spot Veillée pour les fils verticaux."),
      steps: [
        B("She opens the official ad specifications of Instagram and TikTok, notes the zones covered by the interface and draws them on a 9:16 template in Figma. Why: the zones differ by platform and change; a template drawn from memory would be wrong.",
          "Elle ouvre les spécifications publicitaires officielles d'Instagram et de TikTok, note les zones couvertes par l'interface et les trace sur un gabarit 9:16 dans Figma. Pourquoi : les zones diffèrent selon la plateforme et évoluent ; un gabarit de mémoire serait faux."),
        B("She replaces the wide living room shot with a close-up of Malik's tired face as Jade calls him for a last story. Why: the tension is understood in the first second, without an establishing view.",
          "Elle remplace le plan large du salon par un gros plan du visage fatigué de Malik, pendant que Jade le réclame pour une dernière histoire. Pourquoi : la tension se comprend dès la première seconde, sans plan d'ensemble."),
        B("She recomposes each shot vertically: the kettle in low angle filling the height, the hand and sachet in close-up, Malik at the window framed from the chest up. Why: a tall frame holds one subject, so each shot chooses one.",
          "Elle recompose chaque plan à la verticale : la bouilloire en contre-plongée qui occupe la hauteur, la main et le sachet en gros plan, Malik à la fenêtre cadré à la poitrine. Pourquoi : un cadre haut accueille un sujet, chaque plan en choisit donc un."),
        B("She writes one text line per panel, such as 'Encore une histoire...' then 'Enfin le silence', kept inside the safe zones. Why: with the sound off, these lines carry the story.",
          "Elle écrit une ligne de texte par case, comme « Encore une histoire... » puis « Enfin le silence », placée dans les zones sûres. Pourquoi : sans le son, ces lignes portent l'histoire."),
        B("She places the pack of Veillée and the signature in the upper middle of the last panel, then lays a screenshot of each interface over it to check nothing is covered. Why: the packshot is what the client pays for.",
          "Elle place le paquet Veillée et la signature dans le haut du centre de la dernière case, puis pose une capture de chaque interface par-dessus pour vérifier que rien n'est couvert. Pourquoi : le packshot est ce que le client paie."),
      ],
    },
    mistakes: [
      { wrong: B("Cropping the horizontal frames to 9:16 and calling it the vertical version.",
          "Recadrer les images horizontales en 9:16 et appeler cela la version verticale."),
        fix: B("Redraw each shot for the tall frame, with one subject, a closer scale and the action in the middle third.",
          "Redessinez chaque plan pour le cadre haut, avec un sujet, une valeur plus serrée et l'action au tiers central.") },
      { wrong: B("Keeping the slow television opening in a feed.",
          "Garder la lente ouverture télévisuelle dans un fil."),
        fix: B("Open on the subject or the tension, so that the first second gives a reason to keep watching.",
          "Ouvrez sur le sujet ou la tension, pour que la première seconde donne une raison de continuer à regarder.") },
      { wrong: B("Relying on the voice-over to tell the story.",
          "Compter sur la voix off pour raconter l'histoire."),
        fix: B("Write short on-screen text for each panel and check that the story reads with the sound off.",
          "Écrivez un texte court à l'écran pour chaque case et vérifiez que l'histoire se lit sans le son.") },
    ],
    recap: [
      B("A vertical version is redrawn, never simply cropped.", "Une version verticale se redessine, elle ne se recadre jamais simplement."),
      B("The first second shows the subject or the tension.", "La première seconde montre le sujet ou la tension."),
      B("Safe zones come from each platform's official specs, checked at the start.", "Les zones sûres viennent des spécifications officielles de chaque plateforme, vérifiées au départ."),
      B("On-screen text carries the story when the sound is off.", "Le texte à l'écran porte l'histoire quand le son est coupé."),
    ],
    further: B("Save five vertical ads you stopped on in your own feed and storyboard their first three seconds. Note what appears in the first second, where the text sits and where the product is placed. Compare with your Veillée panels.",
      "Enregistrez cinq pubs verticales sur lesquelles vous vous êtes arrêté dans votre propre fil et storyboardez leurs trois premières secondes. Notez ce qui apparaît dans la première seconde, où se place le texte et où se trouve le produit. Comparez avec vos cases Veillée."),
    more: [
      { q: B("Your vertical panel shows Malik and Jade side by side in a wide shot. What do you change?",
          "Votre case verticale montre Malik et Jade côte à côte en plan large. Que changez-vous ?"),
        options: [
          B("Nothing: a wide shot works the same way in every format", "Rien : un plan large fonctionne de la même façon dans tous les formats"),
          B("You add a third character to fill the empty top of the frame", "Vous ajoutez un troisième personnage pour remplir le haut du cadre"),
          B("You split it into two closer shots, one subject in each", "Vous le séparez en deux plans plus serrés, un sujet dans chacun"),
        ],
        answer: 2,
        why: B("Two subjects side by side become tiny in a narrow frame. Two closer shots, one per character, keep faces readable on a phone screen.",
          "Deux sujets côte à côte deviennent minuscules dans un cadre étroit. Deux plans plus serrés, un par personnage, gardent les visages lisibles sur un écran de téléphone.") },
      { q: B("How do you check that your vertical text is not hidden by the interface?",
          "Comment vérifiez-vous que votre texte vertical n'est pas caché par l'interface ?"),
        options: [
          B("You lay a screenshot of the platform interface over the panel", "Vous posez une capture de l'interface de la plateforme sur la case"),
          B("You ask the image generator to avoid the edges of the frame", "Vous demandez au générateur d'images d'éviter les bords du cadre"),
          B("You make the text larger, so that it stays visible anyway", "Vous agrandissez le texte, pour qu'il reste visible malgré tout"),
        ],
        answer: 0,
        why: B("An overlay of the real interface shows exactly what is covered on that platform. A larger text can still fall under the caption or the icons.",
          "Superposer l'interface réelle montre exactement ce qui est couvert sur cette plateforme. Un texte plus grand peut encore passer sous la légende ou les icônes.") },
    ],
  },

  [deepKey(M3, 'sb-annotate')]: {
    intro: B("A storyboard image shows a frame; it does not say what happens, what is heard, how the camera moves or how long the shot lasts. Annotations carry all of that, for people who were not in the meeting: director, director of photography, assistant director, production designer, editor. This lesson gives a fixed template for every panel, the conventions for drawing camera moves, the rule of writing only what is visible, and a prompt that has an AI check the board for gaps without rewriting it. You will annotate the nine panels of the Veillée spot.",
      "Une image de storyboard montre un cadre ; elle ne dit pas ce qui se passe, ce que l'on entend, comment bouge la caméra ni combien dure le plan. Les annotations portent tout cela, pour des personnes absentes de la réunion : réalisateur, chef opérateur, assistant réalisateur, chef décorateur, monteur. Ce cours donne un gabarit fixe pour chaque case, les conventions pour dessiner les mouvements de caméra, la règle de n'écrire que ce qui se voit, et un prompt qui fait vérifier la planche par une IA sans la réécrire. Vous annoterez les neuf cases du spot Veillée."),
    concepts: [
      { term: B('Annotation template', "Gabarit d'annotation"),
        def: B("The fixed list of fields under every panel: number, shot scale, angle, camera, action, dialogue or voice-over, sound, transition, duration. Same fields, same order, always.",
          "La liste fixe des champs sous chaque case : numéro, valeur de plan, angle, caméra, action, dialogue ou voix off, son, transition, durée. Les mêmes champs, dans le même ordre, toujours.") },
      { term: B('Camera arrows', 'Flèches de caméra'),
        def: B("Arrows drawn on the image to show a pan, a tilt or a tracking shot, and a frame inside the frame to show where a zoom or a push-in ends.",
          "Des flèches dessinées sur l'image pour indiquer un panoramique, une bascule verticale ou un travelling, et un cadre dans le cadre pour montrer où finit un zoom ou une avancée.") },
      { term: B('Visible action', 'Action visible'),
        def: B("An action line written in the present tense that describes only what the camera can film and the actor can play, never a thought or a feeling.",
          "Une ligne d'action écrite au présent qui ne décrit que ce que la caméra peut filmer et l'acteur jouer, jamais une pensée ni un sentiment.") },
      { term: B('Transition', 'Transition'),
        def: B("How we pass to the next shot: a straight cut, a dissolve, a match cut on a shape or a movement. It is written in the panel it leaves.",
          "La manière de passer au plan suivant : un cut franc, un fondu enchaîné, un raccord sur une forme ou un mouvement. Elle s'écrit dans la case que l'on quitte.") },
    ],
    walkthrough: {
      title: B("Léa annotates the nine panels of Veillée, then has them checked by an AI.",
        "Léa annote les neuf cases de Veillée, puis les fait vérifier par une IA."),
      steps: [
        B("She sets up a board template in Figma: the image on top, then nine fields in two columns, the same under each panel. Why: a reader finds the camera line or the duration at the same place on every page.",
          "Elle prépare un gabarit de planche dans Figma : l'image en haut, puis neuf champs sur deux colonnes, identiques sous chaque case. Pourquoi : le lecteur trouve la ligne caméra ou la durée au même endroit sur chaque page."),
        B("For shot 050, she writes: low angle, fixed, the kettle starts to steam, sound of water heating, cut, 3 s. For shot 070, she draws an arrow for a slow push-in towards Malik at the window. Why: the arrow says the movement faster than a sentence.",
          "Pour le plan 050, elle écrit : contre-plongée, fixe, la bouilloire commence à fumer, bruit de l'eau qui chauffe, cut, 3 s. Pour le plan 070, elle dessine une flèche d'avancée lente vers Malik à la fenêtre. Pourquoi : la flèche dit le mouvement plus vite qu'une phrase."),
        B("She rewrites 'Malik feels the day leave him' as 'Malik closes his eyes, breathes out, his shoulders drop'. Why: the actor and the director of photography need something to play and to frame.",
          "Elle réécrit « Malik sent la journée le quitter » en « Malik ferme les yeux, expire, ses épaules tombent ». Pourquoi : l'acteur et le chef opérateur ont besoin de quelque chose à jouer et à cadrer."),
        B("She pastes all the annotations into Claude with the template and asks for a table with MISSING where a field is empty, without any rewrite. Two transitions and one sound line are missing. Why: the check is mechanical, the decisions stay hers.",
          "Elle colle toutes les annotations dans Claude avec le gabarit et demande un tableau avec MANQUANT là où un champ est vide, sans aucune réécriture. Deux transitions et une ligne de son manquent. Pourquoi : la vérification est mécanique, les décisions restent les siennes."),
        B("She fills the gaps, adds the durations herself (30 s) and sends the board to Samuel, the director. Why: a complete board turns his twelve questions into none, and the meeting can discuss choices instead of gaps.",
          "Elle comble les manques, additionne elle-même les durées (30 s) et envoie la planche à Samuel, le réalisateur. Pourquoi : une planche complète fait passer ses douze questions à zéro, et la réunion peut discuter des choix plutôt que des trous."),
      ],
    },
    mistakes: [
      { wrong: B("Writing free notes under each panel, with different information from one panel to the next.",
          "Écrire des notes libres sous chaque case, avec des informations différentes d'une case à l'autre."),
        fix: B("Use one fixed template with the same fields in the same order, and write 'none' rather than leaving a field out.",
          "Employez un gabarit fixe aux mêmes champs dans le même ordre, et écrivez « aucun » plutôt que d'omettre un champ.") },
      { wrong: B("Describing feelings and intentions in the action line.",
          "Décrire des sentiments et des intentions dans la ligne d'action."),
        fix: B("Write what the camera sees, in the present tense: gestures, looks, movements. The feeling is what the viewer infers.",
          "Écrivez ce que voit la caméra, au présent : gestes, regards, déplacements. Le sentiment est ce que le spectateur en déduit.") },
      { wrong: B("Asking an AI to improve the annotations and accepting its rewrite.",
          "Demander à une IA d'améliorer les annotations et accepter sa réécriture."),
        fix: B("Ask it to map the board against the template and flag gaps without rewriting; then fill them yourself.",
          "Demandez-lui de confronter la planche au gabarit et de signaler les manques sans réécrire ; comblez-les ensuite vous-même.") },
    ],
    recap: [
      B("Every panel has the same fields, in the same order, even when a field is empty.", "Chaque case a les mêmes champs, dans le même ordre, même quand un champ est vide."),
      B("Camera moves are drawn as arrows on the image.", "Les mouvements de caméra se dessinent en flèches sur l'image."),
      B("Action lines describe only what can be filmed and played.", "Les lignes d'action ne décrivent que ce qui se filme et se joue."),
      B("An AI checks the board for gaps; you decide the content.", "Une IA vérifie les manques de la planche ; vous décidez du contenu."),
    ],
    further: B("Find published storyboards of a film you know (some studios and directors share them in books or exhibitions) and compare their annotations with yours. Note which fields professionals always fill, and adapt your template accordingly.",
      "Trouvez des storyboards publiés d'un film que vous connaissez (certains studios et réalisateurs les partagent dans des livres ou des expositions) et comparez leurs annotations aux vôtres. Notez les champs que les professionnels remplissent toujours, et adaptez votre gabarit en conséquence."),
    more: [
      { q: B("Where do you write the dissolve between shot 080 and shot 090?",
          "Où écrivez-vous le fondu enchaîné entre le plan 080 et le plan 090 ?"),
        options: [
          B("In the transition field of panel 080, the shot you leave", "Dans le champ transition de la case 080, le plan que l'on quitte"),
          B("In the action field of panel 090, the shot that arrives", "Dans le champ action de la case 090, le plan qui arrive"),
          B("Nowhere: the editor decides transitions after the shoot", "Nulle part : le monteur décide des transitions après le tournage"),
        ],
        answer: 0,
        why: B("The convention is to write the transition in the panel it leaves. Planning it matters: a dissolve or a match cut may require the shots to be framed in a particular way.",
          "La convention est d'écrire la transition dans la case que l'on quitte. La prévoir compte : un fondu ou un raccord peut exiger que les plans soient cadrés d'une manière particulière.") },
      { q: B("Panel 030 has no dialogue. What do you write in the dialogue field?",
          "La case 030 n'a pas de dialogue. Qu'écrivez-vous dans le champ dialogue ?"),
        options: [
          B("Nothing, and you remove the field to save space on the page", "Rien, et vous retirez le champ pour gagner de la place"),
          B("'None', so the reader knows it is a choice, not an omission", "« Aucun », pour que le lecteur sache que c'est un choix"),
          B("A suggested line, in case the director wants one on the day", "Une réplique suggérée, au cas où le réalisateur en voudrait une"),
        ],
        answer: 1,
        why: B("An explicit 'none' answers the question before anyone asks it. A missing field looks like something was forgotten, and a suggested line adds a choice nobody approved.",
          "Un « aucun » explicite répond à la question avant qu'on la pose. Un champ absent ressemble à un oubli, et une réplique suggérée ajoute un choix que personne n'a validé.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M3, track: 'course', glyph: 'target', tint: '#dc2626', at: [50, 76], levels: PUB,
    title: B('The advertising storyboard', 'Le storyboard publicitaire'),
    blurb: B('From the client brief to a timed spot: three-panel concepts, 30 and 15-second versions, vertical formats and full annotations.',
      'Du brief client au spot minuté : concepts en trois cases, versions de 30 et 15 secondes, formats verticaux et annotations complètes.'),
  },
]

void M4

export const STORYBOARD_B: CoursePart = {
  modules: MODULES,
  enrich: { ...PUB_ENRICH },
  deep: { ...PUB_DEEP },
}
