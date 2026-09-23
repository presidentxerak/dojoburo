// LE PLURIEL · une fonction, parce que « 1 modules » s'était déjà écrit.
//
// Ça se voyait sur l'écran d'accueil, sur la carte du week-end : « 1 modules,
// 7 dojos ». C'est le genre de faute qu'on cesse de voir au bout de deux
// jours, parce qu'on connaît la phrase par coeur et qu'on ne la lit plus.
//
// POURQUOI PAS UNE RÈGLE DE LANGUE COMPLÈTE. Le français et l'anglais
// s'accordent tous deux au delà de un, donc un seul test suffit pour les deux
// langues du produit. Une bibliothèque de pluralisation serait juste et
// coûterait cent fois le poids du problème ; on la sortira le jour où une
// troisième langue en demandera une, et ce jour-là cette fonction sera le seul
// endroit à changer.
export const plural = (n: number, one: string, many: string): string =>
  `${n} ${n > 1 ? many : one}`
