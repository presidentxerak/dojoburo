// « TOUT EFFACER » · ce que le bouton de l'onglet Paramètres retire de ce
// navigateur.
//
// La progression des cours, la partie de Dojoburo, le pseudonyme du clan, les
// réglages et le son. La langue, la session de connexion et les reçus de
// paiement restent : les perdre ne rendrait rien plus propre, seulement plus
// pénible à retrouver (un reçu est la preuve d'un achat que le compte n'a pas
// encore enregistré). L'accès aux formations est oublié à part, par
// game/access · c'est lui qui le range.
//
// Connecté, ce qui a été synchronisé reste en ligne et revient à la
// prochaine synchronisation : le serveur fusionne, il ne remplace pas.
export const ERASED_KEYS = [
  'dojoburo.academy.v1',
  'dojoburo.sim.v1',
  'dojoburo.clan.pseudo',
  'dojoburo.settings',
  'dojoburo.look',
  'dojoburo.sound',
]

export function eraseLocalData() {
  for (const k of ERASED_KEYS) {
    try { localStorage.removeItem(k) } catch { /* stockage refusé */ }
  }
}
