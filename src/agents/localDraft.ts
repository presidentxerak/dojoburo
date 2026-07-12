// Local, no-model fallback for deliverables. When the server can't run (no model
// configured yet, or unreachable), the CEO still produces a useful STARTER DRAFT
// from the company description — clearly labelled as a local template, so the app
// is never "dead" while the operator wires a real model (free cascade / Claude).
import type { Deliverable } from './workApi'

const NOTE = '> ⚠️ **Brouillon local** — généré sans modèle IA (aucune clé configurée sur ce déploiement). Connecte une clé Claude (Studio → Facturation) ou active la cascade gratuite pour la version rédigée par l’IA.\n'

const clean = (s: string) => (s || '').trim().replace(/\.$/, '')
const nameFrom = (brief: string) => {
  const w = clean(brief).split(/\s+/).slice(0, 3).join(' ')
  return w || 'ton entreprise'
}

function body(taskId: string, brief: string): string {
  const co = nameFrom(brief)
  const about = clean(brief) || 'une entreprise en démarrage'
  switch (taskId) {
    case 'strategy':
      return `# Stratégie & OKRs — ${co}\n\n**Vision (1 phrase).** Devenir la référence pour « ${about} ».\n\n### 3 paris stratégiques\n1. **Acquisition** — un canal principal (Meta ads) qui ramène des clients à coût maîtrisé.\n2. **Activation** — une offre claire et une page qui convertit.\n3. **Rétention** — une raison de revenir chaque semaine.\n\n### OKRs du trimestre\n- **O1 — Trouver le product-market fit.** KR1 : 50 clients payants · KR2 : 40 % de rétention à 4 semaines · KR3 : NPS > 40.\n- **O2 — Rendre l’acquisition rentable.** KR1 : CAC < 20 € · KR2 : 3 créas Meta gagnantes · KR3 : taux de conversion page > 3 %.\n- **O3 — Poser les bases.** KR1 : site en ligne · KR2 : paiement branché · KR3 : 1 séquence d’emails.\n\n**Métrique n°1 à suivre :** clients payants actifs par semaine.`
    case 'website':
      return `# Site web — ${co}\n\n### Hero\n- **Titre :** ${co}, ${about} — simplement.\n- **Sous-titre :** La façon la plus rapide d’obtenir un résultat, sans prise de tête.\n- **Bouton :** Commencer\n\n### Bénéfices (3)\n1. **Rapide** — prêt en quelques minutes.\n2. **Simple** — aucune courbe d’apprentissage.\n3. **Sûr** — tes données restent protégées.\n\n### Comment ça marche\n1. Tu t’inscris. 2. Tu configures en 2 clics. 3. Tu obtiens le résultat.\n\n### Tarifs (aperçu)\nStarter · Pro · Team — voir la carte « Offres & paiements ».\n\n### FAQ\n- *Y a-t-il un essai gratuit ?* Oui.\n- *Puis-je annuler ?* Quand tu veux.\n\n### CTA final\n**Prêt ? Commencer maintenant.**\n\n**SEO** — Titre : « ${co} · ${about} ». Meta : « ${co}, ${about}. Essaie gratuitement. »`
    case 'offer':
      return `# Offre & tarifs — ${co}\n\n**Offre principale.** L’essentiel de « ${about} » dans un produit simple et efficace.\n\n| Tier | Prix /mois | Inclus |\n|---|---|---|\n| **Starter** | 9 € | Fonctions de base, support email |\n| **Pro** ⭐ | 29 € | Tout Starter + fonctions avancées + priorité |\n| **Team** | 79 € | Tout Pro + rôles, SSO, accompagnement |\n\n**Recommandé :** Pro (le meilleur rapport valeur/prix).\n\n**Page de paiement (copie).** « Rejoins des centaines de clients. Essai sans engagement, annulation en un clic, garantie 14 jours. »\n\n**Upsells :** onboarding premium · pack de crédits · module avancé.`
    case 'ads':
      return `# Créas Meta (Facebook & Instagram) — ${co}\n\n${[1, 2, 3, 4, 5].map((i) => `### Variante ${i}\n- **Texte :** Découvre ${co} — ${about}. ${['Essaie gratuitement.', 'Rejoins-nous aujourd’hui.', 'Résultat garanti.', 'Simple et rapide.', 'Offre de lancement.'][i - 1]}\n- **Accroche :** ${['Enfin simple', 'Gagne du temps', 'Fait pour toi', 'Teste gratuitement', 'Offre limitée'][i - 1]}\n- **Placement :** ${['Feed', 'Reels', 'Stories', 'Feed', 'Reels'][i - 1]}\n- **Visuel :** ${['photo produit', 'courte vidéo démo', 'témoignage client', 'avant/après', 'offre à l’écran'][i - 1]}\n- **Audience :** intérêts liés à « ${about} » + lookalike 1 % des clients.`).join('\n\n')}\n\n**Plan de test :** lance les 5 avec 5 €/jour chacune, garde les 2 meilleures après 3 jours.`
    case 'outreach':
      return `# Prospection — ${co}\n\n**ICP.** Décideurs (fondateur, growth, marketing) dans des entreprises concernées par « ${about} », 1–50 personnes.\n\n**Où les trouver :** LinkedIn, communautés du secteur, salons en ligne.\n\n**15 profils cibles (types) :** fondateur de startup, responsable growth, marketeur solo, e-commerçant, coach, agence, freelance, consultant, gérant de PME, responsable produit, CM, SaaS early-stage, créateur de contenu, formateur, indie hacker.\n\n### Séquence email (3 étapes)\n1. **J0 —** *Objet : une idée pour ${about}* — « Bonjour, j’ai vu que vous travaillez sur X. On aide à … en 2 lignes. Ça vous parle ? »\n2. **J3 —** *Relance douce* — « Petit up : voici un exemple concret de résultat. »\n3. **J7 —** *Dernière touche* — « Je ferme la boucle — si le timing n’est pas bon, dites-moi quand revenir. »`
    default:
      return `# ${taskId} — ${co}\n\nBrouillon de départ pour « ${about} ». Édite-le, puis connecte un modèle pour la version rédigée par l’IA.`
  }
}

const TITLES: Record<string, string> = {
  strategy: 'Stratégie & OKRs', website: 'Site web', offer: 'Offre & tarifs',
  ads: 'Créas Meta', outreach: 'Prospection',
}

export function localDraft(taskId: string, brief: string): Deliverable {
  return {
    taskId,
    title: `${TITLES[taskId] || taskId} (brouillon local)`,
    format: 'markdown',
    markdown: NOTE + '\n' + body(taskId, brief),
    model: 'brouillon local',
  }
}
