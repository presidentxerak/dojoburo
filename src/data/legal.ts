// LES PAGES LÉGALES · demandé : « créé un footer et ajoute dans les paramètres
// la partie legal et privacy, RGPD etc... ».
//
// Les anciennes pages (/terms, /privacy) décrivaient un autre produit : un
// studio vendu par abonnement, des agents branchés sur des applications. Elles
// sont réécrites pour ce que Dojoburo est aujourd'hui : des formations vendues
// une fois, une communauté, une progression gardée dans le navigateur ou sur
// le compte.
//
// L'IDENTITÉ DE L'ÉDITEUR N'EST PAS INVENTÉE · raison sociale, forme, SIRET,
// adresse et directeur de la publication ne figurent nulle part dans le
// projet. Ils se règlent dans les variables d'environnement (VITE_LEGAL_*,
// voir .env.example) ; tant qu'ils manquent, la page le dit en clair plutôt
// que d'afficher une identité fausse.
import { B, type Bi } from './bilingual'
import { TEMPLE_EUR, PASS_EUR, priceTag } from './plans'

const ENV = ((import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {}) as Record<string, string | undefined>
const MISSING = B('to be completed by the publisher', "à compléter par l'éditeur")

export const LEGAL = {
  updated: '2 octobre 2026',
  editor: ENV.VITE_LEGAL_EDITOR || '',
  form: ENV.VITE_LEGAL_FORM || '',
  siret: ENV.VITE_LEGAL_SIRET || '',
  address: ENV.VITE_LEGAL_ADDRESS || '',
  director: ENV.VITE_LEGAL_DIRECTOR || '',
  vat: ENV.VITE_LEGAL_VAT || '',
  // L'adresse de contact déjà publiée sur l'ancienne politique de confidentialité
  email: ENV.VITE_LEGAL_EMAIL || 'presidentxerak@gmail.com',
}

/** Une valeur de l'éditeur, ou la mention qu'elle manque. */
export const legalValue = (v: string, lang: 'en' | 'fr'): string => v || `[${lang === 'fr' ? MISSING.fr : MISSING.en}]`

export interface LegalSection { h: Bi; p: Bi[] }

export const LEGAL_PAGES = {
  mentions: { path: '/mentions-legales', title: B('Legal notice', 'Mentions légales') },
  privacy: { path: '/confidentialite', title: B('Privacy policy', 'Politique de confidentialité') },
  terms: { path: '/cgv', title: B('Terms of sale', 'Conditions générales de vente') },
} as const

/* ------------------------------------------------------------------ */
/* POLITIQUE DE CONFIDENTIALITÉ                                         */
/* ------------------------------------------------------------------ */

export const PRIVACY: LegalSection[] = [
  {
    h: B('1. Who is responsible', '1. Le responsable du traitement'),
    p: [B(
      'The publisher named in the legal notice is the data controller. For any question or request about your data, write to the contact address given below.',
      "L'éditeur désigné dans les mentions légales est responsable du traitement. Pour toute question ou demande relative à vos données, écrivez à l'adresse de contact indiquée plus bas.",
    )],
  },
  {
    h: B('2. What stays in your browser', '2. Ce qui reste dans votre navigateur'),
    p: [B(
      'Without an account, everything stays in your browser storage: lessons completed, quiz answers, points and achievements, settings, your character, and the trainings you have opened. Nothing of this is sent to us. You can download it or erase it at any time from Profile, Settings.',
      "Sans compte, tout reste dans le stockage de votre navigateur : leçons terminées, réponses aux quiz, points et succès, paramètres, personnage, formations ouvertes. Rien de cela ne nous est envoyé. Vous pouvez le télécharger ou l'effacer à tout moment depuis Profil, Paramètres.",
    )],
  },
  {
    h: B('3. What we keep on our servers, and why', '3. Ce que nous conservons sur nos serveurs, et pourquoi'),
    p: [
      B('Your email address, if you give it to open the free AI weekend: to give you access to it (performance of the service). The newsletter is separate and only sent if you tick its box (consent); each one carries a one-click unsubscribe link.',
        "Votre adresse e-mail, si vous la donnez pour ouvrir le Week-end IA gratuit : pour vous y donner accès (exécution du service). La lettre d'information est distincte et n'est envoyée que si vous cochez sa case (consentement) ; chacune comporte un lien de désinscription en un clic."),
      B('Your account, if you sign in (by email or Google, through Privy): your progress is copied to it so you find it on another device, with the trainings you bought (performance of the service).',
        "Votre compte, si vous vous connectez (par e-mail ou Google, via Privy) : votre progression y est copiée pour la retrouver sur un autre appareil, avec les formations achetées (exécution du service)."),
      B('Your purchases: the payment session, the training bought, the amount and the email given at checkout, to open the training, handle refunds and meet our accounting obligations (legal obligation).',
        "Vos achats : la session de paiement, la formation achetée, le montant et l'e-mail saisi au paiement, pour ouvrir la formation, traiter les remboursements et respecter nos obligations comptables (obligation légale)."),
      B('The community, if you join it: your name, short bio, posts, comments, messages and points. Your name, bio and posts are visible to other members; private messages only to their recipient.',
        "La communauté, si vous la rejoignez : votre nom, votre courte présentation, vos publications, commentaires, messages et points. Le nom, la présentation et les publications sont visibles des autres membres ; les messages privés, de leur seul destinataire."),
      B('Security: to limit abuse, requests are counted per address, which is stored only as a one-way hash for a short time (legitimate interest).',
        "La sécurité : pour limiter les abus, les requêtes sont comptées par adresse, conservée seulement sous forme d'empreinte non réversible et pour une courte durée (intérêt légitime)."),
    ],
  },
  {
    h: B('4. The assistant and the AI masters', "4. L'assistant et les maîtres IA"),
    p: [B(
      'The questions you type to Dojobot, and the messages written in a temple chat that a master answers, are sent to an AI model provider to produce the answer. Do not type personal or confidential information there. Depending on the configuration, the providers may include Groq, Cerebras, OpenRouter, DeepSeek, Google (Gemini) or Anthropic, some of them outside the European Union.',
      "Les questions posées à Dojobot, et les messages d'un chat de temple auxquels un maître répond, sont transmis à un fournisseur de modèles d'IA pour produire la réponse. N'y écrivez pas d'informations personnelles ou confidentielles. Selon la configuration, ces fournisseurs peuvent être Groq, Cerebras, OpenRouter, DeepSeek, Google (Gemini) ou Anthropic, dont certains hors de l'Union européenne.",
    )],
  },
  {
    h: B('5. Who processes data for us', '5. Nos sous-traitants'),
    p: [B(
      'Vercel (hosting), a PostgreSQL database host, Privy (sign-in), Stripe (card payments: we never see your card number), Brevo (emails and newsletter), Upstash (abuse counters) and the AI providers above. Each processes only what its function requires, under its own guarantees, including standard contractual clauses for transfers outside the European Union.',
      "Vercel (hébergement), l'hébergeur de la base PostgreSQL, Privy (connexion), Stripe (paiement par carte : nous ne voyons jamais votre numéro de carte), Brevo (e-mails et lettre d'information), Upstash (compteurs anti-abus) et les fournisseurs d'IA cités plus haut. Chacun ne traite que ce que sa fonction exige, sous ses propres garanties, y compris les clauses contractuelles types pour les transferts hors de l'Union européenne.",
    )],
  },
  {
    h: B('6. How long', '6. Les durées de conservation'),
    p: [B(
      'Account and community data: as long as the account exists, then deleted on request. Newsletter address: until you unsubscribe. Purchase records: ten years, as French accounting law requires. Abuse counters: a few hours at most. Browser data: until you erase it.',
      "Données du compte et de la communauté : tant que le compte existe, puis supprimées sur demande. Adresse de la lettre d'information : jusqu'à la désinscription. Pièces d'achat : dix ans, comme l'exige le droit comptable français. Compteurs anti-abus : quelques heures au plus. Données du navigateur : jusqu'à ce que vous les effaciez.",
    )],
  },
  {
    h: B('7. Cookies', '7. Les cookies'),
    p: [B(
      'Dojoburo sets no advertising or tracking cookie and runs no third-party analytics. The app uses your browser storage for its own state. Sign-in (Privy) and payment (Stripe) use the cookies strictly necessary to their function, which require no consent.',
      "Dojoburo ne dépose aucun cookie publicitaire ou de mesure d'audience tiers. L'application utilise le stockage de votre navigateur pour son propre fonctionnement. La connexion (Privy) et le paiement (Stripe) utilisent les cookies strictement nécessaires à leur fonction, qui ne requièrent pas de consentement.",
    )],
  },
  {
    h: B('8. Your rights (GDPR)', '8. Vos droits (RGPD)'),
    p: [
      B('You have the right to access, rectify and erase your data, to restrict or object to its processing, to data portability, and to withdraw your consent at any time. You can also give instructions about your data after your death.',
        "Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données, d'un droit à la limitation et d'opposition à leur traitement, d'un droit à la portabilité, et du droit de retirer votre consentement à tout moment. Vous pouvez aussi définir des directives relatives au sort de vos données après votre décès."),
      B('From Profile, Settings you can download and erase what your browser keeps. For the data on our servers, write to the contact address from the email of your account: we answer within one month.',
        "Depuis Profil, Paramètres, vous pouvez télécharger et effacer ce que garde votre navigateur. Pour les données sur nos serveurs, écrivez à l'adresse de contact depuis l'e-mail de votre compte : nous répondons dans un délai d'un mois."),
      B('If you believe your rights are not respected, you may lodge a complaint with the CNIL (cnil.fr).',
        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (cnil.fr)."),
    ],
  },
  {
    h: B('9. Minors', '9. Les mineurs'),
    p: [B(
      'Dojoburo is not intended for children under 15. Under that age in France, an account requires the consent of a parent.',
      "Dojoburo ne s'adresse pas aux enfants de moins de 15 ans. En deçà de cet âge en France, un compte requiert l'accord d'un parent.",
    )],
  },
]

/* ------------------------------------------------------------------ */
/* CONDITIONS GÉNÉRALES DE VENTE                                        */
/* ------------------------------------------------------------------ */

export const TERMS: LegalSection[] = [
  {
    h: B('1. Purpose', '1. Objet'),
    p: [B(
      'These terms govern the sale of online trainings on Dojoburo between the publisher named in the legal notice and any buyer. Buying means accepting them.',
      "Les présentes conditions régissent la vente de formations en ligne sur Dojoburo entre l'éditeur désigné dans les mentions légales et tout acheteur. Tout achat vaut acceptation.",
    )],
  },
  {
    h: B('2. The offers and their prices', '2. Les offres et leurs prix'),
    p: [
      B(`Free: the AI weekend and the first lessons of every training, for an email address. One course: any one training of your choice, ${priceTag(TEMPLE_EUR)}. Dojoburo Pass: every training, present and future, for the lifetime of the service, ${priceTag(PASS_EUR)}.`,
        `Gratuit : le Week-end IA et les premières leçons de chaque formation, contre une adresse e-mail. Un cours : une formation au choix, ${priceTag(TEMPLE_EUR)}. Pass Dojoburo : toutes les formations, actuelles et futures, pour la durée d'exploitation du service, ${priceTag(PASS_EUR)}.`),
      B('Prices are in euros, all taxes included, paid once. There is no subscription and nothing renews.',
        "Les prix sont en euros, toutes taxes comprises, payés une fois. Il n'y a aucun abonnement et rien ne se renouvelle."),
    ],
  },
  {
    h: B('3. Payment', '3. Le paiement'),
    p: [B(
      'Payment is made by card through Stripe, a certified payment provider. Dojoburo never receives your card number. The training opens as soon as the payment is confirmed.',
      "Le paiement s'effectue par carte via Stripe, prestataire de paiement certifié. Dojoburo ne reçoit jamais votre numéro de carte. La formation s'ouvre dès la confirmation du paiement.",
    )],
  },
  {
    h: B('4. Right of withdrawal', '4. Le droit de rétractation'),
    p: [B(
      'As a consumer you have fourteen days from the purchase to withdraw, without giving a reason. Write to the contact address with the email used at checkout: you are refunded in full, by the same means of payment, within fourteen days, and access to the training is withdrawn.',
      "En tant que consommateur, vous disposez de quatorze jours à compter de l'achat pour vous rétracter, sans avoir à vous justifier. Écrivez à l'adresse de contact avec l'e-mail utilisé au paiement : vous êtes remboursé intégralement, par le même moyen de paiement, sous quatorze jours, et l'accès à la formation est retiré.",
    )],
  },
  {
    h: B('5. Access and updates', '5. L\'accès et les mises à jour'),
    p: [B(
      'The training is accessed online, in the browser where it was opened and, once signed in, on every device of the account. Updates to a training bought are included. The Dojoburo Pass includes the trainings published later, for as long as the service is operated.',
      "La formation est accessible en ligne, dans le navigateur où elle a été ouverte et, une fois connecté, sur tous les appareils du compte. Les mises à jour d'une formation achetée sont comprises. Le Pass Dojoburo inclut les formations publiées ensuite, pour toute la durée d'exploitation du service.",
    )],
  },
  {
    h: B('6. Use of the content', '6. L\'usage des contenus'),
    p: [B(
      'The trainings are for the personal use of the buyer. Copying, reselling, scraping or redistributing them, in whole or in part, is forbidden.',
      "Les formations sont destinées à l'usage personnel de l'acheteur. Leur copie, revente, extraction automatisée ou rediffusion, en tout ou partie, est interdite.",
    )],
  },
  {
    h: B('7. Liability', '7. La responsabilité'),
    p: [B(
      'The trainings teach the use of AI tools; the answers produced by these tools may be wrong and must be checked. The publisher is bound by an obligation of means. Nothing in these terms limits the legal guarantees owed to consumers.',
      "Les formations enseignent l'usage d'outils d'IA ; les réponses produites par ces outils peuvent être erronées et doivent être vérifiées. L'éditeur est tenu d'une obligation de moyens. Rien dans les présentes ne limite les garanties légales dues aux consommateurs.",
    )],
  },
  {
    h: B('8. Disputes', '8. Les litiges'),
    p: [B(
      'These terms are governed by French law. In case of dispute, write to us first; as a consumer you may also turn, free of charge, to a consumer mediator, and to the courts.',
      "Les présentes conditions sont soumises au droit français. En cas de litige, écrivez-nous d'abord ; en tant que consommateur, vous pouvez aussi recourir gratuitement à un médiateur de la consommation, puis aux tribunaux compétents.",
    )],
  },
]
