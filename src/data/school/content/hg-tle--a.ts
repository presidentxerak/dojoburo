import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-tle',
  chapters: [
    /* ==================================================================== */
    /* HISTOIRE, THÈME 1 · FRAGILITÉS DES DÉMOCRATIES, TOTALITARISMES         */
    /* ET SECONDE GUERRE MONDIALE (1929-1945)                                 */
    /* ==================================================================== */
    {
      id: 'democraties-totalitarismes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'crise-de-1929',
          title: 'L\'impact de la crise de 1929 : déséquilibres économiques et sociaux',
          minutes: 35,
          objectives: [
            "Expliquer les origines de la crise de 1929 dans le contexte d'un capitalisme libéral et déjà mondialisé.",
            "Décrire la propagation de la crise des États-Unis au reste du monde et ses conséquences économiques et sociales.",
            "Analyser les réponses politiques apportées à la crise, en particulier le New Deal de Roosevelt et le Front populaire en France.",
            "Mettre en relation la crise économique et la fragilisation des démocraties libérales.",
          ],
          course: [
            {
              heading: "Du krach boursier à la crise économique aux États-Unis",
              paragraphs: [
                "Dans les années 1920, les États-Unis sont la première puissance économique du monde. La production de masse (le fordisme, avec le travail à la chaîne) et l'achat à crédit diffusent l'automobile, la radio et l'électroménager. Mais cette prospérité repose sur des déséquilibres : une surproduction agricole et industrielle, des revenus très inégalement répartis qui limitent la consommation, et une spéculation boursière croissante. Beaucoup d'Américains achètent des actions à crédit en pariant sur leur hausse : les cours de la Bourse de New York (Wall Street) se détachent de la réalité de l'économie.",
                "Le jeudi 24 octobre 1929, le « jeudi noir », une vague massive d'ordres de vente fait chuter les cours ; le mardi 29 octobre, l'effondrement s'aggrave : c'est le krach. Les spéculateurs qui avaient emprunté ne peuvent plus rembourser, les banques qui leur avaient prêté sont en difficulté et les épargnants se précipitent pour retirer leurs dépôts. Entre 1930 et 1933, des milliers de banques américaines font faillite : le crédit se raréfie, la consommation et l'investissement s'effondrent.",
                "La crise financière devient une crise économique durable, une dépression. Une spirale déflationniste s'installe : les prix baissent, les entreprises réduisent leur production et licencient, les revenus diminuent, donc la demande recule encore. En 1932, la production industrielle américaine a reculé de près de moitié par rapport à 1929, et en 1933 environ un quart de la population active, soit plus de douze millions de personnes, est au chômage.",
              ],
              box: { label: "Définition", text: "Krach : effondrement brutal des cours de la Bourse. Dépression : crise économique longue et profonde, marquée par la chute de la production et un chômage massif. Déflation : baisse générale et durable des prix, qui pousse à différer les achats et aggrave la crise." },
            },
            {
              heading: "Une crise mondiale",
              paragraphs: [
                "Dans les années 1920, l'économie mondiale est déjà très interdépendante. Les États-Unis sont le premier créancier du monde : l'Allemagne, en particulier, dépend des prêts américains (plan Dawes de 1924) pour se reconstruire et payer les réparations de la Première Guerre mondiale. À partir de 1929-1930, les banques américaines en difficulté rapatrient leurs capitaux. En mai 1931, la faillite de la Creditanstalt, grande banque de Vienne, déclenche une crise bancaire en Europe centrale puis en Allemagne. En septembre 1931, le Royaume-Uni abandonne l'étalon-or et laisse la livre sterling se déprécier.",
                "Pour protéger leurs producteurs, les États se replient sur eux-mêmes. Les États-Unis relèvent fortement leurs droits de douane en 1930 (tarif Hawley-Smoot), ce qui entraîne des représailles ; le Royaume-Uni organise en 1932 une préférence impériale avec son empire (conférence d'Ottawa) et la France se tourne vers ses colonies. Entre 1929 et 1933, la valeur du commerce mondial diminue d'environ deux tiers. Les pays exportateurs de matières premières et de produits agricoles (Amérique latine, colonies) sont frappés par l'effondrement des prix.",
                "Les conséquences sociales sont considérables : chômage de masse (environ six millions de chômeurs en Allemagne en 1932), files d'attente devant les soupes populaires, paysans ruinés, classes moyennes inquiètes de leur déclassement. Aux États-Unis, des familles d'agriculteurs du Middle West, chassées par la crise et les tempêtes de poussière (le Dust Bowl), migrent vers la Californie, ce que raconte le roman de John Steinbeck Les Raisins de la colère (1939). La France, moins dépendante du commerce mondial, n'est vraiment touchée qu'à partir de 1931, mais la crise y dure plus longtemps.",
              ],
              box: { label: "À retenir", text: "La crise se propage par quatre canaux : le retrait des capitaux américains, la contagion des faillites bancaires, l'effondrement du commerce international aggravé par le protectionnisme et la chute des prix des matières premières." },
            },
            {
              heading: "Des démocraties fragilisées",
              paragraphs: [
                "La crise discrédite les démocraties libérales, accusées d'impuissance, et nourrit les extrêmes. En Allemagne, la république de Weimar est gouvernée par décrets et applique une politique de déflation qui aggrave le chômage. Le parti nazi (NSDAP), qui ne recueillait que 2,6 % des voix en 1928, en obtient 18,3 % en septembre 1930 et 37,3 % en juillet 1932 : il devient le premier parti du Reichstag. Le 30 janvier 1933, le président Hindenburg nomme Adolf Hitler chancelier, de manière légale.",
                "En France, la crise s'accompagne de scandales politico-financiers (affaire Stavisky). Le 6 février 1934, des ligues d'extrême droite et des associations d'anciens combattants manifestent violemment près de la Chambre des députés ; la soirée fait plusieurs morts. La gauche y voit une menace fasciste : socialistes (SFIO), communistes (PCF) et radicaux se rapprochent et forment en 1935 le Rassemblement populaire. Ailleurs, la crise renforce les militaristes au Japon, qui envahit la Mandchourie en 1931, et les régimes autoritaires d'Europe centrale et orientale.",
              ],
            },
            {
              heading: "Les réponses politiques : le New Deal et le Front populaire",
              paragraphs: [
                "Le président républicain Herbert Hoover compte d'abord sur le retour spontané de l'équilibre du marché. Élu en novembre 1932, le démocrate Franklin Delano Roosevelt lance en mars 1933 le New Deal (la « nouvelle donne »). Pendant les « Cent jours », il assainit les banques (Emergency Banking Act), sépare les banques de dépôt et les banques d'affaires (Glass-Steagall Act), soutient les prix agricoles en payant les fermiers pour réduire leur production (Agricultural Adjustment Act), encadre l'industrie par des codes fixant salaires minimaux et durée du travail (National Industrial Recovery Act) et lance de grands travaux, comme l'aménagement de la vallée du Tennessee (Tennessee Valley Authority).",
                "Un second New Deal, à partir de 1935, reconnaît le droit syndical et la négociation collective (Wagner Act) et crée une assurance vieillesse et chômage (Social Security Act). La Cour suprême annule pourtant plusieurs lois jugées contraires à la Constitution, dont le NIRA en 1935. Le bilan est nuancé : le New Deal rétablit la confiance et fait de l'État fédéral un acteur régulateur et protecteur, mais le chômage reste élevé et remonte lors de la récession de 1937-1938 ; seul le réarmement ramène le plein emploi. En 1936, l'économiste britannique John Maynard Keynes justifie, dans sa Théorie générale, l'intervention de l'État pour soutenir la demande.",
                "En France, le Front populaire (SFIO, radicaux, PCF) gagne les élections d'avril et mai 1936. Une vague de grèves avec occupations d'usines accompagne l'arrivée au pouvoir du socialiste Léon Blum. Les accords de Matignon (7-8 juin 1936) accordent des hausses de salaires de 7 à 15 %, les conventions collectives et l'élection de délégués du personnel ; des lois instaurent deux semaines de congés payés et la semaine de 40 heures, et la scolarité devient obligatoire jusqu'à 14 ans. Mais la fuite des capitaux, la dévaluation du franc (septembre 1936) et les divisions sur la guerre d'Espagne conduisent à la « pause » de 1937 puis à la chute du gouvernement Blum en juin 1937.",
              ],
              box: { label: "Repère", text: "24 octobre 1929 : jeudi noir. 1930 : tarif Hawley-Smoot. Mai 1931 : faillite de la Creditanstalt. 30 janvier 1933 : Hitler chancelier. Mars 1933 : début du New Deal. 6 février 1934 : émeutes à Paris. Juin 1936 : accords de Matignon." },
            },
          ],
          keyPoints: [
            "La crise naît des déséquilibres de la prospérité américaine : surproduction, inégalités, spéculation boursière à crédit.",
            "Le krach de Wall Street (24 et 29 octobre 1929) provoque des faillites bancaires en chaîne et une spirale déflationniste.",
            "La crise devient mondiale par le retrait des capitaux américains, la contagion bancaire (1931) et le protectionnisme.",
            "Conséquences : chômage de masse (un quart des actifs aux États-Unis en 1933), misère, montée des extrêmes, démocraties fragilisées.",
            "New Deal (1933-1938) : l'État fédéral régule, protège et investit, avec un bilan économique nuancé.",
            "Front populaire (1936) : accords de Matignon, congés payés, 40 heures, mais difficultés économiques et chute en 1937.",
          ],
          example: {
            statement: "Montrez comment une crise boursière américaine devient une crise économique mondiale entre 1929 et 1932.",
            solution: [
              "Partir du point de départ : en octobre 1929, le krach de Wall Street ruine les spéculateurs qui avaient acheté des actions à crédit.",
              "Expliquer le passage à la crise économique aux États-Unis : faillites bancaires, raréfaction du crédit, chute de la consommation et de l'investissement, baisse des prix, de la production et de l'emploi.",
              "Montrer la diffusion financière : les banques américaines rapatrient leurs capitaux, ce qui frappe l'Allemagne et l'Europe centrale ; la faillite de la Creditanstalt (mai 1931) déclenche une crise bancaire européenne.",
              "Montrer la diffusion commerciale : le tarif Hawley-Smoot (1930) et les représailles font chuter la valeur du commerce mondial d'environ deux tiers entre 1929 et 1933.",
              "Ajouter la diffusion par les prix : les pays exportateurs de matières premières et les colonies voient leurs revenus s'effondrer.",
              "Conclure : en raison de l'interdépendance des économies et du rôle central des États-Unis, la crise boursière devient en trois ans une crise économique et sociale mondiale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez chacune des notions suivantes en une phrase et associez-lui un exemple daté tiré du cours : (a) krach boursier ; (b) protectionnisme ; (c) déflation ; (d) New Deal ; (e) accords de Matignon.",
              hint: "Pour chaque notion, répondez à la question « qu'est-ce que c'est ? », puis cherchez dans le cours un fait précis avec sa date.",
              solution: [
                "(a) Krach boursier : effondrement brutal des cours de la Bourse ; exemple : Wall Street, 24 et 29 octobre 1929.",
                "(b) Protectionnisme : politique qui protège la production nationale de la concurrence étrangère, notamment par des droits de douane ; exemple : le tarif Hawley-Smoot aux États-Unis en 1930, ou la préférence impériale britannique en 1932.",
                "(c) Déflation : baisse générale et durable des prix ; exemple : la spirale déflationniste américaine de 1930-1933, ou la politique de déflation de la république de Weimar.",
                "(d) New Deal : politique d'intervention de l'État fédéral américain lancée par Roosevelt en 1933 pour relancer l'économie et protéger la population ; exemple : la Tennessee Valley Authority (1933) ou le Social Security Act (1935).",
                "(e) Accords de Matignon : accords signés les 7 et 8 juin 1936 entre le patronat et la CGT sous l'arbitrage du gouvernement Blum ; ils accordent des hausses de salaires de 7 à 15 %, les conventions collectives et les délégués du personnel.",
              ],
            },
            {
              level: 2,
              statement: "Voici les ordres de grandeur couramment retenus pour le taux de chômage aux États-Unis (en % de la population active, valeurs arrondies) : 1929 : 3 % ; 1933 : 25 % ; 1937 : 14 % ; 1938 : 19 % ; 1941 : 10 % ; 1944 : 1 %. (1) Décrivez l'évolution en trois phases. (2) Expliquez le pic de 1933. (3) Que révèlent les chiffres de 1937 et 1938 sur l'efficacité du New Deal ? (4) Comment expliquer le chiffre de 1944 ?",
              hint: "Repérez la hausse, la baisse et la rechute ; mettez chaque phase en relation avec une politique ou un événement du cours.",
              solution: [
                "(1) Trois phases : une explosion du chômage de 1929 à 1933 (de 3 % à 25 %, soit plus de huit fois plus) ; une décrue de 1933 à 1937 (25 % à 14 %) ; une rechute en 1938 (19 %) avant une baisse rapide jusqu'en 1944 (1 %).",
                "(2) Le pic de 1933 est le résultat de la dépression : faillites bancaires, effondrement de la production industrielle (près de moitié de moins qu'en 1929) et spirale déflationniste ; Hoover n'a pas mené de politique de relance d'ampleur.",
                "(3) La baisse de 1933 à 1937 montre que le New Deal améliore la situation, mais le chômage reste très élevé (14 %) ; la rechute de 1938 correspond à la récession de 1937-1938, quand le gouvernement réduit ses dépenses. Le New Deal atténue la crise sans la résoudre.",
                "(4) En 1944, les États-Unis sont en guerre : l'énorme production d'armement et la mobilisation de millions d'hommes dans l'armée ramènent le plein emploi.",
                "Bilan : le New Deal rétablit la confiance et protège, mais c'est la guerre qui met fin au chômage de masse.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « En quoi la crise de 1929 fragilise-t-elle les démocraties dans les années 1930 ? ». Rédigez une introduction, puis présentez un plan en deux ou trois parties avec, pour chacune, deux arguments appuyés sur des exemples précis.",
              hint: "Distinguez les difficultés économiques et sociales, puis leurs effets politiques, sans oublier que certaines démocraties résistent et se réforment.",
              solution: [
                "Introduction : en octobre 1929, le krach de Wall Street ouvre une crise économique mondiale ; elle frappe des démocraties libérales déjà marquées par la Première Guerre mondiale. Problématique : comment la crise affaiblit-elle les régimes démocratiques, et comment certains parviennent-ils à résister ?",
                "I. Une crise économique et sociale qui déstabilise les sociétés : chômage de masse (25 % des actifs aux États-Unis en 1933, environ six millions de chômeurs en Allemagne en 1932) ; appauvrissement des paysans et peur du déclassement des classes moyennes.",
                "II. Des démocraties contestées : les gouvernements semblent impuissants, la déflation aggrave la crise ; en Allemagne, le NSDAP passe de 2,6 % (1928) à 37,3 % (juillet 1932) et Hitler est nommé chancelier le 30 janvier 1933 ; en France, les ligues manifestent le 6 février 1934.",
                "III. Des démocraties qui se défendent en se réformant : le New Deal de Roosevelt (1933) étend le rôle de l'État et crée une protection sociale ; en France, le Front populaire (1936) apporte les congés payés et les 40 heures, même s'il échoue sur le plan économique.",
                "Conclusion : la crise fragilise toutes les démocraties et fait tomber la plus jeune d'entre elles, la république de Weimar ; les démocraties anciennes résistent en renforçant l'intervention de l'État, ce qui annonce l'État-providence d'après 1945.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Jeudi noir à Wall Street",
              "Tarif douanier Hawley-Smoot aux États-Unis",
              "Faillite de la Creditanstalt à Vienne",
              "Le Royaume-Uni abandonne l'étalon-or",
              "Hitler est nommé chancelier",
              "Roosevelt lance les « Cent jours » du New Deal",
              "Accords de Matignon",
            ],
          },
          quiz: [
            {
              q: "Quel jour est appelé le « jeudi noir » ?",
              options: ["Le 29 octobre 1929", "Le 24 octobre 1929", "Le 30 janvier 1933", "Le 6 février 1934"],
              answer: 1,
              why: "Le jeudi noir est le 24 octobre 1929 ; le 29 octobre, mardi, l'effondrement de Wall Street s'aggrave.",
            },
            {
              q: "Pourquoi l'Allemagne est-elle très vite touchée par la crise ?",
              options: ["Elle dépend des capitaux américains, rapatriés à partir de 1929-1930", "Elle a adopté dès 1929 un tarif douanier très élevé qui ruine ses exportateurs", "Elle n'exporte rien", "Le Front populaire y prend le pouvoir"],
              answer: 0,
              why: "L'économie allemande reposait sur les prêts américains (plan Dawes) ; leur retrait provoque une crise bancaire et un chômage massif.",
            },
            {
              q: "Laquelle de ces mesures appartient au New Deal ?",
              options: ["Les congés payés de deux semaines", "Le plan Dawes", "La Tennessee Valley Authority", "Les lois fascistissimes"],
              answer: 2,
              why: "La TVA, créée en 1933, aménage la vallée du Tennessee (barrages, électricité) ; les congés payés relèvent du Front populaire.",
            },
            {
              q: "Quel est le score du parti nazi aux élections de juillet 1932 ?",
              options: ["2,6 %", "18,3 %", "51 %", "37,3 %"],
              answer: 3,
              why: "Avec 37,3 %, le NSDAP devient le premier parti du Reichstag, sans obtenir la majorité absolue.",
            },
            {
              q: "Que prévoient notamment les accords de Matignon de juin 1936 ?",
              options: ["La création de la Sécurité sociale pour tous les salariés du privé", "Des hausses de salaires et les conventions collectives", "La fin de l'étalon-or", "Le droit de vote des femmes"],
              answer: 1,
              why: "Les accords de Matignon accordent des hausses de salaires de 7 à 15 %, les conventions collectives et les délégués du personnel ; congés payés et 40 heures font l'objet de lois.",
            },
          ],
          trap: "Confondre le krach boursier d'octobre 1929 et la crise économique qu'il déclenche, ou croire que tous les pays sont frappés en même temps : la France n'est vraiment touchée qu'à partir de 1931.",
          method: "Construisez un schéma en trois colonnes (causes, mécanismes de diffusion, conséquences) avec une date ou un chiffre dans chaque case : il sert de brouillon pour toute question problématisée sur la crise.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'regimes-totalitaires',
          title: 'Les régimes totalitaires',
          minutes: 35,
          objectives: [
            "Définir la notion de totalitarisme et discuter de son usage par les historiens.",
            "Caractériser les régimes fasciste, nazi et soviétique : idéologie, conquête et exercice du pouvoir, encadrement de la société, violence de masse.",
            "Comparer ces trois régimes en identifiant leurs points communs et leurs différences.",
            "Expliquer comment la politique extérieure des régimes totalitaires conduit à la guerre, de la guerre d'Espagne à l'invasion de la Pologne.",
          ],
          course: [
            {
              heading: "La notion de totalitarisme",
              paragraphs: [
                "Le mot apparaît en Italie au début des années 1920 : forgé par des antifascistes pour dénoncer la volonté de Mussolini de tout contrôler, il est ensuite revendiqué par le régime lui-même, qui se dit « État totalitaire ». Après 1945, des penseurs en font un concept : la philosophe Hannah Arendt, dans Les Origines du totalitarisme (1951), étudie le nazisme et le stalinisme comme une forme nouvelle de domination, fondée sur l'idéologie et la terreur, qui vise à transformer la nature même des individus.",
                "Un régime totalitaire réunit plusieurs caractères : un parti unique dirigé par un chef qui fait l'objet d'un culte, une idéologie officielle qui prétend tout expliquer, la fusion du parti et de l'État, le monopole des moyens de communication et de propagande, l'encadrement de toute la société (jeunesse, travail, loisirs) et une police politique qui fait régner la terreur. Il ne se contente pas d'obtenir l'obéissance : il exige l'adhésion et veut créer un « homme nouveau ».",
                "La notion est discutée. Certains historiens refusent de rapprocher nazisme et stalinisme, dont les idéologies sont opposées (la race d'un côté, la classe de l'autre). D'autres soulignent que l'Italie fasciste n'a jamais été totalement totalitaire : le roi reste chef de l'État et l'Église catholique conserve une large autonomie après les accords du Latran (1929). Le concept reste utile à condition de comparer sans confondre.",
              ],
              box: { label: "Définition", text: "Totalitarisme : système politique dans lequel un parti unique, guidé par une idéologie et un chef, contrôle l'État et toute la société, ne tolère aucune opposition, utilise la propagande et la terreur et veut façonner un homme nouveau." },
            },
            {
              heading: "L'Italie fasciste et l'Allemagne nazie",
              paragraphs: [
                "En Italie, Benito Mussolini exploite les frustrations de l'après-guerre (la « victoire mutilée ») et la peur des révolutions. Ses Faisceaux de combat (1919) et leurs milices, les squadristes, terrorisent la gauche. Après la marche sur Rome (octobre 1922), le roi Victor-Emmanuel III le nomme président du Conseil. L'assassinat du député socialiste Matteotti (1924) ouvre la voie aux lois « fascistissimes » (1925-1926) : parti unique, presse contrôlée, opposants emprisonnés ou exilés, puis création d'une police politique (OVRA). Le Duce exalte la nation et l'État, encadre la jeunesse (Opera Nazionale Balilla), conquiert l'Éthiopie (1935-1936) et adopte des lois antisémites en 1938.",
                "En Allemagne, l'idéologie nazie, exposée par Hitler dans Mein Kampf (1925), repose sur l'inégalité des races, un antisémitisme obsessionnel, la conquête d'un « espace vital » (Lebensraum) à l'Est et le principe du chef (Führerprinzip). Nommé chancelier le 30 janvier 1933, Hitler détruit la démocratie en quelques mois : après l'incendie du Reichstag (27 février), un décret suspend les libertés ; la loi des pleins pouvoirs (23 mars) lui permet de légiférer seul ; le NSDAP devient parti unique (juillet 1933). Après la mort de Hindenburg (août 1934), il cumule les fonctions de chancelier et de président : il est le Führer.",
                "Le régime nazi réalise la mise au pas (Gleichschaltung) de la société : syndicats dissous, Jeunesses hitlériennes, propagande orchestrée par Goebbels, autodafés de livres (mai 1933). La terreur s'exerce par la Gestapo et la SS, et par les camps de concentration, ouverts dès 1933 (Dachau) pour les opposants. Les Juifs sont exclus pas à pas : boycott (avril 1933), lois de Nuremberg (septembre 1935), pogrom de la nuit de Cristal (9-10 novembre 1938). D'autres groupes sont persécutés : Tsiganes, homosexuels, Témoins de Jéhovah, personnes handicapées, assassinées à partir de 1939 dans le cadre de l'opération T4.",
              ],
            },
            {
              heading: "L'URSS de Staline",
              paragraphs: [
                "Né de la révolution bolchevique d'octobre 1917, le régime soviétique se réclame du marxisme-léninisme : il veut construire une société sans classes. Après la mort de Lénine (1924), Staline élimine ses rivaux et s'impose comme seul maître à la fin des années 1920. Le Parti communiste est le seul autorisé et contrôle l'État, l'économie et la société.",
                "Staline lance en 1928 le premier plan quinquennal, qui donne la priorité à l'industrie lourde, et impose à partir de 1929-1930 la collectivisation forcée des terres : les paysans doivent entrer dans des kolkhozes (coopératives) ou des sovkhozes (fermes d'État). Les paysans accusés d'être des koulaks (paysans aisés) sont fusillés ou déportés. Les réquisitions provoquent la famine de 1932-1933, qui fait plusieurs millions de morts, surtout en Ukraine (l'Holodomor) et au Kazakhstan.",
                "La terreur est permanente : la police politique (NKVD) arrête, les procès de Moscou (1936-1938) éliminent les anciens dirigeants bolcheviques et la Grande Terreur de 1937-1938 fait environ 700 000 exécutions. Des millions de personnes passent par le Goulag, système de camps de travail forcé. La propagande célèbre le culte de Staline, le réalisme socialiste dans les arts, les travailleurs modèles (stakhanovisme) et encadre la jeunesse (Komsomol).",
              ],
              box: { label: "À retenir", text: "Trois régimes, trois idéologies : la nation et l'État (fascisme), la race (nazisme), la classe et la révolution (stalinisme). Trois méthodes communes : parti unique et culte du chef, propagande et encadrement des masses, terreur policière et camps." },
            },
            {
              heading: "Comparer les régimes et comprendre la marche à la guerre",
              paragraphs: [
                "Les trois régimes partagent le rejet de la démocratie libérale, le parti unique, le culte du chef, l'encadrement des masses et la violence. Mais ils diffèrent : le nazisme vise l'élimination de groupes définis par une prétendue race ; le stalinisme se proclame universel et frappe des ennemis de classe ou supposés tels, y compris au sein du Parti ; le fascisme italien est moins abouti et moins meurtrier à l'intérieur. Leurs économies diffèrent aussi : planification et propriété collective en URSS, maintien de la propriété privée encadrée par l'État en Italie et en Allemagne.",
                "Les régimes fasciste et nazi sont expansionnistes. L'Allemagne quitte la Société des Nations (1933), rétablit le service militaire (1935), remilitarise la Rhénanie (mars 1936), annexe l'Autriche (Anschluss, mars 1938) puis obtient les Sudètes à la conférence de Munich (septembre 1938), où le Royaume-Uni et la France pratiquent l'apaisement. En mars 1939, elle occupe le reste de la Bohême-Moravie. Mussolini se rapproche de Hitler (axe Rome-Berlin, 1936).",
                "La guerre d'Espagne (1936-1939) sert de terrain d'affrontement : l'Allemagne et l'Italie soutiennent le général Franco, soulevé contre la République ; l'aviation allemande bombarde Guernica (avril 1937) ; l'URSS aide les républicains, rejoints par les Brigades internationales, tandis que la France et le Royaume-Uni choisissent la non-intervention. Le 23 août 1939, le pacte germano-soviétique surprend le monde : un protocole secret partage l'Europe orientale. Le 1er septembre, l'Allemagne envahit la Pologne ; le 3, le Royaume-Uni et la France lui déclarent la guerre.",
              ],
              box: { label: "Repère", text: "1922 : marche sur Rome. 1928 : premier plan quinquennal. 1933 : Hitler chancelier. 1935 : lois de Nuremberg. 1936-1939 : guerre d'Espagne. 1937-1938 : Grande Terreur. Septembre 1938 : Munich. 23 août 1939 : pacte germano-soviétique." },
            },
          ],
          keyPoints: [
            "Totalitarisme : parti unique, chef, idéologie, propagande, encadrement des masses, terreur, volonté de créer un homme nouveau.",
            "Italie : marche sur Rome (1922), lois fascistissimes (1925-1926), culte du Duce, régime moins achevé (roi, Église).",
            "Allemagne : Hitler chancelier (30 janvier 1933), pleins pouvoirs, Gestapo et SS, lois de Nuremberg (1935), nuit de Cristal (1938).",
            "URSS : plans quinquennaux, collectivisation forcée, famine de 1932-1933, Goulag, Grande Terreur (1937-1938).",
            "Le concept est discuté : idéologies opposées (race, classe), mais méthodes de domination comparables.",
            "Vers la guerre : Rhénanie, Anschluss, Munich, guerre d'Espagne, pacte germano-soviétique, invasion de la Pologne (1er septembre 1939).",
          ],
          example: {
            statement: "Montrez que le régime nazi s'installe en quelques mois en utilisant à la fois la légalité et la violence (1933-1934).",
            solution: [
              "Rappeler le point de départ légal : le 30 janvier 1933, Hitler est nommé chancelier par le président Hindenburg, conformément à la Constitution de Weimar.",
              "Montrer l'usage de procédures légales : après l'incendie du Reichstag, le décret du 28 février 1933 suspend les libertés ; la loi des pleins pouvoirs du 23 mars 1933 est votée par le Reichstag et permet au gouvernement de légiférer sans lui.",
              "Montrer la violence : arrestations massives de communistes et de socialistes, ouverture du camp de Dachau en mars 1933, terreur exercée par les SA et la SS.",
              "Montrer la destruction du pluralisme : syndicats dissous (mai 1933), partis interdits, le NSDAP devenant parti unique (juillet 1933).",
              "Ajouter l'élimination des rivaux internes : la nuit des Longs Couteaux (30 juin 1934) liquide les chefs de la SA ; à la mort de Hindenburg (août 1934), Hitler devient Führer.",
              "Conclure : en dix-huit mois, Hitler transforme une nomination légale en dictature totalitaire, en combinant l'apparence du droit et la terreur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des trois régimes (Italie fasciste, Allemagne nazie, URSS stalinienne), indiquez : le nom ou le titre du chef, l'idéologie centrale, une organisation de jeunesse et la police politique.",
              hint: "Construisez un tableau à trois lignes et quatre colonnes ; les noms de toutes les organisations figurent dans le cours.",
              solution: [
                "Italie fasciste : Mussolini, le Duce ; idéologie centrée sur la nation et l'État tout-puissant ; jeunesse encadrée par l'Opera Nazionale Balilla ; police politique : l'OVRA.",
                "Allemagne nazie : Hitler, le Führer ; idéologie raciste et antisémite, conquête d'un espace vital ; Jeunesses hitlériennes (Hitlerjugend) ; police politique : la Gestapo, avec la SS.",
                "URSS stalinienne : Staline, le « guide » objet d'un culte ; marxisme-léninisme, construction d'une société sans classes ; Komsomol ; police politique : le NKVD.",
                "Constat : les structures se ressemblent (chef, jeunesse, police), alors que les idéologies diffèrent profondément.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi la collectivisation des campagnes soviétiques (1929-1933) illustre à la fois les objectifs idéologiques du régime stalinien et sa violence. Rédigez un paragraphe argumenté d'une dizaine de lignes.",
              hint: "Partez de l'objectif (une agriculture collective au service de l'industrialisation), puis décrivez les moyens employés et leurs conséquences humaines.",
              solution: [
                "Objectif idéologique : supprimer la propriété privée de la terre et la paysannerie indépendante, considérée comme une survivance du capitalisme, pour construire une société sans classes.",
                "Objectif économique : regrouper les terres en kolkhozes et sovkhozes pour contrôler les récoltes et financer l'industrialisation voulue par le premier plan quinquennal (1928).",
                "Moyens violents : les paysans désignés comme koulaks sont fusillés ou déportés avec leurs familles ; les réquisitions de grain sont imposées même lorsque les récoltes sont insuffisantes.",
                "Conséquence : la famine de 1932-1933 fait plusieurs millions de morts, surtout en Ukraine et au Kazakhstan, sans que le régime renonce à ses exportations de grain ni à ses réquisitions.",
                "Paragraphe rédigé possible : la collectivisation montre que le régime stalinien soumet la société à son projet idéologique par la force ; au nom de la société sans classes et de l'industrialisation, il brise la paysannerie, déporte les koulaks et provoque une famine meurtrière, ce qui illustre le recours à la terreur de masse propre au totalitarisme.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document (résumé rédigé pour l'exercice) : le 15 septembre 1935, le Reichstag réuni à Nuremberg adopte deux lois. La loi sur la citoyenneté du Reich réserve la citoyenneté aux personnes « de sang allemand ou apparenté » ; les Juifs deviennent de simples ressortissants, privés de droits politiques. La loi sur la protection du sang et de l'honneur allemands interdit les mariages et les relations sexuelles entre Juifs et Allemands non juifs, interdit aux Juifs d'employer chez eux des femmes allemandes de moins de 45 ans et d'arborer le drapeau du Reich. Consigne : présentez le document, montrez en quoi il traduit l'idéologie nazie, puis situez-le dans la politique antisémite du régime de 1933 à 1939.",
              hint: "Présentez la nature, la date et l'auteur ; reliez ensuite chaque mesure à une idée de l'idéologie (race, pureté du sang) ; enfin, placez le document entre le boycott de 1933 et la nuit de Cristal de 1938.",
              solution: [
                "Présentation : il s'agit de deux lois du régime nazi adoptées le 15 septembre 1935 par un Reichstag réduit à une chambre d'enregistrement, lors du congrès annuel du parti à Nuremberg ; elles s'appliquent à tous les Juifs d'Allemagne.",
                "Traduction de l'idéologie : la citoyenneté est fondée sur le « sang » et non plus sur la nationalité, ce qui applique la vision raciale du monde exposée dans Mein Kampf ; l'interdiction des mariages et des relations traduit l'obsession de la « pureté de la race » ; l'interdiction d'arborer le drapeau exclut symboliquement les Juifs de la nation.",
                "Situation dans la politique antisémite : après le boycott des commerces juifs (avril 1933) et l'exclusion des fonctionnaires juifs (1933), les lois de Nuremberg font des Juifs des parias légaux ; elles sont suivies de l'aryanisation des entreprises et du pogrom de la nuit de Cristal (9-10 novembre 1938), qui marque le passage à la violence physique de masse.",
                "Portée et limite : le document montre une persécution organisée par l'État et présentée comme légale ; il ne montre pas encore l'extermination, qui ne commence qu'avec la guerre, mais il prépare l'isolement des Juifs qui la rendra possible.",
                "Conclusion : les lois de Nuremberg sont une étape décisive de l'exclusion des Juifs, qui illustre la mise en œuvre de l'idéologie raciale par un régime totalitaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque organisation à sa description.",
            pairs: [
              { left: "Gestapo", right: "Police secrète d'État du régime nazi" },
              { left: "NKVD", right: "Police politique soviétique des années 1930" },
              { left: "OVRA", right: "Police politique de l'Italie fasciste" },
              { left: "Goulag", right: "Administration des camps de travail forcé en URSS" },
              { left: "Hitlerjugend", right: "Organisation de jeunesse du parti nazi" },
              { left: "Komsomol", right: "Organisation de la jeunesse communiste soviétique" },
            ],
          },
          quiz: [
            {
              q: "Quelle philosophe a publié Les Origines du totalitarisme en 1951 ?",
              options: ["Simone Weil", "Simone de Beauvoir", "Hannah Arendt", "Rosa Luxemburg"],
              answer: 2,
              why: "Hannah Arendt y analyse le nazisme et le stalinisme comme des régimes fondés sur l'idéologie et la terreur.",
            },
            {
              q: "Que permet à Hitler la loi du 23 mars 1933 ?",
              options: ["De gouverner et légiférer sans le Reichstag", "D'annexer l'Autriche sans consulter les autres puissances", "De devenir président du Reich", "D'interdire les mariages mixtes"],
              answer: 0,
              why: "La loi des pleins pouvoirs donne au gouvernement le pouvoir de faire les lois : c'est la base légale de la dictature.",
            },
            {
              q: "Quel événement survient en URSS en 1937-1938 ?",
              options: ["La collectivisation des terres", "La révolution d'Octobre", "La mort de Lénine", "La Grande Terreur"],
              answer: 3,
              why: "La Grande Terreur fait environ 700 000 exécutions et envoie des centaines de milliers de personnes au Goulag.",
            },
            {
              q: "Pourquoi l'Italie fasciste est-elle souvent jugée moins totalitaire que les deux autres régimes ?",
              options: ["Elle organise régulièrement des élections libres et pluralistes", "Le roi et l'Église gardent une part d'autorité", "Elle n'a pas de parti unique", "Elle refuse toute guerre"],
              answer: 1,
              why: "Le roi reste chef de l'État et l'Église conserve une large autonomie après les accords du Latran (1929).",
            },
            {
              q: "Que contient le pacte germano-soviétique du 23 août 1939 ?",
              options: ["Une alliance contre le Japon", "Un accord de désarmement naval et aérien entre les deux pays", "Un partage secret de l'Europe orientale", "La fin de la guerre d'Espagne"],
              answer: 2,
              why: "Outre la non-agression, un protocole secret partage la Pologne et place les pays baltes dans la sphère soviétique.",
            },
          ],
          trap: "Présenter les trois régimes comme identiques : ils emploient des méthodes comparables, mais le nazisme repose sur la race, le stalinisme sur la classe, et le fascisme italien laisse subsister le roi et l'Église.",
          method: "Révisez avec un tableau comparatif à quatre lignes (idéologie, prise et exercice du pouvoir, encadrement, terreur) : une réponse comparative réussie montre toujours au moins une ressemblance et une différence par critère.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'guerre-d-aneantissement',
          title: 'La Seconde Guerre mondiale, une guerre d\'anéantissement',
          minutes: 35,
          objectives: [
            "Identifier les grandes phases et les tournants de la Seconde Guerre mondiale, en Europe comme en Asie et dans le Pacifique.",
            "Expliquer pourquoi la Seconde Guerre mondiale est une guerre totale et une guerre d'anéantissement.",
            "Décrire les étapes et les modalités du génocide des Juifs et des Tsiganes.",
            "Définir les notions de crime contre l'humanité et de génocide et expliquer leur naissance juridique.",
          ],
          course: [
            {
              heading: "Une guerre mondiale en plusieurs phases",
              paragraphs: [
                "De 1939 à 1941, l'Axe vole de victoire en victoire. Après l'invasion de la Pologne (septembre 1939), partagée avec l'URSS, l'Allemagne mène une guerre éclair (Blitzkrieg) qui combine chars et aviation : elle conquiert le Danemark et la Norvège (avril 1940), puis les Pays-Bas, la Belgique et la France (mai-juin 1940). Le Royaume-Uni de Winston Churchill résiste seul et remporte la bataille d'Angleterre (été-automne 1940). En septembre 1940, l'Allemagne, l'Italie et le Japon signent le pacte tripartite.",
                "En 1941, la guerre devient mondiale. Le 22 juin, l'Allemagne attaque l'URSS (opération Barbarossa). Le 7 décembre, le Japon attaque la flotte américaine à Pearl Harbor (Hawaï) : les États-Unis entrent en guerre et forment avec le Royaume-Uni et l'URSS la Grande Alliance. Le Japon conquiert en quelques mois l'Asie du Sud-Est et le Pacifique occidental (Philippines, Singapour en février 1942, Indes néerlandaises).",
                "En 1942-1943, le conflit bascule : victoire navale américaine de Midway (juin 1942), victoire britannique d'El Alamein (octobre-novembre 1942), débarquement allié en Afrique du Nord (novembre 1942), capitulation allemande à Stalingrad (2 février 1943). Les Alliés reprennent ensuite l'initiative : débarquement en Sicile (juillet 1943), en Normandie (6 juin 1944) et en Provence (15 août 1944), offensive soviétique jusqu'à Berlin. L'Allemagne capitule le 8 mai 1945. Le Japon, après les bombardements atomiques d'Hiroshima (6 août) et de Nagasaki (9 août), capitule le 2 septembre 1945.",
              ],
              box: { label: "Repère", text: "1er septembre 1939 : invasion de la Pologne. Mai-juin 1940 : défaite française. 22 juin 1941 : Barbarossa. 7 décembre 1941 : Pearl Harbor. Juin 1942 : Midway. 2 février 1943 : Stalingrad. 6 juin 1944 : débarquement en Normandie. 8 mai 1945 : capitulation allemande. 2 septembre 1945 : capitulation japonaise." },
            },
            {
              heading: "Une guerre totale et d'anéantissement",
              paragraphs: [
                "La guerre est totale : les belligérants mobilisent toutes leurs ressources humaines, économiques, scientifiques et morales. Les économies produisent massivement des armes (les États-Unis deviennent l'« arsenal des démocraties »), les femmes remplacent les hommes dans les usines, les savants sont mobilisés (radar, décryptage des codes, projet Manhattan qui aboutit à la bombe atomique) et la propagande entretient la haine de l'ennemi. Les civils deviennent des cibles.",
                "Elle est aussi une guerre d'anéantissement : il ne s'agit plus seulement de vaincre l'armée adverse, mais de détruire l'ennemi, y compris sa population. À l'Est, les nazis mènent une guerre idéologique et raciale : ils considèrent les Slaves comme des « sous-hommes » à asservir et veulent coloniser leurs terres. Plus de trois millions de prisonniers de guerre soviétiques, sur environ 5,7 millions, meurent en captivité, de faim, de froid ou exécutés. Le siège de Leningrad (septembre 1941-janvier 1944) fait environ un million de morts civils, surtout de faim. L'URSS perd au total près de 26 millions de personnes.",
                "En Asie, le Japon, en guerre contre la Chine depuis 1937, multiplie les violences contre les civils : massacre de Nankin (décembre 1937-janvier 1938), travail forcé, prostitution forcée des « femmes de réconfort ». Partout, les bombardements visent les villes pour détruire la production et briser le moral : Varsovie, Rotterdam et Londres sous les bombes allemandes, Hambourg (juillet 1943) et Dresde (février 1945) sous les bombes alliées, Tokyo (mars 1945). Les deux bombes atomiques font plus de 200 000 morts à Hiroshima et à Nagasaki d'ici la fin de 1945.",
              ],
              box: { label: "Définition", text: "Guerre d'anéantissement : guerre dont le but n'est pas seulement la victoire militaire mais la destruction de l'adversaire, armée et population civile comprises, au nom d'une idéologie. Elle efface la distinction entre combattants et civils." },
            },
            {
              heading: "Le génocide des Juifs et des Tsiganes",
              paragraphs: [
                "La conquête de la Pologne place des millions de Juifs sous la domination nazie. Ils sont enfermés dans des ghettos (Łódź en 1940, Varsovie à partir de novembre 1940, où s'entassent environ 400 000 personnes), où la faim et les épidémies tuent en masse. À partir de juin 1941, derrière l'armée qui envahit l'URSS, des unités mobiles de tuerie, les Einsatzgruppen, aidées par des policiers et des auxiliaires locaux, fusillent les Juifs village après village : c'est la « Shoah par balles ». À Babi Yar, près de Kiev, plus de 33 000 Juifs sont assassinés en deux jours, fin septembre 1941.",
                "À partir de la fin de 1941, les nazis organisent l'extermination dans des centres de mise à mort équipés de chambres à gaz : Chełmno (décembre 1941), puis Bełżec, Sobibor et Treblinka en 1942, ainsi qu'Auschwitz-Birkenau et Majdanek, à la fois camps de concentration et centres de mise à mort. Le 20 janvier 1942, la conférence de Wannsee, près de Berlin, coordonne entre administrations la « solution finale de la question juive » à l'échelle de l'Europe. Les Juifs de toute l'Europe occupée sont déportés en train ; à leur arrivée, la plupart sont gazés immédiatement. Auschwitz-Birkenau, où sont tuées environ 1,1 million de personnes, dont environ un million de Juifs, en est devenu le symbole.",
                "Environ six millions de Juifs, soit à peu près les deux tiers des Juifs d'Europe, sont assassinés : c'est la Shoah (la « catastrophe », en hébreu). Les Tsiganes (Roms et Sintis), eux aussi persécutés comme « race », sont internés, fusillés et déportés, notamment à Auschwitz : au moins 200 000 d'entre eux sont tués. Des Juifs résistent, comme lors de l'insurrection du ghetto de Varsovie (avril-mai 1943).",
              ],
              box: { label: "Définition", text: "Génocide : mot forgé en 1944 par le juriste Raphael Lemkin. La convention de l'ONU du 9 décembre 1948 le définit comme des actes commis dans l'intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux, comme tel." },
            },
            {
              heading: "Un bilan sans précédent et de nouvelles notions juridiques",
              paragraphs: [
                "La guerre fait entre 50 et 60 millions de morts selon les estimations, dont une majorité de civils, une première dans l'histoire. Les pertes sont très inégales : près de 26 millions de morts en URSS, environ six millions en Pologne (près d'un habitant sur six), des millions en Chine, environ trois millions au Japon, environ 600 000 en France. L'Europe et l'Asie orientale sont ruinées, et des millions de personnes sont déplacées.",
                "Les vainqueurs décident de juger les responsables. Le tribunal militaire international de Nuremberg (novembre 1945-octobre 1946) juge 22 dirigeants nazis et en condamne douze à mort. Son statut, adopté en août 1945, définit trois crimes : les crimes contre la paix, les crimes de guerre et les crimes contre l'humanité. Le tribunal de Tokyo (1946-1948) juge les dirigeants japonais. En 1948, l'ONU adopte la convention pour la prévention et la répression du crime de génocide.",
              ],
              box: { label: "Définition", text: "Crime contre l'humanité : selon le statut de Nuremberg (1945), assassinat, extermination, réduction en esclavage, déportation et autres actes inhumains commis contre des populations civiles, ou persécutions pour des motifs politiques, raciaux ou religieux. En France, il est imprescriptible depuis 1964." },
            },
          ],
          keyPoints: [
            "Phases : victoires de l'Axe (1939-1941), mondialisation du conflit (1941), tournants (Midway, El Alamein, Stalingrad, 1942-1943), victoire alliée (1944-1945).",
            "Guerre totale : mobilisation des économies, des sciences, des sociétés et de la propagande ; les civils deviennent des cibles.",
            "Guerre d'anéantissement : à l'Est, guerre raciale contre les Slaves et les Juifs ; en Asie, violences japonaises ; bombardements de villes ; Hiroshima et Nagasaki.",
            "Génocide des Juifs : ghettos, Shoah par balles (1941), Wannsee (20 janvier 1942), centres de mise à mort ; environ six millions de victimes.",
            "Génocide des Tsiganes : au moins 200 000 victimes.",
            "Bilan : 50 à 60 millions de morts, majoritairement civils ; Nuremberg définit le crime contre l'humanité, l'ONU le génocide (1948).",
          ],
          example: {
            statement: "Expliquez pourquoi on peut qualifier la guerre menée par l'Allemagne nazie à l'Est de guerre d'anéantissement.",
            solution: [
              "Définir : une guerre d'anéantissement vise la destruction de l'adversaire, armée et civils compris, au nom d'une idéologie.",
              "Montrer l'objectif idéologique : pour les nazis, les Slaves sont des « sous-hommes » et l'Est doit devenir l'espace vital des Allemands ; l'opération Barbarossa (22 juin 1941) est conçue comme une guerre raciale et anticommuniste.",
              "Montrer la violence contre les combattants : plus de trois millions de prisonniers soviétiques, sur environ 5,7 millions, meurent en captivité, faute de soins et de nourriture ou exécutés.",
              "Montrer la violence contre les civils : siège de Leningrad (environ un million de morts), villages incendiés en représailles contre les partisans.",
              "Montrer le lien avec le génocide : les Einsatzgruppen assassinent les Juifs à mesure de l'avancée de l'armée (Babi Yar, septembre 1941) ; c'est sur le front de l'Est que commence l'extermination systématique.",
              "Conclure : la guerre à l'Est ne vise pas une victoire négociée mais la destruction de peuples entiers ; c'est le cœur de la guerre d'anéantissement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Datez précisément les six événements suivants, puis indiquez pour chacun s'il appartient à la phase des victoires de l'Axe, à celle des tournants ou à celle de la victoire alliée : (a) bataille de Stalingrad ; (b) attaque de Pearl Harbor ; (c) débarquement en Normandie ; (d) bataille de Midway ; (e) opération Barbarossa ; (f) bombardement atomique d'Hiroshima.",
              hint: "Les victoires de l'Axe vont jusqu'au début de 1942, les tournants se situent en 1942-1943 et la victoire alliée en 1944-1945.",
              solution: [
                "(e) Opération Barbarossa : 22 juin 1941 ; victoires de l'Axe (avancée allemande jusqu'aux portes de Moscou).",
                "(b) Pearl Harbor : 7 décembre 1941 ; victoires de l'Axe (le Japon conquiert ensuite l'Asie du Sud-Est), même si l'attaque fait entrer les États-Unis dans la guerre.",
                "(d) Midway : juin 1942 ; tournant dans le Pacifique (première grande défaite navale japonaise).",
                "(a) Stalingrad : de l'été 1942 à la capitulation allemande du 2 février 1943 ; tournant en Europe (première grande défaite de la Wehrmacht).",
                "(c) Débarquement en Normandie : 6 juin 1944 ; victoire alliée (ouverture d'un front à l'Ouest).",
                "(f) Hiroshima : 6 août 1945 ; victoire alliée (elle précède la capitulation japonaise du 2 septembre 1945).",
              ],
            },
            {
              level: 2,
              statement: "Étude d'un document (résumé rédigé pour l'exercice). Le 20 janvier 1942, quinze hauts responsables du parti nazi, de la SS et des ministères se réunissent dans une villa de Wannsee, près de Berlin, sous la présidence de Reinhard Heydrich. Le procès-verbal, rédigé par Adolf Eichmann, évalue à environ onze millions le nombre de Juifs d'Europe concernés par la « solution finale », y compris dans des pays non occupés comme le Royaume-Uni. Il emploie un vocabulaire codé : « évacuation vers l'Est », « traitement approprié ». Questions : (1) Quel est l'objet de cette réunion ? (2) Pourquoi le vocabulaire est-il codé ? (3) Que révèle la liste des participants sur l'organisation du génocide ?",
              hint: "La décision d'exterminer n'est pas prise à Wannsee : les massacres ont commencé en 1941. Demandez-vous ce que la réunion organise.",
              solution: [
                "(1) La réunion coordonne la mise en œuvre de la « solution finale », c'est-à-dire l'extermination des Juifs d'Europe ; elle organise la coopération des administrations, alors que les tueries ont déjà commencé à l'Est depuis l'été 1941.",
                "(2) Le vocabulaire codé (évacuation, traitement approprié) dissimule le meurtre de masse : les nazis veulent garder le secret, éviter les réactions des populations et des victimes, et effacer les traces de leur crime.",
                "(3) La présence de représentants de ministères (Intérieur, Justice, Affaires étrangères), du parti et de la SS montre que le génocide est un crime d'État, préparé par une bureaucratie et pas seulement par quelques fanatiques.",
                "(4) Le chiffre de onze millions montre l'ambition européenne du projet : il vise tous les Juifs d'Europe, y compris ceux des pays que l'Allemagne espère encore conquérir.",
                "Bilan : Wannsee marque le passage à une extermination planifiée, administrative et industrielle, menée dans les centres de mise à mort.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « En quoi la Seconde Guerre mondiale est-elle une guerre d'anéantissement ? ». Rédigez l'introduction et présentez un plan détaillé en trois parties.",
              hint: "Ne réduisez pas le sujet au génocide : montrez aussi la violence contre les combattants et contre les civils, en Europe comme en Asie.",
              solution: [
                "Introduction : de 1939 à 1945, la Seconde Guerre mondiale fait 50 à 60 millions de morts, majoritairement civils. Définition : une guerre d'anéantissement vise la destruction de l'adversaire, population comprise. Problématique : comment l'idéologie et la mobilisation totale font-elles de ce conflit une guerre de destruction des peuples ?",
                "I. Une guerre totale et idéologique : mobilisation des économies et des sciences (projet Manhattan) ; idéologie raciale nazie et volonté de conquérir un espace vital ; militarisme japonais.",
                "II. Des violences de masse contre les combattants et les civils : prisonniers soviétiques (plus de trois millions de morts), siège de Leningrad, massacre de Nankin, bombardements de villes (Londres, Hambourg, Dresde, Tokyo), Hiroshima et Nagasaki (6 et 9 août 1945).",
                "III. Le génocide des Juifs et des Tsiganes, sommet de l'anéantissement : ghettos, Shoah par balles, conférence de Wannsee (20 janvier 1942), centres de mise à mort (Auschwitz-Birkenau, Treblinka) ; environ six millions de Juifs et au moins 200 000 Tsiganes assassinés.",
                "Conclusion : l'ampleur des crimes conduit à inventer de nouvelles notions juridiques, le crime contre l'humanité (Nuremberg, 1945) et le génocide (convention de 1948), qui fondent l'ordre international d'après-guerre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la guerre d'anéantissement.",
            statements: [
              { text: "La décision de commencer à tuer les Juifs date de la conférence de Wannsee.", true: false, why: "Les tueries de masse commencent dès l'été 1941 avec les Einsatzgruppen ; Wannsee (janvier 1942) coordonne leur extension à toute l'Europe." },
              { text: "La majorité des morts de la Seconde Guerre mondiale sont des civils.", true: true, why: "C'est une rupture avec la Première Guerre mondiale, où les militaires étaient les plus nombreux parmi les morts." },
              { text: "Les Tsiganes ont été victimes d'un génocide.", true: true, why: "Persécutés comme « race », ils sont internés, fusillés et déportés : au moins 200 000 sont assassinés." },
              { text: "L'URSS est le pays qui compte le plus de morts en Europe.", true: true, why: "Avec près de 26 millions de morts, l'URSS paie le plus lourd tribut à la guerre d'anéantissement menée à l'Est." },
              { text: "Les bombardements de villes ont été pratiqués uniquement par l'Allemagne.", true: false, why: "Les Alliés bombardent aussi massivement les villes allemandes et japonaises (Hambourg, Dresde, Tokyo)." },
              { text: "Le mot « génocide » a été inventé par Hannah Arendt.", true: false, why: "C'est le juriste Raphael Lemkin qui forge le mot en 1944 ; l'ONU le définit dans une convention en 1948." },
              { text: "Le Japon capitule le 2 septembre 1945.", true: true, why: "L'acte de capitulation est signé ce jour-là, après les bombardements d'Hiroshima et de Nagasaki." },
            ],
          },
          quiz: [
            {
              q: "Quelle opération déclenche l'invasion de l'URSS le 22 juin 1941 ?",
              options: ["L'opération Overlord", "L'opération Barbarossa", "L'opération Torch", "L'opération Dynamo, à Dunkerque"],
              answer: 1,
              why: "Barbarossa ouvre le front de l'Est ; Overlord est le débarquement en Normandie, Torch celui d'Afrique du Nord, Dynamo l'évacuation de Dunkerque.",
            },
            {
              q: "Qui étaient les Einsatzgruppen ?",
              options: ["Des unités mobiles de tuerie", "Les gardiens des ghettos de Pologne", "Des résistants juifs du ghetto de Varsovie", "Les juges du tribunal de Nuremberg"],
              answer: 0,
              why: "Ces unités de la SS et de la police assassinent par balles plus d'un million de Juifs à partir de juin 1941.",
            },
            {
              q: "Quel centre de mise à mort est devenu le symbole de la Shoah ?",
              options: ["Dachau", "Buchenwald", "Drancy, près de Paris", "Auschwitz-Birkenau"],
              answer: 3,
              why: "Environ 1,1 million de personnes y sont tuées, dont un million de Juifs ; Dachau et Buchenwald sont des camps de concentration, Drancy un camp de transit en France.",
            },
            {
              q: "Quel tournant militaire a lieu le 2 février 1943 ?",
              options: ["Le débarquement en Sicile", "La bataille de Midway", "La capitulation allemande à Stalingrad", "L'entrée en guerre des États-Unis contre le Japon"],
              answer: 2,
              why: "La défaite de Stalingrad est la première grande défaite de la Wehrmacht et marque le début du reflux allemand à l'Est.",
            },
            {
              q: "Quel crime le statut du tribunal de Nuremberg définit-il pour la première fois ?",
              options: ["Le crime de guerre", "Le crime contre l'humanité", "Le crime de génocide", "Le crime d'espionnage en temps de guerre"],
              answer: 1,
              why: "Le crime contre l'humanité est défini en 1945 ; le génocide n'est défini juridiquement qu'en 1948 par une convention de l'ONU.",
            },
          ],
          trap: "Réduire la guerre d'anéantissement au génocide, ou dater le début de l'extermination de la conférence de Wannsee : les massacres de masse commencent dès l'été 1941, et l'anéantissement vise aussi les prisonniers soviétiques et les civils.",
          method: "Pour chaque violence étudiée, notez qui tue, qui est tué, où, quand et au nom de quoi : ces cinq informations transforment une liste d'horreurs en argumentation historique précise.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-dans-la-guerre',
          title: 'La France dans la guerre : Vichy, collaboration, Résistance',
          minutes: 35,
          objectives: [
            "Expliquer la défaite de 1940 et le choix de l'armistice.",
            "Caractériser le régime de Vichy : Révolution nationale, collaboration d'État et participation à la persécution des Juifs.",
            "Décrire la diversité de la Résistance, intérieure et extérieure, et son unification.",
            "Expliquer comment la Libération rétablit la République.",
          ],
          course: [
            {
              heading: "La défaite de 1940 et le choix de l'armistice",
              paragraphs: [
                "Après huit mois de « drôle de guerre », sans grands combats à l'Ouest, l'offensive allemande commence le 10 mai 1940. Les blindés allemands percent le front dans les Ardennes, à Sedan (13-14 mai), et encerclent les meilleures troupes alliées en Belgique ; elles ne s'échappent que partiellement par Dunkerque. En quelques semaines, l'armée française s'effondre : environ 60 000 soldats sont tués et près de 1,8 million faits prisonniers. Huit à dix millions de civils fuient vers le sud : c'est l'exode.",
                "Replié à Bordeaux, le gouvernement se divise. Le 16 juin, Paul Reynaud démissionne ; le maréchal Pétain, vainqueur de Verdun, devient président du Conseil et annonce le 17 juin qu'il faut cesser le combat. Le 18 juin, depuis Londres, le général de Gaulle appelle à la radio de la BBC à continuer la lutte : la France n'est pas seule, elle a derrière elle un vaste empire, elle peut faire bloc avec l'Empire britannique qui tient la mer et utiliser l'immense industrie des États-Unis, car cette guerre est une guerre mondiale.",
                "L'armistice est signé le 22 juin 1940 à Rethondes. La France est coupée en deux par une ligne de démarcation : une zone occupée au nord et à l'ouest, une zone non occupée (dite « libre ») au sud. L'Alsace et la Moselle sont annexées de fait. L'armée est réduite à 100 000 hommes, la France doit payer de lourds frais d'occupation, et les prisonniers restent en Allemagne. Le gouvernement garde la flotte et l'empire.",
              ],
              box: { label: "Repère", text: "10 mai 1940 : offensive allemande. 17 juin : Pétain demande l'arrêt des combats. 18 juin : appel du général de Gaulle. 22 juin : armistice. 10 juillet : pleins pouvoirs à Pétain. 11 novembre 1942 : occupation de la zone sud. 6 juin 1944 : débarquement. 25 août 1944 : libération de Paris." },
            },
            {
              heading: "Le régime de Vichy : Révolution nationale et collaboration",
              paragraphs: [
                "Le 10 juillet 1940, réunis à Vichy, les députés et sénateurs votent les pleins pouvoirs à Pétain par 569 voix contre 80. Dès le lendemain, Pétain se proclame chef de l'État français et concentre tous les pouvoirs : la IIIe République disparaît. Le régime est autoritaire : le Parlement ne se réunit plus, les libertés sont supprimées, un culte du Maréchal se développe. La Révolution nationale veut régénérer le pays autour de la devise « Travail, Famille, Patrie » : retour à la terre, femme au foyer, encadrement de la jeunesse, rejet de la démocratie, des communistes, des francs-maçons et des Juifs, jugés responsables de la défaite.",
                "Le 24 octobre 1940, Pétain rencontre Hitler à Montoire et annonce le 30 octobre qu'il entre « dans la voie de la collaboration ». Il espère obtenir le retour des prisonniers, l'allègement des frais d'occupation et une place pour la France dans l'Europe allemande. C'est une collaboration d'État, que Pierre Laval, revenu au pouvoir en avril 1942, accentue : il déclare en juin 1942 souhaiter la victoire de l'Allemagne. En février 1943, le Service du travail obligatoire (STO) envoie des centaines de milliers de jeunes Français travailler en Allemagne ; la Milice, créée en janvier 1943, traque les résistants aux côtés des Allemands.",
                "Après le débarquement allié en Afrique du Nord, l'armée allemande envahit la zone sud le 11 novembre 1942 ; le 27 novembre, la flotte se saborde à Toulon. Vichy perd alors ses derniers atouts. À Paris, des collaborationnistes, comme Jacques Doriot (Parti populaire français) ou Marcel Déat, réclament un régime fasciste et une alliance totale avec l'Allemagne ; certains combattent sur le front de l'Est dans la Légion des volontaires français (LVF).",
              ],
              box: { label: "Définition", text: "Collaboration d'État : politique de coopération avec l'occupant menée par le gouvernement de Vichy, par calcul politique. Collaborationnisme : engagement idéologique de ceux qui partagent les idées nazies ou fascistes et souhaitent la victoire du Reich." },
            },
            {
              heading: "Vichy et la persécution des Juifs",
              paragraphs: [
                "Sans que l'occupant l'exige, Vichy adopte le 3 octobre 1940 un premier statut des Juifs qui les exclut de la fonction publique, de l'armée, de l'enseignement et de la presse ; dès le lendemain, une loi permet d'interner les Juifs étrangers dans des camps (Gurs, Rivesaltes). Un second statut, en juin 1941, durcit les exclusions, et les biens juifs sont « aryanisés », c'est-à-dire confisqués. En zone occupée, une ordonnance allemande impose à partir de juin 1942 le port de l'étoile jaune.",
                "En 1942, Vichy accepte que la police française arrête les Juifs pour l'occupant. Les 16 et 17 juillet 1942, lors de la rafle du Vél d'Hiv, 13 152 Juifs, dont plus de 4 000 enfants, sont arrêtés à Paris par des policiers et des gendarmes français, puis déportés vers Auschwitz. En août, Vichy livre les Juifs étrangers de la zone sud. Au total, environ 76 000 Juifs sont déportés de France ; à peine 3 % reviennent. Les trois quarts des Juifs de France survivent pourtant, grâce notamment à l'aide d'une partie de la population : plus de 4 000 Français ont été reconnus « Justes parmi les nations ».",
                "Longtemps, la mémoire nationale a minimisé le rôle de Vichy. Les travaux de l'historien américain Robert Paxton (La France de Vichy, 1973) ont montré l'initiative propre du régime. Le 16 juillet 1995, le président Jacques Chirac reconnaît officiellement la responsabilité de l'État français dans la déportation des Juifs.",
              ],
            },
            {
              heading: "La France libre et la Résistance intérieure",
              paragraphs: [
                "À Londres, de Gaulle est reconnu par Churchill comme chef des Français libres dès le 28 juin 1940. Les Forces françaises libres restent peu nombreuses au départ, mais une partie de l'empire se rallie, à commencer par le Tchad du gouverneur Félix Éboué (août 1940). Leclerc s'empare de l'oasis de Koufra (mars 1941) et jure de ne déposer les armes qu'après avoir libéré Strasbourg ; à Bir Hakeim (mai-juin 1942), les troupes de Koenig retardent l'offensive de Rommel. En 1943, de Gaulle installe à Alger le Comité français de libération nationale (CFLN), qui devient le Gouvernement provisoire de la République française (GPRF) en juin 1944.",
                "En France, la Résistance intérieure naît d'actes isolés, puis s'organise en mouvements, qui diffusent une presse clandestine et recrutent (Combat, Libération-Sud, Franc-Tireur en zone sud ; Libération-Nord, Organisation civile et militaire en zone nord), et en réseaux de renseignement ou d'évasion liés à Londres. Le Parti communiste s'engage pleinement après l'attaque allemande contre l'URSS (juin 1941) et forme les Francs-tireurs et partisans. À partir de 1943, de nombreux jeunes réfractaires au STO rejoignent les maquis. Les femmes y tiennent une place essentielle, comme Lucie Aubrac, Berty Albrecht ou Germaine Tillion.",
                "Envoyé par de Gaulle, l'ancien préfet Jean Moulin est parachuté en France en janvier 1942. Il unifie les mouvements de la zone sud, puis crée le Conseil national de la Résistance (CNR), qui se réunit pour la première fois le 27 mai 1943 à Paris et rassemble mouvements, partis et syndicats. Arrêté à Caluire le 21 juin 1943, il meurt sous la torture. Le programme du CNR (15 mars 1944) prévoit la Sécurité sociale et des nationalisations. La répression est féroce : exécutions d'otages, déportations, massacres de Tulle (9 juin 1944) et d'Oradour-sur-Glane (10 juin 1944, plus de 640 victimes).",
              ],
              box: { label: "À retenir", text: "La Résistance est plurielle : France libre à l'extérieur, mouvements, réseaux et maquis à l'intérieur, sensibilités politiques variées. Jean Moulin et le CNR la rassemblent derrière de Gaulle et lui donnent un programme pour la France libérée." },
            },
            {
              heading: "La Libération et le rétablissement de la République",
              paragraphs: [
                "Après le débarquement de Normandie (6 juin 1944), les Forces françaises de l'intérieur (FFI) multiplient sabotages et combats ; le maquis du Vercors est écrasé en juillet. Le débarquement de Provence (15 août 1944) engage l'armée B du général de Lattre, recrutée en grande partie dans l'empire. Paris se soulève le 19 août et la 2e division blindée de Leclerc y entre le 24 ; la garnison allemande capitule le 25 août.",
                "Le GPRF impose son autorité et évite une administration militaire alliée. L'ordonnance du 9 août 1944 déclare nuls les actes de Vichy et rétablit la légalité républicaine ; celle du 21 avril 1944 accorde le droit de vote aux femmes. L'épuration frappe les collaborateurs : exécutions sommaires (environ 9 000), femmes tondues, puis procès. Pétain est condamné à mort en 1945, peine commuée en détention à vie ; Laval est exécuté.",
              ],
            },
          ],
          keyPoints: [
            "Défaite éclair de mai-juin 1940, exode, armistice du 22 juin : France coupée en zones, Alsace-Moselle annexée de fait.",
            "10 juillet 1940 : pleins pouvoirs à Pétain, fin de la IIIe République, Révolution nationale (« Travail, Famille, Patrie »).",
            "Collaboration d'État (Montoire, octobre 1940 ; Laval ; STO ; Milice) et collaborationnisme (Doriot, Déat, LVF).",
            "Vichy persécute les Juifs de sa propre initiative (statut du 3 octobre 1940) et participe aux rafles (Vél d'Hiv, 16-17 juillet 1942).",
            "Résistance : France libre (appel du 18 juin), mouvements, réseaux, maquis, unifiés par Jean Moulin et le CNR (27 mai 1943).",
            "Libération (1944) : GPRF, rétablissement de la République, droit de vote des femmes, épuration.",
          ],
          example: {
            statement: "Montrez que le régime de Vichy rompt avec les principes de la République.",
            solution: [
              "Rappeler l'origine : le 10 juillet 1940, le Parlement vote les pleins pouvoirs à Pétain, qui se proclame le lendemain chef de l'État français.",
              "Montrer la rupture institutionnelle : plus d'élections ni de Parlement en activité, concentration de tous les pouvoirs dans les mains du chef de l'État, culte de la personnalité du Maréchal.",
              "Montrer la rupture avec les valeurs : la devise « Travail, Famille, Patrie » remplace « Liberté, Égalité, Fraternité » ; les libertés publiques sont supprimées.",
              "Montrer la rupture avec l'égalité des citoyens : le statut des Juifs (3 octobre 1940) les exclut de nombreuses professions, et l'État participe à leur arrestation (Vél d'Hiv, juillet 1942).",
              "Montrer la logique de la collaboration : l'État français coopère avec l'occupant (Montoire, STO, Milice).",
              "Conclure : Vichy est un régime autoritaire et antirépublicain, d'où la décision du GPRF, en août 1944, de déclarer ses actes nuls.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les faits suivants en quatre catégories (collaboration d'État, collaborationnisme, France libre, Résistance intérieure) : (a) entrevue de Montoire ; (b) Légion des volontaires français contre le bolchevisme ; (c) bataille de Bir Hakeim ; (d) création du mouvement Combat ; (e) Parti populaire français de Doriot ; (f) participation de la police française à la rafle du Vél d'Hiv ; (g) serment de Koufra ; (h) maquis formés par des réfractaires au STO.",
              hint: "Demandez-vous qui agit (le gouvernement de Vichy, des militants pronazis, les forces de De Gaulle, des résistants en France) et dans quel but.",
              solution: [
                "Collaboration d'État : (a) l'entrevue de Montoire entre Pétain et Hitler ; (f) la participation de la police française à la rafle du Vél d'Hiv, décidée par le gouvernement de Vichy.",
                "Collaborationnisme : (b) la LVF, qui combat aux côtés des Allemands sur le front de l'Est ; (e) le PPF de Doriot, parti fasciste favorable à la victoire du Reich.",
                "France libre : (c) Bir Hakeim, combat des Forces françaises libres de Koenig ; (g) le serment de Koufra prêté par Leclerc.",
                "Résistance intérieure : (d) le mouvement Combat ; (h) les maquis de réfractaires au STO.",
              ],
            },
            {
              level: 2,
              statement: "Comparez l'allocution de Pétain du 17 juin 1940 et l'appel de De Gaulle du 18 juin 1940 : pour chacun, présentez l'auteur, sa situation, sa lecture de la défaite et la décision qu'il propose. Concluez sur ce que ces deux textes révèlent des choix offerts aux Français.",
              hint: "Pétain raisonne à l'échelle d'une bataille perdue en France ; De Gaulle à l'échelle d'une guerre mondiale.",
              solution: [
                "Pétain : maréchal, héros de Verdun, il vient de devenir président du Conseil ; il considère la défaite comme définitive et annonce qu'il faut cesser le combat, ce qui conduit à l'armistice du 22 juin.",
                "De Gaulle : général de brigade à titre temporaire, ancien sous-secrétaire d'État à la Guerre, presque inconnu, réfugié à Londres ; il affirme que rien n'est perdu, car la guerre est mondiale : la France garde un vaste empire, elle peut faire bloc avec l'Empire britannique qui tient la mer et utiliser l'industrie des États-Unis.",
                "Les deux décisions s'opposent : accepter la défaite et rester en France, ou refuser l'armistice et poursuivre la guerre aux côtés du Royaume-Uni.",
                "Conclusion : dès juin 1940, deux légitimités s'affrontent ; la grande majorité des Français, sous le choc, fait d'abord confiance à Pétain, tandis que l'appel du 18 juin, peu entendu sur le moment, devient le texte fondateur de la France libre.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document (résumé rédigé pour l'exercice) : dans un discours radiodiffusé du 30 octobre 1940, le maréchal Pétain annonce aux Français qu'il a rencontré Hitler à Montoire le 24 octobre, à l'invitation de celui-ci, et qu'il a accepté librement cette rencontre. Il déclare entrer « dans la voie de la collaboration » afin de maintenir l'unité française dans le cadre d'un ordre européen nouveau. Il espère en retour un allègement du sort des prisonniers, une diminution des frais d'occupation et un assouplissement de la ligne de démarcation. Il demande aux Français de le suivre et affirme que lui seul sera jugé par l'histoire. Consigne : présentez le document, expliquez les objectifs de la collaboration selon Pétain, puis montrez, à l'aide de vos connaissances, ce que la collaboration devient réellement jusqu'en 1944.",
              hint: "Après la présentation, confrontez les espoirs annoncés en 1940 aux faits : STO, rafles, Milice, invasion de la zone sud.",
              solution: [
                "Présentation : discours radiodiffusé du chef de l'État français, le 30 octobre 1940, quatre mois après l'armistice ; il s'adresse à l'ensemble des Français pour justifier l'entrevue de Montoire.",
                "Objectifs annoncés : Pétain présente la collaboration comme un choix libre et réaliste, qui doit préserver l'unité du pays et lui obtenir des avantages concrets (prisonniers, frais d'occupation, ligne de démarcation) et une place dans l'Europe dominée par l'Allemagne.",
                "Ce qui est passé sous silence : la collaboration est aussi un choix idéologique cohérent avec la Révolution nationale (anticommunisme, antisémitisme) ; le statut des Juifs a été adopté le 3 octobre 1940, avant même Montoire.",
                "Réalité de la collaboration : les contreparties n'arrivent pas ; la France est exploitée (frais d'occupation, réquisitions), Laval accentue la collaboration en 1942, la police française participe à la rafle du Vél d'Hiv (juillet 1942), le STO (février 1943) envoie des centaines de milliers de jeunes en Allemagne et la Milice traque les résistants.",
                "Limite : l'occupation de la zone sud (11 novembre 1942) montre que Vichy n'a obtenu aucune souveraineté réelle ; il devient un régime de plus en plus soumis à l'occupant.",
                "Conclusion : présentée comme un moyen de protéger les Français, la collaboration d'État a fait de Vichy le complice de l'occupant, ce qui explique sa condamnation à la Libération.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la France dans la guerre dans l'ordre chronologique.",
            items: [
              "Appel du général de Gaulle sur la BBC",
              "Signature de l'armistice à Rethondes",
              "Vote des pleins pouvoirs au maréchal Pétain",
              "Premier statut des Juifs",
              "Rafle du Vél d'Hiv",
              "Première réunion du Conseil national de la Résistance",
              "Libération de Paris",
            ],
          },
          quiz: [
            {
              q: "Que se passe-t-il le 10 juillet 1940 ?",
              options: ["L'armistice est signé à Rethondes", "La zone sud est envahie par les troupes allemandes et italiennes", "Le Parlement vote les pleins pouvoirs à Pétain", "De Gaulle lance son appel"],
              answer: 2,
              why: "Par 569 voix contre 80, le Parlement réuni à Vichy donne les pleins pouvoirs à Pétain, ce qui met fin à la IIIe République.",
            },
            {
              q: "Quelle est la devise de l'État français ?",
              options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Ordre, Autorité, Nation", "Honneur et Patrie"],
              answer: 0,
              why: "La Révolution nationale remplace la devise républicaine par « Travail, Famille, Patrie ».",
            },
            {
              q: "Qui arrête les Juifs lors de la rafle du Vél d'Hiv ?",
              options: ["La Gestapo seule, sans aucune aide française", "Des soldats de la Wehrmacht venus d'Allemagne", "Des miliciens de Darnand", "Des policiers et gendarmes français"],
              answer: 3,
              why: "La rafle des 16 et 17 juillet 1942 est exécutée par la police et la gendarmerie françaises, en application d'un accord entre Vichy et l'occupant.",
            },
            {
              q: "Quel est le rôle de Jean Moulin dans la Résistance ?",
              options: ["Il fonde la LVF", "Il unifie les mouvements et crée le CNR", "Il dirige la 2e DB", "Il négocie l'armistice avec l'occupant allemand"],
              answer: 1,
              why: "Envoyé par de Gaulle, Jean Moulin unifie les mouvements de la zone sud puis crée le CNR, réuni le 27 mai 1943.",
            },
            {
              q: "Quel texte rétablit la légalité républicaine à la Libération ?",
              options: ["L'ordonnance du 9 août 1944", "La loi du 10 juillet 1940", "Le programme du CNR de mars 1944", "La Constitution de 1958"],
              answer: 0,
              why: "L'ordonnance du 9 août 1944 déclare nuls les actes de Vichy ; le programme du CNR est un projet politique, pas un texte juridique.",
            },
          ],
          trap: "Croire que Vichy n'a fait qu'obéir à l'occupant : le premier statut des Juifs (3 octobre 1940) est une initiative française, et la collaboration d'État est un choix politique du régime.",
          method: "Pour ne pas confondre les acteurs, classez chaque nom propre dans l'un de quatre ensembles (Vichy, collaborationnistes, France libre, Résistance intérieure) et associez-lui une date : ce classement évite la plupart des contresens.",
        },
        /* fin du chapitre democraties-totalitarismes */
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 1 · MERS ET OCÉANS : AU CŒUR DE LA MONDIALISATION    */
    /* ==================================================================== */
    {
      id: 'mers-et-oceans',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vecteurs-mondialisation',
          title: 'Mers et océans : vecteurs essentiels de la mondialisation',
          minutes: 30,
          objectives: [
            "Expliquer le rôle des mers et des océans dans la mondialisation : maritimisation des échanges, conteneurisation, littoralisation.",
            "Localiser les grandes routes maritimes, les points de passage stratégiques et les principales façades maritimes.",
            "Identifier les ressources des mers et des océans et les flux immatériels qu'ils portent.",
            "Réaliser la légende organisée d'un croquis sur les espaces maritimes dans la mondialisation.",
          ],
          course: [
            {
              heading: "La maritimisation de l'économie mondiale",
              paragraphs: [
                "La mondialisation est d'abord maritime : environ 80 % du commerce mondial de marchandises, en volume, se fait par la mer, soit de l'ordre de 12 milliards de tonnes par an au début des années 2020. On parle de maritimisation pour désigner cette place croissante des mers dans l'économie mondiale. Le transport maritime est le moins coûteux à la tonne transportée : il permet de produire là où les coûts sont faibles et de vendre partout, ce qui favorise la division internationale du travail.",
                "Cette révolution repose sur le conteneur, une boîte métallique standardisée inventée par l'Américain Malcom McLean, dont le premier navire porte-conteneurs part en 1956. Le conteneur passe facilement du navire au train, à la barge ou au camion : c'est le transport intermodal. On mesure les capacités en EVP (équivalent vingt pieds, la longueur d'un conteneur standard d'environ 6 mètres). Les plus grands porte-conteneurs dépassent 24 000 EVP et 400 mètres de long : c'est le gigantisme naval. D'autres navires spécialisés transportent les vracs (minerais, céréales, charbon), le pétrole et le gaz naturel liquéfié.",
                "Les acteurs du transport maritime sont très concentrés. Trois armateurs dominent le transport de conteneurs : l'italo-suisse MSC, le danois Maersk et le français CMA CGM, dont le siège est à Marseille. Beaucoup de navires sont immatriculés sous des pavillons de complaisance (Panama, Liberia, îles Marshall), qui offrent une fiscalité et un droit du travail avantageux pour les armateurs.",
              ],
              box: { label: "Définition", text: "Maritimisation : concentration croissante des échanges et des activités économiques sur les mers et les littoraux. Conteneurisation : généralisation du transport par conteneurs standardisés. EVP : unité de mesure correspondant à un conteneur de vingt pieds." },
            },
            {
              heading: "Routes maritimes, passages stratégiques et façades",
              paragraphs: [
                "Les flux se concentrent sur quelques grandes routes. La principale relie, d'est en ouest, l'Asie orientale, l'Europe et l'Amérique du Nord, en passant par le détroit de Malacca, le canal de Suez et le détroit de Gibraltar, ou par le canal de Panama. Ces points de passage obligés (détroits et canaux) sont des goulets d'étranglement : environ un cinquième du pétrole consommé dans le monde passe par le détroit d'Ormuz, et le canal de Suez (ouvert en 1869) voit passer une part importante du commerce entre l'Asie et l'Europe.",
                "Leur fermeture perturbe toute l'économie mondiale. En mars 2021, le porte-conteneurs Ever Given bloque le canal de Suez pendant six jours. En 2023-2024, une sécheresse oblige à limiter le nombre de navires dans le canal de Panama (ouvert en 1914, élargi en 2016). Depuis la fin de 2023, les attaques des rebelles houthis du Yémen contre les navires en mer Rouge poussent de nombreux armateurs à contourner l'Afrique par le cap de Bonne-Espérance, ce qui allonge le trajet de plusieurs milliers de kilomètres.",
                "Les ports sont les interfaces entre la terre et la mer : ils relient un arrière-pays (hinterland), qu'ils desservent par des voies de communication terrestres, à un avant-pays (foreland), l'ensemble des ports avec lesquels ils échangent. Les plus grands sont des hubs, où les marchandises sont redistribuées. Shanghai est le premier port à conteneurs du monde, devant Singapour, et les ports d'Asie orientale, surtout chinois, dominent le classement. Rotterdam est le premier port d'Europe. Les ports alignés le long d'un même littoral forment des façades maritimes : façade d'Asie orientale, Northern Range (du Havre à Hambourg), façades atlantique et pacifique de l'Amérique du Nord.",
              ],
              box: { label: "À retenir", text: "Une route principale est-ouest (Asie orientale, Europe, Amérique du Nord), des passages stratégiques vulnérables (Malacca, Ormuz, Bab el-Mandeb, Suez, Panama, Gibraltar) et trois grandes façades : Asie orientale, Northern Range, Amérique du Nord." },
            },
            {
              heading: "Littoralisation et ressources des océans",
              paragraphs: [
                "Les hommes et les activités se concentrent sur les littoraux : c'est la littoralisation. Environ 40 % de la population mondiale vit à moins de 100 kilomètres des côtes, et beaucoup de métropoles mondiales sont des villes portuaires (Shanghai, New York, Singapour). Les zones industrialo-portuaires (ZIP) associent ports, raffineries, sidérurgie et pétrochimie, comme à Rotterdam ou à Fos-sur-Mer. Le tourisme balnéaire et les croisières renforcent cette attraction.",
                "Les océans fournissent aussi des ressources : les ressources halieutiques, issues de la pêche et de l'aquaculture (la Chine est le premier producteur mondial) ; les hydrocarbures exploités en mer (mer du Nord, golfe du Mexique, golfe de Guinée, large du Brésil) ; les énergies marines renouvelables, comme l'éolien en mer ; et des ressources minérales des grands fonds (nodules polymétalliques, sulfures), encore peu exploitées.",
              ],
            },
            {
              heading: "Des océans de données",
              paragraphs: [
                "Les océans portent aussi des flux immatériels. Plusieurs centaines de câbles sous-marins de fibre optique acheminent plus de 99 % du trafic intercontinental de données (internet, transactions financières, communications). Les grandes entreprises du numérique (Google, Meta, Microsoft, Amazon) financent désormais une part croissante des nouveaux câbles. Certains ports sont devenus des carrefours numériques : Marseille accueille de nombreux points d'atterrissement de câbles reliant l'Europe à l'Afrique, au Moyen-Orient et à l'Asie.",
                "Ces câbles sont vulnérables : ancres de navires, séismes sous-marins, mais aussi sabotages possibles. Plusieurs câbles ont été endommagés en mer Baltique et en mer Rouge depuis 2023. Leur protection devient un enjeu stratégique pour les États, au même titre que la sécurité des routes maritimes.",
              ],
              box: { label: "Définition", text: "Littoralisation : concentration des populations et des activités sur les littoraux. Interface : zone de contact entre deux espaces différents (la terre et la mer) qui permet des échanges et en tire des activités." },
            },
          ],
          keyPoints: [
            "Environ 80 % du commerce mondial en volume passe par la mer : c'est la maritimisation.",
            "Le conteneur (1956) et l'intermodalité ont fait baisser les coûts ; gigantisme des navires (plus de 24 000 EVP).",
            "Trois armateurs dominent : MSC, Maersk, CMA CGM ; beaucoup de navires battent pavillon de complaisance.",
            "Route principale est-ouest et passages stratégiques vulnérables : Malacca, Ormuz, Bab el-Mandeb, Suez, Panama, Gibraltar.",
            "Façades maritimes : Asie orientale (Shanghai, Singapour), Northern Range (Rotterdam), Amérique du Nord ; littoralisation.",
            "Les câbles sous-marins portent plus de 99 % du trafic intercontinental de données.",
          ],
          example: {
            statement: "Expliquez pourquoi les détroits et les canaux sont à la fois indispensables et vulnérables dans la mondialisation.",
            solution: [
              "Définir : un détroit est un bras de mer resserré entre deux terres ; un canal est une voie d'eau artificielle ; tous deux sont des points de passage obligés pour les navires.",
              "Montrer qu'ils sont indispensables : ils raccourcissent les trajets entre les grandes façades (Suez évite le contour de l'Afrique entre l'Asie et l'Europe, Panama celui de l'Amérique du Sud) ; environ un cinquième du pétrole consommé dans le monde passe par Ormuz.",
              "Montrer leur vulnérabilité technique et climatique : le blocage du canal de Suez par l'Ever Given (mars 2021, six jours) et la sécheresse qui limite les passages à Panama (2023-2024).",
              "Montrer leur vulnérabilité géopolitique : les attaques des Houthis en mer Rouge depuis la fin de 2023 détournent le trafic de Bab el-Mandeb et de Suez vers le cap de Bonne-Espérance.",
              "Conclure : la concentration des flux sur quelques passages rend la mondialisation efficace mais fragile ; d'où la présence des marines de guerre et les projets de routes alternatives.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un porte-conteneurs a une capacité de 24 000 EVP. Il est chargé uniquement de conteneurs de 40 pieds (données fictives pour le chargement). (1) Combien de conteneurs de 40 pieds peut-il transporter ? (2) Si chaque camion transporte un conteneur de 40 pieds, combien de camions faudrait-il pour vider entièrement le navire ? (3) Qu'en déduisez-vous sur l'organisation nécessaire d'un grand port ?",
              hint: "Un conteneur de 40 pieds compte pour 2 EVP.",
              solution: [
                "(1) Un conteneur de 40 pieds vaut 2 EVP : 24 000 ÷ 2 = 12 000 conteneurs de 40 pieds.",
                "(2) Il faudrait donc 12 000 camions, un par conteneur.",
                "(3) Un grand port doit disposer de quais profonds, de portiques de manutention, de vastes zones de stockage et surtout de liaisons ferroviaires et fluviales pour évacuer les conteneurs sans saturer les routes : c'est l'intérêt de l'intermodalité.",
                "Résultat : 12 000 conteneurs de 40 pieds, soit 12 000 camions ; un hub n'est efficace que s'il est bien relié à son arrière-pays.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, proches des ordres de grandeur réels : entre Shanghai et Rotterdam, la route par le canal de Suez mesure environ 19 500 km, celle par le cap de Bonne-Espérance environ 26 000 km. Un porte-conteneurs navigue à 30 km/h en moyenne et consomme 100 tonnes de carburant par jour. (1) Calculez la durée de chaque trajet en jours (arrondie à l'unité). (2) Calculez le surplus de carburant consommé par le détour. (3) Expliquez pourquoi des armateurs ont choisi ce détour depuis la fin de 2023 et quelles en sont les conséquences.",
              hint: "Durée = distance ÷ vitesse ; divisez ensuite le nombre d'heures par 24.",
              solution: [
                "(1) Par Suez : 19 500 ÷ 30 = 650 heures, soit 650 ÷ 24 ≈ 27 jours. Par le Cap : 26 000 ÷ 30 ≈ 867 heures, soit 867 ÷ 24 ≈ 36 jours.",
                "(2) Le détour dure environ 36 - 27 = 9 jours de plus ; il consomme environ 9 × 100 = 900 tonnes de carburant supplémentaires.",
                "(3) Depuis la fin de 2023, les attaques des Houthis contre les navires en mer Rouge rendent le passage par Bab el-Mandeb et Suez dangereux ; les armateurs préfèrent un trajet plus long mais plus sûr.",
                "Conséquences : hausse des coûts de transport, des primes d'assurance et des émissions de gaz à effet de serre, délais de livraison allongés, pertes de recettes pour l'Égypte, qui perçoit les droits de passage du canal.",
                "Résultat : environ 27 jours contre 36, soit 9 jours et 900 tonnes de carburant de plus ; un passage stratégique bloqué renchérit toute la chaîne logistique mondiale.",
              ],
            },
            {
              level: 3,
              statement: "Production graphique (type bac, contrôle continu) : vous devez réaliser un croquis intitulé « Les mers et les océans, vecteurs essentiels de la mondialisation ». Proposez une légende organisée en trois parties, avec pour chaque élément le figuré choisi (surface, point, ligne ou flèche) et les lieux à représenter.",
              hint: "Une légende organisée répond au titre par des parties qui forment un raisonnement : les pôles, les flux, les points sensibles.",
              solution: [
                "Partie I, des façades et des ports qui organisent les échanges : grandes façades maritimes en aplats de couleur le long des littoraux (Asie orientale, Northern Range, façades nord-américaines) ; grands ports mondiaux en points proportionnels (Shanghai, Singapour, Rotterdam, Los Angeles).",
                "Partie II, des flux maritimes hiérarchisés : route principale est-ouest en flèche épaisse (Asie orientale, Europe, Amérique du Nord) ; routes secondaires nord-sud en flèches fines (vers l'Amérique du Sud, l'Afrique, l'Océanie) ; principaux câbles sous-marins en lignes fines.",
                "Partie III, des passages stratégiques et des espaces sous tension : détroits et canaux par un symbole ponctuel (Malacca, Ormuz, Bab el-Mandeb, Suez, Gibraltar, Panama) ; zones de piraterie ou d'insécurité en hachures (mer Rouge et golfe d'Aden, golfe de Guinée) ; routes arctiques potentielles en flèches pointillées.",
                "Conseils de réalisation : nommer les océans en lettres capitales bleues, les ports en noir, garder une hiérarchie visuelle (la route principale doit se voir en premier) et vérifier que chaque figuré de la carte figure dans la légende.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque passage stratégique aux espaces qu'il relie.",
            pairs: [
              { left: "Détroit de Malacca", right: "Océan Indien et mer de Chine méridionale" },
              { left: "Détroit d'Ormuz", right: "Golfe Persique et golfe d'Oman" },
              { left: "Bab el-Mandeb", right: "Mer Rouge et golfe d'Aden" },
              { left: "Canal de Suez", right: "Méditerranée et mer Rouge" },
              { left: "Canal de Panama", right: "Océan Atlantique (mer des Caraïbes) et océan Pacifique" },
              { left: "Détroit de Gibraltar", right: "Méditerranée et océan Atlantique" },
            ],
          },
          quiz: [
            {
              q: "Quelle part du commerce mondial de marchandises, en volume, passe par la mer ?",
              options: ["Environ un quart", "Environ la moitié", "Environ 80 %", "La quasi-totalité, soit 99 %"],
              answer: 2,
              why: "Environ 80 % du commerce mondial en volume est maritime ; le chiffre de 99 % concerne le trafic intercontinental de données par câbles.",
            },
            {
              q: "Que signifie l'unité EVP ?",
              options: ["Équivalent vingt pieds", "Échange en volume portuaire", "Entrepôt de vrac portuaire", "Escale de voyage programmée"],
              answer: 0,
              why: "L'EVP correspond à un conteneur de vingt pieds ; un conteneur de quarante pieds compte pour deux EVP.",
            },
            {
              q: "Quel est le premier port à conteneurs du monde ?",
              options: ["Rotterdam, aux Pays-Bas", "Singapour", "Los Angeles, en Californie", "Shanghai"],
              answer: 3,
              why: "Shanghai devance Singapour ; Rotterdam est le premier port d'Europe, loin derrière les grands ports d'Asie orientale.",
            },
            {
              q: "Comment appelle-t-on l'espace terrestre desservi par un port ?",
              options: ["Le foreland, c'est-à-dire l'avant-pays", "L'hinterland", "La façade maritime", "La zone économique exclusive"],
              answer: 1,
              why: "L'hinterland est l'arrière-pays d'un port ; l'avant-pays (foreland) est l'ensemble des ports avec lesquels il échange.",
            },
            {
              q: "Pourquoi de nombreux navires contournent-ils l'Afrique depuis la fin de 2023 ?",
              options: ["Le canal de Suez a été fermé par l'Égypte", "La route du Cap est devenue plus courte", "Les attaques houthies rendent la mer Rouge dangereuse", "Les porte-conteneurs actuels sont devenus trop larges pour Suez"],
              answer: 2,
              why: "Les attaques des Houthis contre les navires près du détroit de Bab el-Mandeb poussent les armateurs à éviter la mer Rouge et Suez.",
            },
          ],
          trap: "Confondre le volume et la valeur : la mer transporte environ 80 % du commerce mondial en volume, mais une part plus faible en valeur, car l'avion transporte des marchandises légères et chères.",
          method: "Apprenez une carte mentale à trois niveaux (façades, routes, passages) en la redessinant de mémoire sur un planisphère vierge : si vous savez placer six passages, trois façades et cinq ports, vous avez la base de tout croquis sur ce thème.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'appropriation-protection',
          title: 'Entre appropriation, protection et liberté de circulation',
          minutes: 30,
          objectives: [
            "Expliquer le découpage juridique des espaces maritimes défini par la convention de Montego Bay.",
            "Analyser les tensions liées à l'appropriation des espaces maritimes (mer de Chine méridionale, Arctique).",
            "Montrer comment les États et les organisations internationales assurent la sécurité et la liberté de circulation.",
            "Identifier les enjeux de la protection des océans et les acteurs de leur gouvernance.",
          ],
          course: [
            {
              heading: "Le droit de la mer : la convention de Montego Bay",
              paragraphs: [
                "La convention des Nations unies sur le droit de la mer, dite convention de Montego Bay (Jamaïque), est signée en 1982 et entre en vigueur en 1994. Elle découpe les mers en zones mesurées à partir des lignes de base (le littoral ou des lignes droites tracées entre des points de la côte). Plus on s'éloigne des côtes, plus les droits de l'État côtier diminuent. Les distances sont exprimées en milles marins (1 mille = 1 852 mètres). Les États-Unis appliquent ces règles mais n'ont pas ratifié la convention.",
                "Dans la mer territoriale (jusqu'à 12 milles), l'État côtier est souverain, mais les navires étrangers bénéficient d'un droit de passage inoffensif. Dans la zone contiguë (jusqu'à 24 milles), il peut effectuer des contrôles douaniers, sanitaires et d'immigration. Dans la zone économique exclusive, ou ZEE (jusqu'à 200 milles, environ 370 km), il dispose de droits souverains sur l'exploration et l'exploitation des ressources, tandis que les autres États gardent la liberté de navigation et de survol. Le plateau continental, c'est-à-dire le sol et le sous-sol, peut être étendu jusqu'à 350 milles si l'État prouve le prolongement géologique de son territoire devant une commission de l'ONU.",
                "Au-delà commence la haute mer, qui représente près des deux tiers de la surface des océans : la liberté y est la règle (navigation, pêche, recherche, pose de câbles). Les fonds marins situés hors des juridictions nationales, appelés « la Zone », sont déclarés patrimoine commun de l'humanité ; leur exploitation minérale relève de l'Autorité internationale des fonds marins, installée à Kingston (Jamaïque). Les différends peuvent être portés devant le Tribunal international du droit de la mer, à Hambourg.",
              ],
              box: { label: "Règle", text: "Montego Bay (1982) : mer territoriale jusqu'à 12 milles (souveraineté), zone contiguë jusqu'à 24 milles (contrôles), ZEE jusqu'à 200 milles (droits sur les ressources), plateau continental extensible jusqu'à 350 milles (sol et sous-sol), puis haute mer (liberté) et la Zone (patrimoine commun de l'humanité)." },
            },
            {
              heading: "Appropriation et tensions",
              paragraphs: [
                "En créant les ZEE, la convention a provoqué une territorialisation des mers : les États cherchent à étendre leurs espaces maritimes, ce qui suscite des conflits. En mer de Chine méridionale, la Chine revendique la plus grande partie de la mer à l'intérieur d'une « ligne en neuf traits », au nom de droits historiques, face au Vietnam, aux Philippines, à la Malaisie, à Brunei et à Taïwan. Elle a transformé des récifs des îles Spratleys en îles artificielles dotées de pistes d'aviation et de ports. En 2016, une sentence arbitrale rendue à la demande des Philippines a jugé ces droits historiques sans fondement en droit ; la Chine la rejette.",
                "L'enjeu est à la fois économique (pêche, hydrocarbures), commercial (une route majeure vers le détroit de Malacca) et militaire (contrôle d'un espace proche des côtes chinoises). Les États-Unis y mènent des opérations de liberté de navigation pour contester ces revendications. En mer de Chine orientale, la Chine et le Japon se disputent les îles Senkaku (Diaoyu pour la Chine).",
                "Dans l'Arctique, le réchauffement climatique fait reculer la banquise et rend plus accessibles des routes maritimes (la route maritime du Nord le long des côtes russes, le passage du Nord-Ouest dans l'archipel canadien) et des ressources (hydrocarbures, minerais, pêche). Les États riverains (Russie, Canada, Danemark par le Groenland, Norvège, États-Unis) déposent des demandes d'extension de leur plateau continental qui se chevauchent, notamment sur la dorsale de Lomonossov. En 2007, une expédition russe a planté symboliquement un drapeau au fond de l'océan, sous le pôle Nord.",
              ],
            },
            {
              heading: "Assurer la sécurité et la liberté de circulation",
              paragraphs: [
                "La liberté de navigation est vitale pour le commerce mondial, mais elle est menacée. La piraterie a connu un pic au large de la Somalie et dans le golfe d'Aden vers 2009-2011 ; l'Union européenne a lancé en décembre 2008 l'opération navale Atalante, et des coalitions internationales patrouillent dans la zone. Les attaques ont fortement reculé, mais l'insécurité persiste dans le golfe de Guinée et a resurgi en mer Rouge avec les tirs houthis depuis la fin de 2023, auxquels répondent des opérations comme Aspides (Union européenne, 2024).",
                "Les marines de guerre sont des outils de puissance : elles protègent les routes et les approvisionnements, surveillent les ZEE et projettent la force. Les États-Unis disposent d'une flotte sans équivalent, organisée en flottes couvrant tous les océans. La Chine possède désormais la marine la plus nombreuse en nombre de navires et a ouvert sa première base militaire à l'étranger à Djibouti, en 2017, près du détroit de Bab el-Mandeb.",
              ],
              box: { label: "À retenir", text: "Trois logiques s'opposent sur les mers : l'appropriation par les États (ZEE, extension du plateau continental, îles artificielles), la liberté de circulation (haute mer, détroits, passage inoffensif) et la protection d'un bien commun menacé." },
            },
            {
              heading: "Protéger les océans, un bien commun",
              paragraphs: [
                "Les océans subissent de fortes pressions : plus d'un tiers des stocks de poissons sont surexploités selon la FAO ; la pêche illégale reste importante ; les plastiques se concentrent dans de grands tourbillons océaniques (gyres), surtout sous forme de microplastiques ; les marées noires (Erika au large de la Bretagne en 1999, Deepwater Horizon dans le golfe du Mexique en 2010) ravagent les littoraux ; le réchauffement et l'acidification de l'eau provoquent le blanchissement des coraux.",
                "La gouvernance des océans associe de nombreux acteurs : l'Organisation maritime internationale (OMI), qui fixe les règles de sécurité et de lutte contre la pollution des navires (convention MARPOL), les organisations régionales de gestion des pêches, qui fixent des quotas, les États et les ONG (Greenpeace, Bloom, Sea Shepherd). Les aires marines protégées couvrent environ 8 % des océans, dont une petite partie seulement en protection forte ; en 2022, les États se sont fixé l'objectif de protéger 30 % des terres et des mers d'ici à 2030.",
                "L'accord sur la biodiversité marine en haute mer, adopté à l'ONU en 2023 et entré en vigueur en janvier 2026, permet de créer des aires protégées hors des juridictions nationales. En juin 2025, la France et le Costa Rica ont organisé à Nice la troisième conférence des Nations unies sur l'océan. Le débat sur l'exploitation minière des grands fonds oppose les États favorables à un moratoire, comme la France, à ceux qui veulent exploiter rapidement les nodules polymétalliques.",
              ],
            },
          ],
          keyPoints: [
            "Montego Bay (1982, en vigueur en 1994) : mer territoriale (12 milles), zone contiguë (24), ZEE (200), plateau continental (jusqu'à 350), haute mer.",
            "La haute mer couvre près des deux tiers des océans ; la Zone est patrimoine commun de l'humanité (Autorité internationale des fonds marins).",
            "Territorialisation des mers et conflits : mer de Chine méridionale (ligne en neuf traits, sentence de 2016), Senkaku, Arctique.",
            "Liberté de circulation menacée : piraterie (Somalie, golfe de Guinée), mer Rouge ; opérations Atalante (2008) et Aspides (2024).",
            "Protection : surpêche, plastiques, marées noires, réchauffement ; aires marines protégées (environ 8 %), objectif de 30 % en 2030.",
            "Accord sur la haute mer (adopté en 2023, en vigueur en 2026) ; débat sur l'exploitation des grands fonds.",
          ],
          example: {
            statement: "Un chalutier brésilien pêche à 150 milles des côtes de la Guyane française, puis un navire de guerre russe passe à 8 milles de ces côtes. Indiquez, pour chaque situation, dans quelle zone se trouve le navire et ce que dit le droit de la mer.",
            solution: [
              "Convertir si besoin : 150 milles ≈ 278 km et 8 milles ≈ 15 km (1 mille = 1 852 m).",
              "Le chalutier, à 150 milles, se trouve dans la ZEE française (entre 24 et 200 milles).",
              "Dans la ZEE, la France dispose de droits souverains sur les ressources : le chalutier ne peut pêcher qu'avec une autorisation française ; s'il n'en a pas, il pêche illégalement et peut être arraisonné.",
              "Le navire de guerre, à 8 milles, se trouve dans la mer territoriale (moins de 12 milles), où la France est souveraine.",
              "Il bénéficie cependant du droit de passage inoffensif s'il traverse rapidement sans menacer la sécurité de l'État côtier (pas de manœuvres militaires ni de collecte de renseignements).",
              "Réponse : le chalutier est dans la ZEE et a besoin d'une autorisation pour pêcher ; le navire de guerre est dans la mer territoriale et peut seulement y passer de manière inoffensive.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sachant que 1 mille marin = 1 852 mètres, convertissez en kilomètres (au dixième) les limites suivantes : 12 milles, 24 milles, 200 milles et 350 milles. Associez à chaque limite le nom de la zone correspondante.",
              hint: "Multipliez le nombre de milles par 1,852 pour obtenir des kilomètres.",
              solution: [
                "12 milles × 1,852 = 22,224 km, soit environ 22,2 km : limite de la mer territoriale.",
                "24 milles × 1,852 = 44,448 km, soit environ 44,4 km : limite de la zone contiguë.",
                "200 milles × 1,852 = 370,4 km : limite de la zone économique exclusive.",
                "350 milles × 1,852 = 648,2 km : limite maximale d'extension du plateau continental.",
                "Résultat : 22,2 km ; 44,4 km ; 370,4 km ; 648,2 km.",
              ],
            },
            {
              level: 2,
              statement: "Texte rédigé pour l'exercice : « En mer de Chine méridionale, Pékin revendique la plus grande partie des eaux situées à l'intérieur de la ligne en neuf traits. Depuis le milieu des années 2010, la Chine a transformé plusieurs récifs des Spratleys en îles artificielles équipées de pistes d'aviation. Les Philippines, qui avaient saisi un tribunal arbitral, ont obtenu en 2016 une sentence qui écarte les droits historiques invoqués par la Chine. Pékin refuse de l'appliquer. Les États-Unis envoient régulièrement des navires de guerre à proximité des îles artificielles. » Questions : (1) Quels acteurs s'opposent ? (2) Quels sont les enjeux de cette mer ? (3) Pourquoi les îles artificielles posent-elles un problème au regard du droit de la mer ? (4) Que révèle l'attitude de la Chine face à la sentence de 2016 ?",
              hint: "Pour la question 3, rappelez qu'une île naturelle peut générer une mer territoriale et une ZEE, mais pas une construction artificielle.",
              solution: [
                "(1) La Chine s'oppose aux autres États riverains (Philippines, mais aussi Vietnam, Malaisie, Brunei, Taïwan) ; les États-Unis interviennent pour défendre la liberté de navigation.",
                "(2) Enjeux : ressources halieutiques et hydrocarbures ; passage d'une route commerciale majeure vers Malacca ; contrôle militaire d'un espace proche des côtes chinoises.",
                "(3) Selon Montego Bay, les îles artificielles ne génèrent ni mer territoriale ni ZEE ; en construisant sur des récifs, la Chine cherche à créer un fait accompli et à militariser la zone pour appuyer ses revendications.",
                "(4) Le refus de la sentence montre les limites du droit international : faute de force contraignante, il dépend de la volonté des puissances de le respecter.",
                "Bilan : la mer de Chine méridionale illustre la tension entre appropriation par un État puissant et liberté de circulation défendue par d'autres.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Les mers et les océans : des espaces entre appropriation, protection et liberté de circulation ? ». Rédigez l'introduction et présentez un plan détaillé en trois parties, avec au moins deux exemples localisés par partie.",
              hint: "Faites de chaque terme du sujet une partie, puis montrez dans la conclusion que ces trois logiques entrent en tension.",
              solution: [
                "Introduction : les mers couvrent environ 71 % de la surface du globe et portent environ 80 % du commerce mondial en volume. Depuis la convention de Montego Bay (1982), elles sont découpées en zones. Problématique : comment concilier la volonté des États de s'approprier les espaces maritimes, la nécessité de protéger les océans et la liberté de circulation indispensable à la mondialisation ?",
                "I. Des espaces de plus en plus appropriés : découpage de Montego Bay (mer territoriale, ZEE, plateau continental) ; demandes d'extension en Arctique (dorsale de Lomonossov) ; îles artificielles chinoises dans les Spratleys et ligne en neuf traits.",
                "II. Une liberté de circulation à garantir : haute mer et passage inoffensif ; piraterie au large de la Somalie et opération Atalante (2008) ; attaques houthies en mer Rouge et opération Aspides (2024) ; opérations américaines de liberté de navigation.",
                "III. Des océans à protéger : surpêche (plus d'un tiers des stocks surexploités), plastiques, marées noires ; aires marines protégées, objectif de 30 % en 2030, accord sur la haute mer (en vigueur en 2026), débat sur l'exploitation des grands fonds.",
                "Conclusion : ces trois logiques entrent souvent en conflit (l'exploitation des nodules contre la protection, la souveraineté contre la circulation) ; la gouvernance des océans reste fragile car elle dépend de la bonne volonté des États.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le droit et les tensions en mer.",
            statements: [
              { text: "Dans sa ZEE, un État peut interdire le passage des navires étrangers.", true: false, why: "La ZEE donne des droits sur les ressources, pas sur la navigation : les autres États y gardent la liberté de navigation et de survol." },
              { text: "La mer territoriale s'étend jusqu'à 12 milles marins des lignes de base.", true: true, why: "C'est la zone de souveraineté de l'État côtier, où s'applique le droit de passage inoffensif." },
              { text: "Une île artificielle génère une zone économique exclusive.", true: false, why: "Selon Montego Bay, les îles artificielles n'ont ni mer territoriale ni ZEE." },
              { text: "Les États-Unis ont ratifié la convention de Montego Bay.", true: false, why: "Ils ne l'ont pas ratifiée, même s'ils en appliquent la plupart des règles, considérées comme coutumières." },
              { text: "La haute mer couvre près des deux tiers de la surface des océans.", true: true, why: "C'est l'espace situé au-delà des ZEE, où la liberté est la règle." },
              { text: "Le « continent de plastique » est une île solide sur laquelle on peut marcher.", true: false, why: "Il s'agit surtout de microplastiques dispersés dans l'eau, concentrés par les courants dans les gyres." },
              { text: "L'opération Atalante de l'Union européenne lutte contre la piraterie au large de la Somalie.", true: true, why: "Lancée en décembre 2008, elle protège les navires dans le golfe d'Aden et l'océan Indien occidental." },
            ],
          },
          quiz: [
            {
              q: "Jusqu'où s'étend la zone économique exclusive ?",
              options: ["12 milles marins", "24 milles marins", "350 milles marins", "200 milles marins"],
              answer: 3,
              why: "La ZEE s'étend jusqu'à 200 milles (environ 370 km) ; 350 milles est la limite maximale d'extension du plateau continental.",
            },
            {
              q: "Quel droit un navire étranger conserve-t-il dans la mer territoriale ?",
              options: ["Le droit de pêcher librement", "Le droit de passage inoffensif", "Le droit d'exploiter le sous-sol marin", "Le droit d'y mener des exercices militaires"],
              answer: 1,
              why: "L'État côtier est souverain dans sa mer territoriale, mais il doit laisser passer les navires étrangers qui ne menacent pas sa sécurité.",
            },
            {
              q: "Quel organisme gère l'exploitation minérale de la Zone ?",
              options: ["L'Autorité internationale des fonds marins", "L'Organisation mondiale du commerce, à Genève", "Le Conseil de l'Arctique", "L'Organisation des Nations unies pour l'alimentation"],
              answer: 0,
              why: "Installée à Kingston (Jamaïque), l'Autorité internationale des fonds marins organise l'exploration et l'éventuelle exploitation des grands fonds hors juridiction.",
            },
            {
              q: "Que conclut la sentence arbitrale de 2016 sur la mer de Chine méridionale ?",
              options: ["Elle attribue les Spratleys au Vietnam", "Elle reconnaît la ligne en neuf traits", "Elle écarte les droits historiques chinois", "Elle partage cette mer entre la Chine et le Japon"],
              answer: 2,
              why: "Saisi par les Philippines, le tribunal juge les droits historiques invoqués par la Chine sans fondement en droit ; la Chine rejette la sentence.",
            },
            {
              q: "Quel objectif de protection les États se sont-ils fixé en 2022 ?",
              options: ["Protéger 30 % des terres et des mers d'ici à 2030", "Interdire toute pêche en haute mer dès 2025", "Fermer l'Arctique à toute navigation commerciale", "Protéger la totalité des récifs coralliens d'ici à 2050"],
              answer: 0,
              why: "L'objectif dit « 30 x 30 », adopté lors de la conférence sur la biodiversité de 2022, vise 30 % d'espaces protégés en 2030.",
            },
          ],
          trap: "Croire que la ZEE est un territoire où l'État est souverain comme sur terre : il n'y dispose que de droits sur les ressources, et les autres États y circulent librement.",
          method: "Dessinez de mémoire un schéma en coupe du littoral vers le large, avec les distances (12, 24, 200, 350 milles) et un verbe par zone (régner, contrôler, exploiter, circuler) : ce schéma suffit à résoudre la plupart des cas pratiques.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-puissance-maritime',
          title: 'La France : une puissance maritime ?',
          minutes: 30,
          objectives: [
            "Décrire l'étendue et la répartition du domaine maritime français, grâce aux outre-mer.",
            "Évaluer les atouts maritimes de la France : moyens militaires, acteurs économiques, rôle diplomatique.",
            "Identifier les limites et les fragilités de la puissance maritime française.",
            "Argumenter une réponse nuancée à la question « La France est-elle une puissance maritime ? ».",
          ],
          course: [
            {
              heading: "Un immense domaine maritime grâce aux outre-mer",
              paragraphs: [
                "Avec environ 10 millions de km² de zones économiques exclusives, la France dispose du deuxième espace maritime du monde, juste derrière celui des États-Unis. C'est près de vingt fois la superficie de la France métropolitaine. Environ 97 % de cet espace se trouve outre-mer : la Polynésie française représente à elle seule près de la moitié du total, devant les Terres australes et antarctiques françaises (Kerguelen, Crozet, Saint-Paul et Amsterdam, îles Éparses) et la Nouvelle-Calédonie. Le minuscule atoll inhabité de Clipperton, dans le Pacifique, offre une ZEE de plus de 400 000 km².",
                "La France est ainsi présente dans tous les océans, sauf l'Arctique : Atlantique (Antilles, Guyane, Saint-Pierre-et-Miquelon), océan Indien (La Réunion, Mayotte, îles Éparses), Pacifique (Polynésie, Nouvelle-Calédonie, Wallis-et-Futuna) et océan Austral. Grâce au programme Extraplac, elle a obtenu depuis 2015 l'extension de son plateau continental au large de plusieurs territoires, ce qui lui donne des droits sur les fonds marins de plusieurs centaines de milliers de km² supplémentaires.",
                "Cet espace abrite une biodiversité exceptionnelle (la France compte environ 10 % des récifs coralliens du monde) et des ressources potentielles (pêche, hydrocarbures au large de la Guyane, minerais des grands fonds). Certaines souverainetés sont toutefois contestées : Maurice revendique Tromelin, Madagascar les îles Éparses, le Vanuatu les îlots Matthew et Hunter.",
              ],
              box: { label: "Repère", text: "ZEE française : environ 10 millions de km², deuxième du monde après les États-Unis ; environ 97 % outre-mer ; Polynésie française : près de la moitié ; présence dans les océans Atlantique, Indien, Pacifique et Austral." },
            },
            {
              heading: "Une puissance militaire et diplomatique en mer",
              paragraphs: [
                "La Marine nationale est l'une des rares marines capables d'agir sur tous les océans. Elle dispose d'un porte-avions à propulsion nucléaire, le Charles-de-Gaulle (en service depuis 2001), de sous-marins nucléaires lanceurs d'engins (SNLE) basés à l'île Longue, près de Brest, qui assurent en permanence la dissuasion nucléaire, de sous-marins nucléaires d'attaque et de frégates. Ses grandes bases sont Brest et Toulon, complétées par des bases outre-mer (Fort-de-France, La Réunion, Nouméa, Papeete) et à l'étranger (Djibouti, Abou Dhabi).",
                "Ses missions sont nombreuses : dissuasion, protection des routes maritimes (participation à l'opération Atalante, escortes en mer Rouge), lutte contre la pêche illégale dans les ZEE, contre le narcotrafic et pour le sauvetage en mer. Les préfets maritimes (à Cherbourg, Brest et Toulon) coordonnent l'action de l'État en mer.",
                "La France joue aussi un rôle diplomatique : elle défend la protection des océans, soutient un moratoire sur l'exploitation minière des grands fonds et a coorganisé avec le Costa Rica la conférence des Nations unies sur l'océan à Nice, en juin 2025.",
              ],
            },
            {
              heading: "Des atouts économiques réels mais inégaux",
              paragraphs: [
                "Plusieurs entreprises françaises comptent parmi les leaders mondiaux : CMA CGM, à Marseille, est le troisième armateur de porte-conteneurs du monde ; les Chantiers de l'Atlantique, à Saint-Nazaire, construisent certains des plus grands paquebots ; Naval Group construit sous-marins et frégates. La recherche est reconnue (Ifremer pour l'océanographie, Service hydrographique et océanographique de la Marine pour la cartographie).",
                "Les ports français sont pourtant modestes à l'échelle européenne. Marseille-Fos est souvent présenté comme le premier port français par le tonnage, et Haropa, qui réunit depuis 2021 les ports du Havre, de Rouen et de Paris le long de l'axe Seine, est le premier pour les conteneurs ; mais ils restent loin derrière Rotterdam, Anvers-Bruges ou Hambourg, et une partie des conteneurs destinés à la France transite par ces ports étrangers, mieux reliés à leur arrière-pays.",
                "Les autres activités maritimes sont importantes mais inégales : pêche (Boulogne-sur-Mer est le premier port de pêche et de transformation des produits de la mer), conchyliculture (huîtres, moules), tourisme littoral et croisières. Les énergies marines se développent tardivement : le premier parc éolien en mer, au large de Saint-Nazaire, n'est entré en service qu'en 2022, bien après ceux du Royaume-Uni ou de l'Allemagne.",
              ],
            },
            {
              heading: "Les limites d'une puissance maritime",
              paragraphs: [
                "Le domaine maritime est immense mais difficile à surveiller : quelques navires doivent contrôler des millions de km², ce qui laisse prospérer la pêche illégale, par exemple au large de la Guyane. Les territoires ultramarins sont éloignés de la métropole, souvent peu peuplés, et leurs ressources marines restent largement inexploitées. Les moyens de la Marine, réduits depuis la fin de la guerre froide, sont sollicités sur de nombreux théâtres.",
                "Les littoraux français sont aussi menacés par l'érosion côtière et l'élévation du niveau de la mer, en métropole comme outre-mer. Pour coordonner sa politique, l'État s'est doté d'un Secrétariat général de la mer et d'une stratégie nationale pour la mer et le littoral. La France est donc une grande puissance maritime par l'étendue de son domaine, sa marine et ses entreprises, mais une puissance incomplète, dont les moyens ne sont pas à la hauteur de son espace.",
              ],
              box: { label: "À retenir", text: "Atouts : deuxième ZEE du monde, présence dans tous les océans sauf l'Arctique, marine à capacité mondiale, grands groupes (CMA CGM), diplomatie de l'océan. Limites : surveillance difficile, ports en retard, ressources peu exploitées, littoraux vulnérables." },
            },
          ],
          keyPoints: [
            "La France possède le deuxième espace maritime du monde (environ 10 millions de km² de ZEE), à 97 % outre-mer.",
            "Présence dans les océans Atlantique, Indien, Pacifique et Austral ; extension du plateau continental (programme Extraplac).",
            "Marine à capacité mondiale : porte-avions Charles-de-Gaulle, SNLE de l'île Longue, bases outre-mer et à l'étranger.",
            "Atouts économiques : CMA CGM (troisième armateur mondial), chantiers navals, recherche ; ports (Marseille-Fos, Haropa) en retard sur Rotterdam et Anvers.",
            "Limites : immensité difficile à surveiller, pêche illégale, ressources peu exploitées, souverainetés contestées, littoraux menacés.",
          ],
          example: {
            statement: "Expliquez pourquoi les outre-mer sont essentiels à la puissance maritime française.",
            solution: [
              "Rappeler le chiffre clé : environ 97 % des quelque 10 millions de km² de ZEE françaises se trouvent outre-mer.",
              "Montrer la dimension spatiale : grâce aux outre-mer, la France est présente dans les océans Atlantique, Indien, Pacifique et Austral, ce qui en fait une puissance maritime à l'échelle mondiale.",
              "Montrer la dimension économique et environnementale : ressources halieutiques, hydrocarbures potentiels au large de la Guyane, minerais des grands fonds, récifs coralliens (environ 10 % des récifs mondiaux).",
              "Montrer la dimension stratégique : bases navales (Fort-de-France, La Réunion, Nouméa, Papeete) qui permettent de surveiller les ZEE et d'agir loin de la métropole.",
              "Nuancer : ces espaces sont difficiles à surveiller, certaines souverainetés sont contestées (Tromelin, îles Éparses) et les populations ultramarines restent souvent à l'écart des retombées.",
              "Conclure : sans ses outre-mer, la France ne serait qu'une puissance maritime régionale ; ils fondent son statut mondial, mais exigent des moyens importants.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données arrondies : la ZEE française couvre environ 10,2 millions de km², dont environ 0,35 million de km² au large de la métropole et environ 4,8 millions de km² autour de la Polynésie française. La France métropolitaine a une superficie terrestre d'environ 0,55 million de km². (1) Calculez la part de la ZEE située outre-mer (en %). (2) Calculez la part de la Polynésie française. (3) Combien de fois la ZEE totale est-elle plus étendue que le territoire terrestre métropolitain ?",
              hint: "Part = (valeur de la partie ÷ total) × 100 ; arrondissez à l'unité.",
              solution: [
                "(1) ZEE outre-mer : 10,2 - 0,35 = 9,85 millions de km² ; 9,85 ÷ 10,2 × 100 ≈ 96,6 %, soit environ 97 %.",
                "(2) Polynésie française : 4,8 ÷ 10,2 × 100 ≈ 47 %, soit près de la moitié.",
                "(3) 10,2 ÷ 0,55 ≈ 18,5 : la ZEE est environ dix-huit à dix-neuf fois plus étendue que la métropole terrestre.",
                "Résultat : environ 97 % outre-mer, 47 % pour la seule Polynésie, une ZEE près de vingt fois plus vaste que la métropole.",
              ],
            },
            {
              level: 2,
              statement: "Rédigez un paragraphe argumenté d'une dizaine de lignes montrant que l'immense ZEE française est à la fois un atout et une contrainte. Appuyez-vous sur au moins quatre exemples précis.",
              hint: "Un paragraphe argumenté s'ouvre par une idée directrice, présente des exemples expliqués, puis se termine par une phrase de bilan.",
              solution: [
                "Idée directrice : la ZEE française, deuxième du monde, donne à la France un potentiel considérable, mais elle exige des moyens que le pays a du mal à mobiliser.",
                "Atouts : droits exclusifs sur les ressources (pêche, hydrocarbures au large de la Guyane, minerais des grands fonds), biodiversité exceptionnelle (environ 10 % des récifs coralliens mondiaux), présence dans tous les océans sauf l'Arctique, qui fonde un rôle mondial.",
                "Contraintes : surveillance difficile de millions de km² avec peu de navires, pêche illégale au large de la Guyane, éloignement des territoires, souverainetés contestées (Tromelin par Maurice, îles Éparses par Madagascar).",
                "Bilan rédigé possible : ainsi, la ZEE est un atout de puissance potentiel, mais elle ne devient une puissance réelle que si l'État investit dans la surveillance, la connaissance et la mise en valeur durable de ces espaces.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « La France est-elle une puissance maritime ? ». Rédigez l'introduction, un plan détaillé en deux ou trois parties et la conclusion.",
              hint: "Le point d'interrogation invite à nuancer : montrez les atouts, puis les limites, avant de qualifier précisément cette puissance.",
              solution: [
                "Introduction : une puissance maritime est un État capable d'utiliser, de contrôler et de mettre en valeur des espaces maritimes à différentes échelles. La France possède le deuxième espace maritime du monde. Problématique : dans quelle mesure ses moyens lui permettent-ils de transformer ce domaine en puissance réelle ?",
                "I. Un domaine et des moyens de puissance mondiale : ZEE d'environ 10 millions de km², à 97 % outre-mer, présente dans tous les océans sauf l'Arctique ; marine à capacité mondiale (Charles-de-Gaulle, SNLE, bases outre-mer et à Djibouti) ; diplomatie de l'océan (conférence de Nice, juin 2025).",
                "II. Des atouts économiques réels : CMA CGM, troisième armateur mondial ; chantiers navals de Saint-Nazaire ; Marseille-Fos et Haropa ; pêche à Boulogne-sur-Mer ; éolien en mer depuis 2022.",
                "III. Une puissance incomplète : ports en retard sur Rotterdam et Anvers, surveillance difficile et pêche illégale en Guyane, ressources peu exploitées, souverainetés contestées (Tromelin, îles Éparses), littoraux menacés par l'érosion.",
                "Conclusion : la France est une puissance maritime mondiale par son espace et sa marine, mais une puissance incomplète sur le plan économique et logistique ; son avenir maritime dépend de sa capacité à investir dans ses outre-mer et à concilier exploitation et protection.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire maritime récente de la France dans l'ordre chronologique.",
            items: [
              "Signature de la convention de Montego Bay",
              "Entrée en vigueur de la convention de Montego Bay",
              "Mise en service du porte-avions Charles-de-Gaulle",
              "Premiers décrets d'extension du plateau continental (Extraplac)",
              "Création de Haropa, qui réunit Le Havre, Rouen et Paris",
              "Mise en service du parc éolien en mer de Saint-Nazaire",
              "Conférence des Nations unies sur l'océan à Nice",
            ],
          },
          quiz: [
            {
              q: "Quel rang la ZEE française occupe-t-elle dans le monde ?",
              options: ["Le premier", "Le deuxième", "Le cinquième", "Le dixième"],
              answer: 1,
              why: "Avec environ 10 millions de km², la ZEE française est la deuxième du monde, derrière celle des États-Unis.",
            },
            {
              q: "Quelle part des ZEE françaises se trouve outre-mer ?",
              options: ["Environ 50 %", "Environ 75 %", "Environ 97 %", "Environ 30 %"],
              answer: 2,
              why: "Environ 97 % de l'espace maritime français se situe outre-mer, la Polynésie française représentant à elle seule près de la moitié.",
            },
            {
              q: "Où sont basés les sous-marins nucléaires lanceurs d'engins français ?",
              options: ["À Toulon, sur la Méditerranée", "À Cherbourg, dans la Manche", "À Djibouti, sur la mer Rouge", "À l'île Longue, près de Brest"],
              answer: 3,
              why: "Les SNLE, qui assurent la permanence de la dissuasion nucléaire, sont basés à l'île Longue, dans la rade de Brest.",
            },
            {
              q: "Quel est le rang mondial de l'armateur CMA CGM ?",
              options: ["Troisième", "Premier", "Dixième", "Vingtième"],
              answer: 0,
              why: "CMA CGM, dont le siège est à Marseille, est le troisième armateur de porte-conteneurs du monde, derrière MSC et Maersk.",
            },
            {
              q: "Quelle est une limite de la puissance maritime française ?",
              options: ["La France ne possède aucun territoire dans l'océan Pacifique", "Ses ports restent loin derrière Rotterdam et Anvers", "La France n'a pas de porte-avions", "La France n'a pas signé Montego Bay"],
              answer: 1,
              why: "Les ports français (Marseille-Fos, Haropa) sont modestes à l'échelle européenne, et une partie du trafic français transite par des ports étrangers.",
            },
          ],
          trap: "Répondre par un simple oui ou non : le sujet attend une réponse nuancée, qui distingue l'étendue du domaine (considérable) des moyens de le contrôler et de le mettre en valeur (insuffisants).",
          method: "Préparez une fiche « atouts / limites » avec, dans chaque colonne, un chiffre, un lieu et un acteur : un exemple localisé vaut mieux qu'une affirmation générale dans une réponse de géographie.",
        },
        /* fin du chapitre mers-et-oceans */
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 2 · LA MULTIPLICATION DES ACTEURS INTERNATIONAUX       */
    /* DANS UN MONDE BIPOLAIRE (1945 AU DÉBUT DES ANNÉES 1970)                */
    /* ==================================================================== */
    {
      id: 'monde-bipolaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'nouvel-ordre-mondial',
          title: 'La fin de la guerre et les débuts d\'un nouvel ordre mondial',
          minutes: 35,
          objectives: [
            "Dresser le bilan humain, matériel et moral de la Seconde Guerre mondiale.",
            "Expliquer les fondements du nouvel ordre mondial : ONU, Bretton Woods, justice internationale, droits de l'homme.",
            "Expliquer comment la rupture entre les vainqueurs conduit à la guerre froide (1946-1949).",
            "Identifier les premières décolonisations et la naissance de l'État d'Israël comme éléments d'une nouvelle donne.",
          ],
          course: [
            {
              heading: "Un monde à reconstruire",
              paragraphs: [
                "En 1945, le bilan est effroyable : 50 à 60 millions de morts, majoritairement civils, des villes rasées (Varsovie, Berlin, Hiroshima), des économies ruinées en Europe et en Asie. Des millions de personnes sont déplacées : survivants des camps, prisonniers, travailleurs forcés, et plus de dix millions d'Allemands chassés d'Europe centrale et orientale. La découverte des camps et du génocide, puis l'usage de la bombe atomique, provoquent un choc moral : il faut empêcher que de tels crimes se reproduisent.",
                "Les vainqueurs préparent l'après-guerre. À Yalta (février 1945), Roosevelt, Churchill et Staline décident de diviser l'Allemagne en zones d'occupation, promettent des élections libres dans l'Europe libérée et confirment la création d'une organisation internationale ; l'URSS s'engage à entrer en guerre contre le Japon. À Potsdam (juillet-août 1945), Truman, Staline et Churchill, remplacé en cours de conférence par Attlee, organisent l'occupation de l'Allemagne et de Berlin en quatre zones et secteurs (américain, britannique, soviétique et français) et décident sa dénazification et sa démilitarisation.",
              ],
            },
            {
              heading: "L'ONU, la justice internationale et les droits de l'homme",
              paragraphs: [
                "La charte des Nations unies est signée à San Francisco le 26 juin 1945 et entre en vigueur le 24 octobre 1945 ; l'ONU compte 51 membres fondateurs et s'installe à New York. Ses buts sont de maintenir la paix et la sécurité internationales, de développer des relations amicales fondées sur l'égalité des droits et le droit des peuples à disposer d'eux-mêmes, et de favoriser la coopération et le respect des droits de l'homme. Ses membres s'engagent à régler pacifiquement leurs différends et à renoncer à la menace ou à l'emploi de la force.",
                "L'Assemblée générale réunit tous les États (un État, une voix). Le Conseil de sécurité, chargé du maintien de la paix, comprend cinq membres permanents disposant d'un droit de veto (États-Unis, URSS, Royaume-Uni, France, Chine) et des membres non permanents élus. Autour de l'ONU naissent des institutions spécialisées : Unesco (1945), FAO (1945), Unicef (1946), Organisation mondiale de la santé (1948). La Cour internationale de justice siège à La Haye.",
                "Les procès de Nuremberg (1945-1946) et de Tokyo (1946-1948) affirment que les dirigeants peuvent être jugés pour crimes contre la paix, crimes de guerre et crimes contre l'humanité. Le 9 décembre 1948, l'ONU adopte la convention sur le génocide ; le lendemain, réunie à Paris au palais de Chaillot, l'Assemblée générale adopte la Déclaration universelle des droits de l'homme, préparée notamment par le juriste français René Cassin et par Eleanor Roosevelt, avec 48 voix pour, aucune contre et 8 abstentions, dont celles de l'URSS et de ses alliés.",
              ],
              box: { label: "Définition", text: "ONU : organisation internationale fondée en 1945 pour maintenir la paix et la sécurité, développer la coopération et promouvoir les droits de l'homme. Droit de veto : pouvoir de chacun des cinq membres permanents du Conseil de sécurité de bloquer une décision." },
            },
            {
              heading: "Un nouvel ordre économique : Bretton Woods",
              paragraphs: [
                "Tirant les leçons des années 1930 (protectionnisme, dévaluations en chaîne), 44 pays réunis à Bretton Woods, aux États-Unis, en juillet 1944, fondent un nouveau système monétaire international. Les monnaies ont des parités fixes par rapport au dollar, seule monnaie convertible en or, au prix de 35 dollars l'once. Deux institutions sont créées : le Fonds monétaire international (FMI), qui veille à la stabilité des changes et prête aux pays en difficulté, et la Banque internationale pour la reconstruction et le développement (BIRD, future Banque mondiale).",
                "En 1947, 23 pays signent à Genève l'Accord général sur les tarifs douaniers et le commerce (GATT), qui organise la baisse négociée des droits de douane. Ce nouvel ordre consacre la puissance des États-Unis, qui assurent en 1945 environ la moitié de la production industrielle mondiale et détiennent l'essentiel des réserves d'or. L'URSS participe à la conférence de Bretton Woods mais refuse de ratifier les accords.",
              ],
              box: { label: "À retenir", text: "Bretton Woods (1944) : parités fixes, dollar convertible en or (35 dollars l'once), FMI et BIRD. GATT (1947) : libéralisation progressive du commerce. Le dollar devient la monnaie de référence internationale." },
            },
            {
              heading: "De la Grande Alliance à la guerre froide",
              paragraphs: [
                "La Grande Alliance se défait rapidement. L'URSS impose des gouvernements communistes dans les pays d'Europe de l'Est libérés par l'Armée rouge (les « démocraties populaires »). Le 5 mars 1946, à Fulton, Churchill dénonce le « rideau de fer » qui coupe l'Europe en deux. Le 12 mars 1947, le président Truman annonce une politique d'endiguement (containment) du communisme et aide la Grèce et la Turquie. En juin 1947, le plan Marshall propose une aide économique à l'Europe (environ 13 milliards de dollars de 1948 à 1952) ; l'URSS la refuse et l'interdit à ses satellites.",
                "En septembre 1947, la doctrine Jdanov décrit un monde divisé en deux camps, « impérialiste » et « anti-impérialiste », et l'URSS crée le Kominform pour coordonner les partis communistes. Le coup de Prague (février 1948) fait basculer la Tchécoslovaquie dans le camp soviétique. De juin 1948 à mai 1949, l'URSS bloque les accès terrestres à Berlin-Ouest ; les Américains organisent un pont aérien et Staline renonce. L'Allemagne est coupée en deux États en 1949 : la RFA à l'ouest, la RDA à l'est. La même année naît l'Alliance atlantique (OTAN, 4 avril), l'URSS fait exploser sa première bombe atomique (août) et Mao Zedong proclame la République populaire de Chine (1er octobre).",
              ],
              box: { label: "Définition", text: "Guerre froide : affrontement idéologique, politique, économique et militaire entre les États-Unis et l'URSS et leurs alliés, de 1947 à 1991, sans conflit armé direct entre les deux Grands. Raymond Aron la résume en 1948 : « paix impossible, guerre improbable »." },
            },
            {
              heading: "Les premiers ébranlements des empires et la naissance d'Israël",
              paragraphs: [
                "La guerre a affaibli les puissances coloniales et renforcé les mouvements nationalistes. L'Indonésie proclame son indépendance le 17 août 1945, reconnue par les Pays-Bas en 1949 ; Hô Chi Minh proclame celle du Vietnam le 2 septembre 1945, ce qui conduit à la guerre d'Indochine. Le 15 août 1947, l'Inde britannique devient indépendante, partagée entre l'Inde et le Pakistan : la partition provoque des déplacements de millions de personnes et des violences qui font des centaines de milliers de morts.",
                "En Palestine, sous mandat britannique, les tensions entre Juifs et Arabes s'aggravent. Le 29 novembre 1947, l'Assemblée générale de l'ONU vote un plan de partage entre un État juif et un État arabe, Jérusalem devant passer sous contrôle international. Le 14 mai 1948, David Ben Gourion proclame l'État d'Israël ; les États arabes voisins l'attaquent aussitôt. À l'issue de la guerre de 1948-1949, Israël a agrandi son territoire et environ 700 000 Palestiniens sont devenus des réfugiés (la Nakba, « catastrophe » en arabe) : le conflit israélo-arabe commence.",
              ],
            },
          ],
          keyPoints: [
            "Bilan de 1945 : 50 à 60 millions de morts, ruines, millions de déplacés, choc moral (génocide, bombe atomique).",
            "Yalta (février 1945) et Potsdam (juillet-août 1945) : Allemagne et Berlin divisés en quatre zones d'occupation.",
            "ONU (charte du 26 juin 1945) : paix, coopération, droits de l'homme ; Conseil de sécurité avec cinq membres permanents dotés du veto.",
            "Bretton Woods (1944) : dollar convertible en or, FMI, BIRD ; GATT (1947).",
            "Justice et droits : Nuremberg et Tokyo, convention sur le génocide et Déclaration universelle des droits de l'homme (décembre 1948).",
            "Guerre froide : Fulton (1946), doctrine Truman et plan Marshall (1947), doctrine Jdanov, blocus de Berlin (1948-1949), OTAN (1949).",
            "Nouvelle donne : indépendances de l'Indonésie et de l'Inde, naissance d'Israël (14 mai 1948) et réfugiés palestiniens.",
          ],
          example: {
            statement: "Montrez que l'ordre mondial mis en place en 1944-1945 tire les leçons de l'entre-deux-guerres et de la Seconde Guerre mondiale.",
            solution: [
              "Rappeler le contexte : la crise des années 1930 et la guerre ont montré l'échec de la Société des Nations, les dangers du protectionnisme et l'ampleur possible des crimes de masse.",
              "Leçon politique : l'ONU (1945) dispose, contrairement à la SDN, d'un Conseil de sécurité capable de décider de sanctions et associe les grandes puissances, y compris les États-Unis et l'URSS, avec un droit de veto qui doit les retenir dans l'organisation.",
              "Leçon économique : Bretton Woods (1944) fixe des parités stables autour du dollar pour éviter les dévaluations en chaîne, et le GATT (1947) organise la baisse des droits de douane contre le repli protectionniste.",
              "Leçon morale et juridique : les procès de Nuremberg et de Tokyo, la convention sur le génocide et la Déclaration universelle des droits de l'homme (1948) affirment que les droits humains relèvent de la communauté internationale.",
              "Nuancer : cet ordre est vite paralysé par la guerre froide, le veto bloquant souvent le Conseil de sécurité.",
              "Conclure : le nouvel ordre est conçu contre les erreurs du passé, mais il repose sur l'entente des vainqueurs, qui se brise dès 1947.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des institutions suivantes, indiquez sa date de création, son siège et son rôle : (a) ONU ; (b) FMI ; (c) BIRD ; (d) GATT ; (e) Cour internationale de justice.",
              hint: "Trois institutions naissent à la fin de la guerre (1944-1945), une en 1947 ; deux sièges sont à Washington.",
              solution: [
                "(a) ONU : charte signée le 26 juin 1945 à San Francisco, entrée en vigueur le 24 octobre 1945 ; siège à New York ; maintenir la paix et la sécurité internationales, développer la coopération, promouvoir les droits de l'homme.",
                "(b) FMI : créé à Bretton Woods en 1944 ; siège à Washington ; veiller à la stabilité des monnaies et prêter aux pays en difficulté.",
                "(c) BIRD (future Banque mondiale) : créée à Bretton Woods en 1944 ; siège à Washington ; financer la reconstruction, puis le développement.",
                "(d) GATT : accord signé à Genève en 1947 ; organiser la baisse négociée des droits de douane.",
                "(e) Cour internationale de justice : créée par la charte de 1945 ; siège à La Haye ; régler les différends juridiques entre États.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez le fonctionnement du Conseil de sécurité et les effets du droit de veto pendant la guerre froide. Appuyez-vous sur l'exemple suivant : en juin 1950, le Conseil de sécurité décide d'intervenir en Corée pour repousser l'invasion du Sud par le Nord, parce que l'URSS boycottait alors ses séances pour protester contre la présence de la Chine nationaliste à la place de la Chine communiste.",
              hint: "Demandez-vous ce qui se serait passé si le délégué soviétique avait été présent.",
              solution: [
                "Fonctionnement : le Conseil de sécurité est l'organe chargé du maintien de la paix ; il peut décider de sanctions et d'interventions armées ; ses cinq membres permanents (États-Unis, URSS, Royaume-Uni, France, Chine) disposent chacun d'un droit de veto sur les décisions importantes.",
                "Effet du veto : pendant la guerre froide, chaque Grand bloque les décisions qui menacent son camp ; le Conseil est donc souvent paralysé, et l'ONU ne peut agir que lorsque les deux Grands sont d'accord ou que l'un d'eux s'abstient.",
                "Exemple de la Corée : en 1950, l'URSS boycotte le Conseil ; elle ne peut donc pas opposer son veto, et une force des Nations unies, dirigée par les États-Unis, intervient en Corée. Si le délégué soviétique avait été présent, il aurait bloqué la décision.",
                "Bilan : le veto garantit la présence des grandes puissances dans l'ONU, mais il limite la capacité de l'organisation à maintenir la paix lorsque leurs intérêts s'opposent.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document (résumé rédigé pour l'exercice d'après la charte des Nations unies, 26 juin 1945) : dans le préambule, les peuples des Nations unies se disent résolus à préserver les générations futures du fléau de la guerre, qui deux fois en une vie humaine a infligé à l'humanité d'indicibles souffrances, et proclament leur foi dans les droits fondamentaux de l'homme, la dignité de la personne et l'égalité des hommes et des femmes et des nations grandes et petites. L'article 1 fixe les buts : maintenir la paix et la sécurité internationales, développer des relations amicales fondées sur l'égalité des droits et le droit des peuples à disposer d'eux-mêmes, réaliser la coopération internationale et encourager le respect des droits de l'homme. L'article 2 engage les membres à régler pacifiquement leurs différends et à s'abstenir de recourir à la menace ou à l'emploi de la force. Consigne : présentez le document, expliquez ses objectifs à la lumière de la période 1939-1945, puis montrez les limites de ce projet entre 1945 et 1950.",
              hint: "Reliez chaque objectif à une expérience précise des années 1930-1945, puis confrontez ces principes à la guerre froide et aux décolonisations.",
              solution: [
                "Présentation : texte fondateur de l'ONU, signé à San Francisco le 26 juin 1945 par les représentants de 50 États, alors que la guerre n'est pas terminée dans le Pacifique ; il entre en vigueur le 24 octobre 1945.",
                "Objectifs éclairés par le passé : « deux fois en une vie humaine » renvoie aux deux guerres mondiales ; l'insistance sur la dignité et les droits fondamentaux répond aux crimes nazis et au génocide ; l'égalité des nations « grandes et petites » répond aux agressions contre la Tchécoslovaquie ou la Pologne ; le règlement pacifique des différends tire la leçon de l'échec de la SDN.",
                "Un principe aux conséquences importantes : le droit des peuples à disposer d'eux-mêmes servira d'appui aux mouvements de décolonisation.",
                "Limites : dès 1947, la guerre froide divise les membres permanents ; le droit de veto paralyse souvent le Conseil de sécurité ; le blocus de Berlin (1948-1949) se règle hors de l'ONU, et l'intervention en Corée (1950) n'est possible que grâce à l'absence soviétique.",
                "Autre limite : les puissances coloniales qui signent la charte (Royaume-Uni, France, Pays-Bas) mènent des guerres pour conserver leurs empires (Indonésie, Indochine), en contradiction avec le droit des peuples.",
                "Conclusion : la charte exprime un idéal de paix fondé sur le droit, mais sa mise en œuvre dépend de l'entente entre grandes puissances, rapidement rompue par la guerre froide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque événement de l'après-guerre à sa signification.",
            pairs: [
              { left: "Conférence de Bretton Woods (1944)", right: "Dollar convertible en or, création du FMI et de la BIRD" },
              { left: "Charte de San Francisco (1945)", right: "Naissance de l'Organisation des Nations unies" },
              { left: "Doctrine Truman (1947)", right: "Endiguement de l'expansion du communisme" },
              { left: "Doctrine Jdanov (1947)", right: "Monde divisé en deux camps, création du Kominform" },
              { left: "Blocus de Berlin (1948-1949)", right: "Pont aérien américain vers Berlin-Ouest" },
              { left: "Plan de partage de la Palestine (1947)", right: "Vote de l'ONU pour créer un État juif et un État arabe" },
            ],
          },
          quiz: [
            {
              q: "Combien de membres permanents compte le Conseil de sécurité de l'ONU ?",
              options: ["Trois", "Quatre", "Cinq", "Six"],
              answer: 2,
              why: "Les États-Unis, l'URSS (aujourd'hui la Russie), le Royaume-Uni, la France et la Chine sont membres permanents et disposent du droit de veto.",
            },
            {
              q: "Quelle monnaie est convertible en or dans le système de Bretton Woods ?",
              options: ["Le dollar", "La livre sterling", "Le franc", "Toutes les monnaies des pays signataires"],
              answer: 0,
              why: "Seul le dollar est convertible en or (35 dollars l'once) ; les autres monnaies sont définies par rapport au dollar.",
            },
            {
              q: "Qui dénonce le « rideau de fer » à Fulton en mars 1946 ?",
              options: ["Le président Harry Truman", "Andreï Jdanov", "George Marshall", "Winston Churchill"],
              answer: 3,
              why: "Winston Churchill, alors dans l'opposition, emploie cette image pour dénoncer la division de l'Europe imposée par l'URSS.",
            },
            {
              q: "Où et quand la Déclaration universelle des droits de l'homme est-elle adoptée ?",
              options: ["À San Francisco, en juin 1945", "À Paris, le 10 décembre 1948", "À Nuremberg, en octobre 1946", "À New York, en 1950"],
              answer: 1,
              why: "Elle est adoptée par l'Assemblée générale réunie au palais de Chaillot, à Paris, le 10 décembre 1948.",
            },
            {
              q: "Que se passe-t-il le 14 mai 1948 ?",
              options: ["Le vote du plan de partage de la Palestine", "La fin du blocus de Berlin", "La proclamation de l'État d'Israël", "L'indépendance de l'Inde et du Pakistan"],
              answer: 2,
              why: "David Ben Gourion proclame l'État d'Israël ; le plan de partage avait été voté le 29 novembre 1947.",
            },
          ],
          trap: "Croire que la guerre froide commence dès 1945 : en 1945, la Grande Alliance tient encore (Yalta, Potsdam, ONU) ; la rupture se fait progressivement en 1946-1947 (Fulton, doctrine Truman, doctrine Jdanov).",
          method: "Classez les événements de 1944 à 1949 en deux colonnes, « construire un ordre commun » et « se diviser en blocs » : vous visualisez ainsi le basculement de 1947, qui sert souvent de pivot à une réponse construite.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'bipolarisation-tiers-monde',
          title: 'Bipolarisation et émergence du tiers-monde',
          minutes: 35,
          objectives: [
            "Expliquer la logique de la bipolarisation : deux modèles, deux blocs, l'équilibre de la terreur.",
            "Analyser les grandes crises de la guerre froide et le passage à la coexistence pacifique puis à la détente.",
            "Expliquer la décolonisation et l'émergence du tiers-monde comme nouvel acteur des relations internationales.",
            "Identifier l'affirmation de la Chine populaire de Mao Zedong comme acteur international.",
          ],
          course: [
            {
              heading: "Deux modèles, deux blocs",
              paragraphs: [
                "Deux modèles s'opposent. Les États-Unis défendent la démocratie libérale (élections pluralistes, libertés) et l'économie de marché. L'URSS se réclame du communisme : parti unique, économie planifiée et propriété collective des moyens de production. Chaque camp construit un système d'alliances : l'OTAN (1949), puis d'autres pactes qui encerclent l'URSS et la Chine (ANZUS en 1951, OTASE en 1954, pacte de Bagdad en 1955) ; en face, le Conseil d'assistance économique mutuelle (CAEM, 1949) et le pacte de Varsovie (1955).",
                "La rivalité est aussi technologique et culturelle : course aux armements, propagande, compétition sportive et conquête spatiale (Spoutnik en 1957, Gagarine en 1961, Apollo 11 en 1969). Après la bombe soviétique de 1949, les deux Grands se dotent de bombes thermonucléaires (1952-1953) puis de missiles intercontinentaux. Le Royaume-Uni (1952), la France (1960) et la Chine (1964) deviennent à leur tour puissances nucléaires.",
                "La menace d'une destruction mutuelle crée un équilibre de la terreur : chaque Grand est dissuadé d'attaquer l'autre directement. La guerre froide se déroule donc par des crises et par des conflits périphériques, dans lesquels les deux Grands soutiennent des camps opposés sans s'affronter eux-mêmes.",
              ],
              box: { label: "Définition", text: "Bipolarisation : organisation du monde autour de deux pôles, les États-Unis et l'URSS, qui regroupent chacun des alliés dans un bloc. Équilibre de la terreur : situation où la possession par chacun d'armes nucléaires capables de détruire l'autre empêche une guerre directe." },
            },
            {
              heading: "Des crises et des guerres périphériques",
              paragraphs: [
                "Le 25 juin 1950, la Corée du Nord communiste envahit la Corée du Sud. Une force des Nations unies, dirigée par les États-Unis, intervient ; la Chine envoie des centaines de milliers de « volontaires » en octobre 1950. Après trois ans de guerre et des millions de victimes, l'armistice de Panmunjom (27 juillet 1953) rétablit une frontière proche du 38e parallèle : la péninsule reste divisée.",
                "Après la mort de Staline (1953), Khrouchtchev dénonce une partie de ses crimes (1956) et prône la coexistence pacifique, mais l'URSS écrase l'insurrection de Budapest en novembre 1956. En août 1961, la RDA construit le mur de Berlin pour arrêter la fuite de ses habitants vers l'Ouest. En octobre 1962, la crise des missiles de Cuba est la plus grave : les États-Unis découvrent des rampes de missiles soviétiques dans l'île de Fidel Castro et imposent un blocus naval ; après treize jours de tension, Khrouchtchev retire les missiles contre la promesse américaine de ne pas envahir Cuba.",
                "Au Vietnam, les États-Unis s'engagent massivement à partir de 1964-1965 pour soutenir le Sud contre le Nord communiste et la guérilla du Vietcong ; plus de 500 000 soldats américains y combattent à la fin des années 1960. L'offensive du Têt (1968) et le mouvement de protestation contre la guerre conduisent au retrait américain après les accords de Paris (1973) ; Saïgon tombe en 1975.",
              ],
              box: { label: "Repère", text: "1950-1953 : guerre de Corée. 1956 : Budapest. 13 août 1961 : mur de Berlin. Octobre 1962 : crise de Cuba. 1963 : téléphone rouge. 1965 : engagement massif au Vietnam. 1968 : TNP et printemps de Prague écrasé. 1972 : SALT I." },
            },
            {
              heading: "La détente et les fissures des blocs",
              paragraphs: [
                "Ayant frôlé la guerre nucléaire, les deux Grands organisent la détente : installation d'une ligne directe entre Washington et Moscou, le « téléphone rouge » (1963), traité d'interdiction partielle des essais nucléaires (1963), traité de non-prolifération (TNP, 1968), accords SALT I de limitation des armements stratégiques (1972). La détente ne supprime pas la rivalité : en août 1968, les troupes du pacte de Varsovie écrasent le printemps de Prague.",
                "Les blocs se fissurent. En 1966, la France quitte le commandement intégré de l'OTAN. La rupture sino-soviétique, consommée vers 1960, aboutit à des affrontements frontaliers en 1969. Les États-Unis en profitent : en 1971, la Chine populaire obtient le siège de la Chine à l'ONU, y compris au Conseil de sécurité, et en février 1972 le président Nixon se rend à Pékin.",
              ],
            },
            {
              heading: "Décolonisation et émergence du tiers-monde",
              paragraphs: [
                "Affaiblies par la guerre, les métropoles européennes font face à des mouvements nationalistes, soutenus par les deux Grands, hostiles au colonialisme, et par la charte de l'ONU, qui affirme le droit des peuples à disposer d'eux-mêmes. L'Asie se libère d'abord (Inde en 1947, Indonésie en 1949, Indochine en 1954), puis l'Afrique : Ghana en 1957 et 17 États africains en 1960, « l'année de l'Afrique ». Certaines indépendances sont négociées, d'autres arrachées par la guerre (Indochine, Algérie). En décembre 1960, l'Assemblée générale de l'ONU proclame la nécessité de mettre fin au colonialisme.",
                "Le démographe français Alfred Sauvy invente en 1952 l'expression « tiers-monde », par analogie avec le tiers état de 1789 : des pays pauvres, ignorés, qui veulent compter. En avril 1955, la conférence de Bandung (Indonésie) réunit 29 pays d'Asie et d'Afrique, autour de Nehru, Zhou Enlai, Nasser et Sukarno : ils condamnent le colonialisme et la discrimination raciale et prônent la coexistence pacifique. En 1961, la conférence de Belgrade, autour de Tito, Nehru et Nasser, fonde le mouvement des non-alignés, qui refuse de choisir entre les blocs.",
                "En 1956, Nasser nationalise le canal de Suez ; le Royaume-Uni, la France et Israël interviennent militairement, mais doivent se retirer sous la pression conjointe des États-Unis et de l'URSS. La crise révèle le déclin des puissances coloniales et le poids nouveau du tiers-monde. En 1964, les pays en développement forment le groupe des 77 et obtiennent la création de la CNUCED pour défendre leurs intérêts économiques. Mais le tiers-monde reste divisé : guerre sino-indienne (1962), conflits indo-pakistanais, alignements de fait sur l'un ou l'autre bloc (Cuba).",
              ],
              box: { label: "Définition", text: "Tiers-monde : ensemble des pays pauvres, souvent issus de la décolonisation, qui cherchent à s'affirmer face aux deux blocs. Non-alignement : refus de rejoindre l'un des deux blocs, affirmé à la conférence de Belgrade (1961)." },
            },
            {
              heading: "La Chine de Mao, un nouvel acteur",
              paragraphs: [
                "Le 1er octobre 1949, Mao Zedong proclame la République populaire de Chine ; les nationalistes de Tchang Kaï-chek se réfugient à Taïwan. La Chine s'allie d'abord à l'URSS (traité de 1950), intervient en Corée et participe à la conférence de Bandung, où Zhou Enlai la présente comme un modèle pour les peuples d'Asie et d'Afrique. Le Grand Bond en avant (1958-1960) provoque une famine qui fait, selon les estimations, de 15 à plus de 40 millions de morts.",
                "Rompant avec l'URSS, la Chine se dote de la bombe atomique (1964) et se veut le guide d'une voie révolutionnaire propre, tandis que la Révolution culturelle (à partir de 1966) plonge le pays dans la violence. Son entrée à l'ONU en 1971 et la visite de Nixon en 1972 en font un acteur majeur : le monde bipolaire devient plus complexe.",
              ],
            },
          ],
          keyPoints: [
            "Deux modèles (démocratie libérale et économie de marché contre communisme et planification), deux blocs (OTAN, pacte de Varsovie).",
            "Équilibre de la terreur : pas de guerre directe entre les Grands, mais des crises et des conflits périphériques.",
            "Crises : Corée (1950-1953), Budapest (1956), mur de Berlin (1961), Cuba (octobre 1962), Vietnam (1964-1975).",
            "Détente : téléphone rouge (1963), TNP (1968), SALT I (1972) ; fissures : France hors du commandement intégré de l'OTAN (1966), rupture sino-soviétique.",
            "Décolonisation : Asie puis Afrique (1960, année de l'Afrique) ; tiers-monde (Sauvy, 1952), Bandung (1955), non-alignés (Belgrade, 1961), Suez (1956).",
            "Chine populaire (1949) : nouvel acteur, bombe atomique (1964), siège à l'ONU (1971), visite de Nixon (1972).",
          ],
          example: {
            statement: "Expliquez pourquoi la crise de Cuba (octobre 1962) marque à la fois le sommet de la guerre froide et le début de la détente.",
            solution: [
              "Contexte : depuis la révolution de 1959, Cuba, dirigée par Fidel Castro, s'est rapprochée de l'URSS ; les États-Unis ont échoué à renverser Castro (débarquement de la baie des Cochons, avril 1961).",
              "Déclenchement : en octobre 1962, des avions espions américains photographient des rampes de missiles soviétiques à Cuba, capables de frapper le territoire américain.",
              "Sommet de la tension : Kennedy impose un blocus naval de l'île ; pendant treize jours, le monde craint une guerre nucléaire.",
              "Issue : Khrouchtchev accepte de retirer les missiles en échange de la promesse américaine de ne pas envahir Cuba (et, secrètement, du retrait de missiles américains de Turquie).",
              "Début de la détente : conscients du risque, les deux Grands installent le téléphone rouge et signent le traité d'interdiction partielle des essais nucléaires en 1963.",
              "Conclusion : Cuba est le moment où l'équilibre de la terreur manque de basculer dans la guerre, et c'est cette peur qui pousse les deux Grands à organiser la détente.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les événements suivants dans l'une des quatre catégories (crise ou guerre de la guerre froide, détente, affirmation du tiers-monde, fissure d'un bloc) : (a) conférence de Bandung ; (b) guerre de Corée ; (c) traité de non-prolifération ; (d) retrait français du commandement intégré de l'OTAN ; (e) construction du mur de Berlin ; (f) conférence de Belgrade ; (g) accords SALT I ; (h) rupture sino-soviétique.",
              hint: "Demandez-vous si l'événement oppose les blocs, les rapproche, les divise de l'intérieur ou fait entendre un troisième acteur.",
              solution: [
                "Crise ou guerre de la guerre froide : (b) guerre de Corée (1950-1953) ; (e) construction du mur de Berlin (1961).",
                "Détente : (c) traité de non-prolifération (1968) ; (g) accords SALT I (1972).",
                "Affirmation du tiers-monde : (a) conférence de Bandung (1955) ; (f) conférence de Belgrade, qui fonde le mouvement des non-alignés (1961).",
                "Fissure d'un bloc : (d) retrait français du commandement intégré de l'OTAN (1966) ; (h) rupture sino-soviétique (vers 1960).",
              ],
            },
            {
              level: 2,
              statement: "Étude d'un document (résumé rédigé pour l'exercice des principes adoptés à la conférence de Bandung, avril 1955) : les 29 pays participants affirment le respect des droits fondamentaux de l'homme et de la charte des Nations unies, le respect de la souveraineté et de l'intégrité territoriale de toutes les nations, l'égalité de toutes les races et de toutes les nations, grandes et petites, la non-intervention dans les affaires intérieures des autres pays, le refus d'utiliser des pactes de défense collective au service des intérêts particuliers des grandes puissances, et le règlement pacifique des différends. Ils condamnent le colonialisme sous toutes ses formes. Questions : (1) Qui sont les participants ? (2) Quelles revendications expriment-ils ? (3) En quoi ce texte s'adresse-t-il aussi aux deux Grands ? (4) Quelles sont les limites de cette solidarité ?",
              hint: "Repérez les principes qui visent les puissances coloniales et ceux qui visent les blocs ; pensez à la composition très variée de la conférence.",
              solution: [
                "(1) Les participants sont 29 pays d'Asie et d'Afrique, souvent récemment indépendants (Inde de Nehru, Indonésie de Sukarno, Égypte de Nasser), ainsi que la Chine populaire de Zhou Enlai.",
                "(2) Ils revendiquent la fin du colonialisme, l'égalité des races et des nations, le respect de la souveraineté et de l'intégrité territoriale, et la non-intervention.",
                "(3) Le refus des pactes de défense collective servant les grandes puissances vise la logique des blocs (OTASE, pacte de Bagdad) ; la non-intervention vise les ingérences américaines et soviétiques : les pays du tiers-monde veulent exister hors de la bipolarisation.",
                "(4) Limites : les participants sont très divers et certains sont liés à un bloc (la Chine communiste, le Pakistan membre de l'OTASE) ; la conférence ne crée pas d'organisation permanente, et des conflits opposeront bientôt certains d'entre eux (guerre sino-indienne de 1962).",
                "Bilan : Bandung marque l'entrée du tiers-monde sur la scène internationale comme acteur collectif, mais un acteur divisé.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment de nouveaux acteurs remettent-ils en cause l'ordre bipolaire entre 1945 et le début des années 1970 ? ». Rédigez l'introduction et présentez un plan détaillé en trois parties.",
              hint: "Montrez d'abord la force de l'ordre bipolaire, puis identifiez les acteurs qui le contestent : pays décolonisés, non-alignés, Chine, alliés indociles des deux Grands.",
              solution: [
                "Introduction : à partir de 1947, le monde s'organise autour de deux superpuissances, les États-Unis et l'URSS. Pourtant, entre 1945 et le début des années 1970, le nombre d'États membres de l'ONU passe de 51 à plus de 120. Problématique : comment ces nouveaux acteurs remettent-ils en cause un monde dominé par deux Grands ?",
                "I. Un ordre bipolaire qui s'impose : deux modèles et deux blocs (OTAN en 1949, pacte de Varsovie en 1955), équilibre de la terreur, crises et conflits périphériques (Corée, Berlin, Cuba).",
                "II. L'émergence du tiers-monde : décolonisation de l'Asie puis de l'Afrique (1947-1962), conférence de Bandung (1955), mouvement des non-alignés (Belgrade, 1961), crise de Suez (1956), groupe des 77 et CNUCED (1964).",
                "III. Des blocs fissurés et de nouvelles puissances : la Chine populaire rompt avec l'URSS, se dote de la bombe (1964) et entre à l'ONU (1971) ; la France gaullienne quitte le commandement intégré de l'OTAN (1966) ; la construction européenne affirme un pôle économique.",
                "Conclusion : au début des années 1970, la bipolarité demeure, mais le monde est devenu multipolaire par certains aspects ; la visite de Nixon à Pékin (1972) montre que les Grands doivent désormais composer avec d'autres acteurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la guerre froide dans l'ordre chronologique.",
            items: [
              "Début du blocus de Berlin",
              "Invasion de la Corée du Sud par la Corée du Nord",
              "Conférence de Bandung",
              "Nationalisation du canal de Suez par Nasser",
              "Construction du mur de Berlin",
              "Crise des missiles de Cuba",
              "Signature des accords SALT I",
            ],
          },
          quiz: [
            {
              q: "Qui invente l'expression « tiers-monde » en 1952 ?",
              options: ["Gamal Abdel Nasser", "Alfred Sauvy", "Jawaharlal Nehru", "Raymond Aron"],
              answer: 1,
              why: "Le démographe Alfred Sauvy forge l'expression par analogie avec le tiers état de 1789.",
            },
            {
              q: "Comment se termine la crise de Cuba en 1962 ?",
              options: ["Par l'invasion américaine de l'île", "Par un échange de tirs nucléaires limités", "Par le retrait des missiles soviétiques", "Par l'entrée de Cuba dans l'OTAN"],
              answer: 2,
              why: "Khrouchtchev retire les missiles contre la promesse américaine de ne pas envahir Cuba ; la crise ouvre la voie à la détente.",
            },
            {
              q: "Quelle conférence fonde le mouvement des non-alignés en 1961 ?",
              options: ["La conférence de Belgrade", "La conférence de Bandung", "La conférence de Genève", "La conférence de Yalta, en Crimée"],
              answer: 0,
              why: "Bandung (1955) affirme la solidarité afro-asiatique ; c'est à Belgrade (1961), autour de Tito, Nehru et Nasser, que naît le mouvement des non-alignés.",
            },
            {
              q: "Pourquoi la crise de Suez (1956) est-elle un tournant ?",
              options: ["Elle provoque la création d'Israël", "Elle marque l'entrée de l'Égypte dans l'Alliance atlantique", "Elle met fin à la guerre de Corée", "Elle révèle le déclin des puissances coloniales"],
              answer: 3,
              why: "Le Royaume-Uni et la France doivent retirer leurs troupes sous la pression des deux Grands, tandis que Nasser devient un héros du tiers-monde.",
            },
            {
              q: "En quelle année la Chine populaire obtient-elle le siège de la Chine à l'ONU ?",
              options: ["En 1949", "En 1955", "En 1964", "En 1971"],
              answer: 3,
              why: "En octobre 1971, l'Assemblée générale attribue à la République populaire le siège de la Chine, y compris au Conseil de sécurité, jusque-là occupé par Taïwan.",
            },
          ],
          trap: "Confondre Bandung (1955), conférence afro-asiatique contre le colonialisme, et Belgrade (1961), qui fonde le mouvement des non-alignés ; ou présenter le tiers-monde comme un bloc uni, alors qu'il est profondément divisé.",
          method: "Pour chaque crise de la guerre froide, mémorisez quatre éléments (date, lieu, acteurs, issue) et classez-la sur une frise colorée selon qu'elle tend ou détend les relations : la frise devient le squelette de votre réponse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-nouvelle-place',
          title: 'La France : une nouvelle place dans le monde',
          minutes: 35,
          objectives: [
            "Expliquer la reconstruction de la France et la refondation républicaine après 1945.",
            "Analyser la décolonisation française, de la guerre d'Indochine à l'indépendance de l'Algérie.",
            "Expliquer le rôle de la France dans la guerre froide et dans la construction européenne.",
            "Caractériser la Ve République et la politique de grandeur du général de Gaulle.",
          ],
          course: [
            {
              heading: "Reconstruire et refonder la République",
              paragraphs: [
                "À la Libération, le Gouvernement provisoire du général de Gaulle refonde la République en appliquant une partie du programme du CNR. Les femmes votent pour la première fois en avril 1945. L'État nationalise des secteurs clés : Renault (1945), les houillères, la Banque de France et les grandes banques de dépôt, l'électricité et le gaz (EDF-GDF, 1946). Les ordonnances d'octobre 1945 créent la Sécurité sociale. Le Commissariat général au Plan, dirigé par Jean Monnet (1946), oriente la reconstruction.",
                "En désaccord avec les partis, de Gaulle démissionne en janvier 1946. La Constitution de la IVe République, adoptée par référendum en octobre 1946, met en place un régime parlementaire. Le Parti communiste est alors le premier parti de France. Le régime souffre d'une forte instabilité : plus d'une vingtaine de gouvernements se succèdent en douze ans. La France connaît pourtant une forte croissance, le baby-boom et la modernisation de son économie : ce sont les débuts de ce que l'économiste Jean Fourastié appellera les « Trente Glorieuses ».",
              ],
            },
            {
              heading: "La France dans la guerre froide et la construction européenne",
              paragraphs: [
                "La France choisit le camp occidental. En mai 1947, les ministres communistes sont renvoyés du gouvernement. Le pays bénéficie largement du plan Marshall (il en est le deuxième bénéficiaire après le Royaume-Uni) et participe à la fondation de l'OTAN en 1949. Affaiblie, elle n'en reste pas moins membre permanent du Conseil de sécurité et puissance occupante en Allemagne.",
                "Pour garantir la paix, la France choisit la réconciliation avec l'Allemagne. Le 9 mai 1950, le ministre des Affaires étrangères Robert Schuman, inspiré par Jean Monnet, propose de mettre en commun le charbon et l'acier : la Communauté européenne du charbon et de l'acier (CECA) réunit six pays en 1951 (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg). En 1954, l'Assemblée nationale rejette la Communauté européenne de défense (CED), mais les traités de Rome (25 mars 1957) créent la Communauté économique européenne (CEE) et Euratom. La politique agricole commune (1962) profite largement aux agriculteurs français.",
              ],
              box: { label: "Repère", text: "1945 : Sécurité sociale. 1946 : IVe République. 1949 : OTAN. 1951 : CECA. 1954 : Dien Bien Phu. 1957 : traités de Rome. 1958 : Ve République. 1960 : première bombe atomique française. 1962 : accords d'Évian. 1966 : retrait du commandement intégré de l'OTAN." },
            },
            {
              heading: "La décolonisation : de l'Indochine à l'Algérie",
              paragraphs: [
                "La IVe République veut conserver l'empire, rebaptisé Union française (1946). L'insurrection de Madagascar (1947) est réprimée au prix de dizaines de milliers de morts. En Indochine, la guerre contre le Viet Minh de Hô Chi Minh (1946-1954) s'achève par la défaite de Dien Bien Phu (7 mai 1954) ; les accords de Genève, négociés par Pierre Mendès France (juillet 1954), divisent le Vietnam au 17e parallèle. Le Maroc et la Tunisie deviennent indépendants en 1956. En Afrique subsaharienne, l'évolution est négociée : la plupart des colonies accèdent à l'indépendance en 1960, mais la France y garde une forte influence (coopération, accords de défense, franc CFA).",
                "L'Algérie, formée de départements français, compte environ un million d'Européens et près de neuf millions de musulmans, très inégaux en droits. Le 1er novembre 1954, le Front de libération nationale (FLN) déclenche l'insurrection. La France y envoie à partir de 1956 les appelés du contingent ; l'armée recourt à la torture pendant la bataille d'Alger (1957). La guerre divise profondément la société française et fait tomber la IVe République : le 13 mai 1958, une émeute à Alger, soutenue par des militaires, conduit au retour au pouvoir du général de Gaulle.",
                "De Gaulle évolue vers l'autodétermination (1959), malgré l'opposition d'une partie des Européens d'Algérie et de l'armée (putsch des généraux d'avril 1961, attentats de l'OAS). Les accords d'Évian (18 mars 1962) mettent fin à la guerre et l'Algérie devient indépendante en juillet 1962. La plupart des pieds-noirs quittent l'Algérie, et de nombreux harkis, supplétifs musulmans de l'armée française, sont massacrés. La guerre a fait plusieurs dizaines de milliers de morts du côté français et plusieurs centaines de milliers du côté algérien ; ce n'est qu'en 1999 qu'une loi reconnaît officiellement l'expression « guerre d'Algérie ».",
              ],
            },
            {
              heading: "La Ve République et la politique de grandeur",
              paragraphs: [
                "Approuvée par près de 80 % des votants au référendum du 28 septembre 1958, la Constitution de la Ve République renforce l'exécutif : le président nomme le Premier ministre, peut dissoudre l'Assemblée nationale, recourir au référendum et disposer de pouvoirs exceptionnels (article 16). Élu président en décembre 1958 par un collège de grands électeurs, de Gaulle fait adopter par référendum, en octobre 1962, l'élection du président au suffrage universel direct, appliquée pour la première fois en 1965.",
                "De Gaulle veut rendre à la France son rang et son indépendance, sans quitter l'Alliance atlantique. La France fait exploser sa première bombe atomique dans le Sahara le 13 février 1960 et se dote d'une force de dissuasion autonome. Elle reconnaît la Chine populaire (1964), quitte le commandement intégré de l'OTAN (1966) et critique l'intervention américaine au Vietnam (discours de Phnom Penh, 1966). En Europe, de Gaulle défend une « Europe des États », scelle la réconciliation franco-allemande par le traité de l'Élysée (1963) et s'oppose deux fois à l'entrée du Royaume-Uni dans la CEE (1963 et 1967).",
                "Cette politique de grandeur a ses limites : les moyens de la France restent ceux d'une puissance moyenne, et la crise de mai 1968 révèle un malaise social et culturel. Après l'échec d'un référendum, de Gaulle démissionne en avril 1969. Son successeur, Georges Pompidou, maintient l'indépendance nationale mais accepte l'entrée du Royaume-Uni dans la CEE (1973).",
              ],
              box: { label: "À retenir", text: "De 1945 au début des années 1970, la France perd son empire mais trouve une nouvelle place : membre permanent du Conseil de sécurité, moteur de la construction européenne, puissance nucléaire indépendante au sein du camp occidental." },
            },
          ],
          keyPoints: [
            "Refondation (1944-1946) : vote des femmes, nationalisations, Sécurité sociale, Plan ; IVe République instable mais modernisatrice.",
            "Camp occidental : plan Marshall, OTAN (1949) ; réconciliation franco-allemande et construction européenne (CECA 1951, traités de Rome 1957).",
            "Décolonisation : Indochine (Dien Bien Phu, 1954), Maroc et Tunisie (1956), Afrique subsaharienne (1960), Algérie (1954-1962, Évian).",
            "La guerre d'Algérie provoque la chute de la IVe République (13 mai 1958) et le retour de De Gaulle.",
            "Ve République (1958) : exécutif fort, élection du président au suffrage universel direct (1962).",
            "Politique de grandeur : bombe atomique (1960), reconnaissance de la Chine (1964), retrait du commandement intégré de l'OTAN (1966).",
          ],
          example: {
            statement: "Expliquez comment la guerre d'Algérie provoque la chute de la IVe République.",
            solution: [
              "Rappeler le contexte : depuis le 1er novembre 1954, le FLN mène une guerre d'indépendance en Algérie, considérée comme un ensemble de départements français.",
              "Montrer l'enlisement : à partir de 1956, l'envoi des appelés du contingent et l'usage de la torture (bataille d'Alger, 1957) divisent l'opinion publique.",
              "Montrer la faiblesse du régime : la IVe République connaît une forte instabilité gouvernementale et ne parvient pas à définir une politique claire entre répression et négociation.",
              "Montrer la crise de mai 1958 : le 13 mai, une émeute des partisans de l'Algérie française à Alger, soutenue par des militaires, fait craindre un coup d'État.",
              "Montrer l'issue : le président René Coty fait appel au général de Gaulle, investi par l'Assemblée le 1er juin 1958 ; une nouvelle Constitution est approuvée par référendum le 28 septembre 1958.",
              "Conclure : la guerre d'Algérie révèle et aggrave les faiblesses de la IVe République, qui disparaît au profit d'un régime à l'exécutif renforcé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Datez précisément les événements suivants, puis classez-les en trois thèmes (refondation intérieure, décolonisation, place dans le monde) : (a) création de la Sécurité sociale ; (b) défaite de Dien Bien Phu ; (c) traités de Rome ; (d) accords d'Évian ; (e) première bombe atomique française ; (f) retrait du commandement intégré de l'OTAN ; (g) adoption de la Constitution de la Ve République.",
              hint: "Placez d'abord les événements sur une frise de 1945 à 1966 ; le classement par thème devient alors plus facile.",
              solution: [
                "Refondation intérieure : (a) Sécurité sociale, ordonnances d'octobre 1945 ; (g) Constitution de la Ve République, référendum du 28 septembre 1958.",
                "Décolonisation : (b) Dien Bien Phu, 7 mai 1954 ; (d) accords d'Évian, 18 mars 1962.",
                "Place dans le monde : (c) traités de Rome, 25 mars 1957 ; (e) première bombe atomique, 13 février 1960 ; (f) retrait du commandement intégré de l'OTAN, 1966.",
                "Ordre chronologique : a (1945), b (1954), c (1957), g (1958), e (1960), d (1962), f (1966).",
              ],
            },
            {
              level: 2,
              statement: "Rédigez un paragraphe argumenté d'une dizaine de lignes qui montre que la construction européenne permet à la France de retrouver une place dans le monde après 1945. Appuyez-vous sur au moins quatre exemples datés.",
              hint: "Pensez à la paix avec l'Allemagne, au poids économique et au rôle politique que la France veut jouer en Europe.",
              solution: [
                "Idée directrice : affaiblie par la guerre et par la décolonisation, la France fait de la construction européenne un moyen de garantir sa sécurité et d'accroître son influence.",
                "Paix et sécurité : la déclaration Schuman (9 mai 1950) propose une mise en commun du charbon et de l'acier pour rendre la guerre avec l'Allemagne impossible ; la CECA naît en 1951.",
                "Poids économique : les traités de Rome (25 mars 1957) créent la CEE, un marché commun qui stimule la croissance ; la PAC (1962) modernise l'agriculture française.",
                "Influence politique : de Gaulle veut une « Europe des États » dirigée par le couple franco-allemand (traité de l'Élysée, 1963) et refuse l'entrée du Royaume-Uni (1963, 1967), jugé trop proche des États-Unis.",
                "Bilan rédigé possible : ainsi, la construction européenne permet à la France, devenue une puissance moyenne, de démultiplier son influence et de jouer un rôle moteur sur le continent.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment la France redéfinit-elle sa place dans le monde de 1945 au début des années 1970 ? ». Rédigez l'introduction, un plan détaillé en trois parties et la conclusion.",
              hint: "Ne vous limitez pas à la politique étrangère de De Gaulle : la guerre froide, la décolonisation et l'Europe sont trois éléments de la réponse.",
              solution: [
                "Introduction : en 1945, la France est dans le camp des vainqueurs, mais affaiblie par la défaite de 1940 et l'occupation. Elle reste à la tête d'un vaste empire. Problématique : comment, en perdant son empire, la France parvient-elle à se donner une nouvelle place dans un monde dominé par deux superpuissances ?",
                "I. Une puissance affaiblie qui choisit le camp occidental (1945-1954) : reconstruction avec le plan Marshall, OTAN (1949), siège permanent au Conseil de sécurité, mais dépendance envers les États-Unis.",
                "II. La fin de l'empire colonial (1946-1962) : guerre d'Indochine et Dien Bien Phu (1954), indépendances du Maroc et de la Tunisie (1956) et de l'Afrique subsaharienne (1960), guerre d'Algérie qui fait tomber la IVe République, accords d'Évian (1962) ; maintien d'une influence en Afrique.",
                "III. Une nouvelle place fondée sur l'Europe et l'indépendance nationale : CECA (1951) et traités de Rome (1957) ; Ve République ; bombe atomique (1960), reconnaissance de la Chine (1964), retrait du commandement intégré de l'OTAN (1966).",
                "Conclusion : au début des années 1970, la France n'est plus une puissance impériale, mais elle est devenue une puissance moyenne d'influence mondiale, nucléaire, membre permanent du Conseil de sécurité et moteur de la construction européenne.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La France de 1945 au début des années 1970.",
            statements: [
              { text: "Les Françaises votent pour la première fois en 1945.", true: true, why: "Le droit de vote leur est accordé par l'ordonnance du 21 avril 1944 ; elles votent pour la première fois aux municipales d'avril 1945." },
              { text: "La France quitte l'OTAN en 1966.", true: false, why: "Elle quitte seulement le commandement militaire intégré ; elle reste membre de l'Alliance atlantique." },
              { text: "La CED est rejetée par l'Assemblée nationale française en 1954.", true: true, why: "Le projet d'armée européenne est rejeté le 30 août 1954, notamment par les gaullistes et les communistes." },
              { text: "La guerre d'Indochine se termine par les accords d'Évian.", true: false, why: "Elle se termine par les accords de Genève (1954) ; les accords d'Évian (1962) mettent fin à la guerre d'Algérie." },
              { text: "L'élection du président de la République au suffrage universel direct date de 1958.", true: false, why: "En 1958, le président est élu par un collège de grands électeurs ; le suffrage universel direct est adopté par référendum en 1962." },
              { text: "De Gaulle s'oppose à l'entrée du Royaume-Uni dans la CEE.", true: true, why: "Il y oppose son veto en 1963 et en 1967 ; le Royaume-Uni entre dans la CEE en 1973, sous Pompidou." },
            ],
          },
          quiz: [
            {
              q: "Qui propose, le 9 mai 1950, la mise en commun du charbon et de l'acier ?",
              options: ["Charles de Gaulle", "Robert Schuman", "Pierre Mendès France", "Konrad Adenauer"],
              answer: 1,
              why: "Le ministre des Affaires étrangères Robert Schuman, inspiré par Jean Monnet, propose ce projet qui aboutit à la CECA en 1951.",
            },
            {
              q: "Quelle bataille met fin à la guerre d'Indochine ?",
              options: ["La bataille d'Alger", "La bataille de Bir Hakeim, en Libye", "La bataille de Dien Bien Phu", "La bataille de Suez"],
              answer: 2,
              why: "La chute du camp retranché de Dien Bien Phu, le 7 mai 1954, conduit aux accords de Genève.",
            },
            {
              q: "Quel événement provoque le retour au pouvoir du général de Gaulle en 1958 ?",
              options: ["La crise du 13 mai 1958 à Alger", "La défaite de Dien Bien Phu", "La signature des traités de Rome", "Le putsch des généraux d'avril 1961"],
              answer: 0,
              why: "L'émeute du 13 mai 1958 à Alger, soutenue par des militaires, fait craindre un coup d'État ; de Gaulle est investi le 1er juin 1958.",
            },
            {
              q: "Où la France fait-elle exploser sa première bombe atomique en 1960 ?",
              options: ["En Polynésie française", "En Nouvelle-Calédonie", "Dans le désert du Nevada", "Dans le Sahara algérien"],
              answer: 3,
              why: "Le premier essai a lieu à Reggane, dans le Sahara, le 13 février 1960 ; les essais se déplacent ensuite en Polynésie à partir de 1966.",
            },
            {
              q: "Que décide la France en 1966 ?",
              options: ["Elle entre dans la CEE", "Elle quitte le commandement intégré de l'OTAN", "Elle accorde l'indépendance à l'Algérie après huit ans de guerre", "Elle rejoint le pacte de Varsovie"],
              answer: 1,
              why: "De Gaulle retire la France du commandement militaire intégré de l'OTAN et fait partir les bases américaines, tout en restant dans l'Alliance.",
            },
          ],
          trap: "Croire que la France quitte l'OTAN en 1966 : elle ne quitte que le commandement militaire intégré et reste membre de l'Alliance atlantique ; la politique de grandeur n'est pas une rupture avec le camp occidental.",
          method: "Organisez vos révisions autour de trois cercles (l'empire, l'Europe, le monde) et placez dans chacun cinq dates : cette grille permet de répondre à toute question sur la place de la France entre 1945 et 1970.",
        },
        /* fin du chapitre monde-bipolaire */
      ],
    },
    /* fin des chapitres */
  ],
}
