import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-tle',
  chapters: [
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 2 : DYNAMIQUES TERRITORIALES DANS LA MONDIALISATION */
    /* ==================================================================== */
    {
      id: 'dynamiques-territoriales',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'territoires-inegalement-integres',
          title: 'Des territoires inégalement intégrés à la mondialisation',
          minutes: 30,
          objectives: [
            "Définir la mondialisation et les notions de centre, de périphérie, d'interface et de hub.",
            "Identifier les facteurs qui expliquent l'inégale intégration des territoires à la mondialisation.",
            "Analyser cette intégration différenciée aux échelles mondiale, nationale et locale.",
            "Réaliser la légende organisée d'un croquis sur l'intégration des territoires à la mondialisation.",
          ],
          course: [
            {
              heading: "La mondialisation, une mise en relation des territoires",
              paragraphs: [
                "La mondialisation désigne la mise en relation croissante des différentes parties du monde par des flux de marchandises, de capitaux, de personnes et d'informations. Elle n'est pas nouvelle (les grandes découvertes ou la révolution industrielle en furent des étapes), mais elle s'accélère depuis les années 1980 grâce à l'ouverture des économies, à la révolution des transports (conteneur, avion gros porteur) et à celle des télécommunications (câbles sous-marins, internet).",
                "Ses principaux acteurs sont les États, qui ouvrent ou ferment leurs frontières, les firmes transnationales (FTN), qui organisent la production à l'échelle mondiale, les organisations internationales (OMC, FMI) et, de plus en plus, les villes et les régions qui cherchent à attirer investissements et talents. Les FTN fragmentent la production en chaînes de valeur mondiales : un smartphone peut être conçu aux États-Unis, fabriqué avec des composants venus de Corée du Sud, du Japon ou de Taïwan, puis assemblé en Chine.",
                "Mais la mondialisation ne recouvre pas la planète de façon uniforme. Elle hiérarchise les territoires : certains commandent et captent l'essentiel des flux, d'autres y participent de façon dépendante, d'autres encore restent largement en marge. C'est cette intégration inégale que le géographe cherche à décrire et à expliquer.",
              ],
              box: { label: "Définition", text: "Intégration à la mondialisation : degré de participation d'un territoire aux échanges mondiaux, mesuré par l'intensité des flux qu'il émet et reçoit (commerce, investissements, touristes, informations) et par sa capacité à les commander." },
            },
            {
              heading: "Centres, périphéries et marges à l'échelle mondiale",
              paragraphs: [
                "Les centres d'impulsion concentrent les pouvoirs de commandement (sièges sociaux des FTN, places financières, centres de recherche). On distingue traditionnellement trois grands pôles : l'Amérique du Nord, l'Europe occidentale et l'Asie orientale. Ce dernier pôle s'est profondément transformé : au Japon et à la Corée du Sud s'est ajoutée la Chine, premier exportateur mondial de marchandises depuis 2009. Au sommet de la hiérarchie se trouvent les métropoles mondiales (New York, Londres, Tokyo, Paris, Shanghai), reliées entre elles en un véritable archipel.",
                "Les flux passent par des interfaces, zones de contact entre deux espaces différents, et par des hubs, plateformes où les flux convergent puis se redistribuent. Les grandes façades maritimes, comme la Northern Range en Europe (du Havre à Hambourg) ou la façade de l'Asie orientale (Shanghai est le premier port à conteneurs du monde depuis 2010), en sont les meilleurs exemples.",
                "Autour de ces centres, les périphéries sont intégrées de manière variable. Certaines sont des périphéries intégrées, qui accueillent les activités délocalisées des centres (nord du Mexique avec ses maquiladoras, Europe centrale, Asie du Sud-Est). D'autres sont des périphéries exploitées, insérées surtout par l'exportation de matières premières (pétrole, minerais, produits agricoles). Enfin, certains espaces restent en marge : pays enclavés, zones de conflit, régions arides ou isolées, comme une grande partie du Sahel.",
              ],
              box: { label: "Vocabulaire", text: "Centre : espace qui commande et attire les flux. Périphérie : espace qui dépend d'un centre. Interface : zone de contact qui met en relation deux espaces. Hub : plateforme de concentration et de redistribution des flux. Marge : espace peu intégré, à l'écart des flux." },
            },
            {
              heading: "Les facteurs de l'intégration",
              paragraphs: [
                "L'accessibilité est un facteur décisif : un territoire bien desservi par un grand port, un aéroport international, des autoroutes et des câbles numériques est plus facilement intégré. D'où deux processus majeurs : la littoralisation, c'est-à-dire la concentration des hommes et des activités sur les littoraux, et la métropolisation, concentration des populations, des activités et des fonctions de commandement dans les grandes villes.",
                "Les choix politiques comptent tout autant. La Chine a ouvert son territoire par étapes à partir de 1978 et a créé des zones économiques spéciales (ZES), comme Shenzhen en 1980, où les entreprises étrangères bénéficiaient d'avantages fiscaux. À l'inverse, l'instabilité politique, la guerre ou les sanctions internationales tiennent un territoire à l'écart des investissements.",
                "S'y ajoutent les ressources (matières premières, main-d'œuvre abondante et peu coûteuse ou au contraire très qualifiée), la taille du marché intérieur et la qualité des institutions (sécurité juridique, formation). C'est la combinaison de ces facteurs, et non un seul d'entre eux, qui explique la position d'un territoire.",
              ],
            },
            {
              heading: "Une intégration différenciée à toutes les échelles",
              paragraphs: [
                "L'inégale intégration se lit aussi à l'intérieur des États. En Chine, les provinces littorales de l'Est concentrent l'essentiel des exportations et des investissements étrangers, alors que l'intérieur et l'Ouest restent moins intégrés malgré les politiques de rééquilibrage. Aux États-Unis, la Northeast Megalopolis (de Boston à Washington) et la Californie dominent.",
                "À l'échelle locale, la mondialisation fragmente l'espace urbain. À Mumbai, en Inde, le quartier d'affaires de Bandra-Kurla accueille banques et sièges sociaux à quelques kilomètres de Dharavi, l'un des plus grands quartiers informels d'Asie. Une même ville peut donc juxtaposer des espaces connectés au monde et des espaces qui en sont exclus.",
                "Enfin, l'intégration n'est jamais acquise : des territoires autrefois centraux peuvent décliner (anciens bassins industriels d'Europe ou des États-Unis, la Rust Belt), tandis que d'autres émergent. La carte de la mondialisation est en recomposition permanente.",
              ],
              box: { label: "À retenir", text: "La mondialisation intègre les territoires de façon sélective et hiérarchisée. Cette hiérarchie (centres, périphéries, marges) se retrouve aux échelles mondiale, nationale et locale, et elle évolue dans le temps." },
            },
          ],
          keyPoints: [
            "La mondialisation est la mise en relation croissante des territoires par des flux de marchandises, de capitaux, de personnes et d'informations.",
            "Elle hiérarchise les territoires : centres d'impulsion, périphéries intégrées ou exploitées, marges.",
            "Les métropoles mondiales, les interfaces (façades maritimes) et les hubs concentrent les flux.",
            "Facteurs d'intégration : accessibilité, choix politiques (ZES chinoises dès 1980), ressources, marché, institutions.",
            "Littoralisation et métropolisation traduisent la concentration des activités dans les espaces les mieux connectés.",
            "L'inégale intégration se lit à toutes les échelles : mondiale, nationale (Chine littorale et intérieure), locale (Mumbai).",
          ],
          example: {
            statement: "Montrez, à partir de l'exemple de la Chine, que l'intégration à la mondialisation est inégale à l'échelle d'un même État.",
            solution: [
              "Rappeler le cadre : depuis les réformes lancées par Deng Xiaoping en 1978, la Chine s'est ouverte progressivement aux capitaux et aux échanges internationaux.",
              "Identifier les espaces les plus intégrés : les provinces littorales de l'Est, avec les ZES (Shenzhen dès 1980) et les grandes métropoles portuaires (Shanghai, Shenzhen, Canton), concentrent les exportations, les investissements étrangers et les fonctions de commandement.",
              "Expliquer cette concentration : l'accès à la mer, la proximité de Hong Kong et de Taïwan, la présence d'une main-d'œuvre venue de l'intérieur et des politiques publiques favorables.",
              "Identifier les espaces moins intégrés : les provinces de l'intérieur et de l'Ouest, plus rurales et plus éloignées des ports, participent davantage comme réservoirs de main-d'œuvre et de ressources.",
              "Nuancer : l'État chinois mène des politiques de rééquilibrage (grands travaux, développement de métropoles intérieures comme Chongqing ou Chengdu), mais le contraste demeure.",
              "Conclusion : la Chine illustre une intégration sélective, qui oppose un littoral moteur, interface avec le monde, et un intérieur dépendant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chacun des exemples suivants à la notion qui lui correspond (centre d'impulsion, interface, hub, périphérie intégrée, marge) : a) l'aéroport de Dubaï ; b) la Northern Range ; c) la ville de Londres ; d) le nord du Mexique et ses maquiladoras ; e) un pays enclavé du Sahel en guerre.",
              hint: "Demandez-vous, pour chaque exemple, s'il commande les flux, s'il met en contact deux espaces, s'il redistribue des flux, s'il dépend d'un centre ou s'il reste à l'écart.",
              solution: [
                "a) L'aéroport de Dubaï est un hub : les passagers et le fret y convergent puis sont redistribués vers l'Europe, l'Asie et l'Afrique.",
                "b) La Northern Range est une interface : cette façade portuaire met en contact l'Europe et le reste du monde par la mer.",
                "c) Londres est un centre d'impulsion : métropole mondiale, elle concentre une grande place financière et de nombreux sièges sociaux.",
                "d) Le nord du Mexique est une périphérie intégrée : les maquiladoras assemblent, pour le marché des États-Unis, des produits conçus ailleurs.",
                "e) Un pays enclavé du Sahel en guerre est une marge : l'isolement et l'insécurité le tiennent à l'écart des grands flux.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quatre ou cinq phrases pourquoi les littoraux sont, en général, mieux intégrés à la mondialisation que l'intérieur des continents. Utilisez au moins trois termes du cours.",
              hint: "Pensez au rôle du transport maritime dans le commerce mondial, à la notion d'interface et au processus de littoralisation.",
              solution: [
                "Le transport maritime assure l'essentiel du commerce mondial de marchandises en volume, grâce au conteneur qui abaisse fortement les coûts.",
                "Les littoraux sont donc des interfaces entre les territoires nationaux et le reste du monde : les ports y accueillent les flux et les redistribuent.",
                "Les activités industrielles et logistiques s'installent près des ports pour réduire les coûts : c'est la littoralisation, visible sur la façade de l'Asie orientale ou sur la Northern Range.",
                "Les grandes métropoles portuaires (Shanghai, Rotterdam, Singapour) deviennent des hubs et attirent sièges sociaux et services.",
                "Résultat : l'accessibilité maritime explique la meilleure intégration des littoraux, alors que l'intérieur, plus éloigné, dépend de ces façades.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (croquis) : vous devez réaliser un croquis intitulé « Des territoires inégalement intégrés à la mondialisation ». Proposez une légende organisée en trois parties, avec au moins deux figurés par partie, en précisant le type de figuré (surface, point, ligne) et un exemple localisé pour chacun.",
              hint: "Une légende organisée suit une logique : d'abord les espaces qui commandent, puis les flux et les interfaces, enfin les espaces moins intégrés. Chaque figuré doit correspondre à un phénomène géographique précis.",
              solution: [
                "Partie I, les centres d'impulsion de la mondialisation : un figuré de surface de couleur soutenue pour les trois grands pôles (Amérique du Nord, Europe occidentale, Asie orientale) ; un point proportionnel pour les métropoles mondiales (New York, Londres, Tokyo, Paris, Shanghai).",
                "Partie II, des flux et des interfaces qui organisent l'espace mondial : un figuré linéaire (trait épais) pour les façades maritimes majeures (Northern Range, façade est-asiatique, façade atlantique nord-américaine) ; des flèches pour les principaux flux de marchandises entre les pôles ; un point pour quelques hubs (Singapour, Dubaï).",
                "Partie III, des périphéries inégalement intégrées : un figuré de surface plus clair pour les périphéries intégrées (Mexique, Europe centrale, Asie du Sud-Est) ; une surface hachurée pour les périphéries exploitées exportatrices de matières premières (golfe Arabo-Persique, Afrique centrale) ; un figuré spécifique pour les marges (Sahel, Afghanistan).",
                "Contrôle de cohérence : les couleurs vont du plus foncé (centres) au plus clair (marges), ce qui rend visible la hiérarchie des territoires, idée directrice du croquis.",
                "Résultat : une légende en trois parties (centres, flux et interfaces, périphéries et marges), qui répond au titre en montrant une intégration hiérarchisée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Hub", right: "Plateforme où les flux convergent puis sont redistribués" },
              { left: "Interface", right: "Zone de contact qui met en relation deux espaces différents" },
              { left: "Métropolisation", right: "Concentration des hommes, des activités et des fonctions de commandement dans les grandes villes" },
              { left: "Littoralisation", right: "Concentration des populations et des activités sur les littoraux" },
              { left: "Marge", right: "Espace peu intégré, à l'écart des grands flux" },
              { left: "Firme transnationale", right: "Entreprise qui produit et vend dans plusieurs pays à partir d'un siège social" },
            ],
          },
          quiz: [
            {
              q: "Quel pays est le premier exportateur mondial de marchandises depuis 2009 ?",
              options: ["Les États-Unis", "La Chine", "L'Allemagne, longtemps championne des exportations", "Le Japon"],
              answer: 1,
              why: "La Chine a dépassé l'Allemagne en 2009 et occupe depuis le premier rang mondial des exportations de marchandises.",
            },
            {
              q: "Comment appelle-t-on la façade portuaire européenne qui s'étend du Havre à Hambourg ?",
              options: ["La Banane bleue", "La Mégalopolis", "La Sun Belt européenne", "La Northern Range"],
              answer: 3,
              why: "La Northern Range est la façade maritime de la mer du Nord et de la Manche, la plus active d'Europe, avec Rotterdam, Anvers et Hambourg.",
            },
            {
              q: "Les maquiladoras du nord du Mexique sont un exemple :",
              options: ["de périphérie intégrée", "de marge isolée des flux mondiaux", "de centre d'impulsion", "de place financière"],
              answer: 0,
              why: "Ces usines d'assemblage travaillent pour le marché des États-Unis : le nord du Mexique est intégré, mais de façon dépendante.",
            },
            {
              q: "Quelle ville chinoise devient zone économique spéciale en 1980 ?",
              options: ["Pékin", "Chongqing", "Shenzhen", "Lhassa, capitale du Tibet"],
              answer: 2,
              why: "Shenzhen, voisine de Hong Kong, fait partie des premières ZES créées en 1980 pour attirer les capitaux étrangers.",
            },
            {
              q: "Quel facteur n'explique PAS, à lui seul, l'intégration d'un territoire ?",
              options: ["L'accessibilité par un grand port", "Une politique d'ouverture aux capitaux", "Une main-d'œuvre qualifiée", "La superficie du territoire"],
              answer: 3,
              why: "Un vaste territoire peut rester peu intégré : c'est la combinaison de l'accessibilité, des choix politiques et des ressources qui compte, non la superficie.",
            },
          ],
          trap: "Opposer de façon simpliste « pays du Nord intégrés » et « pays du Sud exclus » : l'intégration se mesure aussi à l'intérieur des États (Chine littorale et intérieure) et des villes (Mumbai), et des territoires du Nord peuvent être en déclin.",
          method: "Pour chaque notion (centre, périphérie, interface, hub, marge), apprenez un exemple localisé précis que vous pourrez placer sur un croquis ou citer dans une réponse à une question problématisée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cooperations-tensions-regulations',
          title: 'Coopérations, tensions et régulations aux différentes échelles',
          minutes: 30,
          objectives: [
            "Identifier les principales formes de coopération dans la mondialisation, de l'échelle mondiale à l'échelle locale.",
            "Expliquer les tensions que provoque la mondialisation (commerciales, sociales, environnementales).",
            "Présenter les acteurs et les outils de la régulation de la mondialisation.",
            "Distinguer les degrés de l'intégration régionale (zone de libre-échange, union douanière, marché commun, union économique et monétaire).",
          ],
          course: [
            {
              heading: "Coopérer et réguler à l'échelle mondiale",
              paragraphs: [
                "La mondialisation suppose des règles communes. Après 1945, les accords de Bretton Woods (1944) ont créé le FMI et la Banque mondiale, puis le GATT (1947) a organisé la baisse progressive des droits de douane. En 1995, l'Organisation mondiale du commerce (OMC), dont le siège est à Genève, lui succède. Elle réunit aujourd'hui plus de 160 membres, fixe les règles du commerce international et dispose d'un organe de règlement des différends.",
                "D'autres instances de concertation réunissent les principales puissances. Le G7 (États-Unis, Japon, Allemagne, France, Royaume-Uni, Italie, Canada) existe depuis le milieu des années 1970. Le G20, qui associe les grandes économies émergentes (Chine, Inde, Brésil...), réunit des chefs d'État et de gouvernement depuis la crise financière de 2008. Les grandes conférences des Nations unies sur le climat (COP) tentent, elles, de réguler les effets environnementaux de la croissance mondiale, avec par exemple l'accord de Paris de 2015.",
              ],
              box: { label: "Définition", text: "Régulation : ensemble des règles, des institutions et des actions qui encadrent le fonctionnement de la mondialisation pour en limiter les excès et en résoudre les conflits." },
            },
            {
              heading: "Des tensions à toutes les échelles",
              paragraphs: [
                "Les tensions commerciales se multiplient. Depuis 2018, les États-Unis et la Chine se livrent une guerre commerciale faite de hausses réciproques des droits de douane, relancée en 2025 par de nouvelles hausses décidées par Washington. Le protectionnisme, c'est-à-dire la protection de la production nationale contre la concurrence étrangère, revient au premier plan. L'OMC elle-même est fragilisée : son organe d'appel est paralysé depuis fin 2019, faute d'accord pour nommer ses juges.",
                "La mondialisation suscite aussi des tensions sociales et politiques. Les délocalisations ont contribué à la désindustrialisation de régions entières dans les pays anciennement industrialisés, nourrissant un sentiment de déclassement. Le mouvement altermondialiste, apparu au grand jour lors des manifestations contre la conférence de l'OMC à Seattle en 1999, conteste une mondialisation jugée injuste.",
                "Les tensions sont enfin géopolitiques et environnementales : concurrence pour les ressources stratégiques (terres rares, métaux de la transition énergétique), insécurité sur les routes maritimes (attaques contre les navires en mer Rouge depuis fin 2023), conflits d'usage autour de l'eau ou des terres agricoles.",
              ],
            },
            {
              heading: "L'intégration régionale, coopération et concurrence",
              paragraphs: [
                "Les États se regroupent par grandes régions pour faciliter leurs échanges : c'est la régionalisation. Les accords se distinguent par leur degré d'intégration. Une zone de libre-échange supprime les droits de douane entre les membres (ACEUM entre États-Unis, Mexique et Canada, qui a remplacé l'ALENA en 2020). Une union douanière y ajoute un tarif extérieur commun (Mercosur, créé en 1991). Un marché commun permet en plus la libre circulation des personnes et des capitaux. L'union économique et monétaire partage enfin une monnaie : c'est le cas de la zone euro au sein de l'Union européenne.",
                "En Asie, l'ASEAN (1967) et le partenariat économique régional global (RCEP), entré en vigueur en 2022, rassemblent des économies très diverses. En Afrique, la Zone de libre-échange continentale africaine (ZLECAf) se met en place depuis la fin des années 2010. Ces ensembles coopèrent à l'intérieur, mais se concurrencent entre eux.",
              ],
              box: { label: "Repère", text: "Du moins intégré au plus intégré : zone de libre-échange, union douanière (tarif extérieur commun), marché commun (libre circulation des facteurs de production), union économique et monétaire (monnaie unique)." },
            },
            {
              heading: "À l'échelle locale : conflits d'aménagement et initiatives",
              paragraphs: [
                "Localement, la mondialisation se traduit par des projets d'infrastructures, des implantations d'usines ou d'entrepôts logistiques, mais aussi par des fermetures de sites. Ces décisions provoquent des conflits d'aménagement qui opposent entreprises, élus, habitants et associations. En France, le projet d'aéroport de Notre-Dame-des-Landes, près de Nantes, contesté pendant des décennies, a été abandonné par l'État en 2018.",
                "Les collectivités locales, les associations et les entreprises inventent aussi des formes de régulation à leur échelle : circuits courts, labels de qualité ou d'origine, clauses sociales et environnementales dans les marchés publics, coopérations entre villes. La régulation de la mondialisation est donc multiscalaire : elle se joue à la fois à Genève, à Bruxelles et dans chaque territoire.",
              ],
              box: { label: "À retenir", text: "Coopérations, tensions et régulations s'emboîtent : un même phénomène (une délocalisation, un droit de douane, un projet portuaire) peut être analysé aux échelles mondiale, régionale et locale." },
            },
          ],
          keyPoints: [
            "L'OMC (1995, Genève) fixe les règles du commerce mondial ; elle a succédé au GATT (1947).",
            "G7 et G20 sont des instances de concertation ; le G20 réunit les chefs d'État depuis la crise de 2008.",
            "Tensions : guerre commerciale sino-américaine depuis 2018, retour du protectionnisme, désindustrialisation, contestation altermondialiste.",
            "Degrés d'intégration régionale : zone de libre-échange, union douanière, marché commun, union économique et monétaire.",
            "Exemples : ACEUM (2020), Mercosur (1991), ASEAN (1967), RCEP (2022), UE et zone euro.",
            "Localement, la mondialisation provoque des conflits d'aménagement (Notre-Dame-des-Landes, abandonné en 2018).",
          ],
          example: {
            statement: "Montrez que la guerre commerciale entre les États-Unis et la Chine illustre à la fois les tensions de la mondialisation et les limites de sa régulation.",
            solution: [
              "Présenter le phénomène : depuis 2018, les deux premières économies mondiales augmentent réciproquement leurs droits de douane sur une large part de leurs échanges ; les hausses reprennent en 2025.",
              "Identifier la tension : les États-Unis dénoncent un déficit commercial massif et des pratiques jugées déloyales (subventions publiques, transferts de technologie imposés) ; la Chine riposte par ses propres taxes.",
              "Montrer les effets aux autres échelles : des entreprises réorganisent leurs chaînes de valeur vers le Vietnam ou le Mexique ; certaines régions agricoles américaines ont perdu des débouchés.",
              "Identifier les limites de la régulation : l'OMC devrait arbitrer ce type de différend, mais son organe d'appel est paralysé depuis fin 2019, et les grandes puissances préfèrent le rapport de force.",
              "Conclusion : ce conflit montre que la mondialisation est traversée par des rivalités de puissance que les institutions multilatérales peinent à réguler.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les accords suivants selon leur degré d'intégration, du moins intégré au plus intégré, et justifiez : zone euro, ACEUM, Mercosur.",
              hint: "Repérez pour chacun ce qui est partagé : la suppression des droits de douane, un tarif extérieur commun, une monnaie.",
              solution: [
                "L'ACEUM est une zone de libre-échange : les droits de douane sont supprimés pour l'essentiel entre les trois membres, mais chacun garde sa politique commerciale vis-à-vis du reste du monde.",
                "Le Mercosur est une union douanière : il ajoute au libre-échange un tarif extérieur commun.",
                "La zone euro est une union économique et monétaire : ses membres partagent le marché unique européen et une monnaie commune gérée par la Banque centrale européenne.",
                "Résultat : ACEUM, puis Mercosur, puis zone euro.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise textile ferme son usine dans une petite ville française et transfère sa production en Asie (situation fictive). Identifiez les acteurs concernés et les tensions que cette décision peut provoquer à l'échelle locale, nationale et mondiale.",
              hint: "Pensez aux salariés, aux élus, à l'État, aux syndicats, mais aussi aux consommateurs et aux pays d'accueil.",
              solution: [
                "Échelle locale : les salariés perdent leur emploi, les commerces et les sous-traitants voient leur activité baisser, les élus cherchent un repreneur ; la tension oppose l'entreprise aux salariés et aux syndicats.",
                "Échelle nationale : l'État peut être sollicité (aides à la reconversion, débat sur la réindustrialisation) ; la fermeture nourrit le débat public sur les délocalisations.",
                "Échelle mondiale : la production rejoint une région à main-d'œuvre moins coûteuse ; elle crée des emplois dans le pays d'accueil, mais pose parfois la question des conditions de travail.",
                "Le consommateur bénéficie éventuellement de prix plus bas, ce qui montre que les gagnants et les perdants de la mondialisation ne sont pas les mêmes.",
                "Résultat : une même décision crée des tensions emboîtées, de l'atelier fermé jusqu'à la division internationale du travail.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « Comment la mondialisation est-elle régulée, et avec quelles limites ? » Proposez une introduction (accroche, définition, problématique, annonce du plan) et un plan détaillé en deux ou trois parties, avec des exemples précis.",
              hint: "Partez des acteurs de la régulation (États, organisations internationales, ensembles régionaux, acteurs locaux), puis montrez ce qui la fragilise (rivalités de puissance, blocage de l'OMC).",
              solution: [
                "Introduction : depuis 2018, la guerre commerciale entre les États-Unis et la Chine rappelle que la mondialisation n'est pas un processus spontané et pacifique. La régulation désigne l'ensemble des règles et des institutions qui l'encadrent. Problématique : quels acteurs régulent la mondialisation et pourquoi cette régulation reste-t-elle fragile ? Annonce : nous verrons la régulation mondiale, les échelons régionaux et locaux, puis les limites.",
                "I. Une régulation mondiale construite depuis 1945 : FMI et Banque mondiale (1944), GATT (1947) puis OMC (1995) et son règlement des différends ; G7 et G20 ; COP et accord de Paris (2015).",
                "II. Des régulations régionales et locales : intégration régionale (UE, ACEUM, Mercosur, RCEP), normes européennes ; à l'échelle locale, collectivités et associations (circuits courts, labels, conflits d'aménagement comme Notre-Dame-des-Landes).",
                "III. Une régulation fragilisée : retour du protectionnisme et rivalités de puissance ; paralysie de l'organe d'appel de l'OMC depuis 2019 ; difficultés à réguler les questions environnementales et sociales.",
                "Conclusion : la mondialisation est régulée à plusieurs échelles, mais cette régulation dépend de la volonté des grandes puissances, qui privilégient aujourd'hui souvent le rapport de force.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : coopérations, tensions et régulations.",
            statements: [
              { text: "L'OMC a été créée en 1995 et a succédé au GATT.", true: true, why: "Le GATT, signé en 1947, a laissé la place à l'OMC le 1er janvier 1995." },
              { text: "Le Mercosur est une simple zone de libre-échange, sans tarif extérieur commun.", true: false, why: "Le Mercosur est une union douanière : il dispose d'un tarif extérieur commun." },
              { text: "Le G20 associe aux pays du G7 de grandes économies émergentes comme la Chine, l'Inde ou le Brésil.", true: true, why: "C'est ce qui le distingue du G7, limité à des pays anciennement industrialisés." },
              { text: "La régulation de la mondialisation se fait uniquement à l'échelle mondiale.", true: false, why: "Elle est multiscalaire : ensembles régionaux, États et acteurs locaux y participent aussi." },
              { text: "L'ACEUM a remplacé l'ALENA en 2020.", true: true, why: "L'accord États-Unis, Mexique, Canada est entré en vigueur en juillet 2020." },
              { text: "Le mouvement altermondialiste refuse toute forme d'échanges internationaux.", true: false, why: "Il conteste les modalités jugées injustes de la mondialisation et réclame une autre mondialisation, pas la fin des échanges." },
            ],
          },
          quiz: [
            {
              q: "Où se trouve le siège de l'OMC ?",
              options: ["À New York", "À Genève", "À Bruxelles", "À Washington, près du FMI"],
              answer: 1,
              why: "L'OMC siège à Genève, en Suisse, comme plusieurs autres organisations internationales.",
            },
            {
              q: "Qu'est-ce qui distingue une union douanière d'une zone de libre-échange ?",
              options: ["Une monnaie commune", "La libre circulation des personnes", "Un tarif extérieur commun", "Un parlement élu par tous les citoyens"],
              answer: 2,
              why: "L'union douanière ajoute au libre-échange interne un tarif douanier commun appliqué aux pays tiers.",
            },
            {
              q: "Depuis quand l'organe d'appel de l'OMC est-il paralysé ?",
              options: ["Depuis fin 2019", "Depuis sa création", "Depuis la crise de 1929", "Depuis l'entrée de la Chine en 2001"],
              answer: 0,
              why: "Faute d'accord, en particulier du fait des États-Unis, pour nommer de nouveaux juges, il ne peut plus siéger depuis décembre 2019.",
            },
            {
              q: "Quel exemple illustre un conflit d'aménagement à l'échelle locale en France ?",
              options: ["Le G20 de 2008", "La création de l'euro", "Les accords monétaires de Bretton Woods signés en 1944", "Le projet d'aéroport de Notre-Dame-des-Landes"],
              answer: 3,
              why: "Ce projet près de Nantes a opposé l'État, des élus, des agriculteurs et des militants jusqu'à son abandon en 2018.",
            },
            {
              q: "En quelle année se tiennent les manifestations de Seattle contre l'OMC, symbole de l'altermondialisme ?",
              options: ["1989", "2008", "1999", "2015"],
              answer: 2,
              why: "Fin 1999, la conférence ministérielle de l'OMC à Seattle est perturbée par de grandes manifestations.",
            },
          ],
          trap: "Confondre les degrés d'intégration régionale, par exemple présenter l'ACEUM comme un marché commun ou croire que tous les membres de l'Union européenne utilisent l'euro.",
          method: "Pour une question sur la régulation, organisez systématiquement vos idées par échelle (mondiale, régionale, nationale, locale) et associez à chaque échelle un acteur et un exemple daté.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-rayonnement-attractivite',
          title: 'La France : rayonnement international et inégale attractivité',
          minutes: 30,
          objectives: [
            "Identifier les différentes formes du rayonnement international de la France (économique, diplomatique, militaire, culturel).",
            "Expliquer l'attractivité de la France pour les investisseurs, les touristes et les étudiants étrangers.",
            "Analyser l'inégale attractivité des territoires français dans la mondialisation.",
          ],
          course: [
            {
              heading: "Une puissance moyenne au rayonnement mondial",
              paragraphs: [
                "La France figure parmi les dix premières économies mondiales. Ses grandes entreprises sont présentes sur tous les continents dans le luxe, l'aéronautique (Airbus, groupe européen dont le siège opérationnel est à Toulouse), l'énergie, l'agroalimentaire ou la banque. Elle est aussi une grande puissance agricole exportatrice (vins et spiritueux, céréales).",
                "Son rayonnement est diplomatique et militaire. Membre permanent du Conseil de sécurité de l'ONU depuis 1945, puissance nucléaire, elle dispose de l'un des plus vastes réseaux diplomatiques du monde et de bases militaires à l'étranger (Djibouti, Émirats arabes unis). Paris accueille le siège de l'UNESCO et celui de l'OCDE.",
                "Grâce à ses territoires ultramarins, présents dans tous les océans, la France possède aussi la deuxième zone économique exclusive du monde, d'environ 10 millions de km², ce qui lui donne une présence mondiale exceptionnelle pour un État de sa taille.",
              ],
            },
            {
              heading: "Un rayonnement culturel : le soft power français",
              paragraphs: [
                "Le soft power désigne la capacité d'un État à influencer les autres par l'attraction qu'il exerce (culture, valeurs, langue, modes de vie) plutôt que par la contrainte. La France s'appuie sur sa langue, parlée par plus de 300 millions de personnes selon l'Organisation internationale de la francophonie (OIF), et sur un réseau d'établissements culturels et scolaires à l'étranger (Instituts français, Alliances françaises, lycées français).",
                "Son patrimoine et ses grands événements contribuent à cette image : le Louvre, musée le plus visité au monde, le Festival de Cannes, la gastronomie inscrite au patrimoine culturel immatériel de l'UNESCO (le repas gastronomique des Français, en 2010), ou encore les Jeux olympiques et paralympiques de Paris 2024.",
              ],
              box: { label: "Définition", text: "Soft power (puissance douce) : capacité d'un acteur à obtenir ce qu'il veut par l'attraction et la persuasion (culture, valeurs, image) plutôt que par la force ou l'argent. La notion a été formulée par le politologue américain Joseph Nye." },
            },
            {
              heading: "Un territoire attractif",
              paragraphs: [
                "L'attractivité est la capacité d'un territoire à attirer et retenir des personnes, des activités et des capitaux. La France est la première destination touristique mondiale par le nombre d'arrivées de touristes internationaux (de l'ordre de 100 millions par an). Elle attire aussi les investisseurs : selon le baromètre annuel du cabinet EY, elle est classée depuis la fin des années 2010 au premier rang européen pour le nombre de projets d'investissements étrangers annoncés.",
                "Ses atouts sont nombreux : une position centrale en Europe et un accès au marché unique européen, des infrastructures de qualité (réseau de lignes à grande vitesse, hub de Paris-Charles-de-Gaulle, grands ports), une main-d'œuvre qualifiée, une recherche reconnue. L'État cherche à renforcer cette image, par exemple avec le sommet « Choose France » qui réunit chaque année depuis 2018 des dirigeants d'entreprises étrangères.",
                "Cette attractivité a des limites : une fiscalité et des coûts du travail jugés élevés par certains investisseurs, une désindustrialisation ancienne, et la concurrence d'autres pays européens (Royaume-Uni, Allemagne) pour les sièges sociaux et les grands projets.",
              ],
              box: { label: "Définition", text: "Attractivité : capacité d'un territoire à attirer et à retenir des populations (habitants, touristes, étudiants), des entreprises et des capitaux." },
            },
            {
              heading: "Des territoires inégalement attractifs",
              paragraphs: [
                "L'Île-de-France concentre une part considérable des sièges sociaux, des emplois de cadres, des investissements étrangers et des visiteurs. Paris est une métropole mondiale. Les grandes métropoles régionales (Lyon, Toulouse, Bordeaux, Nantes, Lille, Marseille) sont également attractives, souvent grâce à une spécialisation (aéronautique à Toulouse, microélectronique à Grenoble).",
                "Les littoraux (Côte d'Azur, façade atlantique), les régions frontalières dynamiques (Genevois français, bassin lorrain proche du Luxembourg) et les espaces touristiques de montagne bénéficient aussi de la mondialisation. À l'inverse, certains anciens bassins industriels du Nord-Est et des espaces ruraux de faible densité (de la Meuse aux Landes, la « diagonale des faibles densités ») restent moins attractifs, même si ces espaces ne sont pas homogènes.",
                "Les territoires ultramarins présentent des situations contrastées : ils sont des points d'appui stratégiques (le Centre spatial guyanais à Kourou), mais restent souvent dépendants de la métropole et marqués par un chômage plus élevé.",
              ],
              box: { label: "À retenir", text: "Le rayonnement de la France est mondial, mais son attractivité profite d'abord à Paris, aux métropoles, aux littoraux et à certaines régions frontalières : la mondialisation accentue les contrastes territoriaux." },
            },
          ],
          keyPoints: [
            "La France est l'une des dix premières économies mondiales, membre permanent du Conseil de sécurité et puissance nucléaire.",
            "Elle possède la 2e ZEE du monde (environ 10 millions de km²) grâce à ses outre-mer.",
            "Soft power : langue française (plus de 300 millions de locuteurs selon l'OIF), culture, patrimoine, grands événements.",
            "Première destination touristique mondiale et, selon EY, premier pays européen pour le nombre de projets d'investissements étrangers.",
            "L'attractivité est inégale : Île-de-France, métropoles, littoraux et frontières dynamiques s'opposent à des espaces en difficulté.",
          ],
          example: {
            statement: "Montrez que la France exerce un rayonnement international qui ne se limite pas à l'économie.",
            solution: [
              "Rayonnement économique : grandes entreprises mondialisées (luxe, aéronautique, énergie), exportations agricoles et industrielles.",
              "Rayonnement diplomatique : membre permanent du Conseil de sécurité de l'ONU, réseau diplomatique très étendu, sièges de l'UNESCO et de l'OCDE à Paris.",
              "Rayonnement militaire : puissance nucléaire, capacité à intervenir à l'étranger, bases à Djibouti ou aux Émirats arabes unis.",
              "Rayonnement culturel : langue française et francophonie, réseau des Instituts et Alliances françaises, patrimoine et grands événements (Paris 2024).",
              "Rayonnement maritime et spatial : deuxième ZEE du monde, Centre spatial guyanais à Kourou.",
              "Conclusion : la France combine des formes de puissance variées, ce qui lui donne une influence mondiale supérieure à son poids démographique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants selon la forme de rayonnement qu'ils illustrent (économique, diplomatique, militaire, culturel) : a) le Festival de Cannes ; b) le siège permanent au Conseil de sécurité ; c) la base de Djibouti ; d) Airbus ; e) les Alliances françaises.",
              hint: "Demandez-vous si l'élément relève de la production et des échanges, des relations entre États, de la défense ou de la culture.",
              solution: [
                "a) Le Festival de Cannes : rayonnement culturel (soft power).",
                "b) Le siège permanent au Conseil de sécurité : rayonnement diplomatique.",
                "c) La base de Djibouti : rayonnement militaire.",
                "d) Airbus : rayonnement économique (aéronautique, exportations).",
                "e) Les Alliances françaises : rayonnement culturel (diffusion de la langue française).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi l'Île-de-France est le territoire le plus attractif de France, puis nuancez en montrant que d'autres territoires sont également attractifs.",
              hint: "Utilisez les notions de métropole mondiale, de hub et de fonctions de commandement, puis pensez aux métropoles régionales spécialisées et aux régions frontalières.",
              solution: [
                "L'Île-de-France est dominée par Paris, métropole mondiale qui concentre les fonctions de commandement : pouvoir politique, sièges sociaux, place financière, grandes universités et centres de recherche.",
                "Elle est un hub de transport (aéroports de Paris-Charles-de-Gaulle et d'Orly, gares TGV) et la première destination touristique du pays.",
                "Elle attire donc une grande part des investissements étrangers, des emplois qualifiés et des visiteurs.",
                "Nuance : des métropoles régionales sont aussi attractives grâce à leur spécialisation (Toulouse et l'aéronautique, Grenoble et la microélectronique, Lyon) ; des régions frontalières comme le Genevois français profitent de leur voisinage.",
                "Résultat : l'Île-de-France domine, mais l'attractivité se diffuse vers un réseau de métropoles et de territoires dynamiques.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (analyse de document) : un article de presse (document fictif construit pour l'exercice) explique qu'un groupe étranger choisit d'implanter une usine de batteries électriques près de Dunkerque, en citant le port, l'accès à une électricité décarbonée, la main-d'œuvre industrielle et les aides publiques. Montrez ce que ce document révèle de l'attractivité de la France, puis indiquez ses limites.",
              hint: "Relevez les facteurs d'attractivité cités, rattachez-les au cours (accessibilité, ressources, politiques publiques), puis demandez-vous ce que le document ne dit pas.",
              solution: [
                "Présentation : le document est un article de presse (fictif) consacré à l'implantation d'une usine étrangère dans le Nord de la France, ancien bassin industriel.",
                "Facteurs d'attractivité relevés : l'accessibilité (port de Dunkerque, ouvert sur la Northern Range et la mer du Nord), une énergie électrique peu émettrice de CO₂, une main-d'œuvre ayant une tradition industrielle, des aides publiques.",
                "Mise en relation avec le cours : ces facteurs confirment l'attractivité de la France pour les investissements étrangers et montrent le rôle des politiques publiques de réindustrialisation.",
                "Portée : l'exemple montre qu'un ancien bassin industriel peut redevenir attractif grâce à sa position d'interface.",
                "Limites : le document présente un seul cas, ne dit rien des territoires qui ne bénéficient pas de tels projets, ni du coût des aides publiques ou des risques (dépendance à une entreprise étrangère).",
                "Conclusion : la France attire des investissements industriels, mais cette attractivité reste sélective et repose sur des atouts que tous les territoires ne possèdent pas.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément au type de rayonnement ou d'atout qu'il illustre.",
            pairs: [
              { left: "Conseil de sécurité de l'ONU", right: "Rayonnement diplomatique" },
              { left: "Organisation internationale de la francophonie", right: "Soft power par la langue" },
              { left: "Kourou", right: "Rayonnement spatial depuis l'outre-mer" },
              { left: "Choose France", right: "Politique d'attractivité des investissements étrangers" },
              { left: "Deuxième ZEE du monde", right: "Puissance maritime grâce aux outre-mer" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la superficie approximative de la ZEE française ?",
              options: ["1 million de km²", "Environ 10 millions de km²", "100 millions de km²", "Elle est inférieure à celle de la Belgique"],
              answer: 1,
              why: "Grâce à ses outre-mer, la France possède environ 10 millions de km² de ZEE, la deuxième du monde.",
            },
            {
              q: "Quel organisme a son siège à Paris ?",
              options: ["L'UNESCO", "L'OMC", "L'OTAN", "Le Fonds monétaire international"],
              answer: 0,
              why: "L'UNESCO, l'organisation des Nations unies pour l'éducation, la science et la culture, siège à Paris, tout comme l'OCDE.",
            },
            {
              q: "Le soft power désigne :",
              options: ["la puissance militaire d'un État", "la capacité d'influencer par l'attraction", "l'ensemble des ressources minières", "la richesse produite chaque année par un pays"],
              answer: 1,
              why: "Le soft power, notion de Joseph Nye, repose sur l'attraction culturelle et l'image, et non sur la contrainte.",
            },
            {
              q: "Quel ensemble d'espaces est le moins attractif dans la mondialisation ?",
              options: ["L'Île-de-France", "Les métropoles régionales comme Lyon ou Toulouse", "Le Genevois français", "Les espaces ruraux de faible densité"],
              answer: 3,
              why: "Les espaces ruraux de faible densité, éloignés des métropoles, attirent moins d'investissements et de population, même s'ils sont divers.",
            },
            {
              q: "Quelle ville est le grand pôle de l'aéronautique en France ?",
              options: ["Strasbourg", "Lille", "Toulouse", "Brest, grand port militaire"],
              answer: 2,
              why: "Toulouse accueille les chaînes d'assemblage et le siège opérationnel d'Airbus, au cœur d'une filière aéronautique et spatiale.",
            },
          ],
          trap: "Confondre rayonnement et attractivité : le rayonnement est l'influence que la France exerce à l'extérieur, l'attractivité est sa capacité à attirer chez elle personnes, entreprises et capitaux.",
          method: "Construisez un tableau à deux colonnes (atouts et limites) pour chaque forme de rayonnement et d'attractivité : il vous fournira directement le plan d'une réponse nuancée.",
        },
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 3 : LES REMISES EN CAUSE DES ANNÉES 1970 À 1991       */
    /* ==================================================================== */
    {
      id: 'remises-en-cause',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'equilibres-economiques',
          title: 'La modification des grands équilibres économiques mondiaux',
          minutes: 30,
          objectives: [
            "Expliquer la fin du système monétaire de Bretton Woods et les chocs pétroliers de 1973 et 1979.",
            "Caractériser la crise des années 1970 : stagflation, chômage de masse, désindustrialisation.",
            "Présenter le tournant libéral des années 1980 (Thatcher, Reagan) et l'ouverture de la Chine de Deng Xiaoping.",
            "Situer les nouveaux acteurs de l'économie mondiale : pays exportateurs de pétrole, nouveaux pays industrialisés d'Asie.",
          ],
          course: [
            {
              heading: "La fin du système de Bretton Woods",
              paragraphs: [
                "Depuis les accords de Bretton Woods (1944), le système monétaire international reposait sur des taux de change fixes et sur le dollar, seule monnaie convertible en or (35 dollars l'once). À la fin des années 1960, les déficits américains, alourdis par la guerre du Vietnam, multiplient les dollars en circulation dans le monde, et la confiance dans leur convertibilité s'effrite.",
                "Le 15 août 1971, le président Richard Nixon suspend la convertibilité du dollar en or. En 1973, les grandes monnaies se mettent à flotter, c'est-à-dire que leur valeur fluctue selon l'offre et la demande ; les accords de la Jamaïque (1976) entérinent ce système de changes flottants. Le dollar reste la monnaie de référence, mais l'instabilité monétaire devient durable.",
              ],
              box: { label: "Repère", text: "15 août 1971 : suspension de la convertibilité du dollar en or. 1973 : généralisation des changes flottants. 1976 : accords de la Jamaïque." },
            },
            {
              heading: "Les chocs pétroliers et la crise",
              paragraphs: [
                "En octobre 1973, pendant la guerre du Kippour qui oppose Israël à l'Égypte et à la Syrie, les pays arabes producteurs de pétrole décident un embargo contre les États qui soutiennent Israël, et l'OPEP (Organisation des pays exportateurs de pétrole, créée en 1960) augmente fortement ses prix : le prix du baril est environ multiplié par quatre en quelques mois. C'est le premier choc pétrolier. En 1979, la révolution iranienne, puis la guerre entre l'Iran et l'Irak (à partir de 1980), provoquent le second choc pétrolier.",
                "Les pays industrialisés, très dépendants d'un pétrole jusque-là bon marché, entrent dans une crise durable : ralentissement de la croissance, inflation élevée et hausse du chômage. Les économistes parlent de stagflation, mélange inédit de stagnation et d'inflation. Les industries anciennes (textile, sidérurgie, charbon, construction navale) déclinent, concurrencées par de nouveaux pays producteurs : c'est la désindustrialisation de régions entières.",
                "Les pays producteurs de pétrole, eux, accumulent des revenus considérables (les « pétrodollars »), largement placés dans les banques occidentales qui les prêtent ensuite à des pays en développement. Lorsque les taux d'intérêt américains s'envolent à partir de 1979, plusieurs de ces pays ne peuvent plus rembourser : en août 1982, le Mexique se déclare en cessation de paiement, ouvrant la crise de la dette des pays du Sud.",
              ],
              box: { label: "Définition", text: "Stagflation : situation économique qui associe une croissance faible ou nulle (stagnation), une forte inflation et un chômage élevé. Elle caractérise les pays industrialisés après les chocs pétroliers." },
            },
            {
              heading: "Le tournant libéral des années 1980",
              paragraphs: [
                "Face à la crise, les politiques keynésiennes de relance par la dépense publique, efficaces pendant les Trente Glorieuses, semblent impuissantes. Des économistes comme Friedrich Hayek ou Milton Friedman inspirent un retour au libéralisme économique : réduire le rôle de l'État, lutter d'abord contre l'inflation, libérer les marchés.",
                "Au Royaume-Uni, Margaret Thatcher, Première ministre de 1979 à 1990, privatise de grandes entreprises publiques (British Telecom en 1984), réduit le pouvoir des syndicats (longue grève des mineurs de 1984-1985) et déréglemente la place financière de Londres (le « Big Bang » de 1986). Aux États-Unis, Ronald Reagan, président de 1981 à 1989, baisse les impôts, déréglemente l'économie et affirme dans son discours d'investiture que l'État est le problème plutôt que la solution. Cette dérégulation, étendue aux marchés financiers, accélère la mondialisation des capitaux.",
              ],
              box: { label: "Définition", text: "Néolibéralisme : courant de pensée et de politiques économiques qui prône le recul de l'intervention de l'État, la privatisation, la déréglementation des marchés et la priorité à la lutte contre l'inflation." },
            },
            {
              heading: "De nouveaux acteurs : la Chine et les pays émergents d'Asie",
              paragraphs: [
                "En Chine, après la mort de Mao Zedong (1976), Deng Xiaoping engage à partir de décembre 1978 une politique de réformes et d'ouverture. Les terres sont confiées aux familles paysannes, l'initiative privée est tolérée puis encouragée, et des zones économiques spéciales (Shenzhen dès 1980) accueillent les capitaux étrangers. Le Parti communiste conserve cependant le monopole du pouvoir politique.",
                "Dans le même temps, les nouveaux pays industrialisés (NPI) d'Asie, les « quatre dragons » (Corée du Sud, Taïwan, Hong Kong, Singapour), connaissent une croissance rapide fondée sur les exportations. Le Japon, deuxième économie du monde depuis la fin des années 1960, s'impose comme une puissance industrielle et financière de premier plan. Le centre de gravité de l'économie mondiale commence à se déplacer vers l'Asie, tandis que de nombreux pays d'Afrique et d'Amérique latine vivent une « décennie perdue », marquée par la dette et les plans d'ajustement structurel du FMI.",
              ],
              box: { label: "À retenir", text: "Entre 1971 et la fin des années 1980, l'ordre économique de l'après-guerre se défait : fin des changes fixes, chocs pétroliers, crise, tournant libéral, émergence de l'Asie. Ces bouleversements préparent la mondialisation des années 1990." },
            },
          ],
          keyPoints: [
            "15 août 1971 : Nixon suspend la convertibilité du dollar en or ; les changes deviennent flottants en 1973.",
            "1973 (guerre du Kippour) et 1979 (révolution iranienne) : deux chocs pétroliers provoqués par la hausse des prix de l'OPEP.",
            "La crise associe stagflation, chômage de masse et désindustrialisation dans les pays industrialisés.",
            "Tournant néolibéral : Thatcher (1979-1990) et Reagan (1981-1989) privatisent, déréglementent, baissent les impôts.",
            "Chine : réformes et ouverture de Deng Xiaoping à partir de 1978 ; essor des « quatre dragons » asiatiques.",
            "1982 : le Mexique en cessation de paiement ouvre la crise de la dette des pays du Sud.",
          ],
          example: {
            statement: "Expliquez pourquoi l'année 1979 peut être considérée comme un tournant économique mondial.",
            solution: [
              "Rappeler le contexte : depuis 1973, les pays industrialisés connaissent la stagflation ; les politiques de relance échouent à l'enrayer.",
              "Le second choc pétrolier : la révolution iranienne de 1979 désorganise la production et provoque une nouvelle flambée des prix du pétrole.",
              "Le tournant libéral : Margaret Thatcher arrive au pouvoir au Royaume-Uni en mai 1979 ; la même année, la Réserve fédérale américaine relève fortement ses taux d'intérêt pour casser l'inflation.",
              "Le tournant chinois : les réformes de Deng Xiaoping, lancées fin 1978, se mettent en place et la Chine prépare ses premières zones économiques spéciales.",
              "Conclusion : 1979 cumule un choc pétrolier, l'entrée dans l'ère néolibérale et le début de l'ouverture chinoise ; elle annonce un nouvel équilibre économique mondial.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants : a) choc pétrolier ; b) stagflation ; c) changes flottants ; d) désindustrialisation.",
              hint: "Pour chaque terme, donnez la définition puis, si possible, une date ou un exemple.",
              solution: [
                "a) Choc pétrolier : hausse brutale et forte du prix du pétrole, comme en 1973 (guerre du Kippour) et en 1979 (révolution iranienne).",
                "b) Stagflation : situation qui associe croissance faible, forte inflation et chômage élevé, typique des années 1970.",
                "c) Changes flottants : système dans lequel la valeur des monnaies varie selon l'offre et la demande, généralisé en 1973 après la fin de la convertibilité du dollar en or.",
                "d) Désindustrialisation : recul de l'emploi et de la production industriels dans un pays ou une région, comme dans les bassins charbonniers et sidérurgiques d'Europe.",
              ],
            },
            {
              level: 2,
              statement: "Comparez les politiques de Margaret Thatcher et de Deng Xiaoping : en quoi vont-elles dans le même sens, et en quoi sont-elles profondément différentes ?",
              hint: "Regardez le rôle donné au marché dans les deux cas, puis le régime politique de chaque pays.",
              solution: [
                "Point commun : les deux dirigeants donnent une place plus grande au marché et à l'initiative privée ; Thatcher privatise et déréglemente, Deng autorise l'entreprise privée et ouvre la Chine aux capitaux étrangers.",
                "Point commun : ces politiques s'inscrivent dans le même mouvement d'ouverture qui prépare la mondialisation des années 1990.",
                "Différence de point de départ : le Royaume-Uni est une économie de marché où l'État s'était renforcé après 1945, la Chine une économie planifiée collectiviste.",
                "Différence politique majeure : Thatcher gouverne dans une démocratie parlementaire et quitte le pouvoir en 1990 ; Deng réforme l'économie sans démocratiser le régime, le Parti communiste gardant le monopole du pouvoir.",
                "Résultat : convergence vers le marché, mais dans deux cadres politiques opposés.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « En quoi les années 1970 et 1980 modifient-elles les grands équilibres économiques mondiaux ? » Rédigez l'introduction et le plan détaillé de votre réponse.",
              hint: "Suivez une logique chronologique et thématique : la fin de l'ordre d'après-guerre, la crise, puis les réponses et les nouveaux acteurs.",
              solution: [
                "Introduction : depuis 1945, la croissance des pays industrialisés reposait sur des changes fixes, un pétrole bon marché et l'intervention de l'État. Problématique : comment cet équilibre se défait-il entre 1971 et la fin des années 1980, et quel nouvel ordre économique se dessine ? Annonce : la fin de l'ordre de Bretton Woods et les chocs pétroliers, la crise et le tournant néolibéral, l'émergence de nouveaux acteurs.",
                "I. La fin de l'ordre d'après-guerre : suspension de la convertibilité du dollar en or (15 août 1971), changes flottants (1973, accords de la Jamaïque en 1976) ; chocs pétroliers de 1973 et 1979, affirmation de l'OPEP.",
                "II. La crise et le tournant néolibéral : stagflation, chômage de masse, désindustrialisation ; échec des relances keynésiennes ; Thatcher (1979) et Reagan (1981) privatisent, déréglementent, dérégulent la finance.",
                "III. Un monde économique recomposé : ouverture de la Chine de Deng Xiaoping (1978, ZES en 1980), essor des « quatre dragons » et du Japon ; crise de la dette des pays du Sud (Mexique, 1982) et ajustement structurel.",
                "Conclusion : en deux décennies, le monde passe d'une économie encadrée par les États à une économie plus libéralisée et plus multipolaire, prélude à la mondialisation des années 1990.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Suspension de la convertibilité du dollar en or par Richard Nixon",
              "Premier choc pétrolier pendant la guerre du Kippour",
              "Lancement des réformes de Deng Xiaoping en Chine",
              "Arrivée de Margaret Thatcher au pouvoir au Royaume-Uni",
              "Début de la présidence de Ronald Reagan",
              "Cessation de paiement du Mexique, début de la crise de la dette",
              "« Big Bang » de la place financière de Londres",
            ],
          },
          quiz: [
            {
              q: "Quel événement déclenche le premier choc pétrolier en 1973 ?",
              options: ["La révolution iranienne", "La guerre du Kippour", "La guerre entre l'Iran et l'Irak", "La création de l'OPEP par plusieurs pays exportateurs"],
              answer: 1,
              why: "L'embargo et la hausse des prix décidés par les pays arabes producteurs pendant la guerre du Kippour (octobre 1973) provoquent le premier choc.",
            },
            {
              q: "Que décide Richard Nixon le 15 août 1971 ?",
              options: ["Il crée le FMI", "Il dévalue le yen", "Il suspend la convertibilité du dollar en or", "Il signe de nouveaux accords monétaires à Bretton Woods"],
              answer: 2,
              why: "Cette décision met fin au cœur du système de Bretton Woods, fondé sur un dollar convertible en or.",
            },
            {
              q: "Quel terme désigne la combinaison de croissance faible, d'inflation et de chômage ?",
              options: ["La stagflation", "La déflation", "La récession mondiale de 1929", "La croissance extensive"],
              answer: 0,
              why: "La stagflation, contraction de stagnation et inflation, caractérise les pays industrialisés après 1973.",
            },
            {
              q: "Lequel de ces pays ne fait PAS partie des « quatre dragons » asiatiques ?",
              options: ["Taïwan", "Singapour", "La Corée du Sud", "L'Inde"],
              answer: 3,
              why: "Les quatre dragons sont la Corée du Sud, Taïwan, Hong Kong et Singapour ; l'Inde s'ouvre plus tard, au début des années 1990.",
            },
            {
              q: "Quelle mesure est caractéristique de la politique de Margaret Thatcher ?",
              options: ["La nationalisation des banques", "La privatisation d'entreprises publiques", "La hausse des impôts sur les hauts revenus", "Le renforcement du pouvoir des syndicats ouvriers"],
              answer: 1,
              why: "Thatcher privatise de nombreuses entreprises publiques (British Telecom en 1984) et réduit le rôle de l'État.",
            },
          ],
          trap: "Croire que la crise des années 1970 s'explique uniquement par les chocs pétroliers : la fin du système de Bretton Woods, l'essoufflement des gains de productivité et la concurrence de nouveaux pays industriels jouent aussi.",
          method: "Construisez une frise de 1971 à 1989 sur trois lignes (monnaie et énergie, politiques économiques, nouveaux acteurs) : elle vous permettra de croiser les événements et de rédiger des paragraphes articulés.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recompositions-politiques',
          title: 'Recompositions politiques du monde jusqu\'à la fin de l\'URSS',
          minutes: 35,
          objectives: [
            "Expliquer la démocratisation de l'Europe du Sud et de l'Amérique latine dans les années 1970 et 1980.",
            "Analyser l'affirmation de l'islamisme politique à partir de la révolution iranienne de 1979.",
            "Expliquer l'effondrement du bloc soviétique puis la disparition de l'URSS (1985-1991).",
            "Situer les grandes dates de 1974 à 1991 sur une frise chronologique.",
          ],
          course: [
            {
              heading: "Des démocratisations en Europe du Sud et en Amérique latine",
              paragraphs: [
                "En Europe du Sud, les dernières dictatures tombent au milieu des années 1970. Au Portugal, la révolution des Œillets du 25 avril 1974, menée par de jeunes officiers, renverse le régime autoritaire hérité de Salazar. En Grèce, la dictature des colonels s'effondre en juillet 1974. En Espagne, la mort de Franco, le 20 novembre 1975, ouvre une transition démocratique conduite par le roi Juan Carlos et le Premier ministre Adolfo Suárez ; une Constitution démocratique est adoptée en 1978.",
                "Ces nouvelles démocraties s'ancrent en rejoignant la Communauté économique européenne : la Grèce en 1981, l'Espagne et le Portugal en 1986. L'Europe communautaire apparaît alors comme un espace de démocratie et de prospérité.",
                "En Amérique latine, les dictatures militaires installées dans les années 1960 et 1970, souvent avec le soutien des États-Unis au nom de la lutte contre le communisme, cèdent la place à des gouvernements civils : en Argentine en 1983, après la défaite des Malouines face au Royaume-Uni (1982), au Brésil en 1985, au Chili en 1990, après la victoire du « non » au référendum de 1988 qui refuse le maintien du général Pinochet.",
              ],
              box: { label: "Repère", text: "25 avril 1974 : révolution des Œillets au Portugal. 1975 : mort de Franco. 1981 : la Grèce entre dans la CEE. 1986 : entrée de l'Espagne et du Portugal. 1983, 1985, 1990 : retour à la démocratie en Argentine, au Brésil et au Chili." },
            },
            {
              heading: "1979 : la révolution iranienne et l'affirmation de l'islamisme politique",
              paragraphs: [
                "En Iran, le régime du shah Mohammad Reza Pahlavi, allié des États-Unis, modernisateur mais autoritaire, est renversé en 1979 par un vaste mouvement populaire dont l'ayatollah Khomeiny prend la tête. Une République islamique est proclamée au printemps 1979 : le pouvoir suprême revient à un religieux chiite, le Guide de la révolution. En novembre 1979, des étudiants prennent en otages le personnel de l'ambassade des États-Unis à Téhéran pendant 444 jours.",
                "La révolution iranienne marque l'entrée de l'islamisme politique sur la scène internationale : elle se présente comme une alternative à la fois au modèle occidental et au modèle soviétique. La même année, l'URSS envahit l'Afghanistan (décembre 1979) ; la résistance afghane, les moudjahidines, est soutenue par les États-Unis, le Pakistan et l'Arabie saoudite. Ce conflit nourrira plus tard des mouvements djihadistes.",
              ],
              box: { label: "Définition", text: "Islamisme : idéologie politique qui veut organiser l'État et la société selon une lecture rigoriste de l'islam. Elle ne se confond pas avec l'islam, religion pratiquée par des centaines de millions de croyants." },
            },
            {
              heading: "La crise du bloc soviétique et les réformes de Gorbatchev",
              paragraphs: [
                "Au début des années 1980, l'URSS s'essouffle : économie planifiée inefficace, retard technologique, coût de la course aux armements relancée par Ronald Reagan (Initiative de défense stratégique en 1983) et de la guerre d'Afghanistan. Dans les démocraties populaires, la contestation grandit : en Pologne, le syndicat indépendant Solidarność, né en 1980 des grèves des chantiers navals de Gdańsk et dirigé par Lech Wałęsa, rassemble des millions de membres avant d'être interdit lors de l'état de guerre de décembre 1981.",
                "Arrivé au pouvoir en 1985, Mikhaïl Gorbatchev veut sauver le système en le réformant : la perestroïka (restructuration) introduit des éléments de marché, la glasnost (transparence) libère la parole et la presse. La catastrophe nucléaire de Tchernobyl (26 avril 1986) révèle les dysfonctionnements du régime. En politique extérieure, Gorbatchev se rapproche des États-Unis (traité sur les forces nucléaires intermédiaires en 1987), retire l'Armée rouge d'Afghanistan (achevé en 1989) et renonce à intervenir militairement dans les démocraties populaires.",
              ],
            },
            {
              heading: "1989-1991 : la chute des régimes communistes et la fin de l'URSS",
              paragraphs: [
                "L'année 1989 voit tomber les régimes communistes d'Europe de l'Est. En Pologne, des élections partiellement libres (juin 1989) donnent la victoire à Solidarność. En Hongrie, la frontière avec l'Autriche est ouverte. En RDA, les manifestations de masse conduisent à l'ouverture du mur de Berlin le 9 novembre 1989 ; l'Allemagne est réunifiée le 3 octobre 1990. En Tchécoslovaquie, la « révolution de velours » porte Václav Havel à la présidence. En Roumanie, le dictateur Ceaușescu est renversé et exécuté en décembre 1989. En revanche, en Chine, le mouvement démocratique de la place Tiananmen est écrasé dans le sang le 4 juin 1989.",
                "L'URSS elle-même se désagrège : les républiques baltes réclament leur indépendance, les nationalismes s'affirment. En août 1991, une tentative de coup d'État des conservateurs échoue, notamment face à la résistance de Boris Eltsine, président de la Russie. En décembre 1991, les présidents de la Russie, de l'Ukraine et de la Biélorussie constatent la fin de l'URSS et créent la Communauté des États indépendants (CEI). Gorbatchev démissionne le 25 décembre 1991 : l'URSS disparaît, et avec elle le monde bipolaire.",
              ],
              box: { label: "À retenir", text: "9 novembre 1989 : ouverture du mur de Berlin. 3 octobre 1990 : réunification allemande. Août 1991 : putsch manqué à Moscou. 25 décembre 1991 : démission de Gorbatchev, fin de l'URSS et de la guerre froide." },
            },
          ],
          keyPoints: [
            "Europe du Sud : fin des dictatures au Portugal (25 avril 1974), en Grèce (1974) et en Espagne (après 1975) ; adhésion à la CEE en 1981 et 1986.",
            "Amérique latine : retour à la démocratie en Argentine (1983), au Brésil (1985), au Chili (1990).",
            "1979 : révolution islamique en Iran (Khomeiny) et invasion soviétique de l'Afghanistan.",
            "Gorbatchev (1985) : perestroïka et glasnost ; Tchernobyl (1986) ; retrait d'Afghanistan (1989).",
            "1989 : chute des régimes communistes d'Europe de l'Est, mur de Berlin ouvert le 9 novembre ; Tiananmen écrasé le 4 juin.",
            "Fin de l'URSS : putsch manqué (août 1991), CEI, démission de Gorbatchev le 25 décembre 1991.",
          ],
          example: {
            statement: "Expliquez pourquoi les réformes de Gorbatchev, destinées à sauver l'URSS, ont contribué à sa disparition.",
            solution: [
              "Rappeler le but : en 1985, Gorbatchev veut moderniser une URSS en crise (stagnation économique, retard technologique, coût de la guerre d'Afghanistan) sans abandonner le socialisme.",
              "Les réformes économiques (perestroïka) introduisent des éléments de marché mais désorganisent la planification sans la remplacer : pénuries et mécontentement augmentent.",
              "La glasnost libère la parole : la presse révèle les crimes du stalinisme et les échecs du régime, comme lors de la catastrophe de Tchernobyl (1986), ce qui affaiblit la légitimité du Parti.",
              "La liberté retrouvée permet l'expression des nationalismes dans les républiques (pays baltes, Caucase, Ukraine) qui réclament leur indépendance.",
              "En renonçant à la force dans les démocraties populaires, Gorbatchev laisse tomber les régimes communistes d'Europe de l'Est en 1989, ce qui encourage les républiques soviétiques.",
              "Conclusion : en libéralisant un système qui reposait sur la contrainte, Gorbatchev a libéré des forces qui l'ont emporté, jusqu'à la fin de l'URSS en décembre 1991.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 25 avril 1974 ; 1979 ; 26 avril 1986 ; 9 novembre 1989 ; 25 décembre 1991. Événements : chute du mur de Berlin, démission de Gorbatchev, révolution des Œillets, révolution iranienne, catastrophe de Tchernobyl.",
              hint: "Commencez par les dates que vous connaissez le mieux (le mur de Berlin, la fin de l'URSS), puis procédez par élimination.",
              solution: [
                "25 avril 1974 : révolution des Œillets au Portugal.",
                "1979 : révolution iranienne et proclamation de la République islamique.",
                "26 avril 1986 : catastrophe nucléaire de Tchernobyl, en Ukraine soviétique.",
                "9 novembre 1989 : ouverture (chute) du mur de Berlin.",
                "25 décembre 1991 : démission de Gorbatchev, fin de l'URSS.",
              ],
            },
            {
              level: 2,
              statement: "Montrez que l'année 1989 est à la fois une année de libération et une année de répression.",
              hint: "Comparez l'Europe de l'Est et la Chine.",
              solution: [
                "Libération en Europe de l'Est : élections partiellement libres en Pologne (juin), ouverture de la frontière hongroise, chute du mur de Berlin (9 novembre), révolution de velours en Tchécoslovaquie, chute de Ceaușescu en Roumanie (décembre).",
                "Cette libération est permise par le choix de Gorbatchev de ne pas intervenir militairement.",
                "Répression en Chine : le mouvement étudiant de la place Tiananmen, qui réclame des libertés politiques, est écrasé par l'armée le 4 juin 1989.",
                "Le Parti communiste chinois maintient son monopole politique tout en poursuivant l'ouverture économique engagée par Deng Xiaoping.",
                "Résultat : 1989 met fin aux régimes communistes européens, mais pas au communisme chinois, qui choisit la répression.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (analyse de document) : le document est la proclamation, en décembre 1991, par les dirigeants de la Russie, de l'Ukraine et de la Biélorussie, que l'URSS cesse d'exister en tant que sujet du droit international et qu'une Communauté d'États indépendants est créée (résumé du texte). Présentez le document, expliquez le contexte de sa rédaction, puis montrez sa portée.",
              hint: "Une analyse de document suit trois temps : présentation (nature, auteurs, date, contexte), explication des idées à l'aide du cours, portée et limites.",
              solution: [
                "Présentation : il s'agit d'un texte officiel (accord diplomatique) signé en décembre 1991 par Boris Eltsine (Russie), Leonid Kravtchouk (Ukraine) et Stanislav Chouchkevitch (Biélorussie), trois des républiques fondatrices de l'URSS en 1922.",
                "Contexte : l'URSS est affaiblie par la crise économique, l'échec des réformes de Gorbatchev, la chute des démocraties populaires en 1989 et les indépendances proclamées par plusieurs républiques ; le putsch manqué d'août 1991 a discrédité le pouvoir central et renforcé Eltsine.",
                "Explication : en constatant la fin de l'URSS, les trois dirigeants privent Gorbatchev de tout pouvoir ; la CEI est une simple structure de coopération entre États souverains, non un nouvel État fédéral.",
                "Portée : Gorbatchev démissionne le 25 décembre 1991 ; l'URSS disparaît, la guerre froide s'achève et quinze États indépendants naissent ; la Russie hérite du siège permanent au Conseil de sécurité.",
                "Limites : la CEI restera un cadre faible ; les tensions entre la Russie et plusieurs anciennes républiques, notamment l'Ukraine, ne sont pas réglées par ce texte.",
                "Conclusion : ce document acte juridiquement la fin d'une superpuissance et ouvre un nouvel ordre mondial.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les recompositions politiques de 1974 à 1991.",
            statements: [
              { text: "La révolution des Œillets a mis fin à la dictature au Portugal en 1974.", true: true, why: "Le 25 avril 1974, de jeunes officiers renversent le régime autoritaire hérité de Salazar." },
              { text: "L'Espagne est entrée dans la CEE dès 1975, juste après la mort de Franco.", true: false, why: "L'Espagne, comme le Portugal, n'entre dans la CEE qu'en 1986, après la consolidation de sa démocratie." },
              { text: "La révolution iranienne de 1979 a été soutenue par les États-Unis.", true: false, why: "Le shah renversé était un allié des États-Unis ; la République islamique s'oppose aussitôt à Washington (prise d'otages de l'ambassade)." },
              { text: "La glasnost désigne la politique de transparence et de liberté d'expression de Gorbatchev.", true: true, why: "La perestroïka désigne la restructuration économique, la glasnost la transparence." },
              { text: "Le mur de Berlin est tombé en 1991, en même temps que l'URSS.", true: false, why: "Le mur est ouvert le 9 novembre 1989 ; l'URSS disparaît plus de deux ans après, en décembre 1991." },
              { text: "En 1989, le Parti communiste chinois réprime le mouvement de la place Tiananmen.", true: true, why: "Le 4 juin 1989, l'armée écrase le mouvement démocratique à Pékin." },
              { text: "Solidarność est un syndicat indépendant polonais né en 1980.", true: true, why: "Il naît des grèves des chantiers navals de Gdańsk, sous la direction de Lech Wałęsa." },
            ],
          },
          quiz: [
            {
              q: "Qui prend la tête de la révolution iranienne de 1979 ?",
              options: ["Le shah Mohammad Reza Pahlavi", "Saddam Hussein", "L'ayatollah Khomeiny", "Anouar el-Sadate, président égyptien"],
              answer: 2,
              why: "L'ayatollah Khomeiny, rentré d'exil en février 1979, devient le Guide de la République islamique.",
            },
            {
              q: "Que désigne la perestroïka ?",
              options: ["La restructuration de l'économie soviétique", "La transparence", "L'invasion de l'Afghanistan", "Le traité de désarmement de 1987 avec les États-Unis"],
              answer: 0,
              why: "La perestroïka (restructuration) est la réforme économique de Gorbatchev ; la glasnost est la transparence.",
            },
            {
              q: "Quand l'Allemagne est-elle réunifiée ?",
              options: ["Le 9 novembre 1989", "Le 25 décembre 1991", "En 1986", "Le 3 octobre 1990"],
              answer: 3,
              why: "La réunification intervient près d'un an après l'ouverture du mur de Berlin, le 3 octobre 1990.",
            },
            {
              q: "Quel pays retrouve la démocratie après le référendum de 1988 refusant le maintien de Pinochet ?",
              options: ["L'Argentine", "Le Chili", "Le Brésil", "Le Mexique"],
              answer: 1,
              why: "Au Chili, la victoire du « non » en 1988 conduit à des élections et au départ de Pinochet de la présidence en 1990.",
            },
            {
              q: "Quel événement précipite la fin de l'URSS en 1991 ?",
              options: ["La catastrophe de Tchernobyl", "La révolution des Œillets", "Le putsch manqué d'août 1991", "L'élection de Ronald Reagan"],
              answer: 2,
              why: "L'échec du coup d'État des conservateurs discrédite le pouvoir central, renforce Eltsine et accélère les indépendances.",
            },
          ],
          trap: "Confondre la chute du mur de Berlin (9 novembre 1989) et la fin de l'URSS (25 décembre 1991) : la première marque l'effondrement du bloc soviétique en Europe de l'Est, la seconde la disparition de l'État soviétique lui-même.",
          method: "Pour une question sur cette période, classez les événements par aire géographique (Europe du Sud, Amérique latine, Moyen-Orient, bloc soviétique) puis montrez le lien commun : le recul des régimes autoritaires, sauf exceptions (Iran, Chine).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-1974-1988',
          title: 'La France de 1974 à 1988 : un tournant social, politique et culturel',
          minutes: 35,
          objectives: [
            "Identifier les grandes réformes de société de la présidence de Valéry Giscard d'Estaing (1974-1981).",
            "Expliquer l'alternance de 1981 et les réformes de la gauche au pouvoir, puis le tournant de la rigueur.",
            "Caractériser les évolutions de la société française : place des femmes, crise et chômage, immigration, culture.",
            "Définir l'alternance et la cohabitation sous la Ve République.",
          ],
          course: [
            {
              heading: "Giscard d'Estaing : moderniser la société (1974-1981)",
              paragraphs: [
                "Élu président de la République en mai 1974, après la mort de Georges Pompidou, Valéry Giscard d'Estaing veut une « société libérale avancée ». Dès 1974, l'âge de la majorité civile et électorale est abaissé de 21 à 18 ans, et la saisine du Conseil constitutionnel est ouverte à 60 députés ou 60 sénateurs, ce qui donne à l'opposition un moyen de contester les lois.",
                "La loi Veil, défendue par la ministre de la Santé Simone Veil devant une Assemblée très majoritairement masculine et hostile en partie, dépénalise l'interruption volontaire de grossesse (IVG) ; promulguée le 17 janvier 1975, elle est votée grâce aux voix de la gauche. La même année, la loi du 11 juillet 1975 autorise le divorce par consentement mutuel, et la réforme Haby instaure le collège unique.",
                "Ces réformes accompagnent les revendications nées après 1968, notamment celles du mouvement féministe (Mouvement de libération des femmes, MLF) qui réclamait la libre disposition de son corps. Mais le septennat est aussi celui de la crise : après le choc pétrolier, le chômage progresse et l'État suspend en juillet 1974 l'immigration de travail.",
              ],
              box: { label: "Repère", text: "1974 : majorité à 18 ans. 17 janvier 1975 : loi Veil sur l'IVG. 11 juillet 1975 : divorce par consentement mutuel et loi Haby (collège unique)." },
            },
            {
              heading: "1981 : l'alternance et les réformes de la gauche",
              paragraphs: [
                "Le 10 mai 1981, François Mitterrand, candidat socialiste, est élu président de la République. C'est la première alternance de la Ve République : la gauche, unie autour du programme commun, arrive au pouvoir pour la première fois depuis 1958. Le gouvernement de Pierre Mauroy compte des ministres communistes.",
                "Les réformes sont nombreuses. La peine de mort est abolie (loi du 9 octobre 1981, défendue par le garde des Sceaux Robert Badinter). Les lois Defferre de 1982 engagent la décentralisation : les préfets perdent leur tutelle sur les collectivités, et la région devient une collectivité territoriale. Les lois Auroux renforcent les droits des salariés dans l'entreprise. Les ordonnances de 1982 fixent la durée légale du travail à 39 heures, instaurent la cinquième semaine de congés payés et la retraite à 60 ans. De grandes entreprises industrielles et des banques sont nationalisées.",
                "Dans le domaine des mœurs et de la culture, l'homosexualité est dépénalisée en 1982, les radios libres sont autorisées, l'IVG est remboursée par la Sécurité sociale (loi de décembre 1982) et la loi Roudy de 1983 affirme l'égalité professionnelle entre les femmes et les hommes. Le ministère de la Culture de Jack Lang lance la Fête de la musique (1982).",
              ],
              box: { label: "Définition", text: "Alternance : passage du pouvoir d'une majorité politique à une autre, par la voie des élections. En 1981, la gauche succède à la droite qui gouvernait depuis le début de la Ve République." },
            },
            {
              heading: "Le tournant de la rigueur et la première cohabitation",
              paragraphs: [
                "La politique de relance de 1981-1982 se heurte à la contrainte extérieure : dans un monde où les autres pays mènent des politiques de rigueur, elle creuse le déficit commercial, entretient l'inflation et affaiblit le franc. En mars 1983, le gouvernement choisit de rester dans le système monétaire européen et adopte une politique de rigueur (maîtrise des dépenses, lutte contre l'inflation). En 1984, Laurent Fabius remplace Pierre Mauroy et les communistes quittent le gouvernement.",
                "En mars 1986, la droite remporte les élections législatives. Mitterrand nomme Jacques Chirac Premier ministre : c'est la première cohabitation, c'est-à-dire la coexistence d'un président et d'une majorité parlementaire de bords opposés. Le gouvernement Chirac privatise des entreprises nationalisées en 1982. En 1988, Mitterrand est réélu face à Chirac et la cohabitation prend fin.",
              ],
              box: { label: "Définition", text: "Cohabitation : situation où le président de la République et la majorité de l'Assemblée nationale, donc le Premier ministre, appartiennent à des camps politiques opposés. Première cohabitation : 1986-1988 (Mitterrand et Chirac)." },
            },
            {
              heading: "Une société transformée et inquiète",
              paragraphs: [
                "La société française change profondément : la place des femmes dans le travail salarié et dans la vie publique progresse, le premier ministère des Droits de la femme est créé en 1981 (Yvette Roudy), les familles se transforment (hausse des divorces, recul du mariage). La culture de masse se diffuse avec la multiplication des radios et l'apparition des premières chaînes de télévision privées au milieu des années 1980.",
                "Mais la crise s'installe : le chômage de masse touche surtout les jeunes et les ouvriers des régions industrielles (sidérurgie lorraine). Les questions liées à l'immigration deviennent un enjeu politique. En 1983, la Marche pour l'égalité et contre le racisme, partie de Marseille, arrive à Paris ; l'association SOS Racisme naît en 1984. La même année, le Front national, parti d'extrême droite, réalise sa première percée électorale nationale aux élections européennes.",
              ],
              box: { label: "À retenir", text: "1974-1988 : la France se libéralise dans ses mœurs (loi Veil, abolition de la peine de mort), connaît l'alternance (1981) et la cohabitation (1986), mais aussi la crise, le chômage de masse et de nouvelles fractures politiques." },
            },
          ],
          keyPoints: [
            "Giscard d'Estaing (1974-1981) : majorité à 18 ans (1974), loi Veil sur l'IVG (17 janvier 1975), divorce par consentement mutuel (1975).",
            "10 mai 1981 : élection de François Mitterrand, première alternance de la Ve République.",
            "Réformes de la gauche : abolition de la peine de mort (9 octobre 1981), décentralisation (lois Defferre, 1982), 39 heures, retraite à 60 ans, nationalisations.",
            "Mars 1983 : tournant de la rigueur.",
            "1986-1988 : première cohabitation (Mitterrand président, Chirac Premier ministre) ; privatisations.",
            "Crise et nouvelles fractures : chômage de masse, Marche pour l'égalité (1983), percée du Front national (1984).",
          ],
          example: {
            statement: "Montrez que l'élection de François Mitterrand en 1981 est un tournant politique et social.",
            solution: [
              "Le tournant politique : c'est la première alternance de la Ve République ; la gauche, absente du pouvoir depuis 1958, gouverne avec des ministres communistes, ce qui prouve que les institutions permettent un changement de majorité.",
              "Les réformes sociales : 39 heures, cinquième semaine de congés payés, retraite à 60 ans, lois Auroux sur les droits des salariés.",
              "Les réformes de société : abolition de la peine de mort (1981), dépénalisation de l'homosexualité (1982), remboursement de l'IVG, égalité professionnelle (loi Roudy, 1983).",
              "La réforme de l'État : les lois Defferre de 1982 engagent la décentralisation.",
              "Nuance : dès 1983, la contrainte économique impose la rigueur, et la gauche perd les législatives de 1986.",
              "Conclusion : 1981 est un tournant durable pour les institutions et les mœurs, même si la politique économique est vite infléchie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des réformes suivantes, indiquez l'année et le président de la République en fonction : a) abolition de la peine de mort ; b) loi Veil sur l'IVG ; c) majorité à 18 ans ; d) lois Defferre de décentralisation.",
              hint: "Valéry Giscard d'Estaing est président de 1974 à 1981, François Mitterrand à partir de mai 1981.",
              solution: [
                "a) Abolition de la peine de mort : 1981 (loi du 9 octobre 1981), sous François Mitterrand.",
                "b) Loi Veil : promulguée le 17 janvier 1975, sous Valéry Giscard d'Estaing.",
                "c) Majorité à 18 ans : 1974, sous Valéry Giscard d'Estaing.",
                "d) Lois Defferre : 1982, sous François Mitterrand.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez la différence entre alternance et cohabitation, en vous appuyant sur les exemples de 1981 et de 1986.",
              hint: "L'alternance concerne le passage du pouvoir d'un camp à l'autre ; la cohabitation, la coexistence de deux camps à la tête de l'exécutif.",
              solution: [
                "L'alternance est le passage du pouvoir d'une majorité politique à une autre par les élections : en 1981, la gauche remplace la droite, avec l'élection de Mitterrand puis la victoire socialiste aux législatives de juin 1981.",
                "La cohabitation est la coexistence d'un président et d'une majorité parlementaire de camps opposés : en 1986, la droite gagne les législatives, et Mitterrand, président socialiste, nomme Jacques Chirac Premier ministre.",
                "En cohabitation, le Premier ministre conduit la politique intérieure (privatisations de 1986-1988), tandis que le président conserve un rôle majeur en politique étrangère et de défense.",
                "Résultat : l'alternance de 1981 montre que la Ve République permet le changement de majorité ; la cohabitation de 1986 montre qu'elle peut fonctionner avec un exécutif partagé.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (analyse de document) : le document est le discours prononcé par Simone Veil, ministre de la Santé, devant l'Assemblée nationale le 26 novembre 1974 (idées résumées : la situation des femmes qui avortent clandestinement est dramatique ; la loi doit mettre fin à cette situation sans encourager l'avortement, qui doit rester une exception ; aucune femme n'y recourt par plaisir). Présentez le document, expliquez ses arguments à l'aide du cours, puis montrez sa portée.",
              hint: "Pensez au contexte (une Assemblée presque entièrement masculine, un sujet qui divise la majorité) et aux suites de la loi.",
              solution: [
                "Présentation : discours politique de Simone Veil, ministre de la Santé du gouvernement de Jacques Chirac sous la présidence de Valéry Giscard d'Estaing, prononcé le 26 novembre 1974 pour défendre le projet de loi sur l'IVG.",
                "Contexte : l'avortement est alors un délit ; des centaines de milliers de femmes avortent clandestinement, parfois au péril de leur vie ; le mouvement féministe le dénonce depuis le début des années 1970 ; l'Assemblée est presque exclusivement masculine.",
                "Explication des arguments : Simone Veil part de la réalité sociale (la loi pénale n'est plus appliquée et ne protège personne) ; elle présente la loi comme un encadrement destiné à protéger la santé des femmes, non comme un encouragement ; elle insiste sur la détresse des femmes concernées.",
                "Portée : la loi est votée grâce aux voix de la gauche et d'une partie de la majorité, puis promulguée le 17 janvier 1975 ; d'abord votée pour cinq ans, elle est rendue définitive en 1979, et l'IVG est remboursée par la Sécurité sociale à la suite d'une loi de décembre 1982. Le droit des femmes à disposer de leur corps progresse durablement.",
                "Limite du document : c'est un discours de défense du projet ; il ne rend pas compte de la violence des attaques que Simone Veil a subies pendant les débats.",
                "Conclusion : ce discours symbolise le tournant social et culturel des années 1970 et l'évolution de la place des femmes dans la société française.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque réforme ou événement à sa date.",
            pairs: [
              { left: "Loi Veil sur l'IVG", right: "1975" },
              { left: "Élection de François Mitterrand", right: "10 mai 1981" },
              { left: "Abolition de la peine de mort", right: "9 octobre 1981" },
              { left: "Lois Defferre de décentralisation", right: "1982" },
              { left: "Tournant de la rigueur", right: "Mars 1983" },
              { left: "Début de la première cohabitation", right: "Mars 1986" },
            ],
          },
          quiz: [
            {
              q: "Quelle réforme abaisse en 1974 l'âge de la majorité à 18 ans ?",
              options: ["Une réforme de François Mitterrand", "Une loi votée sous Valéry Giscard d'Estaing", "Une ordonnance du général de Gaulle prise en 1968", "Une loi de la première cohabitation"],
              answer: 1,
              why: "Dès juillet 1974, au début du septennat de Giscard d'Estaing, la majorité passe de 21 à 18 ans.",
            },
            {
              q: "Quel garde des Sceaux défend l'abolition de la peine de mort en 1981 ?",
              options: ["Robert Badinter", "Gaston Defferre", "Jack Lang", "Pierre Mauroy, Premier ministre"],
              answer: 0,
              why: "Robert Badinter défend le projet devant l'Assemblée ; la loi est promulguée le 9 octobre 1981.",
            },
            {
              q: "Qu'est-ce que la cohabitation ?",
              options: ["L'union de la gauche autour du programme commun", "Le passage du pouvoir de la droite à la gauche", "La coexistence d'un président et d'une majorité opposée", "Le partage du pouvoir entre l'État et les régions décentralisées"],
              answer: 2,
              why: "La première cohabitation, de 1986 à 1988, associe un président socialiste et un Premier ministre de droite.",
            },
            {
              q: "Que désigne le « tournant de la rigueur » de mars 1983 ?",
              options: ["Le retour de la droite au gouvernement après des élections", "La fin de la décentralisation", "L'abandon de l'IVG remboursée", "Une politique de maîtrise des dépenses et de l'inflation"],
              answer: 3,
              why: "Pour rester dans le système monétaire européen, le gouvernement abandonne la relance au profit de la rigueur.",
            },
            {
              q: "Quel mouvement arrive à Paris en décembre 1983 ?",
              options: ["Le Mouvement de libération des femmes", "La Marche pour l'égalité et contre le racisme", "La grande grève des mineurs britanniques de 1984-1985", "Solidarność"],
              answer: 1,
              why: "Partie de Marseille en octobre 1983, cette marche, issue des quartiers populaires, réclame l'égalité des droits.",
            },
          ],
          trap: "Attribuer toutes les réformes de société à la gauche : la majorité à 18 ans, la loi Veil et le divorce par consentement mutuel sont adoptés sous Valéry Giscard d'Estaing, avant 1981.",
          method: "Classez chaque réforme dans un tableau à trois colonnes (politique, sociale, culturelle ou de mœurs) et notez sa date et son porteur : vous pourrez ainsi justifier précisément l'idée de « tournant » dans une question problématisée.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 3 : L'UNION EUROPÉENNE DANS LA MONDIALISATION        */
    /* ==================================================================== */
    {
      id: 'union-europeenne-mondialisation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ue-espace-ouvert',
          title: 'L\'Union européenne, un espace plus ou moins ouvert sur le monde',
          minutes: 30,
          objectives: [
            "Décrire le poids de l'Union européenne dans les échanges mondiaux et ses principales interfaces.",
            "Expliquer les outils de l'ouverture européenne : marché unique, politique commerciale commune, euro, espace Schengen.",
            "Analyser les formes de protection et de fermeture : frontières extérieures, normes, défense commerciale.",
            "Montrer que l'ouverture de l'Union européenne est sélective et débattue.",
          ],
          course: [
            {
              heading: "Un acteur majeur de la mondialisation",
              paragraphs: [
                "L'Union européenne (UE) rassemble 27 États depuis la sortie du Royaume-Uni le 31 janvier 2020, et environ 450 millions d'habitants. C'est l'un des plus vastes marchés de consommateurs à hauts revenus du monde et l'une des premières puissances commerciales mondiales, aux côtés des États-Unis et de la Chine. Ses firmes transnationales (automobile, aéronautique, chimie, luxe, agroalimentaire) sont implantées sur tous les continents.",
                "Le marché unique, achevé le 1er janvier 1993, garantit à l'intérieur de l'UE quatre libertés de circulation : celles des marchandises, des services, des capitaux et des personnes. Les échanges entre États membres représentent l'essentiel du commerce de la plupart d'entre eux : l'UE est d'abord un espace intégré, puis un espace ouvert sur le monde.",
                "L'euro, monnaie commune de 21 États depuis l'entrée de la Bulgarie le 1er janvier 2026, est la deuxième monnaie de réserve du monde après le dollar. Il renforce le poids financier de l'UE et facilite ses échanges.",
              ],
              box: { label: "Définition", text: "Marché unique : espace sans frontières intérieures où circulent librement marchandises, services, capitaux et personnes. Achevé en 1993, il a été préparé par l'Acte unique européen de 1986." },
            },
            {
              heading: "Des interfaces et des portes d'entrée",
              paragraphs: [
                "L'ouverture de l'UE passe par de grandes interfaces. La façade maritime de la mer du Nord, la Northern Range, concentre les principaux ports à conteneurs européens : Rotterdam, premier port d'Europe, Anvers-Bruges et Hambourg. Les façades méditerranéenne (Algésiras, Valence, Le Pirée, contrôlé en majorité par un groupe chinois depuis 2016) et atlantique sont moins puissantes.",
                "Les grands aéroports (Paris-Charles-de-Gaulle, Francfort, Amsterdam-Schiphol, Madrid) sont des hubs qui relient l'Europe au monde. Les métropoles de la mégalopole européenne, l'axe urbanisé et industrialisé qui s'étend de la mer du Nord à l'Italie du Nord en passant par la vallée du Rhin, concentrent sièges sociaux, places financières (Francfort, Paris, Amsterdam) et activités de recherche.",
              ],
              box: { label: "Vocabulaire", text: "Mégalopole européenne (ou dorsale européenne) : espace densément peuplé et urbanisé, de la mer du Nord à l'Italie du Nord, qui concentre population, richesse et fonctions de commandement de l'Europe." },
            },
            {
              heading: "Les outils de l'ouverture commerciale et humaine",
              paragraphs: [
                "La politique commerciale est une compétence exclusive de l'UE : la Commission européenne négocie au nom des 27 les accords de libre-échange, que le Conseil et le Parlement européen doivent approuver. L'UE a conclu de nombreux accords, par exemple avec la Corée du Sud (2011), le Canada (CETA, appliqué à titre provisoire depuis 2017) ou le Japon (2019). L'accord négocié avec le Mercosur, dont la ratification suscite de fortes oppositions agricoles, notamment en France, montre que l'ouverture divise.",
                "L'ouverture est aussi humaine. L'espace Schengen, né des accords de 1985 et appliqué depuis 1995, supprime les contrôles aux frontières intérieures entre ses membres : 25 États de l'UE (l'Irlande et Chypre n'en font pas partie) et quatre États non membres (Islande, Norvège, Suisse, Liechtenstein). L'UE attire étudiants, travailleurs et réfugiés ; le programme Erasmus, créé en 1987, organise la mobilité étudiante.",
              ],
            },
            {
              heading: "Protéger, filtrer, fermer : une ouverture sélective",
              paragraphs: [
                "L'UE protège son marché par un tarif extérieur commun et surtout par des normes sanitaires, environnementales et techniques exigeantes : un produit qui ne les respecte pas ne peut pas être vendu sur le marché unique. Elle s'est dotée d'instruments de défense commerciale (droits antidumping), d'un filtrage des investissements étrangers dans les secteurs stratégiques (2019) et d'un mécanisme d'ajustement carbone aux frontières, qui taxe le carbone contenu dans certaines importations (acier, ciment, engrais...).",
                "Les frontières extérieures sont surveillées avec l'appui de l'agence Frontex, créée en 2004 et renforcée en 2016. Depuis la crise migratoire de 2015, l'accueil des migrants divise les États membres ; un pacte sur la migration et l'asile a été adopté en 2024. En Méditerranée, de nombreux migrants meurent chaque année en tentant de rejoindre l'Europe.",
                "Enfin, la guerre en Ukraine depuis 2022 a révélé des dépendances (gaz russe, médicaments, composants électroniques) : l'UE cherche désormais une « autonomie stratégique » qui concilie ouverture et sécurité.",
              ],
              box: { label: "À retenir", text: "L'UE est un espace très ouvert aux échanges, mais son ouverture est sélective : elle filtre les produits par ses normes, les investissements par des contrôles, les personnes par la surveillance de ses frontières extérieures." },
            },
          ],
          keyPoints: [
            "27 États depuis le Brexit (31 janvier 2020), environ 450 millions d'habitants, l'une des premières puissances commerciales mondiales.",
            "Marché unique (1993) : libre circulation des marchandises, des services, des capitaux et des personnes.",
            "Interfaces : Northern Range (Rotterdam, premier port d'Europe), hubs aéroportuaires, mégalopole européenne.",
            "Politique commerciale commune : la Commission négocie les accords (Corée du Sud, CETA, Japon) ; l'accord avec le Mercosur divise.",
            "Schengen : 25 États de l'UE et 4 États associés sans contrôles aux frontières intérieures ; Frontex surveille les frontières extérieures.",
            "Ouverture sélective : normes, défense commerciale, filtrage des investissements, mécanisme d'ajustement carbone aux frontières.",
          ],
          example: {
            statement: "Montrez que l'Union européenne est à la fois un espace ouvert et un espace qui se protège.",
            solution: [
              "Ouverture commerciale : l'UE est l'une des premières puissances commerciales du monde, multiplie les accords de libre-échange (Corée du Sud, Canada, Japon) et accueille d'immenses flux dans ses ports de la Northern Range.",
              "Ouverture humaine et financière : l'euro est la deuxième monnaie de réserve mondiale ; l'UE attire étudiants, touristes et travailleurs.",
              "Protection par les normes : les produits importés doivent respecter les normes européennes (sanitaires, environnementales).",
              "Protection par des instruments nouveaux : droits antidumping, filtrage des investissements stratégiques depuis 2019, mécanisme d'ajustement carbone aux frontières.",
              "Contrôle des personnes : Frontex surveille les frontières extérieures de l'espace Schengen ; la question migratoire divise les États.",
              "Conclusion : l'UE est un espace ouvert mais régulé, qui cherche un équilibre entre libre-échange, protection de ses intérêts et sécurité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chacun des pays suivants appartient à l'UE, à la zone euro et à l'espace Schengen : a) l'Irlande ; b) la Suisse ; c) la Bulgarie ; d) la France.",
              hint: "Rappelez-vous que l'Irlande et Chypre restent hors de Schengen, que la Suisse n'est pas membre de l'UE mais participe à Schengen, et que la Bulgarie a adopté l'euro le 1er janvier 2026.",
              solution: [
                "a) L'Irlande : membre de l'UE et de la zone euro, mais pas de l'espace Schengen.",
                "b) La Suisse : ni membre de l'UE ni de la zone euro (elle garde le franc suisse), mais membre de l'espace Schengen.",
                "c) La Bulgarie : membre de l'UE depuis 2007, membre de plein exercice de l'espace Schengen depuis 2025 et de la zone euro depuis le 1er janvier 2026.",
                "d) La France : membre de l'UE, de la zone euro et de l'espace Schengen.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi la Northern Range est la principale interface de l'UE avec le monde.",
              hint: "Pensez à l'arrière-pays desservi (l'hinterland), aux voies navigables et à la proximité de la mégalopole européenne.",
              solution: [
                "La Northern Range regroupe les plus grands ports européens, dont Rotterdam, Anvers-Bruges et Hambourg.",
                "Ces ports desservent l'arrière-pays le plus riche et le plus peuplé de l'UE : la mégalopole européenne, de la mer du Nord à l'Italie du Nord.",
                "Ils sont reliés à cet arrière-pays par des voies navigables (Rhin, Escaut, Elbe), des autoroutes et des voies ferrées.",
                "Ils sont situés sur l'une des routes maritimes les plus fréquentées du monde, la Manche et la mer du Nord, ouverte sur l'Atlantique.",
                "Résultat : par sa position et son arrière-pays, la Northern Range concentre une grande partie des échanges maritimes de l'UE avec le reste du monde.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « L'Union européenne est-elle un espace ouvert sur le monde ? » Proposez une introduction et un plan détaillé avec des exemples localisés.",
              hint: "Évitez de répondre par oui ou par non : montrez les formes de l'ouverture, puis ses limites et ses choix, et terminez par les débats actuels.",
              solution: [
                "Introduction : avec 27 États et environ 450 millions d'habitants, l'UE est l'un des pôles de la mondialisation. Problématique : dans quelle mesure l'UE est-elle ouverte, et comment concilie-t-elle cette ouverture avec la protection de ses intérêts ? Annonce : un espace très ouvert, une ouverture sélective, une ouverture débattue.",
                "I. Un espace très ouvert : puissance commerciale, accords de libre-échange (Corée du Sud, CETA, Japon), interfaces (Northern Range, hubs aéroportuaires), euro deuxième monnaie de réserve, attractivité pour les étudiants et les touristes.",
                "II. Une ouverture sélective : normes, droits antidumping, filtrage des investissements, mécanisme d'ajustement carbone ; frontières extérieures surveillées par Frontex ; ouverture inégale des territoires (Northern Range très ouverte, régions intérieures moins).",
                "III. Une ouverture débattue : oppositions à l'accord avec le Mercosur ; divisions sur l'accueil des migrants ; recherche d'une autonomie stratégique après la guerre en Ukraine.",
                "Conclusion : l'UE est un espace largement ouvert, mais de plus en plus soucieux de choisir les conditions de cette ouverture.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'ouverture de l'Union européenne.",
            statements: [
              { text: "Depuis 2020, l'Union européenne compte 27 États membres.", true: true, why: "Le Royaume-Uni est sorti de l'UE le 31 janvier 2020." },
              { text: "Tous les États de l'UE utilisent l'euro.", true: false, why: "Plusieurs États, comme la Pologne, la Suède ou le Danemark, gardent leur monnaie nationale." },
              { text: "La Suisse fait partie de l'espace Schengen sans être membre de l'UE.", true: true, why: "Comme l'Islande, la Norvège et le Liechtenstein, la Suisse est associée à Schengen." },
              { text: "Chaque État de l'UE négocie seul ses accords commerciaux avec le reste du monde.", true: false, why: "La politique commerciale est une compétence exclusive de l'UE : la Commission négocie au nom des 27." },
              { text: "Rotterdam est le premier port d'Europe.", true: true, why: "Situé à l'embouchure du Rhin et de la Meuse, il est au cœur de la Northern Range." },
              { text: "Les normes européennes ne s'appliquent qu'aux produits fabriqués dans l'UE.", true: false, why: "Tout produit vendu sur le marché unique, importé ou non, doit les respecter : c'est un puissant outil de régulation." },
            ],
          },
          quiz: [
            {
              q: "Depuis quelle date l'UE compte-t-elle 27 États membres ?",
              options: ["Le 1er janvier 1993", "Le 31 janvier 2020", "Le 1er mai 2004", "Le 23 juin 2016, jour du référendum"],
              answer: 1,
              why: "Le Royaume-Uni a quitté l'UE le 31 janvier 2020, après le référendum de 2016.",
            },
            {
              q: "Lequel de ces pays n'appartient pas à l'espace Schengen ?",
              options: ["La Norvège", "La Suisse", "L'Irlande", "Le Portugal"],
              answer: 2,
              why: "L'Irlande, membre de l'UE, a choisi de rester hors de Schengen, tout comme Chypre.",
            },
            {
              q: "Qui négocie les accords commerciaux au nom des États de l'UE ?",
              options: ["La Commission européenne", "La Banque centrale européenne", "Chaque ministre du Commerce", "La Cour de justice de l'Union européenne"],
              answer: 0,
              why: "La politique commerciale étant une compétence exclusive de l'UE, c'est la Commission qui négocie ; le Conseil et le Parlement approuvent.",
            },
            {
              q: "Quel est le rôle de l'agence Frontex ?",
              options: ["Gérer l'euro", "Négocier les accords de libre-échange", "Financer les régions en retard de développement grâce au FEDER", "Appuyer la surveillance des frontières extérieures"],
              answer: 3,
              why: "Frontex, l'Agence européenne de garde-frontières et de garde-côtes, aide les États à contrôler les frontières extérieures de Schengen.",
            },
            {
              q: "Le mécanisme d'ajustement carbone aux frontières :",
              options: ["supprime les droits de douane", "taxe le carbone contenu dans certaines importations", "interdit les importations chinoises", "remplace l'espace Schengen par un contrôle douanier commun"],
              answer: 1,
              why: "Il applique aux importations de produits comme l'acier ou le ciment un prix du carbone comparable à celui payé par les producteurs européens.",
            },
          ],
          trap: "Confondre UE, zone euro et espace Schengen : ces trois ensembles ne coïncident pas (l'Irlande est dans l'UE et la zone euro mais pas dans Schengen, la Suisse est dans Schengen sans être dans l'UE).",
          method: "Apprenez un schéma simple de trois cercles qui se chevauchent (UE, zone euro, Schengen) en plaçant quelques États-tests (Irlande, Suisse, Pologne, France) : vous éviterez les confusions dans vos copies.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ue-territoires-contrastes',
          title: 'Des territoires européens inégalement ouverts',
          minutes: 30,
          objectives: [
            "Décrire l'organisation du territoire européen : centre, périphéries intégrées et espaces en marge.",
            "Expliquer pourquoi les territoires européens sont inégalement ouverts sur le monde.",
            "Présenter les politiques européennes entre compétitivité et cohésion des territoires.",
            "Réaliser un schéma de l'organisation du territoire de l'UE.",
          ],
          course: [
            {
              heading: "Un centre puissant : la mégalopole et les grandes métropoles",
              paragraphs: [
                "Le cœur de l'UE est la mégalopole européenne, de la mer du Nord à l'Italie du Nord, prolongée par Paris et l'Île-de-France. Elle concentre une forte densité de population, les principaux ports, les grandes places financières (Francfort, Paris, Amsterdam, Milan), les sièges des institutions européennes (Bruxelles, Luxembourg, Strasbourg, Francfort pour la Banque centrale européenne) et une grande partie de la recherche. C'est l'espace le plus ouvert sur le monde.",
                "Hors de cet axe, des métropoles dynamiques sont aussi très connectées : Madrid, Barcelone, Munich, Vienne, Varsovie, Copenhague-Malmö, Stockholm. La métropolisation renforce les contrastes : les capitales et les grandes villes captent investissements, étudiants et emplois qualifiés, souvent au détriment des espaces ruraux voisins.",
              ],
              box: { label: "À retenir", text: "Le territoire européen est organisé en centre (mégalopole et grandes métropoles) et périphéries. Plus un territoire est proche du centre et connecté, plus il est ouvert sur le monde." },
            },
            {
              heading: "Des périphéries intégrées et des espaces en marge",
              paragraphs: [
                "Les pays d'Europe centrale et orientale, entrés dans l'UE en 2004 et 2007, sont des périphéries intégrées en rattrapage. L'industrie automobile s'est implantée en Slovaquie, en Tchéquie, en Hongrie ou en Roumanie, attirée par une main-d'œuvre qualifiée et moins coûteuse et par la proximité du marché allemand. La Pologne a connu une forte croissance depuis son adhésion. Ces pays restent toutefois moins riches que ceux de l'Ouest, et leurs capitales croissent beaucoup plus vite que leurs campagnes.",
                "L'Europe méditerranéenne présente des situations contrastées : métropoles et littoraux touristiques très ouverts (Barcelone, côte espagnole, îles grecques), mais aussi régions intérieures en déclin démographique (une grande partie de l'intérieur de l'Espagne et du Portugal). Les espaces en marge sont souvent des régions rurales isolées, montagneuses ou de faible densité, ou d'anciennes régions industrielles en reconversion.",
                "Les neuf régions ultrapériphériques (RUP) forment un cas particulier : Guadeloupe, Guyane, Martinique, Mayotte, La Réunion, Saint-Martin (France), Açores, Madère (Portugal) et Canaries (Espagne). Intégrées à l'UE, elles sont éloignées du continent européen mais sont des points d'appui dans les océans.",
              ],
              box: { label: "Définition", text: "Région ultrapériphérique (RUP) : territoire d'un État membre situé loin du continent européen, qui fait pleinement partie de l'UE et bénéficie de mesures adaptées à son éloignement. Il y en a neuf, dont six françaises." },
            },
            {
              heading: "Des politiques entre compétitivité et cohésion",
              paragraphs: [
                "L'UE cherche à la fois à rendre son économie compétitive face aux États-Unis et à la Chine et à réduire les écarts de richesse entre ses territoires. La politique de cohésion représente environ un tiers du budget européen. Ses fonds (Fonds européen de développement régional, FEDER ; Fonds social européen plus, FSE+ ; Fonds de cohésion) financent des infrastructures, la formation, l'innovation et la transition écologique.",
                "Pour 2021-2027, les régions sont classées en trois catégories selon leur PIB par habitant comparé à la moyenne de l'UE : régions moins développées (moins de 75 %), régions en transition (de 75 à 100 %) et régions plus développées (plus de 100 %). Les premières reçoivent la plus grande part des aides. La politique agricole commune (PAC, 1962), qui soutient les agriculteurs et le développement rural, reste l'autre grand poste du budget.",
                "La compétitivité passe par la recherche (programme Horizon Europe), le marché unique et les réseaux transeuropéens de transport (RTE-T), qui organisent de grands corridors reliant les métropoles et les ports. Ces politiques peuvent entrer en tension : investir dans les métropoles les plus performantes renforce la compétitivité, mais risque d'accroître les inégalités territoriales.",
              ],
              box: { label: "Repère", text: "Politique de cohésion 2021-2027 : régions moins développées (PIB par habitant inférieur à 75 % de la moyenne de l'UE), régions en transition (75 à 100 %), régions plus développées (plus de 100 %)." },
            },
          ],
          keyPoints: [
            "Centre : la mégalopole européenne (de la mer du Nord à l'Italie du Nord) et les grandes métropoles, très ouvertes sur le monde.",
            "Périphéries intégrées : l'Europe centrale et orientale (automobile en Slovaquie, en Tchéquie, en Hongrie), en rattrapage depuis 2004 et 2007.",
            "Espaces en marge : régions rurales isolées ou de faible densité, anciennes régions industrielles, intérieur de la péninsule Ibérique.",
            "Neuf régions ultrapériphériques, dont six françaises.",
            "La politique de cohésion (environ un tiers du budget, FEDER, FSE+) aide surtout les régions dont le PIB par habitant est inférieur à 75 % de la moyenne.",
            "Compétitivité (recherche, RTE-T) et cohésion peuvent entrer en tension.",
          ],
          example: {
            statement: "Montrez que la Slovaquie est une périphérie intégrée de l'Union européenne.",
            solution: [
              "Définir : une périphérie intégrée est un espace qui participe activement aux échanges d'un centre, mais de façon dépendante.",
              "Intégration : entrée dans l'UE en 2004 et dans la zone euro en 2009, la Slovaquie accueille plusieurs grandes usines automobiles de groupes étrangers ; c'est l'un des pays qui produisent le plus de voitures par habitant au monde.",
              "Facteurs : main-d'œuvre qualifiée et moins coûteuse qu'à l'Ouest, proximité de l'Allemagne et de l'Autriche, accès au marché unique, aides publiques.",
              "Dépendance : les centres de décision et une grande partie de la recherche restent à l'étranger ; l'économie dépend fortement d'un seul secteur exportateur.",
              "Inégalités internes : la région de Bratislava, la capitale, est beaucoup plus riche que l'est du pays.",
              "Conclusion : la Slovaquie est intégrée à la mondialisation par l'UE, mais comme périphérie productive, dépendante des décisions prises dans les centres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les espaces suivants en centre, périphérie intégrée ou espace en marge : a) la région de Francfort ; b) la Tchéquie industrielle ; c) une région rurale de l'intérieur de l'Espagne en dépeuplement ; d) Paris ; e) l'ouest de la Hongrie, avec ses usines automobiles.",
              hint: "Demandez-vous si l'espace commande, participe de façon dépendante ou reste à l'écart des flux.",
              solution: [
                "a) Francfort : centre (place financière, siège de la Banque centrale européenne, hub aéroportuaire).",
                "b) La Tchéquie industrielle : périphérie intégrée (industrie automobile liée à l'Allemagne).",
                "c) La région rurale de l'intérieur de l'Espagne : espace en marge (faible densité, dépeuplement).",
                "d) Paris : centre (métropole mondiale).",
                "e) L'ouest de la Hongrie : périphérie intégrée (usines de groupes étrangers, exportations vers l'Ouest).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : la région A a un PIB par habitant égal à 62 % de la moyenne de l'UE, la région B à 88 %, la région C à 131 %. Indiquez la catégorie de chacune dans la politique de cohésion 2021-2027 et dites laquelle recevra en principe le plus d'aides par habitant.",
              hint: "Les seuils sont 75 % et 100 % de la moyenne européenne du PIB par habitant.",
              solution: [
                "Région A : 62 % est inférieur à 75 %, c'est une région moins développée.",
                "Région B : 88 % est compris entre 75 % et 100 %, c'est une région en transition.",
                "Région C : 131 % est supérieur à 100 %, c'est une région plus développée.",
                "Les aides de la politique de cohésion sont concentrées sur les régions les moins développées : la région A recevra en principe le plus d'aides par habitant.",
                "Résultat : A moins développée, B en transition, C plus développée ; A est la plus aidée.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (schéma) : réalisez la légende organisée d'un schéma intitulé « L'organisation du territoire de l'Union européenne : des territoires inégalement ouverts », en trois parties, avec les figurés à utiliser et un exemple localisé pour chacun.",
              hint: "Un schéma simplifie l'espace : quelques figurés bien choisis valent mieux qu'une accumulation. Partez du centre vers les marges, puis ajoutez les politiques.",
              solution: [
                "Partie I, un centre très ouvert sur le monde : une surface de couleur foncée pour la mégalopole européenne (de la mer du Nord à l'Italie du Nord) ; un trait épais pour la Northern Range (Rotterdam, Anvers-Bruges, Hambourg) ; des points pour les grandes métropoles (Paris, Francfort, Milan, Madrid).",
                "Partie II, des périphéries inégalement intégrées : une surface de couleur moyenne pour les périphéries intégrées d'Europe centrale (Pologne, Tchéquie, Slovaquie, Hongrie) ; une flèche du centre vers ces pays pour les investissements et les délocalisations industrielles ; une surface claire pour les périphéries méditerranéennes ; un figuré spécifique pour les régions ultrapériphériques, en encadrés.",
                "Partie III, des politiques pour réduire les écarts : des hachures pour les régions moins développées principales bénéficiaires de la politique de cohésion (une grande partie de l'Europe centrale et orientale, du sud de l'Italie, de la Grèce) ; des traits fins pour quelques corridors des réseaux transeuropéens de transport.",
                "Contrôle : le dégradé de couleurs du centre vers les périphéries traduit l'idée directrice du titre, l'inégale ouverture des territoires.",
                "Résultat : une légende en trois parties (centre, périphéries, politiques), cohérente avec le titre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque territoire ou outil à ce qui le caractérise.",
            pairs: [
              { left: "Mégalopole européenne", right: "Centre de l'UE, de la mer du Nord à l'Italie du Nord" },
              { left: "Slovaquie", right: "Périphérie intégrée spécialisée dans l'automobile" },
              { left: "Canaries", right: "Région ultrapériphérique espagnole" },
              { left: "FEDER", right: "Fonds européen qui finance le développement régional" },
              { left: "Région en transition", right: "PIB par habitant entre 75 et 100 % de la moyenne de l'UE" },
              { left: "RTE-T", right: "Réseaux transeuropéens de transport reliant les grandes métropoles" },
            ],
          },
          quiz: [
            {
              q: "Combien l'UE compte-t-elle de régions ultrapériphériques ?",
              options: ["Neuf", "Trois", "Treize", "Vingt-sept, une par État membre"],
              answer: 0,
              why: "Il y en a neuf : six françaises, deux portugaises (Açores, Madère) et une espagnole (Canaries).",
            },
            {
              q: "Sous quel seuil de PIB par habitant une région est-elle classée « moins développée » ?",
              options: ["50 % de la moyenne de l'UE", "100 % de la moyenne de l'UE", "75 % de la moyenne de l'UE", "La moitié du PIB par habitant français"],
              answer: 2,
              why: "Les régions dont le PIB par habitant est inférieur à 75 % de la moyenne reçoivent l'essentiel des fonds de cohésion.",
            },
            {
              q: "Quelle activité illustre l'intégration de l'Europe centrale dans l'économie européenne ?",
              options: ["La pêche hauturière", "La construction automobile", "La finance internationale", "Le tourisme de sports d'hiver"],
              answer: 1,
              why: "De nombreuses usines automobiles se sont implantées en Slovaquie, en Tchéquie, en Hongrie ou en Roumanie.",
            },
            {
              q: "Quelle part du budget européen représente à peu près la politique de cohésion ?",
              options: ["Moins de 5 %", "La totalité", "Les trois quarts", "Environ un tiers"],
              answer: 3,
              why: "Avec la PAC, la politique de cohésion est l'un des deux grands postes du budget de l'UE, autour d'un tiers.",
            },
            {
              q: "Pourquoi compétitivité et cohésion peuvent-elles entrer en tension ?",
              options: ["Parce que l'UE n'a pas de budget", "Parce qu'aider les métropoles peut creuser les écarts", "Parce que la cohésion est interdite par les traités européens", "Parce que la PAC a été supprimée en 1992"],
              answer: 1,
              why: "Concentrer les moyens là où la croissance est la plus forte renforce la compétitivité mais peut aggraver les inégalités territoriales.",
            },
          ],
          trap: "Présenter l'Europe de l'Est comme une marge uniforme : ses capitales et ses régions industrielles sont devenues des périphéries intégrées et dynamiques, alors que certaines régions de l'Ouest sont en difficulté.",
          method: "Pour un schéma, limitez-vous à huit ou dix figurés et vérifiez que chaque partie de la légende répond à un mot du titre ; un schéma lisible vaut mieux qu'un schéma chargé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-territoires-transfrontaliers',
          title: 'La France : les dynamiques des territoires transfrontaliers',
          minutes: 30,
          objectives: [
            "Définir les notions de frontière, de territoire transfrontalier et de coopération transfrontalière.",
            "Identifier les dynamiques différenciées des territoires transfrontaliers français.",
            "Analyser un exemple de coopération transfrontalière et ses limites.",
          ],
          course: [
            {
              heading: "Des frontières qui s'ouvrent",
              paragraphs: [
                "Une frontière est une limite qui sépare deux États souverains. La France métropolitaine a des frontières terrestres avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, Monaco, l'Andorre et l'Espagne ; outre-mer, la Guyane borde le Brésil et le Suriname, et Saint-Martin partage son île avec une partie néerlandaise. Le tunnel sous la Manche, ouvert en 1994, relie aussi la France au Royaume-Uni.",
                "Avec le marché unique et l'espace Schengen, les frontières intérieures de l'UE ont perdu leur rôle de barrière : on les franchit sans contrôle systématique pour travailler, consommer, se soigner ou se divertir. Elles deviennent des interfaces, et de part et d'autre se forment des territoires transfrontaliers, c'est-à-dire des espaces qui fonctionnent ensemble malgré la frontière.",
                "Cette ouverture n'est pas totale : les États ont rétabli temporairement des contrôles lors de la crise sanitaire de 2020 ou face à la menace terroriste, et la frontière avec le Royaume-Uni est redevenue une frontière extérieure de l'UE depuis le Brexit, avec des contrôles renforcés à Calais.",
              ],
              box: { label: "Définition", text: "Territoire transfrontalier : espace situé de part et d'autre d'une frontière, dont les habitants et les acteurs entretiennent des relations intenses (travail, commerce, services, loisirs) qui le font fonctionner comme un ensemble." },
            },
            {
              heading: "Le travail frontalier, moteur des dynamiques",
              paragraphs: [
                "Plusieurs centaines de milliers d'actifs résidant en France travaillent dans un pays voisin, surtout en Suisse et au Luxembourg, où les salaires sont nettement plus élevés. Au Luxembourg, près de la moitié des salariés sont des frontaliers, dont environ la moitié résident en France, principalement en Lorraine. Le Grand Genève forme une agglomération transfrontalière d'environ un million d'habitants, reliée depuis 2019 par un RER transfrontalier, le Léman Express.",
                "Ces flux créent des dynamiques fortes : croissance démographique et construction de logements côté français, mais aussi hausse des prix immobiliers, saturation des routes et difficulté pour les entreprises et les services publics français (hôpitaux) à recruter, car les salariés sont attirés par les salaires voisins. Une partie des communes françaises devient résidentielle, tandis que l'emploi et les recettes fiscales se situent de l'autre côté. Pour compenser, le canton de Genève reverse, en vertu d'un accord de 1973, une partie de l'impôt payé par les frontaliers aux départements de l'Ain et de la Haute-Savoie.",
              ],
            },
            {
              heading: "Des coopérations transfrontalières",
              paragraphs: [
                "Pour gérer ces espaces, les collectivités coopèrent, avec le soutien financier du programme européen Interreg (créé en 1990). L'Eurométropole Lille-Kortrijk-Tournai est devenue en 2008 le premier groupement européen de coopération territoriale (GECT), structure juridique créée par l'UE. L'Eurodistrict Strasbourg-Ortenau associe la métropole alsacienne et ses voisins allemands ; depuis 2017, un tramway relie Strasbourg à Kehl en traversant le Rhin.",
                "Dans les Pyrénées, l'hôpital de Cerdagne, à Puigcerdà en Espagne, ouvert en 2014, soigne des patients français et espagnols : c'est le premier hôpital transfrontalier d'Europe. Le traité d'Aix-la-Chapelle, signé en 2019 entre la France et l'Allemagne, prévoit de faciliter les projets transfrontaliers. Ces coopérations portent sur les transports, la santé, l'environnement, la formation, le développement économique.",
              ],
              box: { label: "Repère", text: "1990 : premier programme Interreg. 1994 : tunnel sous la Manche. 2008 : Eurométropole Lille-Kortrijk-Tournai, premier GECT. 2014 : hôpital de Cerdagne. 2017 : tramway Strasbourg-Kehl. 2019 : traité d'Aix-la-Chapelle et Léman Express." },
            },
            {
              heading: "Des dynamiques différenciées",
              paragraphs: [
                "Tous les territoires frontaliers ne connaissent pas la même dynamique. Les plus intégrés sont ceux qui touchent des espaces riches et métropolisés : le Genevois français, le nord de la Lorraine face au Luxembourg, l'agglomération lilloise, l'Alsace face à Bâle et au Bade-Wurtemberg, la frontière avec Monaco. D'autres frontières, en montagne (Alpes, Pyrénées centrales) ou dans des espaces de faible densité (Ardennes), restent moins actives, car le relief ou le faible peuplement limitent les échanges.",
                "Outre-mer, la frontière entre la Guyane et le Brésil, malgré le pont sur l'Oyapock ouvert à la circulation en 2017, reste peu franchie officiellement et marquée par l'orpaillage illégal et l'immigration irrégulière ; le Maroni, fleuve frontière avec le Suriname, est au contraire un espace de vie partagé par les populations des deux rives.",
              ],
              box: { label: "À retenir", text: "Les territoires transfrontaliers français ont des dynamiques différenciées : très intégrés face aux pôles riches (Genève, Luxembourg, Bâle, Lille), plus discrets là où le relief, la faible densité ou les écarts de développement freinent les échanges." },
            },
          ],
          keyPoints: [
            "Une frontière sépare deux États ; dans l'UE, avec Schengen, elle devient souvent une interface.",
            "Un territoire transfrontalier fonctionne comme un ensemble de part et d'autre de la frontière.",
            "Le travail frontalier vers la Suisse et le Luxembourg dynamise mais déséquilibre les territoires français (logement, recrutement, fiscalité).",
            "Coopérations : Interreg (1990), Eurométropole Lille-Kortrijk-Tournai (premier GECT, 2008), tram Strasbourg-Kehl (2017), hôpital de Cerdagne (2014).",
            "Dynamiques différenciées : forte intégration face aux pôles riches, faibles échanges en montagne et dans les espaces peu peuplés, situations spécifiques outre-mer.",
          ],
          example: {
            statement: "Expliquez en quoi le Genevois français est un territoire transfrontalier très dynamique mais déséquilibré.",
            solution: [
              "Localiser : le Genevois français, dans l'Ain et la Haute-Savoie, entoure le canton de Genève, en Suisse.",
              "Dynamique : Genève, ville internationale (ONU, organisations internationales, banques), attire de nombreux travailleurs résidant en France ; l'agglomération du Grand Genève compte environ un million d'habitants et le Léman Express relie les deux côtés depuis 2019.",
              "Effets positifs : croissance démographique côté français, revenus élevés des frontaliers, construction de logements, compensation financière versée par Genève depuis l'accord de 1973.",
              "Déséquilibres : flambée des prix immobiliers pour les habitants qui travaillent en France, embouteillages, difficultés des hôpitaux et des entreprises françaises à recruter.",
              "Coopération : les collectivités des deux pays coordonnent les transports et l'aménagement dans le cadre du Grand Genève.",
              "Conclusion : le Genevois français profite de la frontière, mais cette intégration crée une forte dépendance vis-à-vis de Genève.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Citez les huit États avec lesquels la France métropolitaine a une frontière terrestre, puis deux États frontaliers de territoires français d'outre-mer.",
              hint: "Faites le tour de l'Hexagone du nord au sud par l'est, sans oublier les deux micro-États.",
              solution: [
                "En métropole, du nord au sud par l'est : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, puis, au sud, Andorre et Espagne.",
                "Outre-mer : la Guyane a des frontières avec le Brésil et le Suriname (Saint-Martin partage aussi son île avec une partie néerlandaise, Sint Maarten).",
                "Résultat : huit voisins terrestres en métropole et, en Guyane, deux voisins, le Brésil et le Suriname.",
              ],
            },
            {
              level: 2,
              statement: "Comparez la frontière franco-luxembourgeoise et la frontière franco-italienne dans les Alpes : laquelle est la plus intégrée, et pourquoi ?",
              hint: "Comparez le relief, les densités de population et l'attraction économique de chaque voisin.",
              solution: [
                "Frontière franco-luxembourgeoise : relief facile, forte densité, Luxembourg très riche ; des dizaines de milliers de Lorrains y travaillent chaque jour : la frontière est très intégrée.",
                "Frontière franco-italienne dans les Alpes : relief montagneux, passages concentrés dans quelques vallées, cols et tunnels (Fréjus, Mont-Blanc), densités faibles dans les hautes vallées : les échanges quotidiens sont plus limités.",
                "Exception : sur le littoral, entre Menton et Vintimille, les échanges sont plus intenses.",
                "Résultat : la frontière franco-luxembourgeoise est la plus intégrée, car le relief, la densité et l'écart de salaires y favorisent les flux quotidiens.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (analyse de document) : le document est un extrait du site d'une collectivité (document fictif construit pour l'exercice) qui présente le tramway reliant Strasbourg à Kehl, ouvert en 2017, comme « un symbole de l'amitié franco-allemande » permettant aux habitants de traverser le Rhin pour travailler, faire leurs achats ou étudier. Analysez ce document en montrant ce qu'il révèle des dynamiques transfrontalières et ses limites.",
              hint: "Présentez la source et son point de vue, rattachez les informations au cours (frontière-interface, Eurodistrict, traité d'Aix-la-Chapelle), puis demandez-vous ce que le document ne montre pas.",
              solution: [
                "Présentation : document institutionnel (fictif) émanant d'une collectivité, donc favorable au projet qu'il présente ; il porte sur la ligne de tramway transfrontalière Strasbourg-Kehl ouverte en 2017.",
                "Ce qu'il révèle : le Rhin, ancienne frontière disputée entre la France et l'Allemagne, devient une interface franchie quotidiennement ; les flux concernent le travail, la consommation et les études.",
                "Mise en relation avec le cours : ce projet s'inscrit dans l'Eurodistrict Strasbourg-Ortenau, soutenu par des fonds européens, et dans la volonté du traité d'Aix-la-Chapelle (2019) de faciliter la coopération transfrontalière.",
                "Portée symbolique : le tramway traduit la réconciliation franco-allemande et la construction européenne dans la vie quotidienne.",
                "Limites : en tant que source institutionnelle, le document valorise le projet ; il ne dit rien des différences de législation (droit du travail, santé, fiscalité) qui compliquent encore la vie des frontaliers, ni des écarts de prix qui orientent certains flux d'achats vers l'Allemagne.",
                "Conclusion : le tramway Strasbourg-Kehl illustre l'intégration d'un territoire transfrontalier, mais une intégration encore incomplète.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'ouverture des frontières françaises dans l'ordre chronologique.",
            items: [
              "Signature des accords de Schengen",
              "Lancement du premier programme européen Interreg",
              "Ouverture du tunnel sous la Manche",
              "Création de l'Eurométropole Lille-Kortrijk-Tournai, premier GECT",
              "Ouverture de l'hôpital transfrontalier de Cerdagne",
              "Mise en service du tramway Strasbourg-Kehl",
              "Signature du traité d'Aix-la-Chapelle",
            ],
          },
          quiz: [
            {
              q: "Vers quel pays se dirigent principalement les travailleurs frontaliers du nord de la Lorraine ?",
              options: ["L'Espagne", "L'Italie", "Le Luxembourg", "Le Royaume-Uni, par le tunnel"],
              answer: 2,
              why: "Le Luxembourg, très riche, attire chaque jour un grand nombre de travailleurs résidant en Lorraine.",
            },
            {
              q: "Quelle structure est devenue en 2008 le premier groupement européen de coopération territoriale ?",
              options: ["L'Eurométropole Lille-Kortrijk-Tournai", "Le Grand Genève", "L'Eurodistrict Strasbourg-Ortenau", "La Collectivité européenne d'Alsace, créée en 2021"],
              answer: 0,
              why: "L'Eurométropole franco-belge a été le premier GECT, outil juridique créé par l'UE pour la coopération transfrontalière.",
            },
            {
              q: "Quel est un effet négatif fréquent du travail frontalier vers la Suisse pour les territoires français ?",
              options: ["La baisse de la population des communes frontalières", "La disparition des routes", "La fermeture de la frontière", "La hausse des prix du logement"],
              answer: 3,
              why: "Les revenus élevés des frontaliers font monter les prix immobiliers, au détriment de ceux qui travaillent en France.",
            },
            {
              q: "Où se trouve le premier hôpital transfrontalier d'Europe, ouvert en 2014 ?",
              options: ["À Lille", "En Cerdagne, à Puigcerdà", "À Strasbourg", "À Genève, au bord du lac Léman"],
              answer: 1,
              why: "L'hôpital de Cerdagne, en territoire espagnol, accueille des patients des deux côtés des Pyrénées.",
            },
            {
              q: "Pourquoi la frontière avec le Royaume-Uni a-t-elle changé de nature ?",
              options: ["Parce que le tunnel a fermé", "Parce que le Royaume-Uni a rejoint Schengen", "Parce que le Brexit en fait une frontière extérieure de l'UE", "Parce que la Manche a été déclarée zone neutre par un traité international"],
              answer: 2,
              why: "Depuis la sortie du Royaume-Uni de l'UE en 2020, cette frontière est une frontière extérieure, avec davantage de contrôles.",
            },
          ],
          trap: "Croire que l'ouverture des frontières dans l'UE profite partout de la même façon : les dynamiques transfrontalières dépendent du relief, des densités et surtout de l'écart de richesse avec le voisin.",
          method: "Pour chaque territoire transfrontalier étudié, retenez une fiche en quatre lignes : localisation, flux principaux, coopération (avec une date), limites ; elle vous fournira un exemple précis pour n'importe quelle question.",
        },
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 4 : LE MONDE, L'EUROPE ET LA FRANCE DEPUIS 1990        */
    /* ==================================================================== */
    {
      id: 'monde-depuis-1990',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'rapports-de-puissance',
          title: 'Nouveaux rapports de puissance et enjeux mondiaux',
          minutes: 35,
          objectives: [
            "Caractériser le monde de l'après-guerre froide : hyperpuissance américaine, espoirs et échecs d'un nouvel ordre mondial.",
            "Expliquer les conflits des années 1990 et la naissance d'une justice pénale internationale.",
            "Analyser les conséquences des attentats du 11 septembre 2001 et l'affirmation d'un monde multipolaire.",
            "Identifier les grands enjeux mondiaux qui appellent une coopération internationale (climat, santé, justice).",
          ],
          course: [
            {
              heading: "1991-2001 : l'hyperpuissance américaine et les espoirs d'un nouvel ordre mondial",
              paragraphs: [
                "La disparition de l'URSS en décembre 1991 laisse les États-Unis seule superpuissance : ils dominent dans les domaines militaire, économique, technologique et culturel. Le ministre français des Affaires étrangères Hubert Védrine parle à la fin des années 1990 d'« hyperpuissance ». Dès 1991, la guerre du Golfe illustre ce leadership : après l'invasion du Koweït par l'Irak de Saddam Hussein (août 1990), une coalition internationale menée par les États-Unis, autorisée par le Conseil de sécurité de l'ONU, libère le Koweït (janvier-février 1991).",
                "Le président George H. W. Bush annonce alors un « nouvel ordre mondial » fondé sur le droit international et sur une ONU enfin libérée des blocages de la guerre froide. Les opérations de maintien de la paix se multiplient, la mondialisation économique s'accélère et la démocratie libérale semble devoir s'étendre partout.",
              ],
              box: { label: "Définition", text: "Hyperpuissance : terme employé par Hubert Védrine pour désigner la domination des États-Unis après la guerre froide, une puissance sans rivale dans tous les domaines (militaire, économique, technologique, culturel)." },
            },
            {
              heading: "Des conflits meurtriers et une justice internationale",
              paragraphs: [
                "Les espoirs sont vite déçus. L'éclatement de la Yougoslavie provoque à partir de 1991 des guerres marquées par des nettoyages ethniques. En Bosnie-Herzégovine, en juillet 1995, environ 8 000 hommes et garçons bosniaques musulmans sont massacrés à Srebrenica par les forces serbes de Bosnie, dans une zone pourtant placée sous la protection de l'ONU ; les accords de Dayton (décembre 1995) mettent fin à la guerre. En 1999, l'OTAN bombarde la Serbie pour protéger les Albanais du Kosovo, sans mandat du Conseil de sécurité.",
                "Au Rwanda, d'avril à juillet 1994, le génocide des Tutsi fait environ 800 000 victimes selon l'ONU, sans que la communauté internationale intervienne pour l'arrêter. Ces drames conduisent à créer des tribunaux pénaux internationaux pour l'ex-Yougoslavie (1993) et pour le Rwanda (1994), puis la Cour pénale internationale (CPI), installée à La Haye : son statut est adopté à Rome en 1998 et elle fonctionne depuis 2002. Plusieurs grandes puissances (États-Unis, Russie, Chine) n'en sont pas membres.",
              ],
              box: { label: "Définition", text: "Génocide : crime consistant à vouloir détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux, défini par la convention des Nations unies de 1948." },
            },
            {
              heading: "Le 11 septembre 2001 et ses conséquences",
              paragraphs: [
                "Le 11 septembre 2001, des terroristes de l'organisation islamiste al-Qaïda, dirigée par Oussama ben Laden, détournent quatre avions de ligne et frappent les tours du World Trade Center à New York et le Pentagone près de Washington : environ 3 000 personnes sont tuées. Les États-Unis, frappés sur leur sol, déclarent une « guerre contre le terrorisme ».",
                "En octobre 2001, ils interviennent en Afghanistan avec leurs alliés pour renverser le régime des talibans qui abritait al-Qaïda. En 2003, ils envahissent l'Irak sans l'accord du Conseil de sécurité, malgré l'opposition de la France, de l'Allemagne et de la Russie ; les armes de destruction massive invoquées ne sont pas trouvées. Ces interventions déstabilisent durablement le Moyen-Orient : l'organisation État islamique (Daech) proclame un califat en Irak et en Syrie en 2014, et les talibans reprennent le pouvoir en Afghanistan en août 2021, après le retrait américain.",
              ],
            },
            {
              heading: "Un monde multipolaire et des enjeux communs",
              paragraphs: [
                "Le monde devient multipolaire. La Chine, membre de l'OMC depuis 2001, devient la deuxième économie mondiale en 2010 et affirme sa puissance militaire et diplomatique. Le Brésil, la Russie, l'Inde et la Chine tiennent en 2009 leur premier sommet (BRIC), rejoints ensuite par l'Afrique du Sud (BRICS), puis par d'autres pays à partir de 2024. La crise financière de 2008, partie des États-Unis (faillite de la banque Lehman Brothers en septembre), révèle la fragilité du système mondial. La Russie de Vladimir Poutine annexe la Crimée en 2014, puis envahit l'Ukraine le 24 février 2022 : la guerre revient sur le continent européen.",
                "En même temps, des enjeux mondiaux exigent une coopération. Le réchauffement climatique a conduit au sommet de la Terre de Rio (1992), au protocole de Kyoto (1997) puis à l'accord de Paris (2015), qui vise à contenir le réchauffement nettement en dessous de 2 °C ; mais les États-Unis s'en sont retirés une première fois (effectivement en 2020) puis l'ont de nouveau quitté sur décision prise en 2025. La pandémie de Covid-19, déclarée par l'OMS en mars 2020, a montré à la fois l'interdépendance des sociétés et la difficulté de la coopération sanitaire.",
              ],
              box: { label: "À retenir", text: "Depuis 1991, le monde est passé de l'hyperpuissance américaine à un monde multipolaire et conflictuel, où les enjeux communs (climat, santé, justice) se heurtent aux rivalités de puissance." },
            },
          ],
          keyPoints: [
            "Après 1991, les États-Unis sont une « hyperpuissance » (Hubert Védrine) ; guerre du Golfe (1991) sous mandat de l'ONU.",
            "Échecs de la paix : Srebrenica (juillet 1995), génocide des Tutsi au Rwanda (avril-juillet 1994).",
            "Justice internationale : tribunaux pour l'ex-Yougoslavie (1993) et le Rwanda (1994), CPI (statut de Rome 1998, en fonction depuis 2002).",
            "11 septembre 2001 : attentats d'al-Qaïda ; guerres d'Afghanistan (2001) et d'Irak (2003, sans mandat de l'ONU).",
            "Monde multipolaire : essor de la Chine (OMC 2001), BRICS, crise de 2008, annexion de la Crimée (2014), invasion de l'Ukraine (2022).",
            "Enjeux communs : climat (Rio 1992, Kyoto 1997, Paris 2015), pandémie de Covid-19 (2020).",
          ],
          example: {
            statement: "Montrez que les attentats du 11 septembre 2001 sont un tournant dans les relations internationales.",
            solution: [
              "L'événement : le 11 septembre 2001, al-Qaïda frappe New York et Washington ; environ 3 000 morts. Pour la première fois depuis Pearl Harbor (1941), les États-Unis sont attaqués massivement sur leur sol, et par un acteur non étatique.",
              "La réponse militaire : la « guerre contre le terrorisme » conduit à l'intervention en Afghanistan (octobre 2001) contre les talibans, avec le soutien de l'OTAN.",
              "La rupture de 2003 : l'invasion de l'Irak sans mandat de l'ONU divise les alliés (opposition de la France et de l'Allemagne) et affaiblit le multilatéralisme.",
              "Les conséquences régionales : déstabilisation du Moyen-Orient, naissance de Daech (califat proclamé en 2014), retour des talibans en 2021.",
              "Les conséquences intérieures : renforcement des mesures de sécurité et de surveillance dans de nombreux pays.",
              "Conclusion : le 11 septembre ouvre une période où le terrorisme devient une menace mondiale et où la puissance américaine montre ses limites.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement : 1991 ; 1994 ; juillet 1995 ; 11 septembre 2001 ; 24 février 2022. Événements : massacre de Srebrenica, invasion de l'Ukraine par la Russie, guerre du Golfe, génocide des Tutsi au Rwanda, attentats d'al-Qaïda aux États-Unis.",
              hint: "Partez des deux dates les plus connues (2001 et 2022) puis replacez les conflits des années 1990.",
              solution: [
                "1991 : guerre du Golfe (libération du Koweït).",
                "1994 : génocide des Tutsi au Rwanda (avril-juillet).",
                "Juillet 1995 : massacre de Srebrenica en Bosnie-Herzégovine.",
                "11 septembre 2001 : attentats d'al-Qaïda à New York et Washington.",
                "24 février 2022 : invasion de l'Ukraine par la Russie.",
              ],
            },
            {
              level: 2,
              statement: "Comparez la guerre du Golfe de 1991 et la guerre d'Irak de 2003 : quels points communs, quelles différences ?",
              hint: "Comparez l'adversaire, le rôle de l'ONU et la position des alliés des États-Unis.",
              solution: [
                "Point commun : dans les deux cas, les États-Unis mènent une coalition contre l'Irak de Saddam Hussein.",
                "Différence de motif : en 1991, il s'agit de libérer le Koweït envahi ; en 2003, Washington invoque des armes de destruction massive (jamais trouvées) et des liens supposés avec le terrorisme.",
                "Différence de légitimité : la guerre de 1991 est autorisée par le Conseil de sécurité ; celle de 2003 est menée sans son accord.",
                "Différence diplomatique : en 1991, la France participe à la coalition ; en 2003, elle s'oppose à la guerre avec l'Allemagne et la Russie.",
                "Résultat : la première guerre incarne l'espoir d'un ordre mondial fondé sur l'ONU, la seconde l'unilatéralisme américain et la crise du multilatéralisme.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « Depuis 1991, le monde est-il devenu plus stable ? » Rédigez une introduction et un plan détaillé, avec des exemples datés.",
              hint: "Montrez d'abord les espoirs et les progrès (coopération, justice internationale), puis les conflits et les rivalités, sans oublier les enjeux mondiaux.",
              solution: [
                "Introduction : la fin de la guerre froide en 1991 fait naître l'espoir d'un monde pacifié par le droit international. Problématique : la disparition de l'affrontement bipolaire a-t-elle rendu le monde plus stable, ou a-t-elle fait place à de nouvelles formes d'instabilité ? Annonce : l'espoir d'un nouvel ordre mondial, des conflits nouveaux, un monde multipolaire face aux enjeux communs.",
                "I. L'espoir d'un ordre mondial (1991-2001) : hyperpuissance américaine, guerre du Golfe sous mandat de l'ONU, multiplication des opérations de paix, justice pénale internationale (TPIY 1993, TPIR 1994, CPI en 1998-2002).",
                "II. Des conflits nouveaux : guerres de Yougoslavie (Srebrenica, 1995), génocide des Tutsi (1994), terrorisme islamiste (11 septembre 2001), guerres d'Afghanistan et d'Irak, Daech.",
                "III. Un monde multipolaire et fragmenté : essor de la Chine, BRICS, crise de 2008, retour de la guerre en Europe (Crimée 2014, Ukraine 2022) ; enjeux communs (climat, pandémie) traités difficilement.",
                "Conclusion : le monde de l'après-guerre froide n'est pas plus stable ; l'ordre bipolaire a laissé place à une instabilité multipolaire, où la coopération reste nécessaire mais fragile.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Guerre du Golfe et libération du Koweït",
              "Génocide des Tutsi au Rwanda",
              "Massacre de Srebrenica",
              "Attentats du 11 septembre",
              "Invasion de l'Irak par les États-Unis",
              "Faillite de Lehman Brothers et crise financière",
              "Invasion de l'Ukraine par la Russie",
            ],
          },
          quiz: [
            {
              q: "Qui a qualifié les États-Unis d'« hyperpuissance » ?",
              options: ["George H. W. Bush", "Hubert Védrine", "Mikhaïl Gorbatchev", "Vladimir Poutine, président russe"],
              answer: 1,
              why: "Le ministre français des Affaires étrangères Hubert Védrine a forgé ce terme à la fin des années 1990.",
            },
            {
              q: "Quel tribunal juge depuis 2002 les crimes de génocide, crimes contre l'humanité et crimes de guerre ?",
              options: ["La Cour internationale de justice", "La Cour européenne des droits de l'homme", "La Cour pénale internationale", "Le Conseil de sécurité"],
              answer: 2,
              why: "La CPI, installée à La Haye, juge des individus ; son statut a été adopté à Rome en 1998.",
            },
            {
              q: "Quelle intervention militaire est menée sans l'accord du Conseil de sécurité ?",
              options: ["L'invasion de l'Irak en 2003", "La guerre du Golfe en 1991", "La mission de la FORPRONU en Bosnie", "Aucune de ces trois interventions"],
              answer: 0,
              why: "En 2003, les États-Unis et le Royaume-Uni envahissent l'Irak sans autorisation de l'ONU, malgré l'opposition française ; la guerre du Golfe et la FORPRONU reposaient sur des résolutions du Conseil de sécurité.",
            },
            {
              q: "Combien de victimes fait le génocide des Tutsi au Rwanda selon l'ONU ?",
              options: ["Environ 8 000", "Environ 80 000", "Environ 8 millions", "Environ 800 000"],
              answer: 3,
              why: "D'avril à juillet 1994, environ 800 000 personnes, en très grande majorité des Tutsi, sont assassinées.",
            },
            {
              q: "Quel accord international sur le climat est signé en 2015 ?",
              options: ["Le protocole de Kyoto", "L'accord de Paris", "Le sommet de la Terre de Rio", "La convention de Genève"],
              answer: 1,
              why: "L'accord de Paris (COP21) vise à contenir le réchauffement nettement en dessous de 2 °C.",
            },
          ],
          trap: "Confondre la Cour pénale internationale, qui juge des individus, et la Cour internationale de justice, organe de l'ONU qui règle les différends entre États.",
          method: "Organisez vos connaissances en trois périodes (1991-2001, 2001-2008, depuis 2008) et retenez pour chacune un événement, un acteur et une notion : vous disposerez d'une trame chronologique solide pour toute question sur ce chapitre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'construction-europeenne',
          title: 'La construction européenne : élargir, approfondir, remettre en question',
          minutes: 35,
          objectives: [
            "Expliquer l'approfondissement de la construction européenne depuis le traité de Maastricht (1992).",
            "Décrire les élargissements de 1995 à 2013 et leurs enjeux.",
            "Analyser les remises en question de la construction européenne : rejets de 2005, crise de la zone euro, Brexit.",
            "Rédiger une réponse argumentée sur le bilan de la construction européenne depuis 1992.",
          ],
          course: [
            {
              heading: "Maastricht : de la Communauté à l'Union européenne",
              paragraphs: [
                "Le traité de Maastricht, signé le 7 février 1992 et entré en vigueur le 1er novembre 1993, transforme la Communauté économique européenne en Union européenne. Il prévoit une monnaie unique, crée une citoyenneté européenne (droit de vote et d'éligibilité aux élections municipales et européennes pour les ressortissants de l'UE résidant dans un autre État membre) et lance une coopération en politique étrangère et en matière de justice. En France, il n'est ratifié que de justesse par référendum en septembre 1992 (environ 51 % de oui).",
                "L'euro devient la monnaie de onze pays le 1er janvier 1999 (monnaie scripturale) ; les pièces et les billets circulent à partir du 1er janvier 2002. La Banque centrale européenne, installée à Francfort, conduit la politique monétaire. Les États qui adoptent l'euro s'engagent à respecter des critères de convergence (déficit public inférieur à 3 % du PIB, dette publique inférieure à 60 % du PIB).",
              ],
              box: { label: "Repère", text: "7 février 1992 : signature du traité de Maastricht. 1er novembre 1993 : naissance de l'Union européenne. 1er janvier 1999 : naissance de l'euro. 1er janvier 2002 : pièces et billets en euros." },
            },
            {
              heading: "Élargir : de 12 à 28 États",
              paragraphs: [
                "L'UE s'élargit en 1995 à l'Autriche, à la Finlande et à la Suède. Pour les anciennes démocraties populaires, l'adhésion est un moyen d'ancrer la démocratie et l'économie de marché : les critères de Copenhague (1993) exigent des institutions démocratiques, le respect de l'État de droit et des minorités, une économie de marché viable et la reprise du droit européen.",
                "Le 1er mai 2004, dix États adhèrent : huit pays d'Europe centrale et orientale (Pologne, République tchèque, Slovaquie, Hongrie, Slovénie, Estonie, Lettonie, Lituanie) et deux îles méditerranéennes (Chypre et Malte). La Bulgarie et la Roumanie suivent en 2007, la Croatie en 2013 : l'UE compte alors 28 membres. Cet élargissement réunifie le continent après la guerre froide, mais accroît les écarts de richesse et rend les décisions plus difficiles à prendre à l'unanimité.",
                "Depuis l'invasion russe de 2022, l'élargissement est relancé : l'Ukraine et la Moldavie ont obtenu le statut de candidat en juin 2022, s'ajoutant à plusieurs pays des Balkans occidentaux.",
              ],
            },
            {
              heading: "Approfondir : réformer les institutions",
              paragraphs: [
                "Pour faire fonctionner une Union élargie, les traités d'Amsterdam (1997) et de Nice (2001) adaptent les institutions. Un traité établissant une Constitution pour l'Europe est signé en 2004, mais il est rejeté par référendum en France (29 mai 2005, environ 55 % de non) puis aux Pays-Bas (1er juin 2005). Une partie de l'opinion exprime ainsi sa crainte d'une Europe jugée trop libérale et éloignée des citoyens.",
                "Le traité de Lisbonne, signé en 2007 et entré en vigueur le 1er décembre 2009, reprend l'essentiel des réformes institutionnelles : un président stable du Conseil européen, un haut représentant pour les affaires étrangères, davantage de pouvoirs pour le Parlement européen (élu au suffrage universel direct depuis 1979), une Charte des droits fondamentaux juridiquement contraignante, une initiative citoyenne européenne et, pour la première fois, une procédure de retrait d'un État (article 50).",
              ],
              box: { label: "Définition", text: "Euroscepticisme : attitude de méfiance ou d'hostilité envers la construction européenne, qui peut aller de la critique de certaines politiques à la volonté de quitter l'UE." },
            },
            {
              heading: "Remettre en question : crises et Brexit",
              paragraphs: [
                "La crise financière de 2008 devient en 2010 une crise des dettes publiques dans la zone euro : la Grèce, puis l'Irlande, le Portugal et d'autres pays doivent être aidés en échange de politiques d'austérité très contestées. La crise migratoire de 2015 divise ensuite les États membres sur l'accueil des réfugiés, et les partis eurosceptiques progressent dans de nombreux pays.",
                "Le 23 juin 2016, les électeurs britanniques votent à environ 52 % pour quitter l'UE. Le Royaume-Uni sort de l'Union le 31 janvier 2020, après de longues négociations : c'est la première fois qu'un État membre quitte l'UE.",
                "L'UE montre pourtant aussi sa capacité de réaction : en 2020, face à la crise du Covid-19, les 27 adoptent un plan de relance, NextGenerationEU, financé pour la première fois par un emprunt commun ; depuis 2022, ils soutiennent l'Ukraine et sanctionnent la Russie. La construction européenne avance souvent par des crises.",
              ],
              box: { label: "À retenir", text: "Depuis 1992, l'Europe s'est approfondie (Maastricht, euro, Lisbonne) et élargie (de 12 à 28 puis 27 États), mais elle a aussi été remise en question (non de 2005, crise de la zone euro, Brexit)." },
            },
          ],
          keyPoints: [
            "Traité de Maastricht (signé en 1992, en vigueur en 1993) : naissance de l'UE, citoyenneté européenne, projet de monnaie unique.",
            "Euro : monnaie scripturale en 1999, pièces et billets en 2002 ; BCE à Francfort.",
            "Élargissements : 1995 (Autriche, Finlande, Suède), 2004 (dix États), 2007 (Bulgarie, Roumanie), 2013 (Croatie).",
            "2005 : rejet du traité constitutionnel par la France et les Pays-Bas ; traité de Lisbonne en vigueur en 2009.",
            "Crises : dettes publiques de la zone euro (à partir de 2010), crise migratoire (2015).",
            "Brexit : référendum du 23 juin 2016, sortie le 31 janvier 2020 ; NextGenerationEU (2020) et soutien à l'Ukraine (2022).",
          ],
          example: {
            statement: "Expliquez pourquoi l'élargissement de 2004 est à la fois une réussite historique et un défi pour l'Union européenne.",
            solution: [
              "Rappeler le fait : le 1er mai 2004, dix États adhèrent, dont huit anciens pays communistes d'Europe centrale et orientale, ainsi que Chypre et Malte.",
              "Une réussite historique : quinze ans après la chute du mur de Berlin, l'élargissement réunifie le continent divisé par la guerre froide et ancre ces pays dans la démocratie et l'État de droit (critères de Copenhague).",
              "Une réussite économique : les nouveaux membres connaissent une forte croissance grâce au marché unique et aux fonds de cohésion.",
              "Un défi institutionnel : à 25 puis 27 et 28, l'unanimité devient difficile à obtenir, d'où les réformes de Nice puis de Lisbonne.",
              "Un défi économique et politique : écarts de salaires, débats sur les délocalisations et sur le « plombier polonais » en France en 2005 ; plus tard, tensions avec certains gouvernements sur l'État de droit.",
              "Conclusion : l'élargissement de 2004 est un succès politique majeur, mais il oblige l'UE à repenser son fonctionnement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez dans l'ordre chronologique : traité de Lisbonne en vigueur ; référendum sur le Brexit ; naissance de l'euro (monnaie scripturale) ; signature du traité de Maastricht ; élargissement à dix nouveaux États ; rejet du traité constitutionnel en France. Donnez la date de chaque événement.",
              hint: "Deux événements ont lieu dans les années 1990, trois dans les années 2000, un dans les années 2010.",
              solution: [
                "Signature du traité de Maastricht : 7 février 1992.",
                "Naissance de l'euro (monnaie scripturale) : 1er janvier 1999.",
                "Élargissement à dix nouveaux États : 1er mai 2004.",
                "Rejet du traité constitutionnel en France : 29 mai 2005.",
                "Entrée en vigueur du traité de Lisbonne : 1er décembre 2009.",
                "Référendum sur le Brexit : 23 juin 2016.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez la différence entre « élargir » et « approfondir » la construction européenne, avec deux exemples de chaque depuis 1992.",
              hint: "Élargir concerne le nombre d'États ; approfondir concerne ce que les États font ensemble.",
              solution: [
                "Élargir, c'est accueillir de nouveaux États membres : élargissement de 1995 (Autriche, Finlande, Suède) ; élargissement de 2004 (dix États, dont la Pologne).",
                "Approfondir, c'est renforcer l'intégration entre les États, en mettant en commun de nouvelles compétences ou en réformant les institutions : la monnaie unique prévue par Maastricht (euro en 1999) ; le traité de Lisbonne (2009) qui renforce le Parlement européen et crée un président stable du Conseil européen.",
                "Les deux mouvements peuvent entrer en tension : plus l'Union compte de membres, plus il est difficile de s'accorder pour aller plus loin ensemble.",
                "Résultat : élargir concerne l'étendue de l'Union, approfondir concerne son degré d'intégration.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « Depuis 1992, la construction européenne : élargir, approfondir, remettre en question. » Montrez que ces trois dynamiques se combinent. Proposez une introduction et un plan détaillé.",
              hint: "Une partie par dynamique, en montrant à chaque fois les liens avec les deux autres (par exemple, l'élargissement rend nécessaire l'approfondissement institutionnel).",
              solution: [
                "Introduction : en 1992, le traité de Maastricht fait passer la construction européenne d'une communauté économique à une union politique. Problématique : comment l'UE a-t-elle concilié l'approfondissement de son intégration et son élargissement, et pourquoi ces évolutions ont-elles suscité des remises en question ? Annonce : approfondir, élargir, remettre en question.",
                "I. Approfondir : Maastricht (1992-1993), citoyenneté européenne, euro (1999, 2002), Amsterdam et Nice, traité de Lisbonne (2009), plan de relance commun NextGenerationEU (2020).",
                "II. Élargir : 1995, 2004 (réunification du continent), 2007, 2013 ; critères de Copenhague ; nouvelles candidatures après 2022 (Ukraine, Moldavie). L'élargissement impose des réformes institutionnelles.",
                "III. Remettre en question : référendums négatifs de 2005 en France et aux Pays-Bas, crise des dettes publiques de 2010, crise migratoire de 2015, montée de l'euroscepticisme, Brexit (2016-2020).",
                "Conclusion : les trois dynamiques s'entremêlent ; les crises n'ont pas arrêté la construction européenne, qui a souvent répondu par davantage d'intégration, mais elles révèlent un déficit de confiance d'une partie des citoyens.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la construction européenne depuis 1992.",
            statements: [
              { text: "Le traité de Maastricht a créé l'Union européenne.", true: true, why: "Entré en vigueur le 1er novembre 1993, il transforme la Communauté en Union européenne." },
              { text: "Les pièces et billets en euros circulent depuis 1999.", true: false, why: "En 1999, l'euro n'existe que sous forme scripturale ; pièces et billets arrivent le 1er janvier 2002." },
              { text: "En 2004, dix États ont rejoint l'Union européenne en même temps.", true: true, why: "C'est le plus grand élargissement de l'histoire de l'UE, le 1er mai 2004." },
              { text: "Les Français ont approuvé le traité constitutionnel européen en 2005.", true: false, why: "Le 29 mai 2005, le non l'emporte avec environ 55 % des voix." },
              { text: "Le traité de Lisbonne prévoit une procédure de retrait d'un État membre.", true: true, why: "L'article 50, utilisé par le Royaume-Uni, organise la sortie d'un État de l'Union." },
              { text: "Le Royaume-Uni a quitté l'UE dès le lendemain du référendum de 2016.", true: false, why: "Après de longues négociations, la sortie effective n'a eu lieu que le 31 janvier 2020." },
              { text: "NextGenerationEU est financé par un emprunt commun des États de l'UE.", true: true, why: "C'est une première : la Commission emprunte au nom de l'Union pour financer la relance après le Covid-19." },
            ],
          },
          quiz: [
            {
              q: "Quel traité, signé en 1992, crée la citoyenneté européenne ?",
              options: ["Le traité de Rome, signé par six États", "Le traité de Nice", "Le traité de Lisbonne", "Le traité de Maastricht"],
              answer: 3,
              why: "Le traité de Maastricht crée l'Union européenne et la citoyenneté européenne.",
            },
            {
              q: "Quels pays rejoignent l'Union européenne en 1995 ?",
              options: ["L'Autriche, la Finlande et la Suède", "L'Espagne et le Portugal", "La Bulgarie et la Roumanie", "La Pologne, la Hongrie et la Tchéquie"],
              answer: 0,
              why: "L'élargissement de 1995 concerne trois pays neutres pendant la guerre froide : l'Autriche, la Finlande et la Suède.",
            },
            {
              q: "Quel pays rejette le traité constitutionnel européen par référendum en 2005, avec la France ?",
              options: ["L'Allemagne", "Les Pays-Bas", "Le Royaume-Uni", "La Belgique"],
              answer: 1,
              why: "Les Néerlandais votent non le 1er juin 2005, trois jours après les Français.",
            },
            {
              q: "Quand le traité de Lisbonne entre-t-il en vigueur ?",
              options: ["En 2004", "En 2005", "En 2009", "En 2016, après le référendum britannique"],
              answer: 2,
              why: "Signé en 2007, il entre en vigueur le 1er décembre 2009 après sa ratification par tous les États.",
            },
            {
              q: "Le Royaume-Uni quitte effectivement l'UE le :",
              options: ["23 juin 2016", "1er janvier 2002", "31 janvier 2020", "24 février 2022"],
              answer: 2,
              why: "Le Brexit, voté le 23 juin 2016, devient effectif le 31 janvier 2020.",
            },
          ],
          trap: "Confondre la date du référendum sur le Brexit (23 juin 2016) et celle de la sortie effective (31 janvier 2020), ou la naissance de l'euro scriptural (1999) et l'arrivée des pièces et billets (2002).",
          method: "Classez les grandes dates de la construction européenne en trois colonnes (élargir, approfondir, remettre en question) : ce tableau correspond directement au titre du programme et vous donne un plan prêt à l'emploi.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'republique-francaise',
          title: 'La République française',
          minutes: 35,
          objectives: [
            "Expliquer les évolutions des institutions de la Ve République depuis les années 1990 (cohabitations, quinquennat, révision de 2008, décentralisation).",
            "Identifier les grands principes républicains et leur réaffirmation (laïcité, égalité).",
            "Analyser l'évolution des droits : parité, PACS, mariage pour tous, reconnaissance mémorielle.",
            "Mettre en relation les évolutions de la République et celles de la société française.",
          ],
          course: [
            {
              heading: "Des institutions qui évoluent",
              paragraphs: [
                "La Ve République, fondée en 1958, montre sa souplesse avec deux nouvelles cohabitations : de 1993 à 1995 (François Mitterrand président, Édouard Balladur Premier ministre), puis de 1997 à 2002, la plus longue (Jacques Chirac président, Lionel Jospin Premier ministre), après une dissolution de l'Assemblée qui tourne au désavantage du président.",
                "Par le référendum du 24 septembre 2000, les Français approuvent le quinquennat : le mandat présidentiel passe de sept à cinq ans à partir de 2002. Comme les élections législatives suivent désormais de peu l'élection présidentielle, le risque de cohabitation diminue et le rôle du président se renforce. La révision constitutionnelle du 23 juillet 2008 limite à deux le nombre de mandats présidentiels consécutifs, renforce les pouvoirs du Parlement et crée la question prioritaire de constitutionnalité (QPC), qui permet à tout justiciable de contester une loi devant le Conseil constitutionnel (en vigueur depuis 2010).",
                "Depuis 2022, et plus encore après la dissolution de juin 2024, aucune majorité absolue ne se dégage à l'Assemblée nationale : la vie politique, fragmentée, doit s'adapter à des gouvernements fragiles.",
              ],
              box: { label: "Repère", text: "1993-1995 et 1997-2002 : cohabitations. 24 septembre 2000 : référendum sur le quinquennat. 23 juillet 2008 : révision constitutionnelle (deux mandats consécutifs au plus, QPC)." },
            },
            {
              heading: "Une République décentralisée",
              paragraphs: [
                "Après les lois Defferre de 1982, la décentralisation franchit une nouvelle étape avec la révision constitutionnelle du 28 mars 2003 : l'article 1er de la Constitution affirme désormais que l'organisation de la République est décentralisée, les régions sont inscrites dans la Constitution et les collectivités peuvent organiser des référendums locaux.",
                "La réforme territoriale de 2014-2015 réorganise la carte : depuis le 1er janvier 2016, la France métropolitaine compte 13 régions au lieu de 22, et la loi NOTRe (2015) précise les compétences de chaque niveau de collectivité ; des métropoles sont créées pour les grandes agglomérations. Il s'agit de rapprocher la décision des citoyens, mais aussi de donner aux territoires une taille comparable à celle des régions européennes.",
              ],
            },
            {
              heading: "Des principes réaffirmés",
              paragraphs: [
                "La laïcité, fondée sur la loi de séparation des Églises et de l'État de 1905, garantit la liberté de conscience et la neutralité de l'État. Elle est réaffirmée face à de nouveaux débats : la loi du 15 mars 2004 interdit, dans les écoles, collèges et lycées publics, le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse. En 2021, une loi confortant le respect des principes de la République renforce les outils contre le séparatisme.",
                "La République est aussi confrontée au terrorisme islamiste : attentats de janvier 2015 contre la rédaction de Charlie Hebdo et un magasin Hyper Cacher, attentats du 13 novembre 2015 à Paris et Saint-Denis (130 morts), assassinat du professeur Samuel Paty en octobre 2020. Ces attaques visent les libertés et les valeurs républicaines, notamment la liberté d'expression.",
              ],
              box: { label: "Définition", text: "Laïcité : principe qui sépare l'État et les religions, garantit la liberté de conscience et de culte et impose la neutralité de l'État et des services publics. Il repose en France sur la loi du 9 décembre 1905." },
            },
            {
              heading: "De nouveaux droits et un regard sur le passé",
              paragraphs: [
                "L'égalité entre les femmes et les hommes progresse dans la vie politique. La révision constitutionnelle du 8 juillet 1999 prévoit que la loi favorise l'égal accès des femmes et des hommes aux mandats électoraux et fonctions électives ; la loi du 6 juin 2000 sur la parité impose des listes alternant femmes et hommes pour plusieurs scrutins et pénalise financièrement les partis qui ne présentent pas autant de candidates que de candidats aux législatives. En 2024, la liberté de recourir à l'IVG est inscrite dans la Constitution.",
                "Le droit de la famille s'ouvre à des formes nouvelles : le pacte civil de solidarité (PACS), créé par la loi du 15 novembre 1999, ouvre un cadre juridique aux couples, de même sexe ou non ; la loi du 17 mai 2013 ouvre le mariage aux couples de même sexe, malgré de fortes mobilisations contre ce texte.",
                "La République regarde aussi son passé en face. Le 16 juillet 1995, le président Jacques Chirac reconnaît la responsabilité de l'État français dans la déportation des Juifs, lors de la commémoration de la rafle du Vél d'Hiv. La loi Taubira du 21 mai 2001 reconnaît la traite et l'esclavage comme crimes contre l'humanité.",
              ],
              box: { label: "À retenir", text: "Depuis les années 1990, la République adapte ses institutions (quinquennat, QPC, décentralisation), réaffirme ses principes (laïcité) et élargit les droits (parité, PACS, mariage pour tous), tout en reconnaissant les pages sombres de son histoire." },
            },
          ],
          keyPoints: [
            "Cohabitations de 1993-1995 (Mitterrand-Balladur) et 1997-2002 (Chirac-Jospin).",
            "Quinquennat approuvé par référendum le 24 septembre 2000 ; révision de 2008 : deux mandats consécutifs au plus, QPC.",
            "Décentralisation : révision de 2003 (République « décentralisée »), 13 régions métropolitaines depuis 2016, loi NOTRe (2015).",
            "Laïcité réaffirmée : loi du 15 mars 2004 sur les signes religieux ostensibles à l'école publique.",
            "Parité (révision de 1999, loi du 6 juin 2000), PACS (1999), mariage pour tous (17 mai 2013), IVG inscrite dans la Constitution (2024).",
            "Mémoire : discours de Jacques Chirac sur le Vél d'Hiv (16 juillet 1995), loi Taubira (2001).",
          ],
          example: {
            statement: "Montrez que la parité est passée d'un principe à des applications concrètes.",
            solution: [
              "Le constat de départ : à la fin des années 1990, les femmes sont très peu nombreuses à l'Assemblée nationale (environ un dixième des députés), alors que l'égalité est un principe républicain.",
              "Le principe : la révision constitutionnelle du 8 juillet 1999 inscrit dans la Constitution que la loi favorise l'égal accès des femmes et des hommes aux mandats et fonctions électives.",
              "La première application : la loi du 6 juin 2000 impose la parité sur les listes pour les élections au scrutin de liste (municipales dans les communes concernées, régionales, européennes) et prévoit des pénalités financières pour les partis aux législatives.",
              "Les prolongements : le scrutin binominal femme-homme pour les élections départementales (appliqué en 2015) ; l'extension de la parité aux responsabilités professionnelles et sociales par la révision de 2008.",
              "Les limites : aux législatives, scrutin uninominal, certains partis préfèrent payer des pénalités ; les exécutifs locaux (maires, présidents) restent majoritairement masculins.",
              "Conclusion : la parité s'est traduite par des règles concrètes qui ont fortement féminisé les assemblées élues, sans faire disparaître toutes les inégalités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à la réforme correspondante : 1999 ; 24 septembre 2000 ; 15 mars 2004 ; 23 juillet 2008 ; 17 mai 2013. Réformes : loi sur les signes religieux à l'école, mariage pour tous, référendum sur le quinquennat, création du PACS, révision constitutionnelle créant la QPC.",
              hint: "Le PACS et la parité datent de la même année.",
              solution: [
                "1999 : création du PACS (loi du 15 novembre 1999).",
                "24 septembre 2000 : référendum sur le quinquennat.",
                "15 mars 2004 : loi sur les signes religieux ostensibles à l'école publique.",
                "23 juillet 2008 : révision constitutionnelle créant la QPC.",
                "17 mai 2013 : loi ouvrant le mariage aux couples de même sexe.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi le passage au quinquennat a réduit le risque de cohabitation.",
              hint: "Comparez la durée du mandat présidentiel et celle du mandat des députés, puis regardez l'ordre des élections depuis 2002.",
              solution: [
                "Avant 2002, le président était élu pour sept ans et les députés pour cinq ans : les deux élections ne coïncidaient pas, et une majorité hostile au président pouvait sortir des urnes en cours de septennat (1986, 1993) ou après une dissolution (1997).",
                "Avec le quinquennat, les deux mandats ont la même durée : cinq ans.",
                "Depuis 2002, les élections législatives ont lieu quelques semaines après l'élection présidentielle ; les électeurs ont tendance à donner une majorité au président qu'ils viennent d'élire.",
                "Résultat : le quinquennat aligne les deux calendriers et rend la cohabitation beaucoup moins probable, ce qui renforce le rôle du président (seule une dissolution ou une Assemblée sans majorité, comme depuis 2022, change la donne).",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (analyse de document) : le document est le discours prononcé par Jacques Chirac le 16 juillet 1995 lors de la commémoration de la rafle du Vél d'Hiv (idées résumées : la France, ce jour-là, a accompli l'irréparable ; la folie criminelle de l'occupant a été secondée par des Français et par l'État français ; la Nation a une dette imprescriptible envers les victimes). Présentez le document, expliquez sa signification et montrez sa portée.",
              hint: "Rappelez ce qu'est la rafle du Vél d'Hiv (juillet 1942), la position des présidents précédents, puis ce que ce discours change dans la mémoire nationale.",
              solution: [
                "Présentation : discours officiel du président de la République Jacques Chirac, élu deux mois plus tôt, prononcé le 16 juillet 1995 lors de la commémoration de la rafle du Vélodrome d'Hiver.",
                "Contexte historique : les 16 et 17 juillet 1942, environ 13 000 Juifs, dont plus de 4 000 enfants, sont arrêtés à Paris par la police française, sur ordre des autorités de Vichy en accord avec l'occupant, puis déportés vers les camps d'extermination.",
                "Contexte mémoriel : jusque-là, les présidents, notamment de Gaulle et Mitterrand, considéraient que la République n'avait pas à répondre des actes du régime de Vichy, jugé illégitime.",
                "Signification : Jacques Chirac reconnaît que des Français et l'État français ont secondé les crimes de l'occupant ; il parle d'une dette imprescriptible de la Nation envers les victimes.",
                "Portée : ce discours marque un tournant dans la mémoire officielle de la Seconde Guerre mondiale ; il s'inscrit dans un mouvement plus large de reconnaissance des pages sombres de l'histoire nationale, prolongé par la loi Taubira de 2001.",
                "Conclusion : la République montre sa capacité à regarder son passé en face, ce qui renforce ses valeurs plutôt que de les affaiblir.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque réforme ou événement à son contenu.",
            pairs: [
              { left: "Quinquennat (2000)", right: "Mandat présidentiel ramené de sept à cinq ans" },
              { left: "QPC (2008)", right: "Possibilité pour un justiciable de contester une loi devant le Conseil constitutionnel" },
              { left: "Loi du 6 juin 2000", right: "Parité sur les listes électorales" },
              { left: "Loi du 15 mars 2004", right: "Interdiction des signes religieux ostensibles à l'école publique" },
              { left: "Loi du 17 mai 2013", right: "Mariage ouvert aux couples de même sexe" },
              { left: "Discours du 16 juillet 1995", right: "Reconnaissance de la responsabilité de l'État français dans la déportation des Juifs" },
            ],
          },
          quiz: [
            {
              q: "Qui est Premier ministre pendant la cohabitation de 1997 à 2002 ?",
              options: ["Édouard Balladur", "Jacques Chirac", "Lionel Jospin", "Michel Rocard, Premier ministre de 1988 à 1991"],
              answer: 2,
              why: "Après la dissolution de 1997, la gauche gagne les législatives et Lionel Jospin devient Premier ministre de Jacques Chirac.",
            },
            {
              q: "Que permet la question prioritaire de constitutionnalité (QPC) ?",
              options: ["Contester une loi déjà en vigueur", "Élire directement le Premier ministre", "Dissoudre le Sénat", "Organiser un référendum d'initiative locale"],
              answer: 0,
              why: "Depuis 2010, tout justiciable peut, à l'occasion d'un procès, demander au Conseil constitutionnel de vérifier qu'une loi respecte les droits garantis par la Constitution.",
            },
            {
              q: "Combien la France métropolitaine compte-t-elle de régions depuis 2016 ?",
              options: ["22", "18", "27", "13"],
              answer: 3,
              why: "La réforme de 2015 a ramené le nombre de régions métropolitaines de 22 à 13 (18 avec les régions d'outre-mer).",
            },
            {
              q: "Quelle loi reconnaît la traite et l'esclavage comme crimes contre l'humanité ?",
              options: ["La loi Veil", "La loi Taubira de 2001", "La loi NOTRe", "La loi sur la parité du 6 juin 2000"],
              answer: 1,
              why: "La loi du 21 mai 2001, portée par Christiane Taubira, reconnaît la traite négrière et l'esclavage comme crimes contre l'humanité.",
            },
            {
              q: "Quel principe la loi du 15 mars 2004 applique-t-elle à l'école publique ?",
              options: ["La parité", "La laïcité", "La décentralisation", "La gratuité"],
              answer: 1,
              why: "Elle interdit aux élèves des écoles, collèges et lycées publics le port de signes religieux ostensibles, au nom de la laïcité.",
            },
          ],
          trap: "Croire que le quinquennat a supprimé toute possibilité de cohabitation : il la rend beaucoup moins probable en alignant les calendriers, mais une dissolution ou une Assemblée sans majorité peuvent toujours changer l'équilibre des pouvoirs.",
          method: "Pour ce chapitre, construisez un tableau à trois entrées (institutions, principes, droits) et placez-y chaque réforme avec sa date exacte : c'est la meilleure façon de montrer dans une copie que la République évolue sur plusieurs plans à la fois.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME CONCLUSIF : LA FRANCE ET SES RÉGIONS                 */
    /* ==================================================================== */
    {
      id: 'france-et-ses-regions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'lignes-de-force',
          title: 'Les lignes de force du territoire français',
          minutes: 30,
          objectives: [
            "Identifier les lignes de force du territoire français : Paris, le réseau des métropoles, les axes, les littoraux et les frontières.",
            "Expliquer les dynamiques démographiques et économiques qui opposent les territoires attractifs et les territoires en difficulté.",
            "Situer les espaces ultramarins dans l'organisation du territoire national.",
            "Réaliser la légende organisée d'un croquis de synthèse sur le territoire français.",
          ],
          course: [
            {
              heading: "Paris, une métropole mondiale qui domine le territoire",
              paragraphs: [
                "La France compte environ 68 millions d'habitants. Son territoire est dominé par Paris et l'Île-de-France : plus de 12 millions d'habitants, environ 30 % de la richesse nationale, la majorité des sièges sociaux des grandes entreprises, les grands pouvoirs politiques, les principales universités et institutions culturelles. Paris est une métropole mondiale et un hub (aéroports de Paris-Charles-de-Gaulle et d'Orly, étoile ferroviaire des lignes à grande vitesse).",
                "Ce poids exceptionnel de la capitale par rapport aux autres villes, appelé macrocéphalie, est hérité d'une longue histoire de centralisation politique. L'aire d'attraction de Lyon, deuxième de France, est plusieurs fois moins peuplée que celle de Paris. Le réseau de transport, organisé en étoile autour de Paris depuis les routes royales jusqu'aux LGV, renforce encore cette domination.",
              ],
              box: { label: "Définition", text: "Macrocéphalie : situation d'un pays dans lequel la ville principale concentre une part démesurée de la population, des activités et des pouvoirs par rapport aux autres villes. En France, elle caractérise la place de Paris." },
            },
            {
              heading: "Un réseau de métropoles et des dynamiques contrastées",
              paragraphs: [
                "Autour de Paris s'organise un réseau de métropoles régionales (Lyon, Marseille, Toulouse, Lille, Bordeaux, Nantes, Strasbourg, Montpellier, Rennes, Nice, Grenoble) qui concentrent la croissance démographique, les emplois qualifiés et les activités innovantes. La métropolisation s'accompagne d'une périurbanisation : les ménages s'installent de plus en plus loin des centres, dans des espaces périurbains dépendants de l'automobile.",
                "La population et les activités se déplacent vers l'Ouest et le Sud, attirées par le cadre de vie, l'ensoleillement (héliotropisme) et les littoraux (littoralisation). Le Nord-Est, marqué par la désindustrialisation (bassins miniers et sidérurgiques), et une partie du centre du pays sont moins dynamiques. Une « diagonale des faibles densités », de la Meuse aux Landes, traverse le territoire, même si elle comprend des villes et des espaces attractifs.",
                "Les espaces ruraux restent très étendus : selon l'Insee, les communes rurales représentent environ 88 % des communes et un tiers de la population. Certains sont dynamiques (espaces proches des villes, espaces touristiques), d'autres en déprise, avec un vieillissement de la population et un recul des services.",
              ],
              box: { label: "Vocabulaire", text: "Métropolisation : concentration des hommes, des activités et des fonctions de commandement dans les grandes villes. Périurbanisation : extension des villes vers les espaces ruraux voisins. Héliotropisme : attraction exercée par les régions ensoleillées." },
            },
            {
              heading: "Des axes, des façades et des frontières",
              paragraphs: [
                "Les grands axes structurent le territoire. L'axe de la Seine relie Paris à la mer par Rouen et Le Havre, réunis depuis 2021 dans un même grand port, HAROPA Port. L'axe Rhône-Saône relie l'Europe du Nord à la Méditerranée et à Marseille-Fos, premier port de France. Le réseau des LGV, depuis la première ligne Paris-Lyon ouverte en 1981, rapproche les métropoles de la capitale.",
                "Les façades maritimes (Manche-mer du Nord, Atlantique, Méditerranée) sont des interfaces avec le monde, même si les ports français restent moins puissants que Rotterdam ou Anvers. Les régions frontalières de l'Est, de Lille à Genève en passant par la Lorraine et l'Alsace, sont ouvertes sur l'Europe rhénane et la mégalopole européenne.",
              ],
            },
            {
              heading: "Des espaces productifs et des outre-mer",
              paragraphs: [
                "La France est le premier producteur agricole de l'UE : grandes cultures céréalières du Bassin parisien, élevage de l'Ouest, vignobles réputés. L'industrie, qui a beaucoup reculé, reste importante dans l'Est, le Nord, la région lyonnaise (Auvergne-Rhône-Alpes est la première région industrielle par l'emploi) et autour de pôles de haute technologie comme Toulouse (aéronautique), Grenoble, Paris-Saclay ou Sophia Antipolis. Le tourisme valorise littoraux, montagnes et patrimoine.",
                "Les cinq départements et régions d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte) et les autres collectivités ultramarines donnent à la France une présence dans tous les océans et la deuxième ZEE du monde. Mais ils sont marqués par l'éloignement, un chômage et un coût de la vie plus élevés qu'en métropole, et une forte dépendance aux importations.",
              ],
              box: { label: "À retenir", text: "Lignes de force du territoire : la domination de Paris, un réseau de métropoles, des axes (Seine, Rhône-Saône, LGV), des façades et des frontières ouvertes, un glissement vers l'Ouest et le Sud, et des outre-mer présents dans tous les océans." },
            },
          ],
          keyPoints: [
            "Paris et l'Île-de-France : plus de 12 millions d'habitants, environ 30 % de la richesse nationale ; macrocéphalie et réseau en étoile.",
            "Un réseau de métropoles régionales concentre la croissance ; la périurbanisation étend les villes.",
            "Les dynamiques favorisent l'Ouest, le Sud et les littoraux ; le Nord-Est et la diagonale des faibles densités sont moins dynamiques.",
            "Axes majeurs : Seine (HAROPA Port), Rhône-Saône (Marseille-Fos, premier port français), réseau des LGV depuis 1981.",
            "Les frontières de l'Est s'ouvrent sur la mégalopole européenne ; les outre-mer donnent la 2e ZEE du monde.",
          ],
          example: {
            statement: "Expliquez pourquoi on parle de macrocéphalie parisienne, puis nuancez cette idée.",
            solution: [
              "Définir : la macrocéphalie désigne la domination d'une ville sur toutes les autres d'un pays, sans commune mesure avec la deuxième ville.",
              "Justifier par la population : l'Île-de-France compte plus de 12 millions d'habitants ; l'aire d'attraction de Lyon est plusieurs fois moins peuplée.",
              "Justifier par l'économie et le pouvoir : environ 30 % de la richesse nationale, la majorité des sièges sociaux, les pouvoirs politiques, les grandes institutions culturelles et scientifiques.",
              "Expliquer : une centralisation politique ancienne et un réseau de transport en étoile, des routes royales aux LGV.",
              "Nuancer : les métropoles régionales (Lyon, Toulouse, Bordeaux, Nantes) croissent plus vite que Paris, attirent des habitants et des entreprises ; la décentralisation depuis 1982 a renforcé les régions.",
              "Conclusion : la macrocéphalie reste un trait majeur du territoire français, mais elle s'atténue lentement grâce à l'affirmation d'un réseau de métropoles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des termes suivants, donnez une définition et un exemple localisé en France : a) métropolisation ; b) littoralisation ; c) périurbanisation ; d) axe de transport.",
              hint: "Chaque exemple doit être précis : une ville, un littoral, un axe nommé.",
              solution: [
                "a) Métropolisation : concentration des hommes, des activités et des pouvoirs dans les grandes villes ; exemple : la croissance de Toulouse, de Bordeaux ou de Nantes.",
                "b) Littoralisation : concentration de la population et des activités sur les littoraux ; exemple : la côte méditerranéenne de Montpellier à Nice, ou le littoral atlantique.",
                "c) Périurbanisation : extension de la ville vers les espaces ruraux voisins, où s'installent des ménages qui travaillent en ville ; exemple : les communes de la grande couronne francilienne ou celles autour de Rennes.",
                "d) Axe de transport : ligne qui concentre les infrastructures et les flux ; exemple : l'axe Rhône-Saône, de Lyon à Marseille-Fos, ou la LGV Paris-Lyon ouverte en 1981.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi le Sud et l'Ouest de la France gagnent des habitants plus vite que le Nord-Est.",
              hint: "Pensez au cadre de vie, aux littoraux, à l'histoire industrielle et aux métropoles.",
              solution: [
                "Le Sud et l'Ouest attirent par leur cadre de vie : climat ensoleillé (héliotropisme), littoraux, espaces de loisirs ; de nombreux retraités et actifs s'y installent.",
                "Ils comptent des métropoles très dynamiques (Toulouse, Bordeaux, Nantes, Montpellier, Rennes) qui créent des emplois qualifiés dans les services et les industries de pointe.",
                "Le Nord-Est a été fortement industrialisé (charbon, sidérurgie, textile) : la désindustrialisation depuis les années 1970 y a provoqué chômage et départs de population.",
                "Nuance : les espaces frontaliers du Nord-Est proches du Luxembourg, de la Suisse ou de Lille restent dynamiques.",
                "Résultat : le glissement de la population vers le Sud et l'Ouest s'explique par l'attractivité résidentielle et métropolitaine de ces régions et par la crise industrielle du Nord-Est.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (croquis) : proposez la légende organisée d'un croquis intitulé « Les lignes de force du territoire français », en trois parties, avec les figurés et des exemples localisés.",
              hint: "Partez de ce qui domine (Paris et les métropoles), puis des axes et des interfaces, enfin des dynamiques contrastées des territoires. Pensez à un encadré pour les outre-mer.",
              solution: [
                "Partie I, un territoire organisé par Paris et un réseau de métropoles : un grand cercle pour Paris, métropole mondiale ; des cercles plus petits pour les métropoles régionales (Lyon, Marseille, Toulouse, Lille, Bordeaux, Nantes, Strasbourg) ; des traits rayonnant depuis Paris pour le réseau en étoile des LGV.",
                "Partie II, des axes et des interfaces ouverts sur l'Europe et le monde : un trait épais pour les axes de la Seine et Rhône-Saône ; des carrés pour les grands ports (Le Havre, Marseille-Fos, Dunkerque) ; un trait de couleur le long des façades maritimes ; des flèches vers les pays voisins pour les frontières dynamiques de l'Est (Lille, Lorraine face au Luxembourg, Alsace, Genevois).",
                "Partie III, des dynamiques territoriales contrastées : une surface de couleur chaude pour les espaces attractifs de l'Ouest, du Sud et des littoraux ; une surface de couleur froide pour les anciens espaces industriels du Nord-Est en reconversion ; des hachures pour la diagonale des faibles densités.",
                "Encadrés : les cinq départements et régions d'outre-mer, avec leur ZEE, pour rappeler la présence française dans tous les océans.",
                "Résultat : une légende en trois parties qui répond au titre en montrant à la fois l'organisation du territoire et ses dynamiques.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les lignes de force du territoire français.",
            statements: [
              { text: "L'Île-de-France produit environ 30 % de la richesse nationale.", true: true, why: "La région capitale concentre une part de la richesse bien supérieure à sa part de la population." },
              { text: "Marseille-Fos est le premier port de France.", true: true, why: "Il est le premier port français, au débouché de l'axe Rhône-Saône." },
              { text: "Le Nord-Est est la partie de la France qui gagne le plus d'habitants.", true: false, why: "Ce sont l'Ouest, le Sud et les littoraux qui gagnent le plus d'habitants ; le Nord-Est est marqué par la désindustrialisation." },
              { text: "La première ligne à grande vitesse relie Paris à Lyon depuis 1981.", true: true, why: "Le TGV Paris-Lyon a inauguré en 1981 le réseau des LGV, organisé en étoile autour de Paris." },
              { text: "Les espaces ruraux représentent une petite minorité des communes françaises.", true: false, why: "Selon l'Insee, environ 88 % des communes sont rurales, où vit un tiers de la population." },
              { text: "La diagonale des faibles densités est un espace totalement vide et uniformément en déclin.", true: false, why: "Elle comprend des villes et des espaces attractifs ; c'est une zone de densités faibles, non un désert homogène." },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on la domination démesurée de Paris sur les autres villes françaises ?",
              options: ["La macrocéphalie", "La littoralisation", "La périurbanisation", "L'héliotropisme des régions du Sud"],
              answer: 0,
              why: "La macrocéphalie désigne le poids exceptionnel d'une ville par rapport aux autres villes du pays.",
            },
            {
              q: "Quel ensemble portuaire réunit depuis 2021 Le Havre, Rouen et Paris ?",
              options: ["Marseille-Fos", "Dunkerque-Port", "Nantes-Saint-Nazaire", "HAROPA Port"],
              answer: 3,
              why: "HAROPA Port rassemble les ports de l'axe Seine : Le Havre, Rouen et Paris.",
            },
            {
              q: "Quelle région est la première région industrielle française par l'emploi ?",
              options: ["Auvergne-Rhône-Alpes", "La Corse", "Provence-Alpes-Côte d'Azur", "L'Île-de-France, centre de commandement"],
              answer: 0,
              why: "Avec la région lyonnaise, Grenoble et de nombreux bassins industriels, Auvergne-Rhône-Alpes est la première région industrielle.",
            },
            {
              q: "Quel espace s'étend de la Meuse aux Landes ?",
              options: ["La mégalopole européenne et ses grandes villes", "L'axe Rhône-Saône", "La diagonale des faibles densités", "La Northern Range"],
              answer: 2,
              why: "Cette bande de faibles densités traverse la France du nord-est au sud-ouest.",
            },
            {
              q: "Combien la France compte-t-elle de départements et régions d'outre-mer (DROM) ?",
              options: ["Treize", "Deux", "Neuf", "Cinq"],
              answer: 3,
              why: "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte sont les cinq DROM.",
            },
          ],
          trap: "Réduire le territoire français à une opposition simple entre Paris et « le désert français » : les métropoles régionales, l'Ouest et le Sud sont dynamiques, et les espaces ruraux ne sont pas tous en déclin.",
          method: "Pour réviser un croquis de synthèse, refaites-le de mémoire sur un fond de carte vierge en moins de vingt minutes, puis comparez avec votre modèle : notez ce que vous avez oublié et recommencez deux jours plus tard.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recompositions-regionales',
          title: 'Des régions en recomposition dans l\'Europe et le monde',
          minutes: 30,
          objectives: [
            "Présenter la réforme régionale de 2015 et les compétences des régions.",
            "Expliquer l'inégale intégration des régions françaises dans l'Union européenne et dans la mondialisation.",
            "Analyser les recompositions en cours : métropolisation, réindustrialisation, coopérations, transition écologique.",
            "Mobiliser des exemples régionaux précis dans une réponse argumentée.",
          ],
          course: [
            {
              heading: "Une nouvelle carte régionale",
              paragraphs: [
                "Depuis le 1er janvier 2016, la France métropolitaine compte 13 régions au lieu de 22, auxquelles s'ajoutent cinq régions d'outre-mer, soit 18 régions. La réforme voulait donner aux régions une taille comparable à celle des grandes régions européennes, comme les Länder allemands, et réaliser des économies. Certaines sont très vastes : la Nouvelle-Aquitaine est plus étendue que l'Autriche.",
                "La loi NOTRe (2015) a renforcé les compétences des régions : développement économique et aides aux entreprises, transports régionaux (TER, cars interurbains), lycées, formation professionnelle, aménagement du territoire à travers un grand schéma régional (le SRADDET). Depuis 2014, les régions gèrent aussi une grande partie des fonds européens, notamment le FEDER : elles sont devenues des acteurs directs de la politique européenne.",
              ],
              box: { label: "Repère", text: "1982 : lois Defferre, la région devient une collectivité territoriale. 2003 : les régions inscrites dans la Constitution. 1er janvier 2016 : 13 régions métropolitaines. Loi NOTRe (2015) : compétences régionales renforcées." },
            },
            {
              heading: "Des régions inégalement intégrées",
              paragraphs: [
                "L'Île-de-France domine, par son poids économique et son ouverture mondiale. Auvergne-Rhône-Alpes, avec Lyon et Grenoble et des frontières avec la Suisse et l'Italie, est une grande région industrielle et innovante. L'Occitanie s'appuie sur Toulouse et la filière aéronautique et spatiale, et sur la croissance de Montpellier. Provence-Alpes-Côte d'Azur combine le port de Marseille-Fos, le tourisme et la technopole de Sophia Antipolis.",
                "Les régions du Nord et de l'Est (Hauts-de-France, Grand Est) sont des régions frontalières, proches de la mégalopole européenne : le Grand Est touche quatre pays (Belgique, Luxembourg, Allemagne, Suisse) et Strasbourg accueille le Parlement européen. Mais elles portent aussi l'héritage de la désindustrialisation. D'autres régions, comme le Centre-Val de Loire ou la Bourgogne-Franche-Comté, sont moins métropolisées et doivent s'appuyer sur des réseaux de villes moyennes.",
                "Les régions ultrapériphériques (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, ainsi que Saint-Martin) bénéficient d'aides européennes spécifiques, mais restent marquées par des écarts de richesse importants avec la métropole.",
              ],
            },
            {
              heading: "Des recompositions en cours",
              paragraphs: [
                "Les régions misent sur la réindustrialisation et la transition énergétique. Dans les Hauts-de-France, plusieurs usines de batteries pour véhicules électriques (gigafactories) se sont installées ou sont en projet autour de Douai, Lens et Dunkerque, d'où l'expression de « vallée de la batterie ». Ces projets s'appuient sur l'héritage industriel, la proximité de grands ports et un soutien public important.",
                "Elles coopèrent au-delà des frontières : programmes européens Interreg, eurorégion Pyrénées-Méditerranée associant l'Occitanie, la Catalogne et les îles Baléares, bureaux de représentation à Bruxelles. Elles doivent aussi composer avec les métropoles, qui concentrent la croissance et peuvent concurrencer la région dans l'attraction des investissements.",
                "Enfin, la transition écologique impose de nouvelles règles : la loi Climat et résilience (2021) fixe l'objectif de zéro artificialisation nette des sols en 2050, que les régions déclinent dans leurs schémas d'aménagement. Les fractures territoriales restent vives, comme l'a montré en 2018 le mouvement des gilets jaunes, très présent dans les espaces périurbains et ruraux.",
              ],
              box: { label: "À retenir", text: "Les régions françaises se recomposent : nouvelle carte (2016), compétences renforcées, gestion des fonds européens, réindustrialisation, coopérations transfrontalières, transition écologique. Mais leur intégration dans l'Europe et le monde reste très inégale." },
            },
          ],
          keyPoints: [
            "Depuis 2016 : 13 régions métropolitaines et 5 d'outre-mer, soit 18 régions.",
            "Loi NOTRe (2015) : économie, transports régionaux, lycées, formation, aménagement (SRADDET) ; gestion des fonds européens depuis 2014.",
            "Intégration inégale : Île-de-France, Auvergne-Rhône-Alpes, Occitanie très ouvertes ; régions moins métropolisées et régions en reconversion.",
            "Réindustrialisation : « vallée de la batterie » dans les Hauts-de-France.",
            "Coopérations : Interreg, eurorégion Pyrénées-Méditerranée, représentations à Bruxelles.",
            "Transition écologique : zéro artificialisation nette en 2050 (loi Climat et résilience, 2021).",
          ],
          example: {
            statement: "Montrez, à partir de l'exemple des Hauts-de-France, qu'une région peut se recomposer dans l'Europe et dans la mondialisation.",
            solution: [
              "Situer : région frontalière de la Belgique, proche de Londres par le tunnel sous la Manche et de la Northern Range, avec la métropole lilloise et le port de Dunkerque.",
              "Rappeler l'héritage : ancien bassin minier et textile, fortement touché par la désindustrialisation depuis les années 1970, avec un chômage longtemps élevé.",
              "Montrer la recomposition économique : implantation d'usines de batteries électriques (« vallée de la batterie »), développement logistique et portuaire à Dunkerque.",
              "Montrer la recomposition européenne : coopérations transfrontalières (Eurométropole Lille-Kortrijk-Tournai), fonds européens gérés par la région.",
              "Nuancer : les écarts restent forts entre la métropole lilloise, les espaces littoraux et l'ancien bassin minier ; la réussite dépend aussi de décisions d'entreprises étrangères.",
              "Conclusion : les Hauts-de-France illustrent une région qui tire parti de sa position d'interface pour se transformer, sans effacer ses fragilités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Citez trois compétences des régions françaises depuis la loi NOTRe, et donnez pour chacune un exemple concret de ce que cela représente pour un lycéen ou un habitant.",
              hint: "Pensez à votre trajet en train régional, à votre lycée, à une aide reçue par une entreprise de votre région.",
              solution: [
                "Les lycées : la région construit, entretient et équipe les lycées (bâtiments, cantine, parfois manuels ou ordinateurs).",
                "Les transports régionaux : la région organise les TER et les cars interurbains, souvent utilisés par les lycéens et les actifs.",
                "Le développement économique : la région aide les entreprises à s'implanter ou à innover, ce qui crée des emplois localement.",
                "On peut aussi citer la formation professionnelle des adultes et l'aménagement du territoire (SRADDET).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : une région a un PIB de 300 milliards d'euros et une population de 6 millions d'habitants ; la France a un PIB de 2 500 milliards d'euros et 68 millions d'habitants. Calculez la part de la région dans le PIB et dans la population nationale (arrondies à l'unité), puis interprétez.",
              hint: "Part = valeur de la région ÷ valeur nationale × 100. Comparez ensuite les deux pourcentages.",
              solution: [
                "Part dans le PIB : 300 ÷ 2 500 × 100 = 12 %.",
                "Part dans la population : 6 ÷ 68 × 100 ≈ 8,8 %, soit environ 9 % arrondi à l'unité.",
                "Comparaison : la région produit 12 % de la richesse avec environ 9 % de la population, donc une part de la richesse supérieure à son poids démographique.",
                "Interprétation : il s'agit d'une région plus productive que la moyenne, probablement très métropolisée et bien intégrée à la mondialisation (fonctions de commandement, industries de pointe).",
                "Résultat : 12 % du PIB pour environ 9 % de la population, signe d'une région riche et attractive.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (réponse à une question problématisée) : « Comment les régions françaises se recomposent-elles dans l'Union européenne et dans la mondialisation ? » Proposez une introduction et un plan détaillé avec des exemples régionaux précis.",
              hint: "Distinguez les changements institutionnels, l'inégale intégration des régions et les dynamiques en cours ; chaque partie doit comporter au moins deux exemples localisés.",
              solution: [
                "Introduction : depuis 2016, la France métropolitaine compte 13 grandes régions. Problématique : comment ces régions, aux compétences renforcées, s'adaptent-elles à l'intégration européenne et à la mondialisation, et pourquoi le font-elles de manière inégale ? Annonce : un cadre régional renouvelé, des régions inégalement intégrées, des recompositions en cours.",
                "I. Un cadre renouvelé : réforme de 2015 (13 régions), loi NOTRe (économie, transports, lycées, SRADDET), gestion des fonds européens (FEDER) depuis 2014 ; des régions de taille européenne (Nouvelle-Aquitaine, Grand Est).",
                "II. Des régions inégalement intégrées : Île-de-France, région mondiale ; Auvergne-Rhône-Alpes et Occitanie, régions industrielles et innovantes ; régions frontalières du Nord et de l'Est ouvertes sur la mégalopole mais marquées par la désindustrialisation ; régions moins métropolisées ; régions ultrapériphériques.",
                "III. Des recompositions en cours : réindustrialisation (vallée de la batterie dans les Hauts-de-France), coopérations transfrontalières (eurorégion Pyrénées-Méditerranée, Interreg), concurrence et coopération avec les métropoles, transition écologique (zéro artificialisation nette en 2050).",
                "Conclusion : les régions françaises sont devenues des acteurs de leur intégration européenne et mondiale, mais la recomposition renforce souvent les régions déjà les mieux placées ; la cohésion territoriale reste un défi.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque région à l'atout ou à la dynamique qui la caractérise.",
            pairs: [
              { left: "Occitanie", right: "Filière aéronautique et spatiale autour de Toulouse" },
              { left: "Hauts-de-France", right: "Usines de batteries de la « vallée de la batterie »" },
              { left: "Grand Est", right: "Région frontalière de quatre pays, siège du Parlement européen à Strasbourg" },
              { left: "Auvergne-Rhône-Alpes", right: "Première région industrielle, avec Lyon et Grenoble" },
              { left: "Provence-Alpes-Côte d'Azur", right: "Port de Marseille-Fos et technopole de Sophia Antipolis" },
              { left: "Nouvelle-Aquitaine", right: "Région la plus vaste de France métropolitaine" },
            ],
          },
          quiz: [
            {
              q: "Combien la France compte-t-elle de régions au total depuis 2016 ?",
              options: ["18", "22", "13", "27, comme les États de l'UE"],
              answer: 0,
              why: "13 régions métropolitaines et 5 régions d'outre-mer, soit 18 régions.",
            },
            {
              q: "Quelle loi de 2015 précise les compétences des régions ?",
              options: ["La loi Defferre", "La loi Climat et résilience", "La loi Veil", "La loi NOTRe"],
              answer: 3,
              why: "La loi portant nouvelle organisation territoriale de la République (NOTRe) renforce les compétences économiques et d'aménagement des régions.",
            },
            {
              q: "Quelle région est associée à l'expression « vallée de la batterie » ?",
              options: ["La Bretagne", "Les Hauts-de-France", "La Corse", "La Nouvelle-Aquitaine"],
              answer: 1,
              why: "Plusieurs gigafactories de batteries s'implantent autour de Douai, Lens et Dunkerque.",
            },
            {
              q: "Quel objectif fixe la loi Climat et résilience de 2021 pour 2050 ?",
              options: ["Zéro artificialisation nette des sols", "La fin des régions", "La suppression des TER", "Le doublement des surfaces urbanisées dans chaque région"],
              answer: 0,
              why: "Les régions doivent réduire la consommation d'espaces naturels et agricoles jusqu'à atteindre zéro artificialisation nette en 2050.",
            },
            {
              q: "Quelles régions s'associent dans l'eurorégion Pyrénées-Méditerranée ?",
              options: ["L'Alsace et le Bade-Wurtemberg, de part et d'autre du Rhin", "La Bretagne et le pays de Galles", "L'Occitanie, la Catalogne et les îles Baléares", "La Corse et la Sardaigne"],
              answer: 2,
              why: "Cette eurorégion rassemble une région française et deux communautés autonomes espagnoles autour de projets communs.",
            },
          ],
          trap: "Confondre région et métropole : la région est une collectivité territoriale étendue (13 en métropole), la métropole est une intercommunalité qui regroupe une grande ville et ses communes voisines ; leurs compétences et leurs échelles diffèrent.",
          method: "Préparez pour trois régions contrastées (par exemple l'Île-de-France, les Hauts-de-France et l'Occitanie) une fiche avec deux atouts, deux fragilités et une recomposition datée : vous aurez toujours des exemples précis à mobiliser.",
        },
      ],
    },
  ],
}
