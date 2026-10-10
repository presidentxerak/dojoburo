import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-1re',
  chapters: [
    /* ==================================================================== */
    /* LE ROMAN ET LE RÉCIT DU MOYEN ÂGE AU XXIe SIÈCLE                       */
    /* ==================================================================== */
    {
      id: 'roman-recit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'histoire-du-roman',
          title: 'Du roman de chevalerie au roman contemporain : repères',
          minutes: 35,
          objectives: [
            "Situer les grandes étapes de l'histoire du roman et du récit, du Moyen Âge au XXIe siècle.",
            "Identifier les principaux sous-genres et mouvements romanesques : roman de chevalerie, roman d'analyse, roman épistolaire, réalisme, naturalisme, Nouveau Roman.",
            "Analyser les choix de narration d'un récit : narrateur, focalisation, ordre et rythme.",
          ],
          course: [
            {
              heading: "Un genre né au Moyen Âge",
              paragraphs: [
                "Au XIIe siècle, le mot « roman » désigne d'abord une langue : la langue romane, c'est-à-dire le français ancien parlé par le peuple, par opposition au latin des clercs. « Mettre en roman », c'est traduire ou adapter en langue vulgaire. Par extension, le mot finit par désigner les longs récits écrits dans cette langue. Le roman naît donc comme une littérature destinée à un public laïque, celui des cours seigneuriales.",
                "Les premiers romans adaptent des récits antiques (le Roman de Thèbes, le Roman d'Énéas, le Roman de Troie de Benoît de Sainte-Maure, vers 1150 à 1165). Puis la « matière de Bretagne », c'est-à-dire les légendes du roi Arthur et des chevaliers de la Table ronde, devient la grande source d'inspiration. Chrétien de Troyes écrit, entre 1170 et 1190 environ, Érec et Énide, Le Chevalier de la charrette, Yvain ou le Chevalier au lion et Perceval ou le Conte du Graal, en vers de huit syllabes (octosyllabes) à rimes plates.",
                "Au XIIIe siècle, le roman passe à la prose avec les grands cycles arthuriens (le Lancelot en prose). À côté du roman, le Moyen Âge connaît d'autres formes de récit : les fabliaux, contes plaisants et souvent grossiers, ou le Roman de Renart, suite d'aventures animales qui parodie la société féodale.",
              ],
              box: { label: "Définition", text: "Le roman est un récit de fiction, le plus souvent en prose et d'une certaine longueur, qui raconte les aventures de personnages présentés comme réels. Au Moyen Âge, il est d'abord en vers ; la prose ne s'impose qu'à partir du XIIIe siècle." },
            },
            {
              heading: "Du XVIe au XVIIIe siècle : un genre qui se cherche",
              paragraphs: [
                "Au XVIe siècle, Rabelais publie Pantagruel (1532) puis Gargantua (1534) : des récits comiques de géants qui portent les idéaux humanistes (éducation, savoir, paix). Au XVIIe siècle, le roman est d'abord immense et romanesque : L'Astrée d'Honoré d'Urfé (1607 à 1627), roman pastoral de plusieurs milliers de pages, fait rêver des générations de lecteurs. Scarron, avec Le Roman comique (1651 à 1657), s'en moque en racontant la vie d'une troupe de comédiens ambulants.",
                "En 1678, Madame de La Fayette publie La Princesse de Clèves, roman bref et vraisemblable, situé à la cour d'Henri II. Il ne raconte pas des exploits mais les mouvements secrets d'un cœur partagé entre la passion et le devoir : c'est le modèle du roman d'analyse psychologique. Le genre reste pourtant suspect aux yeux des moralistes, qui le jugent frivole et dangereux pour les mœurs.",
                "Le XVIIIe siècle multiplie les formes. Le roman-mémoires donne la parole à un narrateur qui raconte sa propre vie (Manon Lescaut de l'abbé Prévost, 1731). Le roman épistolaire fait se succéder des lettres de plusieurs personnages : Lettres persanes de Montesquieu (1721), Julie ou la Nouvelle Héloïse de Rousseau (1761), Les Liaisons dangereuses de Laclos (1782). Voltaire invente le conte philosophique (Candide, 1759) et Diderot, dans Jacques le fataliste, joue ouvertement avec son lecteur.",
              ],
            },
            {
              heading: "Le XIXe siècle, âge d'or du roman",
              paragraphs: [
                "Le XIXe siècle fait du roman le genre dominant. Les romanciers réalistes veulent représenter la société de leur temps dans toute sa diversité. Stendhal compare le roman à un miroir que l'on promène le long d'un chemin (Le Rouge et le Noir, 1830). Balzac réunit plus de quatre-vingt-dix romans et nouvelles sous le titre de La Comédie humaine et fait revenir les mêmes personnages d'un livre à l'autre (Le Père Goriot, 1835). Flaubert, avec Madame Bovary (1857), cherche une prose parfaite et impersonnelle ; le livre lui vaut un procès pour outrage à la morale publique, qui se conclut par un acquittement.",
                "À partir des années 1870, Émile Zola fonde le naturalisme. Dans Le Roman expérimental (1880), il veut appliquer au roman la méthode des sciences : observer et documenter le réel, puis montrer comment l'hérédité et le milieu déterminent les individus. Son cycle des Rougon-Macquart compte vingt romans publiés de 1871 à 1893. Dans le même temps, le roman romantique (Victor Hugo, Les Misérables, 1862) et le roman d'aventures (Jules Verne, Alexandre Dumas) touchent un très large public, souvent par la publication en feuilleton dans les journaux.",
              ],
              box: { label: "Repère", text: "Réalisme : représenter fidèlement la société (Balzac, Stendhal, Flaubert). Naturalisme : le réalisme poussé jusqu'à la méthode scientifique, avec l'hérédité et le milieu (Zola, Maupassant à ses débuts)." },
            },
            {
              heading: "XXe et XXIe siècles : le roman en question",
              paragraphs: [
                "Au XXe siècle, le roman se renouvelle sans cesse. Marcel Proust, dans À la recherche du temps perdu (1913 à 1927), explore la mémoire et le temps intérieur. Céline bouscule la langue littéraire avec la langue parlée dans Voyage au bout de la nuit (1932). Camus, dans L'Étranger (1942), fait parler un narrateur étrangement détaché. Dans les années 1950, les auteurs du Nouveau Roman (Alain Robbe-Grillet, Nathalie Sarraute, Michel Butor, Claude Simon) refusent l'intrigue et le personnage traditionnels ; Butor écrit La Modification (1957) à la deuxième personne du pluriel.",
                "Le récit contemporain mêle souvent la fiction et la vie réelle. Le mot « autofiction » est forgé par Serge Doubrovsky en 1977. Annie Ernaux, prix Nobel de littérature en 2022, écrit des récits où son histoire personnelle rejoint l'histoire collective (Les Années, 2008). Le roman s'ouvre aussi aux voix du monde francophone : Ahmadou Kourouma, Simone Schwarz-Bart, Maryse Condé ou Patrick Chamoiseau (Texaco, prix Goncourt 1992) font entendre l'Afrique et les Antilles.",
              ],
            },
            {
              heading: "Les outils pour analyser un récit",
              paragraphs: [
                "Le narrateur est la voix qui raconte : il ne faut jamais le confondre avec l'auteur. Il peut être un personnage de l'histoire et dire « je » (narrateur interne à l'histoire), ou rester extérieur à l'histoire et raconter à la troisième personne (narrateur externe).",
                "La focalisation (ou point de vue) désigne ce que le lecteur sait et perçoit. En focalisation zéro, le narrateur sait tout, même les pensées de tous les personnages (on dit aussi point de vue omniscient). En focalisation interne, on perçoit l'histoire à travers les sens et les pensées d'un seul personnage. En focalisation externe, on voit les personnages de l'extérieur, comme une caméra, sans accès à leurs pensées.",
                "L'ordre du récit peut suivre la chronologie ou la bouleverser : une analepse est un retour en arrière, une prolepse une anticipation ; un récit qui commence « in medias res » s'ouvre au milieu de l'action. Le rythme compare la durée de l'histoire et celle du récit : la scène (dialogue, temps du récit proche du temps de l'histoire), le sommaire (des années en quelques lignes), l'ellipse (une période passée sous silence) et la pause (description ou commentaire qui suspend l'action).",
              ],
              box: { label: "À retenir", text: "Narrateur : qui raconte ? Focalisation : qui voit, qui sait ? Ordre : dans quel ordre les événements sont-ils racontés ? Rythme : à quelle vitesse ? Ces quatre questions s'appliquent à tout récit, du roman médiéval au roman contemporain." },
            },
          ],
          keyPoints: [
            "« Roman » désigne d'abord la langue romane, opposée au latin ; le genre naît au XIIe siècle, en vers (Chrétien de Troyes).",
            "XVIIe siècle : L'Astrée, roman pastoral, puis La Princesse de Clèves (1678), modèle du roman d'analyse.",
            "XVIIIe siècle : roman-mémoires, roman épistolaire (Les Liaisons dangereuses, 1782), conte philosophique.",
            "XIXe siècle : réalisme (Balzac, Stendhal, Flaubert) puis naturalisme (Zola, Les Rougon-Macquart, 1871 à 1893).",
            "XXe et XXIe siècles : Proust, Céline, Camus, Nouveau Roman (années 1950), autofiction, voix francophones.",
            "Analyser un récit : narrateur, focalisation (zéro, interne, externe), ordre (analepse, prolepse), rythme (scène, sommaire, ellipse, pause).",
          ],
          example: {
            statement: "Analysez la narration de ce court passage (texte d'entraînement) : « Quand Jeanne poussa la porte, la salle était vide. Elle ignorait encore que Paul était parti la veille, après avoir brûlé toutes ses lettres. Trois ans passèrent. » Précisez le type de narrateur, la focalisation, l'ordre et le rythme.",
            solution: [
              "Narrateur : le récit est à la troisième personne (« Jeanne », « elle ») et celui qui raconte n'est pas un personnage de l'histoire : c'est un narrateur externe à l'histoire.",
              "Focalisation : la phrase « Elle ignorait encore que Paul était parti » montre que le narrateur en sait plus que le personnage. Il ne s'agit donc pas d'une focalisation interne sur Jeanne mais d'une focalisation zéro (point de vue omniscient).",
              "Ordre : le plus-que-parfait « était parti » et « après avoir brûlé » renvoie à des faits antérieurs à la scène : c'est une analepse, un retour en arrière. L'adverbe « encore » laisse en outre deviner que Jeanne l'apprendra plus tard.",
              "Rythme : « Trois ans passèrent » franchit trois années en trois mots sans rien en raconter : c'est une ellipse, ici explicite puisque la durée est indiquée.",
              "Réponse : narrateur externe, focalisation zéro, analepse, puis ellipse explicite ; le narrateur crée un décalage entre ce que sait le lecteur et ce que sait le personnage, ce qui rend Jeanne émouvante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces six œuvres dans l'ordre chronologique et associez chacune à son sous-genre ou à son mouvement : Madame Bovary (Flaubert) ; Le Chevalier de la charrette (Chrétien de Troyes) ; La Modification (Butor) ; Les Liaisons dangereuses (Laclos) ; La Princesse de Clèves (Madame de La Fayette) ; L'Assommoir (Zola). Sous-genres et mouvements : roman de chevalerie en vers, roman d'analyse, roman épistolaire, roman réaliste, roman naturaliste, Nouveau Roman.",
              hint: "Commencez par placer chaque auteur dans son siècle : Moyen Âge, XVIIe, XVIIIe, XIXe (deux œuvres), XXe.",
              solution: [
                "Le Chevalier de la charrette, vers 1180 : roman de chevalerie en vers.",
                "La Princesse de Clèves, 1678 : roman d'analyse.",
                "Les Liaisons dangereuses, 1782 : roman épistolaire.",
                "Madame Bovary, 1857 : roman réaliste.",
                "L'Assommoir, 1877 : roman naturaliste (septième volume des Rougon-Macquart).",
                "La Modification, 1957 : Nouveau Roman.",
                "Réponse : Chrétien de Troyes, La Fayette, Laclos, Flaubert, Zola, Butor.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce passage d'entraînement : « Il marchait sous la pluie sans rien voir. Les vitrines, les passants, les voitures : tout se brouillait devant ses yeux. Pourquoi avait-elle dit cela ? Il se rappela soudain ce soir d'été où, enfant, il avait attendu son père sur le quai d'une gare. Il ne la reverrait que dix ans plus tard. » a) Quelle est la focalisation des trois premières phrases ? Justifiez. b) Relevez une analepse et une prolepse. c) Quel effet produit la dernière phrase ?",
              hint: "Demandez-vous à travers quels yeux on perçoit la rue, et à qui appartient la question. Pour l'ordre, repérez les temps verbaux qui renvoient au passé et au futur du personnage.",
              solution: [
                "a) Focalisation interne : la rue est perçue à travers le regard brouillé du personnage (« tout se brouillait devant ses yeux ») et la question « Pourquoi avait-elle dit cela ? » est sa pensée, rapportée au style indirect libre.",
                "b) Analepse : le souvenir d'enfance (« ce soir d'été où, enfant, il avait attendu son père »), marqué par le plus-que-parfait. Prolepse : « Il ne la reverrait que dix ans plus tard », où le conditionnel exprime le futur dans le passé.",
                "c) La dernière phrase révèle ce que le personnage ne peut pas encore savoir : le narrateur sort de la focalisation interne et montre son savoir sur l'avenir. Cette anticipation donne au moment une gravité nouvelle : le lecteur comprend que la séparation durera.",
                "Réponse : focalisation interne, analepse du souvenir d'enfance, prolepse finale qui marque l'intervention d'un narrateur qui en sait plus que son personnage.",
              ],
            },
            {
              level: 3,
              statement: "Préparation à la dissertation (type bac) : « Le roman a-t-il pour seule fonction de représenter la société de son temps ? » Formulez une problématique et proposez un plan en trois parties, avec au moins un exemple d'œuvre précis par partie.",
              hint: "Partez de la thèse réaliste (le roman comme miroir de la société), puis cherchez ce que le roman fait d'autre : explorer l'intériorité, faire rêver, inventer des formes nouvelles.",
              solution: [
                "Analyse du sujet : « seule fonction » invite à nuancer ; « représenter » signifie montrer fidèlement ; « la société de son temps » renvoie au roman réaliste et naturaliste.",
                "Problématique possible : le roman n'est-il qu'un miroir du monde social, ou cherche-t-il aussi à explorer l'homme et à réinventer le réel ?",
                "I. Le roman représente la société de son temps : Balzac fait de La Comédie humaine un tableau de la France du XIXe siècle ; Zola, dans Les Rougon-Macquart, étudie toutes les classes sociales du Second Empire.",
                "II. Mais il explore aussi l'intériorité humaine : La Princesse de Clèves analyse les mouvements d'un cœur ; Proust fait de la mémoire le sujet même de son roman.",
                "III. Le roman invente enfin des mondes et des formes : le roman de chevalerie fait rêver d'un idéal ; le Nouveau Roman (La Modification de Butor) renouvelle la manière même de raconter.",
                "Conclusion attendue : représenter la société est une fonction majeure du roman, mais non la seule ; c'est souvent en inventant qu'il donne à voir le réel autrement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces œuvres dans l'ordre chronologique de leur parution.",
            items: [
              "Chrétien de Troyes, Le Chevalier de la charrette (vers 1180)",
              "Rabelais, Gargantua (1534)",
              "Madame de La Fayette, La Princesse de Clèves (1678)",
              "Laclos, Les Liaisons dangereuses (1782)",
              "Flaubert, Madame Bovary (1857)",
              "Camus, L'Étranger (1942)",
              "Butor, La Modification (1957)",
            ],
          },
          quiz: [
            { q: "D'où vient le mot « roman » ?", options: ["D'un mot latin qui désignait les longs récits d'aventures en prose", "De la langue romane, opposée au latin des clercs", "Du nom de la ville de Rome, où le genre serait né"], answer: 1, why: "Au XIIe siècle, « mettre en roman », c'est écrire en langue vulgaire, la langue romane, et non en latin." },
            { q: "Quelle œuvre est un roman épistolaire ?", options: ["Madame Bovary, qui suit la vie d'une femme de province", "La Princesse de Clèves, qui se déroule à la cour d'Henri II", "Les Liaisons dangereuses", "L'Étranger, raconté par Meursault"], answer: 2, why: "Le roman de Laclos (1782) est entièrement composé des lettres que s'écrivent les personnages." },
            { q: "Que désigne la focalisation zéro ?", options: ["Un narrateur qui sait tout, y compris les pensées des personnages", "Un récit qui ne montre que les gestes des personnages, comme une caméra", "Un récit sans narrateur", "Un récit perçu à travers un seul personnage"], answer: 0, why: "En focalisation zéro, ou point de vue omniscient, le narrateur en sait plus que tous les personnages." },
            { q: "Quel romancier fonde le naturalisme ?", options: ["Honoré de Balzac", "Gustave Flaubert", "Stendhal", "Émile Zola"], answer: 3, why: "Zola théorise le naturalisme dans Le Roman expérimental (1880) et l'illustre dans Les Rougon-Macquart." },
            { q: "« Dix ans plus tôt, elle avait quitté ce village. » Ce retour en arrière est :", options: ["une prolepse", "une analepse", "une ellipse"], answer: 1, why: "L'analepse raconte après coup un événement antérieur au moment de l'histoire ; le plus-que-parfait la signale souvent." },
          ],
          trap: "Confondre le narrateur et l'auteur : dans un roman à la première personne, le « je » est un personnage inventé, pas l'écrivain, même quand le récit ressemble à une autobiographie.",
          method: "Construisez une frise chronologique personnelle du roman avec une œuvre et une date par siècle : elle vous fournira des exemples précis et datés pour toutes vos dissertations.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chretien-chevalier-charrette',
          title: 'Chrétien de Troyes, « Le Chevalier de la charrette » : l’invention de l’amour',
          minutes: 35,
          objectives: [
            "Situer Le Chevalier de la charrette dans son contexte : la cour de Champagne, le roman en vers, la matière de Bretagne.",
            "Analyser la représentation de l'amour courtois (la fin'amor) et des épreuves qu'il impose au chevalier.",
            "Interpréter la figure paradoxale de Lancelot, partagé entre la honte et la gloire.",
            "Construire une réflexion argumentée sur l'œuvre, en vue de la dissertation.",
          ],
          course: [
            {
              heading: "Une œuvre de cour",
              paragraphs: [
                "Chrétien de Troyes, actif entre 1170 et 1190 environ, est le premier grand romancier de langue française. Il écrit Le Chevalier de la charrette, aussi appelé Lancelot, vers 1180, à la cour de Champagne. Dans son prologue, il déclare que la comtesse Marie de Champagne, fille du roi Louis VII et d'Aliénor d'Aquitaine, lui a fourni la « matière » (le sujet) et le « sen » (l'orientation, le sens à lui donner) : l'œuvre répond donc au goût d'une cour raffinée, passionnée par les questions d'amour.",
                "Le roman compte environ sept mille octosyllabes à rimes plates (rimes suivies AABB), en ancien français ; on le lit aujourd'hui en traduction, souvent dans une édition bilingue. Il a une particularité : Chrétien n'en a pas écrit la fin. Dans l'épilogue, un certain Godefroi de Leigni explique qu'il a achevé le récit, à partir de l'épisode de la tour, avec l'accord de Chrétien.",
                "L'histoire appartient à la matière de Bretagne : elle se déroule à la cour du roi Arthur et met en scène les chevaliers de la Table ronde, dans un monde où l'aventure côtoie le merveilleux (royaume d'où l'on ne revient pas, anneau magique, ponts impossibles).",
              ],
              box: { label: "Repère", text: "Vers 1180 : Le Chevalier de la charrette, roman en octosyllabes de Chrétien de Troyes, écrit pour Marie de Champagne et achevé par Godefroi de Leigni. Personnages principaux : Lancelot, la reine Guenièvre, le roi Arthur, Gauvain, Méléagant et son père le roi Bademagu." },
            },
            {
              heading: "Un roman d'épreuves",
              paragraphs: [
                "Méléagant, fils du roi Bademagu, se présente à la cour d'Arthur : il retient prisonniers de nombreux sujets du royaume et propose un défi. Le sénéchal Keu le relève, est vaincu, et Méléagant emmène la reine Guenièvre au royaume de Gorre, d'où aucun étranger ne revient. Gauvain, neveu d'Arthur, et un chevalier inconnu se lancent à sa poursuite.",
                "Ayant perdu son cheval, le chevalier inconnu rencontre une charrette conduite par un nain, qui lui promet des nouvelles de la reine s'il y monte. Or, explique le narrateur, la charrette servait alors à exposer les criminels : quiconque y montait perdait tout honneur. Raison lui conseille de refuser, Amour lui ordonne d'obéir ; il hésite le temps de deux pas, puis monte. Gauvain, lui, refuse et suit à cheval.",
                "Pour entrer dans le royaume de Gorre, deux passages existent : le Pont sous l'eau, que prend Gauvain, et le Pont de l'Épée, une lame tranchante tendue au-dessus d'un torrent. Le chevalier ôte ses protections des mains et des pieds pour mieux s'y agripper et traverse au prix de profondes blessures. Il affronte ensuite Méléagant, sous les yeux du sage roi Bademagu, puis subit de nouvelles épreuves : l'accueil glacial de la reine, la captivité, un tournoi, l'emprisonnement dans une tour, avant le combat final où il tue Méléagant à la cour d'Arthur.",
              ],
            },
            {
              heading: "La fin'amor, un art d'aimer",
              paragraphs: [
                "La fin'amor (« amour parfait » en langue d'oc) est née dans la poésie des troubadours du Midi, au XIIe siècle, puis s'est diffusée dans les cours du Nord. Elle transpose dans l'amour les liens de la féodalité : la dame, souvent mariée et d'un rang supérieur, est comme une suzeraine ; l'amant est son vassal, qui lui doit service, obéissance et fidélité. Il doit mériter son amour par des épreuves, garder le secret et faire preuve de mesure.",
                "Cet amour est censé rendre l'amant meilleur : il le pousse à se dépasser, à devenir plus vaillant et plus courtois. Il est aussi, souvent, un amour adultère et donc clandestin : Guenièvre est l'épouse du roi Arthur. Le roman de Chrétien pousse ce code jusqu'à l'extrême, puisque Lancelot sacrifie à la reine jusqu'à son honneur de chevalier.",
                "L'expression « amour courtois » est moderne : elle a été forgée en 1883 par le médiéviste Gaston Paris, précisément dans une étude consacrée au Chevalier de la charrette. C'est dire combien ce roman passe pour l'œuvre qui a donné forme à cette conception de l'amour.",
              ],
              box: { label: "Définition", text: "La fin'amor, ou amour courtois, est un code amoureux né au XIIe siècle : l'amant sert sa dame comme un vassal sert son seigneur, lui obéit, se soumet à ses épreuves et garde le secret ; en retour, cet amour l'élève et le rend meilleur." },
            },
            {
              heading: "Lancelot, un héros paradoxal",
              paragraphs: [
                "Lancelot est à la fois le meilleur des chevaliers et un homme humilié. Monté dans la charrette, il est insulté par les foules ; au tournoi, la reine lui fait dire de combattre « au pis », c'est-à-dire le plus mal possible, et il obéit au point de passer pour un lâche, avant de triompher dès qu'elle lui permet de faire « au mieux ». Sa grandeur tient justement à cette soumission totale : il accepte la honte aux yeux du monde pour rester parfait aux yeux de sa dame.",
                "Son identité elle-même dépend de l'amour. Pendant près de la moitié du roman, il n'est que « le chevalier de la charrette » : c'est Guenièvre qui révèle son nom, Lancelot du Lac, lors de son combat contre Méléagant. L'amour prend souvent chez lui une dimension religieuse : lorsqu'il trouve au bord d'une fontaine un peigne où restent quelques cheveux de la reine, il manque de défaillir et les conserve contre son cœur comme des reliques.",
                "Gauvain sert de contrepoint. Modèle de courtoisie et de prudence, il refuse la charrette et choisit le passage le moins périlleux, mais il échoue : il manque de se noyer au Pont sous l'eau. Le roman suggère ainsi que l'amour absolu donne une force qu'aucune vertu chevaleresque ordinaire n'égale. Lancelot bénéficie aussi du merveilleux : un anneau offert par la fée qui l'a élevé lui permet de déjouer les enchantements.",
              ],
            },
            {
              heading: "L'invention de l'amour",
              paragraphs: [
                "Pourquoi parler d'« invention de l'amour » ? Pour la première fois, un roman entier fait de la passion amoureuse le moteur de l'aventure chevaleresque : chaque exploit de Lancelot est accompli pour la reine et commandé par elle. L'amour devient une valeur absolue, presque une religion, qui place la dame au-dessus de tout, y compris du roi et de l'honneur.",
                "Cette conception a eu une postérité immense. Les grands romans en prose du XIIIe siècle développent les amours de Lancelot et Guenièvre. Au début du XIVe siècle, Dante, dans L'Enfer, fait raconter à Francesca qu'elle et Paolo ont échangé leur premier baiser en lisant les amours de Lancelot. L'idée d'un amour qui transforme et ennoblit, mais qui peut aussi transgresser les lois, traverse ensuite toute la littérature occidentale.",
                "Certains critiques soulignent enfin une part d'ironie : Chrétien montre aussi les excès de son héros, presque comiques lorsque Lancelot, perdu dans ses pensées amoureuses, ne voit plus rien de ce qui l'entoure. Lire l'œuvre en première, c'est donc à la fois comprendre un idéal et percevoir la distance que le romancier prend avec lui.",
              ],
              box: { label: "À retenir", text: "Le Chevalier de la charrette fait de l'amour le moteur et la fin de l'aventure : le chevalier n'agit plus seulement pour l'honneur ou pour son seigneur, mais pour sa dame, au risque de la honte publique." },
            },
          ],
          keyPoints: [
            "Roman en octosyllabes écrit vers 1180 par Chrétien de Troyes pour Marie de Champagne, achevé par Godefroi de Leigni.",
            "Intrigue : Méléagant enlève Guenièvre ; Lancelot la délivre au prix d'épreuves (la charrette, le Pont de l'Épée, le tournoi, la tour).",
            "La charrette, réservée aux criminels, symbolise le sacrifice de l'honneur à l'amour ; l'hésitation de deux pas lui est reprochée.",
            "Fin'amor : la dame est une suzeraine, l'amant un vassal qui obéit, souffre, garde le secret et devient meilleur.",
            "Lancelot n'est nommé qu'à mi-roman, par Guenièvre : son identité naît de l'amour.",
            "L'expression « amour courtois » a été forgée par Gaston Paris en 1883, à propos de ce roman.",
          ],
          example: {
            statement: "Après avoir traversé le Pont de l'Épée et combattu Méléagant, Lancelot est reçu très froidement par la reine, qui refuse de lui parler. Elle lui expliquera plus tard qu'elle lui reproche d'avoir hésité avant de monter dans la charrette. Expliquez cette réaction et ce qu'elle révèle de la fin'amor.",
            solution: [
              "Rappeler les faits : Lancelot n'a hésité que le temps de deux pas avant de monter dans la charrette, et il a ensuite tout sacrifié pour la reine, y compris son honneur et son sang.",
              "Analyser la réaction : la reine ne juge pas ses exploits mais la perfection de son amour. Les deux pas d'hésitation montrent qu'un instant, Raison et le souci de l'honneur ont pesé face à Amour.",
              "Relier au code courtois : dans la fin'amor, l'amant doit une obéissance absolue et immédiate à sa dame ; la moindre réserve est une faute, comme un vassal qui tarderait à servir son seigneur.",
              "Montrer l'effet sur le héros : Lancelot, désespéré, ne se révolte pas ; il accepte la sanction, ce qui prouve sa soumission. L'épreuve morale s'ajoute aux épreuves physiques.",
              "Réponse : la froideur de Guenièvre révèle l'exigence extrême de la fin'amor, qui demande un amour sans calcul ni hésitation ; elle fait de Lancelot un amant parfait parce qu'il accepte d'être jugé sur la moindre faiblesse.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque épisode du roman à sa signification : a) Lancelot monte dans la charrette ; b) il traverse le Pont de l'Épée ; c) il garde contre son cœur les cheveux de la reine trouvés sur un peigne ; d) au tournoi, il combat « au pis » sur l'ordre de Guenièvre ; e) son nom est révélé par la reine. Significations : 1. adoration quasi religieuse de la dame ; 2. obéissance absolue, jusqu'au ridicule ; 3. identité donnée par l'amour ; 4. sacrifice de l'honneur à l'amour ; 5. souffrance physique acceptée pour la dame.",
              hint: "Demandez-vous chaque fois ce que Lancelot perd ou donne : son honneur, son sang, sa réputation, sa liberté de jugement ?",
              solution: [
                "a) La charrette, réservée aux criminels, est une honte : 4, sacrifice de l'honneur à l'amour.",
                "b) La lame du Pont de l'Épée lui entaille les mains et les pieds : 5, souffrance physique acceptée.",
                "c) Les cheveux traités comme des reliques : 1, adoration quasi religieuse.",
                "d) Combattre au plus mal par obéissance : 2, obéissance absolue jusqu'au ridicule.",
                "e) Le nom prononcé par Guenièvre : 3, identité donnée par l'amour.",
                "Réponse : a4, b5, c1, d2, e3.",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé de l'épisode de la charrette : Lancelot, qui a perdu son cheval, rencontre un nain conduisant une charrette. Le narrateur explique qu'à cette époque, on y exposait les criminels et que celui qui y était monté perdait tout honneur. Le nain promet des nouvelles de la reine si le chevalier monte. Raison lui conseille de refuser, Amour lui commande de monter ; il hésite le temps de deux pas, puis saute dans la charrette. Gauvain, arrivé ensuite, refuse et suit à cheval. Dans les villes traversées, la foule se moque du chevalier. a) Pourquoi l'épisode est-il humiliant ? b) Comment le dilemme est-il représenté ? c) Quel rôle joue Gauvain ? d) Quelle importance l'hésitation aura-t-elle dans la suite ?",
              hint: "Pour b), observez les majuscules de Raison et Amour : ce sont des personnages abstraits qui débattent. Pour d), pensez à l'accueil de la reine.",
              solution: [
                "a) La charrette est un instrument d'infamie, l'équivalent du pilori : un chevalier qui y monte se met au rang des criminels, et les moqueries de la foule rendent cette honte publique.",
                "b) Le dilemme est représenté par une allégorie : Raison et Amour, personnifiés, s'opposent comme dans un débat intérieur. La victoire d'Amour montre la hiérarchie des valeurs du héros.",
                "c) Gauvain sert de contrepoint : il choisit l'honneur et la raison, comme l'aurait fait tout chevalier. Son refus fait ressortir le caractère exceptionnel du sacrifice de Lancelot.",
                "d) L'hésitation, si brève soit-elle, sera reprochée par Guenièvre, qui accueillera froidement son sauveur : l'épisode annonce l'exigence absolue de la fin'amor.",
                "Réponse : l'épisode met en scène, par l'allégorie et le contraste avec Gauvain, le choix fondateur du héros, qui préfère l'amour à l'honneur.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Dans Le Chevalier de la charrette, l'amour grandit-il le chevalier ou l'humilie-t-il ? » Rédigez la problématique et proposez un plan détaillé en deux ou trois parties, appuyé sur des épisodes précis de l'œuvre.",
              hint: "Ne choisissez pas un camp trop vite : montrez d'abord que l'amour humilie Lancelot aux yeux du monde, puis qu'il le rend supérieur, et cherchez comment ces deux idées se rejoignent.",
              solution: [
                "Analyse du sujet : l'alternative oppose la grandeur (exploits, perfection) et l'humiliation (honte, obéissance) ; elle invite à se demander si ces deux effets sont vraiment contradictoires.",
                "Problématique : en exigeant de Lancelot qu'il renonce à l'honneur, l'amour courtois l'abaisse-t-il, ou fait-il de cet abaissement même la source d'une grandeur supérieure ?",
                "I. L'amour humilie le chevalier : la charrette des criminels et les moqueries de la foule ; le tournoi où il combat « au pis » ; la froideur de la reine, qui le juge sur deux pas d'hésitation.",
                "II. Mais l'amour le rend supérieur aux autres chevaliers : il traverse le Pont de l'Épée là où Gauvain échoue au Pont sous l'eau ; il triomphe au tournoi dès que la reine le lui permet ; il délivre les prisonniers de Gorre et tue Méléagant.",
                "III. L'humiliation est la forme même de la grandeur courtoise : l'amant parfait accepte d'être méprisé par le monde pour rester fidèle à sa dame ; son nom, révélé par Guenièvre, montre que sa véritable identité vient de l'amour. On peut nuancer par l'ironie de Chrétien face aux excès du héros.",
                "Conclusion : l'amour humilie Lancelot selon les valeurs de la chevalerie ordinaire, mais l'élève selon les valeurs de la fin'amor ; le roman invente ainsi un héros dont la gloire passe par la honte.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque personnage à son rôle dans le roman.",
            pairs: [
              { left: "Méléagant", right: "Le ravisseur de la reine, vaincu et tué par Lancelot" },
              { left: "Bademagu", right: "Le roi de Gorre, père loyal et sage du ravisseur" },
              { left: "Gauvain", right: "Le neveu d'Arthur, qui refuse la charrette" },
              { left: "Keu", right: "Le sénéchal vaincu au début, puis accusé à tort" },
              { left: "Marie de Champagne", right: "La comtesse qui a donné au poète son sujet" },
              { left: "Godefroi de Leigni", right: "Le clerc qui a achevé le roman" },
            ],
          },
          quiz: [
            { q: "Pour qui Chrétien de Troyes dit-il avoir écrit Le Chevalier de la charrette ?", options: ["Pour le roi de France Louis VII", "Pour Marie de Champagne", "Pour Aliénor d'Aquitaine, reine d'Angleterre", "Pour l'abbaye où il était moine"], answer: 1, why: "Dans le prologue, Chrétien attribue à la comtesse Marie de Champagne la « matière » et le « sen » de son roman." },
            { q: "Pourquoi monter dans la charrette est-il déshonorant pour un chevalier ?", options: ["Parce qu'on y exposait les criminels", "Parce qu'elle appartient à Méléagant, l'ennemi d'Arthur", "Parce que l'Église interdisait aux chevaliers de quitter leur monture"], answer: 0, why: "Le narrateur explique que la charrette servait de pilori : celui qui y montait perdait tout honneur." },
            { q: "Qui révèle le nom de Lancelot, à peu près au milieu du roman ?", options: ["Gauvain, son compagnon", "Le nain de la charrette", "Méléagant, au début du combat", "La reine Guenièvre"], answer: 3, why: "C'est la reine qui nomme Lancelot du Lac pendant son combat contre Méléagant : son identité lui vient de sa dame." },
            { q: "Lors du tournoi, que fait dire la reine à Lancelot ?", options: ["De laisser la victoire à Gauvain par courtoisie", "De quitter le tournoi pour retourner en prison", "De combattre au plus mal, puis au mieux"], answer: 2, why: "Il obéit à l'ordre de combattre « au pis » au point de passer pour un lâche, puis triomphe dès qu'elle l'autorise à faire « au mieux »." },
            { q: "Qui a forgé l'expression « amour courtois » ?", options: ["Chrétien de Troyes, dans son prologue", "Les troubadours occitans du XIIe siècle", "Le médiéviste Gaston Paris, en 1883", "Dante, dans L'Enfer"], answer: 2, why: "L'expression est moderne : Gaston Paris l'a employée en 1883 dans une étude consacrée à ce roman ; les troubadours parlaient de fin'amor." },
          ],
          trap: "Croire que la froideur de Guenièvre est un caprice : elle sanctionne les deux pas d'hésitation devant la charrette, c'est-à-dire un manquement à l'obéissance absolue qu'exige la fin'amor.",
          method: "Pour la dissertation, préparez une fiche de six épisodes clés (charrette, Pont de l'Épée, accueil de la reine, peigne, tournoi, combat final) avec, pour chacun, ce qu'il montre de l'amour : vous aurez toujours un exemple précis à mobiliser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'zola-pot-bouille',
          title: 'Zola, « Pot-Bouille » : dévoiler les rouages de la société',
          minutes: 35,
          objectives: [
            "Situer Pot-Bouille dans le cycle des Rougon-Macquart et dans le mouvement naturaliste.",
            "Analyser la manière dont le roman dévoile les rouages de la société bourgeoise : mariage, argent, adultère, hypocrisie.",
            "Identifier les procédés de l'écriture naturaliste et satirique : description, point de vue, style indirect libre, ironie.",
            "Rédiger l'introduction d'une dissertation sur l'œuvre.",
          ],
          course: [
            {
              heading: "Zola et le projet des Rougon-Macquart",
              paragraphs: [
                "Émile Zola (1840 à 1902) consacre plus de vingt ans à un immense cycle de vingt romans, Les Rougon-Macquart, sous-titré « Histoire naturelle et sociale d'une famille sous le Second Empire » (1871 à 1893). Il y suit les descendants d'une même famille dans tous les milieux de la société : paysans, ouvriers, commerçants, bourgeois, financiers, artistes, prostituées, soldats.",
                "Ce projet repose sur le naturalisme, que Zola théorise notamment dans Le Roman expérimental (1880). Le romancier se veut un observateur et un expérimentateur : il se documente longuement (enquêtes, carnets, visites), puis place ses personnages dans un milieu donné pour montrer comment l'hérédité et l'environnement social déterminent leurs actes.",
                "Pot-Bouille, publié en 1882 après une parution en feuilleton, est le dixième roman du cycle. Après L'Assommoir (1877), qui peignait la misère ouvrière, Zola se tourne vers la bourgeoisie parisienne : il veut montrer que, derrière la respectabilité, elle n'est pas moins corrompue que le peuple qu'elle méprise.",
              ],
              box: { label: "Repère", text: "Naturalisme : mouvement littéraire de la fin du XIXe siècle, mené par Zola, qui prolonge le réalisme en s'inspirant des sciences : documentation, observation, rôle de l'hérédité et du milieu." },
            },
            {
              heading: "Octave Mouret et l'immeuble de la rue de Choiseul",
              paragraphs: [
                "Octave Mouret, jeune provincial de vingt-deux ans venu de Plassans, arrive à Paris avec l'ambition de faire fortune, notamment grâce aux femmes. L'architecte Campardon, un ami de sa famille, le loge dans un immeuble bourgeois cossu de la rue de Choiseul. Octave est employé dans un magasin de nouveautés, Au Bonheur des Dames, tenu par Mme Hédouin.",
                "Le roman suit les habitants de l'immeuble, étage par étage : les Josserand, dont la mère cherche désespérément à marier ses filles ; les Vabre, famille du propriétaire, déchirée par les questions d'héritage ; le magistrat Duveyrier, qui entretient une maîtresse ; les Pichon, jeune couple modeste dont l'épouse, Marie, devient la maîtresse d'Octave. Octave séduit ensuite Berthe Josserand, mariée à Auguste Vabre ; la liaison est découverte et provoque un scandale. À la fin, Octave épouse Mme Hédouin, devenue veuve.",
                "L'immeuble est construit comme un microcosme, une société en réduction. Sa façade, son grand escalier au faux marbre et son tapis rouge affichent la respectabilité ; le concierge, M. Gourd, veille avec solennité sur la bonne tenue de la maison. Mais derrière, la cour intérieure sur laquelle donnent les cuisines est l'envers du décor : les domestiques s'y interpellent d'une fenêtre à l'autre et y étalent, avec les ordures, les secrets de leurs maîtres.",
              ],
            },
            {
              heading: "Les rouages de la société bourgeoise",
              paragraphs: [
                "Le mariage apparaît comme une transaction. Mme Josserand, épouse d'un modeste caissier, ruine le ménage en réceptions pour attirer des prétendants, apprend à ses filles l'art de séduire et promet une dot que la famille est incapable de payer. Le mariage de Berthe avec Auguste Vabre est conclu par calcul : il ne tarde pas à tourner à la mésentente puis à l'adultère.",
                "L'argent et les apparences gouvernent tout. Les héritiers Vabre se déchirent dès la mort du vieux propriétaire ; chacun surveille le train de vie des autres. L'adultère est partout, mais toléré tant qu'il reste caché : ce qui compte n'est pas la vertu, c'est l'absence de scandale. La religion elle-même sert de couverture : l'abbé Mauduit, prêtre de ces familles, couvre leurs fautes pour sauver les apparences, tout en mesurant avec amertume l'hypocrisie qu'il protège.",
                "Les domestiques ne sont pas idéalisés, mais leur sort révèle la dureté des maîtres. Adèle, la bonne des Josserand, mal nourrie et méprisée, accouche seule dans sa chambre sous les toits, dans l'indifférence générale. Zola dévoile ainsi les rouages d'une société où chacun joue un rôle, et où la morale proclamée sert surtout à masquer les intérêts.",
              ],
            },
            {
              heading: "Une écriture qui dévoile",
              paragraphs: [
                "Le narrateur est omniscient, mais il adopte souvent le point de vue d'un personnage : au début, le lecteur découvre l'immeuble avec les yeux émerveillés d'Octave, avant d'en percer peu à peu les secrets. Zola recourt aussi au style indirect libre, qui fait entendre les pensées et les clichés des personnages sans guillemets : leur langage les juge eux-mêmes.",
                "La satire passe par l'ironie et par les contrastes : le faux marbre de l'escalier, le silence des étages et le vacarme de la cour, les discours sur la morale et les adultères qui se multiplient. Les motifs reviennent comme des refrains (l'escalier, la cour, les portes closes), et la description est toujours significative : un décor dit quelque chose des personnages qui l'habitent.",
                "Le titre lui-même est satirique. Familièrement, la « pot-bouille » désigne la cuisine ordinaire d'un ménage, le pot-au-feu de tous les jours. Zola en fait l'image de cette vie bourgeoise médiocre où mijotent les petits arrangements, les mariages d'intérêt et les fautes cachées. Pot-Bouille annonce enfin Au Bonheur des Dames (1883), où l'on retrouve Octave Mouret à la tête d'un grand magasin.",
              ],
              box: { label: "À retenir", text: "Pot-Bouille dévoile les rouages de la bourgeoisie en opposant la façade et l'envers : le grand escalier et la cour des cuisines, la morale affichée et les intérêts cachés. L'ironie, le style indirect libre et les descriptions significatives sont les outils de cette satire." },
            },
          ],
          keyPoints: [
            "Pot-Bouille (1882) : dixième roman des Rougon-Macquart, consacré à la bourgeoisie parisienne du Second Empire.",
            "Naturalisme : documentation, observation, influence de l'hérédité et du milieu (Le Roman expérimental, 1880).",
            "L'immeuble de la rue de Choiseul est un microcosme : façade respectable, envers sordide de la cour des cuisines.",
            "Rouages dévoilés : mariage d'intérêt, dot, héritage, adultère toléré s'il reste caché, religion complaisante.",
            "Procédés : narrateur omniscient et point de vue d'Octave, style indirect libre, ironie, motifs récurrents.",
            "Le titre désigne la cuisine ordinaire du ménage, image de la médiocrité bourgeoise.",
          ],
          example: {
            statement: "Expliquez en quoi l'immeuble où s'installe Octave Mouret constitue un microcosme de la société bourgeoise, et comment son organisation sert le projet critique de Zola.",
            solution: [
              "Définir : un microcosme est un monde en réduction qui reproduit les traits d'une société plus vaste.",
              "Montrer la hiérarchie : les étages répartissent les habitants selon leur fortune et leur rang, des appartements nobles du propriétaire aux chambres de bonnes sous les toits.",
              "Montrer la façade : le grand escalier au faux marbre, le tapis, le silence et la surveillance du concierge M. Gourd incarnent la respectabilité et le souci des apparences.",
              "Montrer l'envers : la cour des cuisines, où les domestiques révèlent bruyamment les secrets des maîtres, dévoile ce que la façade cache (adultères, mesquineries, misère des bonnes).",
              "Relier au projet : en opposant ces deux espaces, Zola rend visible l'hypocrisie bourgeoise ; le faux marbre devient le symbole d'une société de faux-semblants.",
              "Réponse : l'immeuble reproduit la hiérarchie sociale et oppose une façade respectable à un envers sordide, ce qui permet à Zola de dévoiler les rouages cachés de la bourgeoisie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lisez ce passage d'entraînement, écrit à la manière naturaliste : « L'escalier montait, solennel, sous une lumière blafarde. Les murs imitaient le marbre, mais une fissure courait déjà sous la peinture. Une odeur de soupe refroidie descendait des étages, tandis que derrière les portes closes on entendait chuchoter. » Relevez trois procédés caractéristiques de l'écriture de Zola et expliquez leur effet.",
              hint: "Cherchez les sens sollicités (vue, odorat, ouïe), puis une opposition entre ce que le décor veut paraître et ce qu'il est.",
              solution: [
                "Une description sensorielle précise : la vue (« lumière blafarde »), l'odorat (« odeur de soupe refroidie »), l'ouïe (« chuchoter ») donnent l'impression d'un réel observé.",
                "Une opposition entre l'apparence et la réalité : les murs « imitaient le marbre, mais une fissure courait » ; le luxe est factice et déjà menacé.",
                "Une description significative : la fissure et les portes closes deviennent des symboles, celui d'une respectabilité lézardée et de secrets cachés derrière la façade.",
                "Réponse : description sensorielle, opposition apparence et réalité, décor symbolique ; le lieu annonce déjà l'hypocrisie de ses habitants.",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé du parcours de la famille Josserand : Mme Josserand, épouse d'un modeste caissier, dépense ce qu'elle n'a pas en soirées pour trouver des maris à ses filles ; elle enseigne à Berthe comment plaire et retenir un prétendant ; elle promet une dot que la famille ne pourra pas payer. Berthe épouse Auguste Vabre, un commerçant de l'immeuble. Le ménage se querelle bientôt, et Berthe trompe son mari avec Octave. a) Quelles valeurs gouvernent ce mariage ? b) En quoi s'agit-il d'une satire ? c) Quel lien pouvez-vous faire avec le titre du roman ?",
              hint: "Repérez ce qui compte dans ce mariage (l'argent, le rang, les apparences) et ce qui en est absent. Pensez ensuite au sens familier de « pot-bouille ».",
              solution: [
                "a) Le mariage est gouverné par l'argent et les apparences : il s'agit de « caser » une fille et de paraître plus riche qu'on ne l'est. L'amour et l'estime en sont absents.",
                "b) C'est une satire parce que Zola grossit les travers d'une classe sociale pour les dénoncer : la mère devient une stratège de la chasse au mari, la dot promise est un mensonge, et la morale conjugale s'effondre dans l'adultère.",
                "c) Le titre désigne la cuisine ordinaire du ménage : le mariage des Josserand et des Vabre en est un exemple, mélange médiocre de calculs, de disputes et de petites trahisons qui mijotent dans le secret de l'immeuble.",
                "Réponse : à travers les Josserand, Zola montre le mariage bourgeois comme une transaction fondée sur l'argent et les apparences, et en fait la satire.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac) : rédigez l'introduction complète du sujet suivant : « Pot-Bouille n'est-il qu'un roman qui fait rire de la bourgeoisie ? » Votre introduction comportera une amorce, la présentation de l'œuvre, l'analyse du sujet, une problématique et l'annonce du plan.",
              hint: "Le mot « que » dans « n'est-il qu'un » invite à montrer que le roman fait rire, mais aussi qu'il fait autre chose : dénoncer, émouvoir, analyser scientifiquement.",
              solution: [
                "Amorce : au XIXe siècle, le roman se donne pour mission de représenter la société ; avec le naturalisme, Zola veut aller plus loin et en analyser les mécanismes.",
                "Présentation : Pot-Bouille, publié en 1882, dixième volume des Rougon-Macquart, suit Octave Mouret dans un immeuble bourgeois de la rue de Choiseul.",
                "Analyse du sujet : le roman fait rire par la satire et l'ironie, mais la restriction « n'est-il que » invite à se demander si ce rire n'est pas au service d'une dénonciation plus grave.",
                "Problématique : le rire de Pot-Bouille n'est-il qu'un divertissement aux dépens des bourgeois, ou devient-il l'instrument d'une mise à nu des rouages de toute une société ?",
                "Annonce du plan : nous verrons d'abord que le roman multiplie les procédés comiques et satiriques, puis que ce rire laisse place à une dénonciation sombre, avant de montrer qu'il sert le projet naturaliste d'analyse sociale.",
                "Introduction rédigée (exemple) : « Au XIXe siècle, le roman ambitionne de représenter la société ; Zola, avec le naturalisme, prétend même l'étudier comme un savant. Dans Pot-Bouille (1882), dixième volume des Rougon-Macquart, il fait entrer le lecteur dans un immeuble bourgeois de la rue de Choiseul aux côtés du jeune Octave Mouret. Le roman amuse souvent par sa satire. Mais ce rire n'est-il qu'un divertissement aux dépens des bourgeois, ou devient-il l'instrument d'une mise à nu des rouages de toute une société ? Nous verrons d'abord que le roman multiplie les procédés comiques, puis que ce rire laisse place à une dénonciation plus sombre, avant de montrer qu'il sert l'ambition naturaliste d'analyser la société. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : que savez-vous de Pot-Bouille ?",
            statements: [
              { text: "Pot-Bouille est le dixième roman des Rougon-Macquart.", true: true, why: "Il paraît en 1882, après Nana (1880), et avant Au Bonheur des Dames (1883)." },
              { text: "Octave Mouret est un ouvrier venu chercher du travail en usine.", true: false, why: "C'est un jeune provincial ambitieux, employé de commerce, qui compte réussir grâce aux femmes." },
              { text: "L'immeuble oppose un grand escalier solennel et une cour des cuisines où s'échangent les ragots.", true: true, why: "Cette opposition entre la façade et l'envers structure toute la satire." },
              { text: "Pour Zola, le naturalisme consiste à embellir le réel pour plaire au lecteur.", true: false, why: "Il s'agit au contraire d'observer et de documenter le réel, y compris dans ce qu'il a de plus sordide." },
              { text: "Le titre désigne familièrement la cuisine ordinaire du ménage.", true: true, why: "La pot-bouille, c'est le pot-au-feu quotidien : l'image de la médiocrité des ménages bourgeois." },
              { text: "Zola oppose une bourgeoisie vertueuse à des domestiques corrompus.", true: false, why: "Les maîtres sont au moins aussi corrompus que leurs bonnes ; ils le cachent seulement mieux." },
              { text: "Octave Mouret reparaît dans Au Bonheur des Dames.", true: true, why: "Dans ce roman de 1883, il dirige un grand magasin parisien." },
            ],
          },
          quiz: [
            { q: "Dans quel cycle romanesque s'inscrit Pot-Bouille ?", options: ["La Comédie humaine, de Balzac", "Les Rougon-Macquart", "À la recherche du temps perdu, de Proust", "Les Misérables, de Hugo"], answer: 1, why: "Pot-Bouille est le dixième des vingt romans des Rougon-Macquart de Zola." },
            { q: "Quel personnage veille sur la respectabilité de l'immeuble ?", options: ["L'architecte Campardon", "M. Josserand, le caissier", "M. Gourd, le concierge", "Auguste Vabre, le commerçant"], answer: 2, why: "Le concierge M. Gourd incarne avec solennité le souci des apparences et de la bonne tenue de la maison." },
            { q: "Que représente la cour sur laquelle donnent les cuisines ?", options: ["L'envers du décor", "Le lieu des réceptions mondaines où l'on cherche des maris", "Le jardin réservé au propriétaire et à sa famille"], answer: 0, why: "Les domestiques y révèlent bruyamment les secrets des maîtres : c'est ce que la façade cache." },
            { q: "Quel procédé fait entendre les pensées d'un personnage sans guillemets ni verbe introducteur ?", options: ["Le discours direct", "Le monologue intérieur entre guillemets", "La prolepse", "Le style indirect libre"], answer: 3, why: "Le style indirect libre mêle la voix du personnage à celle du narrateur : Zola s'en sert pour que les personnages se jugent par leurs propres clichés." },
            { q: "Selon le naturalisme, qu'est-ce qui détermine les actes des personnages ?", options: ["Le hasard et la volonté divine", "L'hérédité et le milieu", "Le seul libre choix de chacun"], answer: 1, why: "Zola veut montrer, comme un savant, l'influence de l'hérédité et de l'environnement social." },
          ],
          trap: "Réduire Pot-Bouille à une suite d'histoires d'adultère : chaque intrigue sert à dévoiler un rouage social (l'argent, le mariage, l'héritage, la religion), et c'est ce mécanisme qu'il faut analyser.",
          method: "Pour chaque personnage important, notez en une ligne le rouage social qu'il dévoile (Mme Josserand : le marché du mariage ; les Vabre : l'héritage ; l'abbé Mauduit : la religion complaisante) : votre fiche deviendra une réserve d'arguments.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'schwarz-bart-telumee',
          title: 'Schwarz-Bart, « Pluie et vent sur Télumée Miracle » : tisser les mémoires',
          minutes: 35,
          objectives: [
            "Situer Pluie et vent sur Télumée Miracle dans son contexte : la Guadeloupe, l'héritage de l'esclavage, la littérature antillaise.",
            "Analyser la construction du récit autour d'une lignée de femmes et de la transmission entre générations.",
            "Identifier les marques d'une écriture de la voix : récit rétrospectif à la première personne, oralité, proverbes, images de la nature.",
            "Présenter et défendre l'œuvre lors de l'entretien de l'oral.",
          ],
          course: [
            {
              heading: "Une autrice, une île, une histoire",
              paragraphs: [
                "Simone Schwarz-Bart, née en 1938, a grandi en Guadeloupe. Avec son mari, l'écrivain André Schwarz-Bart, elle publie en 1967 Un plat de porc aux bananes vertes, puis, seule, Pluie et vent sur Télumée Miracle en 1972. Ce roman, devenu un classique de la littérature antillaise, raconte la vie d'une femme guadeloupéenne et, à travers elle, celle de toute une communauté.",
                "Pour le comprendre, il faut connaître l'histoire de l'île. La Guadeloupe fut une colonie française dont l'économie reposait sur les plantations de canne à sucre et sur l'esclavage, aboli définitivement par le décret du 27 avril 1848. Après l'abolition, les descendants d'esclaves restent pour beaucoup des travailleurs pauvres des plantations, tandis que les békés, descendants des colons blancs, conservent les terres et le pouvoir. La Guadeloupe devient un département français en 1946.",
                "Le roman se déroule pour l'essentiel dans la première moitié du XXe siècle, dans les campagnes de l'île : un village nommé Fond-Zombi, les mornes (collines), les cases, les champs de canne. Il fait entendre ceux que l'histoire officielle laisse souvent dans l'ombre : les pauvres, et surtout les femmes.",
              ],
              box: { label: "Repère", text: "1848 : abolition de l'esclavage dans les colonies françaises. 1946 : la Guadeloupe devient un département. 1972 : Pluie et vent sur Télumée Miracle de Simone Schwarz-Bart." },
            },
            {
              heading: "Une lignée de femmes",
              paragraphs: [
                "Télumée, devenue vieille, raconte sa vie à la première personne. Le roman se compose de deux parties. La première, « Présentation des miens », remonte aux femmes de sa lignée, les Lougandor : Minerve, l'arrière-grand-mère, qui appartient à la génération ayant connu l'esclavage ; Toussine, la grand-mère ; Victoire, la mère. La seconde, « Histoire de ma vie », raconte l'existence de Télumée elle-même.",
                "Toussine est la figure centrale de cette lignée. Frappée par un deuil terrible, la mort d'une de ses filles dans un incendie, elle s'enferme longtemps dans le chagrin puis se relève ; on lui donne alors le surnom de Reine Sans Nom. C'est elle qui élève Télumée à Fond-Zombi, lorsque Victoire confie sa fille à sa propre mère. Elle lui transmet une manière d'affronter le malheur : ne pas se laisser abattre, rester debout.",
                "La vie de Télumée est faite de bonheurs et d'épreuves : l'initiation auprès de Man Cia, vieille femme savante réputée capable de se changer en bête ; l'amour d'Elie, qui se transforme en violence puis en abandon ; la chute dans le désespoir et la lente reconstruction ; la vie aux côtés d'Amboise, compagnon de sa maturité, qui meurt lors d'une grève. À chaque fois, elle retrouve la force héritée de ses aïeules.",
              ],
            },
            {
              heading: "Tisser les mémoires",
              paragraphs: [
                "Le roman entrelace deux mémoires. La mémoire individuelle d'abord : Télumée revient sur sa vie depuis la vieillesse, et ce regard rétrospectif donne au récit sa sagesse et sa mélancolie. La mémoire collective ensuite : à travers les Lougandor, c'est l'histoire des descendants d'esclaves qui se dit, avec la pauvreté, le travail épuisant dans la canne et les rapports de domination hérités de la plantation.",
                "Lorsque Télumée travaille comme servante chez une famille de békés, les Desaragne, elle subit le mépris de sa maîtresse, qui tient sur les Noirs des discours humiliants. Elle répond par une résistance intérieure, une dignité silencieuse que lui a apprise Reine Sans Nom. L'épisode montre comment la hiérarchie de l'esclavage survit dans la société d'après l'abolition.",
                "Le verbe « tisser » convient bien à cette œuvre : le récit noue les fils des générations, mêle les histoires des aïeules à celle de la narratrice, les contes et les proverbes à la vie quotidienne. Transmettre, c'est ici permettre à chacune de ne pas recommencer seule le combat contre le malheur.",
              ],
              box: { label: "À retenir", text: "Pluie et vent sur Télumée Miracle tisse ensemble la mémoire d'une femme et celle d'un peuple : la transmission entre les générations de femmes est ce qui permet de survivre aux épreuves et de garder sa dignité." },
            },
            {
              heading: "Une écriture de la voix",
              paragraphs: [
                "Le récit semble dit plus qu'écrit : il imite la parole d'une conteuse. On y trouve des proverbes et des formules de sagesse collective, des adresses, des répétitions, un rythme proche de l'oral. Le français de Simone Schwarz-Bart est travaillé par le créole, dont il reprend des mots, des images et parfois des tournures, sans jamais devenir obscur pour le lecteur.",
                "Les images sont empruntées à la nature de l'île : la pluie et le vent, les rivières, les arbres, les mornes, les saisons. Le titre en donne la clé : la « pluie » et le « vent » désignent les épreuves de l'existence, que Télumée traverse sans se briser. Le surnom de « Miracle », enfin, dit cette capacité extraordinaire de résister et de se relever.",
                "Le merveilleux fait partie du monde des personnages : esprits, métamorphoses de Man Cia, croyances populaires sont racontés avec naturel, comme des réalités. Cette écriture rend hommage à une culture orale longtemps méprisée et lui donne la dignité de la littérature.",
              ],
            },
          ],
          keyPoints: [
            "Roman de Simone Schwarz-Bart (1972) : la vie de Télumée, en Guadeloupe, racontée par elle-même dans sa vieillesse.",
            "Deux parties : « Présentation des miens » (la lignée des Lougandor) et « Histoire de ma vie ».",
            "Lignée : Minerve, Toussine dite Reine Sans Nom, Victoire, Télumée ; Reine Sans Nom élève Télumée et lui apprend à rester debout.",
            "Mémoire individuelle et mémoire collective : l'héritage de l'esclavage (aboli en 1848), la pauvreté, la domination des békés.",
            "Écriture de la voix : oralité, proverbes, mots créoles, images de la nature, merveilleux raconté avec naturel.",
            "Le titre : la pluie et le vent sont les épreuves de la vie ; « Miracle » dit la force de résister.",
          ],
          example: {
            statement: "Expliquez le titre Pluie et vent sur Télumée Miracle en vous appuyant sur ce que vous savez de l'œuvre.",
            solution: [
              "Observer la construction : le titre associe deux éléments naturels (« pluie et vent »), une préposition (« sur ») et un nom propre suivi d'un surnom (« Télumée Miracle »).",
              "Interpréter « pluie et vent » : ce sont des intempéries, donc une métaphore des épreuves de la vie (deuils, pauvreté, trahison d'Elie, mort d'Amboise, humiliations).",
              "Interpréter « sur » : la préposition montre que ces épreuves s'abattent sur l'héroïne, qui les subit sans les avoir choisies.",
              "Interpréter « Miracle » : le surnom, donné comme on donne un nom à une personne remarquable, dit sa capacité à survivre à tout et à rester debout, comme sa grand-mère Reine Sans Nom.",
              "Réponse : le titre résume le roman, une vie traversée d'épreuves que l'héroïne surmonte grâce à une force héritée, au point de devenir pour les siens un « miracle ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettez dans l'ordre des générations les quatre femmes de la lignée des Lougandor et indiquez pour chacune un trait essentiel : Victoire, Minerve, Télumée, Toussine.",
              hint: "La narratrice est la plus jeune ; remontez de sa mère à sa grand-mère, puis à son arrière-grand-mère.",
              solution: [
                "Minerve, l'arrière-grand-mère : elle appartient à la génération qui a connu l'esclavage.",
                "Toussine, la grand-mère : après un deuil terrible, elle se relève et devient Reine Sans Nom ; elle élève Télumée.",
                "Victoire, la mère : elle confie sa fille à Reine Sans Nom.",
                "Télumée, la narratrice : elle traverse les épreuves et raconte sa vie depuis sa vieillesse.",
                "Réponse : Minerve, Toussine (Reine Sans Nom), Victoire, Télumée.",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage d'entraînement écrit à la manière du roman : « On dit chez nous qu'une femme ne tombe jamais tout à fait si elle se souvient de la main qui l'a relevée. Ma grand-mère disait cela en riant, les pieds dans la rivière, et moi je l'écoutais sans comprendre. Aujourd'hui que me voilà vieille, assise devant ma case, je comprends. » a) Relevez deux marques d'oralité. b) Montrez que le passage repose sur une transmission. c) En quoi « tisse »-t-il deux temps de la vie ?",
              hint: "Cherchez une formule de sagesse collective, puis comparez le moment où la grand-mère parle et celui où la narratrice raconte.",
              solution: [
                "a) Marques d'oralité : la formule « On dit chez nous », qui introduit un proverbe de la communauté ; la parole rapportée de la grand-mère (« disait cela en riant ») ; le rythme ternaire et simple des phrases.",
                "b) La sagesse passe de la grand-mère à la petite-fille : d'abord entendue sans être comprise, elle prend sens avec l'expérience. Le proverbe lui-même parle de la « main qui l'a relevée », c'est-à-dire de l'aide reçue des autres.",
                "c) Le passage relie l'enfance (« je l'écoutais sans comprendre ») et la vieillesse (« Aujourd'hui que me voilà vieille ») : le récit rétrospectif fait se rejoindre les deux temps, comme deux fils noués.",
                "Réponse : par l'oralité, la transmission et la rétrospection, le passage tisse la mémoire des aïeules et celle de la narratrice, comme le fait le roman de Simone Schwarz-Bart.",
              ],
            },
            {
              level: 3,
              statement: "Préparation à l'entretien de l'oral (type bac) : vous avez choisi Pluie et vent sur Télumée Miracle comme œuvre de l'entretien. Préparez une présentation d'environ deux minutes : présentation de l'œuvre, raisons de votre choix, un épisode marquant, et le lien avec le travail sur la mémoire. Rédigez-la sous forme de notes ordonnées, puis donnez un exemple de début.",
              hint: "L'examinateur attend une lecture personnelle et argumentée : dites ce qui vous a touché, mais justifiez toujours par un épisode précis du roman.",
              solution: [
                "1. Présentation : roman de Simone Schwarz-Bart (1972), récit à la première personne de Télumée, femme guadeloupéenne, qui raconte sa lignée puis sa vie.",
                "2. Raisons du choix : la force du personnage, qui se relève de chaque épreuve ; la beauté d'une langue proche de la parole ; la découverte d'une histoire, celle des descendants d'esclaves, peu présente dans mes autres lectures.",
                "3. Épisode marquant : par exemple la chute de Télumée après l'abandon d'Elie et sa lente reconstruction, qui montre ce que signifie « rester debout ».",
                "4. Lien avec la mémoire : le roman tisse la mémoire de quatre générations de femmes ; la sagesse de Reine Sans Nom accompagne Télumée toute sa vie.",
                "5. Ouverture possible : comparer avec un autre récit de mémoire étudié dans l'année, ou avec la poésie de la Négritude (Aimé Césaire).",
                "Exemple de début : « J'ai choisi Pluie et vent sur Télumée Miracle parce que ce roman m'a fait découvrir une voix : celle d'une vieille femme qui raconte sa vie et celle de ses aïeules, en Guadeloupe, avec une langue qui garde le rythme de la parole. Ce qui m'a le plus marqué, c'est sa manière de se relever après chaque épreuve... »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque personnage à son rôle dans la vie de Télumée.",
            pairs: [
              { left: "Minerve", right: "L'arrière-grand-mère, de la génération de l'esclavage" },
              { left: "Reine Sans Nom", right: "La grand-mère qui l'élève et lui apprend à rester debout" },
              { left: "Victoire", right: "La mère, qui confie sa fille à sa propre mère" },
              { left: "Man Cia", right: "La vieille femme savante qui l'initie aux secrets du monde" },
              { left: "Elie", right: "Le premier amour, devenu violent, qui l'abandonne" },
              { left: "Amboise", right: "Le compagnon de la maturité, mort lors d'une grève" },
            ],
          },
          quiz: [
            { q: "En quelle année paraît Pluie et vent sur Télumée Miracle ?", options: ["1972", "1948", "1989", "2008"], answer: 0, why: "Le roman de Simone Schwarz-Bart paraît en 1972, cinq ans après Un plat de porc aux bananes vertes écrit avec André Schwarz-Bart." },
            { q: "Qui élève Télumée à Fond-Zombi ?", options: ["Sa mère Victoire, avec l'aide d'Elie", "Man Cia, la vieille femme savante", "Minerve, son arrière-grand-mère", "Sa grand-mère, Reine Sans Nom"], answer: 3, why: "Victoire confie sa fille à Toussine, dite Reine Sans Nom, qui lui transmet l'art de rester debout face au malheur." },
            { q: "Comment s'intitulent les deux parties du roman ?", options: ["« L'enfance » et « La vieillesse »", "« Présentation des miens » et « Histoire de ma vie »", "« La pluie » et « Le vent »"], answer: 1, why: "La première partie présente la lignée des Lougandor, la seconde raconte la vie de Télumée." },
            { q: "Que désigne le mot « béké » aux Antilles ?", options: ["Un coupeur de canne employé à la journée", "Une petite maison de bois", "Un descendant des colons blancs", "Un conteur qui transmet les histoires anciennes"], answer: 2, why: "Les békés, descendants des colons, conservent après l'abolition les terres et une grande partie du pouvoir économique." },
            { q: "Que suggèrent la « pluie » et le « vent » du titre ?", options: ["La saison des cyclones, sujet principal du livre", "Le métier de pêcheur qu'exerce Amboise", "Les épreuves de la vie que traverse l'héroïne", "La nostalgie d'un pays quitté pour la France"], answer: 2, why: "Ce sont des métaphores des malheurs qui s'abattent sur Télumée et qu'elle surmonte." },
          ],
          trap: "Lire le roman comme un simple récit de malheurs : l'essentiel est la manière dont Télumée, grâce à ce que lui ont transmis ses aïeules, se relève de chaque épreuve et garde sa dignité.",
          method: "Préparez pour l'entretien trois épisodes que vous savez raconter en trente secondes chacun (la leçon de Reine Sans Nom, le service chez les Desaragne, l'abandon par Elie et la reconstruction) : ils illustrent la transmission, la mémoire collective et la résistance.",
        },
      ],
    },
    /* ==================================================================== */
    /* ÉTUDE DE LA LANGUE : INTERROGATION ET NÉGATION                         */
    /* ==================================================================== */
    {
      id: 'langue-interrogation-negation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'interrogation-directe-indirecte',
          title: 'L’interrogation : totale, partielle, directe, indirecte',
          minutes: 30,
          objectives: [
            "Distinguer l'interrogation totale et l'interrogation partielle, et identifier le mot interrogatif et sa classe grammaticale.",
            "Identifier les trois constructions de l'interrogation directe (intonation, « est-ce que », inversion du sujet) et leur niveau de langue.",
            "Transformer une interrogation directe en interrogation indirecte et analyser la subordonnée interrogative indirecte : mot introducteur, nature, fonction.",
            "Interpréter la valeur d'une question dans un texte : vraie question, question rhétorique, question délibérative, demande indirecte.",
          ],
          course: [
            {
              heading: "Interrogation totale et interrogation partielle",
              paragraphs: [
                "Interroger, c'est demander une information que l'on ne possède pas. La grammaire distingue deux types de questions selon ce sur quoi porte l'interrogation. L'interrogation totale porte sur l'ensemble de la phrase : on attend une réponse par « oui » ou par « non », et par « si » lorsque la question est négative (« Ne viendrez-vous pas ? Si. »). Dans « Le Baron a-t-il invité Camille ? », c'est la vérité de toute la proposition qui est mise en question.",
                "L'interrogation partielle porte sur un seul constituant de la phrase, que le locuteur ignore : le sujet, un complément, un attribut, une circonstance. On ne peut pas y répondre par oui ou par non. Elle est introduite par un mot interrogatif : « Qui a menti ? » porte sur le sujet, « Que cherchez-vous ? » sur le COD, « Où Dorante a-t-il passé la nuit ? » sur le complément de lieu. La réponse remplace le mot interrogatif par l'information attendue.",
                "Les mots interrogatifs appartiennent à trois classes. Les pronoms interrogatifs : qui, que, quoi, lequel (et ses formes laquelle, lesquels, auquel, duquel...), ainsi que les formes renforcées « qui est-ce qui », « qu'est-ce que ». Les déterminants interrogatifs : quel, quelle, quels, quelles (« Quelle pièce préférez-vous ? »). Les adverbes interrogatifs : où, quand, comment, pourquoi, combien. Au bac, il faut savoir nommer la classe du mot interrogatif et la fonction de l'élément sur lequel porte la question.",
              ],
              box: { label: "Définition", text: "Interrogation totale : elle porte sur toute la phrase et appelle « oui », « non » ou « si ». Interrogation partielle : elle porte sur un seul constituant et commence par un mot interrogatif (pronom, déterminant ou adverbe)." },
            },
            {
              heading: "Les trois constructions de l'interrogation directe",
              paragraphs: [
                "L'interrogation directe est une phrase autonome, de type interrogatif, qui se termine à l'écrit par un point d'interrogation. Elle se construit de trois manières, qui correspondent à trois niveaux de langue. La première repose sur la seule intonation montante, l'ordre des mots restant celui de la phrase déclarative : « Vous partez ? », « Vous partez où ? ». Elle est surtout orale et relève du registre courant ou familier ; le mot interrogatif peut alors rester à la place du constituant qu'il remplace, en fin de phrase.",
                "La deuxième utilise la locution interrogative « est-ce que » (ou « est-ce qui »), placée en tête de phrase ou après le mot interrogatif, sans inversion du sujet : « Est-ce que vous partez ? », « Où est-ce que vous allez ? ». C'est le registre courant. La troisième, propre au registre soutenu et à l'écrit littéraire, inverse le sujet et le verbe.",
                "L'inversion est simple lorsque le sujet est un pronom personnel, « ce » ou « on » : il passe après le verbe et s'y rattache par un trait d'union (« Partez-vous ? », « Est-ce vrai ? »), avec un « t » euphonique entre deux voyelles (« Viendra-t-il ? », « Aime-t-elle ? »). Elle est complexe lorsque le sujet est un nom ou un pronom non personnel : le sujet reste devant le verbe et il est repris après lui par un pronom personnel (« Camille aime-t-elle Perdican ? », « Cela est-il possible ? »). Dans l'interrogation partielle, le sujet nominal peut aussi être simplement placé après le verbe : « Où va Perdican ? »",
              ],
              box: { label: "À retenir", text: "Intonation seule : « Vous venez ? » (oral, familier). « Est-ce que » : « Est-ce que vous venez ? » (courant). Inversion : « Venez-vous ? », « Votre frère vient-il ? » (soutenu). Seule l'inversion complexe reprend le sujet nominal par un pronom personnel." },
            },
            {
              heading: "L'interrogation indirecte",
              paragraphs: [
                "L'interrogation indirecte n'est pas une phrase autonome : la question est enchâssée dans une phrase déclarative, sous la forme d'une proposition subordonnée interrogative indirecte. Celle-ci dépend d'un verbe qui exprime une demande, une ignorance ou un savoir : demander, se demander, ignorer, savoir, dire, chercher, comprendre... Exemple : « Géronte se demande si son fils a menti. » La phrase se termine par un point simple, sans point d'interrogation, et la subordonnée est le plus souvent COD du verbe dont elle dépend.",
                "Le mot introducteur dépend du type de question. Une interrogation totale devient une subordonnée introduite par la conjonction « si » : « Est-il marié ? » donne « Je demande s'il est marié ». Une interrogation partielle garde son mot interrogatif (qui, quel, lequel, où, quand, comment, pourquoi, combien) : « Où allez-vous ? » donne « Je demande où vous allez ». Mais « que » et « qu'est-ce que » deviennent « ce que », et « qu'est-ce qui » devient « ce qui » : « Que voulez-vous ? » donne « Je demande ce que vous voulez ».",
                "Le passage à l'interrogation indirecte entraîne d'autres transformations. La locution « est-ce que » disparaît ; l'inversion du pronom sujet disparaît aussi (on ne dit pas « je demande où allez-vous ») ; les pronoms et les déterminants changent de personne selon la situation ; enfin, si le verbe introducteur est au passé, les temps suivent la concordance : le présent devient imparfait, le futur devient conditionnel présent, le passé composé devient plus-que-parfait. « Viendrez-vous ? » devient ainsi « Il nous demanda si nous viendrions ».",
              ],
              box: { label: "Règle", text: "Directe vers indirecte : question totale, « si » ; « que » et « qu'est-ce que », « ce que » ; « qu'est-ce qui », « ce qui » ; les autres mots interrogatifs sont conservés. Plus de point d'interrogation, plus de « est-ce que », plus d'inversion du pronom sujet ; concordance des temps après un verbe introducteur au passé." },
            },
            {
              heading: "Les valeurs de l'interrogation : ce que fait une question",
              paragraphs: [
                "Toute question n'est pas une demande d'information. L'interrogation rhétorique, dite aussi oratoire, est une fausse question : celui qui la pose connaît la réponse et cherche à l'imposer à son interlocuteur. « Peut-on vivre sans aimer ? » signifie, selon le contexte, qu'on ne le peut pas. Fréquente dans l'argumentation et dans les tirades, elle sous-entend une réponse négative lorsqu'elle est à la forme affirmative, et une réponse positive lorsqu'elle est à la forme négative (« N'ai-je pas tout fait pour vous ? »).",
                "L'interrogation délibérative est une question que le personnage se pose à lui-même, souvent dans un monologue : elle exprime le doute, l'hésitation entre deux choix (« Que faire ? Partir ou rester ? »). Au théâtre, elle rend visible le débat intérieur. Une question peut aussi être une demande déguisée : « Pouvez-vous fermer la porte ? » n'interroge pas sur une capacité, c'est une requête polie (on parle d'acte de langage indirect). Elle peut enfin exprimer l'indignation ou la surprise : « Moi, mentir ? »",
                "À l'oral du bac, la question de grammaire peut porter sur l'interrogation. Identifiez son type (totale ou partielle), sa forme (directe ou indirecte), sa construction (intonation, « est-ce que », inversion simple ou complexe), le mot interrogatif et sa classe, puis sa valeur dans le texte. Terminez toujours par l'effet produit : c'est ce lien entre la forme grammaticale et le sens qui est valorisé.",
              ],
              box: { label: "Repère", text: "Question rhétorique : une fausse question qui affirme. Question délibérative : le personnage s'interroge lui-même. Demande indirecte : une question qui sert à faire agir. Question exclamative : elle exprime une émotion (surprise, indignation)." },
            },
          ],
          keyPoints: [
            "Interrogation totale : elle porte sur toute la phrase, réponse par oui, non ou si. Interrogation partielle : elle porte sur un constituant et commence par un mot interrogatif.",
            "Mots interrogatifs : pronoms (qui, que, quoi, lequel), déterminants (quel), adverbes (où, quand, comment, pourquoi, combien).",
            "Interrogation directe : intonation (familier), « est-ce que » (courant), inversion simple ou complexe du sujet (soutenu).",
            "Inversion complexe : le sujet nominal reste devant le verbe et il est repris par un pronom (« Dorante ment-il ? »).",
            "Interrogation indirecte : subordonnée souvent COD d'un verbe comme demander ou savoir, introduite par « si » ou par un mot interrogatif, sans point d'interrogation.",
            "« Que » et « qu'est-ce que » deviennent « ce que » ; « qu'est-ce qui » devient « ce qui » ; concordance des temps après un verbe au passé.",
            "Valeurs : vraie question, question rhétorique, question délibérative, demande indirecte, question exclamative.",
          ],
          example: {
            statement: "Question de grammaire (type oral du bac) : analysez l'interrogation dans la phrase suivante, écrite pour l'entraînement : « Le vieillard se demandait pourquoi son fils mentait sans cesse et s'il cesserait un jour. »",
            solution: [
              "Repérer les verbes conjugués : « se demandait », « mentait », « cesserait ». La phrase est complexe et compte trois propositions : une principale et deux subordonnées.",
              "Principale : « Le vieillard se demandait ». Le verbe « se demander » exprime une interrogation que l'on se pose : il annonce une interrogation indirecte.",
              "Première subordonnée : « pourquoi son fils mentait sans cesse ». C'est une subordonnée interrogative indirecte partielle, introduite par l'adverbe interrogatif « pourquoi » : la question porte sur la cause. Elle est COD du verbe « se demandait ».",
              "Seconde subordonnée : « s'il cesserait un jour ». C'est une subordonnée interrogative indirecte totale, introduite par la conjonction « si », élidée devant « il ». Elle est coordonnée à la première par « et » et elle est, elle aussi, COD de « se demandait ».",
              "Restituer les questions directes : « Pourquoi mon fils ment-il sans cesse ? » (partielle, inversion complexe) et « Cessera-t-il un jour ? » (totale, inversion simple). Le verbe introducteur étant au passé, la concordance a transformé le présent en imparfait (« mentait ») et le futur en conditionnel (« cesserait »).",
              "Interpréter : l'interrogation indirecte fait entendre le doute du personnage à travers la voix du narrateur ; l'absence de réponse souligne son impuissance face à son fils.",
              "Réponse : une principale suivie de deux subordonnées interrogatives indirectes coordonnées, l'une partielle (« pourquoi »), l'autre totale (« si »), toutes deux COD de « se demandait ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, indiquez s'il s'agit d'une interrogation totale ou partielle, puis précisez la construction utilisée (intonation, « est-ce que », inversion simple, inversion complexe). a) Est-ce que la pièce vous a plu ? b) Perdican aime-t-il vraiment Rosette ? c) Vous partez quand ? d) Où se cache Camille ? e) Avez-vous lu la préface ? f) Qui a écrit Le Menteur ?",
              hint: "Essayez de répondre par oui ou par non : si c'est possible, l'interrogation est totale. Regardez ensuite la place du sujet par rapport au verbe, et vérifiez si un pronom reprend un sujet nominal.",
              solution: [
                "a) Interrogation totale ; construction avec « est-ce que », sans inversion (registre courant).",
                "b) Interrogation totale ; inversion complexe : le sujet nominal « Perdican » reste devant le verbe et il est repris par le pronom « il » (registre soutenu).",
                "c) Interrogation partielle, portant sur le temps ; intonation seule, avec l'adverbe interrogatif « quand » laissé en fin de phrase (registre familier).",
                "d) Interrogation partielle, portant sur le lieu ; le sujet nominal « Camille » est placé après le verbe, derrière l'adverbe « où » : c'est une inversion simple du sujet nominal (registre soutenu).",
                "e) Interrogation totale ; inversion simple du pronom sujet « vous », relié au verbe par un trait d'union (registre soutenu).",
                "f) Interrogation partielle, portant sur le sujet ; le pronom interrogatif « qui » est lui-même sujet, en tête de phrase : aucune inversion ni locution n'est nécessaire.",
                "Réponse : totales, a, b, e ; partielles, c, d, f.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ces interrogations directes en interrogations indirectes, avec le début de phrase indiqué, puis nommez le mot qui introduit chaque subordonnée. a) « Êtes-vous marié ? » (Géronte demande à son fils...) b) « Que voulez-vous ? » (Je vous demande...) c) « Qu'est-ce qui vous trouble ? » (Elle lui demanda...) d) « Quand reviendrez-vous ? » (Il demanda à Camille...) e) « Lequel des deux préférez-vous ? » (Dites-moi...)",
              hint: "Supprimez le point d'interrogation, l'inversion et « est-ce que » ; remplacez « que » par « ce que » et « qu'est-ce qui » par « ce qui » ; pensez à adapter les pronoms et, après un verbe au passé, à la concordance des temps.",
              solution: [
                "a) Géronte demande à son fils s'il est marié. Mot introducteur : la conjonction « si » (interrogation totale). Le pronom « vous » devient « il ».",
                "b) Je vous demande ce que vous voulez. Mot introducteur : « ce que », qui remplace le pronom interrogatif « que ».",
                "c) Elle lui demanda ce qui le troublait. Mot introducteur : « ce qui », qui remplace « qu'est-ce qui » ; le présent devient imparfait après le passé simple « demanda ».",
                "d) Il demanda à Camille quand elle reviendrait. Mot introducteur : l'adverbe interrogatif « quand » ; le futur devient conditionnel présent.",
                "e) Dites-moi lequel des deux vous préférez. Mot introducteur : le pronom interrogatif « lequel » ; l'inversion disparaît, et le temps ne change pas car le verbe introducteur est au présent (impératif).",
                "Réponse : si, ce que, ce qui, quand, lequel.",
              ],
            },
            {
              level: 3,
              statement: "Question de grammaire (type oral du bac). Voici un passage d'entraînement, à la manière d'un monologue de comédie : « Que vais-je devenir ? Faut-il lui dire la vérité, ou continuer à mentir ? Mon père me croira-t-il seulement ? Et qui pourrait pardonner tant de mensonges ? » Analysez les interrogations de ce passage (type, construction, mot interrogatif), puis montrez ce qu'elles révèlent du personnage.",
              hint: "Traitez les quatre questions une par une avec le même ordre (type, construction, mot interrogatif), puis demandez-vous si le personnage attend vraiment une réponse.",
              solution: [
                "« Que vais-je devenir ? » : interrogation directe partielle ; le pronom interrogatif « que » est attribut du sujet « je » (avec le verbe attributif « devenir ») ; inversion simple du pronom sujet après l'auxiliaire « vais ».",
                "« Faut-il lui dire la vérité, ou continuer à mentir ? » : interrogation directe totale, ici alternative (le personnage hésite entre deux possibilités reliées par « ou ») ; inversion simple du pronom impersonnel « il ».",
                "« Mon père me croira-t-il seulement ? » : interrogation directe totale ; inversion complexe, le sujet nominal « Mon père » étant repris par le pronom « il », avec un « t » euphonique.",
                "« Et qui pourrait pardonner tant de mensonges ? » : interrogation directe partielle portant sur le sujet ; le pronom interrogatif « qui » est sujet, sans inversion. C'est une question rhétorique : elle sous-entend « personne ne le pourrait », renforcée par le conditionnel.",
                "Interprétation : les trois premières questions sont délibératives, le personnage s'interroge lui-même sur son avenir, sur le choix à faire et sur la réaction de son père. La dernière, rhétorique, conclut sur une réponse désespérée. La succession des questions et le registre soutenu de l'inversion traduisent un débat intérieur et un désarroi croissant.",
                "Réponse : quatre interrogations directes, deux partielles et deux totales, construites par inversion (simple ou complexe) ou avec un pronom interrogatif sujet ; délibératives puis rhétorique, elles montrent un menteur pris au piège de ses mensonges.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : maîtrisez-vous l'interrogation ?",
            statements: [
              { text: "« Viendrez-vous demain ? » est une interrogation totale.", true: true, why: "On peut y répondre par oui ou par non : la question porte sur toute la phrase." },
              { text: "Une subordonnée interrogative indirecte se termine par un point d'interrogation.", true: false, why: "La phrase qui la contient est déclarative : elle se termine par un point simple." },
              { text: "Dans « Votre sœur viendra-t-elle ? », l'inversion est complexe.", true: true, why: "Le sujet nominal « votre sœur » reste devant le verbe et il est repris par le pronom « elle »." },
              { text: "À l'indirect, « Que dites-vous ? » devient « Je demande que vous dites ».", true: false, why: "Le pronom interrogatif « que » devient « ce que » : « Je demande ce que vous dites »." },
              { text: "Une question rhétorique attend une réponse de l'interlocuteur.", true: false, why: "Elle contient déjà sa réponse : c'est une affirmation déguisée en question." },
              { text: "Dans « J'ignore s'il viendra », « si » introduit une interrogation indirecte totale.", true: true, why: "Après un verbe d'ignorance, « si » n'exprime pas la condition : on retrouve la question « Viendra-t-il ? »." },
              { text: "La locution « est-ce que » appartient au registre soutenu.", true: false, why: "Elle relève du registre courant ; c'est l'inversion du sujet qui est soutenue." },
            ],
          },
          quiz: [
            { q: "Quelle phrase contient une interrogation partielle ?", options: ["Est-ce que Camille retournera au couvent ?", "Pourquoi Camille refuse-t-elle d'épouser Perdican ?", "Perdican est-il sincère avec Rosette ?", "Rosette a-t-elle compris le jeu des cousins ?"], answer: 1, why: "La question porte sur la cause et commence par l'adverbe interrogatif « pourquoi » : on ne peut pas y répondre par oui ou par non." },
            { q: "Dans « Le Baron demande si le dîner est prêt », la subordonnée est :", options: ["une subordonnée interrogative indirecte totale", "une subordonnée circonstancielle de condition", "une subordonnée complétive introduite par « que »"], answer: 0, why: "Après le verbe « demander », « si » introduit une question indirecte (« Le dîner est-il prêt ? ») ; la subordonnée est COD." },
            { q: "Quelle formulation appartient au registre soutenu ?", options: ["Vous en pensez quoi ?", "Qu'est-ce que vous en pensez ?", "Qu'en pensez-vous ?"], answer: 2, why: "L'inversion du pronom sujet caractérise le registre soutenu ; « est-ce que » est courant, l'intonation seule familière." },
            { q: "« Que voulez-vous ? » rapporté après « Il me demanda » donne :", options: ["Il me demanda que je voulais.", "Il me demanda qu'est-ce que je voulais.", "Il me demanda ce que voulez-vous.", "Il me demanda ce que je voulais."], answer: 3, why: "« Que » devient « ce que », l'inversion disparaît, « vous » devient « je » et le présent passe à l'imparfait." },
            { q: "« Peut-on pardonner à un menteur ? » s'écrie un personnage qui refuse de pardonner. C'est une question :", options: ["délibérative", "rhétorique", "indirecte", "totale à valeur de requête polie"], answer: 1, why: "Le personnage n'attend pas de réponse : il affirme, sous forme de question, qu'on ne le peut pas." },
          ],
          trap: "Prendre « si » pour une conjonction de condition dans « Je me demande s'il viendra » : après un verbe de questionnement, « si » introduit une subordonnée interrogative indirecte totale, COD du verbe, que l'on peut retransformer en question directe.",
          method: "Pour identifier une interrogation indirecte, essayez de la retransformer en question directe (« Je me demande où il va » donne « Où va-t-il ? ») : si la transformation fonctionne et qu'il n'y a pas d'antécédent, vous tenez une interrogative indirecte, et non une relative ou une circonstancielle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expression-negation',
          title: 'L’expression de la négation : totale, partielle, exceptive',
          minutes: 30,
          objectives: [
            "Identifier la négation totale, la négation partielle et la négation restrictive (ou exceptive), et nommer leurs éléments.",
            "Distinguer la négation grammaticale, la négation lexicale et le « ne » explétif, qui n'a pas de valeur négative.",
            "Analyser la place et la forme de la négation selon la construction et le niveau de langue.",
            "Interpréter les effets de la négation dans un texte : négation polémique, litote, restriction, insistance.",
          ],
          course: [
            {
              heading: "La négation grammaticale : deux éléments",
              paragraphs: [
                "En français, la négation grammaticale se construit le plus souvent avec deux éléments : l'adverbe « ne », placé devant le verbe conjugué, et un second élément placé après lui (pas, point, jamais, plus, rien, personne...). On parle de négation à deux termes, ou discontinue. Aux temps composés, le second élément se place en général entre l'auxiliaire et le participe : « Il n'a pas menti », « Il n'a rien dit ». Mais « personne », « aucun » et « nulle part » se placent après le participe : « Je n'ai vu personne ».",
                "Devant un infinitif, les deux éléments se placent ensemble, avant le verbe : « Il préfère ne pas répondre », « Elle promet de ne jamais mentir ». À l'oral familier, le « ne » disparaît souvent (« Je sais pas »), ce qui montre que c'est le second élément qui porte aujourd'hui l'essentiel du sens négatif. À l'inverse, la langue soutenue ou classique peut employer « ne » seul avec quelques verbes, notamment pouvoir, savoir, oser et cesser : « Je ne saurais vous répondre », « Il ne cesse de mentir ».",
              ],
              box: { label: "Définition", text: "La négation grammaticale associe le plus souvent « ne », devant le verbe, à un second élément : pas, point, plus, jamais, rien, personne, aucun, nul, guère, nulle part. Elle peut aussi passer par « ni... ni », « sans » ou « non »." },
            },
            {
              heading: "Négation totale, partielle, restrictive",
              paragraphs: [
                "La négation totale porte sur l'ensemble de la proposition : elle nie le lien entre le sujet et ce qui est dit de lui. Elle s'exprime par « ne... pas » ou, dans une langue soutenue ou archaïsante, par « ne... point » : « Camille n'aime pas Perdican » nie le fait tout entier. Au XVIIe siècle, « point » est très fréquent au théâtre ; les grammairiens de l'époque le jugeaient plus fort que « pas ».",
                "La négation partielle ne nie qu'un aspect de la proposition : le temps (ne... jamais, ne... plus), la personne (ne... personne, personne ne...), la chose (ne... rien, rien ne...), la quantité ou la détermination (ne... aucun, ne... nul, ne... guère), le lieu (ne... nulle part). « Il ne ment plus » nie la continuation dans le temps ; « Personne ne le croit » nie l'existence d'une personne qui le croie. Les pronoms « personne », « rien », « aucun » et « nul » peuvent être sujets : ils se placent alors devant « ne ».",
                "La négation restrictive, dite aussi exceptive, s'exprime par « ne... que ». Ce n'est pas une véritable négation : elle équivaut à « seulement ». « Dorante ne dit que des mensonges » signifie qu'il dit seulement des mensonges : la phrase exclut tout, sauf un élément. « Que » se place juste devant l'élément sur lequel porte la restriction : « Il n'a parlé qu'à sa sœur ». Les négations peuvent se combiner : « Il ne dit plus que des mensonges », « Je n'ai jamais rien promis ».",
              ],
              box: { label: "Repère", text: "Totale : ne... pas, ne... point. Partielle : ne... jamais, plus, rien, personne, aucun, nul, guère, nulle part. Restrictive ou exceptive : ne... que, qui équivaut à « seulement » et n'est pas une vraie négation." },
            },
            {
              heading: "Les autres moyens de nier, et un faux négatif",
              paragraphs: [
                "La négation peut porter sur des éléments coordonnés : « ni... ni », avec « ne » devant le verbe, nie plusieurs éléments à la fois (« Il n'aime ni le mensonge ni la flatterie »). La préposition « sans » exprime la négation devant un nom ou un infinitif (« Il partit sans un mot », « sans rien dire »). L'adverbe « non » s'emploie seul comme mot-phrase, en réponse, ou pour nier un élément (« Pierre viendra, Paul non » ; « une réponse non conforme »).",
                "La négation lexicale ne passe pas par la syntaxe mais par le vocabulaire. Elle utilise des préfixes privatifs ou contraires : in- (et ses variantes im-, il-, ir-), dé- ou dés-, mal-, a-, non- (« inconstant », « impossible », « illégal », « irréel », « déloyal », « malhonnête », « amoral », « non-dit »). Elle utilise aussi des mots dont le sens est négatif : refuser, interdire, ignorer, manquer, l'absence, le refus.",
                "Attention au « ne » explétif, qui n'a aucune valeur négative. Il apparaît, de façon facultative et dans une langue soignée, après les verbes de crainte (« Je crains qu'il ne mente »), après « avant que » et « à moins que » (« avant qu'il ne parte »), et dans les comparaisons d'inégalité (« Il est plus habile que je ne le pensais »). Pour le reconnaître, supprimez-le : le sens ne change pas. Pour nier vraiment, il faut les deux éléments : « Je crains qu'il ne vienne pas ».",
              ],
              box: { label: "Règle", text: "Test du « ne » explétif : supprimez-le. Si le sens reste le même (« Je crains qu'il ne mente » équivaut à « Je crains qu'il mente »), il est explétif et n'exprime aucune négation." },
            },
            {
              heading: "Les effets de la négation dans un texte",
              paragraphs: [
                "La négation n'est pas seulement un outil grammatical, c'est un geste de discours. La négation polémique rejette une affirmation prêtée à quelqu'un d'autre : dire « Je ne suis pas un menteur », c'est répondre à une accusation, réelle ou supposée. Elle fait entendre deux voix, celle qui affirme et celle qui nie. Dans un dialogue de théâtre, elle signale souvent le conflit.",
                "La litote dit moins pour faire entendre plus, souvent en niant le contraire de ce que l'on pense. L'exemple le plus célèbre se trouve dans Le Cid de Corneille (1637) : Chimène dit à Rodrigue « Va, je ne te hais point », ce qui, de la part d'une jeune fille dont il a tué le père, signifie qu'elle l'aime toujours. Accumulées, les négations (« jamais », « rien », « personne », « plus ») peuvent aussi traduire le désespoir, la solitude ou un refus absolu.",
                "À l'oral du bac, analyser une négation, c'est : délimiter la proposition niée ; nommer ses éléments (l'adverbe « ne » et le second élément, adverbe, pronom ou déterminant) ; dire s'il s'agit d'une négation totale, partielle ou restrictive ; signaler un éventuel « ne » explétif ou une négation lexicale ; enfin interpréter l'effet produit (polémique, litote, insistance, restriction).",
              ],
              box: { label: "À retenir", text: "Négation polémique : elle réfute un discours adverse. Litote : nier le contraire pour suggérer davantage (« je ne te hais point »). Accumulation de négations : solitude, désespoir, refus absolu." },
            },
          ],
          keyPoints: [
            "Négation grammaticale : « ne » devant le verbe et un second élément ; devant l'infinitif, les deux se placent avant : « ne pas mentir ».",
            "Totale : ne... pas, ne... point (soutenu). Elle nie toute la proposition.",
            "Partielle : ne... jamais, plus, rien, personne, aucun, nul, guère, nulle part. Elle nie le temps, la personne, la chose, la quantité ou le lieu.",
            "Restrictive ou exceptive : ne... que équivaut à « seulement » ; ce n'est pas une vraie négation.",
            "Autres moyens : ni... ni, sans, non, et la négation lexicale (préfixes in-, dé-, mal-, a-).",
            "Le « ne » explétif (après craindre que, avant que, à moins que, plus... que) n'a pas de valeur négative : on peut le supprimer.",
            "Effets : négation polémique, litote, insistance, solitude ou refus absolu.",
          ],
          example: {
            statement: "Analysez les négations de cette réplique d'entraînement : « Je ne vous ai jamais menti : je n'ai fait que taire ce que je craignais que vous ne découvriez. Personne ne peut m'en blâmer. »",
            solution: [
              "« Je ne vous ai jamais menti » : négation partielle portant sur le temps, formée de l'adverbe « ne » et de l'adverbe « jamais », placé entre l'auxiliaire « ai » et le participe « menti ».",
              "« je n'ai fait que taire » : négation restrictive (exceptive) « ne... que ». Elle équivaut à « j'ai seulement tu » et ne nie rien : elle limite l'action du locuteur au silence.",
              "« que vous ne découvriez » : « ne » explétif, après le verbe de crainte « craignais ». Il n'a pas de valeur négative : on peut le supprimer sans changer le sens (« que vous découvriez »).",
              "« Personne ne peut m'en blâmer » : négation partielle portant sur la personne ; le pronom indéfini « personne » est sujet du verbe « peut » et se place devant « ne ».",
              "Interprétation : la réplique est une défense. « Je ne vous ai jamais menti » est une négation polémique qui répond à une accusation ; la restriction minimise la faute ; la négation finale écarte toute condamnation.",
              "Réponse : une négation partielle temporelle, une négation restrictive, un « ne » explétif sans valeur négative et une négation partielle de personne, qui servent ensemble la justification du locuteur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque négation : totale, partielle (précisez sur quoi elle porte), restrictive, ou « ne » explétif. a) Il ne pleut plus. b) Elle ne lit que des pièces de théâtre. c) Nous ne partirons point. d) Je crains qu'il ne soit trop tard. e) Rien ne l'arrête. f) Il n'a vu personne. g) Elle sortit avant qu'il ne revienne.",
              hint: "Remplacez « ne... que » par « seulement », puis supprimez chaque « ne » isolé : si le sens ne change pas, ce n'est pas une vraie négation.",
              solution: [
                "a) Négation partielle, portant sur le temps (ne... plus).",
                "b) Négation restrictive (ne... que) : elle lit seulement des pièces de théâtre.",
                "c) Négation totale (ne... point), de registre soutenu.",
                "d) « Ne » explétif après le verbe de crainte « craindre » : sans valeur négative.",
                "e) Négation partielle, portant sur la chose ; le pronom « rien » est sujet et précède « ne ».",
                "f) Négation partielle, portant sur la personne ; « personne » se place après le participe.",
                "g) « Ne » explétif après « avant que » : sans valeur négative.",
                "Réponse : totale, c ; partielles, a, e, f ; restrictive, b ; explétifs, d et g.",
              ],
            },
            {
              level: 2,
              statement: "a) Comparez « Il ne veut pas répondre » et « Il veut ne pas répondre » : sur quoi porte la négation dans chaque phrase ? b) Reformulez avec une négation restrictive : « Il dit la vérité seulement à sa mère. » c) Remplacez la négation grammaticale par une négation lexicale : « Ce projet n'est pas réalisable », « Cet homme n'est pas honnête », « Ce récit n'est pas vraisemblable ». d) Réécrivez en langue soutenue : « J'ai jamais rien compris à ses mensonges. »",
              hint: "Pour a), demandez-vous ce que le personnage veut dans chaque cas. Pour b), placez « que » juste devant l'élément sur lequel porte la restriction.",
              solution: [
                "a) Dans « Il ne veut pas répondre », la négation porte sur le verbe « vouloir » : il n'a pas la volonté de répondre. Dans « Il veut ne pas répondre », elle porte sur l'infinitif « répondre » : il a la volonté positive de se taire. Le second est un choix délibéré de silence.",
                "b) « Il ne dit la vérité qu'à sa mère. » « Que » précède le complément « à sa mère », sur lequel porte la restriction.",
                "c) « Ce projet est irréalisable », « Cet homme est malhonnête », « Ce récit est invraisemblable » : les préfixes ir-, mal- et in- expriment le contraire.",
                "d) « Je n'ai jamais rien compris à ses mensonges. » On rétablit « ne », élidé devant la voyelle ; « jamais » et « rien » se combinent, tous deux entre l'auxiliaire et le participe.",
                "Réponse : a) la négation porte sur « vouloir » puis sur « répondre » ; b) ne... qu'à sa mère ; c) irréalisable, malhonnête, invraisemblable ; d) Je n'ai jamais rien compris.",
              ],
            },
            {
              level: 3,
              statement: "Question de grammaire (type oral du bac). Réplique d'entraînement, prononcée par une jeune femme à l'homme qui l'a trompée : « Non, monsieur, je ne vous en veux point. Je ne vous reproche rien ; je ne demande plus qu'une chose : que vous partiez sans jamais revenir. Ni vos excuses ni vos serments ne me toucheront. » Relevez et analysez les négations, puis montrez ce que leur accumulation révèle de la situation.",
              hint: "Repérez d'abord tous les mots négatifs (il y en a sept), puis classez-les ; n'oubliez pas la négation sans « ne » et celle qui n'est qu'une restriction.",
              solution: [
                "« Non » : adverbe de négation employé seul, comme mot-phrase ; il rejette ce que l'interlocuteur vient de dire (valeur polémique).",
                "« je ne vous en veux point » : négation totale « ne... point », de registre soutenu. Elle nie le ressentiment, alors que la suite de la réplique le dément : c'est une dénégation ironique.",
                "« Je ne vous reproche rien » : négation partielle portant sur la chose (ne... rien).",
                "« je ne demande plus qu'une chose » : combinaison d'une négation partielle temporelle (« plus ») et d'une négation restrictive (« que ») : désormais, seulement une chose.",
                "« sans jamais revenir » : la préposition « sans » et l'adverbe « jamais » nient l'infinitif, sans « ne » ; la négation porte sur tout l'avenir.",
                "« Ni vos excuses ni vos serments ne me toucheront » : négation coordonnée « ni... ni » portant sur les deux sujets, avec « ne » devant le verbe.",
                "Interprétation : l'accumulation ferme toutes les issues (le temps avec « plus » et « jamais », les objets avec « rien », les recours avec « ni... ni ») ; la seule chose demandée est le départ. Le contraste entre « je ne vous en veux point » et cette exigence trahit une colère maîtrisée : la rupture est définitive.",
                "Réponse : un mot-phrase négatif, une négation totale, deux négations partielles, une restriction, une négation par « sans » et une négation coordonnée, qui construisent ensemble une rupture sans appel.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à l'exemple qui l'illustre.",
            pairs: [
              { left: "Négation totale", right: "« Elle ne viendra pas. »" },
              { left: "Négation partielle", right: "« Personne ne l'a cru. »" },
              { left: "Négation restrictive", right: "« Il ne boit que de l'eau. »" },
              { left: "« Ne » explétif", right: "« Je crains qu'il ne pleuve. »" },
              { left: "Négation lexicale", right: "« Ce départ est irréversible. »" },
              { left: "Litote", right: "« Il n'est pas sot. »" },
            ],
          },
          quiz: [
            { q: "Dans « Il ne mange que du pain », la négation est :", options: ["totale", "partielle, portant sur la quantité", "restrictive (exceptive)"], answer: 2, why: "« Ne... que » équivaut à « seulement » : il mange seulement du pain. Ce n'est pas une vraie négation." },
            { q: "Dans quelle phrase « ne » est-il explétif ?", options: ["Il ne cesse de parler.", "Je crains qu'il ne se trompe.", "Il n'ose répondre.", "Elle ne sort jamais."], answer: 1, why: "Après un verbe de crainte, « ne » peut être supprimé sans changer le sens ; dans les autres phrases, il nie réellement." },
            { q: "En français moderne, où se placent les deux éléments de la négation devant un infinitif ?", options: ["« ne » avant, « pas » après l'infinitif", "tous deux après l'infinitif", "tous deux avant l'infinitif"], answer: 2, why: "On dit « ne pas mentir », « ne jamais répondre » : les deux éléments précèdent l'infinitif." },
            { q: "« Va, je ne te hais point » (Corneille, Le Cid) est un exemple célèbre de :", options: ["litote", "hyperbole", "négation restrictive", "« ne » explétif"], answer: 0, why: "Chimène nie la haine pour faire entendre l'amour : elle dit moins pour suggérer plus." },
            { q: "Dans « Je n'ai vu personne », sur quoi porte la négation ?", options: ["sur le temps", "sur le lieu", "sur toute la proposition", "sur la personne"], answer: 3, why: "C'est une négation partielle : elle nie l'existence d'une personne vue." },
          ],
          trap: "Prendre « ne... que » pour une vraie négation : « Il ne ment que par jeu » ne nie pas qu'il mente, il affirme qu'il ment seulement par jeu. De même, le « ne » explétif ne nie rien.",
          method: "Devant chaque « ne », faites deux tests : remplacez « ne... que » par « seulement », puis supprimez le « ne » isolé ; si la phrase garde son sens, ce n'est pas une négation. Nommez ensuite le second élément et ce qu'il nie : le temps, la personne, la chose ou le lieu.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'analyser-une-phrase',
          title: 'Analyser une phrase complexe pas à pas',
          minutes: 35,
          objectives: [
            "Délimiter les propositions d'une phrase complexe à partir de ses verbes conjugués.",
            "Identifier les relations entre propositions (juxtaposition, coordination, subordination) et la nature de chaque subordonnée.",
            "Déterminer la fonction de chaque subordonnée et intégrer à l'analyse l'interrogation et la négation.",
            "Présenter une analyse grammaticale structurée et la relier au sens du texte, comme à l'oral du bac.",
          ],
          course: [
            {
              heading: "Phrase simple, phrase complexe, proposition",
              paragraphs: [
                "Une phrase simple ne contient qu'un seul verbe conjugué, donc une seule proposition : « Perdican revient au château ». Une phrase complexe en contient plusieurs. Une proposition est un ensemble organisé autour d'un verbe conjugué (ou, plus rarement, d'un infinitif ou d'un participe qui a son propre sujet). La première étape de toute analyse consiste donc à repérer les verbes conjugués : il y a autant de propositions que de verbes conjugués, auxquelles s'ajoutent les éventuelles subordonnées infinitives et participiales.",
                "Attention aux pièges du repérage. Un temps composé (« a menti ») ou un verbe au passif (« est aimée ») ne forme qu'un seul verbe. Un infinitif complément (« il veut partir ») ou un participe employé comme adjectif (« une lettre écrite la veille ») n'ouvre pas de nouvelle proposition. Enfin, une proposition peut être coupée par une autre (« La pièce que j'ai vue hier m'a plu ») : il faut alors la reconstituer (« La pièce m'a plu »).",
              ],
              box: { label: "Définition", text: "Proposition : groupe de mots organisé autour d'un verbe conjugué. Phrase simple : une seule proposition. Phrase complexe : plusieurs propositions, reliées par juxtaposition, coordination ou subordination." },
            },
            {
              heading: "Les trois relations entre propositions",
              paragraphs: [
                "Deux propositions juxtaposées sont simplement séparées par un signe de ponctuation (virgule, point-virgule, deux-points) : « Il ment, elle le sait ». Deux propositions coordonnées sont reliées par une conjonction de coordination (mais, ou, et, or, ni, car ; « donc » est traditionnellement rangé avec elles, bien qu'il se comporte comme un adverbe) ou par un adverbe de liaison (puis, pourtant, en effet) : « Il ment, mais elle le sait ». Dans ces deux cas, les propositions sont indépendantes : aucune n'occupe une fonction dans l'autre.",
                "Dans la subordination, une proposition subordonnée dépend d'une autre proposition, dite principale, dans laquelle elle occupe une fonction (COD, sujet, complément circonstanciel, complément de l'antécédent...). Elle est introduite par un mot subordonnant : pronom relatif, conjonction de subordination (que, si, quand, comme, parce que, bien que...), mot interrogatif. Une subordonnée peut elle-même en régir une autre : on parle de subordination en cascade, ou de subordonnée de deuxième degré.",
              ],
              box: { label: "Repère", text: "Juxtaposition : un signe de ponctuation. Coordination : mais, ou, et, or, ni, car (et traditionnellement donc). Subordination : une proposition dépend d'une autre et y occupe une fonction." },
            },
            {
              heading: "Reconnaître la nature des subordonnées",
              paragraphs: [
                "La subordonnée relative est introduite par un pronom relatif (qui, que, quoi, dont, où, lequel et ses composés) qui reprend un nom, l'antécédent, et qui a une fonction dans la subordonnée : « Le valet qui accompagne Dorante s'appelle Cliton ». Elle est complément de l'antécédent. La relative sans antécédent (« Qui ment sera puni ») occupe une fonction de nom, ici sujet.",
                "La subordonnée complétive (ou conjonctive) est introduite par la conjonction « que », qui n'a aucune fonction dans la subordonnée : « Je sais que vous mentez ». Elle est le plus souvent COD, mais peut être sujet (« Qu'il mente me choque »), attribut, ou complément d'un nom ou d'un adjectif. La subordonnée interrogative indirecte, introduite par « si » ou par un mot interrogatif, dépend d'un verbe de questionnement ou de savoir : « Je me demande s'il ment ».",
                "La subordonnée circonstancielle, introduite par une conjonction ou une locution conjonctive (quand, lorsque, parce que, puisque, pour que, si bien que, bien que, si, comme...), exprime une circonstance : temps, cause, conséquence, but, opposition, concession, condition, comparaison. Elle est complément circonstanciel et souvent déplaçable. S'y ajoutent l'infinitive (« J'entends les acteurs répéter ») et la participiale (« Le rideau tombé, le public applaudit »), qui ont un sujet propre mais pas de mot subordonnant.",
              ],
              box: { label: "À retenir", text: "« Que » est pronom relatif s'il reprend un antécédent et a une fonction dans la subordonnée (« la pièce que je lis ») ; il est conjonction s'il n'a ni antécédent ni fonction (« je dis que je lis »). « Si » est interrogatif après un verbe de questionnement, conditionnel ailleurs." },
            },
            {
              heading: "La méthode en six étapes et la réponse orale",
              paragraphs: [
                "Pour analyser une phrase complexe, suivez toujours le même ordre. Un : soulignez les verbes conjugués. Deux : délimitez les propositions par des crochets. Trois : repérez les mots de liaison (ponctuation, coordonnants, subordonnants) et nommez la relation. Quatre : donnez la nature de chaque subordonnée. Cinq : donnez sa fonction en la rattachant à un mot précis de la proposition dont elle dépend. Six : interprétez, c'est-à-dire dites ce que cette construction apporte au sens du texte.",
                "À l'oral, la réponse attendue est brève, une à deux minutes, mais précise. Annoncez la nature de la phrase (« C'est une phrase complexe qui compte trois propositions »), puis présentez chaque proposition avec son mot introducteur, sa nature et sa fonction, en citant exactement le texte. Si la question porte sur l'interrogation ou la négation, intégrez leur analyse dans ce cadre. Concluez par une phrase d'interprétation : une subordination en cascade peut traduire une pensée qui s'emballe, une juxtaposition une accumulation, une concessive un débat intérieur.",
              ],
              box: { label: "Méthode", text: "Verbes conjugués, propositions, liens, nature, fonction, interprétation : six étapes, toujours dans cet ordre, avec une citation exacte pour chaque proposition." },
            },
          ],
          keyPoints: [
            "Autant de propositions que de verbes conjugués, en ajoutant les éventuelles infinitives et participiales.",
            "Juxtaposition (ponctuation), coordination (mais, ou, et, or, ni, car), subordination (une proposition dépend d'une autre).",
            "Natures des subordonnées : relative, complétive, interrogative indirecte, circonstancielle, infinitive, participiale.",
            "« Que » relatif reprend un antécédent et a une fonction ; « que » conjonction n'a ni l'un ni l'autre.",
            "Toujours rattacher la fonction à un mot précis : « COD du verbe sait », « complément de l'antécédent pièce ».",
            "Terminer par l'interprétation : ce que la construction apporte au sens du texte.",
          ],
          example: {
            statement: "Analysez la phrase suivante (texte d'entraînement) : « Quand Géronte apprend que son fils l'a trompé, il ne sait plus s'il doit le punir, car il l'aime encore. »",
            solution: [
              "Verbes conjugués : « apprend », « a trompé », « sait », « doit », « aime ». La phrase est complexe et compte cinq propositions.",
              "Délimitation : [Quand Géronte apprend] [que son fils l'a trompé], [il ne sait plus] [s'il doit le punir], [car il l'aime encore].",
              "Principale : « il ne sait plus ». Elle contient une négation partielle portant sur le temps (ne... plus) : Géronte a perdu une certitude qu'il avait.",
              "« Quand Géronte apprend » : subordonnée circonstancielle de temps, introduite par la conjonction « quand » ; complément circonstanciel de temps du verbe « sait ».",
              "« que son fils l'a trompé » : subordonnée complétive, introduite par la conjonction « que » ; COD du verbe « apprend ». C'est une subordonnée de deuxième degré, puisqu'elle dépend de la circonstancielle.",
              "« s'il doit le punir » : subordonnée interrogative indirecte totale, introduite par « si » ; COD du verbe « sait ». La question directe serait : « Dois-je le punir ? »",
              "« car il l'aime encore » : proposition coordonnée à la principale par la conjonction « car », qui introduit une explication.",
              "Réponse : la phrase passe de la découverte (subordonnée de temps et complétive) à l'hésitation (négation et interrogation indirecte), puis à l'explication (coordination par « car ») : sa construction épouse le dilemme du père.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Délimitez les propositions et indiquez la relation qui les unit (juxtaposition, coordination ou subordination). a) Le rideau se lève, les comédiens entrent. b) Camille refuse, car elle a peur d'aimer. c) Le valet qui accompagne Dorante l'avertit souvent. d) Cliton comprend que son maître ment.",
              hint: "Commencez par compter les verbes conjugués (un infinitif complément ne compte pas), puis cherchez le signe ou le mot qui relie les propositions.",
              solution: [
                "a) Deux propositions, [Le rideau se lève] et [les comédiens entrent], juxtaposées par une virgule.",
                "b) Deux propositions, [Camille refuse] et [car elle a peur d'aimer], coordonnées par « car ». « Aimer » est un infinitif complément de « peur » : il n'ouvre pas de proposition.",
                "c) Deux propositions : la principale [Le valet l'avertit souvent], coupée par la subordonnée relative [qui accompagne Dorante]. Relation : subordination.",
                "d) Deux propositions : la principale [Cliton comprend] et la subordonnée complétive [que son maître ment]. Relation : subordination.",
                "Réponse : a) juxtaposition ; b) coordination ; c) et d) subordination.",
              ],
            },
            {
              level: 2,
              statement: "Donnez la nature et la fonction de chaque subordonnée. a) Je me demande pourquoi il a menti. b) La comédie que nous étudions a été écrite par Corneille. c) Si vous mentez encore, je partirai. d) Elle craint qu'il ne revienne. e) Il était si troublé qu'il ne répondit rien. f) Je ne sais si elle viendra.",
              hint: "Pour chaque subordonnée, cherchez d'abord le mot qui l'introduit, puis le mot dont elle dépend ; pour « que », vérifiez s'il reprend un antécédent.",
              solution: [
                "a) « pourquoi il a menti » : subordonnée interrogative indirecte partielle, introduite par l'adverbe interrogatif « pourquoi » ; COD de « demande ».",
                "b) « que nous étudions » : subordonnée relative, introduite par le pronom relatif « que », qui reprend l'antécédent « comédie » et est COD de « étudions » ; la subordonnée est complément de l'antécédent « comédie ».",
                "c) « Si vous mentez encore » : subordonnée circonstancielle de condition, introduite par « si » ; complément circonstanciel de condition de « partirai ».",
                "d) « qu'il ne revienne » : subordonnée complétive, introduite par la conjonction « que » ; COD de « craint ». Le « ne » est explétif : la phrase ne nie rien.",
                "e) « qu'il ne répondit rien » : subordonnée circonstancielle de conséquence, introduite par le système corrélatif « si... que » ; complément circonstanciel de conséquence (certaines grammaires la rattachent à l'adverbe d'intensité « si »). Elle contient une négation partielle (ne... rien).",
                "f) « si elle viendra » : subordonnée interrogative indirecte totale, introduite par « si » ; COD de « sais ». La principale emploie « ne » seul avec « savoir », tour soutenu qui a ici une vraie valeur négative.",
                "Réponse : interrogative indirecte, relative, circonstancielle de condition, complétive, circonstancielle de conséquence, interrogative indirecte.",
              ],
            },
            {
              level: 3,
              statement: "Question de grammaire (type oral du bac). Passage d'entraînement : « Je ne sais pourquoi je vous ai menti, ni si vous me pardonnerez jamais ; mais je sais que, lorsque vous m'avez regardé, je n'ai plus rien trouvé à dire. » Analysez la construction de cette phrase, puis relevez et analysez ses négations.",
              hint: "Il y a six verbes conjugués. Attention : le mot « jamais » n'a pas toujours un sens négatif, en particulier lorsqu'il n'est pas accompagné de « ne ».",
              solution: [
                "Verbes conjugués : « sais », « ai menti », « pardonnerez », « sais », « avez regardé », « ai trouvé » : six propositions. Délimitation : [Je ne sais] [pourquoi je vous ai menti], ni [si vous me pardonnerez jamais] ; mais [je sais] [que, [lorsque vous m'avez regardé], je n'ai plus rien trouvé à dire].",
                "Première principale « Je ne sais » ; elle régit deux subordonnées interrogatives indirectes, toutes deux COD de « sais » et coordonnées par « ni » : « pourquoi je vous ai menti » (partielle, adverbe « pourquoi ») et « si vous me pardonnerez jamais » (totale, conjonction « si »).",
                "Seconde principale « je sais », coordonnée à la première par « mais », qui marque l'opposition. Elle régit la complétive « que... je n'ai plus rien trouvé à dire », COD de « sais ».",
                "Dans la complétive est enchâssée la circonstancielle de temps « lorsque vous m'avez regardé », complément circonstanciel de temps de « ai trouvé » : c'est une subordonnée de deuxième degré.",
                "Négations : « Je ne sais » emploie « ne » seul avec « savoir » (tour soutenu, valeur de négation totale) ; « ni » coordonne les deux interrogatives dans ce contexte négatif ; « je n'ai plus rien trouvé » combine une négation partielle de temps (« plus ») et de chose (« rien »). En revanche, « jamais », sans « ne » et dans une interrogative indirecte, signifie « un jour » : il n'est pas négatif.",
                "Interprétation : la phrase oppose l'ignorance (« Je ne sais », deux questions sans réponse) à une seule certitude (« mais je sais ») ; la négation finale montre un personnage réduit au silence par un regard. La syntaxe met en scène un aveu amoureux.",
                "Réponse : deux principales coordonnées par « mais », deux interrogatives indirectes coordonnées par « ni », une complétive et une circonstancielle de temps enchâssée ; trois vraies négations, et un « jamais » à valeur positive.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'une phrase complexe.",
            items: [
              "Repérer et souligner les verbes conjugués",
              "Délimiter les propositions entre crochets",
              "Repérer les mots de liaison et nommer les relations entre propositions",
              "Donner la nature de chaque subordonnée",
              "Donner la fonction de chaque subordonnée en la rattachant à un mot précis",
              "Interpréter l'effet de la construction dans le texte",
            ],
          },
          quiz: [
            { q: "Combien de propositions la phrase « Elle sait qu'il veut partir » contient-elle ?", options: ["trois", "une", "deux"], answer: 2, why: "Il y a deux verbes conjugués, « sait » et « veut » ; « partir » est un infinitif complément de « veut »." },
            { q: "Dans « La lettre que Camille écrit trahit son orgueil », « que » est :", options: ["une conjonction de subordination", "un pronom relatif", "un pronom interrogatif", "un adverbe exclamatif"], answer: 1, why: "Il reprend l'antécédent « lettre » et il est COD de « écrit » dans la subordonnée." },
            { q: "Dans « Le rideau baissé, les spectateurs sortent », « Le rideau baissé » est :", options: ["une subordonnée participiale", "une subordonnée relative sans antécédent", "une subordonnée infinitive", "une subordonnée complétive"], answer: 0, why: "Le participe « baissé » a son propre sujet, « le rideau », distinct de celui de la principale, sans mot subordonnant." },
            { q: "Deux propositions reliées par « car » sont :", options: ["juxtaposées", "coordonnées", "subordonnées", "enchâssées"], answer: 1, why: "« Car » est une conjonction de coordination : aucune des deux propositions n'est fonction de l'autre." },
            { q: "Quelle est la fonction de « Qu'il mente » dans « Qu'il mente ne m'étonne pas » ?", options: ["COD du verbe étonne", "complément circonstanciel de cause", "attribut du sujet", "sujet du verbe étonne"], answer: 3, why: "Cette complétive placée en tête de phrase est le sujet de « étonne » : on peut la remplacer par « cela »." },
          ],
          trap: "Compter un infinitif ou un participe comme un verbe conjugué, ou oublier une proposition enchâssée au milieu d'une autre : on se trompe alors sur le nombre de propositions, et toute l'analyse s'effondre.",
          method: "Recopiez la phrase au brouillon et mettez chaque proposition entre crochets, en entourant le mot introducteur et en traçant une flèche vers le mot dont elle dépend : ce schéma vous sert ensuite de plan pour votre réponse orale.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE THÉÂTRE DU XVIIe AU XXIe SIÈCLE                                     */
    /* ==================================================================== */
    {
      id: 'theatre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'texte-et-representation',
          title: 'Lire le théâtre : texte, représentation, mise en scène',
          minutes: 35,
          objectives: [
            "Identifier les spécificités du texte théâtral : répliques, didascalies, double énonciation.",
            "Utiliser le vocabulaire de l'analyse dramatique : exposition, nœud, dénouement, tirade, monologue, stichomythie, aparté, quiproquo.",
            "Situer les grandes esthétiques théâtrales du XVIIe au XXIe siècle : classicisme, drame romantique, théâtre de l'absurde, théâtre contemporain.",
            "Analyser les choix d'une mise en scène et leur effet sur l'interprétation d'un texte.",
          ],
          course: [
            {
              heading: "Un texte écrit pour être joué",
              paragraphs: [
                "Le texte de théâtre a une particularité : il est écrit pour être joué devant un public. Il se compose de deux sortes de textes. Les répliques, prononcées par les personnages, forment le dialogue. Les didascalies, souvent en italique, sont les indications de l'auteur : liste des personnages, lieu, gestes, ton, entrées et sorties. Au XVIIe siècle, les didascalies sont rares, et beaucoup d'indications de jeu se lisent dans les répliques elles-mêmes : on parle de didascalies internes. Au XXe siècle, certains auteurs, comme Samuel Beckett, en écrivent au contraire de très précises.",
                "Le théâtre repose sur la double énonciation : quand un personnage parle à un autre personnage, l'auteur s'adresse en même temps au public. Le spectateur entend donc tout, et il en sait souvent plus que les personnages. C'est le ressort de l'ironie dramatique, du quiproquo (un personnage prend une personne ou une chose pour une autre) et de l'aparté (une réplique que le personnage dit pour lui-même, que le public entend mais que les autres personnages sont censés ne pas entendre).",
              ],
              box: { label: "Définition", text: "Double énonciation : toute parole de théâtre a deux destinataires, le personnage à qui elle s'adresse sur scène et le public dans la salle." },
            },
            {
              heading: "Le vocabulaire de l'analyse dramatique",
              paragraphs: [
                "Une pièce se découpe en actes (cinq dans la tragédie et la grande comédie classiques, trois dans beaucoup de pièces plus tardives) et en scènes, qui changent en principe à chaque entrée ou sortie d'un personnage. L'action suit trois temps. L'exposition, au début, présente les personnages, la situation et les enjeux. Le nœud rassemble les obstacles et les conflits. Le dénouement, à la fin, règle le sort des personnages : heureusement dans la comédie, tragiquement dans la tragédie.",
                "Les formes de la parole sont variées. La tirade est une longue réplique ininterrompue ; le monologue, une scène où un personnage seul parle, souvent pour délibérer ; la stichomythie, un échange rapide de répliques très courtes (souvent un vers chacune), qui traduit l'affrontement ; le récit rapporte un événement qui ne peut être montré sur scène, comme une bataille ou une mort. Le coup de théâtre est un événement inattendu qui renverse brusquement la situation.",
              ],
              box: { label: "Repère", text: "Structure : exposition, nœud, dénouement. Formes de la parole : tirade, monologue, stichomythie, aparté, récit. Ressorts : quiproquo, coup de théâtre, ironie dramatique." },
            },
            {
              heading: "Du XVIIe au XXIe siècle : les grandes esthétiques",
              paragraphs: [
                "Au XVIIe siècle, le théâtre classique obéit à des règles inspirées d'Aristote et précisées par les théoriciens : l'unité d'action (une intrigue principale), l'unité de temps (vingt-quatre heures au plus), l'unité de lieu, auxquelles s'ajoutent la vraisemblance et la bienséance (on ne montre ni la violence ni ce qui choque). Boileau résume ces principes dans L'Art poétique (1674). Corneille et Racine illustrent la tragédie ; Molière fait de la comédie un genre majeur, qui fait rire des vices pour les corriger.",
                "Au XVIIIe siècle, Marivaux explore les détours du langage amoureux et Beaumarchais met en scène un valet frondeur dans Le Mariage de Figaro (1784). Au XIXe siècle, le drame romantique rejette les règles : Victor Hugo, dans la préface de Cromwell (1827), réclame le mélange du sublime et du grotesque, et la première d'Hernani, en 1830, déclenche une bataille célèbre entre classiques et romantiques. Musset, lui, écrit des pièces destinées d'abord à la lecture.",
                "Au XXe siècle, le théâtre de l'absurde (Ionesco, La Cantatrice chauve, 1950 ; Beckett, En attendant Godot, 1953) montre des personnages qui parlent sans communiquer, dans un monde privé de sens. Le théâtre contemporain explore la parole elle-même, ses failles et ses violences : Nathalie Sarraute fait d'une intonation l'objet d'une pièce entière. Les auteurs d'aujourd'hui mêlent volontiers dialogue, récit et adresse directe au public.",
              ],
            },
            {
              heading: "La représentation : la mise en scène",
              paragraphs: [
                "Le texte n'est qu'une partie du théâtre : la représentation lui donne corps. Le metteur en scène fait des choix de lecture et les traduit en choix scéniques : le décor et l'organisation de l'espace (la scénographie), les costumes, les lumières, le son, le jeu des acteurs (voix, gestes, déplacements, silences). Son rôle s'affirme à la fin du XIXe siècle, notamment avec André Antoine, qui fonde le Théâtre-Libre en 1887 et y recherche un jeu naturel et des décors réalistes.",
                "Une même pièce peut donc donner lieu à des représentations très différentes. Une mise en scène peut rester fidèle au contexte d'origine (costumes d'époque) ou transposer l'action dans un autre temps ; elle peut souligner le comique ou la cruauté d'une comédie. Pour analyser une mise en scène, décrivez précisément ce qui est vu et entendu, puis interprétez : quel sens ce choix donne-t-il au texte, quelle émotion produit-il chez le spectateur ? Comparer deux mises en scène d'une même scène, à partir de captations ou de photographies, est un excellent exercice.",
              ],
              box: { label: "À retenir", text: "Lire le théâtre, c'est imaginer la représentation : se demander qui parle à qui, où se trouvent les personnages, comment la réplique pourrait être dite, et ce que le spectateur sait que les personnages ignorent." },
            },
          ],
          keyPoints: [
            "Texte théâtral : répliques et didascalies ; il est écrit pour la représentation.",
            "Double énonciation : chaque réplique s'adresse à un personnage et, en même temps, au public.",
            "Structure : actes et scènes ; exposition, nœud, dénouement.",
            "Formes de la parole : tirade, monologue, stichomythie, aparté, récit ; ressorts : quiproquo, coup de théâtre, ironie dramatique.",
            "Repères : règles classiques (XVIIe), drame romantique (Hernani, 1830), théâtre de l'absurde (années 1950), théâtre de la parole (Sarraute).",
            "Mise en scène : espace, costumes, lumières, son, jeu des acteurs ; décrire d'abord, interpréter ensuite.",
          ],
          example: {
            statement: "Voici une courte scène d'entraînement. LISE, déguisée en servante, à part : Il ne me reconnaît pas ! (Haut.) Monsieur cherche quelqu'un ? VALÈRE : Je cherche Lise, la fille du notaire. LISE : Lise ? Je la connais un peu... Que lui voulez-vous ? Identifiez les éléments propres au texte de théâtre et expliquez l'effet de la double énonciation.",
            solution: [
              "Repérer les didascalies : « déguisée en servante » indique le costume, « à part » et « Haut » indiquent à qui s'adresse la parole et comment la dire.",
              "Identifier l'aparté : « Il ne me reconnaît pas ! » est dit par Lise pour elle-même ; le public l'entend, Valère est censé ne pas l'entendre.",
              "Identifier le quiproquo : Valère prend Lise pour une servante ; il ne sait pas à qui il parle.",
              "Expliquer la double énonciation : le spectateur sait ce que Valère ignore. La réplique « Je la connais un peu » a donc deux sens : pour Valère, une simple information ; pour le public, un mot d'esprit, puisque Lise parle d'elle-même. C'est l'ironie dramatique.",
              "Réponse : didascalies, aparté et quiproquo créent une complicité entre Lise et le public, qui attend avec amusement le moment où Valère découvrira la vérité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque définition au terme qui convient. a) Longue réplique ininterrompue. b) Échange rapide de répliques très brèves. c) Parole d'un personnage que les autres personnages ne sont pas censés entendre. d) Début de la pièce, qui présente la situation. e) Erreur sur l'identité d'une personne ou sur le sens d'un mot. f) Indication scénique écrite par l'auteur. Termes : aparté, didascalie, exposition, quiproquo, stichomythie, tirade.",
              hint: "Pensez à la longueur de la parole pour a et b, à son destinataire pour c, à sa place dans la pièce pour d.",
              solution: [
                "a) Tirade.",
                "b) Stichomythie.",
                "c) Aparté.",
                "d) Exposition.",
                "e) Quiproquo.",
                "f) Didascalie.",
                "Réponse : a tirade, b stichomythie, c aparté, d exposition, e quiproquo, f didascalie.",
              ],
            },
            {
              level: 2,
              statement: "Voici une réplique d'entraînement, sans aucune didascalie : « Quoi ? vous pleurez, Madame ? et vous tremblez encore ? Asseyez-vous, je vous en prie, et laissez-moi fermer cette fenêtre : le soir tombe. » a) Relevez les didascalies internes et dites ce qu'elles indiquent. b) Proposez deux choix de mise en scène précis pour ce moment et justifiez-les.",
              hint: "Cherchez dans la réplique tout ce qui renseigne sur l'attitude de la dame, sur les gestes à faire, sur le lieu et sur le moment.",
              solution: [
                "a) « vous pleurez » et « vous tremblez » indiquent l'état de la dame (larmes, tremblement) ; « Asseyez-vous » indique qu'elle est debout et un mouvement à faire ; « fermer cette fenêtre » situe une fenêtre dans le décor et annonce un geste ; « le soir tombe » indique le moment, donc la lumière.",
                "b) Premier choix possible : une lumière qui baisse progressivement, de plus en plus froide, pour traduire le soir et la tristesse de la scène.",
                "Second choix possible : la dame refuse de s'asseoir et reste debout près de la fenêtre, obligeant son interlocuteur à s'approcher ; ce refus crée une tension et laisse entendre que sa détresse a pour cause celui qui lui parle.",
                "Réponse : le texte contient ses propres indications de jeu ; le metteur en scène les traduit en lumière, en espace et en gestes, et peut en orienter le sens.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac, objet d'étude le théâtre) : « Le théâtre est-il fait pour être lu ou pour être vu ? » Formulez une problématique et proposez un plan détaillé en trois parties, avec des exemples précis.",
              hint: "Partez de ce qui, dans le texte, appelle la scène (didascalies, double énonciation), puis pensez aux auteurs qui ont écrit pour la lecture ou pour la radio.",
              solution: [
                "Analyse du sujet : « lu » renvoie au texte, « vu » à la représentation ; l'alternative invite à se demander si l'une des deux expériences est incomplète sans l'autre.",
                "Problématique : le texte théâtral se suffit-il à lui-même, ou n'atteint-il sa plénitude que dans la représentation ?",
                "I. Le théâtre est d'abord fait pour être vu : il est écrit pour des acteurs et un public (double énonciation, didascalies) ; Molière, comédien et chef de troupe, écrit pour la scène, et le comique de gestes ou les quiproquos prennent vie sur le plateau.",
                "II. Mais il peut être lu : après l'échec de La Nuit vénitienne en 1830, Musset écrit pour un « spectacle dans un fauteuil » ; On ne badine pas avec l'amour, publié en 1834, n'est créé qu'en 1861. La lecture permet aussi de goûter la langue, comme les alexandrins de Corneille, et Sarraute conçoit d'abord ses pièces pour la radio, c'est-à-dire pour l'écoute.",
                "III. Lecture et représentation se complètent : le lecteur imagine une mise en scène, le metteur en scène est d'abord un lecteur, et chaque nouvelle mise en scène révèle un sens nouveau du texte.",
                "Conclusion : le théâtre est un texte en attente de scène ; lu, il appelle la représentation, vu, il renvoie au texte qui la fonde.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme du théâtre à sa définition.",
            pairs: [
              { left: "Didascalie", right: "Indication scénique écrite par l'auteur" },
              { left: "Aparté", right: "Réplique entendue du public mais pas des autres personnages" },
              { left: "Stichomythie", right: "Échange vif de répliques très courtes" },
              { left: "Quiproquo", right: "Malentendu sur une personne ou sur un mot" },
              { left: "Dénouement", right: "Résolution finale du conflit" },
              { left: "Double énonciation", right: "Parole adressée à la fois au personnage et au public" },
            ],
          },
          quiz: [
            { q: "Qu'appelle-t-on une didascalie ?", options: ["Une longue réplique ininterrompue", "Une indication de l'auteur", "Un échange de répliques brèves", "La scène d'ouverture d'une pièce"], answer: 1, why: "Les didascalies, souvent en italique, précisent le lieu, les gestes, le ton, les entrées et les sorties." },
            { q: "Que réclame Victor Hugo dans la préface de Cromwell (1827) ?", options: ["Le respect strict de la règle des trois unités", "Le retour au chœur de la tragédie antique", "Le mélange du sublime et du grotesque"], answer: 2, why: "Le drame romantique veut représenter l'homme tout entier, grand et ridicule à la fois, contre la séparation classique des genres." },
            { q: "Quelle pièce relève du théâtre de l'absurde ?", options: ["Le Mariage de Figaro", "Hernani", "Le Cid", "En attendant Godot"], answer: 3, why: "La pièce de Beckett (1953) montre deux personnages qui attendent en vain et parlent sans avancer." },
            { q: "Qui fonde le Théâtre-Libre en 1887 ?", options: ["André Antoine", "Victor Hugo", "Alfred de Musset"], answer: 0, why: "André Antoine y défend un jeu naturel et des décors réalistes ; il est l'une des premières grandes figures de metteur en scène." },
            { q: "Selon la règle classique, l'unité de temps limite l'action à :", options: ["une heure, durée de la représentation", "une saison entière", "vingt-quatre heures au plus", "une semaine"], answer: 2, why: "L'action doit tenir en une journée, pour rester vraisemblable aux yeux du spectateur." },
          ],
          trap: "Analyser une pièce comme un roman, en oubliant qu'elle est destinée à la scène : il faut toujours penser à la double énonciation et à ce que le spectateur voit et sait.",
          method: "Pour chaque extrait, posez quatre questions : qui parle à qui, qui écoute sans être vu, que sait le spectateur que les personnages ignorent, et comment la réplique pourrait-elle être jouée ? Vos réponses fourniront les axes de l'explication.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'corneille-menteur',
          title: 'Corneille, « Le Menteur » : mensonge et comédie',
          minutes: 35,
          objectives: [
            "Situer Le Menteur dans l'œuvre de Corneille et dans le théâtre du XVIIe siècle.",
            "Analyser les mensonges de Dorante, leurs motifs et leurs effets comiques.",
            "Interpréter le parcours associé, « mensonge et comédie » : le menteur comme figure du poète et du comédien.",
            "Construire une réflexion argumentée sur l'œuvre, en vue de la dissertation.",
          ],
          course: [
            {
              heading: "Corneille, auteur de comédies",
              paragraphs: [
                "Pierre Corneille (1606 à 1684) est surtout connu pour ses tragédies et tragi-comédies : Le Cid (1637), Horace, Cinna, Polyeucte. Mais il a commencé sa carrière par des comédies (Mélite, puis L'Illusion comique en 1636) et, au sommet de sa gloire, il revient au genre avec Le Menteur, créé au théâtre du Marais au cours de la saison 1643-1644 et publié en 1644. La pièce connaît un grand succès, et Corneille lui donne une suite, La Suite du Menteur.",
                "Corneille s'inspire d'une comédie espagnole, La verdad sospechosa (« La vérité suspecte ») de Juan Ruiz de Alarcón, qu'il croyait d'abord de Lope de Vega. Il transpose l'intrigue à Paris, dans des lieux à la mode que les spectateurs connaissent : le jardin des Tuileries et la place Royale (l'actuelle place des Vosges). C'est une comédie en cinq actes et en alexandrins, qui peint la jeunesse élégante de son temps.",
              ],
              box: { label: "Repère", text: "Le Menteur : comédie en cinq actes et en alexandrins de Pierre Corneille, créée en 1643-1644 au théâtre du Marais, publiée en 1644, adaptée de La verdad sospechosa de Ruiz de Alarcón. Personnages : Dorante, son valet Cliton, son père Géronte, Clarice, Lucrèce, Alcippe." },
            },
            {
              heading: "L'intrigue : un menteur pris à ses propres pièges",
              paragraphs: [
                "Dorante, jeune homme qui vient d'achever ses études de droit à Poitiers, arrive à Paris avec son valet Cliton. Aux Tuileries, il aborde deux jeunes femmes, Clarice et Lucrèce, et se fait passer pour un guerrier revenu des guerres d'Allemagne. Cliton apprend du cocher que la plus belle des deux s'appelle Lucrèce ; Dorante, qui juge plus belle celle qui lui a parlé, Clarice, en conclut qu'elle se nomme Lucrèce. Ce quiproquo sur les noms traverse toute la pièce.",
                "Les mensonges s'enchaînent. Devant Alcippe, amant jaloux de Clarice, Dorante se vante d'avoir offert la nuit précédente une fête somptueuse sur l'eau à une dame : Alcippe, persuadé qu'il s'agit de Clarice, devient fou de jalousie et veut se battre contre lui. Quand son père Géronte veut le marier à Clarice, qu'il croit ne pas connaître, Dorante invente un mariage secret conclu à Poitiers, dans un long récit plein de péripéties romanesques. Il fait même croire à Cliton qu'il a tué Alcippe en duel, et lorsque celui-ci reparaît bien vivant, il trouve aussitôt une nouvelle invention pour s'en tirer.",
                "Au dénouement, Géronte découvre que son fils n'a jamais été marié et lui reproche durement d'avoir manqué à l'honneur d'un gentilhomme. Dorante comprend enfin que celle qu'il aimait se nomme Clarice ; mais, plutôt que d'avouer son erreur, il déclare aimer désormais Lucrèce, qu'il épousera, tandis que Clarice revient à Alcippe. Le menteur retombe sur ses pieds : la comédie finit bien, sans que le mensonge soit vraiment puni.",
              ],
            },
            {
              heading: "Les mensonges de Dorante : un art de l'invention",
              paragraphs: [
                "Dorante ne ment pas seulement par intérêt. Ses mensonges ont des motifs variés : briller auprès des femmes (le guerrier d'Allemagne), écraser un rival (la fête sur l'eau), échapper à un mariage imposé (le mariage de Poitiers), se tirer d'embarras. Mais il ment surtout par plaisir : il savoure ses inventions, les enrichit de détails précis et s'admire lui-même. Le mensonge devient chez lui un talent, presque une œuvre d'art.",
                "Ses récits mensongers sont de véritables morceaux de bravoure. La fête sur l'eau est décrite avec un luxe de détails (bateaux, musique, festin) ; le mariage de Poitiers enchaîne les rebondissements comme un petit roman, avec une rencontre nocturne, une surprise et un mariage précipité pour sauver l'honneur d'une jeune fille. Dorante y déploie l'art du conteur : précision, vraisemblance des détails, rythme. Le spectateur, qui sait que tout est faux, admire la virtuosité plus qu'il ne condamne la tromperie.",
                "Cliton sert de contrepoint. Valet lucide et moqueur, il commente les inventions de son maître, s'en étonne et en tire une leçon de bon sens : un menteur doit avoir une excellente mémoire pour ne pas se contredire. Géronte, lui, incarne l'honneur : pour ce père, le mensonge est indigne d'un gentilhomme, et sa colère du dernier acte rappelle le ton des grandes scènes tragiques de Corneille.",
              ],
              box: { label: "À retenir", text: "Dorante ment par vanité, par intérêt et surtout par plaisir d'inventer. Ses récits sont des fictions brillantes : le menteur est un conteur et un comédien, ce qui fait de la pièce une réflexion sur le théâtre lui-même." },
            },
            {
              heading: "Mensonge et comédie : le théâtre en miroir",
              paragraphs: [
                "Le parcours « mensonge et comédie » invite à voir en Dorante une figure de l'auteur et du comédien. Comme le dramaturge, il invente des histoires, crée des personnages et des décors par la seule parole ; comme l'acteur, il joue des rôles (le guerrier, l'amant fastueux, le mari secret) devant un public qui le croit. Le théâtre est lui-même un mensonge accepté, une illusion que le spectateur choisit de croire le temps de la représentation.",
                "Le comique naît de plusieurs ressorts : comique de situation (le quiproquo sur les noms, le menteur pris à son propre jeu), comique de caractère (la vanité de Dorante), comique de mots (l'aplomb et l'ingéniosité de ses répliques), et jeu entre le maître et le valet. Mais la pièce pose aussi une question morale : le mensonge est-il condamnable s'il amuse et ne fait de mal à personne ? Corneille ne tranche pas nettement, puisque Dorante obtient à la fin un mariage heureux.",
                "La pièce compte dans l'histoire de la comédie française : avant les grandes comédies de Molière, elle offre l'exemple d'une comédie en vers centrée sur un caractère, dans une langue vive et élégante. On peut rapprocher Dorante d'autres menteurs de théâtre, comme Matamore, le soldat fanfaron de L'Illusion comique, dont les exploits sont tous imaginaires.",
              ],
              box: { label: "Définition", text: "Comédie de caractère : comédie centrée sur un personnage dominé par un trait (vanité, avarice, hypocrisie), dont les excès produisent le comique et font réfléchir sur les mœurs." },
            },
          ],
          keyPoints: [
            "Le Menteur (créé en 1643-1644, publié en 1644) : comédie en cinq actes et en alexandrins, adaptée d'une pièce espagnole de Ruiz de Alarcón.",
            "Lieux : Paris, les Tuileries et la place Royale. Personnages : Dorante, Cliton, Géronte, Clarice, Lucrèce, Alcippe.",
            "Ressort central : un quiproquo sur les noms (Dorante croit que Clarice s'appelle Lucrèce).",
            "Mensonges : le guerrier d'Allemagne, la fête sur l'eau, le mariage de Poitiers, le duel.",
            "Dorante ment par plaisir d'inventer : il est conteur et comédien, figure du dramaturge.",
            "Dénouement : le menteur n'est pas puni, il épousera Lucrèce ; la comédie interroge la morale sans conclure.",
          ],
          example: {
            statement: "Expliquez en quoi Dorante peut être considéré comme une figure du dramaturge, en vous appuyant sur l'épisode de la fête sur l'eau.",
            solution: [
              "Rappeler l'épisode : devant Alcippe et son ami Philiste, Dorante prétend avoir offert la nuit précédente une fête somptueuse sur l'eau à une dame, alors qu'il vient d'arriver à Paris.",
              "Le dramaturge invente une fiction : Dorante construit un événement complet, avec un lieu, une héroïne, un déroulement et des détails concrets, comme un auteur construit une intrigue.",
              "Il crée un spectacle par la parole : sa description fait voir à ses auditeurs une fête qu'ils n'ont pas vue, comme le récit classique fait voir au public ce qui n'est pas montré sur scène.",
              "Il produit un effet sur son public : Alcippe, convaincu, devient jaloux. La fiction agit sur ceux qui l'écoutent, comme une pièce agit sur les spectateurs.",
              "Le spectateur réel est complice : il sait, comme Cliton, que tout est faux, et il admire l'invention au lieu de s'en indigner. C'est l'illusion théâtrale elle-même qui est mise en abyme.",
              "Réponse : par son art d'inventer, de décrire et de faire croire, Dorante se comporte en auteur et en acteur ; la pièce fait du mensonge un miroir du théâtre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chacun des mensonges de Dorante à son motif principal. a) Il se dit revenu des guerres d'Allemagne. b) Il se vante d'avoir offert une fête sur l'eau. c) Il affirme être déjà marié à Poitiers. d) Il fait croire à Cliton qu'il a tué Alcippe en duel. Motifs : 1. échapper au mariage voulu par son père ; 2. séduire en se donnant un passé prestigieux ; 3. briller devant un rival et le rendre jaloux ; 4. le plaisir de se donner le beau rôle, même devant son valet.",
              hint: "Demandez-vous chaque fois à qui Dorante ment et ce qu'il espère obtenir de cet auditeur.",
              solution: [
                "a) Le guerrier d'Allemagne est inventé devant les deux jeunes femmes : motif 2, séduire.",
                "b) La fête sur l'eau est racontée devant Alcippe : motif 3, briller devant un rival.",
                "c) Le mariage de Poitiers est inventé devant Géronte : motif 1, échapper au mariage imposé.",
                "d) Le faux duel est raconté à Cliton, qui n'a rien à lui donner : motif 4, le pur plaisir de se faire valoir.",
                "Réponse : a2, b3, c1, d4.",
              ],
            },
            {
              level: 2,
              statement: "Passage d'entraînement, écrit en prose à la manière de la pièce. CLITON : Monsieur, vous n'avez jamais vu l'Allemagne ! DORANTE : Qu'importe ? On écoute plus volontiers un soldat qu'un étudiant. CLITON, à part : Le voilà lancé ; Dieu sait où il s'arrêtera. a) Quel rôle joue Cliton dans cet échange ? b) Analysez l'aparté. c) Que révèle la réplique de Dorante sur sa conception du mensonge ?",
              hint: "Pour b), rappelez la définition de l'aparté et demandez-vous à qui il s'adresse en réalité. Pour c), comparez ce qui compte pour Dorante : la vérité ou l'effet produit.",
              solution: [
                "a) Cliton rappelle la réalité (« vous n'avez jamais vu l'Allemagne ») : il est la voix du bon sens et sert de contrepoint à son maître. Il joue aussi le rôle d'un spectateur sur scène, qui réagit aux inventions de Dorante.",
                "b) L'aparté « Le voilà lancé ; Dieu sait où il s'arrêtera » est dit pour lui-même, mais adressé en réalité au public, avec qui Cliton partage son inquiétude amusée : c'est la double énonciation. Il annonce aussi l'escalade des mensonges.",
                "c) Pour Dorante, peu importe la vérité : seul compte l'effet produit sur l'auditeur. Il choisit un rôle (le soldat) parce qu'il plaît davantage, comme un acteur choisit un personnage. Le mensonge est une stratégie de séduction et une forme de théâtre social.",
                "Réponse : Cliton incarne la lucidité et la complicité avec le public ; Dorante révèle une conception théâtrale du mensonge, fondée sur l'effet plutôt que sur la vérité.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac) : « Dans Le Menteur, le mensonge est-il seulement un défaut que la comédie condamne ? » Formulez une problématique et proposez un plan détaillé en trois parties, appuyé sur des épisodes précis.",
              hint: "Le mot « seulement » invite à nuancer : montrez que le mensonge est moqué, puis qu'il fascine, puis qu'il ressemble au théâtre lui-même.",
              solution: [
                "Analyse du sujet : « défaut » et « condamne » renvoient à la fonction morale de la comédie, qui corrige les vices en les rendant ridicules ; « seulement » invite à chercher d'autres fonctions du mensonge dans la pièce.",
                "Problématique : la comédie de Corneille dénonce-t-elle le mensonge comme un vice, ou en fait-elle l'éloge, comme d'un art qui ressemble au théâtre lui-même ?",
                "I. Un défaut moqué : Dorante se prend à ses propres pièges (le quiproquo sur les noms, les contradictions qui s'accumulent) ; Cliton souligne qu'il faut une bonne mémoire pour mentir ; Géronte condamne au nom de l'honneur un fils qui le déshonore.",
                "II. Un talent qui fascine : les récits de la fête sur l'eau et du mariage de Poitiers sont des morceaux de bravoure ; l'aplomb de Dorante amuse ; le dénouement ne le punit pas, puisqu'il obtient un mariage heureux.",
                "III. Le mensonge, image du théâtre : Dorante invente, décrit et joue comme un dramaturge et un comédien ; l'illusion théâtrale est un mensonge consenti ; Corneille, déjà auteur de L'Illusion comique, fait de la comédie une réflexion sur la fiction.",
                "Conclusion : le mensonge est moqué, mais il est surtout célébré comme une puissance d'invention ; la pièce invite moins à condamner le menteur qu'à réfléchir au pouvoir de la fiction.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre ces étapes de l'intrigue du Menteur.",
            items: [
              "Aux Tuileries, Dorante aborde Clarice et Lucrèce et se fait passer pour un guerrier.",
              "À cause d'un malentendu, Dorante croit que la jeune femme qui lui a parlé s'appelle Lucrèce.",
              "Devant Alcippe, il se vante d'avoir offert une fête sur l'eau.",
              "Pour échapper au mariage voulu par Géronte, il invente un mariage secret à Poitiers.",
              "Géronte découvre la vérité et reproche à son fils de déshonorer son rang.",
              "Détrompé sur les noms, Dorante déclare aimer Lucrèce, qu'il épousera.",
            ],
          },
          quiz: [
            { q: "De quelle pièce Corneille s'inspire-t-il pour Le Menteur ?", options: ["L'Avare de Molière", "La verdad sospechosa de Ruiz de Alarcón", "Le Cid, sa propre tragi-comédie", "Une comédie latine de Plaute"], answer: 1, why: "Corneille adapte cette comédie espagnole, qu'il croyait d'abord de Lope de Vega, et la transpose à Paris." },
            { q: "Où se déroule l'action ?", options: ["À Paris, aux Tuileries et place Royale", "À Poitiers, dans la maison de Géronte", "À Madrid, dans un palais royal", "En Allemagne, dans un camp militaire"], answer: 0, why: "Corneille situe l'intrigue dans des lieux parisiens à la mode, familiers de son public." },
            { q: "Pourquoi Dorante invente-t-il un mariage à Poitiers ?", options: ["Pour rendre Alcippe jaloux de sa maîtresse", "Pour fuir le mariage voulu par son père", "Pour impressionner Lucrèce par un passé romanesque"], answer: 1, why: "Croyant aimer une certaine Lucrèce, il refuse d'épouser Clarice, que Géronte lui destine, sans savoir que c'est elle qu'il aime." },
            { q: "Qui est Cliton ?", options: ["Le rival jaloux qui aime Clarice", "Le père qui veut marier Dorante", "Le cocher des deux jeunes femmes", "Le valet de Dorante"], answer: 3, why: "Valet lucide et moqueur, il commente les mensonges de son maître et sert de complice au public." },
            { q: "Comment se termine la pièce ?", options: ["Dorante est déshérité par son père", "Dorante épouse Clarice après avoir tout avoué", "Dorante épousera Lucrèce", "Dorante est tué en duel par Alcippe"], answer: 2, why: "Plutôt que d'avouer sa méprise sur les noms, Dorante déclare aimer Lucrèce : le menteur retombe sur ses pieds." },
          ],
          trap: "Lire la pièce comme une simple condamnation morale du mensonge : la comédie fait surtout admirer l'invention de Dorante, que le dénouement ne punit pas, et en fait une image du théâtre lui-même.",
          method: "Préparez une fiche par mensonge en quatre colonnes (destinataire, motif, contenu, conséquence) : ce tableau vous fournira des exemples précis pour toute dissertation sur le parcours « mensonge et comédie ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'musset-on-ne-badine-pas',
          title: 'Musset, « On ne badine pas avec l’amour » : les jeux du cœur',
          minutes: 35,
          objectives: [
            "Situer On ne badine pas avec l'amour dans l'œuvre de Musset et dans le romantisme.",
            "Analyser les jeux du cœur et de la parole entre Camille et Perdican : orgueil, défi, piège, aveu.",
            "Interpréter le mélange des registres comique et tragique et le sens du dénouement.",
            "Construire une explication ou une dissertation sur l'œuvre et son parcours.",
          ],
          course: [
            {
              heading: "Musset et le « spectacle dans un fauteuil »",
              paragraphs: [
                "Alfred de Musset (1810 à 1857) est l'une des grandes figures du romantisme. Après l'échec de sa pièce La Nuit vénitienne à l'Odéon, en 1830, il renonce à écrire pour la scène de son temps et compose des pièces destinées à la lecture, réunies sous le titre Un spectacle dans un fauteuil. Libéré des contraintes de la représentation, il mêle les lieux, les tons et les genres avec une grande liberté.",
                "On ne badine pas avec l'amour paraît en 1834 dans la Revue des Deux Mondes, puis en volume. Elle est écrite au moment de la liaison orageuse de Musset avec George Sand, et l'on considère souvent que certaines répliques s'inspirent de leur correspondance. La pièce ne sera créée à la Comédie-Française qu'en 1861, après la mort de l'auteur. C'est un « proverbe » en trois actes et en prose : son titre est une maxime que l'intrigue va illustrer.",
              ],
              box: { label: "Repère", text: "On ne badine pas avec l'amour : proverbe en trois actes et en prose d'Alfred de Musset, publié en 1834, créé en 1861 à la Comédie-Française. « Badiner » : plaisanter, traiter quelque chose avec légèreté." },
            },
            {
              heading: "Une intrigue qui passe du jeu au drame",
              paragraphs: [
                "Le Baron veut marier son fils Perdican, qui vient d'obtenir son doctorat à Paris, avec sa nièce Camille, qui sort du couvent. Les deux cousins se sont aimés enfants. Mais Camille, élevée par des religieuses qui lui ont confié leurs souffrances amoureuses, accueille Perdican avec froideur et refuse le mariage : elle veut retourner au couvent. Blessé, Perdican fait la cour à Rosette, une jeune paysanne, sœur de lait de Camille.",
                "Au deuxième acte, une grande scène d'explication réunit les cousins. Camille expose sa peur d'aimer et d'être trahie ; Perdican lui répond par une tirade célèbre : les hommes et les femmes sont menteurs, inconstants, imparfaits, mais l'union de deux de ces êtres reste une chose « sainte et sublime », et mieux vaut avoir aimé, souffert et s'être trompé que de n'avoir pas vécu. Au troisième acte, le jeu devient cruel : Perdican intercepte une lettre où Camille se vante de l'avoir désespéré ; par dépit, il déclare son amour à Rosette sous les yeux de Camille, qu'il sait cachée, et promet de l'épouser.",
                "Camille riposte par le même jeu : elle fait cacher Rosette et amène Perdican à lui avouer qu'il l'aime toujours ; Rosette, qui entend tout, s'évanouit. Dans la dernière scène, les deux cousins, seuls dans un oratoire, s'avouent enfin leur amour. Mais Rosette, qui les a suivis, a tout entendu : on la trouve morte. Camille dit adieu à Perdican : l'amour avoué est devenu impossible.",
              ],
            },
            {
              heading: "Les jeux du cœur et de la parole",
              paragraphs: [
                "Le parcours associé à l'œuvre, « les jeux du cœur et de la parole », invite à observer comment les personnages s'aiment et se blessent par les mots. Camille et Perdican ne cessent de se parler, mais rarement avec sincérité : ils se défient, se mettent à l'épreuve, se tendent des pièges. L'orgueil empêche chacun d'avouer le premier ce qu'il ressent, et la parole devient une arme dans un duel amoureux.",
                "Le langage prend des formes variées : dialogues vifs où chaque réplique relance le combat, tirades lyriques où s'exprime une conception de l'amour, mises en scène calculées (la lettre, le rendez-vous à la fontaine, la cachette). Les personnages se jouent la comédie l'un à l'autre, et ce théâtre dans le théâtre finit par avoir des conséquences réelles. Le titre en donne la leçon : on ne joue pas impunément avec les sentiments, les siens comme ceux des autres.",
                "Rosette est la victime de ces jeux. Jeune paysanne naïve, elle prend au sérieux les paroles de Perdican, qui ne sont pour lui qu'un instrument contre Camille. Sa mort révèle que le badinage des deux cousins, qui se croyaient maîtres de leurs mots, a détruit une personne innocente. Les mots ont un poids : c'est la leçon tragique de la pièce.",
              ],
              box: { label: "À retenir", text: "Camille et Perdican font de la parole amoureuse un jeu d'orgueil : défis, mensonges, pièges, aveux arrachés. Le proverbe du titre affirme que l'amour n'est pas un jeu, et Rosette paie de sa vie le badinage des deux cousins." },
            },
            {
              heading: "Comédie et tragédie mêlées",
              paragraphs: [
                "Fidèle à l'esthétique romantique, Musset mêle les registres. Les personnages secondaires sont des fantoches comiques : le Baron, père autoritaire et dépassé ; maître Blazius, gouverneur de Perdican, porté sur le vin ; maître Bridaine, le curé, gourmand et jaloux de Blazius ; dame Pluche, gouvernante de Camille, revêche et dévote. Leurs querelles, leurs répétitions et leurs manies relèvent de la farce.",
                "À l'inverse, l'intrigue principale glisse de la comédie sentimentale vers le drame, puis vers la tragédie avec la mort de Rosette. Le Chœur, formé de paysans du village, rappelle le chœur de la tragédie antique : il commente l'action, présente les personnages et donne à la pièce une dimension à la fois poétique et ironique. Ce mélange du sublime et du grotesque, que Victor Hugo réclamait dans la préface de Cromwell, fait la modernité de la pièce.",
              ],
              box: { label: "Repère", text: "Registre comique : le Baron, Blazius, Bridaine, dame Pluche. Registre lyrique : les tirades de Camille et de Perdican. Registre tragique : la mort de Rosette. Le Chœur, venu de la tragédie antique, commente l'ensemble." },
            },
          ],
          keyPoints: [
            "Proverbe en trois actes et en prose (1834), créé en 1861 ; pièce écrite pour la lecture (Un spectacle dans un fauteuil).",
            "Perdican, jeune docteur, et Camille, sortie du couvent, doivent se marier ; l'orgueil et la peur d'aimer les en empêchent.",
            "Tirade de Perdican (acte II) : les êtres sont imparfaits, mais l'amour reste une chose « sainte et sublime ».",
            "Jeux cruels de l'acte III : lettre interceptée, déclaration à Rosette, cachette, aveux.",
            "Rosette, victime innocente, meurt : on ne badine pas avec l'amour.",
            "Mélange des registres : fantoches comiques (Baron, Blazius, Bridaine, dame Pluche), Chœur, dénouement tragique.",
          ],
          example: {
            statement: "Expliquez le titre On ne badine pas avec l'amour en montrant comment le dénouement l'illustre.",
            solution: [
              "Analyser la forme : le pronom indéfini « on », le présent de vérité générale et la négation totale « ne... pas » donnent au titre la forme d'un proverbe, une règle valable pour tous.",
              "Définir le verbe : « badiner », c'est plaisanter, traiter avec légèreté. Le titre affirme donc que l'amour est une chose sérieuse.",
              "Montrer les jeux : Camille feint l'indifférence et se vante dans sa lettre d'avoir désespéré Perdican ; Perdican courtise Rosette par dépit ; chacun se sert de l'amour comme d'une arme contre l'autre.",
              "Relier au dénouement : quand les cousins s'avouent enfin leur amour, Rosette, qui a cru aux promesses de Perdican, les entend et meurt. Le jeu a eu des conséquences irréversibles.",
              "Réponse : le titre énonce la morale que le dénouement démontre ; ceux qui ont badiné avec l'amour sont séparés, et une innocente en meurt.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque personnage à sa description. Personnages : Perdican, Camille, le Baron, maître Blazius, maître Bridaine, dame Pluche, Rosette. Descriptions : a) gouvernante revêche et dévote ; b) jeune paysanne, sœur de lait de Camille ; c) jeune docteur revenu de Paris ; d) curé gourmand ; e) père qui veut marier les deux cousins ; f) jeune fille sortie du couvent ; g) gouverneur porté sur le vin.",
              hint: "Distinguez d'abord les trois personnages de l'intrigue amoureuse, puis les quatre figures comiques.",
              solution: [
                "Perdican : c, le jeune docteur revenu de Paris.",
                "Camille : f, la jeune fille sortie du couvent.",
                "Le Baron : e, le père qui veut marier les cousins.",
                "Maître Blazius : g, le gouverneur de Perdican, porté sur le vin.",
                "Maître Bridaine : d, le curé gourmand.",
                "Dame Pluche : a, la gouvernante de Camille.",
                "Rosette : b, la sœur de lait de Camille.",
                "Réponse : Perdican c, Camille f, le Baron e, Blazius g, Bridaine d, dame Pluche a, Rosette b.",
              ],
            },
            {
              level: 2,
              statement: "Passage d'entraînement, écrit à la manière de la pièce. CAMILLE : Vous dites m'aimer ? À combien de femmes l'avez-vous déjà dit ? PERDICAN : À beaucoup, peut-être. Mais je ne l'ai jamais dit comme aujourd'hui. CAMILLE : Les religieuses m'ont appris ce que valent ces serments. a) Quel conflit oppose les deux personnages ? b) Analysez les deux interrogations de Camille. c) Comment Perdican retourne-t-il l'attaque ?",
              hint: "Pour b), utilisez la leçon sur l'interrogation (type, construction, valeur). Pour c), observez la concession puis le connecteur « Mais » et la négation.",
              solution: [
                "a) Le conflit oppose la méfiance de Camille, nourrie par les récits des religieuses, à la sincérité que revendique Perdican : elle refuse de croire à l'amour, il veut l'en convaincre.",
                "b) « Vous dites m'aimer ? » est une interrogation totale construite par la seule intonation : elle exprime l'incrédulité, presque l'ironie. « À combien de femmes l'avez-vous déjà dit ? » est une interrogation partielle, introduite par « combien de », qui porte sur le nombre, avec inversion simple du pronom « vous » : c'est une question rhétorique, qui insinue qu'il l'a dit à beaucoup.",
                "c) Perdican concède d'abord (« À beaucoup, peut-être »), puis renverse l'argument avec « Mais » et la négation partielle « ne... jamais » : le passé ne compte pas, la parole d'aujourd'hui est unique. Camille clôt l'échange en opposant l'autorité des religieuses.",
                "Réponse : le dialogue est un duel où les questions servent d'armes ; la parole amoureuse y est sans cesse soupçonnée, ce qui illustre les jeux du cœur et de la parole.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac) : « Dans On ne badine pas avec l'amour, la parole sert-elle davantage à blesser qu'à aimer ? » Formulez une problématique et proposez un plan détaillé en trois parties, avec des exemples précis.",
              hint: "Montrez d'abord la parole comme arme, puis comme expression sincère de l'amour, avant de vous demander pourquoi, dans cette pièce, l'une se change sans cesse en l'autre.",
              solution: [
                "Analyse du sujet : « davantage » invite à comparer deux usages de la parole, l'arme et l'aveu ; le sujet rejoint le parcours « les jeux du cœur et de la parole ».",
                "Problématique : dans cette pièce, la parole amoureuse est-elle d'abord une arme d'orgueil, ou reste-t-elle le lieu où l'amour se dit malgré tout ?",
                "I. Une parole qui blesse : les refus et l'ironie de Camille ; la lettre où elle se vante d'avoir désespéré Perdican ; la déclaration de Perdican à Rosette, faite pour être entendue de Camille ; la cachette qui humilie Rosette.",
                "II. Une parole qui dit l'amour : la tirade de Perdican sur l'amour, chose « sainte et sublime » malgré l'imperfection humaine ; les souvenirs d'enfance évoqués par Perdican ; les aveux réciproques de la dernière scène.",
                "III. Une parole ambiguë et dangereuse : chaque aveu se change en piège et chaque piège contient un aveu ; Rosette, qui prend les mots au sérieux, meurt de les avoir entendus ; la parole a plus de pouvoir que ceux qui croient en jouer.",
                "Conclusion : la parole blesse parce qu'elle aime ; c'est sa force même qui rend dangereux le badinage, comme l'annonce le titre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : que savez-vous d'On ne badine pas avec l'amour ?",
            statements: [
              { text: "La pièce a d'abord été écrite pour être lue.", true: true, why: "Après l'échec de 1830, Musset écrit pour un « spectacle dans un fauteuil » ; la pièce n'est créée qu'en 1861." },
              { text: "La pièce est écrite en alexandrins.", true: false, why: "C'est un proverbe en prose, ce qui donne au dialogue une grande souplesse." },
              { text: "Rosette est la sœur de lait de Camille.", true: true, why: "Elles ont été nourries par la même nourrice, ce qui rend plus cruel le rôle qu'on lui fait jouer." },
              { text: "Camille refuse d'abord Perdican parce qu'elle aime un autre homme.", true: false, why: "Elle a peur d'aimer et d'être trahie, à cause des récits des religieuses du couvent." },
              { text: "Le Chœur rappelle le chœur de la tragédie antique.", true: true, why: "Formé de paysans, il commente l'action et présente les personnages." },
              { text: "La pièce se termine par le mariage de Camille et de Perdican.", true: false, why: "Rosette meurt après avoir entendu leurs aveux, et Camille dit adieu à Perdican." },
              { text: "Maître Blazius et maître Bridaine sont des personnages comiques.", true: true, why: "Ces fantoches, l'un ivrogne, l'autre gourmand, relèvent de la farce." },
            ],
          },
          quiz: [
            { q: "En quelle année On ne badine pas avec l'amour est-il publié ?", options: ["1830", "1861", "1834", "1857"], answer: 2, why: "La pièce paraît en 1834 dans la Revue des Deux Mondes ; elle ne sera jouée qu'en 1861." },
            { q: "D'où revient Camille au début de la pièce ?", options: ["Du couvent", "De Paris, où elle a fait des études", "De Venise, avec sa gouvernante"], answer: 0, why: "Camille sort du couvent, où les religieuses lui ont appris à se méfier de l'amour." },
            { q: "Pourquoi Perdican courtise-t-il Rosette ?", options: ["Parce que son père le lui ordonne", "Par dépit, pour atteindre Camille", "Parce qu'il a toujours préféré Rosette", "Pour hériter plus vite du Baron"], answer: 1, why: "Blessé par la froideur de Camille, il se sert de Rosette pour la rendre jalouse." },
            { q: "Que devient Rosette à la fin ?", options: ["Elle épouse Perdican devant tout le village", "Elle entre au couvent à la place de Camille", "Elle quitte le château pour Paris", "Elle meurt"], answer: 3, why: "Elle meurt après avoir entendu les aveux de Camille et de Perdican dans l'oratoire." },
            { q: "Quel est le parcours associé à l'œuvre ?", options: ["Les jeux du cœur et de la parole", "Mensonge et comédie", "Théâtre et dispute"], answer: 0, why: "Le parcours invite à étudier la parole amoureuse comme un jeu qui peut blesser." },
          ],
          trap: "Faire de Camille la seule responsable du drame : les deux cousins badinent avec l'amour par orgueil, et c'est leur jeu commun, non la seule froideur de Camille, qui cause la mort de Rosette.",
          method: "Pour chaque scène entre Camille et Perdican, notez qui mène le jeu, quelle arme de parole il utilise (défi, ironie, aveu, mensonge) et qui en est la victime : vous verrez se dessiner la progression du jeu vers le drame.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sarraute-pour-un-oui',
          title: 'Sarraute, « Pour un oui ou pour un non » : théâtre et dispute',
          minutes: 35,
          objectives: [
            "Situer Pour un oui ou pour un non dans l'œuvre de Nathalie Sarraute et dans le théâtre contemporain.",
            "Analyser la naissance et la progression d'une dispute à partir d'un mot et d'une intonation.",
            "Interpréter les notions de tropisme et de sous-conversation et leur mise en scène au théâtre.",
            "Construire une réflexion argumentée sur le parcours « théâtre et dispute ».",
          ],
          course: [
            {
              heading: "Nathalie Sarraute, l'exploratrice des tropismes",
              paragraphs: [
                "Nathalie Sarraute (1900 à 1999), née en Russie et installée en France dès l'enfance, publie en 1939 Tropismes, un recueil de courts textes. Elle appelle tropismes, en empruntant le mot à la biologie, ces mouvements intérieurs minuscules et rapides, à la limite de la conscience, qui se produisent en nous au contact des autres : attirance, recul, malaise, petites blessures. Ils précèdent et accompagnent nos paroles sans que nous les exprimions.",
                "Dans son essai L'Ère du soupçon (1956), elle met en cause le personnage traditionnel du roman, et elle est associée au Nouveau Roman. Elle nomme sous-conversation ce qui se passe sous les paroles échangées : derrière des phrases banales, une guerre silencieuse se livre. Venue tard au théâtre, avec des pièces d'abord écrites pour la radio, elle y donne voix à cette sous-conversation : ses personnages disent tout haut ce qui, d'ordinaire, reste tu.",
              ],
              box: { label: "Définition", text: "Tropisme : mouvement intérieur infime et rapide, à la limite de la conscience, qui se produit en nous au contact d'autrui. Sous-conversation : ce qui se joue sous les paroles banales, et que le théâtre de Sarraute rend audible." },
            },
            {
              heading: "Une dispute pour presque rien",
              paragraphs: [
                "Pour un oui ou pour un non, publiée en 1982 et créée sur scène en 1986, est la dernière pièce de Sarraute. Elle met en présence deux hommes, amis de longue date, désignés seulement par H.1 et H.2 ; deux voisins, H.3 et F., interviennent brièvement. Pas de noms, pas de décor précis, presque pas d'action : seulement une conversation, d'un seul tenant, sans division en actes ni en scènes.",
                "H.1 vient voir H.2, qui s'éloigne de lui depuis quelque temps, pour comprendre ce qu'il lui reproche. Après bien des réticences, H.2 finit par avouer : un jour, alors qu'il lui parlait d'un succès, H.1 a répondu « C'est bien... ça », avec un suspens et un accent particulier sur « ça ». Cette intonation contenait, selon H.2, de la condescendance. H.1 trouve le grief ridicule : on ne se brouille pas pour si peu, « pour un oui ou pour un non ».",
                "La dispute ne s'arrête pas là. Chaque explication fait surgir un nouveau grief, et le conflit s'élargit : il ne porte plus sur un mot, mais sur deux manières de vivre. H.1 mène une existence réussie et conforme aux attentes sociales ; H.2 se tient à l'écart, attentif à la beauté simple des choses, ce que H.1 juge naïf ou prétentieux. Les voisins appelés comme arbitres ne comprennent rien à l'affaire. La pièce s'achève sans réconciliation véritable.",
              ],
              box: { label: "Repère", text: "Pour un oui ou pour un non : pièce conçue d'abord pour la radio, publiée en 1982, créée au théâtre en 1986. Personnages : H.1, H.2, H.3 et F. Point de départ : l'intonation de « C'est bien... ça »." },
            },
            {
              heading: "Le théâtre de la sous-conversation",
              paragraphs: [
                "Le véritable sujet de la pièce n'est pas un événement, mais le langage. Sarraute montre qu'un mot banal peut blesser par son intonation, son rythme, sa place : les points de suspension, les répétitions, les phrases inachevées traduisent ce qui se joue sous les paroles. Les personnages reviennent sans cesse sur ce qui a été dit, pèsent chaque terme, s'accusent mutuellement d'avoir mal compris. La parole devient à la fois l'objet et l'arme du conflit.",
                "Pour mettre en scène des tropismes, invisibles par nature, Sarraute fait parler ses personnages de ce que l'on tait d'ordinaire : H.2 ose dire qu'un ton l'a blessé, ce qu'aucune conversation polie n'avouerait. L'économie de moyens (des voix, aucun décor imposé, aucune action spectaculaire) concentre l'attention sur la parole. Le spectateur est invité à reconnaître ses propres réactions : chacun a déjà été blessé par une phrase anodine en apparence.",
                "Le comique n'est pas absent : la disproportion entre la cause (deux mots) et l'ampleur de la dispute fait sourire, comme l'intervention des voisins ou le procès où chacun accuse et se défend. Mais le rire se mêle de malaise, car la pièce touche à la fragilité de l'amitié et à la difficulté de se comprendre tout à fait.",
              ],
              box: { label: "À retenir", text: "Chez Sarraute, le drame est dans le langage : une intonation suffit à révéler un rapport de force. La pièce rend audible la sous-conversation, ces mouvements intérieurs que les mots ordinaires recouvrent." },
            },
            {
              heading: "Théâtre et dispute : un parcours",
              paragraphs: [
                "Le parcours « théâtre et dispute » rappelle que le conflit est au cœur du théâtre. Le mot « dispute » a deux sens : la querelle, mais aussi, au sens ancien, le débat d'idées, comme la disputatio des universités médiévales. La pièce de Sarraute tient des deux : c'est une brouille entre amis, et un débat argumenté où chacun défend sa vision du monde.",
                "On peut la rapprocher d'autres disputes de théâtre : les stichomythies de la tragédie classique, les querelles d'amoureux de Molière (Le Dépit amoureux) ou de Marivaux, dont La Dispute (1744) cherche à savoir qui, de l'homme ou de la femme, a été infidèle le premier, ou encore les dialogues du théâtre de l'absurde, où la parole tourne à vide. Chez Sarraute, la dispute n'a besoin d'aucun enjeu extérieur : elle naît de la parole et se nourrit d'elle.",
              ],
            },
          ],
          keyPoints: [
            "Nathalie Sarraute (1900 à 1999) : Tropismes (1939), L'Ère du soupçon (1956), associée au Nouveau Roman.",
            "Tropismes : mouvements intérieurs infimes ; sous-conversation : ce qui se joue sous les paroles.",
            "Pour un oui ou pour un non : publiée en 1982, créée en 1986 ; deux amis, H.1 et H.2, et deux voisins, H.3 et F.",
            "Point de départ : l'intonation de « C'est bien... ça », jugée condescendante par H.2.",
            "La dispute s'élargit en conflit entre deux visions du monde, sans réconciliation véritable.",
            "Dispute : querelle et débat d'idées ; le drame est dans le langage lui-même.",
          ],
          example: {
            statement: "Expliquez pourquoi, dans la pièce de Sarraute, une simple intonation peut suffire à rompre une amitié.",
            solution: [
              "Rappeler les faits : à l'annonce d'un succès de H.2, H.1 a répondu « C'est bien... ça », avec un suspens et un accent sur « ça ».",
              "Analyser la phrase : le sens littéral est une approbation (« c'est bien »), mais la pause et le démonstratif « ça », mis en relief, isolent et rapetissent le succès de H.2. On peut y entendre une supériorité bienveillante, celle de quelqu'un qui juge de haut.",
              "Relier aux tropismes : l'intonation a provoqué chez H.2 un mouvement intérieur de blessure, invisible pour les autres et presque impossible à justifier.",
              "Montrer le conflit : H.1 s'en tient au sens des mots, irréprochables ; H.2 affirme que l'intonation a révélé ce que H.1 pense vraiment de lui. Les deux amis ne parlent plus le même langage.",
              "Réponse : l'intonation fait affleurer un rapport de force caché dans l'amitié ; en le rendant audible, la pièce montre que ce « rien » contient en réalité tout ce qui sépare les deux hommes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez avec précision. a) Comment les personnages sont-ils désignés ? b) Quelle phrase est à l'origine de la dispute ? c) Que reproche H.2 à cette phrase ? d) Quel rôle jouent H.3 et F. ? e) Que signifie le titre ?",
              hint: "Pour le titre, partez du sens courant de l'expression, puis demandez-vous si la pièce confirme ou conteste ce sens.",
              solution: [
                "a) Par des lettres et des chiffres : H.1 et H.2 pour les deux amis, H.3 et F. pour les voisins. L'absence de noms les rend universels.",
                "b) « C'est bien... ça », prononcé par H.1 lorsque H.2 lui parlait d'un succès.",
                "c) Non pas les mots, mais l'intonation : le suspens et l'accent sur « ça » exprimaient, selon lui, de la condescendance.",
                "d) Ces voisins, appelés comme arbitres, ne comprennent pas l'objet de la dispute : ils représentent le regard extérieur, pour qui cette brouille est absurde.",
                "e) L'expression « pour un oui ou pour un non » signifie « pour un rien, sans raison sérieuse ». La pièce la conteste : ce « rien » cache des blessures réelles.",
                "Réponse : des personnages anonymes, une phrase anodine, une intonation blessante, des témoins qui ne comprennent pas, et un titre ironique.",
              ],
            },
            {
              level: 2,
              statement: "Passage d'entraînement, écrit à la manière de la pièce. H.1 : Mais enfin, qu'est-ce que j'ai dit ? Rien. Rien du tout. H.2 : Justement. Ce n'était rien... Rien que deux mots. Et ce silence entre eux. H.1 : Un silence ? Tu ne vas pas me reprocher un silence ! a) Relevez et analysez les négations. b) Quel rôle jouent les points de suspension ? c) Comment ce passage illustre-t-il la sous-conversation ?",
              hint: "Pour a), le mot « rien » n'a pas la même valeur dans chaque réplique : employé seul, avec « ne », ou dans « rien que ». Pensez à la leçon sur la négation restrictive.",
              solution: [
                "a) « Rien. Rien du tout. » : le pronom indéfini « rien » est employé seul, comme une phrase, avec une valeur négative renforcée par « du tout » (négation polémique : H.1 rejette l'accusation). « Ce n'était rien » : négation partielle portant sur la chose (ne... rien). « Rien que deux mots » : la locution « rien que » signifie « seulement » ; elle a une valeur restrictive, comme « ne... que ». « Tu ne vas pas me reprocher » : négation totale (ne... pas), polémique, qui refuse d'avance le reproche.",
                "b) Les points de suspension marquent l'hésitation et la pause ; ils imitent le « silence » dont parle H.2 et rendent visible, dans l'écriture, ce qui se glisse entre les mots.",
                "c) H.1 s'en tient au contenu des paroles (« qu'est-ce que j'ai dit ? ») ; H.2 parle de ce qui se joue dessous, le silence entre deux mots. Le passage oppose ainsi la conversation et la sous-conversation.",
                "Réponse : le jeu sur « rien » montre que, pour H.1, rien n'a été dit, alors que pour H.2, ce rien est tout ; la ponctuation et les négations font entendre la sous-conversation.",
              ],
            },
            {
              level: 3,
              statement: "Dissertation (type bac) : « Dans Pour un oui ou pour un non, la dispute naît-elle vraiment d'un rien ? » Formulez une problématique et proposez un plan détaillé en trois parties, appuyé sur la pièce et sur le parcours « théâtre et dispute ».",
              hint: "Montrez d'abord que la cause semble dérisoire, puis ce que ce « rien » révèle, et enfin comment le théâtre de Sarraute fait de ce rien sa matière même.",
              solution: [
                "Analyse du sujet : « vraiment » invite à dépasser l'apparence ; « un rien » reprend le sens du titre, une cause insignifiante.",
                "Problématique : la querelle de H.1 et H.2 n'est-elle qu'une brouille absurde pour quelques mots, ou révèle-t-elle ce que le langage ordinaire dissimule ?",
                "I. Une dispute en apparence dérisoire : deux mots, « C'est bien... ça », à l'origine de la brouille ; H.1 trouve le grief ridicule ; les voisins appelés comme arbitres ne comprennent rien ; la disproportion entre la cause et l'effet produit un comique certain.",
                "II. Un rien qui révèle tout : l'intonation trahit une condescendance ancienne ; les griefs s'accumulent et opposent deux visions du monde, la réussite sociale et l'attention à la beauté simple ; ce sont les tropismes, mouvements intérieurs réels, qui fondent la dispute.",
                "III. Le théâtre fait de ce rien sa matière : une dramaturgie minimale (personnages anonymes, aucun décor imposé, presque aucune action) où la parole est la seule action ; une dispute qui rejoint la tradition du débat théâtral, de la stichomythie classique à La Dispute de Marivaux ; un spectateur invité à reconnaître ses propres blessures.",
                "Conclusion : la dispute ne naît d'un rien qu'en apparence ; Sarraute montre que ce « rien » est le lieu même où se jouent les relations humaines.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la pièce à ce qu'il désigne.",
            pairs: [
              { left: "H.1", right: "L'ami venu demander des explications" },
              { left: "H.2", right: "L'ami blessé par une intonation" },
              { left: "H.3 et F.", right: "Les voisins appelés comme arbitres" },
              { left: "Tropisme", right: "Mouvement intérieur infime, à la limite de la conscience" },
              { left: "Sous-conversation", right: "Ce qui se joue sous les paroles échangées" },
              { left: "« C'est bien... ça »", right: "La phrase à l'origine de la dispute" },
            ],
          },
          quiz: [
            { q: "Quel recueil de Nathalie Sarraute paraît en 1939 ?", options: ["L'Ère du soupçon", "Enfance", "Tropismes", "Le Planétarium"], answer: 2, why: "Tropismes, son premier livre, explore les mouvements intérieurs qui donnent leur nom au recueil." },
            { q: "Comment les personnages principaux sont-ils nommés ?", options: ["Par leurs prénoms, Pierre et Paul", "Par des lettres et des chiffres, H.1 et H.2", "Par leurs métiers respectifs"], answer: 1, why: "Cet anonymat fait des deux amis des figures universelles, réduites à leurs voix." },
            { q: "Qu'est-ce qui déclenche la dispute ?", options: ["Une dette d'argent jamais remboursée", "Une femme aimée par les deux amis", "Le ton d'une phrase banale", "Une lettre égarée"], answer: 2, why: "C'est l'intonation de « C'est bien... ça » qui a blessé H.2, non le sens des mots." },
            { q: "Que signifie l'expression « pour un oui ou pour un non » ?", options: ["Pour un rien, sans raison sérieuse", "Après un long débat contradictoire", "À la suite d'un vote serré"], answer: 0, why: "L'expression désigne une cause insignifiante ; la pièce montre que ce « rien » cache des blessures réelles." },
            { q: "Qu'appelle-t-on la sous-conversation ?", options: ["Une conversation à voix basse", "Le dialogue entre les deux voisins", "Un monologue intérieur rédigé au passé", "Ce qui se joue sous les paroles"], answer: 3, why: "Sarraute désigne ainsi les mouvements intérieurs que les mots ordinaires recouvrent et que son théâtre rend audibles." },
          ],
          trap: "Prendre le parti de H.1 et juger la dispute absurde : la pièce montre au contraire qu'une intonation peut révéler un rapport de force réel, et il faut analyser ce que ce « rien » contient.",
          method: "Relevez pendant votre lecture toutes les répliques où un personnage commente un mot ou un ton de l'autre : ces moments de parole sur la parole sont le cœur de la pièce et vos meilleurs exemples, pour l'explication comme pour la dissertation.",
        },
      ],
    },
  ],
}
