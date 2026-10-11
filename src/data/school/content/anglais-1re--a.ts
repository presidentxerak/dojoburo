import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-1re',
  chapters: [
    /* ==================================================================== */
    /* IDENTITÉS ET ÉCHANGES                                                */
    /* ==================================================================== */
    {
      id: 'identites-echanges',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'migrations-identites',
          title: 'Migrations et construction des identités',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique des migrations et de l'identité (immigrant, refugee, to settle, heritage, belonging) pour décrire un parcours.",
            "Situer quelques repères historiques et culturels du monde anglophone : Ellis Island, la génération Windrush, le « melting pot ».",
            "Exprimer un changement d'habitude ou de situation avec used to, would, be used to et get used to.",
            "Rendre compte d'un témoignage sur l'exil et le sentiment d'appartenance.",
          ],
          course: [
            {
              heading: "Partir, arriver, s'installer : le lexique des migrations",
              paragraphs: [
                "Le verbe to migrate et le nom migrant désignent de façon générale le fait de se déplacer d'un pays ou d'une région à l'autre. Le point de vue change le mot : on emigrates from son pays d'origine (on en part : an emigrant), on immigrates to un pays d'accueil (on y arrive : an immigrant). « My grandparents emigrated from Ireland » et « They immigrated to Canada » racontent le même départ, vu depuis les deux rives. Un expatriate (expat) part en général par choix, souvent pour son travail, et envisage parfois de revenir.",
                "A refugee fuit la guerre ou la persécution. La Convention de Genève de 1951 relative au statut des réfugiés le définit comme une personne qui craint avec raison d'être persécutée dans son pays du fait de sa race, de sa religion, de sa nationalité, de son appartenance à un certain groupe social ou de ses opinions politiques. An asylum seeker (un demandeur d'asile) a demandé cette protection et attend la décision : if asylum is granted, il obtient le statut de réfugié. On parle aussi d'undocumented migrants (personnes sans papiers) et d'internally displaced people (personnes déplacées à l'intérieur de leur propre pays).",
                "Pour expliquer un départ, on distingue les push factors, qui poussent à partir (poverty, unemployment, war, persecution, natural disasters, climate change), et les pull factors, qui attirent vers un pays (job opportunities, safety, freedom, education, family reunification). Une migration se raconte en étapes : to leave one's homeland, to cross the border, to apply for a visa, to settle in a new country, to find a job, to send money back home, parfois to be deported (être expulsé).",
              ],
              box: { label: "Vocabulaire", text: "homeland (patrie), host country (pays d'accueil), to settle (s'installer), to be granted asylum (obtenir l'asile), roots (racines), heritage (héritage culturel), to belong (appartenir), belonging (sentiment d'appartenance), to fit in (s'intégrer, trouver sa place), to feel torn (se sentir tiraillé)." },
            },
            {
              heading: "Le monde anglophone, terre d'immigration : quelques repères",
              paragraphs: [
                "Les États-Unis se sont construits par vagues d'immigration successives. De 1892 à 1954, le centre d'Ellis Island, dans la baie de New York, a été la principale porte d'entrée des immigrants : plus de 12 millions de personnes y ont été contrôlées, venues surtout d'Irlande, d'Italie, d'Allemagne et d'Europe centrale et orientale. Tout près se dresse la statue de la Liberté, offerte par la France et inaugurée en 1886. Un poème d'Emma Lazarus, « The New Colossus » (1883), gravé sur une plaque de son piédestal, la fait parler : elle accueille les pauvres et les exilés du vieux monde, ces « huddled masses » qui aspirent à respirer librement.",
                "Au Royaume-Uni, une date symbolise l'immigration d'après-guerre : le 22 juin 1948, le navire HMT Empire Windrush accoste à Tilbury, près de Londres, avec à son bord plusieurs centaines de passagers venus des Caraïbes, en particulier de la Jamaïque. Sujets britanniques, ils peuvent alors s'installer librement au Royaume-Uni, qui manque de main-d'œuvre pour se reconstruire. On appelle Windrush generation les personnes arrivées des Caraïbes entre 1948 et 1971. En 2018, le Windrush scandal a révélé que certaines d'entre elles, faute de documents, avaient été privées de leurs droits, menacées d'expulsion, voire expulsées, alors qu'elles vivaient légalement dans le pays depuis des décennies.",
                "D'autres pays anglophones, comme le Canada, l'Australie ou la Nouvelle-Zélande, sont aussi des sociétés d'immigration. Leur histoire comporte des pages sombres : l'Australie a pratiqué jusqu'aux années 1970 la White Australia policy, qui limitait l'immigration non européenne. Étudier les migrations, c'est donc étudier à la fois l'accueil, les rejets et les combats pour l'égalité des droits.",
              ],
              box: { label: "Repère", text: "1886 : inauguration de la statue de la Liberté. 1892-1954 : Ellis Island, porte d'entrée des immigrants aux États-Unis. 22 juin 1948 : arrivée de l'Empire Windrush à Tilbury. 2018 : scandale Windrush au Royaume-Uni." },
            },
            {
              heading: "Construire son identité entre deux cultures",
              paragraphs: [
                "L'identité n'est pas un bloc : elle se compose d'une origine, d'une langue, d'une religion ou non, d'une nationalité, d'une histoire familiale et de choix personnels. Les enfants d'immigrants (the second generation) grandissent souvent entre deux cultures : ils parlent une langue à la maison et une autre à l'école, et peuvent se sentir torn between two worlds, ou au contraire enrichis par une double appartenance. En anglais, on parle de hyphenated identity, une identité « à trait d'union » : Irish-American, Italian-American, British-Asian, Nigerian-British.",
                "Deux images s'opposent pour décrire la société d'accueil. Le melting pot, popularisé par la pièce The Melting Pot d'Israel Zangwill (1908), imagine des cultures qui fondent ensemble pour former une identité nouvelle, ce qui peut aussi signifier l'effacement des origines (assimilation). Le salad bowl ou la mosaic, image souvent associée au Canada, décrit des cultures qui coexistent en gardant leurs différences (integration, multiculturalism).",
                "La littérature anglophone a exploré ces identités. Dans The Namesake (2003), Jhumpa Lahiri raconte l'histoire de Gogol Ganguli, fils d'immigrants bengalis aux États-Unis, qui entretient un rapport difficile avec son prénom. Dans Small Island (2004), Andrea Levy suit des Jamaïcains arrivés à Londres en 1948. Dans Americanah (2013), Chimamanda Ngozi Adichie montre une jeune Nigériane, Ifemelu, qui découvre aux États-Unis ce que signifie être perçue comme noire. Dans White Teeth (2000), Zadie Smith met en scène des familles londoniennes d'origines diverses.",
              ],
              box: { label: "À retenir", text: "Assimilation : se fondre dans la culture d'accueil jusqu'à effacer ses origines (melting pot). Integration : participer pleinement à la société d'accueil en conservant une part de sa culture (salad bowl, mosaic)." },
            },
            {
              heading: "Grammaire : dire ce qui a changé avec used to, would, be used to et get used to",
              paragraphs: [
                "Used to + base verbale exprime une habitude ou un état passés et révolus : « I used to live in Lagos » (je vivais à Lagos, ce n'est plus le cas). À la forme négative et interrogative, used perd son d : « I didn't use to speak English », « Did you use to go back every summer? ». Would + base verbale exprime aussi une action répétée dans le passé, souvent dans un récit nostalgique : « Every Sunday, my grandmother would cook jollof rice ». Mais would ne s'emploie pas pour un état : on dit « I used to have long hair », pas « I would have long hair ».",
                "Be used to + V-ing (ou + nom) signifie être habitué à : « I'm used to speaking two languages », « She is used to the cold ». Get used to + V-ing signifie s'habituer à, c'est-à-dire le processus : « It took me months to get used to driving on the left ». Dans ces deux expressions, to est une préposition : il est suivi d'un nom ou d'un verbe en -ing, jamais de la base verbale.",
              ],
              box: { label: "Règle", text: "used to + base verbale : habitude passée révolue (I used to live in Lagos). would + base verbale : action répétée passée (she would cook). be used to + V-ing : être habitué à (I'm used to waiting). get used to + V-ing : s'habituer à (I got used to waiting)." },
            },
          ],
          keyPoints: [
            "Emigrate from (partir de), immigrate to (arriver dans) ; un refugee fuit la persécution, un asylum seeker attend la décision sur sa demande.",
            "Push factors (guerre, pauvreté, persécution) et pull factors (emploi, sécurité, liberté) expliquent les départs.",
            "Ellis Island (1892-1954) : porte d'entrée de plus de 12 millions d'immigrants aux États-Unis.",
            "22 juin 1948 : l'Empire Windrush arrive des Caraïbes ; en 2018, le scandale Windrush révèle des expulsions injustes.",
            "Melting pot (assimilation) contre salad bowl ou mosaic (integration, multiculturalism) ; hyphenated identity : Irish-American, British-Asian.",
            "used to + base verbale (habitude révolue) ; be used to + V-ing (être habitué) ; get used to + V-ing (s'habituer).",
          ],
          example: {
            statement: "Complétez le témoignage de Priya (texte d'entraînement inventé) avec used to, would, be used to ou get used to, à la forme qui convient : « When I lived in Mumbai, I (1) ___ walk to school with my cousins, and every evening my uncle (2) ___ tell us stories. When we moved to Leeds, everything was different. At first I couldn't (3) ___ the grey weather. Now, after six years, I (4) ___ speaking English all day, but I still speak Gujarati with my mum. »",
            solution: [
              "(1) Il s'agit d'une habitude passée révolue (elle ne vit plus à Mumbai) : « I used to walk to school ». Would serait aussi possible, car c'est une action répétée.",
              "(2) Action répétée dans un récit nostalgique (« every evening ») : « my uncle would tell us stories ». Used to tell est également correct.",
              "(3) Il s'agit du processus d'adaptation, et to est suivi d'un nom (the grey weather) : « I couldn't get used to the grey weather ».",
              "(4) C'est un état présent, être habitué à, suivi d'un verbe en -ing : « I'm used to speaking English all day ».",
              "Réponse : (1) used to (ou would), (2) would (ou used to), (3) get used to, (4) am used to (I'm used to).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez le mot qui convient : a) My great-grandfather (emigrated / immigrated) from Italy in 1905. b) He (emigrated / immigrated) to the United States. c) Thousands of (refugees / expats) fled the war. d) She is waiting for the answer to her application: she is an (asylum seeker / expatriate). e) Low wages and unemployment are (push / pull) factors. f) Many second-generation immigrants feel (torn / settled) between two cultures.",
              hint: "Demandez-vous à chaque fois de quel côté on se place : celui du départ (from) ou celui de l'arrivée (to).",
              solution: [
                "a) emigrated : on parle du départ depuis l'Italie (from).",
                "b) immigrated : on parle de l'arrivée aux États-Unis (to).",
                "c) refugees : ils fuient la guerre, ce ne sont pas des expatriés partis par choix.",
                "d) asylum seeker : elle attend la réponse à sa demande d'asile.",
                "e) push : les bas salaires et le chômage poussent à partir.",
                "f) torn : se sentir tiraillé entre deux cultures (torn between).",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (document inventé pour l'entraînement) puis répondez en français : « My parents came to Toronto from Vietnam in 1990 with two suitcases and no English. My father used to work nights in a factory. I was born here, so for a long time I felt one hundred per cent Canadian. Then, at university, a classmate asked me where I was really from. That question stayed with me. Last year I visited Hanoi for the first time. People there called me “the Canadian”. I realised I would never be completely one thing or the other, and I'm fine with that now. » 1) Présentez le locuteur et sa famille. 2) Relevez une phrase qui montre les débuts difficiles des parents. 3) Quel événement fait naître le doute chez le locuteur ? 4) Que révèle le voyage à Hanoï ? 5) Quelle est sa position finale ?",
              hint: "Repérez les marqueurs de temps (in 1990, for a long time, then, last year, now) : ils structurent l'évolution du locuteur.",
              solution: [
                "1) Le locuteur est né à Toronto de parents vietnamiens arrivés au Canada en 1990 : c'est un enfant de la deuxième génération.",
                "2) « with two suitcases and no English » (deux valises et aucune connaissance de l'anglais) ou « My father used to work nights in a factory » (le père travaillait de nuit à l'usine).",
                "3) À l'université, un camarade lui demande d'où il vient « vraiment » : la question suggère qu'il ne serait pas tout à fait canadien.",
                "4) Au Vietnam, on l'appelle « le Canadien » : il est perçu comme étranger dans les deux pays.",
                "5) Il accepte une identité double, ni entièrement canadienne ni entièrement vietnamienne, et il est désormais en paix avec cela (« I'm fine with that now »).",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Can you belong to two cultures at the same time? » Rédigez une réponse argumentée en anglais, de 120 à 150 mots, en vous appuyant sur des exemples précis.",
              hint: "Organisez la réponse en trois temps : les difficultés (se sentir étranger partout), les richesses (deux langues, deux regards), puis votre position. Reliez les parties par des connecteurs (on the one hand, however, in my opinion).",
              solution: [
                "Plan : introduction qui pose la question ; difficultés de la double appartenance ; avantages ; conclusion personnelle.",
                "Exemples mobilisables : Gogol dans The Namesake de Jhumpa Lahiri, les hyphenated identities (Irish-American, British-Asian), la génération Windrush.",
                "Proposition : « Many young people grow up with the culture of their parents at home and another culture at school. Can they really belong to both? On the one hand, it is not always easy. They may feel torn between two worlds, and they are sometimes treated as foreigners in both countries, like the hero of Jhumpa Lahiri's novel The Namesake, who struggles with his Bengali name in the United States. On the other hand, a double identity is a real asset. Speaking two languages and knowing two ways of life helps you understand other people and adapt more easily. Hyphenated identities such as Irish-American or British-Asian show that cultures can be combined rather than opposed. In my opinion, belonging to two cultures is possible, provided that society accepts that identity is plural. »",
                "Vérification : environ 130 mots, connecteurs logiques variés, un exemple littéraire précis, une prise de position nette en conclusion.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot anglais à sa traduction.",
            pairs: [
              { left: "homeland", right: "patrie, pays natal" },
              { left: "host country", right: "pays d'accueil" },
              { left: "asylum seeker", right: "demandeur d'asile" },
              { left: "to settle", right: "s'installer" },
              { left: "heritage", right: "héritage culturel" },
              { left: "belonging", right: "sentiment d'appartenance" },
            ],
          },
          quiz: [
            { q: "Someone who flees persecution and is protected by the 1951 Geneva Convention is...", options: ["an expatriate", "a refugee", "a tourist", "a commuter"], answer: 1, why: "Le refugee fuit la guerre ou la persécution ; l'expatrié part en général par choix, pour son travail." },
            { q: "Choose the correct sentence.", options: ["I'm used to speak English at home.", "I used to speaking English at home.", "I'm used to speaking English at home.", "I'm used to have spoken English at home."], answer: 2, why: "Dans be used to, to est une préposition : il est suivi d'un verbe en -ing." },
            { q: "The HMT Empire Windrush brought passengers from the Caribbean to Britain in...", options: ["1948", "1918", "1968", "1892"], answer: 0, why: "Le navire accoste à Tilbury le 22 juin 1948 ; ses passagers donnent leur nom à la Windrush generation." },
            { q: "A « hyphenated identity » refers to...", options: ["a name written with a hyphen in official papers", "an identity combining two origins", "a refusal to adopt the host culture", "a temporary visa for students abroad"], answer: 1, why: "Irish-American ou British-Asian associent deux appartenances reliées par un trait d'union." },
            { q: "« Every summer, my grandfather ___ us stories about Jamaica. » (repeated past action)", options: ["is used to telling", "was used to tell", "gets used to tell", "would tell"], answer: 3, why: "Would + base verbale exprime une action répétée dans le passé ; was used to tell est incorrect." },
          ],
          trap: "Confondre used to + base verbale (habitude passée : I used to live) avec be used to + V-ing (être habitué : I'm used to living), et écrire « I'm used to live ».",
          method: "Pour présenter un parcours migratoire, suivez toujours le même fil : raisons du départ (push factors), arrivée et installation, difficultés, puis identité construite. Préparez cinq verbes clés (to leave, to cross, to settle, to fit in, to belong) que vous réemploierez à l'oral comme à l'écrit.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'global-english',
          title: 'L’anglais, langue mondiale : « Global English »',
          minutes: 30,
          objectives: [
            "Décrire la place de l'anglais dans le monde à l'aide du modèle des trois cercles de Braj Kachru.",
            "Identifier les principales différences entre anglais britannique et anglais américain (orthographe, lexique, grammaire).",
            "Discuter des enjeux d'une langue mondiale : lingua franca, diversité des variétés, domination culturelle.",
            "Comparer à l'aide des comparatifs et des superlatifs (the most widely spoken, more and more, the more... the more).",
          ],
          course: [
            {
              heading: "Comment l'anglais est devenu une langue mondiale",
              paragraphs: [
                "L'anglais s'est diffusé en deux grandes étapes. Du XVIIe au XXe siècle, l'expansion de l'Empire britannique l'a implanté en Amérique du Nord, dans les Caraïbes, en Afrique, en Asie du Sud et en Océanie. Après 1945, la puissance des États-Unis (économie, recherche scientifique, cinéma, musique, puis internet et industrie numérique) en a fait la langue des échanges internationaux. On estime aujourd'hui qu'environ 1,5 milliard de personnes parlent anglais, dont un peu moins de 400 millions comme langue maternelle : les locuteurs non natifs sont donc largement majoritaires.",
                "L'anglais est une langue officielle ou co-officielle dans de nombreux pays, comme l'Inde, le Nigeria, l'Afrique du Sud, Singapour ou les Philippines. Il sert de lingua franca, c'est-à-dire de langue commune entre personnes qui n'ont pas la même langue maternelle : une ingénieure brésilienne et un client japonais négocient en anglais. C'est aussi la langue de l'aviation civile internationale (l'Organisation de l'aviation civile internationale exige des pilotes des vols internationaux un niveau d'anglais minimal depuis 2008) et de la majorité des publications scientifiques.",
              ],
              box: { label: "Définition", text: "Une lingua franca est une langue utilisée pour communiquer entre des personnes de langues maternelles différentes. On parle aujourd'hui d'English as a Lingua Franca (ELF) : un anglais d'usage international, dont la plupart des utilisateurs ne sont pas natifs." },
            },
            {
              heading: "Les trois cercles de Kachru",
              paragraphs: [
                "En 1985, le linguiste Braj Kachru a proposé de représenter l'anglais dans le monde par trois cercles concentriques. L'inner circle (cercle intérieur) regroupe les pays où l'anglais est la langue maternelle de la majorité : Royaume-Uni, États-Unis, Canada anglophone, Australie, Nouvelle-Zélande, Irlande. L'outer circle (cercle extérieur) rassemble les pays où l'anglais, hérité de la colonisation, est une langue seconde, officielle et utilisée dans l'administration, l'enseignement ou la justice : Inde, Nigeria, Kenya, Singapour, Philippines.",
                "L'expanding circle (cercle en expansion) réunit les pays où l'anglais est une langue étrangère, apprise à l'école et utilisée pour les échanges internationaux : France, Chine, Japon, Brésil, Russie. C'est ce cercle qui compte le plus de locuteurs, et il ne cesse de grandir. Le modèle a des limites (il classe des pays et non des personnes, et certains pays de l'outer circle comptent de nombreux locuteurs natifs), mais il montre bien qu'il n'existe pas un seul anglais : la langue appartient désormais à tous ceux qui la parlent.",
              ],
              box: { label: "À retenir", text: "Inner circle : langue maternelle (Royaume-Uni, États-Unis, Australie). Outer circle : langue seconde héritée de la colonisation (Inde, Nigeria, Singapour). Expanding circle : langue étrangère (France, Chine, Brésil)." },
            },
            {
              heading: "Des anglais : britannique, américain et bien d'autres",
              paragraphs: [
                "L'orthographe américaine a été en partie simplifiée par le lexicographe Noah Webster, dont l'American Dictionary of the English Language paraît en 1828 : colour devient color, centre devient center, travelled devient traveled, defence devient defense. Le lexique diffère aussi : flat / apartment, lift / elevator, pavement / sidewalk, autumn / fall, biscuit / cookie, rubbish / trash, holiday / vacation, underground / subway, queue / line, mobile phone / cell phone, petrol / gas, trousers / pants (attention : pants désigne un caleçon en anglais britannique).",
                "Quelques différences grammaticales sont à connaître. Les Américains emploient plus volontiers le prétérit là où les Britanniques préfèrent le present perfect : « Did you eat yet? » (US) / « Have you eaten yet? » (UK). Le participe passé de get est gotten en américain, got en britannique. Les noms collectifs (team, government, family) peuvent être suivis d'un verbe au pluriel en anglais britannique (« The team are playing well »), rarement en américain.",
                "Au-delà de ces deux normes de référence, il existe de nombreuses variétés, les World Englishes. L'anglais indien a créé to prepone (avancer un rendez-vous, contraire de to postpone) ; l'anglais de Singapour, familièrement appelé Singlish, ponctue les phrases de la particule « lah » ; l'anglais australien abrège volontiers (arvo pour afternoon, brekkie pour breakfast). Ces variétés ne sont pas des erreurs : ce sont des normes locales, avec leur propre cohérence.",
              ],
              box: { label: "Repère", text: "Orthographe UK / US : colour / color, centre / center, travelled / traveled, defence / defense, programme / program. Le suffixe -ize (organize) existe aussi en anglais britannique, à côté de -ise (organise)." },
            },
            {
              heading: "Une langue mondiale en débat",
              paragraphs: [
                "Pour ses défenseurs, une langue commune facilite les échanges, la coopération scientifique et la mobilité. En 2004, le Français Jean-Paul Nerrière a même proposé le « globish », un anglais simplifié d'environ 1 500 mots destiné aux échanges professionnels entre non-natifs. Le linguiste britannique David Crystal, dans English as a Global Language (1997), analyse les raisons historiques, politiques et culturelles de cette domination.",
                "D'autres dénoncent une forme de domination. Robert Phillipson parle de « linguistic imperialism » (Linguistic Imperialism, 1992) : la diffusion de l'anglais favoriserait les pays anglophones et menacerait les autres langues. En France, la Commission d'enrichissement de la langue française propose des équivalents aux anglicismes, comme courriel pour e-mail ou mot-dièse pour hashtag. Mais les échanges vont dans les deux sens : l'anglais a lui-même emprunté bungalow et shampoo à l'hindi, tsunami au japonais, safari au swahili, et des milliers de mots au français depuis la conquête normande de 1066.",
                "Pour comparer, mobilisez les comparatifs et les superlatifs : « English is the most widely spoken language in the world », « Mandarin has more native speakers than English », « English is not as widely spoken as people think in rural areas ». Pour exprimer une évolution : « More and more people learn English online » ; pour une corrélation : « The more you read, the more vocabulary you learn ».",
              ],
              box: { label: "Règle", text: "Adjectif court : -er / the -est (cheaper, the cheapest). Adjectif long : more / the most (more useful, the most useful). Égalité : as... as. Évolution : more and more, -er and -er (bigger and bigger). Corrélation : the more..., the more... ." },
            },
          ],
          keyPoints: [
            "Environ 1,5 milliard de locuteurs de l'anglais, dont un peu moins de 400 millions de natifs : les non-natifs sont majoritaires.",
            "Diffusion : Empire britannique (XVIIe-XXe siècles), puis puissance américaine après 1945.",
            "Kachru (1985) : inner circle (langue maternelle), outer circle (langue seconde), expanding circle (langue étrangère).",
            "UK / US : colour / color, flat / apartment, lift / elevator, autumn / fall, Have you eaten yet? / Did you eat yet?",
            "Débat : lingua franca utile à tous ou « linguistic imperialism » (Phillipson, 1992) menaçant la diversité des langues ?",
            "Comparer : the most widely spoken, more... than, as... as, more and more, the more..., the more... .",
          ],
          example: {
            statement: "Réécrivez ce message d'un étudiant britannique en anglais américain, puis justifiez chaque modification : « I've just moved into a new flat. The lift is broken, so I carried my rubbish down to the pavement. Then I queued for an hour at the shop to buy a new mobile. My favourite colour? Grey, like London in autumn! »",
            solution: [
              "Lexique : flat devient apartment, lift devient elevator, rubbish devient trash (ou garbage), pavement devient sidewalk, queued devient stood in line (ou waited in line), mobile devient cell phone, autumn devient fall.",
              "Orthographe : favourite devient favorite, colour devient color, grey devient gray (la forme américaine la plus courante).",
              "Grammaire : I've just moved reste correct en américain, mais on entend aussi souvent le prétérit : I just moved.",
              "Shop peut rester, mais store est plus courant en américain.",
              "Réponse : « I just moved into a new apartment. The elevator is broken, so I carried my trash down to the sidewalk. Then I stood in line for an hour at the store to buy a new cell phone. My favorite color? Gray, like London in the fall! »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'équivalent américain de ces mots britanniques : a) biscuit b) holiday c) underground d) petrol e) trousers f) centre (orthographe) g) travelled (orthographe).",
              hint: "Pour l'orthographe, souvenez-vous des simplifications de Noah Webster : -our devient -or, -re devient -er, la consonne finale ne double pas devant -ed si la syllabe n'est pas accentuée.",
              solution: [
                "a) biscuit : cookie.",
                "b) holiday : vacation.",
                "c) underground : subway.",
                "d) petrol : gas (gasoline).",
                "e) trousers : pants.",
                "f) centre : center.",
                "g) travelled : traveled.",
              ],
            },
            {
              level: 2,
              statement: "Classez ces pays dans les trois cercles de Kachru et justifiez en une phrase en anglais pour chaque cercle : Australia, India, Japan, Nigeria, Ireland, Brazil, Singapore, Germany.",
              hint: "Posez-vous deux questions : l'anglais est-il la langue maternelle de la majorité ? Sinon, a-t-il un statut officiel hérité de la colonisation britannique ?",
              solution: [
                "Inner circle : Australia, Ireland. Justification : « English is the first language of most people in these countries. »",
                "Outer circle : India, Nigeria, Singapore. Justification : « English, inherited from British colonial rule, is an official second language used in government, education and the courts. »",
                "Expanding circle : Japan, Brazil, Germany. Justification : « English has no official status there; it is learnt at school as a foreign language and used for international communication. »",
                "Remarque : en Irlande, l'irlandais (gaélique) est la première langue officielle selon la Constitution, mais l'anglais est la langue maternelle de la grande majorité de la population, d'où son classement dans l'inner circle.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Is Global English a threat to other languages? » Rédigez un essai argumenté en anglais de 130 à 160 mots.",
              hint: "Opposez les avantages d'une lingua franca (communication, science, mobilité) au risque d'uniformisation (anglicismes, langues menacées), puis nuancez : l'anglais lui-même se diversifie et emprunte aux autres langues.",
              solution: [
                "Plan : introduction (chiffres et statut de l'anglais) ; arguments en faveur d'une langue commune ; risques pour les autres langues ; conclusion nuancée.",
                "Références utiles : la notion de lingua franca, Robert Phillipson et le « linguistic imperialism », les World Englishes (Singlish, anglais indien), les emprunts de l'anglais.",
                "Proposition : « Today, about 1.5 billion people speak English, and most of them are not native speakers. Does this success endanger other languages? On the one hand, a common language is extremely useful. Scientists, pilots and business people from all over the world can work together thanks to English. On the other hand, some experts, like Robert Phillipson, speak of linguistic imperialism: English may push other languages aside, especially in universities and on the internet, and many young people prefer English words to words in their own language. However, Global English is not a single, uniform language. It is changing as it spreads, giving birth to new varieties such as Singlish or Indian English, and it keeps borrowing words from other languages. In my view, English is not a threat in itself: the danger comes when people stop using and teaching their own language. »",
                "Vérification : environ 140 mots, une référence précise (Phillipson), des connecteurs (On the one hand, On the other hand, However), une conclusion personnelle nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'anglais dans le monde.",
            statements: [
              { text: "Les locuteurs natifs de l'anglais sont plus nombreux que les locuteurs non natifs.", true: false, why: "C'est l'inverse : environ 1,5 milliard de locuteurs, dont un peu moins de 400 millions de natifs." },
              { text: "En Inde, l'anglais appartient à l'outer circle du modèle de Kachru.", true: true, why: "Hérité de la colonisation, l'anglais y est une langue seconde utilisée dans l'administration et l'enseignement." },
              { text: "Color et center sont des fautes d'orthographe.", true: false, why: "Ce sont les orthographes américaines, simplifiées notamment par Noah Webster (1828)." },
              { text: "En anglais britannique, pants peut désigner un sous-vêtement.", true: true, why: "Le pantalon se dit trousers au Royaume-Uni ; pants y désigne un caleçon ou une culotte." },
              { text: "L'anglais n'emprunte jamais de mots aux autres langues.", true: false, why: "Il a emprunté des milliers de mots : au français depuis 1066, mais aussi bungalow (hindi) ou tsunami (japonais)." },
              { text: "Une lingua franca est une langue commune à des personnes de langues maternelles différentes.", true: true, why: "C'est la définition : l'anglais joue aujourd'hui ce rôle dans de nombreux domaines." },
            ],
          },
          quiz: [
            { q: "In Kachru's model, France belongs to...", options: ["the inner circle", "the outer circle", "the expanding circle"], answer: 2, why: "En France, l'anglais est une langue étrangère apprise à l'école : c'est l'expanding circle." },
            { q: "What is the American word for « autumn »?", options: ["fall", "harvest", "season", "spring"], answer: 0, why: "Fall est le mot américain courant ; autumn est plus fréquent en anglais britannique." },
            { q: "Which sentence is typically American?", options: ["Have you finished your homework yet?", "Did you finish your homework yet?", "The team are playing really well today.", "I've got to take the lift to the third floor."], answer: 1, why: "Les Américains emploient volontiers le prétérit avec yet, là où les Britanniques préfèrent le present perfect." },
            { q: "Who used the phrase « linguistic imperialism » in a 1992 book?", options: ["David Crystal", "Noah Webster", "Jean-Paul Nerrière", "Robert Phillipson"], answer: 3, why: "Robert Phillipson, dans Linguistic Imperialism (1992), dénonce la domination de l'anglais." },
            { q: "Complete: « English is ___ spoken language in the world. »", options: ["the more widely", "the most widely", "the much widely", "more widely than"], answer: 1, why: "Le superlatif d'un adverbe long se forme avec the most : the most widely spoken." },
          ],
          trap: "Considérer l'anglais américain ou les World Englishes comme des « fautes » par rapport à l'anglais britannique, ou mélanger les deux normes dans une même copie (colour et center, flat et elevator).",
          method: "Choisissez une norme, britannique ou américaine, et tenez-vous-y dans toute votre copie. Pour réviser, construisez un tableau à deux colonnes UK / US que vous enrichissez à chaque série, film ou article rencontré.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'voyages-echanges',
          title: 'Voyager, étudier à l’étranger, échanger',
          minutes: 30,
          objectives: [
            "Distinguer et employer travel, trip, journey et voyage, ainsi que le lexique des séjours à l'étranger.",
            "Présenter les dispositifs de mobilité (Erasmus+, séjour au pair, année de césure) et leurs enjeux.",
            "Analyser les apports et les limites d'un séjour à l'étranger : choc culturel, compétences, empreinte carbone.",
            "Rédiger un courriel de candidature formel en respectant les conventions anglophones.",
          ],
          course: [
            {
              heading: "Voyager : des mots précis",
              paragraphs: [
                "Le français « voyage » se traduit de plusieurs façons. Travel est surtout un verbe (to travel abroad) ou un nom indénombrable désignant l'activité en général (« Travel broadens the mind ») : on ne dit pas « a travel ». A trip est un déplacement avec retour, souvent court, pour le loisir ou le travail : a school trip, a business trip, a day trip. A journey insiste sur le trajet d'un point à un autre, parfois long : « The journey from London to Edinburgh takes four hours by train ». A voyage est un long voyage en mer ou dans l'espace : the voyages of Captain Cook.",
                "Le lexique pratique est indispensable : to book a ticket (réserver), a return ticket (aller-retour, round-trip ticket en américain), a single ticket (aller simple, one-way ticket en américain), to check in (s'enregistrer), a boarding pass (une carte d'embarquement), a host family (une famille d'accueil), to be homesick (avoir le mal du pays), jet lag (le décalage horaire). Attention : luggage, baggage, accommodation (en anglais britannique), information et advice sont indénombrables : « a piece of luggage », « some advice ».",
              ],
              box: { label: "À retenir", text: "travel : l'activité (indénombrable) ou le verbe. trip : déplacement avec retour (a school trip). journey : trajet d'un point à un autre (a long journey). voyage : long voyage en mer ou dans l'espace." },
            },
            {
              heading: "Du Grand Tour à Erasmus+ : étudier et se former ailleurs",
              paragraphs: [
                "Aux XVIIe et XVIIIe siècles, les jeunes aristocrates britanniques accomplissaient le Grand Tour : un long voyage à travers l'Europe, en particulier la France et l'Italie, pour découvrir l'art antique et de la Renaissance, apprendre les langues et parfaire leur éducation. C'est de cette pratique que vient le mot tourist.",
                "Aujourd'hui, la mobilité s'est démocratisée. Le programme européen Erasmus, créé en 1987, porte le nom de l'humaniste Érasme de Rotterdam ; il a d'abord permis à des étudiants de passer un semestre ou une année dans une autre université européenne. Devenu Erasmus+ en 2014, il s'adresse aussi aux lycéens, aux apprentis, aux enseignants et aux jeunes en formation. Après le Brexit, le Royaume-Uni a quitté Erasmus+ et créé en 2021 son propre programme, le Turing Scheme, du nom du mathématicien Alan Turing.",
                "D'autres formules existent : le séjour au pair (garder des enfants dans une famille d'accueil en échange du logement et d'une petite rémunération), le working holiday visa, qui permet à de jeunes adultes de travailler et de voyager pendant un an dans des pays comme l'Australie, la Nouvelle-Zélande ou le Canada, ou le gap year, l'année de césure, tradition britannique entre le lycée et l'université, consacrée au voyage, au bénévolat ou au travail.",
              ],
              box: { label: "Repère", text: "XVIIe-XVIIIe siècles : le Grand Tour des jeunes aristocrates britanniques. 1987 : création d'Erasmus. 2014 : Erasmus+. 2021 : le Royaume-Uni lance le Turing Scheme après sa sortie d'Erasmus+." },
            },
            {
              heading: "Ce qu'un séjour change : choc culturel, compétences et limites",
              paragraphs: [
                "Vivre à l'étranger provoque souvent un culture shock, notion popularisée par l'anthropologue Kalervo Oberg dans les années 1950. On décrit fréquemment plusieurs phases : la lune de miel (honeymoon), où tout semble fascinant ; la crise (frustration), quand les différences de langue, d'horaires ou de codes sociaux deviennent pesantes ; l'ajustement (adjustment) ; enfin l'adaptation (adaptation), où l'on se sent à l'aise. Au retour, certains vivent même un reverse culture shock dans leur propre pays.",
                "Les bénéfices sont souvent mis en avant : progrès linguistiques, autonomie (independence), ouverture d'esprit (open-mindedness), capacité d'adaptation (adaptability), compétences interculturelles appréciées des employeurs. Mais la mobilité a aussi ses limites : elle coûte cher et reste inégalement accessible, et les voyages en avion ont une forte empreinte carbone. Le mot suédois flygskam (la honte de prendre l'avion), apparu vers 2018, et la mode du slow travel (voyager lentement, en train par exemple) traduisent cette prise de conscience, comme les débats sur le surtourisme (overtourism).",
              ],
              box: { label: "Vocabulaire", text: "to broaden one's horizons (élargir ses horizons), to step out of one's comfort zone (sortir de sa zone de confort), open-minded (ouvert d'esprit), to adapt to (s'adapter à), a carbon footprint (une empreinte carbone), overtourism (le surtourisme)." },
            },
            {
              heading: "Écrire un courriel de candidature formel",
              paragraphs: [
                "Pour postuler à un échange, un stage ou un emploi d'été, le courriel formel suit des conventions strictes. Si vous ne connaissez pas le nom du destinataire, commencez par « Dear Sir or Madam, » et terminez par « Yours faithfully, » (usage britannique). Si vous le connaissez, écrivez « Dear Ms Taylor, » ou « Dear Mr Patel, » et terminez par « Yours sincerely, ». En américain, « Sincerely, » convient dans les deux cas. Ms est la forme neutre pour une femme, quelle que soit sa situation familiale.",
                "Le corps du message est organisé : la raison du courriel (« I am writing to apply for the position of... advertised on your website »), une brève présentation, la motivation et les qualités illustrées par des exemples, puis la disponibilité et les pièces jointes (« Please find attached my CV »). On termine par « I look forward to hearing from you », où to est une préposition suivie de V-ing. Le registre est soutenu : pas de contractions (I am, et non I'm), pas d'abréviations familières, des phrases complètes.",
              ],
              box: { label: "Règle", text: "Nom inconnu : Dear Sir or Madam, ... Yours faithfully, (UK). Nom connu : Dear Ms Taylor, ... Yours sincerely, (UK). Formule finale : I look forward to hearing from you. Pas de contractions dans un courriel formel." },
            },
          ],
          keyPoints: [
            "travel (activité, indénombrable), trip (aller-retour), journey (trajet), voyage (en mer ou dans l'espace).",
            "luggage, accommodation, information et advice sont indénombrables : a piece of luggage, some advice.",
            "Grand Tour (XVIIe-XVIIIe siècles), Erasmus (1987), Erasmus+ (2014), Turing Scheme britannique (2021).",
            "Culture shock (Kalervo Oberg) : lune de miel, crise, ajustement, adaptation.",
            "Bénéfices (langue, autonomie, ouverture) et limites (coût, inégalités, empreinte carbone, overtourism).",
            "Courriel formel : Dear Sir or Madam / Yours faithfully ; Dear Ms Taylor / Yours sincerely ; I look forward to hearing from you.",
          ],
          example: {
            statement: "Ce message, adressé au responsable (dont vous ignorez le nom) d'un programme d'échange, est trop familier. Repérez les problèmes et proposez une version formelle : « Hi! I'm Léa, I'm 17 and I wanna do your exchange programme in Canada cos I love travelling. I've got loads of experience with kids. Can't wait to hear from you! Bye, Léa »",
            solution: [
              "Formule d'appel : « Hi! » est familier ; le nom du destinataire étant inconnu, on écrit « Dear Sir or Madam, ».",
              "Registre : wanna, cos, loads of, Can't wait sont familiers ; on les remplace par would like to, because, considerable, I look forward to.",
              "Contractions : I'm, I've, Can't sont à éviter ; on écrit I am, I have.",
              "Contenu : il faut annoncer l'objet du message, justifier la motivation par des exemples et conclure par la formule attendue, puis « Yours faithfully, ».",
              "Réponse : « Dear Sir or Madam, I am writing to apply for your exchange programme in Canada. I am a seventeen-year-old French student and I am particularly interested in discovering Canadian culture and improving my English. I have looked after children regularly for the past two years. I look forward to hearing from you. Yours faithfully, Léa Martin »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec travel, trip, journey ou voyage (à la forme correcte) : a) Our class is going on a three-day ___ to London. b) The ___ from Paris to Marseille takes about three hours by high-speed train. c) Air ___ produces large amounts of CO₂. d) The first ___ of the Titanic ended in disaster in 1912. e) I love ___ing alone.",
              hint: "Demandez-vous si l'on parle d'un aller-retour (trip), d'un trajet (journey), d'une traversée en mer (voyage) ou de l'activité en général (travel).",
              solution: [
                "a) trip : un déplacement de trois jours avec retour (a school trip).",
                "b) journey : on parle du trajet entre deux villes et de sa durée.",
                "c) travel : l'activité en général, indénombrable (air travel).",
                "d) voyage : une traversée en mer ; le Titanic a coulé en avril 1912 lors de son voyage inaugural (maiden voyage).",
                "e) travelling (travel + -ing ; traveling en américain) : le verbe, après love.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (document inventé pour l'entraînement) et répondez en français : « When I arrived in Dublin for my Erasmus year, everything felt exciting: the pubs, the music, the friendly people. After two months, though, I started missing home. I couldn't understand the Irish accent, the sun set at four in the afternoon and I felt lonely. Then I joined the university choir. Little by little, I made friends and my English improved. Now that I'm back in Lyon, I sometimes feel like a stranger in my own city. » 1) Où et dans quel cadre la locutrice a-t-elle séjourné ? 2) Identifiez les phases du choc culturel décrites, avec une citation pour chacune. 3) Quel phénomène décrit la dernière phrase ?",
              hint: "Appuyez-vous sur les marqueurs de temps (When I arrived, After two months, Then, Now) : chacun ouvre une nouvelle phase.",
              solution: [
                "1) Elle a passé une année d'études à Dublin, en Irlande, dans le cadre du programme Erasmus.",
                "2) Lune de miel : « everything felt exciting ». Crise : « I started missing home », « I felt lonely » (accent difficile, nuits longues). Ajustement puis adaptation : « Little by little, I made friends and my English improved », après son entrée dans la chorale.",
                "3) Le choc culturel inversé (reverse culture shock) : de retour à Lyon, elle se sent étrangère dans sa propre ville.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Vous avez vu cette annonce (annonce inventée) : « Summer camp in Vermont, USA, seeks international counsellors (17+) to organise outdoor activities for children aged 8 to 12, July-August. Contact: Mr David Brooks, Camp Director. » Rédigez en anglais un courriel de candidature de 120 à 150 mots.",
              hint: "Le nom du destinataire est connu : choisissez la formule d'appel et la formule finale en conséquence. Suivez le plan : objet, présentation, motivation et expérience, disponibilité, formule de conclusion.",
              solution: [
                "Formules : « Dear Mr Brooks, » puis « Yours sincerely, » (nom connu) ; pas de contractions.",
                "Plan : raison du courriel, présentation, expérience avec les enfants et activités de plein air, motivation, disponibilité et pièce jointe, formule de conclusion.",
                "Proposition : « Dear Mr Brooks, I am writing to apply for the position of international counsellor advertised on your website. I am a seventeen-year-old French student and I am currently in my penultimate year of secondary school. For the past two years, I have helped to run a children's football club in my town every Wednesday, so I am used to organising games and looking after groups of young children. I also love hiking and canoeing. Working in Vermont would allow me to improve my English, discover American culture and share my own culture with the children. I am available from 1 July to 25 August. Please find attached my CV and a reference from my football coach. I look forward to hearing from you. Yours sincerely, Thomas Garnier »",
                "Vérification : environ 130 mots, registre formel sans contractions, formule finale adaptée au nom connu, expérience précise, réemploi de be used to + V-ing et de I look forward to hearing.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les éléments d'un courriel de candidature formel.",
            items: [
              "Objet du message (Subject: Application for a summer job)",
              "Formule d'appel (Dear Ms Taylor,)",
              "Raison du courriel (I am writing to apply for...)",
              "Présentation, expérience et motivation",
              "Disponibilité et pièces jointes (Please find attached my CV)",
              "Formule de conclusion (I look forward to hearing from you.)",
              "Formule de politesse et signature (Yours sincerely, Léa Martin)",
            ],
          },
          quiz: [
            { q: "Which word is uncountable in English?", options: ["trip", "suitcase", "luggage", "ticket"], answer: 2, why: "Luggage est indénombrable : on dit a piece of luggage, jamais « a luggage » ni « luggages »." },
            { q: "You don't know the name of the person you are writing to. How do you end a formal British email?", options: ["Yours faithfully,", "Yours sincerely,", "Lots of love and hugs,", "See you soon,"], answer: 0, why: "Après Dear Sir or Madam, l'usage britannique impose Yours faithfully ; Yours sincerely suit un nom connu." },
            { q: "The European Erasmus programme was created in...", options: ["1957", "1987", "2004", "2014"], answer: 1, why: "Erasmus a été créé en 1987 ; il est devenu Erasmus+ en 2014." },
            { q: "Complete: « I look forward to ___ from you. »", options: ["hear", "be hearing", "have heard", "hearing"], answer: 3, why: "Dans look forward to, to est une préposition : elle est suivie d'un verbe en -ing." },
            { q: "During the « honeymoon » phase of culture shock, a traveller usually feels...", options: ["lonely and homesick", "angry about local customs", "excited by everything new", "completely bored with the country"], answer: 2, why: "La phase de lune de miel est celle de l'enthousiasme ; la frustration et le mal du pays viennent ensuite." },
          ],
          trap: "Écrire « a travel » ou « a luggage », et mélanger les conventions du courriel formel (Dear Sir or Madam suivi de Yours sincerely, ou des contractions comme I'm et I'd dans une candidature).",
          method: "Avant d'envoyer un courriel formel, vérifiez quatre points dans l'ordre : la formule d'appel et la formule finale sont-elles accordées (nom connu ou non) ? Reste-t-il des contractions ? L'objet du message apparaît-il dès la première phrase ? La formule I look forward to hearing from you est-elle bien écrite ?",
        },
      ],
    },

    /* ==================================================================== */
    /* RACONTER ET SITUER DANS LE TEMPS                                     */
    /* ==================================================================== */
    {
      id: 'temps-du-recit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'present-perfect-preterit',
          title: 'Prétérit ou « present perfect » ?',
          minutes: 35,
          objectives: [
            "Choisir entre le prétérit et le present perfect selon le lien établi entre le passé et le présent.",
            "Employer for, since, ago, already, yet, ever, never et just avec le temps qui convient.",
            "Traduire correctement « depuis » et « il y a » en anglais.",
            "Utiliser le present perfect en be + -ing (have been + V-ing) pour insister sur une activité qui dure.",
          ],
          course: [
            {
              heading: "Le prétérit : un passé coupé du présent",
              paragraphs: [
                "Le prétérit (simple past) se forme avec -ed pour les verbes réguliers (worked, visited, stopped) et avec une forme propre pour les verbes irréguliers, qu'il faut apprendre (go / went, see / saw, write / wrote, take / took). À la forme négative et interrogative, on emploie l'auxiliaire did suivi de la base verbale : « She didn't go », « Did you see it? » (et non « Did you saw »).",
                "Le prétérit présente une action ou un état terminés, situés à un moment du passé coupé du présent. Le moment est souvent précisé par un marqueur : yesterday, last week, in 2019, three days ago, when I was a child, at that time. « I saw that film last night » ; « Shakespeare wrote Hamlet around 1600 » ; « Rosa Parks refused to give up her seat in 1955 ». C'est aussi le temps du récit : les événements s'enchaînent au prétérit, dans l'ordre où ils se sont produits.",
              ],
              box: { label: "Règle", text: "Prétérit : action datée ou terminée, coupée du présent. Marqueurs : yesterday, last..., ago, in + année, when + passé, at that time. Négation et question : did + base verbale (I didn't go, Did you go?)." },
            },
            {
              heading: "Le present perfect : faire le bilan au moment présent",
              paragraphs: [
                "Le present perfect se forme avec have ou has suivi du participe passé : « I have finished », « She has never been to Wales ». Il ne situe pas l'action à un moment précis du passé : il fait un bilan au moment où l'on parle. L'action est passée, mais elle compte pour le présent. Ce n'est donc pas un simple équivalent du passé composé français.",
                "On l'emploie dans quatre cas principaux. Un résultat visible maintenant : « I've lost my keys » (je ne peux pas rentrer). Une expérience de vie, souvent avec ever et never : « Have you ever been to Scotland? », « I've never seen snow ». Une période qui n'est pas terminée : today, this week, this year, so far, recently, lately (« I've drunk three coffees today »). Une action qui vient de se produire ou attendue, avec just, already et yet : « She has just arrived », « I've already eaten », « Have you finished yet? », « I haven't finished yet ».",
                "Le present perfect est incompatible avec un marqueur de temps daté : « I have seen him yesterday » est incorrect, il faut écrire « I saw him yesterday ». Notez aussi la différence entre been et gone : « He has gone to London » (il y est parti et il y est encore), « He has been to London » (il y est allé et en est revenu : c'est une expérience).",
              ],
              box: { label: "À retenir", text: "Present perfect = have / has + participe passé. Résultat présent (I've lost my keys), expérience (ever, never), période non terminée (today, this year, so far), just, already, yet. Jamais avec yesterday, ago, last week ou une date." },
            },
            {
              heading: "Traduire « depuis » et « il y a »",
              paragraphs: [
                "Quand une action ou un état a commencé dans le passé et dure encore, le français emploie le présent avec « depuis », mais l'anglais emploie le present perfect. « J'habite à Lille depuis cinq ans » se dit « I have lived in Lille for five years » ; « depuis 2021 » se dit « since 2021 ». For est suivi d'une durée (for two hours, for ages, for a long time) ; since est suivi du point de départ (since Monday, since 2021, since I was ten). La question correspondante est « How long have you lived here? ».",
                "« Il y a » suivi d'une durée situe un événement terminé dans le passé : on emploie ago, placé après la durée, avec le prétérit. « J'ai emménagé ici il y a cinq ans » se dit « I moved here five years ago ». On peut relier les deux idées : « I moved here five years ago, so I have lived here for five years », ou encore « It's been five years since I moved here ». Autre tournure à connaître : « C'est la première fois que je visite Londres » se dit « It's the first time I've visited London », avec un present perfect.",
              ],
              box: { label: "Règle", text: "depuis + durée : present perfect + for (I've lived here for five years). depuis + point de départ : present perfect + since (since 2021). il y a + durée : prétérit + ago (I moved here five years ago). C'est la première fois que : It's the first time I've..." },
            },
            {
              heading: "Have been + V-ing : insister sur l'activité et sa durée",
              paragraphs: [
                "Le present perfect en be + -ing se forme avec have / has been + V-ing. Il met l'accent sur l'activité elle-même, sur sa durée, souvent avec un résultat visible : « I've been waiting for an hour! » ; « You look exhausted. Have you been running? » ; « How long have you been learning English? ». Comparez « I've written three emails » (résultat chiffré, simple) et « I've been writing emails all morning » (activité qui a occupé la matinée, be + -ing).",
                "Les verbes d'état (know, be, like, love, want, believe, understand, own) ne se mettent pas en be + -ing : on dit « I've known her for ten years », jamais « I've been knowing her ». Enfin, l'anglais américain emploie souvent le prétérit avec just, already et yet (« Did you eat yet? », « I just saw him ») : c'est correct en américain, mais restez cohérent dans une même copie.",
              ],
              box: { label: "À retenir", text: "have / has been + V-ing : activité qui dure jusqu'à maintenant ou dont on voit les traces (I've been running). Pas de be + -ing avec les verbes d'état : I've known her for years." },
            },
          ],
          keyPoints: [
            "Prétérit : action terminée et datée, coupée du présent (yesterday, ago, last year, in 2019, when I was...).",
            "Present perfect (have + participe passé) : bilan présent, résultat, expérience (ever, never), période non terminée, just, already, yet.",
            "Jamais de present perfect avec un marqueur daté : I saw him yesterday, et non I have seen him yesterday.",
            "depuis + durée : present perfect + for ; depuis + point de départ : present perfect + since.",
            "il y a + durée : prétérit + ago (two years ago) ; c'est la première fois que : It's the first time I've...",
            "have been + V-ing : insiste sur l'activité et sa durée ; pas avec les verbes d'état (know, like, want).",
          ],
          example: {
            statement: "Mettez les verbes entre parenthèses au prétérit ou au present perfect, et justifiez : « My family (1. move) to Manchester in 2018. At first I (2. not understand) the local accent at all. Since then, I (3. make) a lot of friends and I (4. visit) most of the North of England. Last summer, we (5. go) to the Lake District. I (6. never / be) to Scotland, though. »",
            solution: [
              "(1) moved : action datée (in 2018), coupée du présent : prétérit.",
              "(2) didn't understand : « At first » renvoie au début de l'installation, période terminée : prétérit, négation avec did + base verbale.",
              "(3) have made : « Since then » relie le passé au présent ; c'est un bilan : present perfect.",
              "(4) have visited : bilan d'expérience jusqu'à aujourd'hui, sans date : present perfect.",
              "(5) went : « Last summer » est un marqueur daté : prétérit.",
              "(6) have never been : expérience de vie avec never : present perfect.",
              "Réponse : moved, didn't understand, have made, have visited, went, have never been.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez la forme correcte : a) I (saw / have seen) that documentary three days ago. b) She (lived / has lived) in Dublin since 2020. c) (Did you ever eat / Have you ever eaten) haggis? d) We (didn't finish / haven't finished) the project yet. e) Martin Luther King (gave / has given) his famous speech in 1963. f) Look! Somebody (broke / has broken) the window.",
              hint: "Cherchez d'abord un marqueur : s'il date l'action (ago, in 1963), c'est le prétérit ; s'il relie le passé au présent (since, ever, yet, résultat visible), c'est le present perfect.",
              solution: [
                "a) saw : ago impose le prétérit.",
                "b) has lived : since 2020, situation qui dure encore.",
                "c) Have you ever eaten : expérience de vie avec ever.",
                "d) haven't finished : yet, en fin de phrase négative, accompagne le present perfect (en britannique).",
                "e) gave : action datée (in 1963) ; le pasteur King est mort en 1968, la période est close.",
                "f) has broken : le résultat est visible maintenant (Look!).",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais : a) J'apprends l'anglais depuis sept ans. b) Ils se connaissent depuis l'école primaire. c) Elle est arrivée à Londres il y a trois semaines. d) C'est la première fois que je prends l'avion. e) Depuis combien de temps attendez-vous ?",
              hint: "Pour chaque « depuis », demandez-vous si l'on donne une durée (for) ou un point de départ (since), et si le verbe exprime une activité (be + -ing possible) ou un état.",
              solution: [
                "a) « I have been learning English for seven years. » (activité qui dure, durée : for) ou « I have learnt English for seven years ».",
                "b) « They have known each other since primary school. » (know est un verbe d'état : pas de be + -ing ; point de départ : since)",
                "c) « She arrived in London three weeks ago. » (il y a + durée : prétérit + ago)",
                "d) « It's the first time I have taken a plane. » (ou « It's the first time I've flown. »)",
                "e) « How long have you been waiting? » (activité en cours : have been + V-ing)",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. 1) Ce paragraphe contient cinq erreurs de temps : repérez-les et corrigez-les. « I live in Bristol since two years. I have arrived here in September 2024 to study engineering. At first, I have felt very lonely. But I join a climbing club a few months ago and since then I make many friends. » 2) Rédigez ensuite un paragraphe de 70 à 90 mots en anglais : « How has your life changed since you started lycée? » Employez au moins deux present perfect avec for ou since et deux prétérits avec un marqueur daté.",
              hint: "Pour chaque verbe conjugué, cherchez le marqueur de temps qui l'accompagne : since, ago, in September, at first, since then.",
              solution: [
                "Erreur 1 : « I live in Bristol since two years » devient « I have lived in Bristol for two years » (situation qui dure : present perfect ; durée : for).",
                "Erreur 2 : « I have arrived here in September 2024 » devient « I arrived here in September 2024 » (date : prétérit).",
                "Erreur 3 : « At first, I have felt » devient « At first, I felt » (début de séjour, période terminée : prétérit).",
                "Erreur 4 : « I join a climbing club a few months ago » devient « I joined a climbing club a few months ago » (ago : prétérit).",
                "Erreur 5 : « since then I make many friends » devient « since then I have made many friends » (since then : bilan, present perfect).",
                "Proposition : « I started lycée in September 2025, and my life has changed a lot since then. In collège, I used to see the same friends every day, but in my first week at lycée I didn't know anyone. Since then, I have met people from different towns, and I have been playing in the school band for a year. I have also become more independent: I have taken the bus on my own since my first day. Last spring, I chose my specialities, which was a big decision. »",
                "Vérification : environ 85 mots ; present perfect avec since then, for a year, since my first day ; prétérits datés (in September 2025, in my first week, last spring).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "« I have seen her yesterday. »", true: false, why: "Yesterday date l'action : il faut le prétérit, I saw her yesterday." },
              { text: "« She has lived in Cardiff since 2019. »", true: true, why: "Situation commencée en 2019 et qui dure : present perfect + since." },
              { text: "« I am here since Monday. »", true: false, why: "Calque du français « je suis ici depuis lundi » : il faut I have been here since Monday." },
              { text: "« We moved to Glasgow ten years ago. »", true: true, why: "Ago situe une action terminée : prétérit." },
              { text: "« I've been knowing him for years. »", true: false, why: "Know est un verbe d'état : I've known him for years." },
              { text: "« It's the first time I've tasted Indian food. »", true: true, why: "It's the first time est suivi du present perfect." },
              { text: "« He has gone to Paris » signifie qu'il est allé à Paris et en est revenu.", true: false, why: "Has gone : il y est encore. Has been : il y est allé et en est revenu." },
            ],
          },
          quiz: [
            { q: "Complete: « I ___ my homework. Can I go out now? »", options: ["finished yesterday", "have finished", "was finishing", "finish"], answer: 1, why: "Le résultat compte maintenant (je peux sortir) : present perfect." },
            { q: "Translate: « Je la connais depuis 2015. »", options: ["I know her since 2015.", "I knew her since 2015.", "I've been knowing her for 2015.", "I've known her since 2015."], answer: 3, why: "Situation qui dure jusqu'à maintenant, verbe d'état, point de départ : present perfect simple + since." },
            { q: "Which time marker goes with the simple past?", options: ["ago", "yet", "so far", "ever"], answer: 0, why: "Ago date une action terminée : prétérit. Yet, so far et ever accompagnent le present perfect." },
            { q: "Complete: « How long ___ for the bus? »", options: ["are you waiting", "did you wait since", "have you been waiting", "do you wait"], answer: 2, why: "Activité commencée dans le passé et qui dure encore : have been + V-ing." },
            { q: "Complete: « Shakespeare ___ Romeo and Juliet in the 1590s. »", options: ["has written", "wrote", "has been writing", "had been writing for"], answer: 1, why: "Action datée (in the 1590s) et période close : prétérit." },
          ],
          trap: "Calquer le français : traduire « je vis ici depuis deux ans » par « I live here since two years » au lieu de « I have lived here for two years », ou employer le present perfect avec un marqueur daté (I have seen him yesterday).",
          method: "Avant de conjuguer un verbe au passé, cherchez le marqueur de temps : s'il date l'action (yesterday, ago, in 2019, last week), employez le prétérit ; s'il fait le lien avec le présent (since, for, ever, never, yet, already, just, so far), employez le present perfect. Sans marqueur, demandez-vous : la conséquence compte-t-elle maintenant ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'past-perfect-recit',
          title: 'Le « past perfect » et l’organisation du récit',
          minutes: 30,
          objectives: [
            "Former et employer le past perfect (had + participe passé) pour exprimer l'antériorité dans le passé.",
            "Organiser un récit au passé en combinant prétérit, past continuous et past perfect.",
            "Employer les marqueurs chronologiques du récit (when, after, before, by the time, as soon as, eventually).",
            "Exprimer un regret sur le passé avec I wish et if only suivis du past perfect.",
          ],
          course: [
            {
              heading: "Former et comprendre le past perfect",
              paragraphs: [
                "Le past perfect se forme avec had, à toutes les personnes, suivi du participe passé : « I had finished », « she had left », « they had never seen the sea ». À la forme négative, on écrit hadn't ; à la forme interrogative, « Had you met him before? ». La contraction 'd est ambiguë : « I'd seen » signifie I had seen (had + participe passé), mais « I'd see » signifie I would see (would + base verbale). C'est la forme du verbe qui suit qui permet de trancher.",
                "Le past perfect exprime l'antériorité par rapport à un moment du passé : c'est le « passé du passé », comme le plus-que-parfait français. Comparez : « When I arrived at the station, the train had left » (le train était déjà parti avant mon arrivée : je l'ai manqué) et « When I arrived at the station, the train left » (le train est parti juste après mon arrivée). Imaginez une frise : le prétérit fixe un repère dans le passé, et le past perfect remonte encore plus loin en arrière à partir de ce repère.",
              ],
              box: { label: "Règle", text: "Past perfect = had + participe passé, à toutes les personnes. Il exprime une action antérieure à un repère passé : « By the time the police arrived, the thief had escaped. »" },
            },
            {
              heading: "Les temps du récit : premier plan, arrière-plan, retour en arrière",
              paragraphs: [
                "Un récit au passé combine trois temps. Le prétérit raconte les événements principaux, dans l'ordre où ils se produisent (premier plan) : « She opened the door, looked around and stepped inside. » Le past continuous (was / were + V-ing) décrit le décor ou une action en cours, souvent interrompue (arrière-plan) : « It was raining and the street was empty. » Le past perfect signale un retour en arrière (flashback), un événement antérieur au moment du récit : « Someone had broken the lock. »",
                "Le past perfect en be + -ing (had been + V-ing) insiste sur la durée d'une activité antérieure à un repère passé : « She had been waiting for two hours when he finally called. » Les marqueurs chronologiques organisent le récit : when, while, as (pendant que), before, after, as soon as (dès que), by the time (au moment où, et déjà), until, then, later, meanwhile (pendant ce temps), eventually (finalement : faux ami, ce n'est pas « éventuellement »), at last (enfin).",
                "Dans un registre soutenu ou littéraire, on rencontre une inversion après no sooner et hardly : « No sooner had she sat down than the phone rang » (à peine s'était-elle assise que le téléphone sonna), « Hardly had he left when it started to rain ». Ces structures, appréciées dans un récit écrit, emploient le past perfect pour l'action la plus ancienne.",
              ],
              box: { label: "À retenir", text: "Prétérit : les événements principaux. Past continuous (was / were + V-ing) : le décor, l'action en cours. Past perfect (had + participe passé) : le retour en arrière. Had been + V-ing : la durée d'une activité antérieure." },
            },
            {
              heading: "Rapporter des paroles et exprimer un regret",
              paragraphs: [
                "Au discours indirect introduit par un verbe au passé (said, explained, told), le present perfect et le prétérit du discours direct deviennent des past perfect : « I have finished » devient « He said he had finished » ; « I saw the accident » devient « She explained that she had seen the accident ». Ce décalage des temps s'appelle la concordance (backshift).",
                "Pour exprimer un regret portant sur le passé, on emploie I wish ou if only suivis du past perfect : « I wish I had studied harder » (je regrette de ne pas avoir travaillé davantage), « If only I had listened to you! ». Le même temps apparaît dans la condition irréelle du passé : « If I had known, I would have come » (si j'avais su, je serais venu). Attention, après wish, le prétérit renvoie au présent : « I wish I lived by the sea » (j'aimerais vivre au bord de la mer, maintenant).",
              ],
              box: { label: "Formule", text: "Regret passé : I wish / If only + past perfect (I wish I had known). Irréel du passé : If + past perfect, would have + participe passé (If I had known, I would have come)." },
            },
          ],
          keyPoints: [
            "Past perfect = had + participe passé : action antérieure à un repère passé (le « passé du passé »).",
            "When I arrived, the train had left (déjà parti) ≠ When I arrived, the train left (parti juste après).",
            "Récit : prétérit (événements), past continuous (décor), past perfect (retour en arrière).",
            "Marqueurs : by the time, as soon as, after, before, meanwhile, eventually (= finalement), at last.",
            "Discours indirect : I have finished / I finished deviennent he said he had finished.",
            "Regret : I wish / If only + past perfect (I wish I had studied harder).",
          ],
          example: {
            statement: "Reliez chaque paire de phrases en une seule, avec le connecteur indiqué et le past perfect pour l'action la plus ancienne : a) The film started. We arrived at the cinema. (by the time) b) She finished her exams. She went on holiday. (after) c) I never saw the ocean. I visited Cornwall at the age of twelve. (until)",
            solution: [
              "Identifier l'action la plus ancienne dans chaque paire : le début du film (a), la fin des examens (b), le fait de n'avoir jamais vu l'océan (c).",
              "a) « By the time we arrived at the cinema, the film had started. » Le past perfect marque que le film avait déjà commencé.",
              "b) « After she had finished her exams, she went on holiday. » Avec after, le prétérit est aussi accepté (After she finished), car le connecteur indique déjà l'ordre, mais le past perfect insiste sur l'achèvement.",
              "c) « I had never seen the ocean until I visited Cornwall at the age of twelve. » Le past perfect exprime l'expérience accumulée jusqu'au repère passé.",
              "Réponse : a) By the time we arrived, the film had started. b) After she had finished her exams, she went on holiday. c) I had never seen the ocean until I visited Cornwall at twelve.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez le verbe entre parenthèses au prétérit ou au past perfect : a) When we got to the party, most guests (already / leave). b) She (never / fly) before her trip to New York. c) I (recognise) him at once because I (meet) him the year before. d) The match was cancelled because it (rain) all night. e) As soon as the bell (ring), the students ran out.",
              hint: "Repérez le repère passé de chaque phrase, puis demandez-vous si l'action à conjuguer se produit avant ce repère (past perfect) ou au même moment (prétérit).",
              solution: [
                "a) had already left : les invités sont partis avant notre arrivée.",
                "b) had never flown : expérience nulle jusqu'au repère du voyage.",
                "c) recognised (moment du récit), had met (rencontre antérieure, l'année précédente).",
                "d) had rained (ou had been raining, pour insister sur la durée) : la pluie précède l'annulation.",
                "e) rang : as soon as enchaîne deux actions successives racontées au prétérit (had rung est possible pour insister sur l'achèvement).",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce début de récit (texte d'entraînement inventé) et répondez : « The house was silent when Nora came home. Her parents had gone to a wedding and her brother was sleeping upstairs. She had been studying at the library all afternoon, and she was exhausted. As she was switching on the kitchen light, she noticed that the back door was open. Someone had been in the house. » 1) Relevez un verbe au prétérit, un au past continuous, un au past perfect et un au past perfect en be + -ing. 2) Quelle est la valeur de chacun de ces temps ici ? 3) Remettez dans l'ordre chronologique : Nora notices the open back door / Nora studies at the library / Nora comes home.",
              hint: "Distinguez ce qui fait avancer l'histoire (prétérit), ce qui la décrit (past continuous) et ce qui la précède (past perfect).",
              solution: [
                "1) Prétérit : was, came, noticed. Past continuous : was sleeping, was switching. Past perfect : had gone, had been (in the house). Past perfect en be + -ing : had been studying.",
                "2) Le prétérit fait avancer l'action (came, noticed) ou décrit un état au moment du récit (was silent). Le past continuous pose le décor (was sleeping) ou une action en cours interrompue par une autre (was switching ... noticed). Le past perfect renvoie à des faits antérieurs (le départ des parents, l'intrusion). Had been studying insiste sur la durée de l'activité de l'après-midi.",
                "3) Ordre chronologique : Nora studies at the library (had been studying, antérieur au retour) ; Nora comes home (came, repère du récit) ; Nora notices the open back door (noticed, pendant qu'elle allume la lumière). Le texte est raconté depuis le moment du retour : ce qui précède ce repère est au past perfect.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Écrivez la suite de ce récit en 120 à 150 mots, en anglais : « When Sam opened the envelope, his hands were shaking. » Votre récit doit comporter au moins trois past perfect (dont un retour en arrière expliquant le contenu de l'enveloppe), deux past continuous et des marqueurs chronologiques variés.",
              hint: "Construisez d'abord la chronologie réelle (ce qui s'est passé avant l'enveloppe), puis racontez au prétérit en insérant les faits antérieurs au past perfect.",
              solution: [
                "Chronologie réelle : Sam avait postulé pour une bourse d'études à l'étranger ; il avait attendu trois mois ; il ouvre la lettre ; il apprend qu'il est accepté ; il appelle sa grand-mère.",
                "Proposition : « When Sam opened the envelope, his hands were shaking. Six months earlier, he had applied for a scholarship to study in Canada. He had written his motivation letter at least ten times, and his English teacher had helped him prepare for the interview. Since then, he had been checking the mailbox every morning. Now his little sister was watching him from the stairs and the radio was playing in the kitchen. He unfolded the letter slowly. No sooner had he read the first line than he burst out laughing: he had been accepted! He ran to the phone and called his grandmother, who had always believed in him. Eventually, his sister asked what was going on, and he told her that he was going to spend a year in Montreal. »",
                "Vérification : environ 130 mots ; past perfect : had applied, had written, had helped, had been accepted, had always believed ; past perfect en be + -ing : had been checking ; past continuous : was watching, was playing ; marqueurs : six months earlier, since then, now, no sooner... than, eventually.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Lisez : « When Maya finally reached the airport, her flight had already left. She had overslept, because she had stayed up late packing her suitcase. She booked another flight and called her host family. » Remettez les événements dans l'ordre chronologique réel.",
            items: [
              "Maya stays up late packing her suitcase.",
              "Maya oversleeps.",
              "Maya's flight leaves.",
              "Maya reaches the airport.",
              "Maya books another flight.",
            ],
          },
          quiz: [
            { q: "Complete: « When I got to the cinema, the film ___, so I missed the beginning. »", options: ["has already started", "already started", "had already started", "was already starting"], answer: 2, why: "Le film avait commencé avant mon arrivée : action antérieure à un repère passé, donc past perfect." },
            { q: "In « I'd seen that film before », 'd stands for...", options: ["had", "would", "did", "should"], answer: 0, why: "'d suivi d'un participe passé (seen) correspond à had ; suivi d'une base verbale, il correspond à would." },
            { q: "« Eventually » means...", options: ["éventuellement", "évidemment", "finalement", "exceptionnellement"], answer: 2, why: "Eventually est un faux ami : il signifie finalement, au bout du compte." },
            { q: "Report: « I have lost my phone », she said.", options: ["She said she has lost her phone.", "She said she had lost her phone.", "She said she lost my phone.", "She said she would lose her phone."], answer: 1, why: "Avec un verbe introducteur au passé, le present perfect devient past perfect : she had lost." },
            { q: "Which sentence expresses a regret about the past?", options: ["I wish I live in London.", "I wish I will live in London.", "I wish I am living in London.", "I wish I had lived in London."], answer: 3, why: "I wish + past perfect exprime un regret portant sur le passé." },
          ],
          trap: "Employer le past perfect dès qu'on parle d'un passé lointain, sans repère passé par rapport auquel l'action est antérieure, ou confondre « I'd seen » (had) et « I'd see » (would).",
          method: "Avant de rédiger un récit, tracez une frise rapide : placez le moment principal du récit, puis marquez à gauche ce qui s'est passé avant. Tout ce qui est à gauche du repère et raconté depuis ce repère passe au past perfect ; le reste suit au prétérit, et le décor au past continuous.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'exprimer-le-futur',
          title: 'Exprimer le futur et l’intention',
          minutes: 35,
          objectives: [
            "Choisir la forme adaptée pour parler de l'avenir : will, be going to, présent en be + -ing, présent simple.",
            "Exprimer l'intention, la prévision, la décision et le projet avec nuance (intend to, be about to, be likely to, be bound to).",
            "Employer le présent après when, as soon as, until et before dans une subordonnée de temps à valeur future.",
            "Utiliser le futur en be + -ing (will be + V-ing) et le futur antérieur (will have + participe passé).",
          ],
          course: [
            {
              heading: "Will : prévoir, décider, promettre",
              paragraphs: [
                "Contrairement au français, l'anglais n'a pas de terminaison de futur : il exprime l'avenir par plusieurs moyens, chacun avec sa nuance. Will est un modal suivi de la base verbale, identique à toutes les personnes (contraction 'll, négation won't). Il sert à faire une prédiction fondée sur une opinion ou une connaissance (« I think it will rain tomorrow », « You'll love this book »), à annoncer un fait futur (« The sun will set at 8.42 pm »), et à prendre une décision sur le moment même : « The phone's ringing. I'll get it! ».",
                "Will exprime aussi la promesse, l'offre ou le refus : « I'll help you with your essay », « I won't tell anyone », « The car won't start » (refus, ici d'une machine). En anglais britannique, shall s'emploie à la première personne pour proposer ou suggérer : « Shall I open the window? », « Shall we go? ». Enfin, will be + V-ing (future continuous) décrit une action en cours à un moment futur : « This time tomorrow, I'll be flying to New York ».",
              ],
              box: { label: "Règle", text: "will + base verbale : prédiction (I think it will rain), décision immédiate (I'll get it), promesse ou offre (I'll help you), fait futur. Shall I / Shall we : proposition. will be + V-ing : action en cours à un moment futur." },
            },
            {
              heading: "Be going to, présent en be + -ing et présent simple",
              paragraphs: [
                "Be going to + base verbale exprime une intention décidée à l'avance (« I'm going to study medicine », la décision est prise) ou une prédiction fondée sur un indice présent (« Look at those clouds! It's going to rain »). Comparez : « I'll call her » (je décide maintenant de l'appeler) et « I'm going to call her » (c'était déjà prévu).",
                "Le présent en be + -ing exprime un projet organisé, souvent avec une date et d'autres personnes : « I'm meeting Sam at six », « We're flying to Dublin on Friday » (les billets sont achetés). Le présent simple s'emploie pour les horaires et les programmes officiels, fixés indépendamment de nous : « The train leaves at 7.15 », « The exam starts on 12 June », « The film begins at nine ».",
              ],
              box: { label: "À retenir", text: "be going to : intention déjà décidée, prédiction fondée sur un indice. Présent en be + -ing : rendez-vous ou projet organisé (I'm meeting Sam at six). Présent simple : horaire ou programme (The train leaves at 7.15)." },
            },
            {
              heading: "Nuancer : imminence, probabilité, intention",
              paragraphs: [
                "Plusieurs expressions précisent la nuance. Be about to + base verbale : être sur le point de (« Hurry up, the film is about to start »). Be likely / unlikely to : il est probable, peu probable que (« Prices are likely to rise »). Be bound to : c'est certain, forcément (« She works so hard: she's bound to succeed »). Be due to : être prévu pour (« The new bridge is due to open in May »). Be to + base verbale, fréquent dans la presse, annonce un projet officiel : « The Prime Minister is to visit Kenya next week ».",
                "Pour exprimer l'intention avec précision, variez les verbes : to intend to (avoir l'intention de), to plan to (prévoir de), to mean to (avoir l'intention de, souvent au passé : « I meant to call you »), to aim to (viser à), to be determined to (être déterminé à), to hope to (espérer), would like to (aimerais). Dans un essai, ces nuances montrent que vous distinguez le certain, le probable et le souhaitable.",
              ],
              box: { label: "Vocabulaire", text: "be about to (sur le point de), be likely to (probablement), be unlikely to (peu probable), be bound to (forcément), be due to (prévu pour), intend to (avoir l'intention de), be determined to (être déterminé à)." },
            },
            {
              heading: "Subordonnées de temps et futur antérieur",
              paragraphs: [
                "Après when, as soon as, once, until, before, after et while, l'anglais emploie le présent, et non will, même si l'action est future : « I'll call you when I arrive » (et non « when I will arrive ») ; « As soon as she gets her results, she'll apply to university » ; « Wait here until I come back ». Pour insister sur l'achèvement, on emploie le present perfect : « I'll go out when I've finished my homework ». C'est une différence majeure avec le français, qui dit « quand j'arriverai ».",
                "Le futur antérieur (future perfect), will have + participe passé, présente une action qui sera achevée avant un moment futur, souvent avec by (d'ici à, au plus tard) : « By the time you read this letter, I will have left », « By next June, I will have passed my exams ». Il permet de faire un bilan projeté dans l'avenir.",
              ],
              box: { label: "Règle", text: "when, as soon as, once, until, before, after + présent (ou present perfect) pour une action future : I'll call you when I arrive. Futur antérieur : will have + participe passé (By June, I will have finished)." },
            },
          ],
          keyPoints: [
            "will : prédiction, décision prise sur le moment, promesse ou offre ; shall I / shall we : proposition.",
            "be going to : intention déjà décidée, ou prédiction fondée sur un indice présent (Look! It's going to rain).",
            "Présent en be + -ing : projet organisé (I'm meeting Sam at six) ; présent simple : horaire (The train leaves at 7.15).",
            "be about to (imminence), be likely to (probabilité), be bound to (certitude), be due to (prévu), be to (projet officiel).",
            "when, as soon as, until, before + présent, jamais will : I'll call you when I arrive.",
            "will be + V-ing : action en cours dans le futur ; will have + participe passé : action achevée avant un moment futur.",
          ],
          example: {
            statement: "Choisissez la forme la plus adaptée et justifiez : a) « Have you decided what to do next year? Yes, I (will study / am going to study) law in Edinburgh. » b) « Oh no, I've forgotten my wallet! Don't worry, I (will lend / am lending) you some money. » c) « My flight (leaves / will be leaving) at 6.10 tomorrow morning. » d) « I'll text you as soon as I (land / will land). »",
            solution: [
              "a) am going to study : la décision a été prise avant le moment où l'on parle (« Have you decided? »), c'est une intention.",
              "b) will lend : la décision est prise sur le moment, en réaction à la situation ; c'est aussi une offre.",
              "c) leaves : il s'agit d'un horaire fixé par la compagnie aérienne : présent simple.",
              "d) land : après as soon as, on emploie le présent, même pour une action future.",
              "Réponse : a) am going to study, b) will lend, c) leaves, d) land.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec will ou la forme de be going to qui convient : a) Look at that driver! He ___ crash into the wall. b) A: It's cold in here. B: I ___ close the window. c) We've saved for two years: we ___ travel around Australia next summer. d) I promise I ___ be late again. e) In my opinion, robots ___ replace many jobs in the future.",
              hint: "Demandez-vous si la décision est prise maintenant (will), si elle était déjà prise (be going to), ou si un indice présent permet de prévoir (be going to).",
              solution: [
                "a) is going to : prédiction fondée sur un indice visible (Look!).",
                "b) will (I'll close) : décision prise sur le moment, en réaction.",
                "c) are going to : intention décidée depuis longtemps (deux ans d'économies).",
                "d) won't (will not) : promesse.",
                "e) will : prédiction fondée sur une opinion (In my opinion).",
              ],
            },
            {
              level: 2,
              statement: "Chaque phrase contient une erreur : corrigez-la et expliquez. a) I will call you when I will get home. b) What do you do tomorrow evening? Shall we go to the cinema? c) Shall you help me with this box? d) By the end of the year, I will finish this novel. e) Be careful, the glass is about to falling.",
              hint: "Vérifiez les subordonnées de temps, les verbes après about to, l'emploi de shall et la valeur d'achèvement avec by.",
              solution: [
                "a) « I will call you when I get home » : après when, présent pour une action future.",
                "b) « What are you doing tomorrow evening? » : on interroge sur un projet ou un rendez-vous déjà organisé, ce qui appelle le présent en be + -ing ; le présent simple ne s'emploie que pour les horaires et les programmes officiels.",
                "c) « Will you help me with this box? » : shall ne s'emploie qu'avec I et we pour proposer (Shall I help you?).",
                "d) « By the end of the year, I will have finished this novel » : by + moment futur appelle le futur antérieur pour une action achevée.",
                "e) « the glass is about to fall » : be about to est suivi de la base verbale.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Where do you see yourself in ten years' time? » Rédigez une réponse de 120 à 150 mots en anglais. Employez au moins cinq formes différentes pour exprimer l'avenir (par exemple be going to, will, will be + V-ing, will have + participe passé, be likely to, une subordonnée en when ou as soon as).",
              hint: "Distinguez ce qui est décidé (be going to), ce qui est probable (be likely to, will), ce qui sera en cours (will be + V-ing) et ce qui sera achevé (will have + participe passé).",
              solution: [
                "Plan : projets décidés à court terme ; études ; situation probable dans dix ans ; part d'incertitude et conclusion.",
                "Proposition : « In ten years' time, I will be twenty-seven. I have already made one decision: after the baccalauréat, I am going to study environmental engineering. If everything goes well, I will have finished my master's degree by the age of twenty-three. As soon as I graduate, I would like to work abroad for a few years, probably in Canada or in Scandinavia. So, ten years from now, I will probably be working on renewable energy projects, perhaps designing wind farms. I am also likely to live in a big city, although I dream of a house by the sea. Of course, my plans are bound to change: nobody knows what the world will look like in 2036. But I intend to keep learning languages, because they will always open doors. »",
                "Vérification : environ 130 mots ; formes employées : will be, am going to, will have finished, as soon as + présent, will probably be working, am likely to, are bound to, intend to, will look like.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase à la valeur de la forme employée.",
            pairs: [
              { left: "Look at the sky! It's going to rain.", right: "Prédiction fondée sur un indice présent" },
              { left: "The doorbell's ringing. I'll answer it.", right: "Décision prise sur le moment" },
              { left: "I'm seeing the dentist on Tuesday.", right: "Rendez-vous organisé" },
              { left: "The ferry leaves at 9.30.", right: "Horaire officiel" },
              { left: "By June, I will have passed my driving test.", right: "Action achevée avant un moment futur" },
              { left: "Quick, the show is about to begin!", right: "Imminence" },
            ],
          },
          quiz: [
            { q: "Complete: « I'll phone you as soon as I ___ the results. »", options: ["will get", "get", "am going to get", "would get"], answer: 1, why: "Après as soon as, on emploie le présent pour une action future." },
            { q: "« Look out! You ___ drop those plates! »", options: ["are going to", "are used to", "would rather", "are supposed to"], answer: 0, why: "Prédiction fondée sur un indice présent (on voit que les assiettes vont tomber) : be going to." },
            { q: "Which sentence describes a timetable?", options: ["I'm meeting Lucy at the station at ten.", "I think I'll take the train.", "The train to York leaves at 10.05.", "I'm going to take the train."], answer: 2, why: "Un horaire fixé indépendamment de nous s'exprime au présent simple." },
            { q: "« She's bound to win » means that...", options: ["she will certainly win", "she is not allowed to win", "she is tied to her chair", "she hopes she will win"], answer: 0, why: "Be bound to exprime une très forte probabilité, une quasi-certitude." },
            { q: "Complete: « By 2030, the city ___ a new metro line. »", options: ["is going to be building", "is building", "has built", "will have built"], answer: 3, why: "By + moment futur et une action achevée : futur antérieur, will have + participe passé." },
          ],
          trap: "Calquer le français dans les subordonnées de temps : écrire « when I will arrive » ou « as soon as she will know » au lieu du présent (when I arrive, as soon as she knows).",
          method: "Face à une phrase sur l'avenir, posez-vous trois questions dans l'ordre : est-ce un horaire ou un programme (présent simple) ? Est-ce déjà organisé ou décidé (be + -ing, be going to) ? Est-ce une prédiction, une décision prise maintenant ou une promesse (will) ? Puis vérifiez les subordonnées en when, as soon as, until : jamais de will.",
        },
      ],
    },

    /* ==================================================================== */
    /* DIVERSITÉ ET INCLUSION                                               */
    /* ==================================================================== */
    {
      id: 'diversite-inclusion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'droits-civiques',
          title: 'Combats pour l’égalité et les droits civiques',
          minutes: 35,
          objectives: [
            "Situer les grandes étapes du mouvement des droits civiques aux États-Unis (1954-1968) et ses principaux acteurs.",
            "Mobiliser le lexique de la lutte pour l'égalité (segregation, to boycott, civil disobedience, landmark ruling, to outlaw).",
            "Comparer les stratégies du mouvement (non-violence, autodéfense) et en mesurer les échos contemporains, comme Black Lives Matter.",
            "Relier ce combat à d'autres luttes pour l'égalité dans le monde anglophone (droit de vote des femmes, Royaume-Uni).",
          ],
          course: [
            {
              heading: "Avant 1954 : la ségrégation légale dans le Sud",
              paragraphs: [
                "Le XIIIe amendement de la Constitution américaine abolit l'esclavage en 1865, à la fin de la guerre de Sécession. Mais dans les États du Sud, des lois appelées Jim Crow laws imposent bientôt la ségrégation raciale (segregation) : écoles, transports, restaurants, hôpitaux, fontaines et cimetières sont séparés. Des obstacles comme les tests d'alphabétisation (literacy tests) ou les taxes électorales (poll taxes) privent la plupart des Afro-Américains du droit de vote, et les lynchages font régner la terreur.",
                "En 1896, dans l'arrêt Plessy v. Ferguson, la Cour suprême juge la ségrégation conforme à la Constitution à condition que les équipements soient « separate but equal » (séparés mais égaux). Dans les faits, les équipements réservés aux Noirs sont presque toujours inférieurs. En 1909 est fondée la NAACP (National Association for the Advancement of Colored People), qui mène le combat devant les tribunaux.",
              ],
              box: { label: "Définition", text: "Segregation : séparation imposée par la loi ou par la coutume entre groupes considérés comme des « races ». Jim Crow laws : lois ségrégationnistes des États du Sud, de la fin du XIXe siècle aux années 1960." },
            },
            {
              heading: "1954-1968 : les grandes étapes du mouvement",
              paragraphs: [
                "Le 17 mai 1954, l'arrêt Brown v. Board of Education déclare la ségrégation dans les écoles publiques contraire à la Constitution : c'est un landmark ruling (un arrêt historique) qui renverse Plessy v. Ferguson dans le domaine scolaire. Le 1er décembre 1955, à Montgomery (Alabama), Rosa Parks refuse de céder sa place à un passager blanc dans un bus ; elle est arrêtée. Le boycott des bus de Montgomery dure 381 jours ; il est mené par un jeune pasteur, Martin Luther King Jr., et prend fin après que la Cour suprême a jugé la ségrégation dans les bus inconstitutionnelle (1956).",
                "En 1957, neuf lycéens noirs, les Little Rock Nine, intègrent un lycée blanc de l'Arkansas sous la protection de troupes fédérales envoyées par le président Eisenhower. En 1960, des étudiants organisent des sit-ins dans des cafétérias réservées aux Blancs, à commencer par Greensboro (Caroline du Nord) ; en 1961, les Freedom Riders voyagent dans des bus interétatiques pour tester la déségrégation. Le 28 août 1963, la marche sur Washington rassemble environ 250 000 personnes ; devant le Lincoln Memorial, King prononce son discours « I Have a Dream ».",
                "Le Civil Rights Act, signé par le président Lyndon B. Johnson le 2 juillet 1964, interdit (outlaws) les discriminations fondées sur la race, la couleur, la religion, le sexe ou l'origine nationale, et met fin à la ségrégation dans les lieux publics. Après les marches de Selma à Montgomery (mars 1965), marquées par la répression du « Bloody Sunday », le Voting Rights Act du 6 août 1965 interdit les procédés qui empêchaient les Afro-Américains de voter.",
              ],
              box: { label: "Repère", text: "1896 : Plessy v. Ferguson. 17 mai 1954 : Brown v. Board of Education. 1er décembre 1955 : arrestation de Rosa Parks. 28 août 1963 : marche sur Washington. 2 juillet 1964 : Civil Rights Act. 6 août 1965 : Voting Rights Act. 4 avril 1968 : assassinat de Martin Luther King." },
            },
            {
              heading: "Non-violence ou autodéfense : des stratégies en débat",
              paragraphs: [
                "Martin Luther King défend la désobéissance civile non violente (non-violent civil disobedience), inspirée de Gandhi et de l'essai de Henry David Thoreau, Civil Disobedience (1849) : enfreindre publiquement une loi injuste et accepter la sanction, pour révéler l'injustice aux yeux de l'opinion. Dans son discours de 1963, il rêve d'une nation où ses enfants seraient jugés non sur la couleur de leur peau mais « by the content of their character ». Il reçoit le prix Nobel de la paix en 1964 et est assassiné à Memphis le 4 avril 1968.",
                "Malcolm X, figure de la Nation of Islam, critique au contraire l'intégration et la non-violence, et défend le droit à l'autodéfense ; après un pèlerinage à La Mecque en 1964, ses positions évoluent. Il est assassiné le 21 février 1965. À partir de 1966, le mouvement Black Power et le Black Panther Party revendiquent la fierté noire et l'autonomie des communautés. Ces stratégies opposées montrent qu'un mouvement social n'est jamais uniforme.",
              ],
              box: { label: "Vocabulaire", text: "to campaign for (militer pour), to boycott (boycotter), to march (défiler), civil disobedience (désobéissance civile), a landmark ruling (un arrêt historique), to outlaw (interdire par la loi), to overturn (annuler, renverser), the right to vote (le droit de vote), grassroots (de terrain, populaire)." },
            },
            {
              heading: "Des échos aujourd'hui et ailleurs",
              paragraphs: [
                "Le mouvement Black Lives Matter naît en 2013, après l'acquittement de l'homme qui avait tué Trayvon Martin, un adolescent noir de 17 ans, en Floride ; le mot-dièse est lancé par trois militantes, Alicia Garza, Patrisse Cullors et Opal Tometi. En 2020, la mort de George Floyd, tué le 25 mai à Minneapolis par un policier, provoque des manifestations dans le monde entier. Le policier, Derek Chauvin, est condamné pour meurtre en 2021.",
                "Le Royaume-Uni a aussi connu ses combats. En 1963, le Bristol Bus Boycott, mené notamment par Paul Stephenson, proteste contre le refus d'une compagnie de bus d'embaucher des conducteurs noirs ou asiatiques ; il contribue à l'adoption du Race Relations Act de 1965, première loi britannique contre la discrimination raciale. Quant au droit de vote des femmes, conquis après la lutte des suffragettes d'Emmeline Pankhurst, il est accordé en 1918 aux Britanniques de plus de 30 ans remplissant certaines conditions, puis à égalité avec les hommes en 1928 ; aux États-Unis, le XIXe amendement le garantit en 1920.",
              ],
            },
          ],
          keyPoints: [
            "Jim Crow laws : ségrégation dans le Sud ; Plessy v. Ferguson (1896) : « separate but equal ».",
            "Brown v. Board of Education (1954) déclare inconstitutionnelle la ségrégation scolaire.",
            "Rosa Parks (1955), boycott des bus de Montgomery (381 jours), marche sur Washington et « I Have a Dream » (1963).",
            "Civil Rights Act (1964) et Voting Rights Act (1965) mettent fin à la ségrégation légale et protègent le droit de vote.",
            "Non-violence (Martin Luther King) contre autodéfense (Malcolm X, Black Power) : deux stratégies.",
            "Échos : Black Lives Matter (2013, 2020), Bristol Bus Boycott (1963), suffragettes (1918, 1928).",
          ],
          example: {
            statement: "Expliquez en anglais, en quatre ou cinq phrases, pourquoi le boycott des bus de Montgomery (1955-1956) est considéré comme un tournant du mouvement des droits civiques.",
            solution: [
              "Présenter l'événement déclencheur, avec la date et le lieu : l'arrestation de Rosa Parks.",
              "Décrire l'action collective : un boycott massif, organisé et non violent, qui dure plus d'un an.",
              "Dégager les conséquences : une victoire juridique et l'émergence d'un leader.",
              "Employer le lexique du cours : to refuse to give up one's seat, to boycott, non-violent, to rule, unconstitutional.",
              "Réponse : « On 1 December 1955, in Montgomery, Alabama, Rosa Parks was arrested for refusing to give up her seat to a white passenger. In response, the Black community boycotted the city's buses for 381 days. The boycott was peaceful and well organised, which showed the power of non-violent collective action. It ended in victory when the Supreme Court ruled that segregation on buses was unconstitutional. It also made a young pastor, Martin Luther King Jr., the leader of the civil rights movement. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec les mots suivants, à la forme qui convient : segregation, to boycott, landmark ruling, to outlaw, civil disobedience, the right to vote. a) Under the Jim Crow laws, ___ was imposed in schools and buses. b) In 1954, the Supreme Court issued a ___ in Brown v. Board of Education. c) Black residents of Montgomery decided ___ the buses. d) The Civil Rights Act of 1964 ___ discrimination in public places. e) Martin Luther King believed in non-violent ___. f) The Voting Rights Act protected African Americans' ___.",
              hint: "Repérez la nature du mot attendu : nom, verbe à l'infinitif ou verbe conjugué au prétérit.",
              solution: [
                "a) segregation.",
                "b) landmark ruling.",
                "c) to boycott (decided + to + base verbale).",
                "d) outlawed (prétérit : l'action est datée, 1964).",
                "e) civil disobedience.",
                "f) right to vote.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (document inventé pour l'entraînement) et répondez en français : « I was nineteen in August 1963. My parents told me not to go to Washington: they were afraid there would be violence. I went anyway, on a bus full of students from Ohio. I had never seen so many people, Black and white, standing side by side. When Dr King spoke, the crowd went completely silent. I didn't understand then that I was living a historic moment. I just knew that something had changed. A year later, the Civil Rights Act was signed. » 1) De quel événement parle la narratrice ? Datez-le précisément. 2) Pourquoi ses parents s'y opposaient-ils ? 3) Relevez deux détails qui montrent le caractère exceptionnel de la journée. 4) Quelle loi est évoquée à la fin et que prévoyait-elle ? 5) Relevez un past perfect et expliquez son emploi.",
              hint: "Appuyez-vous sur les repères du cours : août 1963, Washington, Dr King. Pour la question 5, cherchez had suivi d'un participe passé.",
              solution: [
                "1) Il s'agit de la marche sur Washington pour l'emploi et la liberté, le 28 août 1963, où Martin Luther King prononce « I Have a Dream ».",
                "2) Ils craignaient des violences (« they were afraid there would be violence »).",
                "3) La foule immense et mixte (« so many people, Black and white, standing side by side ») ; le silence total pendant le discours (« the crowd went completely silent »).",
                "4) Le Civil Rights Act, signé le 2 juillet 1964, qui interdit les discriminations fondées sur la race, la couleur, la religion, le sexe ou l'origine nationale et met fin à la ségrégation dans les lieux publics.",
                "5) « I had never seen so many people » : le past perfect exprime une expérience antérieure au moment du récit (jamais, jusqu'à ce jour-là). « something had changed » exprime aussi un changement achevé avant le moment où elle en prend conscience.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Is non-violence the most effective way to bring about social change? » Rédigez un essai argumenté de 130 à 160 mots, en anglais, en vous appuyant sur des exemples précis.",
              hint: "Mobilisez des exemples datés (Montgomery, marche sur Washington, Civil Rights Act) et nuancez avec d'autres stratégies (Malcolm X, Black Power) avant de conclure.",
              solution: [
                "Plan : introduction ; efficacité de la non-violence (exemples du mouvement des droits civiques) ; limites et autres stratégies ; conclusion nuancée.",
                "Proposition : « History offers many examples of peaceful movements that changed societies. But is non-violence always the most effective strategy? On the one hand, non-violent action can be extremely powerful. In 1955, the Montgomery bus boycott lasted 381 days and ended with a Supreme Court decision against segregation on buses. Peaceful protests, like the March on Washington in 1963, won the support of public opinion and led to the Civil Rights Act of 1964. On the other hand, some activists, such as Malcolm X, argued that non-violence was not enough when people were facing brutal repression, and the Black Power movement demanded more radical change. Moreover, peaceful protest works best when the media show the violence of the other side. In my opinion, non-violence is the most effective strategy in the long term, because it brings ordinary citizens together and makes injustice visible to everyone. »",
                "Vérification : environ 145 mots, deux exemples datés, une concession (On the other hand, Moreover), une conclusion personnelle justifiée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Plessy v. Ferguson : « separate but equal » (1896)",
              "Brown v. Board of Education (1954)",
              "Arrestation de Rosa Parks et boycott des bus de Montgomery (1955)",
              "Marche sur Washington et « I Have a Dream » (1963)",
              "Civil Rights Act (1964)",
              "Voting Rights Act (1965)",
              "Assassinat de Martin Luther King à Memphis (1968)",
            ],
          },
          quiz: [
            { q: "What did the Supreme Court decide in Brown v. Board of Education (1954)?", options: ["that buses in the South could remain segregated", "that school segregation was unconstitutional", "that women had the right to vote in all states", "that literacy tests were legal everywhere"], answer: 1, why: "L'arrêt Brown déclare la ségrégation scolaire contraire à la Constitution et renverse Plessy v. Ferguson dans ce domaine." },
            { q: "Rosa Parks was arrested in Montgomery in...", options: ["1955", "1945", "1963", "1968"], answer: 0, why: "Rosa Parks est arrêtée le 1er décembre 1955 ; le boycott des bus dure ensuite 381 jours." },
            { q: "« To outlaw » means...", options: ["to make something illegal", "to escape from prison", "to vote against a candidate", "to break a rule on purpose"], answer: 0, why: "To outlaw signifie interdire par la loi : le Civil Rights Act outlawed segregation in public places." },
            { q: "Which leader first defended self-defence rather than non-violence?", options: ["Martin Luther King Jr.", "Rosa Parks", "Malcolm X", "Lyndon B. Johnson"], answer: 2, why: "Malcolm X critiquait la non-violence et défendait le droit à l'autodéfense." },
            { q: "The Bristol Bus Boycott of 1963 protested against...", options: ["high ticket prices for students and pensioners", "the closure of several bus routes in the city", "a ban on women working as bus drivers", "the refusal to hire Black and Asian crews"], answer: 3, why: "Le boycott visait une compagnie qui refusait d'embaucher des conducteurs et des receveurs noirs ou asiatiques ; il a contribué au Race Relations Act de 1965." },
          ],
          trap: "Réduire le mouvement des droits civiques à Martin Luther King et à un seul discours, en oubliant les actions collectives (boycotts, sit-ins, marches), les arrêts de justice et les lois de 1964 et 1965, ou confondre Brown (1954) et Plessy (1896).",
          method: "Construisez une frise de sept dates (1896, 1954, 1955, 1963, 1964, 1965, 1968) et associez à chacune une phrase en anglais au prétérit. Relisez-la à voix haute avant chaque évaluation : vous disposerez ainsi d'exemples précis pour tout essai sur l'égalité.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'societes-multiculturelles',
          title: 'Sociétés multiculturelles : vivre ensemble',
          minutes: 30,
          objectives: [
            "Définir et comparer les modèles d'intégration : melting pot, salad bowl, mosaïque canadienne, multiculturalisme.",
            "Présenter des exemples de sociétés multiculturelles du monde anglophone (Royaume-Uni, Canada, États-Unis, Australie).",
            "Exprimer la concession et l'opposition pour nuancer un point de vue (although, even though, whereas, despite, however).",
            "Débattre des réussites et des tensions du vivre-ensemble.",
          ],
          course: [
            {
              heading: "Assimilation, intégration, multiculturalisme : des modèles",
              paragraphs: [
                "Une société multiculturelle rassemble des groupes d'origines, de langues et de religions différentes. Elle peut chercher à les fondre dans une culture commune (assimilation), à les faire participer pleinement à la société tout en respectant leurs différences (integration), ou reconnaître officiellement la diversité comme une richesse à protéger (multiculturalism). La devise des États-Unis, « E pluribus unum » (« De plusieurs, un seul »), inscrite sur le grand sceau adopté en 1782, résume l'idéal du melting pot.",
                "Le Canada a été le premier pays à adopter une politique officielle de multiculturalisme, annoncée en 1971 par le Premier ministre Pierre Elliott Trudeau, puis inscrite dans la loi par le Canadian Multiculturalism Act de 1988. On parle de mosaïque culturelle (cultural mosaic) : chaque communauté garde son identité au sein de l'ensemble. Le modèle républicain français est différent : il s'adresse à des citoyens égaux, sans reconnaître de communautés, et le recensement ne demande pas l'origine ethnique, alors que le recensement britannique pose cette question.",
              ],
              box: { label: "À retenir", text: "Melting pot (États-Unis, idéal historique) : fusion des cultures. Salad bowl ou mosaic (Canada) : coexistence des cultures. Multiculturalism : reconnaissance officielle de la diversité. Modèle républicain français : des citoyens égaux, sans communautés reconnues." },
            },
            {
              heading: "Le Royaume-Uni : une société multiculturelle",
              paragraphs: [
                "Après 1945, l'immigration venue du Commonwealth (Caraïbes, Inde, Pakistan, puis Bangladesh) a profondément transformé la société britannique. Le Notting Hill Carnival en est un symbole : il trouve son origine dans un carnaval caribéen organisé en salle en 1959 par la militante trinidadienne Claudia Jones, après les émeutes racistes de Notting Hill de 1958, et se tient dans la rue depuis 1966 ; c'est aujourd'hui l'un des plus grands festivals de rue d'Europe. À Londres, Brick Lane est le cœur de la communauté bangladaise, que Monica Ali décrit dans son roman Brick Lane (2003).",
                "La diversité se lit aussi dans la vie politique et quotidienne : Sadiq Khan, fils d'immigrés pakistanais, est élu maire de Londres en 2016 ; Rishi Sunak devient en 2022 le premier Premier ministre d'origine indienne. En 2001, le ministre des Affaires étrangères Robin Cook qualifiait le chicken tikka masala de véritable plat national britannique, pour montrer que l'identité britannique se nourrit de ses apports successifs.",
                "Mais le vivre-ensemble connaît des tensions. En 2011, le Premier ministre David Cameron déclare que le « multiculturalisme d'État » a échoué, car il aurait encouragé des communautés à vivre séparément. À l'été 2024, après une attaque au couteau à Southport, de fausses informations sur l'identité de l'agresseur ont déclenché des émeutes dans plusieurs villes d'Angleterre, visant des mosquées et des hôtels hébergeant des demandeurs d'asile.",
              ],
              box: { label: "Repère", text: "1958 : émeutes de Notting Hill. 1959 : premier carnaval caribéen de Claudia Jones. 1966 : premier carnaval de rue à Notting Hill. 1971 : politique canadienne du multiculturalisme. 2016 : Sadiq Khan maire de Londres." },
            },
            {
              heading: "États-Unis, Australie : diversité et mémoire",
              paragraphs: [
                "Aux États-Unis, l'image du melting pot est aujourd'hui discutée : beaucoup lui préfèrent celle du salad bowl, plus respectueuse des identités particulières, comme celle des communautés hispaniques et asiatiques, en forte croissance. La diversité y est aussi l'objet de débats politiques vifs, sur l'immigration, la langue ou l'enseignement de l'histoire.",
                "L'Australie a pratiqué jusqu'aux années 1970 la White Australia policy, qui limitait l'immigration non européenne, avant d'adopter une politique multiculturelle. La diversité australienne inclut aussi les peuples autochtones, aborigènes et insulaires du détroit de Torres. Le 13 février 2008, le Premier ministre Kevin Rudd présente des excuses officielles aux Stolen Generations, ces enfants autochtones retirés de force à leurs familles. Vivre ensemble suppose donc aussi de regarder le passé en face.",
              ],
            },
            {
              heading: "Langue : nuancer avec la concession et l'opposition",
              paragraphs: [
                "Although et even though (bien que, même si) introduisent une proposition avec sujet et verbe : « Although London is very diverse, some communities live separately ». Despite et in spite of (malgré) sont suivis d'un nom ou d'un verbe en -ing : « Despite the tensions, the carnival attracts huge crowds », « In spite of being born in Leeds, he is often asked where he comes from ». On ne dit jamais « despite of ». Et contrairement au français familier, on ne combine pas although et but dans la même phrase.",
                "Whereas et while opposent deux faits dans une même phrase : « Canada promotes multiculturalism, whereas France defends a republican model ». However, nevertheless et yet se placent en général en tête de phrase, suivis d'une virgule pour however et nevertheless : « Multiculturalism has many advantages. However, it can also create tensions. » Pour structurer un débat, on emploie « On the one hand... On the other hand... ».",
              ],
              box: { label: "Règle", text: "although / even though + sujet + verbe. despite / in spite of + nom ou V-ing (jamais « despite of »). whereas / while : opposition de deux faits. However, Nevertheless : en tête de phrase, suivis d'une virgule. Pas de but après although." },
            },
          ],
          keyPoints: [
            "Assimilation (fusion), integration (participation en gardant sa culture), multiculturalism (reconnaissance officielle de la diversité).",
            "E pluribus unum : devise américaine ; Canada : premier pays à adopter une politique officielle de multiculturalisme (1971).",
            "Royaume-Uni : immigration du Commonwealth, Notting Hill Carnival (Claudia Jones, 1959 ; dans la rue depuis 1966), Brick Lane.",
            "Tensions : Cameron juge le « multiculturalisme d'État » en échec (2011) ; émeutes de l'été 2024.",
            "Australie : fin de la White Australia policy dans les années 1970 ; excuses aux Stolen Generations (2008).",
            "although + proposition ; despite + nom ou V-ing ; whereas pour opposer ; However, en tête de phrase.",
          ],
          example: {
            statement: "Reliez chaque paire de phrases avec le connecteur indiqué, en modifiant la structure si nécessaire : a) London is very diverse. Some communities rarely mix. (although) b) There were riots in 1958. The carnival became a symbol of unity. (despite) c) Canada recognises communities. France does not. (whereas)",
            solution: [
              "a) Although est suivi d'une proposition complète : « Although London is very diverse, some communities rarely mix. » Pas de but dans la seconde partie.",
              "b) Despite est suivi d'un nom ou d'un V-ing ; il faut transformer la première phrase en groupe nominal : « Despite the riots of 1958, the carnival became a symbol of unity. »",
              "c) Whereas oppose deux faits dans une même phrase : « Canada recognises communities, whereas France does not. »",
              "Réponse : a) Although London is very diverse, some communities rarely mix. b) Despite the riots of 1958, the carnival became a symbol of unity. c) Canada recognises communities, whereas France does not.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez le connecteur correct : a) (Although / Despite) the rain, thousands of people went to the carnival. b) (Even though / In spite of) she was born in Toronto, people often ask where she is from. c) The USA used the image of the melting pot, (whereas / however) Canada prefers the mosaic. d) Multiculturalism is often celebrated. (However / Although), it is also criticised. e) (In spite of / Although) being a minority, the community has a strong influence on local culture.",
              hint: "Regardez ce qui suit le connecteur : une proposition avec sujet et verbe, ou un nom, ou un verbe en -ing ?",
              solution: [
                "a) Despite : suivi d'un nom (the rain).",
                "b) Even though : suivi d'une proposition (she was born).",
                "c) whereas : opposition de deux faits dans la même phrase.",
                "d) However : en tête de phrase, suivi d'une virgule, il relie deux phrases.",
                "e) In spite of : suivi d'un verbe en -ing (being).",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait d'article (texte d'entraînement inventé) et répondez en français : « In Leicester, a city in the East Midlands, people of many different origins and faiths share the same streets. Every autumn, the Diwali celebrations on Belgrave Road attract tens of thousands of visitors of all faiths. Yet community leaders warn that diversity alone does not guarantee cohesion. “Living side by side is not the same as living together,” says a local youth worker. She runs a football league where teenagers from different neighbourhoods play in mixed teams. » (Les personnes citées sont fictives.) 1) Quel est le thème de l'article ? 2) Quel événement montre la richesse de la diversité ? 3) Quelle nuance est introduite et par quel mot ? 4) Expliquez la phrase de l'animatrice. 5) Quelle solution concrète est présentée ?",
              hint: "Le connecteur Yet fait basculer l'article : repérez ce qui précède (la réussite) et ce qui suit (la limite).",
              solution: [
                "1) La diversité culturelle d'une ville britannique, Leicester, et la question de la cohésion entre communautés.",
                "2) Les célébrations de Diwali, qui attirent chaque automne des dizaines de milliers de visiteurs de toutes confessions.",
                "3) La nuance est introduite par Yet : la diversité ne garantit pas à elle seule la cohésion.",
                "4) Vivre côte à côte (dans la même ville, sans se rencontrer) n'est pas vivre ensemble (partager des activités, se connaître) ; elle distingue coexistence et cohésion.",
                "5) Une ligue de football où des adolescents de quartiers différents jouent dans des équipes mixtes.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Multiculturalism: a strength or a source of division? » Rédigez un essai de 130 à 160 mots en anglais. Employez au moins quatre connecteurs de concession ou d'opposition différents.",
              hint: "Appuyez-vous sur des exemples précis du cours (Canada, Notting Hill Carnival, Cameron en 2011, émeutes de 2024) et terminez par une position nuancée.",
              solution: [
                "Plan : introduction ; atouts du multiculturalisme ; risques et critiques ; conclusion personnelle.",
                "Proposition : « Many English-speaking countries, such as Canada and the United Kingdom, describe themselves as multicultural. Is this diversity a strength or a source of division? On the one hand, multiculturalism enriches society. Canada, which adopted an official multiculturalism policy in 1971, is often seen as a model of tolerance, and the Notting Hill Carnival, born after racist riots, now attracts huge crowds every year. Although critics claim that cultures cannot mix, everyday life proves the opposite, from food to music. On the other hand, diversity does not automatically create unity. In 2011, David Cameron argued that some communities lived separate lives, and in 2024, fake news triggered riots in several English towns. However, these tensions are often caused by poverty, ignorance or political manipulation rather than by diversity itself. In my view, multiculturalism is a strength, provided that schools, sport and culture bring people together instead of keeping them apart. »",
                "Vérification : environ 150 mots ; connecteurs : On the one hand, Although, On the other hand, However, rather than, provided that ; exemples précis et datés.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Sociétés multiculturelles et connecteurs.",
            statements: [
              { text: "Le Canada a été le premier pays à adopter une politique officielle de multiculturalisme.", true: true, why: "Elle est annoncée en 1971 par Pierre Elliott Trudeau, puis inscrite dans la loi en 1988." },
              { text: "« E pluribus unum » signifie « De plusieurs, un seul ».", true: true, why: "Cette devise des États-Unis résume l'idéal du melting pot." },
              { text: "Le Notting Hill Carnival a été créé par des musiciens jamaïcains en 1990.", true: false, why: "Il trouve son origine dans le carnaval organisé en 1959 par Claudia Jones et se tient dans la rue depuis 1966." },
              { text: "« Despite of the rain » est correct.", true: false, why: "On dit despite the rain ou in spite of the rain, jamais despite of." },
              { text: "Although est suivi d'une proposition avec un sujet et un verbe.", true: true, why: "Although she was tired... ; devant un nom, on emploie despite." },
              { text: "Le salad bowl décrit des cultures qui fusionnent jusqu'à disparaître.", true: false, why: "C'est le melting pot ; le salad bowl décrit des cultures qui coexistent en gardant leur identité." },
            ],
          },
          quiz: [
            { q: "Which image describes cultures that keep their identity side by side?", options: ["the melting pot", "assimilation", "the salad bowl", "the Grand Tour"], answer: 2, why: "Dans le salad bowl, comme dans la mosaïque canadienne, chaque culture garde ses caractéristiques." },
            { q: "Complete: « ___ the tensions, the festival was a great success. »", options: ["Despite", "Although", "Whereas", "Even though"], answer: 0, why: "Despite est suivi d'un nom (the tensions) ; although, even though et whereas introduisent une proposition." },
            { q: "Who organised the Caribbean carnival of 1959 that inspired the Notting Hill Carnival?", options: ["Sadiq Khan", "Monica Ali", "Paul Stephenson", "Claudia Jones"], answer: 3, why: "La militante trinidadienne Claudia Jones organise ce carnaval en salle en 1959, après les émeutes de 1958." },
            { q: "In 2008, the Australian Prime Minister apologised to...", options: ["the Stolen Generations", "British immigrants", "the Windrush generation", "Canadian soldiers"], answer: 0, why: "Kevin Rudd présente des excuses officielles aux enfants autochtones retirés de force à leurs familles." },
            { q: "Which sentence is correct?", options: ["Although it was late, but we stayed.", "Although it was late, we stayed.", "Despite it was late, we stayed.", "In spite it was late, we stayed."], answer: 1, why: "Although introduit une proposition et n'est jamais suivi de but dans la même phrase." },
          ],
          trap: "Écrire « despite of » ou « despite it was late », et combiner although avec but dans la même phrase (« Although it was late, but... »), calque du français familier.",
          method: "Pour un essai sur le vivre-ensemble, préparez une fiche de six connecteurs (although, despite, whereas, however, on the other hand, provided that) avec, pour chacun, une phrase modèle sur le cours. Réemployez-en au moins quatre, et vérifiez ce qui suit chacun : proposition, nom ou V-ing.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'inclusion-ecole-travail',
          title: 'Inclusion à l’école et au travail',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique de l'inclusion et du handicap (accessibility, reasonable adjustments, disabled, neurodiversity, gender pay gap).",
            "Présenter les grandes lois anglophones contre les discriminations (Equal Pay Act, Americans with Disabilities Act, Equality Act 2010).",
            "Formuler des propositions et des recommandations (should, it is essential that, it's high time + prétérit, I suggest + V-ing).",
            "Argumenter sur les politiques d'inclusion et leurs limites (quotas, affirmative action, programmes de diversité).",
          ],
          course: [
            {
              heading: "Égalité, équité, inclusion : de quoi parle-t-on ?",
              paragraphs: [
                "Une discrimination consiste à traiter quelqu'un moins favorablement en raison d'une caractéristique comme le sexe, l'origine, le handicap ou l'âge. Elle est directe (refuser un candidat parce qu'il est en fauteuil roulant) ou indirecte (une règle apparemment neutre qui désavantage un groupe, comme exiger une taille minimale sans raison). On distingue equality (donner la même chose à tous) et equity (donner à chacun ce dont il a besoin pour avoir les mêmes chances) : offrir le même escalier à tous est égal, ajouter une rampe est équitable.",
                "Diversity désigne la variété des profils dans un groupe ; inclusion, le fait que chacun puisse y participer pleinement et s'y sentir à sa place. Pour le handicap, le modèle médical voit le problème dans la déficience de la personne, alors que le modèle social (social model of disability), développé au Royaume-Uni dans les années 1970 et 1980, considère que ce sont les obstacles créés par la société (escaliers, documents illisibles, préjugés) qui handicapent.",
                "Les mots comptent. On dit a disabled person (usage courant au Royaume-Uni, en cohérence avec le modèle social) ou a person with a disability (person-first language, fréquent aux États-Unis), a wheelchair user plutôt que « confined to a wheelchair ». Le mot handicapped est aujourd'hui jugé vieilli et blessant.",
              ],
              box: { label: "Définition", text: "Equality : traiter tout le monde de la même façon. Equity : adapter le traitement aux besoins de chacun pour garantir les mêmes chances. Inclusion : permettre à chacun de participer pleinement et de se sentir à sa place." },
            },
            {
              heading: "Des lois contre les discriminations",
              paragraphs: [
                "Aux États-Unis, l'Equal Pay Act de 1963 impose l'égalité de salaire entre femmes et hommes pour un même travail ; le titre VII du Civil Rights Act de 1964 interdit les discriminations à l'embauche. Le Title IX (1972) interdit les discriminations fondées sur le sexe dans les établissements d'enseignement qui reçoivent des fonds fédéraux, ce qui a fortement développé le sport féminin. L'Americans with Disabilities Act (ADA), signé le 26 juillet 1990, interdit les discriminations liées au handicap et impose l'accessibilité des lieux publics et des « reasonable accommodations » au travail.",
                "Au Royaume-Uni, la grève des couturières de l'usine Ford de Dagenham, en 1968, contribue à l'adoption de l'Equal Pay Act de 1970. L'Equality Act de 2010 rassemble les lois antérieures et protège neuf caractéristiques (protected characteristics) : l'âge, le handicap, le changement de genre, le mariage et le partenariat civil, la grossesse et la maternité, l'origine (race), la religion ou les convictions, le sexe et l'orientation sexuelle. Les employeurs doivent procéder à des « reasonable adjustments » pour les salariés handicapés, et depuis 2017 les organisations de 250 salariés ou plus publient leur écart de salaire entre femmes et hommes (gender pay gap).",
              ],
              box: { label: "Repère", text: "1963 : Equal Pay Act (États-Unis). 1968 : grève des ouvrières de Dagenham. 1970 : Equal Pay Act (Royaume-Uni). 1972 : Title IX. 26 juillet 1990 : Americans with Disabilities Act. 2010 : Equality Act (Royaume-Uni), neuf caractéristiques protégées." },
            },
            {
              heading: "À l'école et au travail : pratiques et débats",
              paragraphs: [
                "À l'école, l'inclusion passe par l'accueil des élèves ayant des besoins éducatifs particuliers (special educational needs and disabilities, SEND, au Royaume-Uni) : accompagnants (teaching assistants), supports adaptés, temps supplémentaire aux examens (extra time). La notion de neurodiversity, proposée à la fin des années 1990 par la sociologue australienne Judy Singer, invite à voir l'autisme, le TDAH (ADHD) ou la dyslexie comme des variations naturelles du fonctionnement du cerveau plutôt que comme de simples défauts.",
                "Au travail, on dénonce le glass ceiling (plafond de verre), expression attribuée à la consultante américaine Marilyn Loden (1978), qui empêche les femmes et les minorités d'accéder aux postes de direction. Les politiques de diversité font débat. Aux États-Unis, l'affirmative action (discrimination positive) a permis pendant des décennies aux universités de tenir compte de l'origine des candidats, jusqu'à ce que la Cour suprême l'interdise le 29 juin 2023 (Students for Fair Admissions v. Harvard). En 2025, l'administration Trump a ordonné la suppression des programmes de diversité, d'équité et d'inclusion (DEI) dans l'administration fédérale. Les uns y voient un retour au mérite, les autres un recul de l'égalité réelle.",
              ],
              box: { label: "Vocabulaire", text: "accessible (accessible), a ramp (une rampe), reasonable adjustments (aménagements raisonnables), a wheelchair user (une personne en fauteuil roulant), the glass ceiling (le plafond de verre), the gender pay gap (l'écart de salaire femmes-hommes), tokenism (diversité de façade)." },
            },
            {
              heading: "Langue : faire des propositions",
              paragraphs: [
                "Pour recommander, employez should ou ought to suivis de la base verbale : « Schools should provide ramps », « Companies ought to publish their pay gap ». Pour insister sur une nécessité : « It is essential / vital / crucial that every building be accessible » (base verbale, sans s, c'est le subjonctif, de registre soutenu) ou « that every building should be accessible ». It's (high) time est suivi du prétérit : « It's high time employers paid women the same as men » (il est grand temps que).",
                "Pour suggérer : « I suggest creating a buddy system » ou « I suggest that the school (should) create a buddy system » ; « Why not organise an awareness week? » (why not + base verbale) ; « What about training teachers? » (what about + V-ing) ; « We could also... ». Attention, suggest n'est jamais suivi de to + base verbale : « I suggest to create » est incorrect.",
              ],
              box: { label: "Formule", text: "should / ought to + base verbale. It is essential that + base verbale (ou should + base). It's high time + prétérit. I suggest + V-ing ou I suggest that + (should) + base. Why not + base verbale ? What about + V-ing ?" },
            },
          ],
          keyPoints: [
            "Discrimination directe ou indirecte ; equality (la même chose pour tous) et equity (selon les besoins de chacun).",
            "Modèle social du handicap : ce sont les obstacles créés par la société qui handicapent.",
            "États-Unis : Equal Pay Act (1963), Title IX (1972), Americans with Disabilities Act (1990).",
            "Royaume-Uni : Equal Pay Act (1970, après Dagenham), Equality Act (2010, neuf caractéristiques protégées), reasonable adjustments.",
            "Débats : glass ceiling, affirmative action interdite dans les admissions universitaires américaines en 2023, programmes DEI.",
            "Proposer : should + base, It's high time + prétérit, I suggest + V-ing, Why not + base, What about + V-ing.",
          ],
          example: {
            statement: "Reformulez ces propositions avec la structure indiquée : a) Schools must train all teachers in inclusive practices. (It's high time) b) Let's create a peer-mentoring scheme. (I suggest) c) Every exam room must be accessible. (It is essential that) d) Organise an awareness day about invisible disabilities. (Why not)",
            solution: [
              "a) It's high time est suivi du prétérit, même si le sens est présent : « It's high time schools trained all teachers in inclusive practices. »",
              "b) Suggest est suivi d'un V-ing ou de that + proposition, jamais de to : « I suggest creating a peer-mentoring scheme. »",
              "c) It is essential that est suivi de la base verbale (subjonctif) ou de should + base : « It is essential that every exam room be accessible. » ou « ... should be accessible. »",
              "d) Why not est suivi de la base verbale, sans to : « Why not organise an awareness day about invisible disabilities? »",
              "Réponse : a) It's high time schools trained... b) I suggest creating... c) It is essential that every exam room be accessible. d) Why not organise...?",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque terme à sa définition en anglais : 1) the glass ceiling 2) reasonable adjustments 3) the gender pay gap 4) tokenism 5) accessibility. a) changes made by an employer so that a disabled worker is not disadvantaged b) the difference between the average earnings of men and women c) an invisible barrier that stops women or minorities from reaching top positions d) the quality of a place or service that everyone can use, including disabled people e) including a few people from minorities only to look fair.",
              hint: "Cherchez dans chaque définition un mot clé : barrier, changes, earnings, use, look fair.",
              solution: [
                "1) the glass ceiling : c) (une barrière invisible vers les postes de direction).",
                "2) reasonable adjustments : a) (aménagements faits par l'employeur).",
                "3) the gender pay gap : b) (différence de rémunération moyenne).",
                "4) tokenism : e) (diversité de façade).",
                "5) accessibility : d) (ce qui peut être utilisé par tous).",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait (texte d'entraînement inventé) et répondez en français : « When Amir, who is autistic, started his job at a software company in Manchester, his manager asked him a simple question: “What do you need to do your best work?” Amir explained that open-plan offices were very noisy for him and that he found surprise meetings stressful. The company gave him noise-cancelling headphones, a quiet desk and agendas sent the day before each meeting. These changes cost very little. Six months later, Amir's team leader described him as one of the most reliable developers in the company. » 1) Présentez Amir et sa situation. 2) Quelles difficultés rencontrait-il ? 3) Quelles mesures ont été prises et comment les appelle-t-on au Royaume-Uni ? 4) Quel est le résultat ? 5) Quelle idée le texte défend-il implicitement ?",
              hint: "Rapprochez les mesures prises de la notion juridique vue dans le cours (Equality Act 2010).",
              solution: [
                "1) Amir est autiste ; il commence un emploi de développeur dans une entreprise de logiciels à Manchester.",
                "2) Les bureaux ouverts étaient très bruyants pour lui et les réunions imprévues le stressaient.",
                "3) Un casque antibruit, un bureau au calme et l'envoi de l'ordre du jour la veille des réunions : ce sont des reasonable adjustments, que l'Equality Act de 2010 impose aux employeurs.",
                "4) Six mois plus tard, il est décrit comme l'un des développeurs les plus fiables de l'entreprise.",
                "5) L'inclusion coûte peu et profite à tous : adapter l'environnement de travail (modèle social du handicap) permet à chacun de donner le meilleur de lui-même.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Vous écrivez un article pour le journal de votre lycée, en anglais : « How can our school become more inclusive? » (130 à 160 mots). Donnez un titre, faites un constat, proposez au moins trois mesures concrètes avec des structures variées (should, It's high time, I suggest, Why not), et concluez.",
              hint: "Un article de journal scolaire s'adresse aux élèves : un titre accrocheur, une question au lecteur, des propositions précises et une conclusion mobilisatrice.",
              solution: [
                "Plan : titre ; constat (obstacles physiques, regard des autres) ; trois ou quatre propositions ; conclusion qui interpelle le lecteur.",
                "Proposition : « Title: A School Where Everyone Belongs. Have you ever tried to reach the science lab in a wheelchair? In our school, it is simply impossible, because there is no lift in building B. Inclusion is not only about buildings, though: students with dyslexia or autism also face obstacles every day, often invisible ones. First, it's high time the region installed a lift and automatic doors, as the law requires public buildings to be accessible. Second, teachers should receive training on learning differences, so that they can adapt their lessons and give extra time when needed. I also suggest creating a buddy system: each new student with special needs could be paired with a volunteer. Finally, why not organise an awareness week with talks and sports activities for everyone? Inclusion benefits us all. If each of us changes the way we look at difference, our school will truly be a place where everyone belongs. »",
                "Vérification : environ 155 mots ; titre ; constat ; propositions avec it's high time + prétérit, should, I suggest + V-ing, why not + base ; conclusion mobilisatrice.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque loi ou notion à ce qu'elle désigne.",
            pairs: [
              { left: "Americans with Disabilities Act (1990)", right: "Interdit les discriminations liées au handicap aux États-Unis" },
              { left: "Equality Act (2010)", right: "Protège neuf caractéristiques au Royaume-Uni" },
              { left: "Title IX (1972)", right: "Interdit les discriminations sexistes dans l'enseignement américain" },
              { left: "The glass ceiling", right: "Barrière invisible vers les postes de direction" },
              { left: "Neurodiversity", right: "L'autisme ou la dyslexie vus comme des variations naturelles" },
              { left: "Equity", right: "Donner à chacun ce dont il a besoin" },
            ],
          },
          quiz: [
            { q: "Which law protects nine « protected characteristics » in the UK?", options: ["the Race Relations Act", "the Equality Act 2010", "the Equal Pay Act 1970", "the Civil Rights Act"], answer: 1, why: "L'Equality Act de 2010 protège notamment l'âge, le handicap, le sexe, l'origine et la religion." },
            { q: "Complete: « It's high time companies ___ women the same as men. »", options: ["pay", "will pay", "paid", "are paying"], answer: 2, why: "It's high time est suivi du prétérit, même lorsque le sens est présent." },
            { q: "The social model of disability says that people are disabled mainly by...", options: ["their medical condition", "barriers created by society", "a lack of personal effort", "their family background and education"], answer: 1, why: "Le modèle social place le problème dans les obstacles de l'environnement, non dans la personne." },
            { q: "Which sentence is correct?", options: ["I suggest to create a buddy system.", "I suggest creating a buddy system.", "I suggest we creating a buddy system.", "I suggest to creating a buddy system."], answer: 1, why: "Suggest est suivi d'un V-ing ou de that + proposition, jamais de to + base verbale." },
            { q: "In 2023, the US Supreme Court banned...", options: ["race-conscious university admissions", "the Americans with Disabilities Act of 1990", "equal pay for women", "special needs teachers"], answer: 0, why: "Dans Students for Fair Admissions v. Harvard (29 juin 2023), la Cour a mis fin à la prise en compte de l'origine dans les admissions." },
          ],
          trap: "Écrire « I suggest to do » au lieu de « I suggest doing », ou employer le présent après It's high time (« It's high time we act » au lieu de « It's high time we acted »).",
          method: "Pour un sujet d'expression sur l'inclusion, partez d'un constat concret (un lieu, une situation), puis formulez trois propositions avec trois structures différentes (should, It's high time + prétérit, I suggest + V-ing). Relisez en vérifiant la forme verbale après chaque structure.",
        },
      ],
    },

    /* ==================================================================== */
    /* ART ET POUVOIR                                                       */
    /* ==================================================================== */
    {
      id: 'art-pouvoir',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'art-engage',
          title: 'L’art engagé : chanter, peindre, protester',
          minutes: 30,
          objectives: [
            "Analyser une œuvre engagée (chanson, peinture, art urbain) : contexte, message, procédés, réception.",
            "Situer des œuvres majeures de l'art engagé anglophone (Strange Fruit, Blowin' in the Wind, les œuvres de Banksy).",
            "Mobiliser le lexique de l'analyse artistique et de la protestation (lyrics, chorus, to denounce, to raise awareness).",
            "Discuter du pouvoir réel de l'art face au pouvoir politique.",
          ],
          course: [
            {
              heading: "Servir le pouvoir ou le contester",
              paragraphs: [
                "L'art a longtemps servi le pouvoir. Les souverains commandaient des portraits qui construisaient leur image : le célèbre Armada Portrait d'Élisabeth Ire (vers 1588) célèbre la victoire anglaise sur l'Invincible Armada espagnole, avec la main de la reine posée sur un globe, symbole de puissance. Le mécène (patron) qui commande et paie une œuvre (to commission a work) peut aussi la refuser : en 1933, le peintre mexicain Diego Rivera réalise au Rockefeller Center de New York une fresque qui inclut un portrait de Lénine ; Rivera refuse de l'effacer, et la fresque est détruite en 1934.",
                "À l'inverse, l'art engagé (committed art, protest art) conteste l'ordre établi : il dénonce une injustice (to denounce, to condemn), alerte l'opinion (to raise awareness), donne une voix à ceux qui n'en ont pas (to give a voice to the voiceless) et mobilise (to rally people around a cause). Il expose parfois ses auteurs à la censure, à la prison ou à l'exil.",
              ],
              box: { label: "Vocabulaire", text: "a patron (un mécène), to commission (commander une œuvre), committed art (l'art engagé), to denounce (dénoncer), to raise awareness (sensibiliser), to stand up for (défendre), an anthem (un hymne), a mural (une fresque murale)." },
            },
            {
              heading: "Chanter pour protester",
              paragraphs: [
                "En 1939, Billie Holiday enregistre Strange Fruit, tiré d'un poème publié en 1937 par Abel Meeropol, professeur new-yorkais. Le « fruit étrange » est une métaphore glaçante : les corps des Afro-Américains lynchés pendus aux arbres du Sud. Le contraste entre la douceur du décor du Sud et l'horreur décrite rend la dénonciation d'autant plus forte. La chanson, longtemps peu diffusée à la radio, est devenue un hymne contre le racisme.",
                "Dans les années 1960, la protest song accompagne le mouvement des droits civiques et l'opposition à la guerre du Viêt Nam. Bob Dylan pose une série de questions rhétoriques sur la paix et la liberté dans Blowin' in the Wind (1963) ; Sam Cooke chante l'espoir dans A Change Is Gonna Come (1964) ; Nina Simone exprime sa colère dans Mississippi Goddam (1964), écrite après l'assassinat du militant Medgar Evers et l'attentat contre une église de Birmingham en 1963. En 1969, Fortunate Son de Creedence Clearwater Revival dénonce les fils de privilégiés qui échappent à la conscription. Bob Dylan reçoit le prix Nobel de littérature en 2016.",
                "La tradition continue. En 1984, Free Nelson Mandela du groupe britannique The Special AKA popularise la campagne pour la libération du dirigeant sud-africain, libéré en 1990. En 2015, le refrain d'Alright de Kendrick Lamar est repris en chœur dans des manifestations du mouvement Black Lives Matter.",
              ],
              box: { label: "Repère", text: "1939 : Strange Fruit (Billie Holiday). 1963 : Blowin' in the Wind (Bob Dylan). 1964 : A Change Is Gonna Come (Sam Cooke), Mississippi Goddam (Nina Simone). 1984 : Free Nelson Mandela. 2015 : Alright (Kendrick Lamar). 2016 : prix Nobel de littérature pour Bob Dylan." },
            },
            {
              heading: "Peindre, afficher, investir la rue",
              paragraphs: [
                "La peinture peut devenir un manifeste. Guernica (1937), de l'Espagnol Pablo Picasso, dénonce le bombardement d'une ville basque pendant la guerre d'Espagne ; une tapisserie qui le reproduit est exposée au siège de l'ONU à New York, et en février 2003 elle fut recouverte d'un rideau lorsque le secrétaire d'État américain Colin Powell y défendit devant la presse une intervention militaire en Irak. Aux États-Unis, Norman Rockwell peint en 1964 The Problem We All Live With : la petite Ruby Bridges, six ans, escortée par des marshals fédéraux pour entrer dans une école blanche de La Nouvelle-Orléans en 1960.",
                "L'art urbain (street art) investit l'espace public sans autorisation. Banksy, artiste anonyme originaire de Bristol, utilise le pochoir (stencil) pour des images ironiques sur la guerre, la surveillance ou la société de consommation ; en 2005, il peint sur le mur de séparation en Cisjordanie. En octobre 2018, son tableau Girl with Balloon s'autodétruit en partie, découpé par une broyeuse cachée dans le cadre, juste après sa vente aux enchères chez Sotheby's : l'œuvre, rebaptisée Love is in the Bin, critique le marché de l'art. En 1986, Keith Haring peint à New York la fresque Crack is Wack contre les ravages de la drogue.",
              ],
            },
            {
              heading: "Analyser une œuvre engagée : méthode",
              paragraphs: [
                "Une analyse suit quatre étapes. Le contexte : qui est l'artiste, quand et où l'œuvre est-elle créée, contre quoi ou pour quoi ? Le contenu : quel est le message, quels personnages, symboles ou situations sont représentés ? La forme : pour une chanson, les paroles (lyrics), les couplets (verses), le refrain (chorus), la mélodie (tune), les répétitions, les questions rhétoriques, l'ironie ; pour une image, la composition, les couleurs, les contrastes. La réception : quel effet l'œuvre a-t-elle produit, a-t-elle été censurée, reprise, détournée ?",
                "Pour rédiger, employez le présent simple de l'analyse (« The song denounces racial violence », « The painting shows a little girl ») et des verbes variés : to depict (représenter), to portray (dépeindre), to convey (transmettre), to criticise, to highlight (souligner), to appeal to (faire appel à). Distinguez toujours ce que vous voyez ou entendez (description) de ce que vous en déduisez (interprétation) : « The repetition of the question suggests that... ».",
              ],
              box: { label: "Méthode", text: "1. Contexte (artiste, date, lieu, cause). 2. Contenu (message, symboles). 3. Forme (paroles, refrain, répétitions, couleurs, composition). 4. Réception (impact, censure, reprises). Rédigez au présent : the song denounces, the mural depicts." },
            },
          ],
          keyPoints: [
            "L'art peut servir le pouvoir (portraits royaux, commandes) ou le contester (committed art, protest art).",
            "Strange Fruit (Billie Holiday, 1939) dénonce les lynchages ; Blowin' in the Wind (Bob Dylan, 1963) accompagne les droits civiques.",
            "Guernica (Picasso, 1937), The Problem We All Live With (Rockwell, 1964), Banksy et le street art.",
            "Analyse : contexte, contenu, forme (lyrics, verse, chorus, composition), réception.",
            "Lexique : to denounce, to raise awareness, to depict, to convey, to highlight, an anthem, a mural, a stencil.",
          ],
          example: {
            statement: "Analysez en anglais ce refrain d'une chanson de protestation (paroles inventées pour l'entraînement), écrite pour une manifestation contre la fermeture d'une usine : « They closed the gates and sold the land, / They never asked, they never planned. / But we are here, and we will stay: / You cannot sell our lives away. »",
            solution: [
              "Contexte : une chanson écrite pour une manifestation d'ouvriers contre la fermeture de leur usine ; c'est une protest song.",
              "Contenu : deux groupes s'opposent, « they » (les dirigeants, les propriétaires) et « we » (les ouvriers) ; la chanson dénonce une décision prise sans consultation.",
              "Forme : rimes plates (land / planned, stay / away), répétition de « they never », opposition marquée par « But », passage du prétérit (les décisions passées) au présent et au futur (la résistance) ; la dernière phrase s'adresse directement aux dirigeants (« You »).",
              "Effet visé : un refrain court, rythmé et facile à chanter en chœur, qui soude le groupe et exprime sa détermination.",
              "Réponse : « This chorus comes from a protest song written for workers who are fighting the closure of their factory. It contrasts “they”, the owners who made decisions without consulting anyone, with “we”, the workers who refuse to give up. The repetition of “they never” stresses the injustice, while “But” marks the turning point towards resistance. The simple rhymes and strong rhythm make it easy to sing in a crowd, which helps unite the protesters. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec : lyrics, chorus, to raise awareness, stencil, patron, anthem. a) The ___ of a song are its words. b) The ___ is the part that is repeated after each verse. c) Banksy often uses a ___ to paint his images quickly. d) Many artists use their fame ___ of social issues. e) In the Renaissance, a rich ___ paid artists to create works. f) Strange Fruit became an ___ against racism.",
              hint: "Lisez chaque phrase en entier et repérez la catégorie du mot attendu : nom pluriel, nom singulier précédé de a ou an, ou verbe à l'infinitif.",
              solution: [
                "a) lyrics (toujours au pluriel pour les paroles d'une chanson).",
                "b) chorus.",
                "c) stencil.",
                "d) to raise awareness.",
                "e) patron (mécène ; faux ami : un « patron » d'entreprise se dit a boss).",
                "f) anthem.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet article (texte d'entraînement inventé ; la ville et l'artiste sont fictifs) et répondez en français : « Overnight, a huge mural appeared on the wall of the old job centre in Millbrook. It shows a giant hand, wearing a golden ring, pulling the plug out of a bath full of children's toys. Nobody knows who painted it, but the style recalls the stencils of Banksy. The town council first announced that the mural would be removed, as it had been painted without permission. However, after a petition signed by 5,000 residents, the council changed its mind. The mural is now protected by a sheet of glass. » 1) Décrivez l'œuvre. 2) Proposez une interprétation des symboles (la main baguée, la bonde, les jouets). 3) Pourquoi la municipalité voulait-elle effacer la fresque ? 4) Qu'est-ce qui l'a fait changer d'avis, et que révèle ce revirement ?",
              hint: "Distinguez ce que l'on voit (description) de ce que cela peut signifier (interprétation), et appuyez-vous sur le lieu choisi, une ancienne agence pour l'emploi.",
              solution: [
                "1) Une immense fresque, peinte de nuit sur le mur d'une ancienne agence pour l'emploi : une main géante portant une bague en or retire la bonde d'une baignoire remplie de jouets d'enfants.",
                "2) La main baguée peut représenter les riches ou les puissants ; en retirant la bonde, ils vident la baignoire, c'est-à-dire qu'ils privent les familles et les enfants de leurs ressources ou de leur avenir. Le lieu (une agence pour l'emploi fermée) suggère une critique du chômage et des coupes dans les services publics.",
                "3) Parce qu'elle avait été peinte sans autorisation (« without permission »).",
                "4) Une pétition signée par 5 000 habitants (chiffre fictif). Ce revirement montre que l'art urbain, d'abord considéré comme du vandalisme, peut être reconnu comme une œuvre d'art et un patrimoine par la population, et que l'opinion publique peut peser sur le pouvoir local.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Can art change the world? » Rédigez un essai argumenté en anglais de 130 à 160 mots, en vous appuyant sur au moins deux œuvres précises.",
              hint: "Opposez le pouvoir de sensibilisation de l'art (exemples précis et datés) à ses limites (l'art seul ne change pas les lois), puis concluez de façon nuancée.",
              solution: [
                "Plan : introduction ; l'art sensibilise et mobilise (Strange Fruit, Blowin' in the Wind, Free Nelson Mandela) ; limites (récupération commerciale, l'action politique reste décisive) ; conclusion.",
                "Proposition : « For centuries, artists have tried to denounce injustice. But can a song or a painting really change the world? On the one hand, art can raise awareness in a way that speeches cannot. When Billie Holiday sang Strange Fruit in 1939, she forced her audience to face the horror of lynching. In the 1960s, Bob Dylan's Blowin' in the Wind became an anthem of the civil rights movement, and in 1984 Free Nelson Mandela made millions of young people aware of apartheid. On the other hand, art alone does not change laws. Segregation ended because activists marched and boycotted, and because politicians voted new laws. Moreover, protest art can be turned into a product, as the sale of Banksy's works for millions shows. To conclude, art cannot change the world on its own, but it changes the way people see the world, and that is often the first step. »",
                "Vérification : environ 150 mots ; trois œuvres datées ; connecteurs (On the one hand, On the other hand, Moreover, To conclude) ; conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque œuvre à son auteur ou à son interprète.",
            pairs: [
              { left: "Strange Fruit (1939)", right: "Billie Holiday" },
              { left: "Blowin' in the Wind (1963)", right: "Bob Dylan" },
              { left: "Mississippi Goddam (1964)", right: "Nina Simone" },
              { left: "The Problem We All Live With (1964)", right: "Norman Rockwell" },
              { left: "Girl with Balloon", right: "Banksy" },
              { left: "Free Nelson Mandela (1984)", right: "The Special AKA" },
            ],
          },
          quiz: [
            { q: "Strange Fruit, recorded by Billie Holiday in 1939, denounces...", options: ["lynchings in the American South", "the Vietnam War", "pollution in big cities", "unemployment during the Great Depression"], answer: 0, why: "Le « fruit étrange » désigne les corps des victimes de lynchages pendus aux arbres du Sud." },
            { q: "The part of a song that is repeated after each verse is the...", options: ["bridge", "chorus", "stanza", "lyrics"], answer: 1, why: "Le chorus, ou refrain, revient après chaque couplet (verse)." },
            { q: "Who received the Nobel Prize in Literature in 2016?", options: ["Kendrick Lamar", "Nina Simone", "Bob Dylan", "Billie Holiday"], answer: 2, why: "Bob Dylan a reçu le prix Nobel de littérature en 2016 pour avoir créé de nouvelles formes d'expression poétique dans la chanson." },
            { q: "Why was Diego Rivera's mural at the Rockefeller Center destroyed in 1934?", options: ["It had been badly damaged by a fire", "It included a portrait of Lenin", "The building was demolished", "Rivera asked for more money"], answer: 1, why: "Rivera refusa d'effacer le portrait de Lénine demandé par son commanditaire : la fresque fut détruite." },
            { q: "« To raise awareness » means...", options: ["to collect money for a charity event", "to organise a demonstration in the street", "to wake someone up early in the morning", "to make people conscious of an issue"], answer: 3, why: "To raise awareness, c'est sensibiliser l'opinion, faire prendre conscience d'un problème." },
          ],
          trap: "Se contenter de paraphraser les paroles ou de décrire l'image sans les replacer dans leur contexte (date, cause défendue) ni analyser la forme (refrain, répétitions, symboles), ou confondre patron (mécène) et boss.",
          method: "Pour chaque œuvre engagée étudiée, remplissez une fiche en quatre lignes (contexte, message, procédés, réception) avec une date et un mot de vocabulaire précis par ligne. Avec cinq fiches, vous disposerez d'exemples pour tout essai sur l'art et le pouvoir.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'pouvoir-des-images',
          title: 'Le pouvoir des images et des médias',
          minutes: 30,
          objectives: [
            "Décrire et analyser une image (affiche, photographie, publicité) avec le lexique adapté.",
            "Identifier les procédés de la propagande et de la persuasion visuelle.",
            "Situer quelques images emblématiques du monde anglophone (Lord Kitchener Wants You, Uncle Sam, We Can Do It!, Migrant Mother).",
            "Exercer son esprit critique face aux médias : fausses informations, deepfakes, vérification des sources.",
          ],
          course: [
            {
              heading: "Décrire une image : le lexique indispensable",
              paragraphs: [
                "Commencez par identifier le document : a poster (une affiche), a photograph, a cartoon (un dessin de presse), an advertisement (une publicité), a magazine cover. Repérez la légende (caption), le slogan, le titre (headline), la date et la source. Situez ensuite les éléments : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle, on the left / on the right, in the top left-hand corner, at the bottom of the picture.",
                "Le cadrage et l'angle de vue produisent un effet : a close-up (un gros plan) crée de l'intimité ou de l'émotion ; a wide shot (un plan large) montre le contexte ; a low-angle shot (une contre-plongée) grandit le sujet et le rend puissant ; a high-angle shot (une plongée) l'écrase et le rend vulnérable. Les couleurs (warm colours, dark tones), la lumière et les contrastes guident le regard du spectateur (the viewer) et orientent l'interprétation.",
                "Pour formuler des hypothèses, employez les modaux de probabilité : « It may / might be a protest » (peut-être), « It must be winter » (déduction forte : ce doit être l'hiver), « It can't be a recent photo » (impossibilité). Les verbes de perception sont aussi utiles : « The man looks angry » (look + adjectif), « It looks like a battlefield » (look like + nom), « She seems to be waiting ».",
              ],
              box: { label: "Vocabulaire", text: "in the foreground / background (au premier plan / à l'arrière-plan), a close-up (un gros plan), a low-angle shot (une contre-plongée), a high-angle shot (une plongée), the caption (la légende), the viewer (le spectateur), to catch the eye (attirer l'œil)." },
            },
            {
              heading: "Mobiliser par l'image : la propagande",
              paragraphs: [
                "La propagande cherche à influencer l'opinion au service d'un pouvoir ou d'une cause. Pendant la Première Guerre mondiale, le Royaume-Uni n'impose la conscription qu'en 1916 : il faut convaincre les hommes de s'engager. En 1914, une illustration d'Alfred Leete montre Lord Kitchener, ministre de la Guerre, pointant du doigt le spectateur, avec, selon les versions, la formule « Your Country Needs You » ou « Britons [Kitchener] wants you ». L'image inspire l'affiche américaine de James Montgomery Flagg (1917) : l'Oncle Sam, haut-de-forme étoilé et regard sévère, pointe le doigt au-dessus du slogan « I Want YOU for U.S. Army ». Le regard et le doigt dirigés vers le spectateur l'impliquent personnellement.",
                "Pendant la Seconde Guerre mondiale, l'affiche We Can Do It! (J. Howard Miller, 1943), destinée aux ouvrières d'une usine américaine, montre une femme en bleu de travail relevant sa manche ; redécouverte dans les années 1980, elle est devenue une icône féministe, associée à la figure de Rosie the Riveter. L'affiche britannique Keep Calm and Carry On, imprimée en 1939 mais presque jamais affichée, n'a été redécouverte qu'en 2000 dans une librairie du nord de l'Angleterre, avant de devenir un motif décliné à l'infini.",
                "En 1937, l'Institute for Propaganda Analysis américain a décrit sept procédés : name-calling (dénigrer l'adversaire par une étiquette), glittering generalities (de grands mots flatteurs et vagues : freedom, nation), transfer (associer une cause à un symbole respecté, comme le drapeau), testimonial (le témoignage d'une célébrité), plain folks (« je suis comme vous »), card stacking (ne montrer que les faits favorables) et bandwagon (« tout le monde le fait, rejoignez-nous »).",
              ],
              box: { label: "Repère", text: "1914 : Lord Kitchener pointe le doigt vers le spectateur (Alfred Leete). 1917 : « I Want YOU for U.S. Army » (James Montgomery Flagg). 1939 : Keep Calm and Carry On. 1943 : We Can Do It! (J. Howard Miller). 1937 : les sept procédés de l'Institute for Propaganda Analysis." },
            },
            {
              heading: "Photographier pour témoigner",
              paragraphs: [
                "La photographie documentaire peut changer le regard d'une société. En 1936, pendant la Grande Dépression, Dorothea Lange photographie pour une agence fédérale, la Farm Security Administration, une mère de famille épuisée entourée de ses enfants dans un camp de travailleurs agricoles en Californie : Migrant Mother devient le symbole de la misère rurale. Le 24 décembre 1968, l'astronaute William Anders prend, depuis la mission Apollo 8, la photo Earthrise, la Terre se levant au-dessus de la Lune, souvent associée à l'essor de la conscience écologique.",
                "Une photographie n'est pourtant jamais totalement neutre : le photographe choisit le cadrage, le moment, ce qu'il laisse hors champ ; une légende peut orienter le sens ; une image peut être recadrée (cropped), mise en scène (staged) ou retouchée (doctored). Analyser une photo, c'est donc se demander qui l'a prise, pour qui, dans quel but, et ce qu'elle ne montre pas.",
              ],
            },
            {
              heading: "Images et médias aujourd'hui : soft power et désinformation",
              paragraphs: [
                "Le politiste américain Joseph Nye a forgé en 1990 la notion de soft power : la capacité d'un pays à influencer les autres par l'attraction de sa culture et de ses valeurs plutôt que par la force (hard power). Le cinéma hollywoodien, les séries, la musique et les réseaux sociaux américains en sont des instruments puissants.",
                "Les images circulent aujourd'hui à une vitesse inédite, et la désinformation avec elles : fausses informations (fake news), images sorties de leur contexte, deepfakes (vidéos truquées par l'intelligence artificielle, mot apparu en 2017). Pour vérifier une image, remontez à la source, contrôlez la date, faites une recherche d'image inversée (reverse image search), pratiquez la lecture latérale (lateral reading : ouvrir d'autres onglets pour savoir qui se cache derrière un site), comparez avec des médias fiables, et méfiez-vous d'une image qui provoque une émotion très forte.",
              ],
              box: { label: "Méthode", text: "Vérifier une image : 1. Qui l'a publiée, et où ? 2. De quand date-t-elle ? 3. Recherche d'image inversée. 4. Lecture latérale : que disent d'autres sources ? 5. L'émotion qu'elle provoque est-elle recherchée ?" },
            },
          ],
          keyPoints: [
            "Décrire : in the foreground / background, on the left, in the top right-hand corner, a close-up, a low-angle shot.",
            "Hypothèses : it may / might be (possible), it must be (déduction forte), it can't be (impossible), it looks like + nom.",
            "Kitchener (1914) et Uncle Sam (1917) interpellent le spectateur ; We Can Do It! (1943) devient une icône féministe.",
            "Sept procédés de propagande (1937) : name-calling, glittering generalities, transfer, testimonial, plain folks, card stacking, bandwagon.",
            "Migrant Mother (Dorothea Lange, 1936), Earthrise (1968) : la photo témoigne mais n'est jamais neutre.",
            "Soft power (Joseph Nye, 1990) ; contre la désinformation : source, date, recherche inversée, lecture latérale.",
          ],
          example: {
            statement: "Voici la description de l'affiche américaine de 1917 de James Montgomery Flagg : un homme âgé à barbiche blanche, coiffé d'un haut-de-forme orné d'étoiles, vêtu d'une veste bleue et d'un nœud de cravate, fixe le spectateur d'un air sévère et pointe l'index droit vers lui ; en bas, en grandes lettres : « I WANT YOU FOR U.S. ARMY », puis « NEAREST RECRUITING STATION ». Décrivez et analysez cette affiche en anglais (5 phrases).",
            solution: [
              "Identifier le document : une affiche de recrutement américaine de 1917, année de l'entrée en guerre des États-Unis.",
              "Décrire le personnage et la composition : l'Oncle Sam, personnification des États-Unis, en buste, au centre, en gros plan.",
              "Analyser les procédés : le regard et le doigt pointés vers le spectateur, le pronom YOU en capitales, les couleurs du drapeau (transfer).",
              "Dégager le but : faire de l'engagement un devoir personnel, et donner une consigne concrète (le bureau de recrutement le plus proche).",
              "Réponse : « This is an American recruitment poster designed by James Montgomery Flagg in 1917, when the United States entered the First World War. In the middle, we can see Uncle Sam, the personification of the country, in a close-up: he is wearing a top hat decorated with stars. He is staring at the viewer and pointing his finger straight at him, which makes the message very personal. The word “YOU” is written in capital letters, and the colours of the flag appeal to patriotism. The aim is to persuade young men that joining the army is their duty, and to send them to the nearest recruiting station. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez les expressions entre parenthèses : a) (Au premier plan), a woman is holding a placard. b) (À l'arrière-plan), we can see a burning building. c) The slogan is written (en haut à droite). d) The photographer used (une contre-plongée) to make the leader look powerful. e) The man (a l'air) exhausted. f) It (doit être) a demonstration: there are hundreds of placards.",
              hint: "Pour la dernière phrase, demandez-vous s'il s'agit d'une simple possibilité ou d'une déduction forte fondée sur un indice.",
              solution: [
                "a) In the foreground.",
                "b) In the background.",
                "c) in the top right-hand corner.",
                "d) a low-angle shot.",
                "e) looks (look + adjectif : The man looks exhausted).",
                "f) must be : déduction forte fondée sur un indice (des centaines de pancartes).",
              ],
            },
            {
              level: 2,
              statement: "Identifiez le procédé de propagande ou de persuasion utilisé dans chacun de ces slogans (slogans inventés pour l'entraînement) : a) « Ten million families already drink FreshCo. What are you waiting for? » b) « Olympic champion Lisa Grant trusts only SpeedRun shoes. » c) « Our opponents are dangerous extremists. » d) « Vote Harris: for freedom, for the future, for the nation! » e) « I grew up on a farm, just like you. I know your problems. »",
              hint: "Reprenez les sept procédés du cours : demandez-vous si le slogan s'appuie sur le nombre, sur une célébrité, sur une étiquette dénigrante, sur des mots flatteurs et vagues ou sur une proximité affichée.",
              solution: [
                "a) Bandwagon : tout le monde le fait déjà, il faut suivre le mouvement.",
                "b) Testimonial : le témoignage d'une célébrité (une championne) sert de garantie.",
                "c) Name-calling : une étiquette dénigrante (« dangerous extremists ») remplace l'argument.",
                "d) Glittering generalities : de grands mots flatteurs et vagues (freedom, future, nation) sans programme précis.",
                "e) Plain folks : le candidat se présente comme une personne ordinaire, proche des électeurs.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « In the age of deepfakes, can we still trust images? » Rédigez un essai argumenté en anglais de 130 à 160 mots.",
              hint: "Montrez que les images ont toujours pu être manipulées, que l'intelligence artificielle change l'échelle du problème, puis proposez des moyens concrets de vérification avant de conclure.",
              solution: [
                "Plan : introduction (le pouvoir des images) ; les images ont toujours été construites (cadrage, mise en scène, propagande) ; les deepfakes changent l'échelle ; solutions (vérification, éducation aux médias) ; conclusion.",
                "Proposition : « Images have always had a huge influence on public opinion, from war posters to news photographs. But with deepfakes, can we still believe what we see? First, it is important to remember that images were never completely objective. Photographers choose what to show, and propaganda posters such as Uncle Sam in 1917 were designed to manipulate emotions. However, artificial intelligence has changed the scale of the problem: today, anyone can create a realistic fake video of a politician in a few minutes and share it with millions of people. As a result, many people no longer know what is true. Nevertheless, we are not powerless. We can check the source and the date of an image, use reverse image search and compare several reliable media. In my opinion, we can still trust images, but only if we learn to question them instead of reacting immediately. »",
                "Vérification : environ 145 mots ; un exemple historique précis ; connecteurs (First, However, As a result, Nevertheless, In my opinion) ; des solutions concrètes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Images, propagande et médias.",
            statements: [
              { text: "Une contre-plongée (low-angle shot) donne une impression de puissance au sujet.", true: true, why: "Filmé ou photographié d'en bas, le sujet paraît plus grand et plus imposant." },
              { text: "« It must be a protest » exprime une simple possibilité.", true: false, why: "Must exprime ici une déduction forte ; la simple possibilité se dit may ou might." },
              { text: "L'affiche Keep Calm and Carry On a été placardée partout au Royaume-Uni pendant la guerre.", true: false, why: "Imprimée en 1939, elle n'a presque jamais été affichée ; elle n'est devenue célèbre qu'après sa redécouverte en 2000." },
              { text: "Le procédé bandwagon consiste à dire « tout le monde le fait ».", true: true, why: "Il pousse à rejoindre le mouvement pour ne pas rester à l'écart." },
              { text: "Migrant Mother a été photographiée par Dorothea Lange pendant la Grande Dépression.", true: true, why: "La photo date de 1936 et a été prise pour la Farm Security Administration." },
              { text: "Une photographie de presse est toujours une reproduction neutre de la réalité.", true: false, why: "Le cadrage, le moment choisi, la légende ou les retouches orientent toujours le sens." },
              { text: "Le soft power désigne l'influence d'un pays par sa puissance militaire.", true: false, why: "C'est le hard power ; le soft power repose sur l'attraction de la culture et des valeurs." },
            ],
          },
          quiz: [
            { q: "« In the foreground » means...", options: ["au premier plan", "à l'arrière-plan", "en haut à gauche", "au centre"], answer: 0, why: "Foreground : le premier plan ; background : l'arrière-plan." },
            { q: "A low-angle shot usually makes the subject look...", options: ["small and weak", "powerful", "far away", "blurred and unclear"], answer: 1, why: "Vu d'en bas, le sujet paraît dominant ; une plongée (high-angle shot) le rend vulnérable." },
            { q: "Who is pointing at the viewer in Flagg's 1917 recruitment poster?", options: ["Lord Kitchener", "Abraham Lincoln", "Uncle Sam", "George Washington"], answer: 2, why: "L'Oncle Sam, personnification des États-Unis, pointe le doigt au-dessus du slogan « I Want YOU for U.S. Army »." },
            { q: "Which propaganda technique tells you that « everybody is doing it »?", options: ["name-calling", "testimonial", "card stacking", "bandwagon"], answer: 3, why: "Le bandwagon invite à suivre la majorité ; le testimonial s'appuie sur une célébrité." },
            { q: "In « It must be a protest », must expresses...", options: ["an obligation imposed by someone", "a strong deduction", "a weak possibility", "a habit in the past"], answer: 1, why: "Must exprime ici une déduction fondée sur des indices, et non une obligation." },
          ],
          trap: "Se limiter à une description plate de l'image (« there is... there is... ») sans analyser l'effet du cadrage, des couleurs et du slogan, ou confondre must (déduction forte) et may (simple possibilité) dans les hypothèses.",
          method: "Décrivez toujours une image en allant du général au particulier : nature et source du document, impression d'ensemble, premier plan puis arrière-plan, texte et slogan, procédés, enfin but et public visé. Terminez par une phrase d'interprétation introduite par « The aim is to... » ou « This suggests that... ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'censure-liberte',
          title: 'Censure et liberté d’expression',
          minutes: 35,
          objectives: [
            "Définir la liberté d'expression et ses limites dans les pays anglophones (Premier amendement, diffamation, discours de haine).",
            "Situer des cas emblématiques de censure : code Hays, maccarthysme, procès de Lady Chatterley's Lover, affaire Rushdie, livres retirés des bibliothèques.",
            "Analyser la représentation de la censure dans la fiction (Nineteen Eighty-Four, Fahrenheit 451).",
            "Exprimer l'interdiction et la permission (be allowed to, be banned from, prevent somebody from + V-ing).",
          ],
          course: [
            {
              heading: "La liberté d'expression : un principe et ses limites",
              paragraphs: [
                "En 1644, dans Areopagitica, le poète anglais John Milton s'élève contre l'obligation d'obtenir une autorisation préalable pour publier un livre. Aux États-Unis, le Premier amendement, ratifié en 1791 avec la Déclaration des droits (Bill of Rights), commence ainsi : « Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press ». Il protège la liberté de religion, d'expression, de la presse, de réunion et de pétition. En 1969, l'arrêt Tinker v. Des Moines reconnaît que des élèves qui portaient des brassards noirs contre la guerre du Viêt Nam n'abandonnent pas leurs droits constitutionnels à la porte de l'école.",
                "La protection américaine est très large : même des propos haineux sont en général protégés, sauf s'ils incitent directement à une violence imminente (arrêt Brandenburg v. Ohio, 1969), s'ils constituent de véritables menaces ou s'ils sont diffamatoires (defamation : libel à l'écrit, slander à l'oral). Surtout, le Premier amendement limite le pouvoir de l'État, pas celui des entreprises privées : un réseau social qui supprime un message ne viole pas la Constitution. Au Royaume-Uni, la liberté d'expression est garantie par le Human Rights Act de 1998, qui intègre l'article 10 de la Convention européenne des droits de l'homme, mais la loi y réprime plus sévèrement les propos incitant à la haine.",
              ],
              box: { label: "Repère", text: "1644 : Areopagitica (John Milton). 1791 : Premier amendement. 1969 : Tinker v. Des Moines (liberté d'expression des élèves) et Brandenburg v. Ohio (incitation à la violence imminente). 1998 : Human Rights Act au Royaume-Uni." },
            },
            {
              heading: "Censure et pouvoir : quelques cas emblématiques",
              paragraphs: [
                "Le cinéma hollywoodien s'est longtemps autocensuré : le code Hays (Motion Picture Production Code), adopté en 1930 et strictement appliqué de 1934 à son abandon en 1968, interdisait de montrer le crime sous un jour favorable, la nudité ou certains thèmes jugés immoraux ; il est remplacé par un système de classification par âge. Pendant le maccarthysme, la chasse aux communistes des années 1950, la commission des activités antiaméricaines de la Chambre des représentants (HUAC) convoque des artistes ; les Hollywood Ten, qui refusent de répondre en 1947, sont condamnés à la prison et inscrits sur une liste noire (blacklist). Arthur Miller répond par The Crucible (1953), pièce sur les procès des sorcières de Salem (1692), allégorie de cette chasse aux sorcières.",
                "En 1960, au Royaume-Uni, l'éditeur Penguin est poursuivi pour avoir publié en version intégrale Lady Chatterley's Lover de D. H. Lawrence, au nom de l'Obscene Publications Act de 1959 ; il est acquitté, et ce procès marque un tournant vers une société plus libérale. En 1989, l'ayatollah Khomeini, guide suprême iranien, lance une fatwa appelant au meurtre de Salman Rushdie, auteur des Satanic Verses (1988) ; l'écrivain vit des années sous protection. En août 2022, il est grièvement blessé au couteau lors d'une conférence dans l'État de New York et perd l'usage d'un œil.",
              ],
              box: { label: "À retenir", text: "Censure d'État (lois, tribunaux, listes noires), censure religieuse (la fatwa contre Rushdie), censure économique ou professionnelle (le code Hays), autocensure (s'interdire soi-même de parler par peur des conséquences)." },
            },
            {
              heading: "Aujourd'hui : bibliothèques, réseaux sociaux et autocensure",
              paragraphs: [
                "Aux États-Unis, l'American Library Association et l'association d'écrivains PEN America constatent depuis 2021 une forte hausse des demandes de retrait de livres dans les bibliothèques scolaires et publiques. Les livres visés traitent souvent du racisme, du genre ou de la sexualité, comme The Bluest Eye de Toni Morrison, The Handmaid's Tale de Margaret Atwood ou Gender Queer de Maia Kobabe. Chaque année depuis 1982, la Banned Books Week célèbre la liberté de lire. Les partisans des retraits invoquent la protection des enfants et le droit des parents ; leurs opposants dénoncent une censure.",
                "Sur les réseaux sociaux, la modération des contenus soulève des débats : faut-il supprimer les fausses informations et les discours de haine, au risque de restreindre l'expression, ou tout laisser circuler ? Le Royaume-Uni a adopté en 2023 l'Online Safety Act, qui impose aux plateformes de protéger les utilisateurs, en particulier les mineurs, contre les contenus illégaux ou dangereux. On parle aussi de cancel culture (la mise au ban publique d'une personne après des propos jugés offensants) et d'autocensure (self-censorship). Attention à une célèbre fausse citation : la phrase « I disapprove of what you say, but I will defend to the death your right to say it » n'est pas de Voltaire, mais de sa biographe britannique Evelyn Beatrice Hall (1906), qui résumait ainsi son attitude.",
              ],
            },
            {
              heading: "La censure dans la fiction et la langue de l'interdit",
              paragraphs: [
                "La fiction a imaginé des sociétés de censure totale. Dans Nineteen Eighty-Four (1949), George Orwell décrit un régime dominé par Big Brother, où le ministère de la Vérité réécrit sans cesse le passé et où la novlangue (Newspeak) réduit le vocabulaire pour rendre toute pensée dissidente impossible (thoughtcrime). Dans Fahrenheit 451 (1953), Ray Bradbury imagine des pompiers chargés de brûler les livres ; le titre renvoie à la température à laquelle, selon le roman, le papier s'enflamme. Dans The Handmaid's Tale (1985), Margaret Atwood montre une dictature où les femmes n'ont plus le droit de lire.",
                "Pour exprimer l'interdiction et la permission : be (not) allowed to + base verbale (« Women are not allowed to read »), be forbidden to, ban + nom (« The government banned the book ») ou ban somebody from + V-ing (« He was banned from publishing »), prevent / stop somebody from + V-ing (« Censorship prevents people from expressing themselves »), let somebody + base verbale (« They didn't let him speak »). Attention au faux ami : to censor signifie censurer, alors que to censure signifie blâmer officiellement.",
              ],
              box: { label: "Règle", text: "be allowed to + base verbale. ban + nom ; ban sb from + V-ing. prevent / stop sb from + V-ing. let sb + base verbale (sans to). to censor = censurer ; to censure = blâmer officiellement." },
            },
          ],
          keyPoints: [
            "Premier amendement (1791) : liberté de religion, d'expression, de la presse, de réunion et de pétition ; il limite l'État, pas les entreprises privées.",
            "Limites : diffamation (libel, slander), menaces, incitation directe à une violence imminente ; Royaume-Uni : Human Rights Act (1998).",
            "Cas : code Hays (1934-1968), Hollywood Ten (1947), The Crucible (1953), procès Lady Chatterley (1960), fatwa contre Rushdie (1989).",
            "Aujourd'hui : livres retirés des bibliothèques américaines, modération des réseaux, Online Safety Act (2023), autocensure.",
            "Fiction : Nineteen Eighty-Four (Orwell, 1949), Fahrenheit 451 (Bradbury, 1953), The Handmaid's Tale (Atwood, 1985).",
            "be allowed to + base ; ban sb from + V-ing ; prevent sb from + V-ing ; to censor (censurer) ≠ to censure (blâmer).",
          ],
          example: {
            statement: "Traduisez en anglais en employant la structure indiquée : a) Les élèves n'avaient pas le droit de porter des brassards. (be allowed to) b) Le gouvernement a interdit le roman. (ban) c) La censure empêche les journalistes de faire leur travail. (prevent from) d) On lui a interdit de publier pendant dix ans. (ban from)",
            solution: [
              "a) Be allowed to au prétérit, à la forme négative, suivi de la base verbale : « The students were not allowed to wear armbands. »",
              "b) Ban est ici suivi d'un nom complément : « The government banned the novel. »",
              "c) Prevent somebody from est suivi d'un verbe en -ing : « Censorship prevents journalists from doing their job. »",
              "d) Au passif, ban somebody from + V-ing devient « He was banned from publishing for ten years. » (ou She, selon la personne).",
              "Réponse : a) The students were not allowed to wear armbands. b) The government banned the novel. c) Censorship prevents journalists from doing their job. d) He was banned from publishing for ten years.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la forme correcte : a) In Fahrenheit 451, people are not ___ (allow) to read books. b) The school board banned the novel ___ the library. c) The new law prevents websites ___ (publish) hate speech. d) Her parents didn't let her ___ (watch) the film. e) The director had to ___ (censor / censure) several scenes. f) The senator was officially ___ (censored / censured) by his colleagues for his behaviour.",
              hint: "Après from, le verbe est en -ing ; après let, il est à la base verbale sans to ; censor concerne un contenu, censure une personne.",
              solution: [
                "a) allowed : be allowed to + base verbale.",
                "b) from : ban something from a place (retirer de la bibliothèque).",
                "c) from publishing : prevent somebody from + V-ing.",
                "d) watch : let + base verbale sans to.",
                "e) censor : supprimer des scènes, c'est censurer.",
                "f) censured : il est blâmé officiellement par ses collègues.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet article (texte d'entraînement inventé ; la ville et les personnes sont fictives) et répondez en français : « Last month, the school board of Pine Valley voted to remove a prize-winning novel about a Black teenager facing racism from its high school libraries. Board member Carol Hughes explained that some scenes were “not appropriate for young readers”. But many students disagreed. Seventeen-year-old Jayden Cole organised a reading club where students read the novel together outside school. “Banning a book is the best way to make everyone want to read it,” he said with a smile. The local library has reported a waiting list of more than 80 people. » 1) Quelle décision a été prise et par qui ? 2) Quelle justification est donnée ? 3) Comment les élèves ont-ils réagi ? 4) Expliquez la phrase de Jayden et dites quel effet paradoxal est décrit. 5) À quel débat national cet article fait-il écho ?",
              hint: "Repérez le connecteur But qui introduit la réaction des élèves, puis rapprochez l'article de la partie du cours sur les bibliothèques américaines.",
              solution: [
                "1) Le conseil d'administration scolaire de Pine Valley (school board) a voté le retrait d'un roman primé, sur un adolescent noir confronté au racisme, des bibliothèques de ses lycées.",
                "2) Selon une membre du conseil, certaines scènes ne seraient « pas adaptées aux jeunes lecteurs ».",
                "3) Beaucoup d'élèves s'y opposent ; l'un d'eux, Jayden, organise un club de lecture hors de l'école pour lire le roman ensemble.",
                "4) Selon Jayden, interdire un livre est le meilleur moyen de donner envie de le lire : la censure produit l'effet inverse de celui recherché, comme le montre la liste d'attente de plus de 80 personnes à la bibliothèque municipale.",
                "5) Au débat américain sur les retraits de livres dans les bibliothèques scolaires, en forte hausse depuis 2021 selon l'American Library Association et PEN America, qui visent souvent des livres sur le racisme, le genre ou la sexualité.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation du cycle terminal. Expression écrite : « Should there be any limits to freedom of speech? » Rédigez un essai argumenté en anglais de 130 à 160 mots, en vous appuyant sur des exemples précis.",
              hint: "Défendez d'abord l'importance de la liberté d'expression (Milton, Premier amendement, dystopies), puis présentez les limites généralement admises (diffamation, menaces, incitation à la violence), avant de proposer un critère clair.",
              solution: [
                "Plan : introduction ; pourquoi la liberté d'expression est essentielle ; pourquoi certaines limites sont nécessaires ; conclusion avec un critère (protéger les personnes, pas les idées).",
                "Proposition : « Freedom of speech is often described as the foundation of democracy. But should it be absolute? On the one hand, any limit can be dangerous. History shows that governments often use censorship to silence their critics, as during the McCarthy era, when artists were blacklisted for their opinions. Novels like Nineteen Eighty-Four and Fahrenheit 451 warn us that a society which controls words soon controls thoughts. On the other hand, words can hurt real people. Even the First Amendment does not protect defamation, real threats or speech that directly incites violence. In the age of social media, a lie or a call for hatred can spread to millions of people in a few hours. In my opinion, freedom of speech should protect all ideas, including shocking ones, but not attacks on individuals. Limits are acceptable only when they are clearly defined by law and decided by independent judges. »",
                "Vérification : environ 150 mots ; exemples précis (maccarthysme, deux dystopies, limites du Premier amendement) ; connecteurs ; critère clair en conclusion.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la liberté d'expression dans l'ordre chronologique.",
            items: [
              "John Milton publie Areopagitica contre la censure préalable (1644)",
              "Ratification du Premier amendement (1791)",
              "Début de l'application stricte du code Hays à Hollywood (1934)",
              "Publication de Nineteen Eighty-Four de George Orwell (1949)",
              "Procès de Lady Chatterley's Lover au Royaume-Uni (1960)",
              "Fatwa contre Salman Rushdie (1989)",
              "Adoption de l'Online Safety Act au Royaume-Uni (2023)",
            ],
          },
          quiz: [
            { q: "The First Amendment to the US Constitution was ratified in...", options: ["1776", "1791", "1865", "1920"], answer: 1, why: "Il fait partie de la Déclaration des droits (Bill of Rights), ratifiée en 1791." },
            { q: "Which sentence is correct?", options: ["The book was banned from school libraries.", "Students are not allowed reading it.", "The law prevents people to speak freely online.", "They forbade him of publishing the novel."], answer: 0, why: "Ban something from a place est correct ; on dit allowed to read, prevent people from speaking et forbid him to publish." },
            { q: "In Fahrenheit 451, firemen...", options: ["put out fires in libraries", "burn books", "protect writers", "write the news"], answer: 1, why: "Dans le roman de Ray Bradbury (1953), les pompiers sont chargés de brûler les livres." },
            { q: "Who wrote « I disapprove of what you say, but I will defend to the death your right to say it »?", options: ["Voltaire himself, in a letter", "John Milton, in Areopagitica", "George Orwell, in Nineteen Eighty-Four", "Evelyn Beatrice Hall, in 1906"], answer: 3, why: "Cette phrase, souvent attribuée à Voltaire, a été écrite par sa biographe Evelyn Beatrice Hall pour résumer son attitude." },
            { q: "The First Amendment mainly protects citizens against restrictions imposed by...", options: ["private companies", "foreign countries", "the government", "their own parents"], answer: 2, why: "Le Premier amendement limite le pouvoir de l'État ; une entreprise privée peut fixer ses propres règles." },
          ],
          trap: "Croire que la liberté d'expression américaine interdit à un réseau social ou à un employeur privé de supprimer un message, ou confondre to censor (censurer) et to censure (blâmer officiellement) ; et attribuer à Voltaire une phrase qu'il n'a jamais écrite.",
          method: "Pour un essai sur la censure, préparez trois catégories d'exemples, un par siècle si possible : un texte fondateur (Milton, le Premier amendement), un cas historique (code Hays, maccarthysme, Rushdie) et une œuvre de fiction (Orwell, Bradbury, Atwood). Vérifiez ensuite chaque structure d'interdiction : allowed to + base, from + V-ing.",
        },
      ],
    },
  ],
}
