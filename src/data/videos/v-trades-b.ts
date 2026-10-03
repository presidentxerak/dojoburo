// LES VIDÉOS · fondateurs, chefs de produit, commerciaux. Voir ./types : chaque identifiant vient d'un
// résultat de recherche réel, jamais d'une supposition.
import type { Video } from './types'

export const V_TRADES_B: Record<string, Video[]> = {
  // metier-founder
  'fo-story/fo-line': [
    { id: '6WQ2S5oXLqE', title: 'L\'elevator speech ou elevator pitch pour présenter son entreprise', channel: '', lang: 'fr' },
    { id: 'lw2X3PxKlAY', title: 'How To Perfectly Pitch Your Seed Stage Startup With Y Combinator\'s Michael Seibel', channel: '', lang: 'en' },
  ],
  'fo-story/fo-deck': [
    { id: 'jHjs6pJV-20', title: 'Pitch Deck : Le deck parfait ? C\'est possible ! Avec XAnge et Iris', channel: '', lang: 'fr' },
    { id: '17XZGUX_9iM', title: 'Kevin Hale - How to Pitch Your Startup', channel: '', lang: 'en' },
  ],
  'fo-story/fo-hard': [{ id: 'swq5gy-RcSc', title: 'The Five Steps To Answering Startup Investor Questions', channel: '', lang: 'en' }],
  'fo-customer/fo-interview': [{ id: 'OBac5a8rDbY', title: '#16 How to do customer interviews?| Rob Fitzpatrick, author of "The Mom Test"', channel: '', lang: 'en' }],
  'fo-customer/fo-verbatim': [{ id: 'C4nYxZxteJY', title: 'Affinity Diagramming: Collaborate, Sort and Prioritize UX Ideas', channel: '', lang: 'en' }],
  'fo-customer/fo-price': [{ id: 'jwXlo9gy_k4', title: 'Kevin Hale - Startup Pricing 101', channel: '', lang: 'en' }],
  'fo-team/fo-role': [{ id: '0yu35g_Xmh8', title: 'Astuces et limites de la fiche de poste', channel: '', lang: 'fr' }],
  'fo-team/fo-decide': [{ id: 'gsSkijSm0YE', title: 'KEEP A DECISION JOURNAL', channel: '', lang: 'en' }],
  'fo-team/fo-keep': [{ id: 'IDum27NVzhk', title: 'Comment déléguer les tâches ? Savoir manager efficacement quand on est entrepreneur', channel: '', lang: 'fr' }],

  // metier-product
  'pr-problem/pr-problem': [{ id: 'vDWG4hBQ6n8', title: 'How to Define A Problem Statement & Your Product\'s Story', channel: '', lang: 'en' }],
  'pr-problem/pr-triage': [{ id: 'T1Hwl4PtAUk', title: 'Stop Guessing. How to Organize Customer Feedback That Guides Your Roadmap', channel: '', lang: 'en' }],
  'pr-problem/pr-no': [{ id: 'eYTz8Qce1qA', title: 'The Art of Saying No by Mina Radhakrishnan at Mind the Product San Francisco', channel: '', lang: 'en' }],
  'pr-spec/pr-spec': [{ id: '0e_uS5BZ6m4', title: 'PO / PM : comment rédiger des specs fonctionnelles', channel: '', lang: 'fr' }],
  'pr-spec/pr-edges': [
    { id: 'eFbyaTdWxJI', title: 'Why Edge Cases are Important in UX', channel: '', lang: 'en' },
    { id: 'MUh3xyvEWDE', title: 'Empty States in Application Design: 3 Guidelines', channel: '', lang: 'en' },
  ],
  'pr-spec/pr-mock': [{ id: 'jjfEEGuD1L8', title: 'STITCH : l\'IA de Google qui crée vos sites et vos apps', channel: '', lang: 'fr' }],
  'pr-ship/pr-stop': [{ id: '1nsBdgVlE8w', title: 'Product Success Metrics', channel: '', lang: 'en' }],
  'pr-ship/pr-notes': [{ id: 'hqDdDN1Iew0', title: 'Release Notes: Best Practices and Real-life Examples', channel: '', lang: 'en' }],
  'pr-ship/pr-post': [{ id: '9JYVOUKNQ3A', title: 'How to run a Post-Mortem meeting, step-by-step', channel: '', lang: 'en' }],

  // metier-sales
  'sa-prospect/sa-brief': [{ id: 'dwb0trBr6dU', title: 'Prospecting Tips and Tricks - Researching your Prospects before Cold Calling', channel: '', lang: 'en' }],
  'sa-prospect/sa-first': [
    { id: 'VwpZYc2g_OE', title: 'Rédiger un email de prospection B2B : Méthode et exemple', channel: '', lang: 'fr' },
    { id: 'UGX9P9Uxyr4', title: 'How To Write Cold Email CTA\'s', channel: '', lang: 'en' },
  ],
  'sa-prospect/sa-follow': [{ id: '4_xEJbHgmAQ', title: 'Relancer un prospect : 11 techniques efficaces de relance client', channel: '', lang: 'fr' }],
  'sa-meeting/sa-prep': [{ id: 'ISYDN_t0xzk', title: 'Plan de découverte : Méthode complète et exemple de questions client', channel: '', lang: 'fr' }],
  'sa-meeting/sa-notes': [{ id: 'f7pjmGvVBls', title: 'Compte rendu de réunion : comment bien le faire ?', channel: '', lang: 'fr' }],
  'sa-meeting/sa-object': [{ id: '5yKQqLR2Wkw', title: 'Traitement des objections : comment répondre aux objections en 3 étapes - Technique de vente', channel: '', lang: 'fr' }],
  'sa-close/sa-proposal': [{ id: 'N0kwdXcNicY', title: 'Rédiger une proposition commerciale qui vend : la structure parfaite', channel: '', lang: 'fr' }],
  'sa-close/sa-price': [{ id: 'uZbdW227eBQ', title: 'What top sales reps say when prospects ask "how much is it?"', channel: '', lang: 'en' }],
  'sa-close/sa-after': [{ id: 'I4cQsM3xJAo', title: 'Onboarding client = début de la fidélisation !', channel: '', lang: 'fr' }],
}
