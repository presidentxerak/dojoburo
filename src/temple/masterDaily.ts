// LE DÉFI DU JOUR DES MAÎTRES IA · un défi court, le même pour tout le monde le
// même jour, qui change chaque jour. Il ouvre le chat de chaque temple et le fil
// de la communauté, signé du maître (une IA, et c'est écrit). Choisi par le
// propriétaire pour une communauté qui ne paraisse pas vide, sans rien inventer.
import { B, type Bi } from '../data/bilingual'

export const DAILY_CHALLENGES: Bi[] = [
  B('Take the exercise of the lesson you are on and redo it with a real case from your week. Share the before and after.',
    "Reprenez l'exercice du cours que vous suivez avec un cas réel de votre semaine. Partagez la version avant et la version après."),
  B('Write a prompt in four parts (context, task, constraints, format) for a task you do every week.',
    'Rédigez un prompt en quatre parties (contexte, tâche, contraintes, format) pour une tâche que vous faites chaque semaine.'),
  B('Ask the AI to list what it is unsure about in its last answer, then check one of those points yourself.',
    "Demandez à l'IA de lister ce dont elle n'est pas certaine dans sa dernière réponse, puis vérifiez vous-même l'un de ces points."),
  B('Turn a long email you received into three bullet points and one question to ask back. Compare with your own reading.',
    'Transformez un long e-mail reçu en trois points et une question à poser en retour. Comparez avec votre propre lecture.'),
  B('Give the AI an example of the output you want before asking. Note what changed in the answer.',
    "Donnez à l'IA un exemple du résultat attendu avant de demander. Notez ce qui a changé dans la réponse."),
  B('Find one piece of personal or confidential data in a prompt you wrote recently, and rewrite the prompt without it.',
    'Repérez une donnée personnelle ou confidentielle dans un prompt écrit récemment, et réécrivez-le sans elle.'),
  B('Ask for the same answer twice as short. Decide which version you would really send.',
    'Demandez la même réponse deux fois plus courte. Décidez quelle version vous enverriez vraiment.'),
  B('Explain a concept of your course to the AI as if it were a beginner, and ask it to point out what you got wrong.',
    "Expliquez à l'IA une notion de votre cours comme à un débutant, et demandez-lui de relever ce que vous avez mal dit."),
  B('Write the acceptance criteria of a small task before asking the AI to do it, then check its answer against them.',
    "Écrivez les critères d'acceptation d'une petite tâche avant de la confier à l'IA, puis vérifiez sa réponse à l'aune de ces critères."),
  B('Ask the AI for three different approaches to one problem, with the weakness of each. Pick one and say why.',
    "Demandez à l'IA trois approches d'un même problème, avec la faiblesse de chacune. Choisissez-en une et dites pourquoi."),
  B('Save the best prompt of your week in a personal library, with one line on when to use it.',
    'Rangez le meilleur prompt de votre semaine dans une bibliothèque personnelle, avec une ligne sur quand l\'utiliser.'),
  B('Measure it: time a task done without AI, then with it. Share the honest result, even if AI did not help.',
    "Mesurez : chronométrez une tâche faite sans IA, puis avec. Partagez le résultat honnête, même si l'IA n'a pas aidé."),
  B('Ask the AI to play a demanding reviewer of your last piece of work, then fix the two most serious points.',
    "Demandez à l'IA de jouer un relecteur exigeant de votre dernier travail, puis corrigez les deux points les plus sérieux."),
  B('Help one member: answer a question in the community or in a course chat, in a few sentences.',
    'Aidez un membre : répondez à une question dans la communauté ou dans le chat d\'une formation, en quelques phrases.'),
]

/** le défi du jour · le même pour tous, il change à minuit (heure de Paris) */
export function dailyChallenge(now = new Date()): Bi {
  const day = Math.floor(Date.parse(now.toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' })) / 86400000)
  return DAILY_CHALLENGES[((day % DAILY_CHALLENGES.length) + DAILY_CHALLENGES.length) % DAILY_CHALLENGES.length]
}
