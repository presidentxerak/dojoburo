// DOJOBURO · les textes du jeu, dans les deux langues.
//
// Tout ce que le jeu affiche passe par ici · rien n'est écrit en dur dans les
// composants (scripts/test-i18n le vérifie ailleurs dans l'app, et la règle
// vaut ici aussi). Le français vouvoie et emploie le jargon IA anglophone,
// comme le reste du produit.
import { B, say, type Bi } from '../data/bilingual'
import { useLang } from '../i18n'
import type { EventKind, OfferId, Outcome } from './engine'

export const T = {
  title: B('Dojoburo', 'Dojoburo'),
  tagline: B('Run your AI studio in a dojo', "Dirigez votre studio IA dans un dojo"),
  pitch: B(
    'Clients walk in with briefs. Give each job the right specialists and just enough tokens. Hit the day\'s revenue before 6 pm.',
    "Des clients arrivent avec leurs briefs. Attribuez à chaque mission les spécialistes adaptés et juste assez de tokens. Atteignez l'objectif du jour avant 18 h.",
  ),
  play: B('Play', 'Jouer'),
  resume: B('Resume', 'Reprendre'),
  newGame: B('New game', 'Nouvelle partie'),
  confirmReset: B('Start again from day 1? Your studio will be reset.', "Recommencer au jour 1 ? Votre studio sera réinitialisé."),
  back: B('Back to Training', 'Retour au Training'),
  backShort: B('Back', 'Retour'),
  day: B('Day', 'Jour'),
  budget: B('Tokens', 'Tokens'),
  budgetLeft: B('tokens left', 'tokens restants'),
  revenue: B('Revenue', 'Chiffre du jour'),
  objective: B('objective', 'objectif'),
  reputation: B('Reputation', 'Réputation'),
  cash: B('Cash', 'Caisse'),
  pause: B('Pause', 'Pause'),
  paused: B('Paused', 'En pause'),
  sound: B('Sound', 'Son'),
  fullscreen: B('Full screen', 'Plein écran'),
  speed: B('Speed', 'Vitesse'),
  waiting: B('Waiting clients', "Clients en attente"),
  noneWaiting: B('Nobody is waiting. The next client is on the way.', "Aucun client en attente. Le prochain arrive bientôt."),
  working: B('In progress', 'En cours'),
  open: B('Open the brief', 'Ouvrir le brief'),
  brief: B('Brief', 'Brief'),
  needs: B('Needs', 'Besoins'),
  tokensNeeded: B('tokens needed', 'tokens nécessaires'),
  reward: B('Reward', 'Récompense'),
  leavesIn: B('leaves in', 'part dans'),
  team: B('Your team', "Votre équipe"),
  pickTeam: B('Pick up to 4 specialists, then give them tokens.', "Choisissez jusqu'à 4 spécialistes, puis attribuez-leur des tokens."),
  level: B('Lv.', 'Niv.'),
  busy: B('Busy', 'Occupé'),
  down: B('Out today', 'Absent'),
  tired: B('Tired', 'Fatigué'),
  suggest: B('Suggest a team', 'Proposer une équipe'),
  launch: B('Launch', 'Lancer'),
  close: B('Close', 'Fermer'),
  quality: B('Expected quality', 'Qualité prévue'),
  cost: B('Cost', 'Coût'),
  after: B('left after', 'restants après'),
  missing: B('Nobody covers', 'Personne ne couvre'),
  wasted: B('Tokens wasted on', 'Tokens gaspillés sur'),
  tiredWarn: B('Tired, works less well', 'Fatigué, travaille moins bien'),
  overfuel: B('More tokens than needed: little gain, less budget.', "Plus de tokens que nécessaire : gain faible, budget réduit."),
  underfuel: B('Not enough tokens: the work will be rushed.', "Tokens insuffisants : le travail sera bâclé."),
  errBudget: B('Not enough tokens left in today\'s budget.', "Il ne reste pas assez de tokens dans le budget du jour."),
  errBusy: B('One of them is already working.', "L'un d'eux travaille déjà."),
  errDown: B('This specialist is out today.', 'Ce spécialiste est absent aujourd\'hui.'),
  errEmpty: B('Pick at least one specialist.', "Choisissez au moins un spécialiste."),
  errMany: B('Four specialists at most.', "Quatre spécialistes au maximum."),
  errGone: B('This client has left.', 'Ce client est parti.'),
  lesson: B('Why', 'Pourquoi'),
  earned: B('earned', 'gagnés'),
  lost: B('left unhappy', 'repartis mécontents'),
  levelUp: B('levels up!', 'monte de niveau !'),
  dayOver: B('Day over', 'Fin de journée'),
  won: B('Objective reached!', 'Objectif atteint !'),
  missed: B('Objective missed. Replay the day: you keep what you earned.', "Objectif manqué. Rejouez la journée : vous conservez vos gains."),
  served: B('Clients served', 'Clients servis'),
  avgQuality: B('Average quality', 'Qualité moyenne'),
  excellentN: B('Excellent jobs', 'Travaux excellents'),
  frugal: B('Frugality bonus', 'Bonus de frugalité'),
  frugalWhy: B('1 € per 250 tokens left, paid when the objective is reached.', "1 € pour 250 tokens restants, payé si l'objectif est atteint."),
  toShop: B('Go to the shop', 'Aller à la boutique'),
  nextDay: B('Start day', 'Commencer le jour'),
  replay: B('Replay day', 'Rejouer le jour'),
  shop: B('The shop', 'La boutique'),
  shopLead: B('Spend today\'s cash to make tomorrow easier.', "Utilisez la caisse pour faciliter la journée de demain."),
  buy: B('Buy', 'Acheter'),
  owned: B('Owned', 'Acquis'),
  train: B('Train', 'Former'),
  maxed: B('Max', 'Max'),
  tutorial1: B('Clients walk in and wait at the front. Tap a client card to read the brief.', "Les clients entrent et attendent à l'accueil. Touchez la carte d'un client pour lire son brief."),
  tutorial2: B('Pick the specialists the brief needs, then give them tokens. The quality preview updates live.', "Choisissez les spécialistes requis par le brief, puis attribuez-leur des tokens. La qualité prévue se met à jour en direct."),
  tutorial3: B('Tokens are your daily budget. Right team, just enough tokens: that is how you hit the objective and keep a frugality bonus.', "Les tokens constituent votre budget quotidien. La bonne équipe et juste assez de tokens : c'est ainsi que vous atteignez l'objectif et conservez un bonus de frugalité."),
  next: B('Next', 'Suivant'),
  gotIt: B('Let\'s go', "Commencer"),
  master: B('The master', 'Le maître'),
  best: B('Best day reached', 'Meilleur jour atteint'),
  totalServed: B('Clients served in all', 'Clients servis au total'),
  wanted: B('Needed', 'Demandé'),
  given: B('given', 'donnés'),
  closing: B('Closing soon: new clients stop at 5 pm.', 'Fermeture bientôt : plus de nouveaux clients après 17 h.'),
  closed: B('Closed. Finishing the last jobs.', "Fermé. Les derniers travaux s'achèvent."),
  today: B('Today', "Aujourd'hui"),
  noEvent: B('A quiet first day. Learn the ropes.', "Un premier jour calme, pour prendre vos marques."),
  cantPick: B('Not available right now.', 'Pas disponible pour le moment.'),
  noCash: B('Not enough cash.', 'Pas assez dans la caisse.'),
  bought: B('Bought', 'Acheté'),
  exit: B('Exit full screen', 'Quitter le plein écran'),
  resumeGame: B('Resume', 'Reprendre'),
  quit: B('Quit the day', 'Quitter la journée'),
  quitWarn: B('Leave now? Today\'s progress is lost, your studio is kept.', "Quitter maintenant ? La journée en cours sera perdue, mais votre studio est conservé."),
  hint: B('Tap a client card to open the brief.', "Touchez la carte d'un client pour ouvrir son brief."),
}

export const OUTCOME: Record<Outcome, Bi> = {
  excellent: B('Excellent', 'Excellent'),
  good: B('Good', 'Bien'),
  meh: B('Rushed', 'Bâclé'),
  failed: B('Failed', 'Raté'),
}

/** Ce que dit le maître depuis son estrade · une phrase par situation. */
export const MASTER: Record<'start' | Outcome | 'leave' | 'won' | 'missed', Bi> = {
  start: B('A new day. Choose well, spend little.', "Un nouveau jour. Choisissez bien, dépensez peu."),
  excellent: B('That is how it is done!', "Voilà comment on procède !"),
  good: B('Good work.', 'Du bon travail.'),
  meh: B('Rushed. More tokens, or a better match?', 'Bâclé. Plus de tokens, ou un meilleur choix ?'),
  failed: B('Wrong specialists for this one.', "Ce n'étaient pas les bons spécialistes."),
  leave: B('A client waited too long.', 'Un client a trop attendu.'),
  won: B('Objective reached. Well played!', "Objectif atteint. Félicitations !"),
  missed: B('Tomorrow we try again.', "Nous recommencerons demain."),
}

export const EVENTS: Record<EventKind, { name: Bi; body: Bi }> = {
  rush: { name: B('Rush day', 'Jour de rush'), body: B('Clients arrive 40 % faster.', 'Les clients arrivent 40 % plus vite.') },
  spike: { name: B('Token price spike', 'Flambée des tokens'), body: B('Every 1,000 tokens given costs 1,250 today.', 'Chaque 1 000 tokens donnés en coûtent 1 250 aujourd\'hui.') },
  viral: { name: B('You went viral', "Votre studio fait le buzz"), body: B('Rewards are 30 % higher today.', "Les récompenses sont 30 % plus élevées aujourd'hui.") },
  outage: { name: B('A specialist is out', 'Un spécialiste est absent'), body: B('One of your team is unavailable today.', "Un membre de l'équipe est indisponible aujourd'hui.") },
  advice: { name: B('The master\'s advice', 'Le conseil du maître'), body: B('Your next launched brief gets +10 % quality.', 'Le prochain brief lancé gagne +10 % de qualité.') },
}

export const OFFERS: Record<OfferId, { name: Bi; body: Bi }> = {
  budget: { name: B('Bigger budget', 'Budget agrandi'), body: B('+10,000 tokens every day.', '+10 000 tokens chaque jour.') },
  library: { name: B('Prompt library', 'Bibliothèque de prompts'), body: B('Every brief needs 10 % fewer tokens: good prompts are reused.', 'Chaque brief demande 10 % de tokens en moins : les bons prompts se réutilisent.') },
  cache: { name: B('Prompt caching', 'Prompt caching'), body: B('Another 10 % fewer tokens. Needs the library.', 'Encore 10 % de tokens en moins. Demande la bibliothèque.') },
  coffee: { name: B('Coffee machine', 'Machine à café'), body: B('Your team gets tired 40 % more slowly.', "Votre équipe se fatigue 40 % moins vite.") },
  train: { name: B('Train a specialist', 'Former un spécialiste'), body: B('+1 level: covers harder needs, works faster.', '+1 niveau : couvre des besoins plus exigeants, travaille plus vite.') },
}

/** Le texte du jeu dans la langue lue. */
export function useSimText() {
  const lang = useLang()
  return { lang, t: (b: Bi) => say(b, lang) }
}
