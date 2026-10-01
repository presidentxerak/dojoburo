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
    welcome: B('Welcome, young disciple. Seven floors, seven lessons: we start with the words of AI.', "Bienvenue, jeune disciple. Sept étages, sept leçons : nous commençons par les mots de l'IA."),
    spec: human({ skin: '#ffe0c8', hair: 'none', hairColor: '#e9e4da', facial: 'beard', accessory: 'wizard', accent: '#6d28d9', outfit: 'kimono', outfitColor: '#4c1d95', eyes: 'happy' }),
  },
  generaliste: {
    name: 'Hana',
    role: B('Master of the full training', 'Maître de la formation complète'),
    welcome: B('Every floor of this temple teaches one gesture. Take them in order, or as you need them.', "Chaque étage de ce temple enseigne un geste. Prenez-les dans l'ordre, ou selon vos besoins."),
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
  'metier-consultant': {
    name: 'Rio',
    role: B('Master of consultants', 'Maître des consultants'),
    welcome: B('A recommendation is worth what its reasoning is worth. Let us make yours solid.', 'Une recommandation vaut ce que vaut son raisonnement. Rendons le vôtre solide.'),
    spec: { ...base, species: 'monster', variant: 'horns', skin: '#9b6bff', outfit: 'suit', outfitColor: '#d946ef', accent: '#1e1b4b', accessory: 'glasses' },
  },
}

/** Le maître d'une formation · le maître du week-end par défaut. */
export const masterOf = (packId: string): Master => MASTERS[packId] ?? MASTERS.weekend
