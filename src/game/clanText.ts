// LE CLAN · les textes de la page, dans les deux langues.
//
// Tout ce que la page /clan affiche passe par ici, avec B(en, fr), comme les
// textes du jeu (src/sim/text.ts). Le français vouvoie, garde le jargon IA
// anglophone (prompt, agent, token) et n'emploie aucun tiret cadratin.
import { B, say, type Bi } from '../data/bilingual'
import { useLang } from '../i18n'
import type { ClanError, ClanTag } from '../lib/clan'

export const CT = {
  // l'en-tête
  title: B('The clan', 'Le clan'),
  lead: B(
    'The community feed: learners show what they built with AI, how they did it, and what they learned.',
    "Le fil de la communauté : les élèves y présentent ce qu'ils ont construit avec l'IA, leur démarche et ce qu'ils en ont appris.",
  ),
  metaDescription: B(
    'The DojoBuro community feed: what learners built with AI, explained in their own words.',
    "Le fil de la communauté DojoBuro : ce que les élèves ont construit avec l'IA, expliqué par eux-mêmes.",
  ),

  // le formulaire
  composeTitle: B('Share what you built', 'Partagez votre réalisation'),
  composeLead: B(
    'Describe in a few lines what you built with AI, how you went about it, and what you learned. Your post is public and signed with a pseudonym.',
    "Décrivez en quelques lignes ce que vous avez construit avec l'IA, la démarche suivie et ce que vous en avez appris. Votre message est public et signé d'un pseudonyme.",
  ),
  pseudo: B('Pseudonym', 'Pseudonyme'),
  pseudoPh: B('e.g. Nora', 'par exemple Nora'),
  postTitle: B('Title', 'Titre'),
  postTitlePh: B('An agent that sorts my emails', 'Un agent qui trie mes e-mails'),
  body: B('What you built', 'Votre réalisation'),
  bodyPh: B(
    'What does it do? How did you build it? What did you learn along the way?',
    "Que fait-elle ? Comment l'avez-vous construite ? Qu'avez-vous appris en chemin ?",
  ),
  link: B('Link (optional)', 'Lien (facultatif)'),
  linkPh: B('https://', 'https://'),
  tags: B('Tags (up to three)', 'Étiquettes (trois au plus)'),
  privacy: B(
    'No account is needed: a random key kept in this browser lets you delete your own posts. We keep only its fingerprint, never your email or IP address.',
    "Aucun compte n'est nécessaire : une clé aléatoire conservée dans ce navigateur vous permet de supprimer vos propres messages. Nous n'en gardons que l'empreinte, jamais votre adresse e-mail ni votre adresse IP.",
  ),
  publish: B('Publish', 'Publier'),
  publishing: B('Publishing…', 'Publication…'),
  published: B('Your post is published.', 'Votre message est publié.'),

  // le fil
  feedTitle: B('Latest posts', 'Derniers messages'),
  loading: B('Loading the feed…', 'Chargement du fil…'),
  emptyTitle: B('No post yet', 'Aucun message pour le moment'),
  emptyBody: B(
    'Publish the first post: show the community what you built with AI.',
    "Publiez le premier message : montrez à la communauté ce que vous avez construit avec l'IA.",
  ),
  errorTitle: B('The feed could not be loaded', "Le fil n'a pas pu être chargé"),
  retry: B('Try again', 'Réessayer'),
  offTitle: B('The community server is not configured yet', "Le serveur de la communauté n'est pas encore configuré"),
  offBody: B(
    'The feed needs a database to receive and keep posts. It has not been connected yet, so nothing can be published for the moment. No post is invented here: this page will show the real feed as soon as the server is ready.',
    "Le fil a besoin d'une base de données pour recevoir et conserver les messages. Celle-ci n'est pas encore raccordée : aucune publication n'est donc possible pour le moment. Aucun message n'est inventé ici ; cette page affichera le véritable fil dès que le serveur sera prêt.",
  ),
  more: B('Load more', 'Charger plus'),
  loadingMore: B('Loading…', 'Chargement…'),
  end: B('You have reached the first post.', 'Vous avez atteint le premier message.'),

  // une carte
  yours: B('Your post', 'Votre message'),
  seeLink: B('See what was built', 'Voir la réalisation'),
  bravo: B('Bravo', 'Bravo'),
  bravos: B('bravos', 'bravos'),
  report: B('Report', 'Signaler'),
  reported: B('Reported', 'Signalé'),
  reportConfirm: B(
    'Report this post? After three reports, a post is removed from the feed.',
    'Signaler ce message ? Au troisième signalement, un message est retiré du fil.',
  ),
  reportThanks: B('Thank you. The post has been reported.', 'Merci. Le message a été signalé.'),
  remove: B('Delete', 'Supprimer'),
  removeConfirm: B('Delete this post permanently?', 'Supprimer définitivement ce message ?'),

  // la progression
  meTitle: B('Your progress', 'Votre progression'),
  level: B('Level', 'Niveau'),
  badges: B('badges', 'badges'),
  seeProfile: B('Open your profile', 'Ouvrir votre profil'),
}

export const TAG_LABEL: Record<ClanTag, Bi> = {
  agent: B('Agent', 'Agent'),
  prompt: B('Prompt', 'Prompt'),
  automation: B('Automation', 'Automatisation'),
  rag: B('RAG', 'RAG'),
  frugality: B('Frugality', 'Frugalité'),
  game: B('Game', 'Jeu'),
}

/** Ce qu'il faut corriger, champ par champ · la raison vient du serveur ou de
 *  la même vérification faite dans le navigateur. */
export const FIELD_ERROR: Record<string, Bi> = {
  pseudo: B('Choose a pseudonym of 2 to 24 characters.', 'Choisissez un pseudonyme de 2 à 24 caractères.'),
  pseudoChars: B(
    'A pseudonym may contain letters, digits, spaces, dots, hyphens and apostrophes.',
    "Un pseudonyme peut contenir des lettres, des chiffres, des espaces, des points, des traits d'union et des apostrophes.",
  ),
  title: B('The title must contain 3 to 80 characters.', 'Le titre doit compter de 3 à 80 caractères.'),
  body: B('The description must contain 10 to 1,000 characters.', 'La description doit compter de 10 à 1 000 caractères.'),
  link: B(
    'The link must be a complete web address beginning with https:// or http://.',
    'Le lien doit être une adresse web complète commençant par https:// ou http://.',
  ),
  tags: B('Choose at most three tags from the list.', 'Choisissez au plus trois étiquettes dans la liste.'),
  links: B(
    'Your text contains more than two links. Place the main one in the Link field.',
    'Votre texte contient plus de deux liens. Placez le lien principal dans le champ prévu à cet effet.',
  ),
  duplicate: B('You already published this text less than an hour ago.', "Vous avez déjà publié ce texte il y a moins d'une heure."),
}

export const ERROR: Record<ClanError | 'ratePost', Bi> = {
  not_configured: CT.offTitle,
  unavailable: B(
    'The community server is temporarily unavailable. Please try again in a moment.',
    'Le serveur de la communauté est momentanément indisponible. Veuillez réessayer dans quelques instants.',
  ),
  network: B(
    'The server could not be reached. Check your connection, then try again.',
    'Le serveur est injoignable. Vérifiez votre connexion, puis réessayez.',
  ),
  rate: B('Too many actions in a short time. Please try again later.', "Trop d'actions en peu de temps. Veuillez réessayer un peu plus tard."),
  ratePost: B(
    'You can publish at most three posts per hour. Please try again later.',
    'Vous pouvez publier trois messages par heure au plus. Veuillez réessayer plus tard.',
  ),
  invalid: B('Some fields need to be corrected.', 'Certains champs doivent être corrigés.'),
  spam: B('This post looks like spam and was not published.', "Ce message ressemble à un envoi abusif et n'a pas été publié."),
  not_found: B('This post no longer exists.', "Ce message n'existe plus."),
  own_post: B('This action does not apply to your own posts.', "Cette action ne s'applique pas à vos propres messages."),
  origin: B('This request was refused because it came from another site.', "Cette requête a été refusée, car elle provenait d'un autre site."),
  key: B('This browser could not create its key. Please reload the page.', "Ce navigateur n'a pas pu créer sa clé. Veuillez recharger la page."),
  unknown: B('The action failed. Please try again.', "L'action n'a pas abouti. Veuillez réessayer."),
}

/** Les textes du clan dans la langue lue. */
export function useClanText() {
  const lang = useLang()
  return { lang, t: (b: Bi) => say(b, lang) }
}
