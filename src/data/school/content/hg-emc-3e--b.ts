import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-emc-3e',
  chapters: [
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 2 : POURQUOI ET COMMENT AMÉNAGER LE TERRITOIRE ?    */
    /* ==================================================================== */
    {
      id: 'amenager-territoire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'amenager-inegalites',
          title: "Aménager pour répondre aux inégalités entre territoires",
          minutes: 30,
          objectives: [
            "Définir l'aménagement du territoire et identifier ses acteurs : l'État, les collectivités territoriales, l'Union européenne.",
            "Décrire les inégalités entre territoires (métropoles, espaces ruraux éloignés, quartiers en difficulté) et en expliquer les causes.",
            "Expliquer comment des politiques d'aménagement cherchent à rendre les territoires plus attractifs et plus solidaires.",
            "Analyser un projet d'aménagement à partir d'un document.",
          ],
          course: [
            {
              heading: "Aménager le territoire : de quoi parle-t-on ?",
              paragraphs: [
                "Aménager le territoire, c'est agir volontairement sur l'organisation d'un espace : construire une route ou une ligne ferroviaire, installer la fibre optique, ouvrir une maison de santé, rénover un quartier, implanter une zone d'activités. Ces actions sont décidées et financées surtout par les pouvoirs publics.",
                "L'aménagement poursuit deux grands objectifs, parfois difficiles à concilier. Le premier est l'attractivité (on dit aussi compétitivité) : rendre les territoires capables d'attirer des habitants, des entreprises et des touristes, et les insérer dans la mondialisation. Le second est la cohésion, ou équité territoriale : réduire les écarts entre les territoires pour que chaque habitant ait accès aux mêmes services, où qu'il vive.",
                "Une comparaison aide à comprendre : un territoire est comme une maison où vivent plusieurs personnes. Aménager, c'est répartir les pièces, les équipements et les accès pour que chacun puisse y vivre correctement, sans que tout soit concentré dans une seule pièce.",
              ],
              box: { label: "Définition", text: "L'aménagement du territoire est l'ensemble des actions menées par les pouvoirs publics pour organiser l'espace, répartir les activités, les équipements et les services, afin de rendre les territoires attractifs et de réduire les inégalités entre eux." },
            },
            {
              heading: "Des territoires inégaux",
              paragraphs: [
                "Les métropoles concentrent les emplois qualifiés, les universités, les hôpitaux spécialisés, les sièges d'entreprises et les grands équipements de transport. L'Île-de-France, autour de Paris, rassemble à elle seule près d'un Français sur cinq et produit environ 30 % de la richesse nationale.",
                "À l'inverse, certains espaces ruraux éloignés des villes perdent des habitants et des services : fermeture d'écoles, de bureaux de poste, de commerces. On parle de déserts médicaux quand il devient difficile d'y trouver un médecin, et de zones blanches quand le réseau mobile ou internet est absent ou très faible.",
                "Les inégalités existent aussi à l'intérieur des villes. Certains quartiers, souvent des grands ensembles construits dans les années 1950 à 1970, cumulent chômage élevé, pauvreté et logements dégradés. L'État les classe en quartiers prioritaires de la politique de la ville pour y concentrer des moyens. Enfin, les territoires ultramarins connaissent des écarts importants avec la France métropolitaine.",
              ],
            },
            {
              heading: "Les acteurs de l'aménagement",
              paragraphs: [
                "Pendant longtemps, l'État a été le principal aménageur. En 1963, il crée la DATAR (Délégation à l'aménagement du territoire et à l'action régionale), qui pilote de grands projets : autoroutes, villes nouvelles autour de Paris (Cergy-Pontoise, Évry, Marne-la-Vallée, Saint-Quentin-en-Yvelines, Sénart), stations touristiques du littoral du Languedoc comme La Grande-Motte, puis lignes à grande vitesse. Aujourd'hui, l'Agence nationale de la cohésion des territoires (ANCT), créée en 2020, accompagne les projets des collectivités.",
                "Avec les lois de décentralisation de 1982-1983 (lois Defferre), les collectivités territoriales sont devenues des aménageurs majeurs. La région organise les transports régionaux (TER) et construit les lycées ; le département gère les collèges, de nombreuses routes et l'action sociale ; la commune et l'intercommunalité s'occupent des écoles, de l'urbanisme et des équipements de proximité.",
                "L'Union européenne finance aussi des projets grâce à sa politique de cohésion, en particulier le FEDER (Fonds européen de développement régional). Les entreprises, les associations et les habitants participent : ils sont consultés lors de concertations ou d'enquêtes publiques, et peuvent s'opposer à un projet. Certains aménagements suscitent de vifs conflits, comme le projet d'aéroport de Notre-Dame-des-Landes, abandonné en 2018.",
              ],
              box: { label: "Repère", text: "1963 : création de la DATAR. 1982-1983 : lois de décentralisation. 2020 : création de l'Agence nationale de la cohésion des territoires (ANCT)." },
            },
            {
              heading: "Des politiques pour plus d'équité",
              paragraphs: [
                "Pour désenclaver les territoires, les pouvoirs publics améliorent les transports (routes, liaisons ferroviaires) et le numérique : le plan France Très Haut Débit, lancé en 2013, vise à apporter internet à haut débit partout, y compris dans les campagnes. Pour maintenir les services publics, des espaces France Services, ouverts à partir de 2019, regroupent en un seul lieu l'aide aux démarches (impôts, retraite, emploi, papiers).",
                "Des programmes nationaux soutiennent les villes moyennes et les petites villes dont le centre se vide : Action cœur de ville (2018) et Petites villes de demain (2020) financent la rénovation des logements, des commerces et des espaces publics. Dans les quartiers prioritaires, la rénovation urbaine démolit et reconstruit des logements et crée des équipements.",
                "Ces politiques ont des résultats réels mais inégaux : elles coûtent cher, et un débat oppose ceux qui veulent concentrer les moyens sur les métropoles, moteurs de la croissance, à ceux qui veulent mieux les répartir. Aménager, c'est toujours faire des choix.",
              ],
              box: { label: "À retenir", text: "Aménager le territoire, c'est chercher à la fois l'attractivité des territoires et l'équité entre eux. L'État, les collectivités territoriales et l'Union européenne en sont les principaux acteurs." },
            },
          ],
          keyPoints: [
            "Aménager le territoire : organiser l'espace pour le rendre attractif et réduire les inégalités entre territoires.",
            "Inégalités : métropoles dynamiques, espaces ruraux éloignés qui perdent des services, quartiers prioritaires en difficulté, outre-mer.",
            "Acteurs : l'État (DATAR en 1963, ANCT en 2020), les collectivités territoriales (région, département, commune), l'Union européenne (FEDER).",
            "Les lois de décentralisation de 1982-1983 donnent aux collectivités territoriales un rôle majeur dans l'aménagement.",
            "Outils : désenclavement (transports, très haut débit), services publics de proximité (France Services), revitalisation des centres-villes.",
            "Habitants et associations peuvent participer ou s'opposer : un aménagement peut créer des conflits.",
          ],
          example: {
            statement: "Expliquez pourquoi et comment les pouvoirs publics cherchent à maintenir des services dans les espaces ruraux éloignés des villes.",
            solution: [
              "Constater le problème : dans certains espaces ruraux éloignés, la population diminue et vieillit ; écoles, bureaux de poste, commerces et médecins disparaissent.",
              "Expliquer l'enjeu : les habitants de ces territoires doivent faire de longs trajets pour se soigner ou faire leurs démarches ; c'est une inégalité face aux services.",
              "Présenter une première solution : les espaces France Services regroupent en un même lieu l'aide aux démarches administratives.",
              "Présenter une deuxième solution : le déploiement du très haut débit permet le télétravail et les démarches en ligne ; les maisons de santé attirent des médecins.",
              "Nommer les acteurs : l'État, les collectivités territoriales (communes, départements, régions) et l'Union européenne financent ces projets.",
              "Conclure : ces actions relèvent de l'aménagement du territoire, qui cherche à réduire les inégalités pour que chaque citoyen ait accès aux mêmes services.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quel acteur est principalement responsable de chacun des aménagements suivants : a) la construction d'un collège ; b) la construction d'un lycée ; c) l'organisation des TER ; d) la construction d'une école primaire ; e) le cofinancement d'un projet régional par le FEDER.",
              hint: "Rappelez-vous la répartition des compétences issue de la décentralisation : la région, le département, la commune, et pensez à l'échelle européenne.",
              solution: [
                "a) Le collège relève du département.",
                "b) Le lycée relève de la région.",
                "c) Les TER (trains express régionaux) sont organisés par la région.",
                "d) L'école primaire relève de la commune.",
                "e) Le FEDER est un fonds de l'Union européenne.",
                "Résultat : département, région, région, commune, Union européenne.",
              ],
            },
            {
              level: 2,
              statement: "Situation : dans une commune rurale de 1 500 habitants, située à 45 minutes de la ville la plus proche, le dernier médecin part à la retraite et le bureau de poste ferme. La communauté de communes, aidée par l'État et la région, ouvre une maison de santé et un espace France Services. 1) Quelle inégalité territoriale cette situation montre-t-elle ? 2) Quels acteurs interviennent ? 3) En quoi ces décisions sont-elles un aménagement du territoire ?",
              hint: "Repérez d'abord le problème (un manque), puis qui agit, puis rappelez la définition de l'aménagement du territoire.",
              solution: [
                "1) La situation montre une inégalité d'accès aux services : les habitants de cet espace rural éloigné risquent de vivre dans un désert médical et doivent se déplacer loin pour leurs démarches.",
                "2) Les acteurs sont des collectivités territoriales (la communauté de communes, la région) et l'État, qui financent ensemble le projet.",
                "3) Il s'agit d'un aménagement du territoire, car les pouvoirs publics organisent volontairement l'espace en y implantant des équipements et des services.",
                "Le but est l'équité territoriale : offrir à ces habitants un accès aux soins et aux services proche de celui des habitants des villes.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, montrez que l'aménagement du territoire cherche à réduire les inégalités entre les territoires français. Vous présenterez ces inégalités, puis les acteurs et les actions d'aménagement, en vous appuyant sur des exemples précis.",
              hint: "Construisez deux paragraphes : d'abord les inégalités (métropoles, espaces ruraux, quartiers prioritaires), ensuite les acteurs et les actions (transports, numérique, services publics, revitalisation).",
              solution: [
                "Introduction : le territoire français est marqué par de fortes inégalités. Les pouvoirs publics mènent donc une politique d'aménagement du territoire, c'est-à-dire un ensemble d'actions pour organiser l'espace et réduire les écarts.",
                "Paragraphe 1 : les métropoles, comme Paris ou Lyon, concentrent les emplois, les universités et les grands équipements ; l'Île-de-France produit environ 30 % de la richesse nationale. À l'inverse, des espaces ruraux éloignés perdent des services (médecins, écoles, commerces) ; certains quartiers prioritaires cumulent chômage et pauvreté.",
                "Paragraphe 2 : l'État, longtemps principal aménageur (DATAR créée en 1963), partage ce rôle depuis la décentralisation de 1982-1983 avec les régions, les départements et les communes ; l'Union européenne aide avec le FEDER.",
                "Paragraphe 3 : ces acteurs désenclavent les territoires (routes, voies ferrées, plan France Très Haut Débit), maintiennent des services publics (espaces France Services, maisons de santé) et revitalisent les centres des petites villes (Action cœur de ville, Petites villes de demain).",
                "Conclusion : l'aménagement du territoire cherche à concilier l'attractivité et l'équité entre les territoires, même si les inégalités restent fortes et si ces choix font débat.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque acteur ou outil de l'aménagement à son rôle.",
            pairs: [
              { left: "DATAR (1963)", right: "Organisme de l'État qui a piloté l'aménagement à partir des années 1960" },
              { left: "Région", right: "Construit les lycées et organise les TER" },
              { left: "Département", right: "Gère les collèges et de nombreuses routes" },
              { left: "FEDER", right: "Fonds européen qui cofinance des projets régionaux" },
              { left: "France Services", right: "Lieu qui regroupe l'aide aux démarches administratives" },
              { left: "Quartier prioritaire", right: "Quartier urbain en difficulté qui reçoit des moyens supplémentaires" },
            ],
          },
          quiz: [
            {
              q: "Quels sont les deux grands objectifs de l'aménagement du territoire ?",
              options: [
                "Augmenter les impôts locaux et réduire le nombre de communes",
                "Rendre les territoires attractifs et réduire les inégalités entre eux",
                "Concentrer toutes les activités et tous les habitants dans la capitale",
                "Supprimer les espaces ruraux au profit des villes",
              ],
              answer: 1,
              why: "L'aménagement recherche à la fois l'attractivité (ou compétitivité) des territoires et l'équité, c'est-à-dire la réduction des écarts entre eux.",
            },
            {
              q: "Qu'appelle-t-on un désert médical ?",
              options: [
                "Un territoire où l'accès à un médecin est devenu difficile",
                "Une région très sèche où il pleut très peu pendant toute l'année",
                "Un hôpital sans malades",
              ],
              answer: 0,
              why: "Un désert médical est un territoire où il manque des médecins, ce qui oblige les habitants à se déplacer loin pour se soigner.",
            },
            {
              q: "Depuis les lois de décentralisation de 1982-1983, qui construit et entretient les collèges ?",
              options: [
                "L'Union européenne",
                "La commune",
                "La région",
                "Le département",
              ],
              answer: 3,
              why: "Le département a la charge des collèges ; la région s'occupe des lycées et la commune des écoles.",
            },
            {
              q: "Quel est le rôle du FEDER ?",
              options: [
                "Organiser et surveiller les élections régionales dans chaque pays européen",
                "Gérer les lignes de TGV françaises",
                "Cofinancer des projets de développement dans les régions européennes",
              ],
              answer: 2,
              why: "Le FEDER (Fonds européen de développement régional) est un outil de la politique de cohésion de l'Union européenne.",
            },
            {
              q: "Quel exemple illustre une politique de revitalisation des petites villes ?",
              options: [
                "Le programme Petites villes de demain, lancé en 2020",
                "La création des villes nouvelles autour de Paris dans les années 1960",
                "La fermeture des bureaux de poste ruraux",
              ],
              answer: 0,
              why: "Petites villes de demain finance la rénovation des centres des petites villes ; les villes nouvelles des années 1960-1970 répondaient à la croissance de l'agglomération parisienne.",
            },
          ],
          trap: "Confondre les acteurs et leurs compétences (dire que la région construit les collèges) ou oublier que l'aménagement poursuit deux buts à la fois : l'attractivité et la réduction des inégalités.",
          method: "Pour retenir les acteurs, faites un tableau à trois colonnes (État, collectivités territoriales, Union européenne) et placez-y au moins un exemple précis d'action pour chacun ; au brevet, chaque exemple nommé rapporte des points.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'territoires-ultramarins',
          title: "Les territoires ultramarins français : une problématique spécifique",
          minutes: 30,
          objectives: [
            "Localiser et nommer les principaux territoires ultramarins français et distinguer leurs statuts.",
            "Identifier les contraintes propres à ces territoires : éloignement, insularité, risques naturels, retards de développement.",
            "Expliquer leurs atouts pour la France et les politiques d'aménagement qui leur sont destinées.",
          ],
          course: [
            {
              heading: "Des territoires dispersés sur tous les océans",
              paragraphs: [
                "Les territoires ultramarins (on dit aussi l'outre-mer) sont les territoires français situés hors du continent européen. Ils sont répartis dans l'océan Atlantique (Guadeloupe, Martinique, Saint-Martin, Saint-Barthélemy, Saint-Pierre-et-Miquelon), en Amérique du Sud (Guyane), dans l'océan Indien (La Réunion, Mayotte) et dans l'océan Pacifique (Nouvelle-Calédonie, Polynésie française, Wallis-et-Futuna). S'y ajoutent les Terres australes et antarctiques françaises, sans population permanente.",
                "Ces territoires comptent plus de 2,5 millions d'habitants. Ce sont pour la plupart d'anciennes colonies. La Guadeloupe, la Martinique, la Guyane et La Réunion sont devenues des départements par la loi du 19 mars 1946, dont le rapporteur était le député martiniquais Aimé Césaire. Mayotte est devenue un département en 2011.",
              ],
            },
            {
              heading: "Des statuts différents",
              paragraphs: [
                "Les cinq DROM (départements et régions d'outre-mer) sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte. Les lois nationales s'y appliquent comme en métropole, avec des adaptations possibles. La Martinique et la Guyane ont fusionné leur département et leur région en une collectivité territoriale unique en 2016.",
                "Les COM (collectivités d'outre-mer), comme la Polynésie française, Saint-Pierre-et-Miquelon ou Wallis-et-Futuna, ont une autonomie plus large : elles fixent elles-mêmes certaines règles. La Nouvelle-Calédonie a un statut particulier : après l'accord de Nouméa (1998), trois référendums (2018, 2020, 2021) ont rejeté l'indépendance, mais son avenir institutionnel reste en discussion.",
                "Au sein de l'Union européenne, les DROM et Saint-Martin sont des régions ultrapériphériques (RUP) : ils font partie de l'UE et reçoivent des aides adaptées. Les autres territoires sont associés à l'UE sans en faire pleinement partie.",
              ],
              box: { label: "Repère", text: "Les cinq DROM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte. 1946 : loi de départementalisation des quatre « vieilles colonies ». 2011 : Mayotte devient le 101e département." },
            },
            {
              heading: "Des contraintes fortes",
              paragraphs: [
                "L'éloignement est la première contrainte : La Réunion est à environ 9 000 km de Paris, la Polynésie française à plus de 15 000 km. Presque tout ce qui est importé arrive par avion ou par bateau, ce qui renchérit les prix : la vie y est plus chère qu'en métropole. L'insularité, pour la plupart de ces territoires, limite l'espace disponible et rend coûteux les équipements.",
                "Les risques naturels sont nombreux : cyclones (Irma à Saint-Martin et Saint-Barthélemy en 2017, Chido à Mayotte en décembre 2024), séismes, volcans actifs (la Soufrière en Guadeloupe, le Piton de la Fournaise à La Réunion, la montagne Pelée en Martinique, dont l'éruption détruisit Saint-Pierre en 1902). S'y ajoutent des pollutions, comme le chlordécone, un pesticide utilisé dans les bananeraies des Antilles jusqu'en 1993.",
                "Le développement reste en retard sur la moyenne nationale : le chômage y est nettement plus élevé, parfois plus du double ; la pauvreté touche une part importante de la population, surtout à Mayotte et en Guyane, où la population est jeune et augmente vite. Les économies dépendent beaucoup des transferts de l'État et des importations venues de métropole.",
              ],
            },
            {
              heading: "Des atouts et des politiques adaptées",
              paragraphs: [
                "Ces territoires sont des atouts pour la France. Grâce à eux, la France possède une zone économique exclusive (ZEE) de plus de 10 millions de km², l'une des deux plus vastes du monde, dont plus de 95 % se situe outre-mer. Ils offrent une biodiversité exceptionnelle (forêt amazonienne de Guyane, récifs coralliens), un potentiel touristique et une présence française sur tous les océans. Le Centre spatial guyanais de Kourou, créé en 1964, permet le lancement des fusées européennes Ariane grâce à sa position proche de l'équateur.",
                "Les politiques d'aménagement cherchent à rattraper les retards : construction de logements, d'écoles et d'hôpitaux, amélioration de l'accès à l'eau, aides à la mobilité au nom de la continuité territoriale (aides au billet d'avion), soutien aux entreprises. L'Union européenne contribue fortement à leur financement au titre des régions ultrapériphériques.",
              ],
              box: { label: "À retenir", text: "Les territoires ultramarins cumulent des contraintes (éloignement, insularité, risques, chômage, vie chère) et des atouts (ZEE, biodiversité, base spatiale, tourisme). Leur aménagement est une problématique spécifique, conduite par l'État, les collectivités et l'Union européenne." },
            },
          ],
          keyPoints: [
            "L'outre-mer : territoires français hors d'Europe, dans l'Atlantique, l'océan Indien et le Pacifique, plus de 2,5 millions d'habitants.",
            "Cinq DROM : Guadeloupe, Martinique, Guyane, La Réunion (départements depuis 1946) et Mayotte (depuis 2011).",
            "Les COM ont plus d'autonomie ; la Nouvelle-Calédonie a un statut particulier.",
            "Contraintes : éloignement, insularité, vie chère, risques naturels, chômage élevé, dépendance envers la métropole.",
            "Atouts : ZEE de plus de 10 millions de km², biodiversité, tourisme, Centre spatial guyanais à Kourou.",
            "Les DROM et Saint-Martin sont des régions ultrapériphériques de l'UE, qui reçoivent des aides spécifiques.",
          ],
          example: {
            statement: "Montrez, à l'aide de deux arguments et de deux arguments contraires, que les territoires ultramarins sont à la fois des territoires en difficulté et des atouts pour la France.",
            solution: [
              "Rappeler ce que sont les territoires ultramarins : des territoires français situés hors d'Europe, comme La Réunion, la Guyane ou la Polynésie française.",
              "Première difficulté : l'éloignement de la métropole renchérit les importations ; la vie y est plus chère qu'en métropole.",
              "Deuxième difficulté : le chômage y est nettement plus élevé et les risques naturels nombreux (cyclone Chido à Mayotte en 2024).",
              "Premier atout : ces territoires donnent à la France une ZEE de plus de 10 millions de km², l'une des plus vastes du monde.",
              "Deuxième atout : la Guyane accueille le Centre spatial de Kourou, d'où partent les fusées européennes.",
              "Conclure : ces territoires sont à la fois fragiles et précieux, d'où une politique d'aménagement spécifique menée par l'État, les collectivités et l'Union européenne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les territoires suivants selon l'océan ou le continent où ils se trouvent : Martinique, La Réunion, Polynésie française, Guyane, Mayotte, Nouvelle-Calédonie, Guadeloupe. Puis soulignez ceux qui sont des DROM.",
              hint: "Trois espaces suffisent : l'Atlantique et l'Amérique, l'océan Indien, l'océan Pacifique. Les DROM sont au nombre de cinq.",
              solution: [
                "Océan Atlantique et Amérique : Martinique, Guadeloupe (Antilles) et Guyane (Amérique du Sud).",
                "Océan Indien : La Réunion et Mayotte.",
                "Océan Pacifique : Polynésie française et Nouvelle-Calédonie.",
                "Les DROM de cette liste sont : Martinique, Guadeloupe, Guyane, La Réunion et Mayotte.",
                "La Polynésie française (COM) et la Nouvelle-Calédonie (statut particulier) ne sont pas des DROM.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quelques lignes pourquoi les prix sont plus élevés dans les territoires ultramarins qu'en métropole, puis citez une mesure prise au nom de la continuité territoriale.",
              hint: "Pensez à l'origine des produits vendus dans les magasins et au moyen par lequel ils arrivent.",
              solution: [
                "La plupart de ces territoires sont des îles éloignées de plusieurs milliers de kilomètres de la métropole.",
                "Ils produisent peu de biens sur place : une grande partie des produits est importée, souvent de métropole, par bateau ou par avion.",
                "Le transport, le stockage et les taxes à l'entrée s'ajoutent au prix, et le petit nombre d'entreprises limite la concurrence : la vie est donc plus chère.",
                "Au nom de la continuité territoriale, l'État aide les habitants à se déplacer vers la métropole, par exemple en finançant une partie des billets d'avion des étudiants.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, montrez que les territoires ultramarins posent une problématique spécifique d'aménagement. Vous présenterez leurs contraintes, leurs atouts, puis les politiques menées.",
              hint: "Trois paragraphes : contraintes (éloignement, insularité, risques, retard de développement), atouts (ZEE, biodiversité, Kourou), politiques (État, collectivités, UE et RUP).",
              solution: [
                "Introduction : la France possède des territoires ultramarins dans tous les océans, comme la Guadeloupe, La Réunion ou la Polynésie française. Ils posent une problématique d'aménagement différente de celle de la métropole.",
                "Paragraphe 1 : ces territoires subissent l'éloignement (La Réunion est à environ 9 000 km de Paris) et souvent l'insularité, d'où une vie plus chère. Les risques naturels y sont forts : cyclones, volcans actifs comme le Piton de la Fournaise. Le chômage et la pauvreté y sont plus élevés qu'en métropole.",
                "Paragraphe 2 : ils sont pourtant des atouts. Ils donnent à la France une ZEE de plus de 10 millions de km², une biodiversité exceptionnelle et une présence sur tous les océans ; la Guyane accueille le Centre spatial de Kourou.",
                "Paragraphe 3 : l'État et les collectivités investissent dans le logement, l'eau, la santé et les transports, et aident la mobilité au nom de la continuité territoriale. Les DROM, régions ultrapériphériques de l'Union européenne, reçoivent des fonds européens.",
                "Conclusion : l'aménagement de l'outre-mer cherche à réduire de fortes inégalités avec la métropole tout en valorisant des atouts essentiels pour la France.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'outre-mer.",
            statements: [
              { text: "Mayotte est un département français depuis 2011.", true: true, why: "Mayotte est devenue le 101e département français en 2011." },
              { text: "La Guyane est une île des Antilles.", true: false, why: "La Guyane est située sur le continent sud-américain, entre le Suriname et le Brésil." },
              { text: "Les territoires ultramarins permettent à la France d'avoir l'une des plus vastes ZEE du monde.", true: true, why: "Plus de 95 % de la ZEE française, qui dépasse 10 millions de km², se situe outre-mer." },
              { text: "Le chômage est plus faible outre-mer qu'en métropole.", true: false, why: "Le chômage y est au contraire nettement plus élevé, parfois plus du double de la moyenne nationale." },
              { text: "La Polynésie française est un DROM.", true: false, why: "La Polynésie française est une collectivité d'outre-mer (COM), dotée d'une large autonomie." },
              { text: "Les fusées Ariane sont lancées depuis la Guyane.", true: true, why: "Le Centre spatial guyanais de Kourou, proche de l'équateur, est la base de lancement européenne." },
              { text: "Les DROM ne font pas partie de l'Union européenne.", true: false, why: "Les DROM sont des régions ultrapériphériques : ils font partie de l'UE et reçoivent des aides adaptées." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces territoires n'est pas un DROM ?",
              options: [
                "La Martinique",
                "La Réunion",
                "La Nouvelle-Calédonie",
                "Mayotte",
              ],
              answer: 2,
              why: "La Nouvelle-Calédonie a un statut particulier ; les cinq DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte.",
            },
            {
              q: "En quelle année la Guadeloupe, la Martinique, la Guyane et La Réunion deviennent-elles des départements ?",
              options: [
                "1946",
                "1958",
                "1982",
                "2011",
              ],
              answer: 0,
              why: "La loi de départementalisation du 19 mars 1946 transforme ces quatre anciennes colonies en départements ; 2011 est la date de Mayotte.",
            },
            {
              q: "Pourquoi la vie est-elle plus chère outre-mer ?",
              options: [
                "Parce que les salaires y sont partout plus élevés qu'en métropole",
                "Parce que beaucoup de produits sont importés de loin",
                "Parce que l'euro n'y est pas utilisé",
              ],
              answer: 1,
              why: "L'éloignement oblige à importer une grande partie des produits par bateau ou par avion, ce qui augmente les prix.",
            },
            {
              q: "Quel atout la Guyane apporte-t-elle à la France et à l'Europe ?",
              options: [
                "De grands gisements de charbon exploités pour la métropole",
                "Le principal port de commerce français",
                "Une grande station de sports d'hiver",
                "Une base de lancement spatial proche de l'équateur",
              ],
              answer: 3,
              why: "Le Centre spatial guyanais de Kourou, créé en 1964, bénéficie de sa position proche de l'équateur pour lancer les fusées européennes.",
            },
            {
              q: "Que signifie le statut de région ultrapériphérique (RUP) ?",
              options: [
                "Il est devenu indépendant mais continue d'utiliser l'euro",
                "Le territoire n'a plus de lien avec la France",
                "Il fait partie de l'UE et reçoit des aides adaptées",
              ],
              answer: 2,
              why: "Les RUP, comme les DROM et Saint-Martin, appartiennent pleinement à l'Union européenne, qui tient compte de leurs contraintes particulières.",
            },
          ],
          trap: "Mettre tous les territoires ultramarins dans le même sac : les DROM, les COM et la Nouvelle-Calédonie n'ont pas le même statut, et il ne faut présenter ni seulement leurs difficultés, ni seulement leurs atouts.",
          method: "Sur un planisphère vierge, placez de mémoire les territoires ultramarins et écrivez à côté de chacun une contrainte et un atout ; vérifiez avec le cours, puis recommencez deux jours plus tard.",
        },
      ],
    },
    /* ==================================================================== */
    /* EMC, FAIRE VIVRE LA DÉMOCRATIE : L'OPINION                            */
    /* ==================================================================== */
    {
      id: 'opinion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'medias-reseaux-sociaux',
          title: "Médias et réseaux sociaux : comment se forme l'opinion",
          minutes: 25,
          objectives: [
            "Expliquer le rôle des médias et de la liberté de la presse dans une démocratie.",
            "Distinguer un média d'information et un réseau social, et identifier le rôle des algorithmes.",
            "Identifier une source et évaluer sa fiabilité avant de se forger une opinion.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une opinion ?",
              paragraphs: [
                "Une opinion est une manière de penser, un jugement personnel sur une question : une loi, un événement, une personnalité. Elle se distingue d'un fait, qui peut être vérifié (« il a plu hier à Lyon ») ; l'opinion, elle, se discute (« cette loi est injuste »).",
                "Personne ne forme son opinion seul : la famille, les amis, l'école, les médias et aujourd'hui les réseaux sociaux l'influencent. En démocratie, chacun a le droit d'avoir et d'exprimer ses opinions, et le débat entre opinions différentes permet de prendre des décisions collectives.",
              ],
              box: { label: "Repère", text: "Déclaration des droits de l'homme et du citoyen de 1789, article 11 : la libre communication des pensées et des opinions est « un des droits les plus précieux de l'Homme », chacun devant répondre de l'abus de cette liberté dans les cas prévus par la loi." },
            },
            {
              heading: "Les médias, un pilier de la démocratie",
              paragraphs: [
                "Un média est un moyen de diffuser de l'information à un large public : presse écrite, radio, télévision, sites d'information. Les journalistes recherchent, vérifient et hiérarchisent l'information : ils recoupent leurs sources (ils confirment une information auprès de plusieurs sources indépendantes) et distinguent les faits des commentaires. Leurs devoirs sont rappelés dans la Charte de Munich (1971).",
                "En France, la loi du 29 juillet 1881 garantit la liberté de la presse : chacun peut publier un journal sans autorisation préalable. Cette liberté a des limites fixées par la loi : la diffamation, l'injure, l'incitation à la haine ou l'apologie du terrorisme sont punies. Le pluralisme des médias, c'est-à-dire l'existence de médias nombreux et indépendants exprimant des points de vue variés, est indispensable au débat. L'Arcom, autorité indépendante, veille notamment au respect du pluralisme à la radio et à la télévision.",
              ],
            },
            {
              heading: "Les réseaux sociaux et leurs algorithmes",
              paragraphs: [
                "Un réseau social (Instagram, TikTok, YouTube, X, Snapchat...) permet à chacun de publier et de partager des contenus. Ce n'est pas un média au sens strict : la plupart des contenus n'y sont pas vérifiés avant d'être publiés, et n'importe qui peut y diffuser une information, vraie ou fausse.",
                "Ce que vous voyez sur un réseau social est choisi par un algorithme, un programme qui sélectionne les contenus susceptibles de vous retenir le plus longtemps, d'après vos clics, vos « j'aime » et votre temps de visionnage. Les plateformes gagnent de l'argent grâce à la publicité : plus vous restez, plus elles en vendent. Les contenus qui provoquent des émotions fortes (colère, peur, indignation) sont souvent les plus mis en avant.",
                "Ce fonctionnement peut vous enfermer dans une bulle de filtre : vous ne voyez plus que des contenus qui confirment ce que vous pensez déjà. Dans une chambre d'écho, un groupe de personnes qui pensent la même chose renforcent mutuellement leurs certitudes. Le règlement européen sur les services numériques (DSA) oblige désormais les grandes plateformes à lutter contre les contenus illicites et à expliquer leurs algorithmes.",
              ],
              box: { label: "Définition", text: "Un algorithme de recommandation est un programme qui choisit les contenus montrés à chaque utilisateur selon son comportement passé. Une bulle de filtre est la situation où l'utilisateur ne voit plus que des contenus proches de ses goûts et de ses opinions." },
            },
            {
              heading: "Se forger une opinion éclairée",
              paragraphs: [
                "Pour se forger une opinion personnelle et argumentée, il faut d'abord s'informer à plusieurs sources, de préférence des médias d'information identifiés. Devant un contenu, posez-vous trois questions : qui parle (un journaliste, une institution, un anonyme, un influenceur payé par une marque) ? D'où vient l'information (une source est-elle citée) ? Quand a-t-elle été publiée ?",
                "Il faut aussi distinguer un article d'information (qui rapporte des faits) d'un éditorial ou d'une tribune (qui défend une opinion) et d'un contenu sponsorisé (une publicité). S'exposer volontairement à des points de vue différents du sien est le meilleur moyen de sortir de sa bulle et de débattre de façon respectueuse.",
              ],
            },
          ],
          keyPoints: [
            "Un fait se vérifie, une opinion se discute ; en démocratie, chacun peut exprimer ses opinions dans le cadre de la loi.",
            "La liberté de la presse est garantie par la loi du 29 juillet 1881 ; diffamation, injure et incitation à la haine sont punies.",
            "Les journalistes vérifient et recoupent leurs sources ; le pluralisme des médias est indispensable au débat démocratique.",
            "Sur les réseaux sociaux, un algorithme choisit les contenus pour retenir l'attention, ce qui peut créer une bulle de filtre.",
            "Pour s'informer : qui parle, d'où vient l'information, quand a-t-elle été publiée ? Croiser plusieurs sources.",
          ],
          example: {
            statement: "Sami ne s'informe que par les vidéos que lui propose un réseau social. Il remarque qu'il voit toujours le même genre de contenus et qu'ils confirment tous son avis. Expliquez-lui ce qui se passe et ce qu'il pourrait faire.",
            solution: [
              "Identifier le mécanisme : les vidéos sont choisies par un algorithme de recommandation, qui analyse ce que Sami regarde, aime et partage.",
              "Expliquer le but de l'algorithme : retenir Sami le plus longtemps possible, car la plateforme vit de la publicité ; il lui propose donc des contenus proches de ceux qu'il a aimés.",
              "Nommer la conséquence : Sami est dans une bulle de filtre ; il ne voit plus que des contenus qui confirment ses opinions, ce qui l'empêche de connaître d'autres points de vue.",
              "Proposer des solutions : consulter des médias d'information identifiés, comparer plusieurs sources, chercher volontairement des avis différents et vérifier qui publie chaque contenu.",
              "Conclure : en diversifiant ses sources, Sami pourra se forger une opinion personnelle et éclairée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des phrases suivantes, indiquez s'il s'agit d'un fait ou d'une opinion : a) « Le collège a 650 élèves. » b) « Ce film est le meilleur de l'année. » c) « La loi sur la liberté de la presse date de 1881. » d) « Les réseaux sociaux rendent les jeunes moins curieux. » e) « Il a fait 32 °C à Marseille le 14 juillet. »",
              hint: "Demandez-vous si l'on peut vérifier la phrase par une mesure ou un document, ou si elle exprime un jugement que l'on peut discuter.",
              solution: [
                "a) Fait : le nombre d'élèves peut être vérifié auprès du collège.",
                "b) Opinion : « le meilleur » est un jugement personnel.",
                "c) Fait : la date de la loi se vérifie dans les textes officiels.",
                "d) Opinion : c'est un jugement général qui se discute et demanderait des preuves.",
                "e) Fait : la température se vérifie auprès d'un service météorologique.",
                "Résultat : a, c et e sont des faits ; b et d sont des opinions.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi un réseau social diffère d'un journal d'information, en comparant trois critères : qui publie, si l'information est vérifiée avant publication, et comment les contenus sont choisis pour le lecteur.",
              hint: "Pensez au travail des journalistes et au rôle des algorithmes.",
              solution: [
                "Qui publie : dans un journal, ce sont des journalistes identifiés, sous la responsabilité d'un directeur de la publication ; sur un réseau social, n'importe quel utilisateur peut publier, parfois anonymement.",
                "Vérification : le journaliste vérifie et recoupe ses sources avant publication ; sur un réseau social, la plupart des contenus sont publiés sans vérification préalable.",
                "Choix des contenus : dans un journal, la rédaction hiérarchise l'information selon son importance ; sur un réseau social, un algorithme choisit les contenus selon le comportement de chaque utilisateur.",
                "Conclusion : un réseau social peut relayer des informations utiles, mais il ne remplace pas un média d'information ; il faut y vérifier l'origine de chaque contenu.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet) : votre classe prépare une émission de radio du collège sur le thème « Les réseaux sociaux nous informent-ils vraiment ? ». Rédigez une courte argumentation (une quinzaine de lignes) qui présente les avantages et les risques des réseaux sociaux pour s'informer, puis trois conseils à donner aux auditeurs.",
              hint: "Faites deux colonnes avant de rédiger : avantages (rapidité, témoignages, diversité) et risques (absence de vérification, algorithmes, bulles de filtre, émotions). Reliez vos conseils à la vérification des sources.",
              solution: [
                "Introduction : de nombreux jeunes s'informent d'abord sur les réseaux sociaux ; il est utile de se demander si ce sont de bonnes sources d'information.",
                "Avantages : l'information y circule très vite ; on peut y voir des témoignages directs d'événements ; les médias d'information y publient aussi leurs contenus.",
                "Risques : les contenus ne sont pas vérifiés avant publication ; l'algorithme met en avant ce qui retient l'attention, souvent les contenus qui choquent, et peut enfermer dans une bulle de filtre ; de fausses informations s'y diffusent rapidement.",
                "Conseil 1 : vérifiez qui publie le contenu et s'il cite une source.",
                "Conseil 2 : recoupez l'information avec au moins un média d'information reconnu.",
                "Conseil 3 : suivez des comptes aux points de vue variés pour sortir de votre bulle.",
                "Conclusion : les réseaux sociaux peuvent informer, à condition de les utiliser avec esprit critique ; la liberté d'expression implique aussi la responsabilité de ne pas partager n'importe quoi.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Pluralisme des médias", right: "Existence de médias nombreux, indépendants et aux points de vue variés" },
              { left: "Recouper ses sources", right: "Confirmer une information auprès de plusieurs sources indépendantes" },
              { left: "Algorithme de recommandation", right: "Programme qui choisit les contenus montrés à chaque utilisateur" },
              { left: "Bulle de filtre", right: "Situation où l'on ne voit plus que des contenus proches de ses opinions" },
              { left: "Loi du 29 juillet 1881", right: "Texte qui garantit la liberté de la presse en France" },
              { left: "Contenu sponsorisé", right: "Publication payée par une marque pour faire sa promotion" },
            ],
          },
          quiz: [
            {
              q: "Quelle phrase exprime une opinion ?",
              options: [
                "La France compte treize régions métropolitaines",
                "Les élections municipales ont lieu tous les six ans",
                "Ce journal est trop critique envers le gouvernement",
              ],
              answer: 2,
              why: "Un jugement comme « trop critique » se discute ; les deux autres phrases sont des faits vérifiables.",
            },
            {
              q: "Quelle loi garantit la liberté de la presse en France ?",
              options: [
                "La loi du 1er juillet 1901",
                "La loi du 29 juillet 1881",
                "La loi du 9 décembre 1905",
                "La Constitution de 1946",
              ],
              answer: 1,
              why: "La loi du 29 juillet 1881 fonde la liberté de la presse ; celle de 1901 porte sur les associations et celle de 1905 sur la séparation des Églises et de l'État.",
            },
            {
              q: "Comment un réseau social choisit-il les contenus qu'il vous montre ?",
              options: [
                "Un algorithme les sélectionne d'après votre comportement",
                "Des journalistes les classent un par un selon leur importance",
                "L'État décide chaque jour de ce qui doit être vu",
              ],
              answer: 0,
              why: "L'algorithme de recommandation analyse vos clics, vos « j'aime » et votre temps de visionnage pour vous retenir le plus longtemps possible.",
            },
            {
              q: "Que fait un journaliste lorsqu'il recoupe ses sources ?",
              options: [
                "Il coupe les passages trop longs d'un article",
                "Il ne garde que la source la plus connue",
                "Il publie l'information dès qu'il la reçoit, pour être le premier à la donner",
                "Il confirme l'information auprès de plusieurs sources indépendantes",
              ],
              answer: 3,
              why: "Recouper, c'est vérifier qu'une information est confirmée par plusieurs sources qui ne dépendent pas les unes des autres.",
            },
            {
              q: "Pourquoi le pluralisme des médias est-il important en démocratie ?",
              options: [
                "Il garantit que tous les médias racontent exactement la même chose",
                "Il permet aux citoyens de connaître des points de vue différents",
                "Il interdit aux journalistes de donner leur avis",
              ],
              answer: 1,
              why: "Le pluralisme permet la confrontation des idées, nécessaire pour que chaque citoyen forme librement son opinion.",
            },
          ],
          trap: "Confondre une information et une opinion, ou croire qu'un contenu très partagé sur un réseau social est forcément vrai : le nombre de vues ne prouve rien.",
          method: "Avant de partager ou de citer un contenu, prenez l'habitude des trois questions : qui parle, d'où vient l'information, quand a-t-elle été publiée ? Au brevet, ces trois critères structurent aussi l'analyse d'un document.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sondages-opinion-publique',
          title: "Les sondages et l'opinion publique",
          minutes: 25,
          objectives: [
            "Définir l'opinion publique et expliquer le rôle des sondages dans une démocratie.",
            "Expliquer comment un sondage est réalisé : échantillon représentatif, méthode des quotas, marge d'erreur.",
            "Lire un sondage avec esprit critique en repérant les informations indispensables.",
          ],
          course: [
            {
              heading: "L'opinion publique",
              paragraphs: [
                "L'opinion publique désigne l'ensemble des opinions partagées par une partie importante de la population sur une question d'intérêt général : une réforme, une guerre, une élection. Elle n'est pas unanime : elle est faite de courants majoritaires et minoritaires, et elle évolue avec le temps et les événements.",
                "En démocratie, les gouvernants doivent tenir compte de l'opinion publique, car ils sont élus par les citoyens et doivent rendre des comptes. L'opinion s'exprime de plusieurs manières : par le vote, bien sûr, mais aussi par les manifestations, les pétitions, les débats dans les médias et les sondages.",
              ],
              box: { label: "Définition", text: "L'opinion publique est l'ensemble des jugements et des idées partagés par une partie importante de la population sur une question d'intérêt général à un moment donné." },
            },
            {
              heading: "Comment fait-on un sondage ?",
              paragraphs: [
                "Un sondage d'opinion est une enquête qui interroge un petit nombre de personnes, l'échantillon, pour connaître l'opinion d'une population entière. On ne peut pas interroger les 49 millions d'électeurs : on en interroge souvent environ 1 000.",
                "Pour que le résultat soit fiable, l'échantillon doit être représentatif, c'est-à-dire ressembler à la population étudiée. En France, les instituts utilisent surtout la méthode des quotas : l'échantillon doit compter la même proportion de femmes et d'hommes, de chaque tranche d'âge, de chaque catégorie professionnelle et de chaque région que la population totale. Une analogie : pour savoir si une soupe est assez salée, il suffit d'en goûter une cuillère, à condition de bien la mélanger.",
                "Un sondage donne une estimation, pas une certitude. Il comporte une marge d'erreur : pour un échantillon de 1 000 personnes, un résultat de 50 % signifie que la vraie valeur se situe, très probablement, entre 47 % et 53 % environ. Un sondage est aussi une photographie à un instant donné : l'opinion peut changer ensuite.",
              ],
              box: { label: "Règle", text: "Un sondage fiable repose sur un échantillon représentatif. Son résultat est une estimation, avec une marge d'erreur d'environ 3 points pour 1 000 personnes interrogées." },
            },
            {
              heading: "Lire un sondage avec esprit critique",
              paragraphs: [
                "Avant d'utiliser un sondage, il faut vérifier qui l'a réalisé (l'institut), qui l'a commandé et payé (le commanditaire : un journal, un parti, une entreprise), combien de personnes ont été interrogées, à quelles dates, et selon quelle méthode. La loi impose de publier ces informations avec les sondages électoraux, ainsi que la marge d'erreur.",
                "La formulation de la question compte beaucoup : « Êtes-vous favorable à une baisse des impôts ? » et « Êtes-vous favorable à une baisse des impôts, même si elle entraîne la fermeture d'écoles ? » ne donnent pas les mêmes réponses. Un sondage en ligne ouvert à tous, où n'importe qui peut cliquer, n'est pas un sondage scientifique : son public n'est pas représentatif.",
              ],
            },
            {
              heading: "Les sondages en démocratie : utiles mais encadrés",
              paragraphs: [
                "Les sondages informent les citoyens et les responsables politiques sur l'état de l'opinion. Mais ils peuvent aussi l'influencer : un électeur peut changer son vote parce qu'un candidat paraît gagnant ou perdant. Ils se trompent parfois : en 2002, les sondages n'avaient pas prévu la présence de Jean-Marie Le Pen au second tour de l'élection présidentielle.",
                "C'est pourquoi la loi du 19 juillet 1977 encadre les sondages électoraux et a créé la Commission des sondages, qui contrôle leur sérieux. Il est interdit de publier un sondage électoral la veille et le jour du scrutin. Surtout, un sondage ne remplace jamais une élection : seul le vote des citoyens a une valeur légale.",
              ],
              box: { label: "Repère", text: "1977 : loi encadrant les sondages électoraux et création de la Commission des sondages. Interdiction de publier un sondage électoral la veille et le jour du vote." },
            },
          ],
          keyPoints: [
            "L'opinion publique : idées partagées par une grande partie de la population sur une question d'intérêt général ; elle évolue.",
            "Un sondage interroge un échantillon (souvent environ 1 000 personnes) pour estimer l'opinion de toute une population.",
            "L'échantillon doit être représentatif ; en France, on utilise surtout la méthode des quotas (sexe, âge, profession, région).",
            "Tout sondage a une marge d'erreur (environ 3 points pour 1 000 personnes) et n'est qu'une photographie à un moment donné.",
            "La loi de 1977 et la Commission des sondages encadrent les sondages électoraux ; publication interdite la veille et le jour du vote.",
            "Un sondage ne remplace jamais une élection.",
          ],
          example: {
            statement: "Un journal titre : « 52 % des Français soutiennent le candidat A contre 48 % pour le candidat B. Le candidat A est sûr de gagner. » Le sondage a été réalisé auprès de 1 000 personnes. Ce titre est-il justifié ?",
            solution: [
              "Rappeler qu'un sondage auprès de 1 000 personnes a une marge d'erreur d'environ 3 points.",
              "Appliquer la marge au candidat A : son score réel se situe probablement entre 49 % et 55 % environ.",
              "Appliquer la marge au candidat B : son score réel se situe probablement entre 45 % et 51 % environ.",
              "Constater que les deux intervalles se chevauchent : B pourrait en réalité être devant A.",
              "Ajouter que le sondage est une photographie à un instant donné : l'opinion peut évoluer d'ici au vote.",
              "Conclure : le titre n'est pas justifié ; il faudrait écrire que A est légèrement en tête, sans certitude.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un sondage est publié avec les mentions suivantes : « Enquête réalisée par l'institut X pour le journal Y, du 3 au 5 mars, auprès d'un échantillon de 1 002 personnes représentatif de la population française âgée de 18 ans et plus, selon la méthode des quotas. » Relevez : a) l'institut ; b) le commanditaire ; c) la taille de l'échantillon ; d) la méthode ; e) la période de l'enquête.",
              hint: "Le commanditaire est celui « pour » qui le sondage est réalisé.",
              solution: [
                "a) L'institut est l'institut X, qui a réalisé l'enquête.",
                "b) Le commanditaire est le journal Y, qui a commandé le sondage.",
                "c) L'échantillon compte 1 002 personnes.",
                "d) La méthode est celle des quotas, qui rend l'échantillon représentatif des Français de 18 ans et plus.",
                "e) L'enquête a eu lieu du 3 au 5 mars.",
              ],
            },
            {
              level: 2,
              statement: "Un site internet organise un « grand sondage » : 25 000 internautes ont cliqué, et 80 % se disent favorables à la suppression des devoirs. Un camarade affirme : « 25 000 personnes, c'est bien plus que 1 000, donc c'est plus fiable qu'un vrai sondage. » A-t-il raison ? Justifiez.",
              hint: "Ce qui compte n'est pas seulement le nombre de personnes interrogées, mais qui elles sont.",
              solution: [
                "La fiabilité d'un sondage dépend d'abord de la représentativité de l'échantillon, pas seulement de sa taille.",
                "Ici, ce sont les internautes qui ont choisi de répondre : ceux qui visitent ce site et qui s'intéressent au sujet, sans doute surtout des élèves.",
                "Leur profil (âge, situation) ne ressemble pas à celui de la population, et une même personne a peut-être cliqué plusieurs fois.",
                "Un sondage scientifique de 1 000 personnes choisies par la méthode des quotas est donc plus fiable.",
                "Conclusion : le camarade a tort ; ce « grand sondage » n'est pas représentatif.",
              ],
            },
            {
              level: 3,
              statement: "Question de réflexion (type brevet) : « Les sondages sont-ils utiles à la démocratie ? » Rédigez une réponse argumentée d'une quinzaine de lignes, avec au moins deux arguments pour, deux limites et un exemple.",
              hint: "Pensez à ce que les sondages apportent (information, prise en compte de l'opinion), à leurs risques (influence, erreurs, formulation) et à la manière dont la loi les encadre.",
              solution: [
                "Introduction : un sondage interroge un échantillon représentatif pour connaître l'opinion publique. Sa place dans la vie démocratique fait débat.",
                "Argument 1 : les sondages informent les citoyens et les gouvernants sur l'état de l'opinion entre deux élections.",
                "Argument 2 : ils permettent aux responsables politiques de tenir compte des attentes de la population sur des sujets précis.",
                "Limite 1 : ce ne sont que des estimations, avec une marge d'erreur ; ils peuvent se tromper, comme en 2002, quand ils n'avaient pas prévu la présence de Jean-Marie Le Pen au second tour de l'élection présidentielle.",
                "Limite 2 : ils peuvent influencer les électeurs, et la formulation des questions peut orienter les réponses.",
                "C'est pourquoi la loi de 1977 les encadre, avec la Commission des sondages et l'interdiction de publication la veille et le jour du vote.",
                "Conclusion : les sondages sont utiles s'ils sont lus avec esprit critique, mais ils ne remplacent jamais le vote, seule expression légale de la volonté des citoyens.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ne vous laissez pas piéger par les sondages.",
            statements: [
              { text: "Un sondage interroge toute la population.", true: false, why: "Il interroge un échantillon, souvent environ 1 000 personnes, pour estimer l'opinion de toute la population." },
              { text: "Un échantillon doit ressembler à la population étudiée.", true: true, why: "C'est la condition de la fiabilité : l'échantillon doit être représentatif." },
              { text: "Plus il y a de réponses à un vote en ligne, plus il est fiable.", true: false, why: "Un vote en ligne n'est pas représentatif : seuls les internautes intéressés répondent, parfois plusieurs fois." },
              { text: "Un sondage comporte toujours une marge d'erreur.", true: true, why: "Le résultat est une estimation ; avec 1 000 personnes, la marge est d'environ 3 points." },
              { text: "On peut publier un sondage électoral le jour du vote.", true: false, why: "La loi interdit de publier un sondage électoral la veille et le jour du scrutin." },
              { text: "La façon de poser la question peut changer les réponses.", true: true, why: "Une question orientée ou incomplète influence les personnes interrogées." },
              { text: "Un sondage a la même valeur légale qu'une élection.", true: false, why: "Seul le vote a une valeur légale ; un sondage n'est qu'une estimation de l'opinion." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un échantillon représentatif ?",
              options: [
                "Un groupe de personnes volontaires qui répondent librement en ligne",
                "Les personnes les plus connues d'un pays",
                "Un groupe qui reproduit en petit la composition de la population",
              ],
              answer: 2,
              why: "Un échantillon représentatif a la même répartition (sexe, âge, profession, région) que la population qu'on veut étudier.",
            },
            {
              q: "Quelle est la marge d'erreur approximative d'un sondage réalisé auprès de 1 000 personnes ?",
              options: [
                "Environ 3 points",
                "Environ 0,1 point",
                "Environ 25 points",
                "Il n'y a aucune marge d'erreur",
              ],
              answer: 0,
              why: "Pour 1 000 personnes, la marge d'erreur est d'environ 3 points autour d'un résultat de 50 %.",
            },
            {
              q: "Quelle méthode les instituts français utilisent-ils surtout pour constituer leurs échantillons ?",
              options: [
                "Le tirage au sort parmi les volontaires d'un site",
                "La méthode des quotas",
                "L'interrogation des seuls électeurs inscrits à un parti",
              ],
              answer: 1,
              why: "La méthode des quotas impose à l'échantillon les mêmes proportions que la population pour plusieurs critères.",
            },
            {
              q: "Quand est-il interdit de publier un sondage électoral en France ?",
              options: [
                "Pendant toute la campagne électorale",
                "Le mois précédant le vote",
                "Il n'existe aucune interdiction",
                "La veille et le jour du scrutin",
              ],
              answer: 3,
              why: "La loi interdit la publication de sondages électoraux la veille et le jour du vote, pour ne pas influencer les électeurs au dernier moment.",
            },
            {
              q: "Quelle information ne fait pas partie de celles à vérifier avant d'utiliser un sondage ?",
              options: [
                "Le nom de l'institut et du commanditaire",
                "La couleur du logo de l'institut",
                "La taille de l'échantillon et les dates de l'enquête",
              ],
              answer: 1,
              why: "On vérifie l'institut, le commanditaire, l'échantillon, les dates et la méthode ; la présentation graphique ne dit rien de la fiabilité.",
            },
          ],
          trap: "Lire un sondage comme un résultat certain, en oubliant la marge d'erreur et la date : un écart de 2 points entre deux candidats dans un sondage de 1 000 personnes ne permet pas de savoir qui est en tête.",
          method: "Pour analyser un sondage, appliquez toujours la même grille : qui l'a fait, pour qui, combien de personnes, quand, quelle question exacte, quelle marge d'erreur. Écrivez ces six points en marge avant de conclure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'desinformation-ia',
          title: "Désinformation, complotisme et intelligence artificielle",
          minutes: 30,
          objectives: [
            "Distinguer une erreur (mésinformation) d'une désinformation volontaire et définir le complotisme.",
            "Expliquer comment l'intelligence artificielle générative peut produire et amplifier de fausses informations.",
            "Appliquer une méthode de vérification d'une information, d'une image ou d'une vidéo.",
            "Identifier les réponses de la loi et des institutions face à la manipulation de l'information.",
          ],
          course: [
            {
              heading: "Mésinformation, désinformation, infox",
              paragraphs: [
                "Une fausse information peut circuler sans mauvaise intention : c'est la mésinformation, par exemple quand quelqu'un partage de bonne foi un message erroné. La désinformation, elle, est la diffusion volontaire d'une information fausse ou trompeuse, dans le but de manipuler l'opinion, de nuire à une personne ou de gagner de l'argent. Le mot infox est l'équivalent français de l'anglais fake news.",
                "La désinformation peut venir de particuliers, de groupes organisés ou même d'États étrangers, qui cherchent à diviser une société ou à influencer une élection. En France, le service Viginum, créé en 2021, est chargé de repérer ces ingérences numériques étrangères.",
              ],
              box: { label: "Définition", text: "La désinformation est la diffusion volontaire d'informations fausses ou trompeuses dans le but de manipuler. La mésinformation est la diffusion d'une information fausse sans intention de tromper." },
            },
            {
              heading: "Le complotisme",
              paragraphs: [
                "Une théorie du complot explique un événement (une épidémie, un attentat, une catastrophe) par l'action secrète d'un groupe puissant qui cacherait la vérité au public. Par exemple, certains affirment encore que les premiers pas de l'homme sur la Lune, en 1969, auraient été filmés en studio, malgré les preuves accumulées depuis.",
                "Le raisonnement complotiste a des traits reconnaissables : il ne laisse aucune place au hasard (« rien n'arrive par hasard »), il présente toute preuve contraire comme une preuve supplémentaire du complot, il s'appuie sur des coïncidences, et il désigne souvent des boucs émissaires. Il est donc impossible à réfuter, ce qui le distingue d'une démarche scientifique ou journalistique.",
                "Le complotisme séduit parce qu'il donne une explication simple à des événements complexes et donne l'impression de détenir un savoir caché. Il profite aussi du biais de confirmation : nous avons tendance à croire plus facilement ce qui confirme nos idées.",
              ],
            },
            {
              heading: "L'intelligence artificielle : de nouveaux risques",
              paragraphs: [
                "L'intelligence artificielle générative permet de fabriquer en quelques secondes des textes, des images, des voix et des vidéos très réalistes. Un hypertrucage (en anglais deepfake) est une image, un son ou une vidéo modifié ou créé par l'IA pour faire dire ou faire à une personne ce qu'elle n'a jamais dit ni fait.",
                "L'IA facilite la désinformation de trois manières : elle produit de faux contenus crédibles à très faible coût ; elle permet de créer des milliers de faux comptes qui publient automatiquement ; enfin, les assistants conversationnels eux-mêmes peuvent se tromper avec assurance et inventer des faits ou des sources. L'IA sert aussi à lutter contre la désinformation, par exemple pour repérer des réseaux de faux comptes.",
              ],
              box: { label: "À retenir", text: "Une image ou une vidéo n'est plus une preuve en soi : avec l'IA, elle peut être entièrement fabriquée. Il faut toujours chercher sa source et la recouper." },
            },
            {
              heading: "Vérifier et se protéger",
              paragraphs: [
                "Face à un contenu douteux, on applique une méthode : identifier la source (qui publie, est-ce un compte connu, est-il fiable ?), vérifier la date, chercher si des médias d'information reconnus relaient la même information, et faire une recherche d'image inversée pour retrouver l'origine d'une photo. Des rubriques de vérification des faits, comme AFP Factuel ou Les Décodeurs du journal Le Monde, examinent les rumeurs qui circulent.",
                "La loi agit aussi. La loi du 22 décembre 2018 relative à la lutte contre la manipulation de l'information permet à un juge de faire retirer rapidement une infox diffusée massivement pendant les trois mois qui précèdent une élection nationale. Au niveau européen, le règlement sur les services numériques (DSA) oblige les grandes plateformes à agir contre les contenus illicites, et le règlement européen sur l'intelligence artificielle, adopté en 2024, impose de signaler les hypertrucages.",
                "Chacun a enfin une responsabilité : ne pas partager un contenu sans l'avoir vérifié, surtout s'il provoque une émotion forte. Partager une infox, même sans le vouloir, contribue à la diffuser.",
              ],
            },
          ],
          keyPoints: [
            "Mésinformation : erreur sans intention de tromper. Désinformation : fausse information diffusée volontairement pour manipuler.",
            "Une théorie du complot attribue un événement à l'action secrète d'un groupe ; elle rejette toute preuve contraire.",
            "L'IA générative fabrique textes, images, voix et vidéos réalistes : les hypertrucages (deepfakes).",
            "Vérifier : la source, la date, le recoupement avec des médias reconnus, la recherche d'image inversée.",
            "La loi de 2018 contre la manipulation de l'information, le DSA et le règlement européen sur l'IA encadrent ces risques.",
            "Ne pas partager un contenu non vérifié, surtout s'il suscite une émotion forte.",
          ],
          example: {
            statement: "Une vidéo circule sur un réseau social : on y voit un ministre annoncer que les vacances d'été sont supprimées. Elle a été partagée des milliers de fois. Décrivez comment vérifier cette information avant de la partager.",
            solution: [
              "Garder son esprit critique : l'information est surprenante et provoque une émotion forte, ce qui est un signal d'alerte.",
              "Identifier la source : qui a publié la vidéo en premier ? S'agit-il d'un compte officiel du gouvernement ou d'un média reconnu, ou d'un compte anonyme ?",
              "Recouper : une annonce aussi importante serait reprise par tous les grands médias d'information et sur le site officiel du ministère ; vérifier s'ils en parlent.",
              "Examiner la vidéo : mouvements des lèvres décalés, voix étrange, détails flous peuvent révéler un hypertrucage fabriqué par l'IA ; consulter les rubriques de vérification des faits.",
              "Conclure : si aucune source fiable ne confirme l'annonce, il s'agit très probablement d'une infox ; il ne faut pas la partager, et l'on peut la signaler à la plateforme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque situation : mésinformation, désinformation ou hypertrucage. a) Votre grand-mère transfère de bonne foi un message affirmant à tort que la mairie distribue des masques gratuits. b) Un site invente un faux scandale sur un candidat pour l'empêcher d'être élu. c) Une vidéo créée par une IA montre une chanteuse célèbre faisant la publicité d'un produit qu'elle n'a jamais soutenu.",
              hint: "Demandez-vous s'il y a une intention de tromper, et si le contenu a été fabriqué par une intelligence artificielle.",
              solution: [
                "a) Mésinformation : l'information est fausse, mais la grand-mère n'a pas l'intention de tromper.",
                "b) Désinformation : le site diffuse volontairement une fausse information pour manipuler les électeurs.",
                "c) Hypertrucage : la vidéo a été fabriquée par une IA pour faire dire à la chanteuse ce qu'elle n'a jamais dit ; c'est aussi une forme de désinformation.",
              ],
            },
            {
              level: 2,
              statement: "Un message affirme : « Les médias ne parlent pas de cette découverte, c'est bien la preuve qu'on nous cache la vérité ! » Montrez en quoi ce raisonnement est typique du complotisme.",
              hint: "Observez comment le message transforme l'absence de preuve en preuve.",
              solution: [
                "Le message transforme l'absence d'information en preuve : si les médias n'en parlent pas, ce serait parce qu'on cache la vérité.",
                "Or, une explication plus simple existe : les médias n'en parlent pas parce que la « découverte » n'a pas été confirmée par des sources fiables.",
                "Ce raisonnement est impossible à réfuter : quoi que fassent les médias, le message pourra toujours y voir la preuve d'un complot.",
                "Il suppose aussi l'existence d'un groupe puissant (« on ») qui cacherait la vérité, sans jamais le prouver.",
                "Conclusion : c'est un raisonnement complotiste ; une affirmation doit être prouvée par celui qui l'avance, avec des sources vérifiables.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet) : à l'approche des élections municipales, une fausse vidéo d'un candidat, créée par une IA, circule dans votre commune. 1) Expliquez en quoi cette situation menace la démocratie. 2) Indiquez les moyens dont disposent la loi et les plateformes pour réagir. 3) Proposez deux actions concrètes que des collégiens peuvent mener.",
              hint: "Reliez la question au droit des électeurs à une information fiable, puis citez la loi de 2018, le DSA et le règlement européen sur l'IA.",
              solution: [
                "1) Le vote suppose que les électeurs se décident à partir d'informations exactes. Une fausse vidéo trompe les électeurs, nuit injustement au candidat et fausse la sincérité du scrutin ; elle porte aussi atteinte à la réputation d'une personne.",
                "2) Les plateformes, obligées par le règlement européen sur les services numériques (DSA), doivent agir contre les contenus illicites signalés ; le règlement européen sur l'IA impose de signaler les hypertrucages. Le candidat peut porter plainte, notamment pour diffamation. La loi de 2018 sur la manipulation de l'information prévoit un retrait rapide par un juge, mais pour les élections nationales.",
                "3) Première action : ne pas partager la vidéo et la signaler à la plateforme.",
                "Deuxième action : préparer avec le professeur documentaliste une affiche ou une courte vidéo pour le collège expliquant comment repérer un hypertrucage et vérifier une source.",
                "Conclusion : lutter contre la désinformation est l'affaire de la loi, des plateformes et de chaque citoyen.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour vérifier un contenu douteux avant de le partager.",
            items: [
              "Repérer le signal d'alerte : l'information est surprenante ou provoque une émotion forte",
              "Identifier la source : qui a publié le contenu en premier ?",
              "Vérifier la date de publication et le contexte",
              "Rechercher si des médias d'information reconnus confirment l'information",
              "Faire une recherche d'image inversée ou consulter une rubrique de vérification des faits",
              "Décider : partager seulement si l'information est confirmée, sinon signaler",
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre mésinformation et désinformation ?",
              options: [
                "La désinformation est toujours diffusée par la télévision publique",
                "Il n'y en a aucune, les deux mots sont synonymes",
                "La mésinformation ne concerne que les images",
                "La désinformation est volontaire, la mésinformation ne l'est pas",
              ],
              answer: 3,
              why: "Les deux diffusent du faux, mais seule la désinformation a l'intention de tromper ou de manipuler.",
            },
            {
              q: "Qu'est-ce qu'un hypertrucage (deepfake) ?",
              options: [
                "Un contenu fabriqué par l'IA qui imite une personne réelle",
                "Une erreur de traduction repérée sur le site officiel d'un ministère",
                "Un logiciel qui protège les données personnelles",
              ],
              answer: 0,
              why: "Un hypertrucage utilise l'IA pour imiter de façon réaliste le visage ou la voix d'une personne.",
            },
            {
              q: "Quel trait caractérise un raisonnement complotiste ?",
              options: [
                "Il cite toujours plusieurs sources vérifiables et indépendantes entre elles",
                "Il accepte de changer d'avis devant une preuve",
                "Il présente toute preuve contraire comme une preuve du complot",
              ],
              answer: 2,
              why: "Le complotisme est irréfutable : toute réfutation est interprétée comme une confirmation que la vérité est cachée.",
            },
            {
              q: "Que permet la loi du 22 décembre 2018 ?",
              options: [
                "Interdire l'accès à tous les réseaux sociaux pendant les périodes électorales",
                "Faire retirer rapidement une infox massive avant une élection nationale",
                "Rendre le vote obligatoire",
                "Créer un ministère de la Vérité",
              ],
              answer: 1,
              why: "Pendant les trois mois précédant une élection nationale, un juge peut ordonner rapidement le retrait d'une infox diffusée massivement.",
            },
            {
              q: "Quel est le meilleur réflexe face à une vidéo choquante non vérifiée ?",
              options: [
                "Ne pas la partager et rechercher sa source",
                "La partager vite pour prévenir ses amis",
                "La commenter pour donner son avis",
              ],
              answer: 0,
              why: "Partager un contenu non vérifié, même pour alerter, contribue à le diffuser ; il faut d'abord vérifier sa source.",
            },
          ],
          trap: "Croire qu'une vidéo ou une photo prouve forcément qu'un événement a eu lieu : avec l'IA, une image peut être entièrement fabriquée. Autre erreur : confondre esprit critique et complotisme, qui doute de tout sauf de lui-même.",
          method: "Mémorisez une méthode courte en quatre mots : source, date, recoupement, image. Appliquez-la à un contenu réel chaque semaine pendant un mois ; elle deviendra un réflexe, utile aussi pour répondre à une situation pratique au brevet.",
        },
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 3 : FRANÇAISES ET FRANÇAIS DANS UNE RÉPUBLIQUE REPENSÉE */
    /* ==================================================================== */
    {
      id: 'republique-repensee',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'refonder-republique',
          title: "1944-1947 : refonder la République, redéfinir la démocratie",
          minutes: 30,
          objectives: [
            "Situer et décrire le rétablissement de la légalité républicaine à la Libération (1944-1946).",
            "Expliquer les nouveaux droits acquis : droit de vote des femmes, Sécurité sociale, nationalisations.",
            "Raconter la naissance de la IVe République et l'adoption de la Constitution de 1946.",
            "Mobiliser les repères chronologiques de la période 1944-1947.",
          ],
          course: [
            {
              heading: "Rétablir la République à la Libération",
              paragraphs: [
                "Pendant l'Occupation, la Résistance a préparé l'après-guerre. Le Conseil national de la Résistance (CNR), créé en 1943 par Jean Moulin, adopte le 15 mars 1944 un programme qui prévoit le retour de la démocratie, le suffrage universel, une protection sociale pour tous et le retour à la nation des grandes richesses économiques.",
                "Le 3 juin 1944, le Comité français de libération nationale devient le Gouvernement provisoire de la République française (GPRF), dirigé par le général de Gaulle. Au fur et à mesure de la Libération, il impose son autorité. Paris est libéré le 25 août 1944. Une ordonnance du 9 août 1944 déclare nuls les actes du régime de Vichy : la légalité républicaine est rétablie.",
                "Le GPRF doit aussi juger ceux qui ont collaboré avec l'occupant : c'est l'épuration. Après une épuration extrajudiciaire (exécutions sommaires, femmes tondues), des tribunaux sont mis en place. Le maréchal Pétain est condamné à mort en 1945, peine commuée en détention à perpétuité ; Pierre Laval est exécuté.",
              ],
              box: { label: "Repère", text: "15 mars 1944 : programme du CNR. 3 juin 1944 : création du GPRF. 25 août 1944 : libération de Paris. 8 mai 1945 : capitulation de l'Allemagne nazie." },
            },
            {
              heading: "Redéfinir la démocratie : de nouveaux droits",
              paragraphs: [
                "Par une ordonnance du 21 avril 1944, signée à Alger, les femmes deviennent électrices et éligibles dans les mêmes conditions que les hommes. Elles votent pour la première fois aux élections municipales du 29 avril 1945, puis aux élections législatives d'octobre 1945, où 33 femmes sont élues députées. Le suffrage universel devient enfin réellement universel.",
                "Les ordonnances d'octobre 1945 créent la Sécurité sociale, mise en place notamment par le ministre communiste Ambroise Croizat et le haut fonctionnaire Pierre Laroque. Elle protège les travailleurs et leurs familles contre les risques de la vie : maladie, accidents du travail, vieillesse ; les allocations familiales sont étendues. Elle est financée par les cotisations des salariés et des employeurs.",
                "L'État prend aussi le contrôle de secteurs clés par des nationalisations : les houillères (mines de charbon), Renault (dont le patron est accusé de collaboration), les grandes banques de dépôt et la Banque de France, puis l'électricité et le gaz avec la création d'EDF et de GDF en 1946. Des comités d'entreprise donnent aux salariés un droit de regard dans les grandes entreprises.",
              ],
              box: { label: "Définition", text: "Une nationalisation est le transfert d'une entreprise privée à l'État, qui en devient propriétaire. L'État-providence désigne un État qui intervient pour protéger les citoyens des risques sociaux (maladie, vieillesse, chômage)." },
            },
            {
              heading: "La naissance de la IVe République",
              paragraphs: [
                "Le 21 octobre 1945, par référendum, les Français (et pour la première fois les Françaises) rejettent à plus de 96 % le retour à la IIIe République et élisent une Assemblée constituante chargée d'écrire une nouvelle constitution. Trois partis dominent : le Parti communiste, la SFIO (socialiste) et le MRP (démocrate-chrétien), qui gouvernent ensemble : c'est le tripartisme.",
                "En désaccord avec les partis, qui veulent une assemblée toute-puissante alors qu'il souhaite un pouvoir exécutif fort, de Gaulle démissionne le 20 janvier 1946. Un premier projet de constitution est rejeté par référendum en mai 1946 ; le second est adopté le 13 octobre 1946. La IVe République est un régime parlementaire, où l'Assemblée nationale domine et où le président de la République a surtout un rôle de représentation.",
                "Son préambule proclame de nouveaux droits économiques et sociaux : droit à l'emploi, droit de grève, liberté syndicale, droit à la santé et à l'instruction. Il affirme que « la loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme ». Ce préambule fait toujours partie de notre droit, car la Constitution de 1958 y renvoie.",
              ],
            },
            {
              heading: "1947 : la fin de l'unité de la Libération",
              paragraphs: [
                "En janvier 1947, Vincent Auriol devient le premier président de la IVe République. Mais l'unité née de la Résistance se brise : en mai 1947, dans le contexte du début de la guerre froide, les ministres communistes sont exclus du gouvernement. Le tripartisme prend fin.",
                "En trois ans, la France a donc rétabli la République et redéfini la démocratie : elle est désormais plus politique (vote des femmes) et plus sociale (Sécurité sociale, droits économiques et sociaux). Ces acquis structurent encore la société française aujourd'hui.",
              ],
              box: { label: "À retenir", text: "1944-1947 : la Libération rétablit la République et l'élargit. Droit de vote des femmes (1944), Sécurité sociale (1945), nationalisations, Constitution de la IVe République (1946)." },
            },
          ],
          keyPoints: [
            "Le programme du CNR (15 mars 1944) prépare la refondation : démocratie, protection sociale, nationalisations.",
            "Le GPRF du général de Gaulle (juin 1944) rétablit la légalité républicaine et mène l'épuration.",
            "Ordonnance du 21 avril 1944 : droit de vote et d'éligibilité des femmes ; premier vote le 29 avril 1945.",
            "Octobre 1945 : création de la Sécurité sociale. 1944-1946 : nationalisations (houillères, Renault, banques, EDF-GDF).",
            "13 octobre 1946 : adoption de la Constitution de la IVe République, régime parlementaire ; son préambule proclame des droits sociaux.",
            "Mai 1947 : exclusion des ministres communistes, fin du tripartisme.",
          ],
          example: {
            statement: "Montrez que la démocratie est redéfinie en France entre 1944 et 1946, à la fois sur le plan politique et sur le plan social.",
            solution: [
              "Présenter le contexte : à la Libération, le GPRF dirigé par le général de Gaulle rétablit la République, en s'appuyant sur le programme du CNR de 1944.",
              "Sur le plan politique : l'ordonnance du 21 avril 1944 accorde le droit de vote et d'éligibilité aux femmes, qui votent pour la première fois le 29 avril 1945 ; le suffrage devient vraiment universel.",
              "Toujours sur le plan politique : une nouvelle constitution est adoptée le 13 octobre 1946, qui fonde la IVe République.",
              "Sur le plan social : les ordonnances d'octobre 1945 créent la Sécurité sociale, qui protège les travailleurs contre la maladie, les accidents du travail et la vieillesse.",
              "Toujours sur le plan social : les nationalisations et les comités d'entreprise, puis le préambule de 1946 (droit de grève, liberté syndicale), donnent de nouveaux droits aux travailleurs.",
              "Conclure : la démocratie française est désormais à la fois politique et sociale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 15 mars 1944 ; 21 avril 1944 ; 25 août 1944 ; octobre 1945 ; 13 octobre 1946. Événements : création de la Sécurité sociale ; adoption de la Constitution de la IVe République ; programme du CNR ; libération de Paris ; droit de vote des femmes.",
              hint: "Rangez d'abord les événements dans l'ordre logique : préparer, libérer, accorder des droits, construire le nouveau régime.",
              solution: [
                "15 mars 1944 : programme du CNR.",
                "21 avril 1944 : ordonnance accordant le droit de vote et d'éligibilité aux femmes.",
                "25 août 1944 : libération de Paris.",
                "Octobre 1945 : ordonnances créant la Sécurité sociale.",
                "13 octobre 1946 : adoption par référendum de la Constitution de la IVe République.",
              ],
            },
            {
              level: 2,
              statement: "Document : « La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. [...] Tout homme peut défendre ses droits et ses intérêts par l'action syndicale et adhérer au syndicat de son choix. Le droit de grève s'exerce dans le cadre des lois qui le réglementent. » (Préambule de la Constitution du 27 octobre 1946.) 1) Présentez le document. 2) Relevez les droits proclamés. 3) Expliquez en quoi ce texte redéfinit la démocratie.",
              hint: "Pour présenter un document : sa nature, sa date, son auteur ou son origine, son contexte. Puis classez les droits en deux catégories.",
              solution: [
                "1) C'est un extrait du préambule de la Constitution de la IVe République, adoptée par référendum le 13 octobre 1946 et promulguée le 27 octobre 1946, à la sortie de la Seconde Guerre mondiale.",
                "2) Le texte proclame l'égalité des droits entre les femmes et les hommes, la liberté syndicale et le droit de grève.",
                "3) La démocratie ne se limite plus aux libertés politiques comme le vote : elle garantit aussi l'égalité entre les sexes et des droits économiques et sociaux aux travailleurs.",
                "Ce texte prolonge le programme du CNR et les réformes de la Libération (vote des femmes en 1944, Sécurité sociale en 1945) ; il fait toujours partie de notre droit.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, montrez qu'entre 1944 et 1947 la France refonde la République et redéfinit la démocratie.",
              hint: "Un plan en deux parties fonctionne bien : 1) rétablir la République (GPRF, légalité républicaine, nouvelle constitution) ; 2) élargir la démocratie (vote des femmes, Sécurité sociale, nationalisations, préambule de 1946).",
              solution: [
                "Introduction : en 1944, la France sort de quatre années d'occupation et du régime de Vichy, qui avait supprimé la République. De 1944 à 1947, il faut la reconstruire et la rendre plus démocratique.",
                "Partie 1 : le GPRF, dirigé par le général de Gaulle à partir de juin 1944, rétablit la légalité républicaine et juge les collaborateurs (épuration). Par le référendum du 21 octobre 1945, les Français rejettent le retour à la IIIe République ; après un premier échec, la Constitution de la IVe République est adoptée le 13 octobre 1946. C'est un régime parlementaire.",
                "Partie 2 : la démocratie est élargie. Les femmes obtiennent le droit de vote par l'ordonnance du 21 avril 1944 et votent pour la première fois en avril 1945. Inspirée par le programme du CNR, la Sécurité sociale est créée en octobre 1945 ; les nationalisations (houillères, Renault, banques, EDF-GDF) placent sous le contrôle de l'État des secteurs clés. Le préambule de 1946 proclame l'égalité entre femmes et hommes, le droit de grève et la liberté syndicale.",
                "Conclusion : en 1947, malgré la fin du tripartisme, la République est rétablie et la démocratie est devenue à la fois politique et sociale ; ces acquis existent encore aujourd'hui.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Adoption du programme du Conseil national de la Résistance",
              "Ordonnance accordant le droit de vote aux femmes",
              "Libération de Paris",
              "Premier vote des femmes aux élections municipales",
              "Création de la Sécurité sociale",
              "Démission du général de Gaulle",
              "Adoption de la Constitution de la IVe République",
            ],
          },
          quiz: [
            {
              q: "Qui dirige le Gouvernement provisoire de la République française à partir de 1944 ?",
              options: [
                "Le maréchal Pétain",
                "Le général de Gaulle",
                "Vincent Auriol",
                "Jean Moulin",
              ],
              answer: 1,
              why: "Le général de Gaulle dirige le GPRF jusqu'à sa démission en janvier 1946 ; Jean Moulin est mort en 1943 et Vincent Auriol devient président en 1947.",
            },
            {
              q: "Quand les femmes votent-elles pour la première fois en France ?",
              options: [
                "En 1848",
                "En 1936",
                "En 1945",
                "En 1958",
              ],
              answer: 2,
              why: "Le droit de vote est accordé par l'ordonnance du 21 avril 1944 ; les femmes votent pour la première fois aux municipales du 29 avril 1945.",
            },
            {
              q: "Que crée-t-on en octobre 1945 ?",
              options: [
                "La Sécurité sociale",
                "La Ve République",
                "L'Union européenne",
              ],
              answer: 0,
              why: "Les ordonnances d'octobre 1945 créent la Sécurité sociale, qui protège contre la maladie, les accidents du travail et la vieillesse.",
            },
            {
              q: "Qu'est-ce qu'une nationalisation ?",
              options: [
                "L'attribution de la nationalité française à un étranger",
                "La vente d'une entreprise publique à des actionnaires privés français",
                "Le passage d'une entreprise privée sous la propriété de l'État",
              ],
              answer: 2,
              why: "Nationaliser, c'est transférer la propriété d'une entreprise à l'État, comme Renault en 1945 ou l'électricité avec EDF en 1946.",
            },
            {
              q: "Pourquoi le général de Gaulle démissionne-t-il en janvier 1946 ?",
              options: [
                "Il vient de perdre la première élection présidentielle au suffrage universel direct",
                "Il est en désaccord avec les partis qui veulent une assemblée toute-puissante",
                "Il part diriger la guerre en Indochine",
                "Il est condamné lors de l'épuration",
              ],
              answer: 1,
              why: "De Gaulle souhaite un pouvoir exécutif fort, alors que les partis du tripartisme veulent un régime dominé par l'Assemblée.",
            },
          ],
          trap: "Confondre les deux Constitutions : celle de 1946 fonde la IVe République, régime parlementaire ; celle de 1958 fonde la Ve République. Autre erreur : dater le droit de vote des femmes de 1945 sans préciser qu'il est accordé en 1944.",
          method: "Construisez une frise de 1944 à 1947 avec deux couleurs : en haut les événements politiques (GPRF, référendums, constitution), en bas les droits nouveaux (vote des femmes, Sécurité sociale, nationalisations). Elle vous servira directement pour un développement construit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cinquieme-republique',
          title: "La Ve République : de la République gaullienne à la cohabitation",
          minutes: 35,
          objectives: [
            "Expliquer la naissance de la Ve République en 1958 et le renforcement du pouvoir présidentiel.",
            "Décrire les grandes étapes de la République gaullienne (1958-1969), dont l'élection du président au suffrage universel direct.",
            "Définir l'alternance et la cohabitation et en donner des exemples datés.",
            "Mobiliser les repères chronologiques de la Ve République.",
          ],
          course: [
            {
              heading: "1958 : la naissance d'un nouveau régime",
              paragraphs: [
                "La IVe République est fragilisée par l'instabilité des gouvernements (plus de vingt gouvernements en douze ans) et surtout par la guerre d'Algérie, commencée en 1954. Le 13 mai 1958, à Alger, des partisans de l'Algérie française se soulèvent ; on craint un coup d'État militaire. Le président de la République fait appel au général de Gaulle, qui devient président du Conseil le 1er juin 1958.",
                "De Gaulle fait rédiger une nouvelle constitution, préparée notamment par Michel Debré. Elle est approuvée par référendum le 28 septembre 1958 par environ 80 % des votants et promulguée le 4 octobre 1958 : c'est la naissance de la Ve République. En décembre 1958, de Gaulle est élu président de la République par un collège d'environ 80 000 grands électeurs.",
              ],
              box: { label: "Repère", text: "13 mai 1958 : crise d'Alger. 28 septembre 1958 : la Constitution est approuvée par référendum. 4 octobre 1958 : naissance de la Ve République." },
            },
            {
              heading: "La République gaullienne (1958-1969)",
              paragraphs: [
                "La Constitution renforce le pouvoir exécutif, et surtout celui du président de la République, élu alors pour sept ans (le septennat). Il nomme le Premier ministre, peut dissoudre l'Assemblée nationale, recourir au référendum et, en cas de crise grave, disposer de pouvoirs exceptionnels (article 16). Le gouvernement reste responsable devant l'Assemblée nationale.",
                "De Gaulle met fin à la guerre d'Algérie : les accords d'Évian sont signés le 18 mars 1962 et l'Algérie devient indépendante en juillet 1962. Par le référendum du 28 octobre 1962, il fait adopter l'élection du président de la République au suffrage universel direct : le président tire désormais sa légitimité de tout le peuple. En 1965, lors de la première élection de ce type, de Gaulle est réélu au second tour face à François Mitterrand.",
                "Le pouvoir gaullien est contesté en mai 1968 : une révolte étudiante, suivie d'une grève générale de millions de salariés, paralyse le pays. De Gaulle dissout l'Assemblée et remporte les élections de juin 1968. Mais en avril 1969, il perd un référendum sur la réforme du Sénat et des régions ; fidèle à sa conception du lien direct avec le peuple, il démissionne le 28 avril 1969.",
              ],
            },
            {
              heading: "Après de Gaulle : continuités et réformes",
              paragraphs: [
                "Georges Pompidou (1969-1974), ancien Premier ministre gaulliste, puis Valéry Giscard d'Estaing (1974-1981), de centre droit, poursuivent l'œuvre institutionnelle. Giscard d'Estaing mène des réformes de société : la majorité passe de 21 à 18 ans en 1974 et la loi Veil légalise l'interruption volontaire de grossesse en 1975. En 1974, une réforme permet à 60 députés ou 60 sénateurs de saisir le Conseil constitutionnel : l'opposition peut ainsi contester une loi.",
              ],
            },
            {
              heading: "L'alternance et la cohabitation",
              paragraphs: [
                "Le 10 mai 1981, le socialiste François Mitterrand est élu président de la République : pour la première fois sous la Ve République, la gauche arrive au pouvoir. C'est l'alternance, c'est-à-dire le passage pacifique du pouvoir d'une majorité à une autre par le vote. Elle prouve que les institutions conçues par de Gaulle peuvent fonctionner avec un président qui les avait critiquées. Le nouveau pouvoir abolit la peine de mort (1981) et lance la décentralisation (1982).",
                "En 1986, la droite gagne les élections législatives. Mitterrand nomme alors Premier ministre le chef de la nouvelle majorité, Jacques Chirac : c'est la première cohabitation (1986-1988). Le président et le Premier ministre appartiennent à des camps opposés ; le Premier ministre gouverne, le président garde un rôle important en politique étrangère et de défense. Deux autres cohabitations suivent : 1993-1995 (Édouard Balladur, sous Mitterrand) et 1997-2002 (Lionel Jospin, sous Chirac).",
                "Pour rendre les cohabitations moins probables, le mandat présidentiel est réduit à cinq ans (quinquennat) par le référendum de 2000, appliqué à partir de 2002 ; l'élection législative suit désormais de peu l'élection présidentielle.",
              ],
              box: { label: "Définition", text: "L'alternance est le passage pacifique du pouvoir d'une majorité politique à une autre à la suite d'élections. La cohabitation est la situation où le président de la République et le Premier ministre appartiennent à des camps politiques opposés." },
            },
          ],
          keyPoints: [
            "1958 : la crise algérienne ramène de Gaulle au pouvoir ; la Constitution de la Ve République est approuvée le 28 septembre.",
            "La Ve République renforce le pouvoir exécutif, en particulier celui du président (dissolution, référendum, article 16).",
            "1962 : accords d'Évian et référendum instituant l'élection du président au suffrage universel direct (première en 1965).",
            "Mai 1968 : crise étudiante et sociale ; 1969 : de Gaulle démissionne après l'échec d'un référendum.",
            "1981 : alternance, avec l'élection de François Mitterrand, premier président de gauche de la Ve République.",
            "Cohabitations : 1986-1988, 1993-1995, 1997-2002 ; quinquennat adopté en 2000.",
          ],
          example: {
            statement: "Expliquez en quoi l'élection de François Mitterrand en 1981, puis la cohabitation de 1986, montrent la solidité des institutions de la Ve République.",
            solution: [
              "Rappeler que la Ve République a été fondée en 1958 par le général de Gaulle et qu'elle avait toujours été dirigée par la droite et le centre jusqu'en 1981.",
              "Expliquer l'alternance : le 10 mai 1981, le socialiste François Mitterrand est élu président ; le pouvoir passe pacifiquement à la gauche par le vote.",
              "Souligner le paradoxe : Mitterrand avait critiqué ces institutions, mais il les utilise sans les changer ; elles fonctionnent donc quel que soit le camp au pouvoir.",
              "Expliquer la cohabitation : en 1986, la droite gagne les élections législatives et Mitterrand nomme Jacques Chirac Premier ministre ; président et Premier ministre sont de camps opposés.",
              "Montrer que la crise redoutée n'a pas lieu : les deux hommes se partagent le pouvoir en respectant la Constitution.",
              "Conclure : l'alternance et la cohabitation prouvent que les institutions de 1958 sont solides et peuvent s'adapter.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rangez dans l'ordre chronologique et datez : la première cohabitation ; la démission du général de Gaulle ; l'approbation de la Constitution par référendum ; l'élection de François Mitterrand ; le référendum sur l'élection du président au suffrage universel direct.",
              hint: "Cinq dates entre 1958 et 1986 : une en 1958, une en 1962, une en 1969, une en 1981, une en 1986.",
              solution: [
                "28 septembre 1958 : approbation de la Constitution par référendum.",
                "28 octobre 1962 : référendum sur l'élection du président au suffrage universel direct.",
                "28 avril 1969 : démission du général de Gaulle.",
                "10 mai 1981 : élection de François Mitterrand.",
                "1986 : début de la première cohabitation (Jacques Chirac Premier ministre).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi le référendum de 1962 renforce le pouvoir du président de la République.",
              hint: "Comparez le mode d'élection du président en 1958 et après 1962 : qui l'élit ?",
              solution: [
                "En 1958, le président est élu par un collège d'environ 80 000 grands électeurs (parlementaires, élus locaux).",
                "Le référendum du 28 octobre 1962 décide que le président sera élu au suffrage universel direct, c'est-à-dire par l'ensemble des citoyens.",
                "Le président tire désormais sa légitimité directement du peuple, comme les députés ; il ne doit son élection ni aux partis ni aux parlementaires.",
                "Cette légitimité renforce son autorité face au Parlement et fait de l'élection présidentielle, dès 1965, le moment central de la vie politique française.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, présentez les grandes étapes de la vie politique de la Ve République de 1958 à la fin des années 1980, en montrant comment ses institutions s'adaptent.",
              hint: "Trois temps : la fondation et la République gaullienne (1958-1969) ; la continuité après de Gaulle ; l'alternance (1981) et la cohabitation (1986).",
              solution: [
                "Introduction : en 1958, la IVe République s'effondre à cause de la guerre d'Algérie. Le général de Gaulle fonde la Ve République, qui connaît ensuite plusieurs épreuves.",
                "Partie 1 : appelé au pouvoir après la crise du 13 mai 1958, de Gaulle fait approuver la Constitution par référendum le 28 septembre 1958. Elle renforce le pouvoir du président. En 1962, il met fin à la guerre d'Algérie (accords d'Évian) et fait adopter l'élection du président au suffrage universel direct. Contesté en mai 1968, il démissionne en 1969 après l'échec d'un référendum.",
                "Partie 2 : ses successeurs, Georges Pompidou puis Valéry Giscard d'Estaing, conservent les institutions ; en 1974, l'opposition obtient le droit de saisir le Conseil constitutionnel.",
                "Partie 3 : en 1981, l'élection du socialiste François Mitterrand réalise la première alternance. En 1986, la victoire de la droite aux législatives conduit à la première cohabitation avec Jacques Chirac comme Premier ministre.",
                "Conclusion : conçues pour un président fort, les institutions de la Ve République se révèlent capables de supporter l'alternance et la cohabitation ; elles sont toujours en vigueur.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque date à l'événement de la Ve République correspondant.",
            pairs: [
              { left: "1958", right: "Adoption de la Constitution de la Ve République" },
              { left: "1962", right: "Référendum sur l'élection du président au suffrage universel direct" },
              { left: "1968", right: "Révolte étudiante et grève générale" },
              { left: "1969", right: "Démission du général de Gaulle" },
              { left: "1981", right: "Première alternance avec l'élection de François Mitterrand" },
              { left: "1986", right: "Première cohabitation" },
            ],
          },
          quiz: [
            {
              q: "Quel événement provoque le retour du général de Gaulle au pouvoir en 1958 ?",
              options: [
                "La crise du 13 mai 1958 à Alger, liée à la guerre d'Algérie",
                "La défaite électorale des communistes",
                "La révolte étudiante et la grève générale de Mai 68 dans tout le pays",
              ],
              answer: 0,
              why: "Le soulèvement d'Alger du 13 mai 1958 fait craindre un coup d'État ; le président de la République appelle alors de Gaulle.",
            },
            {
              q: "Depuis quel référendum le président est-il élu au suffrage universel direct ?",
              options: [
                "Celui de 1958",
                "Celui de 1969",
                "Celui de 2000",
                "Celui de 1962",
              ],
              answer: 3,
              why: "Le référendum du 28 octobre 1962 instaure l'élection du président au suffrage universel direct, appliquée pour la première fois en 1965.",
            },
            {
              q: "Qu'appelle-t-on la cohabitation ?",
              options: [
                "L'union de tous les partis dans un même gouvernement",
                "La coexistence d'un président et d'un Premier ministre de camps opposés",
                "Le partage du pouvoir entre l'État central et les régions depuis la décentralisation",
              ],
              answer: 1,
              why: "Il y a cohabitation quand la majorité de l'Assemblée nationale est opposée au président, qui nomme un Premier ministre issu de cette majorité.",
            },
            {
              q: "Pourquoi l'élection de 1981 est-elle appelée une alternance ?",
              options: [
                "Parce que deux présidents de camps différents gouvernent alors en même temps à l'Élysée",
                "Parce que l'élection est annulée puis recommencée",
                "Parce que la gauche arrive au pouvoir pour la première fois sous la Ve République",
                "Parce que de Gaulle revient au pouvoir",
              ],
              answer: 2,
              why: "Avec l'élection de François Mitterrand, le pouvoir passe pacifiquement de la droite à la gauche par le vote.",
            },
            {
              q: "Qui est le Premier ministre de la première cohabitation (1986-1988) ?",
              options: [
                "Lionel Jospin",
                "Jacques Chirac",
                "Édouard Balladur",
              ],
              answer: 1,
              why: "Mitterrand nomme Jacques Chirac en 1986 ; Balladur est Premier ministre de la deuxième cohabitation (1993-1995) et Jospin de la troisième (1997-2002).",
            },
          ],
          trap: "Croire que le président de la Ve République a toujours été élu au suffrage universel direct : c'est seulement depuis le référendum de 1962 (première élection en 1965). Autre confusion fréquente : prendre l'alternance pour la cohabitation.",
          method: "Pour ne pas confondre alternance et cohabitation, retenez une question pour chacune : « Le pouvoir change-t-il de camp ? » (alternance) et « Le président et le Premier ministre sont-ils de camps opposés ? » (cohabitation). Associez à chacune une date : 1981 et 1986.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'societe-1950-1980',
          title: "Femmes et hommes dans la société des années 1950 aux années 1980",
          minutes: 30,
          objectives: [
            "Décrire les transformations de la société française des années 1950 aux années 1980 : croissance, urbanisation, consommation, immigration.",
            "Expliquer l'évolution de la place des femmes et les réponses politiques apportées (lois Neuwirth, Veil, égalité salariale).",
            "Identifier les nouveaux enjeux sociaux et culturels portés par la jeunesse, notamment en mai 1968.",
            "Mobiliser des repères chronologiques sur les droits des femmes.",
          ],
          course: [
            {
              heading: "Une société transformée par la croissance",
              paragraphs: [
                "De la fin de la guerre au milieu des années 1970, la France connaît une croissance économique forte et continue, que l'économiste Jean Fourastié a appelée les Trente Glorieuses. Le baby-boom fait passer la population d'environ 40 millions d'habitants en 1946 à plus de 50 millions au début des années 1970.",
                "La société change profondément. L'exode rural vide les campagnes : les agriculteurs représentaient environ un tiers des actifs au lendemain de la guerre, moins d'un sur dix vers 1980. Les villes grandissent, et l'on construit des grands ensembles pour loger les familles. Les emplois d'ouvriers, puis surtout de services (employés, cadres), se multiplient.",
                "Avec la hausse des salaires, la France entre dans la société de consommation : réfrigérateur, machine à laver, télévision et automobile se diffusent dans les foyers, les supermarchés apparaissent, les congés payés permettent le départ en vacances. Pour faire tourner l'économie, la France fait aussi appel à des travailleurs immigrés venus d'Italie, d'Espagne, du Portugal, d'Algérie et du Maroc, souvent logés dans des conditions très difficiles, parfois dans des bidonvilles comme à Nanterre.",
              ],
            },
            {
              heading: "La jeunesse et mai 1968",
              paragraphs: [
                "Les enfants du baby-boom forment une jeunesse nombreuse, plus scolarisée, qui développe sa propre culture : le rock, la musique yé-yé, l'émission de radio « Salut les copains ». Une partie de cette jeunesse rejette l'autorité et les valeurs traditionnelles (famille, école, Église).",
                "En mai 1968, la révolte part des universités et s'étend au monde du travail : une grève générale paralyse le pays. Les accords de Grenelle accordent des hausses de salaires et renforcent les droits syndicaux. Au-delà de son issue politique, mai 1968 marque une évolution des mentalités : demande de plus de liberté individuelle, de participation et d'égalité, notamment entre les femmes et les hommes.",
              ],
            },
            {
              heading: "La place des femmes change",
              paragraphs: [
                "Dans les années 1950, la loi place encore la femme mariée sous l'autorité de son mari. Peu à peu, les femmes conquièrent l'égalité juridique. En 1965, la réforme des régimes matrimoniaux permet à une femme mariée d'exercer une profession et d'ouvrir un compte bancaire sans l'autorisation de son mari. En 1970, l'autorité parentale, partagée par le père et la mère, remplace la puissance paternelle.",
                "Les femmes obtiennent la maîtrise de leur corps. La loi Neuwirth (1967) autorise la contraception. Le Mouvement de libération des femmes (MLF), apparu en 1970, et des militantes comme l'avocate Gisèle Halimi lors du procès de Bobigny (1972) réclament le droit à l'avortement. En 1971, 343 femmes déclarent publiquement avoir avorté. Défendue par la ministre de la Santé Simone Veil, la loi du 17 janvier 1975 légalise l'interruption volontaire de grossesse (IVG).",
                "L'égalité progresse aussi au travail et à l'école : une loi de 1972 impose l'égalité de rémunération entre les femmes et les hommes pour un même travail, le divorce par consentement mutuel est autorisé en 1975, la mixité devient la règle dans les collèges, et la loi Roudy (1983) renforce l'égalité professionnelle. Dans les faits, des inégalités de salaires et de partage des tâches domestiques persistent.",
              ],
              box: { label: "Repère", text: "1965 : une femme mariée peut travailler et ouvrir un compte sans l'accord de son mari. 1967 : loi Neuwirth sur la contraception. 1975 : loi Veil sur l'IVG. 1983 : loi Roudy sur l'égalité professionnelle." },
            },
            {
              heading: "La fin des Trente Glorieuses et de nouveaux enjeux",
              paragraphs: [
                "Le choc pétrolier de 1973, qui multiplie le prix du pétrole, met fin aux Trente Glorieuses : la croissance ralentit, le chômage augmente fortement, surtout chez les jeunes et les ouvriers, et les régions industrielles (mines, sidérurgie, textile) sont durement frappées.",
                "Les réponses politiques évoluent : la majorité passe à 18 ans en 1974 ; l'immigration de travail est suspendue en 1974, mais le regroupement familial est autorisé en 1976, si bien que de nombreuses familles s'installent durablement en France. La question de l'intégration et de la lutte contre le racisme prend une place nouvelle, comme le montre la Marche pour l'égalité et contre le racisme de 1983.",
              ],
              box: { label: "À retenir", text: "Des années 1950 aux années 1980, la société française se transforme : croissance puis crise, urbanisation, consommation, immigration, nouvelle place des jeunes et conquête de droits par les femmes." },
            },
          ],
          keyPoints: [
            "Trente Glorieuses (1945-1973) : forte croissance, baby-boom, exode rural, urbanisation, société de consommation.",
            "Immigration de travail (Italie, Espagne, Portugal, Algérie, Maroc) ; 1974 : suspension ; 1976 : regroupement familial.",
            "Mai 1968 : révolte étudiante et grève générale ; aspirations à plus de liberté et d'égalité.",
            "Droits des femmes : 1965 (travail et compte bancaire), 1967 (loi Neuwirth), 1975 (loi Veil), 1983 (loi Roudy).",
            "1973 : choc pétrolier, fin des Trente Glorieuses, montée du chômage.",
            "L'égalité juridique progresse, mais des inégalités entre femmes et hommes persistent dans les faits.",
          ],
          example: {
            statement: "Expliquez comment la place des femmes évolue dans la société française entre les années 1950 et les années 1980, et quelles réponses politiques sont apportées.",
            solution: [
              "Décrire la situation de départ : dans les années 1950, les femmes votent depuis 1944, mais la femme mariée reste juridiquement soumise à l'autorité de son mari.",
              "Montrer la conquête de l'autonomie : en 1965, elle peut travailler et ouvrir un compte bancaire sans l'accord de son mari ; en 1970, l'autorité parentale remplace la puissance paternelle.",
              "Montrer la maîtrise de leur corps : la loi Neuwirth autorise la contraception en 1967 ; sous la pression du MLF et de militantes comme Gisèle Halimi, la loi Veil légalise l'IVG en 1975.",
              "Montrer l'égalité au travail : loi de 1972 sur l'égalité de rémunération, loi Roudy de 1983 sur l'égalité professionnelle.",
              "Nuancer : dans les faits, les écarts de salaires et le partage inégal des tâches domestiques persistent.",
              "Conclure : en trente ans, les femmes obtiennent l'égalité juridique grâce à leurs luttes et aux réponses des pouvoirs publics.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à la loi ou à l'événement correspondant : 1965, 1967, 1970, 1975, 1983. Propositions : création du MLF ; loi Roudy sur l'égalité professionnelle ; loi Neuwirth sur la contraception ; loi Veil sur l'IVG ; une femme mariée peut exercer une profession sans l'accord de son mari.",
              hint: "Le MLF naît dans l'élan de mai 1968 ; la loi Roudy est votée sous la présidence de François Mitterrand.",
              solution: [
                "1965 : une femme mariée peut exercer une profession et ouvrir un compte sans l'accord de son mari.",
                "1967 : loi Neuwirth sur la contraception.",
                "1970 : création du MLF (Mouvement de libération des femmes).",
                "1975 : loi Veil sur l'IVG.",
                "1983 : loi Roudy sur l'égalité professionnelle.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi on parle de « société de consommation » pour la France des années 1950-1970. Donnez au moins trois exemples.",
              hint: "Partez de la croissance et des salaires, puis pensez aux objets qui entrent dans les foyers et aux nouveaux lieux d'achat.",
              solution: [
                "Pendant les Trente Glorieuses, la forte croissance permet une hausse des salaires et du pouvoir d'achat.",
                "Les ménages s'équipent de biens auparavant réservés à une minorité : réfrigérateur, machine à laver, télévision, automobile.",
                "De nouveaux lieux de consommation apparaissent, comme les supermarchés, et la publicité se développe.",
                "Les loisirs se diffusent : départs en vacances grâce aux congés payés, disques, sorties des jeunes.",
                "Conclusion : la consommation de masse devient un élément central du mode de vie des Français, d'où l'expression « société de consommation ».",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, décrivez les transformations de la société française des années 1950 aux années 1980 et montrez comment les pouvoirs publics y répondent.",
              hint: "Deux parties : 1) les transformations (croissance, urbanisation, consommation, immigration, jeunesse, place des femmes) ; 2) les réponses politiques (lois sur les droits des femmes, majorité à 18 ans, politique d'immigration), sans oublier la crise après 1973.",
              solution: [
                "Introduction : des années 1950 aux années 1980, la société française connaît de profonds changements économiques, sociaux et culturels, auxquels les pouvoirs publics doivent répondre.",
                "Partie 1 : pendant les Trente Glorieuses, la croissance s'accompagne du baby-boom, de l'exode rural et de l'urbanisation, avec la construction de grands ensembles. Les Français entrent dans la société de consommation. La France fait appel à des travailleurs immigrés. Une jeunesse nombreuse affirme sa culture et ses aspirations, qui éclatent en mai 1968. Les femmes, de plus en plus nombreuses à travailler, réclament l'égalité.",
                "Partie 2 : les pouvoirs publics accordent de nouveaux droits aux femmes : en 1965, liberté de travailler sans l'accord du mari ; en 1967, loi Neuwirth sur la contraception ; en 1975, loi Veil sur l'IVG ; en 1983, loi Roudy sur l'égalité professionnelle. La majorité passe à 18 ans en 1974. Après le choc pétrolier de 1973 et la montée du chômage, l'immigration de travail est suspendue en 1974, mais le regroupement familial est autorisé en 1976.",
                "Conclusion : la société française devient plus urbaine, plus égalitaire en droit et plus diverse, mais elle entre à partir de 1973 dans une période de crise et de chômage.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La société française de 1950 à 1980.",
            statements: [
              { text: "L'expression « Trente Glorieuses » désigne la période de forte croissance de 1945 au milieu des années 1970.", true: true, why: "L'expression vient de l'économiste Jean Fourastié ; la croissance s'interrompt avec le choc pétrolier de 1973." },
              { text: "Les femmes obtiennent le droit de vote en 1975 grâce à Simone Veil.", true: false, why: "Le droit de vote date de 1944 ; la loi Veil de 1975 légalise l'IVG." },
              { text: "Avant 1965, une femme mariée devait avoir l'accord de son mari pour exercer une profession.", true: true, why: "La réforme des régimes matrimoniaux de 1965 met fin à cette obligation." },
              { text: "Pendant les Trente Glorieuses, la population agricole augmente fortement.", true: false, why: "C'est l'inverse : l'exode rural réduit fortement la part des agriculteurs dans la population active." },
              { text: "La loi Neuwirth de 1967 autorise la contraception.", true: true, why: "Elle autorise la vente des contraceptifs, dont la pilule." },
              { text: "Le regroupement familial autorise les familles des travailleurs immigrés à les rejoindre en France à partir de 1976.", true: true, why: "Après la suspension de l'immigration de travail en 1974, le regroupement familial est autorisé en 1976." },
              { text: "Depuis la loi de 1972, il n'existe plus aucun écart de salaire entre femmes et hommes.", true: false, why: "La loi impose l'égalité de rémunération, mais des écarts persistent dans les faits jusqu'à aujourd'hui." },
            ],
          },
          quiz: [
            {
              q: "Quel événement met fin aux Trente Glorieuses ?",
              options: [
                "Mai 1968",
                "La création de la Sécurité sociale",
                "Le choc pétrolier de 1973",
                "L'élection de 1981",
              ],
              answer: 2,
              why: "La forte hausse du prix du pétrole en 1973 ralentit la croissance et fait monter le chômage.",
            },
            {
              q: "Que permet la loi Veil de 1975 ?",
              options: [
                "L'interruption volontaire de grossesse",
                "Le droit de vote des femmes",
                "La contraception",
              ],
              answer: 0,
              why: "La loi Veil légalise l'IVG ; la contraception avait été autorisée par la loi Neuwirth en 1967.",
            },
            {
              q: "Qu'appelle-t-on l'exode rural ?",
              options: [
                "Le départ des citadins vers la campagne pendant les vacances d'été",
                "Le départ massif des habitants des campagnes vers les villes",
                "L'arrivée de travailleurs étrangers dans les campagnes",
              ],
              answer: 1,
              why: "L'exode rural est la migration des habitants des campagnes vers les villes, très forte pendant les Trente Glorieuses.",
            },
            {
              q: "Que change la réforme de 1965 pour les femmes mariées ?",
              options: [
                "Elles obtiennent enfin le droit de vote aux élections municipales et locales",
                "Elles deviennent majeures à 18 ans",
                "Elles doivent obligatoirement travailler",
                "Elles peuvent travailler et ouvrir un compte sans l'accord du mari",
              ],
              answer: 3,
              why: "La réforme des régimes matrimoniaux de 1965 donne aux femmes mariées l'autonomie professionnelle et bancaire.",
            },
            {
              q: "Quelle mesure est prise en 1974 ?",
              options: [
                "La majorité est abaissée de 21 à 18 ans",
                "Les femmes obtiennent le droit de vote",
                "La Sécurité sociale est créée",
              ],
              answer: 0,
              why: "En 1974, sous la présidence de Valéry Giscard d'Estaing, la majorité passe à 18 ans ; le vote des femmes date de 1944 et la Sécurité sociale de 1945.",
            },
          ],
          trap: "Confondre les lois et leurs dates : la loi Neuwirth (1967) concerne la contraception, la loi Veil (1975) l'IVG ; et le droit de vote des femmes (1944) n'appartient pas à cette période.",
          method: "Faites une frise des droits des femmes de 1944 à 1983 et apprenez-la avec un moyen mnémotechnique simple : chaque loi porte le nom d'une personne (Neuwirth, Veil, Roudy) ; associez à chaque nom un mot-clé (contraception, IVG, égalité professionnelle).",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 3 : LA FRANCE ET L'UNION EUROPÉENNE                 */
    /* ==================================================================== */
    {
      id: 'france-union-europeenne',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ue-territoire',
          title: "L'Union européenne, un territoire de référence et d'appartenance",
          minutes: 30,
          objectives: [
            "Localiser l'Union européenne, ses États membres et ses principaux espaces (centre, périphéries, frontières).",
            "Expliquer ce que signifie appartenir à l'Union européenne pour un citoyen français : citoyenneté européenne, espace Schengen, euro.",
            "Décrire les contrastes territoriaux de l'UE et le rôle de la politique de cohésion.",
            "Identifier des exemples de coopération transfrontalière impliquant la France.",
          ],
          course: [
            {
              heading: "Un territoire qui s'est construit par élargissements",
              paragraphs: [
                "L'Union européenne (UE) est une union de 27 États qui ont choisi de mettre en commun une partie de leurs compétences. Elle compte environ 450 millions d'habitants. Tout a commencé en 1957 avec le traité de Rome, signé par six pays : la France, la République fédérale d'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg.",
                "Le territoire s'est ensuite agrandi par élargissements successifs : le Royaume-Uni, l'Irlande et le Danemark en 1973, la Grèce en 1981, l'Espagne et le Portugal en 1986, l'Autriche, la Finlande et la Suède en 1995, dix pays surtout d'Europe centrale et orientale en 2004, la Bulgarie et la Roumanie en 2007, la Croatie en 2013. En 2020, pour la première fois, un État est sorti de l'Union : le Royaume-Uni (le Brexit). D'autres pays, comme l'Ukraine ou la Moldavie, sont candidats à l'adhésion.",
              ],
              box: { label: "Repère", text: "1957 : traité de Rome (six pays fondateurs). 1992 : traité de Maastricht, qui crée l'Union européenne et la citoyenneté européenne. 2002 : mise en circulation des pièces et billets en euros. 2020 : sortie du Royaume-Uni." },
            },
            {
              heading: "Un territoire d'appartenance pour les citoyens",
              paragraphs: [
                "Depuis le traité de Maastricht (1992), tout citoyen d'un État membre est aussi citoyen européen. Un Français peut ainsi circuler, étudier, travailler et s'installer librement dans un autre pays de l'UE ; il peut y voter et être candidat aux élections municipales et européennes s'il y réside. Les élections européennes, tous les cinq ans, permettent d'élire les députés du Parlement européen, qui siège notamment à Strasbourg.",
                "Dans l'espace Schengen, les contrôles aux frontières intérieures sont en principe supprimés : on passe de France en Espagne ou en Belgique sans montrer de papiers. Il regroupe 29 pays, dont la plupart des membres de l'UE, mais aussi la Suisse, la Norvège, l'Islande et le Liechtenstein. En contrepartie, les contrôles sont renforcés aux frontières extérieures.",
                "Dans la zone euro, la même monnaie circule : l'euro a remplacé le franc en 2002. Elle compte 21 pays depuis l'entrée de la Bulgarie en 2026. Le programme Erasmus, créé en 1987, permet chaque année à des centaines de milliers d'étudiants et d'apprentis de se former dans un autre pays européen. Le drapeau aux douze étoiles, l'hymne (l'Ode à la joie) et la devise « Unie dans la diversité » sont des symboles de cette appartenance commune.",
              ],
              box: { label: "Définition", text: "L'espace Schengen est un espace de libre circulation des personnes, sans contrôle systématique aux frontières intérieures. La zone euro regroupe les pays de l'UE qui ont adopté l'euro comme monnaie. Les deux ne recouvrent pas exactement l'UE." },
            },
            {
              heading: "Un territoire contrasté",
              paragraphs: [
                "Le territoire de l'UE est inégalement développé. Au centre, une vaste zone très urbanisée et très riche s'étend du Benelux et de la vallée du Rhin jusqu'au nord de l'Italie : on l'appelle la dorsale européenne. Elle concentre les grandes métropoles (Paris, Bruxelles, Amsterdam, Francfort, Milan), les grands ports comme Rotterdam et les sièges d'entreprises.",
                "Les périphéries, au sud, à l'est et au nord, sont en général moins riches et moins densément peuplées : certaines régions de Roumanie, de Bulgarie ou du sud de l'Italie ont un niveau de vie bien inférieur à la moyenne. Les régions ultrapériphériques, comme les DROM français, sont très éloignées du continent.",
                "Pour réduire ces écarts, l'UE mène une politique de cohésion : elle finance, grâce à des fonds comme le FEDER, des routes, des réseaux numériques, la formation ou la rénovation urbaine, en particulier dans les régions les moins développées. La politique agricole commune (PAC) soutient les agriculteurs ; la France en est le premier bénéficiaire.",
              ],
            },
            {
              heading: "La France, un acteur de l'Union au cœur de l'Europe",
              paragraphs: [
                "La France est l'un des six pays fondateurs. C'est le plus vaste État de l'UE et le deuxième par la population, après l'Allemagne. En métropole, elle a des frontières terrestres avec huit pays : cinq membres de l'UE (Belgique, Luxembourg, Allemagne, Italie, Espagne) et trois pays qui n'en font pas partie (Suisse, Monaco, Andorre).",
                "Les régions frontalières coopèrent étroitement : chaque jour, plusieurs centaines de milliers de travailleurs frontaliers résidant en France vont travailler au Luxembourg, en Suisse, en Allemagne ou en Belgique. Des structures de coopération transfrontalière organisent les transports, la santé ou l'environnement de part et d'autre de la frontière, comme l'Eurométropole Lille-Kortrijk-Tournai avec la Belgique. Le tunnel sous la Manche (1994) et les lignes à grande vitesse relient la France à ses voisins.",
              ],
              box: { label: "À retenir", text: "L'UE est un territoire de référence (règles, politiques communes, financements) et d'appartenance (citoyenneté européenne, libre circulation, euro). La France, pays fondateur, y est intégrée par ses frontières, ses régions transfrontalières et ses réseaux de transport." },
            },
          ],
          keyPoints: [
            "L'UE : 27 États, environ 450 millions d'habitants ; six fondateurs en 1957 (traité de Rome), élargissements jusqu'en 2013, Brexit en 2020.",
            "Citoyenneté européenne (Maastricht, 1992) : libre circulation, droit de vote aux municipales et européennes dans le pays de résidence.",
            "Espace Schengen (29 pays, pas exactement l'UE) et zone euro (21 pays depuis 2026) : deux espaces différents de l'UE.",
            "Contrastes : une dorsale riche et urbanisée au centre, des périphéries moins développées, des régions ultrapériphériques.",
            "La politique de cohésion (FEDER) et la PAC financent les régions et les agriculteurs.",
            "La France, pays fondateur et plus vaste État de l'UE, coopère avec ses voisins dans les régions transfrontalières.",
          ],
          example: {
            statement: "Montrez qu'un collégien français vit concrètement dans un territoire européen d'appartenance. Donnez au moins trois exemples.",
            solution: [
              "Rappeler que la France est membre de l'Union européenne depuis 1957 et que ses citoyens sont aussi citoyens européens depuis le traité de Maastricht (1992).",
              "Premier exemple : la monnaie ; le collégien paie en euros, comme dans les 21 pays de la zone euro.",
              "Deuxième exemple : la libre circulation ; grâce à l'espace Schengen, il peut partir en vacances en Espagne ou en Allemagne sans contrôle systématique à la frontière.",
              "Troisième exemple : les études ; il pourra plus tard partir étudier ou se former dans un autre pays avec le programme Erasmus.",
              "Quatrième exemple : son territoire ; des équipements de sa région (une route, un réseau numérique) ont pu être cofinancés par le FEDER, ce qu'indiquent des panneaux avec le drapeau européen.",
              "Conclure : l'UE n'est pas lointaine, elle fait partie de la vie quotidienne et de l'identité des citoyens français.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases : a) L'Union européenne compte ... États membres. b) Le traité de ... (1957) a été signé par six pays. c) Le traité de ... (1992) crée la citoyenneté européenne. d) L'espace ... permet de franchir les frontières intérieures sans contrôle systématique. e) En 2020, le ... a quitté l'Union européenne.",
              hint: "Les réponses sont : un nombre, deux noms de villes, le nom d'un village luxembourgeois et le nom d'un pays.",
              solution: [
                "a) L'Union européenne compte 27 États membres.",
                "b) Le traité de Rome (1957) a été signé par six pays.",
                "c) Le traité de Maastricht (1992) crée la citoyenneté européenne.",
                "d) L'espace Schengen permet de franchir les frontières intérieures sans contrôle systématique.",
                "e) En 2020, le Royaume-Uni a quitté l'Union européenne.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi l'espace Schengen, la zone euro et l'Union européenne ne correspondent pas exactement au même territoire. Appuyez-vous sur au moins deux exemples de pays.",
              hint: "Cherchez un pays hors UE mais dans Schengen, et un pays de l'UE qui n'utilise pas l'euro ou n'est pas dans Schengen.",
              solution: [
                "L'Union européenne regroupe 27 États qui partagent des institutions et des politiques communes.",
                "L'espace Schengen n'inclut pas tous les membres de l'UE (l'Irlande n'en fait pas partie), mais il comprend des pays qui ne sont pas membres de l'UE, comme la Suisse ou la Norvège.",
                "La zone euro ne compte que 21 des 27 pays de l'UE : par exemple, la Pologne, la Suède ou le Danemark ont gardé leur monnaie nationale.",
                "Conclusion : chaque pays choisit de participer ou non à certaines politiques ; l'Europe est donc un territoire à géométrie variable.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, montrez que l'Union européenne est à la fois un territoire de référence et d'appartenance pour les Français, et un territoire marqué par des contrastes.",
              hint: "Deux parties : 1) l'appartenance (citoyenneté, libre circulation, euro, coopération transfrontalière) ; 2) les contrastes (centre, périphéries) et la politique de cohésion.",
              solution: [
                "Introduction : la France est l'un des six pays fondateurs de la construction européenne, en 1957. Aujourd'hui, l'Union européenne compte 27 États et environ 450 millions d'habitants.",
                "Partie 1 : depuis le traité de Maastricht (1992), les Français sont aussi citoyens européens : ils peuvent circuler, étudier et travailler librement dans l'UE, et voter aux élections européennes. La plupart vivent dans l'espace Schengen, sans contrôle systématique aux frontières intérieures, et utilisent l'euro depuis 2002. Dans les régions frontalières, des centaines de milliers de frontaliers travaillent au Luxembourg, en Suisse ou en Allemagne, et des structures comme l'Eurométropole Lille-Kortrijk-Tournai organisent la coopération.",
                "Partie 2 : le territoire de l'UE est contrasté. La dorsale européenne, du Benelux au nord de l'Italie, concentre métropoles et richesses, tandis que les périphéries du sud et de l'est sont moins développées. Pour réduire ces écarts, l'UE mène une politique de cohésion : le FEDER finance des équipements dans les régions, y compris en France.",
                "Conclusion : l'Union européenne est un territoire de référence et d'appartenance pour les Français, mais aussi un territoire inégal que l'Union cherche à rendre plus solidaire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la construction du territoire de l'Union européenne.",
            items: [
              "Traité de Rome signé par six pays fondateurs",
              "Entrée du Royaume-Uni, de l'Irlande et du Danemark",
              "Entrée de l'Espagne et du Portugal",
              "Traité de Maastricht et citoyenneté européenne",
              "Élargissement à dix pays, surtout d'Europe centrale et orientale",
              "Entrée de la Croatie",
              "Sortie du Royaume-Uni",
            ],
          },
          quiz: [
            {
              q: "Combien d'États compte l'Union européenne aujourd'hui ?",
              options: [
                "12",
                "28",
                "6",
                "27",
              ],
              answer: 3,
              why: "Depuis la sortie du Royaume-Uni en 2020, l'UE compte 27 États membres.",
            },
            {
              q: "Quel droit la citoyenneté européenne donne-t-elle à un Français qui vit en Italie ?",
              options: [
                "Voter à l'élection du président de la République italienne",
                "Voter aux élections municipales de sa commune italienne",
                "Ne plus payer d'impôts dans aucun pays",
              ],
              answer: 1,
              why: "Un citoyen européen peut voter et être candidat aux élections municipales et européennes dans le pays où il réside.",
            },
            {
              q: "Lequel de ces pays fait partie de l'espace Schengen sans être membre de l'UE ?",
              options: [
                "La Suisse",
                "L'Irlande",
                "Le Royaume-Uni",
                "La Turquie",
              ],
              answer: 0,
              why: "La Suisse appartient à l'espace Schengen sans être membre de l'UE ; l'Irlande est dans l'UE mais pas dans Schengen.",
            },
            {
              q: "Comment appelle-t-on l'axe très urbanisé et riche qui s'étend du Benelux au nord de l'Italie ?",
              options: [
                "La diagonale du vide",
                "La périphérie européenne",
                "La dorsale européenne",
              ],
              answer: 2,
              why: "La dorsale européenne concentre les grandes métropoles et les activités ; la diagonale du vide désigne des espaces peu peuplés du territoire français.",
            },
            {
              q: "Quel est le but principal de la politique de cohésion de l'UE ?",
              options: [
                "Fixer une langue commune obligatoire pour tous les pays membres",
                "Réduire les écarts de développement entre les régions",
                "Supprimer les frontières extérieures de l'Union européenne",
                "Remplacer les gouvernements nationaux par la Commission",
              ],
              answer: 1,
              why: "La politique de cohésion finance, notamment avec le FEDER, des projets dans les régions les moins développées pour réduire les inégalités.",
            },
          ],
          trap: "Confondre l'Union européenne, l'espace Schengen et la zone euro, ou croire que tous les pays d'Europe sont dans l'UE : la Suisse, la Norvège ou le Royaume-Uni n'en sont pas membres.",
          method: "Sur une carte de l'Europe, coloriez les 27 pays de l'UE, puis entourez ceux qui n'ont pas l'euro et hachurez les pays de Schengen hors UE. Une seule carte vous fera retenir les trois espaces et leurs différences.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-europe-monde',
          title: "La France et l'Europe dans le monde",
          minutes: 30,
          objectives: [
            "Décrire les atouts de la puissance de la France dans le monde : économiques, politiques, militaires, culturels.",
            "Expliquer le poids de l'Union européenne dans le monde et ses limites.",
            "Identifier l'influence de la France et de l'Europe à différentes échelles, à partir d'exemples précis.",
          ],
          course: [
            {
              heading: "La France, une puissance d'influence mondiale",
              paragraphs: [
                "La France est une puissance moyenne, mais à l'influence mondiale. Sur le plan politique et militaire, elle est l'un des cinq membres permanents du Conseil de sécurité de l'ONU depuis 1945, avec un droit de veto. Elle possède l'arme nucléaire depuis 1960, une armée capable d'intervenir loin de son territoire, et l'un des réseaux diplomatiques les plus étendus du monde. Elle est membre de l'OTAN.",
                "Grâce à ses territoires ultramarins, elle est présente sur tous les océans et possède l'une des deux plus vastes zones économiques exclusives (ZEE) du monde. Ses bases militaires et ses territoires lui donnent des points d'appui dans l'Atlantique, l'océan Indien et le Pacifique.",
              ],
              box: { label: "Définition", text: "La puissance est la capacité d'un État à imposer ses choix ou à influencer les autres, par des moyens économiques, militaires, diplomatiques ou culturels. Le soft power désigne l'influence obtenue par l'attraction (culture, langue, valeurs) plutôt que par la contrainte." },
            },
            {
              heading: "Une puissance économique et culturelle",
              paragraphs: [
                "La France fait partie des dix premières puissances économiques mondiales. Elle compte de grandes entreprises mondialisées dans le luxe, l'énergie, l'aéronautique, l'agroalimentaire ou la grande distribution. Elle est l'un des premiers exportateurs agricoles et de produits de luxe, et attire de nombreux investissements étrangers. Paris est une ville mondiale, où se tiennent de grandes rencontres internationales.",
                "La France est la première destination touristique du monde, avec près de 100 millions de touristes internationaux par an. Son rayonnement culturel passe par ses musées (le Louvre est le musée le plus visité au monde), sa gastronomie, sa mode, son cinéma et son patrimoine. La langue française est parlée par plus de 300 millions de personnes sur les cinq continents ; l'Organisation internationale de la francophonie (OIF) réunit des dizaines d'États et de gouvernements. Le réseau des lycées français et des Alliances françaises diffuse la langue à l'étranger.",
              ],
            },
            {
              heading: "L'Union européenne, une puissance dans le monde",
              paragraphs: [
                "L'Union européenne est l'un des pôles majeurs de la mondialisation. Avec environ 450 millions d'habitants au niveau de vie élevé, elle forme l'un des plus grands marchés du monde et l'une des premières puissances commerciales. L'euro est la deuxième monnaie utilisée dans les échanges internationaux, après le dollar. L'UE et ses États membres sont ensemble le premier donateur d'aide publique au développement.",
                "L'UE exerce aussi une influence par ses normes : pour vendre sur le marché européen, les entreprises du monde entier doivent respecter les règles européennes, par exemple le règlement général sur la protection des données (RGPD, 2018). Des coopérations européennes ont donné naissance à des réussites industrielles et technologiques : Airbus dans l'aéronautique, les fusées Ariane, le système de navigation par satellite Galileo.",
              ],
              box: { label: "À retenir", text: "La France est une puissance d'influence mondiale (siège permanent à l'ONU, arme nucléaire, ZEE, économie, culture, francophonie). L'UE est une puissance économique, commerciale et normative, dont la France est l'un des moteurs." },
            },
            {
              heading: "Des limites et des défis",
              paragraphs: [
                "La puissance de la France a des limites : son poids économique recule face aux pays émergents comme la Chine ou l'Inde, son industrie s'est réduite, et elle ne peut pas agir seule face aux grandes puissances. C'est pourquoi elle agit souvent dans le cadre européen.",
                "L'UE reste une puissance incomplète : elle n'a pas d'armée commune et dépend en grande partie de l'OTAN et des États-Unis pour sa défense ; ses États membres sont parfois divisés en politique étrangère ; elle dépend d'autres pays pour son énergie et certaines technologies. La guerre en Ukraine, depuis l'invasion russe de février 2022, l'a poussée à renforcer sa défense et à réduire sa dépendance au gaz russe.",
              ],
            },
          ],
          keyPoints: [
            "France : membre permanent du Conseil de sécurité de l'ONU, puissance nucléaire, réseau diplomatique étendu, membre de l'OTAN.",
            "Grâce à l'outre-mer, la France est présente sur tous les océans et possède l'une des deux plus vastes ZEE du monde.",
            "France : l'une des dix premières économies mondiales, première destination touristique, rayonnement culturel et francophonie.",
            "UE : environ 450 millions d'habitants, grand marché, puissance commerciale, euro, premier donateur d'aide au développement.",
            "UE : influence par ses normes (RGPD) et coopérations industrielles (Airbus, Ariane, Galileo).",
            "Limites : concurrence des pays émergents, absence d'armée européenne commune, divisions et dépendances.",
          ],
          example: {
            statement: "Montrez, à l'aide de trois arguments précis, que la France est une puissance d'influence mondiale.",
            solution: [
              "Définir la notion : une puissance est un État capable d'influencer les autres par différents moyens.",
              "Argument politique et militaire : la France est membre permanent du Conseil de sécurité de l'ONU, avec un droit de veto, et possède l'arme nucléaire depuis 1960.",
              "Argument territorial : grâce à ses territoires ultramarins, elle est présente sur tous les océans et possède l'une des deux plus vastes ZEE du monde.",
              "Argument économique et culturel : elle fait partie des dix premières économies mondiales et elle est la première destination touristique du monde ; le français est parlé par plus de 300 millions de personnes.",
              "Nuancer : son poids recule face aux pays émergents, et elle agit souvent dans le cadre de l'Union européenne.",
              "Conclure : la France est une puissance moyenne, mais à l'influence mondiale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les atouts suivants de la France selon leur nature (politique et militaire, économique, culturelle) : siège permanent au Conseil de sécurité de l'ONU ; première destination touristique mondiale ; arme nucléaire ; francophonie ; grandes entreprises du luxe ; musée du Louvre.",
              hint: "Trois catégories, deux atouts dans chacune. Le tourisme rapporte de l'argent : c'est un atout économique.",
              solution: [
                "Politique et militaire : siège permanent au Conseil de sécurité de l'ONU ; arme nucléaire.",
                "Économique : première destination touristique mondiale ; grandes entreprises du luxe.",
                "Culturelle : francophonie ; musée du Louvre.",
                "Remarque : certains atouts sont à la fois économiques et culturels, comme le tourisme, attiré par le patrimoine.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi on dit que l'Union européenne est « une puissance économique mais une puissance politique et militaire incomplète ».",
              hint: "Comparez ce que l'UE fait en commun (marché, commerce, monnaie, normes) et ce qu'elle ne fait pas encore en commun (armée, politique étrangère).",
              solution: [
                "Puissance économique : l'UE forme un grand marché d'environ 450 millions d'habitants, elle est l'une des premières puissances commerciales du monde et l'euro est la deuxième monnaie internationale.",
                "Elle impose ses normes aux entreprises étrangères qui veulent vendre en Europe, comme le RGPD.",
                "Puissance politique incomplète : ses 27 États membres sont parfois divisés et ne parlent pas toujours d'une seule voix en politique étrangère.",
                "Puissance militaire incomplète : il n'existe pas d'armée européenne commune ; la défense de l'Europe repose largement sur les armées nationales et sur l'OTAN, donc sur les États-Unis.",
                "Conclusion : l'UE pèse beaucoup dans l'économie mondiale, mais beaucoup moins dans les rapports de force politiques et militaires.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : en une vingtaine de lignes, montrez que la France et l'Union européenne exercent une influence dans le monde, mais que cette influence a des limites.",
              hint: "Trois paragraphes : la puissance de la France, la puissance de l'UE, les limites des deux. Citez au moins un exemple précis dans chaque paragraphe.",
              solution: [
                "Introduction : dans un monde dominé par les États-Unis et la Chine, la France et l'Union européenne cherchent à peser sur les affaires mondiales.",
                "Paragraphe 1 : la France est membre permanent du Conseil de sécurité de l'ONU et puissance nucléaire. Grâce à l'outre-mer, elle est présente sur tous les océans avec l'une des deux plus vastes ZEE du monde. Elle fait partie des dix premières économies mondiales et elle est la première destination touristique ; sa culture et la francophonie (plus de 300 millions de locuteurs) renforcent son influence.",
                "Paragraphe 2 : l'UE, avec environ 450 millions d'habitants, est l'une des premières puissances commerciales ; l'euro est la deuxième monnaie internationale. Elle impose ses normes, comme le RGPD, et ses coopérations ont créé Airbus, Ariane ou Galileo. Avec ses États membres, elle est le premier donateur d'aide au développement.",
                "Paragraphe 3 : ces influences ont des limites. La France recule face aux pays émergents ; l'UE n'a pas d'armée commune, dépend de l'OTAN pour sa défense et ses membres sont parfois divisés. La guerre en Ukraine depuis 2022 l'a obligée à renforcer sa défense.",
                "Conclusion : la France et l'Union européenne sont des puissances d'influence, et la France a intérêt à agir dans le cadre européen pour peser davantage.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément à ce qu'il apporte à la puissance de la France ou de l'Europe.",
            pairs: [
              { left: "Siège permanent au Conseil de sécurité", right: "Droit de veto sur les décisions de l'ONU" },
              { left: "Territoires ultramarins", right: "Présence sur tous les océans et vaste ZEE" },
              { left: "Francophonie", right: "Plus de 300 millions de locuteurs du français dans le monde" },
              { left: "Euro", right: "Deuxième monnaie des échanges internationaux" },
              { left: "RGPD", right: "Norme européenne imposée aux entreprises du monde entier" },
              { left: "Galileo", right: "Système européen de navigation par satellite" },
            ],
          },
          quiz: [
            {
              q: "Quel atout permet à la France de bloquer une décision du Conseil de sécurité de l'ONU ?",
              options: [
                "Son appartenance à la zone euro",
                "Son statut de première destination touristique mondiale",
                "Sa place de membre permanent, avec un droit de veto",
              ],
              answer: 2,
              why: "La France est l'un des cinq membres permanents du Conseil de sécurité depuis 1945 et dispose à ce titre d'un droit de veto.",
            },
            {
              q: "Grâce à quoi la France possède-t-elle l'une des plus vastes ZEE du monde ?",
              options: [
                "Ses territoires ultramarins",
                "Ses grandes métropoles comme Paris et Lyon",
                "Ses nombreuses centrales nucléaires sur le littoral",
                "Son appartenance à l'espace Schengen",
              ],
              answer: 0,
              why: "La quasi-totalité de la ZEE française se situe autour des territoires ultramarins, répartis sur tous les océans.",
            },
            {
              q: "Qu'est-ce que le soft power ?",
              options: [
                "La puissance militaire d'un pays mesurée par le nombre de ses soldats",
                "Un traité européen de 1992 sur la monnaie unique",
                "Le pouvoir des entreprises du numérique sur les États",
                "L'influence par l'attraction : culture, langue, valeurs",
              ],
              answer: 3,
              why: "Le soft power est l'influence obtenue par l'attraction plutôt que par la force, comme le rayonnement culturel de la France.",
            },
            {
              q: "Quelle réussite est issue d'une coopération industrielle européenne ?",
              options: [
                "Le Conseil de sécurité de l'ONU",
                "Airbus",
                "L'OTAN",
              ],
              answer: 1,
              why: "Airbus est né de la coopération entre plusieurs pays européens ; l'ONU et l'OTAN sont des organisations internationales, pas des réussites industrielles.",
            },
            {
              q: "Quelle est une limite de la puissance de l'Union européenne ?",
              options: [
                "Elle n'a pas d'armée commune",
                "Elle n'a aucun poids dans le commerce mondial",
                "Elle n'a pas de monnaie utilisée dans les échanges internationaux",
              ],
              answer: 0,
              why: "L'UE est une grande puissance commerciale et l'euro est la deuxième monnaie internationale, mais elle n'a pas d'armée commune et dépend de l'OTAN pour sa défense.",
            },
          ],
          trap: "Présenter la France comme une superpuissance comparable aux États-Unis ou à la Chine, ou au contraire comme un pays sans influence : c'est une puissance moyenne à l'influence mondiale, qui agit souvent avec l'Union européenne.",
          method: "Pour un sujet sur la puissance, classez toujours vos arguments en quatre familles (politique et militaire, territoriale, économique, culturelle) puis ajoutez une limite. Cette grille vous évite d'oublier un aspect et vous donne un plan tout prêt.",
        },
      ],
    },
    /* ==================================================================== */
    /* EMC, FAIRE VIVRE LA DÉMOCRATIE : L'ENGAGEMENT COLLECTIF               */
    /* ==================================================================== */
    {
      id: 'engagement-collectif',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'partis-syndicats-associations',
          title: "S'engager : partis politiques, syndicats et associations",
          minutes: 25,
          objectives: [
            "Définir l'engagement et distinguer un parti politique, un syndicat et une association.",
            "Identifier les textes qui garantissent la liberté de s'engager : loi de 1884, loi de 1901, Constitution.",
            "Expliquer le rôle de ces groupements dans la vie démocratique.",
          ],
          course: [
            {
              heading: "S'engager, c'est agir avec d'autres",
              paragraphs: [
                "S'engager, c'est choisir de consacrer du temps et de l'énergie à une cause qui dépasse son intérêt personnel : défendre une idée, aider les autres, protéger l'environnement, améliorer ses conditions de travail. L'engagement est individuel quand on agit seul (signer une pétition, voter) ; il est collectif quand on agit au sein d'un groupe organisé.",
                "En démocratie, la liberté de s'associer avec d'autres est un droit fondamental. Les citoyens peuvent rejoindre trois grands types de groupements : les partis politiques, les syndicats et les associations. Selon son rôle, on y est adhérent (on paie une cotisation), militant (on agit activement pour les idées du groupe) ou bénévole (on donne de son temps sans être payé).",
              ],
            },
            {
              heading: "Les partis politiques",
              paragraphs: [
                "Un parti politique rassemble des citoyens qui partagent des idées sur la manière de gouverner le pays. Il élabore un programme, sélectionne des candidats et cherche à gagner les élections pour exercer le pouvoir. L'article 4 de la Constitution de 1958 précise que les partis « concourent à l'expression du suffrage », qu'ils se forment et exercent leur activité librement, et qu'ils doivent respecter la souveraineté nationale et la démocratie.",
                "Le pluralisme politique, c'est-à-dire l'existence de plusieurs partis qui s'opposent pacifiquement, est une condition de la démocratie. Pour limiter l'influence de l'argent, les partis reçoivent un financement public en fonction de leurs résultats électoraux ; les dons des entreprises leur sont interdits depuis 1995 et ceux des particuliers sont plafonnés. La loi sur la parité (2000) les incite à présenter autant de femmes que d'hommes aux élections.",
              ],
              box: { label: "Repère", text: "Constitution de 1958, article 4 : les partis et groupements politiques concourent à l'expression du suffrage ; ils se forment et exercent leur activité librement." },
            },
            {
              heading: "Les syndicats",
              paragraphs: [
                "Un syndicat est une organisation qui défend les intérêts professionnels de ses membres : salaires, conditions de travail, emploi, sécurité. La loi Waldeck-Rousseau du 21 mars 1884 a autorisé la création des syndicats en France. Le préambule de la Constitution de 1946 reconnaît la liberté syndicale et le droit de grève.",
                "Il existe des syndicats de salariés (par exemple la CGT, la CFDT, Force ouvrière, la CFTC, la CFE-CGC) et des organisations d'employeurs (comme le MEDEF). Les syndicats négocient avec les employeurs et l'État des accords et des conventions collectives, représentent les salariés dans les entreprises et peuvent organiser des grèves ou des manifestations. En France, environ un salarié sur dix est syndiqué, mais les élections professionnelles concernent tous les salariés.",
              ],
            },
            {
              heading: "Les associations",
              paragraphs: [
                "La loi du 1er juillet 1901 définit l'association comme la convention par laquelle deux ou plusieurs personnes mettent en commun, de façon permanente, leurs connaissances ou leur activité dans un but autre que de partager des bénéfices. Il suffit d'en rédiger les statuts et de la déclarer en préfecture pour qu'elle existe juridiquement.",
                "La France compte plus d'un million d'associations actives, dans tous les domaines : sport, culture, solidarité, environnement, défense des droits, loisirs. Les Restos du cœur, fondés en 1985 par Coluche, ou les clubs sportifs de quartier en sont des exemples. Les associations reposent largement sur les bénévoles. Un mineur peut adhérer librement à une association ; à partir de 16 ans, il peut participer à sa création et à sa direction.",
              ],
              box: { label: "À retenir", text: "Parti politique : conquérir et exercer le pouvoir. Syndicat : défendre les intérêts professionnels (loi de 1884). Association : agir ensemble pour un but non lucratif (loi de 1901). Tous font vivre la démocratie." },
            },
          ],
          keyPoints: [
            "S'engager : agir pour une cause qui dépasse son intérêt personnel, seul ou dans un groupe organisé.",
            "Parti politique : propose un programme et des candidats pour exercer le pouvoir ; article 4 de la Constitution.",
            "Syndicat : défend les intérêts professionnels ; autorisé par la loi Waldeck-Rousseau de 1884 ; droit de grève reconnu en 1946.",
            "Association : groupement à but non lucratif, régi par la loi du 1er juillet 1901 ; repose souvent sur des bénévoles.",
            "Adhérent, militant, bénévole : trois façons de s'engager.",
            "Le pluralisme des partis et la liberté d'association sont des conditions de la démocratie.",
          ],
          example: {
            statement: "Léa veut agir contre la pollution de la rivière de sa commune. Indiquez trois formes d'engagement collectif possibles et précisez à chaque fois le type de groupement concerné.",
            solution: [
              "Rappeler que l'engagement collectif consiste à agir au sein d'un groupe organisé pour une cause d'intérêt général.",
              "Première forme : rejoindre ou créer une association de protection de l'environnement (loi de 1901), par exemple pour organiser des nettoyages des berges et alerter la mairie.",
              "Deuxième forme : militer dans un parti politique qui défend l'environnement, pour faire inscrire le problème dans un programme électoral.",
              "Troisième forme : si la pollution est liée à une usine, ses salariés peuvent s'appuyer sur leur syndicat pour exiger de meilleures conditions de sécurité et de respect de l'environnement.",
              "Conclure : selon l'objectif (agir directement, peser sur les décisions politiques, défendre des travailleurs), le groupement choisi n'est pas le même.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque groupement est un parti politique, un syndicat ou une association : a) un club de handball ; b) une organisation qui négocie les salaires des cheminots ; c) un groupement qui présente des candidats aux élections législatives ; d) les Restos du cœur ; e) le MEDEF.",
              hint: "Demandez-vous quel est le but : exercer le pouvoir, défendre des intérêts professionnels, ou agir ensemble sans but lucratif.",
              solution: [
                "a) Association : un club sportif est une association de la loi de 1901.",
                "b) Syndicat : il défend les intérêts professionnels de salariés.",
                "c) Parti politique : il présente des candidats pour exercer le pouvoir.",
                "d) Association : les Restos du cœur sont une association de solidarité.",
                "e) Organisation d'employeurs : le MEDEF défend les intérêts des entreprises ; c'est un syndicat patronal.",
              ],
            },
            {
              level: 2,
              statement: "Document : « Les partis et groupements politiques concourent à l'expression du suffrage. Ils se forment et exercent leur activité librement. Ils doivent respecter les principes de la souveraineté nationale et de la démocratie. » (Constitution de 1958, article 4.) 1) Présentez le document. 2) Quel est le rôle des partis selon ce texte ? 3) Quelles libertés et quelles limites le texte fixe-t-il ?",
              hint: "« Concourir à l'expression du suffrage » signifie aider les électeurs à faire un choix en leur proposant des candidats et des idées.",
              solution: [
                "1) C'est l'article 4 de la Constitution de la Ve République, adoptée en 1958 ; c'est le texte juridique le plus élevé en France.",
                "2) Les partis aident les citoyens à exprimer leur choix lors des élections : ils proposent des programmes et des candidats.",
                "3) Liberté : chacun peut créer un parti et militer sans autorisation préalable ; c'est la base du pluralisme.",
                "Limites : les partis doivent respecter la souveraineté nationale (le pouvoir appartient au peuple) et la démocratie ; un groupement qui voudrait renverser la démocratie par la force ne respecterait pas ce texte.",
              ],
            },
            {
              level: 3,
              statement: "Question de réflexion (type brevet) : « Pourquoi l'engagement collectif est-il indispensable à la démocratie ? » Rédigez une réponse argumentée d'une quinzaine de lignes, en vous appuyant sur les partis, les syndicats et les associations.",
              hint: "Un argument par type de groupement, avec un texte de loi ou un exemple pour chacun, puis une conclusion sur la responsabilité du citoyen.",
              solution: [
                "Introduction : la démocratie ne se limite pas au vote ; elle vit aussi grâce aux citoyens qui s'engagent ensemble.",
                "Argument 1 : les partis politiques, reconnus par l'article 4 de la Constitution, proposent des programmes et des candidats ; leur pluralisme permet aux électeurs de choisir réellement.",
                "Argument 2 : les syndicats, autorisés depuis la loi de 1884, défendent les salariés et négocient avec les employeurs ; ils permettent de régler les conflits du travail par le dialogue.",
                "Argument 3 : les associations, régies par la loi de 1901, agissent là où l'État ne suffit pas (solidarité, sport, culture, environnement) et font entendre des causes, comme les Restos du cœur face à la pauvreté.",
                "Ces groupements forment aussi les citoyens au débat, à l'élection de responsables et à la prise de décision collective.",
                "Conclusion : sans engagement collectif, les citoyens seraient isolés face au pouvoir ; s'engager est un droit, et une manière de faire vivre la démocratie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'engagement collectif.",
            statements: [
              { text: "La loi de 1901 encadre les associations.", true: true, why: "La loi du 1er juillet 1901 définit l'association et permet de la déclarer en préfecture." },
              { text: "Un syndicat a pour but principal de gagner l'élection présidentielle.", true: false, why: "C'est le rôle d'un parti politique ; le syndicat défend les intérêts professionnels de ses membres." },
              { text: "Les syndicats sont autorisés en France depuis 1884.", true: true, why: "La loi Waldeck-Rousseau du 21 mars 1884 autorise les syndicats professionnels." },
              { text: "Une association a pour but de partager des bénéfices entre ses membres.", true: false, why: "Par définition, une association poursuit un but autre que le partage des bénéfices." },
              { text: "Un collégien peut adhérer à une association.", true: true, why: "Un mineur peut librement adhérer à une association ; il peut participer à sa création à partir de 16 ans." },
              { text: "Une entreprise peut financer librement un parti politique.", true: false, why: "Depuis 1995, les dons des entreprises aux partis politiques sont interdits." },
              { text: "Le droit de grève est reconnu par le préambule de la Constitution de 1946.", true: true, why: "Le préambule de 1946 affirme que le droit de grève s'exerce dans le cadre des lois qui le réglementent." },
            ],
          },
          quiz: [
            {
              q: "Quel est le but principal d'un parti politique ?",
              options: [
                "Défendre les salaires des travailleurs d'un métier précis",
                "Organiser des activités sportives pour les jeunes du quartier",
                "Collecter des dons pour les personnes en difficulté",
                "Conquérir et exercer le pouvoir",
              ],
              answer: 3,
              why: "Un parti propose un programme et des candidats aux élections pour exercer le pouvoir ; les autres propositions décrivent un syndicat ou des associations.",
            },
            {
              q: "Quelle loi autorise les syndicats en France ?",
              options: [
                "La loi Waldeck-Rousseau de 1884",
                "La loi du 1er juillet 1901",
                "La loi Veil de 1975",
              ],
              answer: 0,
              why: "La loi Waldeck-Rousseau du 21 mars 1884 autorise les syndicats ; la loi de 1901 concerne les associations.",
            },
            {
              q: "Qu'est-ce qu'un bénévole ?",
              options: [
                "Un salarié d'une association payé à l'heure",
                "Un élu municipal qui représente sa commune",
                "Une personne qui donne de son temps sans être rémunérée",
              ],
              answer: 2,
              why: "Le bénévole s'engage gratuitement ; les associations reposent en grande partie sur le bénévolat.",
            },
            {
              q: "Que garantit le pluralisme politique ?",
              options: [
                "Un parti unique qui représente toute la nation",
                "L'existence de plusieurs partis qui peuvent s'opposer librement",
                "L'interdiction pour les partis de critiquer le gouvernement",
                "Le droit pour l'État de choisir les candidats aux élections",
              ],
              answer: 1,
              why: "Le pluralisme permet aux électeurs de choisir entre plusieurs partis et plusieurs programmes ; c'est une condition de la démocratie.",
            },
            {
              q: "Quel texte reconnaît le droit de grève ?",
              options: [
                "La Déclaration des droits de l'homme de 1789",
                "Le Code de la route",
                "Le traité de Rome de 1957",
                "Le préambule de la Constitution de 1946",
              ],
              answer: 3,
              why: "Le préambule de 1946, toujours en vigueur, reconnaît la liberté syndicale et le droit de grève.",
            },
          ],
          trap: "Confondre syndicat et parti politique : un syndicat défend les intérêts professionnels et ne présente pas de candidats aux élections politiques. Autre erreur : inverser les dates des lois de 1884 (syndicats) et de 1901 (associations).",
          method: "Retenez les trois groupements avec une phrase-clé et une date chacun : parti, « gouverner », article 4 de 1958 ; syndicat, « défendre son métier », 1884 ; association, « agir ensemble sans profit », 1901. Récitez-les sans regarder, puis vérifiez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'engagement-college',
          title: "S'engager au collège : délégués et conseil de vie collégienne",
          minutes: 20,
          objectives: [
            "Décrire l'élection et le rôle des délégués de classe.",
            "Identifier les instances où les élèves sont représentés : conseil de classe, conseil de vie collégienne, conseil d'administration.",
            "Expliquer comment un collégien peut s'engager concrètement dans la vie de son établissement.",
          ],
          course: [
            {
              heading: "Les délégués de classe",
              paragraphs: [
                "Au début de l'année, chaque classe élit deux délégués et leurs suppléants (qui les remplacent en cas d'absence). Tous les élèves de la classe sont électeurs et peuvent être candidats. L'élection se fait au scrutin secret, uninominal, à deux tours : pour être élu au premier tour, il faut obtenir la majorité absolue, c'est-à-dire plus de la moitié des suffrages exprimés ; au second tour, la majorité relative suffit (le plus grand nombre de voix).",
                "Le délégué est le porte-parole de la classe : il recueille l'avis des élèves et le transmet aux professeurs, au professeur principal ou à la direction. Il participe au conseil de classe, où il présente le bilan de la classe et rapporte ensuite ce qui a été dit, dans le respect de la confidentialité des situations individuelles. Il peut aussi jouer un rôle de médiateur en cas de conflit.",
                "Un délégué n'est ni un surveillant, ni un chef : il représente tous les élèves de la classe, y compris ceux qui n'ont pas voté pour lui. C'est une première expérience de la démocratie représentative.",
              ],
              box: { label: "Définition", text: "Être délégué, c'est représenter la classe : recueillir les avis, les transmettre aux adultes et rendre compte aux élèves. Le délégué est élu pour l'année scolaire, au scrutin secret." },
            },
            {
              heading: "Les instances où les élèves ont la parole",
              paragraphs: [
                "Au conseil de classe, réuni chaque trimestre ou semestre, les professeurs, la direction, les délégués des parents et les délégués des élèves examinent les résultats et le comportement de la classe et de chaque élève. Les délégués des élèves peuvent y présenter les difficultés ou les réussites de la classe.",
                "Le conseil de vie collégienne (CVC) réunit des élèves élus et des adultes de l'établissement (professeurs, personnels de direction, de vie scolaire), sous la présidence du chef d'établissement. Il formule des propositions sur la vie quotidienne au collège : aménagement de la cour ou du foyer, organisation de la pause méridienne, actions de solidarité, projets culturels ou sportifs, lutte contre le harcèlement.",
                "Le conseil d'administration (CA) est l'organe qui prend les grandes décisions du collège : il vote le budget et le règlement intérieur. Des représentants des élèves y siègent aux côtés des représentants des personnels, des parents et des collectivités.",
              ],
            },
            {
              heading: "D'autres façons de s'engager",
              paragraphs: [
                "Depuis 2020, chaque classe de collège et de lycée élit aussi des éco-délégués, chargés de proposer des actions pour l'environnement : tri des déchets, lutte contre le gaspillage alimentaire à la cantine, économies d'énergie. Dans le cadre de la lutte contre le harcèlement, des élèves volontaires et formés peuvent devenir ambassadeurs pour aider leurs camarades.",
                "On peut aussi s'engager dans l'association sportive (AS) ou le foyer socio-éducatif du collège, participer au journal ou à la radio de l'établissement, ou siéger dans un conseil municipal des jeunes. Toutes ces expériences apprennent à débattre, à écouter les autres, à construire un projet collectif et à en rendre compte : ce sont les compétences du citoyen.",
              ],
              box: { label: "À retenir", text: "Au collège, les élèves s'engagent comme délégués de classe, élus au CVC ou au CA, éco-délégués, ou dans l'association sportive. Ils y apprennent la démocratie représentative et le travail collectif." },
            },
          ],
          keyPoints: [
            "Chaque classe élit deux délégués et leurs suppléants, au scrutin secret uninominal à deux tours.",
            "Majorité absolue au premier tour (plus de la moitié des suffrages exprimés), majorité relative au second.",
            "Le délégué est le porte-parole de toute la classe ; il siège au conseil de classe et rend compte aux élèves.",
            "Le conseil de vie collégienne (CVC) fait des propositions sur la vie quotidienne au collège.",
            "Le conseil d'administration vote le budget et le règlement intérieur ; des élèves y sont représentés.",
            "Autres engagements : éco-délégués (depuis 2020), ambassadeurs contre le harcèlement, association sportive.",
          ],
          example: {
            statement: "Dans une classe de 26 élèves, 24 votent au premier tour de l'élection des délégués et 2 bulletins sont blancs. Inès obtient 11 voix, Tom 8 voix et Yanis 3 voix. Inès est-elle élue dès le premier tour ?",
            solution: [
              "Calculer les suffrages exprimés : les bulletins blancs ne sont pas des suffrages exprimés, donc 24 - 2 = 22 suffrages exprimés.",
              "Vérifier le total : 11 + 8 + 3 = 22, ce qui correspond bien aux suffrages exprimés.",
              "Calculer la majorité absolue : plus de la moitié de 22, soit plus de 11 ; il faut donc au moins 12 voix.",
              "Comparer : Inès a 11 voix, ce qui ne dépasse pas la moitié des suffrages exprimés.",
              "Conclure : Inès n'est pas élue au premier tour ; un second tour est organisé, où la majorité relative suffira.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Vrai ou faux ? Corrigez les affirmations fausses. a) Le délégué est choisi par le professeur principal. b) Le délégué représente seulement les élèves qui ont voté pour lui. c) Le délégué participe au conseil de classe. d) Le conseil d'administration vote le règlement intérieur du collège.",
              hint: "Relisez le rôle du délégué : comment est-il désigné, qui représente-t-il, où siège-t-il ?",
              solution: [
                "a) Faux : le délégué est élu par les élèves de la classe, au scrutin secret.",
                "b) Faux : il représente tous les élèves de la classe, même ceux qui n'ont pas voté pour lui.",
                "c) Vrai : il assiste au conseil de classe, présente le bilan de la classe et en rend compte.",
                "d) Vrai : le conseil d'administration vote le budget et le règlement intérieur.",
              ],
            },
            {
              level: 2,
              statement: "Élection dans une classe de 28 élèves : 27 votent, 1 bulletin est nul. Résultats du premier tour : Lina 15 voix, Hugo 7 voix, Sarah 4 voix. 1) Calculez le nombre de suffrages exprimés. 2) Quelle est la majorité absolue ? 3) Lina est-elle élue au premier tour ?",
              hint: "Les bulletins nuls ne comptent pas dans les suffrages exprimés. La majorité absolue, c'est plus de la moitié des suffrages exprimés.",
              solution: [
                "1) Suffrages exprimés : 27 - 1 = 26 ; vérification : 15 + 7 + 4 = 26.",
                "2) La moitié de 26 est 13 ; la majorité absolue est donc de 14 voix au moins.",
                "3) Lina a 15 voix, soit plus que 14 : elle obtient la majorité absolue.",
                "Résultat : Lina est élue dès le premier tour.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet) : élu au conseil de vie collégienne, vous constatez que beaucoup d'élèves se plaignent du bruit et de l'attente à la cantine. 1) Expliquez pourquoi le CVC est l'instance adaptée pour traiter ce problème. 2) Décrivez les étapes de votre démarche, du recueil de l'avis des élèves jusqu'à la décision. 3) Montrez en quoi cette démarche est un engagement citoyen.",
              hint: "Pensez aux étapes d'un projet démocratique : consulter, proposer, débattre, faire décider par l'instance compétente, rendre compte.",
              solution: [
                "1) Le CVC réunit des élèves élus et des adultes de l'établissement ; son rôle est justement de faire des propositions sur la vie quotidienne au collège, comme la pause méridienne.",
                "2) Étape 1 : recueillir l'avis des élèves, par exemple par un questionnaire diffusé avec l'aide des délégués de classe.",
                "Étape 2 : analyser les réponses et élaborer des propositions précises (horaires de passage par niveau, panneaux d'information, aménagements contre le bruit).",
                "Étape 3 : présenter et débattre de ces propositions en réunion du CVC avec les adultes, dont le chef d'établissement et le gestionnaire.",
                "Étape 4 : si une décision relève du conseil d'administration ou de la direction, la leur transmettre ; puis informer les élèves des décisions prises.",
                "3) C'est un engagement citoyen : on agit pour l'intérêt général de tous les élèves, en respectant les règles de la démocratie représentative (consulter, débattre, décider, rendre compte).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'élection des délégués de classe.",
            items: [
              "Présentation du rôle de délégué à la classe",
              "Dépôt des candidatures",
              "Présentation des candidats et de leurs projets",
              "Vote à bulletin secret au premier tour",
              "Dépouillement et calcul de la majorité absolue",
              "Second tour si aucun candidat n'a la majorité absolue",
              "Proclamation des résultats",
            ],
          },
          quiz: [
            {
              q: "Combien de délégués titulaires chaque classe élit-elle ?",
              options: [
                "Un",
                "Deux",
                "Quatre",
              ],
              answer: 1,
              why: "Chaque classe élit deux délégués titulaires, chacun avec un suppléant.",
            },
            {
              q: "Que faut-il pour être élu au premier tour ?",
              options: [
                "Avoir plus de voix que chacun des autres candidats",
                "Obtenir au moins un quart des voix de la classe",
                "Être soutenu par le professeur principal",
                "La majorité absolue des suffrages exprimés",
              ],
              answer: 3,
              why: "Au premier tour, il faut plus de la moitié des suffrages exprimés ; au second tour, la majorité relative suffit.",
            },
            {
              q: "Quel est le rôle du délégué ?",
              options: [
                "Être le porte-parole de toute la classe",
                "Surveiller et sanctionner ses camarades",
                "Décider seul des sorties scolaires de la classe",
              ],
              answer: 0,
              why: "Le délégué recueille l'avis des élèves et le transmet aux adultes ; il n'a aucun pouvoir de surveillance ni de sanction.",
            },
            {
              q: "Quelle instance vote le règlement intérieur du collège ?",
              options: [
                "Le conseil de classe",
                "Le conseil de vie collégienne",
                "Le conseil d'administration",
                "L'assemblée des délégués de 6e",
              ],
              answer: 2,
              why: "Le conseil d'administration vote le budget et le règlement intérieur ; le CVC fait des propositions sur la vie collégienne.",
            },
            {
              q: "Que sont les éco-délégués ?",
              options: [
                "Des surveillants chargés du ménage dans la cour",
                "Des élèves élus qui proposent des actions pour l'environnement",
                "Des représentants des parents élus au conseil d'administration",
              ],
              answer: 1,
              why: "Depuis 2020, chaque classe de collège et de lycée élit des éco-délégués qui portent des projets en faveur de l'environnement.",
            },
          ],
          trap: "Croire que le délégué est un « chef » ou un surveillant, ou oublier qu'il représente toute la classe. En calcul, l'erreur classique est de compter les bulletins blancs et nuls dans les suffrages exprimés.",
          method: "Pour vérifier une majorité absolue, suivez toujours trois étapes : retirez les blancs et nuls pour obtenir les suffrages exprimés, divisez par deux, puis exigez strictement plus que ce résultat.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'servir-interet-general',
          title: "Servir l'intérêt général : engagement civique et institutions",
          minutes: 25,
          objectives: [
            "Définir l'intérêt général et le distinguer des intérêts particuliers.",
            "Décrire le parcours de citoyenneté : recensement, journée défense et citoyenneté, inscription sur les listes électorales.",
            "Identifier des formes d'engagement au service de l'intérêt général : service civique, réserves, sapeurs-pompiers volontaires, jurés.",
            "Expliquer le lien entre engagement des citoyens, défense et cohésion de la nation.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'intérêt général ?",
              paragraphs: [
                "L'intérêt général est ce qui est bon pour l'ensemble de la société, au-delà de la somme des intérêts particuliers de chacun. Construire une école, assurer la sécurité, protéger l'environnement ou soigner tout le monde relèvent de l'intérêt général, même si cela demande à chacun un effort, par exemple en payant des impôts.",
                "Dans une démocratie, ce sont les citoyens et leurs représentants élus qui définissent l'intérêt général par le débat et le vote. L'État et les collectivités le mettent en œuvre grâce aux services publics, assurés par des agents publics. Mais les citoyens peuvent aussi y contribuer directement, par leur engagement.",
              ],
              box: { label: "Définition", text: "L'intérêt général est ce qui profite à l'ensemble de la société. Il se distingue des intérêts particuliers, ceux d'une personne ou d'un groupe. Servir l'intérêt général, c'est agir pour la collectivité." },
            },
            {
              heading: "Le parcours de citoyenneté",
              paragraphs: [
                "Depuis la suspension du service militaire obligatoire, décidée en 1997, chaque jeune suit un parcours de citoyenneté. Il commence au collège avec l'enseignement de défense dans les programmes. À 16 ans, chaque jeune Français, fille ou garçon, doit se faire recenser à la mairie (ou en ligne) dans les trois mois qui suivent son anniversaire ; l'attestation de recensement est demandée pour s'inscrire à certains examens et concours, et pour le permis de conduire avant 25 ans.",
                "Le recensement entraîne la convocation à la journée défense et citoyenneté (JDC), obligatoire avant 25 ans. On y présente les enjeux de la défense, les métiers et les formes d'engagement, et l'on y teste les acquis en lecture. Le recensement permet aussi l'inscription automatique sur les listes électorales à 18 ans.",
              ],
              box: { label: "Repère", text: "1997 : suspension du service militaire obligatoire. 16 ans : recensement obligatoire. Avant 25 ans : journée défense et citoyenneté. 18 ans : inscription automatique sur les listes électorales." },
            },
            {
              heading: "S'engager au service des autres",
              paragraphs: [
                "Le service civique, créé en 2010, permet aux jeunes de 16 à 25 ans (jusqu'à 30 ans pour les jeunes en situation de handicap) d'effectuer une mission d'intérêt général de six à douze mois, indemnisée, dans une association, une collectivité ou un établissement public : aide aux devoirs, protection de l'environnement, accompagnement de personnes âgées. Aucun diplôme n'est exigé.",
                "D'autres citoyens s'engagent comme sapeurs-pompiers volontaires, possible dès 16 ans : environ quatre sapeurs-pompiers sur cinq en France sont des volontaires, qui exercent un autre métier à côté. D'autres rejoignent la réserve opérationnelle des armées, de la police ou de la gendarmerie, ou la réserve civique pour des missions de solidarité.",
                "Certains engagements sont des devoirs civiques : être juré de cour d'assises, quand on est tiré au sort sur les listes électorales (à partir de 23 ans), ou tenir un bureau de vote comme assesseur. Le bénévolat associatif et les mandats d'élus locaux, souvent peu ou pas rémunérés dans les petites communes, sont aussi au service de l'intérêt général.",
              ],
            },
            {
              heading: "Engagement, défense et cohésion nationale",
              paragraphs: [
                "La défense nationale ne concerne pas seulement les militaires : elle repose aussi sur l'esprit de défense des citoyens, leur connaissance des menaces (terrorisme, cyberattaques, désinformation) et leur capacité à réagir en cas de crise, par exemple en connaissant les gestes de premiers secours.",
                "L'engagement renforce la cohésion nationale : il rapproche des personnes d'origines et de milieux différents autour d'un projet commun. Il traduit la fraternité, l'un des termes de la devise républicaine, dont le Conseil constitutionnel a reconnu en 2018 qu'elle est un principe à valeur constitutionnelle. S'engager, c'est passer de citoyen titulaire de droits à citoyen acteur.",
              ],
              box: { label: "À retenir", text: "Servir l'intérêt général, c'est agir pour la collectivité : par les devoirs du parcours de citoyenneté (recensement, JDC), et par des engagements volontaires (service civique, sapeurs-pompiers volontaires, réserves, bénévolat)." },
            },
          ],
          keyPoints: [
            "Intérêt général : ce qui profite à toute la société, au-delà des intérêts particuliers ; mis en œuvre par les services publics.",
            "Parcours de citoyenneté : recensement à 16 ans, journée défense et citoyenneté avant 25 ans, inscription électorale automatique à 18 ans.",
            "Le service militaire obligatoire est suspendu depuis 1997.",
            "Service civique (depuis 2010) : mission d'intérêt général de 6 à 12 mois pour les 16-25 ans.",
            "Sapeurs-pompiers volontaires (dès 16 ans), réserves, bénévolat, jurés d'assises : autant de façons de servir la collectivité.",
            "L'engagement exprime la fraternité et renforce la cohésion nationale et l'esprit de défense.",
          ],
          example: {
            statement: "Nour vient d'avoir 16 ans. Expliquez-lui les démarches civiques qu'elle doit accomplir et les possibilités d'engagement qui s'offrent à elle.",
            solution: [
              "Première démarche obligatoire : se faire recenser à la mairie ou en ligne dans les trois mois qui suivent ses 16 ans ; garder l'attestation, utile pour les examens et le permis de conduire.",
              "Conséquence : elle sera convoquée à la journée défense et citoyenneté, obligatoire avant 25 ans.",
              "Autre conséquence : le recensement permettra son inscription automatique sur les listes électorales à 18 ans.",
              "Possibilités d'engagement dès maintenant : devenir sapeur-pompier volontaire (dès 16 ans), s'engager dans une association, effectuer un service civique (de 16 à 25 ans).",
              "Conclure : Nour accomplit ainsi ses devoirs civiques et peut choisir de servir l'intérêt général par un engagement volontaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque âge à l'étape correspondante : 16 ans ; avant 25 ans ; 18 ans ; à partir de 23 ans. Étapes : journée défense et citoyenneté ; recensement ; inscription automatique sur les listes électorales ; possibilité d'être tiré au sort comme juré d'assises.",
              hint: "Le recensement déclenche les deux étapes suivantes du parcours de citoyenneté.",
              solution: [
                "16 ans : recensement obligatoire, dans les trois mois qui suivent l'anniversaire.",
                "Avant 25 ans : journée défense et citoyenneté.",
                "18 ans : inscription automatique sur les listes électorales.",
                "À partir de 23 ans : possibilité d'être tiré au sort comme juré de cour d'assises.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des situations suivantes, dites si la personne sert l'intérêt général ou un intérêt particulier, et justifiez : a) un jeune effectue un service civique d'aide aux devoirs dans une association ; b) un commerçant fait de la publicité pour son magasin ; c) une infirmière devient sapeur-pompier volontaire le week-end ; d) un groupe d'habitants s'oppose à un parc éolien uniquement pour garder sa vue.",
              hint: "Demandez-vous à qui profite l'action : à toute la collectivité ou seulement à la personne ou au groupe qui agit ?",
              solution: [
                "a) Intérêt général : la mission profite à des élèves en difficulté et à la société.",
                "b) Intérêt particulier : la publicité sert les ventes du commerçant, ce qui est légitime mais ne vise pas la collectivité.",
                "c) Intérêt général : elle protège et secourt tous les habitants.",
                "d) Intérêt particulier : leur motivation est la protection de leur propre cadre de vie ; un débat démocratique doit trancher entre cet intérêt et l'intérêt général (la production d'énergie renouvelable).",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet) : votre commune manque de sapeurs-pompiers volontaires et les associations d'aide aux personnes âgées cherchent des bénévoles. Le conseil municipal des jeunes vous demande de préparer une intervention au collège. 1) Expliquez ce qu'est l'intérêt général. 2) Présentez deux formes d'engagement accessibles aux jeunes. 3) Montrez en quoi ces engagements renforcent la cohésion de la société.",
              hint: "Utilisez la définition de l'intérêt général, citez des âges et des dispositifs précis (sapeurs-pompiers volontaires dès 16 ans, service civique, bénévolat), et terminez par la fraternité.",
              solution: [
                "1) L'intérêt général est ce qui profite à l'ensemble de la société, au-delà des intérêts particuliers : la sécurité, les secours ou l'aide aux plus fragiles en font partie.",
                "2) Première forme : devenir sapeur-pompier volontaire, possible dès 16 ans ; en France, environ quatre sapeurs-pompiers sur cinq sont des volontaires, indispensables aux secours.",
                "Deuxième forme : s'engager comme bénévole dans une association d'aide aux personnes âgées, ou, entre 16 et 25 ans, y effectuer un service civique indemnisé de six à douze mois.",
                "3) Ces engagements créent des liens entre générations et entre personnes de milieux différents ; ils rompent l'isolement et assurent la sécurité de tous.",
                "Ils traduisent la fraternité, troisième terme de la devise républicaine, et font de chaque jeune un citoyen acteur de sa commune.",
                "Conclusion : servir l'intérêt général n'est pas réservé aux adultes ou aux professionnels ; chacun peut y contribuer selon son âge et ses possibilités.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque forme d'engagement ou étape civique à sa description.",
            pairs: [
              { left: "Recensement", right: "Démarche obligatoire à la mairie dans les trois mois après 16 ans" },
              { left: "JDC", right: "Journée obligatoire avant 25 ans sur la défense et l'engagement" },
              { left: "Service civique", right: "Mission indemnisée d'intérêt général de 6 à 12 mois pour les 16-25 ans" },
              { left: "Sapeur-pompier volontaire", right: "Citoyen qui assure des secours en plus de son métier, dès 16 ans" },
              { left: "Juré d'assises", right: "Citoyen tiré au sort sur les listes électorales pour juger des crimes" },
              { left: "Réserve opérationnelle", right: "Engagement à temps partiel auprès des armées ou de la gendarmerie" },
            ],
          },
          quiz: [
            {
              q: "À quel âge doit-on se faire recenser ?",
              options: [
                "À 14 ans, lors de l'entrée en 3e",
                "À 18 ans, au moment du premier vote",
                "À 16 ans",
                "À 21 ans, à la fin des études",
              ],
              answer: 2,
              why: "Le recensement est obligatoire dans les trois mois qui suivent le seizième anniversaire, pour les filles comme pour les garçons.",
            },
            {
              q: "Depuis quand le service militaire obligatoire est-il suspendu ?",
              options: [
                "1997",
                "1945",
                "1962",
                "2010",
              ],
              answer: 0,
              why: "La loi de 1997 suspend le service militaire obligatoire et crée le parcours de citoyenneté, dont la journée défense et citoyenneté.",
            },
            {
              q: "Qu'est-ce que le service civique ?",
              options: [
                "Une journée obligatoire organisée par l'armée pour tous les jeunes",
                "Un examen obligatoire pour obtenir le droit de vote",
                "Une amende pour les citoyens qui ne votent pas",
                "Une mission volontaire et indemnisée d'intérêt général",
              ],
              answer: 3,
              why: "Créé en 2010, le service civique est un engagement volontaire de six à douze mois pour les 16-25 ans ; la journée obligatoire est la JDC.",
            },
            {
              q: "Comment désigne-t-on les jurés de cour d'assises ?",
              options: [
                "Ils sont élus par le conseil municipal",
                "Ils sont tirés au sort sur les listes électorales",
                "Ils se portent candidats auprès du tribunal",
              ],
              answer: 1,
              why: "Les jurés sont des citoyens tirés au sort sur les listes électorales ; siéger est un devoir civique.",
            },
            {
              q: "Quelle définition correspond à l'intérêt général ?",
              options: [
                "L'intérêt du gouvernement en place, quel qu'il soit",
                "La somme des intérêts de chaque personne prise isolément",
                "Ce qui profite à l'ensemble de la société",
              ],
              answer: 2,
              why: "L'intérêt général dépasse les intérêts particuliers ; il est défini démocratiquement par les citoyens et leurs représentants.",
            },
          ],
          trap: "Confondre le service civique (volontaire, de 6 à 12 mois) et la journée défense et citoyenneté (obligatoire, une journée), ou croire que le recensement ne concerne que les garçons.",
          method: "Retenez le parcours de citoyenneté comme une frise d'âges : 16 ans (recensement), avant 25 ans (JDC), 18 ans (inscription électorale). Placez à côté les engagements volontaires possibles à chaque âge ; une frise se retient mieux qu'une liste.",
        },
      ],
    },
    /* ==================================================================== */
    /* DIPLÔME NATIONAL DU BREVET : PRÉPARER L'ÉPREUVE D'HG ET D'EMC         */
    /* ==================================================================== */
    {
      id: 'preparer-brevet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'analyser-document',
          title: 'Analyser un document en histoire et en géographie',
          minutes: 30,
          objectives: [
            "Identifier la nature, l'auteur, la date et le contexte d'un document.",
            "Prélever des informations pertinentes dans un document et les citer correctement.",
            "Expliquer un document en le confrontant à ses connaissances.",
            "Exercer un regard critique sur un document : point de vue de l'auteur, intention, limites.",
          ],
          course: [
            {
              heading: "Le premier exercice du brevet : analyser et comprendre des documents",
              paragraphs: [
                "L'épreuve d'histoire-géographie et d'enseignement moral et civique du brevet dure deux heures. Son premier exercice, « Analyser et comprendre des documents », porte sur un ou deux documents d'histoire ou de géographie. Les questions sont progressives : d'abord présenter et relever, puis expliquer, et parfois rédiger quelques lignes pour conclure.",
                "Les documents sont de plusieurs types, et chacun se lit avec ses propres règles : des textes (discours, extrait de loi, témoignage, article de presse), des images (photographie, affiche, caricature, peinture), des documents statistiques (tableau, graphique) et des cartes. En géographie, on trouve souvent des photographies de paysages et des cartes à différentes échelles.",
              ],
              box: { label: "Repère", text: "L'épreuve compte trois exercices : 1. analyser et comprendre des documents (histoire ou géographie) ; 2. maîtriser différents langages, avec un développement construit et des repères, dans l'autre discipline ; 3. un exercice d'enseignement moral et civique, à partir d'une situation pratique." },
            },
            {
              heading: "Étape 1 : présenter le document",
              paragraphs: [
                "Présenter un document, c'est répondre à quelques questions simples. Quoi ? C'est sa nature (un discours, une carte, une affiche). Qui ? C'est l'auteur, avec sa fonction et son point de vue. Quand ? C'est la date du document, à ne pas confondre avec la date des faits qu'il évoque. Pour qui ? C'est le destinataire. Dans quel contexte ? Ce sont les événements qui l'expliquent.",
                "Toutes ces informations se trouvent dans le paratexte : le titre, la légende, la source et les notes placées autour du document. Par exemple, l'Appel du 18 juin 1940 est un discours radiodiffusé, prononcé à Londres sur les ondes de la BBC par le général de Gaulle, et destiné aux Français. Son contexte est la défaite militaire de la France face à l'Allemagne nazie : la veille, le maréchal Pétain a annoncé à la radio qu'il fallait cesser le combat.",
              ],
              box: { label: "Méthode", text: "Présenter un document : nature, auteur, date, destinataire, contexte. Pour un document de géographie, ajoutez le lieu représenté, l'échelle (locale, nationale, mondiale) et le thème." },
            },
            {
              heading: "Étape 2 : prélever des informations",
              paragraphs: [
                "Relever, c'est citer exactement le document, entre guillemets, en indiquant si possible la ligne. Pour une image, on décrit ce que l'on voit en distinguant les plans (premier plan, second plan, arrière-plan), les personnages, les couleurs et le texte éventuel. Pour un tableau ou un graphique, on cite des chiffres avec leur unité et leur date, et l'on décrit l'évolution : hausse, baisse, stabilité. On ne relève que ce qui répond à la question.",
                "Chaque question commence par un verbe de consigne qui dit ce que l'on attend. Identifier ou nommer appelle une réponse courte et précise. Relever ou citer exige des guillemets. Décrire, c'est dire ce que montre le document. Expliquer, c'est dire pourquoi ou comment, en ajoutant ses connaissances. Montrer que, c'est prouver une affirmation par des éléments précis du document.",
              ],
            },
            {
              heading: "Étape 3 : expliquer et porter un regard critique",
              paragraphs: [
                "Expliquer, c'est confronter le document à ce que l'on sait : définir le vocabulaire, replacer les faits dans leur contexte, ajouter ce que le document ne dit pas. Quand de Gaulle affirme dans son appel que « cette guerre est une guerre mondiale », il faut expliquer que la France a perdu une bataille en métropole, mais qu'elle garde son empire colonial, qu'elle peut s'appuyer sur le Royaume-Uni, qui continue la lutte, et sur l'immense industrie des États-Unis.",
                "Porter un regard critique, c'est se rappeler que tout document a un auteur, qui a un point de vue et une intention : informer, convaincre, dénoncer, faire de la propagande. Une affiche de propagande montre ce que le pouvoir veut faire croire, pas forcément la réalité. Un document a aussi des limites : une photographie ne montre qu'une partie d'un espace à un moment donné, et l'Appel du 18 juin, peu entendu le jour même, n'est devenu un symbole de la Résistance que plus tard.",
              ],
              box: { label: "À retenir", text: "Présenter, prélever, expliquer, critiquer : quatre gestes. Une bonne réponse s'appuie toujours sur le document (une citation, un élément précis) et sur vos connaissances. Recopier le document ne suffit pas ; réciter son cours sans le document non plus." },
            },
          ],
          keyPoints: [
            "Le premier exercice du brevet porte sur un ou deux documents d'histoire ou de géographie, avec des questions progressives.",
            "Présenter : nature, auteur, date, destinataire, contexte ; ces informations sont dans le paratexte (titre, légende, source).",
            "Relever : citer exactement, entre guillemets ; pour un graphique, des chiffres avec leur unité et leur date.",
            "Le verbe de consigne dicte la réponse : identifier, relever, décrire, expliquer, montrer que.",
            "Expliquer : éclairer le document par ses connaissances (vocabulaire, contexte, causes, conséquences).",
            "Critiquer : repérer le point de vue et l'intention de l'auteur, et les limites du document.",
          ],
          example: {
            statement: "Document : Appel du 18 juin 1940, discours prononcé par le général de Gaulle à Londres, à la radio de la BBC. Extraits : « Cette guerre est une guerre mondiale. » ; « Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas. » Questions : 1) Présentez le document. 2) Relevez l'expression qui montre que de Gaulle refuse la défaite. 3) Expliquez pourquoi il affirme que la guerre est mondiale. 4) Portez un regard critique sur ce document.",
            solution: [
              "1) Nature et auteur : il s'agit d'un discours radiodiffusé, prononcé par le général Charles de Gaulle, un officier français qui refuse l'arrêt des combats.",
              "Date, lieu et destinataire : il est prononcé le 18 juin 1940, à Londres, sur les ondes de la BBC, et s'adresse aux Français, en particulier aux militaires réfugiés en Grande-Bretagne.",
              "Contexte : l'armée française vient d'être battue par l'Allemagne nazie et, la veille, le maréchal Pétain a annoncé à la radio qu'il fallait cesser le combat.",
              "2) De Gaulle refuse la défaite lorsqu'il affirme que « la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas ».",
              "3) Pour de Gaulle, la défaite de 1940 n'est qu'une bataille perdue : la France garde son empire colonial, le Royaume-Uni continue la lutte et l'industrie des États-Unis peut donner la victoire aux Alliés. La guerre se joue à l'échelle du monde, pas seulement en France.",
              "4) Regard critique : c'est un appel qui cherche à convaincre, pas un récit neutre. Peu de Français l'ont entendu le jour même ; il est devenu ensuite le texte fondateur de la France libre et un symbole de la Résistance.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici la source de quatre documents. Pour chacun, indiquez sa nature, son auteur et sa date, puis le contexte en une phrase. a) Déclaration des droits de l'homme et du citoyen, adoptée par l'Assemblée nationale constituante le 26 août 1789. b) Discours de Simone Veil, ministre de la Santé, devant l'Assemblée nationale, le 26 novembre 1974. c) Photographie de Berlinois rassemblés sur le mur de Berlin, prise le 10 novembre 1989. d) Carte des aires d'attraction des villes en France, réalisée d'après l'INSEE, 2020.",
              hint: "Lisez chaque source comme une carte d'identité : quel type de document, qui l'a produit, quand, et à quel moment de l'histoire ou sur quel thème.",
              solution: [
                "a) Texte juridique (une déclaration de droits), auteur : l'Assemblée nationale constituante, date : 26 août 1789 ; contexte : le début de la Révolution française, qui abolit les privilèges et affirme les droits des citoyens.",
                "b) Discours politique, auteur : Simone Veil, ministre de la Santé, date : 26 novembre 1974 ; contexte : la présentation du projet de loi sur l'interruption volontaire de grossesse, adoptée en janvier 1975 (loi Veil).",
                "c) Photographie, auteur : un photographe de presse, date : 10 novembre 1989 ; contexte : l'ouverture du mur de Berlin dans la nuit du 9 novembre 1989, qui annonce la fin de la guerre froide.",
                "d) Carte thématique, source : l'INSEE (l'institut national de la statistique), date : 2020 ; thème : l'influence des villes sur les communes qui les entourent, en France.",
              ],
            },
            {
              level: 2,
              statement: "Document : photographie aérienne du port du Havre (Seine-Maritime). Description : au premier plan, des navires porte-conteneurs sont amarrés le long de quais équipés de grandes grues ; au second plan s'étendent des aires de stockage de conteneurs, des réservoirs d'hydrocarbures et des usines ; à l'arrière-plan apparaît l'estuaire de la Seine. Questions : 1) Décrivez le paysage en distinguant les plans. 2) Identifiez les activités présentes. 3) Expliquez pourquoi cet espace est lié à la mondialisation. 4) Indiquez une limite de ce document.",
              hint: "Pour la question 3, pensez au rôle des conteneurs et des navires dans les échanges entre continents ; pour la question 4, demandez-vous ce qu'une photographie ne peut pas montrer.",
              solution: [
                "1) Premier plan : des porte-conteneurs à quai et des grues. Second plan : des aires de stockage de conteneurs, des réservoirs et des usines. Arrière-plan : l'estuaire de la Seine.",
                "2) Deux grands types d'activités : des activités portuaires (chargement et déchargement des navires, stockage des marchandises) et des activités industrielles (raffinage et industries liées aux hydrocarbures).",
                "3) Le port est une interface entre la mer et la terre : les conteneurs arrivent d'autres continents et repartent vers l'intérieur du territoire, et inversement. Le Havre est le premier port français pour les conteneurs : c'est une porte d'entrée de la France dans les échanges mondiaux.",
                "4) Limite : une photographie montre un espace à un instant donné ; elle ne donne ni le volume du trafic, ni les pays d'origine et de destination des marchandises, ni le nombre d'emplois. Il faudrait la compléter par des statistiques ou une carte.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Document : Préambule de la Constitution du 27 octobre 1946 (IVe République), extraits. « La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. » ; « Chacun a le devoir de travailler et le droit d'obtenir un emploi. » ; « Elle [la Nation] garantit à tous, notamment à l'enfant, à la mère et aux vieux travailleurs, la protection de la santé, la sécurité matérielle, le repos et les loisirs. » Questions : 1) Présentez le document. 2) Relevez deux droits garantis par ce texte. 3) À l'aide de vos connaissances, présentez deux mesures prises à la Libération qui mettent en œuvre ces principes. 4) Montrez en quelques lignes que ce texte redéfinit la démocratie.",
              hint: "Le contexte est celui de la Libération et de la refondation de la République (1944-1947) ; pensez au droit de vote des femmes et à la Sécurité sociale.",
              solution: [
                "1) Il s'agit d'un texte constitutionnel : le Préambule de la Constitution de la IVe République, adoptée par référendum puis promulguée le 27 octobre 1946. Il est rédigé par l'Assemblée constituante élue après la Libération, au moment où la France refonde la République après la guerre et le régime de Vichy.",
                "2) Deux droits garantis : l'égalité des droits entre les femmes et les hommes (« des droits égaux à ceux de l'homme ») et la protection de la santé (« la protection de la santé, la sécurité matérielle »). On pouvait aussi citer le droit d'obtenir un emploi.",
                "3) Première mesure : l'ordonnance du 21 avril 1944 accorde aux femmes le droit de vote et d'éligibilité ; elles votent pour la première fois le 29 avril 1945, aux élections municipales.",
                "Deuxième mesure : les ordonnances d'octobre 1945 créent la Sécurité sociale, qui protège les travailleurs et leur famille face à la maladie, à la vieillesse et aux accidents du travail.",
                "4) Ce texte ne se contente pas d'affirmer les libertés politiques héritées de 1789 : il ajoute des droits économiques et sociaux (travail, santé, sécurité matérielle) et l'égalité entre les femmes et les hommes.",
                "La démocratie devient donc à la fois plus politique, avec le suffrage réellement universel, et plus sociale : l'État doit protéger chacun. C'est l'héritage du programme du Conseil national de la Résistance.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe de consigne à ce qu'il attend de vous.",
            pairs: [
              { left: "Identifier", right: "Nommer précisément un élément : un acteur, un lieu, une date" },
              { left: "Relever", right: "Citer des passages exacts du document, entre guillemets" },
              { left: "Décrire", right: "Dire ce que montre le document, sans l'interpréter" },
              { left: "Expliquer", right: "Dire pourquoi ou comment, en ajoutant ses connaissances" },
              { left: "Montrer que", right: "Prouver une affirmation par des éléments précis du document" },
              { left: "Critiquer", right: "Évaluer le point de vue de l'auteur, son intention et les limites du document" },
            ],
          },
          quiz: [
            {
              q: "Que vous demande la consigne « Relevez » ?",
              options: [
                "Résumer le document avec vos propres mots, sans jamais le citer",
                "Citer exactement des passages du document, entre guillemets",
                "Donner votre avis sur le document",
                "Ajouter des connaissances personnelles",
              ],
              answer: 1,
              why: "Relever, c'est prélever : on recopie fidèlement les mots du document, entre guillemets, en ne gardant que ce qui répond à la question.",
            },
            {
              q: "Dans la présentation d'un document, qu'appelle-t-on sa « nature » ?",
              options: [
                "Son type : un discours, une carte, une photographie, une affiche",
                "Le sujet principal dont il parle",
                "Le pays où il a été conservé",
              ],
              answer: 0,
              why: "La nature est le type de document ; elle commande la façon de le lire (on ne lit pas une carte comme un discours).",
            },
            {
              q: "Où trouvez-vous l'auteur et la date d'un document ?",
              options: [
                "Dans la conclusion de votre copie",
                "Uniquement dans les questions posées",
                "Dans le paratexte : titre, légende et source",
                "Nulle part : il faut les deviner",
              ],
              answer: 2,
              why: "Le paratexte, placé autour du document, donne sa source, son auteur et sa date : il faut toujours le lire avant le document lui-même.",
            },
            {
              q: "Pourquoi faut-il porter un regard critique sur une affiche de propagande ?",
              options: [
                "Parce que tous ses détails sont forcément faux",
                "Parce qu'elle est trop ancienne pour être utile",
                "Parce qu'une image ne peut jamais servir de source",
                "Parce qu'elle montre ce que le pouvoir veut faire croire",
              ],
              answer: 3,
              why: "Une affiche de propagande sert à convaincre : elle renseigne surtout sur les idées et les intentions de ceux qui l'ont produite, pas forcément sur la réalité.",
            },
            {
              q: "Que doit contenir une bonne réponse à une consigne « Expliquez » ?",
              options: [
                "Seulement une citation du document",
                "Des éléments du document éclairés par vos connaissances",
                "Une simple description de ce que l'on voit",
                "Une liste de dates, sans phrase",
              ],
              answer: 1,
              why: "Expliquer, c'est dire pourquoi ou comment : on part du document et on l'éclaire avec ses connaissances (contexte, vocabulaire, causes, conséquences).",
            },
          ],
          trap: "Paraphraser le document (le recopier ou le répéter avec d'autres mots) sans jamais l'expliquer, ou à l'inverse réciter son cours sans s'appuyer sur le document ; confondre aussi la date du document et la date des faits qu'il évoque.",
          method: "Avant de répondre, soulignez dans chaque question le verbe de consigne et entourez dans le paratexte la nature, l'auteur et la date. Après chaque réponse, vérifiez qu'elle contient un élément précis du document et, si l'on vous demande d'expliquer, au moins une connaissance personnelle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'developpement-construit',
          title: 'Rédiger un développement construit',
          minutes: 35,
          objectives: [
            "Analyser un sujet de développement construit : verbe de consigne, bornes chronologiques et spatiales, mots clés.",
            "Construire un plan organisé en deux ou trois parties.",
            "Rédiger un développement construit d'une vingtaine de lignes, avec une introduction et une conclusion.",
            "Mobiliser des connaissances précises : dates, acteurs, lieux, vocabulaire et exemples.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un développement construit ?",
              paragraphs: [
                "Le développement construit est un texte rédigé et organisé qui répond à une question d'histoire ou de géographie en s'appuyant uniquement sur vos connaissances. Au brevet, il fait partie du deuxième exercice, « Maîtriser différents langages pour raisonner et se repérer ». La consigne précise la longueur attendue, le plus souvent une vingtaine de lignes.",
                "Ce n'est ni une liste de dates, ni un récit désordonné, ni une suite de phrases sans lien. C'est une petite démonstration : une introduction qui pose la question, des paragraphes qui apportent chacun une idée appuyée sur des exemples précis, et une conclusion qui répond clairement.",
              ],
              box: { label: "Définition", text: "Un développement construit est un texte argumenté d'une vingtaine de lignes, organisé en paragraphes (introduction, deux ou trois parties, conclusion), qui répond à une question en mobilisant des connaissances précises : dates, acteurs, lieux, notions." },
            },
            {
              heading: "Analyser le sujet avant d'écrire",
              paragraphs: [
                "Commencez par souligner le verbe de consigne. « Racontez » appelle un récit dans l'ordre chronologique ; « Décrivez et expliquez » demande de montrer une situation puis ses causes ; « Montrez que » demande de prouver une affirmation par des arguments. Repérez ensuite les bornes chronologiques (de quand à quand ?) et spatiales (où ?), puis les mots clés qu'il faudra définir.",
                "Exemple : « Montrez que la Première Guerre mondiale est une guerre totale. » Le verbe est « montrez que » ; les bornes sont 1914-1918 ; l'espace est surtout l'Europe ; le mot clé est « guerre totale », c'est-à-dire une guerre qui mobilise toutes les ressources d'un pays (humaines, économiques, morales) et qui touche aussi les civils. Au brouillon, notez ensuite toutes les connaissances qui vous viennent : dates, lieux, acteurs, chiffres sûrs.",
              ],
            },
            {
              heading: "Construire le plan",
              paragraphs: [
                "Classez vos connaissances en deux ou trois grandes idées : chacune deviendra un paragraphe. Le plan thématique regroupe les idées par thème ; le plan chronologique suit l'ordre du temps et convient au verbe « Racontez ». Dans chaque paragraphe, on trouve une idée principale, une explication et au moins un exemple précis.",
                "Pour la guerre totale, un plan possible : 1. une mobilisation des soldats et une violence de masse (Verdun, de février à décembre 1916) ; 2. une mobilisation de l'économie et des sociétés (économie de guerre, travail des femmes dans les usines d'armement) ; 3. des civils encadrés et visés (propagande, censure, génocide des Arméniens à partir de 1915).",
              ],
            },
            {
              heading: "Rédiger : introduction, paragraphes, conclusion",
              paragraphs: [
                "L'introduction tient en deux ou trois phrases : elle présente le contexte (dates, lieu), reformule la question et peut annoncer le plan. Chaque partie forme un paragraphe, qui commence par un alinéa et par une phrase annonçant son idée. Les connecteurs logiques relient les idées : d'abord, ensuite, enfin, de plus, en effet, ainsi, cependant, c'est pourquoi.",
                "La conclusion répond clairement à la question en une ou deux phrases ; elle peut ouvrir sur la suite des événements. Gardez quelques minutes pour vous relire : vérifiez les dates, les noms propres, l'orthographe et les accords. Écrivez des phrases complètes et n'utilisez ni tirets, ni abréviations, ni flèches.",
              ],
              box: { label: "Règle", text: "Une partie = un paragraphe = une idée, expliquée et illustrée par un exemple précis. Pas de liste à puces, pas de phrase sans verbe : un développement construit est entièrement rédigé." },
            },
          ],
          keyPoints: [
            "Le développement construit répond à une question, sans document, en une vingtaine de lignes rédigées.",
            "Analyser le sujet : verbe de consigne, bornes chronologiques et spatiales, mots clés à définir.",
            "« Racontez » appelle un plan chronologique ; « Montrez que » ou « Expliquez » un plan thématique.",
            "Introduction (contexte et question), deux ou trois paragraphes (idée, explication, exemple), conclusion (réponse).",
            "Des connaissances précises font la note : dates, acteurs, lieux, vocabulaire du cours.",
            "Connecteurs logiques et relecture finale : dates, noms propres, orthographe.",
          ],
          example: {
            statement: "Sujet : rédigez un développement construit d'une vingtaine de lignes montrant que la Première Guerre mondiale est une guerre totale.",
            solution: [
              "Analyse : verbe « montrez que », bornes 1914-1918, espace principal l'Europe ; « guerre totale » désigne une guerre qui mobilise toutes les ressources des pays et qui touche les civils. Plan thématique en trois parties : les soldats, l'économie et la société, les civils.",
              "Introduction : « De 1914 à 1918, la Première Guerre mondiale oppose principalement en Europe la Triple Entente (France, Royaume-Uni, Russie) aux puissances centrales (Allemagne, Autriche-Hongrie). Elle devient une guerre totale : en quoi mobilise-t-elle toutes les forces des pays et touche-t-elle aussi les civils ? »",
              "Premier paragraphe : « D'abord, des millions de soldats sont mobilisés et subissent une violence de masse. À Verdun, de février à décembre 1916, Français et Allemands s'affrontent sous des bombardements d'artillerie incessants ; la bataille fait plus de 300 000 morts. Dans les tranchées, les soldats vivent dans la boue, la peur et la mort. »",
              "Deuxième paragraphe : « Ensuite, toute l'économie est mise au service de la guerre. Les usines fabriquent des obus et des armes, l'État dirige la production et lance des emprunts. Les femmes remplacent les hommes partis au front, dans les champs et dans les usines d'armement, où on les surnomme les munitionnettes. »",
              "Troisième paragraphe : « Enfin, les civils sont encadrés et deviennent des cibles. La propagande et la censure entretiennent le moral de l'arrière. Surtout, à partir d'avril 1915, le gouvernement de l'Empire ottoman organise le génocide des Arméniens, qui fait entre 1,2 et 1,5 million de victimes. »",
              "Conclusion : « La Première Guerre mondiale est donc une guerre totale, car elle mobilise les soldats, l'économie et les sociétés entières, et frappe aussi les civils. Elle laisse une Europe meurtrie et prépare les violences du XXe siècle. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des deux sujets suivants, indiquez le verbe de consigne, les bornes chronologiques, l'espace concerné, les mots clés à définir et le type de plan qui convient. a) « Racontez les grandes étapes de la construction européenne de 1957 à 2002. » b) « Décrivez et expliquez les aménagements réalisés pour réduire les inégalités entre les territoires en France. »",
              hint: "Le verbe « Racontez » appelle un ordre chronologique ; quand le sujet ne donne pas de dates, la borne est souvent « aujourd'hui ».",
              solution: [
                "a) Verbe : « racontez ». Bornes : de 1957 (traités de Rome) à 2002 (mise en circulation de l'euro). Espace : l'Europe. Mot clé : la construction européenne, c'est-à-dire le rapprochement progressif d'États européens. Plan chronologique, par étapes.",
                "b) Verbes : « décrivez et expliquez ». Bornes : la France d'aujourd'hui. Espace : le territoire français, métropole et outre-mer. Mots clés : aménagement (actions des pouvoirs publics pour organiser un territoire) et inégalités entre territoires. Plan thématique : décrire les inégalités, puis expliquer les aménagements qui y répondent.",
              ],
            },
            {
              level: 2,
              statement: "Sujet : « Montrez que la guerre froide oppose deux blocs, de 1947 à 1991. » Classez les connaissances suivantes en deux parties, donnez un titre à chaque partie, puis rédigez l'introduction en deux ou trois phrases. Connaissances : doctrine Truman et plan Marshall (1947) ; création de l'OTAN (1949) ; pacte de Varsovie (1955) ; blocus de Berlin (1948-1949) ; guerre de Corée (1950-1953) ; construction du mur de Berlin (1961) ; crise de Cuba (1962) ; deux idéologies opposées, démocratie libérale et communisme.",
              hint: "Une partie peut montrer comment le monde se divise en deux camps, l'autre comment ces camps s'affrontent sans guerre directe entre les deux Grands.",
              solution: [
                "Partie 1, un monde divisé en deux blocs : deux idéologies opposées (démocratie libérale et capitalisme autour des États-Unis, communisme autour de l'URSS) ; doctrine Truman et plan Marshall (1947) ; création de l'OTAN (1949) ; pacte de Varsovie (1955).",
                "Partie 2, des crises et des conflits sans affrontement direct entre les deux Grands : blocus de Berlin (1948-1949) ; guerre de Corée (1950-1953) ; construction du mur de Berlin (1961) ; crise de Cuba (1962).",
                "Introduction possible : « Après la Seconde Guerre mondiale, les États-Unis et l'URSS, alliés contre l'Allemagne nazie, deviennent rivaux. De 1947 à 1991, ils s'opposent dans une guerre froide, sans s'affronter directement. Comment ce conflit divise-t-il le monde en deux blocs ? »",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet : rédigez un développement construit d'une vingtaine de lignes montrant que les institutions de la Ve République se sont adaptées aux changements politiques, de la République gaullienne à la cohabitation.",
              hint: "Suivez trois temps : la République gaullienne (1958-1969), l'alternance de 1981, la cohabitation de 1986. Pour chaque temps, donnez au moins une date et un acteur.",
              solution: [
                "Introduction : « En 1958, en pleine guerre d'Algérie, le général de Gaulle revient au pouvoir et fait adopter une nouvelle Constitution par référendum le 28 septembre 1958. La Ve République renforce le pouvoir exécutif. Comment ses institutions se sont-elles adaptées aux changements politiques jusqu'à la cohabitation ? »",
                "Paragraphe 1 : « D'abord, la République gaullienne donne un rôle central au président. Il nomme le Premier ministre, peut dissoudre l'Assemblée nationale et recourir au référendum. Par le référendum du 28 octobre 1962, de Gaulle fait adopter l'élection du président au suffrage universel direct, appliquée pour la première fois en 1965. Désavoué lors du référendum de 1969, il démissionne. »",
                "Paragraphe 2 : « Ensuite, les institutions permettent l'alternance. En mai 1981, François Mitterrand, candidat de la gauche, est élu président : pour la première fois sous la Ve République, la gauche arrive au pouvoir. Il avait critiqué ces institutions, mais il les conserve, ce qui montre leur solidité. »",
                "Paragraphe 3 : « Enfin, les institutions résistent à la cohabitation. En 1986, la droite gagne les élections législatives : le président Mitterrand doit nommer un Premier ministre de l'opposition, Jacques Chirac. Le gouvernement conduit la politique intérieure, tandis que le président garde un rôle important en politique étrangère et en défense. »",
                "Conclusion : « La Ve République, conçue pour un président fort, s'est donc adaptée à l'alternance puis à la cohabitation. Cette souplesse explique sa longévité. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la rédaction d'un développement construit.",
            items: [
              "Souligner le verbe de consigne, les bornes et les mots clés du sujet",
              "Noter au brouillon toutes ses connaissances : dates, acteurs, lieux, notions",
              "Classer les connaissances en deux ou trois parties",
              "Rédiger l'introduction : contexte et question",
              "Rédiger un paragraphe par partie, avec des exemples précis",
              "Rédiger la conclusion qui répond à la question",
              "Relire : dates, noms propres, orthographe",
            ],
          },
          quiz: [
            {
              q: "Que doit contenir l'introduction d'un développement construit ?",
              options: [
                "Le contexte du sujet et la question à laquelle on va répondre",
                "Tous les exemples et toutes les dates que vous connaissez sur le sujet",
                "Uniquement le sujet recopié mot pour mot",
                "Votre opinion personnelle sur la période",
              ],
              answer: 0,
              why: "L'introduction présente le contexte (dates, lieu) et pose la question ; les exemples sont réservés aux paragraphes.",
            },
            {
              q: "Quel type de plan convient à la consigne « Racontez » ?",
              options: [
                "Un plan en tableau à deux colonnes",
                "Un plan chronologique",
                "Aucun plan : on écrit dans le désordre",
              ],
              answer: 1,
              why: "Raconter, c'est suivre l'ordre du temps : le plan chronologique s'impose, étape par étape.",
            },
            {
              q: "Qu'est-ce qu'un connecteur logique ?",
              options: [
                "Une date importante à placer dans chaque paragraphe",
                "Un document fourni avec le sujet",
                "Un mot qui relie les idées, comme « ensuite » ou « cependant »",
              ],
              answer: 2,
              why: "Les connecteurs (d'abord, ensuite, enfin, cependant, ainsi) montrent l'enchaînement du raisonnement et rendent le texte clair.",
            },
            {
              q: "Quelle longueur la consigne du brevet indique-t-elle le plus souvent pour un développement construit ?",
              options: [
                "Trois lignes",
                "Deux pages au minimum",
                "Une seule phrase",
                "Une vingtaine de lignes",
              ],
              answer: 3,
              why: "Le sujet précise la longueur attendue, le plus souvent une vingtaine de lignes : assez pour une introduction, deux ou trois paragraphes et une conclusion.",
            },
            {
              q: "Que faut-il éviter dans un développement construit ?",
              options: [
                "Les dates précises",
                "Les listes à puces et les phrases sans verbe",
                "Les paragraphes",
                "La conclusion",
              ],
              answer: 1,
              why: "Le développement construit est entièrement rédigé : des phrases complètes, organisées en paragraphes, avec des dates précises.",
            },
          ],
          trap: "Écrire tout ce que l'on sait sur le thème, dans le désordre et sans répondre à la question posée, ou rédiger une liste de dates sans les expliquer.",
          method: "Gardez environ cinq minutes pour le brouillon : notez le verbe de consigne, les bornes, puis vos connaissances, et regroupez-les en deux ou trois idées. Rédigez ensuite directement au propre, un paragraphe par idée, et vérifiez à la fin que chaque paragraphe contient au moins une date ou un exemple précis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reperes-croquis',
          title: 'Maîtriser les repères et compléter un croquis',
          minutes: 30,
          objectives: [
            "Situer des repères chronologiques dans le temps : siècle, frise, ordre des événements.",
            "Localiser et situer des repères spatiaux en France, en Europe et dans le monde.",
            "Compléter un croquis ou un schéma : légende organisée, figurés adaptés, titre et nomenclature.",
          ],
          course: [
            {
              heading: "Les repères chronologiques : dater, situer, ordonner",
              paragraphs: [
                "Un repère chronologique peut être une date, pour un événement bref (le 18 juin 1940), ou une période, pour une durée (la Seconde Guerre mondiale, de 1939 à 1945). Au brevet, on vous demande de les placer sur une frise, de les remettre dans l'ordre, de les associer à un événement ou de les situer dans un siècle.",
                "Pour trouver le siècle d'une année, on prend le nombre de centaines et on ajoute 1 : 1914 donne 19 + 1, soit le XXe siècle. Attention aux années rondes : le XXe siècle va de 1901 à 2000, donc l'an 2000 appartient encore au XXe siècle et 2002 au XXIe. Sur une frise, l'échelle doit être régulière (par exemple 1 cm pour 10 ans) ; une date se marque par un trait ou un point, une période par une bande colorée.",
              ],
              box: { label: "Repère", text: "1914-1918 : Première Guerre mondiale. 1917 : révolutions russes. 1933 : Hitler au pouvoir. 1936 : Front populaire. 1939-1945 : Seconde Guerre mondiale. 18 juin 1940 : appel du général de Gaulle. 1944 : droit de vote des femmes. 1947-1991 : guerre froide. 1957 : traités de Rome. 1958 : Ve République. 1962 : fin de la guerre d'Algérie. 1989 : chute du mur de Berlin. 1992 : traité de Maastricht. 2002 : l'euro en circulation." },
            },
            {
              heading: "Les repères spatiaux : localiser et situer",
              paragraphs: [
                "Localiser, c'est placer un lieu précisément sur une carte : où est-il ? Situer, c'est le positionner par rapport à d'autres lieux ou ensembles : au nord de, sur le littoral méditerranéen, près d'une frontière, au bord d'un fleuve. Lyon, par exemple, se localise au confluent du Rhône et de la Saône, et se situe sur l'axe qui relie Paris à la Méditerranée.",
                "En France, il faut savoir placer les grandes aires urbaines (Paris, Lyon, Marseille, Lille, Toulouse, Bordeaux, Nantes, Strasbourg, Nice), les grands fleuves (Seine, Loire, Garonne, Rhône, Rhin), les massifs montagneux (Alpes, Pyrénées, Massif central, Jura, Vosges) et les cinq départements et régions d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte). En Europe, il faut connaître les 27 États de l'Union européenne depuis le départ du Royaume-Uni en 2020, et leurs capitales.",
              ],
            },
            {
              heading: "Le croquis : un langage cartographique",
              paragraphs: [
                "Un croquis est une représentation simplifiée d'un espace, qui montre son organisation : les espaces dynamiques et ceux qui le sont moins, les axes, les flux, la hiérarchie des villes. Il comporte toujours un titre, une légende organisée en parties (souvent deux ou trois, qui répondent au titre), des figurés et une nomenclature (les noms de lieux).",
                "Il existe trois familles de figurés. Les figurés ponctuels (cercles, carrés, triangles) représentent un lieu précis : une ville, un port, un aéroport ; leur taille indique l'importance. Les figurés linéaires (traits, flèches) représentent un axe de transport, une frontière ou un flux. Les figurés surfaciques (aplats de couleur, hachures) représentent un espace : une région agricole, une zone touristique.",
                "Les couleurs ont un sens : les couleurs chaudes (rouge, orange) pour ce qui est dynamique ou important, les couleurs froides (vert, bleu) pour ce qui l'est moins. Un dégradé d'une même couleur, du plus foncé au plus clair, exprime une hiérarchie.",
              ],
              box: { label: "Règle", text: "Un figuré = une information. Ponctuel pour un lieu, linéaire pour un axe ou un flux, surfacique pour un espace. Le même figuré, de la même forme, de la même couleur et de la même taille, doit apparaître dans la légende et sur le croquis." },
            },
            {
              heading: "Compléter un croquis au brevet",
              paragraphs: [
                "Au brevet, on vous demande le plus souvent de compléter un croquis ou un schéma déjà commencé : remplir des cases de légende, reporter des figurés sur la carte, nommer des villes ou des espaces, parfois donner un titre. Commencez par lire le titre et la légende existante : ils vous disent quel thème est représenté et comment la légende est organisée.",
                "Travaillez avec des crayons de couleur, jamais avec des feutres qui traversent le papier. Coloriez légèrement et régulièrement, écrivez les noms à l'horizontale, lisiblement, et vérifiez à la fin que chaque élément de la légende figure sur la carte et inversement.",
              ],
              box: { label: "À retenir", text: "Un croquis réussi est exact (les lieux sont bien placés), lisible (figurés clairs, noms horizontaux) et organisé (une légende en parties qui répondent au titre)." },
            },
          ],
          keyPoints: [
            "Une date marque un événement, une période une durée ; sur une frise : point pour une date, bande pour une période.",
            "Siècle = nombre de centaines + 1 ; le XXe siècle va de 1901 à 2000.",
            "Localiser : placer sur une carte. Situer : positionner par rapport à d'autres lieux.",
            "Trois familles de figurés : ponctuels (lieux), linéaires (axes, flux, frontières), surfaciques (espaces).",
            "Un croquis a un titre, une légende organisée en parties, des figurés et une nomenclature.",
            "Couleurs chaudes pour le dynamique, froides pour le moins dynamique, dégradé pour une hiérarchie.",
          ],
          example: {
            statement: "Placez sur une frise allant de 1900 à 2010 (échelle : 1 cm pour 10 ans) les repères suivants, et indiquez pour chacun le siècle : la Première Guerre mondiale (1914-1918), la naissance de la Ve République (1958), la chute du mur de Berlin (1989), la mise en circulation de l'euro (2002).",
            solution: [
              "Méthode : la distance depuis l'origine se calcule en divisant le nombre d'années écoulées depuis 1900 par 10, puisque 1 cm représente 10 ans.",
              "Première Guerre mondiale : c'est une période, représentée par une bande de 1914 à 1918, soit de 1,4 cm à 1,8 cm de l'origine. Elle a lieu au XXe siècle.",
              "1958 : 58 ans après 1900, donc 5,8 cm ; c'est une date, marquée par un trait. XXe siècle (19 + 1).",
              "1989 : 89 ans après 1900, donc 8,9 cm ; XXe siècle.",
              "2002 : 102 ans après 1900, donc 10,2 cm ; XXIe siècle, car le XXe siècle s'achève en 2000.",
              "Réponse : de gauche à droite, la bande de la Première Guerre mondiale, puis 1958, 1989 et 2002 ; seule la mise en circulation de l'euro appartient au XXIe siècle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Indiquez le siècle de chacune des années suivantes : 1789, 1936, 2000, 2020. 2) Remettez dans l'ordre chronologique : traité de Maastricht, Front populaire, traités de Rome, appel du 18 juin, révolutions russes.",
              hint: "Pour le siècle, ajoutez 1 au nombre de centaines, sauf pour les années qui se terminent par 00. Pour l'ordre, retrouvez d'abord la date de chaque repère.",
              solution: [
                "1) 1789 : XVIIIe siècle (17 + 1). 1936 : XXe siècle. 2000 : XXe siècle, car c'est la dernière année du siècle qui va de 1901 à 2000. 2020 : XXIe siècle.",
                "2) Dates : révolutions russes (1917), Front populaire (1936), appel du 18 juin (1940), traités de Rome (1957), traité de Maastricht (1992).",
                "Ordre chronologique : révolutions russes, Front populaire, appel du 18 juin, traités de Rome, traité de Maastricht.",
              ],
            },
            {
              level: 2,
              statement: "Vous réalisez un croquis intitulé « Les espaces productifs français dans la mondialisation ». Pour chaque élément, indiquez la famille de figuré qui convient et proposez une forme précise : a) le grand port maritime du Havre ; b) l'axe de transport de la vallée du Rhône ; c) un grand espace agricole très productif, le Bassin parisien ; d) un technopôle, Sophia Antipolis près de Nice ; e) les échanges de marchandises avec le reste du monde ; f) une ancienne région industrielle en reconversion, le Nord.",
              hint: "Demandez-vous si l'élément est un lieu précis, une ligne (axe ou mouvement) ou une étendue.",
              solution: [
                "a) Le port du Havre est un lieu précis : figuré ponctuel, par exemple une ancre ou un carré bleu.",
                "b) L'axe de la vallée du Rhône est une ligne : figuré linéaire, un trait épais.",
                "c) Le Bassin parisien est une étendue : figuré surfacique, un aplat de couleur (par exemple vert ou jaune).",
                "d) Sophia Antipolis est un lieu précis : figuré ponctuel, par exemple un triangle rouge.",
                "e) Les échanges sont des mouvements : figuré linéaire, des flèches dirigées vers l'extérieur et vers l'intérieur.",
                "f) Le Nord en reconversion est une étendue : figuré surfacique, par exemple des hachures, pour le distinguer des aplats des espaces dynamiques.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Sur un fond de carte de France métropolitaine, vous devez compléter le croquis « Les aires urbaines en France, une organisation hiérarchisée ». 1) Expliquez où placer Paris, Lyon, Marseille, Lille, Toulouse et Bordeaux, en situant chacune par rapport à un fleuve, une mer ou une frontière. 2) Proposez une légende organisée en deux parties, avec un figuré pour chaque élément. 3) Indiquez comment vérifier votre croquis avant de rendre la copie.",
              hint: "Pour la hiérarchie urbaine, utilisez des cercles de tailles différentes ; pensez aussi aux espaces attractifs du Sud et de l'Ouest et à l'ouverture sur l'Europe.",
              solution: [
                "1) Paris : au centre du Bassin parisien, sur la Seine. Lyon : au confluent du Rhône et de la Saône, dans le Centre-Est. Marseille : sur le littoral méditerranéen, à l'est de l'embouchure du Rhône. Lille : dans le Nord, près de la frontière belge. Toulouse : dans le Sud-Ouest, sur la Garonne. Bordeaux : sur la Garonne, près de l'estuaire de la Gironde et de l'océan Atlantique.",
                "2) Partie 1, une hiérarchie urbaine dominée par Paris : un très grand cercle rouge pour Paris, ville mondiale ; des cercles moyens pour les grandes métropoles régionales (Lyon, Marseille, Lille, Toulouse, Bordeaux).",
                "Partie 2, des dynamiques inégales et une ouverture sur l'Europe : un aplat orange pour les espaces urbains attractifs du Sud et de l'Ouest, des traits épais pour les grands axes de transport reliant Paris aux métropoles, et une flèche vers la Belgique pour une métropole transfrontalière comme Lille.",
                "3) Vérification : chaque figuré de la légende apparaît sur la carte avec la même forme et la même couleur ; les villes sont bien placées ; les noms sont écrits à l'horizontale et lisibles ; le titre est présent.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Repères et croquis : vrai ou faux ?",
            statements: [
              { text: "L'année 2000 appartient au XXIe siècle.", true: false, why: "Le XXe siècle va de 1901 à 2000 : l'an 2000 en est la dernière année." },
              { text: "Sur une frise, une période se représente par une bande.", true: true, why: "Une bande montre une durée, du début à la fin ; une date se marque par un point ou un trait." },
              { text: "Une ville se représente par un figuré ponctuel.", true: true, why: "Une ville est un lieu précis : on utilise un cercle ou un carré, dont la taille indique l'importance." },
              { text: "Un flux de marchandises se représente par un figuré surfacique.", true: false, why: "Un flux est un mouvement : il se représente par une flèche, un figuré linéaire." },
              { text: "Localiser et situer un lieu, c'est exactement la même chose.", true: false, why: "Localiser, c'est placer sur une carte ; situer, c'est positionner par rapport à d'autres lieux." },
              { text: "L'Union européenne compte 27 États membres depuis 2020.", true: true, why: "Le Royaume-Uni a quitté l'Union européenne le 31 janvier 2020." },
              { text: "On peut changer la couleur d'un figuré entre la légende et la carte.", true: false, why: "Le figuré doit être identique dans la légende et sur la carte, sinon le croquis devient illisible." },
            ],
          },
          quiz: [
            {
              q: "À quel siècle appartient la chute du mur de Berlin (1989) ?",
              options: [
                "Au XIXe siècle",
                "Au XXe siècle",
                "Au XXIe siècle",
              ],
              answer: 1,
              why: "1989 compte 19 centaines : 19 + 1 donne le XXe siècle, qui va de 1901 à 2000.",
            },
            {
              q: "Quel figuré utilise-t-on pour représenter un axe de transport ?",
              options: [
                "Un figuré linéaire",
                "Un figuré ponctuel",
                "Un figuré surfacique",
              ],
              answer: 0,
              why: "Un axe est une ligne : on le représente par un trait, dont l'épaisseur peut indiquer l'importance.",
            },
            {
              q: "Combien d'États compte l'Union européenne depuis 2020 ?",
              options: [
                "25",
                "28",
                "27",
                "30",
              ],
              answer: 2,
              why: "Après le départ du Royaume-Uni, le 31 janvier 2020, l'Union européenne compte 27 États membres.",
            },
            {
              q: "Que signifie « situer » un lieu ?",
              options: [
                "Le placer précisément sur une carte",
                "Donner le nombre de ses habitants",
                "Indiquer sa date de fondation",
                "Le positionner par rapport à d'autres lieux",
              ],
              answer: 3,
              why: "Situer, c'est dire où se trouve un lieu par rapport à d'autres (fleuve, littoral, frontière, ville) ; le placer sur une carte, c'est le localiser.",
            },
            {
              q: "Sur un croquis, que montre un dégradé d'une même couleur ?",
              options: [
                "Une hiérarchie, du plus important au moins important",
                "Un flux de marchandises entre deux pays",
                "Une frontière entre deux États",
              ],
              answer: 0,
              why: "Le dégradé, du plus foncé au plus clair, exprime un classement : par exemple des espaces plus ou moins dynamiques.",
            },
          ],
          trap: "Utiliser un figuré inadapté (une surface de couleur pour une ville, un point pour un flux) ou oublier de reporter sur la carte un élément de la légende ; pour les siècles, placer l'an 2000 au XXIe siècle.",
          method: "Apprenez les repères avec une frise personnelle affichée chez vous et des cartes muettes que vous complétez de mémoire, puis vérifiez avec le cours. Le jour de l'épreuve, cochez dans la légende chaque élément dès qu'il est reporté sur la carte : rien ne sera oublié.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'situation-pratique-emc',
          title: 'Répondre à une situation pratique en EMC',
          minutes: 30,
          objectives: [
            "Identifier, dans une situation pratique, les valeurs, les principes et les droits en jeu.",
            "Mobiliser les notions et les textes de l'enseignement moral et civique pour expliquer une situation.",
            "Argumenter et rédiger une réponse adaptée à un destinataire : message, discours, article.",
          ],
          course: [
            {
              heading: "L'exercice d'enseignement moral et civique au brevet",
              paragraphs: [
                "Le troisième exercice de l'épreuve porte sur l'enseignement moral et civique. Il part d'une situation pratique : un cas concret au collège, un fait d'actualité, une décision de justice, accompagnés d'un ou deux documents (un article de loi, un extrait de presse, une affiche). Il est plus court que les deux exercices d'histoire et de géographie.",
                "Les premières questions vous demandent d'identifier et d'expliquer : quel problème se pose, quelle valeur ou quel droit est en jeu, quelle règle s'applique. La dernière question vous met souvent en situation : « Vous êtes délégué de classe... », « Vous écrivez au maire... ». Il faut alors argumenter, en vous adressant à un destinataire précis.",
              ],
            },
            {
              heading: "Les notions à mobiliser",
              paragraphs: [
                "Les valeurs de la République sont la liberté, l'égalité et la fraternité, auxquelles s'ajoute le principe de laïcité. La Constitution de 1958 affirme dans son article premier que « la France est une République indivisible, laïque, démocratique et sociale ». Les principes de la démocratie sont l'État de droit, la séparation des pouvoirs, le suffrage universel et le pluralisme.",
                "Les grands textes à connaître sont la Déclaration des droits de l'homme et du citoyen de 1789, le Préambule de la Constitution de 1946, la Constitution de 1958, la Convention européenne des droits de l'homme (1950) et la Convention internationale des droits de l'enfant, adoptée par l'ONU en 1989. Quelques lois reviennent souvent : la loi de 1905 sur la séparation des Églises et de l'État, la loi du 15 mars 2004 sur les signes religieux à l'école publique, la loi de 1881 sur la liberté de la presse.",
                "Il faut aussi connaître les acteurs qui font respecter les droits : le juge, le Défenseur des droits (une autorité indépendante que toute personne peut saisir gratuitement, par exemple en cas de discrimination), les associations, et, au collège, les délégués, le conseil de vie collégienne et les adultes de l'établissement.",
              ],
              box: { label: "À retenir", text: "Article 1 de la Déclaration de 1789 : « Les hommes naissent et demeurent libres et égaux en droits. » Article 11 : la libre communication des pensées et des opinions est un droit précieux, mais chacun doit répondre de l'abus de cette liberté dans les cas prévus par la loi." },
            },
            {
              heading: "La méthode en quatre temps",
              paragraphs: [
                "Premier temps : comprendre la situation. Qui est concerné, que s'est-il passé, où, et quel problème cela pose-t-il ? Deuxième temps : identifier la valeur, le principe ou le droit en jeu. Souvent, deux droits ou deux intérêts entrent en tension, par exemple la liberté d'expression et le respect de la dignité d'autrui.",
                "Troisième temps : mobiliser vos connaissances (définitions, textes, institutions) pour expliquer la règle qui s'applique. Quatrième temps : répondre et argumenter, avec au moins deux arguments, chacun appuyé sur un exemple ou une règle, en adoptant le ton qui convient au destinataire.",
              ],
              box: { label: "Méthode", text: "Comprendre la situation, identifier la valeur ou le droit en jeu, mobiliser une règle ou un texte, argumenter pour le destinataire. Une opinion sans justification ne rapporte pas de points." },
            },
            {
              heading: "Rédiger la réponse argumentée",
              paragraphs: [
                "Respectez la forme demandée : un message aux élèves, un discours au conseil de vie collégienne, une lettre à un élu, un article pour le journal du collège. Présentez d'abord la situation en une phrase, puis développez vos arguments avec des connecteurs (d'abord, de plus, enfin, c'est pourquoi), et terminez par des propositions concrètes.",
                "Exemple de phrase argumentée : « La liberté d'expression est garantie par l'article 11 de la Déclaration de 1789, mais elle a des limites : insulter ou harceler un camarade sur un réseau social est puni par la loi. » Une telle phrase associe une notion, un texte et la situation : c'est exactement ce qui est attendu.",
              ],
            },
          ],
          keyPoints: [
            "Le troisième exercice du brevet part d'une situation pratique, accompagnée de documents.",
            "Valeurs : liberté, égalité, fraternité, laïcité. Principes : État de droit, séparation des pouvoirs, suffrage universel, pluralisme.",
            "Textes : DDHC de 1789, Préambule de 1946, Constitution de 1958, CEDH (1950), Convention des droits de l'enfant (1989).",
            "Méthode : comprendre la situation, identifier la valeur ou le droit en jeu, mobiliser une règle, argumenter.",
            "La réponse respecte la forme demandée et le destinataire, avec au moins deux arguments justifiés.",
            "La liberté d'expression a des limites fixées par la loi : injure, diffamation, harcèlement sont punis.",
          ],
          example: {
            statement: "Situation : sur un groupe de messagerie de la classe, des élèves publient des photos d'une camarade, prises sans son accord, accompagnées de moqueries. Elle n'ose plus venir au collège. Questions : 1) Identifiez le problème posé. 2) Quels droits de la victime ne sont pas respectés ? 3) Vous êtes délégué de classe : proposez trois actions.",
            solution: [
              "1) Il s'agit de cyberharcèlement : des moqueries répétées, diffusées en ligne, qui portent atteinte à la santé et à la scolarité de la victime.",
              "2) Plusieurs droits sont bafoués : le droit au respect de la vie privée et le droit à l'image (les photos ont été prises et diffusées sans son accord), ainsi que le droit à la dignité et à la sécurité.",
              "Le harcèlement scolaire est un délit, puni par la loi du 2 mars 2022 ; la liberté d'expression ne protège pas les insultes ni les moqueries répétées.",
              "3) Première action : alerter immédiatement un adulte du collège (professeur principal, conseiller principal d'éducation) pour protéger la victime.",
              "Deuxième action : demander aux élèves de ne pas partager les messages et de les signaler ; rappeler le 3018, numéro national contre le cyberharcèlement.",
              "Troisième action : proposer au conseil de vie collégienne une campagne de sensibilisation sur le respect en ligne. Conclusion : le délégué agit pour protéger la victime et faire respecter les droits de chacun.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez la valeur ou le principe en jeu et la règle qui s'applique. a) Un collège public interdit à une élève de porter une grande croix bien visible. b) Une entreprise refuse un candidat à cause de son nom à consonance étrangère. c) Une classe organise une collecte pour une association d'aide alimentaire. d) Un journal publie une caricature d'un ministre.",
              hint: "Cherchez parmi : laïcité, égalité et non-discrimination, fraternité et solidarité, liberté d'expression et de la presse.",
              solution: [
                "a) Laïcité : la loi du 15 mars 2004 interdit aux élèves des écoles, collèges et lycées publics le port de signes religieux ostensibles.",
                "b) Égalité : c'est une discrimination, interdite et punie par la loi ; la victime peut saisir le Défenseur des droits ou la justice.",
                "c) Fraternité : la collecte est un acte de solidarité envers les plus démunis.",
                "d) Liberté d'expression et de la presse, garantie par l'article 11 de la Déclaration de 1789 et par la loi de 1881 sur la liberté de la presse ; la caricature d'un responsable politique en fait partie.",
              ],
            },
            {
              level: 2,
              statement: "Document : article 11 de la Déclaration des droits de l'homme et du citoyen (1789) : « La libre communication des pensées et des opinions est un des droits les plus précieux de l'Homme : tout Citoyen peut donc parler, écrire, imprimer librement, sauf à répondre de l'abus de cette liberté dans les cas déterminés par la Loi. » Situation : un élève publie sur un réseau social un message insultant envers un professeur, puis se défend en disant : « C'est ma liberté d'expression. » Questions : 1) Quel droit l'article 11 garantit-il ? 2) Relevez la limite qu'il fixe. 3) Expliquez pourquoi l'argument de l'élève n'est pas recevable et quelles peuvent être les conséquences.",
              hint: "Distinguez une opinion, que l'on a le droit d'exprimer, et une insulte, qui est un abus de cette liberté.",
              solution: [
                "1) L'article 11 garantit la liberté d'expression : chacun peut « parler, écrire, imprimer librement ».",
                "2) La limite : chacun doit « répondre de l'abus de cette liberté dans les cas déterminés par la Loi ».",
                "3) L'élève peut exprimer un désaccord avec respect, mais une insulte n'est pas une opinion : c'est un abus de la liberté d'expression, puni par la loi (l'injure publique est sanctionnée par la loi de 1881).",
                "Conséquences possibles : une sanction disciplinaire prévue par le règlement intérieur du collège et, si la victime porte plainte, des poursuites devant la justice, adaptées à l'âge de l'élève. Conclusion : la liberté d'expression est un droit, mais elle n'autorise pas à porter atteinte à la dignité d'autrui.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Situation : pendant la campagne pour l'élection des délégués de classe, une rumeur fausse circule sur la messagerie de la classe à propos de l'un des candidats ; certains élèves annoncent qu'ils ne voteront pas pour lui à cause de ce message. Questions : 1) Rappelez comment sont élus les délégués de classe et quel est leur rôle. 2) Expliquez en quoi cette rumeur menace le bon déroulement d'une élection démocratique. 3) Vous êtes membre du conseil de vie collégienne : rédigez un court texte (8 à 10 lignes) adressé aux élèves pour proposer des règles d'une campagne loyale.",
              hint: "Pour la question 2, pensez au rôle d'une information fiable dans le choix des électeurs et au respect des candidats ; pour la question 3, adressez-vous directement aux élèves et faites des propositions concrètes.",
              solution: [
                "1) Chaque classe élit deux délégués, chacun avec un suppléant, au scrutin secret uninominal à deux tours. Les délégués représentent les élèves, font le lien avec les professeurs et l'administration, et participent au conseil de classe.",
                "2) Une élection démocratique suppose que les électeurs choisissent librement, à partir d'informations exactes. Une rumeur fausse trompe les électeurs, fausse le résultat et porte atteinte à l'honneur du candidat ; c'est une forme de désinformation.",
                "Elle menace aussi l'égalité entre les candidats, qui doivent pouvoir présenter leur programme dans les mêmes conditions.",
                "3) Texte possible : « Chers élèves, les élections des délégués sont un moment important de la vie démocratique du collège. Pour qu'elles soient justes, nous vous proposons trois règles. D'abord, vérifiez une information avant de la partager : une rumeur peut blesser et tromper. Ensuite, débattez des idées et des projets des candidats, jamais de leur personne. Enfin, signalez à un adulte tout message mensonger ou insultant. Voter, c'est choisir librement et en connaissance de cause : faisons de cette élection un exemple de respect. Le conseil de vie collégienne. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque valeur ou principe à la situation qui le met en jeu.",
            pairs: [
              { left: "Laïcité", right: "Un collège public interdit les signes religieux ostensibles aux élèves" },
              { left: "Égalité", right: "Un candidat écarté d'un emploi à cause de son origine saisit le Défenseur des droits" },
              { left: "Fraternité", right: "Une classe organise une collecte pour une association d'aide alimentaire" },
              { left: "Liberté de la presse", right: "Un journal publie une caricature d'un ministre" },
              { left: "Respect de la vie privée", right: "Des élèves diffusent sans son accord la photo d'un camarade" },
              { left: "Suffrage et vote secret", right: "Chaque classe élit ses délégués à bulletin secret" },
            ],
          },
          quiz: [
            {
              q: "Quelle loi interdit aux élèves des écoles, collèges et lycées publics de porter des signes religieux ostensibles ?",
              options: [
                "La loi du 9 décembre 1905",
                "La loi du 15 mars 2004",
                "La loi du 29 juillet 1881",
                "La loi du 17 janvier 1975",
              ],
              answer: 1,
              why: "La loi du 15 mars 2004 applique la laïcité à l'école publique ; la loi de 1905 sépare les Églises et l'État, celle de 1881 porte sur la presse et celle de 1975 sur l'IVG.",
            },
            {
              q: "Que garantit l'article 11 de la Déclaration des droits de l'homme et du citoyen ?",
              options: [
                "Le droit de vote des femmes",
                "Le droit à la Sécurité sociale",
                "La liberté d'expression, dans les limites fixées par la loi",
              ],
              answer: 2,
              why: "L'article 11 garantit la libre communication des pensées et des opinions, mais chacun doit répondre de l'abus de cette liberté dans les cas prévus par la loi.",
            },
            {
              q: "Face à une situation pratique, par quoi faut-il commencer ?",
              options: [
                "Comprendre la situation : qui est concerné et quel problème se pose",
                "Rédiger aussitôt la réponse finale, sans brouillon",
                "Recopier en entier les documents fournis",
                "Donner son opinion sans la justifier",
              ],
              answer: 0,
              why: "On ne peut identifier la valeur en jeu ni argumenter sans avoir d'abord compris précisément la situation et le problème qu'elle pose.",
            },
            {
              q: "Le harcèlement scolaire est-il puni par la loi ?",
              options: [
                "Non, il relève seulement du règlement intérieur",
                "Seulement s'il a lieu en dehors du collège",
                "Uniquement si son auteur est majeur",
                "Oui, c'est un délit depuis la loi du 2 mars 2022",
              ],
              answer: 3,
              why: "La loi du 2 mars 2022 fait du harcèlement scolaire un délit, y compris lorsqu'il se poursuit en ligne ; les mineurs peuvent être poursuivis, avec des sanctions adaptées à leur âge.",
            },
            {
              q: "Quelle autorité indépendante une victime de discrimination peut-elle saisir gratuitement ?",
              options: [
                "Le Défenseur des droits",
                "Le Conseil constitutionnel",
                "Le Sénat",
              ],
              answer: 0,
              why: "Le Défenseur des droits, inscrit dans la Constitution en 2008, peut être saisi directement par toute personne, notamment en cas de discrimination ou d'atteinte aux droits de l'enfant.",
            },
          ],
          trap: "Donner son avis personnel sans le justifier par une valeur, un texte ou une règle, ou ne pas respecter la forme et le destinataire demandés dans la dernière question (écrire un paragraphe de cours au lieu d'un message aux élèves).",
          method: "Au brouillon, faites trois colonnes : la situation (qui, quoi, quel problème), la valeur ou le droit en jeu, la règle ou le texte qui s'applique. Rédigez ensuite chaque argument en reliant ces trois colonnes, et relisez votre dernière réponse en vous mettant à la place de son destinataire.",
        },
      ],
    },
  ],
}
