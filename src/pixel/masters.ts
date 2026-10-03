// LES MAÎTRES DES TEMPLES · un par formation, habillé selon son métier.
//
// Demandé : « tous les maîtres des dojos en fonction de leur métier et des
// cours ». Les noms sont ceux de personnages du dojo, inventés, et « Maître »
// vaut pour tout le monde, comme dans un dojo.
import { B, type Bi } from '../data/bilingual'
import type { ChibiSpec } from './chibi'

export interface Master {
  name: string
  /** ce qu'il enseigne, en une ligne */
  role: Bi
  /** ce qu'il dit en accueillant l'élève */
  welcome: Bi
  spec: ChibiSpec
}

const base: Omit<ChibiSpec, 'species' | 'variant'> = {
  skin: '#f6c9a3', hair: 'short', hairColor: '#2b1d16', eyes: 'dot', mouth: 'smile', outfit: 'kimono',
  outfitColor: '#7c3aed', accent: '#1e1b4b', pants: '#1e1b4b', accessory: 'none', facial: 'none', pride: 'none',
}
const human = (o: Partial<ChibiSpec>): ChibiSpec => ({ ...base, species: 'human', variant: 'human', ...o })

export const MASTERS: Record<string, Master> = {
  weekend: {
    name: 'Sora',
    role: B('Master of the AI weekend', "Maître du week-end de l'IA"),
    welcome: B('Welcome. Seven short lessons: we start with the words of AI, like learning the highway code before driving.', "Bienvenue. Sept cours courts : nous commençons par les mots de l'IA, comme on apprend le code de la route avant de conduire."),
    spec: human({ skin: '#ffe0c8', hair: 'none', hairColor: '#e9e4da', facial: 'beard', accessory: 'wizard', accent: '#6d28d9', outfit: 'kimono', outfitColor: '#4c1d95', eyes: 'happy' }),
  },
  generaliste: {
    name: 'Hana',
    role: B('Master of the full training', 'Maître de la formation complète'),
    welcome: B('Each lesson of this course teaches one gesture, like the moves of a craft. Take them in order, or as you need them.', "Chaque cours de cette formation enseigne un geste, comme les gestes d'un métier. Prenez-les dans l'ordre, ou selon vos besoins."),
    spec: human({ skin: '#e7ad82', hair: 'bun', hairColor: '#e9e4da', accessory: 'glasses', outfit: 'kimono', outfitColor: '#7c3aed', accent: '#f7c948' }),
  },
  'metier-growth': {
    name: 'Kenji',
    role: B('Master of growth', 'Maître du growth'),
    welcome: B('Here we bring clients in, and we always know what it costs.', "Ici, on fait venir des clients, et l'on sait toujours ce que cela coûte."),
    spec: human({ skin: '#c98a5e', hair: 'spiky', hairColor: '#ff6b3d', accessory: 'sunglasses', outfit: 'hoodie', outfitColor: '#22c55e', accent: '#14532d' }),
  },
  'metier-comms': {
    name: 'Aiko',
    role: B('Master of communication', 'Maître de la communication'),
    welcome: B('A message that lands is a message that was prepared. Let us prepare yours.', 'Un message qui porte est un message préparé. Préparons le vôtre.'),
    spec: human({ skin: '#ffe0c8', hair: 'long', hairColor: '#ff5fa2', accessory: 'headphones', outfit: 'tee', outfitColor: '#ec4899', accent: '#1e1b4b' }),
  },
  'metier-founder': {
    name: 'Ren',
    role: B('Master of founders', 'Maître des fondateurs'),
    welcome: B('You decide fast and alone. Let us make AI your best advisor.', "Vous décidez vite et souvent seul. Faisons de l'IA votre meilleur conseiller."),
    spec: human({ skin: '#9b6440', hair: 'curly', hairColor: '#2b1d16', accessory: 'cap', outfit: 'hoodie', outfitColor: '#1e293b', accent: '#7c3aed' }),
  },
  'metier-product': {
    name: 'Mei',
    role: B('Master of product', 'Maître du produit'),
    welcome: B('A good product starts with a well-framed problem. Let us frame yours.', 'Un bon produit commence par un problème bien posé. Posons le vôtre.'),
    spec: human({ skin: '#f6c9a3', hair: 'bob', hairColor: '#5a3a22', accessory: 'glasses', outfit: 'overalls', outfitColor: '#0ea5e9', accent: '#f5f5f4' }),
  },
  'metier-sales': {
    name: 'Taro',
    role: B('Master of sales', 'Maître de la vente'),
    welcome: B('Selling is listening first. AI can help you listen better.', "Vendre, c'est d'abord écouter. L'IA peut vous aider à mieux écouter."),
    spec: human({ skin: '#e7ad82', hair: 'short', hairColor: '#2b1d16', facial: 'mustache', outfit: 'suit', outfitColor: '#1e3a8a', accent: '#ef4444' }),
  },
  'metier-assistant': {
    name: 'Yumi',
    role: B('Master of assistants', 'Maître des assistants'),
    welcome: B('Agendas, emails, travels: let us take back an hour a day.', 'Agendas, e-mails, déplacements : reprenons une heure par jour.'),
    spec: human({ skin: '#ffe0c8', hair: 'ponytail', hairColor: '#b0703a', accessory: 'headphones', outfit: 'suit', outfitColor: '#14b8a6', accent: '#f5f5f4' }),
  },
  'metier-designer': {
    name: 'Kai',
    role: B('Master of design', 'Maître du design'),
    welcome: B('AI does not replace your eye. It gives it more drafts to judge.', "L'IA ne remplace pas votre regard. Elle lui donne plus d'esquisses à juger."),
    spec: { ...base, species: 'animal', variant: 'cat', accessory: 'beret', accent: '#ef4444', outfit: 'tee', outfitColor: '#f59e0b', eyes: 'happy' },
  },
  'metier-teacher': {
    name: 'Nori',
    role: B('Master of teachers', 'Maître des enseignants'),
    welcome: B('Preparing, explaining, grading fairly: AI helps, you decide.', "Préparer, expliquer, évaluer équitablement : l'IA aide, vous décidez."),
    spec: human({ skin: '#c98a5e', hair: 'bob', hairColor: '#2b1d16', accessory: 'glasses', outfit: 'dress', outfitColor: '#a16207', accent: '#f5f5f4' }),
  },
  'metier-student': {
    name: 'Riku',
    role: B('Master of students', 'Maître des étudiants'),
    welcome: B('Learning faster without cheating yourself: that is the art we practise here.', "Apprendre plus vite sans se tricher soi-même : c'est l'art que l'on pratique ici."),
    spec: { ...base, species: 'animal', variant: 'bunny', accessory: 'cap', accent: '#3b82f6', outfit: 'hoodie', outfitColor: '#3b82f6', eyes: 'big' },
  },
  'metier-scientist': {
    name: 'Emi',
    role: B('Master of scientists', 'Maître des scientifiques'),
    welcome: B('Here, no reference is invented and no figure is guessed.', "Ici, aucune référence n'est inventée et aucun chiffre n'est deviné."),
    spec: { ...base, species: 'alien', variant: 'bigeyes', skin: '#8ee07a', accessory: 'goggles', outfit: 'labcoat', outfitColor: '#6366f1', accent: '#6366f1' },
  },
  'metier-developer': {
    name: 'Haru',
    role: B('Master of developers', 'Maître des développeurs'),
    welcome: B('Code reviewed, secrets kept, tests written. Let us code with AI, properly.', "Du code relu, des secrets gardés, des tests écrits. Codons avec l'IA, proprement."),
    spec: { ...base, species: 'robot', variant: 'screen', eyes: 'happy', accessory: 'headphones', accent: '#84cc16', outfit: 'hoodie', outfitColor: '#1e293b' },
  },
  'metier-recruiter': {
    name: 'Sena',
    role: B('Master of recruiters', 'Maître des recruteurs'),
    welcome: B('Hiring well is hiring fairly. AI must never sort people for you.', "Bien recruter, c'est recruter équitablement. L'IA ne doit jamais trier les personnes à votre place."),
    spec: human({ skin: '#6b4128', hair: 'curly', hairColor: '#a86bff', outfit: 'suit', outfitColor: '#a855f7', accent: '#f5f5f4', accessory: 'flower' }),
  },
  'metier-lawyer': {
    name: 'Jun',
    role: B('Master of lawyers', 'Maître des juristes'),
    welcome: B('Confidentiality first, and every legal source verified. Then AI becomes precious.', "La confidentialité d'abord, et chaque source juridique vérifiée. Alors l'IA devient précieuse."),
    spec: human({ skin: '#f6c9a3', hair: 'short', hairColor: '#e9e4da', accessory: 'glasses', outfit: 'suit', outfitColor: '#1c1917', accent: '#b45309', facial: 'beard' }),
  },
  // LES COURS VENDUS À PART · une développeuse au casque et au sweat, un
  // personnage à la fleur et aux couleurs de Lovable.
  'coder-une-app': {
    name: 'Akira',
    role: B('Master of code', 'Maître du code'),
    welcome: B('A terminal, a repository, a database, a deployment. Lesson by lesson, we build your app together, like a house: foundations first, roof last.', 'Un terminal, un dépôt, une base de données, un déploiement. Cours après cours, nous construisons votre app ensemble, comme une maison : les fondations d\'abord, le toit à la fin.'),
    spec: human({ skin: '#e7ad82', hair: 'ponytail', hairColor: '#2b1d16', accessory: 'headphones', outfit: 'hoodie', outfitColor: '#f97316', accent: '#1e293b', eyes: 'happy' }),
  },
  'coder-avec-lovable': {
    name: 'Momo',
    role: B('Master of Lovable', 'Maître de Lovable'),
    welcome: B('Describe it clearly, check it calmly, publish it proudly. Let us build your app with Lovable.', "Décrivez-la clairement, vérifiez-la calmement, publiez-la fièrement. Construisons votre app avec Lovable."),
    spec: { ...base, species: 'weird', variant: 'mushroom', accessory: 'flower', outfit: 'overalls', outfitColor: '#ec4899', accent: '#f97316', eyes: 'big' },
  },
  // LES NOUVEAUX COURS · un maître chacun, habillé selon son art.
  'ecrire-un-livre': {
    name: 'Fumi',
    role: B('Master of books', 'Maître des livres'),
    welcome: B('A book is built like a house: a plan, then rooms one by one. AI carries the bricks, you remain the architect.', 'Un livre se bâtit comme une maison : un plan, puis les pièces une à une. L\'IA porte les briques, vous restez l\'architecte.'),
    spec: human({ skin: '#f6c9a3', hair: 'bun', hairColor: '#7c2d12', accessory: 'glasses', outfit: 'dress', outfitColor: '#b45309', accent: '#78350f', eyes: 'happy' }),
  },
  'storyboard': {
    name: 'Taku',
    role: B('Master of storyboards', 'Maître du storyboard'),
    welcome: B('Every shot you draw is a shot you do not waste on set. Let us cut your film into images.', 'Chaque plan dessiné est un plan qu\'on ne gaspille pas sur le tournage. Découpons votre film en images.'),
    spec: human({ skin: '#e7ad82', hair: 'spiky', hairColor: '#111827', accessory: 'beret', outfit: 'tee', outfitColor: '#dc2626', accent: '#111827', eyes: 'dot' }),
  },
  'bd-manga': {
    name: 'Hoshi',
    role: B('Master of comics and manga', 'Maître de la BD et du manga'),
    welcome: B('A good page reads in one glance and keeps you turning. Let us draw yours, panel by panel.', 'Une bonne planche se lit d\'un regard et donne envie de tourner la page. Dessinons la vôtre, case par case.'),
    spec: { ...base, species: 'animal', variant: 'fox', outfit: 'hoodie', outfitColor: '#e11d48', accent: '#1e1b4b', accessory: 'headphones', eyes: 'big' },
  },
  'flow-ux': {
    name: 'Nao',
    role: B('Master of UX', 'Maître de l\'UX'),
    welcome: B('A flow is a promise: the user always knows where they are and what comes next. Let us draw one that keeps it.', 'Un flow est une promesse : l\'utilisateur sait toujours où il est et ce qui suit. Dessinons-en un qui la tient.'),
    spec: human({ skin: '#ffe0c8', hair: 'bob', hairColor: '#0e7490', accessory: 'none', outfit: 'tee', outfitColor: '#0891b2', accent: '#164e63', eyes: 'happy' }),
  },
  'architecture-logicielle': {
    name: 'Ken',
    role: B('Master of architecture', 'Maître de l\'architecture'),
    welcome: B('An architecture is a set of decisions that are expensive to change. Let us make them on purpose, and write them down.', 'Une architecture est un ensemble de décisions coûteuses à changer. Prenons-les exprès, et écrivons-les.'),
    spec: human({ skin: '#c98d5e', hair: 'buzz', hairColor: '#111827', accessory: 'glasses', outfit: 'suit', outfitColor: '#4f46e5', accent: '#1e1b4b', facial: 'mustache' }),
  },
  'comptabilite': {
    name: 'Ume',
    role: B('Master of bookkeeping', 'Maître de la comptabilité'),
    welcome: B('Every euro has a receipt and a place. Let us put your accounts in order, calmly, and keep them there.', 'Chaque euro a son justificatif et sa place. Mettons vos comptes en ordre, calmement, et gardons-les ainsi.'),
    spec: human({ skin: '#f6c9a3', hair: 'long', hairColor: '#3f2a1d', accessory: 'glasses', outfit: 'suit', outfitColor: '#059669', accent: '#064e3b', eyes: 'dot' }),
  },
  'images-ia': {
    name: 'Iro',
    role: B('Master of images', 'Maître des images'),
    welcome: B('A beautiful image is a precise intention: light, framing, style. Let us learn to ask for it, then to finish it.', 'Une belle image est une intention précise : lumière, cadrage, style. Apprenons à la demander, puis à la finir.'),
    spec: { ...base, species: 'alien', variant: 'bigeyes', skin: '#a78bfa', outfit: 'kimono', outfitColor: '#9333ea', accent: '#facc15', accessory: 'beret' },
  },
  'logo-charte': {
    name: 'Akane',
    role: B('Master of brands', 'Maître des marques'),
    welcome: B('A logo is the face of a promise. First the promise, then the face. Let us build your brand in that order.', 'Un logo est le visage d\'une promesse. D\'abord la promesse, ensuite le visage. Construisons votre marque dans cet ordre.'),
    spec: human({ skin: '#ffe0c8', hair: 'curly', hairColor: '#c2410c', accessory: 'bow', outfit: 'dress', outfitColor: '#ea580c', accent: '#7c2d12', eyes: 'wink' }),
  },
  'design-system-figma': {
    name: 'Rin',
    role: B('Master of design systems', 'Maître des design systems'),
    welcome: B('A design system is a shared language. One word, one meaning, everywhere. Let us write yours in Figma.', 'Un design system est une langue commune. Un mot, un sens, partout. Écrivons la vôtre dans Figma.'),
    spec: { ...base, species: 'robot', variant: 'visor', skin: '#93c5fd', outfit: 'hoodie', outfitColor: '#2563eb', accent: '#1e3a8a', accessory: 'none' },
  },
  'ia-locale': {
    name: 'Tetsu',
    role: B('Master of local AI', 'Maître de l\'IA locale'),
    welcome: B('Your machine can think on its own, even in a plane. Let us install the models, and know what they can and cannot do.', 'Votre machine peut réfléchir seule, même dans un avion. Installons les modèles, et sachons ce qu\'ils peuvent et ne peuvent pas faire.'),
    spec: { ...base, species: 'robot', variant: 'screen', skin: '#86efac', outfit: 'labcoat', outfitColor: '#16a34a', accent: '#14532d', accessory: 'goggles' },
  },
  'business-ia': {
    name: 'Daichi',
    role: B('Master of business', 'Maître du business'),
    welcome: B('Money follows a problem solved for someone who cares. Let us find yours, test it fast, and sell it honestly.', 'L\'argent suit un problème résolu pour quelqu\'un à qui il importe. Trouvons le vôtre, testons-le vite, et vendons-le honnêtement.'),
    spec: human({ skin: '#c98d5e', hair: 'short', hairColor: '#1c1917', accessory: 'sunglasses', outfit: 'suit', outfitColor: '#ca8a04', accent: '#1c1917', eyes: 'happy' }),
  },
  'copywriting': {
    name: 'Mika',
    role: B('Master of copywriting', 'Maître du copywriting'),
    welcome: B('Words do not sell, they make people want to buy. Let us find the ones your reader is waiting for.', 'Les mots ne vendent pas, ils donnent envie d\'acheter. Trouvons ceux que votre lecteur attend.'),
    spec: human({ skin: '#ffe0c8', hair: 'long', hairColor: '#be185d', accessory: 'flower', outfit: 'dress', outfitColor: '#db2777', accent: '#500724', eyes: 'happy' }),
  },
  'veille-outils': {
    name: 'Sumi',
    role: B('Master of tech watch', 'Maître de la veille'),
    welcome: B('A new tool comes out every day; a good one, rarely. Let us learn to tell them apart in an hour.', 'Un nouvel outil sort chaque jour ; un bon, rarement. Apprenons à les distinguer en une heure.'),
    spec: { ...base, species: 'animal', variant: 'cat', outfit: 'tee', outfitColor: '#0d9488', accent: '#134e4a', accessory: 'glasses', eyes: 'dot' },
  },
  'metier-consultant': {
    name: 'Rio',
    role: B('Master of consultants', 'Maître des consultants'),
    welcome: B('A recommendation is worth what its reasoning is worth. Let us make yours solid.', 'Une recommandation vaut ce que vaut son raisonnement. Rendons le vôtre solide.'),
    spec: { ...base, species: 'monster', variant: 'horns', skin: '#9b6bff', outfit: 'suit', outfitColor: '#d946ef', accent: '#1e1b4b', accessory: 'glasses' },
  },
}

/** Le maître d'une formation · le maître du week-end par défaut. */
export const masterOf = (packId: string): Master => MASTERS[packId] ?? MASTERS.weekend
