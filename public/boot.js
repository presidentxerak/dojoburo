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
  // SOMBRE PAR DÉFAUT, sur tous les appareils. Un choix enregistré l'emporte
  // toujours · quelqu'un qui a coché Clair l'a voulu · et la préférence du
  // SYSTÈME n'est toujours pas consultée.
  //
  // C'ÉTAIT L'INVERSE, avec une raison écrite ici : « dojoburo est une salle de
  // tatami, de papier de riz et de bois, un décor clair ; servi dans une coque
  // noire, le produit arrivait à contre-emploi ». La raison tenait tant que
  // l'interface était une page claire posée autour d'une salle claire. Elle
  // est devenue un JEU, dans le style des jeux de gestion mobiles : une barre
  // de nuit, des panneaux d'ardoise, des boutons brillants qui ressortent sur
  // le sombre. La salle de tatami, elle, est dans les vignettes, et elle y
  // gagne à être vue sur du sombre comme une maquette éclairée.
  //
  // La décision a été demandée explicitement, et elle se prend toujours ICI.
  //
  // C'EST ICI que la décision se prend, et nulle part ailleurs. `loadTheme`
  // dans store.ts relit la marque posée par ce fichier : la changer là-bas
  // sans la changer ici ne produit rigoureusement aucun effet — j'ai perdu
  // une demi-heure à le découvrir, parce que ce fichier est dans `public/` et
  // qu'aucune recherche dans `src/` ne le trouve.
  var t = null
  try { t = localStorage.getItem('dojoburo.theme') } catch (e) { /* navigation privée */ }
  if (t !== 'dark' && t !== 'light') t = 'dark'
  document.documentElement.setAttribute('data-theme', t)
  // La barre du navigateur suit aussi · une encoche noire au-dessus d'une page
  // blanche se lit comme un défaut d'affichage.
  var m = document.querySelector('meta[name="theme-color"]')
  // la teinte de la barre du jeu, pas un noir pur · la barre du navigateur et
  // l'en-tête se raccordent alors sans marche d'escalier.
  if (m) m.setAttribute('content', t === 'dark' ? '#0f1120' : '#7fbf3a')

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
