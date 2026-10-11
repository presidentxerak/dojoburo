import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-1re',
  chapters: [
    /* ==================================================================== */
    /* HISTOIRE, THÈME 4 · LA PREMIÈRE GUERRE MONDIALE : LE « SUICIDE DE     */
    /* L'EUROPE » ET LA FIN DES EMPIRES EUROPÉENS                            */
    /* ==================================================================== */
    {
      id: 'premiere-guerre-mondiale',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'embrasement-mondial',
          title: 'Un embrasement mondial et ses grandes étapes',
          minutes: 35,
          objectives: [
            "Expliquer comment la crise de l'été 1914 transforme un conflit local dans les Balkans en guerre européenne, puis mondiale.",
            "Identifier les grandes étapes du conflit : guerre de mouvement, guerre de position, tournant de 1917 et retour du mouvement en 1918.",
            "Analyser la bataille de Verdun (1916) comme exemple de bataille d'usure.",
            "Situer les principaux fronts et mesurer la dimension mondiale de la guerre.",
          ],
          course: [
            {
              heading: "De Sarajevo à la guerre européenne (été 1914)",
              paragraphs: [
                "Au début du XXe siècle, l'Europe domine le monde mais elle est divisée en deux systèmes d'alliances. La Triple-Alliance unit depuis 1882 l'Allemagne, l'Autriche-Hongrie et l'Italie. La Triple-Entente rapproche la France et la Russie (alliance conclue en 1892-1894), le Royaume-Uni et la France (Entente cordiale de 1904), puis le Royaume-Uni et la Russie (1907). Les rivalités sont nombreuses : la France n'a pas oublié la perte de l'Alsace-Moselle en 1871, le Royaume-Uni s'inquiète de la flotte de guerre allemande, et les Balkans, où s'affrontent les ambitions de l'Autriche-Hongrie et de la Russie, sont qualifiés de « poudrière de l'Europe ».",
                "Le 28 juin 1914, à Sarajevo, en Bosnie annexée par l'Autriche-Hongrie, l'archiduc François-Ferdinand, héritier du trône austro-hongrois, est assassiné par Gavrilo Princip, un jeune nationaliste serbe de Bosnie. Soutenue par l'Allemagne, l'Autriche-Hongrie adresse un ultimatum à la Serbie, puis lui déclare la guerre le 28 juillet. Par le jeu des alliances, la crise s'étend en quelques jours : la Russie mobilise pour soutenir la Serbie, l'Allemagne déclare la guerre à la Russie le 1er août puis à la France le 3 août, et envahit la Belgique neutre. Le 4 août, le Royaume-Uni entre en guerre contre l'Allemagne.",
                "Dans chaque pays, les partis politiques suspendent leurs querelles : en France, le président Raymond Poincaré appelle à l'« Union sacrée » ; en Allemagne, on parle de Burgfrieden (la « paix du château fort »). Les soldats partent en pensant que la guerre sera courte. L'image d'un départ « la fleur au fusil » doit cependant être nuancée : l'historien Jean-Jacques Becker a montré que la mobilisation fut surtout accueillie en France avec résignation et sens du devoir, l'enthousiasme gagnant ensuite les foules des villes.",
              ],
              box: { label: "Repère", text: "28 juin 1914 : attentat de Sarajevo. 28 juillet : l'Autriche-Hongrie déclare la guerre à la Serbie. 1er août : l'Allemagne déclare la guerre à la Russie. 3 août : à la France. 4 août : le Royaume-Uni entre en guerre après l'invasion de la Belgique." },
            },
            {
              heading: "De la guerre de mouvement à la guerre de position (1914-1916)",
              paragraphs: [
                "L'état-major allemand applique le plan Schlieffen : battre rapidement la France en passant par la Belgique, avant de se retourner contre la Russie, plus lente à mobiliser. Les armées allemandes approchent de Paris, mais la contre-offensive franco-britannique de la Marne (5-12 septembre 1914), dirigée par Joffre, les arrête et les oblige à reculer. Chaque camp cherche ensuite à déborder l'autre par le nord : c'est la « course à la mer », qui s'achève en novembre sur la côte de la mer du Nord.",
                "Fin 1914, un front continu d'environ 700 kilomètres s'étend de la mer du Nord à la frontière suisse. Les soldats s'enterrent dans des tranchées protégées par des barbelés, séparées par le no man's land. Les offensives de 1915 en Artois et en Champagne échouent face aux mitrailleuses et à l'artillerie, qui provoque la majorité des blessures. Pour rompre le front, on invente de nouvelles armes : les gaz de combat, employés massivement par les Allemands près d'Ypres le 22 avril 1915, les lance-flammes, l'aviation, puis les chars d'assaut britanniques en septembre 1916.",
                "À l'est, la guerre reste plus mobile. Les Allemands écrasent une armée russe à Tannenberg (août 1914), puis repoussent les Russes de plusieurs centaines de kilomètres en 1915. En 1916, l'offensive du général russe Broussilov met l'Autriche-Hongrie en grande difficulté. Entrée en guerre aux côtés de l'Entente en mai 1915, l'Italie ouvre un front dans les Alpes, où elle subit en octobre 1917 la défaite de Caporetto.",
              ],
              box: { label: "Définition", text: "Guerre de mouvement : les armées se déplacent sur de grandes distances pour encercler ou battre l'ennemi. Guerre de position : les armées sont immobilisées face à face dans des tranchées. Guerre d'usure : chaque camp cherche à épuiser les forces humaines et matérielles de l'autre." },
            },
            {
              heading: "Verdun et la Somme : les batailles d'usure de 1916",
              paragraphs: [
                "Le 21 février 1916, après un bombardement d'une violence inédite, l'armée allemande du général von Falkenhayn attaque la place fortifiée de Verdun. Dans ses mémoires, écrites après la guerre, Falkenhayn affirme avoir voulu « saigner » l'armée française ; les historiens discutent de cette justification rétrospective. Le fort de Douaumont tombe le 25 février. Le général Pétain organise la défense : la « Voie sacrée », route reliant Bar-le-Duc à Verdun, achemine sans interruption hommes, munitions et vivres, et le système de la « noria » fait tourner les unités, si bien que la majorité des divisions françaises combattent à Verdun.",
                "Les Français reprennent Douaumont en octobre et Vaux en novembre 1916 ; la bataille s'achève en décembre presque sur les lignes de départ. Elle a fait plus de 300 000 morts, français et allemands, et des centaines de milliers de blessés. Pour soulager Verdun, les Britanniques et les Français lancent le 1er juillet 1916 l'offensive de la Somme : le premier jour, l'armée britannique compte près de 20 000 morts. En novembre, les Alliés n'ont avancé que de quelques kilomètres, au prix de pertes immenses dans les deux camps.",
                "Verdun devient le symbole de la guerre pour les Français, car presque toute l'armée y est passée, et un lieu de mémoire. En 1984, le président François Mitterrand et le chancelier Helmut Kohl s'y tiennent la main devant l'ossuaire de Douaumont, geste de la réconciliation franco-allemande.",
              ],
              box: { label: "À retenir", text: "Verdun (21 février au 18 décembre 1916) : une bataille d'usure défensive pour la France, avec la Voie sacrée et la noria. Plus de 300 000 morts pour un front presque inchangé. La Somme (juillet à novembre 1916) : offensive franco-britannique, apparition des chars." },
            },
            {
              heading: "Une guerre mondiale",
              paragraphs: [
                "Le conflit s'élargit. Le Japon rejoint l'Entente dès août 1914 et s'empare des possessions allemandes en Chine et dans le Pacifique. L'Empire ottoman entre en guerre aux côtés de l'Allemagne en novembre 1914, puis la Bulgarie en octobre 1915. L'Italie (1915), la Roumanie (1916), puis les États-Unis, la Grèce, la Chine et le Brésil (1917) rejoignent le camp de l'Entente.",
                "Les empires coloniaux mobilisent hommes et ressources. La France fait venir de ses colonies plusieurs centaines de milliers de soldats, comme les tirailleurs dits « sénégalais » recrutés dans toute l'Afrique occidentale, et de nombreux travailleurs ; le Royaume-Uni s'appuie sur plus d'un million de soldats indiens, sur les Canadiens, les Australiens et les Néo-Zélandais. Des travailleurs chinois sont recrutés pour les usines et les ports de France et du Royaume-Uni.",
                "Les combats touchent d'autres continents. Aux Dardanelles, les Alliés tentent en 1915 de forcer les détroits pour atteindre Constantinople : le débarquement de Gallipoli, le 25 avril 1915, commémoré en Australie et en Nouvelle-Zélande sous le nom d'Anzac Day, tourne à l'échec et les troupes rembarquent en janvier 1916. On se bat aussi au Proche-Orient, où les Britanniques soutiennent la révolte arabe contre les Ottomans (1916), en Afrique, dans les colonies allemandes, et sur les mers, où le blocus allié répond à la guerre sous-marine allemande (torpillage du paquebot Lusitania en mai 1915).",
              ],
            },
            {
              heading: "1917-1918 : le tournant et la fin de la guerre",
              paragraphs: [
                "1917 est une année de crise. En France, l'offensive du général Nivelle au Chemin des Dames (avril 1917) est un échec sanglant ; elle provoque des mutineries : des dizaines de milliers de soldats refusent de monter à l'assaut, sans refuser de défendre le front. Pétain, nommé commandant en chef, combine répression (des condamnations à mort, dont une minorité est exécutée) et amélioration des conditions de vie (permissions, repos). En Russie, la révolution de février renverse le tsar, puis les bolcheviks prennent le pouvoir en octobre et signent avec l'Allemagne la paix de Brest-Litovsk le 3 mars 1918. Mais le 6 avril 1917, les États-Unis entrent en guerre, en réaction notamment à la guerre sous-marine à outrance reprise par l'Allemagne.",
                "Libérée du front de l'Est, l'Allemagne lance au printemps 1918 de grandes offensives qui la ramènent sur la Marne. Les Alliés confient le commandement unique au général Foch. Grâce aux chars, à l'aviation et à l'arrivée massive des soldats américains, ils contre-attaquent à partir de juillet et août 1918. Les alliés de l'Allemagne cèdent un à un (Bulgarie, Empire ottoman, Autriche-Hongrie). Le 9 novembre, l'empereur Guillaume II abdique et la république est proclamée en Allemagne ; le 11 novembre 1918, l'armistice est signé à Rethondes, dans la forêt de Compiègne.",
                "Le bilan est effroyable : environ 10 millions de soldats tués, dont près de 1,4 million de Français et environ 2 millions d'Allemands, des millions de blessés et de mutilés, comme les « gueules cassées ». Pendant la guerre, le pape Benoît XV parlait déjà d'un « suicide de l'Europe » : le continent sort épuisé d'un conflit qu'il a lui-même déclenché.",
              ],
              box: { label: "Repère", text: "Septembre 1914 : bataille de la Marne. Avril 1915 : Ypres (gaz) et Gallipoli. 1916 : Verdun et la Somme. Avril 1917 : entrée en guerre des États-Unis, Chemin des Dames. 3 mars 1918 : Brest-Litovsk. 11 novembre 1918 : armistice de Rethondes." },
            },
          ],
          keyPoints: [
            "L'attentat de Sarajevo (28 juin 1914) déclenche, par le jeu des alliances, une guerre européenne en quelques jours (1er au 4 août 1914).",
            "1914 : guerre de mouvement (plan Schlieffen, bataille de la Marne) ; fin 1914 : un front fixe de 700 km et la guerre de position.",
            "1916 : Verdun et la Somme, batailles d'usure aux pertes immenses pour des gains presque nuls.",
            "La guerre est mondiale : nouveaux belligérants (Japon, Empire ottoman, États-Unis), soldats des empires coloniaux, fronts hors d'Europe.",
            "1917, année de crise : mutineries, révolutions russes, entrée en guerre des États-Unis (6 avril).",
            "1918 : retour du mouvement, offensives allemandes puis contre-offensive alliée, armistice du 11 novembre ; environ 10 millions de soldats tués.",
          ],
          example: {
            statement: "Expliquez comment l'assassinat d'un archiduc à Sarajevo devient, en cinq semaines, une guerre européenne.",
            solution: [
              "Rappeler le contexte : une Europe divisée en deux alliances (Triple-Alliance et Triple-Entente) et des Balkans où s'opposent l'Autriche-Hongrie et la Russie.",
              "Exposer le déclencheur : le 28 juin 1914, François-Ferdinand, héritier de l'Autriche-Hongrie, est tué à Sarajevo par un nationaliste serbe de Bosnie.",
              "Décrire l'escalade : soutenue par l'Allemagne, l'Autriche-Hongrie lance un ultimatum à la Serbie puis lui déclare la guerre le 28 juillet ; la Russie, protectrice de la Serbie, mobilise.",
              "Montrer l'effet des alliances : l'Allemagne déclare la guerre à la Russie (1er août) puis à la France (3 août) et envahit la Belgique ; le Royaume-Uni entre en guerre le 4 août.",
              "Conclure : un conflit local devient européen parce que chaque puissance est liée à un allié et redoute d'être prise de vitesse par la mobilisation adverse.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chacune des dates suivantes à l'événement correspondant, puis classez ces événements dans l'une des trois phases de la guerre (mouvement de 1914, position de 1915 à 1917, retour du mouvement en 1918) : (a) septembre 1914 ; (b) 21 février 1916 ; (c) 1er juillet 1916 ; (d) 6 avril 1917 ; (e) mars 1918 ; (f) 11 novembre 1918.",
              hint: "Cherchez dans le cours les grandes batailles et les grandes décisions ; une entrée en guerre peut se placer dans la phase où elle a lieu.",
              solution: [
                "(a) Septembre 1914 : bataille de la Marne, qui arrête l'offensive allemande ; phase de mouvement.",
                "(b) 21 février 1916 : début de la bataille de Verdun ; phase de position.",
                "(c) 1er juillet 1916 : début de l'offensive franco-britannique de la Somme ; phase de position.",
                "(d) 6 avril 1917 : entrée en guerre des États-Unis ; elle a lieu pendant la phase de position et prépare le retour du mouvement.",
                "(e) Mars 1918 : grandes offensives allemandes à l'ouest (et paix de Brest-Litovsk le 3 mars) ; retour du mouvement.",
                "(f) 11 novembre 1918 : armistice de Rethondes ; fin des combats à l'ouest après la contre-offensive alliée.",
              ],
            },
            {
              level: 2,
              statement: "Montrez en trois arguments que la Première Guerre mondiale mérite le qualificatif de « mondiale », alors que l'essentiel des combats a lieu en Europe. Chaque argument doit s'appuyer sur au moins un exemple précis et daté.",
              hint: "Pensez aux belligérants, aux hommes venus des empires coloniaux et aux fronts situés hors d'Europe ou sur les mers.",
              solution: [
                "Argument 1, les belligérants : la guerre oppose des États de plusieurs continents. Le Japon entre en guerre en août 1914, l'Empire ottoman en novembre 1914, les États-Unis le 6 avril 1917, puis la Chine et le Brésil la même année.",
                "Argument 2, les empires : les puissances coloniales mobilisent leurs colonies. La France recrute plusieurs centaines de milliers de soldats coloniaux (tirailleurs dits « sénégalais », soldats maghrébins), le Royaume-Uni plus d'un million de soldats indiens, ainsi que des Canadiens, des Australiens et des Néo-Zélandais ; des travailleurs chinois viennent en Europe.",
                "Argument 3, les fronts : on se bat hors d'Europe occidentale, aux Dardanelles (débarquement de Gallipoli le 25 avril 1915), au Proche-Orient (révolte arabe de 1916), en Afrique dans les colonies allemandes, et sur toutes les mers (guerre sous-marine, torpillage du Lusitania en 1915).",
                "Conclusion : même si les fronts décisifs sont européens, la guerre mobilise des hommes et des ressources du monde entier et touche plusieurs continents : elle est bien mondiale.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Pourquoi la bataille de Verdun est-elle à la fois une bataille d'usure et un symbole de la Grande Guerre pour les Français ? ». Rédigez une courte introduction avec une problématique, puis un développement en deux parties appuyé sur des faits datés, et une conclusion.",
              hint: "Une première partie peut expliquer ce qu'est une bataille d'usure à partir du déroulement et du bilan de Verdun ; une seconde peut expliquer pourquoi la bataille marque la mémoire nationale.",
              solution: [
                "Introduction : au début de 1916, la guerre de position bloque le front occidental depuis plus d'un an. Le 21 février 1916, l'armée allemande attaque Verdun ; la bataille dure jusqu'en décembre. Problématique : en quoi cette bataille illustre-t-elle la logique de l'usure, et pourquoi est-elle devenue le symbole de la guerre en France ?",
                "I. Une bataille d'usure. Après un bombardement massif, les Allemands prennent le fort de Douaumont (25 février). La bataille vise moins à percer qu'à épuiser l'adversaire. Pétain organise la résistance : la Voie sacrée ravitaille le front, la noria fait tourner les unités. Les Français reprennent Douaumont (octobre) et Vaux (novembre). Bilan : plus de 300 000 morts pour un front presque inchangé.",
                "II. Un symbole national. Grâce à la noria, la majorité des divisions françaises sont passées par Verdun : presque chaque famille y a un combattant. La bataille, menée seule par l'armée française, incarne la résistance du pays (« ils ne passeront pas »). Après la guerre, l'ossuaire de Douaumont en fait un lieu de mémoire, et en 1984 Mitterrand et Kohl y scellent la réconciliation franco-allemande.",
                "Conclusion : Verdun résume la guerre de position, avec des pertes immenses pour des gains nuls ; elle est aussi devenue le grand lieu de mémoire français de 1914-1918, puis un symbole de réconciliation.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la Première Guerre mondiale dans l'ordre chronologique.",
            items: [
              "Attentat de Sarajevo",
              "Bataille de la Marne",
              "Débarquement allié à Gallipoli",
              "Début de la bataille de Verdun",
              "Entrée en guerre des États-Unis",
              "Paix de Brest-Litovsk entre l'Allemagne et la Russie bolchevique",
              "Armistice de Rethondes",
            ],
          },
          quiz: [
            {
              q: "Quel État le Royaume-Uni veut-il notamment défendre en entrant en guerre le 4 août 1914 ?",
              options: ["La Serbie, alliée de la Russie depuis le XIXe siècle", "La Belgique, pays neutre envahi", "L'Italie", "L'Empire ottoman"],
              answer: 1,
              why: "L'invasion de la Belgique neutre par l'Allemagne, prévue par le plan Schlieffen, décide le Royaume-Uni à entrer en guerre.",
            },
            {
              q: "Que désigne la « course à la mer » de l'automne 1914 ?",
              options: ["La guerre sous-marine allemande menée contre les navires de commerce alliés", "Le débarquement des Alliés aux Dardanelles", "La fuite des civils belges vers les ports anglais", "Les tentatives de chaque camp pour déborder l'autre par le nord"],
              answer: 3,
              why: "Après la Marne, chaque armée cherche à contourner l'autre vers le nord ; la manœuvre s'arrête sur la mer du Nord et le front se fige.",
            },
            {
              q: "Qu'est-ce que la « Voie sacrée » ?",
              options: ["La route qui ravitaille Verdun depuis Bar-le-Duc", "Le nom donné par les soldats à la tranchée de première ligne", "Le défilé de la victoire de 1919", "Le chemin de fer du front de l'Est"],
              answer: 0,
              why: "Pendant la bataille de Verdun, cette route achemine sans interruption hommes, munitions et vivres vers le front.",
            },
            {
              q: "Pourquoi 1917 est-elle souvent présentée comme une année de crise et de tournant ?",
              options: ["L'Allemagne capitule au printemps", "La guerre de mouvement reprend dès janvier", "Mutineries, révolutions russes et entrée en guerre des États-Unis", "L'Italie quitte l'Entente pour rejoindre l'Allemagne et l'Autriche-Hongrie"],
              answer: 2,
              why: "1917 cumule les échecs militaires et les mutineries en France, la sortie progressive de la Russie et l'entrée en guerre des États-Unis, qui change l'équilibre des forces.",
            },
            {
              q: "Combien de soldats environ sont morts pendant la Première Guerre mondiale ?",
              options: ["Environ 1 million", "Environ 10 millions", "Environ 50 millions", "Environ 100 000"],
              answer: 1,
              why: "Environ 10 millions de soldats ont été tués, dont près de 1,4 million de Français ; il faut y ajouter des millions de blessés et de victimes civiles.",
            },
          ],
          trap: "Croire que les soldats sont restés quatre ans immobiles : la guerre de position ne domine qu'à l'ouest et entre fin 1914 et 1918 ; le front de l'Est et l'année 1918 sont des guerres de mouvement.",
          method: "Construisez une frise à trois bandes (front de l'Ouest, autres fronts, entrées en guerre et révolutions) avec une date par case : elle permet de situer immédiatement n'importe quel événement dans la bonne phase du conflit.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'societes-en-guerre',
          title: 'Les sociétés en guerre : civils acteurs et victimes',
          minutes: 35,
          objectives: [
            "Définir la guerre totale et montrer comment les États mobilisent l'économie, les finances et les esprits.",
            "Expliquer le rôle des civils, en particulier des femmes, dans l'effort de guerre.",
            "Identifier les violences subies par les civils : occupation, bombardements, blocus, déplacements.",
            "Caractériser le génocide des Arméniens (1915-1916) et en expliquer la nature.",
          ],
          course: [
            {
              heading: "Une guerre totale : mobiliser toute la nation",
              paragraphs: [
                "La guerre devait être courte ; elle dure plus de quatre ans et exige des quantités immenses d'hommes, d'armes et de munitions. Les États mobilisent alors toutes les ressources de la nation : c'est la guerre totale. En France, environ 8 millions d'hommes sont mobilisés de 1914 à 1918. L'État intervient dans l'économie comme jamais auparavant : il passe des commandes massives à l'industrie, répartit les matières premières et la main-d'œuvre, et rappelle des ouvriers qualifiés du front vers les usines. Le socialiste Albert Thomas, chargé de l'artillerie et des munitions à partir de 1915, organise cette production avec les industriels.",
                "Pour financer la guerre, les États augmentent les impôts mais surtout empruntent : en France, les grands emprunts nationaux sont présentés comme un devoir patriotique, et l'on invite les particuliers à échanger leurs pièces d'or contre des billets. Les Alliés empruntent aussi massivement aux États-Unis, qui deviennent créanciers de l'Europe. La création de monnaie provoque une forte inflation, qui pèse sur les salaires et les revenus fixes.",
              ],
              box: { label: "Définition", text: "Guerre totale : guerre qui mobilise toutes les ressources humaines, économiques, financières et morales d'un pays, efface la frontière entre soldats et civils et vise l'anéantissement de l'adversaire plutôt qu'une victoire limitée." },
            },
            {
              heading: "Les civils, acteurs de l'effort de guerre",
              paragraphs: [
                "À l'arrière, les femmes remplacent les hommes partis au front. Dès le 7 août 1914, le président du Conseil René Viviani appelle les paysannes à achever les moissons. Dans les campagnes, elles dirigent les exploitations ; dans les villes, elles deviennent conductrices de tramway, employées, et surtout ouvrières dans les usines d'armement : les « munitionnettes » sont plus de 400 000 en France à la fin de la guerre. D'autres s'engagent comme infirmières, à l'image de Marie Curie, qui organise des unités de radiologie mobiles pour soigner les blessés.",
                "Ce rôle nouveau ne signifie pas une émancipation complète. Les salaires féminins restent inférieurs à ceux des hommes, et beaucoup de femmes retournent au foyer après 1918. Le droit de vote est accordé aux femmes au Royaume-Uni (1918, à partir de 30 ans), en Allemagne (1918-1919) ou aux États-Unis (1920), mais pas en France, où le Sénat le refuse jusqu'à la Seconde Guerre mondiale (ordonnance de 1944). La guerre élargit cependant l'accès des femmes à certains métiers et à l'enseignement.",
                "Les enfants sont eux aussi mobilisés : l'école enseigne le patriotisme, les jouets et les livres mettent en scène la guerre, les élèves participent à des collectes. Les colonies fournissent soldats, travailleurs et matières premières.",
              ],
              box: { label: "À retenir", text: "Dans une guerre totale, l'arrière est indispensable au front : sans les ouvriers et les ouvrières des usines, les paysannes, les épargnants qui souscrivent aux emprunts, les armées ne pourraient pas tenir." },
            },
            {
              heading: "Encadrer les esprits : propagande, censure et consentement",
              paragraphs: [
                "Pour maintenir le moral, les États contrôlent l'information. En France, la censure (surnommée « Anastasie ») caviarde les journaux et les lettres des soldats. La propagande présente l'ennemi comme barbare et exalte l'héroïsme : les soldats parlent de « bourrage de crâne » pour désigner ces récits éloignés de leur réalité. Le Canard enchaîné, fondé en 1915, se moque de cette presse. Affiches, cartes postales, films et chansons participent à cette « culture de guerre ».",
                "Les historiens débattent des raisons qui ont fait tenir les sociétés pendant plus de quatre ans. Certains insistent sur le consentement patriotique des combattants et des civils, nourri par la haine de l'ennemi et la défense du pays envahi ; d'autres soulignent la contrainte (discipline militaire, justice, pression sociale) et les solidarités entre soldats. Ces explications ne s'excluent pas.",
                "La lassitude grandit pourtant à partir de 1916-1917 : grèves ouvrières (comme celles des ouvrières de la couture, les « midinettes », à Paris en mai 1917), mutineries dans l'armée française, révolutions en Russie, mutineries de marins et grèves en Allemagne en 1918. Des socialistes pacifistes se réunissent en Suisse à Zimmerwald (1915) pour réclamer une paix sans annexions.",
              ],
            },
            {
              heading: "Les civils, victimes de la guerre",
              paragraphs: [
                "Dès août 1914, l'armée allemande, persuadée d'affronter des francs-tireurs, exécute des civils en Belgique et dans le nord de la France : environ 6 500 civils sont tués, comme à Dinant, et la bibliothèque universitaire de Louvain est incendiée. Dans les territoires occupés (Belgique, dix départements du nord-est de la France), la population subit réquisitions, travail forcé, déportations et pénuries. Des centaines de milliers de réfugiés fuient les combats.",
                "Les civils sont aussi visés à distance : bombardements de Londres par les dirigeables Zeppelin, tirs de canons à longue portée sur Paris en 1918 (le 29 mars, un obus tue 91 personnes dans l'église Saint-Gervais). Le blocus maritime imposé par les Alliés prive l'Allemagne de denrées : pendant l'« hiver des rutabagas » (1916-1917), la population a faim, et la sous-alimentation contribue à la mort de plusieurs centaines de milliers de civils. Les prisonniers de guerre et les internés civils se comptent par millions.",
              ],
            },
            {
              heading: "Le génocide des Arméniens (1915-1916)",
              paragraphs: [
                "Dans l'Empire ottoman, le gouvernement des Jeunes-Turcs (comité Union et Progrès, dirigé notamment par Talaat Pacha et Enver Pacha) accuse les Arméniens, minorité chrétienne, de complicité avec l'ennemi russe après les défaites du Caucase. Le 24 avril 1915, des centaines d'intellectuels et de notables arméniens sont arrêtés à Constantinople puis exécutés : cette date est aujourd'hui celle de la commémoration du génocide.",
                "Les hommes sont massacrés, les femmes, les enfants et les vieillards sont déportés à pied vers les déserts de Syrie (Deir ez-Zor), où beaucoup meurent de faim, d'épuisement ou sont tués. Entre 1,2 et 1,5 million d'Arméniens disparaissent, soit environ les deux tiers des Arméniens de l'Empire. Les chrétiens assyro-chaldéens sont aussi massacrés.",
                "Il s'agit d'un génocide, car c'est l'extermination planifiée par un État d'un peuple en raison de son appartenance. Le mot est forgé en 1944 par le juriste Raphael Lemkin, qui pensait notamment au sort des Arméniens. La France le reconnaît par la loi du 29 janvier 2001 ; la Turquie, héritière de l'Empire ottoman, refuse toujours d'employer ce terme.",
              ],
              box: { label: "Définition", text: "Génocide : extermination physique, intentionnelle et planifiée d'un groupe humain en raison de son appartenance nationale, ethnique, raciale ou religieuse. Le génocide des Arméniens (1915-1916) est le premier génocide du XXe siècle reconnu comme tel par de nombreux États." },
            },
          ],
          keyPoints: [
            "Guerre totale : l'État mobilise les hommes, l'économie, les finances (emprunts, inflation) et les esprits.",
            "Les femmes remplacent les hommes dans les champs et les usines (plus de 400 000 munitionnettes en France), sans émancipation politique en France.",
            "Censure et propagande (« bourrage de crâne ») encadrent l'opinion ; les historiens débattent du consentement et de la contrainte.",
            "Les civils sont victimes : exécutions en Belgique (1914), occupation, bombardements, blocus et faim en Allemagne.",
            "Génocide des Arméniens (1915-1916) : 1,2 à 1,5 million de morts, déportations vers la Syrie, 24 avril 1915 comme date de commémoration.",
          ],
          example: {
            statement: "Montrez que, pendant la Première Guerre mondiale, les civils sont à la fois des acteurs et des victimes de la guerre.",
            solution: [
              "Définir le cadre : une guerre totale, dans laquelle la frontière entre le front et l'arrière s'efface.",
              "Civils acteurs, dans l'économie : ouvriers et munitionnettes (plus de 400 000 en France) fabriquent les armes, les paysannes nourrissent le pays.",
              "Civils acteurs, dans le financement et le moral : les épargnants souscrivent aux emprunts nationaux, les enfants participent aux collectes, l'opinion soutient l'effort de guerre.",
              "Civils victimes, de la violence directe : exécutions de civils en Belgique en 1914, occupation du nord de la France, bombardements de Londres et de Paris.",
              "Civils victimes, de la guerre économique et des crimes de masse : blocus et faim en Allemagne, génocide des Arméniens dans l'Empire ottoman (1,2 à 1,5 million de morts).",
              "Conclure : la guerre totale fait de toute la société un acteur du conflit, et donc aussi une cible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacune des notions suivantes et donnez pour chacune un exemple précis : (a) guerre totale ; (b) Union sacrée ; (c) munitionnette ; (d) « bourrage de crâne » ; (e) génocide.",
              hint: "Une bonne définition répond à « qu'est-ce que c'est ? » ; l'exemple doit comporter un lieu, un acteur ou une date.",
              solution: [
                "(a) Guerre totale : guerre qui mobilise toutes les ressources d'un pays et touche aussi les civils ; exemple : l'économie française organisée pour produire des munitions, sous la direction d'Albert Thomas à partir de 1915.",
                "(b) Union sacrée : suspension des luttes politiques au nom de la défense nationale ; exemple : l'appel du président Poincaré en août 1914, accepté par tous les partis, socialistes compris.",
                "(c) Munitionnette : ouvrière des usines d'armement ; exemple : plus de 400 000 femmes travaillent dans ces usines en France à la fin de la guerre.",
                "(d) « Bourrage de crâne » : expression des soldats pour désigner une propagande mensongère ; exemple : les journaux qui minimisent les pertes et décrivent l'ennemi comme lâche, moqués par Le Canard enchaîné (fondé en 1915).",
                "(e) Génocide : extermination planifiée d'un peuple en raison de son appartenance ; exemple : le génocide des Arméniens par le gouvernement jeune-turc de l'Empire ottoman en 1915-1916.",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives construites pour l'exercice, à partir d'ordres de grandeur réalistes) : dans une usine d'armement de la région parisienne, le personnel compte 300 femmes sur 2 000 salariés en 1915 et 1 400 femmes sur 3 500 salariés en 1918. (1) Calculez la part des femmes dans le personnel en 1915 et en 1918. (2) Comment expliquer cette évolution ? (3) Peut-on en conclure que la guerre a émancipé les Françaises ? Justifiez.",
              hint: "Part en % = effectif des femmes ÷ effectif total × 100. Pour la question 3, pensez aux salaires, à l'après-guerre et au droit de vote.",
              solution: [
                "(1) En 1915 : 300 ÷ 2 000 × 100 = 15 %. En 1918 : 1 400 ÷ 3 500 × 100 = 40 %. La part des femmes a presque triplé.",
                "(2) Les hommes sont mobilisés au front tandis que la guerre totale exige une production d'armes et de munitions toujours plus grande : les usines embauchent massivement des femmes, les munitionnettes.",
                "(3) La guerre ouvre aux femmes des métiers et des responsabilités nouvelles, mais leurs salaires restent inférieurs à ceux des hommes, beaucoup sont renvoyées à la fin du conflit et les Françaises n'obtiennent pas le droit de vote, contrairement aux Britanniques (1918) : l'émancipation est réelle mais limitée et souvent provisoire.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document : résumé d'un télégramme envoyé le 16 juillet 1915 au secrétaire d'État américain par Henry Morgenthau, ambassadeur à Constantinople des États-Unis, pays alors neutre. Il y signale que les déportations d'Arméniens pacifiques et les violences commises contre eux se multiplient ; d'après les récits bouleversants de témoins oculaires, il lui apparaît qu'une campagne d'extermination de la race arménienne est en cours, sous le prétexte de représailles contre une rébellion. Consigne : en présentant le document, montrez ce qu'il révèle de la nature des violences subies par les Arméniens et expliquez l'intérêt et les limites de ce témoignage.",
              hint: "Présentez l'auteur (sa fonction, la neutralité de son pays) et la date ; relevez les violences décrites, le mot qui en désigne le but et la justification avancée par les autorités ; demandez-vous d'où l'ambassadeur tire ses informations.",
              solution: [
                "Présentation : il s'agit du résumé d'un télégramme diplomatique du 16 juillet 1915, adressé à son gouvernement par Henry Morgenthau, ambassadeur des États-Unis à Constantinople. Les États-Unis sont neutres en 1915 : l'auteur n'est pas un belligérant ennemi de l'Empire ottoman.",
                "Contexte : l'Empire ottoman, allié de l'Allemagne, est en guerre contre la Russie ; le gouvernement jeune-turc accuse les Arméniens de trahison. Depuis le 24 avril 1915, les élites arméniennes de Constantinople ont été arrêtées.",
                "Nature des violences : le document évoque des déportations de civils « pacifiques » et des violences qui se multiplient ; il ne s'agit pas d'actes isolés, mais d'une politique menée par les autorités, qui la justifient par le prétexte d'une rébellion arménienne.",
                "Intention : l'ambassadeur parle d'une « campagne d'extermination » : le but est la disparition du peuple arménien. Cela correspond à la définition du génocide, extermination planifiée d'un peuple, même si le mot n'existe pas encore (il est forgé par Raphael Lemkin en 1944).",
                "Intérêt : c'est un témoignage contemporain des faits, rédigé par un diplomate neutre qui s'appuie sur des témoins oculaires (ses informations viennent notamment des consuls et des missionnaires présents en Anatolie).",
                "Limites : l'auteur n'a pas tout vu lui-même et ne donne pas de bilan chiffré ; il faut le compléter par d'autres sources. Les historiens estiment aujourd'hui qu'entre 1,2 et 1,5 million d'Arméniens ont péri.",
                "Conclusion : le document révèle le caractère systématique et intentionnel des violences, c'est-à-dire un génocide commis à la faveur de la guerre totale.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les sociétés dans la Grande Guerre.",
            statements: [
              { text: "Les Françaises obtiennent le droit de vote à la fin de la Première Guerre mondiale.", true: false, why: "Les Britanniques l'obtiennent en 1918, mais les Françaises seulement par l'ordonnance de 1944." },
              { text: "Les « munitionnettes » sont des ouvrières des usines d'armement.", true: true, why: "Plus de 400 000 femmes travaillent dans ces usines en France à la fin du conflit." },
              { text: "La guerre est financée principalement par l'impôt.", true: false, why: "Les États financent surtout la guerre par l'emprunt (emprunts nationaux, prêts américains) et par la création de monnaie, d'où l'inflation." },
              { text: "Des civils sont exécutés par l'armée allemande en Belgique dès août 1914.", true: true, why: "Environ 6 500 civils sont tués en Belgique et dans le nord de la France, comme à Dinant." },
              { text: "Le blocus allié provoque des pénuries alimentaires graves en Allemagne.", true: true, why: "Pendant l'hiver 1916-1917, dit « des rutabagas », la population allemande souffre de la faim." },
              { text: "Le génocide des Arméniens est commis par l'armée russe.", true: false, why: "Il est organisé par le gouvernement jeune-turc de l'Empire ottoman, en guerre contre la Russie." },
              { text: "La censure contrôle aussi les lettres des soldats.", true: true, why: "Le courrier est surveillé pour éviter la diffusion d'informations militaires et de propos démoralisants." },
            ],
          },
          quiz: [
            {
              q: "Que signifie l'expression « Union sacrée » en France en 1914 ?",
              options: ["L'alliance militaire conclue entre la France et la Russie en 1892-1894", "L'union des Églises chrétiennes contre la guerre", "Le rassemblement de tous les partis pour défendre la nation", "Le mariage des soldats avant leur départ au front"],
              answer: 2,
              why: "Le président Poincaré appelle les Français à suspendre leurs divisions politiques ; même les socialistes votent les crédits de guerre.",
            },
            {
              q: "Comment les États financent-ils surtout la guerre ?",
              options: ["Par l'emprunt et la création de monnaie", "Par la vente de leurs colonies à des pays neutres", "Par les réparations versées par les vaincus", "Par la suppression des salaires des fonctionnaires"],
              answer: 0,
              why: "Emprunts nationaux, prêts étrangers (notamment américains) et création monétaire financent la guerre, ce qui provoque une forte inflation.",
            },
            {
              q: "Quelle date sert aujourd'hui à commémorer le génocide des Arméniens ?",
              options: ["Le 11 novembre 1918", "Le 28 juin 1914", "Le 6 avril 1917", "Le 24 avril 1915"],
              answer: 3,
              why: "Le 24 avril 1915, des centaines d'intellectuels et de notables arméniens sont arrêtés à Constantinople, ce qui marque le début du génocide.",
            },
            {
              q: "Qui forge le mot « génocide », en 1944 ?",
              options: ["Le président américain Woodrow Wilson", "Le juriste Raphael Lemkin", "L'ambassadeur Henry Morgenthau", "Le pape Benoît XV"],
              answer: 1,
              why: "Raphael Lemkin invente le terme en 1944 pour nommer l'extermination planifiée d'un peuple ; il pensait notamment au sort des Arméniens.",
            },
            {
              q: "Que désigne l'« hiver des rutabagas » (1916-1917) ?",
              options: ["Une grève des paysans français contre les réquisitions", "La famine provoquée en Allemagne par le blocus allié", "L'offensive russe du général Broussilov", "Une campagne de propagande pour manger des légumes locaux"],
              answer: 1,
              why: "Privée d'importations par le blocus, l'Allemagne manque de pommes de terre et de céréales : la population se nourrit de rutabagas.",
            },
          ],
          trap: "Réduire la guerre totale au front et aux soldats, ou confondre le génocide des Arméniens avec un massacre de guerre : c'est une extermination planifiée par l'État ottoman d'un peuple entier, femmes et enfants compris.",
          method: "Pour toute question sur les civils, organisez vos idées en deux colonnes « acteurs » et « victimes » et placez dans chacune au moins un exemple daté et localisé : vous obtenez directement un plan en deux parties.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'sortir-de-la-guerre',
          title: 'Sortir de la guerre : traités et nouvel ordre des nations',
          minutes: 35,
          objectives: [
            "Expliquer les principes du président Wilson et la tentative de construire un ordre des nations démocratiques.",
            "Décrire les principales clauses du traité de Versailles et des autres traités de paix (1919-1923).",
            "Caractériser la fin des empires européens et la naissance de nouveaux États en Europe centrale et au Proche-Orient.",
            "Mesurer les limites de la paix et le poids du deuil et de la mémoire de la guerre.",
          ],
          course: [
            {
              heading: "Les Quatorze points et la conférence de la paix",
              paragraphs: [
                "Le 8 janvier 1918, le président des États-Unis Woodrow Wilson présente devant le Congrès un programme de paix en quatorze points. Il y défend la diplomatie ouverte (la fin des traités secrets), la liberté de navigation sur les mers, la liberté du commerce, la réduction des armements, le règlement des questions territoriales selon les aspirations des peuples, et, dans le dernier point, la création d'une « société générale des nations » chargée de garantir l'indépendance et l'intégrité de tous les États.",
                "La conférence de la paix s'ouvre à Paris le 18 janvier 1919. Les vainqueurs y décident seuls : les vaincus ne sont pas invités à négocier et la Russie bolchevique est absente. Les décisions sont prises par quatre hommes : Wilson, Georges Clemenceau (France), David Lloyd George (Royaume-Uni) et Vittorio Orlando (Italie). Leurs objectifs divergent : Wilson veut une paix fondée sur le droit des peuples, Clemenceau veut la sécurité de la France et des réparations, Lloyd George veut affaiblir la flotte et les colonies allemandes sans ruiner l'Allemagne.",
              ],
              box: { label: "Définition", text: "Droit des peuples à disposer d'eux-mêmes : principe selon lequel chaque peuple doit pouvoir choisir librement son statut politique, par exemple former son propre État. Wilson parle plutôt d'« autonomie » et d'aspirations nationales ; le principe est appliqué de manière inégale en 1919-1920." },
            },
            {
              heading: "Le traité de Versailles (28 juin 1919)",
              paragraphs: [
                "Le traité avec l'Allemagne est signé le 28 juin 1919 dans la galerie des Glaces du château de Versailles, là où l'Empire allemand avait été proclamé en 1871. Sur le plan territorial, l'Allemagne rend l'Alsace-Moselle à la France, cède Eupen et Malmedy à la Belgique, le nord du Schleswig au Danemark après plébiscite, et surtout la Posnanie et une partie de la Prusse occidentale à la Pologne, qui obtient un accès à la mer (le « corridor de Dantzig ») ; Dantzig devient une ville libre placée sous la protection de la Société des Nations. La Sarre est confiée pour quinze ans à la SDN, et ses mines de charbon à la France. L'Allemagne perd toutes ses colonies.",
                "Sur le plan militaire, l'armée allemande est limitée à 100 000 hommes, sans service militaire obligatoire, sans aviation militaire, sans chars ni sous-marins ; la rive gauche du Rhin est démilitarisée et occupée par les Alliés pour quinze ans. L'article 231 déclare l'Allemagne et ses alliés responsables des pertes et des dommages causés par la guerre : il fonde l'obligation de payer des réparations, dont le montant est fixé en 1921 à 132 milliards de marks-or.",
                "Les Allemands, qui n'ont pas négocié, dénoncent un Diktat (une paix imposée) et rejettent la responsabilité de la guerre. Dès 1919, l'économiste britannique John Maynard Keynes critique des réparations qu'il juge impossibles à payer. En France, beaucoup jugent au contraire le traité trop doux, faute de garanties durables contre l'Allemagne.",
              ],
              box: { label: "À retenir", text: "Versailles : pertes territoriales (Alsace-Moselle, corridor polonais, colonies), désarmement (100 000 hommes), démilitarisation de la Rhénanie, responsabilité de la guerre (article 231) et réparations. Un traité vécu comme un Diktat en Allemagne." },
            },
            {
              heading: "La fin des empires et la nouvelle carte de l'Europe",
              paragraphs: [
                "Quatre empires disparaissent : l'Empire allemand devient la république de Weimar, l'Empire russe s'effondre dans la révolution et la guerre civile (l'URSS naît en 1922), l'Autriche-Hongrie éclate dès l'automne 1918, et l'Empire ottoman est démembré. D'autres traités règlent le sort des vaincus : Saint-Germain-en-Laye avec l'Autriche (1919), qui interdit son rattachement à l'Allemagne, Neuilly avec la Bulgarie (1919), et Trianon avec la Hongrie (1920), qui perd environ les deux tiers de son territoire.",
                "De nouveaux États naissent ou renaissent, au nom du principe des nationalités : la Pologne, la Tchécoslovaquie, le royaume des Serbes, Croates et Slovènes (la future Yougoslavie), ainsi que la Finlande et les États baltes (Estonie, Lettonie, Lituanie). Ils sont pour la plupart des démocraties parlementaires, mais aucun n'est ethniquement homogène : plus de trois millions d'Allemands vivent en Tchécoslovaquie (les Sudètes), des Hongrois se retrouvent en Roumanie ou en Tchécoslovaquie. Ces minorités nationales sont une source de tensions durables.",
              ],
              box: { label: "Repère", text: "8 janvier 1918 : Quatorze points. 18 janvier 1919 : ouverture de la conférence de Paris. 28 juin 1919 : traité de Versailles. 10 septembre 1919 : Saint-Germain-en-Laye. 27 novembre 1919 : Neuilly. 4 juin 1920 : Trianon. 10 août 1920 : Sèvres. 24 juillet 1923 : Lausanne." },
            },
            {
              heading: "Le Proche-Orient : de l'Empire ottoman aux mandats",
              paragraphs: [
                "Pendant la guerre, les Britanniques ont fait des promesses contradictoires : aux Arabes, un grand royaume indépendant en échange de leur révolte contre les Ottomans (1916) ; aux sionistes, un « foyer national juif » en Palestine (déclaration Balfour, 2 novembre 1917) ; tandis que les accords secrets Sykes-Picot (1916) prévoient le partage de la région entre zones d'influence française et britannique.",
                "Le traité de Sèvres (10 août 1920) démembre l'Empire ottoman. Les provinces arabes sont confiées par la SDN, sous forme de mandats, à la France (Syrie, Liban) et au Royaume-Uni (Palestine, Transjordanie, Irak). Mais en Anatolie, Mustafa Kemal refuse le traité et mène la guerre contre les Grecs et les Alliés. Victorieux, il obtient le traité de Lausanne (24 juillet 1923), qui reconnaît les frontières de la Turquie ; les promesses faites aux Arméniens et aux Kurdes à Sèvres sont abandonnées. Un échange de populations entre la Grèce et la Turquie déplace plus d'un million de personnes. La République turque est proclamée le 29 octobre 1923.",
              ],
              box: { label: "Définition", text: "Mandat : administration d'un territoire confiée par la Société des Nations à une puissance (France, Royaume-Uni) chargée de le conduire vers l'indépendance. En pratique, les mandats ressemblent souvent à une domination coloniale." },
            },
            {
              heading: "La SDN, une paix fragile et une mémoire du deuil",
              paragraphs: [
                "Le pacte de la Société des Nations (SDN) figure au début de chaque traité. Installée à Genève, elle commence à fonctionner en 1920. Elle repose sur la sécurité collective : les États membres s'engagent à régler leurs différends par l'arbitrage et peuvent sanctionner un agresseur. Mais elle n'a pas d'armée, ses décisions exigent souvent l'unanimité, et elle est affaiblie dès l'origine : le Sénat américain refuse de ratifier le traité, si bien que les États-Unis n'y entrent pas ; l'Allemagne n'y est admise qu'en 1926 et l'URSS en 1934.",
                "La paix laisse de nombreux mécontents : l'Allemagne humiliée, l'Italie qui parle de « victoire mutilée » car elle n'a pas obtenu tous les territoires promis, la Hongrie amputée. Les sociétés sortent aussi de la guerre en portant le deuil : environ 36 000 monuments aux morts sont érigés dans les communes françaises, un Soldat inconnu est inhumé sous l'Arc de triomphe en 1921 et le 11 novembre devient fête nationale en 1922. Les anciens combattants, souvent pacifistes, pèsent sur la vie politique de l'entre-deux-guerres.",
              ],
            },
          ],
          keyPoints: [
            "Quatorze points de Wilson (8 janvier 1918) : diplomatie ouverte, droit des peuples, désarmement, Société des Nations.",
            "Conférence de Paris (1919) : les vainqueurs décident seuls ; les vaincus n'ont pas négocié.",
            "Traité de Versailles (28 juin 1919) : pertes territoriales, désarmement, article 231 et réparations ; un Diktat pour les Allemands.",
            "Quatre empires disparaissent (allemand, russe, austro-hongrois, ottoman) ; de nouveaux États naissent, avec des minorités nombreuses.",
            "Au Proche-Orient, les mandats français et britanniques remplacent l'Empire ottoman ; Lausanne (1923) consacre la Turquie de Mustafa Kemal.",
            "La SDN (Genève, 1920), sans les États-Unis ni armée, fonde une paix fragile ; le deuil marque durablement les sociétés.",
          ],
          example: {
            statement: "Pourquoi peut-on dire que les traités de 1919-1920 tentent de construire un « ordre des nations démocratiques » ?",
            solution: [
              "Rappeler le projet : Wilson, dans ses Quatorze points (1918), veut une paix fondée sur le droit des peuples, la diplomatie ouverte et la sécurité collective.",
              "Montrer l'application du principe des nationalités : les empires multinationaux disparaissent et de nouveaux États naissent (Pologne, Tchécoslovaquie, royaume des Serbes, Croates et Slovènes, États baltes).",
              "Montrer la dimension démocratique : la plupart de ces États, comme la république de Weimar en Allemagne, adoptent des régimes parlementaires.",
              "Montrer l'organisation de la paix : la Société des Nations, créée par le pacte inscrit dans les traités, doit régler les conflits par l'arbitrage.",
              "Nuancer : les vaincus n'ont pas négocié, le droit des peuples est appliqué inégalement (minorités, Autriche interdite de rattachement, mandats au Proche-Orient) et la SDN est affaiblie par l'absence des États-Unis.",
              "Conclure : les traités dessinent bien un ordre des nations démocratiques, mais il reste inachevé et contesté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des territoires ou États suivants, indiquez ce que décident les traités de paix de 1919-1920 : (a) l'Alsace-Moselle ; (b) Dantzig ; (c) la Sarre ; (d) la Rhénanie ; (e) la Syrie et le Liban ; (f) l'Autriche.",
              hint: "Cinq de ces décisions figurent dans le traité de Versailles ou dans les mandats de la SDN ; pour l'Autriche, pensez au traité de Saint-Germain-en-Laye.",
              solution: [
                "(a) L'Alsace-Moselle est rendue à la France (traité de Versailles).",
                "(b) Dantzig devient une ville libre placée sous la protection de la SDN ; la Pologne obtient un accès à la mer par un « corridor ».",
                "(c) La Sarre est administrée par la SDN pour quinze ans et ses mines de charbon sont données à la France.",
                "(d) La rive gauche du Rhin est démilitarisée et occupée par les Alliés pour quinze ans.",
                "(e) La Syrie et le Liban, anciennes provinces ottomanes, sont confiés à la France sous forme de mandats de la SDN.",
                "(f) L'Autriche devient un petit État indépendant ; le traité de Saint-Germain-en-Laye (1919) lui interdit de se rattacher à l'Allemagne.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi le traité de Versailles est contesté à la fois en Allemagne et en France. Construisez votre réponse en deux paragraphes argumentés, chacun appuyé sur au moins deux éléments précis du traité.",
              hint: "Pour l'Allemagne, pensez à la façon dont le traité a été élaboré et à l'article 231 ; pour la France, pensez à la sécurité face à un voisin plus peuplé.",
              solution: [
                "En Allemagne : les vaincus n'ont pas négocié, d'où le mot Diktat. L'article 231, qui fait de l'Allemagne et de ses alliés les responsables de la guerre, est jugé injuste et humiliant, d'autant que l'armée allemande n'a pas été battue sur le sol allemand. Les pertes territoriales (Alsace-Moselle, corridor polonais qui sépare la Prusse orientale du reste du pays, colonies), la limitation de l'armée à 100 000 hommes et les réparations (132 milliards de marks-or fixés en 1921) nourrissent un désir de revanche.",
                "En France : beaucoup jugent le traité insuffisant pour garantir la sécurité. L'Allemagne reste unie, plus peuplée et industrielle que la France ; l'occupation de la Rhénanie n'est que provisoire (quinze ans) ; la garantie militaire promise par les États-Unis et le Royaume-Uni tombe quand le Sénat américain refuse de ratifier le traité ; enfin, le paiement des réparations, indispensables à la reconstruction des régions dévastées, paraît incertain.",
                "Conclusion : jugé trop dur par les Allemands et trop doux par une partie des Français, le traité ne satisfait personne, ce qui fragilise la paix.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « En quoi la Première Guerre mondiale marque-t-elle la fin des empires européens ? ». Rédigez une introduction (définition des termes, problématique), un développement en deux ou trois parties appuyé sur des exemples précis, et une conclusion qui ouvre sur les limites de ce nouvel ordre.",
              hint: "Distinguez les empires vaincus qui disparaissent et les empires coloniaux des vainqueurs, qui ne disparaissent pas et s'agrandissent même au Proche-Orient.",
              solution: [
                "Introduction : en 1914, l'Europe est dominée par de grands empires, États multinationaux gouvernés par des dynasties (Allemagne, Autriche-Hongrie, Russie, Empire ottoman). Problématique : comment la guerre provoque-t-elle leur effondrement, et quel ordre nouveau les remplace ?",
                "I. L'effondrement des empires vaincus ou épuisés : la Russie s'effondre dans la révolution (1917) et sort de la guerre à Brest-Litovsk (1918) ; Guillaume II abdique le 9 novembre 1918 ; l'Autriche-Hongrie éclate à l'automne 1918 ; l'Empire ottoman est démembré par le traité de Sèvres (1920).",
                "II. Un nouvel ordre des nations : au nom du droit des peuples défendu par Wilson, de nouveaux États naissent (Pologne, Tchécoslovaquie, royaume des Serbes, Croates et Slovènes, États baltes) ; la Turquie de Mustafa Kemal fait reconnaître ses frontières à Lausanne (1923) ; la SDN doit garantir la paix.",
                "III. Les limites : les empires coloniaux des vainqueurs subsistent et s'étendent par les mandats (Syrie et Liban pour la France, Palestine et Irak pour le Royaume-Uni) ; les nouveaux États comptent de fortes minorités (Allemands des Sudètes) ; les peuples colonisés, qui ont participé à la guerre, n'obtiennent pas le droit à disposer d'eux-mêmes.",
                "Conclusion : la guerre met fin aux empires continentaux d'Europe et fait naître une Europe des nations, mais le nouvel ordre reste fragile, contesté par les vaincus et inachevé pour les peuples colonisés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque traité au pays vaincu qui le signe.",
            pairs: [
              { left: "Traité de Versailles (1919)", right: "Allemagne" },
              { left: "Traité de Saint-Germain-en-Laye (1919)", right: "Autriche" },
              { left: "Traité de Neuilly (1919)", right: "Bulgarie" },
              { left: "Traité de Trianon (1920)", right: "Hongrie" },
              { left: "Traité de Sèvres (1920)", right: "Empire ottoman" },
              { left: "Traité de Lausanne (1923)", right: "Turquie de Mustafa Kemal" },
            ],
          },
          quiz: [
            {
              q: "Que propose le dernier des Quatorze points de Wilson ?",
              options: ["Le rattachement de l'Autriche à l'Allemagne", "Le partage des colonies allemandes entre les principaux vainqueurs de la guerre", "Le rétablissement du tsar en Russie", "Une association générale des nations pour garantir la paix"],
              answer: 3,
              why: "Le quatorzième point prévoit une « société générale des nations », à l'origine de la SDN créée en 1919-1920.",
            },
            {
              q: "Où et quand le traité de Versailles est-il signé ?",
              options: ["Dans la galerie des Glaces, le 28 juin 1919", "À Rethondes, le 11 novembre 1918", "À Genève, le 10 janvier 1920", "À Paris, le 18 janvier 1919, à l'ouverture de la conférence"],
              answer: 0,
              why: "Il est signé dans la galerie des Glaces, cinq ans jour pour jour après l'attentat de Sarajevo, là où l'Empire allemand avait été proclamé en 1871.",
            },
            {
              q: "Que fonde l'article 231 du traité de Versailles ?",
              options: ["L'interdiction de l'Anschluss", "La création de la SDN", "La responsabilité de l'Allemagne et de ses alliés, base des réparations", "Le retour à la France de l'Alsace-Moselle, annexée par l'Allemagne en 1871"],
              answer: 2,
              why: "L'article 231 rend l'Allemagne et ses alliés responsables des dommages de la guerre ; il justifie les réparations et est vécu comme une humiliation.",
            },
            {
              q: "Pourquoi la SDN est-elle affaiblie dès sa naissance ?",
              options: ["Elle est installée à Moscou", "Les États-Unis n'y entrent pas, car leur Sénat refuse de ratifier le traité", "Elle dispose d'une armée trop nombreuse", "La France et le Royaume-Uni refusent d'y siéger tant que l'Allemagne n'est pas désarmée"],
              answer: 1,
              why: "Le Sénat américain rejette le traité de Versailles : les États-Unis, dont le président avait inspiré la SDN, n'en font jamais partie.",
            },
            {
              q: "Quel traité remplace celui de Sèvres et fixe les frontières de la Turquie ?",
              options: ["Le traité de Lausanne (1923)", "Le traité de Trianon (1920)", "Les accords Sykes-Picot (1916)", "Le traité de Brest-Litovsk (1918)"],
              answer: 0,
              why: "Après la victoire de Mustafa Kemal, le traité de Lausanne (24 juillet 1923) reconnaît la Turquie et abandonne les clauses de Sèvres.",
            },
          ],
          trap: "Confondre l'armistice (11 novembre 1918, simple arrêt des combats) et les traités de paix (1919-1923), ou croire que le droit des peuples s'applique à tous : les colonies des vainqueurs n'en bénéficient pas.",
          method: "Apprenez les traités avec un tableau à quatre colonnes (traité, date, vaincu concerné, deux clauses majeures) et retracez de mémoire la carte de l'Europe de 1914 puis celle de 1923 : la comparaison fait apparaître la fin des empires.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 1 · LA MÉTROPOLISATION : UN PROCESSUS MONDIAL      */
    /* ==================================================================== */
    {
      id: 'metropolisation',
      lessons: [

        /* ------------------------------------------------------------------ */
        {
          id: 'poids-des-metropoles',
          title: 'Les villes à l’échelle mondiale : le poids croissant des métropoles',
          minutes: 30,
          objectives: [
            "Décrire l'urbanisation du monde et ses différences selon les continents.",
            "Définir et distinguer les notions de ville, mégapole, mégalopole, métropole et ville mondiale.",
            "Expliquer le processus de métropolisation et son lien avec la mondialisation.",
            "Localiser les principales métropoles mondiales et caractériser l'archipel métropolitain mondial.",
          ],
          course: [
            {
              heading: "Un monde de plus en plus urbain",
              paragraphs: [
                "L'urbanisation est l'augmentation de la part de la population qui vit en ville. Elle est très rapide depuis le milieu du XXe siècle : selon les estimations de l'ONU, plus de la moitié de l'humanité est urbaine depuis 2007-2008, et cette part pourrait atteindre environ les deux tiers vers 2050. L'urbanisation résulte de l'exode rural (les ruraux viennent chercher en ville du travail, des services, des revenus) et de la croissance naturelle des populations urbaines elles-mêmes.",
                "Le phénomène est inégal. L'Amérique du Nord, l'Amérique latine et l'Europe sont très urbanisées (environ les trois quarts de la population ou davantage), alors que l'Afrique subsaharienne et l'Asie du Sud restent majoritairement rurales. Mais c'est en Afrique et en Asie que la population urbaine augmente le plus vite : selon l'ONU, l'Inde, la Chine et le Nigeria devraient représenter à eux trois plus d'un tiers de la croissance urbaine mondiale entre 2018 et 2050.",
                "Comparer les pays exige de la prudence, car la définition de la ville varie. En France, l'INSEE parle d'unité urbaine pour un ensemble d'au moins 2 000 habitants dont les constructions sont continues ; d'autres pays fixent des seuils bien plus élevés, et certains utilisent des critères administratifs. Les statistiques urbaines dépendent donc de la définition retenue.",
              ],
              box: { label: "Définition", text: "Urbanisation : augmentation de la part de la population vivant en ville ; le taux d'urbanisation est la part de la population urbaine dans la population totale. Exode rural : départ des habitants des campagnes vers les villes." },
            },
            {
              heading: "Des villes de plus en plus grandes : mégapoles et mégalopoles",
              paragraphs: [
                "Une mégapole (ou mégacité) est une agglomération d'au moins 10 millions d'habitants. En 1950, seules New York et Tokyo dépassaient ce seuil ; l'ONU en comptait 33 en 2018, dont la majorité en Asie (Tokyo, Delhi, Shanghai, Mumbai, Dacca...), mais aussi en Amérique latine (São Paulo, Mexico), en Afrique (Le Caire, Lagos, Kinshasa) et en Europe (Moscou, Paris). Les plus fortes croissances concernent aujourd'hui les villes des pays du Sud.",
                "Une mégalopole est autre chose : c'est un ensemble de grandes villes proches, reliées par des réseaux de transport et de communication très denses, qui forment un espace urbanisé presque continu sur plusieurs centaines de kilomètres. Le géographe Jean Gottmann a forgé ce terme en 1961 pour décrire la région urbaine qui s'étend de Boston à Washington (la « BosWash »). On parle aussi de mégalopole japonaise (de Tokyo à Osaka et au-delà) et, pour l'Europe, d'une dorsale de Londres à Milan par la vallée du Rhin.",
                "La taille ne suffit pas à mesurer la puissance d'une ville. Lagos ou Kinshasa sont des mégapoles très peuplées, mais leur influence mondiale reste limitée ; à l'inverse, des villes moins peuplées comme Zurich, Genève ou Singapour exercent des fonctions mondiales.",
              ],
              box: { label: "À retenir", text: "Mégapole : une très grande agglomération (au moins 10 millions d'habitants), critère de taille. Mégalopole : un chapelet de grandes villes reliées entre elles, critère d'organisation de l'espace. Ne les confondez pas." },
            },
            {
              heading: "La métropolisation : concentrer les hommes, les richesses et les pouvoirs",
              paragraphs: [
                "Une métropole est une grande ville qui concentre population, activités et surtout fonctions de commandement : pouvoirs politiques, sièges sociaux d'entreprises, banques et places boursières, universités et centres de recherche, médias, grands équipements culturels. Elle organise un territoire plus ou moins vaste (une région, un pays, un continent, le monde) et elle est connectée aux autres métropoles par des réseaux (aéroports, lignes à grande vitesse, câbles, flux financiers).",
                "La métropolisation est le processus par lequel les hommes, les activités et les fonctions de haut niveau se concentrent dans les plus grandes villes, qui transforment en retour leur espace. Elle est liée à la mondialisation : les entreprises recherchent des lieux où trouver une main-d'œuvre très qualifiée, des services spécialisés (juristes, publicitaires, consultants), des infrastructures et un accès rapide au reste du monde. Les métropoles produisent ainsi une part de la richesse bien supérieure à leur part de la population.",
              ],
              box: { label: "Définition", text: "Métropolisation : processus de concentration des populations, des activités et des fonctions de commandement dans les plus grandes villes, qui s'accompagne de leur insertion dans les réseaux mondiaux et de profondes transformations de leur espace (étalement urbain, spécialisation des quartiers)." },
            },
            {
              heading: "Villes mondiales et archipel métropolitain mondial",
              paragraphs: [
                "Au sommet de la hiérarchie urbaine se trouvent les villes mondiales (global cities), selon l'expression popularisée par la sociologue Saskia Sassen en 1991 à propos de New York, Londres et Tokyo. Ces villes dirigent l'économie mondiale : elles accueillent les sièges des plus grandes firmes transnationales, les principales places financières et les fonctions de conception et d'innovation. Les classements internationaux placent aujourd'hui New York et Londres en tête, suivies de villes comme Paris, Tokyo, Singapour, Hong Kong, Shanghai ou Dubaï.",
                "Ces métropoles forment un réseau que le géographe Olivier Dollfus a appelé l'archipel métropolitain mondial (AMM) : des « îles » urbaines reliées entre elles par des flux intenses de personnes, de marchandises, de capitaux et d'informations, souvent plus connectées entre elles qu'avec leur arrière-pays. Cet archipel est très sélectif : il se concentre dans les trois grands pôles de l'Amérique du Nord, de l'Europe et de l'Asie orientale, s'étend aux grandes villes des pays émergents, mais laisse de côté une grande partie de l'Afrique et de l'Asie centrale.",
              ],
              box: { label: "Définition", text: "Ville mondiale : métropole qui exerce des fonctions de commandement à l'échelle de la planète (finance, sièges de firmes, décisions politiques, culture). Archipel métropolitain mondial : réseau des grandes métropoles reliées par des flux intenses, qui organise la mondialisation." },
            },
          ],
          keyPoints: [
            "Plus de la moitié de l'humanité vit en ville depuis 2007-2008 ; la croissance urbaine est aujourd'hui la plus forte en Afrique et en Asie.",
            "Mégapole : agglomération d'au moins 10 millions d'habitants (33 en 2018 selon l'ONU, surtout en Asie).",
            "Mégalopole : chapelet de grandes villes reliées, comme la BosWash décrite par Jean Gottmann en 1961.",
            "Métropole : grande ville qui concentre les fonctions de commandement ; la métropolisation concentre hommes, richesses et pouvoirs.",
            "Villes mondiales (New York, Londres, Tokyo...) et archipel métropolitain mondial : un réseau sélectif qui organise la mondialisation.",
          ],
          example: {
            statement: "Lagos (Nigeria) compte plus de 10 millions d'habitants, Genève (Suisse) moins d'un million dans son agglomération. Laquelle de ces deux villes est la plus « métropolisée » ? Justifiez.",
            solution: [
              "Rappeler la distinction : la taille (critère de la mégapole) ne se confond pas avec la métropolisation, qui se mesure aux fonctions de commandement et à la connexion aux réseaux mondiaux.",
              "Caractériser Lagos : une mégapole à la croissance très rapide, capitale économique du Nigeria, avec un grand port et des sièges d'entreprises nationales, mais dont l'influence internationale reste limitée et dont une partie des habitants vit dans des quartiers informels.",
              "Caractériser Genève : une ville moyenne par sa population, mais qui accueille de nombreuses organisations internationales (siège européen de l'ONU, Organisation mondiale de la santé, Croix-Rouge), des banques et des négociants en matières premières de rang mondial.",
              "Comparer : Genève exerce des fonctions de commandement mondiales alors que Lagos exerce surtout des fonctions nationales et régionales.",
              "Conclure : Lagos est la plus grande, mais Genève est la plus métropolisée à l'échelle mondiale ; la puissance d'une ville tient à ses fonctions plus qu'à sa population.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacun des espaces suivants dans la catégorie qui lui convient le mieux (mégapole sans grand rôle mondial, mégalopole, ville mondiale) et justifiez en une phrase : (a) Kinshasa ; (b) Londres ; (c) l'espace urbain de Boston à Washington ; (d) Dacca ; (e) New York.",
              hint: "Demandez-vous à chaque fois si le critère principal est la taille de la population, l'organisation en chapelet de villes ou les fonctions de commandement mondiales.",
              solution: [
                "(a) Kinshasa : mégapole sans grand rôle mondial ; plus de 10 millions d'habitants, mais peu de fonctions de commandement internationales.",
                "(b) Londres : ville mondiale ; une des deux premières places financières du monde, sièges de grandes firmes, rayonnement culturel planétaire.",
                "(c) De Boston à Washington : mégalopole ; un chapelet de grandes villes (Boston, New York, Philadelphie, Baltimore, Washington) reliées par des réseaux denses, décrit par Jean Gottmann en 1961.",
                "(d) Dacca : mégapole sans grand rôle mondial ; une croissance démographique très rapide, une fonction de capitale nationale, mais une faible influence mondiale.",
                "(e) New York : ville mondiale (et élément de la mégalopole BosWash) ; Wall Street, siège de l'ONU, sièges de firmes transnationales.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Dans un pays d'Afrique de l'Ouest, la population totale passe de 40 millions d'habitants en 1990 à 60 millions en 2020, et la population urbaine de 12 millions à 30 millions. En 2020, la plus grande ville compte 9 millions d'habitants. (1) Calculez le taux d'urbanisation en 1990 et en 2020. (2) Par combien la population urbaine a-t-elle été multipliée ? (3) Quelle part de la population urbaine vit dans la plus grande ville en 2020 ? (4) Interprétez ces résultats.",
              hint: "Taux d'urbanisation = population urbaine ÷ population totale × 100. Un coefficient multiplicateur se calcule en divisant la valeur d'arrivée par la valeur de départ.",
              solution: [
                "(1) 1990 : 12 ÷ 40 × 100 = 30 %. 2020 : 30 ÷ 60 × 100 = 50 %.",
                "(2) 30 ÷ 12 = 2,5 : la population urbaine a été multipliée par 2,5 en trente ans, alors que la population totale n'a été multipliée que par 1,5 (60 ÷ 40).",
                "(3) 9 ÷ 30 × 100 = 30 % des citadins vivent dans la plus grande ville.",
                "(4) Le pays connaît une urbanisation rapide, alimentée par l'exode rural et par la croissance naturelle. La concentration dans une seule ville, qui regroupe près d'un tiers des citadins, traduit une forte métropolisation à l'échelle nationale ; on parle de macrocéphalie quand une ville écrase ainsi le reste du réseau urbain.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « La métropolisation est-elle un processus mondial et uniforme ? ». Rédigez une introduction (définition, problématique), un développement en deux parties appuyé sur des exemples localisés, et une conclusion.",
              hint: "La question contient deux adjectifs : montrez d'abord que le processus est mondial, puis discutez le mot « uniforme » en montrant la sélectivité et la hiérarchie des métropoles.",
              solution: [
                "Introduction : la métropolisation est la concentration des populations, des activités et des fonctions de commandement dans les plus grandes villes. Elle accompagne la mondialisation. Problématique : touche-t-elle tous les espaces de la même manière ?",
                "I. Un processus mondial. Toutes les régions du monde s'urbanisent : plus de la moitié de l'humanité est urbaine depuis 2007-2008. Le nombre de mégapoles est passé de 2 en 1950 à 33 en 2018 selon l'ONU, sur tous les continents (Tokyo, Delhi, São Paulo, Lagos, Paris). Partout, les grandes villes concentrent les sièges d'entreprises, les universités et les équipements de transport.",
                "II. Un processus sélectif et hiérarchisé. Les fonctions de commandement mondiales se concentrent dans quelques villes mondiales (New York, Londres, Tokyo, Paris, Singapour) et dans les trois grands pôles de l'archipel métropolitain mondial. Certaines mégapoles très peuplées (Kinshasa, Dacca) restent en marge, tandis que de petites métropoles (Genève, Zurich) ont un rayonnement mondial. Les rythmes diffèrent : croissance démographique rapide dans les villes du Sud, croissance plus lente mais insertion ancienne dans les villes du Nord.",
                "Conclusion : la métropolisation est bien mondiale, mais elle n'est pas uniforme ; elle produit une hiérarchie urbaine dominée par quelques villes mondiales et creuse les écarts entre les espaces connectés et les espaces en marge.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Urbanisation", right: "Augmentation de la part de la population vivant en ville" },
              { left: "Mégapole", right: "Agglomération d'au moins 10 millions d'habitants" },
              { left: "Mégalopole", right: "Chapelet de grandes villes reliées par des réseaux denses" },
              { left: "Métropole", right: "Grande ville qui concentre des fonctions de commandement" },
              { left: "Ville mondiale", right: "Métropole qui commande à l'échelle de la planète" },
              { left: "Archipel métropolitain mondial", right: "Réseau des grandes métropoles reliées par des flux intenses" },
            ],
          },
          quiz: [
            {
              q: "Depuis quand plus de la moitié de l'humanité vit-elle en ville, selon l'ONU ?",
              options: ["Depuis 1950", "Depuis le début du XXe siècle", "Depuis 2007-2008", "Ce n'est pas encore le cas aujourd'hui"],
              answer: 2,
              why: "Le seuil de 50 % de citadins est franchi en 2007-2008 selon les estimations de l'ONU ; la part urbaine continue d'augmenter.",
            },
            {
              q: "Qui a forgé le terme de « mégalopole » en 1961 ?",
              options: ["Saskia Sassen", "Olivier Dollfus", "Roger Brunet", "Jean Gottmann"],
              answer: 3,
              why: "Le géographe Jean Gottmann l'emploie pour l'espace urbanisé de Boston à Washington ; Saskia Sassen a popularisé l'expression « ville mondiale ».",
            },
            {
              q: "Qu'est-ce qui définit d'abord une métropole ?",
              options: ["Un nombre d'habitants supérieur à 10 millions", "La concentration de fonctions de commandement", "Le statut de capitale politique d'un pays", "La présence d'un port maritime de rang mondial"],
              answer: 1,
              why: "Une métropole se définit par ses fonctions de commandement et son insertion dans les réseaux ; ce n'est ni un seuil de population ni forcément une capitale.",
            },
            {
              q: "Quel couple de villes est en tête des classements des villes mondiales ?",
              options: ["New York et Londres", "Lagos et Kinshasa", "Delhi et Dacca", "Moscou et Le Caire, deux capitales très peuplées"],
              answer: 0,
              why: "New York et Londres concentrent les principales places financières et sièges de firmes ; Lagos, Delhi ou Dacca sont des mégapoles moins influentes.",
            },
            {
              q: "Pourquoi l'archipel métropolitain mondial est-il dit « sélectif » ?",
              options: ["Il ne comprend que des capitales politiques", "Il exclut toutes les villes d'Asie", "Il ne relie que des villes portuaires situées sur les grandes routes maritimes", "Il laisse de côté une grande partie de l'Afrique et de l'Asie centrale"],
              answer: 3,
              why: "Les métropoles connectées se concentrent en Amérique du Nord, en Europe et en Asie orientale ; de vastes régions restent en marge des réseaux mondiaux.",
            },
          ],
          trap: "Confondre mégapole (une très grande ville, critère de population) et mégalopole (un ensemble de villes reliées), ou croire qu'une ville très peuplée est forcément une métropole puissante.",
          method: "Pour chaque notion de géographie urbaine, retenez un critère et deux exemples localisés (par exemple : mégalopole, critère d'organisation, BosWash et mégalopole japonaise) : vous pourrez définir et illustrer en une phrase dans toute copie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'metropoles-inegales',
          title: 'Des métropoles inégales et en mutation',
          minutes: 30,
          objectives: [
            "Expliquer la hiérarchie des métropoles selon leur rôle dans la mondialisation.",
            "Identifier les inégalités socio-spatiales à l'intérieur des métropoles : ségrégation, gentrification, quartiers informels, quartiers fermés.",
            "Décrire l'étalement urbain et la recomposition des espaces métropolitains.",
            "Analyser les mutations des métropoles : renouvellement urbain, ville durable, déclin de certaines villes.",
          ],
          course: [
            {
              heading: "Des métropoles inégales entre elles",
              paragraphs: [
                "Toutes les métropoles n'ont pas le même poids. Au sommet, quelques villes mondiales (New York, Londres, Tokyo, Paris) exercent un commandement planétaire. Viennent ensuite des métropoles d'influence continentale ou régionale, comme São Paulo pour l'Amérique du Sud, Johannesburg pour l'Afrique australe ou Mumbai pour l'Asie du Sud, puis des métropoles nationales, qui dominent surtout le territoire de leur pays. Cette hiérarchie se mesure à la présence de sièges sociaux, de places financières, d'organisations internationales, d'universités, et à la connexion aux réseaux (aéroports, ports, câbles).",
                "La hiérarchie évolue. Depuis les années 1990, des métropoles d'Asie orientale (Shanghai, Shenzhen, Singapour, Séoul) et du Golfe (Dubaï) ont gagné des rangs grâce à leur croissance économique, à leurs infrastructures et à des politiques d'attractivité. À l'inverse, d'anciennes villes industrielles ont perdu de leur poids. Les métropoles sont en concurrence pour attirer entreprises, talents, touristes et grands événements (Jeux olympiques, expositions universelles).",
              ],
            },
            {
              heading: "Des inégalités à l'intérieur des métropoles",
              paragraphs: [
                "Les métropoles concentrent la richesse, mais aussi la pauvreté. La ségrégation socio-spatiale désigne la séparation des groupes sociaux dans des quartiers différents. Les quartiers d'affaires (le CBD, Central Business District), les quartiers résidentiels aisés et les quartiers populaires se distinguent par les revenus, les logements, les services et l'accès aux transports.",
                "Dans les métropoles des pays du Sud, une grande partie des habitants vit dans des quartiers informels (bidonvilles), construits sans autorisation, souvent sans eau courante ni assainissement : selon ONU-Habitat, plus d'un milliard de personnes vivent dans ce type de quartier dans le monde. Dharavi à Mumbai, les favelas de Rio de Janeiro ou les quartiers précaires de Lagos en sont des exemples. À l'opposé, les plus aisés s'enferment parfois dans des quartiers fermés et gardés (gated communities), comme Alphaville près de São Paulo : on parle alors de fragmentation urbaine.",
                "Dans les centres anciens des métropoles des pays du Nord, la gentrification transforme les quartiers populaires : des ménages plus aisés s'y installent, rénovent les logements, les commerces changent et les prix augmentent, ce qui repousse les habitants modestes vers la périphérie. Le terme a été proposé en 1964 par la sociologue Ruth Glass à propos de Londres ; le phénomène touche aujourd'hui Brooklyn à New York ou l'est parisien.",
              ],
              box: { label: "Définition", text: "Ségrégation socio-spatiale : séparation des groupes sociaux dans l'espace urbain. Gentrification : embourgeoisement d'un quartier populaire. Fragmentation urbaine : division de la ville en quartiers qui vivent séparés les uns des autres, avec peu de relations entre eux." },
            },
            {
              heading: "Des métropoles qui s'étalent et se recomposent",
              paragraphs: [
                "Les métropoles s'étendent sur des espaces de plus en plus vastes : c'est l'étalement urbain. Les ménages s'installent dans les espaces périurbains, à la recherche de logements plus grands et moins chers, souvent des maisons individuelles. Cela entraîne des mobilités pendulaires (trajets quotidiens entre le domicile et le travail) de plus en plus longues, la dépendance à l'automobile, des embouteillages, la pollution et l'artificialisation des sols. Los Angeles, très étalée et organisée autour de l'automobile, en est un exemple célèbre.",
                "L'espace métropolitain devient polycentrique : à côté du centre historique apparaissent des pôles périphériques qui concentrent bureaux, centres commerciaux et équipements, comme La Défense près de Paris ou les edge cities (« villes-lisières ») nord-américaines, décrites par le journaliste Joel Garreau en 1991. Aéroports, technopôles et zones logistiques structurent aussi ces périphéries.",
              ],
              box: { label: "Définition", text: "Étalement urbain : extension des surfaces urbanisées en périphérie, plus rapide que la croissance de la population. Périurbanisation : installation de citadins dans des communes rurales proches des villes, dont ils restent dépendants pour l'emploi." },
            },
            {
              heading: "Des métropoles en mutation",
              paragraphs: [
                "Les métropoles se transforment pour rester attractives. Les opérations de renouvellement urbain reconvertissent d'anciens espaces industriels ou portuaires : à Londres, les Docklands accueillent depuis les années 1980 le quartier d'affaires de Canary Wharf ; à Bilbao, le musée Guggenheim, ouvert en 1997, symbolise la reconversion d'une ville industrielle. Les grands événements servent de levier : les Jeux olympiques de Londres (2012) ont transformé l'est de la ville, ceux de Paris (2024) une partie de la Seine-Saint-Denis.",
                "Face au changement climatique, à la pollution et à la congestion, les métropoles cherchent à devenir durables : tramways et métros, pistes cyclables (Copenhague est souvent citée en exemple), écoquartiers, végétalisation contre les îlots de chaleur. Certaines misent sur la ville « intelligente » (smart city), qui utilise les données numériques pour gérer les transports ou l'énergie. Les métropoles exposées aux risques doivent s'adapter : Jakarta, qui s'enfonce et subit des inondations, a conduit l'Indonésie à décider en 2022 le transfert de sa capitale vers Nusantara, sur l'île de Bornéo.",
                "Enfin, toutes les métropoles ne grandissent pas : certaines villes rétrécissent (shrinking cities) après la crise de leur industrie. Detroit, capitale de l'automobile américaine, est passée d'environ 1,85 million d'habitants en 1950 à environ 640 000 en 2020, laissant des quartiers entiers abandonnés.",
              ],
              box: { label: "À retenir", text: "Les métropoles se recomposent sans cesse : reconversion des friches, grands projets, transports collectifs, recherche de durabilité ; mais leur attractivité peut aussi renforcer la hausse des prix et l'éviction des plus modestes." },
            },
          ],
          keyPoints: [
            "Les métropoles forment une hiérarchie : villes mondiales, métropoles continentales ou régionales, métropoles nationales ; cette hiérarchie évolue au profit de l'Asie orientale.",
            "Ségrégation socio-spatiale : quartiers d'affaires, quartiers aisés et quartiers populaires se séparent.",
            "Plus d'un milliard de personnes vivent dans des quartiers informels (ONU-Habitat) ; les gated communities illustrent la fragmentation.",
            "Gentrification : embourgeoisement des quartiers populaires centraux, qui repousse les plus modestes.",
            "Étalement urbain et périurbanisation : mobilités pendulaires, dépendance à l'automobile, polycentrisme.",
            "Mutations : renouvellement urbain (Docklands, Bilbao), ville durable, adaptation aux risques ; certaines villes rétrécissent (Detroit).",
          ],
          example: {
            statement: "À partir de l'exemple de Mumbai (Inde), montrez qu'une métropole peut être à la fois intégrée à la mondialisation et marquée par de fortes inégalités.",
            solution: [
              "Situer : Mumbai est la capitale économique de l'Inde, une mégapole de plus de 20 millions d'habitants sur la côte ouest du pays.",
              "Montrer l'intégration : elle accueille la principale bourse du pays, les sièges de grandes entreprises et de banques, un grand port et l'industrie du cinéma (Bollywood) ; c'est une métropole d'influence continentale.",
              "Montrer les inégalités : une partie importante de la population vit dans des quartiers informels, comme Dharavi, l'un des plus grands bidonvilles d'Asie, à proximité immédiate de quartiers d'affaires et de tours résidentielles de luxe.",
              "Expliquer : la métropole attire des migrants venus des campagnes, mais le marché du logement très cher et l'insuffisance des logements sociaux les poussent vers l'habitat informel.",
              "Conclure : Mumbai illustre la métropolisation des pays émergents, où la richesse et l'insertion mondiale coexistent avec une fragmentation urbaine très marquée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque exemple à la notion qu'il illustre (gentrification, quartier informel, gated community, renouvellement urbain, ville qui rétrécit, pôle périphérique), puis justifiez en une phrase : (a) Dharavi à Mumbai ; (b) Alphaville près de São Paulo ; (c) Brooklyn à New York ; (d) Canary Wharf dans les Docklands de Londres ; (e) Detroit ; (f) La Défense.",
              hint: "Demandez-vous pour chaque exemple qui y habite ou y travaille, et ce qui a changé dans le quartier.",
              solution: [
                "(a) Dharavi : quartier informel ; un vaste bidonville construit sans autorisation, où les équipements de base manquent.",
                "(b) Alphaville : gated community ; un ensemble résidentiel fermé et gardé pour des habitants aisés.",
                "(c) Brooklyn : gentrification ; d'anciens quartiers ouvriers attirent des ménages plus aisés, les loyers montent et les habitants modestes partent.",
                "(d) Canary Wharf : renouvellement urbain ; d'anciens docks ont été reconvertis en quartier d'affaires depuis les années 1980.",
                "(e) Detroit : ville qui rétrécit ; la crise de l'industrie automobile a fait passer la population d'environ 1,85 million (1950) à environ 640 000 habitants (2020).",
                "(f) La Défense : pôle périphérique ; un quartier d'affaires situé hors du centre historique de Paris, signe d'une métropole polycentrique.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Dans une métropole européenne, le loyer moyen d'un quartier ancien du centre passe de 12 euros par m² en 2010 à 21 euros par m² en 2022. Sur la même période, la part des cadres parmi les habitants du quartier passe de 18 % à 37 %, et celle des ouvriers et employés de 52 % à 31 %. (1) Calculez l'évolution du loyer en pourcentage. (2) Quel processus ces données illustrent-elles ? Justifiez. (3) Quelles conséquences ce processus peut-il avoir pour les anciens habitants et pour la métropole ?",
              hint: "Taux d'évolution = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100.",
              solution: [
                "(1) (21 - 12) ÷ 12 × 100 = 9 ÷ 12 × 100 = 75 % : le loyer moyen a augmenté de 75 % en douze ans.",
                "(2) Il s'agit d'une gentrification : un quartier populaire central attire des ménages plus aisés (la part des cadres double presque, de 18 % à 37 %), tandis que la part des catégories populaires recule (de 52 % à 31 %) et que les loyers augmentent fortement.",
                "(3) Les anciens habitants modestes, qui ne peuvent plus payer, sont repoussés vers la périphérie, avec des trajets plus longs. Pour la métropole, le quartier est rénové et attractif, mais la ségrégation socio-spatiale se renforce et il devient difficile de loger les actifs modestes (employés, soignants) près de leur travail.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Les métropoles : des espaces de richesse et d'inégalités ? ». Rédigez une introduction (définition, problématique), un développement en deux ou trois parties appuyé sur des exemples de métropoles du Nord et du Sud, et une conclusion.",
              hint: "Montrez la richesse et l'attractivité, puis les inégalités à différentes échelles (entre métropoles, à l'intérieur des métropoles), et enfin les politiques qui tentent d'y répondre.",
              solution: [
                "Introduction : une métropole est une grande ville qui concentre population, activités et fonctions de commandement. Le processus de métropolisation accompagne la mondialisation. Problématique : en quoi les métropoles concentrent-elles à la fois la richesse et les inégalités ?",
                "I. Des espaces de richesse : les métropoles concentrent sièges sociaux, places financières, universités et emplois qualifiés ; New York, Londres ou Tokyo commandent l'économie mondiale, et des métropoles émergentes comme Shanghai ou Mumbai attirent investissements et migrants.",
                "II. Des inégalités entre et dans les métropoles : la hiérarchie oppose villes mondiales et mégapoles peu influentes (Kinshasa) ; à l'intérieur, la ségrégation socio-spatiale sépare quartiers d'affaires et quartiers populaires ; plus d'un milliard de personnes vivent dans des quartiers informels (Dharavi à Mumbai) tandis que les plus riches se protègent dans des gated communities (Alphaville) ; au Nord, la gentrification repousse les modestes (Brooklyn, est parisien).",
                "III. Des métropoles qui cherchent des réponses : renouvellement urbain (Docklands), transports collectifs qui relient les périphéries, logements sociaux, programmes de réhabilitation des quartiers informels ; mais ces politiques peuvent aussi accroître les prix et l'éviction des plus pauvres.",
                "Conclusion : les métropoles sont les moteurs de la richesse mondiale, mais cette concentration produit des inégalités fortes ; la question de la ville inclusive et durable est au cœur de leurs mutations.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les métropoles et leurs inégalités.",
            statements: [
              { text: "La gentrification désigne l'arrivée de ménages aisés dans un quartier populaire.", true: true, why: "Elle s'accompagne d'une hausse des prix qui repousse les habitants modestes." },
              { text: "Les quartiers informels n'existent que dans les pays d'Afrique.", true: false, why: "On en trouve sur tous les continents du Sud : Dharavi à Mumbai, favelas de Rio, quartiers précaires de Lagos ou de Manille." },
              { text: "Une gated community est un quartier fermé et gardé.", true: true, why: "Ces quartiers réservés aux plus aisés, comme Alphaville près de São Paulo, illustrent la fragmentation urbaine." },
              { text: "Toutes les métropoles voient leur population augmenter.", true: false, why: "Certaines villes rétrécissent : Detroit a perdu environ deux tiers de ses habitants depuis 1950." },
              { text: "L'étalement urbain renforce la dépendance à l'automobile.", true: true, why: "Les espaces périurbains sont souvent mal desservis par les transports collectifs, d'où des trajets quotidiens en voiture." },
              { text: "La hiérarchie des métropoles est figée depuis 1950.", true: false, why: "Des métropoles d'Asie orientale et du Golfe (Shanghai, Singapour, Dubaï) ont fortement progressé depuis les années 1990." },
              { text: "Un CBD est le quartier des affaires d'une métropole.", true: true, why: "Central Business District : quartier de bureaux, de banques et de sièges sociaux, souvent marqué par des tours." },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on la séparation des groupes sociaux dans des quartiers différents ?",
              options: ["La ségrégation socio-spatiale", "La périurbanisation", "La littoralisation", "Le renouvellement urbain des quartiers centraux"],
              answer: 0,
              why: "La ségrégation socio-spatiale traduit dans l'espace les inégalités de revenus : les groupes sociaux vivent dans des quartiers distincts.",
            },
            {
              q: "Combien de personnes vivent dans des quartiers informels dans le monde, selon ONU-Habitat ?",
              options: ["Environ 10 millions", "Environ 100 millions", "Plus d'un milliard", "Environ 4 milliards, soit la moitié de l'humanité"],
              answer: 2,
              why: "ONU-Habitat estime à plus d'un milliard le nombre d'habitants des bidonvilles et quartiers informels, surtout dans les métropoles du Sud.",
            },
            {
              q: "Qu'est-ce qu'une edge city ?",
              options: ["Un quartier fermé et gardé", "Un pôle périphérique de bureaux et de commerces", "Un bidonville situé en bord de mer", "Une ville nouvelle construite pour remplacer une capitale menacée"],
              answer: 1,
              why: "Joel Garreau a décrit en 1991 ces pôles périphériques des métropoles nord-américaines, signe d'une organisation polycentrique.",
            },
            {
              q: "Quel exemple illustre le mieux le renouvellement urbain ?",
              options: ["L'extension des favelas de Rio", "La construction de maisons individuelles en périphérie", "La baisse de population de Detroit", "La reconversion des Docklands de Londres"],
              answer: 3,
              why: "D'anciens docks ont été transformés à partir des années 1980 en quartier d'affaires (Canary Wharf) et en logements.",
            },
            {
              q: "Pourquoi l'Indonésie a-t-elle décidé de transférer sa capitale hors de Jakarta ?",
              options: ["Jakarta est trop petite pour accueillir les ministères", "Jakarta a été détruite par un séisme en 2020", "Jakarta s'enfonce et subit des inondations, en plus de la congestion", "Les ambassades étrangères et les organisations internationales réclamaient une capitale neuve"],
              answer: 2,
              why: "L'affaissement des sols, les inondations et la congestion ont conduit l'Indonésie à décider en 2022 de construire une nouvelle capitale, Nusantara, à Bornéo.",
            },
          ],
          trap: "Présenter les inégalités comme propres aux métropoles du Sud : les métropoles du Nord connaissent aussi la ségrégation, la gentrification et la pauvreté ; seules les formes et l'intensité diffèrent.",
          method: "Quand vous étudiez une métropole, raisonnez à deux échelles : sa place dans la hiérarchie mondiale (fonctions, réseaux), puis son organisation interne (centre, quartiers, périphéries). Un bon exemple en géographie se décrit toujours à ces deux échelles.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-metropolisation',
          title: 'La France : la métropolisation et ses effets',
          minutes: 30,
          objectives: [
            "Caractériser la place de Paris, ville mondiale, dans le territoire français.",
            "Décrire le réseau des métropoles régionales et les politiques qui les ont renforcées.",
            "Expliquer les effets de la métropolisation sur les territoires : périurbanisation, mobilités, inégalités, artificialisation des sols.",
            "Réaliser la légende organisée d'un schéma de la métropolisation en France.",
          ],
          course: [
            {
              heading: "Paris, une ville mondiale qui domine le territoire",
              paragraphs: [
                "Paris est la seule ville mondiale française. Son aire d'attraction (la ville et les communes dont une part importante des actifs vient y travailler) rassemble environ 13 millions d'habitants, près d'un Français sur cinq, et l'Île-de-France produit environ 30 % de la richesse nationale. Elle concentre le pouvoir politique, la plupart des sièges sociaux des grandes entreprises françaises, le quartier d'affaires de La Défense, l'un des premiers d'Europe, de grandes universités et des centres de recherche, des sièges d'organisations internationales (UNESCO, OCDE) et un très grand aéroport international, Roissy-Charles-de-Gaulle.",
                "Ce poids s'explique par une longue histoire de centralisation politique et par l'organisation des réseaux de transport en étoile autour de la capitale. On parle de macrocéphalie : une ville domine nettement toutes les autres. Dès 1947, le géographe Jean-François Gravier dénonçait dans Paris et le désert français ce déséquilibre entre la capitale et la province.",
              ],
              box: { label: "Définition", text: "Aire d'attraction d'une ville (INSEE, 2020) : un pôle de population et d'emploi et sa couronne, formée des communes dont au moins 15 % des actifs travaillent dans le pôle. Elle remplace l'ancienne notion d'aire urbaine." },
            },
            {
              heading: "Un réseau de métropoles régionales renforcé",
              paragraphs: [
                "Pour rééquilibrer le territoire, l'État crée en 1963 la DATAR (Délégation à l'aménagement du territoire et à l'action régionale), qui désigne en 1964 huit « métropoles d'équilibre » (Lille, Nancy-Metz, Strasbourg, Lyon, Marseille, Toulouse, Bordeaux, Nantes-Saint-Nazaire). Décentralisation des pouvoirs à partir de 1982, implantation d'universités et de grandes écoles, lignes à grande vitesse depuis 1981 et aéroports ont renforcé ces villes.",
                "La loi MAPTAM de 2014 crée le statut administratif de métropole : on en compte 22, dont trois à statut particulier, la Métropole du Grand Paris, la Métropole de Lyon et Aix-Marseille-Provence. Les métropoles régionales ont chacune des spécialisations : l'aéronautique et le spatial à Toulouse, la microélectronique et les nanotechnologies à Grenoble, la chimie et la santé à Lyon, les institutions européennes à Strasbourg. Plusieurs d'entre elles, de Toulouse à Montpellier, Bordeaux, Nantes ou Rennes, comptent parmi les villes françaises dont la population augmente le plus vite, grâce à leur attractivité économique, universitaire et résidentielle.",
              ],
              box: { label: "Repère", text: "1963 : création de la DATAR. 1964 : huit métropoles d'équilibre. 1981 : première ligne à grande vitesse (Paris-Lyon). 1982 : lois de décentralisation. 2014 : loi MAPTAM et statut de métropole. 2016 : Métropole du Grand Paris." },
            },
            {
              heading: "Périurbanisation, mobilités et artificialisation",
              paragraphs: [
                "La métropolisation étend l'influence des villes bien au-delà de leurs limites : selon l'INSEE, environ 93 % de la population française vit dans l'aire d'attraction d'une ville. Depuis les années 1970, la périurbanisation a conduit de nombreux ménages vers les communes rurales proches des villes, pour accéder à la propriété d'une maison individuelle. Les mobilités pendulaires s'allongent, l'automobile domine les déplacements et les zones commerciales et d'activités se multiplient aux entrées de ville.",
                "Cette extension consomme des terres agricoles et naturelles : c'est l'artificialisation des sols, qui réduit la biodiversité et augmente les risques d'inondation. La loi Climat et résilience de 2021 fixe l'objectif de diviser par deux le rythme de l'artificialisation entre 2021 et 2031 et d'atteindre le « zéro artificialisation nette » (ZAN) en 2050. Les politiques urbaines favorisent aussi la densification et les transports collectifs (tramways dans la plupart des grandes villes).",
              ],
              box: { label: "Définition", text: "Artificialisation des sols : transformation d'espaces agricoles, naturels ou forestiers en surfaces bâties, revêtues ou aménagées (logements, routes, parkings, zones d'activités). Zéro artificialisation nette : compenser toute nouvelle artificialisation par la renaturation d'une surface équivalente." },
            },
            {
              heading: "Des inégalités et des recompositions",
              paragraphs: [
                "Les métropoles concentrent les emplois qualifiés et la croissance, mais aussi de fortes inégalités internes. À Paris et dans sa proche banlieue, la gentrification fait monter les prix et repousse les ménages modestes ; la Seine-Saint-Denis, pourtant voisine de Paris et dynamique, a l'un des taux de pauvreté les plus élevés de France métropolitaine. Dans toutes les grandes villes, des quartiers prioritaires de la politique de la ville cumulent chômage et pauvreté.",
                "À l'échelle nationale, certains territoires restent à l'écart : villes moyennes dont le centre se vide, anciens bassins industriels, espaces ruraux éloignés. Le mouvement des « gilets jaunes » (2018-2019) a mis en lumière le sentiment d'abandon d'une partie de la population périurbaine et rurale, dépendante de la voiture. L'État a lancé en 2018 le programme Action cœur de ville pour revitaliser des villes moyennes. En Île-de-France, le Grand Paris Express, environ 200 kilomètres de métro automatique et 68 gares, doit mieux relier les banlieues entre elles sans passer par Paris ; le prolongement de la ligne 14 jusqu'à Orly et Saint-Denis Pleyel a ouvert en 2024.",
              ],
            },
          ],
          keyPoints: [
            "Paris, seule ville mondiale française : environ 13 millions d'habitants dans son aire d'attraction, environ 30 % de la richesse nationale en Île-de-France.",
            "Macrocéphalie dénoncée dès 1947 (Gravier) ; rééquilibrage par la DATAR (1963) et les métropoles d'équilibre (1964).",
            "22 métropoles institutionnelles depuis la loi MAPTAM (2014) ; des métropoles régionales spécialisées et dynamiques (Toulouse, Lyon, Bordeaux, Nantes...).",
            "Environ 93 % des Français vivent dans l'aire d'attraction d'une ville : périurbanisation, mobilités pendulaires, artificialisation (objectif ZAN en 2050).",
            "Inégalités : gentrification et quartiers pauvres dans les métropoles, territoires à l'écart ; réponses : Action cœur de ville, Grand Paris Express.",
          ],
          example: {
            statement: "Montrez que la métropolisation renforce à la fois Paris et les grandes métropoles régionales.",
            solution: [
              "Définir : la métropolisation est la concentration des populations, des activités et des fonctions de commandement dans les plus grandes villes.",
              "Paris : la capitale concentre les fonctions mondiales (sièges sociaux, La Défense, organisations internationales, Roissy-Charles-de-Gaulle) ; son aire d'attraction compte environ 13 millions d'habitants.",
              "Les métropoles régionales : héritières des métropoles d'équilibre de 1964, elles ont bénéficié de la décentralisation, des universités et des LGV ; elles ont des spécialisations (aéronautique à Toulouse, microélectronique à Grenoble).",
              "Leur dynamisme : Toulouse, Bordeaux, Nantes, Montpellier ou Rennes attirent des habitants et des emplois qualifiés ; la loi MAPTAM (2014) leur donne des compétences renforcées.",
              "Conclure : la métropolisation renforce le sommet de la hiérarchie urbaine, Paris et les métropoles régionales, parfois au détriment des villes moyennes et des espaces ruraux éloignés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase les termes suivants et donnez un exemple français pour chacun : (a) macrocéphalie ; (b) métropole régionale ; (c) périurbanisation ; (d) mobilité pendulaire ; (e) artificialisation des sols.",
              hint: "Appuyez-vous sur les encadrés du cours et choisissez des exemples précis : une ville, une loi, un type de trajet.",
              solution: [
                "(a) Macrocéphalie : domination d'une ville sur tout le réseau urbain d'un pays ; exemple : Paris, dont l'aire d'attraction compte environ 13 millions d'habitants, loin devant Lyon.",
                "(b) Métropole régionale : grande ville qui concentre des fonctions de commandement et organise une région ; exemple : Toulouse, capitale européenne de l'aéronautique.",
                "(c) Périurbanisation : installation de citadins dans des communes rurales proches des villes, dont ils restent dépendants ; exemple : les communes pavillonnaires autour de Toulouse ou de Rennes.",
                "(d) Mobilité pendulaire : trajet quotidien entre le domicile et le lieu de travail ; exemple : un actif qui vit dans une commune périurbaine de Seine-et-Marne et travaille à Paris.",
                "(e) Artificialisation des sols : transformation d'espaces agricoles ou naturels en surfaces bâties ou revêtues ; exemple : une zone commerciale construite sur des champs en entrée de ville, que la loi Climat et résilience (2021) cherche à limiter.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Une commune située à 30 km d'une métropole régionale comptait 1 200 habitants en 1975 et 3 000 en 2020. En 2020, 68 % de ses actifs travaillent dans la métropole et 85 % des ménages possèdent au moins une voiture ; 60 hectares de terres agricoles ont été urbanisés depuis 1975. (1) Calculez le taux d'évolution de la population entre 1975 et 2020. (2) La commune appartient-elle à l'aire d'attraction de la métropole ? Justifiez avec la définition de l'INSEE. (3) Montrez que ces données illustrent les effets de la métropolisation.",
              hint: "Taux d'évolution = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. La couronne d'une aire d'attraction regroupe les communes dont au moins 15 % des actifs travaillent dans le pôle.",
              solution: [
                "(1) (3 000 - 1 200) ÷ 1 200 × 100 = 1 800 ÷ 1 200 × 100 = 150 % : la population a augmenté de 150 %, elle a été multipliée par 2,5.",
                "(2) Oui : 68 % de ses actifs travaillent dans la métropole, bien au-delà du seuil de 15 % ; elle appartient donc à la couronne de l'aire d'attraction de la métropole.",
                "(3) La commune illustre la périurbanisation : des citadins s'installent à la campagne tout en travaillant en ville, d'où des mobilités pendulaires quotidiennes, une forte dépendance à l'automobile (85 % des ménages motorisés) et l'artificialisation de 60 hectares de terres agricoles. La métropole étend ainsi son influence bien au-delà de ses limites.",
              ],
            },
            {
              level: 3,
              statement: "Production graphique (type bac, contrôle continu) : vous devez réaliser un schéma intitulé « La métropolisation en France et ses effets ». Proposez un titre, une légende organisée en trois parties avec, pour chaque élément, le figuré choisi (ponctuel, linéaire ou de surface) et les informations à représenter, puis expliquez en quelques lignes la logique de votre légende.",
              hint: "Une légende organisée suit un raisonnement : d'abord la hiérarchie urbaine, puis les liens entre les villes, enfin les effets sur les territoires. Choisissez des figurés proportionnels à l'importance des villes.",
              solution: [
                "Titre : La métropolisation en France : une hiérarchie urbaine dominée par Paris et des effets territoriaux contrastés.",
                "I. Une hiérarchie urbaine dominée par Paris (figurés ponctuels de taille décroissante) : un grand carré rouge pour Paris, ville mondiale ; des cercles rouges moyens pour les grandes métropoles régionales (Lyon, Marseille, Lille, Toulouse, Bordeaux, Nantes, Strasbourg) ; de petits cercles pour d'autres métropoles (Rennes, Montpellier, Grenoble, Nice...).",
                "II. Des métropoles connectées (figurés linéaires) : des traits épais pour les principales lignes à grande vitesse en étoile autour de Paris ; une flèche vers l'extérieur partant de Paris pour les liaisons aériennes internationales (Roissy-Charles-de-Gaulle).",
                "III. Des effets territoriaux contrastés (figurés de surface) : une auréole hachurée autour des métropoles pour les espaces périurbains en croissance ; un aplat orangé pour les régions métropolitaines les plus dynamiques (Île-de-France, ouest et sud de la France) ; un aplat clair pour les territoires à l'écart (diagonale des faibles densités, anciens bassins industriels).",
                "Logique : la légende va de la hiérarchie des villes à leurs liens puis à leurs effets ; chaque partie répond à une idée, et le choix des figurés respecte la sémiologie graphique (taille pour la hiérarchie, lignes pour les flux, surfaces pour les espaces).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque métropole française à une fonction ou une spécialisation qui la caractérise.",
            pairs: [
              { left: "Paris", right: "Ville mondiale, quartier d'affaires de La Défense" },
              { left: "Toulouse", right: "Aéronautique et spatial" },
              { left: "Grenoble", right: "Microélectronique et nanotechnologies" },
              { left: "Strasbourg", right: "Siège du Parlement européen" },
              { left: "Lyon", right: "Chimie et industries de santé" },
              { left: "Nantes-Saint-Nazaire", right: "Chantiers navals de l'estuaire de la Loire" },
            ],
          },
          quiz: [
            {
              q: "Combien d'habitants compte environ l'aire d'attraction de Paris ?",
              options: ["2 millions", "6 millions", "25 millions", "13 millions"],
              answer: 3,
              why: "L'aire d'attraction de Paris rassemble environ 13 millions d'habitants, près d'un Français sur cinq.",
            },
            {
              q: "Quel organisme crée les « métropoles d'équilibre » en 1964 ?",
              options: ["L'Union européenne", "La DATAR", "L'INSEE", "La Métropole du Grand Paris, créée pour piloter l'aménagement national"],
              answer: 1,
              why: "La DATAR, créée en 1963, désigne huit métropoles d'équilibre pour contrebalancer le poids de Paris.",
            },
            {
              q: "Quelle loi crée en 2014 le statut administratif de métropole ?",
              options: ["La loi MAPTAM", "La loi Climat et résilience", "Les lois Defferre de décentralisation", "La loi sur l'eau et les milieux aquatiques"],
              answer: 0,
              why: "La loi de modernisation de l'action publique territoriale et d'affirmation des métropoles (MAPTAM) de 2014 crée ce statut ; on compte aujourd'hui 22 métropoles.",
            },
            {
              q: "Que vise l'objectif « zéro artificialisation nette » ?",
              options: ["Supprimer toute construction de logements neufs dès 2025", "Interdire l'automobile dans les métropoles", "Compenser toute nouvelle artificialisation par une renaturation, d'ici 2050", "Transférer une partie des habitants des métropoles vers les campagnes et les villes moyennes"],
              answer: 2,
              why: "La loi Climat et résilience (2021) fixe l'objectif ZAN en 2050, avec une étape : diviser par deux le rythme de l'artificialisation entre 2021 et 2031.",
            },
            {
              q: "Quel est l'un des buts du Grand Paris Express ?",
              options: ["Relier Paris à Lyon en une heure", "Relier les banlieues entre elles sans passer par Paris", "Remplacer le métro parisien existant", "Construire un nouvel aéroport au nord de Paris pour remplacer Roissy"],
              answer: 1,
              why: "Ce réseau d'environ 200 km de métro automatique et 68 gares doit faciliter les déplacements de banlieue à banlieue et désenclaver certains quartiers.",
            },
          ],
          trap: "Réduire la métropolisation française à Paris : depuis plusieurs décennies, les métropoles régionales se renforcent aussi, et la métropolisation produit des effets jusque dans les communes rurales périurbaines.",
          method: "Pour réviser, dessinez de mémoire un schéma de la France avec Paris, les grandes métropoles régionales, les LGV et les espaces à l'écart, puis comparez-le au cours : cet exercice de cinq minutes prépare à la fois les questions de cours et la production graphique.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 2 · ESPACES ET ACTEURS DE LA PRODUCTION            */
    /* ==================================================================== */
    {
      id: 'espaces-production',
      lessons: [

        /* ------------------------------------------------------------------ */
        {
          id: 'espaces-productifs-monde',
          title: 'Les espaces de production dans le monde : une diversité croissante',
          minutes: 30,
          objectives: [
            "Définir un espace productif et identifier la diversité des espaces de production (agricoles, industriels, de services).",
            "Expliquer la nouvelle division internationale du travail et le rôle des firmes transnationales dans les chaînes de valeur mondiales.",
            "Identifier les autres acteurs de la production : États, collectivités, entreprises, consommateurs.",
            "Analyser les facteurs de localisation des activités et leur évolution récente.",
          ],
          course: [
            {
              heading: "Des espaces productifs de plus en plus variés",
              paragraphs: [
                "Un espace productif est un espace aménagé et organisé par des acteurs pour produire des biens ou des services. On distingue traditionnellement trois secteurs : le primaire (agriculture, pêche, mines), le secondaire (industrie, énergie, construction) et le tertiaire (commerce, transports, banques, administration, tourisme, recherche). Les frontières entre ces secteurs s'effacent : une entreprise industrielle emploie aussi des ingénieurs, des designers et des commerciaux, et vend des services avec ses produits.",
                "Les espaces productifs sont donc très divers : grandes plaines céréalières mécanisées, plantations, mines à ciel ouvert, zones industrialo-portuaires, technopôles, zones logistiques, quartiers d'affaires, stations touristiques. Ils changent sans cesse : certains déclinent, comme les anciens bassins industriels du charbon et de l'acier (la Rust Belt aux États-Unis, la Lorraine en France), d'autres émergent ou se reconvertissent.",
              ],
              box: { label: "Définition", text: "Espace productif : espace aménagé et mis en valeur pour produire des richesses, qu'il s'agisse de biens agricoles, industriels ou de services. Technopôle : espace qui associe universités, centres de recherche et entreprises de haute technologie pour favoriser l'innovation." },
            },
            {
              heading: "Une nouvelle division internationale du travail",
              paragraphs: [
                "Jusqu'aux années 1960, la division internationale du travail opposait schématiquement des pays industrialisés du Nord à des pays du Sud exportateurs de matières premières. Depuis les années 1970-1980, une nouvelle division internationale du travail (NDIT) s'est imposée : de nombreuses activités industrielles se sont déplacées vers des pays aux coûts de main-d'œuvre plus faibles, d'abord les « Dragons » asiatiques (Corée du Sud, Taïwan, Hong Kong, Singapour), puis la Chine, l'Asie du Sud-Est, l'Inde, le Mexique ou l'Europe centrale.",
                "Les États ont accompagné ce mouvement. En 1980, la Chine crée ses premières zones économiques spéciales (ZES), dont Shenzhen, qui offrent aux investisseurs étrangers des avantages fiscaux et douaniers ; ce bourg proche de Hong Kong est devenu une métropole de plus de 17 millions d'habitants, spécialisée dans l'électronique. Au Mexique, les maquiladoras, usines d'assemblage installées surtout près de la frontière avec les États-Unis, importent des composants sans droits de douane et réexportent des produits finis vers le marché américain.",
                "La hiérarchie n'est pas figée : la Chine ne se contente plus d'assembler, elle conçoit et innove (télécommunications, véhicules électriques, batteries, panneaux solaires). Et les technopôles se multiplient hors des pays du Nord, comme Bangalore (Bengaluru), en Inde, spécialisée dans les services informatiques.",
              ],
              box: { label: "Définition", text: "Division internationale du travail : répartition des activités productives entre les pays selon leurs avantages (coûts, compétences, ressources). Zone économique spéciale : espace où un État accorde des avantages fiscaux et douaniers pour attirer les investissements étrangers." },
            },
            {
              heading: "Les firmes transnationales et les chaînes de valeur mondiales",
              paragraphs: [
                "Les firmes transnationales (FTN) sont des entreprises qui exercent leurs activités dans plusieurs pays par l'intermédiaire de filiales ou de sous-traitants. Elles organisent la production à l'échelle mondiale en découpant la fabrication d'un produit en étapes localisées là où elles sont les plus avantageuses : c'est la chaîne de valeur mondiale. La conception, la recherche et le marketing, qui créent le plus de valeur, restent souvent dans les métropoles des pays développés ; la fabrication des composants et l'assemblage sont confiés à des sous-traitants dans des pays où la main-d'œuvre coûte moins cher.",
                "L'exemple du smartphone est éclairant. Un appareil conçu en Californie par une firme américaine contient des composants produits au Japon, en Corée du Sud, à Taïwan ou aux États-Unis, avec des métaux extraits en Afrique ou en Amérique latine ; il est assemblé en Chine ou en Inde, souvent par des sous-traitants taïwanais, puis vendu dans le monde entier. La plus grande part de la valeur revient à la firme qui le conçoit et le commercialise, non au pays d'assemblage.",
              ],
              box: { label: "À retenir", text: "Une chaîne de valeur mondiale répartit les étapes de la production (conception, composants, assemblage, distribution) entre plusieurs pays. Les étapes de conception et de commercialisation captent l'essentiel de la valeur ajoutée." },
            },
            {
              heading: "Des acteurs multiples et des logiques de localisation renouvelées",
              paragraphs: [
                "Les FTN ne sont pas les seuls acteurs. Les États attirent les investissements (fiscalité, infrastructures, formation, zones franches) ou protègent leurs productions par des droits de douane. Les collectivités locales aménagent des zones d'activités et des technopôles. Les petites et moyennes entreprises, souvent sous-traitantes, les salariés, les syndicats, les consommateurs et les organisations non gouvernementales, qui dénoncent par exemple les conditions de travail chez certains sous-traitants, pèsent aussi sur les choix de production. Les organisations régionales (Union européenne, accord entre les États-Unis, le Mexique et le Canada) organisent de vastes marchés.",
                "Les facteurs de localisation évoluent. Le coût de la main-d'œuvre compte toujours, mais aussi la proximité des marchés, la qualification des actifs, la qualité des infrastructures, la stabilité politique et la présence d'un milieu innovant. Depuis la pandémie de Covid-19 (2020), qui a révélé la dépendance à des fournisseurs lointains (masques, médicaments, semi-conducteurs), et dans un contexte de rivalité entre les États-Unis et la Chine, les États cherchent à relocaliser certaines productions jugées stratégiques : les États-Unis subventionnent ainsi depuis 2022 la fabrication de semi-conducteurs et l'industrie verte sur leur sol.",
              ],
            },
          ],
          keyPoints: [
            "Un espace productif est aménagé pour produire des biens ou des services ; les espaces productifs se diversifient et se recomposent.",
            "Depuis les années 1970-1980, la nouvelle division internationale du travail déplace une partie de l'industrie vers l'Asie, le Mexique ou l'Europe centrale.",
            "Les États attirent les investissements : ZES chinoises (Shenzhen, 1980), maquiladoras mexicaines.",
            "Les FTN organisent des chaînes de valeur mondiales ; conception et commercialisation captent l'essentiel de la valeur.",
            "Acteurs multiples (États, collectivités, PME, consommateurs, ONG) ; tendance récente à la relocalisation des productions stratégiques.",
          ],
          example: {
            statement: "Expliquez pourquoi une firme transnationale conçoit un produit dans un pays développé et le fait assembler dans un autre pays.",
            solution: [
              "Définir : une firme transnationale exerce ses activités dans plusieurs pays et organise sa production en chaîne de valeur mondiale.",
              "La conception exige des ingénieurs, des chercheurs et des designers très qualifiés, des universités et un milieu innovant : la firme la localise dans une métropole d'un pays développé (par exemple en Californie).",
              "L'assemblage exige beaucoup de main-d'œuvre, mais peu qualifiée : la firme le confie à des sous-traitants dans des pays où les salaires sont plus bas et où les États offrent des avantages (ZES en Chine, maquiladoras au Mexique).",
              "Les transports maritimes par conteneurs, peu coûteux, permettent de déplacer composants et produits finis dans le monde entier.",
              "Conclure : la firme combine les avantages de chaque territoire pour réduire ses coûts et garder pour elle les étapes qui créent le plus de valeur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des espaces suivants, indiquez le type d'espace productif et le secteur d'activité dominant : (a) la Silicon Valley ; (b) Shenzhen ; (c) le Mato Grosso brésilien ; (d) la City de Londres ; (e) une maquiladora de Ciudad Juárez ; (f) une mine de cuivre au Chili.",
              hint: "Les types possibles sont : technopôle, zone économique spéciale, front pionnier agricole, quartier d'affaires, usine d'assemblage, espace d'extraction.",
              solution: [
                "(a) Silicon Valley (Californie) : technopôle ; tertiaire et industrie de haute technologie (informatique, numérique).",
                "(b) Shenzhen (Chine) : zone économique spéciale créée en 1980 ; industrie électronique, devenue aussi un pôle d'innovation.",
                "(c) Mato Grosso (Brésil) : front pionnier agricole ; primaire (culture du soja et élevage à grande échelle).",
                "(d) City de Londres : quartier d'affaires ; tertiaire supérieur (finance, assurance).",
                "(e) Maquiladora de Ciudad Juárez (Mexique, frontière des États-Unis) : usine d'assemblage ; secondaire.",
                "(f) Mine de cuivre au Chili : espace d'extraction ; primaire. Le Chili est le premier producteur mondial de cuivre.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Un appareil électronique est vendu 500 euros. La valeur se répartit ainsi : conception, marque et marketing (firme américaine) : 290 euros ; composants fabriqués au Japon, en Corée du Sud et à Taïwan : 150 euros ; assemblage en Chine : 25 euros ; transport et distribution : 35 euros. (1) Calculez la part de chaque étape dans le prix de vente. (2) Quelle étape capte le plus de valeur ? (3) Que montre cet exemple de la nouvelle division internationale du travail ?",
              hint: "Part en % = montant de l'étape ÷ prix de vente × 100. Vérifiez que la somme des parts fait 100 %.",
              solution: [
                "(1) Conception et marketing : 290 ÷ 500 × 100 = 58 %. Composants : 150 ÷ 500 × 100 = 30 %. Assemblage : 25 ÷ 500 × 100 = 5 %. Transport et distribution : 35 ÷ 500 × 100 = 7 %. Vérification : 58 + 30 + 5 + 7 = 100 %.",
                "(2) La conception, la marque et le marketing captent 58 % de la valeur, alors que l'assemblage n'en représente que 5 %.",
                "(3) La production est fragmentée entre plusieurs pays selon leurs avantages : les activités les plus qualifiées restent dans les pays développés (et captent la valeur), les composants de haute technologie viennent de pays industrialisés d'Asie, l'assemblage, qui demande beaucoup de main-d'œuvre, est réalisé dans un pays aux salaires plus bas. C'est la logique de la chaîne de valeur mondiale organisée par une firme transnationale.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Quels acteurs expliquent la diversification des espaces de production dans le monde ? ». Rédigez une introduction (définitions, problématique), un développement en deux ou trois parties appuyé sur des exemples localisés, et une conclusion.",
              hint: "Classez les acteurs : entreprises (FTN, PME), puissances publiques (États, organisations régionales, collectivités), société civile (salariés, consommateurs, ONG). Donnez à chaque fois un exemple d'espace productif créé ou transformé.",
              solution: [
                "Introduction : un espace productif est un espace aménagé pour produire des biens ou des services. Depuis les années 1970-1980, ces espaces se diversifient : nouvelles régions industrielles, technopôles, zones logistiques. Problématique : quels acteurs sont à l'origine de ces transformations et comment agissent-ils ?",
                "I. Les entreprises, et d'abord les FTN : elles organisent des chaînes de valeur mondiales, localisent la conception dans les métropoles du Nord (Silicon Valley) et l'assemblage dans des pays à bas salaires (Chine, Mexique) ; leurs sous-traitants et les PME forment des réseaux productifs.",
                "II. Les États et les collectivités : la Chine crée les ZES en 1980 (Shenzhen) ; le Mexique développe les maquiladoras ; l'Inde soutient Bangalore ; les collectivités aménagent technopôles et zones d'activités ; depuis 2020-2022, les États cherchent à relocaliser les productions stratégiques (semi-conducteurs aux États-Unis).",
                "III. La société civile : les consommateurs, les salariés et les ONG pèsent sur les choix des entreprises, par exemple en dénonçant les conditions de travail chez les sous-traitants ou en exigeant des productions moins polluantes.",
                "Conclusion : la diversification des espaces productifs résulte de l'action combinée des firmes et des pouvoirs publics, dans une compétition mondiale entre territoires ; les choix récents de relocalisation montrent que cette géographie continue d'évoluer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Espaces et acteurs de la production dans le monde.",
            statements: [
              { text: "Une firme transnationale exerce ses activités dans plusieurs pays.", true: true, why: "Elle possède des filiales ou travaille avec des sous-traitants dans plusieurs pays, en plus de son pays d'origine." },
              { text: "Le pays qui assemble un smartphone capte la plus grande part de sa valeur.", true: false, why: "L'assemblage représente une faible part de la valeur ; conception, marque et commercialisation en captent la plus grande part." },
              { text: "Shenzhen était un simple bourg avant la création de sa zone économique spéciale en 1980.", true: true, why: "Proche de Hong Kong, elle est devenue en quelques décennies une métropole de plus de 17 millions d'habitants." },
              { text: "Les maquiladoras sont des plantations de café au Brésil.", true: false, why: "Ce sont des usines d'assemblage mexicaines, surtout installées près de la frontière avec les États-Unis." },
              { text: "Seul le coût de la main-d'œuvre explique la localisation des activités.", true: false, why: "Comptent aussi la proximité des marchés, la qualification, les infrastructures, la stabilité politique et l'innovation." },
              { text: "Les États peuvent attirer des entreprises par des avantages fiscaux.", true: true, why: "C'est le principe des zones économiques spéciales et des zones franches." },
              { text: "La Chine ne fait plus aujourd'hui qu'assembler des produits conçus ailleurs.", true: false, why: "Elle conçoit et innove, par exemple dans les télécommunications, les batteries et les véhicules électriques." },
            ],
          },
          quiz: [
            {
              q: "En quelle année la Chine crée-t-elle ses premières zones économiques spéciales ?",
              options: ["1949", "1960", "1980", "2001"],
              answer: 2,
              why: "Les premières ZES, dont Shenzhen, sont créées en 1980 dans le cadre des réformes de Deng Xiaoping ; 2001 est l'année d'entrée de la Chine dans l'OMC.",
            },
            {
              q: "Qu'appelle-t-on la nouvelle division internationale du travail ?",
              options: ["Le déplacement d'une partie de l'industrie vers des pays émergents", "La spécialisation des pays du Sud dans les seules matières premières", "L'interdiction du travail des enfants par l'ONU", "Le partage du travail entre hommes et femmes dans les usines"],
              answer: 0,
              why: "Depuis les années 1970-1980, une partie de la production industrielle se déplace vers l'Asie, le Mexique ou l'Europe centrale, ce qui modifie l'ancienne répartition Nord-Sud.",
            },
            {
              q: "Où se trouvent principalement les maquiladoras ?",
              options: ["Sur le littoral chinois", "En Europe centrale", "Dans la Silicon Valley, autour des universités californiennes", "Au Mexique, près de la frontière des États-Unis"],
              answer: 3,
              why: "Ces usines d'assemblage importent des composants sans droits de douane et réexportent vers le marché américain tout proche.",
            },
            {
              q: "Quelle étape d'une chaîne de valeur mondiale capte généralement le plus de valeur ?",
              options: ["L'assemblage final", "La conception et la commercialisation", "Le transport maritime", "L'extraction des métaux nécessaires aux composants électroniques"],
              answer: 1,
              why: "La recherche, le design, la marque et le marketing créent l'essentiel de la valeur, d'où leur maintien dans les métropoles des pays développés.",
            },
            {
              q: "Quel événement récent a poussé les États à vouloir relocaliser certaines productions ?",
              options: ["La chute du mur de Berlin", "La création de l'euro", "La pandémie de Covid-19", "L'entrée de la Chine dans l'Organisation mondiale du commerce en 2001"],
              answer: 2,
              why: "En 2020, les pénuries de masques, de médicaments puis de semi-conducteurs ont révélé la dépendance à des fournisseurs lointains.",
            },
          ],
          trap: "Croire que la mondialisation a simplement « déplacé les usines vers le Sud » : les fonctions de conception restent souvent au Nord, les pays émergents montent en gamme, et une partie de la production se relocalise.",
          method: "Pour tout espace productif, posez quatre questions : quoi (quelle production), où (localisation et facteurs), qui (quels acteurs), pour qui (quels marchés). Les réponses fournissent une description complète et un plan d'analyse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'littoralisation-flux',
          title: 'Métropolisation, littoralisation et accroissement des flux',
          minutes: 30,
          objectives: [
            "Décrire l'accroissement des flux de marchandises, de capitaux, d'informations et de personnes.",
            "Expliquer la littoralisation des espaces productifs et le rôle des zones industrialo-portuaires et des façades maritimes.",
            "Montrer que les métropoles et les grands ports sont des nœuds qui organisent les réseaux productifs mondiaux.",
            "Identifier les fragilités et les effets environnementaux de cette organisation.",
          ],
          course: [
            {
              heading: "Des flux toujours plus intenses",
              paragraphs: [
                "La production mondiale repose sur des flux croissants. Les flux de marchandises augmentent avec la fragmentation des chaînes de valeur : un même produit franchit plusieurs frontières avant d'être vendu. Selon la CNUCED (l'agence des Nations unies pour le commerce et le développement), environ 80 % du volume du commerce mondial voyage par la mer. S'y ajoutent les flux de capitaux (investissements directs à l'étranger, placements financiers), les flux d'informations, qui passent pour l'essentiel par des câbles sous-marins, et les flux de personnes (voyages d'affaires, tourisme, migrations de travail).",
                "La révolution des transports explique cet essor. En 1956, l'entrepreneur américain Malcolm McLean fait transporter pour la première fois des conteneurs sur un navire : ces boîtes métalliques standardisées passent du navire au train ou au camion sans être ouvertes, ce qui réduit fortement les coûts et la durée des manutentions. Les navires porte-conteneurs n'ont cessé de grandir : les plus grands transportent aujourd'hui plus de 20 000 EVP. Le transport aérien achemine les marchandises légères et de grande valeur, et le numérique permet de suivre chaque envoi en temps réel.",
              ],
              box: { label: "Définition", text: "Conteneurisation : transport des marchandises dans des conteneurs aux dimensions normalisées, facilement transférables d'un mode de transport à l'autre (transport multimodal). EVP (équivalent vingt pieds) : unité de mesure correspondant à un conteneur standard d'environ 6 mètres de long." },
            },
            {
              heading: "La littoralisation des espaces productifs",
              paragraphs: [
                "La littoralisation est la concentration croissante des hommes et des activités sur les littoraux. Pour les activités productives, elle s'explique par l'importance du transport maritime : il est plus rentable de transformer les matières premières importées là où elles arrivent. Depuis les années 1950-1960, la sidérurgie, le raffinage du pétrole et la pétrochimie se sont installés dans des zones industrialo-portuaires (ZIP), comme Rotterdam aux Pays-Bas, Dunkerque ou Fos-sur-Mer en France, ou Tianjin en Chine. Aujourd'hui, les zones logistiques et les industries d'assemblage s'y ajoutent.",
                "Les grands ports s'organisent en façades maritimes, des littoraux où se succèdent plusieurs ports reliés à un même arrière-pays. La façade de l'Asie orientale est devenue la première du monde : Shanghai, premier port de conteneurs du monde avec près de 50 millions d'EVP par an, Singapour, Ningbo-Zhoushan, Shenzhen ou Busan. En Europe, la Northern Range, du Havre à Hambourg, concentre les plus grands ports du continent, dont Rotterdam (environ 13 millions d'EVP). La plupart des plus grands ports à conteneurs du monde sont désormais chinois.",
              ],
              box: { label: "Définition", text: "Zone industrialo-portuaire (ZIP) : vaste espace qui associe un port et des industries lourdes ou de transformation installées au bord des quais. Façade maritime : littoral regroupant plusieurs ports proches, ouverts sur le monde et reliés à un même arrière-pays." },
            },
            {
              heading: "Métropoles et ports, nœuds des réseaux productifs",
              paragraphs: [
                "Les flux convergent vers des nœuds. Les grands ports sont des interfaces entre un arrière-pays (hinterland), l'espace terrestre qu'ils desservent, et un avant-pays (foreland), l'ensemble des ports et des régions du monde avec lesquels ils échangent. Certains sont des hubs, où les conteneurs sont transbordés des plus grands navires vers des navires plus petits qui desservent des ports secondaires : Singapour en est l'exemple type.",
                "Les métropoles sont, elles aussi, des nœuds majeurs : elles concentrent les sièges des firmes qui commandent les flux, les grands aéroports pour les passagers et le fret (Dubaï, Londres, Hong Kong), les plateformes logistiques et les centres de données. Les métropoles portuaires, comme Shanghai, Singapour ou Rotterdam, cumulent les deux fonctions. Métropolisation et littoralisation se renforcent donc mutuellement : les littoraux des grandes métropoles concentrent une part croissante de la production mondiale.",
              ],
              box: { label: "À retenir", text: "Hinterland : l'arrière-pays terrestre desservi par un port. Foreland : l'avant-pays maritime, les ports et régions avec lesquels il échange. Hub : plateforme de correspondance qui redistribue les flux vers d'autres destinations." },
            },
            {
              heading: "Des réseaux puissants mais fragiles",
              paragraphs: [
                "Les flux maritimes empruntent des passages stratégiques : canaux de Suez et de Panama, détroits de Malacca, d'Ormuz ou de Bab el-Mandeb. Tout blocage a des effets mondiaux. En mars 2021, le porte-conteneurs Ever Given, échoué en travers du canal de Suez, interrompt le trafic pendant six jours. Depuis la fin de 2023, les attaques de navires en mer Rouge conduisent de nombreux armateurs à contourner l'Afrique par le cap de Bonne-Espérance, ce qui allonge les trajets. La même année, une sécheresse a obligé le canal de Panama à limiter le nombre de passages.",
                "Cette organisation a aussi un coût environnemental : selon l'Organisation maritime internationale, le transport maritime émet près de 3 % des gaz à effet de serre d'origine humaine, et l'aménagement des littoraux détruit des milieux naturels et accroît l'exposition aux risques (submersion, pollution). Enfin, les flux sont sélectifs : les pays enclavés, sans accès à la mer, et de nombreux espaces intérieurs restent en marge des grands réseaux.",
              ],
            },
          ],
          keyPoints: [
            "Les flux de marchandises, de capitaux, d'informations et de personnes s'intensifient ; environ 80 % du volume du commerce mondial passe par la mer.",
            "La conteneurisation (1956, Malcolm McLean) a fait baisser les coûts du transport ; on mesure le trafic en EVP.",
            "Littoralisation : industries et logistique se concentrent dans les zones industrialo-portuaires (Rotterdam, Fos-sur-Mer, Tianjin).",
            "Façades maritimes : l'Asie orientale domine (Shanghai, premier port mondial), devant la Northern Range européenne.",
            "Ports (hinterland, foreland, hubs) et métropoles sont les nœuds des réseaux ; les passages stratégiques rendent ces réseaux fragiles.",
          ],
          example: {
            statement: "Expliquez pourquoi de nombreuses activités industrielles se sont installées sur les littoraux depuis les années 1950-1960.",
            solution: [
              "Définir la littoralisation : la concentration croissante des hommes et des activités sur les littoraux.",
              "Premier facteur, les matières premières importées : le pétrole, le minerai de fer ou le charbon arrivent par la mer ; il est moins coûteux de les transformer sur place, dans les zones industrialo-portuaires (sidérurgie de Dunkerque, raffineries de Fos-sur-Mer).",
              "Deuxième facteur, l'exportation : les produits finis repartent par conteneurs vers les marchés mondiaux ; la conteneurisation a rendu le transport maritime très bon marché.",
              "Troisième facteur, les politiques publiques : les États et les autorités portuaires aménagent de vastes terrains, des quais et des zones franches (ZES littorales en Chine dès 1980).",
              "Conclure : la littoralisation des activités traduit l'ouverture des économies au commerce mondial ; les grands ports deviennent des pôles industriels et logistiques majeurs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants et donnez un exemple localisé : (a) littoralisation ; (b) zone industrialo-portuaire ; (c) façade maritime ; (d) hinterland ; (e) hub ; (f) passage stratégique.",
              hint: "Pour les exemples, appuyez-vous sur les ports et les passages cités dans le cours (Rotterdam, Shanghai, Singapour, Suez...).",
              solution: [
                "(a) Littoralisation : concentration des hommes et des activités sur les littoraux ; exemple : le littoral chinois, de Tianjin à Shenzhen.",
                "(b) Zone industrialo-portuaire : espace associant un port et des industries ; exemple : Fos-sur-Mer, près de Marseille, avec sidérurgie et pétrochimie.",
                "(c) Façade maritime : littoral regroupant plusieurs ports ouverts sur le monde ; exemple : la Northern Range, du Havre à Hambourg.",
                "(d) Hinterland : arrière-pays terrestre desservi par un port ; exemple : l'hinterland de Rotterdam s'étend le long du Rhin jusqu'à l'Allemagne et la Suisse.",
                "(e) Hub : plateforme de correspondance où les flux sont redistribués ; exemple : Singapour, où les conteneurs sont transbordés vers toute l'Asie du Sud-Est.",
                "(f) Passage stratégique : canal ou détroit indispensable aux grandes routes maritimes ; exemple : le canal de Suez, bloqué six jours par l'Ever Given en mars 2021.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice, à partir d'ordres de grandeur réalistes. Trafic de conteneurs (en millions d'EVP) : port A (Asie orientale) : 15 en 2005, 48 en 2023 ; port B (Europe du Nord-Ouest) : 9 en 2005, 13 en 2023. (1) Calculez par combien le trafic de chaque port a été multiplié. (2) Calculez le taux d'évolution du trafic du port B. (3) Que révèlent ces chiffres sur la géographie des flux maritimes mondiaux ?",
              hint: "Coefficient multiplicateur = valeur d'arrivée ÷ valeur de départ ; taux d'évolution = (arrivée - départ) ÷ départ × 100. Arrondissez au dixième.",
              solution: [
                "(1) Port A : 48 ÷ 15 = 3,2 ; le trafic a été multiplié par 3,2. Port B : 13 ÷ 9 ≈ 1,4 ; le trafic a été multiplié par environ 1,4.",
                "(2) Port B : (13 - 9) ÷ 9 × 100 = 4 ÷ 9 × 100 ≈ 44,4 % d'augmentation.",
                "(3) Les deux ports progressent, mais le port asiatique beaucoup plus vite : en 2023, il traite près de quatre fois plus de conteneurs que le port européen (48 ÷ 13 ≈ 3,7). Ces chiffres traduisent le basculement des flux maritimes vers l'Asie orientale, devenue « l'atelier du monde » et la première façade maritime mondiale, tandis que les ports européens, toujours importants, voient leur poids relatif diminuer.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document construit pour l'exercice d'après les classements récents (répartition arrondie) : description d'une carte intitulée « Les vingt premiers ports à conteneurs du monde ». On y voit environ quinze ports en Asie orientale et du Sud-Est (dont Shanghai, Singapour, Ningbo-Zhoushan, Shenzhen, Qingdao, Guangzhou, Busan, Tianjin, Hong Kong), un port dans le golfe Persique (Dubaï-Jebel Ali), deux ports en Europe du Nord-Ouest (Rotterdam, Anvers-Bruges), deux ports sur la côte pacifique des États-Unis (Los Angeles, Long Beach), et aucun en Afrique subsaharienne ni en Amérique du Sud. Consigne : présentez le document, décrivez la répartition des grands ports et expliquez-la, puis montrez les limites de ce type de document.",
              hint: "Décrivez la répartition (où sont les ports, où sont-ils absents), puis reliez-la à la nouvelle division internationale du travail, à la littoralisation et à la métropolisation. Pour les limites, demandez-vous ce que la carte ne montre pas.",
              solution: [
                "Présentation : il s'agit d'une carte de répartition des vingt premiers ports à conteneurs du monde, classés selon leur trafic en EVP pour une année récente. Elle permet de localiser les principaux nœuds du commerce maritime conteneurisé.",
                "Description : la répartition est très inégale. L'Asie orientale et du Sud-Est domine avec environ quinze ports sur vingt, dont une majorité de ports chinois. L'Europe du Nord-Ouest n'en compte que deux, sur la Northern Range, les États-Unis deux, sur leur façade pacifique tournée vers l'Asie, et le Golfe un seul. L'Afrique subsaharienne et l'Amérique du Sud sont absentes.",
                "Explication : la domination asiatique reflète la nouvelle division internationale du travail ; l'Asie orientale, « atelier du monde », exporte massivement des produits manufacturés et importe des matières premières. Les ports sont souvent associés à des métropoles littorales (Shanghai, Shenzhen, Singapour) et à des ZES : métropolisation et littoralisation se renforcent. Singapour et Dubaï sont des hubs de transbordement sur les grandes routes maritimes.",
                "Les absences : les régions qui exportent surtout des matières premières en vrac (minerais, pétrole, céréales) n'apparaissent pas, car la carte ne mesure que les conteneurs.",
                "Limites : la carte ne montre ni les flux eux-mêmes (origines et destinations), ni les autres trafics (vracs, passagers), ni l'évolution dans le temps ; un classement en EVP ne dit rien de la valeur des marchandises ni des fonctions de commandement.",
                "Conclusion : le document illustre la littoralisation et la concentration des flux maritimes sur la façade de l'Asie orientale, mais il faut le compléter par des données sur les flux et sur les autres types de trafic.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "EVP", right: "Unité de mesure correspondant à un conteneur de vingt pieds" },
              { left: "Hinterland", right: "Arrière-pays terrestre desservi par un port" },
              { left: "Foreland", right: "Ensemble des ports et régions avec lesquels un port échange" },
              { left: "Hub", right: "Plateforme de correspondance qui redistribue les flux" },
              { left: "Zone industrialo-portuaire", right: "Port associé à des industries installées au bord des quais" },
              { left: "Passage stratégique", right: "Canal ou détroit indispensable aux routes maritimes" },
            ],
          },
          quiz: [
            {
              q: "Quelle part environ du volume du commerce mondial voyage par la mer ?",
              options: ["20 %", "80 %", "50 %", "Moins de 5 %, le reste passant par l'avion"],
              answer: 1,
              why: "Selon la CNUCED, environ 80 % du volume des échanges mondiaux est transporté par voie maritime.",
            },
            {
              q: "Quel est aujourd'hui le premier port à conteneurs du monde ?",
              options: ["Rotterdam", "Le Havre", "Los Angeles", "Shanghai"],
              answer: 3,
              why: "Shanghai traite près de 50 millions d'EVP par an ; la plupart des plus grands ports à conteneurs sont aujourd'hui chinois.",
            },
            {
              q: "Qui fait transporter des conteneurs sur un navire pour la première fois, en 1956 ?",
              options: ["Malcolm McLean", "Henry Ford", "Jean Gottmann", "Ferdinand de Lesseps, le promoteur du canal de Suez"],
              answer: 0,
              why: "L'entrepreneur américain Malcolm McLean lance la conteneurisation en 1956, ce qui fait chuter les coûts de manutention.",
            },
            {
              q: "Que s'est-il passé dans le canal de Suez en mars 2021 ?",
              options: ["Le canal a été élargi pour les plus grands navires", "Le canal a été fermé définitivement", "Un porte-conteneurs échoué a bloqué le trafic pendant six jours", "Une sécheresse a fait baisser le niveau de l'eau et limité le nombre de passages"],
              answer: 2,
              why: "L'échouement de l'Ever Given a interrompu le trafic pendant six jours, montrant la fragilité des chaînes logistiques mondiales.",
            },
            {
              q: "Qu'appelle-t-on la Northern Range ?",
              options: ["La chaîne de montagnes du nord de l'Europe", "Un accord de libre-échange entre pays nordiques", "La route maritime arctique qui longe les côtes de la Sibérie russe", "La façade maritime européenne du Havre à Hambourg"],
              answer: 3,
              why: "La Northern Range regroupe les plus grands ports européens (Rotterdam, Anvers-Bruges, Hambourg, Le Havre...), reliés à l'arrière-pays le plus riche du continent.",
            },
          ],
          trap: "Confondre façade maritime et simple littoral : une façade maritime suppose plusieurs grands ports ouverts sur le monde et reliés à un arrière-pays ; un littoral touristique n'est pas une façade maritime.",
          method: "Mémorisez une « carte mentale » des flux : trois façades (Asie orientale, Europe du Nord-Ouest, Amérique du Nord), quatre passages stratégiques (Malacca, Suez, Panama, Ormuz) et deux ou trois ports par façade. Vous pourrez ainsi localiser précisément tout exemple dans une copie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-espaces-productifs',
          title: 'La France : les espaces de production et leurs acteurs',
          minutes: 35,
          objectives: [
            "Caractériser l'économie productive française et ses mutations : tertiarisation, désindustrialisation, réindustrialisation.",
            "Localiser et décrire les principaux espaces productifs français (métropoles, technopôles, littoraux, espaces agricoles et touristiques).",
            "Identifier les acteurs de la production, de l'Union européenne aux collectivités locales et aux entreprises.",
            "Expliquer les inégalités entre territoires productifs dynamiques et territoires en reconversion.",
          ],
          course: [
            {
              heading: "Une économie productive en profonde mutation",
              paragraphs: [
                "La France est l'une des principales puissances économiques mondiales, au septième rang environ pour la richesse produite. Son économie est très tertiarisée : environ trois emplois sur quatre relèvent des services (commerce, santé, enseignement, transports, banque, tourisme, numérique). La France est la première destination touristique du monde par le nombre d'arrivées internationales.",
                "Depuis les années 1970, le pays a connu une forte désindustrialisation : selon une étude du ministère de l'Économie, près de deux millions d'emplois industriels ont disparu entre 1980 et 2007, sous l'effet des gains de productivité, de la concurrence internationale et des délocalisations. Les bassins du charbon, de l'acier et du textile (Nord, Lorraine) ont été les plus touchés. L'industrie reste pourtant puissante dans certains secteurs : aéronautique et spatial, luxe, agroalimentaire, pharmacie, énergie nucléaire, automobile.",
                "L'agriculture n'emploie plus qu'une faible part des actifs, mais la France est le premier producteur agricole de l'Union européenne en valeur. Depuis le milieu des années 2010, et plus encore depuis la pandémie de Covid-19, l'État cherche à réindustrialiser le pays, en particulier dans les secteurs jugés stratégiques.",
              ],
              box: { label: "Définition", text: "Tertiarisation : augmentation de la part des services dans l'emploi et la richesse produite. Désindustrialisation : recul de l'emploi et du poids de l'industrie. Réindustrialisation : politique visant à recréer des activités industrielles sur le territoire." },
            },
            {
              heading: "Des espaces productifs diversifiés",
              paragraphs: [
                "Les métropoles concentrent les activités les plus qualifiées : sièges sociaux, finance, recherche, services aux entreprises. Paris et La Défense dominent, mais les métropoles régionales ont leurs spécialités. Les technopôles associent recherche et entreprises de pointe, comme Sophia Antipolis, créée en 1969 près d'Antibes, entre Nice et Cannes. Depuis 2005, l'État soutient des pôles de compétitivité, réseaux d'entreprises, de laboratoires et d'écoles sur un même thème : Aerospace Valley pour l'aéronautique (Toulouse et Bordeaux) ou Minalogic pour la microélectronique (Grenoble).",
                "Les littoraux accueillent de grands espaces industrialo-portuaires : Marseille-Fos, premier port français, Dunkerque, et l'axe Seine, où les ports du Havre, de Rouen et de Paris sont réunis depuis 2021 dans un établissement unique, HAROPA. Les espaces agricoles sont spécialisés : grandes cultures céréalières du Bassin parisien, élevage et industrie agroalimentaire en Bretagne, vignobles de Champagne ou du Bordelais, productions sous signe de qualité (AOP). Les espaces touristiques (Paris, littoral méditerranéen, stations de ski des Alpes) sont eux aussi des espaces productifs.",
                "D'anciens bassins industriels se reconvertissent : le bassin minier du Nord-Pas-de-Calais, inscrit au patrimoine mondial de l'UNESCO en 2012, développe la logistique et la culture (Louvre-Lens) ; dans les Hauts-de-France, autour de Douai et de Dunkerque, des usines de batteries pour véhicules électriques s'implantent depuis le début des années 2020.",
              ],
              box: { label: "Définition", text: "Pôle de compétitivité : réseau qui rassemble, sur un territoire et autour d'une thématique, des entreprises, des centres de recherche et des établissements de formation, afin de développer des projets innovants. La politique des pôles a été lancée en 2005." },
            },
            {
              heading: "Des acteurs multiples, du local au mondial",
              paragraphs: [
                "L'Union européenne organise un marché unique ouvert à la concurrence, finance l'agriculture par la politique agricole commune (PAC) et soutient les régions par des fonds structurels, comme le Fonds européen de développement régional (FEDER). L'État reste un acteur majeur : il aménage les grandes infrastructures, soutient la recherche et l'innovation et lance des programmes comme Territoires d'industrie (2018) ou le plan d'investissement France 2030 (2021), doté de 54 milliards d'euros pour l'énergie, les transports décarbonés, la santé ou les semi-conducteurs.",
                "Depuis la loi NOTRe de 2015, les régions sont chefs de file du développement économique ; intercommunalités et métropoles aménagent zones d'activités et pépinières d'entreprises. Les entreprises sont au cœur de la production : grands groupes français (TotalEnergies, LVMH, Airbus, groupe européen dont le siège opérationnel est à Toulouse), entreprises étrangères qui investissent en France, entreprises de taille intermédiaire et PME, souvent sous-traitantes. Les salariés, les syndicats, les consommateurs et les associations, par exemple de défense de l'environnement, interviennent aussi dans les choix.",
              ],
              box: { label: "À retenir", text: "Acteurs de la production en France : Union européenne (marché unique, PAC, FEDER), État (infrastructures, France 2030), régions (chefs de file économiques depuis 2015), intercommunalités, entreprises de toutes tailles, société civile." },
            },
            {
              heading: "Des territoires productifs inégaux",
              paragraphs: [
                "Les espaces productifs les plus dynamiques se situent dans les métropoles, en Île-de-France, dans l'Ouest et le Sud (Toulouse, Bordeaux, Nantes, Lyon, Montpellier) et dans certaines régions frontalières, où de nombreux actifs travaillent en Suisse, au Luxembourg ou en Allemagne. Ils combinent emplois qualifiés, universités, accessibilité et attractivité résidentielle.",
                "D'autres territoires restent fragiles : anciens bassins industriels du Nord-Est, villes moyennes qui perdent des emplois, espaces ruraux peu denses de la « diagonale des faibles densités », qui va des Ardennes aux Pyrénées. La réindustrialisation, encore limitée, profite surtout aux territoires bien desservis et disposant d'une main-d'œuvre qualifiée, mais certains projets, comme ceux de la « vallée de la batterie » dans les Hauts-de-France, montrent que d'anciens territoires industriels peuvent rebondir.",
              ],
            },
          ],
          keyPoints: [
            "Une économie très tertiarisée (environ trois emplois sur quatre dans les services) et la première destination touristique mondiale.",
            "Désindustrialisation depuis les années 1970 (près de deux millions d'emplois industriels perdus entre 1980 et 2007), mais des industries puissantes et une volonté de réindustrialiser.",
            "Espaces productifs variés : métropoles, technopôles (Sophia Antipolis), pôles de compétitivité (depuis 2005), ZIP (Marseille-Fos, Dunkerque, HAROPA), espaces agricoles et touristiques.",
            "Acteurs : UE (PAC, FEDER), État (Territoires d'industrie, France 2030), régions (loi NOTRe, 2015), entreprises, société civile.",
            "Inégalités : métropoles, Ouest et Sud dynamiques ; anciens bassins industriels et espaces peu denses fragiles.",
          ],
          example: {
            statement: "Montrez, à partir de l'exemple de Toulouse, comment un espace productif français s'insère dans la mondialisation.",
            solution: [
              "Situer : Toulouse est une métropole régionale du Sud-Ouest, l'une des villes françaises dont la population augmente le plus vite.",
              "Identifier l'activité : elle accueille le siège opérationnel et les principales chaînes d'assemblage d'Airbus, ainsi que de nombreuses entreprises du spatial ; elle est au cœur du pôle de compétitivité Aerospace Valley, partagé avec Bordeaux.",
              "Montrer les acteurs : un grand groupe européen, des centaines de sous-traitants, des laboratoires et des écoles d'ingénieurs, l'État et la région qui soutiennent la recherche et les infrastructures.",
              "Montrer l'insertion mondiale : les pièces arrivent d'autres pays européens (Allemagne, Royaume-Uni, Espagne), les avions sont vendus aux compagnies du monde entier.",
              "Conclure : Toulouse illustre un espace productif métropolitain, innovant et connecté, qui tire sa puissance de l'association entre industrie, recherche et réseaux internationaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des espaces suivants, indiquez le type d'espace productif et une activité dominante : (a) La Défense ; (b) Sophia Antipolis ; (c) Fos-sur-Mer ; (d) la Beauce, dans le Bassin parisien ; (e) les stations de ski de la Tarentaise ; (f) le bassin minier du Nord-Pas-de-Calais aujourd'hui.",
              hint: "Les types possibles sont : quartier d'affaires, technopôle, zone industrialo-portuaire, espace agricole, espace touristique, ancien bassin industriel en reconversion.",
              solution: [
                "(a) La Défense : quartier d'affaires ; sièges sociaux, finance, services aux entreprises.",
                "(b) Sophia Antipolis : technopôle créé en 1969 ; informatique, télécommunications, recherche.",
                "(c) Fos-sur-Mer : zone industrialo-portuaire du port de Marseille-Fos ; sidérurgie, pétrochimie, logistique.",
                "(d) La Beauce : espace agricole de grandes cultures mécanisées ; céréales (blé) et oléagineux.",
                "(e) Stations de la Tarentaise : espace touristique de montagne ; sports d'hiver.",
                "(f) Bassin minier du Nord-Pas-de-Calais : ancien bassin industriel en reconversion ; logistique, services, tourisme culturel (Louvre-Lens, patrimoine minier inscrit à l'UNESCO en 2012).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Dans une zone d'emploi du Nord-Est, l'emploi industriel passe de 24 000 postes en 1990 à 13 200 en 2015, puis remonte à 14 500 en 2024 après l'ouverture d'une usine de batteries. (1) Calculez le taux d'évolution de l'emploi industriel entre 1990 et 2015, puis entre 2015 et 2024. (2) Décrivez les deux phases. (3) Proposez deux acteurs qui ont pu contribuer à la seconde phase et expliquez leur rôle.",
              hint: "Taux d'évolution = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Pour la question 3, relisez la partie du cours consacrée aux acteurs.",
              solution: [
                "(1) 1990-2015 : (13 200 - 24 000) ÷ 24 000 × 100 = -10 800 ÷ 24 000 × 100 = -45 %. 2015-2024 : (14 500 - 13 200) ÷ 13 200 × 100 = 1 300 ÷ 13 200 × 100 ≈ +9,8 %.",
                "(2) Première phase : une forte désindustrialisation, l'emploi industriel recule de 45 % en vingt-cinq ans (fermetures d'usines, gains de productivité, concurrence internationale). Seconde phase : une réindustrialisation modeste (+9,8 %), qui ne compense qu'une petite partie des pertes.",
                "(3) Exemples d'acteurs : l'État, qui finance des projets industriels stratégiques (Territoires d'industrie, France 2030) ; la région, chef de file du développement économique, qui aide à l'implantation et à la formation ; l'entreprise industrielle elle-même, souvent un groupe ou une co-entreprise, qui choisit le site pour son foncier, sa main-d'œuvre et sa desserte. L'Union européenne peut aussi intervenir par le FEDER.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment les espaces productifs français se recomposent-ils dans le contexte de la mondialisation ? ». Rédigez une introduction (définitions, problématique), un développement en deux ou trois parties appuyé sur des exemples localisés, et une conclusion.",
              hint: "Pensez à trois mouvements : le déclin de certains espaces (désindustrialisation), le renforcement d'autres (métropoles, littoraux, technopôles), et le rôle des acteurs qui accompagnent ces recompositions.",
              solution: [
                "Introduction : un espace productif est un espace aménagé pour produire des richesses. La mondialisation met les territoires français en concurrence avec le reste du monde. Problématique : quels espaces productifs déclinent ou se renforcent, et sous l'action de quels acteurs ?",
                "I. Des espaces fragilisés par la mondialisation : la désindustrialisation (près de deux millions d'emplois industriels perdus entre 1980 et 2007) frappe les bassins du Nord et de Lorraine ; certaines villes moyennes perdent des emplois.",
                "II. Des espaces renforcés : les métropoles concentrent les emplois qualifiés (Paris et La Défense, Toulouse avec l'aéronautique, Grenoble avec la microélectronique) ; les technopôles (Sophia Antipolis) et les pôles de compétitivité (depuis 2005) favorisent l'innovation ; les littoraux portuaires (Marseille-Fos, Dunkerque, HAROPA) s'insèrent dans les flux mondiaux ; agriculture et tourisme valorisent la qualité.",
                "III. Des acteurs qui accompagnent les recompositions : l'UE (PAC, FEDER), l'État (Territoires d'industrie en 2018, France 2030 en 2021), les régions (loi NOTRe), les entreprises françaises et étrangères ; la réindustrialisation récente, par exemple la « vallée de la batterie » des Hauts-de-France, montre que d'anciens territoires peuvent rebondir.",
                "Conclusion : les espaces productifs français se recomposent au profit des métropoles, des littoraux et des territoires innovants ; les politiques publiques cherchent à limiter les inégalités qui en résultent.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'aménagement des espaces productifs français.",
            items: [
              "Création de la technopole de Sophia Antipolis",
              "Mise en service de la première ligne à grande vitesse, de Paris à Lyon",
              "Ouverture du tunnel sous la Manche",
              "Lancement des pôles de compétitivité",
              "Lancement du programme Territoires d'industrie",
              "Présentation du plan d'investissement France 2030",
            ],
          },
          quiz: [
            {
              q: "Quelle part environ des emplois relève des services en France ?",
              options: ["Environ trois quarts", "Environ un quart", "Environ la moitié", "Presque la totalité, plus de 95 %"],
              answer: 0,
              why: "L'économie française est très tertiarisée : environ trois emplois sur quatre sont dans les services.",
            },
            {
              q: "Qu'est-ce qu'un pôle de compétitivité ?",
              options: ["Une zone franche sans impôts", "Un grand port maritime", "Un réseau d'entreprises, de laboratoires et d'écoles autour d'un même thème", "Une région agricole spécialisée dans les céréales et dans l'élevage intensif"],
              answer: 2,
              why: "Lancés en 2005, les pôles de compétitivité associent entreprises, recherche et formation pour développer des projets innovants, comme Aerospace Valley.",
            },
            {
              q: "Quels ports l'établissement HAROPA réunit-il depuis 2021 ?",
              options: ["Marseille et Fos-sur-Mer", "Dunkerque et Calais", "Bordeaux et La Rochelle", "Le Havre, Rouen et Paris"],
              answer: 3,
              why: "HAROPA unit les ports de l'axe Seine (Le Havre, Rouen, Paris) pour mieux concurrencer les grands ports de la Northern Range.",
            },
            {
              q: "Depuis la loi NOTRe de 2015, quelle collectivité est chef de file du développement économique ?",
              options: ["La commune", "La région", "Le département", "L'État lui-même, par ses préfectures"],
              answer: 1,
              why: "La loi NOTRe confie aux régions la responsabilité de définir les orientations du développement économique sur leur territoire.",
            },
            {
              q: "Quel exemple illustre la reconversion d'un ancien bassin industriel ?",
              options: ["Le bassin minier du Nord-Pas-de-Calais avec le Louvre-Lens", "La Défense", "La Beauce", "Les stations de ski de la Tarentaise, aménagées dans les années 1960-1970"],
              answer: 0,
              why: "L'ancien bassin minier, inscrit au patrimoine mondial en 2012, se reconvertit dans la logistique, les services et le tourisme culturel.",
            },
          ],
          trap: "Croire que la France n'a « plus d'industrie » : l'emploi industriel a fortement reculé, mais le pays reste une grande puissance industrielle (aéronautique, luxe, agroalimentaire, nucléaire) et cherche à se réindustrialiser.",
          method: "Classez vos exemples français dans un tableau à deux colonnes, « territoires dynamiques » et « territoires en difficulté ou en reconversion », avec pour chacun une activité et un acteur : vous disposez ainsi d'exemples prêts pour toute question sur les espaces productifs.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME 3 · LES ESPACES RURAUX                             */
    /* ==================================================================== */
    {
      id: 'espaces-ruraux',
      lessons: [

        /* ------------------------------------------------------------------ */
        {
          id: 'fragmentation-rurale',
          title: 'La fragmentation des espaces ruraux',
          minutes: 30,
          objectives: [
            "Définir les espaces ruraux et mesurer leur poids dans le monde.",
            "Distinguer les grands types d'agriculture et d'espaces ruraux, de l'agriculture productiviste mondialisée à l'agriculture familiale vivrière.",
            "Expliquer la notion de fragmentation des espaces ruraux et ses facteurs (mondialisation, métropolisation, politiques publiques).",
            "Analyser un exemple de front pionnier ou d'accaparement des terres.",
          ],
          course: [
            {
              heading: "Des espaces ruraux qui pèsent encore lourd dans le monde",
              paragraphs: [
                "Les espaces ruraux sont des espaces de faible densité, où dominent les paysages agricoles, forestiers ou naturels, et où l'habitat est dispersé ou regroupé en villages et petites villes. Leur définition varie selon les pays : en France, l'INSEE définit depuis 2020 les communes rurales par leur faible densité de population ; ailleurs, on utilise des seuils de population ou des critères administratifs.",
                "Malgré l'urbanisation, un peu moins de la moitié de l'humanité vit encore dans des espaces ruraux, soit plus de trois milliards de personnes, surtout en Asie et en Afrique subsaharienne. Dans les pays développés, les ruraux sont minoritaires, mais les espaces ruraux couvrent la plus grande partie du territoire. L'agriculture reste leur activité emblématique, mais elle n'est plus partout la principale source d'emplois.",
              ],
              box: { label: "Définition", text: "Espace rural : espace de faible densité, où les paysages agricoles, forestiers et naturels dominent. Exode rural : départ des habitants des campagnes vers les villes. Déprise rurale : recul de la population et des activités, qui conduit à l'abandon de terres." },
            },
            {
              heading: "Des agricultures très contrastées",
              paragraphs: [
                "L'agriculture productiviste, très mécanisée et utilisatrice d'engrais, de semences sélectionnées et de capitaux, produit de grandes quantités pour le marché mondial. Elle domine dans les grandes plaines des États-Unis (Corn Belt, consacrée au maïs et au soja), au Canada, en Argentine, en Australie ou au Brésil. Elle est intégrée à l'agrobusiness, c'est-à-dire à l'ensemble des firmes qui fournissent les intrants, achètent, transforment et commercialisent les produits agricoles.",
                "À l'autre extrémité, l'agriculture familiale vivrière, souvent peu mécanisée, nourrit d'abord la famille de l'exploitant et vend une partie de sa production sur les marchés locaux. Selon la FAO (l'organisation des Nations unies pour l'alimentation et l'agriculture), plus de 500 millions d'exploitations dans le monde sont familiales, et la plupart sont de petite taille, notamment en Asie du Sud et en Afrique subsaharienne. Ces paysans sont souvent pauvres et vulnérables aux sécheresses et à la variation des prix.",
                "Entre les deux existent des situations intermédiaires : agricultures de qualité et labellisées en Europe, plantations commerciales tournées vers l'exportation (palmier à huile en Indonésie et en Malaisie, café, cacao en Côte d'Ivoire), petites exploitations spécialisées qui vendent aux villes proches.",
              ],
              box: { label: "Définition", text: "Agriculture productiviste : agriculture qui cherche les rendements les plus élevés grâce à la mécanisation, à la chimie et aux capitaux. Agriculture vivrière : agriculture destinée d'abord à nourrir la famille de l'exploitant. Agrobusiness : ensemble des activités industrielles et commerciales liées à l'agriculture." },
            },
            {
              heading: "Fronts pionniers et accaparement des terres",
              paragraphs: [
                "Un front pionnier est une zone de mise en valeur de nouvelles terres. En Amazonie brésilienne, au Mato Grosso, la forêt et la savane ont été défrichées depuis les années 1970 pour l'élevage bovin puis la culture du soja, au prix d'une forte déforestation et de conflits avec les peuples autochtones et les petits paysans. Le Brésil est devenu l'un des premiers exportateurs mondiaux de soja et de viande bovine.",
                "Depuis la crise alimentaire de 2007-2008, des États et des entreprises cherchent à acheter ou à louer de vastes terres agricoles à l'étranger pour sécuriser leur approvisionnement : c'est l'accaparement des terres (land grabbing). En 2008, le projet d'une entreprise sud-coréenne qui voulait louer plus d'un million d'hectares à Madagascar a provoqué une vive contestation et a finalement été abandonné. Ces acquisitions touchent surtout l'Afrique, l'Asie du Sud-Est et l'Amérique latine, souvent au détriment des paysans locaux, dont les droits sur la terre ne sont pas écrits.",
              ],
            },
            {
              heading: "La fragmentation : des espaces ruraux qui divergent",
              paragraphs: [
                "La fragmentation des espaces ruraux désigne leur division en ensembles aux dynamiques de plus en plus différentes, qui entretiennent peu de liens entre eux. Certains espaces sont intégrés à la mondialisation (grandes exploitations exportatrices, campagnes touristiques) ou à la métropolisation (espaces périurbains autour des villes, où s'installent des citadins). D'autres sont en marge : régions enclavées, campagnes en déprise qui se vident de leurs habitants, comme l'intérieur de l'Espagne (on parle de « l'Espagne vide ») ou certaines régions rurales du Japon.",
                "La fragmentation s'observe aussi à grande échelle, dans une même région : au Brésil, de grandes exploitations modernes côtoient des paysans sans terre, dont le Mouvement des travailleurs ruraux sans terre (MST) réclame une réforme agraire. Ses facteurs sont l'ouverture aux marchés mondiaux, l'influence croissante des villes, l'accessibilité (routes, réseaux numériques) et les politiques publiques, qui peuvent soutenir certains espaces plus que d'autres.",
              ],
              box: { label: "À retenir", text: "Fragmentation des espaces ruraux : des espaces intégrés à la mondialisation ou aux métropoles côtoient des espaces en marge ou en déprise. Ses facteurs : mondialisation, métropolisation, accessibilité, politiques publiques." },
            },
          ],
          keyPoints: [
            "Les espaces ruraux sont des espaces de faible densité ; un peu moins de la moitié de l'humanité y vit, surtout en Asie et en Afrique.",
            "Agriculture productiviste et mondialisée (Corn Belt, Brésil) d'un côté, agriculture familiale vivrière de l'autre (plus de 500 millions d'exploitations familiales selon la FAO).",
            "Fronts pionniers (Mato Grosso) et accaparement des terres (depuis 2007-2008) transforment les campagnes du Sud.",
            "Fragmentation : des espaces ruraux intégrés (mondialisation, périurbanisation) et d'autres en marge ou en déprise (« Espagne vide »).",
            "Facteurs : mondialisation, métropolisation, accessibilité, politiques publiques.",
          ],
          example: {
            statement: "En quoi le Mato Grosso brésilien illustre-t-il l'intégration d'un espace rural à la mondialisation ?",
            solution: [
              "Situer : le Mato Grosso est un État du centre-ouest du Brésil, au sud de l'Amazonie.",
              "Décrire la transformation : depuis les années 1970, ce front pionnier a été défriché pour l'élevage puis pour d'immenses exploitations mécanisées de soja et de maïs.",
              "Montrer l'intégration mondiale : la production est exportée, notamment vers la Chine et l'Europe, par des firmes de l'agrobusiness ; le Brésil est l'un des premiers exportateurs mondiaux de soja.",
              "Montrer les conséquences : déforestation, conflits avec les peuples autochtones et les petits paysans, concentration des terres entre les mains de grands propriétaires.",
              "Conclure : le Mato Grosso est un espace rural intégré à la mondialisation, mais cette intégration est sélective et produit une fragmentation sociale et environnementale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacun des exemples suivants dans l'une des catégories proposées (espace agricole productiviste et mondialisé, agriculture familiale vivrière, front pionnier, espace en déprise, plantation commerciale) et justifiez en une phrase : (a) la Corn Belt aux États-Unis ; (b) un village du Sahel où l'on cultive le mil et le sorgho ; (c) l'intérieur de l'Espagne ; (d) le Mato Grosso ; (e) des plantations de palmiers à huile à Sumatra.",
              hint: "Demandez-vous à chaque fois à qui la production est destinée et comment évolue la population.",
              solution: [
                "(a) Corn Belt : espace agricole productiviste et mondialisé ; maïs et soja produits à grande échelle, avec de fortes exportations.",
                "(b) Village du Sahel : agriculture familiale vivrière ; le mil et le sorgho nourrissent d'abord les familles.",
                "(c) Intérieur de l'Espagne : espace en déprise ; la population vieillit et diminue, des villages se vident.",
                "(d) Mato Grosso : front pionnier ; défrichement de nouvelles terres pour l'élevage et le soja depuis les années 1970.",
                "(e) Sumatra : plantation commerciale ; l'huile de palme est exportée vers les marchés mondiaux.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice. Une région rurale A, située à 25 km d'une métropole, voit sa population passer de 40 000 à 52 000 habitants entre 2000 et 2020. Une région rurale B, montagneuse et à trois heures de route de la grande ville la plus proche, passe de 30 000 à 24 000 habitants sur la même période. (1) Calculez le taux d'évolution de la population de chaque région. (2) Quelle dynamique chaque région illustre-t-elle ? (3) En quoi la comparaison illustre-t-elle la fragmentation des espaces ruraux ?",
              hint: "Taux d'évolution = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Pensez au rôle de la distance à la ville.",
              solution: [
                "(1) Région A : (52 000 - 40 000) ÷ 40 000 × 100 = 12 000 ÷ 40 000 × 100 = +30 %. Région B : (24 000 - 30 000) ÷ 30 000 × 100 = -6 000 ÷ 30 000 × 100 = -20 %.",
                "(2) La région A, proche de la métropole, connaît une périurbanisation : des citadins s'y installent tout en travaillant en ville. La région B, isolée, connaît une déprise : départ des jeunes, vieillissement, fermeture de services.",
                "(3) Les deux espaces sont ruraux, mais leurs dynamiques divergent selon leur accessibilité et leur proximité d'une métropole : c'est la fragmentation des espaces ruraux, entre espaces intégrés et espaces en marge.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Pourquoi peut-on parler d'une fragmentation des espaces ruraux dans le monde ? ». Rédigez une introduction (définitions, problématique), un développement en deux ou trois parties appuyé sur des exemples localisés pris sur plusieurs continents, et une conclusion.",
              hint: "Montrez d'abord la diversité des agricultures, puis l'opposition entre espaces intégrés et espaces en marge, enfin les facteurs de cette fragmentation.",
              solution: [
                "Introduction : les espaces ruraux sont des espaces de faible densité, où dominent les paysages agricoles et naturels ; un peu moins de la moitié de l'humanité y vit. La fragmentation désigne leur division en espaces aux dynamiques divergentes. Problématique : comment et pourquoi les espaces ruraux se différencient-ils de plus en plus ?",
                "I. Des agricultures de plus en plus contrastées : agriculture productiviste et mondialisée (Corn Belt, Mato Grosso) ; plantations exportatrices (huile de palme en Indonésie) ; agriculture familiale vivrière (Sahel, Asie du Sud), qui concerne plus de 500 millions d'exploitations selon la FAO.",
                "II. Des espaces intégrés et des espaces en marge : les espaces périurbains et touristiques profitent de la proximité des villes ; les fronts pionniers et les terres accaparées (projet abandonné de Madagascar en 2008-2009) sont intégrés aux marchés mondiaux au détriment des paysans locaux ; d'autres campagnes se vident (intérieur de l'Espagne, régions rurales du Japon).",
                "III. Les facteurs : la mondialisation sélectionne les espaces les plus compétitifs ; la métropolisation étend l'influence des villes ; l'accessibilité et les politiques publiques (subventions agricoles, réformes agraires) favorisent certains territoires.",
                "Conclusion : les espaces ruraux ne forment plus un ensemble homogène ; leur fragmentation reflète leur intégration inégale à la mondialisation et aux métropoles. On peut se demander si la multifonctionnalité des campagnes offre une alternative.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque exemple au type d'espace rural qu'il illustre.",
            pairs: [
              { left: "Corn Belt (États-Unis)", right: "Agriculture productiviste et mondialisée" },
              { left: "Mato Grosso (Brésil)", right: "Front pionnier" },
              { left: "Village du Sahel cultivant le mil", right: "Agriculture familiale vivrière" },
              { left: "Intérieur de l'Espagne", right: "Espace rural en déprise" },
              { left: "Plantations de palmiers à huile (Indonésie)", right: "Agriculture commerciale d'exportation" },
              { left: "Communes à 20 km d'une métropole", right: "Espace périurbain" },
            ],
          },
          quiz: [
            {
              q: "Quelle part environ de l'humanité vit dans des espaces ruraux ?",
              options: ["Moins de 10 %, car l'urbanisation est presque achevée", "Environ un quart", "Plus des trois quarts", "Un peu moins de la moitié"],
              answer: 3,
              why: "Plus de trois milliards de personnes, soit un peu moins de la moitié de l'humanité, vivent encore dans des espaces ruraux, surtout en Asie et en Afrique.",
            },
            {
              q: "Qu'est-ce que l'agrobusiness ?",
              options: ["Une agriculture biologique de proximité", "L'ensemble des firmes liées à la production, à la transformation et à la vente agricoles", "Une aide européenne aux agriculteurs", "Un syndicat de petits paysans d'Amérique latine qui défend l'agriculture vivrière contre les grandes firmes"],
              answer: 1,
              why: "L'agrobusiness regroupe les firmes qui fournissent les intrants, achètent, transforment et commercialisent les produits agricoles.",
            },
            {
              q: "Qu'appelle-t-on l'accaparement des terres ?",
              options: ["Le retour des citadins à la campagne", "La transformation de terres agricoles en zones commerciales et en lotissements aux portes des villes", "L'achat ou la location de vastes terres à l'étranger par des États ou des firmes", "Le partage des grandes propriétés entre petits paysans"],
              answer: 2,
              why: "Depuis la crise alimentaire de 2007-2008, des États et des entreprises acquièrent de grandes surfaces agricoles à l'étranger, souvent au détriment des paysans locaux.",
            },
            {
              q: "Que réclame le Mouvement des travailleurs ruraux sans terre (MST) au Brésil ?",
              options: ["Une réforme agraire", "La fin de l'agriculture vivrière", "Le défrichement de l'Amazonie", "L'arrivée de grandes firmes étrangères dans les campagnes brésiliennes"],
              answer: 0,
              why: "Le MST réclame une redistribution des terres, très concentrées entre les mains de grands propriétaires.",
            },
            {
              q: "Quel facteur ne fait pas partie des causes de la fragmentation des espaces ruraux ?",
              options: ["La mondialisation des marchés agricoles", "L'influence croissante des métropoles", "La disparition totale de l'agriculture dans le monde", "L'inégale accessibilité des territoires par les routes et les réseaux numériques"],
              answer: 2,
              why: "L'agriculture ne disparaît pas ; la fragmentation résulte de la mondialisation, de la métropolisation, de l'accessibilité et des politiques publiques.",
            },
          ],
          trap: "Assimiler espace rural et espace agricole : beaucoup d'espaces ruraux sont surtout résidentiels, touristiques ou naturels, et beaucoup de ruraux ne sont pas agriculteurs.",
          method: "Pour illustrer la fragmentation, choisissez toujours deux exemples qui s'opposent (un espace intégré, un espace en marge) sur deux continents différents : la comparaison rend la notion évidente pour le correcteur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-non-agricoles',
          title: 'Fonctions non agricoles et conflits d’usage',
          minutes: 30,
          objectives: [
            "Définir la multifonctionnalité des espaces ruraux et identifier leurs fonctions résidentielle, récréative, productive et environnementale.",
            "Expliquer l'affirmation des fonctions non agricoles dans les campagnes.",
            "Analyser un conflit d'usage : ses acteurs, ses enjeux, ses formes et son issue.",
            "Identifier les outils de gestion des conflits d'usage.",
          ],
          course: [
            {
              heading: "Des espaces ruraux multifonctionnels",
              paragraphs: [
                "Les espaces ruraux ne sont plus seulement des espaces de production agricole. Ils remplissent plusieurs fonctions à la fois : c'est la multifonctionnalité. La fonction productive (agriculture, forêt, mais aussi industrie, artisanat, énergie) côtoie une fonction résidentielle (habitants permanents, résidences secondaires), une fonction récréative et touristique (randonnée, tourisme vert, sports de nature) et une fonction environnementale et patrimoniale (protection de la biodiversité, de l'eau, des paysages).",
                "Ces fonctions se combinent différemment selon les espaces : les campagnes périurbaines sont d'abord résidentielles, les littoraux et les montagnes touristiques, certaines régions céréalières restent très agricoles, tandis que les espaces protégés privilégient la conservation de la nature.",
              ],
              box: { label: "Définition", text: "Multifonctionnalité : capacité d'un espace à remplir plusieurs fonctions en même temps : produire (agriculture, énergie), habiter, accueillir les loisirs et le tourisme, protéger l'environnement et le patrimoine." },
            },
            {
              heading: "L'affirmation des fonctions non agricoles",
              paragraphs: [
                "Dans les pays développés, les agriculteurs sont devenus minoritaires parmi les habitants des campagnes. De nouveaux habitants arrivent : périurbains qui travaillent en ville, retraités, néoruraux qui choisissent un autre mode de vie, et, depuis la pandémie de Covid-19, des actifs en télétravail. Leurs revenus (salaires gagnés en ville, pensions de retraite, dépenses des touristes) font vivre commerces et services : c'est l'économie résidentielle, notion développée par l'économiste Laurent Davezies.",
                "Les campagnes accueillent aussi de nouvelles activités productives : parcs éoliens et photovoltaïques, unités de méthanisation, carrières, entrepôts logistiques le long des autoroutes. La fonction environnementale s'affirme avec la création d'espaces protégés, depuis le premier parc national du monde, Yellowstone, aux États-Unis, en 1872. Dans les pays du Sud, le tourisme rural et de nature se développe, comme les safaris dans les parcs du Kenya ou de Tanzanie, mais la création de réserves s'est parfois faite en expulsant ou en limitant l'accès des populations locales.",
              ],
              box: { label: "Définition", text: "Néoruraux : citadins qui s'installent à la campagne par choix de vie. Économie résidentielle : activités qui répondent aux besoins des habitants et des touristes présents sur un territoire, financées par des revenus souvent gagnés ailleurs (salaires urbains, retraites)." },
            },
            {
              heading: "Des conflits d'usage",
              paragraphs: [
                "La cohabitation de ces fonctions provoque des conflits d'usage : des acteurs s'opposent sur l'utilisation d'un même espace ou d'une même ressource. Les nouveaux habitants se plaignent parfois des nuisances agricoles (odeurs, bruits, épandage de pesticides), tandis que les agriculteurs dénoncent l'urbanisation de leurs terres. En France, après plusieurs procès médiatisés, comme celui du coq « Maurice » sur l'île d'Oléron en 2019, une loi de 2021 a protégé le « patrimoine sensoriel des campagnes » (sons et odeurs).",
                "L'eau est un enjeu majeur : dans les Deux-Sèvres, les « méga-bassines », réserves d'eau destinées à l'irrigation, opposent des agriculteurs irrigants à des associations environnementales et à d'autres agriculteurs ; les manifestations de Sainte-Soline, en 2022 et 2023, ont donné lieu à de violents affrontements. Les grands projets d'aménagement suscitent aussi des oppositions : le projet d'aéroport de Notre-Dame-des-Landes, près de Nantes, contesté pendant des décennies, a été abandonné par l'État en 2018. Éoliennes et paysages, loup et pastoralisme dans les Alpes, résidences secondaires et accès au logement des habitants sont d'autres sources de tensions.",
              ],
              box: { label: "Définition", text: "Conflit d'usage : opposition entre des acteurs qui veulent utiliser un même espace ou une même ressource de manière différente et difficilement compatible. Il oppose souvent des intérêts économiques, des modes de vie et des préoccupations environnementales." },
            },
            {
              heading: "Gérer les conflits d'usage",
              paragraphs: [
                "Les conflits d'usage révèlent des visions différentes de l'espace rural : espace de production, cadre de vie, nature à protéger. Ils se règlent par plusieurs moyens : la concertation entre acteurs, le débat public (en France, la Commission nationale du débat public organise des débats sur les grands projets), les décisions de justice, et la planification par les documents d'urbanisme, qui fixent l'usage des sols à l'échelle d'une commune ou d'une intercommunalité.",
                "Pour analyser un conflit d'usage, le géographe identifie l'espace ou la ressource disputée, les acteurs et leurs arguments, les formes de l'opposition (pétitions, recours en justice, manifestations, occupations) et l'issue, qui peut être un compromis, l'abandon du projet ou sa réalisation. Ces conflits ne sont pas seulement négatifs : ils obligent à débattre de l'avenir des territoires.",
              ],
              box: { label: "Règle", text: "Analyser un conflit d'usage : 1. l'espace ou la ressource en jeu ; 2. les acteurs et leurs intérêts ; 3. les arguments de chacun ; 4. les formes du conflit ; 5. son issue et ses effets sur le territoire." },
            },
          ],
          keyPoints: [
            "Multifonctionnalité : les espaces ruraux produisent, logent, accueillent les loisirs et protègent l'environnement.",
            "Les fonctions non agricoles s'affirment : nouveaux habitants, économie résidentielle, tourisme, énergies renouvelables, espaces protégés.",
            "Conflit d'usage : des acteurs s'opposent sur l'usage d'un même espace ou d'une même ressource.",
            "Exemples français : nuisances agricoles (loi de 2021 sur le patrimoine sensoriel), méga-bassines (Sainte-Soline), Notre-Dame-des-Landes (abandon en 2018).",
            "Gestion : concertation, débat public, justice, documents d'urbanisme.",
          ],
          example: {
            statement: "Analysez le conflit d'usage des « méga-bassines » dans les Deux-Sèvres.",
            solution: [
              "L'espace et la ressource : l'eau des nappes souterraines, pompée en hiver pour remplir de grandes réserves à ciel ouvert destinées à l'irrigation en été.",
              "Les acteurs favorables : des agriculteurs irrigants et leurs coopératives, soutenus par des syndicats agricoles et par l'État ; ils veulent sécuriser leurs récoltes face aux sécheresses.",
              "Les acteurs opposés : des associations environnementales, des collectifs citoyens et une partie des agriculteurs ; ils dénoncent l'accaparement d'une ressource commune au profit de quelques exploitations et la poursuite d'un modèle agricole gourmand en eau.",
              "Les formes du conflit : recours en justice, manifestations, dont celles de Sainte-Soline en 2022 et 2023, marquées par de violents affrontements avec les forces de l'ordre.",
              "Conclusion : ce conflit d'usage révèle l'enjeu du partage de l'eau dans un contexte de changement climatique et l'opposition entre deux visions de l'agriculture.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la fonction des espaces ruraux (productive, résidentielle, récréative et touristique, environnementale) illustrée par chacun des exemples suivants : (a) un lotissement de maisons individuelles à 20 km de Rennes ; (b) un parc éolien en Beauce ; (c) un gîte rural et un sentier de randonnée dans le Morvan ; (d) le cœur du parc national des Écrins ; (e) une exploitation laitière en Normandie ; (f) une résidence secondaire en Ardèche.",
              hint: "Un même espace peut avoir plusieurs fonctions, mais chaque exemple en illustre une principalement.",
              solution: [
                "(a) Lotissement près de Rennes : fonction résidentielle (habitants périurbains).",
                "(b) Parc éolien en Beauce : fonction productive non agricole (production d'énergie).",
                "(c) Gîte et randonnée dans le Morvan : fonction récréative et touristique.",
                "(d) Cœur du parc national des Écrins : fonction environnementale (protection de la nature et des paysages).",
                "(e) Exploitation laitière en Normandie : fonction productive agricole.",
                "(f) Résidence secondaire en Ardèche : fonction résidentielle et touristique (habitat temporaire).",
              ],
            },
            {
              level: 2,
              statement: "Situation fictive construite pour l'exercice. Dans une commune rurale de 900 habitants, une entreprise propose d'installer un parc photovoltaïque de 40 hectares sur des terres agricoles louées à un exploitant proche de la retraite. Le conseil municipal y voit des recettes fiscales ; une association de riverains dénonce l'atteinte au paysage ; la chambre d'agriculture s'inquiète de la perte de terres cultivables ; une association environnementale soutient le développement des énergies renouvelables mais demande qu'il se fasse plutôt sur des friches ou des toitures. Présentez ce conflit d'usage en suivant les cinq étapes de la méthode du cours et proposez une issue possible.",
              hint: "Reprenez les cinq étapes : espace en jeu, acteurs, arguments, formes possibles du conflit, issue.",
              solution: [
                "1. L'espace en jeu : 40 hectares de terres agricoles d'une commune rurale.",
                "2. Les acteurs : l'entreprise d'énergie, l'exploitant propriétaire ou locataire, le conseil municipal, l'association de riverains, la chambre d'agriculture, l'association environnementale.",
                "3. Les arguments : pour, la production d'énergie renouvelable, des recettes fiscales et un revenu pour l'exploitant ; contre, la perte de terres nourricières, l'atteinte au paysage et au cadre de vie ; l'association environnementale défend une position intermédiaire (oui au solaire, mais ailleurs).",
                "4. Les formes possibles : réunions publiques, pétitions, avis de la chambre d'agriculture, recours devant le tribunal administratif.",
                "5. Une issue possible : un compromis, par exemple réduire la surface, choisir une parcelle moins fertile ou une friche, ou associer panneaux et pâturage de moutons (agrivoltaïsme), avec une concertation organisée par la commune.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « En quoi l'affirmation des fonctions non agricoles transforme-t-elle les espaces ruraux et provoque-t-elle des conflits d'usage ? ». Rédigez une introduction (définitions, problématique), un développement en deux ou trois parties appuyé sur des exemples localisés, et une conclusion.",
              hint: "Partez des nouvelles fonctions (résidentielle, récréative, productive non agricole, environnementale), montrez leurs effets, puis analysez les conflits et leur gestion.",
              solution: [
                "Introduction : les espaces ruraux, longtemps dominés par l'agriculture, deviennent multifonctionnels. Un conflit d'usage oppose des acteurs sur l'utilisation d'un même espace ou d'une même ressource. Problématique : comment les nouvelles fonctions des campagnes les transforment-elles, et pourquoi suscitent-elles des tensions ?",
                "I. De nouvelles fonctions qui transforment les campagnes : arrivée de périurbains, de retraités, de néoruraux et de télétravailleurs ; économie résidentielle ; tourisme vert ; parcs éoliens et photovoltaïques ; espaces protégés (parcs nationaux depuis Yellowstone en 1872, safaris au Kenya).",
                "II. Des conflits d'usage : nuisances agricoles contestées par de nouveaux habitants (loi de 2021 sur le patrimoine sensoriel des campagnes) ; partage de l'eau (méga-bassines, Sainte-Soline, 2022-2023) ; grands projets (Notre-Dame-des-Landes, abandonné en 2018) ; éoliennes et paysages ; résidences secondaires et logement des habitants ; populations locales écartées de certaines réserves au Sud.",
                "III. Une gestion difficile : concertation, débat public, justice, documents d'urbanisme ; compromis (agrivoltaïsme) ou abandon de projets.",
                "Conclusion : les fonctions non agricoles redonnent de la vitalité à de nombreuses campagnes, mais elles en font des espaces disputés ; les conflits d'usage traduisent des visions concurrentes de l'avenir des territoires ruraux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Fonctions des espaces ruraux et conflits d'usage.",
            statements: [
              { text: "Dans les pays développés, la plupart des habitants des campagnes sont agriculteurs.", true: false, why: "Les agriculteurs sont devenus minoritaires ; les campagnes accueillent surtout des actifs d'autres secteurs et des retraités." },
              { text: "Un conflit d'usage oppose des acteurs sur l'utilisation d'un même espace ou d'une même ressource.", true: true, why: "C'est la définition : par exemple l'eau, disputée entre irrigation et protection des milieux." },
              { text: "Le premier parc national du monde est Yellowstone, créé en 1872.", true: true, why: "Il est créé aux États-Unis en 1872 ; la France crée son premier parc national (la Vanoise) en 1963." },
              { text: "Le projet d'aéroport de Notre-Dame-des-Landes a été réalisé en 2018.", true: false, why: "L'État a abandonné le projet en janvier 2018 après des décennies de contestation." },
              { text: "Les énergies renouvelables ne suscitent jamais de conflits dans les campagnes.", true: false, why: "Éoliennes et parcs solaires sont parfois contestés au nom du paysage ou de la préservation des terres agricoles." },
              { text: "L'économie résidentielle repose sur les revenus des habitants et des touristes présents sur un territoire.", true: true, why: "Salaires gagnés en ville, pensions et dépenses touristiques font vivre commerces et services locaux." },
              { text: "Les néoruraux sont des agriculteurs qui partent vivre en ville.", true: false, why: "Ce sont au contraire des citadins qui s'installent à la campagne par choix de vie." },
            ],
          },
          quiz: [
            {
              q: "Que désigne la multifonctionnalité des espaces ruraux ?",
              options: ["La diversité des cultures sur une même exploitation", "Le fait de remplir plusieurs fonctions à la fois", "L'obligation pour les agriculteurs d'avoir un second métier", "Le regroupement de plusieurs communes rurales en une seule intercommunalité"],
              answer: 1,
              why: "Produire, habiter, accueillir les loisirs et protéger l'environnement : les espaces ruraux remplissent plusieurs fonctions en même temps.",
            },
            {
              q: "Qui sont les néoruraux ?",
              options: ["Des citadins installés à la campagne par choix de vie", "Des agriculteurs qui adoptent de nouvelles techniques", "Des touristes de passage", "Les jeunes ruraux qui partent étudier dans les grandes villes universitaires"],
              answer: 0,
              why: "Les néoruraux sont d'anciens citadins qui choisissent de vivre à la campagne, souvent pour un autre mode de vie.",
            },
            {
              q: "Quelle ressource est au cœur du conflit des « méga-bassines » ?",
              options: ["Le bois", "Le sable", "Le vent", "L'eau"],
              answer: 3,
              why: "Les réserves stockent de l'eau pompée en hiver pour l'irrigation estivale, ce qui oppose irrigants et défenseurs d'un partage de la ressource.",
            },
            {
              q: "Quelle loi française de 2021 protège les sons et les odeurs des campagnes ?",
              options: ["La loi Climat et résilience", "La loi NOTRe", "La loi sur le patrimoine sensoriel des campagnes", "La loi montagne sur le développement et la protection des massifs"],
              answer: 2,
              why: "Adoptée après des procès médiatisés (le coq « Maurice » en 2019), elle reconnaît le « patrimoine sensoriel des campagnes ».",
            },
            {
              q: "Quelle est l'issue du projet d'aéroport de Notre-Dame-des-Landes ?",
              options: ["L'aéroport a ouvert en 2020", "Le projet a été abandonné par l'État en 2018", "Il est en construction", "Il a été transformé en parc national après la décision du Conseil d'État"],
              answer: 1,
              why: "Après des décennies de contestation et l'occupation du site, le gouvernement abandonne le projet en janvier 2018.",
            },
          ],
          trap: "Présenter un conflit d'usage comme une simple opposition entre « pour » et « contre » : il faut identifier précisément les acteurs (souvent plus de deux), leurs intérêts et leurs arguments, et montrer les positions intermédiaires.",
          method: "Préparez une fiche-type pour chaque conflit d'usage étudié (lieu, ressource, acteurs, arguments, formes, issue) : cinq lignes suffisent et fournissent un exemple développé réutilisable dans toute réponse construite.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'france-espaces-ruraux',
          title: 'La France : des espaces ruraux multifonctionnels',
          minutes: 35,
          objectives: [
            "Caractériser les espaces ruraux français à partir de la définition de l'INSEE et de leurs dynamiques démographiques.",
            "Distinguer les différents types de campagnes françaises et leurs fonctions.",
            "Expliquer le rôle des politiques européennes (PAC, LEADER) et nationales dans les espaces ruraux.",
            "Identifier des initiatives locales qui valorisent les campagnes.",
          ],
          course: [
            {
              heading: "Des espaces ruraux qui couvrent la plus grande partie du territoire",
              paragraphs: [
                "Depuis 2020, l'INSEE définit les communes rurales à partir de leur densité de population : sont rurales les communes peu denses ou très peu denses. Selon cette définition, les espaces ruraux rassemblent 88 % des communes et environ un tiers de la population française, soit plus de 20 millions d'habitants. L'INSEE distingue les communes rurales selon l'influence qu'exercent sur elles les villes : certaines sont sous forte influence d'un pôle d'emploi, d'autres sous faible influence, d'autres encore sont autonomes.",
                "Après un siècle d'exode rural, de nombreuses campagnes regagnent des habitants depuis les années 1970-1990, grâce à l'installation de périurbains, de retraités et de néoruraux : on parle de renouveau rural. Mais ce renouveau est inégal. Les campagnes proches des villes, des littoraux et du Sud gagnent des habitants, tandis que les espaces les plus isolés, notamment le long de la « diagonale des faibles densités », qui va des Ardennes aux Pyrénées en passant par le Massif central, vieillissent et perdent des services (commerces, écoles, médecins).",
              ],
              box: { label: "Définition", text: "Commune rurale (INSEE, depuis 2020) : commune peu dense ou très peu dense selon la grille communale de densité. Diagonale des faibles densités : bande de territoires peu peuplés qui traverse la France du nord-est au sud-ouest." },
            },
            {
              heading: "Des campagnes multifonctionnelles et contrastées",
              paragraphs: [
                "Les campagnes périurbaines, autour des métropoles et des grandes villes, sont surtout résidentielles : leurs habitants travaillent en ville et la pression foncière y est forte. Les campagnes agricoles et industrielles restent très productives : grandes cultures du Bassin parisien, élevage et agroalimentaire en Bretagne, vignobles de Champagne, du Bordelais ou de Bourgogne. Les campagnes attractives des littoraux, des montagnes et du Sud combinent tourisme, résidences secondaires et installation de retraités. Enfin, des campagnes fragiles et peu denses cumulent vieillissement, faibles revenus et éloignement des services.",
                "L'agriculture reste une activité essentielle par l'espace qu'elle occupe, la moitié environ du territoire, et par ses productions, mais elle n'emploie plus qu'une petite minorité des actifs. Le recensement agricole de 2020 compte environ 390 000 exploitations, soit environ 100 000 de moins qu'en 2010 ; elles sont plus grandes et leurs exploitants sont de plus en plus âgés, ce qui pose la question du renouvellement des générations.",
              ],
              box: { label: "À retenir", text: "Quatre grands types de campagnes françaises : périurbaines (résidentielles), agricoles et productives, attractives (tourisme, retraités, résidences secondaires), fragiles et peu denses (vieillissement, services qui disparaissent)." },
            },
            {
              heading: "Le poids des politiques européennes",
              paragraphs: [
                "La politique agricole commune (PAC), mise en place en 1962, avait pour but d'augmenter la productivité, d'assurer la sécurité alimentaire et de garantir un revenu aux agriculteurs, grâce à des prix garantis. Elle a contribué à moderniser l'agriculture française, mais aussi à intensifier la production. Réformée à plusieurs reprises, elle repose depuis 1999 sur deux piliers : le premier verse des aides directes aux agriculteurs, le second finance le développement rural (installation des jeunes, environnement, diversification, services) grâce au Fonds européen agricole pour le développement rural (FEADER). La France en est le premier bénéficiaire, avec environ 9 milliards d'euros par an.",
                "La PAC 2023-2027 conditionne davantage les aides à des pratiques favorables à l'environnement (les éco-régimes). L'Union européenne soutient aussi les projets locaux par le programme LEADER, lancé en 1991 : des groupes d'action locale, associant élus, associations et entreprises, élaborent eux-mêmes une stratégie de développement pour leur territoire. Le réseau Natura 2000 protège enfin des sites naturels remarquables à l'échelle européenne.",
              ],
              box: { label: "Définition", text: "PAC : politique agricole commune de l'Union européenne, créée en 1962. Premier pilier : aides directes et soutien des marchés. Second pilier : développement rural. LEADER : programme européen qui finance des projets conçus par les acteurs locaux eux-mêmes." },
            },
            {
              heading: "Politiques nationales et initiatives locales",
              paragraphs: [
                "L'État protège et valorise les espaces ruraux. Depuis 1963 (création du parc de la Vanoise), la France a créé onze parcs nationaux, dont le cœur est très protégé. Depuis 1967, les parcs naturels régionaux, créés à l'initiative des régions et des communes, concilient protection du patrimoine et développement économique ; on en compte aujourd'hui plus de cinquante. L'État a aussi lancé l'Agenda rural (2019), le plan France Ruralités (2023), le réseau des espaces France Services, qui rassemblent en un même lieu plusieurs services publics, et le programme Petites villes de demain, pour revitaliser les bourgs-centres.",
                "Les initiatives locales se multiplient : circuits courts et vente directe, associations pour le maintien d'une agriculture paysanne (AMAP), marchés de producteurs, tiers-lieux et espaces de télétravail, coopératives citoyennes d'énergie renouvelable, valorisation des produits sous signe de qualité (AOP), fêtes et festivals qui attirent visiteurs et habitants. Ces initiatives, souvent soutenues par les intercommunalités, les régions et les fonds européens, montrent que les campagnes sont des espaces de projets.",
              ],
              box: { label: "Repère", text: "1962 : création de la PAC. 1963 : premier parc national (Vanoise). 1967 : parcs naturels régionaux. 1991 : programme LEADER. 1999 : second pilier de la PAC. 2019 : Agenda rural. 2023 : plan France Ruralités." },
            },
          ],
          keyPoints: [
            "Selon l'INSEE (2020), les communes rurales sont les communes peu denses ou très peu denses : 88 % des communes, environ un tiers de la population.",
            "Renouveau rural depuis les années 1970-1990, mais inégal : croissance près des villes, des littoraux et au Sud, déclin le long de la diagonale des faibles densités.",
            "Quatre types de campagnes : périurbaines, agricoles et productives, attractives, fragiles.",
            "La PAC (1962), deux piliers depuis 1999, éco-régimes depuis 2023 ; LEADER (1991) soutient les projets locaux.",
            "État : parcs nationaux (11) et régionaux, Agenda rural, France Ruralités, France Services ; initiatives locales : circuits courts, tiers-lieux, énergies citoyennes.",
          ],
          example: {
            statement: "Montrez que les espaces ruraux français sont multifonctionnels en vous appuyant sur trois types de campagnes différents.",
            solution: [
              "Définir : un espace rural multifonctionnel remplit à la fois des fonctions productive, résidentielle, récréative et environnementale.",
              "Une campagne périurbaine, par exemple autour de Rennes : fonction résidentielle dominante (lotissements de périurbains qui travaillent en ville), mais l'agriculture s'y maintient et vend parfois en circuits courts.",
              "Une campagne agricole, comme la Beauce : fonction productive dominante (céréales), à laquelle s'ajoutent des parcs éoliens, autre fonction productive non agricole.",
              "Une campagne attractive de montagne, comme les Alpes du Nord : tourisme d'hiver et d'été, résidences secondaires, protection de la nature dans le parc national de la Vanoise, élevage et fromages sous AOP.",
              "Conclure : chaque campagne combine plusieurs fonctions, dans des proportions différentes ; cette multifonctionnalité est encouragée par les politiques européennes et nationales, mais elle peut susciter des conflits d'usage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez brièvement : (a) Quelle part des communes et quelle part de la population les espaces ruraux représentent-ils selon l'INSEE ? (b) En quelle année la PAC est-elle créée ? (c) Que finance le second pilier de la PAC ? (d) Quelle est la différence entre un parc national et un parc naturel régional ? (e) Qu'est-ce que le programme LEADER ?",
              hint: "Toutes les réponses figurent dans le cours ; pour la question (d), pensez à l'objectif principal de chaque type de parc.",
              solution: [
                "(a) Les espaces ruraux rassemblent 88 % des communes et environ un tiers de la population française.",
                "(b) La PAC est créée en 1962.",
                "(c) Le second pilier finance le développement rural : installation des jeunes agriculteurs, mesures environnementales, diversification des activités, services en milieu rural.",
                "(d) Un parc national, créé par l'État, protège strictement la nature dans sa zone de cœur (onze parcs, depuis la Vanoise en 1963) ; un parc naturel régional, créé à l'initiative des régions et des communes depuis 1967, cherche à concilier protection du patrimoine et développement économique, sans réglementation aussi stricte.",
                "(e) LEADER est un programme européen lancé en 1991 qui finance des projets de développement rural conçus par des groupes d'action locale (élus, associations, entreprises).",
              ],
            },
            {
              level: 2,
              statement: "Données construites pour l'exercice à partir d'ordres de grandeur réels. Le recensement agricole compte environ 490 000 exploitations en 2010 et environ 390 000 en 2020 ; la surface agricole utilisée est restée à peu près stable, autour de 27 millions d'hectares. (1) Calculez le taux d'évolution du nombre d'exploitations. (2) Calculez la surface moyenne d'une exploitation en 2010 et en 2020. (3) Interprétez ces résultats et indiquez un enjeu qu'ils soulèvent pour les espaces ruraux.",
              hint: "Taux d'évolution = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Surface moyenne = surface totale ÷ nombre d'exploitations ; arrondissez à l'hectare.",
              solution: [
                "(1) (390 000 - 490 000) ÷ 490 000 × 100 = -100 000 ÷ 490 000 × 100 ≈ -20,4 % : le nombre d'exploitations a reculé d'environ un cinquième en dix ans.",
                "(2) 2010 : 27 000 000 ÷ 490 000 ≈ 55 hectares. 2020 : 27 000 000 ÷ 390 000 ≈ 69 hectares.",
                "(3) Les exploitations sont moins nombreuses mais plus grandes : les terres libérées par les départs à la retraite sont reprises par des exploitations voisines qui s'agrandissent. Enjeux : le renouvellement des générations (beaucoup d'exploitants approchent de la retraite), le maintien d'une population agricole dans les campagnes et l'installation de jeunes, que soutient le second pilier de la PAC.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Les espaces ruraux français : des espaces multifonctionnels entre initiatives locales et politiques européennes ». Rédigez une introduction (définitions, problématique), un développement en trois parties appuyé sur des exemples localisés, et une conclusion.",
              hint: "Une partie peut montrer la diversité et la multifonctionnalité des campagnes, une autre le rôle de l'Union européenne et de l'État, une dernière les initiatives des acteurs locaux.",
              solution: [
                "Introduction : selon l'INSEE, les espaces ruraux (communes peu denses ou très peu denses) rassemblent 88 % des communes et un tiers des Français. Ils sont multifonctionnels : ils produisent, logent, accueillent les loisirs et protègent l'environnement. Problématique : comment les politiques européennes et les initiatives locales accompagnent-elles les transformations de ces espaces ?",
                "I. Des campagnes multifonctionnelles et contrastées : campagnes périurbaines résidentielles (autour de Rennes ou de Toulouse), campagnes agricoles productives (Beauce, Bretagne), campagnes attractives (littoraux, Alpes), campagnes fragiles de la diagonale des faibles densités ; recul du nombre d'exploitations (environ 390 000 en 2020).",
                "II. Des politiques européennes et nationales décisives : la PAC (1962) a modernisé l'agriculture ; depuis 1999, son second pilier finance le développement rural et, depuis 2023, les éco-régimes encouragent des pratiques favorables à l'environnement ; LEADER (1991) et Natura 2000 complètent ces outils ; l'État agit avec les parcs nationaux et régionaux, l'Agenda rural (2019), France Ruralités (2023) et France Services.",
                "III. Des initiatives locales : circuits courts et AMAP, marchés de producteurs, tiers-lieux, coopératives citoyennes d'énergie, valorisation des AOP, projets portés par des groupes d'action locale LEADER ou par les parcs naturels régionaux.",
                "Conclusion : les espaces ruraux français sont des espaces de projets, où politiques européennes, nationales et initiatives locales se combinent ; mais leurs effets sont inégaux et la multifonctionnalité peut aussi provoquer des conflits d'usage.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes des politiques en faveur des espaces ruraux.",
            items: [
              "Création de la politique agricole commune",
              "Création des parcs naturels régionaux",
              "Lancement du programme européen LEADER",
              "Création du second pilier de la PAC, consacré au développement rural",
              "Adoption de l'Agenda rural en France",
              "Lancement du plan France Ruralités",
            ],
          },
          quiz: [
            {
              q: "Selon l'INSEE, quelle part des communes françaises est rurale ?",
              options: ["Environ 25 %", "Environ 50 %", "88 %", "Toutes les communes de moins de 10 000 habitants, soit 97 %"],
              answer: 2,
              why: "Avec la grille de densité, 88 % des communes sont rurales ; elles rassemblent environ un tiers de la population.",
            },
            {
              q: "Que finance principalement le second pilier de la PAC ?",
              options: ["Les prix garantis des céréales", "Les exportations agricoles vers l'Afrique", "Les autoroutes européennes", "Le développement rural"],
              answer: 3,
              why: "Depuis 1999, le second pilier, financé par le FEADER, soutient l'installation des jeunes, l'environnement, la diversification et les services ruraux.",
            },
            {
              q: "Combien la France compte-t-elle de parcs nationaux ?",
              options: ["11", "3", "58", "Plus d'une centaine, répartis dans chaque département"],
              answer: 0,
              why: "La France compte onze parcs nationaux, du premier, la Vanoise (1963), au plus récent, le parc national de forêts (2019).",
            },
            {
              q: "Qu'est-ce que le programme européen LEADER ?",
              options: ["Une aide aux grandes exploitations céréalières", "Un financement de projets conçus par des acteurs locaux", "Un label de qualité pour les fromages", "Un réseau de lignes à grande vitesse reliant les campagnes aux métropoles"],
              answer: 1,
              why: "Lancé en 1991, LEADER soutient des stratégies de développement élaborées par des groupes d'action locale associant élus, associations et entreprises.",
            },
            {
              q: "Quelle évolution le recensement agricole de 2020 met-il en évidence ?",
              options: ["Une forte hausse du nombre d'exploitations", "La disparition de l'élevage dans la plupart des régions françaises", "Le rajeunissement des agriculteurs", "Des exploitations moins nombreuses mais plus grandes"],
              answer: 3,
              why: "Environ 390 000 exploitations en 2020 contre 490 000 en 2010 : les exploitations s'agrandissent, et leurs exploitants vieillissent.",
            },
          ],
          trap: "Opposer de façon caricaturale des campagnes « désertes » et des villes dynamiques : beaucoup d'espaces ruraux gagnent des habitants, et la situation dépend surtout de la proximité des villes, des littoraux et des services.",
          method: "Pour réviser ce chapitre, retenez trois échelles d'acteurs avec un exemple chacune : Union européenne (PAC, LEADER), État (parcs nationaux, France Ruralités), acteurs locaux (AMAP, parcs naturels régionaux). Une réponse qui croise les échelles est toujours valorisée.",
        },
      ],
    },
    /* ==================================================================== */
    /* GÉOGRAPHIE, THÈME CONCLUSIF · LA CHINE : DES RECOMPOSITIONS SPATIALES */
    /* ==================================================================== */
    {
      id: 'chine',
      lessons: [

        /* ------------------------------------------------------------------ */
        {
          id: 'chine-developpement',
          title: 'Développement et inégalités en Chine',
          minutes: 35,
          objectives: [
            "Expliquer les étapes et les facteurs du développement de la Chine depuis 1978.",
            "Identifier les inégalités sociales et spatiales qui accompagnent ce développement (littoral et intérieur, villes et campagnes, hukou).",
            "Montrer que les ressources et les environnements chinois sont sous pression.",
            "Analyser les politiques mises en œuvre par l'État chinois pour réduire les déséquilibres.",
          ],
          course: [
            {
              heading: "Un développement spectaculaire depuis 1978",
              paragraphs: [
                "Proclamée en 1949 par Mao Zedong, la République populaire de Chine adopte une économie collectivisée et planifiée, marquée par des échecs dramatiques, comme le Grand Bond en avant (1958-1960), qui provoque une famine meurtrière. Après la mort de Mao (1976), Deng Xiaoping lance à partir de 1978 une politique de réformes et d'ouverture : les terres sont confiées aux familles paysannes, qui peuvent vendre une partie de leur production, les entreprises privées sont autorisées et le pays s'ouvre aux capitaux étrangers. En 1980, les premières zones économiques spéciales (ZES) sont créées sur le littoral, dont Shenzhen, face à Hong Kong ; en 1984, quatorze villes côtières sont ouvertes aux investissements étrangers.",
                "Le Parti communiste conserve le monopole du pouvoir et parle d'« économie socialiste de marché ». La croissance est très rapide, souvent proche de 10 % par an entre 1980 et 2010. En 2001, la Chine entre dans l'Organisation mondiale du commerce (OMC) ; elle devient « l'atelier du monde » et, en 2010, la deuxième économie mondiale, devant le Japon. Avec environ 1,4 milliard d'habitants, elle a été dépassée par l'Inde en 2023 comme pays le plus peuplé, et sa population diminue depuis 2022.",
                "Ce développement a profondément amélioré les conditions de vie : selon la Banque mondiale, près de 800 millions de Chinois sont sortis de l'extrême pauvreté depuis 1980. L'espérance de vie, le niveau d'éducation et l'équipement des ménages ont fortement progressé. La Chine ne se contente plus d'assembler : elle innove dans le numérique, les télécommunications, les batteries et les véhicules électriques.",
              ],
              box: { label: "Repère", text: "1949 : proclamation de la République populaire. 1958 : système du hukou et Grand Bond en avant. 1978 : début des réformes de Deng Xiaoping. 1980 : premières ZES. 2001 : entrée dans l'OMC. 2010 : deuxième économie mondiale. 2013 : lancement des nouvelles routes de la soie." },
            },
            {
              heading: "Des inégalités sociales et spatiales fortes",
              paragraphs: [
                "Le développement est très inégal dans l'espace. Les provinces et les grandes villes du littoral (Pékin, Shanghai, Guangdong, Jiangsu, Zhejiang) concentrent la richesse, les industries exportatrices et les investissements étrangers ; les provinces de l'intérieur et de l'Ouest (Gansu, Guizhou, Tibet) sont nettement plus pauvres : le PIB par habitant y est plusieurs fois inférieur à celui de Pékin ou de Shanghai. Les revenus moyens des citadins restent plus de deux fois supérieurs à ceux des ruraux.",
                "Le système du hukou, mis en place en 1958, enregistre chaque habitant dans son lieu d'origine, rural ou urbain, et conditionne l'accès aux droits sociaux (école, santé, logement). Environ 300 millions de travailleurs migrants (mingong), venus des campagnes, travaillent dans les usines et sur les chantiers des villes sans bénéficier des mêmes droits que les citadins ; beaucoup laissent leurs enfants au village, à la garde des grands-parents. Le hukou a été assoupli à partir de 2014, surtout dans les petites et moyennes villes.",
                "Les régions peuplées de minorités, comme le Tibet et le Xinjiang, connaissent un développement encadré par Pékin et une étroite surveillance politique ; en 2022, le Haut-Commissariat des Nations unies aux droits de l'homme a dénoncé de graves violations des droits des Ouïghours au Xinjiang.",
              ],
              box: { label: "Définition", text: "Hukou : livret d'enregistrement des ménages, créé en 1958, qui rattache chaque Chinois à son lieu d'origine et conditionne ses droits sociaux. Mingong : travailleurs migrants d'origine rurale employés dans les villes, souvent sans hukou urbain." },
            },
            {
              heading: "Des ressources et des environnements sous pression",
              paragraphs: [
                "La croissance chinoise a exigé des ressources considérables. Le charbon fournit encore plus de la moitié de l'énergie consommée, et la Chine est devenue au milieu des années 2000 le premier émetteur mondial de gaz à effet de serre. La pollution de l'air a atteint des niveaux extrêmes dans les grandes villes du Nord, comme lors des épisodes de smog de l'hiver 2013 à Pékin ; les sols et les rivières sont souvent contaminés par l'industrie et l'agriculture intensive.",
                "L'eau est inégalement répartie : le Nord, où se trouvent Pékin et les grandes plaines agricoles, en manque, alors que le Sud en dispose davantage. Pour y remédier, l'État a lancé le projet de transfert d'eau du Sud vers le Nord, dont les premières lignes fonctionnent depuis 2013-2014. Le barrage des Trois-Gorges, sur le Yangzi, achevé en 2006, abrite la plus puissante centrale hydroélectrique du monde, mais sa construction a déplacé plus d'un million d'habitants.",
                "La Chine dépend aussi de l'étranger pour une partie de son pétrole, de ses minerais et de son alimentation (soja importé du Brésil et des États-Unis). Les nouvelles routes de la soie, lancées en 2013, financent ports, voies ferrées et routes dans de nombreux pays pour sécuriser ses approvisionnements et ses débouchés. Dans le même temps, le pays est devenu le premier producteur mondial d'énergie solaire et éolienne et s'est engagé en 2020 à atteindre la neutralité carbone avant 2060.",
              ],
            },
            {
              heading: "Les politiques de rééquilibrage",
              paragraphs: [
                "Conscient des risques sociaux et politiques des inégalités, l'État chinois mène des politiques de rééquilibrage. En 2000, il lance le programme de développement de l'Ouest (Xibu da kaifa), qui finance des infrastructures (routes, voies ferrées, gazoducs) et encourage les industries à s'installer à l'intérieur ; la ville de Chongqing, sur le Yangzi, en est devenue un pôle majeur. Les campagnes ont bénéficié de la suppression de l'impôt agricole (2006) et de programmes de lutte contre la pauvreté : en 2021, le gouvernement a annoncé la fin de l'extrême pauvreté selon le seuil national.",
                "Depuis 2021, le président Xi Jinping met en avant l'objectif de « prospérité commune ». Le réseau de lignes à grande vitesse, le plus long du monde avec plus de 40 000 kilomètres, relie désormais la plupart des grandes villes de l'intérieur au littoral. Mais les écarts restent importants, et le ralentissement de la croissance, la crise de l'immobilier et le vieillissement de la population rendent ces politiques plus difficiles.",
              ],
              box: { label: "À retenir", text: "Le développement chinois est spectaculaire mais inégal : littoral contre intérieur, villes contre campagnes, citadins contre migrants sans hukou urbain. L'État tente de rééquilibrer (développement de l'Ouest, lutte contre la pauvreté, grande vitesse) sans effacer les écarts." },
            },
          ],
          keyPoints: [
            "Depuis 1978, les réformes de Deng Xiaoping (décollectivisation, ouverture, ZES en 1980) font de la Chine la deuxième économie mondiale (2010).",
            "Près de 800 millions de Chinois sont sortis de l'extrême pauvreté depuis 1980 (Banque mondiale).",
            "Fortes inégalités : littoral riche, intérieur et Ouest plus pauvres ; revenus urbains plus de deux fois supérieurs aux revenus ruraux.",
            "Le hukou (1958) prive environ 300 millions de travailleurs migrants (mingong) des droits des citadins.",
            "Pression sur les ressources : charbon, pollution, manque d'eau au Nord (transfert Sud-Nord), Trois-Gorges, importations.",
            "Rééquilibrage : développement de l'Ouest (2000), lutte contre la pauvreté, grande vitesse, « prospérité commune ».",
          ],
          example: {
            statement: "Expliquez pourquoi le développement de la Chine a d'abord profité aux régions littorales.",
            solution: [
              "Rappeler le point de départ : en 1978, Deng Xiaoping lance la politique de réformes et d'ouverture.",
              "Premier facteur, les choix de l'État : les premières ZES (1980), comme Shenzhen, puis les quatorze villes côtières ouvertes (1984) sont situées sur le littoral, où l'État concentre les avantages offerts aux investisseurs étrangers.",
              "Deuxième facteur, la proximité des marchés et des capitaux : le littoral est tourné vers l'exportation par la mer et proche de Hong Kong, de Taïwan, du Japon et de la Corée du Sud, d'où viennent les premiers investissements.",
              "Troisième facteur, la main-d'œuvre : des centaines de millions de ruraux de l'intérieur migrent vers les usines côtières (mingong).",
              "Conclure : le littoral devient « l'atelier du monde » et concentre la richesse, ce qui creuse l'écart avec l'intérieur et oblige l'État à lancer, à partir de 2000, le développement de l'Ouest.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase les termes suivants et associez à chacun une date ou un exemple : (a) zone économique spéciale ; (b) hukou ; (c) mingong ; (d) « atelier du monde » ; (e) développement de l'Ouest.",
              hint: "Appuyez-vous sur les encadrés et sur le repère chronologique du cours.",
              solution: [
                "(a) Zone économique spéciale : espace où l'État offre des avantages fiscaux et douaniers aux investisseurs étrangers ; exemple : Shenzhen, créée en 1980.",
                "(b) Hukou : livret d'enregistrement qui rattache chaque Chinois à son lieu d'origine et conditionne ses droits sociaux ; créé en 1958, assoupli à partir de 2014.",
                "(c) Mingong : travailleur migrant d'origine rurale employé en ville sans hukou urbain ; ils sont environ 300 millions.",
                "(d) « Atelier du monde » : expression qui désigne la Chine comme premier lieu de fabrication de produits manufacturés exportés dans le monde, surtout après son entrée dans l'OMC en 2001.",
                "(e) Développement de l'Ouest : programme lancé par l'État en 2000 pour réduire l'écart entre le littoral et l'intérieur par des infrastructures et des investissements ; exemple : l'essor de Chongqing.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives construites pour l'exercice, proches des ordres de grandeur réels. Revenu disponible annuel moyen par habitant : en ville, 21 000 yuans en 2010 et 50 000 yuans en 2022 ; à la campagne, 6 000 yuans en 2010 et 20 000 yuans en 2022. (1) Calculez le rapport entre revenu urbain et revenu rural en 2010 et en 2022. (2) Calculez par combien chaque revenu a été multiplié. (3) Les inégalités entre villes et campagnes se sont-elles réduites ? Nuancez votre réponse.",
              hint: "Rapport = revenu urbain ÷ revenu rural. Coefficient multiplicateur = valeur d'arrivée ÷ valeur de départ. Distinguez l'écart relatif (le rapport) et l'écart absolu (la différence en yuans).",
              solution: [
                "(1) 2010 : 21 000 ÷ 6 000 = 3,5. 2022 : 50 000 ÷ 20 000 = 2,5. Un citadin gagnait en moyenne 3,5 fois plus qu'un rural en 2010, et 2,5 fois plus en 2022.",
                "(2) Revenu urbain : 50 000 ÷ 21 000 ≈ 2,4. Revenu rural : 20 000 ÷ 6 000 ≈ 3,3. Le revenu rural a augmenté plus vite que le revenu urbain.",
                "(3) L'écart relatif s'est réduit (le rapport passe de 3,5 à 2,5), grâce à la croissance des revenus ruraux (migrations, aides, lutte contre la pauvreté). Mais l'écart absolu a augmenté : 21 000 - 6 000 = 15 000 yuans en 2010, 50 000 - 20 000 = 30 000 yuans en 2022. Les inégalités entre villes et campagnes restent donc fortes.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « La Chine : un développement spectaculaire mais inégal ? ». Rédigez une introduction (contexte, problématique), un développement en deux ou trois parties appuyé sur des données et des exemples localisés, et une conclusion.",
              hint: "Montrez d'abord l'ampleur du développement, puis ses inégalités (sociales et spatiales) et ses coûts environnementaux, enfin les réponses de l'État et leurs limites.",
              solution: [
                "Introduction : depuis 1978, la Chine de Deng Xiaoping a choisi l'ouverture et les réformes ; elle est devenue la deuxième économie mondiale en 2010. Problématique : ce développement a-t-il profité de manière égale à tous les territoires et à toute la population ?",
                "I. Un développement spectaculaire : croissance proche de 10 % par an pendant trois décennies, ZES (Shenzhen, 1980), entrée dans l'OMC (2001), « atelier du monde » devenu puissance d'innovation ; près de 800 millions de personnes sorties de l'extrême pauvreté selon la Banque mondiale.",
                "II. Des inégalités et des coûts : opposition entre le littoral riche (Shanghai, Guangdong) et l'intérieur plus pauvre (Gansu, Guizhou) ; revenus urbains plus de deux fois supérieurs aux revenus ruraux ; environ 300 millions de mingong privés des droits des citadins par le hukou ; pollution, dépendance au charbon, manque d'eau au Nord.",
                "III. Des politiques de rééquilibrage aux résultats partiels : développement de l'Ouest (2000), suppression de l'impôt agricole (2006), assouplissement du hukou (2014), fin annoncée de l'extrême pauvreté (2021), grande vitesse, transfert d'eau Sud-Nord, engagement de neutralité carbone avant 2060 ; mais les écarts persistent et le ralentissement économique complique ces politiques.",
                "Conclusion : le développement chinois est l'un des plus rapides de l'histoire, mais il est profondément inégal ; la réduction des inégalités et la transition écologique sont désormais des enjeux majeurs pour le pouvoir chinois.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire économique de la Chine dans l'ordre chronologique.",
            items: [
              "Proclamation de la République populaire de Chine",
              "Mise en place du système du hukou",
              "Début des réformes de Deng Xiaoping",
              "Création des premières zones économiques spéciales",
              "Entrée de la Chine dans l'OMC",
              "La Chine devient la deuxième économie mondiale",
              "Lancement des nouvelles routes de la soie",
            ],
          },
          quiz: [
            {
              q: "Qui lance la politique de réformes et d'ouverture en 1978 ?",
              options: ["Mao Zedong", "Deng Xiaoping", "Xi Jinping", "Sun Yat-sen, le fondateur de la République de Chine"],
              answer: 1,
              why: "Deng Xiaoping, au pouvoir après la mort de Mao, lance les réformes en 1978 : décollectivisation, entreprises privées, ouverture aux capitaux étrangers.",
            },
            {
              q: "En quelle année la Chine entre-t-elle dans l'OMC ?",
              options: ["1978", "1990", "2001", "2013, en même temps que le lancement des routes de la soie"],
              answer: 2,
              why: "L'entrée dans l'Organisation mondiale du commerce, en 2001, accélère les exportations chinoises.",
            },
            {
              q: "Que conditionne le hukou ?",
              options: ["L'accès aux droits sociaux selon le lieu d'origine", "Le droit de voter aux élections nationales", "L'autorisation de créer une entreprise", "Le droit de voyager à l'étranger pour les étudiants et les chercheurs"],
              answer: 0,
              why: "Le hukou rattache chaque habitant à son lieu d'origine : un migrant rural en ville n'a pas les mêmes droits à l'école, à la santé ou au logement.",
            },
            {
              q: "Quel est le principal objectif du programme de développement de l'Ouest lancé en 2000 ?",
              options: ["Attirer les touristes au Tibet", "Déplacer la capitale à Chongqing", "Fermer les usines du littoral pour réduire la pollution des grandes villes côtières", "Réduire l'écart entre le littoral et l'intérieur"],
              answer: 3,
              why: "Le programme finance des infrastructures et encourage l'installation d'activités dans les provinces intérieures, plus pauvres.",
            },
            {
              q: "Pourquoi l'État chinois a-t-il lancé le transfert d'eau du Sud vers le Nord ?",
              options: ["Pour exporter de l'eau vers la Russie", "Parce que le Nord, où vit une grande partie de la population, manque d'eau", "Pour remplir le barrage des Trois-Gorges", "Pour irriguer les rizières du Sud, où les pluies de mousson sont devenues trop rares"],
              answer: 1,
              why: "Le Nord concentre villes et grandes plaines agricoles mais dispose de peu de ressources en eau, contrairement au Sud.",
            },
          ],
          trap: "Présenter la Chine comme un pays uniformément riche ou uniformément pauvre : il faut toujours distinguer le littoral et l'intérieur, les villes et les campagnes, les citadins et les migrants sans hukou urbain.",
          method: "Retenez la Chine en trois chiffres et trois dates : 1,4 milliard d'habitants, environ 300 millions de mingong, près de 800 millions de personnes sorties de l'extrême pauvreté ; 1978, 2001, 2010. Placez au moins un chiffre et une date dans chaque partie de vos réponses.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'chine-metropoles-rural',
          title: 'Métropoles, littoraux et campagnes chinoises',
          minutes: 30,
          objectives: [
            "Décrire l'urbanisation rapide de la Chine et la puissance de ses métropoles et régions urbaines.",
            "Expliquer la littoralisation des hommes et des activités et le rôle des grandes façades portuaires.",
            "Caractériser les mutations des espaces ruraux chinois.",
            "Réaliser une description organisée des recompositions spatiales de la Chine à plusieurs échelles.",
          ],
          course: [
            {
              heading: "Une urbanisation d'une ampleur et d'une rapidité inédites",
              paragraphs: [
                "En 1978, moins d'un Chinois sur cinq vivait en ville. Le seuil de 50 % de citadins est franchi en 2011 et le taux d'urbanisation atteint environ 66 % en 2023 : la Chine compte plus de 900 millions de citadins. Cette urbanisation résulte de l'exode rural de centaines de millions de paysans, de l'extension des villes sur les campagnes voisines et de la création de villes nouvelles. Elle est en grande partie planifiée par l'État, qui en a fait un moteur de la croissance.",
                "Le rythme de construction a été vertigineux : quartiers d'affaires, millions de logements, autoroutes urbaines, réseaux de métro parmi les plus longs du monde, à Shanghai ou à Pékin. Mais cette croissance a aussi produit des excès : quartiers neufs restés longtemps presque vides, comme à Ordos en Mongolie-Intérieure, et, depuis 2021, une crise de l'immobilier marquée par les difficultés de grands promoteurs comme Evergrande.",
              ],
              box: { label: "Repère", text: "1978 : moins de 20 % de citadins. 2011 : plus de la moitié de la population vit en ville. 2023 : environ 66 % de citadins, plus de 900 millions de personnes." },
            },
            {
              heading: "Des métropoles et des régions urbaines puissantes",
              paragraphs: [
                "Shanghai, plus de 20 millions d'habitants, est la capitale économique et financière du pays : le quartier de Pudong, aménagé à partir de 1990 face au Bund historique, accueille la bourse et les tours des sièges sociaux, et son port est le premier du monde pour les conteneurs. Pékin, capitale politique, concentre les pouvoirs, les universités et les sièges des grandes entreprises d'État. Shenzhen et Guangzhou, dans le Sud, sont des pôles industriels et technologiques. À l'intérieur, Chongqing, Chengdu, Wuhan ou Xi'an se développent rapidement.",
                "Ces métropoles forment de vastes régions urbaines. Le delta du Yangzi, autour de Shanghai, Nanjing, Suzhou et Hangzhou, est la plus puissante. Le delta de la rivière des Perles, de Guangzhou à Shenzhen, Hong Kong et Macao, est devenu en 2019 la « Grande Baie », un projet d'intégration reliant ces villes par des infrastructures comme le pont de 55 kilomètres entre Hong Kong, Zhuhai et Macao (2018). Au Nord, la région de Pékin, Tianjin et du Hebei se réorganise, avec la création en 2017 de la ville nouvelle de Xiong'an pour décongestionner la capitale.",
                "À l'intérieur des villes, les vieux quartiers, comme les ruelles traditionnelles (hutong) de Pékin, sont souvent démolis au profit de tours ; les « villages urbains », anciens villages rattrapés par la ville, logent à bas prix une grande partie des travailleurs migrants. La ségrégation entre citadins disposant du hukou urbain et migrants reste forte.",
              ],
              box: { label: "À retenir", text: "Trois grandes régions urbaines structurent la Chine littorale : le delta du Yangzi (Shanghai), le delta de la rivière des Perles ou « Grande Baie » (Guangzhou, Shenzhen, Hong Kong) et la région de Pékin-Tianjin-Hebei." },
            },
            {
              heading: "Le littoral, façade de la Chine sur le monde",
              paragraphs: [
                "La littoralisation est un trait majeur de la géographie chinoise : les provinces côtières concentrent une grande partie de la population, la majorité de la production industrielle et l'essentiel des exportations. Depuis l'ouverture de 1978, l'État y a localisé les ZES et les villes ouvertes. Le littoral chinois forme aujourd'hui la première façade maritime du monde, avec plusieurs des plus grands ports à conteneurs : Shanghai, Ningbo-Zhoushan, Shenzhen, Guangzhou, Qingdao, Tianjin.",
                "Ces ports sont de gigantesques aménagements : à Shanghai, le port en eau profonde de Yangshan, ouvert en 2005 sur des îles au large, est relié au continent par un pont de plus de 30 kilomètres. Le littoral est aussi un espace à risques : typhons, inondations, affaissement des sols dans les grandes villes construites sur des deltas, pollution des eaux côtières. Le littoral reste relié à l'intérieur par les grands fleuves, comme le Yangzi, et par le réseau ferroviaire à grande vitesse.",
              ],
            },
            {
              heading: "Des campagnes en profonde mutation",
              paragraphs: [
                "Les campagnes rassemblent encore près de 480 millions d'habitants. L'exode rural les a vidées d'une partie de leurs jeunes adultes : dans de nombreux villages de l'intérieur, il reste surtout des personnes âgées et des enfants confiés aux grands-parents, que l'on appelle les « enfants laissés derrière ». La terre reste propriété collective : les familles n'en ont que l'usage, mais elles peuvent désormais louer leurs droits, ce qui favorise le regroupement des exploitations et la mécanisation.",
                "Les espaces ruraux se diversifient. Dans les années 1980, les entreprises de bourg et de village ont industrialisé de nombreuses campagnes littorales. Aujourd'hui, des « villages Taobao », du nom d'une plateforme de commerce en ligne, vendent leurs productions dans toute la Chine ; le tourisme rural se développe près des grandes villes. À la périphérie des métropoles, les terres agricoles sont absorbées par l'urbanisation, ce qui provoque des conflits liés aux expropriations. Pour garantir sa sécurité alimentaire, l'État a fixé une « ligne rouge » d'environ 120 millions d'hectares de terres cultivables à préserver, et il mène depuis 2017 une stratégie de revitalisation rurale.",
              ],
              box: { label: "Définition", text: "Recompositions spatiales : transformations de l'organisation d'un territoire (répartition des hommes et des activités, réseaux, hiérarchies entre espaces). En Chine, elles combinent urbanisation, métropolisation, littoralisation et mutations des campagnes." },
            },
          ],
          keyPoints: [
            "Taux d'urbanisation : moins de 20 % en 1978, plus de 50 % en 2011, environ 66 % en 2023 ; une urbanisation planifiée par l'État.",
            "Métropoles puissantes : Shanghai (Pudong, premier port du monde), Pékin (capitale), Shenzhen, Guangzhou ; essor de l'intérieur (Chongqing, Chengdu, Wuhan).",
            "Trois régions urbaines : delta du Yangzi, « Grande Baie » de la rivière des Perles, Pékin-Tianjin-Hebei (Xiong'an, 2017).",
            "Littoralisation : le littoral concentre population, industries et grands ports ; c'est la première façade maritime mondiale.",
            "Campagnes : près de 480 millions d'habitants, exode des jeunes, terre collective, villages Taobao, conflits d'expropriation, revitalisation rurale.",
          ],
          example: {
            statement: "Montrez que Shanghai est à la fois une métropole mondiale et un exemple de littoralisation.",
            solution: [
              "Situer : Shanghai est située à l'embouchure du Yangzi, sur la côte est de la Chine ; elle compte plus de 20 millions d'habitants.",
              "Métropole mondiale : elle est la capitale économique et financière de la Chine ; le quartier de Pudong, aménagé à partir de 1990, accueille la bourse, des banques et des sièges de firmes chinoises et étrangères.",
              "Littoralisation : son port, avec le terminal en eau profonde de Yangshan (2005), est le premier port à conteneurs du monde, et sa région concentre industries et zones logistiques.",
              "Rôle régional : elle est le centre du delta du Yangzi, la plus puissante région urbaine du pays, reliée à l'intérieur par le fleuve et par la grande vitesse.",
              "Conclure : Shanghai illustre la combinaison de la métropolisation et de la littoralisation qui caractérise les recompositions spatiales de la Chine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque lieu à sa caractéristique principale, puis situez-le (littoral ou intérieur) : (a) Pudong ; (b) Shenzhen ; (c) Xiong'an ; (d) Chongqing ; (e) Yangshan ; (f) un village de l'intérieur du Sichuan.",
              hint: "Relisez les parties consacrées aux métropoles, au littoral et aux campagnes.",
              solution: [
                "(a) Pudong : quartier d'affaires et financier de Shanghai, aménagé à partir de 1990 ; littoral.",
                "(b) Shenzhen : première ZES (1980), devenue une métropole industrielle et technologique ; littoral, face à Hong Kong.",
                "(c) Xiong'an : ville nouvelle créée en 2017 pour décongestionner Pékin ; intérieur, dans la province du Hebei, à une centaine de kilomètres au sud-ouest de Pékin, au cœur de la région de Pékin-Tianjin-Hebei.",
                "(d) Chongqing : grande métropole de l'intérieur, sur le Yangzi, pôle du développement de l'Ouest ; intérieur.",
                "(e) Yangshan : port en eau profonde de Shanghai, ouvert en 2005 sur des îles au large ; littoral.",
                "(f) Village de l'intérieur du Sichuan : espace rural marqué par l'exode des jeunes adultes, le vieillissement et les « enfants laissés derrière » ; intérieur.",
              ],
            },
            {
              level: 2,
              statement: "Données arrondies construites pour l'exercice à partir d'ordres de grandeur réels. Population de la Chine : 960 millions d'habitants en 1978, dont 170 millions de citadins ; 1 410 millions en 2023, dont 930 millions de citadins. (1) Calculez le taux d'urbanisation en 1978 et en 2023. (2) Calculez l'augmentation du nombre de citadins. (3) Calculez la population rurale en 1978 et en 2023, puis commentez l'ensemble de ces résultats.",
              hint: "Taux d'urbanisation = population urbaine ÷ population totale × 100 ; population rurale = population totale - population urbaine. Arrondissez au dixième.",
              solution: [
                "(1) 1978 : 170 ÷ 960 × 100 ≈ 17,7 %. 2023 : 930 ÷ 1 410 × 100 ≈ 66,0 %.",
                "(2) 930 - 170 = 760 : la Chine a gagné environ 760 millions de citadins en 45 ans, un nombre comparable à la population de toute l'Europe.",
                "(3) Population rurale : 960 - 170 = 790 millions en 1978 ; 1 410 - 930 = 480 millions en 2023. Elle a diminué d'environ 310 millions.",
                "Commentaire : la Chine est passée d'un pays très majoritairement rural à un pays aux deux tiers urbain ; cette urbanisation résulte surtout de l'exode rural. Mais les campagnes comptent encore environ 480 millions d'habitants, ce qui montre l'importance que gardent les espaces ruraux.",
              ],
            },
            {
              level: 3,
              statement: "Production graphique (type bac, contrôle continu) : préparez la légende organisée d'un croquis intitulé « La Chine : des recompositions spatiales multiples ». Proposez un titre, une légende en trois parties avec, pour chaque élément, le figuré choisi et les lieux à représenter, puis expliquez la logique d'ensemble.",
              hint: "Pensez à trois idées : un territoire inégalement développé (littoral, intérieur, Ouest), des métropoles et des régions urbaines puissantes, des flux et des politiques qui recomposent le territoire.",
              solution: [
                "Titre : La Chine : des recompositions spatiales multiples, entre métropolisation, littoralisation et rééquilibrage.",
                "I. Un territoire inégalement développé (figurés de surface) : un aplat foncé pour le littoral riche et urbanisé (de Pékin-Tianjin à Guangzhou) ; un aplat moyen pour la Chine intérieure en rattrapage (Sichuan, Hubei, Henan) ; un aplat clair pour l'Ouest peu peuplé et plus pauvre (Tibet, Xinjiang, Gansu).",
                "II. Des métropoles et des régions urbaines puissantes (figurés ponctuels et de surface) : des cercles proportionnels pour les grandes métropoles (Shanghai, Pékin, Shenzhen, Guangzhou, Chongqing, Chengdu, Wuhan) ; trois ovales hachurés pour les régions urbaines du delta du Yangzi, de la Grande Baie et de Pékin-Tianjin-Hebei.",
                "III. Des flux et des politiques qui recomposent le territoire (figurés linéaires et ponctuels) : des ancres pour les grands ports (Shanghai, Ningbo-Zhoushan, Shenzhen, Qingdao, Tianjin) ; des flèches vers l'extérieur pour les flux d'exportation ; des flèches de l'intérieur vers le littoral pour les migrations de mingong ; une flèche du littoral vers l'Ouest pour le programme de développement de l'Ouest ; un trait pour l'axe du Yangzi.",
                "Logique : la légende part des inégalités de développement, montre ensuite les pôles qui organisent le territoire, puis les flux et politiques qui le transforment ; le choix des figurés respecte la sémiologie graphique (surfaces pour les espaces, cercles proportionnels pour la hiérarchie, flèches pour les flux).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Villes, littoraux et campagnes de Chine.",
            statements: [
              { text: "Plus de la moitié des Chinois vivent en ville depuis 2011.", true: true, why: "Le seuil de 50 % est franchi en 2011 ; le taux d'urbanisation atteint environ 66 % en 2023." },
              { text: "En Chine, les paysans sont propriétaires de leurs terres.", true: false, why: "La terre rurale reste propriété collective ; les familles disposent de droits d'usage, qu'elles peuvent louer." },
              { text: "Shanghai possède le premier port à conteneurs du monde.", true: true, why: "Avec son terminal en eau profonde de Yangshan, le port de Shanghai est le premier du monde pour les conteneurs." },
              { text: "Les campagnes chinoises sont presque vides aujourd'hui.", true: false, why: "Elles comptent encore près de 480 millions d'habitants, même si de nombreux jeunes adultes sont partis en ville." },
              { text: "La « Grande Baie » regroupe notamment Guangzhou, Shenzhen, Hong Kong et Macao.", true: true, why: "Ce projet d'intégration lancé en 2019 concerne le delta de la rivière des Perles." },
              { text: "L'urbanisation chinoise s'est faite sans aucune intervention de l'État.", true: false, why: "Elle est largement planifiée : ZES, villes nouvelles comme Xiong'an, programmes d'infrastructures, contrôle des migrations par le hukou." },
              { text: "Les « villages urbains » logent de nombreux travailleurs migrants.", true: true, why: "Ces anciens villages rattrapés par la ville offrent des logements bon marché aux mingong." },
            ],
          },
          quiz: [
            {
              q: "Quel est le taux d'urbanisation approximatif de la Chine en 2023 ?",
              options: ["Environ 66 %", "Environ 20 %", "Environ 45 %", "Environ 95 %, comme dans les pays les plus urbanisés du monde"],
              answer: 0,
              why: "Environ deux Chinois sur trois vivent en ville en 2023, contre moins d'un sur cinq en 1978.",
            },
            {
              q: "Quel quartier de Shanghai, aménagé à partir de 1990, est devenu son centre financier ?",
              options: ["Le Bund", "Tiananmen", "Kowloon", "Pudong"],
              answer: 3,
              why: "Pudong, sur la rive est du Huangpu, accueille la bourse et les gratte-ciel ; le Bund est le quai historique en face.",
            },
            {
              q: "Pourquoi l'État a-t-il créé la ville nouvelle de Xiong'an en 2017 ?",
              options: ["Pour remplacer Shanghai comme port principal", "Pour accueillir les Jeux olympiques", "Pour décongestionner Pékin", "Pour loger les habitants déplacés par le barrage des Trois-Gorges"],
              answer: 2,
              why: "Xiong'an, dans le Hebei, doit accueillir des administrations, des entreprises et des universités pour alléger la pression sur la capitale.",
            },
            {
              q: "Qui sont les « enfants laissés derrière » ?",
              options: ["Des enfants restés au village pendant que leurs parents travaillent en ville", "Des enfants qui ne vont pas à l'école", "Des orphelins des grandes villes", "Des enfants envoyés étudier à l'étranger par des familles aisées des métropoles"],
              answer: 0,
              why: "Sans hukou urbain, de nombreux migrants ne peuvent pas scolariser facilement leurs enfants en ville et les confient aux grands-parents.",
            },
            {
              q: "Que sont les « villages Taobao » ?",
              options: ["Des villages touristiques reconstitués", "Des villages déplacés et reconstruits lors de la construction des grands barrages", "Des villages de pêcheurs du littoral", "Des villages qui vendent leurs productions par le commerce en ligne"],
              answer: 3,
              why: "Ces villages, qui tirent leur nom d'une plateforme de vente en ligne, montrent que les campagnes peuvent s'intégrer aux réseaux numériques.",
            },
          ],
          trap: "Croire que l'opposition littoral-intérieur résume toute la géographie chinoise : il faut aussi tenir compte des grandes métropoles de l'intérieur (Chongqing, Chengdu, Wuhan) et des contrastes entre villes et campagnes à l'intérieur même des provinces littorales.",
          method: "Décrivez toujours la Chine à trois échelles : nationale (littoral, intérieur, Ouest), régionale (les trois grandes régions urbaines) et locale (un quartier comme Pudong, un village de l'intérieur). Cette démarche multiscalaire est attendue dans toute copie de géographie.",
        },
      ],
    },
    /* ==================================================================== */
    /* CAPACITÉS ET MÉTHODES DE L'HISTOIRE-GÉOGRAPHIE                       */
    /* ==================================================================== */
    {
      id: 'methodes-hg',
      lessons: [

        /* ------------------------------------------------------------------ */
        {
          id: 'analyse-de-document',
          title: 'Analyser un document en histoire et en géographie',
          minutes: 30,
          objectives: [
            "Identifier la nature, l'auteur, la date, le destinataire et le contexte d'un document.",
            "Prélever des informations pertinentes et les expliquer à l'aide de ses connaissances.",
            "Exercer un regard critique sur un document : intérêt, point de vue, limites.",
            "Rédiger une analyse de document organisée qui répond à la consigne.",
          ],
          course: [
            {
              heading: "Ce qu'on attend d'une analyse de document",
              paragraphs: [
                "L'analyse de document est l'un des exercices des évaluations d'histoire-géographie en première, dans le cadre du contrôle continu du baccalauréat. On vous donne un ou deux documents, accompagnés d'une consigne qui oriente le travail. Il ne s'agit ni de résumer le document, ni de réciter le cours, mais de comprendre ce que dit le document, de l'expliquer grâce à vos connaissances et de porter sur lui un regard critique, afin de répondre à la consigne.",
                "Les documents sont variés. En histoire, on distingue les sources primaires, produites à l'époque étudiée (discours, lettre, traité, affiche, photographie, caricature), et les documents secondaires, produits après coup (texte d'historien, carte de synthèse). En géographie, on rencontre des cartes, des photographies de paysages, des graphiques, des tableaux statistiques, des extraits d'articles ou de documents d'aménagement. Chaque type de document a ses règles de lecture.",
              ],
              box: { label: "Règle", text: "Une analyse de document repose sur trois verbes : présenter (identifier le document et son contexte), expliquer (prélever des informations et les éclairer par le cours), critiquer (mesurer l'intérêt et les limites du document). Le tout est guidé par la consigne." },
            },
            {
              heading: "Étape 1 : lire la consigne et présenter le document",
              paragraphs: [
                "Commencez par lire attentivement la consigne et soulignez ses mots-clés : ils indiquent ce que vous devez chercher et souvent le plan de votre réponse. Lisez ensuite le document en entier, puis son paratexte (le titre, la source, la date, les notes) : il contient des informations essentielles.",
                "Présenter un document, c'est répondre à des questions précises. Quelle est sa nature (discours, traité, affiche, carte, graphique) ? Qui en est l'auteur, quelle est sa fonction et quel est son point de vue ? Quelle est sa date, et à quel moment de l'histoire correspond-elle ? À qui s'adresse-t-il ? Dans quel contexte a-t-il été produit ? Le contexte, ce sont les événements et la situation qui permettent de comprendre le document : il se rédige avec vos connaissances, sans tout raconter.",
              ],
              box: { label: "À retenir", text: "Présenter un document : nature, auteur (et sa fonction), date, destinataire, source, contexte. Pour une carte ou un graphique : titre, légende, échelle, période couverte et source des données." },
            },
            {
              heading: "Étape 2 : prélever et expliquer les informations",
              paragraphs: [
                "Relevez dans le document les informations qui répondent à la consigne. Pour un texte, citez de courts passages entre guillemets, puis expliquez-les : que signifie ce passage ? À quoi fait-il référence ? Que nous apprend-il ? Un passage cité sans explication ne vaut presque rien ; une explication sans référence au document s'éloigne de l'exercice. La règle est simple : citer, expliquer, mettre en relation avec le cours.",
                "Pour une carte, décrivez d'abord la répartition générale (où se concentre le phénomène, où est-il absent), puis les détails significatifs, en nommant les lieux. Pour un graphique ou un tableau, dégagez la tendance générale, puis les phases et les ruptures, et appuyez-vous sur des chiffres précis, éventuellement calculés (taux d'évolution, part en pourcentage, coefficient multiplicateur). Pour une image, décrivez les plans et les éléments, puis interprétez leurs choix (cadrage, symboles, couleurs, slogan).",
              ],
            },
            {
              heading: "Étape 3 : exercer un regard critique, puis rédiger",
              paragraphs: [
                "Critiquer ne veut pas dire dire du mal du document, mais en mesurer la portée et les limites. Quel est son intérêt pour l'historien ou le géographe ? L'auteur est-il un témoin direct, un acteur engagé, un propagandiste ? Que ne dit pas le document ? Ses chiffres sont-ils complets, sa carte simplifiée ? Avec deux documents, confrontez-les : se complètent-ils ou se contredisent-ils ?",
                "La rédaction comprend une introduction, qui présente le ou les documents et reprend la consigne sous forme de problématique, un développement en deux ou trois paragraphes organisés selon la consigne, et une courte conclusion, qui répond à la consigne et rappelle l'intérêt et les limites du document. Chaque paragraphe commence par une idée, s'appuie sur le document et sur vos connaissances.",
              ],
              box: { label: "Règle", text: "Introduction : présenter le document et poser la problématique. Développement : deux ou trois paragraphes, chacun avec une idée, des citations ou des données du document, des connaissances. Conclusion : réponse à la consigne, intérêt et limites du document." },
            },
          ],
          keyPoints: [
            "Analyser, c'est présenter, expliquer et critiquer un document pour répondre à une consigne, pas le résumer.",
            "Présentation : nature, auteur et fonction, date, destinataire, source, contexte.",
            "Expliquer : citer de courts passages ou des données, les expliquer, les relier au cours.",
            "Carte ou graphique : titre, légende, échelle, source ; tendance générale puis détails chiffrés.",
            "Critiquer : point de vue de l'auteur, intérêt, limites, ce que le document ne dit pas.",
            "Rédaction : introduction avec problématique, deux ou trois paragraphes organisés, conclusion qui répond à la consigne.",
          ],
          example: {
            statement: "Présentez le document suivant : une affiche française de 1916 dessinée par Abel Faivre pour le deuxième emprunt de la Défense nationale ; elle montre un soldat français (un poilu) qui s'élance, le bras levé, au-dessus du slogan « On les aura ! ».",
            solution: [
              "Nature : il s'agit d'une affiche de propagande, c'est-à-dire d'une image destinée à convaincre un large public.",
              "Auteur : Abel Faivre, dessinateur et affichiste, travaillant pour l'État, qui organise l'emprunt.",
              "Date et contexte : 1916, en pleine guerre de position ; c'est l'année de la bataille de Verdun, et le slogan reprend une formule associée à la défense de Verdun. La guerre totale exige des moyens financiers immenses, que l'État cherche par l'emprunt.",
              "Destinataire : les civils de l'arrière, invités à prêter leur épargne à l'État pour financer la guerre.",
              "Intention : l'affiche associe l'argent prêté à l'élan victorieux du soldat ; elle mobilise les civils en faisant de la souscription un geste patriotique.",
              "Limite à signaler dès la présentation : c'est un document de propagande, qui montre une image héroïque et optimiste de la guerre, éloignée de la réalité des tranchées.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des documents suivants, indiquez sa nature et s'il s'agit d'une source primaire ou d'un document secondaire, puis précisez une question à se poser sur son auteur : (a) le texte du traité de Versailles (1919) ; (b) un extrait d'un manuel d'histoire publié en 2019 sur la Grande Guerre ; (c) une lettre d'un soldat à sa famille écrite en 1916 ; (d) une carte de la métropolisation en France réalisée par l'INSEE ; (e) une caricature allemande de 1919 contre le traité de Versailles.",
              hint: "Une source primaire est produite à l'époque des faits par un acteur ou un témoin ; un document secondaire est une analyse produite plus tard. En géographie, la question porte plutôt sur la fiabilité et la date des données.",
              solution: [
                "(a) Traité de Versailles : texte officiel, source primaire ; question : qui l'a rédigé et imposé, et pourquoi l'Allemagne n'a-t-elle pas pu le négocier ?",
                "(b) Manuel de 2019 : texte d'historien ou de pédagogue, document secondaire ; question : sur quelles sources et quels travaux s'appuie-t-il ?",
                "(c) Lettre de soldat : témoignage privé, source primaire ; question : le soldat écrit-il librement, sachant que le courrier est contrôlé par la censure, et cherche-t-il à rassurer sa famille ?",
                "(d) Carte de l'INSEE : carte statistique, document secondaire produit à partir de données ; question : quelle est la date des données et quelle définition (aire d'attraction, unité urbaine) est utilisée ?",
                "(e) Caricature allemande de 1919 : image satirique, source primaire ; question : quel est le point de vue de l'auteur, qui dénonce sans doute un Diktat imposé à l'Allemagne ?",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives construites pour l'exercice) : tableau « Population des cinq plus grandes aires urbaines d'un pays émergent, en millions d'habitants ». Ville A (capitale) : 4,0 en 1990, 9,6 en 2020 ; ville B : 2,0 puis 3,6 ; ville C : 1,5 puis 2,4 ; ville D : 1,2 puis 1,8 ; ville E : 0,8 puis 1,2. Source : institut national de la statistique du pays. Consigne : présentez le document, décrivez et expliquez l'évolution, puis indiquez une limite de ce document.",
              hint: "Calculez le coefficient multiplicateur de chaque ville et la part de la capitale dans le total des cinq villes en 1990 et en 2020.",
              solution: [
                "Présentation : un tableau statistique produit par l'institut national de la statistique, qui compare la population des cinq plus grandes aires urbaines d'un pays émergent en 1990 et en 2020.",
                "Description chiffrée : toutes les villes grandissent, mais pas au même rythme. Coefficients multiplicateurs : A : 9,6 ÷ 4,0 = 2,4 ; B : 3,6 ÷ 2,0 = 1,8 ; C : 2,4 ÷ 1,5 = 1,6 ; D : 1,8 ÷ 1,2 = 1,5 ; E : 1,2 ÷ 0,8 = 1,5.",
                "Concentration : total des cinq villes : 9,5 millions en 1990 et 18,6 millions en 2020. Part de la capitale : 4,0 ÷ 9,5 × 100 ≈ 42 % en 1990, 9,6 ÷ 18,6 × 100 ≈ 52 % en 2020.",
                "Explication : le pays s'urbanise rapidement (exode rural, croissance naturelle) et la capitale, qui concentre les fonctions de commandement et attire les investissements, grandit le plus vite : c'est la métropolisation, qui renforce la macrocéphalie.",
                "Limite : le tableau ne donne que deux dates et cinq villes ; il ne dit rien des conditions de vie (quartiers informels), des définitions utilisées pour les aires urbaines, ni de la population totale du pays.",
              ],
            },
            {
              level: 3,
              statement: "Analyse de document (type bac, contrôle continu). Document : résumé du discours prononcé par le président des États-Unis Woodrow Wilson devant le Congrès le 8 janvier 1918 (les « Quatorze points »). Wilson y demande que les traités de paix soient négociés publiquement, sans accords secrets ; que la navigation soit libre sur les mers ; que les obstacles au commerce soient supprimés autant que possible ; que les armements soient réduits ; que les questions coloniales soient réglées en tenant compte à la fois des intérêts des populations et des prétentions des gouvernements ; que l'Alsace-Lorraine soit rendue à la France ; que les peuples de l'Autriche-Hongrie et de l'Empire ottoman puissent se développer de manière autonome ; qu'une Pologne indépendante soit créée avec un accès à la mer ; enfin, qu'une société générale des nations soit constituée pour garantir l'indépendance et l'intégrité de tous les États, grands ou petits. Consigne : en présentant le document, montrez quel ordre international Wilson veut construire, puis expliquez dans quelle mesure ce programme a été appliqué.",
              hint: "Classez les points en grandes idées (relations internationales, droit des peuples, organisation de la paix), puis confrontez-les aux traités de 1919-1920 et à l'histoire de la SDN.",
              solution: [
                "Présentation : il s'agit du résumé d'un discours officiel, les Quatorze points, prononcé par le président américain Woodrow Wilson devant le Congrès le 8 janvier 1918. Les États-Unis sont entrés en guerre en avril 1917 ; la Russie bolchevique négocie avec l'Allemagne. Wilson s'adresse au Congrès, mais aussi à l'opinion mondiale et aux belligérants. Problématique : quel ordre international Wilson propose-t-il, et a-t-il été réalisé ?",
                "I. Des relations internationales transparentes et libres : diplomatie publique et fin des traités secrets, liberté des mers, liberté du commerce, réduction des armements. Wilson veut rompre avec la diplomatie des alliances qui a conduit à la guerre en 1914.",
                "II. Le droit des peuples : retour de l'Alsace-Lorraine à la France, développement autonome des peuples d'Autriche-Hongrie et de l'Empire ottoman, Pologne indépendante avec accès à la mer. Wilson veut fonder la paix sur les aspirations nationales.",
                "III. Une organisation de la paix : la « société générale des nations » doit garantir l'indépendance et l'intégrité de tous les États par la sécurité collective.",
                "Application : une partie du programme est réalisée. L'Alsace-Moselle revient à la France, la Pologne renaît avec le corridor de Dantzig, de nouveaux États naissent en Europe centrale, et la SDN est créée (1920). Mais les vaincus n'ont pas négocié, le droit des peuples est appliqué inégalement (minorités, Autriche interdite de rattachement, mandats au Proche-Orient, peuples colonisés oubliés), et le Sénat américain refuse de ratifier le traité : les États-Unis n'entrent pas à la SDN.",
                "Conclusion : le document exprime un projet d'ordre international fondé sur le droit, la transparence et la sécurité collective. Son intérêt est de montrer l'idéal américain de 1918 ; sa limite est de ne pas dire comment l'imposer aux vainqueurs européens, qui poursuivent aussi leurs propres intérêts.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les règles de l'analyse de document.",
            statements: [
              { text: "Analyser un document, c'est le résumer le plus fidèlement possible.", true: false, why: "Il faut présenter, expliquer et critiquer le document pour répondre à la consigne ; la paraphrase est l'erreur la plus fréquente." },
              { text: "Le paratexte (titre, source, date, notes) fournit des informations essentielles pour présenter le document.", true: true, why: "Il donne souvent l'auteur, la date et la source, indispensables à la présentation." },
              { text: "Une affiche de propagande montre fidèlement la réalité de la guerre.", true: false, why: "Elle cherche à convaincre et donne une image orientée, souvent héroïque, de la guerre." },
              { text: "Pour un graphique, on dégage d'abord la tendance générale avant les détails.", true: true, why: "La tendance générale, puis les phases et les ruptures, appuyées sur des chiffres précis." },
              { text: "Critiquer un document consiste à montrer qu'il est faux.", true: false, why: "La critique mesure l'intérêt et les limites du document : point de vue, fiabilité, silences." },
              { text: "Une lettre de soldat de 1916 est une source primaire.", true: true, why: "Elle est produite à l'époque des faits par un témoin direct." },
              { text: "On peut citer de longs passages du document sans les expliquer.", true: false, why: "Toute citation doit être courte et expliquée à l'aide des connaissances." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première chose à faire face à une analyse de document ?",
              options: ["Rédiger directement l'introduction", "Recopier le cours sur le thème", "Lire attentivement la consigne et en souligner les mots-clés", "Chercher immédiatement toutes les erreurs et les mensonges du document"],
              answer: 2,
              why: "La consigne oriente tout le travail et donne souvent le plan de la réponse.",
            },
            {
              q: "Qu'est-ce qu'une source primaire en histoire ?",
              options: ["Un document produit à l'époque étudiée", "Le premier document d'un sujet d'examen", "Un texte d'historien récent", "Un document jugé plus fiable que tous les autres par les historiens"],
              answer: 0,
              why: "Une source primaire (discours, lettre, affiche, traité) est produite par un acteur ou un témoin de l'époque ; un texte d'historien est un document secondaire.",
            },
            {
              q: "Que faut-il faire après avoir cité un court passage du document ?",
              options: ["Passer immédiatement à une autre citation", "L'expliquer et le relier au cours", "Le recopier une seconde fois en conclusion", "Indiquer seulement le numéro de la ligne où il figure dans le texte"],
              answer: 1,
              why: "Citer, expliquer, mettre en relation avec le cours : une citation non expliquée n'apporte rien à l'analyse.",
            },
            {
              q: "Que signifie « critiquer » un document ?",
              options: ["Montrer qu'il est mensonger", "Dire s'il est agréable à lire", "Le comparer avec le manuel pour vérifier qu'il dit la même chose", "Mesurer son intérêt et ses limites"],
              answer: 3,
              why: "La critique porte sur le point de vue de l'auteur, la fiabilité des informations et ce que le document ne dit pas.",
            },
            {
              q: "Pour présenter une carte, quels éléments faut-il relever en priorité ?",
              options: ["Les couleurs préférées de l'auteur", "Le nombre exact de villes représentées et la population de chacune", "Le titre, la légende, l'échelle, la date et la source", "Uniquement le titre"],
              answer: 2,
              why: "Ces éléments indiquent ce que la carte représente, à quelle échelle, à quelle date et à partir de quelles données.",
            },
          ],
          trap: "La paraphrase : répéter le document avec d'autres mots, sans l'expliquer ni le relier au contexte, est l'erreur la plus fréquente et la plus pénalisée.",
          method: "Au brouillon, faites un tableau à deux colonnes : à gauche, les informations relevées dans le document (citations, chiffres), à droite, les connaissances qui les expliquent. Ne rédigez qu'une fois chaque ligne remplie des deux côtés.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'reponse-construite',
          title: 'Rédiger une réponse construite',
          minutes: 30,
          objectives: [
            "Analyser un sujet : définir les termes, repérer les bornes chronologiques et spatiales, identifier le type de question.",
            "Formuler une problématique et construire un plan adapté en deux ou trois parties.",
            "Rédiger une introduction, un développement argumenté et une conclusion.",
            "Mobiliser des connaissances précises (dates, lieux, acteurs, chiffres, notions) au service d'une argumentation.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une réponse construite ?",
              paragraphs: [
                "La réponse construite, appelée au baccalauréat « réponse à une question problématisée », est l'un des exercices des évaluations d'histoire-géographie de première, comptées dans le contrôle continu. Elle consiste à répondre à une question portant sur une partie du programme par un texte organisé : une introduction, un développement en plusieurs parties et une conclusion. Elle évalue à la fois vos connaissances et votre capacité à construire une argumentation.",
                "Ce n'est ni une récitation du cours, ni une suite de remarques sans ordre : chaque partie répond à un aspect de la question, chaque argument est appuyé sur des exemples précis. En géographie, la réponse peut être enrichie d'un schéma ou d'un croquis, si la consigne le permet.",
              ],
              box: { label: "Définition", text: "Problématique : question centrale, souvent reformulée à partir du sujet, à laquelle tout le devoir répond. Plan : organisation du développement en deux ou trois parties, qui sont autant d'étapes de la réponse à la problématique." },
            },
            {
              heading: "Analyser le sujet et formuler la problématique",
              paragraphs: [
                "Tout commence par l'analyse du sujet. Soulignez chaque mot important et définissez-le. Repérez les bornes chronologiques (de quelle période parle-t-on ?) et spatiales (quel espace ?), même lorsqu'elles sont implicites : un sujet sur « les sociétés en guerre » concerne les années 1914-1918 et les principaux pays belligérants. Ne sortez pas de ces bornes, mais ne laissez de côté aucun aspect qu'elles contiennent.",
                "Identifiez ensuite le type de question, car il oriente le plan. « Comment » appelle une explication des formes ou des étapes ; « Pourquoi » demande des causes ou des facteurs ; « En quoi » invite à démontrer ; « Dans quelle mesure » suppose de nuancer, en montrant ce qui est vrai puis les limites. La problématique reformule le sujet sous la forme d'une question précise qui fait apparaître son enjeu.",
              ],
              box: { label: "Règle", text: "Trois types de plans fréquents : chronologique (des étapes, quand le sujet porte sur une évolution), thématique (des aspects différents d'une même question), analytique (causes, manifestations, conséquences). Un sujet « dans quelle mesure » appelle un plan qui nuance (oui, mais)." },
            },
            {
              heading: "Construire le plan et mobiliser les connaissances",
              paragraphs: [
                "Au brouillon, notez rapidement tout ce que vous savez sur le sujet : dates, lieux, acteurs, chiffres, notions. Classez ensuite ces éléments en deux ou trois grandes idées, qui deviennent vos parties. Chaque partie contient deux ou trois arguments ; chaque argument associe une idée, un ou plusieurs exemples précis et une explication. Un exemple précis est daté, localisé ou chiffré : « la bataille de Verdun (février à décembre 1916) » vaut mieux que « les grandes batailles ».",
                "Vérifiez que votre plan répond bien à la problématique et que les parties ne se répètent pas. En histoire, respectez la chronologie à l'intérieur de chaque partie. En géographie, localisez vos exemples, utilisez les notions du programme (métropolisation, littoralisation, fragmentation...) et pensez à changer d'échelle (mondiale, nationale, locale).",
              ],
            },
            {
              heading: "Rédiger : introduction, développement, conclusion",
              paragraphs: [
                "L'introduction comprend une phrase d'accroche liée au sujet (un fait, une date, une citation courte dont vous êtes sûr), la définition des termes et la présentation du cadre (période, espace, contexte), la problématique, et l'annonce du plan. Elle tient en un paragraphe.",
                "Le développement est rédigé en parties séparées par un saut de ligne ; chaque partie commence par une phrase qui annonce son idée, puis enchaîne les arguments en paragraphes, reliés par des connecteurs logiques (d'abord, en effet, ainsi, cependant, en outre, donc). Une phrase de transition peut conclure chaque partie et annoncer la suivante. Écrivez au présent, de manière impersonnelle et sans abréviations.",
                "La conclusion répond clairement à la problématique en reprenant les idées principales, sans exemples nouveaux. Elle peut s'achever par une ouverture, qui élargit la réflexion vers un autre espace ou une période suivante. Gardez quelques minutes pour relire l'orthographe, les dates et les noms propres.",
              ],
              box: { label: "À retenir", text: "Introduction : accroche, définitions, cadre, problématique, annonce du plan. Développement : deux ou trois parties, des arguments précis et expliqués, des connecteurs. Conclusion : réponse à la problématique, puis ouverture éventuelle. Relecture finale." },
            },
          ],
          keyPoints: [
            "La réponse construite (réponse à une question problématisée) est un texte organisé : introduction, développement, conclusion.",
            "Analyser le sujet : définir les termes, repérer les bornes chronologiques et spatiales, identifier le type de question.",
            "Plans fréquents : chronologique, thématique, analytique ; « dans quelle mesure » appelle une nuance.",
            "Chaque argument associe une idée, un exemple précis (daté, localisé, chiffré) et une explication.",
            "Introduction : accroche, définitions, cadre, problématique, annonce du plan ; conclusion : réponse et ouverture.",
          ],
          example: {
            statement: "Rédigez l'introduction de la réponse au sujet : « Comment la Première Guerre mondiale devient-elle une guerre totale ? ».",
            solution: [
              "Analyse du sujet au brouillon : « comment » appelle une explication des formes et des étapes ; « guerre totale » doit être défini ; bornes : 1914-1918, principaux pays belligérants.",
              "Accroche : en août 1914, les soldats partent en pensant que la guerre sera courte ; elle dure en réalité plus de quatre ans.",
              "Définition et cadre : une guerre totale mobilise toutes les ressources humaines, économiques, financières et morales d'un pays et touche les civils autant que les soldats ; elle oppose de 1914 à 1918 l'Entente et les puissances centrales.",
              "Problématique : par quelles étapes et sous quelles formes le conflit mobilise-t-il l'ensemble des sociétés belligérantes ?",
              "Annonce du plan : nous verrons d'abord comment l'échec de la guerre courte impose une mobilisation militaire massive, puis comment l'économie et les esprits sont mobilisés, enfin comment les civils deviennent à la fois acteurs et cibles de la guerre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des sujets suivants, identifiez le type de question, précisez les bornes chronologiques ou spatiales et proposez un type de plan : (a) « Pourquoi l'Europe entre-t-elle en guerre en 1914 ? » ; (b) « Comment évolue la guerre de 1914 à 1918 ? » ; (c) « Dans quelle mesure la Chine est-elle un pays développé ? » ; (d) « En quoi les espaces ruraux français sont-ils multifonctionnels ? ».",
              hint: "Associez « pourquoi » aux causes, « comment » aux formes ou aux étapes, « en quoi » à une démonstration et « dans quelle mesure » à une nuance.",
              solution: [
                "(a) « Pourquoi » : on attend des causes. Bornes : l'Europe, de la fin du XIXe siècle à l'été 1914. Plan analytique : des causes profondes (alliances, rivalités, nationalismes), puis la cause immédiate et l'engrenage de juillet et août 1914.",
                "(b) « Comment » + « évolue » : on attend des étapes. Bornes : 1914-1918, tous les fronts. Plan chronologique : guerre de mouvement (1914), guerre de position et d'usure (1915-1917), retour du mouvement et fin de la guerre (1918).",
                "(c) « Dans quelle mesure » : on attend une réponse nuancée. Bornes : la Chine actuelle, depuis 1978. Plan qui nuance : un développement spectaculaire, mais des inégalités et des fragilités fortes.",
                "(d) « En quoi » : on attend une démonstration. Bornes : la France actuelle. Plan thématique : fonction productive, fonction résidentielle et récréative, fonction environnementale, avec les conflits qu'elles suscitent.",
              ],
            },
            {
              level: 2,
              statement: "Rédigez l'introduction complète de la réponse au sujet : « Quels sont les effets de la métropolisation sur le territoire français ? ». Votre introduction doit comporter une accroche, la définition du terme principal, le cadre, une problématique et l'annonce d'un plan en deux ou trois parties.",
              hint: "Choisissez une accroche chiffrée tirée du cours (par exemple la part de la population vivant dans l'aire d'attraction d'une ville) et pensez à des effets à plusieurs échelles.",
              solution: [
                "Accroche : selon l'INSEE, environ 93 % des Français vivent dans l'aire d'attraction d'une ville.",
                "Définition : la métropolisation est le processus de concentration des populations, des activités et des fonctions de commandement dans les plus grandes villes, qui transforment en retour leur espace.",
                "Cadre : en France, ce processus profite à Paris, seule ville mondiale du pays, et à une vingtaine de métropoles régionales, surtout depuis les années 1980.",
                "Problématique : comment la métropolisation transforme-t-elle l'organisation du territoire français, et quelles inégalités produit-elle ?",
                "Annonce du plan : nous montrerons d'abord qu'elle renforce le sommet de la hiérarchie urbaine, puis qu'elle étend l'influence des villes sur les espaces périurbains et ruraux, enfin qu'elle creuse des inégalités que les politiques publiques tentent de corriger.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Pourquoi la paix construite entre 1919 et 1923 est-elle fragile ? ». Rédigez une réponse complète : introduction, développement en deux ou trois parties avec des arguments appuyés sur des exemples précis, conclusion.",
              hint: "Le sujet commence par « pourquoi » : organisez votre développement en grandes causes (le contenu des traités, les mécontentements, les faiblesses de la SDN) et donnez des dates, des lieux et des clauses précises.",
              solution: [
                "Introduction : le 11 novembre 1918, l'armistice met fin aux combats à l'ouest. Entre 1919 et 1923, les vainqueurs réunis à Paris imposent une série de traités, de Versailles (1919) à Lausanne (1923), et créent la Société des Nations. Ils veulent fonder un ordre des nations démocratiques. Problématique : pourquoi cette paix est-elle dès l'origine fragile ? Nous verrons qu'elle est imposée, qu'elle crée de nombreux mécontents et que l'organisation chargée de la garantir est faible.",
                "I. Une paix imposée : les vaincus ne participent pas aux négociations ; le traité de Versailles est signé le 28 juin 1919 dans la galerie des Glaces. L'Allemagne perd l'Alsace-Moselle, ses colonies, des territoires à l'est (corridor de Dantzig) ; son armée est limitée à 100 000 hommes ; l'article 231 la rend responsable de la guerre et fonde les réparations (132 milliards de marks-or en 1921). Les Allemands dénoncent un Diktat.",
                "II. De nombreux mécontents : la Hongrie perd environ deux tiers de son territoire au traité de Trianon (1920) ; l'Italie parle de « victoire mutilée » ; les nouveaux États comptent de fortes minorités, comme les Allemands des Sudètes en Tchécoslovaquie ; au Proche-Orient, les mandats français et britanniques déçoivent les Arabes ; la Turquie de Mustafa Kemal refuse le traité de Sèvres et obtient sa révision à Lausanne (1923).",
                "III. Une sécurité collective fragile : la SDN, installée à Genève en 1920, n'a pas d'armée et décide souvent à l'unanimité ; les États-Unis, dont le président avait inspiré sa création, n'en font pas partie, car le Sénat refuse de ratifier le traité ; l'Allemagne n'y entre qu'en 1926 et l'URSS en 1934.",
                "Conclusion : la paix de 1919-1923 est fragile parce qu'elle est imposée aux vaincus, qu'elle laisse de nombreux peuples insatisfaits et qu'elle repose sur une organisation internationale sans moyens. Ces faiblesses seront exploitées dans les années 1930 par les régimes qui contestent l'ordre de Versailles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la réalisation d'une réponse construite.",
            items: [
              "Analyser les termes du sujet et ses bornes",
              "Formuler la problématique",
              "Construire le plan au brouillon",
              "Rédiger l'introduction",
              "Rédiger le développement",
              "Rédiger la conclusion",
              "Se relire",
            ],
          },
          quiz: [
            {
              q: "Que doit contenir une introduction de réponse construite ?",
              options: ["Une accroche, les définitions, le cadre, la problématique et l'annonce du plan", "Un résumé détaillé de tout le développement", "La réponse définitive avec tous les exemples", "Uniquement la recopie mot pour mot du sujet, suivie de l'annonce des trois parties prévues"],
              answer: 0,
              why: "L'introduction présente le sujet et la démarche ; les exemples sont réservés au développement.",
            },
            {
              q: "Quel type de plan convient le mieux au sujet « Comment évolue la guerre de 1914 à 1918 ? » ?",
              options: ["Un plan dialectique", "Un plan thématique", "Aucun plan n'est nécessaire", "Un plan chronologique"],
              answer: 3,
              why: "Le verbe « évolue » et les bornes 1914-1918 invitent à distinguer des étapes successives : mouvement, position, retour du mouvement.",
            },
            {
              q: "Qu'est-ce qu'un exemple précis dans une réponse construite ?",
              options: ["Une idée générale bien formulée", "Un fait daté, localisé ou chiffré", "Une opinion personnelle argumentée", "Une phrase recopiée du manuel, sans changer aucun mot du texte d'origine"],
              answer: 1,
              why: "« La bataille de Verdun (février à décembre 1916) » est un exemple précis ; « les grandes batailles » ne l'est pas.",
            },
            {
              q: "Que doit faire la conclusion ?",
              options: ["Introduire de nouveaux exemples", "Recopier l'introduction", "Répondre clairement à la problématique, puis éventuellement ouvrir", "Donner l'avis personnel de l'élève sur le sujet étudié en classe et sur son intérêt"],
              answer: 2,
              why: "La conclusion fait le bilan de l'argumentation et répond à la problématique ; l'ouverture élargit la réflexion.",
            },
            {
              q: "Que suppose un sujet qui commence par « Dans quelle mesure » ?",
              options: ["Une réponse nuancée", "Une simple liste d'exemples", "Un récit chronologique sans analyse", "Un calcul statistique précis, présenté sous la forme d'un tableau"],
              answer: 0,
              why: "Il faut évaluer jusqu'à quel point l'affirmation est vraie : montrer ce qui la confirme, puis ses limites.",
            },
          ],
          trap: "Réciter tout le cours sur le thème au lieu de répondre à la question posée, ou sortir des bornes du sujet : chaque paragraphe doit servir la réponse à la problématique.",
          method: "Entraînez-vous à faire uniquement l'analyse du sujet et le plan détaillé en quinze minutes, sur plusieurs sujets : c'est l'étape décisive, et le plan détaillé (parties, arguments, exemples) permet ensuite de rédiger vite et sans oubli.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'croquis-schema',
          title: 'Réaliser un croquis ou un schéma',
          minutes: 30,
          objectives: [
            "Distinguer croquis, schéma et carte, et comprendre ce qu'une production graphique doit démontrer.",
            "Choisir des figurés adaptés en respectant les règles de la sémiologie graphique.",
            "Construire une légende organisée qui suit un raisonnement.",
            "Réaliser un croquis à partir d'un texte ou de ses connaissances, avec un titre et une nomenclature lisible.",
          ],
          course: [
            {
              heading: "Croquis, schéma : des productions qui démontrent",
              paragraphs: [
                "La réalisation de productions graphiques est une capacité attendue en géographie. Un croquis est une représentation simplifiée d'un espace réel, dessinée sur un fond de carte : il respecte la localisation des phénomènes, mais ne retient que les informations utiles pour répondre au sujet. Un schéma va plus loin dans la simplification : il représente l'organisation d'un espace par des formes géométriques (cercles, flèches, aplats simples), parfois sans fond de carte précis. La carte, elle, est une représentation précise et exhaustive, réalisée par des spécialistes.",
                "Au baccalauréat, dans le cadre du contrôle continu, la production graphique peut être demandée à partir d'un texte, qui fournit les informations à représenter, ou comme croquis de synthèse sur un thème du programme. Dans tous les cas, un croquis n'est pas un dessin décoratif : c'est une démonstration. Comme une réponse construite, il répond à une problématique, et sa légende en est le plan.",
              ],
              box: { label: "Définition", text: "Croquis : représentation simplifiée d'un espace réel sur un fond de carte, organisée par une légende qui répond à un sujet. Schéma : représentation encore plus simplifiée et géométrisée de l'organisation d'un espace. Nomenclature : ensemble des noms de lieux portés sur la production." },
            },
            {
              heading: "Le langage cartographique : figurés et sémiologie graphique",
              paragraphs: [
                "On utilise trois familles de figurés. Les figurés ponctuels (cercles, carrés, triangles, pictogrammes) localisent un phénomène en un point : une ville, un port, un aéroport, une usine. Les figurés linéaires (traits, flèches) représentent des axes de transport, des flux, des frontières ou des fronts pionniers. Les figurés de surface, ou zonaux (aplats de couleur, hachures, trames), représentent des espaces : une région dynamique, un espace agricole, une zone en déprise.",
                "Le choix des figurés obéit aux règles de la sémiologie graphique, formalisées par le cartographe Jacques Bertin dans son ouvrage Sémiologie graphique (1967). Pour exprimer une hiérarchie ou une quantité, on fait varier la taille (des cercles de plus en plus grands pour des villes de plus en plus importantes). Pour exprimer un ordre ou une intensité, on utilise des nuances d'une même couleur, du clair au foncé. Pour distinguer des phénomènes de nature différente, on change de couleur ou de forme. Les couleurs chaudes (rouge, orange) sont souvent réservées aux espaces dynamiques, les couleurs froides ou pâles aux espaces moins dynamiques, et le bleu à l'eau.",
              ],
              box: { label: "Règle", text: "Taille = hiérarchie ou quantité. Valeur (du clair au foncé d'une même couleur) = intensité ou ordre. Couleur ou forme différentes = phénomènes de nature différente. Un même figuré ne désigne qu'une seule information." },
            },
            {
              heading: "Construire une légende organisée",
              paragraphs: [
                "Une légende organisée est structurée en deux à quatre parties numérotées et titrées, qui forment un raisonnement, comme les parties d'une réponse construite. Par exemple, pour un croquis sur la métropolisation en France : I. Une hiérarchie urbaine dominée par Paris ; II. Des métropoles reliées entre elles et au monde ; III. Des effets territoriaux contrastés. Chaque partie regroupe les figurés qui illustrent son idée.",
                "Chaque élément de légende associe un figuré et un intitulé précis, rédigé comme une idée (« métropole régionale dynamique ») plutôt que comme un simple mot (« ville »). Le titre est lui aussi problématisé : il annonce ce que démontre le croquis. La nomenclature (noms des villes, des régions, des mers) est écrite horizontalement, lisiblement, en hiérarchisant les écritures : majuscules pour les océans et les pays, minuscules pour les villes.",
              ],
              box: { label: "À retenir", text: "Une bonne légende : deux à quatre parties titrées, un raisonnement du général au particulier ou des espaces aux dynamiques, des intitulés rédigés, chaque figuré une seule fois. Le titre annonce la démonstration du croquis." },
            },
            {
              heading: "Les étapes de la réalisation",
              paragraphs: [
                "Commencez par analyser le sujet ou lire le texte en soulignant les informations localisables. Au brouillon, classez ces informations en deux à quatre idées : c'est la légende organisée. Choisissez ensuite les figurés en appliquant les règles de la sémiologie graphique, et vérifiez que chacun est différent des autres.",
                "Sur le fond de carte, réalisez d'abord les figurés de surface (aplats aux crayons de couleur, légers et réguliers), puis les figurés linéaires, enfin les figurés ponctuels, qui doivent rester visibles au-dessus des surfaces. Ajoutez la nomenclature, le titre, et vérifiez la cohérence entre le croquis et la légende : tout figuré présent sur le croquis doit figurer dans la légende, et inversement. La clarté et la propreté comptent : un croquis surchargé démontre moins bien qu'un croquis sobre.",
              ],
            },
          ],
          keyPoints: [
            "Croquis : représentation simplifiée d'un espace réel sur fond de carte ; schéma : représentation géométrisée de son organisation.",
            "Trois familles de figurés : ponctuels (villes, ports), linéaires (axes, flux), de surface (espaces).",
            "Sémiologie graphique (Jacques Bertin, 1967) : taille pour la hiérarchie, nuances d'une couleur pour l'intensité, couleurs différentes pour des natures différentes.",
            "Légende organisée en deux à quatre parties titrées, qui forment un raisonnement ; titre problématisé.",
            "Ordre de réalisation : surfaces, puis lignes, puis points, puis nomenclature et titre ; vérifier la cohérence avec la légende.",
          ],
          example: {
            statement: "Choisissez les figurés pour représenter les informations suivantes sur un croquis de la Chine : (1) Shanghai, Pékin et Shenzhen, les trois plus grandes métropoles ; (2) Chengdu et Wuhan, métropoles de l'intérieur ; (3) le littoral riche et urbanisé ; (4) les migrations de l'intérieur vers le littoral ; (5) les grands ports.",
            solution: [
              "Identifier la nature de chaque information : des villes (ponctuel), un espace (surface), des flux (linéaire), des équipements (ponctuel).",
              "(1) et (2) : des cercles rouges de taille différente, grands pour Shanghai, Pékin et Shenzhen, plus petits pour Chengdu et Wuhan ; la variation de taille exprime la hiérarchie urbaine.",
              "(3) : un aplat orange foncé sur les provinces littorales ; une couleur chaude et foncée pour l'espace le plus dynamique.",
              "(4) : des flèches orientées de l'intérieur vers le littoral, d'une couleur différente des autres figurés (par exemple violette), pour représenter les flux de migrants.",
              "(5) : un pictogramme d'ancre bleue, qui se distingue des cercles des villes, placé sur les principaux ports (Shanghai, Ningbo-Zhoushan, Shenzhen, Tianjin).",
              "Vérifier : chaque figuré est différent et ne désigne qu'une information ; les cercles et les ancres restent visibles au-dessus de l'aplat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des informations suivantes, indiquez la famille de figurés à utiliser (ponctuel, linéaire, de surface) et la variable visuelle la plus adaptée (taille, valeur, couleur ou forme) : (a) les métropoles françaises classées en trois niveaux ; (b) les lignes à grande vitesse ; (c) les espaces périurbains ; (d) une région touristique et une région industrielle ; (e) les grands ports français ; (f) des espaces ruraux plus ou moins peuplés, en trois niveaux de densité.",
              hint: "Demandez-vous si l'information est un point, une ligne ou une surface, puis si elle exprime une hiérarchie, une intensité ou une différence de nature.",
              solution: [
                "(a) Figuré ponctuel ; variable de taille (trois tailles de cercles) pour exprimer la hiérarchie.",
                "(b) Figuré linéaire ; un trait épais d'une couleur unique (variable de forme et de couleur pour le distinguer des autres lignes).",
                "(c) Figuré de surface ; des hachures ou un aplat clair autour des villes.",
                "(d) Figurés de surface ; deux couleurs différentes, car il s'agit de deux phénomènes de nature différente.",
                "(e) Figuré ponctuel ; une forme différente de celle des villes, par exemple un pictogramme d'ancre.",
                "(f) Figuré de surface ; variable de valeur : trois nuances d'une même couleur, du clair (peu peuplé) au foncé (plus peuplé).",
              ],
            },
            {
              level: 2,
              statement: "Voici, dans le désordre, les éléments de légende d'un croquis intitulé « Les espaces productifs dans le monde : une diversité croissante » : façades maritimes majeures ; grands flux de marchandises entre les pôles ; principaux pôles de commandement (villes mondiales) ; nouvelles régions industrielles d'Asie et du Mexique ; grands foyers de l'agriculture productiviste exportatrice ; passages stratégiques ; technopôles de rang mondial. Organisez ces éléments en une légende de trois parties titrées et proposez un figuré pour chacun.",
              hint: "Une organisation possible distingue les espaces qui commandent, les espaces qui produisent, et les flux qui les relient.",
              solution: [
                "I. Des pôles de commandement et d'innovation : principaux pôles de commandement (grands carrés rouges sur New York, Londres, Tokyo, Paris, Shanghai) ; technopôles de rang mondial (petits triangles rouges, par exemple Silicon Valley, Bangalore).",
                "II. Des espaces de production diversifiés : nouvelles régions industrielles d'Asie et du Mexique (aplat orange) ; grands foyers de l'agriculture productiviste exportatrice (aplat vert, par exemple Corn Belt, Mato Grosso, pampa argentine).",
                "III. Des espaces reliés par des flux : façades maritimes majeures (trait bleu épais le long des côtes d'Asie orientale, de la Northern Range et de la côte est des États-Unis) ; grands flux de marchandises entre les pôles (flèches noires d'épaisseur proportionnelle à l'importance des flux) ; passages stratégiques (petits cercles noirs à Malacca, Suez, Panama, Ormuz).",
                "Logique : la légende va de ceux qui commandent à ceux qui produisent, puis aux flux qui les relient ; chaque figuré est unique.",
              ],
            },
            {
              level: 3,
              statement: "Croquis à partir d'un texte (type bac, contrôle continu). Texte rédigé pour l'exercice : « Les espaces ruraux français sont multifonctionnels et contrastés. Autour de Paris, de Lyon, de Toulouse ou de Bordeaux, les campagnes périurbaines gagnent des habitants qui travaillent en ville. Le Bassin parisien et la Bretagne restent de grandes régions agricoles productives. Les littoraux atlantique et méditerranéen ainsi que les Alpes accueillent touristes, résidences secondaires et retraités. À l'inverse, la diagonale des faibles densités, des Ardennes aux Pyrénées en passant par le Massif central, perd des habitants et des services. Des parcs nationaux, comme celui des Écrins ou des Cévennes, protègent des espaces naturels remarquables. » Consigne : proposez un titre et une légende organisée en trois parties, avec les figurés, puis indiquez dans quel ordre vous réaliserez le croquis.",
              hint: "Relevez dans le texte toutes les informations localisables, puis classez-les : espaces sous influence urbaine, espaces productifs et attractifs, espaces fragiles ou protégés.",
              solution: [
                "Titre : Les espaces ruraux français : des campagnes multifonctionnelles et contrastées.",
                "I. Des campagnes sous l'influence des villes : grandes métropoles (cercles rouges : Paris, Lyon, Toulouse, Bordeaux) ; campagnes périurbaines qui gagnent des habitants (auréoles hachurées en rouge autour de ces villes).",
                "II. Des campagnes productives et attractives : grandes régions agricoles productives (aplat vert : Bassin parisien, Bretagne) ; campagnes touristiques et résidentielles (aplat orange : littoraux atlantique et méditerranéen, Alpes).",
                "III. Des campagnes fragiles ou protégées : diagonale des faibles densités, qui perd des habitants et des services (aplat gris ou jaune pâle, des Ardennes aux Pyrénées par le Massif central) ; parcs nationaux (petits pictogrammes verts foncés : Écrins, Cévennes).",
                "Ordre de réalisation : d'abord les aplats (vert, orange, gris), puis les hachures périurbaines, puis les cercles des métropoles et les pictogrammes des parcs, enfin la nomenclature (noms des villes, des régions, des massifs) et le titre ; vérification finale de la cohérence avec la légende.",
                "Logique : la légende part de l'influence des villes, puis présente les campagnes dynamiques, enfin les campagnes fragiles ou protégées, ce qui répond à l'idée de multifonctionnalité et de contrastes posée par le texte.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque information au figuré le plus adapté.",
            pairs: [
              { left: "Une hiérarchie de villes", right: "Cercles de tailles différentes" },
              { left: "Un flux de migrants", right: "Flèche orientée" },
              { left: "Une région agricole", right: "Aplat de couleur" },
              { left: "Des densités en trois niveaux", right: "Trois nuances d'une même couleur" },
              { left: "Un axe de transport", right: "Trait continu" },
              { left: "Un grand port", right: "Pictogramme d'ancre" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre un croquis et un schéma ?",
              options: ["Le croquis n'a pas de légende", "Le schéma est toujours en couleur", "Le schéma simplifie davantage et géométrise l'organisation de l'espace", "Le croquis représente uniquement des villes et des axes de transport, jamais des espaces"],
              answer: 2,
              why: "Le croquis respecte la localisation sur un fond de carte ; le schéma représente l'organisation de l'espace avec des formes géométriques simplifiées.",
            },
            {
              q: "Quelle variable visuelle faut-il utiliser pour représenter une hiérarchie de villes ?",
              options: ["Des couleurs très différentes", "Des hachures", "Des flèches", "La taille des figurés"],
              answer: 3,
              why: "Selon la sémiologie graphique, la variation de taille exprime une hiérarchie ou une quantité.",
            },
            {
              q: "Qui a formalisé les règles de la sémiologie graphique en 1967 ?",
              options: ["Jacques Bertin", "Jean Gottmann", "Roger Brunet", "Paul Vidal de La Blache, fondateur de l'école française de géographie"],
              answer: 0,
              why: "Le cartographe Jacques Bertin publie Sémiologie graphique en 1967 ; Jean Gottmann a forgé le terme de mégalopole.",
            },
            {
              q: "Dans quel ordre réalise-t-on les figurés sur le fond de carte ?",
              options: ["Points, puis lignes, puis surfaces", "Surfaces, puis lignes, puis points", "Nomenclature d'abord, puis les figurés", "Aucun ordre n'est conseillé : chacun choisit selon le temps qui reste"],
              answer: 1,
              why: "Les aplats viennent d'abord ; les lignes et les points, réalisés ensuite, restent visibles au-dessus des surfaces.",
            },
            {
              q: "Qu'est-ce qu'une légende organisée ?",
              options: ["Une liste des figurés par ordre alphabétique", "Une légende placée au centre du croquis pour être lue en premier par le correcteur", "Un tableau de chiffres", "Une légende en parties titrées qui forment un raisonnement"],
              answer: 3,
              why: "Comme le plan d'une réponse construite, la légende organisée regroupe les figurés en deux à quatre parties qui démontrent une idée.",
            },
          ],
          trap: "Utiliser un même figuré pour deux informations différentes, ou une légende en simple liste sans parties : le croquis devient illisible et ne démontre plus rien.",
          method: "Constituez-vous une « boîte à figurés » personnelle (cercles rouges pour les métropoles, ancre pour les ports, flèches pour les flux, aplats chauds pour les espaces dynamiques) et réutilisez-la dans tous vos croquis : vous gagnerez du temps et éviterez les incohérences.",
        },
      ],
    },
  ],
}
