// LE COURS « Tenir sa comptabilité de A à Z avec l'IA », PARTIE B · voir ./types et ./index.
//
// LA PARTIE A a posé les bases (statuts, partie double, plan comptable,
// journaux, organisation) puis les pièces et les écritures (justificatifs,
// catégories, factures, rapprochement bancaire). Celle-ci traite la TVA et les
// obligations déclaratives, puis la clôture de l'exercice, la lecture des
// comptes annuels, le pilotage de la trésorerie et la confidentialité.
//
// LE FIL ROUGE EST FICTIF · « Studio Cerise », la SASU imaginaire de Lina
// Morel, graphiste. Elle vend des prestations d'identité visuelle à des
// clients professionnels (des services) et des carnets et affiches imprimés en
// ligne (des biens, donc un petit stock). Exercice calendaire, clôture au
// 31 décembre ; dans ce cas fictif, TVA au régime réel normal, déclarée chaque
// mois. Lina travaille avec un expert-comptable, Paul, lui aussi fictif.
//
// CE QUE LE COURS AFFIRME, ET CE QU'IL S'INTERDIT. Il s'en tient aux principes
// stables (mécanisme de la TVA, taux standard français, exigibilité, comptes
// du plan comptable général, principe des régularisations de clôture). Les
// seuils, les dates exactes, les numéros de lignes des formulaires et le
// calendrier de la facturation électronique bougent : le cours décrit le
// principe et renvoie aux sources officielles (impots.gouv.fr, urssaf.fr,
// Service-Public Entreprendre, BOFiP, CNIL), sans adresse inventée, et ne donne
// jamais de conseil fiscal personnalisé.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 3 · TVA ET OBLIGATIONS                                       */
/* ================================================================== */

const M3 = 'cp-m3'

const VAT: Level[] = [
  {
    id: 'cp-vat-regimes',
    master: 'research',
    minutes: 11,
    title: B('VAT regimes, output VAT and input VAT', 'Les régimes de TVA et la TVA collectée et déductible'),
    learn: B(
      'You will tell the main VAT regimes apart and compute the VAT due: output VAT minus deductible input VAT.',
      'Vous saurez distinguer les grands régimes de TVA et calculer la TVA due : la collectée moins la déductible.',
    ),
    act: B('Sort one month of Studio Cerise sales and purchases, then compute output VAT, input VAT and the balance.',
      "Triez un mois de ventes et d'achats de Studio Cerise, puis calculez la TVA collectée, la déductible et le solde."),
    steps: [
      B('Find your regime in your professional tax account: franchise en base, simplified real regime or normal real regime.',
        'Repérez votre régime dans votre espace professionnel : franchise en base, réel simplifié ou réel normal.'),
      B('List the sales of the month with their rate (20, 10, 5.5 or 2.1 %) and the VAT invoiced: this is output VAT.',
        'Listez les ventes du mois avec leur taux (20, 10, 5,5 ou 2,1 %) et la TVA facturée : c\'est la TVA collectée.'),
      B('List the purchases backed by a compliant invoice and used for the business: their VAT is, in principle, deductible.',
        "Listez les achats justifiés par une facture conforme et utiles à l'activité : leur TVA est en principe déductible."),
      B('Subtract input VAT from output VAT: a positive balance is paid, a negative one becomes a VAT credit.',
        'Retranchez la TVA déductible de la TVA collectée : un solde positif se paie, un solde négatif forme un crédit de TVA.'),
    ],
    trap: B(
      'Counting the VAT of a design job in the month of its invoice: for services, VAT is generally due on payment, unless an option applies.',
      "Compter la TVA d'une prestation le mois de sa facture : pour les services, elle est en général exigible à l'encaissement, sauf option.",
    ),
    quiz: {
      q: B('Studio Cerise invoices a 1,500 € (excl. VAT) logo in March, paid in April. With no option, when is its VAT due?',
        'Studio Cerise facture en mars un logo de 1 500 € HT, payé en avril. Sans option, quand sa TVA est-elle exigible ?'),
      options: [
        B('In March, the month the invoice was sent out to the client', 'En mars, le mois où la facture a été envoyée au client'),
        B('In April, the month the payment was received', "En avril, le mois où le paiement a été encaissé"),
        B('In December, when the yearly accounts are closed', "En décembre, à la clôture des comptes de l'exercice"),
      ],
      answer: 1,
      why: B(
        'For services, VAT becomes due when the price is collected, unless the company opted to pay it on invoicing (the option for debits). For sales of goods, it is due on delivery.',
        "Pour une prestation de services, la TVA est exigible à l'encaissement, sauf option pour les débits. Pour une livraison de biens, elle l'est à la livraison.",
      ),
    },
    badge: B('Separates output and input VAT', 'Distingue TVA collectée et déductible'),
  },
  {
    id: 'cp-vat-returns',
    master: 'extraction',
    minutes: 10,
    title: B('Prepare VAT returns without errors', 'Préparer les déclarations sans erreur'),
    learn: B(
      'You will prepare a VAT return from your books, check it against the ledger and file it on time.',
      'Vous saurez préparer une déclaration de TVA à partir de vos comptes, la contrôler et la déposer à temps.',
    ),
    act: B('Build the March return of Studio Cerise from its VAT accounts, reconcile it, then fill in a dry run.',
      'Préparez la déclaration de mars de Studio Cerise depuis ses comptes de TVA, rapprochez-la, puis faites un brouillon.'),
    steps: [
      B('Close the month first: sales, purchases and bank lines recorded, and the bank reconciliation done.',
        "Bouclez d'abord le mois : ventes, achats et banque saisis, rapprochement bancaire fait."),
      B('From the ledger, extract the balances of the VAT accounts (44571, 44566, 44562) and the sales base by rate.',
        'Extrayez du grand livre les soldes des comptes de TVA (44571, 44566, 44562) et les bases de ventes par taux.'),
      B('Check consistency: for each rate, the base times the rate equals the output VAT, give or take rounding.',
        'Contrôlez la cohérence : pour chaque taux, la base multipliée par le taux égale la TVA collectée, aux arrondis près.'),
      B('Enter the figures in your professional space, keep the worksheet and pay before the deadline.',
        "Saisissez les montants dans votre espace professionnel, gardez la feuille de calcul et payez avant l'échéance."),
    ],
    trap: B(
      'Copying the amount an AI or a tool computed without reconciling it with the ledger: an entry error goes straight into the return.',
      "Recopier le montant calculé par une IA ou un outil sans le rapprocher du grand livre : une erreur de saisie passe telle quelle dans la déclaration.",
    ),
    quiz: {
      q: B('The 20 % sales base of Studio Cerise is 6,000 €, but account 44571 shows 1,320 €. What do you do before filing?',
        'La base des ventes à 20 % de Studio Cerise est de 6 000 €, mais le compte 44571 affiche 1 320 €. Que faites-vous ?'),
      options: [
        B('File 1,320 €, since the ledger account is the official figure', 'Vous déclarez 1 320 €, puisque le compte du grand livre fait foi'),
        B('File 1,200 €, since the base times the rate gives that amount', 'Vous déclarez 1 200 €, puisque la base fois le taux donne ce montant'),
        B('Look for the 120 € gap line by line before filing', "Vous cherchez l'écart de 120 € ligne à ligne avant de déclarer"),
      ],
      answer: 2,
      why: B(
        'The gap means a line is wrong: a misapplied rate, a duplicate, a sale at another rate. Filing either figure without knowing carries the error into the return. Find it, correct the books, then file.',
        "L'écart signale une ligne fausse : taux mal appliqué, doublon, vente à un autre taux. Déclarer l'un ou l'autre montant sans comprendre reporte l'erreur. Trouvez-la, corrigez les comptes, puis déclarez.",
      ),
    },
    badge: B('Reconciles before filing', 'Rapproche avant de déclarer'),
  },
  {
    id: 'cp-einvoicing',
    master: 'watch',
    minutes: 11,
    title: B('E-invoicing: what changes', 'La facturation électronique : ce qui change'),
    learn: B(
      'You will explain the e-invoicing and e-reporting reform, its calendar and what to prepare, from official sources.',
      "Vous saurez expliquer la réforme de la facturation électronique et de l'e-reporting, son calendrier et quoi préparer.",
    ),
    act: B('Write the e-invoicing readiness sheet of Studio Cerise: flows, dates to check, platform, data to complete.',
      'Rédigez la fiche de préparation de Studio Cerise : flux concernés, dates à vérifier, plateforme, données à compléter.'),
    steps: [
      B('Read the official reform page on impots.gouv.fr and note the dates that apply to your company size.',
        "Lisez la page officielle de la réforme sur impots.gouv.fr et notez les dates qui s'appliquent à la taille de votre entreprise."),
      B('Sort your flows: B2B sales in France (e-invoicing), sales to individuals or abroad (e-reporting), purchases.',
        "Triez vos flux : ventes B2B en France (facturation électronique), ventes aux particuliers ou à l'étranger (e-reporting), achats."),
      B('Choose an approved platform from the official list and check how it connects to your invoicing tool.',
        'Choisissez une plateforme agréée dans la liste officielle et vérifiez comment elle se relie à votre outil de facturation.'),
      B('Complete your customer records: SIREN numbers, delivery addresses, nature of the operations.',
        'Complétez vos fiches clients : numéros SIREN, adresses de livraison, nature des opérations (biens, services).'),
    ],
    trap: B(
      'Believing a PDF sent by email is an electronic invoice: under the reform, it is structured data exchanged through an approved platform.',
      "Croire qu'un PDF envoyé par email est une facture électronique : dans la réforme, ce sont des données structurées échangées via une plateforme agréée.",
    ),
    quiz: {
      q: B('A client asks Studio Cerise for its invoices "in electronic format". Lina emails a PDF. Under the reform, is it enough?',
        'Un client demande ses factures « au format électronique ». Lina envoie un PDF par email. Au sens de la réforme, est-ce suffisant ?'),
      options: [
        B('No, it takes a structured file exchanged via an approved platform', 'Non, il faut un fichier structuré échangé via une plateforme agréée'),
        B('Yes, any invoice sent by email counts as an electronic invoice', 'Oui, toute facture envoyée par email compte comme électronique'),
        B('Yes, provided the PDF is signed and then stored for ten years', 'Oui, à condition que le PDF soit signé puis conservé dix ans'),
      ],
      answer: 0,
      why: B(
        'The reform defines an electronic invoice as structured data (formats such as Factur-X, UBL or CII) sent through an approved platform. A plain PDF stays a paper-like invoice, accepted only where the obligation does not yet apply.',
        "La réforme définit la facture électronique comme des données structurées (Factur-X, UBL ou CII) transmises par une plateforme agréée. Un simple PDF reste assimilé au papier, admis tant que l'obligation ne s'applique pas.",
      ),
    },
    badge: B('Ready for e-invoicing', 'Prêt pour la facture électronique'),
  },
  {
    id: 'cp-calendar',
    master: 'planning',
    minutes: 9,
    title: B('The calendar of obligations and official sources', 'Le calendrier des obligations et les sources officielles'),
    learn: B(
      'You will build a yearly calendar of your tax and social deadlines from official sources, not from memory.',
      'Vous saurez construire le calendrier annuel de vos échéances fiscales et sociales à partir des sources officielles.',
    ),
    act: B('Have an AI draft the 12-month calendar of Studio Cerise, then verify each date on its official source.',
      "Faites rédiger à l'IA le calendrier sur douze mois de Studio Cerise, puis vérifiez chaque date sur sa source officielle."),
    steps: [
      B('List your obligations by family: VAT, corporate or income tax, social contributions, CFE, annual accounts.',
        'Listez vos obligations par famille : TVA, impôt sur les sociétés ou sur le revenu, cotisations sociales, CFE, comptes annuels.'),
      B('Ask an AI for a draft calendar, with the official source to check written next to each deadline.',
        'Demandez à une IA un calendrier provisoire, avec, en face de chaque échéance, la source officielle à vérifier.'),
      B('Check each date in your professional space on impots.gouv.fr, on urssaf.fr and on Service-Public Entreprendre.',
        'Vérifiez chaque date dans votre espace professionnel impots.gouv.fr, sur urssaf.fr et sur Service-Public Entreprendre.'),
      B('Put the checked dates in a shared calendar with a reminder a week before, including the accountant\'s dates.',
        'Reportez les dates vérifiées dans un agenda partagé, avec un rappel une semaine avant, y compris celles du cabinet.'),
    ],
    trap: B(
      'Trusting a deadline given by an AI or a blog: dates move each year and depend on your regime; only the official source is authoritative.',
      "Se fier à une date donnée par une IA ou un blog : les échéances bougent chaque année et dépendent du régime ; seule la source officielle fait foi.",
    ),
    quiz: {
      q: B('An AI tells Lina that the CFE of Studio Cerise is due on 15 December. What does she do with this date?',
        'Une IA indique à Lina que la CFE de Studio Cerise est à payer le 15 décembre. Que fait-elle de cette date ?'),
      options: [
        B('She writes it in her calendar as given, since it sounds right', "Elle l'inscrit telle quelle, puisqu'elle paraît plausible"),
        B('She checks it on the notice in her professional space', "Elle la vérifie sur l'avis de son espace professionnel"),
        B('She ignores the CFE, which only applies to firms with staff', 'Elle ignore la CFE, qui ne vise que les sociétés avec salariés'),
      ],
      answer: 1,
      why: B(
        'Each company finds its CFE notice in its professional space on impots.gouv.fr, with the amount and the deadline. A plausible date is not a checked one; the notice is authoritative for this company and this year.',
        "Chaque entreprise trouve son avis de CFE dans son espace professionnel sur impots.gouv.fr, avec le montant et l'échéance. Une date plausible n'est pas vérifiée ; l'avis fait foi pour cette entreprise et cette année.",
      ),
    },
    badge: B('Keeps a checked calendar', 'Tient un calendrier vérifié'),
  },
]

const VAT_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M3, 'cp-vat-regimes')]: {
    why: [
      B("VAT is a tax on consumption that a company collects on behalf of the State. It adds VAT to its sales (output VAT, account 44571) and recovers the VAT paid on its business purchases (input VAT, accounts 44566 for goods and services and 44562 for fixed assets). The difference is paid, or becomes a credit. For a company liable to VAT, VAT is therefore neither a revenue nor a cost: it sits in third-party accounts.",
        "La TVA est un impôt sur la consommation que l'entreprise collecte pour le compte de l'État. Elle l'ajoute à ses ventes (TVA collectée, compte 44571) et récupère celle payée sur ses achats professionnels (TVA déductible, comptes 44566 pour les biens et services et 44562 pour les immobilisations). La différence se paie, ou forme un crédit. Pour une entreprise redevable, la TVA n'est donc ni un produit ni une charge : elle reste en compte de tiers."),
      B("The regime decides how you declare. Under franchise en base, the company invoices no VAT and recovers none, with a mandatory mention on its invoices; the thresholds change and are published on impots.gouv.fr. Under the simplified real regime, instalments are paid during the year and an annual return (CA12) is filed. Under the normal real regime, a return (CA3) is filed every month, or every quarter in some cases. Your regime depends on your turnover, status and options.",
        "Le régime décide de la façon de déclarer. En franchise en base, l'entreprise ne facture pas de TVA et n'en récupère pas, avec une mention obligatoire sur ses factures ; les seuils changent et sont publiés sur impots.gouv.fr. Au réel simplifié, on verse des acomptes en cours d'année et on dépose une déclaration annuelle (CA12). Au réel normal, on dépose une déclaration (CA3) chaque mois, ou chaque trimestre dans certains cas. Le régime dépend du chiffre d'affaires, du statut et des options."),
      B("Two rules decide the month. Output VAT becomes chargeable on delivery for goods and on payment for services, unless the option for debits. Input VAT can be deducted only with a compliant invoice and an expense used for taxable operations; some expenses are excluded or limited, passenger cars for instance. An AI can sort and add up, but it cannot guess your options: state them, and ask it to flag what is uncertain.",
        "Deux règles décident du mois. La TVA collectée devient exigible à la livraison pour les biens et à l'encaissement pour les services, sauf option pour les débits. La TVA déductible suppose une facture conforme et une dépense utile à des opérations taxables ; certaines dépenses sont exclues ou limitées, les véhicules de tourisme par exemple. Une IA sait trier et additionner, pas deviner vos options : donnez-les, et demandez-lui de signaler le doute."),
    ],
    example: {
      context: B("Lina asks a general AI assistant how much VAT Studio Cerise owes for March. She pastes her raw bank statement and receives one figure, with no trace of the rules applied.",
        "Lina demande à un assistant IA généraliste combien Studio Cerise doit de TVA pour mars. Elle colle son relevé bancaire brut et reçoit un chiffre, sans trace des règles appliquées."),
      before: B("How much VAT do I owe for March? Here is my bank statement.",
        "Combien je dois de TVA pour mars ? Voici mon relevé bancaire."),
      after: B("Context: French one-person company (SASU), normal real VAT regime, monthly return, no option for debits.\nActivities: graphic design services (VAT due on payment) and sale of printed notebooks (VAT due on delivery).\nHere are the March operations, client names replaced by codes: [TABLE: DATE, DESCRIPTION, AMOUNT EXCL. VAT, RATE ON THE INVOICE, INVOICE DATE, PAYMENT DATE].\n1. Classify each line: sale of goods, service, purchase, other.\n2. For each sale, say whether its VAT is chargeable in March, and why.\n3. For each purchase, say whether the VAT looks deductible; flag doubtful lines (vehicle, gift, meal, missing invoice).\n4. Give output VAT, input VAT and the balance in a table.\nUse only the rate written on each invoice. Flag every line where you are unsure: I will check it with my accountant.",
        "Contexte : SASU française, TVA au réel normal, déclaration mensuelle, pas d'option pour les débits.\nActivités : prestations de design graphique (TVA exigible à l'encaissement) et vente de carnets imprimés (TVA exigible à la livraison).\nVoici les opérations de mars, noms des clients remplacés par des codes : [TABLEAU : DATE, LIBELLÉ, MONTANT HT, TAUX FIGURANT SUR LA FACTURE, DATE DE FACTURE, DATE DE PAIEMENT].\n1. Classe chaque ligne : vente de biens, prestation, achat, autre.\n2. Pour chaque vente, dis si sa TVA est exigible en mars, et pourquoi.\n3. Pour chaque achat, dis si la TVA semble déductible ; signale les lignes douteuses (véhicule, cadeau, repas, facture manquante).\n4. Donne la TVA collectée, la TVA déductible et le solde dans un tableau.\nN'utilise que le taux écrit sur chaque facture. Signale chaque ligne où tu as un doute : je la vérifierai avec mon expert-comptable."),
      takeaway: B("The second prompt states the regime, the kinds of operations and the chargeability rules, removes personal data and asks for flags. The figure becomes a draft Lina can verify line by line, not an answer she must take on trust.",
        "Le second prompt donne le régime, la nature des opérations et les règles d'exigibilité, retire les données personnelles et demande des signalements. Le chiffre devient un brouillon vérifiable ligne à ligne, et non une réponse à croire."),
    },
    exercise: {
      goal: B("A VAT worksheet for one month of an activity, real or fictional: output VAT, input VAT, the balance, and a list of points to check.",
        "Une feuille de TVA pour un mois d'activité, réelle ou fictive : TVA collectée, TVA déductible, solde, et liste des points à vérifier."),
      prompt: B("Context: [STATUS: MICRO-ENTREPRISE, EI, SASU, SARL], VAT regime: [FRANCHISE EN BASE / SIMPLIFIED REAL / NORMAL REAL], option for debits: [YES / NO / I DO NOT KNOW].\nActivities: [WHAT YOU SELL: GOODS, SERVICES, BOTH].\nHere are the operations of [MONTH], without client names or bank details: [DATE, DESCRIPTION, AMOUNT EXCL. VAT, RATE ON THE INVOICE, INVOICE DATE, PAYMENT DATE].\n1. Sort each line into sales of goods, services and purchases.\n2. For each sale, say whether its VAT is chargeable this month, and why.\n3. For each purchase, say whether the VAT seems deductible; flag missing invoices and expenses with limited deduction.\n4. Give output VAT, input VAT and the balance in a table.\nUse only the rates written on the invoices. End with the list of what I must check on impots.gouv.fr or with my accountant.",
        "Contexte : [STATUT : MICRO-ENTREPRISE, EI, SASU, SARL], régime de TVA : [FRANCHISE EN BASE / RÉEL SIMPLIFIÉ / RÉEL NORMAL], option pour les débits : [OUI / NON / JE NE SAIS PAS].\nActivités : [CE QUE VOUS VENDEZ : BIENS, SERVICES, LES DEUX].\nVoici les opérations de [MOIS], sans noms de clients ni coordonnées bancaires : [DATE, LIBELLÉ, MONTANT HT, TAUX FIGURANT SUR LA FACTURE, DATE DE FACTURE, DATE DE PAIEMENT].\n1. Range chaque ligne parmi les ventes de biens, les prestations et les achats.\n2. Pour chaque vente, dis si sa TVA est exigible ce mois-ci, et pourquoi.\n3. Pour chaque achat, dis si la TVA semble déductible ; signale les factures manquantes et les dépenses à déduction limitée.\n4. Donne la TVA collectée, la TVA déductible et le solde dans un tableau.\nN'utilise que les taux écrits sur les factures. Termine par la liste de ce que je dois vérifier sur impots.gouv.fr ou avec mon expert-comptable."),
      check: [
        B("Each sale is classed as goods or services, with its chargeability date", "Chaque vente est classée en biens ou services, avec sa date d'exigibilité"),
        B("No VAT rate appears that is not written on one of your invoices", "Aucun taux n'apparaît qui ne figure sur l'une de vos factures"),
        B("You recomputed the balance yourself: output VAT minus input VAT", "Vous avez recalculé vous-même le solde : collectée moins déductible"),
        B("Uncertain lines are listed for checking, not silently included", "Les lignes douteuses sont listées pour vérification, pas intégrées en silence"),
      ],
      bonus: B("Redo the calculation in a spreadsheet with one SUMIFS formula per category and compare with the AI result. Any difference points to a line to read again, in the books or in the answer.",
        "Refaites le calcul dans un tableur avec une formule SOMME.SI.ENS par catégorie et comparez avec le résultat de l'IA. Tout écart désigne une ligne à relire, dans les comptes ou dans la réponse."),
    },
    more: [
      { q: B("A designer under franchise en base buys a printer with 20 % VAT on the invoice. Can she recover that VAT?",
          "Une graphiste en franchise en base achète une imprimante avec 20 % de TVA sur la facture. Peut-elle récupérer cette TVA ?"),
        options: [
          B("No: under franchise, she charges no VAT and deducts none", "Non : en franchise, elle ne facture pas de TVA et n'en déduit pas"),
          B("Yes, once a year, through a single annual VAT return", "Oui, une fois par an, par une déclaration annuelle unique"),
          B("Yes, but only for equipment above a set purchase amount", "Oui, mais seulement pour le matériel au-delà d'un certain montant"),
        ],
        answer: 0,
        why: B("Franchise en base works both ways: no VAT on sales, no deduction on purchases. VAT paid on purchases is then a real cost. Whether franchise remains the right choice depends on the activity: a question for the accountant.",
          "La franchise en base vaut dans les deux sens : pas de TVA sur les ventes, pas de déduction sur les achats. La TVA payée devient alors un coût réel. Savoir si la franchise reste le bon choix dépend de l'activité : une question pour l'expert-comptable.") },
      { q: B("Lina pays the printer 400 € excl. VAT for notebooks, with a compliant invoice. Where do the 80 € of VAT go?",
          "Lina paie 400 € HT de carnets à l'imprimeur, avec une facture conforme. Où vont les 80 € de TVA ?"),
        options: [
          B("Into the purchases account, together with the notebooks", "Au compte d'achats, avec les carnets eux-mêmes"),
          B("Into deductible VAT on goods and services (44566)", "En TVA déductible sur autres biens et services (44566)"),
          B("Into output VAT (44571), together with the sales", "En TVA collectée (44571), avec les ventes"),
        ],
        answer: 1,
        why: B("The purchase is recorded excluding VAT (400 €) and the VAT in 44566, from where it will be deducted on the return. Putting it in purchases would inflate costs; putting it in 44571 would mix it with VAT owed.",
          "L'achat se comptabilise hors taxes (400 €) et la TVA en 44566, d'où elle sera déduite sur la déclaration. La mettre en achats gonflerait les charges ; la mettre en 44571 la confondrait avec la TVA due.") },
    ],
  },

  [enrichKey(M3, 'cp-vat-returns')]: {
    why: [
      B("A VAT return is a summary of the books. If the period is complete and the accounts are right, the return is a copy of the VAT accounts. Almost every error comes from upstream: a month not closed, a duplicate import, an invoice at the wrong rate, a sale recorded before its VAT was chargeable. This is why the reconciliation comes before the form, never after.",
        "Une déclaration de TVA est un résumé des comptes. Si la période est complète et les comptes justes, la déclaration recopie les comptes de TVA. Presque toutes les erreurs viennent d'en amont : un mois non bouclé, un import en double, une facture au mauvais taux, une vente saisie avant que sa TVA soit exigible. C'est pourquoi le rapprochement précède le formulaire, jamais l'inverse."),
      B("The monthly form (CA3) asks for the taxable bases by rate, the output VAT, the deductible VAT on fixed assets and on other goods and services, and any credit carried forward. Its line numbers and boxes change from time to time: rely on the notice of the form on impots.gouv.fr. Companies file and pay online from their professional space, by the deadline shown there.",
        "Le formulaire mensuel (CA3) demande les bases imposables par taux, la TVA collectée, la TVA déductible sur immobilisations et sur autres biens et services, et l'éventuel crédit reporté. Ses numéros de lignes et ses cases évoluent : appuyez-vous sur la notice du formulaire sur impots.gouv.fr. Les entreprises déclarent et paient en ligne depuis leur espace professionnel, avant l'échéance qui y figure."),
      B("An AI is very useful for controls: comparing two tables, spotting duplicates, recomputing base times rate, listing what is missing. It is not the place to decide a rate or a right to deduct. If an error is found after filing, correction methods exist and are described by the administration; ask your accountant which one applies rather than improvising.",
        "Une IA est très utile pour les contrôles : comparer deux tableaux, repérer des doublons, recalculer base fois taux, lister ce qui manque. Ce n'est pas elle qui décide d'un taux ou d'un droit à déduction. Si une erreur apparaît après dépôt, des modalités de régularisation existent et sont décrites par l'administration ; demandez à votre expert-comptable laquelle s'applique plutôt que d'improviser."),
    ],
    example: {
      context: B("Lina wants to save time on the March return. She asks an AI to fill in the CA3 directly from her sales list, without the purchases or the ledger.",
        "Lina veut gagner du temps sur la déclaration de mars. Elle demande à une IA de remplir directement la CA3 à partir de sa liste de ventes, sans les achats ni le grand livre."),
      before: B("Fill in my CA3 for March from this list of sales.",
        "Remplis ma CA3 de mars à partir de cette liste de ventes."),
      after: B("I am preparing the March VAT return of a French SASU (normal real regime, no option for debits). Do not fill in the official form: I will do it myself.\nHere are three tables, without client names:\nA. Sales collected or delivered in March: [DATE, CODE, BASE EXCL. VAT, RATE, VAT].\nB. Purchases of March with an invoice: [DATE, SUPPLIER CODE, BASE, VAT, FIXED ASSET YES/NO].\nC. Balances of accounts 44571, 44566 and 44562 at 31 March: [BALANCES].\nControls to run:\n1. For each rate, compare base times rate with the VAT of table A; show any gap above 1 €.\n2. Compare the totals of A and B with the balances of C; show any gap.\n3. Find possible duplicates (same amount, same date, same code).\n4. List the lines that need a document I should look at.\nAnswer with a table of controls (control, expected, found, gap, line concerned), then a summary of three lines.",
        "Je prépare la déclaration de TVA de mars d'une SASU française (réel normal, pas d'option pour les débits). Ne remplis pas le formulaire officiel : je le ferai moi-même.\nVoici trois tableaux, sans noms de clients :\nA. Ventes encaissées ou livrées en mars : [DATE, CODE, BASE HT, TAUX, TVA].\nB. Achats de mars avec facture : [DATE, CODE FOURNISSEUR, BASE, TVA, IMMOBILISATION OUI/NON].\nC. Soldes des comptes 44571, 44566 et 44562 au 31 mars : [SOLDES].\nContrôles à mener :\n1. Pour chaque taux, compare base fois taux avec la TVA du tableau A ; montre tout écart supérieur à 1 €.\n2. Compare les totaux de A et B avec les soldes de C ; montre tout écart.\n3. Repère les doublons possibles (même montant, même date, même code).\n4. Liste les lignes pour lesquelles je dois regarder la pièce.\nRéponds par un tableau des contrôles (contrôle, attendu, trouvé, écart, ligne concernée), puis un résumé en trois lignes."),
      takeaway: B("The AI no longer produces a number to copy, it runs the controls an accountant would run. Lina fills in the form herself from figures she has reconciled, and she knows which lines to reopen.",
        "L'IA ne produit plus un chiffre à recopier, elle mène les contrôles qu'un comptable ferait. Lina remplit elle-même le formulaire à partir de montants rapprochés, et elle sait quelles lignes rouvrir."),
    },
    exercise: {
      goal: B("A control table for one VAT return (real or fictional), with every gap explained or listed for checking before filing.",
        "Un tableau de contrôle pour une déclaration de TVA (réelle ou fictive), chaque écart expliqué ou listé à vérifier avant dépôt."),
      prompt: B("I am preparing the VAT return for [PERIOD] of a [STATUS] under [REGIME]. Do not fill in the official form.\nTable A, sales whose VAT is chargeable in the period: [DATE, CODE, BASE, RATE, VAT].\nTable B, purchases with a compliant invoice: [DATE, CODE, BASE, VAT, FIXED ASSET YES/NO].\nTable C, balances of the VAT accounts at the end of the period: [ACCOUNT, BALANCE].\n1. For each rate, check base times rate against the VAT of table A.\n2. Check the totals of A and B against table C.\n3. Find duplicates and lines with a rate that is not 20, 10, 5.5 or 2.1 %.\n4. List the lines whose document I must reread.\nAnswer as a table: control, expected, found, gap, line concerned. Do not guess a missing value: write \"missing\".",
        "Je prépare la déclaration de TVA de [PÉRIODE] d'une [STATUT] au [RÉGIME]. Ne remplis pas le formulaire officiel.\nTableau A, ventes dont la TVA est exigible sur la période : [DATE, CODE, BASE, TAUX, TVA].\nTableau B, achats avec facture conforme : [DATE, CODE, BASE, TVA, IMMOBILISATION OUI/NON].\nTableau C, soldes des comptes de TVA en fin de période : [COMPTE, SOLDE].\n1. Pour chaque taux, contrôle base fois taux contre la TVA du tableau A.\n2. Contrôle les totaux de A et B contre le tableau C.\n3. Repère les doublons et les lignes dont le taux n'est ni 20, ni 10, ni 5,5, ni 2,1 %.\n4. Liste les lignes dont je dois relire la pièce.\nRéponds par un tableau : contrôle, attendu, trouvé, écart, ligne concernée. Ne devine aucune valeur manquante : écris « manquant »."),
      check: [
        B("The period was closed and reconciled with the bank before the controls", "La période était bouclée et rapprochée de la banque avant les contrôles"),
        B("Every gap is either explained by a line or listed for checking", "Chaque écart est expliqué par une ligne ou listé pour vérification"),
        B("You entered the figures in the form yourself, from reconciled totals", "Vous avez saisi vous-même les montants, à partir de totaux rapprochés"),
        B("The worksheet is saved with the return, for later checks", "La feuille de calcul est archivée avec la déclaration"),
      ],
      bonus: B("Read the notice of the current CA3 (or CA12) form on impots.gouv.fr and map each figure of your worksheet to the box it goes in. Keep this mapping: next month, it turns the return into a copy.",
        "Lisez la notice du formulaire CA3 (ou CA12) en vigueur sur impots.gouv.fr et associez chaque montant de votre feuille à la case qui le reçoit. Gardez cette correspondance : le mois suivant, la déclaration devient une simple recopie."),
    },
    more: [
      { q: B("Table A shows 1,200 € of VAT at 20 % and account 44571 shows 1,200 € too. Is the return correct?",
          "Le tableau A indique 1 200 € de TVA à 20 % et le compte 44571 aussi. La déclaration est-elle juste ?"),
        options: [
          B("Yes, two matching figures prove the return is right", "Oui, deux montants identiques prouvent que tout est juste"),
          B("Yes, provided the AI confirms the total a second time", "Oui, à condition que l'IA confirme le total une seconde fois"),
          B("Likely, if the period is complete and nothing is missing", "Probablement, si la période est complète et rien ne manque"),
        ],
        answer: 2,
        why: B("Matching figures show the two sources agree, not that every operation is there. A sale never recorded is absent from both. The controls also need a complete period: bank reconciled, all invoices entered.",
          "Deux montants concordants montrent que les deux sources sont d'accord, pas que toutes les opérations y sont. Une vente jamais saisie manque des deux côtés. Les contrôles supposent aussi une période complète : banque rapprochée, factures saisies.") },
      { q: B("Where should Lina check which box of the form receives the deductible VAT on fixed assets?",
          "Où Lina doit-elle vérifier quelle case du formulaire reçoit la TVA déductible sur immobilisations ?"),
        options: [
          B("In the notice of the current form, on impots.gouv.fr", "Dans la notice du formulaire en vigueur, sur impots.gouv.fr"),
          B("In the answer of an AI, which knows every form by heart", "Dans la réponse d'une IA, qui connaît tous les formulaires"),
          B("In last year's return, since the boxes never change", "Dans la déclaration de l'an dernier, les cases ne changent pas"),
        ],
        answer: 0,
        why: B("Forms and their boxes evolve. The official notice of the current form is the reference; an AI may describe an old version, and last year's return may no longer match.",
          "Les formulaires et leurs cases évoluent. La notice officielle du formulaire en vigueur fait référence ; une IA peut décrire une ancienne version, et la déclaration de l'an dernier peut ne plus correspondre.") },
    ],
  },

  [enrichKey(M3, 'cp-einvoicing')]: {
    why: [
      B("France is generalising electronic invoicing between companies liable to VAT established in France (e-invoicing), and the transmission of transaction data for sales to individuals and international operations (e-reporting). The aim stated by the administration is to fight VAT fraud and, in time, to prefill VAT returns. An electronic invoice here means structured data in a standard format (Factur-X, UBL, CII), not a PDF sent by email.",
        "La France généralise la facturation électronique entre entreprises assujetties à la TVA établies en France (e-invoicing), et la transmission des données de transaction pour les ventes aux particuliers et les opérations internationales (e-reporting). L'objectif affiché par l'administration est de lutter contre la fraude à la TVA et, à terme, de préremplir les déclarations. Une facture électronique désigne ici des données structurées dans un format standard (Factur-X, UBL, CII), pas un PDF envoyé par email."),
      B("Invoices travel through approved platforms (plateformes agréées, formerly called PDP), listed officially by the administration. The calendar published under the 2024 finance law, already postponed once, provides that all companies must be able to receive electronic invoices from 1 September 2026, that large and mid-sized companies must issue them from that date, and small companies and micro-enterprises from 1 September 2027. Check it on impots.gouv.fr: it may change again.",
        "Les factures transitent par des plateformes agréées (anciennement appelées PDP), listées officiellement par l'administration. Le calendrier publié en application de la loi de finances pour 2024, déjà reporté une fois, prévoit que toutes les entreprises doivent pouvoir recevoir des factures électroniques à partir du 1er septembre 2026, que les grandes entreprises et les ETI doivent en émettre dès cette date, et les PME et microentreprises à partir du 1er septembre 2027. Vérifiez-le sur impots.gouv.fr : il peut encore évoluer."),
      B("For a small company, the work is mostly preparation: knowing its flows, choosing a platform, completing customer data. New mentions are announced, such as the customer's SIREN, the delivery address when it differs, the nature of the operation (goods, services or both) and, where relevant, the option for debits. An AI helps to inventory and to write the plan; the official texts and FAQ say what is required.",
        "Pour une petite entreprise, le travail est surtout de préparation : connaître ses flux, choisir une plateforme, compléter les données clients. De nouvelles mentions sont annoncées, comme le SIREN du client, l'adresse de livraison si elle diffère, la nature de l'opération (biens, services ou les deux) et, le cas échéant, l'option pour les débits. Une IA aide à inventorier et à écrire le plan ; les textes et la FAQ officiels disent ce qui est exigé."),
    ],
    example: {
      context: B("Lina hears that e-invoicing is coming and asks an AI what to do. The answer gives firm dates and a tool to buy, with no source, and mixes several versions of the calendar.",
        "Lina entend que la facture électronique arrive et demande à une IA quoi faire. La réponse donne des dates fermes et un outil à acheter, sans source, en mélangeant plusieurs versions du calendrier."),
      before: B("What do I have to do for electronic invoicing and when?",
        "Je dois faire quoi pour la facture électronique, et quand ?"),
      after: B("I run a French SASU (graphic design services to companies, online sales of notebooks to individuals). I want to prepare for the e-invoicing and e-reporting reform.\n1. Explain the difference between e-invoicing and e-reporting, and which of my flows falls under each: [MY FLOWS: B2B FRANCE, INDIVIDUALS, CLIENTS ABROAD, PURCHASES].\n2. Give the calendar as you know it, with the date of your information, and tell me explicitly to check it on impots.gouv.fr.\n3. List the data I should complete in my customer records.\n4. Give me a checklist to compare approved platforms (connection to my invoicing tool, formats, reception, archiving), without recommending a brand.\nDo not invent any date, threshold or obligation: if you are unsure, write \"to check on the official page\".",
        "Je dirige une SASU française (prestations de design graphique pour des entreprises, vente en ligne de carnets à des particuliers). Je veux me préparer à la réforme de la facturation électronique et de l'e-reporting.\n1. Explique la différence entre facturation électronique et e-reporting, et lequel concerne chacun de mes flux : [MES FLUX : B2B FRANCE, PARTICULIERS, CLIENTS À L'ÉTRANGER, ACHATS].\n2. Donne le calendrier tel que tu le connais, avec la date de ton information, et dis-moi explicitement de le vérifier sur impots.gouv.fr.\n3. Liste les données à compléter dans mes fiches clients.\n4. Donne-moi une grille pour comparer les plateformes agréées (lien avec mon outil de facturation, formats, réception, archivage), sans recommander de marque.\nN'invente aucune date, aucun seuil, aucune obligation : en cas de doute, écris « à vérifier sur la page officielle »."),
      takeaway: B("The second prompt describes the flows, asks for the date of the information and forbids invention. Lina gets a preparation plan and a comparison grid, and the dates go through the official page before entering her calendar.",
        "Le second prompt décrit les flux, demande la date de l'information et interdit l'invention. Lina obtient un plan de préparation et une grille de comparaison, et les dates passent par la page officielle avant d'entrer dans son agenda."),
    },
    exercise: {
      goal: B("A one-page e-invoicing readiness sheet for your company, real or fictional, with each date and obligation linked to an official source you have opened.",
        "Une fiche de préparation d'une page pour votre entreprise, réelle ou fictive, chaque date et chaque obligation reliée à une source officielle que vous avez ouverte."),
      prompt: B("My company: [STATUS, ACTIVITY, SIZE]. My flows: [B2B SALES IN FRANCE, SALES TO INDIVIDUALS, SALES ABROAD, PURCHASES].\nMy current invoicing tool: [TOOL OR SPREADSHEET].\n1. For each flow, say whether it falls under e-invoicing, e-reporting or neither, and why.\n2. List the data my invoices and customer records must contain for the reform, marking those that are new.\n3. Write a preparation plan in five steps with a target month for each, starting from [TODAY'S MONTH].\n4. Give me the questions to ask an approved platform before choosing it.\nFor every date and obligation, add \"source to check:\" followed by the name of the official site (impots.gouv.fr, economie.gouv.fr). Do not give any URL path.",
        "Mon entreprise : [STATUT, ACTIVITÉ, TAILLE]. Mes flux : [VENTES B2B EN FRANCE, VENTES AUX PARTICULIERS, VENTES À L'ÉTRANGER, ACHATS].\nMon outil de facturation actuel : [OUTIL OU TABLEUR].\n1. Pour chaque flux, dis s'il relève de la facturation électronique, de l'e-reporting ou d'aucun des deux, et pourquoi.\n2. Liste les données que mes factures et fiches clients doivent contenir pour la réforme, en marquant celles qui sont nouvelles.\n3. Rédige un plan de préparation en cinq étapes avec un mois cible pour chacune, à partir de [MOIS ACTUEL].\n4. Donne-moi les questions à poser à une plateforme agréée avant de la choisir.\nPour chaque date et chaque obligation, ajoute « source à vérifier : » suivi du nom du site officiel (impots.gouv.fr, economie.gouv.fr). Ne donne aucun chemin d'adresse."),
      check: [
        B("Each flow is assigned to e-invoicing, e-reporting or neither, with a reason", "Chaque flux est classé en facturation électronique, e-reporting ou aucun, avec sa raison"),
        B("Every date on the sheet was checked on the official page, with the day of checking", "Chaque date de la fiche a été vérifiée sur la page officielle, avec le jour de vérification"),
        B("Your customer records have a field for the SIREN number", "Vos fiches clients ont un champ pour le numéro SIREN"),
        B("The platform questions cover reception, formats and archiving", "Les questions aux plateformes couvrent la réception, les formats et l'archivage"),
      ],
      bonus: B("Look up the official list of approved platforms on impots.gouv.fr and check whether your invoicing or accounting tool appears there, or how it plans to connect to one. Note the answer and the date.",
        "Consultez la liste officielle des plateformes agréées sur impots.gouv.fr et vérifiez si votre outil de facturation ou de comptabilité y figure, ou comment il prévoit de s'y relier. Notez la réponse et la date."),
    },
    more: [
      { q: B("Studio Cerise sells a notebook online to an individual in France. Which part of the reform concerns this sale?",
          "Studio Cerise vend un carnet en ligne à un particulier en France. Quelle partie de la réforme concerne cette vente ?"),
        options: [
          B("E-invoicing, as for every sale made by a company", "La facturation électronique, comme pour toute vente d'une entreprise"),
          B("None, since sales to individuals stay outside the reform", "Aucune, les ventes aux particuliers restent hors de la réforme"),
          B("E-reporting: transaction data is sent, not an e-invoice", "L'e-reporting : on transmet des données, pas une facture électronique"),
        ],
        answer: 2,
        why: B("E-invoicing covers invoices between companies liable to VAT in France. Sales to individuals fall under e-reporting: the company transmits transaction data through its platform. Details and dates are on impots.gouv.fr.",
          "La facturation électronique vise les factures entre entreprises assujetties en France. Les ventes aux particuliers relèvent de l'e-reporting : l'entreprise transmet des données de transaction via sa plateforme. Détails et dates sur impots.gouv.fr.") },
      { q: B("An AI gives Lina a precise date for her obligation to issue e-invoices. What should she do first?",
          "Une IA donne à Lina une date précise pour son obligation d'émettre des factures électroniques. Que doit-elle faire d'abord ?"),
        options: [
          B("Check it on impots.gouv.fr, since the calendar has changed before", "La vérifier sur impots.gouv.fr, le calendrier a déjà changé"),
          B("Adopt it, since an AI cannot be wrong about a published date", "L'adopter, une IA ne peut se tromper sur une date publiée"),
          B("Ask the AI the same question again to confirm the answer", "Reposer la même question à l'IA pour confirmer la réponse"),
        ],
        answer: 0,
        why: B("The calendar of this reform has already been postponed once, and an AI may rely on outdated information. Only the official page gives the current dates; asking again only repeats the same source.",
          "Le calendrier de cette réforme a déjà été reporté une fois, et une IA peut s'appuyer sur une information dépassée. Seule la page officielle donne les dates actuelles ; reposer la question ne fait que répéter la même source.") },
    ],
  },

  [enrichKey(M3, 'cp-calendar')]: {
    why: [
      B("A small company faces deadlines from several authorities: VAT returns and payments, corporate tax instalments and the annual tax return for companies subject to it, social contributions (URSSAF), the CFE, and, for companies, the approval and filing of annual accounts. A missed deadline usually costs penalties or late interest, and the rules are public. The difficulty is not complexity but dispersion.",
        "Une petite entreprise fait face à des échéances venues de plusieurs administrations : déclarations et paiements de TVA, acomptes et déclaration annuelle d'impôt sur les sociétés pour celles qui y sont soumises, cotisations sociales (URSSAF), CFE et, pour les sociétés, approbation et dépôt des comptes annuels. Une échéance manquée coûte en général des pénalités ou des intérêts de retard, et les règles sont publiques. La difficulté n'est pas la complexité mais la dispersion."),
      B("Dates move: they depend on the regime, the closing date, the size of the company, sometimes on the first letters of the SIREN or the department, and they are adjusted each year. The authoritative sources are your professional space on impots.gouv.fr (with its tax calendar), your URSSAF account, Service-Public Entreprendre for formalities, and the notices you receive. A blog or an AI only gives a starting point.",
        "Les dates bougent : elles dépendent du régime, de la date de clôture, de la taille de l'entreprise, parfois du SIREN ou du département, et elles sont ajustées chaque année. Les sources qui font foi sont votre espace professionnel sur impots.gouv.fr (avec son agenda fiscal), votre compte URSSAF, Service-Public Entreprendre pour les formalités, et les avis que vous recevez. Un blog ou une IA ne donne qu'un point de départ."),
      B("An AI is good at the structure: listing families of obligations for a status, turning them into a table, writing reminders. It is weak at exact dates. The method is therefore to have it draft with a source column, to check each line, and to keep the date of checking. A calendar checked once a year, then shared with the accountant, prevents most surprises.",
        "Une IA est bonne pour la structure : lister les familles d'obligations pour un statut, en faire un tableau, rédiger des rappels. Elle est faible sur les dates exactes. La méthode consiste donc à lui faire rédiger un brouillon avec une colonne de sources, à vérifier chaque ligne et à garder la date de vérification. Un calendrier vérifié une fois par an, puis partagé avec le cabinet, évite la plupart des surprises."),
    ],
    example: {
      context: B("Lina asks an AI for \"all the deadlines of my company\". She gets a neat list of dates for a company that closes in June and declares VAT quarterly, which is not her case.",
        "Lina demande à une IA « toutes les échéances de ma société ». Elle obtient une jolie liste de dates pour une société qui clôture en juin et déclare sa TVA par trimestre, ce qui n'est pas son cas."),
      before: B("Give me all the tax deadlines of my company for next year.",
        "Donne-moi toutes les échéances fiscales de ma société pour l'an prochain."),
      after: B("My company: French SASU, corporate tax, financial year closing on 31 December, VAT under the normal real regime with a monthly return, one president, no employee yet.\nDraft a 12-month calendar of obligations from [START MONTH], as a table with these columns: month, obligation, authority (tax office, URSSAF, commercial court registry), what to prepare, official source to check, date to confirm.\nGroup by family: VAT, corporate tax, CFE, social contributions, annual accounts.\nWrite the dates as \"approximate, to confirm\" unless they are fixed by my own closing date, and explain the rule behind each one.\nDo not invent any date or threshold. End with the list of points where my status or options change the answer.",
        "Ma société : SASU française, à l'impôt sur les sociétés, exercice clos le 31 décembre, TVA au réel normal avec déclaration mensuelle, une présidente, pas encore de salarié.\nRédige un calendrier des obligations sur douze mois à partir de [MOIS DE DÉPART], sous forme de tableau avec ces colonnes : mois, obligation, administration (impôts, URSSAF, greffe), ce qu'il faut préparer, source officielle à vérifier, date à confirmer.\nRegroupe par famille : TVA, impôt sur les sociétés, CFE, cotisations sociales, comptes annuels.\nÉcris les dates « approximatives, à confirmer » sauf si elles découlent de ma propre date de clôture, et explique la règle derrière chacune.\nN'invente aucune date ni aucun seuil. Termine par la liste des points où mon statut ou mes options changent la réponse."),
      takeaway: B("The second prompt gives the closing date, the regime and the status, and asks for sources and rules rather than bare dates. The AI drafts the structure; Lina confirms each date in her professional space before it enters the calendar.",
        "Le second prompt donne la date de clôture, le régime et le statut, et demande des sources et des règles plutôt que des dates nues. L'IA rédige la structure ; Lina confirme chaque date dans son espace professionnel avant de l'inscrire à l'agenda."),
    },
    exercise: {
      goal: B("A checked 12-month calendar of obligations for your company, real or fictional, with the source and the day of checking for each line.",
        "Un calendrier vérifié sur douze mois pour votre entreprise, réelle ou fictive, avec pour chaque ligne la source et le jour de vérification."),
      prompt: B("My company: [STATUS], [TAX REGIME: INCOME TAX OR CORPORATE TAX], closing date [DATE], VAT regime [REGIME AND FREQUENCY], employees: [NUMBER].\nDraft a calendar of obligations over 12 months from [START MONTH], as a table: month, obligation, authority, what to prepare, official source to check, date to confirm.\nGroup by family: VAT, income or corporate tax, CFE, social contributions, annual accounts and formalities.\nFor each line, explain in one sentence the rule that sets the date.\nMark every date as \"to confirm\" unless it follows directly from my closing date.\nDo not invent any date, threshold or amount. End with the questions I should ask my accountant.",
        "Mon entreprise : [STATUT], [RÉGIME FISCAL : IMPÔT SUR LE REVENU OU IMPÔT SUR LES SOCIÉTÉS], date de clôture [DATE], régime de TVA [RÉGIME ET PÉRIODICITÉ], salariés : [NOMBRE].\nRédige un calendrier des obligations sur douze mois à partir de [MOIS DE DÉPART], sous forme de tableau : mois, obligation, administration, ce qu'il faut préparer, source officielle à vérifier, date à confirmer.\nRegroupe par famille : TVA, impôt sur le revenu ou sur les sociétés, CFE, cotisations sociales, comptes annuels et formalités.\nPour chaque ligne, explique en une phrase la règle qui fixe la date.\nMarque chaque date « à confirmer » sauf si elle découle directement de ma date de clôture.\nN'invente aucune date, aucun seuil, aucun montant. Termine par les questions à poser à mon expert-comptable."),
      check: [
        B("Each line names the authority and an official source", "Chaque ligne nomme l'administration et une source officielle"),
        B("Every date was confirmed in your professional space or on the official site", "Chaque date a été confirmée dans votre espace professionnel ou sur le site officiel"),
        B("The calendar has a reminder a week before each deadline", "L'agenda comporte un rappel une semaine avant chaque échéance"),
        B("The accountant has received the calendar and corrected it if needed", "Le cabinet a reçu le calendrier et l'a corrigé si besoin"),
      ],
      bonus: B("Add a line \"review this calendar\" in the first month of each year. Rules and dates change; a calendar never reviewed slowly turns into the blog post you were warned against.",
        "Ajoutez une ligne « revoir ce calendrier » au premier mois de chaque année. Règles et dates changent ; un calendrier jamais revu devient peu à peu l'article de blog dont il fallait se méfier."),
    },
    more: [
      { q: B("Lina's SASU closes on 31 December. Which deadline follows directly from that closing date?",
          "La SASU de Lina clôture au 31 décembre. Quelle échéance découle directement de cette date de clôture ?"),
        options: [
          B("The approval of the annual accounts within a set period", "L'approbation des comptes annuels dans un délai fixé"),
          B("The monthly VAT return, filed each month of the year", "La déclaration mensuelle de TVA, déposée chaque mois"),
          B("The CFE, whose notice arrives in her professional space", "La CFE, dont l'avis arrive dans son espace professionnel"),
        ],
        answer: 0,
        why: B("The approval and filing of the accounts are counted from the closing date, within periods set by law and described on Service-Public Entreprendre. VAT follows the regime, and the CFE follows its own notice.",
          "L'approbation et le dépôt des comptes se comptent à partir de la clôture, dans des délais fixés par la loi et décrits sur Service-Public Entreprendre. La TVA suit le régime, et la CFE suit son propre avis.") },
      { q: B("Which source is authoritative for the date of a URSSAF contribution payment?",
          "Quelle source fait foi pour la date d'un paiement de cotisations URSSAF ?"),
        options: [
          B("A comparison article listing every deadline of the year", "Un article comparatif qui liste toutes les échéances de l'année"),
          B("The URSSAF account of the company and the official site", "Le compte URSSAF de l'entreprise et le site officiel"),
          B("The calendar of the previous year, shifted by twelve months", "Le calendrier de l'an dernier, décalé de douze mois"),
        ],
        answer: 1,
        why: B("Social deadlines depend on the status and the declared frequency; the URSSAF account shows those of the company. An article is general, and last year's dates may have moved.",
          "Les échéances sociales dépendent du statut et de la périodicité choisie ; le compte URSSAF affiche celles de l'entreprise. Un article reste général, et les dates de l'an dernier ont pu bouger.") },
    ],
  },
}

const VAT_DEEP: Record<string, Deepening> = {
  [deepKey(M3, 'cp-vat-regimes')]: {
    intro: B("VAT is the tax most often mishandled in small businesses, not because its principle is hard but because its regimes and dates are easily confused. This lesson explains the mechanism (output VAT, input VAT, balance), the main regimes (franchise en base, simplified real, normal real) and when VAT becomes chargeable. You will follow Studio Cerise, the fictional SASU of Lina, a graphic designer who also sells printed notebooks, through these two modules. At the end, you will compute a monthly VAT balance and know what to check on official sources. Rules depend on your status and options: this lesson gives principles, never personalised advice.",
      "La TVA est l'impôt le plus souvent mal traité dans les petites entreprises, non que son principe soit difficile, mais parce que ses régimes et ses dates se confondent facilement. Ce cours explique le mécanisme (TVA collectée, TVA déductible, solde), les grands régimes (franchise en base, réel simplifié, réel normal) et le moment où la TVA devient exigible. Vous suivrez dans ces deux modules Studio Cerise, la SASU fictive de Lina, graphiste qui vend aussi des carnets imprimés. À la fin, vous saurez calculer un solde de TVA mensuel et ce qu'il faut vérifier sur les sources officielles. Les règles dépendent du statut et des options : ce cours donne des principes, jamais un conseil personnalisé."),
    concepts: [
      { term: B('Output VAT', 'TVA collectée'),
        def: B("The VAT a company adds to its sales and owes to the State, recorded in account 44571. It is not revenue: the company only holds it.",
          "La TVA que l'entreprise ajoute à ses ventes et doit à l'État, enregistrée au compte 44571. Ce n'est pas un produit : l'entreprise ne fait que la détenir.") },
      { term: B('Input VAT', 'TVA déductible'),
        def: B("The VAT paid on business purchases, recoverable with a compliant invoice (accounts 44566 and 44562). Some expenses are excluded or limited by the rules.",
          "La TVA payée sur les achats professionnels, récupérable avec une facture conforme (comptes 44566 et 44562). Certaines dépenses sont exclues ou limitées par les règles.") },
      { term: B('Chargeability', 'Exigibilité'),
        def: B("The moment output VAT must be declared: on delivery for goods, on payment for services unless the company opted for debits.",
          "Le moment où la TVA collectée doit être déclarée : à la livraison pour les biens, à l'encaissement pour les services, sauf option pour les débits.") },
      { term: B('VAT regime', 'Régime de TVA'),
        def: B("The set of rules that fixes whether and how often a company declares VAT: franchise en base, simplified real or normal real. It depends on turnover, status and options.",
          "L'ensemble des règles qui fixe si et à quel rythme l'entreprise déclare la TVA : franchise en base, réel simplifié ou réel normal. Il dépend du chiffre d'affaires, du statut et des options.") },
      { term: B('VAT credit', 'Crédit de TVA'),
        def: B("What remains when input VAT exceeds output VAT. It is carried forward to the next return or, under conditions described by the administration, refunded.",
          "Ce qui reste quand la TVA déductible dépasse la TVA collectée. Il se reporte sur la déclaration suivante ou, sous des conditions décrites par l'administration, se rembourse.") },
    ],
    walkthrough: {
      title: B("Lina computes the March VAT balance of Studio Cerise, a fictional SASU under the normal real regime.",
        "Lina calcule le solde de TVA de mars de Studio Cerise, SASU fictive au réel normal."),
      steps: [
        B("She lists the services collected in March: a 1,500 € excl. VAT logo invoiced in February and paid on 5 March, at 20 %. Why: for a service, the VAT (300 €) is chargeable in March, the month of payment, not in February.",
          "Elle liste les prestations encaissées en mars : un logo de 1 500 € HT facturé en février et payé le 5 mars, à 20 %. Pourquoi : pour une prestation, la TVA (300 €) est exigible en mars, mois de l'encaissement, et non en février."),
        B("She adds the notebooks shipped in March: 1,000 € excl. VAT at 20 %, so 200 € of VAT. Why: for goods, VAT is chargeable on delivery, whatever the payment date.",
          "Elle ajoute les carnets expédiés en mars : 1 000 € HT à 20 %, soit 200 € de TVA. Pourquoi : pour des biens, la TVA est exigible à la livraison, quelle que soit la date de paiement."),
        B("She lists purchases with a compliant invoice: printing 400 € excl. VAT (80 € VAT) and software 50 € excl. VAT (10 € VAT). Why: their VAT is deductible because the expenses serve taxable sales and the invoices are compliant.",
          "Elle liste les achats avec facture conforme : impression 400 € HT (80 € de TVA) et logiciel 50 € HT (10 € de TVA). Pourquoi : leur TVA est déductible, car ces dépenses servent des ventes taxables et les factures sont conformes."),
        B("She sets aside a restaurant receipt without the client's name or a full invoice, and marks it \"to check\". Why: without a compliant invoice, or for a limited expense, deduction is not certain; she does not decide alone.",
          "Elle met de côté un ticket de restaurant sans facture complète, et le marque « à vérifier ». Pourquoi : sans facture conforme, ou pour une dépense à déduction limitée, la déduction n'est pas acquise ; elle ne tranche pas seule."),
        B("She computes: output VAT 500 €, input VAT 90 €, balance 410 € to pay. Why: the balance is a simple subtraction once each line sits in the right month and the right account.",
          "Elle calcule : TVA collectée 500 €, TVA déductible 90 €, solde de 410 € à payer. Pourquoi : le solde est une simple soustraction, une fois chaque ligne placée dans le bon mois et le bon compte."),
      ],
    },
    mistakes: [
      { wrong: B("Recording sales including VAT as revenue, and purchases including VAT as expenses.",
          "Enregistrer les ventes TTC en chiffre d'affaires, et les achats TTC en charges."),
        fix: B("For a company liable to VAT, record revenue and expenses excluding VAT, and the VAT in third-party accounts (44571, 44566, 44562).",
          "Pour une entreprise redevable, comptabilisez produits et charges hors taxes, et la TVA dans les comptes de tiers (44571, 44566, 44562).") },
      { wrong: B("Applying a VAT rate from memory to a product or a service.",
          "Appliquer de mémoire un taux de TVA à un produit ou à un service."),
        fix: B("Use the rate set by the rules for that operation, checked in the official doctrine (BOFiP) or on impots.gouv.fr, and ask your accountant if in doubt.",
          "Utilisez le taux prévu par les règles pour cette opération, vérifié dans la doctrine officielle (BOFiP) ou sur impots.gouv.fr, et demandez à votre expert-comptable en cas de doute.") },
      { wrong: B("Declaring the VAT of all services on the invoice date out of habit.",
          "Déclarer par habitude la TVA de toutes les prestations à la date de facture."),
        fix: B("Unless you opted for debits, declare the VAT of services in the month of payment, and keep a column \"payment date\" in your sales table.",
          "Sauf option pour les débits, déclarez la TVA des prestations le mois de l'encaissement, et gardez une colonne « date de paiement » dans votre tableau des ventes.") },
    ],
    recap: [
      B("VAT due equals output VAT minus deductible input VAT.", "La TVA due est la TVA collectée moins la TVA déductible."),
      B("The regime (franchise, simplified real, normal real) sets whether and how often you declare.", "Le régime (franchise, réel simplifié, réel normal) fixe si et à quel rythme vous déclarez."),
      B("Goods: VAT due on delivery. Services: on payment, unless the option for debits.", "Biens : TVA exigible à la livraison. Services : à l'encaissement, sauf option pour les débits."),
      B("Deduction requires a compliant invoice; some expenses are excluded or limited.", "La déduction suppose une facture conforme ; certaines dépenses sont exclues ou limitées."),
    ],
    further: B("Read the VAT section of impots.gouv.fr for professionals, then the general page on VAT regimes on Service-Public Entreprendre. Write down your own regime, its frequency and whether you opted for debits, and have this note confirmed by your accountant.",
      "Lisez la rubrique TVA de l'espace professionnel d'impots.gouv.fr, puis la page générale sur les régimes de TVA de Service-Public Entreprendre. Notez votre propre régime, sa périodicité et l'existence d'une option pour les débits, et faites confirmer cette note par votre expert-comptable."),
    more: [
      { q: B("In March, Studio Cerise ships 1,000 € excl. VAT of notebooks, to be paid in May. When is the VAT on these notebooks chargeable?",
          "En mars, Studio Cerise expédie 1 000 € HT de carnets, payables en mai. Quand la TVA de ces carnets est-elle exigible ?"),
        options: [
          B("In May, when the client pays the invoice", "En mai, quand le client règle la facture"),
          B("In March, on delivery of the goods", "En mars, à la livraison des biens"),
          B("At closing, with the year-end entries", "À la clôture, avec les écritures d'inventaire"),
        ],
        answer: 1,
        why: B("For goods, VAT becomes chargeable on delivery. The payment date matters for services (without the option for debits), not for the sale of notebooks.",
          "Pour des biens, la TVA devient exigible à la livraison. La date de paiement compte pour les services (sans option pour les débits), pas pour la vente de carnets.") },
      { q: B("Output VAT is 300 € and deductible VAT is 450 € for the month. What happens?",
          "La TVA collectée du mois est de 300 € et la TVA déductible de 450 €. Que se passe-t-il ?"),
        options: [
          B("The company pays 450 € and recovers 300 € next year", "L'entreprise paie 450 € et récupère 300 € l'an prochain"),
          B("The 150 € difference is lost, since deduction is capped", "Les 150 € d'écart sont perdus, la déduction étant plafonnée"),
          B("A 150 € VAT credit appears, carried forward or refunded", "Un crédit de TVA de 150 € apparaît, reporté ou remboursé"),
        ],
        answer: 2,
        why: B("When deductible VAT exceeds output VAT, the difference is a VAT credit. It is carried forward to the next return or, under conditions set by the administration, refunded.",
          "Quand la TVA déductible dépasse la collectée, la différence forme un crédit de TVA. Il se reporte sur la déclaration suivante ou, sous conditions fixées par l'administration, se rembourse.") },
    ],
  },

  [deepKey(M3, 'cp-vat-returns')]: {
    intro: B("A VAT return takes a few minutes to fill in and hours to correct when it is wrong. This lesson shows how to prepare it as a summary of books you have already checked: close the period, extract the VAT accounts, run consistency controls, then enter the figures yourself. You will use an AI as a controller (comparing tables, recomputing, spotting duplicates) rather than as a form filler. At the end, you will have a reusable worksheet that maps each figure of your books to the form, for Studio Cerise and for your own company.",
      "Une déclaration de TVA se remplit en quelques minutes et se corrige en plusieurs heures quand elle est fausse. Ce cours montre comment la préparer comme le résumé de comptes déjà contrôlés : boucler la période, extraire les comptes de TVA, mener des contrôles de cohérence, puis saisir vous-même les montants. Vous utiliserez une IA comme contrôleur (comparer des tableaux, recalculer, repérer des doublons) plutôt que comme remplisseur de formulaire. À la fin, vous disposerez d'une feuille de travail réutilisable qui relie chaque montant de vos comptes au formulaire, pour Studio Cerise comme pour votre propre entreprise."),
    concepts: [
      { term: B('CA3 and CA12', 'CA3 et CA12'),
        def: B("The two main VAT return forms: CA3 for the normal real regime (monthly or quarterly), CA12 for the annual return of the simplified real regime.",
          "Les deux principaux formulaires de déclaration de TVA : la CA3 pour le réel normal (mensuelle ou trimestrielle), la CA12 pour la déclaration annuelle du réel simplifié.") },
      { term: B('Taxable base', 'Base imposable'),
        def: B("The amount excluding VAT on which VAT is calculated, declared rate by rate. Base times rate must give the output VAT, give or take rounding.",
          "Le montant hors taxes sur lequel la TVA est calculée, déclaré taux par taux. La base multipliée par le taux doit donner la TVA collectée, aux arrondis près.") },
      { term: B('Consistency control', 'Contrôle de cohérence'),
        def: B("A check that two sources agree: sales table and account 44571, purchases and 44566, totals and bank. A gap points to a line to reopen.",
          "Une vérification que deux sources concordent : tableau des ventes et compte 44571, achats et 44566, totaux et banque. Un écart désigne une ligne à rouvrir.") },
      { term: B('Online filing and payment', 'Télédéclaration et télérèglement'),
        def: B("Companies file VAT returns and pay online from their professional space on impots.gouv.fr, by the deadline that applies to them.",
          "Les entreprises déposent leurs déclarations de TVA et paient en ligne depuis leur espace professionnel sur impots.gouv.fr, avant l'échéance qui les concerne.") },
    ],
    walkthrough: {
      title: B("Lina prepares the March return of Studio Cerise and finds a 120 € gap before filing.",
        "Lina prépare la déclaration de mars de Studio Cerise et trouve un écart de 120 € avant de déposer."),
      steps: [
        B("She checks that March is closed: all sales and purchase invoices entered, bank reconciled to the last line. Why: a return built on an incomplete month is wrong even if every control passes.",
          "Elle vérifie que mars est bouclé : factures de ventes et d'achats saisies, banque rapprochée jusqu'à la dernière ligne. Pourquoi : une déclaration bâtie sur un mois incomplet est fausse même si tous les contrôles passent."),
        B("She exports from the ledger the sales at 20 % (base 6,000 €) and the balance of 44571 (1,320 €). Why: the two figures should agree, since 6,000 € at 20 % gives 1,200 €.",
          "Elle exporte du grand livre les ventes à 20 % (base 6 000 €) et le solde du 44571 (1 320 €). Pourquoi : les deux montants devraient concorder, puisque 6 000 € à 20 % donnent 1 200 €."),
        B("She sends both tables, without client names, to an AI with the instruction to find lines whose VAT is not 20 % of their base. Why: the AI compares line by line faster than she would, and she keeps the decision.",
          "Elle transmet les deux tableaux, sans noms de clients, à une IA avec la consigne de trouver les lignes dont la TVA n'est pas 20 % de la base. Pourquoi : l'IA compare ligne à ligne plus vite qu'elle, et elle garde la décision."),
        B("The AI points to a 600 € sale whose VAT was entered twice (120 € recorded as 240 €). Lina opens the invoice and confirms. Why: a gap is explained by a document, not by the AI's word.",
          "L'IA désigne une vente de 600 € dont la TVA a été saisie deux fois (240 € au lieu de 120 €). Lina ouvre la facture et confirme. Pourquoi : un écart s'explique par une pièce, pas par la parole de l'IA."),
        B("She corrects the entry, checks that 44571 now shows 1,200 €, enters the figures in her professional space and saves the worksheet. Why: the return now copies books that have been corrected, and the worksheet will serve next month.",
          "Elle corrige l'écriture, vérifie que le 44571 affiche désormais 1 200 €, saisit les montants dans son espace professionnel et archive la feuille. Pourquoi : la déclaration recopie maintenant des comptes corrigés, et la feuille servira le mois suivant."),
      ],
    },
    mistakes: [
      { wrong: B("Filing the return before the bank reconciliation of the month is finished.",
          "Déposer la déclaration avant d'avoir terminé le rapprochement bancaire du mois."),
        fix: B("Make the reconciliation the first step of every return: an unrecorded payment or sale changes the VAT, and you would have to correct it later.",
          "Faites du rapprochement la première étape de chaque déclaration : un encaissement ou une vente non saisis changent la TVA, et il faudrait corriger ensuite.") },
      { wrong: B("Letting an AI fill in the official form from a raw export.",
          "Laisser une IA remplir le formulaire officiel à partir d'un export brut."),
        fix: B("Ask the AI for controls and a table of gaps, then enter the figures yourself from reconciled totals, using the notice of the current form.",
          "Demandez à l'IA des contrôles et un tableau des écarts, puis saisissez vous-même les montants à partir de totaux rapprochés, avec la notice du formulaire en vigueur.") },
      { wrong: B("Keeping no trace of how the figures of the return were obtained.",
          "Ne garder aucune trace de la façon dont les montants déclarés ont été obtenus."),
        fix: B("Archive the worksheet and the control table with each return. In case of a question from the administration or the accountant, the reasoning is there.",
          "Archivez la feuille de calcul et le tableau de contrôle avec chaque déclaration. En cas de question de l'administration ou du cabinet, le raisonnement est là.") },
    ],
    recap: [
      B("A VAT return is a summary of closed, reconciled books.", "Une déclaration de TVA est le résumé de comptes bouclés et rapprochés."),
      B("For each rate, base times rate must equal output VAT, give or take rounding.", "Pour chaque taux, base fois taux doit égaler la TVA collectée, aux arrondis près."),
      B("Use the AI to control and compare, not to decide or fill in the form.", "Servez-vous de l'IA pour contrôler et comparer, pas pour décider ni remplir le formulaire."),
      B("The notice of the current form, on impots.gouv.fr, says which box receives what.", "La notice du formulaire en vigueur, sur impots.gouv.fr, dit quelle case reçoit quoi."),
      B("Archive the worksheet with each return.", "Archivez la feuille de travail avec chaque déclaration."),
    ],
    further: B("Download the notice of the current CA3 (or CA12) form from impots.gouv.fr and build a one-page mapping between your accounts and the boxes. Then ask your accountant to review it once: this single check makes every following month faster and safer.",
      "Téléchargez la notice du formulaire CA3 (ou CA12) en vigueur sur impots.gouv.fr et construisez une correspondance d'une page entre vos comptes et les cases. Demandez ensuite à votre expert-comptable de la relire une fois : cette seule vérification rend chaque mois suivant plus rapide et plus sûr."),
    more: [
      { q: B("The AI says a sale of 600 € has a VAT of 240 € instead of 120 €. What do you do before correcting?",
          "L'IA signale qu'une vente de 600 € porte 240 € de TVA au lieu de 120 €. Que faites-vous avant de corriger ?"),
        options: [
          B("You correct it at once, since the AI compared the lines", "Vous corrigez aussitôt, puisque l'IA a comparé les lignes"),
          B("You open the invoice to confirm the amount and the rate", "Vous ouvrez la facture pour confirmer le montant et le taux"),
          B("You leave it, since a small gap is accepted by the office", "Vous laissez, un petit écart étant admis par l'administration"),
        ],
        answer: 1,
        why: B("The document is the proof. The AI may be right, but it may also have misread a line; opening the invoice settles the question and justifies the correction.",
          "La pièce fait preuve. L'IA a peut-être raison, mais elle a pu mal lire une ligne ; ouvrir la facture tranche la question et justifie la correction.") },
      { q: B("Why should the bank reconciliation come before the VAT controls?",
          "Pourquoi le rapprochement bancaire doit-il précéder les contrôles de TVA ?"),
        options: [
          B("Because the tax office checks the bank balance first", "Parce que l'administration vérifie d'abord le solde bancaire"),
          B("Because an AI cannot read a bank statement correctly", "Parce qu'une IA ne sait pas lire un relevé bancaire"),
          B("Because missing payments change which VAT is chargeable", "Parce que des paiements manquants changent la TVA exigible"),
        ],
        answer: 2,
        why: B("For services, VAT follows payments. A payment not yet recorded means VAT left out of the return, even if all the controls between the recorded figures pass.",
          "Pour les services, la TVA suit les encaissements. Un paiement non saisi, c'est de la TVA oubliée dans la déclaration, même si tous les contrôles entre les montants saisis passent.") },
    ],
  },

  [deepKey(M3, 'cp-einvoicing')]: {
    intro: B("Electronic invoicing is the largest change in invoicing practice in France for many years. This lesson explains what the reform requires (e-invoicing between companies liable to VAT, e-reporting for other operations), who carries the invoices (approved platforms), what an electronic invoice is (structured data, not a PDF) and the calendar as published at the time of writing, which you must check. You will prepare the readiness sheet of Studio Cerise, which has both business clients and individual buyers. At the end, you will know what to prepare and where to verify, without relying on an outdated date.",
      "La facturation électronique est le plus grand changement de pratique de facturation en France depuis longtemps. Ce cours explique ce que la réforme exige (facturation électronique entre entreprises assujetties, e-reporting pour les autres opérations), qui transporte les factures (les plateformes agréées), ce qu'est une facture électronique (des données structurées, pas un PDF) et le calendrier tel que publié à la date de rédaction, que vous devez vérifier. Vous préparerez la fiche de Studio Cerise, qui a des clients professionnels et des acheteurs particuliers. À la fin, vous saurez quoi préparer et où vérifier, sans vous fier à une date dépassée."),
    concepts: [
      { term: B('E-invoicing', 'Facturation électronique (e-invoicing)'),
        def: B("The obligation to issue and receive invoices in a structured electronic format for operations between companies liable to VAT established in France.",
          "L'obligation d'émettre et de recevoir des factures dans un format électronique structuré pour les opérations entre entreprises assujetties à la TVA établies en France.") },
      { term: B('E-reporting', 'E-reporting'),
        def: B("The transmission to the administration of transaction and payment data for operations outside e-invoicing, such as sales to individuals or with foreign companies.",
          "La transmission à l'administration des données de transaction et de paiement pour les opérations hors facturation électronique, comme les ventes aux particuliers ou avec des entreprises étrangères.") },
      { term: B('Approved platform', 'Plateforme agréée'),
        def: B("A provider approved by the administration (formerly called PDP) that issues, receives and transmits invoices and data. The list is published officially.",
          "Un prestataire immatriculé par l'administration (anciennement appelé PDP) qui émet, reçoit et transmet les factures et les données. La liste est publiée officiellement.") },
      { term: B('Structured format', 'Format structuré'),
        def: B("A format a machine can read field by field: Factur-X (a PDF carrying structured data), UBL or CII. A plain PDF is not structured.",
          "Un format lisible champ par champ par une machine : Factur-X (un PDF qui porte des données structurées), UBL ou CII. Un PDF simple n'est pas structuré.") },
    ],
    walkthrough: {
      title: B("Lina writes the e-invoicing readiness sheet of Studio Cerise, a SASU with business clients and individual buyers.",
        "Lina rédige la fiche de préparation de Studio Cerise, SASU qui a des clients professionnels et des acheteurs particuliers."),
      steps: [
        B("She opens the official reform page on impots.gouv.fr and notes the published dates for receiving and issuing, with the day she read them. Why: the calendar has already moved once; a dated note shows when it was last checked.",
          "Elle ouvre la page officielle de la réforme sur impots.gouv.fr et note les dates publiées pour la réception et l'émission, avec le jour de lecture. Pourquoi : le calendrier a déjà bougé une fois ; une note datée montre quand il a été vérifié."),
        B("She sorts her flows: design services to French companies (e-invoicing), notebooks to individuals (e-reporting), a client in Belgium (e-reporting), purchases from French suppliers (reception). Why: each flow follows a different rule.",
          "Elle trie ses flux : prestations pour des entreprises françaises (facturation électronique), carnets aux particuliers (e-reporting), un client en Belgique (e-reporting), achats auprès de fournisseurs français (réception). Pourquoi : chaque flux suit une règle différente."),
        B("She asks an AI for a comparison grid of approved platforms (connection to her tool, formats, reception, archiving), without brand recommendations. Why: she wants criteria, then checks each candidate against the official list.",
          "Elle demande à une IA une grille de comparaison des plateformes agréées (lien avec son outil, formats, réception, archivage), sans recommandation de marque. Pourquoi : elle veut des critères, puis vérifie chaque candidat dans la liste officielle."),
        B("She adds a SIREN field and a \"nature of operation\" field to her customer records and fills them for her ten business clients. Why: these data are announced as mandatory, and collecting them late delays the first invoices.",
          "Elle ajoute un champ SIREN et un champ « nature de l'opération » à ses fiches clients et les remplit pour ses dix clients professionnels. Pourquoi : ces données sont annoncées comme obligatoires, et les collecter tard retarde les premières factures."),
        B("She sends the sheet to her accountant with two questions: which platform the firm works with, and whether her option for VAT on payments must appear on invoices. Why: the accountant knows her situation; the sheet makes the conversation precise.",
          "Elle envoie la fiche à son expert-comptable avec deux questions : avec quelle plateforme le cabinet travaille, et comment ses règles d'exigibilité doivent apparaître sur les factures. Pourquoi : le cabinet connaît sa situation ; la fiche rend l'échange précis."),
      ],
    },
    mistakes: [
      { wrong: B("Thinking that sending PDFs by email already meets the reform.",
          "Croire que l'envoi de PDF par email répond déjà à la réforme."),
        fix: B("Remember that an electronic invoice is structured data sent through an approved platform. Check how your invoicing tool will produce and transmit it.",
          "Retenez qu'une facture électronique est un ensemble de données structurées transmis par une plateforme agréée. Vérifiez comment votre outil de facturation la produira et la transmettra.") },
      { wrong: B("Writing a reform date in the calendar from an article or an AI answer.",
          "Inscrire une date de la réforme à l'agenda à partir d'un article ou d'une réponse d'IA."),
        fix: B("Take every date from the official page on impots.gouv.fr, note the day you read it, and check again a few months before it applies.",
          "Prenez chaque date sur la page officielle d'impots.gouv.fr, notez le jour de lecture, et revérifiez quelques mois avant son application.") },
      { wrong: B("Preparing only for issuing invoices and forgetting reception.",
          "Ne se préparer qu'à l'émission des factures et oublier la réception."),
        fix: B("Plan for reception first: according to the published calendar, every company must be able to receive electronic invoices, whatever its size.",
          "Prévoyez d'abord la réception : selon le calendrier publié, toute entreprise doit pouvoir recevoir des factures électroniques, quelle que soit sa taille.") },
    ],
    recap: [
      B("E-invoicing concerns invoices between companies liable to VAT in France.", "La facturation électronique concerne les factures entre entreprises assujetties en France."),
      B("E-reporting covers sales to individuals and international operations.", "L'e-reporting couvre les ventes aux particuliers et les opérations internationales."),
      B("Invoices go through approved platforms, listed officially.", "Les factures passent par des plateformes agréées, listées officiellement."),
      B("An electronic invoice is structured data, not a PDF sent by email.", "Une facture électronique est faite de données structurées, pas d'un PDF envoyé par email."),
      B("The calendar has changed before: check it on impots.gouv.fr.", "Le calendrier a déjà changé : vérifiez-le sur impots.gouv.fr."),
    ],
    further: B("Read the FAQ of the reform on impots.gouv.fr and the presentation on economie.gouv.fr, then ask your invoicing or accounting tool provider in writing how it will connect to an approved platform. Keep the answer with your readiness sheet.",
      "Lisez la FAQ de la réforme sur impots.gouv.fr et la présentation sur economie.gouv.fr, puis demandez par écrit à l'éditeur de votre outil de facturation ou de comptabilité comment il se reliera à une plateforme agréée. Gardez la réponse avec votre fiche de préparation."),
    more: [
      { q: B("Studio Cerise buys paper from a French supplier. What must it be able to do under the published calendar?",
          "Studio Cerise achète du papier à un fournisseur français. Que doit-elle pouvoir faire selon le calendrier publié ?"),
        options: [
          B("Receive the supplier's electronic invoice via a platform", "Recevoir la facture électronique du fournisseur via une plateforme"),
          B("Nothing, since only sales are concerned by the reform", "Rien, puisque seules les ventes sont concernées par la réforme"),
          B("Reissue the supplier's invoice in its own platform", "Réémettre la facture du fournisseur dans sa propre plateforme"),
        ],
        answer: 0,
        why: B("The reform covers both sides: according to the published calendar, every company must be able to receive electronic invoices, before the issuing obligation applies to small companies.",
          "La réforme vise les deux côtés : selon le calendrier publié, toute entreprise doit pouvoir recevoir des factures électroniques, avant que l'obligation d'émission ne s'applique aux petites entreprises.") },
      { q: B("Why add the SIREN number of business clients to customer records now?",
          "Pourquoi ajouter dès maintenant le numéro SIREN des clients professionnels aux fiches clients ?"),
        options: [
          B("Because it replaces the invoice number in the new system", "Parce qu'il remplace le numéro de facture dans le nouveau système"),
          B("Because it is announced as a new mandatory mention", "Parce qu'il est annoncé comme une nouvelle mention obligatoire"),
          B("Because platforms charge less for clients with a SIREN", "Parce que les plateformes facturent moins cher avec un SIREN"),
        ],
        answer: 1,
        why: B("The client's SIREN is among the new mentions announced for invoices. Collecting it in advance avoids blocking the first electronic invoices; the official list of mentions is on impots.gouv.fr.",
          "Le SIREN du client fait partie des nouvelles mentions annoncées. Le collecter à l'avance évite de bloquer les premières factures électroniques ; la liste officielle des mentions est sur impots.gouv.fr.") },
    ],
  },

  [deepKey(M3, 'cp-calendar')]: {
    intro: B("Most penalties paid by small companies do not come from complex rules but from forgotten dates. This lesson shows how to build a yearly calendar of obligations (VAT, income or corporate tax, CFE, social contributions, annual accounts) from official sources, with an AI as a drafting assistant rather than as an authority. You will draft the calendar of Studio Cerise, check each line in its official source and share it with the accountant. At the end, you will have a method you can repeat each January, whatever your status.",
      "La plupart des pénalités payées par les petites entreprises ne viennent pas de règles complexes mais de dates oubliées. Ce cours montre comment construire un calendrier annuel des obligations (TVA, impôt sur le revenu ou sur les sociétés, CFE, cotisations sociales, comptes annuels) à partir des sources officielles, avec une IA comme assistante de rédaction plutôt que comme autorité. Vous rédigerez le calendrier de Studio Cerise, vérifierez chaque ligne à sa source officielle et le partagerez avec le cabinet. À la fin, vous aurez une méthode à répéter chaque mois de janvier, quel que soit votre statut."),
    concepts: [
      { term: B('Professional space', 'Espace professionnel'),
        def: B("The online account of a company on impots.gouv.fr, where it files returns, pays, reads its notices (such as the CFE) and finds its own tax calendar.",
          "Le compte en ligne de l'entreprise sur impots.gouv.fr, où elle déclare, paie, lit ses avis (comme celui de la CFE) et trouve son propre agenda fiscal.") },
      { term: B('CFE', 'CFE'),
        def: B("The cotisation foncière des entreprises, a local tax most companies owe. Its amount and deadline appear on the notice in the professional space.",
          "La cotisation foncière des entreprises, un impôt local dû par la plupart des entreprises. Son montant et son échéance figurent sur l'avis de l'espace professionnel.") },
      { term: B('Annual accounts', 'Comptes annuels'),
        def: B("The balance sheet, income statement and notes a company prepares after closing, then approves and, depending on its form, files with the registry within set periods.",
          "Le bilan, le compte de résultat et l'annexe que la société établit après la clôture, puis approuve et, selon sa forme, dépose au greffe dans des délais fixés.") },
      { term: B('Official source', 'Source officielle'),
        def: B("A site or document published by the authority concerned: impots.gouv.fr, urssaf.fr, Service-Public Entreprendre, BOFiP, Légifrance. It is authoritative; a blog is not.",
          "Un site ou un document publié par l'administration concernée : impots.gouv.fr, urssaf.fr, Service-Public Entreprendre, BOFiP, Légifrance. Il fait foi ; un blog non.") },
    ],
    walkthrough: {
      title: B("Lina builds the 12-month calendar of Studio Cerise and checks it with official sources.",
        "Lina construit le calendrier sur douze mois de Studio Cerise et le vérifie aux sources officielles."),
      steps: [
        B("She writes down the facts that decide the dates: SASU, corporate tax, closing on 31 December, monthly VAT, no employee. Why: without these facts, any calendar is the calendar of another company.",
          "Elle note les faits qui décident des dates : SASU, impôt sur les sociétés, clôture au 31 décembre, TVA mensuelle, pas de salarié. Pourquoi : sans ces faits, tout calendrier est celui d'une autre entreprise."),
        B("She asks an AI for a draft table with columns month, obligation, authority, preparation, source, \"date to confirm\". Why: the AI builds the structure quickly; the columns force it to name sources.",
          "Elle demande à une IA un tableau provisoire avec les colonnes mois, obligation, administration, préparation, source, « date à confirmer ». Pourquoi : l'IA bâtit vite la structure ; les colonnes l'obligent à nommer ses sources."),
        B("She checks the VAT and corporate tax lines in the tax calendar of her professional space, and the CFE line on its notice. Why: these are the authoritative places for her company.",
          "Elle vérifie les lignes de TVA et d'impôt sur les sociétés dans l'agenda de son espace professionnel, et la ligne CFE sur son avis. Pourquoi : ce sont les lieux qui font foi pour son entreprise."),
        B("She checks her social contributions in her URSSAF account and the approval and filing of accounts on Service-Public Entreprendre. Why: each authority publishes its own rules; mixing sources creates errors.",
          "Elle vérifie ses cotisations sociales dans son compte URSSAF, et l'approbation et le dépôt des comptes sur Service-Public Entreprendre. Pourquoi : chaque administration publie ses propres règles ; mélanger les sources crée des erreurs."),
        B("She copies the confirmed dates into a shared calendar with a reminder seven days before, and sends the table to her accountant. Why: a reminder turns a date into an action, and the accountant can correct what she missed.",
          "Elle reporte les dates confirmées dans un agenda partagé, avec un rappel sept jours avant, et envoie le tableau à son expert-comptable. Pourquoi : un rappel transforme une date en action, et le cabinet peut corriger ce qu'elle a manqué."),
      ],
    },
    mistakes: [
      { wrong: B("Copying a calendar found online for \"all companies\".",
          "Recopier un calendrier trouvé en ligne « pour toutes les entreprises »."),
        fix: B("Start from your own facts (status, regime, closing date) and confirm each line in your professional space and on the official site of each authority.",
          "Partez de vos propres faits (statut, régime, date de clôture) et confirmez chaque ligne dans votre espace professionnel et sur le site officiel de chaque administration.") },
      { wrong: B("Writing dates without the time needed to prepare them.",
          "Inscrire des dates sans le temps nécessaire pour les préparer."),
        fix: B("Add a reminder a week before, and a preparation task (close the month, gather documents) a few days before that.",
          "Ajoutez un rappel une semaine avant, et une tâche de préparation (boucler le mois, réunir les pièces) quelques jours plus tôt.") },
      { wrong: B("Building the calendar once and never reviewing it.",
          "Construire le calendrier une fois et ne jamais le revoir."),
        fix: B("Review it each January and after any change (new regime, first employee, change of closing date), and note the day of each check.",
          "Revoyez-le chaque mois de janvier et après tout changement (nouveau régime, premier salarié, changement de date de clôture), et notez le jour de chaque vérification.") },
    ],
    recap: [
      B("Your dates depend on your status, regime and closing date.", "Vos dates dépendent de votre statut, de votre régime et de votre date de clôture."),
      B("The AI drafts the structure; official sources confirm each date.", "L'IA rédige la structure ; les sources officielles confirment chaque date."),
      B("The professional space, the URSSAF account and the notices are authoritative.", "L'espace professionnel, le compte URSSAF et les avis font foi."),
      B("A reminder a week before turns a date into an action.", "Un rappel une semaine avant transforme une date en action."),
    ],
    further: B("Open the tax calendar of your professional space on impots.gouv.fr and the pages on annual accounts of Service-Public Entreprendre. Compare them with the calendar you drafted, then ask your accountant which dates the firm handles for you and which remain yours.",
      "Ouvrez l'agenda fiscal de votre espace professionnel sur impots.gouv.fr et les pages consacrées aux comptes annuels de Service-Public Entreprendre. Comparez-les avec le calendrier rédigé, puis demandez à votre expert-comptable quelles échéances le cabinet gère pour vous et lesquelles restent les vôtres."),
    more: [
      { q: B("Lina's AI draft lists a quarterly VAT return, but her company files monthly. What does this tell her?",
          "Le brouillon de l'IA prévoit une déclaration de TVA trimestrielle, alors que la société de Lina déclare chaque mois. Qu'en conclut-elle ?"),
        options: [
          B("That she should switch to quarterly returns, as advised", "Qu'elle devrait passer au trimestre, comme conseillé"),
          B("That the AI used general rules, not her actual regime", "Que l'IA a appliqué des règles générales, pas son régime réel"),
          B("That both rhythms are allowed, so either one is fine", "Que les deux rythmes sont permis, donc l'un ou l'autre convient"),
        ],
        answer: 1,
        why: B("The AI filled a gap with a general case. Lina's regime and frequency are facts written in her professional space: the line must be corrected, not followed.",
          "L'IA a comblé un manque par un cas général. Le régime et la périodicité de Lina sont des faits inscrits dans son espace professionnel : la ligne doit être corrigée, pas suivie.") },
      { q: B("Which deadline should Lina confirm on Service-Public Entreprendre rather than on impots.gouv.fr?",
          "Quelle échéance Lina doit-elle confirmer sur Service-Public Entreprendre plutôt que sur impots.gouv.fr ?"),
        options: [
          B("The monthly VAT return and its payment", "La déclaration mensuelle de TVA et son paiement"),
          B("The CFE notice and the amount to pay", "L'avis de CFE et le montant à payer"),
          B("The approval and filing of the annual accounts", "L'approbation et le dépôt des comptes annuels"),
        ],
        answer: 2,
        why: B("The approval and filing of the accounts are company law formalities, described on Service-Public Entreprendre. VAT and CFE are tax matters, handled in the professional space.",
          "L'approbation et le dépôt des comptes sont des formalités de droit des sociétés, décrites sur Service-Public Entreprendre. TVA et CFE relèvent de l'impôt, gérées dans l'espace professionnel.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M3, track: 'course', glyph: 'layers', tint: '#059669', at: [50, 76], levels: VAT,
    title: B('VAT and obligations', 'TVA et obligations'),
    blurb: B('VAT regimes and the balance due, returns without errors, e-invoicing and a calendar checked on official sources.',
      'Les régimes de TVA et le solde dû, des déclarations sans erreur, la facture électronique et un calendrier vérifié aux sources officielles.'),
  },
]

export const COMPTA_B: CoursePart = {
  modules: MODULES,
  enrich: { ...VAT_ENRICH },
  deep: { ...VAT_DEEP },
}
