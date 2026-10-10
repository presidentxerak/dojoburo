// L'UNITÉ TRANSVERSALE · demandé : « Ajoute un cours comment aborder l'IA à
// l'école et comment apprendre avec l'IA sans perdre les bonnes méthodes
// d'apprentissage ». Ouverte à toutes les classes, du collège au lycée.
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  {
    id: 'ia-ecole',
    subject: 'ia-ecole',
    grade: null,
    intro: 'Vous saurez utiliser l\'IA pour mieux apprendre, sans la laisser apprendre à votre place, en respectant les règles de votre établissement et les bonnes méthodes de travail.',
    reference: 'Cadre d\'usage de l\'IA en éducation du ministère de l\'Éducation nationale, et compétences numériques du socle commun (Pix)',
    chapters: [
      {
        id: 'comprendre',
        title: 'Comprendre ce qu\'est une IA',
        programme: 'Culture numérique : comprendre le fonctionnement des outils',
        lessons: [
          { id: 'ia-cest-quoi', title: 'Une IA générative, comment ça marche ?' },
          { id: 'ia-se-trompe', title: 'Pourquoi l\'IA se trompe avec assurance' },
          { id: 'ia-donnees', title: 'Vos données et votre vie privée face à l\'IA' },
          { id: 'ia-regles', title: 'Ce que votre établissement autorise, et pourquoi' },
        ],
      },
      {
        id: 'apprendre',
        title: 'Apprendre avec l\'IA, pas à sa place',
        programme: 'Méthodes de travail : apprendre et mémoriser',
        lessons: [
          { id: 'cerveau-apprend', title: 'Comment votre cerveau apprend vraiment' },
          { id: 'ia-tuteur', title: 'Faire de l\'IA un tuteur qui pose des questions' },
          { id: 'ia-memoriser', title: 'Réviser avec l\'IA : quiz, flashcards et rappel actif' },
          { id: 'ia-comprendre-cours', title: 'Se faire réexpliquer une notion du cours' },
        ],
      },
      {
        id: 'travailler',
        title: 'Faire ses devoirs honnêtement',
        programme: 'Éducation aux médias et à l\'information, intégrité',
        lessons: [
          { id: 'triche-ou-aide', title: 'Aide ou triche : où passe la limite ?' },
          { id: 'ia-redaction', title: 'Rédiger soi-même, puis se faire relire' },
          { id: 'ia-maths-sciences', title: 'Maths et sciences : chercher avant de demander' },
          { id: 'citer-ia', title: 'Dire quand on a utilisé l\'IA, et comment' },
        ],
      },
      {
        id: 'verifier',
        title: 'Vérifier, croiser, garder l\'esprit critique',
        programme: 'Éducation aux médias et à l\'information : évaluer l\'information',
        lessons: [
          { id: 'verifier-sources', title: 'Vérifier une réponse avec de vraies sources' },
          { id: 'images-fausses', title: 'Images et vidéos générées : repérer le faux' },
          { id: 'ia-examens', title: 'Préparer le brevet ou le bac avec l\'IA' },
          { id: 'plan-travail', title: 'Votre méthode de travail avec l\'IA, en une page' },
        ],
      },
    ],
  },
]
