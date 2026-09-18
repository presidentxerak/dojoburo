// QUI PORTE QUEL VISAGE · une seule table, lue par la salle et par les fiches.
//
// LE DÉFAUT QUE CE FICHIER RÉPARE. La salle de classe distribuait les visages
// PAR POSITION : le i-ième agent endormi recevait le i-ième look du catalogue.
// La fiche d'un agent, elle, le prenait PAR NOM, en passant par le rôle que le
// cas d'usage incarne. Deux règles différentes pour une seule question, donc
// deux réponses différentes : on cliquait sur un moine à chapeau noir et on
// atterrissait sur la page d'un robot bleu.
//
// Le plus traître est que la première place tombait juste par accident, parce
// que le premier cas d'usage et le premier look se trouvaient correspondre.
// L'écran du haut avait donc l'air correct, ce qui est la meilleure façon de ne
// pas chercher plus loin.
//
// Rien ici n'invente une correspondance : la table des rôles existait déjà et
// elle est bonne, elle vivait simplement dans un composant de la page d'accueil
// (components/landing/TeamCards), où une scène 3D n'a aucune raison d'aller
// chercher une donnée. Elle a déménagé, et c'est tout ce qui a changé.
import { CHARACTERS, type Character } from './looks'
import { USE_CASES } from './agentUseCases'

/**
 * Le rôle d'entreprise vers le look qui le dessine.
 *
 * Douze rôles pour douze visages, sans répétition, puis six spécialistes qui
 * réutilisent un visage absent des équipes qu'ils rejoignent · autrement dit
 * personne ne croise son sosie. check-content fait échouer la construction si
 * une équipe se retrouve avec deux fois la même tête.
 */
export const ROLE_FACE: Record<string, string> = {
  // l'équipage · douze rôles, douze personnages, aucun doublon
  chief: 'rex',
  brandi: 'dex',
  weblos: 'lex',
  devi: 'sam',
  marketus: 'mia',
  pumpi: 'sol',
  nexa: 'hana',
  helpi: 'pia',
  busino: 'fin',
  vaultor: 'otto',
  legi: 'ava',
  sentinel: 'ada',
  // les spécialistes · chacun évite tous les visages des équipes qu'il rejoint
  scout: 'ada',
  scribe: 'ava',
  deck: 'pia',
  pixel: 'otto',
  pilot: 'rex',
  kaizen: 'fin',
}

/** Le look d'un rôle · jamais l'identifiant brut, qui n'est pas un look. */
export const faceIdForRole = (roleId: string): string => ROLE_FACE[roleId] ?? roleId

/**
 * LE CAS D'USAGE VERS SON LOOK · la table que la salle et la fiche partagent.
 *
 * Elle est DÉRIVÉE, pas recopiée : si un cas d'usage change de rôle, son
 * dormeur et sa page changent de tête ensemble, le même jour, sans que
 * personne ait à y penser.
 */
export const USE_CASE_FACE: Record<string, string> = Object.fromEntries(
  USE_CASES.map((u) => [u.id, faceIdForRole(u.agent)]),
)

/** L'identifiant de look d'un cas d'usage. */
export const faceIdForUseCase = (useCaseId: string): string =>
  USE_CASE_FACE[useCaseId] ?? Object.keys(CHARACTERS)[0]

/** Le personnage dessiné · un look manquant rend le premier du catalogue plutôt
 *  que `undefined`, parce qu'un agent sans tête est pire qu'un agent qui porte
 *  la mauvaise. */
export const characterFor = (faceId: string): Character =>
  CHARACTERS[faceId] ?? Object.values(CHARACTERS)[0]
