// Quelles entrées de la bibliothèque sont OUVERTES.
//
// Cette liste existe en double, et c'est délibéré — le même choix que les
// modes d'effort et les poids de tâche, qui sont déclarés côté client pour
// être montrés et côté serveur pour être appliqués. Un navigateur ne décide
// pas de ce qu'il a le droit de lire ; c'est le serveur qui tranche, donc le
// serveur a besoin de sa propre copie.
//
// Deux endroits veut dire qu'ils peuvent diverger, et la divergence ici coûte
// de l'argent dans un sens (une entrée payante servie gratuitement) ou de la
// confiance dans l'autre (une entrée annoncée gratuite qui demande à payer).
// scripts/test-library.mjs compare donc les deux listes à chaque construction,
// exactement comme check-content compare les modes d'effort.
export const FREE_SLUGS = new Set<string>([
  // Un prompt d'édition · court, immédiatement utile, et il montre la forme
  // que prennent tous les autres.
  'cut-it-in-half',
  // L'audit de coût · c'est le pilier du produit. Le faire payer reviendrait
  // à vendre le fait de découvrir qu'on dépense trop.
  'prompt-cost-audit',
])
