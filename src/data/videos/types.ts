// LES VIDÉOS DES COURS · demandé : « On va ajouter dans toutes nos formations
// des vidéos youtube qui traitent chacun des sujets évoqués dans les
// formations ».
//
// UNE VIDÉO N'EST JAMAIS INVENTÉE. Chaque identifiant vient d'un résultat de
// recherche réel (l'adresse youtube.com/watch?v=… trouvée), avec le titre et
// la chaîne tels qu'ils y figurent. Une leçon sans vidéo trouvée n'en montre
// pas, plutôt qu'une vidéo approximative. Le lecteur ne se charge qu'au clic,
// sur le domaine sans cookie de YouTube (voir lib/embeds et vercel.json).

export interface Video {
  /** l'identifiant YouTube, onze caractères */
  id: string
  /** le titre de la vidéo, tel quel (sans emoji ni tiret long) */
  title: string
  /** la chaîne qui la publie */
  channel: string
  /** la langue parlée dans la vidéo */
  lang: 'fr' | 'en'
}

/** La clé d'une leçon · la même que data/enrich et data/deep. */
export const videoKey = (moduleId: string, levelId: string) => `${moduleId}/${levelId}`
