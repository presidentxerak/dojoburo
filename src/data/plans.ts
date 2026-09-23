// CE QUE DOJOBURO VEND, à un seul endroit.
//
// Ce fichier a déjà changé trois fois de modèle, et chaque changement a laissé
// des prix périmés ailleurs dans le produit pendant des semaines. D'où la règle
// que scripts/test-pricing.mjs fait respecter : UN PRIX N'EXISTE QU'ICI.
//
// ---------------------------------------------------------------------------
// TROISIÈME MODÈLE · un achat, pas un abonnement
//
// Les deux premiers vendaient du temps de machine (des crédits, des tâches),
// puis un abonnement à une bibliothèque de fichiers. Les deux avaient le même
// défaut : ils faisaient payer quelque chose qui n'est pas ce que les gens
// viennent chercher. On vient apprendre, on repart en sachant faire, et ça se
// paie une fois.
//
//   DÉCOUVERTE   sept jours, une leçon par jour, gratuit.
//                Elle demande une adresse et rien d'autre. C'est le seul
//                endroit où l'on découvre si cette façon d'enseigner vous
//                convient, donc elle doit être entière et sans piège.
//
//   FORMATION    la formation généraliste, treize cités dojo, achat unique.
//                Tout est ouvert d'un coup et dans l'ordre qu'on veut. Les
//                mises à jour sont comprises : le contenu bouge parce que les
//                outils bougent, et faire repayer une correction serait
//                facturer notre propre retard.
//
//   MÉTIER       une cité dojo de plus, taillée pour un métier, en supplément.
//                Elle n'a de sens qu'après la généraliste, donc elle se vend
//                après, moins cher, et jamais seule.
//
// ---------------------------------------------------------------------------
// POURQUOI CE PRIX, ET PAS UN AUTRE
//
// Le coût marginal d'un élève de plus est nul : des pages, des fichiers, du
// localStorage. Le prix ne couvre donc pas un coût, il situe le produit. À
// 99 €, la formation se compare à un cours en ligne sérieux et non à un
// abonnement de plus ; le module métier à 49 € est un complément qu'on ajoute
// sans y repenser. Les deux sont des achats uniques, ce qui veut dire qu'on ne
// vit pas de gens qui oublient de résilier.
//
// ---------------------------------------------------------------------------
// LES IDENTIFIANTS NE BOUGENT PAS, LE RESTE OUI.
//
// 'founder' et 'managed' sont des clés de stockage : elles sont écrites dans la
// colonne organisations.plan, dans les métadonnées Stripe et dans les variables
// STRIPE_PRICE_FOUNDER / STRIPE_PRICE_MANAGED. Les renommer orphelinerait tout
// ce qui a déjà été vendu, et ça ne se verrait qu'au premier accès refusé. Ce
// qui change est ce qu'elles DÉSIGNENT et comment elles s'appellent à l'écran.
// Voir api/_lib/entitlements.ts, qui lit les mêmes clés.

export interface Plan {
  id: 'free' | 'founder' | 'managed'
  /** le nom affiché · jamais l'identifiant */
  name: string
  /** en euros · le site vend en euros, et le prix n'existe qu'ici */
  eur: number
  /** vrai quand c'est un achat unique et non un abonnement */
  once?: boolean
  /** vrai quand la formule ne se vend qu'en supplément d'une autre */
  addOn?: boolean
  /** la formule dont celle-ci est le supplément */
  requires?: Plan['id']
  /** la ligne sous le prix */
  tagline: string
  /** le titre au-dessus de la liste */
  inclHead: string
  incl: string[]
  featured?: boolean
  /** LE FRANÇAIS, dans la même entrée que l'anglais.
   *
   *  Une carte de prix est l'endroit du site où une divergence coûte le plus
   *  cher : on ne se trompe pas sur un libellé de navigation, on se trompe sur
   *  ce que quelqu'un croit acheter. Les deux versions se lisent donc ensemble,
   *  et scripts/test-i18n.mjs refuse une traduction qui recopie l'anglais.
   *
   *  Le PRIX n'est pas traduit · c'est un nombre, et il n'existe qu'une fois
   *  dans ce fichier. Seul ce qu'on en dit a deux langues. */
  fr?: { tagline: string; inclHead: string; incl: string[] }
}

/** La formation généraliste · achat unique, mises à jour comprises. */
export const PATH_EUR = 99

/** Le module métier · en supplément, une fois la généraliste achetée. */
export const TRADE_EUR = 49

/** Les deux ensemble · jamais recopié à la main. */
export const BUNDLE_EUR = PATH_EUR + TRADE_EUR

/** Le parcours découverte · sept jours, une leçon par jour. */
export const DISCOVERY_DAYS = 7

/** « 99 € » · les prix sont des euros entiers, donc pas de centimes. */
export const priceTag = (eur: number): string => (eur === 0 ? '0 €' : `${eur} €`)

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Découverte',
    eur: 0,
    tagline: `${DISCOVERY_DAYS} days, one lesson a day. Your email, nothing else.`,
    inclHead: 'Includes',
    incl: [
      `The ${DISCOVERY_DAYS} discovery lessons, in full`,
      'One badge a day, and the map that shows where you are',
      'No card, no trial that turns into a subscription',
      'If it is not for you, you have lost a week and nothing else',
    ],
    fr: {
      tagline: `${DISCOVERY_DAYS} jours, une leçon par jour. Votre adresse, rien d'autre.`,
      inclHead: 'Comprend',
      incl: [
        `Les ${DISCOVERY_DAYS} leçons de découverte, en entier`,
        'Un badge par jour, et la carte qui montre où vous en êtes',
        "Aucune carte bancaire, aucun essai qui se transforme en abonnement",
        "Si ce n'est pas pour vous, vous aurez perdu une semaine et rien de plus",
      ],
    },
  },
  {
    id: 'founder',
    name: 'Formation',
    eur: PATH_EUR,
    once: true,
    featured: true,
    tagline: 'The whole path. Paid once, yours for good.',
    inclHead: 'Everything in Découverte, plus',
    incl: [
      'Every dojo city, in the order you choose',
      'A master in each one, a badge at the end of each level',
      'The files and resources of every module, downloadable',
      'Updates included: the tools move, the course moves with them',
      'Replay any level, any time, from your profile',
    ],
    fr: {
      tagline: 'Le parcours entier. Payé une fois, acquis pour de bon.',
      inclHead: 'Tout ce que contient Découverte, plus',
      incl: [
        "Chaque cité dojo, dans l'ordre que vous voulez",
        'Un maître dans chacune, un badge à la fin de chaque niveau',
        'Les fichiers et les ressources de chaque module, à télécharger',
        'Les mises à jour comprises : les outils bougent, le cours bouge avec eux',
        "Refaites n'importe quel niveau, quand vous voulez, depuis votre profil",
      ],
    },
  },
  {
    id: 'managed',
    name: 'Métier',
    eur: TRADE_EUR,
    once: true,
    addOn: true,
    requires: 'founder',
    tagline: 'One more city, built for the job you actually do.',
    inclHead: 'Added to the Formation, for each trade',
    incl: [
      'A dojo city written for your trade, not adapted to it',
      'The cases you meet on a Tuesday, not the ones that demo well',
      'The same masters, the same badges, the same map',
      'Bought after the Formation, because it makes no sense before',
    ],
    fr: {
      tagline: 'Une cité de plus, taillée pour le métier que vous faites.',
      inclHead: 'En supplément de la Formation, par métier',
      incl: [
        'Une cité dojo écrite pour votre métier, pas adaptée à lui',
        'Les cas que vous croisez un mardi, pas ceux qui font une belle démonstration',
        'Les mêmes maîtres, les mêmes badges, la même carte',
        "Acheté après la Formation, parce qu'il n'a aucun sens avant",
      ],
    },
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<Plan['id'], Plan>

/** « 99 € » · le chiffre en tête de carte. */
export const planPrice = (p: Plan): string => priceTag(p.eur)

/* CE QUI N'EST PAS DANS CE FICHIER, et pourquoi.
 *
 * Aucune phrase d'habillage : ni « par mois », ni « à partir de », ni « en
 * supplément ». Ce sont des MOTS, ils ont deux langues, et ils se composent
 * dans la carte à partir du dictionnaire. Une version antérieure les rendait
 * depuis ici, en anglais seulement, cachés derrière une fonction : du texte à
 * traduire qui ne ressemblait pas à du texte, dans le fichier que la traduction
 * n'a aucune raison d'aller lire.
 *
 * Les DONNÉES restent ici : le prix, `once`, `addOn`, `requires`. */
