import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-2nde',
  chapters: [
    /* ==================================================================== */
    /* COMMENT TRAVAILLENT LES SCIENCES ÉCONOMIQUES ET SOCIALES               */
    /* ==================================================================== */
    {
      id: 'raisonner-ses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'demarche-sciences-sociales',
          title: 'La démarche des sciences sociales : questions, hypothèses, modèles',
          minutes: 25,
          objectives: [
            "Identifier les questions de base que se posent les économistes, les sociologues et les politistes.",
            "Comprendre que les sciences sociales ont une démarche scientifique qui articule questions, hypothèses et confrontation aux données.",
            "Définir un modèle comme une représentation simplifiée de la réalité et expliquer le raisonnement « toutes choses égales par ailleurs ».",
            "Distinguer un jugement de fait d'un jugement de valeur.",
          ],
          course: [
            {
              heading: "Trois disciplines, trois grandes questions",
              paragraphs: [
                "Les sciences économiques et sociales (SES) réunissent trois disciplines qui étudient la vie en société sous des angles différents. L'économie s'intéresse à la manière dont les individus et les sociétés produisent, échangent et répartissent des biens et des services alors que les ressources (temps, travail, matières premières, argent) sont rares. Sa question de base peut se formuler ainsi : comment utiliser au mieux des ressources rares pour satisfaire des besoins, c'est-à-dire comment réaliser une allocation efficace des ressources ?",
                "La sociologie étudie les relations entre les individus et les groupes, et les règles qui les organisent. Sa question de base est : comment fait-on société, c'est-à-dire comment des individus différents parviennent-ils à vivre ensemble, à partager des normes et à former des groupes durables ? La science politique, enfin, étudie le pouvoir politique : comment se conquiert-il (élections, partis, mobilisations) et comment s'exerce-t-il (institutions, décisions publiques) ?",
                "Un même objet peut être étudié par les trois disciplines. Prenons le téléphone portable : l'économiste s'intéresse à son prix, à sa production et à la concurrence entre fabricants ; le sociologue à la façon dont il transforme les relations entre amis ou dans la famille ; le politiste à son rôle dans les campagnes électorales ou dans les mobilisations.",
              ],
              box: { label: "Repère", text: "Économie : comment allouer efficacement des ressources rares ? Sociologie : comment fait-on société ? Science politique : comment se conquiert et s'exerce le pouvoir politique ?" },
            },
            {
              heading: "Une démarche scientifique : de la question à la preuve",
              paragraphs: [
                "Les sciences sociales ne se contentent pas d'opinions : elles suivent une démarche scientifique. Le chercheur part d'une question de départ précise (par exemple : pourquoi les enfants de cadres obtiennent-ils plus souvent le baccalauréat que les enfants d'ouvriers ?). Il formule ensuite une ou plusieurs hypothèses, c'est-à-dire des réponses provisoires qui peuvent être vérifiées ou réfutées (par exemple : les familles de cadres disposent de ressources culturelles proches de celles attendues par l'école).",
                "Pour tester ses hypothèses, il construit des concepts (des notions définies avec précision, comme « catégorie socioprofessionnelle ») et recueille des données par des enquêtes. Il confronte alors ses hypothèses aux faits observés : si les données les contredisent, il les abandonne ou les reformule. Ce va-et-vient entre réflexion théorique et observation empirique est au cœur de la démarche scientifique.",
                "Un exemple classique est l'étude du suicide par Émile Durkheim (Le Suicide, 1897). Alors que le suicide semble être l'acte le plus individuel qui soit, Durkheim montre à l'aide de statistiques que ses taux varient de façon régulière selon des facteurs sociaux, comme la religion ou la situation familiale : les célibataires se suicident par exemple plus que les personnes mariées. Il en conclut que l'intégration des individus dans des groupes sociaux protège du suicide.",
              ],
              box: { label: "À retenir", text: "La démarche scientifique : question de départ, hypothèses, concepts, recueil de données, confrontation des hypothèses aux données, conclusion (hypothèse validée ou réfutée)." },
            },
            {
              heading: "Les modèles et le raisonnement toutes choses égales par ailleurs",
              paragraphs: [
                "Un modèle est une représentation simplifiée de la réalité, construite pour comprendre un phénomène. Comme une carte routière qui ne montre ni les arbres ni les maisons mais seulement les routes utiles pour se déplacer, un modèle ne retient que quelques éléments jugés essentiels. Le modèle du marché, que vous étudierez cette année, ne retient par exemple que le prix et les quantités offertes et demandées.",
                "Pour isoler l'effet d'une variable, les chercheurs raisonnent « toutes choses égales par ailleurs » (en latin ceteris paribus) : ils supposent que tous les autres facteurs restent constants. Par exemple, pour étudier l'effet du prix sur la quantité de glaces achetées, on suppose que la température, le revenu des consommateurs et les goûts ne changent pas. Ce raisonnement est indispensable, mais il ne faut pas oublier que dans la réalité plusieurs facteurs varient en même temps.",
              ],
              box: { label: "Définition", text: "Modèle : représentation simplifiée de la réalité, qui ne retient que certaines variables pour expliquer un phénomène. Toutes choses égales par ailleurs : raisonnement qui étudie l'effet d'une variable en supposant que les autres restent constantes." },
            },
            {
              heading: "Jugement de fait et jugement de valeur",
              paragraphs: [
                "Les sciences sociales cherchent à décrire et à expliquer le monde social de façon objective. Elles produisent des jugements de fait, c'est-à-dire des affirmations qui peuvent être vérifiées par l'observation : « en France, les femmes sont plus souvent diplômées du supérieur que les hommes parmi les jeunes générations » est un jugement de fait, vrai ou faux selon les données.",
                "Un jugement de valeur, au contraire, exprime une appréciation personnelle ou morale : « les inégalités sont injustes » ou « ce film est le meilleur de l'année ». Il ne peut pas être prouvé par des données. Le chercheur doit donc tenir à distance ses préjugés et ses prénotions (les idées toutes faites que l'on a avant d'étudier un sujet), ce que Durkheim formulait en demandant de considérer les faits sociaux comme des choses (Les Règles de la méthode sociologique, 1895).",
              ],
            },
          ],
          keyPoints: [
            "Économie : allocation des ressources rares. Sociologie : comment fait-on société. Science politique : conquête et exercice du pouvoir.",
            "La démarche scientifique va d'une question de départ à des hypothèses, puis à leur confrontation avec des données.",
            "Une hypothèse est une réponse provisoire, qui doit pouvoir être vérifiée ou réfutée par les faits.",
            "Un modèle est une représentation simplifiée de la réalité.",
            "Raisonner toutes choses égales par ailleurs, c'est isoler l'effet d'une variable en supposant les autres constantes.",
            "Un jugement de fait se vérifie par l'observation ; un jugement de valeur exprime une appréciation et ne se prouve pas.",
          ],
          example: {
            statement: "Un chercheur se demande pourquoi les jeunes de 18 à 24 ans votent moins souvent que leurs aînés. Indiquez à quelle discipline appartient cette question, formulez une hypothèse et proposez une façon de la tester.",
            solution: [
              "La question porte sur la participation électorale, c'est-à-dire sur la façon dont le pouvoir politique se conquiert : elle relève de la science politique (elle intéresse aussi la sociologie).",
              "Hypothèse possible : les jeunes votent moins parce qu'ils sont moins intégrés à la vie locale (ils déménagent souvent pour leurs études ou leur premier emploi et ne sont pas toujours inscrits sur les listes électorales de leur lieu de vie).",
              "Pour la tester, on peut comparer, à l'aide de données sur la participation, le vote des jeunes qui ont déménagé récemment et celui des jeunes qui vivent depuis longtemps dans la même commune, au même âge et au même niveau de diplôme (toutes choses égales par ailleurs).",
              "Si les jeunes installés depuis longtemps votent nettement plus, l'hypothèse est confortée ; sinon, elle doit être abandonnée ou reformulée.",
              "Réponse : question de science politique ; hypothèse de la mobilité résidentielle ; test par comparaison de groupes à âge et diplôme égaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacune des questions suivantes dans la discipline qu'elle concerne principalement (économie, sociologie ou science politique) : (a) Pourquoi le prix du pétrole a-t-il augmenté ? (b) Comment les adolescents choisissent-ils leurs amis ? (c) Pourquoi certains partis gagnent-ils des élections ? (d) Comment une entreprise décide-t-elle de la quantité à produire ? (e) Comment les règles de politesse se transmettent-elles ?",
              hint: "Demandez-vous si la question porte sur l'usage de ressources rares, sur le lien social ou sur le pouvoir politique.",
              solution: [
                "(a) Le prix d'un bien et ses variations relèvent de l'économie.",
                "(b) Les relations entre individus et la formation des groupes relèvent de la sociologie.",
                "(c) La conquête du pouvoir par les élections relève de la science politique.",
                "(d) La décision de production, qui suppose d'utiliser au mieux des ressources rares, relève de l'économie.",
                "(e) La transmission des normes de comportement relève de la sociologie.",
                "Résultat : économie (a, d), sociologie (b, e), science politique (c).",
              ],
            },
            {
              level: 2,
              statement: "Dites si chaque phrase est un jugement de fait ou un jugement de valeur, et justifiez : (a) « Le chômage touche davantage les personnes peu diplômées. » (b) « Il est scandaleux que les footballeurs gagnent autant. » (c) « Le prix moyen d'un logement a augmenté dans cette ville depuis dix ans. » (d) « Les réseaux sociaux sont une mauvaise chose pour les jeunes. »",
              hint: "Un jugement de fait peut être vérifié par des données ; un jugement de valeur exprime une opinion (mots comme « scandaleux », « mauvais », « meilleur »).",
              solution: [
                "(a) Jugement de fait : on peut le vérifier en comparant les taux de chômage selon le diplôme.",
                "(b) Jugement de valeur : « scandaleux » exprime une appréciation morale, qu'aucune donnée ne peut prouver.",
                "(c) Jugement de fait : on peut le vérifier avec des statistiques de prix immobiliers.",
                "(d) Jugement de valeur : « une mauvaise chose » est une appréciation. Le chercheur pourrait en revanche étudier des faits précis, comme le lien entre temps d'écran et temps de sommeil.",
                "Résultat : (a) et (c) sont des jugements de fait, (b) et (d) des jugements de valeur.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : dans un lycée, 80 % des élèves qui prennent un petit-déjeuner chaque matin ont plus de 12 de moyenne, contre 55 % des élèves qui n'en prennent pas. Un journaliste conclut : « Le petit-déjeuner rend meilleur à l'école. » (1) Formulez la question de départ et l'hypothèse du journaliste. (2) Proposez une autre hypothèse qui expliquerait aussi ces données. (3) Expliquez comment le raisonnement toutes choses égales par ailleurs permettrait de départager les deux hypothèses.",
              hint: "Cherchez un troisième facteur qui pourrait influencer à la fois le petit-déjeuner et les résultats scolaires, par exemple le milieu familial.",
              solution: [
                "(1) Question de départ : pourquoi certains élèves réussissent-ils mieux que d'autres ? Hypothèse du journaliste : prendre un petit-déjeuner améliore la concentration et donc les résultats.",
                "(2) Autre hypothèse : les élèves dont les familles ont des horaires réguliers et un fort suivi de la scolarité prennent plus souvent un petit-déjeuner et sont aussi mieux accompagnés dans leur travail. Le petit-déjeuner et la réussite auraient alors une cause commune, l'encadrement familial, sans que l'un cause l'autre.",
                "(3) Il faudrait comparer des élèves qui ne diffèrent que par la prise du petit-déjeuner : même milieu social, même suivi familial, même temps de sommeil. Si l'écart de résultats persiste à caractéristiques égales, l'hypothèse du journaliste est confortée ; s'il disparaît, c'est la seconde hypothèse qui l'emporte.",
                "Conclusion : les données décrivent un lien statistique, mais elles ne suffisent pas à prouver une relation de cause à effet ; seul un raisonnement à autres facteurs constants permet de conclure.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Hypothèse", right: "Réponse provisoire à une question, qui doit être confrontée aux faits" },
              { left: "Modèle", right: "Représentation simplifiée de la réalité" },
              { left: "Toutes choses égales par ailleurs", right: "Étudier l'effet d'une variable en supposant les autres constantes" },
              { left: "Jugement de valeur", right: "Appréciation personnelle ou morale, qui ne se prouve pas par des données" },
              { left: "Prénotion", right: "Idée toute faite que l'on a avant d'étudier un sujet" },
              { left: "Science politique", right: "Discipline qui étudie la conquête et l'exercice du pouvoir politique" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la question de base de la sociologie ?",
              options: [
                "Comment utiliser au mieux des ressources rares ?",
                "Comment fait-on société ?",
                "Comment se conquiert le pouvoir politique ?",
                "Comment fixer le prix d'un bien sur un marché ?",
              ],
              answer: 1,
              why: "La sociologie étudie les relations sociales et cherche à comprendre comment des individus différents vivent ensemble et forment des groupes.",
            },
            {
              q: "Qu'est-ce qu'une hypothèse dans une démarche scientifique ?",
              options: [
                "Une opinion personnelle que le chercheur défend",
                "Une loi définitivement démontrée",
                "Une donnée statistique tirée d'une enquête",
                "Une réponse provisoire à tester",
              ],
              answer: 3,
              why: "L'hypothèse est une réponse provisoire à la question de départ : elle doit être confrontée aux données, qui peuvent la conforter ou la réfuter.",
            },
            {
              q: "Pourquoi dit-on qu'un modèle est une représentation simplifiée ?",
              options: [
                "Il ne retient que les éléments jugés essentiels",
                "Il est réservé aux élèves débutants",
                "Il décrit la réalité dans tous ses détails, mais de façon plus courte",
                "Il ne repose sur aucune observation de la réalité",
              ],
              answer: 0,
              why: "Comme une carte, un modèle laisse volontairement de côté de nombreux éléments pour mettre en évidence les mécanismes principaux.",
            },
            {
              q: "Quelle phrase est un jugement de fait ?",
              options: [
                "Les impôts sont trop élevés dans notre pays",
                "Il faudrait interdire les téléphones au lycée",
                "Les cadres votent plus souvent que les ouvriers",
                "La musique d'aujourd'hui est moins belle qu'avant",
              ],
              answer: 2,
              why: "Cette affirmation peut être vérifiée à l'aide de données sur la participation électorale ; les autres expriment des appréciations.",
            },
            {
              q: "Que signifie raisonner « toutes choses égales par ailleurs » ?",
              options: [
                "Considérer que tous les individus sont égaux",
                "Isoler l'effet d'une variable en gardant les autres constantes",
                "Étudier tous les facteurs d'un phénomène en même temps sans les distinguer",
                "Calculer une moyenne entre plusieurs groupes",
              ],
              answer: 1,
              why: "Ce raisonnement (ceteris paribus) permet de mesurer l'effet propre d'un facteur, par exemple le prix, en supposant que les autres ne changent pas.",
            },
          ],
          trap: "Croire qu'une hypothèse est une certitude ou une opinion : une hypothèse est une réponse provisoire, formulée pour être confrontée aux données, et elle peut être réfutée.",
          method: "Face à une affirmation, posez-vous systématiquement deux questions : peut-on la vérifier avec des données (jugement de fait) ou exprime-t-elle une appréciation (jugement de valeur) ? Si c'est un fait, quelle enquête permettrait de le vérifier ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'enquetes-donnees',
          title: 'Enquêtes et données : produire des connaissances',
          minutes: 30,
          objectives: [
            "Distinguer les méthodes quantitatives (questionnaire, statistiques) et les méthodes qualitatives (entretien, observation).",
            "Expliquer ce qu'est un échantillon représentatif et pourquoi il est nécessaire.",
            "Distinguer corrélation et causalité.",
            "Comprendre que les données sont construites et qu'il faut connaître leurs conditions de production.",
          ],
          course: [
            {
              heading: "Les méthodes quantitatives : compter et mesurer",
              paragraphs: [
                "Les méthodes quantitatives produisent des données chiffrées sur un grand nombre de personnes. L'outil le plus courant est le questionnaire, composé de questions le plus souvent fermées (avec des réponses proposées), ce qui permet de compter les réponses et de calculer des proportions. Les chercheurs utilisent aussi les statistiques publiques, produites notamment par l'Insee (Institut national de la statistique et des études économiques, créé en 1946) : recensement de la population, enquête emploi, comptabilité nationale.",
                "Interroger toute une population est le plus souvent impossible. On interroge donc un échantillon, c'est-à-dire une partie de la population. Pour que les résultats puissent être généralisés, l'échantillon doit être représentatif : il doit avoir la même structure que la population étudiée. Deux méthodes existent : le tirage aléatoire (chaque individu a la même chance d'être interrogé) et la méthode des quotas (on reproduit dans l'échantillon les proportions de la population selon le sexe, l'âge, la profession, la région).",
                "Les méthodes quantitatives permettent de mesurer l'ampleur d'un phénomène et de repérer des régularités : par exemple, la part des 15-24 ans qui pratiquent un sport chaque semaine, ou l'écart de salaire moyen entre deux catégories de salariés.",
              ],
              box: { label: "Définition", text: "Échantillon représentatif : partie d'une population qui en reproduit la structure (sexe, âge, profession...), de sorte que les résultats obtenus sur l'échantillon peuvent être étendus à l'ensemble de la population." },
            },
            {
              heading: "Les méthodes qualitatives : comprendre le sens des pratiques",
              paragraphs: [
                "Les méthodes qualitatives étudient en profondeur un petit nombre de personnes ou de situations. L'entretien, souvent semi-directif, laisse la personne interrogée s'exprimer longuement à partir de quelques thèmes préparés par l'enquêteur : il permet de comprendre ses motivations, son histoire, la façon dont elle donne sens à ce qu'elle fait.",
                "L'observation consiste à se rendre sur le terrain pour regarder les pratiques telles qu'elles se déroulent : dans une classe, un atelier, un club sportif. Dans l'observation participante, le chercheur partage la vie du groupe qu'il étudie, par exemple en travaillant lui-même quelques mois dans une usine.",
                "Méthodes quantitatives et qualitatives sont complémentaires. Un questionnaire peut montrer que les filles choisissent moins souvent les filières scientifiques que les garçons ; des entretiens permettront de comprendre comment ces choix se construisent, par exemple à travers les encouragements de l'entourage.",
              ],
              box: { label: "Repère", text: "Quantitatif : questionnaire, statistiques, grand nombre de personnes, mesurer. Qualitatif : entretien, observation, petit nombre de personnes, comprendre." },
            },
            {
              heading: "Corrélation et causalité",
              paragraphs: [
                "Une corrélation est une relation statistique entre deux variables : elles varient ensemble, dans le même sens ou en sens contraire. Par exemple, dans un pays, les ventes de glaces et le nombre de coups de soleil augmentent en même temps. Une causalité signifie qu'une variable est la cause de l'autre : la variation de l'une provoque la variation de l'autre.",
                "Une corrélation ne prouve pas une causalité. Les glaces ne provoquent pas les coups de soleil : les deux phénomènes ont une cause commune, l'ensoleillement estival. On parle alors de variable cachée (ou facteur de confusion). La causalité peut aussi être inversée : si les personnes en bonne santé font plus de sport, est-ce le sport qui rend en bonne santé, ou la bonne santé qui permet de faire du sport ?",
                "Pour établir une causalité, le chercheur doit donc raisonner toutes choses égales par ailleurs : il compare des groupes qui ne diffèrent que par la variable étudiée, et il propose un mécanisme qui explique comment la cause produit l'effet.",
              ],
              box: { label: "Règle", text: "Corrélation n'est pas causalité. Avant de conclure qu'une variable en cause une autre, vérifiez qu'il n'existe pas de cause commune (variable cachée) et que le sens de la relation n'est pas inversé." },
            },
            {
              heading: "Des données construites : le regard critique",
              paragraphs: [
                "Les données ne sont pas des reflets parfaits de la réalité : elles sont construites. Pour compter les chômeurs ou classer les professions, il faut d'abord adopter des définitions et des conventions (par exemple la nomenclature des professions et catégories socioprofessionnelles de l'Insee). Changer la définition change le chiffre obtenu.",
                "Une enquête peut aussi être biaisée : échantillon non représentatif (un sondage réalisé uniquement sur un réseau social ne représente pas toute la population), questions orientées (« Ne pensez-vous pas que... ? »), ou réponses influencées par la désirabilité sociale (les personnes interrogées ont tendance à donner la réponse jugée la plus acceptable, par exemple en déclarant lire plus qu'elles ne le font). Avant d'utiliser une donnée, il faut donc toujours se demander qui l'a produite, comment et sur quel échantillon.",
              ],
            },
          ],
          keyPoints: [
            "Méthodes quantitatives : questionnaires et statistiques sur un grand nombre de personnes, pour mesurer.",
            "Méthodes qualitatives : entretiens et observations sur un petit nombre de cas, pour comprendre le sens des pratiques.",
            "Un échantillon représentatif reproduit la structure de la population (tirage aléatoire ou méthode des quotas).",
            "Une corrélation est une relation statistique ; elle ne prouve pas une causalité (cause commune, causalité inversée).",
            "Les données sont construites à partir de définitions et de conventions : il faut connaître leur source et leur méthode.",
          ],
          example: {
            statement: "Un site internet de jeux vidéo publie un sondage réalisé auprès de 10 000 de ses visiteurs : 90 % d'entre eux déclarent jouer plus de dix heures par semaine. Le site en conclut que « 90 % des Français jouent plus de dix heures par semaine aux jeux vidéo ». Cette conclusion est-elle valable ?",
            solution: [
              "Pour généraliser un résultat à toute une population, il faut que l'échantillon soit représentatif de cette population.",
              "Ici, l'échantillon est composé uniquement de visiteurs d'un site de jeux vidéo : ce sont des personnes déjà intéressées par les jeux, bien plus joueuses en moyenne que l'ensemble des Français.",
              "La taille de l'échantillon (10 000 personnes) ne corrige pas ce défaut : un grand échantillon mal construit reste biaisé.",
              "Il aurait fallu interroger un échantillon tiré au hasard dans la population, ou construit par quotas (sexe, âge, profession, région).",
              "Réponse : la conclusion n'est pas valable ; le résultat ne vaut que pour les visiteurs du site, car l'échantillon n'est pas représentatif des Français.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des enquêtes suivantes, dites si elle relève d'une méthode quantitative ou qualitative : (a) un questionnaire à choix multiples envoyé à 2 000 lycéens ; (b) des entretiens de deux heures avec 15 agriculteurs sur leur métier ; (c) l'exploitation des données du recensement ; (d) un chercheur qui passe six mois dans un club de boxe en s'entraînant avec ses membres.",
              hint: "Demandez-vous si l'enquête porte sur beaucoup de personnes avec des réponses chiffrables, ou sur peu de personnes étudiées en profondeur.",
              solution: [
                "(a) Méthode quantitative : beaucoup de personnes et des réponses fermées que l'on peut compter.",
                "(b) Méthode qualitative : peu de personnes et des entretiens longs pour comprendre leur expérience.",
                "(c) Méthode quantitative : le recensement produit des statistiques sur l'ensemble de la population.",
                "(d) Méthode qualitative : c'est une observation participante.",
                "Résultat : (a) et (c) quantitatives, (b) et (d) qualitatives.",
              ],
            },
            {
              level: 2,
              statement: "Une population de 1 000 salariés compte 600 femmes et 400 hommes, dont 300 cadres et 700 non-cadres. On veut interroger un échantillon de 50 personnes par la méthode des quotas. (1) Combien de femmes et d'hommes faut-il interroger ? (2) Combien de cadres ? (3) Pourquoi la méthode des quotas rend-elle l'échantillon représentatif selon ces critères ?",
              hint: "Calculez d'abord la part de chaque groupe dans la population, puis appliquez cette part à l'effectif de l'échantillon.",
              solution: [
                "(1) Part des femmes : 600 ÷ 1 000 = 60 %. Dans l'échantillon : 50 × 0,60 = 30 femmes, et donc 50 - 30 = 20 hommes (vérification : 400 ÷ 1 000 = 40 % et 50 × 0,40 = 20).",
                "(2) Part des cadres : 300 ÷ 1 000 = 30 %. Dans l'échantillon : 50 × 0,30 = 15 cadres (et 35 non-cadres).",
                "(3) L'échantillon reproduit exactement les proportions de la population pour le sexe et la catégorie de salariés : il en a la même structure selon ces critères, ce qui permet de généraliser les résultats.",
                "Résultat : 30 femmes et 20 hommes, 15 cadres et 35 non-cadres.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : dans un ensemble de communes, on observe que plus une commune compte de pompiers par habitant, plus le montant des dégâts causés par les incendies y est élevé. Un élu propose de réduire le nombre de pompiers pour limiter les dégâts. (1) Quelle relation le document met-il en évidence ? (2) Montrez que la conclusion de l'élu confond corrélation et causalité. (3) Proposez une explication plus convaincante.",
              hint: "Demandez-vous dans quel sens la relation fonctionne : les pompiers sont-ils la cause des incendies, ou l'importance des risques d'incendie la cause du nombre de pompiers ?",
              solution: [
                "(1) Le document montre une corrélation positive : le nombre de pompiers par habitant et le montant des dégâts varient dans le même sens.",
                "(2) L'élu suppose que les pompiers causent les dégâts. Or une corrélation indique seulement que deux variables évoluent ensemble ; elle ne dit pas laquelle est la cause de l'autre, ni s'il existe une cause commune.",
                "(3) Explication plus convaincante : la causalité est inversée ou liée à une cause commune. Les communes les plus exposées aux incendies (forêts, zones sèches, industries dangereuses) subissent davantage de dégâts et recrutent, pour cette raison, plus de pompiers. Le risque d'incendie explique à la fois les deux variables.",
                "Conclusion : réduire le nombre de pompiers n'aurait aucune raison de réduire les dégâts, et risquerait au contraire de les aggraver.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : enquêtes et données.",
            statements: [
              { text: "Un très grand échantillon est forcément représentatif.", true: false, why: "La représentativité dépend de la structure de l'échantillon, pas de sa taille : 10 000 personnes mal choisies restent un échantillon biaisé." },
              { text: "L'entretien semi-directif est une méthode qualitative.", true: true, why: "Il permet de comprendre en profondeur le point de vue d'un petit nombre de personnes." },
              { text: "Si deux variables évoluent ensemble, l'une est forcément la cause de l'autre.", true: false, why: "C'est une corrélation, qui peut s'expliquer par une cause commune ou par une causalité inversée." },
              { text: "La méthode des quotas reproduit dans l'échantillon les proportions de la population selon certains critères.", true: true, why: "On fixe par exemple la part de femmes, de jeunes ou de cadres pour qu'elle soit la même que dans la population." },
              { text: "Une statistique publique est un reflet parfait et neutre de la réalité.", true: false, why: "Toute donnée repose sur des définitions et des conventions : changer la définition change le chiffre." },
              { text: "Méthodes quantitatives et qualitatives peuvent être utilisées ensemble.", true: true, why: "Elles sont complémentaires : l'une mesure l'ampleur d'un phénomène, l'autre aide à comprendre ses raisons." },
            ],
          },
          quiz: [
            {
              q: "Quel outil relève d'une méthode quantitative ?",
              options: [
                "L'entretien semi-directif",
                "L'observation participante dans un groupe",
                "Le questionnaire à questions fermées",
                "Le récit de vie",
              ],
              answer: 2,
              why: "Le questionnaire à questions fermées permet de compter les réponses d'un grand nombre de personnes et de calculer des proportions.",
            },
            {
              q: "Qu'est-ce qu'un échantillon représentatif ?",
              options: [
                "Un échantillon qui a la même structure que la population",
                "Un échantillon de plus de 1 000 personnes",
                "Un échantillon composé uniquement de volontaires motivés",
                "Un échantillon choisi par le chercheur selon ses préférences",
              ],
              answer: 0,
              why: "Il reproduit la structure de la population (sexe, âge, profession...) : c'est ce qui permet de généraliser les résultats.",
            },
            {
              q: "Les ventes de parapluies et le nombre d'accidents de vélo augmentent les mêmes jours. Que peut-on en conclure ?",
              options: [
                "Les parapluies provoquent des accidents de vélo",
                "Les accidents de vélo font vendre des parapluies",
                "Les deux phénomènes ne sont pas corrélés",
                "Il existe sans doute une cause commune, la pluie",
              ],
              answer: 3,
              why: "Les deux variables sont corrélées, mais la pluie explique à la fois les achats de parapluies et les chaussées glissantes.",
            },
            {
              q: "Qu'appelle-t-on la désirabilité sociale dans une enquête ?",
              options: [
                "Le désir des chercheurs d'être reconnus",
                "La tendance à donner la réponse jugée la plus acceptable",
                "Le fait que les personnes refusent de répondre",
                "La popularité d'un sondage auprès du public qui en lit les résultats",
              ],
              answer: 1,
              why: "Les enquêtés peuvent embellir leurs réponses (déclarer lire davantage, par exemple), ce qui biaise les résultats.",
            },
            {
              q: "Quelle méthode permet le mieux de comprendre comment un jeune vit son entrée dans le monde du travail ?",
              options: [
                "L'exploitation des données du recensement de la population",
                "Un indice des prix",
                "Une série d'entretiens approfondis",
                "Le calcul d'un taux de variation",
              ],
              answer: 2,
              why: "L'entretien, méthode qualitative, donne accès au vécu, aux motivations et au sens que la personne donne à son parcours.",
            },
          ],
          trap: "Conclure à une relation de cause à effet à partir d'une simple corrélation, sans chercher de cause commune ni envisager que la causalité soit inversée.",
          method: "Devant un chiffre ou un sondage, posez trois questions avant de l'utiliser : qui l'a produit ? Sur quel échantillon (taille, représentativité) ? Avec quelles définitions ? Puis, devant un lien entre deux variables, cherchez systématiquement une cause commune possible.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'savoir-faire-quantitatifs',
          title: 'Lire des données : proportions, taux de variation et indices',
          minutes: 35,
          objectives: [
            "Calculer et interpréter une proportion (pourcentage de répartition).",
            "Calculer et interpréter un taux de variation et un coefficient multiplicateur.",
            "Calculer et interpréter un indice simple en base 100.",
            "Distinguer une variation en pourcentage et une variation en points de pourcentage.",
          ],
          course: [
            {
              heading: "La proportion : la part d'un élément dans un ensemble",
              paragraphs: [
                "Une proportion (ou pourcentage de répartition) mesure la part d'une sous-population dans une population totale. On la calcule en divisant l'effectif de la partie par l'effectif du tout, puis en multipliant par 100. Si une classe compte 35 élèves dont 21 filles, la part des filles est 21 ÷ 35 × 100 = 60 %. Elle se lit : « sur 100 élèves de la classe, 60 sont des filles ».",
                "La somme des parts de toutes les sous-populations est égale à 100 %, ce qui permet de vérifier un calcul. Attention à bien identifier le tout : la part des filles parmi les élèves de la classe (60 %) n'est pas la même chose que la part des élèves de la classe parmi toutes les filles du lycée.",
              ],
              box: { label: "Formule", text: "Proportion (en %) = effectif de la partie ÷ effectif du tout × 100. Lecture : « sur 100 [éléments du tout], [résultat] sont [la partie] »." },
            },
            {
              heading: "Le taux de variation et le coefficient multiplicateur",
              paragraphs: [
                "Le taux de variation mesure l'évolution relative d'une grandeur entre deux dates : de combien de pour cent elle a augmenté ou diminué. On le calcule ainsi : (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Si le prix d'un livre passe de 20 € à 23 €, le taux de variation est (23 - 20) ÷ 20 × 100 = 15 % : le prix a augmenté de 15 %. Un taux négatif indique une baisse.",
                "Le coefficient multiplicateur est le nombre par lequel on multiplie la valeur de départ pour obtenir la valeur d'arrivée : valeur d'arrivée ÷ valeur de départ. Ici, 23 ÷ 20 = 1,15. Il est lié au taux de variation : coefficient = 1 + taux ÷ 100. Une hausse de 15 % correspond à un coefficient de 1,15, une baisse de 20 % à un coefficient de 0,8. Un coefficient de 2 signifie que la grandeur a doublé (hausse de 100 %).",
                "Les taux de variation successifs ne s'additionnent pas : ils se multiplient par l'intermédiaire des coefficients. Une hausse de 10 % suivie d'une hausse de 10 % donne un coefficient de 1,1 × 1,1 = 1,21, soit une hausse de 21 % et non de 20 %. De même, une hausse de 50 % suivie d'une baisse de 50 % ne ramène pas au point de départ : 1,5 × 0,5 = 0,75, soit une baisse de 25 %.",
              ],
              box: { label: "Formule", text: "Taux de variation (en %) = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Coefficient multiplicateur = valeur d'arrivée ÷ valeur de départ = 1 + taux ÷ 100." },
            },
            {
              heading: "Les indices simples en base 100",
              paragraphs: [
                "Un indice simple permet de suivre l'évolution d'une grandeur à partir d'une date de référence, appelée année de base, à laquelle on attribue la valeur 100. On calcule : indice de l'année n = valeur de l'année n ÷ valeur de l'année de base × 100. Si une entreprise emploie 250 salariés en 2015 (base 100) et 300 en 2025, l'indice de 2025 est 300 ÷ 250 × 100 = 120.",
                "L'indice se lit directement comme une évolution par rapport à l'année de base : un indice de 120 signifie une hausse de 20 % depuis l'année de base ; un indice de 85, une baisse de 15 %. Les indices permettent de comparer facilement l'évolution de grandeurs exprimées dans des unités différentes (des euros, des tonnes, des personnes), car toutes partent de 100.",
                "Attention : la différence entre deux indices qui ne sont pas l'année de base n'est pas un pourcentage. Si l'indice passe de 120 à 150, la hausse est de 30 points d'indice, mais le taux de variation est (150 - 120) ÷ 120 × 100 = 25 %.",
              ],
              box: { label: "Formule", text: "Indice de l'année n (base 100 l'année de base) = valeur de l'année n ÷ valeur de l'année de base × 100. Taux de variation depuis l'année de base = indice - 100." },
            },
            {
              heading: "Pourcentages et points de pourcentage",
              paragraphs: [
                "Quand une grandeur est déjà exprimée en pourcentage (un taux de chômage, une part de marché, un taux de participation), l'écart entre deux valeurs se mesure en points de pourcentage. Si le taux de chômage passe de 8 % à 10 %, il augmente de 2 points de pourcentage.",
                "Ce n'est pas la même chose que le taux de variation de ce taux : (10 - 8) ÷ 8 × 100 = 25 %. Le taux de chômage a donc augmenté de 2 points, soit une hausse de 25 %. Confondre les deux peut conduire à des erreurs d'interprétation importantes, par exemple dans un article de presse.",
              ],
              box: { label: "À retenir", text: "Écart entre deux pourcentages : en points de pourcentage (soustraction). Évolution relative : en pourcentage (taux de variation)." },
            },
          ],
          keyPoints: [
            "Proportion = partie ÷ tout × 100 ; la somme des parts fait 100 %.",
            "Taux de variation = (arrivée - départ) ÷ départ × 100.",
            "Coefficient multiplicateur = arrivée ÷ départ = 1 + taux ÷ 100.",
            "Des taux successifs ne s'additionnent pas : on multiplie les coefficients.",
            "Indice = valeur ÷ valeur de l'année de base × 100 ; indice - 100 donne l'évolution depuis la base.",
            "L'écart entre deux pourcentages s'exprime en points de pourcentage.",
          ],
          example: {
            statement: "Données fictives. Le chiffre d'affaires d'une librairie était de 400 000 € en 2020 et de 460 000 € en 2025. (1) Calculez le taux de variation et le coefficient multiplicateur entre 2020 et 2025. (2) Calculez l'indice de 2025, base 100 en 2020. (3) Rédigez une phrase de lecture.",
            solution: [
              "(1) Taux de variation = (460 000 - 400 000) ÷ 400 000 × 100 = 60 000 ÷ 400 000 × 100 = 15 %.",
              "Coefficient multiplicateur = 460 000 ÷ 400 000 = 1,15. Vérification : 1 + 15 ÷ 100 = 1,15.",
              "(2) Indice de 2025 = 460 000 ÷ 400 000 × 100 = 115.",
              "(3) Phrase de lecture : entre 2020 et 2025, le chiffre d'affaires de la librairie a augmenté de 15 %, il a été multiplié par 1,15 ; en indice base 100 en 2020, il atteint 115 en 2025.",
              "Réponse : hausse de 15 %, coefficient 1,15, indice 115.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Un lycée compte 1 200 élèves, dont 480 en seconde, 384 en première et 336 en terminale. (1) Calculez la part de chaque niveau dans l'effectif total. (2) Vérifiez votre calcul. (3) Rédigez une phrase de lecture pour la seconde.",
              hint: "Divisez l'effectif de chaque niveau par l'effectif total (1 200), puis multipliez par 100.",
              solution: [
                "(1) Seconde : 480 ÷ 1 200 × 100 = 40 %. Première : 384 ÷ 1 200 × 100 = 32 %. Terminale : 336 ÷ 1 200 × 100 = 28 %.",
                "(2) Vérification : 40 + 32 + 28 = 100 %, et 480 + 384 + 336 = 1 200 élèves.",
                "(3) Lecture : sur 100 élèves de ce lycée, 40 sont en seconde.",
                "Résultat : 40 %, 32 % et 28 %.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le prix d'un abonnement de transport passe de 50 € à 60 € la première année, puis baisse de 10 % la deuxième année. (1) Calculez le taux de variation de la première année. (2) Calculez le prix à la fin de la deuxième année. (3) Calculez le taux de variation global sur les deux ans. Pourquoi n'est-il pas égal à 20 - 10 = 10 % ?",
              hint: "Calculez le coefficient multiplicateur de chaque année, puis multipliez-les pour obtenir le coefficient global.",
              solution: [
                "(1) (60 - 50) ÷ 50 × 100 = 20 %. Le coefficient multiplicateur est 1,2.",
                "(2) Une baisse de 10 % correspond à un coefficient de 0,9. Prix final = 60 × 0,9 = 54 €.",
                "(3) Coefficient global = 1,2 × 0,9 = 1,08, soit une hausse globale de 8 %. Vérification : (54 - 50) ÷ 50 × 100 = 8 %.",
                "Le taux global n'est pas 10 % car la baisse de 10 % s'applique à une base plus élevée (60 € et non 50 €) : les taux successifs ne s'additionnent pas, leurs coefficients se multiplient.",
                "Résultat : hausse de 20 %, prix final de 54 €, hausse globale de 8 %.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : taux de participation à une élection locale dans une commune : 60 % en 2014, 45 % en 2020. Nombre d'inscrits : 20 000 en 2014, 22 000 en 2020. (1) Calculez l'évolution du taux de participation en points de pourcentage, puis en pourcentage. (2) Calculez le nombre de votants à chaque élection et son taux de variation. (3) Un journaliste écrit que « la participation a baissé de 15 % ». Corrigez-le.",
              hint: "Nombre de votants = inscrits × taux de participation. Pour un écart entre deux pourcentages, pensez aux points.",
              solution: [
                "(1) Écart : 45 - 60 = -15 points de pourcentage. Taux de variation : (45 - 60) ÷ 60 × 100 = -25 %.",
                "(2) Votants en 2014 : 20 000 × 0,60 = 12 000. Votants en 2020 : 22 000 × 0,45 = 9 900. Taux de variation : (9 900 - 12 000) ÷ 12 000 × 100 = -17,5 %.",
                "(3) Le journaliste confond points et pourcentage : le taux de participation a baissé de 15 points de pourcentage, ce qui représente une baisse de 25 % de ce taux. Le nombre de votants, lui, a baissé de 17,5 %, moins fortement car le nombre d'inscrits a augmenté.",
                "Résultat : -15 points, soit -25 % pour le taux de participation ; -17,5 % pour le nombre de votants.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer et interpréter un taux de variation.",
            items: [
              "Repérer la valeur de départ et la valeur d'arrivée",
              "Calculer l'écart : valeur d'arrivée moins valeur de départ",
              "Diviser cet écart par la valeur de départ",
              "Multiplier le résultat par 100",
              "Vérifier le signe : positif pour une hausse, négatif pour une baisse",
              "Rédiger une phrase de lecture avec la date, l'unité et le sens de l'évolution",
            ],
          },
          quiz: [
            {
              q: "Une grandeur passe de 80 à 100. Quel est son taux de variation ?",
              options: ["25 %", "20 %", "125 %", "0,8 %"],
              answer: 0,
              why: "(100 - 80) ÷ 80 × 100 = 20 ÷ 80 × 100 = 25 %. On divise toujours par la valeur de départ.",
            },
            {
              q: "À quel coefficient multiplicateur correspond une baisse de 30 % ?",
              options: ["1,3", "0,3", "0,7", "-0,3"],
              answer: 2,
              why: "Coefficient = 1 + taux ÷ 100 = 1 - 0,30 = 0,7.",
            },
            {
              q: "Un indice base 100 en 2010 vaut 135 en 2024. Que signifie-t-il ?",
              options: [
                "La grandeur vaut 135 euros en 2024",
                "La grandeur a augmenté de 35 % depuis 2010",
                "La grandeur a été multipliée par 35",
                "La grandeur a augmenté de 135 % depuis 2010",
              ],
              answer: 1,
              why: "Un indice de 135 signifie une hausse de 135 - 100 = 35 % par rapport à l'année de base.",
            },
            {
              q: "Un prix augmente de 20 % puis de 20 %. Quelle est la hausse totale ?",
              options: ["40 %", "20 %", "42 %", "44 %"],
              answer: 3,
              why: "On multiplie les coefficients : 1,2 × 1,2 = 1,44, soit une hausse de 44 %.",
            },
            {
              q: "Le taux de chômage passe de 5 % à 6 %. Comment décrire correctement cette évolution ?",
              options: [
                "Une hausse de 1 point de pourcentage",
                "Une hausse de 1 %",
                "Une hausse de 6 points de pourcentage",
                "Une hausse de 10 %",
              ],
              answer: 0,
              why: "L'écart entre deux pourcentages se mesure en points : 6 - 5 = 1 point (ce qui correspond à une hausse de 20 % du taux).",
            },
          ],
          trap: "Additionner des taux de variation successifs ou confondre points de pourcentage et pourcentage : une hausse de 10 % puis de 10 % fait 21 %, et un taux qui passe de 8 % à 10 % augmente de 2 points, soit de 25 %.",
          method: "Après chaque calcul, rédigez une phrase de lecture complète (qui, quoi, quand, combien, dans quelle unité) et vérifiez l'ordre de grandeur : une grandeur qui augmente doit donner un taux positif et un coefficient supérieur à 1.",
        },
      ],
    },

    /* ==================================================================== */
    /* COMMENT CRÉE-T-ON DES RICHESSES ?                                     */
    /* ==================================================================== */
    {
      id: 'creer-richesses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'producteurs',
          title: 'Qui produit ? Entreprises, administrations, économie sociale et solidaire',
          minutes: 30,
          objectives: [
            "Définir la production et distinguer biens et services.",
            "Identifier la diversité des producteurs : entreprises, administrations publiques, économie sociale et solidaire.",
            "Distinguer production marchande et production non marchande.",
          ],
          course: [
            {
              heading: "Qu'est-ce que produire ?",
              paragraphs: [
                "En économie, la production est l'activité socialement organisée qui consiste à créer des biens et des services à partir de facteurs de production (travail, capital, ressources naturelles). Un bien est un produit matériel, que l'on peut stocker et transporter : un vélo, une baguette, un smartphone. Un service est une activité immatérielle, consommée au moment où elle est produite : une coupe de cheveux, un cours, un trajet en train, une consultation médicale.",
                "On dit que la production est « socialement organisée » parce qu'elle s'inscrit dans des règles et des organisations reconnues (contrats de travail, entreprises, administrations). Les activités que les ménages réalisent pour eux-mêmes (faire la cuisine, le ménage, garder ses enfants) produisent aussi des services, mais elles sont en grande partie exclues de la mesure officielle de la production, comme vous le verrez avec le PIB.",
              ],
              box: { label: "Définition", text: "Production : activité socialement organisée de création de biens (produits matériels) et de services (activités immatérielles) à partir de facteurs de production." },
            },
            {
              heading: "Les entreprises : produire pour vendre",
              paragraphs: [
                "Une entreprise est une organisation qui produit des biens ou des services destinés à être vendus sur un marché, à un prix qui couvre au moins ses coûts de production. Son objectif principal est de réaliser un profit. Les entreprises sont très diverses : par leur taille (de l'artisan seul à la grande entreprise de plusieurs dizaines de milliers de salariés), par leur secteur d'activité (agriculture, industrie, services) et par leur statut juridique.",
                "En France, on classe notamment les entreprises selon leur nombre de salariés : les microentreprises comptent moins de 10 salariés, les petites et moyennes entreprises (PME) moins de 250, les entreprises de taille intermédiaire (ETI) moins de 5 000, et au-delà on parle de grandes entreprises (des critères de chiffre d'affaires s'ajoutent à ces seuils). Du point de vue juridique, on distingue l'entreprise individuelle, qui appartient à une seule personne, et la société (SARL, SA, SAS...), qui réunit un ou plusieurs associés apportant des capitaux. Certaines entreprises sont publiques, lorsque l'État en détient la majorité du capital.",
              ],
              box: { label: "Définition", text: "Entreprise : organisation qui produit des biens et des services marchands, c'est-à-dire vendus à un prix couvrant au moins leurs coûts de production, dans le but de réaliser un profit." },
            },
            {
              heading: "Les administrations publiques : produire des services non marchands",
              paragraphs: [
                "Les administrations publiques regroupent l'État (ministères, établissements publics comme les lycées publics), les collectivités territoriales (communes, départements, régions) et les administrations de sécurité sociale. Elles produisent principalement des services non marchands : l'éducation, la justice, la police, la défense, l'entretien des routes. Ces services sont fournis gratuitement ou à un prix inférieur à la moitié de leur coût de production.",
                "Comment cette production est-elle financée ? Principalement par les prélèvements obligatoires, c'est-à-dire les impôts et les cotisations sociales. Un élève d'un lycée public ne paie pas sa scolarité : le coût des enseignants, des bâtiments et du chauffage est financé collectivement par les contribuables. Les administrations produisent ces services parce que le marché ne les fournirait pas, ou pas à tous (on ne peut pas faire payer chaque habitant pour l'éclairage public), ou parce que la collectivité juge qu'ils doivent être accessibles à tous.",
              ],
              box: { label: "Règle", text: "Production marchande : vendue sur un marché à un prix économiquement significatif, c'est-à-dire, en comptabilité nationale, couvrant au moins la moitié du coût de production. Production non marchande : fournie gratuitement ou à un prix inférieur à la moitié de son coût, et financée surtout par les prélèvements obligatoires." },
            },
            {
              heading: "L'économie sociale et solidaire",
              paragraphs: [
                "Entre les entreprises qui recherchent le profit et les administrations publiques existe un troisième ensemble : l'économie sociale et solidaire (ESS). Elle regroupe des associations (un club sportif, une association d'aide alimentaire), des coopératives (une coopérative agricole, une banque coopérative), des mutuelles (de santé ou d'assurance) et des fondations. La loi du 31 juillet 2014 relative à l'économie sociale et solidaire a précisé ses principes.",
                "Les organisations de l'ESS partagent trois principes : un but autre que le seul partage des bénéfices (utilité sociale, réponse aux besoins des membres), une gouvernance démocratique (dans une coopérative, chaque membre dispose d'une voix, quel que soit le capital qu'il a apporté : « une personne, une voix ») et une lucrativité limitée (les bénéfices sont majoritairement réinvestis dans l'activité). Leur production peut être marchande (une mutuelle vend des contrats d'assurance) ou non marchande (une association distribue gratuitement des repas).",
              ],
              box: { label: "À retenir", text: "Entreprises : production marchande, recherche du profit. Administrations publiques : production surtout non marchande, financée par les prélèvements obligatoires. ESS (associations, coopératives, mutuelles, fondations) : gouvernance démocratique et lucrativité limitée." },
            },
          ],
          keyPoints: [
            "Produire, c'est créer des biens (matériels) et des services (immatériels) de façon socialement organisée.",
            "Les entreprises produisent des biens et services marchands, vendus à un prix qui couvre au moins les coûts, pour réaliser un profit.",
            "Les administrations publiques produisent surtout des services non marchands, financés par les prélèvements obligatoires.",
            "Production non marchande : gratuite ou vendue à un prix inférieur à la moitié de son coût de production.",
            "L'ESS (associations, coopératives, mutuelles, fondations) repose sur la gouvernance démocratique et la lucrativité limitée.",
          ],
          example: {
            statement: "Pour chacun des producteurs suivants, indiquez sa catégorie et le type de production qu'il réalise : (a) une boulangerie artisanale ; (b) un lycée public ; (c) une association qui distribue gratuitement des repas ; (d) une mutuelle de santé.",
            solution: [
              "(a) La boulangerie est une entreprise : elle vend son pain à un prix qui couvre ses coûts et cherche à réaliser un profit. Sa production est marchande.",
              "(b) Le lycée public est une administration publique (un établissement public dépendant de l'État et de la région) : l'enseignement y est gratuit et financé par les impôts. Sa production est non marchande.",
              "(c) L'association appartient à l'économie sociale et solidaire : elle poursuit un but d'utilité sociale et fournit gratuitement ses repas, financés par des dons, des subventions et le bénévolat. Sa production est non marchande.",
              "(d) La mutuelle appartient elle aussi à l'ESS (gouvernance démocratique, lucrativité limitée), mais elle vend des contrats de complémentaire santé à leur coût : sa production est marchande.",
              "Réponse : entreprise marchande (a), administration non marchande (b), ESS non marchande (c), ESS marchande (d).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les producteurs suivants dans la bonne catégorie (entreprise, administration publique, économie sociale et solidaire) : (a) un constructeur automobile ; (b) la mairie d'une commune ; (c) une coopérative de producteurs de lait ; (d) un coiffeur indépendant ; (e) un hôpital public ; (f) une association de soutien scolaire.",
              hint: "Demandez-vous qui finance la production et si l'organisation recherche le profit ou applique une gouvernance démocratique.",
              solution: [
                "(a) Entreprise : elle vend des voitures pour réaliser un profit.",
                "(b) Administration publique : une collectivité territoriale.",
                "(c) Économie sociale et solidaire : une coopérative, où chaque membre dispose d'une voix.",
                "(d) Entreprise : une entreprise individuelle qui vend un service.",
                "(e) Administration publique : les soins sont en grande partie financés par la sécurité sociale.",
                "(f) Économie sociale et solidaire : une association à but non lucratif.",
                "Résultat : entreprises (a, d), administrations (b, e), ESS (c, f).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une commune propose trois services. Musée municipal : billet à 4 €, coût de production par visiteur 20 €. Piscine municipale : entrée à 3 €, coût par entrée 5 €. Cantine scolaire : repas à 3,50 €, coût par repas 8 €. Pour chaque service, calculez la part du coût couverte par le prix et dites si la production est marchande ou non marchande selon le critère de la comptabilité nationale.",
              hint: "Calculez prix ÷ coût × 100 et comparez le résultat à 50 %.",
              solution: [
                "Musée : 4 ÷ 20 × 100 = 20 % du coût. Moins de 50 % : production non marchande.",
                "Piscine : 3 ÷ 5 × 100 = 60 % du coût. Au moins 50 % : selon ce critère, production marchande, même si la commune finance le reste.",
                "Cantine : 3,50 ÷ 8 × 100 = 43,75 % du coût. Moins de 50 % : production non marchande.",
                "Résultat : le musée et la cantine relèvent de la production non marchande, la piscine de la production marchande.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : une coopérative agricole compte 200 membres et réalise un bénéfice de 100 000 €. Elle en met 70 % en réserve pour financer de nouveaux équipements et reverse le reste à ses membres en proportion de leur activité. Une société anonyme du même secteur réalise le même bénéfice ; elle appartient à trois actionnaires, dont l'un détient 60 % des actions. (1) Calculez le montant mis en réserve par la coopérative et le montant reversé en moyenne à chaque membre. (2) Comparez le poids d'un membre de la coopérative et celui de l'actionnaire principal dans les décisions. (3) À l'aide de ces calculs, montrez que la coopérative relève de l'économie sociale et solidaire.",
              hint: "Dans une coopérative, la règle est « une personne, une voix » ; dans une société anonyme, les voix dépendent du nombre d'actions détenues.",
              solution: [
                "(1) Réserve : 100 000 × 0,70 = 70 000 €. Montant reversé : 100 000 - 70 000 = 30 000 €, soit en moyenne 30 000 ÷ 200 = 150 € par membre.",
                "(2) Dans la coopérative, chaque membre dispose d'une voix sur 200, soit 1 ÷ 200 × 100 = 0,5 % des voix, quel que soit le capital qu'il a apporté. Dans la société anonyme, les voix sont proportionnelles aux actions : l'actionnaire principal détient 60 % des voix et décide donc seul.",
                "(3) La coopérative applique une gouvernance démocratique (une personne, une voix) et une lucrativité limitée : la plus grande partie du bénéfice (70 %) est réinvestie dans l'activité et le reste est réparti selon l'activité de chacun, non selon le capital détenu.",
                "Conclusion : par sa gouvernance et l'usage de ses bénéfices, la coopérative relève de l'ESS, alors que la société anonyme est une entreprise dont le pouvoir dépend du capital détenu.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque producteur à sa caractéristique principale.",
            pairs: [
              { left: "Entreprise", right: "Produit pour vendre et réaliser un profit" },
              { left: "Administration publique", right: "Produit des services non marchands financés par les prélèvements obligatoires" },
              { left: "Coopérative", right: "Applique la règle « une personne, une voix »" },
              { left: "Association", right: "Groupement à but non lucratif, souvent appuyé sur le bénévolat" },
              { left: "Mutuelle", right: "Organisme de l'ESS qui assure ses membres, notamment pour la santé" },
              { left: "Collectivité territoriale", right: "Commune, département ou région" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces produits est un service ?",
              options: ["Un vélo", "Une baguette", "Un smartphone", "Une coupe de cheveux"],
              answer: 3,
              why: "Une coupe de cheveux est immatérielle et consommée au moment où elle est produite : c'est un service.",
            },
            {
              q: "Comment la production non marchande des administrations est-elle principalement financée ?",
              options: [
                "Par la vente des services à leur prix de revient",
                "Par les prélèvements obligatoires",
                "Par les dividendes versés aux actionnaires",
                "Par des emprunts auprès des ménages uniquement",
              ],
              answer: 1,
              why: "Impôts et cotisations sociales financent collectivement des services fournis gratuitement ou à un prix très inférieur à leur coût.",
            },
            {
              q: "Quel principe caractérise une coopérative ?",
              options: [
                "Une action, une voix",
                "Le profit maximal pour les actionnaires",
                "Une personne, une voix",
                "La gratuité de tous les services produits",
              ],
              answer: 2,
              why: "Dans une coopérative, chaque membre dispose d'une voix, quel que soit le capital qu'il a apporté : c'est la gouvernance démocratique de l'ESS.",
            },
            {
              q: "Un service est vendu 2 € alors qu'il coûte 10 € à produire. Comment le classer ?",
              options: [
                "Production non marchande",
                "Production marchande",
                "Production domestique",
                "Ce n'est pas une production",
              ],
              answer: 0,
              why: "Le prix couvre 20 % du coût, moins de la moitié : selon la comptabilité nationale, c'est une production non marchande.",
            },
            {
              q: "Laquelle de ces organisations appartient à l'économie sociale et solidaire ?",
              options: [
                "Une société anonyme cotée en bourse",
                "Une association d'aide alimentaire",
                "Le ministère de l'Éducation nationale",
                "Un artisan plombier installé à son compte",
              ],
              answer: 1,
              why: "Les associations, comme les coopératives, les mutuelles et les fondations, forment l'économie sociale et solidaire.",
            },
          ],
          trap: "Croire que l'économie sociale et solidaire ne produit que gratuitement, ou qu'une production non marchande est forcément sans coût : une mutuelle de l'ESS vend ses contrats, et un service gratuit a toujours un coût, payé par les prélèvements obligatoires ou les dons.",
          method: "Pour classer un producteur, posez trois questions dans l'ordre : vend-il sa production à un prix couvrant au moins la moitié de son coût (marchand ou non) ? Qui le finance ? Qui prend les décisions et que fait-il de ses bénéfices (profit, réinvestissement) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'facteurs-production',
          title: 'Les facteurs de production et leur combinaison',
          minutes: 30,
          objectives: [
            "Savoir que la production résulte de la combinaison de travail, de capital, de technologie et de ressources naturelles.",
            "Distinguer capital fixe et consommations intermédiaires.",
            "Expliquer la substituabilité et la complémentarité des facteurs de production.",
            "Calculer et interpréter une productivité du travail.",
          ],
          course: [
            {
              heading: "Les facteurs de production",
              paragraphs: [
                "Pour produire, les producteurs combinent plusieurs facteurs de production. Le facteur travail désigne l'activité humaine consacrée à la production. On le mesure en quantité (nombre de travailleurs, nombre d'heures travaillées) mais aussi en qualité : un travailleur qualifié, formé et expérimenté produit souvent davantage. On parle de capital humain pour désigner l'ensemble des connaissances et des compétences d'une personne.",
                "Le facteur capital désigne les moyens de production qui ont eux-mêmes été produits. Le capital fixe regroupe les biens durables utilisés pendant plusieurs cycles de production, en général plus d'un an : bâtiments, machines, véhicules, ordinateurs, logiciels. On l'accroît par l'investissement. En s'usant ou en devenant obsolète, il perd de la valeur : c'est l'amortissement (ou consommation de capital fixe).",
                "La production mobilise aussi des ressources naturelles (terres, eau, énergies, minerais, forêts), dont certaines sont renouvelables (le bois, l'énergie solaire) et d'autres épuisables (le pétrole, le cuivre). Enfin, la technologie, c'est-à-dire l'ensemble des connaissances et des procédés disponibles, détermine la façon dont ces facteurs sont combinés : avec la même quantité de travail et de capital, une meilleure technologie permet de produire davantage.",
              ],
              box: { label: "Définition", text: "Facteurs de production : ressources utilisées pour produire : le travail, le capital, les ressources naturelles, combinés grâce à une technologie. Capital fixe : biens durables utilisés pendant plusieurs cycles de production (machines, bâtiments, logiciels)." },
            },
            {
              heading: "Capital fixe et consommations intermédiaires",
              paragraphs: [
                "Il ne faut pas confondre le capital fixe avec les consommations intermédiaires. Les consommations intermédiaires (CI) sont les biens et les services achetés à d'autres producteurs, puis transformés ou entièrement détruits au cours de la production : la farine et l'électricité pour un boulanger, le tissu pour une entreprise de vêtements, les services d'un cabinet comptable pour une entreprise.",
                "Le critère de distinction est la durée d'utilisation. Le four du boulanger sert pendant des années : c'est du capital fixe. La farine disparaît dans le pain dès la première fournée : c'est une consommation intermédiaire. Cette distinction sera essentielle pour calculer la valeur ajoutée.",
              ],
              box: { label: "Règle", text: "Utilisé pendant plusieurs cycles de production (plus d'un an) : capital fixe. Transformé ou détruit en un seul cycle de production : consommation intermédiaire." },
            },
            {
              heading: "Combiner les facteurs : substitution et complémentarité",
              paragraphs: [
                "Chaque producteur choisit une combinaison productive, c'est-à-dire la façon de combiner les facteurs pour produire. Les facteurs sont substituables lorsqu'on peut remplacer l'un par l'autre pour obtenir la même production : dans un supermarché, des caisses automatiques peuvent remplacer une partie des caissières et des caissiers (du capital remplace du travail).",
                "Les facteurs sont complémentaires lorsqu'ils doivent être utilisés ensemble, dans des proportions données : un camion a besoin d'un chauffeur, une machine a besoin d'un technicien pour la régler et la surveiller. Dans la réalité, les facteurs sont souvent à la fois substituables (à long terme) et complémentaires (à court terme).",
                "Le choix de la combinaison dépend notamment du coût relatif des facteurs : si le travail devient plus cher que le capital (hausse des salaires, baisse du prix des machines), le producteur a intérêt à utiliser davantage de capital, et inversement. Il dépend aussi de la technologie disponible et du type de production : il est plus facile d'automatiser l'assemblage de voitures que l'aide aux personnes âgées.",
              ],
            },
            {
              heading: "Mesurer l'efficacité : la productivité",
              paragraphs: [
                "La productivité mesure l'efficacité avec laquelle les facteurs de production sont utilisés. La productivité du travail rapporte la production à la quantité de travail utilisée. Elle peut se calculer par travailleur (productivité par tête) ou par heure de travail (productivité horaire), cette dernière étant plus précise car la durée du travail varie selon les personnes et les pays.",
                "La productivité augmente lorsqu'on produit davantage avec la même quantité de travail, ou autant avec moins de travail. Ces gains de productivité viennent souvent d'un investissement en capital plus performant, d'une meilleure organisation du travail, d'une meilleure formation des travailleurs ou d'innovations techniques. Il ne faut pas confondre production et productivité : une entreprise qui embauche peut produire plus sans que la productivité de chaque travailleur augmente.",
              ],
              box: { label: "Formule", text: "Productivité horaire du travail = production ÷ nombre d'heures travaillées. Productivité par tête = production ÷ nombre de travailleurs." },
            },
          ],
          keyPoints: [
            "La production combine travail, capital, ressources naturelles et technologie.",
            "Capital fixe : biens durables utilisés sur plusieurs cycles (machines, bâtiments, logiciels).",
            "Consommations intermédiaires : biens et services transformés ou détruits en un seul cycle de production.",
            "Facteurs substituables : l'un peut remplacer l'autre. Facteurs complémentaires : ils doivent être utilisés ensemble.",
            "Le choix de la combinaison productive dépend du coût relatif des facteurs et de la technologie.",
            "Productivité horaire du travail = production ÷ heures travaillées.",
          ],
          example: {
            statement: "Données fictives. Une boulangerie produit 1 200 baguettes par jour avec 3 salariés travaillant chacun 8 heures. Après l'achat d'un pétrin automatique, elle produit 1 500 baguettes par jour avec les mêmes salariés et les mêmes horaires. (1) Calculez la productivité horaire du travail avant et après l'achat. (2) Calculez son taux de variation. (3) Interprétez.",
            solution: [
              "Nombre d'heures travaillées par jour : 3 × 8 = 24 heures, avant comme après.",
              "(1) Avant : 1 200 ÷ 24 = 50 baguettes par heure. Après : 1 500 ÷ 24 = 62,5 baguettes par heure.",
              "(2) Taux de variation : (62,5 - 50) ÷ 50 × 100 = 25 %.",
              "(3) Avec la même quantité de travail, la boulangerie produit 25 % de plus : l'investissement dans un capital fixe plus performant a permis un gain de productivité du travail.",
              "Réponse : la productivité horaire passe de 50 à 62,5 baguettes par heure, soit une hausse de 25 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une exploitation agricole, classez chaque élément parmi travail, capital fixe, consommations intermédiaires ou ressources naturelles : (a) l'agriculteur et son salarié ; (b) le tracteur ; (c) les semences ; (d) la terre cultivée ; (e) les engrais ; (f) le hangar ; (g) le gazole du tracteur.",
              hint: "Pour distinguer capital fixe et consommations intermédiaires, demandez-vous si l'élément sert plusieurs années ou disparaît dans la production.",
              solution: [
                "(a) Travail : l'activité humaine consacrée à la production.",
                "(b) et (f) Capital fixe : le tracteur et le hangar servent pendant plusieurs années.",
                "(c), (e) et (g) Consommations intermédiaires : semences, engrais et gazole sont détruits ou transformés au cours de la production.",
                "(d) Ressource naturelle : la terre cultivée.",
                "Résultat : travail (a) ; capital fixe (b, f) ; consommations intermédiaires (c, e, g) ; ressource naturelle (d).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une entreprise doit produire 1 000 unités par jour. Deux combinaisons le permettent. Combinaison A : 10 salariés et 1 machine. Combinaison B : 4 salariés et 3 machines. Une machine coûte 200 € par jour. (1) Si un salarié coûte 100 € par jour, quelle combinaison l'entreprise choisit-elle ? (2) Même question si le coût d'un salarié tombe à 60 € par jour. (3) Qu'illustre cet exercice ?",
              hint: "Calculez le coût total de chaque combinaison : (salariés × coût d'un salarié) + (machines × coût d'une machine).",
              solution: [
                "(1) Coût de A : 10 × 100 + 1 × 200 = 1 000 + 200 = 1 200 €. Coût de B : 4 × 100 + 3 × 200 = 400 + 600 = 1 000 €. L'entreprise choisit B, la moins coûteuse.",
                "(2) Coût de A : 10 × 60 + 200 = 600 + 200 = 800 €. Coût de B : 4 × 60 + 600 = 240 + 600 = 840 €. L'entreprise choisit A.",
                "(3) Travail et capital sont ici substituables : on peut produire autant avec plus de machines et moins de salariés, ou l'inverse. Le choix de la combinaison productive dépend du coût relatif des facteurs : quand le travail devient moins cher, l'entreprise utilise davantage de travail.",
                "Résultat : combinaison B dans le premier cas, combinaison A dans le second.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : une usine employait 50 salariés travaillant 1 600 heures par an et produisait 400 000 pièces. Après l'installation de robots, elle emploie 45 salariés travaillant 1 600 heures par an et produit 432 000 pièces. (1) Calculez le taux de variation de la production et celui du nombre de salariés. (2) Calculez la productivité horaire du travail avant et après, puis son taux de variation. (3) Montrez que l'usine a modifié sa combinaison productive et que ce changement a entraîné des gains de productivité.",
              hint: "Calculez d'abord le nombre total d'heures travaillées dans chaque situation : salariés × heures par salarié.",
              solution: [
                "(1) Production : (432 000 - 400 000) ÷ 400 000 × 100 = 8 %. Salariés : (45 - 50) ÷ 50 × 100 = -10 %.",
                "(2) Heures avant : 50 × 1 600 = 80 000 h ; productivité : 400 000 ÷ 80 000 = 5 pièces par heure. Heures après : 45 × 1 600 = 72 000 h ; productivité : 432 000 ÷ 72 000 = 6 pièces par heure. Taux de variation : (6 - 5) ÷ 5 × 100 = 20 %.",
                "(3) L'usine utilise plus de capital (les robots) et moins de travail : elle a substitué du capital au travail. Elle produit pourtant 8 % de plus avec 10 % de travail en moins, ce qui se traduit par une hausse de 20 % de la productivité horaire du travail.",
                "Conclusion : la nouvelle combinaison productive, plus riche en capital, rend le travail plus productif ; elle s'accompagne ici d'une baisse de l'emploi dans l'usine.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les facteurs de production.",
            statements: [
              { text: "Un ordinateur utilisé pendant quatre ans par une entreprise fait partie de son capital fixe.", true: true, why: "Il sert pendant plusieurs cycles de production : c'est un bien de capital fixe." },
              { text: "L'électricité consommée par une usine fait partie de son capital fixe.", true: false, why: "Elle est détruite au cours de la production : c'est une consommation intermédiaire." },
              { text: "Un camion et son chauffeur sont des facteurs complémentaires.", true: true, why: "L'un ne peut pas produire le service de transport sans l'autre." },
              { text: "Si une entreprise embauche et produit davantage, sa productivité du travail augmente forcément.", true: false, why: "La production peut augmenter au même rythme que le travail : la productivité reste alors identique." },
              { text: "Quand le coût du travail augmente, les entreprises ont intérêt à substituer du capital au travail.", true: true, why: "Le choix de la combinaison productive dépend du coût relatif des facteurs." },
              { text: "Les logiciels ne font pas partie du capital, car ils sont immatériels.", true: false, why: "Un logiciel utilisé pendant plusieurs années est du capital fixe, même s'il est immatériel." },
              { text: "Le pétrole est une ressource naturelle épuisable.", true: true, why: "Ses stocks se sont formés en des millions d'années et ne se renouvellent pas à l'échelle humaine." },
            ],
          },
          quiz: [
            {
              q: "Pour un restaurant, que représente la viande achetée chaque jour ?",
              options: [
                "Du capital fixe",
                "Du facteur travail",
                "Une consommation intermédiaire",
                "Une ressource naturelle non transformée",
              ],
              answer: 2,
              why: "La viande est transformée et disparaît dans les plats en un seul cycle de production : c'est une consommation intermédiaire.",
            },
            {
              q: "Que signifie que deux facteurs de production sont substituables ?",
              options: [
                "L'un peut remplacer l'autre",
                "Ils doivent toujours être utilisés ensemble",
                "Ils ont exactement le même coût",
                "Ils sont achetés au même fournisseur",
              ],
              answer: 0,
              why: "Des facteurs substituables peuvent se remplacer pour obtenir la même production, comme des caisses automatiques à la place de caissiers.",
            },
            {
              q: "Une entreprise produit 3 000 unités avec 150 heures de travail. Quelle est sa productivité horaire ?",
              options: ["450 000 unités", "20 unités par heure", "0,05 unité par heure", "2 000 unités par heure"],
              answer: 1,
              why: "Productivité horaire = production ÷ heures = 3 000 ÷ 150 = 20 unités par heure.",
            },
            {
              q: "Lequel de ces éléments est du capital fixe pour un coiffeur ?",
              options: ["Le shampoing", "L'eau utilisée", "Le travail du coiffeur", "Le fauteuil du salon"],
              answer: 3,
              why: "Le fauteuil sert pendant plusieurs années ; le shampoing et l'eau sont des consommations intermédiaires.",
            },
            {
              q: "Qu'est-ce qui incite le plus une entreprise à remplacer des salariés par des machines ?",
              options: [
                "Une baisse des salaires",
                "Une hausse du prix des machines",
                "Une hausse du coût du travail par rapport au capital",
                "Une baisse de la demande de ses clients étrangers",
              ],
              answer: 2,
              why: "Le choix de la combinaison productive dépend du coût relatif des facteurs : si le travail devient relativement plus cher, le capital devient plus intéressant.",
            },
          ],
          trap: "Confondre capital fixe et consommations intermédiaires : le critère n'est pas le prix ni le caractère matériel, mais la durée d'utilisation (plusieurs cycles de production pour le capital fixe, un seul pour les consommations intermédiaires).",
          method: "Pour classer un élément de la production, demandez-vous : est-ce une activité humaine (travail), un bien produit qui dure plusieurs années (capital fixe), un bien ou service qui disparaît dans la production (consommation intermédiaire), ou un élément fourni par la nature (ressource naturelle) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'valeur-ajoutee',
          title: "Chiffre d'affaires, consommations intermédiaires et valeur ajoutée",
          minutes: 35,
          objectives: [
            "Connaître les principaux indicateurs de création de richesses de l'entreprise : chiffre d'affaires et valeur ajoutée.",
            "Calculer une valeur ajoutée et illustrer cette notion par des exemples.",
            "Expliquer pourquoi la valeur ajoutée évite de compter plusieurs fois la même richesse.",
            "Décrire le partage de la valeur ajoutée entre les salariés, les administrations publiques et l'entreprise.",
          ],
          course: [
            {
              heading: "Le chiffre d'affaires",
              paragraphs: [
                "Le chiffre d'affaires (CA) est le montant total des ventes d'une entreprise pendant une période, en général un an. Il se calcule en multipliant le prix de vente par les quantités vendues, pour chacun des produits. Une entreprise qui vend 10 000 paires de chaussures à 80 € réalise un chiffre d'affaires de 10 000 × 80 = 800 000 €.",
                "Le chiffre d'affaires mesure l'activité commerciale de l'entreprise, mais il ne mesure pas la richesse qu'elle a créée. En effet, il inclut la valeur de tout ce que l'entreprise a acheté à d'autres producteurs pour fabriquer ses produits. Il ne faut pas non plus le confondre avec le bénéfice : une entreprise peut avoir un chiffre d'affaires très élevé et perdre de l'argent si ses coûts dépassent ses ventes.",
              ],
              box: { label: "Formule", text: "Chiffre d'affaires = prix de vente × quantités vendues (on additionne les ventes de tous les produits)." },
            },
            {
              heading: "La valeur ajoutée : la richesse réellement créée",
              paragraphs: [
                "Pour produire, une entreprise achète des consommations intermédiaires à d'autres entreprises : matières premières, énergie, services. La valeur de ces consommations a été créée par ses fournisseurs, pas par elle. Pour mesurer la richesse créée par l'entreprise elle-même, on retire donc de son chiffre d'affaires la valeur des consommations intermédiaires : on obtient la valeur ajoutée (VA).",
                "Prenons une entreprise de chaussures : chiffre d'affaires 800 000 €, consommations intermédiaires (cuir, semelles, colle, électricité, transport) 500 000 €. Sa valeur ajoutée est 800 000 - 500 000 = 300 000 €. C'est la valeur que l'entreprise a ajoutée aux produits achetés à ses fournisseurs, grâce à son travail et à son capital fixe.",
                "Pour un producteur non marchand comme une administration, qui ne vend pas sa production, on évalue la production à son coût (salaires des agents, consommations intermédiaires, usure des bâtiments) : la valeur ajoutée est alors calculée à partir de cette évaluation.",
              ],
              box: { label: "Formule", text: "Valeur ajoutée = chiffre d'affaires (valeur de la production) - consommations intermédiaires. Elle mesure la richesse créée par l'entreprise elle-même." },
            },
            {
              heading: "Éviter les doubles comptes",
              paragraphs: [
                "La valeur ajoutée permet d'éviter de compter plusieurs fois la même richesse. Prenons une chaîne de production simplifiée. Un agriculteur vend du blé à un meunier pour 1 000 €. Le meunier le transforme en farine qu'il vend 1 600 € à un boulanger. Le boulanger fait du pain qu'il vend 3 000 € aux consommateurs. Si l'on additionnait les chiffres d'affaires (1 000 + 1 600 + 3 000 = 5 600 €), on compterait le blé trois fois et la farine deux fois.",
                "Calculons les valeurs ajoutées (en supposant, pour simplifier, que l'agriculteur n'a pas de consommations intermédiaires) : agriculteur 1 000 €, meunier 1 600 - 1 000 = 600 €, boulanger 3 000 - 1 600 = 1 400 €. Leur somme, 3 000 €, est égale à la valeur du pain vendu au consommateur final. C'est la richesse réellement créée par l'ensemble de la chaîne.",
              ],
              box: { label: "À retenir", text: "La somme des valeurs ajoutées d'une chaîne de production est égale à la valeur du produit final : additionner les valeurs ajoutées, et non les chiffres d'affaires, évite les doubles comptes." },
            },
            {
              heading: "Le partage de la valeur ajoutée",
              paragraphs: [
                "La valeur ajoutée est la richesse créée par l'entreprise ; elle sert à rémunérer ceux qui ont contribué à la produire. Une part revient aux salariés, sous la forme de salaires et de cotisations sociales (la rémunération des salariés). Une part revient aux administrations publiques, sous la forme d'impôts sur la production (par exemple des impôts locaux payés par les entreprises).",
                "Ce qui reste après ces versements est l'excédent brut d'exploitation (EBE), ou profit brut, qui revient à l'entreprise. Il sert à rémunérer les apporteurs de capitaux (intérêts aux banques, dividendes aux actionnaires), à payer l'impôt sur les bénéfices et à financer l'investissement de l'entreprise (autofinancement). Le partage de la valeur ajoutée entre salaires et profits est un enjeu de conflits : une hausse des salaires réduit, à valeur ajoutée donnée, la part des profits.",
              ],
              box: { label: "Formule", text: "Valeur ajoutée = rémunération des salariés + impôts sur la production + excédent brut d'exploitation (profit brut). Donc EBE = VA - rémunération des salariés - impôts sur la production." },
            },
          ],
          keyPoints: [
            "Chiffre d'affaires = prix × quantités vendues : il mesure les ventes, pas la richesse créée.",
            "Consommations intermédiaires : biens et services achetés à d'autres producteurs et détruits ou transformés pendant la production.",
            "Valeur ajoutée = chiffre d'affaires - consommations intermédiaires : c'est la richesse créée par l'entreprise.",
            "Additionner les valeurs ajoutées évite les doubles comptes : leur somme égale la valeur du produit final.",
            "La VA se partage entre salariés (rémunération), administrations (impôts sur la production) et entreprise (EBE).",
          ],
          example: {
            statement: "Données fictives. Une boulangerie vend en un an 60 000 baguettes à 1,20 € et 10 000 croissants à 1,50 €. Elle achète 12 000 € de farine, 6 000 € de beurre, 5 000 € d'électricité et 2 000 € d'emballages. Elle verse 40 000 € de rémunération à ses salariés et 2 000 € d'impôts sur la production. Calculez son chiffre d'affaires, sa valeur ajoutée et son excédent brut d'exploitation.",
            solution: [
              "Chiffre d'affaires : 60 000 × 1,20 + 10 000 × 1,50 = 72 000 + 15 000 = 87 000 €.",
              "Consommations intermédiaires : 12 000 + 6 000 + 5 000 + 2 000 = 25 000 €.",
              "Valeur ajoutée : 87 000 - 25 000 = 62 000 €.",
              "Excédent brut d'exploitation : 62 000 - 40 000 - 2 000 = 20 000 €.",
              "Vérification : 40 000 + 2 000 + 20 000 = 62 000 €, on retrouve bien la valeur ajoutée.",
              "Réponse : CA de 87 000 €, VA de 62 000 €, EBE de 20 000 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Une entreprise fabrique 2 000 vélos par an et les vend 500 € chacun. Elle achète pour 600 000 € de pièces détachées, d'énergie et de services. (1) Calculez son chiffre d'affaires. (2) Calculez sa valeur ajoutée. (3) Quelle part du chiffre d'affaires la valeur ajoutée représente-t-elle ?",
              hint: "Valeur ajoutée = chiffre d'affaires - consommations intermédiaires ; la part se calcule par VA ÷ CA × 100.",
              solution: [
                "(1) Chiffre d'affaires : 2 000 × 500 = 1 000 000 €.",
                "(2) Valeur ajoutée : 1 000 000 - 600 000 = 400 000 €.",
                "(3) Part : 400 000 ÷ 1 000 000 × 100 = 40 %. Sur 100 € de ventes, 40 € correspondent à une richesse créée par l'entreprise elle-même.",
                "Résultat : CA de 1 000 000 €, VA de 400 000 €, soit 40 % du CA.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un éleveur vend du lait à une fromagerie pour 20 000 € (on suppose qu'il n'a pas de consommations intermédiaires). La fromagerie transforme ce lait en fromages qu'elle vend 50 000 € à un supermarché. Le supermarché revend ces fromages 65 000 € aux consommateurs. (1) Calculez la valeur ajoutée de chaque producteur. (2) Calculez la somme des chiffres d'affaires et la somme des valeurs ajoutées. (3) Laquelle mesure la richesse créée ? Pourquoi ?",
              hint: "Les consommations intermédiaires de chaque producteur sont égales au chiffre d'affaires du producteur précédent dans la chaîne.",
              solution: [
                "(1) Éleveur : 20 000 - 0 = 20 000 €. Fromagerie : 50 000 - 20 000 = 30 000 €. Supermarché : 65 000 - 50 000 = 15 000 €.",
                "(2) Somme des chiffres d'affaires : 20 000 + 50 000 + 65 000 = 135 000 €. Somme des valeurs ajoutées : 20 000 + 30 000 + 15 000 = 65 000 €.",
                "(3) C'est la somme des valeurs ajoutées qui mesure la richesse créée : elle est égale à la valeur des fromages achetés par les consommateurs (65 000 €). La somme des chiffres d'affaires compte le lait trois fois et les fromages vendus au supermarché deux fois.",
                "Résultat : 65 000 € de richesse créée, contre 135 000 € de ventes cumulées.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives, en millions d'euros) : compte d'une entreprise industrielle sur un an. Chiffre d'affaires : 5. Consommations intermédiaires : 3. Salaires bruts : 1. Cotisations sociales patronales : 0,4. Impôts sur la production : 0,1. (1) Calculez la valeur ajoutée et l'excédent brut d'exploitation. (2) Calculez la part de la valeur ajoutée revenant aux salariés, aux administrations publiques et à l'entreprise. (3) Expliquez pourquoi le chiffre d'affaires ne suffit pas pour mesurer la richesse créée par cette entreprise, et à quoi peut servir son excédent brut d'exploitation.",
              hint: "La rémunération des salariés comprend les salaires et les cotisations sociales. Vérifiez que la somme des trois parts fait 100 %.",
              solution: [
                "(1) VA = 5 - 3 = 2 millions d'euros. Rémunération des salariés = 1 + 0,4 = 1,4 million. EBE = 2 - 1,4 - 0,1 = 0,5 million d'euros.",
                "(2) Salariés : 1,4 ÷ 2 × 100 = 70 %. Administrations publiques : 0,1 ÷ 2 × 100 = 5 %. Entreprise (EBE) : 0,5 ÷ 2 × 100 = 25 %. Vérification : 70 + 5 + 25 = 100 %.",
                "(3) Le chiffre d'affaires (5 millions) inclut 3 millions de consommations intermédiaires, qui correspondent à des richesses créées par les fournisseurs. La richesse créée par l'entreprise elle-même est sa valeur ajoutée, 2 millions, soit 40 % de son chiffre d'affaires.",
                "L'EBE (0,5 million) permet de payer les intérêts des emprunts, l'impôt sur les bénéfices, de verser des dividendes aux actionnaires et de financer de nouveaux investissements.",
                "Conclusion : la valeur ajoutée de 2 millions d'euros revient pour 70 % aux salariés, 5 % aux administrations et 25 % à l'entreprise.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la chaîne de production d'une baguette, du premier producteur au consommateur.",
            items: [
              "Une entreprise fabrique des engrais et les vend à un agriculteur",
              "L'agriculteur cultive du blé et le vend à un meunier",
              "Le meunier moud le blé et vend la farine à un boulanger",
              "Le boulanger transforme la farine en baguettes",
              "Le consommateur achète la baguette, produit final de la chaîne",
            ],
          },
          quiz: [
            {
              q: "Une entreprise vend 4 000 produits à 25 €. Quel est son chiffre d'affaires ?",
              options: ["4 025 €", "100 000 €", "160 €", "10 000 €"],
              answer: 1,
              why: "Chiffre d'affaires = prix × quantités = 25 × 4 000 = 100 000 €.",
            },
            {
              q: "Une entreprise a un CA de 300 000 € et des consommations intermédiaires de 180 000 €. Quelle est sa valeur ajoutée ?",
              options: ["480 000 €", "300 000 €", "180 000 €", "120 000 €"],
              answer: 3,
              why: "VA = CA - CI = 300 000 - 180 000 = 120 000 €.",
            },
            {
              q: "Pourquoi additionne-t-on les valeurs ajoutées plutôt que les chiffres d'affaires pour mesurer la richesse créée ?",
              options: [
                "Pour éviter les doubles comptes",
                "Parce que les chiffres d'affaires sont secrets",
                "Parce que la valeur ajoutée inclut les impôts sur le revenu des ménages",
                "Pour tenir compte de la hausse des prix",
              ],
              answer: 0,
              why: "Les chiffres d'affaires incluent les consommations intermédiaires, déjà comptées chez les fournisseurs : les additionner compterait plusieurs fois la même richesse.",
            },
            {
              q: "Laquelle de ces dépenses est une consommation intermédiaire pour une entreprise de transport ?",
              options: [
                "L'achat d'un nouveau camion",
                "Le salaire des chauffeurs",
                "Le carburant",
                "Les dividendes versés aux actionnaires",
              ],
              answer: 2,
              why: "Le carburant est détruit pendant la production du service de transport ; le camion est du capital fixe et le salaire rémunère le travail.",
            },
            {
              q: "Que reste-t-il à l'entreprise une fois payées la rémunération des salariés et les impôts sur la production ?",
              options: [
                "Le chiffre d'affaires",
                "Les consommations intermédiaires",
                "La valeur ajoutée",
                "L'excédent brut d'exploitation",
              ],
              answer: 3,
              why: "L'EBE, ou profit brut, est la part de la valeur ajoutée qui reste à l'entreprise après ces versements.",
            },
          ],
          trap: "Confondre chiffre d'affaires, valeur ajoutée et bénéfice : le chiffre d'affaires mesure les ventes, la valeur ajoutée la richesse créée (CA - CI), et le profit n'est qu'une partie de cette valeur ajoutée.",
          method: "Dans un calcul de valeur ajoutée, rangez d'abord chaque donnée dans la bonne case (ventes, consommations intermédiaires, salaires, impôts), calculez le CA, puis la VA, puis l'EBE, et vérifiez que rémunération des salariés + impôts sur la production + EBE redonne bien la VA.",
        },
      ],
    },

    /* ==================================================================== */
    /* COMMENT MESURE-T-ON LES RICHESSES ?                                   */
    /* ==================================================================== */
    {
      id: 'mesurer-richesses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'pib',
          title: "Le PIB : mesurer la production d'un pays",
          minutes: 30,
          objectives: [
            "Définir le produit intérieur brut (PIB) comme la somme des valeurs ajoutées produites sur le territoire.",
            "Distinguer PIB en valeur et PIB en volume, et comprendre que la croissance économique se mesure par le taux de variation du PIB en volume.",
            "Calculer et interpréter un PIB par habitant.",
          ],
          course: [
            {
              heading: "Du niveau de l'entreprise au niveau du pays",
              paragraphs: [
                "Pour mesurer la richesse créée par l'ensemble d'un pays, on ne peut pas additionner les chiffres d'affaires des producteurs : on compterait plusieurs fois les consommations intermédiaires. On additionne donc les valeurs ajoutées de tous les producteurs résidents, qu'ils soient marchands (entreprises) ou non marchands (administrations publiques, associations). On obtient le produit intérieur brut, ou PIB.",
                "En France, c'est l'Insee qui calcule le PIB dans le cadre de la comptabilité nationale, selon des règles communes à tous les pays de l'Union européenne. La production non marchande, qui n'a pas de prix de vente, est évaluée à son coût de production : le service rendu par un lycée public est compté pour ce qu'il coûte (salaires des personnels, consommations intermédiaires, usure des bâtiments).",
                "Le mot « intérieur » signifie que l'on compte la production réalisée sur le territoire national par des unités résidentes, quelle que soit la nationalité de leurs propriétaires : une usine automobile japonaise installée en France contribue au PIB français. Le mot « brut » signifie que l'on ne retire pas l'usure du capital fixe (l'amortissement).",
              ],
              box: { label: "Définition", text: "Produit intérieur brut (PIB) : somme des valeurs ajoutées produites pendant une année par les producteurs résidant sur le territoire national, à laquelle on ajoute les impôts sur les produits (comme la TVA) et dont on retire les subventions sur les produits." },
            },
            {
              heading: "Le calcul du PIB",
              paragraphs: [
                "Les valeurs ajoutées sont calculées hors taxes. Or les prix payés par les consommateurs comprennent des impôts sur les produits, notamment la taxe sur la valeur ajoutée (TVA), et certains produits bénéficient de subventions qui baissent leur prix. Pour que le PIB corresponde à la valeur des produits aux prix payés par les acheteurs, on ajoute donc à la somme des valeurs ajoutées les impôts sur les produits et on retire les subventions sur les produits.",
                "Imaginons une petite économie (données fictives) dont les valeurs ajoutées s'élèvent à 50 milliards d'euros dans l'agriculture, 300 dans l'industrie et 900 dans les services, avec 160 milliards d'impôts sur les produits et 10 milliards de subventions sur les produits. Son PIB est : 50 + 300 + 900 + 160 - 10 = 1 400 milliards d'euros.",
              ],
              box: { label: "Formule", text: "PIB = somme des valeurs ajoutées des producteurs résidents + impôts sur les produits - subventions sur les produits." },
            },
            {
              heading: "PIB en valeur, PIB en volume et croissance économique",
              paragraphs: [
                "Le PIB en valeur (ou PIB nominal) est calculé aux prix de l'année considérée (prix courants). Il peut augmenter pour deux raisons : parce que l'on produit davantage de biens et de services, ou simplement parce que les prix augmentent. Si l'on produit exactement la même chose qu'il y a un an, mais que tous les prix ont augmenté de 3 %, le PIB en valeur augmente de 3 % sans que la production réelle ait changé.",
                "Pour mesurer l'évolution réelle de la production, on calcule le PIB en volume (ou PIB réel), à prix constants, c'est-à-dire en neutralisant l'effet de la hausse des prix. La croissance économique est mesurée par le taux de variation du PIB en volume. On passe de l'un à l'autre avec les coefficients multiplicateurs : coefficient du volume = coefficient de la valeur ÷ coefficient des prix. Quand les taux sont faibles, on peut utiliser l'approximation : taux de croissance en volume ≈ taux de croissance en valeur - taux de hausse des prix.",
                "Le PIB en volume peut aussi baisser : on parle alors de récession lorsque cette baisse se prolonge. En 2020, par exemple, le PIB de la France a fortement reculé à cause des mesures de confinement liées à la crise sanitaire.",
              ],
              box: { label: "Formule", text: "Croissance économique = taux de variation du PIB en volume. Coefficient multiplicateur du volume = coefficient de la valeur ÷ coefficient des prix. Approximation : taux en volume ≈ taux en valeur - taux d'inflation." },
            },
            {
              heading: "Le PIB par habitant",
              paragraphs: [
                "Un pays très peuplé produit en général davantage qu'un petit pays, sans que ses habitants soient plus riches. Pour comparer les pays, on rapporte donc le PIB à la population : le PIB par habitant (PIB ÷ nombre d'habitants) indique la production moyenne par personne. On l'utilise souvent comme indicateur du niveau de vie moyen d'un pays.",
                "Pour comparer des pays qui n'ont pas la même monnaie ni le même niveau de prix, on convertit le PIB en parités de pouvoir d'achat (PPA), c'est-à-dire en tenant compte de ce que l'on peut réellement acheter avec un revenu dans chaque pays. Attention enfin : le PIB par habitant est une moyenne, qui ne dit rien de la façon dont la richesse est répartie entre les habitants.",
              ],
              box: { label: "Formule", text: "PIB par habitant = PIB ÷ population. Son taux de croissance est proche du taux de croissance du PIB moins le taux de croissance de la population." },
            },
          ],
          keyPoints: [
            "PIB = somme des valeurs ajoutées des producteurs résidents + impôts sur les produits - subventions sur les produits.",
            "Le PIB compte la production marchande et la production non marchande (évaluée à son coût).",
            "PIB en valeur : aux prix courants. PIB en volume : à prix constants, sans l'effet de la hausse des prix.",
            "La croissance économique est le taux de variation du PIB en volume.",
            "Coefficient du volume = coefficient de la valeur ÷ coefficient des prix.",
            "PIB par habitant = PIB ÷ population : un indicateur du niveau de vie moyen, qui ne dit rien des inégalités.",
          ],
          example: {
            statement: "Données fictives. Le PIB en valeur d'un pays passe de 2 000 à 2 100 milliards d'euros en un an, tandis que les prix augmentent de 3 %. (1) Calculez le taux de croissance du PIB en valeur. (2) Calculez le taux de croissance du PIB en volume. (3) Interprétez.",
            solution: [
              "(1) Taux de croissance en valeur : (2 100 - 2 000) ÷ 2 000 × 100 = 5 %. Le coefficient multiplicateur est 1,05.",
              "(2) Le coefficient multiplicateur des prix est 1,03. Coefficient du volume = 1,05 ÷ 1,03 ≈ 1,0194, soit une croissance en volume d'environ 1,9 %.",
              "Vérification par l'approximation : 5 % - 3 % = 2 %, valeur proche de 1,9 %.",
              "(3) Sur les 5 % de hausse du PIB en valeur, une grande partie s'explique par la hausse des prix : la production réelle n'a augmenté que d'environ 1,9 %.",
              "Réponse : croissance de 5 % en valeur et d'environ 1,9 % en volume ; la croissance économique de ce pays est d'environ 1,9 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives, en milliards d'euros. Valeurs ajoutées d'un pays : agriculture 50, industrie 300, services 900. Impôts sur les produits : 160. Subventions sur les produits : 10. (1) Calculez la somme des valeurs ajoutées et le PIB. (2) Calculez la part de chaque secteur dans la somme des valeurs ajoutées.",
              hint: "Ajoutez les impôts sur les produits et retirez les subventions sur les produits à la somme des valeurs ajoutées.",
              solution: [
                "(1) Somme des valeurs ajoutées : 50 + 300 + 900 = 1 250 milliards d'euros. PIB = 1 250 + 160 - 10 = 1 400 milliards d'euros.",
                "(2) Agriculture : 50 ÷ 1 250 × 100 = 4 %. Industrie : 300 ÷ 1 250 × 100 = 24 %. Services : 900 ÷ 1 250 × 100 = 72 %.",
                "Vérification : 4 + 24 + 72 = 100 %.",
                "Résultat : PIB de 1 400 milliards d'euros ; les services créent 72 % de la valeur ajoutée.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une petite économie ne produit que deux biens. Année 1 : 100 vélos à 300 € et 1 000 pains à 1 €. Année 2 : 110 vélos à 330 € et 1 000 pains à 1,10 €. (1) Calculez le PIB en valeur de chaque année. (2) Calculez le PIB de l'année 2 aux prix de l'année 1 (PIB en volume). (3) Calculez les taux de croissance en valeur et en volume, et interprétez.",
              hint: "Pour le PIB en volume, multipliez les quantités de l'année 2 par les prix de l'année 1.",
              solution: [
                "(1) Année 1 : 100 × 300 + 1 000 × 1 = 30 000 + 1 000 = 31 000 €. Année 2 : 110 × 330 + 1 000 × 1,10 = 36 300 + 1 100 = 37 400 €.",
                "(2) PIB de l'année 2 aux prix de l'année 1 : 110 × 300 + 1 000 × 1 = 33 000 + 1 000 = 34 000 €.",
                "(3) Croissance en valeur : (37 400 - 31 000) ÷ 31 000 × 100 ≈ 20,6 %. Croissance en volume : (34 000 - 31 000) ÷ 31 000 × 100 ≈ 9,7 %.",
                "Interprétation : le PIB en valeur augmente d'environ 20,6 %, mais une grande partie de cette hausse vient de la hausse des prix (10 % pour chaque bien). La production réelle, mesurée à prix constants, n'augmente que d'environ 9,7 %.",
                "Résultat : croissance d'environ 20,6 % en valeur et de 9,7 % en volume.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : pays A : PIB de 1 500 milliards de dollars, 50 millions d'habitants ; croissance du PIB en volume de 2 % par an, population stable. Pays B : PIB de 3 000 milliards de dollars, 150 millions d'habitants ; croissance du PIB en volume de 3 % par an, population en hausse de 2 % par an. (1) Calculez le PIB par habitant de chaque pays. (2) Calculez le taux de croissance annuel du PIB par habitant de chaque pays. (3) Un journaliste affirme que le pays B est le plus riche et celui dont le niveau de vie progresse le plus vite. Discutez cette affirmation.",
              hint: "Coefficient du PIB par habitant = coefficient du PIB ÷ coefficient de la population.",
              solution: [
                "(1) Pays A : 1 500 milliards ÷ 50 millions = 30 000 dollars par habitant. Pays B : 3 000 milliards ÷ 150 millions = 20 000 dollars par habitant.",
                "(2) Pays A : coefficient 1,02 ÷ 1,00 = 1,02, soit 2 % par an. Pays B : 1,03 ÷ 1,02 ≈ 1,0098, soit environ 1 % par an (approximation : 3 - 2 = 1 %).",
                "(3) Le pays B produit davantage au total (son PIB est deux fois plus élevé) et sa croissance est plus forte (3 % contre 2 %). Mais ces résultats s'expliquent par sa population, trois fois plus nombreuse et en hausse.",
                "Rapporté à la population, le niveau de vie moyen est plus élevé dans le pays A (30 000 contre 20 000 dollars) et il progresse plus vite (2 % contre environ 1 % par an).",
                "Conclusion : l'affirmation est fausse si l'on parle de niveau de vie ; pour comparer la richesse des habitants, il faut utiliser le PIB par habitant et non le PIB total.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "PIB", right: "Somme des valeurs ajoutées des producteurs résidents, corrigée des impôts et subventions sur les produits" },
              { left: "PIB en valeur", right: "PIB calculé aux prix de l'année considérée" },
              { left: "PIB en volume", right: "PIB calculé à prix constants, sans l'effet de la hausse des prix" },
              { left: "Croissance économique", right: "Taux de variation du PIB en volume" },
              { left: "PIB par habitant", right: "Production moyenne par personne, indicateur du niveau de vie moyen" },
              { left: "Récession", right: "Baisse prolongée du PIB en volume" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi le PIB additionne-t-il les valeurs ajoutées plutôt que les chiffres d'affaires ?",
              options: [
                "Pour ne pas compter plusieurs fois les mêmes richesses",
                "Parce que les entreprises ne publient pas leur chiffre d'affaires",
                "Pour exclure la production des administrations",
                "Pour tenir compte de la hausse des prix",
              ],
              answer: 0,
              why: "Les chiffres d'affaires contiennent les consommations intermédiaires, déjà comptées chez les fournisseurs : les additionner compterait plusieurs fois la même richesse.",
            },
            {
              q: "Comment la production d'un lycée public est-elle comptée dans le PIB ?",
              options: [
                "Elle n'est pas comptée, car elle est gratuite",
                "Elle est comptée au prix payé par les familles",
                "Elle est évaluée à son coût de production",
                "Elle est comptée pour le montant des bourses versées aux élèves",
              ],
              answer: 2,
              why: "La production non marchande n'a pas de prix de vente : la comptabilité nationale l'évalue à son coût (salaires, consommations intermédiaires, usure du capital).",
            },
            {
              q: "Le PIB en valeur augmente de 4 % et les prix de 4 %. Comment a évolué le PIB en volume ?",
              options: ["Il a augmenté de 8 %", "Il a augmenté de 4 %", "Il a baissé de 4 %", "Il est resté stable"],
              answer: 3,
              why: "Coefficient du volume = 1,04 ÷ 1,04 = 1 : toute la hausse du PIB en valeur vient de la hausse des prix.",
            },
            {
              q: "Une usine allemande installée en France participe-t-elle au PIB français ?",
              options: [
                "Non, car ses propriétaires sont allemands",
                "Oui, car elle produit sur le territoire français",
                "Seulement si elle exporte sa production vers l'Allemagne",
                "Seulement pour la moitié de sa valeur ajoutée",
              ],
              answer: 1,
              why: "Le PIB est « intérieur » : il compte la production des unités résidentes sur le territoire, quelle que soit la nationalité de leurs propriétaires.",
            },
            {
              q: "Un pays a un PIB de 600 milliards d'euros et 20 millions d'habitants. Quel est son PIB par habitant ?",
              options: ["30 000 €", "3 000 €", "12 000 €", "300 000 €"],
              answer: 0,
              why: "PIB par habitant = 600 000 000 000 ÷ 20 000 000 = 30 000 euros.",
            },
          ],
          trap: "Confondre PIB en valeur et PIB en volume : une hausse du PIB en valeur peut venir uniquement de la hausse des prix. La croissance économique se mesure toujours en volume.",
          method: "Pour passer de la valeur au volume, raisonnez avec les coefficients multiplicateurs (volume = valeur ÷ prix), puis vérifiez avec l'approximation (taux en valeur - taux d'inflation) : les deux résultats doivent être proches.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'limites-pib',
          title: 'Les limites du PIB : activités non marchandes et soutenabilité',
          minutes: 30,
          objectives: [
            "Identifier les activités productives que le PIB ne prend pas en compte (travail domestique, bénévolat, économie souterraine).",
            "Expliquer pourquoi le PIB n'est pas un indicateur du bien-être ni des inégalités.",
            "Connaître les limites écologiques de la croissance et comprendre que le PIB ne mesure pas la soutenabilité.",
            "Présenter des indicateurs complémentaires, comme l'indice de développement humain et l'empreinte écologique.",
          ],
          course: [
            {
              heading: "Des activités productives non comptées",
              paragraphs: [
                "Le PIB ne compte que la production réalisée dans un cadre officiel : la production marchande et la production non marchande des administrations et des associations. Il laisse de côté une grande partie des activités que les ménages réalisent pour eux-mêmes : préparer les repas, faire le ménage, s'occuper des enfants ou d'un parent âgé, bricoler. Ce travail domestique, réalisé majoritairement par les femmes, produit pourtant des services utiles.",
                "Un exemple classique illustre ce paradoxe : si une personne emploie une aide ménagère déclarée, ce service est compté dans le PIB ; si elle fait elle-même son ménage, il n'est pas compté, alors que le service rendu est le même. De même, le bénévolat (entraîner une équipe de football, distribuer des repas dans une association) n'est pas compté, car il n'est pas rémunéré.",
                "L'économie souterraine pose un autre problème : le travail non déclaré (« au noir ») et les activités illégales échappent aux statistiques. La comptabilité nationale cherche à en estimer une partie, mais cette estimation reste fragile.",
              ],
              box: { label: "À retenir", text: "Le PIB ne compte ni le travail domestique, ni le bénévolat, et il ne saisit qu'imparfaitement l'économie souterraine : il sous-estime donc la production réelle d'un pays." },
            },
            {
              heading: "Le PIB ne mesure ni le bien-être ni les inégalités",
              paragraphs: [
                "Le PIB mesure une quantité de production, pas la qualité de la vie. Il ne prend pas en compte le temps libre, la santé, le niveau d'éducation, la qualité des relations sociales ou le sentiment de sécurité, qui contribuent pourtant au bien-être. Deux pays qui ont le même PIB par habitant peuvent offrir des conditions de vie très différentes.",
                "Le PIB comptabilise aussi des dépenses qui ne font que réparer des dégâts : la reconstruction après une tempête, les soins aux victimes d'accidents de la route, le nettoyage d'une pollution. Ces dépenses augmentent le PIB alors qu'elles ne font que compenser une perte de bien-être. Enfin, le PIB par habitant est une moyenne : il ne dit rien de la répartition des revenus. Un PIB par habitant élevé peut cacher de fortes inégalités.",
              ],
            },
            {
              heading: "Les limites écologiques de la croissance",
              paragraphs: [
                "La production utilise des ressources naturelles et rejette des déchets et des polluants. Or le PIB ne tient pas compte de la dégradation de l'environnement : quand une forêt est rasée pour vendre son bois, le PIB augmente, mais rien n'est retiré pour la disparition de la forêt. Le PIB ne mesure pas l'épuisement des ressources épuisables (pétrole, gaz, minerais), ni les émissions de gaz à effet de serre qui provoquent le réchauffement climatique, ni la perte de biodiversité.",
                "Dès 1972, le rapport sur « les limites à la croissance », commandé par le Club de Rome à des chercheurs du MIT (rapport dit Meadows), alertait sur l'impossibilité d'une croissance indéfinie dans un monde aux ressources finies. Aujourd'hui, la question centrale est celle de la soutenabilité : la croissance actuelle permet-elle de répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs ?",
              ],
              box: { label: "Définition", text: "Développement durable (ou soutenable) : développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs (rapport Brundtland, 1987)." },
            },
            {
              heading: "Des indicateurs complémentaires",
              paragraphs: [
                "Pour pallier ces limites, d'autres indicateurs ont été construits. L'indice de développement humain (IDH), créé en 1990 par le Programme des Nations unies pour le développement (PNUD), combine trois dimensions : la santé (espérance de vie à la naissance), l'éducation (durée de scolarisation) et le niveau de vie (revenu national brut par habitant en parités de pouvoir d'achat). Il est compris entre 0 et 1 : plus il est proche de 1, plus le développement humain est élevé.",
                "L'empreinte écologique mesure la surface de terre et de mer biologiquement productive nécessaire pour produire les ressources consommées par une population et absorber ses déchets, notamment son dioxyde de carbone. Elle s'exprime en hectares globaux et se compare à la biocapacité, c'est-à-dire à ce que la planète peut régénérer. Lorsque l'empreinte dépasse la biocapacité, l'humanité consomme plus que ce que la nature reproduit chaque année.",
                "En 2009, le rapport de la commission présidée par l'économiste Joseph Stiglitz, avec Amartya Sen comme conseiller et Jean-Paul Fitoussi comme coordinateur, a recommandé de compléter le PIB par des indicateurs de bien-être, d'inégalités et de soutenabilité. Le PIB reste un bon indicateur de la production, mais il ne doit pas être utilisé seul pour juger du progrès d'une société.",
              ],
              box: { label: "Repère", text: "IDH (PNUD, 1990) : santé, éducation, niveau de vie, entre 0 et 1. Empreinte écologique : surface nécessaire pour produire ce que l'on consomme et absorber ses déchets, en hectares globaux." },
            },
          ],
          keyPoints: [
            "Le PIB ignore le travail domestique et le bénévolat, et saisit mal l'économie souterraine.",
            "Le PIB mesure la production, pas le bien-être : il ne compte ni le temps libre, ni la santé, ni la qualité de vie.",
            "Des dépenses de réparation (accidents, catastrophes, pollutions) augmentent le PIB sans améliorer le bien-être.",
            "Le PIB par habitant est une moyenne : il ne dit rien des inégalités.",
            "Le PIB ignore la dégradation de l'environnement et l'épuisement des ressources : il ne mesure pas la soutenabilité.",
            "Indicateurs complémentaires : IDH (santé, éducation, niveau de vie) et empreinte écologique.",
          ],
          example: {
            statement: "Expliquez pourquoi le PIB d'un pays peut augmenter à la suite d'une grave marée noire, et ce que cet exemple révèle des limites du PIB.",
            solution: [
              "Une marée noire entraîne des dépenses de nettoyage des côtes, de soins aux animaux, de réparation des installations : ces activités sont réalisées par des entreprises et des administrations, elles créent de la valeur ajoutée et sont donc comptées dans le PIB.",
              "Dans le même temps, la pollution détruit une partie du patrimoine naturel (plages, faune, flore) et réduit le bien-être des habitants : cette perte n'est pas retirée du PIB, car le PIB ne mesure pas l'état de l'environnement.",
              "Le PIB peut donc augmenter alors que la situation du pays s'est dégradée.",
              "Cet exemple montre que le PIB mesure une quantité de production et non le bien-être, et qu'il ne tient pas compte de la dégradation du capital naturel.",
              "Réponse : le PIB augmente à cause des dépenses de réparation, mais il ignore les dégâts : il n'est ni un indicateur de bien-être, ni un indicateur de soutenabilité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chacune des activités suivantes est comptée dans le PIB, et justifiez : (a) un plombier répare une fuite et établit une facture ; (b) un parent prépare le dîner de sa famille ; (c) un retraité entraîne bénévolement une équipe de football ; (d) une professeure enseigne dans un collège public ; (e) un étudiant fait du baby-sitting sans le déclarer ; (f) une personne emploie une aide ménagère déclarée.",
              hint: "Le PIB compte la production marchande et la production non marchande officielle ; il ignore la production domestique, le bénévolat et, en principe, le travail non déclaré.",
              solution: [
                "(a) Compté : production marchande déclarée.",
                "(b) Non compté : travail domestique réalisé pour sa propre famille.",
                "(c) Non compté : bénévolat, non rémunéré.",
                "(d) Compté : production non marchande d'une administration, évaluée à son coût.",
                "(e) Non enregistré : travail non déclaré, qui relève de l'économie souterraine (la comptabilité nationale n'en estime qu'une partie).",
                "(f) Compté : service marchand déclaré.",
                "Résultat : (a), (d) et (f) sont comptés ; (b), (c) et (e) ne le sont pas.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le PIB d'un pays passe de 1 000 à 1 020 milliards d'euros en un an. Sur les 20 milliards supplémentaires, 15 milliards correspondent à des dépenses de reconstruction après des inondations et au traitement d'une pollution industrielle. (1) Calculez le taux de croissance du PIB. (2) Quelle part de la hausse du PIB s'explique par ces dépenses de réparation ? (3) Peut-on en conclure que le bien-être des habitants a augmenté de 2 % ?",
              hint: "La part se calcule par 15 ÷ 20 × 100. Demandez-vous si une dépense de réparation améliore la situation par rapport à l'année précédente.",
              solution: [
                "(1) Taux de croissance : (1 020 - 1 000) ÷ 1 000 × 100 = 2 %.",
                "(2) Part : 15 ÷ 20 × 100 = 75 % de la hausse du PIB.",
                "(3) Non. Les trois quarts de la hausse correspondent à des dépenses qui ne font que réparer des dégâts : elles compensent une perte de bien-être (logements détruits, environnement pollué) au lieu de l'améliorer. De plus, le PIB ne mesure ni la pollution elle-même, ni le temps libre, ni la répartition des revenus.",
                "Résultat : croissance de 2 %, dont 75 % liés à des dépenses de réparation ; le bien-être n'a pas nécessairement progressé.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : pays A : PIB par habitant de 60 000 dollars, IDH de 0,90, empreinte écologique de 8 hectares globaux par habitant. Pays B : PIB par habitant de 40 000 dollars, IDH de 0,93, empreinte écologique de 4,5 hectares globaux par habitant. Biocapacité mondiale disponible : 1,6 hectare global par habitant. (1) Combien de planètes faudrait-il si toute l'humanité vivait comme les habitants de chaque pays ? (2) À l'aide du document, montrez que le PIB par habitant ne suffit pas à rendre compte du développement et de la soutenabilité.",
              hint: "Divisez l'empreinte écologique par habitant de chaque pays par la biocapacité disponible par habitant.",
              solution: [
                "(1) Pays A : 8 ÷ 1,6 = 5 planètes. Pays B : 4,5 ÷ 1,6 ≈ 2,8 planètes.",
                "(2) Selon le PIB par habitant, le pays A est le plus riche (60 000 contre 40 000 dollars, soit 1,5 fois plus).",
                "Pourtant, son IDH est plus faible (0,90 contre 0,93) : ses habitants bénéficient en moyenne d'un développement humain un peu moins élevé, par exemple en matière de santé ou d'éducation. Une production plus forte ne se traduit donc pas forcément par un meilleur développement humain.",
                "Surtout, son empreinte écologique est près de deux fois plus élevée (8 contre 4,5 hectares globaux) : son mode de vie, s'il était généralisé, exigerait 5 planètes. Les deux pays dépassent la biocapacité disponible, mais le pays A est beaucoup moins soutenable.",
                "Conclusion : le PIB par habitant mesure la production moyenne, mais il faut le compléter par des indicateurs de développement humain (IDH) et de soutenabilité (empreinte écologique) pour juger du progrès d'un pays.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les limites du PIB.",
            statements: [
              { text: "Le travail domestique est compté dans le PIB.", true: false, why: "Les services que les ménages se rendent à eux-mêmes (ménage, cuisine, garde des enfants) ne sont pas comptés." },
              { text: "Les dépenses de reconstruction après une tempête augmentent le PIB.", true: true, why: "Elles créent de la valeur ajoutée, même si elles ne font que réparer des dégâts." },
              { text: "Un PIB par habitant élevé garantit que tous les habitants ont un niveau de vie élevé.", true: false, why: "C'est une moyenne : elle peut cacher de fortes inégalités de revenus." },
              { text: "Le PIB retire chaque année la valeur des ressources naturelles épuisées.", true: false, why: "Le PIB ne tient pas compte de l'épuisement des ressources ni de la dégradation de l'environnement." },
              { text: "L'IDH combine des indicateurs de santé, d'éducation et de niveau de vie.", true: true, why: "Il associe l'espérance de vie, la durée de scolarisation et le revenu national brut par habitant." },
              { text: "Le bénévolat n'est pas compté dans le PIB.", true: true, why: "Il n'est pas rémunéré et ne donne pas lieu à une production enregistrée." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces activités n'est pas comptée dans le PIB ?",
              options: [
                "Le travail d'une infirmière d'un hôpital public",
                "La vente d'une voiture neuve",
                "Le cours donné par un professeur de lycée public",
                "Le repas préparé par un parent pour sa famille",
              ],
              answer: 3,
              why: "La production domestique n'est pas comptée ; les services publics, eux, sont comptés à leur coût.",
            },
            {
              q: "Pourquoi une catastrophe naturelle peut-elle faire augmenter le PIB ?",
              options: [
                "Parce que la valeur des biens détruits est ajoutée au PIB de l'année",
                "Parce que la reconstruction crée de la valeur ajoutée",
                "Parce que les prix baissent après une catastrophe",
                "Parce que la population diminue",
              ],
              answer: 1,
              why: "Les dépenses de reconstruction sont une production comptée dans le PIB, alors que les destructions n'en sont pas retirées.",
            },
            {
              q: "Que mesure l'empreinte écologique ?",
              options: [
                "Le nombre d'espèces animales et végétales menacées de disparition dans un pays",
                "La part des énergies renouvelables dans la production d'électricité",
                "La surface utile pour produire ce que l'on consomme et absorber ses déchets",
                "Le montant total des taxes environnementales payées chaque année par les entreprises",
              ],
              answer: 2,
              why: "Elle s'exprime en hectares globaux et se compare à la biocapacité de la planète.",
            },
            {
              q: "Quelles sont les trois dimensions de l'IDH ?",
              options: [
                "Santé, éducation, niveau de vie",
                "Production, emploi, prix",
                "Pollution, biodiversité, climat",
                "Revenu, patrimoine, inégalités",
              ],
              answer: 0,
              why: "L'IDH du PNUD combine l'espérance de vie à la naissance, la durée de scolarisation et le revenu national brut par habitant.",
            },
            {
              q: "Que signifie qu'une croissance est soutenable ?",
              options: [
                "Elle est supérieure à 3 % par an",
                "Elle est financée sans emprunt",
                "Elle ne compromet pas la capacité des générations futures à répondre à leurs besoins",
                "Elle profite d'abord aux entreprises exportatrices et aux investisseurs étrangers, qui en tirent l'essentiel des gains",
              ],
              answer: 2,
              why: "C'est la définition du développement durable donnée par le rapport Brundtland en 1987.",
            },
          ],
          trap: "Croire que le PIB mesure le bien-être ou la richesse de chaque habitant : il mesure seulement la production enregistrée, en ignorant le travail domestique, les inégalités et la dégradation de l'environnement.",
          method: "Pour présenter les limites du PIB, classez-les en trois familles et donnez un exemple pour chacune : ce qu'il ne compte pas (travail domestique, bénévolat), ce qu'il compte à tort comme un progrès (dépenses de réparation), ce qu'il ignore (bien-être, inégalités, environnement).",
        },
      ],
    },

    /* ==================================================================== */
    /* LE MARCHÉ : OFFRE, DEMANDE ET PRIX D'ÉQUILIBRE                         */
    /* ==================================================================== */
    {
      id: 'marche-offre-demande',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'quest-ce-marche',
          title: "Qu'est-ce qu'un marché ? Échanges et institutions",
          minutes: 25,
          objectives: [
            "Définir un marché comme le lieu, physique ou non, de rencontre entre offreurs et demandeurs.",
            "Comprendre que l'échange marchand volontaire procure des gains à l'échange aux deux parties.",
            "Savoir que le marché est une institution, qui repose sur des règles.",
            "Savoir qu'un marché est concurrentiel quand les agents sont preneurs de prix.",
          ],
          course: [
            {
              heading: "Le marché : la rencontre d'une offre et d'une demande",
              paragraphs: [
                "Un marché est le lieu, physique ou non, où se rencontrent les offreurs (ceux qui vendent) et les demandeurs (ceux qui achètent) d'un bien ou d'un service, et où se forme un prix. Le marché de fruits et légumes du samedi matin est un marché physique ; un site de vente d'objets d'occasion entre particuliers ou la Bourse, où s'échangent des actions par voie électronique, sont des marchés sans lieu unique.",
                "On parle d'un marché pour chaque bien ou service : le marché des smartphones, le marché des logements à louer dans une ville, le marché des billets d'avion. Il faut bien identifier qui offre et qui demande. Sur le marché du travail, par exemple, ce sont les travailleurs qui offrent leur travail et les employeurs qui le demandent : l'offre d'emploi d'une entreprise correspond donc, en économie, à une demande de travail.",
              ],
              box: { label: "Définition", text: "Marché : lieu, physique ou non, de rencontre entre l'offre et la demande d'un bien ou d'un service, où se forme un prix et où s'échangent des quantités." },
            },
            {
              heading: "Pourquoi échange-t-on ? Les gains à l'échange",
              paragraphs: [
                "Un échange marchand est volontaire : personne n'est obligé d'acheter ni de vendre. Si l'échange a lieu, c'est que chacun pense y gagner. L'acheteur accepte de payer le prix parce que le bien a pour lui une valeur au moins égale à ce prix ; le vendeur accepte de vendre parce que le prix est au moins égal à ce que le bien lui coûte ou à la valeur qu'il lui accorde.",
                "Prenons un exemple (données fictives). Léa est prête à payer au maximum 30 € pour une console d'occasion ; Tom accepte de la vendre au minimum 18 €. S'ils s'accordent sur un prix de 25 €, Léa gagne 30 - 25 = 5 € (elle paie moins que ce qu'elle était prête à payer) et Tom gagne 25 - 18 = 7 € (il reçoit plus que son minimum). Le gain total de l'échange est de 12 €. Tout prix compris entre 18 € et 30 € rend l'échange avantageux pour les deux ; en dehors de cet intervalle, l'échange n'a pas lieu.",
              ],
              box: { label: "À retenir", text: "Un échange volontaire est mutuellement avantageux : l'acheteur gagne la différence entre le prix maximum qu'il était prêt à payer et le prix payé, le vendeur la différence entre le prix reçu et son prix minimum." },
            },
            {
              heading: "Le marché est une institution",
              paragraphs: [
                "Un marché ne fonctionne pas tout seul : c'est une institution, c'est-à-dire un ensemble de règles et d'organisations durables qui encadrent les échanges. Pour échanger, il faut d'abord des droits de propriété clairement définis et protégés : on ne peut vendre que ce que l'on possède légalement, et l'acheteur doit être sûr que le bien lui appartiendra. Il faut aussi des contrats, dont le respect est garanti par la justice, et une monnaie acceptée par tous.",
                "D'autres règles organisent les marchés : normes de qualité et de sécurité des produits, obligation d'informer le consommateur (étiquetage, affichage des prix), interdiction de certains échanges (en France, la vente d'organes humains est interdite), règles de concurrence qui interdisent par exemple aux entreprises de s'entendre sur les prix. En France, l'Autorité de la concurrence peut sanctionner ces ententes.",
                "Ces règles sont produites par l'État, mais aussi par les acteurs eux-mêmes. Sur un site de vente entre particuliers, le paiement sécurisé, la notation des vendeurs et la procédure de réclamation créent la confiance sans laquelle peu de personnes oseraient acheter à un inconnu.",
              ],
              box: { label: "Définition", text: "Institution : ensemble de règles et d'organisations durables qui encadrent les comportements. Le marché est une institution : il repose sur des droits de propriété, des contrats, une monnaie et des règles de concurrence." },
            },
            {
              heading: "Le marché concurrentiel : des agents preneurs de prix",
              paragraphs: [
                "Un marché est concurrentiel lorsque les offreurs et les demandeurs sont si nombreux qu'aucun d'entre eux ne peut, à lui seul, influencer le prix : ils sont preneurs de prix. Sur un grand marché de fruits, si un producteur de pommes demande un prix plus élevé que les autres, les clients achètent ailleurs ; s'il vend moins cher, il perd de l'argent sans raison. Il doit donc accepter le prix du marché.",
                "Les économistes ont construit un modèle, celui de la concurrence pure et parfaite, qui précise ces conditions : un très grand nombre d'offreurs et de demandeurs (atomicité), des produits identiques (homogénéité), une information complète de tous sur les prix et les produits (transparence), et la liberté d'entrer sur le marché ou d'en sortir. À l'opposé, en situation de monopole, une seule entreprise offre le bien : elle peut fixer son prix, elle est faiseuse de prix.",
              ],
              box: { label: "Définition", text: "Preneur de prix : agent qui ne peut pas influencer le prix du marché par ses décisions et doit l'accepter. Un marché est concurrentiel quand tous les agents sont preneurs de prix." },
            },
          ],
          keyPoints: [
            "Un marché est le lieu, physique ou non, de rencontre entre offreurs et demandeurs, où se forme un prix.",
            "Sur le marché du travail, les travailleurs offrent leur travail et les employeurs le demandent.",
            "Un échange volontaire procure des gains aux deux parties : c'est un échange mutuellement avantageux.",
            "Le marché est une institution : droits de propriété, contrats, monnaie, règles de concurrence.",
            "Sur un marché concurrentiel, les agents sont preneurs de prix ; en monopole, l'entreprise fixe son prix.",
          ],
          example: {
            statement: "Sur le marché des logements à louer d'une ville étudiante, identifiez les offreurs, les demandeurs et le prix. Puis citez deux règles qui font de ce marché une institution.",
            solution: [
              "Le bien échangé est un service : l'usage d'un logement pendant une période.",
              "Les offreurs sont les propriétaires qui mettent leur logement en location (particuliers, bailleurs sociaux, résidences étudiantes).",
              "Les demandeurs sont les personnes qui cherchent un logement : étudiants, jeunes actifs, familles.",
              "Le prix est le loyer, généralement mensuel.",
              "Règles : le bail est un contrat écrit qui précise les droits et les devoirs du locataire et du propriétaire ; la loi impose des normes de décence (surface minimale, sécurité) et, dans certaines villes, encadre le niveau des loyers.",
              "Réponse : offreurs = propriétaires, demandeurs = locataires, prix = loyer ; le bail et les normes légales de décence encadrent ce marché.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des marchés suivants, identifiez les offreurs, les demandeurs et le prix : (a) le marché des smartphones ; (b) le marché du travail des boulangers ; (c) le marché des cours particuliers de mathématiques ; (d) le marché des actions d'une entreprise en Bourse.",
              hint: "Demandez-vous qui vend le bien ou le service, et qui l'achète. Pour le travail, ce sont les personnes qui vendent leur travail.",
              solution: [
                "(a) Offreurs : les fabricants et les vendeurs de smartphones. Demandeurs : les consommateurs. Prix : le prix de vente du smartphone.",
                "(b) Offreurs : les boulangers qui cherchent un emploi (ils offrent leur travail). Demandeurs : les boulangeries qui embauchent. Prix : le salaire.",
                "(c) Offreurs : les professeurs et les étudiants qui donnent des cours. Demandeurs : les élèves et leurs familles. Prix : le tarif horaire du cours.",
                "(d) Offreurs : les détenteurs d'actions qui veulent les vendre. Demandeurs : les épargnants et les investisseurs qui veulent en acheter. Prix : le cours de l'action.",
                "Résultat : attention au marché du travail, où l'offre vient des travailleurs et la demande des employeurs.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Inès est prête à payer au maximum 40 € pour un billet de concert. Hugo, qui ne peut plus s'y rendre, accepte de lui revendre son billet au minimum 28 €. (1) Entre quelles limites le prix doit-il se situer pour que l'échange ait lieu ? (2) S'ils s'accordent sur 35 €, calculez le gain de chacun et le gain total. (3) Que se passe-t-il si Hugo exige 45 € ?",
              hint: "Le gain de l'acheteur est la différence entre son prix maximum et le prix payé ; celui du vendeur, la différence entre le prix reçu et son prix minimum.",
              solution: [
                "(1) L'échange a lieu si le prix est compris entre 28 € (minimum de Hugo) et 40 € (maximum d'Inès).",
                "(2) Gain d'Inès : 40 - 35 = 5 €. Gain de Hugo : 35 - 28 = 7 €. Gain total : 5 + 7 = 12 €, égal à 40 - 28.",
                "(3) À 45 €, le prix dépasse ce qu'Inès est prête à payer : elle refuse, et l'échange n'a pas lieu. Aucun des deux ne peut être forcé, puisque l'échange marchand est volontaire.",
                "Résultat : prix compris entre 28 € et 40 € ; à 35 €, gains de 5 € et 7 €, soit 12 € au total.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (cas fictif) : une plateforme de vente d'objets d'occasion entre particuliers impose plusieurs règles. Le paiement passe par la plateforme, qui ne verse l'argent au vendeur qu'une fois l'objet reçu et conforme. Les acheteurs notent les vendeurs après chaque vente, et les notes sont visibles par tous. La vente de contrefaçons et d'objets dangereux est interdite. Les vendeurs fixent librement leur prix et l'acheteur peut faire une offre. À l'aide du document, montrez que ce marché est une institution, puis expliquez pourquoi ces règles favorisent les échanges.",
              hint: "Classez les règles selon ce qu'elles garantissent : les droits de propriété, le respect du contrat, l'information des acheteurs, la sécurité des produits.",
              solution: [
                "Une institution est un ensemble de règles durables qui encadrent les comportements. Le document montre que les échanges sur cette plateforme ne se font pas sans règles.",
                "Le paiement différé garantit l'exécution du contrat : le vendeur n'est payé que s'il livre l'objet promis, et l'acheteur ne paie que pour un objet conforme.",
                "La notation des vendeurs fournit une information sur leur fiabilité : elle réduit le risque de tomber sur un vendeur malhonnête.",
                "L'interdiction des contrefaçons et des objets dangereux protège les droits de propriété (ceux des marques) et la sécurité des acheteurs, comme le ferait la loi sur un marché physique.",
                "Ces règles créent la confiance entre des inconnus qui ne se rencontreront jamais : sans elles, de nombreux acheteurs renonceraient à acheter, par peur d'être trompés, et beaucoup d'échanges mutuellement avantageux n'auraient pas lieu.",
                "Conclusion : la plateforme est un marché organisé par des règles, donc une institution ; ces règles rendent possibles des échanges que la méfiance empêcherait.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Offreur", right: "Agent qui vend un bien ou un service sur un marché" },
              { left: "Demandeur", right: "Agent qui achète un bien ou un service sur un marché" },
              { left: "Preneur de prix", right: "Agent qui ne peut pas influencer le prix et doit l'accepter" },
              { left: "Droit de propriété", right: "Droit reconnu d'utiliser un bien, d'en tirer un revenu et de le vendre" },
              { left: "Monopole", right: "Marché sur lequel une seule entreprise offre le bien" },
              { left: "Atomicité", right: "Très grand nombre d'offreurs et de demandeurs sur un marché" },
            ],
          },
          quiz: [
            {
              q: "Sur le marché du travail, qui sont les offreurs ?",
              options: [
                "Les entreprises qui publient des offres d'emploi",
                "Les travailleurs",
                "L'État, qui fixe le salaire minimum",
                "Les agences de recrutement",
              ],
              answer: 1,
              why: "Les travailleurs offrent leur travail ; les entreprises le demandent, même si l'on parle couramment d'« offres d'emploi ».",
            },
            {
              q: "Pourquoi dit-on que le marché est une institution ?",
              options: [
                "Parce qu'il repose sur des règles durables",
                "Parce qu'il est toujours organisé par l'État",
                "Parce qu'il se tient dans un bâtiment public",
                "Parce que les prix y sont fixés par une autorité centrale",
              ],
              answer: 0,
              why: "Le marché fonctionne grâce à des règles (droits de propriété, contrats, monnaie, concurrence), produites par l'État ou par les acteurs eux-mêmes.",
            },
            {
              q: "Un acheteur est prêt à payer 50 €, le vendeur accepte de vendre à partir de 35 €. Ils s'accordent sur 40 €. Quel est le gain de l'acheteur ?",
              options: ["15 €", "5 €", "40 €", "10 €"],
              answer: 3,
              why: "Gain de l'acheteur = prix maximum - prix payé = 50 - 40 = 10 €. Le vendeur gagne 40 - 35 = 5 €.",
            },
            {
              q: "Que signifie qu'un agent est « preneur de prix » ?",
              options: [
                "Il fixe librement le prix de ses produits",
                "Il achète toujours au prix le plus bas possible",
                "Il ne peut pas influencer le prix du marché",
                "Il reçoit une aide publique pour baisser ses prix",
              ],
              answer: 2,
              why: "Sur un marché concurrentiel, chaque agent est trop petit pour peser sur le prix : il doit accepter le prix du marché.",
            },
            {
              q: "Lequel de ces exemples est une règle qui encadre un marché ?",
              options: [
                "Le goût d'un consommateur pour le chocolat",
                "L'interdiction des ententes sur les prix",
                "La météo qui fait varier la récolte",
                "Le nombre d'habitants d'une ville",
              ],
              answer: 1,
              why: "Les règles de concurrence, comme l'interdiction des ententes, font partie des institutions du marché ; les autres éléments sont des facteurs qui influencent l'offre ou la demande.",
            },
          ],
          trap: "Inverser l'offre et la demande sur le marché du travail : une « offre d'emploi » publiée par une entreprise est, en économie, une demande de travail ; les offreurs de travail sont les travailleurs.",
          method: "Pour analyser n'importe quel marché, répondez toujours à trois questions dans l'ordre : quel est le bien ou le service échangé ? Qui l'offre et qui le demande ? Quel est son prix (prix de vente, loyer, salaire, cours) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'courbes-offre-demande',
          title: "Les courbes d'offre et de demande",
          minutes: 30,
          objectives: [
            "Construire une courbe de demande et une courbe d'offre à partir d'un tableau de données.",
            "Interpréter les courbes d'offre et de demande ainsi que leurs pentes.",
            "Expliquer pourquoi la demande diminue et l'offre augmente quand le prix augmente.",
          ],
          course: [
            {
              heading: "La demande : une fonction décroissante du prix",
              paragraphs: [
                "La demande d'un bien est la quantité de ce bien que les acheteurs souhaitent acheter à chaque niveau de prix, pendant une période donnée, toutes choses égales par ailleurs (revenus, goûts, prix des autres biens inchangés). En général, plus le prix est élevé, plus la quantité demandée est faible : la demande est une fonction décroissante du prix.",
                "Pourquoi ? Chaque acheteur a un prix maximum qu'il est prêt à payer. Quand le prix augmente, ceux pour qui ce prix dépasse leur maximum renoncent à acheter ; d'autres achètent moins ou se reportent sur des biens qui peuvent remplacer celui-ci (des biens substituables : si le prix des pommes augmente, on achète davantage de poires). À l'inverse, une baisse du prix attire de nouveaux acheteurs.",
                "La demande du marché est la somme des demandes individuelles : à chaque prix, on additionne les quantités que chaque acheteur souhaite acheter.",
              ],
              box: { label: "Définition", text: "Demande : quantité d'un bien que les acheteurs souhaitent acheter à chaque prix, toutes choses égales par ailleurs. Elle diminue quand le prix augmente : la courbe de demande est décroissante." },
            },
            {
              heading: "L'offre : une fonction croissante du prix",
              paragraphs: [
                "L'offre d'un bien est la quantité de ce bien que les producteurs souhaitent vendre à chaque niveau de prix, pendant une période donnée, toutes choses égales par ailleurs (coûts de production, techniques, nombre de producteurs inchangés). En général, plus le prix est élevé, plus la quantité offerte est importante : l'offre est une fonction croissante du prix.",
                "Pourquoi ? Un producteur n'accepte de vendre que si le prix couvre au moins ses coûts. Quand le prix augmente, la production devient plus rentable : les producteurs déjà présents produisent davantage, et des producteurs dont les coûts sont plus élevés, qui ne pouvaient pas vendre à bas prix sans perdre d'argent, entrent sur le marché. À l'inverse, si le prix baisse, les producteurs les moins efficaces cessent de vendre.",
              ],
              box: { label: "Définition", text: "Offre : quantité d'un bien que les producteurs souhaitent vendre à chaque prix, toutes choses égales par ailleurs. Elle augmente quand le prix augmente : la courbe d'offre est croissante." },
            },
            {
              heading: "Tracer et lire les courbes",
              paragraphs: [
                "Par convention, les économistes placent le prix sur l'axe vertical (en ordonnée) et la quantité sur l'axe horizontal (en abscisse). Prenons le marché des glaces d'une station balnéaire (données fictives) : à 1 €, les acheteurs demandent 500 glaces par jour et les vendeurs en offrent 100 ; à 2 €, 400 demandées et 200 offertes ; à 3 €, 300 et 300 ; à 4 €, 200 et 400 ; à 5 €, 100 et 500.",
                "En plaçant ces points et en les reliant, on obtient une courbe de demande qui descend de gauche à droite (pente négative) et une courbe d'offre qui monte de gauche à droite (pente positive). La pente indique comment la quantité réagit au prix : ici, chaque hausse de 1 € fait baisser la quantité demandée de 100 glaces et augmenter la quantité offerte de 100 glaces.",
                "Pour lire une courbe, on part d'un prix sur l'axe vertical, on rejoint la courbe horizontalement, puis on descend verticalement jusqu'à l'axe des quantités. On rédige alors une phrase de lecture : « à un prix de 2 €, les acheteurs souhaitent acheter 400 glaces par jour ».",
              ],
              box: { label: "Repère", text: "Prix en ordonnée, quantité en abscisse. Courbe de demande : pente négative (décroissante). Courbe d'offre : pente positive (croissante)." },
            },
            {
              heading: "Se déplacer sur la courbe ou déplacer la courbe",
              paragraphs: [
                "Une variation du prix du bien lui-même se traduit par un déplacement le long de la courbe : si le prix d'une glace passe de 2 € à 3 €, on passe d'un point à un autre de la même courbe de demande, et la quantité demandée passe de 400 à 300.",
                "En revanche, si un autre facteur change (une vague de chaleur, une hausse des revenus, une hausse du prix du lait pour les producteurs), c'est toute la courbe qui se déplace, car à chaque prix les quantités demandées ou offertes changent. Ces déplacements de courbes et leurs effets sur le prix seront étudiés dans le chapitre suivant.",
              ],
              box: { label: "Règle", text: "Variation du prix du bien : déplacement sur la courbe. Variation d'un autre facteur (revenus, goûts, coûts, techniques) : déplacement de la courbe." },
            },
          ],
          keyPoints: [
            "Demande : quantité que les acheteurs souhaitent acheter à chaque prix ; elle diminue quand le prix augmente.",
            "Offre : quantité que les producteurs souhaitent vendre à chaque prix ; elle augmente quand le prix augmente.",
            "Les courbes se tracent avec le prix en ordonnée et la quantité en abscisse.",
            "Pente négative pour la demande, positive pour l'offre ; la pente indique comment la quantité réagit au prix.",
            "Un changement de prix fait bouger sur la courbe ; un changement d'un autre facteur déplace la courbe.",
            "La demande du marché est la somme des demandes individuelles.",
          ],
          example: {
            statement: "Données fictives. Sur le marché des glaces d'une station balnéaire, la demande est : 500 glaces par jour à 1 €, 400 à 2 €, 300 à 3 €, 200 à 4 € et 100 à 5 €. (1) Décrivez la relation entre le prix et la quantité demandée. (2) Calculez le taux de variation de la quantité demandée quand le prix passe de 2 € à 4 €. (3) Expliquez cette relation.",
            solution: [
              "(1) Quand le prix augmente, la quantité demandée diminue : chaque hausse de 1 € fait baisser la quantité demandée de 100 glaces par jour. La courbe de demande est décroissante.",
              "(2) Taux de variation : (200 - 400) ÷ 400 × 100 = -50 %. Quand le prix double, la quantité demandée est divisée par deux.",
              "(3) Plus le prix augmente, plus nombreux sont les vacanciers pour qui il dépasse le prix maximum qu'ils sont prêts à payer : ils renoncent à la glace ou choisissent un autre produit (une boisson fraîche, par exemple).",
              "Réponse : la demande est décroissante ; entre 2 € et 4 €, la quantité demandée baisse de 50 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Marché des places de cinéma d'une ville, par semaine. À 6 € : 5 000 places demandées, 2 000 offertes. À 8 € : 4 000 demandées, 3 000 offertes. À 10 € : 3 000 demandées, 4 000 offertes. À 12 € : 2 000 demandées, 5 000 offertes. (1) Quelle quantité les spectateurs demandent-ils à 8 € ? (2) Quelle quantité les cinémas offrent-ils à 12 € ? (3) Les courbes d'offre et de demande sont-elles croissantes ou décroissantes ?",
              hint: "Lisez le tableau ligne par ligne, puis regardez comment évoluent les quantités quand le prix augmente.",
              solution: [
                "(1) À 8 €, les spectateurs demandent 4 000 places par semaine.",
                "(2) À 12 €, les cinémas offrent 5 000 places par semaine.",
                "(3) Quand le prix augmente, la quantité demandée diminue (de 5 000 à 2 000) : la courbe de demande est décroissante. La quantité offerte augmente (de 2 000 à 5 000) : la courbe d'offre est croissante.",
                "Résultat : 4 000 places demandées à 8 €, 5 000 offertes à 12 € ; demande décroissante, offre croissante.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Trois amis achètent des barres de céréales chaque semaine. À 1 € : Ana en achète 4, Ben 3, Chloé 5. À 2 € : Ana 3, Ben 2, Chloé 3. À 3 € : Ana 2, Ben 1, Chloé 2. À 4 € : Ana 1, Ben 0, Chloé 0. (1) Calculez la demande totale de ce groupe à chaque prix. (2) Décrivez la courbe de demande obtenue. (3) Expliquez pourquoi Ben n'achète plus rien à 4 €.",
              hint: "La demande du marché s'obtient en additionnant, à chaque prix, les quantités demandées par chaque acheteur.",
              solution: [
                "(1) À 1 € : 4 + 3 + 5 = 12 barres. À 2 € : 3 + 2 + 3 = 8 barres. À 3 € : 2 + 1 + 2 = 5 barres. À 4 € : 1 + 0 + 0 = 1 barre.",
                "(2) La quantité demandée diminue à chaque hausse du prix (12, 8, 5, 1) : la courbe de demande du groupe est décroissante, de pente négative.",
                "(3) À 4 €, le prix dépasse le prix maximum que Ben est prêt à payer pour une barre de céréales : il renonce à acheter, ou se reporte sur un autre en-cas moins cher.",
                "Résultat : demande totale de 12, 8, 5 et 1 barres ; elle diminue quand le prix augmente.",
              ],
            },
            {
              level: 3,
              statement: "Données fictives. Sur le marché d'un jeu de société, la quantité demandée est Qd = 800 - 20P et la quantité offerte est Qo = 30P - 150, où P est le prix en euros (Qo est nulle si ce calcul donne un résultat négatif). (1) Calculez les quantités demandées et offertes pour P = 10 € et P = 20 €. (2) Interprétez les coefficients -20 et 30. (3) À partir de quel prix les producteurs commencent-ils à offrir ce jeu ? Comment l'expliquer ? (4) Quel est le signe de la pente de chaque courbe ?",
              hint: "Remplacez P par sa valeur dans chaque équation. Pour la question (3), cherchez le prix pour lequel Qo = 0.",
              solution: [
                "(1) Pour P = 10 : Qd = 800 - 200 = 600 ; Qo = 300 - 150 = 150. Pour P = 20 : Qd = 800 - 400 = 400 ; Qo = 600 - 150 = 450.",
                "(2) Le coefficient -20 signifie que chaque hausse de 1 € du prix réduit la quantité demandée de 20 jeux. Le coefficient 30 signifie que chaque hausse de 1 € augmente la quantité offerte de 30 jeux.",
                "(3) Qo = 0 lorsque 30P - 150 = 0, soit P = 150 ÷ 30 = 5 €. En dessous de 5 €, le prix ne couvre les coûts d'aucun producteur : personne n'accepte de vendre. Au-dessus, des producteurs de plus en plus nombreux trouvent la production rentable.",
                "(4) La courbe de demande a une pente négative (la quantité demandée baisse quand le prix monte) et la courbe d'offre une pente positive (la quantité offerte monte avec le prix).",
                "Résultat : à 10 €, 600 jeux demandés et 150 offerts ; à 20 €, 400 demandés et 450 offerts ; l'offre commence à 5 €.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les courbes d'offre et de demande.",
            statements: [
              { text: "En général, la quantité demandée d'un bien augmente quand son prix augmente.", true: false, why: "C'est l'inverse : quand le prix augmente, la quantité demandée diminue, la courbe de demande est décroissante." },
              { text: "La courbe d'offre a une pente positive.", true: true, why: "Plus le prix est élevé, plus la production est rentable et plus les producteurs veulent vendre." },
              { text: "Par convention, on place le prix sur l'axe horizontal.", true: false, why: "Les économistes placent le prix en ordonnée (axe vertical) et la quantité en abscisse." },
              { text: "Une hausse du prix du bien entraîne un déplacement de toute la courbe de demande.", true: false, why: "Une variation du prix du bien entraîne un déplacement le long de la courbe, pas un déplacement de la courbe." },
              { text: "La demande du marché est la somme des demandes individuelles.", true: true, why: "À chaque prix, on additionne les quantités que chaque acheteur souhaite acheter." },
              { text: "Une hausse du prix peut attirer de nouveaux producteurs sur le marché.", true: true, why: "Des producteurs aux coûts plus élevés deviennent rentables et se mettent à offrir le bien." },
            ],
          },
          quiz: [
            {
              q: "Que représente la courbe de demande ?",
              options: [
                "Les quantités vendues par chaque entreprise",
                "Les prix fixés par les producteurs",
                "Les quantités que les acheteurs souhaitent acheter à chaque prix",
                "L'évolution du prix moyen d'un bien au fil des années, mois après mois",
              ],
              answer: 2,
              why: "La courbe de demande associe à chaque prix la quantité que les acheteurs souhaitent acheter, toutes choses égales par ailleurs.",
            },
            {
              q: "Pourquoi la courbe d'offre est-elle croissante ?",
              options: [
                "Parce que les consommateurs achètent plus quand le prix monte",
                "Parce que l'État oblige les entreprises à produire",
                "Parce que les coûts baissent quand on produit plus",
                "Parce qu'un prix plus élevé rend la production plus rentable",
              ],
              answer: 3,
              why: "Un prix plus élevé permet de couvrir davantage de coûts : les producteurs présents produisent plus et de nouveaux entrent sur le marché.",
            },
            {
              q: "Le prix d'un bien passe de 3 € à 4 €. Que se passe-t-il sur le graphique ?",
              options: [
                "On se déplace le long de la courbe de demande",
                "La courbe de demande se déplace vers la droite",
                "La courbe de demande se déplace vers la gauche",
                "La courbe d'offre disparaît",
              ],
              answer: 0,
              why: "Une variation du prix du bien lui-même fait passer d'un point à un autre de la même courbe.",
            },
            {
              q: "La demande d'un bien est Qd = 500 - 25P. Quelle est la quantité demandée à P = 8 € ?",
              options: ["700", "300", "200", "475"],
              answer: 1,
              why: "Qd = 500 - 25 × 8 = 500 - 200 = 300.",
            },
            {
              q: "Sur un graphique offre-demande, que trouve-t-on sur l'axe horizontal ?",
              options: ["Le prix", "Le temps", "Le revenu des ménages", "La quantité"],
              answer: 3,
              why: "Par convention, la quantité est en abscisse (axe horizontal) et le prix en ordonnée (axe vertical).",
            },
          ],
          trap: "Confondre déplacement sur la courbe et déplacement de la courbe : une variation du prix du bien fait seulement glisser le long de la courbe ; seul un autre facteur (revenus, goûts, coûts) déplace la courbe elle-même.",
          method: "Pour tracer des courbes à partir d'un tableau, placez toujours le prix en ordonnée et la quantité en abscisse, graduez régulièrement les axes, placez les points puis vérifiez le sens : la demande doit descendre, l'offre doit monter. Si ce n'est pas le cas, vous avez sans doute inversé les axes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'equilibre-marche',
          title: "L'équilibre du marché et la formation du prix",
          minutes: 35,
          objectives: [
            "Comprendre comment la confrontation de l'offre et de la demande détermine l'équilibre sur un marché concurrentiel.",
            "Déterminer graphiquement et par le calcul le prix et la quantité d'équilibre.",
            "Expliquer le mécanisme d'ajustement en cas d'excédent d'offre ou d'excédent de demande.",
            "Expliquer le rôle du prix comme signal sur un marché.",
          ],
          course: [
            {
              heading: "Le prix d'équilibre : quand offre et demande coïncident",
              paragraphs: [
                "Sur un marché concurrentiel, le prix se forme par la confrontation de l'offre et de la demande. Le prix d'équilibre est le prix pour lequel la quantité offerte est égale à la quantité demandée : tous les acheteurs prêts à payer ce prix trouvent un vendeur, et tous les vendeurs prêts à vendre à ce prix trouvent un acheteur. La quantité échangée à ce prix est la quantité d'équilibre.",
                "Graphiquement, l'équilibre se situe à l'intersection de la courbe d'offre et de la courbe de demande. Reprenons le marché des glaces (données fictives) : à 3 €, les acheteurs demandent 300 glaces par jour et les vendeurs en offrent 300. Le prix d'équilibre est donc 3 € et la quantité d'équilibre 300 glaces par jour.",
              ],
              box: { label: "Définition", text: "Prix d'équilibre : prix pour lequel la quantité offerte est égale à la quantité demandée. Graphiquement, il se lit à l'intersection des courbes d'offre et de demande." },
            },
            {
              heading: "Le mécanisme d'ajustement",
              paragraphs: [
                "Si le prix est supérieur au prix d'équilibre, la quantité offerte dépasse la quantité demandée : il y a un excédent d'offre. À 4 € la glace, les vendeurs veulent en vendre 400 mais les acheteurs n'en demandent que 200 : 200 glaces restent invendues. Les vendeurs, en concurrence, baissent alors leurs prix pour écouler leurs stocks. La baisse du prix augmente la quantité demandée et réduit la quantité offerte, jusqu'à ce que l'excédent disparaisse, au prix d'équilibre.",
                "Si le prix est inférieur au prix d'équilibre, la quantité demandée dépasse la quantité offerte : il y a un excédent de demande, c'est-à-dire une pénurie. À 2 € la glace, 400 glaces sont demandées mais seulement 200 offertes : des files d'attente se forment et des clients repartent sans glace. Les acheteurs sont prêts à payer davantage, et les vendeurs constatent qu'ils peuvent augmenter leurs prix. La hausse du prix réduit la quantité demandée et augmente la quantité offerte, jusqu'à l'équilibre.",
                "Le prix d'équilibre est donc le seul prix stable : à tout autre prix, le comportement des offreurs ou des demandeurs pousse le prix vers lui.",
              ],
              box: { label: "Règle", text: "Prix supérieur au prix d'équilibre : excédent d'offre (invendus), le prix baisse. Prix inférieur au prix d'équilibre : excédent de demande (pénurie), le prix monte. Le prix tend vers le prix d'équilibre." },
            },
            {
              heading: "Calculer l'équilibre",
              paragraphs: [
                "Lorsque l'offre et la demande sont données par des équations, on trouve l'équilibre en écrivant que la quantité offerte est égale à la quantité demandée. Sur le marché des glaces, la demande est Qd = 600 - 100P et l'offre Qo = 100P (P en euros, quantités par jour).",
                "À l'équilibre, Qd = Qo, donc 600 - 100P = 100P, soit 600 = 200P et P = 3 €. On calcule ensuite la quantité d'équilibre en remplaçant P par 3 dans l'une des équations : Qd = 600 - 300 = 300 glaces. On vérifie avec l'autre équation : Qo = 100 × 3 = 300. On peut aussi calculer la valeur des échanges : 3 × 300 = 900 € par jour.",
              ],
              box: { label: "Formule", text: "À l'équilibre : Qd = Qo. On résout l'équation pour trouver le prix d'équilibre, puis on calcule la quantité d'équilibre et on vérifie avec l'autre équation." },
            },
            {
              heading: "Le prix, un signal qui coordonne les décisions",
              paragraphs: [
                "Le prix transmet une information à tous les acteurs du marché. Un prix qui monte signale que le bien devient rare par rapport à la demande : il incite les producteurs à produire davantage et les consommateurs à économiser ce bien ou à le remplacer. Un prix qui baisse signale au contraire une abondance relative. Sans se concerter, des millions d'acheteurs et de vendeurs ajustent ainsi leurs décisions grâce au prix.",
                "Ce résultat repose cependant sur un modèle, celui du marché concurrentiel où tous les agents sont preneurs de prix, et sur le raisonnement toutes choses égales par ailleurs. Dans la réalité, certains marchés sont dominés par quelques entreprises, l'information est imparfaite, et l'État intervient parfois (taxes, subventions, prix réglementés), comme vous le verrez dans le chapitre suivant.",
              ],
              box: { label: "À retenir", text: "Le prix est un signal de rareté : sa hausse incite à produire plus et à consommer moins, sa baisse l'inverse. Il permet de coordonner les décisions décentralisées des acheteurs et des vendeurs." },
            },
          ],
          keyPoints: [
            "Le prix d'équilibre égalise quantité offerte et quantité demandée ; il se lit à l'intersection des deux courbes.",
            "Prix trop élevé : excédent d'offre (invendus), le prix baisse.",
            "Prix trop bas : excédent de demande (pénurie), le prix monte.",
            "Par le calcul : on pose Qd = Qo, on trouve P, puis Q, et on vérifie avec l'autre équation.",
            "Le prix est un signal de rareté qui coordonne les décisions des acheteurs et des vendeurs.",
            "Ce résultat suppose un marché concurrentiel, où les agents sont preneurs de prix.",
          ],
          example: {
            statement: "Données fictives. Sur le marché des glaces d'une station balnéaire, Qd = 600 - 100P et Qo = 100P (P en euros, quantités par jour). (1) Calculez le prix et la quantité d'équilibre. (2) Que se passe-t-il si les vendeurs fixent un prix de 4 € ? (3) Décrivez le retour à l'équilibre.",
            solution: [
              "(1) À l'équilibre, Qd = Qo : 600 - 100P = 100P, donc 600 = 200P et P = 3 €.",
              "Quantité d'équilibre : Qd = 600 - 100 × 3 = 300 glaces. Vérification : Qo = 100 × 3 = 300.",
              "(2) À 4 € : Qd = 600 - 400 = 200 et Qo = 400. La quantité offerte dépasse la quantité demandée de 400 - 200 = 200 glaces : c'est un excédent d'offre.",
              "(3) Les vendeurs, qui ont des invendus, baissent leurs prix. La baisse du prix augmente la quantité demandée et réduit la quantité offerte, jusqu'à ce qu'elles soient égales.",
              "Réponse : équilibre à 3 € et 300 glaces par jour ; à 4 €, excédent d'offre de 200 glaces, et le prix baisse jusqu'à 3 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Marché des tomates d'une ville, en kilogrammes par jour. À 1 € : 900 kg demandés, 300 kg offerts. À 1,50 € : 750 demandés, 450 offerts. À 2 € : 600 demandés, 600 offerts. À 2,50 € : 450 demandés, 750 offerts. À 3 € : 300 demandés, 900 offerts. (1) Quel est le prix d'équilibre ? Quelle est la quantité d'équilibre ? (2) Que se passe-t-il à 2,50 € ? (3) Et à 1,50 € ?",
              hint: "Cherchez la ligne du tableau où la quantité offerte est égale à la quantité demandée, puis comparez les deux quantités aux autres prix.",
              solution: [
                "(1) À 2 €, la quantité offerte (600 kg) est égale à la quantité demandée (600 kg) : le prix d'équilibre est 2 € le kilo et la quantité d'équilibre 600 kg par jour.",
                "(2) À 2,50 €, 750 kg sont offerts et 450 kg demandés : excédent d'offre de 750 - 450 = 300 kg. Le prix va baisser.",
                "(3) À 1,50 €, 750 kg sont demandés et 450 kg offerts : excédent de demande (pénurie) de 300 kg. Le prix va monter.",
                "Résultat : équilibre à 2 € et 600 kg ; excédent d'offre de 300 kg à 2,50 €, excédent de demande de 300 kg à 1,50 €.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Sur le marché d'un modèle de casque audio, Qd = 1 000 - 50P et Qo = 150P - 200 (P en euros, quantités par mois). (1) Calculez le prix et la quantité d'équilibre. (2) Calculez la valeur des échanges à l'équilibre. (3) Calculez l'écart entre l'offre et la demande pour P = 8 € et dites de quel type de déséquilibre il s'agit.",
              hint: "Posez Qd = Qo et résolvez l'équation : regroupez les termes en P d'un côté et les nombres de l'autre.",
              solution: [
                "(1) 1 000 - 50P = 150P - 200, donc 1 000 + 200 = 150P + 50P, soit 1 200 = 200P et P = 6 €.",
                "Quantité d'équilibre : Qd = 1 000 - 50 × 6 = 1 000 - 300 = 700 casques. Vérification : Qo = 150 × 6 - 200 = 900 - 200 = 700.",
                "(2) Valeur des échanges : 6 × 700 = 4 200 € par mois.",
                "(3) À 8 € : Qd = 1 000 - 400 = 600 et Qo = 1 200 - 200 = 1 000. L'offre dépasse la demande de 1 000 - 600 = 400 casques : c'est un excédent d'offre, car le prix est supérieur au prix d'équilibre.",
                "Résultat : équilibre à 6 € et 700 casques par mois (4 200 € d'échanges) ; à 8 €, excédent d'offre de 400 casques.",
              ],
            },
            {
              level: 3,
              statement: "Étude d'un document. Document (données fictives) : sur le marché des places pour les matchs d'un club de basket, la demande est Qd = 5 000 - 100P et l'offre Qo = 150P - 1 250 (P en euros, places par match). En début de saison, les vendeurs proposent les places à 20 €. (1) Calculez les quantités offertes et demandées à 20 € et caractérisez la situation. (2) Calculez le prix et la quantité d'équilibre. (3) À l'aide de vos calculs, expliquez comment le marché passe de la situation de départ à l'équilibre, et ce que signale la hausse du prix.",
              hint: "Comparez Qd et Qo à 20 €, puis résolvez Qd = Qo. Pour l'explication, décrivez le comportement des acheteurs et des vendeurs étape par étape.",
              solution: [
                "(1) À 20 € : Qd = 5 000 - 2 000 = 3 000 places et Qo = 3 000 - 1 250 = 1 750 places. La demande dépasse l'offre de 3 000 - 1 750 = 1 250 places : il y a un excédent de demande, une pénurie.",
                "(2) À l'équilibre : 5 000 - 100P = 150P - 1 250, donc 6 250 = 250P et P = 25 €. Quantité : Qd = 5 000 - 2 500 = 2 500 places. Vérification : Qo = 150 × 25 - 1 250 = 3 750 - 1 250 = 2 500.",
                "(3) À 20 €, 1 250 spectateurs prêts à acheter ne trouvent pas de place. Comme ils sont prêts à payer plus, les vendeurs peuvent augmenter leurs prix sans perdre de clients.",
                "La hausse du prix a deux effets : elle réduit la quantité demandée (certains spectateurs renoncent, car le prix dépasse leur prix maximum) et elle augmente la quantité offerte (davantage de détenteurs de places acceptent de les revendre, et le club a intérêt à ouvrir des places supplémentaires). L'excédent de demande se réduit jusqu'à disparaître à 25 €, où 2 500 places sont offertes et demandées.",
                "La hausse du prix signale la rareté des places : elle incite les vendeurs à en offrir davantage et les acheteurs à limiter leur demande.",
                "Conclusion : la pénurie initiale de 1 250 places pousse le prix de 20 € à 25 € (hausse de 25 %), prix auquel le marché est à l'équilibre avec 2 500 places échangées par match.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du retour à l'équilibre lorsque le prix est trop élevé.",
            items: [
              "Le prix est supérieur au prix d'équilibre",
              "La quantité offerte dépasse la quantité demandée : des produits restent invendus",
              "Les vendeurs, en concurrence, baissent leurs prix pour écouler leurs stocks",
              "La baisse du prix augmente la quantité demandée et réduit la quantité offerte",
              "L'excédent d'offre se réduit progressivement",
              "Le prix atteint le prix d'équilibre, où quantité offerte et quantité demandée sont égales",
            ],
          },
          quiz: [
            {
              q: "Comment définit-on le prix d'équilibre ?",
              options: [
                "Le prix pour lequel quantité offerte et quantité demandée sont égales",
                "Le prix le plus bas possible pour les consommateurs",
                "Le prix fixé par l'État pour protéger les consommateurs",
                "Le prix qui permet à chaque vendeur de réaliser le plus grand chiffre d'affaires possible",
              ],
              answer: 0,
              why: "Au prix d'équilibre, tous ceux qui veulent acheter à ce prix trouvent un vendeur et inversement : il se lit à l'intersection des courbes.",
            },
            {
              q: "À un prix inférieur au prix d'équilibre, quelle situation observe-t-on ?",
              options: [
                "Un excédent d'offre",
                "Un excédent de demande",
                "Un équilibre stable",
                "Une baisse de la quantité demandée",
              ],
              answer: 1,
              why: "À un prix trop bas, les acheteurs demandent plus que ce que les vendeurs offrent : c'est une pénurie, qui pousse le prix à la hausse.",
            },
            {
              q: "Qd = 900 - 30P et Qo = 60P. Quel est le prix d'équilibre ?",
              options: ["30 €", "15 €", "10 €", "20 €"],
              answer: 2,
              why: "900 - 30P = 60P, donc 900 = 90P et P = 10 €. La quantité d'équilibre est 600.",
            },
            {
              q: "En cas d'excédent d'offre, que font en général les vendeurs ?",
              options: [
                "Ils augmentent leurs prix",
                "Ils produisent davantage",
                "Ils attendent que la demande augmente sans changer leur prix",
                "Ils baissent leurs prix",
              ],
              answer: 3,
              why: "Pour écouler leurs invendus, les vendeurs en concurrence baissent leurs prix, ce qui rapproche le marché de l'équilibre.",
            },
            {
              q: "Que signale une hausse du prix d'un bien sur un marché concurrentiel ?",
              options: [
                "Que le bien est devenu moins utile",
                "Que le bien est devenu plus rare par rapport à la demande",
                "Que l'État a augmenté les impôts sur tous les biens et services",
                "Que les producteurs se sont entendus",
              ],
              answer: 1,
              why: "Le prix est un signal de rareté : sa hausse incite à produire davantage et à consommer moins.",
            },
          ],
          trap: "Inverser les deux déséquilibres : un prix trop élevé crée un excédent d'offre (des invendus, le prix baisse), un prix trop bas crée un excédent de demande (une pénurie, le prix monte).",
          method: "Pour un calcul d'équilibre, écrivez Qd = Qo, résolvez l'équation, calculez la quantité avec une équation puis vérifiez avec l'autre : si vous ne trouvez pas la même quantité, il y a une erreur. Pour un déséquilibre, calculez Qd et Qo au prix donné et nommez la situation (excédent d'offre ou de demande).",
        },
      ],
    },
  ],
}
