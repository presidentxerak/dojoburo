import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hggsp-tle',
  chapters: [
    /* ==================================================================== */
    /* THÈME 4 · IDENTIFIER, PROTÉGER ET VALORISER LE PATRIMOINE             */
    /* ==================================================================== */
    {
      id: 'patrimoine',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notion-de-patrimoine',
          title: 'La construction de la notion de patrimoine',
          minutes: 30,
          objectives: [
            "Définir la notion de patrimoine et expliquer qu'il s'agit d'une construction sociale et politique.",
            "Identifier les grandes étapes de la construction du patrimoine en France depuis la Révolution française.",
            "Expliquer l'élargissement de la notion : du monument historique au patrimoine naturel, mondial et immatériel.",
            "Utiliser le vocabulaire de la patrimonialisation : classement, inscription, valeur universelle exceptionnelle.",
          ],
          course: [
            {
              heading: "Du bien de famille au bien commun",
              paragraphs: [
                "Le mot patrimoine vient du latin patrimonium, qui désigne les biens hérités du père. Pendant longtemps, il relève du droit privé : c'est ce qu'une famille possède et transmet. Le sens qui nous intéresse apparaît lorsque ce vocabulaire de l'héritage est appliqué à une collectivité entière : une nation, puis l'humanité, considère que certains biens venus du passé lui appartiennent en commun et doivent être transmis.",
                "Le patrimoine n'est donc pas un donné mais une construction. Rien n'est patrimoine par nature : un château, une usine, un paysage ou une recette le deviennent parce qu'une société les sélectionne, leur attribue une valeur (historique, artistique, identitaire, scientifique) et décide de les conserver. Ce processus s'appelle la patrimonialisation. Il comporte trois étapes que le programme met en avant : identifier, protéger, valoriser.",
                "L'historien de l'art autrichien Aloïs Riegl, dans Le Culte moderne des monuments (1903), montre déjà que l'on attribue aux monuments des valeurs différentes et parfois contradictoires : valeur d'ancienneté, valeur historique, valeur d'art, valeur d'usage. Ces valeurs expliquent les débats qui accompagnent chaque décision : faut-il restaurer, laisser en l'état, reconstruire, ouvrir au public ?",
              ],
              box: { label: "Définition", text: "Patrimoine : ensemble des biens matériels (monuments, objets, sites, paysages) et immatériels (pratiques, savoir-faire, traditions) hérités du passé, qu'une société juge dignes d'être conservés et transmis. Patrimonialisation : processus par lequel un bien devient patrimoine (identification, protection, valorisation)." },
            },
            {
              heading: "La Révolution française, moment fondateur",
              paragraphs: [
                "Le 2 novembre 1789, l'Assemblée constituante met les biens du clergé à la disposition de la nation ; suivent les biens des émigrés et ceux de la Couronne. L'État se retrouve propriétaire d'églises, d'abbayes, de châteaux, de bibliothèques et d'œuvres d'art. Une question nouvelle se pose : que faire de ces biens qui appartiennent désormais à tous ?",
                "La Révolution est aussi un temps de destructions. En 1793, les tombeaux royaux de la basilique de Saint-Denis sont profanés et les statues de la galerie des rois de Notre-Dame de Paris sont abattues, parce qu'on y voit des symboles de la monarchie et de la féodalité. En réaction, l'abbé Grégoire dénonce en 1794, dans ses rapports à la Convention, ce qu'il nomme le « vandalisme ». Il défend l'idée que ces œuvres, même liées à l'Ancien Régime, appartiennent à la nation et doivent être conservées.",
                "La Révolution invente ainsi le musée public. Le 10 août 1793, le Muséum central des arts ouvre au palais du Louvre : les collections royales deviennent accessibles aux citoyens. Alexandre Lenoir rassemble au couvent des Petits-Augustins des sculptures et des tombeaux menacés, ouverts au public en 1795 sous le nom de musée des Monuments français. Le patrimoine devient un bien national, au service de l'éducation des citoyens.",
              ],
              box: { label: "Repère", text: "1789 : biens du clergé mis à la disposition de la nation. 1793 : ouverture du Muséum central des arts au Louvre. 1794 : l'abbé Grégoire forge le mot « vandalisme ». 1795 : ouverture du musée des Monuments français d'Alexandre Lenoir." },
            },
            {
              heading: "Le XIXe siècle : l'État invente les monuments historiques",
              paragraphs: [
                "Au début du XIXe siècle, le romantisme redécouvre le Moyen Âge. Victor Hugo publie le pamphlet Guerre aux démolisseurs (rédigé en 1825, publié en 1832) et fait de la cathédrale l'héroïne de Notre-Dame de Paris (1831). L'opinion éclairée s'émeut des démolitions et de la vente de monuments à des entrepreneurs qui les exploitent comme carrières de pierre.",
                "L'État s'organise sous la monarchie de Juillet. En 1830, François Guizot, ministre de l'Intérieur, crée le poste d'inspecteur général des monuments historiques, confié à Ludovic Vitet puis, à partir de 1834, à Prosper Mérimée, qui parcourt la France pour recenser les édifices. En 1837 est créée la Commission des monuments historiques. Les architectes, au premier rang desquels Eugène Viollet-le-Duc (Vézelay, Notre-Dame de Paris, la cité de Carcassonne), mènent de grandes restaurations, parfois critiquées car elles reconstituent un état idéal que l'édifice n'a peut-être jamais connu.",
                "La protection devient une affaire de loi. La loi du 30 mars 1887 organise le classement des monuments d'intérêt national. La loi du 31 décembre 1913, fondement du droit actuel, permet de classer un édifice même contre l'avis de son propriétaire privé, et soumet tous les travaux à l'autorisation de l'État. La loi de 1930 étend la protection aux sites naturels, celle de 1943 aux abords des monuments (un périmètre de 500 mètres).",
              ],
              box: { label: "À retenir", text: "Classement : protection la plus forte, pour un bien d'intérêt public du point de vue de l'histoire ou de l'art (loi de 1913). Inscription : protection plus légère, créée en 1927, pour un bien d'intérêt suffisant. Dans les deux cas, les travaux sont contrôlés par l'État." },
            },
            {
              heading: "Au XXe siècle : élargissement et mondialisation du patrimoine",
              paragraphs: [
                "La notion s'élargit dans toutes les directions. Élargissement typologique : on protège désormais des usines, des gares, des maisons ouvrières, des jardins, des ensembles urbains entiers (loi Malraux de 1962 sur les secteurs sauvegardés). Élargissement chronologique : l'architecture du XXe siècle entre au patrimoine, comme Le Havre reconstruit par Auguste Perret. Élargissement vers la nature, puis vers l'immatériel : chants, fêtes, savoir-faire.",
                "Le patrimoine se mondialise aussi. La charte d'Athènes (1931) pose des principes communs de restauration ; la convention de La Haye (1954) protège les biens culturels en cas de conflit armé. En 1960, l'UNESCO lance une campagne internationale pour sauver les monuments de Nubie menacés par le haut barrage d'Assouan : les temples d'Abou Simbel sont découpés et remontés plus haut entre 1964 et 1968. Cette réussite montre qu'un patrimoine peut concerner l'humanité entière.",
                "Le 16 novembre 1972, la Conférence générale de l'UNESCO adopte la Convention concernant la protection du patrimoine mondial, culturel et naturel. Les premiers biens sont inscrits en 1978 (les îles Galápagos, l'île de Gorée, la cathédrale d'Aix-la-Chapelle...). En 2003, une nouvelle convention protège le patrimoine culturel immatériel. Certains auteurs, comme Françoise Choay dans L'Allégorie du patrimoine (1992), s'interrogent sur cette extension continue, qui risque de transformer tout le passé en patrimoine.",
              ],
              box: { label: "Définition", text: "Patrimoine mondial : biens culturels ou naturels inscrits sur la Liste de l'UNESCO parce qu'ils présentent une valeur universelle exceptionnelle (au moins un des dix critères), avec des conditions d'authenticité et d'intégrité, et un plan de gestion. L'État qui demande l'inscription s'engage à les protéger." },
            },
          ],
          keyPoints: [
            "Le patrimoine est une construction : une société choisit ce qu'elle veut conserver et transmettre (patrimonialisation : identifier, protéger, valoriser).",
            "La Révolution française est fondatrice : biens nationalisés, destructions, dénonciation du « vandalisme » par l'abbé Grégoire (1794), ouverture du Louvre (1793).",
            "Au XIXe siècle, l'État crée les monuments historiques : inspecteur général (1830), Mérimée, Commission (1837), loi de 1887, loi du 31 décembre 1913.",
            "Au XXe siècle, la notion s'élargit : sites naturels (1930), ensembles urbains (1962), patrimoine industriel et du XXe siècle.",
            "La mondialisation du patrimoine : campagne de Nubie (1960), convention de l'UNESCO (1972), premières inscriptions (1978), patrimoine immatériel (2003).",
          ],
          example: {
            statement: "Expliquez pourquoi la Révolution française est considérée comme un moment fondateur dans la construction de la notion de patrimoine.",
            solution: [
              "Rappeler le contexte : à partir de 1789, les biens du clergé, puis ceux des émigrés et de la Couronne, deviennent propriété de la nation.",
              "Montrer le problème posé : ces biens sont à la fois des symboles de l'Ancien Régime (et certains sont détruits, comme les tombeaux de Saint-Denis en 1793) et des œuvres d'art ou d'histoire.",
              "Présenter la réponse révolutionnaire : l'abbé Grégoire dénonce en 1794 le « vandalisme » et affirme que ces œuvres appartiennent à tous les citoyens.",
              "Donner les réalisations concrètes : ouverture du Muséum central des arts au Louvre le 10 août 1793, musée des Monuments français d'Alexandre Lenoir (1795).",
              "Conclure : la Révolution fait passer le patrimoine du bien privé (d'un roi, d'une Église, d'une famille) au bien commun de la nation, à conserver et à montrer pour éduquer les citoyens. C'est l'origine de la notion moderne de patrimoine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement qui lui correspond. Dates : 1793, 1830, 1913, 1962, 1972. Événements : a) loi sur les monuments historiques permettant le classement contre l'avis du propriétaire ; b) convention de l'UNESCO sur le patrimoine mondial ; c) ouverture du Muséum central des arts au Louvre ; d) création du poste d'inspecteur général des monuments historiques ; e) loi Malraux sur les secteurs sauvegardés.",
              hint: "Partez de la date la plus ancienne : la Révolution, puis la monarchie de Juillet, la IIIe République, la Ve République et enfin l'échelle mondiale.",
              solution: [
                "1793 : c) ouverture du Muséum central des arts au Louvre, le 10 août 1793.",
                "1830 : d) création du poste d'inspecteur général des monuments historiques par Guizot (Vitet, puis Mérimée en 1834).",
                "1913 : a) loi du 31 décembre 1913 sur les monuments historiques, toujours à la base du droit actuel.",
                "1962 : e) loi Malraux du 4 août 1962, qui crée les secteurs sauvegardés pour protéger des quartiers entiers.",
                "1972 : b) convention de l'UNESCO du 16 novembre 1972 sur le patrimoine mondial, culturel et naturel.",
              ],
            },
            {
              level: 2,
              statement: "Classez les biens suivants, tous inscrits sur les listes de l'UNESCO, dans les catégories patrimoine culturel, patrimoine naturel, patrimoine mixte ou patrimoine immatériel : le Mont-Saint-Michel et sa baie (1979) ; les lagons de Nouvelle-Calédonie (2008) ; Pyrénées-Mont Perdu (1997, France et Espagne, à la fois pour ses paysages et pour sa culture pastorale) ; le repas gastronomique des Français (2010) ; Le Havre, la ville reconstruite par Auguste Perret (2005) ; le fest-noz breton (2012). Indiquez ensuite lequel illustre le mieux l'élargissement chronologique du patrimoine.",
              hint: "Demandez-vous pour chaque bien s'il s'agit d'une œuvre humaine, d'un milieu naturel, des deux à la fois, ou d'une pratique vivante.",
              solution: [
                "Patrimoine culturel : le Mont-Saint-Michel et sa baie ; Le Havre reconstruit par Auguste Perret.",
                "Patrimoine naturel : les lagons de Nouvelle-Calédonie (récifs coralliens et écosystèmes associés).",
                "Patrimoine mixte : Pyrénées-Mont Perdu, inscrit à la fois pour ses paysages naturels et pour ses paysages culturels pastoraux.",
                "Patrimoine immatériel : le repas gastronomique des Français et le fest-noz, qui sont des pratiques vivantes et non des objets.",
                "Élargissement chronologique : Le Havre, ville reconstruite après 1945, montre que l'architecture du XXe siècle peut devenir patrimoine mondial, alors qu'au XIXe siècle on ne protégeait guère que des monuments antiques et médiévaux.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La construction de la notion de patrimoine en France, de la Révolution française à nos jours ». Analysez le sujet, proposez une problématique, puis un plan détaillé en trois parties avec au moins un exemple précis par partie.",
              hint: "Le sujet invite à un plan chronologique, mais chaque partie doit répondre à la problématique : qui décide de ce qui est patrimoine, et comment la notion change-t-elle ?",
              solution: [
                "Analyse : « construction » indique un processus, donc des acteurs (État, savants, citoyens, UNESCO) et des étapes ; « notion » invite à suivre l'évolution du sens du mot ; les bornes vont de 1789 à aujourd'hui.",
                "Problématique : comment la notion de patrimoine, née de la nationalisation des biens à la Révolution, est-elle passée d'un ensemble de monuments nationaux protégés par l'État à un héritage élargi, partagé avec l'humanité ?",
                "I. La naissance d'un patrimoine national (1789-1830) : biens nationalisés, destructions de 1793 et dénonciation du « vandalisme » par Grégoire (1794), ouverture du Louvre (1793).",
                "II. L'État protecteur des monuments historiques (1830-1945) : inspecteur général (1830) et Mérimée, restaurations de Viollet-le-Duc, lois de 1887, 1913 et 1930.",
                "III. Un patrimoine élargi et mondialisé (depuis 1945) : loi Malraux (1962), patrimoine industriel et du XXe siècle (Le Havre), convention de 1972, patrimoine immatériel (2003, repas gastronomique des Français en 2010).",
                "Conclusion : le patrimoine français est passé du monument au territoire, de la nation à l'humanité, de l'objet à la pratique ; cette extension pose la question de ses limites.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la construction du patrimoine dans l'ordre chronologique.",
            items: [
              "Ouverture du Muséum central des arts au Louvre (1793)",
              "L'abbé Grégoire dénonce le « vandalisme » (1794)",
              "Création du poste d'inspecteur général des monuments historiques (1830)",
              "Loi sur les monuments historiques (31 décembre 1913)",
              "Loi Malraux sur les secteurs sauvegardés (1962)",
              "Convention de l'UNESCO sur le patrimoine mondial (1972)",
              "Convention de l'UNESCO sur le patrimoine culturel immatériel (2003)",
            ],
          },
          quiz: [
            {
              q: "Qui forge le mot « vandalisme » en 1794 pour dénoncer les destructions révolutionnaires ?",
              options: ["Victor Hugo", "L'abbé Grégoire", "Prosper Mérimée", "Alexandre Lenoir"],
              answer: 1,
              why: "Dans ses rapports à la Convention en 1794, l'abbé Grégoire dénonce le « vandalisme » et défend la conservation des œuvres au nom de la nation.",
            },
            {
              q: "Quelle loi permet de classer un monument historique même contre l'avis de son propriétaire privé ?",
              options: ["La loi de 1887", "La loi Malraux de 1962", "La loi du 31 décembre 1913", "La loi de 1930 sur les sites"],
              answer: 2,
              why: "La loi du 31 décembre 1913 renforce celle de 1887 : elle autorise le classement d'office et reste le fondement du droit actuel des monuments historiques.",
            },
            {
              q: "Que protège la convention de l'UNESCO adoptée en 2003 ?",
              options: ["Le patrimoine culturel immatériel", "Les biens culturels en cas de conflit armé", "Les seuls sites naturels", "Les archives des États"],
              answer: 0,
              why: "La convention de 2003 protège les pratiques, savoir-faire et traditions vivantes ; les biens en cas de conflit relèvent de la convention de La Haye de 1954.",
            },
            {
              q: "Quelle opération des années 1960 prépare la convention du patrimoine mondial de 1972 ?",
              options: ["La reconstruction de Varsovie", "La restauration de Versailles", "Le sauvetage des monuments de Nubie", "La protection de la forêt amazonienne"],
              answer: 2,
              why: "Lancée par l'UNESCO en 1960, la campagne de Nubie (temples d'Abou Simbel déplacés de 1964 à 1968) montre qu'un patrimoine peut être l'affaire de toute l'humanité.",
            },
            {
              q: "Pour être inscrit sur la Liste du patrimoine mondial, un bien doit présenter :",
              options: ["un intérêt touristique majeur", "une valeur universelle exceptionnelle", "une ancienneté d'au moins cent ans attestée", "un propriétaire public"],
              answer: 1,
              why: "Le critère central est la valeur universelle exceptionnelle, appréciée selon dix critères ; l'ancienneté, le tourisme ou le statut du propriétaire ne suffisent pas.",
            },
          ],
          trap: "Croire que le patrimoine existe par nature, alors qu'il résulte toujours d'un choix : il faut nommer qui sélectionne (État, savants, UNESCO, communautés) et selon quelles valeurs.",
          method: "Construisez une frise à trois étages (France, Europe, monde) avec cinq dates par étage : vous verrez d'un coup d'œil le passage du patrimoine national au patrimoine mondial, et vous aurez des repères précis pour la dissertation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'usages-du-patrimoine',
          title: 'Usages sociaux et politiques du patrimoine',
          minutes: 30,
          objectives: [
            "Analyser les usages sociaux, politiques et diplomatiques du patrimoine.",
            "Expliquer pourquoi les frises du Parthénon constituent un patrimoine disputé depuis le XIXe siècle.",
            "Montrer comment un lieu comme le château de Versailles est réinvesti par les pouvoirs successifs.",
            "Expliquer les enjeux des demandes de restitution de biens culturels.",
          ],
          course: [
            {
              heading: "Le patrimoine, instrument d'identité et de légitimité",
              paragraphs: [
                "Le patrimoine n'est jamais neutre. Parce qu'il relie une communauté à son passé, il sert à affirmer une identité et à légitimer un pouvoir. Au XIXe siècle, les nations en construction s'appuient sur lui : la Grèce indépendante fait de l'Acropole le symbole de sa continuité avec l'Antiquité ; en Allemagne, l'achèvement de la cathédrale de Cologne, célébré en 1880 en présence de l'empereur Guillaume Ier, devient un symbole de l'unité nationale.",
                "Les usages sont aussi sociaux. Le patrimoine fonde des identités locales (associations de sauvegarde, fêtes, écomusées), il crée des emplois et attire des touristes, il fournit des lieux de rassemblement et de commémoration. Les Journées européennes du patrimoine montrent l'attachement d'un large public à des lieux souvent ordinaires : une usine, un lavoir, une mairie.",
                "Enfin, le patrimoine est un outil diplomatique, un élément du soft power, c'est-à-dire de la capacité d'un État à attirer et à convaincre sans contraindre. Prêts d'œuvres, expositions, accueil de chefs d'État dans des lieux prestigieux, restitutions : le patrimoine sert à nouer ou à réparer des relations entre États.",
              ],
              box: { label: "Définition", text: "Usages du patrimoine : manières dont des acteurs (États, communautés, entreprises, associations) mobilisent un bien patrimonial au service d'un objectif : construire une identité, légitimer un pouvoir, développer un territoire, conduire une diplomatie." },
            },
            {
              heading: "Les frises du Parthénon, un patrimoine disputé depuis le XIXe siècle",
              paragraphs: [
                "Au début du XIXe siècle, Athènes fait partie de l'Empire ottoman. Entre 1801 et 1805, Lord Elgin, ambassadeur britannique auprès du sultan, fait détacher et transporter en Grande-Bretagne une grande partie des sculptures du Parthénon (frise, métopes, statues des frontons). Il affirme avoir agi avec l'autorisation des autorités ottomanes. En 1816, le Parlement britannique achète la collection et la confie au British Museum.",
                "Pour la Grèce, indépendante à partir de 1830, l'Acropole devient un emblème national : on la débarrasse des constructions postérieures à l'Antiquité pour retrouver le monument classique. En 1982, la ministre de la Culture Melina Mercouri demande officiellement le retour des marbres. En 2009 ouvre le nouveau musée de l'Acropole, où des espaces attendent les originaux restés à Londres, signe d'une revendication mise en scène.",
                "Le British Museum répond que les marbres ont été acquis légalement, qu'ils y sont accessibles gratuitement à un public mondial et qu'une loi de 1963 (British Museum Act) lui interdit en principe de céder ses collections. Le débat oppose deux conceptions : un patrimoine universel exposé dans un musée encyclopédique, ou un patrimoine attaché à son lieu d'origine et à la nation qui s'en réclame.",
              ],
            },
            {
              heading: "Versailles, de la résidence royale au lieu de pouvoir",
              paragraphs: [
                "Le château de Versailles, où Louis XIV installe la cour en 1682, est conçu comme une mise en scène de la monarchie absolue. Après la Révolution, il perd sa fonction. Le roi Louis-Philippe le sauve en le transformant en musée de l'Histoire de France, inauguré en 1837 et dédié « à toutes les gloires de la France » : un usage politique qui cherche à réconcilier les Français autour d'une histoire commune.",
                "Le lieu est ensuite investi par les rivalités nationales. Le 18 janvier 1871, l'Empire allemand est proclamé dans la galerie des Glaces, en pleine défaite française ; le 28 juin 1919, c'est dans la même galerie que l'Allemagne vaincue signe le traité de Versailles. Le choix du lieu est un message politique.",
                "Aujourd'hui, Versailles est inscrit au patrimoine mondial (1979) et reste un lieu de pouvoir : le Parlement s'y réunit en Congrès pour réviser la Constitution, et le président de la République y reçoit des chefs d'État, comme le roi Charles III lors d'un dîner d'État en septembre 2023. Le patrimoine sert ainsi le prestige de l'État et sa diplomatie.",
              ],
              box: { label: "Repère", text: "Versailles : 1682, la cour s'installe ; 1837, musée de l'Histoire de France ; 1871, proclamation de l'Empire allemand ; 1919, traité de Versailles ; 1979, inscription au patrimoine mondial." },
            },
            {
              heading: "Réaffectations, contestations et restitutions",
              paragraphs: [
                "Changer l'usage d'un monument est un acte politique. Sainte-Sophie, à Istanbul, basilique byzantine consacrée en 537, devient une mosquée après la prise de Constantinople en 1453. Mustafa Kemal en fait un musée en 1934, symbole de la Turquie laïque. En juillet 2020, le président Erdogan la rend au culte musulman, malgré les protestations de la Grèce et les inquiétudes de l'UNESCO : le patrimoine sert alors à affirmer une identité nationale et religieuse.",
                "Le patrimoine peut aussi être contesté. Des statues de personnages liés à l'esclavage ou à la colonisation sont déboulonnées ou débattues, comme celle du marchand Edward Colston, jetée dans le port de Bristol en juin 2020. On parle de patrimoine « dissonant » lorsqu'un héritage divise la société au lieu de la rassembler.",
                "Les demandes de restitution d'objets acquis pendant la colonisation se multiplient. À Ouagadougou, le 28 novembre 2017, Emmanuel Macron se dit favorable à des restitutions du patrimoine africain. Le rapport de Felwine Sarr et Bénédicte Savoy (2018) et la loi du 24 décembre 2020 permettent le retour au Bénin de 26 œuvres du trésor d'Abomey, pillées par les troupes coloniales en 1892, et au Sénégal d'un sabre attribué à El Hadj Omar Tall. Les 26 œuvres rejoignent le Bénin en novembre 2021.",
              ],
              box: { label: "À retenir", text: "En France, les collections publiques sont inaliénables : un objet ne peut quitter les collections nationales que par une loi spécifique, comme celle du 24 décembre 2020 pour le Bénin et le Sénégal." },
            },
          ],
          keyPoints: [
            "Le patrimoine sert à construire des identités (nationales, locales), à légitimer des pouvoirs et à conduire une diplomatie (soft power).",
            "Frises du Parthénon : prélevées par Lord Elgin (1801-1805), achetées par le Parlement britannique (1816), réclamées par la Grèce depuis 1982.",
            "Versailles : musée de l'Histoire de France (1837), galerie des Glaces en 1871 et 1919, lieu du Congrès et de la diplomatie présidentielle.",
            "Sainte-Sophie : basilique (537), mosquée (1453), musée (1934), de nouveau mosquée (2020) : chaque changement est un acte politique.",
            "Restitutions : discours de Ouagadougou (2017), rapport Sarr-Savoy (2018), loi de 2020, retour de 26 œuvres au Bénin (2021).",
          ],
          example: {
            statement: "Montrez, à partir de l'exemple de Sainte-Sophie à Istanbul, que le patrimoine peut être un instrument politique.",
            solution: [
              "Présenter le bien : basilique byzantine consacrée en 537 sous Justinien, inscrite au patrimoine mondial au sein des zones historiques d'Istanbul.",
              "Premier usage politique : après la prise de Constantinople en 1453, les Ottomans la transforment en mosquée, signe de la victoire du nouveau pouvoir.",
              "Deuxième usage : en 1934, Mustafa Kemal en fait un musée ; ce choix exprime la laïcité de la jeune République turque et son ouverture vers l'Occident.",
              "Troisième usage : en juillet 2020, Recep Tayyip Erdogan la rend au culte musulman, ce qui affirme une identité nationale et religieuse et s'adresse à son électorat.",
              "Conclusion : chaque régime réaffecte le monument pour dire ce qu'est la nation ; le patrimoine est donc un instrument de légitimation et un message adressé à l'intérieur comme à l'étranger.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez l'usage principal du patrimoine (identitaire, politique, économique ou diplomatique) : a) un village restaure son lavoir et l'ouvre lors des Journées du patrimoine ; b) le président de la République reçoit un chef d'État étranger à Versailles ; c) une ville inscrite au patrimoine mondial développe l'hôtellerie et les visites guidées ; d) Louis-Philippe crée en 1837 un musée dédié « à toutes les gloires de la France ».",
              hint: "Demandez-vous à qui s'adresse l'action : aux habitants, aux électeurs et citoyens, aux touristes ou à un autre État.",
              solution: [
                "a) Usage identitaire et social : la communauté villageoise valorise un élément de son passé commun.",
                "b) Usage diplomatique : le prestige du lieu sert les relations entre États.",
                "c) Usage économique : le label patrimonial attire des visiteurs et crée des emplois.",
                "d) Usage politique : Louis-Philippe veut réconcilier les Français autour d'une histoire nationale commune et légitimer la monarchie de Juillet.",
              ],
            },
            {
              level: 2,
              statement: "Présentez sous forme de deux listes les arguments de la Grèce et ceux du British Museum dans le débat sur les marbres du Parthénon, puis expliquez en deux phrases quelles conceptions du patrimoine s'opposent.",
              hint: "Pensez aux conditions d'acquisition, au lien entre l'œuvre et son lieu, à l'accès du public et au droit britannique.",
              solution: [
                "Arguments de la Grèce : les sculptures ont été arrachées au monument au début du XIXe siècle, quand la Grèce était sous domination ottomane ; elles forment un ensemble avec le Parthénon ; le musée de l'Acropole (2009) peut les accueillir ; elles sont un symbole national.",
                "Arguments du British Museum : l'acquisition a été légale selon les autorités de l'époque ; le Parlement britannique les a achetées en 1816 ; elles sont exposées gratuitement à un public mondial ; la loi de 1963 interdit en principe de céder les collections.",
                "Conceptions en présence : d'un côté un patrimoine lié à un lieu et à une nation, qui doit retrouver son contexte d'origine ; de l'autre un patrimoine universel, conservé dans un musée encyclopédique qui montre l'histoire de toutes les civilisations.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : présentation résumée du discours prononcé par Emmanuel Macron à l'université de Ouagadougou (Burkina Faso) le 28 novembre 2017. Le président y affirme qu'il ne peut accepter qu'une grande part du patrimoine culturel de plusieurs pays africains se trouve en France, et souhaite que, dans un délai de cinq ans, les conditions soient réunies pour des restitutions temporaires ou définitives de ce patrimoine en Afrique. Consigne : montrez en quoi ce document témoigne d'un usage diplomatique du patrimoine, en quoi il marque une rupture, et quelles en sont les suites et les limites.",
              hint: "Présentez le document (auteur, date, lieu, public), reliez-le au principe d'inaliénabilité des collections, puis cherchez ce qui s'est passé de 2018 à 2021.",
              solution: [
                "Présentation : discours d'un chef d'État, prononcé devant des étudiants dans une capitale africaine, au début d'un mandat où il veut renouveler la relation entre la France et l'Afrique.",
                "Usage diplomatique : la promesse de restitution vise à reconnaître les spoliations de l'époque coloniale et à améliorer l'image de la France auprès de la jeunesse africaine ; le patrimoine devient un instrument de réconciliation et de soft power.",
                "Rupture : les collections publiques françaises sont inaliénables ; la France refusait jusque-là les restitutions, notamment celle des objets d'Abomey réclamés par le Bénin depuis 2016.",
                "Suites : rapport de Felwine Sarr et Bénédicte Savoy (2018), loi du 24 décembre 2020, retour de 26 œuvres du trésor d'Abomey au Bénin en novembre 2021 et du sabre attribué à El Hadj Omar Tall au Sénégal.",
                "Limites : chaque restitution exige une loi particulière ; le nombre d'objets rendus reste très faible par rapport aux dizaines de milliers d'objets africains conservés dans les musées français ; certains conservateurs craignent un affaiblissement du principe d'inaliénabilité.",
                "Bilan : le document illustre la dimension géopolitique du patrimoine ; il ouvre un processus réel, mais encore limité.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque lieu ou objet patrimonial à l'usage politique qui l'a marqué.",
            pairs: [
              { left: "Sainte-Sophie", right: "Musée en 1934, de nouveau mosquée en 2020" },
              { left: "Galerie des Glaces", right: "Proclamation de l'Empire allemand (1871), traité de paix (1919)" },
              { left: "Marbres du Parthénon", right: "Réclamés par la Grèce au British Museum depuis 1982" },
              { left: "Trésor d'Abomey", right: "26 œuvres restituées au Bénin en 2021" },
              { left: "Cathédrale de Cologne", right: "Achevée en 1880, symbole de l'unité allemande" },
            ],
          },
          quiz: [
            {
              q: "Quel souverain transforme Versailles en musée de l'Histoire de France ?",
              options: ["Napoléon Ier", "Le roi Charles X", "Napoléon III", "Louis-Philippe"],
              answer: 3,
              why: "Louis-Philippe inaugure en 1837 le musée dédié « à toutes les gloires de la France », pour rassembler les Français autour d'une histoire commune.",
            },
            {
              q: "Entre quelles dates Lord Elgin fait-il prélever les sculptures du Parthénon ?",
              options: ["1801-1805", "1821-1830", "1789-1794", "1851-1855"],
              answer: 0,
              why: "Ambassadeur auprès du sultan ottoman, Lord Elgin fait détacher les sculptures entre 1801 et 1805, avant leur achat par le Parlement britannique en 1816.",
            },
            {
              q: "En 2020, quel changement d'usage touche Sainte-Sophie ?",
              options: ["Elle devient un musée national", "Elle est rendue au culte orthodoxe", "Elle redevient une mosquée", "Elle est fermée au public"],
              answer: 2,
              why: "En juillet 2020, le président Erdogan annule le statut de musée fixé en 1934 et rend l'édifice au culte musulman.",
            },
            {
              q: "Quelle loi permet en 2020 le retour d'œuvres au Bénin et au Sénégal ?",
              options: ["La loi du 31 décembre 1913", "La loi du 24 décembre 2020", "La loi Malraux", "La loi LCAP de 2016"],
              answer: 1,
              why: "Les collections publiques étant inaliénables, il faut une loi spécifique : celle du 24 décembre 2020 autorise ces restitutions.",
            },
            {
              q: "Le soft power désigne :",
              options: ["la puissance militaire d'un État", "le contrôle des ressources énergétiques", "la protection juridique des monuments historiques", "la capacité d'influencer par l'attraction"],
              answer: 3,
              why: "Notion forgée par Joseph Nye, le soft power est la capacité d'un État à séduire et convaincre, notamment par sa culture et son patrimoine.",
            },
          ],
          trap: "Présenter le patrimoine comme un simple objet de musée ou de tourisme, en oubliant qu'il est mobilisé par des acteurs qui poursuivent des buts politiques : nommez toujours l'acteur et son intention.",
          method: "Pour chaque exemple, retenez une fiche en trois lignes : le bien, l'acteur qui l'utilise, l'usage (identitaire, politique, économique, diplomatique) avec une date. Ces fiches fournissent directement les exemples d'une dissertation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preservation-patrimoine',
          title: 'Préserver le patrimoine : tensions et concurrences',
          minutes: 30,
          objectives: [
            "Identifier les menaces qui pèsent sur le patrimoine : conflits armés, trafics, pression touristique, urbanisation, changement climatique.",
            "Expliquer les tensions entre protection, valorisation et développement.",
            "Analyser les concurrences entre acteurs autour du patrimoine : États, UNESCO, communautés locales, acteurs privés.",
          ],
          course: [
            {
              heading: "Le patrimoine, cible des conflits",
              paragraphs: [
                "Dans les guerres contemporaines, le patrimoine est souvent visé délibérément, parce qu'il incarne l'identité de l'adversaire. Le vieux pont de Mostar, en Bosnie-Herzégovine, construit au XVIe siècle par les Ottomans, est détruit en novembre 1993 par les forces croates de Bosnie ; reconstruit avec l'aide internationale, il rouvre en 2004 et est inscrit au patrimoine mondial en 2005.",
                "En mars 2001, les talibans dynamitent les Bouddhas géants de Bamiyan, en Afghanistan. En 2012, des groupes djihadistes détruisent des mausolées de saints à Tombouctou, au Mali. En 2015, l'organisation État islamique fait exploser les temples de Baalshamin et de Bel à Palmyre, en Syrie, et assassine l'archéologue Khaled al-Asaad, qui avait veillé sur le site pendant des décennies. Ces destructions sont mises en scène et diffusées pour frapper l'opinion mondiale.",
                "Le droit international réagit. La convention de La Haye de 1954 protège les biens culturels en cas de conflit armé. En 2016, la Cour pénale internationale condamne Ahmad al-Faqi al-Mahdi à neuf ans de prison pour la destruction des mausolées de Tombouctou : c'est la première condamnation pour crime de guerre portant sur la seule destruction du patrimoine. En 2017, le Conseil de sécurité de l'ONU adopte la résolution 2347, consacrée à la protection du patrimoine dans les conflits, et l'alliance ALIPH est créée à l'initiative de la France et des Émirats arabes unis pour financer sa protection.",
              ],
              box: { label: "Repère", text: "1954 : convention de La Haye. 1993 : destruction du pont de Mostar. 2001 : Bouddhas de Bamiyan. 2012 : mausolées de Tombouctou. 2015 : Palmyre. 2016 : condamnation d'al-Mahdi par la CPI. 2017 : résolution 2347 et création d'ALIPH." },
            },
            {
              heading: "Trafics et marché de l'art",
              paragraphs: [
                "Le pillage des sites archéologiques et des musées alimente un trafic international. La convention de l'UNESCO de 1970 engage les États à empêcher l'importation et l'exportation illicites de biens culturels. Le pillage du musée national de Bagdad en avril 2003, puis les fouilles clandestines en Irak et en Syrie, ont montré l'ampleur du problème : certains objets, appelés « antiquités du sang », ont contribué à financer des groupes armés.",
                "Les concurrences sont ici économiques : collectionneurs, marchands, maisons de vente et musées ont intérêt à acquérir des objets rares, tandis que les États d'origine cherchent à les récupérer. La traçabilité (connaître l'histoire de chaque objet, sa provenance) devient un enjeu central pour les musées, qui doivent vérifier que leurs acquisitions sont licites.",
              ],
            },
            {
              heading: "Valoriser sans détruire : tourisme et développement",
              paragraphs: [
                "La valorisation peut menacer ce qu'elle met en valeur. Venise, inscrite au patrimoine mondial en 1987, reçoit chaque année des millions de visiteurs pour moins de 50 000 habitants dans son centre historique. Le surtourisme fait monter les loyers, chasser les habitants et fragilise la lagune. L'Italie interdit en 2021 aux grands navires de croisière l'accès au bassin de Saint-Marc et au canal de la Giudecca, et la ville expérimente en 2024 un droit d'accès payant pour les visiteurs à la journée.",
                "Le développement urbain entre aussi en conflit avec la protection. La vallée de l'Elbe à Dresde est retirée de la Liste du patrimoine mondial en 2009 après la construction d'un pont autoroutier ; Liverpool perd son inscription en 2021 à cause de projets immobiliers sur ses docks. À l'inverse, au Mont-Saint-Michel, les parkings ont été éloignés et une passerelle ouverte en 2014 pour rendre au site son caractère maritime : protéger peut demander de lourds aménagements.",
                "Le changement climatique ajoute une menace : montée des eaux, érosion, incendies, fonte du pergélisol. Venise s'est dotée du système de digues mobiles MOSE, mis en service en 2020, pour se protéger des hautes eaux.",
              ],
              box: { label: "Définition", text: "Liste du patrimoine mondial en péril : liste de l'UNESCO qui signale les biens gravement menacés (conflit, catastrophe, urbanisation) pour mobiliser l'aide internationale. Un bien peut aussi être retiré de la Liste s'il perd sa valeur universelle exceptionnelle." },
            },
            {
              heading: "Concurrences pour la reconnaissance",
              paragraphs: [
                "L'inscription sur la Liste du patrimoine mondial est un label recherché : elle apporte du prestige, des touristes et parfois des financements. Les États se font concurrence pour obtenir des inscriptions, ce qui explique un déséquilibre ancien : près de la moitié des biens inscrits se trouvent en Europe et en Amérique du Nord. En 1994, l'UNESCO adopte une Stratégie globale pour mieux représenter l'Afrique, l'Asie, le Pacifique et les patrimoines non monumentaux.",
                "Le patrimoine peut enfin devenir un objet de conflit territorial. Le temple de Préah Vihéar, attribué au Cambodge par la Cour internationale de justice en 1962, est inscrit au patrimoine mondial en 2008 à la demande du Cambodge ; cette inscription ravive le différend frontalier avec la Thaïlande et provoque des affrontements armés entre 2008 et 2011. Protéger un bien, c'est aussi affirmer une souveraineté sur lui.",
              ],
            },
          ],
          keyPoints: [
            "Le patrimoine est visé dans les conflits parce qu'il incarne une identité : Mostar (1993), Bamiyan (2001), Tombouctou (2012), Palmyre (2015).",
            "Réponses internationales : convention de La Haye (1954), condamnation d'al-Mahdi par la CPI (2016), résolution 2347 et ALIPH (2017).",
            "Le trafic de biens culturels est combattu par la convention de l'UNESCO de 1970 ; la provenance des objets devient un enjeu majeur.",
            "La valorisation touristique peut menacer le patrimoine (Venise) ; l'urbanisation peut faire perdre l'inscription (Dresde 2009, Liverpool 2021).",
            "Les États se concurrencent pour les inscriptions, et le patrimoine peut servir à affirmer une souveraineté (Préah Vihéar).",
          ],
          example: {
            statement: "Expliquez pourquoi la condamnation d'Ahmad al-Faqi al-Mahdi par la Cour pénale internationale en 2016 est une étape importante dans la protection du patrimoine.",
            solution: [
              "Rappeler les faits : en 2012, pendant l'occupation du nord du Mali par des groupes djihadistes, des mausolées de saints de Tombouctou, inscrits au patrimoine mondial, sont détruits.",
              "Présenter le jugement : en 2016, la CPI condamne al-Mahdi, qui avait dirigé ces destructions, à neuf ans d'emprisonnement pour crime de guerre.",
              "Dégager la nouveauté : c'est la première fois qu'une juridiction internationale condamne une personne pour la seule destruction de biens culturels, sans autre crime contre des personnes.",
              "Montrer la portée : la destruction du patrimoine est reconnue comme une atteinte grave à l'humanité et à l'identité d'une population ; cela a une valeur dissuasive.",
              "Nuancer : la justice intervient après coup ; la protection réelle dépend aussi de la reconstruction (les mausolées ont été reconstruits avec l'UNESCO en 2015) et de la prévention.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque menace au cas qui l'illustre : menaces : a) conflit armé ; b) surtourisme ; c) projet urbain ; d) changement climatique et hautes eaux. Cas : 1) retrait de Liverpool de la Liste en 2021 ; 2) destruction des temples de Palmyre en 2015 ; 3) droit d'accès payant pour les visiteurs à la journée à Venise ; 4) mise en service du système MOSE à Venise en 2020.",
              hint: "Deux cas concernent Venise, mais pas pour la même menace.",
              solution: [
                "a) Conflit armé : 2) Palmyre, temples détruits par l'organisation État islamique en 2015.",
                "b) Surtourisme : 3) droit d'accès payant expérimenté à Venise en 2024 pour limiter les visiteurs à la journée.",
                "c) Projet urbain : 1) Liverpool, retirée de la Liste en 2021 à cause de projets immobiliers sur les docks.",
                "d) Changement climatique et hautes eaux : 4) les digues mobiles du MOSE, mises en service en 2020.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi l'inscription d'un site au patrimoine mondial peut à la fois protéger ce site et le menacer. Appuyez-vous sur deux exemples précis.",
              hint: "Pensez aux effets positifs de la reconnaissance (financements, contraintes juridiques), puis à ses effets indirects (fréquentation, spéculation).",
              solution: [
                "Protection : l'inscription oblige l'État à présenter un plan de gestion, attire des financements et une vigilance internationale ; le Mont-Saint-Michel a ainsi bénéficié de travaux importants pour rétablir son caractère maritime (passerelle ouverte en 2014).",
                "Menace : l'inscription agit comme un label touristique qui augmente la fréquentation ; à Venise, le surtourisme chasse les habitants et fragilise la lagune, au point que l'Italie a interdit les grands navires de croisière en 2021.",
                "Conclusion : l'inscription n'est pas une fin en soi ; elle déplace le problème de la reconnaissance vers celui de la gestion, qui doit concilier protection, vie des habitants et économie.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Protéger le patrimoine en temps de guerre : un défi pour la communauté internationale ». Proposez une introduction rédigée (accroche, définitions, problématique, annonce du plan) et un plan détaillé en deux ou trois parties.",
              hint: "Distinguez les raisons pour lesquelles le patrimoine est visé, les outils de protection, puis leurs limites.",
              solution: [
                "Accroche : en août 2015, l'archéologue Khaled al-Asaad est assassiné à Palmyre, puis les temples de Baalshamin et de Bel sont détruits par l'organisation État islamique.",
                "Définitions : le patrimoine désigne les biens hérités jugés dignes d'être transmis ; la communauté internationale regroupe les États et les organisations (ONU, UNESCO, CPI) qui agissent ensemble.",
                "Problématique : pourquoi le patrimoine est-il devenu une cible des conflits, et la communauté internationale parvient-elle à le protéger ?",
                "I. Le patrimoine, cible des guerres : il incarne l'identité de l'adversaire (Mostar 1993, Bamiyan 2001, Tombouctou 2012) et sa destruction sert la propagande (Palmyre 2015) ou le financement (trafics).",
                "II. Des outils de protection renforcés : convention de La Haye (1954) et convention de 1970 contre les trafics ; Liste du patrimoine en péril ; jugement d'al-Mahdi par la CPI (2016) ; résolution 2347 et ALIPH (2017) ; reconstructions (Mostar, Tombouctou).",
                "III. Des limites persistantes : souveraineté des États et des groupes armés qui ne reconnaissent pas ces règles, justice tardive, moyens financiers limités, débats sur la reconstruction et l'authenticité.",
                "Annonce du plan : nous verrons pourquoi le patrimoine est pris pour cible, puis comment la communauté internationale s'est dotée d'outils, avant d'en mesurer les limites.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : préserver le patrimoine, entre tensions et concurrences.",
            statements: [
              { text: "La destruction des Bouddhas de Bamiyan par les talibans date de 2001.", true: true, why: "Les statues sont dynamitées en mars 2001, quelques mois avant les attentats du 11 septembre." },
              { text: "Un bien inscrit au patrimoine mondial ne peut jamais être retiré de la Liste.", true: false, why: "Dresde (2009) et Liverpool (2021) ont été retirées de la Liste après des projets d'aménagement." },
              { text: "La convention de La Haye de 1954 protège les biens culturels en cas de conflit armé.", true: true, why: "C'est le premier traité international entièrement consacré à cette question." },
              { text: "La CPI n'a jamais condamné personne pour la destruction du patrimoine.", true: false, why: "En 2016, elle condamne Ahmad al-Faqi al-Mahdi à neuf ans de prison pour les mausolées de Tombouctou." },
              { text: "L'inscription au patrimoine mondial augmente souvent la fréquentation touristique.", true: true, why: "Le label attire des visiteurs, ce qui apporte des revenus mais peut aussi menacer le site." },
              { text: "Les biens inscrits sont répartis de manière équilibrée entre les continents.", true: false, why: "Près de la moitié des biens sont en Europe et en Amérique du Nord, d'où la Stratégie globale de 1994." },
            ],
          },
          quiz: [
            {
              q: "Quelle organisation détruit les temples de Palmyre en 2015 ?",
              options: ["Les talibans", "L'organisation État islamique", "Ansar Dine", "Al-Qaida au Maghreb islamique"],
              answer: 1,
              why: "En 2015, l'organisation État islamique, qui contrôle la région, détruit notamment les temples de Baalshamin et de Bel.",
            },
            {
              q: "Quel site a été retiré de la Liste du patrimoine mondial en 2021 ?",
              options: ["Venise", "La vallée de l'Elbe à Dresde", "Liverpool", "Le Mont-Saint-Michel"],
              answer: 2,
              why: "Liverpool perd son inscription en 2021 à cause de projets immobiliers ; Dresde avait été retirée plus tôt, en 2009.",
            },
            {
              q: "Que vise la convention de l'UNESCO de 1970 ?",
              options: ["Le trafic illicite des biens culturels", "Le patrimoine culturel immatériel", "Les parcs naturels nationaux", "Les monuments menacés par les barrages"],
              answer: 0,
              why: "La convention de 1970 engage les États à lutter contre l'importation, l'exportation et le transfert illicites de biens culturels.",
            },
            {
              q: "Pourquoi l'inscription du temple de Préah Vihéar en 2008 provoque-t-elle des tensions ?",
              options: ["Le temple est menacé par un barrage", "Le site attire trop de touristes", "L'UNESCO refuse de financer sa restauration malgré les demandes du Cambodge", "Elle ravive un conflit frontalier entre Cambodge et Thaïlande"],
              answer: 3,
              why: "Le temple est situé dans une zone frontalière contestée ; son inscription à la demande du Cambodge entraîne des affrontements avec la Thaïlande entre 2008 et 2011.",
            },
            {
              q: "Quelle mesure l'Italie prend-elle en 2021 pour protéger Venise ?",
              options: ["Interdire les visites de la basilique Saint-Marc", "Écarter les grands navires de croisière", "Fermer le Grand Canal", "Démolir les parkings du centre"],
              answer: 1,
              why: "Depuis 2021, les grands navires de croisière ne peuvent plus passer par le bassin de Saint-Marc et le canal de la Giudecca.",
            },
          ],
          trap: "Ne citer que les destructions spectaculaires (Bamiyan, Palmyre) en oubliant les menaces lentes et banales (surtourisme, urbanisation, climat, trafics), qui sont pourtant au cœur du programme.",
          method: "Classez vos exemples dans un tableau à deux entrées : en lignes les menaces (guerre, trafic, tourisme, urbanisme, climat), en colonnes les acteurs (État, UNESCO, justice internationale, habitants, acteurs privés). Un tableau rempli vous donne des sous-parties prêtes à l'emploi.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-et-patrimoine',
          title: 'La France et le patrimoine : valoriser et protéger',
          minutes: 30,
          objectives: [
            "Présenter les grandes étapes de la politique patrimoniale française depuis la création du ministère des Affaires culturelles en 1959.",
            "Expliquer les outils de protection et de valorisation : classement, sites patrimoniaux remarquables, Journées du patrimoine, Fondation du patrimoine.",
            "Analyser la gastronomie comme patrimoine immatériel et comme ressource.",
            "Montrer comment la France utilise le patrimoine dans son action internationale.",
          ],
          course: [
            {
              heading: "Un État patrimonial : les outils de la protection",
              paragraphs: [
                "La France a une longue tradition de patrimoine porté par l'État. En 1959, le général de Gaulle crée un ministère des Affaires culturelles confié à André Malraux. La loi Malraux du 4 août 1962 crée les secteurs sauvegardés, qui protègent des quartiers entiers (le Marais à Paris, le centre de Sarlat, le Vieux-Lyon) tout en permettant leur rénovation. En 1964, Malraux et l'historien de l'art André Chastel lancent l'Inventaire général, chargé de recenser le patrimoine du territoire.",
                "Les protections se superposent : classement et inscription au titre des monuments historiques, protection des abords, sites naturels. Le Code du patrimoine (2004) rassemble ces règles. La loi du 7 juillet 2016 relative à la liberté de la création, à l'architecture et au patrimoine (loi LCAP) regroupe les secteurs sauvegardés et les autres dispositifs de protection urbaine sous un nom unique : les sites patrimoniaux remarquables.",
                "La France compte plus de 40 000 immeubles protégés au titre des monuments historiques, dont une grande partie appartient à des propriétaires privés ou à des communes. La protection repose donc sur une coopération entre l'État, qui contrôle les travaux et les subventionne, les collectivités et les propriétaires.",
              ],
              box: { label: "Repère", text: "1959 : ministère des Affaires culturelles (Malraux). 1962 : loi Malraux, secteurs sauvegardés. 1964 : Inventaire général. 2004 : Code du patrimoine. 2016 : loi LCAP, sites patrimoniaux remarquables." },
            },
            {
              heading: "Valoriser le patrimoine et mobiliser la société",
              paragraphs: [
                "En 1984, le ministère de la Culture organise la première journée « portes ouvertes » des monuments historiques ; l'initiative, devenue européenne en 1991 sous le nom de Journées européennes du patrimoine, permet chaque année en septembre de visiter des milliers de lieux, souvent fermés au public. La valorisation devient une fête collective.",
                "La société civile est mobilisée. La Fondation du patrimoine, créée par une loi de 1996, soutient la restauration du patrimoine de proximité (églises de village, lavoirs, moulins) grâce à des souscriptions et au mécénat. En 2018, le Loto du patrimoine, issu de la mission confiée à Stéphane Bern, finance des sites en péril. Le patrimoine est aussi une ressource économique : la France est le premier pays d'accueil de touristes internationaux au monde, et le patrimoine y contribue fortement.",
                "L'incendie de Notre-Dame de Paris, le 15 avril 2019, montre l'attachement affectif au patrimoine : une souscription nationale réunit des dons considérables, une loi du 29 juillet 2019 encadre le chantier, et un établissement public dirige la restauration. La cathédrale rouvre le 7 décembre 2024, après une reconstruction de la flèche à l'identique de celle de Viollet-le-Duc.",
              ],
            },
            {
              heading: "La gastronomie, un patrimoine immatériel",
              paragraphs: [
                "En 2010, le « repas gastronomique des Français » est inscrit sur la Liste représentative du patrimoine culturel immatériel de l'humanité. Ce n'est pas la cuisine française en tant que telle qui est inscrite, mais une pratique sociale : un repas festif qui célèbre un moment important, avec un ordre précis des plats, l'accord des mets et des vins, l'art de la table et le plaisir de partager.",
                "D'autres pratiques ont suivi, comme les savoir-faire artisanaux et la culture de la baguette de pain (2022). Pour faire vivre ces inscriptions, l'État a soutenu la création de cités de la gastronomie, notamment à Dijon, ouverte en 2022. La gastronomie relève ainsi à la fois de l'identité nationale, de l'économie (agriculture, restauration, tourisme) et de la diplomatie culinaire, utilisée lors des réceptions officielles et dans la promotion de l'image de la France.",
              ],
              box: { label: "À retenir", text: "Le patrimoine immatériel protège des pratiques vivantes, transmises de génération en génération et portées par des communautés. L'inscription engage l'État à les sauvegarder, c'est-à-dire à assurer leur transmission, et non à les figer." },
            },
            {
              heading: "Le patrimoine au service du rayonnement international",
              paragraphs: [
                "La France joue un rôle majeur dans la protection internationale du patrimoine. L'UNESCO a son siège à Paris, et la France compte une cinquantaine de biens inscrits au patrimoine mondial, ce qui la place parmi les tout premiers pays de la Liste. Elle a été à l'initiative, avec les Émirats arabes unis, de la conférence d'Abou Dhabi de 2016 qui a conduit à la création en 2017 d'ALIPH, alliance qui finance la protection du patrimoine dans les zones de conflit.",
                "Le patrimoine est aussi un instrument de diplomatie culturelle. Un accord intergouvernemental signé en 2007 avec les Émirats arabes unis prévoit la création du Louvre Abou Dhabi : conçu par l'architecte Jean Nouvel, il ouvre en novembre 2017. La France y prête son nom, son expertise et des œuvres de ses musées en échange d'une rémunération importante, ce qui a suscité des débats sur la « marchandisation » du patrimoine.",
                "Enfin, la politique des restitutions (Bénin et Sénégal, loi de 2020) et l'ouverture de la Cité internationale de la langue française au château de Villers-Cotterêts (2023), où François Ier signa l'ordonnance de 1539, montrent que le patrimoine sert à la fois à réparer des relations héritées de l'histoire coloniale et à promouvoir la francophonie.",
              ],
            },
          ],
          keyPoints: [
            "Malraux, premier ministre des Affaires culturelles (1959), crée les secteurs sauvegardés (1962) et l'Inventaire général (1964).",
            "La loi LCAP (2016) crée les sites patrimoniaux remarquables ; le Code du patrimoine (2004) rassemble les règles de protection.",
            "Valoriser : Journées du patrimoine (1984, européennes en 1991), Fondation du patrimoine (1996), Loto du patrimoine (2018).",
            "Notre-Dame : incendie le 15 avril 2019, loi du 29 juillet 2019, réouverture le 7 décembre 2024.",
            "Le repas gastronomique des Français, patrimoine immatériel depuis 2010 ; la baguette depuis 2022.",
            "Rayonnement : siège de l'UNESCO à Paris, ALIPH (2017), Louvre Abou Dhabi (2017), restitutions (2020-2021).",
          ],
          example: {
            statement: "En quoi le Louvre Abou Dhabi illustre-t-il l'usage du patrimoine dans la diplomatie française ?",
            solution: [
              "Présenter le projet : accord intergouvernemental signé en 2007 entre la France et les Émirats arabes unis ; musée conçu par Jean Nouvel, ouvert en novembre 2017.",
              "Montrer ce que la France apporte : la marque « Louvre », l'expertise de ses conservateurs (par l'intermédiaire de l'Agence France-Muséums) et des prêts d'œuvres de ses musées.",
              "Montrer ce que la France obtient : des ressources financières pour ses musées, une présence culturelle durable dans le Golfe et le renforcement d'un partenariat stratégique (la France y dispose aussi d'une base militaire).",
              "Évoquer les débats : certains conservateurs ont dénoncé une marchandisation du patrimoine et une forme de location des collections publiques.",
              "Conclure : le Louvre Abou Dhabi fait du patrimoine un outil de soft power et un élément d'une relation géopolitique plus large.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la date ou l'acteur qui convient : a) Le premier ministre des Affaires culturelles, nommé en 1959, est ... ; b) Les Journées du patrimoine sont créées en ... ; c) Le repas gastronomique des Français est inscrit au patrimoine immatériel en ... ; d) La loi qui crée les sites patrimoniaux remarquables date de ... ; e) Notre-Dame de Paris rouvre le ...",
              hint: "Reprenez les encadrés « Repère » et la fiche « L'essentiel ».",
              solution: [
                "a) André Malraux.",
                "b) 1984 (journée portes ouvertes des monuments historiques, devenue européenne en 1991).",
                "c) 2010.",
                "d) 2016 (loi LCAP du 7 juillet 2016).",
                "e) 7 décembre 2024.",
              ],
            },
            {
              level: 2,
              statement: "Montrez, à l'aide de trois arguments, que la gastronomie française est à la fois un patrimoine, une ressource économique et un instrument diplomatique.",
              hint: "Un argument par dimension, chacun avec un exemple daté.",
              solution: [
                "Patrimoine : le repas gastronomique des Français est inscrit en 2010 sur la Liste représentative du patrimoine culturel immatériel ; c'est une pratique sociale transmise et partagée.",
                "Ressource économique : la gastronomie fait vivre l'agriculture, la viticulture, la restauration et attire des touristes ; les cités de la gastronomie, comme celle de Dijon ouverte en 2022, valorisent cette ressource.",
                "Instrument diplomatique : les dîners d'État (par exemple dans la galerie des Glaces de Versailles pour Charles III en 2023) mettent en scène l'art de vivre français et servent l'image du pays.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La France, une puissance patrimoniale ? ». Proposez une problématique et un plan détaillé en trois parties, avec des exemples précis et datés.",
              hint: "Une puissance patrimoniale protège son patrimoine, le valorise et l'utilise pour son influence ; le point d'interrogation invite à nuancer.",
              solution: [
                "Problématique : dans quelle mesure la France fait-elle de son patrimoine un instrument de cohésion nationale, de développement et d'influence internationale, et quelles sont les limites de cette politique ?",
                "I. Un modèle national de protection : ministère de Malraux (1959), loi de 1962, Inventaire (1964), Code du patrimoine (2004), loi LCAP (2016), plus de 40 000 monuments historiques.",
                "II. Une valorisation qui mobilise la société et l'économie : Journées du patrimoine (1984), Fondation du patrimoine (1996), Loto du patrimoine (2018), élan pour Notre-Dame (2019-2024), gastronomie inscrite en 2010, premier pays d'accueil touristique.",
                "III. Un instrument d'influence, mais des limites : siège de l'UNESCO, une cinquantaine de biens inscrits, ALIPH (2017), Louvre Abou Dhabi (2017), restitutions (2021) ; mais coût d'entretien élevé, nombreux édifices en péril, débats sur la marchandisation et sur des restitutions encore peu nombreuses.",
                "Conclusion : la France est bien une puissance patrimoniale, qui fait du patrimoine un pilier de son soft power, mais cette puissance repose sur des moyens limités et sur des choix politiques discutés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque action à sa date.",
            pairs: [
              { left: "Loi Malraux sur les secteurs sauvegardés", right: "1962" },
              { left: "Première journée portes ouvertes des monuments historiques", right: "1984" },
              { left: "Inscription du repas gastronomique des Français", right: "2010" },
              { left: "Loi LCAP et sites patrimoniaux remarquables", right: "2016" },
              { left: "Ouverture du Louvre Abou Dhabi", right: "2017" },
              { left: "Réouverture de Notre-Dame de Paris", right: "2024" },
            ],
          },
          quiz: [
            {
              q: "Quel dispositif la loi Malraux de 1962 crée-t-elle ?",
              options: ["Les secteurs sauvegardés", "Les parcs nationaux", "L'inscription à l'inventaire supplémentaire", "Les Journées du patrimoine"],
              answer: 0,
              why: "La loi du 4 août 1962 crée les secteurs sauvegardés, qui protègent et rénovent des quartiers historiques entiers.",
            },
            {
              q: "Qu'est-ce qui est inscrit au patrimoine immatériel en 2010 ?",
              options: ["La cuisine française", "Les climats du vignoble de Bourgogne", "Le repas gastronomique des Français", "La baguette de pain"],
              answer: 2,
              why: "C'est une pratique sociale, le repas festif partagé, qui est inscrite en 2010 ; la baguette l'est en 2022.",
            },
            {
              q: "Quel architecte a conçu le Louvre Abou Dhabi ?",
              options: ["Ieoh Ming Pei", "Renzo Piano", "Frank Gehry", "Jean Nouvel"],
              answer: 3,
              why: "Jean Nouvel a conçu le musée, ouvert en 2017 ; Ieoh Ming Pei est l'auteur de la pyramide du Louvre à Paris.",
            },
            {
              q: "Les sites patrimoniaux remarquables ont été créés par :",
              options: ["la loi de 1913", "la loi LCAP de 2016", "la loi Malraux de 1962", "le Code du patrimoine de 2004"],
              answer: 1,
              why: "La loi du 7 juillet 2016 remplace les secteurs sauvegardés et les autres zones de protection par cette catégorie unique.",
            },
            {
              q: "Quelle alliance pour la protection du patrimoine en zones de conflit la France a-t-elle contribué à créer en 2017 ?",
              options: ["ICOMOS", "Le Bouclier bleu", "ALIPH", "Europa Nostra"],
              answer: 2,
              why: "ALIPH est née de la conférence d'Abou Dhabi de 2016, à l'initiative de la France et des Émirats arabes unis.",
            },
          ],
          trap: "Confondre les niveaux de protection : le classement monument historique relève de l'État français, alors que l'inscription au patrimoine mondial relève de l'UNESCO et n'a pas les mêmes effets juridiques.",
          method: "Pour un sujet sur la France, organisez vos connaissances en trois échelles (locale, nationale, internationale) et trois verbes du programme (identifier, protéger, valoriser) : chaque case doit contenir au moins un exemple daté.",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 5 · L'ENVIRONNEMENT, ENTRE EXPLOITATION ET PROTECTION           */
    /* ==================================================================== */
    {
      id: 'environnement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notion-environnement',
          title: 'Qu\'est-ce que l\'environnement ? Une notion construite',
          minutes: 25,
          objectives: [
            "Définir la notion d'environnement et la distinguer des notions de nature, de milieu et d'écosystème.",
            "Expliquer que l'environnement est une notion construite, dont le sens varie selon les sociétés et les époques.",
            "Identifier les grandes étapes de la prise de conscience environnementale, des années 1960 au sommet de Rio (1992).",
            "Discuter la notion d'Anthropocène.",
          ],
          course: [
            {
              heading: "Environnement, nature, milieu : des mots à distinguer",
              paragraphs: [
                "Le mot environnement désigne l'ensemble des éléments naturels (air, eau, sols, êtres vivants, climat) et artificiels (constructions, aménagements, pollutions) qui entourent une société et avec lesquels elle est en interaction. À la différence de la nature, pensée comme ce qui existe indépendamment de l'action humaine, l'environnement se définit toujours par rapport à un groupe humain : c'est un système de relations.",
                "D'autres notions sont proches. Le milieu, en géographie, désigne le cadre dans lequel vit une société, avec ses contraintes et ses ressources. L'écologie est la science des relations entre les êtres vivants et leur milieu : le mot est forgé en 1866 par le biologiste allemand Ernst Haeckel. L'écosystème, notion proposée en 1935 par le botaniste britannique Arthur Tansley, désigne un ensemble formé par des êtres vivants et le milieu physique avec lequel ils interagissent.",
                "Le mot écologie a pris un second sens, politique : il désigne aussi les mouvements et les partis qui placent la protection de l'environnement au cœur de leur programme. Il faut distinguer la science (l'écologie scientifique) et l'engagement (l'écologie politique).",
              ],
              box: { label: "Définition", text: "Environnement : ensemble des éléments naturels et artificiels qui entourent une société et avec lesquels elle interagit. Il se définit par la relation entre les humains et leur milieu : c'est à la fois une réalité physique et une construction sociale." },
            },
            {
              heading: "Une notion construite par les sociétés",
              paragraphs: [
                "Le regard porté sur la nature change selon les époques. Longtemps, elle est d'abord perçue comme une menace (forêts, montagnes, marais) ou comme une ressource à mettre en valeur. Au XIXe siècle, le romantisme valorise au contraire la nature sauvage et les paysages. En France, les peintres de l'école de Barbizon obtiennent que des parties de la forêt de Fontainebleau soient soustraites aux coupes : un décret de 1861 crée des « réserves artistiques », l'une des premières protections d'espaces naturels au nom de leur beauté.",
                "L'anthropologue Philippe Descola, dans Par-delà nature et culture (2005), montre que la séparation entre une nature extérieure et des sociétés humaines est propre au monde occidental moderne. D'autres sociétés pensent les relations entre humains, animaux et plantes de manière très différente. Ce que nous appelons environnement n'est donc pas une évidence universelle.",
                "Le sens du mot évolue aussi en France : il désigne d'abord simplement ce qui environne, puis prend dans les années 1960-1970, sous l'influence de l'anglais environment, le sens actuel de cadre de vie à protéger. En janvier 1971 est créé le premier ministère chargé de la Protection de la nature et de l'Environnement, confié à Robert Poujade.",
              ],
            },
            {
              heading: "La prise de conscience environnementale (1960-1992)",
              paragraphs: [
                "Dans les années 1960, les alertes se multiplient. En 1962, la biologiste américaine Rachel Carson publie Printemps silencieux (Silent Spring), qui dénonce les effets des pesticides comme le DDT sur les oiseaux et la santé. Le naufrage du pétrolier Torrey Canyon (1967) au large de la Cornouaille anglaise, dont le pétrole atteint aussi la Bretagne, révèle les dangers des marées noires. Le 22 avril 1970, le premier Jour de la Terre (Earth Day) mobilise des millions d'Américains.",
                "Les réponses deviennent internationales. En juin 1972, la conférence des Nations unies sur l'environnement humain, à Stockholm, crée le Programme des Nations unies pour l'environnement (PNUE). La même année, le rapport au Club de Rome, dit rapport Meadows (Les Limites à la croissance), affirme qu'une croissance infinie est impossible dans un monde aux ressources finies.",
                "Les catastrophes industrielles (Seveso en 1976, l'Amoco Cadiz en Bretagne en 1978, Tchernobyl en 1986) et la découverte du trou dans la couche d'ozone font de l'environnement un problème mondial. Le protocole de Montréal (1987) organise l'abandon des gaz qui détruisent l'ozone. La même année, le rapport Brundtland popularise la notion de développement durable, au cœur du sommet de la Terre de Rio en 1992.",
              ],
              box: { label: "Définition", text: "Développement durable (rapport Brundtland, 1987) : un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs. Il cherche à concilier trois dimensions : économique, sociale et environnementale." },
            },
            {
              heading: "L'Anthropocène, un concept en débat",
              paragraphs: [
                "En 2000, le chimiste Paul Crutzen, prix Nobel pour ses travaux sur l'ozone, et le biologiste Eugene Stoermer proposent le terme d'Anthropocène : l'humanité serait devenue une force géologique, capable de modifier le climat, la composition de l'atmosphère, les cycles de l'eau et la biodiversité à l'échelle de la planète. Les débuts proposés varient : la révolution industrielle de la fin du XVIIIe siècle, ou la « grande accélération » qui suit 1945, marquée notamment par les essais nucléaires.",
                "Le concept est discuté. En mars 2024, la sous-commission des géologues chargée de la question a rejeté la proposition de faire de l'Anthropocène une époque officielle de l'échelle des temps géologiques. Le mot reste pourtant très utilisé en sciences humaines. D'autres auteurs lui reprochent de rendre « l'humanité » responsable en bloc, alors que les pays industrialisés et les populations les plus riches ont bien davantage modifié la planète ; certains proposent ainsi de parler de « Capitalocène ».",
                "En France, la Charte de l'environnement, intégrée au bloc de constitutionnalité en 2005, reconnaît à chacun le droit de vivre dans un environnement équilibré et respectueux de la santé, et pose le principe de précaution : l'environnement est devenu un objet juridique et constitutionnel.",
              ],
            },
          ],
          keyPoints: [
            "L'environnement est l'ensemble des éléments naturels et artificiels avec lesquels une société interagit : il se définit par la relation entre humains et milieu.",
            "Écologie (Haeckel, 1866) : science des relations entre êtres vivants et milieu ; écosystème (Tansley, 1935).",
            "La notion est construite : son sens change selon les sociétés et les époques (Descola, Par-delà nature et culture, 2005).",
            "Prise de conscience : Carson (1962), Earth Day (1970), ministère français (1971), Stockholm et PNUE (1972), Brundtland (1987), Rio (1992).",
            "Anthropocène (Crutzen et Stoermer, 2000) : l'humanité comme force géologique ; un concept discuté, non retenu comme époque officielle en 2024.",
          ],
          example: {
            statement: "Montrez que l'environnement est une notion construite, et non une réalité qui irait de soi.",
            solution: [
              "Définir : l'environnement désigne ce qui entoure une société et avec quoi elle interagit ; il dépend donc toujours du point de vue d'un groupe humain.",
              "Premier argument, historique : la nature a longtemps été vue comme une menace ou une ressource ; le romantisme du XIXe siècle la transforme en paysage à protéger (réserves artistiques de Fontainebleau, 1861).",
              "Deuxième argument, culturel : Philippe Descola montre que la séparation entre nature et culture est propre à l'Occident moderne et n'existe pas dans toutes les sociétés.",
              "Troisième argument, politique : le mot ne prend son sens actuel qu'au tournant des années 1960-1970, avec les alertes scientifiques (Carson, 1962), la création de ministères (France, 1971) et les conférences internationales (Stockholm, 1972).",
              "Conclure : l'environnement est à la fois une réalité physique et une construction sociale ; ce que l'on considère comme un problème environnemental dépend des connaissances, des valeurs et des rapports de force d'une époque.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la définition et l'origine (auteur et date) des quatre notions suivantes : écologie, écosystème, développement durable, Anthropocène.",
              hint: "Deux notions viennent de scientifiques du XIXe et du XXe siècle, une d'un rapport de l'ONU, une d'un chimiste prix Nobel.",
              solution: [
                "Écologie : science des relations entre les êtres vivants et leur milieu ; mot forgé par Ernst Haeckel en 1866.",
                "Écosystème : ensemble formé par une communauté d'êtres vivants et son milieu physique, en interaction ; notion proposée par Arthur Tansley en 1935.",
                "Développement durable : développement qui répond aux besoins du présent sans compromettre ceux des générations futures ; rapport Brundtland, 1987.",
                "Anthropocène : période où l'humanité devient une force géologique qui transforme la planète ; proposé par Paul Crutzen et Eugene Stoermer en 2000.",
              ],
            },
            {
              level: 2,
              statement: "Classez les événements suivants en deux colonnes, « alertes » et « réponses politiques », puis expliquez en deux phrases le lien entre les deux colonnes : Printemps silencieux (1962) ; naufrage du Torrey Canyon (1967) ; création du ministère français de l'Environnement (1971) ; conférence de Stockholm (1972) ; accident de Tchernobyl (1986) ; protocole de Montréal (1987) ; sommet de la Terre de Rio (1992).",
              hint: "Une alerte révèle un problème (livre, catastrophe) ; une réponse politique crée une institution ou un traité.",
              solution: [
                "Alertes : Printemps silencieux (1962), naufrage du Torrey Canyon (1967), accident de Tchernobyl (1986).",
                "Réponses politiques : ministère français de l'Environnement (1971), conférence de Stockholm et création du PNUE (1972), protocole de Montréal (1987), sommet de Rio (1992).",
                "Lien : les alertes scientifiques et les catastrophes rendent visibles les dégâts causés à l'environnement et mobilisent l'opinion publique.",
                "Les États réagissent alors en créant des institutions nationales puis internationales : l'environnement devient progressivement un objet de politique publique et de négociation mondiale.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « L'environnement, une préoccupation politique récente ? ». Proposez une problématique et un plan détaillé en deux ou trois parties, avec des exemples précis.",
              hint: "Le point d'interrogation invite à nuancer : des préoccupations anciennes existent, mais l'environnement comme enjeu politique mondial est plus récent.",
              solution: [
                "Problématique : si les sociétés se sont préoccupées très tôt de leurs ressources et de leurs paysages, à partir de quand et pourquoi l'environnement devient-il un enjeu politique majeur, à l'échelle nationale puis mondiale ?",
                "I. Des préoccupations anciennes mais limitées : gestion des forêts sous Colbert (ordonnance de 1669), réserves artistiques de Fontainebleau (1861), parc de Yellowstone (1872) ; il s'agit de protéger une ressource ou un paysage, non l'environnement global.",
                "II. Les années 1960-1970, une prise de conscience politique : Carson (1962), Earth Day (1970), ministère français (1971), Stockholm et PNUE, rapport Meadows (1972).",
                "III. Depuis les années 1980, un enjeu mondial et constitutionnel : protocole de Montréal (1987), Brundtland (1987), Rio (1992), Charte de l'environnement (2005), débat sur l'Anthropocène.",
                "Conclusion : la préoccupation n'est pas récente, mais son extension à l'échelle planétaire et son inscription au cœur de la vie politique datent du dernier demi-siècle.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la notion d'environnement.",
            statements: [
              { text: "Le mot écologie a été forgé par Ernst Haeckel en 1866.", true: true, why: "Haeckel le définit comme la science des relations des organismes avec leur milieu." },
              { text: "L'environnement et la nature désignent exactement la même chose.", true: false, why: "La nature est pensée comme indépendante des humains ; l'environnement se définit par la relation avec une société." },
              { text: "La conférence de Stockholm de 1972 crée le Programme des Nations unies pour l'environnement.", true: true, why: "Le PNUE est la principale institution de l'ONU consacrée à l'environnement depuis 1972." },
              { text: "L'Anthropocène est officiellement reconnu par les géologues comme une époque depuis 2000.", true: false, why: "Proposé en 2000, le terme a été rejeté comme époque officielle par les géologues en mars 2024." },
              { text: "Rachel Carson dénonce dans Printemps silencieux les effets des pesticides.", true: true, why: "Publié en 1962, le livre vise notamment le DDT et joue un rôle majeur dans la prise de conscience." },
              { text: "Le premier ministère français de l'Environnement date de 1990.", true: false, why: "Il est créé en janvier 1971 et confié à Robert Poujade." },
            ],
          },
          quiz: [
            {
              q: "Qui propose en 1935 la notion d'écosystème ?",
              options: ["Ernst Haeckel", "Paul Vidal de La Blache", "Arthur Tansley", "Rachel Carson"],
              answer: 2,
              why: "Le botaniste britannique Arthur Tansley propose la notion en 1935 ; Haeckel est l'inventeur du mot écologie (1866).",
            },
            {
              q: "Quel rapport popularise en 1987 la notion de développement durable ?",
              options: ["Le rapport Brundtland", "Le rapport Meadows", "Le premier rapport du GIEC", "Le rapport Stern"],
              answer: 0,
              why: "Le rapport Notre avenir à tous, dit rapport Brundtland, définit le développement durable en 1987 ; le rapport Meadows date de 1972.",
            },
            {
              q: "Que crée la conférence de Stockholm en 1972 ?",
              options: ["Le GIEC", "La convention sur le climat", "Le protocole de Montréal", "Le PNUE"],
              answer: 3,
              why: "La conférence des Nations unies sur l'environnement humain crée le PNUE ; le GIEC date de 1988 et la convention sur le climat de 1992.",
            },
            {
              q: "Qu'affirme Philippe Descola dans Par-delà nature et culture ?",
              options: ["Que la nature est perçue partout de la même manière, quelle que soit la société", "Que l'opposition nature-culture est propre à l'Occident moderne", "Que l'environnement est une notion médiévale", "Que l'Anthropocène commence en 1945"],
              answer: 1,
              why: "Descola montre que d'autres sociétés pensent autrement les relations entre humains et non-humains : la coupure nature-culture n'est pas universelle.",
            },
            {
              q: "Le terme Anthropocène désigne :",
              options: ["une époque où l'humanité devient une force géologique", "la période de la préhistoire où apparaissent les premiers humains modernes", "une théorie niant le réchauffement", "un programme de l'ONU"],
              answer: 0,
              why: "Proposé par Crutzen et Stoermer en 2000, il désigne une période où les activités humaines transforment la planète à l'échelle géologique.",
            },
          ],
          trap: "Employer environnement, nature et écologie comme des synonymes : la nature est pensée comme extérieure aux humains, l'environnement est une relation, l'écologie est une science (et un courant politique).",
          method: "Commencez toute copie sur ce thème par une définition précise de l'environnement, puis montrez qu'elle a une histoire : citer deux dates (1962, 1972) et un auteur (Descola ou Crutzen) suffit à montrer que la notion est construite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'exploiter-preserver-proteger',
          title: 'Exploiter, préserver et protéger',
          minutes: 30,
          objectives: [
            "Distinguer exploiter, préserver et protéger, ainsi que les approches préservationniste et conservationniste.",
            "Analyser l'exemple de la forêt française, ressource exploitée et protégée depuis Colbert.",
            "Expliquer la création des parcs nationaux, des États-Unis (Yellowstone, 1872) à la France (1960).",
            "Identifier les conflits d'usage autour des ressources et des espaces protégés.",
          ],
          course: [
            {
              heading: "Trois rapports à la nature",
              paragraphs: [
                "Exploiter, c'est tirer des ressources d'un milieu (bois, eau, minerais, poissons, terres agricoles) pour satisfaire des besoins ou réaliser un profit. Protéger, c'est prendre des mesures (lois, règlements, aménagements) pour éviter qu'un milieu ou une ressource soit dégradé. Entre les deux, deux conceptions s'opposent depuis la fin du XIXe siècle aux États-Unis.",
                "Le préservationnisme, défendu par le naturaliste John Muir, fondateur du Sierra Club en 1892, veut préserver la nature sauvage (wilderness) à l'écart des activités humaines, pour sa valeur propre et sa beauté. Le conservationnisme, porté par le forestier Gifford Pinchot, premier chef du service fédéral des forêts sous Theodore Roosevelt, veut au contraire une exploitation rationnelle des ressources, pour qu'elles se renouvellent et profitent au plus grand nombre sur le long terme.",
                "Les deux hommes s'opposent dans l'affaire de la vallée de Hetch Hetchy, dans le parc national de Yosemite : Pinchot soutient la construction d'un barrage pour alimenter San Francisco en eau, Muir s'y oppose. Le Congrès autorise le barrage en 1913. Ce débat structure encore les politiques environnementales : faut-il mettre la nature sous cloche, ou en organiser une exploitation durable ?",
              ],
              box: { label: "Définition", text: "Préserver : maintenir un milieu à l'écart des activités humaines pour le garder intact (Muir). Conserver : gérer et exploiter une ressource de façon rationnelle pour qu'elle se renouvelle (Pinchot). Protéger : terme général désignant l'ensemble des mesures qui défendent un milieu contre les dégradations." },
            },
            {
              heading: "La forêt française, exploitée et protégée depuis Colbert",
              paragraphs: [
                "Au XVIIe siècle, la forêt est une ressource stratégique : le bois sert à se chauffer, à construire et surtout à bâtir les navires de guerre. Inquiet de la dégradation des forêts royales, Colbert fait adopter en août 1669 une grande ordonnance sur les Eaux et Forêts, qui réglemente les coupes et organise une gestion à long terme. Des chênaies sont replantées pour la marine, comme dans la forêt de Tronçais, dans l'Allier : on exploite en prévoyant l'avenir.",
                "Au XIXe siècle, le Code forestier (1827) renforce le contrôle de l'État. Les déboisements dans les montagnes aggravant les crues, les lois de 1860 et de 1882 organisent la restauration des terrains en montagne par le reboisement. Dans les Landes de Gascogne, une loi de 1857 impose l'assainissement et la plantation de pins maritimes : la plus grande forêt cultivée d'Europe occidentale naît ainsi d'une politique d'État. En 1964 est créé l'Office national des forêts (ONF), qui gère les forêts publiques.",
                "Aujourd'hui, la forêt couvre environ un tiers du territoire métropolitain, une surface qui a presque doublé depuis le milieu du XIXe siècle. Elle est multifonctionnelle : production de bois, protection de la biodiversité, loisirs, puits de carbone. Mais elle est fragilisée par les sécheresses, les insectes ravageurs comme les scolytes et les incendies, tels ceux qui ont touché la Gironde à l'été 2022.",
              ],
              box: { label: "Repère", text: "1669 : ordonnance de Colbert sur les Eaux et Forêts. 1827 : Code forestier. 1857 : loi sur les Landes de Gascogne. 1860 et 1882 : restauration des terrains en montagne. 1964 : création de l'ONF." },
            },
            {
              heading: "Protéger des espaces : des parcs nationaux aux aires protégées",
              paragraphs: [
                "Le 1er mars 1872, le président Ulysses Grant signe la loi qui crée le parc national de Yellowstone, premier parc national au monde. Yosemite devient parc national en 1890, et le National Park Service est créé en 1916 pour gérer ces espaces. Mais la création des parcs s'est accompagnée de l'exclusion des peuples amérindiens qui y vivaient ou y chassaient : protéger la nature a aussi signifié en écarter certaines populations.",
                "En France, la loi du 22 juillet 1960 crée les parcs nationaux. Le premier est celui de la Vanoise (1963) ; le onzième, le parc national de forêts, entre Champagne et Bourgogne, est créé en 2019. Les parcs naturels régionaux, créés à partir de 1967, cherchent à concilier protection et développement local. À l'échelle mondiale, le cadre mondial de Kunming-Montréal pour la biodiversité (décembre 2022) fixe l'objectif de protéger 30 % des terres et des mers d'ici 2030.",
                "Certains historiens, comme Guillaume Blanc dans L'Invention du colonialisme vert (2020), montrent que des parcs africains créés à l'époque coloniale puis après les indépendances ont été conçus sur le modèle d'une nature sans humains, au détriment des habitants. La protection n'est donc jamais neutre : elle repose sur des choix et produit des gagnants et des perdants.",
              ],
            },
            {
              heading: "Les communs et les conflits d'usage",
              paragraphs: [
                "En 1968, l'écologue Garrett Hardin décrit la « tragédie des communs » : une ressource en accès libre (un pâturage, une zone de pêche) serait condamnée à la surexploitation, car chacun a intérêt à en prendre le plus possible. Il en conclut qu'il faut soit la privatiser, soit la confier à l'État. L'économiste Elinor Ostrom, prix Nobel d'économie en 2009, montre au contraire que des communautés savent gérer durablement des ressources communes grâce à des règles collectives qu'elles élaborent et font respecter.",
                "Les conflits d'usage opposent des acteurs qui veulent utiliser le même espace ou la même ressource de façons incompatibles. En France, le projet d'aéroport de Notre-Dame-des-Landes, contesté par des agriculteurs et des militants écologistes, est abandonné par le gouvernement en janvier 2018. Les réserves d'eau pour l'irrigation, dites « méga-bassines », provoquent de violents affrontements à Sainte-Soline en mars 2023. Exploiter, préserver et protéger relèvent donc de choix politiques.",
              ],
            },
          ],
          keyPoints: [
            "Exploiter : tirer des ressources d'un milieu ; protéger : ensemble des mesures contre les dégradations.",
            "Préservationnisme (Muir, Sierra Club 1892) contre conservationnisme (Pinchot) : nature sauvage intacte ou exploitation rationnelle.",
            "Forêt française : ordonnance de Colbert (1669), Code forestier (1827), Landes (1857), ONF (1964) ; elle couvre environ un tiers du territoire.",
            "Yellowstone (1872), premier parc national ; en France, loi de 1960 et Vanoise (1963) ; objectif mondial de 30 % d'aires protégées en 2030.",
            "Hardin (1968) et la tragédie des communs ; Ostrom (Nobel 2009) montre que des communautés gèrent durablement des ressources communes.",
          ],
          example: {
            statement: "Montrez que la forêt française est, depuis le XVIIe siècle, à la fois une ressource exploitée et un milieu protégé.",
            solution: [
              "Présenter l'enjeu : la forêt fournit du bois (chauffage, construction, marine) mais se dégrade si on la surexploite.",
              "Sous Colbert : l'ordonnance de 1669 réglemente les coupes pour garantir à long terme le bois nécessaire à la marine royale (chênaie de Tronçais) ; il s'agit déjà d'une exploitation raisonnée.",
              "Au XIXe siècle : le Code forestier (1827), le reboisement des montagnes (lois de 1860 et 1882) et la plantation des Landes (1857) montrent un État qui protège pour prévenir les crues et pour produire.",
              "Depuis 1964 : l'ONF gère les forêts publiques en conciliant production, biodiversité et accueil du public ; la forêt a presque doublé de surface depuis le milieu du XIXe siècle.",
              "Conclure : en France, exploiter et protéger la forêt ne s'opposent pas toujours ; la protection a longtemps été pensée au service de l'exploitation, dans une logique conservationniste, aujourd'hui fragilisée par le changement climatique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, indiquez s'il s'agit d'exploiter, de conserver (gestion durable) ou de préserver : a) une mine de charbon à ciel ouvert ; b) une coupe de bois planifiée par l'ONF avec replantation ; c) une réserve intégrale où toute présence humaine est interdite ; d) une pêche soumise à des quotas annuels ; e) la création de Yellowstone pour garder un paysage sauvage intact.",
              hint: "Demandez-vous si la ressource est prélevée, si elle l'est avec la volonté de la renouveler, ou si l'on cherche à la tenir à l'écart des activités humaines.",
              solution: [
                "a) Exploiter : on extrait une ressource non renouvelable sans souci de reconstitution.",
                "b) Conserver : on exploite le bois tout en assurant le renouvellement de la forêt.",
                "c) Préserver : le milieu est maintenu à l'écart des activités humaines.",
                "d) Conserver : les quotas limitent les prises pour que les stocks de poissons se renouvellent.",
                "e) Préserver : l'objectif est de garder une nature sauvage, selon la logique défendue par John Muir.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi l'affaire de Hetch Hetchy (1913) illustre l'opposition entre John Muir et Gifford Pinchot, et montrez que ce débat reste actuel en citant un exemple contemporain.",
              hint: "Identifiez qui veut le barrage, pourquoi, et qui s'y oppose, au nom de quoi.",
              solution: [
                "Contexte : la ville de San Francisco veut construire un barrage dans la vallée de Hetch Hetchy, située dans le parc national de Yosemite, pour assurer son approvisionnement en eau.",
                "Position de Pinchot : il soutient le barrage, car la ressource doit servir au plus grand nombre ; c'est la logique conservationniste d'utilisation rationnelle.",
                "Position de Muir : il s'oppose à l'inondation d'une vallée exceptionnelle, qui doit être préservée pour sa valeur propre ; c'est la logique préservationniste.",
                "Issue : le Congrès autorise le barrage en 1913, ce qui montre la force de la logique d'exploitation.",
                "Actualité : les conflits autour des « méga-bassines » (Sainte-Soline, 2023) opposent encore l'usage d'une ressource (l'eau pour l'irrigation) et la protection des milieux.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Exploiter et protéger la nature : des logiques incompatibles ? ». Proposez une problématique et un plan détaillé en trois parties avec des exemples précis et datés.",
              hint: "Montrez d'abord les oppositions, puis les tentatives de conciliation, enfin les limites et les conflits qui demeurent.",
              solution: [
                "Problématique : exploiter les ressources et protéger les milieux s'opposent-ils nécessairement, ou les sociétés ont-elles inventé des manières de les concilier ?",
                "I. Des logiques qui s'opposent : surexploitation et tragédie des communs (Hardin, 1968) ; préservation d'une nature sauvage contre exploitation (Muir contre Pinchot, Hetch Hetchy en 1913) ; parcs nationaux conçus comme des sanctuaires (Yellowstone, 1872).",
                "II. Des tentatives de conciliation : gestion forestière depuis Colbert (1669) et ONF (1964) ; parcs naturels régionaux (1967) ; développement durable (Brundtland, 1987) ; gestion communautaire des communs (Ostrom, Nobel 2009).",
                "III. Des tensions persistantes : conflits d'usage (Notre-Dame-des-Landes abandonné en 2018, Sainte-Soline en 2023) ; protection excluant des populations (critique du « colonialisme vert ») ; objectif de 30 % d'aires protégées en 2030 difficile à atteindre.",
                "Conclusion : les deux logiques ne sont pas incompatibles par nature, mais leur conciliation dépend de choix politiques et de rapports de force entre acteurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque acteur ou texte à ce qui le caractérise.",
            pairs: [
              { left: "John Muir", right: "Préserver la nature sauvage, fondateur du Sierra Club" },
              { left: "Gifford Pinchot", right: "Exploiter rationnellement les ressources (conservationnisme)" },
              { left: "Colbert", right: "Ordonnance sur les Eaux et Forêts de 1669" },
              { left: "Garrett Hardin", right: "La « tragédie des communs » (1968)" },
              { left: "Elinor Ostrom", right: "La gestion collective des communs, Nobel 2009" },
              { left: "Ulysses Grant", right: "Création de Yellowstone en 1872" },
            ],
          },
          quiz: [
            {
              q: "Quel est le premier parc national créé en France ?",
              options: ["Les Cévennes", "Les Écrins", "Port-Cros", "La Vanoise"],
              answer: 3,
              why: "Le parc national de la Vanoise est créé en 1963, en application de la loi du 22 juillet 1960.",
            },
            {
              q: "Le conservationnisme de Gifford Pinchot consiste à :",
              options: ["interdire toute présence humaine dans les forêts", "exploiter rationnellement les ressources", "privatiser les forêts publiques", "abandonner l'exploitation du bois"],
              answer: 1,
              why: "Pinchot veut une utilisation raisonnée des ressources pour qu'elles se renouvellent et profitent au plus grand nombre.",
            },
            {
              q: "Pourquoi Colbert fait-il adopter l'ordonnance de 1669 ?",
              options: ["Pour garantir le bois de la marine royale", "Pour créer des parcs de chasse", "Pour lutter contre le réchauffement du climat", "Pour vendre les forêts royales"],
              answer: 0,
              why: "Le bois, en particulier le chêne, est indispensable à la construction des navires : l'ordonnance organise une gestion à long terme.",
            },
            {
              q: "Que montre Elinor Ostrom ?",
              options: ["Que les communs sont toujours surexploités", "Que seul l'État peut protéger la nature", "Que des communautés savent gérer des ressources communes", "Que la privatisation des ressources est la seule solution efficace"],
              answer: 2,
              why: "Contre Hardin, Ostrom montre que des règles collectives élaborées par les usagers permettent une gestion durable.",
            },
            {
              q: "Quel objectif fixe le cadre de Kunming-Montréal (2022) ?",
              options: ["Zéro déforestation en 2025", "Planter un milliard d'arbres", "Interdire toute pêche industrielle en haute mer d'ici 2030", "Protéger 30 % des terres et des mers d'ici 2030"],
              answer: 3,
              why: "Adopté en décembre 2022 dans le cadre de la convention sur la diversité biologique, il fixe l'objectif dit « 30 x 30 ».",
            },
          ],
          trap: "Opposer de façon simpliste exploitation et protection : en France comme aux États-Unis, la protection a souvent été pensée pour mieux exploiter (Colbert, Pinchot), et la préservation stricte a parfois exclu des populations.",
          method: "Retenez le triptyque du programme sous forme d'un exemple par verbe : exploiter (forêt pour la marine sous Colbert), préserver (Yellowstone et Muir), protéger (loi de 1960 et parcs nationaux). Un exemple bien maîtrisé vaut mieux que dix cités sans explication.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'changement-climatique',
          title: 'Le changement climatique : approches historique et géopolitique',
          minutes: 35,
          objectives: [
            "Expliquer comment les historiens reconstituent les climats du passé et leurs effets sur les sociétés.",
            "Retracer la construction du savoir scientifique sur le réchauffement climatique, de Fourier au GIEC.",
            "Analyser les négociations climatiques internationales, de Rio (1992) à l'accord de Paris (2015) et à ses suites.",
            "Identifier les acteurs et les rapports de force de la géopolitique du climat.",
          ],
          course: [
            {
              heading: "Le climat, objet d'histoire",
              paragraphs: [
                "Le climat désigne les conditions météorologiques moyennes d'un lieu sur une longue durée (au moins trente ans), alors que la météo décrit le temps qu'il fait à un moment donné. En 1967, l'historien Emmanuel Le Roy Ladurie publie Histoire du climat depuis l'an mil : il montre que le climat a une histoire que l'on peut reconstituer à partir des archives.",
                "Les historiens utilisent des sources écrites : dates des bans de vendanges (plus l'été est chaud, plus on vendange tôt), chroniques, registres paroissiaux, gravures montrant l'avancée des glaciers alpins. Ils les croisent avec les données des sciences de la nature : cernes des arbres (dendrochronologie), pollens, carottes de glace forées en Antarctique ou au Groenland, qui conservent des bulles d'air anciennes.",
                "On distingue ainsi un optimum climatique médiéval, puis un Petit Âge glaciaire, du XIVe au milieu du XIXe siècle, marqué par l'avancée des glaciers et des hivers rigoureux, comme le « Grand Hiver » de 1709 en France. L'éruption du volcan Tambora, en Indonésie, en avril 1815, provoque en 1816 une « année sans été » en Europe et en Amérique du Nord, avec de mauvaises récoltes. L'historien évite cependant le déterminisme : les effets du climat dépendent de la vulnérabilité des sociétés (techniques, échanges, organisation politique).",
              ],
              box: { label: "Définition", text: "Climat : ensemble des conditions météorologiques moyennes (températures, précipitations, vents) d'un lieu, calculées sur au moins trente ans. Petit Âge glaciaire : période plus froide, du XIVe au milieu du XIXe siècle environ, marquée par l'avancée des glaciers." },
            },
            {
              heading: "Comprendre le réchauffement : une construction scientifique",
              paragraphs: [
                "Le savoir sur l'effet de serre s'est construit sur deux siècles. En 1824, le mathématicien Joseph Fourier explique que l'atmosphère retient une partie de la chaleur de la Terre. Vers 1859, le physicien John Tyndall montre que la vapeur d'eau et le dioxyde de carbone absorbent le rayonnement infrarouge. En 1896, le chimiste suédois Svante Arrhenius calcule qu'un doublement du CO2 dans l'atmosphère réchaufferait la planète de plusieurs degrés.",
                "À partir de 1958, Charles David Keeling mesure en continu la concentration de CO2 à l'observatoire du Mauna Loa, à Hawaï : la « courbe de Keeling » montre une hausse régulière, d'environ 315 parties par million (ppm) en 1958 à plus de 420 ppm aujourd'hui. En 1988, l'Organisation météorologique mondiale et le PNUE créent le Groupe d'experts intergouvernemental sur l'évolution du climat (GIEC), qui ne fait pas lui-même de recherche mais synthétise les travaux publiés.",
                "Dans son sixième rapport (2021-2023), le GIEC juge « sans équivoque » le fait que l'influence humaine a réchauffé l'atmosphère, l'océan et les terres : la température moyenne de la décennie 2011-2020 dépasse d'environ 1,1 °C celle de la période 1850-1900. Selon l'Organisation météorologique mondiale, 2024 a été l'année la plus chaude jamais mesurée, et la première dont la moyenne a dépassé 1,5 °C au-dessus de l'époque préindustrielle.",
              ],
              box: { label: "À retenir", text: "Le GIEC (1988), créé par l'OMM et le PNUE, évalue l'état des connaissances scientifiques et publie des rapports qui servent de base aux négociations. Il a reçu le prix Nobel de la paix en 2007, avec Al Gore." },
            },
            {
              heading: "Négocier le climat : de Rio à Paris",
              paragraphs: [
                "Au sommet de la Terre de Rio, en 1992, est signée la Convention-cadre des Nations unies sur les changements climatiques (CCNUCC), entrée en vigueur en 1994. Elle pose le principe de « responsabilités communes mais différenciées » : tous les États sont concernés, mais les pays industrialisés, principaux émetteurs historiques, doivent agir en premier. Depuis 1995, les États se réunissent chaque année lors d'une Conférence des parties (COP).",
                "Le protocole de Kyoto (1997) impose aux seuls pays industrialisés de réduire leurs émissions d'au moins 5 % en moyenne entre 2008 et 2012 par rapport à 1990. Les États-Unis le signent mais ne le ratifient pas ; il n'entre en vigueur qu'en 2005. La COP15 de Copenhague (2009) échoue à lui donner une suite contraignante.",
                "L'accord de Paris, adopté à la COP21 le 12 décembre 2015, change de méthode. Tous les États, pays développés comme émergents, présentent des contributions déterminées au niveau national, révisées tous les cinq ans dans un sens plus ambitieux. L'objectif est de contenir le réchauffement nettement en dessous de 2 °C et de poursuivre les efforts pour le limiter à 1,5 °C. Mais aucune sanction n'est prévue. Depuis, la COP28 de Dubaï (2023) appelle pour la première fois à une transition hors des énergies fossiles, et la COP29 de Bakou (2024) fixe un objectif de financement climatique d'au moins 300 milliards de dollars par an d'ici 2035 pour les pays en développement.",
              ],
            },
            {
              heading: "Une géopolitique du climat",
              paragraphs: [
                "Les rapports de force sont complexes. La Chine est le premier émetteur mondial depuis le milieu des années 2000, avec près d'un tiers des émissions de CO2, mais aussi le premier producteur de panneaux solaires et de véhicules électriques. Les États-Unis sont le premier émetteur historique cumulé. L'Union européenne se veut pionnière, avec l'objectif de neutralité climatique en 2050 inscrit dans une loi européenne de 2021. Les pays producteurs de pétrole freinent les engagements sur les énergies fossiles.",
                "Les pays les plus vulnérables se font entendre : l'Alliance des petits États insulaires (AOSIS), créée en 1990, défend l'objectif de 1,5 °C, car la montée des eaux menace leur existence même. Ils obtiennent à la COP27 (Charm el-Cheikh, 2022) la création d'un fonds pour les « pertes et préjudices ». Des acteurs non étatiques pèsent aussi : villes, entreprises, ONG, mouvements de jeunes, et tribunaux, comme dans « l'Affaire du siècle », où la justice administrative française reconnaît en 2021 une faute de l'État dans la lutte contre le réchauffement.",
                "Le changement climatique transforme enfin la géographie de la puissance : fonte de la banquise arctique et ouverture de nouvelles routes maritimes, convoitise de ressources, déplacements de populations, tensions sur l'eau. C'est une question de justice entre pays, entre générations et entre groupes sociaux.",
              ],
              box: { label: "Repère", text: "1988 : GIEC. 1992 : CCNUCC à Rio. 1997 : protocole de Kyoto (en vigueur en 2005). 2009 : échec de Copenhague. 2015 : accord de Paris. 2023 : COP28, transition hors des énergies fossiles. 2024 : COP29, objectif de financement." },
            },
          ],
          keyPoints: [
            "Le climat a une histoire (Le Roy Ladurie, 1967) : optimum médiéval, Petit Âge glaciaire (XIVe-XIXe siècle), « année sans été » de 1816 après le Tambora.",
            "Le savoir scientifique s'est construit sur deux siècles : Fourier (1824), Arrhenius (1896), courbe de Keeling (1958), GIEC (1988).",
            "Le GIEC juge l'influence humaine « sans équivoque » ; 2011-2020 : environ +1,1 °C par rapport à 1850-1900 ; 2024, année la plus chaude mesurée.",
            "Négociations : CCNUCC (Rio, 1992), Kyoto (1997, seuls les pays industrialisés), Paris (2015, tous les États, contributions nationales, pas de sanction).",
            "Acteurs : Chine (premier émetteur), États-Unis (premier émetteur historique), UE, pays pétroliers, petits États insulaires, villes, ONG, tribunaux.",
          ],
          example: {
            statement: "Comparez le protocole de Kyoto (1997) et l'accord de Paris (2015) : qu'est-ce qui change dans la manière de négocier le climat ?",
            solution: [
              "Kyoto : seuls les pays industrialisés ont des obligations chiffrées (au moins 5 % de réduction en moyenne sur 2008-2012 par rapport à 1990), au nom des responsabilités différenciées.",
              "Limites de Kyoto : les États-Unis ne le ratifient pas, la Chine et l'Inde n'ont pas d'objectif, et l'entrée en vigueur n'intervient qu'en 2005.",
              "Paris : tous les États présentent des contributions nationales, révisées tous les cinq ans ; l'objectif commun est « nettement en dessous de 2 °C » et si possible 1,5 °C.",
              "Ce qui change : on passe d'objectifs imposés à une minorité d'États à des engagements volontaires de tous ; l'universalité est gagnée au prix de la contrainte.",
              "Conclusion : Paris est plus inclusif mais moins contraignant que Kyoto ; son efficacité dépend de la bonne volonté des États et de la pression des opinions publiques.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à son événement : 1824, 1896, 1958, 1988, 1992, 2015. Événements : a) création du GIEC ; b) accord de Paris ; c) Fourier explique le rôle de l'atmosphère dans la chaleur terrestre ; d) début des mesures de Keeling au Mauna Loa ; e) convention-cadre sur les changements climatiques à Rio ; f) calcul d'Arrhenius sur le doublement du CO2.",
              hint: "Trois dates concernent la science, trois concernent la politique internationale ; la science précède la politique.",
              solution: [
                "1824 : c) Fourier.",
                "1896 : f) Arrhenius.",
                "1958 : d) Keeling au Mauna Loa.",
                "1988 : a) création du GIEC.",
                "1992 : e) CCNUCC signée à Rio.",
                "2015 : b) accord de Paris, adopté le 12 décembre lors de la COP21.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez comment les historiens peuvent connaître le climat de la France au XVIIe et au XVIIIe siècle alors qu'il n'existait pas de mesures systématiques des températures. Citez au moins trois types de sources et expliquez pourquoi il faut les croiser.",
              hint: "Pensez aux archives des communautés rurales, aux paysages de montagne, puis aux sciences de la nature.",
              solution: [
                "Sources écrites : les bans de vendanges (date fixée chaque année par les autorités) ; une vendange précoce indique un été chaud, une vendange tardive un été frais.",
                "Témoignages : chroniques, registres paroissiaux (qui révèlent les crises de mortalité après de mauvaises récoltes, comme lors du Grand Hiver de 1709), gravures et tableaux montrant la position des glaciers.",
                "Données naturelles : cernes des arbres, pollens, carottes de glace qui enregistrent les variations du climat.",
                "Nécessité du croisement : chaque source a ses limites (une date de vendange dépend aussi des pratiques, une chronique peut exagérer) ; en confrontant des sources indépendantes, l'historien obtient une reconstitution fiable.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : présentation résumée des articles 2 et 4 de l'accord de Paris, adopté le 12 décembre 2015 lors de la COP21. L'article 2 fixe l'objectif de contenir l'élévation de la température moyenne de la planète nettement en dessous de 2 °C par rapport aux niveaux préindustriels et de poursuivre l'action menée pour la limiter à 1,5 °C. L'article 4 prévoit que chaque partie établit, communique et actualise des contributions déterminées au niveau national successives, communiquées tous les cinq ans, chaque nouvelle contribution devant représenter une progression. Consigne : montrez en quoi ce texte marque une étape dans la gouvernance mondiale du climat, puis discutez sa portée et ses limites.",
              hint: "Présentez le contexte (échec de Copenhague, rapports du GIEC), comparez avec Kyoto, puis pensez à ce qui s'est passé après 2015 (retraits des États-Unis, trajectoires d'émissions).",
              solution: [
                "Présentation : extrait d'un traité international adopté par consensus lors de la COP21, sous présidence française, après l'échec de Copenhague (2009) ; entré en vigueur en novembre 2016.",
                "Une étape : l'objectif de température est chiffré et fondé sur les travaux du GIEC ; l'ajout de 1,5 °C répond aux demandes des petits États insulaires.",
                "Une nouvelle méthode : contrairement à Kyoto, tous les États s'engagent, mais chacun fixe sa propre contribution ; le mécanisme de révision tous les cinq ans doit relever progressivement l'ambition.",
                "Portée : l'accord est quasi universel et sert de référence aux politiques nationales, aux entreprises et aux juges (Affaire du siècle, 2021).",
                "Limites : aucune sanction n'est prévue ; les contributions cumulées restent insuffisantes pour respecter l'objectif ; les États-Unis s'en retirent deux fois (retrait effectif en 2020, retour en 2021, nouveau retrait annoncé en janvier 2025) ; 2024 dépasse déjà 1,5 °C en moyenne annuelle.",
                "Bilan : l'accord de Paris est un succès diplomatique qui fonde une gouvernance mondiale du climat, mais son efficacité dépend de la volonté des États.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la connaissance et de la négociation du climat.",
            items: [
              "Fourier décrit le rôle de l'atmosphère (1824)",
              "Arrhenius calcule l'effet d'un doublement du CO2 (1896)",
              "Début de la courbe de Keeling au Mauna Loa (1958)",
              "Création du GIEC (1988)",
              "Convention-cadre sur les changements climatiques à Rio (1992)",
              "Protocole de Kyoto (1997)",
              "Accord de Paris (2015)",
            ],
          },
          quiz: [
            {
              q: "Quel historien publie en 1967 Histoire du climat depuis l'an mil ?",
              options: ["Fernand Braudel", "Emmanuel Le Roy Ladurie", "Jean-Baptiste Duroselle", "Pierre Nora"],
              answer: 1,
              why: "Emmanuel Le Roy Ladurie fonde l'histoire du climat en France en croisant archives et données naturelles.",
            },
            {
              q: "Quelle est la particularité du protocole de Kyoto ?",
              options: ["Il concerne tous les États", "Il fixe l'objectif de 1,5 °C", "Il a été ratifié par les États-Unis dès sa signature en 1997", "Il impose des réductions aux seuls pays industrialisés"],
              answer: 3,
              why: "Kyoto applique strictement les responsabilités différenciées : seuls les pays industrialisés ont des objectifs chiffrés.",
            },
            {
              q: "Le GIEC a été créé en 1988 par :",
              options: ["l'Union européenne", "la Banque mondiale", "l'OMM et le PNUE", "la conférence de Rio"],
              answer: 2,
              why: "L'Organisation météorologique mondiale et le Programme des Nations unies pour l'environnement créent le GIEC en 1988.",
            },
            {
              q: "Quelle coalition défend avec force l'objectif de 1,5 °C ?",
              options: ["L'Alliance des petits États insulaires", "L'OPEP", "Le groupe des grands pays industrialisés (G7)", "L'OTAN"],
              answer: 0,
              why: "Créée en 1990, l'AOSIS rassemble des États menacés par la montée des eaux, pour qui chaque dixième de degré compte.",
            },
            {
              q: "Quelle COP appelle pour la première fois à une transition hors des énergies fossiles ?",
              options: ["La COP21 de Paris", "La COP28 de Dubaï", "La COP15 de Copenhague", "La COP3 de Kyoto"],
              answer: 1,
              why: "En 2023, le texte final de la COP28 mentionne pour la première fois une transition hors des énergies fossiles.",
            },
          ],
          trap: "Confondre météo et climat, ou présenter le climat comme une cause qui déterminerait mécaniquement l'histoire : les effets d'un changement climatique dépendent toujours de la vulnérabilité et de l'organisation des sociétés.",
          method: "Pour retenir les négociations, comparez-les toujours avec les mêmes trois critères : qui s'engage, sur quel objectif, avec quelle contrainte. Ce tableau Kyoto-Paris vous fournit une analyse prête pour la dissertation comme pour l'étude critique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etats-unis-environnement',
          title: 'Les États-Unis et la question environnementale',
          minutes: 30,
          objectives: [
            "Analyser le rôle de l'État fédéral et des États fédérés dans les politiques environnementales des États-Unis.",
            "Expliquer les contrastes de la société américaine face à l'environnement : tradition de protection et modèle de forte consommation.",
            "Montrer l'attitude fluctuante des États-Unis dans les négociations environnementales internationales.",
          ],
          course: [
            {
              heading: "Une tradition ancienne de protection",
              paragraphs: [
                "Les États-Unis ont une tradition de protection de la nature sauvage (wilderness), portée au XIXe siècle par des écrivains comme Henry David Thoreau (Walden, 1854) et des naturalistes comme John Muir. Ils créent le premier parc national du monde, Yellowstone (1872). Le président Theodore Roosevelt (1901-1909), conseillé par Gifford Pinchot, place sous protection fédérale de très vastes forêts, et le National Park Service est créé en 1916.",
                "Une seconde vague arrive au tournant des années 1970, la « décennie de l'environnement ». Le National Environmental Policy Act, signé le 1er janvier 1970, oblige l'administration à évaluer l'impact environnemental de ses projets. Le président républicain Richard Nixon crée l'Agence de protection de l'environnement (EPA) en décembre 1970. Suivent le Clean Air Act (1970), le Clean Water Act (1972) et l'Endangered Species Act (1973), qui protège les espèces menacées. Le premier Earth Day, le 22 avril 1970, mobilise des millions d'Américains.",
              ],
              box: { label: "Repère", text: "1872 : Yellowstone. 1916 : National Park Service. 1970 : NEPA, Earth Day, création de l'EPA, Clean Air Act. 1972 : Clean Water Act. 1973 : Endangered Species Act." },
            },
            {
              heading: "Un modèle énergivore et une société divisée",
              paragraphs: [
                "Les États-Unis sont pourtant aussi le symbole d'un mode de vie très consommateur d'énergie : étalement urbain, usage massif de l'automobile, grandes maisons climatisées. Ils sont le deuxième émetteur mondial de gaz à effet de serre derrière la Chine et le premier émetteur historique cumulé ; leurs émissions par habitant sont parmi les plus élevées du monde, environ trois fois la moyenne mondiale.",
                "Grâce à l'exploitation des hydrocarbures de schiste par fracturation hydraulique, les États-Unis sont devenus le premier producteur mondial de gaz naturel, puis, en 2018, de pétrole, et enfin le premier exportateur de gaz naturel liquéfié. L'énergie fossile est une ressource de puissance et une source d'emplois dans des États comme le Texas, la Pennsylvanie ou le Dakota du Nord.",
                "La société est profondément divisée. La question climatique est devenue un marqueur partisan : les démocrates soutiennent davantage les politiques climatiques, alors qu'une partie des républicains doute de l'origine humaine du réchauffement et défend les énergies fossiles. Le mouvement pour la justice environnementale, né dans les années 1980, dénonce le fait que les pollutions touchent d'abord les quartiers pauvres et les minorités, comme lors de la crise de l'eau contaminée de Flint (Michigan) à partir de 2014.",
              ],
            },
            {
              heading: "État fédéral et États fédérés : des politiques à plusieurs échelles",
              paragraphs: [
                "Dans ce système fédéral, l'environnement dépend de plusieurs pouvoirs. L'EPA applique les lois votées par le Congrès, mais ses règles changent selon l'orientation du président. La Cour suprême arbitre : en 2007 (Massachusetts contre EPA), elle juge que les gaz à effet de serre sont des polluants que l'EPA peut réglementer ; en 2022 (Virginie-Occidentale contre EPA), elle limite au contraire la capacité de l'agence à transformer le secteur électrique sans loi explicite du Congrès.",
                "Les présidents se succèdent avec des politiques opposées. Barack Obama lance un plan pour réduire les émissions des centrales (2015) ; Donald Trump, lors de son premier mandat, en annule une grande partie ; Joe Biden fait adopter en 2022 l'Inflation Reduction Act, le plus important investissement fédéral pour le climat, fondé sur des crédits d'impôt aux énergies renouvelables. Revenu au pouvoir en 2025, Donald Trump défend la production d'hydrocarbures et une loi budgétaire de juillet 2025 réduit fortement ces crédits d'impôt.",
                "Les États fédérés mènent leurs propres politiques. La Californie, qui dispose depuis 1967 d'une agence de la qualité de l'air (CARB), impose des normes plus strictes que le niveau fédéral, adopte en 2006 une loi de réduction des émissions et crée un marché du carbone. Plusieurs États du Nord-Est forment depuis 2009 un marché commun du carbone (RGGI). En 2017, des gouverneurs fondent l'U.S. Climate Alliance pour respecter les objectifs de Paris malgré le retrait fédéral. Le Texas, grand producteur de pétrole, est aussi le premier producteur d'électricité éolienne du pays : les contrastes traversent chaque territoire.",
              ],
              box: { label: "À retenir", text: "Le fédéralisme permet aux États fédérés d'avancer quand l'État fédéral recule (Californie, U.S. Climate Alliance), mais il crée aussi des politiques instables et des conflits juridiques entre Washington et les États." },
            },
            {
              heading: "Les États-Unis dans la négociation mondiale : un acteur ambivalent",
              paragraphs: [
                "Les États-Unis ont parfois été moteurs : ils jouent un rôle décisif dans le protocole de Montréal (1987) sur la couche d'ozone, souvent cité comme le traité environnemental le plus efficace. Ils ratifient la convention-cadre sur le climat de 1992. Mais en 1997, le Sénat adopte à l'unanimité la résolution Byrd-Hagel, qui refuse tout traité imposant des réductions aux États-Unis sans engagement des grands pays en développement : le protocole de Kyoto, signé par l'administration Clinton, n'est jamais ratifié, et George W. Bush s'en retire en 2001. Les États-Unis n'ont pas non plus ratifié la convention sur la diversité biologique.",
                "L'accord de Paris doit beaucoup à l'accord bilatéral entre Barack Obama et Xi Jinping (novembre 2014). Obama l'approuve en 2016 par un accord exécutif, sans passer par le Sénat, où la majorité des deux tiers nécessaire pour ratifier un traité était hors d'atteinte. Cette fragilité explique l'alternance : Donald Trump annonce le retrait en juin 2017 (effectif en novembre 2020), Joe Biden y revient dès janvier 2021, et Donald Trump annonce un nouveau retrait le jour de sa seconde investiture, le 20 janvier 2025, effectif un an plus tard.",
              ],
            },
          ],
          keyPoints: [
            "Tradition de protection : Thoreau, Muir, Yellowstone (1872), National Park Service (1916) ; décennie 1970 : NEPA, EPA, Clean Air Act, Endangered Species Act.",
            "Contraste : premier émetteur historique, deuxième émetteur actuel, premier producteur mondial de pétrole et de gaz grâce au schiste.",
            "Fédéralisme : EPA et Cour suprême au niveau fédéral ; Californie, RGGI, U.S. Climate Alliance au niveau des États.",
            "Alternances présidentielles : Obama, Trump, Biden (Inflation Reduction Act, 2022), Trump à nouveau en 2025.",
            "International : moteur à Montréal (1987), Kyoto jamais ratifié, Paris rejoint, quitté, rejoint puis de nouveau quitté (annonce de janvier 2025).",
          ],
          example: {
            statement: "Expliquez pourquoi la participation des États-Unis aux accords climatiques internationaux est instable.",
            solution: [
              "Raison institutionnelle : un traité doit être ratifié par les deux tiers du Sénat ; faute de majorité, les présidents démocrates passent par des accords exécutifs, que leurs successeurs peuvent défaire.",
              "Raison politique : le climat est devenu un clivage partisan entre démocrates et républicains ; chaque alternance change l'orientation de la politique fédérale.",
              "Raison économique : les hydrocarbures pèsent lourd dans l'économie et dans certains États (Texas, Dakota du Nord), et les lobbies de l'énergie sont influents.",
              "Raison géopolitique : les États-Unis refusent des engagements que ne prendraient pas leurs concurrents, comme le montre la résolution Byrd-Hagel (1997) visant la Chine et l'Inde.",
              "Illustrations : Kyoto signé mais jamais ratifié, retrait annoncé en 2001 ; Paris quitté (2020), rejoint (2021), puis nouveau retrait annoncé en janvier 2025. Conclusion : l'instabilité tient à la combinaison des institutions et de la polarisation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les acteurs suivants selon leur échelle (fédérale, État fédéré, internationale) et indiquez leur rôle en une phrase : l'EPA ; le California Air Resources Board (CARB) ; la Cour suprême ; la Regional Greenhouse Gas Initiative (RGGI) ; la CCNUCC.",
              hint: "Demandez-vous si l'acteur agit pour tout le pays, pour un ou plusieurs États, ou pour l'ensemble des pays du monde.",
              solution: [
                "Échelle fédérale : l'EPA, créée en 1970, applique les lois environnementales votées par le Congrès ; la Cour suprême tranche les litiges, par exemple sur la compétence de l'EPA (2007, 2022).",
                "Échelle des États fédérés : le CARB, agence californienne créée en 1967, fixe des normes de qualité de l'air plus strictes ; la RGGI est un marché du carbone commun à plusieurs États du Nord-Est, en place depuis 2009.",
                "Échelle internationale : la CCNUCC, signée à Rio en 1992, organise les négociations climatiques et les COP.",
              ],
            },
            {
              level: 2,
              statement: "Montrez à l'aide de trois exemples que les États-Unis ont été tour à tour pionniers et freins dans la protection de l'environnement.",
              hint: "Choisissez un exemple de la fin du XIXe siècle ou des années 1970, un exemple de négociation internationale, et un exemple récent.",
              solution: [
                "Pionniers : création de Yellowstone en 1872, premier parc national au monde, puis grandes lois des années 1970 (EPA, Clean Air Act) qui inspirent d'autres pays.",
                "Moteur puis frein dans la diplomatie : rôle décisif dans le protocole de Montréal (1987), puis refus de ratifier Kyoto (résolution Byrd-Hagel en 1997, retrait annoncé en 2001).",
                "Alternance récente : Inflation Reduction Act de 2022 sous Joe Biden, puis retour de Donald Trump en 2025, nouveau retrait de l'accord de Paris et réduction des crédits d'impôt aux énergies renouvelables.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Les États-Unis et la question environnementale : tensions et contrastes depuis les années 1970 ». Proposez une introduction rédigée et un plan détaillé en trois parties.",
              hint: "Tensions : entre acteurs (fédéral, États, partis, entreprises) ; contrastes : entre une tradition de protection et un modèle énergivore.",
              solution: [
                "Accroche : le 22 avril 1970, le premier Earth Day mobilise des millions d'Américains ; la même année, Richard Nixon crée l'EPA.",
                "Définitions et bornes : la question environnementale regroupe la protection des milieux, la lutte contre les pollutions et le changement climatique ; on part des grandes lois des années 1970 jusqu'au second mandat de Donald Trump.",
                "Problématique : comment expliquer que la première puissance mondiale soit à la fois pionnière de la protection de l'environnement et l'un des principaux obstacles à la lutte contre le changement climatique ?",
                "I. Une puissance pionnière : héritage de la wilderness, lois des années 1970, rôle dans le protocole de Montréal (1987), Inflation Reduction Act (2022).",
                "II. Un modèle énergivore et une société divisée : émissions par habitant parmi les plus élevées, essor du pétrole et du gaz de schiste, polarisation partisane, injustices environnementales (Flint).",
                "III. Des politiques instables à toutes les échelles : alternances présidentielles et décisions de la Cour suprême, initiatives des États (Californie, RGGI, U.S. Climate Alliance), entrées et sorties des accords (Kyoto, Paris).",
                "Annonce : nous verrons d'abord la tradition de protection, puis les contradictions du modèle américain, enfin l'instabilité des politiques nationales et internationales.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les États-Unis et l'environnement.",
            statements: [
              { text: "L'EPA a été créée en 1970 par un président républicain, Richard Nixon.", true: true, why: "La protection de l'environnement faisait alors l'objet d'un large consensus entre les partis." },
              { text: "Les États-Unis ont ratifié le protocole de Kyoto en 1998.", true: false, why: "Signé par l'administration Clinton, il n'a jamais été soumis au vote du Sénat, qui l'aurait rejeté." },
              { text: "La Californie peut adopter des normes de qualité de l'air plus strictes que l'État fédéral.", true: true, why: "Grâce à des dérogations prévues par le Clean Air Act, ce qui en fait un laboratoire des politiques environnementales." },
              { text: "Les États-Unis sont aujourd'hui le premier émetteur annuel de gaz à effet de serre.", true: false, why: "La Chine les a dépassés au milieu des années 2000 ; les États-Unis restent le premier émetteur historique cumulé." },
              { text: "Le Texas est à la fois un grand État pétrolier et le premier producteur d'électricité éolienne du pays.", true: true, why: "C'est un bon exemple des contrastes américains." },
              { text: "Le retrait de l'accord de Paris annoncé en 2017 est devenu effectif immédiatement.", true: false, why: "Les règles de l'accord imposaient un délai : le retrait n'est devenu effectif qu'en novembre 2020." },
            ],
          },
          quiz: [
            {
              q: "Quelle agence fédérale est créée en 1970 ?",
              options: ["L'EPA", "Le National Park Service", "La NASA", "Le CARB"],
              answer: 0,
              why: "L'Agence de protection de l'environnement est créée en décembre 1970 ; le National Park Service date de 1916 et le CARB est une agence californienne.",
            },
            {
              q: "Que refuse la résolution Byrd-Hagel adoptée par le Sénat en 1997 ?",
              options: ["Toute aide financière américaine aux pays les plus pauvres du monde", "La création de parcs nationaux", "Un traité sans engagement des grands pays en développement", "Le protocole de Montréal"],
              answer: 2,
              why: "Le Sénat refuse à l'unanimité tout traité climatique qui imposerait des réductions aux États-Unis mais pas à la Chine ou à l'Inde.",
            },
            {
              q: "Quelle loi de 2022 constitue le plus important investissement fédéral pour le climat ?",
              options: ["Le Clean Air Act", "L'Inflation Reduction Act", "L'Endangered Species Act", "Le National Environmental Policy Act"],
              answer: 1,
              why: "Adopté sous Joe Biden, l'Inflation Reduction Act repose sur des crédits d'impôt massifs aux énergies bas carbone.",
            },
            {
              q: "Pourquoi Barack Obama approuve-t-il l'accord de Paris par un accord exécutif ?",
              options: ["Parce que l'accord n'était pas contraignant", "Parce que la Cour suprême lui interdit de saisir le Congrès", "Parce que la Chine l'exige", "Parce qu'il ne dispose pas des deux tiers du Sénat"],
              answer: 3,
              why: "La ratification d'un traité exige les deux tiers du Sénat, hors d'atteinte ; l'accord exécutif est plus fragile, car un successeur peut le défaire.",
            },
            {
              q: "Qu'est-ce que l'U.S. Climate Alliance, fondée en 2017 ?",
              options: ["Une agence fédérale", "Une coalition d'États fédérés", "Un lobby pétrolier", "Une ONG internationale de défense du climat"],
              answer: 1,
              why: "Des gouverneurs (Californie, New York, Washington) la fondent pour respecter les objectifs de Paris malgré le retrait annoncé par Donald Trump.",
            },
          ],
          trap: "Parler « des États-Unis » comme d'un acteur unique : il faut distinguer le président, le Congrès, la Cour suprême, les États fédérés, les villes, les entreprises et la société civile, qui ont souvent des positions opposées.",
          method: "Construisez une frise à deux étages pour 1970-2026 : en haut les décisions fédérales et les accords internationaux, en bas les initiatives des États fédérés. L'opposition visuelle entre les deux étages vous donne la problématique des « tensions et contrastes ».",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 6 · L'ENJEU DE LA CONNAISSANCE                                  */
    /* ==================================================================== */
    {
      id: 'enjeu-connaissance',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'societe-de-la-connaissance',
          title: 'La notion de société de la connaissance',
          minutes: 25,
          objectives: [
            "Définir et distinguer les notions d'information, de connaissance et de savoir.",
            "Expliquer l'émergence de la notion de société de la connaissance depuis les années 1960.",
            "Identifier les acteurs qui produisent et font circuler les connaissances : communautés savantes, États, universités, entreprises.",
            "Expliquer pourquoi la connaissance est devenue un facteur de puissance et d'inégalités.",
          ],
          course: [
            {
              heading: "Information, connaissance, savoir",
              paragraphs: [
                "Ces trois mots ne sont pas synonymes. Une information est une donnée mise en forme et transmise : « il a fait 18 °C hier à Lyon ». Une connaissance suppose qu'un esprit s'approprie des informations, les comprend, les relie entre elles et peut s'en servir : savoir expliquer pourquoi les températures moyennes augmentent. Un savoir est un ensemble organisé de connaissances, reconnu et transmis par une communauté, comme la climatologie ou la médecine.",
                "Une bibliothèque contient d'innombrables informations, mais elle ne « connaît » rien : seul le lecteur qui comprend ce qu'il lit acquiert une connaissance. C'est pourquoi l'abondance d'informations, à l'ère d'Internet, ne produit pas automatiquement une société plus savante : elle peut même conduire à la saturation et à la diffusion de fausses nouvelles.",
                "La connaissance scientifique se distingue par sa méthode : hypothèses, expériences, observations reproductibles, publication et critique par les pairs. Le sociologue Robert K. Merton décrit en 1942 les normes de la communauté scientifique : les résultats appartiennent à tous, ils sont jugés selon des critères universels (et non selon l'origine du chercheur), le chercheur doit être désintéressé, et toute affirmation est soumise au doute organisé.",
              ],
              box: { label: "Définition", text: "Information : donnée mise en forme et transmise. Connaissance : information comprise, reliée et mobilisable par un esprit. Savoir : ensemble organisé et validé de connaissances, partagé par une communauté. Société de la connaissance : société où la production, la diffusion et l'usage des connaissances deviennent le moteur de l'économie, du pouvoir et de la vie sociale." },
            },
            {
              heading: "La naissance d'une notion (années 1960-2000)",
              paragraphs: [
                "L'économiste Fritz Machlup mesure dès 1962, dans La Production et la distribution de la connaissance aux États-Unis, la part croissante de l'économie consacrée à produire et diffuser des connaissances (éducation, recherche, médias, informatique). En 1969, Peter Drucker emploie l'expression de « société de la connaissance » dans The Age of Discontinuity. En 1973, le sociologue Daniel Bell annonce l'avènement d'une société postindustrielle, où le savoir théorique et les services l'emportent sur l'industrie.",
                "La révolution numérique des années 1980-1990 donne une nouvelle force à la notion. En mars 2000, l'Union européenne fixe à Lisbonne l'objectif de devenir « l'économie de la connaissance la plus compétitive et la plus dynamique du monde ». En 2005, le rapport mondial de l'UNESCO Vers les sociétés du savoir insiste sur le pluriel : il n'y a pas un modèle unique, et l'enjeu est l'accès de tous au savoir, contre la « fracture numérique » et la « fracture cognitive ».",
              ],
              box: { label: "Repère", text: "1962 : Machlup mesure l'économie de la connaissance. 1969 : Drucker, « société de la connaissance ». 1973 : Bell, société postindustrielle. 2000 : stratégie de Lisbonne. 2005 : rapport de l'UNESCO, Vers les sociétés du savoir." },
            },
            {
              heading: "Communautés savantes et circulation des connaissances",
              paragraphs: [
                "Les communautés savantes sont anciennes. Du XVIe au XVIIIe siècle, la « République des Lettres » relie par la correspondance des érudits de toute l'Europe, qui échangent livres, observations et débats par-delà les frontières et les confessions. Au XVIIe siècle naissent les académies, comme la Royal Society à Londres (1660) et l'Académie des sciences à Paris (1666), ainsi que les premières revues savantes, le Journal des savants et les Philosophical Transactions (1665).",
                "Au XVIIIe siècle, l'Encyclopédie de Diderot et d'Alembert (1751-1772) cherche à rassembler et à diffuser l'ensemble des connaissances de son temps, y compris les techniques. Aux XIXe et XXe siècles, la communauté scientifique s'internationalise : congrès, conférences comme celles de l'institut Solvay à Bruxelles à partir de 1911, laboratoires accueillant des chercheurs étrangers. On parle de transferts de connaissances lorsqu'un savoir passe d'un pays, d'une institution ou d'un domaine à un autre.",
              ],
            },
            {
              heading: "La connaissance, facteur de puissance et d'inégalités",
              paragraphs: [
                "Dans une société de la connaissance, la puissance d'un État dépend de sa capacité à former, à innover et à attirer les talents. Plusieurs indicateurs la mesurent : la part du PIB consacrée à la recherche et développement (plus de 4 % en Israël et en Corée du Sud, un peu plus de 2 % en France, alors que l'Union européenne vise 3 %), le nombre de brevets (l'office chinois des brevets est devenu en 2011 le premier du monde), le rang des universités dans les classements internationaux, comme celui de Shanghai publié depuis 2003.",
                "La connaissance est aussi source d'inégalités : entre pays qui produisent les savoirs et pays qui les importent, entre ceux qui ont accès à Internet et à l'école et ceux qui en sont privés, entre pays qui attirent les cerveaux et pays qui les voient partir. La « fuite des cerveaux » prive des pays en développement de leurs diplômés, même si l'on parle de plus en plus de circulation des cerveaux, lorsque ces diplômés reviennent ou gardent des liens avec leur pays d'origine.",
              ],
            },
          ],
          keyPoints: [
            "Information (donnée transmise), connaissance (information comprise et mobilisable), savoir (ensemble organisé et validé par une communauté).",
            "Société de la connaissance : la production et la diffusion des connaissances deviennent le moteur de l'économie et du pouvoir.",
            "Repères : Machlup (1962), Drucker (1969), Bell (1973), stratégie de Lisbonne (2000), rapport de l'UNESCO (2005).",
            "Communautés savantes : République des Lettres, académies (1660, 1666), revues (1665), Encyclopédie (1751-1772), conférences Solvay (1911).",
            "La connaissance est un facteur de puissance (recherche, brevets, universités) et d'inégalités (fractures numérique et cognitive, fuite des cerveaux).",
          ],
          example: {
            statement: "Pourquoi l'UNESCO parle-t-elle en 2005 de « sociétés du savoir » au pluriel plutôt que de « société de l'information » ?",
            solution: [
              "Rappeler la distinction : l'information est une donnée transmise, le savoir suppose une appropriation, une compréhension et une validation.",
              "Premier argument : multiplier les informations (grâce au numérique) ne suffit pas à rendre une société plus savante ; il faut éducation, esprit critique et institutions de recherche.",
              "Deuxième argument : le pluriel refuse un modèle unique, venu des pays riches ; chaque société a ses propres savoirs (y compris des savoirs traditionnels) et ses propres besoins.",
              "Troisième argument : l'UNESCO met l'accent sur l'accès de tous au savoir et dénonce la fracture numérique et la fracture cognitive entre pays et au sein des sociétés.",
              "Conclure : le rapport défend une conception plus humaniste et plus égalitaire que celle de l'économie de la connaissance centrée sur la compétitivité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des éléments suivants, indiquez s'il s'agit d'une information, d'une connaissance ou d'un savoir : a) un capteur enregistre 420 ppm de CO2 dans l'air ; b) la climatologie, discipline enseignée à l'université ; c) une élève est capable d'expliquer comment l'augmentation du CO2 renforce l'effet de serre ; d) un article de presse annonce la publication d'un nouveau rapport du GIEC.",
              hint: "Demandez-vous si l'élément est simplement transmis, s'il est compris et utilisable par une personne, ou s'il forme un ensemble organisé reconnu par une communauté.",
              solution: [
                "a) Information : c'est une donnée mesurée et transmise, sans interprétation.",
                "b) Savoir : la climatologie est un ensemble organisé et validé de connaissances, partagé par une communauté scientifique et enseigné.",
                "c) Connaissance : l'élève s'est approprié des informations, les relie et peut les expliquer.",
                "d) Information : l'article transmet une nouvelle ; il ne devient connaissance que si le lecteur comprend et s'approprie le contenu du rapport.",
              ],
            },
            {
              level: 2,
              statement: "Montrez, à l'aide de trois indicateurs, que la connaissance est devenue un facteur de puissance pour les États. Pour chaque indicateur, donnez un exemple.",
              hint: "Pensez à l'argent consacré à la recherche, à la protection des inventions et à l'attractivité des universités.",
              solution: [
                "Effort de recherche : la part du PIB consacrée à la recherche et développement dépasse 4 % en Israël et en Corée du Sud, deux pays dont la puissance repose largement sur l'innovation technologique.",
                "Brevets : depuis 2011, l'office chinois des brevets est le premier du monde, signe de la montée en puissance technologique de la Chine.",
                "Universités : les classements internationaux (Shanghai, depuis 2003) sont dominés par les universités américaines ; les États-Unis accueillent plus d'un million d'étudiants étrangers, ce qui leur permet d'attirer des talents et de diffuser leur influence.",
                "Conclusion : la puissance ne repose plus seulement sur les armées et les ressources naturelles, mais aussi sur la capacité à produire, protéger et attirer les connaissances.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Peut-on parler d'une société mondiale de la connaissance ? ». Proposez une problématique et un plan détaillé en deux ou trois parties.",
              hint: "Le sujet invite à confronter une tendance réelle (circulation mondiale des savoirs) et des limites (inégalités, contrôles).",
              solution: [
                "Problématique : la circulation accélérée des connaissances depuis la fin du XXe siècle a-t-elle produit une société de la connaissance à l'échelle du monde, ou les savoirs restent-ils inégalement produits, partagés et contrôlés ?",
                "I. Une circulation mondiale des connaissances : héritage des communautés savantes (République des Lettres, conférences Solvay), Internet et numérique, mobilité des étudiants, coopération scientifique (GIEC), stratégies de Lisbonne (2000) et rapport de l'UNESCO (2005).",
                "II. Une production très inégale : concentration de la recherche et des brevets dans quelques pays (États-Unis, Chine, Europe, Japon, Corée du Sud) ; fuite des cerveaux ; fractures numérique et cognitive ; inégalités d'accès à l'école, notamment pour les filles.",
                "III. Une connaissance contrôlée et disputée : rivalités technologiques entre puissances, renseignement, censure dans certains États, désinformation.",
                "Conclusion : il existe un espace mondial de la connaissance, mais il est hiérarchisé ; mieux vaut parler, avec l'UNESCO, de sociétés du savoir au pluriel.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque auteur ou institution à son apport.",
            pairs: [
              { left: "Fritz Machlup (1962)", right: "Mesure de la part de l'économie consacrée à la connaissance" },
              { left: "Peter Drucker (1969)", right: "Expression « société de la connaissance »" },
              { left: "Daniel Bell (1973)", right: "La société postindustrielle" },
              { left: "Robert K. Merton (1942)", right: "Les normes de la communauté scientifique" },
              { left: "Conseil européen de Lisbonne (2000)", right: "Devenir l'économie de la connaissance la plus compétitive" },
              { left: "UNESCO (2005)", right: "Vers les sociétés du savoir, au pluriel" },
            ],
          },
          quiz: [
            {
              q: "Quel auteur popularise en 1969 l'expression « société de la connaissance » ?",
              options: ["Daniel Bell", "Robert K. Merton", "Peter Drucker", "Fritz Machlup"],
              answer: 2,
              why: "Peter Drucker l'emploie dans The Age of Discontinuity (1969) ; Machlup avait mesuré l'économie de la connaissance dès 1962.",
            },
            {
              q: "Une connaissance se distingue d'une information parce qu'elle :",
              options: ["est toujours numérique", "est comprise et peut être mobilisée", "est forcément scientifique", "est protégée par un brevet déposé par son auteur"],
              answer: 1,
              why: "L'information est transmise ; la connaissance suppose qu'un esprit se l'approprie, la relie à d'autres et sache s'en servir.",
            },
            {
              q: "Quelle institution parisienne est fondée en 1666 ?",
              options: ["La Royal Society", "Le Collège royal, futur Collège de France", "L'École polytechnique", "L'Académie des sciences"],
              answer: 3,
              why: "L'Académie des sciences est fondée en 1666 à l'initiative de Colbert ; la Royal Society est londonienne (1660).",
            },
            {
              q: "Quel objectif l'Union européenne se fixe-t-elle à Lisbonne en 2000 ?",
              options: ["Devenir l'économie de la connaissance la plus compétitive", "Supprimer les universités nationales", "Créer un brevet mondial unique", "Interdire la fuite des cerveaux"],
              answer: 0,
              why: "La stratégie de Lisbonne vise à faire de l'Union l'économie de la connaissance la plus compétitive et la plus dynamique du monde.",
            },
            {
              q: "Que désigne la « fracture cognitive » évoquée par l'UNESCO ?",
              options: ["Un trouble de l'apprentissage", "Le manque d'ordinateurs dans les écoles", "Les inégalités d'accès au savoir et à sa maîtrise", "La rivalité entre universités"],
              answer: 2,
              why: "Au-delà de l'accès matériel au numérique, elle désigne les inégalités dans la capacité à accéder aux savoirs, à les comprendre et à les utiliser.",
            },
          ],
          trap: "Confondre société de l'information et société de la connaissance : multiplier les données disponibles ne suffit pas, il faut des institutions (écoles, universités, laboratoires) qui transforment l'information en savoir.",
          method: "Apprenez la notion avec trois auteurs et trois dates (Machlup 1962, Drucker 1969, UNESCO 2005) et un indicateur chiffré sûr : en introduction de dissertation, ils suffisent à montrer que la notion a une histoire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'produire-diffuser-connaissances',
          title: 'Produire et diffuser des connaissances',
          minutes: 35,
          objectives: [
            "Retracer les grandes étapes de l'alphabétisation des femmes du XVIe siècle à nos jours.",
            "Expliquer comment s'est construite la connaissance de la radioactivité, de 1896 aux années 1940.",
            "Analyser le fonctionnement d'une communauté savante : coopération, compétition, circulation des chercheurs.",
            "Identifier les obstacles à la diffusion des connaissances.",
          ],
          course: [
            {
              heading: "Apprendre à lire et à écrire : les femmes, du XVIe au XVIIIe siècle",
              paragraphs: [
                "L'alphabétisation des femmes est un bon observatoire de l'accès au savoir. Au XVIe siècle, la Réforme protestante encourage la lecture de la Bible par chaque fidèle, hommes et femmes : Luther plaide pour des écoles ouvertes aux filles comme aux garçons. Les régions protestantes d'Europe du Nord connaissent ainsi des taux d'alphabétisation plus élevés.",
                "La Réforme catholique répond par des congrégations enseignantes, comme les Ursulines, fondées en Italie en 1535 et très présentes en France au XVIIe siècle, qui instruisent les filles. Mais l'instruction féminine reste limitée et orientée vers la religion et le rôle domestique, comme le montre le traité De l'éducation des filles de Fénelon (1687).",
                "Les historiens mesurent l'alphabétisation grâce aux signatures sur les actes de mariage. L'enquête menée à la fin du XIXe siècle par le recteur Louis Maggiolo, reprise par François Furet et Jacques Ozouf, montre qu'en France, vers 1686-1690, environ 29 % des hommes et 14 % des femmes signent leur acte de mariage ; vers 1786-1790, ils sont environ 47 % et 27 %. Le progrès est réel, mais l'écart entre les sexes demeure, ainsi qu'un fort contraste entre le nord-est et le sud-ouest du royaume.",
              ],
            },
            {
              heading: "XIXe-XXIe siècle : l'école des filles, un long combat",
              paragraphs: [
                "En France, la loi Guizot (1833) impose une école de garçons dans chaque commune de plus de 500 habitants. Les filles suivent plus tard : la loi Falloux (1850) impose une école de filles dans les communes de plus de 800 habitants, la loi Duruy (1867) abaisse ce seuil à 500. En 1861, Julie-Victoire Daubié est la première femme à obtenir le baccalauréat. La loi Camille Sée (1880) crée les lycées de jeunes filles, et les lois Ferry (1881-1882) rendent l'école primaire gratuite, obligatoire de 6 à 13 ans et laïque pour les filles comme pour les garçons. En 1924, le décret Bérard aligne l'enseignement secondaire des filles sur celui des garçons.",
                "À l'échelle mondiale, la Déclaration universelle des droits de l'homme (1948) affirme dans son article 26 le droit de toute personne à l'éducation. L'UNESCO, créée en 1945, mène des campagnes d'alphabétisation, et les objectifs de l'ONU (2000, puis 2015) visent l'éducation pour tous. L'alphabétisation des femmes a beaucoup progressé, mais elles représentent encore près des deux tiers des adultes analphabètes dans le monde.",
                "L'accès des filles au savoir reste un enjeu politique. En Afghanistan, les talibans interdisent l'enseignement secondaire aux filles depuis 2021, puis l'université aux femmes en 2022. La Pakistanaise Malala Yousafzai, blessée par balle en 2012 pour avoir défendu l'éducation des filles, reçoit le prix Nobel de la paix en 2014.",
              ],
              box: { label: "Repère", text: "1833 : loi Guizot (garçons). 1850 : loi Falloux (filles, plus de 800 habitants). 1861 : Julie-Victoire Daubié, première bachelière. 1867 : loi Duruy. 1880 : loi Camille Sée. 1881-1882 : lois Ferry. 1924 : décret Bérard. 1948 : article 26 de la DUDH." },
            },
            {
              heading: "La radioactivité : une découverte collective (1896-1939)",
              paragraphs: [
                "En 1896, Henri Becquerel découvre que les sels d'uranium émettent spontanément un rayonnement capable d'impressionner une plaque photographique. Marie Curie en fait le sujet de sa thèse ; avec Pierre Curie, elle découvre en 1898 deux nouveaux éléments, le polonium et le radium, et forge le mot « radioactivité ». Becquerel et les Curie reçoivent le prix Nobel de physique en 1903 ; Marie Curie obtient seule le prix Nobel de chimie en 1911.",
                "La recherche est internationale. Le Britannique Ernest Rutherford, qui travaille au Canada puis en Angleterre, distingue les rayonnements alpha et bêta (1899) et découvre le noyau atomique (1911). Le Britannique James Chadwick découvre le neutron en 1932. En janvier 1934, Irène et Frédéric Joliot-Curie découvrent la radioactivité artificielle (prix Nobel de chimie 1935). L'Italien Enrico Fermi bombarde des noyaux avec des neutrons.",
                "En décembre 1938, à Berlin, Otto Hahn et Fritz Strassmann observent que l'uranium bombardé par des neutrons se scinde ; Lise Meitner, physicienne autrichienne d'origine juive réfugiée en Suède, et Otto Frisch en donnent l'interprétation au début de 1939 et parlent de « fission ». Au printemps 1939, à Paris, Frédéric Joliot, Hans Halban et Lew Kowarski montrent que la fission libère des neutrons, ce qui rend possible une réaction en chaîne. La communauté savante fonctionne par la publication, les congrès (conférences Solvay), les échanges de chercheurs, mais aussi par une forte compétition pour la priorité des découvertes.",
              ],
              box: { label: "À retenir", text: "Une communauté savante produit des connaissances par la coopération (publications, congrès, laboratoires ouverts aux étrangers) et par la compétition (course à la priorité, prix Nobel). Les découvertes y sont rarement l'œuvre d'un seul savant." },
            },
            {
              heading: "De la science ouverte au secret d'État (1939-1945)",
              paragraphs: [
                "La guerre transforme la circulation des savoirs. Dès 1933, les persécutions nazies poussent des savants juifs ou opposants à l'exil, comme Albert Einstein ; Fermi quitte l'Italie fasciste en 1938. En août 1939, une lettre signée par Einstein, rédigée avec Leó Szilárd, alerte le président Roosevelt sur la possibilité d'une bombe fondée sur la réaction en chaîne. Joliot et son équipe déposent des brevets en mai 1939 ; en 1940, la France fait venir de Norvège un stock d'eau lourde, que Halban et Kowarski emportent en Grande-Bretagne lors de la défaite.",
                "Le projet Manhattan, lancé en 1942 par les États-Unis avec le Royaume-Uni et le Canada, mobilise des milliers de scientifiques sous la direction du général Groves et du physicien Robert Oppenheimer. Le premier essai a lieu le 16 juillet 1945 au Nouveau-Mexique ; les bombes d'Hiroshima (6 août) et de Nagasaki (9 août) suivent. La science, auparavant publiée et partagée, devient un secret d'État. En France, le Commissariat à l'énergie atomique est créé dès le 18 octobre 1945.",
              ],
            },
          ],
          keyPoints: [
            "La Réforme encourage la lecture pour tous ; en France, les signatures au mariage passent d'environ 29 % (hommes) et 14 % (femmes) vers 1690 à 47 % et 27 % vers 1790.",
            "Lois scolaires : Guizot (1833), Falloux (1850), Duruy (1867), Camille Sée (1880), Ferry (1881-1882), décret Bérard (1924).",
            "Les femmes représentent encore près des deux tiers des adultes analphabètes ; l'accès des filles à l'école reste un enjeu politique (Afghanistan, Malala).",
            "Radioactivité : Becquerel (1896), les Curie (1898), Rutherford (noyau, 1911), Chadwick (neutron, 1932), Joliot-Curie (1934), fission (1938-1939).",
            "La guerre fait passer la science de la publication ouverte au secret : lettre d'Einstein (1939), projet Manhattan (1942), Hiroshima (1945).",
          ],
          example: {
            statement: "Montrez que la découverte de la radioactivité est l'œuvre d'une communauté savante internationale.",
            solution: [
              "Point de départ : Henri Becquerel découvre en 1896 le rayonnement de l'uranium à Paris.",
              "Prolongements français : Marie et Pierre Curie découvrent le polonium et le radium (1898) ; Marie Curie, d'origine polonaise, illustre la circulation des savants.",
              "Contributions étrangères : Rutherford, Néo-Zélandais travaillant au Canada et en Angleterre, découvre le noyau (1911) ; Chadwick le neutron (1932) ; Hahn et Strassmann, à Berlin, la fission (1938), interprétée par Lise Meitner et Otto Frisch.",
              "Fonctionnement : les chercheurs publient leurs résultats dans des revues, se réunissent lors des conférences Solvay, se lisent et se répondent ; la reconnaissance passe par les prix Nobel (1903, 1911, 1935).",
              "Conclusion : la radioactivité est une construction collective et internationale, faite de coopération et de compétition, avant que la guerre ne referme cette communauté sur le secret.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque savant à sa contribution : Henri Becquerel ; Marie et Pierre Curie ; Ernest Rutherford ; James Chadwick ; Irène et Frédéric Joliot-Curie ; Otto Hahn et Fritz Strassmann. Contributions : a) découverte du neutron (1932) ; b) découverte de la fission de l'uranium (1938) ; c) découverte du rayonnement de l'uranium (1896) ; d) radioactivité artificielle (1934) ; e) polonium et radium (1898) ; f) découverte du noyau atomique (1911).",
              hint: "Suivez l'ordre chronologique : chaque découverte s'appuie sur la précédente.",
              solution: [
                "Henri Becquerel : c) rayonnement de l'uranium (1896).",
                "Marie et Pierre Curie : e) polonium et radium (1898).",
                "Ernest Rutherford : f) noyau atomique (1911).",
                "James Chadwick : a) neutron (1932).",
                "Irène et Frédéric Joliot-Curie : d) radioactivité artificielle (1934).",
                "Otto Hahn et Fritz Strassmann : b) fission de l'uranium (1938), interprétée par Lise Meitner et Otto Frisch.",
              ],
            },
            {
              level: 2,
              statement: "D'après l'enquête Maggiolo, environ 29 % des hommes et 14 % des femmes signent leur acte de mariage en France vers 1686-1690, et environ 47 % des hommes et 27 % des femmes vers 1786-1790. a) Calculez l'écart en points entre hommes et femmes aux deux dates. b) Calculez par combien le taux est multiplié pour chaque sexe (arrondi au centième). c) L'inégalité entre hommes et femmes a-t-elle augmenté ou diminué ? Nuancez.",
              hint: "Un écart en points est une soustraction ; un coefficient multiplicateur est une division. Comparez aussi le rapport entre le taux des femmes et celui des hommes.",
              solution: [
                "a) Vers 1686-1690 : 29 - 14 = 15 points d'écart. Vers 1786-1790 : 47 - 27 = 20 points d'écart.",
                "b) Hommes : 47 ÷ 29 ≈ 1,62. Femmes : 27 ÷ 14 ≈ 1,93.",
                "c) En points, l'écart augmente (de 15 à 20 points). Mais le taux des femmes progresse plus vite (presque doublé) que celui des hommes.",
                "Le rapport entre les taux le confirme : 14 ÷ 29 ≈ 0,48 vers 1690, 27 ÷ 47 ≈ 0,57 vers 1790. Les femmes rattrapent donc relativement les hommes, même si l'écart absolu s'accroît.",
                "Nuance : savoir signer ne signifie pas forcément savoir écrire couramment, et les moyennes nationales cachent de forts contrastes régionaux et sociaux.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Produire de la connaissance scientifique : la communauté savante face à la radioactivité, de 1896 aux années 1940 ». Proposez une problématique et un plan détaillé en trois parties.",
              hint: "Montrez une communauté ouverte et internationale, puis ses rivalités, enfin sa transformation par la guerre.",
              solution: [
                "Problématique : comment la communauté savante a-t-elle produit en un demi-siècle la connaissance de la radioactivité, et comment cette production, d'abord ouverte et internationale, est-elle devenue un enjeu de puissance pour les États ?",
                "I. Une découverte collective et internationale (1896-1932) : Becquerel (1896), les Curie (1898), Rutherford (1899, 1911), publications, conférences Solvay (à partir de 1911), prix Nobel (1903, 1911), Institut du radium à Paris.",
                "II. Coopération et compétition (1932-1939) : course entre laboratoires de Paris, Rome, Berlin et Cambridge ; neutron (1932), radioactivité artificielle (1934), fission (1938) et réaction en chaîne (1939) ; exil des savants persécutés par les nazis.",
                "III. La science devient secret d'État (1939-1945) : lettre d'Einstein à Roosevelt (1939), brevets de Joliot (1939), eau lourde (1940), projet Manhattan (1942), Hiroshima et Nagasaki (1945), création du CEA en France (1945).",
                "Conclusion : la radioactivité montre à la fois la force d'une communauté savante internationale et sa fragilité face aux logiques de puissance des États.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la connaissance de la radioactivité.",
            items: [
              "Becquerel découvre le rayonnement de l'uranium (1896)",
              "Marie et Pierre Curie découvrent le polonium et le radium (1898)",
              "Rutherford découvre le noyau atomique (1911)",
              "Chadwick découvre le neutron (1932)",
              "Les Joliot-Curie découvrent la radioactivité artificielle (1934)",
              "Hahn et Strassmann observent la fission de l'uranium (1938)",
              "Lancement du projet Manhattan (1942)",
            ],
          },
          quiz: [
            {
              q: "Quelle loi crée les lycées de jeunes filles en France ?",
              options: ["La loi Guizot (1833)", "La loi Falloux (1850)", "La loi Duruy (1867)", "La loi Camille Sée (1880)"],
              answer: 3,
              why: "La loi Camille Sée du 21 décembre 1880 crée un enseignement secondaire public pour les filles.",
            },
            {
              q: "Qui est la première femme à obtenir le baccalauréat en France, en 1861 ?",
              options: ["Julie-Victoire Daubié", "Marie Curie", "Louise Michel", "Olympe de Gouges"],
              answer: 0,
              why: "Julie-Victoire Daubié obtient le baccalauréat à Lyon en 1861 ; Marie Curie arrive en France en 1891.",
            },
            {
              q: "Quel savant forge, avec Pierre Curie, le mot « radioactivité » ?",
              options: ["Henri Becquerel", "Irène Joliot-Curie", "Marie Curie", "Lise Meitner"],
              answer: 2,
              why: "Marie Curie emploie le terme en 1898, l'année de la découverte du polonium et du radium.",
            },
            {
              q: "Qui interprète la fission de l'uranium au début de 1939 ?",
              options: ["Enrico Fermi et Leó Szilárd", "Lise Meitner et Otto Frisch", "Albert Einstein seul", "James Chadwick et Ernest Rutherford"],
              answer: 1,
              why: "Hahn et Strassmann observent le phénomène à Berlin ; Lise Meitner, réfugiée en Suède, et Otto Frisch l'expliquent et le nomment fission.",
            },
            {
              q: "Quelle part des adultes analphabètes dans le monde sont des femmes ?",
              options: ["Près des deux tiers", "Environ un quart", "La moitié exactement", "Moins d'un dixième"],
              answer: 0,
              why: "Selon l'UNESCO, les femmes représentent près des deux tiers des adultes qui ne savent ni lire ni écrire.",
            },
          ],
          trap: "Attribuer la radioactivité à un savant isolé (souvent Marie Curie seule) : le programme attend que vous montriez le fonctionnement collectif, international et concurrentiel d'une communauté savante.",
          method: "Pour chaque jalon, préparez une frise courte avec cinq dates et un chiffre sûr : pour l'alphabétisation, les taux de l'enquête Maggiolo ; pour la radioactivité, les trois prix Nobel (1903, 1911, 1935). Ces repères précis distinguent une bonne copie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'connaissance-enjeu-politique',
          title: 'La connaissance, enjeu politique et géopolitique',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi les États cherchent à contrôler, protéger et capter les connaissances.",
            "Analyser le rôle du renseignement durant la guerre froide, à travers les services américains et soviétiques.",
            "Montrer comment l'Inde mise sur la formation, la circulation des étudiants et les transferts de technologie pour affirmer sa puissance.",
          ],
          course: [
            {
              heading: "Savoir, c'est pouvoir : contrôler, protéger, capter",
              paragraphs: [
                "Les pouvoirs ont toujours cherché à contrôler la connaissance. L'Église catholique publie de 1559 à 1966 un Index des livres interdits. En Union soviétique, à partir de 1948, l'agronome Trofim Lyssenko impose avec le soutien de Staline une biologie conforme à l'idéologie, et la génétique est interdite pendant des années : la science est soumise au politique, avec des conséquences désastreuses pour l'agriculture.",
                "Les États protègent aussi les savoirs stratégiques : secret défense, contrôle des exportations de technologies sensibles, lutte contre l'espionnage industriel. Ils cherchent enfin à capter les connaissances des autres. En 1945, l'opération Paperclip permet aux États-Unis de recruter des centaines de scientifiques allemands, dont l'ingénieur Wernher von Braun, futur architecte de la fusée qui emmène les Américains sur la Lune ; l'URSS fait de même dans sa zone d'occupation.",
              ],
              box: { label: "Définition", text: "Renseignement : recherche, collecte et analyse d'informations, souvent secrètes, pour éclairer les décisions d'un État. Il peut être humain (espions, informateurs) ou technique (écoutes, photographies aériennes, satellites)." },
            },
            {
              heading: "Le renseignement au cœur de la guerre froide",
              paragraphs: [
                "La guerre froide est une guerre de l'information. Les États-Unis créent la CIA en 1947 par le National Security Act, puis la NSA en 1952 pour les écoutes et le déchiffrement. L'URSS réorganise ses services en 1954 avec la création du KGB, à côté du renseignement militaire (GRU). Leur but : connaître les capacités et les intentions de l'adversaire, et l'empêcher de connaître les siennes.",
                "L'espionnage atomique montre l'enjeu. Grâce à des informateurs infiltrés dans le projet Manhattan, comme le physicien Klaus Fuchs, l'URSS gagne du temps : elle réalise sa première bombe le 29 août 1949, plus tôt que ne l'attendaient les Américains. Les époux Rosenberg, accusés d'espionnage au profit de l'URSS, sont exécutés aux États-Unis en 1953. Au Royaume-Uni, les « Cinq de Cambridge », recrutés par les Soviétiques dans les années 1930, transmettent des secrets pendant des années.",
                "Le renseignement technique prend une place croissante. Les avions espions U-2 survolent l'URSS à partir de 1956 ; l'un d'eux est abattu le 1er mai 1960 et son pilote, Francis Gary Powers, est échangé en 1962 contre un espion soviétique sur le pont de Glienicke, à Berlin. Le 14 octobre 1962, un U-2 photographie des rampes de missiles soviétiques à Cuba, ce qui déclenche la crise des missiles. Les services mènent aussi des actions clandestines, comme les coups d'État soutenus par la CIA en Iran (1953) et au Guatemala (1954).",
              ],
              box: { label: "Repère", text: "1947 : CIA. 1949 : première bombe soviétique. 1952 : NSA. 1953 : exécution des Rosenberg. 1954 : KGB. 1957 : Spoutnik. 1960 : U-2 abattu au-dessus de l'URSS. 1962 : photos des missiles de Cuba." },
            },
            {
              heading: "Sputnik : la connaissance, enjeu de rivalité",
              paragraphs: [
                "Le 4 octobre 1957, l'URSS met en orbite Spoutnik, le premier satellite artificiel. Le choc est immense aux États-Unis, qui découvrent une avance soviétique en matière de fusées, donc de missiles capables d'atteindre leur territoire. La réponse porte sur la connaissance elle-même : création de l'ARPA (février 1958), agence de recherche du ministère de la Défense, puis de la NASA (1958), et vote en septembre 1958 du National Defense Education Act, qui finance massivement l'enseignement des sciences, des mathématiques et des langues étrangères.",
                "Ces investissements ont des effets durables : l'ARPA finance le réseau ARPANET, dont la première liaison est établie en 1969 et qui est l'ancêtre d'Internet. La rivalité de puissance pendant la guerre froide a donc été un puissant moteur de production de connaissances, dans les universités comme dans les laboratoires militaires.",
              ],
            },
            {
              heading: "L'Inde : former, faire circuler, transférer",
              paragraphs: [
                "Après l'indépendance (1947), le Premier ministre Jawaharlal Nehru fait de la science et de la formation des ingénieurs une priorité. Les Indian Institutes of Technology (IIT) sont créés à partir de 1951 (Kharagpur), plusieurs avec l'aide de pays étrangers : l'URSS par l'intermédiaire de l'UNESCO pour Bombay, l'Allemagne de l'Ouest pour Madras, un consortium d'universités américaines pour Kanpur, le Royaume-Uni pour Delhi. L'agence spatiale ISRO est fondée en 1969. Ces transferts de connaissances ont permis de former une élite scientifique.",
                "Beaucoup de diplômés partent à l'étranger, surtout aux États-Unis : c'est la fuite des cerveaux. Mais la diaspora devient une ressource : des Indiens dirigent de grandes entreprises du numérique, comme Satya Nadella (Microsoft, 2014) et Sundar Pichai (Google, 2015), et beaucoup gardent des liens avec l'Inde ou y reviennent. En 2023-2024, l'Inde devient le premier pays d'origine des étudiants étrangers aux États-Unis, devant la Chine.",
                "Depuis la libéralisation économique de 1991, Bangalore (Bengaluru) est devenue un grand pôle mondial des services informatiques, avec des entreprises comme Infosys, fondée en 1981. L'Inde affirme sa puissance scientifique : sa sonde Mangalyaan se place en orbite autour de Mars en 2014, et Chandrayaan-3 se pose près du pôle Sud de la Lune le 23 août 2023. Mais de fortes inégalités d'accès à l'éducation demeurent dans le pays.",
              ],
            },
          ],
          keyPoints: [
            "Les États contrôlent (censure, Lyssenko), protègent (secret, contrôle des exportations) et captent (opération Paperclip, 1945) les connaissances.",
            "Guerre froide : CIA (1947), NSA (1952), KGB (1954) ; espionnage atomique (Fuchs, bombe soviétique de 1949, Rosenberg exécutés en 1953).",
            "Renseignement technique : avions U-2 (Powers abattu en 1960), photos des missiles de Cuba (14 octobre 1962).",
            "Le choc de Spoutnik (1957) entraîne la création de l'ARPA et de la NASA et une loi sur l'éducation scientifique (1958).",
            "Inde : IIT (à partir de 1951), ISRO (1969), Bangalore, diaspora (Nadella, Pichai), premier pays d'origine des étudiants étrangers aux États-Unis (2023-2024).",
          ],
          example: {
            statement: "Montrez que l'Inde a fait de la connaissance un levier de puissance depuis son indépendance.",
            solution: [
              "Une volonté politique initiale : Nehru fait de la science un pilier du développement ; création des IIT à partir de 1951 et de l'ISRO en 1969.",
              "Des transferts de connaissances : plusieurs IIT sont créés avec l'aide de l'URSS, de l'Allemagne de l'Ouest, des États-Unis et du Royaume-Uni, ce qui permet à l'Inde de profiter de la rivalité de la guerre froide.",
              "La circulation des étudiants : beaucoup partent aux États-Unis ; la fuite des cerveaux devient une circulation, la diaspora (Nadella, Pichai) renforçant l'influence et les réseaux de l'Inde.",
              "Les résultats : pôle informatique de Bangalore après 1991, réussites spatiales (Mars en 2014, pôle Sud lunaire en 2023).",
              "Limites et conclusion : les inégalités internes d'accès à l'éducation restent fortes ; l'Inde est une puissance de la connaissance en construction.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chronologiquement et datez les événements suivants : création du KGB ; lancement de Spoutnik ; création de la CIA ; première bombe atomique soviétique ; un U-2 américain est abattu au-dessus de l'URSS ; un U-2 photographie des rampes de missiles à Cuba.",
              hint: "Les services de renseignement sont créés au début de la guerre froide ; les deux épisodes du U-2 sont séparés de deux ans.",
              solution: [
                "1947 : création de la CIA.",
                "1949 : première bombe atomique soviétique (29 août).",
                "1954 : création du KGB.",
                "1957 : lancement de Spoutnik (4 octobre).",
                "1960 : un U-2 est abattu au-dessus de l'URSS (1er mai), son pilote Francis Gary Powers est capturé.",
                "1962 : un U-2 photographie des rampes de missiles à Cuba (14 octobre).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi l'espionnage atomique illustre le rôle de la connaissance dans la rivalité entre les États-Unis et l'URSS au début de la guerre froide.",
              hint: "Identifiez ce que l'URSS cherche à obtenir, comment, avec quel résultat, et la réaction américaine.",
              solution: [
                "Enjeu : en 1945, les États-Unis sont seuls à posséder la bombe atomique, ce qui leur donne un avantage stratégique décisif ; la connaissance scientifique et technique est donc un facteur de puissance.",
                "Moyens : l'URSS recrute des informateurs infiltrés dans le projet Manhattan, comme le physicien Klaus Fuchs, qui transmettent des informations sur la conception de la bombe.",
                "Résultat : l'URSS fait exploser sa première bombe le 29 août 1949, plus tôt que prévu par les Américains ; le monopole américain prend fin.",
                "Réaction : les États-Unis renforcent le contre-espionnage ; les Rosenberg sont exécutés en 1953 dans un climat de peur (maccarthysme).",
                "Conclusion : la connaissance devient un secret d'État que l'on protège et que l'on cherche à voler ; le renseignement est au cœur de la guerre froide.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : présentation résumée du National Defense Education Act, loi votée par le Congrès des États-Unis et promulguée en septembre 1958. Dans sa déclaration d'intention, le Congrès affirme que la sécurité de la nation exige le plein développement des capacités intellectuelles et des compétences techniques de ses jeunes, hommes et femmes, et que la défense du pays dépend de la maîtrise des techniques modernes issues des connaissances scientifiques. La loi finance des prêts aux étudiants, des bourses doctorales et l'enseignement des sciences, des mathématiques et des langues étrangères. Consigne : après avoir présenté le contexte, montrez en quoi ce document fait de la connaissance un enjeu géopolitique, puis évaluez sa portée.",
              hint: "Le contexte immédiat est le lancement de Spoutnik, onze mois plus tôt. Pensez aussi à ce que ces investissements ont produit à long terme.",
              solution: [
                "Présentation : loi fédérale américaine de septembre 1958, votée dans le contexte du choc provoqué par Spoutnik (4 octobre 1957), qui révèle une avance soviétique dans les fusées.",
                "La connaissance, enjeu de sécurité : le texte lie explicitement l'éducation à la défense nationale ; former des scientifiques, des ingénieurs et des spécialistes des langues (notamment le russe) est présenté comme une condition de la survie dans la guerre froide.",
                "Un État qui investit dans le savoir : la loi finance prêts, bourses et enseignement, ce qui est nouveau dans un pays où l'éducation relève surtout des États fédérés ; elle s'inscrit dans un ensemble de décisions (ARPA et NASA en 1958).",
                "Portée : forte croissance du nombre d'étudiants et de chercheurs ; l'investissement public dans la recherche contribue à des innovations majeures, comme ARPANET (1969), et à la victoire dans la course à la Lune (1969).",
                "Limites : la loi est dictée par la peur de l'URSS ; elle met l'éducation au service de la puissance militaire, et l'avance soviétique était en partie surestimée.",
                "Bilan : ce document montre qu'à l'époque de la guerre froide, la production de connaissances devient une arme dans la rivalité entre puissances.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la connaissance, enjeu politique et géopolitique.",
            statements: [
              { text: "La CIA est créée en 1947 par le National Security Act.", true: true, why: "La loi de 1947 réorganise l'appareil de sécurité nationale américain au début de la guerre froide." },
              { text: "L'URSS réalise sa première bombe atomique en 1957, la même année que Spoutnik.", true: false, why: "Elle la réalise le 29 août 1949 ; 1957 est l'année de Spoutnik." },
              { text: "Lyssenko a imposé en URSS une biologie conforme à l'idéologie, au détriment de la génétique.", true: true, why: "À partir de 1948, la génétique est condamnée, avec des effets désastreux pour la recherche et l'agriculture." },
              { text: "Les IIT indiens ont tous été créés sans aucune aide étrangère.", true: false, why: "Plusieurs ont bénéficié de l'aide de l'URSS, de l'Allemagne de l'Ouest, des États-Unis ou du Royaume-Uni." },
              { text: "Le choc de Spoutnik conduit les États-Unis à financer massivement l'enseignement scientifique.", true: true, why: "C'est l'objet du National Defense Education Act de 1958." },
              { text: "La fuite des cerveaux n'a que des effets négatifs pour le pays de départ.", true: false, why: "La diaspora peut devenir une ressource : retours, investissements, réseaux, comme le montre l'exemple indien." },
              { text: "Un avion espion U-2 a photographié des rampes de missiles soviétiques à Cuba en octobre 1962.", true: true, why: "Les photos du 14 octobre 1962 déclenchent la crise des missiles de Cuba." },
            ],
          },
          quiz: [
            {
              q: "En quelle année est créé le KGB ?",
              options: ["1947", "1954", "1962", "1917"],
              answer: 1,
              why: "Le KGB est créé en 1954, après la mort de Staline ; la CIA date de 1947.",
            },
            {
              q: "Qu'est-ce que l'opération Paperclip ?",
              options: ["Un programme d'écoutes de la NSA", "Un réseau d'espions soviétiques", "Un plan d'aide à l'Inde", "Le recrutement de savants allemands par les États-Unis"],
              answer: 3,
              why: "À partir de 1945, les États-Unis recrutent des scientifiques allemands, comme Wernher von Braun, pour capter leurs connaissances.",
            },
            {
              q: "Quel physicien du projet Manhattan transmet des informations à l'URSS ?",
              options: ["Klaus Fuchs", "Robert Oppenheimer", "Enrico Fermi", "Leó Szilárd"],
              answer: 0,
              why: "Klaus Fuchs, membre de la mission britannique du projet Manhattan, avoue en 1950 avoir renseigné les Soviétiques.",
            },
            {
              q: "Quelle réussite spatiale indienne date de 2023 ?",
              options: ["Le premier satellite indien", "La mise en orbite d'une sonde autour de Mars", "L'alunissage près du pôle Sud de la Lune", "Le premier vol habité indien"],
              answer: 2,
              why: "Chandrayaan-3 se pose près du pôle Sud lunaire le 23 août 2023 ; la sonde martienne Mangalyaan date de 2014.",
            },
            {
              q: "Quel réseau, financé par l'ARPA, est l'ancêtre d'Internet ?",
              options: ["Minitel", "Le Web", "Ethernet", "ARPANET"],
              answer: 3,
              why: "ARPANET établit sa première liaison en 1969 ; le Web, inventé au CERN à partir de 1989, est une application qui fonctionne sur Internet.",
            },
          ],
          trap: "Réduire le renseignement à l'espionnage romanesque : le programme attend aussi le renseignement technique (écoutes, U-2, satellites), son rôle dans les décisions (crise de Cuba) et ses actions clandestines.",
          method: "Pour l'Inde, retenez une chaîne logique en quatre maillons, chacun daté : former (IIT, 1951), partir (diaspora), revenir ou relier (Bangalore après 1991), rayonner (Mars 2014, Lune 2023). Elle structure directement une sous-partie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cyberespace',
          title: 'Le cyberespace : conflictualités et coopérations',
          minutes: 30,
          objectives: [
            "Définir le cyberespace et décrire ses trois couches : physique, logique et informationnelle.",
            "Analyser les formes de conflictualité dans le cyberespace : espionnage, sabotage, déstabilisation, criminalité.",
            "Présenter les coopérations et les difficultés de la régulation du cyberespace.",
            "Expliquer la stratégie de la France dans le cyberespace.",
          ],
          course: [
            {
              heading: "Qu'est-ce que le cyberespace ?",
              paragraphs: [
                "Le mot cyberespace est popularisé par l'écrivain de science-fiction William Gibson dans Neuromancien (1984). Il désigne aujourd'hui l'espace de communication créé par l'interconnexion mondiale des ordinateurs et des réseaux numériques. Internet en est la principale composante : issu d'ARPANET (1969), il adopte en 1983 le protocole commun TCP/IP ; le Web, inventé par Tim Berners-Lee au CERN à partir de 1989, en facilite l'usage.",
                "On distingue trois couches. La couche physique comprend les infrastructures matérielles : câbles sous-marins (qui transportent la quasi-totalité des données intercontinentales), centres de données, satellites, antennes. La couche logique rassemble les logiciels, les protocoles et les adresses qui permettent aux machines de communiquer. La couche informationnelle (ou sémantique) correspond aux contenus échangés et à ceux qui les produisent.",
                "Le cyberespace n'est donc pas « virtuel » : il a une géographie. Ses infrastructures sont inégalement réparties, et quelques grandes entreprises, surtout américaines (Google, Apple, Meta, Amazon, Microsoft) et chinoises (Baidu, Alibaba, Tencent, Huawei), en contrôlent une part considérable. Il est devenu un enjeu de souveraineté pour les États.",
              ],
              box: { label: "Définition", text: "Cyberespace : espace de communication constitué par l'interconnexion mondiale des équipements numériques. Il comprend trois couches : physique (câbles, serveurs, satellites), logique (logiciels, protocoles) et informationnelle (contenus et usages)." },
            },
            {
              heading: "Un espace de conflictualités",
              paragraphs: [
                "L'espionnage y est massif. En juin 2013, Edward Snowden, ancien sous-traitant de la NSA, révèle l'ampleur des programmes de surveillance américains, comme PRISM, qui permettait de collecter des données auprès de grandes entreprises du numérique. Les cyberattaques peuvent aussi viser le sabotage : le virus Stuxnet, découvert en 2010 et attribué par de nombreux experts aux États-Unis et à Israël, a endommagé des centrifugeuses d'enrichissement de l'uranium sur le site iranien de Natanz.",
                "D'autres attaques visent la déstabilisation. En avril-mai 2007, l'Estonie subit une vague d'attaques paralysant sites gouvernementaux, banques et médias, après le déplacement d'un monument soviétique ; elles sont imputées à des acteurs proches de la Russie. En avril 2015, la chaîne TV5 Monde est mise hors d'antenne. En mai 2017, les « MacronLeaks » diffusent des documents piratés à la veille du second tour de l'élection présidentielle. Le 24 février 2022, jour de l'invasion de l'Ukraine, une attaque contre le réseau satellitaire KA-SAT de l'entreprise Viasat perturbe les communications, attribuée par l'Union européenne à la Russie.",
                "La cybercriminalité se développe aussi, notamment par les rançongiciels, logiciels qui chiffrent les données d'une victime et exigent une rançon : WannaCry (mai 2017), attribué à la Corée du Nord, touche des centaines de milliers d'ordinateurs ; des hôpitaux français, comme celui de Corbeil-Essonnes en 2022, sont paralysés. Ces conflits ont des caractères propres : l'attribution est difficile, les attaques restent souvent sous le seuil de la guerre ouverte (on parle de « zone grise »), et les acteurs sont multiples (États, groupes criminels, militants).",
              ],
            },
            {
              heading: "Coopérer et réguler : un chantier inachevé",
              paragraphs: [
                "Des coopérations existent. La convention de Budapest sur la cybercriminalité, adoptée en 2001 dans le cadre du Conseil de l'Europe, harmonise les infractions et facilite l'entraide judiciaire. À l'ONU, des groupes d'experts gouvernementaux reconnaissent en 2013 que le droit international s'applique au cyberespace, puis proposent en 2015 des normes de comportement responsable des États. L'OTAN reconnaît le cyberespace comme un domaine d'opérations en 2016. En décembre 2024, l'Assemblée générale des Nations unies adopte une convention contre la cybercriminalité, critiquée par des ONG qui craignent des atteintes aux libertés.",
                "La gouvernance d'Internet oppose deux visions. Le modèle « multi-acteurs », défendu par les États-Unis et les Européens, associe États, entreprises, ingénieurs et société civile : l'ICANN, organisme privé créé en 1998 pour gérer les noms de domaine, échappe à la tutelle du gouvernement américain en 2016. Le modèle souverainiste, défendu par la Chine (« grande muraille numérique ») et la Russie (loi sur un Internet « souverain » en 2019), affirme le contrôle de l'État sur les réseaux et les contenus. L'Union européenne, enfin, cherche à réguler par le droit : RGPD (2018), règlement sur les services numériques (2022), directive NIS 2 (2022) sur la cybersécurité.",
              ],
              box: { label: "À retenir", text: "Le cyberespace est difficile à réguler parce que les attaques sont difficiles à attribuer, que les acteurs privés y sont puissants, et que les grandes puissances ne partagent pas la même conception de la liberté et de la souveraineté numériques." },
            },
            {
              heading: "La France dans le cyberespace",
              paragraphs: [
                "Le Livre blanc sur la défense et la sécurité nationale de 2008 fait de la cybersécurité une priorité. En 2009 est créée l'Agence nationale de la sécurité des systèmes d'information (ANSSI), chargée de protéger les administrations et les opérateurs d'importance vitale (énergie, transports, santé). En 2017, le ministère des Armées crée le Commandement de la cyberdéfense (COMCYBER), et la France rend publique en 2019 une doctrine de lutte informatique offensive.",
                "La France lutte aussi contre les manipulations de l'information : le service VIGINUM, créé en 2021, détecte les ingérences numériques étrangères. Sur le plan diplomatique, elle lance en novembre 2018 l'Appel de Paris pour la confiance et la sécurité dans le cyberespace, soutenu par de nombreux États, entreprises et associations, mais pas par la Chine ni par la Russie. Elle défend enfin une souveraineté numérique européenne, pour réduire la dépendance aux grandes entreprises américaines et chinoises.",
              ],
              box: { label: "Repère", text: "2008 : Livre blanc. 2009 : ANSSI. 2017 : COMCYBER. 2018 : Appel de Paris. 2019 : doctrine de lutte informatique offensive. 2021 : VIGINUM." },
            },
          ],
          keyPoints: [
            "Le cyberespace a trois couches : physique (câbles, serveurs), logique (logiciels, protocoles), informationnelle (contenus) ; il a une géographie.",
            "Conflictualités : espionnage (Snowden, 2013), sabotage (Stuxnet, 2010), déstabilisation (Estonie 2007, TV5 Monde 2015, MacronLeaks 2017), cybercriminalité (WannaCry, 2017).",
            "Caractères propres : attribution difficile, zone grise sous le seuil de la guerre, multiplicité des acteurs.",
            "Coopérations : convention de Budapest (2001), normes de l'ONU (2013, 2015), OTAN (2016), convention de l'ONU (2024) ; deux visions de la gouvernance.",
            "France : ANSSI (2009), COMCYBER (2017), Appel de Paris (2018), VIGINUM (2021).",
          ],
          example: {
            statement: "Expliquez pourquoi l'attribution des cyberattaques est un enjeu géopolitique.",
            solution: [
              "Définir : attribuer une attaque, c'est identifier son auteur (un État, un groupe lié à un État, des criminels).",
              "Difficulté technique : les attaquants passent par des serveurs situés dans des pays tiers, utilisent de faux indices et des intermédiaires, ce qui brouille les pistes.",
              "Enjeu politique : sans attribution, pas de riposte légitime ni de sanction ; les États peuvent nier (la Russie a toujours nié les attaques contre l'Estonie en 2007).",
              "Pratique actuelle : les États procèdent à des attributions publiques, souvent collectives, pour dénoncer un adversaire, comme pour WannaCry (Corée du Nord) ou l'attaque contre Viasat (Russie, 2022).",
              "Conclusion : l'attribution est à la fois une question technique et une décision politique ; elle structure les rapports de force dans la zone grise du cyberespace.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque événement dans une forme de conflictualité (espionnage, sabotage, déstabilisation, cybercriminalité) : a) Stuxnet (2010) ; b) révélations d'Edward Snowden sur PRISM (2013) ; c) MacronLeaks (2017) ; d) WannaCry (2017) ; e) attaques contre l'Estonie (2007).",
              hint: "Demandez-vous quel est le but : collecter des informations, détruire un équipement, troubler la vie politique ou obtenir de l'argent.",
              solution: [
                "a) Stuxnet : sabotage, puisqu'il endommage physiquement des centrifugeuses iraniennes.",
                "b) PRISM : espionnage, c'est-à-dire collecte massive d'informations.",
                "c) MacronLeaks : déstabilisation, par la diffusion de documents piratés avant le vote.",
                "d) WannaCry : cybercriminalité par rançongiciel (même s'il est attribué à un État, la Corée du Nord).",
                "e) Estonie : déstabilisation, par la paralysie des sites gouvernementaux, bancaires et médiatiques.",
              ],
            },
            {
              level: 2,
              statement: "Montrez que le cyberespace possède une géographie, en vous appuyant sur ses trois couches.",
              hint: "Pour chaque couche, cherchez des lieux, des acteurs et des inégalités.",
              solution: [
                "Couche physique : les câbles sous-marins, qui transportent la quasi-totalité des données intercontinentales, suivent des routes précises et aboutissent à des points d'atterrissement stratégiques ; les centres de données sont concentrés dans quelques pays.",
                "Couche logique : les protocoles et la gestion des noms de domaine (ICANN, créée en 1998 aux États-Unis) ont longtemps été dominés par les Américains ; la Chine et la Russie construisent des réseaux plus contrôlés.",
                "Couche informationnelle : les contenus et les plateformes sont dominés par quelques entreprises américaines et chinoises, et les langues sont inégalement représentées.",
                "Conclusion : le cyberespace est un espace hiérarchisé, avec des centres et des périphéries, et un enjeu de souveraineté pour les États.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Le cyberespace, un nouvel espace de conflictualité et de coopération ». Proposez une introduction rédigée et un plan détaillé en trois parties.",
              hint: "Ne vous contentez pas d'une liste d'attaques : montrez en quoi ces conflits sont nouveaux, puis les coopérations et leurs limites, avec l'exemple de la France.",
              solution: [
                "Accroche : le 24 février 2022, quelques heures avant l'invasion de l'Ukraine, une cyberattaque perturbe le réseau satellitaire KA-SAT : la guerre se mène aussi dans le cyberespace.",
                "Définitions : le cyberespace est l'espace de communication né de l'interconnexion des réseaux numériques ; la conflictualité désigne l'ensemble des rivalités et affrontements, armés ou non ; la coopération, les actions communes des acteurs.",
                "Problématique : en quoi le cyberespace est-il devenu un espace d'affrontement d'un genre nouveau, et les coopérations parviennent-elles à le réguler ?",
                "I. Un espace stratégique : trois couches, géographie inégale, rôle des géants du numérique, enjeu de souveraineté.",
                "II. Des conflictualités nouvelles : espionnage (Snowden, 2013), sabotage (Stuxnet, 2010), déstabilisation (Estonie 2007, MacronLeaks 2017), cybercriminalité (WannaCry, 2017) ; attribution difficile et zone grise.",
                "III. Des coopérations réelles mais limitées : convention de Budapest (2001), normes de l'ONU, OTAN (2016), Appel de Paris (2018), convention de l'ONU (2024) ; opposition entre modèle multi-acteurs et modèle souverainiste ; stratégie française (ANSSI, COMCYBER, VIGINUM).",
                "Annonce : nous montrerons que le cyberespace est un espace stratégique, puis qu'il est le théâtre de conflits nouveaux, avant d'évaluer les coopérations qui tentent de le réguler.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque événement ou institution à sa description.",
            pairs: [
              { left: "Stuxnet (2010)", right: "Sabotage de centrifugeuses iraniennes" },
              { left: "Edward Snowden (2013)", right: "Révélation de la surveillance de masse de la NSA" },
              { left: "ANSSI (2009)", right: "Agence française de sécurité des systèmes d'information" },
              { left: "Convention de Budapest (2001)", right: "Premier traité international sur la cybercriminalité" },
              { left: "Appel de Paris (2018)", right: "Initiative française pour la confiance et la sécurité en ligne" },
              { left: "Estonie (2007)", right: "Vague d'attaques paralysant un État membre de l'OTAN" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la couche physique du cyberespace ?",
              options: ["Les câbles, serveurs et satellites", "Les réseaux sociaux", "Les logiciels et les protocoles", "Les contenus échangés"],
              answer: 0,
              why: "La couche physique regroupe les infrastructures matérielles ; les logiciels relèvent de la couche logique, les contenus de la couche informationnelle.",
            },
            {
              q: "Quel virus a endommagé des centrifugeuses iraniennes ?",
              options: ["WannaCry", "NotPetya", "ILOVEYOU", "Stuxnet"],
              answer: 3,
              why: "Découvert en 2010, Stuxnet a visé le site d'enrichissement de Natanz ; il est attribué par de nombreux experts aux États-Unis et à Israël.",
            },
            {
              q: "Quelle agence française protège les systèmes d'information de l'État depuis 2009 ?",
              options: ["Le COMCYBER", "L'ANSSI", "VIGINUM", "La CNIL"],
              answer: 1,
              why: "L'ANSSI est créée en 2009 ; le COMCYBER (2017) relève des armées et VIGINUM (2021) lutte contre les ingérences numériques.",
            },
            {
              q: "Que signifie la « zone grise » dans le cyberespace ?",
              options: ["Une région sans couverture Internet", "Un marché noir de données", "Des actions hostiles sous le seuil de la guerre ouverte", "Un serveur non sécurisé"],
              answer: 2,
              why: "Les cyberattaques permettent de nuire à un adversaire sans déclencher de conflit armé, ce qui complique la riposte.",
            },
            {
              q: "Quels États ne soutiennent pas l'Appel de Paris de 2018 ?",
              options: ["La Chine et la Russie", "Le Japon et le Canada", "L'Allemagne et l'Italie", "Le Royaume-Uni et l'Espagne"],
              answer: 0,
              why: "La Chine et la Russie défendent une conception souverainiste du cyberespace, opposée au modèle multi-acteurs de l'Appel de Paris.",
            },
          ],
          trap: "Croire que le cyberespace est immatériel ou « virtuel » : il repose sur des infrastructures localisées (câbles, centres de données) et sur des acteurs identifiables, ce qui en fait un objet de géographie et de géopolitique.",
          method: "Classez chaque exemple selon deux questions : quelle couche est visée (physique, logique, informationnelle) et quel but est poursuivi (espionner, saboter, déstabiliser, voler). Ce double classement évite la liste d'exemples et produit une analyse.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                             */
    /* ==================================================================== */
    {
      id: 'bac-hggsp',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'dissertation-hggsp',
          title: 'La dissertation : problématiser et construire un plan',
          minutes: 35,
          objectives: [
            "Analyser un sujet de dissertation : définir les termes, délimiter le sujet dans le temps et dans l'espace.",
            "Formuler une problématique pertinente à partir de l'analyse du sujet.",
            "Construire un plan cohérent, argumenté et illustré d'exemples précis.",
            "Rédiger une introduction et une conclusion complètes.",
          ],
          course: [
            {
              heading: "L'épreuve écrite et ce que l'on attend de vous",
              paragraphs: [
                "L'épreuve écrite de spécialité HGGSP, passée en juin de l'année de terminale, dure 4 heures et compte pour un coefficient 16 au baccalauréat. Elle comporte deux exercices, notés chacun sur 10 points : une dissertation, à choisir entre deux sujets, et une étude critique d'un ou de deux documents. Les thèmes sur lesquels peuvent porter les sujets sont précisés par une note de service officielle : vérifiez celle qui s'applique à votre session.",
                "La dissertation est une réflexion organisée qui répond à un problème posé par le sujet. On attend de vous une démonstration, et non une récitation du cours : chaque partie défend une idée, appuyée sur des exemples précis (dates, lieux, acteurs, chiffres sûrs), et l'ensemble répond à la problématique. En HGGSP, une bonne copie croise les approches du programme : histoire, géographie, géopolitique et science politique, avec des jeux d'échelles (locale, nationale, mondiale).",
              ],
              box: { label: "À retenir", text: "Épreuve écrite : 4 heures, coefficient 16. Deux exercices sur 10 points chacun : une dissertation (un sujet au choix parmi deux) et une étude critique de document(s). La dissertation doit répondre à une problématique par un plan organisé et des exemples précis." },
            },
            {
              heading: "Analyser le sujet et problématiser",
              paragraphs: [
                "Commencez par recopier le sujet au brouillon et soulignez chaque mot. Définissez précisément chaque terme, y compris les petits mots qui orientent le sujet : « et » invite à étudier une relation, « entre » une tension, un point d'interrogation une discussion. Délimitez le sujet dans le temps (les bornes chronologiques : pourquoi commencer à telle date ?) et dans l'espace (le monde, un État, une région).",
                "Notez ensuite, sans les trier, toutes les connaissances et tous les exemples que le sujet vous évoque. Ce remue-méninges permet de vérifier que vous avez assez de matière, et de repérer les tensions du sujet : des acteurs qui s'opposent, une évolution, un paradoxe.",
                "La problématique est la question centrale à laquelle la dissertation répond. Elle ne recopie pas le sujet : elle en fait apparaître l'enjeu, souvent une tension entre deux idées. Pour le sujet « Le patrimoine, un enjeu géopolitique », une problématique possible est : en quoi le patrimoine, censé rassembler une communauté autour d'un héritage commun, est-il devenu un objet de rivalités et de coopérations entre États et acteurs internationaux ?",
              ],
              box: { label: "Règle", text: "Une bonne problématique : 1) porte sur tout le sujet et seulement sur lui ; 2) fait apparaître une tension ou un enjeu ; 3) appelle une démonstration et pas une simple description ; 4) tient en une ou deux phrases interrogatives." },
            },
            {
              heading: "Construire le plan",
              paragraphs: [
                "Le plan comporte deux ou trois parties, chacune divisée en deux ou trois sous-parties. Chaque sous-partie contient une idée (formulée comme une affirmation), au moins un exemple précis, et une explication qui relie l'exemple à l'idée. Un exemple sans explication ne prouve rien ; une idée sans exemple reste une affirmation gratuite.",
                "Plusieurs types de plans sont possibles. Le plan thématique, le plus fréquent en HGGSP, étudie successivement plusieurs dimensions du sujet (par exemple : les acteurs, les enjeux, les limites). Le plan chronologique convient lorsque le sujet porte sur une évolution, à condition que chaque période corresponde à une idée et soit justifiée par une rupture. Le plan analytique enchaîne constat, causes et conséquences ou solutions.",
                "Évitez le plan catalogue (une partie par exemple, sans fil conducteur) et le hors-sujet (traiter le chapitre au lieu du sujet). Prévoyez des transitions : une ou deux phrases qui font le bilan d'une partie et annoncent la suivante, pour que la démonstration progresse.",
              ],
            },
            {
              heading: "Rédiger l'introduction et la conclusion",
              paragraphs: [
                "L'introduction, rédigée entièrement au brouillon, comporte cinq étapes en un seul paragraphe : une accroche (un fait précis et daté lié au sujet, jamais une banalité du type « depuis toujours ») ; la définition des termes ; la délimitation et le contexte ; la problématique ; l'annonce du plan, sans utiliser de chiffres romains.",
                "La conclusion répond clairement à la problématique en reprenant les étapes de la démonstration, sans ajouter d'exemples nouveaux. Elle peut se terminer par une ouverture, c'est-à-dire un prolongement pertinent (un enjeu actuel, une autre échelle), qui ne doit pas être une question artificielle. Le développement, lui, est rédigé directement sur la copie à partir du plan détaillé, avec une ligne sautée entre les parties.",
              ],
            },
          ],
          keyPoints: [
            "Épreuve de 4 heures, coefficient 16 : dissertation (un sujet au choix parmi deux) et étude critique, notées chacune sur 10.",
            "Analyser le sujet : définir chaque terme, repérer les mots de liaison, justifier les bornes chronologiques et spatiales.",
            "La problématique fait apparaître une tension et appelle une démonstration ; elle ne recopie pas le sujet.",
            "Plan en deux ou trois parties : une idée, un exemple précis et une explication par sous-partie ; pas de plan catalogue.",
            "Introduction en cinq étapes (accroche, définitions, contexte, problématique, annonce) ; conclusion qui répond à la problématique.",
          ],
          example: {
            statement: "Analysez le sujet « L'environnement, un enjeu de rivalités internationales depuis les années 1970 », proposez une problématique et un plan.",
            solution: [
              "Termes : l'environnement désigne les éléments naturels et artificiels avec lesquels les sociétés interagissent ; un enjeu est ce que l'on peut gagner ou perdre ; les rivalités internationales opposent des États et d'autres acteurs à l'échelle mondiale.",
              "Bornes : les années 1970 correspondent à la conférence de Stockholm (1972) et à l'entrée de l'environnement dans les relations internationales ; on va jusqu'à aujourd'hui.",
              "Tension repérée : l'environnement est un bien commun qui exige la coopération, mais il fait l'objet de rivalités (ressources, coût de la transition, partage des responsabilités).",
              "Problématique : pourquoi l'environnement, qui appelle par nature une coopération mondiale, est-il devenu un terrain de rivalités entre puissances depuis les années 1970 ?",
              "Plan : I. Un bien commun qui oblige à coopérer (Stockholm 1972, Montréal 1987, Rio 1992, Paris 2015) ; II. Des rivalités d'intérêts entre États (pays industrialisés et émergents, pays pétroliers, États-Unis et Chine) ; III. Des acteurs et des conflits qui se multiplient (petits États insulaires, ONG, villes et États fédérés, ressources de l'Arctique).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des sujets suivants, identifiez les termes à définir et les bornes (dans le temps et dans l'espace) : a) « Protéger le patrimoine mondial depuis 1972 » ; b) « La France et le patrimoine » ; c) « Produire et diffuser des connaissances : un enjeu de puissance aux XXe et XXIe siècles ».",
              hint: "Quand le sujet ne donne pas de borne, c'est à vous de la fixer et de la justifier.",
              solution: [
                "a) Termes : protéger, patrimoine mondial. Bornes : 1972, date de la convention de l'UNESCO, jusqu'à aujourd'hui ; espace : le monde.",
                "b) Termes : la France (comme État et comme acteur international), patrimoine. Bornes absentes : on peut partir de la Révolution, moment fondateur, ou de 1959 (ministère de Malraux) en justifiant ce choix ; espace : la France, mais aussi son action internationale.",
                "c) Termes : produire, diffuser, connaissances, enjeu de puissance. Bornes : XXe et XXIe siècles ; espace : le monde, avec des exemples d'États (États-Unis, URSS, Inde, Chine, France).",
              ],
            },
            {
              level: 2,
              statement: "Améliorez les problématiques suivantes et expliquez ce qui ne va pas : a) pour le sujet « Le cyberespace, un espace de conflictualités » : « Qu'est-ce que le cyberespace ? » ; b) pour le sujet « Les États-Unis et l'environnement » : « Les États-Unis et l'environnement ? » ; c) pour le sujet « Histoire et mémoire du patrimoine » : « Quels sont les monuments historiques en France ? ».",
              hint: "Une problématique doit couvrir tout le sujet, faire apparaître une tension et appeler une démonstration.",
              solution: [
                "a) Défaut : la question ne porte que sur une définition, elle oublie les conflictualités. Proposition : en quoi le cyberespace est-il devenu un espace d'affrontement d'un genre nouveau, qui échappe en partie aux règles des conflits traditionnels ?",
                "b) Défaut : c'est le sujet recopié avec un point d'interrogation, sans enjeu. Proposition : comment expliquer que les États-Unis soient à la fois pionniers de la protection de l'environnement et l'un des principaux freins à la lutte contre le changement climatique ?",
                "c) Défaut : la question appelle une liste et sort du sujet (qui porte sur les liens entre histoire, mémoire et patrimoine). Proposition : comment le patrimoine est-il à la fois un objet d'histoire et un support des mémoires, parfois concurrentes ?",
              ],
            },
            {
              level: 3,
              statement: "Rédigez l'introduction complète (accroche, définitions, contexte, problématique, annonce du plan) du sujet : « La connaissance, un enjeu de puissance pour les États depuis 1945 ».",
              hint: "Choisissez une accroche datée et frappante (par exemple le lancement de Spoutnik), puis vérifiez que l'annonce du plan correspond bien à la problématique.",
              solution: [
                "Accroche : le 4 octobre 1957, l'URSS place en orbite Spoutnik, premier satellite artificiel ; aux États-Unis, le choc est tel que le Congrès vote l'année suivante une loi pour financer massivement l'enseignement des sciences.",
                "Définitions : la connaissance désigne l'ensemble des savoirs produits, transmis et mobilisés par une société ; la puissance est la capacité d'un État à imposer sa volonté ou à influencer les autres, par la contrainte ou par l'attraction.",
                "Contexte et bornes : 1945 marque l'entrée dans l'ère nucléaire, issue d'une mobilisation scientifique sans précédent (projet Manhattan), puis le début de la guerre froide ; depuis, la révolution numérique a fait de la connaissance le moteur de l'économie.",
                "Problématique : comment les États ont-ils fait, depuis 1945, de la production, du contrôle et de la circulation des connaissances un instrument de leur puissance ?",
                "Annonce : nous verrons d'abord que la guerre froide fait de la connaissance un enjeu stratégique (renseignement, course aux armements et à l'espace), puis que les États cherchent à former et attirer les talents (universités, mobilités étudiantes, exemple de l'Inde), enfin que le cyberespace ouvre un nouveau champ de rivalités pour la maîtrise de l'information.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de travail de la dissertation.",
            items: [
              "Lire les deux sujets et en choisir un",
              "Définir les termes et délimiter le sujet",
              "Noter au brouillon connaissances et exemples",
              "Formuler la problématique",
              "Construire le plan détaillé",
              "Rédiger au brouillon l'introduction et la conclusion",
              "Rédiger le développement puis relire",
            ],
          },
          quiz: [
            {
              q: "Combien de points la dissertation représente-t-elle sur l'épreuve écrite de spécialité HGGSP ?",
              options: ["5 points", "15 points", "10 points", "20 points"],
              answer: 2,
              why: "L'épreuve comporte deux exercices notés chacun sur 10 points : la dissertation et l'étude critique de document(s).",
            },
            {
              q: "Qu'est-ce qu'une bonne problématique ?",
              options: ["Une question qui fait apparaître l'enjeu du sujet", "Le sujet recopié tel quel avec un point d'interrogation final", "Une liste de questions sur le chapitre", "Une citation d'un historien"],
              answer: 0,
              why: "La problématique reformule le sujet sous forme d'un problème à résoudre, en faisant apparaître une tension.",
            },
            {
              q: "Que contient chaque sous-partie d'une dissertation ?",
              options: ["Une seule date", "Une idée, un exemple précis et une explication", "Un résumé du cours", "Une question ouverte"],
              answer: 1,
              why: "L'idée affirme, l'exemple prouve, l'explication relie l'exemple à l'idée et à la problématique.",
            },
            {
              q: "Quel défaut caractérise le plan catalogue ?",
              options: ["Il est trop court", "Il est chronologique", "Il comporte trois parties au lieu de deux seulement", "Il juxtapose des exemples sans démonstration"],
              answer: 3,
              why: "Le plan catalogue enchaîne des exemples ou des thèmes sans fil conducteur qui réponde à la problématique.",
            },
            {
              q: "Que doit éviter une accroche d'introduction ?",
              options: ["Un fait précis et daté", "Une généralité du type « depuis toujours »", "Un lien direct avec le sujet", "Un événement récent"],
              answer: 1,
              why: "Une accroche efficace part d'un fait précis lié au sujet ; les formules vagues n'apportent rien et agacent le correcteur.",
            },
          ],
          trap: "Réciter le chapitre au lieu de traiter le sujet : un plan qui suit l'ordre du cours sans répondre à la problématique est sanctionné comme un hors-sujet partiel.",
          method: "Avant de rédiger, relisez votre plan en vous demandant pour chaque sous-partie : « en quoi cela répond-il à ma problématique ? ». Si vous ne trouvez pas de réponse en une phrase, supprimez ou reformulez la sous-partie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etude-critique-documents',
          title: 'L\'étude critique de document(s)',
          minutes: 35,
          objectives: [
            "Présenter un document en identifiant sa nature, son auteur, sa date, son contexte et son destinataire.",
            "Analyser le document en suivant la consigne et en confrontant ses informations à ses connaissances.",
            "Exercer un regard critique : intérêt, portée et limites du document.",
          ],
          course: [
            {
              heading: "L'exercice et sa consigne",
              paragraphs: [
                "L'étude critique porte sur un ou deux documents (texte, carte, graphique, image, tableau statistique), accompagnés d'un titre et d'une consigne. La consigne est votre guide : elle indique ce que l'on attend de vous et suggère souvent l'organisation de la réponse. Lisez-la plusieurs fois et soulignez ses verbes (montrer, expliquer, analyser, discuter) et ses notions.",
                "On attend une réponse rédigée et organisée : une introduction qui présente le document et pose la problématique tirée de la consigne, un développement en deux ou trois parties qui suit la consigne, une conclusion qui fait le bilan et évalue la portée du document. Deux erreurs opposées sont à éviter : la paraphrase, qui répète le document sans l'expliquer, et la dissertation déguisée, qui récite le cours en oubliant le document.",
              ],
              box: { label: "À retenir", text: "Étudier un document, c'est l'expliquer (ce qu'il dit et pourquoi), le confronter à ses connaissances (ce qu'il confirme, nuance ou omet) et le critiquer (qui parle, dans quel but, avec quelle fiabilité et quelle portée)." },
            },
            {
              heading: "Présenter et contextualiser le document",
              paragraphs: [
                "La présentation répond à cinq questions. Quelle est la nature du document : discours, traité, article de presse, rapport, carte, affiche, photographie ? Qui en est l'auteur, et quelle est sa fonction ou son point de vue ? Quelle est sa date, et dans quel contexte a-t-il été produit ? À qui s'adresse-t-il ? De quoi parle-t-il, et quel est son intérêt pour le sujet ?",
                "Le contexte est essentiel : un même texte n'a pas le même sens selon le moment où il est écrit. Le discours d'un président à l'étranger, un traité signé après une crise, une carte produite par une organisation internationale ou par un État en conflit ne s'interprètent pas de la même façon. Le statut de l'auteur révèle souvent son intention : convaincre, informer, justifier, dénoncer.",
              ],
              box: { label: "Règle", text: "Présentation : nature, auteur (et sa fonction), date et contexte, destinataire, thème et intérêt. Ne présentez que ce qui est utile à l'analyse, en trois ou quatre phrases rédigées." },
            },
            {
              heading: "Analyser : expliquer, confronter, compléter",
              paragraphs: [
                "Le développement suit les axes de la consigne. Pour chaque idée, citez le document brièvement (quelques mots entre guillemets, ou la ligne), expliquez ce qu'il signifie, puis apportez vos connaissances : un événement, une date, un acteur qui éclairent ou complètent le passage. Une citation non expliquée ne vaut rien ; une connaissance qui n'est pas reliée au document non plus.",
                "Pour une carte, lisez la légende, l'échelle, la date des données et la source ; repérez les choix de représentation (couleurs, figurés, centrage), qui ne sont jamais neutres. Pour un graphique ou un tableau, identifiez les unités, la période, les évolutions et les ruptures, et faites des calculs simples (écarts, multiplications) qui donnent du poids à l'analyse.",
              ],
            },
            {
              heading: "Critiquer : intérêt, portée et limites",
              paragraphs: [
                "Critiquer ne veut pas dire dénigrer, mais évaluer. On se demande si le document est fiable, ce qu'il montre du point de vue de son auteur, ce qu'il passe sous silence, et ce qu'il a produit. Un discours d'intention n'est pas la preuve que la mesure annoncée a été appliquée : il faut comparer avec ce qui s'est passé ensuite. Un traité fixe des objectifs, mais sa portée dépend de sa ratification et de son application.",
                "La critique peut être intégrée dans chaque partie ou regroupée dans une dernière partie, selon la consigne. Dans tous les cas, la conclusion doit dire ce que le document apporte à la compréhension du sujet, et quelles sont ses limites.",
              ],
            },
          ],
          keyPoints: [
            "Un ou deux documents, avec un titre et une consigne : la consigne guide l'organisation de la réponse.",
            "Présenter : nature, auteur, date et contexte, destinataire, thème et intérêt.",
            "Analyser : citer brièvement, expliquer, confronter aux connaissances ; ni paraphrase, ni dissertation déguisée.",
            "Critiquer : point de vue de l'auteur, fiabilité, silences, portée réelle (application, effets).",
            "Pour une carte ou un graphique : légende, échelle, source, unités, période, choix de représentation.",
          ],
          example: {
            statement: "Présentez en quelques phrases le document suivant : le rapport Notre avenir à tous, publié en 1987 par la Commission mondiale sur l'environnement et le développement de l'ONU, présidée par la Première ministre norvégienne Gro Harlem Brundtland.",
            solution: [
              "Nature : un rapport officiel, rédigé par une commission d'experts et de responsables politiques créée par l'ONU.",
              "Auteur : la Commission mondiale sur l'environnement et le développement, présidée par Gro Harlem Brundtland, cheffe du gouvernement norvégien, d'où le nom de rapport Brundtland.",
              "Date et contexte : 1987, après une série de catastrophes (Tchernobyl en 1986) et l'année du protocole de Montréal ; la question est de concilier développement des pays du Sud et protection de l'environnement.",
              "Destinataires : l'Assemblée générale des Nations unies et, au-delà, les gouvernements et l'opinion mondiale.",
              "Intérêt : il définit le développement durable et prépare le sommet de la Terre de Rio (1992) ; c'est un texte fondateur de la gouvernance mondiale de l'environnement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque document, indiquez sa nature et une question critique à se poser : a) une carte de la répartition des biens du patrimoine mondial par continent, publiée par l'UNESCO ; b) le discours d'un chef d'État annonçant un objectif de neutralité carbone ; c) une photographie de la cathédrale Notre-Dame de Paris en flammes, le 15 avril 2019.",
              hint: "La question critique porte sur l'auteur, sur ce que le document ne montre pas, ou sur l'écart entre l'annonce et la réalité.",
              solution: [
                "a) Carte thématique produite par une organisation internationale. Question : à quelle date sont les données, et la carte montre-t-elle le déséquilibre en faveur de l'Europe et de l'Amérique du Nord, ou des effets de taille trompeurs ?",
                "b) Discours politique. Question : l'annonce est-elle suivie de mesures concrètes et vérifiables, et à qui le chef d'État s'adresse-t-il (électeurs, partenaires étrangers) ?",
                "c) Photographie de presse. Question : qui l'a prise, sous quel angle, et que ne montre-t-elle pas (les causes de l'incendie, la mobilisation qui a suivi, la reconstruction achevée en 2024) ?",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage de copie : « Le document dit que le patrimoine mondial doit être protégé par tous. Ensuite, il dit que chaque État protège son patrimoine. Enfin, le document dit que les États doivent coopérer. » Expliquez pourquoi ce passage est insuffisant, puis réécrivez-le de manière satisfaisante, en vous appuyant sur vos connaissances de la convention de 1972.",
              hint: "Repérez la paraphrase, puis ajoutez explication, connaissances et regard critique.",
              solution: [
                "Défauts : c'est une paraphrase (« le document dit que ») ; aucune explication, aucune connaissance, aucune critique ; le texte n'est ni daté ni situé.",
                "Réécriture : « La convention adoptée par l'UNESCO le 16 novembre 1972 confie d'abord à chaque État la responsabilité d'identifier, de protéger et de transmettre le patrimoine situé sur son territoire : elle respecte donc la souveraineté nationale. »",
                "« Mais elle affirme aussi que ce patrimoine forme un patrimoine mondial, à la protection duquel toute la communauté internationale doit coopérer : c'est l'héritage de la campagne de Nubie des années 1960, où des dizaines d'États avaient financé le sauvetage d'Abou Simbel. »",
                "« Cette double logique a ses limites : l'UNESCO ne peut pas contraindre un État, et la protection dépend de sa volonté, comme le montrent les retraits de Dresde (2009) et de Liverpool (2021), ou les destructions en temps de guerre. »",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : présentation résumée de la Convention concernant la protection du patrimoine mondial, culturel et naturel, adoptée par la Conférence générale de l'UNESCO le 16 novembre 1972. Les articles 1 et 2 définissent le patrimoine culturel (monuments, ensembles, sites) et le patrimoine naturel (formations physiques et biologiques, habitats d'espèces menacées, sites naturels) qui ont une valeur universelle exceptionnelle. L'article 4 reconnaît que l'obligation d'identifier, protéger, conserver, mettre en valeur et transmettre aux générations futures ce patrimoine incombe en premier lieu à chaque État sur son territoire. L'article 6 précise que, tout en respectant la souveraineté des États, ceux-ci reconnaissent que ce patrimoine constitue un patrimoine universel, pour la protection duquel la communauté internationale tout entière a le devoir de coopérer. Consigne : montrez comment ce texte définit le patrimoine mondial et organise sa protection, puis évaluez sa portée et ses limites.",
              hint: "Construisez trois parties : la définition (élargie au naturel), l'organisation (souveraineté et coopération), la portée et les limites (Liste, péril, retraits, destructions).",
              solution: [
                "Introduction : traité international adopté en 1972 par les États membres de l'UNESCO, organisation de l'ONU chargée de la culture ; contexte de la campagne de Nubie (1960) et de la mondialisation du patrimoine. Problématique : comment ce texte invente-t-il un patrimoine de l'humanité tout en respectant la souveraineté des États ?",
                "I. Une définition large : le texte réunit pour la première fois patrimoine culturel et patrimoine naturel ; le critère est la valeur universelle exceptionnelle, ce qui suppose de dépasser l'intérêt national. La convention est à l'origine de la Liste, dont les premiers biens sont inscrits en 1978.",
                "II. Une protection partagée : l'article 4 laisse la responsabilité première à l'État (souveraineté), l'article 6 crée un devoir de coopération internationale ; concrètement, cela passe par la Liste, le Fonds du patrimoine mondial et la Liste du patrimoine en péril.",
                "III. Portée et limites : succès considérable (plus de 1 200 biens inscrits, presque tous les États ont adhéré) et label recherché ; mais l'UNESCO ne peut contraindre les États (retraits de Dresde en 2009 et de Liverpool en 2021), ne peut empêcher les destructions en temps de guerre (Bamiyan, Palmyre), et la Liste reste déséquilibrée en faveur de l'Europe ; il faudra une autre convention (2003) pour le patrimoine immatériel.",
                "Conclusion : ce texte fonde la notion de patrimoine mondial et organise une coopération inédite, mais il repose sur la bonne volonté des États souverains.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'étude critique de document(s).",
            statements: [
              { text: "La paraphrase consiste à répéter le document avec d'autres mots, sans l'expliquer.", true: true, why: "C'est l'erreur la plus fréquente : elle ne montre aucune compréhension ni aucune connaissance." },
              { text: "Il faut citer de longs passages du document pour montrer qu'on l'a lu.", true: false, why: "On cite quelques mots, et on les explique ; une longue citation remplace l'analyse au lieu de la nourrir." },
              { text: "La consigne indique souvent l'organisation attendue de la réponse.", true: true, why: "Ses verbes et ses notions donnent les axes du développement." },
              { text: "Critiquer un document signifie montrer qu'il est faux.", true: false, why: "Critiquer, c'est évaluer : point de vue de l'auteur, fiabilité, silences, portée." },
              { text: "Un discours d'intention prouve que la mesure annoncée a été appliquée.", true: false, why: "Il faut confronter l'annonce à ce qui s'est passé ensuite." },
              { text: "Pour une carte, la légende, l'échelle et la source font partie de l'analyse.", true: true, why: "Ces éléments révèlent les choix de l'auteur et les limites de la représentation." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première chose à faire face à l'étude critique ?",
              options: ["Rédiger directement la conclusion de l'étude", "Réciter le chapitre correspondant", "Recopier le document", "Lire attentivement la consigne et le titre"],
              answer: 3,
              why: "La consigne et le titre orientent toute l'analyse ; on lit ensuite le document à la lumière de la consigne.",
            },
            {
              q: "Que doit contenir la présentation du document ?",
              options: ["Un résumé complet du document, paragraphe par paragraphe, dans l'ordre", "Sa nature, son auteur, sa date, son contexte et son destinataire", "Le plan de la dissertation", "Une citation de chaque paragraphe"],
              answer: 1,
              why: "La présentation situe le document : qui parle, quand, dans quel contexte, à qui, et sur quel sujet.",
            },
            {
              q: "Qu'est-ce qu'une « dissertation déguisée » ?",
              options: ["Une étude critique trop courte", "Une copie sans introduction", "Une réponse qui récite le cours en oubliant le document", "Une copie qui cite trop le document"],
              answer: 2,
              why: "Le document doit rester au centre : les connaissances servent à l'expliquer, pas à le remplacer.",
            },
            {
              q: "Pourquoi faut-il tenir compte de l'auteur d'un document ?",
              options: ["Parce que son point de vue oriente le contenu", "Parce que c'est toujours un historien", "Parce que le correcteur l'exige pour la forme", "Parce qu'il est toujours objectif"],
              answer: 0,
              why: "Un chef d'État, une ONG ou une organisation internationale ont des intentions différentes, qui expliquent ce qu'ils disent et ce qu'ils taisent.",
            },
            {
              q: "Que signifie évaluer la portée d'un document ?",
              options: ["Mesurer sa longueur", "Compter le nombre de ses auteurs", "Mesurer ses effets et son importance", "Vérifier son orthographe"],
              answer: 2,
              why: "La portée désigne l'importance et les conséquences du document : ce qu'il a changé ou annoncé, et ce qu'il a réellement produit.",
            },
          ],
          trap: "Paraphraser le document (« le document dit que... ») sans l'expliquer ni le confronter à ses connaissances : c'est l'erreur la plus fréquente et la plus pénalisée.",
          method: "Au brouillon, faites un tableau à trois colonnes : ce que dit le document (citation courte), ce que cela signifie (explication), ce que j'en sais (connaissance ou critique). Chaque ligne remplie devient un paragraphe du développement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'organiser-l-epreuve',
          title: 'Organiser son temps et mobiliser des exemples précis',
          minutes: 25,
          objectives: [
            "Répartir les quatre heures de l'épreuve entre la dissertation et l'étude critique.",
            "Choisir son sujet de dissertation de façon raisonnée.",
            "Constituer et mobiliser une banque d'exemples précis : dates, lieux, acteurs, chiffres sûrs.",
            "Relire efficacement sa copie.",
          ],
          course: [
            {
              heading: "Gérer quatre heures",
              paragraphs: [
                "Les deux exercices comptent autant (10 points chacun) : il faut donc leur consacrer un temps comparable, environ deux heures chacun, un peu plus pour la dissertation, plus longue à construire. Une copie qui néglige un exercice faute de temps perd des points qu'aucune brillante dissertation ne rattrape. Les candidats qui bénéficient d'un tiers-temps disposent d'une heure et vingt minutes supplémentaires, soit 5 h 20.",
                "Une répartition possible : 10 minutes pour lire les deux sujets de dissertation, le document et la consigne ; environ 2 heures pour la dissertation (50 minutes de brouillon, dont l'introduction et la conclusion rédigées, puis 70 minutes de rédaction) ; environ 1 h 40 pour l'étude critique (25 minutes de brouillon, 75 minutes de rédaction) ; 10 minutes de relecture finale. L'ordre des exercices est libre : beaucoup commencent par celui qu'ils maîtrisent le mieux.",
                "Le brouillon sert à réfléchir, pas à tout écrire : rédigez au brouillon l'introduction et la conclusion, mais seulement un plan détaillé pour le développement. Notez l'heure à laquelle chaque étape doit être terminée et respectez-la.",
              ],
              box: { label: "Repère", text: "Exemple de minutage sur 4 heures : lecture 10 min ; dissertation environ 2 h (brouillon 50 min, rédaction 70 min) ; étude critique environ 1 h 40 (brouillon 25 min, rédaction 75 min) ; relecture 10 min." },
            },
            {
              heading: "Choisir son sujet de dissertation",
              paragraphs: [
                "Prenez cinq minutes pour comparer les deux sujets. Le bon choix n'est pas le sujet qui « a l'air facile », mais celui dont vous comprenez tous les termes, pour lequel vous voyez une problématique, et sur lequel vous pouvez mobiliser au moins six exemples précis. Méfiez-vous des sujets qui ressemblent à un titre de chapitre : ils invitent à réciter et cachent souvent un angle particulier.",
                "Vérifiez les bornes et les mots de liaison : un sujet sur « la France et le patrimoine » n'est pas un sujet sur le patrimoine mondial ; un sujet qui commence en 1945 exclut de développer longuement le XIXe siècle. Une fois le choix fait, ne changez plus : revenir en arrière coûte un temps précieux.",
              ],
            },
            {
              heading: "Mobiliser des exemples précis",
              paragraphs: [
                "Un exemple précis est localisé, daté, comporte des acteurs nommés et, si possible, un chiffre sûr. « Des monuments ont été détruits pendant des guerres » est vague ; « en 2015, l'organisation État islamique détruit les temples de Baalshamin et de Bel à Palmyre, en Syrie » est précis. Un exemple doit toujours être relié à l'idée qu'il démontre.",
                "Préparez pendant l'année une banque d'exemples par thème, sur des fiches : quatre ou cinq exemples développés, chacun avec une date, un lieu, un acteur et une phrase d'explication. Variez les échelles (locale, nationale, mondiale) et les approches (histoire, géographie, géopolitique, science politique). Retenez aussi quelques notions et auteurs du programme (soft power, développement durable, Anthropocène, société de la connaissance), à condition de pouvoir les expliquer. N'inventez jamais un chiffre ou une citation : une donnée fausse fait perdre plus qu'elle ne rapporte.",
              ],
              box: { label: "Règle", text: "Un exemple précis = un lieu + une date + un acteur + (si possible) un chiffre sûr + une phrase qui le relie à l'idée défendue." },
            },
            {
              heading: "Rédiger lisiblement et relire",
              paragraphs: [
                "La présentation compte : une ligne sautée entre l'introduction, chaque partie et la conclusion ; un alinéa au début de chaque paragraphe ; une écriture lisible ; pas d'abréviations ni de titres apparents. Les transitions entre les parties montrent au correcteur que votre raisonnement progresse.",
                "Gardez dix minutes pour relire avec une liste de contrôle : la problématique est-elle posée et la conclusion y répond-elle ? Les dates et les noms propres sont-ils exacts et bien orthographiés ? Les accords, les accents et la ponctuation sont-ils corrects ? La consigne de l'étude critique a-t-elle été entièrement traitée ?",
              ],
            },
          ],
          keyPoints: [
            "Deux exercices sur 10 points : environ deux heures chacun, un peu plus pour la dissertation ; tiers-temps : 5 h 20 au total.",
            "Au brouillon : introduction et conclusion rédigées, plan détaillé pour le reste ; noter l'heure de fin de chaque étape.",
            "Choisir le sujet dont on comprend tous les termes et pour lequel on a au moins six exemples précis.",
            "Exemple précis : lieu, date, acteur, chiffre sûr, et une phrase qui le relie à l'idée.",
            "Relire avec une liste de contrôle : problématique, dates et noms, orthographe, consigne entièrement traitée.",
          ],
          example: {
            statement: "Transformez l'exemple vague suivant en exemple précis et utile à une démonstration : « Les États-Unis sont parfois sortis des accords sur le climat. »",
            solution: [
              "Repérer ce qui manque : aucune date, aucun acteur nommé, aucun accord précis, aucun lien avec une idée.",
              "Préciser les faits : le protocole de Kyoto (1997), signé par l'administration Clinton, n'est jamais ratifié, et George W. Bush s'en retire en 2001 ; Donald Trump annonce le retrait de l'accord de Paris en juin 2017 (effectif en novembre 2020), Joe Biden y revient en 2021, et Donald Trump annonce un nouveau retrait en janvier 2025.",
              "Relier à une idée : ces allers-retours montrent que la politique climatique américaine dépend des alternances partisanes et de la difficulté à obtenir les deux tiers du Sénat pour ratifier un traité.",
              "Rédaction finale : « La participation des États-Unis aux accords climatiques est instable : Kyoto, signé en 1998, n'a jamais été ratifié, et l'accord de Paris a été quitté en 2020, rejoint en 2021 puis de nouveau dénoncé en janvier 2025, au gré des alternances entre démocrates et républicains. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "L'épreuve commence à 8 h 00 et dure 4 heures. Vous prévoyez 10 minutes de lecture au début et 10 minutes de relecture à la fin. Vous consacrez 120 minutes à la dissertation (dont 50 minutes de brouillon) et le reste du temps à l'étude critique (dont 25 minutes de brouillon). Établissez l'horaire précis de chaque étape.",
              hint: "Calculez d'abord le temps restant pour l'étude critique : 240 minutes moins tout le reste.",
              solution: [
                "Temps total : 4 h = 240 minutes. Étude critique : 240 - 10 - 10 - 120 = 100 minutes, dont 25 minutes de brouillon et 75 minutes de rédaction.",
                "8 h 00 à 8 h 10 : lecture des sujets et du document.",
                "8 h 10 à 9 h 00 : brouillon de la dissertation (50 minutes) ; 9 h 00 à 10 h 10 : rédaction de la dissertation (70 minutes).",
                "10 h 10 à 10 h 35 : brouillon de l'étude critique (25 minutes) ; 10 h 35 à 11 h 50 : rédaction de l'étude critique (75 minutes).",
                "11 h 50 à 12 h 00 : relecture finale. Vérification : 10 + 50 + 70 + 25 + 75 + 10 = 240 minutes.",
              ],
            },
            {
              level: 2,
              statement: "Rendez précis les trois exemples suivants (lieu, date, acteur, et une phrase de lien avec une idée) : a) « Des œuvres africaines ont été rendues. » ; b) « Il y a eu des cyberattaques contre des élections. » ; c) « Les Soviétiques ont espionné les Américains. »",
              hint: "Cherchez dans vos fiches l'exemple le plus connu de chaque thème, puis demandez-vous quelle idée il démontre.",
              solution: [
                "a) « La loi du 24 décembre 2020 permet la restitution au Bénin de 26 œuvres du trésor d'Abomey, pillées par les troupes coloniales françaises en 1892 et rendues en novembre 2021 : le patrimoine devient un instrument de réconciliation diplomatique. »",
                "b) « En mai 2017, à la veille du second tour de l'élection présidentielle française, des documents piratés de l'équipe d'Emmanuel Macron sont diffusés en ligne (MacronLeaks) : le cyberespace permet des opérations de déstabilisation sous le seuil de la guerre. »",
                "c) « Grâce à des informateurs infiltrés dans le projet Manhattan, comme le physicien Klaus Fuchs, l'URSS réalise sa première bombe atomique dès le 29 août 1949 : la connaissance scientifique est un enjeu majeur du renseignement pendant la guerre froide. »",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Deux sujets vous sont proposés : sujet 1 « Le patrimoine, un enjeu géopolitique » ; sujet 2 « Les États-Unis et la question environnementale depuis les années 1970 ». Expliquez comment vous choisiriez entre les deux, puis, pour le sujet de votre choix, donnez une problématique, un plan en trois parties et six exemples précis répartis dans le plan.",
              hint: "Appliquez les critères du cours : termes compris, problématique visible, au moins six exemples précis.",
              solution: [
                "Méthode de choix : pour chaque sujet, je définis les termes, je cherche une tension et je liste mes exemples en deux minutes ; je choisis celui qui m'en fournit au moins six, précis et variés. Ici, prenons le sujet 1, pour lequel les exemples sont nombreux et à plusieurs échelles.",
                "Problématique : en quoi le patrimoine, héritage censé rassembler une communauté, est-il devenu un objet de rivalités, de conflits et de coopérations entre États et acteurs internationaux ?",
                "I. Un instrument d'identité et de puissance : Versailles, de la galerie des Glaces (1871, 1919) aux dîners d'État ; Sainte-Sophie, musée en 1934 puis mosquée en 2020.",
                "II. Un objet de conflits et de concurrences : destruction des temples de Palmyre par l'organisation État islamique (2015) ; marbres du Parthénon réclamés par la Grèce depuis 1982.",
                "III. Un champ de coopération et de diplomatie : convention de l'UNESCO (1972) et condamnation d'al-Mahdi par la CPI (2016) ; Louvre Abou Dhabi (2017) et restitutions au Bénin (2021).",
                "Bilan : six exemples précis (Versailles, Sainte-Sophie, Palmyre, Parthénon, CPI, Louvre Abou Dhabi), deux par partie, plus les restitutions en appui ; chacun devra être relié à l'idée de sa sous-partie.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le déroulement conseillé des quatre heures.",
            items: [
              "Lire les deux sujets de dissertation, le document et sa consigne",
              "Choisir le sujet de dissertation",
              "Construire au brouillon le plan et rédiger introduction et conclusion de la dissertation",
              "Rédiger la dissertation sur la copie",
              "Analyser le document au brouillon en suivant la consigne",
              "Rédiger l'étude critique sur la copie",
              "Relire l'ensemble avec une liste de contrôle",
            ],
          },
          quiz: [
            {
              q: "Combien de temps faut-il consacrer, à peu près, à chacun des deux exercices ?",
              options: ["Environ deux heures chacun", "Trois heures à la dissertation, une à l'étude", "Une heure chacun", "Tout le temps à la dissertation"],
              answer: 0,
              why: "Les deux exercices valent 10 points chacun : il faut leur accorder un temps comparable, un peu plus pour la dissertation.",
            },
            {
              q: "Que rédige-t-on entièrement au brouillon ?",
              options: ["Toute la dissertation", "Seulement la problématique", "L'introduction et la conclusion", "Rien du tout, pour gagner du temps"],
              answer: 2,
              why: "Introduction et conclusion demandent une formulation soignée ; le développement est rédigé directement à partir du plan détaillé.",
            },
            {
              q: "Quel est le meilleur critère pour choisir son sujet de dissertation ?",
              options: ["Le sujet le plus court", "Le sujet qui ressemble à un titre de chapitre", "Le sujet que les autres choisissent", "Le sujet pour lequel on a assez d'exemples précis"],
              answer: 3,
              why: "Il faut comprendre tous les termes, voir une problématique et disposer d'au moins six exemples précis.",
            },
            {
              q: "Lequel de ces exemples est précis ?",
              options: ["Des monuments ont été détruits pendant des guerres", "En 2015, l'organisation État islamique détruit les temples de Palmyre", "Beaucoup de pays protègent leur patrimoine", "Le patrimoine est souvent menacé"],
              answer: 1,
              why: "Il comporte une date, un acteur et un lieu ; les autres sont des généralités qui ne prouvent rien.",
            },
            {
              q: "Que faire si l'on n'est pas sûr d'un chiffre ?",
              options: ["Ne pas l'écrire", "L'arrondir au hasard", "Inventer un ordre de grandeur", "L'écrire en petit"],
              answer: 0,
              why: "Une donnée fausse fait perdre en crédibilité ; mieux vaut un exemple sans chiffre qu'un chiffre inventé.",
            },
          ],
          trap: "Passer trois heures sur la dissertation et bâcler l'étude critique en quelques minutes : les deux exercices valent autant, et une étude critique inachevée coûte très cher.",
          method: "Entraînez-vous au moins une fois dans les conditions réelles (4 heures, sans notes) avant le bac, en notant au début l'heure de fin de chaque étape sur le brouillon : vous découvrirez où vous perdez du temps.",
        },
      ],
    },
  ],
}
