// LES DEUX LANGUES DANS LA MÊME VALEUR · le primitif, et rien d'autre.
//
// POURQUOI CE FICHIER EXISTE SÉPARÉMENT. Le programme généraliste et les
// formations métier portent tous deux du texte bilingue, et le second doit
// pouvoir être écrit sans dépendre du premier au moment où il s'évalue. Poser
// `B` dans data/curriculum et le lire depuis data/trades aurait fait un cycle
// d'imports : à l'exécution, `B` n'existe pas encore quand le second fichier
// s'évalue, et le programme entier tombe au chargement.
//
// Trois lignes utiles, donc, dans un fichier qui ne dépend de rien.
import type { Lang } from '../i18n/lang'

export interface Bi { en: string; fr: string }

/** Le raccourci d'écriture · `B('Run it', 'Lancez-le')`. */
export const B = (en: string, fr: string): Bi => ({ en, fr })

/** La valeur dans la langue lue · le seul chemin, comme partout ailleurs. */
export const say = (b: Bi, lang: Lang): string => (lang === 'fr' ? b.fr : b.en)
