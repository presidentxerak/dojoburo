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
  'dojoburo.avatar',
  'dojoburo.avatar.seed',
  'dojoburo.sound',
  // les points et les succès (game/achievements) · effacés avec le reste
  'dojo.feats',
]

export function eraseLocalData() {
  for (const k of ERASED_KEYS) {
    try { localStorage.removeItem(k) } catch { /* stockage refusé */ }
  }
}

/** LA PORTABILITÉ (RGPD) · demandé : « ajoute dans les paramètres la partie
 *  legal et privacy, RGPD ». Tout ce que ce navigateur garde, dans un fichier
 *  JSON : les mêmes clés que celles que l'effacement retire, plus l'accès aux
 *  formations. Lu ici, et non par un écran du jeu, qui ne touche jamais le
 *  stockage (voir scripts/test-game). */
export function exportLocalData() {
  const out: Record<string, unknown> = { exportedAt: new Date().toISOString(), source: location.origin }
  for (const k of [...ERASED_KEYS, 'dojo.access']) {
    try {
      const v = localStorage.getItem(k)
      if (v !== null) { try { out[k] = JSON.parse(v) } catch { out[k] = v } }
    } catch { /* stockage refusé */ }
  }
  const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'dojoburo-mes-donnees.json'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 2000)
}
