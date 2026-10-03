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
// QUATRIÈME FORME, la grille à trois prix (voir TEMPLE_EUR plus bas) : gratuit,
// un temple à 49 €, le Pass Dojo à 99 € pour tout et à vie. Le métier n'est
// plus un supplément : chaque temple se vend seul, au même prix. Toujours des
// achats uniques.
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

/** LA GRILLE À TROIS PRIX · demandé : « on va faire 3 prix 0€ gratuit, Un
 *  temple (une formation) à 49€ et le Pass dojo à 99€ life time (toutes les
 *  formations actuelles et futures) ».
 *
 *    · GRATUIT     0 €   le week-end IA et les premières leçons de chaque temple ;
 *    · UN TEMPLE   49 €  n'importe quelle formation, la même somme pour toutes ;
 *    · PASS DOJO   99 €  toutes les formations, actuelles et futures, à vie.
 *
 *  Un seul prix par temple, c'est la grille qui ne fait pas réfléchir : on ne
 *  compare plus des temples entre eux, on choisit entre un et tous. Le Pass
 *  vaut à peine plus que deux temples, donc il devient rentable dès le
 *  troisième, et c'est l'argument qu'on affiche. Des prix ronds, sans « ,99 ». */
export const TEMPLE_EUR = 49

/** Le Pass Dojo · toutes les formations, actuelles et futures, à vie. */
export const PASS_EUR = 99

/** Le Pass est rentable à partir de ce nombre de temples · calculé. */
export const PASS_PAYS_FROM = Math.floor(PASS_EUR / TEMPLE_EUR) + 1

/** La formation complète · un temple comme un autre, au prix d'un temple. */
export const PATH_EUR = TEMPLE_EUR

/** Une formation métier · un temple, au même prix. */
export const TRADE_EUR = TEMPLE_EUR

/** LES COURS VENDUS À PART · « coder une app » et « coder une app avec
 *  Lovable » sont des temples comme les autres depuis la grille à trois prix.
 *  Les clés sont celles de data/courses/index. */
export const COURSE_EUR: Record<'coder-une-app' | 'coder-avec-lovable', number> = {
  'coder-une-app': TEMPLE_EUR,
  'coder-avec-lovable': TEMPLE_EUR,
}

/** Le parcours découverte · sept jours, une leçon par jour. */
export const DISCOVERY_DAYS = 7

/** « 99 € » · les prix sont des euros entiers, donc pas de centimes. */
export const priceTag = (eur: number): string => (eur === 0 ? '0 €' : `${eur} €`)

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Gratuit',
    eur: 0,
    tagline: `The AI weekend, ${DISCOVERY_DAYS} days, and the first lessons of every course. Your email, nothing else.`,
    inclHead: 'Includes',
    incl: [
      `The AI weekend, ${DISCOVERY_DAYS} days, one lesson a day, in full`,
      'The first lessons of every course, to judge before paying',
      'No card, no trial that turns into a subscription',
      'If it is not for you, you have lost a week and nothing else',
    ],
    fr: {
      tagline: `Le Week-end IA, ${DISCOVERY_DAYS} jours, et les premiers cours de chaque formation. Votre adresse e-mail suffit.`,
      inclHead: 'Inclus',
      incl: [
        `Le Week-end IA, ${DISCOVERY_DAYS} jours, une leçon par jour, en entier`,
        "Les premiers cours de chaque formation, pour juger avant de payer",
        "Aucune carte bancaire, aucun essai qui se transforme en abonnement",
        "Si la formation ne vous convient pas, vous n'aurez perdu qu'une semaine",
      ],
    },
  },
  // 'founder' DÉSIGNE MAINTENANT « UN TEMPLE » · la clé reste (voir plus haut),
  // ce qu'elle vend a changé : une formation au choix, au prix d'un temple.
  {
    id: 'founder',
    name: 'Une formation',
    eur: TEMPLE_EUR,
    once: true,
    tagline: 'One training of your choice. Paid once, yours for good.',
    inclHead: 'Everything in Gratuit, plus',
    incl: [
      'One complete course, every lesson open',
      'A master who teaches each lesson, a badge at the end of each one',
      'The files and resources of the course, downloadable',
      'Updates included: the tools move, the course moves with them',
    ],
    fr: {
      tagline: "Une formation au choix. Payée une fois, acquise définitivement.",
      inclHead: "Tout le contenu de Gratuit, et en plus",
      incl: [
        "Une formation complète, tous les cours ouverts",
        "Un maître qui donne chaque cours, un badge à la fin de chacun",
        "Les fichiers et les ressources de la formation, à télécharger",
        "Les mises à jour comprises : les outils évoluent, le cours évolue avec eux",
      ],
    },
  },
  // 'managed' DÉSIGNE MAINTENANT LE PASS DOJO · toutes les formations, à vie.
  {
    id: 'managed',
    name: 'Pass Dojoburo',
    eur: PASS_EUR,
    once: true,
    featured: true,
    tagline: 'Every training, present and future, for life.',
    inclHead: 'Everything in one course, for every course',
    incl: [
      'Every course open: the complete course, every trade, every app course',
      'The courses still to come, at no extra cost, for life',
      `Pays for itself from ${PASS_PAYS_FROM} courses`,
      'Paid once: no subscription, nothing renews',
    ],
    fr: {
      tagline: "Toutes les formations, actuelles et futures, à vie.",
      inclHead: "Tout le contenu d'une formation, pour toutes les formations",
      incl: [
        "Toutes les formations ouvertes : la formation complète, les métiers, les apps",
        "Les formations à venir, sans supplément, à vie",
        `Rentable dès la ${PASS_PAYS_FROM}e formation`,
        "Payé une fois : aucun abonnement, rien ne se renouvelle",
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
