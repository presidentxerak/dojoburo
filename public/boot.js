/* Ce qui doit tourner AVANT le premier pixel, et que la CSP autorise.
 *
 * Deux choses arrivent ici, et elles étaient toutes les deux écrites en ligne
 * dans index.html — donc silencieusement bloquées en production.
 *
 * La politique de sécurité du site (vercel.json) dit `script-src 'self'` SANS
 * `'unsafe-inline'`. Un `<script>` en ligne et un attribut `onload="…"` sont
 * alors refusés par le navigateur, sans que rien ne casse visiblement : le
 * thème n'était pas posé, et la feuille de style des polices restait en
 * `media="print"` pour toujours — c'est-à-dire que le site aurait perdu sa
 * typographie entière. Le serveur de prévisualisation n'envoie pas la CSP, donc
 * aucune épreuve navigateur ne pouvait le voir.
 *
 * Un fichier servi depuis la même origine passe. C'est la seule différence, et
 * elle décide si ce code s'exécute.
 *
 * Il est chargé de façon SYNCHRONE dans le <head> : c'est ce qui lui permet de
 * tourner avant que la feuille de style ne peigne quoi que ce soit. Le faire
 * depuis React garantirait la bascule blanche à chaque chargement.
 */
(function () {
  /* ---- 1 · le thème, avant le premier pixel --------------------------- */
  //
  // UN SEUL THÈME, VIOLET DE NUIT, partout et pour tout le monde. Demandé
  // explicitement : « un fond violet très foncé pour tous les backgrounds de
  // l'app ». Un thème clair ne peut pas coexister avec cette phrase, donc il
  // n'existe plus : ni sélecteur dans les réglages, ni préférence lue.
  //
  // HISTOIRE · le produit a suivi le système, puis a été clair partout, puis
  // sombre par défaut avec un clair au choix. Un visiteur qui avait coché
  // « clair » à cette époque gardait l'herbe verte du jeu pendant que tout le
  // monde voyait la nuit : sa marque est effacée ici, une fois, pour qu'il
  // voie la même application que les autres.
  //
  // La marque reste posée sur <html> parce que toute la feuille de style lit
  // ses jetons sous :root[data-theme='dark'] · c'est elle qui les allume.
  try { localStorage.removeItem('dojoburo.theme') } catch (e) { /* navigation privée */ }
  document.documentElement.setAttribute('data-theme', 'dark')
  // La barre du navigateur prend le violet de la page · une encoche d'une
  // autre couleur au-dessus de l'app se lit comme un défaut d'affichage.
  var m = document.querySelector('meta[name="theme-color"]')
  if (m) m.setAttribute('content', '#0a0514')

  /* ---- 1b · l'affichage clair du jeu, s'il a été choisi ----------------- */
  //
  // DEMANDÉ ENSUITE : « ajoute un affichage light mode ». Le violet de nuit
  // reste l'affichage par défaut et la marque data-theme ne change pas (toute
  // la feuille lit ses jetons dessous). Le clair est un CHOIX de l'élève,
  // fait dans Profil > Paramètres, rangé sous une autre clé que l'ancien
  // réglage effacé plus haut ('dojoburo.look' : dark, light ou system), et
  // posé ici sur <html data-look="light"> avant le premier pixel : le poser
  // depuis React ferait clignoter la nuit à chaque chargement.
  try {
    var look = localStorage.getItem('dojoburo.look')
    var light = look === 'light' || (look === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
    if (light) {
      document.documentElement.setAttribute('data-look', 'light')
      if (m) m.setAttribute('content', '#f4f0ff')
    }
  } catch (e) { /* navigation privée : la nuit */ }

  /* ---- 2 · la police, sans bloquer le premier pixel -------------------- */
  // Une feuille de style distante est BLOQUANTE au rendu : tant qu'elle n'est
  // pas arrivée, le navigateur ne peint rien. Tant que Google répond vite, cela
  // ne se voit pas. Quand il ne répond pas — pare-feu d'entreprise, pays qui le
  // filtre, réseau qui avale la requête sans la refuser — la page reste BLANCHE
  // jusqu'à l'abandon du navigateur : mesuré à 12 901 ms contre 266 ms une fois
  // la feuille sortie du chemin critique.
  //
  // `media="print"` l'en retire ; on la remet pour l'écran dès qu'elle arrive.
  // L'écouteur est posé ICI, en JavaScript, et non par un attribut `onload=` —
  // que la même politique refuserait.
  var link = document.querySelector('link[data-font]')
  if (link) {
    var show = function () { link.media = 'all' }
    if (link.sheet) show()
    else {
      link.addEventListener('load', show)
      // Et si elle n'arrive jamais, on n'attend pas indéfiniment pour rien :
      // la police de secours système est déjà à l'écran, c'est ce qui compte.
      link.addEventListener('error', function () { /* on garde la police système */ })
    }
  }
})()
