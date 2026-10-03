// LES VIDÉOS · étudiants, scientifiques, développeurs. Voir ./types : chaque identifiant vient d'un
// résultat de recherche réel, jamais d'une supposition.
import type { Video } from './types'

export const V_TRADES_D: Record<string, Video[]> = {
  // metier-student
  'st-course/st-rules': [
    { id: 'PX-7k0YCIrs', title: 'Is ChatGPT or Other AI Plagiarism or Academic Misconduct? Professor Explains', channel: '', lang: 'en' },
  ],
  'st-course/st-tutor': [
    { id: 'XDYilxy1dn8', title: 'Introducing ChatGPT Study Mode', channel: '', lang: 'en' },
    { id: 'DpTGjxuQDkg', title: 'ChatGPT pour les devoirs : 4 conseils pour l\'utiliser sans tricher', channel: '', lang: 'fr' },
  ],
  'st-course/st-explain': [
    { id: 'D7RCOjn9SHc', title: 'La technique FEYNMAN : la meilleure façon d\'apprendre n\'importe quoi rapidement', channel: '', lang: 'fr' },
    { id: 'jeXQDbuUFuM', title: 'Master Learning By Teaching The Feynman Technique Using AI', channel: '', lang: 'en' },
  ],
  'st-revise/st-cards': [
    { id: '-wIVqKh3sNc', title: 'Turn NOTES into ANKI Flashcards in SECONDS with ChatGPT (AI study hack)', channel: '', lang: 'en' },
  ],
  'st-revise/st-quiz': [
    { id: 'tIvzgSifYHM', title: 'Using ChatGPT to Generate Practice Exam Questions', channel: '', lang: 'en' },
  ],
  'st-revise/st-spaced': [
    { id: 'IBuCKV6Dfcs', title: 'Méthode de révision : la répétition espacée', channel: '', lang: 'fr' },
    { id: 'reIsGDyKz40', title: 'Méthode des J en médecine / Paces et révisions efficaces # 15', channel: '', lang: 'fr' },
  ],
  'st-exams/st-mock': [
    { id: 'IDZRfws4o8A', title: 'chatGPT, please build my mock tests ... Done', channel: '', lang: 'en' },
  ],
  'st-exams/st-cite': [
    { id: '4S5rnN3meFw', title: 'AI Hallucinations: Fact-Check AI Before You Hit Submit, AI Literacy for College Students', channel: '', lang: 'en' },
    { id: 'Tr4qUrPJvHY', title: 'Google Scholar : établir un lien avec les ressources documentaires de l\'Université', channel: '', lang: 'fr' },
  ],
  'st-exams/st-draft': [
    { id: '_DNC7qdfn30', title: 'Get ChatGPT to mark your essays', channel: '', lang: 'en' },
    { id: 'OxhZ2mQL4ak', title: 'How To Use ChatGPT for Essay Feedback', channel: '', lang: 'en' },
  ],

  // metier-scientist
  'sc-literature/sc-search': [
    { id: '7rVN2TRtiAg', title: 'Comment formuler une requête de recherche bibliographique facilement ?', channel: '', lang: 'fr' },
    { id: 'EAnZr7Kgbgo', title: 'Les opérateurs booléens : Les ingrédients pour une recherche efficace', channel: '', lang: 'fr' },
  ],
  'sc-literature/sc-read': [
    { id: '1Y3P9z5a30M', title: 'Comment faire une analyse critique d\'un article scientifique ? (Extrait de formation)', channel: '', lang: 'fr' },
  ],
  'sc-literature/sc-map': [
    { id: 'qod1J5xSd5s', title: 'Literature Synthesis 101: How to Synthesise In Your Literature Review - 5 Key Questions (+Examples )', channel: '', lang: 'en' },
  ],
  'sc-study/sc-hypothesis': [
    { id: 'sFbctDTNXTQ', title: 'Qu’est-ce qu’un énoncé falsifiable au sens de Karl Popper ? (27)', channel: '', lang: 'fr' },
  ],
  'sc-study/sc-protocol': [
    { id: 'aKiXFzj15dg', title: 'How to write a reusable, step-by-step protocol - ReproducibiliTeach', channel: '', lang: 'en' },
  ],
  'sc-study/sc-stats': [
    { id: 'CVv5Nc9yKPA', title: 'Quel test statistique choisir ?', channel: '', lang: 'fr' },
    { id: 'wtM7Zaz_9Kc', title: 'Intro: ChatGPT for Data Analysis using R or Python', channel: '', lang: 'en' },
  ],
  'sc-publish/sc-write': [
    { id: 'l2jY4iAaXiw', title: 'How to Write the Results for a Scientific Paper', channel: '', lang: 'en' },
    { id: 'gFK0csSNcCo', title: 'Discussion et Résultats : deux différences majeures (mais méconnues)', channel: '', lang: 'fr' },
  ],
  'sc-publish/sc-grant': [
    { id: 'SwAMotxoYrM', title: 'Getting Feedback on Your Proposal: Using ChatGPT for Constructive Criticism', channel: '', lang: 'en' },
    { id: 'DLpTnRUiJ9s', title: 'Inside the ERC evaluation process: What really gets funded', channel: '', lang: 'en' },
  ],

  // metier-developer
  'dv-frame/dv-map': [
    { id: 'JL8CkiExptc', title: 'How to use Claude to gain context and explore a repository\'s code base', channel: '', lang: 'en' },
    { id: 'gyQDyoJNXGI', title: 'Claude Code for Large Codebases', channel: '', lang: 'en' },
  ],
  'dv-frame/dv-spec': [
    { id: 'T1Yi0CrabWc', title: 'Spec-Driven Development: Build With AI the Right Way', channel: '', lang: 'en' },
    { id: 'DTw9X7MtU5s', title: 'VS Code - Let it Cook - Introducing Spec Kit for Spec-Driven Development! - Episode 13', channel: '', lang: 'en' },
  ],
  'dv-frame/dv-secrets': [
    { id: 'jnPb-Par-AI', title: 'Hide API Keys from AI', channel: '', lang: 'en' },
    { id: 'bjGGjDLuHpQ', title: 'AI Code Is Leaking Secrets: Why MCP & AI Tools Need Better Security', channel: '', lang: 'en' },
  ],
  'dv-build/dv-tests': [
    { id: 'i3nPpRzPvU4', title: 'Test-driven development (TDD) with Claude Code', channel: '', lang: 'en' },
  ],
  'dv-build/dv-debug': [
    { id: 'DqBSLR6pT2k', title: 'Debugging Made Easy: Fix Bugs Faster with Stack Traces & AI', channel: '', lang: 'en' },
  ],
  'dv-build/dv-deps': [
    { id: '82QwZ2ue8BA', title: 'Understanding AI Package Hallucination: The latest dependency security threat', channel: '', lang: 'en' },
    { id: 'dokYOAtc894', title: 'What is Slopsquatting?', channel: '', lang: 'en' },
  ],
  'dv-ship/dv-review': [
    { id: 'b2QkhmQ0sT0', title: 'How I Review AI Code - (Meta Senior Staff Engineer)', channel: '', lang: 'en' },
  ],
  'dv-ship/dv-docs': [
    { id: 'h829tNqrneM', title: 'How to write documentation with Copilot suggestions [5 of 6]', channel: '', lang: 'en' },
  ],
  'dv-ship/dv-commit': [
    { id: '5y4-0CcOpAs', title: 'Committing to clarity: The art of writing good git commit messages', channel: '', lang: 'en' },
    { id: 'WDaFN7rA7B0', title: 'GitHub Copilot for commit messages and pr code reviews', channel: '', lang: 'en' },
  ],
  'sc-publish/sc-review': [{ id: 'PJ2hKYTMyJA', title: 'How to peer review a journal article', channel: '', lang: 'en' }],
}
