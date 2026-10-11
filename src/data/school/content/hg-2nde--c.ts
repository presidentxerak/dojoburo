import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-2nde',
  chapters: [
    /* ==================================================================== */
    /* DES MOBILITÉS GÉNÉRALISÉES                                            */
    /* ==================================================================== */
    {
      id: 'mobilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "migrations-internationales",
          title: "Les migrations internationales",
          minutes: 30,
          objectives: [
            "Définir les notions de mobilité, de migration internationale, de réfugié et de diaspora.",
            "Décrire les grands flux migratoires mondiaux et leur diversité (Sud-Nord, Sud-Sud, Nord-Nord).",
            "Expliquer les causes des migrations et leurs effets sur les pays de départ et d'arrivée.",
            "Analyser les politiques de contrôle des frontières, à l'exemple de l'Union européenne.",
          ],
          course: [
            {
              heading: "Mobilités et migrations : définir les notions",
              paragraphs: [
                "Une mobilité désigne tout déplacement de personnes dans l'espace, quels que soient sa durée et sa distance : le trajet quotidien vers le lycée, un voyage d'affaires, un séjour touristique. Une migration est une mobilité particulière, qui s'accompagne d'un changement durable du lieu de résidence. Elle est internationale lorsqu'elle franchit une frontière. Selon les recommandations de l'ONU, un migrant international de long terme est une personne qui change de pays de résidence habituelle pour au moins un an.",
                "Les statistiques mesurent surtout le « stock » de migrants, c'est-à-dire le nombre de personnes qui vivent dans un autre pays que leur pays de naissance, et les « flux », c'est-à-dire les entrées et les sorties au cours d'une période. Les migrants ont des statuts très divers : travailleurs, étudiants, conjoints et enfants rejoignant un proche (regroupement familial), retraités, réfugiés. Certains sont en situation irrégulière, parce qu'ils sont entrés ou restés dans un pays sans autorisation.",
                "Le réfugié est défini par la convention de Genève de 1951 : c'est une personne qui se trouve hors de son pays et qui craint avec raison d'y être persécutée en raison de sa race, de sa religion, de sa nationalité, de son appartenance à un groupe social ou de ses opinions politiques. Le demandeur d'asile a déposé une demande de protection qui n'a pas encore été jugée. Le déplacé interne a fui son domicile mais est resté dans son propre pays : il n'est pas couvert par la convention de Genève.",
              ],
              box: { label: "Définition", text: "Diaspora : ensemble des personnes originaires d'un même pays ou d'un même peuple, dispersées dans plusieurs pays, qui conservent des liens entre elles et avec leur pays d'origine (diasporas chinoise, indienne, libanaise, arménienne). Les diasporas forment des réseaux qui facilitent de nouvelles migrations." },
            },
            {
              heading: "Des migrations mondialisées et diversifiées",
              paragraphs: [
                "Selon l'ONU, le monde compte environ 281 millions de migrants internationaux en 2020, contre environ 153 millions en 1990. Ce nombre a presque doublé, mais il ne représente qu'environ 3,6 % de la population mondiale : l'immense majorité des êtres humains vit dans son pays de naissance. Les migrations sont donc à la fois massives en valeur absolue et minoritaires en proportion.",
                "Les flux Sud-Nord, des pays en développement vers les pays riches, sont les plus visibles. Les États-Unis sont le premier pays d'accueil (environ 51 millions de personnes nées à l'étranger en 2020) et le corridor Mexique-États-Unis est le premier corridor migratoire bilatéral du monde. L'Europe occidentale, le Canada et l'Australie sont d'autres pôles majeurs. L'Inde est le premier pays d'origine (environ 18 millions de personnes nées en Inde vivent à l'étranger en 2020), devant le Mexique, la Russie et la Chine.",
                "Les migrations Sud-Sud sont presque aussi nombreuses que les migrations Sud-Nord. Les pays du Golfe (Arabie saoudite, Émirats arabes unis, Qatar) attirent des millions de travailleurs venus d'Inde, du Pakistan, du Bangladesh, des Philippines ou d'Égypte : aux Émirats et au Qatar, les étrangers forment la grande majorité de la population. En Afrique de l'Ouest, la Côte d'Ivoire accueille de nombreux migrants du Burkina Faso et du Mali. Il existe aussi des flux Nord-Nord (Européens circulant librement dans l'Union européenne) et Nord-Sud (retraités européens installés au Maroc, expatriés).",
              ],
              box: { label: "À retenir", text: "Environ 281 millions de migrants internationaux en 2020 (ONU), soit 3,6 % de la population mondiale. Premier pays d'accueil : les États-Unis. Premier pays d'origine : l'Inde. Les migrations Sud-Sud pèsent presque autant que les migrations Sud-Nord." },
            },
            {
              heading: "Pourquoi migre-t-on ? Des causes multiples",
              paragraphs: [
                "Les géographes distinguent des facteurs répulsifs, qui poussent à partir (chômage, faibles revenus, population jeune sans emploi, guerre, persécutions, catastrophes), et des facteurs attractifs, qui attirent vers un pays (emplois, salaires plus élevés, sécurité, universités, présence de proches). Les liens historiques et linguistiques comptent : de nombreux Algériens vont en France, de nombreux Indiens au Royaume-Uni, héritage des empires coloniaux. Migrer coûte cher : les plus pauvres migrent peu, ou seulement vers un pays voisin.",
                "Les migrations forcées ont fortement augmenté. Selon le HCR (Haut-Commissariat des Nations unies pour les réfugiés), plus de 100 millions de personnes sont déplacées de force dans le monde depuis 2022, en majorité à l'intérieur de leur propre pays. Les réfugiés sont surtout accueillis par les pays voisins, souvent des pays à revenu faible ou intermédiaire : la Turquie a accueilli plus de trois millions de Syriens après le début de la guerre civile en Syrie (2011). En 2022, l'invasion de l'Ukraine par la Russie a poussé des millions d'Ukrainiens vers l'Union européenne, qui leur a accordé pour la première fois une protection temporaire.",
                "Les dégradations de l'environnement (sécheresses, montée du niveau de la mer, cyclones) provoquent aussi des départs, le plus souvent à l'intérieur d'un même pays. L'expression « réfugié climatique » est courante, mais elle ne correspond à aucun statut juridique : la convention de Genève ne protège que les personnes persécutées.",
              ],
            },
            {
              heading: "Des effets sur les pays de départ et d'arrivée",
              paragraphs: [
                "Pour les pays de départ, l'émigration réduit la pression sur le marché du travail et rapporte des transferts de fonds (remises) envoyés par les migrants à leurs familles. Selon la Banque mondiale, ces transferts vers les pays à revenu faible et intermédiaire dépassent 600 milliards de dollars par an au début des années 2020, davantage que l'aide publique au développement. Dans de petits pays comme le Tadjikistan ou les Tonga, ils représentent plus d'un quart du PIB. Mais le départ de diplômés (médecins, ingénieurs) prive aussi le pays de compétences : c'est la fuite des cerveaux.",
                "Pour les pays d'arrivée, les migrants apportent une main-d'oeuvre dans des secteurs qui en manquent (bâtiment, agriculture, soins, services, recherche) et compensent en partie le vieillissement de la population. Les grandes métropoles (New York, Londres, Toronto, Dubaï) sont devenues très cosmopolites. L'immigration suscite aussi des débats politiques sur l'intégration, l'identité et le contrôle des frontières, et parfois des réactions xénophobes.",
              ],
              box: { label: "Définition", text: "Transferts de fonds (remises) : sommes d'argent envoyées par les migrants à leurs proches restés au pays. Fuite des cerveaux : émigration de personnes très qualifiées, qui prive le pays de départ des compétences qu'il a formées." },
            },
            {
              heading: "Contrôler les frontières : l'exemple de l'Union européenne",
              paragraphs: [
                "L'espace Schengen (accords signés en 1985, appliqués à partir de 1995) a supprimé les contrôles aux frontières entre la plupart des États européens, en échange d'un contrôle renforcé des frontières extérieures, appuyé depuis 2004 par l'agence Frontex. Les migrants qui veulent entrer sans visa empruntent des routes dangereuses : Méditerranée centrale (de la Libye ou de la Tunisie vers l'île italienne de Lampedusa), Méditerranée orientale (de la Turquie vers les îles grecques), Méditerranée occidentale (du Maroc vers l'Espagne et les enclaves de Ceuta et Melilla).",
                "En 2015, plus d'un million de personnes arrivent en Europe par la mer selon le HCR, beaucoup fuyant la guerre en Syrie. En mars 2016, un accord entre l'Union européenne et la Turquie vise à freiner les traversées vers la Grèce. Selon l'Organisation internationale pour les migrations (OIM), plus de 20 000 personnes sont mortes ou disparues en Méditerranée depuis 2014. L'Union cherche à « externaliser » le contrôle en passant des accords avec les pays de transit, et elle a adopté en 2024 un pacte sur la migration et l'asile. À l'échelle mondiale, le pacte de Marrakech (2018) fixe des principes de coopération, mais il n'est pas contraignant.",
              ],
              box: { label: "Repère", text: "1951 : convention de Genève sur les réfugiés. 1985 : accords de Schengen (appliqués en 1995). 2004 : création de Frontex. 2015 : plus d'un million d'arrivées par la mer en Europe. 2016 : accord UE-Turquie. 2018 : pacte mondial de Marrakech. 2024 : pacte européen sur la migration et l'asile." },
            },
          ],
          keyPoints: [
            "Migration : mobilité avec changement durable de résidence ; internationale si elle franchit une frontière (au moins un an selon l'ONU).",
            "Environ 281 millions de migrants internationaux en 2020 (3,6 % de la population mondiale) : un phénomène massif mais minoritaire.",
            "Flux Sud-Nord (Mexique vers États-Unis), mais aussi Sud-Sud (Asie du Sud vers le Golfe), Nord-Nord et Nord-Sud.",
            "Réfugié (convention de Genève, 1951) : personne persécutée hors de son pays ; le déplacé interne reste dans son pays.",
            "Effets : transferts de fonds et fuite des cerveaux au départ ; main-d'oeuvre, débats et tensions à l'arrivée.",
            "L'Union européenne contrôle ses frontières extérieures (Schengen, Frontex) : la Méditerranée est une frontière meurtrière.",
          ],
          example: {
            statement: "Expliquez pourquoi on ne peut pas réduire les migrations internationales à des flux des pays pauvres vers les pays riches.",
            solution: [
              "Rappeler la définition : une migration internationale est un changement durable de pays de résidence, d'au moins un an selon l'ONU.",
              "Reconnaître l'importance des flux Sud-Nord : les États-Unis sont le premier pays d'accueil et le corridor Mexique-États-Unis est le premier du monde ; l'Europe occidentale attire aussi de nombreux migrants.",
              "Montrer le poids des flux Sud-Sud : les pays du Golfe accueillent des millions de travailleurs d'Asie du Sud ; la Côte d'Ivoire reçoit des migrants du Burkina Faso et du Mali ; les réfugiés sont surtout accueillis dans les pays voisins (Syriens en Turquie).",
              "Ajouter les flux Nord-Nord (libre circulation dans l'Union européenne) et Nord-Sud (retraités européens au Maroc, expatriés).",
              "Rappeler que les plus pauvres migrent peu : migrer coûte cher, et la plupart des migrations restent régionales.",
              "Conclure : les migrations internationales forment un système mondial et multipolaire, dans lequel les flux Sud-Sud pèsent presque autant que les flux Sud-Nord.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit d'une migration internationale, d'une migration interne ou d'une simple mobilité sans migration, et précisez le type : (a) un ingénieur indien part travailler cinq ans à Dubaï ; (b) une habitante d'Annemasse traverse chaque jour la frontière pour travailler à Genève ; (c) une famille syrienne fuit la guerre et s'installe en Turquie ; (d) une étudiante française fait un master de deux ans à Montréal ; (e) un agriculteur soudanais fuit les combats vers une autre région du Soudan ; (f) une famille belge passe deux semaines de vacances en Espagne.",
              hint: "Posez-vous deux questions : la personne change-t-elle de résidence pour au moins un an ? Franchit-elle une frontière ?",
              solution: [
                "(a) Migration internationale de travail, de type Sud-Sud (de l'Inde vers les Émirats arabes unis).",
                "(b) Mobilité pendulaire transfrontalière : elle franchit une frontière chaque jour, mais ne change pas de résidence ; ce n'est pas une migration.",
                "(c) Migration internationale forcée : la famille est réfugiée (ou demandeuse d'asile) en Turquie.",
                "(d) Migration internationale d'études, de type Nord-Nord, puisque le séjour dure au moins un an.",
                "(e) Migration interne forcée : l'agriculteur est un déplacé interne, non couvert par la convention de Genève.",
                "(f) Mobilité touristique : le séjour est temporaire et suivi d'un retour ; ce n'est pas une migration.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le pays A compte 10 millions d'habitants, dont 1,2 million vivent à l'étranger. Son PIB est de 15 milliards de dollars. Les émigrés envoient chaque année 3 milliards de dollars à leurs familles, tandis que le pays reçoit 0,8 milliard de dollars d'aide publique au développement. (1) Calculez la part des émigrés par rapport à la population du pays. (2) Calculez la part des transferts de fonds dans le PIB. (3) Combien de fois les transferts dépassent-ils l'aide reçue ? (4) Expliquez ce que ces résultats montrent, en donnant un effet positif et un effet négatif de l'émigration pour le pays A.",
              hint: "Une part se calcule en divisant la partie par le tout, puis en multipliant par 100 ; pour comparer deux montants, divisez le plus grand par le plus petit.",
              solution: [
                "(1) 1,2 ÷ 10 = 0,12, soit 12 % : environ un habitant sur huit vit à l'étranger.",
                "(2) 3 ÷ 15 = 0,2, soit 20 % du PIB : les transferts de fonds sont une ressource majeure.",
                "(3) 3 ÷ 0,8 = 3,75 : les transferts représentent presque quatre fois l'aide publique au développement.",
                "(4) Effet positif : les transferts financent la consommation des familles, la scolarisation des enfants, la construction de logements et parfois de petites entreprises.",
                "Effet négatif : le pays dépend de l'argent envoyé de l'étranger, qui peut chuter en cas de crise dans les pays d'accueil, et il perd une partie de sa population active, souvent jeune et parfois très qualifiée (fuite des cerveaux).",
                "Conclusion : l'émigration est à la fois une ressource et une fragilité pour le pays A, comme pour les pays réels où les transferts dépassent le quart du PIB.",
              ],
            },
            {
              level: 3,
              statement: "Croquis. Vous devez réaliser un croquis intitulé « Les migrations internationales dans le monde ». Proposez une légende organisée en trois parties, en indiquant pour chaque élément le figuré choisi (surface, point, ligne ou flèche) et des exemples à localiser.",
              hint: "Une légende organisée répond à une question par partie : où arrive-t-on ? d'où part-on ? par où passe-t-on ? Choisissez des couleurs chaudes pour l'attraction et des flèches pour les flux.",
              solution: [
                "Titre : « Les migrations internationales dans le monde ».",
                "I. Les grands pôles d'accueil. Figurés de surface en couleurs chaudes : Amérique du Nord (États-Unis, premier pays d'accueil, et Canada) ; Europe occidentale ; pays du Golfe (Arabie saoudite, Émirats arabes unis, Qatar) ; Russie ; Australie. Un figuré ponctuel pour les métropoles cosmopolites (New York, Londres, Dubaï).",
                "II. Les principaux espaces de départ. Figurés de surface en couleurs froides : Amérique centrale et Mexique ; Afrique subsaharienne et Afrique du Nord ; Asie du Sud (Inde, premier pays d'origine, Pakistan, Bangladesh) ; Asie du Sud-Est (Philippines) ; un figuré spécifique (hachures) pour les pays en guerre d'où partent les réfugiés (Syrie, Afghanistan, Soudan, Ukraine).",
                "III. Les flux et les frontières. Flèches d'épaisseur proportionnelle à l'importance des flux : Mexique et Amérique centrale vers États-Unis ; Afrique et Moyen-Orient vers Europe ; Asie du Sud vers Golfe ; flux de réfugiés vers les pays voisins (Syrie vers Turquie). Figurés linéaires pour les interfaces sous tension : frontière États-Unis-Mexique, Méditerranée. Figurés ponctuels pour les points de passage : Lampedusa, Ceuta et Melilla, îles grecques.",
                "Nomenclature : nommer les océans, les continents et les pays cités ; vérifier que chaque figuré de la carte figure dans la légende.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Migration internationale", right: "Changement de pays de résidence pour au moins un an" },
              { left: "Réfugié", right: "Personne persécutée, protégée par la convention de Genève" },
              { left: "Déplacé interne", right: "Personne qui a fui son domicile sans quitter son pays" },
              { left: "Diaspora", right: "Population dispersée qui garde des liens avec son pays d'origine" },
              { left: "Transferts de fonds", right: "Argent envoyé par les migrants à leurs familles" },
              { left: "Fuite des cerveaux", right: "Départ de personnes très qualifiées vers l'étranger" },
            ],
          },
          quiz: [
            {
              q: "Combien le monde compte-t-il environ de migrants internationaux en 2020, selon l'ONU ?",
              options: ["28 millions", "1,4 milliard, soit près d'un humain sur six", "281 millions", "Environ 3,6 milliards"],
              answer: 2,
              why: "L'ONU estime à environ 281 millions le nombre de migrants internationaux en 2020, soit 3,6 % de la population mondiale.",
            },
            {
              q: "Quel est le premier pays d'accueil des migrants internationaux ?",
              options: ["Les États-Unis", "L'Allemagne, depuis la crise syrienne", "L'Arabie saoudite", "La France"],
              answer: 0,
              why: "Les États-Unis comptent environ 51 millions de personnes nées à l'étranger en 2020, loin devant les autres pays.",
            },
            {
              q: "Qu'est-ce qui distingue un déplacé interne d'un réfugié ?",
              options: ["Le déplacé interne est forcément un migrant climatique", "Le déplacé interne n'a pas quitté son pays", "Le déplacé interne bénéficie de la convention de Genève", "Il n'y a aucune différence entre les deux"],
              answer: 1,
              why: "Le réfugié a franchi une frontière et peut être protégé par la convention de Genève ; le déplacé interne est resté dans son pays.",
            },
            {
              q: "Vers quelle région partent de nombreux travailleurs d'Inde, du Pakistan et du Bangladesh ?",
              options: ["L'Amérique latine", "L'Afrique australe", "L'Europe du Nord", "Les pays du Golfe"],
              answer: 3,
              why: "Les pays du Golfe attirent des millions de travailleurs d'Asie du Sud : c'est l'un des grands flux Sud-Sud.",
            },
            {
              q: "Quel effet de l'émigration désigne l'expression « fuite des cerveaux » ?",
              options: ["Le départ de personnes très qualifiées", "L'envoi d'argent aux familles restées au pays", "Le retour des migrants retraités", "La fermeture des frontières aux étudiants étrangers"],
              answer: 0,
              why: "La fuite des cerveaux est l'émigration de diplômés (médecins, ingénieurs), qui prive le pays de départ des compétences qu'il a formées.",
            },
          ],
          trap: "Croire que les migrations vont surtout des pays pauvres vers l'Europe : les migrations Sud-Sud pèsent presque autant que les migrations Sud-Nord, et les réfugiés sont d'abord accueillis par les pays voisins. Autre erreur fréquente : confondre migrant, réfugié et déplacé interne.",
          method: "Pour décrire des flux migratoires, répondez toujours à quatre questions dans cet ordre : qui part (nombre, profil) ? d'où ? vers où ? pourquoi ? Puis ajoutez les effets au départ et à l'arrivée : vous obtenez un paragraphe complet et organisé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "tourisme",
          title: "Le développement du tourisme et ses impacts",
          minutes: 30,
          objectives: [
            "Définir les notions de tourisme, de touriste, d'excursionniste et de touristification.",
            "Décrire la croissance et la mondialisation des flux touristiques depuis 1950.",
            "Expliquer les impacts économiques, sociaux et environnementaux du tourisme sur les territoires.",
            "Identifier des formes de régulation et de gestion d'un tourisme plus durable.",
          ],
          course: [
            {
              heading: "Le tourisme, une mobilité temporaire de loisir",
              paragraphs: [
                "Selon l'Organisation mondiale du tourisme (OMT, appelée ONU Tourisme depuis 2024), le tourisme regroupe les activités des personnes qui voyagent hors de leur environnement habituel pour moins d'un an, pour leurs loisirs, leurs affaires ou d'autres motifs. Le touriste est un visiteur qui passe au moins une nuit sur place ; l'excursionniste est un visiteur qui repart dans la journée. Le tourisme est une mobilité temporaire, suivie d'un retour : ce n'est pas une migration.",
                "Les formes de tourisme sont variées : balnéaire (les littoraux ensoleillés), urbain et culturel (Paris, Rome, Kyoto), de montagne (sports d'hiver, randonnée), rural ou vert, d'affaires (congrès, salons), religieux (pèlerinages à La Mecque ou à Lourdes), de croisière. Un lieu qui accueille des touristes devient un lieu touristique ; quand le tourisme transforme profondément un territoire (logements, commerces, paysages, population), on parle de touristification.",
              ],
              box: { label: "Définition", text: "Touriste : visiteur qui séjourne au moins une nuit hors de son environnement habituel, pour moins d'un an. Excursionniste : visiteur à la journée. Touristification : transformation d'un territoire par et pour le tourisme." },
            },
            {
              heading: "Une croissance spectaculaire depuis 1950",
              paragraphs: [
                "Selon l'OMT, le nombre d'arrivées de touristes internationaux est passé d'environ 25 millions en 1950 à environ 1,46 milliard en 2019. Cette croissance s'explique par la hausse du niveau de vie dans les pays riches, puis dans les pays émergents, par l'augmentation du temps libre (en France, congés payés de deux semaines en 1936, portés à cinq semaines en 1982) et par la révolution des transports : avion à réaction, gros porteurs, compagnies aériennes à bas prix dans les années 1990 et 2000, réservation par Internet.",
                "La pandémie de Covid-19 a provoqué un effondrement brutal : en 2020, les arrivées internationales ont chuté d'environ 70 % par rapport à 2019, avec la fermeture des frontières. Le tourisme international a ensuite retrouvé en 2024 un niveau proche de celui d'avant la crise. Cet épisode a montré la fragilité des territoires qui dépendent du tourisme.",
              ],
              box: { label: "Repère", text: "1936 : congés payés en France. 1950 : environ 25 millions d'arrivées internationales. 2019 : environ 1,46 milliard. 2020 : chute d'environ 70 % avec la pandémie. 2024 : retour à un niveau proche de 2019." },
            },
            {
              heading: "Des flux mondialisés mais très inégaux",
              paragraphs: [
                "Avant la pandémie, l'Europe recevait environ la moitié des arrivées internationales. La France est la première destination mondiale en nombre d'arrivées (environ 90 millions en 2019), devant l'Espagne et les États-Unis ; mais les États-Unis sont les premiers pour les recettes, car les séjours y sont plus longs et plus coûteux. La plupart des voyages internationaux restent régionaux : les Européens voyagent surtout en Europe, les Asiatiques en Asie.",
                "Les touristes viennent surtout des pays riches et, de plus en plus, des classes moyennes des pays émergents : la Chine est devenue en 2012 le premier pays émetteur pour les dépenses touristiques internationales. Le tourisme international reste cependant le fait d'une minorité de l'humanité, ce qui en fait aussi un marqueur des inégalités de développement. Les grands pôles émetteurs et récepteurs forment avec les flux qui les relient un système touristique mondial.",
              ],
            },
            {
              heading: "Des impacts majeurs sur les territoires",
              paragraphs: [
                "Le tourisme crée des emplois (hôtellerie, restauration, transport, guides), fait entrer des devises et justifie de grands aménagements : en France, la mission Racine a créé à partir de 1963 des stations balnéaires sur le littoral du Languedoc, comme La Grande-Motte ; dans les Alpes, des stations intégrées ont été construites en altitude pour le ski. Certains États en dépendent fortement, comme les Maldives, dont l'économie repose largement sur des complexes hôteliers installés sur des îles. Mais les bénéfices profitent souvent à de grands groupes étrangers, en particulier dans les enclaves touristiques fermées sur elles-mêmes.",
                "Le surtourisme désigne une fréquentation excessive qui dégrade la vie des habitants et les lieux visités. À Venise, la population du centre historique est passée sous 50 000 habitants en 2022, alors que des millions de visiteurs y viennent chaque année ; à Barcelone, des habitants ont manifesté en 2024 contre la hausse des loyers liée aux locations de courte durée. Les conflits d'usage (eau, espace, logement) se multiplient.",
                "L'environnement est aussi touché : artificialisation des littoraux, pression sur l'eau dans les régions sèches, dégradation des récifs coralliens. Une étude publiée en 2018 dans la revue Nature Climate Change estime que le tourisme est responsable d'environ 8 % des émissions mondiales de gaz à effet de serre, surtout à cause du transport aérien.",
              ],
              box: { label: "Définition", text: "Surtourisme : situation dans laquelle la fréquentation touristique dépasse ce qu'un lieu peut supporter sans dégrader la qualité de vie des habitants, l'expérience des visiteurs ou l'environnement." },
            },
            {
              heading: "Réguler pour un tourisme plus durable",
              paragraphs: [
                "Les territoires cherchent à réguler les flux. En Thaïlande, la baie de Maya, rendue célèbre par un film, a été fermée de 2018 à 2022 pour laisser les coraux se reconstituer. Venise a interdit en 2021 le passage des grands navires de croisière dans le bassin de Saint-Marc et le canal de la Giudecca, puis instauré en 2024 une taxe d'accès pour les visiteurs à la journée certains jours. Des villes limitent les locations meublées touristiques ; des sites naturels fixent des quotas de visiteurs ou imposent des réservations.",
                "Le tourisme durable vise à concilier développement économique, respect des populations locales et protection de l'environnement : écotourisme encadré, étalement de la fréquentation sur l'année (désaisonnalisation), mise en valeur de lieux moins connus, tourisme de proximité et usage du train. Ces mesures restent discutées, car le tourisme est une ressource vitale pour de nombreux territoires.",
              ],
            },
          ],
          keyPoints: [
            "Tourisme : voyage hors de l'environnement habituel pour moins d'un an ; le touriste dort au moins une nuit sur place, l'excursionniste non.",
            "Arrivées internationales : environ 25 millions en 1950, environ 1,46 milliard en 2019 (OMT) ; chute d'environ 70 % en 2020.",
            "Facteurs : hausse du niveau de vie, temps libre (congés payés), transports aériens à bas prix, Internet.",
            "La France est la première destination mondiale en arrivées (environ 90 millions en 2019) ; l'Europe reçoit environ la moitié des arrivées.",
            "Impacts : emplois et devises, mais surtourisme (Venise, Barcelone), conflits d'usage et environ 8 % des émissions mondiales de gaz à effet de serre.",
            "Régulation : quotas, fermetures temporaires, taxes d'accès, limitation des locations touristiques, tourisme durable.",
          ],
          example: {
            statement: "Montrez que le tourisme peut être à la fois une ressource et une menace pour une ville comme Venise.",
            solution: [
              "Présenter la ville : Venise, cité historique sur la lagune, inscrite au patrimoine mondial de l'Unesco, accueille chaque année des millions de visiteurs.",
              "Montrer la ressource : le tourisme fait vivre hôtels, restaurants, commerces, musées et transports ; il fournit des emplois et des recettes à la ville.",
              "Montrer la menace sociale : la hausse des loyers et la transformation des logements en locations touristiques poussent les habitants à partir ; le centre historique est passé sous 50 000 habitants en 2022.",
              "Montrer la menace environnementale et patrimoniale : la foule, les grands navires de croisière et les vagues qu'ils provoquent fragilisent la lagune et les bâtiments.",
              "Présenter les réponses : interdiction des grands navires dans le bassin de Saint-Marc et le canal de la Giudecca (2021), taxe d'accès pour les visiteurs à la journée certains jours (2024).",
              "Conclure : Venise illustre le surtourisme ; la ville cherche à réguler la fréquentation pour que le tourisme reste une ressource sans détruire ce qui attire les visiteurs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque personne parmi les touristes, les excursionnistes ou les non-touristes, et justifiez : (a) un Lillois passe une journée à Bruges et rentre le soir ; (b) une famille japonaise passe une semaine à Paris ; (c) un cadre lyonnais assiste à un salon de trois jours à Milan ; (d) un étudiant marocain s'installe à Toulouse pour trois ans d'études ; (e) des croisiéristes descendent quelques heures à Dubrovnik avant de regagner leur navire.",
              hint: "Le touriste dort au moins une nuit hors de chez lui, pour moins d'un an ; l'excursionniste repart dans la journée ; au-delà d'un an, il s'agit d'une migration.",
              solution: [
                "(a) Excursionniste : il visite Bruges sans y passer la nuit.",
                "(b) Touristes : la famille séjourne une semaine hors de son environnement habituel, pour ses loisirs.",
                "(c) Touriste d'affaires : le tourisme inclut les voyages professionnels de moins d'un an avec nuitées.",
                "(d) Non-touriste : l'étudiant s'installe pour plus d'un an ; c'est une migration internationale d'études.",
                "(e) Excursionnistes : ils passent quelques heures à terre et dorment sur le navire ; ce sont des visiteurs à la journée pour la ville.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. L'île de Corallia compte 400 000 habitants. Elle accueille 1,2 million de touristes par an, qui y dépensent au total 2,4 milliards d'euros. Le PIB de l'île est de 6 milliards d'euros. (1) Calculez le nombre de touristes par habitant. (2) Calculez la part du tourisme dans le PIB. (3) Calculez la dépense moyenne par touriste. (4) À partir de ces résultats, expliquez pourquoi l'île est vulnérable, en citant un exemple réel de crise.",
              hint: "Divisez le nombre de touristes par le nombre d'habitants, les recettes par le PIB, puis les recettes par le nombre de touristes. Pensez à l'année 2020.",
              solution: [
                "(1) 1 200 000 ÷ 400 000 = 3 : l'île reçoit trois touristes par habitant et par an.",
                "(2) 2,4 ÷ 6 = 0,4, soit 40 % du PIB.",
                "(3) 2 400 000 000 ÷ 1 200 000 = 2 000 : chaque touriste dépense en moyenne 2 000 euros.",
                "(4) L'économie de l'île dépend fortement d'une seule activité : 40 % de la richesse produite vient du tourisme. Une crise qui arrête les voyages fait donc chuter brutalement l'emploi et les revenus.",
                "Exemple réel : en 2020, la pandémie de Covid-19 a fait chuter les arrivées internationales d'environ 70 %, ce qui a durement frappé les petits États insulaires très touristiques comme les Maldives.",
                "Conclusion : la forte dépendance au tourisme est une vulnérabilité ; diversifier l'économie et réguler la fréquentation sont des réponses possibles.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document. Texte fictif, écrit pour l'exercice : un élu d'une station balnéaire méditerranéenne déclare : « Le tourisme est notre richesse : il fait vivre nos hôtels et nos commerces et finance nos équipements. Mais en août, la population est multipliée par dix, l'eau manque, les plages sont saturées et nos jeunes ne trouvent plus à se loger, car les appartements sont loués aux vacanciers. Nous allons limiter les locations de courte durée et développer le tourisme hors saison. » (1) Présentez le document. (2) Relevez les effets positifs et négatifs du tourisme décrits. (3) Expliquez les mesures envisagées. (4) Montrez, à l'aide d'un exemple réel du cours, que ce texte illustre une situation fréquente.",
              hint: "Classez les informations en trois colonnes : économie, société, environnement. Pour le regard critique, demandez-vous quel intérêt l'auteur défend.",
              solution: [
                "(1) Il s'agit d'une déclaration (fictive) d'un élu local d'une station balnéaire méditerranéenne. Son auteur est à la fois responsable du développement de sa commune et des conditions de vie de ses habitants, ce qui explique son discours nuancé.",
                "(2) Effets positifs : emplois et revenus pour les hôtels et les commerces, recettes qui financent les équipements publics. Effets négatifs : saturation de l'espace (plages), pression sur l'eau en été, crise du logement pour les habitants, causée par les locations touristiques.",
                "(3) Limiter les locations de courte durée vise à rendre des logements aux habitants permanents ; développer le tourisme hors saison (désaisonnalisation) permet de mieux répartir la fréquentation sur l'année et de réduire les pics d'août.",
                "(4) Cette situation est fréquente : à Barcelone, des habitants ont manifesté en 2024 contre la hausse des loyers liée aux locations touristiques ; à Venise, le centre historique est passé sous 50 000 habitants en 2022. Ces villes ont adopté des mesures de régulation.",
                "Regard critique : le texte présente le point de vue d'un élu ; il ne dit rien des effets sur l'environnement marin ni de l'avis des professionnels du tourisme, qui pourraient s'opposer à la limitation des locations.",
                "Conclusion : le document montre que le tourisme est une ressource ambivalente qu'il faut réguler pour qu'il reste compatible avec la vie des habitants.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : testez vos idées sur le tourisme.",
            statements: [
              { text: "Un visiteur qui repart le soir même est un excursionniste, pas un touriste.", true: true, why: "Le touriste passe au moins une nuit sur place ; le visiteur à la journée est un excursionniste." },
              { text: "Les États-Unis sont la première destination mondiale en nombre d'arrivées.", true: false, why: "C'est la France (environ 90 millions d'arrivées en 2019) ; les États-Unis sont premiers pour les recettes." },
              { text: "La plupart des voyages internationaux se font à l'intérieur d'une même grande région du monde.", true: true, why: "Les Européens voyagent surtout en Europe, les Asiatiques en Asie : le tourisme international est d'abord régional." },
              { text: "Le tourisme international concerne la majorité de l'humanité.", true: false, why: "Il reste le fait d'une minorité, issue surtout des pays riches et des classes moyennes des pays émergents." },
              { text: "En 2020, les arrivées internationales ont chuté d'environ 70 %.", true: true, why: "La pandémie de Covid-19 et la fermeture des frontières ont provoqué un effondrement du tourisme mondial." },
              { text: "Le tourisme n'a presque aucun effet sur le climat.", true: false, why: "Une étude de 2018 l'estime responsable d'environ 8 % des émissions mondiales de gaz à effet de serre, surtout par l'avion." },
              { text: "Le tourisme peut faire augmenter les loyers et pousser des habitants à quitter un centre-ville.", true: true, why: "Les locations touristiques réduisent l'offre de logements, comme à Venise ou à Barcelone." },
            ],
          },
          quiz: [
            {
              q: "Combien d'arrivées de touristes internationaux l'OMT comptait-elle en 2019 ?",
              options: ["Environ 25 millions", "Environ 140 millions de voyageurs", "Environ 1,46 milliard", "Environ 8 milliards"],
              answer: 2,
              why: "L'OMT compte environ 1,46 milliard d'arrivées internationales en 2019, contre environ 25 millions en 1950.",
            },
            {
              q: "Qu'appelle-t-on le surtourisme ?",
              options: ["Une fréquentation excessive qui dégrade un lieu", "Le tourisme de luxe pratiqué par les plus riches du monde", "Le tourisme de montagne en altitude", "Un voyage de plus d'un an à l'étranger"],
              answer: 0,
              why: "Le surtourisme est une fréquentation qui dépasse ce que le lieu peut supporter, au détriment des habitants et de l'environnement.",
            },
            {
              q: "Quelle mesure Venise a-t-elle prise en 2024 ?",
              options: ["Interdire totalement les touristes", "Fermer son aéroport toute l'année", "Supprimer les musées payants", "Instaurer une taxe d'accès pour les visiteurs à la journée certains jours"],
              answer: 3,
              why: "Venise fait payer un droit d'accès aux visiteurs à la journée certains jours de forte affluence, pour réguler les flux.",
            },
            {
              q: "Quel facteur a fortement contribué à l'essor du tourisme en France au XXe siècle ?",
              options: ["L'interdiction des voyages en train", "Les congés payés", "La disparition des stations balnéaires", "La fermeture des frontières européennes"],
              answer: 1,
              why: "Les congés payés (deux semaines en 1936, cinq en 1982) ont donné aux salariés le temps de partir en vacances.",
            },
            {
              q: "Quel est le principal responsable des émissions de gaz à effet de serre du tourisme ?",
              options: ["L'éclairage nocturne des monuments historiques", "Les restaurants des stations", "Le transport, surtout aérien", "La vente de souvenirs"],
              answer: 2,
              why: "Le déplacement des touristes, en particulier en avion, représente la plus grande part de l'empreinte climatique du tourisme.",
            },
          ],
          trap: "Ne voir dans le tourisme qu'une richesse ou qu'une nuisance : il est ambivalent. Autre erreur fréquente : confondre le nombre d'arrivées (la France est première) et les recettes (les États-Unis sont premiers).",
          method: "Pour analyser les impacts du tourisme sur un territoire, utilisez systématiquement une grille en trois colonnes (économie, société, environnement), avec pour chacune un effet positif et un effet négatif, puis terminez par les mesures de régulation : votre réponse sera complète et équilibrée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "france-mobilites",
          title: "La France : mobilités, transports et enjeux d'aménagement",
          minutes: 30,
          objectives: [
            "Décrire les mobilités des habitants de la France, du quotidien à l'international.",
            "Caractériser les réseaux de transport français et leur organisation centrée sur Paris.",
            "Expliquer les inégalités d'accessibilité entre les territoires.",
            "Identifier les enjeux d'aménagement liés aux mobilités et à la transition écologique.",
          ],
          course: [
            {
              heading: "Des mobilités quotidiennes en forte hausse",
              paragraphs: [
                "Les mobilités quotidiennes sont surtout des navettes (ou mobilités pendulaires) entre le domicile et le lieu de travail ou d'études. Avec la périurbanisation, de nombreux ménages se sont installés dans des communes éloignées des centres, où le logement est moins cher : les distances parcourues ont augmenté. Selon l'Insee, près de deux actifs sur trois travaillent hors de leur commune de résidence, et environ trois sur quatre se rendent au travail en voiture.",
                "Pour décrire ces liens, l'Insee définit depuis 2020 des aires d'attraction des villes : chaque aire comprend un pôle (une ville qui concentre population et emplois) et une couronne formée des communes dont au moins 15 % des actifs travaillent dans le pôle. Les mobilités résidentielles (déménagements) dessinent aussi la carte de la France : les régions de l'Ouest et du Sud et les littoraux attirent les habitants (héliotropisme), tandis que l'Île-de-France perd plus d'habitants qu'elle n'en gagne par les échanges avec les autres régions.",
              ],
              box: { label: "Définition", text: "Navette (mobilité pendulaire) : déplacement régulier, le plus souvent quotidien, entre le domicile et le lieu de travail ou d'études. Périurbanisation : extension des espaces urbanisés autour des villes, dans des communes restées en partie rurales." },
            },
            {
              heading: "Un territoire ouvert aux mobilités internationales",
              paragraphs: [
                "La France est la première destination touristique mondiale en nombre d'arrivées (environ 90 millions en 2019). Elle est aussi un pays d'immigration : selon l'Insee, environ 7 millions d'immigrés y vivent en 2022, soit un peu plus de 10 % de la population ; près de la moitié sont nés en Afrique et environ un tiers en Europe. L'immigré est, pour l'Insee, une personne née étrangère à l'étranger et résidant en France.",
                "Les mobilités transfrontalières sont importantes : plusieurs centaines de milliers d'actifs résidant en France travaillent dans un pays voisin, surtout en Suisse (région de Genève) et au Luxembourg, où les salaires sont plus élevés. Ces flux structurent des régions transfrontalières, comme le Grand Genève ou l'agglomération de Lille avec la Belgique.",
              ],
            },
            {
              heading: "Des réseaux de transport hiérarchisés et centrés sur Paris",
              paragraphs: [
                "Le réseau ferré français a été organisé en étoile autour de Paris par la loi du 11 juin 1842 (l'« étoile de Legrand »). Le réseau autoroutier (près de 12 000 km) et le réseau des lignes à grande vitesse (LGV) reproduisent largement cette organisation radiale. Le TGV relie Paris à Lyon depuis 1981 ; le réseau à grande vitesse compte aujourd'hui environ 2 800 km et place Lyon, Marseille, Bordeaux, Rennes ou Strasbourg à quelques heures de Paris.",
                "La France est reliée à l'Europe par le tunnel sous la Manche (ouvert en 1994), les liaisons ferroviaires vers Bruxelles, Londres et la Suisse, et les corridors du réseau transeuropéen de transport. Paris-Charles-de-Gaulle est le premier aéroport du pays et un grand hub international. Marseille-Fos est le premier port français ; l'ensemble portuaire Haropa (Le Havre, Rouen et Paris réunis en 2021) organise l'axe de la Seine ; Dunkerque complète la façade du Nord.",
                "Ces réseaux produisent un effet tunnel : les territoires traversés par une LGV ou une autoroute sans gare ni échangeur en tirent peu de bénéfices, alors que les villes desservies gagnent en accessibilité. Les plateformes multimodales, où se croisent plusieurs modes de transport (Roissy, Lyon-Saint-Exupéry), deviennent des lieux stratégiques.",
              ],
              box: { label: "Repère", text: "1842 : loi organisant le réseau ferré en étoile autour de Paris. 1981 : premier TGV Paris-Lyon. 1994 : ouverture du tunnel sous la Manche. 2019 : loi d'orientation des mobilités. 2023 : interdiction de certains vols intérieurs remplaçables par moins de 2 h 30 de train." },
            },
            {
              heading: "Des territoires inégalement accessibles",
              paragraphs: [
                "Les métropoles sont très bien reliées entre elles et au monde, alors que de nombreux espaces ruraux de faible densité restent mal desservis : peu de transports collectifs, fermeture de petites lignes ferroviaires, longues distances jusqu'aux services. Leurs habitants dépendent de la voiture, ce qui pèse sur leur budget. Le mouvement des Gilets jaunes, parti à l'automne 2018 d'une contestation de la hausse des taxes sur les carburants, a révélé cette dépendance.",
                "Les politiques de désenclavement tentent de réduire ces écarts : l'autoroute A75, gratuite (sauf au viaduc de Millau, ouvert en 2004), traverse le Massif central. Les territoires ultramarins et la Corse souffrent de l'insularité et de l'éloignement : l'État y finance des aides à la continuité territoriale pour réduire le coût des déplacements vers l'Hexagone.",
              ],
              box: { label: "Définition", text: "Accessibilité : facilité avec laquelle on peut atteindre un lieu, mesurée en temps, en coût ou en nombre de liaisons. Enclavement : situation d'un territoire difficile d'accès, mal relié aux réseaux. Désenclavement : action d'améliorer cette desserte." },
            },
            {
              heading: "Aménager pour des mobilités plus durables",
              paragraphs: [
                "Les transports sont le premier secteur émetteur de gaz à effet de serre en France, avec environ un tiers des émissions, principalement à cause de la route. La loi d'orientation des mobilités (24 décembre 2019) encourage le vélo, le covoiturage et les transports collectifs ; la loi Climat et résilience de 2021 a conduit à interdire en 2023 les vols intérieurs lorsqu'existe une alternative en train de moins de 2 h 30, ce qui concerne quelques liaisons depuis Orly (vers Bordeaux, Nantes et Lyon).",
                "Les grandes villes ont réintroduit le tramway (Nantes en 1985, Grenoble en 1987, Strasbourg en 1994) et développent les pistes cyclables. En Île-de-France, le Grand Paris Express prévoit environ 200 km de métro automatique et 68 gares autour de Paris. Une loi de 2023 soutient la création de services express régionaux métropolitains, des « RER » autour des grandes villes. Le transport de marchandises reste dominé par la route : le fret ferroviaire n'en assure qu'environ un dixième.",
              ],
            },
          ],
          keyPoints: [
            "Navettes domicile-travail en hausse avec la périurbanisation ; environ trois actifs sur quatre vont au travail en voiture (Insee).",
            "Aire d'attraction d'une ville : un pôle et sa couronne (communes dont au moins 15 % des actifs travaillent dans le pôle).",
            "France : première destination touristique mondiale, pays d'immigration (environ 7 millions d'immigrés en 2022), nombreux frontaliers.",
            "Réseaux en étoile autour de Paris (loi de 1842, autoroutes, LGV depuis 1981) ; effet tunnel pour les territoires traversés.",
            "Inégalités d'accessibilité : métropoles connectées, espaces ruraux dépendants de la voiture, outre-mer et Corse isolés.",
            "Transition : transports, premier secteur émetteur ; loi d'orientation des mobilités (2019), tramways, Grand Paris Express, fret ferroviaire à relancer.",
          ],
          example: {
            statement: "Expliquez pourquoi un habitant d'une commune périurbaine utilise davantage la voiture qu'un habitant du centre d'une métropole.",
            solution: [
              "Définir la périurbanisation : l'extension des espaces urbanisés autour des villes, dans des communes en partie rurales où le logement est moins cher.",
              "Montrer l'éloignement : l'habitant périurbain vit loin des emplois, des commerces et des services, concentrés dans le pôle urbain ; ses trajets sont plus longs.",
              "Montrer la faible desserte : la densité de population y est trop faible pour rentabiliser des transports collectifs fréquents ; les bus sont rares et les gares éloignées.",
              "Comparer avec le centre : la densité permet un réseau dense de métro, de tramway, de bus et de pistes cyclables ; de nombreux services sont accessibles à pied.",
              "Ajouter les conséquences : budget transport élevé pour les ménages périurbains, sensibilité au prix du carburant (révélée par les Gilets jaunes en 2018), émissions de gaz à effet de serre.",
              "Conclure : la dépendance automobile est le produit de l'organisation de l'espace ; la réduire suppose d'aménager (transports express régionaux, covoiturage, densification).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque aménagement à l'enjeu auquel il répond : (a) le Grand Paris Express ; (b) l'autoroute A75 dans le Massif central ; (c) le tunnel sous la Manche ; (d) les aides à la continuité territoriale pour l'outre-mer ; (e) l'interdiction de certains vols intérieurs en 2023. Enjeux : désenclaver un espace de faible densité ; réduire les émissions de gaz à effet de serre ; relier la France à un pays voisin ; améliorer les transports collectifs d'une métropole ; compenser l'éloignement et l'insularité.",
              hint: "Repérez pour chaque aménagement l'échelle concernée (une métropole, une région, l'Europe, l'outre-mer) et le problème qu'il cherche à résoudre.",
              solution: [
                "(a) Grand Paris Express : améliorer les transports collectifs d'une métropole (environ 200 km de métro automatique autour de Paris).",
                "(b) Autoroute A75 : désenclaver un espace de faible densité, le Massif central.",
                "(c) Tunnel sous la Manche : relier la France à un pays voisin, le Royaume-Uni (depuis 1994).",
                "(d) Aides à la continuité territoriale : compenser l'éloignement et l'insularité des territoires ultramarins.",
                "(e) Interdiction de certains vols intérieurs : réduire les émissions de gaz à effet de serre en reportant les voyageurs vers le train.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives simplifiées. Une salariée habite à 35 km de son travail. Elle fait l'aller-retour 220 jours par an. On retient les facteurs d'émission suivants (valeurs fictives pour l'exercice) : 0,2 kg de CO2 par kilomètre en voiture seule, 0,01 kg de CO2 par kilomètre en train régional. (1) Calculez la distance parcourue en un an. (2) Calculez les émissions annuelles en voiture, puis en train. (3) Combien de fois la voiture émet-elle plus que le train ici ? (4) Expliquez pourquoi, malgré cet écart, beaucoup d'actifs périurbains gardent la voiture, et proposez deux aménagements.",
              hint: "N'oubliez pas le retour : un aller-retour représente deux fois la distance. Multipliez ensuite la distance annuelle par chaque facteur d'émission.",
              solution: [
                "(1) 35 × 2 × 220 = 15 400 km par an.",
                "(2) En voiture : 15 400 × 0,2 = 3 080 kg de CO2, soit environ 3,1 tonnes. En train : 15 400 × 0,01 = 154 kg de CO2.",
                "(3) 3 080 ÷ 154 = 20 : dans cet exemple, la voiture émet vingt fois plus que le train.",
                "(4) Beaucoup d'actifs périurbains gardent la voiture parce que la gare est loin de chez eux, que les trains sont peu fréquents ou ne desservent pas leur lieu de travail, et que les horaires sont rigides.",
                "Aménagements possibles : des services express régionaux métropolitains plus fréquents ; des parkings relais et des pistes cyclables vers les gares ; des lignes de covoiturage ; un rapprochement des logements et des emplois.",
                "Conclusion : réduire les émissions suppose d'offrir une alternative réelle à la voiture, ce qui est un enjeu d'aménagement du territoire.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Les réseaux de transport rapprochent-ils tous les territoires français ? ». Rédigez une introduction (définitions et problématique), un développement en deux parties avec deux arguments précis par partie, et une conclusion.",
              hint: "Montrez d'abord ce que les réseaux rapprochent (métropoles, Europe), puis ce qu'ils laissent de côté (effet tunnel, espaces ruraux, outre-mer) ; appuyez chaque argument sur un exemple daté ou chiffré.",
              solution: [
                "Introduction : un réseau de transport est un ensemble de lignes et de noeuds (gares, aéroports, échangeurs) qui relient des lieux ; l'accessibilité mesure la facilité à atteindre un lieu. Depuis les années 1980, la France a développé autoroutes et LGV. Problématique : ces réseaux réduisent-ils les distances pour tous les territoires, ou creusent-ils des écarts ?",
                "I. Des réseaux qui rapprochent les grandes villes et ouvrent la France sur l'Europe. Argument 1 : le réseau à grande vitesse (environ 2 800 km, depuis le Paris-Lyon de 1981) met les grandes métropoles à quelques heures de Paris. Argument 2 : le tunnel sous la Manche (1994), le hub de Paris-Charles-de-Gaulle et les ports de Marseille-Fos et du Havre intègrent la France aux échanges européens et mondiaux.",
                "II. Mais des réseaux qui hiérarchisent et laissent des territoires à l'écart. Argument 1 : l'organisation en étoile autour de Paris (héritée de 1842) favorise la capitale, et l'effet tunnel prive de bénéfices les espaces traversés sans desserte. Argument 2 : les espaces ruraux de faible densité restent dépendants de la voiture (Gilets jaunes, 2018), et l'outre-mer comme la Corse souffrent de l'insularité, malgré le désenclavement (A75) et les aides à la continuité territoriale.",
                "Conclusion : les réseaux rapprochent surtout les territoires déjà puissants et creusent des écarts d'accessibilité ; les politiques d'aménagement actuelles (loi d'orientation des mobilités, services express régionaux) cherchent à mieux desservir tous les territoires tout en réduisant les émissions.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire des transports en France dans l'ordre chronologique.",
            items: [
              "Loi organisant le réseau ferré en étoile autour de Paris (1842)",
              "Mise en service du premier TGV entre Paris et Lyon (1981)",
              "Ouverture du tunnel sous la Manche (1994)",
              "Inauguration du viaduc de Millau sur l'A75 (2004)",
              "Adoption de la loi d'orientation des mobilités (2019)",
              "Interdiction de certains vols intérieurs remplaçables par le train (2023)",
            ],
          },
          quiz: [
            {
              q: "Quelle part environ des actifs se rend au travail en voiture, selon l'Insee ?",
              options: ["Un sur dix", "Un sur quatre", "Trois sur quatre", "La quasi-totalité, soit 99 %"],
              answer: 2,
              why: "Environ trois actifs sur quatre utilisent la voiture pour aller travailler, surtout dans les espaces périurbains et ruraux.",
            },
            {
              q: "Pourquoi parle-t-on d'un réseau ferré « en étoile » en France ?",
              options: ["Les lignes rayonnent à partir de Paris", "Les gares ont une forme d'étoile", "Il ne dessert que cinq villes", "Il a été construit par cinq compagnies européennes"],
              answer: 0,
              why: "Depuis la loi de 1842, les grandes lignes partent de Paris vers les grandes villes de province : le réseau est radial.",
            },
            {
              q: "Qu'est-ce que l'effet tunnel ?",
              options: ["Un embouteillage récurrent à l'entrée des grands tunnels routiers et ferroviaires", "La hausse des prix du logement près des gares", "Le bruit produit par les TGV", "L'absence de bénéfice pour les territoires traversés sans desserte"],
              answer: 3,
              why: "Une LGV ou une autoroute traverse des espaces sans gare ni échangeur : ils subissent l'infrastructure sans en profiter.",
            },
            {
              q: "Quel est le premier secteur émetteur de gaz à effet de serre en France ?",
              options: ["L'agriculture", "Les transports", "Le chauffage des bâtiments", "La production d'électricité"],
              answer: 1,
              why: "Les transports représentent environ un tiers des émissions françaises, surtout à cause de la route.",
            },
            {
              q: "Qu'est-ce qu'une aire d'attraction d'une ville, selon l'Insee ?",
              options: ["Une zone touristique classée", "Un pôle d'emplois et sa couronne de communes", "Un quartier piétonnier du centre", "Le périmètre officiel d'une région administrative française"],
              answer: 1,
              why: "L'aire d'attraction réunit un pôle d'emplois et sa couronne, définie par les navettes domicile-travail.",
            },
          ],
          trap: "Croire qu'une nouvelle autoroute ou une LGV profite à tous les territoires qu'elle traverse : c'est oublier l'effet tunnel. Autre erreur : réduire les mobilités aux grands réseaux, alors que les navettes quotidiennes en voiture sont les plus nombreuses.",
          method: "Pour étudier les mobilités en France, raisonnez par échelles : locale (navettes, périurbanisation), nationale (réseaux en étoile, LGV), européenne et mondiale (tunnel sous la Manche, hubs, ports). Citez pour chaque échelle un exemple précis et un enjeu d'aménagement.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES LUMIÈRES ET LE DÉVELOPPEMENT DES SCIENCES                         */
    /* ==================================================================== */
    {
      id: 'lumieres-sciences',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "revolution-scientifique",
          title: "La révolution scientifique : de Galilée à Newton",
          minutes: 30,
          objectives: [
            "Expliquer en quoi consiste la révolution scientifique des XVIe et XVIIe siècles.",
            "Caractériser la démarche scientifique fondée sur l'observation, l'expérience et les mathématiques.",
            "Analyser l'affaire Galilée, symbole de la rupture scientifique du XVIIe siècle.",
            "Identifier le rôle de Newton et des académies dans l'affirmation de la science moderne.",
          ],
          course: [
            {
              heading: "Remettre en cause Aristote et Ptolémée",
              paragraphs: [
                "Jusqu'au XVIe siècle, les savants européens s'appuient sur les autorités antiques : le philosophe grec Aristote (IVe siècle av. J.-C.) et l'astronome Ptolémée (IIe siècle apr. J.-C.). Selon ce système géocentrique, la Terre est immobile au centre de l'univers ; le Soleil, la Lune et les planètes tournent autour d'elle sur des sphères parfaites. Le monde situé sous la Lune est changeant et corruptible, les cieux sont parfaits et immuables. Cette vision s'accorde avec une lecture littérale de certains passages de la Bible, dont l'Église se veut l'interprète. Attention : depuis l'Antiquité, les savants savent que la Terre est ronde.",
                "En 1543, le chanoine polonais Nicolas Copernic publie Des révolutions des orbes célestes : il place le Soleil au centre du système et fait tourner la Terre sur elle-même et autour du Soleil. Son modèle est d'abord accueilli comme une hypothèse mathématique commode. Au début du XVIIe siècle, l'astronome allemand Johannes Kepler, s'appuyant sur les observations très précises du Danois Tycho Brahe, montre en 1609 que les planètes décrivent des ellipses, et non des cercles, autour du Soleil.",
              ],
              box: { label: "Définition", text: "Géocentrisme : système dans lequel la Terre, immobile, est au centre de l'univers (Aristote, Ptolémée). Héliocentrisme : système dans lequel le Soleil est au centre et la Terre tourne autour de lui (Copernic, 1543). Révolution scientifique : transformation profonde des savoirs et des méthodes aux XVIe et XVIIe siècles." },
            },
            {
              heading: "Galilée, symbole de la rupture scientifique",
              paragraphs: [
                "Galilée (1564-1642), professeur de mathématiques à Padoue, perfectionne en 1609 la lunette, inventée peu avant aux Provinces-Unies, et la tourne vers le ciel. Dans Le Messager des étoiles (1610), il décrit les montagnes et les cratères de la Lune, quatre satellites qui tournent autour de Jupiter et une multitude d'étoiles invisibles à l'oeil nu ; il observe ensuite les phases de Vénus. Ces observations contredisent la perfection des cieux et montrent que tout ne tourne pas autour de la Terre : elles rendent le système de Copernic crédible.",
                "Galilée est aussi l'un des fondateurs de la physique moderne. Il étudie la chute des corps et le mouvement en combinant expériences, mesures et calculs. Dans L'Essayeur (1623), il affirme en substance que le livre de la nature est écrit dans la langue des mathématiques : comprendre le monde, c'est trouver les lois mathématiques qui le gouvernent, et non commenter les textes des Anciens.",
                "En 1616, l'Église déclare l'héliocentrisme contraire aux Écritures et suspend le livre de Copernic. En 1632, Galilée publie, en italien, le Dialogue sur les deux grands systèmes du monde, qui défend en fait Copernic. Jugé par le tribunal de l'Inquisition à Rome, il est condamné le 22 juin 1633 : il doit abjurer, c'est-à-dire renier publiquement ses idées, et il est assigné à résidence près de Florence jusqu'à sa mort en 1642. Il n'est ni torturé ni brûlé ; la phrase « Et pourtant elle tourne » est une légende. En 1992, le pape Jean-Paul II reconnaît les erreurs commises par ses juges.",
              ],
              box: { label: "Repère", text: "1543 : Copernic publie son système héliocentrique. 1609 : Kepler, les orbites elliptiques ; Galilée perfectionne la lunette. 1610 : Le Messager des étoiles. 1632 : Dialogue sur les deux grands systèmes du monde. 22 juin 1633 : condamnation de Galilée. 1992 : Jean-Paul II reconnaît l'erreur de ses juges." },
            },
            {
              heading: "Une nouvelle démarche : observer, expérimenter, mesurer",
              paragraphs: [
                "Le philosophe anglais Francis Bacon (Novum Organum, 1620) affirme que la connaissance doit partir de l'observation et de l'expérience. Le Français René Descartes (Discours de la méthode, 1637) propose de douter de tout ce qui n'est pas évident et de raisonner avec la rigueur des mathématiques. La science moderne repose sur cette combinaison : formuler une hypothèse, la tester par une expérience que d'autres peuvent refaire, exprimer les résultats par des lois mathématiques.",
                "De nouveaux instruments élargissent le champ de l'observation : la lunette, le microscope (le Hollandais Antoni van Leeuwenhoek observe des micro-organismes dans les années 1670), le baromètre de l'Italien Torricelli (1643), l'horloge à pendule du Hollandais Huygens (1657). En 1628, l'Anglais William Harvey démontre la circulation du sang. En 1648, à la demande de Blaise Pascal, son beau-frère Florin Périer mesure la hauteur du mercure au pied et au sommet du puy de Dôme : la pression de l'air diminue avec l'altitude.",
              ],
              box: { label: "Définition", text: "Démarche expérimentale : méthode qui consiste à observer un phénomène, formuler une hypothèse, la vérifier par une expérience reproductible, puis en tirer une loi, souvent exprimée en langage mathématique." },
            },
            {
              heading: "Newton et la synthèse : des lois universelles",
              paragraphs: [
                "L'Anglais Isaac Newton (1643-1727) publie en 1687 les Principes mathématiques de la philosophie naturelle (les Principia). Il y énonce les trois lois du mouvement et la loi de la gravitation universelle : la même force explique la chute d'une pomme sur la Terre et le mouvement de la Lune et des planètes. Les lois de Kepler en découlent. Newton réunit ainsi la physique de la Terre et celle du ciel, que l'on séparait depuis Aristote. Il travaille aussi sur la lumière, qu'il décompose avec un prisme, et invente le calcul infinitésimal, en même temps que l'Allemand Leibniz.",
                "Newton devient de son vivant le symbole de la science triomphante : à sa mort, il est inhumé à l'abbaye de Westminster. Au XVIIIe siècle, les philosophes des Lumières font de lui un modèle : Voltaire diffuse ses idées en France (Lettres philosophiques, 1734) et Émilie du Châtelet traduit les Principia en français.",
              ],
            },
            {
              heading: "Des savants en réseau : académies et République des lettres",
              paragraphs: [
                "La science s'organise. L'Accademia dei Lincei, fondée à Rome en 1603, compte Galilée parmi ses membres. La Royal Society de Londres naît en 1660 ; l'Académie royale des sciences est créée à Paris en 1666 à l'initiative de Colbert, ministre de Louis XIV, suivie de l'Observatoire de Paris en 1667. Les premiers périodiques savants paraissent en 1665 (le Journal des savants à Paris, les Philosophical Transactions à Londres). Les savants correspondent par lettres d'un pays à l'autre et forment une « République des lettres ».",
                "Cette révolution reste l'affaire d'une petite élite instruite. Elle n'oppose pas toujours science et religion : la plupart des savants, comme Kepler, Descartes, Pascal ou Newton, sont croyants. Mais elle affirme que la vérité sur la nature s'établit par l'observation, l'expérience et le calcul, et non par l'autorité des Anciens ou des textes sacrés.",
              ],
              box: { label: "À retenir", text: "La révolution scientifique substitue à l'autorité d'Aristote et de Ptolémée une connaissance fondée sur l'observation, l'expérience et les mathématiques. Galilée en est le symbole, Newton en réalise la synthèse (1687), et les académies lui donnent des institutions." },
            },
          ],
          keyPoints: [
            "Système géocentrique d'Aristote et de Ptolémée remis en cause par l'héliocentrisme de Copernic (1543).",
            "Kepler (1609) : orbites elliptiques. Galilée (1610) : observations à la lunette qui rendent Copernic crédible.",
            "Affaire Galilée : condamné par l'Inquisition le 22 juin 1633, il abjure et reste assigné à résidence jusqu'en 1642 ; il n'est pas brûlé.",
            "Nouvelle démarche : observation, expérience reproductible, lois mathématiques (Bacon, Descartes, Harvey, Pascal).",
            "Newton (Principia, 1687) : lois du mouvement et gravitation universelle, une même physique pour la Terre et le ciel.",
            "Institutions : Royal Society (1660), Académie royale des sciences (1666), revues savantes (1665).",
          ],
          example: {
            statement: "Expliquez pourquoi Galilée est considéré comme le symbole de la rupture scientifique du XVIIe siècle.",
            solution: [
              "Rappeler la vision dominante : jusqu'au XVIe siècle, le système géocentrique d'Aristote et de Ptolémée, conforme à une lecture littérale de la Bible, fait autorité.",
              "Montrer la rupture par l'observation : avec la lunette qu'il perfectionne en 1609, Galilée découvre le relief de la Lune, les satellites de Jupiter et les phases de Vénus (Le Messager des étoiles, 1610), qui contredisent la perfection des cieux et soutiennent Copernic.",
              "Montrer la rupture par la méthode : il étudie le mouvement par l'expérience, la mesure et le calcul, et affirme que la nature s'explique en langage mathématique.",
              "Expliquer le conflit avec l'Église : après le Dialogue de 1632, l'Inquisition le condamne le 22 juin 1633 ; il doit abjurer et reste assigné à résidence jusqu'à sa mort.",
              "Nuancer : il n'est ni torturé ni brûlé, et la plupart des savants de l'époque restent croyants ; l'Église reconnaîtra l'erreur de ses juges en 1992.",
              "Conclure : par ses découvertes, sa méthode et sa condamnation, Galilée incarne le passage d'un savoir fondé sur l'autorité à un savoir fondé sur l'observation et l'expérience.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces savants dans l'ordre chronologique de leur oeuvre principale et indiquez en une phrase l'apport de chacun : Newton (Principia), Copernic (Des révolutions des orbes célestes), Harvey (circulation du sang), Galilée (Le Messager des étoiles), Descartes (Discours de la méthode), Kepler (orbites elliptiques).",
              hint: "Les dates à retrouver dans le cours sont 1543, 1609, 1610, 1628, 1637 et 1687.",
              solution: [
                "1543 : Copernic place le Soleil au centre du système et fait tourner la Terre autour de lui (héliocentrisme).",
                "1609 : Kepler montre que les planètes décrivent des ellipses autour du Soleil.",
                "1610 : Galilée publie Le Messager des étoiles, qui décrit ses observations à la lunette (relief de la Lune, satellites de Jupiter).",
                "1628 : Harvey démontre la circulation du sang.",
                "1637 : Descartes propose dans le Discours de la méthode de raisonner avec rigueur en doutant de ce qui n'est pas évident.",
                "1687 : Newton énonce les lois du mouvement et la gravitation universelle dans les Principia.",
              ],
            },
            {
              level: 2,
              statement: "Document : résumé (et non citation) de la sentence rendue par le tribunal de l'Inquisition à Rome le 22 juin 1633. Les juges déclarent Galilée « véhémentement suspect d'hérésie » pour avoir soutenu et cru que le Soleil est le centre du monde et immobile, et que la Terre se meut, doctrine jugée contraire aux Saintes Écritures. Ils lui ordonnent d'abjurer cette opinion, interdisent son livre, le Dialogue, et le condamnent à la prison selon la volonté du tribunal, ainsi qu'à réciter des psaumes de pénitence chaque semaine pendant trois ans. (1) Présentez le document. (2) Expliquez ce qui est reproché à Galilée. (3) Montrez ce que ce document révèle des rapports entre l'Église et la science au XVIIe siècle, en nuançant à l'aide du cours.",
              hint: "Identifiez l'auteur du document (qui juge ?), la date et l'oeuvre visée ; pour la nuance, pensez à la peine réellement exécutée et à la foi des savants.",
              solution: [
                "(1) Il s'agit de la sentence (un texte judiciaire) du tribunal de l'Inquisition, chargé par l'Église catholique de poursuivre les hérésies. Elle est rendue à Rome le 22 juin 1633 contre Galilée, après la publication en 1632 du Dialogue sur les deux grands systèmes du monde.",
                "(2) On reproche à Galilée d'avoir défendu l'héliocentrisme de Copernic (le Soleil immobile au centre, la Terre en mouvement), déjà déclaré contraire aux Écritures en 1616. Pour les juges, c'est une opinion suspecte d'hérésie, car elle contredit une lecture littérale de la Bible.",
                "(3) Le document montre que l'Église prétend contrôler la vérité sur la nature et qu'elle peut censurer un livre et punir un savant : la vérité scientifique est soumise à l'autorité religieuse.",
                "Nuance : la peine de prison est commuée en assignation à résidence près de Florence, où Galilée poursuit ses travaux sur le mouvement ; il n'est ni torturé ni brûlé. La plupart des savants du temps sont croyants, et des religieux s'intéressent à l'astronomie.",
                "Conclusion : l'affaire Galilée symbolise le conflit entre l'autorité des textes et une connaissance fondée sur l'observation ; l'Église reconnaîtra en 1992 l'erreur des juges.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « En quoi la révolution scientifique des XVIe et XVIIe siècles transforme-t-elle la manière de connaître le monde ? ». Rédigez une introduction (contexte, définition, problématique), un développement en deux ou trois parties avec des exemples datés, et une conclusion.",
              hint: "Distinguez ce qui change dans la vision de l'univers (contenu), dans la méthode (comment on connaît) et dans l'organisation des savants (institutions).",
              solution: [
                "Introduction : jusqu'au XVIe siècle, le savoir européen repose sur l'autorité des Anciens (Aristote, Ptolémée) et sur une lecture littérale de la Bible. La révolution scientifique désigne la transformation profonde des savoirs et des méthodes entre la publication de Copernic (1543) et celle de Newton (1687). Problématique : comment change la manière de connaître le monde, et quelles résistances rencontre-t-elle ?",
                "I. Une nouvelle vision de l'univers. Copernic (1543) propose l'héliocentrisme ; Kepler (1609) établit les orbites elliptiques ; Galilée (1610) observe à la lunette le relief de la Lune et les satellites de Jupiter, qui contredisent la perfection des cieux.",
                "II. Une nouvelle méthode fondée sur l'expérience et les mathématiques. Bacon (1620) valorise l'expérience, Descartes (1637) le doute et la rigueur mathématique ; Harvey (1628) démontre la circulation du sang, Pascal (1648) mesure la baisse de la pression avec l'altitude ; Newton (1687) formule la gravitation universelle, une loi valable sur Terre comme dans le ciel.",
                "III. De nouvelles institutions, mais des résistances. Les savants se regroupent en académies (Royal Society en 1660, Académie royale des sciences en 1666) et publient des revues (1665). Mais l'Église condamne l'héliocentrisme (1616) et Galilée (1633), et la science reste l'affaire d'une petite élite.",
                "Conclusion : la révolution scientifique substitue à l'autorité des textes une connaissance fondée sur l'observation, l'expérience et le calcul ; elle prépare les Lumières, qui feront de la raison et de Newton leurs modèles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : démêlez les faits et les idées reçues sur la révolution scientifique.",
            statements: [
              { text: "Au Moyen Âge, les savants pensaient que la Terre était plate.", true: false, why: "Depuis l'Antiquité, les savants savent que la Terre est ronde ; le débat porte sur sa place au centre ou non de l'univers." },
              { text: "Copernic publie sa théorie héliocentrique en 1543.", true: true, why: "Des révolutions des orbes célestes paraît en 1543, l'année de sa mort." },
              { text: "Galilée a inventé la lunette.", true: false, why: "La lunette est inventée aux Provinces-Unies ; Galilée la perfectionne en 1609 et l'utilise pour observer le ciel." },
              { text: "Galilée a été brûlé par l'Inquisition.", true: false, why: "Condamné en 1633, il abjure et reste assigné à résidence jusqu'à sa mort en 1642." },
              { text: "Newton explique par une même loi la chute des corps et le mouvement des planètes.", true: true, why: "La gravitation universelle (1687) unifie la physique terrestre et la physique céleste." },
              { text: "La plupart des savants du XVIIe siècle étaient athées.", true: false, why: "Kepler, Descartes, Pascal ou Newton sont croyants : la science nouvelle ne rejette pas la foi, mais l'autorité des textes en matière de nature." },
              { text: "L'Académie royale des sciences est créée en 1666 à l'initiative de Colbert.", true: true, why: "Sous Louis XIV, Colbert organise et finance la recherche scientifique au service du royaume." },
            ],
          },
          quiz: [
            {
              q: "Que propose Copernic en 1543 ?",
              options: ["Une Terre plate et immobile", "Le Soleil au centre du système", "Des orbites planétaires en forme d'ellipse", "La gravitation universelle"],
              answer: 1,
              why: "Copernic propose l'héliocentrisme ; les ellipses sont l'apport de Kepler et la gravitation celui de Newton.",
            },
            {
              q: "Lequel de ces phénomènes Galilée observe-t-il avec sa lunette ?",
              options: ["Des satellites tournant autour de Jupiter", "Les anneaux d'Uranus", "Des galaxies éloignées de la Voie lactée", "La rotation de la Terre sur elle-même"],
              answer: 0,
              why: "En 1610, Galilée décrit quatre satellites de Jupiter, preuve que tout ne tourne pas autour de la Terre.",
            },
            {
              q: "Quelle peine Galilée subit-il après sa condamnation de 1633 ?",
              options: ["Il est brûlé sur le bûcher à Rome", "Il est exilé en Angleterre jusqu'à la fin de sa vie", "Il est assigné à résidence", "Il est simplement acquitté après un long procès"],
              answer: 2,
              why: "Galilée abjure et reste assigné à résidence près de Florence jusqu'à sa mort en 1642.",
            },
            {
              q: "Quel ouvrage Newton publie-t-il en 1687 ?",
              options: ["Le Discours de la méthode", "Le Messager des étoiles", "Le Dialogue sur les deux grands systèmes du monde", "Les Principia"],
              answer: 3,
              why: "Les Principes mathématiques de la philosophie naturelle (Principia) exposent les lois du mouvement et la gravitation universelle.",
            },
            {
              q: "Quelle institution est fondée à Paris en 1666 ?",
              options: ["La Royal Society", "L'Académie royale des sciences", "L'Accademia dei Lincei", "L'Encyclopédie de Diderot et d'Alembert"],
              answer: 1,
              why: "L'Académie royale des sciences est créée en 1666 à l'initiative de Colbert ; la Royal Society est londonienne (1660).",
            },
          ],
          trap: "Croire que la révolution scientifique oppose des savants athées à une Église obscurantiste qui aurait brûlé Galilée : Galilée n'a pas été brûlé, et la plupart des savants étaient croyants. Le conflit porte sur l'autorité qui dit la vérité sur la nature.",
          method: "Pour retenir la révolution scientifique, construisez une frise de six dates (1543, 1609-1610, 1633, 1637, 1666, 1687) et associez à chacune un nom et un apport. Dans une copie, citez toujours la date et l'oeuvre : « Newton, Principia, 1687 ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "philosophes-lumieres",
          title: "Les Lumières : philosophes, Encyclopédie et diffusion des idées",
          minutes: 35,
          objectives: [
            "Définir les Lumières comme un mouvement intellectuel européen du XVIIIe siècle fondé sur la raison.",
            "Identifier les principaux philosophes et leurs idées : tolérance, liberté, séparation des pouvoirs, souveraineté du peuple.",
            "Expliquer le projet et la portée de l'Encyclopédie.",
            "Décrire les lieux et les moyens de diffusion des idées des Lumières, ainsi que leurs limites.",
          ],
          course: [
            {
              heading: "Les Lumières : la raison contre les préjugés",
              paragraphs: [
                "Les Lumières sont un mouvement intellectuel européen qui se développe de la fin du XVIIe siècle aux années 1780, en Angleterre, en France, aux Provinces-Unies, dans les États allemands (où l'on parle d'Aufklärung), en Écosse ou en Italie. L'image de la lumière qui dissipe les ténèbres traduit la conviction que la raison doit éclairer les hommes et les libérer de l'ignorance, de la superstition et du fanatisme. Héritiers de la révolution scientifique, les philosophes font confiance à l'expérience et croient au progrès et au bonheur sur Terre.",
                "En 1784, le philosophe allemand Emmanuel Kant répond à la question « Qu'est-ce que les Lumières ? » : c'est, explique-t-il, la sortie de l'homme hors de l'état de minorité dont il est lui-même responsable, c'est-à-dire l'incapacité de penser par soi-même sans être guidé par un autre. Il en donne pour devise la formule latine Sapere aude, « ose savoir ».",
              ],
              box: { label: "Définition", text: "Philosophe (au XVIIIe siècle) : homme ou femme de lettres qui utilise sa raison pour examiner librement toutes les questions (religion, politique, société, sciences) et combattre les préjugés, afin d'améliorer le sort des hommes." },
            },
            {
              heading: "Les philosophes et leurs combats",
              paragraphs: [
                "L'Anglais John Locke (1632-1704) affirme que les hommes ont des droits naturels (la vie, la liberté, la propriété) et que le gouvernement repose sur le consentement des gouvernés, qui peuvent résister à un pouvoir tyrannique (Deux traités du gouvernement civil, 1690) ; il défend la tolérance religieuse (Lettre sur la tolérance, 1689). Montesquieu (1689-1755) critique la société française dans les Lettres persanes (1721) ; dans De l'esprit des lois (1748), il montre que, pour éviter le despotisme, il faut que « le pouvoir arrête le pouvoir » : les puissances législative, exécutive et judiciaire doivent être séparées, comme il croit l'observer en Angleterre.",
                "Voltaire (1694-1778) fait l'éloge de la liberté anglaise dans les Lettres philosophiques (1734), aussitôt condamnées. Il combat l'intolérance religieuse : en 1762, le protestant toulousain Jean Calas est exécuté, accusé à tort d'avoir tué son fils qui voulait se convertir au catholicisme ; Voltaire publie le Traité sur la tolérance (1763) et obtient sa réhabilitation en 1765. Voltaire n'est pas athée : il est déiste, il croit en un Dieu créateur mais rejette les dogmes et le pouvoir des Églises.",
                "Jean-Jacques Rousseau (1712-1778) dénonce l'inégalité entre les hommes (Discours sur l'origine et les fondements de l'inégalité, 1755) et affirme dans Du contrat social (1762) que la souveraineté appartient au peuple et que la loi doit être l'expression de la volonté générale. L'Italien Beccaria condamne la torture et la peine de mort (Des délits et des peines, 1764). Les physiocrates français et l'Écossais Adam Smith (La Richesse des nations, 1776) défendent la liberté économique.",
              ],
              box: { label: "À retenir", text: "Locke : droits naturels et tolérance. Montesquieu : séparation des pouvoirs (1748). Voltaire : tolérance, affaire Calas (1762-1765). Rousseau : souveraineté du peuple, volonté générale (1762). Beccaria : contre la torture et la peine de mort (1764)." },
            },
            {
              heading: "L'Encyclopédie, une oeuvre collective et militante",
              paragraphs: [
                "L'Encyclopédie ou Dictionnaire raisonné des sciences, des arts et des métiers est dirigée par Denis Diderot et le mathématicien Jean Le Rond d'Alembert. Le premier volume paraît en 1751, les derniers volumes de planches en 1772 : l'ensemble compte 17 volumes de texte et 11 volumes de planches, soit plus de 70 000 articles écrits par de nombreux collaborateurs, dont Voltaire, Rousseau, Montesquieu et le chevalier de Jaucourt, auteur de milliers d'articles. Son but est de rassembler toutes les connaissances, de les ordonner par la raison et de les transmettre.",
                "L'Encyclopédie valorise les sciences et les « arts mécaniques », c'est-à-dire les techniques et les métiers, décrits en détail dans les planches. Elle diffuse aussi l'esprit critique, souvent de manière détournée, grâce au système des renvois d'un article à l'autre. Elle subit la censure : son privilège royal est révoqué en 1759 et le pape la condamne la même année. La publication se poursuit pourtant, discrètement, grâce à la protection de Malesherbes, directeur de la Librairie, chargé de la surveillance des livres ; les dix derniers volumes de texte paraissent ensemble en 1765. C'est un grand succès de librairie, suivi d'éditions moins chères qui la répandent en Europe.",
              ],
              box: { label: "Repère", text: "1734 : Lettres philosophiques. 1748 : De l'esprit des lois. 1751 : premier volume de l'Encyclopédie. 1759 : révocation de son privilège. 1762 : Du contrat social ; exécution de Jean Calas. 1763 : Traité sur la tolérance. 1772 : derniers volumes de planches. 1784 : texte de Kant sur les Lumières." },
            },
            {
              heading: "Diffuser les idées : salons, cafés, académies et imprimés",
              paragraphs: [
                "Les idées circulent dans des lieux de sociabilité. À Paris, des salons tenus par des femmes, comme ceux de Mme Geoffrin, de Mme du Deffand ou de Julie de Lespinasse, réunissent écrivains, savants, aristocrates et étrangers pour converser. Les cafés (comme le Procope), les académies de province, qui organisent des concours (Rousseau remporte en 1750 celui de l'académie de Dijon), les loges maçonniques, les bibliothèques et les cabinets de lecture sont d'autres foyers. Les livres interdits en France sont imprimés à Amsterdam, à Genève ou à Neuchâtel et circulent clandestinement ; le français est alors la langue des élites européennes.",
                "Certains souverains, appelés despotes éclairés, s'entourent de philosophes : Frédéric II de Prusse accueille Voltaire à Potsdam (1750-1753), Catherine II de Russie achète la bibliothèque de Diderot en lui en laissant l'usage et le reçoit à Saint-Pétersbourg (1773-1774), l'empereur Joseph II accorde en 1781 un édit de tolérance. Ils réforment l'administration ou la justice, mais conservent un pouvoir absolu.",
                "Les Lumières ont des limites. Leur public est une élite de nobles, de bourgeois et de clercs instruits : selon l'enquête du recteur Maggiolo, à la veille de la Révolution, environ 47 % des hommes et 27 % des femmes savent signer leur acte de mariage en France. La plupart des philosophes sont des réformateurs, non des révolutionnaires. Peu défendent l'égalité entre hommes et femmes, et la condamnation de l'esclavage reste minoritaire, même si l'Encyclopédie (article « Traite des nègres » de Jaucourt) et Condorcet (Réflexions sur l'esclavage des nègres, 1781) la dénoncent ; la Société des amis des Noirs est fondée en 1788.",
              ],
              box: { label: "Définition", text: "Despote éclairé : souverain absolu du XVIIIe siècle qui se réclame des idées des Lumières et mène des réformes (administration, justice, tolérance), sans renoncer à son pouvoir absolu. Exemples : Frédéric II de Prusse, Catherine II de Russie, Joseph II." },
            },
          ],
          keyPoints: [
            "Lumières : mouvement intellectuel européen (fin XVIIe-années 1780) qui veut éclairer les hommes par la raison contre les préjugés.",
            "Montesquieu (De l'esprit des lois, 1748) : séparation des pouvoirs ; Rousseau (Du contrat social, 1762) : souveraineté du peuple.",
            "Voltaire : tolérance et lutte contre le fanatisme ; affaire Calas (1762), Traité sur la tolérance (1763).",
            "L'Encyclopédie (Diderot et d'Alembert, 1751-1772) : 17 volumes de texte et 11 de planches, malgré la censure.",
            "Diffusion : salons, cafés, académies, loges, imprimés clandestins ; despotes éclairés (Frédéric II, Catherine II).",
            "Limites : un public d'élite, des réformateurs plus que des révolutionnaires, peu de place pour l'égalité des femmes et la lutte contre l'esclavage.",
          ],
          example: {
            statement: "Montrez que l'affaire Calas illustre le combat des philosophes des Lumières.",
            solution: [
              "Présenter l'affaire : en 1762, à Toulouse, le protestant Jean Calas est accusé d'avoir tué son fils, qui aurait voulu se convertir au catholicisme ; il est torturé et exécuté.",
              "Expliquer le contexte : depuis la révocation de l'édit de Nantes (1685), les protestants sont persécutés en France ; l'accusation repose sur des préjugés religieux plus que sur des preuves.",
              "Montrer l'action de Voltaire : il enquête, mobilise l'opinion publique et publie le Traité sur la tolérance (1763), dans lequel il dénonce le fanatisme.",
              "Donner le résultat : Calas est réhabilité en 1765, ce qui montre le poids nouveau de l'opinion éclairée.",
              "Relier aux idées des Lumières : tolérance religieuse, refus du fanatisme, justice fondée sur la raison et les preuves, critique de la torture (Beccaria, 1764).",
              "Conclure : l'affaire Calas montre que les philosophes ne se contentent pas d'écrire ; ils interviennent dans la vie publique pour défendre les droits des individus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Attribuez chacune de ces idées à son auteur (Locke, Montesquieu, Voltaire, Rousseau, Beccaria) et citez une oeuvre : (a) la souveraineté appartient au peuple et la loi exprime la volonté générale ; (b) la torture et la peine de mort doivent être abolies ; (c) il faut séparer les pouvoirs législatif, exécutif et judiciaire ; (d) les hommes ont des droits naturels et le gouvernement repose sur le consentement des gouvernés ; (e) le fanatisme religieux doit être combattu au nom de la tolérance.",
              hint: "Associez d'abord les idées les plus connues (séparation des pouvoirs, volonté générale, tolérance) avant de traiter les autres.",
              solution: [
                "(a) Rousseau, Du contrat social (1762).",
                "(b) Beccaria, Des délits et des peines (1764).",
                "(c) Montesquieu, De l'esprit des lois (1748).",
                "(d) Locke, Deux traités du gouvernement civil (1690).",
                "(e) Voltaire, Traité sur la tolérance (1763), écrit à l'occasion de l'affaire Calas.",
              ],
            },
            {
              level: 2,
              statement: "Document : l'article « Autorité politique » de l'Encyclopédie, publié dans le premier volume (1751) et attribué à Diderot, commence ainsi : « Aucun homme n'a reçu de la nature le droit de commander aux autres. » Résumé de la suite (et non citation) : la liberté est un don naturel pour tout homme doué de raison ; l'autorité imposée par la force n'est qu'une usurpation, qui dure tant que la force du plus fort l'emporte ; l'autorité légitime repose sur le consentement des peuples et reste limitée par des lois. (1) Présentez le document. (2) Expliquez l'idée principale. (3) Montrez en quoi ce texte remet en cause la monarchie absolue de droit divin. (4) Expliquez pourquoi un tel article pouvait attirer la censure.",
              hint: "Comparez l'origine du pouvoir selon l'article (la nature, le consentement) et selon la monarchie absolue (Dieu). Rappelez ce qui arrive à l'Encyclopédie en 1759.",
              solution: [
                "(1) C'est un article de l'Encyclopédie de Diderot et d'Alembert, paru dans le premier volume en 1751 et attribué à Diderot. Il s'adresse au public cultivé qui achète l'ouvrage.",
                "(2) Idée principale : par nature, les hommes sont libres et égaux ; nul n'est né pour commander. Un pouvoir n'est légitime que s'il repose sur le consentement de ceux qui obéissent et s'il est limité par des lois ; un pouvoir fondé sur la force est une usurpation.",
                "(3) Dans la monarchie absolue de droit divin, le roi tient son pouvoir de Dieu et n'en rend compte qu'à lui. L'article place au contraire l'origine du pouvoir dans le consentement des peuples et affirme que l'autorité doit être limitée : il annonce l'idée de souveraineté du peuple développée par Rousseau en 1762.",
                "(4) Un tel texte conteste le fondement même du pouvoir royal ; c'est pourquoi l'Encyclopédie est surveillée et que son privilège est révoqué en 1759. Les auteurs prennent soin de nuancer leurs propos pour éviter la censure.",
                "Conclusion : l'article illustre l'esprit critique des Lumières appliqué à la politique et montre comment l'Encyclopédie diffuse des idées nouvelles.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « En quoi les Lumières remettent-elles en cause l'ordre établi au XVIIIe siècle ? ». Rédigez une introduction, un développement en deux parties (ce que les Lumières critiquent et proposent ; comment et jusqu'où leurs idées se diffusent) avec deux arguments précis par partie, et une conclusion.",
              hint: "L'ordre établi, c'est la monarchie absolue, l'autorité de l'Église et la société d'ordres. Pensez à nuancer dans la deuxième partie (public limité, despotes éclairés, limites des philosophes).",
              solution: [
                "Introduction : au XVIIIe siècle, la France est une monarchie absolue de droit divin, où l'Église catholique exerce une grande autorité et où la société est divisée en ordres inégaux. Les Lumières sont un mouvement intellectuel européen qui veut éclairer les hommes par la raison. Problématique : comment les philosophes contestent-ils cet ordre, et quelle est la portée réelle de leurs idées ?",
                "I. Une critique de l'ordre politique et religieux. Argument 1 : Montesquieu (De l'esprit des lois, 1748) propose la séparation des pouvoirs contre le despotisme, Rousseau (Du contrat social, 1762) place la souveraineté dans le peuple ; l'article « Autorité politique » de l'Encyclopédie (1751) fonde le pouvoir sur le consentement. Argument 2 : Voltaire combat le fanatisme et défend la tolérance (affaire Calas, 1762 ; Traité sur la tolérance, 1763) ; Beccaria (1764) dénonce la torture.",
                "II. Une diffusion large, mais limitée. Argument 1 : les idées circulent par l'Encyclopédie (1751-1772), malgré la censure, par les salons, les cafés, les académies et les imprimés clandestins ; des despotes éclairés comme Frédéric II et Catherine II s'en réclament. Argument 2 : mais le public reste une élite (environ 47 % des hommes et 27 % des femmes savent signer à la veille de la Révolution), les philosophes sont surtout des réformateurs, et peu remettent en cause l'inégalité des femmes ou l'esclavage.",
                "Conclusion : les Lumières sapent les fondements intellectuels de l'ordre établi en affirmant la liberté, la tolérance et la souveraineté du peuple, sans le renverser elles-mêmes ; leurs idées inspireront les révolutions de la fin du siècle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque auteur à son oeuvre.",
            pairs: [
              { left: "Montesquieu", right: "De l'esprit des lois (1748)" },
              { left: "Voltaire", right: "Traité sur la tolérance (1763)" },
              { left: "Rousseau", right: "Du contrat social (1762)" },
              { left: "Diderot et d'Alembert", right: "L'Encyclopédie (1751-1772)" },
              { left: "Beccaria", right: "Des délits et des peines (1764)" },
              { left: "Locke", right: "Lettre sur la tolérance (1689)" },
            ],
          },
          quiz: [
            {
              q: "Quelle idée Montesquieu développe-t-il dans De l'esprit des lois (1748) ?",
              options: ["La souveraineté du peuple", "La séparation des pouvoirs", "L'abolition immédiate de la monarchie", "La gravitation universelle"],
              answer: 1,
              why: "Montesquieu veut que « le pouvoir arrête le pouvoir » en séparant les puissances législative, exécutive et judiciaire.",
            },
            {
              q: "À quelle occasion Voltaire écrit-il le Traité sur la tolérance (1763) ?",
              options: ["La condamnation de Galilée", "La mort de Louis XIV", "L'affaire Calas", "La publication du dernier volume de l'Encyclopédie"],
              answer: 2,
              why: "Voltaire défend la mémoire de Jean Calas, protestant exécuté en 1762, et obtient sa réhabilitation en 1765.",
            },
            {
              q: "Qui dirige l'Encyclopédie ?",
              options: ["Diderot et d'Alembert", "Voltaire et Rousseau", "Montesquieu et l'Anglais John Locke", "Kant et Beccaria"],
              answer: 0,
              why: "Diderot et d'Alembert dirigent l'ouvrage, publié de 1751 à 1772, avec de nombreux collaborateurs.",
            },
            {
              q: "Qu'est-ce qu'un despote éclairé ?",
              options: ["Un philosophe qui tient un salon littéraire très fréquenté à Paris", "Un révolutionnaire qui renverse son roi", "Un député élu par le peuple", "Un souverain absolu qui se réclame des Lumières"],
              answer: 3,
              why: "Frédéric II ou Catherine II mènent des réformes inspirées des Lumières, mais gardent un pouvoir absolu.",
            },
            {
              q: "Quelle est une limite des Lumières au XVIIIe siècle ?",
              options: ["Elles n'ont aucun lien avec les sciences", "Leurs idées touchent surtout une élite instruite", "Elles sont limitées à la seule ville de Paris", "Elles sont soutenues sans réserve par l'Église et la censure royale"],
              answer: 1,
              why: "Le public des Lumières est surtout formé de nobles, de bourgeois et de clercs instruits ; une grande partie de la population ne sait pas lire.",
            },
          ],
          trap: "Faire des philosophes des révolutionnaires qui voulaient renverser le roi : la plupart sont des réformateurs, et certains conseillent des despotes éclairés. Autre confusion fréquente : attribuer la séparation des pouvoirs à Rousseau, alors qu'elle est l'idée de Montesquieu.",
          method: "Construisez une fiche à quatre colonnes (philosophe, oeuvre et date, idée clé, combat concret) pour Locke, Montesquieu, Voltaire, Rousseau, Diderot et Beccaria. Dans une copie, associez toujours une idée à un auteur et à une oeuvre datée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "sciences-xviiie",
          title: "Sciences et techniques au XVIIIe siècle : expérimenter et diffuser",
          minutes: 30,
          objectives: [
            "Décrire l'essor des sciences au XVIIIe siècle : expérimenter, mesurer, classer.",
            "Expliquer le rôle de la machine de Newcomen (1712) dans les débuts de la mécanisation.",
            "Présenter Émilie du Châtelet, femme de science, et la place des femmes dans les sciences.",
            "Identifier les moyens de diffusion des savoirs scientifiques et techniques au XVIIIe siècle.",
          ],
          course: [
            {
              heading: "Une science qui expérimente, mesure et classe",
              paragraphs: [
                "Le chimiste Antoine Lavoisier (1743-1794) fait de la balance son instrument principal : en pesant avec précision les substances avant et après une réaction, il montre que la masse totale se conserve. Il identifie le rôle de l'oxygène dans la combustion et la respiration, démontre en 1783 que l'eau est composée d'hydrogène et d'oxygène, et participe à la création d'une nomenclature chimique rationnelle (1787). Son Traité élémentaire de chimie paraît en 1789. Ancien fermier général, il est guillotiné en 1794.",
                "Les naturalistes cherchent à classer le vivant. Le Suédois Carl von Linné publie en 1735 le Systema naturae et généralise la nomenclature binominale, qui désigne chaque espèce par deux noms latins, le genre et l'espèce (Homo sapiens). En France, Buffon, intendant du Jardin du roi, publie à partir de 1749 une vaste Histoire naturelle ; dans Les Époques de la nature (1778), il estime l'âge de la Terre à environ 75 000 ans, bien plus que ne le suggère une lecture littérale de la Bible.",
                "L'électricité fascine : la bouteille de Leyde (1745-1746) permet de stocker des charges électriques. L'Américain Benjamin Franklin montre vers 1752 que la foudre est un phénomène électrique et invente le paratonnerre, une application pratique qui protège les bâtiments.",
              ],
              box: { label: "Définition", text: "Nomenclature binominale : système de dénomination des êtres vivants par deux noms latins, celui du genre puis celui de l'espèce (Homo sapiens, Felis catus), généralisé par Linné au XVIIIe siècle et toujours utilisé." },
            },
            {
              heading: "Mesurer la Terre et explorer le monde",
              paragraphs: [
                "Newton avait prévu que la Terre devait être aplatie aux pôles, alors que des mesures françaises suggéraient l'inverse. Pour trancher, l'Académie royale des sciences envoie deux expéditions mesurer la longueur d'un degré de méridien : l'une en Laponie, dirigée par Maupertuis (1736-1737), l'autre dans la vice-royauté du Pérou, autour de Quito, avec La Condamine et Bouguer (1735-1744). Les résultats donnent raison à Newton : la Terre est bien aplatie aux pôles.",
                "La mesure transforme aussi la connaissance du territoire : plusieurs générations de la famille Cassini dressent au XVIIIe siècle la première carte générale du royaume fondée sur la triangulation. En mer, l'horloger anglais John Harrison met au point des chronomètres de marine qui permettent de calculer la longitude. Les voyages de Bougainville (1766-1769) et de James Cook (1768-1779) emportent astronomes, naturalistes et dessinateurs, qui rapportent observations, plantes et cartes.",
              ],
              box: { label: "Repère", text: "1712 : machine de Newcomen. 1735 : Systema naturae de Linné. 1735-1744 : expédition au Pérou. 1749 : début de l'Histoire naturelle de Buffon. Vers 1752 : Franklin et la foudre. 1769 : brevet de Watt. 1783 : premier vol humain en montgolfière. 1789 : Traité élémentaire de chimie de Lavoisier." },
            },
            {
              heading: "Des techniques nouvelles : la machine de Newcomen",
              paragraphs: [
                "En 1712, l'Anglais Thomas Newcomen met en service près de Dudley, dans le centre de l'Angleterre, une machine à vapeur destinée à pomper l'eau qui envahit les mines. La vapeur remplit un cylindre ; on y injecte de l'eau froide, qui la condense et crée un vide partiel ; la pression de l'air pousse alors le piston vers le bas, ce qui actionne un grand balancier relié aux pompes. On parle de machine atmosphérique. Elle s'inspire des travaux du Français Denis Papin et de l'Anglais Thomas Savery.",
                "Très gourmande en charbon, la machine de Newcomen permet pourtant d'exploiter des mines plus profondes et se répand en Grande-Bretagne puis sur le continent. L'Écossais James Watt l'améliore en ajoutant un condenseur séparé (brevet de 1769), qui économise beaucoup de combustible ; associé à l'industriel Matthew Boulton à partir de 1775, il adapte ensuite la machine au mouvement rotatif, qui peut faire tourner des machines dans les usines.",
                "D'autres innovations transforment le textile : la navette volante de John Kay (1733), la spinning jenny de James Hargreaves (vers 1765), la water frame de Richard Arkwright (1769). En France, Cugnot construit en 1769-1771 un fardier à vapeur, et les frères Montgolfier inventent l'aérostat : le 21 novembre 1783, Pilâtre de Rozier et le marquis d'Arlandes réalisent à Paris le premier vol humain en montgolfière. Ces innovations préparent la révolution industrielle, qui commence en Grande-Bretagne à la fin du siècle.",
              ],
              box: { label: "Définition", text: "Invention : création d'un objet ou d'un procédé nouveau. Innovation : invention adoptée et diffusée dans l'économie et la société. La machine de Newcomen est une innovation car elle est construite et utilisée dans de nombreuses mines." },
            },
            {
              heading: "Émilie du Châtelet, femme de science",
              paragraphs: [
                "Émilie du Châtelet (1706-1749), aristocrate passionnée de mathématiques et de physique, se forme auprès de savants comme Maupertuis et Clairaut. Installée avec Voltaire au château de Cirey, en Champagne, à partir de 1734, elle y aménage un laboratoire et une bibliothèque. Elle présente en 1738 au concours de l'Académie des sciences une dissertation sur la nature du feu, que l'Académie publie, puis les Institutions de physique (1740). Son oeuvre majeure est la traduction française commentée des Principia de Newton, achevée peu avant sa mort en 1749 et publiée en 1759 : elle reste longtemps la traduction de référence.",
                "Les femmes sont alors exclues des universités et des académies : Émilie du Châtelet ne peut pas devenir membre de l'Académie des sciences. Les femmes de science accèdent au savoir par des précepteurs, des salons, la correspondance ou la collaboration avec un parent : Marie-Anne Paulze-Lavoisier dessine les instruments et traduit des textes pour les travaux de son mari. En Italie, Laura Bassi obtient un doctorat à l'université de Bologne en 1732 et y enseigne la physique, ce qui est exceptionnel.",
              ],
              box: { label: "À retenir", text: "Émilie du Châtelet (1706-1749) : physicienne et mathématicienne, auteure des Institutions de physique (1740) et de la traduction commentée des Principia de Newton (publiée en 1759). Elle montre que les femmes participent à la science des Lumières, malgré leur exclusion des académies." },
            },
            {
              heading: "Diffuser les sciences : un engouement du public",
              paragraphs: [
                "La science devient un spectacle et une mode. L'abbé Nollet donne des démonstrations d'électricité très suivies ; en 1746, devant Louis XV, il fait traverser une décharge électrique à une chaîne de 180 gardes. Nobles et bourgeois aisés achètent des instruments et constituent des cabinets de physique ou d'histoire naturelle. Les académies de province organisent des concours, les journaux rendent compte des découvertes, et l'Encyclopédie décrit les techniques dans ses planches. Des ouvrages de vulgarisation, comme les Entretiens sur la pluralité des mondes de Fontenelle (1686) ou les Éléments de la philosophie de Newton de Voltaire (1738), s'adressent à un public cultivé.",
                "La médecine progresse lentement. L'inoculation (ou variolisation), qui consiste à transmettre volontairement une forme légère de variole pour immuniser, est introduite en Angleterre en 1721 par Lady Mary Wortley Montagu ; elle est débattue en France, où Louis XVI se fait inoculer en 1774, après la mort de Louis XV de la variole. En 1796, l'Anglais Edward Jenner met au point la vaccination. Ces progrès renforcent la confiance des Lumières dans la raison et le progrès, même si la science reste l'affaire d'une minorité.",
              ],
            },
          ],
          keyPoints: [
            "Lavoisier : la balance, la conservation de la masse, l'oxygène, l'eau composée d'hydrogène et d'oxygène (Traité, 1789).",
            "Linné (1735) classe le vivant (nomenclature binominale) ; Buffon publie l'Histoire naturelle à partir de 1749.",
            "Expéditions en Laponie et au Pérou : la Terre est aplatie aux pôles, comme l'avait prévu Newton.",
            "1712 : machine atmosphérique de Newcomen pour pomper l'eau des mines ; Watt l'améliore (condenseur séparé, 1769).",
            "Émilie du Châtelet (1706-1749) traduit et commente les Principia de Newton ; les femmes restent exclues des académies.",
            "Diffusion : démonstrations publiques (Nollet), cabinets de physique, académies, journaux, Encyclopédie, vulgarisation.",
          ],
          example: {
            statement: "Expliquez comment fonctionne la machine de Newcomen (1712) et pourquoi elle est importante.",
            solution: [
              "Présenter la machine : en 1712, l'Anglais Thomas Newcomen met en service près de Dudley une machine à vapeur destinée à pomper l'eau des mines de charbon.",
              "Décrire le fonctionnement : la vapeur remplit un cylindre ; une injection d'eau froide la condense et crée un vide partiel ; la pression atmosphérique pousse le piston, qui actionne un balancier relié aux pompes.",
              "Expliquer l'intérêt immédiat : la machine permet d'évacuer l'eau et donc d'exploiter des mines plus profondes, alors que la demande de charbon augmente.",
              "Montrer les limites : elle consomme beaucoup de charbon et ne produit qu'un mouvement de va-et-vient.",
              "Montrer la postérité : Watt l'améliore avec le condenseur séparé (1769), puis l'adapte au mouvement rotatif ; la machine à vapeur peut alors actionner des usines.",
              "Conclure : la machine de Newcomen est l'une des premières machines à transformer la chaleur en travail mécanique ; elle prépare la révolution industrielle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez en une phrase l'apport de chacun des acteurs suivants et la date qui lui est associée dans le cours : (a) Thomas Newcomen ; (b) Carl von Linné ; (c) Benjamin Franklin ; (d) James Watt ; (e) les frères Montgolfier ; (f) Antoine Lavoisier.",
              hint: "Les dates à retrouver sont 1712, 1735, vers 1752, 1769, 1783 et 1789.",
              solution: [
                "(a) Newcomen met en service en 1712 une machine à vapeur atmosphérique pour pomper l'eau des mines.",
                "(b) Linné publie en 1735 le Systema naturae et classe le vivant avec une nomenclature à deux noms latins.",
                "(c) Franklin montre vers 1752 que la foudre est électrique et invente le paratonnerre.",
                "(d) Watt dépose en 1769 le brevet du condenseur séparé, qui améliore la machine à vapeur.",
                "(e) Les frères Montgolfier inventent l'aérostat : le premier vol humain en montgolfière a lieu à Paris le 21 novembre 1783.",
                "(f) Lavoisier publie en 1789 le Traité élémentaire de chimie, après avoir montré la conservation de la masse et le rôle de l'oxygène.",
              ],
            },
            {
              level: 2,
              statement: "Document : le peintre anglais Joseph Wright of Derby peint en 1768 Une expérience sur un oiseau dans une pompe à air (National Gallery, Londres). Dans une pièce plongée dans l'ombre, éclairée par une bougie, un savant itinérant fait le vide dans un globe de verre où se trouve un oiseau, devant une famille aisée réunie autour de la table. Certains spectateurs observent l'expérience avec attention, d'autres, comme deux jeunes filles, semblent effrayées par le sort de l'oiseau. (1) Présentez le document. (2) Expliquez quelle expérience est montrée et ce qu'elle cherche à prouver. (3) Montrez ce que ce tableau révèle de la diffusion des sciences au XVIIIe siècle. (4) Indiquez une limite de cette diffusion.",
              hint: "Une pompe à air retire l'air d'un récipient : que devient un être vivant privé d'air ? Observez ensuite qui assiste à l'expérience et dans quel cadre.",
              solution: [
                "(1) C'est un tableau (huile sur toile) du peintre anglais Joseph Wright of Derby, réalisé en 1768 et conservé à la National Gallery de Londres. Il représente une démonstration scientifique dans un intérieur privé.",
                "(2) Le savant retire l'air du globe avec une pompe : l'oiseau, privé d'air, suffoque. L'expérience montre que l'air est nécessaire à la vie et que le vide peut être produit ; elle prolonge les recherches du XVIIe siècle sur le vide et la pression de l'air.",
                "(3) Le tableau montre que la science devient un spectacle : des savants itinérants font des démonstrations chez des particuliers aisés, qui veulent voir et comprendre. L'expérience suscite curiosité, réflexion et émotion, ce qui traduit l'engouement du public des Lumières pour les sciences.",
                "(4) Limite : le public est une famille aisée, dans une demeure privée ; la diffusion concerne surtout les élites, alors que la majorité de la population n'a pas accès à ces démonstrations.",
                "Conclusion : le tableau illustre la diffusion de la démarche expérimentale au XVIIIe siècle, dans une partie privilégiée de la société.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Comment les sciences et les techniques progressent-elles au XVIIIe siècle, et comment leurs découvertes se diffusent-elles ? ». Rédigez une introduction, un développement en deux parties avec deux arguments précis par partie, et une conclusion.",
              hint: "Première partie : les progrès (méthode expérimentale, exemples en chimie, sciences naturelles, techniques). Deuxième partie : la diffusion (lieux, supports, acteurs, dont Émilie du Châtelet) et ses limites.",
              solution: [
                "Introduction : héritier de la révolution scientifique et de Newton, le XVIIIe siècle voit les savants multiplier expériences et mesures, tandis que les philosophes des Lumières font de la science un modèle de raison. Problématique : quels progrès les sciences et les techniques accomplissent-elles, et jusqu'où leurs découvertes se diffusent-elles dans la société ?",
                "I. Des progrès fondés sur l'expérience et la mesure. Argument 1 : en sciences, Lavoisier montre avec la balance la conservation de la masse et la composition de l'eau (1783), Linné classe le vivant (1735), les expéditions de Laponie et du Pérou prouvent l'aplatissement de la Terre aux pôles. Argument 2 : en techniques, la machine de Newcomen (1712) pompe l'eau des mines, Watt l'améliore (1769), les innovations textiles et la montgolfière (1783) annoncent la révolution industrielle.",
                "II. Une diffusion réelle, mais limitée. Argument 1 : les savoirs circulent par les académies et leurs concours, les journaux, l'Encyclopédie et ses planches, les démonstrations publiques de l'abbé Nollet, la vulgarisation de Voltaire ; Émilie du Châtelet rend Newton accessible en français (traduction publiée en 1759). Argument 2 : mais ce public reste une élite aisée et instruite, les femmes sont exclues des académies, et la majorité de la population ignore ces découvertes.",
                "Conclusion : le XVIIIe siècle consolide la science expérimentale et amorce la mécanisation ; la diffusion de ces savoirs nourrit la confiance des Lumières dans le progrès, même si elle reste socialement restreinte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire des sciences et des techniques au XVIIIe siècle dans l'ordre chronologique.",
            items: [
              "Machine à vapeur de Newcomen pour pomper l'eau des mines (1712)",
              "Systema naturae de Linné (1735)",
              "Expérience de Franklin sur la foudre (vers 1752)",
              "Publication de la traduction des Principia par Émilie du Châtelet (1759)",
              "Brevet du condenseur séparé de James Watt (1769)",
              "Premier vol humain en montgolfière (1783)",
              "Traité élémentaire de chimie de Lavoisier (1789)",
            ],
          },
          quiz: [
            {
              q: "À quoi sert d'abord la machine de Newcomen (1712) ?",
              options: ["À faire avancer les navires", "À pomper l'eau des mines", "À tisser le coton", "À propulser les premières locomotives sur rail"],
              answer: 1,
              why: "La machine atmosphérique de Newcomen évacue l'eau qui envahit les mines, ce qui permet de creuser plus profond.",
            },
            {
              q: "Quelle oeuvre majeure Émilie du Châtelet réalise-t-elle ?",
              options: ["L'Encyclopédie", "Le Systema naturae", "Une traduction commentée des Principia de Newton", "Le premier vol en montgolfière"],
              answer: 2,
              why: "Sa traduction française commentée des Principia, publiée en 1759, est restée longtemps la référence.",
            },
            {
              q: "Quel instrument est au coeur de la méthode de Lavoisier ?",
              options: ["La balance", "La lunette astronomique", "Le microscope", "La pompe à air de Wright of Derby"],
              answer: 0,
              why: "En pesant les substances avant et après les réactions, Lavoisier montre que la masse totale se conserve.",
            },
            {
              q: "Que démontrent les expéditions de Laponie et du Pérou ?",
              options: ["Que la Terre est plate", "Que le Soleil tourne autour de la Terre", "Que la Terre est allongée vers les pôles", "Que la Terre est aplatie aux pôles"],
              answer: 3,
              why: "Les mesures d'un degré de méridien confirment la prévision de Newton : la Terre est aplatie aux pôles.",
            },
            {
              q: "Pourquoi Émilie du Châtelet ne siège-t-elle pas à l'Académie des sciences ?",
              options: ["Parce qu'elle refuse d'y entrer", "Parce que les femmes en sont exclues", "Parce qu'elle vit en Angleterre", "Parce qu'elle ne publie aucun ouvrage scientifique"],
              answer: 1,
              why: "Au XVIIIe siècle, les académies et les universités françaises sont fermées aux femmes, quelle que soit leur compétence.",
            },
          ],
          trap: "Croire que la machine de Newcomen fait déjà tourner les usines ou rouler les trains : en 1712, elle sert à pomper l'eau des mines ; c'est Watt qui l'adapte plus tard au mouvement rotatif. Autre piège : oublier les femmes de science, comme Émilie du Châtelet.",
          method: "Pour chaque découverte ou innovation, notez trois éléments : qui, quand, à quoi cela sert. Puis classez-les en deux colonnes (sciences et techniques) : vous disposez d'exemples précis pour toute question sur le XVIIIe siècle scientifique.",
        },
      ],
    },
    /* ==================================================================== */
    /* TENSIONS, MUTATIONS ET CRISPATIONS DE LA SOCIÉTÉ D'ORDRES             */
    /* ==================================================================== */
    {
      id: 'societe-ordres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "societe-ordres-structure",
          title: "La société d'ordres : clergé, noblesse et tiers état",
          minutes: 30,
          objectives: [
            "Définir la société d'ordres et la notion de privilège.",
            "Décrire la composition, le rôle et les privilèges du clergé et de la noblesse.",
            "Caractériser la diversité du tiers état, des journaliers aux bourgeois.",
            "Expliquer le poids des prélèvements (impôts royaux, dîme, droits seigneuriaux) sur la population.",
          ],
          course: [
            {
              heading: "Une société hiérarchisée par la naissance et la dignité",
              paragraphs: [
                "Dans la France des XVIIe et XVIIIe siècles, chacun appartient à l'un des trois ordres du royaume, définis par leur fonction et leur dignité, et non par leur richesse : le clergé, qui prie, la noblesse, qui combat, et le tiers état, qui travaille. Cette représentation remonte au Moyen Âge (l'évêque Adalbéron de Laon la formule vers 1030). En 1610, le juriste Charles Loyseau la décrit dans son Traité des ordres et simples dignités : chaque ordre a son rang, et l'inégalité est jugée naturelle et voulue par Dieu.",
                "La hiérarchie est visible partout : ordre de préséance dans les cérémonies, places réservées à l'église, droit de porter l'épée, vêtements. Elle repose sur les privilèges. Ceux-ci ne sont pas réservés aux nobles : des villes, des provinces, des corporations de métiers ou des cours de justice ont aussi les leurs. La société d'Ancien Régime est une société de corps et de privilèges, où les droits dépendent du groupe auquel on appartient.",
                "À la veille de la Révolution, le royaume compte environ 28 millions d'habitants. Selon les estimations des historiens, le clergé représente environ 0,5 % de la population, la noblesse environ 1 à 1,5 %, et le tiers état tout le reste, soit environ 98 %.",
              ],
              box: { label: "Définition", text: "Société d'ordres : société divisée en groupes hiérarchisés (clergé, noblesse, tiers état) selon la naissance et la fonction, chacun ayant des droits et des devoirs différents. Privilège (du latin privata lex, loi particulière) : droit ou exemption propre à une personne ou à un groupe." },
            },
            {
              heading: "Le clergé, premier ordre du royaume",
              paragraphs: [
                "Le clergé est le premier ordre parce qu'il sert Dieu. Il compte environ 130 000 membres à la fin du XVIIIe siècle, selon les estimations. Le clergé séculier (curés, vicaires) vit au contact des fidèles ; le clergé régulier (moines, religieuses) suit la règle d'un ordre religieux. Il est très inégal : le haut clergé (évêques, abbés), presque entièrement issu de la noblesse, est souvent riche, tandis que le bas clergé, formé de curés de paroisse venus du tiers état, vit parfois modestement.",
                "Le clergé encadre la vie religieuse (messes, sacrements), tient les registres paroissiaux des baptêmes, des mariages et des sépultures, assure une grande partie de l'enseignement (petites écoles, collèges) et de l'assistance (hôpitaux, aumônes). Il perçoit la dîme, une part des récoltes prélevée sur les paysans, et possède une part importante des terres. Il ne paie pas la taille, mais vote, dans son assemblée, un « don gratuit » au roi, et il a ses propres tribunaux.",
              ],
            },
            {
              heading: "La noblesse : naissance, honneur et seigneurie",
              paragraphs: [
                "On naît noble par son père. Il existe une noblesse d'épée, ancienne et militaire, et une noblesse de robe, formée de familles anoblies par des charges de justice et d'administration (par exemple les conseillers des parlements). Le roi peut anoblir par lettres, et certaines charges achetées, les offices, donnent la noblesse. La noblesse est très diverse : les grands seigneurs vivent à la cour de Versailles, tandis que de petits nobles de province, les hobereaux, sont parfois pauvres.",
                "Les nobles sont exemptés de la taille ; ils ont des privilèges honorifiques (port de l'épée, banc à l'église, armoiries) et judiciaires, et accèdent en priorité aux grades d'officier et aux hautes fonctions de l'Église et de l'État. Ils doivent « vivre noblement », de leurs terres et du service du roi : un noble qui exerce un métier manuel ou le commerce de détail risque la dérogeance, c'est-à-dire la perte de sa noblesse. Le commerce maritime en gros leur est toutefois permis depuis un édit de 1669.",
                "Beaucoup de nobles, mais aussi des ecclésiastiques et des bourgeois, possèdent des seigneuries. Le seigneur perçoit sur les paysans de sa seigneurie des droits seigneuriaux : le cens (redevance annuelle en argent), le champart (part de la récolte), les banalités (paiement pour l'usage obligatoire du moulin, du four ou du pressoir), des droits sur les ventes de terres ; il peut exiger des corvées, rendre la justice et se réserver le droit de chasse.",
              ],
              box: { label: "Définition", text: "Seigneurie : domaine sur lequel un seigneur exerce des droits sur les terres et les habitants. Droits seigneuriaux : redevances et services dus au seigneur par les paysans (cens, champart, banalités, corvées). Dérogeance : perte de la noblesse pour avoir exercé une activité jugée indigne." },
            },
            {
              heading: "Le tiers état : une immense majorité très diverse",
              paragraphs: [
                "Les paysans forment environ 80 % de la population. Leur condition est très variable : le laboureur, qui possède une charrue et des animaux de trait, peut être aisé ; les fermiers et les métayers louent des terres ; les manouvriers et les journaliers, nombreux, vendent leur force de travail et vivent dans la précarité. Les paysans possèdent une partie des terres, mais doivent en louer d'autres pour vivre.",
                "En ville vivent des artisans et des boutiquiers, souvent organisés en corporations (maîtres, compagnons, apprentis), un petit peuple de domestiques, de porteurs et de journaliers, et de nombreux pauvres. À Paris, qui compte plusieurs centaines de milliers d'habitants, la richesse côtoie la misère ; l'Hôpital général, fondé en 1656, enferme mendiants et vagabonds. La bourgeoisie (négociants, banquiers, financiers, manufacturiers, avocats, médecins, rentiers) appartient aussi au tiers état : certains bourgeois sont plus riches que bien des nobles, mais ils n'ont pas leurs privilèges.",
                "Les non-privilégiés supportent l'essentiel des prélèvements. Au roi, ils paient la taille (impôt direct dont nobles et clercs sont exemptés), la capitation (1695) et les vingtièmes (à partir de 1749), en principe payés par tous mais auxquels les privilégiés échappent souvent en partie, ainsi que des impôts indirects comme la gabelle sur le sel, perçus par la Ferme générale. Ils doivent aussi la dîme à l'Église et les droits seigneuriaux au seigneur, et participent à la corvée royale pour l'entretien des routes.",
              ],
              box: { label: "À retenir", text: "Le paysan paie trois fois : au roi (taille, capitation, vingtièmes, gabelle), à l'Église (dîme) et au seigneur (cens, champart, banalités). Les privilégiés, clergé et noblesse, sont exemptés de la taille." },
            },
          ],
          keyPoints: [
            "Société d'ordres : clergé, noblesse et tiers état, hiérarchisés par la naissance et la dignité, non par la richesse.",
            "Privilège : droit ou exemption propre à un groupe ; la société d'Ancien Régime est une société de corps et de privilèges.",
            "Clergé (environ 0,5 %) : haut et bas clergé, séculier et régulier ; perçoit la dîme, exempté de la taille.",
            "Noblesse (environ 1 à 1,5 %) : épée et robe, privilèges fiscaux et honorifiques, droits seigneuriaux, dérogeance.",
            "Tiers état (environ 98 %) : paysans (environ 80 %), artisans, pauvres des villes et bourgeoisie.",
            "Les non-privilégiés paient au roi (taille, gabelle), à l'Église (dîme) et au seigneur (cens, champart, banalités).",
          ],
          example: {
            statement: "Montrez que la société d'ordres repose sur l'inégalité des droits et non sur la richesse.",
            solution: [
              "Définir la société d'ordres : une société divisée en trois ordres hiérarchisés selon la naissance et la fonction (prier, combattre, travailler).",
              "Montrer que les droits dépendent de l'ordre : les privilégiés sont exemptés de la taille, ont des droits honorifiques et judiciaires, et accèdent en priorité à certaines fonctions.",
              "Montrer que la richesse ne coïncide pas avec le rang : un négociant de Bordeaux, très riche, reste dans le tiers état et paie la taille, alors qu'un hobereau ruiné reste noble et exempté.",
              "Montrer la diversité interne des ordres : un évêque noble et un curé de campagne appartiennent au même ordre, mais vivent très différemment.",
              "Ajouter que les inégalités sont jugées naturelles et voulues par Dieu, comme l'écrit Loyseau en 1610.",
              "Conclure : la société d'ordres est fondée sur l'inégalité juridique ; c'est ce décalage entre richesse et rang qui nourrira les tensions du XVIIIe siècle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez l'ordre et le groupe de chacune de ces personnes : (a) un évêque, fils d'un duc ; (b) un curé de campagne, fils de laboureur ; (c) un conseiller au parlement de Bordeaux, noble par sa charge ; (d) un riche négociant nantais ; (e) un journalier agricole ; (f) un capitaine issu d'une ancienne famille militaire noble ; (g) une religieuse dans un couvent.",
              hint: "Demandez-vous d'abord : la personne sert-elle l'Église, est-elle noble, ou n'est-elle ni l'un ni l'autre ? Puis précisez le groupe à l'intérieur de l'ordre.",
              solution: [
                "(a) Clergé, haut clergé (et d'origine noble).",
                "(b) Clergé, bas clergé séculier (d'origine roturière).",
                "(c) Noblesse, noblesse de robe.",
                "(d) Tiers état, bourgeoisie du négoce.",
                "(e) Tiers état, paysannerie pauvre.",
                "(f) Noblesse, noblesse d'épée.",
                "(g) Clergé, clergé régulier.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, construites pour l'exercice (les charges réelles variaient beaucoup selon les régions). Une famille de laboureurs tire de sa récolte une valeur de 600 livres par an. Elle verse : la dîme (50 livres) ; des droits seigneuriaux (40 livres) ; la taille (60 livres) ; la capitation et les vingtièmes (30 livres) ; la gabelle (20 livres). (1) Calculez le total des prélèvements et leur part dans la valeur de la récolte. (2) Répartissez ces prélèvements entre l'Église, le seigneur et le roi, et calculez la part du roi dans la valeur de la récolte. (3) Expliquez pourquoi une famille noble voisine, possédant autant de terres, paierait beaucoup moins au roi.",
              hint: "Additionnez tous les prélèvements, puis divisez par 600. Classez chaque prélèvement selon son bénéficiaire : la dîme va à l'Église, les droits seigneuriaux au seigneur, le reste au roi.",
              solution: [
                "(1) Total : 50 + 40 + 60 + 30 + 20 = 200 livres. Part : 200 ÷ 600 = 1/3, soit environ 33 % de la valeur de la récolte.",
                "(2) Église : 50 livres (la dîme). Seigneur : 40 livres (droits seigneuriaux). Roi : 60 + 30 + 20 = 110 livres. Part du roi : 110 ÷ 600 ≈ 0,183, soit environ 18 %.",
                "(3) La famille noble est exemptée de la taille (60 livres ici), et les privilégiés échappent souvent en partie à la capitation et aux vingtièmes. Si elle possède une seigneurie, elle perçoit elle-même des droits seigneuriaux au lieu d'en payer.",
                "Conclusion : dans cet exemple, le tiers de la récolte part en prélèvements ; l'inégalité fiscale entre privilégiés et non-privilégiés est au coeur des tensions de la société d'ordres.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document. Caricature anonyme de 1789 (musée Carnavalet, Paris) : un vieux paysan courbé, appuyé sur un bâton, porte sur son dos un ecclésiastique et un noble armé d'une épée ; au premier plan, des oiseaux et des lapins dévorent ses récoltes. La légende, en patois, exprime en substance l'espoir que « ce jeu-là » finira bientôt. (1) Présentez le document. (2) Identifiez les personnages et ce qu'ils représentent. (3) Expliquez quelles charges et quelles injustices la caricature dénonce, à l'aide du cours. (4) Montrez les limites de cette vision de la société.",
              hint: "Une caricature exagère pour convaincre : identifiez qui porte qui, et ce que signifient les animaux (pensez aux privilèges de chasse des seigneurs). Pour les limites, pensez à la diversité du tiers état et des privilégiés.",
              solution: [
                "(1) C'est une caricature anonyme, une image satirique, datée de 1789, conservée au musée Carnavalet à Paris. Elle paraît l'année de la convocation des états généraux, quand la société d'ordres est vivement débattue.",
                "(2) Le vieux paysan représente le tiers état, qui travaille ; l'ecclésiastique représente le clergé et le noble à l'épée la noblesse, les deux ordres privilégiés, qui se font porter.",
                "(3) La caricature dénonce le poids des prélèvements sur les paysans : la dîme due à l'Église, les droits seigneuriaux dus au seigneur et les impôts royaux comme la taille, dont les privilégiés sont exemptés. Les oiseaux et les lapins rappellent le droit de chasse et de colombier réservé aux seigneurs, dont le gibier ravage les cultures sans que le paysan puisse le détruire. La légende exprime l'espoir que ce système prenne fin.",
                "(4) Limites : l'image simplifie. Le tiers état ne se réduit pas aux paysans : il comprend aussi des bourgeois parfois très riches. Les privilégiés ne sont pas tous oisifs ni riches : le bas clergé et les hobereaux sont souvent modestes. C'est une image militante, destinée à convaincre.",
                "Conclusion : la caricature exprime le rejet des privilèges qui monte en 1789, mais il faut la confronter à la diversité réelle de la société d'ordres.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme de la société d'Ancien Régime à sa définition.",
            pairs: [
              { left: "Dîme", right: "Part des récoltes versée à l'Église" },
              { left: "Taille", right: "Impôt royal direct payé par les non-privilégiés" },
              { left: "Gabelle", right: "Impôt royal sur le sel" },
              { left: "Banalités", right: "Paiement pour utiliser le moulin, le four ou le pressoir du seigneur" },
              { left: "Cens", right: "Redevance annuelle en argent due au seigneur" },
              { left: "Dérogeance", right: "Perte de la noblesse pour une activité jugée indigne" },
            ],
          },
          quiz: [
            {
              q: "Sur quel critère principal repose l'appartenance à un ordre ?",
              options: ["La fortune accumulée par la famille", "Le niveau d'instruction", "Le lieu de résidence, ville ou campagne", "La naissance ou la fonction"],
              answer: 3,
              why: "On appartient à un ordre par la naissance (noblesse) ou par la fonction (clergé) ; la richesse ne change pas l'ordre.",
            },
            {
              q: "Qui paie la taille ?",
              options: ["Les non-privilégiés, surtout les paysans", "Les seuls nobles de province", "Le clergé, par le don gratuit versé au roi", "Tous les habitants sans aucune exception"],
              answer: 0,
              why: "La taille est l'impôt direct des roturiers ; clergé et noblesse en sont exemptés.",
            },
            {
              q: "Qu'est-ce que la noblesse de robe ?",
              options: ["La noblesse ancienne, d'origine militaire et féodale", "Les nobles qui servent dans la marine royale", "Une noblesse issue des charges de justice", "Les nobles ruinés de province"],
              answer: 2,
              why: "La noblesse de robe est formée de familles anoblies par des charges de justice et d'administration, comme les conseillers des parlements.",
            },
            {
              q: "Comment s'appelle la part des récoltes versée à l'Église ?",
              options: ["La gabelle", "La taille", "La capitation", "La dîme"],
              answer: 3,
              why: "La dîme est prélevée sur les récoltes au profit du clergé ; la gabelle, la taille et la capitation sont des impôts royaux.",
            },
            {
              q: "Laquelle de ces personnes appartient au tiers état ?",
              options: ["Un évêque issu d'une famille ducale", "Un abbé à la tête d'un monastère", "Un riche négociant de Bordeaux", "Un conseiller au parlement anobli"],
              answer: 2,
              why: "Même très riche, un négociant non anobli reste dans le tiers état ; évêque et abbé sont du clergé, le conseiller anobli est noble.",
            },
          ],
          trap: "Confondre ordre et classe sociale : la société d'ordres classe les individus par la naissance et la fonction, pas par la richesse. Un bourgeois peut être plus riche qu'un noble tout en restant dans le tiers état. Autre erreur : croire que tous les nobles et tous les clercs sont riches.",
          method: "Pour décrire la société d'ordres, utilisez un tableau à trois lignes (clergé, noblesse, tiers état) et quatre colonnes (part de la population, groupes internes, rôle, privilèges ou charges). Récitez-le à voix haute : il fournit le plan de toute réponse sur ce sujet.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "mutations-economiques",
          title: "Mutations économiques et essor de la bourgeoisie",
          minutes: 30,
          objectives: [
            "Décrire la croissance démographique et l'essor du commerce colonial et atlantique au XVIIIe siècle, fondé en partie sur la traite.",
            "Identifier les transformations de l'agriculture, de l'artisanat et les débuts de l'industrie.",
            "Caractériser la bourgeoisie et ses aspirations à l'ascension sociale.",
            "Expliquer en quoi ces mutations bousculent la société d'ordres.",
          ],
          course: [
            {
              heading: "Un royaume plus peuplé, une agriculture qui change lentement",
              paragraphs: [
                "Après les dures crises de la fin du règne de Louis XIV, comme la famine du « grand hiver » de 1709, le XVIIIe siècle connaît une croissance démographique : la population du royaume passe d'environ 22 millions d'habitants vers 1700 à environ 28 millions en 1789, selon les estimations. Les grandes famines reculent et la peste disparaît après l'épidémie de Marseille (1720).",
                "En Angleterre, une révolution agricole augmente les rendements : les enclosures (clôture des champs, qui met fin aux usages collectifs) et de nouvelles rotations des cultures, intégrant le navet et le trèfle, suppriment la jachère et permettent de nourrir plus de bétail. En France, des agronomes et des sociétés d'agriculture diffusent ces méthodes, et Parmentier promeut la pomme de terre dans les années 1770-1780, mais les changements restent limités. Les physiocrates, autour de François Quesnay, affirment que la terre est la seule source de richesse et réclament la liberté du commerce des grains.",
              ],
              box: { label: "Définition", text: "Physiocratie : courant de pensée économique français du XVIIIe siècle (Quesnay, Tableau économique, 1758) selon lequel la terre est la seule véritable source de richesse ; les physiocrates défendent la propriété et la liberté du commerce." },
            },
            {
              heading: "L'essor du commerce colonial, fondé sur la traite et l'esclavage",
              paragraphs: [
                "Le commerce extérieur de la France connaît une très forte croissance au XVIIIe siècle : selon les estimations des historiens, il est multiplié par quatre ou cinq entre les années 1710 et 1789. Ce dynamisme repose surtout sur le commerce avec les colonies des Antilles. Saint-Domingue (la partie occidentale de l'île d'Hispaniola) devient à la fin du siècle la première colonie sucrière du monde et produit aussi du café, de l'indigo et du coton. Bordeaux, premier port colonial du royaume, réexporte sucre et café vers l'Europe du Nord ; Nantes, La Rochelle et Le Havre arment aussi des navires.",
                "Cette prospérité repose sur l'esclavage. Dans le commerce triangulaire, les navires partent des ports européens chargés de textiles, d'armes, d'alcool et d'objets manufacturés ; sur les côtes d'Afrique, ces marchandises sont échangées contre des captifs, qui traversent l'Atlantique dans des conditions effroyables et sont vendus comme esclaves aux Amériques ; les navires reviennent chargés de produits coloniaux. Selon les estimations, les navires français ont déporté plus d'un million de captifs africains ; Nantes, premier port négrier français, a armé plus de 40 % des expéditions. Le Code noir (1685) réglemente l'esclavage dans les colonies françaises.",
              ],
              box: { label: "Définition", text: "Traite atlantique : commerce des captifs africains, déportés vers les Amériques pour y être réduits en esclavage. Commerce triangulaire : circuit Europe, Afrique, Amériques, puis retour en Europe, fondé sur cette traite et sur les produits des plantations esclavagistes." },
            },
            {
              heading: "Ateliers, manufactures et débuts de l'industrie",
              paragraphs: [
                "La production reste surtout artisanale. En ville, les métiers sont encadrés par des corporations qui fixent les règles de fabrication et l'accès à la maîtrise. À la campagne se développe une proto-industrie : des marchands-fabricants confient la matière première à des familles paysannes qui filent et tissent à domicile, surtout l'hiver, puis ils récupèrent et vendent les produits ; c'est le cas du textile en Flandre, en Picardie, en Normandie ou dans le Languedoc.",
                "Des manufactures rassemblent de nombreux ouvriers dans un même lieu : manufactures royales créées sous Colbert, comme les Gobelins (tapisseries) ou Saint-Gobain (glaces, 1665), puis entreprises privées comme la manufacture de toiles imprimées (indiennes) d'Oberkampf à Jouy-en-Josas (1760). La Compagnie des mines d'Anzin (1757) exploite le charbon du Nord, et la fonderie du Creusot, fondée en 1782, utilise le coke. Mais la Grande-Bretagne est en avance : c'est là que commence, à la fin du XVIIIe siècle, la révolution industrielle, avec la mécanisation du textile et la machine à vapeur.",
              ],
              box: { label: "Définition", text: "Proto-industrialisation : forme de production dans laquelle des paysans travaillent à domicile pour le compte d'un marchand qui fournit la matière première et vend les produits. Manufacture : établissement qui regroupe de nombreux ouvriers, sans machines modernes." },
            },
            {
              heading: "L'essor de la bourgeoisie et ses aspirations",
              paragraphs: [
                "La bourgeoisie, groupe urbain du tiers état, profite de ces mutations. Elle comprend les négociants et armateurs des ports, les banquiers et les financiers (comme les fermiers généraux, qui perçoivent les impôts indirects pour le roi et s'enrichissent considérablement), les manufacturiers, les officiers non nobles, les membres des professions libérales (avocats, notaires, médecins) et les rentiers. À Bordeaux, la place royale (actuelle place de la Bourse) et les façades des quais témoignent de la richesse du négoce.",
                "Les bourgeois enrichis cherchent souvent à imiter la noblesse : ils achètent des terres, des seigneuries et des offices qui anoblissent, et marient leurs filles à des nobles. Molière s'en moquait déjà dans Le Bourgeois gentilhomme (1670). Beaucoup adhèrent aussi aux idées des Lumières : ils fréquentent les académies et les loges, lisent, et défendent le mérite et la liberté du commerce contre les privilèges, les corporations et les douanes intérieures.",
                "Cette croissance est inégalement partagée. Selon les calculs de l'historien Ernest Labrousse, entre la fin des années 1720 et la fin des années 1780, les prix augmentent d'environ 65 % alors que les salaires n'augmentent que d'environ 22 %. Les propriétaires et ceux qui perçoivent des redevances en nature profitent de la hausse des prix, tandis que les salariés et les journaliers s'appauvrissent. Ces décalages nourrissent les tensions de la fin du siècle.",
              ],
              box: { label: "À retenir", text: "La bourgeoisie s'enrichit par le négoce, la finance, la manufacture et les professions libérales. Riche mais non privilégiée, elle aspire à la noblesse ou à la reconnaissance du mérite : ce décalage entre richesse et rang bouscule la société d'ordres." },
            },
          ],
          keyPoints: [
            "Croissance démographique : environ 22 millions d'habitants vers 1700, environ 28 millions en 1789 (estimations).",
            "Commerce colonial en plein essor : Saint-Domingue, première colonie sucrière du monde ; Bordeaux, premier port colonial.",
            "La prospérité atlantique repose sur la traite et l'esclavage ; Nantes, premier port négrier français.",
            "Production surtout artisanale et proto-industrielle ; manufactures (Saint-Gobain, Oberkampf) ; la Grande-Bretagne en avance.",
            "Bourgeoisie : négociants, financiers, manufacturiers, professions libérales ; elle imite la noblesse ou réclame la reconnaissance du mérite.",
            "Une croissance inégale : selon Labrousse, les prix augmentent bien plus vite que les salaires au XVIIIe siècle.",
          ],
          example: {
            statement: "Expliquez comment le commerce colonial enrichit Bordeaux et Nantes au XVIIIe siècle, et quel en est le prix humain.",
            solution: [
              "Présenter le contexte : au XVIIIe siècle, le commerce extérieur de la France croît fortement, porté par le commerce avec les colonies des Antilles.",
              "Expliquer le rôle de Bordeaux : premier port colonial, il importe le sucre et le café de Saint-Domingue et les réexporte vers l'Europe du Nord.",
              "Expliquer le rôle de Nantes : premier port négrier français, il arme plus de 40 % des expéditions de traite, selon les estimations.",
              "Décrire le circuit du commerce triangulaire : marchandises vers l'Afrique, captifs vers les Amériques, produits coloniaux vers l'Europe.",
              "Montrer l'enrichissement : armateurs et négociants font fortune et construisent hôtels particuliers et quais monumentaux (place royale de Bordeaux).",
              "Montrer le prix humain : plus d'un million de captifs déportés par les navires français, la mortalité de la traversée, l'esclavage dans les plantations, réglementé par le Code noir (1685).",
              "Conclure : la prospérité des ports atlantiques repose sur l'exploitation de millions d'Africains réduits en esclavage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants : (a) commerce triangulaire ; (b) négociant ; (c) manufacture ; (d) proto-industrie ; (e) physiocrate ; (f) enclosures.",
              hint: "Pour chaque terme, précisez qui est concerné, où et dans quel but.",
              solution: [
                "(a) Commerce triangulaire : circuit commercial Europe, Afrique, Amériques, fondé sur la traite des captifs africains et le commerce des produits coloniaux.",
                "(b) Négociant : marchand qui pratique le commerce en gros, souvent à longue distance, et peut armer des navires.",
                "(c) Manufacture : établissement qui rassemble de nombreux ouvriers en un même lieu pour produire, sans machines modernes.",
                "(d) Proto-industrie : travail à domicile de familles paysannes pour le compte d'un marchand-fabricant qui fournit la matière première et vend les produits.",
                "(e) Physiocrate : partisan d'une doctrine économique (Quesnay) selon laquelle la terre est la seule source de richesse, et qui défend la liberté du commerce.",
                "(f) Enclosures : clôture des champs en Angleterre, qui met fin aux usages collectifs et permet de moderniser l'agriculture.",
              ],
            },
            {
              level: 2,
              statement: "D'après les calculs de l'historien Ernest Labrousse (valeurs arrondies) : si l'on fixe à l'indice 100 les prix et les salaires de la fin des années 1720, les prix atteignent l'indice 165 et les salaires l'indice 122 à la fin des années 1780. (1) Calculez le pourcentage d'augmentation des prix et des salaires. (2) Calculez l'indice du pouvoir d'achat d'un salarié à la fin des années 1780 (salaire ÷ prix × 100) et dites de combien il a baissé. (3) Expliquez qui profite de cette évolution et qui en souffre.",
              hint: "Un indice qui passe de 100 à 165 correspond à une hausse de 65 %. Pour le pouvoir d'achat, divisez l'indice des salaires par celui des prix.",
              solution: [
                "(1) Prix : de 100 à 165, soit une hausse de 65 %. Salaires : de 100 à 122, soit une hausse de 22 %.",
                "(2) Pouvoir d'achat : 122 ÷ 165 × 100 ≈ 73,9. Il baisse donc d'environ 26 % (100 - 73,9 = 26,1).",
                "(3) Ceux qui en souffrent : les salariés, journaliers agricoles et ouvriers des villes, dont les salaires suivent mal les prix ; ils consacrent une part croissante de leurs revenus au pain.",
                "Ceux qui en profitent : les propriétaires qui vendent leurs récoltes plus cher, et ceux qui perçoivent des redevances en nature (dîme, champart), dont la valeur augmente avec les prix ; les négociants profitent aussi de la croissance du commerce.",
                "Conclusion : la croissance du XVIIIe siècle enrichit surtout les possédants et appauvrit les plus modestes, ce qui alimente les tensions sociales de la fin de l'Ancien Régime.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Les mutations économiques du XVIIIe siècle : une prospérité pour tous ? ». Rédigez une introduction (contexte, définitions, problématique), un développement en deux parties avec deux arguments précis par partie, et une conclusion qui relie ces mutations à la société d'ordres.",
              hint: "Montrez d'abord la réalité de la croissance (population, commerce, manufactures, bourgeoisie), puis à qui elle profite et sur qui elle repose (esclaves, salariés, paysans).",
              solution: [
                "Introduction : au XVIIIe siècle, la France, royaume le plus peuplé d'Europe occidentale, connaît une croissance démographique et commerciale. Les mutations économiques désignent les transformations de l'agriculture, du commerce et de la production. Problématique : cette croissance enrichit-elle l'ensemble de la société, ou creuse-t-elle les inégalités ?",
                "I. Une croissance réelle. Argument 1 : la population passe d'environ 22 à environ 28 millions d'habitants, les grandes famines reculent ; le commerce extérieur est multiplié par quatre ou cinq, porté par Saint-Domingue et les ports atlantiques (Bordeaux, Nantes). Argument 2 : la production se diversifie (proto-industrie, manufactures comme celle d'Oberkampf en 1760, mines d'Anzin, Le Creusot) et la bourgeoisie du négoce et de la finance s'enrichit.",
                "II. Une prospérité très inégalement partagée. Argument 1 : elle repose sur la traite et l'esclavage : plus d'un million de captifs africains déportés par les navires français, Nantes armant plus de 40 % des expéditions. Argument 2 : en France même, selon Labrousse, les prix augmentent d'environ 65 % et les salaires d'environ 22 % : les salariés et les journaliers s'appauvrissent, alors que les propriétaires et les bénéficiaires des redevances profitent de la hausse.",
                "Conclusion : la croissance du XVIIIe siècle enrichit surtout une minorité de possédants, dont une bourgeoisie riche mais non privilégiée qui conteste de plus en plus la hiérarchie de la société d'ordres ; elle prépare ainsi les tensions de la fin de l'Ancien Régime.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'économie et la société françaises au XVIIIe siècle.",
            statements: [
              { text: "Au XVIIIe siècle, environ quatre Français sur cinq vivent à la campagne.", true: true, why: "Les paysans forment environ 80 % de la population : la France reste un pays rural." },
              { text: "Saint-Domingue est la première colonie sucrière du monde à la fin du XVIIIe siècle.", true: true, why: "Ses plantations, fondées sur le travail de centaines de milliers d'esclaves, produisent sucre, café et indigo." },
              { text: "Un noble qui pratique le commerce maritime en gros perd sa noblesse.", true: false, why: "Depuis un édit de 1669, ce commerce est permis aux nobles sans dérogeance ; le commerce de détail reste interdit." },
              { text: "La révolution industrielle commence en France au début du XVIIIe siècle.", true: false, why: "Elle commence en Grande-Bretagne, à la fin du XVIIIe siècle ; la France reste surtout artisanale." },
              { text: "Nantes est le premier port négrier français.", true: true, why: "Selon les estimations, Nantes a armé plus de 40 % des expéditions de traite françaises." },
              { text: "Les bourgeois enrichis rejettent tous le mode de vie de la noblesse.", true: false, why: "Beaucoup l'imitent : ils achètent terres, seigneuries et offices anoblissants." },
              { text: "Au XVIIIe siècle, les salaires augmentent plus vite que les prix.", true: false, why: "Selon Labrousse, les prix augmentent d'environ 65 % et les salaires d'environ 22 % : le pouvoir d'achat des salariés baisse." },
            ],
          },
          quiz: [
            {
              q: "Quel est le premier port négrier français au XVIIIe siècle ?",
              options: ["Marseille, tourné vers le Levant", "Brest, port de guerre", "Nantes", "Dunkerque"],
              answer: 2,
              why: "Nantes a armé plus de 40 % des expéditions de traite françaises, selon les estimations.",
            },
            {
              q: "Que désigne le commerce triangulaire ?",
              options: ["Le circuit Europe-Afrique-Amériques de la traite", "Un commerce entre la France, l'Espagne et le Portugal", "Les échanges entre trois foires de Champagne", "Le trafic des grains entre trois provinces"],
              answer: 0,
              why: "Les navires portent des marchandises en Afrique, des captifs aux Amériques, puis des produits coloniaux en Europe.",
            },
            {
              q: "Qu'est-ce que la proto-industrialisation ?",
              options: ["Les grandes usines mécanisées installées dans les villes anglaises", "Le luxe des manufactures royales", "L'extraction du charbon", "Un travail rural à domicile pour le compte d'un marchand"],
              answer: 3,
              why: "Des familles paysannes filent et tissent chez elles avec la matière première fournie par un marchand-fabricant.",
            },
            {
              q: "Que cherchent souvent les bourgeois enrichis ?",
              options: ["Renverser au plus vite la monarchie et l'Église", "Retourner travailler la terre", "S'anoblir, par exemple en achetant un office", "Entrer dans le clergé régulier"],
              answer: 2,
              why: "Beaucoup imitent la noblesse : terres, seigneuries, offices anoblissants, mariages avec des familles nobles.",
            },
            {
              q: "Selon Quesnay et les physiocrates, quelle est la seule véritable source de richesse ?",
              options: ["L'accumulation d'or et d'argent", "Le commerce colonial", "Les manufactures royales", "La terre"],
              answer: 3,
              why: "Pour les physiocrates, seule l'agriculture crée un surplus ; ils défendent aussi la liberté du commerce des grains.",
            },
          ],
          trap: "Présenter la prospérité du XVIIIe siècle sans dire sur quoi elle repose : la richesse des ports atlantiques est fondée sur la traite et l'esclavage. Autre erreur : croire que la bourgeoisie veut détruire la noblesse, alors que beaucoup de bourgeois cherchent d'abord à y entrer.",
          method: "Quand un sujet porte sur l'économie, suivez trois étapes : décrire la croissance avec des chiffres (population, commerce), dire qui en profite (bourgeoisie, propriétaires), puis dire qui en paie le prix (esclaves, salariés). Cette grille évite les réponses incomplètes ou trop optimistes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "contestations-ancien-regime",
          title: "Crispations et contestations à la fin de l'Ancien Régime",
          minutes: 35,
          objectives: [
            "Identifier les crispations des privilégiés face aux réformes à la fin de l'Ancien Régime.",
            "Expliquer la crise financière de la monarchie et l'échec des tentatives de réforme.",
            "Analyser les contestations de la société d'ordres dans les années 1770-1789.",
            "Expliquer la convocation des états généraux et les attentes exprimées en 1789.",
          ],
          course: [
            {
              heading: "Une monarchie absolue face aux privilèges",
              paragraphs: [
                "Louis XV (1715-1774) puis Louis XVI (1774-1792) règnent en monarques absolus, mais leur pouvoir se heurte aux privilèges des corps. Les parlements, cours de justice dont le plus important est celui de Paris, doivent enregistrer les édits royaux et peuvent présenter des remontrances. Composés de nobles de robe, ils s'opposent souvent aux réformes fiscales en se présentant comme les défenseurs de la nation et des lois fondamentales du royaume, tout en protégeant leurs propres privilèges.",
                "En 1749, le contrôleur général Machault crée le vingtième, un impôt qui doit frapper tous les revenus, y compris ceux des privilégiés ; le clergé obtient d'en être exempté dès 1751. En 1771, le chancelier Maupeou brise l'opposition des parlements en les remplaçant par de nouvelles cours ; mais en 1774, le jeune Louis XVI, soucieux de popularité, rappelle les anciens parlements, qui reprennent leur opposition.",
              ],
              box: { label: "Définition", text: "Parlement (sous l'Ancien Régime) : cour de justice souveraine, formée de magistrats propriétaires de leur charge, qui enregistre les lois du roi et peut présenter des remontrances. Ce n'est pas une assemblée élue, contrairement au Parlement anglais." },
            },
            {
              heading: "Des réformes bloquées par les privilégiés",
              paragraphs: [
                "Turgot, contrôleur général des finances de 1774 à 1776 et proche des physiocrates, établit la liberté du commerce des grains (1774) ; après une mauvaise récolte, la hausse du prix du pain provoque au printemps 1775 des émeutes appelées guerre des farines. En 1776, ses édits suppriment la corvée royale, remplacée par un impôt payé par tous les propriétaires, privilégiés compris, ainsi que les jurandes (corporations). Le parlement, la cour et les corps menacés s'y opposent : Turgot est renvoyé en mai 1776 et ses réformes sont abandonnées.",
                "Le banquier genevois Necker finance la participation de la France à la guerre d'indépendance américaine (1778-1783) par l'emprunt plutôt que par l'impôt. En 1781, il publie un Compte rendu au roi qui révèle au public une partie des dépenses de la cour ; il est renvoyé la même année. Au même moment, une partie de la noblesse se crispe sur ses privilèges : l'édit de Ségur (1781) exige quatre générations de noblesse pour accéder directement au grade d'officier, et des seigneurs font rechercher d'anciens droits oubliés pour les percevoir à nouveau. Les historiens parlent de réaction nobiliaire et seigneuriale.",
              ],
              box: { label: "Définition", text: "Réaction nobiliaire : durcissement d'une partie de la noblesse à la fin de l'Ancien Régime, qui cherche à se réserver certaines fonctions (édit de Ségur, 1781) et à mieux faire payer ses droits seigneuriaux. Elle exaspère bourgeois et paysans." },
            },
            {
              heading: "La crise financière et l'impasse de 1787-1788",
              paragraphs: [
                "La guerre d'Amérique a creusé une énorme dette : en 1788, le remboursement de la dette absorbe environ la moitié des dépenses de l'État. Le contrôleur général Calonne propose un impôt sur toutes les terres, sans distinction d'ordre, et réunit en février 1787 une assemblée des notables, choisis par le roi parmi les privilégiés ; elle refuse et Calonne est renvoyé. Son successeur, Loménie de Brienne, se heurte au parlement de Paris, qui déclare que seuls les états généraux peuvent consentir de nouveaux impôts.",
                "En 1788, la contestation gagne les provinces : à Grenoble, le 7 juin, les habitants défendent leurs magistrats contre les soldats du roi en leur lançant des tuiles depuis les toits (journée des Tuiles) ; en juillet, l'assemblée de Vizille réunit des représentants des trois ordres du Dauphiné, qui réclament les états généraux. En août 1788, le Trésor est à court d'argent : Louis XVI convoque les états généraux pour mai 1789 et rappelle Necker. En décembre 1788, il accorde le doublement du nombre de députés du tiers état, sans trancher la question du vote par ordre ou par tête.",
              ],
              box: { label: "Repère", text: "1771 : réforme Maupeou. 1774-1776 : ministère de Turgot. 1778-1783 : guerre d'Amérique. 1781 : Compte rendu de Necker ; édit de Ségur. Février 1787 : assemblée des notables. 7 juin 1788 : journée des Tuiles. Août 1788 : convocation des états généraux. 5 mai 1789 : ouverture à Versailles." },
            },
            {
              heading: "Une société qui conteste : opinion publique, pamphlets et doléances",
              paragraphs: [
                "Une opinion publique se forme dans les salons, les cafés, les académies et par les imprimés. Les pamphlets attaquent la cour et la reine Marie-Antoinette, compromise malgré elle dans l'affaire du Collier (1785-1786). Au théâtre, Le Mariage de Figaro de Beaumarchais (1784) triomphe : le valet Figaro y lance à son maître, le comte, « Vous vous êtes donné la peine de naître, et rien de plus », une critique directe du privilège de la naissance.",
                "La crise est aussi économique : la mauvaise récolte de 1788, frappée par la grêle, puis l'hiver très rude de 1788-1789 font monter le prix du pain, qui atteint un sommet en juillet 1789 ; le chômage touche les ouvriers du textile. Des émeutes éclatent, comme celle de la manufacture Réveillon à Paris, en avril 1789.",
                "En janvier 1789, l'abbé Sieyès publie le pamphlet Qu'est-ce que le tiers état ? : « Qu'est-ce que le tiers état ? Tout. Qu'a-t-il été jusqu'à présent dans l'ordre politique ? Rien. Que demande-t-il ? À y devenir quelque chose. » Au printemps 1789, chaque communauté et chaque ordre rédige des cahiers de doléances : ils réclament l'égalité devant l'impôt, la fin de certains droits seigneuriaux, des états généraux réguliers et une constitution, tout en exprimant le plus souvent leur attachement au roi. Les états généraux s'ouvrent à Versailles le 5 mai 1789.",
              ],
              box: { label: "Définition", text: "Cahiers de doléances : registres rédigés au printemps 1789 dans chaque paroisse, chaque ville et chaque ordre pour exprimer plaintes et voeux, remis aux députés des états généraux. États généraux : assemblée des députés des trois ordres, réunie par le roi, qui ne l'avait plus été depuis 1614." },
            },
          ],
          keyPoints: [
            "Les parlements, cours de justice de nobles de robe, bloquent les réformes fiscales qui menacent les privilèges.",
            "Turgot (1774-1776) veut supprimer la corvée royale et les corporations : il est renvoyé en 1776.",
            "Réaction nobiliaire : édit de Ségur (1781), remise en vigueur de droits seigneuriaux oubliés.",
            "Crise financière : la dette de la guerre d'Amérique ; en 1788, son remboursement absorbe environ la moitié des dépenses.",
            "1787-1788 : refus des notables, opposition des parlements, journée des Tuiles (7 juin 1788), convocation des états généraux.",
            "Contestation : Beaumarchais (1784), Sieyès (janvier 1789), cahiers de doléances ; ouverture des états généraux le 5 mai 1789.",
          ],
          example: {
            statement: "Expliquez pourquoi la monarchie ne parvient pas à réformer ses finances entre 1774 et 1788.",
            solution: [
              "Présenter le problème : les dépenses de l'État dépassent ses recettes, et la dette s'alourdit avec la guerre d'Amérique (1778-1783), financée par l'emprunt.",
              "Identifier la solution : faire payer aussi les privilégiés, exemptés de la taille et souvent d'une partie des autres impôts.",
              "Montrer le blocage sous Turgot : ses édits de 1776 (suppression de la corvée royale remplacée par un impôt sur tous les propriétaires, suppression des corporations) se heurtent au parlement et à la cour ; il est renvoyé.",
              "Montrer le blocage en 1787-1788 : l'assemblée des notables refuse l'impôt territorial de Calonne, puis le parlement de Paris exige les états généraux.",
              "Souligner la faiblesse du roi : Louis XVI renvoie ses ministres réformateurs et rappelle en 1774 les parlements supprimés par Maupeou.",
              "Conclure : la réforme échoue parce que les privilégiés défendent leurs exemptions et que le roi ne veut pas imposer sa volonté ; la crise aboutit à la convocation des états généraux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettez ces événements dans l'ordre chronologique et expliquez chacun en une phrase : la journée des Tuiles ; le renvoi de Turgot ; la publication de Qu'est-ce que le tiers état ? ; l'assemblée des notables ; le Compte rendu au roi de Necker ; l'ouverture des états généraux.",
              hint: "Les dates à retrouver sont 1776, 1781, 1787, 1788 et deux dates de 1789 (janvier et mai).",
              solution: [
                "1776 : renvoi de Turgot, dont les réformes (suppression de la corvée royale et des corporations) se heurtent aux privilégiés.",
                "1781 : Necker publie le Compte rendu au roi, qui révèle une partie des dépenses de la cour ; il est renvoyé.",
                "Février 1787 : l'assemblée des notables refuse l'impôt sur toutes les terres proposé par Calonne.",
                "7 juin 1788 : journée des Tuiles à Grenoble, révolte en faveur des magistrats contre le pouvoir royal.",
                "Janvier 1789 : Sieyès publie Qu'est-ce que le tiers état ?, qui réclame une place politique pour le tiers état.",
                "5 mai 1789 : ouverture des états généraux à Versailles.",
              ],
            },
            {
              level: 2,
              statement: "Documents. Document 1 : début du pamphlet de l'abbé Sieyès, Qu'est-ce que le tiers état ? (janvier 1789) : « Qu'est-ce que le tiers état ? Tout. Qu'a-t-il été jusqu'à présent dans l'ordre politique ? Rien. Que demande-t-il ? À y devenir quelque chose. » Document 2 : dans Le Mariage de Figaro de Beaumarchais (joué en 1784), le valet Figaro dit du comte, son maître : « Vous vous êtes donné la peine de naître, et rien de plus. » (1) Présentez les deux documents. (2) Expliquez ce que chacun critique. (3) Montrez ce qu'ils révèlent de l'état de la société d'ordres à la veille de la Révolution.",
              hint: "Pour Sieyès, demandez-vous pourquoi le tiers état est « tout » (qui travaille ? combien sont-ils ?) mais « rien » (quelle place aux états généraux ?). Pour Beaumarchais, pensez au fondement du privilège noble.",
              solution: [
                "(1) Le document 1 est un pamphlet politique de l'abbé Sieyès, vicaire général de l'évêque de Chartres, publié en janvier 1789, pendant la préparation des états généraux. Le document 2 est une réplique de théâtre tirée d'une comédie de Beaumarchais, jouée avec un immense succès en 1784.",
                "(2) Sieyès affirme que le tiers état, qui représente environ 98 % de la population et accomplit les travaux utiles, est « tout », mais qu'il n'a eu jusque-là aucun poids politique : aux états généraux, chaque ordre a une voix, et les privilégiés peuvent l'emporter à deux contre un. Il demande une vraie représentation (doublement des députés et vote par tête).",
                "Beaumarchais critique le privilège de la naissance : le comte doit sa position non à ses mérites, mais au seul fait d'être né noble.",
                "(3) Ces textes montrent que la hiérarchie fondée sur la naissance est contestée au nom du mérite, de l'utilité sociale et de la nation, idées diffusées par les Lumières. Le succès de la pièce, applaudie par une partie de la noblesse elle-même, et la large diffusion du pamphlet révèlent l'ampleur de cette contestation.",
                "Conclusion : à la veille de 1789, la société d'ordres a perdu une grande partie de sa légitimité aux yeux de l'opinion éclairée.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Pourquoi la société d'ordres est-elle de plus en plus contestée à la fin de l'Ancien Régime ? ». Rédigez une introduction, un développement en trois parties (les crispations des privilégiés ; la crise financière et politique ; la montée de la contestation) avec des exemples datés, et une conclusion.",
              hint: "Montrez que la contestation naît de la rencontre de plusieurs facteurs : blocage des réformes, crise des finances, crise économique, diffusion des idées nouvelles.",
              solution: [
                "Introduction : la société d'ordres repose sur l'inégalité des droits entre le clergé, la noblesse et le tiers état. À la fin du XVIIIe siècle, elle est de plus en plus critiquée. Problématique : quels facteurs expliquent que cette organisation sociale soit remise en cause entre les années 1770 et 1789 ?",
                "I. Des privilégiés crispés sur leurs privilèges. Les parlements bloquent les réformes fiscales (opposition aux édits de Turgot en 1776) ; la réaction nobiliaire ferme l'accès aux grades d'officier (édit de Ségur, 1781) et remet en vigueur d'anciens droits seigneuriaux.",
                "II. Une crise financière et politique. La dette de la guerre d'Amérique (1778-1783) absorbe environ la moitié des dépenses en 1788 ; l'assemblée des notables (1787) refuse l'impôt territorial ; la journée des Tuiles (7 juin 1788) et l'assemblée de Vizille montrent la contestation de l'autorité royale ; le roi convoque les états généraux en août 1788.",
                "III. La montée de la contestation. Les idées des Lumières (mérite, égalité, souveraineté de la nation) se diffusent ; Beaumarchais (1784) se moque du privilège de la naissance ; Sieyès (janvier 1789) affirme que le tiers état est « tout » ; la crise économique de 1788-1789 (mauvaise récolte, pain cher) mobilise le peuple ; les cahiers de doléances réclament l'égalité devant l'impôt.",
                "Conclusion : la société d'ordres est contestée parce que les privilégiés refusent de partager la charge fiscale au moment où l'État est en faillite et où les idées nouvelles rendent l'inégalité de naissance insupportable ; ces tensions éclatent lors des états généraux, ouverts le 5 mai 1789.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la crise de l'Ancien Régime.",
            items: [
              "Réforme de Maupeou contre les parlements (1771)",
              "Renvoi de Turgot et abandon de ses édits (1776)",
              "Compte rendu au roi publié par Necker (1781)",
              "Réunion de l'assemblée des notables (1787)",
              "Journée des Tuiles à Grenoble (juin 1788)",
              "Publication de Qu'est-ce que le tiers état ? (janvier 1789)",
              "Ouverture des états généraux à Versailles (5 mai 1789)",
            ],
          },
          quiz: [
            {
              q: "Quel contrôleur général tente en 1776 de supprimer la corvée royale et les corporations ?",
              options: ["Colbert", "Necker", "Calonne", "Turgot"],
              answer: 3,
              why: "Turgot, proche des physiocrates, voit ses édits de 1776 combattus par les privilégiés ; il est renvoyé la même année.",
            },
            {
              q: "Que dénonce Beaumarchais dans Le Mariage de Figaro (1784) ?",
              options: ["Le privilège de la naissance", "La gravitation universelle", "La traite atlantique", "Le pouvoir du pape sur les rois"],
              answer: 0,
              why: "Figaro reproche au comte de ne s'être « donné la peine » que de naître : sa position ne doit rien à son mérite.",
            },
            {
              q: "Pourquoi les privilégiés s'opposent-ils aux réformes fiscales ?",
              options: ["Parce qu'elles augmentent la taille des paysans", "Parce qu'elles menacent leurs exemptions", "Parce qu'elles suppriment la monarchie", "Parce qu'elles interdisent le commerce maritime"],
              answer: 1,
              why: "Les réformes de Turgot ou de Calonne voulaient faire payer aussi les privilégiés, exemptés de la taille.",
            },
            {
              q: "Que réclame Sieyès pour le tiers état en janvier 1789 ?",
              options: ["La suppression immédiate de la monarchie et du roi", "Le retour à une monarchie plus absolue", "Une place réelle dans l'ordre politique", "L'exemption de dîme pour les curés"],
              answer: 2,
              why: "Le tiers état, qui est « tout », n'a été « rien » dans l'ordre politique : Sieyès demande qu'il y devienne « quelque chose ».",
            },
            {
              q: "Que sont les cahiers de doléances ?",
              options: ["Des registres paroissiaux de baptêmes", "Des recueils de plaintes et de voeux de 1789", "Les livres de comptes tenus par la Ferme générale", "Des journaux interdits par la censure"],
              answer: 1,
              why: "Rédigés au printemps 1789 dans chaque communauté et chaque ordre, ils expriment plaintes et revendications adressées au roi.",
            },
          ],
          trap: "Confondre les parlements d'Ancien Régime, cours de justice de magistrats nobles, avec un parlement élu : leur opposition au roi défend souvent leurs privilèges, pas le peuple. Autre erreur : croire que les cahiers de doléances réclament la fin de la monarchie, alors qu'ils expriment surtout l'attachement au roi.",
          method: "Pour expliquer la crise de la fin de l'Ancien Régime, classez les causes en quatre familles (financières, politiques, sociales, intellectuelles) et attachez à chacune un exemple daté. Dans une copie, montrez ensuite comment ces causes se combinent en 1787-1789.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'AFRIQUE AUSTRALE : UN ESPACE EN PROFONDE MUTATION                   */
    /* ==================================================================== */
    {
      id: 'afrique-australe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "afrique-australe-milieux",
          title: "Des milieux à valoriser et à ménager",
          minutes: 30,
          objectives: [
            "Localiser l'Afrique australe et décrire la diversité de ses milieux.",
            "Identifier les ressources (minerais, eau, biodiversité, terres) et leur mise en valeur.",
            "Expliquer les tensions entre exploitation des ressources et protection des milieux.",
            "Analyser les effets du changement climatique et les réponses des sociétés.",
          ],
          course: [
            {
              heading: "Un espace aux contours variables",
              paragraphs: [
                "L'Afrique australe désigne la partie méridionale du continent africain. Ses limites varient selon les auteurs : au sens strict, elle comprend l'Afrique du Sud, la Namibie, le Botswana, le Zimbabwe, le Mozambique, le Lesotho et l'Eswatini ; au sens large, on y ajoute l'Angola, la Zambie, le Malawi et Madagascar. L'Afrique du Sud, avec environ 62 millions d'habitants au recensement de 2022, en est la première puissance économique.",
                "Les États de la région coopèrent au sein de la Communauté de développement de l'Afrique australe (SADC), créée en 1992 et dont le siège est à Gaborone, au Botswana. Elle réunit seize États, bien au-delà de l'Afrique australe au sens strict, de la Tanzanie et de la République démocratique du Congo jusqu'aux îles Maurice et Seychelles. Plus ancienne encore, l'Union douanière d'Afrique australe (SACU), fondée en 1910, associe l'Afrique du Sud, le Botswana, le Lesotho, la Namibie et l'Eswatini.",
              ],
              box: { label: "Repère", text: "SADC : Communauté de développement de l'Afrique australe, créée en 1992, seize États membres, siège à Gaborone. SACU : Union douanière d'Afrique australe, fondée en 1910, souvent présentée comme la plus ancienne union douanière du monde." },
            },
            {
              heading: "Des milieux très diversifiés",
              paragraphs: [
                "Le relief est dominé par de hauts plateaux, comme le Highveld sud-africain, bordés par un Grand Escarpement qui domine des plaines côtières étroites. Le massif du Drakensberg culmine à 3 482 m au Thabana Ntlenyana, au Lesotho. Les grands fleuves sont le Zambèze, qui forme les chutes Victoria entre la Zambie et le Zimbabwe, le Limpopo et l'Orange. L'Okavango, lui, n'atteint jamais la mer : il se perd dans le Kalahari en formant un vaste delta intérieur au Botswana, inscrit au patrimoine mondial de l'Unesco en 2014.",
                "Les climats sont contrastés. Le nord est tropical, avec une saison des pluies et des savanes ou des forêts claires. L'ouest est aride : le désert du Namib longe la côte atlantique, refroidie par le courant de Benguela, et le Kalahari est un semi-désert. La région du Cap a un climat de type méditerranéen, avec des hivers pluvieux, et la côte de l'océan Indien est chaude et humide. La biodiversité est exceptionnelle : flore unique de la région du Cap (le fynbos), grande faune des savanes. Le Botswana abrite la plus grande population d'éléphants du monde, et l'Afrique du Sud la majorité des rhinocéros de la planète.",
              ],
            },
            {
              heading: "Des ressources abondantes et convoitées",
              paragraphs: [
                "Le sous-sol est l'un des plus riches du monde. L'Afrique du Sud exploite l'or du Witwatersrand, découvert en 1886, à l'origine de Johannesburg ; elle fournit environ 70 % du platine mondial et produit beaucoup de charbon, de chrome et de manganèse. Les diamants ont fait la fortune de Kimberley à partir de 1867-1871, puis du Botswana, l'un des premiers producteurs mondiaux en valeur. La Zambie exploite le cuivre du Copperbelt, la Namibie l'uranium, l'Angola le pétrole. Beaucoup d'économies dépendent de l'exportation de ces matières premières : ce sont des économies de rente, vulnérables aux variations des cours.",
                "L'eau est inégalement répartie. De grands barrages produisent de l'hydroélectricité : Kariba, sur le Zambèze, achevé en 1959 entre la Zambie et le Zimbabwe, et Cahora Bassa, au Mozambique, achevé en 1974. Le projet hydraulique des hautes terres du Lesotho transfère, depuis la fin des années 1990, l'eau des montagnes du Lesotho vers la région industrielle du Gauteng, en Afrique du Sud. Les terres agricoles sont partagées entre de grandes exploitations commerciales (maïs, agrumes, vignobles du Cap) et une agriculture familiale souvent vivrière.",
              ],
              box: { label: "Définition", text: "Ressource : élément du milieu que les sociétés savent exploiter et jugent utile à un moment donné. Économie de rente : économie qui dépend largement de l'exportation d'une ou de quelques ressources brutes (minerais, hydrocarbures), sans les transformer sur place." },
            },
            {
              heading: "Valoriser sans détruire : protéger les milieux",
              paragraphs: [
                "Les aires protégées sont nombreuses. Le parc national Kruger, en Afrique du Sud, est créé en 1926. Des parcs transfrontaliers associent plusieurs États pour protéger les grands animaux qui ignorent les frontières : le parc du Grand Limpopo (2002) relie l'Afrique du Sud, le Mozambique et le Zimbabwe ; l'aire de conservation transfrontalière du Kavango-Zambèze (KAZA, traité de 2011) réunit l'Angola, le Botswana, la Namibie, la Zambie et le Zimbabwe. Ces espaces attirent un tourisme de safari qui crée des emplois.",
                "Mais la protection suscite des conflits : braconnage des rhinocéros pour leur corne, éléphants qui détruisent les cultures, populations parfois déplacées lors de la création des parcs. Pour associer les habitants, la Namibie permet depuis 1996 aux communautés rurales de créer des zones de conservation dont elles tirent des revenus. L'exploitation minière laisse aussi des traces : eaux acides issues des anciennes mines du Witwatersrand, paysages bouleversés. Le charbon, qui fournit environ 80 % de l'électricité sud-africaine, pollue l'air et fait de l'Afrique du Sud un grand émetteur de gaz à effet de serre ; en 2021, un partenariat international de 8,5 milliards de dollars a été annoncé pour l'aider à en sortir.",
              ],
              box: { label: "Définition", text: "Valoriser un milieu : en tirer des ressources et des richesses (mines, agriculture, tourisme). Ménager un milieu : l'exploiter avec mesure pour le préserver et le transmettre (aires protégées, gestion de l'eau, réduction des pollutions)." },
            },
            {
              heading: "Des milieux fragilisés par le changement climatique",
              paragraphs: [
                "L'Afrique australe est très exposée au changement climatique. Les sécheresses se multiplient : après trois années de faibles pluies, la ville du Cap impose en février 2018 une limite de 50 litres d'eau par personne et par jour pour éviter le « jour zéro », où les robinets auraient été coupés ; les économies d'eau et le retour des pluies permettent de l'éviter. En 2024, une grave sécheresse conduit la Zambie, le Zimbabwe et le Malawi à déclarer l'état de catastrophe nationale ; la baisse du lac de Kariba provoque d'importantes coupures d'électricité.",
                "La côte du Mozambique est frappée par des cyclones : en mars 2019, le cyclone Idai dévaste la région de Beira et fait plus de 1 000 morts au Mozambique, au Zimbabwe et au Malawi. Les sociétés s'adaptent : économies d'eau, dessalement, irrigation plus efficace, systèmes d'alerte, essor des énergies solaire et éolienne (programme sud-africain lancé en 2011), coopération régionale, par exemple au sein du réseau électrique commun d'Afrique australe (1995). Les populations pauvres, rurales ou installées dans des quartiers informels, restent les plus vulnérables.",
              ],
              box: { label: "À retenir", text: "Des milieux variés (déserts, savanes, climat méditerranéen du Cap, montagnes), riches en ressources (or, platine, diamants, cuivre, eau, faune), valorisés par les mines, l'agriculture et le tourisme, mais fragilisés par les pollutions, le braconnage et le changement climatique." },
            },
          ],
          keyPoints: [
            "Afrique australe : un espace aux limites variables ; la SADC (1992) réunit seize États ; l'Afrique du Sud domine.",
            "Milieux variés : plateaux, Drakensberg, déserts du Namib et du Kalahari, savanes, climat méditerranéen au Cap, delta de l'Okavango.",
            "Ressources : or (1886), platine (environ 70 % du monde), diamants, cuivre, uranium ; des économies de rente.",
            "Eau : barrages de Kariba et de Cahora Bassa, transfert d'eau du Lesotho vers le Gauteng.",
            "Protéger : parc Kruger (1926), parcs transfrontaliers (Grand Limpopo, KAZA) ; conflits liés au braconnage et à la faune.",
            "Changement climatique : sécheresses (Le Cap 2018, 2024), cyclones (Idai, 2019) ; adaptation et énergies renouvelables.",
          ],
          example: {
            statement: "Expliquez pourquoi la ville du Cap a été menacée d'un « jour zéro » en 2018 et comment elle y a fait face.",
            solution: [
              "Localiser : Le Cap, deuxième ville d'Afrique du Sud, est située à la pointe sud-ouest du pays, dans une région au climat méditerranéen où les pluies tombent en hiver.",
              "Expliquer l'aléa : de 2015 à 2018, trois années de pluies très faibles vident les réservoirs qui alimentent la ville.",
              "Expliquer la vulnérabilité : la population urbaine a fortement augmenté, la ville dépend presque entièrement des barrages alimentés par la pluie, et le changement climatique rend les sécheresses plus probables.",
              "Définir le « jour zéro » : le jour où les réserves seraient tombées si bas que l'eau du robinet aurait été coupée pour la plupart des habitants.",
              "Présenter les réponses : en février 2018, limitation à 50 litres d'eau par personne et par jour, hausse des tarifs, campagnes d'information, réduction des fuites, recherche de nouvelles ressources (nappes souterraines, dessalement).",
              "Conclure : grâce aux économies d'eau et au retour des pluies, le jour zéro est évité ; l'épisode montre la nécessité de ménager une ressource vitale dans un milieu fragile.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque lieu à sa description : (a) le Namib ; (b) l'Okavango ; (c) le Drakensberg ; (d) le Witwatersrand ; (e) Kariba ; (f) le parc Kruger. Descriptions : un massif montagneux qui culmine à 3 482 m ; un parc national sud-africain créé en 1926 ; un désert côtier longé par un courant froid ; un barrage sur le Zambèze ; une région aurifère à l'origine de Johannesburg ; un delta intérieur qui se perd dans le Kalahari.",
              hint: "Commencez par les noms que vous situez le mieux sur une carte, puis procédez par élimination.",
              solution: [
                "(a) Le Namib : un désert côtier longé par un courant froid (le courant de Benguela).",
                "(b) L'Okavango : un delta intérieur qui se perd dans le Kalahari, au Botswana.",
                "(c) Le Drakensberg : un massif montagneux qui culmine à 3 482 m (Thabana Ntlenyana, au Lesotho).",
                "(d) Le Witwatersrand : une région aurifère, découverte en 1886, à l'origine de Johannesburg.",
                "(e) Kariba : un barrage sur le Zambèze, achevé en 1959 entre la Zambie et le Zimbabwe.",
                "(f) Le parc Kruger : un parc national sud-africain créé en 1926.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives simplifiées. Une ville de 4 millions d'habitants dispose de 100 millions de m³ d'eau dans ses réservoirs, sans pluie prévue. (1) Si chaque habitant consomme 200 litres par jour, combien de jours les réserves dureront-elles ? (2) Même question avec une limite de 50 litres par personne et par jour. (3) Par combien la durée est-elle multipliée ? (4) Indiquez deux limites de ce calcul et deux autres mesures possibles pour ménager la ressource.",
              hint: "Convertissez les litres en m³ (1 m³ = 1 000 litres), calculez la consommation totale par jour, puis divisez la réserve par cette consommation.",
              solution: [
                "(1) 200 litres = 0,2 m³. Consommation quotidienne : 4 000 000 × 0,2 = 800 000 m³. Durée : 100 000 000 ÷ 800 000 = 125 jours.",
                "(2) 50 litres = 0,05 m³. Consommation quotidienne : 4 000 000 × 0,05 = 200 000 m³. Durée : 100 000 000 ÷ 200 000 = 500 jours.",
                "(3) 500 ÷ 125 = 4 : la durée est multipliée par quatre, puisque la consommation est divisée par quatre.",
                "(4) Limites : le calcul oublie la consommation des entreprises, de l'agriculture et des services publics, ainsi que l'évaporation et les fuites ; il suppose aussi que tous les habitants respectent la limite.",
                "Autres mesures : réparer les fuites du réseau, recycler les eaux usées, exploiter les nappes souterraines, construire une usine de dessalement, faire payer plus cher les gros consommateurs.",
                "Conclusion : réduire la consommation permet de gagner du temps, mais ménager durablement l'eau suppose de combiner plusieurs mesures.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Les ressources de l'Afrique australe : une chance ou une menace pour ses milieux et ses sociétés ? ». Rédigez une introduction, un développement en deux parties avec deux arguments précis par partie, et une conclusion.",
              hint: "Opposez ce que les ressources apportent (revenus, énergie, tourisme) à ce qu'elles coûtent (pollutions, dépendance, conflits d'usage), puis montrez les efforts pour ménager les milieux. Citez des lieux et des dates.",
              solution: [
                "Introduction : l'Afrique australe, de l'Afrique du Sud au Zimbabwe et au Mozambique, possède des milieux variés et un sous-sol parmi les plus riches du monde. Une ressource est un élément du milieu que les sociétés exploitent. Problématique : l'exploitation de ces ressources permet-elle le développement, ou met-elle en danger les milieux et les sociétés ?",
                "I. Des ressources qui sont une chance. Argument 1 : les minerais (or du Witwatersrand depuis 1886, platine dont l'Afrique du Sud fournit environ 70 % du monde, diamants du Botswana, cuivre de Zambie) apportent des revenus ; le Botswana a investi ceux des diamants dans l'éducation et les infrastructures. Argument 2 : l'eau (barrages de Kariba et de Cahora Bassa, transfert depuis le Lesotho) et la biodiversité (parc Kruger, Okavango) fournissent énergie et revenus touristiques.",
                "II. Des ressources qui menacent milieux et sociétés, d'où la nécessité de les ménager. Argument 1 : pollutions minières, électricité tirée à environ 80 % du charbon en Afrique du Sud, braconnage et conflits entre habitants et faune ; dépendance des économies de rente aux cours mondiaux. Argument 2 : le changement climatique aggrave la pression sur l'eau (Le Cap en 2018, sécheresse de 2024) ; d'où les parcs transfrontaliers (KAZA, 2011), les zones de conservation communautaires de Namibie et le développement des énergies renouvelables.",
                "Conclusion : les ressources sont une chance à condition d'être gérées durablement et équitablement ; l'enjeu pour l'Afrique australe est de valoriser ses milieux tout en les ménageant, face au défi climatique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les milieux et les ressources de l'Afrique australe.",
            statements: [
              { text: "L'Afrique australe est presque entièrement désertique.", true: false, why: "Elle juxtapose déserts (Namib, Kalahari), savanes tropicales, montagnes et climat méditerranéen au Cap." },
              { text: "La région du Cap a un climat de type méditerranéen.", true: true, why: "Les pluies y tombent surtout en hiver, comme sur les rives de la Méditerranée." },
              { text: "L'Okavango se jette dans l'océan Indien.", true: false, why: "C'est un fleuve sans débouché sur la mer : il forme un delta intérieur qui se perd dans le Kalahari." },
              { text: "L'Afrique du Sud fournit environ 70 % du platine mondial.", true: true, why: "Elle est de loin le premier producteur mondial de platine." },
              { text: "Les parcs transfrontaliers associent plusieurs États pour protéger la faune.", true: true, why: "Le Grand Limpopo (2002) ou la KAZA (2011) protègent des animaux qui circulent d'un pays à l'autre." },
              { text: "Le changement climatique épargne l'Afrique australe.", true: false, why: "Sécheresses (Le Cap en 2018, 2024) et cyclones (Idai en 2019) montrent au contraire sa forte exposition." },
              { text: "L'Afrique du Sud produit la majeure partie de son électricité à partir du charbon.", true: true, why: "Le charbon fournit environ 80 % de son électricité, ce qui en fait un grand émetteur de gaz à effet de serre." },
            ],
          },
          quiz: [
            {
              q: "Quel désert borde la côte atlantique de la Namibie ?",
              options: ["Le Sahara", "Le Kalahari", "Le Namib", "Le désert de Gobi"],
              answer: 2,
              why: "Le Namib est un désert côtier, rendu très sec par le courant froid de Benguela ; le Kalahari est un semi-désert intérieur.",
            },
            {
              q: "Quelle ressource fait la richesse du Botswana ?",
              options: ["Le pétrole offshore", "Les diamants", "Le cacao", "Le cuivre du Copperbelt"],
              answer: 1,
              why: "Le Botswana est l'un des premiers producteurs mondiaux de diamants en valeur ; le cuivre du Copperbelt est zambien.",
            },
            {
              q: "Qu'est-ce que la KAZA ?",
              options: ["Une aire protégée commune à cinq États", "Un grand barrage hydroélectrique sur le Zambèze", "Une mine d'or du Witwatersrand", "L'union douanière fondée en 1910"],
              answer: 0,
              why: "L'aire de conservation transfrontalière du Kavango-Zambèze (2011) associe l'Angola, le Botswana, la Namibie, la Zambie et le Zimbabwe.",
            },
            {
              q: "Quelle mesure Le Cap a-t-il imposée en février 2018 face à la sécheresse ?",
              options: ["La fermeture de son port", "L'interdiction de tout tourisme", "L'évacuation complète de la ville vers l'intérieur", "50 litres d'eau par personne et par jour"],
              answer: 3,
              why: "La limitation de la consommation à 50 litres par personne et par jour a permis d'éviter le « jour zéro ».",
            },
            {
              q: "Quel cyclone a dévasté la région de Beira, au Mozambique, en mars 2019 ?",
              options: ["Katrina", "Idai", "Xynthia", "Haiyan"],
              answer: 1,
              why: "Le cyclone Idai a fait plus de 1 000 morts au Mozambique, au Zimbabwe et au Malawi.",
            },
          ],
          trap: "Réduire l'Afrique australe à un espace désertique ou, à l'inverse, à une réserve de faune sauvage : ses milieux sont très variés et intensément mis en valeur. Autre erreur : présenter les ressources comme une richesse automatique, en oubliant la dépendance aux cours mondiaux et les dégâts environnementaux.",
          method: "Pour un sujet sur les milieux, suivez toujours le triptyque du programme : décrire les milieux (relief, climats, biodiversité), montrer comment ils sont valorisés (ressources et activités), puis comment ils sont ménagés (protection, adaptation). Associez à chaque étape un lieu précis.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "afrique-australe-developpement",
          title: "Les défis de la transition et du développement",
          minutes: 30,
          objectives: [
            "Mesurer les inégalités de développement entre les États d'Afrique australe et à l'intérieur de chacun.",
            "Expliquer l'héritage de l'apartheid et les défis de l'Afrique du Sud depuis 1994.",
            "Caractériser les transitions démographique, urbaine et énergétique en cours.",
            "Identifier les stratégies de développement et d'intégration régionale.",
          ],
          course: [
            {
              heading: "Des États inégalement développés",
              paragraphs: [
                "Le développement désigne l'amélioration des conditions de vie d'une population (santé, éducation, revenus, libertés). On le mesure notamment par l'indice de développement humain (IDH), calculé par le Programme des Nations unies pour le développement (PNUD) à partir de l'espérance de vie, de la durée de scolarisation et du revenu par habitant. L'Afrique australe juxtapose des États au développement très différent : l'Afrique du Sud et le Botswana ont un IDH élevé, le Zimbabwe un IDH moyen, tandis que le Mozambique et le Malawi ont un IDH faible et comptent parmi les pays les moins développés du monde.",
                "L'Afrique du Sud est la première économie de la région et l'une des premières d'Afrique : elle est membre du G20 et a rejoint en 2010 le groupe des BRICS, aux côtés du Brésil, de la Russie, de l'Inde et de la Chine. Son coeur économique est le Gauteng, autour de Johannesburg et de Pretoria, avec la Bourse de Johannesburg, les sièges des grandes entreprises et les mines. Le Botswana fait figure de réussite : très pauvre à son indépendance en 1966, il est devenu un pays à revenu intermédiaire en investissant les revenus des diamants dans l'éducation, la santé et les infrastructures.",
              ],
              box: { label: "Définition", text: "IDH (indice de développement humain) : indicateur du PNUD compris entre 0 et 1, qui combine l'espérance de vie à la naissance, la durée de scolarisation et le revenu par habitant. Il permet de comparer le développement des États au-delà de la seule richesse produite." },
            },
            {
              heading: "L'Afrique du Sud, une nation encore marquée par l'apartheid",
              paragraphs: [
                "Dès 1913, une loi foncière réserve à la population noire environ 7 % des terres du pays. À partir de 1948, le Parti national au pouvoir organise l'apartheid, une ségrégation raciale légale : la population est classée par « race » (1950), les quartiers sont séparés, et des bantoustans sont créés pour y cantonner la population noire, privée de ses droits politiques. Les Noirs des villes sont relégués dans des townships, comme Soweto près de Johannesburg. Le Congrès national africain (ANC) lutte contre ce régime ; son dirigeant Nelson Mandela, condamné à la prison à vie en 1964, est libéré en 1990. Les lois de l'apartheid sont abolies en 1991, et les premières élections multiraciales, le 27 avril 1994, portent Mandela à la présidence.",
                "Depuis 1994, des progrès réels ont été accomplis : construction de millions de logements sociaux, extension de l'accès à l'eau et à l'électricité, aides sociales, émergence d'une classe moyenne noire favorisée par une politique de discrimination positive (Black Economic Empowerment). Mais les inégalités restent parmi les plus fortes du monde selon la Banque mondiale ; le chômage touche environ un tiers de la population active au milieu des années 2020, et bien davantage les jeunes. La ségrégation spatiale héritée de l'apartheid persiste : townships et quartiers informels font face à des quartiers riches protégés. Les délestages, coupures d'électricité programmées par la compagnie publique Eskom, ont culminé en 2023.",
              ],
              box: { label: "Repère", text: "1913 : loi foncière qui réserve environ 7 % des terres aux Noirs. 1948 : début de l'apartheid. 1964 : Mandela condamné à la prison à vie. 1990 : libération de Mandela. 1991 : abolition des lois de l'apartheid. 27 avril 1994 : premières élections multiraciales, Mandela président. 2010 : l'Afrique du Sud rejoint les BRICS." },
            },
            {
              heading: "Des transitions démographique et urbaine rapides",
              paragraphs: [
                "Les pays d'Afrique australe sont à des stades différents de la transition démographique. La fécondité a fortement baissé en Afrique du Sud (environ deux à trois enfants par femme) et plus encore à Maurice (moins de deux), alors qu'elle dépasse encore quatre enfants par femme en Angola ou au Mozambique, dont la population est très jeune et croît rapidement. L'Afrique australe est aussi la région du monde la plus touchée par le VIH : en Eswatini, environ un adulte sur quatre vit avec le virus. Depuis les années 2000, la diffusion des traitements antirétroviraux a permis de faire remonter l'espérance de vie.",
                "L'urbanisation progresse vite. Environ deux tiers des Sud-Africains vivent en ville, contre moins d'un habitant sur cinq au Malawi. Le Gauteng compte environ 15 millions d'habitants au recensement de 2022. Les villes grandissent souvent par des quartiers informels, construits sans autorisation et mal équipés, et par un étalement périphérique ; les besoins en logements, en emplois, en transports et en services sont immenses.",
              ],
              box: { label: "Définition", text: "Transition démographique : passage d'un régime de natalité et de mortalité élevées à un régime où les deux sont faibles ; pendant la transition, la mortalité baisse avant la natalité, et la population augmente fortement." },
            },
            {
              heading: "Transition énergétique et diversification économique",
              paragraphs: [
                "L'Afrique du Sud tire environ 80 % de son électricité du charbon. Elle développe l'éolien et le solaire depuis le lancement en 2011 d'un programme d'appels d'offres pour les énergies renouvelables, et a obtenu en 2021 un partenariat international pour une transition énergétique juste, qui doit financer la sortie du charbon sans sacrifier les régions minières. D'autres pays misent sur l'hydroélectricité (Mozambique, Zambie) ou sur l'hydrogène produit à partir d'énergies renouvelables (projets en Namibie). Mais au Malawi ou au Mozambique, une grande partie de la population n'a toujours pas accès à l'électricité.",
                "Beaucoup d'États restent des économies de rente : le cuivre fournit l'essentiel des exportations de la Zambie, le pétrole celles de l'Angola, les diamants celles du Botswana. Diversifier l'économie (industrie, services, agriculture transformée) est un défi majeur. Les trajectoires divergent : le Zimbabwe a connu une crise profonde après la réforme agraire brutale lancée en 2000 et une hyperinflation record en 2008 ; la Zambie a fait défaut sur sa dette en 2020. La Chine est devenue un partenaire important, qui finance des infrastructures et investit dans les mines.",
              ],
            },
            {
              heading: "Des stratégies d'intégration régionale",
              paragraphs: [
                "Les États cherchent à se développer ensemble. La SADC a lancé une zone de libre-échange en 2008, et la zone de libre-échange continentale africaine (ZLECAf) est entrée en vigueur en 2019. Les pays enclavés dépendent des ports de leurs voisins : des corridors de développement relient l'intérieur aux littoraux, comme le corridor de Maputo entre le Gauteng et le port mozambicain, ou le corridor de Lobito, soutenu depuis 2023 par les États-Unis et l'Union européenne, entre la Zambie, la RDC et l'Angola. Le réseau électrique commun d'Afrique australe, créé en 1995, permet d'échanger de l'électricité entre États.",
                "Ces stratégies se heurtent à des obstacles : poids écrasant de l'Afrique du Sud, infrastructures insuffisantes, corruption, endettement, instabilité politique dans certains États. Le développement de l'Afrique australe dépend de sa capacité à transformer ses ressources sur place, à réduire les inégalités et à s'adapter au changement climatique.",
              ],
              box: { label: "À retenir", text: "Des États inégalement développés (IDH élevé en Afrique du Sud et au Botswana, faible au Mozambique et au Malawi), une Afrique du Sud émergente mais très inégalitaire, des transitions démographique, urbaine et énergétique rapides, des économies de rente à diversifier et une intégration régionale en construction." },
            },
          ],
          keyPoints: [
            "IDH : élevé en Afrique du Sud et au Botswana, moyen au Zimbabwe, faible au Mozambique et au Malawi.",
            "Apartheid (1948-1991) : ségrégation raciale légale, bantoustans, townships ; élections multiraciales le 27 avril 1994.",
            "Afrique du Sud : puissance émergente (G20, BRICS), mais inégalités parmi les plus fortes du monde et chômage d'environ un tiers des actifs.",
            "Transitions : fécondité en baisse inégale, VIH, urbanisation rapide (environ deux tiers de citadins en Afrique du Sud).",
            "Énergie : charbon dominant en Afrique du Sud, essor des renouvelables ; économies de rente à diversifier.",
            "Intégration : SADC, ZLECAf, corridors de développement (Maputo, Lobito), réseau électrique commun.",
          ],
          example: {
            statement: "Montrez que l'Afrique du Sud est un pays émergent marqué par de fortes inégalités.",
            solution: [
              "Définir le pays émergent : un pays en forte croissance, qui s'intègre à la mondialisation et s'affirme sur la scène internationale, sans avoir le niveau de développement des pays riches.",
              "Montrer l'émergence : première économie d'Afrique australe, membre du G20 et des BRICS depuis 2010, avec un coeur économique puissant, le Gauteng (Bourse de Johannesburg, sièges d'entreprises, mines).",
              "Montrer les progrès depuis 1994 : logements sociaux, accès à l'eau et à l'électricité, aides sociales, émergence d'une classe moyenne noire.",
              "Montrer les inégalités : des inégalités de revenus parmi les plus fortes du monde, un chômage d'environ un tiers des actifs, une ségrégation spatiale héritée de l'apartheid (townships, quartiers informels).",
              "Ajouter les fragilités : délestages électriques qui ont culminé en 2023, dépendance au charbon et aux exportations minières.",
              "Conclure : l'Afrique du Sud est une puissance régionale émergente, mais l'héritage de l'apartheid et le chômage freinent un développement partagé par tous.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants : (a) apartheid ; (b) bantoustan ; (c) township ; (d) IDH ; (e) économie de rente ; (f) corridor de développement.",
              hint: "Pour les trois premiers termes, pensez à l'Afrique du Sud entre 1948 et 1991 ; pour les trois derniers, au vocabulaire du développement.",
              solution: [
                "(a) Apartheid : politique de ségrégation raciale légale menée en Afrique du Sud de 1948 à 1991.",
                "(b) Bantoustan : territoire créé sous l'apartheid pour y cantonner la population noire, privée de ses droits politiques en Afrique du Sud.",
                "(c) Township : quartier périphérique créé pour loger la population noire à l'écart des villes blanches, comme Soweto.",
                "(d) IDH : indicateur du PNUD qui combine espérance de vie, durée de scolarisation et revenu par habitant.",
                "(e) Économie de rente : économie qui dépend de l'exportation d'une ou de quelques ressources brutes, comme le cuivre en Zambie.",
                "(f) Corridor de développement : axe de transport multimodal qui relie l'intérieur d'un territoire à un port et autour duquel on cherche à développer des activités, comme le corridor de Maputo.",
              ],
            },
            {
              level: 2,
              statement: "Document : discours d'investiture de Nelson Mandela, président de la République d'Afrique du Sud, prononcé à Pretoria le 10 mai 1994. Résumé (et non citation) : Mandela salue la fin d'une longue période de souffrance et d'oppression ; il appelle les Sud-Africains noirs et blancs à construire ensemble une société où chacun pourra vivre dans la dignité et sans peur, une « nation arc-en-ciel en paix avec elle-même et avec le monde » ; il s'engage à lutter contre la pauvreté, les privations et les discriminations, et affirme que jamais plus ce pays ne connaîtra l'oppression des uns par les autres. (1) Présentez le document. (2) Relevez les objectifs fixés par Mandela. (3) À l'aide du cours, montrez que certains objectifs ont été atteints et d'autres non, trente ans plus tard.",
              hint: "Rappelez ce qu'était l'apartheid et ce que représente l'élection de 1994. Pour le bilan, classez vos arguments en deux colonnes : progrès accomplis et défis persistants.",
              solution: [
                "(1) C'est le discours prononcé par Nelson Mandela le jour de son investiture comme président, le 10 mai 1994, à Pretoria. Ancien dirigeant de l'ANC, emprisonné de 1964 à 1990, il devient le premier président élu au suffrage universel sans distinction raciale, après les élections du 27 avril 1994 qui mettent fin au régime d'apartheid.",
                "(2) Objectifs : réconcilier les Sud-Africains noirs et blancs dans une « nation arc-en-ciel » ; garantir la dignité et la sécurité de tous ; lutter contre la pauvreté et les discriminations ; ne plus jamais laisser une partie de la population en opprimer une autre.",
                "(3) Objectifs atteints : la démocratie multiraciale s'est installée, avec des élections régulières ; l'égalité des droits est garantie ; des millions de logements ont été construits, l'accès à l'eau et à l'électricité s'est étendu ; une classe moyenne noire est apparue.",
                "Objectifs non atteints : les inégalités de revenus restent parmi les plus fortes du monde ; le chômage touche environ un tiers des actifs ; la ségrégation spatiale persiste (townships, quartiers informels) ; la réforme foncière avance lentement ; la violence et les tensions xénophobes contredisent l'idéal de paix.",
                "Conclusion : le discours fixe un idéal de réconciliation largement réalisé sur le plan politique, mais l'égalité réelle des conditions de vie reste à construire.",
              ],
            },
            {
              level: 3,
              statement: "Question problématisée : « Les pays d'Afrique australe face aux défis du développement : des trajectoires divergentes ? ». Rédigez une introduction, un développement en deux parties avec des exemples précis de plusieurs États, et une conclusion.",
              hint: "Comparez au moins trois États (par exemple l'Afrique du Sud, le Botswana, le Zimbabwe, le Mozambique ou le Malawi) à l'aide des indicateurs, puis montrez les défis communs et les réponses collectives.",
              solution: [
                "Introduction : l'Afrique australe réunit des États aux niveaux de développement très inégaux, mesurés notamment par l'IDH. Problématique : les pays de la région suivent-ils des trajectoires de développement opposées, ou partagent-ils des défis communs qui appellent des réponses collectives ?",
                "I. Des trajectoires divergentes. Argument 1 : l'Afrique du Sud, puissance émergente (G20, BRICS depuis 2010), et le Botswana, qui a investi les revenus des diamants depuis son indépendance en 1966, ont un IDH élevé. Argument 2 : le Zimbabwe a été plongé dans la crise par la réforme agraire de 2000 et l'hyperinflation de 2008 ; le Mozambique et le Malawi, à l'IDH faible, restent très ruraux, avec une forte fécondité et un accès limité à l'électricité.",
                "II. Des défis communs et des réponses collectives. Argument 1 : partout, il faut sortir de l'économie de rente (cuivre zambien, pétrole angolais, diamants botswanais), réduire les inégalités (très fortes en Afrique du Sud, où le chômage touche environ un tiers des actifs), faire face au VIH et à une urbanisation rapide. Argument 2 : les États coopèrent (SADC depuis 1992, ZLECAf en vigueur en 2019, corridors de Maputo et de Lobito, réseau électrique commun) et doivent conduire ensemble la transition énergétique et l'adaptation au changement climatique.",
                "Conclusion : les trajectoires divergent fortement, mais les pays d'Afrique australe partagent des défis qui rendent l'intégration régionale indispensable ; la réussite du Botswana et les difficultés du Zimbabwe montrent le rôle décisif de la gouvernance.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Apartheid", right: "Ségrégation raciale légale en Afrique du Sud (1948-1991)" },
              { left: "Bantoustan", right: "Territoire où l'apartheid cantonnait la population noire" },
              { left: "Township", right: "Quartier périphérique créé pour la population noire" },
              { left: "IDH", right: "Indicateur combinant santé, éducation et revenu" },
              { left: "SADC", right: "Communauté de développement de seize États de la région" },
              { left: "Économie de rente", right: "Économie dépendante de l'exportation de ressources brutes" },
            ],
          },
          quiz: [
            {
              q: "En quelle année ont lieu les premières élections multiraciales en Afrique du Sud ?",
              options: ["1994", "1948", "1990", "2010"],
              answer: 0,
              why: "Les élections du 27 avril 1994 portent Nelson Mandela à la présidence ; 1948 marque le début de l'apartheid et 1990 la libération de Mandela.",
            },
            {
              q: "Qu'est-ce que l'IDH ?",
              options: ["Le seul revenu moyen par habitant, en dollars", "La densité de population par kilomètre carré", "La part des citadins dans la population totale", "Un indice de santé, d'éducation et de revenu"],
              answer: 3,
              why: "L'IDH du PNUD combine espérance de vie, durée de scolarisation et revenu par habitant.",
            },
            {
              q: "Quel problème majeur touche l'Afrique du Sud au milieu des années 2020 ?",
              options: ["Une population encore très majoritairement rurale", "Un chômage massif", "L'absence de ressources minières", "Une croissance démographique de plus de 5 % par an"],
              answer: 1,
              why: "Le chômage touche environ un tiers de la population active, et bien davantage les jeunes.",
            },
            {
              q: "Quelle région d'Afrique du Sud est le coeur économique du pays ?",
              options: ["Le Cap-Occidental", "Le KwaZulu-Natal", "Le Gauteng", "Le Limpopo"],
              answer: 2,
              why: "Le Gauteng, autour de Johannesburg et de Pretoria, concentre la Bourse, les sièges d'entreprises et une grande partie de l'activité.",
            },
            {
              q: "Que désigne le mot délestage en Afrique du Sud ?",
              options: ["Des coupures d'électricité programmées", "Une baisse générale des impôts", "La vente des entreprises publiques à des groupes étrangers", "Une migration des villes vers les campagnes"],
              answer: 0,
              why: "Faute de capacités suffisantes, la compagnie publique Eskom coupe l'électricité par zones et par tranches horaires.",
            },
          ],
          trap: "Parler de l'Afrique australe comme d'un ensemble homogène et pauvre : les écarts de développement entre l'Afrique du Sud ou le Botswana et le Mozambique ou le Malawi sont considérables. Autre erreur : croire que la fin de l'apartheid en 1994 a fait disparaître les inégalités qu'il avait créées.",
          method: "Pour comparer des pays, construisez un tableau avec trois ou quatre États en lignes et des indicateurs en colonnes (IDH, ressources principales, part des citadins, défi majeur). Dans votre copie, comparez toujours au moins deux pays avec des exemples précis plutôt que de généraliser.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: "afrique-australe-mobilites",
          title: "Des territoires traversés et remodelés par des mobilités",
          minutes: 30,
          objectives: [
            "Décrire les différentes mobilités en Afrique australe : migrations de travail, réfugiés et déplacés, exode rural, tourisme.",
            "Expliquer le rôle de l'Afrique du Sud comme pôle migratoire régional et les tensions qui en résultent.",
            "Identifier les corridors de transport et leur rôle dans l'intégration régionale et mondiale.",
            "Analyser comment les mobilités remodèlent les territoires, en particulier les villes et les espaces frontaliers.",
          ],
          course: [
            {
              heading: "Une longue histoire de migrations de travail",
              paragraphs: [
                "Les découvertes de diamants (à partir de 1867, autour de Kimberley) puis d'or (1886, dans le Witwatersrand, où naît Johannesburg) font de l'Afrique du Sud un pôle d'attraction pour toute la région. Les compagnies minières recrutent des travailleurs au Mozambique, au Lesotho, au Malawi, au Botswana ou en Eswatini. Ces mineurs signent des contrats temporaires, vivent dans des foyers sans leur famille et rentrent régulièrement chez eux : c'est une migration circulaire, qui a duré plus d'un siècle.",
                "Sous l'apartheid, les déplacements des Sud-Africains noirs sont contrôlés par des laissez-passer obligatoires, et les bantoustans servent de réservoirs de main-d'oeuvre. Depuis les années 1990, l'emploi minier des étrangers a reculé, mais les migrations se sont diversifiées : Zimbabwéens fuyant la crise économique des années 2000, Malawiens, Mozambicains, mais aussi migrants venus de la RDC, de Somalie ou d'Éthiopie. Les femmes migrent de plus en plus, comme employées de maison ou commerçantes, et un important commerce transfrontalier informel relie Johannesburg à Harare, Maputo ou Lusaka.",
              ],
              box: { label: "Définition", text: "Migration circulaire : migration temporaire et répétée entre un lieu de départ et un lieu de travail, avec des retours réguliers au lieu d'origine, comme celle des mineurs du Lesotho ou du Mozambique vers les mines sud-africaines." },
            },
            {
              heading: "L'Afrique du Sud, pôle migratoire régional",
              paragraphs: [
                "Au recensement de 2022, l'Afrique du Sud compte environ 2,4 millions de personnes nées à l'étranger, soit près de 4 % de sa population ; près de la moitié viennent du Zimbabwe, devant le Mozambique et le Lesotho. Il faut y ajouter des migrants en situation irrégulière, difficiles à compter. Ils sont attirés par les emplois des mines, de l'agriculture commerciale, de la construction, du commerce et des services domestiques, et par des salaires plus élevés que dans leur pays.",
                "Ces migrations nourrissent des tensions. Dans un pays où le chômage touche environ un tiers des actifs, les migrants sont souvent accusés de prendre les emplois. Des violences xénophobes éclatent : en mai 2008, elles font 62 morts ; d'autres vagues ont lieu en 2015 et en 2019. Pour les pays de départ, les transferts de fonds des émigrés sont vitaux : au Lesotho, enclavé dans l'Afrique du Sud, ou au Zimbabwe, ils représentent une part importante des revenus des familles. Les postes-frontières, comme celui de Beitbridge sur le Limpopo, entre le Zimbabwe et l'Afrique du Sud, comptent parmi les plus fréquentés du continent.",
              ],
              box: { label: "À retenir", text: "L'Afrique du Sud est le principal pôle migratoire d'Afrique australe : environ 2,4 millions de personnes nées à l'étranger en 2022, surtout du Zimbabwe, du Mozambique et du Lesotho. Ces migrations sont une ressource économique, mais elles suscitent des tensions xénophobes (2008, 2015, 2019)." },
            },
            {
              heading: "Réfugiés, déplacés et exode rural",
              paragraphs: [
                "Les conflits ont provoqué de grands déplacements forcés. Pendant la guerre civile du Mozambique (1977-1992), plus d'un million de Mozambicains se sont réfugiés dans les pays voisins, notamment au Malawi. Depuis 2017, une insurrection armée dans la province de Cabo Delgado, au nord du Mozambique, a contraint des centaines de milliers d'habitants à fuir vers d'autres régions du pays : ce sont des déplacés internes. Les catastrophes naturelles, comme le cyclone Idai en 2019, déplacent aussi des populations entières.",
                "L'exode rural, départ des campagnes vers les villes, alimente une urbanisation rapide : Johannesburg, Le Cap, Durban, Maputo, Lusaka, Harare ou Luanda accueillent chaque année de nombreux jeunes ruraux. Faute de logements, beaucoup s'installent dans des quartiers informels ou dans des cabanes construites dans les arrière-cours des townships. Les liens entre ville et campagne restent forts : les citadins envoient de l'argent à leur village et y retournent régulièrement.",
              ],
            },
            {
              heading: "Des corridors qui traversent et intègrent les territoires",
              paragraphs: [
                "Plusieurs États de la région sont enclavés, c'est-à-dire sans accès à la mer : le Botswana, le Zimbabwe, la Zambie, le Malawi, le Lesotho et l'Eswatini. Pour exporter leurs minerais et importer des marchandises, ils dépendent des ports de leurs voisins : Durban, le plus grand port à conteneurs d'Afrique australe, mais aussi Maputo, Beira et Nacala au Mozambique, Walvis Bay en Namibie, Lobito en Angola et Dar es Salaam en Tanzanie. Des corridors relient l'intérieur à ces ports : le chemin de fer TAZARA, achevé en 1975 avec l'aide de la Chine entre la Zambie et la Tanzanie, le corridor de Maputo, lancé au milieu des années 1990 entre le Gauteng et le Mozambique, ou le corridor de Lobito, relancé depuis 2023 pour exporter le cuivre et le cobalt de Zambie et de RDC.",
                "Ces corridors intègrent l'Afrique australe à la mondialisation : les minerais partent vers la Chine, l'Europe ou l'Amérique. Ils stimulent le commerce régional et la croissance des villes-étapes, des ports et des postes-frontières. Mais les embouteillages de camions aux frontières sont fréquents, et les territoires traversés sans arrêt en tirent peu de bénéfices : c'est l'effet tunnel. Les corridors renforcent ainsi les noeuds déjà puissants, en particulier le Gauteng et les grands ports.",
              ],
              box: { label: "Définition", text: "Pays enclavé : pays sans accès direct à la mer. Corridor de développement : axe de transport multimodal (route, rail, oléoduc) qui relie l'intérieur à un port, et le long duquel on cherche à attirer des activités économiques." },
            },
            {
              heading: "Tourisme et mobilités qui remodèlent les territoires",
              paragraphs: [
                "Le tourisme international est une autre mobilité majeure : Le Cap et sa région, le parc Kruger, les chutes Victoria, le delta de l'Okavango ou les plages de Maurice attirent des visiteurs du monde entier. Le Botswana a fait le choix d'un tourisme de safari haut de gamme, avec peu de visiteurs mais des dépenses élevées. Le tourisme crée des emplois, mais il forme parfois des enclaves dont les habitants profitent peu.",
                "Les mobilités remodèlent les territoires. À Johannesburg, les sièges d'entreprises et les commerces aisés se sont déplacés vers des quartiers du nord comme Sandton, tandis que des commerçants migrants transforment certains quartiers centraux. Les villes frontalières grandissent avec le commerce et le transit, et dans les villages du Lesotho ou du Zimbabwe, l'argent des émigrés finance des maisons et des commerces. L'Afrique australe est ainsi un espace en profonde mutation, traversé de flux de personnes, de marchandises et de capitaux.",
              ],
            },
          ],
          keyPoints: [
            "Depuis les diamants (1867) et l'or (1886), l'Afrique du Sud attire des mineurs de toute la région : une migration circulaire.",
            "Environ 2,4 millions de personnes nées à l'étranger en Afrique du Sud en 2022, dont près de la moitié du Zimbabwe.",
            "Tensions xénophobes (62 morts en 2008), mais transferts de fonds vitaux pour le Lesotho ou le Zimbabwe.",
            "Déplacements forcés (guerre du Mozambique 1977-1992, Cabo Delgado depuis 2017) et exode rural vers les villes.",
            "Pays enclavés reliés aux ports par des corridors (TAZARA 1975, Maputo, Lobito) ; effet tunnel pour les espaces traversés.",
            "Tourisme (Le Cap, Kruger, Okavango, chutes Victoria) et mobilités remodèlent villes, frontières et villages.",
          ],
          example: {
            statement: "Expliquez pourquoi l'Afrique du Sud attire des migrants de toute l'Afrique australe depuis la fin du XIXe siècle.",
            solution: [
              "Rappeler l'origine : la découverte des diamants (à partir de 1867) puis de l'or du Witwatersrand (1886) crée un immense besoin de main-d'oeuvre dans les mines.",
              "Expliquer l'organisation : les compagnies recrutent au Mozambique, au Lesotho, au Malawi ou au Botswana des mineurs sous contrat temporaire, qui pratiquent une migration circulaire.",
              "Montrer l'attraction actuelle : l'Afrique du Sud reste la première économie de la région, avec des emplois dans les mines, l'agriculture, la construction, le commerce et les services, et des salaires plus élevés.",
              "Ajouter les facteurs répulsifs des pays voisins : crise économique au Zimbabwe dans les années 2000, pauvreté au Malawi et au Mozambique, conflits.",
              "Donner l'ordre de grandeur : environ 2,4 millions de personnes nées à l'étranger au recensement de 2022, dont près de la moitié venues du Zimbabwe.",
              "Conclure : l'Afrique du Sud est un pôle migratoire régional fondé sur les écarts de développement, ce qui crée des liens forts entre les pays, mais aussi des tensions xénophobes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le type de mobilité dans chaque situation : (a) un mineur du Lesotho travaille onze mois par an dans une mine du Gauteng, puis rentre chez lui ; (b) une famille du Cabo Delgado fuit les attaques armées vers une autre province du Mozambique ; (c) un couple allemand passe dix jours en safari dans le delta de l'Okavango ; (d) une jeune femme quitte son village du Malawi pour s'installer à Lilongwe ; (e) une commerçante zimbabwéenne fait chaque mois l'aller-retour entre Harare et Johannesburg pour acheter des marchandises ; (f) un camion transporte du cuivre zambien vers le port de Dar es Salaam.",
              hint: "Demandez-vous qui se déplace (personnes ou marchandises), pour combien de temps, pourquoi, et si une frontière est franchie.",
              solution: [
                "(a) Migration internationale de travail, circulaire (allers-retours réguliers entre le Lesotho et l'Afrique du Sud).",
                "(b) Déplacement forcé interne : la famille est déplacée interne, puisqu'elle reste au Mozambique.",
                "(c) Mobilité touristique internationale (tourisme de safari).",
                "(d) Exode rural : migration interne de la campagne vers la ville.",
                "(e) Mobilité commerciale transfrontalière, souvent informelle, répétée et de courte durée.",
                "(f) Flux de marchandises le long d'un corridor de transport, depuis un pays enclavé vers un port.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une entreprise minière zambienne doit exporter 30 000 tonnes de cuivre. Itinéraire A, par la route vers un port sud-africain : 150 dollars par tonne et 8 jours de transport. Itinéraire B, par un corridor ferroviaire vers un port de l'Atlantique : 100 dollars par tonne et 4 jours de transport. (1) Calculez le coût total de chaque itinéraire. (2) Calculez l'économie réalisée avec l'itinéraire B, en dollars et en pourcentage. (3) Expliquez pourquoi les corridors sont essentiels pour un pays enclavé. (4) Donnez une limite des corridors pour les territoires traversés.",
              hint: "Multipliez le tonnage par le coût par tonne. Le pourcentage d'économie se calcule par rapport au coût de l'itinéraire A.",
              solution: [
                "(1) Itinéraire A : 30 000 × 150 = 4 500 000 dollars. Itinéraire B : 30 000 × 100 = 3 000 000 dollars.",
                "(2) Économie : 4 500 000 - 3 000 000 = 1 500 000 dollars, soit 1,5 ÷ 4,5 ≈ 0,333, environ 33 % du coût de l'itinéraire A. Le transport est aussi deux fois plus rapide (4 jours au lieu de 8).",
                "(3) Un pays enclavé comme la Zambie n'a pas de port : le coût et la durée du transport vers la mer pèsent sur la compétitivité de ses exportations. Des corridors efficaces réduisent ces coûts, diversifient les débouchés (océan Indien et Atlantique) et rendent le pays moins dépendant d'un seul voisin.",
                "(4) Limite : les territoires traversés sans gare ni zone d'activités profitent peu du corridor (effet tunnel) ; les bénéfices se concentrent dans les mines, les ports et les grandes villes-étapes.",
                "Conclusion : les corridors sont un outil majeur d'intégration régionale et mondiale, mais ils ne diffusent pas automatiquement le développement.",
              ],
            },
            {
              level: 3,
              statement: "Croquis. Vous devez réaliser un croquis intitulé « L'Afrique australe : des territoires traversés et remodelés par des mobilités ». Proposez une légende organisée en trois parties, en indiquant pour chaque élément le figuré choisi (surface, point, ligne ou flèche) et les lieux à localiser.",
              hint: "Organisez la légende autour de trois questions : quel est le pôle d'attraction ? quels flux de personnes ? par quels axes et quelles portes passent les marchandises ? Ajoutez les lieux touristiques dans l'une des parties.",
              solution: [
                "Titre : « L'Afrique australe : des territoires traversés et remodelés par des mobilités ».",
                "I. Un pôle d'attraction régional. Figuré de surface en couleur vive pour l'Afrique du Sud ; figuré ponctuel renforcé pour le Gauteng (Johannesburg, Pretoria), coeur économique ; points pour Le Cap et Durban ; hachures pour les bassins miniers (Witwatersrand, Copperbelt zambien).",
                "II. Des flux de personnes. Flèches proportionnelles vers l'Afrique du Sud depuis le Zimbabwe (flux principal), le Mozambique, le Lesotho et le Malawi ; flèches courtes pour les déplacés du Cabo Delgado ; figuré ponctuel pour les grandes villes alimentées par l'exode rural (Maputo, Lusaka, Harare, Luanda) ; pictogramme pour les grands sites touristiques (Le Cap, parc Kruger, chutes Victoria, delta de l'Okavango).",
                "III. Des axes et des portes d'entrée. Figurés linéaires pour les corridors (Maputo, Beira, Nacala, Lobito, TAZARA vers Dar es Salaam, Walvis Bay) ; figurés ponctuels (ancres) pour les ports (Durban, Maputo, Beira, Walvis Bay, Lobito, Dar es Salaam) ; figuré spécifique pour les postes-frontières très fréquentés (Beitbridge) ; trame pour les pays enclavés (Botswana, Zimbabwe, Zambie, Malawi, Lesotho, Eswatini).",
                "Nomenclature : nommer les États, les océans Atlantique et Indien, les fleuves Zambèze, Limpopo et Orange ; vérifier que chaque figuré du croquis apparaît dans la légende.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes qui ont façonné les mobilités en Afrique australe.",
            items: [
              "Premières découvertes de diamants en Afrique du Sud (1867)",
              "Découverte de l'or du Witwatersrand et naissance de Johannesburg (1886)",
              "Début de l'apartheid en Afrique du Sud (1948)",
              "Achèvement du chemin de fer TAZARA entre la Zambie et la Tanzanie (1975)",
              "Premières élections multiraciales en Afrique du Sud (1994)",
              "Violences xénophobes contre des migrants en Afrique du Sud (2008)",
              "Cyclone Idai au Mozambique (2019)",
            ],
          },
          quiz: [
            {
              q: "Quel événement attire, à partir de 1886, des travailleurs de toute la région vers le Witwatersrand ?",
              options: ["La fin de l'apartheid", "La construction du port de Durban", "L'ouverture du parc Kruger", "La découverte de l'or"],
              answer: 3,
              why: "La ruée vers l'or du Witwatersrand donne naissance à Johannesburg et crée un immense besoin de mineurs.",
            },
            {
              q: "De quel pays vient près de la moitié des personnes nées à l'étranger recensées en Afrique du Sud en 2022 ?",
              options: ["Le Nigeria", "Le Mozambique", "Le Zimbabwe", "Le Lesotho"],
              answer: 2,
              why: "Les Zimbabwéens, nombreux à avoir fui la crise économique de leur pays, forment le premier groupe de migrants en Afrique du Sud.",
            },
            {
              q: "Qu'est-ce qu'un pays enclavé ?",
              options: ["Un pays insulaire", "Un pays sans accès à la mer", "Un pays entouré de montagnes", "Un pays sans frontières terrestres"],
              answer: 1,
              why: "Le Botswana, la Zambie ou le Malawi n'ont pas de littoral et dépendent des ports de leurs voisins.",
            },
            {
              q: "Quel corridor relie le Gauteng au port mozambicain le plus proche ?",
              options: ["Le corridor de Maputo", "Le corridor de Lobito", "Le TAZARA", "Le corridor de Walvis Bay"],
              answer: 0,
              why: "Le corridor de Maputo, lancé au milieu des années 1990, relie Johannesburg et Pretoria au port de Maputo.",
            },
            {
              q: "Quel effet les corridors ont-ils souvent sur les territoires ?",
              options: ["Ils profitent également à tous les espaces traversés", "Ils suppriment toutes les frontières de la région", "Ils favorisent surtout les noeuds desservis", "Ils réduisent les échanges avec la Chine"],
              answer: 2,
              why: "Les ports, les mines et les grandes villes-étapes en profitent ; les espaces traversés sans arrêt subissent l'effet tunnel.",
            },
          ],
          trap: "Ne voir dans les migrations africaines que des départs vers l'Europe : en Afrique australe, la plupart des migrants restent dans la région, et l'Afrique du Sud en est le principal pôle. Autre erreur : oublier que les mobilités concernent aussi les marchandises, le long des corridors.",
          method: "Pour traiter les mobilités d'un espace, distinguez toujours trois types de flux (personnes, marchandises, touristes) et trois échelles (locale, régionale, mondiale), puis montrez comment chaque flux transforme un territoire précis (une ville, une frontière, un port).",
        },
      ],
    },
  ],
}
