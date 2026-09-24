// LE COMPTE · les textes de la connexion et de la sauvegarde en ligne.
//
// Tout ce que la carte « Votre compte » du profil et l'entrée de l'en-tête
// affichent passe par ici, avec B(en, fr), comme les textes du jeu
// (src/sim/text.ts) et du clan (src/game/clanText.ts). Le français vouvoie,
// garde le jargon IA anglophone et n'emploie aucun tiret cadratin.
import { B, say, type Bi } from '../data/bilingual'
import { useLang } from '../i18n'
import type { SyncError } from '../lib/account'

export const AT = {
  title: B('Your account', 'Votre compte'),

  // (a) la connexion n'est pas activée sur ce déploiement
  offBody: B(
    'Signing in is not enabled on this site yet. Your progress is therefore kept in this browser only: another device or another browser starts from zero.',
    "La connexion n'est pas encore activée sur ce site. Votre progression est donc conservée uniquement dans ce navigateur : un autre appareil ou un autre navigateur repart de zéro.",
  ),

  // (b) déconnecté
  outBody: B(
    'Sign in to save your progress online and pick it up on another device. Without signing in, it stays in this browser and nothing is sent.',
    "Connectez-vous pour sauvegarder votre progression en ligne et la reprendre sur un autre appareil. Sans connexion, elle reste dans ce navigateur et aucune donnée n'est envoyée.",
  ),
  outHow: B('With your email address or your Google account, without a password.', 'Avec votre adresse e-mail ou votre compte Google, sans mot de passe.'),
  signIn: B('Sign in', 'Se connecter'),
  starting: B('Sign-in is loading…', 'Chargement de la connexion…'),

  // (c) connecté
  account: B('Account', 'Compte'),
  inBody: B(
    'Your progress is saved online and follows you on every device where you sign in.',
    'Votre progression est sauvegardée en ligne et vous suit sur chaque appareil où vous vous connectez.',
  ),
  syncedAt: B('Synced at {time}', 'Synchronisé à {time}'),
  syncing: B('Syncing…', 'Synchronisation…'),
  notYet: B('Not synced yet', 'Pas encore synchronisé'),
  retry: B('Try again', 'Réessayer'),
  signOut: B('Sign out', 'Se déconnecter'),
  signOutNote: B('Signing out keeps your progress in this browser.', 'La déconnexion conserve votre progression dans ce navigateur.'),

  // l'en-tête
  headerSignIn: B('Sign in', 'Connexion'),
  headerAccount: B('Your account', 'Votre compte'),
}

/** Ce que dit l'écran quand la synchronisation échoue · une phrase par cause. */
export const SYNC_ERROR: Record<SyncError, Bi> = {
  not_configured: B(
    'Online saving is not set up on this server yet. Your progress stays in this browser.',
    "La sauvegarde en ligne n'est pas encore configurée sur ce serveur. Votre progression reste dans ce navigateur.",
  ),
  network: B('Sync failed: the connection was interrupted.', 'Échec de la synchronisation : la connexion a été interrompue.'),
  auth: B('Sync failed: your session has expired. Please sign in again.', 'Échec de la synchronisation : votre session a expiré. Reconnectez-vous.'),
  too_large: B(
    'Sync failed: your save is larger than the server accepts.',
    'Échec de la synchronisation : votre sauvegarde dépasse la taille acceptée par le serveur.',
  ),
  rate: B(
    'Sync paused: too many attempts in a short time. Try again in a few minutes.',
    'Synchronisation suspendue : trop de tentatives en peu de temps. Réessayez dans quelques minutes.',
  ),
  unavailable: B('Sync failed: the server did not respond.', "Échec de la synchronisation : le serveur n'a pas répondu."),
}

export function useAccountText() {
  const lang = useLang()
  return { lang, t: (b: Bi) => say(b, lang) }
}
