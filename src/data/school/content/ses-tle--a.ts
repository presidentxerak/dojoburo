import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-tle',
  chapters: [
    /* ==================================================================== */
    /* LES SOURCES ET LES DÉFIS DE LA CROISSANCE                              */
    /* ==================================================================== */
    {
      id: 'croissance',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sources-de-la-croissance',
          title: 'Les sources de la croissance : facteurs et productivité globale',
          minutes: 30,
          objectives: [
            "Définir la croissance économique et calculer un taux de croissance du PIB en volume.",
            "Distinguer les deux sources de la croissance : l'accumulation des facteurs de production et l'accroissement de la productivité globale des facteurs.",
            "Comprendre le lien entre le progrès technique et l'accroissement de la productivité globale des facteurs.",
          ],
          course: [
            {
              heading: "La croissance économique : définition et mesure",
              paragraphs: [
                "La croissance économique désigne l'augmentation soutenue, sur une longue période, de la production de biens et de services d'une économie. On la mesure par le taux de variation du produit intérieur brut (PIB) en volume, c'est-à-dire calculé à prix constants, afin de neutraliser l'effet de la hausse des prix. Le PIB est la somme des valeurs ajoutées produites sur le territoire national pendant une année (à laquelle on ajoute les impôts sur les produits et dont on retire les subventions sur les produits).",
                "Il ne faut pas confondre la croissance, phénomène de long terme, avec l'expansion, qui désigne une phase de hausse de la production au sein des fluctuations de court terme (la conjoncture). Pour comparer les niveaux de vie entre pays ou dans le temps, on rapporte le PIB à la population : c'est le PIB par habitant.",
                "De petits écarts de taux de croissance produisent, cumulés sur longue période, des écarts considérables. Avec une croissance de 2 % par an, le PIB double en 35 ans environ (1,02 puissance 35 ≈ 2,0) ; avec une croissance de 1 % par an, il lui faut environ 70 ans pour doubler.",
              ],
              box: { label: "Formule", text: "Taux de croissance du PIB (en %) = (PIB en volume de l'année n - PIB en volume de l'année n-1) ÷ PIB en volume de l'année n-1 × 100." },
            },
            {
              heading: "L'accumulation des facteurs de production",
              paragraphs: [
                "Pour produire, une économie combine deux grands facteurs de production. Le facteur travail correspond à la quantité de travail mobilisée, mesurée en nombre d'heures travaillées : elle dépend de la population active occupée et de la durée du travail. Le facteur capital désigne le capital fixe (ou capital physique) : bâtiments, machines, équipements, logiciels. Il s'accroît grâce à l'investissement, mesuré par la formation brute de capital fixe (FBCF).",
                "Une économie peut donc croître parce qu'elle utilise davantage de facteurs : davantage d'heures de travail, davantage de machines. On parle alors de croissance extensive. Mais cette source bute sur une limite. Selon le modèle de Robert Solow (1956), les rendements du capital sont décroissants : à quantité de travail donnée, chaque machine supplémentaire accroît de moins en moins la production. Imaginez un bureau de cinq personnes : un cinquième ordinateur est très utile, un dixième ne sert presque à rien.",
                "Si la croissance ne reposait que sur l'accumulation du capital, la croissance du PIB par habitant finirait donc par s'arrêter. Il faut une autre source pour expliquer qu'elle se poursuive depuis deux siècles dans les pays développés.",
              ],
              box: { label: "Définition", text: "La croissance extensive résulte de l'augmentation de la quantité de facteurs de production utilisés (travail et capital). La croissance intensive résulte de l'amélioration de l'efficacité de ces facteurs, c'est-à-dire de gains de productivité." },
            },
            {
              heading: "La productivité globale des facteurs et le progrès technique",
              paragraphs: [
                "La productivité mesure l'efficacité de la combinaison productive. La productivité apparente du travail rapporte la production à la quantité de travail utilisée (par travailleur ou par heure). La productivité apparente du capital rapporte la production au capital utilisé. On les dit « apparentes » car chacune attribue toute la production à un seul facteur, alors que les deux facteurs y contribuent ensemble.",
                "La productivité globale des facteurs (PGF) rapporte la production à l'ensemble des facteurs utilisés. Elle mesure la part de la croissance qui ne s'explique pas par l'augmentation des quantités de travail et de capital. On la calcule comme un résidu : on retire de la croissance du PIB la contribution du travail et celle du capital. En étudiant l'économie américaine de la première moitié du XXe siècle, Solow (1957) a montré que l'essentiel de la hausse de la production par heure de travail provenait de ce résidu.",
                "Ce résidu traduit le progrès technique au sens large : innovations de produits et de procédés, meilleure organisation du travail, hausse de la qualification de la main-d'œuvre, amélioration des infrastructures. Grâce au progrès technique, on produit davantage avec la même quantité de facteurs. Par exemple, un logiciel de gestion des stocks permet à un entrepôt de traiter plus de commandes avec le même personnel et les mêmes bâtiments.",
              ],
              box: { label: "Formule", text: "Taux de croissance du PIB ≈ contribution du travail + contribution du capital + contribution de la PGF. La contribution de la PGF se calcule donc comme un résidu : croissance du PIB - contribution du travail - contribution du capital (en points de pourcentage)." },
            },
            {
              heading: "Pourquoi le progrès technique est-il la source décisive ?",
              paragraphs: [
                "Contrairement à l'accumulation des facteurs, le progrès technique ne se heurte pas aux rendements décroissants : il rend plus efficaces à la fois le travail et le capital déjà installé. C'est pourquoi il constitue, sur longue période, la principale source de la hausse du PIB par habitant. La forte croissance des pays d'Europe de l'Ouest pendant les Trente Glorieuses reposait ainsi largement sur des gains de productivité élevés, liés notamment au rattrapage technologique des États-Unis.",
                "Les gains de productivité se répartissent de plusieurs façons : hausse des salaires, baisse des prix, hausse des profits (qui financent de nouveaux investissements), réduction du temps de travail, hausse des recettes publiques. Chacune de ces affectations alimente la demande (consommation, investissement), ce qui soutient à son tour la production : on parle de cercle vertueux de la croissance.",
              ],
              box: { label: "À retenir", text: "Deux sources de croissance : plus de facteurs (croissance extensive, limitée par les rendements décroissants) ou des facteurs plus efficaces (croissance intensive, portée par le progrès technique et mesurée par la PGF)." },
            },
          ],
          keyPoints: [
            "La croissance économique est l'augmentation durable du PIB en volume ; on la mesure par son taux de variation annuel.",
            "Facteur travail (heures travaillées) et facteur capital (capital fixe, accru par la FBCF) sont les deux facteurs de production.",
            "Croissance extensive : plus de facteurs. Croissance intensive : des facteurs plus productifs.",
            "Les rendements du capital sont décroissants : l'accumulation seule ne peut pas entretenir la croissance par habitant.",
            "La PGF est la part de la croissance non expliquée par la hausse des facteurs ; elle se calcule comme un résidu et traduit le progrès technique.",
            "Les gains de productivité, répartis en salaires, baisse des prix, profits ou temps libre, nourrissent la demande et la croissance.",
          ],
          example: {
            statement: "Dans un pays, le PIB en volume a augmenté de 2,5 % en un an. La contribution du facteur travail est de 0,4 point de pourcentage et celle du facteur capital de 0,9 point. Calculez la contribution de la productivité globale des facteurs à la croissance, puis la part de la croissance qu'elle explique, et interprétez.",
            solution: [
              "On part de la décomposition : croissance du PIB = contribution du travail + contribution du capital + contribution de la PGF.",
              "Contribution de la PGF = 2,5 - 0,4 - 0,9 = 1,2 point de pourcentage.",
              "Part de la croissance expliquée par la PGF = 1,2 ÷ 2,5 × 100 = 48 %.",
              "Vérification : 0,4 + 0,9 + 1,2 = 2,5. La somme des contributions retrouve bien le taux de croissance.",
              "Interprétation : près de la moitié de la croissance ne vient pas de l'utilisation de facteurs supplémentaires mais d'une meilleure efficacité de leur combinaison, c'est-à-dire du progrès technique au sens large. Réponse : 1,2 point, soit 48 % de la croissance.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le PIB en volume d'un pays s'élève à 1 800 milliards d'euros en 2023 et à 1 836 milliards d'euros en 2024. (1) Calculez le taux de croissance entre 2023 et 2024. (2) On prévoit une croissance de 1 % en 2025. Quel serait le PIB en volume de 2025 ?",
              hint: "Appliquez la formule du taux de variation, puis multipliez le PIB de 2024 par le coefficient multiplicateur 1,01.",
              solution: [
                "(1) Taux de croissance = (1 836 - 1 800) ÷ 1 800 × 100 = 36 ÷ 1 800 × 100 = 2 %.",
                "(2) Une hausse de 1 % correspond à un coefficient multiplicateur de 1,01.",
                "PIB 2025 = 1 836 × 1,01 = 1 854,36 milliards d'euros.",
                "Résultat : la croissance est de 2 % entre 2023 et 2024, et le PIB atteindrait environ 1 854,4 milliards d'euros en 2025.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise produit 12 000 unités en année 1 avec 20 salariés travaillant chacun 1 600 heures par an. En année 2, elle produit 13 200 unités. (1) Calculez la productivité horaire du travail en année 1. (2) Calculez-la en année 2 si l'effectif et la durée du travail sont inchangés, puis son taux de variation. (3) Même question si l'entreprise a en fait embauché 2 salariés supplémentaires (1 600 heures chacun). Quelle forme de croissance observe-t-on dans chaque cas ?",
              hint: "Calculez d'abord le nombre total d'heures travaillées : effectif × heures par salarié.",
              solution: [
                "(1) Heures travaillées en année 1 : 20 × 1 600 = 32 000 heures. Productivité horaire = 12 000 ÷ 32 000 = 0,375 unité par heure.",
                "(2) Avec 32 000 heures en année 2 : 13 200 ÷ 32 000 = 0,4125 unité par heure. Variation = (0,4125 - 0,375) ÷ 0,375 × 100 = 10 %.",
                "Dans ce cas, la production augmente de 10 % sans travail supplémentaire : la hausse vient entièrement d'un gain de productivité, c'est une croissance intensive.",
                "(3) Avec 22 salariés : 22 × 1 600 = 35 200 heures. Productivité = 13 200 ÷ 35 200 = 0,375 unité par heure, soit une variation de 0 %.",
                "Dans ce cas, la production augmente aussi de 10 %, mais uniquement parce que la quantité de travail a augmenté de 10 % : c'est une croissance extensive.",
                "Résultat : même hausse de production, mais croissance intensive dans le cas (2) et extensive dans le cas (3).",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, étude d'un document. Document (données fictives) : décomposition de la croissance annuelle moyenne d'un pays, en points de pourcentage. Période 1 : croissance du PIB 5,0 ; contribution du travail 0,3 ; contribution du capital 1,5 ; contribution de la PGF 3,2. Période 2 : croissance du PIB 1,5 ; contribution du travail 0,3 ; contribution du capital 0,7 ; contribution de la PGF 0,5. Questions : (1) Calculez la part de la croissance expliquée par la PGF dans chaque période. (2) À l'aide du document, montrez que le ralentissement de la croissance s'explique principalement par celui de la productivité globale des facteurs.",
              hint: "Calculez la baisse totale de la croissance entre les deux périodes, puis la part de cette baisse due à la PGF.",
              solution: [
                "(1) Période 1 : 3,2 ÷ 5,0 × 100 = 64 %. Période 2 : 0,5 ÷ 1,5 × 100 ≈ 33 %. La PGF expliquait près des deux tiers de la croissance en période 1, seulement un tiers en période 2.",
                "(2) La croissance annuelle moyenne passe de 5,0 % à 1,5 %, soit une baisse de 3,5 points.",
                "Sur cette baisse, la contribution de la PGF recule de 3,2 - 0,5 = 2,7 points, celle du capital de 1,5 - 0,7 = 0,8 point, celle du travail ne change pas (0 point). Vérification : 2,7 + 0,8 + 0 = 3,5.",
                "Le recul de la PGF explique donc 2,7 ÷ 3,5 × 100 ≈ 77 % du ralentissement de la croissance.",
                "Interprétation : le ralentissement ne vient pas d'une moindre mobilisation du travail, ni principalement d'une moindre accumulation du capital, mais surtout de gains d'efficacité plus faibles, c'est-à-dire d'un essoufflement du progrès technique au sens large.",
                "Conclusion : le document montre que l'essentiel du ralentissement (environ les trois quarts) provient du ralentissement de la productivité globale des facteurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Productivité apparente du travail", right: "Production rapportée à la quantité de travail utilisée" },
              { left: "Productivité globale des facteurs", right: "Part de la croissance non expliquée par la hausse du travail et du capital" },
              { left: "Croissance extensive", right: "Croissance obtenue en utilisant davantage de facteurs" },
              { left: "Croissance intensive", right: "Croissance obtenue grâce à des gains de productivité" },
              { left: "FBCF", right: "Investissement en capital fixe qui accroît le stock de capital" },
              { left: "Rendements décroissants", right: "Chaque unité de capital supplémentaire accroît de moins en moins la production" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi mesure-t-on la croissance par le PIB en volume plutôt qu'en valeur ?",
              options: [
                "Parce que le PIB en valeur ne tient pas compte des importations",
                "Parce qu'il faut neutraliser l'effet de la hausse des prix",
                "Parce que le PIB en volume inclut le travail domestique",
                "Parce que le PIB en valeur est calculé par habitant",
              ],
              answer: 1,
              why: "Le PIB en volume est calculé à prix constants : sa variation reflète la hausse des quantités produites et non celle des prix.",
            },
            {
              q: "Le PIB croît de 3 %, le travail contribue pour 0,5 point et le capital pour 1 point. Quelle est la contribution de la PGF ?",
              options: ["4,5 points", "2,5 points", "1,5 point", "0,5 point"],
              answer: 2,
              why: "La PGF se calcule comme un résidu : 3 - 0,5 - 1 = 1,5 point.",
            },
            {
              q: "Que signifie l'hypothèse de rendements décroissants du capital ?",
              options: [
                "Chaque machine supplémentaire accroît de moins en moins la production",
                "La production totale diminue dès que l'on ajoute de nouvelles machines",
                "Le capital s'use plus vite qu'il ne s'accumule chaque année",
                "Les profits des entreprises baissent avec le temps",
              ],
              answer: 0,
              why: "La production continue d'augmenter, mais de moins en moins à chaque unité de capital ajoutée, à quantité de travail donnée.",
            },
            {
              q: "Quelle situation correspond à une croissance intensive ?",
              options: [
                "Une usine produit plus en ajoutant une équipe de nuit",
                "Un pays produit plus grâce à l'arrivée de travailleurs immigrés",
                "Une entreprise produit plus en construisant un second atelier identique au premier, avec de nouveaux salariés",
                "Un atelier produit plus avec le même personnel grâce à une meilleure organisation",
              ],
              answer: 3,
              why: "Seul ce cas augmente la production sans facteur supplémentaire : c'est un gain de productivité.",
            },
            {
              q: "Que mesure le « résidu » mis en évidence par Solow ?",
              options: [
                "La part de la production exportée chaque année",
                "La part de la croissance due au progrès technique au sens large",
                "La part du PIB qui sert chaque année à rémunérer les détenteurs du capital",
                "L'écart entre PIB en valeur et PIB en volume",
              ],
              answer: 1,
              why: "Le résidu est la part de la croissance qui n'est expliquée ni par le travail ni par le capital : il mesure la PGF, reflet du progrès technique.",
            },
          ],
          trap: "Confondre production et productivité : une production qui augmente parce que l'on embauche ou que l'on investit davantage n'est pas un gain de productivité. La productivité n'augmente que si la production par unité de facteur augmente.",
          method: "Pour un calcul de contribution, écrivez d'abord l'égalité de décomposition (croissance = travail + capital + PGF), calculez, puis vérifiez que la somme des contributions retrouve le taux de croissance. Distinguez bien les points de pourcentage (écart entre deux taux) et les pourcentages.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'innovation-et-institutions',
          title: 'Progrès technique, innovation et institutions',
          minutes: 30,
          objectives: [
            "Comprendre que le progrès technique est endogène et qu'il résulte en particulier de l'innovation.",
            "Comprendre comment les institutions, notamment les droits de propriété, influent sur la croissance en affectant les incitations à investir et à innover.",
            "Savoir que l'innovation s'accompagne d'un processus de destruction créatrice.",
            "Comprendre comment le progrès technique peut engendrer des inégalités de revenus.",
          ],
          course: [
            {
              heading: "Un progrès technique endogène",
              paragraphs: [
                "Dans le modèle de Solow, le progrès technique est exogène : il est supposé venir de l'extérieur de l'économie, sans que l'on explique d'où il vient. À partir de la fin des années 1980, les théories de la croissance endogène (Paul Romer, Robert Lucas, Robert Barro) montrent au contraire que le progrès technique est produit par l'activité économique elle-même, grâce à des investissements spécifiques.",
                "Trois investissements sont mis en avant. L'investissement en recherche et développement (R&D) produit des innovations (Romer). L'investissement en capital humain, c'est-à-dire en connaissances et en savoir-faire acquis par la formation et l'expérience, rend les travailleurs plus productifs (Lucas). L'investissement public en infrastructures (transports, réseaux, recherche publique) accroît l'efficacité des entreprises privées (Barro).",
                "Ces investissements produisent des externalités positives : une connaissance nouvelle peut être réutilisée par d'autres sans être épuisée (elle est non rivale). Les rendements ne sont donc plus décroissants à l'échelle de l'économie, et la croissance peut s'auto-entretenir : la croissance augmente les profits et les recettes publiques, qui financent davantage de R&D et de formation, qui produisent du progrès technique, qui nourrit la croissance.",
              ],
              box: { label: "Définition", text: "Le progrès technique est endogène lorsqu'il résulte de décisions économiques (investissement en R&D, en capital humain, en infrastructures publiques) et non d'un facteur extérieur à l'économie. La croissance qui en découle peut alors s'auto-entretenir." },
            },
            {
              heading: "L'innovation et la destruction créatrice",
              paragraphs: [
                "Pour Joseph Schumpeter, le moteur du capitalisme est l'innovation, portée par l'entrepreneur. Il en distingue cinq formes : un nouveau produit, un nouveau procédé de production, un nouveau débouché (marché), une nouvelle source de matières premières, une nouvelle organisation de la production. L'innovation procure à son auteur un pouvoir de monopole temporaire et donc un profit élevé (une rente), qui attire ensuite des imitateurs. Les innovations apparaissent souvent en grappes, une innovation majeure en entraînant d'autres.",
                "Dans Capitalisme, socialisme et démocratie (1942), Schumpeter décrit la destruction créatrice : les innovations font naître de nouvelles activités, de nouvelles entreprises et de nouveaux emplois, tandis que des activités, des entreprises et des emplois devenus obsolètes disparaissent. La photographie numérique, puis le smartphone, ont ainsi fait reculer la photographie argentique : l'entreprise Kodak, longtemps dominante sur la pellicule, s'est placée en faillite en 2012.",
              ],
              box: { label: "Définition", text: "La destruction créatrice est le processus par lequel les innovations font apparaître de nouvelles activités et de nouveaux emplois, tout en faisant disparaître des activités, des entreprises et des emplois devenus obsolètes (Schumpeter)." },
            },
            {
              heading: "Le rôle des institutions",
              paragraphs: [
                "Les institutions sont l'ensemble des règles formelles (constitution, lois, contrats, droits de propriété) et informelles (normes, usages) qui encadrent les relations économiques et sociales. L'économiste Douglass North a montré qu'elles déterminent les incitations des acteurs : un entrepreneur n'investit et n'innove que s'il a de bonnes raisons d'espérer en tirer profit.",
                "Les droits de propriété jouent ici un rôle central. Si l'on craint d'être exproprié, ou de voir son invention copiée sans contrepartie, on renonce à investir. Le brevet accorde à l'inventeur un droit exclusif d'exploitation pour une durée limitée (vingt ans au maximum en France et en Europe), en échange de la publication de l'invention : il concilie l'incitation à innover et la diffusion des connaissances.",
                "D'autres institutions favorisent la croissance : un État de droit et une justice indépendante qui font respecter les contrats, la stabilité politique, un système éducatif de qualité, un système financier capable de financer les projets. Daron Acemoglu et James Robinson opposent les institutions inclusives, qui permettent au plus grand nombre de participer à l'activité et d'en recevoir les fruits, et les institutions extractives, qui permettent à une minorité de capter les richesses. La comparaison entre la Corée du Nord et la Corée du Sud, parties d'une situation proche, illustre cet effet.",
              ],
              box: { label: "Définition", text: "Les institutions sont les règles formelles et informelles qui organisent les relations entre les individus. Les droits de propriété, qui garantissent à chacun l'usage et les revenus de ses biens et de ses inventions, incitent à investir et à innover." },
            },
            {
              heading: "Progrès technique et inégalités de revenus",
              paragraphs: [
                "Le progrès technique augmente la richesse globale mais ne profite pas à tous de la même façon. D'abord, la destruction créatrice entraîne des pertes d'emplois et de revenus pour les travailleurs des activités en déclin, dont la reconversion est souvent longue et difficile.",
                "Ensuite, le progrès technique est souvent biaisé en faveur du travail qualifié : les nouvelles technologies, notamment numériques, augmentent la demande de travailleurs qualifiés, capables de les utiliser, et automatisent des tâches routinières, ce qui fait baisser la demande de travail peu ou moyennement qualifié. L'écart de salaire entre qualifiés et non-qualifiés tend alors à se creuser, et l'emploi peut se polariser entre emplois très qualifiés et emplois peu qualifiés non automatisables.",
                "Enfin, l'innovation procure des rentes très élevées à ceux qui la maîtrisent (entrepreneurs, actionnaires, cadres des entreprises innovantes), ce qui contribue à la hausse de la part des très hauts revenus. Ces inégalités peuvent s'atténuer à mesure que l'innovation se diffuse et que la formation progresse, mais elles appellent des politiques de formation et de redistribution.",
              ],
              box: { label: "À retenir", text: "Le progrès technique enrichit l'économie dans son ensemble, mais il peut accroître les inégalités : pertes pour les secteurs détruits, avantage aux travailleurs qualifiés, rentes pour les innovateurs." },
            },
          ],
          keyPoints: [
            "Les théories de la croissance endogène (Romer, Lucas, Barro) expliquent le progrès technique par la R&D, le capital humain et les infrastructures publiques.",
            "Les connaissances produisent des externalités positives : la croissance peut s'auto-entretenir.",
            "Schumpeter : l'innovation, portée par l'entrepreneur, donne un monopole temporaire et entraîne une destruction créatrice.",
            "Les institutions, notamment les droits de propriété et les brevets, conditionnent l'incitation à investir et à innover.",
            "Le progrès technique peut accroître les inégalités : destruction d'emplois, biais en faveur du travail qualifié, rentes d'innovation.",
          ],
          example: {
            statement: "À l'aide d'un exemple, montrez que l'innovation est à la fois une source de croissance et une source de destruction d'activités et d'emplois.",
            solution: [
              "Définition : selon Schumpeter, l'innovation est la mise en œuvre d'une nouveauté (produit, procédé, débouché, matière première, organisation) ; elle s'accompagne d'une destruction créatrice.",
              "Exemple : l'apparition de la photographie numérique puis du smartphone.",
              "Création : de nouveaux produits (appareils numériques, smartphones, applications, services de stockage en ligne) ont été conçus, fabriqués et vendus, ce qui a créé des entreprises, des emplois et de la valeur ajoutée, donc de la croissance.",
              "Destruction : la demande de pellicules et de tirages argentiques s'est effondrée, ce qui a fait disparaître des laboratoires photo et des emplois ; Kodak, leader de la pellicule, s'est placé en faillite en 2012.",
              "Conclusion : l'innovation est une source de croissance car elle crée de nouvelles activités plus productives, mais elle détruit dans le même mouvement des activités devenues obsolètes : c'est la destruction créatrice.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacune de ces innovations selon les cinq formes distinguées par Schumpeter : (a) le lancement du premier smartphone à écran tactile ; (b) l'introduction du travail à la chaîne dans l'industrie automobile ; (c) une entreprise française de cosmétiques qui commence à vendre ses produits en Inde ; (d) un fabricant qui remplace un métal extrait de mines par un matériau recyclé ; (e) l'adoption de la production en juste-à-temps, sans stocks.",
              hint: "Les cinq formes sont : nouveau produit, nouveau procédé, nouveau débouché, nouvelle source de matières premières, nouvelle organisation.",
              solution: [
                "(a) Le smartphone à écran tactile est un nouveau produit (innovation de produit).",
                "(b) Le travail à la chaîne est un nouveau procédé de production (innovation de procédé).",
                "(c) Vendre en Inde revient à conquérir un nouveau débouché.",
                "(d) Le matériau recyclé est une nouvelle source de matières premières.",
                "(e) Le juste-à-temps est une nouvelle organisation de la production.",
                "Résultat : produit, procédé, débouché, matière première, organisation.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi le brevet est un compromis entre deux objectifs : inciter à innover et diffuser les connaissances. Que se passerait-il s'il n'existait pas de brevet ? Et si un brevet protégeait une invention pour une durée illimitée ?",
              hint: "Pensez au coût de la R&D pour l'inventeur, puis à ce que gagnent les autres entreprises quand l'invention devient publique.",
              solution: [
                "Le brevet accorde un droit exclusif d'exploitation pour une durée limitée (vingt ans au maximum en France et en Europe), en échange de la publication de l'invention.",
                "Sans brevet : une invention coûteuse à mettre au point pourrait être copiée immédiatement par des concurrents qui n'ont pas supporté le coût de la R&D. L'inventeur ne récupérerait pas sa mise, et les entreprises seraient moins incitées à innover : le progrès technique ralentirait.",
                "Avec un brevet illimité : l'inventeur garderait un monopole perpétuel. Les prix resteraient élevés et les autres entreprises ne pourraient pas exploiter librement l'invention pour l'améliorer : la diffusion des connaissances serait freinée.",
                "Le brevet est donc un compromis : il garantit une rente temporaire qui incite à innover, puis l'invention tombe dans le domaine public, ce qui favorise sa diffusion. De plus, la publication permet à d'autres chercheurs de s'en inspirer dès le dépôt.",
                "Conclusion : le brevet est une institution, un droit de propriété, qui concilie l'incitation à innover et la diffusion du progrès technique.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document (données fictives) : indice du salaire horaire moyen (base 100 en 2000). Diplômés du supérieur : 100 en 2000, 130 en 2020. Personnes sans diplôme : 100 en 2000, 108 en 2020. En 2000, le salaire horaire moyen des diplômés du supérieur était égal à 1,6 fois celui des personnes sans diplôme. Sujet : à l'aide du document et de vos connaissances, vous montrerez que le progrès technique peut engendrer des inégalités de revenus.",
              hint: "Calculez l'évolution de chaque salaire, puis le nouveau rapport entre les deux salaires en 2020. Mobilisez ensuite trois mécanismes : biais en faveur du travail qualifié, destruction créatrice, rentes d'innovation.",
              solution: [
                "Exploitation du document : entre 2000 et 2020, le salaire horaire moyen des diplômés du supérieur augmente de 30 %, celui des non-diplômés de 8 %. Le rapport entre les deux passe de 1,6 à 1,6 × 130 ÷ 108 ≈ 1,93 : l'écart s'est creusé.",
                "Premier argument, le progrès technique biaisé : les technologies numériques augmentent la demande de travail qualifié, capable de les utiliser, et automatisent des tâches routinières souvent occupées par des travailleurs moins qualifiés. La rémunération des qualifiés progresse plus vite, comme l'illustre le document.",
                "Deuxième argument, la destruction créatrice : les innovations font disparaître des activités et des emplois ; les travailleurs concernés perdent leurs revenus et retrouvent souvent des emplois moins bien payés, tandis que les nouveaux secteurs recrutent d'autres profils.",
                "Troisième argument, les rentes d'innovation : les entrepreneurs et actionnaires des entreprises innovantes bénéficient d'un monopole temporaire et de profits élevés, ce qui accroît la part des très hauts revenus.",
                "Conclusion : le progrès technique accroît la richesse globale mais peut creuser les inégalités de revenus entre qualifiés et non-qualifiés, entre secteurs en déclin et secteurs en essor, et au sommet de la distribution. Résultat : le rapport des salaires passe d'environ 1,6 à environ 1,9.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Progrès technique, innovation et institutions.",
            statements: [
              { text: "Dans le modèle de Solow, le progrès technique est exogène.", true: true, why: "Solow le traite comme un facteur extérieur, non expliqué par le modèle : c'est le résidu." },
              { text: "Selon les théories de la croissance endogène, le progrès technique tombe du ciel.", true: false, why: "C'est l'inverse : il résulte d'investissements en R&D, en capital humain et en infrastructures." },
              { text: "Une connaissance peut être utilisée par plusieurs entreprises sans être épuisée.", true: true, why: "Elle est non rivale, ce qui crée des externalités positives." },
              { text: "Un brevet protège une invention sans limite de durée.", true: false, why: "La protection est temporaire (vingt ans au maximum en France), puis l'invention tombe dans le domaine public." },
              { text: "La destruction créatrice ne détruit que des entreprises, jamais des emplois.", true: false, why: "Elle fait disparaître des activités, des entreprises et des emplois devenus obsolètes." },
              { text: "Le progrès technique peut accroître l'écart de salaire entre travailleurs qualifiés et peu qualifiés.", true: true, why: "Il est souvent biaisé en faveur du travail qualifié." },
              { text: "Des droits de propriété mal garantis découragent l'investissement.", true: true, why: "Le risque d'expropriation ou de copie réduit le profit attendu, donc l'incitation à investir et à innover." },
            ],
          },
          quiz: [
            {
              q: "Quel investissement est associé à Robert Lucas dans les théories de la croissance endogène ?",
              options: ["Les infrastructures publiques", "La recherche et développement", "Les machines-outils", "Le capital humain"],
              answer: 3,
              why: "Lucas a montré le rôle du capital humain, c'est-à-dire des connaissances et savoir-faire accumulés par la formation et l'expérience.",
            },
            {
              q: "Que procure une innovation à l'entreprise qui l'introduit, selon Schumpeter ?",
              options: [
                "Un monopole temporaire et une rente",
                "Une subvention publique automatique",
                "Un monopole définitif protégé par l'État",
                "Une baisse obligatoire de ses prix de vente",
              ],
              answer: 0,
              why: "L'innovateur est seul sur son marché un temps, jusqu'à l'arrivée des imitateurs : il en tire un profit exceptionnel.",
            },
            {
              q: "Pourquoi le brevet favorise-t-il la croissance ?",
              options: [
                "Parce qu'il interdit définitivement toute imitation de l'invention par les concurrents, en France comme à l'étranger",
                "Parce qu'il supprime le coût de la recherche",
                "Parce qu'il garantit à l'inventeur les revenus de son invention pendant un temps",
                "Parce qu'il oblige les entreprises à exporter",
              ],
              answer: 2,
              why: "En protégeant temporairement l'invention, il incite à engager des dépenses de R&D tout en organisant sa diffusion ultérieure.",
            },
            {
              q: "Que désignent les institutions extractives selon Acemoglu et Robinson ?",
              options: [
                "Des règles qui encouragent l'extraction et l'exportation de matières premières",
                "Des règles qui permettent à une minorité de capter les richesses",
                "Des règles qui protègent les droits de propriété de tous",
                "Des entreprises publiques du secteur minier",
              ],
              answer: 1,
              why: "Les institutions extractives découragent l'investissement du plus grand nombre, au contraire des institutions inclusives.",
            },
            {
              q: "Pourquoi dit-on que le progrès technique est souvent biaisé ?",
              options: [
                "Parce qu'il augmente surtout la demande de travail qualifié",
                "Parce qu'il ne concerne que l'industrie et jamais les activités de services",
                "Parce qu'il est toujours financé par l'État",
                "Parce qu'il réduit la production totale",
              ],
              answer: 0,
              why: "Les nouvelles technologies favorisent les travailleurs capables de les utiliser et automatisent des tâches routinières.",
            },
          ],
          trap: "Croire que la destruction créatrice signifie que l'innovation détruit plus d'emplois qu'elle n'en crée : la notion décrit un remplacement d'activités, dont le solde n'est pas fixé d'avance, et elle n'empêche pas que certains travailleurs soient durablement perdants.",
          method: "Pour chaque mécanisme, associez un auteur, une notion et un exemple : Romer et la R&D, Lucas et le capital humain, Barro et les infrastructures, Schumpeter et la destruction créatrice, North et les institutions. Ce trio auteur, notion, exemple structure un paragraphe argumenté.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'croissance-soutenable',
          title: 'Les limites écologiques et la soutenabilité de la croissance',
          minutes: 30,
          objectives: [
            "Comprendre qu'une croissance économique soutenable se heurte à des limites écologiques : épuisement des ressources, pollution et réchauffement climatique.",
            "Expliquer comment l'innovation peut aider à reculer ces limites.",
            "Distinguer découplage relatif et découplage absolu, et expliquer l'effet rebond.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une croissance soutenable ?",
              paragraphs: [
                "Une croissance soutenable est une croissance qui permet de satisfaire les besoins des générations présentes sans compromettre la capacité des générations futures à satisfaire les leurs. Cette idée reprend la définition du développement durable donnée par le rapport Brundtland, publié en 1987 pour les Nations unies.",
                "Pour produire, une économie utilise plusieurs formes de capital : le capital physique (équipements), le capital humain (connaissances, santé), le capital institutionnel (règles, institutions) et le capital naturel (ressources naturelles, climat stable, biodiversité). Le PIB mesure la production d'une année mais pas la dégradation du capital naturel nécessaire pour la réaliser : un pays peut afficher une forte croissance tout en épuisant ses forêts ou ses sols.",
                "Les économistes débattent de la possibilité de remplacer le capital naturel par d'autres capitaux. Selon la soutenabilité faible, ce remplacement est largement possible : il suffit que le stock total de capital soit transmis. Selon la soutenabilité forte, certaines ressources naturelles (climat, biodiversité) sont irremplaçables et doivent être préservées en tant que telles.",
              ],
              box: { label: "Définition", text: "Une croissance est soutenable si elle répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs, c'est-à-dire si elle transmet un stock de capital (dont le capital naturel) permettant de maintenir le bien-être." },
            },
            {
              heading: "Les limites écologiques de la croissance",
              paragraphs: [
                "Première limite : l'épuisement des ressources. Les ressources non renouvelables (pétrole, gaz, charbon, minerais) existent en quantité finie. Les ressources renouvelables (forêts, poissons, eau douce, sols) s'épuisent elles aussi lorsqu'on les prélève plus vite qu'elles ne se reconstituent, comme en cas de surpêche. Dès 1972, le rapport Meadows commandé par le Club de Rome, Les limites à la croissance, alertait sur l'impossibilité d'une croissance matérielle infinie dans un monde fini.",
                "Deuxième limite : les pollutions de l'air, de l'eau et des sols (particules fines, pesticides, plastiques). Ce sont des externalités négatives : celui qui pollue impose un coût à d'autres sans le payer, si bien que le marché seul produit trop de pollution.",
                "Troisième limite : le réchauffement climatique. Les émissions de gaz à effet de serre, en premier lieu le dioxyde de carbone (CO2) issu de la combustion des énergies fossiles, renforcent l'effet de serre. Les rapports du GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat) établissent que les activités humaines sont la cause du réchauffement observé. Ces limites menacent la croissance elle-même : événements climatiques extrêmes, baisse des rendements agricoles, coûts sanitaires.",
              ],
              box: { label: "À retenir", text: "Trois limites écologiques : l'épuisement des ressources (non renouvelables ou surexploitées), les pollutions (externalités négatives) et le réchauffement climatique (émissions de gaz à effet de serre)." },
            },
            {
              heading: "L'innovation peut reculer ces limites",
              paragraphs: [
                "L'innovation permet de produire en prélevant moins de ressources et en polluant moins. Elle peut économiser les ressources (moteurs plus sobres, bâtiments mieux isolés), substituer des ressources renouvelables aux ressources épuisables (électricité solaire et éolienne, dont les coûts de production ont fortement baissé), recycler les matériaux (économie circulaire) ou réduire les rejets (filtres, procédés moins polluants).",
                "On mesure ces progrès par l'intensité en ressources ou en émissions de la production, par exemple l'intensité carbone : émissions de CO2 ÷ PIB. Le découplage relatif a lieu quand les émissions augmentent moins vite que le PIB : l'intensité carbone baisse, mais les émissions totales augmentent encore. Le découplage absolu a lieu quand les émissions diminuent alors que le PIB augmente.",
                "Plusieurs pays européens, dont la France, ont vu leurs émissions territoriales de CO2 diminuer depuis le début des années 1990 alors que leur PIB augmentait. Si l'on tient compte de l'empreinte carbone, qui inclut les émissions liées à la fabrication des biens importés, la baisse est toutefois moins marquée.",
              ],
              box: { label: "Définition", text: "Découplage relatif : les pressions environnementales augmentent moins vite que le PIB. Découplage absolu : elles diminuent alors que le PIB augmente. Seul le découplage absolu réduit la pression totale exercée sur l'environnement." },
            },
            {
              heading: "Les limites de la réponse par l'innovation",
              paragraphs: [
                "L'innovation ne suffit pas toujours. L'effet rebond désigne le fait que les gains d'efficacité, en réduisant le coût d'usage d'un bien, incitent à l'utiliser davantage : les économies de ressources sont alors en partie, voire totalement, annulées. L'économiste William Stanley Jevons avait remarqué dès 1865 que des machines à vapeur plus efficaces avaient fait augmenter, et non baisser, la consommation de charbon en Grande-Bretagne.",
                "Les innovations peuvent aussi créer de nouvelles pressions : le numérique consomme des métaux rares et de l'électricité. Enfin, leur diffusion prend du temps, alors que la réduction des émissions est urgente. C'est pourquoi l'innovation verte doit être orientée et accélérée par l'action publique (taxe carbone, normes, marchés de quotas d'émission, financement de la recherche).",
              ],
              box: { label: "Définition", text: "L'effet rebond est l'augmentation de la consommation d'un bien ou d'une ressource provoquée par un gain d'efficacité, qui réduit les économies attendues de ce gain." },
            },
          ],
          keyPoints: [
            "Une croissance soutenable préserve la capacité des générations futures à satisfaire leurs besoins (rapport Brundtland, 1987).",
            "Le PIB ne mesure pas la dégradation du capital naturel.",
            "Limites écologiques : épuisement des ressources, pollutions (externalités négatives), réchauffement climatique.",
            "L'innovation peut économiser, substituer, recycler les ressources et réduire les émissions.",
            "Découplage relatif : émissions en hausse moins rapide que le PIB. Découplage absolu : émissions en baisse avec un PIB en hausse.",
            "L'effet rebond (Jevons, 1865) peut annuler une partie des gains d'efficacité.",
          ],
          example: {
            statement: "Un pays émet 400 millions de tonnes (Mt) de CO2 pour un PIB de 2 000 milliards d'euros en année 1. En année 10, il émet 360 Mt pour un PIB de 2 400 milliards d'euros. Calculez l'intensité carbone aux deux dates et sa variation, puis caractérisez le découplage.",
            solution: [
              "Intensité carbone en année 1 = 400 ÷ 2 000 = 0,2 Mt de CO2 par milliard d'euros de PIB.",
              "Intensité carbone en année 10 = 360 ÷ 2 400 = 0,15 Mt par milliard d'euros.",
              "Variation de l'intensité = (0,15 - 0,2) ÷ 0,2 × 100 = -25 %.",
              "Variation du PIB = (2 400 - 2 000) ÷ 2 000 × 100 = +20 %. Variation des émissions = (360 - 400) ÷ 400 × 100 = -10 %.",
              "Les émissions baissent alors que le PIB augmente : il y a découplage absolu. Réponse : l'intensité carbone baisse de 25 % et le découplage est absolu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque pays, indiquez s'il y a découplage relatif, découplage absolu ou absence de découplage sur la période. Pays A : PIB +10 %, émissions +4 %. Pays B : PIB +10 %, émissions -5 %. Pays C : PIB +10 %, émissions +12 %.",
              hint: "Comparez le sens et le rythme de variation des émissions à ceux du PIB.",
              solution: [
                "Pays A : les émissions augmentent (+4 %) mais moins vite que le PIB (+10 %). L'intensité carbone baisse (1,04 ÷ 1,10 ≈ 0,945, soit environ -5,5 %) : découplage relatif.",
                "Pays B : les émissions baissent (-5 %) alors que le PIB augmente : découplage absolu.",
                "Pays C : les émissions augmentent plus vite que le PIB (1,12 ÷ 1,10 ≈ 1,018, l'intensité carbone augmente d'environ 1,8 %) : aucun découplage.",
                "Résultat : A relatif, B absolu, C aucun découplage.",
              ],
            },
            {
              level: 2,
              statement: "Une automobiliste remplace sa voiture qui consommait 8 litres aux 100 km par un modèle qui consomme 6 litres aux 100 km. Elle roulait 10 000 km par an ; avec la nouvelle voiture, moins coûteuse à utiliser, elle roule 12 000 km par an. (1) Calculez sa consommation annuelle avant et après. (2) Quelle économie aurait-elle réalisée si elle avait continué à rouler 10 000 km ? (3) Quelle part de cette économie attendue est perdue à cause de l'effet rebond ?",
              hint: "Consommation annuelle = (litres aux 100 km) × (kilomètres parcourus ÷ 100).",
              solution: [
                "(1) Avant : 8 × 10 000 ÷ 100 = 800 litres par an. Après : 6 × 12 000 ÷ 100 = 720 litres par an.",
                "(2) Sans changement de kilométrage : 6 × 10 000 ÷ 100 = 600 litres. L'économie attendue est 800 - 600 = 200 litres.",
                "L'économie réelle est 800 - 720 = 80 litres.",
                "(3) Économie perdue = 200 - 80 = 120 litres, soit 120 ÷ 200 × 100 = 60 % de l'économie attendue.",
                "Résultat : l'effet rebond annule 60 % des économies de carburant permises par l'innovation.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : dans un pays, le coût de production d'un mégawattheure d'électricité solaire est passé de l'indice 100 en 2010 à l'indice 20 en 2023, et la part du solaire et de l'éolien dans la production d'électricité de 3 % à 25 %. Document 2 (données fictives) : sur la même période, le PIB de ce pays a augmenté de 18 % et ses émissions de CO2 ont baissé de 15 %. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
              hint: "Construisez deux ou trois paragraphes : substitution de ressources renouvelables, efficacité et intensité carbone, puis découplage. Utilisez une donnée chiffrée dans chaque paragraphe.",
              solution: [
                "Introduction : la croissance se heurte à des limites écologiques (épuisement des ressources, pollutions, réchauffement climatique). L'innovation, c'est-à-dire la mise en œuvre de nouveaux produits et procédés, peut permettre de produire davantage en exerçant moins de pression sur l'environnement.",
                "Premier argument, l'innovation permet de substituer des ressources renouvelables aux énergies fossiles. Document 1 : le coût du solaire a été divisé par 5 (indice de 100 à 20, soit -80 %), ce qui a rendu cette énergie compétitive ; la part du solaire et de l'éolien est passée de 3 % à 25 % de l'électricité produite.",
                "Deuxième argument, l'innovation réduit l'intensité carbone de la production. Document 2 : le PIB est multiplié par 1,18 et les émissions par 0,85, donc l'intensité carbone est multipliée par 0,85 ÷ 1,18 ≈ 0,72, soit une baisse d'environ 28 %. D'autres innovations vont dans ce sens : isolation des bâtiments, moteurs plus sobres, recyclage.",
                "Troisième argument, l'innovation peut conduire à un découplage absolu : ici, les émissions baissent de 15 % alors que le PIB augmente de 18 %. La croissance n'est plus synonyme de hausse des émissions.",
                "Conclusion : l'innovation peut reculer les limites écologiques de la croissance en substituant des énergies renouvelables aux énergies fossiles et en réduisant l'intensité carbone, jusqu'à permettre un découplage absolu.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le mécanisme de l'effet rebond.",
            items: [
              "Une entreprise investit dans la recherche pour rendre un bien moins gourmand en énergie",
              "Le bien consomme moins d'énergie pour le même service rendu",
              "Le coût d'usage du bien diminue pour les consommateurs",
              "Les consommateurs utilisent davantage le bien ou dépensent l'économie réalisée ailleurs",
              "La consommation totale d'énergie baisse moins que prévu, voire augmente",
            ],
          },
          quiz: [
            {
              q: "Quel rapport a proposé en 1987 une définition du développement durable ?",
              options: ["Le rapport Meadows", "Le premier rapport du GIEC", "Le rapport Brundtland", "Le rapport Stern"],
              answer: 2,
              why: "Le rapport Brundtland (Nations unies, 1987) définit le développement durable par la prise en compte des besoins des générations futures.",
            },
            {
              q: "Le PIB d'un pays augmente de 5 % et ses émissions de CO2 de 2 %. Il s'agit :",
              options: [
                "D'un découplage absolu entre croissance et émissions",
                "D'un découplage relatif",
                "D'une absence totale de découplage",
                "D'un effet rebond",
              ],
              answer: 1,
              why: "Les émissions augmentent, mais moins vite que le PIB : l'intensité carbone baisse, sans baisse des émissions totales.",
            },
            {
              q: "Pourquoi la pollution est-elle une externalité négative ?",
              options: [
                "Parce qu'elle est produite à l'étranger",
                "Parce qu'elle est interdite par la loi",
                "Parce qu'elle réduit toujours le PIB du pays qui en est responsable, quel que soit son niveau",
                "Parce que le pollueur impose un coût à d'autres sans le payer",
              ],
              answer: 3,
              why: "Le coût de la pollution est supporté par des tiers et n'entre pas dans le calcul du pollueur.",
            },
            {
              q: "Qu'observait Jevons en 1865 ?",
              options: [
                "Des machines à vapeur plus efficaces avaient fait augmenter la consommation de charbon",
                "Les réserves de charbon britanniques seraient épuisées avant 1900, quelle que soit la technique utilisée",
                "La pollution baissait quand le revenu par habitant augmentait",
                "Le prix du charbon ne dépendait pas de la demande",
              ],
              answer: 0,
              why: "C'est l'exemple fondateur de l'effet rebond : le gain d'efficacité a stimulé l'usage du charbon.",
            },
            {
              q: "Que défend la soutenabilité forte ?",
              options: [
                "Le capital naturel peut toujours être remplacé par du capital physique ou humain produit par l'homme",
                "Seul le PIB doit être transmis aux générations futures",
                "Certaines ressources naturelles sont irremplaçables et doivent être préservées",
                "La croissance doit être nulle dans tous les pays",
              ],
              answer: 2,
              why: "Pour la soutenabilité forte, le capital naturel n'est pas substituable : il faut le maintenir en tant que tel.",
            },
          ],
          trap: "Confondre baisse de l'intensité carbone et baisse des émissions : une intensité qui baisse peut aller de pair avec des émissions totales en hausse (découplage relatif). Seul le découplage absolu réduit les émissions.",
          method: "Face à un tableau PIB et émissions, calculez systématiquement trois taux de variation (PIB, émissions, intensité) avant de conclure : le type de découplage se lit alors sans ambiguïté.",
        },
      ],
    },

    /* ==================================================================== */
    /* COMMERCE INTERNATIONAL ET INTERNATIONALISATION DE LA PRODUCTION        */
    /* ==================================================================== */
    {
      id: 'commerce-international',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'avantages-comparatifs',
          title: 'Avantages comparatifs et dotations factorielles',
          minutes: 35,
          objectives: [
            "Comprendre le rôle des dotations factorielles et technologiques (avantages comparatifs) dans les échanges commerciaux et la spécialisation internationale.",
            "Calculer des coûts d'opportunité et en déduire la spécialisation de chaque pays.",
            "Expliquer les gains de la spécialisation et ses effets sur les inégalités de revenus au sein de chaque pays.",
          ],
          course: [
            {
              heading: "De l'avantage absolu à l'avantage comparatif",
              paragraphs: [
                "Pour Adam Smith (Recherches sur la nature et les causes de la richesse des nations, 1776), chaque pays a intérêt à se spécialiser dans les productions pour lesquelles il est le plus efficace, c'est-à-dire pour lesquelles il dispose d'un avantage absolu, et à importer les autres. Mais cette théorie laisse une question sans réponse : un pays qui n'aurait d'avantage absolu dans aucune production serait-il exclu du commerce international ?",
                "David Ricardo (Des principes de l'économie politique et de l'impôt, 1817) répond par la théorie des avantages comparatifs. Un pays a intérêt à se spécialiser dans la production pour laquelle il est relativement le plus efficace, ou le moins inefficace, même s'il est moins productif que les autres dans toutes les productions. Ce qui compte n'est pas le coût absolu d'un bien, mais son coût d'opportunité : la quantité de l'autre bien à laquelle il faut renoncer pour le produire.",
              ],
              box: { label: "Définition", text: "Un pays possède un avantage comparatif dans la production d'un bien lorsque le coût d'opportunité de ce bien, c'est-à-dire la quantité d'un autre bien à laquelle il faut renoncer pour le produire, y est plus faible que dans les autres pays." },
            },
            {
              heading: "L'exemple de Ricardo : le drap et le vin",
              paragraphs: [
                "Dans l'exemple de Ricardo, produire une unité de drap demande 100 heures de travail en Angleterre et 90 heures au Portugal ; produire une unité de vin demande 120 heures en Angleterre et 80 heures au Portugal. Le Portugal a un avantage absolu dans les deux productions, puisqu'il y utilise moins de travail.",
                "Calculons les coûts d'opportunité. Au Portugal, produire une unité de vin coûte 80 heures, qui auraient permis de produire 80 ÷ 90 ≈ 0,89 unité de drap. En Angleterre, une unité de vin coûte 120 heures, soit 120 ÷ 100 = 1,2 unité de drap. Le vin est donc relativement moins coûteux au Portugal : le Portugal a un avantage comparatif dans le vin, l'Angleterre dans le drap (une unité de drap y coûte 100 ÷ 120 ≈ 0,83 unité de vin, contre 90 ÷ 80 = 1,125 au Portugal).",
                "Sans échange, chaque pays produit une unité de chaque bien : l'Angleterre y consacre 220 heures, le Portugal 170 heures, et la production totale est de 2 unités de drap et 2 unités de vin. Si l'Angleterre consacre ses 220 heures au drap, elle en produit 2,2 unités ; si le Portugal consacre ses 170 heures au vin, il en produit 2,125 unités. Avec le même travail, la production mondiale augmente pour les deux biens : l'échange permet à chacun de consommer davantage.",
              ],
              box: { label: "Règle", text: "Pour trouver la spécialisation : calculez, pour chaque pays, le coût d'opportunité d'un bien (heures pour ce bien ÷ heures pour l'autre bien). Le pays où ce rapport est le plus faible a l'avantage comparatif pour ce bien ; l'autre pays l'a pour l'autre bien." },
            },
            {
              heading: "Les dotations factorielles : le modèle HOS",
              paragraphs: [
                "Chez Ricardo, les avantages comparatifs proviennent de différences de productivité, c'est-à-dire de dotations technologiques différentes. Les économistes suédois Eli Heckscher et Bertil Ohlin, puis l'Américain Paul Samuelson (modèle HOS), proposent une autre explication : les pays diffèrent par leurs dotations factorielles, c'est-à-dire par l'abondance relative de leurs facteurs de production (travail qualifié ou peu qualifié, capital, terres, ressources naturelles).",
                "Selon le modèle HOS, chaque pays se spécialise dans les biens dont la production utilise intensivement le facteur dont il est relativement le mieux doté, car ce facteur y est relativement bon marché. Un pays abondamment doté en travail peu qualifié se spécialise dans des productions intensives en main-d'œuvre (textile, assemblage) ; un pays abondamment doté en capital et en travail qualifié se spécialise dans des productions intensives en capital et en qualifications (aéronautique, pharmacie).",
                "Wassily Leontief a constaté en 1953 que les exportations américaines étaient plus intensives en travail que les importations, alors que les États-Unis étaient le pays le mieux doté en capital : c'est le paradoxe de Leontief. Il s'explique notamment par la qualité du travail : les exportations américaines utilisaient beaucoup de travail qualifié, facteur dont les États-Unis étaient abondamment dotés.",
              ],
              box: { label: "Définition", text: "Les dotations factorielles désignent les quantités relatives de facteurs de production (travail qualifié et peu qualifié, capital, ressources naturelles) dont dispose un pays. Selon le modèle HOS, un pays se spécialise dans les biens intensifs en son facteur relativement abondant." },
            },
            {
              heading: "Les gains de l'échange et les inégalités",
              paragraphs: [
                "La spécialisation selon les avantages comparatifs accroît la production mondiale à facteurs donnés. Le commerce international permet aussi aux consommateurs d'accéder à des biens moins chers, et aux entreprises d'élargir leurs marchés. Ces gains sont globaux : ils ne signifient pas que chaque individu y gagne.",
                "Selon le théorème de Stolper-Samuelson, issu du modèle HOS, l'ouverture aux échanges augmente la rémunération du facteur relativement abondant et diminue celle du facteur relativement rare. Dans les pays développés, abondants en travail qualifié, les travailleurs qualifiés y gagnent tandis que les travailleurs peu qualifiés, en concurrence avec ceux des pays à bas salaires, voient leurs salaires ou leurs emplois menacés : les inégalités de revenus internes tendent à augmenter. Les gagnants pourraient compenser les perdants, ce qui suppose des politiques de redistribution et de formation.",
              ],
              box: { label: "À retenir", text: "Le commerce international crée des gains globaux mais redistribue les revenus : dans les pays développés, il tend à favoriser le travail qualifié et à pénaliser le travail peu qualifié." },
            },
          ],
          keyPoints: [
            "Smith (1776) : avantage absolu. Ricardo (1817) : avantage comparatif, fondé sur le coût d'opportunité.",
            "Un pays peut gagner à l'échange même s'il est moins productif dans toutes les productions.",
            "Coût d'opportunité d'un bien = ce à quoi il faut renoncer, en quantité de l'autre bien, pour le produire.",
            "Modèle HOS : chaque pays se spécialise dans les biens intensifs en son facteur relativement abondant.",
            "Les dotations sont technologiques (Ricardo) ou factorielles (HOS).",
            "Stolper-Samuelson : l'échange favorise le facteur abondant et pénalise le facteur rare ; dans les pays riches, il peut accroître les inégalités.",
          ],
          example: {
            statement: "Pour produire une tonne de blé, il faut 2 heures de travail dans le pays A et 6 heures dans le pays B. Pour produire un rouleau de tissu, il faut 4 heures dans le pays A et 8 heures dans le pays B. Déterminez les avantages absolus et comparatifs, puis la spécialisation de chaque pays.",
            solution: [
              "Avantages absolus : A utilise moins d'heures pour les deux biens (2 contre 6, 4 contre 8). A a un avantage absolu dans le blé et dans le tissu.",
              "Coût d'opportunité du blé : dans A, 2 ÷ 4 = 0,5 rouleau de tissu par tonne ; dans B, 6 ÷ 8 = 0,75 rouleau. Le blé est relativement moins coûteux dans A.",
              "Coût d'opportunité du tissu : dans A, 4 ÷ 2 = 2 tonnes de blé par rouleau ; dans B, 8 ÷ 6 ≈ 1,33 tonne. Le tissu est relativement moins coûteux dans B.",
              "Conclusion : A a un avantage comparatif dans le blé et se spécialise dans le blé ; B a un avantage comparatif dans le tissu et se spécialise dans le tissu, bien qu'il soit moins productif dans les deux biens.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le pays X, il faut 10 heures pour produire un ordinateur et 5 heures pour produire une tonne de riz. Dans le pays Y, il faut 30 heures pour un ordinateur et 10 heures pour une tonne de riz. (1) Quel pays a un avantage absolu dans chaque production ? (2) Calculez les coûts d'opportunité et déduisez-en la spécialisation de chaque pays.",
              hint: "Coût d'opportunité d'un ordinateur = heures pour un ordinateur ÷ heures pour une tonne de riz.",
              solution: [
                "(1) X utilise moins d'heures pour les deux biens (10 contre 30, 5 contre 10) : X a un avantage absolu dans les deux productions.",
                "(2) Coût d'opportunité d'un ordinateur : dans X, 10 ÷ 5 = 2 tonnes de riz ; dans Y, 30 ÷ 10 = 3 tonnes. L'ordinateur est relativement moins coûteux dans X.",
                "Coût d'opportunité d'une tonne de riz : dans X, 5 ÷ 10 = 0,5 ordinateur ; dans Y, 10 ÷ 30 ≈ 0,33 ordinateur. Le riz est relativement moins coûteux dans Y.",
                "Résultat : X se spécialise dans les ordinateurs, Y dans le riz.",
              ],
            },
            {
              level: 2,
              statement: "On reprend les données de l'exercice précédent (X : 10 heures par ordinateur, 5 heures par tonne de riz ; Y : 30 heures par ordinateur, 10 heures par tonne de riz). Chaque pays dispose de 600 heures de travail. (1) Sans échange, chaque pays consacre la moitié de ses heures à chaque bien : calculez la production de chaque pays et la production totale. (2) Avec l'échange, Y se spécialise entièrement dans le riz et X consacre 400 heures aux ordinateurs et 200 heures au riz. Calculez la nouvelle production totale et le gain obtenu.",
              hint: "Production = heures consacrées au bien ÷ heures nécessaires par unité.",
              solution: [
                "(1) X : 300 ÷ 10 = 30 ordinateurs et 300 ÷ 5 = 60 tonnes de riz. Y : 300 ÷ 30 = 10 ordinateurs et 300 ÷ 10 = 30 tonnes de riz.",
                "Production totale sans échange : 30 + 10 = 40 ordinateurs et 60 + 30 = 90 tonnes de riz.",
                "(2) Y : 600 ÷ 10 = 60 tonnes de riz. X : 400 ÷ 10 = 40 ordinateurs et 200 ÷ 5 = 40 tonnes de riz.",
                "Production totale avec spécialisation : 40 ordinateurs et 60 + 40 = 100 tonnes de riz.",
                "Résultat : avec le même nombre d'heures, on obtient autant d'ordinateurs (40) et 10 tonnes de riz supplémentaires. La spécialisation selon les avantages comparatifs augmente la production mondiale ; l'échange permet de répartir ce gain entre les deux pays.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, mobilisation des connaissances. Après avoir présenté le principe du modèle HOS, vous montrerez que l'ouverture aux échanges peut accroître les inégalités de revenus dans un pays développé.",
              hint: "Partez des dotations factorielles d'un pays développé, puis appliquez le raisonnement de Stolper-Samuelson aux travailleurs qualifiés et peu qualifiés.",
              solution: [
                "Le modèle HOS (Heckscher, Ohlin, Samuelson) explique la spécialisation par les dotations factorielles : chaque pays se spécialise dans les biens qui utilisent intensivement le facteur dont il est relativement abondamment doté, car ce facteur y est relativement bon marché.",
                "Un pays développé comme la France est relativement abondant en capital et en travail qualifié, et relativement rare en travail peu qualifié. Avec l'ouverture, il se spécialise dans des productions intensives en travail qualifié (aéronautique, pharmacie, services spécialisés) et importe des biens intensifs en travail peu qualifié (textile, assemblage) depuis des pays où ce travail est abondant.",
                "La demande de travail qualifié augmente, ce qui élève sa rémunération. La demande de travail peu qualifié diminue, car les productions qui l'utilisaient sont concurrencées par les importations : les salaires des peu qualifiés stagnent ou baissent, et certains emplois disparaissent.",
                "C'est le théorème de Stolper-Samuelson : l'échange augmente la rémunération du facteur relativement abondant et réduit celle du facteur relativement rare.",
                "Conclusion : même si l'ouverture accroît la richesse globale, elle creuse l'écart de revenus entre travailleurs qualifiés et peu qualifiés dans un pays développé, ce qui peut justifier des politiques de formation et de redistribution.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque auteur ou notion à l'idée qui lui correspond.",
            pairs: [
              { left: "Adam Smith", right: "Se spécialiser selon l'avantage absolu" },
              { left: "David Ricardo", right: "Se spécialiser selon l'avantage comparatif" },
              { left: "Modèle HOS", right: "Se spécialiser selon les dotations factorielles" },
              { left: "Paradoxe de Leontief", right: "Des exportations américaines plus intensives en travail qu'attendu" },
              { left: "Stolper-Samuelson", right: "L'échange favorise le facteur abondant et pénalise le facteur rare" },
              { left: "Coût d'opportunité", right: "Ce à quoi on renonce pour produire un bien" },
            ],
          },
          quiz: [
            {
              q: "Selon Ricardo, un pays moins productif que son partenaire dans toutes les productions :",
              options: [
                "A quand même intérêt à se spécialiser et à échanger",
                "Doit se fermer au commerce international pour se protéger",
                "Ne peut exporter que des matières premières agricoles",
                "Doit produire lui-même tous les biens qu'il consomme",
              ],
              answer: 0,
              why: "Il a forcément un avantage comparatif dans un bien, celui où son retard de productivité est le plus faible.",
            },
            {
              q: "Dans le pays A, une voiture demande 20 heures et un ordinateur 10 heures. Quel est le coût d'opportunité d'une voiture ?",
              options: ["0,5 ordinateur", "10 ordinateurs", "30 heures", "2 ordinateurs"],
              answer: 3,
              why: "Les 20 heures d'une voiture auraient permis de produire 20 ÷ 10 = 2 ordinateurs.",
            },
            {
              q: "Selon le modèle HOS, un pays abondamment doté en travail peu qualifié se spécialise :",
              options: [
                "Dans les biens de haute technologie, pour rattraper son retard",
                "Dans les biens intensifs en travail peu qualifié",
                "Dans les services financiers à destination des pays riches",
                "Dans les biens dont la demande mondiale augmente le plus",
              ],
              answer: 1,
              why: "Son facteur abondant y est relativement bon marché : il produit à moindre coût les biens qui l'utilisent intensivement.",
            },
            {
              q: "Que montre le théorème de Stolper-Samuelson dans un pays développé ouvert aux échanges ?",
              options: [
                "Tous les salaires augmentent au même rythme grâce à l'échange",
                "Les salaires des peu qualifiés progressent plus vite que les autres",
                "Les qualifiés y gagnent, les peu qualifiés peuvent y perdre",
                "Les inégalités disparaissent à long terme sans intervention",
              ],
              answer: 2,
              why: "L'échange augmente la rémunération du facteur abondant (travail qualifié) et réduit celle du facteur rare (travail peu qualifié).",
            },
            {
              q: "D'où viennent les avantages comparatifs dans le modèle de Ricardo ?",
              options: [
                "Des différences de dotations en capital",
                "Des différences de goûts des consommateurs",
                "Des économies d'échelle des grandes firmes",
                "Des différences de productivité du travail",
              ],
              answer: 3,
              why: "Chez Ricardo, seul le travail compte et les pays diffèrent par leur technologie, donc par leur productivité.",
            },
          ],
          trap: "Raisonner en avantage absolu au lieu d'avantage comparatif : un pays plus efficace dans tous les biens ne doit pas tout produire ; il se spécialise là où sa supériorité est relativement la plus grande, ce que révèle le calcul des coûts d'opportunité.",
          method: "Présentez toujours les données dans un tableau (pays en lignes, biens en colonnes), puis calculez pour chaque pays le rapport des heures nécessaires : le plus petit rapport pour un bien désigne le pays qui a l'avantage comparatif pour ce bien.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'commerce-entre-pays-comparables',
          title: 'Le commerce entre pays comparables : différenciation et qualité',
          minutes: 30,
          objectives: [
            "Comprendre que le commerce international entre pays comparables s'explique par la recherche de la diversité par les consommateurs et la différenciation des produits.",
            "Distinguer commerce interbranche et commerce intrabranche, différenciation horizontale et différenciation verticale.",
            "Expliquer le rôle des économies d'échelle et de la productivité des firmes dans la capacité à exporter.",
          ],
          course: [
            {
              heading: "Un constat : les pays proches échangent beaucoup entre eux",
              paragraphs: [
                "Les théories de Ricardo et du modèle HOS expliquent bien les échanges entre pays différents par leur technologie ou leurs dotations. Mais une grande partie du commerce mondial se fait entre pays développés de niveau de vie comparable et aux dotations proches. Les principaux partenaires commerciaux de la France sont ainsi des pays européens, au premier rang desquels l'Allemagne.",
                "De plus, ces pays échangent souvent des produits similaires : la France exporte des automobiles vers l'Allemagne et en importe depuis l'Allemagne. On distingue donc le commerce interbranche, échange de produits appartenant à des branches différentes (des avions contre du café), et le commerce intrabranche, échange croisé de produits appartenant à la même branche (des voitures contre des voitures). Le commerce intrabranche est particulièrement développé entre pays européens.",
              ],
              box: { label: "Définition", text: "Le commerce intrabranche est l'échange croisé, entre deux pays, de produits appartenant à une même branche (voitures contre voitures). Le commerce interbranche est l'échange de produits de branches différentes." },
            },
            {
              heading: "La différenciation des produits et le goût pour la diversité",
              paragraphs: [
                "Le commerce intrabranche s'explique d'abord par la demande : les consommateurs apprécient la diversité et veulent pouvoir choisir entre plusieurs variétés d'un même produit. Les entreprises, de leur côté, différencient leurs produits pour échapper à une concurrence par les seuls prix.",
                "La différenciation horizontale porte sur des produits de qualité et de prix comparables qui diffèrent par leurs caractéristiques (style, marque, couleur, options) : deux citadines de marques différentes vendues au même prix. La différenciation verticale porte sur des produits de qualité différente, donc de gammes et de prix différents : un sac d'entrée de gamme et un sac de luxe. Un pays peut ainsi exporter des produits haut de gamme et importer des produits d'entrée de gamme dans une même branche.",
              ],
              box: { label: "Définition", text: "Différenciation horizontale : des variétés de même qualité qui diffèrent par leurs caractéristiques. Différenciation verticale : des variétés de qualité, donc de gamme et de prix, différents." },
            },
            {
              heading: "Économies d'échelle et concurrence monopolistique",
              paragraphs: [
                "Paul Krugman (prix Nobel d'économie 2008) a expliqué le commerce entre pays comparables par la combinaison du goût pour la diversité et des économies d'échelle (rendements croissants). Une entreprise a des économies d'échelle quand son coût unitaire baisse à mesure que sa production augmente, parce que ses coûts fixes (conception, machines, publicité) sont répartis sur un plus grand nombre d'unités.",
                "Prenons une entreprise dont les coûts fixes s'élèvent à 1 million d'euros et le coût variable à 10 euros par unité. Pour 10 000 unités, le coût unitaire vaut 1 000 000 ÷ 10 000 + 10 = 110 euros ; pour 100 000 unités, il tombe à 1 000 000 ÷ 100 000 + 10 = 20 euros. L'ouverture élargit le marché : chaque entreprise se concentre sur quelques variétés et les produit en grande quantité, à moindre coût, tandis que les consommateurs de chaque pays accèdent à davantage de variétés. On parle de concurrence monopolistique : chaque firme est seule à produire sa variété, mais elle est concurrencée par des variétés proches.",
              ],
              box: { label: "Formule", text: "Coût unitaire (ou coût moyen) = coûts fixes ÷ quantité produite + coût variable unitaire. Quand la quantité augmente, la part des coûts fixes par unité diminue : ce sont les économies d'échelle." },
            },
            {
              heading: "Compétitivité et productivité des firmes exportatrices",
              paragraphs: [
                "La compétitivité est la capacité d'une entreprise ou d'un pays à vendre ses produits face à la concurrence. La compétitivité-prix est la capacité à proposer des prix plus bas, qui dépend notamment du coût du travail, de la productivité et du taux de change. La compétitivité hors prix (ou structurelle) repose sur d'autres éléments : qualité, innovation, image de marque, design, service après-vente, délais de livraison. Dans le commerce intrabranche, la compétitivité hors prix est décisive.",
                "Toutes les entreprises n'exportent pas. Exporter suppose des coûts fixes supplémentaires (étude des marchés étrangers, réseau de distribution, adaptation aux normes), que seules les entreprises les plus productives peuvent supporter. En France comme ailleurs, une minorité d'entreprises, souvent grandes et très productives, réalise l'essentiel des exportations. La productivité des firmes est donc un déterminant central de leur capacité à exporter. Enfin, une partie du commerce entre pays comparables porte sur des biens intermédiaires, du fait de la fragmentation de la chaîne de valeur entre plusieurs pays.",
              ],
              box: { label: "À retenir", text: "Entre pays comparables, l'échange s'explique par la différenciation des produits, le goût pour la diversité et les économies d'échelle. Les firmes les plus productives sont celles qui exportent." },
            },
          ],
          keyPoints: [
            "Une grande part du commerce mondial a lieu entre pays développés comparables.",
            "Commerce intrabranche : échange croisé de produits d'une même branche ; interbranche : de branches différentes.",
            "Différenciation horizontale (caractéristiques) et verticale (qualité et gamme).",
            "Krugman : goût pour la diversité et économies d'échelle expliquent le commerce entre pays comparables.",
            "Compétitivité-prix (coûts, change) et compétitivité hors prix (qualité, innovation, image).",
            "Exporter a un coût fixe : seules les firmes les plus productives exportent.",
          ],
          example: {
            statement: "Une entreprise de vélos supporte 3 millions d'euros de coûts fixes par an et un coût variable de 200 euros par vélo. Elle vend 15 000 vélos sur son marché national. L'ouverture aux échanges lui permet d'en vendre 60 000. Calculez son coût unitaire dans les deux cas et expliquez en quoi l'ouverture peut faire baisser les prix.",
            solution: [
              "Coût unitaire = coûts fixes ÷ quantité + coût variable unitaire.",
              "Marché national : 3 000 000 ÷ 15 000 + 200 = 200 + 200 = 400 euros par vélo.",
              "Après l'ouverture : 3 000 000 ÷ 60 000 + 200 = 50 + 200 = 250 euros par vélo.",
              "Variation du coût unitaire : (250 - 400) ÷ 400 × 100 = -37,5 %.",
              "Interprétation : l'élargissement du marché répartit les coûts fixes sur davantage d'unités ; ce sont des économies d'échelle. L'entreprise peut baisser ses prix, et les consommateurs bénéficient de prix plus bas et de variétés étrangères. Réponse : le coût unitaire passe de 400 à 250 euros.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque échange, indiquez s'il s'agit de commerce interbranche ou intrabranche ; dans le second cas, précisez s'il repose plutôt sur une différenciation horizontale ou verticale. (a) La France exporte des voitures vers l'Allemagne et importe des voitures allemandes de gamme comparable. (b) La France importe du café du Brésil et exporte des avions. (c) L'Italie exporte des sacs de luxe et importe des sacs d'entrée de gamme. (d) La Suède et la France s'échangent des meubles de même qualité mais de styles différents.",
              hint: "Demandez-vous d'abord si les deux produits échangés appartiennent à la même branche, puis s'ils diffèrent par la qualité ou seulement par les caractéristiques.",
              solution: [
                "(a) Des voitures contre des voitures, de gamme comparable : commerce intrabranche, différenciation horizontale.",
                "(b) Du café contre des avions : commerce interbranche.",
                "(c) Des sacs contre des sacs, de qualités différentes : commerce intrabranche, différenciation verticale.",
                "(d) Des meubles contre des meubles, de même qualité mais de styles différents : commerce intrabranche, différenciation horizontale.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise supporte 2 millions d'euros de coûts fixes et un coût variable de 50 euros par unité. Son marché national absorbe 20 000 unités. Après l'intégration de son pays dans un grand marché commun, elle vend 80 000 unités. (1) Calculez le coût unitaire avant et après. (2) Calculez la variation en pourcentage. (3) Expliquez pourquoi ce mécanisme peut favoriser le commerce entre pays comparables.",
              hint: "Coût unitaire = coûts fixes ÷ quantité + coût variable unitaire.",
              solution: [
                "(1) Avant : 2 000 000 ÷ 20 000 + 50 = 100 + 50 = 150 euros. Après : 2 000 000 ÷ 80 000 + 50 = 25 + 50 = 75 euros.",
                "(2) Variation : (75 - 150) ÷ 150 × 100 = -50 %. Le coût unitaire est divisé par deux.",
                "(3) Grâce aux économies d'échelle, chaque entreprise a intérêt à se concentrer sur quelques variétés produites en grande quantité pour un marché élargi. Chaque pays se spécialise dans certaines variétés et importe les autres : les consommateurs obtiennent plus de diversité à moindre prix, même si les pays sont comparables.",
                "Résultat : le coût unitaire passe de 150 à 75 euros, soit -50 %.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, étude d'un document. Document (données fictives) : 400 entreprises industrielles d'un pays sont classées en quatre groupes de 100 selon leur productivité. Part des entreprises qui exportent : groupe 1 (les moins productives) 5 % ; groupe 2 : 15 % ; groupe 3 : 30 % ; groupe 4 (les plus productives) 60 %. Questions : (1) Présentez la donnée du groupe 4. (2) Calculez le nombre total d'entreprises exportatrices et la part de ces exportatrices qui appartiennent au groupe 4. (3) À l'aide du document, montrez que la productivité des firmes est un déterminant de leur capacité à exporter.",
              hint: "Chaque groupe compte 100 entreprises : le pourcentage donne directement le nombre d'exportatrices du groupe.",
              solution: [
                "(1) Selon ce document aux données fictives, parmi les 100 entreprises les plus productives du pays, 60 % exportent, soit 60 entreprises.",
                "(2) Exportatrices : 5 + 15 + 30 + 60 = 110 entreprises sur 400, soit 27,5 %. Le groupe 4 en représente 60 ÷ 110 × 100 ≈ 54,5 %, soit plus de la moitié.",
                "(3) La part des exportatrices augmente régulièrement avec la productivité : elle est 12 fois plus élevée dans le groupe le plus productif que dans le moins productif (60 ÷ 5 = 12).",
                "Explication : exporter impose des coûts fixes (prospection, distribution à l'étranger, adaptation aux normes) que seules les entreprises les plus productives, qui dégagent des coûts unitaires bas et des marges suffisantes, peuvent supporter.",
                "Conclusion : la productivité est un déterminant majeur de la capacité à exporter, et les exportations sont concentrées sur une minorité de firmes très productives.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le commerce entre pays comparables.",
            statements: [
              { text: "L'essentiel du commerce mondial se fait entre pays aux dotations très différentes.", true: false, why: "Une grande partie du commerce se fait entre pays développés de niveau de vie comparable." },
              { text: "Échanger des voitures contre des voitures relève du commerce intrabranche.", true: true, why: "Les produits échangés appartiennent à la même branche." },
              { text: "La différenciation verticale porte sur des produits de qualités différentes.", true: true, why: "Elle distingue des gammes : entrée de gamme, milieu de gamme, haut de gamme." },
              { text: "Les économies d'échelle signifient que le coût unitaire augmente avec la production.", true: false, why: "C'est l'inverse : les coûts fixes sont répartis sur plus d'unités, le coût unitaire baisse." },
              { text: "Toutes les entreprises d'un pays exportent dès que les frontières s'ouvrent.", true: false, why: "Exporter a un coût fixe : seules les entreprises les plus productives exportent." },
              { text: "La compétitivité hors prix repose notamment sur la qualité et l'innovation.", true: true, why: "Elle désigne la capacité à vendre grâce à d'autres éléments que le prix." },
            ],
          },
          quiz: [
            {
              q: "Quel économiste a expliqué le commerce entre pays comparables par les économies d'échelle et le goût pour la diversité ?",
              options: ["David Ricardo", "Paul Krugman", "Eli Heckscher", "Adam Smith"],
              answer: 1,
              why: "Paul Krugman, prix Nobel 2008, a développé cette « nouvelle théorie du commerce international ».",
            },
            {
              q: "Deux smartphones de même gamme et de même prix, de marques différentes, illustrent :",
              options: [
                "Une différenciation horizontale",
                "Une différenciation verticale entre gammes",
                "Un commerce interbranche entre deux pays",
                "Un avantage absolu au sens d'Adam Smith",
              ],
              answer: 0,
              why: "Les produits ont une qualité comparable et ne diffèrent que par leurs caractéristiques.",
            },
            {
              q: "Une entreprise a 500 000 euros de coûts fixes et un coût variable de 5 euros. Quel est son coût unitaire pour 50 000 unités ?",
              options: ["10 euros", "5 euros", "15 euros", "25 euros"],
              answer: 2,
              why: "500 000 ÷ 50 000 + 5 = 10 + 5 = 15 euros.",
            },
            {
              q: "Lequel de ces éléments relève de la compétitivité hors prix ?",
              options: [
                "Une dépréciation de la monnaie nationale",
                "Une baisse des cotisations sociales des employeurs",
                "Une hausse de la productivité qui abaisse les coûts",
                "La réputation de qualité d'une marque",
              ],
              answer: 3,
              why: "La réputation de qualité permet de vendre sans baisser les prix ; les trois autres éléments jouent sur les prix.",
            },
            {
              q: "Pourquoi seules les entreprises les plus productives exportent-elles ?",
              options: [
                "Parce qu'exporter impose des coûts fixes qu'elles seules peuvent couvrir",
                "Parce que la loi réserve les exportations aux grandes entreprises du pays",
                "Parce que les consommateurs étrangers ne connaissent que les grandes marques",
              ],
              answer: 0,
              why: "Prospection, distribution et adaptation aux normes coûtent cher : il faut des coûts bas et des marges suffisantes pour les supporter.",
            },
          ],
          trap: "Croire que les théories des avantages comparatifs suffisent à expliquer tout le commerce : elles expliquent mal les échanges croisés de produits similaires entre pays comparables, qui relèvent de la différenciation et des économies d'échelle.",
          method: "Pour classer un échange, posez deux questions dans l'ordre : même branche ou non (intra ou interbranche) ? Si même branche, même qualité ou non (différenciation horizontale ou verticale) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'chaines-de-valeur',
          title: 'Firmes multinationales et chaînes de valeur mondiales',
          minutes: 35,
          objectives: [
            "Définir une firme multinationale et un investissement direct à l'étranger.",
            "Comprendre l'internationalisation de la chaîne de valeur et savoir l'illustrer.",
            "Identifier les déterminants de la localisation des entreprises multinationales : coûts, accès au marché, ressources.",
            "Comprendre les gains et les risques de l'internationalisation de la production, et les effets ambigus du protectionnisme.",
          ],
          course: [
            {
              heading: "Firmes multinationales et investissements directs à l'étranger",
              paragraphs: [
                "Une firme multinationale (FMN) est une entreprise qui possède au moins une filiale implantée à l'étranger, qu'elle contrôle. La société mère, installée dans le pays d'origine, coordonne un réseau de filiales réparties dans plusieurs pays. Les FMN réalisent une part importante du commerce mondial, dont une partie se fait entre filiales d'un même groupe : c'est le commerce intra-firme.",
                "Pour s'implanter à l'étranger, une FMN réalise un investissement direct à l'étranger (IDE). Selon la convention retenue par l'OCDE et le FMI, il y a IDE lorsqu'un investisseur acquiert au moins 10 % du capital d'une entreprise étrangère, ce qui traduit une intention d'influence durable sur sa gestion. L'IDE peut prendre la forme d'une création d'entreprise (investissement nouveau, ou greenfield) ou d'un rachat d'entreprise existante (fusion-acquisition). Il se distingue de l'investissement de portefeuille, simple placement financier.",
              ],
              box: { label: "Définition", text: "Un investissement direct à l'étranger (IDE) est une opération par laquelle une entreprise crée ou acquiert, à l'étranger, une entreprise dont elle détient au moins 10 % du capital, avec l'intention d'exercer une influence durable sur sa gestion." },
            },
            {
              heading: "La chaîne de valeur mondiale",
              paragraphs: [
                "La chaîne de valeur désigne l'ensemble des étapes nécessaires pour produire un bien et le mettre à disposition du client : conception et recherche, fabrication des composants, assemblage, logistique, marketing, distribution, service après-vente. Chaque étape ajoute de la valeur au produit. Lorsque ces étapes sont réparties entre plusieurs pays, on parle de chaîne de valeur mondiale ou de décomposition internationale des processus productifs.",
                "Un smartphone en offre un exemple typique : il peut être conçu aux États-Unis, utiliser des composants fabriqués au Japon, en Corée du Sud ou à Taïwan, être assemblé en Chine ou en Inde, puis vendu dans le monde entier. Chaque étape est localisée là où elle est la plus avantageuse pour la firme. La FMN peut confier ces étapes à ses filiales ou à des sous-traitants indépendants.",
                "La valeur ajoutée est inégalement répartie le long de la chaîne. Les étapes situées en amont (conception, recherche, design) et en aval (marketing, marque, distribution) captent généralement l'essentiel de la valeur, alors que la fabrication et l'assemblage en rapportent peu : c'est ce qu'illustre la « courbe du sourire ». Les statistiques douanières classiques, qui attribuent la valeur totale d'un produit au dernier pays exportateur, surestiment donc la contribution des pays d'assemblage.",
              ],
              box: { label: "Définition", text: "Une chaîne de valeur mondiale est l'organisation de la production d'un bien en étapes (conception, fabrication, assemblage, distribution) réparties dans plusieurs pays, chaque étape ajoutant de la valeur au produit." },
            },
            {
              heading: "Pourquoi s'implanter à l'étranger ?",
              paragraphs: [
                "La localisation des FMN répond à plusieurs déterminants. Le premier est la réduction des coûts de production : salaires plus faibles, fiscalité plus légère, coût de l'énergie, réglementations moins contraignantes. On parle de stratégie de compétitivité-coût, souvent associée à une division verticale de la chaîne de valeur (chaque étape dans un pays différent). Une entreprise textile qui fait confectionner ses vêtements dans un pays à bas salaires suit cette logique.",
                "Le deuxième est l'accès au marché : s'implanter près des clients permet de réduire les coûts de transport, de contourner les barrières douanières, de s'adapter aux goûts locaux et de réagir vite. Le constructeur japonais Toyota produit ainsi depuis 2001 dans son usine d'Onnaing, près de Valenciennes, des voitures destinées au marché européen. Le troisième est l'accès aux ressources : matières premières (pétrole, minerais), mais aussi main-d'œuvre qualifiée, centres de recherche, infrastructures de qualité. La stabilité des institutions et la taille du marché pèsent également dans le choix.",
              ],
              box: { label: "À retenir", text: "Trois grands déterminants de la localisation des FMN : les coûts de production (salaires, fiscalité), l'accès au marché (proximité des clients, contournement des barrières) et l'accès aux ressources (matières premières, compétences)." },
            },
            {
              heading: "Gains, risques et protectionnisme",
              paragraphs: [
                "L'internationalisation de la production procure des gains : baisse des coûts et des prix, diversité des produits, gains de productivité liés à la spécialisation de chaque site, transferts de technologies et de savoir-faire vers les pays d'accueil, créations d'emplois dans ces pays. Elle a aussi des coûts : délocalisations d'activités et d'emplois, souvent peu qualifiés, dans les pays d'origine ; dépendance à des fournisseurs lointains, révélée lors de la pandémie de Covid-19 en 2020 par les pénuries de masques, puis par celle de semi-conducteurs qui a ralenti la production automobile.",
                "Le protectionnisme regroupe les mesures qui limitent les importations pour protéger la production nationale : droits de douane, quotas, normes, subventions aux producteurs nationaux. Ses effets sont ambigus. Il peut protéger des emplois et des industries naissantes (argument défendu par Friedrich List au XIXe siècle) ou des activités jugées stratégiques. Mais il renchérit les prix pour les consommateurs et pour les entreprises qui importent des composants, réduit la concurrence et expose à des mesures de représailles de la part des partenaires commerciaux.",
              ],
              box: { label: "Définition", text: "Le protectionnisme est l'ensemble des mesures (droits de douane, quotas, normes, subventions) par lesquelles un État limite les importations ou favorise ses producteurs face à la concurrence étrangère." },
            },
          ],
          keyPoints: [
            "Une FMN possède au moins une filiale à l'étranger qu'elle contrôle ; elle s'implante par des IDE (au moins 10 % du capital).",
            "La chaîne de valeur mondiale répartit les étapes de production entre plusieurs pays.",
            "La valeur ajoutée se concentre en amont (conception) et en aval (marque, distribution), peu dans l'assemblage.",
            "Déterminants de la localisation : coûts, accès au marché, accès aux ressources.",
            "Gains : prix plus bas, diversité, productivité ; risques : délocalisations, dépendance, inégalités.",
            "Le protectionnisme a des effets ambigus : il protège certains emplois mais renchérit les prix et expose aux représailles.",
          ],
          example: {
            statement: "Un smartphone (données fictives) est vendu 600 euros. La valeur se répartit ainsi : conception, logiciel et marque (États-Unis) 300 euros ; composants (Japon, Corée du Sud, Taïwan) 200 euros ; assemblage (Chine) 30 euros ; transport et distribution 70 euros. Calculez la part de chaque étape et commentez.",
            solution: [
              "Conception, logiciel et marque : 300 ÷ 600 × 100 = 50 %.",
              "Composants : 200 ÷ 600 × 100 ≈ 33,3 %.",
              "Assemblage : 30 ÷ 600 × 100 = 5 %.",
              "Transport et distribution : 70 ÷ 600 × 100 ≈ 11,7 %. Vérification : 50 + 33,3 + 5 + 11,7 = 100 %.",
              "Commentaire : la chaîne de valeur est mondiale, et la valeur est concentrée sur la conception et la marque. L'assemblage, pourtant étape visible où le produit est terminé, ne capte que 5 % de la valeur, alors que les statistiques douanières compteraient 600 euros d'exportation pour le pays d'assemblage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le principal déterminant de la localisation dans chaque cas : (a) un constructeur automobile japonais ouvre une usine en France pour vendre ses voitures en Europe ; (b) une marque de vêtements transfère la confection de ses tee-shirts dans un pays à bas salaires ; (c) une compagnie pétrolière s'installe dans un pays producteur de pétrole ; (d) une entreprise de logiciels ouvre un centre de recherche près d'une grande université étrangère.",
              hint: "Les trois grands déterminants sont les coûts, l'accès au marché et l'accès aux ressources (naturelles ou humaines).",
              solution: [
                "(a) Accès au marché : produire près des clients européens réduit les coûts de transport, évite les droits de douane et permet de s'adapter à la demande.",
                "(b) Réduction des coûts : la confection est une étape intensive en main-d'œuvre, donc sensible aux salaires.",
                "(c) Accès aux ressources naturelles : le pétrole se trouve là où sont les gisements.",
                "(d) Accès aux ressources humaines : la firme recherche une main-d'œuvre très qualifiée et un environnement de recherche.",
              ],
            },
            {
              level: 2,
              statement: "Une veste de sport (données fictives) est vendue 100 euros. Conception et marketing : 35 euros ; fabrication du tissu : 10 euros ; confection au Vietnam : 8 euros ; transport : 5 euros ; distribution en magasin : 42 euros. (1) Vérifiez que la somme vaut bien le prix de vente. (2) Calculez la part des étapes situées en amont et en aval de la fabrication (conception et marketing, distribution) et celle de la fabrication (tissu et confection). (3) Commentez en lien avec la courbe du sourire.",
              hint: "Additionnez d'un côté conception, marketing et distribution, de l'autre tissu et confection.",
              solution: [
                "(1) 35 + 10 + 8 + 5 + 42 = 100 euros : la décomposition est complète.",
                "(2) Amont et aval : 35 + 42 = 77 euros, soit 77 %. Fabrication : 10 + 8 = 18 euros, soit 18 %. Le transport représente 5 %.",
                "La confection seule ne représente que 8 % du prix final.",
                "(3) Comme le prévoit la courbe du sourire, la valeur se concentre aux deux extrémités de la chaîne (conception et marque d'un côté, distribution de l'autre), tandis que la fabrication, délocalisée dans des pays à bas salaires, en capte une faible part.",
                "Résultat : 77 % de la valeur en amont et en aval, 18 % pour la fabrication.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : un groupe automobile européen fabrique ses moteurs dans son pays d'origine, ses faisceaux électriques au Maroc, assemble ses petites voitures en Slovaquie et possède une usine en Chine qui produit uniquement pour le marché chinois. Document 2 (données fictives) : coût horaire moyen de la main-d'œuvre dans l'industrie : pays d'origine 40 euros, Slovaquie 15 euros, Maroc 4 euros. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que les firmes multinationales localisent leurs activités en fonction des coûts et de l'accès aux marchés.",
              hint: "Distinguez deux logiques : décomposer la chaîne pour réduire les coûts (étapes à forte main-d'œuvre dans les pays à bas salaires), et produire sur place pour servir un grand marché.",
              solution: [
                "Introduction : une FMN possède des filiales à l'étranger créées par des IDE. Elle organise une chaîne de valeur mondiale en choisissant la localisation de chaque étape selon plusieurs déterminants.",
                "Premier argument, la recherche de coûts plus faibles : les étapes intensives en main-d'œuvre peu qualifiée, comme les faisceaux électriques, sont localisées au Maroc, où le coût horaire (4 euros) est dix fois plus faible que dans le pays d'origine (40 euros). L'assemblage des petites voitures, à faible marge, se fait en Slovaquie, où le coût horaire est 2,7 fois plus faible (40 ÷ 15 ≈ 2,7). C'est une division verticale de la chaîne de valeur.",
                "Les moteurs, qui exigent des compétences élevées et une forte intensité en capital, restent dans le pays d'origine : le coût du travail n'est pas le seul critère, les qualifications comptent aussi.",
                "Second argument, l'accès au marché : l'usine chinoise produit uniquement pour le marché chinois. S'implanter sur place permet d'éviter les coûts de transport et d'éventuels droits de douane, de s'adapter aux goûts locaux et de se rapprocher d'une demande très importante. C'est une logique horizontale : on reproduit la production près des clients.",
                "Conclusion : le dossier montre que la FMN combine une stratégie de réduction des coûts, en fragmentant sa chaîne de valeur, et une stratégie d'accès aux marchés, en produisant au plus près de la demande.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la chaîne de valeur d'un smartphone.",
            items: [
              "Recherche, conception et design du modèle",
              "Fabrication des composants électroniques",
              "Assemblage de l'appareil",
              "Transport vers les marchés de destination",
              "Marketing et vente aux consommateurs",
              "Service après-vente et mises à jour",
            ],
          },
          quiz: [
            {
              q: "À partir de quelle part du capital parle-t-on conventionnellement d'investissement direct à l'étranger ?",
              options: ["50 %", "25 %", "10 %", "1 %"],
              answer: 2,
              why: "La convention de l'OCDE et du FMI retient un seuil de 10 % du capital, qui traduit une influence durable sur la gestion.",
            },
            {
              q: "Dans une chaîne de valeur mondiale, quelles étapes captent généralement le plus de valeur ?",
              options: [
                "L'assemblage final et l'emballage, réalisés dans les pays à bas salaires",
                "La fabrication des pièces les plus simples",
                "Le transport maritime des produits finis",
                "La conception en amont, la marque et la distribution en aval",
              ],
              answer: 3,
              why: "C'est la courbe du sourire : la valeur se concentre aux deux extrémités de la chaîne.",
            },
            {
              q: "Un constructeur automobile s'implante en France pour vendre en Europe sans payer de droits de douane. Quel déterminant domine ?",
              options: [
                "La recherche des plus bas salaires du monde",
                "L'accès au marché",
                "L'accès à des matières premières rares",
                "La fuite devant la concurrence européenne",
              ],
              answer: 1,
              why: "La firme se rapproche de ses clients et contourne les barrières douanières.",
            },
            {
              q: "Pourquoi les effets du protectionnisme sont-ils qualifiés d'ambigus ?",
              options: [
                "Il protège certains emplois mais renchérit les prix et expose aux représailles",
                "Il est toujours favorable aux consommateurs nationaux",
                "Il n'a jamais d'effet sur les importations",
                "Il est interdit par toutes les règles internationales et n'est donc jamais appliqué par les États",
              ],
              answer: 0,
              why: "Il a des gagnants (producteurs protégés) et des perdants (consommateurs, entreprises importatrices, exportateurs visés par des représailles).",
            },
            {
              q: "Qu'appelle-t-on commerce intra-firme ?",
              options: [
                "Le commerce entre deux entreprises concurrentes d'un même pays",
                "Les échanges entre filiales d'un même groupe multinational",
                "Le commerce de produits d'une même branche entre deux pays",
                "Les ventes d'une entreprise sur son seul marché national",
              ],
              answer: 1,
              why: "Une partie du commerce mondial se fait à l'intérieur des groupes, entre la société mère et ses filiales ou entre filiales.",
            },
          ],
          trap: "Croire que les FMN s'implantent à l'étranger uniquement pour profiter de bas salaires : l'accès au marché (produire près des clients) et l'accès aux ressources, notamment à une main-d'œuvre qualifiée, sont aussi des déterminants majeurs.",
          method: "Pour analyser une implantation, posez systématiquement trois questions : que produit la filiale (quelle étape de la chaîne) ? Pour qui (marché local ou réexportation) ? Pourquoi là (coûts, marché, ressources) ? Les réponses indiquent la stratégie de la firme.",
        },
      ],
    },

    /* ==================================================================== */
    /* COMMENT LUTTER CONTRE LE CHÔMAGE ?                                     */
    /* ==================================================================== */
    {
      id: 'chomage',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mesurer-le-chomage',
          title: 'Mesurer le chômage et le sous-emploi',
          minutes: 30,
          objectives: [
            "Définir le chômage au sens du Bureau international du travail (BIT) et le sous-emploi.",
            "Calculer et interpréter le taux de chômage, le taux d'emploi et le taux d'activité.",
            "Distinguer les chômeurs au sens du BIT, le halo autour du chômage et les demandeurs d'emploi inscrits à France Travail.",
          ],
          course: [
            {
              heading: "Qui est chômeur au sens du BIT ?",
              paragraphs: [
                "Pour comparer le chômage entre pays et dans le temps, on utilise la définition du Bureau international du travail (BIT). Est chômeur au sens du BIT une personne en âge de travailler (15 ans ou plus) qui remplit trois conditions à la fois : elle n'a pas travaillé, ne serait-ce qu'une heure, au cours d'une semaine de référence ; elle est disponible pour prendre un emploi dans les deux semaines ; elle a cherché activement un emploi au cours du mois précédent, ou en a trouvé un qui commence dans moins de trois mois.",
                "En France, l'Insee mesure le chômage au sens du BIT grâce à l'enquête Emploi, réalisée en continu auprès d'un large échantillon de ménages. Cette définition est exigeante : une personne qui a travaillé une seule heure dans la semaine est considérée comme ayant un emploi, et une personne sans emploi qui ne cherche plus activement n'est pas comptée comme chômeuse.",
              ],
              box: { label: "Définition", text: "Un chômeur au sens du BIT est une personne de 15 ans ou plus qui n'a pas travaillé, même une heure, durant la semaine de référence, qui est disponible pour travailler dans les deux semaines et qui a cherché activement un emploi au cours du dernier mois (ou en a trouvé un qui commence dans moins de trois mois)." },
            },
            {
              heading: "Population active et indicateurs",
              paragraphs: [
                "La population active regroupe les personnes qui ont un emploi (les actifs occupés) et les chômeurs. Les autres personnes sont inactives : élèves et étudiants qui ne travaillent pas, retraités, personnes au foyer qui ne cherchent pas d'emploi. À partir de ces catégories, on construit trois indicateurs.",
                "Le taux de chômage rapporte le nombre de chômeurs à la population active. Le taux d'emploi rapporte le nombre de personnes en emploi à la population en âge de travailler (souvent les 15-64 ans). Le taux d'activité rapporte la population active à la population en âge de travailler. Ces indicateurs se complètent : le taux de chômage peut baisser sans que l'emploi progresse, par exemple si des chômeurs découragés cessent de chercher et sortent de la population active. Il faut donc toujours le lire avec le taux d'emploi.",
              ],
              box: { label: "Formule", text: "Taux de chômage = chômeurs ÷ population active × 100. Taux d'emploi = actifs occupés ÷ population en âge de travailler × 100. Taux d'activité = population active ÷ population en âge de travailler × 100. Population active = actifs occupés + chômeurs." },
            },
            {
              heading: "Les frontières floues : halo du chômage et sous-emploi",
              paragraphs: [
                "Entre emploi, chômage et inactivité, les frontières sont floues. Le halo autour du chômage regroupe des personnes inactives au sens du BIT qui souhaitent pourtant travailler : soit elles cherchent un emploi mais ne sont pas disponibles rapidement (par exemple parce qu'elles terminent une formation), soit elles sont disponibles mais ne cherchent pas activement, souvent par découragement.",
                "Le sous-emploi concerne, lui, des personnes qui ont un emploi. Selon l'Insee, il regroupe les personnes à temps partiel qui souhaitent travailler davantage et sont disponibles pour le faire (on parle de temps partiel subi), ainsi que celles qui ont travaillé moins que d'habitude pour des raisons économiques, comme le chômage partiel ou technique. Une caissière à temps partiel qui voudrait travailler à temps plein est en emploi, mais en situation de sous-emploi.",
              ],
              box: { label: "Définition", text: "Le sous-emploi désigne les personnes en emploi qui travaillent moins qu'elles ne le souhaitent : temps partiel subi, ou réduction d'activité pour raisons économiques (chômage partiel). Le halo du chômage désigne des inactifs qui souhaitent travailler sans remplir tous les critères du BIT." },
            },
            {
              heading: "Deux sources différentes : l'Insee et France Travail",
              paragraphs: [
                "France Travail (nom de Pôle emploi depuis le 1er janvier 2024) publie le nombre de demandeurs d'emploi inscrits, répartis en catégories. La catégorie A regroupe les personnes sans emploi tenues de rechercher un emploi ; les catégories B et C regroupent des personnes qui ont exercé une activité réduite dans le mois (courte pour B, 78 heures ou moins ; longue pour C, plus de 78 heures).",
                "Ces chiffres ne coïncident pas avec le chômage au sens du BIT. Certains inscrits ne sont pas chômeurs au sens du BIT (ils ont travaillé quelques heures, ou ne cherchent pas activement), et certains chômeurs au sens du BIT ne sont pas inscrits (des jeunes sans droit à indemnisation, par exemple). De plus, le nombre d'inscrits dépend de règles administratives (radiations, conditions d'inscription). Seul le chômage au sens du BIT permet des comparaisons internationales.",
              ],
              box: { label: "À retenir", text: "Chômage BIT (Insee, enquête Emploi) : comparable dans le temps et entre pays. Demandeurs d'emploi inscrits (France Travail, catégories A, B, C) : donnée administrative, plus large sur certains points et plus étroite sur d'autres." },
            },
          ],
          keyPoints: [
            "Chômeur BIT : sans emploi (pas même une heure), disponible sous deux semaines, en recherche active.",
            "Population active = actifs occupés + chômeurs ; les autres personnes sont inactives.",
            "Taux de chômage = chômeurs ÷ population active ; taux d'emploi = actifs occupés ÷ population en âge de travailler.",
            "Le halo du chômage regroupe des inactifs qui souhaitent travailler sans remplir tous les critères du BIT.",
            "Le sous-emploi concerne des personnes en emploi : temps partiel subi, chômage partiel.",
            "Les inscrits à France Travail ne se confondent pas avec les chômeurs au sens du BIT.",
          ],
          example: {
            statement: "Dans un pays (données fictives), la population âgée de 15 à 64 ans compte 40 millions de personnes, dont 27 millions d'actifs occupés et 2,4 millions de chômeurs au sens du BIT. Calculez la population active, le taux de chômage, le taux d'emploi et le taux d'activité.",
            solution: [
              "Population active = actifs occupés + chômeurs = 27 + 2,4 = 29,4 millions.",
              "Taux de chômage = 2,4 ÷ 29,4 × 100 ≈ 8,2 %.",
              "Taux d'emploi = 27 ÷ 40 × 100 = 67,5 %.",
              "Taux d'activité = 29,4 ÷ 40 × 100 = 73,5 %.",
              "Attention : le taux de chômage se calcule par rapport à la population active, et non par rapport à toute la population en âge de travailler (2,4 ÷ 40 = 6 % serait faux). Réponse : 29,4 millions d'actifs, 8,2 % de chômage, 67,5 % d'emploi, 73,5 % d'activité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque personne parmi les actifs occupés, les chômeurs au sens du BIT ou les inactifs, et précisez si elle relève du halo du chômage ou du sous-emploi. (a) Léa, 20 ans, étudiante, ne travaille pas et ne cherche pas d'emploi. (b) Karim a travaillé 3 heures en intérim pendant la semaine de référence et voudrait travailler à temps plein. (c) Sophie est sans emploi, cherche activement et peut commencer immédiatement. (d) Marc est sans emploi, voudrait travailler mais a renoncé à chercher. (e) Julie est sans emploi, cherche activement, mais ne pourra commencer que dans deux mois, à la fin de sa formation.",
              hint: "Vérifiez les trois critères du BIT dans l'ordre : a-t-elle travaillé au moins une heure ? Est-elle disponible sous deux semaines ? Cherche-t-elle activement ?",
              solution: [
                "(a) Léa ne travaille pas et ne cherche pas : inactive.",
                "(b) Karim a travaillé au moins une heure : il est actif occupé. Comme il souhaite travailler davantage, il est en sous-emploi.",
                "(c) Sophie remplit les trois critères : chômeuse au sens du BIT.",
                "(d) Marc ne cherche pas activement : il est inactif au sens du BIT, mais comme il souhaite travailler, il fait partie du halo du chômage.",
                "(e) Julie n'est pas disponible dans les deux semaines : elle est inactive au sens du BIT et appartient au halo du chômage.",
              ],
            },
            {
              level: 2,
              statement: "Dans un pays (données fictives), la population de 15 à 64 ans compte 50 millions de personnes. Le taux d'activité est de 72 % et le taux de chômage de 7,5 %. Calculez la population active, le nombre de chômeurs, le nombre d'actifs occupés et le taux d'emploi.",
              hint: "Partez du taux d'activité pour trouver la population active, puis appliquez le taux de chômage à cette population active.",
              solution: [
                "Population active = 50 × 0,72 = 36 millions.",
                "Chômeurs = 36 × 0,075 = 2,7 millions.",
                "Actifs occupés = 36 - 2,7 = 33,3 millions.",
                "Taux d'emploi = 33,3 ÷ 50 × 100 = 66,6 %.",
                "Résultat : 36 millions d'actifs, 2,7 millions de chômeurs, 33,3 millions d'actifs occupés, taux d'emploi de 66,6 %.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, étude d'un document. Document (données fictives) : dans un pays, la population de 15 à 64 ans est de 40 millions en année 1 comme en année 2. Les actifs occupés sont 26 millions en année 1 comme en année 2. Les chômeurs au sens du BIT passent de 2,6 millions en année 1 à 2,2 millions en année 2. Questions : (1) Calculez le taux de chômage et le taux d'emploi pour chaque année. (2) Un responsable politique affirme que la baisse du chômage prouve que l'emploi s'est amélioré. À l'aide du document, discutez cette affirmation.",
              hint: "Calculez la population active de chaque année : a-t-elle varié ? Où sont passées les personnes qui ne sont plus comptées comme chômeuses ?",
              solution: [
                "(1) Année 1 : population active = 26 + 2,6 = 28,6 millions ; taux de chômage = 2,6 ÷ 28,6 × 100 ≈ 9,1 % ; taux d'emploi = 26 ÷ 40 × 100 = 65 %.",
                "Année 2 : population active = 26 + 2,2 = 28,2 millions ; taux de chômage = 2,2 ÷ 28,2 × 100 ≈ 7,8 % ; taux d'emploi = 26 ÷ 40 × 100 = 65 %.",
                "(2) Le taux de chômage baisse de 1,3 point environ, mais le nombre d'actifs occupés et le taux d'emploi sont inchangés : aucun emploi n'a été créé.",
                "Les 0,4 million de chômeurs en moins n'ont pas trouvé d'emploi : ils sont sortis de la population active (qui baisse de 28,6 à 28,2 millions). Il peut s'agir de chômeurs découragés qui ont cessé de chercher, et qui rejoignent alors le halo du chômage, ou de personnes parties en formation ou à la retraite.",
                "Conclusion : l'affirmation est contestable. La baisse du taux de chômage ne traduit pas ici une amélioration de l'emploi ; il faut lire le taux de chômage avec le taux d'emploi et le halo du chômage.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La mesure du chômage.",
            statements: [
              { text: "Une personne qui a travaillé une heure dans la semaine de référence n'est pas chômeuse au sens du BIT.", true: true, why: "Le premier critère exige de n'avoir pas travaillé, même une heure." },
              { text: "Le taux de chômage rapporte les chômeurs à toute la population en âge de travailler.", true: false, why: "Il les rapporte à la population active (actifs occupés + chômeurs)." },
              { text: "Un étudiant qui ne cherche pas d'emploi fait partie de la population active.", true: false, why: "Il est inactif : il n'a pas d'emploi et n'en cherche pas." },
              { text: "Une personne à temps partiel qui souhaite travailler plus est en sous-emploi.", true: true, why: "C'est le cas du temps partiel subi, qui relève du sous-emploi." },
              { text: "Le nombre d'inscrits à France Travail est égal au nombre de chômeurs au sens du BIT.", true: false, why: "Les deux sources ont des définitions différentes et ne coïncident pas." },
              { text: "Le taux de chômage peut baisser sans création d'emploi.", true: true, why: "C'est le cas si des chômeurs découragés sortent de la population active." },
              { text: "Une personne sans emploi qui a renoncé à chercher appartient au halo du chômage si elle souhaite travailler.", true: true, why: "Elle n'est pas chômeuse au sens du BIT, mais elle souhaite un emploi." },
            ],
          },
          quiz: [
            {
              q: "Quelle condition ne fait PAS partie de la définition du chômeur au sens du BIT ?",
              options: [
                "Ne pas avoir travaillé, même une heure, durant la semaine de référence",
                "Être disponible pour travailler dans les deux semaines",
                "Avoir cherché activement un emploi au cours du dernier mois",
                "Être inscrit comme demandeur d'emploi",
              ],
              answer: 3,
              why: "L'inscription à France Travail n'est pas un critère du BIT : on peut être chômeur BIT sans être inscrit.",
            },
            {
              q: "Un pays compte 30 millions d'actifs occupés et 3 millions de chômeurs. Quel est son taux de chômage ?",
              options: ["10 %", "9,1 %", "11 %", "90,9 %"],
              answer: 1,
              why: "Population active = 33 millions ; 3 ÷ 33 × 100 ≈ 9,1 %.",
            },
            {
              q: "Le sous-emploi concerne des personnes :",
              options: [
                "Qui ont un emploi mais travaillent moins qu'elles ne le souhaitent",
                "Qui n'ont pas d'emploi et en cherchent activement un",
                "Qui ont renoncé à chercher un emploi par découragement",
                "Qui sont trop jeunes pour être comptées dans la population active du pays",
              ],
              answer: 0,
              why: "Le sous-emploi regroupe des actifs occupés : temps partiel subi ou chômage partiel.",
            },
            {
              q: "Que rapporte le taux d'emploi ?",
              options: [
                "Les chômeurs à la population active",
                "La population active à la population totale du pays",
                "Les actifs occupés à la population en âge de travailler",
                "Les emplois vacants aux demandeurs d'emploi inscrits à France Travail",
              ],
              answer: 2,
              why: "Le taux d'emploi mesure la part des personnes en âge de travailler qui ont effectivement un emploi.",
            },
            {
              q: "Pourquoi le chômage au sens du BIT est-il préféré pour les comparaisons internationales ?",
              options: [
                "Parce qu'il donne toujours des chiffres plus faibles",
                "Parce qu'il est calculé directement par le gouvernement de chaque pays",
                "Parce qu'il repose sur une définition commune à tous les pays",
                "Parce qu'il inclut le halo du chômage",
              ],
              answer: 2,
              why: "Les inscriptions administratives dépendent des règles nationales, alors que la définition du BIT est la même partout.",
            },
          ],
          trap: "Calculer le taux de chômage en divisant les chômeurs par la population totale ou par la population en âge de travailler : le dénominateur est la population active, c'est-à-dire les actifs occupés plus les chômeurs.",
          method: "Avant tout calcul, écrivez la chaîne des catégories : population en âge de travailler = actifs (occupés + chômeurs) + inactifs. Placez chaque donnée dans cette chaîne, puis choisissez le bon dénominateur pour chaque taux.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'causes-du-chomage',
          title: 'Les causes du chômage structurel et conjoncturel',
          minutes: 35,
          objectives: [
            "Distinguer le chômage structurel et le chômage conjoncturel.",
            "Comprendre que les problèmes d'appariement (frictions, inadéquations spatiales et de qualifications) et les asymétries d'information (salaire d'efficience) sont des sources de chômage structurel.",
            "Comprendre les effets, positifs ou négatifs, des institutions (salaire minimum, règles de protection de l'emploi) sur le chômage structurel.",
            "Comprendre les effets des fluctuations de l'activité économique sur le chômage conjoncturel.",
          ],
          course: [
            {
              heading: "Chômage structurel et chômage conjoncturel",
              paragraphs: [
                "Le chômage conjoncturel est la part du chômage liée au ralentissement de l'activité économique : quand la production recule, les entreprises ont besoin de moins de travail. Il diminue quand l'activité repart. Le chômage structurel est la part du chômage qui subsiste même lorsque l'activité est à son niveau normal : il tient au fonctionnement du marché du travail, à ses institutions et aux transformations de l'économie.",
                "Cette distinction est essentielle pour choisir une politique : relancer l'activité réduit le chômage conjoncturel mais pas le chômage structurel. Dans la réalité, les deux composantes se mêlent, et la part de chacune est estimée et discutée par les économistes.",
              ],
              box: { label: "Définition", text: "Chômage conjoncturel : chômage lié à un ralentissement de l'activité, qui se résorbe avec la reprise. Chômage structurel : chômage qui persiste quel que soit le niveau de l'activité, lié au fonctionnement du marché du travail et à ses institutions." },
            },
            {
              heading: "Les problèmes d'appariement",
              paragraphs: [
                "L'appariement est la mise en relation des offres d'emploi des entreprises et des demandes d'emploi des travailleurs. Il n'est jamais instantané : chercher un emploi ou un candidat prend du temps, l'information est imparfaite. Il existe donc toujours un chômage frictionnel, lié aux délais de recherche, par exemple chez un jeune diplômé qui cherche son premier emploi.",
                "Les difficultés d'appariement tiennent aussi à des inadéquations. L'inadéquation des qualifications apparaît quand les compétences des chômeurs ne correspondent pas à celles que recherchent les entreprises : des postes d'informaticiens restent vacants pendant que d'anciens ouvriers de l'industrie cherchent un emploi. L'inadéquation spatiale apparaît quand les emplois disponibles et les chômeurs ne se trouvent pas dans les mêmes régions, la mobilité géographique étant freinée par le coût du logement ou les attaches familiales. On observe alors à la fois du chômage et des emplois vacants.",
              ],
              box: { label: "Définition", text: "Les problèmes d'appariement désignent les difficultés à faire correspondre offres et demandes d'emploi : frictions (délais de recherche, information imparfaite), inadéquations de qualifications et inadéquations spatiales. Ils expliquent la coexistence de chômeurs et d'emplois vacants." },
            },
            {
              heading: "Asymétries d'information et salaire d'efficience",
              paragraphs: [
                "Sur le marché du travail, l'information est asymétrique : l'employeur ne connaît pas parfaitement la productivité d'un candidat ni l'effort que fournira un salarié. Pour attirer les meilleurs candidats, motiver les salariés, réduire le coût des départs (recrutement, formation) et renforcer leur loyauté, une entreprise peut choisir de verser un salaire supérieur au salaire d'équilibre du marché : c'est le salaire d'efficience. En 1914, Henry Ford a ainsi fixé le salaire de ses ouvriers à 5 dollars par jour, environ le double du salaire courant, pour réduire un absentéisme et une rotation du personnel très élevés.",
                "Ce choix est rationnel pour chaque entreprise, mais il a une conséquence : si de nombreuses entreprises paient un salaire supérieur au salaire d'équilibre, le nombre de personnes qui souhaitent travailler à ce salaire dépasse le nombre d'emplois proposés. Il en résulte un chômage involontaire durable, donc structurel.",
              ],
              box: { label: "Définition", text: "Le salaire d'efficience est un salaire volontairement fixé par l'employeur au-dessus du salaire d'équilibre pour inciter les salariés à l'effort, attirer les plus productifs et les fidéliser, dans un contexte d'asymétrie d'information. Il peut engendrer du chômage structurel." },
            },
            {
              heading: "Les effets ambigus des institutions",
              paragraphs: [
                "Le salaire minimum (en France, le SMIC, créé en 1970) a des effets discutés. Selon l'analyse néoclassique, s'il est fixé au-dessus de la productivité des travailleurs les moins qualifiés, il rend leur embauche non rentable et crée du chômage chez ces travailleurs. Mais il a aussi des effets positifs : il soutient le pouvoir d'achat et donc la demande, il rend le travail plus attractif que l'inactivité, et il limite le pouvoir des employeurs de fixer des salaires très bas quand les travailleurs ont peu d'alternatives.",
                "Les règles de protection de l'emploi (encadrement des licenciements, limitation des contrats courts) ont aussi des effets ambigus. Elles réduisent les licenciements en période de crise et incitent les entreprises à former leurs salariés. Mais elles peuvent freiner les embauches, car l'entreprise hésite à recruter si elle craint de ne pas pouvoir ajuster ses effectifs. Elles peuvent aussi contribuer à un marché du travail dual, qui oppose des salariés protégés en contrat à durée indéterminée (les insiders) et des travailleurs qui alternent contrats précaires et chômage (les outsiders), souvent jeunes ou peu qualifiés. Leur effet sur le niveau global du chômage est incertain ; elles allongent plutôt sa durée.",
              ],
              box: { label: "À retenir", text: "Les institutions du marché du travail ont des effets ambigus : le salaire minimum et la protection de l'emploi peuvent créer du chômage structurel chez certains travailleurs, mais aussi soutenir la demande, la formation et la stabilité des emplois." },
            },
            {
              heading: "Le chômage conjoncturel et les fluctuations de l'activité",
              paragraphs: [
                "Pour John Maynard Keynes (Théorie générale de l'emploi, de l'intérêt et de la monnaie, 1936), le niveau de l'emploi dépend de la demande effective, c'est-à-dire de la demande de biens et services anticipée par les entrepreneurs. Quand la demande baisse (recul de la consommation, de l'investissement ou des exportations), les entreprises réduisent leur production et donc leur demande de travail : elles ne renouvellent pas les contrats courts et l'intérim, puis licencient. Le chômage augmente, ce qui réduit les revenus et la consommation, et aggrave la baisse de la demande.",
                "Si la récession dure, le chômage conjoncturel peut se transformer en chômage structurel : les chômeurs de longue durée perdent leurs compétences et leurs réseaux, et les employeurs hésitent à les recruter. On parle d'effet d'hystérèse : le chômage reste élevé même quand la croissance revient.",
              ],
              box: { label: "Définition", text: "L'effet d'hystérèse désigne la persistance d'un chômage élevé après la disparition de sa cause initiale : un chômage conjoncturel durable devient structurel, par perte de compétences et stigmatisation des chômeurs de longue durée." },
            },
          ],
          keyPoints: [
            "Chômage conjoncturel : lié au ralentissement de l'activité ; chômage structurel : persiste quel que soit le niveau d'activité.",
            "Appariement : frictions, inadéquations de qualifications et inadéquations spatiales.",
            "Asymétrie d'information : le salaire d'efficience, supérieur au salaire d'équilibre, peut créer du chômage structurel.",
            "Salaire minimum et protection de l'emploi ont des effets ambigus sur le chômage structurel.",
            "Keynes : une baisse de la demande effective entraîne une baisse de la production et de l'emploi.",
            "L'hystérèse transforme un chômage conjoncturel durable en chômage structurel.",
          ],
          example: {
            statement: "Expliquez comment le versement de salaires d'efficience peut engendrer du chômage structurel.",
            solution: [
              "Point de départ : l'employeur ne connaît pas parfaitement l'effort ni la productivité de ses salariés ; l'information est asymétrique.",
              "Pour inciter à l'effort, attirer les meilleurs candidats et réduire les départs, il fixe volontairement un salaire supérieur au salaire d'équilibre : c'est un salaire d'efficience (exemple : Ford et ses 5 dollars par jour en 1914).",
              "À ce salaire plus élevé, davantage de personnes souhaitent travailler, alors que les entreprises ne proposent pas plus d'emplois, voire moins, puisque le travail leur coûte plus cher.",
              "L'offre de travail dépasse donc la demande de travail : une partie des candidats ne trouve pas d'emploi, alors qu'elle accepterait de travailler au salaire en vigueur.",
              "Ce chômage involontaire ne disparaît pas avec la reprise de l'activité, car il tient à la manière dont les salaires sont fixés : c'est un chômage structurel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, identifiez la cause du chômage : chômage conjoncturel, chômage frictionnel, inadéquation des qualifications, inadéquation spatiale ou salaire d'efficience. (a) Pendant une récession, une usine perd des commandes et licencie 50 ouvriers. (b) Une jeune diplômée cherche son premier emploi depuis trois semaines et a plusieurs entretiens prévus. (c) Des entreprises cherchent des techniciens en cybersécurité sans en trouver, alors que d'anciens ouvriers du textile sont au chômage. (d) Des emplois de soignants restent vacants dans une région, alors que des candidats qualifiés résident dans une autre région où le logement est moins cher. (e) Une entreprise paie 20 % au-dessus des salaires du marché et refuse chaque année de nombreux candidats.",
              hint: "Demandez-vous si le chômage disparaîtrait avec la reprise (conjoncturel) ou s'il tient au fonctionnement du marché du travail (structurel), puis précisez le mécanisme.",
              solution: [
                "(a) La baisse des commandes est liée au ralentissement de l'activité : chômage conjoncturel.",
                "(b) Le délai normal de recherche d'un emploi : chômage frictionnel.",
                "(c) Les compétences des chômeurs ne correspondent pas aux postes offerts : inadéquation des qualifications.",
                "(d) Les emplois et les candidats ne sont pas au même endroit : inadéquation spatiale.",
                "(e) Le salaire est volontairement fixé au-dessus du marché, et les candidats sont plus nombreux que les postes : salaire d'efficience.",
              ],
            },
            {
              level: 2,
              statement: "Sur le marché du travail peu qualifié d'une région (données fictives), au salaire horaire de 10 euros, 1 000 personnes souhaitent travailler et les entreprises souhaitent embaucher 1 000 personnes. Un salaire minimum de 12 euros est instauré. À ce salaire, 1 100 personnes souhaitent travailler et les entreprises ne souhaitent plus en embaucher que 900. (1) Quel était le salaire d'équilibre ? (2) Calculez le nombre de chômeurs après l'instauration du salaire minimum. (3) Selon quel raisonnement ce chômage apparaît-il ? (4) Indiquez une limite de ce raisonnement.",
              hint: "Le chômage correspond à l'écart entre l'offre de travail (les personnes qui veulent travailler) et la demande de travail (les emplois proposés).",
              solution: [
                "(1) À 10 euros, l'offre et la demande de travail sont égales (1 000) : c'est le salaire d'équilibre.",
                "(2) À 12 euros, l'offre de travail est de 1 100 et la demande de 900. Chômage = 1 100 - 900 = 200 personnes.",
                "(3) C'est le raisonnement néoclassique : un salaire minimum fixé au-dessus du salaire d'équilibre augmente le coût du travail, ce qui réduit les embauches, et attire davantage de candidats ; il apparaît un chômage structurel chez les peu qualifiés.",
                "(4) Limite : ce raisonnement ignore l'effet sur la demande. La hausse du salaire augmente le revenu des salariés en emploi, donc leur consommation, ce qui peut conduire les entreprises à produire et à embaucher davantage. Le salaire minimum peut aussi réduire les départs et améliorer la productivité.",
                "Résultat : 200 chômeurs selon le modèle, mais un effet réel discuté.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : dans un pays, la part des contrats temporaires dans les embauches est de 85 % ; parmi les jeunes de 15 à 24 ans en emploi, 55 % sont en contrat temporaire, contre 10 % des 25 à 54 ans. Document 2 (données fictives) : après une réforme qui assouplit les règles de licenciement, les embauches en CDI augmentent de 8 %, mais les licenciements augmentent aussi de 6 %. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que les institutions du marché du travail ont des effets ambigus sur le chômage structurel.",
              hint: "Construisez deux parties : les effets qui peuvent accroître le chômage structurel, puis ceux qui peuvent le réduire. Mobilisez le salaire minimum et la protection de l'emploi, et utilisez chaque document.",
              solution: [
                "Introduction : les institutions du marché du travail (salaire minimum, règles de protection de l'emploi) encadrent la fixation des salaires et les contrats. Leur effet sur le chômage structurel, qui persiste quel que soit le niveau de l'activité, est ambigu.",
                "Premier temps, des effets qui peuvent accroître le chômage structurel. Une forte protection des CDI peut dissuader d'embaucher en CDI et favoriser un marché dual : selon le document 1, 85 % des embauches se font en contrat temporaire, et 55 % des jeunes en emploi sont en contrat temporaire contre 10 % des 25-54 ans. Les jeunes sont des outsiders qui alternent contrats courts et chômage. De même, un salaire minimum supérieur à la productivité des moins qualifiés peut réduire leur embauche.",
                "Second temps, des effets qui peuvent le réduire ou le limiter. La protection de l'emploi stabilise l'emploi et limite les licenciements en période de difficulté : le document 2 montre qu'un assouplissement augmente certes les embauches en CDI (+8 %) mais aussi les licenciements (+6 %), si bien que l'effet net sur le chômage est faible. Elle incite aussi les entreprises à former leurs salariés. Le salaire minimum soutient la demande et rend le travail plus attractif.",
                "Conclusion : les institutions du marché du travail ont des effets ambigus. Elles influencent surtout la répartition du chômage (jeunes, peu qualifiés) et sa durée, davantage que son niveau global.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre l'enchaînement qui conduit au chômage conjoncturel, puis à l'hystérèse.",
            items: [
              "La demande de biens et services anticipée par les entreprises diminue",
              "Les entreprises réduisent leur production",
              "Elles réduisent leur demande de travail : fin des contrats courts, licenciements",
              "Le chômage augmente et les revenus distribués diminuent",
              "La consommation baisse, ce qui aggrave le recul de la demande",
              "Les chômeurs de longue durée perdent leurs compétences : une partie du chômage devient structurelle",
            ],
          },
          quiz: [
            {
              q: "Quel type de chômage disparaît principalement avec une reprise de l'activité ?",
              options: ["Le chômage conjoncturel", "Le chômage frictionnel", "Le chômage dû aux inadéquations", "Le chômage dû au salaire d'efficience"],
              answer: 0,
              why: "Le chômage conjoncturel est lié au ralentissement de l'activité ; les autres formes sont structurelles.",
            },
            {
              q: "Pourquoi une entreprise verse-t-elle un salaire d'efficience ?",
              options: [
                "Parce que la loi l'oblige à payer plus que le salaire minimum",
                "Parce que ses salariés sont tous très qualifiés au départ",
                "Pour inciter ses salariés à l'effort et les fidéliser",
                "Pour réduire au maximum son coût du travail à court terme",
              ],
              answer: 2,
              why: "Face à l'asymétrie d'information, un salaire plus élevé motive, attire les meilleurs et réduit les départs.",
            },
            {
              q: "Des emplois vacants coexistent avec des chômeurs dans une même région, faute de compétences adaptées. Il s'agit :",
              options: [
                "D'un chômage conjoncturel lié à la récession",
                "D'un effet du salaire d'efficience",
                "D'un effet d'hystérèse",
                "D'une inadéquation des qualifications",
              ],
              answer: 3,
              why: "Les compétences des chômeurs ne correspondent pas à celles demandées : c'est un problème d'appariement.",
            },
            {
              q: "Quel est l'effet le plus probable de règles de protection de l'emploi très strictes ?",
              options: [
                "La suppression complète du chômage des jeunes",
                "Moins de licenciements, mais des embauches plus prudentes et un marché dual",
                "Une forte hausse des licenciements en période de croissance, puis la disparition des CDD",
                "Une baisse automatique du salaire minimum",
              ],
              answer: 1,
              why: "La protection limite les licenciements mais peut freiner l'embauche en CDI et séparer insiders et outsiders.",
            },
            {
              q: "Que désigne l'effet d'hystérèse sur le marché du travail ?",
              options: [
                "La baisse du chômage lorsque la croissance accélère",
                "La hausse des salaires quand le chômage baisse",
                "L'écart entre le nombre de chômeurs BIT et celui des inscrits à France Travail",
                "La persistance d'un chômage élevé après la fin de la récession",
              ],
              answer: 3,
              why: "Un chômage conjoncturel qui dure devient structurel : il persiste même quand l'activité repart.",
            },
          ],
          trap: "Affirmer que le salaire minimum crée nécessairement du chômage : le programme demande de montrer ses effets ambigus. Il peut pénaliser l'embauche des moins qualifiés, mais il soutient aussi la demande et l'attractivité du travail ; son effet net dépend de son niveau.",
          method: "Pour chaque cause de chômage, rédigez une chaîne causale complète en trois maillons : le mécanisme (par exemple le salaire supérieur à l'équilibre), sa conséquence sur l'offre ou la demande de travail, puis le type de chômage qui en résulte.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'politiques-de-l-emploi',
          title: 'Les politiques de lutte contre le chômage',
          minutes: 35,
          objectives: [
            "Connaître les principales politiques mises en œuvre pour lutter contre le chômage.",
            "Expliquer les politiques macroéconomiques de soutien de la demande globale face au chômage conjoncturel.",
            "Expliquer les politiques d'allègement du coût du travail, de formation et de flexibilisation face au chômage structurel.",
            "Relier chaque politique au type de chômage qu'elle vise et en identifier les limites.",
          ],
          course: [
            {
              heading: "Soutenir la demande globale contre le chômage conjoncturel",
              paragraphs: [
                "Lorsque le chômage vient d'une insuffisance de la demande, les politiques macroéconomiques de soutien de la demande globale cherchent à relancer l'activité. La politique budgétaire passe par une hausse des dépenses publiques (investissements, prestations sociales) ou une baisse des impôts : la demande augmente, les entreprises produisent et embauchent davantage. Selon Keynes, l'effet est amplifié par le multiplicateur : les revenus distribués sont en partie dépensés, ce qui crée de nouveaux revenus.",
                "La politique monétaire, menée dans la zone euro par la Banque centrale européenne, passe par une baisse des taux d'intérêt directeurs : le crédit devient moins cher, ce qui stimule l'investissement des entreprises et la consommation des ménages.",
                "Ces politiques ont des limites : elles creusent le déficit et la dette publics, une partie de la demande supplémentaire profite aux importations (contrainte extérieure), et dans la zone euro les États ne maîtrisent plus leur politique monétaire et doivent respecter des règles budgétaires communes. Surtout, elles sont peu efficaces contre le chômage structurel.",
              ],
              box: { label: "Définition", text: "Les politiques de soutien de la demande globale (budgétaire et monétaire) visent à augmenter la consommation et l'investissement pour accroître la production et l'emploi. Elles ciblent le chômage conjoncturel, dit aussi keynésien." },
            },
            {
              heading: "Alléger le coût du travail",
              paragraphs: [
                "Le coût du travail pour l'employeur comprend le salaire brut et les cotisations sociales patronales. Lorsque ce coût dépasse la productivité de certains travailleurs, souvent peu qualifiés, leur embauche n'est pas rentable : on parle de chômage classique. Pour le réduire sans baisser les salaires, l'État peut alléger les cotisations sociales patronales sur les bas salaires.",
                "La France le fait depuis 1993 avec des allègements généraux de cotisations sur les salaires proches du SMIC, renforcés en 2003 (réduction dite « Fillon »). Le crédit d'impôt pour la compétitivité et l'emploi (CICE), créé en 2013, a été transformé en 2019 en baisse durable de cotisations. Ces mesures favorisent l'emploi des peu qualifiés, mais elles coûtent cher aux finances publiques, peuvent produire des effets d'aubaine (des embauches qui auraient eu lieu de toute façon) et inciter à maintenir les salaires sous les seuils où les allègements diminuent : on parle de trappe à bas salaires.",
              ],
              box: { label: "Formule", text: "Coût du travail = salaire brut + cotisations sociales patronales. Une embauche est rentable pour l'entreprise si la valeur de ce que produit le salarié couvre au moins son coût du travail." },
            },
            {
              heading: "Former et mieux apparier",
              paragraphs: [
                "Les politiques de formation visent à réduire l'inadéquation des qualifications en élevant le capital humain des travailleurs : formation initiale, apprentissage, formation continue (en France, le compte personnel de formation existe depuis 2015), formations ciblées vers les métiers qui recrutent. Elles améliorent l'employabilité des chômeurs et la productivité des actifs, mais leurs effets sont lents et dépendent de la qualité des formations.",
                "D'autres mesures améliorent l'appariement : accompagnement des demandeurs d'emploi par France Travail, aides à la mobilité géographique, meilleure information sur les offres. On parle de politiques actives de l'emploi, par opposition aux politiques passives, qui indemnisent le chômage ou réduisent le nombre d'actifs (préretraites).",
              ],
              box: { label: "Définition", text: "Politiques actives : elles cherchent à créer des emplois ou à améliorer l'employabilité et l'appariement (formation, accompagnement, aides à l'embauche). Politiques passives : elles atténuent les conséquences du chômage (indemnisation) ou réduisent la population active." },
            },
            {
              heading: "Flexibiliser le marché du travail",
              paragraphs: [
                "Les politiques de flexibilisation cherchent à réduire les rigidités du marché du travail, jugées responsables d'une partie du chômage structurel. La flexibilité peut être externe (faciliter les embauches et les licenciements, recourir aux contrats courts), interne (adapter les horaires et l'organisation du travail), ou salariale (ajuster les salaires à la situation de l'entreprise). En France, la rupture conventionnelle (2008) permet de mettre fin à un CDI d'un commun accord, et les ordonnances de 2017 ont plafonné les indemnités accordées par les prud'hommes en cas de licenciement sans cause réelle et sérieuse.",
                "L'objectif est de lever la crainte d'embaucher et d'adapter plus vite l'emploi à l'activité. Mais la flexibilisation peut accroître la précarité et renforcer la dualité du marché du travail. Le modèle danois de flexicurité tente de concilier les deux exigences : licenciements faciles, mais indemnisation élevée et accompagnement intensif des chômeurs vers la formation et l'emploi.",
              ],
              box: { label: "À retenir", text: "Chômage conjoncturel (keynésien) : soutien de la demande globale. Chômage classique, lié au coût du travail : allègements de cotisations. Inadéquations : formation et aides à l'appariement. Rigidités : flexibilisation, éventuellement associée à une sécurisation des parcours." },
            },
          ],
          keyPoints: [
            "Chaque politique vise un type de chômage : il faut d'abord diagnostiquer la cause.",
            "Soutien de la demande globale (budget, taux d'intérêt) contre le chômage conjoncturel ; limites : dette, importations, règles européennes.",
            "Allègements de cotisations patronales sur les bas salaires contre le coût du travail des peu qualifiés ; limites : coût, effets d'aubaine, trappe à bas salaires.",
            "Formation et accompagnement contre les inadéquations ; effets lents.",
            "Flexibilisation contre les rigidités ; risque de précarité, d'où la flexicurité.",
            "Politiques actives (emploi, employabilité) et passives (indemnisation).",
          ],
          example: {
            statement: "Dans un pays, le chômage a fortement augmenté après une chute brutale de la consommation et de l'investissement. Quelle politique de l'emploi est la plus adaptée ? Justifiez et indiquez une limite.",
            solution: [
              "Diagnostic : le chômage provient d'un recul de la demande ; les entreprises produisent moins et embauchent moins. C'est un chômage conjoncturel, dit keynésien.",
              "Politique adaptée : une politique de soutien de la demande globale.",
              "Moyens : hausse des dépenses publiques ou baisse des impôts (politique budgétaire), baisse des taux d'intérêt par la banque centrale (politique monétaire).",
              "Mécanisme : la demande augmente, les entreprises produisent plus et embauchent ; l'effet multiplicateur amplifie la hausse des revenus.",
              "Limite : la relance creuse le déficit et la dette publics, et une partie de la demande supplémentaire peut se porter sur les importations. Réponse : une politique de soutien de la demande globale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mesure au type de chômage qu'elle vise en priorité. (a) Un plan d'investissements publics dans les transports pendant une récession. (b) Une baisse des cotisations patronales sur les salaires proches du SMIC. (c) Des formations gratuites aux métiers du numérique pour les chômeurs. (d) Un assouplissement des règles de licenciement. (e) Une aide financière au déménagement pour les chômeurs qui acceptent un emploi dans une autre région.",
              hint: "Rattachez chaque mesure à la cause qu'elle traite : demande insuffisante, coût du travail trop élevé, inadéquation des qualifications, rigidités, inadéquation spatiale.",
              solution: [
                "(a) Soutien de la demande globale : chômage conjoncturel (keynésien).",
                "(b) Allègement du coût du travail : chômage lié au coût du travail des peu qualifiés (chômage classique, composante structurelle).",
                "(c) Formation : chômage structurel dû à l'inadéquation des qualifications.",
                "(d) Flexibilisation : chômage structurel attribué aux rigidités du marché du travail.",
                "(e) Aide à la mobilité : chômage structurel dû à l'inadéquation spatiale.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise envisage d'embaucher un salarié peu qualifié payé 1 800 euros bruts par mois. On suppose (taux fictifs simplifiés) que les cotisations patronales représentent 45 % du salaire brut sans allègement, et 15 % avec allègement. La production mensuelle de ce salarié est évaluée à 2 300 euros. (1) Calculez le coût du travail sans allègement et avec allègement. (2) Calculez la baisse du coût du travail en euros et en pourcentage. (3) L'embauche est-elle rentable dans chaque cas ?",
              hint: "Coût du travail = salaire brut × (1 + taux de cotisations patronales).",
              solution: [
                "(1) Sans allègement : 1 800 × 1,45 = 2 610 euros. Avec allègement : 1 800 × 1,15 = 2 070 euros.",
                "(2) Baisse : 2 610 - 2 070 = 540 euros, soit 540 ÷ 2 610 × 100 ≈ 20,7 %.",
                "(3) Sans allègement, le coût (2 610 euros) dépasse la valeur produite (2 300 euros) : l'embauche n'est pas rentable.",
                "Avec allègement, le coût (2 070 euros) est inférieur à la valeur produite (2 300 euros) : l'embauche devient rentable, sans baisse du salaire perçu.",
                "Résultat : l'allègement réduit le coût du travail d'environ 20,7 % et rend l'embauche rentable ; c'est la logique des allègements de cotisations sur les bas salaires.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : dans un pays, pendant une récession, le taux de chômage passe de 7 % à 10 % en deux ans ; il redescend à 8 % après la reprise. Document 2 (données fictives) : au même moment, 300 000 offres d'emploi restent non pourvues, dont la moitié dans les métiers du numérique et du soin. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que les politiques de lutte contre le chômage doivent être adaptées à la nature du chômage.",
              hint: "Distinguez dans le dossier une composante conjoncturelle (la hausse puis la baisse liée à l'activité) et une composante structurelle (le chômage qui subsiste et les postes non pourvus), puis associez à chacune une politique.",
              solution: [
                "Introduction : le chômage n'a pas une cause unique. On distingue un chômage conjoncturel, lié au ralentissement de l'activité, et un chômage structurel, lié au fonctionnement du marché du travail. Une politique efficace contre l'un peut être inefficace contre l'autre.",
                "Premier temps, le chômage conjoncturel appelle un soutien de la demande. Document 1 : le chômage monte de 7 % à 10 % pendant la récession, puis baisse avec la reprise ; cette hausse de 3 points, dont une partie se résorbe, est de nature conjoncturelle. Une politique budgétaire de relance (investissements publics, baisse d'impôts) et une politique monétaire accommodante (baisse des taux) soutiennent la demande, la production et l'emploi.",
                "Second temps, le chômage structurel appelle des politiques de l'offre de travail. Document 1 : après la reprise, le chômage reste à 8 %, au-dessus de son niveau initial ; une partie est devenue structurelle (hystérèse). Document 2 : 300 000 offres restent non pourvues, dont la moitié dans le numérique et le soin, signe d'une inadéquation des qualifications. Les politiques de formation, les aides à la mobilité et, pour les peu qualifiés, les allègements du coût du travail sont alors adaptés ; une relance de la demande ne pourvoirait pas ces postes.",
                "Conclusion : diagnostiquer la nature du chômage est indispensable. Les politiques de demande traitent la composante conjoncturelle, les politiques de formation, de baisse du coût du travail et de flexibilisation traitent la composante structurelle ; les deux sont souvent combinées.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque politique au problème qu'elle cherche à traiter.",
            pairs: [
              { left: "Relance budgétaire", right: "Une demande globale insuffisante" },
              { left: "Baisse des taux directeurs", right: "Un crédit trop cher qui freine l'investissement" },
              { left: "Allègement des cotisations patronales", right: "Un coût du travail supérieur à la productivité des peu qualifiés" },
              { left: "Formation des chômeurs", right: "Une inadéquation des qualifications" },
              { left: "Aide à la mobilité géographique", right: "Une inadéquation spatiale" },
              { left: "Assouplissement des règles de licenciement", right: "Des rigidités qui freinent l'embauche" },
            ],
          },
          quiz: [
            {
              q: "Quelle politique est adaptée à un chômage dû à une chute de la demande ?",
              options: [
                "Un allègement des cotisations sur les hauts salaires",
                "Une politique de soutien de la demande globale",
                "Un assouplissement des règles de licenciement",
                "Une réduction de l'indemnisation des chômeurs",
              ],
              answer: 1,
              why: "Le chômage conjoncturel (keynésien) se combat en relançant la consommation et l'investissement.",
            },
            {
              q: "Quelle est une limite des allègements de cotisations sur les bas salaires ?",
              options: [
                "Ils augmentent le coût du travail des peu qualifiés",
                "Ils sont interdits par les règles européennes",
                "Ils réduisent directement le salaire net versé chaque mois aux salariés concernés",
                "Ils peuvent créer des effets d'aubaine et une trappe à bas salaires",
              ],
              answer: 3,
              why: "Certaines embauches auraient eu lieu sans aide, et les employeurs peuvent être incités à garder les salaires sous les seuils.",
            },
            {
              q: "Laquelle de ces mesures est une politique active de l'emploi ?",
              options: [
                "Une formation qualifiante pour les chômeurs",
                "Le versement d'allocations chômage",
                "Un dispositif de préretraite pour les salariés les plus âgés",
              ],
              answer: 0,
              why: "La formation améliore l'employabilité ; l'indemnisation et les préretraites relèvent des politiques passives.",
            },
            {
              q: "Que désigne la flexicurité ?",
              options: [
                "L'interdiction des licenciements en période de crise",
                "La suppression de l'assurance chômage pour inciter à la reprise d'emploi",
                "Des licenciements facilités combinés à une forte indemnisation et un accompagnement des chômeurs",
                "La généralisation des contrats à durée déterminée à tous les salariés du pays, y compris dans la fonction publique",
              ],
              answer: 2,
              why: "Inspirée du Danemark, elle associe flexibilité pour les entreprises et sécurité des parcours pour les travailleurs.",
            },
            {
              q: "Pourquoi une relance de la demande est-elle peu efficace contre l'inadéquation des qualifications ?",
              options: [
                "Parce qu'elle ne donne pas aux chômeurs les compétences demandées",
                "Parce qu'elle augmente fortement le coût du travail de toutes les entreprises",
                "Parce qu'elle réduit les dépenses publiques",
                "Parce qu'elle fait baisser la production",
              ],
              answer: 0,
              why: "Plus de demande ne pourvoit pas des postes qui exigent des compétences que les chômeurs n'ont pas : il faut former.",
            },
          ],
          trap: "Proposer la même politique pour tous les chômages : une relance de la demande ne résout pas une inadéquation des qualifications, et une flexibilisation ne compense pas une chute de la demande. Le diagnostic de la cause précède toujours le choix de la politique.",
          method: "Construisez un tableau à trois colonnes à apprendre par cœur : type ou cause du chômage, politique adaptée, limite principale. Au bac, chaque ligne du tableau peut devenir un paragraphe argumenté.",
        },
      ],
    },

    /* ==================================================================== */
    /* CRISES FINANCIÈRES ET RÉGULATION                                       */
    /* ==================================================================== */
    {
      id: 'crises-financieres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'bulles-et-paniques',
          title: 'Bulles spéculatives et paniques bancaires',
          minutes: 35,
          objectives: [
            "Connaître les principales caractéristiques de la crise financière des années 1930 et de celle de 2008.",
            "Comprendre et pouvoir illustrer la formation et l'éclatement d'une bulle spéculative : comportements mimétiques et prophéties autoréalisatrices.",
            "Comprendre les phénomènes de panique bancaire et de faillites bancaires en chaîne.",
          ],
          course: [
            {
              heading: "Deux grandes crises financières : 1929 et 2008",
              paragraphs: [
                "Dans les années 1920, la Bourse de New York (Wall Street) connaît une hausse spectaculaire, entretenue par l'achat d'actions à crédit. Le jeudi 24 octobre 1929, le « jeudi noir », puis le 29 octobre, les cours s'effondrent : c'est le krach. La baisse se poursuit jusqu'en 1932 : l'indice Dow Jones perd près de 90 % de sa valeur entre son sommet de septembre 1929 et son point bas de juillet 1932. De 1930 à 1933, plusieurs milliers de banques américaines font faillite. La crise se diffuse en Europe, avec notamment la faillite de la grande banque autrichienne Creditanstalt en mai 1931. Aux États-Unis, la production recule d'environ un quart entre 1929 et 1933 et le chômage touche environ un quart de la population active en 1933.",
                "Dans les années 2000, une bulle immobilière se forme aux États-Unis. Les banques accordent des crédits immobiliers à des ménages peu solvables, les prêts subprimes, souvent à taux variables, puis les transforment en titres vendus dans le monde entier (titrisation). Quand les prix de l'immobilier se retournent (2006-2007) et que les taux remontent, les défauts de paiement se multiplient et ces titres perdent leur valeur. La crise culmine avec la faillite de la banque d'affaires Lehman Brothers, le 15 septembre 2008 : panique sur les marchés, effondrement des Bourses, gel des prêts entre banques, puis récession mondiale en 2009.",
              ],
              box: { label: "Repère", text: "24 octobre 1929 : jeudi noir à Wall Street. 1930-1933 : vagues de faillites bancaires aux États-Unis. Mai 1931 : faillite de la Creditanstalt. 2007 : crise des subprimes. 15 septembre 2008 : faillite de Lehman Brothers. 2009 : récession mondiale." },
            },
            {
              heading: "La formation d'une bulle spéculative",
              paragraphs: [
                "Un actif financier ou immobilier a une valeur fondamentale, qui dépend des revenus qu'il doit rapporter dans le futur (dividendes pour une action, loyers pour un logement). Une bulle spéculative est un écart durable et croissant entre le prix de marché d'un actif et sa valeur fondamentale. Elle naît de la spéculation : on achète l'actif non pour ses revenus, mais dans l'espoir de le revendre plus cher.",
                "Deux mécanismes entretiennent la hausse. Le premier est la prophétie autoréalisatrice : si de nombreux investisseurs anticipent une hausse des prix, ils achètent, et leurs achats font effectivement monter les prix, ce qui confirme l'anticipation. Le second est le comportement mimétique : faute d'information sûre, chacun imite les autres, en supposant qu'ils savent quelque chose. Keynes comparait la Bourse à un concours de beauté où il ne s'agit pas de choisir le visage que l'on trouve le plus beau, mais celui que les autres trouveront le plus beau.",
                "Le crédit amplifie le phénomène : en empruntant pour acheter, l'investisseur utilise un effet de levier qui multiplie ses gains quand les prix montent, mais aussi ses pertes quand ils baissent. La tulipomanie hollandaise de 1636-1637, où le prix de certains bulbes de tulipes atteignit des sommets avant de s'effondrer, est souvent citée comme l'une des premières bulles.",
              ],
              box: { label: "Définition", text: "Une bulle spéculative est un écart durable et croissant entre le prix d'un actif et sa valeur fondamentale, entretenu par des anticipations de hausse autoréalisatrices et des comportements mimétiques." },
            },
            {
              heading: "L'éclatement de la bulle : le krach",
              paragraphs: [
                "Une bulle finit par éclater. Un événement (hausse des taux d'intérêt, mauvaise nouvelle, ventes de quelques gros investisseurs) fait douter les acheteurs. Les mêmes mécanismes jouent alors en sens inverse : l'anticipation d'une baisse pousse à vendre, les ventes font baisser les prix, ce qui confirme l'anticipation ; chacun imite ceux qui vendent. Les prix s'effondrent : c'est un krach.",
                "Les investisseurs endettés sont contraints de vendre pour rembourser leurs dettes, ce qui accélère la chute. La baisse est souvent beaucoup plus brutale que la hausse qui l'a précédée : une bulle peut se former en plusieurs années et éclater en quelques jours.",
              ],
              box: { label: "Définition", text: "Une prophétie autoréalisatrice est une anticipation qui provoque sa propre réalisation : parce que les agents croient qu'un événement va se produire, ils agissent de telle façon qu'il se produit." },
            },
            {
              heading: "Paniques bancaires et faillites en chaîne",
              paragraphs: [
                "Les banques financent des crédits à long terme (prêts immobiliers, prêts aux entreprises) avec des ressources à court terme, notamment des dépôts que les clients peuvent retirer à tout moment : c'est la transformation des échéances. Elles ne gardent donc qu'une petite partie des dépôts sous forme liquide. Si tous les déposants veulent retirer leur argent en même temps, la banque ne peut pas les rembourser immédiatement : elle est illiquide, même si elle est solvable, c'est-à-dire même si la valeur de ses actifs dépasse celle de ses dettes.",
                "Une panique bancaire se produit quand des déposants, craignant la faillite de leur banque, se précipitent pour retirer leurs dépôts. Ce comportement est une prophétie autoréalisatrice : la ruée des déposants peut provoquer la faillite qu'ils redoutaient. Les économistes Douglas Diamond et Philip Dybvig ont modélisé ce mécanisme, ce qui leur a valu le prix Nobel en 2022 avec Ben Bernanke. Au Royaume-Uni, en septembre 2007, les clients de la banque Northern Rock ont ainsi fait la queue pour retirer leur argent.",
                "Les banques sont liées entre elles par des prêts sur le marché interbancaire. La faillite de l'une prive les autres des sommes qu'elle leur doit, ce qui peut les mettre en difficulté à leur tour : ce sont les faillites en chaîne. Par crainte, les banques cessent de se prêter entre elles, comme en 2007-2008, et la crise se propage à tout le système : c'est le risque systémique.",
              ],
              box: { label: "Définition", text: "Une banque est illiquide quand elle ne dispose pas immédiatement des liquidités nécessaires pour faire face à ses engagements ; elle est insolvable quand la valeur de ses actifs est inférieure à celle de ses dettes. Une panique bancaire peut rendre une banque solvable illiquide, puis la conduire à la faillite." },
            },
          ],
          keyPoints: [
            "1929 : krach de Wall Street (24 octobre), faillites bancaires en série, chute de la production, chômage massif.",
            "2008 : bulle immobilière, prêts subprimes, titrisation, faillite de Lehman Brothers (15 septembre 2008), récession mondiale en 2009.",
            "Une bulle est un écart durable entre le prix d'un actif et sa valeur fondamentale.",
            "Prophéties autoréalisatrices et mimétisme entretiennent la hausse, puis précipitent la chute.",
            "Le crédit et l'effet de levier amplifient gains et pertes.",
            "Panique bancaire : ruée des déposants qui peut faire tomber une banque solvable ; le marché interbancaire propage les faillites en chaîne.",
          ],
          example: {
            statement: "Un investisseur achète pour 100 000 euros d'actions en apportant 20 000 euros et en empruntant 80 000 euros (on néglige les intérêts). Calculez son gain ou sa perte, en euros et en pourcentage de son apport, si le cours des actions (1) monte de 30 %, (2) baisse de 30 %. Que montre ce calcul ?",
            solution: [
              "(1) Hausse de 30 % : les actions valent 100 000 × 1,3 = 130 000 euros. Après remboursement de l'emprunt : 130 000 - 80 000 = 50 000 euros. Gain = 50 000 - 20 000 = 30 000 euros, soit 30 000 ÷ 20 000 × 100 = +150 % de l'apport.",
              "(2) Baisse de 30 % : les actions valent 100 000 × 0,7 = 70 000 euros. Après remboursement : 70 000 - 80 000 = -10 000 euros. L'investisseur perd tout son apport et doit encore 10 000 euros.",
              "Perte totale = 20 000 + 10 000 = 30 000 euros, soit -150 % de l'apport.",
              "Interprétation : l'endettement multiplie par 5 (100 000 ÷ 20 000) l'effet des variations de prix sur le capital de l'investisseur. C'est l'effet de levier : il encourage les achats pendant la hausse et oblige à vendre pendant la baisse, ce qui amplifie la bulle puis le krach.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque élément concerne la crise des années 1930, celle de 2008, ou les deux. (a) Un krach boursier à Wall Street. (b) La faillite de Lehman Brothers. (c) Des prêts immobiliers accordés à des ménages peu solvables. (d) Des faillites bancaires en chaîne. (e) La faillite de la Creditanstalt. (f) Une forte hausse du chômage.",
              hint: "Les deux crises ont des points communs (krach, faillites bancaires, récession) et des éléments propres à chacune.",
              solution: [
                "(a) Les deux : krach d'octobre 1929, et effondrement des Bourses en 2008.",
                "(b) 2008 : Lehman Brothers fait faillite le 15 septembre 2008.",
                "(c) 2008 : ce sont les prêts subprimes.",
                "(d) Les deux : faillites bancaires de 1930-1933 aux États-Unis, difficultés et faillites de banques en 2007-2008.",
                "(e) Années 1930 : la banque autrichienne fait faillite en mai 1931.",
                "(f) Les deux : chômage d'environ un quart de la population active aux États-Unis en 1933, forte hausse du chômage en 2009.",
              ],
            },
            {
              level: 2,
              statement: "Un appartement rapporte un loyer net de 12 000 euros par an. On retient une méthode simplifiée : sa valeur fondamentale est égale au loyer annuel divisé par le taux de rendement exigé par les investisseurs, ici 4 %. (1) Calculez la valeur fondamentale de l'appartement. (2) Il se vend 450 000 euros. Calculez l'écart avec la valeur fondamentale, en euros et en pourcentage. (3) Pourquoi un acheteur peut-il accepter de payer ce prix ?",
              hint: "Valeur fondamentale = revenu annuel ÷ taux de rendement (4 % s'écrit 0,04).",
              solution: [
                "(1) Valeur fondamentale = 12 000 ÷ 0,04 = 300 000 euros.",
                "(2) Écart = 450 000 - 300 000 = 150 000 euros, soit 150 000 ÷ 300 000 × 100 = 50 % au-dessus de la valeur fondamentale.",
                "(3) L'acheteur ne raisonne pas sur les loyers, mais sur la plus-value qu'il espère réaliser en revendant plus cher. S'il anticipe que les prix continueront de monter, et s'il observe que tout le monde achète (mimétisme), payer 450 000 euros lui paraît rationnel.",
                "Résultat : la valeur fondamentale est de 300 000 euros et le prix la dépasse de 50 %, signe possible d'une bulle.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : indice des prix des logements dans un pays, base 100 en année 1 : 112 en année 3, 140 en année 5, 175 en année 7, puis 120 en année 9. Sur la même période, l'indice des loyers passe de 100 à 115. Document 2 (données fictives) : part des acheteurs déclarant acheter « parce que les prix vont continuer à monter » : 15 % en année 1, 48 % en année 7. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que les comportements mimétiques et les prophéties autoréalisatrices peuvent conduire à la formation puis à l'éclatement d'une bulle spéculative.",
              hint: "Comparez l'évolution des prix à celle des loyers (qui reflètent la valeur fondamentale), puis expliquez la hausse et la chute avec les deux mécanismes du programme.",
              solution: [
                "Introduction : une bulle spéculative est un écart durable et croissant entre le prix d'un actif et sa valeur fondamentale, qui dépend des revenus qu'il rapporte, ici les loyers.",
                "Premier temps, la formation de la bulle. Document 1 : entre l'année 1 et l'année 7, les prix des logements augmentent de 75 % alors que les loyers n'augmentent que de 15 % sur l'ensemble de la période : les prix se déconnectent de la valeur fondamentale. Document 2 : la part des acheteurs qui achètent parce qu'ils anticipent une hausse passe de 15 % à 48 %. Ces anticipations sont autoréalisatrices : en achetant, les acheteurs font monter les prix, ce qui confirme leurs attentes. Le mimétisme renforce le mouvement : voyant les autres s'enrichir, de nouveaux acheteurs entrent sur le marché, souvent à crédit.",
                "Second temps, l'éclatement. Entre l'année 7 et l'année 9, l'indice passe de 175 à 120, soit une baisse de (120 - 175) ÷ 175 × 100 ≈ -31 %. Dès que des acheteurs doutent, l'anticipation de baisse devient à son tour autoréalisatrice : chacun vend avant que les prix ne baissent davantage, et les autres l'imitent. Les ménages endettés sont contraints de vendre, ce qui accélère la chute.",
                "Conclusion : les mêmes mécanismes, prophéties autoréalisatrices et mimétisme, expliquent la hausse déconnectée des fondamentaux puis l'effondrement brutal des prix.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la vie d'une bulle spéculative.",
            items: [
              "Une nouveauté (innovation, crédit facile) fait espérer des profits élevés",
              "Les prix de l'actif montent et attirent de nouveaux acheteurs",
              "Le crédit et l'imitation entretiennent la hausse : le prix s'éloigne de la valeur fondamentale",
              "Une mauvaise nouvelle ou une hausse des taux fait douter les investisseurs",
              "Les ventes se multiplient et les prix s'effondrent : c'est le krach",
              "Les investisseurs endettés subissent de lourdes pertes et les banques sont fragilisées",
            ],
          },
          quiz: [
            {
              q: "Quelle banque a fait faillite le 15 septembre 2008 ?",
              options: ["Northern Rock", "Creditanstalt", "Lehman Brothers", "La Banque de France"],
              answer: 2,
              why: "La faillite de la banque d'affaires américaine Lehman Brothers marque le paroxysme de la crise de 2008.",
            },
            {
              q: "Qu'est-ce qu'une prophétie autoréalisatrice sur un marché financier ?",
              options: [
                "Une anticipation qui provoque sa propre réalisation",
                "Une prévision officielle publiée par la banque centrale",
                "Une anticipation toujours fondée sur la valeur fondamentale",
                "Une règle qui interdit les ventes à découvert",
              ],
              answer: 0,
              why: "Si tous anticipent une hausse et achètent, leurs achats font monter les prix et confirment l'anticipation.",
            },
            {
              q: "Une banque solvable peut-elle faire faillite à la suite d'une panique bancaire ?",
              options: [
                "Non, une banque solvable ne peut jamais faire faillite",
                "Oui, car la ruée des déposants la rend illiquide",
                "Non, car les dépôts sont toujours conservés en liquide",
                "Oui, mais seulement si elle a fait de la spéculation immobilière",
              ],
              answer: 1,
              why: "La banque transforme des dépôts à court terme en prêts à long terme : elle ne peut pas rembourser tous les déposants à la fois.",
            },
            {
              q: "À quoi Keynes comparait-il la Bourse pour illustrer le mimétisme ?",
              options: [
                "À une course de chevaux où chacun parie toujours sur le cheval qu'il juge le plus rapide",
                "À une loterie où le hasard décide de tout",
                "À une vente aux enchères au plus offrant",
                "À un concours de beauté où l'on choisit ce que les autres préféreront",
              ],
              answer: 3,
              why: "Chacun cherche à anticiper l'opinion des autres plutôt que la valeur réelle des titres.",
            },
            {
              q: "Pourquoi la faillite d'une banque peut-elle entraîner celle d'autres banques ?",
              options: [
                "Parce que toutes les banques ont les mêmes clients",
                "Parce que les banques se prêtent entre elles sur le marché interbancaire",
                "Parce que la loi oblige alors les banques survivantes à fusionner avec la banque défaillante",
                "Parce que les banques centrales cessent alors d'exister",
              ],
              answer: 1,
              why: "Une banque défaillante ne rembourse pas ses dettes envers les autres banques, qui sont fragilisées à leur tour.",
            },
          ],
          trap: "Confondre illiquidité et insolvabilité : une banque illiquide manque de liquidités immédiates mais peut avoir plus d'actifs que de dettes, alors qu'une banque insolvable a des dettes supérieures à ses actifs. Une panique peut transformer la première situation en faillite.",
          method: "Pour expliquer une bulle, rédigez toujours la boucle en trois temps : anticipation, comportement (achat ou vente, imitation), effet sur le prix qui confirme l'anticipation. Puis montrez que la même boucle tourne en sens inverse lors du krach.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'crise-et-economie-reelle',
          title: 'De la crise financière à l\'économie réelle',
          minutes: 30,
          objectives: [
            "Connaître les principaux canaux de transmission d'une crise financière à l'économie réelle : effets de richesse négatifs, baisse du prix du collatéral et restriction du crédit, défaillances en chaîne, contraction de l'activité.",
            "Illustrer ces canaux avec les crises des années 1930 et de 2008 : chute du PIB et hausse du chômage.",
            "Expliquer le mécanisme de déflation par la dette.",
          ],
          course: [
            {
              heading: "Sphère financière et économie réelle",
              paragraphs: [
                "La sphère financière regroupe les marchés financiers (actions, obligations, titres divers) et les banques, qui collectent l'épargne et financent l'économie. L'économie réelle désigne la production de biens et de services, l'investissement, la consommation et l'emploi. Les deux sont étroitement liées : les entreprises financent leurs investissements par le crédit ou les marchés, et les ménages détiennent une partie de leur patrimoine sous forme d'actifs financiers et immobiliers.",
                "C'est pourquoi une crise financière ne reste pas confinée aux marchés : elle se transmet à l'économie réelle par plusieurs canaux, qui réduisent la demande, la production et l'emploi.",
              ],
              box: { label: "À retenir", text: "Quatre canaux principaux : les effets de richesse négatifs, la baisse du prix du collatéral et la restriction du crédit, les défaillances en chaîne, la dégradation des anticipations qui freine la demande." },
            },
            {
              heading: "Les effets de richesse négatifs",
              paragraphs: [
                "Le patrimoine des ménages comprend des actifs financiers (actions, placements) et immobiliers. Quand le prix de ces actifs s'effondre, leur patrimoine diminue : les ménages se sentent plus pauvres. Pour reconstituer leur épargne ou par prudence, ils réduisent leur consommation, même si leurs revenus n'ont pas encore baissé : c'est l'effet de richesse négatif.",
                "Les entreprises sont aussi touchées : la chute du cours de leurs actions rend plus difficile et plus coûteux le financement de nouveaux projets par émission d'actions, et réduit la valeur de leur patrimoine. L'investissement recule. En 2008, l'effondrement des prix de l'immobilier aux États-Unis a ainsi fortement réduit le patrimoine et la consommation de nombreux ménages américains.",
              ],
              box: { label: "Définition", text: "L'effet de richesse négatif est la baisse de la consommation (ou de l'investissement) qui résulte d'une diminution de la valeur du patrimoine, à revenu inchangé." },
            },
            {
              heading: "Collatéral et contraction du crédit",
              paragraphs: [
                "Pour accorder un crédit, une banque demande souvent une garantie, appelée collatéral : un bien que la banque pourra saisir si l'emprunteur ne rembourse pas (le logement pour un prêt immobilier, des titres ou des équipements pour une entreprise). Quand le prix des actifs baisse, la valeur du collatéral baisse aussi : les emprunteurs peuvent moins emprunter, et les banques durcissent leurs conditions. Ce mécanisme, qui amplifie les retournements, est appelé accélérateur financier.",
                "Les banques elles-mêmes subissent des pertes sur leurs actifs, ce qui réduit leurs fonds propres. Pour respecter leurs obligations et par crainte des défauts, elles prêtent moins, à des taux plus élevés : c'est la contraction du crédit (en anglais, credit crunch). Sur le marché interbancaire, la défiance entraîne une crise de liquidité. Privés de crédit, les ménages achètent moins de logements et de biens durables, et les entreprises réduisent leurs investissements.",
              ],
              box: { label: "Définition", text: "Le collatéral est un actif apporté en garantie d'un prêt. La contraction du crédit (credit crunch) est la forte réduction des crédits accordés par les banques, qui prive les ménages et les entreprises de financement." },
            },
            {
              heading: "Défaillances, anticipations et déflation par la dette",
              paragraphs: [
                "La baisse de la demande et du crédit provoque des faillites d'entreprises, qui ne remboursent pas leurs fournisseurs ni leurs banques : les défaillances se propagent en chaîne. Les licenciements font monter le chômage, ce qui réduit les revenus et la consommation, et la récession s'auto-entretient. Les anticipations pessimistes poussent ménages et entreprises à reporter leurs dépenses. Dans les années 1930, la contraction du commerce mondial, aggravée par des mesures protectionnistes, a encore approfondi la crise.",
                "L'économiste Irving Fisher a décrit en 1933 la déflation par la dette. Les agents surendettés vendent leurs actifs pour rembourser ; ces ventes font baisser les prix ; la baisse générale des prix (déflation) augmente la valeur réelle des dettes, ce qui oblige à vendre davantage. Selon la formule qu'on lui attribue, plus les débiteurs remboursent, plus ils doivent.",
                "Les conséquences réelles sont lourdes. Aux États-Unis, entre 1929 et 1933, la production a reculé d'environ un quart et le chômage a atteint environ un quart de la population active. En 2009, le PIB mondial a reculé, ce qui ne s'était pas produit depuis la Seconde Guerre mondiale ; aux États-Unis, le taux de chômage a atteint environ 10 % à l'automne 2009. En Europe, la crise financière a été suivie d'une crise des dettes publiques dans la zone euro à partir de 2010.",
              ],
              box: { label: "Définition", text: "La déflation par la dette (Irving Fisher, 1933) est un enchaînement dans lequel les ventes d'actifs pour rembourser les dettes font baisser les prix, ce qui alourdit la valeur réelle des dettes et entraîne de nouvelles ventes." },
            },
          ],
          keyPoints: [
            "Une crise financière se transmet à l'économie réelle par plusieurs canaux.",
            "Effet de richesse négatif : la baisse du patrimoine réduit la consommation et l'investissement.",
            "La baisse du prix du collatéral réduit la capacité d'emprunt : c'est l'accélérateur financier.",
            "Les banques fragilisées restreignent le crédit : contraction du crédit (credit crunch) et crise de liquidité.",
            "Défaillances en chaîne, chômage et anticipations pessimistes entretiennent la récession.",
            "Déflation par la dette (Fisher, 1933) : plus les débiteurs remboursent, plus ils doivent.",
          ],
          example: {
            statement: "Montrez, en une chaîne d'arguments, comment l'éclatement d'une bulle immobilière peut entraîner une hausse du chômage.",
            solution: [
              "Les prix des logements s'effondrent après l'éclatement de la bulle.",
              "Effet de richesse négatif : le patrimoine des ménages propriétaires diminue ; ils réduisent leur consommation.",
              "Collatéral : la valeur des logements apportés en garantie baisse ; les ménages peuvent moins emprunter, et les banques, qui subissent des défauts de paiement, réduisent leurs crédits (contraction du crédit).",
              "La demande de logements, de biens durables et d'investissements diminue ; les entreprises produisent moins, certaines font faillite.",
              "Les entreprises réduisent leurs effectifs : le chômage augmente, ce qui réduit encore les revenus et la consommation. Réponse : la crise immobilière se transmet à l'économie réelle par l'effet de richesse et par le crédit, jusqu'à l'emploi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le canal de transmission illustré par chaque situation : effet de richesse négatif, baisse du collatéral, contraction du crédit, défaillances en chaîne ou anticipations pessimistes. (a) Après la chute de la Bourse, un retraité dont l'épargne est placée en actions renonce à changer de voiture. (b) Une banque qui a subi de lourdes pertes refuse désormais la plupart des demandes de prêts. (c) Un artisan ne peut plus emprunter car son local, apporté en garantie, a perdu 30 % de sa valeur. (d) Un fournisseur fait faillite parce que son principal client, en faillite, ne lui a pas payé ses factures. (e) Inquiète de l'avenir, une entreprise en bonne santé reporte la construction d'une nouvelle usine.",
              hint: "Repérez à chaque fois ce qui baisse en premier : le patrimoine, la valeur d'une garantie, l'offre de crédit, un paiement attendu ou la confiance.",
              solution: [
                "(a) Effet de richesse négatif : la baisse de son patrimoine réduit sa consommation.",
                "(b) Contraction du crédit : la banque fragilisée réduit ses prêts.",
                "(c) Baisse du collatéral : la garantie vaut moins, la capacité d'emprunt diminue.",
                "(d) Défaillances en chaîne : la faillite du client entraîne celle du fournisseur.",
                "(e) Anticipations pessimistes : l'incertitude fait reporter l'investissement.",
              ],
            },
            {
              level: 2,
              statement: "Un ménage possède un logement d'une valeur de 300 000 euros et doit encore 230 000 euros à sa banque. La banque accepte de prêter jusqu'à 80 % de la valeur du bien apporté en garantie. Les prix immobiliers baissent de 20 %. (1) Calculez le patrimoine net du ménage (valeur du logement - dette) avant et après la baisse, et sa variation en pourcentage. (2) Calculez le montant maximal que la banque accepterait de prêter avec ce logement en garantie, avant et après. (3) Quels canaux de transmission ces calculs illustrent-ils ?",
              hint: "Après une baisse de 20 %, le logement vaut 300 000 × 0,8. La dette, elle, ne change pas.",
              solution: [
                "(1) Avant : 300 000 - 230 000 = 70 000 euros. Après : le logement vaut 300 000 × 0,8 = 240 000 euros, et le patrimoine net 240 000 - 230 000 = 10 000 euros.",
                "Variation : (10 000 - 70 000) ÷ 70 000 × 100 ≈ -85,7 %. Une baisse de 20 % du prix du logement réduit le patrimoine net de plus de 85 %, à cause de l'endettement.",
                "(2) Avant : 300 000 × 0,8 = 240 000 euros. Après : 240 000 × 0,8 = 192 000 euros, soit 48 000 euros de capacité d'emprunt en moins (-20 %).",
                "(3) Le premier calcul illustre l'effet de richesse négatif : le ménage, bien plus pauvre, va réduire sa consommation. Le second illustre la baisse du prix du collatéral : la capacité d'emprunt diminue, ce qui réduit la demande financée à crédit.",
                "Résultat : patrimoine net de 70 000 à 10 000 euros (environ -85,7 %), capacité d'emprunt de 240 000 à 192 000 euros.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document (données fictives) : dans un pays, entre l'année N et l'année N+1, l'indice boursier baisse de 40 %, l'encours des crédits aux entreprises de 8 %, l'investissement des entreprises de 12 % et la consommation des ménages de 2 %. Le PIB recule de 3 % et le taux de chômage passe de 7 % à 9,5 %. Sujet : à l'aide du document et de vos connaissances, vous montrerez qu'une crise financière peut se transmettre à l'économie réelle.",
              hint: "Organisez votre réponse selon deux canaux (patrimoine et crédit), en terminant chacun par ses effets sur la production et l'emploi. Utilisez au moins quatre données.",
              solution: [
                "Introduction : une crise financière est une perturbation grave des marchés financiers et des banques. L'économie réelle désigne la production, l'investissement, la consommation et l'emploi. Plusieurs canaux relient les deux.",
                "Premier canal, l'effet de richesse négatif. Selon le document, l'indice boursier chute de 40 % : le patrimoine financier des ménages et la valeur des entreprises diminuent. Les ménages réduisent leur consommation (-2 %) ; les entreprises, dont le financement par actions devient difficile, réduisent leurs projets.",
                "Second canal, la contraction du crédit. Les banques, fragilisées par leurs pertes et par la baisse de la valeur des garanties (collatéral), réduisent leurs prêts : l'encours des crédits aux entreprises baisse de 8 %. Privées de financement et pessimistes, les entreprises réduisent fortement leur investissement (-12 %).",
                "Conséquences réelles : la baisse de la consommation et de l'investissement réduit la demande ; le PIB recule de 3 %, les entreprises réduisent leurs effectifs, certaines font faillite, et le taux de chômage augmente de 2,5 points (de 7 % à 9,5 %). La hausse du chômage réduit à son tour les revenus et la consommation.",
                "Conclusion : la crise financière se transmet à l'économie réelle par l'effet de richesse et par la restriction du crédit, jusqu'à provoquer une récession et une hausse du chômage.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? De la crise financière à l'économie réelle.",
            statements: [
              { text: "Une crise financière reste limitée aux marchés et n'affecte pas l'emploi.", true: false, why: "Elle se transmet à l'économie réelle par le patrimoine, le crédit et les anticipations." },
              { text: "Un ménage peut réduire sa consommation sans que son revenu ait baissé.", true: true, why: "C'est l'effet de richesse négatif : son patrimoine a diminué." },
              { text: "Le collatéral est un actif apporté en garantie d'un prêt.", true: true, why: "Si sa valeur baisse, la capacité d'emprunt diminue." },
              { text: "Pendant une crise financière, les banques prêtent davantage pour relancer l'économie.", true: false, why: "Fragilisées, elles restreignent le crédit : c'est le credit crunch." },
              { text: "La déflation augmente la valeur réelle des dettes.", true: true, why: "Les dettes restent fixes en euros alors que les prix et les revenus baissent : c'est la déflation par la dette." },
              { text: "En 2009, le PIB mondial a continué de croître malgré la crise.", true: false, why: "Il a reculé, ce qui ne s'était pas produit depuis la Seconde Guerre mondiale." },
            ],
          },
          quiz: [
            {
              q: "Un ménage réduit sa consommation parce que ses actions ont perdu la moitié de leur valeur. Il s'agit :",
              options: [
                "D'une contraction du crédit bancaire",
                "D'une déflation par la dette",
                "D'une crise de liquidité interbancaire",
                "D'un effet de richesse négatif",
              ],
              answer: 3,
              why: "La baisse de la valeur du patrimoine réduit la consommation, à revenu inchangé.",
            },
            {
              q: "Que désigne l'expression credit crunch ?",
              options: [
                "Une forte baisse des taux d'intérêt décidée par la banque centrale",
                "L'annulation des dettes des ménages par l'État",
                "Une forte réduction des crédits accordés par les banques",
                "La hausse des dépôts bancaires en période de crise",
              ],
              answer: 2,
              why: "Fragilisées et méfiantes, les banques réduisent l'offre de crédit, ce qui prive ménages et entreprises de financement.",
            },
            {
              q: "Pourquoi la baisse du prix des logements réduit-elle la capacité d'emprunt des ménages ?",
              options: [
                "Parce que le logement sert de garantie et vaut moins",
                "Parce que les taux d'intérêt deviennent négatifs",
                "Parce que les banques n'ont plus du tout le droit de prêter",
                "Parce que les revenus des ménages augmentent",
              ],
              answer: 0,
              why: "La valeur du collatéral baisse : la banque accepte de prêter moins.",
            },
            {
              q: "Quel économiste a décrit la déflation par la dette en 1933 ?",
              options: ["Joseph Schumpeter", "Irving Fisher", "Adam Smith", "David Ricardo"],
              answer: 1,
              why: "Irving Fisher a expliqué la gravité de la Grande Dépression par l'interaction du surendettement et de la baisse des prix.",
            },
            {
              q: "Quelle conséquence réelle a suivi la crise de 1929 aux États-Unis ?",
              options: [
                "Une hausse rapide de la production industrielle dès 1930",
                "Une baisse du chômage grâce à la baisse des prix",
                "Un chômage touchant environ un quart des actifs en 1933",
                "Une croissance forte et continue du commerce mondial",
              ],
              answer: 2,
              why: "Entre 1929 et 1933, la production américaine a reculé d'environ un quart et le chômage a explosé.",
            },
          ],
          trap: "Énumérer les canaux de transmission sans aller jusqu'à l'économie réelle : chaque canal doit être prolongé jusqu'à ses effets sur la consommation ou l'investissement, puis sur la production et l'emploi.",
          method: "Rédigez chaque canal comme une chaîne causale avec des connecteurs (donc, ce qui entraîne, par conséquent) : choc financier, agent touché, comportement modifié, effet sur la demande, effet sur la production et l'emploi.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'reguler-le-systeme-financier',
          title: 'Réguler le système financier',
          minutes: 35,
          objectives: [
            "Comprendre que l'aléa moral des banques justifie la régulation du système financier.",
            "Connaître les principaux instruments de régulation du système bancaire et financier : supervision des banques par la banque centrale, ratio de solvabilité, garantie des dépôts.",
            "Calculer et interpréter un ratio de solvabilité.",
          ],
          course: [
            {
              heading: "Pourquoi réguler les banques ? Le risque systémique",
              paragraphs: [
                "Les banques ne sont pas des entreprises comme les autres. Elles gèrent les moyens de paiement, créent de la monnaie en accordant des crédits, financent les ménages et les entreprises, et sont étroitement liées entre elles. La faillite d'une grande banque peut se propager à tout le système financier, puis à l'économie réelle : c'est le risque systémique.",
                "Ce risque est une externalité négative : une banque qui prend des risques excessifs ne supporte pas l'ensemble des coûts que sa faillite imposerait aux autres banques, aux déposants, aux entreprises et aux contribuables. Le marché seul conduit donc à une prise de risque trop élevée, ce qui justifie une régulation publique.",
              ],
              box: { label: "Définition", text: "Le risque systémique est le risque que la défaillance d'un établissement financier se propage à l'ensemble du système financier, puis à l'économie réelle, en raison des liens entre établissements." },
            },
            {
              heading: "L'aléa moral des banques",
              paragraphs: [
                "Pour éviter les paniques et les faillites en chaîne, les pouvoirs publics ont mis en place des filets de sécurité : la banque centrale peut prêter en urgence aux banques à court de liquidités (fonction de prêteur en dernier ressort), les dépôts sont garantis, et l'État sauve les grandes banques en difficulté. En 2008, de nombreux États ont ainsi dû recapitaliser ou soutenir leurs banques.",
                "Ces protections créent un aléa moral. Une banque qui sait qu'elle sera secourue en cas de difficulté, parce qu'elle est trop grande pour qu'on la laisse faire faillite (en anglais, too big to fail), est incitée à prendre davantage de risques : si ses paris réussissent, ses actionnaires et dirigeants en profitent ; s'ils échouent, ce sont les contribuables qui paient. Les déposants, dont les avoirs sont garantis, ne surveillent plus la prudence de leur banque. L'aléa moral justifie donc une régulation qui encadre, à l'avance, la prise de risque des banques.",
              ],
              box: { label: "Définition", text: "L'aléa moral est la situation dans laquelle un agent protégé contre les conséquences d'un risque adopte un comportement plus risqué, parce qu'il n'en supporte pas lui-même toutes les conséquences." },
            },
            {
              heading: "Le ratio de solvabilité",
              paragraphs: [
                "Les fonds propres d'une banque sont les ressources apportées par ses actionnaires et les bénéfices mis en réserve. Ils servent à absorber les pertes : plus ils sont élevés par rapport aux risques pris, plus la banque peut subir de pertes sans faire faillite. Le ratio de solvabilité rapporte les fonds propres aux actifs pondérés par les risques : chaque crédit ou titre détenu est compté selon son risque (un prêt à un État jugé sûr compte peu ou pas, un prêt à une entreprise compte davantage).",
                "Ces règles sont définies au niveau international par le Comité de Bâle sur le contrôle bancaire. Les accords de Bâle I (1988) imposaient un ratio minimal de 8 %. Après la crise de 2008, les accords de Bâle III ont renforcé les exigences : des fonds propres de meilleure qualité, un coussin de sécurité supplémentaire (au total, au moins 10,5 % des actifs pondérés pour les fonds propres, dont 7 % de fonds propres de base), ainsi que des ratios de liquidité et un ratio de levier.",
              ],
              box: { label: "Formule", text: "Ratio de solvabilité = fonds propres ÷ actifs pondérés par les risques × 100. Actifs pondérés = somme, pour chaque catégorie d'actifs, du montant × sa pondération de risque." },
            },
            {
              heading: "Superviser, garantir, séparer",
              paragraphs: [
                "Les règles doivent être contrôlées : c'est la supervision bancaire. Dans la zone euro, le mécanisme de surveillance unique confie depuis novembre 2014 à la Banque centrale européenne la supervision directe des plus grandes banques ; en France, l'Autorité de contrôle prudentiel et de résolution (ACPR), adossée à la Banque de France, contrôle les autres établissements. Les superviseurs vérifient les ratios et soumettent les banques à des tests de résistance (stress tests) simulant des crises graves.",
                "La garantie des dépôts protège les déposants jusqu'à 100 000 euros par personne et par banque dans l'Union européenne : en rassurant les épargnants, elle prévient les paniques bancaires, mais elle renforce l'aléa moral, d'où la nécessité de la supervision. D'autres règles complètent le dispositif : séparation des activités de banque de dépôt et de banque d'investissement (aux États-Unis, le Glass-Steagall Act de 1933, abrogé en 1999 ; en France, la loi de séparation et de régulation des activités bancaires de 2013), et mécanismes de résolution qui font supporter les pertes aux actionnaires et aux créanciers avant les contribuables. Une limite demeure : une partie de l'activité financière, la finance de l'ombre (shadow banking), échappe à la régulation bancaire.",
              ],
              box: { label: "À retenir", text: "L'aléa moral justifie la régulation. Principaux instruments : supervision des banques par la banque centrale, ratio de solvabilité (fonds propres ÷ actifs pondérés), garantie des dépôts, séparation des activités, résolution des faillites." },
            },
          ],
          keyPoints: [
            "Le risque systémique est une externalité négative : le marché seul conduit à trop de risques.",
            "Aléa moral : une banque protégée (prêteur en dernier ressort, garantie des dépôts, too big to fail) prend plus de risques.",
            "L'aléa moral justifie une régulation qui encadre la prise de risque à l'avance.",
            "Ratio de solvabilité = fonds propres ÷ actifs pondérés par les risques ; Bâle III exige au moins 10,5 % avec le coussin.",
            "Supervision : BCE pour les grandes banques de la zone euro depuis 2014, ACPR en France.",
            "Garantie des dépôts jusqu'à 100 000 euros par déposant et par banque dans l'Union européenne.",
          ],
          example: {
            statement: "Une banque dispose de 12 milliards d'euros de fonds propres. Ses actifs (pondérations fictives simplifiées) : 100 milliards d'obligations d'État pondérées à 0 %, 200 milliards de prêts immobiliers pondérés à 35 %, 80 milliards de prêts aux entreprises pondérés à 100 %. Calculez son ratio de solvabilité. Respecte-t-elle une exigence de 10,5 % ? Sinon, de combien doit-elle augmenter ses fonds propres ?",
            solution: [
              "Actifs pondérés = 100 × 0 + 200 × 0,35 + 80 × 1 = 0 + 70 + 80 = 150 milliards d'euros.",
              "Ratio de solvabilité = 12 ÷ 150 × 100 = 8 %.",
              "8 % est inférieur à l'exigence de 10,5 % : la banque ne respecte pas la règle.",
              "Fonds propres nécessaires = 150 × 0,105 = 15,75 milliards d'euros, soit 15,75 - 12 = 3,75 milliards d'euros supplémentaires.",
              "Autre solution : réduire ses actifs pondérés à 12 ÷ 0,105 ≈ 114,3 milliards, en prêtant moins ou en choisissant des actifs moins risqués. Réponse : ratio de 8 %, il manque 3,75 milliards d'euros de fonds propres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une banque dispose de 6 milliards d'euros de fonds propres et de 50 milliards d'euros d'actifs pondérés par les risques. (1) Calculez son ratio de solvabilité. (2) Respecte-t-elle une exigence de 10,5 % ? (3) Quel montant de pertes pourrait-elle absorber avant que son ratio ne tombe à 10,5 %, si ses actifs pondérés restaient de 50 milliards ?",
              hint: "Ratio = fonds propres ÷ actifs pondérés × 100. Pour la question (3), calculez les fonds propres minimaux exigés.",
              solution: [
                "(1) Ratio = 6 ÷ 50 × 100 = 12 %.",
                "(2) 12 % est supérieur à 10,5 % : l'exigence est respectée.",
                "(3) Fonds propres minimaux = 50 × 0,105 = 5,25 milliards d'euros. Marge = 6 - 5,25 = 0,75 milliard d'euros.",
                "Résultat : ratio de 12 % ; la banque pourrait absorber 750 millions d'euros de pertes avant de passer sous 10,5 %.",
              ],
            },
            {
              level: 2,
              statement: "Une banque a 10 milliards d'euros de fonds propres et 100 milliards d'euros d'actifs pondérés par les risques. Lors d'une crise, des emprunteurs font défaut : elle perd 4 milliards d'euros sur des prêts aux entreprises pondérés à 100 %. Ces pertes réduisent d'autant ses fonds propres et ses actifs. (1) Calculez le ratio avant la crise. (2) Calculez les nouveaux fonds propres, les nouveaux actifs pondérés et le nouveau ratio. (3) Quel montant de fonds propres doit-elle lever pour revenir à 10,5 % ? (4) Si elle choisit plutôt de réduire ses crédits, quelle conséquence pour l'économie réelle ?",
              hint: "Les pertes diminuent les fonds propres de 4 milliards et les actifs pondérés de 4 × 100 % = 4 milliards.",
              solution: [
                "(1) Ratio avant la crise = 10 ÷ 100 × 100 = 10 %.",
                "(2) Fonds propres = 10 - 4 = 6 milliards. Actifs pondérés = 100 - 4 = 96 milliards. Ratio = 6 ÷ 96 × 100 = 6,25 %.",
                "(3) Fonds propres exigés = 96 × 0,105 = 10,08 milliards. Elle doit lever 10,08 - 6 = 4,08 milliards d'euros.",
                "(4) Pour revenir à 10,5 % sans lever de fonds propres, elle devrait ramener ses actifs pondérés à 6 ÷ 0,105 ≈ 57,1 milliards, donc réduire fortement ses crédits : c'est une contraction du crédit, qui prive ménages et entreprises de financement et aggrave la récession.",
                "Résultat : le ratio tombe de 10 % à 6,25 % ; il faut lever 4,08 milliards d'euros, sinon la banque restreint le crédit.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, raisonnement s'appuyant sur un dossier. Document 1 (données fictives) : avant une crise, une grande banque affichait un ratio de solvabilité de 5 % ; ses bénéfices avaient doublé en quatre ans grâce à des placements très risqués. Lors de la crise, l'État lui a apporté 20 milliards d'euros pour éviter sa faillite. Document 2 (données fictives) : depuis le renforcement des règles, le ratio moyen des grandes banques du pays est passé de 6 % à 14 %. Sujet : à l'aide du dossier et de vos connaissances, vous montrerez que l'aléa moral des banques justifie la régulation du système financier.",
              hint: "Définissez l'aléa moral, montrez avec le document 1 comment il se manifeste, puis présentez avec le document 2 les instruments qui le corrigent.",
              solution: [
                "Introduction : l'aléa moral désigne le comportement plus risqué d'un agent protégé contre les conséquences de ses risques. La régulation du système financier regroupe les règles et contrôles qui encadrent l'activité des banques.",
                "Premier temps, l'aléa moral conduit les banques à prendre des risques excessifs. Les banques savent qu'elles bénéficient de filets de sécurité : prêteur en dernier ressort, garantie des dépôts, sauvetage public des établissements trop grands pour faire faillite. Document 1 : la banque a doublé ses bénéfices grâce à des placements très risqués avec peu de fonds propres (5 % des actifs pondérés) ; lors de la crise, ce sont les contribuables qui ont supporté le coût, à hauteur de 20 milliards d'euros. Les gains ont été privés, les pertes socialisées.",
                "Second temps, la régulation corrige cette incitation en encadrant les risques à l'avance. Le ratio de solvabilité oblige les banques à financer une part de leurs actifs risqués par des fonds propres, ce qui fait supporter les pertes d'abord par leurs actionnaires : document 2, le ratio moyen des grandes banques passe de 6 % à 14 %, soit plus qu'un doublement (14 ÷ 6 ≈ 2,3). La supervision par la banque centrale (la BCE pour les grandes banques de la zone euro) contrôle le respect des règles, et les mécanismes de résolution limitent le recours à l'argent public.",
                "Conclusion : parce que les filets de sécurité publics, indispensables contre les paniques, incitent les banques à prendre trop de risques, une régulation prudentielle (ratio de solvabilité, supervision) est nécessaire pour limiter l'aléa moral.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Aléa moral", right: "Prise de risque accrue d'un agent protégé contre les conséquences de ses actes" },
              { left: "Risque systémique", right: "Propagation de la faillite d'un établissement à tout le système financier" },
              { left: "Ratio de solvabilité", right: "Fonds propres rapportés aux actifs pondérés par les risques" },
              { left: "Prêteur en dernier ressort", right: "Rôle de la banque centrale qui prête en urgence aux banques à court de liquidités" },
              { left: "Garantie des dépôts", right: "Protection des avoirs des déposants jusqu'à 100 000 euros par banque" },
              { left: "Too big to fail", right: "Banque trop grande pour que l'État la laisse faire faillite" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi l'aléa moral justifie-t-il la régulation bancaire ?",
              options: [
                "Parce que les banques protégées par des filets de sécurité sont incitées à prendre trop de risques",
                "Parce que les banques sont toujours en faillite",
                "Parce que les déposants surveillent trop étroitement leur banque et provoquent ainsi des paniques à répétition",
                "Parce que la banque centrale ne prête jamais aux banques",
              ],
              answer: 0,
              why: "Sachant qu'elles seront secourues, les banques ne supportent pas toutes les conséquences de leurs risques : il faut les encadrer à l'avance.",
            },
            {
              q: "Une banque a 8 milliards de fonds propres et 100 milliards d'actifs pondérés. Quel est son ratio de solvabilité ?",
              options: ["12,5 %", "8 %", "0,8 %", "80 %"],
              answer: 1,
              why: "8 ÷ 100 × 100 = 8 %.",
            },
            {
              q: "Qui supervise directement les plus grandes banques de la zone euro depuis 2014 ?",
              options: [
                "Le Fonds monétaire international",
                "Le Parlement européen",
                "Chaque gouvernement national",
                "La Banque centrale européenne",
              ],
              answer: 3,
              why: "Dans le cadre du mécanisme de surveillance unique, la BCE supervise directement les banques les plus importantes.",
            },
            {
              q: "Quel est l'effet ambivalent de la garantie des dépôts ?",
              options: [
                "Elle augmente les taux d'intérêt et réduit fortement le crédit",
                "Elle supprime les fonds propres des banques",
                "Elle prévient les paniques mais renforce l'aléa moral",
                "Elle oblige les banques à se séparer en deux",
              ],
              answer: 2,
              why: "Rassurés, les déposants ne se ruent plus aux guichets, mais ils ne surveillent plus la prudence de leur banque.",
            },
            {
              q: "À quoi servent les fonds propres d'une banque ?",
              options: [
                "À verser chaque année les intérêts dus aux déposants",
                "À payer les salaires des employés",
                "À financer les dépenses de l'État",
                "À absorber les pertes sans faire faillite",
              ],
              answer: 3,
              why: "Les fonds propres appartiennent aux actionnaires : ils encaissent les pertes avant les déposants et les créanciers.",
            },
          ],
          trap: "Confondre le ratio de solvabilité avec un rapport aux dépôts ou au total brut des actifs : il rapporte les fonds propres aux actifs pondérés par les risques, si bien qu'une banque peut améliorer son ratio en levant des fonds propres ou en réduisant ses actifs risqués.",
          method: "Pour un calcul de ratio, procédez en trois lignes : actifs pondérés (montant × pondération pour chaque catégorie), ratio (fonds propres ÷ actifs pondérés × 100), comparaison avec l'exigence. Puis interprétez toujours en termes de capacité à absorber des pertes.",
        },
      ],
    },
  ],
}
