import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-1re',
  chapters: [
    /* ==================================================================== */
    /* LE VOTE                                                               */
    /* ==================================================================== */
    {
      id: 'vote',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'participation-abstention',
          title: 'Participation électorale et abstention',
          minutes: 30,
          objectives: [
            "Connaître les principales évolutions de la participation électorale en France.",
            "Savoir interpréter des taux d'inscription sur les listes électorales, des taux de participation et des taux d'abstention.",
            "Comprendre que la participation électorale est liée au degré d'intégration sociale, à l'intérêt pour la politique, au sentiment de compétence politique, à des variables sociodémographiques et contextuelles.",
          ],
          course: [
            {
              heading: "Mesurer la participation électorale",
              paragraphs: [
                "En France, le vote est un droit et non une obligation : contrairement à la Belgique ou à l'Australie, où le vote est obligatoire, un électeur français peut choisir de ne pas voter sans être sanctionné. Pour voter, il faut être de nationalité française, âgé d'au moins 18 ans (depuis la loi de 1974), jouir de ses droits civiques et être inscrit sur les listes électorales. Les citoyens d'un autre pays de l'Union européenne qui résident en France peuvent voter aux élections municipales et européennes.",
                "L'inscription est la première étape. Depuis 1997, les jeunes qui atteignent 18 ans sont inscrits d'office dans la commune où ils ont été recensés, et depuis 2019 les listes sont tenues dans un répertoire électoral unique géré par l'Insee. Pourtant, une partie des électeurs potentiels n'est pas inscrite (les non-inscrits) et une partie plus importante est mal inscrite : elle reste inscrite dans une commune qu'elle a quittée (après un déménagement, des études), ce qui rend le vote plus coûteux. La mal-inscription touche surtout les jeunes adultes et les personnes très mobiles.",
                "Le jour du scrutin, on distingue les votants (les inscrits qui se sont déplacés ou ont donné procuration) et les abstentionnistes (les inscrits qui n'ont pas voté). Parmi les votants, certains déposent un bulletin blanc (une enveloppe vide ou un bulletin sans nom) ou un bulletin nul (raturé, déchiré, illisible). Depuis 2014, les bulletins blancs sont décomptés à part des nuls, mais ils ne sont toujours pas comptés dans les suffrages exprimés, qui servent à calculer les résultats des candidats.",
              ],
              box: { label: "Formule", text: "Taux d'inscription = inscrits ÷ électeurs potentiels × 100. Taux de participation = votants ÷ inscrits × 100. Taux d'abstention = abstentionnistes ÷ inscrits × 100 = 100 - taux de participation. Suffrages exprimés = votants - (blancs + nuls)." },
            },
            {
              heading: "Les grandes évolutions de la participation en France",
              paragraphs: [
                "Sous la Ve République, la participation est restée élevée jusqu'à la fin des années 1970, puis l'abstention a progressé à presque tous les types d'élections à partir des années 1980. Cette hausse n'est pas régulière : elle varie fortement selon le type de scrutin. Les sociologues parlent d'une hiérarchie des élections, car les électeurs se mobilisent davantage quand ils perçoivent l'enjeu comme important.",
                "L'élection présidentielle reste la plus mobilisatrice : au second tour de 2022, environ 28 % des inscrits se sont abstenus, ce qui est élevé pour ce scrutin mais bien moins que pour les autres. Les élections législatives, qui suivent désormais la présidentielle de quelques semaines, mobilisent beaucoup moins : au premier tour de 2022, plus d'un inscrit sur deux s'est abstenu. Les élections européennes, régionales et départementales sont souvent les moins suivies ; aux régionales et départementales de 2021, environ deux inscrits sur trois se sont abstenus au premier tour. Le contexte compte aussi : en 2024, la dissolution de l'Assemblée a provoqué une remontée nette de la participation aux législatives.",
                "Surtout, l'abstention systématique (ne jamais voter) reste minoritaire. Les enquêtes de l'Insee sur la participation, qui suivent les mêmes électeurs sur plusieurs tours, montrent que le comportement qui progresse le plus est le vote intermittent : beaucoup d'électeurs votent à certains tours et pas à d'autres, en particulier à la présidentielle mais pas aux législatives. L'abstention est donc moins un retrait définitif qu'une participation sélective.",
              ],
              box: { label: "Repère", text: "Hiérarchie des élections : la présidentielle mobilise le plus, puis les municipales et les législatives ; les européennes, régionales et départementales mobilisent le moins. Le vote intermittent est plus répandu que l'abstention systématique." },
            },
            {
              heading: "Les facteurs de la participation",
              paragraphs: [
                "Le premier facteur est le degré d'intégration sociale. Dès 1968, Alain Lancelot montre que l'abstention est plus forte chez les personnes faiblement insérées dans la société : personnes isolées, chômeurs, locataires récemment installés, personnes qui fréquentent peu d'associations. À l'inverse, être marié, propriétaire, installé depuis longtemps dans sa commune et membre d'organisations favorise le vote. Voter suppose d'appartenir à des groupes où le vote est une habitude et une norme.",
                "Le deuxième facteur tient au rapport à la politique. L'intérêt pour la politique et le sentiment de compétence politique, c'est-à-dire le sentiment d'être capable de comprendre les enjeux et d'avoir un avis légitime, augmentent la participation. Le politiste Daniel Gaxie, dans Le Cens caché (1978), montre que ce sentiment est très inégalement réparti : il dépend surtout du niveau de diplôme et de la position sociale. Alors que le suffrage censitaire a disparu, une sorte de « cens caché » écarte de fait les moins dotés en capital culturel.",
                "Le troisième ensemble regroupe les variables sociodémographiques. L'âge joue selon une courbe en cloche : les jeunes adultes s'abstiennent davantage, la participation augmente jusqu'aux âges de la retraite, puis baisse chez les plus âgés (problèmes de santé, isolement). Le diplôme et la catégorie socioprofessionnelle comptent aussi : les cadres et les diplômés du supérieur votent plus que les ouvriers et les personnes sans diplôme. Enfin, les variables contextuelles (type d'élection, intensité de la campagne, enjeu perçu, offre de candidats) expliquent pourquoi un même électeur vote à un scrutin et pas à un autre.",
              ],
              box: { label: "Définition", text: "Sentiment de compétence politique : sentiment d'un individu d'être capable de comprendre le jeu politique et d'exprimer une opinion légitime. Il est lié au diplôme et à la position sociale, et favorise la participation." },
            },
            {
              heading: "Voter et s'abstenir : un acte individuel et collectif",
              paragraphs: [
                "Le vote est un acte individuel, secret et réalisé dans l'isoloir. Mais il est aussi collectif, car il dépend des groupes auxquels l'électeur appartient. Dans La Démocratie de l'abstention (2007), Céline Braconnier et Jean-Yves Dormagen étudient un quartier populaire de Seine-Saint-Denis : ils montrent que l'on va souvent voter en famille ou entre voisins, et que l'affaiblissement de ces mobilisations collectives (militants de quartier, syndicats, famille) fait baisser la participation des milieux populaires. Le vote est un comportement socialement entretenu.",
                "Toutes les abstentions n'ont pas le même sens. Les politistes Jérôme Jaffré et Anne Muxel distinguent les abstentionnistes « hors du jeu » politique, peu intégrés et peu intéressés, qui s'abstiennent souvent, et les abstentionnistes « dans le jeu », intéressés par la politique et plutôt diplômés, qui s'abstiennent ponctuellement pour exprimer un mécontentement ou parce qu'aucune offre ne leur convient. Chez les jeunes générations, le vote est davantage vécu comme un droit que l'on exerce quand l'enjeu en vaut la peine que comme un devoir civique, ce qui renforce l'intermittence.",
              ],
              box: { label: "À retenir", text: "Abstention « hors du jeu » : retrait lié à une faible intégration et à un faible intérêt pour la politique. Abstention « dans le jeu » : choix ponctuel d'électeurs intéressés, souvent pour exprimer un désaccord avec l'offre politique." },
            },
          ],
          keyPoints: [
            "Taux de participation = votants ÷ inscrits × 100 ; taux d'abstention = 100 - taux de participation ; on rapporte toujours aux inscrits, pas à la population.",
            "Les blancs et nuls sont des votants, mais ils ne font pas partie des suffrages exprimés.",
            "L'abstention progresse depuis les années 1980, surtout aux élections jugées secondaires ; la présidentielle reste la plus mobilisatrice.",
            "Le vote intermittent progresse plus que l'abstention systématique, qui reste minoritaire.",
            "Facteurs : intégration sociale (Lancelot), intérêt et sentiment de compétence politique (Gaxie, « cens caché »), âge, diplôme, PCS, contexte de l'élection.",
            "Abstention « hors du jeu » (retrait) et « dans le jeu » (choix politique) : l'abstention n'a pas un sens unique.",
          ],
          example: {
            statement: "Données fictives. Dans une commune, on compte 12 000 électeurs potentiels, 11 200 inscrits et 6 720 votants. Il y a 240 bulletins blancs et 120 bulletins nuls. La candidate arrivée en tête obtient 3 498 voix. Calculez le taux d'inscription, le taux de participation, le taux d'abstention, puis le score de la candidate en pourcentage des suffrages exprimés et en pourcentage des inscrits.",
            solution: [
              "Taux d'inscription = 11 200 ÷ 12 000 × 100 ≈ 93,3 %. Environ 93 électeurs potentiels sur 100 sont inscrits sur les listes.",
              "Taux de participation = 6 720 ÷ 11 200 × 100 = 60 %. Sur 100 inscrits, 60 ont voté.",
              "Taux d'abstention = 100 - 60 = 40 %, soit 11 200 - 6 720 = 4 480 abstentionnistes (4 480 ÷ 11 200 × 100 = 40 %, la vérification concorde).",
              "Suffrages exprimés = 6 720 - (240 + 120) = 6 360. Score en suffrages exprimés = 3 498 ÷ 6 360 × 100 = 55 %.",
              "Score en pourcentage des inscrits = 3 498 ÷ 11 200 × 100 ≈ 31,2 %.",
              "Réponse : inscription ≈ 93,3 %, participation 60 %, abstention 40 % ; la candidate obtient 55 % des suffrages exprimés mais seulement 31,2 % environ des inscrits, car l'abstention, les blancs et les nuls réduisent fortement la base de calcul.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Lors d'une élection, une ville compte 50 000 inscrits. 32 500 personnes ont voté, dont 1 300 ont déposé un bulletin blanc et 700 un bulletin nul. (1) Calculez le taux de participation et le taux d'abstention. (2) Calculez le nombre de suffrages exprimés. (3) Rédigez une phrase qui donne le sens du taux d'abstention.",
              hint: "Les taux de participation et d'abstention se calculent par rapport aux inscrits ; les blancs et nuls sont des votants mais pas des suffrages exprimés.",
              solution: [
                "(1) Taux de participation = 32 500 ÷ 50 000 × 100 = 65 %. Taux d'abstention = 100 - 65 = 35 % (vérification : 50 000 - 32 500 = 17 500 abstentionnistes ; 17 500 ÷ 50 000 × 100 = 35 %).",
                "(2) Suffrages exprimés = 32 500 - (1 300 + 700) = 32 500 - 2 000 = 30 500.",
                "(3) Lors de cette élection, dans cette ville, sur 100 personnes inscrites sur les listes électorales, 35 n'ont pas voté.",
                "Résultat : participation 65 %, abstention 35 %, 30 500 suffrages exprimés.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, inspirées des tendances observées. Taux de participation selon l'âge à un même scrutin : 18-24 ans : 48 % ; 25-34 ans : 52 % ; 35-49 ans : 63 % ; 50-64 ans : 74 % ; 65-79 ans : 82 % ; 80 ans et plus : 68 %. (1) Calculez l'écart, en points de pourcentage, entre les 65-79 ans et les 18-24 ans. (2) Combien de fois les 65-79 ans ont-ils plus de chances relatives d'avoir voté que les 18-24 ans ? (3) Décrivez la forme de la relation entre âge et participation et proposez deux explications sociologiques.",
              hint: "Un écart entre deux pourcentages s'exprime en points ; un rapport se calcule en divisant l'un par l'autre. Pour expliquer, pensez à l'intégration sociale et à la mal-inscription.",
              solution: [
                "(1) Écart = 82 - 48 = 34 points de pourcentage.",
                "(2) Rapport = 82 ÷ 48 ≈ 1,7. Les 65-79 ans ont environ 1,7 fois plus de chances relatives d'avoir voté que les 18-24 ans.",
                "(3) Forme : la participation augmente avec l'âge jusqu'à 65-79 ans, puis diminue chez les 80 ans et plus (68 %) : c'est une courbe en cloche.",
                "Explication 1 : l'intégration sociale progresse avec l'âge. Les jeunes adultes ont souvent un emploi instable, ne sont pas encore installés durablement, et sont plus souvent mal inscrits après un déménagement lié aux études, ce qui rend le vote plus coûteux.",
                "Explication 2 : chez les plus âgés, les problèmes de santé, la perte d'autonomie et l'isolement (veuvage) réduisent l'intégration et rendent le déplacement plus difficile, d'où la baisse après 80 ans.",
                "On peut ajouter un effet de génération : les générations les plus jeunes vivent davantage le vote comme un droit à exercer selon l'enjeu, ce qui favorise l'intermittence.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que la participation électorale dépend de facteurs sociaux.",
              hint: "Mobilisez deux facteurs bien distincts, par exemple l'intégration sociale et le sentiment de compétence politique. Pour chacun : une affirmation, une explication du mécanisme, une illustration.",
              solution: [
                "Introduction : la participation électorale désigne le fait, pour un inscrit, de prendre part au vote. Bien que le vote soit un acte individuel et secret, sa probabilité varie selon des facteurs sociaux.",
                "Premier facteur (affirmation) : le degré d'intégration sociale favorise la participation. Explication : être inséré dans des groupes (famille, travail, associations, quartier) expose à la norme du vote et à des sollicitations à voter ; l'électeur isolé est moins mobilisé. Illustration : Alain Lancelot montre que l'abstention est plus forte chez les chômeurs, les célibataires et les personnes récemment installées ; Braconnier et Dormagen observent qu'en quartier populaire, on vote souvent en famille.",
                "Second facteur (affirmation) : le sentiment de compétence politique, lié au diplôme et à la position sociale, favorise la participation. Explication : se sentir capable de comprendre les enjeux et d'avoir un avis légitime rend le vote plus naturel ; ceux qui ne s'en sentent pas capables se tiennent à l'écart. Illustration : Daniel Gaxie parle de « cens caché » : les diplômés et les cadres votent davantage que les ouvriers et les personnes sans diplôme.",
                "Conclusion : la participation est socialement différenciée ; elle dépend aussi du contexte de l'élection, ce qui explique le développement du vote intermittent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Taux de participation", right: "Part des inscrits qui ont voté" },
              { left: "Suffrages exprimés", right: "Votants moins les bulletins blancs et nuls" },
              { left: "Mal-inscription", right: "Être inscrit dans une commune où l'on ne réside plus" },
              { left: "Vote intermittent", right: "Voter à certains scrutins et s'abstenir à d'autres" },
              { left: "Cens caché", right: "Exclusion de fait des moins diplômés, qui se sentent peu compétents en politique" },
              { left: "Abstention « dans le jeu »", right: "Abstention ponctuelle d'électeurs intéressés par la politique, souvent par désaccord" },
            ],
          },
          quiz: [
            {
              q: "Sur 20 000 inscrits, 12 000 ont voté. Quel est le taux d'abstention ?",
              options: [
                "60 %",
                "40 %",
                "8 000",
                "Impossible à calculer sans le nombre d'électeurs potentiels",
              ],
              answer: 1,
              why: "Il y a 20 000 - 12 000 = 8 000 abstentionnistes, soit 8 000 ÷ 20 000 × 100 = 40 % des inscrits. Les taux de participation et d'abstention se calculent par rapport aux inscrits.",
            },
            {
              q: "Un électeur qui dépose une enveloppe vide dans l'urne est compté comme :",
              options: [
                "un votant, mais pas comme un suffrage exprimé",
                "un abstentionniste, puisqu'il n'a choisi aucun candidat",
                "un suffrage exprimé, depuis la reconnaissance du vote blanc en 2014",
              ],
              answer: 0,
              why: "Le vote blanc est décompté à part depuis 2014, mais il reste exclu des suffrages exprimés. L'électeur s'est déplacé : il est donc votant.",
            },
            {
              q: "Quelle élection mobilise en général le plus les électeurs en France ?",
              options: [
                "Les élections européennes",
                "Les élections départementales",
                "Les élections législatives qui suivent la présidentielle",
                "L'élection présidentielle",
              ],
              answer: 3,
              why: "Dans la hiérarchie des élections, la présidentielle est perçue comme l'enjeu majeur et reste la plus mobilisatrice, même si l'abstention y progresse aussi.",
            },
            {
              q: "Pour Daniel Gaxie, le « cens caché » désigne :",
              options: [
                "un impôt qu'il fallait payer pour voter avant 1848",
                "l'exclusion de fait de ceux qui se sentent incompétents en politique, souvent les moins diplômés",
                "le secret du vote garanti par l'isoloir",
                "le refus de publier les résultats des bureaux de vote les moins peuplés",
              ],
              answer: 1,
              why: "Le cens caché est une inégalité de fait : le sentiment de compétence politique, lié au diplôme, conditionne la participation alors que le suffrage est universel.",
            },
            {
              q: "Quel constat les enquêtes de l'Insee sur la participation ont-elles mis en évidence ?",
              options: [
                "Les abstentionnistes systématiques sont devenus majoritaires parmi les inscrits",
                "Les jeunes votent plus que les retraités à toutes les élections nationales",
                "Le vote intermittent est plus répandu que l'abstention systématique",
              ],
              answer: 2,
              why: "Beaucoup d'électeurs votent à certains tours et pas à d'autres ; ceux qui ne votent jamais restent une minorité.",
            },
          ],
          trap: "Calculer le taux d'abstention par rapport aux électeurs potentiels ou à la population totale, ou compter les bulletins blancs parmi les abstentionnistes : l'abstention se rapporte aux inscrits, et les blancs sont des votants.",
          method: "Avant tout calcul, écrivez la chaîne électeurs potentiels → inscrits → votants → suffrages exprimés, puis identifiez le dénominateur demandé ; vérifiez enfin que participation et abstention font bien 100 %.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'variables-du-vote',
          title: 'Les variables lourdes du vote',
          minutes: 30,
          objectives: [
            "Comprendre que le vote est à la fois un acte individuel et un acte collectif.",
            "Identifier les principales variables sociales du vote (religion, patrimoine, catégorie socioprofessionnelle, diplôme, âge, genre) et les variables politiques.",
            "Présenter les grands modèles explicatifs du vote : approche sociologique, identification partisane, électeur rationnel.",
            "Analyser l'évolution du poids des variables lourdes, en particulier le déclin du vote de classe.",
          ],
          course: [
            {
              heading: "Le vote, un comportement socialement structuré",
              paragraphs: [
                "Le vote est secret et chaque électeur choisit seul dans l'isoloir. Pourtant, les choix électoraux ne se répartissent pas au hasard : certaines caractéristiques sociales permettent de prévoir, avec une bonne probabilité, l'orientation du vote. On les appelle des variables lourdes, car elles pèsent durablement sur les comportements électoraux. Le vote est donc aussi un acte collectif : il exprime l'appartenance à des groupes sociaux.",
                "La première grande enquête est menée aux États-Unis lors de la présidentielle de 1940 par Paul Lazarsfeld et ses collègues de l'université Columbia, dans le comté d'Erie (Ohio), et publiée sous le titre The People's Choice (1944). Les chercheurs interrogent les mêmes électeurs à plusieurs reprises pendant la campagne. Ils constatent que la campagne change peu d'intentions de vote : elle renforce surtout des préférences déjà formées. Trois caractéristiques suffisent à prédire largement le vote : le statut socio-économique, la religion et le lieu de résidence. Leur conclusion est restée célèbre : une personne pense politiquement comme elle est socialement.",
                "En 1960, l'école de l'université du Michigan (Angus Campbell, Philip Converse, Warren Miller et Donald Stokes, The American Voter) propose le modèle de l'identification partisane. La plupart des électeurs se sentent proches d'un parti, et cet attachement, transmis surtout par la famille pendant la socialisation primaire, oriente durablement leur perception des candidats et des enjeux. Le vote apparaît alors comme l'aboutissement d'une chaîne de causes, des appartenances sociales à l'attachement partisan, puis au jugement sur les candidats.",
              ],
              box: { label: "Définition", text: "Variables lourdes du vote : caractéristiques sociales stables (religion, patrimoine, catégorie socioprofessionnelle, diplôme, âge, genre...) qui influencent durablement et de manière statistique l'orientation du vote. Elles indiquent des probabilités, pas un destin individuel." },
            },
            {
              heading: "Les variables lourdes en France : religion, classe, patrimoine",
              paragraphs: [
                "En France, Guy Michelat et Michel Simon, dans Classe, religion et comportement politique (1977), montrent l'existence de deux grands univers culturels. D'un côté, les catholiques pratiquants réguliers votent très majoritairement à droite ; de l'autre, les ouvriers sans religion, surtout s'ils ont des liens familiaux avec le monde ouvrier, votent très majoritairement à gauche. Leur résultat le plus marquant est que la pratique religieuse prédit le vote encore mieux que l'appartenance de classe.",
                "Le patrimoine est une autre variable lourde : plus un électeur possède d'éléments de patrimoine (logement, terres, entreprise, valeurs mobilières), plus la probabilité d'un vote à droite est élevée, à catégorie sociale donnée. Ce résultat est mis en évidence au début des années 1980 dans l'ouvrage collectif France de gauche, vote à droite. Le secteur d'emploi joue aussi : à profession comparable, les salariés du secteur public votent plus souvent à gauche que ceux du secteur privé.",
                "Pour mesurer le vote de classe, on utilise l'indice d'Alford : c'est la différence, en points, entre le pourcentage d'ouvriers qui votent à gauche et le pourcentage de non-ouvriers qui votent à gauche. Plus l'indice est élevé, plus le vote dépend de la classe sociale ; un indice proche de zéro signifie que les ouvriers ne votent pas plus à gauche que les autres.",
              ],
              box: { label: "Formule", text: "Indice d'Alford = % d'ouvriers votant à gauche - % de non-ouvriers votant à gauche (en points de pourcentage). Exemple : 60 % - 40 % = 20 points." },
            },
            {
              heading: "Des variables qui évoluent",
              paragraphs: [
                "Depuis les années 1980, l'indice d'Alford a fortement baissé en France, comme dans la plupart des pays occidentaux : on parle de déclin du vote de classe. Les causes en sont multiples : recul de l'emploi ouvrier et tertiarisation, affaiblissement des syndicats et du Parti communiste qui encadraient le monde ouvrier, déception à l'égard des gouvernements de gauche. Une partie des ouvriers s'est tournée vers l'abstention, une autre vers le vote pour l'extrême droite. Le vote ouvrier n'a donc pas disparu comme objet d'étude : il s'est recomposé.",
                "La variable religieuse reste forte chez les catholiques pratiquants, même si leur nombre a beaucoup diminué. Le genre a changé de sens : jusqu'aux années 1980, les femmes votaient plus à droite que les hommes, en partie parce qu'elles étaient plus pratiquantes et moins souvent actives ; avec leur entrée massive dans l'emploi salarié et la hausse de leur niveau de diplôme, cet écart s'est effacé puis inversé. La politiste Nonna Mayer a aussi montré que les femmes ont longtemps moins voté pour l'extrême droite que les hommes, un écart qui s'est nettement réduit depuis les années 2010.",
                "D'autres variables prennent de l'importance. Le niveau de diplôme est devenu un clivage majeur : les diplômés du supérieur votent davantage pour la gauche, les écologistes et le centre, les moins diplômés davantage pour l'extrême droite ou s'abstiennent. L'âge joue aussi : les électeurs âgés votent plus pour les partis de gouvernement installés, les plus jeunes se dispersent davantage et s'abstiennent plus.",
              ],
              box: { label: "À retenir", text: "Déclin du vote de classe (baisse de l'indice d'Alford), persistance de la variable religieuse et du patrimoine, inversion du vote selon le genre, montée du diplôme comme clivage : les variables lourdes ne disparaissent pas, elles se recomposent." },
            },
            {
              heading: "Le vote comme choix individuel",
              paragraphs: [
                "D'autres modèles insistent sur la dimension individuelle du vote. Pour l'économiste Anthony Downs (An Economic Theory of Democracy, 1957), l'électeur rationnel compare les programmes et vote pour le parti dont il attend le plus grand avantage. Ce modèle soulève un paradoxe : comme la probabilité qu'une seule voix change le résultat est quasi nulle, un électeur purement calculateur ne devrait pas se déplacer. Le fait que des millions de personnes votent montre que le vote repose aussi sur des normes collectives, comme le sentiment du devoir civique.",
                "Le modèle du vote sur enjeu, développé aux États-Unis dans les années 1970, montre que des électeurs plus diplômés et moins attachés à un parti se déterminent en fonction de questions précises : emploi, sécurité, environnement, pouvoir d'achat. Le vote rétrospectif, analysé par V. O. Key, consiste à juger le bilan des gouvernants sortants pour les reconduire ou les sanctionner. Ces approches ne contredisent pas les variables lourdes : les enjeux jugés importants dépendent eux-mêmes de la position sociale de l'électeur. Le vote combine donc des déterminants collectifs et des choix individuels.",
              ],
              box: { label: "Repère", text: "Columbia, The People's Choice (1944) : le vote dépend des groupes d'appartenance. Michigan, The American Voter (1960) : l'identification partisane. Downs (1957) : l'électeur rationnel. Michelat et Simon (1977) : classe et religion en France." },
            },
          ],
          keyPoints: [
            "Le vote est un acte individuel (secret, choix personnel) et collectif (structuré par les appartenances sociales).",
            "Lazarsfeld (Columbia, 1944) : statut socio-économique, religion et lieu de résidence prédisent le vote ; la campagne renforce plus qu'elle ne convertit.",
            "Michigan (1960) : l'identification partisane, transmise par la famille, oriente durablement le vote.",
            "France : religion (Michelat et Simon, 1977) et patrimoine sont des variables lourdes ; la religion prédit mieux que la classe.",
            "Indice d'Alford = % d'ouvriers votant à gauche - % de non-ouvriers votant à gauche : sa baisse traduit le déclin du vote de classe.",
            "Électeur rationnel (Downs), vote sur enjeu et vote rétrospectif soulignent la part du choix individuel.",
          ],
          example: {
            statement: "Données fictives. Dans un pays, 68 % des ouvriers et 42 % des non-ouvriers ont voté pour les partis de gauche lors d'une élection de 1981. Lors d'une élection de 2022, ces proportions sont de 26 % et 24 %. Calculez l'indice d'Alford aux deux dates et interprétez son évolution.",
            solution: [
              "Rappel : l'indice d'Alford est la différence, en points, entre le pourcentage d'ouvriers et le pourcentage de non-ouvriers qui votent à gauche.",
              "En 1981 : 68 - 42 = 26 points. Les ouvriers votaient nettement plus à gauche que les autres électeurs : le vote de classe était fort.",
              "En 2022 : 26 - 24 = 2 points. Les ouvriers ne votent presque plus davantage à gauche que les autres électeurs.",
              "Évolution : l'indice a perdu 26 - 2 = 24 points. Le vote de classe, au sens d'Alford, a presque disparu.",
              "Interprétation : ce déclin s'explique par la baisse de l'emploi ouvrier, l'affaiblissement des organisations qui encadraient le monde ouvrier (syndicats, Parti communiste) et le report d'une partie des ouvriers vers l'abstention ou l'extrême droite.",
              "Réponse : l'indice passe de 26 à 2 points, ce qui traduit un fort déclin du vote de classe. Il ne signifie pas que la position sociale n'influence plus le vote : l'influence s'est déplacée vers d'autres choix.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Part des électeurs ayant voté pour un candidat de droite selon la pratique religieuse : catholiques pratiquants réguliers : 70 % ; catholiques pratiquants occasionnels : 52 % ; catholiques non pratiquants : 40 % ; sans religion : 22 %. (1) Rédigez une phrase qui donne le sens de la donnée 70 %. (2) Calculez l'écart entre les catholiques pratiquants réguliers et les sans-religion. (3) Quelle conclusion peut-on en tirer ?",
              hint: "Une phrase de présentation reprend la source, le lieu, la date (s'ils sont donnés), la population et l'unité. Un écart entre pourcentages s'exprime en points.",
              solution: [
                "(1) Selon ces données fictives, 70 % des catholiques pratiquants réguliers ont voté pour un candidat de droite.",
                "(2) Écart = 70 - 22 = 48 points de pourcentage.",
                "(3) Plus la pratique religieuse est intense, plus la probabilité de voter à droite est forte : la part passe de 22 % chez les sans-religion à 70 % chez les pratiquants réguliers, de manière régulière.",
                "Conclusion : la pratique religieuse est une variable lourde du vote, comme l'ont montré Michelat et Simon. Ce n'est qu'une probabilité : 30 % des pratiquants réguliers n'ont pas voté à droite.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, indiquez quel modèle explicatif du vote elle illustre le mieux (approche par les variables sociales de l'école de Columbia, identification partisane de l'école du Michigan, électeur rationnel, vote sur enjeu ou vote rétrospectif), et justifiez. (a) Camille, 45 ans, a toujours voté pour le même parti que ses parents, qu'elle considère comme « son » parti. (b) Hugo, ingénieur sans attachement partisan, choisit le candidat dont le programme sur la transition énergétique lui paraît le plus crédible. (c) Dans un bourg rural catholique, la majorité des agriculteurs propriétaires votent à droite depuis des décennies. (d) Mme Diallo vote contre le maire sortant parce que, selon elle, il n'a pas tenu ses promesses sur les transports.",
              hint: "Demandez-vous chaque fois ce qui explique le choix : un groupe social, un attachement durable à un parti, une question précise ou un bilan.",
              solution: [
                "(a) Identification partisane (Michigan) : Camille se sent durablement attachée à un parti, attachement transmis par la socialisation familiale.",
                "(b) Vote sur enjeu : Hugo, diplômé et sans attachement partisan, se décide sur une question précise (la transition énergétique). Son raisonnement est aussi proche de l'électeur rationnel, qui compare les programmes.",
                "(c) Approche par les variables sociales (Columbia, et en France Michelat et Simon) : religion, patrimoine (propriétaires) et lieu de résidence expliquent un vote collectif et stable.",
                "(d) Vote rétrospectif : Mme Diallo juge le bilan du sortant et le sanctionne.",
                "Bilan : les situations (a) et (c) montrent la dimension collective du vote, les situations (b) et (d) sa dimension individuelle ; dans la réalité, ces logiques se combinent.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 2 (étude d'un document). Document (données fictives) : vote au premier tour d'une élection selon le diplôme, en % des suffrages exprimés. Sans diplôme ou brevet : candidat A (extrême droite) 38, candidat B (centre) 18, candidat C (gauche) 20, autres 24. Baccalauréat : A 28, B 24, C 22, autres 26. Diplôme de niveau bac + 3 ou plus : A 12, B 32, C 28, autres 28. Questions : (1) Présentez la donnée 38. (2) Comparez le vote pour le candidat A des électeurs sans diplôme ou titulaires du brevet et des diplômés de niveau bac + 3 ou plus, par un écart et un rapport. (3) À l'aide du document, montrez que le diplôme est une variable explicative du vote.",
              hint: "Pour la question 3, décrivez les variations de chaque candidat selon le diplôme, puis proposez une explication sociologique sans aller au-delà de ce que le document montre.",
              solution: [
                "(1) Selon ce document aux données fictives, lors de ce premier tour, 38 % des suffrages exprimés par les électeurs sans diplôme ou titulaires du brevet se sont portés sur le candidat A.",
                "(2) Écart : 38 - 12 = 26 points. Rapport : 38 ÷ 12 ≈ 3,2. Le candidat A obtient une part environ 3,2 fois plus élevée chez les moins diplômés que chez les diplômés de niveau bac + 3 ou plus.",
                "(3) Le vote varie de manière régulière avec le diplôme : la part du candidat A baisse quand le diplôme s'élève (38, puis 28, puis 12), tandis que celles des candidats B (18, 24, 32) et C (20, 22, 28) augmentent.",
                "Explication : le diplôme est lié à la position sociale (profession, revenu, exposition à la concurrence internationale) et à des valeurs (rapport à l'ouverture culturelle, à l'immigration, à l'Europe). Ces éléments orientent la perception des enjeux et donc le vote.",
                "Conclusion : le diplôme apparaît comme une variable lourde, devenue un clivage majeur à mesure que le vote de classe déclinait. Il reste une variable statistique : 12 % des plus diplômés votent pour A, et la majorité des moins diplômés vote pour d'autres candidats.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les variables du vote.",
            statements: [
              { text: "Une variable lourde permet de prédire avec certitude le vote d'un individu.", true: false, why: "Elle indique une probabilité statistique au niveau d'un groupe, jamais une certitude individuelle." },
              { text: "Selon Michelat et Simon, la pratique religieuse prédit mieux le vote que l'appartenance de classe.", true: true, why: "C'est le résultat central de Classe, religion et comportement politique (1977)." },
              { text: "Une baisse de l'indice d'Alford signifie que le vote de classe recule.", true: true, why: "L'écart de vote à gauche entre ouvriers et non-ouvriers se réduit." },
              { text: "En France, les femmes ont toujours voté plus à gauche que les hommes.", true: false, why: "Jusqu'aux années 1980, elles votaient plus à droite ; l'écart s'est ensuite effacé puis inversé." },
              { text: "Pour l'école de Columbia, la campagne électorale convertit la majorité des électeurs.", true: false, why: "Lazarsfeld observe au contraire que la campagne renforce surtout des préférences déjà formées." },
              { text: "Le paradoxe du vote de Downs montre qu'un électeur purement calculateur aurait peu de raisons de voter.", true: true, why: "Sa voix n'a presque aucune chance de décider du résultat ; le vote s'explique donc aussi par des normes comme le devoir civique." },
              { text: "Le patrimoine est sans lien avec l'orientation du vote une fois la profession connue.", true: false, why: "À catégorie sociale donnée, plus le patrimoine est important, plus le vote à droite est probable." },
            ],
          },
          quiz: [
            {
              q: "Que mesure l'indice d'Alford ?",
              options: [
                "Le taux d'abstention des ouvriers comparé à celui des cadres",
                "La part des ouvriers dans l'ensemble du corps électoral",
                "L'écart de vote à gauche entre ouvriers et non-ouvriers",
                "La différence entre le nombre de partis de gauche et de partis de droite présents au premier tour",
              ],
              answer: 2,
              why: "L'indice d'Alford est la différence entre le pourcentage d'ouvriers et le pourcentage de non-ouvriers qui votent à gauche ; il mesure l'intensité du vote de classe.",
            },
            {
              q: "Quel modèle explique le vote par un attachement durable à un parti transmis par la famille ?",
              options: [
                "L'identification partisane (école du Michigan)",
                "L'électeur rationnel d'Anthony Downs",
                "Le vote rétrospectif fondé sur le bilan du gouvernement sortant",
              ],
              answer: 0,
              why: "The American Voter (1960) montre que la plupart des électeurs s'identifient à un parti, attachement acquis surtout pendant la socialisation primaire.",
            },
            {
              q: "Quelle affirmation résume la conclusion de Lazarsfeld dans The People's Choice ?",
              options: [
                "Les électeurs choisissent seulement en comparant les programmes économiques",
                "Les médias déterminent directement le vote de la majorité des électeurs",
                "Le vote dépend surtout de la personnalité des candidats et de leur image",
                "Une personne pense politiquement comme elle est socialement",
              ],
              answer: 3,
              why: "Le statut socio-économique, la religion et le lieu de résidence prédisent largement le vote ; la campagne renforce plus qu'elle ne convertit.",
            },
            {
              q: "Quel phénomène traduit le déclin du vote de classe en France depuis les années 1980 ?",
              options: [
                "La hausse continue de la part des ouvriers qui votent pour les partis de gauche",
                "Le report d'une partie des ouvriers vers l'abstention ou l'extrême droite",
                "La disparition totale de toute différence de vote entre les catégories sociales",
              ],
              answer: 1,
              why: "Les ouvriers ne votent plus beaucoup plus à gauche que les autres ; ils s'abstiennent davantage ou votent pour l'extrême droite. Des différences de vote entre groupes sociaux subsistent.",
            },
            {
              q: "Le paradoxe du vote mis en évidence par le modèle de Downs repose sur l'idée que :",
              options: [
                "voter coûte du temps alors que la chance qu'une voix soit décisive est quasi nulle",
                "les électeurs votent toujours contre leurs intérêts économiques",
                "le vote obligatoire réduit la qualité des choix électoraux",
                "les partis proposent tous exactement le même programme",
              ],
              answer: 0,
              why: "Pour un électeur purement calculateur, le coût du vote dépasse son bénéfice attendu ; la participation massive s'explique donc aussi par des normes collectives comme le devoir civique.",
            },
          ],
          trap: "Interpréter une variable lourde comme un déterminisme individuel (« tous les catholiques pratiquants votent à droite ») : il s'agit de régularités statistiques, qui laissent place à de nombreux votes différents.",
          method: "Pour une question sur les déterminants du vote, organisez la réponse en deux temps : la dimension collective (variables lourdes, identification partisane), puis la dimension individuelle (électeur rationnel, vote sur enjeu, vote rétrospectif), en citant un auteur et une date pour chaque modèle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'volatilite-electorale',
          title: 'Volatilité électorale et offre politique',
          minutes: 30,
          objectives: [
            "Comprendre que la volatilité électorale revêt des formes variées : intermittence du vote, changement des préférences électorales.",
            "Expliquer la volatilité par l'affaiblissement des identifications partisanes et la montée du vote sur enjeu.",
            "Comprendre le rôle de l'offre politique (partis, candidats, programmes, alliances, mode de scrutin) dans les choix des électeurs.",
            "Illustrer la recomposition du paysage politique français depuis 2017.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la volatilité électorale ?",
              paragraphs: [
                "Un électeur est dit volatil lorsque son comportement électoral change d'une élection à l'autre. Pendant longtemps, la science politique a décrit des électeurs fidèles, votant toujours pour le même camp, voire pour le même parti. Depuis les années 1980, les enquêtes qui suivent les mêmes électeurs dans le temps (les panels) montrent que les comportements sont devenus plus mobiles.",
                "La volatilité prend deux formes principales. La première est l'intermittence du vote : l'électeur alterne vote et abstention selon les scrutins, par exemple en votant à la présidentielle mais pas aux législatives qui suivent. La seconde est le changement de préférence : l'électeur vote pour un parti ou un candidat différent d'une élection à l'autre, ou même entre les deux tours d'un même scrutin. L'intermittence concerne beaucoup plus d'électeurs que le changement de camp.",
                "Il faut distinguer la volatilité au sein d'un même camp (passer d'un parti de gauche à un autre parti de gauche) et la volatilité entre camps (passer de la gauche à la droite). La première est la plus fréquente : beaucoup d'électeurs changent de parti mais restent dans une même famille politique. La volatilité ne signifie donc pas que les électeurs choisissent au hasard.",
              ],
              box: { label: "Définition", text: "Volatilité électorale : changement de comportement électoral d'un individu d'une élection à l'autre, soit par intermittence (alternance entre vote et abstention), soit par changement de préférence (vote pour un autre parti ou un autre candidat)." },
            },
            {
              heading: "Pourquoi les électeurs sont-ils plus volatils ?",
              paragraphs: [
                "La première explication est l'affaiblissement des identifications partisanes. Moins d'électeurs se déclarent proches d'un parti, et les partis figurent parmi les institutions qui inspirent le moins confiance dans les enquêtes, comme le baromètre de la confiance politique du Cevipof. Les grandes organisations qui encadraient les électeurs (Église catholique, syndicats, Parti communiste) ont perdu de leur influence. Le poids des variables lourdes diminue, ce qui laisse plus de place aux choix circonstanciels.",
                "La deuxième explication est l'élévation du niveau d'instruction. Le politiste Russell Dalton parle de mobilisation cognitive : des électeurs plus diplômés et mieux informés n'ont plus besoin de s'en remettre à un parti pour se forger une opinion. Ils se déterminent davantage en fonction des enjeux de chaque élection (emploi, environnement, sécurité, pouvoir d'achat) et du bilan des sortants : c'est le vote sur enjeu et le vote rétrospectif.",
                "Il existe cependant deux profils d'électeurs volatils. Certains sont des électeurs stratèges, politisés et informés, qui adaptent leur vote à la situation. D'autres sont peu intéressés par la politique, hésitent jusqu'au dernier moment et passent facilement du vote à l'abstention. La volatilité peut donc traduire aussi bien une compétence politique accrue qu'un détachement à l'égard de la politique.",
              ],
              box: { label: "À retenir", text: "Causes de la volatilité : déclin des identifications partisanes et des organisations d'encadrement, élévation du niveau d'instruction (mobilisation cognitive), montée du vote sur enjeu. Deux profils : l'électeur stratège et l'électeur peu politisé." },
            },
            {
              heading: "Le rôle de l'offre politique",
              paragraphs: [
                "L'offre politique désigne l'ensemble des partis, des candidats, des programmes et des alliances proposés aux électeurs lors d'une élection. Les électeurs ne votent pas dans l'absolu : ils choisissent parmi ce qui leur est proposé. Un même électeur, avec les mêmes préférences, peut donc changer de vote parce que l'offre a changé : son parti habituel ne présente pas de candidat, une alliance se forme, un nouveau parti apparaît, une personnalité attire ou repousse.",
                "Le second tour d'une élection majoritaire en donne une illustration claire. En 2002, 2017 et 2022, de nombreux électeurs ont dû choisir entre deux candidats qui n'étaient pas leur premier choix, ou s'abstenir et voter blanc. De même, la formation de coalitions électorales, comme la NUPES à gauche aux législatives de 2022 puis le Nouveau Front populaire en 2024, modifie les choix possibles dans chaque circonscription.",
                "Le mode de scrutin fait partie de l'offre. Le scrutin majoritaire à deux tours (présidentielle, législatives) incite au vote utile, c'est-à-dire à voter dès le premier tour pour un candidat qui a des chances d'être qualifié plutôt que pour son candidat préféré, et pousse les partis aux alliances et aux désistements. La représentation proportionnelle (élections européennes) permet davantage d'exprimer une préférence sincère et favorise les petits partis. La campagne, les médias et les sondages, qui informent sur les chances de chacun, influencent aussi ces calculs.",
              ],
              box: { label: "Définition", text: "Offre politique : ensemble des partis, candidats, programmes et alliances entre lesquels les électeurs peuvent choisir à une élection donnée. Elle dépend aussi des règles du jeu, comme le mode de scrutin." },
            },
            {
              heading: "La recomposition du paysage politique français",
              paragraphs: [
                "Sous la Ve République, l'élection du président au suffrage universel direct (adoptée par référendum en 1962) et le scrutin majoritaire ont longtemps favorisé une bipolarisation entre un camp de gauche, dominé par le Parti socialiste à partir de la fin des années 1970, et un camp de droite, dominé par le parti gaulliste puis par l'UMP et Les Républicains. L'alternance entre ces deux camps a structuré la vie politique de 1981 à 2012.",
                "La présidentielle de 2017 marque une rupture de l'offre. Emmanuel Macron, à la tête d'un mouvement créé en 2016, arrive en tête du premier tour avec environ 24 % des suffrages exprimés, devant Marine Le Pen (environ 21 %), François Fillon (environ 20 %) et Jean-Luc Mélenchon (environ 20 %). Pour la première fois, aucun candidat des deux grands partis de gouvernement ne se qualifie pour le second tour, et le candidat socialiste ne recueille qu'environ 6 %. En 2022, le premier tour fait apparaître trois pôles (Emmanuel Macron, Marine Le Pen et Jean-Luc Mélenchon, tous au-dessus de 20 %), tandis que les candidates des Républicains et du Parti socialiste obtiennent moins de 5 % chacune.",
                "Cette recomposition illustre le lien entre volatilité et offre : une partie importante des électeurs des anciens partis de gouvernement a changé de vote parce qu'une nouvelle offre leur était proposée. Mais la relation joue dans les deux sens : les partis adaptent aussi leur offre aux attentes qu'ils perçoivent chez des électeurs devenus plus mobiles.",
              ],
              box: { label: "Repère", text: "1962 : référendum sur l'élection du président au suffrage universel direct. 1981 : première alternance (François Mitterrand). 2002 : Jean-Marie Le Pen au second tour. 2017 : Emmanuel Macron élu, PS et LR éliminés dès le premier tour. 2022 : trois pôles au premier tour." },
            },
          ],
          keyPoints: [
            "La volatilité électorale est le changement de comportement électoral d'une élection à l'autre.",
            "Deux formes : l'intermittence (vote puis abstention) et le changement de préférence ; l'intermittence est la plus fréquente.",
            "La volatilité se fait surtout au sein d'un même camp ; le passage de la gauche à la droite est plus rare.",
            "Causes : déclin des identifications partisanes, mobilisation cognitive (Dalton), vote sur enjeu et vote rétrospectif.",
            "L'offre politique (partis, candidats, programmes, alliances, mode de scrutin) borne les choix ; quand elle change, le vote change.",
            "Scrutin majoritaire à deux tours : vote utile et alliances ; proportionnelle : vote plus sincère et petits partis.",
            "2017 et 2022 : passage de la bipolarisation gauche-droite à trois pôles.",
          ],
          example: {
            statement: "Données fictives. Un panel de 1 000 électeurs inscrits est interrogé après deux élections successives. À la première élection, 400 ont voté pour le parti A, 350 pour le parti B et 250 se sont abstenus. À la seconde : parmi les 400 électeurs de A, 300 revotent A, 40 votent B et 60 s'abstiennent ; parmi les 350 électeurs de B, 280 revotent B, 30 votent A et 40 s'abstiennent ; parmi les 250 abstentionnistes, 150 s'abstiennent encore, 60 votent A et 40 votent B. Calculez la part des électeurs stables, des intermittents et de ceux qui ont changé de parti, puis concluez.",
            solution: [
              "Électeurs stables : ceux qui ont voté pour le même parti aux deux élections (300 + 280 = 580) et ceux qui se sont abstenus deux fois (150). Soit 580 + 150 = 730, donc 73 % du panel.",
              "Intermittents : ceux qui ont voté une fois et se sont abstenus l'autre fois. Votants devenus abstentionnistes : 60 + 40 = 100. Abstentionnistes devenus votants : 60 + 40 = 100. Total : 200, soit 20 %.",
              "Changements de parti : de A vers B (40) et de B vers A (30), soit 70, donc 7 %.",
              "Vérification : 730 + 200 + 70 = 1 000.",
              "Part des électeurs volatils : 200 + 70 = 270, soit 27 % du panel, dont 20 points d'intermittence et 7 points de changement de parti.",
              "Conclusion : la majorité reste stable, mais plus d'un électeur sur quatre a changé de comportement, et l'intermittence est près de trois fois plus fréquente que le changement de parti (200 contre 70).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des électeurs suivants, indiquez s'il est stable, intermittent, volatil au sein d'un même camp ou volatil entre camps. (a) Yasmine a voté pour le même parti écologiste aux européennes, aux régionales et aux législatives. (b) Bernard a voté à la présidentielle, mais ne s'est pas déplacé aux législatives qui ont suivi. (c) Lina a voté socialiste en 2012, puis pour un candidat de la gauche radicale en 2017. (d) Marc a voté pour un candidat de gauche en 2012, puis pour un candidat de droite en 2017.",
              hint: "Distinguez d'abord ceux qui ont toujours voté de ceux qui se sont abstenus au moins une fois, puis, parmi ceux qui ont changé de vote, regardez s'ils sont restés dans la même famille politique.",
              solution: [
                "(a) Yasmine est stable : même vote à chaque élection.",
                "(b) Bernard est intermittent : il alterne vote et abstention selon le type d'élection.",
                "(c) Lina est volatile au sein d'un même camp : elle change de parti mais reste à gauche.",
                "(d) Marc est volatil entre camps : il passe de la gauche à la droite, forme de volatilité la plus rare.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Résultats en % des suffrages exprimés à deux élections successives : parti A : 30 puis 18 ; parti B : 28 puis 15 ; parti C : 20 puis 22 ; parti D (créé entre les deux élections) : 0 puis 25 ; autres : 22 puis 20. (1) Vérifiez que les variations s'annulent. (2) Calculez l'indice de volatilité agrégée de Pedersen, égal à la moitié de la somme des variations en valeur absolue. (3) Montrez que cet indice sous-estime la volatilité individuelle.",
              hint: "Calculez chaque variation (résultat 2 - résultat 1), prenez sa valeur absolue, additionnez puis divisez par 2. Pour la question 3, pensez à des mouvements d'électeurs qui se compensent.",
              solution: [
                "(1) Variations : A : 18 - 30 = -12 ; B : 15 - 28 = -13 ; C : 22 - 20 = +2 ; D : 25 - 0 = +25 ; autres : 20 - 22 = -2. Somme : -12 - 13 + 2 + 25 - 2 = 0. Les variations s'annulent, ce qui est normal puisque chaque total vaut 100 %.",
                "(2) Somme des valeurs absolues : 12 + 13 + 2 + 25 + 2 = 54. Indice de Pedersen = 54 ÷ 2 = 27 points.",
                "Interprétation : en termes nets, 27 points de suffrages exprimés se sont déplacés d'un parti à l'autre entre les deux élections, et l'apparition du parti D, une modification de l'offre politique, en explique une grande part.",
                "(3) L'indice ne mesure que des variations nettes. Si 5 % des électeurs passent de C à A et 5 % de A à C, les scores ne bougent pas et l'indice ne voit rien, alors que 10 % des électeurs ont changé de vote. De plus, il ignore l'intermittence, puisqu'il porte seulement sur les suffrages exprimés.",
                "Résultat : indice de 27 points ; la volatilité individuelle, mesurée par des panels, est en général supérieure à la volatilité agrégée.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que l'offre politique influence les comportements électoraux.",
              hint: "Définissez l'offre politique, puis développez deux mécanismes distincts (par exemple la composition de l'offre et le mode de scrutin), chacun illustré par un exemple précis.",
              solution: [
                "Introduction : l'offre politique est l'ensemble des partis, candidats, programmes et alliances proposés aux électeurs. Les électeurs ne pouvant choisir que parmi cette offre, ses transformations modifient leurs comportements.",
                "Premier mécanisme (affirmation) : la composition de l'offre oriente les choix. Explication : l'apparition d'un nouveau parti, l'absence d'un candidat ou une alliance obligent des électeurs aux préférences inchangées à modifier leur vote ou à s'abstenir. Illustration : en 2017, la candidature d'Emmanuel Macron, à la tête d'un mouvement créé en 2016, attire une partie des électeurs du PS et de la droite, et aucun des deux grands partis de gouvernement n'accède au second tour.",
                "Second mécanisme (affirmation) : les règles du jeu, comme le mode de scrutin, influencent la façon de voter. Explication : le scrutin majoritaire à deux tours incite au vote utile dès le premier tour, alors que la proportionnelle permet un vote plus sincère. Illustration : des électeurs de petits partis votent souvent pour un candidat mieux placé au premier tour de la présidentielle, mais pour leur parti préféré aux européennes.",
                "Conclusion : l'offre politique contribue à expliquer la volatilité électorale ; à l'inverse, les partis ajustent leur offre aux attentes d'électeurs devenus plus mobiles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire électorale de la Ve République dans l'ordre chronologique.",
            items: [
              "Référendum adoptant l'élection du président au suffrage universel direct",
              "Première élection présidentielle au suffrage universel direct de la Ve République",
              "Première alternance : élection de François Mitterrand",
              "Jean-Marie Le Pen qualifié pour le second tour de la présidentielle",
              "Élection d'Emmanuel Macron, sans candidat PS ni LR au second tour",
              "Premier tour à trois pôles, avec les candidates LR et PS sous les 5 %",
              "Dissolution de l'Assemblée nationale et législatives anticipées",
            ],
          },
          quiz: [
            {
              q: "Un électeur qui vote à la présidentielle puis s'abstient aux législatives suivantes illustre :",
              options: [
                "un vote de classe",
                "une identification partisane",
                "un changement de camp",
                "l'intermittence du vote",
              ],
              answer: 3,
              why: "L'intermittence est l'alternance entre vote et abstention selon les scrutins ; c'est la forme la plus fréquente de volatilité.",
            },
            {
              q: "Quelle forme de volatilité est la plus rare ?",
              options: [
                "L'alternance entre vote et abstention",
                "Le passage d'un camp politique à l'autre",
                "Le passage d'un parti à un autre au sein de la même famille politique",
              ],
              answer: 1,
              why: "La plupart des électeurs qui changent de vote restent dans leur camp ; le passage de la gauche à la droite, ou l'inverse, concerne moins d'électeurs.",
            },
            {
              q: "Que désigne la mobilisation cognitive selon Russell Dalton ?",
              options: [
                "La capacité d'électeurs plus instruits à se forger une opinion sans dépendre d'un parti",
                "L'encadrement durable des électeurs par les syndicats, les partis et les Églises pendant les campagnes",
                "La mobilisation des abstentionnistes par les militants à la veille du scrutin",
                "L'influence des sondages sur les intentions de vote",
              ],
              answer: 0,
              why: "L'élévation du niveau d'instruction rend les électeurs plus autonomes : ils se déterminent davantage selon les enjeux, ce qui favorise la volatilité.",
            },
            {
              q: "Le scrutin majoritaire à deux tours tend à favoriser :",
              options: [
                "la multiplication des petits partis représentés à l'Assemblée grâce à une répartition proportionnelle",
                "un vote toujours sincère dès le premier tour",
                "le vote utile et les alliances entre partis proches",
                "la disparition de l'abstention au second tour",
              ],
              answer: 2,
              why: "Pour peser, les électeurs votent souvent pour un candidat qui a des chances d'être qualifié, et les partis proches s'allient ou se désistent.",
            },
            {
              q: "Quel fait marque la présidentielle de 2017 ?",
              options: [
                "La qualification de Jean-Marie Le Pen pour le second tour",
                "L'absence de candidat du PS ou de LR au second tour",
                "La première alternance entre la gauche et la droite",
              ],
              answer: 1,
              why: "Emmanuel Macron et Marine Le Pen se qualifient : pour la première fois, aucun des deux grands partis de gouvernement n'est présent au second tour. Jean-Marie Le Pen s'était qualifié en 2002, et la première alternance date de 1981.",
            },
          ],
          trap: "Confondre volatilité et vote au hasard, ou réduire la volatilité au changement de parti : l'intermittence en est la forme la plus fréquente, et la plupart des changements de vote restent dans un même camp.",
          method: "Face à un tableau de transferts de voix, classez chaque case dans une catégorie (stable, intermittent, changement de parti), calculez chaque total, puis vérifiez que leur somme redonne l'effectif du panel avant d'interpréter.",
        },
      ],
    },

    /* ==================================================================== */
    /* ASSURANCE ET PROTECTION SOCIALE                                       */
    /* ==================================================================== */
    {
      id: 'risques-protection-sociale',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'risques-assurance',
          title: 'Les risques et le principe de l’assurance',
          minutes: 30,
          objectives: [
            "Comprendre que les sociétés développées font face à une diversité de risques et savoir distinguer risque et incertitude.",
            "Identifier les moyens de faire face aux risques : prévention, épargne de précaution (auto-assurance), solidarités privées et assurance.",
            "Comprendre le principe de mutualisation des risques sur lequel repose l'assurance.",
            "Expliquer comment l'aléa moral et la sélection adverse compliquent le fonctionnement de l'assurance.",
          ],
          course: [
            {
              heading: "Risque et incertitude",
              paragraphs: [
                "Un risque est un événement possible, dommageable pour ceux qui le subissent, dont on peut estimer la probabilité de survenue et le coût. L'économiste Frank Knight, dans Risk, Uncertainty and Profit (1921), distingue le risque, qui est probabilisable grâce aux observations passées (par exemple la fréquence des accidents de la route), et l'incertitude, qui ne l'est pas, parce que la situation est nouvelle ou trop rare pour qu'on dispose de statistiques fiables (une innovation radicale, une crise sans précédent).",
                "Les sociétés développées font face à des risques très variés. Certains sont individuels : maladie, accident, perte d'emploi, incendie du logement. D'autres sont collectifs, car ils touchent beaucoup de personnes en même temps : pandémie, catastrophe naturelle, crise économique, accident industriel. On peut aussi les classer selon leur domaine : risques économiques (chômage, faillite), sociaux (maladie, vieillesse, invalidité), environnementaux (inondation, sécheresse) ou technologiques.",
                "Le sociologue allemand Ulrich Beck, dans La Société du risque (1986, l'année de la catastrophe de Tchernobyl), souligne que les sociétés modernes produisent elles-mêmes de nouveaux risques par leurs techniques : pollution, accidents nucléaires, dérèglement climatique. Ces risques fabriqués sont difficiles à anticiper et dépassent souvent les frontières, ce qui rend leur gestion plus complexe.",
              ],
              box: { label: "Définition", text: "Risque : événement possible et dommageable dont la probabilité et le coût peuvent être estimés. Incertitude (au sens de Knight) : situation dans laquelle on ne peut pas attribuer de probabilité aux événements futurs." },
            },
            {
              heading: "Faire face aux risques : prévention, épargne et solidarités",
              paragraphs: [
                "La plupart des individus éprouvent de l'aversion pour le risque : ils préfèrent une situation certaine à une situation incertaine de même valeur moyenne. Ils cherchent donc à se protéger. La première stratégie est la prévention, qui vise à réduire la probabilité qu'un dommage survienne ou sa gravité : porter un casque à vélo, installer un détecteur de fumée, se faire vacciner, construire hors des zones inondables.",
                "La deuxième stratégie est l'auto-assurance : l'individu met de côté une épargne de précaution, qu'il pourra mobiliser en cas de coup dur (perte d'emploi, réparation imprévue). Cette solution a des limites : elle suppose un revenu suffisant pour épargner, et elle ne couvre pas les dommages très coûteux comme une maladie grave ou la destruction d'un logement.",
                "Les solidarités privées jouent aussi un rôle : la famille, les proches ou des associations aident ceux qui subissent un dommage, par exemple en hébergeant un jeune au chômage ou en soutenant un parent dépendant. Mais elles sont inégales, car elles dépendent des ressources de l'entourage, et peuvent créer des relations de dépendance. C'est pourquoi les sociétés développées ont recours à des mécanismes plus organisés : l'assurance et la protection sociale.",
              ],
              box: { label: "À retenir", text: "Prévention : réduire la probabilité ou la gravité du dommage. Auto-assurance : constituer une épargne de précaution. Solidarités privées : aide de la famille et des proches. Assurance : transférer le risque à un assureur contre le paiement d'une prime." },
            },
            {
              heading: "Le principe de l'assurance : la mutualisation des risques",
              paragraphs: [
                "Un contrat d'assurance engage l'assuré à verser régulièrement une prime (ou cotisation) ; en échange, l'assureur s'engage à l'indemniser si le dommage prévu par le contrat, appelé sinistre, se produit. L'assuré échange ainsi une perte certaine mais faible (la prime) contre la protection face à une perte incertaine mais potentiellement très élevée.",
                "Ce mécanisme repose sur la mutualisation des risques : l'assureur regroupe un grand nombre d'assurés exposés au même type de risque, et les primes de tous financent les indemnités versées aux quelques-uns qui subissent un sinistre. La loi des grands nombres rend ce calcul possible : plus les assurés sont nombreux et leurs risques indépendants les uns des autres, plus la fréquence réelle des sinistres se rapproche de leur probabilité, et plus le coût total devient prévisible.",
                "La prime pure correspond au coût moyen attendu des sinistres pour un assuré : probabilité du sinistre multipliée par son coût moyen. L'assureur y ajoute des chargements pour couvrir ses frais de gestion et, s'il s'agit d'une société commerciale, dégager un profit. Les assureurs sont soit des sociétés d'assurance à but lucratif, soit des mutuelles, sans but lucratif, qui appartiennent à leurs adhérents. Certaines assurances sont obligatoires en France, comme la responsabilité civile automobile.",
              ],
              box: { label: "Formule", text: "Prime pure = probabilité du sinistre × coût moyen du sinistre. Prime payée = prime pure + chargements (frais de gestion, marge). Exemple : 2 % × 5 000 € = 100 € de prime pure." },
            },
            {
              heading: "Les limites de l'assurance",
              paragraphs: [
                "L'assurance se heurte à des asymétries d'information : l'assuré en sait plus que l'assureur sur son propre comportement et sur son niveau de risque. L'aléa moral apparaît après la signature du contrat : se sachant couvert, l'assuré peut devenir moins prudent (moins surveiller son vélo, conduire plus vite), ce qui augmente la fréquence des sinistres. Les assureurs y répondent par des franchises (une partie du dommage reste à la charge de l'assuré), par le bonus-malus en assurance automobile ou par des exclusions de garantie.",
                "La sélection adverse apparaît avant la signature : si l'assureur ne peut pas distinguer les assurés à haut risque des assurés à faible risque, il fixe une prime moyenne. Cette prime est avantageuse pour les plus risqués, mais trop chère pour les plus prudents, qui renoncent à s'assurer. Il reste alors surtout des assurés risqués, ce qui oblige à augmenter la prime, et ainsi de suite. George Akerlof a décrit ce mécanisme en 1970 à propos du marché des voitures d'occasion. Les remèdes sont les questionnaires, les primes différenciées selon le profil ou l'obligation d'assurance.",
                "Enfin, certains risques sont difficilement assurables : ceux qui touchent tous les assurés en même temps (catastrophe naturelle majeure, pandémie, crise financière), car la mutualisation ne fonctionne plus, et ceux qui ne sont pas probabilisables. Les assureurs se réassurent auprès d'autres assureurs, et l'État intervient : en France, depuis la loi du 13 juillet 1982, le régime des catastrophes naturelles associe les assureurs et une garantie publique.",
              ],
              box: { label: "Définition", text: "Aléa moral : changement de comportement de l'assuré après la signature du contrat, qui augmente le risque. Sélection adverse : l'asymétrie d'information conduit les assurés à faible risque à quitter le marché, qui ne garde que les plus risqués." },
            },
          ],
          keyPoints: [
            "Risque : événement dommageable probabilisable ; incertitude (Knight) : événement non probabilisable.",
            "Risques individuels ou collectifs, économiques, sociaux, environnementaux ; Beck : les sociétés modernes fabriquent de nouveaux risques.",
            "Se protéger : prévention, épargne de précaution (auto-assurance), solidarités privées, assurance.",
            "Assurance : prime contre indemnisation ; la mutualisation et la loi des grands nombres rendent le coût prévisible.",
            "Prime pure = probabilité × coût moyen du sinistre ; on y ajoute des chargements.",
            "Aléa moral (après le contrat) : franchise, bonus-malus. Sélection adverse (avant le contrat) : primes différenciées, obligation d'assurance.",
            "Les risques collectifs majeurs sont peu assurables : réassurance et intervention de l'État (catastrophes naturelles, 1982).",
          ],
          example: {
            statement: "Données fictives. Un assureur couvre 10 000 logements contre le dégât des eaux. Chaque année, la probabilité qu'un logement subisse un sinistre est de 2 %, et un sinistre coûte en moyenne 5 000 €. (1) Calculez le nombre de sinistres attendus et leur coût total. (2) Calculez la prime pure. (3) L'assureur ajoute 25 % de chargements : calculez la prime payée par chaque assuré. (4) Expliquez en quoi cet exemple illustre la mutualisation des risques.",
            solution: [
              "(1) Nombre de sinistres attendus = 10 000 × 0,02 = 200. Coût total attendu = 200 × 5 000 = 1 000 000 €.",
              "(2) Prime pure = 1 000 000 ÷ 10 000 = 100 € par assuré. Vérification par la formule : 0,02 × 5 000 = 100 €.",
              "(3) Prime payée = 100 × 1,25 = 125 € par assuré et par an.",
              "(4) Chaque assuré paie 125 € de façon certaine, alors que sans assurance il aurait 2 chances sur 100 de perdre 5 000 €. Les primes des 10 000 assurés (1 250 000 €) financent les indemnités des 200 sinistrés et les frais de l'assureur : les primes de tous paient les dommages de quelques-uns.",
              "Réponse : 200 sinistres pour 1 000 000 €, une prime pure de 100 € et une prime payée de 125 €. C'est la loi des grands nombres qui permet à l'assureur de prévoir ce coût avec une bonne précision.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez s'il s'agit de prévention, d'auto-assurance (épargne de précaution), de solidarité privée ou d'assurance. (a) Sofia met chaque mois 50 € de côté sur un livret « au cas où ». (b) Une commune interdit de construire dans une zone inondable. (c) M. Leroy paie chaque mois une cotisation à une mutuelle qui rembourse ses frais d'optique. (d) Après la perte de son emploi, Julien est hébergé gratuitement par ses parents. (e) Une entreprise forme ses salariés aux gestes de sécurité sur les machines.",
              hint: "Demandez-vous si l'action réduit le risque lui-même, met de l'argent de côté, fait appel à l'entourage ou transfère le coût à un organisme contre une cotisation.",
              solution: [
                "(a) Auto-assurance : Sofia constitue une épargne de précaution.",
                "(b) Prévention : on réduit la probabilité et la gravité des dommages liés aux inondations.",
                "(c) Assurance : M. Leroy verse une cotisation en échange d'une prise en charge en cas de dépense.",
                "(d) Solidarité privée : la famille amortit la perte de revenu.",
                "(e) Prévention : la formation réduit la probabilité des accidents du travail.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un assureur couvre 1 000 cyclistes contre le vol de leur vélo, d'une valeur moyenne de 1 000 €. La moitié d'entre eux sont prudents (probabilité de vol de 2 % par an) et l'autre moitié imprudents (probabilité de 10 % par an), mais l'assureur ne peut pas les distinguer. (1) Calculez la prime pure unique que l'assureur doit fixer. (2) Calculez la prime pure qui correspondrait au risque de chaque groupe. (3) Les prudents jugent la prime trop chère et ne renouvellent pas leur contrat l'année suivante : calculez la nouvelle prime pure. (4) Nommez et expliquez le phénomène, puis proposez une solution.",
              hint: "Calculez le nombre de vols attendus dans chaque groupe, puis le coût total, et divisez par le nombre d'assurés.",
              solution: [
                "(1) Vols attendus : prudents 500 × 0,02 = 10 ; imprudents 500 × 0,10 = 50 ; total 60. Coût total = 60 × 1 000 = 60 000 €. Prime pure unique = 60 000 ÷ 1 000 = 60 €.",
                "(2) Prudents : 0,02 × 1 000 = 20 €. Imprudents : 0,10 × 1 000 = 100 €. La prime unique de 60 € est trois fois trop élevée pour les prudents et avantageuse pour les imprudents.",
                "(3) Il ne reste que les 500 imprudents : 50 vols attendus, soit 50 000 €. Nouvelle prime pure = 50 000 ÷ 500 = 100 €. La prime passe de 60 € à 100 €.",
                "(4) C'est la sélection adverse : faute de pouvoir distinguer les profils (asymétrie d'information), l'assureur fixe une prime moyenne qui fait fuir les bons risques ; le portefeuille se dégrade et la prime augmente, ce qui peut faire disparaître le marché.",
                "Solutions possibles : questionnaire et primes différenciées (par exemple réduction pour un antivol homologué), ou assurance obligatoire pour tous, qui empêche les prudents de sortir de la mutualisation.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que les asymétries d'information peuvent rendre difficile le fonctionnement de l'assurance.",
              hint: "Définissez l'asymétrie d'information, puis traitez l'aléa moral et la sélection adverse dans deux paragraphes distincts, avec un mécanisme et un exemple chacun.",
              solution: [
                "Introduction : il y a asymétrie d'information quand une partie à un échange dispose d'informations que l'autre n'a pas. En assurance, l'assuré connaît mieux que l'assureur son niveau de risque et son comportement.",
                "Aléa moral (affirmation) : après la signature du contrat, l'assuré peut adopter un comportement plus risqué. Explication : couvert, il supporte moins les conséquences de son imprudence, et l'assureur ne peut pas tout contrôler ; la fréquence des sinistres augmente et les primes calculées deviennent insuffisantes. Illustration : un automobiliste assuré tous risques peut se montrer moins vigilant ; les assureurs répondent par la franchise et le bonus-malus.",
                "Sélection adverse (affirmation) : avant la signature, l'assureur ne distingue pas les bons et les mauvais risques. Explication : il fixe une prime moyenne, trop chère pour les assurés à faible risque, qui partent ; il ne reste que les plus risqués, la prime augmente et le marché peut disparaître (mécanisme décrit par Akerlof en 1970). Illustration : une assurance santé facultative attire surtout les personnes qui se savent malades ; l'obligation d'assurance ou les questionnaires médicaux limitent ce phénomène.",
                "Conclusion : ces deux effets fragilisent la mutualisation ; ils justifient des clauses contractuelles et, pour certains risques, une assurance obligatoire ou publique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Incertitude", right: "Situation où l'on ne peut pas attribuer de probabilité aux événements" },
              { left: "Prévention", right: "Réduire la probabilité ou la gravité d'un dommage" },
              { left: "Épargne de précaution", right: "Mettre de l'argent de côté pour faire face à un coup dur" },
              { left: "Mutualisation", right: "Les primes de tous financent les dommages de quelques-uns" },
              { left: "Aléa moral", right: "L'assuré devient moins prudent une fois couvert" },
              { left: "Sélection adverse", right: "Les assurés à faible risque quittent le marché, qui garde les plus risqués" },
            ],
          },
          quiz: [
            {
              q: "Selon Frank Knight, qu'est-ce qui distingue le risque de l'incertitude ?",
              options: [
                "Le risque est probabilisable, l'incertitude ne l'est pas",
                "Le risque est individuel, l'incertitude est toujours collective et touche un pays entier",
                "Le risque concerne l'avenir, l'incertitude concerne le passé",
              ],
              answer: 0,
              why: "On peut estimer la probabilité d'un risque à partir d'observations passées ; l'incertitude désigne des situations pour lesquelles aucune probabilité fiable n'existe.",
            },
            {
              q: "Sur 4 000 assurés, la probabilité de sinistre est de 5 % et le coût moyen d'un sinistre de 2 000 €. Quelle est la prime pure ?",
              options: [
                "50 €",
                "400 €",
                "100 €",
                "200 €",
              ],
              answer: 2,
              why: "Prime pure = 0,05 × 2 000 = 100 €. Vérification : 200 sinistres × 2 000 € = 400 000 €, divisés par 4 000 assurés = 100 €.",
            },
            {
              q: "Un assuré qui laisse sa voiture non verrouillée parce qu'il est couvert contre le vol illustre :",
              options: [
                "la sélection adverse",
                "l'aléa moral",
                "la mutualisation des risques",
                "la loi des grands nombres appliquée par les compagnies d'assurance",
              ],
              answer: 1,
              why: "L'aléa moral est un changement de comportement après la signature du contrat : se sachant couvert, l'assuré prend moins de précautions.",
            },
            {
              q: "Pourquoi une catastrophe naturelle majeure est-elle difficile à assurer par le seul marché ?",
              options: [
                "Parce que ses victimes refusent en général d'être indemnisées",
                "Parce que la loi interdit aux assureurs de couvrir les risques naturels",
                "Parce qu'elle est toujours parfaitement prévisible et ne présente donc aucun risque",
                "Parce qu'elle frappe beaucoup d'assurés en même temps, ce qui empêche la mutualisation",
              ],
              answer: 3,
              why: "La mutualisation suppose des risques indépendants ; quand tous les assurés sont touchés ensemble, les primes ne suffisent plus, d'où la réassurance et la garantie publique.",
            },
            {
              q: "Quel dispositif vise à limiter l'aléa moral en assurance automobile ?",
              options: [
                "La suppression de toute franchise",
                "Une prime identique pour tous les conducteurs, quels que soient leurs accidents",
                "Le bonus-malus",
              ],
              answer: 2,
              why: "Le bonus-malus fait baisser la prime des conducteurs sans accident et augmenter celle des conducteurs responsables d'accidents, ce qui incite à la prudence.",
            },
          ],
          trap: "Confondre aléa moral et sélection adverse : l'aléa moral est un changement de comportement après la signature du contrat, la sélection adverse vient d'une information cachée sur le niveau de risque avant la signature.",
          method: "Pour distinguer les deux asymétries d'information, posez-vous une seule question : le problème naît-il avant le contrat (qui choisit de s'assurer ? sélection adverse) ou après le contrat (comment l'assuré se comporte-t-il ? aléa moral) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'protection-sociale',
          title: 'La protection sociale : assurance, assistance, solidarité',
          minutes: 35,
          objectives: [
            "Comprendre que la protection sociale couvre collectivement les risques sociaux selon un principe de solidarité.",
            "Distinguer la logique d'assurance sociale et la logique d'assistance, ainsi que leurs modes de financement (cotisations sociales, impôts et taxes).",
            "Comprendre que le système français combine assurance, assistance et protection universelle.",
            "Analyser les effets de la protection sociale (sécurité, redistribution) et les débats qu'elle suscite (financement, effets sur les comportements).",
          ],
          course: [
            {
              heading: "Protéger contre les risques sociaux",
              paragraphs: [
                "La protection sociale désigne l'ensemble des mécanismes de prévoyance collective qui permettent aux individus de faire face aux conséquences financières des risques sociaux. Un risque social est un événement qui réduit les revenus d'un ménage ou augmente ses dépenses : maladie, invalidité, accident du travail, vieillesse, décès d'un conjoint, naissance et éducation des enfants, chômage, difficultés de logement, pauvreté et exclusion.",
                "Elle verse des prestations sociales en espèces (pensions de retraite, allocations familiales, indemnités de chômage, revenu de solidarité active) ou en nature (remboursement des soins, accès gratuit à certains services). En France, les dépenses de protection sociale représentent plus de 30 % du PIB, l'un des niveaux les plus élevés d'Europe ; leurs deux premiers postes sont la vieillesse-survie, surtout les retraites, puis la santé.",
                "La protection sociale se distingue de l'assurance privée par son principe de solidarité. Une assurance privée calcule la prime selon le risque de chaque assuré. Une assurance sociale, elle, est obligatoire et prélève des cotisations proportionnelles au revenu et non au risque : un malade chronique ne paie pas plus qu'une personne en bonne santé. L'obligation supprime aussi la sélection adverse, puisque les assurés à faible risque ne peuvent pas quitter la mutualisation.",
              ],
              box: { label: "Définition", text: "Protection sociale : ensemble des mécanismes de prévoyance collective qui permettent aux individus de faire face aux conséquences financières des risques sociaux (santé, vieillesse, famille, emploi, logement, pauvreté et exclusion)." },
            },
            {
              heading: "Deux logiques : assurance et assistance",
              paragraphs: [
                "La logique d'assurance sociale est née en Allemagne, sous le chancelier Bismarck, avec les lois de 1883 (maladie), 1884 (accidents du travail) et 1889 (vieillesse et invalidité). Elle protège les travailleurs et leurs familles contre la perte de revenu. Elle est financée par des cotisations sociales versées par les employeurs et les salariés, et ses prestations sont contributives : elles sont réservées à ceux qui ont cotisé et dépendent souvent du salaire antérieur. C'est une solidarité entre actifs, par exemple entre bien-portants et malades.",
                "La logique d'assistance, ou de solidarité nationale, s'inspire du rapport Beveridge publié au Royaume-Uni en 1942. Celui-ci propose un système fondé sur l'universalité (tous les citoyens sont couverts), l'uniformité (des prestations forfaitaires, identiques pour tous) et l'unité (une seule administration), financé par l'impôt, avec pour objectif de garantir un minimum vital et de lutter contre la pauvreté. Les prestations d'assistance sont non contributives : elles sont versées sans cotisation préalable, souvent sous condition de ressources.",
                "On distingue enfin une logique de protection universelle : certaines prestations sont versées à tous ceux qui remplissent une condition de situation (avoir des enfants, résider en France), sans condition de cotisation ni, en principe, de ressources, comme les allocations familiales ou la prise en charge des frais de santé.",
              ],
              box: { label: "À retenir", text: "Assurance sociale (Bismarck) : cotisations, prestations contributives, proportionnelles au revenu antérieur. Assistance (Beveridge) : impôt, prestations non contributives, souvent sous condition de ressources, pour garantir un minimum. Protection universelle : prestations pour tous, selon la situation." },
            },
            {
              heading: "Le système français : un modèle mixte",
              paragraphs: [
                "La Sécurité sociale est créée par les ordonnances des 4 et 19 octobre 1945, dans l'esprit du programme du Conseil national de la Résistance, sous l'impulsion de Pierre Laroque. Elle est d'abord bismarckienne : financement par cotisations, droits liés au travail, gestion par les représentants des salariés et des employeurs. L'assurance chômage, gérée par l'Unédic, est créée plus tard, en 1958. Les retraites de base fonctionnent par répartition : les cotisations des actifs d'aujourd'hui financent les pensions des retraités d'aujourd'hui.",
                "Depuis la fin des années 1980, le système a intégré des éléments beveridgiens. Le revenu minimum d'insertion (RMI), créé en 1988, devient le revenu de solidarité active (RSA) en 2009. La contribution sociale généralisée (CSG), créée en 1991, est un impôt prélevé sur presque tous les revenus (salaires, pensions, revenus du capital) et affecté à la protection sociale. La couverture maladie universelle (1999), puis la protection universelle maladie (2016), garantissent la prise en charge des frais de santé à toute personne qui travaille ou réside en France de manière stable et régulière.",
                "Le financement est donc devenu mixte : les cotisations sociales restent la première ressource, mais la part des impôts et taxes affectés, au premier rang desquels la CSG, a fortement augmenté. Le sociologue Gøsta Esping-Andersen (Les Trois Mondes de l'État-providence, 1990) range la France, avec l'Allemagne, dans le modèle corporatiste-conservateur, fondé sur l'emploi, qu'il distingue du modèle libéral (prestations ciblées et rôle du marché, comme aux États-Unis) et du modèle social-démocrate (prestations universelles et généreuses financées par l'impôt, comme en Suède).",
              ],
              box: { label: "Repère", text: "1883-1889 : lois de Bismarck. 1942 : rapport Beveridge. 1945 : ordonnances créant la Sécurité sociale. 1958 : assurance chômage (Unédic). 1988 : RMI. 1991 : CSG. 1999 : CMU. 2009 : RSA. 2016 : protection universelle maladie." },
            },
            {
              heading: "Effets et débats",
              paragraphs: [
                "La protection sociale réduit l'insécurité : le sociologue Robert Castel parle de « propriété sociale » pour désigner les droits sociaux qui protègent ceux qui ne possèdent pas de patrimoine, comme la propriété protégeait autrefois les possédants. Elle opère aussi une redistribution. La redistribution horizontale va des bien-portants vers les malades, des actifs vers les retraités, des ménages sans enfant vers les familles. La redistribution verticale va des ménages aisés vers les ménages modestes, surtout par les prestations d'assistance et par des prélèvements progressifs.",
                "Elle suscite des débats. Le premier concerne son financement, mis sous tension par le vieillissement de la population et la hausse des dépenses de santé : faut-il augmenter les prélèvements, réduire certaines prestations ou allonger la durée d'activité ? Le second porte sur ses effets sur les comportements : certains estiment qu'une protection généreuse peut produire de l'aléa moral (moins chercher un emploi, consommer plus de soins), ce qui a conduit par exemple à créer en 2016 la prime d'activité pour que la reprise d'emploi augmente le revenu. À l'inverse, le non-recours est important : selon la Drees, environ un tiers des foyers éligibles au RSA ne le demandent pas, par manque d'information, complexité des démarches ou crainte d'être stigmatisés.",
              ],
              box: { label: "Définition", text: "Redistribution horizontale : transferts entre personnes exposées ou non à un risque (bien-portants vers malades, actifs vers retraités). Redistribution verticale : transferts des ménages aisés vers les ménages modestes, pour réduire les inégalités de revenus." },
            },
          ],
          keyPoints: [
            "La protection sociale couvre les risques sociaux (santé, vieillesse, famille, emploi, logement, pauvreté) par des prestations en espèces ou en nature.",
            "Assurance sociale (Bismarck, 1883) : cotisations, prestations contributives liées au revenu antérieur.",
            "Assistance (Beveridge, 1942) : impôt, prestations non contributives, souvent sous condition de ressources ; les 3 U : universalité, uniformité, unité.",
            "France : Sécurité sociale de 1945, d'origine bismarckienne, devenue mixte (RMI 1988 puis RSA 2009, CSG 1991, CMU 1999 puis PUMa 2016).",
            "Contrairement à l'assurance privée, les cotisations sociales dépendent du revenu et non du risque, et l'obligation supprime la sélection adverse.",
            "Redistribution horizontale (entre exposés et non exposés au risque) et verticale (des plus aisés vers les plus modestes).",
            "Débats : financement face au vieillissement, effets sur les comportements, non-recours aux droits.",
          ],
          example: {
            statement: "Données fictives. Un pays verse trois prestations : (a) une indemnité de chômage égale à 60 % du salaire antérieur, réservée à ceux qui ont cotisé au moins six mois ; (b) un revenu minimum différentiel qui garantit 600 € par mois aux personnes dont les ressources sont inférieures à ce montant ; (c) une allocation de 150 € par mois et par enfant versée à toutes les familles. Identifiez la logique de chaque prestation, puis calculez ce que perçoivent Paul, chômeur qui gagnait 1 800 € par mois et a cotisé deux ans, Inès, sans droit au chômage, qui dispose de 200 € de ressources mensuelles, et une famille aisée avec deux enfants.",
            solution: [
              "(a) Logique d'assurance : la prestation est contributive (réservée à ceux qui ont cotisé) et proportionnelle au salaire antérieur.",
              "(b) Logique d'assistance : la prestation est non contributive et versée sous condition de ressources ; elle est différentielle, c'est-à-dire qu'elle complète les ressources jusqu'au minimum garanti.",
              "(c) Logique de protection universelle : toutes les familles la perçoivent, sans condition de cotisation ni de ressources.",
              "Paul : 1 800 × 0,60 = 1 080 € par mois d'indemnité de chômage.",
              "Inès : 600 - 200 = 400 € par mois de revenu minimum, ce qui porte ses ressources à 600 €.",
              "Famille aisée : 2 × 150 = 300 € par mois d'allocation.",
              "Réponse : 1 080 € pour Paul (assurance), 400 € pour Inès (assistance), 300 € pour la famille (protection universelle).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacune de ces prestations françaises selon la logique dont elle relève principalement (assurance sociale, assistance ou protection universelle) : (a) la pension de retraite de base du régime général ; (b) l'allocation d'aide au retour à l'emploi (indemnité de chômage) ; (c) le revenu de solidarité active (RSA) ; (d) l'allocation de solidarité aux personnes âgées (minimum vieillesse) ; (e) les allocations familiales ; (f) les indemnités journalières versées pendant un arrêt maladie.",
              hint: "Demandez-vous si la prestation suppose d'avoir cotisé (assurance), si elle est réservée aux personnes aux ressources faibles sans cotisation préalable (assistance) ou si elle dépend seulement d'une situation (protection universelle).",
              solution: [
                "(a) Assurance sociale : la pension dépend des trimestres cotisés et des salaires antérieurs.",
                "(b) Assurance sociale : il faut avoir cotisé, et le montant dépend du salaire antérieur.",
                "(c) Assistance : prestation non contributive, différentielle, sous condition de ressources.",
                "(d) Assistance : minimum garanti aux personnes âgées aux faibles ressources, sans condition de cotisation.",
                "(e) Protection universelle : versées à toutes les familles à partir de deux enfants, sans condition de cotisation ; depuis 2015, leur montant est modulé selon les revenus, mais aucune famille n'en est exclue.",
                "(f) Assurance sociale : les indemnités remplacent une partie du salaire et supposent d'avoir cotisé.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans un pays, les retraites sont financées par répartition, uniquement par des cotisations prélevées sur les salaires. On compte 30 millions de cotisants et 15 millions de retraités ; la pension moyenne est de 1 500 € par mois et le salaire moyen de 2 500 € par mois. (1) Calculez le rapport démographique (cotisants par retraité) et le taux de cotisation nécessaire pour équilibrer le système. (2) Vingt ans plus tard, on compte 30 millions de cotisants et 20 millions de retraités, sans changement de la pension et du salaire moyens. Recalculez le rapport démographique et le taux de cotisation nécessaire. (3) Quels leviers permettraient de rétablir l'équilibre ?",
              hint: "Dépenses mensuelles = nombre de retraités × pension moyenne. Taux de cotisation = dépenses ÷ masse salariale, la masse salariale étant le nombre de cotisants × salaire moyen.",
              solution: [
                "(1) Rapport démographique = 30 ÷ 15 = 2 cotisants par retraité. Dépenses = 15 millions × 1 500 € = 22,5 milliards € par mois. Masse salariale = 30 millions × 2 500 € = 75 milliards €. Taux nécessaire = 22,5 ÷ 75 × 100 = 30 %.",
                "(2) Rapport démographique = 30 ÷ 20 = 1,5. Dépenses = 20 millions × 1 500 € = 30 milliards €. Taux nécessaire = 30 ÷ 75 × 100 = 40 %, soit 10 points de plus.",
                "Vérification : avec 2 cotisants par retraité, chaque cotisant finance 1 500 ÷ 2 = 750 €, soit 30 % de 2 500 € ; avec 1,5 cotisant, il finance 1 000 €, soit 40 %.",
                "(3) Trois leviers : augmenter les prélèvements (taux de cotisation, ou recours à l'impôt comme la CSG), baisser le montant relatif des pensions, ou allonger la durée d'activité (recul de l'âge de départ, plus d'années de cotisation) pour augmenter le nombre de cotisants et réduire celui des retraités. Une hausse de l'emploi ou des salaires élargirait aussi la base de financement.",
                "Résultat : le taux passe de 30 % à 40 % quand le rapport démographique passe de 2 à 1,5 ; c'est le défi posé par le vieillissement aux régimes par répartition.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 2 (étude d'un document). Document (données fictives) : taux de pauvreté avant et après transferts sociaux, en % de la population. Pays A : 24 avant, 14 après. Pays B : 26 avant, 12 après. Pays C : 22 avant, 17 après. Questions : (1) Présentez la donnée 12. (2) Calculez, pour chaque pays, la baisse du taux de pauvreté due aux transferts, en points et en pourcentage. (3) À l'aide du document, montrez que la protection sociale contribue à réduire la pauvreté, mais avec une efficacité inégale selon les pays.",
              hint: "Une baisse en points est une différence ; une baisse en pourcentage se calcule par rapport à la valeur avant transferts. Pour la question 3, reliez les écarts entre pays aux modèles de protection sociale, avec prudence.",
              solution: [
                "(1) Selon ce document aux données fictives, dans le pays B, après prise en compte des transferts sociaux, 12 % de la population vit sous le seuil de pauvreté.",
                "(2) Pays A : 24 - 14 = 10 points, soit 10 ÷ 24 × 100 ≈ 41,7 % de baisse. Pays B : 26 - 12 = 14 points, soit 14 ÷ 26 × 100 ≈ 53,8 %. Pays C : 22 - 17 = 5 points, soit 5 ÷ 22 × 100 ≈ 22,7 %.",
                "(3) Dans les trois pays, le taux de pauvreté est plus faible après transferts qu'avant : les prestations sociales (minima sociaux, allocations familiales et logement, pensions) augmentent les revenus des ménages modestes et en font passer une partie au-dessus du seuil de pauvreté. C'est un effet de redistribution verticale.",
                "Mais l'efficacité est inégale : les transferts réduisent la pauvreté de plus de moitié dans le pays B, mais de moins d'un quart dans le pays C, alors que le taux avant transferts est proche. On peut faire l'hypothèse que le pays B a une protection sociale plus universelle et plus généreuse, proche du modèle social-démocrate, et le pays C une protection plus ciblée et plus limitée, proche du modèle libéral.",
                "Conclusion : la protection sociale réduit la pauvreté, et son effet dépend de son ampleur et de sa logique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Assurance, assistance et solidarité.",
            statements: [
              { text: "Dans une assurance sociale, la cotisation dépend du risque de chaque assuré.", true: false, why: "Elle dépend du revenu, pas du risque : c'est ce qui distingue l'assurance sociale de l'assurance privée." },
              { text: "Le RSA est une prestation d'assistance versée sous condition de ressources.", true: true, why: "Il est non contributif et différentiel : il complète les ressources jusqu'à un montant garanti." },
              { text: "Le modèle beveridgien repose principalement sur des cotisations versées par les salariés.", true: false, why: "Il repose sur l'impôt ; ce sont les assurances sociales bismarckiennes qui reposent sur les cotisations." },
              { text: "La CSG est un impôt affecté au financement de la protection sociale.", true: true, why: "Créée en 1991, elle porte sur presque tous les revenus, y compris les pensions et les revenus du capital." },
              { text: "Le système français de protection sociale est resté purement bismarckien depuis 1945.", true: false, why: "Il est devenu mixte : RSA, CSG, protection universelle maladie relèvent d'une logique beveridgienne." },
              { text: "Les transferts des actifs vers les retraités relèvent de la redistribution horizontale.", true: true, why: "Ils vont des personnes non exposées au risque vieillesse vers celles qui le sont, indépendamment du revenu." },
              { text: "Toutes les personnes éligibles au RSA le perçoivent effectivement.", true: false, why: "Le non-recours est important : environ un tiers des foyers éligibles ne le demandent pas, selon la Drees." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une prestation contributive ?",
              options: [
                "Une prestation versée à toute la population sans condition",
                "Une prestation réservée aux personnes dont les ressources sont faibles",
                "Une prestation financée uniquement par les dons des ménages",
                "Une prestation versée en contrepartie de cotisations préalables",
              ],
              answer: 3,
              why: "Une prestation contributive suppose d'avoir cotisé, comme la pension de retraite ou l'indemnité de chômage ; c'est la logique d'assurance.",
            },
            {
              q: "Quels sont les trois principes du rapport Beveridge (1942) ?",
              options: [
                "Universalité, uniformité, unité",
                "Contribution, proportionnalité, gestion par les partenaires sociaux",
                "Liberté, responsabilité, assurance privée obligatoire pour tous",
              ],
              answer: 0,
              why: "Les « 3 U » : tous les citoyens sont couverts, les prestations sont forfaitaires, et une administration unique gère le système, financé par l'impôt.",
            },
            {
              q: "En quelle année la Sécurité sociale a-t-elle été créée en France ?",
              options: [
                "1883",
                "1958",
                "1945",
                "1988",
              ],
              answer: 2,
              why: "Les ordonnances des 4 et 19 octobre 1945 créent la Sécurité sociale. 1883 correspond à la première loi de Bismarck, 1958 à l'assurance chômage et 1988 au RMI.",
            },
            {
              q: "Pourquoi l'obligation de s'affilier à une assurance sociale supprime-t-elle la sélection adverse ?",
              options: [
                "Parce qu'elle fixe des cotisations plus élevées pour les plus risqués, qui renoncent alors à s'assurer",
                "Parce que les assurés à faible risque ne peuvent pas quitter la mutualisation",
                "Parce que l'État connaît parfaitement le comportement de chaque assuré",
              ],
              answer: 1,
              why: "La sélection adverse vient de la fuite des bons risques face à une prime moyenne ; si l'affiliation est obligatoire, tous restent dans la mutualisation.",
            },
            {
              q: "Dans la typologie d'Esping-Andersen, le modèle social-démocrate se caractérise par :",
              options: [
                "des prestations universelles et généreuses, financées surtout par l'impôt",
                "des prestations ciblées sur les plus pauvres et un rôle central du marché",
                "des droits sociaux liés à l'emploi et financés surtout par des cotisations",
                "l'absence de toute protection sociale publique",
              ],
              answer: 0,
              why: "Le modèle social-démocrate, typique des pays nordiques, offre une protection universelle et élevée ; le modèle libéral est ciblé, le modèle corporatiste est lié à l'emploi.",
            },
          ],
          trap: "Confondre assurance sociale et assurance privée, ou assistance et assurance : l'assurance sociale est obligatoire et ses cotisations dépendent du revenu, tandis que l'assistance verse des prestations sans cotisation préalable, souvent sous condition de ressources.",
          method: "Pour classer une prestation, posez trois questions dans l'ordre : faut-il avoir cotisé ? (assurance) ; faut-il avoir de faibles ressources ? (assistance) ; suffit-il d'être dans une situation donnée ? (protection universelle). Notez ensuite le mode de financement correspondant.",
        },
      ],
    },

    /* ==================================================================== */
    /* L'ORGANISATION ET LA GOUVERNANCE DES ENTREPRISES                      */
    /* ==================================================================== */
    {
      id: 'entreprises',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'diversite-entreprises',
          title: 'La diversité des entreprises',
          minutes: 30,
          objectives: [
            "Définir l'entreprise comme une organisation productive qui crée de la valeur ajoutée.",
            "Classer les entreprises selon leur taille, leur secteur d'activité et leur statut juridique.",
            "Distinguer entreprises capitalistes, entreprises publiques et entreprises de l'économie sociale et solidaire selon leurs objectifs.",
            "Illustrer la diversité des figures de l'entrepreneur.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une entreprise ?",
              paragraphs: [
                "Une entreprise est une organisation productive qui combine des facteurs de production (travail et capital) pour produire des biens ou des services destinés à être vendus sur un marché, à un prix qui couvre au moins les coûts de production. C'est ce qui la distingue des administrations publiques, qui produisent surtout des services non marchands, fournis gratuitement ou presque et financés par des prélèvements obligatoires.",
                "En produisant, l'entreprise crée de la richesse, mesurée par la valeur ajoutée : c'est la différence entre la valeur de sa production et la valeur des consommations intermédiaires (biens et services achetés à d'autres entreprises et détruits ou transformés au cours de la production). Une boulangerie qui vend pour 300 000 € de pain par an et achète pour 120 000 € de farine, d'énergie et d'emballages crée une valeur ajoutée de 180 000 €. Cette valeur ajoutée est ensuite répartie entre les salariés, l'État, les prêteurs et les propriétaires.",
                "Il ne faut pas confondre entreprise et société. L'entreprise désigne l'organisation productive. La société est une forme juridique : c'est une personne morale, distincte de ses associés, qui peut posséder des biens, signer des contrats et agir en justice. Une entreprise peut être une société, mais elle peut aussi être une entreprise individuelle, sans personne morale distincte de l'entrepreneur.",
              ],
              box: { label: "Formule", text: "Valeur ajoutée = valeur de la production - consommations intermédiaires. Exemple : 300 000 € - 120 000 € = 180 000 €." },
            },
            {
              heading: "Classer les entreprises par taille et par secteur",
              paragraphs: [
                "Depuis la loi de modernisation de l'économie de 2008, l'Insee classe les entreprises en quatre catégories selon leurs effectifs, leur chiffre d'affaires et leur total de bilan. Les microentreprises occupent moins de 10 personnes, avec un chiffre d'affaires ou un total de bilan qui ne dépasse pas 2 millions d'euros. Les petites et moyennes entreprises (PME) occupent moins de 250 personnes, avec un chiffre d'affaires d'au plus 50 millions d'euros ou un total de bilan d'au plus 43 millions d'euros. Les entreprises de taille intermédiaire (ETI) occupent moins de 5 000 personnes, avec un chiffre d'affaires d'au plus 1,5 milliard d'euros ou un total de bilan d'au plus 2 milliards. Les autres sont des grandes entreprises (GE).",
                "Cette classification révèle une forte concentration. Selon l'Insee, plus de 95 % des entreprises françaises sont des microentreprises, souvent sans salarié, alors qu'on ne compte que quelques centaines de grandes entreprises ; ces dernières emploient pourtant une part importante des salariés et réalisent une grande partie des exportations. Le nombre d'entreprises donne donc une image très différente du poids économique.",
                "On classe aussi les entreprises selon leur activité. Un secteur regroupe les entreprises qui ont la même activité principale : le secteur primaire (agriculture, pêche, exploitation forestière), le secteur secondaire (industrie, construction) et le secteur tertiaire (services : commerce, transport, banque, santé, numérique). Une branche regroupe les unités qui produisent un même type de bien ou de service, quelle que soit l'entreprise à laquelle elles appartiennent : une entreprise automobile qui gère aussi une activité de crédit est classée dans un seul secteur, mais elle contribue à deux branches.",
              ],
              box: { label: "Repère", text: "Microentreprise : moins de 10 personnes. PME : moins de 250. ETI : moins de 5 000. Grande entreprise : au-delà (avec des seuils de chiffre d'affaires et de bilan à respecter aussi)." },
            },
            {
              heading: "Les statuts juridiques",
              paragraphs: [
                "L'entreprise individuelle appartient à une seule personne, l'entrepreneur, qui l'exploite en son nom propre : artisan, commerçant, agriculteur, profession libérale. Elle n'a pas de personnalité morale distincte. Depuis 2022, un statut unique protège l'entrepreneur individuel en séparant par défaut son patrimoine professionnel de son patrimoine personnel. La micro-entreprise (ancien auto-entrepreneur, créé en 2009) n'est pas une forme juridique à part : c'est un régime fiscal et social simplifié de l'entreprise individuelle, réservé aux petits chiffres d'affaires ; il ne faut pas le confondre avec la microentreprise, qui est une catégorie de taille.",
                "Une société est créée par un ou plusieurs associés, qui font des apports (argent, biens) constituant le capital social. En échange, ils reçoivent des parts sociales ou des actions, qui leur donnent un droit sur les bénéfices (les dividendes) et un pouvoir de décision, en général proportionnel au capital détenu. Dans la plupart des sociétés, leur responsabilité est limitée à leurs apports : en cas de faillite, ils perdent ce qu'ils ont apporté, mais leurs biens personnels sont protégés.",
                "Les principales formes de sociétés sont la société à responsabilité limitée (SARL, de 2 à 100 associés, ou EURL avec un associé unique), la société par actions simplifiée (SAS, ou SASU avec un associé unique), dont l'organisation est librement fixée par les statuts, et la société anonyme (SA), adaptée aux grandes entreprises, qui exige un capital minimum de 37 000 € et peut être cotée en Bourse pour lever des capitaux auprès du public.",
              ],
              box: { label: "Définition", text: "Capital social : ensemble des apports des associés lors de la création ou des augmentations de capital d'une société. Responsabilité limitée : en cas de faillite, les associés ne perdent que le montant de leurs apports." },
            },
            {
              heading: "Des objectifs différents",
              paragraphs: [
                "La plupart des entreprises privées sont des entreprises capitalistes : leurs propriétaires, qui ont apporté le capital, attendent qu'elles réalisent un profit, dont une partie leur est versée sous forme de dividendes. Les entreprises publiques sont celles dont l'État ou des collectivités publiques détiennent la majorité du capital ou le contrôle, comme la SNCF ou EDF. Elles produisent des biens marchands, mais elles peuvent aussi se voir confier des missions de service public (continuité du service, égalité d'accès sur le territoire).",
                "L'économie sociale et solidaire (ESS), reconnue par la loi du 31 juillet 2014, regroupe les coopératives, les mutuelles, les associations et les fondations, ainsi que des sociétés commerciales qui en respectent les principes. Ces principes sont un but autre que le seul partage des bénéfices, une gouvernance démocratique (« une personne, une voix », quel que soit le capital apporté) et une lucrativité limitée : les bénéfices sont majoritairement réinvestis dans l'activité. Dans une société coopérative et participative (SCOP), par exemple, les salariés sont les associés majoritaires et élisent leurs dirigeants.",
              ],
              box: { label: "À retenir", text: "Entreprise capitaliste : recherche du profit pour les apporteurs de capitaux. Entreprise publique : contrôle par l'État, parfois missions de service public. ESS : gouvernance démocratique et lucrativité limitée." },
            },
            {
              heading: "Les figures de l'entrepreneur",
              paragraphs: [
                "Le mot entrepreneur recouvre des réalités variées. L'entrepreneur individuel (artisan, commerçant, agriculteur) est à la fois propriétaire, dirigeant et souvent travailleur de son entreprise ; il en supporte le risque. Le créateur de start-up lance une activité nouvelle, souvent financée par des investisseurs extérieurs. Dans les grandes sociétés, en revanche, le dirigeant est le plus souvent un manager salarié, qui ne possède qu'une faible part du capital, tandis que la propriété est répartie entre de nombreux actionnaires.",
                "Pour l'économiste Joseph Schumpeter (Théorie de l'évolution économique, 1911), l'entrepreneur est avant tout un innovateur : il introduit de nouvelles combinaisons productives (un nouveau produit, une nouvelle méthode de production, un nouveau marché, une nouvelle source de matières premières, une nouvelle organisation). Il prend des risques et obtient, s'il réussit, un profit temporaire, jusqu'à ce que des imitateurs le rattrapent. Cette figure ne se confond ni avec le propriétaire du capital, ni avec le simple gestionnaire.",
              ],
              box: { label: "Repère", text: "Schumpeter : l'entrepreneur est l'innovateur qui met en œuvre de nouvelles combinaisons ; il se distingue du capitaliste, qui apporte les fonds, et du gestionnaire, qui administre l'existant." },
            },
          ],
          keyPoints: [
            "Une entreprise est une organisation qui produit des biens ou services marchands ; elle crée une valeur ajoutée = production - consommations intermédiaires.",
            "Entreprise (organisation) et société (personne morale) ne se confondent pas.",
            "Tailles (loi de 2008) : micro (< 10 personnes), PME (< 250), ETI (< 5 000), GE ; plus de 95 % des entreprises sont des microentreprises.",
            "Secteur : entreprises ayant la même activité principale ; branche : unités produisant le même bien ou service.",
            "Entreprise individuelle ou société (SARL, SAS, SA) ; dans les sociétés, la responsabilité des associés est le plus souvent limitée aux apports.",
            "Objectifs : profit (entreprise capitaliste), service public (entreprise publique), lucrativité limitée et gouvernance démocratique (ESS).",
            "Schumpeter : l'entrepreneur est un innovateur, distinct du capitaliste et du gestionnaire.",
          ],
          example: {
            statement: "Données fictives. La société « Vélos du Rhône », une SAS, emploie 180 salariés, réalise un chiffre d'affaires de 32 millions d'euros et un total de bilan de 25 millions d'euros. Elle vend pour 32 millions d'euros de vélos et achète pour 20 millions d'euros de cadres, pièces, énergie et transport. Ses actionnaires sont ses deux fondateurs et un fonds d'investissement. (1) À quelle catégorie de taille appartient-elle ? (2) Calculez sa valeur ajoutée. (3) Précisez son secteur, sa forme juridique et son objectif probable.",
            solution: [
              "(1) Avec 180 personnes, elle occupe moins de 250 personnes ; son chiffre d'affaires (32 millions) est inférieur à 50 millions d'euros. C'est donc une PME (elle dépasse les seuils de la microentreprise : 10 personnes, 2 millions d'euros).",
              "(2) Valeur ajoutée = 32 - 20 = 12 millions d'euros.",
              "(3) Secteur : elle fabrique des vélos, c'est une entreprise industrielle du secteur secondaire.",
              "Forme juridique : une SAS est une société, donc une personne morale distincte de ses actionnaires, dont la responsabilité est limitée à leurs apports.",
              "Objectif : ses actionnaires privés, dont un fonds d'investissement, attendent une rentabilité de leur capital : c'est une entreprise capitaliste qui recherche le profit.",
              "Réponse : PME industrielle, constituée en SAS, à but lucratif, qui crée 12 millions d'euros de valeur ajoutée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Critères simplifiés (fondés sur les effectifs et le chiffre d'affaires) : microentreprise : moins de 10 personnes et chiffre d'affaires d'au plus 2 millions d'euros ; PME : moins de 250 personnes et chiffre d'affaires d'au plus 50 millions d'euros ; ETI : moins de 5 000 personnes et chiffre d'affaires d'au plus 1,5 milliard d'euros ; au-delà, grande entreprise. Données fictives : classez les entreprises suivantes. (a) Une boulangerie : 4 personnes, 400 000 € de chiffre d'affaires. (b) Un fabricant de meubles : 120 personnes, 18 millions d'euros. (c) Un groupe de transport : 1 800 personnes, 600 millions d'euros. (d) Un constructeur aéronautique : 12 000 personnes, 4 milliards d'euros. (e) Un négociant en vins : 8 personnes, 6 millions d'euros.",
              hint: "Il faut respecter les deux conditions à la fois pour appartenir à une catégorie : si l'une des deux est dépassée, l'entreprise passe dans la catégorie supérieure.",
              solution: [
                "(a) Microentreprise : moins de 10 personnes et 0,4 million d'euros ≤ 2 millions.",
                "(b) PME : 120 < 250 personnes et 18 millions ≤ 50 millions.",
                "(c) ETI : 1 800 < 5 000 personnes et 600 millions ≤ 1,5 milliard.",
                "(d) Grande entreprise : 12 000 personnes, au-delà de 5 000.",
                "(e) PME, et non microentreprise : malgré ses 8 personnes, son chiffre d'affaires de 6 millions dépasse le seuil de 2 millions d'euros.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Quatre associés créent une SARL avec les apports suivants : Alice 55 000 €, Bruno 20 000 €, Chloé 15 000 €, David 10 000 €. (1) Calculez le capital social et la part de chaque associé. (2) Les décisions ordinaires se prennent à la majorité de plus de la moitié des parts : qui peut décider seul ? (3) La société distribue 40 000 € de dividendes proportionnellement aux parts : calculez ce que reçoit chacun. (4) Si les quatre associés avaient créé une SCOP dont ils sont tous salariés, comment le pouvoir de décision serait-il réparti ? (5) La SARL fait faillite avec 150 000 € de dettes : que risquent les associés ?",
              hint: "Part de chaque associé = apport ÷ capital social × 100. Dans une coopérative, le principe est « une personne, une voix ».",
              solution: [
                "(1) Capital social = 55 000 + 20 000 + 15 000 + 10 000 = 100 000 €. Parts : Alice 55 %, Bruno 20 %, Chloé 15 %, David 10 %.",
                "(2) Alice détient 55 % des parts, soit plus de la moitié : elle peut prendre seule les décisions ordinaires.",
                "(3) Dividendes : Alice 40 000 × 0,55 = 22 000 € ; Bruno 40 000 × 0,20 = 8 000 € ; Chloé 40 000 × 0,15 = 6 000 € ; David 40 000 × 0,10 = 4 000 €. Vérification : 22 000 + 8 000 + 6 000 + 4 000 = 40 000 €.",
                "(4) Dans une SCOP, chaque associé dispose d'une voix, quel que soit son apport : chacun aurait 25 % des voix, et aucune décision ne pourrait être prise par Alice seule. Les bénéfices seraient en grande partie mis en réserve et partagés entre les salariés.",
                "(5) La SARL est une société à responsabilité limitée : les associés perdent leurs apports (100 000 € au total), mais leurs biens personnels ne peuvent pas être saisis pour payer les dettes de la société.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 2 (étude d'un document). Document (données fictives) : répartition des entreprises et des salariés selon la catégorie d'entreprise, en %. Microentreprises : 95,9 % des entreprises, 18 % des salariés. PME : 3,9 % des entreprises, 29 % des salariés. ETI : 0,19 % des entreprises, 24 % des salariés. Grandes entreprises : 0,01 % des entreprises, 29 % des salariés. Le pays compte 4 000 000 d'entreprises et 13 000 000 de salariés. Questions : (1) Présentez la donnée 29 % pour les grandes entreprises. (2) Calculez le nombre de grandes entreprises et le nombre moyen de salariés par grande entreprise, puis par microentreprise. (3) À l'aide du document, montrez que le tissu productif se caractérise à la fois par le grand nombre des petites entreprises et par le poids économique des grandes.",
              hint: "Nombre de grandes entreprises = 4 000 000 × 0,01 ÷ 100. Nombre de salariés d'une catégorie = 13 000 000 × part ÷ 100. Divisez ensuite par le nombre d'entreprises de la catégorie.",
              solution: [
                "(1) Selon ce document aux données fictives, 29 % des salariés de ce pays travaillent dans une grande entreprise.",
                "(2) Grandes entreprises : 4 000 000 × 0,0001 = 400. Salariés des grandes entreprises : 13 000 000 × 0,29 = 3 770 000. Moyenne : 3 770 000 ÷ 400 ≈ 9 425 salariés par grande entreprise.",
                "Microentreprises : 4 000 000 × 0,959 = 3 836 000. Salariés : 13 000 000 × 0,18 = 2 340 000. Moyenne : 2 340 000 ÷ 3 836 000 ≈ 0,6 salarié par microentreprise, ce qui signifie que beaucoup d'entre elles n'ont aucun salarié.",
                "(3) Le nombre : les microentreprises représentent 95,9 % des entreprises, soit presque toutes ; la plupart sont des entreprises individuelles ou de très petites sociétés (artisans, commerçants, indépendants).",
                "Le poids : les 400 grandes entreprises, soit 0,01 % des entreprises, emploient autant de salariés (29 %) que les 156 000 PME, et bien plus que les 3,8 millions de microentreprises (18 %). Avec les ETI, les entreprises de plus de 250 personnes emploient 24 + 29 = 53 % des salariés.",
                "Conclusion : le tissu productif est très diversifié et concentré : un très grand nombre de petites unités coexiste avec un petit nombre de grandes entreprises qui concentrent l'emploi et le poids économique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque forme d'entreprise à sa caractéristique.",
            pairs: [
              { left: "Entreprise individuelle", right: "Pas de personne morale distincte de l'entrepreneur" },
              { left: "SARL", right: "Société de 2 à 100 associés, responsables à hauteur de leurs apports" },
              { left: "Société anonyme", right: "Société adaptée aux grandes entreprises, qui peut être cotée en Bourse" },
              { left: "SCOP", right: "Coopérative dont les salariés sont les associés majoritaires" },
              { left: "Entreprise publique", right: "Entreprise dont l'État détient la majorité du capital ou le contrôle" },
              { left: "Micro-entreprise", right: "Régime fiscal et social simplifié de l'entreprise individuelle" },
            ],
          },
          quiz: [
            {
              q: "Une entreprise vend pour 500 000 € et achète pour 200 000 € de consommations intermédiaires. Quelle est sa valeur ajoutée ?",
              options: [
                "700 000 €",
                "500 000 €",
                "200 000 €",
                "300 000 €",
              ],
              answer: 3,
              why: "Valeur ajoutée = production - consommations intermédiaires = 500 000 - 200 000 = 300 000 €.",
            },
            {
              q: "Quelle différence y a-t-il entre une entreprise et une société ?",
              options: [
                "L'entreprise est une organisation productive, la société une forme juridique dotée de la personnalité morale",
                "L'entreprise est toujours publique et la société toujours privée",
                "La société produit des biens, l'entreprise produit uniquement des services marchands vendus aux ménages",
              ],
              answer: 0,
              why: "Toute société n'est qu'une forme juridique possible de l'entreprise ; une entreprise individuelle n'est pas une société.",
            },
            {
              q: "Une entreprise de 300 salariés qui réalise 40 millions d'euros de chiffre d'affaires est :",
              options: [
                "une PME, puisque son chiffre d'affaires est inférieur à 50 millions d'euros",
                "une ETI",
                "une microentreprise",
                "une grande entreprise",
              ],
              answer: 1,
              why: "Avec 300 personnes, elle dépasse le seuil de 250 des PME : c'est une ETI, car elle reste sous les 5 000 personnes. Les deux conditions doivent être remplies pour être une PME.",
            },
            {
              q: "Quel principe caractérise la gouvernance des entreprises de l'économie sociale et solidaire ?",
              options: [
                "Une action, une voix",
                "La décision revient au plus gros apporteur de capital",
                "Une personne, une voix",
                "La nomination des dirigeants par l'État",
              ],
              answer: 2,
              why: "Dans l'ESS, chaque membre dispose d'une voix quel que soit le capital apporté : la gouvernance est démocratique.",
            },
            {
              q: "Pour Schumpeter, l'entrepreneur est avant tout :",
              options: [
                "celui qui apporte le capital et touche des dividendes",
                "un gestionnaire qui administre une entreprise existante sans la transformer",
                "un salarié chargé du contrôle de la qualité",
                "un innovateur qui introduit de nouvelles combinaisons productives",
              ],
              answer: 3,
              why: "L'entrepreneur schumpétérien innove (produit, procédé, marché, matière première, organisation) ; il se distingue du capitaliste et du gestionnaire.",
            },
          ],
          trap: "Classer une entreprise dans une catégorie de taille avec un seul critère, ou confondre l'entreprise (l'organisation qui produit) avec la société (une forme juridique parmi d'autres, dotée de la personnalité morale).",
          method: "Pour caractériser une entreprise, remplissez systématiquement quatre cases : taille (effectifs et chiffre d'affaires), secteur (activité principale), statut juridique (entreprise individuelle ou forme de société), objectif (profit, service public ou lucrativité limitée).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gouvernance-entreprise',
          title: 'Gouvernance, pouvoir et relations dans l’entreprise',
          minutes: 35,
          objectives: [
            "Définir la gouvernance d'entreprise et identifier ses principaux organes (assemblée générale, conseil d'administration, direction).",
            "Comprendre la séparation entre propriété et contrôle et la relation d'agence entre actionnaires et dirigeants.",
            "Comprendre que l'entreprise est un lieu de coopération et de conflits, et connaître le rôle des représentants du personnel et des syndicats.",
            "Analyser le rôle des parties prenantes et les évolutions récentes de la gouvernance (responsabilité sociale des entreprises, loi PACTE).",
          ],
          course: [
            {
              heading: "Qui dirige l'entreprise ? La gouvernance",
              paragraphs: [
                "La gouvernance d'entreprise désigne l'ensemble des règles, des organes et des pratiques qui déterminent comment une entreprise est dirigée et contrôlée : qui prend les décisions, qui surveille ceux qui décident, et dans l'intérêt de qui. Elle répartit le pouvoir entre les propriétaires du capital, les dirigeants et, dans une certaine mesure, les salariés.",
                "Dans une société anonyme, l'assemblée générale des actionnaires approuve les comptes, décide de la distribution des dividendes et élit les administrateurs ; en principe, une action donne une voix. Le conseil d'administration fixe les grandes orientations, nomme et contrôle le directeur général, et peut être présidé par lui (on parle alors de président-directeur général, ou PDG). Certaines SA séparent plus nettement les rôles, avec un directoire qui dirige et un conseil de surveillance qui contrôle.",
                "Les salariés participent aussi à la gouvernance. Depuis 2013, la loi impose la présence d'administrateurs représentant les salariés dans le conseil des grandes entreprises, avec une voix délibérative. Leur nombre reste toutefois minoritaire, ce qui distingue la France de l'Allemagne, où la cogestion donne aux salariés jusqu'à la moitié des sièges du conseil de surveillance dans les grandes entreprises.",
              ],
              box: { label: "Définition", text: "Gouvernance d'entreprise : ensemble des règles et des organes qui organisent le pouvoir dans l'entreprise (qui décide, qui contrôle et dans l'intérêt de qui), en particulier les relations entre actionnaires, dirigeants et salariés." },
            },
            {
              heading: "Propriétaires et dirigeants : séparation et relation d'agence",
              paragraphs: [
                "Dans une entreprise individuelle, le propriétaire est aussi le dirigeant. Dans les grandes sociétés, ce n'est souvent plus le cas. Adolf Berle et Gardiner Means, dans The Modern Corporation and Private Property (1932), montrent que dans les grandes sociétés américaines, le capital est dispersé entre un très grand nombre de petits actionnaires, incapables de s'organiser : le pouvoir réel passe aux dirigeants salariés, les managers. C'est la séparation de la propriété et du contrôle. John Kenneth Galbraith (Le Nouvel État industriel, 1967) prolonge l'analyse : le pouvoir appartient à la technostructure, l'ensemble des experts et cadres qui préparent les décisions, plus attachée à la croissance de l'entreprise qu'à la maximisation du profit.",
                "La théorie de l'agence (Michael Jensen et William Meckling, 1976) analyse cette relation : les actionnaires (le principal, ou mandant) confient la gestion aux dirigeants (l'agent, ou mandataire). Or les intérêts des deux peuvent diverger : les dirigeants peuvent préférer le prestige, la taille de l'entreprise, la sécurité de leur poste ou une rémunération élevée, plutôt que la rentabilité. Comme ils disposent de plus d'informations que les actionnaires (asymétrie d'information), ces derniers doivent supporter des coûts d'agence pour les surveiller et les inciter.",
                "Pour aligner les intérêts, on indexe une partie de la rémunération des dirigeants sur la performance boursière (stock-options, actions gratuites) et on renforce le contrôle par le conseil d'administration. Depuis les années 1980, la montée des investisseurs institutionnels (fonds de pension, fonds d'investissement), qui détiennent de gros blocs d'actions, a renforcé le pouvoir des actionnaires : c'est la gouvernance actionnariale, centrée sur la création de valeur pour l'actionnaire. Elle est critiquée parce qu'elle peut privilégier la rentabilité de court terme au détriment de l'investissement et de l'emploi.",
              ],
              box: { label: "Définition", text: "Relation d'agence : relation dans laquelle un principal (les actionnaires) confie une tâche à un agent (les dirigeants) qui dispose de plus d'informations que lui et dont les intérêts peuvent diverger des siens." },
            },
            {
              heading: "L'entreprise, lieu de coopération et de conflits",
              paragraphs: [
                "L'entreprise repose sur la coopération : la production est collective et exige que chacun coordonne son travail avec celui des autres, partage des informations et s'engage au-delà des consignes formelles. Cette coopération s'inscrit dans une relation de pouvoir : le contrat de travail crée un lien de subordination, qui donne à l'employeur le pouvoir de diriger, de contrôler et de sanctionner les salariés.",
                "L'entreprise est aussi un lieu de conflits, car les intérêts des acteurs divergent : niveau des salaires et partage de la valeur ajoutée entre salaires et profits, conditions et durée du travail, emploi en cas de restructuration. Selon l'économiste Albert Hirschman (Exit, Voice and Loyalty, 1970), un salarié mécontent peut partir (la défection) ou protester pour changer les choses (la prise de parole) ; la loyauté envers l'organisation influence ce choix.",
                "Les conflits sont encadrés par des institutions. Le comité social et économique (CSE), créé par les ordonnances de 2017 et obligatoire à partir de 11 salariés, représente le personnel : il présente les réclamations, veille à la santé et à la sécurité au travail et, dans les entreprises d'au moins 50 salariés, il est consulté sur l'organisation et la marche de l'entreprise. Les syndicats négocient des accords collectifs avec l'employeur, notamment sur les salaires. La grève, cessation collective et concertée du travail pour appuyer des revendications professionnelles, est un droit reconnu par le Préambule de la Constitution de 1946. En France, le taux de syndicalisation est faible, de l'ordre de 10 % des salariés, mais les accords négociés s'appliquent à tous les salariés concernés.",
              ],
              box: { label: "À retenir", text: "Coopération : la production est collective. Pouvoir : le lien de subordination. Conflits : salaires, conditions de travail, emploi, partage de la valeur ajoutée. Régulation : CSE, syndicats, négociation collective, droit de grève." },
            },
            {
              heading: "Les parties prenantes et la responsabilité sociale",
              paragraphs: [
                "Les parties prenantes sont tous les groupes qui influencent l'activité de l'entreprise ou sont affectés par elle : actionnaires, dirigeants et salariés (parties prenantes internes), mais aussi clients, fournisseurs, banques, État, collectivités locales, riverains et associations (parties prenantes externes). Cette approche, popularisée par R. Edward Freeman en 1984, fonde une gouvernance partenariale : l'entreprise doit tenir compte des intérêts de toutes les parties prenantes, et pas seulement de ceux des actionnaires.",
                "La responsabilité sociale des entreprises (RSE) désigne la prise en compte, par les entreprises, des effets sociaux et environnementaux de leur activité, au-delà de leurs obligations légales. En France, la loi PACTE de 2019 a modifié le Code civil : une société doit être gérée dans son intérêt social, en prenant en considération les enjeux sociaux et environnementaux de son activité. Elle peut inscrire dans ses statuts une raison d'être, et même devenir une société à mission, qui se fixe des objectifs sociaux et environnementaux contrôlés par un comité de mission.",
                "Ces évolutions ne suppriment pas les tensions. En 2020, Danone devient la première grande société cotée française à adopter la qualité de société à mission ; en 2021, son PDG est pourtant écarté par le conseil d'administration sous la pression d'actionnaires qui jugent la rentabilité insuffisante. La gouvernance reste donc un rapport de forces entre des acteurs aux objectifs différents.",
              ],
              box: { label: "Définition", text: "Parties prenantes : ensemble des acteurs qui influencent l'entreprise ou sont affectés par ses décisions (actionnaires, salariés, clients, fournisseurs, prêteurs, pouvoirs publics, riverains). Gouvernance actionnariale : priorité aux actionnaires ; gouvernance partenariale : prise en compte de toutes les parties prenantes." },
            },
          ],
          keyPoints: [
            "La gouvernance organise le pouvoir dans l'entreprise : qui décide, qui contrôle, dans l'intérêt de qui.",
            "SA : assemblée générale des actionnaires, conseil d'administration, directeur général ; des administrateurs salariés dans les grandes entreprises depuis 2013.",
            "Berle et Means (1932) : séparation de la propriété et du contrôle ; Galbraith (1967) : la technostructure.",
            "Théorie de l'agence (Jensen et Meckling, 1976) : actionnaires (principal) et dirigeants (agent) aux intérêts divergents ; stock-options et contrôle pour les aligner.",
            "L'entreprise est un lieu de coopération (production collective) et de conflits (salaires, conditions de travail, emploi), dans un rapport de subordination.",
            "Régulation des conflits : CSE (2017, dès 11 salariés), syndicats, négociation collective, droit de grève (Préambule de 1946).",
            "Parties prenantes (Freeman, 1984), RSE, loi PACTE (2019) : raison d'être et société à mission.",
          ],
          example: {
            statement: "Une grande société industrielle cotée en Bourse annonce la fermeture d'une usine de 400 salariés, jugée moins rentable, pour augmenter sa rentabilité et ses dividendes. Identifiez trois parties prenantes concernées et leurs intérêts, puis montrez que cette décision révèle à la fois un conflit et un enjeu de gouvernance.",
            solution: [
              "Les actionnaires : ils attendent une hausse de la rentabilité et des dividendes ; la fermeture d'un site moins rentable va dans leur sens à court terme.",
              "Les salariés de l'usine : ils veulent conserver leur emploi et leurs revenus ; la fermeture menace directement leurs intérêts.",
              "Les collectivités locales, les fournisseurs et les commerces voisins : ils perdent des recettes, des commandes et des clients ; l'emploi local est fragilisé.",
              "Conflit : les intérêts divergent sur le partage de la valeur créée (dividendes contre emplois et salaires). Il peut s'exprimer par la consultation du CSE, des négociations syndicales sur le plan social, voire une grève.",
              "Enjeu de gouvernance : la décision montre le poids des actionnaires (gouvernance actionnariale). Une gouvernance partenariale, ou la prise en compte des enjeux sociaux prévue par la loi PACTE, conduirait à intégrer davantage les intérêts des autres parties prenantes (reclassement, reprise du site, étalement de la fermeture).",
              "Conclusion : la fermeture illustre que l'entreprise est un lieu de conflits entre acteurs aux objectifs différents, et que la gouvernance détermine quels intérêts l'emportent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des acteurs suivants, indiquez s'il s'agit d'une partie prenante interne ou externe de l'entreprise, et précisez une attente principale : (a) les actionnaires ; (b) les salariés ; (c) les clients ; (d) les fournisseurs ; (e) la banque qui a prêté à l'entreprise ; (f) les riverains de l'usine ; (g) l'État.",
              hint: "Les parties prenantes internes participent directement au fonctionnement de l'entreprise (capital, direction, travail) ; les externes sont en relation avec elle depuis l'extérieur.",
              solution: [
                "(a) Interne : les actionnaires attendent des dividendes et une hausse de la valeur de leurs actions.",
                "(b) Interne : les salariés attendent des salaires, de bonnes conditions de travail et la sécurité de l'emploi.",
                "(c) Externe : les clients attendent des produits de qualité à un prix raisonnable.",
                "(d) Externe : les fournisseurs attendent des commandes régulières et d'être payés dans les délais.",
                "(e) Externe : la banque attend le remboursement du prêt et le paiement des intérêts.",
                "(f) Externe : les riverains attendent peu de nuisances (bruit, pollution) et des emplois locaux.",
                "(g) Externe : l'État attend le paiement des impôts et des cotisations, le respect du droit, et des emplois.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le capital d'une société anonyme cotée est réparti ainsi : famille fondatrice 22 %, investisseurs institutionnels 40 % (répartis entre une cinquantaine de fonds), salariés actionnaires 3 %, petits actionnaires individuels 35 %. Lors de l'assemblée générale, seuls 60 % des actions sont représentés, dont la totalité de celles de la famille. (1) Quelle part des voix exprimées la famille détient-elle avec une action, une voix ? (2) Ses actions, détenues depuis plus de deux ans, bénéficient d'un droit de vote double, contrairement aux autres actions représentées : recalculez sa part des voix. (3) Quelle analyse de la gouvernance ce cas illustre-t-il ?",
              hint: "La part des voix se calcule par rapport aux voix exprimées à l'assemblée, pas par rapport au capital total. Avec un droit de vote double, chaque action de la famille compte deux fois.",
              solution: [
                "(1) La famille détient 22 % du capital, et 60 % des actions sont représentées : 22 ÷ 60 × 100 ≈ 36,7 % des voix exprimées.",
                "(2) Avec le droit de vote double, la famille dispose de 22 × 2 = 44 voix (pour 100 actions du capital). Les autres actions représentées comptent 60 - 22 = 38 voix. Total : 44 + 38 = 82 voix. Part de la famille : 44 ÷ 82 × 100 ≈ 53,7 %, soit la majorité.",
                "(3) Avec seulement 22 % du capital, la famille contrôle l'assemblée générale, car les autres actionnaires sont dispersés et beaucoup ne votent pas : c'est un contrôle minoritaire. Le cas illustre l'analyse de Berle et Means : la dispersion du capital sépare la propriété du contrôle.",
                "Résultat : environ 36,7 % des voix sans droit de vote double, environ 53,7 % avec. Le pouvoir dans l'entreprise ne dépend pas seulement de la part du capital, mais aussi des règles de gouvernance et de la mobilisation des actionnaires.",
              ],
            },
            {
              level: 3,
              statement: "Entraînement au format du bac, épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que l'entreprise est un lieu de coopération, mais aussi de conflits.",
              hint: "Construisez deux paragraphes : la coopération (production collective, coordination, engagement) puis les conflits (intérêts divergents et leur régulation), avec un exemple précis dans chacun.",
              solution: [
                "Introduction : l'entreprise est une organisation productive qui réunit des acteurs (actionnaires, dirigeants, salariés) aux rôles différents. Leurs relations combinent coopération et conflits.",
                "Coopération (affirmation) : la production est collective et suppose la coopération. Explication : chaque salarié dépend du travail des autres, et l'entreprise a besoin que chacun partage ses informations et s'investisse au-delà des consignes formelles ; tous ont intérêt à la survie et à la réussite de l'entreprise, source des salaires et des profits. Illustration : une équipe de production qui signale des défauts et propose des améliorations contribue à la qualité et à la compétitivité de tous.",
                "Conflits (affirmation) : les intérêts divergent aussi. Explication : le partage de la valeur ajoutée oppose salaires et profits ; les conditions de travail, la durée du travail ou les restructurations opposent salariés et direction, dans un rapport de subordination fixé par le contrat de travail. Illustration : une fermeture de site décidée pour accroître la rentabilité peut déclencher une grève ; ces conflits sont encadrés par le CSE, la négociation collective avec les syndicats et le droit de grève.",
                "Conclusion : coopération et conflit coexistent ; les institutions de représentation et la gouvernance organisent leur équilibre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la réflexion et du droit sur la gouvernance des entreprises.",
            items: [
              "Berle et Means décrivent la séparation de la propriété et du contrôle",
              "Galbraith analyse le pouvoir de la technostructure",
              "Jensen et Meckling formulent la théorie de l'agence",
              "Freeman popularise l'approche par les parties prenantes",
              "Les ordonnances créent le comité social et économique",
              "La loi PACTE introduit la raison d'être et la société à mission",
              "Danone devient la première grande société cotée française à mission",
            ],
          },
          quiz: [
            {
              q: "Selon Berle et Means, la dispersion du capital entre de nombreux petits actionnaires conduit à :",
              options: [
                "un renforcement du pouvoir de chaque petit actionnaire",
                "la séparation de la propriété et du contrôle, au profit des dirigeants",
                "la disparition des dirigeants salariés",
                "la nationalisation des grandes entreprises",
              ],
              answer: 1,
              why: "Incapables de s'organiser, les petits actionnaires laissent le pouvoir réel aux managers : la propriété et le contrôle sont séparés.",
            },
            {
              q: "Dans la théorie de l'agence, qui est le principal ?",
              options: [
                "Le dirigeant salarié, qui gère l'entreprise au quotidien",
                "Le salarié représentant le personnel au conseil d'administration",
                "Le client, qui achète les produits de l'entreprise",
                "L'actionnaire, qui confie la gestion aux dirigeants",
              ],
              answer: 3,
              why: "Le principal (mandant) délègue une tâche à l'agent (mandataire). Les actionnaires sont le principal, les dirigeants l'agent.",
            },
            {
              q: "Quel est le rôle de l'assemblée générale des actionnaires d'une SA ?",
              options: [
                "Approuver les comptes, décider des dividendes et élire les administrateurs",
                "Représenter les salariés et présenter leurs réclamations",
                "Fixer les règles de concurrence applicables au secteur et sanctionner les ententes entre entreprises",
              ],
              answer: 0,
              why: "L'assemblée générale réunit les propriétaires du capital ; la représentation des salariés relève du CSE, et les règles de concurrence des autorités publiques.",
            },
            {
              q: "Quelle instance représente le personnel dans les entreprises d'au moins 11 salariés ?",
              options: [
                "Le conseil de surveillance",
                "Le directoire",
                "Le comité social et économique",
                "L'assemblée générale des actionnaires",
              ],
              answer: 2,
              why: "Créé en 2017, le CSE représente le personnel et veille à la santé et à la sécurité au travail ; à partir de 50 salariés, il est aussi consulté sur la marche de l'entreprise.",
            },
            {
              q: "Que permet la loi PACTE de 2019 ?",
              options: [
                "D'interdire la distribution de dividendes dans les sociétés cotées",
                "D'inscrire une raison d'être dans les statuts et de devenir société à mission",
                "De supprimer les représentants des salariés au conseil d'administration",
              ],
              answer: 1,
              why: "La loi PACTE impose de prendre en considération les enjeux sociaux et environnementaux et permet d'adopter une raison d'être, voire la qualité de société à mission.",
            },
          ],
          trap: "Croire que le pouvoir dans l'entreprise revient automatiquement aux propriétaires du capital : la séparation de la propriété et du contrôle, les règles de vote et le rôle des salariés et des autres parties prenantes rendent la répartition du pouvoir plus complexe.",
          method: "Face à une décision d'entreprise, faites un tableau à trois colonnes (acteur, intérêt, moyen d'action) pour chaque partie prenante : il fait apparaître les convergences, les conflits et les règles de gouvernance qui tranchent.",
        },
      ],
    },
  ],
}
