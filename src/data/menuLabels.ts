// LES LIBELLÉS DU MENU QU'ON CLIQUE DEPUIS AILLEURS.
//
// Quatre épreuves du portail naviguent dans l'app en cliquant sur des entrées
// du menu, et elles recopiaient leur texte : « My companies », « How hard your
// team works ». Renommer une entrée cassait donc quatre fichiers d'un coup,
// avec des délais d'attente dépassés plutôt qu'un message clair, et il fallait
// lire trois traces pour comprendre qu'un libellé avait bougé.
//
// Ces quatre libellés vivent ici. TopBar les affiche, les épreuves les lisent :
// le jour où l'un change, il change pour tout le monde en même temps.
//
// Seuls ceux qu'on CLIQUE DE L'EXTÉRIEUR sont ici. Mettre les quatorze entrées
// du menu dans un fichier de données ajouterait de l'indirection pour rien :
// les dix autres ne sont lues par personne d'autre que l'oeil.

/** Les dojos de pratique · s'appelait « My companies », quand on en créait. */
export const MENU_PROJECTS = 'Practice dojos'

/** Le réglage d'effort et de budget · s'appelait « How hard your team works »,
 *  quand il y avait une équipe qui travaillait pour vous. */
export const MENU_EFFORT = 'Effort and token budget'

/** L'équipage · s'appelait « Your company ». */
export const MENU_CREW = 'The crew'

/** Le profil d'apprentissage · il n'existait pas. */
export const MENU_PROGRESS = 'Your progress'
