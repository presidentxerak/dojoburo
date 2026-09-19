// LE DICTIONNAIRE · chaque phrase de l'interface, dans les deux langues, sur
// deux lignes qui se lisent ensemble.
//
// Voir l'en-tête de i18n/lang pour le raisonnement. Le point essentiel, répété
// ici parce que c'est ici qu'on serait tenté d'y déroger : on ne sépare pas
// l'anglais et le français dans deux fichiers. Deux fichiers parallèles
// dérivent en silence, et personne ne relit un fichier de traduction.
//
// CE QUI ENTRE ICI, ET CE QUI N'Y ENTRE PAS.
//
// Ici : les phrases de l'INTERFACE. Navigation, boutons, libellés, titres de
// sections, messages d'état. Elles sont courtes, elles se répètent, et elles
// n'appartiennent à aucun cours.
//
// PAS ici : la PROSE DES COURS. Les leçons, les fiches d'agents, les leviers
// de sobriété, l'iceberg. Ce sont des milliers de mots qui vivent déjà dans
// des fichiers de données structurés, avec leurs propres gardes, et les
// arracher pour les mettre dans un dictionnaire plat détruirait cette
// structure. Ils seront traduits DANS leur fichier, en ajoutant une seconde
// version à côté de la première, cours par cours. Voir la note de couverture
// plus bas : ce qui n'est pas traduit doit être COMPTÉ, pas oublié.
//
// LA CLÉ DÉCRIT L'ENDROIT, pas le texte anglais. `nav.pricing`, jamais
// `Pricing` : une clé qui est sa propre valeur anglaise devient fausse dès
// qu'on reformule l'anglais, et on se retrouve à renommer des clés pour
// corriger une virgule.
import { type Lang } from './lang'

export interface Entry { en: string; fr: string }

export const DICT = {
  // ---- la navigation du site --------------------------------------------
  // Les libellés des PILIERS ne sont pas ici : ils viennent de
  // data/positioning, qui est leur source unique pour les six surfaces qui
  // les affichent. Les traduire demande d'ajouter le français DANS le pilier,
  // pas d'en faire une copie ici qui divergerait au premier renommage.
  'nav.pricing': { en: 'Pricing', fr: 'Tarifs' },
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.frameworks': { en: 'Frameworks', fr: 'Frameworks' },
  'nav.guide': { en: 'App setup guide', fr: 'Guide de branchement' },
  'nav.crew': { en: 'The crew', fr: "L'équipage" },
  'nav.terms': { en: 'Terms', fr: 'Conditions' },
  'nav.privacy': { en: 'Privacy', fr: 'Confidentialité' },

  // ---- l'en-tête ---------------------------------------------------------
  'header.enter': { en: 'Enter the dojo', fr: 'Entrer dans le dojo' },
  'header.free': { en: 'free', fr: 'gratuit' },
  'header.signin': { en: 'Sign in', fr: 'Se connecter' },
  'header.signup': { en: 'Sign up', fr: "S'inscrire" },
  'header.menu': { en: 'Menu', fr: 'Menu' },
  'header.mydojo': { en: 'My dojo', fr: 'Mon dojo' },
  'header.enterArrow': { en: 'Enter the dojo', fr: 'Entrer dans le dojo' },
  'header.close': { en: 'Close', fr: 'Fermer' },

  // ---- le sélecteur de langue -------------------------------------------
  // Le libellé du bouton est dans la langue COURANTE, mais les deux choix
  // qu'il ouvre portent chacun leur propre langue · voir LANG_LABEL.
  'lang.label': { en: 'Language', fr: 'Langue' },
  'lang.switch': { en: 'Change language', fr: 'Changer de langue' },

  // ---- ce qui est partiellement traduit ---------------------------------
  // L'AVERTISSEMENT LE PLUS IMPORTANT DU LOT.
  //
  // Traduire un site de cette taille prend plusieurs lots. Entre le premier et
  // le dernier, quelqu'un qui choisit le français verra du français autour
  // d'un cours en anglais. Le pire serait de ne rien dire : la personne croit
  // à un défaut, ne sait pas si le reste viendra, et repart. On le dit donc à
  // l'endroit exact où ça se produit, avec le chiffre réel, calculé.
  'i18n.partial': {
    en: 'The interface is in French. The course content is still being translated.',
    fr: "L'interface est en français. Le contenu des cours est encore en cours de traduction.",
  },
  'i18n.partialShort': { en: 'Course text still in English', fr: 'Cours encore en anglais' },

  // ---- le pied de page ---------------------------------------------------
  'footer.built': { en: 'A training centre for AI agents', fr: "Un centre de formation aux agents IA" },
} as const satisfies Record<string, Entry>

export type Key = keyof typeof DICT

/** Le texte d'une clé dans une langue.
 *
 *  Une clé inconnue rend la clé elle-même plutôt que du vide : un libellé
 *  manquant qui affiche `nav.pricing` se voit et se corrige en une minute,
 *  alors qu'un bouton vide passe inaperçu jusqu'à ce que quelqu'un le
 *  signale. Le même raisonnement que pour un personnage sans visage. */
export function translate(key: Key | string, lang: Lang): string {
  const e = (DICT as Record<string, Entry>)[key]
  if (!e) return String(key)
  return e[lang] ?? e.en
}

/** Combien de clés le dictionnaire porte · dérivé, pour que la couverture
 *  annoncée soit mesurée et non affirmée. */
export const KEY_COUNT = Object.keys(DICT).length
