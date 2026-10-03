// LES VIDÉOS · recruteurs, juristes, consultants. Voir ./types : chaque identifiant vient d'un
// résultat de recherche réel, jamais d'une supposition.
import type { Video } from './types'

export const V_TRADES_E: Record<string, Video[]> = {
  // Recruteurs
  'rh-need/rh-intake': [
    { id: 'S_WrYBZvXLo', title: 'La prise du besoin : Le chaînon manquant du recrutement', channel: '', lang: 'fr' },
    { id: 'Of2kBR4bTb8', title: '4 bonnes pratiques pour réussir son brief de poste', channel: '', lang: 'fr' },
  ],
  'rh-need/rh-ad': [
    { id: 'iXG4jmb9r2M', title: 'Prompt ChatGPT : Créer une offre d\'emploi - Tuto ChatGPT/ IA - Market Academy par Guillaume Sanchez', channel: '', lang: 'fr' },
    { id: '3obYdwYxGsg', title: 'Bien RÉDIGER une OFFRE D\'EMPLOI (De A à Z)', channel: '', lang: 'fr' },
  ],
  'rh-need/rh-criteria': [
    { id: 'b37ONkWvfXU', title: 'Scorecard recrutement : modèle Excel gratuit pour évaluer vos candidats', channel: '', lang: 'fr' },
  ],
  'rh-select/rh-screen': [
    { id: 'vXGIrfbXFUg', title: 'Comment trier des CV automatiquement avec l’IA (matching + scoring recrutement)', channel: '', lang: 'fr' },
  ],
  'rh-select/rh-bias': [
    { id: 'QuzKlwtEdrk', title: 'Qu\'est-ce qu\'un biais algorithmique ?', channel: '', lang: 'fr' },
    { id: 'ETLbypgFVvs', title: 'AI Bias in Hiring: The Hidden Discrimination', channel: '', lang: 'en' },
  ],
  'rh-select/rh-interview': [
    { id: 'Bqetj5LfG9E', title: 'Comment mener un entretien structuré?', channel: '', lang: 'fr' },
    { id: '4g_BNTOjGGU', title: 'L’évaluation des compétences comportementales en entretien d’embauche', channel: '', lang: 'fr' },
  ],
  'rh-close/rh-debrief': [
    { id: 'KwM1eYpZF0U', title: '253: How To Run An Effective Interview Debrief', channel: '', lang: 'en' },
  ],
  'rh-close/rh-offer': [
    { id: 'CIoHuaxiDPo', title: 'Comment bien rédiger une promesse d’embauche ? Par LexDev, automatisez vos documents juridiques - RH', channel: '', lang: 'fr' },
  ],
  'rh-close/rh-reply': [
    { id: 'Qrie7nYw-EM', title: 'Données RH et CNIL : ce que vous devez absolument respecter pour éviter les sanctions', channel: '', lang: 'fr' },
    { id: 'KjPfaf8AVTA', title: 'Ensure GDPR Compliance in Recruitment Like a Pro', channel: '', lang: 'en' },
  ],

  // Juristes
  'ju-contracts/ju-anonymise': [
    { id: 'TCAbkGtpwUc', title: 'Pseudonymisation : confidentialité de vos données avec l\'IA', channel: '', lang: 'fr' },
  ],
  'ju-contracts/ju-summary': [
    { id: 'qlHkrwMcLYI', title: 'Analyser un contrat avec l\'aide de Chat GPT', channel: '', lang: 'fr' },
    { id: 'D99-aPH-v9A', title: 'How to Review Legal Contracts with Claude AI (Prompt Included)', channel: '', lang: 'en' },
  ],
  'ju-contracts/ju-redflags': [
    { id: 'hpfWKiniq0Y', title: 'Introducing Jurist Redlining Agent with Playbooks', channel: '', lang: 'en' },
  ],
  'ju-drafting/ju-draft': [
    { id: 'x4WZXA5qTng', title: 'IA & Droit : Comment j\'ai rédigé un contrat \'béton\' (sans hallucination)', channel: '', lang: 'fr' },
  ],
  'ju-drafting/ju-redraft': [
    { id: 'F2plX82Oe7g', title: 'How to Redline: The Art of Redrafting and Explanatory Comments', channel: '', lang: 'en' },
    { id: 'wdXc_rLBUUc', title: 'How to Redline: A Strategic Approach to Aligning Redlining and Negotiation Styles', channel: '', lang: 'en' },
  ],
  'ju-drafting/ju-defined': [
    { id: 'xBzCMh_oB8U', title: 'Checking Defined Terms with Robin AI\'s Contract Copilot', channel: '', lang: 'en' },
  ],
  'ju-research/ju-question': [
    { id: 'Hi7Nm3JSXag', title: 'La Qualification juridique [argumentation & raisonnement juridique]', channel: '', lang: 'fr' },
  ],
  'ju-research/ju-verify': [
    { id: 'Ciz50FBjjJ4', title: 'Formation - Tuto : Recherche juridique avec l\'IA sans hallucination.', channel: '', lang: 'fr' },
    { id: 'MnbRoFwXUrg', title: 'IA juridique : Attention aux hallucinations et à la confidentialité des données. #droit #ChatGPT', channel: '', lang: 'fr' },
  ],
  'ju-research/ju-memo': [
    { id: 'Udihlzc0dAs', title: 'La consultation juridique d\'Avocat', channel: '', lang: 'fr' },
  ],

  // Consultants
  'cs-framing/cs-question': [
    { id: 'ccUhWzWOD04', title: 'Problem Statements with a McKinsey Consultant', channel: '', lang: 'en' },
  ],
  'cs-framing/cs-tree': [
    { id: 'XL6RYXHbhE4', title: 'Issue tree - how to simplify the reality and get meaningful results', channel: '', lang: 'en' },
    { id: 'hKBt0R3v7Ec', title: 'MECE - What is it? How to apply it in Case Interviews?', channel: '', lang: 'en' },
  ],
  'cs-framing/cs-hypotheses': [
    { id: 'SeZCRlAN7nY', title: 'HOW TO SOLVE ANY PROBLEM - How do consulting firms work (hypothesis-based problem solving explained)', channel: '', lang: 'en' },
  ],
  'cs-research/cs-market': [
    { id: 'CLoD-AjBt3w', title: 'Comment mesurer un marché (PAM TAM SAM SOM)', channel: '', lang: 'fr' },
    { id: 'kByIFecL08U', title: 'TAM, SAM & SOM Explained: Bottom-Up Market Sizing', channel: '', lang: 'en' },
  ],
  'cs-research/cs-benchmark': [
    { id: 'iILko_vnGVc', title: 'Benchmarking : comment faire un benchmark de la concurrence ?', channel: '', lang: 'fr' },
    { id: 'ctaubriVQUc', title: 'Benchmark concurrentiel avec l’IA : La méthode que personne n’utilise (encore)', channel: '', lang: 'fr' },
  ],
  'cs-research/cs-interviews': [
    { id: 'hp2i2qhbKM0', title: 'Analyse d\'entretiens avec NotebookLM : Un outil d\'IA pour le codage !', channel: '', lang: 'fr' },
    { id: '6trhWQMtQYY', title: 'AI for Thematic Analysis in Qualitative Research - Claire Moran', channel: '', lang: 'en' },
  ],
  'cs-deliver/cs-storyline': [
    { id: 'qMfHIcOD0yo', title: 'Parler aux dirigeants comme un consultant : Top Down Communication (The Pyramid Principle)', channel: '', lang: 'fr' },
    { id: 'j4Y3TdVVBCA', title: 'The Minto Pyramid Principle Explained with Examples', channel: '', lang: 'en' },
  ],
  'cs-deliver/cs-workshop': [
    { id: '9H4mLhIFmN0', title: 'Facilitation : 10 étapes pour une structure d\'atelier idéale', channel: '', lang: 'fr' },
    { id: '0Ijy_tZKsEc', title: 'Facilitation : des recettes pour terminer vos ateliers', channel: '', lang: 'fr' },
  ],
  'cs-deliver/cs-roadmap': [
    { id: 'ejfpI2lIknU', title: '4 étapes pour créer un plan d\'action (+2 outils)', channel: '', lang: 'fr' },
  ],
}
