import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-tle',
  chapters: [
    /* ==================================================================== */
    /* QUELLES POLITIQUES ÉCONOMIQUES DANS LE CADRE EUROPÉEN ?               */
    /* ==================================================================== */
    {
      id: 'politiques-europeennes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'politique-monetaire-bce',
          title: 'La politique monétaire de la Banque centrale européenne',
          minutes: 30,
          objectives: [
            "Connaître les grandes caractéristiques de l'intégration européenne : le marché unique et la zone euro.",
            "Comprendre comment la politique monétaire agit sur la conjoncture par les taux d'intérêt et le crédit.",
            "Savoir que la politique monétaire de la zone euro, unique, est conduite de façon indépendante par la Banque centrale européenne.",
            "Calculer un taux d'intérêt réel et en déduire les limites d'une politique monétaire unique.",
          ],
          course: [
            {
              heading: "Le cadre : marché unique et zone euro",
              paragraphs: [
                "L'intégration européenne a progressé par étapes. Le traité de Rome (1957) crée la Communauté économique européenne, dont l'union douanière est achevée en 1968 : suppression des droits de douane entre les pays membres et tarif extérieur commun. L'Acte unique européen (1986) programme le marché unique, effectif au 1er janvier 1993 : libre circulation des marchandises, des services, des capitaux et des personnes. Le traité de Maastricht (1992) prévoit l'Union économique et monétaire : l'euro devient la monnaie de onze pays le 1er janvier 1999, et les pièces et billets circulent depuis le 1er janvier 2002.",
                "Le marché unique, qui réunit environ 450 millions d'habitants, doit stimuler la croissance : la concurrence plus intense pousse les entreprises à baisser leurs prix et à innover, la taille du marché permet des économies d'échelle, et les consommateurs accèdent à une plus grande variété de produits. La Commission européenne conduit une politique de la concurrence qui sanctionne les ententes et les abus de position dominante, contrôle les concentrations et encadre les aides d'État. Elle protège le consommateur, mais on lui reproche parfois d'empêcher l'émergence de champions européens, comme lors du refus de la fusion entre Alstom et Siemens en 2019.",
                "Tous les membres de l'Union européenne n'ont pas adopté l'euro : le Danemark bénéficie d'une dérogation et la Suède n'a pas rejoint la monnaie unique. Après l'entrée de la Croatie (2023) puis de la Bulgarie (2026), la zone euro compte 21 des 27 États membres. Pour ces pays, la monnaie supprime le risque de change et les frais de conversion, et rend les prix directement comparables.",
              ],
              box: { label: "Repère", text: "1957 : traité de Rome. 1992 : traité de Maastricht. 1993 : marché unique. 1999 : naissance de l'euro dans 11 pays. 2002 : pièces et billets. 2026 : 21 pays dans la zone euro." },
            },
            {
              heading: "La BCE : une banque centrale indépendante au mandat prioritaire",
              paragraphs: [
                "La Banque centrale européenne (BCE), créée le 1er juin 1998 et installée à Francfort, forme avec les banques centrales nationales des pays de la zone euro (dont la Banque de France) l'Eurosystème. Les décisions de politique monétaire sont prises par le Conseil des gouverneurs, qui réunit les six membres du directoire de la BCE et les gouverneurs des banques centrales nationales de la zone euro. La politique monétaire est donc unique pour toute la zone : un seul ensemble de taux directeurs s'applique du Portugal à la Finlande.",
                "Le traité sur le fonctionnement de l'Union européenne (article 127) fixe à la BCE un objectif principal : la stabilité des prix. Sans préjudice de cet objectif, elle soutient les politiques économiques générales de l'Union. La BCE traduit cet objectif par une cible d'inflation de 2 % à moyen terme, déclarée symétrique depuis 2021 : une inflation trop faible est jugée aussi indésirable qu'une inflation trop forte. La Réserve fédérale américaine, elle, a un double mandat (stabilité des prix et emploi maximal).",
                "La BCE est indépendante : elle ne peut ni solliciter ni accepter d'instructions des gouvernements (article 130), et il lui est interdit de financer directement les États (article 123). Cette indépendance vise à rendre crédible la lutte contre l'inflation : un gouvernement pourrait être tenté, avant une élection, de soutenir l'activité au prix d'une inflation future (c'est l'incohérence temporelle analysée par Kydland et Prescott en 1977). En contrepartie, certains dénoncent un déficit démocratique, puisque des choix aux effets considérables échappent aux élus.",
              ],
              box: { label: "Définition", text: "La politique monétaire est l'action de la banque centrale sur les conditions de financement de l'économie (taux d'intérêt, quantité de liquidités) afin d'assurer la stabilité des prix et, par ce biais, d'influencer l'activité économique." },
            },
            {
              heading: "Les instruments et les canaux de transmission",
              paragraphs: [
                "Les banques commerciales ont besoin de monnaie centrale pour fournir des billets à leurs clients, régler leurs échanges entre elles et constituer des réserves obligatoires. La BCE fixe trois taux directeurs : le taux de la facilité de dépôt, qui rémunère les dépôts des banques auprès de l'Eurosystème ; le taux des opérations principales de refinancement, auquel elle prête aux banques pour une semaine ; le taux de la facilité de prêt marginal, pour les prêts au jour le jour. Depuis 2024, la BCE pilote l'orientation de sa politique par le taux de la facilité de dépôt.",
                "Lorsque la BCE baisse ses taux directeurs, les banques se refinancent moins cher et abaissent les taux de leurs crédits. Emprunter devient plus attractif : les ménages achètent davantage à crédit (logement, automobile) et les entreprises investissent plus. L'épargne étant moins rémunérée, la consommation est encouragée ; le prix des actifs (actions, immobilier) tend à monter, ce qui enrichit leurs détenteurs ; l'euro tend à se déprécier, ce qui favorise les exportations. La demande globale augmente, entraînant production, emploi et, à terme, hausse des prix. Une hausse des taux produit les effets inverses. Ces effets se diffusent en plusieurs trimestres.",
                "Quand les taux sont proches de zéro, la BCE recourt à des instruments non conventionnels : taux de dépôt négatif (de juin 2014 à juillet 2022), prêts aux banques à long terme, achats massifs de titres publics et privés (assouplissement quantitatif à partir de 2015, programme d'urgence face à la pandémie en mars 2020) et indications sur l'évolution future des taux (forward guidance). En juillet 2012, en pleine crise des dettes souveraines, son président Mario Draghi annonce que la BCE fera tout ce qui est nécessaire pour préserver l'euro, ce qui suffit à apaiser les marchés.",
              ],
              box: { label: "À retenir", text: "Taux directeurs en baisse → taux des crédits en baisse → crédit, consommation et investissement en hausse → demande globale en hausse → production et emploi en hausse, puis inflation en hausse. La politique restrictive suit le chemin inverse." },
            },
            {
              heading: "Une politique unique pour des économies différentes",
              paragraphs: [
                "L'épisode de 2022-2023 illustre l'usage de la politique restrictive. Après la reprise post-pandémie et le choc énergétique lié à la guerre en Ukraine, l'inflation de la zone euro dépasse 10 % sur un an à l'automne 2022. La BCE relève ses taux de juillet 2022 à septembre 2023 : le taux de la facilité de dépôt passe de -0,5 % à 4 %. L'inflation reflue, et la BCE commence à baisser ses taux à partir de juin 2024.",
                "Ce qui compte pour l'emprunteur est le taux d'intérêt réel, c'est-à-dire le taux nominal corrigé de l'inflation. Or l'inflation n'est pas la même dans tous les pays de la zone. Avec un même taux nominal, un pays où l'inflation est forte a un taux réel faible, voire négatif : la politique y est trop accommodante. Un pays où l'inflation est faible a un taux réel élevé : la politique y est trop restrictive. La BCE fixe ses taux pour la moyenne de la zone, et ne peut pas répondre à un choc asymétrique, qui frappe un pays plus que les autres.",
                "La politique monétaire a d'autres limites. Elle agit mal quand les banques refusent de prêter ou quand ménages et entreprises, pessimistes, ne veulent pas emprunter malgré des taux bas (Keynes a décrit cette situation de trappe à liquidité). Face à un choc d'offre, comme une flambée du prix de l'énergie, freiner l'inflation par la hausse des taux pèse aussi sur l'activité. Enfin, la hausse du prix des actifs provoquée par des taux bas profite surtout aux ménages qui détiennent un patrimoine.",
              ],
              box: { label: "Formule", text: "Taux d'intérêt réel ≈ taux d'intérêt nominal - taux d'inflation. Exemple : avec un taux nominal de 3 % et une inflation de 5 %, le taux réel est d'environ 3 - 5 = -2 %." },
            },
          ],
          keyPoints: [
            "Marché unique depuis 1993 (libre circulation des biens, services, capitaux et personnes) ; euro depuis 1999, adopté par 21 pays de l'UE sur 27 en 2026.",
            "La BCE (Francfort, 1998) conduit seule la politique monétaire de la zone euro, de façon indépendante des gouvernements.",
            "Objectif principal : la stabilité des prix, définie comme une inflation de 2 % à moyen terme (cible symétrique depuis 2021).",
            "Instruments : trois taux directeurs, refinancement des banques et, depuis les crises, achats massifs de titres (assouplissement quantitatif).",
            "Baisse des taux → crédit moins cher → demande en hausse → activité et prix en hausse : c'est une politique expansionniste.",
            "Une politique unique ne convient pas à tous : avec le même taux nominal, le taux réel diffère selon l'inflation de chaque pays.",
          ],
          example: {
            statement: "Supposons que le taux d'intérêt nominal des crédits soit de 4 % dans toute la zone euro. L'inflation est de 2 % dans le pays A et de 7 % dans le pays B. Calculez le taux d'intérêt réel dans chaque pays et montrez que la même politique monétaire n'a pas les mêmes effets.",
            solution: [
              "Rappeler la relation : taux d'intérêt réel ≈ taux nominal - taux d'inflation.",
              "Pays A : 4 - 2 = 2 %. Le coût réel du crédit est positif : emprunter coûte réellement 2 % par an.",
              "Pays B : 4 - 7 = -3 %. Le taux réel est négatif : la hausse des prix allège la charge réelle de la dette, emprunter devient très incitatif.",
              "Interpréter : pour A, dont l'inflation est déjà à la cible, la politique freine le crédit ; pour B, elle est trop peu restrictive pour faire baisser une inflation élevée.",
              "Conclusion : une politique monétaire unique, fixée pour la moyenne de la zone, ne peut pas convenir à des pays dont la conjoncture diverge ; c'est aux politiques budgétaires nationales de compléter l'action de la BCE.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque mesure en politique monétaire expansionniste ou restrictive : (a) la BCE baisse ses taux directeurs ; (b) la BCE cesse de racheter des titres et laisse son bilan diminuer ; (c) la BCE lance un programme d'achat de titres publics ; (d) la BCE relève le taux de la facilité de dépôt.",
              hint: "Demandez-vous si la mesure rend le crédit plus abondant et moins cher, ou plus rare et plus cher.",
              solution: [
                "(a) Une baisse des taux directeurs rend le refinancement des banques moins cher, donc le crédit aussi : politique expansionniste.",
                "(b) Cesser les achats de titres retire progressivement des liquidités et fait remonter les taux à long terme : politique restrictive (on parle de resserrement quantitatif).",
                "(c) Acheter des titres injecte des liquidités et fait baisser les taux à long terme : politique expansionniste (assouplissement quantitatif).",
                "(d) Relever le taux de la facilité de dépôt incite les banques à placer leurs liquidités auprès de la BCE plutôt qu'à prêter : politique restrictive.",
                "Résultat : mesures expansionnistes (a) et (c) ; mesures restrictives (b) et (d).",
              ],
            },
            {
              level: 2,
              statement: "Le taux nominal moyen des crédits aux entreprises est de 3,5 % dans toute la zone euro. L'inflation est de 1 % dans le pays C et de 4,5 % dans le pays D. (1) Calculez le taux d'intérêt réel dans chaque pays. (2) Dans quel pays les entreprises sont-elles le plus incitées à emprunter ? (3) Expliquez pourquoi la BCE ne peut pas fixer un taux adapté aux deux pays.",
              hint: "Taux réel ≈ taux nominal - inflation. Un taux réel négatif signifie que la dette se dévalorise avec la hausse des prix.",
              solution: [
                "(1) Pays C : 3,5 - 1 = 2,5 %. Pays D : 3,5 - 4,5 = -1 %.",
                "(2) Dans le pays D, le taux réel est négatif : la somme remboursée vaut moins, en pouvoir d'achat, que la somme empruntée. Les entreprises y sont plus incitées à emprunter et à investir.",
                "(3) La BCE fixe un seul ensemble de taux directeurs pour toute la zone. Si elle relevait ses taux pour freiner l'inflation de D, elle étoufferait l'activité de C ; si elle les baissait pour soutenir C, elle alimenterait l'inflation de D.",
                "Résultat : taux réels de 2,5 % (C) et -1 % (D) ; la politique monétaire unique est trop restrictive pour C et trop accommodante pour D.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Montrez que la politique monétaire de la Banque centrale européenne peut agir sur la conjoncture.",
              hint: "Définissez la politique monétaire, présentez l'instrument principal, déroulez la chaîne de transmission sans sauter d'étape, puis illustrez par un épisode daté.",
              solution: [
                "Définir : la politique monétaire est l'action de la banque centrale sur les conditions de financement de l'économie. Dans la zone euro, elle est conduite par la BCE, indépendante, dont l'objectif principal est une inflation de 2 % à moyen terme.",
                "Instrument : la BCE fixe ses taux directeurs, qui déterminent le coût auquel les banques se procurent de la monnaie centrale.",
                "Mécanisme expansionniste : une baisse des taux directeurs fait baisser les taux des crédits ; ménages et entreprises empruntent davantage pour consommer et investir ; la demande globale augmente, ce qui stimule la production et l'emploi.",
                "Autres canaux : la baisse des taux fait monter le prix des actifs (effet de richesse) et tend à déprécier l'euro, ce qui soutient les exportations.",
                "Mécanisme restrictif et exemple : de juillet 2022 à septembre 2023, la BCE a relevé le taux de la facilité de dépôt de -0,5 % à 4 % ; le crédit, plus cher, a ralenti, freinant la demande et contribuant au reflux de l'inflation, qui avait dépassé 10 % à l'automne 2022.",
                "Conclusion : la politique monétaire agit sur la conjoncture par le crédit et la demande, avec des délais et une efficacité qui dépendent de l'attitude des banques et des emprunteurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la chaîne de transmission d'une politique monétaire restrictive.",
            items: [
              "L'inflation reste durablement au-dessus de 2 % dans la zone euro",
              "Le Conseil des gouverneurs relève les taux directeurs",
              "Les banques se refinancent plus cher et relèvent les taux de leurs crédits",
              "Ménages et entreprises empruntent moins : consommation et investissement ralentissent",
              "La demande globale progresse moins vite que les capacités de production",
              "Les hausses de prix ralentissent et l'inflation revient vers la cible",
            ],
          },
          quiz: [
            {
              q: "Quel est l'objectif principal fixé à la BCE par les traités ?",
              options: ["Le plein emploi dans la zone euro", "Un taux de change fixe de l'euro face au dollar", "La stabilité des prix", "L'équilibre des budgets publics des États membres"],
              answer: 2,
              why: "L'article 127 du traité fait de la stabilité des prix l'objectif principal ; la BCE la définit comme une inflation de 2 % à moyen terme.",
            },
            {
              q: "Une baisse des taux directeurs de la BCE vise en principe à :",
              options: ["Stimuler le crédit et la demande", "Freiner l'inflation en raréfiant le crédit", "Réduire le déficit public des États", "Faire monter le cours de l'euro"],
              answer: 0,
              why: "Des taux plus bas rendent le crédit moins cher, ce qui soutient la consommation et l'investissement : c'est une politique expansionniste.",
            },
            {
              q: "Pourquoi l'indépendance de la BCE est-elle justifiée ?",
              options: ["Pour qu'elle puisse financer directement les États", "Pour qu'elle obéisse au Parlement européen", "Pour qu'elle fixe un taux d'intérêt différent dans chaque pays membre", "Pour rendre crédible son engagement contre l'inflation"],
              answer: 3,
              why: "Protégée des pressions électorales, la banque centrale peut tenir sa cible d'inflation dans la durée ; le financement direct des États lui est d'ailleurs interdit.",
            },
            {
              q: "Le taux nominal est de 2 % et l'inflation de 3 %. Le taux d'intérêt réel vaut environ :",
              options: ["5 %", "-1 %", "1 %", "0,67 %"],
              answer: 1,
              why: "Taux réel ≈ taux nominal - inflation, soit 2 - 3 = -1 %.",
            },
            {
              q: "Combien de pays membres de l'Union européenne utilisent l'euro en 2026 ?",
              options: ["11", "19", "21", "27"],
              answer: 2,
              why: "Onze pays au départ en 1999, puis des entrées successives ; la Croatie en 2023 et la Bulgarie en 2026 portent le total à 21.",
            },
          ],
          trap: "Confondre politique monétaire et politique budgétaire : la BCE ne fixe ni les impôts ni les dépenses publiques, et il lui est interdit de financer directement les États ; elle agit sur les taux d'intérêt et la liquidité.",
          method: "Pour expliquer un mécanisme de transmission, écrivez une chaîne causale complète, maillon par maillon (taux directeurs, taux des crédits, crédit, demande, production et prix), sans sauter d'étape, puis illustrez-la par un épisode daté, comme la hausse des taux de 2022-2023.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'politiques-budgetaires',
          title: 'Politiques budgétaires et coordination dans la zone euro',
          minutes: 35,
          objectives: [
            "Comprendre comment la politique budgétaire agit sur la conjoncture (stabilisateurs automatiques, relance discrétionnaire, effet multiplicateur).",
            "Savoir que la politique budgétaire relève de chaque État membre, dans le cadre de règles européennes.",
            "Comprendre que l'absence de coordination des politiques budgétaires rend difficile une politique conjoncturelle adaptée à chaque pays de la zone euro.",
            "Calculer un solde public et un ratio de dette publique en pourcentage du PIB.",
          ],
          course: [
            {
              heading: "La politique budgétaire, un outil national de régulation",
              paragraphs: [
                "La politique budgétaire consiste à utiliser les recettes (impôts, cotisations sociales) et les dépenses des administrations publiques pour agir sur l'activité. Le solde public est la différence entre recettes et dépenses : il est déficitaire quand les dépenses l'emportent. La dette publique est le stock des sommes empruntées et non remboursées, qui s'accroît notamment avec les déficits. Le déficit est un flux mesuré sur une année, la dette un stock mesuré à une date ; on les rapporte tous deux au PIB pour comparer les pays.",
                "Dans une logique keynésienne, l'État peut soutenir la demande en période de récession en augmentant ses dépenses ou en baissant les impôts : c'est une politique de relance. Une dépense publique supplémentaire devient un revenu pour les entreprises et les ménages, qui en dépensent une partie, ce qui crée de nouveaux revenus : c'est l'effet multiplicateur. À l'inverse, une politique de rigueur réduit le déficit en freinant les dépenses ou en augmentant les impôts. Le plan France Relance, annoncé en 2020 pour 100 milliards d'euros, est un exemple de relance.",
                "Une partie de l'action budgétaire est automatique. En récession, les recettes fiscales baissent (moins de TVA, moins d'impôt sur les bénéfices) et les dépenses sociales augmentent (allocations chômage) sans qu'aucune décision soit prise : ces stabilisateurs automatiques amortissent la baisse des revenus. Le déficit se creuse alors mécaniquement. C'est pourquoi on distingue le solde conjoncturel, lié à la position de l'économie dans le cycle, et le solde structurel, qui traduit les choix durables des pouvoirs publics.",
              ],
              box: { label: "Définition", text: "Le solde structurel est le solde public corrigé des effets de la conjoncture : il mesure ce que serait le solde si l'économie produisait à son niveau potentiel. Solde public = solde structurel + solde conjoncturel." },
            },
            {
              heading: "Les limites de la relance budgétaire",
              paragraphs: [
                "En économie ouverte, une partie de la demande supplémentaire se porte sur des produits importés : le multiplicateur s'affaiblit et le déficit commercial se creuse. La relance française de 1981-1982, menée alors que les partenaires pratiquaient la rigueur, a ainsi aggravé le déficit extérieur et conduit au tournant de la rigueur de 1983. Dans une zone euro très intégrée, la relance d'un pays profite en partie à ses voisins.",
                "Le financement par l'emprunt peut aussi faire monter les taux d'intérêt et décourager l'investissement privé : c'est l'effet d'éviction. Selon l'hypothèse d'équivalence ricardienne (Robert Barro, 1974), des ménages qui anticipent des hausses d'impôts futures pour rembourser la dette épargnent davantage, ce qui annule l'effet de la relance. Enfin, une dette élevée alourdit la charge des intérêts et peut faire douter les prêteurs de la capacité de l'État à rembourser : la soutenabilité de la dette devient une contrainte.",
              ],
              box: { label: "Formule", text: "Multiplicateur keynésien simple : k = 1 ÷ (1 - c), où c est la propension marginale à consommer. Variation du PIB = k × variation initiale de la dépense. Avec c = 0,8 : k = 5. En économie ouverte, les importations réduisent k." },
            },
            {
              heading: "Des règles budgétaires communes",
              paragraphs: [
                "Dans une union monétaire, les choix budgétaires d'un pays ont des effets sur les autres (externalités). Un État très endetté peut faire monter les taux d'intérêt de toute la zone ou menacer la stabilité de l'euro. Il peut aussi se comporter en passager clandestin : profiter de la crédibilité de la monnaie commune sans s'imposer de discipline. Le traité de Maastricht (1992) fixe donc deux seuils : un déficit public au plus égal à 3 % du PIB et une dette publique au plus égale à 60 % du PIB. Le Pacte de stabilité et de croissance (1997) prévoit une procédure pour déficit excessif, avec des sanctions possibles.",
                "Après la crise des dettes souveraines, les règles sont renforcées : surveillance des budgets nationaux dans le cadre du Semestre européen (2011), traité sur la stabilité, la coordination et la gouvernance (TSCG, 2012) qui impose une règle d'or (déficit structurel au plus égal à 0,5 % du PIB). Face à la pandémie, la clause dérogatoire générale suspend l'application des règles de 2020 à 2023. Un nouveau cadre entre en vigueur en 2024 : chaque État présente un plan budgétaire et structurel à moyen terme (sur quatre ans, extensible à sept) fondé sur une trajectoire de dépenses nettes, les seuils de 3 % et 60 % étant maintenus.",
              ],
              box: { label: "Repère", text: "Traité de Maastricht (1992) : déficit ≤ 3 % et dette ≤ 60 % du PIB. Pacte de stabilité et de croissance (1997). TSCG (2012) : déficit structurel ≤ 0,5 % du PIB. Nouveau cadre budgétaire européen (2024)." },
            },
            {
              heading: "La coordination, un défi pour la zone euro",
              paragraphs: [
                "Un choc asymétrique frappe un pays plus que les autres : effondrement d'un secteur, crise immobilière locale. Le pays touché ne peut ni dévaluer sa monnaie ni baisser seul ses taux d'intérêt. Selon la théorie des zones monétaires optimales (Robert Mundell, 1961), une union monétaire fonctionne bien si les travailleurs se déplacent facilement, si salaires et prix s'ajustent, ou si un budget commun opère des transferts vers les régions en difficulté. Or la mobilité du travail est faible entre pays européens et le budget de l'Union ne représente qu'environ 1 % du revenu national brut : la politique budgétaire nationale reste le principal outil d'ajustement.",
                "La coordination des politiques budgétaires est difficile. Chaque État décide selon sa situation et ses priorités politiques ; les pays en excédent n'ont pas intérêt à relancer pour aider leurs voisins. Lors de la crise des dettes souveraines (à partir de 2010, Grèce, Irlande, Portugal), de nombreux pays ont mené simultanément des politiques de rigueur, ce qui a prolongé la récession de la zone en 2012-2013 : des règles appliquées sans coordination peuvent devenir procycliques. Le Mécanisme européen de stabilité (2012) a été créé pour prêter aux États en difficulté.",
                "Des avancées existent. En 2020, le plan de relance NextGenerationEU (750 milliards d'euros aux prix de 2018) est financé pour la première fois à grande échelle par un emprunt commun de l'Union. La combinaison de la politique monétaire et des politiques budgétaires (le policy mix) a aussi été mieux articulée pendant la pandémie : taux bas et achats de titres par la BCE, soutien budgétaire massif des États. Le débat reste ouvert sur un véritable budget de la zone euro.",
              ],
              box: { label: "À retenir", text: "Dans la zone euro, la politique monétaire est unique et fédérale ; les politiques budgétaires restent nationales. Leur coordination, nécessaire face aux chocs asymétriques et aux comportements de passager clandestin, reste difficile." },
            },
          ],
          keyPoints: [
            "Solde public = recettes - dépenses publiques ; le déficit est un flux, la dette un stock ; on les rapporte au PIB.",
            "En récession, les stabilisateurs automatiques jouent sans décision ; la relance discrétionnaire s'appuie sur l'effet multiplicateur.",
            "Limites de la relance : fuite par les importations, effet d'éviction, équivalence ricardienne, soutenabilité de la dette.",
            "Règles européennes : déficit ≤ 3 % et dette ≤ 60 % du PIB (Maastricht 1992, Pacte de stabilité 1997), cadre réformé en 2024.",
            "Choc asymétrique : sans taux de change ni taux d'intérêt propres, un pays de la zone euro compte surtout sur son budget.",
            "Le défaut de coordination (passager clandestin, rigueur simultanée) freine la régulation ; NextGenerationEU (2020) repose sur un emprunt commun.",
          ],
          example: {
            statement: "Un pays a un PIB de 2 500 milliards d'euros. Ses recettes publiques s'élèvent à 1 300 milliards, ses dépenses publiques à 1 400 milliards et sa dette publique à 2 750 milliards. (1) Calculez le solde public en pourcentage du PIB. (2) Calculez le ratio de dette publique. (3) Le pays respecte-t-il les seuils européens ?",
            solution: [
              "Solde public = recettes - dépenses = 1 300 - 1 400 = -100 milliards d'euros : c'est un déficit.",
              "En pourcentage du PIB : -100 ÷ 2 500 × 100 = -4 %.",
              "Ratio de dette : 2 750 ÷ 2 500 × 100 = 110 % du PIB.",
              "Comparaison : un déficit de 4 % dépasse le seuil de 3 %, et une dette de 110 % dépasse le seuil de 60 %.",
              "Conclusion : les deux seuils sont dépassés ; le pays peut faire l'objet d'une procédure pour déficit excessif et doit suivre une trajectoire de réduction de ses dépenses nettes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une économie fermée, la propension marginale à consommer est c = 0,75. L'État décide d'augmenter ses dépenses de 20 milliards d'euros. (1) Calculez le multiplicateur keynésien simple. (2) Calculez l'effet total attendu sur le PIB.",
              hint: "Appliquez k = 1 ÷ (1 - c), puis multipliez la dépense initiale par k.",
              solution: [
                "(1) k = 1 ÷ (1 - 0,75) = 1 ÷ 0,25 = 4.",
                "(2) Variation du PIB = k × variation de la dépense = 4 × 20 = 80 milliards d'euros.",
                "Interprétation : chaque euro dépensé par l'État est en partie dépensé à nouveau par ceux qui le reçoivent (75 centimes, puis 56,25 centimes, etc.) ; la somme de ces vagues successives donne 4 euros de PIB.",
                "Résultat : k = 4 et le PIB augmente de 80 milliards d'euros, dans ce modèle simplifié (en économie ouverte, l'effet serait plus faible).",
              ],
            },
            {
              level: 2,
              statement: "Classez les situations suivantes en stabilisateur automatique ou en politique budgétaire discrétionnaire : (a) les allocations chômage versées augmentent parce que le chômage progresse ; (b) les recettes de TVA diminuent quand la consommation recule ; (c) le Parlement vote un plan d'investissement public de 30 milliards d'euros ; (d) le gouvernement décide de baisser le taux de l'impôt sur les sociétés. Expliquez ensuite pourquoi le déficit public se creuse en récession même sans décision nouvelle.",
              hint: "Une mesure discrétionnaire suppose une décision ; un stabilisateur automatique résulte des règles existantes appliquées à une conjoncture qui change.",
              solution: [
                "(a) Stabilisateur automatique : les règles d'indemnisation existent déjà, c'est la hausse du chômage qui augmente la dépense.",
                "(b) Stabilisateur automatique : le taux de TVA n'a pas changé, c'est l'assiette (la consommation) qui baisse.",
                "(c) Politique discrétionnaire : il faut une décision nouvelle pour engager ces dépenses.",
                "(d) Politique discrétionnaire : le gouvernement modifie volontairement un taux d'imposition.",
                "En récession, les recettes baissent et certaines dépenses sociales augmentent mécaniquement : le solde conjoncturel se dégrade, donc le déficit se creuse sans qu'aucune mesure ait été prise.",
                "Résultat : (a) et (b) sont des stabilisateurs automatiques, (c) et (d) des mesures discrétionnaires.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Montrez que la coordination des politiques budgétaires est difficile dans la zone euro.",
              hint: "Montrez d'abord pourquoi la coordination serait utile (union monétaire, externalités, chocs asymétriques), puis pourquoi elle est difficile (souveraineté, intérêts divergents, règles procycliques), avec un exemple daté.",
              solution: [
                "Définir : la politique budgétaire est l'utilisation des recettes et des dépenses publiques pour agir sur la conjoncture. Dans la zone euro, elle relève de chaque État, alors que la politique monétaire est unique.",
                "Utilité de la coordination : les politiques budgétaires ont des effets sur les voisins (une relance profite aux exportateurs des autres pays, un endettement excessif fragilise l'euro) ; face à un choc commun, une action concertée est plus efficace.",
                "Première difficulté : chaque État garde sa souveraineté budgétaire et décide selon sa conjoncture et ses priorités politiques ; un pays peut se comporter en passager clandestin en profitant de la discipline des autres.",
                "Deuxième difficulté : les intérêts divergent. Les pays en excédent ne relancent pas pour aider ceux en difficulté ; lors de la crise des dettes souveraines, la rigueur menée simultanément par de nombreux pays a prolongé la récession de 2012-2013.",
                "Troisième difficulté : le budget européen est faible (environ 1 % du revenu national brut) et ne permet pas de transferts importants vers un pays frappé par un choc asymétrique.",
                "Conclusion : la coordination progresse (nouveau cadre de 2024, emprunt commun de NextGenerationEU en 2020), mais elle reste limitée par l'absence de véritable budget fédéral.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Stabilisateurs automatiques", right: "Variations des recettes et dépenses publiques qui amortissent le cycle sans décision nouvelle" },
              { left: "Effet d'éviction", right: "Recul de l'investissement privé causé par la hausse des taux liée à l'emprunt public" },
              { left: "Choc asymétrique", right: "Choc qui touche un pays de la zone beaucoup plus que les autres" },
              { left: "Passager clandestin", right: "Pays qui profite de la discipline des autres sans s'imposer d'effort" },
              { left: "Policy mix", right: "Combinaison de la politique monétaire et de la politique budgétaire" },
              { left: "Solde structurel", right: "Solde public corrigé des effets de la conjoncture" },
            ],
          },
          quiz: [
            {
              q: "Le déficit public se distingue de la dette publique car :",
              options: ["La dette est un flux annuel, le déficit un stock", "Le déficit est un flux annuel, la dette un stock", "Les deux mesurent exactement la même grandeur", "Le déficit ne concerne que l'État, sans la Sécurité sociale"],
              answer: 1,
              why: "Le déficit mesure l'écart entre dépenses et recettes sur une année ; la dette est le stock accumulé des emprunts non remboursés à une date donnée.",
            },
            {
              q: "Quel seuil le traité de Maastricht fixe-t-il pour la dette publique ?",
              options: ["3 % du PIB", "0,5 % du PIB", "100 % du PIB", "60 % du PIB"],
              answer: 3,
              why: "Les critères de Maastricht fixent 3 % du PIB pour le déficit et 60 % du PIB pour la dette ; 0,5 % est la règle d'or du TSCG sur le déficit structurel.",
            },
            {
              q: "En récession, les recettes fiscales baissent et les allocations chômage augmentent. C'est l'effet :",
              options: ["des stabilisateurs automatiques", "d'une politique de rigueur", "du multiplicateur monétaire", "d'une hausse des taux directeurs"],
              answer: 0,
              why: "Sans décision nouvelle, les règles fiscales et sociales existantes soutiennent les revenus quand l'activité ralentit.",
            },
            {
              q: "Pourquoi un choc asymétrique est-il difficile à gérer dans la zone euro ?",
              options: ["La BCE fixe un taux d'intérêt différent pour chaque pays membre", "Les budgets nationaux sont interdits par les traités", "Le pays touché ne peut ni dévaluer ni baisser seul ses taux", "Le marché unique a supprimé tout échange entre pays"],
              answer: 2,
              why: "Le taux de change et la politique monétaire sont communs : l'ajustement repose sur le budget national, les salaires et la mobilité, qui sont limités.",
            },
            {
              q: "Avec une propension marginale à consommer de 0,8, le multiplicateur keynésien simple vaut :",
              options: ["0,8", "5", "1,25", "8"],
              answer: 1,
              why: "k = 1 ÷ (1 - 0,8) = 1 ÷ 0,2 = 5.",
            },
          ],
          trap: "Croire que les règles européennes interdisent tout déficit : elles fixent des seuils (3 % du PIB pour le déficit, 60 % pour la dette) et une trajectoire de dépenses, mais la politique budgétaire reste décidée par chaque État.",
          method: "Dans une question sur la zone euro, opposez systématiquement les deux niveaux de décision : la politique monétaire, unique et fédérale (BCE), et les politiques budgétaires, nationales et encadrées par des règles. C'est ce contraste qui fonde le problème de coordination.",
        },
      ],
    },
    /* ==================================================================== */
    /* COMMENT EST STRUCTURÉE LA SOCIÉTÉ FRANÇAISE ACTUELLE ?                */
    /* ==================================================================== */
    {
      id: 'structure-sociale',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'facteurs-de-structuration',
          title: 'Les facteurs de structuration de l\'espace social',
          minutes: 30,
          objectives: [
            "Identifier les multiples facteurs de structuration et de hiérarchisation de l'espace social : catégorie socioprofessionnelle, revenu, diplôme, composition du ménage, position dans le cycle de vie, sexe, lieu de résidence.",
            "Comprendre les principales évolutions de la structure socioprofessionnelle en France depuis la seconde moitié du XXe siècle.",
            "Distinguer salarisation, tertiarisation, élévation du niveau de qualification et féminisation des emplois.",
          ],
          course: [
            {
              heading: "Structurer et hiérarchiser l'espace social",
              paragraphs: [
                "La structure sociale désigne la manière dont une société est organisée en groupes. On parle d'espace social pour souligner que chaque individu y occupe une position, plus ou moins proche de celle des autres. Structurer, c'est différencier des groupes distincts ; hiérarchiser, c'est les ordonner selon leur accès inégal à des ressources socialement valorisées : revenu, patrimoine, diplôme, pouvoir, prestige. Une différence (aimer le football ou le théâtre) ne devient une inégalité que si elle se traduit par un avantage ou un désavantage.",
                "Plusieurs facteurs structurent l'espace social. La profession, saisie par la catégorie socioprofessionnelle, renseigne sur les conditions de travail et le mode de vie. Le revenu et le patrimoine déterminent le niveau de vie. Le diplôme conditionne l'accès aux emplois qualifiés. La composition du ménage compte : les familles monoparentales, le plus souvent une mère seule avec ses enfants, sont nettement plus exposées à la pauvreté. La position dans le cycle de vie joue aussi : les revenus progressent souvent avec l'ancienneté, et le patrimoine s'accumule avec l'âge.",
                "Le sexe est un facteur de hiérarchisation : à poste comparable, les femmes gagnent en moyenne moins que les hommes, travaillent plus souvent à temps partiel et sont concentrées dans certains métiers. Le lieu de résidence enfin sépare les centres des grandes métropoles, les espaces périurbains, les espaces ruraux et les quartiers prioritaires de la politique de la ville, qui n'offrent pas le même accès à l'emploi, aux services et aux établissements scolaires. Ces facteurs se cumulent et se combinent : la situation d'une mère seule, peu diplômée, vivant dans un quartier prioritaire, résulte de leur croisement.",
              ],
              box: { label: "Définition", text: "Une inégalité sociale est une différence entre individus ou groupes qui se traduit par un accès inégal à des ressources socialement valorisées (revenu, patrimoine, diplôme, pouvoir, prestige)." },
            },
            {
              heading: "La nomenclature des PCS, un outil de l'INSEE",
              paragraphs: [
                "Pour décrire la structure sociale, l'INSEE classe les personnes selon leur profession. La nomenclature des catégories socioprofessionnelles (CSP), créée en 1954, est remplacée en 1982 par celle des professions et catégories socioprofessionnelles (PCS), révisée en 2003 puis en 2020. Elle combine plusieurs critères : le statut (salarié ou indépendant), le métier, la qualification, la position hiérarchique, le secteur (public ou privé) et, pour les indépendants, la taille de l'entreprise. Son principe est de regrouper des personnes dont les situations et les comportements sont proches (homogénéité sociale).",
                "Les actifs sont répartis en six groupes socioprofessionnels. Les retraités et les autres personnes sans activité professionnelle forment deux groupes supplémentaires. La nomenclature n'est pas strictement hiérarchique : le groupe des artisans, commerçants et chefs d'entreprise réunit aussi bien un petit commerçant qu'un chef d'entreprise de dix salariés ou plus ; celui des agriculteurs exploitants rassemble des exploitations de tailles très différentes. Les infirmières, les techniciens ou les professeurs des écoles appartiennent aux professions intermédiaires ; les professeurs de lycée, les ingénieurs et les professions libérales aux cadres et professions intellectuelles supérieures.",
              ],
              box: { label: "Repère", text: "Les six groupes d'actifs : 1. Agriculteurs exploitants. 2. Artisans, commerçants et chefs d'entreprise. 3. Cadres et professions intellectuelles supérieures. 4. Professions intermédiaires. 5. Employés. 6. Ouvriers." },
            },
            {
              heading: "Les grandes évolutions depuis les années 1950",
              paragraphs: [
                "La salarisation est le recul de la part des indépendants dans l'emploi. Au milieu des années 1950, environ un actif sur cinq était agriculteur exploitant ; ils représentent aujourd'hui moins de 2 % de l'emploi. Les petits commerçants et artisans ont aussi reculé face à la grande distribution. Aujourd'hui, environ 88 % des personnes en emploi sont salariées.",
                "La tertiarisation est la hausse de la part des emplois de services, qui représentent environ les trois quarts de l'emploi. Les gains de productivité dans l'agriculture et l'industrie, l'automatisation, les délocalisations et la demande croissante de services (santé, éducation, commerce, loisirs) l'expliquent. Les ouvriers, plus d'un tiers des actifs au milieu des années 1970, en représentent environ un sur cinq aujourd'hui ; les employés sont devenus l'un des groupes les plus nombreux. Ouvriers et employés, qui forment les classes populaires, réunissent encore un peu moins de la moitié des actifs.",
                "L'élévation du niveau de qualification se traduit par l'essor des cadres (environ un actif sur cinq) et des professions intermédiaires (environ un sur quatre), lié au progrès technique, à la complexité de l'organisation des entreprises et à la massification scolaire. La féminisation des emplois est la hausse de la part des femmes dans la population active : près d'un actif sur deux est aujourd'hui une femme. Mais cette féminisation est inégale : environ les trois quarts des employés sont des femmes, alors qu'elles restent minoritaires parmi les ouvriers et les ingénieurs.",
              ],
              box: { label: "À retenir", text: "Quatre tendances : salarisation (recul des indépendants), tertiarisation (recul des ouvriers et des agriculteurs, essor des employés), élévation des qualifications (essor des cadres et professions intermédiaires), féminisation (près d'un actif sur deux est une femme)." },
            },
          ],
          keyPoints: [
            "Structurer, c'est différencier des groupes ; hiérarchiser, c'est les ordonner selon un accès inégal aux ressources valorisées.",
            "Facteurs de structuration : PCS, revenu, diplôme, composition du ménage, position dans le cycle de vie, sexe, lieu de résidence.",
            "La nomenclature des PCS (INSEE, 1982, révisée en 2003 et 2020) classe selon le statut, le métier, la qualification et la position hiérarchique, pas selon le revenu.",
            "Six groupes d'actifs : agriculteurs ; artisans, commerçants, chefs d'entreprise ; cadres ; professions intermédiaires ; employés ; ouvriers.",
            "Depuis les années 1950 : salarisation, tertiarisation, élévation des qualifications, féminisation des emplois.",
          ],
          example: {
            statement: "Classez chacun des actifs suivants dans son groupe socioprofessionnel et indiquez le critère décisif : une infirmière salariée d'un hôpital ; un boulanger qui emploie deux salariés ; une caissière de supermarché ; un ingénieur d'études ; un maçon salarié ; un céréalier qui exploite sa ferme.",
            solution: [
              "L'infirmière salariée relève des professions intermédiaires (groupe 4) : métier qualifié, sans position de cadre.",
              "Le boulanger qui emploie deux salariés est un indépendant : artisans, commerçants et chefs d'entreprise (groupe 2). Le critère décisif est le statut.",
              "La caissière relève des employés (groupe 5) : emploi salarié d'exécution dans les services.",
              "L'ingénieur d'études relève des cadres et professions intellectuelles supérieures (groupe 3) : qualification élevée.",
              "Le maçon salarié relève des ouvriers (groupe 6) : travail manuel salarié ; le céréalier est agriculteur exploitant (groupe 1).",
              "Conclusion : la PCS combine plusieurs critères, le statut (indépendant ou salarié), le type de métier et la qualification, et non le revenu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives d'entraînement. Dans un pays, la population active occupée passe de 20 millions à la date 1 à 27 millions à la date 2. Le nombre d'ouvriers passe de 7,2 millions à 5,4 millions. (1) Calculez la part des ouvriers dans l'emploi aux deux dates. (2) Calculez la variation de cette part en points de pourcentage. (3) Calculez le taux de variation du nombre d'ouvriers.",
              hint: "Une part se calcule en divisant la partie par le tout ; un taux de variation se calcule par (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100.",
              solution: [
                "(1) Date 1 : 7,2 ÷ 20 × 100 = 36 %. Date 2 : 5,4 ÷ 27 × 100 = 20 %.",
                "(2) Variation de la part : 20 - 36 = -16 points de pourcentage.",
                "(3) Taux de variation du nombre d'ouvriers : (5,4 - 7,2) ÷ 7,2 × 100 = -1,8 ÷ 7,2 × 100 = -25 %.",
                "Interprétation : la part des ouvriers recule davantage que leur nombre, car l'emploi total augmente en même temps.",
                "Résultat : 36 % puis 20 %, soit -16 points ; le nombre d'ouvriers baisse de 25 %.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, identifiez le facteur de structuration de l'espace social en jeu et dites s'il s'agit d'une simple différence ou d'une inégalité : (a) à poste comparable, une femme cadre gagne moins qu'un homme cadre ; (b) un retraité possède un patrimoine plus élevé qu'un jeune actif ; (c) une famille monoparentale est plus souvent pauvre qu'un couple avec enfants ; (d) un habitant d'un quartier prioritaire trouve moins d'offres d'emploi à proximité ; (e) deux employés préfèrent l'un le cinéma, l'autre la randonnée.",
              hint: "Il y a inégalité quand la différence se traduit par un accès inégal à une ressource valorisée.",
              solution: [
                "(a) Le sexe : c'est une inégalité, puisque l'écart porte sur le salaire.",
                "(b) La position dans le cycle de vie : inégalité de patrimoine, liée à l'accumulation au fil de la vie.",
                "(c) La composition du ménage : inégalité de niveau de vie, un seul revenu devant faire vivre plusieurs personnes.",
                "(d) Le lieu de résidence : inégalité d'accès à l'emploi.",
                "(e) Une différence de goûts, qui ne se traduit pas en avantage ou désavantage : ce n'est pas une inégalité.",
                "Résultat : (a) à (d) sont des inégalités liées à des facteurs de structuration ; (e) est une simple différence.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Présentez deux évolutions de la structure socioprofessionnelle en France depuis la seconde moitié du XXe siècle.",
              hint: "Pour chaque évolution : définition, constat chiffré en ordre de grandeur, explication.",
              solution: [
                "Introduction : la structure socioprofessionnelle est la répartition de la population active entre les groupes de la nomenclature des PCS de l'INSEE ; elle s'est profondément transformée depuis les années 1950.",
                "Première évolution, la tertiarisation : la part des emplois de services a fortement augmenté jusqu'à représenter environ les trois quarts de l'emploi, tandis que les ouvriers, plus d'un tiers des actifs au milieu des années 1970, n'en représentent plus qu'environ un sur cinq.",
                "Explication : les gains de productivité et l'automatisation ont réduit les besoins de main-d'œuvre dans l'industrie, une partie de la production a été délocalisée, et la demande de services (santé, éducation, commerce) s'est accrue avec la hausse du niveau de vie.",
                "Seconde évolution, l'élévation du niveau de qualification : les cadres représentent aujourd'hui environ un actif sur cinq et les professions intermédiaires environ un sur quatre.",
                "Explication : le progrès technique et la complexité de l'organisation des entreprises exigent des qualifications plus élevées, que la massification scolaire a permis de fournir.",
                "Conclusion : on pourrait ajouter la salarisation et la féminisation ; ensemble, ces évolutions ont transformé la pyramide sociale des années 1950.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la structure socioprofessionnelle.",
            statements: [
              { text: "La nomenclature des PCS classe les actifs selon leur revenu.", true: false, why: "Elle combine statut, métier, qualification et position hiérarchique ; le revenu n'est pas un critère." },
              { text: "Les employés sont en majorité des femmes.", true: true, why: "Environ les trois quarts des employés sont des femmes." },
              { text: "Depuis les années 1950, la part des indépendants dans l'emploi a fortement reculé.", true: true, why: "C'est la salarisation, portée notamment par le déclin des agriculteurs exploitants." },
              { text: "Les ouvriers ont presque disparu de la société française.", true: false, why: "Ils ont reculé mais représentent encore environ un actif sur cinq." },
              { text: "Le lieu de résidence peut être un facteur de hiérarchisation sociale.", true: true, why: "Il conditionne l'accès à l'emploi, aux services et aux établissements scolaires." },
              { text: "Toute différence entre deux groupes est une inégalité.", true: false, why: "Une différence ne devient inégalité que si elle donne un accès inégal à des ressources valorisées." },
              { text: "Un chef d'entreprise de dix salariés ou plus est classé parmi les cadres.", true: false, why: "Il appartient au groupe des artisans, commerçants et chefs d'entreprise, car il est indépendant." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces critères n'est pas utilisé pour construire les PCS ?",
              options: ["Le statut de salarié ou d'indépendant", "La qualification", "La position hiérarchique", "Le revenu du ménage"],
              answer: 3,
              why: "Les PCS classent selon la profession (statut, métier, qualification, position hiérarchique) ; le revenu n'en fait pas partie.",
            },
            {
              q: "Une infirmière salariée de l'hôpital public appartient au groupe :",
              options: ["Cadres et professions intellectuelles supérieures", "Professions intermédiaires", "Employés", "Ouvriers"],
              answer: 1,
              why: "Les infirmiers figurent parmi les professions intermédiaires de la santé et du travail social.",
            },
            {
              q: "La tertiarisation désigne :",
              options: ["La hausse de la part des salariés dans l'emploi", "L'augmentation du nombre de femmes actives", "La hausse de la part des emplois de services", "Le recul du niveau de diplôme moyen"],
              answer: 2,
              why: "Le secteur tertiaire regroupe les services ; sa part dans l'emploi a fortement augmenté depuis les années 1950.",
            },
            {
              q: "Quel phénomène illustre le mieux la salarisation ?",
              options: ["Le recul des indépendants dans l'emploi", "La hausse de la part des ouvriers qualifiés", "La baisse du nombre de bacheliers par génération", "La croissance rapide des entreprises de services"],
              answer: 0,
              why: "La salarisation est la hausse de la part des salariés, donc le recul des indépendants (agriculteurs, artisans, commerçants).",
            },
            {
              q: "La position dans le cycle de vie structure l'espace social car :",
              options: ["Les revenus sont identiques à tous les âges de la vie active", "Les jeunes possèdent en moyenne plus de patrimoine que les retraités", "Le patrimoine s'accumule avec l'âge", "L'âge suffit à déterminer la PCS d'une personne"],
              answer: 2,
              why: "Revenus et patrimoine varient avec l'âge : le patrimoine, en particulier, se constitue au fil de la vie.",
            },
          ],
          trap: "Confondre différence et inégalité, ou réduire la structure sociale à la seule PCS : la hiérarchie sociale résulte du croisement de plusieurs facteurs (revenu, diplôme, sexe, âge, ménage, lieu de résidence).",
          method: "Pour décrire une évolution de la structure socioprofessionnelle, donnez toujours le sens (hausse ou baisse), un ordre de grandeur daté et une explication (gains de productivité, demande de services, massification scolaire) : constat, chiffre, cause.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'analyses-des-classes',
          title: 'Les classes sociales selon Marx et Weber',
          minutes: 30,
          objectives: [
            "Connaître les théories des classes et de la stratification sociale de Marx et de Weber.",
            "Distinguer une approche réaliste et une approche nominaliste des classes sociales.",
            "Distinguer classe, groupe de statut et parti dans l'analyse de Weber.",
          ],
          course: [
            {
              heading: "Classes sociales et stratification",
              paragraphs: [
                "Une classe sociale est un grand groupe d'individus qui occupent une position semblable dans l'organisation économique, partagent des conditions de vie proches et peuvent avoir conscience d'intérêts communs. La stratification sociale désigne plus largement la division de la société en strates hiérarchisées, rangées le long d'une échelle (de revenu, de prestige), sans que ces strates soient forcément en conflit.",
                "Deux traditions s'opposent. Dans une approche réaliste, les classes existent réellement, indépendamment du regard du sociologue : ce sont des groupes concrets, conscients d'eux-mêmes, qui agissent collectivement. Dans une approche nominaliste, les classes sont des catégories construites par le chercheur pour classer les individus selon des critères qu'il choisit ; elles n'impliquent ni conscience commune ni action collective. Marx illustre la première approche, Weber la seconde.",
              ],
              box: { label: "Définition", text: "Approche réaliste : les classes sont des groupes réels, conscients et mobilisés. Approche nominaliste : les classes sont des regroupements statistiques construits par le chercheur, sans conscience commune nécessaire." },
            },
            {
              heading: "Marx : des classes définies par les rapports de production",
              paragraphs: [
                "Karl Marx (1818-1883), notamment dans le Manifeste du parti communiste (1848, avec Friedrich Engels) et Le Capital (livre I, 1867), définit les classes par leur place dans les rapports de production. Dans le capitalisme, la bourgeoisie possède les moyens de production (usines, machines, capital) ; le prolétariat ne possède que sa force de travail, qu'il vend contre un salaire. Le travailleur produit une valeur supérieure à son salaire : la différence, la plus-value, est appropriée par le capitaliste. C'est l'exploitation.",
                "Les intérêts des deux classes sont donc opposés : pour Marx et Engels, l'histoire de toutes les sociétés est l'histoire de luttes de classes. Une classe en soi est un ensemble d'individus qui partagent objectivement la même place dans les rapports de production. Elle devient une classe pour soi lorsque ses membres prennent conscience de leurs intérêts communs et s'organisent (syndicats, partis) pour lutter contre la classe adverse.",
                "Marx reconnaît d'autres groupes (petite bourgeoisie, paysannerie), mais il pense qu'ils sont appelés à se fondre dans les deux classes principales : la société tend à se polariser. Dans Le 18 Brumaire de Louis Bonaparte (1852), il compare les paysans parcellaires français à un sac de pommes de terre : ils ont des conditions de vie semblables, mais, isolés, ils ne forment pas une classe consciente. L'approche de Marx est réaliste, centrée sur l'économie et sur le conflit.",
              ],
              box: { label: "À retenir", text: "Chez Marx, une classe existe pleinement quand trois conditions sont réunies : une même place dans les rapports de production, une conscience de classe et une lutte contre une autre classe." },
            },
            {
              heading: "Weber : trois ordres de hiérarchisation",
              paragraphs: [
                "Max Weber (1864-1920), dans Économie et société (publié après sa mort, en 1922), distingue trois ordres relativement autonomes. Dans l'ordre économique, les classes regroupent des individus qui ont les mêmes chances d'accéder aux biens et aux revenus sur le marché, selon ce qu'ils possèdent (propriété) et ce qu'ils savent faire (qualification). Dans l'ordre social, les groupes de statut rassemblent des individus qui partagent un même prestige, un même honneur social et un même style de vie. Dans l'ordre politique, les partis sont des groupements orientés vers la conquête du pouvoir.",
                "Ces trois hiérarchies ne coïncident pas forcément. Un entrepreneur enrichi peut manquer de prestige auprès des milieux établis (on parle de nouveau riche) ; un universitaire ou un religieux peut jouir d'un grand prestige sans grande fortune. Pour Weber, les membres d'une classe ne forment pas nécessairement une communauté et n'ont pas forcément conscience d'intérêts communs : son approche est nominaliste et multidimensionnelle. Elle se rapproche d'une analyse en termes de stratification.",
              ],
              box: { label: "Repère", text: "Marx : classes réelles, définies par la propriété des moyens de production, le conflit est central. Weber : classes construites, définies par les chances sur le marché, une dimension parmi trois (classe, statut, parti)." },
            },
            {
              heading: "Un prolongement : l'espace social de Bourdieu",
              paragraphs: [
                "Pierre Bourdieu, notamment dans La Distinction (1979), combine ces héritages. Il représente la société comme un espace social où chacun se situe selon le volume global de ses capitaux (économique, culturel, social) et selon leur structure (plus de capital économique ou plus de capital culturel). Il distingue ainsi la classe dominante, la petite bourgeoisie et les classes populaires, et montre que les goûts et les styles de vie (la culture légitime, la distinction) servent aussi à marquer les positions. Comme Marx, il insiste sur la domination ; comme Weber, il tient compte de plusieurs dimensions.",
              ],
            },
          ],
          keyPoints: [
            "Approche réaliste (Marx) : les classes sont des groupes réels, conscients et en conflit. Approche nominaliste (Weber) : des catégories construites.",
            "Marx : bourgeoisie (propriétaire des moyens de production) et prolétariat (vend sa force de travail) ; exploitation par la plus-value.",
            "Classe en soi (situation objective commune) et classe pour soi (conscience et mobilisation) : la lutte des classes est le moteur de l'histoire.",
            "Weber (Économie et société, 1922) : trois ordres, économique (classes), social (groupes de statut), politique (partis).",
            "Chez Weber, les hiérarchies de richesse, de prestige et de pouvoir peuvent ne pas coïncider.",
            "Bourdieu (La Distinction, 1979) situe les groupes selon le volume et la structure de leurs capitaux.",
          ],
          example: {
            statement: "Montrez en quoi l'analyse des classes sociales de Weber se distingue de celle de Marx.",
            solution: [
              "Critère de définition : pour Marx, la classe est définie par la place dans les rapports de production (propriété ou non des moyens de production) ; pour Weber, par les chances d'accès aux biens et aux revenus sur le marché, qui dépendent de la propriété mais aussi de la qualification.",
              "Nombre de dimensions : Marx privilégie la dimension économique ; Weber ajoute l'ordre social (groupes de statut, fondés sur le prestige) et l'ordre politique (partis).",
              "Statut des classes : chez Marx, elles sont réelles et tendent à devenir conscientes (classe pour soi) ; chez Weber, elles sont des regroupements construits par le chercheur, sans conscience nécessaire.",
              "Place du conflit : la lutte des classes est centrale chez Marx ; chez Weber, le conflit est possible mais pas inscrit dans la définition.",
              "Exemple : un artiste reconnu mais pauvre occupe chez Weber une position élevée dans l'ordre social et modeste dans l'ordre économique, situation que l'analyse de Marx ne permet pas de saisir.",
              "Conclusion : Marx propose une approche réaliste, unidimensionnelle et conflictuelle ; Weber une approche nominaliste et multidimensionnelle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Attribuez chaque notion à Marx ou à Weber : plus-value ; groupe de statut ; classe pour soi ; chances d'accès aux biens sur le marché ; prestige ; lutte des classes ; parti.",
              hint: "Les notions liées à l'exploitation et au conflit renvoient à Marx ; celles qui distinguent plusieurs ordres de hiérarchie renvoient à Weber.",
              solution: [
                "Marx : plus-value (valeur créée par le travailleur et appropriée par le capitaliste), classe pour soi (classe consciente et mobilisée), lutte des classes.",
                "Weber : groupe de statut (ordre social), chances d'accès aux biens sur le marché (définition wébérienne de la classe), prestige (fondement des groupes de statut), parti (ordre politique).",
                "Résultat : trois notions pour Marx, quatre pour Weber.",
              ],
            },
            {
              level: 2,
              statement: "Situez chacune des personnes suivantes dans les trois ordres de Weber (économique, social, politique) : (a) un chirurgien très bien rémunéré, sans engagement politique ; (b) un prêtre de paroisse au revenu modeste, très respecté ; (c) une ouvrière syndicaliste élue maire de sa commune ; (d) un héritier fortuné dont la famille a fait fortune récemment et que les milieux établis tiennent à distance. Les trois hiérarchies coïncident-elles ?",
              hint: "Évaluez séparément la position économique (revenus, patrimoine), le prestige et l'accès au pouvoir.",
              solution: [
                "(a) Ordre économique élevé, ordre social élevé (profession prestigieuse), ordre politique faible.",
                "(b) Ordre économique modeste, ordre social élevé (honneur et respect), ordre politique faible.",
                "(c) Ordre économique modeste, prestige moyen, ordre politique plus élevé grâce au mandat de maire.",
                "(d) Ordre économique élevé, prestige limité auprès des milieux établis (situation de nouveau riche), pouvoir politique non précisé.",
                "Conclusion : les trois hiérarchies ne coïncident pas ; c'est précisément ce que l'approche multidimensionnelle de Weber permet de montrer, alors qu'une analyse purement économique les confondrait.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Distinguez l'approche réaliste et l'approche nominaliste des classes sociales.",
              hint: "Définissez chaque approche, rattachez-la à un auteur, et illustrez par un concept clé de cet auteur.",
              solution: [
                "Introduction : une classe sociale est un grand groupe d'individus partageant une position semblable dans la hiérarchie économique ; les sociologues divergent sur le statut de ces groupes.",
                "Approche réaliste : les classes existent réellement, indépendamment de l'observateur ; ce sont des groupes conscients d'eux-mêmes qui entrent en conflit.",
                "Illustration : chez Marx, la classe en soi (bourgeoisie, prolétariat définis par la propriété des moyens de production) devient classe pour soi quand elle prend conscience de ses intérêts et lutte ; la lutte des classes est le moteur de l'histoire.",
                "Approche nominaliste : les classes sont des catégories construites par le chercheur, selon des critères qu'il choisit, sans conscience ni action collective nécessaires.",
                "Illustration : chez Weber, une classe regroupe des individus ayant les mêmes chances sur le marché ; elle n'est qu'une des trois dimensions de la hiérarchie, avec les groupes de statut et les partis.",
                "Conclusion : la nomenclature des PCS de l'INSEE relève plutôt d'une démarche nominaliste, alors que l'étude d'une classe mobilisée (la grande bourgeoisie, par exemple) se rapproche de l'approche réaliste.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Classe en soi", right: "Groupe partageant objectivement la même place dans les rapports de production" },
              { left: "Classe pour soi", right: "Classe consciente de ses intérêts et mobilisée dans la lutte" },
              { left: "Plus-value", right: "Valeur produite par le travailleur au-delà du salaire qu'il reçoit" },
              { left: "Groupe de statut", right: "Ensemble d'individus partageant un même prestige et un même style de vie" },
              { left: "Parti", right: "Groupement orienté vers la conquête ou l'exercice du pouvoir" },
              { left: "Approche nominaliste", right: "Les classes sont des catégories construites par le chercheur" },
            ],
          },
          quiz: [
            {
              q: "Pour Marx, le critère qui définit une classe sociale est :",
              options: ["La place dans les rapports de production", "Le prestige et l'honneur social attachés à un style de vie", "Le niveau de diplôme obtenu à la fin des études", "Le parti politique pour lequel on vote"],
              answer: 0,
              why: "Marx distingue ceux qui possèdent les moyens de production (bourgeoisie) et ceux qui vendent leur force de travail (prolétariat).",
            },
            {
              q: "Chez Weber, l'ordre social correspond :",
              options: ["aux classes", "aux partis", "aux groupes de statut", "aux rapports de production"],
              answer: 2,
              why: "L'ordre social est celui du prestige et de l'honneur social, qui fonde les groupes de statut ; les classes relèvent de l'ordre économique.",
            },
            {
              q: "Le passage de la classe en soi à la classe pour soi suppose :",
              options: ["une hausse générale des salaires ouvriers", "la disparition de la bourgeoisie", "l'intervention de l'État", "une prise de conscience de classe"],
              answer: 3,
              why: "La classe pour soi est une classe qui a conscience de ses intérêts communs et s'organise pour les défendre.",
            },
            {
              q: "Une approche nominaliste des classes considère que :",
              options: ["Les classes sont des acteurs collectifs réels engagés dans une lutte", "Les classes sont des catégories construites par le chercheur", "Il n'existe que deux classes : bourgeoisie et prolétariat", "Les classes sont définies juridiquement par la loi"],
              answer: 1,
              why: "Pour les nominalistes, comme Weber, les classes sont des regroupements construits selon des critères choisis, sans conscience commune nécessaire.",
            },
            {
              q: "Quel ouvrage de Weber expose les trois ordres de la hiérarchie sociale ?",
              options: ["Le Capital", "La Distinction", "Économie et société", "Le 18 Brumaire de Louis Bonaparte"],
              answer: 2,
              why: "Économie et société (1922) ; Le Capital et Le 18 Brumaire sont de Marx, La Distinction de Bourdieu.",
            },
          ],
          trap: "Présenter Weber comme celui qui nie les classes : il les reconnaît dans l'ordre économique, mais refuse d'en faire la seule hiérarchie et ne suppose ni conscience ni conflit nécessaires.",
          method: "Construisez un tableau comparatif à quatre lignes (critère de définition, nombre de dimensions, réalisme ou nominalisme, place du conflit) : il vous servira directement pour toute question de mobilisation des connaissances sur Marx et Weber.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'pertinence-des-classes',
          title: 'Les classes sociales sont-elles encore pertinentes ?',
          minutes: 35,
          objectives: [
            "Comprendre que la pertinence d'une approche en termes de classes sociales pour rendre compte de la société française fait l'objet de débats théoriques et statistiques.",
            "Analyser l'évolution des distances inter-classes et intra-classes.",
            "Articuler l'analyse en classes avec les rapports sociaux de genre, les identifications subjectives et les facteurs d'individualisation.",
          ],
          course: [
            {
              heading: "Des arguments en faveur d'un affaiblissement des classes",
              paragraphs: [
                "Pendant les Trente Glorieuses, la hausse générale du niveau de vie et la consommation de masse (automobile, électroménager, télévision) rapprochent les modes de vie : les distances inter-classes, c'est-à-dire les écarts entre les groupes sociaux, se réduisent. Le sociologue Henri Mendras, dans La Seconde Révolution française (1988), décrit une moyennisation de la société : une vaste constellation centrale, formée de classes moyennes salariées, s'étend, et la pyramide sociale laisse place à l'image d'une toupie, renflée en son milieu.",
                "La conscience de classe semble aussi s'affaiblir. Le taux de syndicalisation est faible (environ un salarié sur dix), le vote ouvrier en faveur des partis de gauche a nettement reculé, et les grandes organisations du mouvement ouvrier ont perdu de leur influence. Les individus se définissent de plus en plus par des appartenances multiples (génération, genre, origine, territoire, goûts) : c'est l'individualisation, analysée notamment par Ulrich Beck dans La Société du risque (1986).",
                "Enfin, les distances intra-classes, c'est-à-dire les écarts au sein d'un même groupe, augmentent. Les ouvriers qualifiés de l'industrie et les ouvriers non qualifiés de la logistique, les employés de la fonction publique et les employés précaires du commerce, les cadres du public et ceux de la finance n'ont ni les mêmes revenus ni les mêmes conditions de travail. Des groupes moins homogènes peuvent difficilement former des classes au sens de Marx.",
              ],
            },
            {
              heading: "Des arguments en faveur de la persistance des classes",
              paragraphs: [
                "Les inégalités n'ont pas disparu. Le patrimoine est beaucoup plus inégalement réparti que les revenus, et les hauts revenus ont progressé plus vite que les autres depuis les années 1990. Louis Chauvel, dans un article intitulé « Le retour des classes sociales ? » (2001), montre que la réduction des inégalités s'est interrompue depuis le début des années 1980 et que les classes pourraient redevenir visibles ; il décrit ensuite des classes moyennes fragilisées (Les Classes moyennes à la dérive, 2006).",
                "La grande bourgeoisie reste une classe au sens plein. Michel Pinçon et Monique Pinçon-Charlot ont montré que les familles fortunées cultivent l'entre-soi (beaux quartiers, cercles, rallyes, mariages au sein du même milieu), transmettent leur patrimoine et défendent collectivement leurs intérêts : elles forment une classe consciente et mobilisée, à la fois en soi et pour soi.",
                "Les classes populaires, ouvriers et employés, représentent encore un peu moins de la moitié des actifs et partagent des conditions de travail d'exécution, une exposition au chômage et des revenus modestes. Olivier Schwartz (2009) décrit chez elles une conscience sociale triangulaire : elles se sentent à la fois dominées par ceux d'en haut et menacées par ceux qu'elles perçoivent comme situés en dessous d'elles. Le sentiment d'appartenance à une classe n'a donc pas disparu, mais il a changé de forme.",
              ],
              box: { label: "À retenir", text: "Distances inter-classes : écarts entre groupes sociaux. Distances intra-classes : écarts au sein d'un même groupe. La moyennisation réduit les premières ; l'hétérogénéisation des groupes accroît les secondes." },
            },
            {
              heading: "Classes, genre et identifications",
              paragraphs: [
                "Les rapports sociaux de genre traversent les classes. À position sociale comparable, les femmes ont en moyenne des salaires plus faibles, travaillent plus souvent à temps partiel et assument l'essentiel du travail domestique. Les statistiques ont longtemps classé les ménages d'après la profession de l'homme, ce qui rendait invisible la position propre des femmes. L'approche intersectionnelle, proposée par la juriste Kimberlé Crenshaw en 1989, étudie la façon dont la classe, le genre et l'origine se combinent pour produire des situations spécifiques.",
                "L'identification subjective à un groupe ne coïncide pas toujours avec la position objective. Beaucoup de personnes déclarent appartenir aux classes moyennes, y compris parmi celles que les statistiques classent dans les classes populaires ou supérieures. Cela montre que les classes sont aussi des représentations : une classe objectivement définie n'est pas forcément vécue comme telle.",
                "Le débat ne se tranche donc pas simplement. L'analyse en classes reste utile pour comprendre la reproduction des inégalités, la ségrégation résidentielle ou l'homogamie (le fait de choisir un conjoint de même milieu). Mais elle doit être complétée par la prise en compte du genre, de l'âge, du territoire et des identifications individuelles.",
              ],
              box: { label: "Repère", text: "Mendras, La Seconde Révolution française (1988) : moyennisation, toupie. Chauvel, « Le retour des classes sociales ? » (2001). Pinçon et Pinçon-Charlot : la bourgeoisie, classe mobilisée. Schwartz (2009) : conscience sociale triangulaire." },
            },
          ],
          keyPoints: [
            "Moyennisation (Mendras, 1988) : la pyramide sociale laisse place à une toupie, les distances inter-classes se réduisent.",
            "Affaiblissement de la conscience de classe : faible syndicalisation, recul du vote de classe, individualisation des identités.",
            "Hausse des distances intra-classes : les groupes sociaux deviennent plus hétérogènes.",
            "Persistance des classes : inégalités de patrimoine, retour des inégalités (Chauvel), bourgeoisie mobilisée (Pinçon-Charlot), conscience triangulaire (Schwartz).",
            "Le genre traverse les classes ; l'identification subjective ne coïncide pas toujours avec la position objective.",
          ],
          example: {
            statement: "Présentez un argument en faveur et un argument contre la pertinence de l'analyse en termes de classes sociales pour rendre compte de la société française actuelle.",
            solution: [
              "Définir : une classe sociale est un grand groupe partageant une position semblable dans la hiérarchie économique et, dans une approche réaliste, une conscience commune.",
              "Argument contre : la conscience de classe s'affaiblit. Le taux de syndicalisation est d'environ un salarié sur dix, le vote de classe recule et les individus se définissent par des appartenances multiples (individualisation).",
              "Conséquence : même si des groupes ont des conditions objectives proches, ils forment rarement des classes pour soi au sens de Marx.",
              "Argument pour : les inégalités de patrimoine restent très fortes, et la grande bourgeoisie, étudiée par les Pinçon-Charlot, cultive l'entre-soi et défend collectivement ses intérêts.",
              "Conséquence : au moins au sommet de la hiérarchie, une classe à la fois en soi et pour soi existe.",
              "Conclusion : l'analyse en classes reste pertinente pour certains groupes et pour comprendre la reproduction des inégalités, mais elle doit être nuancée selon les groupes considérés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque fait va dans le sens d'un affaiblissement ou d'une persistance des classes sociales : (a) le patrimoine se concentre davantage en haut de l'échelle ; (b) le taux de syndicalisation reste faible ; (c) les cadres épousent très souvent des personnes du même milieu ; (d) la consommation de masse diffuse les mêmes biens dans tous les milieux ; (e) les familles fortunées vivent dans des quartiers séparés ; (f) les employés forment un groupe de plus en plus hétérogène.",
              hint: "Les faits qui montrent des écarts durables ou une conscience collective plaident pour la persistance ; ceux qui montrent un rapprochement ou une hétérogénéité plaident pour l'affaiblissement.",
              solution: [
                "(a) Persistance : les inégalités de patrimoine se maintiennent et se transmettent.",
                "(b) Affaiblissement : signe d'une moindre conscience et d'une moindre mobilisation collectives.",
                "(c) Persistance : l'homogamie montre que les frontières sociales restent fortes.",
                "(d) Affaiblissement : les distances inter-classes dans la consommation se réduisent.",
                "(e) Persistance : la ségrégation résidentielle traduit un entre-soi de classe.",
                "(f) Affaiblissement : les distances intra-classes augmentent.",
                "Résultat : (a), (c), (e) pour la persistance ; (b), (d), (f) pour l'affaiblissement.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement. Revenu salarial annuel moyen. Date 1 : cadres 45 000 euros, ouvriers 15 000 euros (dont ouvriers qualifiés 16 000, non qualifiés 13 000). Date 2 : cadres 50 000 euros, ouvriers 20 000 euros (dont ouvriers qualifiés 23 000, non qualifiés 15 000). (1) Calculez le rapport entre le revenu des cadres et celui des ouvriers à chaque date. (2) Calculez le rapport entre ouvriers qualifiés et non qualifiés à chaque date (arrondi au centième). (3) Interprétez en termes de distances inter-classes et intra-classes.",
              hint: "Un rapport se calcule en divisant le revenu le plus élevé par le plus faible : il indique combien de fois plus gagne un groupe.",
              solution: [
                "(1) Date 1 : 45 000 ÷ 15 000 = 3. Date 2 : 50 000 ÷ 20 000 = 2,5. Les cadres gagnent 3 fois plus que les ouvriers, puis 2,5 fois plus.",
                "(2) Date 1 : 16 000 ÷ 13 000 ≈ 1,23. Date 2 : 23 000 ÷ 15 000 ≈ 1,53.",
                "(3) Le rapport entre cadres et ouvriers diminue : la distance inter-classes se réduit, ce qui va dans le sens de la moyennisation.",
                "Le rapport entre ouvriers qualifiés et non qualifiés augmente : la distance intra-classe s'accroît, le groupe ouvrier devient plus hétérogène.",
                "Résultat : rapports de 3 puis 2,5 entre groupes, de 1,23 puis 1,53 au sein du groupe ouvrier ; les deux évolutions fragilisent l'idée d'une classe ouvrière homogène.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac, plan détaillé) : Les classes sociales permettent-elles encore de rendre compte de la société française ?",
              hint: "Définissez classe sociale dans ses deux acceptions, formulez une problématique, puis construisez deux parties équilibrées avec deux arguments chacune.",
              solution: [
                "Introduction : définir la classe sociale (groupe partageant une position économique semblable, avec ou sans conscience commune) ; rappeler l'opposition entre l'approche réaliste de Marx et l'approche nominaliste de Weber. Problématique : les transformations de la société française depuis les années 1960 ont-elles rendu caduque l'analyse en classes ?",
                "I. Les classes sociales semblent moins pertinentes. A. Les distances inter-classes se sont réduites : hausse du niveau de vie, consommation de masse, moyennisation décrite par Mendras (la toupie). B. Les classes sont moins homogènes et moins conscientes : hausse des distances intra-classes, faible syndicalisation, recul du vote de classe, individualisation et rôle d'autres clivages (genre, âge, territoire).",
                "II. Les classes restent une grille de lecture utile. A. Les inégalités persistent et se transmettent : concentration du patrimoine, retour des inégalités depuis les années 1980 (Chauvel), homogamie et ségrégation résidentielle. B. Certaines classes restent conscientes et mobilisées : la grande bourgeoisie (Pinçon-Charlot) ; les classes populaires gardent une conscience sociale, devenue triangulaire (Schwartz).",
                "Conclusion : les classes n'ont pas disparu, mais elles se sont transformées ; leur analyse doit articuler la position économique avec le genre et les identifications subjectives. Ouverture : l'intersectionnalité propose une telle articulation.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le débat sur les classes sociales.",
            statements: [
              { text: "Henri Mendras a décrit la moyennisation de la société française avec l'image de la toupie.", true: true, why: "Dans La Seconde Révolution française (1988), la constellation centrale s'élargit au milieu de la toupie." },
              { text: "La moyennisation signifie que toutes les inégalités ont disparu.", true: false, why: "Elle désigne le rapprochement des modes de vie autour d'une classe moyenne élargie, pas la fin des inégalités." },
              { text: "Les Pinçon-Charlot montrent que la grande bourgeoisie forme une classe mobilisée, consciente de ses intérêts.", true: true, why: "Entre-soi, transmission du patrimoine et défense collective de ses intérêts en font une classe pour soi." },
              { text: "La faiblesse du taux de syndicalisation est un argument en faveur de l'affaiblissement de la conscience de classe.", true: true, why: "Elle traduit une moindre mobilisation collective des salariés." },
              { text: "Les écarts au sein d'une même classe ne peuvent pas augmenter.", true: false, why: "Les distances intra-classes peuvent augmenter, par exemple entre ouvriers qualifiés et non qualifiés." },
              { text: "Le patrimoine est plus inégalement réparti que les revenus.", true: true, why: "Le patrimoine s'accumule et se transmet par héritage, ce qui accentue sa concentration." },
              { text: "L'intersectionnalité consiste à étudier le genre en laissant de côté la classe.", true: false, why: "Elle étudie au contraire la combinaison de la classe, du genre et de l'origine." },
            ],
          },
          quiz: [
            {
              q: "Qui a proposé l'image de la toupie pour décrire la société française ?",
              options: ["Karl Marx", "Pierre Bourdieu", "Louis Chauvel", "Henri Mendras"],
              answer: 3,
              why: "Henri Mendras, dans La Seconde Révolution française (1988), pour illustrer la moyennisation.",
            },
            {
              q: "Lequel de ces faits va dans le sens d'une persistance des classes sociales ?",
              options: ["La diffusion de l'électroménager dans tous les milieux", "L'accentuation des inégalités de patrimoine", "Le recul du vote de classe", "L'individualisation des modes de vie"],
              answer: 1,
              why: "Des inégalités de patrimoine durables et transmises maintiennent des frontières entre groupes sociaux.",
            },
            {
              q: "La conscience sociale triangulaire décrite par Olivier Schwartz caractérise :",
              options: ["les classes populaires", "la grande bourgeoisie", "les agriculteurs exploitants", "les professions libérales"],
              answer: 0,
              why: "Les classes populaires se sentent à la fois dominées par ceux d'en haut et menacées par ceux qu'elles perçoivent en dessous d'elles.",
            },
            {
              q: "Parler de distances intra-classes, c'est étudier :",
              options: ["les écarts entre les cadres et les ouvriers", "les écarts entre les pays européens", "les écarts au sein d'un même groupe social", "les écarts entre générations successives"],
              answer: 2,
              why: "Intra signifie à l'intérieur : on compare des individus appartenant au même groupe social.",
            },
            {
              q: "Quel constat relève des rapports sociaux de genre ?",
              options: ["Le vote ouvrier en faveur de la gauche a nettement reculé", "À PCS égale, les femmes gagnent en moyenne moins", "La part des cadres dans l'emploi a fortement augmenté", "Le patrimoine reste très concentré en haut de l'échelle"],
              answer: 1,
              why: "L'écart de salaire entre femmes et hommes au sein d'une même PCS montre que le genre traverse les classes.",
            },
          ],
          trap: "Traiter le sujet de façon univoque : la moyennisation des années 1960-1980 ne prouve pas la disparition des classes, pas plus que la persistance des inégalités ne prouve à elle seule l'existence de classes conscientes.",
          method: "Pour chaque argument, précisez sur quel critère il porte : distances inter-classes, distances intra-classes, conscience de classe et identification subjective, ou autres clivages (genre, âge, territoire). Cette grille organise naturellement une dissertation.",
        },
      ],
    },
    /* ==================================================================== */
    /* QUELLE EST L'ACTION DE L'ÉCOLE SUR LES DESTINS INDIVIDUELS ?          */
    /* ==================================================================== */
    {
      id: 'ecole',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'massification-scolaire',
          title: 'Massification et démocratisation scolaire',
          minutes: 30,
          objectives: [
            "Comprendre que, dans les sociétés démocratiques, l'École transmet des savoirs, socialise et sélectionne, et vise à favoriser l'égalité des chances.",
            "Distinguer massification et démocratisation scolaire.",
            "Comprendre que la massification ne s'est pas accompagnée d'une démocratisation au même rythme (démocratisation quantitative, qualitative, ségrégative).",
          ],
          course: [
            {
              heading: "Les fonctions de l'École",
              paragraphs: [
                "L'École transmet des savoirs et des savoir-faire : lire, écrire, compter, raisonner, puis des connaissances spécialisées et des qualifications utiles sur le marché du travail. Elle socialise aussi les jeunes : pour Émile Durkheim (Éducation et sociologie, publié en 1922), l'éducation est une socialisation méthodique de la jeune génération, qui transmet les normes et les valeurs communes nécessaires à la cohésion de la société. L'École républicaine transmet ainsi les valeurs de citoyenneté et de laïcité.",
                "L'École sélectionne et certifie : par les notes, l'orientation et les diplômes, elle répartit les individus entre les filières puis entre les positions sociales. Dans une société démocratique, cette sélection doit reposer sur le mérite (idéal méritocratique) et non sur la naissance. L'École vise donc l'égalité des chances : chacun, quelle que soit son origine sociale, doit avoir la même probabilité de réussir. François Dubet (Les Places et les Chances, 2010) distingue cette égalité des chances de l'égalité des places, qui cherche à réduire les écarts entre les positions elles-mêmes.",
              ],
              box: { label: "Définition", text: "L'égalité des chances est la situation dans laquelle la probabilité d'obtenir un diplôme ou d'accéder à une position ne dépend pas de l'origine sociale, du sexe ou du lieu de naissance, mais seulement du mérite." },
            },
            {
              heading: "Une massification rapide",
              paragraphs: [
                "La massification scolaire est la forte augmentation du nombre d'élèves et d'étudiants et de la durée moyenne des études. Elle est le fruit de réformes successives : les lois Ferry (1881-1882) rendent l'école primaire gratuite, laïque et obligatoire de 6 à 13 ans ; la réforme Berthoin (1959) porte l'obligation scolaire à 16 ans ; la réforme Haby (1975) crée le collège unique, qui accueille tous les élèves dans la même structure. En 1985 sont créés le baccalauréat professionnel et l'objectif de conduire 80 % d'une génération au niveau du baccalauréat.",
                "Plus récemment, l'instruction est devenue obligatoire dès 3 ans (2019), et une obligation de formation s'applique jusqu'à 18 ans (2020). Résultat : alors que le baccalauréat concernait une petite minorité d'une génération au milieu du XXe siècle, près de huit jeunes sur dix l'obtiennent aujourd'hui, et l'enseignement supérieur accueille près de trois millions d'étudiants. La demande des familles, portée par la hausse du niveau de vie et par la valeur des diplômes sur le marché du travail, a accompagné ce mouvement.",
              ],
              box: { label: "Repère", text: "1881-1882 : lois Ferry. 1959 : réforme Berthoin, scolarité obligatoire jusqu'à 16 ans. 1975 : réforme Haby, collège unique. 1985 : bac professionnel et objectif de 80 % d'une génération au niveau du bac. 2019 : instruction obligatoire dès 3 ans." },
            },
            {
              heading: "Massification n'est pas démocratisation",
              paragraphs: [
                "La démocratisation scolaire est la réduction des inégalités d'accès aux diplômes selon l'origine sociale. L'historien Antoine Prost (L'Enseignement s'est-il démocratisé ?, 1986) distingue la démocratisation quantitative, c'est-à-dire l'accès d'un plus grand nombre de jeunes de tous les milieux à un niveau d'études plus élevé, et la démocratisation qualitative, qui suppose que les écarts entre groupes sociaux se réduisent. La massification produit la première, pas forcément la seconde.",
                "Le sociologue Pierre Merle (La Démocratisation de l'enseignement, 2002) distingue trois cas. La démocratisation égalisatrice réduit les écarts entre groupes sociaux. La démocratisation uniforme fait progresser tous les groupes au même rythme, de sorte que les écarts restent stables. La démocratisation ségrégative ouvre l'accès à un niveau d'études, mais les groupes sociaux s'y répartissent dans des filières inégalement prestigieuses : les enfants d'ouvriers obtiennent plus souvent un baccalauréat professionnel, les enfants de cadres un baccalauréat général, puis des formations sélectives.",
                "Les inégalités se sont ainsi déplacées vers les filières et vers les niveaux les plus élevés (classes préparatoires, grandes écoles, masters), où les enfants de milieux favorisés restent très surreprésentés. De plus, quand un diplôme se diffuse, sa valeur relative sur le marché du travail baisse : on parle d'inflation des diplômes. Il faut alors un diplôme plus élevé pour accéder aux mêmes positions.",
              ],
              box: { label: "À retenir", text: "Massification : plus d'élèves, plus longtemps. Démocratisation : moins d'inégalités selon l'origine. Merle : démocratisation égalisatrice (écarts réduits), uniforme (écarts stables), ségrégative (accès élargi mais filières inégales)." },
            },
          ],
          keyPoints: [
            "Fonctions de l'École : transmettre des savoirs, socialiser (Durkheim), sélectionner et certifier, viser l'égalité des chances.",
            "Massification : forte hausse des effectifs et de la durée des études, portée par les lois Ferry, Berthoin (1959), Haby (1975), le bac pro (1985).",
            "Près de huit jeunes sur dix obtiennent aujourd'hui le baccalauréat.",
            "Prost : démocratisation quantitative (accès élargi) et qualitative (écarts réduits entre groupes sociaux).",
            "Merle : démocratisation égalisatrice, uniforme ou ségrégative ; les inégalités se déplacent vers les filières et le supérieur.",
          ],
          example: {
            statement: "Données fictives d'entraînement. Part des jeunes obtenant le baccalauréat : enfants de cadres 70 % à la date 1 et 90 % à la date 2 ; enfants d'ouvriers 20 % à la date 1 et 60 % à la date 2. À la date 2, parmi les bacheliers, 80 % des enfants de cadres ont un bac général, contre 35 % des enfants d'ouvriers. Qualifiez l'évolution.",
            solution: [
              "Massification : les deux groupes progressent fortement (+20 points pour les enfants de cadres, +40 points pour les enfants d'ouvriers).",
              "Écart absolu : 70 - 20 = 50 points à la date 1 ; 90 - 60 = 30 points à la date 2. L'écart se réduit de 20 points.",
              "Rapport : 70 ÷ 20 = 3,5 à la date 1 ; 90 ÷ 60 = 1,5 à la date 2. Les enfants de cadres avaient 3,5 fois plus de chances d'obtenir le bac, puis 1,5 fois plus.",
              "Pour l'accès au bac, la démocratisation est donc égalisatrice.",
              "Mais les filières diffèrent : 80 % des bacheliers enfants de cadres ont un bac général contre 35 % des bacheliers enfants d'ouvriers ; l'inégalité s'est déplacée vers le type de baccalauréat.",
              "Conclusion : la massification s'accompagne d'une démocratisation réelle de l'accès au bac, mais en partie ségrégative.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à la réforme correspondante : 1881-1882 ; 1959 ; 1975 ; 1985 ; 2019. Réformes : création du collège unique ; création du baccalauréat professionnel ; instruction obligatoire dès 3 ans ; école primaire gratuite, laïque et obligatoire ; scolarité obligatoire jusqu'à 16 ans.",
              hint: "Partez des deux dates les plus connues : les lois Ferry à la fin du XIXe siècle et le collège unique de la réforme Haby.",
              solution: [
                "1881-1882 : lois Ferry, école primaire gratuite, laïque et obligatoire.",
                "1959 : réforme Berthoin, scolarité obligatoire jusqu'à 16 ans.",
                "1975 : réforme Haby, création du collège unique.",
                "1985 : création du baccalauréat professionnel.",
                "2019 : instruction obligatoire dès 3 ans.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement. Part des jeunes accédant à l'enseignement supérieur dans trois pays, entre la date 1 et la date 2. Pays A : enfants de cadres de 60 % à 80 %, enfants d'ouvriers de 20 % à 60 %. Pays B : enfants de cadres de 40 % à 60 %, enfants d'ouvriers de 10 % à 30 %. Pays C : enfants de cadres de 60 % à 90 %, enfants d'ouvriers de 10 % à 50 %, mais 80 % des enfants d'ouvriers étudiants sont dans des filières courtes contre 20 % des enfants de cadres. Pour chaque pays, calculez l'évolution de l'écart et qualifiez la démocratisation selon la typologie de Merle.",
              hint: "Calculez l'écart en points à chaque date ; pour C, regardez aussi les filières.",
              solution: [
                "Pays A : écart de 60 - 20 = 40 points, puis 80 - 60 = 20 points. L'écart se réduit : démocratisation égalisatrice.",
                "Pays B : écart de 40 - 10 = 30 points, puis 60 - 30 = 30 points. Les deux groupes progressent de 20 points : démocratisation uniforme (écart stable).",
                "Pays C : écart de 60 - 10 = 50 points, puis 90 - 50 = 40 points ; l'accès se rapproche, mais les enfants d'ouvriers sont concentrés dans les filières courtes (80 % contre 20 %).",
                "Pour C, l'inégalité se déplace vers les filières : démocratisation ségrégative.",
                "Résultat : A égalisatrice, B uniforme, C ségrégative.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Montrez que la massification scolaire ne s'est pas accompagnée d'une démocratisation au même rythme.",
              hint: "Définissez les deux notions, établissez la massification, puis montrez que les inégalités se sont maintenues ou déplacées, avec la typologie de Merle.",
              solution: [
                "Définir : la massification est la forte hausse des effectifs scolarisés et de la durée des études ; la démocratisation est la réduction des inégalités d'accès aux diplômes selon l'origine sociale.",
                "Constat de massification : grâce au collège unique (1975), au bac professionnel (1985) et à l'objectif de 80 % d'une génération au niveau du bac, près de huit jeunes sur dix obtiennent aujourd'hui le baccalauréat.",
                "Démocratisation quantitative : les enfants de milieux populaires accèdent bien plus souvent qu'avant au lycée et au baccalauréat (Prost).",
                "Mais démocratisation ségrégative (Merle) : les enfants d'ouvriers sont surreprésentés dans la voie professionnelle, les enfants de cadres dans la voie générale puis dans les formations sélectives (classes préparatoires, grandes écoles).",
                "Les inégalités se déplacent vers le haut du cursus, et l'inflation des diplômes réduit la valeur des titres que les milieux populaires obtiennent désormais.",
                "Conclusion : l'accès s'est élargi plus vite que les écarts ne se sont réduits ; la massification n'a été qu'en partie une démocratisation.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la massification scolaire en France.",
            items: [
              "Lois Ferry : école primaire gratuite, laïque et obligatoire (1881-1882)",
              "Réforme Berthoin : scolarité obligatoire jusqu'à 16 ans (1959)",
              "Réforme Haby : création du collège unique (1975)",
              "Création du baccalauréat professionnel (1985)",
              "Instruction obligatoire dès 3 ans (2019)",
              "Obligation de formation jusqu'à 18 ans (2020)",
            ],
          },
          quiz: [
            {
              q: "La massification scolaire désigne :",
              options: ["la réduction des inégalités sociales de réussite à l'école", "la forte hausse des effectifs et de la durée des études", "la suppression progressive des examens nationaux", "la multiplication des établissements privés sous contrat"],
              answer: 1,
              why: "La massification est un phénomène quantitatif : plus d'élèves, scolarisés plus longtemps ; elle ne dit rien, à elle seule, des inégalités.",
            },
            {
              q: "Selon Pierre Merle, une démocratisation ségrégative signifie que :",
              options: ["les écarts d'accès entre groupes sociaux se réduisent nettement", "tous les groupes sociaux progressent exactement au même rythme", "l'accès au diplôme recule pour les enfants de cadres", "l'accès progresse mais dans des filières inégales"],
              answer: 3,
              why: "L'accès s'élargit, mais les groupes sociaux se répartissent dans des filières de prestige différent : l'inégalité se déplace.",
            },
            {
              q: "Pour Durkheim, l'éducation est avant tout :",
              options: ["une socialisation méthodique de la jeune génération", "un moyen pour la classe dominante de reproduire sa domination", "un investissement individuel en capital humain rentable", "un calcul des coûts et des avantages par les familles"],
              answer: 0,
              why: "Durkheim insiste sur la transmission des normes et des valeurs communes qui assurent la cohésion sociale.",
            },
            {
              q: "Quelle réforme crée le collège unique ?",
              options: ["La loi Ferry de 1882", "La réforme Berthoin de 1959", "La réforme Haby de 1975", "La loi de 2019"],
              answer: 2,
              why: "La réforme Haby (1975) réunit tous les élèves dans un même collège, sans filières séparées.",
            },
            {
              q: "L'égalité des chances signifie que :",
              options: ["tous les élèves obtiennent le même diplôme", "tous les adultes occupent des positions égales", "les écoles reçoivent les mêmes moyens", "la réussite ne dépend pas de l'origine sociale"],
              answer: 3,
              why: "Il s'agit d'une égalité de probabilité d'accès selon le mérite, et non d'une égalité des résultats ou des positions.",
            },
          ],
          trap: "Confondre massification et démocratisation : l'arrivée massive d'enfants de milieux populaires au lycée ne signifie pas que les écarts selon l'origine sociale ont disparu, car ils se déplacent vers les filières et les niveaux supérieurs.",
          method: "Face à des données d'accès selon l'origine, calculez toujours deux indicateurs, l'écart absolu (en points) et le rapport (combien de fois plus), puis regardez dans quelles filières se fait l'accès. Ce triple regard permet de qualifier la démocratisation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'inegalites-de-reussite',
          title: 'Les inégalités de réussite scolaire et leurs explications',
          minutes: 35,
          objectives: [
            "Comprendre la multiplicité des facteurs d'inégalités de réussite scolaire : rôle de l'École, capital culturel et investissements familiaux, socialisation selon le genre, effets des stratégies des ménages.",
            "Distinguer l'analyse de Bourdieu (capital culturel et reproduction) et celle de Boudon (stratégies et calcul coût-avantage).",
            "Expliquer la construction des trajectoires individuelles de formation.",
          ],
          course: [
            {
              heading: "Le constat : une réussite inégale",
              paragraphs: [
                "Les inégalités de réussite scolaire selon l'origine sociale apparaissent dès l'école primaire, dans les évaluations nationales, puis se cumulent à chaque étape : résultats au collège, orientation en fin de troisième entre voie générale et technologique et voie professionnelle, type de baccalauréat, accès et réussite dans l'enseignement supérieur. Les enfants de cadres obtiennent beaucoup plus souvent un baccalauréat général que les enfants d'ouvriers, et ils sont très surreprésentés dans les classes préparatoires et les grandes écoles. Les enquêtes internationales PISA de l'OCDE classent la France parmi les pays où le lien entre origine sociale et performances des élèves est le plus fort.",
                "Les inégalités selon le sexe ont une autre forme. En moyenne, les filles réussissent mieux que les garçons : elles redoublent moins et obtiennent plus souvent le baccalauréat. Mais elles s'orientent moins vers les filières scientifiques et techniques les plus valorisées (écoles d'ingénieurs, informatique). Christian Baudelot et Roger Establet ont analysé ce paradoxe dans Allez les filles ! (1992).",
              ],
            },
            {
              heading: "Bourdieu : capital culturel et reproduction",
              paragraphs: [
                "Pierre Bourdieu et Jean-Claude Passeron, dans Les Héritiers (1964) puis La Reproduction (1970), expliquent les inégalités par le capital culturel, transmis par la famille. Il existe sous trois formes : incorporé (manières de parler, goûts, rapport à la lecture, dispositions durables), objectivé (livres, instruments de musique, œuvres) et institutionnalisé (diplômes). L'École valorise une culture proche de celle des classes favorisées (langage soutenu, aisance, rapport distancié au savoir) sans l'enseigner explicitement.",
                "Les enfants qui possèdent cette culture, les héritiers, réussissent avec une facilité qui paraît naturelle : l'École interprète comme un don ou un mérite personnel ce qui est en réalité un héritage. Elle légitime ainsi la reproduction sociale. On reproche à cette analyse un certain déterminisme : elle explique mal les réussites d'enfants de milieux populaires.",
                "Bernard Lahire (Tableaux de familles, 1995) étudie justement des réussites paradoxales en milieu populaire. Il montre que le capital culturel ne compte que s'il est effectivement transmis, et que des familles peu diplômées peuvent favoriser la réussite par d'autres ressources : un ordre domestique régulier, l'attention portée à l'écrit, la valorisation de l'école, la mobilisation d'un aîné. Les investissements familiaux comptent autant que le capital possédé.",
              ],
              box: { label: "Définition", text: "Le capital culturel est l'ensemble des ressources culturelles d'un individu : incorporées (langage, goûts, dispositions), objectivées (livres, œuvres, instruments) et institutionnalisées (diplômes). Notion de Pierre Bourdieu." },
            },
            {
              heading: "Boudon : des choix rationnels selon la position sociale",
              paragraphs: [
                "Raymond Boudon, dans L'Inégalité des chances (1973), adopte l'individualisme méthodologique : il explique les inégalités par l'agrégation de choix individuels rationnels. À chaque palier d'orientation, les familles comparent les coûts (frais d'études, revenus auxquels on renonce, risque d'échec) et les avantages attendus d'une poursuite d'études. Or cette évaluation dépend de la position sociale : pour une famille ouvrière, des études longues coûtent relativement plus cher et paraissent plus risquées ; un diplôme de niveau intermédiaire représente déjà une ascension.",
                "Pour une famille de cadres, au contraire, s'arrêter tôt serait vécu comme un déclassement. À résultats scolaires égaux, les enfants de milieux modestes choisissent donc plus souvent des études courtes. Ces écarts se cumulent à chaque palier : même modestes au départ, ils deviennent considérables à la fin du parcours. Une conséquence pratique est de réduire le nombre de paliers d'orientation, de mieux informer les familles et d'aider financièrement les étudiants.",
              ],
              box: { label: "Repère", text: "Bourdieu : inégalités produites par l'héritage culturel et par une École qui valorise la culture des classes dominantes (reproduction). Boudon : inégalités produites par des choix rationnels qui dépendent de la position sociale, cumulés à chaque palier." },
            },
            {
              heading: "Le rôle de l'École, du genre et des stratégies des ménages",
              paragraphs: [
                "L'École elle-même contribue aux inégalités. Les établissements n'offrent pas tous les mêmes conditions d'apprentissage (effet établissement, effet classe, effet maître). Les attentes des enseignants peuvent influencer les résultats des élèves : c'est l'effet Pygmalion, mis en évidence par Robert Rosenthal et Lenore Jacobson (1968). Les procédures d'orientation et la ségrégation entre établissements jouent aussi. L'éducation prioritaire, créée en 1981, cherche à compenser ces écarts en donnant plus de moyens aux établissements des quartiers défavorisés.",
                "La socialisation selon le genre façonne les parcours : familles, pairs et institutions transmettent des représentations différentes des métiers et des disciplines. Les filles, socialisées à se conformer aux normes scolaires, réussissent mieux, mais s'autocensurent davantage dans les filières scientifiques ; les garçons sont orientés plus souvent vers les filières techniques et industrielles.",
                "Les ménages développent enfin des stratégies. Agnès van Zanten (Choisir son école, 2009) montre que les familles des classes moyennes et supérieures, mieux informées, choisissent leur établissement (demandes de dérogation à la carte scolaire, établissement privé, options rares) pour éviter les établissements jugés défavorables. Elles investissent aussi dans le soutien scolaire et les activités extrascolaires. Ces stratégies renforcent la ségrégation scolaire.",
              ],
            },
          ],
          keyPoints: [
            "Les inégalités de réussite selon l'origine sociale apparaissent tôt et se cumulent jusqu'au supérieur ; les filles réussissent mieux mais s'orientent moins vers les sciences.",
            "Bourdieu et Passeron : le capital culturel (incorporé, objectivé, institutionnalisé) transforme l'héritage en mérite apparent.",
            "Lahire : le capital culturel doit être transmis ; la mobilisation familiale explique des réussites paradoxales.",
            "Boudon : à chaque palier, un calcul coût-avantage-risque qui dépend de la position sociale ; les écarts se cumulent.",
            "École (effet établissement, effet Pygmalion, orientation), socialisation genrée et stratégies des ménages (van Zanten) complètent l'explication.",
          ],
          example: {
            statement: "Deux élèves ont 12 de moyenne en fin de troisième. L'une a un père cadre, l'autre un père ouvrier. À l'aide du raisonnement de Raymond Boudon, expliquez pourquoi leurs orientations peuvent différer.",
            solution: [
              "Rappeler le cadre : pour Boudon, les familles font à chaque palier un calcul rationnel comparant les coûts, les avantages et les risques d'une poursuite d'études.",
              "Pour la famille ouvrière, une seconde générale conduit à des études longues : coût financier, revenus auxquels on renonce, et risque d'échec jugé élevé avec une moyenne de 12.",
              "Pour elle, une formation professionnelle courte assure déjà une position égale ou supérieure à celle des parents : l'avantage relatif d'études longues paraît faible au regard du risque.",
              "Pour la famille de cadres, une orientation professionnelle serait vécue comme un déclassement par rapport à la position familiale ; la poursuite en voie générale s'impose malgré le risque.",
              "À résultats égaux, les deux élèves peuvent donc faire des choix différents, et ces écarts se répéteront aux paliers suivants.",
              "Conclusion : les inégalités naissent ici de choix rationnels qui dépendent de la position sociale, et non d'un écart de capacités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Présentez les trois états du capital culturel selon Pierre Bourdieu et donnez un exemple pour chacun.",
              hint: "Distinguez ce qui est dans la personne, ce qui est dans les objets et ce qui est certifié par une institution.",
              solution: [
                "Capital culturel incorporé : dispositions durables acquises par la socialisation. Exemple : un vocabulaire riche, l'habitude de lire, l'aisance à l'oral.",
                "Capital culturel objectivé : biens culturels possédés. Exemple : une bibliothèque familiale, un piano, des tableaux.",
                "Capital culturel institutionnalisé : titres scolaires reconnus. Exemple : un diplôme de master des parents.",
                "Résultat : le capital culturel existe dans les personnes, dans les objets et dans les diplômes ; c'est surtout sa forme incorporée qui favorise la réussite scolaire.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement. Un parcours compte trois paliers d'orientation. À chaque palier, la probabilité de poursuivre en voie longue est de 0,9 pour les enfants de cadres et de 0,7 pour les enfants d'ouvriers, à résultats égaux. (1) Calculez la probabilité d'atteindre la fin du parcours pour chaque groupe. (2) Comparez le rapport des probabilités au premier palier et à la fin. (3) Quel mécanisme de Boudon cet exercice illustre-t-il ?",
              hint: "Les probabilités de passages successifs se multiplient.",
              solution: [
                "(1) Enfants de cadres : 0,9 × 0,9 × 0,9 = 0,729, soit environ 73 %. Enfants d'ouvriers : 0,7 × 0,7 × 0,7 = 0,343, soit environ 34 %.",
                "(2) Au premier palier, le rapport est 0,9 ÷ 0,7 ≈ 1,29. À la fin, il est 0,729 ÷ 0,343 ≈ 2,13.",
                "(3) Un écart modeste à chaque palier devient un écart important à la fin : c'est l'effet cumulatif des choix d'orientation décrit par Boudon.",
                "Résultat : 72,9 % contre 34,3 % ; les enfants de cadres ont environ 2,1 fois plus de chances d'aller au bout du parcours, contre 1,3 fois au premier palier.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement (type bac, plan détaillé) : Vous montrerez que les inégalités de réussite scolaire s'expliquent par une pluralité de facteurs.",
              hint: "Organisez les facteurs en trois ensembles (famille, ménages et leurs stratégies, École et société) et associez à chacun au moins un auteur.",
              solution: [
                "Introduction : les inégalités de réussite scolaire sont les écarts de résultats et de parcours entre élèves selon leur origine sociale ou leur sexe. Elles persistent malgré la massification.",
                "Premier facteur, le capital culturel : Bourdieu et Passeron montrent que l'École valorise la culture des classes favorisées, transmise par la famille ; l'héritage est perçu comme un mérite.",
                "Deuxième facteur, les investissements familiaux : Lahire montre que la transmission effective (ordre domestique, rapport à l'écrit, mobilisation) explique des réussites paradoxales en milieu populaire.",
                "Troisième facteur, les stratégies des ménages : Boudon montre qu'à résultats égaux, le calcul coût-avantage diffère selon la position sociale ; van Zanten montre que les familles favorisées choisissent leur établissement.",
                "Quatrième facteur, le rôle de l'École : effet établissement, attentes des enseignants (effet Pygmalion), procédures d'orientation et ségrégation entre établissements.",
                "Cinquième facteur, la socialisation selon le genre : les filles réussissent mieux mais s'orientent moins vers les filières scientifiques (Baudelot et Establet).",
                "Conclusion : ces facteurs se combinent dans chaque trajectoire individuelle ; aucun ne suffit seul à expliquer les inégalités de réussite.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion ou auteur à l'idée correspondante.",
            pairs: [
              { left: "Capital culturel incorporé", right: "Dispositions durables : langage, goûts, rapport à l'écrit" },
              { left: "Capital culturel institutionnalisé", right: "Titres scolaires et diplômes" },
              { left: "Raymond Boudon", right: "Calcul coût-avantage-risque des familles à chaque palier d'orientation" },
              { left: "Bernard Lahire", right: "Réussites scolaires paradoxales en milieu populaire" },
              { left: "Agnès van Zanten", right: "Stratégies de choix de l'établissement par les familles" },
              { left: "Effet Pygmalion", right: "Influence des attentes de l'enseignant sur les résultats de l'élève" },
            ],
          },
          quiz: [
            {
              q: "Selon Bourdieu, l'École contribue à la reproduction sociale parce que :",
              options: ["elle reste payante pour une partie des familles modestes", "elle oriente les filles hors des filières générales", "elle valorise la culture des classes dominantes", "elle a renoncé à toute forme de sélection scolaire"],
              answer: 2,
              why: "Les héritiers, qui possèdent cette culture, réussissent mieux, et l'École présente leur réussite comme un don ou un mérite.",
            },
            {
              q: "Dans l'analyse de Boudon, les inégalités scolaires résultent surtout :",
              options: ["de choix rationnels liés à la position sociale", "d'un manque de capital culturel incorporé dans la famille", "d'une idéologie du don diffusée par les enseignants", "de différences d'aptitudes naturelles entre les élèves"],
              answer: 0,
              why: "Boudon explique les inégalités par l'agrégation de calculs coût-avantage-risque qui varient selon la position sociale des familles.",
            },
            {
              q: "Les réussites paradoxales étudiées par Bernard Lahire montrent que :",
              options: ["le capital culturel ne joue aucun rôle dans la scolarité", "seuls les enfants de cadres peuvent réussir leurs études", "l'origine sociale ne pèse plus du tout sur la réussite", "la mobilisation familiale peut compenser un faible capital"],
              answer: 3,
              why: "Des familles peu diplômées peuvent favoriser la réussite par un ordre domestique, un rapport à l'écrit et une mobilisation autour de l'école.",
            },
            {
              q: "Le contournement de la carte scolaire relève :",
              options: ["du capital économique incorporé", "des stratégies des ménages", "de la socialisation genrée", "de l'effet Pygmalion"],
              answer: 1,
              why: "Les familles mieux informées choisissent leur établissement, ce qu'a étudié Agnès van Zanten.",
            },
            {
              q: "Quel constat sur le genre est exact ?",
              options: ["Les filles réussissent mieux mais choisissent moins les sciences", "Les garçons obtiennent plus souvent le baccalauréat que les filles", "Les filles sont majoritaires dans les écoles d'ingénieurs", "Le genre n'a aucun effet sur l'orientation scolaire"],
              answer: 0,
              why: "En moyenne, les filles réussissent mieux leur scolarité mais s'orientent moins vers les filières scientifiques et techniques valorisées.",
            },
          ],
          trap: "Opposer Bourdieu et Boudon comme si l'un avait raison contre l'autre : les deux explications se complètent (héritage culturel en amont, choix d'orientation à chaque palier), et il faut y ajouter le rôle de l'École, du genre et des stratégies des ménages.",
          method: "Pour une question sur les inégalités de réussite, rangez les facteurs en trois niveaux, la famille (capital culturel, investissements, stratégies), l'École (pratiques, attentes, ségrégation, orientation) et la société (normes de genre, valeur des diplômes), et illustrez chaque niveau par un auteur.",
        },
      ],
    },
    /* ==================================================================== */
    /* QUELS SONT LES CARACTÉRISTIQUES ET LES FACTEURS DE LA MOBILITÉ ?      */
    /* ==================================================================== */
    {
      id: 'mobilite-sociale',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mesurer-la-mobilite',
          title: 'Mesurer la mobilité sociale : les tables de mobilité',
          minutes: 35,
          objectives: [
            "Distinguer la mobilité sociale intergénérationnelle des autres formes de mobilité (géographique, professionnelle).",
            "Comprendre les principes de construction, les intérêts et les limites des tables de mobilité.",
            "Lire et calculer des pourcentages dans une table de destinée et dans une table de recrutement.",
          ],
          course: [
            {
              heading: "Les formes de la mobilité",
              paragraphs: [
                "La mobilité sociale est le changement de position sociale d'un individu. La mobilité intergénérationnelle compare la position d'un individu à celle de ses parents : une fille d'ouvrier devenue ingénieure a connu une mobilité intergénérationnelle. La mobilité intragénérationnelle, ou professionnelle, désigne les changements de position au cours de la carrière d'un même individu : un employé promu cadre. La mobilité géographique est un changement de lieu de résidence, qui n'implique pas forcément de changement de position sociale. Lorsqu'un individu occupe la même position que ses parents, on parle d'immobilité ou de reproduction sociale.",
                "La mobilité est verticale quand elle s'accompagne d'un changement de rang dans la hiérarchie sociale : ascendante (fils d'ouvrier devenu cadre) ou descendante (fille de cadre devenue employée). Elle est horizontale quand l'individu change de groupe sans changement clair de rang, par exemple un fils d'agriculteur devenu artisan. Comme la nomenclature des PCS n'est pas parfaitement hiérarchique, le classement de certaines trajectoires reste discutable.",
              ],
              box: { label: "Définition", text: "Mobilité sociale intergénérationnelle : changement de position sociale d'un individu par rapport à celle de ses parents. Mobilité intragénérationnelle : changement de position au cours de la vie active d'un même individu." },
            },
            {
              heading: "Construire une table de mobilité",
              paragraphs: [
                "En France, les tables de mobilité sont construites à partir d'enquêtes de l'INSEE, notamment l'enquête Formation et qualification professionnelle (FQP). On interroge des actifs ou anciens actifs âgés de 35 à 59 ans, âge auquel la position professionnelle est en général stabilisée. On relève leur groupe socioprofessionnel et celui de leur père (et, dans les travaux plus récents, de leur mère), puis on croise ces deux informations dans un tableau à double entrée.",
                "La table des effectifs (ou table de contingence) indique combien d'individus de chaque origine occupent chaque position. Dans les exemples de cette leçon, les lignes indiquent l'origine (le groupe du père) et les colonnes la position (le groupe de l'enquêté), mais la présentation varie : lisez toujours les titres. La diagonale regroupe les immobiles, qui occupent la même position que leur père ; les autres cases correspondent aux mobiles. Les marges donnent la structure des pères et celle des enquêtés : si elles diffèrent, c'est que la structure socioprofessionnelle a changé d'une génération à l'autre.",
              ],
            },
            {
              heading: "Table de destinée et table de recrutement",
              paragraphs: [
                "La table de destinée répond à la question : que deviennent les individus d'une même origine ? On divise chaque effectif par le total de son origine. Exemple de lecture : sur 100 fils d'ouvriers, 15 sont devenus cadres. La case de la diagonale mesure alors la reproduction sociale : la part des fils qui occupent la même position que leur père.",
                "La table de recrutement (ou table d'origine) répond à la question : d'où viennent les individus d'une même position ? On divise chaque effectif par le total de sa position. Exemple de lecture : sur 100 cadres, 31 sont fils d'ouvriers. La case de la diagonale mesure l'autorecrutement : la part d'un groupe issue de ce même groupe.",
                "Les deux tables ne disent pas la même chose. Un groupe peut recruter beaucoup de fils d'ouvriers simplement parce que les ouvriers étaient très nombreux dans la génération des pères, alors même que chaque fils d'ouvrier a peu de chances d'y accéder. Pour mesurer l'inégalité des chances, il faut donc raisonner sur les destinées et les comparer entre origines.",
              ],
              box: { label: "Formule", text: "Destinée (%) = effectif de la case ÷ total de l'origine × 100 : « sur 100 fils de..., x sont devenus... ». Recrutement (%) = effectif de la case ÷ total de la position × 100 : « sur 100..., y sont fils de... »." },
            },
            {
              heading: "Intérêts et limites des tables",
              paragraphs: [
                "Les tables de mobilité permettent de mesurer la reproduction et la mobilité, de comparer les époques et les pays, et de distinguer ce que deviennent les individus d'une origine et d'où viennent les membres d'un groupe. Elles sont la base des analyses de la fluidité sociale.",
                "Elles ont cependant des limites. Elles ont longtemps comparé seulement les fils à leur père, laissant de côté la mobilité des femmes et le rôle de la mère. Les six grands groupes masquent des mobilités internes (un fils d'ouvrier non qualifié devenu ouvrier qualifié apparaît immobile). Le sens social d'une PCS change dans le temps : être employé ou cadre aujourd'hui ne signifie pas la même chose qu'il y a cinquante ans. La hiérarchie entre certains groupes est discutable (agriculteurs, artisans), et la table ignore les revenus, le patrimoine et la position du ménage.",
              ],
              box: { label: "À retenir", text: "Une table de mobilité croise origine et position. Diagonale : immobiles. Destinée : que deviennent 100 individus d'une origine ? Recrutement : d'où viennent 100 membres d'un groupe ? Limites : focalisation sur les hommes, grands groupes, sens changeant des PCS." },
            },
          ],
          keyPoints: [
            "Mobilité intergénérationnelle (par rapport aux parents), intragénérationnelle (au cours de la carrière), géographique (lieu de résidence).",
            "Mobilité verticale (ascendante ou descendante) ou horizontale ; immobilité = reproduction sociale.",
            "Table de mobilité : enquête FQP de l'INSEE, actifs et anciens actifs de 35 à 59 ans, origine croisée avec position.",
            "Destinée : pourcentages par origine (« sur 100 fils de... »). Recrutement : pourcentages par position (« sur 100 cadres... »).",
            "Limites : longtemps centrée sur les pères et les fils, grands groupes qui masquent des mobilités, sens changeant des PCS.",
          ],
          example: {
            statement: "Données fictives d'entraînement (en milliers). Pères cadres : 300 fils cadres, 150 fils de professions intermédiaires, 50 fils ouvriers (total 500). Pères de professions intermédiaires : 250 cadres, 400 professions intermédiaires, 150 ouvriers (total 800). Pères ouvriers : 250 cadres, 450 professions intermédiaires, 1 000 ouvriers (total 1 700). Total : 3 000. (1) Calculez la part des immobiles. (2) Quelle part des fils d'ouvriers est devenue cadre ? (3) Quelle part des cadres sont fils d'ouvriers ? (4) Comparez et interprétez.",
            solution: [
              "Totaux des positions : cadres 300 + 250 + 250 = 800 ; professions intermédiaires 150 + 400 + 450 = 1 000 ; ouvriers 50 + 150 + 1 000 = 1 200 ; total 3 000.",
              "(1) Immobiles (diagonale) : 300 + 400 + 1 000 = 1 700, soit 1 700 ÷ 3 000 × 100 ≈ 56,7 %.",
              "(2) Destinée : 250 ÷ 1 700 × 100 ≈ 14,7 %. Sur 100 fils d'ouvriers, environ 15 sont devenus cadres. À comparer : 300 ÷ 500 × 100 = 60 % des fils de cadres sont devenus cadres.",
              "(3) Recrutement : 250 ÷ 800 × 100 = 31,25 %. Sur 100 cadres, environ 31 sont fils d'ouvriers (et 300 ÷ 800 × 100 = 37,5 % sont fils de cadres).",
              "(4) Près d'un cadre sur trois est fils d'ouvrier, ce qui semble indiquer une forte ouverture. Mais ce chiffre s'explique surtout par le grand nombre d'ouvriers chez les pères (1 700 sur 3 000) et par la hausse du nombre de cadres (500 pères, 800 fils).",
              "Conclusion : un fils de cadre a 60 % de chances de devenir cadre, un fils d'ouvrier environ 14,7 % ; le recrutement large des cadres ne signifie pas l'égalité des chances.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la forme de mobilité dans chaque cas : (a) une fille d'ouvrier devenue professeure de lycée ; (b) un employé devenu cadre au cours de sa carrière ; (c) un cadre qui déménage de Lille à Lyon et reste cadre ; (d) un fils d'agriculteur devenu artisan ; (e) un fils de cadre devenu employé.",
              hint: "Demandez-vous d'abord à qui l'on compare l'individu (ses parents ou lui-même plus tôt), puis s'il change de rang.",
              solution: [
                "(a) Mobilité intergénérationnelle ascendante : les professeurs de lycée appartiennent aux cadres et professions intellectuelles supérieures.",
                "(b) Mobilité intragénérationnelle (professionnelle) ascendante.",
                "(c) Mobilité géographique, sans mobilité sociale.",
                "(d) Mobilité intergénérationnelle horizontale : changement de groupe d'indépendants sans changement clair de rang.",
                "(e) Mobilité intergénérationnelle descendante.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement (en milliers). Fils d'agriculteurs : 120 agriculteurs, 80 artisans et commerçants, 50 professions intermédiaires, 60 employés, 190 ouvriers (total 500). Par ailleurs, on compte 150 agriculteurs parmi les fils (toutes origines confondues). (1) Calculez la destinée des fils d'agriculteurs (en %). (2) Calculez la part des agriculteurs qui sont fils d'agriculteurs. (3) Interprétez l'écart entre les deux résultats.",
              hint: "La destinée se calcule sur le total de l'origine (500), le recrutement sur le total de la position (150).",
              solution: [
                "(1) Agriculteurs : 120 ÷ 500 = 24 % ; artisans et commerçants : 80 ÷ 500 = 16 % ; professions intermédiaires : 50 ÷ 500 = 10 % ; employés : 60 ÷ 500 = 12 % ; ouvriers : 190 ÷ 500 = 38 %. Total : 100 %.",
                "(2) Autorecrutement : 120 ÷ 150 × 100 = 80 %.",
                "(3) Seuls 24 % des fils d'agriculteurs sont restés agriculteurs : la reproduction est faible, car le nombre d'exploitations a fortement diminué, obligeant la plupart à changer de groupe.",
                "Mais 80 % des agriculteurs sont fils d'agriculteurs : l'autorecrutement est très fort, car on devient rarement agriculteur sans hériter d'une exploitation.",
                "Résultat : reproduction faible (24 %), autorecrutement fort (80 %) ; destinée et recrutement mesurent deux réalités différentes.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document (type bac, 6 points). Document (données fictives) : sur 100 cadres, 30 sont fils de cadres, 20 de professions intermédiaires, 15 d'artisans et commerçants, 10 d'employés, 20 d'ouvriers, 5 d'agriculteurs. Sur 100 ouvriers, 3 sont fils de cadres, 9 de professions intermédiaires, 10 d'artisans et commerçants, 10 d'employés, 55 d'ouvriers, 13 d'agriculteurs. (1) Présentez la donnée « 20 » de la ligne des cadres. (2) À l'aide du document, montrez que le recrutement des cadres est plus diversifié que celui des ouvriers, puis expliquez pourquoi ce document ne permet pas de conclure à l'égalité des chances.",
              hint: "C'est une table de recrutement : les pourcentages se lisent « sur 100 cadres... ». Pour l'égalité des chances, il faudrait des destinées.",
              solution: [
                "(1) Selon ces données fictives, sur 100 cadres, 20 ont un père ouvrier.",
                "(2) Le groupe d'origine le plus représenté parmi les cadres ne fournit que 30 % de leurs effectifs (fils de cadres), et quatre origines dépassent 10 % : le recrutement est diversifié.",
                "Chez les ouvriers, 55 % sont fils d'ouvriers : l'autorecrutement est beaucoup plus fort, et les fils de cadres n'en représentent que 3 %.",
                "Ce document est une table de recrutement : il indique d'où viennent les membres d'un groupe, pas les chances de chaque origine. Si 20 % des cadres sont fils d'ouvriers, c'est en partie parce que les ouvriers étaient très nombreux dans la génération des pères.",
                "Pour conclure sur l'égalité des chances, il faudrait comparer les destinées (part des fils d'ouvriers et des fils de cadres qui deviennent cadres), voire calculer un rapport des chances relatives.",
                "Conclusion : le recrutement des cadres est plus ouvert que celui des ouvriers, mais cela ne prouve pas que les chances d'y accéder soient égales.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction et de la lecture d'une table de mobilité.",
            items: [
              "Interroger un échantillon d'actifs et d'anciens actifs de 35 à 59 ans",
              "Relever le groupe socioprofessionnel de l'enquêté et celui de son père",
              "Croiser origine et position dans une table des effectifs",
              "Repérer la diagonale, qui regroupe les immobiles",
              "Calculer les pourcentages de destinée et de recrutement",
              "Interpréter en tenant compte de l'évolution des marges",
            ],
          },
          quiz: [
            {
              q: "Dans une table de destinée, on lit :",
              options: ["ce que deviennent 100 individus d'une même origine", "d'où viennent 100 individus occupant une même position", "comment les salaires évoluent d'une génération à l'autre", "la part des femmes dans chaque groupe socioprofessionnel"],
              answer: 0,
              why: "Les pourcentages sont calculés par origine : « sur 100 fils de... , x sont devenus... ».",
            },
            {
              q: "La diagonale d'une table de mobilité regroupe :",
              options: ["les individus en mobilité ascendante", "les individus en mobilité descendante", "les individus en mobilité horizontale", "les individus immobiles"],
              answer: 3,
              why: "Sur la diagonale, l'origine et la position sont identiques : l'individu occupe le même groupe que son père.",
            },
            {
              q: "Un employé qui devient cadre au cours de sa carrière connaît une mobilité :",
              options: ["intergénérationnelle", "géographique", "intragénérationnelle", "structurelle"],
              answer: 2,
              why: "On compare l'individu à lui-même à deux moments de sa vie active, et non à ses parents.",
            },
            {
              q: "Sur 800 cadres, 200 sont fils d'ouvriers. Ce chiffre permet de calculer :",
              options: ["un taux de destinée de 25 %", "un taux de recrutement de 25 %", "un taux d'immobilité de 25 %", "un taux de mobilité structurelle de 25 %"],
              answer: 1,
              why: "On divise par le total d'une position (les cadres) : 200 ÷ 800 = 25 %, c'est un pourcentage de recrutement.",
            },
            {
              q: "Quelle est une limite des tables de mobilité ?",
              options: ["Elles ne portent que sur la mobilité géographique", "Elles comptent chaque individu deux fois dans la table", "Elles classent les individus selon leur revenu exact", "Les grands groupes masquent des mobilités internes"],
              answer: 3,
              why: "Avec six grands groupes, un passage d'ouvrier non qualifié à ouvrier qualifié reste invisible.",
            },
          ],
          trap: "Confondre table de destinée et table de recrutement : « sur 100 fils d'ouvriers, 15 deviennent cadres » (destinée) ne dit pas la même chose que « sur 100 cadres, 31 sont fils d'ouvriers » (recrutement). Repérez toujours le total qui vaut 100.",
          method: "Avant de calculer, repérez où se trouve le total égal à 100 % (en ligne ou en colonne) et rédigez la phrase de lecture sur le modèle « Sur 100... , ... » : la bonne phrase indique immédiatement quel pourcentage calculer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mobilite-observee',
          title: 'Mobilité structurelle, mobilité ascendante et déclassement',
          minutes: 35,
          objectives: [
            "Comprendre que la mobilité observée comporte une composante structurelle.",
            "Comprendre que la mobilité peut se mesurer de manière relative (fluidité sociale) et qu'une société plus mobile n'est pas nécessairement plus fluide.",
            "Distinguer mobilité ascendante, mobilité descendante et déclassement.",
            "Calculer une mobilité structurelle et un rapport des chances relatives.",
          ],
          course: [
            {
              heading: "Mobilité observée et mobilité structurelle",
              paragraphs: [
                "La mobilité observée (ou mobilité brute) regroupe tous les individus qui ne sont pas sur la diagonale de la table : ils occupent une position différente de celle de leur père. Une partie de cette mobilité est imposée par la transformation de la structure des emplois. Si la génération des fils compte beaucoup moins d'agriculteurs et beaucoup plus de cadres que celle des pères, de nombreux fils d'agriculteurs doivent nécessairement changer de groupe, et des places de cadres doivent être occupées par des fils d'autres origines.",
                "Cette mobilité imposée par l'évolution de la structure socioprofessionnelle est la mobilité structurelle. On la mesure par la demi-somme des écarts, en valeur absolue, entre les marges de la table (effectifs des pères et effectifs des fils pour chaque groupe) : c'est le nombre minimal d'individus qui doivent changer de groupe. On appelait autrefois mobilité nette la différence entre mobilité observée et mobilité structurelle, en y voyant une mobilité « pure ». Cette décomposition est critiquée, car les deux composantes ne sont pas indépendantes : les sociologues lui préfèrent aujourd'hui la mesure de la fluidité.",
              ],
              box: { label: "Formule", text: "Mobilité observée = effectif total - effectif de la diagonale. Mobilité structurelle = (somme des écarts absolus entre marge des pères et marge des fils, groupe par groupe) ÷ 2. Mobilité nette = observée - structurelle." },
            },
            {
              heading: "Fluidité sociale et rapport des chances relatives",
              paragraphs: [
                "La fluidité sociale mesure l'égalité des chances indépendamment des changements de structure. On compare les chances relatives de deux origines d'accéder à une position plutôt qu'à une autre, à l'aide d'un rapport des chances relatives (odds ratio). Pour chaque origine, on calcule la chance d'accéder à la position (effectif qui l'atteint ÷ effectif qui ne l'atteint pas), puis on divise la chance d'une origine par celle de l'autre. Si le rapport vaut 1, les deux origines ont les mêmes chances : la société est parfaitement fluide. Plus il est élevé, plus l'inégalité des chances est forte.",
                "Une société plus mobile n'est pas forcément plus fluide. Pendant les Trente Glorieuses, la mobilité observée a fortement augmenté en France, surtout parce que la structure des emplois se transformait (exode agricole, essor des cadres et des professions intermédiaires). Les travaux de Louis-André Vallet ont montré que, sur la seconde moitié du XXe siècle, la fluidité n'a progressé que lentement. À l'inverse, une société peut devenir plus fluide sans que la mobilité observée augmente, si la structure des emplois se stabilise.",
              ],
              box: { label: "Formule", text: "Rapport des chances relatives = [effectif d'origine A devenu X ÷ effectif d'origine A non devenu X] ÷ [effectif d'origine B devenu X ÷ effectif d'origine B non devenu X]. Égal à 1 : parfaite fluidité." },
            },
            {
              heading: "Mobilité ascendante, descendante et déclassement",
              paragraphs: [
                "La mobilité ascendante conduit à une position plus élevée que celle du père, la mobilité descendante à une position moins élevée. La plupart des trajectoires sont de courte distance : un fils d'ouvrier devient plus souvent employé ou profession intermédiaire que cadre. Les trajectoires de longue distance (d'ouvrier à cadre, ou l'inverse) restent minoritaires. En France, la mobilité ascendante l'emporte sur la mobilité descendante, en raison de l'élévation des qualifications des emplois. La mobilité des femmes par rapport à leur mère a nettement progressé, en grande partie grâce à la tertiarisation.",
                "Le déclassement prend plusieurs formes. Le déclassement intergénérationnel désigne une mobilité descendante par rapport aux parents : Camille Peugny (Le Déclassement, 2009) montre que, pour les générations nées à partir des années 1960, la part des trajectoires descendantes a augmenté, car l'essor des emplois qualifiés a ralenti. Le déclassement scolaire désigne la situation d'une personne qui occupe un emploi inférieur à ce que son diplôme permettait d'espérer.",
                "Le paradoxe d'Anderson, formulé par le sociologue C. Arnold Anderson en 1961, éclaire ce phénomène : un fils peut détenir un diplôme plus élevé que son père sans occuper une position sociale plus élevée. Lorsque les diplômes se diffusent plus vite que les emplois qualifiés, leur valeur relative baisse (inflation des diplômes) : il faut un diplôme plus élevé pour accéder aux mêmes positions.",
              ],
              box: { label: "Définition", text: "Paradoxe d'Anderson (1961) : l'acquisition par un fils d'un diplôme supérieur à celui de son père ne garantit pas une position sociale plus élevée, car la valeur des diplômes baisse quand ils se diffusent plus vite que les emplois qualifiés." },
            },
          ],
          keyPoints: [
            "Mobilité observée = total - diagonale ; mobilité structurelle = demi-somme des écarts absolus entre les marges.",
            "La mobilité structurelle est imposée par la transformation des emplois (exode agricole, essor des cadres).",
            "Fluidité : rapport des chances relatives (odds ratio) ; 1 signifie l'égalité parfaite des chances.",
            "Une société plus mobile n'est pas forcément plus fluide : la mobilité des Trente Glorieuses était largement structurelle.",
            "Mobilité surtout ascendante et de courte distance ; hausse du déclassement pour les générations nées à partir des années 1960 (Peugny).",
            "Paradoxe d'Anderson : un diplôme plus élevé que celui du père ne garantit pas une position plus élevée.",
          ],
          example: {
            statement: "Données fictives d'entraînement (en milliers). Pères cadres : 240 fils cadres, 120 professions intermédiaires, 40 ouvriers (total 400). Pères de professions intermédiaires : 210 cadres, 300 professions intermédiaires, 90 ouvriers (total 600). Pères ouvriers : 150 cadres, 380 professions intermédiaires, 470 ouvriers (total 1 000). Total 2 000. On considère que cadres > professions intermédiaires > ouvriers. Calculez la mobilité observée, la mobilité structurelle, puis les mobilités ascendante et descendante.",
            solution: [
              "Marges des fils : cadres 240 + 210 + 150 = 600 ; professions intermédiaires 120 + 300 + 380 = 800 ; ouvriers 40 + 90 + 470 = 600 ; total 2 000.",
              "Mobilité observée : diagonale = 240 + 300 + 470 = 1 010 ; mobiles = 2 000 - 1 010 = 990, soit 49,5 % de l'effectif.",
              "Mobilité structurelle : écarts entre marges = |600 - 400| + |800 - 600| + |600 - 1 000| = 200 + 200 + 400 = 800 ; 800 ÷ 2 = 400, soit 20 % de l'effectif.",
              "Mobilité nette : 990 - 400 = 590.",
              "Mobilité ascendante : 210 (PI vers cadre) + 150 (ouvrier vers cadre) + 380 (ouvrier vers PI) = 740. Mobilité descendante : 120 + 40 + 90 = 250. Vérification : 740 + 250 = 990.",
              "Conclusion : près de la moitié des fils sont mobiles, surtout vers le haut, mais 400 mobilités sur 990 sont imposées par la transformation de la structure (moins d'ouvriers, plus de cadres).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives d'entraînement. Sur 100 fils de cadres, 50 sont devenus cadres ; sur 100 fils d'ouvriers, 10 sont devenus cadres. (1) Calculez la chance de devenir cadre plutôt que de ne pas le devenir pour chaque origine. (2) Calculez le rapport des chances relatives. (3) Comparez avec le simple rapport des pourcentages.",
              hint: "La chance se calcule en divisant le nombre de ceux qui deviennent cadres par le nombre de ceux qui ne le deviennent pas.",
              solution: [
                "(1) Fils de cadres : 50 ÷ 50 = 1. Fils d'ouvriers : 10 ÷ 90 ≈ 0,111.",
                "(2) Rapport des chances relatives : 1 ÷ (10 ÷ 90) = 90 ÷ 10 = 9.",
                "(3) Le simple rapport des pourcentages vaut 50 ÷ 10 = 5 : les fils de cadres sont 5 fois plus souvent cadres.",
                "Le rapport des chances relatives (9) indique qu'un fils de cadre a 9 fois plus de chances qu'un fils d'ouvrier de devenir cadre plutôt que de ne pas le devenir.",
                "Résultat : odds ratio de 9, loin de 1 : la fluidité est faible.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement. À la date 1, la mobilité observée concerne 55 % des individus, dont 20 points de mobilité structurelle ; le rapport des chances relatives entre fils de cadres et fils d'ouvriers pour devenir cadre est de 9. À la date 2, la mobilité observée concerne 65 % des individus, dont 30 points de mobilité structurelle ; le rapport des chances relatives est toujours de 9. (1) Calculez la mobilité nette aux deux dates. (2) La société est-elle devenue plus mobile ? plus fluide ? Justifiez.",
              hint: "Mobilité nette = observée - structurelle. La fluidité se lit dans le rapport des chances relatives.",
              solution: [
                "(1) Date 1 : 55 - 20 = 35 % ; date 2 : 65 - 30 = 35 %.",
                "(2) La mobilité observée passe de 55 % à 65 % : la société est plus mobile.",
                "Mais toute la hausse (+10 points) vient de la mobilité structurelle (+10 points), et la mobilité nette est inchangée.",
                "Le rapport des chances relatives reste égal à 9 : l'inégalité des chances entre fils de cadres et fils d'ouvriers n'a pas diminué, la société n'est pas plus fluide.",
                "Résultat : plus mobile, pas plus fluide ; la hausse de la mobilité s'explique entièrement par la transformation de la structure des emplois.",
              ],
            },
            {
              level: 3,
              statement: "Mobilisation des connaissances (type bac, 4 points) : Montrez que la mobilité sociale observée ne traduit pas nécessairement une plus grande égalité des chances.",
              hint: "Définissez mobilité observée et fluidité, puis expliquez le rôle de la mobilité structurelle, avec un exemple historique.",
              solution: [
                "Définir : la mobilité observée est la part des individus qui occupent une position différente de celle de leur père ; l'égalité des chances suppose que la position atteinte ne dépende pas de l'origine.",
                "Une grande partie de la mobilité observée est structurelle : elle résulte de la transformation des emplois entre deux générations. Pendant les Trente Glorieuses, l'exode agricole et l'essor des cadres ont contraint de nombreux fils d'agriculteurs et d'ouvriers à changer de groupe.",
                "Cette mobilité ne signifie pas que les chances sont devenues égales : les places nouvelles ont été occupées par des individus de toutes origines, sans que les fils de cadres perdent leur avantage relatif.",
                "Pour mesurer l'égalité des chances, on calcule la fluidité, à l'aide de rapports des chances relatives ; les travaux de Louis-André Vallet montrent que la fluidité n'a progressé que lentement en France dans la seconde moitié du XXe siècle.",
                "Conclusion : une société peut être plus mobile sans être plus fluide ; la mobilité observée mesure le mouvement, la fluidité mesure l'égalité des chances.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : mobilité observée, fluidité et déclassement.",
            statements: [
              { text: "La mobilité structurelle est la part de la mobilité imposée par l'évolution de la structure socioprofessionnelle.", true: true, why: "Quand les marges des pères et des fils diffèrent, un nombre minimal d'individus doit changer de groupe." },
              { text: "Une société plus mobile est forcément une société plus fluide.", true: false, why: "La hausse de la mobilité peut être entièrement structurelle, sans réduction de l'inégalité des chances." },
              { text: "Un rapport des chances relatives égal à 1 traduit une parfaite égalité des chances.", true: true, why: "Les deux origines ont alors exactement les mêmes chances d'accéder à la position étudiée." },
              { text: "La plupart des trajectoires de mobilité sont de longue distance, d'ouvrier à cadre.", true: false, why: "La mobilité est surtout de courte distance, vers les groupes voisins." },
              { text: "Le paradoxe d'Anderson montre qu'un diplôme plus élevé que celui de son père ne garantit pas une position plus élevée.", true: true, why: "La diffusion des diplômes réduit leur valeur relative sur le marché du travail." },
              { text: "Le déclassement désigne seulement la perte d'un emploi.", true: false, why: "Il désigne une position inférieure à celle des parents ou à ce que permettait le diplôme." },
              { text: "La mobilité nette s'obtient en retranchant la mobilité structurelle de la mobilité observée.", true: true, why: "C'est la définition traditionnelle, aujourd'hui critiquée au profit de la fluidité." },
            ],
          },
          quiz: [
            {
              q: "Comment calcule-t-on la mobilité structurelle à partir des marges d'une table ?",
              options: ["En additionnant les effectifs de la diagonale", "Par la demi-somme des écarts entre les marges", "En retranchant la diagonale de l'effectif total", "En divisant deux rapports de chances entre eux"],
              answer: 1,
              why: "On additionne, groupe par groupe, les écarts absolus entre marge des pères et marge des fils, puis on divise par deux.",
            },
            {
              q: "Un rapport des chances relatives de 9 entre fils de cadres et fils d'ouvriers pour devenir cadre signifie que :",
              options: ["les fils d'ouvriers ont 9 % de chances de devenir cadres", "9 fils de cadres sur 10 deviennent cadres", "l'inégalité des chances est forte", "la société est parfaitement fluide"],
              answer: 2,
              why: "Un rapport très supérieur à 1 indique que l'origine pèse fortement sur l'accès à la position de cadre.",
            },
            {
              q: "Le paradoxe d'Anderson s'explique notamment par :",
              options: ["l'inflation des diplômes", "la hausse du nombre d'agriculteurs exploitants", "la disparition progressive des emplois de cadres", "la baisse du nombre de bacheliers par génération"],
              answer: 0,
              why: "Quand les diplômes se diffusent plus vite que les emplois qualifiés, leur valeur relative diminue.",
            },
            {
              q: "Un fils de cadre devenu employé connaît :",
              options: ["une mobilité ascendante", "une mobilité horizontale", "une immobilité sociale", "une mobilité descendante"],
              answer: 3,
              why: "Il occupe une position moins élevée que celle de son père dans la hiérarchie sociale.",
            },
            {
              q: "Si la mobilité observée augmente uniquement parce que la structure des emplois change, alors :",
              options: ["la fluidité sociale augmente forcément", "l'égalité des chances est enfin atteinte", "la fluidité peut rester inchangée", "la mobilité nette augmente fortement aussi"],
              answer: 2,
              why: "La hausse est structurelle : les chances relatives des différentes origines peuvent ne pas avoir changé.",
            },
          ],
          trap: "Croire qu'une hausse de la mobilité observée prouve que la société est devenue plus juste : une grande partie de cette mobilité est structurelle, et seule la fluidité (rapports des chances relatives) mesure l'égalité des chances.",
          method: "Pour un rapport des chances relatives, écrivez d'abord la chance de chaque origine (effectif qui atteint la position ÷ effectif qui ne l'atteint pas), puis divisez l'une par l'autre ; vérifiez qu'un résultat supérieur à 1 favorise bien le groupe placé au numérateur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'facteurs-de-mobilite',
          title: 'Les facteurs de la mobilité sociale',
          minutes: 30,
          objectives: [
            "Comprendre comment l'évolution de la structure socioprofessionnelle contribue à expliquer la mobilité sociale.",
            "Comprendre le rôle des niveaux de formation dans la mobilité sociale.",
            "Comprendre le rôle des ressources et des configurations familiales dans la mobilité sociale.",
          ],
          course: [
            {
              heading: "L'évolution de la structure socioprofessionnelle",
              paragraphs: [
                "La transformation de la structure des emplois est un facteur majeur de mobilité. Le recul des agriculteurs et, plus tard, des ouvriers, et l'essor des cadres, des professions intermédiaires et des employés créent des places nouvelles en haut de la hiérarchie, qui ne peuvent pas être occupées seulement par les enfants des groupes favorisés : c'est un appel d'air vers le haut. Pendant les Trente Glorieuses, cette mobilité structurelle a permis à de nombreux enfants d'agriculteurs et d'ouvriers de connaître une mobilité ascendante.",
                "Lorsque ces transformations ralentissent, la mobilité structurelle ascendante diminue. Les générations nées à partir des années 1960 ont trouvé moins de places nouvelles dans les emplois qualifiés, alors même qu'elles étaient plus diplômées : c'est l'une des explications de la hausse du déclassement (Camille Peugny). La fécondité différentielle joue aussi : si les groupes favorisés ont moins d'enfants que les places qualifiées disponibles, des individus d'autres origines doivent les occuper.",
              ],
            },
            {
              heading: "Le rôle de la formation",
              paragraphs: [
                "Le diplôme est un facteur décisif de mobilité. À origine sociale donnée, les plus diplômés ont beaucoup plus de chances de connaître une mobilité ascendante. Les sociologues représentent ces relations par le triangle OED : l'origine sociale (O) influence le niveau d'éducation (E), qui influence la destinée sociale (D). Une grande partie de l'effet de l'origine passe donc par l'École, à travers les inégalités de réussite scolaire.",
                "Mais l'origine garde aussi un effet propre : à diplôme égal, les enfants de cadres accèdent plus souvent aux positions de cadre que les enfants d'ouvriers, grâce à leurs réseaux, à leur connaissance des codes et à leur meilleure information sur les filières et les métiers. De plus, la diffusion des diplômes réduit leur rendement (paradoxe d'Anderson). Raymond Boudon a montré dans L'Inégalité des chances (1973) qu'une réduction des inégalités scolaires n'entraîne pas automatiquement plus de mobilité, si la structure des positions sociales évolue peu.",
              ],
              box: { label: "Repère", text: "Triangle OED : Origine sociale → Éducation (diplôme) → Destinée sociale. L'origine agit sur la destinée à la fois indirectement, par le diplôme, et directement, à diplôme égal." },
            },
            {
              heading: "Ressources et configurations familiales",
              paragraphs: [
                "Les ressources familiales favorisent ou freinent la mobilité. Le capital économique permet de financer de longues études, d'aider à l'installation ou de transmettre une entreprise, ce qui explique le fort autorecrutement des agriculteurs, des artisans ou des professions libérales. Le capital culturel favorise la réussite scolaire. Le capital social, c'est-à-dire le réseau de relations, aide à trouver un stage ou un emploi : Mark Granovetter (1973) a montré la force des liens faibles, ces connaissances éloignées qui donnent accès à des informations nouvelles sur les emplois. La socialisation familiale façonne aussi les aspirations : ce qui paraît accessible ou non.",
                "Les configurations familiales jouent également. La taille de la fratrie compte, car les ressources de la famille se partagent entre plus d'enfants ; le rang dans la fratrie et la structure du ménage (famille monoparentale, recomposée) aussi. La position et le diplôme de la mère ont un rôle important, longtemps ignoré par les tables qui ne retenaient que le père. Enfin, la trajectoire des parents eux-mêmes, et parfois celle des grands-parents, influence les ambitions et les ressources transmises.",
                "Le genre structure la mobilité. Comparées à leur mère, les femmes connaissent plus souvent une mobilité ascendante, du fait de la tertiarisation et de l'élévation de leur niveau de diplôme. Comparées à leur père, elles connaissent plus souvent une mobilité descendante, car elles sont concentrées dans les emplois d'employées.",
              ],
              box: { label: "À retenir", text: "Trois grands facteurs de mobilité : la structure des emplois (places disponibles), la formation (le diplôme, avec un effet propre de l'origine à diplôme égal), les ressources (capitaux économique, culturel, social) et les configurations familiales (fratrie, rôle de la mère)." },
            },
          ],
          keyPoints: [
            "L'évolution de la structure des emplois crée des places et explique la mobilité structurelle ascendante des Trente Glorieuses.",
            "Son ralentissement explique en partie la hausse du déclassement des générations nées à partir des années 1960.",
            "Triangle OED : l'origine influence le diplôme, qui influence la destinée ; l'origine garde un effet propre à diplôme égal.",
            "Ressources familiales : capitaux économique, culturel et social (force des liens faibles, Granovetter).",
            "Configurations familiales : taille de la fratrie, structure du ménage, position de la mère, trajectoire des parents.",
          ],
          example: {
            statement: "À l'aide de la notion de mobilité structurelle, expliquez pourquoi de nombreux fils d'agriculteurs nés dans les années 1930-1940 ont connu une mobilité sociale.",
            solution: [
              "Définir : la mobilité structurelle est la part de la mobilité imposée par la transformation de la structure des emplois entre la génération des pères et celle des fils.",
              "Constat : au milieu des années 1950, environ un actif sur cinq était agriculteur exploitant ; les gains de productivité agricoles et la concentration des exploitations ont ensuite fait chuter ce nombre.",
              "Conséquence : il n'y avait plus assez d'exploitations pour que tous les fils d'agriculteurs reprennent celle de leur père ; beaucoup ont dû changer de groupe.",
              "Destination : la croissance des Trente Glorieuses créait au même moment de nombreux emplois d'ouvriers, d'employés et de professions intermédiaires, qui les ont accueillis.",
              "Conclusion : leur mobilité s'explique d'abord par la transformation de la structure des emplois (exode agricole et industrialisation), et non par une égalisation des chances.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque élément parmi les facteurs de mobilité (structure des emplois, formation, ressources familiales, configurations familiales) : (a) la création massive d'emplois de cadres dans les services ; (b) l'obtention d'un diplôme d'ingénieur ; (c) un oncle qui recommande son neveu pour un stage ; (d) le fait d'être enfant unique ; (e) la reprise de l'entreprise familiale ; (f) une mère diplômée du supérieur qui suit de près la scolarité de ses enfants.",
              hint: "Distinguez ce qui dépend de l'économie (les places), de l'École (le diplôme) et de la famille (ce qu'elle possède, et comment elle est composée).",
              solution: [
                "(a) Structure des emplois : de nouvelles places qualifiées s'ouvrent.",
                "(b) Formation : le diplôme donne accès aux positions de cadre.",
                "(c) Ressources familiales : capital social.",
                "(d) Configurations familiales : taille de la fratrie.",
                "(e) Ressources familiales : capital économique transmis.",
                "(f) Ressources familiales : capital culturel de la mère, transmis par son suivi scolaire.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'entraînement. Part des personnes devenues cadres selon l'origine et le diplôme. Diplômés du supérieur long : origine cadre 75 %, origine ouvrière 55 %. Non diplômés du supérieur : origine cadre 20 %, origine ouvrière 5 %. (1) Mesurez l'effet du diplôme à origine donnée. (2) Mesurez l'effet propre de l'origine à diplôme donné. (3) Concluez à l'aide du triangle OED.",
              hint: "Comparez deux cases où un seul critère change : même origine et diplômes différents, puis même diplôme et origines différentes.",
              solution: [
                "(1) Origine cadre : 75 - 20 = 55 points. Origine ouvrière : 55 - 5 = 50 points. Le diplôme augmente fortement les chances de devenir cadre, quelle que soit l'origine.",
                "(2) Diplômés du supérieur : 75 - 55 = 20 points. Non diplômés : 20 - 5 = 15 points. À diplôme égal, l'origine cadre reste un avantage.",
                "(3) Le diplôme est le facteur le plus puissant (50 à 55 points d'écart), mais l'origine conserve un effet propre (15 à 20 points), qui passe par les réseaux, l'information et les codes.",
                "Résultat : la relation origine → destinée passe en grande partie par l'éducation, sans s'y réduire.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac, plan détaillé) : Dans quelle mesure le diplôme est-il le principal facteur de la mobilité sociale ?",
              hint: "Montrez d'abord le rôle majeur du diplôme, puis ses limites et les autres facteurs (structure des emplois, ressources et configurations familiales).",
              solution: [
                "Introduction : la mobilité sociale est le changement de position sociale d'un individu par rapport à ses parents ; le diplôme certifie un niveau de formation. Problématique : la réussite scolaire suffit-elle à expliquer les trajectoires de mobilité ?",
                "I. Le diplôme est un facteur essentiel de mobilité. A. À origine donnée, les plus diplômés connaissent beaucoup plus souvent une mobilité ascendante ; le diplôme est la voie d'accès aux emplois de cadres et de professions intermédiaires. B. La massification scolaire a permis à des enfants de milieux populaires d'accéder à ces diplômes et à ces positions (triangle OED).",
                "II. Mais le diplôme n'est ni le seul facteur ni un facteur suffisant. A. La structure des emplois fixe le nombre de places : la mobilité des Trente Glorieuses était largement structurelle, et son ralentissement explique le déclassement (Peugny) ; la diffusion des diplômes réduit leur valeur (paradoxe d'Anderson, Boudon). B. Les ressources et configurations familiales gardent un effet propre : capital économique, capital social (liens faibles), taille de la fratrie, rôle de la mère ; à diplôme égal, les enfants de cadres restent avantagés.",
                "Conclusion : le diplôme est le principal canal de la mobilité, mais il agit dans un cadre fixé par la structure des emplois et il est lui-même en partie déterminé par l'origine sociale.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Mobilité structurelle", right: "Mobilité imposée par la transformation des emplois entre deux générations" },
              { left: "Triangle OED", right: "Liens entre origine sociale, éducation et destinée sociale" },
              { left: "Capital social", right: "Réseau de relations mobilisable pour trouver un emploi ou un stage" },
              { left: "Fécondité différentielle", right: "Écarts de nombre d'enfants selon les groupes sociaux" },
              { left: "Paradoxe d'Anderson", right: "Diplôme plus élevé que le père sans position sociale plus élevée" },
              { left: "Configuration familiale", right: "Taille de la fratrie, rang de naissance, structure du ménage" },
            ],
          },
          quiz: [
            {
              q: "Pendant les Trente Glorieuses, la forte mobilité ascendante s'explique surtout par :",
              options: ["la transformation de la structure des emplois", "la disparition complète des inégalités scolaires", "la baisse du nombre de cadres et de techniciens", "la hausse du nombre d'agriculteurs exploitants"],
              answer: 0,
              why: "L'exode agricole et l'essor des emplois qualifiés ont créé des places nouvelles en haut de la hiérarchie : c'est une mobilité largement structurelle.",
            },
            {
              q: "Dans le triangle OED, la lettre E désigne :",
              options: ["l'emploi", "l'État", "l'entreprise", "l'éducation"],
              answer: 3,
              why: "Origine sociale, Éducation, Destinée sociale : le diplôme fait le lien entre l'origine et la position atteinte.",
            },
            {
              q: "À diplôme égal, les enfants de cadres accèdent plus souvent aux positions de cadre. Cela montre :",
              options: ["que le diplôme n'a plus aucun effet sur la position", "un effet propre de l'origine sociale", "l'existence d'une mobilité structurelle forte", "une parfaite fluidité de la société"],
              answer: 1,
              why: "L'origine agit aussi directement, par les réseaux, l'information et les codes, et pas seulement par le diplôme.",
            },
            {
              q: "Le recours à un réseau de relations pour obtenir un emploi mobilise :",
              options: ["le capital culturel", "le capital économique", "le capital social", "le capital symbolique"],
              answer: 2,
              why: "Le capital social est l'ensemble des relations qu'un individu peut mobiliser ; Granovetter souligne la force des liens faibles.",
            },
            {
              q: "Quel élément relève des configurations familiales ?",
              options: ["La création d'emplois de cadres", "Le diplôme obtenu par l'enquêté", "La hausse du chômage des jeunes", "La taille de la fratrie"],
              answer: 3,
              why: "La taille de la fratrie détermine le partage des ressources familiales entre les enfants.",
            },
          ],
          trap: "Réduire la mobilité sociale au seul mérite scolaire : le diplôme est un facteur majeur, mais la structure des emplois fixe le nombre de places disponibles, et l'origine sociale garde un effet propre à diplôme égal.",
          method: "Pour isoler l'effet d'un facteur dans un tableau à double entrée, comparez des cases où un seul critère change : même origine et diplômes différents (effet du diplôme), puis même diplôme et origines différentes (effet propre de l'origine).",
        },
      ],
    },
  ],
}
