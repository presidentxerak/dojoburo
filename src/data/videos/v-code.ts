// LES VIDÉOS · Coder une app avec Claude Code. Voir ./types : chaque identifiant vient d'un
// résultat de recherche réel, jamais d'une supposition.
import type { Video } from './types'

export const V_CODE: Record<string, Video[]> = {
  // Le terminal
  'ca-terminal/ca-shell': [
    { id: 'ex2unkBr0jM', title: 'Intro: Le Shell, l\'invite de commande et le terminal', channel: '', lang: 'fr' },
  ],
  'ca-terminal/ca-files': [
    { id: 'Ny2bHrstFxs', title: '2-commande de base linux : cd (change Directory) et chemin absolu et relatif', channel: '', lang: 'fr' },
    { id: 'iVc_W5ghOKo', title: 'Commandes de base UNIX (date cal mkdir cat touch ls cd rm mv cp pwd)', channel: '', lang: 'fr' },
  ],
  'ca-terminal/ca-node': [
    { id: 'ha6QoLJ53bc', title: 'Démarrer un Projet React & Node.js', channel: '', lang: 'fr' },
    { id: 'RbZyQWOEmD0', title: 'How To Setup Your First React + TypeScript Project With Vite', channel: '', lang: 'en' },
  ],
  'ca-terminal/ca-env': [
    { id: 'TPCRK0ypWoA', title: 'Variables d\'environnement - Ligne de commande LINUX', channel: '', lang: 'fr' },
    { id: 'v5n96CX339g', title: 'What are Environment Variables? Simply Explained', channel: '', lang: 'en' },
  ],

  // Git et GitHub
  'ca-git/ca-commit': [
    { id: '-QHFh16mBUE', title: 'Ajouter et modifier un fichier avec git', channel: '', lang: 'fr' },
    { id: '12XaNaJGgDA', title: 'The Git Index Explained How to stage a file with Git add', channel: '', lang: 'en' },
  ],
  'ca-git/ca-branch': [
    { id: 'EIT6pQ7jCmE', title: 'Git - 8. Les branches en mode développement (merge, checkout...)', channel: '', lang: 'fr' },
    { id: 'XX-Kct0PfFc', title: 'Git & GitHub Tutorial for Beginners #9 - Merging Branches (& conflicts)', channel: '', lang: 'en' },
  ],
  'ca-git/ca-github': [
    { id: 'BTyxX53OWmw', title: '[5/??] Push/Pull/Clone - Git & GitHub pour Débutants - Tutoriel français 2018', channel: '', lang: 'fr' },
    { id: 'U5xYWy6zJGY', title: '[8/??] Pull Request & Tags - Git & GitHub pour Débutants - Tutoriel français 2018', channel: '', lang: 'fr' },
  ],
  'ca-git/ca-ignore': [
    { id: 'OHQ1De3tA6k', title: 'Ignorer Les Fichiers Avec Gitignore Node', channel: '', lang: 'fr' },
    { id: 'CNCE1gts2Yw', title: 'GitHub branch rules (protect your git branches)', channel: '', lang: 'en' },
  ],

  // Claude Code
  'ca-claude/ca-start': [
    { id: 'BW-Ue9FQRTI', title: 'Tutoriel Claude Code pour Débutants : Code SANS Savoir Coder', channel: '', lang: 'fr' },
    { id: 'AOfogJZ70OQ', title: 'Mastering Claude Code in 30 Minutes: A Complete Guide by Anthropic', channel: 'Anthropic', lang: 'en' },
  ],
  'ca-claude/ca-context': [
    { id: 'gnekNSocVG8', title: 'Claude Code Ep3 : CLAUDE.md, MEMORY et settings.json (rendez-le 10x plus efficace)', channel: '', lang: 'fr' },
    { id: '-ZIVhLt11Dc', title: 'Claude /commands #2, /clear vs /compact: Get Context Management Right', channel: '', lang: 'en' },
  ],
  'ca-claude/ca-plan': [
    { id: 'wwWUkBGTLUE', title: 'Claude Code Plan Mode: Think Before You Build', channel: '', lang: 'en' },
    { id: 'xJQuF02NAK8', title: 'The Explore → Plan → Code → Commit workflow in Claude Code', channel: '', lang: 'en' },
  ],
  'ca-claude/ca-review': [
    { id: 'ApRygPY_bs4', title: 'How to Review Code Using Claude Code', channel: '', lang: 'en' },
    { id: 'gv0WHhKelSE', title: 'Claude Code best practices', channel: '', lang: 'en' },
  ],
  'ca-claude/ca-more': [
    { id: 'DAaw7Ao_zUc', title: 'AI Coding Agents Advanced Guide: Subagents, Skills, MCP, LSP, Commands, AGENTS.md, Hooks Explained', channel: '', lang: 'en' },
    { id: 'O-tXCw6EhmU', title: 'Skills, Hooks & Slash Commands in Claude Code (Module 3)', channel: '', lang: 'en' },
  ],

  // Supabase
  'cb-supabase/cb-sb-start': [
    { id: '6X5gAwpTfek', title: 'Cours complet débutant supabase (l\'alternative open source à firebase)', channel: '', lang: 'fr' },
    { id: 'htzj9SkkhhA', title: 'The new way to do Auth Keys in Supabase', channel: '', lang: 'en' },
  ],
  'cb-supabase/cb-sb-tables': [
    { id: 'oX_xHLkNRns', title: 'Web Developers: 7-Establishing Table Relationships in Supabase with Foreign Keys', channel: 'SkillBakery Studio', lang: 'en' },
    { id: 'tW1HO7i9EIM', title: 'React Supabase CRUD Tutorial', channel: '', lang: 'en' },
  ],
  'cb-supabase/cb-sb-auth': [
    { id: 'x38PWNZhSEM', title: 'React + Supabase Authentication Tutorial', channel: '', lang: 'en' },
    { id: 'S7oL-9FGv1Q', title: 'How to Implement Email Logins Using Magic Links with Supabase and React', channel: '', lang: 'en' },
  ],
  'cb-supabase/cb-sb-rls': [
    { id: 'tKMN7AelIZs', title: 'Supabase Row Level Security (RLS) 101', channel: '', lang: 'en' },
    { id: 'Kx5nHBmIxyQ', title: 'How to Manage Database Migration Using Supabase CLI - SupabaseTips', channel: '', lang: 'en' },
  ],

  // Vercel
  'cb-vercel/cb-vc-import': [
    { id: 'myur0GzCkR8', title: 'REACT + VITE - #8/9 - React VITE - Déployer sur Vercel', channel: '', lang: 'fr' },
    { id: '1z6c0d4gZmE', title: 'Déployer son site sur VERCEL - PARTIE 1', channel: '', lang: 'fr' },
  ],
  'cb-vercel/cb-vc-envs': [
    { id: 'g9-TgwMXnIU', title: 'How to Set Up Vercel Preview Deployment - Step by Step 2026', channel: '', lang: 'en' },
    { id: '7JjFjk4oCq4', title: 'Set Up Environment Variables in Vercel', channel: '', lang: 'en' },
  ],
  'cb-vercel/cb-vc-ops': [
    { id: 'SstoPI4QyOc', title: 'How To Add Custom Domain To Vercel (Full Guide)', channel: '', lang: 'en' },
    { id: '6CTdji6s1GQ', title: 'Detect regressions and instantly rollback with the Vercel CLI', channel: '', lang: 'en' },
  ],

  // Le projet Habitudes
  'cb-projet/cb-pj-spec': [
    { id: 'g3g5drJNNdM', title: 'Écrire de bons critères d\'acceptance', channel: '', lang: 'fr' },
    { id: 'yH-qzlkzPbs', title: 'Spec-Driven Development with Claude Code: A Practical Guide', channel: '', lang: 'en' },
  ],
  'cb-projet/cb-pj-scaffold': [
    { id: 'h7QJL2_gEXA', title: 'How to Use CLAUDE.md in Claude Code in 5 Minutes', channel: '', lang: 'en' },
    { id: 'RbZyQWOEmD0', title: 'How To Setup Your First React + TypeScript Project With Vite', channel: '', lang: 'en' },
  ],
  'cb-projet/cb-pj-data': [
    { id: 'cnJ7luAg_fU', title: 'Voici comment Claude Code setup ma base de données Supabase', channel: '', lang: 'fr' },
    { id: '5OdmR1-3jvQ', title: 'Setup Supabase with Claude Code (Step by Step Guide)', channel: '', lang: 'en' },
  ],
  'cb-projet/cb-pj-deploy': [
    { id: 'uimJYtZ2iqQ', title: 'How to DEPLOY a Vite React App on Vercel (Step by Step)', channel: '', lang: 'en' },
    { id: 'V6khiLrp9Xo', title: 'How to Connect Vercel to Supabase (Step by Step) 2026', channel: '', lang: 'en' },
  ],
  'cb-projet/cb-pj-iterate': [
    { id: 'i3nPpRzPvU4', title: 'Test-driven development (TDD) with Claude Code', channel: '', lang: 'en' },
    { id: 'hYZdIwFIy-c', title: 'Red Green Refactor is OP With Claude Code', channel: '', lang: 'en' },
  ],

  // En production
  'cb-prod/cb-pr-security': [
    { id: 'MA09FD_yGKo', title: 'MASTER Supabase Security', channel: '', lang: 'en' },
    { id: '3yDr4mrZXAw', title: 'Supabase Row Level Security (RLS): Common Mistakes & Real Risks', channel: '', lang: 'en' },
  ],
  'cb-prod/cb-pr-frugal': [
    { id: '8Wwff_ljmks', title: 'Économise 90% de tes tokens Claude Code (ou Cursor, Codex...)', channel: '', lang: 'fr' },
    { id: 'XfYj4jU1mcI', title: 'How to Optimize Token Usage in Claude Code', channel: '', lang: 'en' },
  ],
  'cb-prod/cb-pr-maintain': [
    { id: '22XrqdIe8oQ', title: 'Keeping your dependencies updated automatically with Dependabot', channel: '', lang: 'en' },
    { id: 'KAbp3ziQRxo', title: 'How to Use Sentry with React.js for Error Monitoring', channel: '', lang: 'en' },
  ],
}
