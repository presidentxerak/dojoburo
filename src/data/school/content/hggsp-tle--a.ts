import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hggsp-tle',
  chapters: [
    /* ==================================================================== */
    /* THÈME 1 · DE NOUVEAUX ESPACES DE CONQUÊTE                              */
    /* ==================================================================== */
    {
      id: 'espaces-de-conquete',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ocean-espace-intro',
          title: 'L\'océan et l\'espace, des espaces convoités',
          minutes: 30,
          objectives: [
            "Caractériser l'océan et l'espace extra-atmosphérique comme des milieux hostiles et difficiles d'accès.",
            "Définir la notion de conquête et ses différentes formes : exploration, exploitation, appropriation, militarisation.",
            "Identifier les ressources et les usages qui expliquent l'intérêt croissant des États et des acteurs privés pour ces deux espaces.",
            "Présenter les grands principes du droit international qui encadrent l'océan et l'espace.",
          ],
          course: [
            {
              heading: "Deux milieux hostiles et difficiles d'accès",
              paragraphs: [
                "L'océan mondial couvre environ 71 % de la surface de la Terre. Sa profondeur moyenne avoisine 3 700 mètres et son point le plus profond, la fosse des Mariannes (dans le Pacifique), dépasse 10 900 mètres. La pression augmente d'environ une atmosphère tous les 10 mètres, la lumière disparaît au-delà de quelques centaines de mètres et l'eau des grands fonds est froide. Les fonds marins restent donc très mal connus : seule une faible part en a été cartographiée avec précision.",
                "L'espace extra-atmosphérique est un milieu plus hostile encore : vide, absence d'oxygène, rayonnements, écarts de températures extrêmes, microgravité. Par convention, on situe souvent sa limite à 100 kilomètres d'altitude (ligne de Kármán), mais aucun traité ne fixe de frontière entre l'espace aérien, soumis à la souveraineté des États, et l'espace extra-atmosphérique. Pour se maintenir en orbite basse, un engin doit atteindre une vitesse d'environ 7,8 km/s, ce qui exige des lanceurs puissants et coûteux.",
                "Ces deux espaces ont donc des points communs : on n'y accède que grâce à des techniques avancées, la présence humaine y est rare et temporaire (navires, sous-marins, équipages des stations spatiales), et leur maîtrise reste réservée à un petit nombre d'acteurs. C'est ce qui en fait des espaces de puissance.",
              ],
              box: { label: "Définition", text: "Conquête : ensemble des actions par lesquelles des acteurs (États, entreprises, organisations) cherchent à explorer, connaître, exploiter, contrôler et parfois s'approprier un espace. Pour l'océan et l'espace, la conquête est d'abord scientifique et technique, puis économique, militaire et juridique." },
            },
            {
              heading: "Une conquête ancienne et renouvelée",
              paragraphs: [
                "La conquête des mers est ancienne. Les grandes découvertes européennes (Bartolomeu Dias double le cap de Bonne-Espérance en 1488, Christophe Colomb atteint l'Amérique en 1492, Vasco de Gama gagne l'Inde en 1498, l'expédition de Magellan et Elcano fait le tour du monde entre 1519 et 1522) ouvrent des routes maritimes qui structurent les échanges mondiaux. L'exploration scientifique des profondeurs est beaucoup plus récente : l'expédition britannique du Challenger (1872-1876) fonde l'océanographie, et le bathyscaphe Trieste atteint le fond de la fosse des Mariannes en 1960.",
                "La conquête de l'espace commence avec le lancement du satellite soviétique Spoutnik 1 en 1957, en pleine guerre froide. Elle a d'abord été une compétition entre deux superpuissances, puis elle s'est diffusée : aujourd'hui, plusieurs milliers de satellites actifs tournent autour de la Terre, dont une large majorité appartient à la constellation Starlink de l'entreprise américaine SpaceX.",
                "On parle de « nouveaux » espaces de conquête parce que les acteurs se multiplient (puissances émergentes comme la Chine et l'Inde, entreprises privées du New Space) et parce que les progrès techniques rendent accessibles des ressources et des usages jusqu'ici hors de portée : grands fonds marins, orbites encombrées, Lune.",
              ],
            },
            {
              heading: "Des ressources et des usages convoités",
              paragraphs: [
                "L'océan offre des ressources halieutiques (pêche), des hydrocarbures exploités en mer (offshore) et, dans les grands fonds, des ressources minérales : les nodules polymétalliques, riches en manganèse, nickel, cobalt et cuivre, abondent par exemple dans la zone de Clarion-Clipperton, dans le Pacifique. L'océan est aussi la grande voie des échanges : plus de 80 % du commerce mondial en volume passe par la mer, et les câbles sous-marins transportent l'essentiel des données numériques échangées entre continents.",
                "L'espace est devenu une infrastructure invisible de la vie quotidienne : télécommunications, télévision, météorologie, observation de la Terre et du climat, positionnement par satellite (le GPS américain, le Galileo européen, le Beidou chinois, le GLONASS russe). Des ressources futures sont aussi convoitées, comme la glace d'eau présente au pôle Sud de la Lune, utile pour produire de l'eau potable, de l'oxygène et du carburant.",
                "Enfin, les deux espaces ont une dimension militaire. Les sous-marins nucléaires lanceurs d'engins (SNLE), cachés dans les profondeurs, garantissent la dissuasion nucléaire des puissances qui en possèdent. Les satellites permettent le renseignement, la communication et le guidage des armées : aucune opération militaire moderne ne s'en passe.",
              ],
              box: { label: "À retenir", text: "L'océan et l'espace sont convoités pour leurs ressources (pêche, hydrocarbures, minerais, eau lunaire), pour les flux qu'ils portent (commerce, données, signaux satellitaires) et pour leur rôle stratégique (dissuasion, renseignement, projection de puissance)." },
            },
            {
              heading: "Des espaces encadrés par le droit international",
              paragraphs: [
                "Le droit de la mer repose sur la convention des Nations unies sur le droit de la mer, dite convention de Montego Bay, signée en 1982 et entrée en vigueur en 1994. Elle découpe l'océan en zones : la mer territoriale, où l'État côtier est souverain, la zone économique exclusive (ZEE), où il dispose des droits sur les ressources, et la haute mer, où règne la liberté de navigation. Les grands fonds situés hors des juridictions nationales, appelés « la Zone », sont déclarés patrimoine commun de l'humanité et gérés par l'Autorité internationale des fonds marins.",
                "Le traité de l'espace de 1967 pose que l'espace, la Lune et les corps célestes sont libres d'exploration et d'utilisation par tous les États et ne peuvent faire l'objet d'aucune appropriation nationale. Il interdit de placer en orbite des armes nucléaires ou d'autres armes de destruction massive, et rend chaque État responsable des activités spatiales menées depuis son territoire, y compris par des entreprises privées.",
                "Ces règles sont aujourd'hui mises à l'épreuve : extension des plateaux continentaux, construction d'îles artificielles, lois nationales autorisant des entreprises à exploiter des ressources spatiales (États-Unis en 2015, Luxembourg en 2017). La conquête oppose donc deux logiques : celle des biens communs et celle de l'appropriation.",
              ],
            },
          ],
          keyPoints: [
            "L'océan (71 % de la surface terrestre) et l'espace sont des milieux hostiles, accessibles seulement grâce à des techniques avancées.",
            "La conquête combine exploration, exploitation, contrôle et appropriation ; elle est scientifique, économique, militaire et juridique.",
            "Ressources convoitées : pêche, hydrocarbures offshore, nodules polymétalliques, glace d'eau lunaire.",
            "Plus de 80 % du commerce mondial en volume passe par la mer ; les câbles sous-marins portent l'essentiel des données intercontinentales.",
            "Convention de Montego Bay (1982) : mer territoriale, ZEE, haute mer, la Zone, patrimoine commun de l'humanité.",
            "Traité de l'espace (1967) : liberté d'exploration, non-appropriation, interdiction des armes de destruction massive en orbite.",
          ],
          example: {
            statement: "Expliquez en quoi l'océan et l'espace peuvent être qualifiés de « nouveaux espaces de conquête ».",
            solution: [
              "Définir les termes : un espace de conquête est un espace que des acteurs cherchent à explorer, exploiter et contrôler ; « nouveaux » renvoie à des espaces dont l'accès massif est récent.",
              "Premier argument : ce sont des milieux hostiles (pression et obscurité des grands fonds, vide et rayonnements de l'espace) dont l'accès dépend du progrès technique ; la conquête des grands fonds date surtout du XXe siècle, celle de l'espace commence en 1957.",
              "Deuxième argument : les ressources et les usages se multiplient (nodules polymétalliques, commerce maritime, câbles sous-marins, satellites de télécommunication et de navigation, glace lunaire).",
              "Troisième argument : les acteurs se diversifient (puissances émergentes comme la Chine et l'Inde, entreprises du New Space comme SpaceX), ce qui accroît la concurrence.",
              "Quatrième argument : le droit international (Montego Bay, traité de l'espace) proclame des biens communs, mais il est contesté par des logiques d'appropriation.",
              "Conclusion : l'océan et l'espace sont de « nouveaux » espaces de conquête parce que la technique, l'économie et la géopolitique en font aujourd'hui des espaces de rivalité de plus en plus disputés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les usages suivants selon qu'ils relèvent d'une logique scientifique, économique ou militaire : (a) un satellite d'observation du climat ; (b) un chalutier industriel en ZEE ; (c) un sous-marin nucléaire lanceur d'engins ; (d) le bathyscaphe Trieste en 1960 ; (e) un câble sous-marin transatlantique ; (f) un satellite de renseignement.",
              hint: "Demandez-vous à quoi sert d'abord chaque objet : produire du savoir, produire de la richesse ou assurer la sécurité.",
              solution: [
                "Logique scientifique : (a) le satellite d'observation du climat et (d) le bathyscaphe Trieste, qui servent d'abord à connaître le milieu.",
                "Logique économique : (b) le chalutier industriel, qui exploite les ressources halieutiques, et (e) le câble sous-marin, qui transporte des données commerciales.",
                "Logique militaire : (c) le sous-marin nucléaire lanceur d'engins, pilier de la dissuasion, et (f) le satellite de renseignement.",
                "Remarque : beaucoup d'objets sont à double usage (civil et militaire) ; un satellite d'observation peut aussi servir au renseignement. Résultat : scientifique (a, d), économique (b, e), militaire (c, f).",
              ],
            },
            {
              level: 2,
              statement: "Comparez l'océan et l'espace en trois points : les conditions d'accès, les ressources et usages, le régime juridique. Rédigez ensuite un paragraphe de cinq à six lignes qui montre une ressemblance et une différence.",
              hint: "Pour le droit, opposez le zonage de Montego Bay (des espaces sous souveraineté et d'autres libres) au principe général de non-appropriation du traité de 1967.",
              solution: [
                "Accès : dans les deux cas, un milieu hostile qui exige des techniques avancées ; l'espace est plus coûteux encore (lanceurs, vitesse orbitale d'environ 7,8 km/s).",
                "Ressources et usages : l'océan offre pêche, hydrocarbures, minerais et voies commerciales ; l'espace offre surtout des services (télécommunications, navigation, observation) et, à terme, des ressources lunaires.",
                "Droit : l'océan est découpé en zones, dont certaines sont sous souveraineté (mer territoriale) ou sous droits souverains (ZEE) ; l'espace, la Lune et les corps célestes ne peuvent faire l'objet d'aucune appropriation nationale.",
                "Paragraphe possible : l'océan et l'espace se ressemblent car ce sont des milieux hostiles dont la maîtrise dépend de la technique et réserve la conquête à quelques puissances. Ils diffèrent toutefois par leur statut : l'océan est en partie approprié par les États côtiers grâce aux ZEE, tandis que l'espace demeure juridiquement non appropriable, même si ce principe est aujourd'hui contesté.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « L'océan et l'espace : des biens communs ou des espaces appropriés ? ». Rédigez l'introduction (accroche, définition des termes, problématique, annonce du plan) et proposez un plan détaillé en deux ou trois parties.",
              hint: "Partez de la tension entre les textes (patrimoine commun, non-appropriation) et les pratiques (ZEE, extension des plateaux, lois nationales sur les ressources spatiales).",
              solution: [
                "Accroche : en 1982, la convention de Montego Bay déclare les grands fonds marins « patrimoine commun de l'humanité » ; quarante ans plus tard, des États et des entreprises veulent y exploiter des nodules polymétalliques.",
                "Définitions : un bien commun est une ressource ou un espace dont l'usage est partagé et qui n'appartient à personne en particulier ; un espace approprié est placé sous le contrôle exclusif d'un acteur.",
                "Problématique : dans quelle mesure l'océan et l'espace, pensés par le droit international comme des espaces partagés, sont-ils devenus des espaces de plus en plus appropriés par les États et les acteurs privés ?",
                "I. Des espaces pensés comme communs : liberté de la haute mer, la Zone et l'Autorité internationale des fonds marins, traité de l'espace de 1967 (non-appropriation, usage pacifique).",
                "II. Des logiques d'appropriation croissantes : ZEE et demandes d'extension du plateau continental, îles artificielles en mer de Chine méridionale, lois américaine (2015) et luxembourgeoise (2017) sur les ressources spatiales, occupation des orbites par des constellations privées.",
                "III. Une gouvernance commune à réinventer : coopérations scientifiques, accord sur la biodiversité en haute mer (adopté en 2023), débats sur les débris spatiaux et sur l'exploitation des grands fonds.",
                "Conclusion attendue : ces espaces restent juridiquement communs, mais les pratiques de puissance et l'intérêt économique y renforcent l'appropriation, ce qui rend la coopération à la fois plus nécessaire et plus difficile.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Ligne de Kármán", right: "Limite conventionnelle de l'espace, vers 100 km d'altitude" },
              { left: "La Zone", right: "Grands fonds hors juridiction nationale, patrimoine commun de l'humanité" },
              { left: "Nodules polymétalliques", right: "Concrétions des grands fonds riches en manganèse, nickel et cobalt" },
              { left: "Orbite géostationnaire", right: "Orbite à environ 36 000 km où un satellite semble fixe au-dessus de la Terre" },
              { left: "Traité de l'espace", right: "Texte de 1967 qui interdit l'appropriation nationale de l'espace" },
              { left: "ZEE", right: "Zone de 200 milles marins où l'État côtier exploite seul les ressources" },
            ],
          },
          quiz: [
            {
              q: "Quelle part de la surface terrestre l'océan mondial couvre-t-il ?",
              options: ["Environ la moitié", "Environ 71 %", "Environ 85 %", "Environ 60 %"],
              answer: 1,
              why: "L'océan couvre environ 71 % de la surface de la Terre, ce qui en fait le premier espace planétaire par sa superficie.",
            },
            {
              q: "En quelle année le traité de l'espace a-t-il été signé ?",
              options: ["1957", "1982", "1967", "1969"],
              answer: 2,
              why: "Le traité de l'espace date de 1967 ; 1957 correspond à Spoutnik, 1969 à Apollo 11 et 1982 à la convention de Montego Bay.",
            },
            {
              q: "Quel principe le traité de l'espace pose-t-il ?",
              options: ["La non-appropriation nationale de l'espace et des corps célestes", "Le partage de la Lune et des astéroïdes en zones nationales attribuées aux premiers occupants", "L'interdiction de tout satellite militaire", "La propriété des ressources pour le premier arrivé"],
              answer: 0,
              why: "Le traité interdit toute appropriation nationale ; il n'interdit pas les satellites militaires, seulement les armes de destruction massive en orbite.",
            },
            {
              q: "Où se trouvent d'importants gisements de nodules polymétalliques ?",
              options: ["En mer Méditerranée", "Dans l'océan Arctique, sous la banquise du pôle Nord", "En mer Baltique", "Dans la zone de Clarion-Clipperton (Pacifique)"],
              answer: 3,
              why: "La zone de Clarion-Clipperton, dans le Pacifique, concentre des nodules riches en manganèse, nickel, cobalt et cuivre, objets de contrats d'exploration.",
            },
            {
              q: "Pourquoi les sous-marins nucléaires lanceurs d'engins font-ils de l'océan un espace stratégique ?",
              options: ["Ils servent à poser et à réparer les câbles sous-marins intercontinentaux", "Cachés dans les profondeurs, ils garantissent la dissuasion nucléaire", "Ils protègent les zones de pêche", "Ils explorent les grands fonds"],
              answer: 1,
              why: "Indétectables ou presque, les SNLE assurent une capacité de riposte nucléaire, fondement de la dissuasion.",
            },
          ],
          trap: "Croire que l'espace et l'océan sont des « vides » sans règles : ils sont au contraire encadrés par des traités (1967 pour l'espace, 1982 pour la mer), même si ces règles sont contestées.",
          method: "Pour chaque espace, construisez une fiche en quatre colonnes (milieu, ressources et usages, acteurs, droit) : ce tableau comparatif fournit directement les parties d'une dissertation sur le thème 1.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'conquetes-et-rivalites',
          title: 'Conquêtes, affirmations de puissance et rivalités',
          minutes: 35,
          objectives: [
            "Expliquer les enjeux géopolitiques de la course à l'espace, des années 1950 à l'arrivée de nouveaux acteurs.",
            "Analyser comment les États-Unis affirment leur puissance à partir des mers et des océans depuis 1945.",
            "Distinguer militarisation et arsenalisation de l'espace.",
            "Identifier les rivalités actuelles pour le contrôle des espaces maritimes et extra-atmosphériques.",
          ],
          course: [
            {
              heading: "La course à l'espace, un affrontement de la guerre froide",
              paragraphs: [
                "Le 4 octobre 1957, l'URSS place en orbite Spoutnik 1, le premier satellite artificiel. Le choc est immense aux États-Unis : la fusée R-7 qui l'a lancé est aussi un missile balistique intercontinental, capable d'atteindre le territoire américain. En réaction, les États-Unis créent la NASA en 1958 et accroissent leurs dépenses de recherche et d'éducation scientifique.",
                "L'URSS accumule les premières : Iouri Gagarine devient le premier homme dans l'espace le 12 avril 1961. Le président Kennedy annonce alors, en mai 1961, l'objectif d'envoyer un homme sur la Lune avant la fin de la décennie. Le programme Apollo mobilise des moyens considérables et, en juillet 1969, Neil Armstrong et Buzz Aldrin marchent sur la Lune lors de la mission Apollo 11. Entre 1969 et 1972, douze astronautes américains foulent le sol lunaire.",
                "La course à l'espace est donc un affrontement de puissance par d'autres moyens que la guerre : elle vise le prestige international, la démonstration de la supériorité d'un modèle politique et économique, et la maîtrise de technologies militaires (lanceurs et missiles partagent les mêmes savoir-faire). La détente se traduit par une coopération symbolique : la mission Apollo-Soyouz, en 1975, voit l'amarrage d'un vaisseau américain et d'un vaisseau soviétique.",
              ],
              box: { label: "Repère", text: "1957 : Spoutnik 1. 1958 : création de la NASA. 1961 : Gagarine, premier homme dans l'espace. 1965 : Astérix, premier satellite français. 1969 : Apollo 11, premiers pas sur la Lune. 1975 : Apollo-Soyouz." },
            },
            {
              heading: "De la bipolarité à la multiplication des puissances spatiales",
              paragraphs: [
                "D'autres États accèdent à l'espace par leurs propres moyens. La France devient en 1965 la troisième puissance à placer un satellite en orbite avec son propre lanceur (Astérix, lancé par une fusée Diamant). Suivent le Japon et la Chine en 1970, le Royaume-Uni en 1971, l'Inde en 1980. Les Européens mutualisent leurs moyens au sein de l'Agence spatiale européenne (ESA), créée en 1975 ; la fusée Ariane effectue son premier vol en 1979 depuis Kourou, en Guyane.",
                "Depuis les années 2000, la Chine s'affirme comme la deuxième puissance spatiale, et l'Inde réussit en 2023 à poser une sonde près du pôle Sud de la Lune (Chandrayaan-3). Des acteurs privés bouleversent aussi le secteur : c'est le New Space. L'entreprise SpaceX, fondée par Elon Musk, réussit en 2015 à faire atterrir le premier étage d'une fusée Falcon 9 pour le réutiliser, ce qui fait baisser les coûts, et transporte des astronautes vers la Station spatiale internationale depuis 2020.",
                "L'espace devient un enjeu militaire assumé. Plusieurs États ont testé des armes antisatellites en détruisant un de leurs propres satellites (la Chine en 2007, les États-Unis en 2008, l'Inde en 2019, la Russie en 2021), ce qui crée des nuages de débris. Les États-Unis créent une Space Force en 2019 et la France un Commandement de l'espace la même année, l'armée de l'Air devenant armée de l'Air et de l'Espace en 2020.",
              ],
              box: { label: "Définition", text: "La militarisation de l'espace est l'usage de l'espace à des fins militaires (satellites de renseignement, de communication, de navigation), présent depuis les débuts. L'arsenalisation désigne le déploiement d'armes dans l'espace ou contre des objets spatiaux : c'est une étape supplémentaire." },
            },
            {
              heading: "Affirmer sa puissance par la mer : les États-Unis depuis 1945",
              paragraphs: [
                "À la fin du XIXe siècle, l'officier américain Alfred Mahan défend l'idée que la puissance mondiale repose sur la maîtrise des mers (The Influence of Sea Power upon History, 1890). Après 1945, les États-Unis disposent de la première marine du monde et l'insèrent dans un réseau d'alliances (OTAN en 1949, traités avec le Japon, l'Australie, la Corée du Sud) et de bases à l'étranger.",
                "Leur marine est organisée en flottes numérotées qui couvrent les océans : la 6e flotte en Méditerranée, la 7e flotte dans le Pacifique occidental (basée au Japon), la 5e flotte dans le golfe Persique (à Bahreïn). Les groupes aéronavals, formés autour de porte-avions à propulsion nucléaire (onze en service, une flotte sans équivalent), permettent de projeter la puissance partout dans le monde : guerre de Corée, guerre du Vietnam, guerre du Golfe de 1991.",
                "La mer sert aussi la dissuasion (sous-marins nucléaires lanceurs d'engins) et la défense de la liberté de navigation. Bien qu'ils n'aient pas ratifié la convention de Montego Bay, les États-Unis en appliquent les règles coutumières et mènent des opérations dites de liberté de navigation, notamment en mer de Chine méridionale, pour contester des revendications qu'ils jugent excessives. Contrôler les détroits (Ormuz, Malacca, Bab el-Mandeb) et sécuriser les routes commerciales reste au cœur de leur stratégie.",
              ],
            },
            {
              heading: "Des rivalités renouvelées",
              paragraphs: [
                "La suprématie navale américaine est aujourd'hui concurrencée. La Chine possède désormais la marine la plus nombreuse en nombre de navires et affirme ses revendications en mer de Chine méridionale. La Russie s'appuie sur sa flotte de la mer Noire (l'annexion de la Crimée en 2014 lui assure la base de Sébastopol) et sur ses ambitions arctiques. En réponse, les États-Unis renforcent leurs alliances dans l'Indo-Pacifique, par exemple avec le pacte AUKUS conclu en 2021 avec l'Australie et le Royaume-Uni.",
                "Dans l'espace, la Lune redevient un objectif. Le programme américain Artemis, dont la première mission sans équipage a eu lieu en 2022, vise le retour d'astronautes sur la Lune ; il s'accompagne d'accords signés par de nombreux pays partenaires (les accords Artemis, depuis 2020). La Chine et la Russie ont annoncé en 2021 un projet concurrent de station de recherche lunaire. Les rivalités portent aussi sur les orbites et les fréquences, ressources limitées que les constellations de satellites occupent rapidement.",
              ],
            },
          ],
          keyPoints: [
            "Spoutnik (1957) provoque un choc aux États-Unis : création de la NASA (1958), puis programme Apollo et premiers pas sur la Lune (1969).",
            "La course à l'espace vise le prestige, la supériorité technologique et la puissance militaire (lanceurs et missiles).",
            "La France est la troisième puissance spatiale (1965) ; l'ESA naît en 1975, Ariane vole en 1979.",
            "Militarisation : usage militaire de l'espace. Arsenalisation : armes dans l'espace ou contre des satellites.",
            "Depuis 1945, les États-Unis projettent leur puissance par la mer : flottes numérotées, porte-avions, bases, liberté de navigation.",
            "Rivalités actuelles : marine chinoise, Russie, Indo-Pacifique (AUKUS), retour vers la Lune (Artemis face au projet sino-russe).",
          ],
          example: {
            statement: "Pourquoi le lancement de Spoutnik 1, en 1957, constitue-t-il un choc pour les États-Unis ?",
            solution: [
              "Rappeler le fait : le 4 octobre 1957, l'URSS place en orbite le premier satellite artificiel.",
              "Choc technologique : les États-Unis, qui se pensaient en avance, découvrent que l'URSS les a devancés.",
              "Choc militaire : la fusée R-7 qui lance Spoutnik est un missile intercontinental ; le territoire américain devient vulnérable à une frappe soviétique.",
              "Choc politique : en pleine guerre froide, l'URSS peut présenter son succès comme la preuve de la supériorité du modèle communiste.",
              "Conséquences : création de la NASA en 1958, effort massif pour la recherche et l'enseignement scientifique, puis engagement dans le programme Apollo.",
              "Réponse : Spoutnik est un choc à la fois technologique, militaire et idéologique, qui lance la course à l'espace entre les deux superpuissances.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 1957, 1961, 1965, 1969, 1975, 2019. Événements : premier satellite français ; premier homme dans l'espace ; création de la Space Force américaine ; Apollo 11 ; Spoutnik 1 ; Apollo-Soyouz.",
              hint: "Commencez par les dates les plus célèbres (Spoutnik et Apollo 11), puis placez les autres.",
              solution: [
                "1957 : Spoutnik 1, premier satellite artificiel (URSS).",
                "1961 : Iouri Gagarine, premier homme dans l'espace.",
                "1965 : Astérix, premier satellite français lancé par une fusée Diamant.",
                "1969 : Apollo 11, premiers pas de l'homme sur la Lune.",
                "1975 : Apollo-Soyouz, amarrage d'un vaisseau américain et d'un vaisseau soviétique.",
                "2019 : création de la Space Force américaine. Les six associations sont ainsi établies.",
              ],
            },
            {
              level: 2,
              statement: "Montrez, à l'aide de deux exemples précis pour chacune, la différence entre la militarisation et l'arsenalisation de l'espace. Expliquez ensuite pourquoi les tirs antisatellites inquiètent l'ensemble des acteurs spatiaux.",
              hint: "Pensez aux satellites de renseignement et de positionnement d'un côté, aux tests de destruction de satellites de l'autre ; pour la seconde question, pensez aux débris.",
              solution: [
                "Militarisation : usage de l'espace au service des armées. Exemples : les satellites de renseignement qui photographient les sites adverses ; le GPS, système américain d'origine militaire qui guide troupes et munitions.",
                "Arsenalisation : armes dirigées contre des objets spatiaux ou placées dans l'espace. Exemples : le tir chinois de 2007 contre un satellite météorologique, le tir russe de 2021.",
                "Les tirs antisatellites créent des milliers de débris qui restent en orbite et menacent tous les satellites, y compris civils, ainsi que les stations habitées.",
                "Ils fragilisent aussi la sécurité collective : chaque puissance craint de perdre ses satellites, indispensables à ses armées et à son économie.",
                "Conclusion : la militarisation est ancienne et générale ; l'arsenalisation est une escalade dangereuse qui menace l'usage de l'espace par tous.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : discours du président John F. Kennedy à l'université Rice (Houston), le 12 septembre 1962 (présentation résumée). Kennedy y affirme que les États-Unis ont choisi d'aller sur la Lune au cours de la décennie, non parce que c'est facile mais parce que c'est difficile ; que l'espace peut devenir un lieu de paix ou de terreur selon qui le domine ; que les États-Unis doivent y occuper la première place pour que la science et la liberté l'emportent. Consigne : en analysant ce document, montrez quels sont les enjeux de la course à l'espace pour les États-Unis au début des années 1960, et en quoi ce discours est aussi une mise en scène de la puissance.",
              hint: "Présentez l'auteur, la date et le contexte (Gagarine 1961, crise des missiles un mois plus tard), puis classez les enjeux : prestige, idéologie, sécurité, science.",
              solution: [
                "Présentation : discours d'un chef d'État, prononcé devant des étudiants et diffusé largement, un an après le vol de Gagarine (avril 1961) et l'annonce de l'objectif lunaire au Congrès (mai 1961), en pleine guerre froide.",
                "Enjeu de prestige : relever un défi « difficile » montre la capacité de la nation américaine à se dépasser, alors que l'URSS a accumulé les premières (Spoutnik, Gagarine).",
                "Enjeu idéologique : Kennedy associe la conquête spatiale à la liberté, opposée implicitement au communisme ; gagner la course, c'est prouver la supériorité du modèle démocratique.",
                "Enjeu de sécurité : l'idée que l'espace peut devenir un lieu de terreur rappelle que lanceurs et missiles sont liés ; dominer l'espace, c'est protéger le territoire américain.",
                "Enjeu scientifique et économique : le programme Apollo mobilise universités et industries (le discours a lieu à Houston, où s'installe le centre des vols habités).",
                "Critique : le discours est une mise en scène de la puissance destinée à justifier un budget considérable devant l'opinion ; il présente l'espace comme pacifique tout en assumant une logique de domination.",
                "Conclusion : la course à l'espace est un affrontement indirect de la guerre froide, gagné symboliquement par les États-Unis avec Apollo 11 en 1969.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la conquête spatiale dans l'ordre chronologique.",
            items: [
              "Lancement de Spoutnik 1 par l'URSS",
              "Création de la NASA",
              "Vol de Iouri Gagarine",
              "Astérix, premier satellite français",
              "Signature du traité de l'espace",
              "Apollo 11 : premiers pas sur la Lune",
              "Mission Apollo-Soyouz",
            ],
          },
          quiz: [
            {
              q: "Pourquoi Spoutnik inquiète-t-il les États-Unis en 1957 ?",
              options: ["Il photographie et espionne les bases militaires américaines", "Il annonce une invasion soviétique", "Sa fusée est aussi un missile intercontinental", "Il détruit un satellite américain"],
              answer: 2,
              why: "La fusée R-7 est un missile intercontinental : le succès de Spoutnik révèle une menace militaire directe.",
            },
            {
              q: "Quelle est la troisième puissance à avoir placé un satellite en orbite avec son propre lanceur ?",
              options: ["La France (1965)", "Le Japon (1970)", "La Chine (1970)", "Le Royaume-Uni (1971)"],
              answer: 0,
              why: "La France lance Astérix avec une fusée Diamant en 1965, après l'URSS et les États-Unis.",
            },
            {
              q: "Que désigne l'arsenalisation de l'espace ?",
              options: ["L'usage de satellites de communication et de renseignement par les armées", "La création d'agences spatiales civiles", "Le lancement de satellites météorologiques", "Le déploiement d'armes dans l'espace ou contre des satellites"],
              answer: 3,
              why: "L'arsenalisation est une étape au-delà de la militarisation : elle fait de l'espace un champ de bataille potentiel.",
            },
            {
              q: "Quelle flotte américaine opère dans le Pacifique occidental ?",
              options: ["La 6e flotte", "La 7e flotte", "La 5e flotte", "La 2e flotte"],
              answer: 1,
              why: "La 7e flotte, basée au Japon, couvre le Pacifique occidental ; la 6e opère en Méditerranée et la 5e dans le golfe Persique.",
            },
            {
              q: "Quel penseur américain a lié la puissance mondiale à la maîtrise des mers dès 1890 ?",
              options: ["George Kennan", "Henry Kissinger", "Alfred Mahan", "Zbigniew Brzezinski"],
              answer: 2,
              why: "Alfred Mahan, dans The Influence of Sea Power upon History (1890), fait de la puissance navale la clé de la puissance mondiale.",
            },
          ],
          trap: "Confondre militarisation et arsenalisation : l'usage militaire des satellites existe depuis les débuts de la conquête, alors que l'arsenalisation suppose des armes visant des objets spatiaux ou placées en orbite.",
          method: "Apprenez une frise à deux étages (espace en haut, mer en bas) de 1945 à aujourd'hui : en dissertation, chaque date devient un exemple daté, ce que les correcteurs valorisent.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cooperations-espaces',
          title: 'Enjeux diplomatiques et coopérations',
          minutes: 35,
          objectives: [
            "Expliquer pourquoi des États rivaux coopèrent dans l'espace : l'exemple de la Station spatiale internationale.",
            "Présenter le cadre juridique du partage des mers et des océans issu de la convention de Montego Bay.",
            "Analyser les rivalités et les coopérations dans l'exploitation et la préservation des ressources des mers et des océans.",
          ],
          course: [
            {
              heading: "Coopérer pour la recherche : la Station spatiale internationale",
              paragraphs: [
                "Après la fin de la guerre froide, les États-Unis, qui préparaient une station spatiale avec leurs alliés, invitent la Russie à les rejoindre (1993). L'accord intergouvernemental de 1998 associe les États-Unis, la Russie, le Japon, le Canada et des États membres de l'Agence spatiale européenne. Le premier module, Zarya, est lancé en novembre 1998, et la station est occupée en permanence depuis novembre 2000. Elle tourne à environ 400 kilomètres d'altitude et fait le tour de la Terre en quelque 90 minutes.",
                "Les raisons de cette coopération sont multiples : partager des coûts considérables, mettre en commun des savoir-faire (les modules russes et américains sont complémentaires), mener des recherches en microgravité (biologie, médecine, physique des matériaux) et, pour les États-Unis, éviter que les ingénieurs russes ne mettent leurs compétences au service d'autres États après l'effondrement de l'URSS.",
                "La coopération crée une interdépendance. Après l'arrêt de la navette spatiale américaine en 2011, seuls les vaisseaux russes Soyouz transportent les astronautes jusqu'en 2020. Malgré les tensions liées à l'annexion de la Crimée (2014) puis à l'invasion de l'Ukraine (2022), la coopération à bord a été maintenue. La station doit être désorbitée vers 2030. La Chine en a été tenue à l'écart, notamment parce qu'une loi américaine de 2011 limite la coopération de la NASA avec elle : elle a construit sa propre station, Tiangong.",
              ],
              box: { label: "À retenir", text: "La Station spatiale internationale montre que la coopération peut naître de la rivalité : elle permet de partager les coûts, de produire de la science et de maintenir un dialogue entre puissances, mais elle reflète aussi les exclusions (la Chine) et les dépendances." },
            },
            {
              heading: "Partager les mers : la convention de Montego Bay",
              paragraphs: [
                "Négociée entre 1973 et 1982 lors de la troisième conférence des Nations unies sur le droit de la mer, la convention de Montego Bay est signée le 10 décembre 1982 et entre en vigueur en 1994. Elle est ratifiée par la grande majorité des États, mais pas par les États-Unis. Elle fixe les droits de chaque État selon la distance à la côte, mesurée en milles marins (1 mille marin = 1 852 mètres) à partir des lignes de base.",
                "La convention crée aussi des institutions : le Tribunal international du droit de la mer (Hambourg) règle des différends, l'Autorité internationale des fonds marins (Kingston, en Jamaïque) gère les ressources minérales de la Zone, et la Commission des limites du plateau continental examine les demandes d'extension des États. Un différend peut aussi être porté devant un tribunal arbitral : en 2016, saisi par les Philippines, l'un d'eux a jugé sans fondement juridique les « droits historiques » revendiqués par la Chine en mer de Chine méridionale, ce que Pékin a rejeté.",
              ],
              box: { label: "Repère", text: "Mer territoriale : jusqu'à 12 milles, souveraineté de l'État. Zone contiguë : jusqu'à 24 milles, contrôles douaniers et sanitaires. ZEE : jusqu'à 200 milles, droits souverains sur les ressources. Plateau continental : extension possible jusqu'à 350 milles pour le sol et le sous-sol. Au-delà : haute mer, liberté de navigation et de pêche." },
            },
            {
              heading: "Exploiter et préserver les ressources marines",
              paragraphs: [
                "La pêche illustre la tension entre exploitation et préservation. Selon la FAO, plus d'un tiers des stocks de poissons évalués sont surexploités. Des organisations régionales de gestion des pêches fixent des quotas : la commission chargée des thonidés de l'Atlantique (CICTA) a imposé à partir de 2007 un plan de reconstitution du thon rouge, qui a permis au stock de se rétablir. La pêche illicite, non déclarée et non réglementée reste un fléau, en particulier en haute mer.",
                "L'exploitation minière des grands fonds divise les États. L'Autorité internationale des fonds marins a accordé des contrats d'exploration, mais aucun code d'exploitation n'a encore été adopté. Plusieurs États, dont la France, demandent une pause ou une interdiction au nom du principe de précaution, alors que d'autres, comme les États-Unis (non parties à la convention), ont affiché en 2025 leur volonté d'autoriser l'exploitation selon leurs propres règles.",
                "La protection de la haute mer progresse. L'accord sur la biodiversité marine des zones situées au-delà de la juridiction nationale (dit traité sur la haute mer), adopté en 2023, permet de créer des aires marines protégées en haute mer ; il est entré en vigueur en 2026 après avoir atteint le nombre de ratifications requis. Il s'inscrit dans l'objectif international de protéger 30 % des terres et des mers d'ici 2030.",
              ],
            },
            {
              heading: "Une coopération toujours traversée par les rivalités",
              paragraphs: [
                "La coopération sert aussi la puissance. Dans l'espace, les accords Artemis (depuis 2020), signés par de nombreux États dont la France en 2022, fixent des principes pour l'exploration lunaire autour des États-Unis, tandis que la Chine et la Russie fédèrent des partenaires autour de leur propre projet lunaire. Coopérer, c'est donc aussi choisir son camp.",
                "Certaines régions combinent coopération et convoitise. Le traité sur l'Antarctique (1959) gèle les revendications territoriales et réserve le continent à des activités pacifiques et scientifiques. Dans l'Arctique, le Conseil de l'Arctique (1996) organise la coopération entre États riverains, mais la fonte de la banquise ouvre de nouvelles routes et attise les revendications sur les plateaux continentaux.",
              ],
            },
          ],
          keyPoints: [
            "La Station spatiale internationale (premier module en 1998, occupée depuis 2000) associe États-Unis, Russie, Europe, Japon et Canada.",
            "Coopérer permet de partager les coûts et les savoirs, mais crée des dépendances et des exclusions (la Chine construit Tiangong).",
            "Montego Bay (1982, en vigueur en 1994) : mer territoriale 12 milles, ZEE 200 milles, plateau jusqu'à 350 milles, haute mer libre.",
            "Institutions : Tribunal international du droit de la mer, Autorité internationale des fonds marins, Commission des limites du plateau continental.",
            "Ressources : quotas de pêche (thon rouge), débat sur l'exploitation des grands fonds, traité sur la haute mer (2023).",
          ],
          example: {
            statement: "Pourquoi les États-Unis et la Russie, anciens adversaires de la guerre froide, ont-ils coopéré pour construire la Station spatiale internationale ?",
            solution: [
              "Contexte : la fin de la guerre froide (1991) ouvre une période de rapprochement ; les États-Unis invitent la Russie en 1993.",
              "Raison économique : une station coûte très cher ; partager les coûts entre plusieurs partenaires rend le projet possible.",
              "Raison technique : la Russie apporte son expérience des stations (Saliout, Mir) et des vaisseaux Soyouz.",
              "Raison politique : associer les ingénieurs russes limite le risque qu'ils travaillent pour des programmes d'armement étrangers, et ancre la Russie dans un partenariat occidental.",
              "Limites : la coopération crée une dépendance (Soyouz seul moyen d'accès entre 2011 et 2020) et résiste difficilement aux crises de 2014 et 2022.",
              "Réponse : la coopération répond à des intérêts bien compris (coûts, savoir-faire, sécurité) plus qu'à une disparition des rivalités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sachant qu'un mille marin vaut 1 852 mètres, calculez en kilomètres la largeur maximale (1) de la mer territoriale (12 milles) et (2) de la ZEE (200 milles), mesurées à partir des lignes de base.",
              hint: "Multipliez le nombre de milles par 1 852, puis divisez par 1 000 pour passer en kilomètres.",
              solution: [
                "Mer territoriale : 12 × 1 852 = 22 224 mètres, soit 22 224 ÷ 1 000 = 22,224 km, environ 22 km.",
                "ZEE : 200 × 1 852 = 370 400 mètres, soit 370,4 km, environ 370 km.",
                "Vérification : 370,4 ÷ 22,224 ≈ 16,7, et 200 ÷ 12 ≈ 16,7 ; les deux rapports concordent.",
                "Résultat : environ 22 km pour la mer territoriale et 370 km pour la ZEE.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des situations suivantes, dites si elle relève plutôt de la coopération ou de la rivalité, et justifiez en une phrase : (a) le plan de reconstitution du thon rouge en Atlantique ; (b) la construction d'îles artificielles par la Chine dans les Spratleys ; (c) l'accord sur la haute mer de 2023 ; (d) la station chinoise Tiangong ; (e) les accords Artemis.",
              hint: "Certaines situations sont ambivalentes : une coopération peut aussi servir à rassembler des alliés face à un rival.",
              solution: [
                "(a) Coopération : les États membres de la CICTA acceptent des quotas communs pour préserver une ressource partagée.",
                "(b) Rivalité : la Chine renforce par le fait accompli des revendications contestées par ses voisins.",
                "(c) Coopération : les États créent un cadre commun pour protéger la biodiversité au-delà des juridictions nationales.",
                "(d) Plutôt rivalité : exclue de la Station spatiale internationale, la Chine affirme son autonomie, même si elle ouvre Tiangong à des coopérations scientifiques.",
                "(e) Ambivalent : coopération entre les signataires, mais aussi constitution d'un camp autour des États-Unis face au projet sino-russe.",
                "Bilan : coopération et rivalité coexistent souvent dans une même initiative.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Coopérer dans l'espace et sur les océans : nécessité ou stratégie de puissance ? ». Rédigez la problématique et un plan détaillé en trois parties, avec au moins deux exemples datés par partie.",
              hint: "Évitez le plan oui/non : montrez que la coopération est nécessaire (milieux hostiles, coûts, biens communs) mais aussi instrumentalisée par les puissances.",
              solution: [
                "Problématique : pourquoi des États rivaux coopèrent-ils dans l'espace et sur les océans, et dans quelle mesure cette coopération sert-elle leurs intérêts de puissance ?",
                "I. Une coopération rendue nécessaire par la nature de ces espaces : coûts et risques (Station spatiale internationale, accord de 1998) ; ressources partagées (quotas de thon rouge depuis 2007) ; biens communs (Montego Bay en 1982, traité sur la haute mer en 2023).",
                "II. Une coopération au service de la puissance : la Station spatiale internationale comme instrument d'influence américaine après 1991 ; accords Artemis (2020) qui rassemblent des alliés ; exclusion de la Chine (loi américaine de 2011).",
                "III. Une coopération fragile, concurrencée par les rivalités : Tiangong et le projet lunaire sino-russe (2021) ; contestation de la sentence arbitrale de 2016 par la Chine ; division sur l'exploitation des grands fonds (2025).",
                "Conclusion : la coopération est indispensable pour connaître et préserver ces espaces, mais elle reste un instrument de la rivalité entre puissances.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Coopérations et droit dans l'espace et sur les océans.",
            statements: [
              { text: "La Station spatiale internationale est occupée en permanence depuis 2000.", true: true, why: "Les premiers équipages permanents arrivent en novembre 2000." },
              { text: "La Chine est un partenaire de la Station spatiale internationale.", true: false, why: "La Chine en a été tenue à l'écart et a construit sa propre station, Tiangong." },
              { text: "Dans sa ZEE, un État côtier dispose de droits souverains sur les ressources.", true: true, why: "La ZEE, jusqu'à 200 milles, réserve l'exploitation des ressources à l'État côtier." },
              { text: "Les États-Unis ont ratifié la convention de Montego Bay.", true: false, why: "Ils ne l'ont pas ratifiée, même s'ils appliquent ses règles coutumières." },
              { text: "La mer territoriale s'étend jusqu'à 200 milles marins.", true: false, why: "Elle s'étend jusqu'à 12 milles ; 200 milles est la limite de la ZEE." },
              { text: "Le traité sur l'Antarctique gèle les revendications territoriales.", true: true, why: "Signé en 1959, il réserve le continent à des usages pacifiques et scientifiques." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la largeur maximale de la mer territoriale ?",
              options: ["12 milles marins", "24 milles marins", "200 milles marins", "350 milles marins"],
              answer: 0,
              why: "La mer territoriale s'étend jusqu'à 12 milles ; 24 milles correspond à la zone contiguë et 200 à la ZEE.",
            },
            {
              q: "Où siège l'Autorité internationale des fonds marins ?",
              options: ["À Hambourg", "À New York", "À Genève, au siège européen de l'ONU", "À Kingston (Jamaïque)"],
              answer: 3,
              why: "L'Autorité siège à Kingston ; Hambourg accueille le Tribunal international du droit de la mer.",
            },
            {
              q: "Pourquoi la Russie a-t-elle été le seul moyen d'accès des astronautes à la station entre 2011 et 2020 ?",
              options: ["La Russie avait interdit les vols américains", "La navette spatiale américaine avait été retirée du service", "La station appartenait à la Russie", "L'Agence spatiale européenne avait suspendu tous ses lanceurs habités"],
              answer: 1,
              why: "Après l'arrêt de la navette en 2011, seuls les Soyouz russes transportaient les équipages, jusqu'aux vols habités de SpaceX en 2020.",
            },
            {
              q: "Que permet l'accord sur la haute mer adopté en 2023 ?",
              options: ["Partager la haute mer en ZEE", "Autoriser l'exploitation minière des grands fonds", "Créer des aires marines protégées en haute mer", "Interdire la navigation militaire"],
              answer: 2,
              why: "Il fournit un cadre pour protéger la biodiversité au-delà des juridictions nationales, notamment par des aires marines protégées.",
            },
            {
              q: "Quel exemple montre qu'une coopération de pêche peut réussir ?",
              options: ["Le plan de reconstitution du thon rouge en Atlantique", "La pêche en mer de Chine méridionale", "La pêche illicite, non déclarée et non réglementée en haute mer", "La disparition des quotas en 2007"],
              answer: 0,
              why: "Les quotas imposés par la CICTA à partir de 2007 ont permis au stock de thon rouge de se reconstituer.",
            },
          ],
          trap: "Confondre la ZEE (droits sur les ressources, la navigation y reste libre) avec la mer territoriale (souveraineté) : un navire étranger peut traverser une ZEE sans autorisation.",
          method: "Dessinez de mémoire le schéma des zones maritimes (lignes de base, 12, 24, 200 et 350 milles) : un croquis légendé est un excellent appui dans une dissertation ou une étude critique.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'chine-espace-mers',
          title: 'La Chine à la conquête de l\'espace, des mers et des océans',
          minutes: 35,
          objectives: [
            "Analyser la volonté politique d'affirmation de la Chine dans l'espace et sur les mers et les océans.",
            "Identifier les étapes du programme spatial chinois et les instruments de la puissance maritime chinoise.",
            "Expliquer les rivalités que suscite cette conquête avec les autres puissances et les pays riverains.",
          ],
          course: [
            {
              heading: "Une volonté politique d'affirmation",
              paragraphs: [
                "La conquête de l'espace et des océans s'inscrit dans le projet politique du Parti communiste chinois. Depuis 2012, Xi Jinping promeut le « rêve chinois » d'un grand renouveau de la nation, qui doit faire de la Chine une puissance de premier rang en 2049, centenaire de la République populaire. La même année, le XVIIIe congrès du Parti fixe l'objectif de faire de la Chine une puissance maritime.",
                "Cette ambition se nourrit de la mémoire du « siècle d'humiliations » (des guerres de l'opium, à partir de 1839, jusqu'en 1949), pendant lequel les puissances étrangères ont imposé leur loi à la Chine, souvent depuis la mer. Maîtriser les océans et l'espace, c'est donc effacer cette humiliation, sécuriser les approvisionnements d'une économie très dépendante du commerce maritime et prouver la réussite du régime.",
              ],
              box: { label: "Définition", text: "Techno-nationalisme : stratégie par laquelle un État fait de la maîtrise de technologies de pointe (spatial, naval, numérique) un instrument de prestige, d'indépendance et de puissance nationale. Le programme spatial chinois en est un exemple." },
            },
            {
              heading: "Un programme spatial de rattrapage devenu concurrent",
              paragraphs: [
                "La Chine place son premier satellite en orbite en 1970. Elle devient en octobre 2003 le troisième pays à envoyer un homme dans l'espace par ses propres moyens, avec le vol de Yang Liwei à bord de Shenzhou 5. Le programme lunaire Chang'e enchaîne les succès : en janvier 2019, Chang'e 4 réussit le premier atterrissage en douceur sur la face cachée de la Lune ; Chang'e 5 rapporte des échantillons lunaires en 2020 et Chang'e 6 rapporte en 2024 les premiers échantillons de la face cachée.",
                "En 2021, la mission Tianwen-1 place autour de Mars un orbiteur et pose le rover Zhurong, dès la première tentative. La même année commence l'assemblage de la station spatiale Tiangong, achevée fin 2022. La Chine dispose aussi de son propre système de positionnement par satellite, Beidou, complet depuis 2020, qui la rend indépendante du GPS américain. Elle affiche l'objectif d'un alunissage habité avant 2030.",
                "Le programme a une forte dimension militaire, puisqu'il est étroitement lié à l'Armée populaire de libération. En 2007, la Chine a détruit l'un de ses satellites météorologiques par un tir de missile, démontrant sa capacité antisatellite et produisant des milliers de débris.",
              ],
              box: { label: "Repère", text: "1970 : premier satellite chinois. 2003 : Yang Liwei (Shenzhou 5). 2007 : tir antisatellite. 2019 : Chang'e 4 sur la face cachée de la Lune. 2020 : Beidou complet. 2021 : Zhurong sur Mars. 2022 : station Tiangong achevée." },
            },
            {
              heading: "Une puissance maritime en construction",
              paragraphs: [
                "La marine de l'Armée populaire de libération est devenue la plus nombreuse au monde en nombre de navires. La Chine a mis en service le porte-avions Liaoning en 2012 (une coque soviétique rachetée et achevée), puis le Shandong en 2019, premier porte-avions de construction nationale ; un troisième, le Fujian, lancé en 2022, est équipé de catapultes. Elle reste toutefois en retrait des États-Unis pour l'expérience opérationnelle et la projection lointaine.",
                "La Chine est aussi le premier constructeur naval mondial, et la majorité des dix premiers ports à conteneurs de la planète sont chinois (Shanghai est le premier). Lancées en 2013, les « nouvelles routes de la soie » comprennent une route maritime qui relie la Chine à l'Europe par l'océan Indien : des entreprises chinoises investissent dans des ports étrangers, comme Le Pirée en Grèce (contrôlé par l'armateur COSCO depuis 2016), Gwadar au Pakistan ou Hambantota au Sri Lanka, concédé pour 99 ans en 2017.",
                "En 2017, la Chine ouvre à Djibouti sa première base militaire à l'étranger, près du détroit de Bab el-Mandeb. Des analystes américains ont qualifié de « collier de perles » ce réseau de points d'appui le long des routes de l'océan Indien. La Chine se présente enfin comme un « État proche de l'Arctique » depuis 2018 et s'intéresse aux routes polaires.",
              ],
            },
            {
              heading: "Des rivalités avec les puissances et les pays riverains",
              paragraphs: [
                "En mer de Chine méridionale, la Chine revendique la quasi-totalité de l'espace maritime à l'intérieur de la « ligne en neuf traits », au nom de droits historiques. Elle contrôle les îles Paracels depuis 1974 et a transformé, à partir de 2013, des récifs des Spratleys en îles artificielles dotées de pistes d'aviation. Ces revendications l'opposent au Vietnam, aux Philippines, à la Malaisie et à Brunei. En 2016, un tribunal arbitral saisi par les Philippines a jugé ces droits historiques sans fondement en droit, décision que Pékin rejette.",
                "En mer de Chine orientale, la Chine conteste au Japon les îles Senkaku (Diaoyu en chinois), et la question de Taïwan reste centrale. Ces tensions poussent ses voisins à se rapprocher des États-Unis, qui mènent des opérations de liberté de navigation, renforcent le dialogue quadrilatéral (Quad) avec le Japon, l'Inde et l'Australie, et ont conclu le pacte AUKUS en 2021. L'Inde s'inquiète des points d'appui chinois dans l'océan Indien. Dans l'espace, la rivalité avec les États-Unis structure deux blocs autour de projets lunaires concurrents.",
              ],
            },
          ],
          keyPoints: [
            "La conquête des mers et de l'espace sert le « rêve chinois » de Xi Jinping et efface la mémoire du « siècle d'humiliations ».",
            "Espace : Shenzhou 5 (2003), Chang'e 4 sur la face cachée (2019), Zhurong sur Mars (2021), Tiangong (2022), Beidou (2020).",
            "Mer : marine la plus nombreuse du monde, trois porte-avions, plusieurs des premiers ports à conteneurs, base de Djibouti (2017).",
            "Les routes de la soie (2013) s'appuient sur des ports étrangers : Le Pirée, Gwadar, Hambantota (« collier de perles »).",
            "Mer de Chine méridionale : « ligne en neuf traits », îles artificielles, sentence arbitrale de 2016 rejetée par Pékin.",
            "Réactions : Quad, AUKUS, opérations de liberté de navigation, rapprochement des voisins avec les États-Unis.",
          ],
          example: {
            statement: "Montrez que la conquête des mers est, pour la Chine, à la fois un enjeu économique et un enjeu géopolitique.",
            solution: [
              "Introduction : la Chine, première puissance commerciale, fait de la maîtrise des mers un objectif officiel depuis 2012.",
              "Enjeu économique : l'économie chinoise dépend des importations d'énergie et de matières premières et des exportations par mer ; elle compte plusieurs des premiers ports à conteneurs du monde et les routes de la soie maritimes sécurisent ses flux.",
              "Enjeu géopolitique régional : en mer de Chine méridionale, la « ligne en neuf traits » et les îles artificielles visent à contrôler un espace riche en ressources et stratégique pour ses sous-marins.",
              "Enjeu géopolitique mondial : la base de Djibouti (2017) et les ports partenaires permettent de projeter sa puissance jusqu'à l'océan Indien et de réduire la dépendance au détroit de Malacca.",
              "Limites : ces ambitions provoquent la méfiance des voisins et des États-Unis (Quad, AUKUS).",
              "Conclusion : économie et géopolitique sont indissociables ; la puissance maritime protège la croissance chinoise et sert l'affirmation internationale du régime.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez à quoi correspond chacun des noms suivants : Shenzhou 5, Chang'e 4, Tiangong, Beidou, Liaoning, Hambantota.",
              hint: "Trois noms relèvent du spatial, un du naval militaire, un du positionnement par satellite, un des ports étrangers.",
              solution: [
                "Shenzhou 5 : vaisseau du premier vol habité chinois, avec Yang Liwei, en 2003.",
                "Chang'e 4 : sonde qui réussit en 2019 le premier atterrissage en douceur sur la face cachée de la Lune.",
                "Tiangong : station spatiale chinoise, achevée fin 2022.",
                "Beidou : système chinois de positionnement par satellite, complet depuis 2020.",
                "Liaoning : premier porte-avions chinois, mis en service en 2012.",
                "Hambantota : port du Sri Lanka concédé pour 99 ans à une entreprise chinoise en 2017.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez ce qu'est la « ligne en neuf traits » et pourquoi la sentence arbitrale de 2016 est importante. Montrez ensuite pourquoi la Chine a pu la rejeter sans en subir de conséquences directes.",
              hint: "Distinguez ce que dit le droit (la convention de Montego Bay ne connaît pas de « droits historiques » de ce type) et ce que permet le rapport de force.",
              solution: [
                "La « ligne en neuf traits » est un tracé figurant sur les cartes chinoises qui englobe la plus grande partie de la mer de Chine méridionale ; Pékin y revendique des droits historiques sur les îles et les eaux.",
                "En 2016, un tribunal arbitral constitué dans le cadre de la convention de Montego Bay, saisi par les Philippines, juge que ces droits historiques n'ont pas de fondement juridique et que les récifs aménagés ne génèrent pas de ZEE.",
                "Importance : la sentence donne raison en droit aux pays riverains et sert d'appui aux États qui contestent les revendications chinoises.",
                "Mais il n'existe pas de force internationale pour l'exécuter ; la Chine, puissance militaire régionale dominante, a refusé de participer à la procédure et poursuit l'aménagement des îles.",
                "Conclusion : l'exemple montre la limite du droit international face à une grande puissance qui privilégie le fait accompli.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La Chine, une puissance spatiale et maritime : quelles ambitions, quelles limites ? ». Proposez une introduction complète et un plan détaillé en trois parties.",
              hint: "Articulez volonté politique (pourquoi), moyens et réalisations (comment), et rivalités et limites (jusqu'où).",
              solution: [
                "Accroche : en janvier 2019, la sonde Chang'e 4 se pose sur la face cachée de la Lune, une première mondiale qui montre que la Chine n'est plus seulement en position de rattrapage.",
                "Problématique : comment la Chine fait-elle de l'espace et des océans des instruments de son affirmation de puissance, et quelles limites rencontre-t-elle ?",
                "I. Une volonté politique d'affirmation : « rêve chinois » et horizon 2049 ; objectif de puissance maritime fixé en 2012 ; mémoire du siècle d'humiliations ; techno-nationalisme.",
                "II. Des réalisations spectaculaires : Shenzhou 5 (2003), Chang'e, Tianwen-1 (2021), Tiangong (2022), Beidou (2020) ; première marine en nombre de navires, porte-avions, ports, routes de la soie (2013), base de Djibouti (2017).",
                "III. Des rivalités et des limites : contestations en mer de Chine méridionale et sentence de 2016 ; réactions américaines et alliées (Quad, AUKUS) ; projection navale lointaine encore limitée par rapport aux États-Unis ; débris liés au tir de 2007 qui ternissent son image.",
                "Conclusion : la Chine est devenue la principale concurrente des États-Unis dans ces deux espaces, mais son affirmation suscite des coalitions qui limitent ses marges de manœuvre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la puissance chinoise à sa description.",
            pairs: [
              { left: "Shenzhou 5", right: "Premier vol habité chinois, en 2003" },
              { left: "Chang'e 4", right: "Premier atterrissage sur la face cachée de la Lune (2019)" },
              { left: "Djibouti", right: "Première base militaire chinoise à l'étranger (2017)" },
              { left: "Ligne en neuf traits", right: "Tracé des revendications chinoises en mer de Chine méridionale" },
              { left: "Beidou", right: "Système chinois de positionnement par satellite" },
              { left: "Le Pirée", right: "Port grec contrôlé par l'armateur chinois COSCO" },
            ],
          },
          quiz: [
            {
              q: "En quelle année la Chine envoie-t-elle son premier astronaute dans l'espace ?",
              options: ["1970", "1999", "2008", "2003"],
              answer: 3,
              why: "Yang Liwei vole à bord de Shenzhou 5 en octobre 2003 ; 1970 est l'année du premier satellite chinois.",
            },
            {
              q: "Quelle première mondiale la sonde Chang'e 4 réalise-t-elle en 2019 ?",
              options: ["Le premier retour sur Terre d'échantillons prélevés à la surface de Mars", "Le premier atterrissage en douceur sur la face cachée de la Lune", "Le premier vol habité autour de la Lune", "La première station spatiale lunaire"],
              answer: 1,
              why: "Chang'e 4 se pose sur la face cachée, ce qui exige un satellite relais car la Terre n'y est pas visible.",
            },
            {
              q: "Que désigne l'expression « collier de perles » ?",
              options: ["Une constellation de satellites chinois", "Les îles artificielles construites par la Chine dans les Spratleys", "Le réseau de ports chinois dans l'océan Indien", "Les porte-avions chinois"],
              answer: 2,
              why: "Forgée par des analystes américains, l'expression décrit les ports et bases que la Chine a acquis ou financés de la mer de Chine à l'Afrique de l'Est.",
            },
            {
              q: "Qu'a décidé le tribunal arbitral saisi par les Philippines en 2016 ?",
              options: ["Les « droits historiques » chinois sont sans fondement juridique", "Les Spratleys appartiennent à la Chine", "La mer de Chine méridionale est une zone démilitarisée", "Les Philippines doivent céder à la Chine la plus grande partie de leur ZEE"],
              answer: 0,
              why: "La sentence rejette les droits historiques chinois ; Pékin refuse de la reconnaître.",
            },
            {
              q: "Quel pacte les États-Unis concluent-ils en 2021 avec l'Australie et le Royaume-Uni ?",
              options: ["L'ANZUS", "L'AUKUS", "Le Quad", "L'OTASE"],
              answer: 1,
              why: "L'AUKUS prévoit notamment de doter l'Australie de sous-marins à propulsion nucléaire ; le Quad associe les États-Unis, le Japon, l'Inde et l'Australie.",
            },
          ],
          trap: "Présenter la Chine comme une puissance déjà supérieure aux États-Unis sur toutes les mers : sa marine est la plus nombreuse, mais les États-Unis gardent l'avantage en porte-avions, en expérience et en réseau mondial de bases.",
          method: "Pour cet objet de travail conclusif, préparez trois exemples précis et datés par axe (volonté politique, réalisations, rivalités) : ils serviront dans presque tous les sujets du thème 1.",
        },
      ],
    },

    /* ==================================================================== */
    /* THÈME 2 · FAIRE LA GUERRE, FAIRE LA PAIX                               */
    /* ==================================================================== */
    {
      id: 'guerre-et-paix',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'clausewitz',
          title: 'La guerre, continuation de la politique ? Clausewitz',
          minutes: 30,
          objectives: [
            "Situer Clausewitz et le contexte des guerres de la Révolution et de l'Empire dans lequel il élabore sa pensée.",
            "Expliquer la formule de la guerre comme « continuation de la politique par d'autres moyens ».",
            "Définir les principaux concepts de De la guerre : trinité, friction, guerre absolue et guerre réelle.",
            "Mobiliser ces concepts pour analyser une guerre interétatique.",
          ],
          course: [
            {
              heading: "Clausewitz, un officier prussien face à Napoléon",
              paragraphs: [
                "Carl von Clausewitz (1780-1831) entre très jeune dans l'armée prussienne et combat dès les guerres contre la France révolutionnaire. Élève puis collaborateur du général Scharnhorst, il est fait prisonnier après la défaite prussienne d'Iéna-Auerstedt (1806), qui révèle la supériorité des armées napoléoniennes. De retour en Prusse, il participe à la réforme de l'armée.",
                "En 1812, refusant l'alliance imposée par Napoléon à la Prusse, il passe au service de la Russie et assiste à la campagne de Russie (bataille de la Moskova). Il combat encore lors de la campagne de 1815. Directeur de l'École de guerre de Berlin de 1818 à 1830, il consacre ces années à rédiger son grand ouvrage, De la guerre (Vom Kriege). Il meurt du choléra en 1831 sans l'avoir achevé ; sa veuve, Marie von Brühl, le publie entre 1832 et 1834.",
              ],
            },
            {
              heading: "Une guerre transformée par la Révolution et l'Empire",
              paragraphs: [
                "Clausewitz pense la guerre à partir de ce qu'il a vécu. La levée en masse décrétée en France en 1793 fait entrer la nation entière dans la guerre : les armées deviennent nombreuses, mobilisent les passions patriotiques et cherchent la bataille décisive qui anéantit les forces adverses (Austerlitz en 1805, Iéna en 1806). La guerre des souverains aux objectifs limités du XVIIIe siècle laisse place à une guerre des peuples.",
                "Il observe aussi les résistances populaires : la guérilla espagnole contre l'occupation française (1808-1814) ou la mobilisation russe de 1812. Il consacre d'ailleurs un chapitre de son livre au peuple en armes. Sa réflexion part donc d'un constat : la guerre a changé de nature parce que la politique a changé, et la Révolution a mis la nation au cœur de l'État.",
              ],
            },
            {
              heading: "La guerre, instrument de la politique",
              paragraphs: [
                "Clausewitz définit la guerre comme un acte de violence destiné à contraindre l'adversaire à exécuter notre volonté. La violence n'est pas une fin en soi : elle sert un but politique, fixé par le gouvernement. D'où sa formule célèbre : la guerre est la continuation de la politique par d'autres moyens. Le but politique détermine l'ampleur des efforts militaires ; quand il change, la guerre change aussi.",
                "Il distingue la guerre absolue, concept théorique où la violence monterait aux extrêmes jusqu'à l'anéantissement, et la guerre réelle, toujours limitée par la politique, par l'incertitude (le célèbre « brouillard » de la guerre) et par la friction, c'est-à-dire l'ensemble des difficultés concrètes (fatigue, météo, erreurs, ordres mal compris) qui font que tout est plus difficile à la guerre que sur le papier.",
                "Enfin, Clausewitz décrit la guerre comme une « étonnante trinité » de trois forces : la violence et les passions, qui relèvent surtout du peuple ; le hasard et les probabilités, domaine du chef militaire et de son armée ; la raison politique, qui appartient au gouvernement. Une bonne théorie doit tenir l'équilibre entre ces trois pôles.",
              ],
              box: { label: "Définition", text: "Pour Clausewitz, la guerre est la continuation de la politique par d'autres moyens : elle n'est pas un phénomène autonome mais un instrument au service d'une fin politique, qui doit rester subordonné au pouvoir politique." },
            },
            {
              heading: "Une pensée pour analyser les guerres entre États",
              paragraphs: [
                "Le modèle de Clausewitz est d'abord celui de la guerre entre États, menée par des armées régulières pour des objectifs politiques. Les guerres de Bismarck en sont une illustration : en 1870-1871, la Prusse mène contre la France une guerre aux buts précis (l'unité allemande, proclamée à Versailles le 18 janvier 1871) et la termine par un traité (Francfort, mai 1871).",
                "Sa pensée a été diversement interprétée. Avant 1914, certains états-majors ont retenu surtout l'idée de bataille décisive, au détriment de la primauté du politique. À l'âge nucléaire, le philosophe Raymond Aron (Penser la guerre, Clausewitz, 1976) montre la pertinence de la formule : la dissuasion nucléaire rend la montée aux extrêmes suicidaire et oblige les puissances à limiter leurs objectifs. L'invasion de l'Ukraine par la Russie en 2022 rappelle que la guerre interétatique, avec des buts politiques et territoriaux, n'a pas disparu.",
              ],
              box: { label: "À retenir", text: "Trois idées clés : la guerre sert une fin politique ; la guerre réelle reste limitée par la politique, la friction et l'incertitude ; elle combine trois forces (passions du peuple, art du chef et de l'armée, raison du gouvernement)." },
            },
          ],
          keyPoints: [
            "Clausewitz (1780-1831), officier prussien, pense la guerre à partir des guerres de la Révolution et de l'Empire.",
            "De la guerre (Vom Kriege) est publié après sa mort, entre 1832 et 1834, par sa veuve.",
            "La guerre est la continuation de la politique par d'autres moyens : le but politique commande l'action militaire.",
            "Guerre absolue (montée aux extrêmes, théorique) et guerre réelle (limitée par la politique, la friction, l'incertitude).",
            "Trinité : passions du peuple, hasard maîtrisé par le chef et l'armée, raison politique du gouvernement.",
            "Raymond Aron (1976) montre que la formule éclaire encore l'âge nucléaire.",
          ],
          example: {
            statement: "Expliquez la formule de Clausewitz selon laquelle la guerre est « la continuation de la politique par d'autres moyens ».",
            solution: [
              "Situer : la formule figure dans De la guerre, ouvrage posthume (1832-1834) d'un officier prussien qui a combattu Napoléon.",
              "Sens de « continuation » : la guerre ne rompt pas avec la politique ; elle prolonge les relations entre États lorsque la diplomatie ne suffit plus.",
              "Sens de « d'autres moyens » : la violence armée remplace la négociation, mais elle reste un moyen au service d'une fin.",
              "Conséquence : le pouvoir politique doit garder la direction de la guerre ; l'ampleur de l'effort militaire dépend de l'importance du but politique.",
              "Exemple : en 1870-1871, Bismarck mène une guerre limitée à des buts précis (unité allemande) et la conclut par le traité de Francfort.",
              "Conclusion : la formule fait de la guerre un instrument rationnel de la politique, ce qui permet aussi de penser sa limitation et la paix qui doit la conclure.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants, tels que Clausewitz les emploie : (1) friction ; (2) guerre absolue ; (3) guerre réelle ; (4) trinité.",
              hint: "Reliez chaque terme à l'écart entre la théorie et la réalité de la guerre.",
              solution: [
                "(1) Friction : ensemble des difficultés concrètes et imprévues (fatigue, terrain, météo, erreurs) qui rendent tout plus difficile à la guerre que dans les plans.",
                "(2) Guerre absolue : concept théorique d'une violence qui monterait aux extrêmes jusqu'à l'anéantissement de l'adversaire.",
                "(3) Guerre réelle : guerre telle qu'elle se déroule, toujours limitée par les buts politiques, la friction et l'incertitude.",
                "(4) Trinité : combinaison de trois forces, les passions (peuple), le hasard et le talent (chef et armée), la raison politique (gouvernement).",
              ],
            },
            {
              level: 2,
              statement: "Appliquez le modèle de Clausewitz à la guerre franco-prussienne de 1870-1871 : identifiez le but politique de la Prusse, les moyens militaires, le rôle des trois pôles de la trinité et la manière dont la guerre se termine.",
              hint: "Pensez au rôle de Bismarck (gouvernement), de Moltke et de l'armée prussienne (chef et armée), des opinions nationales (peuple).",
              solution: [
                "But politique : achever l'unité allemande autour de la Prusse en mobilisant les États allemands du Sud contre la France.",
                "Moyens militaires : une armée prussienne et alliée bien préparée, qui remporte une victoire rapide (Sedan, septembre 1870), puis assiège Paris.",
                "Trinité : le gouvernement (Bismarck) fixe les buts ; le chef militaire (Moltke) conduit les opérations face aux incertitudes ; les passions nationales sont fortes des deux côtés, en France après la chute de l'Empire et pendant la défense nationale.",
                "Fin de la guerre : l'Empire allemand est proclamé à Versailles le 18 janvier 1871 ; le traité de Francfort (mai 1871) impose l'annexion de l'Alsace et d'une partie de la Lorraine.",
                "Conclusion : la guerre de 1870-1871 illustre la guerre interétatique clausewitzienne, aux buts politiques précis, conclue par un traité.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : Carl von Clausewitz, De la guerre, livre I, chapitre 1 (présentation résumée). L'auteur y affirme que la guerre n'est pas seulement un acte politique mais un véritable instrument de la politique, une poursuite des relations politiques par d'autres moyens ; l'intention politique est la fin, la guerre est le moyen, et l'on ne peut concevoir le moyen indépendamment de la fin. Consigne : présentez le document, expliquez la conception de la guerre qu'il exprime, puis montrez l'intérêt et les limites de cette conception pour comprendre les conflits.",
              hint: "N'oubliez pas la critique : pour qui ce modèle est-il pensé (des États, des armées régulières) ? Que devient-il face au terrorisme ou à l'arme nucléaire ?",
              solution: [
                "Présentation : extrait du premier chapitre de De la guerre, traité théorique d'un officier prussien publié après sa mort (1832-1834), écrit à partir de l'expérience des guerres napoléoniennes.",
                "Idée principale : la guerre est subordonnée à la politique ; elle n'a pas de logique propre et prolonge les relations entre États par la violence.",
                "Explication : le couple fin et moyen signifie que le gouvernement fixe le but, et que l'armée choisit les moyens en fonction de ce but ; une guerre sans but politique clair est une absurdité.",
                "Intérêt : le modèle permet d'analyser les guerres interétatiques (1870-1871) et de penser leur limitation ; Raymond Aron l'applique à la dissuasion nucléaire.",
                "Limites : le modèle suppose des États et des armées régulières ; il est discuté face aux guerres irrégulières (terrorisme, guérillas), où des acteurs non étatiques mêlent politique, religion et criminalité.",
                "Conclusion : le texte fonde une conception politique et rationnelle de la guerre, toujours utile, mais que les conflits actuels obligent à adapter.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Clausewitz et sa pensée.",
            statements: [
              { text: "Clausewitz a combattu contre les armées de Napoléon.", true: true, why: "Officier prussien, il est capturé après Iéna (1806) et sert la Russie en 1812." },
              { text: "Clausewitz a publié lui-même De la guerre de son vivant.", true: false, why: "L'ouvrage, inachevé, est publié après sa mort par sa veuve entre 1832 et 1834." },
              { text: "Pour Clausewitz, la guerre est une fin en soi.", true: false, why: "Elle est un moyen au service d'une fin politique." },
              { text: "La friction désigne les difficultés concrètes qui contrarient les plans.", true: true, why: "Fatigue, terrain, erreurs ou météo rendent tout plus difficile à la guerre." },
              { text: "La guerre absolue est, pour Clausewitz, la forme la plus fréquente de la guerre.", true: false, why: "C'est un concept théorique ; la guerre réelle est toujours limitée." },
              { text: "Raymond Aron a appliqué la pensée de Clausewitz à l'âge nucléaire.", true: true, why: "Dans Penser la guerre, Clausewitz (1976), il montre que la dissuasion limite la montée aux extrêmes." },
            ],
          },
          quiz: [
            {
              q: "Dans quel contexte Clausewitz élabore-t-il sa pensée ?",
              options: ["La guerre de Trente Ans", "Les guerres de la Révolution et de l'Empire", "La Première Guerre mondiale", "La guerre de Sécession aux États-Unis (1861-1865)"],
              answer: 1,
              why: "Officier prussien, il a combattu les armées françaises de 1793 à 1815 ; son livre en tire les leçons.",
            },
            {
              q: "Selon Clausewitz, quel pôle de la trinité relève du gouvernement ?",
              options: ["La raison politique", "Les passions et la violence", "Le hasard et les probabilités", "La friction"],
              answer: 0,
              why: "Le gouvernement incarne la raison politique ; les passions relèvent surtout du peuple, le hasard du chef et de l'armée.",
            },
            {
              q: "Qu'appelle-t-on la « guerre réelle » chez Clausewitz ?",
              options: ["Une guerre déclarée officiellement par un gouvernement à un autre État", "La guerre menée par des armées de métier", "La guerre limitée par la politique, la friction et l'incertitude", "Une guerre sans armes"],
              answer: 2,
              why: "La guerre réelle s'oppose à la guerre absolue, concept théorique de montée aux extrêmes.",
            },
            {
              q: "Quel événement révèle à Clausewitz la supériorité des armées napoléoniennes ?",
              options: ["La bataille de Valmy", "La retraite de Russie", "La bataille de Waterloo", "La défaite prussienne d'Iéna-Auerstedt"],
              answer: 3,
              why: "En 1806, la Prusse est écrasée à Iéna et Auerstedt ; Clausewitz est fait prisonnier.",
            },
            {
              q: "Quelle idée Raymond Aron tire-t-il de Clausewitz à l'âge nucléaire ?",
              options: ["La guerre totale devient inévitable", "Clausewitz est totalement dépassé", "La dissuasion limite la guerre et confirme la primauté du politique", "Les armées conventionnelles n'ont plus aucun rôle face à l'arme atomique"],
              answer: 2,
              why: "Pour Aron, la montée aux extrêmes devient suicidaire avec l'arme nucléaire, ce qui renforce la primauté du politique.",
            },
          ],
          trap: "Réduire Clausewitz à un penseur de la guerre totale : il affirme au contraire la primauté du politique, qui limite la guerre réelle, la guerre absolue n'étant qu'un concept théorique.",
          method: "Retenez la formule exacte et ses trois concepts associés (trinité, friction, guerre absolue et réelle) ; dans une copie, citez-les puis confrontez-les toujours à un exemple précis et daté.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'dimension-politique-guerre',
          title: 'Des conflits interétatiques aux enjeux transnationaux',
          minutes: 35,
          objectives: [
            "Distinguer les différentes formes de conflits : guerre interétatique, guerre civile, conflit asymétrique, terrorisme.",
            "Expliquer en quoi les « guerres irrégulières », d'Al-Qaïda à Daech, mettent à l'épreuve le modèle de Clausewitz.",
            "Analyser la dimension transnationale des conflits contemporains.",
          ],
          course: [
            {
              heading: "Une typologie des conflits contemporains",
              paragraphs: [
                "Les guerres interétatiques, qui opposent les armées de deux ou plusieurs États, sont devenues plus rares depuis 1945, même si elles n'ont pas disparu : guerre Iran-Irak (1980-1988), guerre du Golfe (1991), guerre entre l'Éthiopie et l'Érythrée (1998-2000), invasion de l'Ukraine par la Russie (2022). La plupart des conflits actuels sont des guerres civiles, souvent internationalisées par l'intervention de puissances étrangères, comme en Syrie après 2011.",
                "Un conflit est dit asymétrique lorsque les adversaires ont des moyens, des statuts et des stratégies très différents : une armée régulière affronte une guérilla ou un groupe terroriste qui refuse la bataille rangée et frappe là où on ne l'attend pas. La guerre hybride combine moyens militaires, cyberattaques, désinformation et pression économique, sans toujours franchir le seuil d'une guerre déclarée, comme lors de l'annexion de la Crimée par la Russie en 2014.",
                "Dans les années 1990, la chercheuse Mary Kaldor parle de « nouvelles guerres » : des conflits menés par des acteurs étatiques et non étatiques mêlés, financés par des trafics, visant des populations civiles et fondés sur des identités ethniques ou religieuses.",
              ],
              box: { label: "Définition", text: "Terrorisme : usage de la violence, souvent contre des civils, par un acteur généralement non étatique, pour créer un climat de peur et atteindre un objectif politique. Un acteur transnational agit par-delà les frontières, sans dépendre d'un État." },
            },
            {
              heading: "Al-Qaïda : un terrorisme transnational",
              paragraphs: [
                "Al-Qaïda naît à la fin des années 1980, vers 1988, autour d'Oussama Ben Laden, parmi les combattants islamistes venus lutter contre l'intervention soviétique en Afghanistan (1979-1989). L'organisation se donne pour objectifs de chasser les États-Unis des terres musulmanes et de renverser les régimes jugés impies. En 1998, elle frappe les ambassades américaines de Nairobi et de Dar es-Salaam.",
                "Le 11 septembre 2001, ses attentats contre le World Trade Center et le Pentagone font près de 3 000 morts. Les États-Unis lancent une « guerre contre le terrorisme » : intervention en Afghanistan dès octobre 2001 contre le régime taliban qui abritait Al-Qaïda. L'organisation fonctionne en réseau, avec des branches régionales (comme Al-Qaïda au Maghreb islamique, à partir de 2007). Ben Laden est tué par un commando américain au Pakistan en 2011, et les talibans reprennent le pouvoir à Kaboul en 2021.",
              ],
            },
            {
              heading: "Daech : un groupe terroriste devenu proto-État",
              paragraphs: [
                "L'organisation État islamique, appelée Daech d'après son acronyme arabe, est issue de la branche irakienne d'Al-Qaïda, née de l'insurrection contre l'occupation américaine après 2003. Elle profite de la guerre civile syrienne et des divisions irakiennes : en juin 2014, elle s'empare de Mossoul et son chef, Abou Bakr al-Baghdadi, proclame un « califat » à cheval sur l'Irak et la Syrie.",
                "Contrairement à Al-Qaïda, Daech contrôle un territoire, administre des millions d'habitants, lève des impôts et exploite du pétrole. Il attire des milliers de combattants étrangers et utilise massivement les réseaux sociaux pour sa propagande. Il organise ou inspire des attentats, notamment à Paris le 13 novembre 2015 (130 morts) et à Nice le 14 juillet 2016 (86 morts).",
                "Une coalition internationale menée par les États-Unis, à laquelle participe la France, intervient dès 2014, en appui des forces irakiennes et kurdes. Daech perd Mossoul en 2017, Raqqa la même année et son dernier réduit, Baghouz, en mars 2019. Il demeure toutefois actif sous forme de réseaux clandestins et de branches régionales, en Afrique et en Asie centrale.",
              ],
            },
            {
              heading: "Le modèle de Clausewitz à l'épreuve des guerres irrégulières",
              paragraphs: [
                "Pour certains auteurs, ces conflits rendent Clausewitz obsolète. Dès 1991, Martin van Creveld estime que la guerre n'est plus l'affaire des seuls États ; en 1993, John Keegan y voit d'abord un phénomène culturel. Dans les guerres irrégulières, la trinité semble se défaire : il n'y a pas de gouvernement reconnu, pas d'armée régulière, et la population est à la fois cible, refuge et enjeu.",
                "D'autres soulignent que ces groupes poursuivent bien des buts politiques : Al-Qaïda veut le retrait américain et la chute de régimes, Daech veut fonder un État. La violence terroriste reste donc un moyen au service d'une fin politique, même si la fin est révolutionnaire et religieuse. Le modèle n'est pas dépassé, il doit être adapté : la victoire militaire ne suffit plus, il faut gagner la confiance des populations et traiter les causes politiques des conflits.",
              ],
              box: { label: "À retenir", text: "Les guerres irrégulières remettent en cause le cadre interétatique du modèle clausewitzien (acteurs non étatiques, transnationaux, absence de front), mais confirment souvent sa thèse centrale : la violence armée reste un moyen au service d'objectifs politiques." },
            },
          ],
          keyPoints: [
            "Les guerres interétatiques sont plus rares depuis 1945 ; dominent les guerres civiles internationalisées et les conflits asymétriques.",
            "Al-Qaïda (vers 1988, Ben Laden) : terrorisme transnational en réseau ; attentats du 11 septembre 2001.",
            "Daech : califat proclamé en 2014 à Mossoul, proto-État territorial ; attentats de Paris (2015) ; chute de Baghouz en 2019.",
            "Van Creveld (1991), Keegan (1993) et Kaldor (« nouvelles guerres ») jugent le modèle de Clausewitz dépassé.",
            "Mais ces groupes ont des buts politiques : le modèle reste utile à condition d'être adapté aux acteurs non étatiques.",
          ],
          example: {
            statement: "En quoi Daech se distingue-t-il d'Al-Qaïda dans sa manière de faire la guerre ?",
            solution: [
              "Point commun : deux organisations jihadistes transnationales qui utilisent le terrorisme contre des civils pour des buts politiques et religieux.",
              "Organisation : Al-Qaïda fonctionne en réseau de cellules et de branches régionales ; Daech s'appuie sur un territoire et une administration.",
              "Territoire : Daech contrôle de 2014 à 2019 une partie de l'Irak et de la Syrie, lève des impôts et exploite du pétrole ; Al-Qaïda n'a jamais eu de tel État.",
              "Stratégie : Al-Qaïda privilégie des attentats spectaculaires contre l'« ennemi lointain » (11 septembre 2001) ; Daech mène à la fois une guerre conventionnelle locale et des attentats en Europe (Paris 2015).",
              "Conséquence : Daech a pu être vaincu militairement sur son territoire (Baghouz, 2019), ce qui est plus difficile face à un réseau.",
              "Réponse : Daech est un proto-État terroriste territorialisé, alors qu'Al-Qaïda est d'abord un réseau transnational.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les conflits suivants : guerre Iran-Irak (1980-1988) ; attentats du 11 septembre 2001 ; guerre civile syrienne (depuis 2011) ; annexion de la Crimée (2014) ; invasion de l'Ukraine (2022). Catégories : guerre interétatique, guerre civile internationalisée, terrorisme transnational, guerre hybride.",
              hint: "Regardez qui sont les acteurs (États, groupes armés) et quels moyens sont employés.",
              solution: [
                "Guerre Iran-Irak : guerre interétatique entre deux armées régulières.",
                "11 septembre 2001 : terrorisme transnational (Al-Qaïda contre les États-Unis).",
                "Guerre civile syrienne : guerre civile internationalisée (intervention de la Russie, de l'Iran, de la Turquie, d'une coalition internationale).",
                "Annexion de la Crimée : guerre hybride (soldats sans insignes, désinformation, référendum organisé sous contrôle russe).",
                "Invasion de l'Ukraine : guerre interétatique de haute intensité.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en un paragraphe argumenté pourquoi la lutte contre Daech a nécessité à la fois des moyens militaires et des moyens politiques.",
              hint: "Pensez à la reconquête territoriale (2014-2019), puis à ce qui a permis à Daech de naître (exclusion politique, guerre civile).",
              solution: [
                "Moyens militaires : une coalition internationale (dont la France) frappe Daech dès 2014 et appuie les forces irakiennes et kurdes ; Mossoul et Raqqa sont reprises en 2017, Baghouz en 2019.",
                "Limites : la défaite territoriale ne supprime ni l'idéologie, ni les réseaux clandestins, ni les branches régionales.",
                "Moyens politiques : Daech a prospéré sur la guerre civile syrienne et sur le sentiment d'exclusion d'une partie de la population sunnite d'Irak ; sans réponse politique, de nouveaux groupes peuvent apparaître.",
                "Autres moyens : lutte contre le financement, contre la propagande en ligne, coopération judiciaire et policière entre États.",
                "Conclusion : conformément à l'idée de Clausewitz, une guerre ne se gagne durablement que si l'on atteint un but politique, ici la stabilisation des États et l'intégration des populations.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Le modèle de Clausewitz permet-il encore de penser les guerres du XXIe siècle ? ». Rédigez l'introduction et un plan détaillé en trois parties.",
              hint: "Un plan dialectique convient : utilité du modèle, remises en cause, adaptation. Mobilisez des exemples variés (Ukraine, Al-Qaïda, Daech, cyberespace).",
              solution: [
                "Accroche : le 11 septembre 2001, une organisation non étatique frappe la première puissance mondiale sur son sol, ce qui semble rompre avec la guerre entre États pensée par Clausewitz.",
                "Problématique : la conception de la guerre comme continuation de la politique par d'autres moyens, élaborée au temps des guerres napoléoniennes, reste-t-elle pertinente face aux conflits actuels ?",
                "I. Un modèle toujours opératoire pour les guerres interétatiques : buts politiques de l'invasion de l'Ukraine (2022) ; dissuasion nucléaire (Aron) ; primauté du politique dans les démocraties.",
                "II. Un modèle bousculé par les guerres irrégulières : acteurs non étatiques et transnationaux (Al-Qaïda, Daech) ; population cible et enjeu ; critiques de van Creveld, Keegan et Kaldor.",
                "III. Un modèle à adapter plutôt qu'à abandonner : les groupes terroristes poursuivent des buts politiques ; la victoire suppose une solution politique (Irak après 2017) ; nouvelles dimensions (cyber, guerre hybride).",
                "Conclusion : le cadre interétatique est dépassé, mais la thèse de la primauté du politique reste un outil indispensable pour comprendre et terminer les guerres.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Intervention soviétique en Afghanistan",
              "Fondation d'Al-Qaïda autour de Ben Laden",
              "Attentats du 11 septembre",
              "Invasion de l'Irak par les États-Unis",
              "Proclamation du « califat » de Daech à Mossoul",
              "Attentats du 13 novembre à Paris",
              "Chute de Baghouz, dernier réduit de Daech",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un conflit asymétrique ?",
              options: ["Une guerre entre deux États de puissance équivalente qui s'affrontent en bataille rangée", "Une guerre sans victimes civiles", "Un conflit entre adversaires aux moyens et aux stratégies très différents", "Une guerre limitée à la mer"],
              answer: 2,
              why: "L'asymétrie oppose par exemple une armée régulière à une guérilla ou à un groupe terroriste qui évite la bataille rangée.",
            },
            {
              q: "Dans quel contexte Al-Qaïda est-elle née ?",
              options: ["La guerre du Golfe de 1991", "La guerre civile syrienne", "La révolution islamique iranienne de 1979 et la prise d'otages", "La lutte contre l'intervention soviétique en Afghanistan"],
              answer: 3,
              why: "L'organisation naît vers 1988 parmi les combattants venus lutter contre les Soviétiques en Afghanistan (1979-1989).",
            },
            {
              q: "Qu'est-ce qui distingue principalement Daech d'Al-Qaïda ?",
              options: ["Le contrôle d'un territoire administré entre 2014 et 2019", "L'usage du terrorisme", "Le recours à la propagande sur les réseaux sociaux et les médias", "Son origine européenne"],
              answer: 0,
              why: "Daech a constitué un proto-État en Irak et en Syrie ; les deux groupes pratiquent le terrorisme et la propagande.",
            },
            {
              q: "Quel auteur parle de « nouvelles guerres » dans les années 1990 ?",
              options: ["Raymond Aron", "Mary Kaldor", "Alfred Mahan", "Carl von Clausewitz"],
              answer: 1,
              why: "Mary Kaldor décrit des conflits où se mêlent acteurs étatiques et non étatiques, trafics et violences contre les civils.",
            },
            {
              q: "Pourquoi peut-on dire que Daech confirme en partie la thèse de Clausewitz ?",
              options: ["Parce qu'il poursuit un but politique : fonder un État", "Parce qu'il possède une armée régulière reconnue", "Parce qu'il respecte le droit de la guerre", "Parce qu'il a signé un traité de paix"],
              answer: 0,
              why: "Sa violence sert un projet politique (le califat), ce qui correspond à l'idée de la guerre comme moyen d'une fin politique.",
            },
          ],
          trap: "Affirmer sans nuance que le terrorisme n'a « rien de politique » et que Clausewitz est donc périmé : la plupart des groupes jihadistes poursuivent des objectifs politiques explicites.",
          method: "Pour chaque acteur (Al-Qaïda, Daech), retenez une fiche « date de naissance, objectifs, organisation, territoire, réponse internationale » : c'est la grille qu'attend une comparaison au bac.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'construire-la-paix',
          title: 'Le défi de la construction de la paix',
          minutes: 35,
          objectives: [
            "Expliquer comment les traités de Westphalie (1648) construisent la paix par la négociation entre États.",
            "Définir la sécurité collective et présenter les moyens d'action de l'ONU.",
            "Analyser l'action de l'ONU sous les mandats de Kofi Annan (1997-2006), entre réformes, succès et limites.",
          ],
          course: [
            {
              heading: "Faire la paix par les traités : la paix de Westphalie (1648)",
              paragraphs: [
                "La guerre de Trente Ans (1618-1648) commence en Bohême par un conflit religieux et politique entre princes protestants et empereur catholique, puis s'étend à une grande partie de l'Europe (Danemark, Suède, France, Espagne). Elle ravage le Saint-Empire romain germanique, dont certaines régions perdent une large part de leur population.",
                "Pour y mettre fin, des négociations s'ouvrent au milieu des années 1640 dans deux villes de Westphalie : Münster, où siègent notamment les délégués catholiques et la France, et Osnabrück, où l'empereur négocie avec la Suède et les princes protestants. De très nombreuses délégations y participent pendant plusieurs années. En janvier 1648, l'Espagne reconnaît à Münster l'indépendance des Provinces-Unies ; le 24 octobre 1648, l'empereur signe les traités avec la France et avec la Suède.",
              ],
            },
            {
              heading: "Les principes de l'ordre westphalien",
              paragraphs: [
                "Les traités redessinent la carte : la France obtient la souveraineté sur Metz, Toul et Verdun et des droits en Alsace ; la Suède acquiert des territoires sur les côtes de la Baltique et de la mer du Nord ; l'indépendance des Provinces-Unies et de la Confédération suisse est reconnue. Les princes allemands obtiennent le droit de conclure des alliances, sauf contre l'empereur. Sur le plan religieux, le principe selon lequel le prince choisit la religion de son territoire, posé en 1555, est étendu aux calvinistes, avec des garanties pour les minorités.",
                "On a fait de Westphalie l'acte de naissance d'un ordre international fondé sur des États souverains et juridiquement égaux, qui ne s'ingèrent pas dans les affaires intérieures les uns des autres et cherchent l'équilibre des puissances. Les historiens nuancent aujourd'hui ce « système westphalien », en partie construit après coup : le Saint-Empire continue d'exister, et la guerre entre la France et l'Espagne se poursuit jusqu'à la paix des Pyrénées (1659). Mais Westphalie inaugure bien la pratique des grands congrès diplomatiques et l'idée d'une paix garantie par les puissances (la France et la Suède).",
              ],
              box: { label: "Définition", text: "Système westphalien : modèle de relations internationales fondé sur la souveraineté des États, leur égalité juridique, la non-ingérence dans leurs affaires intérieures et la recherche d'un équilibre des puissances, négocié dans des congrès et garanti par des traités." },
            },
            {
              heading: "Faire la paix par la sécurité collective : l'ONU",
              paragraphs: [
                "Après l'échec de la Société des Nations, l'Organisation des Nations unies est fondée par la Charte signée à San Francisco le 26 juin 1945. Elle repose sur la sécurité collective : la sécurité de chacun est garantie par tous, et une agression contre un État concerne l'ensemble de la communauté internationale. La Charte interdit le recours à la force dans les relations internationales, sauf légitime défense ou décision du Conseil de sécurité.",
                "Le Conseil de sécurité compte quinze membres, dont cinq permanents disposant d'un droit de veto : États-Unis, Russie (auparavant URSS), Chine, France, Royaume-Uni. Le chapitre VI de la Charte organise le règlement pacifique des différends ; le chapitre VII permet des mesures coercitives, des sanctions économiques jusqu'à l'usage de la force. L'ONU déploie aussi des opérations de maintien de la paix, avec des casques bleus, depuis 1948 pour les premiers observateurs et 1956 pour la première force armée (crise de Suez). Pendant la guerre froide, le veto paralyse souvent le Conseil.",
              ],
              box: { label: "Définition", text: "Sécurité collective : système dans lequel les États renoncent à se faire justice eux-mêmes et confient à une organisation commune le soin de prévenir et de réprimer les agressions, la sécurité de chacun étant garantie par tous." },
            },
            {
              heading: "L'ONU sous Kofi Annan (1997-2006) : réformer pour protéger",
              paragraphs: [
                "Le Ghanéen Kofi Annan, premier secrétaire général issu de l'Afrique subsaharienne, dirigeait auparavant le département des opérations de maintien de la paix, au moment des échecs du Rwanda (1994) et de Srebrenica (1995). Devenu secrétaire général en 1997, il fait publier en 1999 des rapports reconnaissant les fautes de l'ONU et commande le rapport Brahimi (2000), qui recommande des mandats plus clairs et des forces capables de protéger les civils.",
                "Son action connaît des succès : administration du Timor oriental jusqu'à son indépendance (2002), opérations en Sierra Leone et en République démocratique du Congo, adoption en 2000 des objectifs du millénaire pour le développement. L'ONU et son secrétaire général reçoivent ensemble le prix Nobel de la paix en 2001. En 2005, le sommet mondial adopte la responsabilité de protéger et crée la Commission de consolidation de la paix ; le Conseil des droits de l'homme est créé en 2006.",
                "Les limites sont aussi nettes : en 1999, l'OTAN intervient au Kosovo sans autorisation du Conseil de sécurité ; en 2003, les États-Unis envahissent l'Irak sans mandat, intervention que Kofi Annan qualifie ensuite d'illégale au regard de la Charte. Le scandale du programme « Pétrole contre nourriture » et l'impuissance face aux massacres du Darfour, à partir de 2003, affaiblissent l'organisation.",
              ],
              box: { label: "Définition", text: "Responsabilité de protéger (2005) : chaque État doit protéger sa population contre le génocide, les crimes de guerre, le nettoyage ethnique et les crimes contre l'humanité ; s'il ne le fait pas, la communauté internationale peut agir, en dernier recours par la force avec l'accord du Conseil de sécurité." },
            },
          ],
          keyPoints: [
            "Les traités de Westphalie (24 octobre 1648, Münster et Osnabrück) mettent fin à la guerre de Trente Ans.",
            "Ils fondent un ordre européen de paix négociée : souveraineté, équilibre, non-ingérence, congrès diplomatiques.",
            "L'ONU (Charte du 26 juin 1945) repose sur la sécurité collective et l'interdiction du recours à la force.",
            "Conseil de sécurité : 15 membres dont 5 permanents avec veto ; chapitre VI (règlement pacifique), chapitre VII (coercition).",
            "Kofi Annan (1997-2006) : rapport Brahimi (2000), Nobel (2001), responsabilité de protéger (2005), mais impuissance face à l'Irak (2003) et au Darfour.",
          ],
          example: {
            statement: "Comparez la paix construite par les traités de Westphalie et la paix recherchée par la sécurité collective de l'ONU.",
            solution: [
              "Westphalie (1648) : une paix négociée entre belligérants dans un congrès, qui règle par traité des questions territoriales et religieuses et repose sur l'équilibre des puissances.",
              "Garantie : la paix est garantie par certaines puissances (France, Suède) et non par une organisation commune.",
              "ONU (1945) : une organisation permanente et universelle qui cherche à prévenir les guerres, interdit le recours à la force et peut sanctionner un agresseur.",
              "Point commun : dans les deux cas, la paix repose sur des États souverains et sur le droit international.",
              "Différence : Westphalie conclut une guerre déjà menée ; la sécurité collective prétend empêcher les guerres futures, mais dépend de l'accord des membres permanents.",
              "Conclusion : on passe d'une paix d'équilibre entre puissances à une paix institutionnalisée, plus ambitieuse mais souvent entravée par le veto.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez : (1) sécurité collective ; (2) droit de veto ; (3) opération de maintien de la paix ; (4) responsabilité de protéger.",
              hint: "Pour chaque notion, indiquez qui agit et dans quel but.",
              solution: [
                "(1) Sécurité collective : système où la sécurité de chaque État est garantie par l'ensemble des membres d'une organisation, qui s'engagent à réagir à toute agression.",
                "(2) Droit de veto : pouvoir des cinq membres permanents du Conseil de sécurité de bloquer seuls l'adoption d'une résolution.",
                "(3) Opération de maintien de la paix : déploiement de casques bleus, avec l'accord des parties, pour surveiller un cessez-le-feu, protéger des civils et accompagner un processus de paix.",
                "(4) Responsabilité de protéger : principe adopté en 2005 selon lequel la communauté internationale peut agir, en dernier recours, si un État ne protège pas sa population contre les crimes de masse.",
              ],
            },
            {
              level: 2,
              statement: "Montrez en quoi les traités de Westphalie constituent un modèle de construction de la paix, puis nuancez ce modèle en deux arguments.",
              hint: "Distinguez ce que contiennent les traités et la lecture qu'on en a faite plus tard.",
              solution: [
                "Un modèle : la paix est négociée par un congrès réunissant la plupart des puissances européennes ; elle règle à la fois les questions territoriales et religieuses ; elle repose sur l'équilibre et sur des garants.",
                "Elle reconnaît des États souverains (Provinces-Unies, Confédération suisse) et la liberté d'alliance des princes allemands, ce qui inspire l'idée d'États égaux et indépendants.",
                "Nuance 1 : la paix n'est pas générale, la guerre franco-espagnole se poursuit jusqu'en 1659 (paix des Pyrénées).",
                "Nuance 2 : le « système westphalien » est en partie une construction ultérieure ; le Saint-Empire et la hiérarchie entre puissances demeurent, et l'Europe connaît encore de nombreuses guerres.",
                "Conclusion : Westphalie est moins une paix perpétuelle qu'une méthode, la négociation multilatérale entre États souverains, qui inspire durablement la diplomatie européenne.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : Charte des Nations unies, 26 juin 1945, extraits (présentation résumée). Article 1 : le premier but de l'ONU est de maintenir la paix et la sécurité internationales par des mesures collectives. Article 2, paragraphe 4 : les membres s'abstiennent de recourir à la menace ou à l'emploi de la force contre l'intégrité territoriale ou l'indépendance politique de tout État. Article 2, paragraphe 7 : l'ONU n'intervient pas dans les affaires relevant de la compétence nationale d'un État, sauf mesures prises au titre du chapitre VII. Article 42 : le Conseil de sécurité peut entreprendre, au moyen de forces aériennes, navales ou terrestres, toute action nécessaire au maintien de la paix. Article 51 : rien ne porte atteinte au droit de légitime défense en cas d'agression armée. Consigne : montrez quelle conception de la paix ce texte exprime, puis évaluez sa mise en œuvre à l'époque de Kofi Annan.",
              hint: "Repérez la tension entre la non-ingérence (article 2, paragraphe 7) et la possibilité d'agir par la force (article 42), puis confrontez-la aux cas du Kosovo, de l'Irak et de la responsabilité de protéger.",
              solution: [
                "Présentation : texte fondateur de l'ONU, signé à San Francisco à la fin de la Seconde Guerre mondiale par les vainqueurs et leurs alliés, pour éviter le retour d'une guerre mondiale après l'échec de la SDN.",
                "Une paix par le droit : interdiction du recours à la force (article 2, paragraphe 4), seules exceptions la légitime défense (article 51) et l'action décidée par le Conseil (article 42).",
                "Une paix respectueuse des souverainetés : le principe de non-ingérence (article 2, paragraphe 7) prolonge l'héritage westphalien.",
                "Une paix garantie collectivement : le Conseil de sécurité peut employer la force, ce que la SDN ne pouvait pas faire efficacement.",
                "Mise en œuvre sous Kofi Annan : les échecs du Rwanda et de Srebrenica montrent que la non-ingérence peut couvrir des massacres ; la responsabilité de protéger (2005) tente de dépasser cette contradiction.",
                "Limites : le Kosovo (1999) et l'Irak (2003) montrent que des États agissent sans l'autorisation du Conseil, et le veto bloque des réactions (Darfour).",
                "Conclusion : la Charte exprime une ambition de paix par le droit et la sécurité collective, mais sa mise en œuvre dépend de la volonté des grandes puissances.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa description.",
            pairs: [
              { left: "1648", right: "Traités de Westphalie, fin de la guerre de Trente Ans" },
              { left: "Münster et Osnabrück", right: "Villes de Westphalie où se négocie la paix" },
              { left: "Chapitre VII", right: "Partie de la Charte qui autorise sanctions et usage de la force" },
              { left: "Rapport Brahimi", right: "Rapport de 2000 sur la réforme des opérations de paix" },
              { left: "Responsabilité de protéger", right: "Principe adopté au sommet mondial de 2005" },
              { left: "Kofi Annan", right: "Secrétaire général de l'ONU de 1997 à 2006, prix Nobel 2001" },
            ],
          },
          quiz: [
            {
              q: "Quelle guerre les traités de Westphalie terminent-ils ?",
              options: ["La guerre de Trente Ans", "La guerre de Cent Ans", "La guerre de Sept Ans", "La guerre de Succession d'Espagne"],
              answer: 0,
              why: "Signés en 1648, ils mettent fin à la guerre de Trente Ans (1618-1648).",
            },
            {
              q: "Combien de membres permanents le Conseil de sécurité compte-t-il ?",
              options: ["Trois", "Quinze", "Cinq", "Dix"],
              answer: 2,
              why: "Cinq membres permanents (États-Unis, Russie, Chine, France, Royaume-Uni) disposent du veto, sur quinze membres au total.",
            },
            {
              q: "Que recommande le rapport Brahimi (2000) ?",
              options: ["La suppression des casques bleus", "Des mandats plus clairs et des forces capables de protéger les civils", "L'abolition du droit de veto des membres permanents du Conseil de sécurité", "Le retrait de l'ONU d'Afrique"],
              answer: 1,
              why: "Commandé par Kofi Annan après les échecs des années 1990, il vise à rendre les opérations de paix plus efficaces.",
            },
            {
              q: "Quelle intervention se déroule sans autorisation du Conseil de sécurité ?",
              options: ["L'administration du Timor oriental", "La guerre du Golfe de 1991", "La mission en Sierra Leone", "L'invasion de l'Irak en 2003"],
              answer: 3,
              why: "En 2003, les États-Unis et leurs alliés envahissent l'Irak sans mandat ; en 1991, la guerre du Golfe avait été autorisée par le Conseil.",
            },
            {
              q: "Que signifie la sécurité collective ?",
              options: ["Chaque État assure seul sa défense", "La sécurité de chacun est garantie par tous", "Les grandes puissances se partagent le monde", "Les États renoncent à toute armée"],
              answer: 1,
              why: "Les États confient à une organisation commune le soin de prévenir et de sanctionner les agressions.",
            },
          ],
          trap: "Présenter Westphalie comme une paix universelle et définitive, ou attribuer à l'ONU une armée propre : les casques bleus sont fournis par les États membres et les décisions dépendent du Conseil de sécurité.",
          method: "Opposez systématiquement deux modèles de paix (par les traités, par la sécurité collective) et donnez pour chacun un exemple, un acteur, une date et une limite : c'est la structure d'une bonne partie de dissertation.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'moyen-orient',
          title: 'Le Moyen-Orient : conflits régionaux et tentatives de paix',
          minutes: 35,
          objectives: [
            "Identifier les principaux facteurs de conflictualité au Moyen-Orient et leurs acteurs étatiques et non étatiques.",
            "Analyser les guerres du Golfe (1991 et 2003) et leurs prolongements, d'une guerre interétatique à un conflit asymétrique.",
            "Expliquer les tentatives de paix dans le conflit israélo-palestinien et les raisons de leurs échecs.",
          ],
          course: [
            {
              heading: "Un espace de conflits aux causes multiples",
              paragraphs: [
                "Le Moyen-Orient s'étend de l'Égypte à l'Iran, en incluant la péninsule Arabique, le Proche-Orient et la Turquie. L'expression a été popularisée au début du XXe siècle par des stratèges anglo-saxons, dont Alfred Mahan, ce qui rappelle que cet espace a longtemps été pensé depuis l'extérieur, en fonction des routes vers l'Inde et du pétrole.",
                "Plusieurs facteurs y entretiennent les conflits : les ressources en hydrocarbures (la région détient près de la moitié des réserves prouvées de pétrole) ; des frontières en partie héritées du partage franco-britannique après la Première Guerre mondiale (accords Sykes-Picot de 1916, mandats de la SDN) ; des divisions communautaires et religieuses (sunnites et chiites, Kurdes privés d'État) ; des passages stratégiques (canal de Suez, détroits d'Ormuz et de Bab el-Mandeb).",
                "S'y ajoutent des rivalités régionales, notamment entre l'Arabie saoudite et l'Iran depuis la révolution islamique de 1979, et l'intervention constante de puissances extérieures : États-Unis, URSS puis Russie, pays européens, et désormais la Chine et la Turquie.",
              ],
            },
            {
              heading: "Les guerres du Golfe : d'une guerre interétatique à un conflit asymétrique",
              paragraphs: [
                "Le 2 août 1990, l'Irak de Saddam Hussein envahit le Koweït. Le Conseil de sécurité condamne l'agression et autorise en novembre 1990 l'usage de la force. Une coalition d'une trentaine d'États, menée par les États-Unis et comprenant la France et plusieurs pays arabes, libère le Koweït lors de l'opération Tempête du désert (janvier-février 1991). C'est une guerre interétatique classique, conforme à la sécurité collective, dans le contexte de la fin de la guerre froide.",
                "En mars 2003, les États-Unis et le Royaume-Uni envahissent l'Irak sans mandat du Conseil de sécurité, en invoquant des armes de destruction massive qui ne seront jamais trouvées ; la France s'y oppose. Le régime tombe en avril 2003, mais l'occupation déclenche une insurrection, puis une guerre civile entre sunnites et chiites (2006-2007). La branche irakienne d'Al-Qaïda s'y développe et donne naissance à Daech.",
                "Après le retrait américain de 2011, Daech conquiert une partie du pays en 2014, ce qui provoque une nouvelle intervention internationale. La guerre de 2003 montre ainsi le passage d'une guerre interétatique rapide à un conflit asymétrique long, où des acteurs non étatiques jouent un rôle central.",
              ],
              box: { label: "Repère", text: "1980-1988 : guerre Iran-Irak. 1990 : invasion du Koweït. 1991 : Tempête du désert. 2003 : invasion de l'Irak sans mandat de l'ONU. 2011 : retrait américain. 2014 : califat de Daech. 2017 : reprise de Mossoul." },
            },
            {
              heading: "Le conflit israélo-palestinien : guerres et tentatives de paix",
              paragraphs: [
                "En 1947, l'ONU vote un plan de partage de la Palestine sous mandat britannique entre un État juif et un État arabe. L'État d'Israël est proclamé le 14 mai 1948 ; la guerre qui suit avec les États arabes voisins provoque l'exode de centaines de milliers de Palestiniens (la Nakba, la « catastrophe »). Lors de la guerre des Six Jours (juin 1967), Israël occupe la Cisjordanie, Jérusalem-Est, la bande de Gaza, le Golan et le Sinaï ; la résolution 242 de l'ONU pose alors le principe de l'échange de la paix contre les territoires occupés.",
                "Les accords de Camp David (1978), négociés sous l'égide des États-Unis, aboutissent en 1979 au traité de paix entre l'Égypte et Israël, qui restitue le Sinaï. Après la première intifada (1987) et la conférence de Madrid (1991), les accords d'Oslo, signés à Washington le 13 septembre 1993 par Yitzhak Rabin et Yasser Arafat, établissent une reconnaissance mutuelle entre Israël et l'OLP et créent une Autorité palestinienne pour une période intérimaire. Israël signe la paix avec la Jordanie en 1994.",
                "Le processus échoue pourtant : assassinat de Rabin par un extrémiste israélien en 1995, attentats du Hamas, poursuite de la colonisation, échec du sommet de Camp David en 2000 puis seconde intifada. Le Hamas prend le contrôle de Gaza en 2007. Les accords d'Abraham (2020) normalisent les relations d'Israël avec plusieurs États arabes sans régler la question palestinienne. L'attaque du Hamas du 7 octobre 2023, qui fait environ 1 200 morts en Israël, déclenche une guerre dévastatrice à Gaza, qui fait plusieurs dizaines de milliers de morts palestiniens.",
              ],
              box: { label: "Définition", text: "Processus de paix : ensemble des négociations, accords intermédiaires et mesures de confiance destinés à transformer un conflit en paix durable. Celui d'Oslo reposait sur la reconnaissance mutuelle et un calendrier par étapes, les questions difficiles (frontières, Jérusalem, réfugiés, colonies) étant renvoyées à plus tard." },
            },
            {
              heading: "Des acteurs internationaux, étatiques et non étatiques",
              paragraphs: [
                "Les États-Unis sont le principal médiateur et l'allié d'Israël ; l'ONU est présente par ses résolutions et ses missions, comme la force intérimaire au Liban, déployée depuis 1978 ; le Quartet (États-Unis, Union européenne, Russie, ONU), créé en 2002, propose en 2003 une feuille de route vers deux États. Des puissances régionales jouent aussi les médiateurs, comme l'Égypte et le Qatar.",
                "L'Iran soutient un « axe de la résistance » composé d'acteurs non étatiques : le Hezbollah au Liban (né en 1982), le Hamas, les Houthis du Yémen, qui attaquent à partir de fin 2023 des navires en mer Rouge. En Syrie, la guerre civile commencée en 2011 attire la Russie, l'Iran, la Turquie et une coalition internationale ; le régime de Bachar al-Assad tombe en décembre 2024. En juin 2025, Israël puis les États-Unis frappent des sites nucléaires iraniens. Ces conflits imbriqués montrent qu'une paix régionale suppose d'associer de nombreux acteurs aux intérêts opposés.",
              ],
            },
          ],
          keyPoints: [
            "Facteurs de conflits : pétrole, frontières héritées des mandats, divisions communautaires, détroits, rivalité Iran-Arabie saoudite, puissances extérieures.",
            "1991 : guerre interétatique autorisée par l'ONU pour libérer le Koweït. 2003 : invasion de l'Irak sans mandat, puis insurrection et Daech.",
            "Conflit israélo-palestinien : 1948, 1967 (résolution 242), Camp David (1978), Oslo (1993), échec de 2000, 7 octobre 2023.",
            "Acteurs non étatiques : OLP, Hamas, Hezbollah, Daech, Houthis ; médiateurs : États-Unis, ONU, Quartet, Égypte, Qatar.",
            "La paix reste fragile car les questions centrales (frontières, Jérusalem, réfugiés, sécurité) n'ont pas été réglées.",
          ],
          example: {
            statement: "En quoi la guerre de 2003 en Irak est-elle différente de celle de 1991 ?",
            solution: [
              "Cause : en 1991, il s'agit de répondre à l'invasion du Koweït par l'Irak ; en 2003, de renverser Saddam Hussein au nom de prétendues armes de destruction massive.",
              "Légitimité : en 1991, le Conseil de sécurité autorise l'usage de la force ; en 2003, l'intervention se fait sans mandat et divise les alliés (opposition de la France).",
              "Coalition : large coalition comprenant des pays arabes en 1991 ; coalition restreinte autour des États-Unis et du Royaume-Uni en 2003.",
              "Nature du conflit : guerre interétatique courte en 1991 ; en 2003, la victoire rapide est suivie d'une insurrection, d'une guerre civile et de l'essor de groupes jihadistes.",
              "Conséquences : en 1991, Saddam Hussein reste au pouvoir ; en 2003, l'effondrement de l'État irakien déstabilise durablement la région.",
              "Réponse : 1991 est une guerre de sécurité collective ; 2003 est une guerre unilatérale qui se transforme en conflit asymétrique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement : 1947, 1967, 1979, 1993, 2007, 2020. Événements : accords d'Oslo ; plan de partage de l'ONU ; prise de Gaza par le Hamas ; guerre des Six Jours ; accords d'Abraham ; traité de paix israélo-égyptien.",
              hint: "Rangez d'abord les guerres, puis les accords de paix.",
              solution: [
                "1947 : plan de partage de la Palestine voté par l'ONU.",
                "1967 : guerre des Six Jours.",
                "1979 : traité de paix israélo-égyptien, issu des accords de Camp David (1978).",
                "1993 : accords d'Oslo, signés à Washington.",
                "2007 : prise du contrôle de Gaza par le Hamas.",
                "2020 : accords d'Abraham entre Israël et plusieurs États arabes.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez ce que prévoyaient les accords d'Oslo (1993), puis présentez trois raisons de l'échec du processus de paix.",
              hint: "Distinguez ce que les accords réglaient immédiatement et ce qu'ils renvoyaient à des négociations ultérieures.",
              solution: [
                "Contenu : reconnaissance mutuelle d'Israël et de l'OLP ; création d'une Autorité palestinienne autonome dans une partie des territoires ; période intérimaire de cinq ans pendant laquelle devaient être négociées les questions finales.",
                "Raison 1 : les questions les plus difficiles (frontières, Jérusalem, réfugiés, colonies) étaient reportées, ce qui laissait place à la méfiance.",
                "Raison 2 : les opposants des deux camps ont saboté le processus (attentats du Hamas, assassinat de Rabin en 1995 par un extrémiste israélien).",
                "Raison 3 : la poursuite de la colonisation et la violence (seconde intifada à partir de 2000) ont détruit la confiance ; le sommet de Camp David de 2000 échoue.",
                "Conclusion : Oslo a créé un cadre et une reconnaissance réciproque, mais sans règlement des questions centrales ni garanties suffisantes.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Pourquoi la paix est-elle si difficile à construire au Moyen-Orient ? ». Proposez une problématique et un plan détaillé en trois parties, avec des exemples datés.",
              hint: "Croisez les causes (ressources, frontières, communautés), les acteurs (États, puissances extérieures, acteurs non étatiques) et les limites des tentatives de paix.",
              solution: [
                "Problématique : quels facteurs expliquent la persistance des conflits au Moyen-Orient malgré les nombreuses tentatives de paix menées par des acteurs régionaux et internationaux ?",
                "I. Des conflits aux causes profondes : pétrole et détroits stratégiques ; frontières héritées des mandats (1920) ; question palestinienne depuis 1948 ; divisions communautaires et rivalité Iran-Arabie saoudite depuis 1979.",
                "II. Des tentatives de paix réelles mais partielles : Camp David et paix israélo-égyptienne (1978-1979) ; Oslo (1993) ; paix israélo-jordanienne (1994) ; libération du Koweït sous mandat de l'ONU (1991) ; accords d'Abraham (2020).",
                "III. Des obstacles renouvelés : interventions unilatérales (Irak 2003) ; acteurs non étatiques (Hamas, Hezbollah, Daech) qui refusent les compromis ; rivalités des puissances (Syrie après 2011) ; attaque du 7 octobre 2023 et guerre de Gaza.",
                "Conclusion : la paix suppose de traiter des questions territoriales et identitaires anciennes et d'associer des acteurs multiples, ce que les accords partiels n'ont pas réussi à faire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes des conflits et des tentatives de paix au Moyen-Orient dans l'ordre chronologique.",
            items: [
              "Plan de partage de la Palestine voté par l'ONU",
              "Guerre des Six Jours",
              "Accords de Camp David",
              "Opération Tempête du désert",
              "Accords d'Oslo",
              "Invasion de l'Irak par les États-Unis",
              "Accords d'Abraham",
            ],
          },
          quiz: [
            {
              q: "Que pose la résolution 242 de l'ONU, adoptée après la guerre de 1967 ?",
              options: ["La création immédiate d'un État palestinien dans les frontières de 1947", "Le partage de Jérusalem", "L'interdiction des armes nucléaires", "Le principe de la paix contre les territoires occupés"],
              answer: 3,
              why: "Elle demande le retrait de territoires occupés en échange de la reconnaissance et de la sécurité des États de la région.",
            },
            {
              q: "Quel événement déclenche la guerre du Golfe de 1991 ?",
              options: ["L'invasion du Koweït par l'Irak", "La révolution iranienne", "Les attentats du 11 septembre", "La chute de Saddam Hussein"],
              answer: 0,
              why: "L'Irak envahit le Koweït le 2 août 1990 ; le Conseil de sécurité autorise ensuite l'usage de la force.",
            },
            {
              q: "Qui signe les accords d'Oslo à Washington en 1993 ?",
              options: ["Anouar el-Sadate et Menahem Begin", "Benyamin Netanyahou et Mahmoud Abbas", "Yitzhak Rabin et Yasser Arafat", "Hosni Moubarak et Ehud Barak"],
              answer: 2,
              why: "Rabin pour Israël et Arafat pour l'OLP signent la déclaration de principes en présence de Bill Clinton ; Sadate et Begin sont les signataires de Camp David.",
            },
            {
              q: "Pourquoi la guerre d'Irak de 2003 est-elle contestée en droit international ?",
              options: ["Elle a été menée par l'ONU", "Elle a été lancée sans mandat du Conseil de sécurité", "Elle visait le Koweït", "L'Irak avait attaqué directement le territoire des États-Unis"],
              answer: 1,
              why: "Sans autorisation du Conseil et hors légitime défense, l'intervention est jugée contraire à la Charte, notamment par Kofi Annan.",
            },
            {
              q: "Quel acteur non étatique, soutenu par l'Iran, est né au Liban en 1982 ?",
              options: ["Le Hamas", "Les Houthis", "Daech", "Le Hezbollah"],
              answer: 3,
              why: "Le Hezbollah apparaît au Liban pendant l'invasion israélienne de 1982 ; le Hamas naît en 1987 dans les territoires palestiniens.",
            },
          ],
          trap: "Confondre les deux guerres du Golfe : celle de 1991 est autorisée par l'ONU pour libérer le Koweït, celle de 2003 est lancée sans mandat pour renverser Saddam Hussein.",
          method: "Construisez une frise à trois lignes (guerres du Golfe, conflit israélo-palestinien, acteurs non étatiques) : elle permet de croiser les dates et d'éviter les confusions dans une copie.",
        },
      ],
    },

    /* ==================================================================== */
    /* THÈME 3 · HISTOIRE ET MÉMOIRES                                         */
    /* ==================================================================== */
    {
      id: 'histoire-et-memoires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'histoire-memoire-distinction',
          title: 'Histoire et mémoire : distinguer deux rapports au passé',
          minutes: 30,
          objectives: [
            "Distinguer l'histoire, connaissance critique du passé, de la mémoire, rapport vécu et sélectif au passé.",
            "Identifier les acteurs et les lieux de la mémoire : témoins, associations, États.",
            "Expliquer comment les mémoires évoluent, à partir de l'exemple de la mémoire de Vichy.",
            "Analyser les lois mémorielles et le débat qu'elles suscitent entre historiens et pouvoirs publics.",
          ],
          course: [
            {
              heading: "Deux rapports au passé",
              paragraphs: [
                "La mémoire est la présence du passé dans le présent d'un individu ou d'un groupe. Le sociologue Maurice Halbwachs a montré dès 1925 (Les Cadres sociaux de la mémoire) que la mémoire individuelle s'inscrit dans des cadres collectifs : famille, religion, nation, groupe social. La mémoire collective est affective, sélective (elle retient et oublie) et liée à l'identité du groupe qui la porte. Comme il existe plusieurs groupes, il existe plusieurs mémoires, parfois concurrentes.",
                "L'histoire est une connaissance du passé construite par les historiens selon une méthode : recherche et critique des sources, croisement des témoignages, mise en contexte, explication des causes. Elle vise la vérité et l'universalité, elle est publique et soumise à la discussion entre chercheurs. Elle peut être révisée lorsque de nouvelles sources ou de nouvelles questions apparaissent, ce qui n'a rien à voir avec le négationnisme, qui nie des faits établis.",
                "L'historien Pierre Nora a résumé cette opposition : la mémoire est vivante, portée par des groupes, toujours en évolution et ouverte à l'oubli ; l'histoire est une reconstruction, toujours problématique et incomplète, de ce qui n'est plus. Les deux ne s'excluent pas : la mémoire devient un objet d'étude pour l'historien, et l'histoire nourrit les mémoires.",
              ],
              box: { label: "Définition", text: "Mémoire : souvenir qu'un individu ou un groupe garde du passé, chargé d'affects et lié à une identité. Histoire : connaissance scientifique du passé, construite par l'analyse critique des sources. Négationnisme : négation de faits historiques établis, en particulier du génocide des Juifs." },
            },
            {
              heading: "Les acteurs et les lieux de la mémoire",
              paragraphs: [
                "De nombreux acteurs portent les mémoires : les témoins, les associations (d'anciens combattants, de déportés, de victimes), les familles, mais aussi l'État, qui organise des commémorations, fixe des journées nationales, élève des monuments, crée des musées et décide des programmes scolaires. On parle de politique mémorielle pour désigner l'action des pouvoirs publics sur la mémoire collective.",
                "Pierre Nora a dirigé Les Lieux de mémoire (1984-1992), une œuvre collective qui étudie les objets où se cristallise la mémoire nationale française : lieux matériels (le Panthéon, les monuments aux morts), symboliques (le 14 Juillet, La Marseillaise) ou idéels. À partir des années 1990, l'expression « devoir de mémoire » se répand. Le philosophe Paul Ricœur (La Mémoire, l'histoire, l'oubli, 2000) met en garde contre les « abus de mémoire », qu'il s'agisse de trop de mémoire ou de trop d'oubli, et plaide pour une « juste mémoire » éclairée par l'histoire.",
              ],
            },
            {
              heading: "Les mémoires évoluent : l'exemple de Vichy",
              paragraphs: [
                "L'historien Henry Rousso (Le Syndrome de Vichy, 1987) a montré comment la mémoire de l'Occupation a évolué en France. À la Libération s'impose un mythe résistancialiste : la France aurait résisté dans son ensemble, et le régime de Vichy serait une parenthèse. Ce récit, porté par les gaullistes et les communistes, permet de reconstruire l'unité nationale mais occulte la collaboration et la persécution des Juifs.",
                "Ce mythe se fissure à partir de la fin des années 1960 : le film de Marcel Ophuls Le Chagrin et la Pitié (1969), longtemps non diffusé à la télévision, montre une France plus attentiste et collaboratrice ; l'historien américain Robert Paxton publie en 1972 La France de Vichy, traduit l'année suivante, qui démontre, à partir d'archives allemandes, que la collaboration a été voulue par Vichy. La mémoire juive s'affirme et les procès des années 1980 et 1990 relancent le débat.",
                "Le 16 juillet 1995, lors de la commémoration de la rafle du Vél d'Hiv, le président Jacques Chirac reconnaît la responsabilité de l'État français dans la déportation des Juifs. Cet exemple montre que le travail des historiens, les œuvres et les témoins transforment la mémoire officielle.",
              ],
            },
            {
              heading: "Les lois mémorielles : l'État peut-il dire l'histoire ?",
              paragraphs: [
                "En France, plusieurs lois portent sur la mémoire : la loi Gayssot (13 juillet 1990) réprime la contestation des crimes contre l'humanité jugés à Nuremberg ; la loi du 29 janvier 2001 reconnaît publiquement le génocide arménien de 1915 ; la loi Taubira (21 mai 2001) reconnaît la traite et l'esclavage comme crimes contre l'humanité ; la loi du 23 février 2005 demandait que les programmes reconnaissent le « rôle positif » de la présence française outre-mer, disposition abrogée en 2006 après une vive polémique.",
                "En décembre 2005, des historiens lancent l'appel « Liberté pour l'histoire », qui demande l'abrogation des lois mémorielles : selon eux, il n'appartient pas au Parlement de fixer la vérité historique. D'autres historiens défendent la loi Gayssot, qui vise le négationnisme. En 2008, une mission parlementaire recommande de ne plus adopter de lois de ce type, et en 2012 le Conseil constitutionnel censure une loi qui réprimait la contestation des génocides reconnus par la loi.",
              ],
              box: { label: "À retenir", text: "Les lois mémorielles expriment la reconnaissance par la nation de souffrances passées, mais elles posent la question de la liberté de la recherche : l'histoire s'écrit par la méthode critique des historiens, non par la loi." },
            },
          ],
          keyPoints: [
            "Mémoire : rapport affectif, sélectif et identitaire au passé, porté par des groupes ; elle est plurielle.",
            "Histoire : connaissance critique du passé fondée sur les sources, qui vise la vérité et reste discutable entre spécialistes.",
            "Halbwachs (1925) : mémoire collective ; Nora : Les Lieux de mémoire (1984-1992) ; Ricœur (2000) : « juste mémoire ».",
            "Vichy (Rousso, 1987) : mythe résistancialiste, puis Ophuls (1969), Paxton (1972), discours de Chirac (16 juillet 1995).",
            "Lois mémorielles : Gayssot (1990), génocide arménien et Taubira (2001), loi de 2005 ; appel « Liberté pour l'histoire ».",
          ],
          example: {
            statement: "Montrez à partir d'un exemple que la mémoire et l'histoire sont deux rapports différents au passé, mais qu'ils s'influencent mutuellement.",
            solution: [
              "Définir : la mémoire est vécue, affective, sélective et portée par des groupes ; l'histoire est une connaissance critique fondée sur les sources.",
              "Exemple choisi : la mémoire de Vichy en France.",
              "Mémoire : à la Libération, le mythe résistancialiste présente une France unanimement résistante, ce qui sert l'unité nationale mais oublie la collaboration.",
              "Histoire : Robert Paxton (1972), grâce aux archives allemandes, démontre que Vichy a recherché la collaboration ; les historiens étudient aussi la persécution des Juifs.",
              "Influence réciproque : ce travail historique, avec les œuvres et les témoignages, transforme la mémoire officielle jusqu'au discours de Jacques Chirac du 16 juillet 1995 ; en retour, Henry Rousso fait de la mémoire elle-même un objet d'histoire.",
              "Conclusion : distinctes par leur nature, histoire et mémoire dialoguent, l'histoire pouvant corriger la mémoire et la mémoire inspirer de nouvelles questions aux historiens.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chacune des démarches suivantes relève plutôt de l'histoire ou de la mémoire : (a) un ancien combattant raconte sa guerre à des lycéens ; (b) une historienne compare des archives militaires et des journaux intimes ; (c) une cérémonie au monument aux morts le 11 novembre ; (d) un colloque universitaire discute les causes d'une guerre ; (e) une association demande la reconnaissance des souffrances d'un groupe.",
              hint: "Cherchez s'il y a une méthode critique et un souci de vérité universelle, ou un lien affectif et identitaire au passé.",
              solution: [
                "(a) Mémoire : un témoignage personnel, précieux mais subjectif.",
                "(b) Histoire : croisement critique de sources de natures différentes.",
                "(c) Mémoire : une commémoration officielle, qui entretient un souvenir collectif.",
                "(d) Histoire : un débat scientifique entre spécialistes.",
                "(e) Mémoire : un groupe porte sa mémoire et demande une reconnaissance publique.",
                "Remarque : le témoignage (a) peut devenir une source pour l'historien, à condition d'être critiqué.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi l'article 4 de la loi du 23 février 2005 a suscité une polémique et ce que révèle ce débat sur les rapports entre l'histoire, la mémoire et le pouvoir politique.",
              hint: "Pensez aux enseignants et historiens qui refusent qu'une loi dicte le contenu de l'histoire, et aux mémoires de la colonisation.",
              solution: [
                "Contenu : la loi demandait que les programmes scolaires reconnaissent le « rôle positif » de la présence française outre-mer, notamment en Afrique du Nord.",
                "Polémique : des historiens et des enseignants dénoncent une histoire officielle imposée par la loi ; des associations et des États anciennement colonisés y voient une négation des violences coloniales.",
                "Résultat : la disposition est abrogée en 2006, et le débat débouche sur l'appel « Liberté pour l'histoire » (décembre 2005).",
                "Ce que cela révèle : le pouvoir politique peut être tenté d'utiliser l'histoire au service de certaines mémoires ; les historiens défendent l'autonomie de la recherche.",
                "Conclusion : l'État peut commémorer et reconnaître, mais l'écriture de l'histoire relève de la méthode critique, non du vote d'une loi.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Histoire et mémoire : des relations conflictuelles ? ». Rédigez l'introduction et un plan détaillé en trois parties.",
              hint: "Évitez de répondre seulement oui : montrez aussi les complémentarités, et appuyez chaque partie sur des exemples précis (Vichy, lois mémorielles, témoins).",
              solution: [
                "Accroche : en 2005, des historiens lancent l'appel « Liberté pour l'histoire » contre les lois mémorielles, signe d'une tension entre écriture de l'histoire et revendications de mémoire.",
                "Définitions et problématique : la mémoire est un rapport affectif et identitaire au passé, l'histoire une connaissance critique ; dans quelle mesure ces deux rapports au passé s'opposent-ils, et comment peuvent-ils se compléter ?",
                "I. Deux rapports au passé distincts : sélectivité et pluralité des mémoires (Halbwachs) ; méthode critique de l'histoire ; opposition théorisée par Nora.",
                "II. Des relations souvent conflictuelles : l'histoire déconstruit les mythes mémoriels (Paxton et le mythe résistancialiste) ; concurrence des mémoires ; lois mémorielles et débat de 2005 sur la liberté de la recherche.",
                "III. Des relations complémentaires : les témoins deviennent des sources ; la mémoire devient objet d'histoire (Rousso, 1987) ; l'histoire permet une « juste mémoire » (Ricœur) et des reconnaissances officielles (Chirac, 1995).",
                "Conclusion : les conflits sont réels lorsque la mémoire veut imposer sa vérité, mais le dialogue entre les deux est nécessaire pour une mémoire collective apaisée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Histoire et mémoire.",
            statements: [
              { text: "La mémoire collective est toujours unique au sein d'une nation.", true: false, why: "Il existe plusieurs mémoires, portées par des groupes différents, parfois concurrentes." },
              { text: "Réviser une interprétation historique grâce à de nouvelles sources est une démarche scientifique normale.", true: true, why: "La révision fait partie de la méthode historique ; elle ne doit pas être confondue avec le négationnisme." },
              { text: "Maurice Halbwachs a développé la notion de mémoire collective.", true: true, why: "Dans Les Cadres sociaux de la mémoire (1925), il montre le rôle des groupes dans le souvenir." },
              { text: "Le mythe résistancialiste présente une France majoritairement collaboratrice.", true: false, why: "Il présente au contraire une France unanimement résistante, en minimisant la collaboration." },
              { text: "Jacques Chirac reconnaît en 1995 la responsabilité de l'État français dans la déportation des Juifs.", true: true, why: "Il le fait le 16 juillet 1995, lors de la commémoration de la rafle du Vél d'Hiv." },
              { text: "L'appel « Liberté pour l'histoire » réclame davantage de lois mémorielles.", true: false, why: "Il demande au contraire leur abrogation, au nom de la liberté de la recherche." },
              { text: "Henry Rousso fait de la mémoire de Vichy un objet d'histoire.", true: true, why: "Le Syndrome de Vichy (1987) étudie les phases de cette mémoire." },
            ],
          },
          quiz: [
            {
              q: "Quel auteur a dirigé Les Lieux de mémoire ?",
              options: ["Henry Rousso", "Pierre Nora", "Paul Ricœur", "Robert Paxton"],
              answer: 1,
              why: "Pierre Nora dirige cette œuvre collective publiée de 1984 à 1992.",
            },
            {
              q: "Que démontre Robert Paxton dans La France de Vichy (1972) ?",
              options: ["Que la France a été unanimement résistante", "Que Vichy n'a eu aucune autonomie face aux exigences de l'occupant", "Que la Résistance était majoritaire dès 1940", "Que la collaboration a été recherchée par le régime de Vichy"],
              answer: 3,
              why: "À partir d'archives allemandes, Paxton montre que Vichy a voulu la collaboration, contre l'idée d'un régime contraint.",
            },
            {
              q: "Que reconnaît la loi Taubira du 21 mai 2001 ?",
              options: ["Le génocide arménien", "Le rôle positif de la présence française outre-mer et en Afrique du Nord", "La traite et l'esclavage comme crimes contre l'humanité", "La guerre d'Algérie"],
              answer: 2,
              why: "La loi Taubira reconnaît la traite négrière et l'esclavage comme crimes contre l'humanité.",
            },
            {
              q: "Qu'est-ce qui caractérise d'abord l'histoire par rapport à la mémoire ?",
              options: ["Une méthode critique fondée sur les sources", "L'émotion des témoins", "La commémoration", "L'appartenance à un groupe"],
              answer: 0,
              why: "L'historien confronte et critique les sources pour établir une connaissance vérifiable.",
            },
            {
              q: "Quelle loi française de 1990 réprime la contestation des crimes contre l'humanité ?",
              options: ["La loi Taubira", "La loi du 23 février 2005", "La loi Gayssot", "La loi de 1999 sur la guerre d'Algérie"],
              answer: 2,
              why: "La loi Gayssot du 13 juillet 1990 vise le négationnisme.",
            },
          ],
          trap: "Opposer de manière caricaturale une histoire « vraie » à une mémoire « fausse » : la mémoire n'est pas un mensonge, elle est sélective et identitaire, et l'histoire elle-même évolue avec les questions du présent.",
          method: "Mémorisez un trio d'auteurs (Halbwachs, Nora, Ricœur) et un exemple développé (Vichy) : ils suffisent à construire l'introduction et la première partie de la plupart des sujets du thème 3.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'memoires-des-conflits',
          title: 'Histoire et mémoires des conflits',
          minutes: 35,
          objectives: [
            "Analyser un débat historique et ses implications politiques : les causes de la Première Guerre mondiale.",
            "Identifier les différentes mémoires de la guerre d'Algérie et expliquer leurs conflits.",
            "Montrer comment le travail des historiens et les reconnaissances officielles font évoluer les mémoires d'un conflit.",
          ],
          course: [
            {
              heading: "Les causes de la Première Guerre mondiale : un débat d'historiens",
              paragraphs: [
                "Le 28 juin 1914, l'archiduc François-Ferdinand, héritier de l'Autriche-Hongrie, est assassiné à Sarajevo par un nationaliste serbe de Bosnie. En un mois, la crise de juillet transforme cet attentat en guerre européenne : l'Autriche-Hongrie, assurée du soutien allemand, déclare la guerre à la Serbie le 28 juillet ; la Russie mobilise ; l'Allemagne déclare la guerre à la Russie le 1er août puis à la France le 3 août ; le Royaume-Uni entre en guerre le 4 août après la violation de la neutralité belge.",
                "Dès 1914, chaque gouvernement publie des recueils de documents diplomatiques pour prouver son innocence. En 1919, l'article 231 du traité de Versailles affirme la responsabilité de l'Allemagne et de ses alliés, ce qui justifie les réparations. En Allemagne, ce « diktat » est rejeté et un vaste effort officiel cherche à réfuter la responsabilité allemande. Dans l'entre-deux-guerres, beaucoup d'historiens concluent à une responsabilité partagée : l'histoire est alors un enjeu politique direct.",
                "En 1961, l'historien allemand Fritz Fischer (Les Buts de guerre de l'Allemagne impériale) soutient, à partir des archives, que les dirigeants allemands portaient une responsabilité majeure et poursuivaient des buts d'hégémonie. Sa thèse provoque une violente controverse en Allemagne de l'Ouest. En 2012, Christopher Clark (Les Somnambules) insiste au contraire sur l'enchaînement de décisions prises par tous les gouvernements, aveugles aux conséquences, ce qui relance le débat.",
              ],
              box: { label: "À retenir", text: "Le débat sur les causes de 1914 montre qu'une question historique peut avoir des implications politiques fortes : responsabilité et réparations après 1919, identité nationale allemande après 1945, relations franco-allemandes (manuel d'histoire commun publié en 2006)." },
            },
            {
              heading: "La guerre d'Algérie, une guerre longtemps sans nom",
              paragraphs: [
                "La guerre d'Algérie commence le 1er novembre 1954 par une série d'attentats du Front de libération nationale (FLN), la « Toussaint rouge ». Elle oppose l'armée française aux nationalistes algériens et déchire aussi les sociétés française et algérienne. Les accords d'Évian (18 mars 1962) conduisent au cessez-le-feu du 19 mars, et l'Algérie devient indépendante le 5 juillet 1962.",
                "Pendant le conflit, l'État parle d'« événements » ou d'« opérations de maintien de l'ordre » : l'Algérie étant juridiquement composée de départements français, il refuse d'y reconnaître une guerre. Il faut attendre une loi du 18 octobre 1999 pour que l'expression « guerre d'Algérie » soit officiellement adoptée. Des lois d'amnistie, à partir de 1962, empêchent par ailleurs de juger les crimes commis pendant la guerre. L'historien Benjamin Stora a décrit cette situation comme un mélange de refoulement et d'oubli (La Gangrène et l'oubli, 1991).",
              ],
            },
            {
              heading: "Des mémoires plurielles et concurrentes",
              paragraphs: [
                "Plusieurs groupes portent des mémoires différentes. Les appelés du contingent, plus d'un million de jeunes Français envoyés en Algérie, se sont souvent tus. Les pieds-noirs, Européens d'Algérie rapatriés en masse en 1962, gardent la mémoire d'un exil douloureux et d'une terre perdue. Les harkis, Algériens engagés aux côtés de l'armée française, ont été massacrés en grand nombre en Algérie après l'indépendance ; ceux qui ont pu gagner la France y ont souvent été relégués dans des camps.",
                "En Algérie, le pouvoir issu du FLN construit une mémoire officielle héroïque de la lutte de libération, qui sert sa légitimité et laisse peu de place aux divisions internes. Les immigrés algériens en France, et leurs descendants, portent notamment la mémoire de la répression de la manifestation du 17 octobre 1961 à Paris, où de nombreux Algériens furent tués par la police.",
                "Ces mémoires se concurrencent jusque dans le calendrier : certains commémorent le cessez-le-feu du 19 mars (journée nationale depuis une loi de 2012), d'autres refusent cette date, après laquelle des violences ont continué, et lui préfèrent le 5 décembre, journée d'hommage fixée en 2003. Les harkis ont leur journée d'hommage le 25 septembre.",
              ],
              box: { label: "Définition", text: "Concurrence des mémoires : situation dans laquelle plusieurs groupes porteurs de mémoires différentes d'un même événement cherchent chacun la reconnaissance de leurs souffrances, parfois au détriment de celle des autres." },
            },
            {
              heading: "Le temps de l'histoire et des reconnaissances",
              paragraphs: [
                "À partir des années 1990 et 2000, la parole se libère et la recherche progresse. En 2000, le témoignage de l'ancienne militante du FLN Louisette Ighilahriz, publié dans Le Monde, relance le débat sur la torture ; l'historienne Raphaëlle Branche publie en 2001 une étude de référence sur la torture pratiquée par l'armée. Les historiens travaillent à partir d'archives de plus en plus accessibles et de témoignages de tous les groupes.",
                "L'État multiplie les gestes de reconnaissance : en 2012, le président François Hollande reconnaît la « sanglante répression » du 17 octobre 1961 ; en 2018, Emmanuel Macron reconnaît que le mathématicien Maurice Audin est mort sous la torture du fait d'un système institué par la France ; en 2021, le rapport demandé à Benjamin Stora propose des gestes pour réconcilier les mémoires ; une loi de 2022 reconnaît les torts causés aux harkis et prévoit une réparation. Les relations mémorielles entre la France et l'Algérie restent toutefois tendues.",
              ],
            },
          ],
          keyPoints: [
            "Causes de 1914 : article 231 du traité de Versailles (1919), thèse de Fischer (1961), Les Somnambules de Clark (2012).",
            "Guerre d'Algérie : 1er novembre 1954 au 19 mars 1962, indépendance le 5 juillet 1962 ; nommée officiellement « guerre » en 1999.",
            "Mémoires plurielles : appelés, pieds-noirs, harkis, mémoire officielle algérienne, immigrés algériens.",
            "Concurrence des mémoires jusque dans les dates : 19 mars, 5 décembre, 25 septembre.",
            "Reconnaissances : 17 octobre 1961 (2012), Maurice Audin (2018), rapport Stora (2021), loi sur les harkis (2022).",
          ],
          example: {
            statement: "Pourquoi peut-on parler de mémoires « concurrentes » de la guerre d'Algérie ?",
            solution: [
              "Définir : des mémoires sont concurrentes quand plusieurs groupes cherchent la reconnaissance de leur propre souffrance pour un même événement.",
              "Pluralité des groupes : appelés, pieds-noirs, harkis, anciens militants du FLN, immigrés algériens portent chacun un récit différent.",
              "Des souffrances différentes : exil des pieds-noirs, massacres et relégation des harkis, torture et répression subies par les Algériens, traumatisme des appelés.",
              "Des conflits visibles : désaccord sur la date de commémoration (19 mars ou 5 décembre), revendications de reconnaissance successives.",
              "Rôle de l'État : longtemps silencieux (« guerre sans nom » jusqu'en 1999), il reconnaît progressivement chaque souffrance, au risque d'alimenter la compétition.",
              "Réponse : les mémoires sont concurrentes parce que chaque groupe a vécu une guerre différente et réclame une place dans le récit national.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement : 1er novembre 1954 ; 17 octobre 1961 ; 19 mars 1962 ; 5 juillet 1962 ; 18 octobre 1999 ; 2018. Événements : reconnaissance officielle de l'expression « guerre d'Algérie » ; indépendance de l'Algérie ; répression d'une manifestation d'Algériens à Paris ; « Toussaint rouge » ; reconnaissance de la mort sous la torture de Maurice Audin ; cessez-le-feu.",
              hint: "Distinguez les dates de la guerre elle-même (1954-1962) et celles de la mémoire (après 1962).",
              solution: [
                "1er novembre 1954 : « Toussaint rouge », début de la guerre.",
                "17 octobre 1961 : répression d'une manifestation d'Algériens à Paris.",
                "19 mars 1962 : cessez-le-feu, au lendemain des accords d'Évian.",
                "5 juillet 1962 : indépendance de l'Algérie.",
                "18 octobre 1999 : loi qui adopte officiellement l'expression « guerre d'Algérie ».",
                "2018 : reconnaissance par Emmanuel Macron de la mort sous la torture de Maurice Audin.",
              ],
            },
            {
              level: 2,
              statement: "Comparez les thèses de Fritz Fischer (1961) et de Christopher Clark (2012) sur les causes de la Première Guerre mondiale, puis expliquez pourquoi ce débat a eu des implications politiques.",
              hint: "Pour les implications, pensez aux réparations, à l'identité allemande après le nazisme et aux relations franco-allemandes.",
              solution: [
                "Fischer : à partir des archives allemandes, il soutient que les dirigeants allemands portent une responsabilité majeure et poursuivaient des buts d'hégémonie en Europe.",
                "Clark : il insiste sur la responsabilité partagée de tous les gouvernements, qui ont pris des décisions en chaîne sans mesurer leurs conséquences, comme des « somnambules ».",
                "Implication après 1919 : l'article 231 justifie les réparations ; contester la responsabilité allemande devient un enjeu national en Allemagne.",
                "Implication après 1945 : la thèse de Fischer suggère une continuité des ambitions allemandes de 1914 à 1939, ce qui heurte l'identité de l'Allemagne de l'Ouest et explique la violence de la controverse.",
                "Implication actuelle : le débat sur Clark touche la mémoire européenne et le rapport des sociétés à leur passé ; il montre que l'histoire reste discutée sans être dictée par le pouvoir.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : déclaration du président Emmanuel Macron sur la mort de Maurice Audin, 13 septembre 2018 (présentation résumée). Le président reconnaît que Maurice Audin, mathématicien et militant communiste favorable à l'indépendance, arrêté à Alger en juin 1957 par des militaires, est mort sous la torture du fait d'un système légalement institué, fondé sur les pouvoirs spéciaux votés en 1956. Il annonce l'ouverture des archives concernant les disparus de la guerre d'Algérie et appelle ceux qui ont des informations à témoigner. Consigne : montrez ce que ce document révèle des rapports entre histoire, mémoire et pouvoir politique à propos de la guerre d'Algérie.",
              hint: "Situez le document dans la longue durée du silence (amnisties, « guerre sans nom ») et repérez ce qui relève de l'histoire (archives, faits) et de la mémoire (reconnaissance).",
              solution: [
                "Présentation : déclaration officielle d'un chef d'État, plus de soixante ans après les faits, à destination de la famille Audin, des historiens et de l'opinion française et algérienne.",
                "Contexte : longtemps, l'État a nié la torture et la disparition d'Audin ; les lois d'amnistie ont empêché les procès ; la guerre n'a été officiellement nommée qu'en 1999.",
                "Ce qui relève de l'histoire : la déclaration s'appuie sur les travaux d'historiens et sur les témoignages accumulés ; l'ouverture des archives doit permettre de nouvelles recherches.",
                "Ce qui relève de la mémoire : la reconnaissance répond à la demande d'une famille et de militants, et vise à apaiser les mémoires de la guerre.",
                "Portée politique : en parlant d'un système, le président désigne la responsabilité de l'État et non d'individus isolés ; le geste s'inscrit dans une politique mémorielle prolongée par le rapport Stora (2021).",
                "Limites : une reconnaissance officielle ne remplace pas le travail des historiens, et elle suscite des critiques de groupes porteurs d'autres mémoires.",
                "Conclusion : le document montre comment le pouvoir politique, éclairé par l'histoire, peut reconnaître un passé longtemps occulté et contribuer à transformer les mémoires.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque nom à son rôle dans l'histoire ou la mémoire des conflits.",
            pairs: [
              { left: "Article 231", right: "Clause du traité de Versailles sur la responsabilité allemande" },
              { left: "Fritz Fischer", right: "Historien allemand des buts de guerre de l'Allemagne impériale (1961)" },
              { left: "Christopher Clark", right: "Auteur des Somnambules (2012), responsabilité partagée" },
              { left: "Benjamin Stora", right: "Historien de la guerre d'Algérie, auteur d'un rapport en 2021" },
              { left: "Harkis", right: "Algériens engagés aux côtés de l'armée française" },
              { left: "Maurice Audin", right: "Mathématicien mort sous la torture en 1957" },
            ],
          },
          quiz: [
            {
              q: "Que contient l'article 231 du traité de Versailles ?",
              options: ["La création de la SDN", "Le retour de l'Alsace-Moselle à la France et la démilitarisation de la Rhénanie", "L'affirmation de la responsabilité de l'Allemagne et de ses alliés", "La limitation de l'armée allemande"],
              answer: 2,
              why: "Cet article fonde juridiquement les réparations en affirmant la responsabilité allemande.",
            },
            {
              q: "Que soutient Fritz Fischer en 1961 ?",
              options: ["La responsabilité majeure des dirigeants allemands", "La responsabilité exclusive de la Serbie", "L'absence de toute responsabilité", "La responsabilité principale de la France"],
              answer: 0,
              why: "À partir des archives, Fischer met en avant les buts d'hégémonie de l'Allemagne impériale.",
            },
            {
              q: "Quand l'expression « guerre d'Algérie » est-elle officiellement adoptée par la loi ?",
              options: ["En 1962", "En 2012", "En 1981", "En 1999"],
              answer: 3,
              why: "La loi du 18 octobre 1999 remplace les formules d'« événements » ou d'« opérations de maintien de l'ordre ».",
            },
            {
              q: "Quelle date de commémoration est contestée par une partie des rapatriés et des harkis ?",
              options: ["Le 11 novembre", "Le 19 mars", "Le 8 mai", "Le 5 décembre"],
              answer: 1,
              why: "Le 19 mars marque le cessez-le-feu, mais des violences ont continué après, d'où le choix concurrent du 5 décembre.",
            },
            {
              q: "Quel événement François Hollande reconnaît-il dans un communiqué d'octobre 2012 ?",
              options: ["La répression du 17 octobre 1961 à Paris", "La mort de Maurice Audin", "La responsabilité de l'État dans la rafle du Vél d'Hiv", "Les accords d'Évian"],
              answer: 0,
              why: "Il reconnaît la répression sanglante de la manifestation d'Algériens du 17 octobre 1961 ; la reconnaissance concernant Audin date de 2018.",
            },
          ],
          trap: "Parler de « la » mémoire de la guerre d'Algérie au singulier : le sujet exige de distinguer les groupes porteurs de mémoire et leurs revendications, souvent opposées.",
          method: "Pour un sujet sur les mémoires d'un conflit, organisez vos idées en trois temps (silence ou mémoire officielle, réveil des mémoires, temps de l'histoire et des reconnaissances) en plaçant à chaque étape un acteur et une date.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'histoire-memoire-justice',
          title: 'Histoire, mémoire et justice',
          minutes: 35,
          objectives: [
            "Expliquer la construction d'une justice pénale internationale face aux crimes de masse, de Nuremberg à la Cour pénale internationale.",
            "Analyser l'action du Tribunal pénal international pour l'ex-Yougoslavie (TPIY).",
            "Présenter les tribunaux gacaca face au génocide des Tutsi et en évaluer les apports et les limites.",
            "Distinguer le rôle du juge, celui de l'historien et celui de la mémoire.",
          ],
          course: [
            {
              heading: "Nommer et juger les crimes de masse",
              paragraphs: [
                "Le statut du tribunal militaire international de Nuremberg, adopté à Londres le 8 août 1945, définit trois crimes : crimes contre la paix, crimes de guerre et crimes contre l'humanité. Le procès de Nuremberg (novembre 1945 - octobre 1946) juge les principaux dirigeants nazis encore vivants : douze sont condamnés à mort. Un tribunal comparable juge à Tokyo des dirigeants japonais (1946-1948).",
                "Le juriste Raphael Lemkin forge en 1944 le mot « génocide ». La convention des Nations unies du 9 décembre 1948 le définit comme des actes commis dans l'intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux, comme tel. En France, une loi de 1964 rend les crimes contre l'humanité imprescriptibles. Mais pendant la guerre froide, aucun tribunal international n'est créé.",
              ],
              box: { label: "Définition", text: "Crime contre l'humanité : actes inhumains (meurtre, extermination, déportation, persécutions) commis contre une population civile dans le cadre d'une attaque généralisée ou systématique. Génocide : crime commis dans l'intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux." },
            },
            {
              heading: "Le TPIY : juger les crimes des guerres de Yougoslavie",
              paragraphs: [
                "L'éclatement de la Yougoslavie, à partir de 1991, s'accompagne de guerres marquées par le « nettoyage ethnique » : siège de Sarajevo (1992-1996), camps de détention, viols de masse. Pour la première fois depuis Nuremberg, le Conseil de sécurité crée un tribunal pénal international par la résolution 827 du 25 mai 1993, installé à La Haye. En juillet 1995, à Srebrenica, environ 8 000 hommes et adolescents bosniaques sont massacrés par les forces serbes de Bosnie.",
                "Le TPIY a mis en accusation 161 personnes. L'ancien président serbe Slobodan Milošević, livré en 2001, meurt en détention en 2006 avant la fin de son procès. Le chef politique des Serbes de Bosnie, Radovan Karadžić, et leur chef militaire, Ratko Mladić, sont condamnés pour génocide à Srebrenica : en appel, Karadžić est condamné à la perpétuité en 2019, et la perpétuité prononcée contre Mladić est confirmée en 2021. Le tribunal ferme fin 2017 ; un mécanisme résiduel achève ses travaux.",
                "Son bilan est important : établissement judiciaire des faits, jurisprudence sur les crimes sexuels, fin de l'impunité des dirigeants. Mais il a été jugé lent et coûteux, et il est souvent rejeté par les nationalistes serbes, qui y voient une justice des vainqueurs ; la négation du génocide de Srebrenica persiste. Les mémoires restent divisées dans les pays issus de la Yougoslavie.",
              ],
            },
            {
              heading: "Rwanda : le TPIR et les tribunaux gacaca",
              paragraphs: [
                "D'avril à juillet 1994, le génocide des Tutsi au Rwanda fait environ 800 000 morts selon l'ONU, en majorité des Tutsi, ainsi que des Hutu opposés au génocide. Le Conseil de sécurité crée en novembre 1994 le Tribunal pénal international pour le Rwanda (TPIR), installé à Arusha, en Tanzanie. En 1998, il prononce contre Jean-Paul Akayesu la première condamnation pour génocide de l'histoire par un tribunal international, et reconnaît le viol comme un acte pouvant constituer un génocide.",
                "Mais le TPIR ne juge que des responsables de haut rang, alors que des dizaines de milliers de suspects attendent leur procès dans les prisons rwandaises. Pour y répondre, le Rwanda adapte une justice communautaire traditionnelle, les gacaca (prononcer « gatchatcha », justice « sur l'herbe »). Généralisées à partir de 2005 et closes en 2012, plus de 12 000 juridictions, composées de juges non professionnels élus par la population, traitent près de deux millions d'affaires.",
                "Les gacaca visent à la fois la justice, la vérité (les audiences publiques révèlent où et comment les victimes ont été tuées) et la réconciliation (les aveux permettent des réductions de peine et des travaux d'intérêt général). Elles ont été critiquées : absence d'avocats, juges peu formés, pressions sur les témoins, et exclusion des crimes commis par les forces du Front patriotique rwandais, au pouvoir.",
              ],
              box: { label: "Repère", text: "1945 : statut de Nuremberg. 1948 : convention sur le génocide. 1993 : TPIY. 1994 : TPIR. 1998 : statut de Rome et jugement Akayesu. 2002 : entrée en vigueur du statut de la CPI. 2005-2012 : gacaca généralisées. 2017 : fermeture du TPIY." },
            },
            {
              heading: "Juger pour l'histoire et pour la mémoire ?",
              paragraphs: [
                "La Cour pénale internationale (CPI), créée par le statut de Rome (1998) et en fonction depuis 2002, siège à La Haye. Permanente, elle peut juger les génocides, les crimes contre l'humanité, les crimes de guerre et le crime d'agression, mais seulement lorsque les États ne veulent ou ne peuvent pas juger eux-mêmes. Plusieurs grandes puissances (États-Unis, Russie, Chine) n'y adhèrent pas ; en 2023, elle émet un mandat d'arrêt contre le président russe Vladimir Poutine pour la déportation d'enfants ukrainiens.",
                "Les procès produisent des archives, établissent des faits et donnent la parole aux victimes : ils nourrissent l'histoire et la mémoire. Mais le juge et l'historien n'ont pas le même rôle : le juge doit trancher sur la culpabilité d'individus dans un temps limité et selon des règles de preuve ; l'historien cherche à comprendre et à expliquer un phénomène collectif, sans jamais clore le débat. La justice participe à la reconnaissance des victimes, sans suffire à réconcilier les sociétés.",
              ],
            },
          ],
          keyPoints: [
            "Nuremberg (1945-1946) juge les crimes contre la paix, les crimes de guerre et les crimes contre l'humanité.",
            "Génocide : mot forgé par Lemkin (1944), défini par la convention du 9 décembre 1948.",
            "TPIY (1993-2017, La Haye) : 161 accusés ; Karadžić et Mladić condamnés pour le génocide de Srebrenica (juillet 1995).",
            "TPIR (Arusha, 1994) : jugement Akayesu (1998), première condamnation pour génocide par un tribunal international.",
            "Gacaca (2005-2012) : justice communautaire, près de deux millions d'affaires ; justice, vérité, réconciliation, mais critiques.",
            "Le juge établit des culpabilités individuelles ; l'historien explique un phénomène collectif.",
          ],
          example: {
            statement: "Comparez le TPIY et les tribunaux gacaca : objectifs, fonctionnement, apports et limites.",
            solution: [
              "Origine : le TPIY est créé par le Conseil de sécurité en 1993 ; les gacaca sont une initiative de l'État rwandais, inspirée d'une tradition locale, généralisée en 2005.",
              "Fonctionnement : le TPIY est un tribunal international de juges professionnels à La Haye, loin des lieux des crimes ; les gacaca sont des juridictions locales de juges élus, au plus près des victimes et des accusés.",
              "Objectif : le TPIY juge surtout les hauts responsables ; les gacaca traitent en masse les exécutants (près de deux millions d'affaires).",
              "Apports : le TPIY met fin à l'impunité des dirigeants et établit les faits (Srebrenica) ; les gacaca permettent de juger rapidement et de faire connaître la vérité dans chaque village.",
              "Limites : lenteur, coût et rejet par une partie des Serbes pour le TPIY ; garanties de procès faibles et justice jugée partiale pour les gacaca.",
              "Conclusion : deux réponses complémentaires aux crimes de masse, l'une internationale et ciblée, l'autre nationale et massive, qui servent toutes deux la mémoire sans garantir la réconciliation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez : (1) crime contre l'humanité ; (2) génocide ; (3) imprescriptibilité ; (4) gacaca.",
              hint: "Pour le génocide, l'élément décisif est l'intention de détruire un groupe.",
              solution: [
                "(1) Crime contre l'humanité : actes inhumains (meurtres, déportations, persécutions) commis contre une population civile dans le cadre d'une attaque généralisée ou systématique.",
                "(2) Génocide : actes commis dans l'intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux (convention de 1948).",
                "(3) Imprescriptibilité : un crime peut être poursuivi sans limite de temps ; c'est le cas des crimes contre l'humanité en France depuis 1964.",
                "(4) Gacaca : juridictions communautaires rwandaises, aux juges élus, chargées de 2005 à 2012 de juger les auteurs du génocide des Tutsi.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi le Rwanda a eu recours aux tribunaux gacaca et montrez que leur bilan est contrasté.",
              hint: "Pensez au nombre de détenus, à la capacité de la justice classique et aux objectifs de vérité et de réconciliation.",
              solution: [
                "Contexte : après le génocide d'avril à juillet 1994, des dizaines de milliers de suspects sont emprisonnés, alors que la justice rwandaise est détruite.",
                "Problème : le TPIR ne juge que des hauts responsables et la justice classique aurait mis des décennies à juger tous les accusés.",
                "Solution : des juridictions locales, aux juges élus, inspirées d'une tradition de règlement des conflits, traitent près de deux millions d'affaires de 2005 à 2012.",
                "Points positifs : rapidité, vérité sur le sort des victimes, participation de la population, aveux et réduction des peines favorisant la réinsertion.",
                "Limites : droits de la défense réduits (pas d'avocats), juges peu formés, risques de pressions et de fausses accusations, crimes des forces du Front patriotique rwandais exclus.",
                "Conclusion : les gacaca ont permis de juger un nombre immense d'affaires et d'établir des faits, mais au prix de garanties judiciaires imparfaites.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Juger les crimes de masse : quels apports pour l'histoire et pour les mémoires ? ». Rédigez l'introduction et un plan détaillé en trois parties.",
              hint: "Distinguez ce que la justice apporte (faits, archives, reconnaissance des victimes) et ce qu'elle ne peut pas faire (expliquer, réconcilier à elle seule).",
              solution: [
                "Accroche : en 1998, le TPIR condamne Jean-Paul Akayesu pour génocide, première condamnation de ce type par un tribunal international.",
                "Problématique : en quoi les procès des crimes de masse contribuent-ils à établir l'histoire et à construire des mémoires, et quelles sont les limites de ce rôle ?",
                "I. Une justice internationale construite face aux crimes de masse : Nuremberg (1945-1946) et ses définitions ; convention sur le génocide (1948) ; TPIY (1993), TPIR (1994), CPI (statut de Rome, 1998).",
                "II. Des procès qui servent l'histoire et la mémoire : établissement des faits (Srebrenica qualifié de génocide) ; archives et témoignages ; reconnaissance des victimes ; vérité locale des gacaca.",
                "III. Des limites : le juge n'est pas l'historien (culpabilité individuelle contre explication collective) ; justice des vainqueurs ou justice partiale (critiques du TPIY et des gacaca) ; négationnisme persistant ; puissances hors de la CPI.",
                "Conclusion : la justice est un moment essentiel de la reconnaissance des crimes de masse, mais l'histoire et la mémoire la prolongent et la dépassent.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la justice pénale internationale dans l'ordre chronologique.",
            items: [
              "Ouverture du procès de Nuremberg",
              "Convention des Nations unies sur le génocide",
              "Création du TPIY par le Conseil de sécurité",
              "Création du TPIR",
              "Adoption du statut de Rome de la Cour pénale internationale",
              "Généralisation des tribunaux gacaca au Rwanda",
              "Fermeture du TPIY",
            ],
          },
          quiz: [
            {
              q: "Qui a forgé le mot « génocide » ?",
              options: ["Raphael Lemkin", "Raymond Aron", "Hannah Arendt", "René Cassin"],
              answer: 0,
              why: "Le juriste Raphael Lemkin invente le terme en 1944 ; il est défini juridiquement par la convention de 1948.",
            },
            {
              q: "Quel organe a créé le TPIY en 1993 ?",
              options: ["L'Union européenne", "Le Conseil de sécurité de l'ONU", "L'OTAN", "La Cour pénale internationale"],
              answer: 1,
              why: "Le TPIY est créé par la résolution 827 du Conseil de sécurité ; la CPI n'existe qu'à partir de 2002.",
            },
            {
              q: "Quel massacre le TPIY qualifie-t-il de génocide ?",
              options: ["Le siège de Sarajevo", "Le bombardement de Belgrade par l'OTAN en 1999", "Le massacre de Račak", "Le massacre de Srebrenica en juillet 1995"],
              answer: 3,
              why: "Environ 8 000 hommes et adolescents bosniaques y sont tués ; Karadžić et Mladić sont condamnés pour ce génocide.",
            },
            {
              q: "Quelle est une critique adressée aux tribunaux gacaca ?",
              options: ["Ils étaient trop lents", "Ils jugeaient seulement les hauts dirigeants", "Les accusés n'avaient pas d'avocat", "Ils siégeaient à La Haye"],
              answer: 2,
              why: "Les gacaca ont jugé rapidement de très nombreux exécutants, mais avec des droits de la défense réduits.",
            },
            {
              q: "En quoi le rôle du juge diffère-t-il de celui de l'historien ?",
              options: ["Le juge établit des culpabilités, l'historien explique", "Le juge n'utilise pas de preuves", "L'historien prononce les peines à la place des juges du tribunal", "Ils ont exactement le même rôle"],
              answer: 0,
              why: "Le juge doit conclure dans un temps limité ; l'historien cherche à comprendre et peut toujours réviser son interprétation.",
            },
          ],
          trap: "Confondre crime contre l'humanité et génocide : le génocide se caractérise par l'intention de détruire un groupe en tant que tel, ce qui en fait une forme particulière et plus restreinte de crime contre l'humanité.",
          method: "Préparez un tableau comparatif à cinq lignes (date, créateur, lieu, accusés, bilan) pour Nuremberg, le TPIY, le TPIR, les gacaca et la CPI : il fournit d'un coup d'œil exemples et nuances.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'memoire-genocide',
          title: 'L\'histoire et les mémoires du génocide des Juifs et des Tsiganes',
          minutes: 35,
          objectives: [
            "Présenter le génocide des Juifs et des Tsiganes et le vocabulaire qui permet de le nommer.",
            "Expliquer comment les crimes nazis ont été jugés après Nuremberg, en Israël, en Allemagne et en France.",
            "Analyser le rôle des témoins et des témoignages dans l'histoire et la mémoire du génocide.",
            "Identifier comment la littérature, le cinéma et les lieux de mémoire transmettent cette mémoire.",
          ],
          course: [
            {
              heading: "Un génocide, deux peuples visés",
              paragraphs: [
                "Pendant la Seconde Guerre mondiale, l'Allemagne nazie et ses complices assassinent environ six millions de Juifs d'Europe. Le génocide passe par les fusillades massives des Einsatzgruppen à l'Est à partir de 1941 (la « Shoah par balles »), puis par les centres de mise à mort (Chelmno, Belzec, Sobibor, Treblinka, Majdanek, Auschwitz-Birkenau). La conférence de Wannsee, le 20 janvier 1942, coordonne la mise en œuvre de la « solution finale ».",
                "Les Tsiganes (Roms et Sintés) sont eux aussi persécutés pour des raisons raciales, internés, déportés et assassinés ; à Auschwitz-Birkenau, le « camp des familles » tsigane est liquidé dans la nuit du 2 au 3 août 1944. Le nombre de victimes, difficile à établir, est estimé selon les historiens entre 200 000 et 500 000. En France, des milliers de « nomades » sont internés dans des camps français à partir de 1940, et certains jusqu'en 1946.",
                "Les mots disent la place de ces mémoires : on parle de Shoah (« catastrophe » en hébreu) ou d'Holocauste pour le génocide des Juifs, et de Samudaripen ou de Porajmos pour celui des Tsiganes. En France, environ 76 000 Juifs ont été déportés, avec la collaboration de l'État français ; très peu sont revenus.",
              ],
              box: { label: "Repère", text: "20 janvier 1942 : conférence de Wannsee. 16-17 juillet 1942 : rafle du Vél d'Hiv à Paris. 2-3 août 1944 : liquidation du camp des familles tsigane à Birkenau. 27 janvier 1945 : libération d'Auschwitz par l'Armée rouge, devenue journée internationale de commémoration." },
            },
            {
              heading: "Juger les crimes nazis après Nuremberg",
              paragraphs: [
                "Le procès de Nuremberg (1945-1946) évoque l'extermination des Juifs, mais celle-ci n'en est pas le centre. Le tournant vient du procès d'Adolf Eichmann, organisateur de la déportation, capturé en Argentine par les services israéliens en 1960 et jugé à Jérusalem en 1961. Pour la première fois, de nombreux survivants témoignent publiquement, devant un procès suivi dans le monde entier. Eichmann est exécuté en 1962. La philosophe Hannah Arendt, qui couvre le procès, en tire l'idée controversée de « banalité du mal ».",
                "En Allemagne de l'Ouest, le procès d'Auschwitz à Francfort (1963-1965), voulu par le procureur Fritz Bauer, confronte la société allemande aux crimes commis par des Allemands ordinaires. En France, l'imprescriptibilité des crimes contre l'humanité (1964) permet de juger Klaus Barbie, chef de la Gestapo de Lyon, condamné en 1987 ; Paul Touvier, responsable du renseignement de la Milice à Lyon, condamné en 1994, premier Français condamné pour crime contre l'humanité ; Maurice Papon, ancien secrétaire général de la préfecture de la Gironde, condamné en 1998 pour complicité de crimes contre l'humanité.",
                "Ces procès ont une fonction pédagogique et mémorielle : ils exposent les mécanismes de la persécution, donnent la parole aux victimes et, dans le cas de Touvier et Papon, rappellent la participation de Français et de l'administration de Vichy.",
              ],
            },
            {
              heading: "Témoins et témoignages",
              paragraphs: [
                "Des témoignages existent dès la guerre : dans le ghetto de Varsovie, l'historien Emanuel Ringelblum et son équipe rassemblent des archives clandestines qu'ils enterrent. Après 1945, des rescapés écrivent : Primo Levi publie Si c'est un homme en 1947, Robert Antelme L'Espèce humaine la même année. Mais dans les années d'après-guerre, ces voix sont peu entendues, et la mémoire de la déportation est d'abord dominée par celle des résistants déportés.",
                "Le procès Eichmann ouvre ce que l'historienne Annette Wieviorka a appelé « l'ère du témoin » : le survivant devient une figure centrale de la mémoire. À partir de la fin des années 1970 se constituent de grandes collections de témoignages filmés, comme celle de l'université Yale ou la fondation créée par Steven Spielberg en 1994. Des rescapés, comme Simone Veil en France, témoignent inlassablement, notamment devant les élèves.",
                "Le témoignage est irremplaçable pour transmettre l'expérience, mais l'historien le croise avec d'autres sources, car la mémoire individuelle peut se tromper sur des détails. Face aux négationnistes, comme Robert Faurisson à partir de la fin des années 1970, historiens et témoins ont uni leurs efforts. La disparition des derniers survivants pose aujourd'hui la question de la transmission sans témoins.",
              ],
            },
            {
              heading: "Littérature, cinéma et lieux de mémoire",
              paragraphs: [
                "La littérature et le cinéma ont joué un rôle majeur. Nuit et Brouillard d'Alain Resnais (1956), sur un texte de Jean Cayrol, est l'un des premiers films sur les camps, mais il ne distingue pas encore clairement le génocide des Juifs. Elie Wiesel publie La Nuit (1958), Art Spiegelman la bande dessinée Maus (1986 et 1991). Claude Lanzmann réalise Shoah (1985), un film de plus de neuf heures fait uniquement de témoignages et de lieux filmés au présent, sans images d'archives. Steven Spielberg (La Liste de Schindler, 1993) et László Nemes (Le Fils de Saul, 2015) touchent un large public.",
                "Les lieux de mémoire se multiplient : Yad Vashem à Jérusalem (créé en 1953), le musée d'État d'Auschwitz-Birkenau (1947), inscrit au patrimoine mondial de l'UNESCO en 1979, le Mémorial de la Shoah à Paris (2005), le mémorial aux Juifs assassinés d'Europe à Berlin (2005). La mémoire du génocide des Tsiganes est restée longtemps marginale : un mémorial leur est dédié à Berlin en 2012, et en 2016 le président François Hollande reconnaît la responsabilité de la France dans l'internement des nomades.",
              ],
              box: { label: "À retenir", text: "La mémoire du génocide s'est construite par étapes : silence relatif après 1945, tournant du procès Eichmann (1961), ère du témoin, procès des années 1980-1990, œuvres majeures (Shoah, 1985), lieux de mémoire, reconnaissance tardive du génocide des Tsiganes." },
            },
          ],
          keyPoints: [
            "Environ six millions de Juifs et entre 200 000 et 500 000 Tsiganes (selon les estimations) sont assassinés par les nazis et leurs complices.",
            "Procès Eichmann (Jérusalem, 1961) : tournant mémoriel, les survivants témoignent publiquement.",
            "Procès d'Auschwitz à Francfort (1963-1965) ; en France : Barbie (1987), Touvier (1994), Papon (1998).",
            "« L'ère du témoin » (Wieviorka) : témoignages écrits (Levi, 1947), filmés, rescapés dans les classes.",
            "Œuvres : Nuit et Brouillard (1956), La Nuit (1958), Shoah (1985), La Liste de Schindler (1993).",
            "Lieux : Yad Vashem (1953), Auschwitz-Birkenau (UNESCO 1979), Mémorial de la Shoah (2005) ; mémoire tsigane tardive.",
          ],
          example: {
            statement: "Pourquoi le procès d'Adolf Eichmann (1961) est-il un tournant dans la mémoire du génocide des Juifs ?",
            solution: [
              "Rappel : Eichmann, responsable de l'organisation des déportations, est capturé en Argentine en 1960 et jugé à Jérusalem en 1961.",
              "Différence avec Nuremberg : à Nuremberg, l'extermination des Juifs n'était pas au centre du procès ; à Jérusalem, elle en est l'objet principal.",
              "Place des témoins : de nombreux survivants racontent publiquement leur expérience, ce qui fait entrer leur parole dans l'espace public.",
              "Retentissement : le procès est suivi par les médias du monde entier et suscite des réflexions comme celle d'Hannah Arendt sur la « banalité du mal ».",
              "Conséquence : il ouvre « l'ère du témoin » (Annette Wieviorka) et stimule la recherche historique et les autres procès (Francfort, 1963-1965).",
              "Réponse : le procès Eichmann place le génocide des Juifs et la parole des survivants au centre de la mémoire collective.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque œuvre ou lieu à son auteur ou à sa date : Si c'est un homme ; Nuit et Brouillard ; Shoah ; Maus ; Yad Vashem ; Mémorial de la Shoah à Paris.",
              hint: "Distinguez les témoignages écrits, les films, la bande dessinée et les lieux.",
              solution: [
                "Si c'est un homme : récit de Primo Levi, rescapé d'Auschwitz, publié en 1947.",
                "Nuit et Brouillard : film d'Alain Resnais (1956), sur un texte de Jean Cayrol.",
                "Shoah : film de Claude Lanzmann (1985), fondé uniquement sur des témoignages, sans images d'archives.",
                "Maus : bande dessinée d'Art Spiegelman, publiée en deux volumes (1986 et 1991).",
                "Yad Vashem : mémorial et centre de recherche créé à Jérusalem en 1953.",
                "Mémorial de la Shoah : institution parisienne inaugurée en 2005.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi la mémoire du génocide des Tsiganes est restée longtemps marginale, puis présentez deux étapes de sa reconnaissance.",
              hint: "Pensez à la situation sociale des Roms et Sintés après la guerre, à la faiblesse des archives et des témoignages écrits, et aux préjugés persistants.",
              solution: [
                "Après 1945, les persécutions des Tsiganes sont longtemps présentées comme des mesures contre une prétendue « criminalité » et non comme une persécution raciale, ce qui retarde leur reconnaissance.",
                "Les communautés, marginalisées et victimes de préjugés persistants, disposent de peu de relais politiques et d'une tradition de transmission surtout orale ; les témoignages écrits et les études historiques sont rares.",
                "En France, l'internement des nomades par les autorités françaises, prolongé jusqu'en 1946, est longtemps oublié.",
                "Étape 1 : l'Allemagne reconnaît officiellement le génocide des Sintés et des Roms au début des années 1980, puis inaugure un mémorial à Berlin en 2012.",
                "Étape 2 : en 2016, François Hollande reconnaît la responsabilité de la France dans l'internement des nomades.",
                "Conclusion : la mémoire d'un génocide dépend aussi de la capacité des victimes à se faire entendre et de la volonté des États de la reconnaître.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : discours du président Jacques Chirac lors de la commémoration de la rafle du Vél d'Hiv, Paris, 16 juillet 1995 (présentation résumée). Le président rappelle qu'en juillet 1942, des milliers de Juifs ont été arrêtés à Paris par des policiers et des gendarmes français, sur ordre des autorités, avant d'être déportés. Il affirme que la folie criminelle de l'occupant a été secondée par des Français et par l'État français, que la France a ce jour-là livré ceux qu'elle devait protéger à leurs bourreaux, et que la nation a envers eux une « dette imprescriptible ». Il appelle à transmettre cette mémoire aux jeunes générations. Consigne : montrez en quoi ce discours marque un tournant dans la mémoire du génocide en France, et quel rôle il donne à l'histoire et à la transmission.",
              hint: "Confrontez le discours à la position antérieure de l'État (Vichy présenté comme une parenthèse) et aux travaux historiques et procès qui l'ont rendu possible.",
              solution: [
                "Présentation : discours officiel d'un chef d'État, prononcé sur un lieu de mémoire lors de la commémoration annuelle de la rafle des 16 et 17 juillet 1942, qui a conduit à l'arrestation d'environ 13 000 Juifs.",
                "Contexte : depuis 1944, la position officielle considérait que Vichy n'était pas la République et que la France n'avait pas à répondre de ses actes ; le mythe résistancialiste dominait.",
                "Tournant : Jacques Chirac reconnaît la responsabilité de l'État français et la participation de policiers et de gendarmes français à la déportation.",
                "Ce qui l'a rendu possible : les travaux historiques (Paxton, 1972 ; travaux de Serge Klarsfeld sur les déportés de France), l'action des associations, les procès Barbie (1987) et Touvier (1994).",
                "Rôle de la transmission : la « dette imprescriptible » et l'appel aux jeunes générations fondent un devoir de transmission, prolongé par le Mémorial de la Shoah (2005) et l'enseignement scolaire.",
                "Limite : un discours reconnaît et commémore, mais c'est le travail des historiens qui établit et explique les faits.",
                "Conclusion : le discours du 16 juillet 1995 intègre la responsabilité de Vichy dans la mémoire nationale et marque la fin du mythe d'une France unanimement résistante.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Histoire et mémoires du génocide.",
            statements: [
              { text: "Le génocide des Juifs a été au centre du procès de Nuremberg.", true: false, why: "Il y est évoqué, mais il ne devient central qu'avec le procès Eichmann en 1961." },
              { text: "Le film Shoah de Claude Lanzmann ne contient aucune image d'archives.", true: true, why: "Il repose sur des témoignages et des lieux filmés au présent." },
              { text: "Klaus Barbie a été jugé en France en 1987.", true: true, why: "L'ancien chef de la Gestapo de Lyon est condamné à la réclusion à perpétuité." },
              { text: "La mémoire du génocide des Tsiganes s'est imposée dès 1945.", true: false, why: "Elle est restée longtemps marginale et n'a été reconnue que tardivement." },
              { text: "Auschwitz a été libéré par l'Armée rouge le 27 janvier 1945.", true: true, why: "Cette date est devenue la journée internationale de commémoration des victimes de l'Holocauste." },
              { text: "Paul Touvier est le premier Français condamné pour crime contre l'humanité.", true: true, why: "Il est condamné en 1994 pour l'exécution de sept otages juifs en 1944." },
              { text: "Primo Levi a écrit La Nuit.", true: false, why: "La Nuit est d'Elie Wiesel ; Primo Levi a écrit Si c'est un homme." },
            ],
          },
          quiz: [
            {
              q: "Où et quand Adolf Eichmann est-il jugé ?",
              options: ["À Nuremberg en 1946", "À Francfort en 1963", "À Lyon en 1987", "À Jérusalem en 1961"],
              answer: 3,
              why: "Capturé en Argentine en 1960, il est jugé à Jérusalem en 1961 et exécuté en 1962.",
            },
            {
              q: "Qui a parlé de « l'ère du témoin » ?",
              options: ["Hannah Arendt", "Pierre Nora", "Annette Wieviorka", "Claude Lanzmann"],
              answer: 2,
              why: "L'historienne Annette Wieviorka montre que le procès Eichmann fait du survivant une figure centrale.",
            },
            {
              q: "Pour quel motif Maurice Papon est-il condamné en 1998 ?",
              options: ["Complicité de crimes contre l'humanité", "Crimes de guerre sur le front de l'Est", "Collaboration économique", "Trahison"],
              answer: 0,
              why: "Haut fonctionnaire de la préfecture de la Gironde, il a participé à l'organisation de la déportation des Juifs de Bordeaux.",
            },
            {
              q: "Que coordonne la conférence de Wannsee du 20 janvier 1942 ?",
              options: ["L'invasion de l'URSS", "La mise en œuvre de la « solution finale »", "La création et la fermeture du ghetto de Varsovie", "La capitulation allemande"],
              answer: 1,
              why: "Des hauts responsables nazis y organisent la coopération des administrations pour l'extermination des Juifs d'Europe.",
            },
            {
              q: "Quelle reconnaissance François Hollande fait-il en 2016 ?",
              options: ["La rafle du Vél d'Hiv", "L'internement des nomades par la France", "Le génocide arménien de 1915 commis dans l'Empire ottoman", "La mort de Maurice Audin"],
              answer: 1,
              why: "Il reconnaît que des nomades ont été internés dans des camps par les autorités françaises, de 1940 à 1946 ; la reconnaissance du Vél d'Hiv date de 1995.",
            },
          ],
          trap: "Oublier le génocide des Tsiganes, ou dater la mémoire de la Shoah dès 1945 : la place centrale du génocide des Juifs dans la mémoire collective ne s'impose qu'à partir des années 1960, et celle des Tsiganes bien plus tard encore.",
          method: "Classez vos exemples en quatre familles (procès, témoins, œuvres, lieux) et retenez pour chacun une date et un nom : vous pourrez ainsi construire rapidement un plan chronologique ou thématique.",
        },
      ],
    },
  ],
}
